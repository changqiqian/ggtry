#!/usr/bin/python
#coding:utf-8
import os
import commands
import os.path
import hashlib
import time
import sys
import shutil
import string
import re
import subprocess
import json
import requests
from ftplib import FTP

remoteIP = "54.169.147.71"
remoteRootFolderName = "WinPoker"
#写在热更文件mainifest中的 请求远端存放热更文件的URL地址'http://XXXX.com/pokerlifeAlphaNew/'
urlToWriteInMainifest = 'http://'+remoteIP+'/'+remoteRootFolderName+'/'
#存放游戏配置 版本号文件的地址
filePathToGameConfig = 'assets/scripts/GameConfig.ts'
#Creator引擎命令行编译工具文件地址
filePathToCreatorCompileTools = '/Applications/CocosCreator/Creator/3.5.2/CocosCreator.app/Contents/MacOS/CocosCreator'
#要进行编译的项目工程地址
pathProjectToCompile = '../Cowboy2/'
#存放生成热更新文件的地址
pathToSaveHotUpdate = '../Cowboy2/HotRelease/'+remoteRootFolderName+'/'
#COCOS项目中存放porject.manifest热更文件的地址
filePathToProjectManifest = 'assets/'
#构建生成的资源目录
SrcPath = 'build/android/assets/'

gVeriosnRemoteUrl = "http://"+remoteIP+"/"+remoteRootFolderName+"/version.manifest"
gVersion = "1.0.001"

#存储旧的上一版的版本号，更新目录里的mainifest用
global gameVersionOld
#存储最近的版本号
global gameVersion


def copyFiles(sourceDir,  targetDir):
    for file in os.listdir(sourceDir):
        if file.startswith('.'):
            continue
        sourceFile = os.path.join(sourceDir,  file)
        targetFile = os.path.join(targetDir,  file)
        # print "s:" + sourceFile
        # print "t:" + targetFile
        if os.path.isfile(sourceFile):
            if not os.path.exists(targetDir):
                print "make:" + targetDir
                os.makedirs(targetDir)
            open(targetFile, "wb").write(open(sourceFile, "rb").read())
        if os.path.isdir(sourceFile):
            copyFiles(sourceFile, targetFile)

def delFiles(dir):
    if not os.path.exists(dir):
        os.makedirs(dir)
    shutil.rmtree(dir)
    os.mkdir(dir)


#新的直接从远端服务器识别版本
def managerVersion():
    with open(filePathToGameConfig, 'r') as f:
        lines=[]
        for line in f.readlines():
            lines.append(line)
    f.close()
    with open(filePathToGameConfig, 'w') as f:
        for line in lines:
            if 'Version =' in line:
                versionStr = gVersion
                print('线上版本号为：' + versionStr)
                versionNum = int(versionStr.replace('.', ''))
                versionNum = versionNum + 1
                
                vStr = list(str(versionNum))
                vStr.reverse()
                # print(vStr)
                mylist = re.split('\.', versionStr)
                # print(mylist)
                mylen = [len(i) for i in mylist]
                # print(mylen)
                mylen.reverse()
                mylen.pop()
                # print(mylen)

                curridx = 0
                for i in mylen:
                    vStr.insert(i + curridx, '.')
                    curridx = i + 1

                # print(vStr)
                vStr.reverse()
                finalStr = ''.join(vStr)
                print('将要更新的版本号为：' + finalStr)
                global gameVersion 
                gameVersion = finalStr
                putIn = "    public static Version = \"" + finalStr + "\"" + '\n'
                f.write('%s' %putIn)
            else:
                f.write('%s' %line)
    f.close()

    

if __name__ == "__main__":
    
    global gameVersionOld
    global gameVersion

    #获取最新版本
    response = requests.get(gVeriosnRemoteUrl)
    dictRes = json.loads(response.text)
    gVersion = str(dictRes["version"])
    #gVersion = '1.0.0'
    print('目前远端的版本为: ' + gVersion)
    gameVersionOld = gVersion

    #版本号自动叠加
    print('处理版本号...')
    managerVersion()
    print('版本号处理完成!')
    print('将要升级的版本为：' + gameVersion)


    #调用creator命令编译构建
    print('开始构建cocos工程')
    configPathParam = '"configPath=/Users/yamiwang/Cowboy2/build/cocos.compile.config.json"'
    buildParam = filePathToCreatorCompileTools + ' --project ' +  pathProjectToCompile + ' --build ' + configPathParam
    os.system(buildParam)
    print('构建完成！')

    # #清空旧的热更文件
    print('清空旧的热更文件')
    delFiles(pathToSaveHotUpdate)
    print('清空完毕！')

    print('生成热更版本文件...')
    versionFileParam = 'node version_generator.js -v ' + gameVersion + ' -u ' + urlToWriteInMainifest + " -s " + SrcPath + " -d " + pathToSaveHotUpdate
    os.system(versionFileParam)
    print('生成热更版本文件完成！')

    print('拷贝最新版本信息到cocos工程')
    shutil.copy( pathToSaveHotUpdate + 'project.manifest', filePathToProjectManifest)
    shutil.copy( pathToSaveHotUpdate + 'version.manifest', filePathToProjectManifest)
    print('拷贝最新版本信息到项目，完成！')

    print('把构建生成的资源拷贝到HotRelease目录')
    copyFiles('build/android/assets/', pathToSaveHotUpdate)
    print('拷贝资源到相关目录完成！')
    
    print('更新完毕！！！' + '版本号:' + gameVersion)

    
