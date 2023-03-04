import React from "react";

 function Contact() {
  return (
<>
{/* < div className="location">
           
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116921.24905235684!2d86.92423505624912!3d23.683501352138535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f71f0ea1022529%3A0xf888f7e7fd11cefe!2sAsansol%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1664858288196!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              
           </div> */}
           
           <section className="contact-us" id="contact">
           <div className="row"/>
               
             <div className="contact-col">
               <div>
                   <i className="fa fa-home"></i>
         
                 
                   <pre>
       A.B Road, Shantimoy Building
       Asansol,West Bengal</pre>
              
                 </div>
                  <div>
                   <i className="fa fa-phone"></i>
                 
                 
                   <pre>
       +91 9382030289
       Conect with me</pre>
                 
                 </div>
                  <div>
                   <i className="fa fa-envelope-o"></i>
                 
                 
                   <pre>
       koushikmajiy2@gmail.com
       Email us your query</pre>
       <a href="images/my-cv.pdf" download class="btn5">Download Cv</a>
                
                 </div>
               </div>
               
                <div className="comment-box">
                   <h3>Contact me</h3>
                    <form action="https://formspree.io/f/xzbwggyn"
       method="POST" className="comment-form">
                       <input type="text" placeholder="Enter Name" required autocomplete="off" name="name"/>
                       <input type="email" placeholder="Enter your Email" autocomplete="off" name="email"/>
                       <textarea rows="5" placeholder="your comment" autocomplete="off"  name="text area"></textarea>
                       <button type="submit" className="hero-btn red btn"><span></span><h3>SUBMIT</h3></button>
                       </form>
               </div> 
               {/* </div> */}
           
           </section>
</>
  )
}
export default Contact;
