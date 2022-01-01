
/* CSS */
import '../styles/App.css';
import '../styles/pages/Home.css';

/* Cards */
import Card from '../components/cards/Card';
import AmazonBlueCard from '../components/cards/AmazonBlueCard';
import AmazonOrangeCard from '../components/cards/AmazonOrangeCard';
import IBMCard from '../components/cards/IBMCard';
import McMasterCard from '../components/cards/McMasterCard';
import McMasterGoldCard from '../components/cards/McMasterGoldCard';
import MetaCard from '../components/cards/MetaCard';
import PalantirCard from '../components/cards/PalantirCard';
import NextCard from '../components/cards/NextCard';

/* About section text content */
import Bio from '../components/aboutSection/Bio';
import Amazon2021Description from '../components/aboutSection/Amazon2021Description';
import Amazon2022Description from '../components/aboutSection/Amazon2022Description';
import IBMDescription from '../components/aboutSection/IBMDescription';
import McMasterDescription from '../components/aboutSection/McMasterDescription';
import MetaDescription from '../components/aboutSection/MetaDescription';
import PalantirDescription from '../components/aboutSection/PalantirDescription';
import NextContent from '../components/aboutSection/NextContent';

import { Timeline, TimelineEvent } from '@mailtop/horizontal-timeline';

/* Timeline Icons */
import { BsFillPersonBadgeFill } from 'react-icons/bs';
import { SiAmazon, SiIbm, SiPalantir } from 'react-icons/si';
import { FaGraduationCap, FaQuestion, FaUniversity } from 'react-icons/fa';
import { Meta } from "react-bootstrap-icons";

import 'react-perfect-scrollbar/dist/css/styles.css';
import React, { useState } from "react";
import Skills from '../components/skillsSection/Skills';
import Projects from '../components/projectsSection/Projects'

function Home() {
    const [selectedTimelineNode, setSelectedTimelineNode] = useState('Bio');

    // Set state based on timeline node/event selected
    function selectTimelineNode(selectedNodeValue) {
        setSelectedTimelineNode(selectedNodeValue);
    };

    // Render id card based on timeline event selected
    function renderCard() {
        switch (selectedTimelineNode) {
            case 'McMasterUniversity0':
                return (<McMasterCard />);
            case 'McMasterUniversity1':
                return (<McMasterGoldCard />);
            case 'IBM':
                return (<IBMCard />);
            case 'Amazon0':
                return (<AmazonBlueCard />);
            case 'Amazon1':
                return (<AmazonOrangeCard />);
            case 'Palantir':
                return (<PalantirCard />);
            case 'Meta':
                return (<MetaCard />);
            case 'Future':
                return (<NextCard />);
            default:
                return (<Card />);
        }
    }

    // function setTabIndex() {
    //     var circles = document.getElementsByTagName('circle');
    //     for (let i = 0; i < circles.length; i++) {
    //         circles[i].tabIndex = 0;
    //     }
    // }

    // Render text content based on timeline event selected
    function renderAboutSectionTxt() {
        switch (selectedTimelineNode) {
            case 'McMasterUniversity0':
                return (<McMasterDescription />);
            case 'McMasterUniversity1':
                return (<McMasterDescription />);
            case 'IBM':
                return (<IBMDescription />);
            case 'Amazon0':
                return (<Amazon2021Description />);
            case 'Amazon1':
                return (<Amazon2022Description />);
            case 'Palantir':
                return (<PalantirDescription />);
            case 'Meta':
                return (<MetaDescription />);
            case 'Future':
                return (<NextContent />);
            default:
                return (<Bio />);
        }
    }

    return (
        <div>
            <div id="about" />
            <div id="aboutSection">
                <div className="column" id="cardDiv">
                    {
                        // Render id card dynamically based on selected timeline event
                        renderCard()
                    }
                </div>
                <div className="doubleColumn" id="aboutTxtContentDiv">
                    {
                        // Render about section text dynamically based on selected timeline event
                        renderAboutSectionTxt()
                    }
                </div>
                <div className="columnSpaceHolder">
                    { /* Empty column -- space holder */}
                </div>
            </div>

            {/* Timeline */}
            <div id="timelineDiv">
                <Timeline
                    id="timeline"
                    minEvents={6}
                    // maxEvents={5}
                    placeholder={true}
                    variant="simple"
                >
                    <TimelineEvent
                        icon={BsFillPersonBadgeFill}
                        color="#000000"
                        title='Leon So'
                        subtitle='(Bio)'
                        action={{
                            label: 'Bio',
                            onClick: () => selectTimelineNode('Bio')
                        }}
                    />
                    <TimelineEvent
                        icon={FaUniversity}
                        color="#7A003C"
                        title='McMaster University'
                        subtitle='09/17'
                        action={{
                            label: 'McMaster University',
                            onClick: () => selectTimelineNode('McMasterUniversity0')
                        }}
                    />

                    <TimelineEvent
                        icon={SiIbm}
                        color="#0043CE"
                        title='IBM'
                        subtitle='05/20-04/21'
                        action={{
                            label: 'IBM',
                            onClick: () => selectTimelineNode('IBM')
                        }}
                    />
                    <TimelineEvent
                        icon={SiAmazon}
                        color="#00A8E1"
                        title='Amazon'
                        subtitle='05/21-08/21'
                        action={{
                            label: 'Amazon',
                            onClick: () => selectTimelineNode('Amazon0')
                        }}
                    />
                    <TimelineEvent
                        icon={SiAmazon}
                        color="#FF9900"
                        title='Amazon'
                        subtitle='01/22-03/22'
                        action={{
                            label: 'Amazon',
                            onClick: () => selectTimelineNode('Amazon1')
                        }}
                    />
                    <TimelineEvent
                        icon={SiPalantir}
                        color="#000000"
                        title='Palantir Technologies'
                        subtitle='(Incoming) 03/22-06/22'
                        action={{
                            label: 'Palantir',
                            onClick: () => selectTimelineNode('Palantir')
                        }}
                    />
                    <TimelineEvent
                        icon={Meta}
                        color="#0668E1"
                        title='Meta (Formerly Facebook)'
                        subtitle='(Incoming) 06/22-09/22'
                        action={{
                            label: 'Meta',
                            onClick: () => selectTimelineNode('Meta')
                        }}
                    />
                    <TimelineEvent
                        icon={FaGraduationCap}
                        color="#FDBF57"
                        title='Expected Graduation'
                        subtitle='04/23'
                        action={{
                            label: 'McMaster University',
                            onClick: () => selectTimelineNode('McMasterUniversity1')
                        }}
                    />
                    <TimelineEvent
                        icon={FaQuestion}
                        color="#DCDCDC"
                        title="What's next?"
                        action={{
                            label: 'Future',
                            onClick: () => selectTimelineNode('Future')
                        }}
                    />
                </Timeline>
                {/* {setTabIndex()} */}
            </div>

            {/* Skills Section */}
            <div id="skills" />
            <Skills />

            {/* Projects Section */}
            <div id="projects" />
            <Projects />
        </div>
    );
}

export default Home;
