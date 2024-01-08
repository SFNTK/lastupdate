import React, { useEffect, useRef } from 'react';
import imageskamlin from'../pictures/index'
import gsap from 'gsap';
const Third = () => {
    const ref1=useRef()
    const ref2=useRef()
    const ref3=useRef()
    const ref4=useRef()

    useEffect(() => {
        //Runs only on the first render
        let tls = gsap.timeline({scrollTrigger:{
            trigger: ".over h2",
            start: "top 100%",
            end:"bottom 60%",
            toggleActions: "play none none reverse",
        }})
      tls.fromTo(".over h2",{
        'clip-path': "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        y:40
      },{
        "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        y:0,duration:2,
        ease: "power3.out",stagger:{amount:.5}
  
      })

     
      }, []);
    
    return (
        <div id='thrr'>
            <div id='contaie'>
                <div id='contentt' onMouseEnter={()=>{
                    ref2.current.style.transform="scale(1.3)";
                    ref1.current.style.backgroundColor="rgb(0,0,0,0.6)"
                }}
                onMouseLeave={()=>{ ref2.current.style.transform="scale(1)"
                ref1.current.style.backgroundColor="rgb(0,0,0,0.4)"}}>
                    <div className='over' ref={ref1}>
                        <h2>HIGH QUALITY JERSEYS</h2>
                    </div>
                    <img ref={ref2} className='tswira' src={imageskamlin.imgmessi} />
                   
                </div>
                <div id='immm'  onMouseEnter={()=>{
                    ref4.current.style.transform="scale(1.3)";
                    ref3.current.style.backgroundColor="rgb(0,0,0,0.6)"
                }}
                onMouseLeave={()=>{ ref4.current.style.transform="scale(1)"
                ref3.current.style.backgroundColor="rgb(0,0,0,0.4)"}}>
                <div className='over' ref={ref3}>
                <h2>PERFECT PRICES</h2>
                </div>
                <img ref={ref4} className='tswira' src={imageskamlin.imgcris} />
                    
                </div>
            </div>
        </div>

    );
}

export default Third;
