import '../../styles/components/aboutSection/Bio.css'
import { EmojiProvider, Emoji } from 'react-apple-emojis'
import emojiData from 'react-apple-emojis/lib/data.json'
import { Animated } from "react-animated-css";

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
                    My name is Leon So. I am currently a Software Engineering &amp; Management student at McMaster University and a software engineering intern at Amazon.
                </p>
                <p>
                    I am a creative, hardworking, innovative, and team-oriented individual, who aims to make positive, real-life impact in through my work.
                    To me, software is a powerful tool that allows us to create, build, and explore different ideas which are only limited by our knowledge and imagination.
                    For this reason, I am also passionate about learning, and I strive to continuously learn new things &mdash; whether it be new technologies, skills,
                    abilities, knowledge, cultures, places &mdash; you name it.
                    Ultimately, I am motivated by the positive impact that software &amp; technology can have on our everyday lives.
                </p>
                <p>
                    During my free-time, you'll likely find me: fishing, boating, hiking, woodworking, working on DIY projects, trying new foods, or exploring new places!
                </p>
                <p>
                    To learn more about me and my past &amp; current experience, please use the interactive timeline below, visit my LinkedIn page, see my resume, or connect with me directly!
                </p>
            </div>
        </div>
    );
}

export default Bio;