window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "paper-13",
  paperId: "paper-13",
  paperName: "Practice Paper 13",
  questions: [
    {
      id: "paper-13-001",
      domain: "ACM",
      topic: "cost-allocation-tags",
      type: "single",
      question: "The use of what AWS feature or service allows companies to track and categorize spending on a detailed level?",
      options: [
        "Cost allocation tags",
        "Consolidated billing",
        "AWS Budgets",
        "AWS Marketplace"
      ],
      correctAnswer: [0],
      explanation: "Cost allocation tags let organizations label AWS resources (e.g., by project, department, or cost center) so that spending can be tracked and categorized at a detailed level. AWS Budgets sets spending thresholds and alerts rather than categorizing costs, consolidated billing combines multiple accounts into one bill without adding cost categorization, and AWS Marketplace is a software catalog unrelated to cost tracking."
    },
    {
      id: "paper-13-002",
      domain: "S3",
      topic: "s3",
      type: "single",
      question: "Which service stores objects, provides real-time access to those objects, and offers versioning and lifecycle capabilities?",
      options: [
        "Amazon Glacier",
        "AWS Storage Gateway",
        "Amazon S3",
        "Amazon EBS"
      ],
      correctAnswer: [2],
      explanation: "Amazon S3 is an object storage service that provides real-time access to stored objects and supports versioning and lifecycle policies to automatically transition or expire objects. Amazon Glacier is for long-term archival with delayed retrieval (not real-time access), AWS Storage Gateway connects on-premises storage to AWS rather than storing objects itself, and Amazon EBS is block storage attached to EC2 instances, not an object store with these features."
    },
    {
      id: "paper-13-003",
      domain: "ARC",
      topic: "professional-services",
      type: "single",
      question: "What AWS team assists customers with accelerating cloud adoption through paid engagements in any of several specialty practice area ?",
      options: [
        "AWS Enterprise Support",
        "AWS Solutions Architects",
        "AWS Professional Services",
        "AWS Account Managers"
      ],
      correctAnswer: [2],
      explanation: "AWS Professional Services is the team that helps customers accelerate cloud adoption through paid, hands-on engagements across specialty practice areas such as migration, security, and DevOps. AWS Enterprise Support provides proactive account guidance rather than hands-on delivery engagements, AWS Solutions Architects provide technical guidance but aren't a distinct paid engagement team, and Account Managers handle the commercial relationship, not technical delivery work."
    },
    {
      id: "paper-13-004",
      domain: "ARC",
      topic: "partner-network",
      type: "single",
      question: "A customer would like to design and build a new workload on AWS Cloud but does not have the AWS-related software technical expertise in-house. Which of the following AWS programs can a customer take advantage of to achieve that outcome?",
      options: [
        "AWS Partner Network Technology Partners",
        "AWS Marketplace",
        "AWS Partner Network Consulting Partners",
        "AWS Service Catalog"
      ],
      correctAnswer: [2],
      explanation: "AWS Partner Network (APN) Consulting Partners are professional services firms that help customers design, migrate, and build workloads on AWS when the customer lacks in-house AWS expertise. Technology Partners provide software products rather than hands-on build services, AWS Marketplace is a catalog for purchasing software, and AWS Service Catalog lets organizations manage catalogs of approved IT services — neither delivers consulting expertise."
    },
    {
      id: "paper-13-005",
      domain: "ARC",
      topic: "well-architected",
      type: "single",
      question: "Distributing workloads across multiple Availability Zones supports which cloud architecture design principle?",
      options: [
        "Implement automation.",
        "Design for agility.",
        "Design for failure.",
        "Implement elasticity."
      ],
      correctAnswer: [2],
      explanation: "Distributing workloads across multiple Availability Zones is a direct application of the 'design for failure' principle, ensuring that the failure of one data center does not take down the entire application. Implementing automation and elasticity are separate best practices about operational efficiency and dynamic capacity, not fault tolerance, and designing for agility is about speed of deployment, not resilience."
    },
    {
      id: "paper-13-006",
      domain: "DBA",
      topic: "rds",
      type: "multiple-select",
      question: "Which AWS services can host a Microsoft SQL Server database? (Select TWO)",
      options: [
        "Amazon EC2",
        "Amazon Relational Database Service (Amazon RDS)",
        "Amazon Aurora",
        "Amazon Redshift",
        "Amazon S3"
      ],
      correctAnswer: [0, 1],
      explanation: "Amazon EC2 lets you install and run Microsoft SQL Server yourself on a virtual machine, and Amazon RDS offers SQL Server as a fully managed database engine option, so both can host a SQL Server database. Amazon Aurora only supports MySQL- and PostgreSQL-compatible engines, Amazon Redshift is a data warehouse for analytics, and Amazon S3 is object storage — none of these can run a SQL Server database."
    },
    {
      id: "paper-13-007",
      domain: "ACM",
      topic: "trusted-advisor",
      type: "single",
      question: "Which of the following inspects AWS environments to find opportunities that can save money for users and also improve system performance ?",
      options: [
        "AWS Cost Explorer",
        "AWS Trusted Advisor",
        "Consolidated billing",
        "Detailed billing"
      ],
      correctAnswer: [1],
      explanation: "AWS Trusted Advisor inspects your AWS environment against best practices and provides recommendations to save money and improve performance, security, and fault tolerance. AWS Cost Explorer visualizes spending but doesn't give performance recommendations, and consolidated billing and detailed billing are billing features, not inspection or advisory tools."
    },
    {
      id: "paper-13-008",
      domain: "ACM",
      topic: "pricing-models",
      type: "single",
      question: "Which of the following Amazon EC2 pricing models allow customers to use existing server-bound software license ?",
      options: [
        "Spot Instances",
        "Reserved Instances",
        "Dedicated Hosts",
        "On-Demand Instances"
      ],
      correctAnswer: [2],
      explanation: "Dedicated Hosts provide a physical server dedicated to a single customer, which lets the customer bring existing per-socket or per-core server-bound software licenses (such as Microsoft or Oracle licenses) to AWS. Spot, Reserved, and On-Demand Instances all run on shared hardware and don't give the host-level visibility needed to satisfy those licensing requirements."
    },
    {
      id: "paper-13-009",
      domain: "CLD",
      topic: "elasticity",
      type: "multiple-select",
      question: "Which AWS characteristics make AWS cost effective for a workload with dynamic user demand? (Select TWO)",
      options: [
        "High availability",
        "Shared security model",
        "Elasticity",
        "Pay-as-you-go pricing",
        "Reliability"
      ],
      correctAnswer: [2, 3],
      explanation: "Elasticity lets resources scale up automatically to meet demand spikes and back down when demand falls, and pay-as-you-go pricing means you only pay for the capacity you actually use — together making AWS cost effective for workloads with dynamic demand. High availability and reliability describe uptime and resilience (not cost), and the shared security model describes security responsibilities, not cost efficiency."
    },
    {
      id: "paper-13-010",
      domain: "MON",
      topic: "cloudtrail",
      type: "single",
      question: "Which service enables risk auditing by continuously monitoring and logging account activity, including user actions in the AWS Management Console and AWS SDKs?",
      options: [
        "Amazon CloudWatch",
        "AWS CloudTrail",
        "AWS Config",
        "AWS Health"
      ],
      correctAnswer: [1],
      explanation: "AWS CloudTrail continuously logs and records account activity, including API calls made through the AWS Management Console, CLI, and SDKs, making it the service used for auditing who did what. Amazon CloudWatch monitors performance metrics rather than tracking API/user activity, AWS Config tracks resource configuration changes over time, and AWS Health reports on service health events, not user actions."
    },
    {
      id: "paper-13-011",
      domain: "S3",
      topic: "s3",
      type: "multiple-select",
      question: "Which of the following are characteristics of Amazon S3? (Select TWO.)",
      options: [
        "A global file system",
        "An object store",
        "A local file store",
        "A network file system",
        "A durable storage system"
      ],
      correctAnswer: [1, 4],
      explanation: "Amazon S3 is an object store, meaning it stores data as discrete objects with metadata rather than in a file hierarchy, and it is designed for 99.999999999% (11 nines) durability. It is not a local file store or a network file system (those describe services like EFS or FSx), and while it is globally accessible, it is not itself a 'global file system.'"
    },
    {
      id: "paper-13-012",
      domain: "VPC",
      topic: "vpn",
      type: "multiple-select",
      question: "Which services can be used across hybrid AWS Cloud architectures? (Select TWO.)",
      options: [
        "Amazon Route 53",
        "Virtual Private Gateway",
        "Classic Load Balancer",
        "Auto Scaling",
        "Amazon CloudWatch default metrics"
      ],
      correctAnswer: [0, 1],
      explanation: "Amazon Route 53 can resolve DNS for resources both in AWS and on-premises, and a Virtual Private Gateway is the AWS side of a Site-to-Site VPN connection that links on-premises networks to a VPC, making both usable across hybrid architectures. A Classic Load Balancer, Auto Scaling, and default CloudWatch metrics are all scoped to resources running within AWS and don't extend to on-premises infrastructure."
    },
    {
      id: "paper-13-013",
      domain: "ACM",
      topic: "tco",
      type: "single",
      question: "What costs are included when comparing AWS Total Cost of Ownership (TCO) with on-premises TCO?",
      options: [
        "Project management",
        "Antivirus software licensing",
        "Data center security",
        "Software development"
      ],
      correctAnswer: [2],
      explanation: "When comparing AWS TCO with on-premises TCO, data center security is a relevant cost to include because it's a real infrastructure expense that AWS absorbs into its pricing but that an on-premises data center must pay for directly. Project management and software development are business/operational costs unrelated to infrastructure, and antivirus software licensing is an application-level cost, not an infrastructure/data-center cost being compared."
    },
    {
      id: "paper-13-014",
      domain: "STG",
      topic: "ebs",
      type: "single",
      question: "A company is considering using AWS for a self-hosted database that requires a nightly shutdown for maintenance and cost-saving purposes. Which service should the company use?",
      options: [
        "Amazon Redshift",
        "Amazon DynamoDB",
        "Amazon Elastic Compute Cloud (Amazon EC2) with Amazon EC2 instance store",
        "Amazon EC2 with Amazon Elastic Block Store (Amazon EBS)"
      ],
      correctAnswer: [3],
      explanation: "Amazon EC2 with Amazon EBS is the right fit because EBS volumes persist independently of the instance, so the database's data is preserved when the instance is stopped nightly and available again when it restarts. EC2 with instance store loses all data when the instance stops, and Amazon Redshift and DynamoDB are managed services, not a self-hosted database solution as required."
    },
    {
      id: "paper-13-015",
      domain: "GLB",
      topic: "availability-zones",
      type: "single",
      question: "Which of the following is a correct relationship between regions, Availability Zones, and edge locations?",
      options: [
        "Data centers contain regions.",
        "Regions contain Availability Zones.",
        "Availability Zones contain edge locations.",
        "Edge locations contain regions."
      ],
      correctAnswer: [1],
      explanation: "Regions are geographic areas that contain multiple, isolated Availability Zones, which in turn are made up of one or more data centers. Data centers don't contain regions, Availability Zones don't contain edge locations (edge locations form a separate, larger caching network), and edge locations don't contain regions — the containment hierarchy only runs from Region down to Availability Zone down to data center."
    },
    {
      id: "paper-13-016",
      domain: "ACM",
      topic: "cost-management",
      type: "multiple-select",
      question: "Which AWS tools assist with estimating costs? (Select three.)",
      options: [
        "Detailed billing report",
        "Cost allocation tags",
        "AWS Simple Monthly Calculator",
        "AWS Total Cost of Ownership (TCO) Calculator",
        "Cost Eliminator"
      ],
      correctAnswer: [1, 2, 3],
      explanation: "Cost allocation tags help categorize and estimate spending by project or team, the AWS Simple Monthly Calculator estimates monthly AWS costs for planned architectures, and the AWS TCO Calculator compares AWS costs against on-premises costs. Detailed billing reports show historical usage rather than helping estimate future costs, and 'Cost Eliminator' is not a real AWS service."
    },
    {
      id: "paper-13-017",
      domain: "ACM",
      topic: "consolidated-billing",
      type: "multiple-select",
      question: "Which of the following are advantages of AWS consolidated billing? (Select TWO.)",
      options: [
        "The ability to receive one bill for multiple accounts",
        "Service limits increasing by default in all accounts",
        "A fixed discount on the monthly bill",
        "Potential volume discounts, as usage in all accounts is combined",
        "The automatic extension of the master account’s AWS support plan to all accounts"
      ],
      correctAnswer: [0, 3],
      explanation: "Consolidated billing lets an organization receive one bill for multiple linked AWS accounts and lets usage across all those accounts combine toward volume discount tiers. It does not automatically raise service limits for all accounts, it doesn't provide a fixed discount (only usage-based volume pricing), and it does not extend the master account's support plan to linked accounts."
    },
    {
      id: "paper-13-018",
      domain: "ACM",
      topic: "reserved-instances",
      type: "single",
      question: "Which of the following Reserved Instance (RI) pricing models provides the highest average savings compared to On-Demand pricing?",
      options: [
        "One-year, No Upfront, Standard RI pricing",
        "One-year, All Upfront, Convertible RI pricing",
        "Three-year, All Upfront, Standard RI pricing",
        "Three-year, No Upfront, Convertible RI pricing"
      ],
      correctAnswer: [2],
      explanation: "A three-year, All Upfront, Standard Reserved Instance provides the highest average discount compared to On-Demand pricing because longer terms and full upfront payment both increase savings, and Standard RIs offer deeper discounts than Convertible RIs (which trade some discount for flexibility). The one-year options and the three-year Convertible option all offer smaller savings than the three-year Standard All Upfront combination."
    },
    {
      id: "paper-13-019",
      domain: "CLD",
      topic: "cloud-economics",
      type: "single",
      question: "Compared with costs in traditional and virtualized data centers, AWS has:",
      options: [
        "greater variable costs and greater upfront costs.",
        "fixed usage costs and lower upfront costs.",
        "lower variable costs and greater upfront costs.",
        "lower variable costs and lower upfront costs."
      ],
      correctAnswer: [3],
      explanation: "AWS pricing has lower variable costs (thanks to economies of scale and pay-as-you-go pricing) and lower upfront costs (no need to buy hardware in advance) than traditional or virtualized data centers. The other options incorrectly claim greater upfront or variable costs, or a 'fixed usage cost' structure, none of which reflect how AWS pricing actually compares to on-premises costs."
    },
    {
      id: "paper-13-020",
      domain: "GLB",
      topic: "edge-locations",
      type: "single",
      question: "A characteristic of edge locations is that they:",
      options: [
        "host Amazon EC2 instances closer to users.",
        "help lower latency and improve performance for users.",
        "cache frequently changing data without reaching the origin server.",
        "refresh data changes daily."
      ],
      correctAnswer: [1],
      explanation: "Edge locations are AWS's global network of caching sites used by services like CloudFront to cache content close to end users, which helps lower latency and improve performance. Edge locations don't host EC2 instances, they cache content that generally doesn't change frequently (not 'frequently changing data'), and they don't refresh on a fixed daily schedule — caching is based on TTL settings, not a daily cycle."
    },
    {
      id: "paper-13-021",
      domain: "IAM",
      topic: "iam-policies",
      type: "single",
      question: "Which of the following can limit Amazon Storage Service (Amazon S3) bucket access to specific users?",
      options: [
        "A public and private key-pair",
        "Amazon Inspector",
        "AWS Identity and Access Management (IAM) policies",
        "Security Groups"
      ],
      correctAnswer: [2],
      explanation: "AWS IAM policies can grant or restrict specific users' access to an S3 bucket, controlling exactly who can read or write objects. A public/private key pair is used for things like SSH or client-side encryption (not bucket-level access control), Amazon Inspector scans for vulnerabilities, and Security Groups control network traffic to EC2 instances, not S3 access."
    },
    {
      id: "paper-13-022",
      domain: "ACM",
      topic: "support",
      type: "single",
      question: "Which of the following security-related actions are available at no cost?",
      options: [
        "Calling AWS Support",
        "Contacting AWS Professional Services to request a workshop",
        "Accessing forums, blogs, and whitepapers",
        "Attending AWS classes at a local university"
      ],
      correctAnswer: [2],
      explanation: "Accessing AWS forums, blogs, and whitepapers is free and available to everyone, providing security guidance and best practices at no cost. Calling AWS Support requires a paid support plan, engaging AWS Professional Services for a workshop is a paid engagement, and attending AWS classes at a local university typically involves tuition or fees."
    },
    {
      id: "paper-13-023",
      domain: "ACM",
      topic: "reserved-instances",
      type: "single",
      question: "Which of the Reserved Instance (RI) pricing models can change the attributes of the RI as long as the exchange results in the creation of RIs of equal or greater value?",
      options: [
        "Dedicated RIs",
        "Scheduled RIs",
        "Convertible RIs",
        "Standard RIs"
      ],
      correctAnswer: [2],
      explanation: "Convertible Reserved Instances can be exchanged for a different RI configuration during the term, as long as the new RI(s) are of equal or greater value, giving flexibility as needs change. Standard RIs do not allow exchanges to different instance attributes, and 'Dedicated RIs' and 'Scheduled RIs' are not valid RI pricing model names offering this exchange feature."
    },
    {
      id: "paper-13-024",
      domain: "CLD",
      topic: "elasticity",
      type: "single",
      question: "Which AWS feature will reduce the customer’s total cost of ownership (TCO)?",
      options: [
        "Shared responsibility security model",
        "Single tenancy",
        "Elastic computing",
        "Encryption"
      ],
      correctAnswer: [2],
      explanation: "Elastic computing lets you scale resources up or down to match actual demand, so you avoid paying for idle, over-provisioned capacity — directly lowering total cost of ownership. The shared responsibility security model, single tenancy, and encryption are all about security or isolation, not cost reduction, so they don't affect TCO the way elasticity does."
    },
    {
      id: "paper-13-025",
      domain: "ELB",
      topic: "elastic-load-balancing",
      type: "single",
      question: "Which of the following services will automatically scale with an expected increase in web traffic?",
      options: [
        "AWS CodePipeline",
        "Elastic Load Balancing",
        "Amazon EBS",
        "AWS Direct Connect"
      ],
      correctAnswer: [1],
      explanation: "Elastic Load Balancing works together with Auto Scaling to automatically distribute and scale traffic across multiple targets as web traffic increases, keeping the application responsive. AWS CodePipeline automates software releases (not traffic scaling), Amazon EBS is block storage attached to an instance, and AWS Direct Connect is a dedicated network connection — none of these scale automatically with traffic."
    },
    {
      id: "paper-13-026",
      domain: "SEC",
      topic: "artifact",
      type: "single",
      question: "Where are AWS compliance documents, such as an SOC 1 report, located?",
      options: [
        "Amazon Inspector",
        "AWS CloudTrail",
        "AWS Artifact",
        "AWS Certificate Manager"
      ],
      correctAnswer: [2],
      explanation: "AWS Artifact is the self-service portal where customers can download AWS compliance reports and agreements, such as SOC 1 reports, PCI attestations, and ISO certifications. Amazon Inspector scans for vulnerabilities, AWS CloudTrail logs API activity, and AWS Certificate Manager issues and manages SSL/TLS certificates — none of these provide compliance documentation."
    },
    {
      id: "paper-13-027",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "multiple-select",
      question: "Under the AWS shared responsibility model, which of the following activities are the customer’s responsibility? (Select TWO.)",
      options: [
        "Patching operating system components for Amazon Relational Database Server (Amazon RDS)",
        "Encrypting data on the client-side",
        "Training the data center staff",
        "Configuring Network Access Control Lists (ACL)",
        "Maintaining environmental controls within a data center"
      ],
      correctAnswer: [1, 3],
      explanation: "Encrypting data on the client-side and configuring Network ACLs are both customer responsibilities under the AWS Shared Responsibility Model, since they involve configuring how the customer's own data and network traffic are protected. Patching the OS on Amazon RDS is AWS's responsibility (RDS is a managed service), and training data center staff and maintaining environmental controls within a data center are entirely AWS's responsibility."
    },
    {
      id: "paper-13-028",
      domain: "ARC",
      topic: "well-architected",
      type: "single",
      question: "Which is a recommended pattern for designing a highly available architecture on AWS?",
      options: [
        "Ensure that components have low-latency network connectivity.",
        "Run enough Amazon EC2 instances to operate at peak load.",
        "Ensure that the application is designed to accommodate failure of any single component.",
        "Use a monolithic application that handles all operations."
      ],
      correctAnswer: [2],
      explanation: "A recommended pattern for high availability is designing the application so it can tolerate the failure of any single component without an outage, achieved through redundancy and failover across multiple Availability Zones. Ensuring low-latency connectivity and running enough instances for peak load address performance and capacity, not fault tolerance, and a monolithic application is the opposite of a resilient, decoupled design."
    },
    {
      id: "paper-13-029",
      domain: "ARC",
      topic: "decoupling",
      type: "single",
      question: "According to best practices, how should an application be designed to run in the AWS Cloud?",
      options: [
        "Use tightly coupled components.",
        "Use loosely coupled components.",
        "Use infrequently coupled components.",
        "Use frequently coupled components."
      ],
      correctAnswer: [1],
      explanation: "AWS best practice recommends designing applications with loosely coupled components so each piece can be scaled, updated, or replaced independently and failures in one component don't cascade to others. Tightly coupled and 'frequently coupled' components create dependencies that reduce resilience and flexibility, and 'infrequently coupled' isn't a recognized architecture pattern."
    },
    {
      id: "paper-13-030",
      domain: "IAM",
      topic: "mfa",
      type: "multiple-select",
      question: "AWS supports which of the following methods to add security to Identity and Access Management (IAM) users? (Select TWO.)",
      options: [
        "Implementing Amazon Rekognition",
        "Using AWS Shield-protected resources",
        "Blocking access with Security Groups",
        "Using Multi-Factor Authentication (MFA)",
        "Enforcing password strength and expiration"
      ],
      correctAnswer: [3, 4],
      explanation: "Multi-Factor Authentication (MFA) adds a second authentication factor beyond a password, and enforcing password strength and expiration policies reduces the risk of weak or stale credentials — both directly secure IAM users. Amazon Rekognition is an image/video analysis service, AWS Shield-protected resources address DDoS protection, and Security Groups control network traffic to instances — none of these secure IAM user credentials."
    },
    {
      id: "paper-13-031",
      domain: "DBA",
      topic: "rds",
      type: "multiple-select",
      question: "Which AWS services should be used for read/write of constantly changing data? (Select TWO.)",
      options: [
        "Amazon Glacier",
        "Amazon RDS",
        "AWS Snowball",
        "Amazon Redshift",
        "Amazon EFS"
      ],
      correctAnswer: [1, 4],
      explanation: "Amazon RDS and Amazon EFS both support frequent, low-latency reads and writes, making them suitable for data that changes constantly — RDS for relational transactional data and EFS for shared file storage. Amazon Glacier and AWS Snowball are designed for archival and bulk data transfer (not frequent updates), and Amazon Redshift is a data warehouse optimized for analytical queries on relatively static, batch-loaded data."
    },
    {
      id: "paper-13-032",
      domain: "DBA",
      topic: "rds",
      type: "single",
      question: "What is one of the advantages of the Amazon Relational Database Service (Amazon RDS)?",
      options: [
        "It simplifies relational database administration tasks.",
        "It provides 99.99999999999% reliability and durability.",
        "It automatically scales databases for loads.",
        "It enabled users to dynamically adjust CPU and RAM resources."
      ],
      correctAnswer: [0],
      explanation: "Amazon RDS is a managed relational database service that simplifies administration tasks like patching, backups, and provisioning, removing much of the operational burden from the customer. RDS does not guarantee 99.99999999999% durability (that figure describes S3), it does not automatically scale compute for load the way DynamoDB or Aurora Serverless can, and it doesn't provide dynamic CPU/RAM adjustment without customer-initiated instance changes."
    },
    {
      id: "paper-13-033",
      domain: "DBA",
      topic: "aurora",
      type: "single",
      question: "A customer needs to run a MySQL database that easily scales. Which AWS service should they use?",
      options: [
        "Amazon Aurora",
        "Amazon Redshift",
        "Amazon DynamoDB",
        "Amazon ElastiCache"
      ],
      correctAnswer: [0],
      explanation: "Amazon Aurora is a MySQL- and PostgreSQL-compatible relational database built by AWS to scale easily while offering higher performance and availability than standard MySQL. Amazon Redshift is a data warehouse for analytics, Amazon DynamoDB is a NoSQL database (not MySQL-compatible), and Amazon ElastiCache is an in-memory cache, not a relational database."
    },
    {
      id: "paper-13-034",
      domain: "GLB",
      topic: "availability-zones",
      type: "single",
      question: "Which of the following components of the AWS Global Infrastructure consists of one or more discrete data centers interconnected through low latency links?",
      options: [
        "Availability Zone",
        "Edge location",
        "Region",
        "Private networking"
      ],
      correctAnswer: [0],
      explanation: "An Availability Zone consists of one or more discrete data centers with redundant power, networking, and connectivity, interconnected through low-latency links within a Region. An edge location is a caching point for content delivery, a Region is a broader geographic area containing multiple Availability Zones, and 'private networking' is not a component of the AWS Global Infrastructure hierarchy."
    },
    {
      id: "paper-13-035",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "Which of the following is a shared control between the customer and AWS?",
      options: [
        "Providing a key for Amazon S3 client-side encryption",
        "Configuration of an Amazon EC2 instance",
        "Environmental controls of physical AWS data centers",
        "Awareness and training"
      ],
      correctAnswer: [3],
      explanation: "Awareness and training is a shared control because both AWS and the customer must train their own respective staff — AWS trains its employees on operating the infrastructure, while customers must train their employees on securely using AWS services. Providing a client-side encryption key and configuring an EC2 instance are solely the customer's responsibility, and environmental controls of physical data centers are solely AWS's responsibility."
    },
    {
      id: "paper-13-036",
      domain: "GLB",
      topic: "availability-zones",
      type: "single",
      question: "How many Availability Zones should compute resources be provisioned across to achieve high availability?",
      options: [
        "A minimum of one",
        "A minimum of two",
        "A minimum of three",
        "A minimum of four or more"
      ],
      correctAnswer: [1],
      explanation: "To achieve high availability, compute resources should be provisioned across a minimum of two Availability Zones, so that the failure of one AZ doesn't take down the entire application. Using only one Availability Zone leaves a single point of failure, and while three or more AZs can further increase resilience, the minimum needed for basic high availability is two."
    },
    {
      id: "paper-13-037",
      domain: "CLD",
      topic: "cloud-benefits",
      type: "single",
      question: "One of the advantages to moving infrastructure from an on-premises data center to the AWS Cloud is:",
      options: [
        "it allows the business to eliminate IT bills.",
        "it allows the business to put a server in each customer’s data center.",
        "it allows the business to focus on business activities.",
        "it allows the business to leave servers unpatched."
      ],
      correctAnswer: [2],
      explanation: "Moving infrastructure to AWS lets a business offload data center operations and hardware management to AWS, freeing employees to focus on core business activities instead of infrastructure upkeep. AWS doesn't eliminate all IT bills (you still pay for AWS usage), placing a server in every customer's data center is unrelated to cloud migration, and leaving servers unpatched is never a recommended practice."
    },
    {
      id: "paper-13-038",
      domain: "S3",
      topic: "s3",
      type: "single",
      question: "What is the lowest-cost, durable storage option for retaining database backups for immediate retrieval?",
      options: [
        "Amazon S3",
        "Amazon Glacier",
        "Amazon EBS",
        "Amazon EC2 Instance Store"
      ],
      correctAnswer: [0],
      explanation: "Amazon S3 offers low-cost, highly durable storage with immediate (millisecond) retrieval, making it ideal for database backups that need to be available on demand. Amazon Glacier is cheaper but has retrieval delays (not immediate), Amazon EBS is more expensive block storage tied to a specific EC2 instance, and EC2 Instance Store loses data when the instance stops, making it unsuitable for durable backups."
    },
    {
      id: "paper-13-039",
      domain: "IAM",
      topic: "access-keys",
      type: "single",
      question: "Which AWS IAM feature allows developers to access AWS services through the AWS CLI?",
      options: [
        "API keys",
        "Access keys",
        "User names/Passwords",
        "SSH keys"
      ],
      correctAnswer: [1],
      explanation: "Access keys (an access key ID and secret access key) are the credentials an IAM user needs to authenticate programmatic requests made through the AWS CLI or SDKs. 'API keys' isn't the correct AWS terminology for this credential type, usernames/passwords authenticate console sign-in (not CLI), and SSH keys are used to connect to EC2 instances, not to authenticate CLI calls to AWS services."
    },
    {
      id: "paper-13-040",
      domain: "DBA",
      topic: "dynamodb",
      type: "single",
      question: "Which of the following is a fast and reliable NoSQL database service?",
      options: [
        "Amazon Redshift",
        "Amazon RDS",
        "Amazon DynamoDB",
        "Amazon S3"
      ],
      correctAnswer: [2],
      explanation: "Amazon DynamoDB is AWS's fully managed, fast, and reliable NoSQL database service, built for consistent, single-digit-millisecond performance at any scale. Amazon Redshift is a data warehouse for analytics, Amazon RDS is a relational (SQL) database service, and Amazon S3 is object storage — none of these are NoSQL databases."
    },
    {
      id: "paper-13-041",
      domain: "CLD",
      topic: "agility",
      type: "single",
      question: "What is an example of agility in the AWS Cloud?",
      options: [
        "Access to multiple instance types",
        "Access to managed services",
        "Using Consolidated Billing to produce one bill",
        "Decreased acquisition time for new compute resources"
      ],
      correctAnswer: [3],
      explanation: "Agility in the AWS Cloud refers to the speed at which resources can be provisioned, and decreased acquisition time for new compute resources — spinning up servers in minutes instead of the weeks it takes to buy new hardware — is a direct example of that. Access to multiple instance types and managed services are benefits of AWS's breadth of offerings, and consolidated billing is a cost management feature, none of which specifically describe agility."
    },
    {
      id: "paper-13-042",
      domain: "ACM",
      topic: "organizations",
      type: "single",
      question: "Which service should a customer use to consolidate and centrally manage multiple AWS accounts?",
      options: [
        "AWS IAM",
        "AWS Organizations",
        "AWS Schema Conversion Tool",
        "AWS Config"
      ],
      correctAnswer: [1],
      explanation: "AWS Organizations lets a customer centrally manage and govern multiple AWS accounts, including consolidated billing, service control policies, and account creation. AWS IAM manages users and permissions within a single account, AWS Schema Conversion Tool converts database schemas for migration, and AWS Config tracks resource configuration — none of these manage multiple accounts centrally."
    },
    {
      id: "paper-13-043",
      domain: "ARC",
      topic: "well-architected",
      type: "single",
      question: "What approach to transcoding a large number of individual video files adheres to AWS architecture principles?",
      options: [
        "Using many instances in parallel",
        "Using a single large instance during off-peak hours",
        "Using dedicated hardware",
        "Using a large GPU instance type"
      ],
      correctAnswer: [0],
      explanation: "Using many instances in parallel to transcode a large number of individual video files follows the AWS best practice of parallelizing tasks, distributing the workload across many resources to finish faster and more cost-effectively. Using a single large instance, dedicated hardware, or one large GPU instance all rely on a single resource, creating a bottleneck and going against the principle of parallelization."
    },
    {
      id: "paper-13-044",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "For which auditing process does AWS have sole responsibility?",
      options: [
        "AWS IAM policies",
        "Physical security",
        "Amazon S3 bucket policies",
        "AWS CloudTrail Logs"
      ],
      correctAnswer: [1],
      explanation: "Physical security of AWS data centers is an area where AWS has sole responsibility and sole auditing responsibility, since customers have no access to the physical facilities. IAM policies, S3 bucket policies, and CloudTrail logs are all configured and controlled by the customer, making them the customer's auditing responsibility, not AWS's."
    },
    {
      id: "paper-13-045",
      domain: "GLB",
      topic: "global-infrastructure",
      type: "single",
      question: "Which feature of the AWS Cloud will support an international company’s requirement for low latency to all of its customers?",
      options: [
        "Fault tolerance",
        "Global reach",
        "Pay-as-you-go pricing",
        "High availability"
      ],
      correctAnswer: [1],
      explanation: "Global reach refers to AWS's worldwide network of Regions and Edge Locations, which lets a company deploy resources close to customers anywhere in the world to achieve low latency. Fault tolerance and high availability describe resilience to failure (not geographic proximity), and pay-as-you-go pricing is a cost model unrelated to latency."
    },
    {
      id: "paper-13-046",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "Which of the following is the customer’s responsibility under the AWS shared responsibility model?",
      options: [
        "Patching underlying infrastructure",
        "Physical security",
        "Patching Amazon EC2 instances",
        "Patching network infrastructure"
      ],
      correctAnswer: [2],
      explanation: "Under the Shared Responsibility Model, the customer is responsible for patching the guest operating system on Amazon EC2 instances, since EC2 is infrastructure-as-a-service and AWS does not manage the OS layer. Patching the underlying infrastructure and network infrastructure, along with physical security, are all AWS's responsibility as the cloud provider."
    },
    {
      id: "paper-13-047",
      domain: "ACM",
      topic: "consolidated-billing",
      type: "single",
      question: "A customer is using multiple AWS accounts with separate billing. How can the customer take advantage of volume discounts with minimal impact to the AWS resources?",
      options: [
        "Create one global AWS account and move all AWS resources to that account.",
        "Sign up for three years of Reserved Instance pricing up front.",
        "Use the consolidated billing feature from AWS Organizations.",
        "Sign up for the AWS Enterprise support plan to get volume discounts."
      ],
      correctAnswer: [2],
      explanation: "Using the consolidated billing feature from AWS Organizations lets a customer link multiple accounts under one paying account, combining usage so all accounts benefit from volume discounts, without needing to move or restructure existing resources. Creating one global account and migrating all resources would be disruptive, committing to three years of Reserved Instances doesn't address multi-account discounts, and Enterprise Support doesn't provide volume discounts on usage."
    },
    {
      id: "paper-13-048",
      domain: "MON",
      topic: "cloudwatch",
      type: "multiple-select",
      question: "Which of the following are features of Amazon CloudWatch Logs? (Select TWO.)",
      options: [
        "Summaries by Amazon Simple Notification Service (Amazon SNS)",
        "Free Amazon Elasticsearch Service analytics",
        "Provided at no charge",
        "Real-time monitoring",
        "Adjustable retention"
      ],
      correctAnswer: [3, 4],
      explanation: "Amazon CloudWatch Logs provides real-time monitoring of log data as it's ingested and lets you configure adjustable log retention periods (from one day to indefinite). It isn't provided free of charge (you pay for ingestion and storage), it doesn't provide free Elasticsearch analytics (that requires separate setup and cost), and it isn't summarized specifically through Amazon SNS."
    },
    {
      id: "paper-13-049",
      domain: "GLB",
      topic: "route-53",
      type: "single",
      question: "Which of the following is an AWS managed Domain Name System (DNS) web service?",
      options: [
        "Amazon Route 53",
        "Amazon Neptune",
        "Amazon SageMaker",
        "Amazon Lightsail"
      ],
      correctAnswer: [0],
      explanation: "Amazon Route 53 is AWS's managed Domain Name System (DNS) web service, translating domain names into IP addresses and routing end-user requests to AWS or on-premises resources. Amazon Neptune is a graph database, Amazon SageMaker is a machine learning service, and Amazon Lightsail is a simplified virtual server offering — none of these are DNS services."
    },
    {
      id: "paper-13-050",
      domain: "GLB",
      topic: "regions",
      type: "multiple-select",
      question: "A customer is deploying a new application and needs to choose an AWS Region. Which of the following factors could influence the customer’s decision? (Select TWO.)",
      options: [
        "Reduced latency to users",
        "The application’s presentation in the local language",
        "Data sovereignty compliance",
        "Cooling costs in hotter climates",
        "Proximity to the customer’s office for on-site visits"
      ],
      correctAnswer: [0, 2],
      explanation: "Reduced latency to users and data sovereignty/compliance requirements are both key factors in choosing an AWS Region, since proximity affects performance and certain regulations require data to stay within specific geographic or legal boundaries. Local language presentation is an application-level localization choice unrelated to Region selection, and cooling costs and proximity for on-site visits are AWS's operational concerns or minor considerations, not typical customer decision factors for Region selection."
    }
  ]
});
