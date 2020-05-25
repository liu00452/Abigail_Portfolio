import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Home/AboutDesign.css';
import DesignImage from '../../img/design.png';



export default class AboutDesign extends React.Component {
    render(){

        return (
        <div className="aboutDesign" id="aboutDesign">
          <div className="aboutDesignInfo">
                  <p className="aboutDesignInfoTitle">ABOUT DESIGN</p>
                  <p className="aboutDesignInfoDes">As an UI designer, I particularly focus on how the product is laid out. When I design an App or
                    website, I am typically responsible for creating a cohesive style guide and ensuring that a
                    consistent design language is applied across the product. As for particular screens, I will consider
                    some details which could make it more professional and creative. As an UX designer, I am primarily concerned with how the product feels. I need to ensure that the
                    product logically flows from one step to the next. According to my psychological background, I can
                    do the users’ research, conduct in-person user tests to observe behaviors and then analysis the
                    results to create the “best” user experience.  </p>

                  <Link to='/work' className="homeWorksViewMore">View More →</Link> 
          </div>
          
          <div className="Design" >
          </div>
      </div>
          
        );
    }

}