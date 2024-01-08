import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Rating from '@mui/material/Rating';
import axios from "axios"
import Fourthcarousel from './fourthcarousel';
import images from '../pictures/index'
const Fourth = () => {
    const [cont, setcont] = useState(<div></div>)
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    useEffect(() => {
        //Runs only on the first render
        try {
            axios.get(`http://127.0.0.1:3001/jersey/getlatestjerseys`).then(res => {
                console.log(res)
                return res.data
            }
            ).then(data => {
                const values = data.data.map((dt) => {
                    return <Fourthcarousel image={dt.images[0]} title={dt.name} price={dt.prices[0].price} stars={dt.rating} id={dt._id} />
                })
                setcont(values)


            }).catch(err => {
                console.log(err.message)
            })
        } catch (error) {
            console.log("try catch error" + error)

        }

    }, []);
    return (
        <div id='crsl'>
            <h2 id='ttlnew'>NEWEST </h2>
            <Carousel
                responsive={responsive}
                showDots={true}
                draggable={true}
                swipeable={true}
                infinite={true}

                autoPlaySpeed={1000}
                keyBoardControl={true}

                transitionDuration={500}
                containerClass="carousel-container"



                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"


            >

               
                <Fourthcarousel image={images.milancaro} title={"milan jersey 2022"} price={220} stars={5} id={1} />
                <Fourthcarousel image={images.inter2022} title={"inter milan jersey 2021"} price={320} stars={4} id={2} />
                <Fourthcarousel image={images.real2002} title={"REAL MADRID 2002"} price={440} stars={5} id={3} />
                <Fourthcarousel image={images.imgmaroc} title={"MOROCCO jersey RETRO 1998"} price={520} stars={3} id={4} />
                <Fourthcarousel image={images.napoli} title={"NAPOLI 2023 JERSEY"} price={120} stars={2} id={5} />
            </Carousel>
        </div>
    );
}

export default Fourth;
