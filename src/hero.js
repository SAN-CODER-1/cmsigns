
import { useNavigate } from "react-router-dom";
import './hero.css';
import { ScratchCard } from 'next-scratchcard';
import { easeOut, motion} from "framer-motion"
import { useState } from "react";


const Hero=()=>{
  const navigate = useNavigate();

  const goToservice = () => {
    navigate("/service");
  };
  const goTocontact = () => {
    navigate("/contact");
  };
  let [before,setbefore]=useState("flex")
  let [after,setafter]=useState("none")
const handlecomplete=()=>{
  setbefore("none")
  setafter("flex")
}

  return (
   <div className="Hero">
      <div className="Hero-cont-desktop">
        <motion.p 
        initial={{opacity:0,y:20}}
        whileInView={{opacity:1,y:0,}}
        transition={{duration:0.5,ease:easeOut,delay:0.3}}
        >

      <h1 style={{display:before}}>Transforming Spaces with Style and Precision!</h1>
      <h1 className="before" style={{display:after}}>Transforming Spaces with Style and Precision!</h1>
       

        </motion.p>
      </div>

  <div className="scratch-cont-desktop">
    <motion.div
          initial={{opacity:0,y:0}}
          animate={{opacity:1,y:20,}}
          transition={{duration:0.5,ease:easeOut,delay:0.3}}
          >
  
    <ScratchCard  

        style={{borderRadius:'20px'}}
        height={405}
        width={300} 
        onComplete={handlecomplete}
        image={ './imgs/badceiling.jpg'} 
        finishPercent={50} 
        brushSize={100}
          >
      <img

        height={405}
        width={300}
        style={{borderRadius:'20px',marginTop:'20px'}}
        src='./imgs/superceiling.jpg' alt='sss'
      />
    </ScratchCard>
    </motion.div>
  </div>
  <div className="scratch-cont-android">
    <motion.div
          initial={{opacity:0,y:0}}
          animate={{opacity:1,y:20,}}
          transition={{duration:0.5,ease:easeOut,delay:0.3}}
          >
  
    <ScratchCard  

        style={{borderRadius:'20px'}}
        height={350}
        width={250}
        image={ './imgs/badceiling.jpg'} 
        finishPercent={50} 
        brushSize={100}
        
          >
      <img

        height={350}
        width={250}
        style={{borderRadius:'20px',marginTop:'20px'}}
        src='./imgs/superceiling.jpg' alt='sss'
      />
    </ScratchCard>
    </motion.div>
  </div>
  

  <div className='herobutton1'>
  <motion.div style={{margin:'0px'}} 
        initial={{opacity:0,x:-30}}
        whileInView={{opacity:1,x:0}}
         transition={{duration:0.7,delay:0.1}}>
  <button onClick={goTocontact}>CONTACT NOW</button>
  </motion.div>
  </div>
  <div className='herobutton2'>
      <motion.div 
     style={{margin:'0px'}} 
     initial={{opacity:0,x:-30}}
     whileInView={{opacity:1,x:0}}
      transition={{duration:0.7,delay:0.1}}>
        <button onClick={goToservice} >OUR SERVICE</button>
      </motion.div>
   </div>

   </div>
  );

}
export default Hero;
    