window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
    source: "paper-24",
    paperId: "paper-24",
    paperName: "Udemy Practice Exam",
    questions: [
        {
            id: "paper-24-001",
            domain: "EC2",
            topic: "session-manager",
            type: "single",
            question: "A company's flagship application runs on a fleet of Amazon Elastic Compute Cloud (Amazon EC2) instances. As per the new policies, the system administrators are looking for the best way to provide secure shell access to Amazon Elastic Compute Cloud (Amazon EC2) instances without opening new ports or using public IP addresses. Which tool/service will help you achieve this requirement?",
            options: [
                "Amazon Inspector",
                "Amazon Route 53",
                "AWS Systems Manager Session Manager",
                "Amazon Elastic Compute Cloud (Amazon EC2) Instance Connect"
            ],
            correctAnswer: [2],
            explanation: "AWS Systems Manager Session Manager provides browser or CLI shell access to EC2 instances with no open inbound ports, no bastion hosts, no SSH keys, and full audit logs for compliance. EC2 Instance Connect still requires port 22 to be open. Amazon Inspector is a security vulnerability assessment tool, not for remote access. Route 53 is a DNS routing service."
        },
        {
            id: "paper-24-002",
            domain: "STG",
            topic: "block-storage",
            type: "multiple-select",
            question: "Which of the following AWS services offer block-level storage? (Select two)",
            options: [
                "Amazon Simple Storage Service (Amazon S3)",
                "Amazon Elastic Container Service (Amazon ECS)",
                "Amazon Elastic Block Store (Amazon EBS)",
                "Amazon Elastic File System (Amazon EFS)",
                "Instance Store"
            ],
            correctAnswer: [2, 4],
            explanation: "Amazon EBS provides high-performance persistent block storage for EC2 instances, while Instance Store provides temporary block storage physically attached to the host server. Amazon EFS is file storage using the NFS protocol. S3 is object storage for unstructured data. ECS is a container management service, not a storage type."
        },
        {
            id: "paper-24-003",
            domain: "ACM",
            topic: "organizations",
            type: "multiple-select",
            question: "Which of the following are the best practices when using AWS Organizations? (Select TWO)",
            options: [
                "Do not use AWS Organizations to automate AWS account creation",
                "Disable AWS CloudTrail on several accounts",
                "Never use tags for billing",
                "Create AWS accounts per department",
                "Restrict account privileges using Service Control Policies (SCP)"
            ],
            correctAnswer: [3, 4],
            explanation: "Creating separate AWS accounts per department provides resource isolation and independent service limits, while Service Control Policies apply permission guardrails across the entire organization. You should use cost-allocation tags for billing analysis, enable CloudTrail on all accounts for audit trails, and AWS Organizations can automate account creation workflows."
        },
        {
            id: "paper-24-004",
            domain: "GLB",
            topic: "route-53",
            type: "single",
            question: "Which AWS Route 53 routing policy would you use to route traffic to multiple resources and also choose how much traffic is routed to each resource?",
            options: [
                "Weighted routing",
                "Simple routing",
                "Latency-based routing",
                "Failover routing"
            ],
            correctAnswer: [0],
            explanation: "Weighted routing assigns relative weights to multiple resources with the same DNS name to control the proportion of traffic each receives, making it ideal for load balancing or testing new application versions. Failover routing provides active-passive high availability. Simple routing returns a single resource. Latency-based routing directs users to the lowest-latency AWS region."
        },
        {
            id: "paper-24-005",
            domain: "EC2",
            topic: "reserved-instances",
            type: "single",
            question: "A startup wants to provision an EC2 instance for the lowest possible cost for a long-term duration but needs to make sure that the instance would never be interrupted. As a Cloud Practitioner, which of the following options would you recommend?",
            options: [
                "EC2 Reserved Instance (RI)",
                "EC2 On-Demand Instance",
                "EC2 Dedicated Host",
                "EC2 Spot Instance"
            ],
            correctAnswer: [0],
            explanation: "EC2 Reserved Instances provide up to 75% cost savings for 1-year or 3-year capacity commitments and cannot be interrupted by AWS, making them perfect for steady-state predictable workloads. Spot instances can be terminated by AWS with two-minute notice. On-Demand instances aren't interrupted but cost significantly more. Dedicated Hosts are for licensing compliance and are more expensive."
        },
        {
            id: "paper-24-006",
            domain: "S3",
            topic: "glacier-deep-archive",
            type: "single",
            question: "A medical device company is looking for a durable and cost-effective way of storing their historic data. Due to compliance requirements, the data must be stored for 10 years. Which AWS Storage solution will you suggest?",
            options: [
                "AWS Storage Gateway",
                "Amazon S3 Glacier Flexible Retrieval",
                "Amazon S3 Glacier Deep Archive",
                "Amazon Elastic File System (Amazon EFS)"
            ],
            correctAnswer: [2],
            explanation: "S3 Glacier Deep Archive is the lowest-cost S3 storage class designed for long-term retention of data accessed once or twice per year with 12-48 hour retrieval times, ideal for 7-10+ year regulatory compliance. Glacier Flexible Retrieval costs more with faster access. AWS Storage Gateway provides hybrid cloud access to on-premises systems, not archival storage. EFS is a file system for active workloads."
        },
        {
            id: "paper-24-007",
            domain: "MON",
            topic: "x-ray",
            type: "single",
            question: "The DevOps team at an e-commerce company is trying to debug performance issues for its serverless application built using a microservices architecture. As a Cloud Practitioner, which AWS service would you recommend addressing this use-case?",
            options: [
                "AWS X-Ray",
                "AWS Trusted Advisor",
                "Amazon Pinpoint",
                "AWS CloudFormation"
            ],
            correctAnswer: [0],
            explanation: "AWS X-Ray analyzes and debugs distributed and serverless applications by tracing requests through microservices to identify root causes of performance bottlenecks, latency spikes, and errors. AWS Trusted Advisor provides automated best-practice recommendations for cost, security, and performance. Amazon Pinpoint is for customer engagement and mobile push notifications. CloudFormation is infrastructure-as-code for provisioning resources."
        },
        {
            id: "paper-24-008",
            domain: "IAM",
            topic: "mfa",
            type: "single",
            question: "A financial services enterprise plans to enable Multi-Factor Authentication (MFA) for its employees. For ease of travel, they prefer not to use any physical devices to implement Multi-Factor Authentication (MFA). Which of the below options is best suited for this use case?",
            options: [
                "Virtual Multi-Factor Authentication (MFA) device",
                "U2F security key",
                "Soft Token Multi-Factor Authentication (MFA) device",
                "Hardware Multi-Factor Authentication (MFA) device"
            ],
            correctAnswer: [0],
            explanation: "Virtual MFA devices are smartphone applications like Google Authenticator or Authy that generate time-based one-time passcodes without requiring any physical hardware to purchase or carry. U2F security keys and Hardware MFA devices are physical devices. Soft Token MFA device is not a real AWS multi-factor authentication option."
        },
        {
            id: "paper-24-009",
            domain: "EC2",
            topic: "cost-optimization",
            type: "multiple-select",
            question: "A company would like to optimize Amazon Elastic Compute Cloud (Amazon EC2) costs. Which of the following actions can help with this task? (Select TWO)",
            options: [
                "Set up Auto Scaling groups to align the number of instances with the demand",
                "Opt for a higher AWS Support plan",
                "Vertically scale the EC2 instances",
                "Purchase Amazon EC2 Reserved instances (RIs)",
                "Build its own servers"
            ],
            correctAnswer: [0, 3],
            explanation: "Auto Scaling groups automatically match EC2 capacity to actual demand fluctuations so you only pay for instances you need, while Reserved Instances provide up to 72% discount for committing to consistent usage patterns over 1 or 3 years. Vertical scaling by upsizing instances is more expensive and has hardware limits. Higher AWS Support plans don't reduce EC2 compute costs. Building your own data center infrastructure costs far more than cloud."
        },
        {
            id: "paper-24-010",
            domain: "ACM",
            topic: "trusted-advisor",
            type: "single",
            question: "Which AWS service can help you analyze your infrastructure to identify unattached or underutilized Amazon EBS Elastic Volumes?",
            options: [
                "AWS Trusted Advisor",
                "Amazon Inspector",
                "Amazon CloudWatch",
                "AWS Config"
            ],
            correctAnswer: [0],
            explanation: "AWS Trusted Advisor includes automated cost-optimization checks that analyze EBS volume configurations across your account and flag volumes that are unattached to any instance or show consistently low activity levels over time. AWS Config tracks resource configuration change history. Amazon CloudWatch monitors operational metrics and events. Amazon Inspector performs security vulnerability assessments of EC2 instances and container images."
        },
        {
            id: "paper-24-011",
            domain: "ACM",
            topic: "aws-partner-network",
            type: "single",
            question: "A multi-national corporation wants to get expert professional advice on migrating to AWS and managing their applications on AWS Cloud. Which of the following entities would you recommend for this engagement?",
            options: [
                "Concierge Support Team",
                "APN Consulting Partner",
                "APN Technology Partner",
                "AWS Trusted Advisor"
            ],
            correctAnswer: [1],
            explanation: "APN Consulting Partners are professional services firms with validated AWS expertise that help organizations design, architect, build, migrate, and manage cloud workloads and applications on AWS infrastructure. APN Technology Partners provide hardware, connectivity, or software products that run on or integrate with AWS. Trusted Advisor is an automated recommendation tool. The Concierge Support Team handles billing inquiries for Enterprise Support plan customers."
        },
        {
            id: "paper-24-012",
            domain: "DBA",
            topic: "rds-read-replica",
            type: "single",
            question: "What is the primary benefit of deploying an Amazon Relational Database Service (Amazon RDS) database in a Read Replica configuration?",
            options: [
                "Read Replica enhances database availability",
                "Read Replica improves database scalability",
                "Read Replica reduces database usage costs",
                "Read Replica protects the database from a regional failure"
            ],
            correctAnswer: [1],
            explanation: "RDS Read Replicas are asynchronously replicated read-only database copies that improve read scalability by distributing query load across multiple instances for read-heavy workloads, providing horizontal scaling. Multi-AZ deployments with synchronous replication enhance availability with automatic failover, not read scalability. Multi-Region configurations protect against regional disasters. Read Replicas add infrastructure cost rather than reducing it."
        },
        {
            id: "paper-24-013",
            domain: "VPC",
            topic: "vpc-peering",
            type: "single",
            question: "An organization maintains a separate Virtual Private Cloud (VPC) for each of its business units. Two units need to privately share data. Which is the most optimal way of privately sharing data between the two VPCs?",
            options: [
                "AWS Direct Connect",
                "AWS Site-to-Site VPN",
                "VPC peering connection",
                "VPC Endpoint"
            ],
            correctAnswer: [2],
            explanation: "VPC peering creates a direct private network connection that routes traffic between two VPCs as if they were on the same network, working across AWS accounts and regions without traversing the public internet. AWS Site-to-Site VPN and AWS Direct Connect link on-premises data centers to AWS cloud, not VPC-to-VPC connectivity. VPC Endpoints provide private connections from a VPC to AWS services like S3 or DynamoDB, not to other VPCs."
        },
        {
            id: "paper-24-014",
            domain: "DEP",
            topic: "codedeploy",
            type: "single",
            question: "Which AWS service can be used to automate code deployment to Amazon Elastic Compute Cloud (Amazon EC2) instances as well as on-premises instances?",
            options: [
                "AWS CloudFormation",
                "AWS CodePipeline",
                "AWS CodeDeploy",
                "AWS CodeCommit"
            ],
            correctAnswer: [2],
            explanation: "AWS CodeDeploy automates application code deployments to any compute platform including EC2 instances, on-premises servers, Lambda functions, and ECS services with rolling updates and automatic rollback capabilities. AWS CodeCommit is a managed Git repository hosting service. CloudFormation provisions infrastructure resources, not application code. AWS CodePipeline orchestrates the CI/CD release pipeline but delegates the actual deployment step to CodeDeploy."
        },
        {
            id: "paper-24-015",
            domain: "ACM",
            topic: "cost-explorer",
            type: "multiple-select",
            question: "An IT company is on a cost-optimization spree and wants to identify all Amazon Elastic Compute Cloud (Amazon EC2) instances that are under-utilized. Which AWS services can be used off-the-shelf to address this use-case without needing any manual configurations? (Select two)",
            options: [
                "AWS Cost Explorer",
                "Amazon CloudWatch",
                "AWS Trusted Advisor",
                "AWS Cost & Usage Report (AWS CUR)",
                "AWS Budgets"
            ],
            correctAnswer: [0, 2],
            explanation: "AWS Trusted Advisor automatically flags low-utilization EC2 instances in its cost-optimization checks without any setup, while AWS Cost Explorer provides built-in rightsizing recommendations that surface underutilized instances based on CloudWatch metrics analysis. Cost & Usage Report provides raw granular billing data requiring manual analysis. CloudWatch and AWS Budgets require you to manually configure alarm thresholds and utilization targets."
        },
        {
            id: "paper-24-016",
            domain: "DBA",
            topic: "rds-multi-az",
            type: "single",
            question: "What is the primary benefit of deploying an Amazon RDS Multi-AZ database with one standby?",
            options: [
                "Amazon RDS Multi-AZ enhances database availability",
                "Amazon RDS Multi-AZ protects the database from a regional failure",
                "Amazon RDS Multi-AZ improves database performance for read-heavy workloads",
                "Amazon RDS Multi-AZ reduces database usage costs"
            ],
            correctAnswer: [0],
            explanation: "RDS Multi-AZ with one standby synchronously replicates the primary database to a standby instance in a different Availability Zone within the same region and automatically fails over during infrastructure failures, enhancing availability and data durability. The standby replica is not accessible for read queries; use Read Replicas for read scaling instead. Multi-Region deployments protect against full regional outages. Multi-AZ configurations increase cost."
        },
        {
            id: "paper-24-017",
            domain: "ACM",
            topic: "cost-allocation-tags",
            type: "single",
            question: "A company would like to separate cost for AWS services by the department for cost allocation. Which of the following is the simplest way to achieve this task?",
            options: [
                "Create different virtual private cloud (VPCs) for different departments",
                "Create different accounts for different departments",
                "Create one account for all departments and share this account",
                "Create tags for each department"
            ],
            correctAnswer: [3],
            explanation: "Cost-allocation tags let you label resources with department identifiers and then filter AWS billing reports to show costs by tag, requiring minimal administrative setup or ongoing maintenance. Creating separate AWS accounts per department complicates access management for employees working across multiple departments. Using a single shared account violates security and isolation best practices. VPCs provide network segmentation but don't automatically separate billing costs."
        },
        {
            id: "paper-24-018",
            domain: "CLD",
            topic: "economies-of-scale",
            type: "single",
            question: "Which benefit of Cloud Computing allows AWS to offer lower pay-as-you-go prices as usage from hundreds of thousands of customers is aggregated in the cloud?",
            options: [
                "Trade capital expense for variable expense",
                "Go global in minutes",
                "Massive economies of scale",
                "Increased speed and agility"
            ],
            correctAnswer: [2],
            explanation: "AWS achieves massive economies of scale by aggregating compute, storage, and network usage from hundreds of thousands of customers worldwide, enabling purchase volume discounts and operational efficiencies that translate into lower pay-as-you-go prices for all customers. Trading capital expense for variable expense, going global in minutes, and increased speed and agility are all genuine AWS cloud benefits but don't directly explain how aggregated usage reduces pricing."
        },
        {
            id: "paper-24-019",
            domain: "CMP",
            topic: "lambda",
            type: "multiple-select",
            question: "An IT company wants to run a log backup process every Monday at 2 AM. The usual runtime of the process is 5 minutes. As a Cloud Practitioner, which AWS services would you recommend to build a serverless solution for this use-case? (Select two)",
            options: [
                "AWS Step Function",
                "Amazon Eventbridge",
                "AWS Lambda",
                "Amazon Elastic Compute Cloud (Amazon EC2)",
                "AWS Systems Manager"
            ],
            correctAnswer: [1, 2],
            explanation: "Amazon EventBridge provides a serverless event bus with scheduling rules that can trigger targets at specific times like every Monday at 2 AM, and AWS Lambda executes code serverlessly with a 15-minute maximum execution time that easily accommodates a 5-minute backup task. EC2 instances require provisioning and managing servers. AWS Step Functions orchestrates multi-step workflows but doesn't provide native time-based scheduling triggers. Systems Manager can run maintenance tasks but isn't the simplest serverless solution."
        },
        {
            id: "paper-24-020",
            domain: "DEP",
            topic: "cloudformation",
            type: "single",
            question: "A Cloud Practitioner would like to deploy identical resources across all AWS regions and accounts using templates while estimating costs. Which AWS service can assist with this task?",
            options: [
                "AWS CloudFormation",
                "AWS Directory Service for Microsoft Active Directory (AWS Managed Microsoft AD)",
                "Amazon LightSail",
                "AWS CodeDeploy"
            ],
            correctAnswer: [0],
            explanation: "AWS CloudFormation uses JSON or YAML templates to model and provision collections of related AWS resources consistently and predictably, deploying identical infrastructure stacks across multiple regions and accounts with built-in cost estimation capabilities before actual deployment. AWS Managed Microsoft AD is a directory service for Active Directory workloads. Amazon Lightsail is a simplified virtual private server platform. CodeDeploy automates application code deployments to compute instances, not infrastructure resource provisioning."
        },
        {
            id: "paper-24-021",
            domain: "CMP",
            topic: "fargate",
            type: "single",
            question: "Which of the following is a container service of AWS?",
            options: [
                "Amazon SageMaker",
                "AWS Elastic Beanstalk",
                "Amazon Simple Notification Service (Amazon SNS)",
                "AWS Fargate"
            ],
            correctAnswer: [3],
            explanation: "AWS Fargate is a serverless compute engine for containers that works with Amazon ECS and Amazon EKS orchestrators, eliminating the need to provision, configure, or scale clusters of EC2 instances to run containers. AWS Elastic Beanstalk is a PaaS that provisions underlying EC2 servers for web applications. Amazon SNS is a pub/sub messaging and mobile push notification service. Amazon SageMaker is a machine learning platform for building, training, and deploying ML models."
        },
        {
            id: "paper-24-022",
            domain: "CMP",
            topic: "elastic-beanstalk",
            type: "single",
            question: "Which of the following statements is the MOST accurate when describing AWS Elastic Beanstalk?",
            options: [
                "It is a Platform as a Service (PaaS) that allows you to model and provision resources needed for an application",
                "It is a Platform as a Service (PaaS) that allows you to deploy and scale web applications and services",
                "It is an Infrastructure as a Service (IaaS) that allows you to deploy and scale web applications and services",
                "It is an Infrastructure as Code (IaC) that allows you to model and provision resources needed for an application"
            ],
            correctAnswer: [1],
            explanation: "AWS Elastic Beanstalk is a Platform-as-a-Service where developers upload application code and Beanstalk automatically handles infrastructure provisioning, load balancing, auto-scaling, health monitoring, and patching while developers retain control over just the application logic and data tier. Modeling and provisioning infrastructure resources with templates describes AWS CloudFormation, which is Infrastructure-as-Code. Beanstalk is not IaaS because developers don't directly manage operating systems, runtimes, or middleware layers."
        },
        {
            id: "paper-24-023",
            domain: "DBA",
            topic: "dynamodb",
            type: "single",
            question: "Which AWS service would you choose for a data processing project that needs a schemaless database?",
            options: [
                "Amazon Relational Database Service (Amazon RDS)",
                "Amazon Aurora",
                "Amazon DynamoDB",
                "Amazon RedShift"
            ],
            correctAnswer: [2],
            explanation: "DynamoDB is a schemaless NoSQL database ideal for key-value and document data like JSON, delivering single-digit-millisecond performance without requiring a predefined schema. In contrast, Amazon RDS, Aurora, and Redshift are all relational databases that require a well-defined schema, making them unsuitable for schemaless data processing projects."
        },
        {
            id: "paper-24-024",
            domain: "SEC",
            topic: "shared-responsibility",
            type: "multiple-select",
            question: "Which of the following are correct statements regarding the AWS Shared Responsibility Model? (Select two)",
            options: [
                "For a service like Amazon EC2, that falls under Infrastructure as a Service (IaaS), AWS is responsible for maintaining guest operating system",
                "Configuration Management is the responsibility of the customer",
                "AWS is responsible for Security 'of' the Cloud",
                "For abstracted services like Amazon S3, AWS operates the infrastructure layer, the operating system, and platforms",
                "AWS is responsible for training AWS and customer employees on AWS products and services"
            ],
            correctAnswer: [2, 3],
            explanation: "AWS is responsible for security of the cloud, meaning it secures all underlying infrastructure, and for abstracted services like S3 and DynamoDB, AWS also operates the infrastructure layer, OS, and platforms. For IaaS services like EC2, customers must maintain the guest OS (not AWS), and configuration management is the customer's responsibility, while AWS does not train customer employees."
        },
        {
            id: "paper-24-025",
            domain: "SEC",
            topic: "guardduty",
            type: "single",
            question: "What is the primary use case for Amazon GuardDuty?",
            options: [
                "Protecting web applications from common exploits and vulnerabilities such as SQL injection",
                "Detecting malicious activity and threats in your AWS accounts and workloads",
                "Encrypting data in transit between AWS services using TLS certificates.",
                "Enforcing secure communication between VPCs using network traffic filtering"
            ],
            correctAnswer: [1],
            explanation: "Amazon GuardDuty is a managed threat-detection service that analyzes CloudTrail events, VPC Flow Logs, and DNS logs to detect malicious activity and threats in your AWS accounts and workloads. AWS WAF protects web apps from exploits like SQL injection, ACM and KMS handle encryption in transit and at rest, and Network Firewall or Security Groups enforce VPC traffic filtering."
        },
        {
            id: "paper-24-026",
            domain: "CLD",
            topic: "cloud-benefits",
            type: "multiple-select",
            question: "Which of the following are the advantages of using the AWS Cloud? (Select TWO)",
            options: [
                "AWS is responsible for security in the cloud",
                "Stop guessing about capacity",
                "Limited scaling",
                "Increase speed and agility",
                "Trade operational expense for capital expense"
            ],
            correctAnswer: [1, 3],
            explanation: "The AWS Cloud allows you to stop guessing about capacity needs by provisioning resources on demand, and increases speed and agility by enabling rapid deployment and experimentation. Scaling is virtually unlimited (not limited), AWS is responsible for security of the cloud (not in it), and the cloud model trades capital expense for operational expense, not the other way around."
        },
        {
            id: "paper-24-027",
            domain: "ACM",
            topic: "acceptable-use-policy",
            type: "single",
            question: "Which policy describes prohibited uses of the web services offered by Amazon Web Services?",
            options: [
                "AWS Acceptable Use Policy",
                "AWS Trusted Advisor",
                "AWS Fair Use Policy",
                "AWS Applicable Use Policy"
            ],
            correctAnswer: [0],
            explanation: "The AWS Acceptable Use Policy describes prohibited uses of AWS web services and the AWS site, outlining what activities are not permitted. AWS Trusted Advisor is a best-practice recommendation tool, not a policy document. The AWS Fair Use Policy and AWS Applicable Use Policy do not exist and are made-up distractors."
        },
        {
            id: "paper-24-028",
            domain: "SEC",
            topic: "penetration-testing",
            type: "single",
            question: "A cyber-security agency uses AWS Cloud and wants to carry out security assessments on its own AWS infrastructure without any prior approval from AWS. Which of the following describes/facilitates this practice?",
            options: [
                "Amazon Inspector",
                "AWS Secrets Manager",
                "Penetration Testing",
                "Network Stress Testing"
            ],
            correctAnswer: [2],
            explanation: "Penetration testing is permitted on your own AWS infrastructure for most services without requiring prior AWS approval, allowing you to carry out security assessments. Network stress testing involves sending high volumes of traffic and requires approval, Amazon Inspector automates vulnerability assessments, and AWS Secrets Manager stores and rotates credentials."
        },
        {
            id: "paper-24-029",
            domain: "GLB",
            topic: "local-zones",
            type: "single",
            question: "A gaming company is looking at a technology/service that can deliver a consistent low-latency gameplay to ensure a great user experience for end-users in various locations. Which AWS technology/service will provide the necessary low-latency access to the end-users?",
            options: [
                "AWS Edge Locations",
                "AWS Local Zones",
                "AWS Direct Connect",
                "AWS Wavelength"
            ],
            correctAnswer: [1],
            explanation: "AWS Local Zones place compute and storage resources closer to end-users in specific geographic locations, providing single-digit-millisecond latency for applications like gaming that require consistent low latency. Edge Locations cache CloudFront content but do not run compute, AWS Wavelength targets 5G mobile edge use cases, and AWS Direct Connect links on-premises networks to AWS and is unnecessary here."
        },
        {
            id: "paper-24-030",
            domain: "ARC",
            topic: "well-architected",
            type: "single",
            question: "Which pillar of the AWS Well-Architected Framework recommends maintaining infrastructure as code (IaC)?",
            options: [
                "Operational Excellence",
                "Performance Efficiency",
                "Cost Optimization",
                "Security"
            ],
            correctAnswer: [0],
            explanation: "The Operational Excellence pillar of the AWS Well-Architected Framework recommends maintaining infrastructure as code, covering how to run and monitor systems and continuously improve processes. Cost Optimization focuses on avoiding waste, Performance Efficiency on using resources efficiently, and Security on protecting information and systems, but none of these emphasize infrastructure as code."
        },
        {
            id: "paper-24-031",
            domain: "ACM",
            topic: "free-services",
            type: "multiple-select",
            question: "Which of the following AWS services are always free to use (Select two)?",
            options: [
                "Amazon Simple Storage Service (Amazon S3)",
                "Amazon DynamoDB",
                "Amazon Elastic Compute Cloud (Amazon EC2)",
                "AWS Auto Scaling",
                "AWS Identity and Access Management (AWS IAM)"
            ],
            correctAnswer: [3, 4],
            explanation: "AWS IAM and AWS Auto Scaling are always free to use, with no additional charges beyond the underlying resources they manage (such as the EC2 instances Auto Scaling launches). Amazon S3 charges for storage and requests, Amazon DynamoDB charges for read/write capacity and storage, and Amazon EC2 charges for compute time, so none of these three services are free."
        },
        {
            id: "paper-24-032",
            domain: "MON",
            topic: "health-dashboard",
            type: "single",
            question: "Which AWS service can be used to subscribe to an RSS feed to be notified of the status of all AWS service interruptions?",
            options: [
                "Amazon Simple Notification Service (Amazon SNS)",
                "AWS Health Dashboard - Service Health",
                "AWS Health Dashboard - Your Account Health",
                "AWS Lambda"
            ],
            correctAnswer: [1],
            explanation: "The AWS Health Dashboard - Service Health displays the overall status of all AWS services and provides an RSS feed you can subscribe to for notifications of service interruptions. AWS Health Dashboard - Your Account Health shows personalized alerts for your specific account, Amazon SNS delivers notifications but does not provide service status feeds, and AWS Lambda executes code."
        },
        {
            id: "paper-24-033",
            domain: "ACM",
            topic: "organizations",
            type: "multiple-select",
            question: "AWS Organizations provides which of the following benefits? (Select two)",
            options: [
                "Volume discounts for Amazon EC2 and Amazon S3 aggregated across the member AWS accounts",
                "Deploy patches on Amazon EC2 instances across the member AWS accounts",
                "Provision Amazon EC2 Spot instances across the member AWS accounts",
                "Share the reserved Amazon EC2 instances amongst the member AWS accounts",
                "Check vulnerabilities on Amazon EC2 instances across the member AWS accounts"
            ],
            correctAnswer: [0, 3],
            explanation: "AWS Organizations provides consolidated billing that aggregates usage across member accounts to unlock volume discounts for services like EC2 and S3, and allows you to share reserved EC2 instances among member accounts. Organizations does not deploy patches, provision Spot instances, or check for vulnerabilities on EC2 instances across accounts, as those require other AWS services."
        },
        {
            id: "paper-24-034",
            domain: "CMP",
            topic: "serverless",
            type: "multiple-select",
            question: "Which of the following are the serverless computing services offered by AWS? (Select two)",
            options: [
                "AWS Fargate",
                "AWS Elastic Beanstalk",
                "Amazon Lightsail",
                "Amazon Elastic Compute Cloud (Amazon EC2)",
                "AWS Lambda"
            ],
            correctAnswer: [0, 4],
            explanation: "AWS Lambda runs code without provisioning or managing servers (true serverless), and AWS Fargate is a serverless compute engine for running containers without managing the underlying infrastructure. AWS Elastic Beanstalk provisions servers behind the scenes, Amazon EC2 is server-based compute, and Amazon Lightsail is a managed virtual private server, so none of these three are serverless."
        },
        {
            id: "paper-24-035",
            domain: "IAM",
            topic: "mfa",
            type: "single",
            question: "Which of the following AWS authentication mechanisms supports an AWS Multi-Factor Authentication (AWS MFA) device that you can plug into a USB port on your computer?",
            options: [
                "Hardware Multi-Factor Authentication (AWS MFA) device",
                "Virtual Multi-Factor Authentication (AWS MFA) device",
                "U2F security key",
                "SMS text message-based Multi-Factor Authentication (AWS MFA)"
            ],
            correctAnswer: [2],
            explanation: "A U2F security key is a hardware device that plugs into a USB port and you tap it to complete multi-factor authentication, following the FIDO standard. A hardware MFA device is a separate keypad that displays a code, virtual MFA uses a smartphone app to generate codes, and SMS text-message MFA sends codes to your phone via text message."
        },
        {
            id: "paper-24-036",
            domain: "STG",
            topic: "efs",
            type: "single",
            question: "A data analytics company is running a proprietary batch analytics application on AWS and wants to use a storage service which would be accessed by hundreds of EC2 instances simultaneously to append data to existing files. As a Cloud Practitioner, which AWS service would you suggest for this use-case?",
            options: [
                "Amazon Simple Storage Service (Amazon S3)",
                "Instance Store",
                "Amazon Elastic Block Store (Amazon EBS)",
                "Amazon Elastic File System (Amazon EFS)"
            ],
            correctAnswer: [3],
            explanation: "Amazon EFS provides a shared NFS file system that can be accessed concurrently by hundreds or even thousands of EC2 instances, allowing them to append to existing files. Amazon EBS volumes and Instance Store can only be attached to a single instance at a time, and Amazon S3 is object storage that does not support in-place file modification or append operations."
        },
        {
            id: "paper-24-037",
            domain: "DBA",
            topic: "dynamodb",
            type: "single",
            question: "An e-commerce company wants to store data from a recommendation engine in a database. As a Cloud Practioner, which AWS service would you recommend to provide this functionality with the LEAST operational overhead for any scale?",
            options: [
                "Amazon Neptune",
                "Amazon Simple Storage Service (Amazon S3)",
                "Amazon DynamoDB",
                "Amazon Relational Database Service (Amazon RDS)"
            ],
            correctAnswer: [2],
            explanation: "Amazon DynamoDB is a fully managed NoSQL database that delivers single-digit-millisecond performance at any scale with the least operational overhead, as it requires no server provisioning, patching, or manual scaling, making it ideal for storing recommendation-engine data. Amazon RDS requires more operational management, Amazon S3 is object storage not a database, and Amazon Neptune is a graph database unsuited for this use case."
        },
        {
            id: "paper-24-038",
            domain: "SEC",
            topic: "encryption-at-rest",
            type: "multiple-select",
            question: "Which of the following AWS services have data encryption automatically enabled? (Select two)?",
            options: [
                "Amazon Redshift",
                "Amazon Elastic Block Store (Amazon EBS)",
                "Amazon Simple Storage Service (Amazon S3)",
                "Amazon Elastic File System (Amazon EFS)",
                "AWS Storage Gateway"
            ],
            correctAnswer: [2, 4],
            explanation: "Amazon S3 automatically encrypts all objects at rest by default using server-side encryption (SSE-S3), and AWS Storage Gateway encrypts all data by default. Amazon EBS, Amazon Redshift, and Amazon EFS all support encryption, but it is optional and must be explicitly enabled when creating or configuring these services."
        },
        {
            id: "paper-24-039",
            domain: "ACM",
            topic: "organizations",
            type: "single",
            question: "A company uses reserved EC2 instances across multiple units with each unit having its own AWS account. However, some of the units under-utilize their reserved instances while other units need more reserved instances. As a Cloud Practitioner, which of the following would you recommend as the most cost-optimal solution?",
            options: [
                "Use AWS Organizations to manage AWS accounts of all units and then share the reserved EC2 instances amongst all units",
                "Use AWS Trusted Advisor to manage AWS accounts of all units and then share the reserved EC2 instances amongst all units",
                "Use AWS Systems Manager to manage AWS accounts of all units and then share the reserved EC2 instances amongst all units",
                "Use AWS Cost Explorer to manage AWS accounts of all units and then share the reserved EC2 instances amongst all units"
            ],
            correctAnswer: [0],
            explanation: "AWS Organizations allows you to manage multiple accounts centrally and share reserved EC2 instances across all member accounts, enabling under-used Reserved Instances in some units to automatically benefit other units that need capacity, making this the most cost-optimal solution. AWS Trusted Advisor, AWS Systems Manager, and AWS Cost Explorer cannot share Reserved Instances across accounts."
        },
        {
            id: "paper-24-040",
            domain: "ELB",
            topic: "auto-scaling",
            type: "single",
            question: "Which entity ensures that your application on Amazon Elastic Compute Cloud (Amazon EC2) always has the right amount of capacity to handle the current traffic demand?",
            options: [
                "Amazon EC2 Auto Scaling",
                "Application Load Balancer",
                "Multi-AZ deployment",
                "Network Load Balancer"
            ],
            correctAnswer: [0],
            explanation: "Amazon EC2 Auto Scaling automatically ensures your application always has the right number of EC2 instances to handle current demand by adding or removing instances based on conditions you define. Application Load Balancer and Network Load Balancer distribute traffic but do not adjust capacity, and Multi-AZ deployment provides high availability but does not scale capacity up or down."
        },
        {
            id: "paper-24-041",
            domain: "CLD",
            topic: "deployment-models",
            type: "single",
            question: "An organization deploys its IT infrastructure in a combination of its on-premises data center along with AWS Cloud. How would you categorize this deployment model?",
            options: [
                "Cloud deployment",
                "Hybrid deployment",
                "Private deployment",
                "Mixed deployment"
            ],
            correctAnswer: [1],
            explanation: "A hybrid deployment model connects on-premises data center infrastructure to the AWS Cloud, allowing resources to be deployed across both environments. Cloud deployment runs everything in the cloud with no on-premises infrastructure, private or on-premises deployment uses virtualization and resource management on-site, and mixed deployment is not a recognized AWS deployment model."
        },
        {
            id: "paper-24-042",
            domain: "ARC",
            topic: "marketplace",
            type: "multiple-select",
            question: "AWS Marketplace facilitates which of the following use-cases? (Select two)",
            options: [
                "Sell Software as a Service (SaaS) solutions to AWS customers",
                "Raise request for purchasing AWS Direct Connect connection",
                "Buy Amazon EC2 Standard Reserved Instances (RI)",
                "AWS customer can buy software that has been bundled into customized Amazon Machine Image (AMIs) by the AWS Marketplace sellers",
                "Purchase compliance documents from third-party vendors"
            ],
            correctAnswer: [0, 3],
            explanation: "AWS Marketplace facilitates selling SaaS solutions to AWS customers and buying software that is bundled into customized AMIs by third-party sellers. You cannot use Marketplace to purchase EC2 Standard Reserved Instances (bought via EC2 console), raise requests for AWS Direct Connect (done in the Direct Connect console), or purchase compliance documents (available through AWS Artifact)."
        },
        {
            id: "paper-24-043",
            domain: "MON",
            topic: "cloudtrail",
            type: "single",
            question: "A financial services company wants to ensure that its AWS account activity meets the governance, compliance and auditing norms. As a Cloud Practitioner, which AWS service would you recommend for this use-case?",
            options: [
                "AWS CloudTrail",
                "AWS Trusted Advisor",
                "Amazon CloudWatch",
                "AWS Config"
            ],
            correctAnswer: [0],
            explanation: "AWS CloudTrail logs and retains all AWS account activity including API calls made through the AWS Management Console, SDKs, and CLI, enabling you to meet governance, compliance, and auditing requirements. AWS Config tracks resource configuration changes, Amazon CloudWatch monitors performance metrics and logs, and AWS Trusted Advisor provides best-practice recommendations, but none of these focus on comprehensive activity logging."
        },
        {
            id: "paper-24-044",
            domain: "SEC",
            topic: "inspector",
            type: "single",
            question: "Which of the following options is NOT a feature of Amazon Inspector?",
            options: [
                "Track configuration changes",
                "Analyze against unintended network accessibility",
                "Automate security assessments",
                "Inspect running operating systems (OS) against known vulnerabilities"
            ],
            correctAnswer: [0],
            explanation: "Amazon Inspector automates security assessments of your applications, analyzes them for unintended network accessibility, and inspects running operating systems against known vulnerabilities. Tracking configuration changes is a feature of AWS Config, not Amazon Inspector, making it the option that is NOT a feature of Inspector."
        },
        {
            id: "paper-24-045",
            domain: "DEP",
            topic: "systems-manager",
            type: "single",
            question: "A Cloud Practitioner would like to get operational insights of its resources to quickly identify any issues that might impact applications using those resources. Which AWS service can help with this task?",
            options: [
                "AWS Systems Manager",
                "Amazon Inspector",
                "AWS Health Dashboard - Your Account Health",
                "AWS Trusted Advisor"
            ],
            correctAnswer: [0],
            explanation: "AWS Systems Manager centralizes operational data across resources, displaying API activity, configuration changes, alerts, inventory, and patch compliance in one view for complete visibility into issues affecting applications. Inspector focuses on security vulnerabilities, Account Health shows AWS service events, and Trusted Advisor provides best-practice recommendations rather than operational insights."
        },
        {
            id: "paper-24-046",
            domain: "EC2",
            topic: "ami",
            type: "single",
            question: "An AWS user is trying to launch an Amazon Elastic Compute Cloud (Amazon EC2) instance in a given region. What is the region-specific constraint that the Amazon Machine Image (AMI) must meet so that it can be used for this Amazon Elastic Compute Cloud (Amazon EC2) instance?",
            options: [
                "An Amazon Machine Image (AMI) is a global entity, so the region is not applicable",
                "You must use an Amazon Machine Image (AMI) from the same region as that of the Amazon EC2 instance. The region of the Amazon Machine Image (AMI) has no bearing on the performance of the Amazon EC2 instance",
                "You should use an Amazon Machine Image (AMI) from the same region, as it improves the performance of the Amazon EC2 instance",
                "You can use an Amazon Machine Image (AMI) from a different region, but it degrades the performance of the Amazon EC2 instance"
            ],
            correctAnswer: [1],
            explanation: "An AMI must be in the same region as the EC2 instance you launch; if needed, copy the AMI to the target region first. The AMI's region has no bearing on the instance's performance once running. The incorrect options either claim AMIs are global, wrongly link region to performance, or suggest cross-region use affects speed."
        },
        {
            id: "paper-24-047",
            domain: "DEP",
            topic: "cloudformation",
            type: "single",
            question: "Which AWS service will you use to provision the same AWS infrastructure across multiple AWS accounts and regions?",
            options: [
                "AWS CodeDeploy",
                "AWS CloudFormation",
                "AWS Systems Manager",
                "AWS Config"
            ],
            correctAnswer: [1],
            explanation: "AWS CloudFormation lets you model infrastructure as code, and its StackSets feature creates, updates, or deletes stacks across multiple AWS accounts and regions in a single operation. CodeDeploy is for deploying application code to instances, Systems Manager handles operational tasks, and Config tracks resource configuration changes."
        },
        {
            id: "paper-24-048",
            domain: "EC2",
            topic: "pricing",
            type: "single",
            question: "An intern at an IT company provisioned a Linux based On-demand EC2 instance with per-second billing but terminated it within 30 seconds as he wanted to provision another instance type. What is the duration for which the instance would be charged?",
            options: [
                "300 seconds",
                "30 seconds",
                "60 seconds",
                "600 seconds"
            ],
            correctAnswer: [2],
            explanation: "Linux On-Demand EC2 instances have a one-minute (60-second) minimum billing charge, so a 30-second session is rounded up and billed as 60 seconds. The other options, 30, 300, or 600 seconds, do not reflect this minimum billing increment."
        },
        {
            id: "paper-24-049",
            domain: "ACM",
            topic: "cost-explorer",
            type: "single",
            question: "Which of the following AWS services can be used to forecast your AWS account usage and costs?",
            options: [
                "AWS Cost & Usage Report (AWS CUR)",
                "AWS Budgets",
                "AWS Pricing Calculator",
                "AWS Cost Explorer"
            ],
            correctAnswer: [3],
            explanation: "AWS Cost Explorer visualizes your historical spending and includes forecasting capabilities to project future AWS account usage and costs based on past patterns. Cost & Usage Report delivers raw billing line items, Budgets alerts when thresholds are crossed, and Pricing Calculator estimates costs for architectures you have not yet deployed."
        },
        {
            id: "paper-24-050",
            domain: "AID",
            topic: "iam-identity-center",
            type: "single",
            question: "A corporation would like to simplify access management to multiple AWS accounts as well as facilitate AWS Single Sign-On (AWS SSO) access to its AWS accounts. As a Cloud Practitioner, which AWS service would you use for this task?",
            options: [
                "AWS Cognito",
                "AWS Identity and Access Management (AWS IAM)",
                "AWS Command Line Interface (CLI)",
                "AWS IAM Identity Center"
            ],
            correctAnswer: [3],
            explanation: "AWS IAM Identity Center (formerly AWS SSO) centrally manages access to multiple AWS accounts and business applications through a single sign-on portal, simplifying user access. Cognito is for application end-user authentication, standard IAM manages permissions but lacks SSO federation, and the CLI is a command-line tool for service management."
        },
        {
            id: "paper-24-051",
            domain: "SEC",
            topic: "cloudhsm",
            type: "single",
            question: "Due to regulatory and compliance reasons, an organization is supposed to use a hardware device for any data encryption operations in the cloud. Which AWS service can be used to meet this compliance requirement?",
            options: [
                "AWS CloudHSM",
                "AWS Trusted Advisor",
                "AWS Secrets Manager",
                "AWS Key Management Service (AWS KMS)"
            ],
            correctAnswer: [0],
            explanation: "AWS CloudHSM provides dedicated, tamper-resistant FIPS 140-2 Level 3 hardware security modules in the cloud to generate and manage your encryption keys, meeting strict compliance requirements. KMS uses shared multi-tenant HSMs, Secrets Manager stores application credentials, and Trusted Advisor delivers best-practice recommendations rather than encryption hardware."
        },
        {
            id: "paper-24-052",
            domain: "ML",
            topic: "transcribe-polly",
            type: "single",
            question: "A unicorn startup is building an analytics application with support for a speech-based interface. The application will accept speech-based input from users and then convey results via speech. As a Cloud Practitioner, which solution would you recommend for the given use-case?",
            options: [
                "Use Amazon Polly to convert speech to text for downstream analysis. Then use Amazon Translate to convey the text results via speech",
                "Use Amazon Transcribe to convert speech to text for downstream analysis. Then use Amazon Polly to convey the text results via speech",
                "Use Amazon Translate to convert speech to text for downstream analysis. Then use Amazon Polly to convey the text results via speech",
                "Use Amazon Polly to convert speech to text for downstream analysis. Then use Amazon Transcribe to convey the text results via speech"
            ],
            correctAnswer: [1],
            explanation: "Amazon Transcribe converts speech input into text (automatic speech recognition), which your application processes, then Amazon Polly synthesizes the results back into natural-sounding speech to complete the loop. Polly alone cannot transcribe audio, and Translate handles language conversion not speech recognition, so the other pairings are incorrect."
        },
        {
            id: "paper-24-053",
            domain: "S3",
            topic: "storage-classes",
            type: "single",
            question: "A photo sharing web application wants to store thumbnails of user-uploaded images on Amazon Simple Storage Service (Amazon S3). The thumbnails are rarely used but need to be immediately accessible from the web application. The thumbnails can be regenerated easily if they are lost. Which is the most cost-effective way to store these thumbnails on Amazon Simple Storage Service (Amazon S3)?",
            options: [
                "Use Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA) to store the thumbnails",
                "Use Amazon S3 Glacier Flexible Retrieval to store the thumbnails",
                "Use Amazon S3 Standard-Infrequent Access (S3 Standard-IA) to store the thumbnails",
                "Use Amazon S3 Standard to store the thumbnails"
            ],
            correctAnswer: [0],
            explanation: "S3 One Zone-Infrequent Access stores data in a single Availability Zone at 20% lower cost than Standard-IA while maintaining immediate access, perfect for thumbnails that are rarely accessed but easily recreated if lost. Standard-IA costs more, S3 Standard is optimized for frequent access, and Glacier Flexible Retrieval has minutes-to-hours latency."
        },
        {
            id: "paper-24-054",
            domain: "ARC",
            topic: "partner-solutions",
            type: "single",
            question: "A start-up would like to quickly deploy a popular technology on AWS. As a Cloud Practitioner, which AWS tool would you use for this task?",
            options: [
                "AWS CodeDeploy",
                "AWS Forums",
                "AWS Whitepapers",
                "AWS Partner Solutions (formerly Quick Starts)"
            ],
            correctAnswer: [3],
            explanation: "AWS Partner Solutions (formerly Quick Starts) provide automated reference deployments for popular technologies, following AWS best practices and launching production-ready environments in minutes. CodeDeploy automates application code deployments, AWS Forums is a community Q&A platform, and Whitepapers offer architectural guidance but do not deploy infrastructure."
        },
        {
            id: "paper-24-055",
            domain: "ELB",
            topic: "high-availability",
            type: "single",
            question: "Multi-AZ deployment is an example of which of the following?",
            options: [
                "Scale up",
                "High Availability",
                "Scale out",
                "Performance Efficiency"
            ],
            correctAnswer: [1],
            explanation: "Deploying resources across multiple Availability Zones delivers High Availability by ensuring your application continues running even if an entire zone fails. Scale out means adding more instances horizontally, scale up increases resources within a single instance, and Performance Efficiency is a Well-Architected pillar about optimal resource usage."
        },
        {
            id: "paper-24-056",
            domain: "ARC",
            topic: "cloud-adoption-framework",
            type: "multiple-select",
            question: "Which option is a common stakeholder role for the AWS Cloud Adoption Framework (AWS CAF) platform perspective? (Select two)",
            options: [
                "Engineer",
                "Chief Information Officer (CIO)",
                "Chief Technology Officer (CTO)",
                "Chief Data Officer (CDO)",
                "Chief Product Officer (CPO)"
            ],
            correctAnswer: [0, 2],
            explanation: "The AWS Cloud Adoption Framework platform perspective addresses delivering and modernizing cloud infrastructure; its typical stakeholders include the CTO and engineers who design and build technology platforms. The CIO leads business strategy, the CDO manages data governance, and the CPO handles products, all aligned with different CAF perspectives."
        },
        {
            id: "paper-24-057",
            domain: "ACM",
            topic: "pricing-calculator",
            type: "single",
            question: "A financial services company wants to migrate from its on-premises data center to AWS Cloud. As a Cloud Practitioner, which AWS service would you recommend so that the company can compare the cost of running their IT infrastructure on-premises vs AWS Cloud?",
            options: [
                "AWS Pricing Calculator",
                "AWS Cost Explorer",
                "AWS Trusted Advisor",
                "AWS Budgets"
            ],
            correctAnswer: [0],
            explanation: "AWS Pricing Calculator lets you model and estimate AWS solution costs before deployment, making it ideal for comparing on-premises infrastructure TCO against AWS cloud migration scenarios. Cost Explorer analyzes existing AWS spend, Budgets sends threshold alerts, and Trusted Advisor provides optimization recommendations, none of which support on-premises comparison."
        },
        {
            id: "paper-24-058",
            domain: "ACM",
            topic: "compute-optimizer",
            type: "multiple-select",
            question: "AWS Compute Optimizer delivers recommendations for which of the following AWS resources? (Select two)",
            options: [
                "Amazon Elastic Block Store (Amazon EBS), AWS Lambda functions",
                "Amazon Elastic Compute Cloud (Amazon EC2) instances, Amazon EC2 Auto Scaling groups",
                "Amazon Elastic File System (Amazon EFS), AWS Lambda functions",
                "AWS Lambda functions, Amazon Simple Storage Service (Amazon S3)",
                "Amazon Elastic Compute Cloud (Amazon EC2) instances, Amazon Elastic File System (Amazon EFS)"
            ],
            correctAnswer: [0, 1],
            explanation: "AWS Compute Optimizer uses machine learning to analyze utilization and deliver rightsizing recommendations for EC2 instances, EC2 Auto Scaling groups, EBS volumes, and Lambda functions. It does not cover storage services like S3 or EFS, focusing exclusively on compute and block storage resources."
        },
        {
            id: "paper-24-059",
            domain: "MON",
            topic: "health-dashboard",
            type: "single",
            question: "Which service gives a personalized view of the status of the AWS services that are part of your Cloud architecture so that you can quickly assess the impact on your business when AWS service(s) are experiencing issues?",
            options: [
                "Amazon Inspector",
                "AWS Health - Service Health Dashboard",
                "Amazon CloudWatch",
                "AWS Health - Your Account Health Dashboard"
            ],
            correctAnswer: [3],
            explanation: "AWS Health - Your Account Health Dashboard provides a personalized view of service status and proactive alerts specific to your resources, helping assess business impact when AWS issues affect your applications. Service Health Dashboard shows region-wide AWS status, CloudWatch monitors metrics and logs, and Inspector performs security vulnerability scans."
        },
        {
            id: "paper-24-060",
            domain: "DBA",
            topic: "dynamodb-global-tables",
            type: "single",
            question: "A company wants to improve the resiliency of its flagship application so it wants to move from its traditional database system to a managed AWS NoSQL database service to support active-active configuration in both the East and West US AWS regions. The active-active configuration with cross-region support is the prime criteria for any database solution that the company considers. Which AWS database service is the right fit for this requirement?",
            options: [
                "Amazon Aurora with multi-master clusters",
                "Amazon DynamoDB with global tables",
                "Amazon Relational Database Service (Amazon RDS) for MYSQL",
                "Amazon DynamoDB with DynamoDB Accelerator"
            ],
            correctAnswer: [1],
            explanation: "Amazon DynamoDB with global tables automatically replicates data across multiple regions and supports active-active configuration, allowing read and write operations in both US East and West simultaneously. DynamoDB Accelerator (DAX) is an in-memory cache layer without multi-region support, and Aurora and RDS are relational databases, not NoSQL."
        },
        {
            id: "paper-24-061",
            domain: "MON",
            topic: "cloudwatch-logs",
            type: "single",
            question: "An IT company has a hybrid cloud architecture and it wants to centralize the server logs for its Amazon Elastic Compute Cloud (Amazon EC2) instances and on-premises servers. Which of the following is the MOST effective for this use-case?",
            options: [
                "Use Amazon CloudWatch Logs for both the Amazon Elastic Compute Cloud (Amazon EC2) instance and the on-premises servers",
                "Use AWS Lambda to send log data from Amazon Elastic Compute Cloud (Amazon EC2) instance as well as on-premises servers to Amazon CloudWatch Logs",
                "Use Amazon CloudWatch Logs for the Amazon Elastic Compute Cloud (Amazon EC2) instance and AWS CloudTrail for the on-premises servers",
                "Use AWS CloudTrail for the Amazon Elastic Compute Cloud (Amazon EC2) instance and Amazon CloudWatch Logs for the on-premises servers"
            ],
            correctAnswer: [0],
            explanation: "Amazon CloudWatch Logs centralizes log collection from both EC2 instances and on-premises servers via the unified CloudWatch agent, providing a single scalable repository for hybrid environments. Lambda is a compute service not a log aggregator, and CloudTrail tracks AWS API calls rather than server application or system logs."
        },
        {
            id: "paper-24-062",
            domain: "CMP",
            topic: "ecs",
            type: "single",
            question: "A startup runs its proprietary application on docker containers. As a Cloud Practitioner, which AWS service would you recommend so that the startup can run containers and still have access to the underlying servers?",
            options: [
                "Amazon Elastic Container Service (Amazon ECS)",
                "AWS Fargate",
                "AWS Lambda",
                "Amazon Elastic Container Registry (Amazon ECR)"
            ],
            correctAnswer: [0],
            explanation: "Amazon ECS runs Docker containers on a cluster of EC2 instances, giving you access to the underlying servers for management and customization. AWS Fargate is serverless container execution with no server access, Lambda runs functions not persistent containers, and ECR is a container image registry for storing images rather than running them."
        },
        {
            id: "paper-24-063",
            domain: "SEC",
            topic: "macie",
            type: "single",
            question: "A silicon valley based healthcare startup stores anonymized patient health data on Amazon S3. The CTO further wants to ensure that any sensitive data on S3 is discovered and identified to prevent any sensitive data leaks. As a Cloud Practitioner, which AWS service would you recommend addressing this use-case?",
            options: [
                "Amazon Macie",
                "AWS Glue",
                "Amazon Polly",
                "AWS Secrets Manager"
            ],
            correctAnswer: [0],
            explanation: "Amazon Macie uses machine learning and pattern matching to automatically discover, classify, and protect sensitive data such as personally identifiable information in S3 buckets, alerting on exposure risks. AWS Glue is an ETL service for data integration, Polly synthesizes speech, and Secrets Manager stores application credentials and API keys."
        },
        {
            id: "paper-24-064",
            domain: "S3",
            topic: "storage-classes",
            type: "single",
            question: "Which of the following Amazon S3 storage classes takes the most time to retrieve data (also known as first byte latency)?",
            options: [
                "Amazon S3 Glacier Flexible Retrieval",
                "Amazon S3 Glacier Deep Archive",
                "Amazon S3 Intelligent-Tiering",
                "Amazon S3 Standard"
            ],
            correctAnswer: [1],
            explanation: "S3 Glacier Deep Archive delivers the lowest storage cost for long-term archives but has the longest retrieval time at 12 to 48 hours for the first byte. S3 Standard and Intelligent-Tiering provide millisecond access, and Glacier Flexible Retrieval offers minutes-to-hours latency, all faster than Deep Archive."
        },
        {
            id: "paper-24-065",
            domain: "ELB",
            topic: "elb",
            type: "multiple-select",
            question: "Which of the following options are the benefits of using AWS Elastic Load Balancing (ELB)? (Select TWO)",
            options: [
                "Storage",
                "Agility",
                "Fault tolerance",
                "High availability",
                "Less costly"
            ],
            correctAnswer: [2, 3],
            explanation: "AWS Elastic Load Balancing distributes incoming traffic across multiple targets in one or more Availability Zones, ensuring high availability and fault tolerance by routing around unhealthy instances. ELB does not provide storage, directly reduce costs, or deliver agility, which refers to rapid resource provisioning rather than traffic distribution."
        }
    ]
})
