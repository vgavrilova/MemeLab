import React, { useState, useEffect } from 'react';

import style from './MemeGen.module.css';
import Buttons from '../../components/Controls/Buttons';
import Input from '../../components/UI/Input/Input';
import Modal from '../../components/UI/Modal/Modal';
import MemeGallery from '../../components/MemeGallery/MemeGallery';
import ArrowBtns from '../../components/UI/ArrowBtns/ArrowBtns';


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
          //console.log(fetchedMemes);
          shuffleMemes(fetchedMemes);
          setMemes(fetchedMemes);
      
        }

    const showNext = () => {
        if(memeIndex === 99){
            alert('Unable to skip forwards!');
            return;
        }
        const index = memeIndex + 1;
        setMemeIndex(index);
    }
    
    const showPrevious = () => {
        // prevent changing index to the negative number
        if(memeIndex === 0){
            alert('Unable to skip backwards!');
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

    const generateMeme = () => {
       const meme = memes[memeIndex];
       const formData = new FormData();  

       formData.append('username', 'vallleriel');
       formData.append('password', 'Amp789Fn');
       formData.append('template_id', meme.id);

       captions.forEach((cap, index) => {
           formData.append(`boxes[${index}][text]`, cap);
       });

       const postMeme = async () => {
            const postData = await fetch('https://api.imgflip.com/caption_image', {
            method: 'POST',
            body: formData
            });
            const response = await postData.json();
            console.log(response);
            
       }
       postMeme();

    }
       
    const renderInputs = captions.map((caption, index) => 
            <Input key={`Caption${index}`} changed ={filledCaption} index={index}/>
        );
    



    return (
        <div className={style.Wrapper}>
            <h1>Meme Generator</h1>
            <Modal show={allTemplates} closeTemplates={closeTemplates}>
                <MemeGallery 
                    memes={memes} 
                    clickedBtn={closeTemplates} 
                    setIndex={setMemeIndex} 
                    />
            </Modal>
             <div className={style.Meme}>
                <ArrowBtns showNext={showNext} showPrevious={showPrevious}/>
                
                {memes.length ? <img src={memes[memeIndex].url} alt='meme'></img> : null}
        
            </div>

            <Buttons showTemplates={showTemplates} generate={generateMeme}/>
            <div className={style.InputFields}>
                { renderInputs }
            </div>
            

        </div>
       

    );
  

};

export default MemeGen;