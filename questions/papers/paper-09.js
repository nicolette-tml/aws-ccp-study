window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "paper-09",
  paperId: "paper-09",
  paperName: "Practice Paper 9",
  questions: [
    {
      id: "paper-09-001",
      domain: "OTH",
      topic: "quick-starts",
      type: "single",
      question: "An administrator needs to rapidly deploy a popular IT solution and start using it immediately. Where can the administrator find assistance?",
      options: [
        "AWS Well-Architected Framework documentation.",
        "Amazon CloudFront.",
        "AWS CodeCommit.",
        "AWS Quick Start reference deployments."
      ],
      correctAnswer: [3],
      explanation: "AWS Quick Start reference deployments are pre-built, automated deployment guides created by AWS and partners that let administrators launch popular IT solutions and start using them immediately with minimal configuration. The Well-Architected Framework is design guidance rather than a deployment tool, Amazon CloudFront is a content delivery network, and AWS CodeCommit is a source-code repository — none of these rapidly deploy a solution for immediate use."
    },
    {
      id: "paper-09-002",
      domain: "DBA",
      topic: "rds",
      type: "single",
      question: "What is one of the advantages of the Amazon Relational Database Service (Amazon RDS)?",
      options: [
        "It simplifies relational database administration tasks.",
        "It provides 99.99999999999% reliability and durability.",
        "It automatically scales databases for loads.",
        "It enables users to dynamically adjust CPU and RAM resources."
      ],
      correctAnswer: [0],
      explanation: "Amazon RDS is a managed relational database service that simplifies administration tasks like provisioning, patching, backups, and failover, removing much of the operational burden of running a database. RDS does not itself guarantee 99.999999999% durability (that figure describes S3), and it does not automatically scale compute or let users dynamically resize CPU/RAM without an instance-class change, which requires action from the customer."
    },
    {
      id: "paper-09-003",
      domain: "EC2",
      topic: "ec2",
      type: "single",
      question: "Which of the following AWS Cloud services can be used to run a customer-managed relational database?",
      options: [
        "Amazon EC2.",
        "Amazon Route 53.",
        "Amazon ElastiCache.",
        "Amazon DynamoDB."
      ],
      correctAnswer: [0],
      explanation: "Amazon EC2 provides virtual machines on which a customer can install and fully manage their own relational database software, giving complete control over the database engine and configuration. Amazon Route 53 is a DNS service, Amazon ElastiCache is an in-memory caching service, and Amazon DynamoDB is a fully managed NoSQL database — none of these let you run a customer-managed relational database."
    },
    {
      id: "paper-09-004",
      domain: "GLB",
      topic: "availability-zones",
      type: "single",
      question: "A user is planning to launch two additional Amazon EC2 instances to increase availability. Which action should the user take?",
      options: [
        "Launch the instances across multiple Availability Zones in a single AWS Region.",
        "Launch the instances as EC2 Reserved Instances in the same AWS Region and the same Availability Zone.",
        "Launch the instances in multiple AWS Regions but in the same Availability Zone.",
        "Launch the instances as EC2 Spot Instances in the same AWS Region but in different Availability Zones."
      ],
      correctAnswer: [0],
      explanation: "Launching the additional instances across multiple Availability Zones within a single Region protects the application from a failure in any one data center, increasing availability. Launching Reserved or Spot Instances doesn't affect availability if they remain in the same Availability Zone, and placing instances in the same Availability Zone across different Regions doesn't reduce risk and still leaves a single point of failure."
    },
    {
      id: "paper-09-005",
      domain: "IAM",
      topic: "iam-policies",
      type: "single",
      question: "Which of the following can limit Amazon Simple Storage Service (Amazon S3) bucket access to specific users?",
      options: [
        "A public and private key-pair.",
        "Amazon Inspector.",
        "AWS Identity and Access Management (IAM) policies.",
        "Security Groups."
      ],
      correctAnswer: [2],
      explanation: "AWS Identity and Access Management (IAM) policies let an administrator grant or restrict specific users' access to an S3 bucket, enforcing exactly who can read or write objects. A public/private key pair is used for encryption or SSH access rather than access control, Amazon Inspector is a vulnerability-assessment service, and Security Groups control network traffic to EC2 instances, not S3 bucket permissions."
    },
    {
      id: "paper-09-006",
      domain: "VPC",
      topic: "direct-connect",
      type: "multiple-select",
      question: "Which AWS service allows companies to connect an Amazon VPC to an on-premises data center? (Select TWO)",
      options: [
        "AWS VPN.",
        "Amazon Redshift.",
        "API Gateway.",
        "Amazon Direct Connect."
      ],
      correctAnswer: [0, 3],
      explanation: "AWS VPN and AWS Direct Connect both let a company connect an Amazon VPC to an on-premises data center — VPN creates an encrypted tunnel over the public internet, while Direct Connect provides a dedicated private network link. Amazon Redshift is a data warehouse and API Gateway is used to create and manage APIs — neither establishes network connectivity between a VPC and on-premises infrastructure."
    },
    {
      id: "paper-09-007",
      domain: "MON",
      topic: "cloudwatch",
      type: "single",
      question: "Which AWS service or feature can be used to monitor CPU usage?",
      options: [
        "AWS CloudTrail.",
        "VPC Flow Logs.",
        "Amazon CloudWatch.",
        "AWS Config."
      ],
      correctAnswer: [2],
      explanation: "Amazon CloudWatch collects and displays metrics such as CPU utilization from EC2 instances and other resources, making it the service used to monitor CPU usage. AWS CloudTrail logs API calls rather than performance metrics, VPC Flow Logs capture network traffic metadata, and AWS Config tracks resource configuration changes — none of these monitor CPU usage."
    },
    {
      id: "paper-09-008",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "Which task is AWS responsible for in the shared responsibility model for security and compliance?",
      options: [
        "Granting access to individuals and services.",
        "Encrypting data in transit.",
        "Updating Amazon EC2 host firmware.",
        "Updating operating systems."
      ],
      correctAnswer: [2],
      explanation: "Under the Shared Responsibility Model, AWS is responsible for maintaining the underlying infrastructure, including updating the firmware on the physical EC2 hosts. Granting access to individuals and services, encrypting data in transit, and updating guest operating systems are all responsibilities that fall to the customer, since they operate 'in' the cloud rather than 'of' the cloud."
    },
    {
      id: "paper-09-009",
      domain: "ACM",
      topic: "support",
      type: "single",
      question: "Which of the following security-related actions are available at no cost?",
      options: [
        "Calling AWS Support.",
        "Contacting AWS Professional Services to request a workshop.",
        "Accessing forums, blogs, and whitepapers.",
        "Attending AWS classes at a local university."
      ],
      correctAnswer: [2],
      explanation: "Accessing AWS forums, blogs, and whitepapers is free and available to all customers regardless of support plan. Calling AWS Support requires at least a paid support plan, contacting AWS Professional Services for a workshop is a paid engagement, and attending AWS classes at a university typically involves tuition or program fees."
    },
    {
      id: "paper-09-010",
      domain: "S3",
      topic: "s3",
      type: "single",
      question: "Which storage service can be used as a low-cost option for hosting static websites?",
      options: [
        "Amazon Glacier.",
        "Amazon DynamoDB.",
        "Amazon Elastic File System (Amazon EFS).",
        "Amazon Simple Storage Service (Amazon S3)."
      ],
      correctAnswer: [3],
      explanation: "Amazon S3 is a low-cost, highly durable object storage service that can host static website content directly from a bucket, making it ideal for simple, low-cost website hosting. Amazon Glacier is meant for long-term archival (not serving live web content), DynamoDB is a NoSQL database, and Amazon EFS is a file system for EC2 workloads — none are designed for cost-effective static website hosting."
    },
    {
      id: "paper-09-011",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "According to the AWS shared responsibility model what is the sole responsibility of AWS?",
      options: [
        "Application security.",
        "Edge location management.",
        "Patch management.",
        "Client-side data."
      ],
      correctAnswer: [1],
      explanation: "Edge location management is entirely AWS's responsibility, as AWS controls and operates all of the physical global infrastructure, including edge locations used by services like CloudFront. Application security and client-side data protection are customer responsibilities, and patch management is a shared responsibility split between AWS and the customer depending on the service."
    },
    {
      id: "paper-09-012",
      domain: "ARC",
      topic: "well-architected",
      type: "multiple-select",
      question: "Which of the following are pillars of the AWS Well-Architected Framework? (Select TWO)",
      options: [
        "Multiple Availability Zones.",
        "Performance efficiency.",
        "Security.",
        "Encryption usage.",
        "High availability."
      ],
      correctAnswer: [1, 2],
      explanation: "Performance Efficiency and Security are two of the pillars of the AWS Well-Architected Framework, alongside Operational Excellence, Reliability, Cost Optimization, and Sustainability. Multiple Availability Zones and high availability are architectural techniques that support reliability but are not themselves named pillars, and encryption usage is a security practice, not a pillar."
    },
    {
      id: "paper-09-013",
      domain: "ACM",
      topic: "trusted-advisor",
      type: "single",
      question: "Which AWS service identifies security groups that allow unrestricted access to a user’s AWS resources?",
      options: [
        "AWS Trusted Advisor.",
        "Amazon Inspector.",
        "Amazon CloudWatch.",
        "AWS CloudTrail."
      ],
      correctAnswer: [0],
      explanation: "AWS Trusted Advisor inspects a customer's AWS environment and flags security groups that grant unrestricted access, among other best-practice checks. Amazon Inspector assesses EC2 instances and container images for vulnerabilities rather than reviewing security group rules broadly, Amazon CloudWatch monitors performance metrics, and AWS CloudTrail logs API activity — neither directly identifies overly permissive security groups."
    },
    {
      id: "paper-09-014",
      domain: "ARC",
      topic: "design-principles",
      type: "multiple-select",
      question: "Which design principles for cloud architecture are recommended when re-architecting a large monolithic application? (Select TWO)",
      options: [
        "Use manual monitoring.",
        "Use fixed servers.",
        "Implement loose coupling.",
        "Rely on individual components.",
        "Design for scalability."
      ],
      correctAnswer: [2, 4],
      explanation: "Implementing loose coupling and designing for scalability are recommended cloud architecture principles when breaking apart a monolithic application, allowing components to fail and scale independently. Using manual monitoring, relying on fixed servers, and depending on individual components are all outdated, monolithic-style practices that these cloud architecture principles specifically aim to move away from."
    },
    {
      id: "paper-09-015",
      domain: "CLD",
      topic: "elasticity",
      type: "single",
      question: "When architecting cloud applications, which of the following are a key design principle?",
      options: [
        "Use the largest instance possible.",
        "Provision capacity for peak load.",
        "Use the Scrum development process.",
        "Implement elasticity."
      ],
      correctAnswer: [3],
      explanation: "Implementing elasticity — automatically scaling resources up or down with demand — is a key cloud architecture design principle that ensures capacity matches need without over-provisioning. Using the largest instance possible and provisioning for peak load both waste resources during periods of lower demand, and the Scrum development process is a software methodology, not a cloud architecture principle."
    },
    {
      id: "paper-09-016",
      domain: "DEP",
      topic: "systems-manager",
      type: "single",
      question: "A company has deployed several relational databases on Amazon EC2 instances. Every month the database software vendor releases new security patches that need to be applied to the databases. What is the MOST efficient way to apply the security patches?",
      options: [
        "Connect to each database instance on a monthly basis and download and apply the necessary security patches from the vendor.",
        "Enable automate patching for the instances using the Amazon RDS console.",
        "In AWS Config. configure a rule for the instances and the required patch level.",
        "Use AWS Systems Manager to automate database patching according to a schedule."
      ],
      correctAnswer: [3],
      explanation: "AWS Systems Manager can automate patch management across many EC2 instances on a defined schedule, making it the most efficient way to apply security patches at scale. Manually connecting to each instance every month does not scale and is error-prone, RDS automated patching doesn't apply since these are self-managed databases on EC2 (not RDS), and AWS Config only tracks and reports on configuration compliance rather than actually applying patches."
    },
    {
      id: "paper-09-017",
      domain: "IAM",
      topic: "sdk",
      type: "single",
      question: "Which mechanism allows developers to access AWS services from application code?",
      options: [
        "AWS Software Development Kit.",
        "AWS Management Console.",
        "AWS CodePipeline.",
        "AWS Config."
      ],
      correctAnswer: [0],
      explanation: "The AWS Software Development Kit (SDK) provides libraries in various programming languages that let developers call AWS services directly from application code. The AWS Management Console is a web-based UI for manual operations, AWS CodePipeline automates release pipelines, and AWS Config tracks resource configuration — none of these are used to invoke AWS services from within application code."
    },
    {
      id: "paper-09-018",
      domain: "ACM",
      topic: "tco",
      type: "single",
      question: "Which AWS feature will reduce the customer’s total cost of ownership (TCO)?",
      options: [
        "Shared responsibility security model.",
        "Single tenancy.",
        "Elastic computing.",
        "Encryption."
      ],
      correctAnswer: [2],
      explanation: "Elastic computing lets customers scale resources to match actual demand rather than provisioning for peak capacity in advance, reducing wasted spend and lowering total cost of ownership. The shared responsibility model and encryption relate to security, not cost, and single tenancy typically increases cost rather than reducing it."
    },
    {
      id: "paper-09-019",
      domain: "CLD",
      topic: "cloud-benefits",
      type: "single",
      question: "Which of the following is a benefit of using the AWS Cloud?",
      options: [
        "Permissive security removes the administrative burden.",
        "Ability to focus on revenue-generating activities.",
        "Control over cloud network hardware.",
        "Choice of specific cloud hardware vendors."
      ],
      correctAnswer: [1],
      explanation: "A key benefit of the AWS Cloud is that it removes the undifferentiated heavy lifting of managing infrastructure, freeing organizations to focus on revenue-generating activities instead. Permissive security actually increases risk rather than reducing administrative burden safely, and AWS customers do not control the physical network hardware or choose specific hardware vendors — AWS manages and abstracts that layer."
    },
    {
      id: "paper-09-020",
      domain: "ACM",
      topic: "trusted-advisor",
      type: "multiple-select",
      question: "Which of the following are categories of AWS Trusted Advisor? (Select TWO)",
      options: [
        "Fault Tolerance.",
        "Instance Usage.",
        "Infrastructure.",
        "Performance.",
        "Storage Capacity."
      ],
      correctAnswer: [0, 3],
      explanation: "AWS Trusted Advisor organizes its recommendations into categories including Cost Optimization, Performance, Security, Fault Tolerance, and Service Limits. 'Instance Usage,' 'Infrastructure,' and 'Storage Capacity' are not among Trusted Advisor's official category names."
    },
    {
      id: "paper-09-021",
      domain: "MON",
      topic: "cloudwatch",
      type: "single",
      question: "What is Amazon CloudWatch?",
      options: [
        "A code repository with customizable build and team commit features.",
        "A metrics repository with customizable notification thresholds and channels.",
        "A security configuration repository with threat analytics.",
        "A rule repository of a web application firewall with automated vulnerability prevention features."
      ],
      correctAnswer: [1],
      explanation: "Amazon CloudWatch is a monitoring service that acts as a metrics repository, letting customers collect metrics and configure customizable alarm thresholds and notification channels. It is not a code repository (that's CodeCommit), a security configuration repository, or a web application firewall's rule repository (that's AWS WAF)."
    },
    {
      id: "paper-09-022",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "multiple-select",
      question: "Under the AWS shared responsibility model, which of the following activities are the customer’s responsibility? (Select TWO)",
      options: [
        "Patching operating system components for Amazon Relational Database Server (Amazon RDS).",
        "Encrypting data on the client-side.",
        "Training the data center staff.",
        "Configuring Network Access Control Lists (ACL).",
        "Maintaining environmental controls within a data center."
      ],
      correctAnswer: [1, 3],
      explanation: "Under the Shared Responsibility Model, the customer is responsible for encrypting data on the client side and for configuring Network Access Control Lists to control subnet-level traffic. Patching the OS components of managed RDS instances, training data center staff, and maintaining environmental controls in AWS data centers are all AWS's responsibility, since RDS is a managed service and the physical facilities are entirely under AWS's control."
    },
    {
      id: "paper-09-023",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "Under the shared responsibility model, which of the following is a shared control between a customer and AWS?",
      options: [
        "Physical controls.",
        "Patch management.",
        "Zone security.",
        "Data center auditing."
      ],
      correctAnswer: [1],
      explanation: "Patch management is a shared control because AWS patches the underlying infrastructure while the customer is responsible for patching their own guest operating systems and applications. Physical controls, zone security, and data center auditing are all solely AWS's responsibility since they concern the physical facilities customers never access."
    },
    {
      id: "paper-09-024",
      domain: "ACM",
      topic: "billing-and-cost-management",
      type: "single",
      question: "Which AWS service is used to pay AWS bills, and monitor usage and budget costs?",
      options: [
        "AWS Billing and Cost Management.",
        "Consolidated billing.",
        "Amazon CloudWatch.",
        "Amazon QuickSight."
      ],
      correctAnswer: [0],
      explanation: "AWS Billing and Cost Management is the console service used to pay bills and monitor usage and budget costs. Consolidated billing is a feature within that service (for combining multiple accounts) rather than the overall billing tool itself, Amazon CloudWatch monitors operational metrics (not billing), and Amazon QuickSight is a business intelligence visualization tool."
    },
    {
      id: "paper-09-025",
      domain: "ACM",
      topic: "economies-of-scale",
      type: "single",
      question: "How do customers benefit from Amazon’s massive economies of scale?",
      options: [
        "Periodic price reductions as the result of Amazon’s operational efficiencies.",
        "New Amazon EC2 instance types providing the latest hardware.",
        "The ability to scale up and down when needed.",
        "Increased reliability in the underlying hardware of Amazon EC2 instances."
      ],
      correctAnswer: [0],
      explanation: "As AWS's customer base and infrastructure grow, its operational efficiencies increase, and AWS has historically passed those savings on to customers through periodic price reductions. New EC2 instance types with the latest hardware, the ability to scale up and down, and increased hardware reliability are all benefits of AWS, but they are not specifically the outcome of Amazon's economies of scale."
    },
    {
      id: "paper-09-026",
      domain: "ACM",
      topic: "consolidated-billing",
      type: "single",
      question: "Which AWS feature allows a company to take advantage of usage tiers for services across multiple member accounts?",
      options: [
        "Service control policies (SCPs).",
        "Consolidated billing.",
        "All Upfront Reserved Instances.",
        "AWS Cost Explorer."
      ],
      correctAnswer: [1],
      explanation: "Consolidated billing combines usage from all member accounts under one payer account, letting them collectively reach volume-based pricing tiers for services across the organization. Service control policies restrict permissions (not billing), All Upfront Reserved Instances are a purchase option (not a multi-account billing feature), and AWS Cost Explorer visualizes spending but doesn't combine usage for tier discounts."
    },
    {
      id: "paper-09-027",
      domain: "VPC",
      topic: "direct-connect",
      type: "multiple-select",
      question: "Which AWS services provide a way to extend an on-premises architecture to the aws cloud? (Select TWO)",
      options: [
        "Amazon EBS.",
        "Amazon Connect.",
        "AWS Storage Gateway.",
        "Amazon CloudFront.",
        "AWS Direct Connect."
      ],
      correctAnswer: [2, 4],
      explanation: "AWS Direct Connect provides a dedicated, private network connection extending an on-premises data center into the AWS Cloud, and AWS Storage Gateway extends on-premises storage into AWS by presenting cloud-backed storage volumes or file shares locally — both are used to build hybrid architectures. Amazon EBS is block storage attached to EC2 instances, Amazon Connect is a cloud contact center, and Amazon CloudFront is a content delivery network — none extend on-premises infrastructure into AWS."
    },
    {
      id: "paper-09-028",
      domain: "ELB",
      topic: "elastic-load-balancing",
      type: "single",
      question: "Which of the following services will automatically scale with an expected increase in web traffic?",
      options: [
        "AWS CodePipeline.",
        "Elastic Load Balancing.",
        "Amazon EBS.",
        "AWS Direct Connect."
      ],
      correctAnswer: [1],
      explanation: "Elastic Load Balancing works together with Auto Scaling to automatically distribute and scale incoming traffic across EC2 instances as web traffic grows. AWS CodePipeline automates software release workflows, Amazon EBS is block storage (not compute capacity), and AWS Direct Connect is a private network link — none of these scale automatically with web traffic."
    },
    {
      id: "paper-09-029",
      domain: "S3",
      topic: "s3",
      type: "single",
      question: "Which service provides a virtually unlimited amount of online highly durable object storage?",
      options: [
        "Amazon Redshift.",
        "Amazon Elastic File System (Amazon EFS).",
        "Amazon Elastic Container Service (Amazon ECS).",
        "Amazon S3."
      ],
      correctAnswer: [3],
      explanation: "Amazon S3 provides virtually unlimited, highly durable (99.999999999%) object storage, making it the service for storing effectively unlimited amounts of data online. Amazon Redshift is a data warehouse for analytics, Amazon EFS is a file system with storage limits tied to file-system use cases, and Amazon ECS is a container orchestration service — none provide the unlimited object storage that S3 does."
    },
    {
      id: "paper-09-030",
      domain: "GLB",
      topic: "availability-zones",
      type: "single",
      question: "Which AWS feature should a customer leverage to achieve high availability of an application?",
      options: [
        "AWS Direct Connect.",
        "Availability Zones.",
        "Data centers.",
        "Amazon Virtual Private Cloud (Amazon VPC)."
      ],
      correctAnswer: [1],
      explanation: "Availability Zones are physically separate data centers within a Region, and deploying an application across multiple AZs protects it from a single data-center failure, achieving high availability. AWS Direct Connect is a private network link, data centers alone (without redundancy across AZs) don't guarantee availability, and Amazon VPC is a virtual network construct, not a mechanism for redundancy."
    },
    {
      id: "paper-09-031",
      domain: "SEC",
      topic: "waf",
      type: "multiple-select",
      question: "Which AWS service or feature can enhance network security by blocking requests from a particular network for a web application on AWS? (Select TWO)",
      options: [
        "AWS WAF.",
        "AWS Trusted Advisor.",
        "AWS Direct Connect.",
        "AWS Organizations.",
        "Network ACLs."
      ],
      correctAnswer: [0, 4],
      explanation: "AWS WAF lets customers create rules to block web requests based on the originating IP address or network, and Network ACLs can also be configured to deny traffic from specific IP ranges at the subnet level — both enhance network security by blocking requests from a particular network. AWS Trusted Advisor only provides recommendations rather than actively blocking traffic, AWS Direct Connect is a private network connection (not a filtering tool), and AWS Organizations manages multiple accounts rather than network traffic."
    },
    {
      id: "paper-09-032",
      domain: "ARC",
      topic: "decoupling",
      type: "single",
      question: "Which of the following is a cloud architectural design principle?",
      options: [
        "Scale up not out.",
        "Loosely couple components.",
        "Build monolithic systems.",
        "Use commercial database software."
      ],
      correctAnswer: [1],
      explanation: "Loosely coupling components is a core cloud architectural design principle, allowing individual parts of an application to fail, scale, or be updated independently without impacting the rest of the system. Scaling up (rather than out), building monolithic systems, and relying on commercial database software all run counter to recommended cloud-native design principles."
    },
    {
      id: "paper-09-033",
      domain: "MON",
      topic: "cloudtrail",
      type: "single",
      question: "Which service enables risk auditing by continuously monitoring and logging account activity, including user actions in the AWS Management Console and AWS SDKs?",
      options: [
        "Amazon CloudWatch.",
        "AWS CloudTrail.",
        "AWS Config.",
        "AWS Health."
      ],
      correctAnswer: [1],
      explanation: "AWS CloudTrail continuously logs and monitors account activity, including API calls made through the AWS Management Console and AWS SDKs, enabling risk auditing of who did what and when. Amazon CloudWatch monitors performance metrics rather than API activity, AWS Config tracks resource configuration state over time, and AWS Health reports on service availability issues — none log user actions for auditing purposes."
    },
    {
      id: "paper-09-034",
      domain: "SEC",
      topic: "artifact",
      type: "single",
      question: "Where can AWS compliance and certification reports be downloaded?",
      options: [
        "AWS Artifact.",
        "AWS Concierge.",
        "AWS Certificate Manager.",
        "AWS Trusted Advisor."
      ],
      correctAnswer: [0],
      explanation: "AWS Artifact provides on-demand, self-service access to AWS's compliance reports and certifications, such as SOC and PCI reports. AWS Concierge is a support contact for Enterprise billing questions, AWS Certificate Manager issues and manages SSL/TLS certificates, and AWS Trusted Advisor gives account optimization recommendations — none of these provide compliance report downloads."
    },
    {
      id: "paper-09-035",
      domain: "ACM",
      topic: "tco",
      type: "multiple-select",
      question: "The financial benefits of using AWS are: (Select TWO)",
      options: [
        "Reduced Total Cost of Ownership (TCO).",
        "Increased capital expenditure (capex).",
        "Reduced operational expenditure ( opex ).",
        "Deferred payment plans for startups.",
        "Business credit lines for startups."
      ],
      correctAnswer: [0, 2],
      explanation: "Using AWS reduces Total Cost of Ownership by eliminating large upfront infrastructure investments, and it reduces operational expenditure by shifting the cost model to pay-as-you-go operational spending rather than large capital purchases. AWS actually decreases capital expenditure (not increases it), and deferred payment plans and business credit lines for startups are not standard financial benefits attributed to using AWS."
    },
    {
      id: "paper-09-036",
      domain: "S3",
      topic: "s3",
      type: "single",
      question: "Which AWS service can serve a static website?",
      options: [
        "Amazon S3.",
        "Amazon Route 53.",
        "Amazon QuickSight.",
        "AWS X-Ray."
      ],
      correctAnswer: [0],
      explanation: "Amazon S3 can host static website content directly from a bucket, serving HTML, CSS, images, and other static files to visitors. Amazon Route 53 is a DNS service, Amazon QuickSight is a business intelligence tool, and AWS X-Ray traces application requests for debugging — none of these serve website content."
    },
    {
      id: "paper-09-037",
      domain: "GLB",
      topic: "cloudfront",
      type: "multiple-select",
      question: "What are the benefits of using the AWS Cloud for companies with customers in many countries around the world (Select TWO)",
      options: [
        "Companies can deploy applications in multiple AWS Regions to reduce latency.",
        "Amazon Translate automatically translates third-party website interfaces into multiple languages.",
        "Amazon CloudFront has multiple edge locations around the world to reduce latency.",
        "Amazon Comprehend allows users to build applications that can respond to user requests in many languages.",
        "Elastic Load Balancing can distribute application web traffic to multiple AWS Regions around the world which reduces latency."
      ],
      correctAnswer: [0, 2],
      explanation: "Deploying applications across multiple AWS Regions puts compute resources physically closer to customers worldwide, and Amazon CloudFront's global network of edge locations caches content near users — both reduce latency for a global customer base. Amazon Translate and Amazon Comprehend are AI language services unrelated to network latency, and Elastic Load Balancing distributes traffic within a Region rather than across multiple Regions."
    },
    {
      id: "paper-09-038",
      domain: "GLB",
      topic: "global-infrastructure",
      type: "multiple-select",
      question: "Which of the following are main components of the AWS global infrastructure? (Select TWO)",
      options: [
        "Resource groups.",
        "Availability Zones.",
        "Security groups.",
        "Regions.",
        "Amazon Machine Images (AMIS)."
      ],
      correctAnswer: [1, 3],
      explanation: "Availability Zones and Regions are the core physical building blocks of the AWS global infrastructure, with Regions containing multiple isolated Availability Zones. Resource groups and security groups are logical constructs for organizing and securing resources (not physical infrastructure), and Amazon Machine Images are templates used to launch EC2 instances, not infrastructure components."
    },
    {
      id: "paper-09-039",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "What is the AWS customer responsible for according to the AWS shared responsibility model?",
      options: [
        "Physical access controls.",
        "Data encryption.",
        "Secure disposal of storage devices.",
        "Environmental risk management."
      ],
      correctAnswer: [1],
      explanation: "Data encryption is the customer's responsibility under the Shared Responsibility Model, since the customer controls what data is stored and how it's protected. Physical access controls, secure disposal of storage devices, and environmental risk management are all AWS's responsibility, as they involve the physical data centers that customers never directly access."
    },
    {
      id: "paper-09-040",
      domain: "ACM",
      topic: "consolidated-billing",
      type: "single",
      question: "If each department within a company has its own AWS account, what is one way to enable consolidated billing?",
      options: [
        "Use AWS Budgets on each account to pay only to budget.",
        "Contact AWS Support for a monthly bill.",
        "Create an AWS Organization from the payer account and invite the other accounts to join.",
        "Put all invoices into one Amazon Simple Storage Service (Amazon S3) bucket, load data into Amazon Redshift, and then run a billing report."
      ],
      correctAnswer: [2],
      explanation: "Creating an AWS Organization from the intended payer account and inviting the other departmental accounts to join automatically enables consolidated billing across all member accounts. Using AWS Budgets on each account only sets spending alerts (it doesn't consolidate billing), contacting AWS Support for a manual monthly bill isn't scalable or automatic, and manually aggregating invoices in S3 and Redshift is a workaround, not the built-in consolidated billing feature."
    },
    {
      id: "paper-09-041",
      domain: "ACM",
      topic: "tco",
      type: "single",
      question: "What costs are included when comparing AWS Total Cost of Ownership (TCO) with on-premises TCO?",
      options: [
        "Project management.",
        "Antivirus software licensing.",
        "Data center security.",
        "Software development."
      ],
      correctAnswer: [2],
      explanation: "When comparing AWS TCO to on-premises TCO, costs like data center security must be included on the on-premises side, since running your own facility requires physical security staff and systems that AWS otherwise provides. Project management and software development costs are typically incurred regardless of where the infrastructure runs, and antivirus software licensing is a smaller, application-level cost rather than a defining TCO comparison factor."
    },
    {
      id: "paper-09-042",
      domain: "DBA",
      topic: "managed-services",
      type: "single",
      question: "What is the benefit of using AWS managed services, such as Amazon ElastiCache and Amazon Relational Database Service (Amazon RDS)?",
      options: [
        "They require the customer to monitor and replace failing instances.",
        "They have better performance than customer-managed services.",
        "They simplify patching and updating underlying OSs.",
        "They do not require the customer to optimize instance type or size selections."
      ],
      correctAnswer: [2],
      explanation: "AWS managed services like Amazon ElastiCache and Amazon RDS handle the underlying operating system patching and updates on behalf of the customer, reducing operational overhead. These services do not require the customer to monitor and replace failing instances (AWS handles that), managed services don't inherently perform better than customer-managed ones, and customers still choose instance type and size for RDS and ElastiCache."
    },
    {
      id: "paper-09-043",
      domain: "VPC",
      topic: "vpn",
      type: "multiple-select",
      question: "Which services can be used across hybrid AWS Cloud architectures? (Select TWO)",
      options: [
        "Amazon Route 53.",
        "Virtual Private Gateway.",
        "Classic Load Balancer.",
        "Auto Scaling.",
        "Amazon CloudWatch default metrics."
      ],
      correctAnswer: [0, 1],
      explanation: "Amazon Route 53 can route DNS traffic to resources both in AWS and on-premises, and a Virtual Private Gateway is the AWS-side endpoint used to establish a VPN connection to an on-premises network — both are usable across hybrid architectures. A Classic Load Balancer and Auto Scaling operate only within AWS on EC2 instances, and CloudWatch's default metrics only monitor AWS resources, none of which extend to on-premises infrastructure."
    },
    {
      id: "paper-09-044",
      domain: "ELB",
      topic: "elastic-load-balancing",
      type: "single",
      question: "Which statement best describes Elastic Load Balancing?",
      options: [
        "It translates a domain name into an IP address using DNC.",
        "It distributes incoming application traffic across one or more Amazon EC2 instances.",
        "It collects metrics on connected Amazon EC2 instances.",
        "It automatically adjusts the number of Amazon EC2 instances to support incoming traffic."
      ],
      correctAnswer: [1],
      explanation: "Elastic Load Balancing distributes incoming application traffic across one or more EC2 instances, improving fault tolerance and evenly spreading load. Translating domain names into IP addresses is DNS resolution (handled by Route 53), collecting metrics on EC2 instances is done by CloudWatch, and automatically adjusting the number of instances is the function of Auto Scaling, not ELB."
    },
    {
      id: "paper-09-045",
      domain: "DBA",
      topic: "dynamodb",
      type: "single",
      question: "Which of the following is a fast and reliable NoSQL database service?",
      options: [
        "Amazon Redshift.",
        "Amazon RDS.",
        "Amazon DynamoDB.",
        "Amazon S3."
      ],
      correctAnswer: [2],
      explanation: "Amazon DynamoDB is AWS's fully managed, fast, and reliable NoSQL database service, delivering consistent single-digit millisecond performance at any scale. Amazon Redshift is a data warehouse for analytics, Amazon RDS is for relational (SQL) databases, and Amazon S3 is object storage, not a database — none are NoSQL database services."
    },
    {
      id: "paper-09-046",
      domain: "SEC",
      topic: "artifact",
      type: "single",
      question: "Which AWS service would you use to obtain compliance reports and certificates?",
      options: [
        "AWS Artifact.",
        "AWS Lambda.",
        "Amazon Inspector.",
        "AWS Certificate Manager."
      ],
      correctAnswer: [0],
      explanation: "AWS Artifact provides self-service access to AWS's compliance reports and certifications on demand. AWS Lambda is a serverless compute service, Amazon Inspector performs vulnerability assessments, and AWS Certificate Manager issues SSL/TLS certificates — none of these provide compliance documentation."
    },
    {
      id: "paper-09-047",
      domain: "GLB",
      topic: "global-services",
      type: "multiple-select",
      question: "Which AWS services are defined as global instead of regional? (Select TWO)",
      options: [
        "Amazon Route 53.",
        "Amazon EC2.",
        "Amazon S3.",
        "Amazon CloudFront.",
        "Amazon DynamoDB."
      ],
      correctAnswer: [0, 3],
      explanation: "Amazon Route 53 and Amazon CloudFront are both global services, operating across all AWS Regions rather than being scoped to a single Region. Amazon EC2, Amazon S3, and Amazon DynamoDB are all Regional services whose resources are created and managed within a specific AWS Region."
    },
    {
      id: "paper-09-048",
      domain: "IAM",
      topic: "iam-groups",
      type: "single",
      question: "How would an AWS customer easily apply common access controls to a large set of users?",
      options: [
        "Apply an IAM policy to an IAM group.",
        "Apply an IAM policy to an IAM role.",
        "Apply the same IAM policy to all IAM users with access to the same workload.",
        "Apply an IAM policy to an Amazon Cognito user pool."
      ],
      correctAnswer: [0],
      explanation: "Applying an IAM policy to an IAM group lets an administrator manage permissions for many users at once — every user added to the group automatically inherits the group's policy. Applying a policy to a single IAM role only affects entities that assume that role, applying the same policy individually to every user is inefficient and hard to maintain, and IAM policies aren't attached to Amazon Cognito user pools (which manage app users, not IAM permissions)."
    },
    {
      id: "paper-09-049",
      domain: "GLB",
      topic: "availability-zones",
      type: "single",
      question: "Which of the following is an important architectural design principle when designing cloud applications?",
      options: [
        "Use multiple Availability Zones.",
        "Use tightly coupled components.",
        "Use open source software.",
        "Provision extra capacity."
      ],
      correctAnswer: [0],
      explanation: "Using multiple Availability Zones is a key architectural design principle for cloud applications, ensuring that a failure in one data center doesn't take down the entire application. Using tightly coupled components, choosing open-source software, and provisioning extra capacity in advance are not core design principles — in fact tightly coupled components and over-provisioning run counter to recommended cloud design."
    },
    {
      id: "paper-09-050",
      domain: "ACM",
      topic: "organizations",
      type: "single",
      question: "Which service allows a company with multiple AWS accounts to combine its usage to obtain volume discounts?",
      options: [
        "AWS Server Migration Service.",
        "AWS Organizations.",
        "AWS Budgets.",
        "AWS Trusted Advisor."
      ],
      correctAnswer: [1],
      explanation: "AWS Organizations allows a company with multiple AWS accounts to consolidate billing and combine usage across accounts, enabling volume discounts. AWS Server Migration Service is for migrating on-premises servers to AWS, AWS Budgets sets spending alerts, and AWS Trusted Advisor gives optimization recommendations — none of these combine multiple accounts' usage for pricing purposes."
    }
  ]
});
