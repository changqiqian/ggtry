import { _decorator, Component, Node, AudioSource } from 'cc';
import { BaseUI } from './BaseUI';
const { ccclass, property } = _decorator;

@ccclass('AudioManager')
export class AudioManager extends BaseUI 
{
    public static Instance : AudioManager = null;
    mCurrentBGM : AudioSource = null;
    mCurrentEffect : AudioSource = null;
    mMuteBGM : boolean = false;
    mMuteEffect  : boolean = false;
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

    public PlayEffectOneShot(_name : string)
    {
        if(this.mMuteEffect)
        {
            return;
        }
        this.mCurrentEffect = this.GetAudioSource(_name)
        this.mCurrentEffect.playOneShot(this.mCurrentEffect.clip);
    }

    public PlayBGMMusic(_name : string , _loop : boolean = false)
    {
        this.mCurrentBGM = this.GetAudioSource(_name);
        this.mCurrentBGM.loop = _loop;
        this.mCurrentBGM.play();
    }

    public StopBGMMusic()
    {
        if(this.mCurrentBGM != null)
        {
            this.mCurrentBGM.stop();
        }
    }

    public RewindBGMMusic()
    {
        if(this.mCurrentBGM != null)
        {
            this.mCurrentBGM.play();
        }
    }

    public MuteBGM(_value : boolean)
    {
        this.mMuteBGM = _value;
        if(_value)
        {
            this.StopBGMMusic();
        }
        else
        {
            this.RewindBGMMusic();
        }
    }

    public MuteEffect(_value : boolean)
    {
        this.mMuteEffect = _value;
        if(_value)
        {
            if(this.mCurrentEffect != null)
            {
                this.mCurrentEffect.stop();
            }
        }
    }

    public MuteAll(_value : boolean)
    {
        this.MuteBGM(_value);
        this.MuteEffect(_value);
    }
}

