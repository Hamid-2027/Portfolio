import React from 'react';
import ProjectBox from '../../Components/ProjectBox';
import NewsletterImage from '../../images/NewsletterImage.png';
import RogfreeImg from "../../images/RogfreeImage.png"
import TindogImage from '../../images/TindogImage.png';
// import WigglesImage from '../..images/WigglesImage.png';
import Slider from '../Slider';
import '../Projects/ProjectsStyles.css';

const Projects = () => {
  // const divStyle = {
  //   marginTop:'80px',
  //   border: '3px solid white',
  //   padding: '2px',
  //   // overflow:'hidden',
    
   
  // };
  return (
    <div 
    //  style={divStyle}
      className='divStyle'>
      {/* <div> */}
      {/* <Slider/> */}
      {/* </div> */}
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={NewsletterImage} projectName="Wiggles" />
        <ProjectBox projectPhoto={NewsletterImage} projectName="Newsletter" />
        <ProjectBox projectPhoto={ RogfreeImg } projectName="RogFree" />
        <ProjectBox projectPhoto={TindogImage} projectName="Tindog" />
      </div>

    </div>
  )
}

export default Projects