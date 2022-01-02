import ExperienceDescription from "./ExperienceDescription";
import '../../styles/components/aboutSection/ExperienceDescription.css'

function PalantirDescription() {
    const companyName = "Palantir";
    const role = "(Incoming) Software Engineer Intern";
    const briefDescription = "Palantir builds software that empowers organizations around the world to effectively integrate \
    their data, decisions, and operations... Software Engineers are involved throughout the product lifecycle \u2014 from idea generation, \
    design, and prototyping to execution and shipping while also being paired with a mentor dedicated to their growth and success.";
    const props = { companyName: companyName, role: role, briefDescription: briefDescription };
    return (
        <div className="experienceDiv">
            <ExperienceDescription {...props} />
            <p className="briefDescription">Incoming to Palantir Gotham.</p>
        </div>
    );
}

export default PalantirDescription;