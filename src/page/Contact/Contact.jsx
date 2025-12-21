import './Contact.css'

///icons
import { LuMessageSquare } from "react-icons/lu";
import { FaMobileAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaMapLocationDot } from "react-icons/fa6";

export default function Contact () {
    return(
        <>
            <div className="contact">
                <button className='btn1'> <span><LuMessageSquare/></span> Get In touch </button>
                <h1> Contact </h1>
                <div className="contact-top">
                    <div className="contact-box1">
                        <div><span> <FaMobileAlt/> </span></div>
                        <div> <h4> PHONE </h4> <p> +91 9361367593 </p> </div>
                    </div>
                    <div className="contact-box2">
                        <div><span> <TfiEmail/> </span></div>
                        <div> <h4> EMAIL </h4> <p> aacharanjith55@... </p> </div>
                    </div>
                    <div className="contact-box3">
                        <div><span> <FaMapLocationDot/> </span></div>
                        <div> <h4> LOCATION </h4> <p> Chennai </p> </div>
                    </div>
                </div>
                <div className="contact-bottom">
                    <h2> Send Message </h2>
                    <input type="text" placeholder='Your name' className='input-1'/>
                    <input type="email" placeholder='Email address' className='input-2'/><br />
                    <input type="text" placeholder='Subject' className='input-3'/><br />
                    <textarea name="text" id="" placeholder='Your message here...' className='input-4'></textarea><br />
                    <button> Submit Message </button>
                </div>
            </div>  
        </>
    )
}