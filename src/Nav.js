import {motion} from "framer-motion"
import './nav.css';
function Nav() {
  return (
    <>
    <div className="App-nav">
    <motion.div initial={{opacity:0}}animate={{opacity:1}} transition={{duration:1.5}}>CM SIGNS</motion.div>
    <div className="Nav-item">
    <motion.div initial={{opacity:0}}animate={{opacity:1}} transition={{duration:1.5}}>

    </motion.div>
    </div>
    </div>

    </>

  );
}
export default Nav;