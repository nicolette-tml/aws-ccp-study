window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "paper-06",
  paperId: "paper-06",
  paperName: "Practice Paper 6",
  questions: [
    {
      id: "paper-06-001",
      domain: "GLB",
      topic: "availability-zones",
      type: "single",
      question: "Which of the following is true regarding the AWS availability zones and edge locations?",
      options: [
        "Edge locations are located in separate Availability Zones worldwide to serve global customers.",
        "An availability zone exists within an edge location to distribute content globally with low latency.",
        "An Availability Zone is a geographic location where AWS provides multiple, physically separated and isolated edge locations.",
        "An AWS Availability Zone is an isolated location within an AWS Region, however edge locations are located in multiple cities worldwide."
      ],
      correctAnswer: [3],
      explanation: "An AWS Availability Zone is one or more isolated data centers within an AWS Region, while Edge Locations are separate, smaller sites located in many cities around the world that CloudFront uses to cache content close to users. Edge locations are not located inside Availability Zones, and an Availability Zone is not made up of edge locations or used to distribute content globally — these are two distinct parts of AWS's global infrastructure serving different purposes."
    },
    {
      id: "paper-06-002",
      domain: "ACM",
      topic: "support",
      type: "multiple-select",
      question: "Which features are included in the AWS Business Support Plan? (Choose TWO)",
      options: [
        "24x7 access to customer service.",
        "Access to Cloud Support Engineers via email only during business hours.",
        "Access to the Infrastructure Event Management (IEM) feature for additional fee.",
        "24x7 access to the TAM feature.",
        "Partial access to the core Trusted Advisor checks."
      ],
      correctAnswer: [0, 2],
      explanation: "The AWS Business Support plan includes 24x7 access to Cloud Support Engineers via phone, chat, and email, and it grants access to the Infrastructure Event Management (IEM) feature for an additional fee. Access to Cloud Support Engineers is not limited to email only or to business hours, 24x7 access to a Technical Account Manager (TAM) is reserved for the Enterprise plan, and Business Support provides full (not partial) access to all Trusted Advisor checks."
    },
    {
      id: "paper-06-003",
      domain: "AID",
      topic: "cognito",
      type: "single",
      question: "A company is developing a mobile application and wants to allow users to use their Amazon, Apple, Facebook, or Google identities to authenticate to the application. Which AWS Service should the company use for this purpose?",
      options: [
        "Amazon GuardDuty.",
        "Amazon Personalize.",
        "Amazon Cognito.",
        "AWS IAM."
      ],
      correctAnswer: [2],
      explanation: "Amazon Cognito lets mobile and web applications authenticate users through their existing social or corporate identities, such as Amazon, Apple, Facebook, or Google, using identity federation. Amazon GuardDuty is a threat-detection service, Amazon Personalize builds recommendation engines, and AWS IAM manages access for AWS resources and internal accounts, not external app end users."
    },
    {
      id: "paper-06-004",
      domain: "DEP",
      topic: "cloudformation",
      type: "single",
      question: "Which AWS Service allows customers to create a template that programmatically defines policies and configurations of all AWS resources as code and so that the same template can be reused among multiple projects?",
      options: [
        "AWS CloudFormation.",
        "AWS Config.",
        "AWS CloudTrail.",
        "AWS Auto Scaling."
      ],
      correctAnswer: [0],
      explanation: "AWS CloudFormation lets customers define AWS resources and their configurations as reusable, version-controlled templates written as code, which can be deployed repeatedly across multiple projects. AWS Config tracks and audits resource configuration changes rather than provisioning them, AWS CloudTrail logs API activity, and AWS Auto Scaling only adjusts compute capacity — none of these define infrastructure as reusable templates."
    },
    {
      id: "paper-06-005",
      domain: "CLD",
      topic: "cloud-benefits",
      type: "multiple-select",
      question: "Which of the following are advantages of using AWS as a cloud computing provider? (Choose TWO)",
      options: [
        "Eliminates the need to monitor servers and applications.",
        "Manages all the compliance and auditing tasks.",
        "Provides custom hardware to meet any specification.",
        "Eliminates the need to guess on infrastructure capacity needs.",
        "Enables customers to trade their capital expenses for operational expenses."
      ],
      correctAnswer: [3, 4],
      explanation: "AWS eliminates the need to guess infrastructure capacity in advance, since resources can be scaled up or down as actual demand changes, and it lets customers trade upfront capital expenses for variable operational expenses paid only as they consume resources. AWS does not eliminate the need for customers to monitor their own servers and applications, it does not manage all compliance and auditing tasks on the customer's behalf (that's shared responsibility), and it does not provide custom hardware built to any specification."
    },
    {
      id: "paper-06-006",
      domain: "DBA",
      topic: "rds",
      type: "multiple-select",
      question: "A customer is planning to migrate their Microsoft SQL Server databases to AWS. Which AWS Services can the customer use to run their Microsoft SQL Server database on AWS? (Choose TWO)",
      options: [
        "AWS Fargate.",
        "Amazon Elastic Compute Cloud.",
        "Amazon RDS.",
        "AWS Database Migration service (DMS).",
        "AWS Lambda."
      ],
      correctAnswer: [1, 2],
      explanation: "Microsoft SQL Server databases can be run on AWS either self-managed on Amazon EC2 instances or as a fully managed engine option within Amazon RDS. AWS Fargate and AWS Lambda are serverless compute services not designed to directly host a relational database engine, and AWS Database Migration Service (DMS) is used to migrate data into a database, not to host the database itself."
    },
    {
      id: "paper-06-007",
      domain: "GLB",
      topic: "route-53",
      type: "single",
      question: "Which AWS Service can perform health checks on Amazon EC2 instances?",
      options: [
        "AWS CloudFormation.",
        "Amazon Route 53.",
        "Amazon Chime.",
        "Amazon Aurora."
      ],
      correctAnswer: [1],
      explanation: "Amazon Route 53 can perform health checks on EC2 instances and other endpoints, and it routes DNS traffic away from unhealthy resources. AWS CloudFormation provisions infrastructure, Amazon Chime is a communications and meetings service, and Amazon Aurora is a relational database — none of these perform endpoint health checks."
    },
    {
      id: "paper-06-008",
      domain: "ML",
      topic: "rekognition",
      type: "single",
      question: "A company is developing an application that will leverage facial recognition to automate photo tagging. Which AWS Service should the company use for facial recognition?",
      options: [
        "Amazon Comprehend.",
        "AWS IAM.",
        "Amazon Polly.",
        "Amazon Rekognition."
      ],
      correctAnswer: [3],
      explanation: "Amazon Rekognition is AWS's image and video analysis service, offering facial recognition and analysis capabilities that can automate photo tagging. Amazon Comprehend performs natural-language text analysis, AWS IAM manages access permissions, and Amazon Polly converts text to speech — none of these perform facial recognition."
    },
    {
      id: "paper-06-009",
      domain: "DBA",
      topic: "managed-services",
      type: "multiple-select",
      question: "Which of the following are examples of AWS-managed databases? (Choose TWO)",
      options: [
        "Amazon Neptune.",
        "Amazon CloudSearch.",
        "Microsoft SQL Server on Amazon EC2.",
        "MySQL on Amazon EC2.",
        "Amazon RDS for MySQL."
      ],
      correctAnswer: [0, 4],
      explanation: "Amazon Neptune and Amazon RDS for MySQL are both fully AWS-managed database services, where AWS handles the underlying provisioning, patching, and maintenance. Amazon CloudSearch is a managed search service, not a database, while Microsoft SQL Server or MySQL installed on Amazon EC2 are self-managed databases where the customer is responsible for the operating system and database software."
    },
    {
      id: "paper-06-010",
      domain: "ACM",
      topic: "spot-instances",
      type: "single",
      question: "A company’s AWS workflow requires that it periodically perform large-scale image and video processing jobs. The customer is seeking to minimize cost and has stated that the amount of time it takes to process these jobs is not critical, but that cost minimization is the most important factor in designing the solution. Which EC2 instance class is best suited for this processing?",
      options: [
        "EC2 On-Demand Instances.",
        "EC2 Reserved Instances - No Upfront.",
        "EC2 Spot Instances.",
        "EC2 Reserved Instances - All Upfront."
      ],
      correctAnswer: [2],
      explanation: "EC2 Spot Instances offer the deepest discounts (up to 90% off On-Demand) for flexible, fault-tolerant workloads like large-scale batch image and video processing where completion time isn't critical, making them the most cost-effective choice. On-Demand instances cost more with no discount, and both Reserved Instance options require a long-term commitment that isn't suited to intermittent batch jobs focused purely on minimizing cost."
    },
    {
      id: "paper-06-011",
      domain: "IAM",
      topic: "root-user",
      type: "single",
      question: "There is a requirement to grant a DevOps team full administrative access to all resources in an AWS account. Who can grant them these permissions?",
      options: [
        "AWS account owner.",
        "AWS technical account manager.",
        "AWS security team.",
        "AWS cloud support engineers."
      ],
      correctAnswer: [0],
      explanation: "Only the AWS account owner, using the root user, has the authority to grant full administrative access to all resources in an account, since permission delegation is ultimately controlled at the account level. A technical account manager, the AWS security team, and cloud support engineers are AWS-side support roles with no ability to grant IAM permissions within a customer's account."
    },
    {
      id: "paper-06-012",
      domain: "OTH",
      topic: "server-migration-service",
      type: "single",
      question: "You need to migrate a large number of on-premises workloads to AWS. Which AWS service is the most appropriate?",
      options: [
        "AWS File Transfer Acceleration.",
        "AWS Server Migration Service.",
        "AWS Database Migration Service.",
        "AWS Application Discovery Service."
      ],
      correctAnswer: [1],
      explanation: "AWS Server Migration Service (SMS) is purpose-built to migrate large numbers of on-premises virtual machine workloads to AWS, automating replication and incrementally copying server volumes. AWS File Transfer Acceleration speeds up S3 uploads, AWS Database Migration Service is for migrating databases specifically, and AWS Application Discovery Service only inventories on-premises servers rather than migrating them."
    },
    {
      id: "paper-06-013",
      domain: "DEP",
      topic: "cloudformation",
      type: "multiple-select",
      question: "What are some key benefits of using AWS CloudFormation? (Choose TWO)",
      options: [
        "It helps AWS customers deploy their applications without worrying about the underlying infrastructure.",
        "It applies advanced IAM security features automatically.",
        "It automates the provisioning and updating of your infrastructure in a safe and controlled manner.",
        "It allows you to model your entire infrastructure in just a text file.",
        "It compiles and builds application code in a timely manner."
      ],
      correctAnswer: [2, 3],
      explanation: "AWS CloudFormation automates the provisioning and updating of infrastructure in a safe, predictable, and repeatable manner, and it lets you model your entire infrastructure using a simple text file. It does not automatically apply advanced IAM security configurations, deploying applications without worrying about infrastructure describes platform services like Elastic Beanstalk, and compiling and building application code is handled by CI/CD build tools, not CloudFormation."
    },
    {
      id: "paper-06-014",
      domain: "CLD",
      topic: "cloud-models",
      type: "single",
      question: "Which of the following is a cloud computing deployment model that connects infrastructure and applications between cloud-based resources and existing resources not located in the cloud?",
      options: [
        "On-premises.",
        "Mixed.",
        "Hybrid.",
        "Cloud."
      ],
      correctAnswer: [2],
      explanation: "A hybrid cloud deployment model connects and integrates cloud-based resources with existing on-premises infrastructure and applications. 'On-premises' refers to running entirely outside the cloud, 'Cloud' means running entirely in the cloud, and 'Mixed' is not a recognized AWS cloud deployment model term."
    },
    {
      id: "paper-06-015",
      domain: "GLB",
      topic: "disaster-recovery",
      type: "single",
      question: "A company is hosting business critical workloads in an AWS Region. To protect against data loss and ensure business continuity, a mirror image of the current AWS environment should be created in another AWS Region. Company policy requires that the standby environment must be available in minutes in case of an outage in the primary AWS Region. Which AWS service can be used to meet these requirements?",
      options: [
        "CloudEndure Disaster Recovery.",
        "CloudEndure Migration.",
        "AWS Backup.",
        "AWS Glue."
      ],
      correctAnswer: [0],
      explanation: "CloudEndure Disaster Recovery continuously replicates workloads to a low-cost staging area in another AWS Region and can launch a full recovery environment within minutes of a disruption, meeting the business continuity requirement described. CloudEndure Migration is designed for one-time migrations rather than ongoing DR, AWS Backup centralizes backup management but doesn't provide minute-level failover of an entire environment, and AWS Glue is a data-integration service unrelated to disaster recovery."
    },
    {
      id: "paper-06-016",
      domain: "S3",
      topic: "storage-classes",
      type: "single",
      question: "Which of the following S3 storage classes is most appropriate to host static assets for a popular e-commerce website with stable access patterns?",
      options: [
        "S3 Standard-IA.",
        "S3 Intelligent-Tiering.",
        "S3 Glacier Deep Archive.",
        "S3 Standard."
      ],
      correctAnswer: [3],
      explanation: "S3 Standard is designed for frequently accessed data with stable, predictable access patterns, offering high durability and low latency — ideal for static assets on a popular e-commerce site. S3 Standard-IA is meant for infrequently accessed data, S3 Glacier Deep Archive is for rarely accessed archival data with long retrieval times, and S3 Intelligent-Tiering is best when access patterns are unknown or changing, not stable."
    },
    {
      id: "paper-06-017",
      domain: "GLB",
      topic: "regions",
      type: "single",
      question: "You want to create a backup of your data in another geographical location. Where should you create this backup?",
      options: [
        "In another Edge location.",
        "In another Region.",
        "In another VPC.",
        "In another Availability Zone."
      ],
      correctAnswer: [1],
      explanation: "Backing up data to another AWS Region provides true geographic separation, protecting against a disaster that could take down an entire Region. An Edge Location is only a content-caching point, not a storage backup target; a VPC is a logical network construct within a Region; and another Availability Zone still resides within the same geographic Region, so it doesn't provide separation across geographies."
    },
    {
      id: "paper-06-018",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "Which statement is true in relation to the security of Amazon EC2?",
      options: [
        "You should use instance store volumes to store login data.",
        "You should regularly patch the operating system and applications on your EC2 instances.",
        "You should deploy critical components of your application in the Availability Zone that you trust.",
        "You can track all API calls using Amazon Athena."
      ],
      correctAnswer: [1],
      explanation: "Under the AWS Shared Responsibility Model, patching the guest operating system and applications running on EC2 instances is the customer's responsibility, so regularly applying patches is essential to keeping instances secure. Instance store volumes are ephemeral and unsuitable for storing sensitive login data, deploying critical components in only one Availability Zone reduces (not improves) resilience, and Amazon Athena is a query service for data in S3, not a tool for tracking API calls — that's AWS CloudTrail."
    },
    {
      id: "paper-06-019",
      domain: "ACM",
      topic: "cost-explorer",
      type: "single",
      question: "What does AWS Cost Explorer provide to help manage your AWS spend?",
      options: [
        "Cost comparisons between AWS Cloud environments and on-premises environments.",
        "Accurate estimates of AWS service costs based on your expected usage.",
        "Consolidated billing.",
        "Highly accurate cost forecasts for up to 12 months ahead."
      ],
      correctAnswer: [3],
      explanation: "AWS Cost Explorer uses historical usage data and machine learning to generate highly accurate cost forecasts for up to 12 months into the future, helping customers plan and manage spend. It does not compare cloud costs to on-premises environments (that's the TCO Calculator), it doesn't provide guaranteed precise estimates for future usage that hasn't occurred, and consolidated billing is a separate billing feature, not a Cost Explorer capability."
    },
    {
      id: "paper-06-020",
      domain: "DBA",
      topic: "rds",
      type: "single",
      question: "Which of the following is a feature of Amazon RDS that performs automatic failover when the primary database fails to respond?",
      options: [
        "RDS Single-AZ.",
        "RDS Write Replica.",
        "RDS Snapshots.",
        "RDS Multi-AZ."
      ],
      correctAnswer: [3],
      explanation: "Amazon RDS Multi-AZ automatically maintains a synchronously replicated standby copy of the database in a different Availability Zone and performs automatic failover to it if the primary instance becomes unavailable. RDS Single-AZ has no standby to fail over to, a Write/Read Replica is typically an asynchronous copy used for scaling reads rather than automatic failover, and RDS Snapshots are point-in-time backups, not a live failover mechanism."
    },
    {
      id: "paper-06-021",
      domain: "EC2",
      topic: "ec2",
      type: "single",
      question: "You are using several on-demand EC2 Instances to run your development environment. What is the best way to reduce your charges when these instances are not in use?",
      options: [
        "Deleting all EBS volumes attached to the instances.",
        "You cannot minimize charges for on-demand instances.",
        "Terminating the instances.",
        "Stopping the instances."
      ],
      correctAnswer: [3],
      explanation: "Stopping On-Demand EC2 instances halts the hourly compute charges while they aren't in use, and they can be restarted later without losing their EBS-backed data — the most efficient way to reduce costs for a development environment. Deleting EBS volumes would destroy the data, terminating the instances removes them entirely so they can't be reused later, and On-Demand charges can absolutely be minimized by stopping unused instances."
    },
    {
      id: "paper-06-022",
      domain: "IAM",
      topic: "root-user",
      type: "single",
      question: "Which of the following strategies helps protect your AWS root account?",
      options: [
        "Delete root user access keys if you do not need them.",
        "Apply MFA for the root account and use it for all of your work.",
        "Access the root account only from your personal Mobile Phone.",
        "Only share your AWS account password or access keys with trusted persons."
      ],
      correctAnswer: [0],
      explanation: "Deleting root user access keys when they aren't needed removes a high-risk credential that has full account access, reducing the attack surface on the root account. Using the root account for regular work (even with MFA) is discouraged since it should be reserved for account-level tasks only, accessing the root account from a personal mobile phone doesn't inherently protect it, and sharing root credentials with any other person, even someone trusted, goes against AWS security best practices."
    },
    {
      id: "paper-06-023",
      domain: "STG",
      topic: "ebs",
      type: "multiple-select",
      question: "Which of the following are factors should be considered for Amazon EBS pricing? (Choose TWO)",
      options: [
        "The size of volumes provisioned per month.",
        "The compute capacity you consume.",
        "The amount of data you have stored in snapshots.",
        "The compute time you consume.",
        "The number of Snowball storage devices you request."
      ],
      correctAnswer: [0, 2],
      explanation: "Amazon EBS pricing is based on factors such as the size of volumes provisioned per month and the amount of data stored in EBS snapshots. Compute capacity and compute time relate to EC2 charges, not EBS, and the number of Snowball devices requested is a completely separate, unrelated service charge."
    },
    {
      id: "paper-06-024",
      domain: "IAM",
      topic: "least-privilege",
      type: "single",
      question: "You have just set up your AWS environment and have created six IAM user accounts for the DevOps team. What is the AWS recommendation when granting permissions to these IAM accounts?",
      options: [
        "Attach a separate IAM policy for each individual account.",
        "Apply the Principle of Least Privilege.",
        "For security purposes, you should not grant any permission to the DevOps team.",
        "Create six different IAM passwords."
      ],
      correctAnswer: [1],
      explanation: "AWS recommends applying the Principle of Least Privilege, granting IAM users only the specific permissions they need to perform their job and nothing more. Attaching a separate policy per account isn't itself a security principle, withholding all permissions would make the DevOps team unable to do their work, and creating separate passwords addresses authentication, not the scope of authorization."
    },
    {
      id: "paper-06-025",
      domain: "ACM",
      topic: "cost-management",
      type: "multiple-select",
      question: "Which of the following has the greatest impact on cost? (Choose TWO)",
      options: [
        "Compute charges.",
        "The number of services used.",
        "Data Transfer In charges.",
        "Data Transfer Out charges.",
        "The number of IAM roles provisioned."
      ],
      correctAnswer: [0, 3],
      explanation: "Compute charges and Data Transfer Out charges are typically the largest contributors to an AWS bill, since compute usage and the volume of data leaving AWS to the internet or another Region are billed based on consumption. Data Transfer In is free for almost all AWS services, the number of services used alone doesn't determine cost (actual usage does), and IAM roles are provided at no additional charge."
    },
    {
      id: "paper-06-026",
      domain: "ACM",
      topic: "reserved-instances",
      type: "single",
      question: "Who from the following will get the largest discount?",
      options: [
        "A user who chooses to buy On-demand, Convertible, Partial upfront instances.",
        "A user who chooses to buy Reserved, Convertible, All upfront instances.",
        "A user who chooses to buy Reserved, Standard, No upfront instances.",
        "A user who chooses to buy Reserved, Standard, All upfront instances."
      ],
      correctAnswer: [3],
      explanation: "Reserved Instances with the Standard offering class and an All Upfront payment option provide the largest discount compared to On-Demand pricing, since paying the full amount upfront and committing to a fixed instance type maximizes the savings. Convertible Reserved Instances offer more flexibility but a smaller discount than Standard, No Upfront and Partial Upfront payment options reduce the discount compared to paying everything upfront, and On-Demand purchases receive no reservation discount at all."
    },
    {
      id: "paper-06-027",
      domain: "ACM",
      topic: "pricing-models",
      type: "single",
      question: "Which of the following is an available option when purchasing Amazon EC2 instances?",
      options: [
        "The ability to bid to get the lowest possible prices.",
        "The ability to register EC2 instances to get volume discounts on every hour the instances are running.",
        "The ability to buy Dedicated Instances for up to 90% discount.",
        "The ability to pay upfront to get lower hourly costs."
      ],
      correctAnswer: [3],
      explanation: "Amazon EC2 offers Reserved Instances where customers can pay some or all of the cost upfront in exchange for a significantly lower effective hourly rate over the term. There is no mechanism to bid for guaranteed lowest prices in the way described, registering instances for volume discounts on every running hour isn't an actual EC2 purchasing option, and Dedicated Instances are priced for isolation and compliance needs, not for up to 90% discounts."
    },
    {
      id: "paper-06-028",
      domain: "CLD",
      topic: "economies-of-scale",
      type: "single",
      question: "What does the term “Economies of scale” mean?",
      options: [
        "It means that you save more when you consume more.",
        "It means as more time passes using AWS, you pay more for its services.",
        "It means that AWS will continuously lower costs as it grows.",
        "It means that you have the ability to pay as you go."
      ],
      correctAnswer: [2],
      explanation: "Economies of scale refers to AWS's ability to continuously lower its prices as its infrastructure and customer base grow, passing on efficiency gains from massive scale to customers. Saving more as you consume more describes tiered volume pricing on individual services rather than economies of scale, paying more over time is the opposite of what actually happens, and paying only for what you use describes the pay-as-you-go model, a separate pricing benefit."
    },
    {
      id: "paper-06-029",
      domain: "ELB",
      topic: "auto-scaling",
      type: "single",
      question: "A company experiences fluctuations in traffic patterns to their e-commerce website when running flash sales. What service can help the company dynamically match the required compute capacity to handle spikes in traffic during flash sales?",
      options: [
        "AWS Auto Scaling.",
        "Amazon Elastic Compute Cloud.",
        "Amazon Elastic File System.",
        "Amazon ElastiCache."
      ],
      correctAnswer: [0],
      explanation: "AWS Auto Scaling automatically and dynamically adjusts EC2 compute capacity up or down to match real-time traffic, making it ideal for handling flash-sale spikes on an e-commerce site. Amazon EC2 alone provides compute capacity but doesn't automatically scale itself, Amazon EFS is a shared file storage service, and Amazon ElastiCache is an in-memory caching service — neither manages compute capacity."
    },
    {
      id: "paper-06-030",
      domain: "VPC",
      topic: "vpc",
      type: "single",
      question: "Which of the below options is true of Amazon VPC?",
      options: [
        "Amazon VPC allows customers to control user interactions with all other AWS resources.",
        "AWS Customers have complete control over their Amazon VPC virtual networking environment.",
        "AWS is responsible for all the management and configuration details of Amazon VPC.",
        "Amazon VPC helps customers to review their AWS architecture and adopt best practices."
      ],
      correctAnswer: [1],
      explanation: "AWS customers have complete control over their Amazon VPC virtual networking environment, including IP address ranges, subnets, route tables, and gateways. Amazon VPC does not control interactions with all other AWS resources (that's the role of IAM), AWS is not responsible for managing and configuring the customer's VPC, and reviewing architecture for best practices describes AWS Trusted Advisor, not VPC."
    },
    {
      id: "paper-06-031",
      domain: "ACM",
      topic: "tco-calculator",
      type: "single",
      question: "Which tool can a non-AWS customer use to compare the cost of on-premises environment resources to AWS?",
      options: [
        "AWS Cost Explorer.",
        "AWS Pricing Calculator.",
        "AWS Budgets.",
        "AWS TCO Calculator."
      ],
      correctAnswer: [3],
      explanation: "The AWS TCO (Total Cost of Ownership) Calculator lets anyone, including non-AWS customers, compare the estimated cost of running workloads on-premises versus on AWS. AWS Cost Explorer and AWS Budgets only analyze costs within an existing AWS account, and the AWS Pricing Calculator estimates the cost of AWS services themselves rather than comparing against on-premises infrastructure."
    },
    {
      id: "paper-06-032",
      domain: "ACM",
      topic: "trusted-advisor",
      type: "multiple-select",
      question: "Which of the following services provide real-time auditing for compliance and vulnerabilities? (Choose TWO)",
      options: [
        "AWS Config.",
        "Amazon Redshift.",
        "Amazon MQ.",
        "AWS Trusted Advisor.",
        "Amazon Cognito."
      ],
      correctAnswer: [0, 3],
      explanation: "AWS Config continuously monitors and records resource configurations to check compliance against desired rules, and AWS Trusted Advisor inspects your environment in real time and flags security vulnerabilities and best-practice violations. Amazon Redshift is a data warehouse, Amazon MQ is a managed message broker, and Amazon Cognito manages user identities — none of these provide compliance or vulnerability auditing."
    },
    {
      id: "paper-06-033",
      domain: "DEP",
      topic: "opsworks",
      type: "single",
      question: "Which of the following AWS services uses Puppet to automate how EC2 instances are configured?",
      options: [
        "AWS OpsWorks.",
        "AWS CloudFormation.",
        "AWS Quick Starts.",
        "AWS CloudTrail."
      ],
      correctAnswer: [0],
      explanation: "AWS OpsWorks is a configuration management service that supports Chef and Puppet, letting you automate how EC2 instances are configured, deployed, and managed. AWS CloudFormation provisions infrastructure from templates but doesn't use Puppet, AWS Quick Starts are pre-built deployment templates, and AWS CloudTrail only logs API activity — none of these rely on Puppet automation."
    },
    {
      id: "paper-06-034",
      domain: "DEP",
      topic: "codedeploy",
      type: "single",
      question: "An organization uses a hybrid cloud architecture to run their business. Which AWS service enables them to deploy their applications to any AWS or on-premises server?",
      options: [
        "Amazon Kinesis.",
        "Amazon QuickSight.",
        "AWS CodeDeploy.",
        "Amazon Athena."
      ],
      correctAnswer: [2],
      explanation: "AWS CodeDeploy automates code deployments to Amazon EC2, on-premises servers, Lambda, or ECS, making it well suited for hybrid architectures that span AWS and on-premises environments. Amazon Kinesis processes streaming data, Amazon QuickSight is a business-intelligence visualization tool, and Amazon Athena queries data in S3 — none of these deploy application code to servers."
    },
    {
      id: "paper-06-035",
      domain: "DBA",
      topic: "serverless",
      type: "multiple-select",
      question: "Select the services that are server-based: (Choose TWO)",
      options: [
        "Amazon RDS.",
        "Amazon DynamoDB.",
        "AWS Lambda.",
        "AWS Fargate.",
        "Amazon EMR."
      ],
      correctAnswer: [0, 4],
      explanation: "Amazon RDS and Amazon EMR are server-based services, meaning they run on underlying EC2 instances or clusters that you provision and that AWS manages on your behalf. Amazon DynamoDB, AWS Lambda, and AWS Fargate are all serverless, meaning there are no visible servers to provision or manage for these services."
    },
    {
      id: "paper-06-036",
      domain: "SEC",
      topic: "penetration-testing",
      type: "single",
      question: "What best describes penetration testing?",
      options: [
        "Testing your application’s response time from different locations.",
        "Testing your network to find security vulnerabilities that an attacker could exploit.",
        "Testing your instances to check for the unhealthy ones.",
        "Testing your software for bugs and errors."
      ],
      correctAnswer: [1],
      explanation: "Penetration testing involves simulating attacks against your network and systems to discover security vulnerabilities that a real attacker could exploit. It is not about measuring application response times, checking instance health, or finding general software bugs — those describe performance testing, load-balancer health checks, and QA testing, respectively."
    },
    {
      id: "paper-06-037",
      domain: "DBA",
      topic: "emr",
      type: "multiple-select",
      question: "Which of the following are use cases for Amazon EMR? (Choose TWO)",
      options: [
        "Enables you to backup extremely large amounts of data at very low costs.",
        "Enables you to move Exabyte-scale data from on-premises datacenters into AWS.",
        "Enables you to analyze and process extremely large amounts of data in a timely manner.",
        "Enables you to easily run and scale Apache Spark, Hadoop,and other Big Data frameworks.",
        "Enables you to easily run and manage Docker containers."
      ],
      correctAnswer: [2, 3],
      explanation: "Amazon EMR lets you analyze and process extremely large amounts of data in a timely, cost-effective manner by easily running and scaling open-source big-data frameworks like Apache Spark and Hadoop across managed clusters. Backing up large amounts of data cheaply describes S3/Glacier, moving exabyte-scale data from on-premises describes AWS Snowmobile, and running and managing Docker containers describes Amazon ECS/EKS — none of which are EMR's purpose."
    },
    {
      id: "paper-06-038",
      domain: "ACM",
      topic: "support",
      type: "single",
      question: "Your CTO has asked you to contact AWS support using the chat feature to ask for guidance related to EBS. However, when you open the AWS support center you can’t see a way to contact support via Chat. What should you do?",
      options: [
        "There is no chat feature in AWS support.",
        "The chat feature is available for all plans for an additional fee, but you have to request it first.",
        "At a minimum, upgrade to Business support plan.",
        "Upgrade from the Basic Support plan to Developer Support."
      ],
      correctAnswer: [2],
      explanation: "The AWS Support chat feature is available starting with the Business Support plan and above, so upgrading to at least Business support is required to unlock chat access. Chat is a real feature of AWS Support, not a nonexistent one; it isn't an optional paid add-on you request separately; and the Developer Support plan does not include the chat feature."
    },
    {
      id: "paper-06-039",
      domain: "DEP",
      topic: "elastic-beanstalk",
      type: "single",
      question: "A developer wants to quickly deploy and manage his application in the AWS Cloud, but he doesn’t have any experience with cloud computing. Which of the following AWS services would help the developer achieve his goal?",
      options: [
        "AWS Fargate.",
        "AWS Batch.",
        "Amazon Personalize.",
        "AWS Elastic Beanstalk."
      ],
      correctAnswer: [3],
      explanation: "AWS Elastic Beanstalk lets developers quickly deploy and manage applications on AWS by automatically handling the underlying infrastructure, making it ideal for someone with no cloud experience. AWS Fargate and AWS Batch still require more container or job configuration knowledge, and Amazon Personalize is a machine-learning recommendation service unrelated to application deployment."
    },
    {
      id: "paper-06-040",
      domain: "CLD",
      topic: "cloud-benefits",
      type: "single",
      question: "Which statement best describes the AWS Pay-As-You-Go pricing model?",
      options: [
        "With AWS, you replace low upfront expenses with large variable payments.",
        "With AWS, you replace low upfront expenses with large fixed payments.",
        "With AWS, you replace large upfront expenses with low fixed payments.",
        "With AWS, you replace large capital expenses with low variable payments."
      ],
      correctAnswer: [3],
      explanation: "The AWS Pay-As-You-Go model lets customers replace large upfront capital expenses, such as buying data center hardware, with low variable payments based only on actual usage. It doesn't involve replacing low upfront costs with large payments, fixed or variable — the opposite is true, since AWS pricing starts with low or no upfront cost, and payments scale with usage rather than being large or fixed."
    },
    {
      id: "paper-06-041",
      domain: "DBA",
      topic: "rds",
      type: "multiple-select",
      question: "For Amazon RDS databases, what does AWS perform on your behalf? (Choose TWO)",
      options: [
        "Database setup.",
        "Network traffic protection.",
        "Management of the operating system.",
        "Access management.",
        "Management of firewall rules."
      ],
      correctAnswer: [0, 2],
      explanation: "For Amazon RDS, AWS performs database setup and manages the underlying operating system, patching and maintaining the database engine and host infrastructure on your behalf. Network traffic protection, access management, and firewall rule configuration such as security groups remain the customer's responsibility under the Shared Responsibility Model."
    },
    {
      id: "paper-06-042",
      domain: "ACM",
      topic: "cost-management",
      type: "single",
      question: "Which of the following strategies help analyze costs in AWS?",
      options: [
        "Using tags to group resources.",
        "Using AWS CloudFormation to automate the deployment of resources.",
        "Deploying resources of the same type in different regions.",
        "Configuring Amazon Inspector to automatically analyze costs and email reports."
      ],
      correctAnswer: [0],
      explanation: "Using cost allocation tags to group and categorize resources lets you break down and analyze AWS spending by project, team, or environment. Using CloudFormation to automate deployments addresses provisioning speed, not cost visibility; deploying identical resources across regions doesn't help analyze cost; and Amazon Inspector is a vulnerability-scanning service, not a cost-analysis tool."
    },
    {
      id: "paper-06-043",
      domain: "VPC",
      topic: "direct-connect",
      type: "single",
      question: "A media company has an application that requires the transfer of large data sets to and from AWS every day. This data is business critical and should be transferred over a consistent connection. Which AWS service should the company use?",
      options: [
        "AWS Direct Connect.",
        "Amazon Comprehend.",
        "AWS Snowmobile.",
        "AWS VPN."
      ],
      correctAnswer: [0],
      explanation: "AWS Direct Connect establishes a dedicated, private network connection from an on-premises data center to AWS, providing the consistent, high-throughput connection needed for transferring large, business-critical data sets daily. Amazon Comprehend is a natural-language processing service, AWS Snowmobile is for one-time exabyte-scale physical data migrations rather than daily connectivity, and AWS VPN runs over the public internet, which is less consistent than a dedicated Direct Connect link."
    },
    {
      id: "paper-06-044",
      domain: "S3",
      topic: "storage-gateway",
      type: "single",
      question: "What is the main benefit of the AWS Storage Gateway service?",
      options: [
        "It automates the process of building, maintaining, and running ETL jobs.",
        "It provides physical devices to migrate data from on premises to AWS.",
        "It allows integration of on-premises IT environments with Cloud Storage.",
        "It provides hardware-based key storage for regulatory compliance."
      ],
      correctAnswer: [2],
      explanation: "AWS Storage Gateway's main benefit is enabling on-premises IT environments to integrate seamlessly with AWS cloud storage services like S3, providing hybrid storage access. Automating ETL jobs describes AWS Glue, providing physical devices to migrate data describes AWS Snowball, and providing hardware-based key storage describes AWS CloudHSM — none of which is Storage Gateway's purpose."
    },
    {
      id: "paper-06-045",
      domain: "S3",
      topic: "storage-classes",
      type: "single",
      question: "To protect against data loss, you need to backup your database regularly. What is the most cost-effective storage option that provides immediate retrieval of your backups?",
      options: [
        "Amazon S3 Glacier Deep Archive.",
        "Amazon S3 Standard-Infrequent Access.",
        "Amazon S3 Glacier.",
        "Instance Store."
      ],
      correctAnswer: [1],
      explanation: "S3 Standard-Infrequent Access is the most cost-effective option for backup data that must remain immediately retrievable, since it offers lower storage costs than S3 Standard while still providing millisecond access. S3 Glacier and Glacier Deep Archive are cheaper but involve retrieval delays ranging from minutes to hours, making them unsuitable for backups needing immediate access, and Instance Store is ephemeral, non-durable storage tied to a single EC2 instance's lifecycle."
    },
    {
      id: "paper-06-046",
      domain: "GLB",
      topic: "global-accelerator",
      type: "single",
      question: "Which service can you use to route traffic to the endpoint that provides the best application performance for your users worldwide?",
      options: [
        "AWS Global Accelerator.",
        "AWS Data Pipeline.",
        "AWS DAX Accelerator.",
        "AWS Transfer Acceleration."
      ],
      correctAnswer: [0],
      explanation: "AWS Global Accelerator uses the AWS global network to route user traffic to the optimal, healthy application endpoint, improving performance for users worldwide. AWS Data Pipeline orchestrates data workflows, there is no service called 'AWS DAX Accelerator' (DAX is a DynamoDB accelerator unrelated to routing), and AWS Transfer Acceleration speeds up S3 uploads specifically rather than routing general application traffic."
    },
    {
      id: "paper-06-047",
      domain: "CMP",
      topic: "serverless",
      type: "single",
      question: "Why are Serverless Architectures more economical than Server-based Architectures?",
      options: [
        "Serverless Architectures use new powerful computing devices.",
        "With the Server-based Architectures, compute resources continue to run all the time but with serverless architecture, compute resources are only used when code is being executed.",
        "When you reserve serverless capacity, you will get large discounts compared to server reservation.",
        "With Serverless Architectures you have the ability to scale automatically up or down as demand changes."
      ],
      correctAnswer: [1],
      explanation: "Serverless architectures are more economical because compute resources are only actively used, and billed, while code is executing, whereas server-based architectures keep servers running continuously regardless of whether they're processing requests. It's not about new powerful hardware, there is no special discount for reserving serverless capacity the way there is for EC2 reservations, and automatic scaling is a related benefit but doesn't itself explain the cost savings described."
    },
    {
      id: "paper-06-048",
      domain: "GLB",
      topic: "route-53",
      type: "multiple-select",
      question: "Which of the below options are use cases of the Amazon Route 53 service? (Choose TWO)",
      options: [
        "Point-to-point connectivity between an on-premises data center and AWS.",
        "Detects configuration changes in the AWS environment.",
        "DNS configuration and management.",
        "Manages global application traffic through a variety of routing types.",
        "Provides infrastructure security optimization recommendations."
      ],
      correctAnswer: [2, 3],
      explanation: "Amazon Route 53 provides DNS configuration and management, translating domain names to IP addresses, and it manages global application traffic through a variety of routing policies such as latency-based, geolocation, and weighted routing. Point-to-point connectivity between on-premises and AWS describes Direct Connect or VPN, detecting configuration changes describes AWS Config, and infrastructure security recommendations describe AWS Trusted Advisor — none of which are Route 53 functions."
    },
    {
      id: "paper-06-049",
      domain: "S3",
      topic: "snowball",
      type: "single",
      question: "You want to transfer 200 Terabytes of data from on-premises locations to the AWS Cloud, which of the following can do the job in a cost-effective way?",
      options: [
        "AWS Snowmobile.",
        "AWS Import/Export.",
        "AWS DMS.",
        "AWS Snowball."
      ],
      correctAnswer: [3],
      explanation: "AWS Snowball is a physical data-transport device designed to cost-effectively move large amounts of data, such as 200 terabytes, without the time and expense of transferring it over the network. AWS Snowmobile is meant for exabyte-scale transfers, which is overkill for 200 TB, AWS Import/Export is Snowball's discontinued predecessor, and AWS DMS is for migrating live databases, not bulk file transfer."
    },
    {
      id: "paper-06-050",
      domain: "DBA",
      topic: "elasticache",
      type: "single",
      question: "You have a real-time IoT application that requires sub-millisecond latency. Which of the following services should you use?",
      options: [
        "Amazon Redshift.",
        "Amazon Athena.",
        "AWS Cloud9.",
        "Amazon ElastiCache for Redis."
      ],
      correctAnswer: [3],
      explanation: "Amazon ElastiCache for Redis is an in-memory data store that delivers sub-millisecond latency, making it well suited for real-time IoT applications that need extremely fast read and write performance. Amazon Redshift is a data warehouse for analytical queries, Amazon Athena queries data in S3 with query-level latency, and AWS Cloud9 is a cloud IDE unrelated to data storage performance."
    }
  ]
});
