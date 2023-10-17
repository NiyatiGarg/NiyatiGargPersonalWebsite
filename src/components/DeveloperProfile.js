import React, { useState } from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { BsDashLg } from 'react-icons/bs';
import { FiArrowUpLeft, FiArrowDownRight } from 'react-icons/fi';
import { BsLinkedin, BsGithub, BsQuora, BsYoutube, BsInstagram } from 'react-icons/bs';
import { FaBlogger } from 'react-icons/fa';

import image from '../assets/About.jpeg';
import './DeveloperProfile.css';



const DeveloperProfile = () => {

    const [showFullPara, setFullParaTongle] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const details = [
        {
            subheading: 'About Me',
            title: 'Niyati Garg',
            image: <img src={image} alt="My Image" />,
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
                        <BsDashLg /> ABOUT ME
                    </div>
                </>
            ) : (
                <>
                    <p onClick={() => setFullParaTongle(true)}>
                        Hello, I'm delighted to introduce myself as a passionate front-end developer
                        and I extend a warm welcome to you in visiting my digital sanctuary on the web.<br />
                        Currently, I am pursuing a Master's degree in Computer Applications. However, My mission extends beyond the mere pursuit of
                        employment; it now encompasses a burning desire to expand my knowledge and skill set,
                        not only in the professional arena but also in my personal life. For me, it's not just
                        about writing code; it's about crafting a harmonious and fulfilling lifestyle...
                        <a onClick={() => setFullParaTongle(true)} className='link'>
                            Learn More
                        </a>
                    </p>
                </>
            )}
            </>),
        },
        {
            subheading: 'Profession',
            title: showFullPara ? 'A Developer' : 'As A Developer',
            image: <img src={image} alt="My Image" />,
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
                    <p onClick={() => setFullParaTongle(true)}>
                        I find immense satisfaction in crafting visually appealing user interfaces.My expertise
                        spans a range of technologies including HTML, CSS, JavaScript, React.js, and Redux.
                        I've honed my abilities through hands-on experiences and internships.<br />
                        Crafting user-friendly digital experiences, building reusable components, and
                        collaborating with talented teams have been my avenues of growth...
                        <a onClick={() => setFullParaTongle(true)} className='link'>
                            Learn More
                        </a>
                    </p>
                </>
            )}
            </>)
        },
        {
            subheading: 'Lets Manifest',
            title: 'Priorities',
            image: <img src={image} alt="My Image" />,
            description: (<>{showFullPara ? (
                <>
                    <p className="full-paragraph-layout">
                        I'm passionate about all of my interests, but I have a special place in my heart for yoga.
                        Yoga has helped me to improve my physical and mental health, and it has also taught me the
                        importance of balance and mindfulness. I'm grateful for the opportunity to share my love of yoga
                        with others through my teaching and practice.<br /><br />
                        In addition to yoga, I also enjoy dancing, drawing, playing guitar, painting, applying mehandi,
                        crafting, and riding my bike. I love all of these activities because they allow me to express
                        myself creatively and stay physically active. I also find that learning new things is a great way
                        to keep my mind sharp and challenged.<br /><br />
                        My strong belief in the supreme power and in manifesting things gives me a sense of purpose and
                        direction in life. I believe that we all have the power to create our own reality, and I strive to
                        use my thoughts, words, and actions to create a positive and meaningful life for myself and others.<br />

                        I'm excited to connect with other people who share my interests and values. If you have any questions
                        or want to chat, please feel free to reach out to me!
                    </p>

                    <div className="caption">
                        <BsDashLg /> "NEVER STOP PRIORITISING YOUR HEALTH"
                    </div>
                </>
            ) : (
                <>
                    <p onClick={() => setFullParaTongle(true)}>
                        I'm passionate about all of my interests, but I have a special place in my heart for yoga.
                        Yoga has helped me to improve my physical and mental health, and it has also taught me the
                        importance of balance and mindfulness.<br />
                        In addition to yoga, I also enjoy dancing, drawing, playing guitar, painting, applying mehandi,
                        crafting, and riding my bike.<br />
                        My strong belief in the supreme power and in manifesting things gives me a sense of purpose and
                        direction in life...
                        <a onClick={() => setFullParaTongle(true)} className='link'>
                            Learn More
                        </a>
                    </p>
                </>
            )}
            </>)
        },
        {
            subheading: 'Get In Touch',
            title: showFullPara ? 'Get In Touch' : 'Coffee ?',
            image: <img src={image} alt="My Image" />,
            description: (<>{showFullPara ? (
                <>
                    <p className="full-paragraph-layout">
                        <a href="https://www.linkedin.com/in/niyati-garg-59b385211" className="link">
                            <BsLinkedin style={{ fontSize: 30, paddingBottom: 10, color: '#white' }} />
                            LinkedIn
                        </a>
                        <a href="https://github.com/NiyatiGarg" className="link">
                            <BsGithub style={{ fontSize: 30, paddingBottom: 10, color: '#333333' }} />
                            GitHub
                        </a>
                        <a href="https://www.quora.com/profile/Niyati-Garg-9" className="link">
                            <BsQuora style={{ fontSize: 30, paddingBottom: 10, color: '#993333' }} />
                            Quora
                        </a>
                        <a href="https://evergreen-blogs.blogspot.com/" className="link">
                            <FaBlogger style={{ fontSize: 30, paddingBottom: 10, color: '#ff5500' }} />
                            Blogger.com
                        </a>
                        <a href="https://www.youtube.com/channel/UCDhgQNmm97ZVSyyBFi1GMig" className="link">
                            <BsYoutube style={{ fontSize: 30, paddingBottom: 10, color: '#ff0000' }} />
                            YouTube
                        </a>
                        <a href="https://www.instagram.com/_niyatigarg01_/" className="link">
                            <BsInstagram style={{ fontSize: 30, paddingBottom: 10, color: '#e1306c' }} />
                            Instagram
                        </a>
                    </p>

                    <div className="caption">
                        <BsDashLg /> "CONTACT"
                    </div>
                </>
            ) : (
                <>
                    <p onClick={() => setFullParaTongle(true)} className='link'>
                        Let's connect and build great things together
                    </p>
                </>
            )}
            </>)
        },
    ];

    const toggleDetailsForward = () => {
        setCurrentIndex(((currentIndex - 1) + details.length) % details.length);
    };
    const toggleDetailsBackward = () => {
        setCurrentIndex((currentIndex + 1) % details.length);
    };

    return (
        <div className={showFullPara ? "column-layout-parent" : "parent"}>
            <div className='arrow-top' >{!showFullPara && <FiArrowUpLeft onClick={toggleDetailsForward} />}</div>
            <div className={showFullPara ? "column-layout-subparent" : "sub-parent"}>
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