window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "paper-22",
  paperId: "paper-22",
  paperName: "Practice Paper 22",
  questions: [
    {
      id: "paper-22-001",
      domain: "ACM",
      topic: "consolidated-billing",
      type: "single",
      question: "A company operating in the AWS Cloud requires separate invoices for specific environments, such as development, testing, and production. How can this be achieved?",
      options: [
        "Use multiple AWS accounts",
        "Use resource tagging",
        "Use multiple VPCs",
        "Use Cost Explorer"
      ],
      correctAnswer: [0],
      explanation: "Using multiple AWS accounts (one per environment, e.g. dev, test, prod) is the standard way to generate separate invoices, since each AWS account receives its own bill. Resource tagging helps break down costs within a single bill but does not produce separate invoices, multiple VPCs are a networking construct unrelated to billing, and Cost Explorer only visualizes spend rather than issuing separate invoices."
    },
    {
      id: "paper-22-002",
      domain: "DEP",
      topic: "codepipeline",
      type: "single",
      question: "Which AWS service can be used in the application deployment process?",
      options: [
        "AWS AppSync",
        "AWS Batch",
        "AWS CodePipeline",
        "AWS DataSync"
      ],
      correctAnswer: [2],
      explanation: "AWS CodePipeline is a continuous delivery service that automates the build, test, and deployment stages of releasing an application, making it the tool used in the application deployment process. AWS AppSync builds GraphQL APIs, AWS Batch runs batch computing jobs, and AWS DataSync moves data between on-premises storage and AWS, none of which are deployment pipeline tools."
    },
    {
      id: "paper-22-003",
      domain: "ACM",
      topic: "pricing-models",
      type: "multiple-select",
      question: "What can be used to reduce the cost of running Amazon EC2 instances? (Choose two.)",
      options: [
        "Spot Instances for stateless and flexible workloads",
        "Memory optimized instances for high-compute workloads",
        "On-Demand Instances for high-cost and sustained workloads",
        "Reserved Instances for sustained workloads",
        "Spend limits set using AWS Budgets"
      ],
      correctAnswer: [0, 3],
      explanation: "Spot Instances reduce cost for stateless, flexible workloads that can tolerate interruption, offering steep discounts off On-Demand pricing, and Reserved Instances reduce cost for steady, sustained workloads by committing to a 1- or 3-year term. Memory-optimized instances are a sizing choice, not a cost-reduction strategy, On-Demand Instances are actually the most expensive option for sustained workloads, and AWS Budgets only alerts on spend rather than reducing it."
    },
    {
      id: "paper-22-004",
      domain: "SEC",
      topic: "artifact",
      type: "single",
      question: "A company is launching an e-commerce site that will store and process credit card data. The company requires information about AWS compliance reports and AWS agreements. Which AWS service provides on-demand access to these items?",
      options: [
        "AWS Certificate Manager",
        "AWS Config",
        "AWS Artifact",
        "AWS CloudTrail"
      ],
      correctAnswer: [2],
      explanation: "AWS Artifact provides on-demand, self-service access to AWS compliance reports (such as PCI and SOC reports) and AWS agreements, which is exactly what a company handling credit card data needs. AWS Certificate Manager issues SSL/TLS certificates, AWS Config tracks resource configuration, and AWS CloudTrail logs API activity, none of which provide compliance documentation."
    },
    {
      id: "paper-22-005",
      domain: "GLB",
      topic: "route-53",
      type: "single",
      question: "Which AWS service or feature allows the user to manage cross-region application traffic?",
      options: [
        "Amazon AppStream 2.0",
        "Amazon VPC",
        "Elastic Load Balancer",
        "Amazon Route 53"
      ],
      correctAnswer: [3],
      explanation: "Amazon Route 53 is a DNS and traffic-management service that can route users across multiple AWS Regions using policies such as latency-based or geolocation routing, making it the service that manages cross-region application traffic. AppStream 2.0 streams desktop applications, Amazon VPC is a private network within a Region, and an Elastic Load Balancer distributes traffic only within a single Region."
    },
    {
      id: "paper-22-006",
      domain: "MON",
      topic: "cloudtrail",
      type: "single",
      question: "Which AWS service can be used to track unauthorized API calls?",
      options: [
        "AWS Config",
        "AWS CloudTrail",
        "AWS Trusted Advisor",
        "Amazon Inspector"
      ],
      correctAnswer: [1],
      explanation: "AWS CloudTrail records every API call made in an AWS account, including unauthorized or unusual calls, making it the service used to track unauthorized API activity. AWS Config tracks resource configuration changes (not API calls), Trusted Advisor gives best-practice recommendations, and Amazon Inspector scans workloads for vulnerabilities."
    },
    {
      id: "paper-22-007",
      domain: "DEP",
      topic: "aws-config",
      type: "single",
      question: "A user needs to regularly audit and evaluate the setup of all AWS resources, identify non-compliant accounts, and be notified when a resource changes. Which AWS service can be used to meet these requirements?",
      options: [
        "AWS Trusted Advisor",
        "AWS Config",
        "AWS Resource Access Manager",
        "AWS Systems Manager"
      ],
      correctAnswer: [1],
      explanation: "AWS Config continuously audits and evaluates the configuration of AWS resources, flags non-compliant resources against defined rules, and can notify the user whenever a resource changes, meeting all three requirements. Trusted Advisor gives general best-practice checks but doesn't continuously track configuration changes, Resource Access Manager shares resources across accounts, and Systems Manager focuses on operational management rather than compliance auditing."
    },
    {
      id: "paper-22-008",
      domain: "ELB",
      topic: "high-availability",
      type: "single",
      question: "A user is planning to launch two additional Amazon EC2 instances to increase availability. Which action should the user take?",
      options: [
        "Launch the instances across multiple Availability Zones in a single AWS Region.",
        "Launch the instances as EC2 Reserved Instances in the same AWS Region and the same Availability Zone.",
        "Launch the instances in multiple AWS Regions, but in the same Availability Zone.",
        "Launch the instances as EC2 Spot Instances in the same AWS Region, but in different Availability Zones."
      ],
      correctAnswer: [0],
      explanation: "Launching additional EC2 instances across multiple Availability Zones within a single Region is the standard way to increase availability, since it protects against the failure of any single data center. Launching instances in the same Availability Zone (whether Reserved or Spot) does not add resilience, and launching in multiple Regions but the same Availability Zone doesn't make sense, since Availability Zones are Region-specific."
    },
    {
      id: "paper-22-009",
      domain: "S3",
      topic: "s3",
      type: "single",
      question: "A company must store critical business data in Amazon S3 with a backup to another AWS Region. How can this be achieved?",
      options: [
        "Use an Amazon CloudFront Content Delivery Network (CDN) to cache data globally",
        "Set up Amazon S3 cross-region replication to another AWS Region",
        "Configure the AWS Backup service to back up to the data to another AWS Region",
        "Take Amazon S3 bucket snapshots and copy that data to another AWS Region"
      ],
      correctAnswer: [1],
      explanation: "Amazon S3 Cross-Region Replication automatically copies objects from a bucket in one Region to a bucket in another Region, providing the backup described. CloudFront is a content delivery cache, not a backup mechanism, AWS Backup does not natively back up S3 buckets to another Region in this way, and S3 does not offer 'bucket snapshots' as a feature."
    },
    {
      id: "paper-22-010",
      domain: "ACM",
      topic: "budgets",
      type: "single",
      question: "Which AWS Cloud service can send alerts to customers if custom spending thresholds are exceeded?",
      options: [
        "AWS Budgets",
        "AWS Cost Explorer",
        "AWS Cost Allocation Tags",
        "AWS Organizations"
      ],
      correctAnswer: [0],
      explanation: "AWS Budgets lets customers set custom cost and usage thresholds and sends alerts when those thresholds are exceeded or forecasted to be exceeded. Cost Explorer visualizes historical and forecasted spend but doesn't send threshold alerts, Cost Allocation Tags are used to categorize costs, and AWS Organizations manages multiple accounts rather than sending spending alerts."
    },
    {
      id: "paper-22-011",
      domain: "SEC",
      topic: "penetration-testing",
      type: "single",
      question: "What is the recommended method to request penetration testing on AWS resources?",
      options: [
        "Open a support case",
        "Fill out the Penetration Testing Request Form",
        "Request a penetration test from your technical account manager",
        "Contact your AWS sales representative"
      ],
      correctAnswer: [1],
      explanation: "AWS requires customers to submit the Penetration Testing Request Form (or use the self-service tool in the AWS console) before conducting penetration tests against permitted services. Opening a support case, contacting a technical account manager, or contacting a sales representative are not the designated process for requesting authorization to test."
    },
    {
      id: "paper-22-012",
      domain: "SEC",
      topic: "macie",
      type: "single",
      question: "A user needs to automatically discover, classify, and protect sensitive data stored in Amazon S3. Which AWS service can meet these requirements?",
      options: [
        "Amazon Inspector",
        "Amazon Macie",
        "Amazon GuardDuty",
        "AWS Secrets Manager"
      ],
      correctAnswer: [1],
      explanation: "Amazon Macie uses machine learning to automatically discover, classify, and protect sensitive data such as PII stored in Amazon S3. Amazon Inspector scans EC2 and container workloads for vulnerabilities, Amazon GuardDuty detects threats and malicious activity, and AWS Secrets Manager stores and rotates credentials, none of which classify data in S3."
    },
    {
      id: "paper-22-013",
      domain: "VPC",
      topic: "vpn",
      type: "multiple-select",
      question: "Which components are required to build a successful site-to-site VPN connection on AWS? (Choose two.)",
      options: [
        "Internet gateway",
        "NAT gateway",
        "Customer gateway",
        "Transit gateway",
        "Virtual private gateway"
      ],
      correctAnswer: [2, 4],
      explanation: "A Site-to-Site VPN requires a Customer Gateway, representing the customer's on-premises VPN device or endpoint, and a Virtual Private Gateway, the AWS-side VPN concentrator attached to the VPC. An Internet Gateway provides internet access rather than VPN connectivity, a NAT gateway allows outbound internet access for private subnets, and a Transit Gateway is used to connect multiple VPCs and networks, not a required component of a single site-to-site VPN."
    },
    {
      id: "paper-22-014",
      domain: "ACM",
      topic: "pricing-models",
      type: "single",
      question: "Which Amazon EC2 pricing option is best suited for applications with short-term, spiky, or unpredictable workloads that cannot be interrupted?",
      options: [
        "Spot Instances",
        "Dedicated Hosts",
        "On-Demand Instances",
        "Reserved Instances"
      ],
      correctAnswer: [2],
      explanation: "On-Demand Instances are ideal for short-term, spiky, or unpredictable workloads that cannot be interrupted, since you pay only for what you use with no long-term commitment and no risk of interruption. Spot Instances can be reclaimed by AWS at any time (unsuitable for uninterruptible workloads), and Dedicated Hosts and Reserved Instances are meant for steady, predictable, long-term usage rather than short spiky workloads."
    },
    {
      id: "paper-22-015",
      domain: "ARC",
      topic: "decoupling",
      type: "single",
      question: "Which AWS cloud architecture principle states that systems should reduce interdependencies?",
      options: [
        "Scalability",
        "Services, not servers",
        "Removing single points of failure",
        "Loose coupling"
      ],
      correctAnswer: [3],
      explanation: "Loose coupling is the architecture principle stating that components should be designed with minimal interdependencies so that a failure or change in one component doesn't cascade into others. Scalability refers to handling growth, 'services, not servers' is about using managed services, and removing single points of failure is a related but distinct reliability principle, not specifically about reducing interdependencies."
    },
    {
      id: "paper-22-016",
      domain: "SEC",
      topic: "security-bulletins",
      type: "single",
      question: "What is the MOST effective resource for staying up to date on AWS security announcements?",
      options: [
        "AWS Personal Health Dashboard",
        "AWS Secrets Manager",
        "AWS Security Bulletins",
        "Amazon Inspector"
      ],
      correctAnswer: [2],
      explanation: "AWS Security Bulletins is the dedicated feed where AWS publishes security and vulnerability announcements, making it the most effective resource for staying current on security news. The AWS Personal Health Dashboard reports on account-specific operational events, Secrets Manager stores credentials, and Amazon Inspector scans for vulnerabilities but doesn't publish general security announcements."
    },
    {
      id: "paper-22-017",
      domain: "STG",
      topic: "ebs",
      type: "single",
      question: "Which AWS service offers persistent storage for a file system?",
      options: [
        "Amazon S3",
        "Amazon EC2 instance store",
        "Amazon Elastic Block Store (Amazon EBS)",
        "Amazon ElastiCache"
      ],
      correctAnswer: [2],
      explanation: "Amazon Elastic Block Store (EBS) is persistent, durable block storage that remains intact independent of the EC2 instance lifecycle, making it suitable for a persistent file system. Amazon S3 is object storage rather than a traditional file system, the EC2 instance store is ephemeral and loses data when the instance stops or terminates, and ElastiCache is an in-memory cache, not persistent storage."
    },
    {
      id: "paper-22-018",
      domain: "ACM",
      topic: "cost-management",
      type: "single",
      question: "Which of the following allows AWS users to manage cost allocations for billing?",
      options: [
        "Tagging resources",
        "Limiting who can create resources",
        "Adding a secondary payment method",
        "Running all operations on a single AWS account"
      ],
      correctAnswer: [0],
      explanation: "Tagging resources with metadata (like cost center or department) allows those costs to be tracked and allocated on the bill through Cost Allocation Tags, which is the standard mechanism for managing cost allocation. Limiting who can create resources is an access-control measure, adding a secondary payment method addresses payment processing, and running everything on a single account actually makes cost allocation harder, not easier."
    },
    {
      id: "paper-22-019",
      domain: "SEC",
      topic: "artifact",
      type: "single",
      question: "Which AWS service allows users to download security and compliance reports about the AWS infrastructure on demand?",
      options: [
        "Amazon GuardDuty",
        "AWS Security Hub",
        "AWS Artifact",
        "AWS Shield"
      ],
      correctAnswer: [2],
      explanation: "AWS Artifact provides self-service, on-demand downloads of AWS's security and compliance reports, such as SOC and ISO reports. Amazon GuardDuty detects threats, AWS Security Hub aggregates security findings, and AWS Shield provides DDoS protection, none of which serve as a repository for compliance documentation."
    },
    {
      id: "paper-22-020",
      domain: "CMP",
      topic: "serverless",
      type: "multiple-select",
      question: "Which of the following AWS services are serverless? (Choose two.)",
      options: [
        "AWS Lambda",
        "Amazon Elasticsearch Service",
        "AWS Elastic Beanstalk",
        "Amazon DynamoDB",
        "Amazon Redshift"
      ],
      correctAnswer: [0, 3],
      explanation: "AWS Lambda is a serverless compute service where AWS manages all underlying servers and you pay only per invocation, and Amazon DynamoDB is a serverless NoSQL database that scales automatically without provisioned servers. Amazon Elasticsearch Service, Elastic Beanstalk, and Amazon Redshift all require you to provision and manage underlying instances or clusters, so they are not serverless."
    },
    {
      id: "paper-22-021",
      domain: "VPC",
      topic: "direct-connect",
      type: "multiple-select",
      question: "Which AWS managed services can be used to extend an on-premises data center to the AWS network? (Choose two.)",
      options: [
        "AWS VPN",
        "NAT gateway",
        "AWS Direct Connect",
        "Amazon Connect",
        "Amazon Route 53"
      ],
      correctAnswer: [0, 2],
      explanation: "AWS VPN and AWS Direct Connect are both managed services that extend an on-premises data center into the AWS network, with AWS VPN providing an encrypted connection over the public internet and Direct Connect providing a dedicated private network link. A NAT gateway only allows outbound internet access for private subnets, Amazon Connect is a cloud contact center service, and Route 53 is a DNS service, none of which link on-premises networks to AWS."
    },
    {
      id: "paper-22-022",
      domain: "ACM",
      topic: "organizations",
      type: "single",
      question: "Which requirement must be met for a member account to be unlinked from an AWS Organizations account?",
      options: [
        "The linked account must be actively compliant with AWS System and Organization Controls (SOC).",
        "The payer and the linked account must both create AWS Support cases to request that the member account be unlinked from the organization.",
        "The member account must meet the requirements of a standalone account.",
        "The payer account must be used to remove the linked account from the organization."
      ],
      correctAnswer: [2],
      explanation: "To be removed from an AWS Organizations account, a member account must first meet the requirements to operate as a standalone account, such as having its own valid payment method and contact information. SOC compliance is unrelated to unlinking accounts, support cases aren't the mechanism for unlinking, and while the payer account initiates the removal, the member account must first be capable of standing alone."
    },
    {
      id: "paper-22-023",
      domain: "CLD",
      topic: "scaling",
      type: "single",
      question: "What AWS benefit refers to a customer’s ability to deploy applications that scale up and down the meet variable demand?",
      options: [
        "Elasticity",
        "Agility",
        "Security",
        "Scalability"
      ],
      correctAnswer: [3],
      explanation: "Scalability refers to a customer's ability to increase or decrease resource capacity as needed to meet demand, which describes deploying applications that scale up and down. Elasticity is the closely related concept of automatically adjusting resources in near real-time (though the option asked for is labeled scalability here), agility refers to speed of provisioning, and security is unrelated to handling variable demand."
    },
    {
      id: "paper-22-024",
      domain: "SEC",
      topic: "artifact",
      type: "single",
      question: "During a compliance review, one of the auditors requires a copy of the AWS SOC 2 report. Which service should be used to submit this request?",
      options: [
        "AWS Personal Health Dashboard",
        "AWS Trusted Advisor",
        "AWS Artifact",
        "Amazon S3"
      ],
      correctAnswer: [2],
      explanation: "AWS Artifact is the self-service portal for downloading AWS compliance reports, including the SOC 2 report requested by an auditor. The AWS Personal Health Dashboard reports on service health events, Trusted Advisor gives best-practice recommendations, and Amazon S3 is general object storage, none of which provide compliance report downloads."
    },
    {
      id: "paper-22-025",
      domain: "GLB",
      topic: "multi-region",
      type: "multiple-select",
      question: "A company wants to set up a highly available workload in AWS with a disaster recovery plan that will allow the company to recover in case of a regional service interruption. Which configuration will meet these requirements?",
      options: [
        "Run on two Availability Zones in one AWS Region, using the additional Availability Zones in the AWS Region for the disaster recovery site.",
        "Run on two Availability Zones in one AWS Region, using another AWS Region for the disaster recovery site.",
        "Run on two Availability Zones in one AWS Region, using a local AWS Region for the disaster recovery site.",
        "Run across two AWS Regions, using a third AWS Region for the disaster recovery site."
      ],
      correctAnswer: [1, 3],
      explanation: "Running a workload across two Availability Zones in one Region with a disaster recovery site in another Region protects against a full Region failure while maintaining high availability day-to-day, and running across two Regions with a third Region as the DR site provides even greater resilience by ensuring recovery capacity is available even if a primary Region is unavailable. Using only Availability Zones within the same Region for DR does not protect against a full Regional outage."
    },
    {
      id: "paper-22-026",
      domain: "S3",
      topic: "snowball",
      type: "single",
      question: "A company has a 500 TB image repository that needs to be transported to AWS for processing. Which AWS service can import this data MOST cost-effectively?",
      options: [
        "AWS Snowball",
        "AWS Direct Connect",
        "AWS VPN",
        "Amazon S3"
      ],
      correctAnswer: [0],
      explanation: "AWS Snowball is a physical data transport device designed to cost-effectively move very large datasets (terabytes to petabytes), like a 500 TB image repository, into AWS without relying on network transfer. Direct Connect and VPN are network-based connections that would be slow and costly for that much data over time, and Amazon S3 is the destination for the data, not an import mechanism itself."
    },
    {
      id: "paper-22-027",
      domain: "DBA",
      topic: "rds",
      type: "single",
      question: "Which AWS service can run a managed PostgreSQL database that provides online transaction processing (OLTP)?",
      options: [
        "Amazon DynamoDB",
        "Amazon Athena",
        "Amazon RDS",
        "Amazon EMR"
      ],
      correctAnswer: [2],
      explanation: "Amazon RDS supports managed relational database engines, including PostgreSQL, and is optimized for online transaction processing (OLTP) workloads. Amazon DynamoDB is a NoSQL database, Amazon Athena is a serverless query service for data in S3, and Amazon EMR is a big-data processing framework, none of which run a managed PostgreSQL OLTP database."
    },
    {
      id: "paper-22-028",
      domain: "ACM",
      topic: "cost-management",
      type: "multiple-select",
      question: "Which of the following assist in identifying costs by department? (Choose two.)",
      options: [
        "Using tags on resources",
        "Using multiple AWS accounts",
        "Using an account manager",
        "Using AWS Trusted Advisor",
        "Using Consolidated Billing"
      ],
      correctAnswer: [0, 1],
      explanation: "Tagging resources lets you label spend by department or project on your bill, and using multiple AWS accounts (one per department) naturally separates costs by account, both of which help identify costs by department. Using an account manager and Trusted Advisor don't provide cost-by-department breakdowns, and Consolidated Billing combines accounts under one payer for a single bill rather than separating costs by department (though it can be combined with tagging or multiple accounts to do so)."
    },
    {
      id: "paper-22-029",
      domain: "IAM",
      topic: "iam",
      type: "single",
      question: "A company wants to allow full access to an Amazon S3 bucket for a particular user. Which element in the S3 bucket policy holds the user details that describe who needs access to the S3 bucket?",
      options: [
        "Principal",
        "Action",
        "Resource",
        "Statement"
      ],
      correctAnswer: [0],
      explanation: "The Principal element in an S3 bucket policy specifies who (which user, account, or role) is being granted or denied access, so it holds the user details describing who needs access. The Action element specifies what operations are allowed, the Resource element specifies which bucket or objects the policy applies to, and Statement is simply the container that holds the individual policy elements."
    },
    {
      id: "paper-22-030",
      domain: "ACM",
      topic: "organizations",
      type: "single",
      question: "Which AWS service allows for effective cost management of multiple AWS accounts?",
      options: [
        "AWS Organizations",
        "AWS Trusted Advisor",
        "AWS Direct Connect",
        "Amazon Connect"
      ],
      correctAnswer: [0],
      explanation: "AWS Organizations enables centralized management of multiple AWS accounts, including consolidated billing and volume discounts, making it the tool for effective cost management across accounts. Trusted Advisor gives best-practice recommendations for a single account, Direct Connect is a network connectivity service, and Amazon Connect is a cloud contact center service, none of which manage costs across multiple accounts."
    },
    {
      id: "paper-22-031",
      domain: "ACM",
      topic: "pricing-models",
      type: "single",
      question: "A company is piloting a new customer-facing application on Amazon Elastic Compute Cloud (Amazon EC2) for one month. What pricing model is appropriate?",
      options: [
        "Reserved Instances",
        "Spot Instances",
        "On-Demand Instances",
        "Dedicated Hosts"
      ],
      correctAnswer: [2],
      explanation: "On-Demand Instances are appropriate for a short-term, one-month pilot because they require no long-term commitment and you pay only for what you use. Reserved Instances require a 1- or 3-year commitment (poor fit for a one-month pilot), Spot Instances risk interruption which is undesirable for a customer-facing application, and Dedicated Hosts are costly and meant for licensing or compliance needs, not short pilots."
    },
    {
      id: "paper-22-032",
      domain: "ACM",
      topic: "cost-explorer",
      type: "single",
      question: "Which AWS tools automatically forecast future AWS costs?",
      options: [
        "AWS Support Center",
        "AWS Total Cost of Ownership (TCO) Calculator",
        "AWS Simple Monthly Calculator",
        "Cost Explorer"
      ],
      correctAnswer: [3],
      explanation: "AWS Cost Explorer includes a forecasting feature that automatically predicts future AWS costs based on historical usage patterns. AWS Support Center provides case management (not forecasting), the TCO Calculator compares on-premises versus AWS costs for a proposed migration, and the Simple Monthly Calculator estimates costs for a hypothetical architecture rather than forecasting actual future spend automatically."
    },
    {
      id: "paper-22-033",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "Under the AWS shared responsibility model, which of the following is a responsibility of AWS?",
      options: [
        "Enabling server-side encryption for objects stored in S3",
        "Applying AWS IAM security policies",
        "Patching the operating system on an Amazon EC2 instance",
        "Applying updates to the hypervisor"
      ],
      correctAnswer: [3],
      explanation: "Under the AWS Shared Responsibility Model, AWS is responsible for maintaining and applying updates to the virtualization layer, including the hypervisor, since that is part of the underlying infrastructure AWS manages. Enabling server-side encryption, applying IAM policies, and patching the guest operating system on EC2 are all customer responsibilities, since they involve configuration within the customer's own resources."
    },
    {
      id: "paper-22-034",
      domain: "ACM",
      topic: "organizations",
      type: "single",
      question: "A user is able to set up a master payer account to view consolidated billing reports through:",
      options: [
        "AWS Budgets.",
        "Amazon Macie.",
        "Amazon QuickSight.",
        "AWS Organizations."
      ],
      correctAnswer: [3],
      explanation: "AWS Organizations lets a master (management) payer account view consolidated billing reports across all linked member accounts. AWS Budgets sets spending alerts rather than providing consolidated views, Amazon Macie classifies sensitive data, and Amazon QuickSight is a business intelligence visualization tool, none of which are the mechanism for setting up consolidated billing."
    },
    {
      id: "paper-22-035",
      domain: "ARC",
      topic: "well-architected",
      type: "single",
      question: "Performing operations as code is a design principle that supports which pillar of the AWS Well-Architected Framework?",
      options: [
        "Performance efficiency",
        "Operational excellence",
        "Reliability",
        "Security"
      ],
      correctAnswer: [1],
      explanation: "Performing operations as code — automating operational procedures through scripts and templates — is a core design principle of the Operational Excellence pillar of the AWS Well-Architected Framework. Performance efficiency focuses on using resources efficiently, Reliability focuses on recovery and availability, and Security focuses on protecting data and systems, none of which specifically define 'operations as code.'"
    },
    {
      id: "paper-22-036",
      domain: "ARC",
      topic: "well-architected",
      type: "single",
      question: "Which design principle is achieved by following the reliability pillar of the AWS Well-Architected Framework?",
      options: [
        "Vertical scaling",
        "Manual failure recovery",
        "Testing recovery procedures",
        "Changing infrastructure manually"
      ],
      correctAnswer: [2],
      explanation: "Testing recovery procedures is a design principle of the Reliability pillar of the AWS Well-Architected Framework, ensuring that failure recovery processes actually work before they're needed in a real incident. Vertical scaling relates to performance efficiency, and manually recovering from failure or manually changing infrastructure are the opposite of what the reliability pillar recommends, which favors automation."
    },
    {
      id: "paper-22-037",
      domain: "ACM",
      topic: "reserved-instances",
      type: "single",
      question: "What is a characteristic of Convertible Reserved Instances (RIs)?",
      options: [
        "Users can exchange Convertible RIs for other Convertible RIs from a different instance family with an equal or higher value than the Convertible Reserved Instances that you are exchanging.",
        "Users can exchange Convertible RIs for other Convertible RIs in different AWS Regions.",
        "Users can sell and buy Convertible RIs on the AWS Marketplace.",
        "Users can shorten the term of their Convertible RIs by merging them with other Convertible RIs."
      ],
      correctAnswer: [0],
      explanation: "Convertible Reserved Instances can be exchanged for other Convertible RIs of a different instance family, as long as the new RI's value is equal to or greater than the one being exchanged. They cannot be exchanged across different AWS Regions, cannot be bought or sold on the Reserved Instance Marketplace (only Standard RIs can), and exchanging RIs does not let you shorten or merge terms."
    },
    {
      id: "paper-22-038",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "The user is fully responsible for which action when running workloads on AWS?",
      options: [
        "Patching the infrastructure components",
        "Implementing controls to route application traffic",
        "Maintaining physical and environmental controls",
        "Maintaining the underlying infrastructure components"
      ],
      correctAnswer: [1],
      explanation: "Under the Shared Responsibility Model, the customer is fully responsible for configuring their own network and security controls, such as implementing controls to route application traffic (e.g., route tables, security groups). Patching infrastructure components, maintaining physical/environmental controls, and maintaining underlying infrastructure are all responsibilities of AWS, not the customer."
    },
    {
      id: "paper-22-039",
      domain: "ACM",
      topic: "pricing-models",
      type: "single",
      question: "An architecture design includes Amazon EC2, an Elastic Load Balancer, and Amazon RDS. What is the BEST way to get a monthly cost estimation for this architecture?",
      options: [
        "Open an AWS Support case, provide the architecture proposal, and ask for a monthly cost estimation.",
        "Collect the published prices of the AWS services and calculate the monthly estimate.",
        "Use the AWS Simple Monthly Calculator to estimate the monthly cost.",
        "Use the AWS Total Cost of Ownership (TCO) Calculator to estimate the monthly cost."
      ],
      correctAnswer: [2],
      explanation: "The AWS Simple Monthly Calculator (Pricing Calculator) is designed specifically to let users input a proposed architecture and receive a monthly cost estimate. Opening a support case is not how estimates are generated, manually collecting published prices is inefficient and error-prone compared to using the calculator, and the TCO Calculator compares AWS costs against on-premises costs, which isn't what's being asked for here."
    },
    {
      id: "paper-22-040",
      domain: "DBA",
      topic: "rds",
      type: "multiple-select",
      question: "Which are benefits of using Amazon RDS over Amazon EC2 when running relational databases on AWS? (Choose two.)",
      options: [
        "Automated backups",
        "Schema management",
        "Indexing of tables",
        "Software patching",
        "Extract, transform, and load (ETL) management"
      ],
      correctAnswer: [0, 3],
      explanation: "Amazon RDS provides automated backups and automated software patching for the underlying database engine, both operational burdens that you would otherwise have to manage yourself on EC2. Schema management, table indexing, and ETL management are database design and data-pipeline tasks that remain the responsibility of the user or require separate tools like AWS Glue, regardless of whether you use RDS or EC2."
    },
    {
      id: "paper-22-041",
      domain: "S3",
      topic: "storage-classes",
      type: "single",
      question: "What does the Amazon S3 Intelligent-Tiering storage class offer?",
      options: [
        "Payment flexibility by reserving storage capacity",
        "Long-term retention of data by copying the data to an encrypted Amazon Elastic Block Store (Amazon EBS) volume",
        "Automatic cost savings by moving objects between tiers based on access pattern changes",
        "Secure, durable, and lowest cost storage for data archival"
      ],
      correctAnswer: [2],
      explanation: "S3 Intelligent-Tiering automatically moves objects between access tiers based on changing access patterns, delivering automatic cost savings without performance impact or manual intervention. It does not involve payment flexibility through reserved capacity, does not copy data to EBS, and while it optimizes cost, it is not the lowest-cost archival class (that would be S3 Glacier Deep Archive)."
    },
    {
      id: "paper-22-042",
      domain: "DBA",
      topic: "redshift",
      type: "single",
      question: "A company has multiple data sources across the organization and wants to consolidate data into one data warehouse. Which AWS service can be used to meet this requirement?",
      options: [
        "Amazon DynamoDB",
        "Amazon Redshift",
        "Amazon Athena",
        "Amazon QuickSight"
      ],
      correctAnswer: [1],
      explanation: "Amazon Redshift is AWS's fully managed data warehouse service, purpose-built to consolidate and analyze large volumes of data from multiple sources. Amazon DynamoDB is a NoSQL database (not a warehouse), Amazon Athena queries data directly in S3 without a warehouse, and Amazon QuickSight is a visualization tool that would sit on top of a warehouse like Redshift, not serve as the warehouse itself."
    },
    {
      id: "paper-22-043",
      domain: "DEP",
      topic: "aws-config",
      type: "single",
      question: "Which AWS service can be used to track resource changes and establish compliance?",
      options: [
        "Amazon CloudWatch",
        "AWS Config",
        "AWS CloudTrail",
        "AWS Trusted Advisor"
      ],
      correctAnswer: [1],
      explanation: "AWS Config tracks configuration changes to AWS resources over time and evaluates them against defined rules to establish and monitor compliance. Amazon CloudWatch monitors performance metrics and logs, AWS CloudTrail logs API calls (who did what, not configuration state), and Trusted Advisor gives point-in-time best-practice checks rather than continuous compliance tracking."
    },
    {
      id: "paper-22-044",
      domain: "CLD",
      topic: "elasticity",
      type: "single",
      question: "A user has underutilized on-premises resources. Which AWS Cloud concept can BEST address this issue?",
      options: [
        "High availability",
        "Elasticity",
        "Security",
        "Loose coupling"
      ],
      correctAnswer: [1],
      explanation: "Elasticity is the cloud concept that best addresses underutilized resources, since it allows capacity to automatically scale down when demand is low and scale up when demand rises, avoiding the fixed over-provisioning typical of on-premises infrastructure. High availability addresses resilience (not utilization), security addresses protection of data and systems, and loose coupling addresses reducing interdependencies between components."
    },
    {
      id: "paper-22-045",
      domain: "ACM",
      topic: "reserved-instances",
      type: "single",
      question: "A user has a stateful workload that will run on Amazon EC2 for the next 3 years. What is the MOST cost-effective pricing model for this workload?",
      options: [
        "On-Demand Instances",
        "Reserved Instances",
        "Dedicated Instances",
        "Spot Instances"
      ],
      correctAnswer: [1],
      explanation: "Reserved Instances are the most cost-effective option for a stateful workload with a known, steady 3-year duration, since committing to the term provides a significant discount over On-Demand pricing. On-Demand Instances cost more for long-running steady workloads, Dedicated Instances add extra cost for compliance/isolation needs that aren't described here, and Spot Instances can be interrupted, which is unsuitable for a stateful workload."
    },
    {
      id: "paper-22-046",
      domain: "ACM",
      topic: "pricing-models",
      type: "single",
      question: "A cloud practitioner needs an Amazon EC2 instance to launch and run for 7 hours without interruptions. What is the most suitable and cost-effective option for this task?",
      options: [
        "On-Demand Instance",
        "Reserved Instance",
        "Dedicated Host",
        "Spot Instance"
      ],
      correctAnswer: [0],
      explanation: "On-Demand Instances are the most suitable and cost-effective choice for a short, uninterrupted 7-hour run, since they require no long-term commitment and guarantee the instance won't be reclaimed. A Reserved Instance requires a 1- or 3-year commitment (wasteful for 7 hours), a Dedicated Host is costly and meant for licensing/compliance needs, and a Spot Instance can be interrupted at any time, conflicting with the 'without interruptions' requirement."
    },
    {
      id: "paper-22-047",
      domain: "ACM",
      topic: "trusted-advisor",
      type: "multiple-select",
      question: "Which of the following are benefits of using AWS Trusted Advisor? (Choose two.)",
      options: [
        "Providing high-performance container orchestration",
        "Creating and rotating encryption keys",
        "Detecting underutilized resources to save costs",
        "Improving security by proactively monitoring the AWS environment",
        "Implementing enforced tagging across AWS resources"
      ],
      correctAnswer: [2, 3],
      explanation: "AWS Trusted Advisor detects underutilized or idle resources to help reduce costs, and it proactively monitors the AWS environment to improve security, among its five core check categories (cost optimization, performance, security, fault tolerance, and service limits). It does not provide container orchestration, does not create or rotate encryption keys (that's KMS), and does not enforce tagging across resources."
    },
    {
      id: "paper-22-048",
      domain: "IAM",
      topic: "least-privilege",
      type: "multiple-select",
      question: "A developer has been hired by a large company and needs AWS credentials. Which are security best practices that should be followed? (Choose two.)",
      options: [
        "Grant the developer access to only the AWS resources needed to perform the job.",
        "Share the AWS account root user credentials with the developer.",
        "Add the developer to the administrator’s group in AWS IAM.",
        "Configure a password policy that ensures the developer’s password cannot be changed.",
        "Ensure the account password policy requires a minimum length."
      ],
      correctAnswer: [0, 4],
      explanation: "Granting the developer access only to the AWS resources needed for the job follows the principle of least privilege, and enforcing a minimum password length is a standard password-policy security best practice. Sharing root user credentials, adding the developer to a broad administrators group, and preventing password changes are all poor security practices that increase risk rather than reduce it."
    },
    {
      id: "paper-22-049",
      domain: "S3",
      topic: "snowball",
      type: "single",
      question: "Which AWS storage service is designed to transfer petabytes of data in and out of the cloud?",
      options: [
        "AWS Storage Gateway",
        "Amazon S3 Glacier Deep Archive",
        "Amazon Lightsail",
        "AWS Snowball"
      ],
      correctAnswer: [3],
      explanation: "AWS Snowball is purpose-built for transferring very large amounts of data (petabyte-scale) into and out of the AWS Cloud using physical appliances, bypassing slow network transfer. AWS Storage Gateway connects on-premises applications to cloud storage but isn't designed for one-time massive transfers, S3 Glacier Deep Archive is a storage class (not a transfer mechanism), and Amazon Lightsail is a simplified virtual server offering unrelated to data transfer."
    },
    {
      id: "paper-22-050",
      domain: "DBA",
      topic: "redshift",
      type: "single",
      question: "Which service provides a user the ability to warehouse data in the AWS Cloud?",
      options: [
        "Amazon EFS",
        "Amazon Redshift",
        "Amazon RDS",
        "Amazon VPC"
      ],
      correctAnswer: [1],
      explanation: "Amazon Redshift is AWS's data warehousing service, designed to store and analyze large volumes of structured data for business intelligence and reporting. Amazon EFS is a file storage service, Amazon RDS is designed for transactional (OLTP) relational databases rather than analytical warehousing, and Amazon VPC is a networking service, not a data warehouse."
    }
  ]
});
