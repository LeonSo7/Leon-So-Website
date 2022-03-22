import '../../styles/components/aboutSection/Bio.css'
import '../../styles/components/ContactIcons.css'
import { EmojiProvider, Emoji } from 'react-apple-emojis'
import emojiData from 'react-apple-emojis/lib/data.json'
import { Animated } from "react-animated-css";
import ContactIcons from '../ContactIcons';

function Bio() {
    return (
        <div>
            <div id="headerTxtDiv">
                <h1 id="mainHeaderTxt">
                    Hello World!&nbsp;
                </h1>
                <Animated animationIn="tada">
                    <EmojiProvider data={emojiData}>
                        <Emoji name="waving-hand-light-skin-tone" width={40} />
                    </EmojiProvider>
                </Animated>
            </div>
            <div id="bioTextDiv">
                <p>
                    My name is Leon So. I am currently a Software Engineering &amp; Management student at McMaster University and a software engineering intern at Amazon. <br />
                    <br />
                    I am a creative, hardworking, innovative, and team-oriented individual, who aims to make positive, real-life impact in through my work.
                    To me, software is a powerful tool that allows us to create, build, and explore different ideas which are limited only by our knowledge, experience, and imagination.
                    For this reason, I am also passionate about learning, and I strive to continuously learn new things &mdash; whether it be new technologies, skills,
                    abilities, knowledge, cultures &mdash; you name it.
                    Ultimately, I am motivated by the positive impact that software &amp; technology can have on our everyday lives. <br />
                    <br />
                    During my free-time, you'll likely find me: fishing, boating, hiking, woodworking, working on DIY projects, trying new foods, or exploring new places! <br />
                    <br />
                    To learn more about me and my past &amp; current experience, please use the interactive timeline below, visit my LinkedIn or GitHub page, see my resume, or connect with me directly!
                </p>
            </div>
            <ContactIcons {...{ showResumeIcon: true }} />
        </div >
    );
}

export default Bio;