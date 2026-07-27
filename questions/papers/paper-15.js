window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "paper-15",
  paperId: "paper-15",
  paperName: "Practice Paper 15",
  questions: [
    {
      id: "paper-15-001",
      domain: "ACM",
      topic: "economies-of-scale",
      type: "single",
      question: "How do customers benefit from Amazon’s massive economies of scale?",
      options: [
        "Periodic price reductions as the result of Amazon’s operational efficiencies",
        "New Amazon EC2 instance types providing the latest hardware",
        "The ability to scale up and down when needed",
        "Increased reliability in the underlying hardware of Amazon EC2 instances"
      ],
      correctAnswer: [0],
      explanation: "Amazon's massive economies of scale let it negotiate lower costs on infrastructure and pass those savings on to customers through periodic price reductions driven by its own operational efficiencies. New EC2 instance types reflect hardware innovation rather than a scale benefit, the ability to scale up and down describes elasticity, and increased hardware reliability is an operational feature rather than a direct result of economies of scale."
    },
    {
      id: "paper-15-002",
      domain: "MON",
      topic: "cloudtrail",
      type: "multiple-select",
      question: "Which AWS services can be used to gather information about AWS account activity? (Select TWO.)",
      options: [
        "Amazon CloudFront",
        "AWS Cloud9",
        "AWS CloudTrail",
        "AWS CloudHSM",
        "Amazon CloudWatch"
      ],
      correctAnswer: [2, 4],
      explanation: "AWS CloudTrail records every API call and account activity across AWS services, while Amazon CloudWatch monitors metrics and logs and can alert on that activity, together providing visibility into account activity. Amazon CloudFront is a content delivery network, AWS Cloud9 is a cloud IDE, and AWS CloudHSM is a hardware security module for managing encryption keys — none of these track account activity."
    },
    {
      id: "paper-15-003",
      domain: "DBA",
      topic: "managed-services",
      type: "multiple-select",
      question: "Which of the following common IT tasks can AWS cover to free up company IT resources? (Select TWO.)",
      options: [
        "Patching databases software",
        "Testing application releases",
        "Backing up databases",
        "Creating database schema",
        "Running penetration tests"
      ],
      correctAnswer: [0, 2],
      explanation: "AWS-managed database services take on undifferentiated heavy lifting such as patching database software and backing up databases, freeing company IT staff to focus on higher-value work. Testing application releases and creating database schema remain application-specific tasks the customer must perform, and running penetration tests is something the customer initiates (and must get AWS authorization for) rather than a task AWS covers on the customer's behalf."
    },
    {
      id: "paper-15-004",
      domain: "ACM",
      topic: "spot-instances",
      type: "single",
      question: "In which scenario should Amazon EC2 Spot Instances be used?",
      options: [
        "A company wants to move its main website to AWS from an on-premises web server.",
        "A company has a number of application services whose Service Level Agreement (SLA) requires 99.999% uptime.",
        "A company’s heavily used legacy database is currently running on-premises.",
        "A company has a number of infrequent, interruptible jobs that are currently using On-Demand Instances."
      ],
      correctAnswer: [3],
      explanation: "Amazon EC2 Spot Instances offer steep discounts on spare capacity but can be reclaimed with short notice, making them ideal for infrequent, interruptible jobs currently running on more expensive On-Demand Instances. Migrating a main website, meeting a 99.999% uptime SLA, or running a heavily used legacy database all require continuous, reliable availability that Spot Instances cannot guarantee."
    },
    {
      id: "paper-15-005",
      domain: "GLB",
      topic: "availability-zones",
      type: "single",
      question: "Which AWS feature should a customer leverage to achieve high availability of an application?",
      options: [
        "AWS Direct Connect",
        "Availability Zones",
        "Data centers",
        "Amazon Virtual Private Cloud (Amazon VPC)"
      ],
      correctAnswer: [1],
      explanation: "Availability Zones are physically separate, redundant data centers within a Region, and distributing an application across multiple AZs is the standard way to achieve high availability. AWS Direct Connect is a private network link, plain 'data centers' isn't an actionable AWS feature, and a VPC is a logical network container that doesn't by itself provide availability."
    },
    {
      id: "paper-15-006",
      domain: "ACM",
      topic: "support",
      type: "single",
      question: "Which is the minimum AWS Support plan that includes Infrastructure Event Management without additional costs?",
      options: [
        "Enterprise",
        "Business",
        "Developer",
        "Basic"
      ],
      correctAnswer: [0],
      explanation: "Infrastructure Event Management, which provides architecture and scaling guidance for planned events, is included at no additional cost only with the Enterprise Support plan; it is a paid add-on under Business support. The Developer and Basic plans don't include this proactive event support at any cost."
    },
    {
      id: "paper-15-007",
      domain: "S3",
      topic: "s3",
      type: "single",
      question: "Which AWS service can serve a static website?",
      options: [
        "Amazon S3",
        "Amazon Route 53",
        "Amazon QuickSight",
        "AWS X-Ray"
      ],
      correctAnswer: [0],
      explanation: "Amazon S3 can host a static website directly from a bucket, serving HTML, CSS, and JavaScript files without a dedicated web server. Amazon Route 53 is a DNS service, Amazon QuickSight is a business-intelligence tool, and AWS X-Ray is for application tracing — none of these serve website content."
    },
    {
      id: "paper-15-008",
      domain: "CLD",
      topic: "agility",
      type: "single",
      question: "How does AWS shorten the time to provision IT resources?",
      options: [
        "It supplies an online IT ticketing platform for resource requests.",
        "It supports automatic code validation services.",
        "It provides the ability to programmatically provision existing resources.",
        "It automates the resource request process from a company’s IT vendor list."
      ],
      correctAnswer: [2],
      explanation: "AWS shortens provisioning time by letting customers programmatically request and configure existing resources through APIs, the CLI, or SDKs, turning what used to take weeks into minutes. AWS doesn't rely on an online ticketing platform, automatic code validation, or automating requests through a vendor list — provisioning is self-service and API-driven."
    },
    {
      id: "paper-15-009",
      domain: "GLB",
      topic: "edge-locations",
      type: "multiple-select",
      question: "What can AWS edge locations be used for? (Select TWO.)",
      options: [
        "Hosting applications",
        "Delivering content closer to users",
        "Running NoSQL database caching services",
        "Reducing traffic on the server by caching responses",
        "Sending notification messages to end users"
      ],
      correctAnswer: [1, 3],
      explanation: "AWS Edge Locations deliver content closer to end users and reduce origin-server traffic by caching frequently requested responses, as with Amazon CloudFront. They are not used to host full applications, run NoSQL caching services, or send notification messages — those are functions of EC2, DynamoDB Accelerator, and SNS respectively."
    },
    {
      id: "paper-15-010",
      domain: "IAM",
      topic: "iam-policies",
      type: "single",
      question: "Which of the following can limit Amazon Simple Storage Service (Amazon S3) bucket access to specific users?",
      options: [
        "A public and private key-pair",
        "Amazon Inspector",
        "AWS Identity and Access Management (IAM) policies",
        "Security Groups"
      ],
      correctAnswer: [2],
      explanation: "AWS IAM policies let you grant or restrict specific users' access to an S3 bucket, controlling exactly who can read, write, or manage its contents. A public/private key pair is used for EC2 SSH access rather than bucket permissions, Amazon Inspector is a vulnerability-assessment service, and Security Groups control network traffic to EC2 instances, not S3 bucket access."
    },
    {
      id: "paper-15-011",
      domain: "CLD",
      topic: "elasticity",
      type: "single",
      question: "A solution that is able to support growth in users, traffic, or data size with no drop in performance aligns with which cloud architecture principle?",
      options: [
        "Think parallel",
        "Implement elasticity",
        "Decouple your components",
        "Design for failure"
      ],
      correctAnswer: [1],
      explanation: "Elasticity is the cloud principle of automatically growing or shrinking capacity to match demand, ensuring performance doesn't degrade as users, traffic, or data volume increase. 'Think parallel' is about distributing workloads, 'decouple your components' is about reducing inter-dependencies, and 'design for failure' is about resilience — none specifically address sustaining performance through growth."
    },
    {
      id: "paper-15-012",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "Which of the following tasks is the responsibility of AWS?",
      options: [
        "Encrypting client-side data",
        "Configuring AWS Identity and Access Management (IAM) roles",
        "Securing the Amazon EC2 hypervisor",
        "Setting user password policies"
      ],
      correctAnswer: [2],
      explanation: "Securing the underlying EC2 hypervisor is part of the physical infrastructure layer that only AWS controls under the shared responsibility model, since customers have no access to it. Encrypting client-side data, configuring IAM roles, and setting password policies are all tasks the customer configures and manages themselves."
    },
    {
      id: "paper-15-013",
      domain: "ACM",
      topic: "pricing-models",
      type: "single",
      question: "One benefit of On-Demand Amazon Elastic Compute Cloud (Amazon EC2) pricing is:",
      options: [
        "the ability to bid for a lower hourly cost.",
        "paying a daily rate regardless of time used.",
        "paying only for time used.",
        "pre-paying for instances and paying a lower hourly rate."
      ],
      correctAnswer: [2],
      explanation: "On-Demand pricing lets customers pay only for the compute time they actually use, with no upfront commitment. Bidding for a lower hourly cost describes the old Spot Instance model, paying a flat daily rate regardless of usage doesn't reflect On-Demand billing, and pre-paying for a lower hourly rate describes Reserved Instances."
    },
    {
      id: "paper-15-014",
      domain: "OTH",
      topic: "quick-starts",
      type: "single",
      question: "An administrator needs to rapidly deploy a popular IT solution and start using it immediately. Where can the administrator find assistance?",
      options: [
        "AWS Well-Architected Framework documentation",
        "Amazon CloudFront",
        "AWS CodeCommit",
        "AWS Quick Start reference deployments"
      ],
      correctAnswer: [3],
      explanation: "AWS Quick Start reference deployments are pre-built, automated CloudFormation templates created by AWS and partners that let an administrator rapidly deploy popular software and start using it immediately. The Well-Architected Framework provides design guidance rather than a ready deployment, CloudFront is a CDN, and CodeCommit is a source-control service — none deploy a complete solution instantly."
    },
    {
      id: "paper-15-015",
      domain: "CMP",
      topic: "lambda",
      type: "single",
      question: "Which of the following services is in the category of AWS serverless platform?",
      options: [
        "Amazon EMR",
        "Elastic Load Balancing",
        "AWS Lambda",
        "AWS Mobile Hub"
      ],
      correctAnswer: [2],
      explanation: "AWS Lambda is AWS's core serverless compute service, running code in response to events without requiring you to provision or manage servers. Amazon EMR runs on managed clusters of EC2 instances, Elastic Load Balancing distributes traffic to servers, and AWS Mobile Hub was a mobile app development console — none are serverless compute platforms."
    },
    {
      id: "paper-15-016",
      domain: "CMP",
      topic: "serverless",
      type: "single",
      question: "Which services are parts of the AWS serverless platform?",
      options: [
        "Amazon EC2, Amazon S3, Amazon Athena",
        "Amazon Kinesis, Amazon SQS, Amazon EMR",
        "AWS Step Functions, Amazon DynamoDB, Amazon SNS",
        "Amazon Athena, Amazon Cognito, Amazon EC2"
      ],
      correctAnswer: [2],
      explanation: "AWS Step Functions, Amazon DynamoDB, and Amazon SNS are all serverless services — they scale automatically and require no server provisioning or management. Each of the other option sets mixes in at least one service that requires provisioned infrastructure, such as Amazon EC2 or Amazon EMR clusters, which are not serverless."
    },
    {
      id: "paper-15-017",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "Under the shared responsibility model, which of the following is a shared control between a customer and AWS?",
      options: [
        "Physical controls",
        "Patch management",
        "Zone security",
        "Data center auditing"
      ],
      correctAnswer: [1],
      explanation: "Patch management is a shared control under the AWS shared responsibility model: AWS patches the underlying infrastructure and hypervisor, while customers patch their guest operating systems and applications. Physical controls, zone security, and data center auditing are entirely AWS's responsibility, with no customer component."
    },
    {
      id: "paper-15-018",
      domain: "GLB",
      topic: "edge-locations",
      type: "multiple-select",
      question: "What can AWS edge locations be used for? (Select TWO.)",
      options: [
        "Hosting applications",
        "Delivering content closer to users",
        "Running NoSQL database caching services",
        "Reducing traffic on the server by caching responses",
        "Sending notification messages to end users"
      ],
      correctAnswer: [1, 3],
      explanation: "AWS Edge Locations deliver content closer to end users and reduce origin-server traffic by caching frequently requested responses, as with Amazon CloudFront. They are not used to host full applications, run NoSQL caching services, or send notification messages — those are functions of EC2, DynamoDB Accelerator, and SNS respectively."
    },
    {
      id: "paper-15-019",
      domain: "ELB",
      topic: "auto-scaling",
      type: "single",
      question: "What technology enables compute capacity to adjust as loads change?",
      options: [
        "Load balancing",
        "Automatic failover",
        "Round robin",
        "Auto Scaling"
      ],
      correctAnswer: [3],
      explanation: "AWS Auto Scaling automatically adjusts the number of EC2 instances (compute capacity) up or down to match changing load. Load balancing distributes existing traffic across instances rather than adjusting capacity, automatic failover switches to a backup resource on failure, and round robin is a traffic-distribution algorithm — neither adjusts capacity to load."
    },
    {
      id: "paper-15-020",
      domain: "GLB",
      topic: "global-services",
      type: "multiple-select",
      question: "Which AWS services are defined as global instead of regional? (Select TWO.)",
      options: [
        "Amazon Route 53",
        "Amazon EC2",
        "Amazon S3",
        "Amazon CloudFront",
        "Amazon DynamoDB"
      ],
      correctAnswer: [0, 3],
      explanation: "Amazon Route 53 and Amazon CloudFront are both global services, not tied to a specific AWS Region. Amazon EC2, Amazon S3, and Amazon DynamoDB are all regional services, where resources are created and run within a specific Region."
    },
    {
      id: "paper-15-021",
      domain: "SEC",
      topic: "artifact",
      type: "single",
      question: "Which AWS service would you use to obtain compliance reports and certificates?",
      options: [
        "AWS Artifact",
        "AWS Lambda",
        "Amazon Inspector",
        "AWS Certificate Manager"
      ],
      correctAnswer: [0],
      explanation: "AWS Artifact provides on-demand, self-service access to AWS's compliance reports and agreements, such as SOC and PCI documentation. AWS Lambda is a compute service, Amazon Inspector runs vulnerability assessments, and AWS Certificate Manager issues and manages SSL/TLS certificates — none provide compliance documentation."
    },
    {
      id: "paper-15-022",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "multiple-select",
      question: "Under the shared responsibility model, which of the following tasks are the responsibility of the AWS customer? (Select TWO.)",
      options: [
        "Ensuring that application data is encrypted at rest",
        "Ensuring that AWS NTP servers are set to the correct time",
        "Ensuring that users have received security training in the use of AWS services",
        "Ensuring that access to data centers is restricted",
        "Ensuring that hardware is disposed of properly"
      ],
      correctAnswer: [0, 2],
      explanation: "Under the shared responsibility model, the customer is responsible for encrypting their own application data at rest and ensuring their users receive security training in using AWS services. Setting AWS's NTP server time, restricting data center access, and properly disposing of hardware are all part of AWS's infrastructure-layer responsibilities."
    },
    {
      id: "paper-15-023",
      domain: "EC2",
      topic: "ec2",
      type: "single",
      question: "Which AWS service can be used to manually launch instances based on resource requirements?",
      options: [
        "Amazon EBS",
        "Amazon S3",
        "Amazon EC2",
        "Amazon ECS"
      ],
      correctAnswer: [2],
      explanation: "Amazon EC2 lets you manually launch virtual server instances and choose the instance type and size that match your resource requirements. Amazon EBS is block storage attached to instances, Amazon S3 is object storage, and Amazon ECS is a container orchestration service — none are used to launch general-purpose compute instances."
    },
    {
      id: "paper-15-024",
      domain: "ACM",
      topic: "reserved-instances",
      type: "single",
      question: "A company is migrating an application that is running non-interruptible workloads for a three-year time frame. Which pricing construct would provide the MOST cost-effective solution?",
      options: [
        "Amazon EC2 Spot Instances",
        "Amazon EC2 Dedicated Instances",
        "Amazon EC2 On-Demand Instances",
        "Amazon EC2 Reserved Instances"
      ],
      correctAnswer: [3],
      explanation: "For a predictable, non-interruptible workload running for a full three years, EC2 Reserved Instances provide the deepest discount in exchange for that long-term commitment, making them the most cost-effective option. Spot Instances can be interrupted, Dedicated Instances add a premium for physical isolation rather than savings, and On-Demand Instances cost far more over three years than a Reserved Instance commitment."
    },
    {
      id: "paper-15-025",
      domain: "ACM",
      topic: "tco",
      type: "multiple-select",
      question: "The financial benefits of using AWS are: (Select TWO.)",
      options: [
        "reduced Total Cost of Ownership (TCO).",
        "increased capital expenditure (capex).",
        "reduced operational expenditure (opex).",
        "deferred payment plans for startups.",
        "business credit lines for stratups."
      ],
      correctAnswer: [0, 2],
      explanation: "Moving to AWS reduces Total Cost of Ownership by removing the need to over-provision and maintain physical infrastructure, and it reduces operational expenditure (opex) since AWS handles infrastructure operations at scale. AWS actually decreases capital expenditure rather than increasing it, and AWS does not offer deferred payment plans or business credit lines as inherent financial benefits of the cloud."
    },
    {
      id: "paper-15-026",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "Which of the following is entirely the responsibility of AWS, according to the AWS shared responsibility model?",
      options: [
        "Patching of the guest operating system",
        "Security awareness and training",
        "Physical and environmental controls",
        "Development of an IAM password policy"
      ],
      correctAnswer: [2],
      explanation: "Physical and environmental controls, such as data center security and facility access, are entirely AWS's responsibility since customers never have physical access to AWS facilities. Patching the guest operating system, security awareness training, and developing an IAM password policy are all tasks that fall to the customer."
    },
    {
      id: "paper-15-027",
      domain: "VPC",
      topic: "direct-connect",
      type: "multiple-select",
      question: "Which AWS service allows companies to connect an Amazon VPC to an on-premises data center? (Select TWO)",
      options: [
        "AWS VPN",
        "Amazon Redshift",
        "API Gateway",
        "Amazon Direct Connect"
      ],
      correctAnswer: [0, 3],
      explanation: "Both AWS VPN and AWS Direct Connect let a company connect its on-premises data center to an Amazon VPC — VPN provides an encrypted connection over the public internet, while Direct Connect provides a dedicated private network link. Amazon Redshift is a data warehouse and API Gateway manages APIs — neither establishes network connectivity between on-premises and AWS."
    },
    {
      id: "paper-15-028",
      domain: "CMP",
      topic: "lambda",
      type: "single",
      question: "A company wants to reduce the physical compute footprint that developers use to run code. Which service would meet that need by enabling serverless architectures?",
      options: [
        "Amazon Elastic Compute Cloud (Amazon EC2)",
        "AWS Lambda",
        "Amazon DynamoDB",
        "AWS CodeCommit"
      ],
      correctAnswer: [1],
      explanation: "AWS Lambda lets developers run code without provisioning or managing any servers, directly reducing the physical compute footprint needed to run application code. Amazon EC2 still requires managing server instances, Amazon DynamoDB is a database service, and AWS CodeCommit is a source-control repository — none enable serverless code execution."
    },
    {
      id: "paper-15-029",
      domain: "MON",
      topic: "health-dashboard",
      type: "single",
      question: "Which AWS service provides alerts when an AWS event may impact a company’s AWS resources?",
      options: [
        "AWS Personal Health Dashboard",
        "AWS Service Health Dashboard",
        "AWS Trusted Advisor",
        "AWS Infrastructure Event Management"
      ],
      correctAnswer: [0],
      explanation: "The AWS Personal Health Dashboard provides a personalized view of AWS service health and alerts you specifically about events likely to affect your own resources. The AWS Service Health Dashboard shows general, account-agnostic service status, AWS Trusted Advisor gives best-practice recommendations rather than real-time event alerts, and Infrastructure Event Management is a support offering, not an alerting service."
    },
    {
      id: "paper-15-030",
      domain: "ACM",
      topic: "trusted-advisor",
      type: "multiple-select",
      question: "Which of the following are categories of AWS Trusted Advisor? (Select TWO.)",
      options: [
        "Fault Tolerance",
        "Instance Usage",
        "Infrastructure",
        "Performance",
        "Storage Capacity"
      ],
      correctAnswer: [0, 3],
      explanation: "AWS Trusted Advisor evaluates your account across five categories, two of which are Fault Tolerance and Performance, providing recommendations to improve resiliency and efficiency. 'Instance Usage,' 'Infrastructure,' and 'Storage Capacity' are not among Trusted Advisor's official categories, which also include Cost Optimization, Security, and Service Limits."
    },
    {
      id: "paper-15-031",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "Which of the following services falls under the responsibility of the customer to maintain operating system configuration, security patching, and networking?",
      options: [
        "Amazon RDS",
        "Amazon EC2",
        "Amazon ElastiCache",
        "AWS Fargate"
      ],
      correctAnswer: [0],
      explanation: "Amazon EC2 is Infrastructure as a Service, so the customer is responsible for the guest operating system configuration, security patching, and networking on their instances. Amazon RDS, ElastiCache, and AWS Fargate are managed services where AWS takes on operating system maintenance and patching, leaving less operational burden on the customer."
    },
    {
      id: "paper-15-032",
      domain: "ACM",
      topic: "tco",
      type: "single",
      question: "A company will be moving from an on-premises data center to the AWS Cloud. What would be one financial difference after the move?",
      options: [
        "Moving from variable operational expense (opex) to upfront capital expense (capex).",
        "Moving from upfront capital expense (capex) to variable capital expense (capex).",
        "Moving from upfront capital expense (capex) to variable operational expense (opex).",
        "Elimination of upfront capital expense (capex) and elimination of variable operational expense (opex)"
      ],
      correctAnswer: [2],
      explanation: "Moving from an on-premises data center to AWS shifts spending from upfront capital expense (capex), buying hardware in advance, to variable operational expense (opex), where you pay only for the resources you actually consume. The other options either reverse this direction, describe a capex-to-capex shift that doesn't apply to cloud economics, or incorrectly claim all expenses are eliminated."
    },
    {
      id: "paper-15-033",
      domain: "ACM",
      topic: "pricing-calculator",
      type: "single",
      question: "How should a customer forecast the future costs for running a new web application?",
      options: [
        "Amazon Aurora Backtrack",
        "Amazon CloudWatch Billing Alarms",
        "AWS Simple Monthly Calculator",
        "AWS Cost and Usage report"
      ],
      correctAnswer: [2],
      explanation: "The AWS Pricing Calculator (formerly the Simple Monthly Calculator) lets customers estimate and forecast future costs of running workloads on AWS before deploying them. Amazon Aurora Backtrack is a database point-in-time rewind feature, while CloudWatch Billing Alarms and Cost and Usage Reports report on costs already incurred rather than forecasting future spend."
    },
    {
      id: "paper-15-034",
      domain: "ACM",
      topic: "support",
      type: "single",
      question: "Which is the MINIMUM AWS Support plan that provides technical support through phone calls?",
      options: [
        "Enterprise",
        "Business",
        "Developer",
        "Basic"
      ],
      correctAnswer: [1],
      explanation: "The Business Support plan is the minimum tier that includes access to AWS Support engineers via phone, chat, and email around the clock. The Basic and Developer plans do not include phone support, and while Enterprise includes it too, it is not the minimum plan that does."
    },
    {
      id: "paper-15-035",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "According to the AWS shared responsibility model, what is the sole responsibility of AWS?",
      options: [
        "Application security",
        "Edge location management",
        "Patch management",
        "Client-side data"
      ],
      correctAnswer: [1],
      explanation: "Edge location management is part of AWS's global network infrastructure and is entirely AWS's responsibility, with no customer involvement. Application security, patch management, and protecting client-side data are all customer responsibilities under the shared model."
    },
    {
      id: "paper-15-036",
      domain: "IAM",
      topic: "iam-groups",
      type: "single",
      question: "Which AWS IAM feature is used to associate a set of permissions with multiple users?",
      options: [
        "Multi-factor authentication",
        "Groups",
        "Password policies",
        "Access keys"
      ],
      correctAnswer: [1],
      explanation: "IAM Groups let you attach a single set of permissions policies to many users at once, so all group members inherit the same access. Multi-factor authentication adds a second authentication factor, password policies enforce password rules, and access keys are credentials for programmatic access — none associate permissions with multiple users as a set."
    },
    {
      id: "paper-15-037",
      domain: "CLD",
      topic: "cloud-benefits",
      type: "multiple-select",
      question: "Which of the following are benefits of the AWS Cloud? (Choose two.)",
      options: [
        "Unlimited uptime",
        "Elasticity",
        "Agility",
        "Colocation",
        "Capital expenses"
      ],
      correctAnswer: [1, 2],
      explanation: "Elasticity (automatically scaling resources to match demand) and agility (quickly provisioning and experimenting with resources) are core benefits of the AWS Cloud. AWS does not offer 'unlimited uptime' since disruptions can still occur, nor colocation, and the cloud reduces capital expenses rather than being a benefit called 'capital expenses.'"
    },
    {
      id: "paper-15-038",
      domain: "AID",
      topic: "directory-service",
      type: "single",
      question: "Which of the following can a customer use to enable single sign-on (SSO) to the AWS Console?",
      options: [
        "Amazon Connect",
        "AWS Directory Service",
        "Amazon Pinpoint",
        "Amazon Rekognition"
      ],
      correctAnswer: [1],
      explanation: "AWS Directory Service integrates with Microsoft Active Directory or a standalone directory to enable single sign-on to the AWS Management Console and other applications. Amazon Connect is a cloud contact-center service, Amazon Pinpoint is for customer messaging campaigns, and Amazon Rekognition is an image/video analysis service — none provide SSO capability."
    },
    {
      id: "paper-15-039",
      domain: "GLB",
      topic: "availability-zones",
      type: "single",
      question: "What are the multiple, isolated locations within an AWS Region that are connected by low-latency networks called?",
      options: [
        "AWS Direct Connects",
        "Amazon VPCs",
        "Edge locations",
        "Availability Zones"
      ],
      correctAnswer: [3],
      explanation: "Availability Zones are the multiple, isolated locations within an AWS Region, each with independent power and networking but connected to other AZs in the Region by low-latency links. AWS Direct Connect is a network connection service, Amazon VPCs are logical network boundaries you create, and Edge Locations are CDN caching sites — none describe the isolated data-center clusters within a Region."
    },
    {
      id: "paper-15-040",
      domain: "SEC",
      topic: "compliance",
      type: "multiple-select",
      question: "Which of the following benefits does the AWS Compliance program provide to AWS customers? (Choose two.)",
      options: [
        "It verifies that hosted workloads are automatically compliant with the controls of supported compliance frameworks.",
        "AWS is responsible for the maintenance of common compliance framework documentation.",
        "It assures customers that AWS is maintaining physical security and data protection.",
        "It ensures the use of compliance frameworks that are being used by other cloud providers.",
        "It will adopt new compliance frameworks as they become relevant to customer workloads."
      ],
      correctAnswer: [0, 1],
      explanation: "The AWS Compliance program gives customers confidence that hosted workloads meet the controls required by supported compliance frameworks, and AWS itself takes on responsibility for maintaining the documentation behind those common frameworks, accessible through AWS Artifact. This is distinct from AWS's inherited responsibility for physical security and data protection, and the program doesn't mirror frameworks used by other cloud providers or promise to adopt every future framework."
    },
    {
      id: "paper-15-041",
      domain: "SEC",
      topic: "artifact",
      type: "single",
      question: "Which of the following services provides on-demand access to AWS compliance reports?",
      options: [
        "AWS IAM",
        "AWS Artifact",
        "Amazon GuardDuty",
        "AWS KMS"
      ],
      correctAnswer: [1],
      explanation: "AWS Artifact is the self-service portal for downloading AWS's compliance reports and agreements at any time. AWS IAM manages user and access permissions, Amazon GuardDuty is a threat-detection service, and AWS KMS manages encryption keys — none provide compliance documentation access."
    },
    {
      id: "paper-15-042",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "As part of the AWS shared responsibility model, which of the following operational controls do users fully inherit from AWS?",
      options: [
        "Security management of data center",
        "Patch management",
        "Configuration management",
        "User and access management"
      ],
      correctAnswer: [3],
      explanation: "User and access management, such as configuring IAM users, groups, and policies, is a control that the customer fully assumes under the AWS shared responsibility model — AWS provides the IAM service, but managing who has access is entirely up to the customer. Security management of the data center is entirely AWS's responsibility, while patch management and configuration management of guest operating systems and applications are shared duties split between AWS and the customer."
    },
    {
      id: "paper-15-043",
      domain: "ACM",
      topic: "tco",
      type: "multiple-select",
      question: "When comparing AWS Cloud with on-premises Total Cost of Ownership, which expenses must be considered? (Choose two.)",
      options: [
        "Software development",
        "Project management",
        "Storage hardware",
        "Physical servers",
        "Antivirus software license"
      ],
      correctAnswer: [2, 3],
      explanation: "Storage hardware and physical servers are capital costs that must be factored into an on-premises TCO comparison, since AWS eliminates the need to purchase and maintain that hardware. Software development and project management costs are typically incurred in both environments, and antivirus licensing is a comparatively minor cost rather than a major TCO factor in this comparison."
    },
    {
      id: "paper-15-044",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "multiple-select",
      question: "Under the shared responsibility model, which of the following tasks are the responsibility of the customer? (Choose two.)",
      options: [
        "Maintaining the underlying Amazon EC2 hardware.",
        "Managing the VPC network access control lists.",
        "Encrypting data in transit and at rest.",
        "Replacing failed hard disk drives.",
        "Deploying hardware in different Availability Zones."
      ],
      correctAnswer: [1, 2],
      explanation: "Under the shared responsibility model, the customer manages VPC network access control lists and is responsible for encrypting their own data in transit and at rest. Maintaining the underlying EC2 hardware, replacing failed disk drives, and deploying hardware across Availability Zones are all part of AWS's physical infrastructure responsibilities."
    },
    {
      id: "paper-15-045",
      domain: "CLD",
      topic: "elasticity",
      type: "multiple-select",
      question: "Which scenarios represent the concept of elasticity on AWS? (Choose two.)",
      options: [
        "Scaling the number of Amazon EC2 instances based on traffic.",
        "Resizing Amazon RDS instances as business needs change.",
        "Automatically directing traffic to less-utilized Amazon EC2 instances.",
        "Using AWS compliance documents to accelerate the compliance process.",
        "Having the ability to create and govern environments using code."
      ],
      correctAnswer: [0, 1],
      explanation: "Elasticity means automatically scaling resources up or down to match demand, exemplified by scaling the number of EC2 instances based on traffic and resizing RDS instances as business needs change. Directing traffic to less-utilized instances describes load balancing, using compliance documents describes AWS Artifact, and creating/governing environments with code describes Infrastructure as Code — neither is elasticity."
    },
    {
      id: "paper-15-046",
      domain: "ACM",
      topic: "spot-instances",
      type: "single",
      question: "When is it beneficial for a company to use a Spot Instance?",
      options: [
        "When there is flexibility in when an application needs to run.",
        "When there are mission-critical workloads.",
        "When dedicated capacity is needed.",
        "When an instance should not be stopped."
      ],
      correctAnswer: [0],
      explanation: "Spot Instances are beneficial when there is flexibility in when a workload can run, since AWS can reclaim the capacity with short notice in exchange for steep discounts. Mission-critical workloads, dedicated capacity needs, and instances that must never be stopped all require guaranteed availability that Spot Instances cannot provide."
    },
    {
      id: "paper-15-047",
      domain: "ACM",
      topic: "tco",
      type: "multiple-select",
      question: "A company is considering moving its on-premises data center to AWS. What factors should be included in doing a Total Cost of Ownership (TCO) analysis? (Choose two.)",
      options: [
        "Amazon EC2 instance availability",
        "Power consumption of the data center",
        "Labor costs to replace old servers",
        "Application developer time",
        "Database engine capacity"
      ],
      correctAnswer: [1, 2],
      explanation: "A TCO analysis of moving from on-premises to AWS should include the data center's power consumption and the labor cost of replacing aging servers, since AWS eliminates both when workloads move to the cloud. EC2 instance availability and database engine capacity are AWS capabilities rather than on-premises costs being eliminated, and developer time is generally similar in both environments."
    },
    {
      id: "paper-15-048",
      domain: "CMP",
      topic: "lambda",
      type: "single",
      question: "How does AWS charge for AWS Lambda?",
      options: [
        "Users bid on the maximum price they are willing to pay per hour.",
        "Users choose a 1-, 3- or 5-year upfront payment term.",
        "Users pay for the required permanent storage on a file system or in a database.",
        "Users pay based on the number of requests and consumed compute resources."
      ],
      correctAnswer: [3],
      explanation: "AWS Lambda charges based on the number of requests invoked and the amount of compute resources, memory and duration, consumed during execution — a pure pay-per-use model. Lambda has no bidding mechanism, no 1-, 3-, or 5-year upfront terms, and doesn't charge for permanent storage, since it is a stateless compute service."
    },
    {
      id: "paper-15-049",
      domain: "VPC",
      topic: "security-groups",
      type: "single",
      question: "What function do security groups serve related Amazon Elastic Compute Cloud (Amazon EC2) instance security?",
      options: [
        "Act as a virtual firewall for the Amazon EC2 instance.",
        "Secure AWS user accounts with AWS identity and Access Management (IAM) policies.",
        "Provide DDoS protection with AWS Shield.",
        "Use Amazon CloudFront to protect the Amazon EC2 instance."
      ],
      correctAnswer: [0],
      explanation: "Security groups act as a virtual firewall controlling inbound and outbound traffic at the instance level for Amazon EC2. IAM policies secure user permissions rather than network traffic, AWS Shield provides DDoS protection, and CloudFront is a content delivery network — none describe the instance-level traffic filtering that security groups provide."
    },
    {
      id: "paper-15-050",
      domain: "GLB",
      topic: "disaster-recovery",
      type: "single",
      question: "Which disaster recovery scenario offers the lowest probability of down time?",
      options: [
        "Backup and restore",
        "Pilot light",
        "Warm standby",
        "Multi-site active-active"
      ],
      correctAnswer: [3],
      explanation: "A multi-site active-active disaster recovery strategy runs full production workloads simultaneously in multiple Regions, so if one Region fails, traffic simply continues to be served from the other with little to no downtime. Backup and restore has the longest recovery time, pilot light keeps only a minimal environment running, and warm standby runs a scaled-down copy — all three carry a higher probability of downtime than active-active."
    }
  ]
});
