window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "paper-14",
  paperId: "paper-14",
  paperName: "Practice Paper 14",
  questions: [
    {
      id: "paper-14-001",
      domain: "S3",
      topic: "s3",
      type: "single",
      question: "Which storage service can be used as a low-cost option for hosting static websites?",
      options: [
        "Amazon Glacier",
        "Amazon DynamoDB",
        "Amazon Elastic File System (Amazon EFS)",
        "Amazon Simple Storage Service (Amazon S3)"
      ],
      correctAnswer: [3],
      explanation: "Amazon S3 is a low-cost object storage service that natively supports static website hosting, serving HTML, CSS, and JavaScript files directly to visitors. Amazon Glacier is built for archival (not web serving), DynamoDB is a NoSQL database rather than a file host, and EFS is a shared file system for compute workloads, not a static website endpoint."
    },
    {
      id: "paper-14-002",
      domain: "ACM",
      topic: "spot-instances",
      type: "single",
      question: "Which Amazon EC2 instance pricing model can provide discounts of up to 90%?",
      options: [
        "Reserved Instances",
        "On-Demand",
        "Dedicated Hosts",
        "Spot Instances"
      ],
      correctAnswer: [3],
      explanation: "Spot Instances let customers use spare EC2 capacity at savings of up to 90% compared to On-Demand pricing, in exchange for the possibility of interruption. Reserved Instances offer smaller discounts (up to about 72%) for a committed term, On-Demand has no discount at all, and Dedicated Hosts are priced for compliance and licensing needs rather than deep savings."
    },
    {
      id: "paper-14-003",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "What is the AWS customer responsible for according to the AWS shared responsibility model?",
      options: [
        "Physical access controls",
        "Data encryption",
        "Secure disposal of storage devices",
        "Environmental risk management"
      ],
      correctAnswer: [1],
      explanation: "Under the AWS Shared Responsibility Model, the customer handles security 'in' the cloud, which includes encrypting their own data. Physical access controls, secure disposal of storage devices, and environmental risk management are all part of AWS's physical data center operations, which fall under security 'of' the cloud managed entirely by AWS."
    },
    {
      id: "paper-14-004",
      domain: "EC2",
      topic: "ec2",
      type: "single",
      question: "Which of the following AWS Cloud services can be used to run a customer-managed relational database?",
      options: [
        "Amazon EC2",
        "Amazon Route 53",
        "Amazon ElastiCache",
        "Amazon DynamoDB"
      ],
      correctAnswer: [0],
      explanation: "Amazon EC2 provides virtual servers on which a customer can install and fully manage their own relational database software, retaining complete control over the engine and OS. Route 53 is a DNS service, ElastiCache is an in-memory caching service, and DynamoDB is a fully AWS-managed NoSQL database — none let a customer run and manage their own relational database engine."
    },
    {
      id: "paper-14-005",
      domain: "DBA",
      topic: "redshift",
      type: "single",
      question: "A company is looking for a scalable data warehouse solution. Which of the following AWS solutions would meet the company’s needs?",
      options: [
        "Amazon Simple Storage Service (Amazon S3)",
        "Amazon DynamoDB",
        "Amazon Kinesis",
        "Amazon Redshift"
      ],
      correctAnswer: [3],
      explanation: "Amazon Redshift is AWS's fully managed, scalable data warehouse service built for large-scale analytical queries across massive datasets. Amazon S3 is object storage rather than a query engine, DynamoDB is a NoSQL database for transactional workloads, and Kinesis is for streaming data ingestion, not warehousing."
    },
    {
      id: "paper-14-006",
      domain: "ELB",
      topic: "elastic-load-balancing",
      type: "single",
      question: "Which statement best describes Elastic Load Balancing?",
      options: [
        "It translates a domain name into an IP address using DNS.",
        "It distributes incoming application traffic across one or more Amazon EC2 instances.",
        "It collects metrics on connected Amazon EC2 instances.",
        "It automatically adjusts the number of Amazon EC2 instances to support incoming traffic."
      ],
      correctAnswer: [1],
      explanation: "Elastic Load Balancing automatically distributes incoming application traffic across one or more EC2 instances to improve fault tolerance and availability. Translating a domain name into an IP address is a DNS function performed by Route 53, collecting instance metrics is done by CloudWatch, and automatically adjusting the number of instances is the job of Auto Scaling, not ELB."
    },
    {
      id: "paper-14-007",
      domain: "IAM",
      topic: "cli",
      type: "multiple-select",
      question: "Which of the following are valid ways for a customer to interact with AWS services? (Select TWO.)",
      options: [
        "Command line interface",
        "On-premises",
        "Software Development Kits",
        "Software-as-a-service",
        "Hybrid"
      ],
      correctAnswer: [0, 2],
      explanation: "The AWS Command Line Interface and Software Development Kits are both valid, direct ways for a customer to interact with AWS services programmatically. On-premises, Software-as-a-Service, and Hybrid describe deployment or service models rather than methods of interacting with AWS."
    },
    {
      id: "paper-14-008",
      domain: "GLB",
      topic: "global-infrastructure",
      type: "single",
      question: "The AWS Cloud’s multiple Regions are an example of:",
      options: [
        "agility.",
        "global infrastructure.",
        "elasticity.",
        "pay-as-you-go pricing."
      ],
      correctAnswer: [1],
      explanation: "AWS's multiple Regions around the world are a core part of its global infrastructure, letting customers deploy resources close to their users worldwide. Agility and elasticity describe how quickly and flexibly resources can be provisioned, and pay-as-you-go pricing is a cost model — neither describes the physical, geographic footprint that Regions represent."
    },
    {
      id: "paper-14-009",
      domain: "GLB",
      topic: "cloudfront",
      type: "multiple-select",
      question: "Which of the following AWS services can be used to serve large amounts of online video content with the lowest possible latency? (Select TWO.)",
      options: [
        "AWS Storage Gateway",
        "Amazon S3",
        "Amazon Elastic File System (EFS)",
        "Amazon Glacier",
        "Amazon CloudFront"
      ],
      correctAnswer: [1, 4],
      explanation: "Amazon S3 provides durable, scalable storage for video content, and Amazon CloudFront caches and serves that content from Edge Locations around the world, achieving the lowest possible latency for viewers globally. AWS Storage Gateway links on-premises storage to AWS, Amazon EFS is shared file storage for compute workloads, and Glacier is designed for archival — none are built for low-latency global content delivery."
    },
    {
      id: "paper-14-010",
      domain: "CLD",
      topic: "hybrid-cloud",
      type: "single",
      question: "Web servers running on Amazon EC2 access a legacy application running in a corporate data center. What term would describe this model?",
      options: [
        "Cloud-native",
        "Partner network",
        "Hybrid architecture",
        "Infrastructure as a service"
      ],
      correctAnswer: [2],
      explanation: "A hybrid architecture connects cloud-based resources, such as EC2 web servers, with an on-premises data center running a legacy application, combining both environments into one connected deployment model. Cloud-native describes an application built entirely for the cloud, a partner network refers to the AWS Partner Network, and Infrastructure as a Service describes a service model, not a topology spanning both cloud and on-premises."
    },
    {
      id: "paper-14-011",
      domain: "CLD",
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
      explanation: "AWS managed services such as Amazon ElastiCache and Amazon RDS reduce operational overhead by handling tasks like patching and updating the underlying operating system on the customer's behalf. They still require the customer to monitor instance health and choose appropriate instance types and sizes, and managed services aren't inherently guaranteed to outperform customer-managed alternatives — the core benefit is reduced operational burden, not raw performance."
    },
    {
      id: "paper-14-012",
      domain: "S3",
      topic: "s3",
      type: "single",
      question: "Which service provides a virtually unlimited amount of online highly durable object storage?",
      options: [
        "Amazon Redshift",
        "Amazon Elastic File System (Amazon EFS)",
        "Amazon Elastic Container Service (Amazon ECS)",
        "Amazon S3"
      ],
      correctAnswer: [3],
      explanation: "Amazon S3 provides virtually unlimited, highly durable object storage, offering 99.999999999% (11 nines) of durability for any type of data. Amazon Redshift is a data warehouse, Amazon EFS is a shared file system with different scale and durability characteristics, and Amazon ECS is a container orchestration service — none match S3's object storage model."
    },
    {
      id: "paper-14-013",
      domain: "IAM",
      topic: "iam-user",
      type: "single",
      question: "Which of the following Identity and Access Management (IAM) entities is associated with an access key ID and secret access key when using AWS Command Line Interface (AWS CLI)?",
      options: [
        "IAM group",
        "IAM user",
        "IAM role",
        "IAM policy"
      ],
      correctAnswer: [1],
      explanation: "An IAM user is the entity issued a long-term access key ID and secret access key, which authenticate requests made through the AWS CLI. IAM groups and policies don't carry their own credentials, and IAM roles rely on temporary security credentials obtained via AWS STS rather than static access keys."
    },
    {
      id: "paper-14-014",
      domain: "SEC",
      topic: "security-services",
      type: "multiple-select",
      question: "Which of the following security-related services does AWS offer? (Select TWO.)",
      options: [
        "Multi-factor authentication physical tokens",
        "AWS Trusted Advisor security checks",
        "Data encryption",
        "Automated penetration testing",
        "Amazon S3 copyrighted content detection"
      ],
      correctAnswer: [1, 2],
      explanation: "AWS offers Trusted Advisor security checks, which scan an account for security best-practice violations, along with services and features that support data encryption, such as AWS KMS. AWS does not sell physical MFA hardware tokens as a customer-facing service, does not offer 'automated penetration testing' as an AWS product, and has no service that detects copyrighted content stored in S3."
    },
    {
      id: "paper-14-015",
      domain: "DBA",
      topic: "rds",
      type: "single",
      question: "Which AWS managed service is used to host databases?",
      options: [
        "AWS Batch",
        "AWS Artifact",
        "AWS Data Pipeline",
        "Amazon RDS"
      ],
      correctAnswer: [3],
      explanation: "Amazon RDS is AWS's managed relational database service, purpose-built to host and administer databases while automating tasks like backups and patching. AWS Batch runs batch computing jobs, AWS Artifact provides compliance reports, and AWS Data Pipeline orchestrates data workflows — none of these are database hosting services."
    },
    {
      id: "paper-14-016",
      domain: "STG",
      topic: "efs",
      type: "single",
      question: "Which AWS service provides a simple and scalable shared file storage solution for use with Linux-based AWS and on-premises servers?",
      options: [
        "Amazon S3",
        "Amazon Glacier",
        "Amazon EBS",
        "Amazon EFS"
      ],
      correctAnswer: [3],
      explanation: "Amazon EFS provides a simple, scalable, fully managed shared file system that can be mounted concurrently by Linux-based EC2 instances and on-premises servers alike. Amazon S3 is object storage rather than a mountable file system, Glacier is archival storage, and EBS is block storage attached to a single EC2 instance at a time, not shared across multiple servers."
    },
    {
      id: "paper-14-017",
      domain: "CLD",
      topic: "elasticity",
      type: "single",
      question: "When architecting cloud applications, which of the following are a key design principle?",
      options: [
        "Use the largest instance possible",
        "Provision capacity for peak load",
        "Use the Scrum development process",
        "Implement elasticity"
      ],
      correctAnswer: [3],
      explanation: "Implementing elasticity — automatically scaling resources up or down to match real demand — is a key cloud architecture design principle that avoids both over- and under-provisioning. Using the largest instance possible or provisioning for peak load are examples of wasteful over-provisioning, and the Scrum development process is a project-management methodology unrelated to cloud architecture."
    },
    {
      id: "paper-14-018",
      domain: "S3",
      topic: "glacier",
      type: "single",
      question: "Which AWS service should be used for long-term, low-cost storage of data backups?",
      options: [
        "Amazon RDS",
        "Amazon Glacier",
        "AWS Snowball",
        "AWS EBS"
      ],
      correctAnswer: [1],
      explanation: "Amazon S3 Glacier is purpose-built for long-term, low-cost storage of data backups and archives that are infrequently accessed. Amazon RDS is a database service rather than archival storage, AWS Snowball is a physical device for bulk one-time data transfer rather than ongoing storage, and EBS is comparatively expensive block storage meant for active EC2 workloads, not long-term archiving."
    },
    {
      id: "paper-14-019",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "Which task is AWS responsible for in the shared responsibility model for security and compliance?",
      options: [
        "Granting access to individuals and services",
        "Encrypting data in transit",
        "Updating Amazon EC2 host firmware",
        "Updating operating systems"
      ],
      correctAnswer: [1],
      explanation: "AWS is responsible for protecting the confidentiality of data as it moves across its own secured global network, including encrypting data in transit between AWS facilities, as part of its 'security of the cloud' obligations. Granting access to individuals and services is an identity and access management task the customer configures, and updating guest operating systems is likewise a customer responsibility for services such as EC2 — both fall under the customer's 'security in the cloud' duties."
    },
    {
      id: "paper-14-020",
      domain: "ARC",
      topic: "aws-marketplace",
      type: "single",
      question: "Where should a company go to search software listings from independent software vendors to find, test, buy and deploy software that runs on AWS?",
      options: [
        "AWS Marketplace",
        "Amazon Lumberyard",
        "AWS Artifact",
        "Amazon CloudSearch"
      ],
      correctAnswer: [0],
      explanation: "AWS Marketplace is a digital catalog where customers can search, test, buy, and deploy software from independent software vendors that runs on AWS. Amazon Lumberyard is a game engine, AWS Artifact provides compliance documentation, and Amazon CloudSearch is a search service for applications — none function as a software marketplace."
    },
    {
      id: "paper-14-021",
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
      explanation: "A key benefit of the AWS Cloud is that it removes the undifferentiated heavy lifting of managing infrastructure, freeing staff to focus on revenue-generating, business-differentiating activities. Permissive security actually increases administrative burden and risk rather than reducing it, and AWS customers do not get control over the underlying cloud network hardware or a choice of specific hardware vendors — those are managed entirely by AWS."
    },
    {
      id: "paper-14-022",
      domain: "ACM",
      topic: "pricing-models",
      type: "single",
      question: "When performing a cost analysis that supports physical isolation of a customer workload, which compute hosting model should be accounted for in the Total Cost of Ownership (TCO)?",
      options: [
        "Dedicated Hosts",
        "Reserved Instances",
        "On-Demand Instances",
        "No Upfront Reserved Instances"
      ],
      correctAnswer: [0],
      explanation: "Dedicated Hosts provide a physical EC2 server dedicated entirely to one customer, satisfying requirements for physical isolation of a workload, so this hosting model must be factored into the Total Cost of Ownership for such needs. Reserved Instances, On-Demand Instances, and No Upfront Reserved Instances are all pricing or commitment options for shared, multi-tenant hardware and don't provide physical isolation."
    },
    {
      id: "paper-14-023",
      domain: "DEP",
      topic: "cloudformation",
      type: "single",
      question: "Which AWS service provides the ability to manage infrastructure as code?",
      options: [
        "AWS CodePipeline",
        "AWS CodeDeploy",
        "AWS Direct Connect",
        "AWS CloudFormation"
      ],
      correctAnswer: [3],
      explanation: "AWS CloudFormation lets customers define and provision AWS infrastructure using declarative templates, enabling infrastructure as code. AWS CodePipeline automates release pipelines, AWS CodeDeploy automates application code deployment, and AWS Direct Connect is a dedicated network connection — none manage infrastructure through code."
    },
    {
      id: "paper-14-024",
      domain: "MON",
      topic: "aws-config",
      type: "single",
      question: "If a customer needs to audit the change management of AWS resources, which of the following AWS services should the customer use?",
      options: [
        "AWS Config",
        "AWS Trusted Advisor",
        "Amazon CloudWatch",
        "Amazon Inspector"
      ],
      correctAnswer: [0],
      explanation: "AWS Config continuously records and tracks configuration changes to AWS resources over time, making it the right tool to audit change management. AWS Trusted Advisor offers best-practice recommendations, Amazon CloudWatch monitors performance metrics, and Amazon Inspector scans for security vulnerabilities — none specialize in recording a history of configuration changes."
    },
    {
      id: "paper-14-025",
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
      explanation: "Amazon CloudWatch is a metrics repository that lets customers set customizable alarm thresholds and notification channels for their AWS resources. It is not a code repository (that role belongs to CodeCommit), a security configuration repository, or a web application firewall rule engine."
    },
    {
      id: "paper-14-026",
      domain: "ACM",
      topic: "organizations",
      type: "single",
      question: "Which service allows a company with multiple AWS accounts to combine its usage to obtain volume discounts?",
      options: [
        "AWS Server Migration Service",
        "AWS Organizations",
        "AWS Budgets",
        "AWS Trusted Advisor"
      ],
      correctAnswer: [1],
      explanation: "AWS Organizations lets a company centrally manage multiple AWS accounts and combine their usage through consolidated billing, qualifying the whole organization for volume discounts. AWS Server Migration Service migrates on-premises VMs, AWS Budgets sets spending alerts rather than discounts, and Trusted Advisor gives best-practice recommendations — none combine account usage for pricing benefits."
    },
    {
      id: "paper-14-027",
      domain: "DEP",
      topic: "codedeploy",
      type: "multiple-select",
      question: "Which of the following services could be used to deploy an application to servers running on-premises? (Select TWO.)",
      options: [
        "AWS Elastic Beanstalk",
        "AWS OpsWorks",
        "AWS CodeDeploy",
        "AWS Batch",
        "AWS X-Ray"
      ],
      correctAnswer: [1, 2],
      explanation: "AWS OpsWorks (using Chef or Puppet) and AWS CodeDeploy can both deploy and configure applications on servers running on-premises, not just on AWS. Elastic Beanstalk only deploys to AWS-managed infrastructure, AWS Batch runs batch computing jobs, and AWS X-Ray traces application requests — none of these deploy code to on-premises servers."
    },
    {
      id: "paper-14-028",
      domain: "ACM",
      topic: "spot-instances",
      type: "single",
      question: "Which Amazon EC2 pricing model adjusts based on supply and demand of EC2 instances?",
      options: [
        "On-Demand Instances",
        "Reserved Instances",
        "Spot Instances",
        "Convertible Reserved Instances"
      ],
      correctAnswer: [2],
      explanation: "Spot Instance prices fluctuate based on the real-time supply and demand of spare EC2 capacity, offering deep discounts in exchange for possible interruption. On-Demand pricing is fixed per hour or second, while Reserved Instances and Convertible Reserved Instances are priced based on a fixed upfront or term commitment rather than real-time supply and demand."
    },
    {
      id: "paper-14-029",
      domain: "ARC",
      topic: "well-architected",
      type: "multiple-select",
      question: "Which design principles for cloud architecture are recommended when re-architecting a large monolithic application? (Select TWO.)",
      options: [
        "Use manual monitoring.",
        "Use fixed servers.",
        "Implement loose coupling.",
        "Rely on individual components.",
        "Design for scalability."
      ],
      correctAnswer: [2, 4],
      explanation: "Implementing loose coupling reduces dependencies between components so that failures in one don't cascade to others, and designing for scalability ensures a re-architected application can grow to meet demand — both are recommended cloud design principles when breaking apart a monolith. Manual monitoring, fixed servers, and relying on individual components are the opposite of resilient, scalable cloud design."
    },
    {
      id: "paper-14-030",
      domain: "ACM",
      topic: "support",
      type: "single",
      question: "Which is the MINIMUM AWS Support plan that allows for one-hour target response time for support cases?",
      options: [
        "Enterprise",
        "Business",
        "Developer",
        "Basic"
      ],
      correctAnswer: [1],
      explanation: "The AWS Business Support plan is the minimum plan tier that offers a one-hour target response time for general guidance and system-impaired cases. Enterprise offers even faster response times but at a higher tier, while the Developer and Basic plans have slower or best-effort response times."
    },
    {
      id: "paper-14-031",
      domain: "SEC",
      topic: "artifact",
      type: "single",
      question: "Where can AWS compliance and certification reports be downloaded?",
      options: [
        "AWS Artifact",
        "AWS Concierge",
        "AWS Certificate Manager",
        "AWS Trusted Advisor"
      ],
      correctAnswer: [0],
      explanation: "AWS Artifact is the self-service portal where customers can download AWS compliance reports and certifications, such as SOC and PCI attestations. AWS Concierge assists Enterprise billing customers, AWS Certificate Manager issues SSL/TLS certificates, and AWS Trusted Advisor gives best-practice recommendations — none provide compliance and certification documentation."
    },
    {
      id: "paper-14-032",
      domain: "MON",
      topic: "health-dashboard",
      type: "single",
      question: "Which AWS service provides a customized view of the health of specific AWS services that power a customer’s workloads running on AWS?",
      options: [
        "AWS Service Health Dashboard",
        "AWS X-Ray",
        "AWS Personal Health Dashboard",
        "Amazon CloudWatch"
      ],
      correctAnswer: [2],
      explanation: "The AWS Personal Health Dashboard provides a personalized view of the health of the specific AWS services and resources that power a customer's own workloads. The AWS Service Health Dashboard shows general, account-agnostic service status, AWS X-Ray traces application requests, and Amazon CloudWatch monitors metrics — none give a customer-specific health view."
    },
    {
      id: "paper-14-033",
      domain: "ACM",
      topic: "consolidated-billing",
      type: "single",
      question: "Which of the following is an advantage of consolidated billing on AWS?",
      options: [
        "Volume pricing qualification",
        "Shared access permissions",
        "Multiple bills per account",
        "Eliminates the need for tagging"
      ],
      correctAnswer: [0],
      explanation: "Consolidated billing combines usage across all linked accounts, allowing the whole organization to qualify for volume pricing discounts it might not reach individually. It does not provide shared access permissions between accounts, it produces one combined bill rather than multiple bills, and it does not eliminate the need for resource tagging for cost allocation."
    },
    {
      id: "paper-14-034",
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
      explanation: "Customers must request and wait for approval from AWS Support before conducting penetration testing against their own AWS resources, since certain testing activities require authorization first. Amazon Inspector is an automated vulnerability scanner and does not substitute for that approval, and testing without waiting for AWS's authorization — whether preceded by Inspector scans or simply notifying support — violates AWS's penetration testing policy."
    },
    {
      id: "paper-14-035",
      domain: "EC2",
      topic: "ami",
      type: "single",
      question: "Which of the following AWS features enables a user to launch a pre-configured Amazon Elastic Compute Cloud (Amazon EC2) instance?",
      options: [
        "Amazon Elastic Block Store (Amazon EBS)",
        "Amazon Machine Image",
        "Amazon EC2 Systems Manager",
        "Amazon AppStream 2.0"
      ],
      correctAnswer: [1],
      explanation: "An Amazon Machine Image (AMI) contains the information needed to launch a pre-configured EC2 instance, including the operating system, application server, and applications. Amazon EBS is block storage rather than a launch template, EC2 Systems Manager is an operational management tool, and AppStream 2.0 streams desktop applications — none of these launch pre-configured instances."
    },
    {
      id: "paper-14-036",
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
      explanation: "Attaching an IAM policy to an IAM group is the standard way to apply common access controls to a large set of users at once, since every user added to the group inherits its permissions. Applying a policy to an IAM role is meant for temporary or service access, applying the same policy individually to each user doesn't scale efficiently, and Amazon Cognito user pools manage application end-user identities rather than AWS IAM access."
    },
    {
      id: "paper-14-037",
      domain: "ACM",
      topic: "cost-and-usage-report",
      type: "single",
      question: "Which AWS Cost Management tool allows you to view the most granular data about your AWS bill?",
      options: [
        "AWS Cost Explorer",
        "AWS Budgets",
        "AWS Cost and Usage report",
        "AWS Billing dashboard"
      ],
      correctAnswer: [2],
      explanation: "The AWS Cost and Usage Report provides the most comprehensive and granular breakdown of AWS costs and usage, down to the resource and tag level. AWS Cost Explorer offers visual, aggregated views that are less granular, AWS Budgets sets spending alerts, and the Billing dashboard gives only a high-level summary."
    },
    {
      id: "paper-14-038",
      domain: "DBA",
      topic: "rds",
      type: "multiple-select",
      question: "Which of the following can an AWS customer use to launch a new Amazon Relational Database Service (Amazon RDS) cluster? (Select TWO.)",
      options: [
        "AWS Concierge",
        "AWS CloudFormation",
        "Amazon Simple Storage Service (Amazon S3)",
        "Amazon EC2 Auto Scaling",
        "AWS Management Console"
      ],
      correctAnswer: [1, 4],
      explanation: "An Amazon RDS cluster can be launched either through an AWS CloudFormation template, using infrastructure as code, or directly through the AWS Management Console. AWS Concierge is a support contact, Amazon S3 is object storage, and EC2 Auto Scaling manages EC2 instance fleets — none of these can launch an RDS database cluster."
    },
    {
      id: "paper-14-039",
      domain: "ARC",
      topic: "decoupling",
      type: "single",
      question: "Which of the following is an AWS Cloud architecture design principle?",
      options: [
        "Implement single points of failure.",
        "Implement loose coupling.",
        "Implement monolithic design.",
        "Implement vertical scaling."
      ],
      correctAnswer: [1],
      explanation: "Implementing loose coupling is a core AWS cloud architecture design principle, reducing dependencies between components so that failures or changes in one don't cascade to others. Implementing single points of failure, monolithic design, and vertical scaling are all anti-patterns that reduce resilience and scalability rather than improve it."
    },
    {
      id: "paper-14-040",
      domain: "IAM",
      topic: "least-privilege",
      type: "multiple-select",
      question: "Which of the following security measures protect access to an AWS account? (Select TWO.)",
      options: [
        "Enable AWS CloudTrail.",
        "Grant least privilege access to IAM users.",
        "Create one IAM user and share with many developers and users.",
        "Enable Amazon CloudFront.",
        "Activate multi-factor authentication (MFA) for privileged users."
      ],
      correctAnswer: [1, 4],
      explanation: "Granting least privilege access to IAM users limits what each user can do to only what's necessary, and activating multi-factor authentication for privileged users adds a second authentication factor — both directly protect access to an AWS account. Enabling CloudTrail and CloudFront are useful for logging and content delivery respectively but don't themselves protect access, and sharing one IAM user among many people violates security best practices by removing individual accountability."
    },
    {
      id: "paper-14-041",
      domain: "S3",
      topic: "storage-gateway",
      type: "single",
      question: "Which service provides a hybrid storage service that enables on-premises applications to seamlessly use cloud storage?",
      options: [
        "Amazon Glacier",
        "AWS Snowball",
        "AWS Storage Gateway",
        "Amazon Elastic Block Storage (Amazon EBS)"
      ],
      correctAnswer: [2],
      explanation: "AWS Storage Gateway is a hybrid cloud storage service that connects on-premises applications to AWS cloud storage seamlessly, such as through NFS/SMB file shares or iSCSI volumes. Amazon Glacier and Amazon EBS are AWS-native storage services rather than hybrid on-premises connectors, and AWS Snowball is a physical device for one-time bulk data transfer, not an ongoing hybrid storage link."
    },
    {
      id: "paper-14-042",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "Which of the following services falls under the responsibility of the customer to maintain operating system configuration, security patching, and networking?",
      options: [
        "Amazon RDS",
        "Amazon EC2",
        "Amazon ElastiCache",
        "AWS Fargate"
      ],
      correctAnswer: [1],
      explanation: "Amazon EC2 is an Infrastructure as a Service offering, so under the AWS Shared Responsibility Model the customer must maintain the guest operating system, apply security patches, and configure networking themselves. Amazon RDS, Amazon ElastiCache, and AWS Fargate are managed services where AWS takes on more of this operational burden, including OS patching, on the customer's behalf."
    },
    {
      id: "paper-14-043",
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
      explanation: "Using multiple Availability Zones is a key architectural design principle for building highly available, fault-tolerant applications, since it protects against the failure of a single data center. Tightly coupled components, using open source software, and provisioning extra unused capacity do not directly address availability and, in the case of tight coupling, actually reduce resilience."
    },
    {
      id: "paper-14-044",
      domain: "ACM",
      topic: "support",
      type: "single",
      question: "Which AWS support plan includes a dedicated Technical Account Manager?",
      options: [
        "Developer",
        "Enterprise",
        "Business",
        "Basic"
      ],
      correctAnswer: [1],
      explanation: "The AWS Enterprise Support plan is the only plan that includes a dedicated Technical Account Manager, who provides proactive, personalized guidance. The Developer, Business, and Basic plans do not include a Technical Account Manager."
    },
    {
      id: "paper-14-045",
      domain: "DBA",
      topic: "rds",
      type: "single",
      question: "Amazon Relational Database Service (Amazon RDS) offers which of the following benefits over traditional database management?",
      options: [
        "AWS manages the data stored in Amazon RDS tables.",
        "AWS manages the maintenance of the operating system.",
        "AWS automatically scales up instance types on demand.",
        "AWS manages the database type."
      ],
      correctAnswer: [1],
      explanation: "Amazon RDS offloads operating system maintenance, such as patching and updates, to AWS, which is a key benefit over managing a traditional self-hosted database. AWS does not manage the actual data stored within RDS tables, RDS does not automatically scale up instance types without customer action, and the customer — not AWS — chooses which database engine to use."
    },
    {
      id: "paper-14-046",
      domain: "DBA",
      topic: "elasticache",
      type: "single",
      question: "Which service is best for storing common database query results, which helps to alleviate database access load?",
      options: [
        "Amazon Machine Learning",
        "Amazon SQS",
        "Amazon ElastiCache",
        "Amazon EC2 Instance Store"
      ],
      correctAnswer: [2],
      explanation: "Amazon ElastiCache is an in-memory data store used to cache frequently requested database query results, reducing load on the primary database and improving response times. Amazon Machine Learning is unrelated to caching, Amazon SQS is a messaging queue, and EC2 Instance Store is ephemeral local disk storage tied to a single instance rather than a shared caching layer."
    },
    {
      id: "paper-14-047",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "Which of the following is a component of the shared responsibility model managed entirely by AWS?",
      options: [
        "Patching operating system software",
        "Encrypting data",
        "Enforcing multi-factor authentication",
        "Auditing physical data center assets"
      ],
      correctAnswer: [3],
      explanation: "Auditing physical data center assets is managed entirely by AWS as part of its 'security of the cloud' responsibility, since customers have no access to AWS's physical facilities. Patching operating system software, encrypting data, and enforcing multi-factor authentication are all customer-configured responsibilities, falling under 'security in the cloud.'"
    },
    {
      id: "paper-14-048",
      domain: "OTH",
      topic: "aws-training",
      type: "multiple-select",
      question: "Which options does AWS make available for customers who want to learn about security in the cloud in an instructor-led setting? (Select TWO.)",
      options: [
        "AWS Trusted Advisor",
        "AWS Online Tech Talks",
        "AWS Blog",
        "AWS Forums",
        "AWS Classroom Training"
      ],
      correctAnswer: [1, 4],
      explanation: "AWS Classroom Training offers structured, instructor-led courses, and AWS Online Tech Talks are also live, instructor-led sessions covering various topics, including security — both fit the requirement for instructor-led learning. AWS Trusted Advisor is an account-optimization tool, and the AWS Blog and AWS Forums are self-paced, text-based resources with no instructor."
    },
    {
      id: "paper-14-049",
      domain: "VPC",
      topic: "vpc",
      type: "multiple-select",
      question: "Which of the following features can be configured through the Amazon Virtual Private Cloud (Amazon VPC) Dashboard? (Select TWO.)",
      options: [
        "Amazon CloudFront distributions",
        "Amazon Route 53",
        "Security Groups",
        "Subnets",
        "Elastic Load Balancing"
      ],
      correctAnswer: [2, 3],
      explanation: "Security Groups and Subnets are both core networking constructs that can be configured directly through the Amazon VPC Dashboard. Amazon CloudFront distributions, Amazon Route 53 records, and Elastic Load Balancing are configured through their own respective service consoles, not the VPC Dashboard."
    },
    {
      id: "paper-14-050",
      domain: "ACM",
      topic: "organizations",
      type: "single",
      question: "If each department within a company has its own AWS account, what is one way to enable consolidated billing?",
      options: [
        "Use AWS Budgets on each account to pay only to budget.",
        "Contact AWS Support for a monthly bill.",
        "Create an AWS Organization from the payer account and invite the other accounts to join.",
        "Put all invoices into one Amazon Simple Storage Service (Amazon S3) bucket, load data into Amazon Redshift, and then run a billing report."
      ],
      correctAnswer: [2],
      explanation: "Creating an AWS Organization from the payer (management) account and inviting the other department accounts to join is the standard way to enable consolidated billing across accounts. Using AWS Budgets only sets spending alerts, contacting AWS Support for a manual monthly bill isn't a way to enable consolidated billing, and manually aggregating invoices in S3 and Redshift is a manual reporting workaround, not actual consolidated billing."
    }
  ]
});
