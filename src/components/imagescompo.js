import React, { useEffect, useState } from 'react';
import images from '../pictures/index' 
import gsap from 'gsap';
const Imagescompo = ({images,principle}) => {
    const [mainimage,setmain]=useState(`${process.env.REACT_APP_APIURL}/assets/jerseysimages/${principle}`)
    const [mini,setmini]=useState(!images?[]:images)
    const [loading,setloading]=useState(true)
    const [imgs,setimg]=useState()
    useEffect(() => {
        
      
       /* if(mini.length>0){
            setloading(true)
            const value=mini.map(dt=>{
            return   <img className='miniimages' onClick={()=>{
                setmain(`${process.env.REACT_APP_APIURL}/assets/jerseysimages/${dt}`)
            }} src={`${process.env.REACT_APP_APIURL}/assets/jerseysimages/${dt}`} />
           
        })
        setimg(value)
       
        }
        */
       console.log(principle)
        setloading(false)
      }, [mini]);
      useEffect(() => {
        //Runs only on the first render
        let tlsproductinfo = gsap.timeline({scrollTrigger:{
            trigger: ".imagescompo",
            start: "top 100%",
            end:"bottom 60%",
            toggleActions: "play none none reverse",
        }})
      tlsproductinfo.fromTo(".imagescompo",{
        'clip-path': "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        y:40
      },{
        "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        y:0,duration:2,
        ease: "power3.out",
        stagger:{amount:1}
  
      })

    }, []);
    return (
        <div className='imagescompo'>
{loading==true?      <span class="loader" ></span>:<div> <img id='mainimg' src={principle}/>
          <div id='miniimg'>
          {imgs}
          </div>
          </div>}


        </div>
    );
}

export default Imagescompo;
