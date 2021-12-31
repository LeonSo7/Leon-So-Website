import '../../styles/components/aboutSection/Bio.css'
import { FiMail } from 'react-icons/fi';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';

function NextContent() {
    return (
        <div>
            <div id="headerTxtDiv">
                <h1 id="mainHeaderTxt">
                    What's Next?
                </h1>
            </div>
            <div id="bioTextDiv">
                <p>
                    What's next? Who knows! <br />
                    <br />
                    Have an opportunity where I can help shape the future and make a positive impact? <br />
                    Please reach out!
                </p>
                <div className="contactIcons">
                    <div className="contactIconDiv">
                        <a href="mailto: sol4@mcmaster.ca">
                            <FiMail className="contactIcon" size={35} />
                        </a>
                    </div>
                    <div className="contactIconDiv">
                        <a href="https://www.linkedin.com/in/leon-so/">
                            <IoLogoLinkedin className="contactIcon" size={35} />
                        </a>
                    </div>
                    <div className="contactIconDiv">
                        <a href="https://github.com/leonso7">
                            <IoLogoGithub className="contactIcon" size={35} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NextContent;