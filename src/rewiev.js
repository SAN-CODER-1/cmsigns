
import reviewcont from './reviewcont'
import './review.css';
import { useEffect, useRef } from "react";
function Reviews() {
    // const
    const leftRef = useRef(null);
  const rightRef = useRef(null);


  useEffect(() => {
    const cloneContent = (ref) => {
      if (ref.current) {
        const duplicate = ref.current.innerHTML;
        ref.current.innerHTML += duplicate; // Duplicate for seamless scrolling
      }
    };

    cloneContent(leftRef);
    cloneContent(rightRef);
  }, []);
  return (

    <>
    <div className='testi'>

      <h1>Reviews</h1>
    <div className="testimonials-container">
      {/* Left Scrolling Testimonials */}
      <div className="testimonials-scroll left-scroll">
        <div className="testimonials" ref={leftRef}>
          {reviewcont.map((review, index) => (
          
              
          <div key={index} className="testimonial">
 
 <div style={{color:"black"}}>

<h3 style={{color:"black"}}>{review.name}</h3>
<p>{review.review}</p>
<p>⭐ {review.stars} / 5</p>
</div>
 
</div>


))}
        </div>
      </div>

      {/* Right Scrolling Testimonials */}
      <div className="testimonials-scroll right-scroll">
        <div className="testimonials" ref={rightRef}>
          {reviewcont.map((review, index) => (
            <div key={index} className="testimonial">
            
              
 

            <div style={{color:"black"}}>

<h3 style={{color:"black"}}>{review.name}</h3>
<p>{review.review}</p>
<p>⭐ {review.stars} / 5</p>
</div>
 
</div>

           
          ))}
        </div>
      </div>
    </div>
              </div>

    </>
       

  );
}
export default Reviews;