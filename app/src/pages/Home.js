
import '../styles/App.css';
import '../styles/pages/Home.css';
import Card from '../components/Card';
import { Row } from 'react-bootstrap';
import { Timeline, TimelineEvent } from '@mailtop/horizontal-timeline';
import { SiAmazon, SiIbm, SiPalantir } from 'react-icons/si';
import { FaFacebookF, FaGraduationCap, FaQuestion, FaUniversity } from 'react-icons/fa';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { EmojiProvider, Emoji } from 'react-apple-emojis'
import emojiData from 'react-apple-emojis/lib/data.json'
import { Animated } from "react-animated-css";

function Home() {

    return (
        <div>
            <div id="aboutSection">
                <div className="column" id="cardDiv">
                    <Card></Card>
                </div>
                <div className="doubleColumn" id="aboutTxtContentDiv">
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
                            To me, software is a powerful tool that allows us to create, build, and explore different ideas which are only limited by our imagination.
                            I am motivated by the positive impact that software &amp; technology can have on our everyday lives.
                        </p>
                        <p>
                            During my free-time, you'll likely find me: fishing, boating, hiking, woodworking, working on DIY projects, trying new foods, or exploring new places!
                        </p>
                        <p>
                            To learn more about me and my past &amp; current experience, please use the interactive timeline below, visit my LinkedIn page, see my resume, or connect with me directly!
                        </p>
                    </div>
                </div>
                <div className="column">
                    { /* Empty column */}
                </div>
            </div>

            <div id="timelineDiv">
                <Timeline
                    id="timeline"
                    minEvents={6}
                    // maxEvents={5}
                    placeholder={true}
                    variant="simple"
                >
                    <TimelineEvent
                        icon={FaUniversity}
                        color="#7A003C"
                        title='McMaster University'
                        subtitle='09/17'
                    />

                    <TimelineEvent
                        icon={SiIbm}
                        color="#0043CE"
                        title='IBM'
                        subtitle='05/20-04/21'
                    />
                    <TimelineEvent
                        icon={SiAmazon}
                        color="#00A8E1"
                        title='Amazon'
                        subtitle='05/21-08/21'
                    />
                    <TimelineEvent
                        icon={SiAmazon}
                        color="#FF9900"
                        title='Amazon'
                        subtitle='01/22-03/22'
                    />
                    <TimelineEvent
                        icon={SiPalantir}
                        color="#000000"
                        title='Palantir Technologies'
                        subtitle='(Incoming) 03/22-06/22'
                    />
                    <TimelineEvent
                        icon={FaFacebookF}
                        color="#1778F2"
                        title='Facebook (Meta)'
                        subtitle='(Incoming) 06/22-09/22'
                    />
                    <TimelineEvent
                        icon={FaGraduationCap}
                        color="#FDBF57"
                        title='Expected Graduation'
                        subtitle='04/23'
                    />
                    <TimelineEvent
                        icon={FaQuestion}
                        color="#DCDCDC"
                        title="What's next?"
                    />
                </Timeline>
            </div>
        </div>
    );
}

export default Home;
