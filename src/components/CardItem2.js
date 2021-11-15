import React from 'react';
import { Link } from 'react-router-dom';

function CardItemq(props) {
  return (
    <>
      <li className='cards__item2'>
        <Link className='cards__item__link2' to={props.path}>
          <figure className='cards__item__pic-wrap2' data-category={props.label}>
            <img
              className='cards__item__img2'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info2'>
            <h2 style={{"margin-bottom":'20px'}}>{props.poste}</h2>
            <h5 className='cards__item__text2'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItemq;
