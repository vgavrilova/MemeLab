import React from "react";

import style from "./MemeGallery.module.css";
import Aux from "../../hoc/Aux";
import CloseBtn from "../UI/CloseBtn/CloseBtn";

const memeGallery = (props) => {
  const setMemeIndex = (index) => {
    props.setIndex(index);
    props.clickedBtn();
  };

  const showMemes = props.memes.map((meme, index) => {
    //console.log(meme.id)
    return (
      <img
        src={meme.url}
        alt="meme"
        key={meme.id}
        onClick={() => setMemeIndex(index)}
      />
    );
  });

  return (
    <Aux>
      <CloseBtn clicked={props.clickedBtn} />
      <h3 className={style.Headline}>Choose a template:</h3>
      <div className={style.Gallery}>{showMemes}</div>
    </Aux>
  );
};

export default memeGallery;
