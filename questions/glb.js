/* Global Infrastructure (GLB) revision set — domain-aligned standalone questions.
   Registered to window.QUESTION_FILES so it loads over file:// without fetch().
   See aws-ccp-study-guide.html. Revision-only (no paperId). */
window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "glb",
  questions: [
    {
      id: "glb-001",
      domain: "GLB",
      topic: "availability-zones",
      type: "single",
      question: "What is the main advantage of deploying workloads across multiple AWS Availability Zones within a Region?",
      options: ["Lower data transfer costs", "Higher fault tolerance and availability", "Access to more AWS services", "Reduced IAM complexity"],
      correctAnswer: [1],
      explanation: "Availability Zones are isolated locations within a Region; spreading resources across them protects applications from a single data center failure."
    },
    {
      id: "glb-002",
      domain: "GLB",
      topic: "cloudfront",
      type: "single",
      question: "Which AWS service reduces network latency?",
      options: ["Amazon CloudFront", "Elastic Load Balancing", "AWS Direct Connect", "AWS Transit Gateway"],
      correctAnswer: [0],
      explanation: "Amazon CloudFront is a content delivery network (CDN) that caches content at edge locations around the world, reducing latency by serving users from the closest geographic point. While Elastic Load Balancing distributes traffic across instances, AWS Direct Connect provides dedicated network connections, and Transit Gateway connects VPCs, only CloudFront reduces latency through global content caching."
    },
    {
      id: "glb-003",
      domain: "GLB",
      topic: "regions",
      type: "single",
      question: "AWS Regions is part of the AWS Global Infrastructure.",
      options: ["True", "False"],
      correctAnswer: [0],
      explanation: "AWS Regions are geographic areas that contain multiple isolated and physically separate Availability Zones, and they are a fundamental component of the AWS Global Infrastructure. Each Region is designed to be isolated from other Regions to achieve the greatest possible fault tolerance and stability."
    },
    {
      id: "glb-004",
      domain: "GLB",
      topic: "edge-locations",
      type: "single",
      question: "What are Edge Locations?",
      options: ["Data centers that deliver data fast to the users", "AWS Regions", "Physical hard drives", "Data centers that store petabytes of data"],
      correctAnswer: [0],
      explanation: "Edge Locations are AWS data centers that cache content close to end users to deliver data with lower latency, primarily used by CloudFront and other edge services. They are not AWS Regions (which are larger geographic areas), not physical hard drives, and while they do store cached data, their primary purpose is fast delivery rather than petabyte-scale storage."
    },
    {
      id: "glb-005",
      domain: "GLB",
      topic: "route-53",
      type: "single",
      question: "Which Route 53 Routing Policies would you use to route traffic to multiple resources in proportions that you specify?",
      options: ["Simple Routing Policy", "Weighted Routing Policy", "Latency Routing Policy", "Failover Routing Policy"],
      correctAnswer: [1],
      explanation: "Weighted Routing Policy allows you to route traffic to multiple resources in proportions that you specify, enabling you to distribute load based on assigned weights. Simple Routing is for single resources, Latency Routing optimizes based on user location, and Failover Routing is for active-passive configurations."
    },
    {
      id: "glb-006",
      domain: "GLB",
      topic: "wavelength",
      type: "single",
      question: "Which service is optimized to deploy ultra-low latency applications to 5G devices?",
      options: ["WaveLength", "Route 53", "CloudFront"],
      correctAnswer: [0],
      explanation: "AWS Wavelength is an infrastructure offering optimized for mobile edge computing that combines the high bandwidth and ultra-low latency of 5G networks with AWS compute and storage services, enabling developers to build applications for 5G devices. Route 53 is a DNS service and CloudFront is a CDN, neither designed specifically for 5G edge deployments."
    },
    {
      id: "glb-007",
      domain: "GLB",
      topic: "s3-transfer-acceleration",
      type: "single",
      question: "You need to enable fast, easy, and secure transfers of files over long distances on S3. Which service would you use?",
      options: ["AWS Global Accelerator", "S3 Transfer Acceleration", "S3 Cross-Region Replication"],
      correctAnswer: [1],
      explanation: "S3 Transfer Acceleration enables fast, easy, and secure transfers of files over long distances by routing data through CloudFront's globally distributed edge locations to your S3 bucket over an optimized network path. AWS Global Accelerator improves application availability and performance but cannot be used directly with S3, and S3 Cross-Region Replication is for data replication, not transfer acceleration."
    },
    {
      id: "glb-008",
      domain: "GLB",
      topic: "cloudfront",
      type: "single",
      question: "What does AWS CloudFront use to improve read performance?",
      options: ["DDoS Protection", "S3 Buckets Fast-Read", "Caching Content in Edge Locations", "Caching Content in Edge Regions"],
      correctAnswer: [2],
      explanation: "CloudFront uses caching content in Edge Locations to improve read performance by bringing content closer to viewers. Edge Locations are specifically designed for caching, while DDoS Protection is a security feature, S3 Buckets Fast-Read does not exist, and Edge Regions is not the correct term for CloudFront's caching infrastructure."
    },
    {
      id: "glb-009",
      domain: "GLB",
      topic: "outposts",
      type: "single",
      question: "Which service can be used to run AWS infrastructure and services on-premises for a hybrid cloud architecture?",
      options: ["CloudFront", "Outposts", "DMS", "Storage Gateway"],
      correctAnswer: [1],
      explanation: "AWS Outposts brings native AWS services, infrastructure, and operating models to virtually any data center, colocation space, or on-premises facility, enabling true hybrid cloud architectures. CloudFront is a CDN, DMS is for database migration, and Storage Gateway connects on-premises storage but does not provide full AWS infrastructure on-premises."
    },
    {
      id: "glb-010",
      domain: "GLB",
      topic: "global-applications",
      type: "single",
      question: "Which of the following statements is NOT a reason for a global application?",
      options: ["Decreased Latency", "Disaster Recovery", "Scale elastically on demand", "Attack protection"],
      correctAnswer: [2],
      explanation: "Scaling elastically on demand is not specific to global applications and can be achieved with services like Auto Scaling Groups in a single region. Global applications are specifically designed for decreased latency through geographic distribution, disaster recovery through multi-region failover, and attack protection through distributed infrastructure that is harder to attack."
    },
    {
      id: "glb-011",
      domain: "GLB",
      topic: "route-53",
      type: "single",
      question: "Which features are available with Route 53?",
      options: ["Health Checks, Auto Scaling, Routing Policy, DNS", "Load Balancing, DNS, Domain Registration, Monitoring", "Domain Registration, DNS, Health Checks, DDoS Protection", "Domain Registration, DNS, Health Checks, Routing Policy"],
      correctAnswer: [3],
      explanation: "Route 53 provides Domain Registration, DNS, Health Checks, and Routing Policy as its core features. The first option incorrectly includes Auto Scaling which is not a Route 53 feature, and while Route 53 integrates with AWS Shield for DDoS protection, DDoS Protection itself is not a direct Route 53 feature. Load Balancing and Monitoring are also not primary Route 53 features."
    },
    {
      id: "glb-012",
      domain: "GLB",
      topic: "cloudfront",
      type: "single",
      question: "With which services does CloudFront integrate to protect against web attacks?",
      options: ["WAF & Shield", "WAF & IAM", "IAM & Shield", "Security Groups & WAF"],
      correctAnswer: [0],
      explanation: "CloudFront integrates with AWS WAF (Web Application Firewall) and AWS Shield to protect against web attacks and DDoS attacks. IAM manages user permissions and is not specifically for web attack protection, and Security Groups are for network-level access control to AWS resources, not CloudFront-specific protection."
    }
  ]
});
