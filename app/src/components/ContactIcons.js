
import '../styles/components/ContactIcons.css'
import { FiMail } from 'react-icons/fi';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';
import { GrDocumentPdf } from 'react-icons/gr';
import React, { useState } from 'react';

function ContactIcons(props) {
    const [showResumeIcon, setShowResumeIcon] = useState(props.showResumeIcon);

    return (
        <div className="contactIcons">
            <div className="contactIconDiv">
                <a
                    className="contactIconAnchor"
                    href="mailto: sol4@mcmaster.ca"
                    aria-label="Email"
                    onKeyDown={(e) => {
                        if (e.code == 'Space') {
                            e.preventDefault();
                            e.stopPropagation();
                            window.location.href = "mailto: sol4@mcmaster.ca";
                        }
                    }}
                >
                    <FiMail className="contactIcon" size={35} />
                </a>
            </div>
            <div className="contactIconDiv">
                <a
                    className="contactIconAnchor"
                    href="https://www.linkedin.com/in/leon-so/"
                    aria-label="LinkedIn"
                    onKeyDown={(e) => {
                        if (e.code == 'Space') {
                            e.preventDefault();
                            e.stopPropagation();
                            window.location.href = "https://www.linkedin.com/in/leon-so/";
                        }
                    }}
                >
                    <IoLogoLinkedin className="contactIcon" size={35} />
                </a>
            </div>
            <div className="contactIconDiv">
                <a
                    className="contactIconAnchor"
                    href="https://github.com/leonso7"
                    aria-label="GitHub"
                    onKeyDown={(e) => {
                        if (e.code == 'Space') {
                            e.preventDefault();
                            e.stopPropagation();
                            window.location.href = "https://github.com/leonso7";
                        }
                    }}
                >
                    <IoLogoGithub className="contactIcon" size={35} />
                </a>
            </div>
            {showResumeIcon ?
                <div className="contactIconDiv">
                    <a
                        className="contactIconAnchor"
                        href="https://www.linkedin.com/in/leon-so/"
                        aria-label="LinkedIn"
                        onKeyDown={(e) => {
                            if (e.code == 'Space') {
                                e.preventDefault();
                                e.stopPropagation();
                                window.location.href = "https://www.linkedin.com/in/leon-so/";
                            }
                        }}
                    >
                        <div id="resumeIconDiv">
                            <GrDocumentPdf className="contactIcon" size={31} />
                        </div>
                    </a>
                </div>
                : <></>
            }
        </div>
    );
}

export default ContactIcons;