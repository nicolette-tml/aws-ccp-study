window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "paper-10",
  paperId: "paper-10",
  paperName: "Practice Paper 10",
  questions: [
    {
      id: "paper-10-001",
      domain: "DEP",
      topic: "cloudformation",
      type: "multiple-select",
      question: "Which of the following can an AWS customer use to launch a new Amazon Relational Database Service (Amazon RDS) cluster? (Select TWO)",
      options: [
        "AWS Concierge.",
        "AWS CloudFormation.",
        "Amazon Simple Storage Service (Amazon S3).",
        "Amazon EC2 Auto Scaling.",
        "AWS Management Console."
      ],
      correctAnswer: [1, 4],
      explanation: "AWS Management Console lets you manually create and configure a new Amazon RDS cluster through a graphical interface, while AWS CloudFormation lets you define and provision the same cluster as code using a template — both are valid ways to launch RDS resources. AWS Concierge is a billing support contact (not a provisioning tool), Amazon S3 is object storage, and Amazon EC2 Auto Scaling only manages the scaling of EC2 instances, not RDS clusters."
    },
    {
      id: "paper-10-002",
      domain: "ACM",
      topic: "reserved-instances",
      type: "single",
      question: "Which of the following Reserved Instance (RI) pricing models provides the highest average savings compared to On-Demand pricing?",
      options: [
        "One-year, No Upfront, Standard RI pricing.",
        "One-year, All Upfront, Convertible RI pricing.",
        "Three-year, All Upfront, Standard RI pricing.",
        "Three-year, No Upfront, Convertible RI pricing."
      ],
      correctAnswer: [2],
      explanation: "Three-year, All Upfront, Standard RI pricing provides the highest average savings compared to On-Demand, since longer commitment terms and full upfront payment both increase the discount, and Standard RIs offer deeper discounts than Convertible RIs. The one-year options provide smaller discounts due to the shorter term, and the three-year Convertible RI offers less savings than the Standard RI because of the added flexibility to exchange instance types."
    },
    {
      id: "paper-10-003",
      domain: "MON",
      topic: "cloudwatch-logs",
      type: "multiple-select",
      question: "Which of the following are features of Amazon CloudWatch Logs? (Select TWO)",
      options: [
        "Summaries by Amazon Simple Notification Service (Amazon SNS).",
        "Free Amazon Elasticsearch Service analytics.",
        "Provided at no charge.",
        "Real-time monitoring.",
        "Adjustable retention."
      ],
      correctAnswer: [3, 4],
      explanation: "Amazon CloudWatch Logs provides real-time monitoring of incoming log data and lets customers configure adjustable retention periods for how long logs are kept. It does not include free Amazon Elasticsearch Service analytics or automatic SNS summaries as built-in features, and it is not provided free of charge — log ingestion and storage are billed beyond the free tier."
    },
    {
      id: "paper-10-004",
      domain: "CMP",
      topic: "lambda",
      type: "single",
      question: "Which of the following is an AWS-managed compute service?",
      options: [
        "Amazon SWF.",
        "Amazon EC2.",
        "AWS Lambda.",
        "Amazon Aurora."
      ],
      correctAnswer: [2],
      explanation: "AWS Lambda is a fully managed, serverless compute service where AWS provisions and manages all underlying servers, so customers only supply code. Amazon EC2 requires the customer to manage the guest operating system, Amazon Aurora is a managed database rather than a compute service, and Amazon SWF is a workflow orchestration service, not compute."
    },
    {
      id: "paper-10-005",
      domain: "CMP",
      topic: "lambda",
      type: "single",
      question: "A company wants to reduce the physical compute footprint that developers use to run code. Which service would meet that need by enabling serverless architectures?",
      options: [
        "Amazon Elastic Compute Cloud (Amazon EC2).",
        "AWS Lambda.",
        "Amazon DynamoDB.",
        "AWS CodeCommit."
      ],
      correctAnswer: [1],
      explanation: "AWS Lambda lets developers run code without provisioning or managing any servers, enabling a serverless architecture that removes the need for a physical compute footprint. Amazon EC2 still requires managing virtual server instances, Amazon DynamoDB is a database service, and AWS CodeCommit is a source-control repository — neither reduces compute footprint the way Lambda does."
    },
    {
      id: "paper-10-006",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "Which of the following is the customer’s responsibility under the AWS shared responsibility model?",
      options: [
        "Patching underlying infrastructure",
        "Physical security",
        "Patching Amazon EC2 instances",
        "Patching network infrastructure"
      ],
      correctAnswer: [2],
      explanation: "Under the AWS Shared Responsibility Model, patching the guest operating system on Amazon EC2 instances is the customer's responsibility, since EC2 is an infrastructure-as-a-service offering. AWS is responsible for patching the underlying infrastructure, providing physical security of its data centers, and maintaining the network infrastructure."
    },
    {
      id: "paper-10-007",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "According to the AWS shared responsibility model who is responsible for configuration management?",
      options: [
        "It is solely the responsibility of the customer.",
        "It is solely the responsibility of AWS.",
        "It is shared between AWS and the customer.",
        "It is not part of the AWS shared responsibility model."
      ],
      correctAnswer: [2],
      explanation: "Configuration management is a shared control under the AWS Shared Responsibility Model: AWS manages the configuration of its own infrastructure devices, while customers are responsible for configuring their own guest operating systems, databases, and applications. It is therefore neither solely AWS's nor solely the customer's responsibility, and it is very much part of the shared model."
    },
    {
      id: "paper-10-008",
      domain: "SEC",
      topic: "macie",
      type: "single",
      question: "Which security service automatically recognizes and classifies sensitive data or intellectual property on AWS?",
      options: [
        "Amazon GuardDuty.",
        "Amazon Macie.",
        "Amazon Inspector.",
        "AWS Shield."
      ],
      correctAnswer: [1],
      explanation: "Amazon Macie uses machine learning to automatically discover, classify, and protect sensitive data, such as personally identifiable information, stored in AWS. Amazon GuardDuty detects malicious activity and unauthorized behavior, Amazon Inspector scans workloads for software vulnerabilities, and AWS Shield protects against DDoS attacks — none of these classify sensitive data."
    },
    {
      id: "paper-10-009",
      domain: "ACM",
      topic: "pricing-models",
      type: "multiple-select",
      question: "Which of the following BEST describe the AWS pricing model? (Select TWO)",
      options: [
        "Fixed-term.",
        "Pay-as-you-go.",
        "Colocation.",
        "Planned.",
        "Variable cost."
      ],
      correctAnswer: [1, 4],
      explanation: "AWS pricing follows a pay-as-you-go model, in which customers pay only for the resources they actually consume, producing a variable cost that fluctuates with usage. AWS pricing is not fixed-term or pre-planned, and colocation refers to renting physical space in a third-party data center, which is not an AWS pricing model at all."
    },
    {
      id: "paper-10-010",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "multiple-select",
      question: "Under the shared responsibility model, which of the following tasks are the responsibility of the AWS customer? (Select TWO)",
      options: [
        "Ensuring that application data is encrypted at rest.",
        "Ensuring that AWS NTP servers are set to the correct time.",
        "Ensuring that users have received security training in the use of AWS services.",
        "Ensuring that access to data centers is restricted.",
        "Ensuring that hardware is disposed of properly."
      ],
      correctAnswer: [0, 2],
      explanation: "Under the Shared Responsibility Model, the customer must ensure application data is encrypted at rest and that their users receive appropriate security training for using AWS services. AWS, not the customer, is responsible for keeping its NTP servers synchronized, restricting physical access to its data centers, and properly disposing of decommissioned hardware."
    },
    {
      id: "paper-10-011",
      domain: "ACM",
      topic: "consolidated-billing",
      type: "single",
      question: "A customer is using multiple AWS accounts with separate billing. How can the customer take advantage of volume discounts with minimal impact to the AWS resources?",
      options: [
        "Create one global AWS account and move all AWS resources to that account.",
        "Sign up for three years of Reserved Instance pricing up front.",
        "Use the consolidated billing feature from AWS Organizations.",
        "Sign up for the AWS Enterprise support plan to get volume discounts."
      ],
      correctAnswer: [2],
      explanation: "AWS Organizations' consolidated billing feature combines the usage of multiple linked accounts onto a single bill, letting them collectively qualify for volume discounts without moving any resources between accounts. Migrating everything into one global account would be highly disruptive, purchasing multi-year Reserved Instances doesn't address discounts across separate accounts, and the Enterprise support plan does not itself provide volume-based pricing discounts."
    },
    {
      id: "paper-10-012",
      domain: "ACM",
      topic: "reserved-instances",
      type: "single",
      question: "Which Amazon EC2 pricing model offers the MOST significant discount when compared to OnDemand Instances?",
      options: [
        "A Partial Upfront Reserved Instances for a 1-year term.",
        "All Upfront Reserved instances for a 1 year form.",
        "All Upfront Reserved Instances for a 3 year term.",
        "No Upfront Reserved Instances for a 3 year term."
      ],
      correctAnswer: [2],
      explanation: "All Upfront Reserved Instances for a 3-year term provide the most significant discount versus On-Demand, since the longest commitment term combined with paying the entire cost upfront maximizes savings. The 1-year Partial and All Upfront options offer smaller discounts due to the shorter term, and the 3-year No Upfront option saves less than the All Upfront option for the same term."
    },
    {
      id: "paper-10-013",
      domain: "DBA",
      topic: "data-access-patterns",
      type: "multiple-select",
      question: "Which AWS services should be used for read/write of constantly changing data? (Select TWO)",
      options: [
        "Amazon Glacier.",
        "Amazon RDS.",
        "AWS Snowball.",
        "Amazon Redshift.",
        "Amazon EFS."
      ],
      correctAnswer: [1, 4],
      explanation: "Amazon RDS and Amazon EFS are both designed to support continuous read and write access to data that changes frequently, making them suitable for constantly-changing workloads. Amazon Glacier is built for infrequently accessed archival data, AWS Snowball is a physical data-transfer device (not a live data store), and Amazon Redshift is a data warehouse optimized for batch analytical queries rather than frequent read/write updates."
    },
    {
      id: "paper-10-014",
      domain: "MON",
      topic: "aws-config",
      type: "single",
      question: "Which AWS service allows users to identify the changes made to a resource over time?",
      options: [
        "Amazon Inspector.",
        "AWS Config.",
        "AWS Service Catalog.",
        "AWS IAM."
      ],
      correctAnswer: [1],
      explanation: "AWS Config continuously records and tracks configuration changes made to AWS resources over time, letting you see exactly what changed and when. Amazon Inspector scans for vulnerabilities, AWS Service Catalog manages approved product catalogs, and AWS IAM controls access permissions — none of these track resource configuration history."
    },
    {
      id: "paper-10-015",
      domain: "ARC",
      topic: "decoupling",
      type: "single",
      question: "According to best practices, how should an application be designed to run in the AWS Cloud?",
      options: [
        "Use tightly coupled components.",
        "Use loosely coupled components.",
        "Use infrequently coupled components.",
        "Use frequently coupled components."
      ],
      correctAnswer: [1],
      explanation: "AWS best practices recommend designing applications with loosely coupled components, so that individual components can fail, scale, or be updated independently without affecting the rest of the system. Tightly coupled, infrequently coupled, and frequently coupled designs all increase interdependency between components, which works against resilience and scalability."
    },
    {
      id: "paper-10-016",
      domain: "ACM",
      topic: "support",
      type: "multiple-select",
      question: "Which benefits are included with the AWS Business Support plan? (Select TWO)",
      options: [
        "24/7 assistance by way of live chat or a telephone call.",
        "Support from a dedicated AWS Technical Account Manager.",
        "An unlimited number of cases and contacts.",
        "15-minute response time for production system interruption cases.",
        "Annual operational reviews with AWS Solutions Architects."
      ],
      correctAnswer: [0, 2],
      explanation: "The AWS Business Support plan includes 24/7 access to Cloud Support Engineers by chat, phone, or email, and it provides an unlimited number of support cases and contacts. A dedicated Technical Account Manager, a 15-minute response time for production-system-down cases, and annual operational reviews are all benefits reserved for the Enterprise Support plan."
    },
    {
      id: "paper-10-017",
      domain: "GLB",
      topic: "route-53",
      type: "single",
      question: "Which of the following is an AWS managed Domain Name System (DNS) web service?",
      options: [
        "Amazon Route 53.",
        "Amazon Neptune.",
        "Amazon SageMaker.",
        "Amazon Lightsail."
      ],
      correctAnswer: [0],
      explanation: "Amazon Route 53 is AWS's managed Domain Name System (DNS) web service, translating domain names into IP addresses and routing end-user requests to AWS resources. Amazon Neptune is a graph database, Amazon SageMaker is a machine learning platform, and Amazon Lightsail is a simplified virtual server offering — none provide DNS."
    },
    {
      id: "paper-10-018",
      domain: "ACM",
      topic: "dedicated-hosts",
      type: "single",
      question: "A user must meet compliance and software licensing requirements that state a workload must be hosted on a physical server. When Amazon EC2 instance pricing option will meet these requirements?",
      options: [
        "Dedicated Hosts.",
        "Dedicated Instances.",
        "Spot Instances.",
        "Reserved Instances."
      ],
      correctAnswer: [0],
      explanation: "Dedicated Hosts provide a physical Amazon EC2 server dedicated entirely to a single customer, allowing visibility into the underlying hardware needed to satisfy compliance and licensing requirements tied to physical servers. Dedicated Instances also run on hardware dedicated to one customer but don't expose the same host-level visibility, while Spot and Reserved Instances run on shared hardware and don't guarantee a physical server for licensing purposes."
    },
    {
      id: "paper-10-019",
      domain: "ACM",
      topic: "reserved-instances",
      type: "single",
      question: "Which of the Reserved Instance (RI) pricing models can change the attributes of the RI as long as the exchange results in the creation of RIs of equal or greater value?",
      options: [
        "Dedicated RIs.",
        "Scheduled RIs.",
        "Convertible RIs.",
        "Standard RIs."
      ],
      correctAnswer: [2],
      explanation: "Convertible Reserved Instances can be exchanged for a different Convertible RI configuration during the term, as long as the exchange results in RIs of equal or greater value, offering flexibility as needs change. Standard RIs cannot be exchanged for different instance attributes, and 'Dedicated RIs' and 'Scheduled RIs' are not valid Reserved Instance pricing models."
    },
    {
      id: "paper-10-020",
      domain: "DBA",
      topic: "elasticache",
      type: "single",
      question: "Which service is best for storing common database query results, which helps to alleviate database access load?",
      options: [
        "Amazon Machine Learning.",
        "Amazon SQS.",
        "Amazon ElastiCache.",
        "Amazon EC2 Instance Store."
      ],
      correctAnswer: [2],
      explanation: "Amazon ElastiCache is an in-memory caching service that stores frequently requested database query results in memory, reducing the load on the underlying database and speeding up response times. Amazon Machine Learning is unrelated to caching, Amazon SQS is a messaging queue service, and the EC2 Instance Store is ephemeral local disk storage tied to a single instance, not a shared caching layer."
    },
    {
      id: "paper-10-021",
      domain: "ACM",
      topic: "spot-instances",
      type: "multiple-select",
      question: "When should a company consider using Amazon EC2 Spot Instances? (Select TWO)",
      options: [
        "For non-production applications.",
        "For stateful workloads.",
        "For applications that cannot have interruptions.",
        "For fault-tolerant flexible applications.",
        "For sensitive database applications."
      ],
      correctAnswer: [0, 3],
      explanation: "Amazon EC2 Spot Instances are best suited for non-production applications and fault-tolerant, flexible workloads that can handle being interrupted, since Spot capacity can be reclaimed by AWS with short notice in exchange for steep discounts. Stateful workloads, applications that cannot tolerate interruptions, and sensitive database applications all need guaranteed, uninterrupted capacity, which Spot Instances do not provide."
    },
    {
      id: "paper-10-022",
      domain: "ACM",
      topic: "cost-estimation",
      type: "multiple-select",
      question: "Which AWS tools assist with estimating costs? (Select three)",
      options: [
        "Detailed billing report.",
        "Cost allocation tags.",
        "AWS Simple Monthly Calculator.",
        "AWS Total Cost of Ownership (TCO) Calculator.",
        "Cost Estimator."
      ],
      correctAnswer: [1, 2, 3],
      explanation: "Cost allocation tags let you categorize and track spending by tagging resources, the AWS Simple Monthly Calculator (now the Pricing Calculator) estimates monthly costs for planned deployments, and the AWS TCO Calculator compares the cost of running workloads on AWS versus on-premises — all three help estimate costs. There is no AWS service called 'Cost Estimator,' and a detailed billing report only shows historical costs already incurred rather than helping estimate future costs."
    },
    {
      id: "paper-10-023",
      domain: "ELB",
      topic: "auto-scaling",
      type: "single",
      question: "A company wants to focus on business activities instead of managing compute and capacity. Which AWS service can be used to automatically add or remove Amazon EC2 instances based on demand?",
      options: [
        "Elastic Load Balancer.",
        "Amazon EC2 Auto Scaling.",
        "Amazon Route 53.",
        "Amazon CloudFront."
      ],
      correctAnswer: [1],
      explanation: "Amazon EC2 Auto Scaling automatically adds or removes EC2 instances based on demand, letting a company maintain the right capacity without manual intervention so it can focus on its core business instead of capacity planning. An Elastic Load Balancer distributes traffic but doesn't add or remove instances, Amazon Route 53 provides DNS routing, and Amazon CloudFront is a content delivery network — none of these scale compute capacity."
    },
    {
      id: "paper-10-024",
      domain: "ACM",
      topic: "support",
      type: "single",
      question: "Which is the minimum AWS Support plan that includes Infrastructure Event Management without additional costs?",
      options: [
        "Enterprise.",
        "Business.",
        "Developer.",
        "Basic."
      ],
      correctAnswer: [0],
      explanation: "AWS Enterprise Support is the minimum plan that includes Infrastructure Event Management at no additional cost, providing architectural and scaling guidance for planned events. The Business, Developer, and Basic plans do not include Infrastructure Event Management as part of their base offering."
    },
    {
      id: "paper-10-025",
      domain: "IAM",
      topic: "access-keys",
      type: "single",
      question: "Access keys in AWS Identity and Access Management (IAM) are used to:",
      options: [
        "Log in to the AWS Management Console.",
        "Make programmatic calls to AWS from AWS APIs.",
        "Log in to Amazon EC2 instances.",
        "Authenticate to AWS CodeCommit repositories."
      ],
      correctAnswer: [1],
      explanation: "IAM access keys consist of an access key ID and secret access key, used to make programmatic calls to AWS services through the CLI, SDKs, or APIs. They are not used to log in to the AWS Management Console (that uses a username and password), to log in to EC2 instances (that uses SSH keys or RDP credentials), or to authenticate to CodeCommit repositories (that uses Git credentials or SSH keys)."
    },
    {
      id: "paper-10-026",
      domain: "DBA",
      topic: "athena",
      type: "single",
      question: "Which AWS service can be used to query stored datasets directly from Amazon S3 using standard SQL?",
      options: [
        "AWS Glue.",
        "AWS Data Pipeline.",
        "Amazon CloudSearch.",
        "Amazon Athena."
      ],
      correctAnswer: [3],
      explanation: "Amazon Athena is a serverless interactive query service that lets you analyze data directly in Amazon S3 using standard SQL, without needing to load the data elsewhere. AWS Glue is an ETL and data-catalog service, AWS Data Pipeline orchestrates data movement between compute and storage services, and Amazon CloudSearch is a managed search service — none query S3 data using SQL directly."
    },
    {
      id: "paper-10-027",
      domain: "CLD",
      topic: "agility",
      type: "single",
      question: "How does AWS shorten the time to provision IT resources?",
      options: [
        "It supplies an online IT ticketing platform for resource requests.",
        "It supports automatic code validation services.",
        "It provides the ability to programmatically provision existing resources.",
        "It automates the resource request process from a company’s IT vendor list."
      ],
      correctAnswer: [2],
      explanation: "AWS shortens the time to provision IT resources by letting customers programmatically provision infrastructure through APIs, the CLI, or infrastructure-as-code tools, replacing what used to be a manual procurement process taking weeks. AWS doesn't rely on an IT ticketing platform, automatic code validation, or automating requests through a vendor list to speed up provisioning."
    },
    {
      id: "paper-10-028",
      domain: "MON",
      topic: "cloudtrail",
      type: "multiple-select",
      question: "Which AWS services can be used to gather information about AWS account activity? (Select TWO)",
      options: [
        "Amazon CloudFront.",
        "AWS Cloud9.",
        "AWS CloudTrail.",
        "AWS CloudHSM.",
        "Amazon CloudWatch."
      ],
      correctAnswer: [2, 4],
      explanation: "AWS CloudTrail logs every API call and account activity made across AWS services, while Amazon CloudWatch monitors metrics, logs, and can trigger alarms based on account and resource activity — together they help gather information about what happened in an AWS account. Amazon CloudFront is a content delivery network, AWS Cloud9 is a cloud IDE, and AWS CloudHSM manages hardware security modules, none of which track account activity."
    },
    {
      id: "paper-10-029",
      domain: "S3",
      topic: "s3",
      type: "multiple-select",
      question: "Which of the following are characteristics of Amazon S3? (Select TWO)",
      options: [
        "A global file system.",
        "An object store.",
        "A local file store.",
        "A network file system.",
        "A durable storage system."
      ],
      correctAnswer: [1, 4],
      explanation: "Amazon S3 is fundamentally an object storage service, storing data as objects rather than in a traditional file or block structure, and it is designed for extremely high durability (99.999999999%, or 11 nines). It is not a local file store or a network file system (those describe services like Amazon EFS), and while accessible globally, S3 is not itself described as 'a global file system.'"
    },
    {
      id: "paper-10-030",
      domain: "ACM",
      topic: "tco-calculator",
      type: "single",
      question: "A user wants guidance on possible savings when migrating from on-premises to AWS. Which tool is suitable for this scenario?",
      options: [
        "AWS Budgets.",
        "Cost Explorer.",
        "AWS Total Cost of Ownership (TCO) Calculator.",
        "AWS Well-Architected Tool."
      ],
      correctAnswer: [2],
      explanation: "The AWS Total Cost of Ownership (TCO) Calculator is specifically designed to compare the cost of running workloads on-premises versus on AWS, helping estimate potential savings before migrating. AWS Budgets sets spending alerts, Cost Explorer analyzes existing AWS spend after the fact, and the AWS Well-Architected Tool reviews architecture against best practices — none of these estimate on-premises-to-AWS migration savings."
    },
    {
      id: "paper-10-031",
      domain: "CMP",
      topic: "lambda",
      type: "single",
      question: "Which of the following services is in the category of AWS serverless platform?",
      options: [
        "Amazon EMR.",
        "Elastic Load Balancing.",
        "AWS Lambda.",
        "AWS Mobile Hub."
      ],
      correctAnswer: [2],
      explanation: "AWS Lambda is AWS's serverless compute platform, where you run code without provisioning or managing servers and pay only for the compute time consumed. Amazon EMR is a managed big-data processing framework, Elastic Load Balancing distributes traffic across servers, and AWS Mobile Hub is a mobile app development tool — none are serverless compute platforms."
    },
    {
      id: "paper-10-032",
      domain: "ACM",
      topic: "cost-allocation-tags",
      type: "single",
      question: "The use of what AWS feature or service allows companies to track and categorize spending on a detailed level?",
      options: [
        "Cost allocation tags.",
        "Consolidated billing.",
        "AWS Budgets.",
        "AWS Marketplace."
      ],
      correctAnswer: [0],
      explanation: "Cost allocation tags let a company label AWS resources with metadata (such as project, department, or environment) so that spending can be tracked and categorized at a detailed level in billing reports. Consolidated billing aggregates usage across multiple accounts for volume discounts, AWS Budgets sets spending alerts, and AWS Marketplace is a software catalog — none of these categorize detailed spending the way tags do."
    },
    {
      id: "paper-10-033",
      domain: "ACM",
      topic: "trusted-advisor",
      type: "single",
      question: "Which of the following inspects AWS environments to find opportunities that can save money for users and also improve system performance?",
      options: [
        "AWS Cost Explorer.",
        "AWS Trusted Advisor.",
        "Consolidated billing.",
        "Detailed billing."
      ],
      correctAnswer: [1],
      explanation: "AWS Trusted Advisor inspects your AWS environment across categories including cost optimization, performance, security, fault tolerance, and service limits, providing recommendations that can both save money and improve performance. AWS Cost Explorer only visualizes spending, and consolidated billing and detailed billing are billing features, not inspection or recommendation tools."
    },
    {
      id: "paper-10-034",
      domain: "CLD",
      topic: "hybrid-architecture",
      type: "single",
      question: "Web servers running on Amazon EC2 access a legacy application running in a corporate data center. What term would describe this model?",
      options: [
        "Cloud-native.",
        "Partner network.",
        "Hybrid architecture.",
        "Infrastructure as a service."
      ],
      correctAnswer: [2],
      explanation: "Running web servers on Amazon EC2 that access an application still running in an on-premises data center describes a hybrid architecture, where cloud and on-premises environments work together. This is not a purely cloud-native design, it isn't related to the AWS Partner Network, and while EC2 is an example of infrastructure as a service, that term alone doesn't describe the mixed on-premises/cloud model being used here."
    },
    {
      id: "paper-10-035",
      domain: "ELB",
      topic: "auto-scaling",
      type: "single",
      question: "What technology enables compute capacity to adjust as loads change?",
      options: [
        "Load balancing.",
        "Automatic failover.",
        "Round robin.",
        "Auto Scaling."
      ],
      correctAnswer: [3],
      explanation: "Auto Scaling is the technology that automatically adjusts compute capacity up or down as application load changes, adding instances when demand increases and removing them when demand drops. Load balancing distributes existing traffic across instances but doesn't change capacity, automatic failover switches to backup resources during outages, and round robin is simply a traffic-distribution algorithm — none of these adjust capacity themselves."
    },
    {
      id: "paper-10-036",
      domain: "DBA",
      topic: "dynamodb",
      type: "single",
      question: "Which AWS service is a managed NoSQL database?",
      options: [
        "Amazon Redshift.",
        "Amazon DynamoDB.",
        "Amazon Aurora.",
        "Amazon RDS for ManaDB."
      ],
      correctAnswer: [1],
      explanation: "Amazon DynamoDB is AWS's fully managed NoSQL database service, designed for fast and flexible key-value and document data storage. Amazon Redshift is a data warehouse for analytics, Amazon Aurora is a relational (SQL) database, and 'Amazon RDS for ManaDB' is not a real AWS service."
    },
    {
      id: "paper-10-037",
      domain: "GLB",
      topic: "regions-availability-zones",
      type: "single",
      question: "Which of the following is a correct relationship between regions, Availability Zones, and edge locations?",
      options: [
        "Data centers contain regions.",
        "Regions contain Availability Zones.",
        "Availability Zones contain edge locations.",
        "Edge locations contain regions."
      ],
      correctAnswer: [1],
      explanation: "AWS Regions contain multiple Availability Zones, which are physically separate data centers within a Region; this is the correct hierarchy of AWS global infrastructure. Data centers do not contain Regions (it's the reverse), Availability Zones do not contain edge locations (edge locations are a separate, more numerous set of caching locations), and edge locations do not contain Regions."
    },
    {
      id: "paper-10-038",
      domain: "ARC",
      topic: "parallelize-tasks",
      type: "single",
      question: "What approach to transcoding a large number of individual video files adheres to AWS architecture principles?",
      options: [
        "Using many instances in parallel.",
        "Using a single large instance during off-peak hours.",
        "Using dedicated hardware.",
        "Using a large GPU instance type."
      ],
      correctAnswer: [0],
      explanation: "Transcoding many individual video files is an ideal parallelizable task, so using many instances in parallel — each handling a subset of the files — follows the AWS best practice of parallelizing tasks to reduce overall processing time and cost. Using a single large instance, dedicated hardware, or one large GPU instance concentrates the work on one resource instead of distributing it, which is slower and less aligned with cloud-native design."
    },
    {
      id: "paper-10-039",
      domain: "DBA",
      topic: "database-hosting",
      type: "multiple-select",
      question: "Which AWS services can host a Microsoft SQL Server database? (Select TWO)",
      options: [
        "Amazon EC2.",
        "Amazon Relational Database Service (Amazon RDS).",
        "Amazon Aurora.",
        "Amazon Redshift.",
        "Amazon S3."
      ],
      correctAnswer: [0, 1],
      explanation: "Both Amazon EC2 (where you can install and manage SQL Server yourself) and Amazon RDS (which offers SQL Server as a managed database engine) can host a Microsoft SQL Server database. Amazon Aurora only supports MySQL- and PostgreSQL-compatible engines, Amazon Redshift is a data warehouse for analytics rather than a transactional database engine, and Amazon S3 is object storage, not a database host."
    },
    {
      id: "paper-10-040",
      domain: "IAM",
      topic: "access-keys",
      type: "single",
      question: "Which AWS IAM feature allows developers to access AWS services through the AWS CLI?",
      options: [
        "API keys.",
        "Access keys.",
        "User names/Passwords.",
        "SSH keys."
      ],
      correctAnswer: [1],
      explanation: "IAM access keys (an access key ID and secret access key) are the credentials that allow developers to authenticate and access AWS services programmatically through the AWS CLI. API keys and SSH keys are not the mechanism IAM uses for CLI authentication, and usernames/passwords are used for the Management Console, not the CLI."
    },
    {
      id: "paper-10-041",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "The user is fully responsible for which action when running workloads on AWS?",
      options: [
        "Patching the infrastructure components.",
        "Maintaining the underlying infrastructure components.",
        "Maintaining physical and environmental controls.",
        "Implementing controls to route application traffic."
      ],
      correctAnswer: [3],
      explanation: "Implementing controls to route application traffic, such as configuring security groups and route tables, falls entirely under the customer's responsibility ('security in the cloud') under the AWS Shared Responsibility Model. Patching, maintaining, and physically securing the underlying infrastructure are all AWS's responsibility ('security of the cloud'), not the customer's."
    },
    {
      id: "paper-10-042",
      domain: "ACM",
      topic: "support",
      type: "single",
      question: "Which AWS support plan includes a dedicated Technical Account Manager?",
      options: [
        "Developer.",
        "Enterprise.",
        "Business.",
        "Basic."
      ],
      correctAnswer: [1],
      explanation: "The AWS Enterprise Support plan includes a dedicated Technical Account Manager (TAM) who provides proactive, ongoing guidance and acts as the primary advocate for the customer. The Developer and Business plans do not include a TAM, and the Basic plan offers only limited self-service support resources."
    },
    {
      id: "paper-10-043",
      domain: "ML",
      topic: "rekognition",
      type: "single",
      question: "What time-savings advantage is offered with the use of Amazon Rekognition?",
      options: [
        "Amazon Rekognition provides automatic watermarking of images.",
        "Amazon Rekognition provides automatic detection of objects appearing in pictures.",
        "Amazon Recognition provides the ability to resize millions of images automatically.",
        "Amazon Rekognition uses Amazon Mechanical Turk to allow humans to bid on object detection jobs."
      ],
      correctAnswer: [1],
      explanation: "Amazon Rekognition uses machine learning to automatically detect and label objects, scenes, and faces appearing in images and video, saving the time that would otherwise be spent manually tagging visual content. It does not provide automatic watermarking, automatic bulk image resizing, or use Amazon Mechanical Turk for human-based object detection."
    },
    {
      id: "paper-10-044",
      domain: "ELB",
      topic: "auto-scaling",
      type: "single",
      question: "Which AWS service can be used to automatically scale an application up and down without making capacity planning decisions?",
      options: [
        "Amazon AutoScaling.",
        "Amazon Redshift.",
        "AWS CloudTrail.",
        "AWS Lambda."
      ],
      correctAnswer: [0],
      explanation: "Amazon EC2 Auto Scaling automatically scales the number of EC2 instances up or down to match demand, removing the need for the customer to make manual capacity-planning decisions. Amazon Redshift is a data warehouse, AWS CloudTrail logs API activity, and AWS Lambda runs code without servers but does not scale a fleet of EC2 instances the way Auto Scaling does."
    },
    {
      id: "paper-10-045",
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
      explanation: "Amazon RDS is a managed relational database service where AWS handles maintenance tasks such as patching the underlying operating system, freeing customers from that operational burden compared to running a database on self-managed servers. AWS does not manage the actual data stored in RDS tables, RDS does not automatically scale instance types on demand without customer action, and the customer — not AWS — chooses the database engine/type to use."
    },
    {
      id: "paper-10-046",
      domain: "ARC",
      topic: "decoupling",
      type: "single",
      question: "A company’s web application currently has light dependencies on underlying components so when one component fails the entire web application fails. Applying which AWS Cloud design principle will address the current design issue?",
      options: [
        "Implementing elasticity enabling the application to scale up or scale down as demand changes.",
        "Enabling several EC2 instances to run in parallel to achieve better performance.",
        "Focusing on decoupling components by isolating them and ensuring individual components can function when other components.",
        "Doubling EC2 computing resources to increase system fault tolerance."
      ],
      correctAnswer: [2],
      explanation: "The design issue described, where the failure of one component takes down the entire application, is addressed by decoupling: isolating components so that each can continue functioning even if another component fails. Implementing elasticity addresses scaling based on demand (not fault isolation), running instances in parallel improves performance rather than resilience to failure, and simply doubling compute resources increases capacity without removing the tight coupling that caused the outage."
    },
    {
      id: "paper-10-047",
      domain: "ARC",
      topic: "aws-partner-network",
      type: "single",
      question: "A customer would like to design and build a new workload on AWS Cloud but does not have the AWS-related software technical expertise in-house. Which of the following AWS programs can a customer take advantage of to achieve that outcome?",
      options: [
        "AWS Partner Network Technology Partners.",
        "AWS Marketplace.",
        "AWS Partner Network Consulting Partners.",
        "AWS Service Catalog."
      ],
      correctAnswer: [2],
      explanation: "AWS Partner Network Consulting Partners are professional services firms that help customers design, build, and manage workloads on AWS, which is ideal when in-house AWS technical expertise is lacking. AWS Partner Network Technology Partners provide software/tools rather than hands-on consulting, AWS Marketplace is a software catalog, and AWS Service Catalog helps manage catalogs of approved IT services internally rather than providing external expertise."
    },
    {
      id: "paper-10-048",
      domain: "S3",
      topic: "s3",
      type: "single",
      question: "Which service stores objects, provides real-time access to those objects, and offers versioning and lifecycle capabilities?",
      options: [
        "Amazon Glacier.",
        "AWS Storage Gateway.",
        "Amazon S3.",
        "Amazon EBS."
      ],
      correctAnswer: [2],
      explanation: "Amazon S3 is an object storage service that provides real-time access to stored objects along with built-in versioning (to preserve object history) and lifecycle policies (to automatically transition or expire objects). Amazon Glacier is for long-term archival with delayed retrieval, AWS Storage Gateway connects on-premises environments to AWS storage, and Amazon EBS is block storage attached to EC2 instances rather than an object store with versioning."
    },
    {
      id: "paper-10-049",
      domain: "ARC",
      topic: "design-for-failure",
      type: "single",
      question: "Distributing workloads across multiple Availability Zones supports which cloud architecture design principle?",
      options: [
        "Implement automation.",
        "Design for agility.",
        "Design for failure.",
        "Implement elasticity."
      ],
      correctAnswer: [2],
      explanation: "Distributing workloads across multiple Availability Zones supports the 'design for failure' principle, ensuring that if one Availability Zone experiences an outage, the application continues running in the others. Implementing automation and elasticity are about operational efficiency and dynamic capacity respectively, and designing for agility is about speed of iteration — neither is specifically about surviving infrastructure failure the way multi-AZ redundancy is."
    },
    {
      id: "paper-10-050",
      domain: "ACM",
      topic: "organizations",
      type: "single",
      question: "Which service should a customer use to consolidate and centrally manage multiple AWS accounts?",
      options: [
        "AWS IAM.",
        "AWS Organizations.",
        "AWS Schema Conversion Tool.",
        "AWS Config."
      ],
      correctAnswer: [1],
      explanation: "AWS Organizations lets a customer centrally manage and govern multiple AWS accounts, including consolidated billing, service control policies, and account creation. AWS IAM manages users and permissions within a single account, the AWS Schema Conversion Tool converts database schemas during migrations, and AWS Config tracks resource configuration changes — none manage multiple accounts centrally."
    }
  ]
});
