import { _decorator, Component, Node, AudioSource } from 'cc';
import { BaseUI } from './BaseUI';
const { ccclass, property } = _decorator;

@ccclass('AudioManager')
export class AudioManager extends BaseUI 
{
    public static Instance : AudioManager = null;
    InitParam()
    {
        AudioManager.Instance = this;
    }
    BindUI()
    {

    }
    RegDataNotify()
    {

    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }

    private GetAudioSource(_name : string) : AudioSource
    {
        let targetNode = this.node.getChildByName(_name);
        let audio = targetNode.getComponent(AudioSource);
        return audio;
    }

    public PlayMusicOneShot(_name : string)
    {
        let audio = this.GetAudioSource(_name)
        audio.playOneShot(audio.clip);
    }

    public PlayMusic(_name : string)
    {
        let audio = this.GetAudioSource(_name);
        audio.play();
    }
}

