import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Aux from '../../hoc/Aux';
import Loader from '../UI/Loader/Loader';
import Share from '../UI/Share/Share';

import style from './Generated.module.css';


const Generated = (props) => {
    const history = useHistory();
    const location = useLocation();

    // get the serch query -- a url with the generated meme
    const urlImg = new URLSearchParams(location.search).get('url');

    const downloadFile = e => {
        e.preventDefault();
        console.log(e.target.href);
        fetch(e.target.href, {
        method: "GET",
        headers: {}
        })
        .then(response => {
            response.arrayBuffer().then(function(buffer) {
            const url = window.URL.createObjectURL(new Blob([buffer]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "generatedMeme.jpg"); 
            document.body.appendChild(link);
            link.click();
            });
        })
        .catch(err => {
            console.log(err);
        });
      }

    return (
        <div className={style.Wrapper}>
            {/* check whether the url exists and render the image
            (everything after && will be rendered) */}
            {urlImg ? 
                <Aux>
                    <button
                            className={[style.Button, style.MakeMemes].join(' ')}
                            onClick={() => {history.push('/create_meme')}}>Make Memes
                    </button>
                    <img className={style.Generated} src={urlImg} alt="generated" />
                        <Share link={urlImg}/>
                        <a
                            className={style.Button}
                            href={urlImg}
                            download
                            onClick={e => downloadFile(e)}>Download Meme
                        </a>

                </Aux>
                : <Loader />
                
                }
        </div>
    );

};


export default Generated;