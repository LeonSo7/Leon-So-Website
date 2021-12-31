import ExperienceDescription from "./ExperienceDescription";

function IBMDescription() {
    const companyName = "IBM";
    const role = "Full Stack Developer Intern";
    const briefDescription = "IBM Automation is a set of integrated software allowing users to author and \
    manage business-friendly low-code applications; and automate digital workflows to increase productivity, \
     efficiency and insights — on premises or on cloud.";
    const roleDescription = [
        "Worked on runtime application engine and design time authoring environments for IBM Automation \
        (previously IBM Cloud Pak for Digital Business Automation) under an Agile software development environment",
        "Implemented REST APIs to support interactions between applications, automation services, and runtime \
        environments (i.e. IBM Business Automation Application Engine and IBM Business Automation Navigator)",
        "Developed Node.js modules to incorporate security policies and user authorization",
        "Embedded LoopBack into automation service engine to provide dynamic routes and generate OpenAPI specifications",
        "Maintained test suites, created page objects, and wrote Selenium automation tests for authoring environments",
        "Performed accessibility testing and development to make IBM Business Automation Studio, IBM Business \
        Automation Navigator, and IBM Process Designer WCAG 2.1 compliant"
    ]
    const props = { companyName: companyName, role: role, briefDescription: briefDescription, roleDescription: roleDescription };
    return (
        <div className="experienceDiv">
            <ExperienceDescription {...props} />
        </div>
    );
}

export default IBMDescription;