import React, { useState, useEffect } from 'react';

import style from './MemeGen.module.css';
import Buttons from '../../components/Controls/Buttons';
import Input from '../../components/UI/Input/Input';
import Modal from '../../components/UI/Modal/Modal';
import MemeGallery from '../../components/MemeGallery/MemeGallery';


const MemeGen = (props) => {
    const [memes, setMemes] = useState([]);
    const [memeIndex, setMemeIndex] = useState(0);

    const [allTemplates, setAllTemplates] = useState(false);
    const [captions, setCaptions] = useState([]);

    useEffect(() => {
            fetchMemes();
            
        }, []);

    useEffect(() => {
        if(memes.length){
            setCaptions(Array(memes[memeIndex].box_count).fill(''));
        }

    }, [memeIndex, memes]);

      
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

    const showTemplates = () => {
        setAllTemplates(true);
  
    }
    const closeTemplates = () => {
        setAllTemplates(false);
  
    }

    const filledCaption = (event, index) => {
        // grab a text onchange
        const caption = event.target.value || '';

        setCaptions(
            // if the index in the captions array is equal to the index 
            // of the caption we're typing in
            // return the text
            // if not, leave the caption at this index as it was
            captions.map((cap, i) => {
                if(i === index){
                    return caption;
                } else {
                    return cap;
                }
            })
        );

       // console.log(captions);

    }
       
    const renderInputs = captions.map((caption, index) => 
            <Input key={`Caption${index}`} changed ={filledCaption} index={index}/>
        );
    

    return (
        <div className={style.Wrapper}>
            <Modal show={allTemplates} closeTemplates={closeTemplates}>
                <MemeGallery 
                    memes={memes} 
                    clickedBtn={closeTemplates} 
                    setIndex={setMemeIndex} 
                    />
            </Modal>
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
            <Buttons showTemplates={showTemplates}/>
            <div className={style.InputFields}>
                { renderInputs }
            </div>
            

        </div>
       

    );
  

};

export default MemeGen;