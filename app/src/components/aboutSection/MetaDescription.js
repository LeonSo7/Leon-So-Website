import React from "react";
import ExperienceDescription from "./ExperienceDescription";

function MetaDescription() {
    const companyName = "Meta";
    const role = "Software Engineer Intern";
    const briefDescription = "PrestoDB is an open source distributed SQL query engine for running interactive \
    analytic queries against data sources of all sizes ranging from gigabytes to petabytes.";
    const roleDescription = [
        "Worked on generating query templates by traversing and rewriting the AST of SQL queries, and logging a \
        hashed fingerprint to allow for real-time traffic analysis",
        "Implemented a schedule-based selector allowing administrators to queue queries to resource groups that are only activated on \
        a specific cadence or schedule",
        "Created a plugin and integrated with a RTML service to get resource estimates to allow for resource-based queuing"
    ];
    const props = { companyName: companyName, role: role, briefDescription: briefDescription, roleDescription: roleDescription };
    return (
        <div className="experienceDiv">
            <ExperienceDescription {...props} />
            <p className="briefDescription"><a href="https://prestodb.io/" target="_blank">https://prestodb.io/</a></p>
        </div>
    );
}

export default React.memo(MetaDescription);