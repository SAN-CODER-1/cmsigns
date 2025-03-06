import {motion,useTransform,useScroll} from "framer-motion"
import './prework.css';
import {useRef} from "react";
function Prevwork() {
    const images=[
      {
        name: "Wooden Modular Kitchen",
        img: './imgs/H0e86a069c3d04a0e8381734875ffb67aL.jpg_720x720q50.avif',
        description: "Custom wooden modular kitchen setups for efficient and stylish cooking spaces."
      },
      {
        name: "Wooden Modular Kitchen",
        img: './imgs/acpfalls.jpg',
        description: "Custom wooden modular kitchen setups for efficient and stylish cooking spaces."
      },
      {
        name: "Wooden Modular Kitchen",
        img:  './imgs/cnc.jpg',
        description: "Custom wooden modular kitchen setups for efficient and stylish cooking spaces."
      },
      {
        name: "Wooden Modular Kitchen",
        img:  './imgs/acp.jpg',
        description: "Custom wooden modular kitchen setups for efficient and stylish cooking spaces."
      },
      {
        name: "Wooden Modular Kitchen",
        img:     './imgs/ACP-False-Ceiling-.jpg',
        description: "Custom wooden modular kitchen setups for efficient and stylish cooking spaces."
      },
      {
        name: "Wooden Modular Kitchen",
        img:  './imgs/acp.jpg',
        description: "Custom wooden modular kitchen setups for efficient and stylish cooking spaces."
      },

   
   
    ]



    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
    return (
        <> 
        <div className='prevworkdesktop'>
        <h1 className="workh1">Gallery</h1>

        </div>

      <div style={{display:"flex",marginTop:"300px",position: "sticky", top: "0px",marginBottom:"100px"}}>

      <section ref={targetRef} style={{ position: "relative", height: "400vh",}}>
        <div style={{ display: "flex", height: "100vh", alignItems: "center", overflowX: "hidden",maxWidth:'100%' }}>
          <motion.div style={{ display: "flex", gap: "7rem", x }}>
            <h1 style={{display: "flex",color:"black", marginTop:"310px",width: "5000px",height: "100px",fontSize:"110px",fontFamily:"inherit",overflowX: "hidden"}}>DESIGNING DREAMS , SHAPING STUNNING SPACES !</h1>
            {images.map((images,index) => (
              <div key={index} style={{ position: "relative", height: "300px",width: "400px", overflow: "hidden" }}>
                      <motion.div 
      style={{margin:'0px'}} 
      initial={{opacity:0,y:50}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.7,delay:0.1}}>
            <img   style={{
              height: "300px", width: "400px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "absolute",
              inset: 0,
              transition: "transform 0.3s",
            }}src={images.img} alt="" />
                <div style={{ position: "absolute", marginLeft:'10px', display: "grid",  zIndex: 10 }}>
                  <p style={{
                    textShadow:' 1px 6px 11px rgba(0,0,0,0.86)',
                    marginTop:"200px",
                    fontSize: "20px",
                    textTransform: "uppercase",
                    color: "white",
                  }}>
                    {images.name}
                  </p>
                  <p style={{
                    textShadow:' 1px 5px 11px rgba(0,0,0,0.86)',
                    color: "white",
                  }}>
                    {images.description}
                  </p>
                </div>
                    </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      </div>
     
      
    

    </>

  );
}
export default  Prevwork;