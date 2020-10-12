import React from 'react';
import {
    FacebookShareButton,
    TelegramShareButton,
    TwitterShareButton,
    VKShareButton,
    WhatsappShareButton,
    FacebookIcon,
    TelegramIcon,
    TwitterIcon,
    VKIcon,
    WhatsappIcon
  } from "react-share";

  import style from './Share.module.css';


const share = (props) => (
    <div className={style.Icons}> 
        <FacebookShareButton 
            url={props.link} 
            hashtag="#MemeLab"
            quote={"I've created a meme using MemeLab!"}>
            <FacebookIcon size={36} round/>
        </FacebookShareButton>

        <TwitterShareButton
             url={props.link}
             hashtags={['#MemeLab', '#CreateMemes']}>
            <TwitterIcon size={36} round/>
        </TwitterShareButton>

        <TelegramShareButton
            url={props.link}>
            <TelegramIcon size={36} round/>
        </TelegramShareButton>

        <WhatsappShareButton
            url={props.link}>

            <WhatsappIcon size={36} round/>
        </WhatsappShareButton>

        <VKShareButton
            url={props.link}>
            <VKIcon size={36} round/>
        </VKShareButton>
    

    </div>
    
);


export default share;