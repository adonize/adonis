import React from 'react';
import { Link } from 'react-router-dom';

function ExerciseCardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              src={props.src}
              alt=""
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
          <button>edit</button>
        </Link>
      </li>
    </>
  );
}

export default ExerciseCardItem;
