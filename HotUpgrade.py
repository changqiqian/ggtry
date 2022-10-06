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
#保存增量的mainifest文件地址
pathToSaveDebugMainifest = 'mainifest/alphaMainifest'
#写在热更文件mainifest中的 请求远端存放热更文件的URL地址'http://XXXX.com/pokerlifeAlphaNew/'
urlToWriteInMainifest = 'http://13.229.222.39/remote-assets2/'
#存放游戏配置 版本号文件的地址
filePathToGameConfig = 'assets/scripts/GameConfig.ts'
#Creator引擎命令行编译工具文件地址
filePathToCreatorCompileTools = '/Applications/CocosCreator/Creator/3.5.2/CocosCreator'
#要进行编译的项目工程地址
pathProjectToCompile = '../Pokerlife'
#编译项目所需参数
configPara = '"platform=android;debug=false;md5Cache=false;"'
#存放生成热更新文件的地址
pathToSaveHotUpdate = '../Pokerlife/build/zh/hotUpdate'
#生成热更配置文件Manifest js工具脚本地址
filePathToCreateManifestTool = '../Pokerlife/version_generator.js'
#需要对编译后的代码资源进行md5加密的文件地址
pathToAfterCompileToMD5 = '../Pokerlife/build/zh/jsb-default'
gameResDir = '../Pokerlife/build/zh/jsb-default/res'
gameSrcDir = '../Pokerlife/build/zh/jsb-default/src'
#项目中存放porject.manifest热更文件的地址
filePathToProjectManifest = '../Pokerlife/assets/resources/'


#每一版的热更目录名称
hotUpdateName = 'pokerlifeAlphaNew'
#存放热更生成的配置文件地址
pathToSaveHotUpdateMainifestVersion = '../Pokerlife/build/zh/hotUpdate/version.manifest'
pathToSaveHotUpdateMainifestProject = '../Pokerlife/build/zh/hotUpdate/project.manifest'


gVeriosnRemoteUrl = "http://13.229.222.39/remote-assets2/version.manifest"
gVersion = "1.0.001"

#存储旧的上一版的版本号，更新目录里的mainifest用
global gameVersionOld
#存储最近的版本号
global gameVersion

def createVersion(url):
    global gameVersion
    cmd = subprocess.Popen('sh createVersion.sh' + ' ' + filePathToCreateManifestTool + ' ' + gameVersion + ' ' + url + ' ' + pathToAfterCompileToMD5 + ' ' + pathToSaveHotUpdate + ' ' + urlToWriteInMainifest, stdin=subprocess.PIPE, stderr=sys.stderr, close_fds=True, stdout=sys.stdout, universal_newlines=True, shell=True, bufsize=1)
    cmd.communicate()
    return cmd.returncode

def compileCreator():
    cmd = subprocess.Popen('sh compile.sh' + ' ' + filePathToCreatorCompileTools + ' ' + pathProjectToCompile + ' ' + configPara, stdin=subprocess.PIPE, stderr=sys.stderr, close_fds=True, stdout=sys.stdout, universal_newlines=True, shell=True, bufsize=1)
    cmd.communicate()
    return cmd.returncode



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
                putIn = "gc.version = \"" + finalStr + "\"" + '\n'
                f.write('%s' %putIn)
            else:
                f.write('%s' %line)
    f.close()

    

if __name__ == "__main__":
    
    global gameVersionOld
    global gameVersion

    #获取最新版本
    # response = requests.get(gVeriosnRemoteUrl)
    # dictRes = json.loads(response.text)
    # gVersion = str(dictRes["version"])
    # print('目前远端的版本为: ' + gVersion)
    # gameVersionOld = gVersion
    gVersion = '1.0.0'
    print('目前远端的版本为: ' + gVersion)
    gameVersionOld = gVersion

    #版本号自动叠加
    print('处理版本号...')
    managerVersion()
    print('版本号处理完成!')
    print('将要升级的版本为：' + gameVersion)


    #调用creator命令编译构建
    # print('开始构建cocos工程')
    # compileCreator()
    # print('构建完成！')

    # #清空旧的热更文件
    # print('清空旧的热更文件 build/zh/hotUpdate/')
    # delFiles(pathToSaveHotUpdate)
    # print('清空完毕！')

    # print('生成热更版本文件...')
    # urlToWriteInMainifestFinal = urlToWriteInMainifest + hotUpdateName + gameVersion + '/'
    # print '写入mainifest的热更地址: ' + urlToWriteInMainifestFinal
    # createVersion(urlToWriteInMainifestFinal)
    # print('生成热更版本文件完成！')

    # print('更新本地基准版本信息...')
    # if not os.path.exists(pathToSaveDebugMainifest + '/' + gameVersion):
    #     os.makedirs(pathToSaveDebugMainifest + '/' + gameVersion)
    # copyFiles(pathToSaveHotUpdate, pathToSaveDebugMainifest + '/' + gameVersion)
    # print('更新本地基准版本信息完成！')

    # #提前放好一个mainifest文件，防止报错
    # #将debug版本的project.mainifest文件拷贝到项目中
    # #防止打包到时候正式版与测试版来回切换，导致热更地址不对的问题
    # print('拷贝最新版本信息到cocos工程')
    # shutil.copy( pathToSaveDebugMainifest + '/' + gameVersion + '/project.manifest', filePathToProjectManifest)
    # #shutil.copy( pathToSaveDebugMainifest + '/' + gameVersion + '/version.manifest', filePathToProjectManifest)
    # print('拷贝最新版本信息到项目，完成！')

    # print('把res和src文件夹从build/zh/jsb-default/拷贝到/build/zh/hotUpdate/...')
    # copyFiles(gameResDir, pathToSaveHotUpdate + '/res')
    # copyFiles(gameSrcDir, pathToSaveHotUpdate + '/src')
    # print('拷贝资源到相关目录完成！')
    
    # print('上传文件中...')
    

    
    # finalRootFolder = pathToSaveHotUpdate + "/remote-assets" 
    # versionFolder = finalRootFolder +"/" +hotUpdateName + gameVersion
    # os.makedirs(finalRootFolder)
    # os.makedirs(versionFolder)
    # copyFiles(pathToSaveHotUpdate + '/res', versionFolder + '/res')
    # copyFiles(pathToSaveHotUpdate + '/src', versionFolder + '/src')
    # shutil.copy( pathToSaveHotUpdate + '/project.manifest', finalRootFolder)
    # shutil.copy( pathToSaveHotUpdate + '/version.manifest', finalRootFolder)
    # shutil.copy( pathToSaveHotUpdate + '/project.manifest', versionFolder)
    # shutil.copy( pathToSaveHotUpdate + '/version.manifest', versionFolder)


    print('更新完毕！！！' + '版本号:' + gameVersion)

    
