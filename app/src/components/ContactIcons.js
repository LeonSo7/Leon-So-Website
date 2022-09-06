
import '../styles/components/ContactIcons.css';

import { FiMail } from 'react-icons/fi';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';
import { GrDocumentPdf } from 'react-icons/gr';
import React, { useState } from 'react';

function ContactIcons(props) {
    const [showResumeIcon, _setShowResumeIcon] = useState(props.showResumeIcon);

    return (
        <div className="contactIcons">
            <div className="contactIconDiv">
                <a
                    className="contactIconAnchor"
                    href="mailto: sol4@mcmaster.ca"
                    // Accessibility
                    aria-label="Email"
                    onKeyDown={(e) => {
                        if (e.code === 'Space') {
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
                    target="_blank"
                    // Accessibility
                    aria-label="LinkedIn"
                    onKeyDown={(e) => {
                        if (e.code === 'Space') {
                            e.preventDefault();
                            e.stopPropagation();
                            window.open(
                                "https://www.linkedin.com/in/leon-so/",
                                "_blank" // Open in a new window
                            );
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
                    target="_blank"
                    // Accessibility
                    aria-label="GitHub"
                    onKeyDown={(e) => {
                        if (e.code === 'Space') {
                            e.preventDefault();
                            e.stopPropagation();
                            window.open(
                                "https://github.com/leonso7",
                                "_blank" // Open in a new window
                            );
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
                        href="/uploads/Leon So - Resume.pdf"
                        target="_blank"
                        // Accessibility
                        aria-label="Resume"
                        onKeyDown={(e) => {
                            if (e.code === 'Space') {
                                e.preventDefault();
                                e.stopPropagation();
                                window.open(
                                    "/uploads/Leon So - Resume.pdf",
                                    "_blank" // Open in a new window
                                );
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

export default React.memo(ContactIcons);