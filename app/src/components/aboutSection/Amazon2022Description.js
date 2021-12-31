import ExperienceDescription from "./ExperienceDescription";

function Amazon2022Description() {
    const companyName = "Amazon";
    const role = "Software Development Engineer Intern";
    const briefDescription = "Datapath is a tier-1 foundational computation platform that is core to Amazon’s \
    eCommerce business. Amazon customers using Kindle, Prime, Instant Video, Music, Fulfillment, or just \
    shopping online, depend on a highly available server backend provided by the Datapath platform. Engineers \
    on the Datapath team design, build, and maintain highly scalable distributed systems that execute business \
    logic, authored by 1400+ teams across Amazon. Datapath is a low latency, high throughput system that \
    processes over 20 million transactions per second across 200K+ hosts in real-time.";
    const props = { companyName: companyName, role: role, briefDescription: briefDescription };
    return (
        <div className="experienceDiv">
            <ExperienceDescription {...props} />
        </div>
    );
}

export default Amazon2022Description;