import React from 'react';
import { Link } from 'react-router-dom'
import '../../css/Home/AboutDesign.css';


export default class AboutDesign extends React.Component {
    render(){

        return (
        <div className="aboutDevelopment" id="aboutDevelopment">
          <div className="Develop" >
          </div>
          <div className="aboutDesignInfo">
                  <p className="aboutDesignInfoTitle">ABOUT DEVELOPMENT</p>
                  <p className="aboutDesignInfoDes"> During the 2-years developing studying period, I have a good command of front-end development
                    technologies, such as HTML, CSS, DOM, JavaScript, React, React Native and React Bootstrap. These skills will help me to build real
                    websites or mobile applications for our clients.
                    I also have learned some programming language such as Swift, Kotlin, c#, Java. Our program help us
                    get skills to develop iOS apps, Android apps and UWP apps. </p>

                  <Link to='/developmentWork' className="homeWorksViewMore">View More →</Link> 
          </div>
      </div>
          
        );
    }

}