import "../../styles/components/projectsSection/Projects.css"
import { Row, Col, Card } from 'react-bootstrap';

function Projects() {

    const iconsLogoPath = {
        // Programming languages
        "Bash": "/assets/skillIcons/bash.svg",
        "C": "/assets/skillIcons/c.svg",
        "C++": "/assets/skillIcons/c++.svg",
        "C#": "/assets/skillIcons/c-sharp.svg",
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
        // Cloud & Container Platforms
        "AWS": "/assets/skillIcons/aws.svg",
        "AWS S3": "/assets/skillIcons/aws-s3.svg",
        "AWS EC2": "/assets/skillIcons/aws-ec2.svg",
        "Azure": "/assets/skillIcons/azure.svg",
        "Docker": "/assets/skillIcons/docker.svg",
        "GCP": "/assets/skillIcons/gcp.svg",
        "Red Hat OCP": "/assets/skillIcons/ocp.png",
        // Libraries
        "Flask": "/assets/skillIcons/flask.svg"
    }

    const projectData = [
        {
            projectName: "medisign (EMR)",
            projectDescription: "An accessible, voice-enabled electronic medical record system for filling and signing forms using speech-to-text technology.",
            thumbnailPath: "/assets/images/projectThumbnails/medisign-red.png",
            technologies: ["JavaScript", "React Native", "MongoDB", "Node.js", "GCP"],
            githubURL: "https://github.com/LeonSo7/medisign-EMR"
        },
        {
            projectName: "SlimeOut",
            projectDescription: "SlimeOut is an interactive pet game designed to allow users to simulate the experience of raising a pet slime. The user is able to interact with their pet in multiple ways, such as feeding their pet.",
            thumbnailPath: "/assets/images/projectThumbnails/slimeout-350x175.png",
            technologies: ["Unity", "C#", "MongoDB"],
            githubURL: "https://github.com/LeonSo7/SlimeOut"
        },
        {
            projectName: "InsureHome",
            projectDescription: "InsureHome is a home insurance app which allows for recording & management of assets, featuring an AI-enabled damage analysis system for providing instant claim estimates.",
            thumbnailPath: "/assets/images/projectThumbnails/insurehome-350x175.png",
            technologies: ["JavaScript", "React Native", "Redux", "Python", "Azure", "Flask"],
            githubURL: "https://github.com/LeonSo7/HackTheSix-Home-Insurance-App"
        },
        {
            projectName: "ScrumBot",
            projectDescription: "A Discord Bot for scheduling meetings and managing the Scrum agile process.",
            thumbnailPath: "/assets/images/projectThumbnails/scrumbot-350x175.png",
            technologies: ["Python"],
            githubURL: "https://github.com/LeonSo7/ScrumBot"
        },
        {
            projectName: "WeeFit",
            projectDescription: "A fitness application that allows you to track and analyze your workout form from your own home.",
            thumbnailPath: "/assets/images/projectThumbnails/weefit-350x175.png",
            technologies: ["JavaScript", "React", "Python", "Flask"],
            githubURL: "https://github.com/LeonSo7/HackTheNorth2020-Fitness-Application"
        },
        {
            projectName: "Scoops",
            projectDescription: "A web application that allow users to search for local ice cream shops, and contribute through adding stores and reviews.",
            thumbnailPath: "/assets/images/projectThumbnails/scoops-350x175.png",
            technologies: ["JavaScript", "React", "MySQL", "AWS", "AWS EC2", "AWS S3"],
            githubURL: "https://github.com/LeonSo7/Scoops"
        },
        {
            projectName: "PPM Image - Genetic Algorithm",
            projectDescription: "A genetic algorithm that generates a population of random pixels, and simulates the mutation of pixels with increasing fitness generation over generation, to recreate an image.",
            thumbnailPath: "/assets/images/projectThumbnails/genetic-algo-350x175.png",
            technologies: ["C"],
            githubURL: "https://github.com/LeonSo7/PPM-Image---Genetic-Algorithm"
        },
    ];

    // Get icon for technology (displayed at bottom of the project card)
    function getIcon(technologyName) {
        // Custom sizing
        if (technologyName === "Express" || technologyName === "Dojo" || technologyName === "Expo") {
            return (<img className="projectIconImg" alt={technologyName + " Logo"} src={iconsLogoPath[technologyName]} height="15px" />)
        } else if (technologyName === "JUnit" || technologyName === "pytest") {
            return (<img className="projectIconImg" alt={technologyName + " Logo"} src={iconsLogoPath[technologyName]} height="18px" />)
        }
        // Default
        return (<img className="projectIconImg" alt={technologyName + " Logo"} src={iconsLogoPath[technologyName]} height="25px" />)
    }

    return (
        <div id="projectsSectionMainDiv">
            <h1 id="projectsSectionHeaderTxt">Projects</h1>
            <div id="projectCardsSection">
                <Row xs={1} md={1} lg={2} xl={2} xxl={3}>
                    {projectData ?
                        // Generate project cards
                        projectData.map(project => {
                            return (
                                <Col className="projectCardsCol">
                                    <a className="projectCardAnchor"
                                        href={project.githubURL}
                                        onKeyDown={(e) => {
                                            if (e.code == 'Space') {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                window.location.href = project.githubURL;
                                            }
                                        }} >
                                        <Card className="projectCard">
                                            {/* Card Image */}
                                            <Card.Img variant="top" src={project.thumbnailPath} width="350px" height="175px" alt={project.projectName + " Graphic"} />
                                            <Card.Body>
                                                {/* Card Title */}
                                                <Card.Title className="projectCardTitle">{project.projectName}</Card.Title>
                                                {/* Card Text */}
                                                <Card.Text className="projectCardTxt">
                                                    {project.projectDescription}
                                                </Card.Text>
                                                {/* Generate technology icons on bottom of card */}
                                                <div className="projectCardTechnologies">
                                                    {project.technologies.map(technology => { return (getIcon(technology)) })}
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </a>
                                </Col>
                            )
                        })
                        : <></>
                    }
                </Row>
            </div>
        </div >
    );
}

export default Projects;