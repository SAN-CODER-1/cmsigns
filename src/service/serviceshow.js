import {  useState } from "react";
import products from "./servicecont"
// import {motion} from "framer-motion"
import { Link } from "react-router-dom";
import './serviceshow.css';
// import axios from "axios"
function Serviceshow() {
  const[displyservice,setdisplyservice]=useState(0) 
   const[disply1,setdisply1]=useState(true)
   const[disply2,setdisply2]=useState(false)
  const handleclick=(index)=>{
    setdisplyservice(index)
    setdisply1(false)
    setdisply2(true)
  }
  const handlewrong=(index)=>{
    setdisplyservice(index)
    setdisply2(false)
    setdisply1(true)
  }
  // const [jsdata,setjsData]=useState([])

  // useEffect(()=>{
  //  axios.get("https://api.jsonbin.io/v3/b/67be6a29e41b4d34e49c796d ", {
  //     headers: { "X-Master-Key": "$2a$10$mgRD9mgSN8Qw1OBKjkymw.QL2OvG./pgbD1eipW1slTgaISyt78KS" },
  //   })
  //   .then((response) => setjsData(response.data.record))
  //   .catch((error) => console.error("Error fetching data:", error));
  // },[])

  return (
    <>
     {/* <div>
      <h1>JSONBin Data:</h1>
      {jsdata ? <pre>{JSON.stringify(jsdata, null, 2)}</pre> : <p>Loading...</p>}
    </div> */}
    <div className="servicecontainer" style={{display:`${disply1?'flex':'none'}`}}>
      <Link to="/" className="back"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg></Link>
   {products.map((products,index)=>(
    <div className='service' key={index}>
      <img src={products.img} alt="" />
       <h2>{products.name}</h2>
        <p>{products.description}</p>
        <button onClick={()=>handleclick(index)}>VIEW MORE</button>
    </div>
   ))}
    </div>
    <div className="displyservicecontainer" style={{display:`${disply2?'flex':'none'}`}}>

      <div className="container1">
      <i onClick={()=>handlewrong(displyservice)}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></i>
    <h1 key={displyservice}>{products[displyservice].name}</h1>
    <img src={products[displyservice].img} alt="" />
    <p>{products[displyservice].description}</p>
    <button>BOOK NOW</button>

      </div>
      <div className="container2">
  <div>
    <h2>materials:</h2>
      {products[displyservice].materials.map((material,index)=>(
        <ul key={index}>
          <li>{material}</li>
        </ul>
      ))}
  </div>   
  <div>
  <h2>ideal for:</h2>
      {products[displyservice].ideal_for.map((ideal_for,index)=>(
        <ul key={index}>
          <li>{ideal_for}</li>
        </ul>
      ))}
    
  </div>   
  <div>
  <h2>installation process:</h2>
      {products[displyservice].installation_process.map((installation_process,index)=>(
        <ul key={index}>
          <li>{installation_process}</li>
        </ul>
      ))}
  </div>
  <div>
  <h2>material processing:</h2>
      {products[displyservice].material_processing.map((material_processing,index)=>(
        <ul key={index}>
          <li>{material_processing}</li>
        </ul>
      ))}
  </div>
  <div>
  <h2>review:</h2>
      {products[displyservice].reviews.map((reviews,index)=>(
        <ul key={index}>
          <h3>{reviews.user}</h3>
          <p>{reviews.rating}</p>
          <p>{reviews.comment}</p>
        </ul>
      ))}
  </div>
  
      </div>
    </div>
    </>
  );
}

export default Serviceshow;