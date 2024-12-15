import React from "react";
import "./About.css"
import about_img from "../../assets/about.png"
import play_icon from "../../assets/play-icon.png"




const About = ({setPlayState}) => {
    return(
        <div className="about">
            <div className="about-left">
            <img src={about_img} alt="" className="about-img" />
            <img src={play_icon} alt="" className="play-icon" onClick={()=> {setPlayState(true)}}/>
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>NURTURING Tomorrow's Leaders Today</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa a dolorem excepturi quaerat incidunt inventore omnis ipsam aperiam rerum natus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus dignissimos delectus libero sunt architecto nostrum nemo ad autem, nesciunt perspiciatis aliquam doloremque unde eius neque adipisci laboriosam corporis velit obcaecati.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci cumque quia debitis voluptas ipsa temporibus sit, libero mollitia atque dolore distinctio eligendi fuga earum iusto minima rem facilis? Quod laudantium placeat aperiam cumque assumenda officia omnis inventore impedit debitis explicabo.</p>
            </div>
        </div>
    )
}

export default About