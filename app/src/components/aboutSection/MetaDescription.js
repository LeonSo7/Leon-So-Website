import ExperienceDescription from "./ExperienceDescription";
import '../../styles/components/aboutSection/ExperienceDescription.css'

function MetaDescription() {
    const companyName = "Meta (Formerly Facebook)";
    const role = "(Incoming) Software Engineer Intern";
    const briefDescription = "Meta builds technologies that help people connect, find communities, and grow businesses.";
    const props = { companyName: companyName, role: role, briefDescription: briefDescription };
    return (
        <div className="experienceDiv">
            <ExperienceDescription {...props} />
        </div>
    );
}

export default MetaDescription;