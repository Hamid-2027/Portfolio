import React from 'react';
import ProjectBox from '../Components/ProjectBox';
import NewsletterImage from '../images/NewsletterImage.png';
import RogfreeImage from '../images/RogfreeImage.png';
import TindogImage from '../images/TindogImage.png';
import WigglesImage from '../images/WigglesImage.png';
import Slider from './Slider';

const Projects = () => {
  const divStyle = {
    marginTop:'80px',
    border: '3px solid white',
    padding: '2px',
    // overflow:'hidden',
   
  };
  return (
    <div>
      <div style={divStyle}>
      <Slider/>
      </div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={WigglesImage} projectName="Wiggles" />
        <ProjectBox projectPhoto={NewsletterImage} projectName="Newsletter" />
        <ProjectBox projectPhoto={RogfreeImage} projectName="RogFree" />
        <ProjectBox projectPhoto={TindogImage} projectName="Tindog" />
      </div>

    </div>
  )
}

export default Projects