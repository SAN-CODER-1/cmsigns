import {motion} from "framer-motion"
import { Link} from "react-router-dom";
import './contact.css';

function Contact() {
  const copytext=(text)=>{
    navigator.clipboard.writeText(text)
    alert('text copy!'+text)
  }
          //yes
  return (
  
    <>
    <div className='contactcontainer'>
      <h1 className='contacth1'>Contact</h1>
    <div className='contactcontainerdiv'>
    <form className='contactform' action="submit">
    <form
  action="https://formspree.io/f/xldgvqwg"
  method="POST"
>
     < motion.div 
     
      initial={{opacity:0,y:30}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.7,delay:0.7}}>
        //yes

  <label>
    Your email:
    <input type="email" name="email" placeholder='youremail@email.com'/>
  </label>
  <label>
    Your message:
    <textarea name="message" placeholder='your message'></textarea>
  </label>

      </motion.div>
      <motion.button type="submit" initial={{scale:0.8,opacity:0}}
               whileInView={{scale:1,opacity:1}}
               transition={{duration:0.7,delay:0.7}}
               style={{marginLeft:'20px'}}>SEND</motion.button>

</form>
    </form>
    <form action="submit" className='contactform'>
    <motion.div 
      initial={{opacity:0,y:30}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.7,delay:0.9}}>


      <label htmlFor="Ph number">Our ph number </label>
      <input type="tle" defaultValue={'987654321'} readOnly    onClick={()=>copytext('987654321')}  /><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"/></svg>
      <label htmlFor="Ph number">Our Email</label>
      <input type="email" defaultValue={'cmsigns@gmail.com '} readOnly   onClick={()=>copytext('cmsigns@gmail.com')}  /><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"/></svg>
      <label htmlFor="socialmedia">Follow us on </label>
      <div className="socialmedia">
      <Link to="/"><img style={{height:"50px"}} src="./imgs/insta.webp" alt="" /></Link> 
      <Link to="/"> <img style={{height:"50px"}} src="./imgs/whatsappicon.webp" alt="" /></Link> 
      <Link to="/"> <img style={{height:"50px"}} src="./imgs/Facebookicon.png" alt="" /></Link>        
      </div>
      </motion.div>
    </form>
    </div>
    </div>
    </>
  );
}

export default Contact;