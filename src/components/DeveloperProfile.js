import React, { useState } from 'react';
import './DeveloperProfile.css';
import { FaLongArrowAltLeft } from 'react-icons/fa'
import { BsDashLg } from 'react-icons/bs'


const DeveloperProfile = () => {

    const [showFullPara, setFullParaTongle] = useState(false)
    const paragraphContent = showFullPara ? (
        <>
            <p className="full-paragraph-layout">
                I find immense satisfaction in crafting visually appealing user interfaces. <br />
                My expertise spans a range of technologies including HTML, CSS, JavaScript, React.js, and Redux.
                I've honed my abilities through hands-on experiences and internships.<br />
                Crafting user-friendly digital experiences, building reusable components, and collaborating
                with talented teams have been my avenues of growth.

                In addition to my technical skills, I'm proficient in modern development tools such as Git and
                well-versed in popular Integrated Development Environments (IDEs) like Visual Studio Code and WebStorm.<br />
                This efficiency allows me to maximize my productivity, ensuring top-notch results.
            </p>

            <div className="caption">
                <BsDashLg /> "CAPABLE MINDS OFTEN REMAIN UNSEEN TREASURES, <br />
                WAITING FOR THE CHANCE TO SHINE"
            </div>
        </>
    ) : (
        <>
            <p>
                I find immense satisfaction in crafting visually appealing user interfaces.My expertise
                spans a range of technologies including HTML, CSS, JavaScript, React.js, and Redux.
                I've honed my abilities through hands-on experiences and internships.<br />
                Crafting user-friendly digital experiences, building reusable components, and
                collaborating with talented teams have been my avenues of growth.
            </p>
            <div onClick={() => setFullParaTongle(true)}>
                Learn More
            </div>
        </>
    );

    return (
        <>
            <div className={`parent ${showFullPara ? "column-layout" : ""}`}>
                {showFullPara ?
                    <div onClick={() => setFullParaTongle(false)}><FaLongArrowAltLeft className="bold-icon" /></div>
                    : <h3> <BsDashLg /> Profession</h3>}
                <h2> As A Developer</h2>
                <p>{paragraphContent}</p>
            </div>
        </>
    )
}
export default DeveloperProfile;