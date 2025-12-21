import './Home.css'

///// Icons
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
    return(
        <>
            <div className="home" id="home">
                <div className="homewhite">
                    <h2 data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500"> Hello ! </h2>
                    <h1 data-aos="fade-up"
                        data-aos-duration="3000"> I am S.Ranjith <br /> <span className='span'> Front-end Developer </span> </h1>
                    <ul className="wrapper">
                        <li className="icon facebook">
                            <a href='https://www.linkedin.com/in/ranjith55/'><span><FaLinkedinIn /></span></a>
                            <span className="tooltip">LinkedIn</span>
                        </li>

                        <li className="icon twitter">
                            <span><FaXTwitter /></span>
                            <span className="tooltip">Twitter</span>
                        </li>

                        <li className="icon instagram">
                            <span><FaInstagram /></span>
                            <span className="tooltip">Instagram</span>
                        </li>

                        <li className="icon git">
                            <a href='https://github.com/ranjithaacha93'><span><FaGithub /></span></a>
                            <span className="tooltip">GitHub</span>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </>
    )
}