import '../../styles/components/skillsSection/Skills.css'
import React, { useState } from "react";
import SkillsList from './SkillsList';

const programmingLanguagesProps = {
    intermediateSkills: ["JavaScript", "Python", "Java", "SQL", "C++", "C", "Golang"],
    secondarySkills: ["HTML", "CSS", "Bash", "LaTex"]
}

const frameworkProps = {
    intermediateSkills: ["Node.js", "Express", "React"],
    secondarySkills: ["React Native", "Redux", "Expo", "Unity", "LoopBack4", "Dojo"]
}

const databaseProps = {
    intermediateSkills: ["MySQL", "MongoDB", "IBM Db2"]
}

const testingProps = {
    intermediateSkills: ["JUnit", "pytest", "Selenium", "Mockito"],
    secondarySkills: ["Mocha", "Chai"]
}

const cloudAndContainerPropgs = {
    intermediateSkills: ["AWS", "GCP", "Red Hat OCP", "Docker"],
    secondarySkills: ["AWS S3", "AWS EC2"]
}

function Skills() {
    return (
        <div id="skillsSectionMainDiv">
            <h1 id="skillsSectionHeaderTxt">Skills</h1>
            <h2 className="skillsSectionSubheaderTxt">Programming Languages</h2>
            <SkillsList {...programmingLanguagesProps} />
            <h2 className="skillsSectionSubheaderTxt">Frameworks</h2>
            <SkillsList {...frameworkProps} />
            <h2 className="skillsSectionSubheaderTxt">Databases</h2>
            <SkillsList {...databaseProps} />
            <h2 className="skillsSectionSubheaderTxt">Testing</h2>
            <SkillsList {...testingProps} />
            <h2 className="skillsSectionSubheaderTxt">Cloud &amp; Container Platforms</h2>
            <SkillsList {...cloudAndContainerPropgs} />
        </div>
    );
}

export default Skills;