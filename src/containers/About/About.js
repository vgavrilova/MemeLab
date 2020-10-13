import React, { useEffect, useState } from 'react';
import Loader from '../../components/UI/Loader/Loader';
import { useHistory } from 'react-router-dom';

import style from './About.module.css';
import btnStyle from '../../components/Controls/Buttons.module.css';


const About = (props) => {
    const [memes, setMemes] = useState([]);

    const history = useHistory();

    useEffect(() => {
        fetchMemes();
        
    }, []);

    const fetchMemes = async () => {
        const response = await fetch('https://api.imgflip.com/get_memes');
        const data = await response.json();
        // choose 15 most popular memes
        const fetchedMemes = data.data.memes.slice(0,15);;
        //console.log(fetchedMemes);
        setMemes(fetchedMemes);
    
      }

    const chosenMeme = (index) => {
        //console.log(index);
        history.push(`/create_meme?index=${index}`);
    }

    const start = () => {
        history.push('/create_meme');
    }

    return (
    <div>
        <h1 className={style.Head}>MemeLab</h1>
        <div className={style.Para}>
        <p >This is a free Meme Generator which offers users 100 most popular memes to be creative with. </p>
        <p>Just press the button and start making memes!</p>
        <button className={btnStyle.btn} style={{width: '30%'}} onClick={start}>Get started 
        <span><i className="fas fa-arrow-right"></i></span></button>
        </div>

        <h3 className={style.Title}>Most popular templates</h3>
        <div className={style.Memes}>
            {memes.length ? 
                memes.map((meme, index) => 
                    <img className={style.Meme} 
                        src={meme.url} 
                        alt='meme' 
                        key={meme.id}
                        onClick={() => chosenMeme(index)}></img>
                    
                
                        )
                : <Loader />}
        </div>
    </div>
    );
};



export default About;