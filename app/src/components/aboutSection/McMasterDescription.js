import ExperienceDescription from "./ExperienceDescription";
import '../../styles/components/aboutSection/ExperienceDescription.css'

function McMasterDescription() {
    const companyName = "McMaster University";
    const role = "Software Engineering & Management (co-op)";
    const briefDescription = "The Engineering & Management Program is a prestigious program designed to provide \
    engineering students with a deeper understanding of business, project management, and leadership skills \
    needed to thrive in a corporate or entrepreneurial environment."

    const props = { companyName: companyName, role: role, briefDescription: briefDescription };
    return (
        <div className="experienceDiv">
            <ExperienceDescription {...props} />
            <p className="briefDescription">On top of the traditional requirements of an engineering degree, Engineering and Management students complete an additional 15 courses that make up the core of a business degree.</p>
            <p className="briefDescription"><a href="https://www.eng.mcmaster.ca/engineering-management-program" target="_blank">https://www.eng.mcmaster.ca/engineering-management-program</a></p>
        </div>
    );
}

export default McMasterDescription;