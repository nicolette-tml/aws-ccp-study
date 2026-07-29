window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "paper-02",
  paperId: "paper-02",
  paperName: "Practice Paper 2",
  questions: [
    {
      id: "paper-02-001",
      domain: "ACM",
      topic: "organizations",
      type: "single",
      question: "A global company with a large number of AWS accounts is seeking a way in which they can centrally manage billing and security policies across all accounts. Which AWS Service will assist them in meeting these goals?",
      options: [
        "AWS Organizations.",
        "AWS Trusted Advisor.",
        "IAM User Groups.",
        "AWS Config."
      ],
      correctAnswer: [0],
      explanation: "AWS Organizations lets a company centrally manage billing and apply security policies, such as Service Control Policies, across multiple AWS accounts from a single management account. Trusted Advisor gives recommendations within a single account, IAM User Groups manage permissions for users within one account, and AWS Config tracks resource configurations — none provide centralized multi-account billing and policy management."
    },
    {
      id: "paper-02-002",
      domain: "S3",
      topic: "s3",
      type: "single",
      question: "Which service provides object-level storage in AWS?",
      options: [
        "Amazon EBS.",
        "Amazon Instance Store.",
        "Amazon EFS.",
        "Amazon S3."
      ],
      correctAnswer: [3],
      explanation: "Amazon S3 provides object-level storage, storing data as objects with metadata inside buckets. Amazon EBS provides block-level storage attached to an EC2 instance, Amazon Instance Store is ephemeral block storage physically attached to the host, and Amazon EFS provides file-level storage — none of these are object storage."
    },
    {
      id: "paper-02-003",
      domain: "ELB",
      topic: "auto-scaling",
      type: "single",
      question: "A company is concerned that they are spending money on underutilized compute resources in AWS. Which AWS feature will help ensure that their applications are automatically adding/removing EC2 compute capacity to closely match the required demand?",
      options: [
        "AWS Elastic Load Balancer.",
        "AWS Budgets.",
        "AWS Auto Scaling.",
        "AWS Cost Explorer."
      ],
      correctAnswer: [2],
      explanation: "AWS Auto Scaling automatically adds or removes EC2 compute capacity to match actual demand, preventing a company from paying for underutilized resources. An Elastic Load Balancer only distributes traffic across existing instances (it doesn't adjust capacity), and AWS Budgets and Cost Explorer are cost-monitoring tools that don't automatically scale infrastructure."
    },
    {
      id: "paper-02-004",
      domain: "S3",
      topic: "storage-classes",
      type: "single",
      question: "Which S3 storage class is best for data with unpredictable access patterns?",
      options: [
        "Amazon S3 Intelligent-Tiering.",
        "Amazon S3 Glacier Flexible Retrieval.",
        "Amazon S3 Standard.",
        "Amazon S3 Standard-Infrequent Access."
      ],
      correctAnswer: [0],
      explanation: "Amazon S3 Intelligent-Tiering automatically moves objects between access tiers based on changing, unpredictable access patterns, optimizing cost without manual intervention. S3 Glacier Flexible Retrieval and S3 Standard-Infrequent Access are designed for known, infrequently accessed data, and S3 Standard is optimized for frequently accessed data — neither adapts automatically to unknown access patterns like Intelligent-Tiering does."
    },
    {
      id: "paper-02-005",
      domain: "DBA",
      topic: "dynamodb",
      type: "single",
      question: "What is the AWS database service that allows you to upload data structured in key-value format?",
      options: [
        "Amazon DynamoDB.",
        "Amazon Aurora.",
        "Amazon Redshift.",
        "Amazon RDS."
      ],
      correctAnswer: [0],
      explanation: "Amazon DynamoDB is AWS's fully managed NoSQL database that natively stores and retrieves data in key-value (and document) format. Amazon Aurora and Amazon RDS are relational databases that use structured tables, and Amazon Redshift is a data warehouse for analytics — none use key-value as their native data model."
    },
    {
      id: "paper-02-006",
      domain: "ACM",
      topic: "on-demand-instances",
      type: "single",
      question: "Which of the following is NOT correct regarding Amazon EC2 On-demand instances?",
      options: [
        "You have to pay a start-up fee when launching a new instance for the first time.",
        "The on-demand instances follow the AWS pay-as-you-go pricing model.",
        "With on-demand instances, no longer-term commitments or upfront payments are needed.",
        "When using on-demand Linux instances, you are charged per second based on an hourly rate."
      ],
      correctAnswer: [0],
      explanation: "On-Demand instances do not require any start-up or upfront fee — customers simply pay per second or hour with no commitment, which is why this statement is the one that is NOT correct. The other statements are true: On-Demand follows the pay-as-you-go pricing model, requires no long-term commitment or upfront payment, and Linux instances are billed per second based on an hourly rate."
    },
    {
      id: "paper-02-007",
      domain: "ACM",
      topic: "trusted-advisor",
      type: "multiple-select",
      question: "A company has moved to AWS recently. Which of the following AWS Services will help ensure that they have the proper security settings? (Choose TWO)",
      options: [
        "AWS Trusted Advisor.",
        "Amazon Inspector.",
        "Amazon SNS.",
        "Amazon CloudWatch.",
        "Concierge Support Team."
      ],
      correctAnswer: [0, 1],
      explanation: "AWS Trusted Advisor and Amazon Inspector both help verify proper security settings after a move to AWS: Trusted Advisor flags best-practice violations such as open ports or overly permissive access, while Inspector actively scans EC2 instances for vulnerabilities. Amazon SNS is a notification service, Amazon CloudWatch monitors performance metrics rather than security posture, and the Concierge Support Team assists with billing, not security configuration."
    },
    {
      id: "paper-02-008",
      domain: "IAM",
      topic: "mfa",
      type: "single",
      question: "What is the AWS feature that provides an additional level of security above the default authentication mechanism of usernames and passwords?",
      options: [
        "Encrypted keys.",
        "Email verification.",
        "AWS KMS.",
        "AWS MFA."
      ],
      correctAnswer: [3],
      explanation: "AWS Multi-Factor Authentication (MFA) adds an extra layer of security beyond the default username-and-password login by requiring a second factor, such as a code from a physical or virtual device. Encrypted keys and AWS KMS relate to data encryption rather than login authentication, and email verification is not an AWS authentication mechanism."
    },
    {
      id: "paper-02-009",
      domain: "ACM",
      topic: "support",
      type: "single",
      question: "A company is introducing a new product to their customers, and is expecting a surge in traffic to their web application. As part of their Enterprise Support plan, which of the following provides the company with architectural and scaling guidance?",
      options: [
        "AWS Knowledge Center.",
        "AWS Health Dashboard.",
        "Infrastructure Event Management.",
        "AWS Support Concierge Service."
      ],
      correctAnswer: [2],
      explanation: "Infrastructure Event Management (IEM) is an Enterprise Support offering that provides architectural and scaling guidance ahead of planned events, such as a product launch expected to surge traffic. The AWS Knowledge Center offers self-service articles, the AWS Health Dashboard reports service status, and the 'AWS Support Concierge Service' assists with billing and account inquiries — none provide event-specific scaling guidance."
    },
    {
      id: "paper-02-010",
      domain: "DBA",
      topic: "rds",
      type: "single",
      question: "You work as an on-premises MySQL DBA. The work of database configuration, backups, patching, and DR can be time-consuming and repetitive. Your company has decided to migrate to the AWS Cloud. Which of the following can help save time on database maintenance so you can focus on data architecture and performance?",
      options: [
        "Amazon RDS.",
        "Amazon Redshift.",
        "Amazon DynamoDB.",
        "Amazon CloudWatch."
      ],
      correctAnswer: [0],
      explanation: "Amazon RDS is a managed relational database service that handles configuration, automated backups, patching, and disaster recovery for engines like MySQL, freeing the DBA to focus on data architecture and performance. Amazon Redshift is a data warehouse (not a general-purpose transactional database), Amazon DynamoDB is NoSQL (not MySQL-compatible), and Amazon CloudWatch only monitors metrics — it doesn't manage the database itself."
    },
    {
      id: "paper-02-011",
      domain: "ARC",
      topic: "design-principles",
      type: "single",
      question: "Which of the below is a best-practice when designing solutions on AWS?",
      options: [
        "Invest heavily in architecting your environment, as it is not easy to change your design later.",
        "Use AWS reservations to reduce costs when testing your production environment.",
        "Automate wherever possible to make architectural experimentation easier.",
        "Provision a large compute capacity to handle any spikes in load"
      ],
      correctAnswer: [2],
      explanation: "Automating wherever possible is a core AWS best practice, making architectural experimentation, testing, and recovery faster, cheaper, and less error-prone. Investing heavily upfront in an unchangeable design contradicts the cloud's flexibility, using Reserved Instances for a test environment mismatches their purpose of long-term steady workloads, and over-provisioning large compute capacity for spikes wastes money instead of relying on elasticity."
    },
    {
      id: "paper-02-012",
      domain: "SEC",
      topic: "penetration-testing",
      type: "single",
      question: "According to the AWS Acceptable Use Policy, which of the following statements is true regarding penetration testing of EC2 instances?",
      options: [
        "Penetration testing is not allowed in AWS.",
        "Penetration testing is performed automatically by AWS to determine vulnerabilities in your AWS infrastructure.",
        "Penetration testing can be performed by the customer on their own instances without prior authorization from AWS.",
        "The AWS customers are only allowed to perform penetration testing on services managed by AWS."
      ],
      correctAnswer: [2],
      explanation: "Under the AWS Acceptable Use Policy, customers are permitted to perform penetration testing against their own EC2 instances (among a defined list of services) without needing prior authorization from AWS. Penetration testing is not banned in AWS, AWS does not automatically run it on your behalf, and it is not restricted to only AWS-managed services."
    },
    {
      id: "paper-02-013",
      domain: "INT",
      topic: "sqs",
      type: "single",
      question: "Which service is used to ensure that messages between software components are not lost if one or more components fail?",
      options: [
        "Amazon SQS.",
        "Amazon SES.",
        "AWS Direct Connect.",
        "Amazon Connect."
      ],
      correctAnswer: [0],
      explanation: "Amazon SQS is a message queuing service that decouples software components and durably stores messages so they are not lost if a receiving component fails. Amazon SES sends email, AWS Direct Connect provides a private network link (not messaging), and Amazon Connect is a contact-center service — none guarantee message durability between application components."
    },
    {
      id: "paper-02-014",
      domain: "ELB",
      topic: "high-availability",
      type: "multiple-select",
      question: "The principle “design for failure and nothing will fail” is very important when designing your AWS Cloud architecture. Which of the following would help adhere to this principle? (Choose TWO)",
      options: [
        "Multi-factor authentication.",
        "Availability Zones.",
        "Elastic Load Balancing.",
        "Penetration testing.",
        "Vertical Scaling."
      ],
      correctAnswer: [1, 2],
      explanation: "Deploying across multiple Availability Zones and using Elastic Load Balancing both support the 'design for failure' principle, since traffic is automatically routed away from a failed AZ or unhealthy instance toward healthy resources. Multi-factor authentication is a security control, penetration testing identifies vulnerabilities rather than building resilience, and vertical scaling upgrades a single instance, which increases rather than removes a single point of failure."
    },
    {
      id: "paper-02-015",
      domain: "VPC",
      topic: "vpc",
      type: "single",
      question: "What is the AWS service that provides a virtual network dedicated to your AWS account?",
      options: [
        "AWS VPN.",
        "AWS Subnets.",
        "AWS Dedicated Hosts.",
        "Amazon VPC."
      ],
      correctAnswer: [3],
      explanation: "Amazon VPC provides an isolated, logically separated virtual network dedicated to a single AWS account, where the customer controls IP ranges, subnets, and routing. AWS VPN and subnets are components used within or alongside a VPC rather than being the dedicated network itself, and Dedicated Hosts relate to physical EC2 hardware isolation, not networking."
    },
    {
      id: "paper-02-016",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "multiple-select",
      question: "According to the AWS Shared responsibility model, which of the following are the responsibility of the customer? (Choose TWO)",
      options: [
        "Managing environmental events of AWS data centers.",
        "Protecting the confidentiality of data in transit in Amazon S3.",
        "Controlling physical access to AWS Regions.",
        "Ensuring that the underlying EC2 host is configured properly.",
        "Patching applications installed on Amazon EC2."
      ],
      correctAnswer: [1, 4],
      explanation: "Customers are responsible for protecting the confidentiality of their own data in transit, such as enabling encryption for S3 traffic, and for patching the applications they install on their EC2 instances. Managing environmental events and physical access to AWS Regions are AWS's responsibility, and AWS also ensures the underlying EC2 host hardware and hypervisor are configured properly."
    },
    {
      id: "paper-02-017",
      domain: "CMP",
      topic: "compute-services",
      type: "multiple-select",
      question: "Which of the following AWS services can be used as a compute resource? (Choose TWO)",
      options: [
        "Amazon VPC.",
        "Amazon CloudWatch.",
        "Amazon S3.",
        "Amazon EC2.",
        "AWS Lambda."
      ],
      correctAnswer: [3, 4],
      explanation: "Amazon EC2 (virtual servers) and AWS Lambda (serverless functions) are both examples of AWS compute resources used to run application code. Amazon VPC is a networking service, Amazon CloudWatch is a monitoring service, and Amazon S3 is a storage service — none of these provide compute capacity to execute workloads."
    },
    {
      id: "paper-02-018",
      domain: "S3",
      topic: "s3",
      type: "single",
      question: "Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?",
      options: [
        "Amazon EBS.",
        "Amazon SQS.",
        "Amazon S3.",
        "Amazon Instance store."
      ],
      correctAnswer: [2],
      explanation: "Amazon S3 is the ideal underlying storage service for photos and videos, offering durable, scalable object storage accessible from anywhere. Amazon EBS is block storage tied to a single EC2 instance, Amazon SQS is a messaging queue rather than storage, and Amazon Instance Store is ephemeral storage lost when the instance stops — none suit persistent media storage as well as S3."
    },
    {
      id: "paper-02-019",
      domain: "IAM",
      topic: "access-keys",
      type: "single",
      question: "Which of the following is equivalent to a user name and password and is used to authenticate your programmatic access to AWS services and APIs?",
      options: [
        "Instance Password.",
        "Key pairs.",
        "Access Keys.",
        "MFA."
      ],
      correctAnswer: [2],
      explanation: "Access Keys, consisting of an Access Key ID and Secret Access Key, are the credentials used to authenticate programmatic access to AWS services and APIs, functioning like a username and password for the CLI or SDK. 'Instance Password' is not an AWS credential type, key pairs are used for SSH access to EC2 instances rather than general API calls, and MFA is a second authentication factor, not a standalone credential."
    },
    {
      id: "paper-02-020",
      domain: "DBA",
      topic: "elasticache",
      type: "single",
      question: "What does Amazon ElastiCache provide?",
      options: [
        "In-memory caching for read-heavy applications.",
        "An Ehcache compatible in-memory data store.",
        "An online software store that allows Customers to launch pre-configured software with just few clicks.",
        "A domain name system in the cloud."
      ],
      correctAnswer: [0],
      explanation: "Amazon ElastiCache provides in-memory caching, using Redis or Memcached, that dramatically speeds up read-heavy applications by storing frequently accessed data in RAM. It is not specifically 'Ehcache compatible,' it is not a software marketplace (that role belongs to AWS Marketplace), and it has nothing to do with domain name resolution, which is handled by Route 53."
    },
    {
      id: "paper-02-021",
      domain: "ACM",
      topic: "organizations",
      type: "single",
      question: "What is the AWS service that enables you to manage all of your AWS accounts from a single master account?",
      options: [
        "AWS WAF.",
        "AWS Trusted Advisor.",
        "AWS Organizations.",
        "Amazon Config."
      ],
      correctAnswer: [2],
      explanation: "AWS Organizations lets a company centrally manage and govern multiple AWS accounts from a single management (master) account. AWS WAF filters web traffic, AWS Trusted Advisor gives best-practice recommendations for individual accounts, and AWS Config tracks resource configurations — none manage multiple accounts centrally."
    },
    {
      id: "paper-02-022",
      domain: "EC2",
      topic: "dedicated-hosts",
      type: "single",
      question: "Which of the following EC2 instance purchasing options supports the Bring Your Own License (BYOL) model for almost every BYOL scenario?",
      options: [
        "Dedicated Instances.",
        "Dedicated Hosts.",
        "On-demand Instances.",
        "Reserved Instances."
      ],
      correctAnswer: [1],
      explanation: "Dedicated Hosts provide a physical EC2 server fully dedicated to a single customer, exposing the underlying sockets and physical cores needed to support Bring Your Own License (BYOL) models for almost every scenario. Dedicated Instances guarantee dedicated hardware without that visibility into sockets and cores, and On-Demand and Reserved Instances run on shared hardware, which does not satisfy most BYOL licensing requirements."
    },
    {
      id: "paper-02-023",
      domain: "CLD",
      topic: "cloud-benefits",
      type: "single",
      question: "Which of the following is one of the benefits of moving infrastructure from an on-premises data center to AWS?",
      options: [
        "Free support for all enterprise customers.",
        "Automatic data protection.",
        "Reduced Capital Expenditure (CapEx).",
        "AWS holds responsibility for managing customer applications."
      ],
      correctAnswer: [2],
      explanation: "Moving from an on-premises data center to AWS reduces Capital Expenditure (CapEx) because a company no longer needs to purchase and maintain physical hardware, instead paying for usage as an operating expense. Support is not free for all customers (Basic support has limited scope), AWS does not automatically protect all customer data (data security remains largely a customer responsibility), and AWS never manages customer applications."
    },
    {
      id: "paper-02-024",
      domain: "ARC",
      topic: "design-principles",
      type: "multiple-select",
      question: "Which of the following are important design principles you should adopt when designing systems on AWS? (Choose TWO)",
      options: [
        "Always use Global Services in your architecture rather than Regional Services.",
        "Always choose to pay as you go.",
        "Treat servers as fixed resources.",
        "Automate wherever possible.",
        "Remove single points of failure."
      ],
      correctAnswer: [3, 4],
      explanation: "Automating wherever possible and removing single points of failure are both foundational AWS design principles that improve reliability and reduce manual, error-prone work. Favoring Global Services over Regional Services is not a universal rule, since many workloads require Regional services, always paying as you go ignores cost-optimization options like Savings Plans, and treating servers as fixed rather than disposable resources contradicts cloud-native design."
    },
    {
      id: "paper-02-025",
      domain: "VPC",
      topic: "direct-connect",
      type: "single",
      question: "Which AWS Service can be used to establish a dedicated, private network connection between AWS and your datacenter?",
      options: [
        "AWS Direct Connect.",
        "Amazon CloudFront.",
        "AWS Snowball.",
        "Amazon Route 53."
      ],
      correctAnswer: [0],
      explanation: "AWS Direct Connect establishes a dedicated, private network connection between an on-premises data center and AWS, bypassing the public internet. Amazon CloudFront is a content delivery network, AWS Snowball is a physical data-transfer device, and Amazon Route 53 is a DNS service — none create a private, dedicated network link."
    },
    {
      id: "paper-02-026",
      domain: "VPC",
      topic: "vpc",
      type: "single",
      question: "You are working on two projects that require completely different network configurations. Which AWS service or feature will allow you to isolate resources and network configurations?",
      options: [
        "Internet gateways.",
        "Virtual Private Cloud.",
        "Security Groups.",
        "Amazon CloudFront."
      ],
      correctAnswer: [1],
      explanation: "A Virtual Private Cloud lets you create logically isolated virtual networks, each with its own IP ranges, subnets, and routing, making it possible to run two projects with completely different network configurations independently. Internet gateways and Security Groups are components used within a VPC rather than isolation mechanisms themselves, and Amazon CloudFront is a content delivery service unrelated to network isolation."
    },
    {
      id: "paper-02-027",
      domain: "SEC",
      topic: "waf",
      type: "single",
      question: "Which of the following services can help protect your web applications from SQL injection and other vulnerabilities in your application code?",
      options: [
        "Amazon Cognito.",
        "AWS IAM.",
        "Amazon Aurora.",
        "AWS WAF."
      ],
      correctAnswer: [3],
      explanation: "AWS WAF (Web Application Firewall) protects web applications by filtering and blocking common exploits, including SQL injection and cross-site scripting, at the application layer. Amazon Cognito manages user identities, AWS IAM controls access permissions, and Amazon Aurora is a database — none filter malicious web traffic."
    },
    {
      id: "paper-02-028",
      domain: "DBA",
      topic: "emr",
      type: "single",
      question: "An organization needs to analyze and process a large number of data sets. Which AWS service should they use?",
      options: [
        "Amazon EMR.",
        "Amazon MQ.",
        "Amazon SNS.",
        "Amazon SQS."
      ],
      correctAnswer: [0],
      explanation: "Amazon EMR (Elastic MapReduce) is a managed big-data platform built on frameworks like Hadoop and Spark for processing and analyzing very large datasets. Amazon MQ is a message broker, and Amazon SNS and Amazon SQS are messaging and notification services — none are designed for large-scale data analytics."
    },
    {
      id: "paper-02-029",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "multiple-select",
      question: "Based on the AWS Shared Responsibility Model, which of the following are the sole responsibility of AWS? (Choose TWO)",
      options: [
        "Monitoring network performance.",
        "Installing software on EC2 instances.",
        "Creating hypervisors.",
        "Configuring Access Control Lists (ACLs).",
        "Hardware maintenance."
      ],
      correctAnswer: [2, 4],
      explanation: "Creating hypervisors and hardware maintenance are the sole responsibility of AWS, since both involve managing the physical infrastructure 'of' the cloud. Monitoring network performance and installing software are customer tasks for their own workloads, and configuring Access Control Lists is also a customer responsibility within their own VPC."
    },
    {
      id: "paper-02-030",
      domain: "EC2",
      topic: "ec2",
      type: "single",
      question: "What is the AWS service that provides you the highest level of control over the underlying virtual infrastructure?",
      options: [
        "Amazon Redshift.",
        "Amazon DynamoDB.",
        "Amazon EC2.",
        "Amazon RDS."
      ],
      correctAnswer: [2],
      explanation: "Amazon EC2 gives customers the highest level of control over the underlying virtual infrastructure, letting them choose the operating system, install software, and manage configurations much like a traditional server. Amazon Redshift and Amazon DynamoDB are managed services with far less infrastructure control, and Amazon RDS abstracts away OS and database-engine management — none offer as much control as EC2."
    },
    {
      id: "paper-02-031",
      domain: "IAM",
      topic: "iam",
      type: "single",
      question: "What are the default security credentials that are required to access the AWS management console for an IAM user account?",
      options: [
        "MFA.",
        "Security tokens.",
        "A user name and password.",
        "Access keys."
      ],
      correctAnswer: [2],
      explanation: "A user name and password are the default security credentials required to sign in to the AWS Management Console for an IAM user account. MFA is an optional additional security layer, security tokens are temporary credentials used in specific scenarios such as AWS STS, and access keys are used for programmatic CLI or SDK access rather than console sign-in."
    },
    {
      id: "paper-02-032",
      domain: "EC2",
      topic: "ami",
      type: "single",
      question: "In your on-premises environment, you can create as many virtual servers as you need from a single template. What can you use to perform the same in AWS?",
      options: [
        "IAM.",
        "An internet gateway.",
        "EBS Snapshot.",
        "AMI."
      ],
      correctAnswer: [3],
      explanation: "An Amazon Machine Image (AMI) is a template containing the information needed to launch an EC2 instance, letting a customer create as many identical virtual servers as needed, just like an on-premises server template. IAM manages access permissions, an internet gateway provides internet connectivity, and an EBS snapshot is a backup of a volume rather than a full server template."
    },
    {
      id: "paper-02-033",
      domain: "CLD",
      topic: "cloud-benefits",
      type: "multiple-select",
      question: "What are two advantages of using Cloud Computing over using traditional data centers? (Choose TWO)",
      options: [
        "Reserved Compute capacity.",
        "Eliminating Single Points of Failure (SPOFs).",
        "Distributed infrastructure.",
        "Virtualized compute resources.",
        "Dedicated hosting."
      ],
      correctAnswer: [1, 2],
      explanation: "Cloud computing lets organizations eliminate single points of failure and build distributed infrastructure across multiple facilities, both of which are difficult and costly to achieve on-premises. Reserved compute capacity and dedicated hosting resemble traditional fixed infrastructure, and while virtualization underlies the cloud, virtualized compute resources alone are not a comparative advantage since on-premises environments can also virtualize."
    },
    {
      id: "paper-02-034",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "multiple-select",
      question: "Which of the following aspects of security are managed by AWS? (Choose TWO)",
      options: [
        "Encryption of EBS volumes.",
        "VPC security.",
        "Access permissions.",
        "Hardware patching.",
        "Securing global physical infrastructure."
      ],
      correctAnswer: [3, 4],
      explanation: "AWS is responsible for hardware patching of the underlying infrastructure and for securing the global physical infrastructure such as data centers, per the Shared Responsibility Model. Encryption of EBS volumes, VPC security configuration, and access permissions are all set up and managed by the customer."
    },
    {
      id: "paper-02-035",
      domain: "ARC",
      topic: "well-architected",
      type: "single",
      question: "Which statement best describes the operational excellence pillar of the AWS Well-Architected Framework?",
      options: [
        "The ability of a system to recover gracefully from failure.",
        "The efficient use of computing resources to meet requirements.",
        "The ability to monitor systems and improve supporting processes and procedures.",
        "The ability to manage datacenter operations more efficiently."
      ],
      correctAnswer: [2],
      explanation: "The Operational Excellence pillar of the AWS Well-Architected Framework focuses on the ability to monitor systems and continually improve supporting processes and procedures. The ability to recover gracefully from failure describes the Reliability pillar, efficient use of computing resources describes the Performance Efficiency pillar, and managing datacenter operations is an AWS-side concern rather than a customer-facing Well-Architected pillar."
    },
    {
      id: "paper-02-036",
      domain: "GLB",
      topic: "cloudfront",
      type: "single",
      question: "AWS has created a large number of Edge Locations as part of its Global Infrastructure. Which of the following is NOT a benefit of using Edge Locations?",
      options: [
        "Edge locations are used by CloudFront to cache the most recent responses.",
        "Edge locations are used by CloudFront to improve your end users’ experience when uploading files.",
        "Edge locations are used by CloudFront to distribute traffic across multiple instances to reduce latency.",
        "Edge locations are used by CloudFront to distribute content to global users with low latency."
      ],
      correctAnswer: [2],
      explanation: "Distributing traffic across multiple EC2 instances is the job of a load balancer, not Edge Locations, making this the statement that is NOT a benefit. Edge Locations genuinely help CloudFront cache the most recent responses, speed up file uploads for end users, and deliver content to global users with low latency."
    },
    {
      id: "paper-02-037",
      domain: "MON",
      topic: "aws-config",
      type: "multiple-select",
      question: "What are the change management tools that helps AWS customers audit and monitor all resource changes in their AWS environment? (Choose TWO)",
      options: [
        "AWS CloudTrail.",
        "Amazon Comprehend.",
        "AWS Transit Gateway.",
        "AWS X-Ray.",
        "AWS Config."
      ],
      correctAnswer: [0, 4],
      explanation: "AWS CloudTrail records API calls for auditing who performed which action, while AWS Config tracks and records configuration changes to resources over time — together these let customers audit and monitor all resource changes in their environment. Amazon Comprehend is a natural-language ML service, AWS Transit Gateway connects networks, and AWS X-Ray traces application requests — none track configuration or change history."
    },
    {
      id: "paper-02-038",
      domain: "CMP",
      topic: "ecs",
      type: "single",
      question: "Which of the following services allows you to run containerized applications on a cluster of EC2 instances?",
      options: [
        "Amazon ECS.",
        "AWS Data Pipeline.",
        "AWS Cloud9.",
        "AWS Personal Health Dashboard."
      ],
      correctAnswer: [0],
      explanation: "Amazon ECS (Elastic Container Service) lets customers run and orchestrate containerized applications across a cluster of EC2 instances. AWS Data Pipeline moves and transforms data, AWS Cloud9 is a cloud IDE, and the AWS Personal Health Dashboard reports service health — none run containers."
    },
    {
      id: "paper-02-039",
      domain: "MON",
      topic: "cloudtrail",
      type: "single",
      question: "Which of the following services will help businesses ensure compliance in AWS?",
      options: [
        "CloudFront.",
        "CloudEndure Migration.",
        "CloudWatch.",
        "CloudTrail."
      ],
      correctAnswer: [3],
      explanation: "AWS CloudTrail helps businesses ensure compliance by providing a detailed audit log of every API call made in their AWS account, supporting governance and regulatory requirements. Amazon CloudFront is a content delivery network, CloudEndure Migration is a disaster-recovery and migration tool, and Amazon CloudWatch monitors performance metrics — none provide the audit trail needed for compliance."
    },
    {
      id: "paper-02-040",
      domain: "S3",
      topic: "storage-classes",
      type: "single",
      question: "Which of the following procedures will help reduce your Amazon S3 costs?",
      options: [
        "Use the Import/Export feature to move old files automatically to Amazon Glacier.",
        "Use the right combination of storage classes based on different use cases.",
        "Pick the right Availability Zone for your S3 bucket.",
        "Move all the data stored in S3 standard to EBS."
      ],
      correctAnswer: [1],
      explanation: "Using the right combination of S3 storage classes based on access patterns, such as moving infrequently accessed data to S3 Standard-IA or Glacier, reduces costs by matching price to actual usage. There is no 'Import/Export' feature that automatically moves files to Glacier, Availability Zone choice does not affect S3 pricing, and moving data from S3 to EBS would increase complexity and cost rather than reduce it."
    },
    {
      id: "paper-02-041",
      domain: "ELB",
      topic: "high-availability",
      type: "multiple-select",
      question: "What are the AWS services/features that can help you maintain a highly available and fault-tolerant architecture in AWS? (Choose TWO)",
      options: [
        "AWS Direct Connect.",
        "Amazon EC2 Auto Scaling.",
        "Elastic Load Balancer.",
        "CloudFormation.",
        "Network ACLs."
      ],
      correctAnswer: [1, 2],
      explanation: "Amazon EC2 Auto Scaling automatically replaces unhealthy instances and adjusts capacity, while an Elastic Load Balancer distributes traffic across healthy instances spanning multiple Availability Zones — together they maintain high availability and fault tolerance. AWS Direct Connect is a private network link, CloudFormation provisions infrastructure as code, and Network ACLs are traffic filters — none directly ensure availability during failures."
    },
    {
      id: "paper-02-042",
      domain: "ACM",
      topic: "cost-optimization",
      type: "single",
      question: "Which of the following activities may help reduce your AWS monthly costs?",
      options: [
        "Enabling Amazon EC2 Auto Scaling for all of your workloads.",
        "Using the AWS Network Load Balancer (NLB) to load balance the incoming HTTP requests.",
        "Removing all of your Cost Allocation Tags.",
        "Deploying your AWS resources across multiple Availability Zones."
      ],
      correctAnswer: [0],
      explanation: "Enabling EC2 Auto Scaling for workloads reduces monthly costs by automatically scaling capacity down when demand drops, so a company does not pay for idle instances. Using a Network Load Balancer for HTTP traffic is not a cost-optimization move since an Application Load Balancer is better suited to HTTP, removing Cost Allocation Tags removes cost-tracking visibility without reducing actual spend, and deploying across multiple Availability Zones improves availability but adds cost rather than reducing it."
    },
    {
      id: "paper-02-043",
      domain: "S3",
      topic: "s3-transfer-acceleration",
      type: "single",
      question: "What is the AWS service/feature that takes advantage of Amazon CloudFront’s globally distributed edge locations to transfer files to S3 with higher upload speeds?",
      options: [
        "S3 Transfer Acceleration.",
        "AWS WAF.",
        "AWS Snowmobile.",
        "AWS Snowball."
      ],
      correctAnswer: [0],
      explanation: "S3 Transfer Acceleration uses Amazon CloudFront's globally distributed Edge Locations to accelerate uploads to S3 over long distances, routing data over AWS's optimized backbone network. AWS WAF is a web application firewall, and AWS Snowmobile and AWS Snowball are physical devices for bulk offline data transfer — none use CloudFront edge locations to speed up S3 uploads."
    },
    {
      id: "paper-02-044",
      domain: "VPC",
      topic: "security-groups",
      type: "single",
      question: "Which of the following AWS security features is associated with an EC2 instance and functions to filter incoming traffic requests?",
      options: [
        "AWS X-Ray.",
        "Network ACL.",
        "Security Groups.",
        "VPC Flow logs."
      ],
      correctAnswer: [2],
      explanation: "Security Groups act as a virtual firewall attached directly to an EC2 instance, filtering incoming (and outgoing) traffic at the instance level. AWS X-Ray traces application requests, Network ACLs filter traffic at the subnet level rather than being attached to an instance, and VPC Flow Logs record traffic metadata rather than filtering it."
    },
    {
      id: "paper-02-045",
      domain: "GLB",
      topic: "global-performance",
      type: "multiple-select",
      question: "Which AWS services can be used to improve the performance of a global application and reduce latency for its users? (Choose TWO)",
      options: [
        "AWS KMS.",
        "AWS Global accelerator.",
        "AWS Direct Connect.",
        "AWS Glue.",
        "Amazon CloudFront."
      ],
      correctAnswer: [1, 4],
      explanation: "AWS Global Accelerator routes user traffic over AWS's global network to the optimal endpoint, and Amazon CloudFront caches content at Edge Locations close to users — both reduce latency for a global application's users. AWS KMS manages encryption keys, AWS Direct Connect links to a single on-premises location rather than solving latency for public global users, and AWS Glue is a data-integration and ETL service — none improve global application latency."
    },
    {
      id: "paper-02-046",
      domain: "DBA",
      topic: "rds",
      type: "multiple-select",
      question: "Using Amazon RDS falls under the shared responsibility model. Which of the following are customer responsibilities? (Choose TWO)",
      options: [
        "Building the relational database schema.",
        "Performing backups.",
        "Managing the database settings.",
        "Patching the database software.",
        "Installing the database software."
      ],
      correctAnswer: [0, 2],
      explanation: "With Amazon RDS, customers are responsible for building their own database schema and managing database settings, such as parameter groups, since these are application-specific choices. AWS handles the underlying responsibilities of the RDS service itself, including performing backups, patching the database software, and installing the database engine."
    },
    {
      id: "paper-02-047",
      domain: "DBA",
      topic: "rds",
      type: "single",
      question: "A company has a large amount of structured data stored in their on-premises data center. They are planning to migrate all the data to AWS, what is the most appropriate AWS database option?",
      options: [
        "Amazon DynamoDB.",
        "Amazon SNS.",
        "Amazon RDS.",
        "Amazon ElastiCache."
      ],
      correctAnswer: [2],
      explanation: "Amazon RDS is the appropriate choice for migrating a large amount of structured, relational data from an on-premises data center, since it is a managed relational database service. Amazon DynamoDB is NoSQL and suited to unstructured or key-value data, Amazon SNS is a messaging service, and Amazon ElastiCache is an in-memory cache — none store structured relational data as their primary purpose."
    },
    {
      id: "paper-02-048",
      domain: "ARC",
      topic: "apn-partners",
      type: "single",
      question: "A company has created a solution that helps AWS customers improve their architectures on AWS. Which AWS program may support this company?",
      options: [
        "APN Consulting Partners.",
        "AWS TAM.",
        "APN Technology Partners.",
        "AWS Professional Services."
      ],
      correctAnswer: [0],
      explanation: "APN Consulting Partners are professional-services firms that help AWS customers design, migrate, and optimize their architectures, matching a company that has built a solution to improve customers' architectures on AWS. AWS TAM and AWS Professional Services are AWS-internal roles and teams rather than a third-party partner program, and APN Technology Partners build software products rather than provide architectural consulting."
    },
    {
      id: "paper-02-049",
      domain: "CMP",
      topic: "lambda",
      type: "single",
      question: "What is the AWS serverless service that allows you to run your applications without any administrative burden?",
      options: [
        "Amazon LightSail.",
        "AWS Lambda.",
        "Amazon RDS instances.",
        "Amazon EC2 instances."
      ],
      correctAnswer: [1],
      explanation: "AWS Lambda is a serverless compute service that runs code in response to events without requiring the customer to provision or manage any servers. Amazon Lightsail and Amazon EC2 instances require managing virtual servers, and RDS instances are managed databases rather than a general-purpose compute service — none are fully serverless like Lambda."
    },
    {
      id: "paper-02-050",
      domain: "ELB",
      topic: "fault-tolerance",
      type: "single",
      question: "Jessica is managing an e-commerce web application in AWS. The application is hosted on six EC2 instances. One day, three of the instances crashed; but none of her customers were affected. What has Jessica done correctly in this scenario?",
      options: [
        "She has properly built an elastic system.",
        "She has properly built a fault tolerant system.",
        "She has properly built an encrypted system.",
        "She has properly built a scalable system."
      ],
      correctAnswer: [1],
      explanation: "A fault-tolerant system continues operating correctly even when components fail, and since three of six instances crashed without affecting customers, Jessica built a fault-tolerant architecture, likely using a load balancer to route traffic to the remaining healthy instances. Elasticity and scalability relate to adjusting capacity to match demand rather than surviving failures, and there is no indication that encryption is relevant to this scenario."
    }
  ]
});
