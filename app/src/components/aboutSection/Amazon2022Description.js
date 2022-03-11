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
    const roleDescription = [
        "Worked on Datapath Efficiency, a team focused on improving the cost effectiveness of the Datapath \
        platform by reducing infrastructure monthly rate (IMR) and optimizing costs per billion transactions",
        "Designed, architected, and developed a system to identify ineffective caches by continuously \
        aggregating, processing, and auditing time series metrics such as cache hit rate, serialization, \
        and deserialization costs, read and miss latency, etc",
        "Implemented a web-based portal acting as an observability hub to provide engineers and \
        stakeholders with visibility on ineffective caches and cache behavior to allow for data-driven \
        decisions on tuning and optimizing caching"
    ]
    const props = { companyName: companyName, role: role, briefDescription: briefDescription, roleDescription: roleDescription };
    return (
        <div className="experienceDiv">
            <ExperienceDescription {...props} />
        </div>
    );
}

export default Amazon2022Description;