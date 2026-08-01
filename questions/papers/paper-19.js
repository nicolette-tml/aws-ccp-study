window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "paper-19",
  paperId: "paper-19",
  paperName: "Practice Paper 19",
  questions: [
    {
      id: "paper-19-001",
      domain: "ARC",
      topic: "aws-marketplace",
      type: "single",
      question: "Which AWS offering enables customers to find, buy, and immediately start using software solutions in their AWS environment?",
      options: [
        "AWS Config",
        "AWS OpsWorks",
        "AWS SDK",
        "AWS Marketplace"
      ],
      correctAnswer: [3],
      explanation: "AWS Marketplace lets customers find, buy, and immediately start using third-party software solutions within their AWS environment, functioning like an app store for AWS. AWS Config tracks and audits resource configurations rather than selling software, AWS OpsWorks is a configuration-management service for Chef/Puppet, and the AWS SDK is a programmatic interface for building applications — none of these let customers browse and buy software."
    },
    {
      id: "paper-19-002",
      domain: "VPC",
      topic: "vpc",
      type: "single",
      question: "Which AWS networking service enables a company to create a virtual network within AWS?",
      options: [
        "AWS Config",
        "Amazon Route 53",
        "AWS Direct Connect",
        "Amazon Virtual Private Cloud (Amazon VPC."
      ],
      correctAnswer: [3],
      explanation: "Amazon Virtual Private Cloud (VPC) lets a company provision a logically isolated virtual network within AWS, with full control over IP ranges, subnets, and routing. AWS Config tracks resource configuration, Route 53 is a DNS service, and Direct Connect provides a dedicated physical network link to AWS — none of these create the virtual network itself."
    },
    {
      id: "paper-19-003",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "Which of the following is AWS’s responsibility under the AWS shared responsibility model?",
      options: [
        "Configuring third-party applications",
        "Maintaining physical hardware",
        "Securing application access and data",
        "Managing custom Amazon Machine Images (AMIs)"
      ],
      correctAnswer: [1],
      explanation: "Under the AWS Shared Responsibility Model, AWS is responsible for security \"of\" the cloud, which includes maintaining the physical hardware, facilities, and infrastructure that run AWS services. Configuring third-party applications, securing application access and data, and managing custom AMIs are all customer responsibilities (\"security in the cloud\")."
    },
    {
      id: "paper-19-004",
      domain: "GLB",
      topic: "cloudfront",
      type: "single",
      question: "Which component of AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?",
      options: [
        "AWS Regions",
        "AWS edge locations",
        "AWS Availability Zones",
        "Amazon Virtual Private Cloud (Amazon VPC."
      ],
      correctAnswer: [1],
      explanation: "Amazon CloudFront uses AWS's global network of edge locations to cache and serve content from a location physically close to end users, minimizing latency. AWS Regions and Availability Zones host origin infrastructure but are not the caching layer CloudFront relies on for delivery, and a VPC is a private network construct unrelated to content delivery."
    },
    {
      id: "paper-19-005",
      domain: "IAM",
      topic: "mfa",
      type: "single",
      question: "How would a system administrator add an additional layer of login security to a user’s AWS Management Console?",
      options: [
        "Use AWS Cloud Directory",
        "Audit AWS Identity and Access Management (IAM) roles",
        "Enable Multi-Factor Authentication",
        "Enable AWS CloudTrail"
      ],
      correctAnswer: [2],
      explanation: "Enabling Multi-Factor Authentication (MFA) adds a second layer of login security beyond a password, requiring a time-based code from a physical or virtual device. AWS Cloud Directory is unrelated to console login security, auditing IAM roles reviews existing permissions rather than adding a security layer, and CloudTrail only logs activity after the fact rather than preventing unauthorized logins."
    },
    {
      id: "paper-19-006",
      domain: "MON",
      topic: "cloudtrail",
      type: "single",
      question: "Which service can identify the user that made the API call when an Amazon Elastic Compute Cloud (Amazon EC2) instance is terminated?",
      options: [
        "Amazon CloudWatch",
        "AWS CloudTrail",
        "AWS X-Ray",
        "AWS Identity and Access Management (AWS IAM)"
      ],
      correctAnswer: [1],
      explanation: "AWS CloudTrail records every API call made in an AWS account, including who terminated the EC2 instance and when, making it the tool for identifying the responsible user. Amazon CloudWatch monitors metrics and performance rather than logging the identity of API callers, AWS X-Ray traces application requests, and IAM manages permissions but does not log historical actions."
    },
    {
      id: "paper-19-007",
      domain: "INT",
      topic: "sns",
      type: "single",
      question: "Which service would you use to send alerts based on Amazon CloudWatch alarms?",
      options: [
        "Amazon Simple Notification Service (Amazon SNS)",
        "AWS CloudTrail",
        "AWS Trusted Advisor",
        "Amazon Route 53"
      ],
      correctAnswer: [0],
      explanation: "Amazon SNS (Simple Notification Service) is the pub/sub messaging service used to send alerts — such as emails or texts — when a CloudWatch alarm is triggered. AWS CloudTrail logs API activity rather than sending alerts, AWS Trusted Advisor provides best-practice recommendations, and Amazon Route 53 is a DNS service — none of these deliver alarm notifications."
    },
    {
      id: "paper-19-008",
      domain: "SEC",
      topic: "acceptable-use-policy",
      type: "single",
      question: "Where can a customer find information about prohibited actions on AWS infrastructure?",
      options: [
        "AWS Trusted Advisor",
        "AWS Identity and Access Management (IAM)",
        "AWS Billing Console",
        "AWS Acceptable Use Policy"
      ],
      correctAnswer: [3],
      explanation: "The AWS Acceptable Use Policy documents the prohibited and restricted activities that customers must not engage in while using AWS infrastructure. AWS Trusted Advisor gives optimization recommendations, IAM manages access permissions, and the Billing Console handles payment and cost information — none describe prohibited uses of AWS."
    },
    {
      id: "paper-19-009",
      domain: "CLD",
      topic: "capex-vs-opex",
      type: "single",
      question: "Which of the following is an example of how moving to the AWS Cloud reduces upfront cost?",
      options: [
        "By replacing large variable costs with lower capital investments",
        "By replacing large capital investments with lower variable costs",
        "By allowing the provisioning of compute and storage at a fixed level to meet peak demand",
        "By replacing the repeated scaling of virtual servers with a simpler fixed-scale model"
      ],
      correctAnswer: [1],
      explanation: "Moving to the cloud replaces large upfront capital investments (like buying servers) with lower, ongoing variable costs that scale with actual usage, reducing upfront cost. The reverse framing (variable to capital) is false, provisioning at a fixed level to meet peak demand describes wasteful on-premises capacity planning, and repeated scaling of virtual servers is itself a cost-saving elasticity practice, not a fixed-scale model."
    },
    {
      id: "paper-19-010",
      domain: "ELB",
      topic: "high-availability",
      type: "multiple-select",
      question: "When designing a typical three-tier web application, which AWS services and/or features improve availability and reduce the impact failures? (Choose two.)",
      options: [
        "AWS Auto Scaling for Amazon EC2 instances",
        "Amazon VPC subnet ACLs to check the health of a service",
        "Distributed resources across multiple Availability Zones",
        "AWS Server Migration Service (AWS SMS) to move Amazon EC2 instances into a different Region",
        "Distributed resources across multiple AWS points of presence"
      ],
      correctAnswer: [0, 2],
      explanation: "AWS Auto Scaling automatically adds or removes EC2 instances to match demand and replace unhealthy instances, and distributing resources across multiple Availability Zones protects against a single data-center failure — both directly improve availability and reduce failure impact. VPC subnet ACLs are stateless traffic filters, not health checks; AWS SMS moves instances between Regions but doesn't itself improve availability; and \"points of presence\" refers to CloudFront's edge network, not a resiliency mechanism for compute resources."
    },
    {
      id: "paper-19-011",
      domain: "ARC",
      topic: "design-principles",
      type: "single",
      question: "Which cloud design principle aligns with AWS Cloud best practices?",
      options: [
        "Create fixed dependencies among application components",
        "Aggregate services on a single instance",
        "Deploy applications in a single Availability Zone",
        "Distribute the compute load across multiple resources"
      ],
      correctAnswer: [3],
      explanation: "Distributing the compute load across multiple resources follows AWS best practices for redundancy and fault tolerance, ensuring no single resource becomes a bottleneck or single point of failure. Creating fixed dependencies among components, aggregating services on a single instance, and deploying in only one Availability Zone all increase risk and are the opposite of recommended cloud design principles."
    },
    {
      id: "paper-19-012",
      domain: "IAM",
      topic: "password-policies",
      type: "multiple-select",
      question: "Which of the following are recommended practices for managing IAM users? (Choose two.)",
      options: [
        "Require IAM users to change their passwords after a specified period of time",
        "Prevent IAM users from reusing previous passwords",
        "Recommend that the same password be used on AWS and other sites",
        "Require IAM users to store their passwords in raw text",
        "Disable multi-factor authentication (MFA) for IAM users"
      ],
      correctAnswer: [0, 1],
      explanation: "Requiring IAM users to periodically change their passwords and preventing the reuse of previous passwords are both standard password-policy best practices that reduce the risk of compromised credentials. Recommending password reuse across sites, storing passwords in raw text, and disabling MFA all weaken security and are the opposite of recommended IAM practices."
    },
    {
      id: "paper-19-013",
      domain: "ARC",
      topic: "partner-network",
      type: "multiple-select",
      question: "A company is migrating from on-premises data centers to the AWS Cloud and is looking for hands-on help with the project. How can the company get this support? (Choose two.)",
      options: [
        "Ask for a quote from the AWS Marketplace team to perform a migration into the company’s AWS account.",
        "Contact AWS Support and open a case for assistance",
        "Use AWS Professional Services to provide guidance and to set up an AWS Landing Zone in the company’s AWS account",
        "Select a partner from the AWS Partner Network (APN) to assist with the migration",
        "Use Amazon Connect to create a new request for proposal (RFP) for expert assistance in migrating to the AWS Cloud."
      ],
      correctAnswer: [2, 3],
      explanation: "AWS Professional Services can provide expert guidance and set up an AWS Landing Zone to support a migration, and partners from the AWS Partner Network (APN) offer hands-on migration assistance — both are designed to give direct, hands-on support. A quote from the Marketplace team isn't a real support channel for migrations, opening a generic AWS Support case does not guarantee hands-on migration help, and Amazon Connect is a contact-center service, not a way to request migration expertise."
    },
    {
      id: "paper-19-014",
      domain: "ACM",
      topic: "support",
      type: "single",
      question: "How does the AWS Enterprise Support Concierge team help users?",
      options: [
        "Supporting application development",
        "Providing architecture guidance",
        "Answering billing and account inquires",
        "Answering questions regarding technical support cases"
      ],
      correctAnswer: [2],
      explanation: "The AWS Enterprise Support Concierge team is dedicated to helping with billing and account inquiries for customers on the Enterprise Support plan. It is not focused on application development, architecture guidance (that's the Technical Account Manager's role), or answering technical support case questions."
    },
    {
      id: "paper-19-015",
      domain: "GLB",
      topic: "availability-zones",
      type: "single",
      question: "An application designed to span multiple Availability Zones is described as:",
      options: [
        "being highly available",
        "having global reach",
        "using an economy of scale",
        "having elasticity"
      ],
      correctAnswer: [0],
      explanation: "An application that spans multiple Availability Zones is described as highly available, because it can continue running even if one AZ experiences an outage. Global reach refers to serving users worldwide across Regions, economy of scale refers to cost benefits from AWS's massive infrastructure, and elasticity refers to dynamically adjusting capacity with demand — none describe spanning AZs specifically."
    },
    {
      id: "paper-19-016",
      domain: "GLB",
      topic: "availability-zones",
      type: "single",
      question: "A new service using AWS must be highly available. Yet, due to regulatory requirements, all of its Amazon EC2 instances must be located in a single geographic area. According to best practices, to meet these requirements, the EC2 instances must be placed in at least two:",
      options: [
        "AWS Regions",
        "Availability Zones",
        "subnets",
        "placement groups"
      ],
      correctAnswer: [1],
      explanation: "To remain highly available while keeping all resources within a single geographic area (Region) due to regulatory requirements, AWS best practice is to deploy EC2 instances across at least two Availability Zones within that Region. Using multiple Regions would violate the single-geographic-area requirement, subnets alone don't provide the physical redundancy of separate data centers, and placement groups control instance placement strategy rather than availability across facilities."
    },
    {
      id: "paper-19-017",
      domain: "ACM",
      topic: "pricing-calculator",
      type: "single",
      question: "Which AWS tool is used to compare the cost of running an application on-premises to running the application in the AWS Cloud?",
      options: [
        "AWS Trusted Advisor",
        "AWS Simple Monthly Calculator",
        "AWS Pricing Calculator",
        "Cost Explorer"
      ],
      correctAnswer: [2],
      explanation: "The AWS Pricing Calculator lets users model and compare the estimated cost of running workloads on AWS against alternative environments like on-premises data centers. AWS Trusted Advisor gives optimization recommendations for existing AWS resources, the Simple Monthly Calculator has been deprecated and replaced by the Pricing Calculator, and Cost Explorer analyzes actual historical AWS spending rather than comparing to on-premises costs."
    },
    {
      id: "paper-19-018",
      domain: "ACM",
      topic: "reserved-instances",
      type: "single",
      question: "A company has multiple AWS accounts within AWS Organizations and wants to apply the Amazon EC2 Reserved Instances benefit to a single account only. Which action should be taken?",
      options: [
        "Purchase the Reserved Instances from master payer account and turn off Reserved Instance sharing.",
        "Enable billing alerts in the AWS Billing and Cost Management console.",
        "Purchase the Reserved Instances in individual linked accounts and turn off Reserved Instance sharing from the payer level.",
        "Enable Reserved Instance sharing in the AWS Billing and Cost Management console."
      ],
      correctAnswer: [0],
      explanation: "Purchasing Reserved Instances from the master payer account and disabling RI sharing restricts the discount benefit to that single account, preventing it from being shared across the AWS Organization. Enabling billing alerts doesn't control RI sharing, purchasing RIs in individual linked accounts while turning off sharing at the payer level doesn't scope the benefit as required, and enabling RI sharing would apply the benefit across all accounts — the opposite of what's needed."
    },
    {
      id: "paper-19-019",
      domain: "ACM",
      topic: "support",
      type: "single",
      question: "Which situation should be reported to the AWS Abuse team?",
      options: [
        "In Availability Zone has a service disruption",
        "An intrusion attempt is made from an AWS IP address",
        "A user has trouble accessing an Amazon S3 bucket from an AWS IP address",
        "A user needs to change payment methods due to a compromise"
      ],
      correctAnswer: [1],
      explanation: "An intrusion attempt originating from an AWS IP address should be reported to the AWS Abuse team, which investigates reports of AWS resources being used to conduct malicious activity. A service disruption in an Availability Zone should be tracked via the AWS Health Dashboard, general S3 access trouble is a support issue rather than abuse, and changing payment methods is a billing matter, not an abuse report."
    },
    {
      id: "paper-19-020",
      domain: "GLB",
      topic: "global-accelerator",
      type: "multiple-select",
      question: "A company is planning to launch an ecommerce site in a single AWS Region to a worldwide user base. Which AWS services will allow the company to reach users and provide low latency and high transfer speeds? (Choose two.)",
      options: [
        "Application Load Balancer",
        "AWS Global Accelerator",
        "AWS Direct Connect",
        "Amazon CloudFront",
        "AWS Lambda"
      ],
      correctAnswer: [1, 3],
      explanation: "AWS Global Accelerator improves global application performance and availability by routing traffic over the AWS global network to the optimal endpoint, and Amazon CloudFront caches and delivers content from edge locations worldwide for low latency and high transfer speeds — both help a single-Region deployment reach a worldwide audience efficiently. An Application Load Balancer only distributes traffic within a Region, Direct Connect is a dedicated private link from specific on-premises locations (not for reaching global end users), and AWS Lambda is a compute service unrelated to content delivery."
    },
    {
      id: "paper-19-021",
      domain: "CMP",
      topic: "lambda",
      type: "single",
      question: "Which AWS service or resource is serverless?",
      options: [
        "AWS Lambda",
        "Amazon EC2 instances",
        "Amazon Lightsail",
        "Amazon ElastiCache"
      ],
      correctAnswer: [0],
      explanation: "AWS Lambda is a serverless compute service — it runs code in response to events without requiring users to provision or manage any servers. Amazon EC2 instances are virtual servers you must manage, Amazon Lightsail provisions virtual private servers, and Amazon ElastiCache runs on managed but provisioned cache node infrastructure — none of these are serverless."
    },
    {
      id: "paper-19-022",
      domain: "VPC",
      topic: "vpc",
      type: "multiple-select",
      question: "Which of the following are components of Amazon VPC? (Choose two.)",
      options: [
        "Objects",
        "Subnets",
        "Buckets",
        "Internet gateways",
        "Access key"
      ],
      correctAnswer: [1, 3],
      explanation: "Subnets and internet gateways are both core components of Amazon VPC: subnets divide the VPC's IP address range into smaller network segments, and an internet gateway allows communication between the VPC and the internet. Objects and buckets are Amazon S3 concepts, and an access key is an IAM credential — none belong to VPC."
    },
    {
      id: "paper-19-023",
      domain: "ACM",
      topic: "budgets",
      type: "single",
      question: "AWS Budgets can be used to:",
      options: [
        "prevent a given user from creating a resource",
        "send an alert when the utilization of Reserved Instances drops below a certain percentage",
        "set resource limits in AWS accounts to prevent overspending",
        "split an AWS bill across multiple forms of payment"
      ],
      correctAnswer: [2],
      explanation: "AWS Budgets lets users set custom cost and usage thresholds and receive alerts, effectively helping set resource limits in an AWS account to prevent overspending. AWS Budgets does not technically prevent a user from creating a resource, it doesn't track Reserved Instance utilization percentages (that's more of a Cost Explorer function), and it does not split a bill across multiple payment methods."
    },
    {
      id: "paper-19-024",
      domain: "IAM",
      topic: "mfa",
      type: "multiple-select",
      question: "Which of the following will enhance the security of access to the AWS Management Console? (Choose two.)",
      options: [
        "AWS Secrets Manager",
        "AWS Certificate Manager",
        "AWS Multi-Factor Authentication (AWS MFA)",
        "Security groups",
        "Password policies"
      ],
      correctAnswer: [2, 4],
      explanation: "Enabling AWS Multi-Factor Authentication (MFA) adds a second authentication factor beyond a password, and enforcing strong password policies (length, complexity, expiration) both directly strengthen console login security. AWS Secrets Manager stores application credentials rather than console logins, AWS Certificate Manager manages SSL/TLS certificates, and security groups control network traffic to resources, not console access."
    },
    {
      id: "paper-19-025",
      domain: "ACM",
      topic: "trusted-advisor",
      type: "multiple-select",
      question: "The AWS Trusted Advisor checks include recommendations regarding which of the following? (Choose two.)",
      options: [
        "Information on Amazon S3 bucket permissions",
        "AWS service outages",
        "Multi-factor authentication enabled on the AWS account root user",
        "Available software patches",
        "Number of users in the account"
      ],
      correctAnswer: [0, 2],
      explanation: "AWS Trusted Advisor checks include flagging Amazon S3 buckets with open or overly permissive access permissions, and it checks whether multi-factor authentication is enabled on the account root user, both as part of its security-category recommendations. It does not report on AWS service outages (that's the Health Dashboard), available OS software patches (that's Systems Manager), or the number of users in an account."
    },
    {
      id: "paper-19-026",
      domain: "SEC",
      topic: "kms",
      type: "single",
      question: "Which functions can users perform using AWS KMS?",
      options: [
        "Create and manage AWS access keys for the AWS account root user",
        "Create and manage AWS access keys for an AWS account IAM user",
        "Create and manage keys for encryption and decryption of data",
        "Create and manage keys for multi-factor authentication"
      ],
      correctAnswer: [2],
      explanation: "AWS Key Management Service (KMS) lets users create and manage cryptographic keys used to encrypt and decrypt data across AWS services. KMS does not create or manage AWS access keys for the root user or an IAM user (those are generated in IAM), and it is not used to create or manage multi-factor authentication devices."
    },
    {
      id: "paper-19-027",
      domain: "ACM",
      topic: "trusted-advisor",
      type: "multiple-select",
      question: "How does AWS Trusted Advisor provide guidance to users of the AWS Cloud? (Choose two.)",
      options: [
        "It identifies software vulnerabilities in applications running on AWS",
        "It provides a list of cost optimization recommendations based on current AWS usage",
        "It detects potential security vulnerabilities caused by permissions settings on account resources",
        "It automatically corrects potential security issues caused by permissions settings on account resources",
        "It provides proactive alerting whenever an Amazon EC2 instance has been compromised"
      ],
      correctAnswer: [1, 2],
      explanation: "AWS Trusted Advisor provides a list of cost optimization recommendations based on actual AWS usage patterns, and it detects potential security vulnerabilities caused by overly permissive resource permissions. It does not scan for software vulnerabilities within applications (that's Amazon Inspector), it never automatically fixes security issues (it only recommends), and it does not provide real-time alerts about compromised EC2 instances."
    },
    {
      id: "paper-19-028",
      domain: "CLD",
      topic: "cloud-benefits",
      type: "multiple-select",
      question: "Which of the following are advantages of the AWS Cloud? (Choose two.)",
      options: [
        "AWS manages the maintenance of the cloud infrastructure",
        "AWS manages the security of applications built on AWS",
        "AWS manages capacity planning for physical servers",
        "AWS manages the development of applications on AWS",
        "AWS manages cost planning for virtual servers"
      ],
      correctAnswer: [0, 2],
      explanation: "Two key advantages of the AWS Cloud are that AWS manages the maintenance of the underlying cloud infrastructure and handles capacity planning for the physical servers that back AWS services, freeing customers from that operational burden. AWS does not manage the security of customer applications built on AWS, does not manage the development of customer applications, and does not manage cost planning for a customer's virtual servers — those remain customer responsibilities."
    },
    {
      id: "paper-19-029",
      domain: "ARC",
      topic: "well-architected",
      type: "single",
      question: "A user deploys an Amazon RDS DB instance in multiple Availability Zones. This strategy involves which pillar of the AWS Well-Architected Framework?",
      options: [
        "Performance efficiency",
        "Reliability",
        "Cost optimization",
        "Security"
      ],
      correctAnswer: [1],
      explanation: "Deploying an Amazon RDS instance across multiple Availability Zones is a Reliability best practice under the AWS Well-Architected Framework, since it allows the database to automatically fail over and recover from an AZ outage. Performance efficiency is about using resources efficiently as demand changes, cost optimization is about minimizing spend, and security is about protecting data and systems — none specifically address recovering from infrastructure failure through redundancy."
    },
    {
      id: "paper-19-030",
      domain: "VPC",
      topic: "direct-connect",
      type: "multiple-select",
      question: "Which AWS services provide a user with connectivity between the AWS Cloud and on-premises resources? (Choose two.)",
      options: [
        "AWS VPN",
        "Amazon Connect",
        "Amazon Cognito",
        "AWS Direct Connect",
        "AWS Managed Services"
      ],
      correctAnswer: [0, 3],
      explanation: "AWS VPN and AWS Direct Connect both provide connectivity between the AWS Cloud and on-premises resources — VPN over an encrypted internet connection, and Direct Connect via a dedicated private network link. Amazon Connect is a cloud contact-center service, Amazon Cognito manages application user identities, and AWS Managed Services provides operational management of AWS infrastructure — none of these establish hybrid network connectivity."
    },
    {
      id: "paper-19-031",
      domain: "ACM",
      topic: "billing",
      type: "single",
      question: "Which AWS service is used to pay AWS bills, and monitor usage and budget costs?",
      options: [
        "AWS Billing and Cost Management",
        "Consolidated billing",
        "Amazon CloudWatch",
        "Amazon QuickSight"
      ],
      correctAnswer: [0],
      explanation: "AWS Billing and Cost Management is the console service used to pay AWS bills and monitor usage and budgeted costs. Consolidated billing is a feature within Billing and Cost Management for combining multiple accounts (not the overall service), Amazon CloudWatch monitors operational metrics rather than billing, and Amazon QuickSight is a business intelligence/visualization tool."
    },
    {
      id: "paper-19-032",
      domain: "GLB",
      topic: "availability-zones",
      type: "single",
      question: "Which element of the AWS global infrastructure consists of one or more discrete data centers, each with redundant power, networking, and connectivity, which are housed in separate facilities?",
      options: [
        "AWS Regions",
        "Availability Zones",
        "Edge locations",
        "Amazon CloudFront"
      ],
      correctAnswer: [1],
      explanation: "An Availability Zone consists of one or more discrete data centers, each with redundant power, networking, and connectivity, housed in separate facilities within a Region. An AWS Region is a broader geographic area containing multiple Availability Zones, an edge location is a smaller site used for content caching, and Amazon CloudFront is a CDN service, not an infrastructure element."
    },
    {
      id: "paper-19-033",
      domain: "VPC",
      topic: "vpc-flow-logs",
      type: "single",
      question: "Which Amazon VPC feature enables users to capture information about the IP traffic that reaches Amazon EC2 instances?",
      options: [
        "Security groups",
        "Elastic network interfaces",
        "Network ACLs",
        "VPC Flow Logs"
      ],
      correctAnswer: [3],
      explanation: "VPC Flow Logs capture information about the IP traffic going to and from network interfaces in a VPC, including traffic reaching EC2 instances, which is useful for monitoring and troubleshooting. Security groups and Network ACLs control traffic rather than capturing/logging it, and elastic network interfaces are the virtual network cards themselves, not a logging feature."
    },
    {
      id: "paper-19-034",
      domain: "ELB",
      topic: "auto-scaling",
      type: "single",
      question: "Which AWS service can be used to automatically scale an application up and down without making capacity planning decisions?",
      options: [
        "Amazon AutoScaling",
        "Amazon Redshift",
        "AWS CloudTrail",
        "AWS Lambda"
      ],
      correctAnswer: [0],
      explanation: "AWS Auto Scaling automatically adjusts the number of EC2 instances (or other resources) up or down based on demand, removing the need for manual capacity planning decisions. Amazon Redshift is a data warehouse, AWS CloudTrail logs API activity, and AWS Lambda is a serverless compute service — none of these provide automatic scaling of an existing application's capacity."
    },
    {
      id: "paper-19-035",
      domain: "ACM",
      topic: "support",
      type: "single",
      question: "AWS Enterprise Support users have access to which service or feature that is not available to users with other AWS Support plans?",
      options: [
        "AWS Trusted Advisor",
        "AWS Support case",
        "Concierge team",
        "Amazon Connect"
      ],
      correctAnswer: [2],
      explanation: "AWS Enterprise Support customers get exclusive access to the Concierge team, which assists specifically with billing and account inquiries — a benefit not included in other support plans. AWS Trusted Advisor and support cases are available (with varying check limits) on several support plans, and Amazon Connect is an unrelated contact-center service."
    },
    {
      id: "paper-19-036",
      domain: "DBA",
      topic: "rds",
      type: "single",
      question: "A company wants to migrate a MySQL database to AWS but does not have the budget for Database Administrators to handle routine tasks including provisioning, patching, and performing backups. Which AWS service will support this use case?",
      options: [
        "Amazon RDS",
        "Amazon DynamoDB",
        "Amazon DocumentDB",
        "Amazon ElastiCache"
      ],
      correctAnswer: [0],
      explanation: "Amazon RDS is a managed relational database service that automates routine administrative tasks like provisioning, patching, and backups for engines including MySQL, removing the need for dedicated Database Administrators. Amazon DynamoDB is a NoSQL database (not MySQL-compatible), Amazon DocumentDB is compatible with MongoDB workloads, and Amazon ElastiCache is an in-memory caching service, not a relational database."
    },
    {
      id: "paper-19-037",
      domain: "GLB",
      topic: "regions",
      type: "single",
      question: "A company wants to expand from one AWS Region into a second AWS Region. What does the company need to do to start supporting the new Region?",
      options: [
        "Contact an AWS Account Manager to sign a new contract",
        "Move an Availability Zone to the new Region",
        "Begin deploying resources in the second Region",
        "Download the AWS Management Console for the new Region"
      ],
      correctAnswer: [2],
      explanation: "To begin supporting a new AWS Region, a company simply needs to start deploying resources into that Region — AWS Regions are available to any account without a separate contract or special setup. There's no need to sign a new contract with an Account Manager, Availability Zones belong to a Region and can't be \"moved,\" and the AWS Management Console is a single global web console, not something downloaded per Region."
    },
    {
      id: "paper-19-038",
      domain: "ACM",
      topic: "pricing-models",
      type: "single",
      question: "A user must meet compliance and software licensing requirements that state a workload must be hosted on a physical server. Which Amazon EC2 instance pricing option will meet these requirements?",
      options: [
        "Dedicated Hosts",
        "Dedicated Instances",
        "Spot Instances",
        "Reserved Instances"
      ],
      correctAnswer: [0],
      explanation: "Dedicated Hosts provide a physical EC2 server dedicated entirely to one customer, satisfying requirements that a workload run on a physical (not shared/virtualized) server, and they also support certain software licensing requirements tied to sockets or cores. Dedicated Instances run on hardware dedicated to a single customer but without the physical-server visibility Dedicated Hosts provide, and Spot and Reserved Instances are pricing models unrelated to physical hardware guarantees."
    },
    {
      id: "paper-19-039",
      domain: "SEC",
      topic: "kms",
      type: "multiple-select",
      question: "Which AWS service will provide a way to generate encryption keys that can be used to encrypt data? (Choose two.)",
      options: [
        "Amazon Macie",
        "AWS Certificate Manager",
        "AWS Key Management Service (AWS KMS)",
        "AWS Secrets Manager",
        "AWS CloudHSM"
      ],
      correctAnswer: [2, 4],
      explanation: "AWS Key Management Service (KMS) and AWS CloudHSM both let users generate cryptographic keys that can be used to encrypt data — KMS as a managed, shared-tenancy key service, and CloudHSM as dedicated hardware security modules for stricter compliance needs. Amazon Macie discovers and classifies sensitive data (it doesn't generate keys), AWS Certificate Manager issues SSL/TLS certificates, and AWS Secrets Manager stores and rotates secrets rather than generating encryption keys."
    },
    {
      id: "paper-19-040",
      domain: "ACM",
      topic: "tco-calculator",
      type: "single",
      question: "A company is planning to migrate from on-premises to the AWS Cloud. Which AWS tool or service provides detailed reports on estimated cost savings after migration?",
      options: [
        "AWS Total Cost of Ownership (TCO) Calculator",
        "Cost Explorer",
        "AWS Budgets",
        "AWS Migration Hub"
      ],
      correctAnswer: [0],
      explanation: "The AWS Total Cost of Ownership (TCO) Calculator is designed specifically to compare on-premises costs against AWS costs and produce detailed reports on the estimated savings from migrating. Cost Explorer analyzes existing AWS spending after migration, AWS Budgets sets spending alerts, and AWS Migration Hub tracks the progress of migration tasks — none of these produce pre-migration savings estimates."
    },
    {
      id: "paper-19-041",
      domain: "ARC",
      topic: "partner-network",
      type: "multiple-select",
      question: "What can assist in evaluating an application for migration to the cloud? (Choose two.)",
      options: [
        "AWS Trusted Advisor",
        "AWS Professional Services",
        "AWS Systems Manager",
        "AWS Partner Network (APN)",
        "AWS Secrets Manager"
      ],
      correctAnswer: [1, 3],
      explanation: "AWS Professional Services and partners from the AWS Partner Network (APN) both provide expert guidance to assess and plan an application's readiness for cloud migration. AWS Trusted Advisor gives generic best-practice checks (not migration-specific evaluation), AWS Systems Manager is an operational management tool, and AWS Secrets Manager stores credentials — none evaluate applications for migration."
    },
    {
      id: "paper-19-042",
      domain: "SEC",
      topic: "cloudhsm",
      type: "single",
      question: "Which AWS service helps users meet contractual and regulatory compliance requirements for data security by using dedicated hardware appliances within the AWS Cloud?",
      options: [
        "AWS Secrets Manager",
        "AWS CloudHSM",
        "AWS Key Management Service (AWS KMS)",
        "AWS Directory Service"
      ],
      correctAnswer: [1],
      explanation: "AWS CloudHSM provides dedicated, single-tenant hardware security module appliances within the AWS Cloud, helping meet strict contractual and regulatory compliance requirements for cryptographic key management. AWS Secrets Manager stores and rotates secrets rather than providing dedicated hardware, AWS KMS is a managed, multi-tenant key service without dedicated hardware, and AWS Directory Service manages directories, not encryption compliance."
    },
    {
      id: "paper-19-043",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "multiple-select",
      question: "Under the AWS shared responsibility model, the customer manages which of the following? (Choose two.)",
      options: [
        "Decommissioning of physical storage devices",
        "Security group and ACL configuration",
        "Patch management of an Amazon RDS instance operating system",
        "Controlling physical access to data centers",
        "Patch management of an Amazon EC2 instance operating system"
      ],
      correctAnswer: [1, 4],
      explanation: "Under the Shared Responsibility Model, customers manage security group and network ACL configuration and are responsible for patch management of the guest operating system on Amazon EC2 instances. AWS handles decommissioning of physical storage devices and controlling physical access to data centers, and for Amazon RDS (a managed service), AWS — not the customer — patches the underlying operating system."
    },
    {
      id: "paper-19-044",
      domain: "CMP",
      topic: "lambda",
      type: "single",
      question: "Which AWS service is suitable for an event-driven workload?",
      options: [
        "Amazon EC2",
        "AWS Elastic Beanstalk",
        "AWS Lambda",
        "Amazon Lumberyard"
      ],
      correctAnswer: [2],
      explanation: "AWS Lambda is well suited for event-driven workloads because it automatically runs code in response to triggers (such as an S3 upload or API call) without needing a server to be running continuously. Amazon EC2 requires always-on provisioned servers, AWS Elastic Beanstalk deploys and manages traditional applications on EC2, and Amazon Lumberyard is a game engine — none are designed around discrete event triggers."
    },
    {
      id: "paper-19-045",
      domain: "CLD",
      topic: "cloud-benefits",
      type: "single",
      question: "What is a value proposition of the AWS Cloud?",
      options: [
        "AWS is responsible for security in the AWS Cloud",
        "No long-term contract is required",
        "Provision new servers in days",
        "AWS manages user applications in the AWS Cloud"
      ],
      correctAnswer: [1],
      explanation: "A key value proposition of the AWS Cloud is that no long-term contract is required — customers can pay for what they use without upfront commitments. AWS being responsible for security \"of\" the cloud describes the shared responsibility model rather than a value proposition itself, provisioning servers happens in minutes (not days), and AWS does not manage a customer's applications running in the cloud."
    },
    {
      id: "paper-19-046",
      domain: "S3",
      topic: "s3",
      type: "single",
      question: "What is a characteristic of Amazon S3 cross-region replication?",
      options: [
        "Both source and destination S3 buckets must have versioning disabled",
        "The source and destination S3 buckets cannot be in different AWS Regions",
        "S3 buckets configured for cross-region replication can be owned by a single AWS account or by different accounts",
        "The source S3 bucket owner must have the source and destination AWS Regions disabled for their account"
      ],
      correctAnswer: [2],
      explanation: "Amazon S3 cross-region replication allows the source and destination buckets to be owned by either a single AWS account or by two different AWS accounts, offering flexibility for cross-account replication scenarios. Both buckets must actually have versioning enabled (not disabled) for replication to work, the source and destination buckets must be in different Regions (that's the point of \"cross-region\"), and there's no requirement to disable Regions for the account."
    },
    {
      id: "paper-19-047",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "What is a user responsible for when running an application in the AWS Cloud?",
      options: [
        "Managing physical hardware",
        "Updating the underlying hypervisor",
        "Providing a list of users approved for data center access",
        "Managing application software updates"
      ],
      correctAnswer: [3],
      explanation: "When running an application in the AWS Cloud, the customer remains responsible for managing application software updates. AWS is responsible for managing the underlying physical hardware and updating the hypervisor, and AWS also controls and manages the list of personnel approved for physical data-center access."
    },
    {
      id: "paper-19-048",
      domain: "CLD",
      topic: "agility",
      type: "single",
      question: "A company that does business online needs to quickly deliver new functionality in an iterative manner, minimizing the time to market. Which AWS Cloud feature can provide this?",
      options: [
        "Elasticity",
        "High availability",
        "Agility",
        "Reliability"
      ],
      correctAnswer: [2],
      explanation: "Agility is the AWS Cloud feature that lets a company quickly and iteratively deliver new functionality, reducing time to market because resources can be provisioned and adjusted in minutes. Elasticity refers to scaling capacity with demand, high availability refers to minimizing downtime, and reliability refers to a system's ability to recover from failures — none directly describe speeding up iterative feature delivery."
    },
    {
      id: "paper-19-049",
      domain: "ACM",
      topic: "cost-management",
      type: "multiple-select",
      question: "Which features or services can be used to monitor costs and expenses for an AWS account? (Choose two.)",
      options: [
        "AWS Cost and Usage report",
        "AWS product pages",
        "AWS Simple Monthly Calculator",
        "Billing alerts and Amazon CloudWatch alarms",
        "AWS Price List API"
      ],
      correctAnswer: [0, 3],
      explanation: "The AWS Cost and Usage Report provides the most comprehensive, granular breakdown of AWS costs and usage, and billing alerts paired with Amazon CloudWatch alarms notify account owners when costs cross a defined threshold — both are used to monitor costs and expenses. AWS product pages list pricing information (not account-specific usage), the Simple Monthly Calculator has been deprecated for cost estimation (not monitoring), and the Price List API returns raw pricing data rather than monitoring actual account spend."
    },
    {
      id: "paper-19-050",
      domain: "GLB",
      topic: "route-53",
      type: "single",
      question: "Amazon Route 53 enables users to:",
      options: [
        "encrypt data in transit",
        "register DNS domain names",
        "generate and manage SSL certificates",
        "establish a dedicated network connection to AWS"
      ],
      correctAnswer: [1],
      explanation: "Amazon Route 53 is AWS's DNS web service, and one of its core functions is letting users register new DNS domain names directly. Encrypting data in transit is handled by protocols like TLS/SSL (not Route 53), generating and managing SSL certificates is the role of AWS Certificate Manager, and establishing a dedicated network connection to AWS is the role of AWS Direct Connect."
    }
  ]
});
