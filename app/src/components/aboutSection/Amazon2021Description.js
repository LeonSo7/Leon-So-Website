import ExperienceDescription from "./ExperienceDescription";

function Amazon2021Description() {
    const companyName = "Amazon";
    const role = "Software Development Engineer Intern";
    const briefDescription = "Datapath is a tier-1 foundational computation platform that is core to Amazon’s \
    eCommerce business. Amazon customers using Kindle, Prime, Instant Video, Music, Fulfillment, or just \
    shopping online, depend on a highly available server backend provided by the Datapath platform. Engineers \
    on the Datapath team design, build, and maintain highly scalable distributed systems that execute business \
    logic, authored by 1400+ teams across Amazon. Datapath is a low latency, high throughput system that \
    processes over 20 million transactions per second across 200K+ hosts in real-time.";
    const roleDescription = [
        "Led the design, implementation, and testing of a local and distributed caching system with negative \
        caching, for caching AWS STS temporary credentials (and sharing credentials across hosts) used for \
        accessing customer database tables",
        "Designed and developed an automatic proactive refreshing mechanism in Java, for evicting expiring \
        entries and priming the local and distributed caches",
        "Improved the availability of Datapath services and mitigated the risk of quota-based throttling from \
        AWS STS through reducing the total number of outgoing requests by approximately 70%"
    ]
    const props = { companyName: companyName, role: role, briefDescription: briefDescription, roleDescription: roleDescription };
    return (
        <div className="experienceDiv">
            <ExperienceDescription {...props} />
        </div>
    );
}

export default Amazon2021Description;