import { Rating } from '@mui/material';
import React, { useRef } from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Navigate, useNavigate } from 'react-router-dom';


const Cardproduct = (props) => {
    const navigate=useNavigate()
    const image=`${process.env.REACT_APP_APIURL}/assets/jerseysimages/${props.image}`
    return (
       
            <div id='card'  onClick={()=>{
                navigate(`/product/${props.id}`)
            }}>
                <img className='prdctimg' src={props.image} />
                <div className='prdctinfo'>
                    <span className='prdctnamme'>{props.name}</span>
                    <span className='prdctprice'>{props.price}<sup>DH</sup></span>
                    <Rating className='prdctrating' value={props.stars} readOnly />
                    <div id='button2' style={{color:"black",}}> <ShoppingBagIcon id="icnn"  />buy now</div>
         
                </div>

            </div>
           
    
    );
}

export default Cardproduct;
