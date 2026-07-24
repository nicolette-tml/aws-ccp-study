window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "paper-23",
  paperId: "paper-23",
  paperName: "Practice Paper 23",
  questions: [
    {
      id: "paper-23-001",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "A user is planning to migrate an application workload to the AWS Cloud. Which control becomes the responsibility of AWS once the migration is complete?",
      options: [
        "Patching the guest operating system",
        "Maintaining physical and environmental controls",
        "Protecting communications and maintaining zone security",
        "Patching specific applications"
      ],
      correctAnswer: [1],
      explanation: "Once a workload moves to AWS, maintaining physical and environmental controls (data center security, power, cooling) becomes AWS's exclusive responsibility under the Shared Responsibility Model. Patching the guest operating system, protecting communications between components, and patching specific applications remain the customer's responsibility because these operate \"in\" the cloud, not \"of\" the cloud."
    },
    {
      id: "paper-23-002",
      domain: "DEP",
      topic: "elastic-beanstalk",
      type: "multiple-select",
      question: "Which services can be used to deploy applications on AWS? (Choose two.)",
      options: [
        "AWS Elastic Beanstalk",
        "AWS Config",
        "AWS OpsWorks",
        "AWS Application Discovery Service",
        "Amazon Kinesis"
      ],
      correctAnswer: [0, 2],
      explanation: "AWS Elastic Beanstalk and AWS OpsWorks are both services used to deploy and manage applications on AWS — Elastic Beanstalk automates provisioning and scaling, while OpsWorks provides configuration management using Chef and Puppet. AWS Config tracks resource configuration for compliance (not deployment), AWS Application Discovery Service inventories on-premises servers for migration planning, and Amazon Kinesis is a data-streaming service — none of these deploy applications."
    },
    {
      id: "paper-23-003",
      domain: "OTH",
      topic: "amazon-connect",
      type: "single",
      question: "Which AWS service can be used to provide an on-demand, cloud-based contact center?",
      options: [
        "AWS Direct Connect",
        "Amazon Connect",
        "AWS Support Center",
        "AWS Managed Services"
      ],
      correctAnswer: [1],
      explanation: "Amazon Connect is AWS's cloud-based contact center service, letting companies set up an omnichannel contact center on demand without upfront infrastructure investment. AWS Direct Connect is a private network connection, AWS Support Center is where customers manage support cases, and AWS Managed Services provides infrastructure operations — none provide contact center functionality."
    },
    {
      id: "paper-23-004",
      domain: "ACM",
      topic: "pricing-calculator",
      type: "single",
      question: "What tool enables customers without an AWS account to estimate costs for almost all AWS services?",
      options: [
        "Cost Explorer",
        "TCO Calculator",
        "AWS Budgets",
        "AWS Pricing Calculator"
      ],
      correctAnswer: [3],
      explanation: "The AWS Pricing Calculator is a free, publicly accessible web tool that lets anyone, even without an AWS account, estimate costs for almost all AWS services. Cost Explorer and AWS Budgets require an existing AWS account to analyze or track actual spending, and the TCO Calculator compares AWS costs against on-premises costs rather than broadly estimating service pricing."
    },
    {
      id: "paper-23-005",
      domain: "VPC",
      topic: "internet-gateway",
      type: "single",
      question: "Which component must be attached to a VPC to enable inbound Internet access?",
      options: [
        "NAT gateway",
        "VPC endpoint",
        "VPN connection",
        "Internet gateway"
      ],
      correctAnswer: [3],
      explanation: "An internet gateway is the VPC component that must be attached to allow resources in the VPC to send and receive traffic to and from the internet, including inbound access. A NAT gateway only allows outbound internet access for private subnet resources, a VPC endpoint provides private connectivity to AWS services (not the public internet), and a VPN connection links a VPC to an on-premises network, not the open internet."
    },
    {
      id: "paper-23-006",
      domain: "ACM",
      topic: "reserved-instances",
      type: "single",
      question: "Which pricing model would result in maximum Amazon Elastic Compute Cloud (Amazon EC2) savings for a database server that must be online for one year?",
      options: [
        "Spot Instance",
        "On-Demand Instance",
        "Partial Upfront Reserved Instance",
        "No Upfront Reserved Instance"
      ],
      correctAnswer: [2],
      explanation: "For a workload that must run continuously for a full year, a Partial Upfront Reserved Instance delivers deeper discounts than a No Upfront RI by paying part of the cost in advance, maximizing savings for that steady-state period among the given options. On-Demand Instances cost the most for predictable long-running workloads, and Spot Instances offer the lowest price but can be interrupted at any time, making them unsuitable for a database that must stay online."
    },
    {
      id: "paper-23-007",
      domain: "DBA",
      topic: "rds",
      type: "single",
      question: "A company has a MySQL database running on a single Amazon EC2 instance. The company now requires higher availability in the event of an outage. Which set of tasks would meet this requirement?",
      options: [
        "Add an Application Load Balancer in front of the EC2 instance",
        "Configure EC2 Auto Recovery to move the instance to another Availability Zone",
        "Migrate to Amazon RDS and enable Multi-AZ",
        "Enable termination protection for the EC2 instance to avoid outages"
      ],
      correctAnswer: [2],
      explanation: "Migrating the database to Amazon RDS and enabling Multi-AZ automatically provisions a synchronous standby replica in another Availability Zone that RDS fails over to during an outage, delivering higher availability than a single EC2 instance ever could. Adding an Application Load Balancer or enabling EC2 Auto Recovery doesn't address database-level failover, and termination protection merely prevents accidental termination — it does nothing to improve availability during an actual outage."
    },
    {
      id: "paper-23-008",
      domain: "IAM",
      topic: "password-policy",
      type: "single",
      question: "A company wants to ensure that AWS Management Console users are meeting password complexity requirements. How can the company configure password complexity?",
      options: [
        "Using an AWS IAM user policy",
        "Using an AWS Organizations service control policy (SCP)",
        "Using an AWS IAM account password policy",
        "Using an AWS Security Hub managed insight"
      ],
      correctAnswer: [2],
      explanation: "An IAM account password policy lets administrators enforce password complexity requirements (minimum length, character types, rotation) for all IAM users accessing the Management Console. An IAM user policy grants permissions to actions or resources rather than enforcing password rules, an Organizations SCP restricts which actions accounts can take (not password complexity), and Security Hub managed insights surface security findings rather than enforce password policy."
    },
    {
      id: "paper-23-009",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "Under the AWS shared responsibility model, which of the following is the customer’s responsibility?",
      options: [
        "Patching guest OS and applications",
        "Patching and fixing flaws in the infrastructure",
        "Physical and environmental controls",
        "Configuration of AWS infrastructure devices"
      ],
      correctAnswer: [0],
      explanation: "Under the Shared Responsibility Model, the customer is responsible for security \"in\" the cloud, which includes patching the guest operating system and any applications running on their instances. Patching the underlying infrastructure, physical/environmental controls, and configuration of AWS's own infrastructure devices are all AWS's responsibility as security \"of\" the cloud."
    },
    {
      id: "paper-23-010",
      domain: "SEC",
      topic: "pci-compliance",
      type: "single",
      question: "Which of the following tasks is required to deploy a PCI-compliant workload on AWS?",
      options: [
        "Use any AWS service and implement PCI controls at the application layer",
        "Use an AWS service that is in-scope for PCI compliance and raise an AWS support ticket to enable PCI compliance at the application layer",
        "Use any AWS service and raise an AWS support ticket to enable PCI compliance on that service",
        "Use an AWS service that is in scope for PCI compliance and apply PCI controls at the application layer"
      ],
      correctAnswer: [3],
      explanation: "To deploy a PCI-compliant workload, a company must use an AWS service that is in-scope for PCI DSS and then apply the required PCI controls itself at the application layer, since AWS secures only the underlying infrastructure. Using any AWS service regardless of PCI scope, or expecting a support ticket to enable PCI compliance on a service, misunderstands the Shared Responsibility Model — AWS support cannot retroactively make an out-of-scope service compliant."
    },
    {
      id: "paper-23-011",
      domain: "INT",
      topic: "sqs",
      type: "single",
      question: "A company is building an application that requires the ability to send, store, and receive messages between application components. The company has another requirement to process messages in first-in, first-out (FIFO) order. Which AWS service should the company use?",
      options: [
        "AWS Step Functions",
        "Amazon Simple Notification Service (Amazon SNS)",
        "Amazon Kinesis Data Streams",
        "Amazon Simple Queue Service (Amazon SQS)"
      ],
      correctAnswer: [3],
      explanation: "Amazon Simple Queue Service (SQS) supports sending, storing, and receiving messages between application components, and its FIFO queue type guarantees strict first-in, first-out message ordering and exactly-once processing. AWS Step Functions orchestrates workflows (not message queuing), Amazon SNS is a pub/sub notification service without built-in FIFO consumer queuing, and Kinesis Data Streams is designed for high-throughput streaming analytics, not ordered message queuing."
    },
    {
      id: "paper-23-012",
      domain: "ACM",
      topic: "consolidated-billing",
      type: "single",
      question: "AnyCompany recently purchased Example Corp. Both companies use AWS resources, and AnyCompany wants a single aggregated bill. Which option allows AnyCompany to receive a single bill?",
      options: [
        "Example Corp. must submit a request to its AWS solutions architect or AWS technical account manager to link the accounts and consolidate billing.",
        "AnyCompany must create a new support case in the AWS Support Center requesting that both bills be combined.",
        "Send an invitation to join the organization from AnyCompany’s AWS Organizations master account to Example Corp.",
        "Migrate the Example Corp. VPCs, Amazon EC2 instances, and other resources into the AnyCompany AWS account."
      ],
      correctAnswer: [2],
      explanation: "To combine billing across two companies' AWS accounts, AnyCompany's AWS Organizations master account should send an invitation for Example Corp.'s account to join the organization, enabling consolidated billing under one bill. Example Corp. cannot achieve this by contacting its own solutions architect, a support case doesn't merge billing between separate accounts, and migrating all resources into one account is unnecessary and far more disruptive than simply linking accounts through Organizations."
    },
    {
      id: "paper-23-013",
      domain: "ACM",
      topic: "budgets",
      type: "single",
      question: "Which tool can be used to create alerts when the actual or forecasted cost of AWS services exceeds a certain threshold?",
      options: [
        "Cost Explorer",
        "AWS Budgets",
        "AWS Cost and Usage Report",
        "AWS CloudTrail"
      ],
      correctAnswer: [1],
      explanation: "AWS Budgets lets customers set custom cost or usage thresholds and receive alerts when actual or forecasted spending exceeds them. Cost Explorer visualizes historical spending but doesn't send threshold-based alerts, the Cost and Usage Report is a raw detailed billing dataset, and AWS CloudTrail logs API activity rather than tracking costs."
    },
    {
      id: "paper-23-014",
      domain: "DEP",
      topic: "elastic-beanstalk",
      type: "single",
      question: "A user has limited knowledge of AWS services, but wants to quickly deploy a scalable Node.js application in the AWS Cloud. Which service should be used to deploy the application?",
      options: [
        "AWS CloudFormation",
        "AWS Elastic Beanstalk",
        "Amazon EC2",
        "AWS OpsWorks"
      ],
      correctAnswer: [1],
      explanation: "AWS Elastic Beanstalk lets users with limited AWS knowledge quickly deploy and scale applications, including Node.js apps, by simply uploading code, while it automatically handles provisioning, load balancing, and scaling behind the scenes. AWS CloudFormation and Amazon EC2 both require deeper AWS infrastructure knowledge to configure, and AWS OpsWorks requires familiarity with Chef/Puppet configuration management, making it less beginner-friendly."
    },
    {
      id: "paper-23-015",
      domain: "ACM",
      topic: "trusted-advisor",
      type: "single",
      question: "Which AWS Trusted Advisor check is available to all AWS users?",
      options: [
        "Core checks",
        "All checks",
        "Cost optimization checks",
        "Fault tolerance checks"
      ],
      correctAnswer: [0],
      explanation: "AWS Trusted Advisor's Core checks are available to all AWS accounts regardless of support plan, covering a limited set of security and service-limit recommendations. Full access to all checks, including cost optimization and fault tolerance checks, requires a Business or Enterprise Support plan."
    },
    {
      id: "paper-23-016",
      domain: "SEC",
      topic: "ddos",
      type: "multiple-select",
      question: "A web developer is concerned that a DDoS attack could target an application. Which AWS services or features can help protect against such an attack? (Choose two.)",
      options: [
        "AWS Shield",
        "AWS CloudTrail",
        "Amazon CloudFront",
        "AWS Support Center",
        "AWS Service Health Dashboard"
      ],
      correctAnswer: [0, 2],
      explanation: "AWS Shield provides managed DDoS protection (Standard is included for all customers, Advanced offers enhanced mitigation), and Amazon CloudFront absorbs and disperses attack traffic across its global edge network, both helping protect applications from DDoS attacks. AWS CloudTrail logs API activity, AWS Support Center manages support cases, and the AWS Service Health Dashboard reports on overall AWS service status — none provide DDoS mitigation."
    },
    {
      id: "paper-23-017",
      domain: "SEC",
      topic: "artifact",
      type: "single",
      question: "Which AWS service gives users on-demand, self-service access to AWS compliance control reports?",
      options: [
        "AWS Config",
        "Amazon GuardDuty",
        "AWS Trusted Advisor",
        "AWS Artifact"
      ],
      correctAnswer: [3],
      explanation: "AWS Artifact gives users on-demand, self-service access to AWS's compliance reports and agreements, such as SOC and PCI reports. AWS Config tracks resource configuration compliance, Amazon GuardDuty detects threats, and AWS Trusted Advisor gives account optimization recommendations — none provide direct access to compliance documentation."
    },
    {
      id: "paper-23-018",
      domain: "IAM",
      topic: "least-privilege",
      type: "multiple-select",
      question: "A company wants to provide one of its employees with access to Amazon RDS. The company also wants to limit the interaction to only the AWS CLI and AWS software development kits (SDKs). Which combination of actions should the company take to meet these requirements while following the principles of least privilege? (Choose two.)",
      options: [
        "Create an IAM user and provide AWS Management Console access only.",
        "Create an IAM user and provide programmatic access only.",
        "Create an IAM role and provide AWS Management Console access only.",
        "Create an IAM policy with administrator access and attach it to the IAM user.",
        "Create an IAM policy with Amazon RDS access and attach it to the IAM user."
      ],
      correctAnswer: [1, 4],
      explanation: "Creating an IAM user with programmatic access only (no console access) restricts the employee to interacting through the AWS CLI and SDKs as required, and attaching an IAM policy scoped to Amazon RDS access — rather than administrator access — follows least privilege by granting only the permissions needed. Granting console access contradicts the CLI/SDK-only requirement, an IAM role with console access doesn't match the use case either, and an administrator-access policy grants far more permission than necessary."
    },
    {
      id: "paper-23-019",
      domain: "MON",
      topic: "aws-config",
      type: "single",
      question: "A company has a compliance requirement to record and evaluate configuration changes, as well as perform remediation actions on AWS resources. Which AWS service should the company use?",
      options: [
        "AWS Config",
        "AWS Secrets Manager",
        "AWS CloudTrail",
        "AWS Trusted Advisor"
      ],
      correctAnswer: [0],
      explanation: "AWS Config continuously records configuration changes to AWS resources, evaluates them against defined rules for compliance, and can trigger remediation actions when resources drift out of compliance. AWS Secrets Manager stores and rotates credentials (not configuration state), AWS CloudTrail logs API calls but doesn't evaluate compliance or remediate, and AWS Trusted Advisor gives best-practice recommendations rather than continuous configuration recording and remediation."
    },
    {
      id: "paper-23-020",
      domain: "GLB",
      topic: "availability-zones",
      type: "multiple-select",
      question: "What are the advantages of deploying an application with Amazon EC2 instances in multiple Availability Zones? (Choose two.)",
      options: [
        "Preventing a single point of failure",
        "Reducing the operational costs of the application",
        "Allowing the application to serve cross-region users with low latency",
        "Increasing the availability of the application",
        "Increasing the load of the application"
      ],
      correctAnswer: [0, 3],
      explanation: "Deploying EC2 instances across multiple Availability Zones prevents a single point of failure — if one AZ has an outage, others continue serving traffic — and increases the overall availability of the application. It does not reduce operational costs (running across multiple AZs typically costs more), does not help serve cross-region users with low latency (multiple AZs are still within one Region), and does not increase application load."
    },
    {
      id: "paper-23-021",
      domain: "ACM",
      topic: "reserved-instances",
      type: "single",
      question: "A workload on AWS will run for the foreseeable future by using a consistent number of Amazon EC2 instances. What pricing model will minimize cost while ensuring that compute resources remain available?",
      options: [
        "Dedicated Hosts",
        "On-Demand Instances",
        "Spot Instances",
        "Reserved Instances"
      ],
      correctAnswer: [3],
      explanation: "Reserved Instances minimize cost for a workload that runs continuously with a consistent number of instances by committing to a 1- or 3-year term in exchange for a significant discount over On-Demand pricing. Dedicated Hosts are for licensing/compliance needs and cost more, On-Demand Instances offer no discount for steady-state usage, and Spot Instances can be reclaimed by AWS at any time, risking availability."
    },
    {
      id: "paper-23-022",
      domain: "MON",
      topic: "health-dashboard",
      type: "single",
      question: "Which tool can be used to identify scheduled changes to the AWS infrastructure?",
      options: [
        "AWS Personal Health Dashboard",
        "AWS Trusted Advisor",
        "Billing Dashboard",
        "AWS Config"
      ],
      correctAnswer: [0],
      explanation: "The AWS Personal Health Dashboard provides a personalized view of AWS events affecting your resources, including scheduled changes and maintenance to the underlying infrastructure. AWS Trusted Advisor gives optimization recommendations, the Billing Dashboard shows cost information, and AWS Config tracks changes to your own resource configurations rather than AWS's scheduled infrastructure changes."
    },
    {
      id: "paper-23-023",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "Which of the following is the customer’s responsibility when using Amazon RDS?",
      options: [
        "Patching the operating system of underlying hardware",
        "Controlling traffic to and from the database through security groups",
        "Running backups that enable point-in-time recovery of a DB instance",
        "Replacing failed DB instances"
      ],
      correctAnswer: [1],
      explanation: "With Amazon RDS as a managed service, the customer is responsible for controlling network traffic to and from the database instance using security groups. AWS manages patching the underlying operating system, running backups for point-in-time recovery, and replacing failed DB instances as part of the managed service."
    },
    {
      id: "paper-23-024",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "What is the customer’s responsibility when using AWS Lambda?",
      options: [
        "Operating system configuration",
        "Application management",
        "Platform management",
        "Code encryption"
      ],
      correctAnswer: [1],
      explanation: "With AWS Lambda, AWS manages the underlying operating system and platform, leaving the customer responsible for their own application code and its management. Operating system configuration and platform management are AWS's responsibility under this fully managed service, and code encryption is an optional feature rather than the core customer responsibility being tested here."
    },
    {
      id: "paper-23-025",
      domain: "ACM",
      topic: "budgets",
      type: "single",
      question: "A company wants to be notified when its AWS Cloud costs or usage exceed defined thresholds. Which AWS service will support these requirements?",
      options: [
        "AWS Budgets",
        "Cost Explorer",
        "AWS CloudTrail",
        "Amazon Macie"
      ],
      correctAnswer: [0],
      explanation: "AWS Budgets lets a company set cost and usage budgets and receive notifications when actual or forecasted values exceed defined thresholds. Cost Explorer visualizes past spending without proactive alerts, AWS CloudTrail logs account API activity, and Amazon Macie detects sensitive data in S3 — none send cost or usage notifications."
    },
    {
      id: "paper-23-026",
      domain: "DBA",
      topic: "dynamodb",
      type: "single",
      question: "Which AWS service provides the ability to host a NoSQL database in the AWS Cloud?",
      options: [
        "Amazon Aurora",
        "Amazon DynamoDB",
        "Amazon RDS",
        "Amazon Redshift"
      ],
      correctAnswer: [1],
      explanation: "Amazon DynamoDB is AWS's fully managed NoSQL database service, providing key-value and document storage. Amazon Aurora and Amazon RDS are relational (SQL) database services, and Amazon Redshift is a SQL-based data warehouse for analytics — none are NoSQL databases."
    },
    {
      id: "paper-23-027",
      domain: "ACM",
      topic: "spot-instances",
      type: "single",
      question: "Which AWS service allows customers to purchase unused Amazon EC2 capacity at an often discounted rate?",
      options: [
        "Reserved Instances",
        "On-Demand Instances",
        "Dedicated Instances",
        "Spot Instances"
      ],
      correctAnswer: [3],
      explanation: "Spot Instances let customers purchase unused EC2 capacity at steep discounts, up to 90% off On-Demand pricing, in exchange for the risk that AWS can reclaim the capacity with short notice. Reserved Instances require a term commitment for a discount rather than tapping into spare capacity, On-Demand Instances have no discount, and Dedicated Instances run on hardware dedicated to a single customer for compliance reasons, not cost savings."
    },
    {
      id: "paper-23-028",
      domain: "VPC",
      topic: "direct-connect",
      type: "single",
      question: "Which AWS service or feature requires an internet service provider (ISP) and a colocation facility to be implemented?",
      options: [
        "AWS VPN",
        "Amazon Connect",
        "AWS Direct Connect",
        "Internet gateway"
      ],
      correctAnswer: [2],
      explanation: "AWS Direct Connect requires a dedicated network connection through a colocation facility, typically arranged with an internet service provider or Direct Connect partner, to establish a private link between on-premises infrastructure and AWS. AWS VPN and an internet gateway both operate over the public internet rather than requiring a colocation facility, and Amazon Connect is a cloud contact center service unrelated to networking."
    },
    {
      id: "paper-23-029",
      domain: "CMP",
      topic: "compute-services",
      type: "multiple-select",
      question: "Which AWS services offer compute capabilities? (Choose two.)",
      options: [
        "Amazon EC2",
        "Amazon S3",
        "Amazon Elastic Block Store (Amazon EBS)",
        "Amazon Cognito",
        "AWS Lambda"
      ],
      correctAnswer: [0, 4],
      explanation: "Amazon EC2 (virtual server instances) and AWS Lambda (serverless functions) are both AWS compute services that run application code. Amazon S3 and Amazon EBS are storage services, and Amazon Cognito manages user authentication and identity — none of these provide compute capability."
    },
    {
      id: "paper-23-030",
      domain: "DEP",
      topic: "codecommit",
      type: "single",
      question: "Which AWS service can be used to privately store and manage versions of source code?",
      options: [
        "AWS CodeBuild",
        "AWS CodeCommit",
        "AWS CodePipeline",
        "AWS CodeStar"
      ],
      correctAnswer: [1],
      explanation: "AWS CodeCommit is a fully managed, private Git-based source control service for securely storing and versioning source code. AWS CodeBuild compiles and tests code, AWS CodePipeline automates release pipelines, and AWS CodeStar is a unified project-management dashboard that ties these services together — none are dedicated source code repositories."
    },
    {
      id: "paper-23-031",
      domain: "ACM",
      topic: "trusted-advisor",
      type: "single",
      question: "Which AWS service should a cloud practitioner use to identify security vulnerabilities of an AWS account?",
      options: [
        "AWS Secrets Manager",
        "Amazon Cognito",
        "Amazon Macie",
        "AWS Trusted Advisor"
      ],
      correctAnswer: [3],
      explanation: "AWS Trusted Advisor inspects an AWS account and flags security vulnerabilities such as open ports, overly permissive security groups, and unused access keys, among other best-practice checks. AWS Secrets Manager stores credentials, Amazon Cognito handles application user authentication, and Amazon Macie discovers sensitive data in S3 — none scan an account broadly for security vulnerabilities the way Trusted Advisor does."
    },
    {
      id: "paper-23-032",
      domain: "GLB",
      topic: "availability-zones",
      type: "single",
      question: "A company wants to ensure its infrastructure is designed for fault tolerance and business continuity in the event of an environmental disruption. Which AWS infrastructure component should the company replicate across?",
      options: [
        "Edge locations",
        "Availability Zones",
        "Regions",
        "Amazon Route 53"
      ],
      correctAnswer: [1],
      explanation: "Replicating infrastructure across multiple Availability Zones protects against environmental disruptions, such as power, cooling, or physical damage, affecting a single data center, since each AZ has independent power and networking. Edge locations serve cached content rather than hosting redundant infrastructure, Regions are a much larger unit than needed for AZ-level fault tolerance, and Amazon Route 53 is a DNS service, not an infrastructure component to replicate across."
    },
    {
      id: "paper-23-033",
      domain: "INT",
      topic: "sns",
      type: "single",
      question: "Which AWS service or feature is used to send both text and email messages from distributed applications?",
      options: [
        "Amazon Simple Notification Service (Amazon SNS)",
        "Amazon Simple Email Service (Amazon SES)",
        "Amazon CloudWatch alerts",
        "Amazon Simple Queue Service (Amazon SQS)"
      ],
      correctAnswer: [0],
      explanation: "Amazon Simple Notification Service (SNS) is a pub/sub messaging service that can fan out notifications to multiple protocols simultaneously, including SMS text messages and email. Amazon SES specializes only in sending email (not text messages), CloudWatch alerts trigger based on metrics rather than sending arbitrary messages, and Amazon SQS is a message queuing service for application-to-application communication, not direct text/email notifications."
    },
    {
      id: "paper-23-034",
      domain: "ARC",
      topic: "well-architected",
      type: "multiple-select",
      question: "Which AWS Cloud design principles can help increase reliability? (Choose two.)",
      options: [
        "Using monolithic architecture",
        "Measuring overall efficiency",
        "Testing recovery procedures",
        "Adopting a consumption model",
        "Automatically recovering from failure"
      ],
      correctAnswer: [2, 4],
      explanation: "Testing recovery procedures validates that failover and disaster-recovery processes actually work before a real failure occurs, and automatically recovering from failure lets systems detect and self-heal without manual intervention — both are core reliability design principles in the AWS Well-Architected Framework. Monolithic architecture increases interdependencies and reduces reliability, measuring overall efficiency relates to the performance/cost pillars, and adopting a consumption model relates to cost optimization, not reliability."
    },
    {
      id: "paper-23-035",
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
      explanation: "AWS Global Accelerator uses the AWS global network to route user traffic to the optimal endpoint for low latency, and Amazon CloudFront caches content at edge locations worldwide for high transfer speeds — together they let a single-Region application reach global users efficiently. An Application Load Balancer only distributes traffic within a Region, AWS Direct Connect is a private link to a specific on-premises location rather than a global user-facing solution, and AWS Lambda is a compute service unrelated to content delivery or routing."
    },
    {
      id: "paper-23-036",
      domain: "VPC",
      topic: "direct-connect",
      type: "single",
      question: "A company wants to connect to AWS over a private, low-latency connection from its remote office. What is the recommended method to meet these requirements?",
      options: [
        "Create a VPN tunnel",
        "Connect across the public internet",
        "Use VPC peering to create a connection.",
        "Use AWS Direct Connect."
      ],
      correctAnswer: [3],
      explanation: "AWS Direct Connect establishes a dedicated, private network connection between an on-premises location and AWS, delivering more consistent, lower latency than a connection over the public internet. A VPN tunnel still traverses the public internet, introducing variable latency, connecting across the public internet offers no dedicated bandwidth or privacy guarantees, and VPC peering only connects two VPCs to each other, not an on-premises office to AWS."
    },
    {
      id: "paper-23-037",
      domain: "SEC",
      topic: "artifact",
      type: "single",
      question: "Which AWS service can be used to retrieve compliance reports on demand?",
      options: [
        "AWS Secrets Manager",
        "AWS Artifact",
        "AWS Security Hub",
        "AWS Certificate Manager"
      ],
      correctAnswer: [1],
      explanation: "AWS Artifact provides on-demand, self-service access to AWS's compliance reports whenever needed. AWS Secrets Manager stores secrets, AWS Security Hub aggregates security findings, and AWS Certificate Manager manages SSL/TLS certificates — none provide compliance reports."
    },
    {
      id: "paper-23-038",
      domain: "SEC",
      topic: "waf",
      type: "single",
      question: "A company has an AWS-hosted website located behind an Application Load Balancer. The company wants to safeguard the website from SQL injection or cross-site scripting. Which AWS service should the company use?",
      options: [
        "Amazon GuardDuty",
        "AWS WAF",
        "AWS Trusted Advisor",
        "Amazon Inspector"
      ],
      correctAnswer: [1],
      explanation: "AWS WAF (Web Application Firewall) protects web applications behind an Application Load Balancer, CloudFront, or API Gateway from common web exploits like SQL injection and cross-site scripting by filtering malicious requests. Amazon GuardDuty detects threats across an account, AWS Trusted Advisor gives optimization recommendations, and Amazon Inspector scans EC2 instances and containers for vulnerabilities — none filter malicious web traffic in real time like WAF."
    },
    {
      id: "paper-23-039",
      domain: "GLB",
      topic: "availability-zones",
      type: "single",
      question: "How should a web application be deployed to ensure high availability in the AWS Cloud?",
      options: [
        "Deploy multiple instances of the application in multiple Availability Zones.",
        "Deploy multiple instances of the application in a single Availability Zone.",
        "Deploy the application to a compute-optimized Amazon EC2 instance in a single Availability Zone.",
        "Deploy the application in one Amazon EC2 instance in an Auto Scaling group."
      ],
      correctAnswer: [0],
      explanation: "Deploying multiple instances of an application across multiple Availability Zones ensures the application keeps running even if an entire AZ becomes unavailable, which is the foundation of high availability in AWS. Deploying multiple instances in a single AZ, or a single compute-optimized instance in one AZ, both leave the application vulnerable to a single AZ failure, and one EC2 instance in an Auto Scaling group, rather than multiple instances spread across AZs, still represents a single point of failure until it's replaced."
    },
    {
      id: "paper-23-040",
      domain: "ACM",
      topic: "reserved-instances",
      type: "single",
      question: "A company is running a self-managed Oracle database directly on Amazon EC2 for its steady-state database. The company wants to reduce compute costs. Which option should the company use to maximize savings over a 3-year term?",
      options: [
        "EC2 Dedicated Instances",
        "EC2 Spot Instances",
        "EC2 Reserved Instances",
        "EC2 On-Demand Instances"
      ],
      correctAnswer: [2],
      explanation: "For a steady-state database workload running continuously for a known 3-year term, EC2 Reserved Instances provide the deepest discount compared to On-Demand pricing, maximizing savings over that period. Dedicated Instances cost more and are meant for compliance/licensing needs, Spot Instances can be interrupted, making them unsuitable for a steady-state database, and On-Demand Instances offer no long-term discount."
    },
    {
      id: "paper-23-041",
      domain: "IAM",
      topic: "credential-report",
      type: "single",
      question: "An external auditor has requested that a company provide a list of all its IAM users, including the status of users’ credentials and access keys. What it the SIMPLEST way to provide this information?",
      options: [
        "Create an IAM user account for the auditor, granting the auditor administrator permissions.",
        "Take a screenshot of each user’s page in the AWS Management Console, then provide the screenshots to the auditor.",
        "Download the IAM credential report, then provide the report to the auditor.",
        "Download the AWS Trusted Advisor report, then provide the report to the auditor."
      ],
      correctAnswer: [2],
      explanation: "The IAM credential report is a downloadable CSV that lists all IAM users in an account along with the status of their passwords and access keys, making it the simplest way to hand this information to an auditor. Creating an auditor account with administrator permissions grants excessive and unnecessary access, taking screenshots is manual and error-prone, and the Trusted Advisor report doesn't provide detailed per-user credential status."
    },
    {
      id: "paper-23-042",
      domain: "ACM",
      topic: "consolidated-billing",
      type: "multiple-select",
      question: "What are the benefits of consolidated billing for AWS Cloud services? (Choose two.)",
      options: [
        "Volume discounts",
        "A minimal additional fee for use",
        "One bill for multiple accounts",
        "Installment payment options",
        "Custom cost and usage budget creation"
      ],
      correctAnswer: [0, 2],
      explanation: "Consolidated billing combines usage across all linked accounts to qualify for volume discounts, such as tiered S3 or data transfer pricing, as if they were one larger account, and it produces a single bill covering multiple accounts. There is no additional fee for using consolidated billing, it doesn't offer installment payment plans, and custom cost/usage budget creation is a feature of AWS Budgets, not a benefit specific to consolidated billing."
    },
    {
      id: "paper-23-043",
      domain: "ACM",
      topic: "pricing-models",
      type: "single",
      question: "A company is expecting a short-term spike in internet traffic for its application. During the traffic increase, the application cannot be interrupted. The company also needs to minimize cost and maximize flexibility. Which Amazon EC2 instance type should the company use to meet these requirements?",
      options: [
        "On-Demand Instances",
        "Spot Instances",
        "Reserved Instances",
        "Dedicated Hosts"
      ],
      correctAnswer: [0],
      explanation: "On-Demand Instances let a company handle a short-term traffic spike without interruption while paying only for what's used, with no long-term commitment, maximizing flexibility and minimizing cost for temporary needs. Spot Instances can be interrupted at any time, which is unacceptable when the application cannot be interrupted, Reserved Instances require a 1- or 3-year commitment unsuited for a short-term spike, and Dedicated Hosts are costlier and intended for licensing/compliance requirements, not short bursts of traffic."
    },
    {
      id: "paper-23-044",
      domain: "MON",
      topic: "aws-config",
      type: "single",
      question: "A company wants to track AWS resource configuration changes for compliance reasons. Which AWS feature can be used to meet this requirement?",
      options: [
        "AWS Cost and Usage Report",
        "AWS Organizations service control policies (SCPs)",
        "AWS Config rules",
        "VPC Flow Logs"
      ],
      correctAnswer: [2],
      explanation: "AWS Config rules continuously evaluate the configuration of AWS resources against desired settings, tracking changes over time for compliance purposes. The Cost and Usage Report covers billing data, not configuration, Organizations SCPs restrict permitted actions rather than tracking changes, and VPC Flow Logs capture network traffic metadata, not resource configuration history."
    },
    {
      id: "paper-23-045",
      domain: "GLB",
      topic: "cloudfront",
      type: "single",
      question: "A company is building an application that needs to deliver images and videos globally with minimal latency. Which approach can the company use to accomplish this in a cost effective manner?",
      options: [
        "Deliver the content through Amazon CloudFront.",
        "Store the content on Amazon S3 and enable S3 cross-region replication.",
        "Implement a VPN across multiple AWS Regions.",
        "Deliver the content through AWS PrivateLink."
      ],
      correctAnswer: [0],
      explanation: "Amazon CloudFront caches images and videos at edge locations around the world, delivering content to global users with minimal latency in a cost-effective, pay-as-you-go manner. Storing content on S3 with cross-region replication duplicates full copies of data across Regions, which is far more costly and complex than caching, a VPN across Regions doesn't improve content delivery speed, and AWS PrivateLink is for private connectivity to services, not public content delivery."
    },
    {
      id: "paper-23-046",
      domain: "IAM",
      topic: "least-privilege",
      type: "single",
      question: "The AWS IAM best practice for granting least privilege is to:",
      options: [
        "apply an IAM policy to an IAM group and limit the size of the group.",
        "require multi-factor authentication (MFA) for all IAM users.",
        "require each IAM user who has different permissions to have multiple passwords.",
        "apply an IAM policy only to IAM users who require it."
      ],
      correctAnswer: [3],
      explanation: "The least-privilege best practice is to apply an IAM policy only to the specific IAM users who actually require those permissions, rather than granting broader access by default. Applying a policy to a group and limiting group size doesn't guarantee only the necessary permissions are granted to each member, requiring MFA improves authentication security but isn't about limiting permissions, and requiring multiple passwords per user isn't a supported or meaningful IAM practice."
    },
    {
      id: "paper-23-047",
      domain: "CLD",
      topic: "economies-of-scale",
      type: "single",
      question: "Which cloud computing benefit does AWS demonstrate with its ability to offer lower variable costs as a result of high purchase volumes?",
      options: [
        "Pay-as-you-go pricing",
        "High availability",
        "Global reach",
        "Economies of scale"
      ],
      correctAnswer: [3],
      explanation: "Economies of scale is the cloud benefit where AWS's massive purchasing volume across millions of customers lets it negotiate lower costs from suppliers and pass those savings on as lower variable costs. Pay-as-you-go pricing describes the billing model itself, not why prices are lower, high availability refers to uptime/resiliency, and global reach describes AWS's worldwide infrastructure footprint — neither relates to volume-driven cost reduction."
    },
    {
      id: "paper-23-048",
      domain: "VPC",
      topic: "transit-gateway",
      type: "single",
      question: "A pharmaceutical company operates its infrastructure in a single AWS Region. The company has thousands of VPCs in a various AWS accounts that it wants to interconnect. Which AWS service or feature should the company use to help simplify management and reduce operational costs?",
      options: [
        "VPC endpoint",
        "AWS Direct Connect",
        "AWS Transit Gateway",
        "VPC peering"
      ],
      correctAnswer: [2],
      explanation: "AWS Transit Gateway acts as a central hub that simplifies connecting thousands of VPCs across many accounts through a single gateway, reducing operational overhead and cost compared to managing many individual connections. A VPC endpoint only provides private access to a specific AWS service, AWS Direct Connect is for on-premises-to-AWS connectivity, and VPC peering requires a separate point-to-point connection for every pair of VPCs, which becomes unmanageable at scale with thousands of VPCs."
    },
    {
      id: "paper-23-049",
      domain: "CLD",
      topic: "elasticity",
      type: "single",
      question: "How can AWS enable a company to control expenses as an application’s usage changes unpredictably?",
      options: [
        "AWS will refund the cost difference if a customer moves to larger servers.",
        "The application can be built to scale up or down automatically as resources are needed",
        "Spot instances will automatically be used if the price is lower than on-demand instances.",
        "Amazon CloudWatch will automatically predict what resources are needed."
      ],
      correctAnswer: [1],
      explanation: "Building an application to scale up or down automatically as resources are needed, elasticity, lets a company pay only for the compute capacity it actually uses, controlling costs even as usage changes unpredictably. AWS does not refund cost differences for moving to larger servers, Spot Instances are used only when explicitly configured rather than automatically substituted for On-Demand, and Amazon CloudWatch monitors metrics and can trigger scaling actions but does not itself predict required resources."
    },
    {
      id: "paper-23-050",
      domain: "SEC",
      topic: "waf",
      type: "single",
      question: "Which AWS service or feature can be used to prevent SQL injection attacks?",
      options: [
        "Security groups",
        "Network ACLs",
        "AWS WAF",
        "IAM policy"
      ],
      correctAnswer: [2],
      explanation: "AWS WAF inspects and filters incoming web requests, blocking common attack patterns like SQL injection before they reach the application. Security groups and network ACLs filter traffic based on IP addresses and ports, not application-layer content like SQL syntax, and an IAM policy controls permissions for AWS API actions, not incoming web traffic."
    }
  ]
});
