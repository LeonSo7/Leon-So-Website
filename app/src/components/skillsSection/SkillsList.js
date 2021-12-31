import '../../styles/components/skillsSection/SkillsList.css'
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

function SkillsList(props) {
    const [intermediateSkills, setIntermediateSkills] = useState(props.intermediateSkills);
    const [secondarySkills, setSecondarySkills] = useState(props.secondarySkills);
    const [showSecondarySkills, setShowSecondarySkills] = useState(false);
    const [displayShowSecondaryButton, setDisplayShowSecondaryButton] = useState(true);

    const iconsLogoPath = {
        // Programming languages
        "Bash": "/assets/skillIcons/bash.svg",
        "C": "/assets/skillIcons/c.svg",
        "C++": "/assets/skillIcons/c++.svg",
        "CSS": "/assets/skillIcons/css3.svg",
        "Golang": "/assets/skillIcons/golang.svg",
        "HTML": "/assets/skillIcons/html5.svg",
        "Java": "/assets/skillIcons/java.svg",
        "JavaScript": "/assets/skillIcons/javascript.svg",
        "LaTex": "/assets/skillIcons/latex.svg",
        "Python": "/assets/skillIcons/python.svg",
        "SQL": "/assets/skillIcons/sql.png",
        // Frameworks
        "Dojo": "/assets/skillIcons/dojo.svg",
        "Expo": "/assets/skillIcons/expo.svg",
        "Express": "/assets/skillIcons/express.svg",
        "LoopBack4": "/assets/skillIcons/loopback.svg",
        "Node.js": "/assets/skillIcons/nodejs.png",
        "React": "/assets/skillIcons/react.png",
        "React Native": "/assets/skillIcons/react.png",
        "Redux": "/assets/skillIcons/redux.svg",
        "Unity": "/assets/skillIcons/unity.svg",
        // Databases
        "IBM Db2": "/assets/skillIcons/db2.png",
        "MongoDB": "/assets/skillIcons/mongodb.png",
        "MySQL": "/assets/skillIcons/mysql.svg",
        // Testing
        "Chai": "/assets/skillIcons/chai.png",
        "JUnit": "/assets/skillIcons/junit.png",
        "Mocha": "/assets/skillIcons/mocha.svg",
        "Mockito": "/assets/skillIcons/mockito.png",
        "pytest": "/assets/skillIcons/pytest.svg",
        "Selenium": "/assets/skillIcons/selenium.svg",
        // Cloud & Container Platforms
        "AWS": "/assets/skillIcons/aws.svg",
        "AWS S3": "/assets/skillIcons/aws-s3.svg",
        "AWS EC2": "/assets/skillIcons/aws-ec2.svg",
        "Docker": "/assets/skillIcons/docker.svg",
        "GCP": "/assets/skillIcons/gcp.svg",
        "Red Hat OCP": "/assets/skillIcons/ocp.png"
    }

    function getIcon(skillName) {
        // Custom sizing
        if (skillName === "Express" || skillName === "Dojo" || skillName === "Expo") {
            return (<img alt={skillName + " Logo"} src={iconsLogoPath[skillName]} height="15px" />)
        } else if (skillName === "JUnit" || skillName === "pytest") {
            return (<img alt={skillName + " Logo"} src={iconsLogoPath[skillName]} height="18px" />)
        }
        // Default
        return (<img alt={skillName + " Logo"} src={iconsLogoPath[skillName]} height="25px" />)
    }

    /* Toggle and set state to show secondary skills */
    function showAllSkills(e) {
        if (e.type === "click" || e.code === "Enter" || e.code === "Space") {
            setShowSecondarySkills(true);
            setDisplayShowSecondaryButton(false);
        }
    }

    return (
        <div className="skillsListDiv">
            {/* Only show intermediate skills initially */}
            {intermediateSkills ?
                intermediateSkills.map(skill => {
                    return (
                        <div className="skillDiv">
                            <div className="skillDivIcon">{getIcon(skill)}</div>
                            <div className="skillDivTxt">{skill}</div>
                            <div className="skillDivSpaceHolder" />
                        </div>
                    )
                })
                : <></>
            }

            {/* Show All button */}
            {/* Only show button if secondary skills exist */}
            {secondarySkills && displayShowSecondaryButton ?
                <div
                    className="skillDiv showAllButton"
                    tabIndex="0"
                    onClick={(e) => showAllSkills(e)}
                    onKeyDown={(e) => showAllSkills(e)}
                >
                    <div className="skillDivIcon"><FaPlus size={20} /></div>
                    <div className="skillDivTxt">Show All</div>
                    <div className="skillDivSpaceHolder" />

                </div>
                : <></>
            }

            {/* Only show secondary skills after show all button is pressed */}
            {secondarySkills && showSecondarySkills ?
                secondarySkills.map(skill => {
                    return (
                        <div className="skillDiv">
                            <div className="skillDivIcon">{getIcon(skill)}</div>
                            <div className="skillDivTxt">{skill}</div>
                            <div className="skillDivSpaceHolder" />
                        </div>
                    )
                })
                : <></>
            }
        </div >
    );
}

export default SkillsList;