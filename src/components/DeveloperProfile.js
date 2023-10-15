import React, { useState } from 'react';
import './DeveloperProfile.css';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { BsDashLg } from 'react-icons/bs';
import { FiArrowUpLeft, FiArrowDownRight } from 'react-icons/fi';


const DeveloperProfile = () => {

    const [showFullPara, setFullParaTongle] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const details = [
        {
            subheading: 'About Me',
            title: 'Niyati Garg',
            description: (<>{showFullPara ? (
                <>
                    <p className="full-paragraph-layout">
                        In 2020, while I was still in college, I embarked on a transformative journey
                        into web development. During this time, I had a profound realization about the
                        importance of forging a unique path, especially considering my diverse academic
                        background, which includes fascinating subjects like physical education, fashion studies,
                        and home science, all of which align with my interests and combined with tech.<br />

                        I was deeply committed to improving my skills and continuously pushing my limits.
                        I viewed each day as a new chance for personal growth and tackled it with enthusiasm.
                        This journey has been transformative.<br />

                        As of the present, I am pursuing a Master's degree in Computer Applications from
                        Amity University Online. My mission has transcended the pursuit of mere employment;
                        it now encompasses a burning desire to expand my knowledge and skill set, not only
                        in the professional arena but also in my personal life. For me, it is not just about
                        writing code; it is about creating a harmonious and fulfilling lifestyle.<br /><br />

                        On a personal note, I'm a devoted food enthusiast who takes delight in savoring
                        the rich flavors life has to offer. My love for music knows no bounds, and I
                        find solace and inspiration in every melody. I'm also a dedicated blogger, sharing
                        my thoughts and experiences with the world. Furthermore,
                        I'm a zealous fitness enthusiast, perpetually striving to attain higher levels of health
                        and vitality in life.<br /><br />

                        So, as you explore this digital realm that I've carved out for myself, you will discover
                        the amalgamation of my love for code and my zest for life. Thank you for embarking on this
                        exciting journey with me. Your presence here is genuinely appreciated, and I'm looking forward
                        to all the wonderful experiences we can share together in this ever-evolving digital universe.
                    </p>
                    <div className="caption">
                        <BsDashLg /> About Me
                    </div>
                </>
            ) : (
                <>
                    <p>
                        Hello, I'm delighted to introduce myself as a passionate front-end developer
                        and I extend a warm welcome to you in visiting my digital sanctuary on the web.<br /><br />
                        As of the present, I am pursuing a Master's degree in Computer Applications from
                        Amity University Online. However, My mission extends beyond the mere pursuit of
                        employment; it now encompasses a burning desire to expand my knowledge and skill set,
                        not only in the professional arena but also in my personal life. For me, it's not just
                        about writing code; it's about crafting a harmonious and fulfilling lifestyle..
                    </p>
                    <div onClick={() => setFullParaTongle(true)}>
                        Learn More
                    </div>
                </>
            )}
            </>),
        },
        {
            subheading: 'Profession',
            title: 'As A Developer',
            description: (<>{showFullPara ? (
                <>
                    <p className="full-paragraph-layout">
                        I find immense satisfaction in crafting visually appealing user interfaces. <br />
                        My expertise spans a range of technologies including HTML, CSS, JavaScript, React.js, and Redux.
                        I've honed my abilities through hands-on experiences and internships.<br />
                        Crafting user-friendly digital experiences, building reusable components, and collaborating
                        with talented teams have been my avenues of growth.<br />

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
            )}
            </>)
        }
    ];

    const toggleDetailsForward = () => {
        setCurrentIndex((currentIndex + 1) % details.length);
    };
    const toggleDetailsBackward = () => {
        setCurrentIndex(((currentIndex - 1) + details.length) % details.length);
    };

    return (
        <div className={showFullPara ? "column-layout-parent" : "parent"}>
            <div className='arrow-top' >{!showFullPara && <FiArrowUpLeft onClick={toggleDetailsForward} />}</div>
            <div className={`sub-parent ${showFullPara ? "column-layout" : ""}`}>
                {showFullPara ?
                    <div onClick={() => setFullParaTongle(false)}><FaLongArrowAltLeft className="bold-icon" /></div>
                    : <>
                        <h3> <BsDashLg /> {details[currentIndex].subheading}</h3>
                    </>}
                <h2> {details[currentIndex].title}</h2>
                <p>{details[currentIndex].description}</p>
            </div>
            <div className='arrow-bottom'>{!showFullPara && <FiArrowDownRight onClick={toggleDetailsBackward} />}</div>
        </div>
    )
}
export default DeveloperProfile;