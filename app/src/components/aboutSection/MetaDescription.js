import ExperienceDescription from "./ExperienceDescription";
import '../../styles/components/aboutSection/ExperienceDescription.css'

function MetaDescription() {
    const companyName = "Meta (Formerly Facebook)";
    const role = "(Incoming) Software Engineer Intern";
    const briefDescription = "Meta builds technologies that help people connect, find communities, and grow businesses. \
    Software Engineers at Meta build new features and improve existing products that more than a billion people around the world use. \
    They also work on highly impactful technical challenges to help the world be more open and connected. Software Engineers at Meta \
    have the opportunity to solve unique, large-scale, highly complex technical problems.";
    const props = { companyName: companyName, role: role, briefDescription: briefDescription };
    return (
        <div className="experienceDiv">
            <ExperienceDescription {...props} />
        </div>
    );
}

export default MetaDescription;