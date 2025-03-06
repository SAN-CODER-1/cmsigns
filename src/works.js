import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion} from "framer-motion"
import products from "./service/servicecont";
import './work.css';

const  Works = () => {
  const videoRef = useRef(null);
  const[indexe,setindexe]=useState(0) 

  useEffect(()=>{
  const interval=  setInterval(() => {
      setindexe((indexe)=>(indexe+1)%products.length)
    }, 6000);
    return()=>clearInterval(interval)
  },[])

 
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play();
      
      const playReverse = () => {
        const reversePlayback = () => {
          if (video.currentTime > 0) {
            video.currentTime -= 0.05;
            requestAnimationFrame(reversePlayback);
          } else {
            video.play();
          }
        };
        reversePlayback();
      };
      
      video.addEventListener("ended", playReverse);
      return () => video.removeEventListener("ended", playReverse);
    }
  }, []);
  const navigate = useNavigate();

  const goToservice = () => {
    navigate("/service");
  };

  return (
    <>

    <div className="work">
    <h1>Works</h1>
    <div className="workcontainer">
      <video className="vedio" ref={videoRef} width="500" height="300" autoPlay   muted >
        <source src="./imgs/VID_20250303193638.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    <div className='workbutton1'>
      {/* <motion.div 
      style={{margin:'0px'}} 
      initial={{opacity:0,y:30}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.7,delay:0.1}}>

        <button onClick={handleVideoClick}>{isReversed?"VIEW INTERIOR":"VIEW EXTERIOR"}</button>

      </motion.div> */}
   </div>
   <div>
   </div>
   <div className="slide">
   <motion.div  key={indexe}>     
<motion.h1 initial={{opacity:0,y:20}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.7,delay:0.1}} >{products[indexe].name}</motion.h1>
<motion.img initial={{opacity:0,y:20}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.7,delay:0.3}} src={products[indexe].img} alt="" />
<motion.p initial={{opacity:0,y:20}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.7,delay:0.5}}>{products[indexe].description}</motion.p>
<motion.button initial={{scale:0.8,opacity:0}}
               whileInView={{scale:1,opacity:1}}
               transition={{duration:0.7,delay:0.7}}
              onClick={goToservice} >BOOK NOW</motion.button>
      </motion.div>

  </div>
    </div>
    </div>
    </>
  );
};

export default Works;
