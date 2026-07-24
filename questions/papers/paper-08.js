window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "paper-08",
  paperId: "paper-08",
  paperName: "Practice Paper 8",
  questions: [
    {
      id: "paper-08-001",
      domain: "VPC",
      topic: "security-groups",
      type: "single",
      question: "What is the main benefit of attaching security groups to an Amazon RDS instance?",
      options: [
        "Manages user access and encryption keys.",
        "Controls what IP address ranges can connect to your database instance.",
        "Deploys SSL/TLS certificates for use with your database instance.",
        "Distributes incoming traffic across multiple targets."
      ],
      correctAnswer: [1],
      explanation: "Security groups act as virtual firewalls for an RDS instance, controlling which IP address ranges and ports are allowed to connect to the database. Managing user access and encryption keys is an IAM/KMS function, deploying SSL/TLS certificates is handled by AWS Certificate Manager, and distributing incoming traffic across multiple targets is the role of Elastic Load Balancing — none of these describe what a security group does."
    },
    {
      id: "paper-08-002",
      domain: "CMP",
      topic: "ecs",
      type: "single",
      question: "A company wants to use Amazon Elastic Container Service (Amazon ECS) to run its containerized applications. For compliance reasons, the company wants to retain complete visibility and control over the underlying server cluster. Which Amazon ECS launch type will satisfy these requirements?",
      options: [
        "EC2 launch type.",
        "Fargate launch type.",
        "Lightsail launch type.",
        "Lambda launch type."
      ],
      correctAnswer: [0],
      explanation: "The EC2 launch type for Amazon ECS requires the company to manage its own underlying EC2 cluster, giving full visibility and control over the server infrastructure needed for compliance. Fargate abstracts away the underlying servers entirely (the opposite of what's needed), Lightsail is a simplified VPS offering unrelated to ECS launch types, and Lambda is serverless and is not an ECS launch type at all."
    },
    {
      id: "paper-08-003",
      domain: "ACM",
      topic: "consolidated-billing",
      type: "single",
      question: "You have multiple standalone AWS accounts and you want to decrease your AWS monthly charges. What should you do?",
      options: [
        "Try to remove unnecessary AWS accounts.",
        "Add the accounts to an AWS Organization and use Consolidated Billing.",
        "Track the AWS charges that are incurred by the member accounts.",
        "Enable AWS tiered-pricing before provisioning resources."
      ],
      correctAnswer: [1],
      explanation: "Adding standalone accounts to an AWS Organization and enabling Consolidated Billing combines usage across all accounts onto a single bill, which unlocks volume-based pricing discounts and lowers overall charges. Removing accounts doesn't reduce costs for workloads still needed, merely tracking charges doesn't lower them, and there is no AWS feature called \"tiered-pricing\" that must be manually enabled."
    },
    {
      id: "paper-08-004",
      domain: "VPC",
      topic: "security-groups",
      type: "single",
      question: "You have been tasked with auditing the security of your VPC. As part of this process, you need to start by analyzing what inbound and outbound traffic is allowed on your EC2 instances. What two parts of the VPC do you need to check to accomplish this task?",
      options: [
        "Network ACLs and Traffic Manager.",
        "Network ACLs and Subnets.",
        "Security Groups and Internet Gateways.",
        "Security Groups and Network ACLs."
      ],
      correctAnswer: [3],
      explanation: "Auditing inbound and outbound traffic to and from EC2 instances requires checking both Security Groups (instance-level firewalls) and Network ACLs (subnet-level firewalls), since traffic passes through both layers. Network ACLs paired with Traffic Manager or Subnets omit the instance-level control that Security Groups provide, and Internet Gateways only enable internet connectivity rather than filtering traffic."
    },
    {
      id: "paper-08-005",
      domain: "ACM",
      topic: "support",
      type: "multiple-select",
      question: "What does the AWS “Business” support plan provide? (Choose TWO)",
      options: [
        "Access to the full set of Trusted Advisor checks.",
        "Support Concierge Service.",
        "Less than 15 minutes response-time support if your business critical system goes down.",
        "AWS Support API.",
        "Proactive Technical Account Management."
      ],
      correctAnswer: [0, 3],
      explanation: "The Business support plan includes access to the full set of Trusted Advisor checks and the AWS Support API, both included at this tier. Support Concierge Service and Proactive Technical Account Management are Enterprise-tier benefits, and sub-15-minute response times for business-critical systems down also require the Enterprise plan, not Business."
    },
    {
      id: "paper-08-006",
      domain: "DEP",
      topic: "elastic-beanstalk",
      type: "single",
      question: "You have just finished writing your application code. Which service can be used to automate the deployment and scaling of your application?",
      options: [
        "Amazon Simple Storage Service.",
        "AWS Elastic Beanstalk.",
        "AWS CodeCommit.",
        "Amazon Elastic File System."
      ],
      correctAnswer: [1],
      explanation: "AWS Elastic Beanstalk automates the deployment and scaling of an application by provisioning the underlying infrastructure (EC2, Elastic Load Balancing, Auto Scaling) on your behalf. Amazon S3 is object storage, AWS CodeCommit is a source-code repository, and Amazon EFS is file storage — none of these deploy or scale applications."
    },
    {
      id: "paper-08-007",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "Which statement is true in relation to security in AWS?",
      options: [
        "AWS manages everything related to EC2 operating systems.",
        "AWS customers are responsible for patching any database software running on Amazon EC2.",
        "Server side encryption is the responsibility of AWS.",
        "AWS is responsible for the security of your application."
      ],
      correctAnswer: [1],
      explanation: "Under the Shared Responsibility Model, customers are responsible for patching any database or other software they install on top of Amazon EC2, since EC2 is infrastructure-as-a-service. AWS does not manage EC2 guest operating systems, server-side encryption configuration choices belong to the customer, and AWS is not responsible for the security of customer applications running on its infrastructure."
    },
    {
      id: "paper-08-008",
      domain: "EC2",
      topic: "ec2",
      type: "multiple-select",
      question: "Amazon EC2 instances are conceptually very similar to traditional servers. However, using Amazon EC2 server instances in the same manner as traditional hardware server instances is only a starting point. What are the main benefits of using the AWS EC2 instances instead of traditional servers? (Choose TWO)",
      options: [
        "Improves Fault-Tolerance.",
        "Provides your business with a seamless remote accessibility.",
        "Prevents unauthorized users from getting into your network.",
        "Provides automatic data backups.",
        "Can be scaled manually in a shorter period of time."
      ],
      correctAnswer: [0, 4],
      explanation: "EC2 instances improve fault tolerance (e.g., by running across multiple Availability Zones and quickly replacing failed instances) and can be scaled manually in a much shorter time than provisioning physical hardware. EC2 doesn't inherently provide remote accessibility beyond any server, doesn't itself prevent unauthorized network access (that's Security Groups/NACLs), and doesn't provide automatic backups without extra configuration."
    },
    {
      id: "paper-08-009",
      domain: "ACM",
      topic: "pricing-models",
      type: "multiple-select",
      question: "Which statement is true regarding AWS pricing? (Choose TWO)",
      options: [
        "With the AWS pay-as-you-go pricing model, you don’t have to pay any upfront fee.",
        "You have no responsibility for third-party software license costs.",
        "You only pay for the individual services that you need with no long-term contracts.",
        "For some services, you have to pay a startup fee in order to get the service running.",
        "There are no reservations on AWS, you only pay for what you use."
      ],
      correctAnswer: [0, 2],
      explanation: "With AWS's pay-as-you-go pricing, there is no upfront fee required, and customers only pay for the individual services they use with no long-term contracts. Customers remain responsible for any third-party software license costs, some services do involve setup considerations, and Savings Plans/Reserved Instances are reservation-based pricing options, so the claim that AWS has \"no reservations at all\" is false."
    },
    {
      id: "paper-08-010",
      domain: "ACM",
      topic: "control-tower",
      type: "single",
      question: "Which AWS service provides the EASIEST way to set up and manage a secure, well-architected, multi-account AWS environment?",
      options: [
        "AWS Control Tower.",
        "Amazon Macie.",
        "AWS Systems Manager Patch Manager.",
        "AWS Security Hub."
      ],
      correctAnswer: [0],
      explanation: "AWS Control Tower provides the easiest way to set up and govern a secure, well-architected, multi-account AWS environment using pre-built landing zone blueprints and guardrails. Amazon Macie discovers and protects sensitive data, Systems Manager Patch Manager automates OS patching, and Security Hub aggregates security findings — none of these establish a multi-account environment."
    },
    {
      id: "paper-08-011",
      domain: "MON",
      topic: "cloudwatch",
      type: "single",
      question: "A company is running a large web application that needs to always be available. The application tends to slow down when CPU usage is greater than 60%. How can they track when CPU usage goes above 60% for any of the EC2 Instances in their account?",
      options: [
        "Use CloudFront to monitor the CPU usage.",
        "Set the AWS Config CPU threshold to 60% to receive a notification when EC2 usage exceeds that value.",
        "Use CloudWatch Alarms to monitor the CPU and alert when the CPU usage is >= 60%.",
        "Use SNS to monitor the utilization of the server."
      ],
      correctAnswer: [2],
      explanation: "Amazon CloudWatch Alarms can monitor the CPU utilization metric of EC2 instances and trigger a notification or action whenever usage crosses a defined threshold like 60%. CloudFront is a content delivery network unrelated to CPU monitoring, AWS Config tracks resource configuration changes rather than metric thresholds, and SNS delivers notifications but doesn't monitor CPU utilization itself."
    },
    {
      id: "paper-08-012",
      domain: "STG",
      topic: "ebs",
      type: "single",
      question: "What is the recommended storage option when hosting an often-changing database on an Amazon EC2 instance?",
      options: [
        "Amazon EBS.",
        "Amazon RDS.",
        "You can’t run a database inside an Amazon EC2 instance.",
        "Amazon DynamoDB."
      ],
      correctAnswer: [0],
      explanation: "Amazon EBS is the recommended storage option for a frequently-changing database hosted directly on an EC2 instance, providing persistent, low-latency block storage the OS and database software can read and write to directly. Amazon RDS is a separate managed database service rather than storage attached to your own instance, it's false that databases can't run on EC2, and DynamoDB is a fully managed NoSQL database, not block storage for EC2."
    },
    {
      id: "paper-08-013",
      domain: "MON",
      topic: "cloudwatch",
      type: "single",
      question: "You are working as a site reliability engineer (SRE) in an AWS environment, which of the following services helps monitor your applications?",
      options: [
        "Amazon CloudWatch.",
        "Amazon CloudSearch.",
        "Amazon Elastic MapReduce.",
        "Amazon CloudHSM."
      ],
      correctAnswer: [0],
      explanation: "Amazon CloudWatch collects metrics, logs, and alarms for AWS resources and applications, making it the go-to service for an SRE monitoring application health and performance. Amazon CloudSearch is a search service, Elastic MapReduce is a big-data processing framework, and CloudHSM is a hardware security module for key management — none of these monitor applications."
    },
    {
      id: "paper-08-014",
      domain: "CMP",
      topic: "lambda",
      type: "multiple-select",
      question: "What factors determine how you are charged when using AWS Lambda? (Choose TWO)",
      options: [
        "Storage consumed.",
        "Number of requests to your functions.",
        "Number of volumes.",
        "Placement groups.",
        "Compute time consumed."
      ],
      correctAnswer: [1, 4],
      explanation: "AWS Lambda charges are based on the number of requests made to your functions and the amount of compute time consumed during execution (duration multiplied by memory allocated). Lambda has no persistent attached storage volumes, so \"storage consumed,\" \"number of volumes,\" and \"placement groups\" (an EC2 concept) are not factors in Lambda billing."
    },
    {
      id: "paper-08-015",
      domain: "IAM",
      topic: "iam-roles",
      type: "multiple-select",
      question: "What are the main differences between an IAM user and an IAM role in AWS? (Choose TWO)",
      options: [
        "An IAM user is uniquely associated with only one person, however a role is intended to be assumable by anyone who needs it.",
        "An IAM user has permanent credentials associated with it, however a role has temporary credentials associated with it.",
        "IAM users are more cost effective than IAM roles.",
        "A role is uniquely associated with only one person, however an IAM user is intended to be assumable by anyone who needs it.",
        "An IAM user has temporary credentials associated with it, however a role has permanent credentials associated with it."
      ],
      correctAnswer: [0, 1],
      explanation: "An IAM user is tied to one specific person with permanent, long-lived credentials, whereas an IAM role has no permanent credentials and is instead assumable by anyone or anything that needs temporary access. It's false that a role is tied to one person while a user is assumable by anyone (that's reversed), IAM users and roles don't differ in cost, and it's also false that users have temporary credentials while roles have permanent ones."
    },
    {
      id: "paper-08-016",
      domain: "STG",
      topic: "ebs",
      type: "multiple-select",
      question: "Which of the following actions may reduce Amazon EBS costs? (Choose TWO)",
      options: [
        "Deleting unused buckets.",
        "Using reservations.",
        "Deleting unnecessary snapshots.",
        "Changing the type of the volume.",
        "Distributing requests to multiple volumes."
      ],
      correctAnswer: [2, 3],
      explanation: "Deleting unnecessary EBS snapshots reduces the storage charges from accumulated old backups, and changing the volume type (e.g., moving to a cheaper gp3 volume) can lower ongoing costs while still meeting performance needs. Deleting buckets applies to S3 rather than EBS, EBS has no capacity reservation pricing model like EC2 Reserved Instances, and distributing requests across multiple volumes is a performance strategy, not a cost-reduction one."
    },
    {
      id: "paper-08-017",
      domain: "SEC",
      topic: "guardduty",
      type: "single",
      question: "What does Amazon GuardDuty do to protect AWS accounts and workloads?",
      options: [
        "Notifies AWS customers about abuse events once they are reported.",
        "Continuously monitors AWS infrastructure and helps detect threats such as attacker reconnaissance or account compromise.",
        "Helps AWS customers identify the root cause of potential security issues.",
        "Checks security groups for rules that allow unrestricted access to AWS. resources."
      ],
      correctAnswer: [1],
      explanation: "Amazon GuardDuty continuously monitors AWS accounts and workloads using threat intelligence to detect malicious activity such as attacker reconnaissance or account compromise. It doesn't wait for externally reported abuse events, it isn't primarily a root-cause analysis tool for security issues, and checking security groups for overly permissive rules is a Trusted Advisor function, not GuardDuty's."
    },
    {
      id: "paper-08-018",
      domain: "DBA",
      topic: "rds",
      type: "single",
      question: "Which database service should you use if your application and data schema require “joins” or complex transactions?",
      options: [
        "Amazon RDS.",
        "AWS Outposts.",
        "Amazon DocumentDB.",
        "Amazon DynamoDB."
      ],
      correctAnswer: [0],
      explanation: "Amazon RDS is a relational database service that supports SQL joins and complex, multi-table transactions, making it the right choice when the data model requires those relational features. AWS Outposts is on-premises infrastructure hardware rather than a database, Amazon DocumentDB is a document database better suited to JSON-like data than complex relational joins, and DynamoDB is a NoSQL key-value/document store that does not support joins."
    },
    {
      id: "paper-08-019",
      domain: "ACM",
      topic: "tagging",
      type: "single",
      question: "Which of the following makes it easier for you to categorize, manage and filter your resources?",
      options: [
        "Amazon CloudWatch.",
        "AWS Service Catalog.",
        "AWS Directory Service.",
        "AWS Tagging."
      ],
      correctAnswer: [3],
      explanation: "AWS Tagging lets you attach custom key-value metadata to your resources, making it easy to categorize, filter, search, manage, and even track costs by resource. Amazon CloudWatch monitors metrics and logs, AWS Service Catalog manages approved product catalogs, and AWS Directory Service provides managed directory services — none of these are used to categorize and filter resources."
    },
    {
      id: "paper-08-020",
      domain: "S3",
      topic: "glacier",
      type: "single",
      question: "What should you consider when storing data in Amazon Glacier?",
      options: [
        "Amazon Glacier only accepts data in a compressed format.",
        "Glacier can only be used to store frequently accessed data and data archives.",
        "Amazon Glacier does not provide immediate retrieval of data.",
        "Attach Glacier to an EC2 Instance to be able to store data."
      ],
      correctAnswer: [2],
      explanation: "Amazon S3 Glacier is designed for long-term archival storage and does not provide immediate retrieval of data — retrieval can take minutes to hours depending on the retrieval option chosen. Glacier accepts data in any format with no compression requirement, it's built for infrequently accessed archival data rather than frequently accessed data, and it's accessed via the S3 API/console rather than by attaching it to an EC2 instance."
    },
    {
      id: "paper-08-021",
      domain: "CMP",
      topic: "batch",
      type: "single",
      question: "Engineers are wasting a lot of time and effort managing batch computing software in traditional data centers. Which of the following AWS services allows them to easily run thousands of batch computing jobs?",
      options: [
        "Amazon EC2.",
        "AWS Batch.",
        "Lambda@Edge.",
        "AWS Fargate."
      ],
      correctAnswer: [1],
      explanation: "AWS Batch is a fully managed service that lets you run thousands of batch computing jobs efficiently, automatically provisioning the optimal compute resources without needing to manage the underlying batch scheduling software. Amazon EC2 alone would require manually managing the batch scheduling software, Lambda@Edge runs code at CloudFront edge locations, and Fargate runs containers but lacks the job queuing/scheduling that AWS Batch provides."
    },
    {
      id: "paper-08-022",
      domain: "GLB",
      topic: "availability-zones",
      type: "single",
      question: "How can you increase your application’s fault-tolerance while it is being hosted in AWS?",
      options: [
        "Deploy your application across multiple EC2 instances.",
        "Deploy your application across multiple Availability Zones.",
        "Host your application on one powerful EC2 instance type instead of multiple smaller instances.",
        "Deploy the underlying application resources across multiple subnets."
      ],
      correctAnswer: [1],
      explanation: "Deploying an application across multiple Availability Zones increases fault tolerance because if one AZ experiences an outage, the application keeps running from the others. Deploying across multiple EC2 instances within a single AZ still leaves you vulnerable to an AZ-level failure, using one large instance creates a single point of failure, and deploying across multiple subnets alone within the same AZ doesn't protect against a full AZ outage."
    },
    {
      id: "paper-08-023",
      domain: "ACM",
      topic: "support",
      type: "multiple-select",
      question: "Which of the following AWS Support Plans gives you 24/7 access to Cloud Support Engineers via email & phone? (Choose TWO)",
      options: [
        "Developer.",
        "Premium.",
        "Enterprise.",
        "Standard.",
        "Business."
      ],
      correctAnswer: [2, 4],
      explanation: "Both the Enterprise and Business support plans include 24/7 access to Cloud Support Engineers via phone and email. The Developer plan only offers business-hours email access, the Standard plan doesn't include phone support, and \"Premium\" is not an actual AWS Support plan tier."
    },
    {
      id: "paper-08-024",
      domain: "IAM",
      topic: "iam-user",
      type: "multiple-select",
      question: "Which of the following requires an access key ID and a secret access key to get long-lived programmatic access to AWS resources? (Choose TWO)",
      options: [
        "IAM group.",
        "IAM user.",
        "IAM role.",
        "AWS account root user.",
        "TAM."
      ],
      correctAnswer: [1, 3],
      explanation: "Both an IAM user and the AWS account root user have long-lived credentials in the form of an access key ID and secret access key that provide programmatic access to AWS resources. IAM groups don't have credentials of their own, IAM roles provide short-lived temporary credentials rather than long-lived access keys, and \"TAM\" refers to a Technical Account Manager, not an identity type with credentials."
    },
    {
      id: "paper-08-025",
      domain: "ARC",
      topic: "decoupling",
      type: "single",
      question: "Which of the following is a benefit of the “Loose Coupling” architecture principle?",
      options: [
        "It eliminates the need for change management.",
        "It allows for Cross-Region Replication.",
        "It helps AWS customers reduce Privileged Access to AWS resources.",
        "It allows individual application components or services to be modified without affecting other components."
      ],
      correctAnswer: [3],
      explanation: "The Loose Coupling architecture principle allows individual application components or services to be modified, updated, or scaled independently without affecting the rest of the application. It's unrelated to eliminating change management, Cross-Region Replication is an S3/database replication feature, and reducing privileged access is an IAM/security concept, not what loose coupling addresses."
    },
    {
      id: "paper-08-026",
      domain: "STG",
      topic: "efs",
      type: "single",
      question: "A company needs to host a big data application on AWS using EC2 instances. Which of the following AWS Storage services would they choose to automatically get high throughput to multiple compute nodes?",
      options: [
        "Amazon Elastic Block Store.",
        "AWS Storage Gateway.",
        "Amazon Elastic File System.",
        "S3."
      ],
      correctAnswer: [2],
      explanation: "Amazon Elastic File System (EFS) is a shared file storage system that can automatically deliver high throughput to multiple EC2 compute nodes simultaneously, suiting big-data workloads that need shared access. Amazon EBS volumes attach to only a single EC2 instance at a time, AWS Storage Gateway connects on-premises environments to AWS storage rather than serving multiple compute nodes, and S3 is object storage accessed over HTTP rather than a mounted file system for compute nodes."
    },
    {
      id: "paper-08-027",
      domain: "CLD",
      topic: "cloud-models",
      type: "single",
      question: "Which of the following Cloud Computing deployment models eliminates the need to run and maintain physical data centers?",
      options: [
        "On-premises.",
        "IaaS.",
        "PaaS.",
        "Cloud."
      ],
      correctAnswer: [3],
      explanation: "The Cloud deployment model eliminates the need to run and maintain physical data centers, since the cloud provider handles all physical infrastructure. On-premises is the traditional model that still requires physical data centers, and IaaS/PaaS are cloud service models describing what is provided rather than deployment models describing where infrastructure runs."
    },
    {
      id: "paper-08-028",
      domain: "ARC",
      topic: "marketplace",
      type: "multiple-select",
      question: "What are the benefits of the AWS Marketplace service? (Choose TWO)",
      options: [
        "Protects customers by performing periodic security checks on listed products.",
        "Per-second billing.",
        "Provides cheaper options for purchasing Amazon EC2 on-demand instances.",
        "Provides flexible pricing options that suit most customer needs.",
        "Provides software solutions that run on AWS or any other Cloud vendor."
      ],
      correctAnswer: [3, 4],
      explanation: "The AWS Marketplace offers flexible pricing options (hourly, monthly, annual, BYOL) to suit a variety of customer needs, and it provides software solutions that can run on AWS or other cloud/on-premises environments. It doesn't guarantee periodic security checks on every listed product, per-second billing is an EC2 On-Demand billing feature rather than a Marketplace benefit, and Marketplace doesn't itself provide cheaper EC2 on-demand pricing."
    },
    {
      id: "paper-08-029",
      domain: "STG",
      topic: "ebs",
      type: "single",
      question: "What is the benefit of Amazon EBS volumes being automatically replicated within the same availability zone?",
      options: [
        "Elasticity.",
        "Durability.",
        "Traceability.",
        "Accessibility."
      ],
      correctAnswer: [1],
      explanation: "Amazon EBS volumes are automatically and synchronously replicated within their Availability Zone to protect against component failure, which provides durability of stored data. This replication is unrelated to elasticity (scaling capacity), traceability (auditing), or accessibility (network/access) — those are separate concepts."
    },
    {
      id: "paper-08-030",
      domain: "ACM",
      topic: "pricing-models",
      type: "single",
      question: "You are planning to launch an advertising campaign over the coming weekend to promote a new digital product. It is expected that there will be heavy spikes in load during the campaign period, and you can’t afford any downtime. You need additional compute resources to handle the additional load. What is the most cost-effective EC2 instance purchasing option for this job?",
      options: [
        "Savings Plans.",
        "Spot Instances.",
        "Reserved Instances.",
        "On-Demand Instances."
      ],
      correctAnswer: [3],
      explanation: "On-Demand Instances are the most cost-effective choice for handling short, unpredictable spikes in load, like a weekend advertising campaign, because you only pay for what you use with no upfront commitment and can scale up instantly without downtime. Savings Plans and Reserved Instances require longer-term commitments that don't suit a short campaign, and Spot Instances can be interrupted by AWS at any time, risking downtime during the exact period you can't afford it."
    },
    {
      id: "paper-08-031",
      domain: "GLB",
      topic: "cloudfront",
      type: "single",
      question: "Which of the following AWS services integrates with AWS Shield and AWS Web Application Firewall (AWS WAF) to protect against network and application layer DDoS attacks?",
      options: [
        "Amazon EFS.",
        "AWS Secrets Manager.",
        "AWS Systems Manager.",
        "Amazon CloudFront."
      ],
      correctAnswer: [3],
      explanation: "Amazon CloudFront integrates natively with AWS Shield and AWS WAF to provide protection against network and application layer DDoS attacks at the edge, before traffic reaches the origin. Amazon EFS is file storage, AWS Secrets Manager stores credentials, and AWS Systems Manager is an operations-management tool — none of these integrate with Shield/WAF for DDoS protection."
    },
    {
      id: "paper-08-032",
      domain: "SEC",
      topic: "kms",
      type: "single",
      question: "Which of the following services is used when encrypting EBS volumes?",
      options: [
        "AWS WAF.",
        "AWS KMS.",
        "Amazon Macie.",
        "Amazon GuardDuty."
      ],
      correctAnswer: [1],
      explanation: "AWS Key Management Service (KMS) is used to create and manage the encryption keys that encrypt Amazon EBS volumes. AWS WAF filters web application traffic, Amazon Macie discovers sensitive data in S3, and Amazon GuardDuty detects threats — none of these handle the encryption keys used for EBS."
    },
    {
      id: "paper-08-033",
      domain: "IAM",
      topic: "root-user",
      type: "multiple-select",
      question: "The AWS account administrator of your company has been fired. With the permissions granted to him as an administrator, he was able to create multiple IAM user accounts and access keys. Additionally, you are not sure whether he has access to the AWS root account or not. What should you do immediately to protect your AWS infrastructure? (Choose TWO)",
      options: [
        "Download all the attached policies in a safe place.",
        "Delete all IAM accounts and recreate them.",
        "Use the CloudWatch service to check all API calls that have been made in your account since the administrator was fired.",
        "Rotate all access keys.",
        "Change the email address and password of the root user account and enable MFA."
      ],
      correctAnswer: [3, 4],
      explanation: "Rotating all access keys immediately invalidates any credentials the departed administrator may still hold, and changing the root user's email and password while enabling MFA locks down the single most powerful identity in the account. Downloading policies doesn't protect anything on its own, deleting and recreating every IAM account is unnecessarily disruptive compared to targeted key rotation, and reviewing API call history requires AWS CloudTrail, not CloudWatch, so that option names the wrong service."
    },
    {
      id: "paper-08-034",
      domain: "DBA",
      topic: "elasticache",
      type: "multiple-select",
      question: "What is the Amazon ElastiCache service used for? (Choose TWO)",
      options: [
        "Provide an in-memory data storage service.",
        "Reduce delivery costs using Edge Locations.",
        "Improve web application performance.",
        "Provide a Chef-compatible cache to speed up application response.",
        "Distribute requests to multiple instances."
      ],
      correctAnswer: [0, 2],
      explanation: "Amazon ElastiCache provides an in-memory data storage service that caches frequently accessed data, which improves web application performance by reducing latency and database load. It's unrelated to Edge Locations or delivery costs (that's CloudFront), it's compatible with Redis/Memcached rather than Chef, and it doesn't distribute requests across multiple instances — that's a load balancer's job."
    },
    {
      id: "paper-08-035",
      domain: "CLD",
      topic: "elasticity",
      type: "multiple-select",
      question: "The elasticity of the AWS Cloud enables customers to save costs when compared to traditional hosting providers. What can AWS customers do to benefit from the elasticity of the AWS Cloud? (Choose TWO)",
      options: [
        "Deploy your resources across multiple Availability Zones.",
        "Use Amazon EC2 Auto Scaling.",
        "Deploy your resources in another region.",
        "Use Elastic Load Balancing.",
        "Use Serverless Computing whenever possible."
      ],
      correctAnswer: [1, 4],
      explanation: "AWS customers benefit from cloud elasticity through Amazon EC2 Auto Scaling, which automatically adds or removes capacity to match demand, and through Serverless Computing (like Lambda), which requires no capacity provisioning and charges only for actual usage. Deploying across multiple AZs or another region improves availability/resilience rather than cost savings via elasticity, and Elastic Load Balancing distributes traffic but doesn't itself adjust capacity."
    },
    {
      id: "paper-08-036",
      domain: "ACM",
      topic: "pricing-models",
      type: "multiple-select",
      question: "What are some of the benefits of using On-Demand EC2 instances? (Choose TWO)",
      options: [
        "They provide free capacity when testing your new applications.",
        "They are cheaper than all other EC2 options.",
        "They remove the need to buy “safety net” capacity to handle periodic traffic spikes.",
        "They only require 1-2 days for setup and configuration.",
        "You can increase or decrease your compute capacity depending on the demands of your application."
      ],
      correctAnswer: [2, 4],
      explanation: "On-Demand instances remove the need to over-provision \"safety net\" capacity for traffic spikes, since additional instances can be launched instantly as needed, and compute capacity can be freely increased or decreased based on real-time application demand. On-Demand instances aren't free, they aren't the cheapest EC2 option since Spot and Reserved Instances can be cheaper, and launching an instance takes minutes, not 1-2 days."
    },
    {
      id: "paper-08-037",
      domain: "GLB",
      topic: "availability-zones",
      type: "single",
      question: "Each AWS Region is composed of multiple Availability Zones. Which of the following best describes what an Availability Zone is?",
      options: [
        "It is a data center designed to be completely isolated from other data centers in the same region.",
        "It is a collection of data centers distributed in multiple countries.",
        "It is a logically isolated network of the AWS Cloud.",
        "It is a distinct location within a region that is insulated from « failures in other Availability Zones."
      ],
      correctAnswer: [3],
      explanation: "An Availability Zone is a distinct location within an AWS Region, made up of one or more data centers, that is insulated from failures occurring in other Availability Zones. It is not designed to be completely isolated in a way that prevents any interaction with other data centers (AZs are connected via low-latency links), it is not a multi-country collection of data centers, and a \"logically isolated network\" describes a VPC, not an Availability Zone."
    },
    {
      id: "paper-08-038",
      domain: "GLB",
      topic: "regions",
      type: "single",
      question: "AWS provides disaster recovery capability by allowing customers to deploy infrastructure into multiple […].",
      options: [
        "Regions.",
        "Transportation devices.",
        "Support plans.",
        "Edge locations."
      ],
      correctAnswer: [0],
      explanation: "AWS enables disaster recovery by allowing customers to deploy infrastructure into multiple Regions, so that if one Region becomes unavailable, workloads can continue running from another. Transportation devices like Snowball are used for data transfer rather than DR, support plans provide customer service rather than infrastructure redundancy, and Edge Locations cache content for CloudFront but don't host full DR infrastructure."
    },
    {
      id: "paper-08-039",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "multiple-select",
      question: "A financial services company decides to migrate one of its applications to AWS. The application deals with sensitive data, such as credit card information, and must run on a PCI-compliant environment. Which of the following is the company’s responsibility when building a PCI-compliant environment in AWS? (Choose TWO)",
      options: [
        "Start the migration process immediately as all AWS services are PCI compliant.",
        "Ensure that AWS services are configured properly to meet all PCI DSS standards.",
        "Restrict any access to cardholder data and create a policy that addresses information security for all personnel.",
        "Configure the underlying infrastructure of AWS services to meet all PCI DSS requirements.",
        "Ensure that all PCI DSS physical security requirements are met."
      ],
      correctAnswer: [1, 2],
      explanation: "When building a PCI-compliant environment, the customer is responsible for ensuring AWS services are configured properly to meet PCI DSS standards and for restricting access to cardholder data along with implementing personnel security policies. Using AWS services doesn't automatically make an environment PCI compliant just because AWS itself is compliant, and configuring the underlying AWS infrastructure plus meeting physical security requirements are AWS's responsibilities, not the customer's."
    },
    {
      id: "paper-08-040",
      domain: "S3",
      topic: "s3",
      type: "single",
      question: "What is the maximum amount of data that can be stored in S3 in a single AWS account?",
      options: [
        "100 PetaBytes.",
        "Virtually unlimited storage.",
        "5TeraBytes.",
        "10 Exabytes."
      ],
      correctAnswer: [1],
      explanation: "Amazon S3 provides virtually unlimited storage capacity for a single AWS account, scaling automatically as more objects are added. There is no fixed 100-Petabyte or 10-Exabyte ceiling on account storage, and 5 TB is actually the maximum size of a single object, not a total account storage limit."
    },
    {
      id: "paper-08-041",
      domain: "ARC",
      topic: "well-architected",
      type: "single",
      question: "Which pillar of the AWS Well-Architected Framework provides recommendations to help customers select the right compute resources based on workload requirements?",
      options: [
        "Operational Excellence.",
        "Security.",
        "Performance Efficiency.",
        "Reliability."
      ],
      correctAnswer: [2],
      explanation: "The Performance Efficiency pillar of the AWS Well-Architected Framework provides guidance on selecting the right compute, storage, and database resources based on workload requirements and continually evolving that choice as needs change. Operational Excellence focuses on running and monitoring systems, Security focuses on protecting data and systems, and Reliability focuses on recovery and availability — none focus specifically on resource selection."
    },
    {
      id: "paper-08-042",
      domain: "GLB",
      topic: "cloudfront",
      type: "single",
      question: "Which AWS service delivers data, videos, applications, and APIs to users globally with low latency and high transfer speeds?",
      options: [
        "Amazon Route 53.",
        "Amazon Connect.",
        "Amazon CloudFront.",
        "Amazon EC2."
      ],
      correctAnswer: [2],
      explanation: "Amazon CloudFront is AWS's global content delivery network, delivering data, videos, applications, and APIs to end users worldwide with low latency and high transfer speeds via its network of edge locations. Route 53 is a DNS service, Amazon Connect is a cloud contact center service, and EC2 is compute infrastructure — none of these are built specifically to accelerate global content delivery."
    },
    {
      id: "paper-08-043",
      domain: "SEC",
      topic: "penetration-testing",
      type: "single",
      question: "Which of the following steps should be taken by a customer when conducting penetration testing on AWS?",
      options: [
        "Conduct penetration testing using Amazon Inspector, and then notify AWS support.",
        "Request and wait for approval from the customer’s internal security team, and then conduct testing.",
        "Notify AWS support, and then conduct testing immediately.",
        "Request and wait for approval from AWS support, and then conduct testing."
      ],
      correctAnswer: [3],
      explanation: "AWS requires customers to request and receive approval from AWS Support before conducting penetration testing against their AWS resources, since AWS needs to be aware of and authorize such testing. Conducting a test with Amazon Inspector and only notifying support afterward, or notifying support and testing immediately, both skip the required prior-approval step, and internal security team approval alone doesn't satisfy AWS's requirement."
    },
    {
      id: "paper-08-044",
      domain: "ACM",
      topic: "cost-and-usage-report",
      type: "single",
      question: "Which AWS Cost Management tool allows you to view the most granular data about your AWS bill?",
      options: [
        "AWS Cost Explorer.",
        "AWS Budgets.",
        "AWS Cost and Usage report.",
        "AWS Billing dashboard."
      ],
      correctAnswer: [2],
      explanation: "The AWS Cost and Usage Report provides the most comprehensive, granular data available about your AWS bill, including usage broken down by hour, resource tags, and cost allocation categories. AWS Cost Explorer offers visual analysis at a less granular level, AWS Budgets is for setting spend alerts, and the Billing dashboard offers only a summary view of costs."
    },
    {
      id: "paper-08-045",
      domain: "GLB",
      topic: "availability-zones",
      type: "single",
      question: "Which element of the AWS global infrastructure consists of one or more discrete data centers each with redundant power networking and connectivity which are housed in separate facilities?",
      options: [
        "AWS Regions.",
        "Availability Zones.",
        "Edge locations.",
        "Amazon CloudFront."
      ],
      correctAnswer: [1],
      explanation: "An Availability Zone consists of one or more discrete data centers, each with redundant power, networking, and connectivity, housed in separate physical facilities within a Region. An AWS Region is a broader geographic area containing multiple Availability Zones, Edge Locations are smaller sites used for content caching, and Amazon CloudFront is a CDN service rather than a physical infrastructure element."
    },
    {
      id: "paper-08-046",
      domain: "GLB",
      topic: "availability-zones",
      type: "single",
      question: "How many Availability Zones should compute resources be provisioned across to achieve high availability?",
      options: [
        "A minimum of one.",
        "A minimum of two.",
        "A minimum of three.",
        "A minimum of four or more."
      ],
      correctAnswer: [1],
      explanation: "To achieve high availability, compute resources should be provisioned across a minimum of two Availability Zones, so that if one AZ fails the application can continue running from the other. Provisioning in just one AZ leaves a single point of failure, and while three or more AZs can offer even greater resilience, two is the minimum needed to achieve basic high availability."
    },
    {
      id: "paper-08-047",
      domain: "GLB",
      topic: "global-infrastructure",
      type: "single",
      question: "The AWS Cloud’s multiple Regions are an example of:",
      options: [
        "Agility.",
        "Global infrastructure.",
        "Elasticity.",
        "Pay-as-you-go pricing."
      ],
      correctAnswer: [1],
      explanation: "AWS's multiple Regions around the world are a core example of AWS's global infrastructure, which spans Regions, Availability Zones, and Edge Locations. Agility refers to the speed of provisioning resources, elasticity refers to automatically scaling capacity, and pay-as-you-go pricing is a billing model — none of these describe the physical/geographic distribution of Regions."
    },
    {
      id: "paper-08-048",
      domain: "EC2",
      topic: "ec2",
      type: "single",
      question: "Which AWS service can be used to manually launch instances based on resource requirements?",
      options: [
        "Amazon EBS.",
        "Amazon S3.",
        "Amazon EC2.",
        "Amazon ECS."
      ],
      correctAnswer: [2],
      explanation: "Amazon EC2 is the service used to manually launch virtual server instances based on specific resource requirements such as CPU, memory, storage, and networking. Amazon EBS is block storage, S3 is object storage, and Amazon ECS orchestrates containers rather than launching individual virtual machine instances directly."
    },
    {
      id: "paper-08-049",
      domain: "ARC",
      topic: "reliability",
      type: "single",
      question: "Which is a recommended pattern for designing a highly available architecture on AWS?",
      options: [
        "Ensure that components have low-latency network connectivity.",
        "Run enough Amazon EC2 instances to operate at peak load.",
        "Ensure that the application is designed to accommodate failure of any single component.",
        "Use a monolithic application that handles all operations."
      ],
      correctAnswer: [2],
      explanation: "A recommended pattern for high availability is designing the application so it can withstand the failure of any single component without the overall system going down. Ensuring low-latency connectivity, running enough instances for peak load, and building a monolithic application don't address failure tolerance and are not the defining principle behind high-availability design."
    },
    {
      id: "paper-08-050",
      domain: "CLD",
      topic: "elasticity",
      type: "multiple-select",
      question: "Which AWS characteristics make AWS cost effective for a workload with dynamic user demand? (Select TWO)",
      options: [
        "High availability.",
        "Shared security model.",
        "Elasticity.",
        "Pay-as-you-go pricing.",
        "Reliability."
      ],
      correctAnswer: [2, 3],
      explanation: "Elasticity lets AWS resources automatically scale up or down to match dynamic user demand so you're never paying for idle capacity, and pay-as-you-go pricing means you're only billed for the resources actually consumed, making these characteristics cost-effective together. High availability and reliability describe uptime and resilience rather than cost efficiency in this context, and the shared security model describes the AWS/customer responsibility split, not a cost driver."
    }
  ]
});
