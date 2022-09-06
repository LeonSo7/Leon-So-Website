import '../../styles/components/skillsSection/SkillsList.css';

import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { ICONS_LOGO_PATH } from '../../common/Constants';

function SkillsList(props) {
    const [intermediateSkills, _setIntermediateSkills] = useState(props.intermediateSkills);
    const [secondarySkills, _setSecondarySkills] = useState(props.secondarySkills);
    const [showSecondarySkills, setShowSecondarySkills] = useState(false);
    const [displayShowSecondaryButton, setDisplayShowSecondaryButton] = useState(true);

    function getIcon(skillName) {
        // Custom sizing
        if (skillName === "Express" || skillName === "Dojo" || skillName === "Expo") {
            return (<img alt={skillName + " Logo"} src={ICONS_LOGO_PATH[skillName]} height="15px" />)
        } else if (skillName === "JUnit" || skillName === "pytest") {
            return (<img alt={skillName + " Logo"} src={ICONS_LOGO_PATH[skillName]} height="18px" />)
        }
        // Default
        return (<img alt={skillName + " Logo"} src={ICONS_LOGO_PATH[skillName]} height="25px" />)
    }

    /* Toggle and set state to show secondary skills */
    function showAllSkills(e) {
        if (e.type === "click" || e.code === "Enter" || e.code === "Space") {
            e.preventDefault();
            e.stopPropagation();
            setShowSecondarySkills(true);
            setDisplayShowSecondaryButton(false);
        }
    }

    return (
        <div className="skillsListMainDiv">
            <div className="skillsListSubDiv">
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
                        aria-label="Show All Button"
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
            </div>
        </div >
    );
}

export default SkillsList;