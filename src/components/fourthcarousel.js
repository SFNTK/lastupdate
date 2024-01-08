import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Fourthcarousel = (props) => {
    const image=`${props.image}`
    useEffect(() => {
        //Runs only on the first render
        console.log(`${process.env.REACT_APP_APIURL}/assets/jerseysimages/${props.image}`)
      }, []);
   const navigate=useNavigate()
    return (

        <div className='item' onClick={()=>{
navigate(`/product/${props.id}`)
        }}>
            <img className='img1' src={image} />
            <p  className='pdng title1'>
                {props.title}
            </p>
            <span className='pdng'>
                <Rating name="read-only" value={props.stars} precision={0.25} readOnly />
            </span>
            <span className='pdng price1' >{props.price}<sup>DH</sup></span>
        </div>
    );
}

export default Fourthcarousel;
