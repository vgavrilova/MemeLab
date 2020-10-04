import React, { useState, useEffect } from 'react';

import style from './MemeGen.module.css';
import Buttons from '../../components/Controls/Buttons';
import Input from '../../components/UI/Input/Input';


const MemeGen = (props) => {
    const [memes, setMemes] = useState([]);
    const [memeIndex, setMemeIndex] = useState(0);

    useEffect(() => {
            fetchMemes();
            
        }, []);
      
    const fetchMemes = async () => {
          const response = await fetch('https://api.imgflip.com/get_memes');
          const data = await response.json();
          const fetchedMemes = data.data.memes;
          console.log(fetchedMemes);
          shuffleMemes(fetchedMemes);
          setMemes(fetchedMemes);
      
        }

    const showNext = () => {
        const index = memeIndex + 1;
        setMemeIndex(index);
    }
    
    const showPrevious = () => {
        // prevent changing index to the negative number
        if(memeIndex === 0){
            return;
        }
        const index = memeIndex - 1;
        setMemeIndex(index);
    }  

    const shuffleMemes = (array) => {
        // Randomize memes while loading the page
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };


    return (
        <div className={style.Wrapper}>
             <div className={style.Meme}>
            
                <button 
                    className={[style.arrowLeft, style.Arrows].join(' ')}
                    onClick={showPrevious}>
                        <i className="fas fa-angle-left"></i>
                </button>
                <button 
                    className={[style.arrowRight, style.Arrows].join(' ')}
                    onClick={showNext}>
                        <i className="fas fa-angle-right"></i>
                </button>
                
                {memes.length ? <img src={memes[memeIndex].url} alt='meme'></img> : null}
                
           
            </div>
            <Buttons />
            <div className={style.InputFields}>
                <Input />
                <Input />
            </div>
            

        </div>
       

    );
  

};


export default MemeGen;