window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "paper-04",
  paperId: "paper-04",
  paperName: "Practice Paper 4",
  questions: [
    {
      id: "paper-04-001",
      domain: "SEC",
      topic: "ssl-certificates",
      type: "multiple-select",
      question: "A developer needs to set up an SSL security certificate for a client’s eCommerce website in order to use the HTTPS protocol. Which of the following AWS services can be used to deploy the required SSL server certificates? (Choose TWO)",
      options: [
        "Amazon Route 53.",
        "AWS ACM.",
        "AWS Directory Service.",
        "AWS Identity & Access Management.",
        "AWS Data Pipeline."
      ],
      correctAnswer: [0, 1],
      explanation: "AWS Certificate Manager (ACM) is the service purpose-built to provision, manage, and deploy free public SSL/TLS certificates for use with services like CloudFront and Elastic Load Balancing, while Amazon Route 53 works alongside ACM to handle the DNS domain validation needed to issue and deploy those certificates. AWS Directory Service manages directories, IAM manages permissions, and AWS Data Pipeline orchestrates data workflows — none of these issue or deploy SSL certificates."
    },
    {
      id: "paper-04-002",
      domain: "CLD",
      topic: "managed-scaling",
      type: "multiple-select",
      question: "Which of the following AWS services scale automatically without your intervention? (Choose TWO)",
      options: [
        "Amazon EC2.",
        "Amazon S3.",
        "AWS Lambda.",
        "Amazon EMR.",
        "Amazon EBS."
      ],
      correctAnswer: [1, 2],
      explanation: "Amazon S3 automatically scales storage capacity as objects are added, and AWS Lambda automatically scales compute capacity by running as many function instances as needed to handle incoming events, both without any manual intervention. Amazon EC2 and Amazon EBS require you to configure Auto Scaling or manually resize volumes, and Amazon EMR clusters must be manually resized or configured with scaling policies."
    },
    {
      id: "paper-04-003",
      domain: "CMP",
      topic: "lambda",
      type: "multiple-select",
      question: "A company is planning to migrate an application from Amazon EC2 to AWS Lambda to use a serverless architecture. Which of the following will be the responsibility of AWS after migration? (Choose TWO)",
      options: [
        "Application management.",
        "Capacity management.",
        "Access control.",
        "Operating system maintenance.",
        "Data management."
      ],
      correctAnswer: [1, 3],
      explanation: "After migrating to AWS Lambda, AWS becomes responsible for capacity management, provisioning enough compute to run functions, and operating system maintenance, patching and managing the underlying servers, since Lambda is a fully managed serverless compute service. Application management, access control, and data management remain the customer's responsibility because the customer still owns the function code, the permissions granted to it, and the data it processes."
    },
    {
      id: "paper-04-004",
      domain: "ELB",
      topic: "health-checks",
      type: "single",
      question: "How do ELBs improve the reliability of your application?",
      options: [
        "By distributing traffic across multiple S3 buckets.",
        "By replicating data to multiple availability zones.",
        "By creating database Read Replicas.",
        "By ensuring that only healthy targets receive traffic."
      ],
      correctAnswer: [3],
      explanation: "Elastic Load Balancers improve reliability by continuously performing health checks on registered targets and routing traffic only to targets that pass those checks, automatically removing unhealthy instances from rotation. ELBs do not distribute traffic across S3 buckets, replicate data across Availability Zones, or create database Read Replicas — those are unrelated AWS capabilities."
    },
    {
      id: "paper-04-005",
      domain: "EC2",
      topic: "dedicated-instances",
      type: "single",
      question: "A company needs to migrate their website from on-premises to AWS. Security is a major concern for them, so they need to host their website on hardware that is NOT shared with other AWS customers. Which of the following EC2 instance options meets this requirement?",
      options: [
        "On-demand instances.",
        "Spot instances.",
        "Dedicated instances.",
        "Reserved instances."
      ],
      correctAnswer: [2],
      explanation: "Dedicated Instances run on hardware that is dedicated to a single AWS customer, ensuring physical isolation from other customers' workloads, which satisfies this security requirement. On-Demand, Spot, and Reserved Instances are all EC2 pricing/purchasing options that can still run on shared, multi-tenant hardware."
    },
    {
      id: "paper-04-006",
      domain: "S3",
      topic: "snowmobile",
      type: "single",
      question: "A customer is planning to move billions of images and videos to be stored on Amazon S3. The customer has approximately 60 Petabytes of data to move. Which of the following AWS Services is the best choice to transfer the data to AWS?",
      options: [
        "Snowball.",
        "S3 Transfer Acceleration.",
        "Snowmobile.",
        "Amazon VPC."
      ],
      correctAnswer: [2],
      explanation: "AWS Snowmobile is an exabyte-scale data transfer service using a shipping container pulled by a truck, designed specifically for migrating extremely large datasets, such as the 60 petabytes described, that would take too long to move over a network. AWS Snowball is meant for smaller-scale transfers, S3 Transfer Acceleration speeds up network uploads but isn't suited to this scale, and Amazon VPC is a networking service, not a data transfer tool."
    },
    {
      id: "paper-04-007",
      domain: "S3",
      topic: "glacier",
      type: "single",
      question: "A company plans to migrate a large amount of archived data to AWS. The archived data must be maintained for a period of 5 years and must be retrievable within 5 hours of a request. What is the most cost-effective AWS storage service to use?",
      options: [
        "Amazon S3 Glacier.",
        "Amazon EFS.",
        "Amazon S3 Standard.",
        "Amazon EBS."
      ],
      correctAnswer: [0],
      explanation: "Amazon S3 Glacier is designed for long-term archival storage at very low cost, and its retrieval options can restore data within a few hours, matching the 5-year retention and 5-hour retrieval requirement cost-effectively. Amazon EFS and Amazon EBS are far more expensive options meant for active file/block workloads, and S3 Standard is priced for frequently accessed data, making it unnecessarily costly for archival data."
    },
    {
      id: "paper-04-008",
      domain: "IAM",
      topic: "iam",
      type: "single",
      question: "Which AWS Service is used to manage user permissions?",
      options: [
        "Security Groups.",
        "Amazon ECS.",
        "AWS IAM.",
        "AWS Support."
      ],
      correctAnswer: [2],
      explanation: "AWS Identity and Access Management (IAM) is the service used to create and manage users, groups, roles, and policies that control permissions to AWS resources. Security Groups control network traffic rather than user permissions, Amazon ECS runs containers, and AWS Support provides technical assistance — none manage user permissions."
    },
    {
      id: "paper-04-009",
      domain: "ACM",
      topic: "support",
      type: "single",
      question: "Which support plan includes AWS Support Concierge Service?",
      options: [
        "Premium Support.",
        "Business Support.",
        "Enterprise Support.",
        "Standard Support."
      ],
      correctAnswer: [2],
      explanation: "AWS Support Concierge is a benefit exclusive to the Enterprise Support plan, offering dedicated assistance with billing and account questions. Business Support and Standard Support do not include this Concierge service, and \"Premium Support\" is not an actual AWS support plan name."
    },
    {
      id: "paper-04-010",
      domain: "MON",
      topic: "cloudtrail",
      type: "single",
      question: "A company needs to track resource changes using the API call history. Which AWS service can help the company achieve this goal?",
      options: [
        "AWS Config.",
        "Amazon CloudWatch.",
        "AWS CloudTrail.",
        "AWS CloudFormation."
      ],
      correctAnswer: [2],
      explanation: "AWS CloudTrail records the history of every API call made in an AWS account, letting you track exactly which resource changes occurred over time. AWS Config tracks resource configuration state rather than API call history, Amazon CloudWatch monitors performance metrics and logs, and AWS CloudFormation is an infrastructure-as-code provisioning tool."
    },
    {
      id: "paper-04-011",
      domain: "CLD",
      topic: "managed-services",
      type: "multiple-select",
      question: "What are the benefits of using an AWS-managed service? (Choose TWO)",
      options: [
        "Provides complete control over the virtual infrastructure.",
        "Allows customers to deliver new solutions faster.",
        "Lowers operational complexity.",
        "Eliminates the need to encrypt data.",
        "Allows developers to control all patching related activities."
      ],
      correctAnswer: [1, 2],
      explanation: "AWS-managed services handle the operational burden of patching, scaling, and maintenance on the customer's behalf, which lowers operational complexity and lets customers deliver new solutions faster by focusing on their applications instead of infrastructure. Managed services do not give complete control over the virtual infrastructure, they don't eliminate the need to encrypt data since that remains a customer decision, and they reduce rather than expand the customer's role in patching activities."
    },
    {
      id: "paper-04-012",
      domain: "S3",
      topic: "s3",
      type: "multiple-select",
      question: "Which of the following are use cases for Amazon S3? (Choose TWO)",
      options: [
        "Hosting static websites.",
        "Hosting websites that require sustained high CPU utilization.",
        "Cost-effective database and log storage.",
        "A media store for the CloudFront service.",
        "Processing data streams at any scale."
      ],
      correctAnswer: [0, 3],
      explanation: "Amazon S3 is commonly used to host static websites directly from a bucket and to serve as the origin or media store for content distributed through Amazon CloudFront. Hosting websites that require sustained high CPU utilization needs compute like EC2, cost-effective log storage for querying is better served by purpose-built services, and processing data streams at any scale is the role of Amazon Kinesis, not S3."
    },
    {
      id: "paper-04-013",
      domain: "IAM",
      topic: "access-keys",
      type: "single",
      question: "What is the AWS’ recommendation regarding access keys?",
      options: [
        "Delete all access keys and use passwords instead.",
        "Only share them with trusted people.",
        "Rotate them regularly.",
        "Save them within your application code."
      ],
      correctAnswer: [2],
      explanation: "AWS recommends regularly rotating access keys to limit the window of exposure if a key is ever compromised. Deleting all access keys in favor of passwords doesn't apply to programmatic access, sharing keys even with trusted people increases risk, and embedding keys in application code is explicitly discouraged because it can expose credentials."
    },
    {
      id: "paper-04-014",
      domain: "IAM",
      topic: "mfa",
      type: "single",
      question: "What is the AWS IAM feature that provides an additional layer of security on top of user-name and password authentication?",
      options: [
        "Key Pair.",
        "Access Keys.",
        "SDK.",
        "MFA."
      ],
      correctAnswer: [3],
      explanation: "Multi-Factor Authentication (MFA) adds an additional layer of security beyond a username and password by requiring a second authentication factor, such as a one-time code from a device. Key Pairs are used for SSH access to EC2 instances, Access Keys authenticate programmatic API/CLI requests, and the SDK is a programming toolkit — none add a second sign-in authentication factor."
    },
    {
      id: "paper-04-015",
      domain: "IAM",
      topic: "api",
      type: "single",
      question: "What is the benefit of using an API to access AWS Services?",
      options: [
        "It improves the performance of AWS resources.",
        "It reduces the time needed to provision AWS resources.",
        "It reduces the number of developers necessary.",
        "It allows for programmatic management of AWS resources."
      ],
      correctAnswer: [3],
      explanation: "Using an API to access AWS services allows developers to manage and interact with AWS resources programmatically, enabling automation instead of manual console clicks. An API doesn't inherently improve resource performance, reduce provisioning time on its own, or reduce the number of developers needed."
    },
    {
      id: "paper-04-016",
      domain: "STG",
      topic: "ebs",
      type: "single",
      question: "A company is planning to migrate a database with high read/write activity to AWS. What is the best storage option to use?",
      options: [
        "AWS Storage Gateway.",
        "Amazon S3.",
        "Amazon EBS.",
        "Amazon Glacier."
      ],
      correctAnswer: [2],
      explanation: "Amazon EBS provides low-latency, high-IOPS block storage that is well-suited for databases with high read/write activity, since it can be provisioned with the throughput and IOPS the workload demands. AWS Storage Gateway bridges on-premises storage to AWS, Amazon S3 is object storage unsuitable for a database's block-level I/O needs, and Amazon Glacier is archival storage with slow retrieval."
    },
    {
      id: "paper-04-017",
      domain: "ACM",
      topic: "budgets",
      type: "single",
      question: "How can AWS customers track and avoid over-spending on underutilized reserved instances?",
      options: [
        "Customers can add all AWS accounts to an AWS Organization, enable Consolidated Billing, and turn off Reserved Instance sharing.",
        "Customers can use Amazon Neptune to track and analyze their usage patterns, detect underutilized reserved instances, and then sell them on the Amazon EC2 Reserved Instance Marketplace.",
        "Customers can use the AWS Budgets service to track the reserved instances usage and set up alert notifications when their utilization drops below the threshold that they define.",
        "Customers can use Amazon CloudTrail to automatically check for unused reservations and get recommendations to reduce their bill."
      ],
      correctAnswer: [2],
      explanation: "AWS Budgets lets customers track Reserved Instance utilization and set alerts that trigger when utilization drops below a defined threshold, helping them spot and address underutilized reservations. Consolidated Billing with RI sharing disabled doesn't track utilization, Amazon Neptune is a graph database unrelated to billing, and AWS CloudTrail logs API activity rather than analyzing reservation usage."
    },
    {
      id: "paper-04-018",
      domain: "DBA",
      topic: "aurora",
      type: "single",
      question: "What is the AWS service that provides five times the performance of a standard MySQL database?",
      options: [
        "Amazon Aurora.",
        "Amazon Redshift.",
        "Amazon DynamoDB.",
        "Amazon Neptune."
      ],
      correctAnswer: [0],
      explanation: "Amazon Aurora is a MySQL- and PostgreSQL-compatible relational database engineered by AWS to deliver up to five times the throughput of standard MySQL. Amazon Redshift is a data warehouse for analytics, DynamoDB is a NoSQL database, and Neptune is a graph database — none are positioned as a faster MySQL-compatible engine."
    },
    {
      id: "paper-04-019",
      domain: "DEP",
      topic: "service-catalog",
      type: "single",
      question: "What does AWS Service Catalog provide?",
      options: [
        "It enables customers to quickly find descriptions and use cases for AWS services.",
        "It enables customers to explore the different catalogs of AWS services.",
        "It simplifies organizing and governing commonly deployed IT services.",
        "It allows developers to deploy infrastructure on AWS using familiar programming languages."
      ],
      correctAnswer: [2],
      explanation: "AWS Service Catalog lets organizations create and manage curated catalogs of approved IT services, such as CloudFormation-defined resources, simplifying how they organize, govern, and deploy resources consistently across the organization. It's not simply a directory of AWS service descriptions, a catalog of \"different catalogs,\" or an infrastructure-as-code deployment language tool like CloudFormation."
    },
    {
      id: "paper-04-020",
      domain: "DBA",
      topic: "dynamodb",
      type: "multiple-select",
      question: "For managed services like Amazon DynamoDB, which of the below is AWS responsible for? (Choose TWO)",
      options: [
        "Protecting credentials.",
        "Logging access activity.",
        "Patching the database software.",
        "Operating system maintenance.",
        "Creating access policies."
      ],
      correctAnswer: [2, 3],
      explanation: "For a fully managed service like DynamoDB, AWS is responsible for patching the underlying database software and maintaining the operating system it runs on, since these are abstracted away from the customer. Protecting credentials, logging access activity, and creating access policies remain the customer's responsibility because they involve how the customer configures and uses the service, not the underlying infrastructure."
    },
    {
      id: "paper-04-021",
      domain: "OTH",
      topic: "application-discovery-service",
      type: "single",
      question: "Which of the following AWS Services helps with planning application migration to the AWS Cloud?",
      options: [
        "AWS Snowball Migration Service.",
        "AWS Application Discovery Service.",
        "AWS DMS.",
        "AWS Migration Hub."
      ],
      correctAnswer: [1],
      explanation: "AWS Application Discovery Service helps organizations plan application migrations by collecting data about on-premises servers, their configurations, and dependencies, which informs the migration plan. AWS Snowball is a physical data-transfer device, AWS DMS migrates databases rather than planning migrations, and AWS Migration Hub tracks migration progress across tools rather than performing the discovery itself."
    },
    {
      id: "paper-04-022",
      domain: "ACM",
      topic: "cost-usage-report",
      type: "single",
      question: "A company is trying to analyze the costs applied to their AWS account recently. Which of the following provides them the most granular data about their AWS costs and usage?",
      options: [
        "Amazon Machine Image.",
        "AWS Cost Explorer.",
        "AWS Cost & Usage Report.",
        "Amazon CloudWatch."
      ],
      correctAnswer: [2],
      explanation: "The AWS Cost & Usage Report provides the most comprehensive and granular set of cost and usage data available, including hourly, resource-level details. AWS Cost Explorer offers visual summaries but at a less granular level, an Amazon Machine Image is an EC2 template unrelated to billing, and Amazon CloudWatch monitors performance metrics rather than cost data."
    },
    {
      id: "paper-04-023",
      domain: "GLB",
      topic: "regions",
      type: "single",
      question: "Which statement best describes the concept of an AWS region?",
      options: [
        "An AWS Region is a geographical location with a collection of Edge locations.",
        "An AWS Region is a virtual network dedicated only to a single AWS customer.",
        "An AWS Region is a geographical location with a collection of Availability Zones.",
        "An AWS Region represents the country where the AWS infrastructure exist."
      ],
      correctAnswer: [2],
      explanation: "An AWS Region is a distinct geographical location made up of multiple, isolated Availability Zones that are connected through low-latency links. A Region is not simply a collection of Edge locations, since those are separate, smaller CDN points, it isn't a customer-dedicated virtual network like a VPC, and it doesn't necessarily map to an entire country."
    },
    {
      id: "paper-04-024",
      domain: "MON",
      topic: "cloudtrail",
      type: "single",
      question: "A company has discovered that multiple S3 buckets were deleted, but it is unclear who deleted the buckets. Which of the following can the company use to determine the identity that deleted the buckets?",
      options: [
        "SNS logs.",
        "SQS logs.",
        "CloudWatch Logs.",
        "CloudTrail logs."
      ],
      correctAnswer: [3],
      explanation: "AWS CloudTrail logs record every API call made in an account, including who deleted the S3 buckets and when, making it the tool for identifying the responsible identity. SNS and SQS logs relate to messaging services and wouldn't record S3 deletion events, and CloudWatch Logs typically capture application or system logs rather than the identity behind an API-level delete action."
    },
    {
      id: "paper-04-025",
      domain: "DBA",
      topic: "database-selection",
      type: "multiple-select",
      question: "Which of the following are factors in determining the appropriate database technology to use for a specific workload? (Choose TWO)",
      options: [
        "Availability Zones.",
        "Data sovereignty.",
        "The number of reads and writes per second.",
        "The nature of the queries.",
        "Software bugs."
      ],
      correctAnswer: [2, 3],
      explanation: "Choosing the right database technology depends on workload characteristics such as the number of reads and writes per second, which drives throughput requirements, and the nature of the queries, such as simple key-value lookups versus complex joins, since different database types are optimized for different access patterns. Availability Zones are an infrastructure-placement concept, data sovereignty concerns where data is stored geographically, and software bugs are a development concern — none determine which database engine best fits a workload."
    },
    {
      id: "paper-04-026",
      domain: "ACM",
      topic: "tagging",
      type: "multiple-select",
      question: "What are the benefits of implementing a tagging strategy for AWS resources? (Choose TWO)",
      options: [
        "Quickly identify resources that belong to a specific project.",
        "Quickly identify software solutions on AWS.",
        "Track API calls in your AWS account.",
        "Quickly identify deleted resources and their metadata.",
        "Track AWS spending across multiple resources."
      ],
      correctAnswer: [0, 4],
      explanation: "Tagging AWS resources lets you quickly identify which resources belong to a specific project and track AWS spending across multiple resources by grouping cost and usage data by tag. Tags don't help identify third-party software solutions, they aren't used to track API calls since that's CloudTrail's role, and tags don't automatically flag deleted resources or their metadata."
    },
    {
      id: "paper-04-027",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "What are AWS shared controls?",
      options: [
        "Controls that are solely the responsibility of the customer based on the application they are deploying within AWS services.",
        "Controls that a customer inherits from AWS.",
        "Controls that apply to both the infrastructure layer and customer layers.",
        "Controls that the customer and AWS collaborate together upon to secure the infrastructure."
      ],
      correctAnswer: [3],
      explanation: "AWS shared controls are security controls that both AWS and the customer must implement together, each within their own layer, to fully secure the environment, such as patch management, where AWS patches the infrastructure and the customer patches guest operating systems. They are not controls that fall solely on the customer, controls simply inherited from AWS, or controls that apply uniformly across both layers without differentiated responsibilities."
    },
    {
      id: "paper-04-028",
      domain: "ARC",
      topic: "well-architected",
      type: "multiple-select",
      question: "Which design principles relate to performance efficiency in AWS? (Choose TWO)",
      options: [
        "Build multi-region architectures to better serve global customers.",
        "Apply security at all layers.",
        "Implement strong Identity and Access controls.",
        "Use serverless architectures.",
        "Enable audit logging."
      ],
      correctAnswer: [0, 3],
      explanation: "Building multi-region architectures reduces latency for global customers, and using serverless architectures removes the burden of managing servers so resources scale automatically to meet demand, both design principles under the Performance Efficiency pillar. Applying security at all layers and implementing strong identity controls fall under the Security pillar, and enabling audit logging also supports Security, not Performance Efficiency."
    },
    {
      id: "paper-04-029",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "multiple-select",
      question: "Which of the below are responsibilities of the customer when using Amazon EC2? (Choose TWO)",
      options: [
        "Protecting sensitive data.",
        "Patching of the underlying infrastructure.",
        "Setup and operation of managed databases.",
        "Maintaining consistent hardware components.",
        "Installing and configuring third-party software."
      ],
      correctAnswer: [0, 4],
      explanation: "When using EC2, the customer is responsible for protecting sensitive data they store and process, and for installing and configuring any third-party software running on their instances, since EC2 is an IaaS offering. Patching the underlying infrastructure and maintaining consistent hardware are AWS's responsibility, and setup and operation of managed databases applies to services like RDS, not EC2."
    },
    {
      id: "paper-04-030",
      domain: "CLD",
      topic: "cloud-benefits",
      type: "multiple-select",
      question: "Why would an organization decide to use AWS over an on-premises data center? (Choose TWO)",
      options: [
        "Free commercial software licenses.",
        "Free technical support.",
        "Elastic resources.",
        "On-site visits for auditing.",
        "Cost Savings."
      ],
      correctAnswer: [2, 4],
      explanation: "Organizations move to AWS for elastic resources, the ability to scale compute and storage up or down instantly to match demand, and for cost savings, since they pay only for what they use instead of over-provisioning hardware. AWS does not provide free commercial software licenses or free technical support, since Support plans are paid tiers beyond Basic, and AWS data centers do not allow customer on-site audits."
    },
    {
      id: "paper-04-031",
      domain: "SEC",
      topic: "security-auditing",
      type: "multiple-select",
      question: "Which of the following AWS services can help you perform security analysis and regulatory compliance auditing? (Choose TWO)",
      options: [
        "Amazon Inspector.",
        "AWS Virtual Private Gateway.",
        "AWS Batch.",
        "Amazon ECS.",
        "AWS Config."
      ],
      correctAnswer: [0, 4],
      explanation: "Amazon Inspector automatically scans workloads for software vulnerabilities and unintended network exposure, and AWS Config continuously assesses and records resource configurations against compliance rules, together supporting security analysis and regulatory compliance auditing. AWS Virtual Private Gateway is a VPN networking component, AWS Batch runs batch computing jobs, and Amazon ECS runs containers — none perform security or compliance analysis."
    },
    {
      id: "paper-04-032",
      domain: "EC2",
      topic: "ec2",
      type: "single",
      question: "Which of the following is NOT a characteristic of Amazon Elastic Compute Cloud (Amazon EC2)?",
      options: [
        "Amazon EC2 is considered a Serverless Web Service.",
        "Amazon EC2 eliminates the need to invest in hardware upfront.",
        "Amazon EC2 can launch as many or as few virtual servers as needed.",
        "Amazon EC2 offers scalable computing."
      ],
      correctAnswer: [0],
      explanation: "Amazon EC2 requires customers to provision and manage virtual servers, making it the opposite of a serverless offering, so calling it a \"Serverless Web Service\" is the false statement. EC2 does eliminate the need for upfront hardware investment, lets you launch as many or as few instances as needed, and offers scalable computing, all of which are true characteristics of EC2."
    },
    {
      id: "paper-04-033",
      domain: "CMP",
      topic: "lambda",
      type: "single",
      question: "What is the AWS Compute service that executes code only when triggered by events?",
      options: [
        "AWS Lambda.",
        "Amazon CloudWatch.",
        "AWS Transit Gateway.",
        "Amazon EC2."
      ],
      correctAnswer: [0],
      explanation: "AWS Lambda is AWS's serverless compute service that runs your code only in response to triggering events, such as an API call or a file upload, and you pay only for the compute time consumed. Amazon CloudWatch monitors resources, AWS Transit Gateway connects networks, and Amazon EC2 requires continuously running virtual servers rather than executing only on events."
    },
    {
      id: "paper-04-034",
      domain: "EC2",
      topic: "ec2",
      type: "single",
      question: "Both AWS and traditional IT distributors provide a wide range of virtual servers to meet their customers’ requirements. What is the name of these virtual servers in AWS?",
      options: [
        "Amazon EBS Snapshots.",
        "Amazon VPC.",
        "AWS Managed Servers.",
        "Amazon EC2 Instances."
      ],
      correctAnswer: [3],
      explanation: "Amazon EC2 Instances are AWS's virtual servers, providing resizable compute capacity in the cloud comparable to the virtual servers offered by traditional IT distributors. Amazon EBS Snapshots are backups of storage volumes, Amazon VPC is a networking construct, and \"AWS Managed Servers\" is not an actual AWS product name."
    },
    {
      id: "paper-04-035",
      domain: "ARC",
      topic: "aws-caf",
      type: "single",
      question: "What is the framework created by AWS Professional Services that helps organizations design a road map to successful cloud adoption?",
      options: [
        "AWS Secrets Manager.",
        "AWS WAF.",
        "AWS CAF.",
        "Amazon EFS."
      ],
      correctAnswer: [2],
      explanation: "The AWS Cloud Adoption Framework (AWS CAF) is a framework built by AWS Professional Services that helps organizations create a roadmap for successful cloud adoption, covering business, people, governance, platform, security, and operations perspectives. AWS Secrets Manager stores secrets, AWS WAF filters web traffic, and Amazon EFS is a file storage service — none provide a cloud adoption roadmap."
    },
    {
      id: "paper-04-036",
      domain: "ACM",
      topic: "tco-calculator",
      type: "single",
      question: "TYMO Cloud Corp is looking forward to migrating their entire on-premises data center to AWS. What tool can they use to perform a cost-benefit analysis of moving to the AWS Cloud?",
      options: [
        "AWS Cost Explorer.",
        "AWS TCO Calculator.",
        "AWS Budgets.",
        "AWS Pricing Calculator."
      ],
      correctAnswer: [1],
      explanation: "The AWS TCO (Total Cost of Ownership) Calculator compares the cost of running workloads on-premises versus on AWS, making it the right tool for a cost-benefit analysis of migrating to the cloud. AWS Cost Explorer and AWS Budgets analyze and track costs for resources already running in AWS, and the AWS Pricing Calculator estimates the cost of a proposed AWS architecture rather than comparing it against on-premises costs."
    },
    {
      id: "paper-04-037",
      domain: "ARC",
      topic: "well-architected",
      type: "single",
      question: "Which of the following activities supports the Operational Excellence pillar of the AWS Well-Architected Framework?",
      options: [
        "Using AWS Trusted Advisor to find underutilized resources.",
        "Using AWS CloudTrail to record user activities.",
        "Using AWS CloudFormation to manage infrastructure as code.",
        "Deploying an application in multiple Availability Zones."
      ],
      correctAnswer: [2],
      explanation: "Managing infrastructure as code with AWS CloudFormation supports the Operational Excellence pillar by enabling consistent, automated, and repeatable deployments and reducing the risk of manual configuration errors. Using Trusted Advisor to find underutilized resources supports Cost Optimization, using CloudTrail to record activity supports Security, and deploying across multiple Availability Zones supports Reliability."
    },
    {
      id: "paper-04-038",
      domain: "CLD",
      topic: "cloud-benefits",
      type: "multiple-select",
      question: "Why do many startup companies prefer AWS over traditional on-premises solutions? (Choose TWO)",
      options: [
        "AWS allows them to pay later when their business succeed.",
        "AWS can build complete data centers faster than any other Cloud provider.",
        "Using AWS, they can reduce time-to-market by focusing on business activities rather than on building and managing data centers.",
        "AWS removes the need to invest in operational expenditure.",
        "Using AWS allows companies to replace large capital expenditure with low variable costs."
      ],
      correctAnswer: [2, 4],
      explanation: "Startups prefer AWS because it lets them reduce time-to-market by focusing on their core business instead of building data centers, and because it replaces large upfront capital expenditure with low, variable operational costs that scale with usage. AWS doesn't allow companies to \"pay later,\" it doesn't build data centers faster than other providers as a customer benefit, and AWS doesn't eliminate operational expenditure since it shifts spending away from capital expenditure instead."
    },
    {
      id: "paper-04-039",
      domain: "DBA",
      topic: "dynamodb",
      type: "multiple-select",
      question: "What are the benefits of using DynamoDB? (Choose TWO)",
      options: [
        "Automatically scales to meet required throughput capacity.",
        "Provides resizable instances to match the current demand.",
        "Supports both relational and non-relational data models.",
        "Offers extremely low (single-digit millisecond) latency.",
        "Supports the most popular NoSQL database engines such as CouchDB and MongoDB."
      ],
      correctAnswer: [0, 3],
      explanation: "Amazon DynamoDB automatically scales to meet the throughput capacity your application needs and delivers consistent, single-digit millisecond latency at any scale. DynamoDB does not provide resizable instances, since that's an EC2/RDS concept, it's a NoSQL database so it doesn't support relational data models, and it does not run open-source engines like CouchDB or MongoDB — it uses its own proprietary engine."
    },
    {
      id: "paper-04-040",
      domain: "S3",
      topic: "s3-security",
      type: "multiple-select",
      question: "Which of the following can be used to protect data at rest on Amazon S3? (Choose TWO)",
      options: [
        "Versioning.",
        "Deduplication.",
        "Permissions.",
        "Decryption.",
        "Conversion."
      ],
      correctAnswer: [0, 2],
      explanation: "Enabling Versioning protects S3 data by preserving every version of an object so accidental overwrites or deletions can be reversed, and configuring Permissions through bucket policies or ACLs restricts who can access or modify objects at rest. Deduplication and \"Conversion\" are not S3 data-protection features, and Decryption is the reverse operation of the encryption used to protect data, not a protection mechanism itself."
    },
    {
      id: "paper-04-041",
      domain: "ARC",
      topic: "migration-acceleration-program",
      type: "multiple-select",
      question: "As part of the AWS Migration Acceleration Program (MAP), what does AWS provide to accelerate Enterprise adoption of AWS? (Choose TWO)",
      options: [
        "AWS Partners.",
        "AWS Artifact.",
        "AWS Professional Services.",
        "Amazon Athena.",
        "Amazon PinPoint."
      ],
      correctAnswer: [0, 2],
      explanation: "The AWS Migration Acceleration Program (MAP) leverages the expertise of AWS Partners and AWS Professional Services to help enterprises plan and execute migrations, providing tools, training, and services to accelerate adoption. AWS Artifact provides compliance documents, Amazon Athena queries data in S3, and Amazon Pinpoint is a marketing/engagement service — none are part of the MAP offering."
    },
    {
      id: "paper-04-042",
      domain: "ACM",
      topic: "cost-management",
      type: "single",
      question: "AWS recommends some practices to help organizations avoid unexpected charges on their bill. Which of the following is NOT one of these practices?",
      options: [
        "Deleting unused EBS volumes after terminating an EC2instance.",
        "Deleting unused AutoScaling launch configuration.",
        "Deleting unused Elastic Load Balancers.",
        "Releasing unused Elastic IPs after terminating an EC2instance."
      ],
      correctAnswer: [1],
      explanation: "Launch configurations for Auto Scaling don't incur any charges themselves, so deleting an unused one has no effect on your AWS bill, making it the one option that isn't a genuine cost-avoidance practice. Deleting unused EBS volumes, deleting unused Elastic Load Balancers, and releasing unused Elastic IPs after terminating an instance all directly stop ongoing charges and are AWS-recommended cost-avoidance practices."
    },
    {
      id: "paper-04-043",
      domain: "ACM",
      topic: "cost-explorer",
      type: "single",
      question: "What is the AWS tool that can help a company visualize their AWS spending in the last few months?",
      options: [
        "AWS Cost Explorer.",
        "AWS Pricing Calculator.",
        "AWS Budgets.",
        "AWS Consolidated Billing."
      ],
      correctAnswer: [0],
      explanation: "AWS Cost Explorer provides visual charts and reports that let you see and analyze your AWS spending trends over the past several months. The AWS Pricing Calculator estimates future costs rather than visualizing historical spend, AWS Budgets sets thresholds and alerts rather than visualizing trends, and AWS Consolidated Billing combines billing across accounts but doesn't provide the visualization itself."
    },
    {
      id: "paper-04-044",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "multiple-select",
      question: "When running a workload in AWS, the customer is NOT responsible for: (Select TWO)",
      options: [
        "Running penetration tests.",
        "Reserving capacity.",
        "Data center operations.",
        "Auditing and regulatory compliance.",
        "Infrastructure security."
      ],
      correctAnswer: [2, 4],
      explanation: "Under the Shared Responsibility Model, AWS handles data center operations and infrastructure security as part of \"security of the cloud,\" so customers are not responsible for these. Customers remain responsible for running their own penetration tests on their applications, reserving the capacity they need, and auditing the regulatory compliance of their own workloads."
    },
    {
      id: "paper-04-045",
      domain: "INT",
      topic: "sns",
      type: "single",
      question: "Which AWS service can be used to send promotional text messages (SMS) to more than 200 countries worldwide?",
      options: [
        "Amazon Simple Email Service (Amazon SES).",
        "Amazon Simple Storage Service (Amazon S3).",
        "Amazon Simple Notification Service (Amazon SNS).",
        "Amazon Simple Queue Service (Amazon SQS)."
      ],
      correctAnswer: [2],
      explanation: "Amazon Simple Notification Service (SNS) supports sending SMS text messages to recipients in more than 200 countries, making it suitable for promotional messaging campaigns. Amazon SES sends emails rather than SMS, Amazon S3 is object storage, and Amazon SQS is a message queuing service — none send SMS messages."
    },
    {
      id: "paper-04-046",
      domain: "DBA",
      topic: "rds",
      type: "multiple-select",
      question: "Which of the following allows you to create new RDS instances? (Choose TWO)",
      options: [
        "AWS CodeDeploy.",
        "AWS Quick Starts.",
        "AWS CloudFormation.",
        "AWS DMS.",
        "AWS Management Console."
      ],
      correctAnswer: [2, 4],
      explanation: "New Amazon RDS instances can be created either manually through the AWS Management Console or declaratively through an AWS CloudFormation template that provisions the database as part of your infrastructure as code. AWS CodeDeploy automates application code deployment, AWS Quick Starts are reference architectures rather than a provisioning interface, and AWS DMS migrates data into an existing database rather than creating new RDS instances."
    },
    {
      id: "paper-04-047",
      domain: "ACM",
      topic: "pricing-models",
      type: "single",
      question: "One of the major advantages of using AWS is cost savings. What does AWS provide to reduce the cost of running Amazon EC2 instances?",
      options: [
        "Low monthly instance maintenance costs.",
        "Low-cost instance tagging.",
        "Per-second instance billing.",
        "Low instance start-up fees."
      ],
      correctAnswer: [2],
      explanation: "AWS reduces the cost of running EC2 instances through per-second billing, ensuring customers only pay for the exact compute time they consume rather than rounding up to the nearest hour. There are no \"low monthly maintenance costs,\" \"low-cost tagging,\" or \"low instance start-up fees\" as AWS EC2 cost-reduction mechanisms — these aren't real AWS pricing features."
    },
    {
      id: "paper-04-048",
      domain: "ARC",
      topic: "professional-services",
      type: "single",
      question: "Which AWS Group assists customers in achieving their desired business outcomes?",
      options: [
        "AWS Security Team.",
        "AWS Professional Services.",
        "AWS Trusted Advisor.",
        "AWS Concierge Support Team."
      ],
      correctAnswer: [1],
      explanation: "AWS Professional Services is the group of AWS experts who work directly with customers to help them achieve their specific business and technical outcomes on AWS. The AWS Security Team and the Concierge team, which is a support benefit under Enterprise Support rather than a broad outcomes-focused group, don't fill this role, and AWS Trusted Advisor is an automated tool, not a group of people."
    },
    {
      id: "paper-04-049",
      domain: "SEC",
      topic: "kms",
      type: "single",
      question: "Which AWS service or feature is used to manage the keys used to encrypt customer data?",
      options: [
        "AWS KMS.",
        "AWS Service Control Policies (SCPs).",
        "Multi-Factor Authentication (MFA).",
        "Amazon Macie."
      ],
      correctAnswer: [0],
      explanation: "AWS Key Management Service (KMS) is used to create, manage, and control the cryptographic keys used to encrypt customer data across AWS services. AWS Service Control Policies restrict permissions in AWS Organizations, MFA adds a login security factor, and Amazon Macie discovers and protects sensitive data — none manage encryption keys."
    },
    {
      id: "paper-04-050",
      domain: "SEC",
      topic: "artifact",
      type: "single",
      question: "Which AWS Service allows customers to download AWS SOC & PCI reports?",
      options: [
        "AWS Well-Architected Tool.",
        "AWS Artifact.",
        "AWS Glue.",
        "Amazon Chime."
      ],
      correctAnswer: [1],
      explanation: "AWS Artifact provides on-demand, self-service access to AWS's compliance reports, including SOC and PCI reports, for download. The AWS Well-Architected Tool reviews architectures against best practices, AWS Glue is a data-integration and ETL service, and Amazon Chime is a communications service — none provide compliance report downloads."
    }
  ]
});
