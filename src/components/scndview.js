import React, { useEffect, useRef } from 'react';
import imageskamlin from '../pictures/index'
import gsap from 'gsap';
import ScrollMagic from 'scrollmagic';

const Scndview = () => {
    const refer = useRef()
    const refer2 = useRef()

    const refer3 = useRef()
    const refer4 = useRef()

    const refer5 = useRef()
    const refer6 = useRef()

    const refer7 = useRef()
    const refer8 = useRef()
    useEffect(() => {
        //Runs only on the first render
        let controller = new ScrollMagic.Controller();
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#cntr", // 'scrollTrigger' should be within an object
                start: "top 100%", // Define the start position
                end: "bottom 80%", // Define the end position
                toggleActions: "play none none reverse",
                // Specify toggle actions
                // Show markers for visualization (optional)
            }
        })
        tl.fromTo("#cntr",{
            opacity:0,y:20,
        },{opacity:1,y:0,duration:2,stagger:{amount:1},ease: "power3.out","clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"})
        if (window.innerWidth >= 1024){
            gsap.to("#cntr", {
                y: -0.3, // Adjust the floating distance
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut"
              });
            
        }
      }, []);



    return (

        <div id='scnd'>
            <div id='cntr' onMouseEnter={() => {
                    refer.current.style.transform = 'scale(1.1)';
                    refer2.current.style.transition = "width 0.5s ease"
                    refer2.current.style.width = '30%';



                }}
                    onMouseLeave={() => {
                        refer.current.style.transform = 'scale(1)';

                        refer2.current.style.borderBottom = 'none';
                        refer2.current.style.width = '0%';
                    }}
>
                <img ref={refer} src={imageskamlin.imgman} />
                <div 
                    id='overay'>
                    <p style={{ cursor: "pointer" }} >RETRO JERSEYS</p>
                    <div ref={refer2} style={{ height: "1%", backgroundColor: "white" }}></div>
                </div>
            </div>

           
            <div id='cntr'
                onMouseEnter={() => {
                    refer3.current.style.transform = 'scale(1.1)';
                    refer4.current.style.transition = "width 0.5s ease"
                    refer4.current.style.width = '30%';



                }}
                onMouseLeave={() => {
                    refer3.current.style.transform = 'scale(1)';

                    refer4.current.style.borderBottom = 'none';
                    refer4.current.style.width = '0%';
                }}
            >
                <img ref={refer3} src={imageskamlin.imgmaroc} />
                <div
                    id='overay'>
                    <p style={{ cursor: "pointer" }} >MOROCCAN JERSEYS</p>
                    <div ref={refer4} style={{ height: "1%", backgroundColor: "white" }}></div>
                </div>
            </div>
            <div id='cntr'
                onMouseEnter={() => {
                    refer5.current.style.transform = 'scale(1.1)';
                    refer6.current.style.transition = "width 0.5s ease"
                    refer6.current.style.width = '30%';



                }}
                onMouseLeave={() => {
                    refer5.current.style.transform = 'scale(1)';

                    refer6.current.style.borderBottom = 'none';
                    refer6.current.style.width = '0%';
                }}
            >
                <img ref={refer5} src={imageskamlin.imgmilito} />
                <div
                    id='overay'>
                    <p style={{ cursor: "pointer" }} >LEGANDARY JERSEYS</p>
                    <div ref={refer6} style={{ height: "1%", backgroundColor: "white" }}></div>
                </div>
            </div>

            <div id='cntr'>
                <img ref={refer7} src={imageskamlin.imgronaldo} />
                <div onMouseEnter={() => {
                    refer8.current.style.transition = "width 0.5s ease"
                    refer7.current.style.transform = 'scale(1.1)';
                
                    refer8.current.style.width = '30%';



                }}
                    onMouseLeave={() => {
                        refer7.current.style.transform = 'scale(1)';

                       
                        refer8.current.style.width = '0%';
                    }}

                    id='overay'>
                    <p style={{ cursor: "pointer" }} >NATIONAL TEAMS JERSEYS</p>
                    <div id='ttt' ref={refer8} style={{ height: "1%", backgroundColor: "white" ,transition:"0.5s ease"}}></div>
                </div>
            </div>
           

        </div>
    );
}

export default Scndview;
