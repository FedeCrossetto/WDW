import React from "react";
import { bgCard, avatarCard } from "../../assets/images";
import "./imagecard.scss";

const ImageCard = (props) => {

  return (
    <div className="card" key={props.hashTag}>
        <img src={props.img} className="card__image" alt="..." />
        <div className="card-body">
          <div>
            <img src={avatarCard} className="card-title card__avatar" alt="..."/>
            <h4 className="card-text card-title card__title">{props.title}</h4>
            <h6 className="card__subtitle">{props.hashTag}</h6>
          </div>
      </div>
    </div>
  );
};
export default ImageCard;