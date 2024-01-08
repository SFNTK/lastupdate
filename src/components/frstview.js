import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import ScrollMagic from 'scrollmagic';
const Frstview = () => {
    const el=useRef()
    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ["Nostalgic Treasures Await!", "Classic Jersey Vault!", "Heritage Cache!","Vintage Football Trove","winning collection!"], // Strings to display
          // Speed settings, try diffrent values untill you get good results
          startDelay: 300,
          typeSpeed: 200,
          backSpeed: 200,
          backDelay: 170,
          loop: true
        });
        let controller = new ScrollMagic.Controller();
        let tls = gsap.timeline({scrollTrigger:{
          trigger: "#bigboss",
          start: "top 100%",
          end:"bottom 60%",
          toggleActions: "play none none reverse",
      }})
    tls.fromTo("#tpoverlay h2",{
      'clip-path': "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      y:40
    },{
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      y:0,duration:2,
      ease: "power3.out",

    },"frstview")
    tls.fromTo("#tpoverlay p",{
      'clip-path': "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      y:40
    },{
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      y:0,duration:2,
      ease: "power3.out",

    },"frstview")
        // Destropying
    
      }, []);
    return (
        <div id='bigboss' style={{ zIndex:998,width: "100%", height: "100vh", position: "relative" }}>
        <div id='overlay'></div>
        <div id='imagee'></div>
        <div id='tpoverlay'>
            <h2>Reviving Football Classics!</h2>
            <p>Score iconic nostalgia: Vintage football jerseys for your <span ref={el}></span></p>
        </div>

    </div>
    );
}

export default Frstview;
