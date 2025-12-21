import './About.css'

///Assets
import pic from '../../assets/Images/about.jpeg';

///icons
import { LuUserRound } from "react-icons/lu";
import { CiMedal } from "react-icons/ci";
import { TbFileCv } from "react-icons/tb";

export default function About() {
    const bioLeft = [
        { label: "Date of birth", value: "March 18 2003" },
        { label: "Email", value: "aacharanjith55@..." },
        { label: "Skill", value: "Frontend Developer" }
    ];

    const bioRight = [
        { label: "Phone", value: "9361367593" },
        { label: "City", value: "Chennai" },
        { label: "Language", value: "Tamil, English" }
    ];


    ////////////////////////////////


    const educationData = [
        {
            period: "2021 - 2024",
            title: "Bachelor of Art's and Science",
            p1: "Bachelor of Commerce with Computer Applications",
            p2: "Bharathiar University - Coimbatore",
            p3: "Gained core knowledge in electronics and communication with practical experience. Built strong technical skills useful for a career in technology."
        },
        {
            period: "2018 - 2019",
            title: "SSLC",
            p1: "High School (Class 10)",
            p2: "State Board of Tamil Nadu",
            p3: "Completed Class 10 (SSLC) from Tamil Nadu State Board. Built foundational knowledge across core subjects in high school."
        },
        {
            period: "2019 - 2021",
            title: "HSC",
            p1: "Higher Secondary (Class 11 & 12)",
            p2: "State Board of Tamil Nadu",
            p3: "Completed Classes 11 & 12 specializing in computer applications. Covered programming basics, software tools, and IT fundamentals."
        },
        {
            period: "4 Months",
            title: "Certification",
            p1: "Front-end Developer",
            p2: "Code99 IT Academy, Chennai",
            p3: "Completed comprehensive training in front-end development. Gained hands-on experience with modern web design and frameworks."
        }
    ];


    return (
        <>
            <div className="about">
                <button className='btn1'><span><LuUserRound /></span> Who am I ? </button>
                <h1> About Me </h1>
                <div className="about-infobox">
                    <div className="about-left">
                        <img src={pic} alt="" />
                    </div>
                    <div className="about-right">
                        <div className='bio'>
                            <h2> Bio </h2>
                            <p> I am Frontend developer passionate about building responsive and user-friendly web application I focus on performance, accessibility, and seamless user experience. I continuously learn and implement the latest technologies to enhance web development. </p>
                        </div>
                        <div className="bio-info">
                            <div className='bio-info-left'>
                                {bioLeft.map((item, index) => (
                                    <div key={index}>
                                        <p>{item.label}</p>
                                        <span>{item.value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className='bio-info-right'>
                                {bioRight.map((item, index) => (
                                    <div key={index}>
                                        <p>{item.label}</p>
                                        <span>{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button class="bookmarkBtn">
                            <a href='https://drive.google.com/file/d/1Xm_hZsF02t177ncVgtN2-2lZe70-IFJh/view?usp=sharing' class="IconContainer">
                                <TbFileCv/>
                            </a>
                            <a href='https://drive.google.com/file/d/1Xm_hZsF02t177ncVgtN2-2lZe70-IFJh/view?usp=sharing' class="text"> Resume </a>
                        </button>

                    </div>
                </div>
                <button className='btn1 btn2'> <span> <CiMedal /> </span> My Education ! </button>
                <div className="education-box">
                    {educationData.map((edu, index) => (
                        <div className="box" key={index}>
                            <button>{edu.period}</button>
                            <h2><strong>{edu.title}</strong></h2>
                            <p className='p1'>{edu.p1}</p>
                            <p className='p2'>{edu.p2}</p>
                            <p className='p3'>{edu.p3}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}