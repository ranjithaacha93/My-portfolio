import './Project.css'

/////icons
import { FiBox } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { BsAlexa } from "react-icons/bs";

export default function Project () {
    return(
        <>
            <div className="project">
                <button className='btn1'> <span><FiBox/></span> Projects </button>
                <div className="project-boxs">
                    <div className="project-box backimg1">
                        <div className='project-top'></div>
                        <div className='project-bottom'>
                            <h3> Movie Website <span> Javascript </span> </h3>
                            <button className='project-btn1'> <span><BsAlexa/></span> <a href="#">View Project</a> </button>
                            <button className='project-btn2'> <span><FaGithub/></span> Source </button>
                        </div>
                    </div>
                    <div className="project-box backimg2">
                        <div className='project-top'></div>
                        <div className='project-bottom'>
                            <h3> CORMO <span> React.js </span> </h3>
                            <button className='project-btn1'> <span><BsAlexa/></span> <a href="#">View Project</a> </button>
                            <button className='project-btn2'> <span><FaGithub/></span> Source </button>
                        </div>
                    </div>
                    <div className="project-box backimg3">
                        <div className='project-top'></div>
                        <div className='project-bottom'>
                            <h3> Etech <span> React.js </span> </h3>
                            <button className='project-btn1'> <span><BsAlexa/></span> <a href="#">View Project</a> </button>
                            <button className='project-btn2'> <span><FaGithub/></span> Source </button>
                        </div>
                    </div>
                    <div className="project-box backimg4">
                        <div className='project-top'></div>
                        <div className='project-bottom'>
                            <h3> Course <span> HTML, CSS </span> </h3>
                            <button className='project-btn1'> <span><BsAlexa/></span> <a href="#">View Project</a> </button>
                            <button className='project-btn2'> <span><FaGithub/></span> Source </button>
                        </div>
                    </div>
                    <div className="project-box backimg5">
                        <div className='project-top'></div>
                        <div className='project-bottom'>
                            <h3> Course <span> HTML, CSS </span> </h3>
                            <button className='project-btn1'> <span><BsAlexa/></span> <a href="#">View Project</a> </button>
                            <button className='project-btn2'> <span><FaGithub/></span> Source </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}