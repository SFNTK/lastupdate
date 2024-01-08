import React, { useEffect, useRef, useState } from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';

const Fifth = () => {
    const [hvr,sethvr]=useState("0")
    const navigate=useNavigate()
    useEffect(() => {
        //Runs only on the first render
        let tlabout = gsap.timeline({
            scrollTrigger: {
                trigger: "#abt", // 'scrollTrigger' should be within an object
                start: "top 100%", // Define the start position
                end: "bottom 80%", // Define the end position
                toggleActions: "play none none reverse",
                // Specify toggle actions
                // Show markers for visualization (optional)
            }
        })
        tlabout.fromTo("#abt p",{
            opacity: 0,
            
            y:70
        }, {
            opacity: 1,
        
            "clip-path": " polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", // Skew the text
     
            y: 0,
        duration:4,
        ease: "power3.inOut"
        })
       
      }, []);
 
    return (
        <div id='ffth'>
            <div id='abt'>
                <h2>ABOUT US</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <div id='button' onClick={()=>{
                    navigate("/products/retro?filter=all")
                }} onMouseEnter={()=>{
                   hvr=="0"?sethvr("10"):sethvr("0")

                }} 
                onMouseLeave={()=>{
                    hvr=="0"?sethvr("10"):sethvr("0")
                }}> <ShoppingBagIcon id="icnn"  /> SHOP NOW</div>
            </div>
         
                
                
                <div id='overl'></div>
            
        </div>
    );
}

export default Fifth;
