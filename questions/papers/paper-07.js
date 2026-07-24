window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "paper-07",
  paperId: "paper-07",
  paperName: "Practice Paper 7",
  questions: [
    {
      id: "paper-07-001",
      domain: "S3",
      topic: "encryption",
      type: "multiple-select",
      question: "Which of the following can help secure your sensitive data in Amazon S3? (Choose TWO)",
      options: [
        "Delete the encryption keys once your data is encrypted.",
        "With AWS you do not need to worry about encryption.",
        "Enable S3 Encryption.",
        "Encrypt the data prior to uploading it.",
        "Delete all IAM users that have access to S3."
      ],
      correctAnswer: [2, 3],
      explanation: "Enabling S3 Server-Side Encryption and encrypting the data before uploading it (client-side encryption) both protect sensitive data stored in S3. Deleting the encryption keys would make the data permanently unreadable rather than secure it, claiming AWS handles it automatically ignores the shared responsibility model since encryption must still be configured, and deleting IAM users removes access but does not encrypt or otherwise protect the data itself."
    },
    {
      id: "paper-07-002",
      domain: "DEP",
      topic: "codebuild",
      type: "single",
      question: "Which AWS service helps developers compile and test their code?",
      options: [
        "AWS CodeDeploy.",
        "AWS CodeCommit.",
        "CloudEndure.",
        "AWS CodeBuild."
      ],
      correctAnswer: [3],
      explanation: "AWS CodeBuild is a fully managed build service that compiles source code, runs tests, and produces deployable artifacts. CodeDeploy automates code deployment rather than building or testing it, CodeCommit is a source-control repository, and CloudEndure is AWS's disaster-recovery/migration service — none of these compile or test code."
    },
    {
      id: "paper-07-003",
      domain: "S3",
      topic: "s3-pricing",
      type: "multiple-select",
      question: "Which of the following will affect how much you are charged for storing objects in S3? (Choose TWO)",
      options: [
        "Using default encryption for any number of S3 buckets.",
        "The number of EBS volumes attached to your instances.",
        "The storage class used for the objects stored.",
        "Creating and deleting S3 buckets.",
        "The total size in gigabytes of all objects stored."
      ],
      correctAnswer: [2, 4],
      explanation: "S3 storage charges are driven by the storage class selected (e.g., Standard vs. Glacier) and the total size in gigabytes of the objects stored. Enabling default encryption does not add cost, EBS volumes are a separate service unrelated to S3 billing, and simply creating or deleting buckets with no objects in them does not incur storage charges."
    },
    {
      id: "paper-07-004",
      domain: "GLB",
      topic: "cloudfront",
      type: "multiple-select",
      question: "What does the Amazon CloudFront service provide? (Choose TWO)",
      options: [
        "Tracks user activity and APl usage.",
        "Increases application availability by caching at the edge.",
        "Enables faster disaster recovery.",
        "Stores archived data at very low costs.",
        "Delivers content to end users with low latency."
      ],
      correctAnswer: [1, 4],
      explanation: "Amazon CloudFront increases application availability by caching content at Edge Locations and delivers content to end users with low latency by serving it from the location nearest to them. It does not track user activity or API usage (that's CloudTrail or analytics services), disaster recovery is not its purpose, and storing archived data at low cost describes S3 Glacier, not CloudFront."
    },
    {
      id: "paper-07-005",
      domain: "OTH",
      topic: "connect",
      type: "single",
      question: "You are facing a lot of problems with your current contact center. Which service provides a cloud-based contact center that can deliver a better service for your customers?",
      options: [
        "Amazon Lightsail.",
        "Amazon Connect.",
        "AWS Direct Connect.",
        "AWS Elastic Beanstalk."
      ],
      correctAnswer: [1],
      explanation: "Amazon Connect is AWS's cloud-based contact center service, letting companies stand up and scale a customer contact center quickly and deliver better customer service. Lightsail is a simplified virtual server offering, Direct Connect is a dedicated network connection into AWS, and Elastic Beanstalk is an application deployment service — none provide contact center functionality."
    },
    {
      id: "paper-07-006",
      domain: "ACM",
      topic: "cost-usage-report",
      type: "single",
      question: "You have migrated your application to AWS recently. How can you view the AWS costs applied to your account?",
      options: [
        "Using the AWS Cost & Usage Report.",
        "Using the AWS Total Cost of Ownership (TCO) dashboard.",
        "Using the AWS CloudWatch logs dashboard.",
        "Using the Amazon VPC dashboard."
      ],
      correctAnswer: [0],
      explanation: "The AWS Cost & Usage Report provides the most comprehensive, detailed view of the costs and usage applied to an AWS account. The TCO dashboard is used to estimate savings versus on-premises infrastructure rather than show actual incurred costs, the CloudWatch logs dashboard displays application/system logs, and the VPC dashboard manages networking resources — none of these display billing detail."
    },
    {
      id: "paper-07-007",
      domain: "ACM",
      topic: "reserved-instances",
      type: "multiple-select",
      question: "Which of the following are valid Amazon EC2 Reserved Instance types? (Choose TWO)",
      options: [
        "Convertible.",
        "Expedited.",
        "Bulk.",
        "Spot.",
        "Standard."
      ],
      correctAnswer: [0, 4],
      explanation: "Standard and Convertible are the two valid Amazon EC2 Reserved Instance types; Standard offers the largest discount but cannot be changed, while Convertible can be exchanged for a different instance configuration. 'Expedited' and 'Bulk' are not real RI types, and Spot is an entirely separate, unrelated purchasing option based on spare capacity."
    },
    {
      id: "paper-07-008",
      domain: "SEC",
      topic: "artifact",
      type: "single",
      question: "Which of the following services gives you access to all AWS auditor-issued reports and certifications?",
      options: [
        "AWS Artifact.",
        "AWS Config.",
        "Amazon CloudWatch.",
        "AWS CloudTrail."
      ],
      correctAnswer: [0],
      explanation: "AWS Artifact provides on-demand access to AWS's compliance reports and auditor-issued certifications, such as SOC and PCI reports. AWS Config tracks resource configuration changes, CloudWatch monitors operational metrics, and CloudTrail logs API activity — none of these provide compliance certification documents."
    },
    {
      id: "paper-07-009",
      domain: "DEP",
      topic: "resource-groups",
      type: "single",
      question: "You manage a blog on AWS that has different environments: development, testing, and production. What can you use to create a custom console for each environment to view and manage your resources easily?",
      options: [
        "AWS Resource Groups.",
        "AWS Placement Groups.",
        "AWS Management Console.",
        "AWS Tag Editor."
      ],
      correctAnswer: [0],
      explanation: "AWS Resource Groups let you organize resources that share common tags into a custom view, making it easy to manage development, testing, and production resources separately. Placement Groups control the physical placement of EC2 instances for performance, the Management Console is the general AWS interface rather than a filtered custom view, and Tag Editor is used to apply tags, not to build a management console."
    },
    {
      id: "paper-07-010",
      domain: "MON",
      topic: "cloudwatch",
      type: "single",
      question: "Which AWS service collects metrics from running EC2 instances?",
      options: [
        "Amazon Inspector.",
        "Amazon CloudWatch.",
        "AWS CloudFormation.",
        "AWS CloudTrail."
      ],
      correctAnswer: [1],
      explanation: "Amazon CloudWatch collects and tracks metrics such as CPU utilization, network traffic, and disk activity from running EC2 instances. Amazon Inspector performs security vulnerability assessments, CloudFormation provisions infrastructure as code, and CloudTrail logs API calls — none of these collect EC2 performance metrics."
    },
    {
      id: "paper-07-011",
      domain: "MON",
      topic: "x-ray",
      type: "single",
      question: "Your web application currently faces performance issues and suffers from long load times. Which of the following AWS services could help fix these issues and improve performance?",
      options: [
        "Amazon Detective.",
        "AWS X-Ray.",
        "AWS Security Hub.",
        "AWS Shield."
      ],
      correctAnswer: [1],
      explanation: "AWS X-Ray helps developers analyze and debug distributed applications by tracing requests as they move through application components, making it easier to identify the bottlenecks causing slow load times. Amazon Detective investigates security incidents, Security Hub aggregates security findings, and AWS Shield protects against DDoS attacks — none address application performance issues."
    },
    {
      id: "paper-07-012",
      domain: "CMP",
      topic: "serverless",
      type: "multiple-select",
      question: "Which of the following compute resources are serverless? (Choose TWO)",
      options: [
        "Amazon EC2.",
        "AWS Fargate.",
        "AWS Lambda.",
        "Amazon ECS.",
        "Amazon EMR."
      ],
      correctAnswer: [1, 2],
      explanation: "AWS Fargate and AWS Lambda are both serverless — Fargate runs containers and Lambda runs functions without you provisioning or managing any underlying servers. Amazon EC2 requires you to manage virtual servers, Amazon ECS without Fargate still runs on managed EC2 instances, and Amazon EMR requires provisioning and managing a server cluster."
    },
    {
      id: "paper-07-013",
      domain: "EC2",
      topic: "dedicated-hosts",
      type: "single",
      question: "For compliance and regulatory purposes, a government agency requires that their applications must run on hardware that is dedicated to them only. How can you meet this requirement?",
      options: [
        "Use EC2 Dedicated Hosts.",
        "Use EC2 Reserved Instances.",
        "Use EC2 Spot Instances.",
        "Use EC2 On-demand Instances."
      ],
      correctAnswer: [0],
      explanation: "EC2 Dedicated Hosts provide a physical server fully dedicated to a single customer, satisfying compliance requirements that mandate hardware isolation. Reserved Instances and On-Demand Instances are pricing models that can still run on shared hardware, and Spot Instances run on shared, interruptible capacity — none guarantee dedicated physical hardware."
    },
    {
      id: "paper-07-014",
      domain: "ACM",
      topic: "cost-optimization",
      type: "single",
      question: "Which AWS Cost Governance best practice recommends refining workloads regularly to make the most of existing AWS resources and reduce costs?",
      options: [
        "Tagging Enforcement.",
        "Architecture Optimization.",
        "Budgeting Processes.",
        "Resource Controls."
      ],
      correctAnswer: [1],
      explanation: "Architecture Optimization is the cost governance best practice of continually refining workload architecture to make better use of existing AWS resources and lower costs. Tagging Enforcement is about cost allocation visibility, Budgeting Processes is about setting spending controls, and Resource Controls is about restricting resource creation — none focus on refining the workload's architecture itself."
    },
    {
      id: "paper-07-015",
      domain: "DBA",
      topic: "rds",
      type: "single",
      question: "An organization needs to build a financial application that requires support for ACID transactions. Which AWS database service is most appropriate in this case?",
      options: [
        "RedShift.",
        "RDS.",
        "CloudHSM.",
        "DMS."
      ],
      correctAnswer: [1],
      explanation: "Amazon RDS is a managed relational database service that supports ACID-compliant transactions, making it well suited for financial applications that require transactional integrity. Redshift is a data warehouse optimized for analytics rather than transactional workloads, CloudHSM is a hardware security module for key management rather than a database, and DMS is a migration tool, not a database engine."
    },
    {
      id: "paper-07-016",
      domain: "IAM",
      topic: "iam-policy",
      type: "single",
      question: "What can you use to assign permissions directly to an IAM user?",
      options: [
        "IAM Identity.",
        "IAM Group.",
        "IAM Role.",
        "IAM Policy."
      ],
      correctAnswer: [3],
      explanation: "An IAM Policy is the document that defines and directly assigns permissions to an IAM user. 'IAM Identity' is not a distinct AWS construct, an IAM Group assigns permissions to multiple users collectively rather than to one user directly, and an IAM Role is intended for temporary, assumable access rather than permanently attaching permissions to a specific user."
    },
    {
      id: "paper-07-017",
      domain: "CLD",
      topic: "elasticity",
      type: "single",
      question: "The owner of an E-Commerce application notices that the compute capacity requirements vary heavily from time to time. What makes AWS more economical than traditional data centers for this type of application?",
      options: [
        "AWS allows customers to launch powerful EC2 instances to handle spikes in load.",
        "AWS allows customers to pay upfront to get bigger discounts.",
        "AWS allows customers to launch and terminate EC2 instances based on demand.",
        "AWS allows customers to choose cheaper types of EC2 instances that best fit their needs."
      ],
      correctAnswer: [2],
      explanation: "AWS is more economical for variable workloads because customers can launch EC2 instances when demand rises and terminate them when demand falls, paying only for what they use — this elasticity isn't possible with fixed traditional data center capacity. Launching more powerful instances doesn't address variable demand economically, paying upfront for discounts assumes steady predictable usage, and choosing cheaper instance types is a general tip rather than the reason AWS suits fluctuating loads."
    },
    {
      id: "paper-07-018",
      domain: "DBA",
      topic: "rds",
      type: "single",
      question: "Amazon RDS supports multiple database engines to choose from. Which of the following is not one of them?",
      options: [
        "PostgreSQL.",
        "Oracle.",
        "Microsoft SQL Server.",
        "Teradata."
      ],
      correctAnswer: [3],
      explanation: "Amazon RDS supports PostgreSQL, Oracle, Microsoft SQL Server, MySQL, MariaDB, and Aurora as database engines, but Teradata is not one of the supported RDS engines. PostgreSQL, Oracle, and Microsoft SQL Server are all valid, supported RDS engine options."
    },
    {
      id: "paper-07-019",
      domain: "OTH",
      topic: "database-migration-service",
      type: "single",
      question: "Which of the following AWS services would help you migrate on-premise databases to AWS?",
      options: [
        "AWS DMS.",
        "Amazon S3 Transfer Acceleration.",
        "AWS Directory Service.",
        "AWS Transit Gateway."
      ],
      correctAnswer: [0],
      explanation: "AWS Database Migration Service (DMS) is purpose-built to migrate on-premises databases into AWS with minimal downtime and without impacting the source database. Amazon S3 Transfer Acceleration speeds up file uploads to S3 rather than migrating databases, AWS Directory Service manages directories like Active Directory, and AWS Transit Gateway is a networking hub for connecting VPCs and on-premises networks."
    },
    {
      id: "paper-07-020",
      domain: "CMP",
      topic: "lightsail",
      type: "single",
      question: "For new AWS customers, what is the EASIEST way to launch a simple WordPress website on AWS?",
      options: [
        "Run WordPress on an Amazon Lightsail instance.",
        "Install WordPress on an Amazon EC2 instance.",
        "Use the Amazon S3 Web hosting feature.",
        "Host the website directly on AWS Cloud Development Kit (AWS CDK)."
      ],
      correctAnswer: [0],
      explanation: "Amazon Lightsail offers pre-configured, easy-to-launch virtual private server bundles, including one-click WordPress blueprints, making it the simplest way for new customers to get a WordPress site running. Installing WordPress manually on EC2 requires far more setup and configuration, S3 static website hosting can't run WordPress's PHP/database backend, and the AWS CDK is an infrastructure-as-code framework, not a hosting shortcut."
    },
    {
      id: "paper-07-021",
      domain: "SEC",
      topic: "kms",
      type: "multiple-select",
      question: "Which of the following would you use to manage your encryption keys in the AWS Cloud? (Choose TWO)",
      options: [
        "AWS KMS.",
        "AWS Certificate Manager.",
        "AWS CodeDeploy.",
        "AWS CodeCommit.",
        "CloudHSM."
      ],
      correctAnswer: [0, 4],
      explanation: "AWS KMS lets you create and manage encryption keys for use across AWS services, and AWS CloudHSM provides dedicated hardware security modules for customers who need to generate and control their own keys under stricter compliance requirements. AWS Certificate Manager issues and manages SSL/TLS certificates rather than general encryption keys, and CodeDeploy/CodeCommit are software development and deployment tools unrelated to key management."
    },
    {
      id: "paper-07-022",
      domain: "EC2",
      topic: "ec2",
      type: "single",
      question: "Which of the following services allows you to install and run custom relational database software?",
      options: [
        "Amazon EC2.",
        "Amazon Cognito.",
        "Amazon RDS.",
        "Amazon Inspector."
      ],
      correctAnswer: [0],
      explanation: "Amazon EC2 gives you full control over the operating system, letting you install and run any custom relational database software of your choice. Amazon RDS is a managed service that only supports specific pre-configured database engines, so you cannot install custom database software on it, Cognito handles user authentication, and Inspector performs security assessments."
    },
    {
      id: "paper-07-023",
      domain: "ELB",
      topic: "auto-scaling",
      type: "single",
      question: "Your application requirements for CPU and RAM are changing in an unpredictable way. Which service can be used to dynamically adjust these resources based on load?",
      options: [
        "Auto Scaling.",
        "ELB.",
        "Amazon Route53.",
        "Amazon Elastic Container Service."
      ],
      correctAnswer: [0],
      explanation: "Auto Scaling automatically adjusts the amount of compute capacity to match unpredictable changes in CPU and RAM demand, adding or removing resources as load changes. Elastic Load Balancing distributes traffic across existing capacity but doesn't itself add or remove resources, Route 53 is a DNS service, and Amazon ECS is a container orchestration service that still relies on Auto Scaling to adjust capacity."
    },
    {
      id: "paper-07-024",
      domain: "IAM",
      topic: "iam",
      type: "single",
      question: "A company has infrastructure hosted in an on-premises data center. They currently have an operations team that takes care of identity management. If they decide to migrate to the AWS cloud, which of the following services would help them perform the same role in AWS?",
      options: [
        "AWS IAM.",
        "AWS Outposts.",
        "AWS Federation.",
        "Amazon Redshift."
      ],
      correctAnswer: [0],
      explanation: "AWS Identity and Access Management (IAM) lets you manage users, groups, and permissions in AWS, fulfilling the same role that an on-premises identity management team performs. AWS Outposts extends AWS infrastructure on-premises rather than managing identity, 'AWS Federation' describes a capability rather than a distinct managed service, and Amazon Redshift is a data warehouse unrelated to identity."
    },
    {
      id: "paper-07-025",
      domain: "ARC",
      topic: "well-architected",
      type: "multiple-select",
      question: "What are some key design principles for designing public cloud systems? (Choose TWO)",
      options: [
        "Reserved capacity instead of on demand.",
        "Loose coupling over tight coupling.",
        "Servers instead of managed services.",
        "Disposable resources instead of fixed servers.",
        "Multi-AZ deployments instead of multi-region deployments."
      ],
      correctAnswer: [1, 3],
      explanation: "Two key cloud design principles are favoring loose coupling over tight coupling, so components can fail or scale independently, and using disposable resources instead of fixed servers, treating infrastructure as replaceable rather than permanent. Reserving capacity instead of using on-demand resources works against elasticity, favoring plain servers over managed services increases operational overhead, and choosing multi-AZ over multi-region is not a general design principle since multi-region is actually preferred for the highest resilience."
    },
    {
      id: "paper-07-026",
      domain: "IAM",
      topic: "iam-credential-report",
      type: "single",
      question: "Where can AWS account owners get a list of all users in their account, including the status of their AWS credentials?",
      options: [
        "AWS CloudTrail Trails.",
        "IAM Credential Report.",
        "AWS Artifact reports.",
        "AWS Cost and Usage Report."
      ],
      correctAnswer: [1],
      explanation: "The IAM Credential Report lists all IAM users in an account along with the status of their passwords, access keys, and MFA devices. CloudTrail Trails record API activity rather than a list of users and credential status, AWS Artifact provides compliance reports, and the Cost and Usage Report details billing, not user credentials."
    },
    {
      id: "paper-07-027",
      domain: "SEC",
      topic: "cloudhsm",
      type: "single",
      question: "Which of the following services enables you to easily generate and use your own encryption keys in the AWS Cloud?",
      options: [
        "AWS Shield.",
        "AWS Certificate Manager.",
        "AWS CloudHSM.",
        "AWS WAF."
      ],
      correctAnswer: [2],
      explanation: "AWS CloudHSM provides dedicated hardware security modules that let customers generate, store, and manage their own encryption keys under their exclusive control. AWS Shield protects against DDoS attacks, AWS Certificate Manager issues SSL/TLS certificates, and AWS WAF filters malicious web traffic — none let you generate and control your own encryption keys."
    },
    {
      id: "paper-07-028",
      domain: "GLB",
      topic: "multi-region",
      type: "single",
      question: "You have developed a web application targeting a global audience. Which of the following will help you achieve the highest redundancy and fault tolerance from an infrastructure perspective?",
      options: [
        "There is no need to architect for these capabilities in AWS, as AWS is redundant by default.",
        "Deploy the application in a single Availability Zone.",
        "Deploy the application in multiple Availability Zones in a single AWS region.",
        "Deploy the application in multiple Availability Zones in multiple AWS regions."
      ],
      correctAnswer: [3],
      explanation: "Deploying across multiple Availability Zones in multiple AWS Regions provides the highest level of redundancy and fault tolerance, protecting against both data-center-level and entire-Region-level failures. Redundancy still requires deliberate architecture rather than happening automatically, a single Availability Zone offers no protection from an AZ failure, and multiple AZs within just one Region protects against AZ failure but not a full Region outage."
    },
    {
      id: "paper-07-029",
      domain: "S3",
      topic: "high-availability",
      type: "multiple-select",
      question: "For some services, AWS automatically replicates data across multiple Availability Zones to provide fault tolerance in the event of a server failure or Availability Zone outage. Select TWO services that automatically replicate data across Availability Zones.",
      options: [
        "Instance Store.",
        "S3.",
        "DynamoDB.",
        "Amazon Route 53.",
        "AWS VPN."
      ],
      correctAnswer: [1, 2],
      explanation: "Amazon S3 and Amazon DynamoDB are both AWS-managed services that automatically and synchronously replicate data across multiple Availability Zones within a Region, providing built-in fault tolerance. Instance Store data is tied to the underlying host and is lost if that host fails, Route 53 is a DNS service rather than a data store, and AWS VPN is a network connectivity service — neither replicates stored data across AZs."
    },
    {
      id: "paper-07-030",
      domain: "GLB",
      topic: "cloudfront",
      type: "multiple-select",
      question: "Which of the following factors affect Amazon CloudFront cost? (Choose TWO)",
      options: [
        "Number of Requests.",
        "Traffic Distribution.",
        "Number of Volumes.",
        "Instance type.",
        "Storage Class."
      ],
      correctAnswer: [0, 1],
      explanation: "Amazon CloudFront costs are primarily driven by the number of requests served and the geographic distribution of traffic, since data transferred to different regions is billed at different rates. 'Number of Volumes' applies to EBS, 'Instance type' applies to EC2, and 'Storage Class' applies to S3 — none of these affect CloudFront pricing."
    },
    {
      id: "paper-07-031",
      domain: "SEC",
      topic: "acceptable-use-policy",
      type: "single",
      question: "Which of the following resources can an AWS customer use to learn more about prohibited uses of the services offered by AWS?",
      options: [
        "AWS Service Control Policies (SCPs).",
        "AWS Artifact.",
        "AWS Budgets.",
        "AWS Acceptable Use Policy."
      ],
      correctAnswer: [3],
      explanation: "The AWS Acceptable Use Policy defines prohibited and restricted uses of AWS services, such as illegal activities or security violations, and customers can review it to understand what usage is not allowed. Service Control Policies restrict what actions AWS accounts can perform as an internal governance tool rather than a public usage policy, AWS Artifact provides compliance reports, and AWS Budgets manages spending — none define prohibited service uses."
    },
    {
      id: "paper-07-032",
      domain: "SEC",
      topic: "security-resources",
      type: "multiple-select",
      question: "Which of the following security resources are available to any user for free? (Choose TWO)",
      options: [
        "AWS Bulletins.",
        "AWS TAM.",
        "AWS Support APl.",
        "AWS Security Blog.",
        "AWS Classroom Training."
      ],
      correctAnswer: [0, 3],
      explanation: "AWS Security Bulletins and the AWS Security Blog are both free resources available to any user, providing security notifications and best-practice guidance. An AWS Technical Account Manager (TAM) and the AWS Support API are only available with paid Enterprise or Business support tiers, and AWS Classroom Training is a paid, instructor-led offering."
    },
    {
      id: "paper-07-033",
      domain: "S3",
      topic: "versioning",
      type: "single",
      question: "How can you protect data stored on Amazon S3 from accidental deletion?",
      options: [
        "By enabling S3 Versioning.",
        "By configuring S3 Bucket Policies.",
        "By configuring S3 Lifecycle Policies.",
        "By disabling S3 Cross-Region Replication (CRR)."
      ],
      correctAnswer: [0],
      explanation: "Enabling S3 Versioning keeps multiple versions of an object, so an accidentally deleted object can be recovered by restoring a previous version. Bucket Policies control who can access objects but don't prevent an authorized user from deleting them, Lifecycle Policies manage automatic transitions or expiration and can even cause deletion, and disabling Cross-Region Replication removes a protective feature rather than adding one."
    },
    {
      id: "paper-07-034",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "Which of the following is the responsibility of AWS according to the AWS Shared Responsibility Model?",
      options: [
        "Securing regions and edge locations.",
        "Performing auditing tasks.",
        "Monitoring AWS resources usage.",
        "Securing access to AWS resources."
      ],
      correctAnswer: [0],
      explanation: "Under the AWS Shared Responsibility Model, AWS is responsible for security 'of' the cloud, which includes physically securing its Regions, Availability Zones, and Edge Locations. Performing auditing tasks, monitoring your own resource usage, and securing access to your AWS resources via IAM are all customer responsibilities, i.e., security 'in' the cloud."
    },
    {
      id: "paper-07-035",
      domain: "ACM",
      topic: "support",
      type: "single",
      question: "Which of the following AWS support plans provides access to only the seven core AWS Trusted Advisor checks?",
      options: [
        "Business & Enterprise Support.",
        "Basic & Developer Support.",
        "Developer & Enterprise Support.",
        "Developer & Business Support."
      ],
      correctAnswer: [1],
      explanation: "Only the Basic and Developer Support plans are limited to the seven core Trusted Advisor checks covering security, service limits, and fault tolerance; the Business and Enterprise Support plans unlock the full set of Trusted Advisor checks. The other answer choices incorrectly pair a full-access plan (Business or Enterprise) with a limited-access plan."
    },
    {
      id: "paper-07-036",
      domain: "CMP",
      topic: "lambda",
      type: "single",
      question: "Which of the following is NOT a benefit of using AWS Lambda?",
      options: [
        "AWS Lambda runs code without provisioning or managing servers.",
        "AWS Lambda provides resizable compute capacity in the cloud.",
        "There is no charge when your AWS Lambda code is not running.",
        "AWS Lambda can be called directly from any mobile app."
      ],
      correctAnswer: [3],
      explanation: "AWS Lambda is designed to be invoked through defined event sources or APIs, such as API Gateway, rather than being called directly and securely from any mobile app, so this is not an accurate benefit of the service. Running code without provisioning or managing servers, providing scalable compute capacity, and charging nothing when code isn't running are all genuine, well-documented benefits of AWS Lambda."
    },
    {
      id: "paper-07-037",
      domain: "SEC",
      topic: "compliance",
      type: "single",
      question: "How does AWS help customers achieve compliance in the cloud?",
      options: [
        "It’s not possible to meet regulatory compliance requirements in the Cloud.",
        "AWS applies the most common Cloud security standards, and is responsible for complying with customers’ applicable laws and regulations.",
        "AWS has many common assurance certifications such as ISO 9001 and HIPAA.",
        "Many AWS services are assessed regularly to comply with local laws and regulations."
      ],
      correctAnswer: [2],
      explanation: "AWS holds numerous common assurance certifications, such as ISO 9001 and HIPAA eligibility, which customers can rely on to help meet their own compliance obligations. It is entirely possible to meet regulatory requirements in the cloud, AWS is not responsible for a customer's own legal or regulatory compliance, and framing it as merely assessing services against local laws overstates AWS's role compared to holding recognized certifications."
    },
    {
      id: "paper-07-038",
      domain: "DBA",
      topic: "dynamodb",
      type: "single",
      question: "Who is responsible for scaling a DynamoDB database in the AWS Shared Responsibility Model?",
      options: [
        "Your security team.",
        "Your development team.",
        "AWS.",
        "Your internal DevOps team."
      ],
      correctAnswer: [2],
      explanation: "Amazon DynamoDB is a fully managed NoSQL database, so AWS is responsible for scaling the underlying infrastructure to handle throughput and storage needs. This scaling is not something the customer's security, development, or DevOps teams need to handle themselves, since it falls under AWS's side of the Shared Responsibility Model for managed services."
    },
    {
      id: "paper-07-039",
      domain: "OTH",
      topic: "elastic-transcoder",
      type: "single",
      question: "You are working as a web app developer. You are currently facing issues in media playback for mobile devices because your media format is not supported. Which of the following AWS services can help you convert your media into another format?",
      options: [
        "Amazon Elastic Transcoder.",
        "Amazon Pinpoint.",
        "AmazonS3.",
        "Amazon Rekognition."
      ],
      correctAnswer: [0],
      explanation: "Amazon Elastic Transcoder converts media files from their source format into versions that will play on different devices, such as smartphones and tablets. Amazon Pinpoint is a customer engagement/marketing service, Amazon S3 is object storage and doesn't convert media formats, and Amazon Rekognition analyzes image/video content rather than transcoding it."
    },
    {
      id: "paper-07-040",
      domain: "ACM",
      topic: "organizations",
      type: "multiple-select",
      question: "What are the benefits of the AWS Organizations service? (Choose TWO)",
      options: [
        "Control access to AWS services.",
        "Help organizations design and maintain an accelerated path to successful cloud adoption.",
        "Manage your organization’s payment methods.",
        "Help organization achieve their desired business outcomes with AWS.",
        "Consolidate billing across multiple AWS accounts."
      ],
      correctAnswer: [0, 4],
      explanation: "AWS Organizations lets you control access to AWS services across accounts using Service Control Policies, and it consolidates billing across all member accounts into a single payment method with combined volume discounts. Helping design a cloud adoption path and achieving business outcomes describe broader AWS Professional Services or consulting engagements, and Organizations does not itself manage payment methods — it consolidates the billing that results from them."
    },
    {
      id: "paper-07-041",
      domain: "DBA",
      topic: "redshift",
      type: "single",
      question: "Which AWS service allows you to build a data warehouse in the cloud?",
      options: [
        "AWS Shield.",
        "Amazon Redshift.",
        "Amazon RDS.",
        "Amazon Comprehend."
      ],
      correctAnswer: [1],
      explanation: "Amazon Redshift is AWS's fully managed data warehouse service, built for large-scale analytics and complex queries across massive datasets. AWS Shield is DDoS protection, Amazon RDS is designed for transactional (OLTP) relational workloads rather than warehousing, and Amazon Comprehend is a natural language processing service."
    },
    {
      id: "paper-07-042",
      domain: "ARC",
      topic: "aws-marketplace",
      type: "single",
      question: "What AWS service allows you to buy third-party software solutions and services that run on AWS resources?",
      options: [
        "AWS Application Discovery service.",
        "Amazon DevPay.",
        "AWS Marketplace.",
        "Resource Groups."
      ],
      correctAnswer: [2],
      explanation: "AWS Marketplace is an online store where customers can find, buy, and deploy third-party software and services that run on AWS infrastructure. AWS Application Discovery Service inventories on-premises servers for migration planning, Amazon DevPay was a discontinued billing service for software vendors, and Resource Groups organize your own AWS resources rather than sell software."
    },
    {
      id: "paper-07-043",
      domain: "DEP",
      topic: "codecommit",
      type: "single",
      question: "Which of the following services is an AWS repository management system that allows for storing, versioning, and managing your application code?",
      options: [
        "AWS CodePipeline.",
        "AWS CodeCommit.",
        "AWS X-Ray.",
        "Amazon Inspector."
      ],
      correctAnswer: [1],
      explanation: "AWS CodeCommit is a fully managed source-control service that lets you host private Git repositories for storing, versioning, and managing application code. CodePipeline automates release pipelines rather than storing repositories, X-Ray traces application requests, and Amazon Inspector performs security assessments — none manage source code repositories."
    },
    {
      id: "paper-07-044",
      domain: "GLB",
      topic: "route-53",
      type: "single",
      question: "Which AWS service can be used to route end users to the nearest AWS Region to reduce latency?",
      options: [
        "Amazon Cognito.",
        "AWS Systems Manager.",
        "AWS Cloud9.",
        "Amazon Route 53."
      ],
      correctAnswer: [3],
      explanation: "Amazon Route 53 supports latency-based routing, directing end users to the AWS Region that provides the lowest network latency for them. Amazon Cognito manages user authentication, AWS Systems Manager handles operational tasks across resources, and AWS Cloud9 is a cloud IDE — none perform DNS-based traffic routing."
    },
    {
      id: "paper-07-045",
      domain: "AID",
      topic: "federation",
      type: "single",
      question: "Which feature enables users to sign into their AWS accounts with their existing corporate credentials?",
      options: [
        "Federation.",
        "Access keys.",
        "IAM Permissions.",
        "WAF rules."
      ],
      correctAnswer: [0],
      explanation: "Federation allows users to sign into AWS using their existing corporate identity credentials, rather than creating separate IAM users, by establishing trust between the identity provider and AWS. Access keys are programmatic credentials for API/CLI access, IAM Permissions define what an already-authenticated identity can do, and WAF rules filter web traffic — none relate to signing in with existing corporate credentials."
    },
    {
      id: "paper-07-046",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "multiple-select",
      question: "According to the AWS shared responsibility model, what are the controls that customers fully inherit from AWS? (Choose TWO)",
      options: [
        "Awareness and Training.",
        "Communications controls.",
        "Data center security controls.",
        "Environmental controls.",
        "Resource Configuration Management."
      ],
      correctAnswer: [2, 3],
      explanation: "Data center security controls and Environmental controls, such as fire suppression, power, and climate control, are examples of controls that customers fully inherit from AWS since AWS manages the physical facilities entirely. Awareness and Training and Resource Configuration Management are the customer's own responsibility, and Communications controls are a shared responsibility between AWS and the customer."
    },
    {
      id: "paper-07-047",
      domain: "MON",
      topic: "health-dashboard",
      type: "single",
      question: "What can you access by visiting the URL: http://status.aws.amazon.com?",
      options: [
        "AWS Billing Dashboard.",
        "AWS Cost Dashboard.",
        "AWS Service Health Dashboard.",
        "AWS Security Dashboard."
      ],
      correctAnswer: [2],
      explanation: "Visiting status.aws.amazon.com takes you to the AWS Service Health Dashboard, which displays the current operating status of AWS services across all Regions. There is no 'AWS Billing Dashboard,' 'AWS Cost Dashboard,' or 'AWS Security Dashboard' accessible at that specific URL."
    },
    {
      id: "paper-07-048",
      domain: "GLB",
      topic: "cloudfront",
      type: "multiple-select",
      question: "Which of the following procedures can reduce latency when your end users are retrieving data? (Choose TWO)",
      options: [
        "Store media assets in the region closest to your end users.",
        "Store media assets on an additional EBS volume and increase the capacity of your server.",
        "Replicate media assets to at least two availability zones.",
        "Reduce the size of media assets using the Amazon Elastic Transcoder.",
        "Store media assets in S3 and use CloudFront to distribute these assets."
      ],
      correctAnswer: [0, 4],
      explanation: "Storing media assets in the AWS Region closest to end users reduces the physical distance data must travel, and storing assets in S3 while distributing them through CloudFront caches content at Edge Locations near users — both directly reduce latency. Adding an EBS volume and increasing server capacity addresses compute/storage capacity rather than network latency, replicating across Availability Zones improves availability within a single Region rather than reducing latency for distant global users, and reducing file size with Elastic Transcoder helps transfer time somewhat but doesn't address geographic latency the way regional placement or a CDN does."
    },
    {
      id: "paper-07-049",
      domain: "ARC",
      topic: "well-architected",
      type: "multiple-select",
      question: "Which of the following are part of the seven design principles for security in the cloud? (Choose TWO)",
      options: [
        "Use manual monitoring techniques to protect your AWS resources.",
        "Use IAM roles to grant temporary access instead of long-term credentials.",
        "Scale horizontally to protect from failures.",
        "Enable real-time traceability.",
        "Never store sensitive data in the cloud."
      ],
      correctAnswer: [1, 3],
      explanation: "Two of the seven AWS security design principles are using IAM roles to grant temporary access instead of relying on long-term credentials, and enabling real-time traceability by monitoring, alerting, and auditing actions as they happen. Manual monitoring contradicts the principle of automating security best practices, scaling horizontally relates to reliability rather than the security pillar, and never storing sensitive data in the cloud is impractical and not one of the actual principles, which instead recommend protecting data appropriately."
    },
    {
      id: "paper-07-050",
      domain: "ACM",
      topic: "cost-allocation-tags",
      type: "single",
      question: "A company is migrating production workloads to AWS, and they are concerned about cost management across different departments. Which option should the company implement to categorize and track AWS spending?",
      options: [
        "Use the AWS Pricing Calculator service to monitor the costs incurred by each department.",
        "Use Amazon Aurora to forecast AWS spending based on usage.",
        "Apply cost allocation tags to segment AWS costs by different e projects and departments.",
        "Configure AWS Price List API to receive billing updates for each department automatically."
      ],
      correctAnswer: [2],
      explanation: "Applying cost allocation tags lets you label AWS resources by project or department, so costs can be organized, filtered, and tracked in Cost Explorer and billing reports. The Pricing Calculator only estimates future costs rather than tracking actual spend by department, Amazon Aurora is a database with no cost-forecasting features, and the AWS Price List API returns raw pricing data rather than segmenting actual incurred costs by department."
    }
  ]
});
