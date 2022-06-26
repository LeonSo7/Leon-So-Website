import ExperienceDescription from "./ExperienceDescription";
import '../../styles/components/aboutSection/ExperienceDescription.css'

function MetaDescription() {
    const companyName = "Meta (Formerly Facebook)";
    const role = "Software Engineer Intern";
    const briefDescription = "PrestoDB is an open source distributed SQL query engine for running interactive \
    analytic queries against data sources of all sizes ranging from gigabytes to petabytes.";
    const props = { companyName: companyName, role: role, briefDescription: briefDescription };
    return (
        <div className="experienceDiv">
            <ExperienceDescription {...props} />
        </div>
    );
}

export default MetaDescription;