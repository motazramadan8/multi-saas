import React,{useRef , useEffect, useState} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar , FreeMode, Pagination } from "swiper";
import axios from "axios";


import './home.css'


const Ourwork = () => {

    const [projects, setProject] = useState([]);
    const form = useRef();
        useEffect(() => {
          axios.get("data.json")
          .then((res) => {
            setProject(res.data.projects)
          })
          },[]) 

  return (
    <div>
         <div className="ddiiv">
         <h1 style={{fontSize: '50px' , fontWeight: '700' , marginLeft: '20px'}}>Explore our <span style={{color: '#EB6149'}}>templates</span>                     <img className='mmg' width="50px" src="images/tittleshape1659158089.png" alt="" /> </h1>
          <br />
          <br />
          <br />
          </div>
          <div>
          <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
          modules={[FreeMode, Pagination]}
        >
        {projects.map((project) => (
            <SwiperSlide style={{height: '400px' , borderRadius: '10px'}} key={project.id}><a href={project.link} target="_blank"><img src={project.photo} alt="" /></a></SwiperSlide>
          ))}
      </Swiper>
          </div>
    </div>
  )
}

export default Ourwork