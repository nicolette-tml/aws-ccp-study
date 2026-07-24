window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "paper-20",
  paperId: "paper-20",
  paperName: "Practice Paper 20",
  questions: [
    {
      id: "paper-20-001",
      domain: "SEC",
      topic: "guardduty",
      type: "single",
      question: "Which AWS service helps identify malicious or unauthorized activities in AWS accounts and workloads?",
      options: [
        "Amazon Rekognition",
        "AWS Trusted Advisor",
        "Amazon GuardDuty",
        "Amazon CloudWatch"
      ],
      correctAnswer: [2],
      explanation: "Amazon GuardDuty is AWS's threat detection service that continuously monitors AWS accounts and workloads for malicious or unauthorized activity using machine learning and threat intelligence feeds. Amazon Rekognition analyzes images and video, AWS Trusted Advisor gives best-practice recommendations rather than threat detection, and Amazon CloudWatch monitors metrics and logs but does not itself identify malicious activity."
    },
    {
      id: "paper-20-002",
      domain: "ARC",
      topic: "aws-marketplace",
      type: "single",
      question: "A company wants to try a third-party ecommerce solution before deciding to use it long term. Which AWS service or tool will support this effort?",
      options: [
        "AWS Marketplace",
        "AWS Partner Network (APN)",
        "AWS Managed Services",
        "AWS Service Catalog"
      ],
      correctAnswer: [0],
      explanation: "AWS Marketplace lets companies discover, test, and purchase third-party software solutions, including ecommerce platforms, before committing to a long-term purchase. The AWS Partner Network is a program for AWS partners rather than a way to trial software, AWS Managed Services provides infrastructure operations support, and AWS Service Catalog helps organizations curate and manage internally approved IT services rather than trial external products."
    },
    {
      id: "paper-20-003",
      domain: "DBA",
      topic: "dynamodb",
      type: "single",
      question: "Which AWS service is a managed NoSQL database?",
      options: [
        "Amazon Redshift",
        "Amazon DynamoDB",
        "Amazon Aurora",
        "Amazon RDS for MariaDB"
      ],
      correctAnswer: [1],
      explanation: "Amazon DynamoDB is AWS's fully managed NoSQL database, providing key-value and document storage with fast, predictable performance. Amazon Redshift is a data warehouse for analytics, while Amazon Aurora and Amazon RDS for MariaDB are relational (SQL) database services, not NoSQL."
    },
    {
      id: "paper-20-004",
      domain: "ACM",
      topic: "billing-alarms",
      type: "single",
      question: "Which AWS service should be used to create a billing alarm?",
      options: [
        "AWS Trusted Advisor",
        "AWS CloudTrail",
        "Amazon CloudWatch",
        "Amazon QuickSight"
      ],
      correctAnswer: [2],
      explanation: "Amazon CloudWatch is used to create billing alarms by monitoring the EstimatedCharges metric and notifying users when AWS spending crosses a defined threshold. AWS Trusted Advisor provides best-practice recommendations, AWS CloudTrail logs API activity, and Amazon QuickSight is a business-intelligence visualization tool — none of these create billing alarms."
    },
    {
      id: "paper-20-005",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "A company is hosting a web application in a Docker container on Amazon EC2. AWS is responsible for which of the following tasks?",
      options: [
        "Scaling the web application and services developed with Docker",
        "Provisioning or scheduling containers to run on clusters and maintain their availability",
        "Performing hardware maintenance in the AWS facilities that run the AWS Cloud",
        "Managing the guest operating system, including updates and security patches"
      ],
      correctAnswer: [2],
      explanation: "Under the shared responsibility model, AWS is always responsible for performing hardware maintenance in the physical facilities that run the AWS Cloud, regardless of what the customer runs on top, such as Docker containers on EC2. Scaling the application, provisioning or scheduling the containers, and managing the guest operating system are all customer responsibilities when self-managing Docker on EC2 rather than using a fully managed container service."
    },
    {
      id: "paper-20-006",
      domain: "GLB",
      topic: "cloudfront",
      type: "single",
      question: "Users are reporting latency when connecting to a website with a global customer base. Which AWS service will improve the customer experience by reducing latency?",
      options: [
        "Amazon CloudFront",
        "AWS Direct Connect",
        "Amazon EC2 Auto Scaling",
        "AWS Transit Gateway"
      ],
      correctAnswer: [0],
      explanation: "Amazon CloudFront is AWS's content delivery network, caching content at Edge Locations around the globe so users experience lower latency no matter where they connect from. AWS Direct Connect provides a dedicated private network link rather than global content caching, Amazon EC2 Auto Scaling adjusts compute capacity rather than latency, and AWS Transit Gateway connects VPCs and on-premises networks together."
    },
    {
      id: "paper-20-007",
      domain: "IAM",
      topic: "iam-best-practices",
      type: "multiple-select",
      question: "Which actions represent best practices for using AWS IAM? (Choose two.)",
      options: [
        "Configure a strong password policy",
        "Share the security credentials among users of AWS accounts who are in the same Region",
        "Use access keys to log in to the AWS Management Console",
        "Rotate access keys on a regular basis",
        "Avoid using IAM roles to delegate permissions"
      ],
      correctAnswer: [0, 3],
      explanation: "Configuring a strong password policy and regularly rotating access keys are both recommended IAM best practices that reduce the risk of compromised credentials. Sharing security credentials among multiple users violates the principle of unique identities, using access keys to log into the Management Console is not their intended purpose since access keys are for CLI/SDK/API use, and avoiding IAM roles for delegating permissions is bad practice, since roles are the recommended way to grant temporary, scoped access."
    },
    {
      id: "paper-20-008",
      domain: "VPC",
      topic: "vpc-flow-logs",
      type: "single",
      question: "Which AWS feature or service can be used to capture information about incoming and outgoing traffic in an AWS VPC infrastructure?",
      options: [
        "AWS Config",
        "VPC Flow Logs",
        "AWS Trusted Advisor",
        "AWS CloudTrail"
      ],
      correctAnswer: [1],
      explanation: "VPC Flow Logs capture information about the IP traffic going to and from network interfaces within a VPC, making them the tool for analyzing incoming and outgoing traffic. AWS Config tracks resource configuration changes, AWS Trusted Advisor provides best-practice recommendations, and AWS CloudTrail logs API calls — none of these capture network traffic data."
    },
    {
      id: "paper-20-009",
      domain: "GLB",
      topic: "global-accelerator",
      type: "single",
      question: "A company wants to use an AWS service to monitor the health of application endpoints, with the ability to route traffic to healthy regional endpoints to improve application availability. Which service will support these requirements?",
      options: [
        "Amazon Inspector",
        "Amazon CloudWatch",
        "AWS Global Accelerator",
        "Amazon CloudFront"
      ],
      correctAnswer: [2],
      explanation: "AWS Global Accelerator monitors the health of application endpoints and routes traffic to the closest healthy regional endpoint, improving both availability and performance for globally distributed applications. Amazon Inspector is a vulnerability-assessment service, Amazon CloudWatch monitors metrics but does not route traffic, and Amazon CloudFront caches content rather than performing health-based endpoint routing."
    },
    {
      id: "paper-20-010",
      domain: "ARC",
      topic: "well-architected",
      type: "multiple-select",
      question: "According to the AWS Well-Architected Framework, what change management steps should be taken to achieve reliability in the AWS Cloud? (Choose two.)",
      options: [
        "Use AWS Config to generate an inventory of AWS resources",
        "Use service limits to prevent users from creating or making changes to AWS resources",
        "Use AWS CloudTrail to record AWS API calls into an auditable log file",
        "Use AWS Certificate Manager to whitelist approved AWS resources and services",
        "Use Amazon GuardDuty to validate configuration changes made to AWS resources"
      ],
      correctAnswer: [0, 2],
      explanation: "Using AWS Config to generate an inventory of AWS resources and AWS CloudTrail to record API calls into an auditable log file are both change-management practices recommended by the Well-Architected Framework's Reliability pillar, since they give visibility into what resources exist and what changes were made. Service limits prevent resource creation rather than manage change, AWS Certificate Manager manages SSL/TLS certificates and is unrelated to whitelisting resources, and Amazon GuardDuty detects threats rather than validating configuration changes."
    },
    {
      id: "paper-20-011",
      domain: "MON",
      topic: "cloudwatch",
      type: "single",
      question: "Which service can be used to monitor and receive alerts for AWS account root user AWS Management Console sign-in events?",
      options: [
        "Amazon CloudWatch",
        "AWS Config",
        "AWS Trusted Advisor",
        "AWS IAM"
      ],
      correctAnswer: [0],
      explanation: "Amazon CloudWatch can be configured with alarms to monitor and alert on AWS account root user Management Console sign-in events, helping detect unauthorized use of the highly privileged root account. AWS Config tracks resource configuration state, AWS Trusted Advisor gives cost/security/performance recommendations, and AWS IAM manages users and permissions but does not itself generate sign-in alerts."
    },
    {
      id: "paper-20-012",
      domain: "ARC",
      topic: "decoupling",
      type: "single",
      question: "Which design principle should be considered when architecting in the AWS Cloud?",
      options: [
        "Think of servers as non-disposable resources",
        "Use synchronous integration of services",
        "Design loosely coupled components",
        "Implement the least permissive rules for security groups"
      ],
      correctAnswer: [2],
      explanation: "Designing loosely coupled components is a key AWS architecture principle, reducing interdependencies so a failure or change in one component does not cascade to others. The recommended practices are actually the opposite of the other options: treat servers as disposable (not non-disposable) resources, favor asynchronous (not synchronous) integration, and implement the least permissive (not most permissive) security group rules."
    },
    {
      id: "paper-20-013",
      domain: "OTH",
      topic: "data-migration",
      type: "multiple-select",
      question: "Which AWS services can be used to move data from on-premises data centers to AWS? (Choose two.)",
      options: [
        "AWS Snowball",
        "AWS Lambda",
        "AWS ElastiCache",
        "AWS Database Migration Service (AWS DMS)",
        "Amazon API Gateway"
      ],
      correctAnswer: [0, 3],
      explanation: "AWS Snowball is a physical device used to securely transfer large amounts of data from on-premises data centers into AWS, and AWS Database Migration Service (AWS DMS) migrates databases to AWS with minimal downtime. AWS Lambda is a serverless compute service, Amazon ElastiCache is an in-memory caching service, and Amazon API Gateway manages APIs — none of these move data from on-premises environments to AWS."
    },
    {
      id: "paper-20-014",
      domain: "CLD",
      topic: "horizontal-scaling",
      type: "single",
      question: "A batch workload takes 5 hours to finish on an Amazon EC2 instance. The amount of data to be processed doubles monthly and the processing time is proportional. What is the best cloud architecture to address this consistently growing demand?",
      options: [
        "Run the application on a bigger EC2 instance size.",
        "Switch to an EC2 instance family that better matches batch requirements.",
        "Distribute the application across multiple EC2 instances and run the workload in parallel.",
        "Run the application on a bare metal EC2 instance."
      ],
      correctAnswer: [2],
      explanation: "Distributing the application across multiple EC2 instances and running the workload in parallel is horizontal scaling, which scales linearly with the growing data volume rather than being limited by the maximum size of one instance. Running on a bigger instance size or switching instance families are forms of vertical scaling, which will eventually hit a ceiling as demand keeps doubling, and simply using a bare metal instance does not address a consistently growing workload."
    },
    {
      id: "paper-20-015",
      domain: "ACM",
      topic: "organizations",
      type: "single",
      question: "Each department within a company has its own independent AWS account and its own payment method. New company leadership wants to centralize departmental governance and consolidate payments. How can this be achieved using AWS services or features?",
      options: [
        "Forward monthly invoices for each account. Then create IAM roles to allow cross-account access.",
        "Create a new AWS account. Then configure AWS Organizations and invite all existing accounts to join.",
        "Configure AWS Organizations in each of the existing accounts. Then link all accounts together.",
        "Use Cost Explorer to combine costs from all accounts. Then replicate IAM policies across accounts."
      ],
      correctAnswer: [1],
      explanation: "Creating a new AWS account and configuring AWS Organizations to invite the existing departmental accounts centralizes governance and consolidates billing under a single management account. Forwarding invoices and using cross-account IAM roles does not consolidate payments, configuring Organizations separately within each existing account does not create the required management-account hierarchy, and Cost Explorer only reports on costs — it does not consolidate billing or replicate policies."
    },
    {
      id: "paper-20-016",
      domain: "CLD",
      topic: "elasticity",
      type: "single",
      question: "The ability to horizontally scale Amazon EC2 instances based on demand is an example of which concept in the AWS Cloud value proposition?",
      options: [
        "Economy of scale",
        "Elasticity",
        "High availability",
        "Agility"
      ],
      correctAnswer: [1],
      explanation: "Elasticity is the AWS Cloud value proposition describing the ability to automatically scale resources, such as horizontally scaling EC2 instances, up or down based on demand. Economy of scale refers to AWS's cost advantages from massive scale, high availability refers to resilience against failure, and agility refers to the speed of provisioning resources — none specifically describe automatic demand-based scaling."
    },
    {
      id: "paper-20-017",
      domain: "ELB",
      topic: "auto-scaling",
      type: "single",
      question: "An ecommerce company anticipates a huge increase in web traffic for two very popular upcoming shopping holidays. Which AWS service or feature can be configured to dynamically adjust resources to meet this change in demand?",
      options: [
        "AWS CloudTrail",
        "Amazon EC2 Auto Scaling",
        "Amazon Forecast",
        "AWS Config"
      ],
      correctAnswer: [1],
      explanation: "Amazon EC2 Auto Scaling can be configured to dynamically add or remove EC2 instances in response to changing demand, making it ideal for handling traffic spikes during shopping holidays. AWS CloudTrail logs API activity, Amazon Forecast is a machine learning demand-forecasting service rather than a resource-scaling tool, and AWS Config tracks configuration changes — none of these adjust compute resources."
    },
    {
      id: "paper-20-018",
      domain: "VPC",
      topic: "vpn",
      type: "single",
      question: "Which AWS service enables users to securely connect to AWS resources over the public internet?",
      options: [
        "Amazon VPC peering",
        "AWS Direct Connect",
        "AWS VPN",
        "Amazon Pinpoint"
      ],
      correctAnswer: [2],
      explanation: "AWS VPN establishes an encrypted connection between an on-premises network (or user) and AWS resources over the public internet, providing secure connectivity without a dedicated line. Amazon VPC peering connects two VPCs to each other rather than external users to AWS, AWS Direct Connect requires a dedicated private network link instead of the public internet, and Amazon Pinpoint is a customer engagement/messaging service."
    },
    {
      id: "paper-20-019",
      domain: "ACM",
      topic: "cost-explorer",
      type: "single",
      question: "Which tool is used to forecast AWS spending?",
      options: [
        "AWS Trusted Advisor",
        "AWS Organizations",
        "Cost Explorer",
        "Amazon Inspector"
      ],
      correctAnswer: [2],
      explanation: "AWS Cost Explorer provides visualization and forecasting tools that help predict future AWS spending based on historical usage patterns. AWS Trusted Advisor gives best-practice recommendations, AWS Organizations manages multiple accounts, and Amazon Inspector performs security vulnerability assessments — none of these forecast spending."
    },
    {
      id: "paper-20-020",
      domain: "GLB",
      topic: "cloudfront",
      type: "single",
      question: "A company is running an ecommerce application hosted in Europe. To decrease latency for users who access the website from other parts of the world, the company would like to cache frequently accessed static content closer to the users. Which AWS service will support these requirements?",
      options: [
        "Amazon ElastiCache",
        "Amazon CloudFront",
        "Amazon Elastic File System (Amazon EFS)",
        "Amazon Elastic Block Store (Amazon EBS)"
      ],
      correctAnswer: [1],
      explanation: "Amazon CloudFront caches frequently accessed static content at Edge Locations around the world, reducing latency for users far from the origin, such as those outside Europe. Amazon ElastiCache caches application data in memory rather than delivering content to end users, Amazon EFS is a shared file system, and Amazon EBS is block storage for EC2 — neither caches content globally for viewers."
    },
    {
      id: "paper-20-021",
      domain: "GLB",
      topic: "regions",
      type: "single",
      question: "Which of the following is a component of the AWS Global Infrastructure?",
      options: [
        "Amazon Alexa",
        "AWS Regions",
        "Amazon Lightsail",
        "AWS Organizations"
      ],
      correctAnswer: [1],
      explanation: "AWS Regions are a core component of the AWS Global Infrastructure, consisting of clusters of Availability Zones located around the world. Amazon Alexa is a voice assistant product, Amazon Lightsail is a simplified virtual server offering, and AWS Organizations is an account-management service — none of these are physical or geographic infrastructure components."
    },
    {
      id: "paper-20-022",
      domain: "MON",
      topic: "cloudwatch",
      type: "single",
      question: "Which AWS service will help users determine if an application running on an Amazon EC2 instance has sufficient CPU capacity?",
      options: [
        "Amazon CloudWatch",
        "AWS Config",
        "AWS CloudTrail",
        "Amazon Inspector"
      ],
      correctAnswer: [0],
      explanation: "Amazon CloudWatch collects metrics such as CPU utilization from EC2 instances, letting users determine whether an application has sufficient CPU capacity. AWS Config tracks configuration changes, AWS CloudTrail logs API calls, and Amazon Inspector performs security vulnerability assessments — none of these monitor CPU performance metrics."
    },
    {
      id: "paper-20-023",
      domain: "ELB",
      topic: "elb",
      type: "single",
      question: "Why is it beneficial to use Elastic Load Balancers with applications?",
      options: [
        "They allow for the conversion from Application Load Balancers to Classic Load Balancers.",
        "They are capable of handling constant changes in network traffic patterns.",
        "They automatically adjust capacity.",
        "They are provided at no charge to users."
      ],
      correctAnswer: [1],
      explanation: "Elastic Load Balancers are beneficial because they can automatically handle constant changes in network traffic patterns, distributing incoming requests across healthy targets as load fluctuates. ELBs do not convert Application Load Balancers into Classic Load Balancers, they do not adjust compute capacity themselves (that is Auto Scaling), and they are a paid AWS service, not provided free of charge."
    },
    {
      id: "paper-20-024",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "multiple-select",
      question: "Which tasks are the customer’s responsibility in the AWS shared responsibility model? (Choose two.)",
      options: [
        "Infrastructure facilities access management",
        "Cloud infrastructure hardware lifecycle management",
        "Configuration management of user’s applications",
        "Networking infrastructure protection",
        "Security groups configuration"
      ],
      correctAnswer: [2, 4],
      explanation: "Under the shared responsibility model, configuration management of the customer's own applications and configuring security groups are both customer responsibilities, since they involve decisions the customer controls at the guest and network-access level. Infrastructure facilities access management, cloud infrastructure hardware lifecycle management, and networking infrastructure protection are all AWS's responsibility as part of securing the underlying cloud infrastructure."
    },
    {
      id: "paper-20-025",
      domain: "ARC",
      topic: "decoupling",
      type: "single",
      question: "IT systems should be designed to reduce interdependencies, so that a change or failure in one component does not cascade to other components. This is an example of which principle of cloud architecture design?",
      options: [
        "Scalability",
        "Loose coupling",
        "Automation",
        "Automatic scaling"
      ],
      correctAnswer: [1],
      explanation: "Reducing interdependencies so that a failure in one component does not cascade to others describes the principle of loose coupling, a core AWS architecture design practice. Scalability refers to handling increased load, automation refers to reducing manual operational tasks, and automatic scaling specifically refers to dynamically adjusting capacity — none describe reducing interdependencies between components."
    },
    {
      id: "paper-20-026",
      domain: "SEC",
      topic: "waf",
      type: "multiple-select",
      question: "Which AWS service or feature can enhance network security by blocking requests from a particular network for a web application on AWS? (Choose two.)",
      options: [
        "AWS WAF",
        "AWS Trusted Advisor",
        "AWS Direct Connect",
        "AWS Organizations",
        "Network ACLs"
      ],
      correctAnswer: [0, 4],
      explanation: "AWS WAF filters and blocks malicious or unwanted web requests, including those from specific IP ranges or networks, at the application layer, while Network ACLs act as a stateless firewall at the subnet level that can block traffic from a particular network. AWS Trusted Advisor gives recommendations rather than blocking traffic, AWS Direct Connect is a private network connection, and AWS Organizations manages multiple accounts — none of these block network requests to a web application."
    },
    {
      id: "paper-20-027",
      domain: "STG",
      topic: "efs",
      type: "single",
      question: "An application runs on multiple Amazon EC2 instances that access a shared file system simultaneously. Which AWS storage service should be used?",
      options: [
        "Amazon EBS",
        "Amazon EFS",
        "Amazon S3",
        "AWS Artifact"
      ],
      correctAnswer: [1],
      explanation: "Amazon EFS is a shared, scalable file system that multiple EC2 instances can mount and access simultaneously, making it the right choice for concurrent shared access. Amazon EBS volumes generally attach to only a single EC2 instance at a time, Amazon S3 is object storage rather than a POSIX file system for direct EC2 mounting, and AWS Artifact provides compliance documents, not storage."
    },
    {
      id: "paper-20-028",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "multiple-select",
      question: "A web application is hosted on AWS using an Elastic Load Balancer, multiple Amazon EC2 instances, and Amazon RDS. Which security measures fall under the responsibility of AWS? (Choose two.)",
      options: [
        "Running a virus scan on EC2 instances",
        "Protecting against IP spoofing and packet sniffing",
        "Installing the latest security patches on the RDS instance",
        "Encrypting communication between the EC2 instances and the Elastic Load Balancer",
        "Configuring a security group and a network access control list (NACL) for EC2"
      ],
      correctAnswer: [1, 2],
      explanation: "Protecting against IP spoofing and packet sniffing at the network infrastructure level, and installing the latest security patches on the underlying RDS host software, are both AWS's responsibilities under the shared responsibility model since RDS is a managed database service. Running virus scans on EC2 instances, encrypting communication between the load balancer and EC2 instances, and configuring security groups and NACLs are all customer responsibilities, since they involve the customer's guest-level configuration."
    },
    {
      id: "paper-20-029",
      domain: "CLD",
      topic: "elasticity",
      type: "single",
      question: "What is the benefit of elasticity in the AWS Cloud?",
      options: [
        "Ensure web traffic is automatically spread across multiple AWS Regions.",
        "Minimize storage costs by automatically archiving log data.",
        "Enable AWS to automatically select the most cost-effective services.",
        "Automatically adjust the required compute capacity to maintain consistent performance."
      ],
      correctAnswer: [3],
      explanation: "The benefit of elasticity in the AWS Cloud is the ability to automatically adjust required compute capacity up or down to maintain consistent performance as demand changes. Spreading traffic across Regions is a high-availability practice, minimizing storage costs through archiving relates to S3 storage classes, and AWS does not automatically select the most cost-effective services on a customer's behalf — none of these describe elasticity."
    },
    {
      id: "paper-20-030",
      domain: "ACM",
      topic: "economies-of-scale",
      type: "single",
      question: "The continual reduction of AWS Cloud pricing is due to:",
      options: [
        "pay-as-you go pricing",
        "the AWS global infrastructure",
        "economies of scale",
        "reserved storage pricing"
      ],
      correctAnswer: [2],
      explanation: "The continual reduction of AWS Cloud pricing is driven by economies of scale — as AWS's infrastructure and customer base grow, AWS passes on the resulting cost efficiencies to customers through lower prices. Pay-as-you-go pricing describes how customers are billed rather than why prices decrease over time, the global infrastructure describes AWS's physical footprint, and reserved storage pricing is not a real driver of overall price reductions."
    },
    {
      id: "paper-20-031",
      domain: "S3",
      topic: "s3-block-public-access",
      type: "single",
      question: "A company needs an Amazon S3 bucket that cannot have any public objects due to compliance requirements. How can this be accomplished?",
      options: [
        "Enable S3 Block Public Access from the AWS Management Console.",
        "Hold a team meeting to discuss the importance if only uploading private S3 objects.",
        "Require all S3 objects to be manually approved before uploading.",
        "Create a service to monitor all S3 uploads and remove any public uploads."
      ],
      correctAnswer: [0],
      explanation: "Enabling S3 Block Public Access from the AWS Management Console provides an account- or bucket-level setting that overrides any individual bucket policies or ACLs to guarantee no S3 object can be made public, satisfying the compliance requirement. Holding a meeting or manually approving uploads relies on human process rather than a technical control, and building a custom monitoring service to detect and remove public uploads reacts after the fact instead of preventing public access up front."
    },
    {
      id: "paper-20-032",
      domain: "ACM",
      topic: "support",
      type: "single",
      question: "A Cloud Practitioner identifies a billing issue after examining the AWS Cost and Usage report in the AWS Management Console. Which action can be taken to resolve this?",
      options: [
        "Open a detailed case related to billing and submit it to AWS Support for help.",
        "Upload data describing the issue to a new object in a private Amazon S3 bucket.",
        "Create a pricing application and deploy it to a right-sized Amazon EC2 instance for more information.",
        "Proceed with creating a new dashboard in Amazon QuickSight."
      ],
      correctAnswer: [0],
      explanation: "When a billing issue is identified, the appropriate action is to open a detailed billing case with AWS Support, since Support handles account and billing inquiries directly. Uploading data to a private S3 bucket does not resolve a billing issue, deploying a custom pricing application on EC2 is an unnecessary workaround, and creating a QuickSight dashboard only visualizes data — it does not address the underlying billing problem."
    },
    {
      id: "paper-20-033",
      domain: "ACM",
      topic: "pricing-calculator",
      type: "single",
      question: "What does the AWS Simple Monthly Calculator do?",
      options: [
        "Compares on-premises costs to colocation environments",
        "Estimates monthly billing based on projected usage",
        "Estimates power consumption at existing data centers",
        "Estimates CPU utilization"
      ],
      correctAnswer: [1],
      explanation: "The AWS Simple Monthly Calculator estimates monthly AWS billing based on a customer's projected resource usage. It does not compare on-premises costs to colocation environments, estimate power consumption at existing data centers, or estimate CPU utilization — those are unrelated to cost estimation based on projected AWS usage."
    },
    {
      id: "paper-20-034",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "Who is responsible for patching the guest operating system for Amazon RDS?",
      options: [
        "The AWS Product team",
        "The customer Database Administrator",
        "Managed partners",
        "AWS Support"
      ],
      correctAnswer: [1],
      explanation: "For Amazon RDS, AWS automates the underlying patch process, but it is the customer database administrator who reviews, schedules, and approves when guest OS and engine patches are applied to their DB instances, typically through the configured maintenance window. There is no 'AWS Product team' or 'Managed partners' role in this responsibility split, and AWS Support handles support tickets rather than patch scheduling for a customer's database instances."
    },
    {
      id: "paper-20-035",
      domain: "ELB",
      topic: "auto-scaling",
      type: "multiple-select",
      question: "Which AWS services may be scaled using AWS Auto Scaling? (Choose two.)",
      options: [
        "Amazon EC2",
        "Amazon DynamoDB",
        "Amazon S3",
        "Amazon Route 53",
        "Amazon Redshift"
      ],
      correctAnswer: [0, 1],
      explanation: "AWS Auto Scaling can automatically scale Amazon EC2 instances via Auto Scaling Groups and Amazon DynamoDB tables via Application Auto Scaling to match demand. Amazon S3 scales storage automatically without needing Auto Scaling configuration, Amazon Route 53 is a DNS service rather than a scalable compute or storage resource, and Amazon Redshift is not supported by AWS Auto Scaling."
    },
    {
      id: "paper-20-036",
      domain: "GLB",
      topic: "global-accelerator",
      type: "multiple-select",
      question: "Which of the following are benefits of AWS Global Accelerator? (Choose two.)",
      options: [
        "Reduced cost to run services on AWS",
        "Improved availability of applications deployed on AWS",
        "Higher durability of data stored on AWS",
        "Decreased latency to reach applications deployed on AWS",
        "Higher security of data stored on AWS"
      ],
      correctAnswer: [1, 3],
      explanation: "AWS Global Accelerator improves the availability of applications by using health checks and anycast IP addresses to redirect traffic to healthy endpoints, and it decreases latency by routing user traffic over AWS's global network to the closest healthy endpoint. It does not reduce the cost of running services, and it does not increase data durability or data security, since those are storage and encryption concerns rather than network routing concerns."
    },
    {
      id: "paper-20-037",
      domain: "ACM",
      topic: "support",
      type: "single",
      question: "A user who wants to get help with billing and reactivate a suspended account should submit an account and billing request to:",
      options: [
        "the AWS Support forum",
        "AWS Abuse",
        "an AWS Solutions Architect",
        "AWS Support"
      ],
      correctAnswer: [3],
      explanation: "AWS Support is the correct channel to submit an account and billing request, including reactivating a suspended account. The AWS Support forum is a community discussion board rather than an official support channel for account issues, AWS Abuse handles reports of malicious activity rather than billing, and an AWS Solutions Architect provides technical architecture guidance, not account or billing services."
    },
    {
      id: "paper-20-038",
      domain: "CLD",
      topic: "elasticity",
      type: "single",
      question: "Which AWS Cloud best practice uses the elasticity and agility of cloud computing?",
      options: [
        "Provision capacity based on past usage and theoretical peaks",
        "Dynamically and predictively scale to meet usage demands",
        "Build the application and infrastructure in a data center that grants physical access",
        "Break apart the application into loosely coupled components"
      ],
      correctAnswer: [1],
      explanation: "Dynamically and predictively scaling to meet usage demands uses the elasticity and agility of cloud computing, allowing resources to be added or removed as needed rather than provisioned for a worst-case scenario. Provisioning for past usage and theoretical peaks is the opposite, over-provisioned approach, building in a data center with physical access is not a cloud practice at all, and breaking an application into loosely coupled components is the decoupling principle, not elasticity or agility."
    },
    {
      id: "paper-20-039",
      domain: "ACM",
      topic: "cost-optimization",
      type: "single",
      question: "Which method helps to optimize costs of users moving to the AWS Cloud?",
      options: [
        "Paying only for what is used",
        "Purchasing hardware before it is needed",
        "Manually provisioning cloud resources",
        "Purchasing for the maximum possible load"
      ],
      correctAnswer: [0],
      explanation: "Paying only for what is used, the AWS pay-as-you-go pricing model, helps optimize costs by eliminating the need to pay for idle or unused capacity. Purchasing hardware in advance, manually provisioning resources, and provisioning for maximum possible load are all traditional on-premises practices that lead to overspending and underutilized capacity, the opposite of cost optimization in the cloud."
    },
    {
      id: "paper-20-040",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "Under the AWS shared responsibility model, which of the following is a customer responsibility?",
      options: [
        "Installing security patches for the Xen and KVM hypervisors",
        "Installing operating system patches for Amazon DynamoDB",
        "Installing operating system security patches for Amazon EC2 database instances",
        "Installing operating system security patches for Amazon RDS database instances"
      ],
      correctAnswer: [2],
      explanation: "Under the shared responsibility model, installing operating system security patches for Amazon EC2 instances is a customer responsibility, since EC2 is infrastructure-as-a-service and the customer controls the guest OS. Patching the underlying hypervisors is AWS's job, and OS patching for managed services such as DynamoDB (which exposes no OS to the customer) and RDS (a managed database service) is handled by AWS, not the customer."
    },
    {
      id: "paper-20-041",
      domain: "ACM",
      topic: "cost-management",
      type: "multiple-select",
      question: "The AWS Cost Management tools give users the ability to do which of the following? (Choose two.)",
      options: [
        "Terminate all AWS resources automatically if budget thresholds are exceeded.",
        "Break down AWS costs by day, service, and linked AWS account.",
        "Create budgets and receive notifications if current of forecasted usage exceeds the budgets.",
        "Switch automatically to Reserved Instances or Spot Instances, whichever is most cost-effective.",
        "Move data stored in Amazon S3 to a more cost-effective storage class."
      ],
      correctAnswer: [1, 2],
      explanation: "AWS Cost Management tools let users break down AWS costs by day, service, and linked account, and create budgets with notifications when current or forecasted usage exceeds a threshold via AWS Budgets. These tools do not automatically terminate resources, automatically switch purchasing options between Reserved and Spot Instances, or move S3 data between storage classes — those require separate automation or lifecycle policies rather than the cost management tools themselves."
    },
    {
      id: "paper-20-042",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "Under the AWS shared responsibility model, the security and patching of the guest operating system is the responsibility of:",
      options: [
        "AWS Support",
        "the customer",
        "AWS Systems Manager",
        "AWS Config"
      ],
      correctAnswer: [1],
      explanation: "Under the shared responsibility model, security and patching of the guest operating system is the customer's responsibility for services like EC2, since the customer controls what runs at the OS level. AWS Support provides customer service rather than OS patching, AWS Systems Manager is a tool the customer can use to help apply patches rather than the responsible party itself, and AWS Config tracks configuration compliance rather than patching systems."
    },
    {
      id: "paper-20-043",
      domain: "IAM",
      topic: "iam",
      type: "single",
      question: "Which AWS service makes it easy to create and manage AWS users and groups, and provide them with secure access to AWS resources at no charge?",
      options: [
        "AWS Direct Connect",
        "Amazon Connect",
        "AWS Identity and Access Management (IAM)",
        "AWS Firewall Manager"
      ],
      correctAnswer: [2],
      explanation: "AWS Identity and Access Management (IAM) is the free service that lets users create and manage AWS users and groups and control their access to AWS resources securely. AWS Direct Connect is a network connectivity service, Amazon Connect is a cloud contact-center service, and AWS Firewall Manager centrally manages firewall rules — none of these manage users, groups, or access."
    },
    {
      id: "paper-20-044",
      domain: "SEC",
      topic: "artifact",
      type: "single",
      question: "Which AWS service provides on-demand of AWS security and compliance documentation?",
      options: [
        "AWS Directory Service",
        "AWS Artifact",
        "AWS Trusted Advisor",
        "Amazon Inspector"
      ],
      correctAnswer: [1],
      explanation: "AWS Artifact provides on-demand access to AWS's security and compliance documentation, such as SOC reports and PCI compliance certifications. AWS Directory Service provides managed directory services rather than compliance documents, AWS Trusted Advisor gives best-practice recommendations, and Amazon Inspector performs vulnerability assessments — none provide compliance documentation."
    },
    {
      id: "paper-20-045",
      domain: "ML",
      topic: "polly",
      type: "single",
      question: "Which AWS service can be used to turn text into life-like speech?",
      options: [
        "Amazon Polly",
        "Amazon Transcribe",
        "Amazon Rekognition",
        "Amazon Lex"
      ],
      correctAnswer: [0],
      explanation: "Amazon Polly is AWS's text-to-speech service that converts written text into life-like, natural-sounding speech. Amazon Transcribe converts speech to text, the reverse operation, Amazon Rekognition analyzes images and video, and Amazon Lex builds conversational chatbots — none of these convert text into speech."
    },
    {
      id: "paper-20-046",
      domain: "ARC",
      topic: "reliability",
      type: "single",
      question: "What is one of the core principles to follow when designing a highly available application in the AWS Cloud?",
      options: [
        "Design using a serverless architecture",
        "Assume that all components within an application can fail",
        "Design AWS Auto Scaling into every application",
        "Design all components using open-source code"
      ],
      correctAnswer: [1],
      explanation: "Assuming that all components within an application can fail is a core principle for designing highly available applications, since it drives architects to build in redundancy and automated recovery rather than relying on any single component staying up. Serverless architecture, AWS Auto Scaling, and open-source code are all useful tools or approaches, but they are not the fundamental principle underlying high-availability design — assuming failure will happen is."
    },
    {
      id: "paper-20-047",
      domain: "ACM",
      topic: "trusted-advisor",
      type: "single",
      question: "A user needs to generate a report that outlines the status of key security checks in an AWS account. The report must include: (The status of Amazon S3 bucket permissions, Whether multi-factor authentication is enabled for the AWS account root user, If any security groups are configured to allow unrestricted access.) Where can all this information be found in one location?",
      options: [
        "Amazon QuickSight dashboard",
        "AWS CloudTrail trails",
        "AWS Trusted Advisor report",
        "IAM credential report"
      ],
      correctAnswer: [2],
      explanation: "AWS Trusted Advisor generates a single report covering multiple security checks, including S3 bucket permissions, whether MFA is enabled on the root account, and security groups configured with unrestricted access, making it the one-stop location for this information. Amazon QuickSight is a BI/visualization tool, AWS CloudTrail logs API calls rather than providing a consolidated security checklist, and an IAM credential report only covers IAM user credential status, not S3 permissions or security group rules."
    },
    {
      id: "paper-20-048",
      domain: "ACM",
      topic: "dedicated-hosts",
      type: "single",
      question: "Which Amazon EC2 pricing model should be used to comply with per-core software license requirements?",
      options: [
        "Dedicated Hosts",
        "On-Demand Instances",
        "Spot Instances",
        "Reserved Instances"
      ],
      correctAnswer: [0],
      explanation: "EC2 Dedicated Hosts provide a physical server fully dedicated to a single customer, giving visibility into the underlying sockets and physical cores needed to comply with per-core or per-socket software licensing requirements. On-Demand and Reserved Instances run on shared hardware without exposing physical core or socket information, and Spot Instances are also on shared hardware and can be interrupted, making them equally unsuitable for license compliance."
    },
    {
      id: "paper-20-049",
      domain: "GLB",
      topic: "edge-locations",
      type: "single",
      question: "Which of the AWS global infrastructure is used to cache copies of content for faster delivery to users across the globe?",
      options: [
        "AWS Regions",
        "Availability Zones",
        "Edge locations",
        "Data centers"
      ],
      correctAnswer: [2],
      explanation: "Edge locations are the AWS Global Infrastructure component used by services like Amazon CloudFront to cache copies of content closer to end users, enabling faster delivery worldwide. AWS Regions and Availability Zones host the primary compute and storage infrastructure rather than caching content, and 'data centers' is a general term rather than a specific AWS Global Infrastructure component used for caching."
    },
    {
      id: "paper-20-050",
      domain: "ARC",
      topic: "well-architected",
      type: "single",
      question: "Using AWS Config to record, audit, and evaluate changes to AWS resources to enable traceability is an example of which AWS Well-Architected Framework pillar?",
      options: [
        "Security",
        "Operational excellence",
        "Performance efficiency",
        "Cost optimization"
      ],
      correctAnswer: [0],
      explanation: "Using AWS Config to record, audit, and evaluate changes to AWS resources for traceability aligns with the Security pillar of the AWS Well-Architected Framework, which emphasizes tracking and auditing actions and changes in near real time. Operational excellence focuses on running and monitoring systems to deliver business value, performance efficiency focuses on using resources efficiently, and cost optimization focuses on avoiding unnecessary costs — none specifically address traceability of resource changes for security purposes."
    }
  ]
});
