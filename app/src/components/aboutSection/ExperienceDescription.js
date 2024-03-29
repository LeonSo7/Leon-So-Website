import '../../styles/components/aboutSection/ExperienceDescription.css';

import { React, useState } from 'react';

function ExperienceDescription(props) {
    const [companyName, _setCompanyName] = useState(props.companyName);
    const [role, _setRole] = useState(props.role);
    const [briefDescription, _setBriefDescription] = useState(props.briefDescription);
    const [roleDescription, _setRoleDescription] = useState(props.roleDescription);
    return (
        <div>
            <div id="companyInfoDiv">
                <h1 id="mainHeaderTxt">
                    {companyName}
                </h1>
                <h2 className="roleTxt">
                    {role}
                </h2>
            </div>
            {briefDescription ? <p className="briefDescription"> {briefDescription} </p> : <></>
            }
            {roleDescription ?
                <div id="roleDescription">
                    <ul className="">
                        {roleDescription.map(bulletPoint => {
                            return (
                                <li className="bulletPoint">{bulletPoint}</li>
                            )
                        })}
                    </ul>
                </div>
                : <></>
            }
        </div>
    );
}

export default ExperienceDescription;