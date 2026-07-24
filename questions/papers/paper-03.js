/* ============================================================================
   PRACTICE PAPER TEMPLATE  —  copy this file to add a new 50-question paper.

   TO ADD A PAPER (2 steps):
     1. Copy this file to questions/papers/paper-02.js (etc.) and edit:
          - source / paperId : a unique id, e.g. "paper-02"
          - paperName        : the label shown in the quiz picker
          - questions        : your 50 question objects (see schema below)
        Give each question a unique id (e.g. "paper-02-001").
     2. Add a matching <script> line in aws-ccp-study-guide.html, next to the
        other question <script> tags:
          <script src="questions/papers/paper-02.js"></script>

   QUESTION SCHEMA (one object per question):
     {
       id: "paper-01-001",        // unique across the whole app
       domain: "CLD",             // a TOC chapter code (see DOMAINS in the HTML)
       topic: "cloud-concepts",   // specific service/sub-bullet, free-text
       type: "single",            // "single" or "multiple-select"
       question: "Question text?",
       options: ["A", "B", "C", "D"],
       correctAnswer: [0],        // ALWAYS an array of 0-based option indices
       explanation: "Why the correct answer is correct."
     }

   Questions carry their own `domain`, so in "Revision (mixed)" mode they pool
   with every other paper and can be filtered by domain. In "Practice paper"
   mode the whole paper runs on its own, in order.

   Registered onto window.QUESTION_FILES so it loads over file:// (no fetch).
   ============================================================================ */
window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "paper-03",
  paperId: "paper-03",
  paperName: "Practice Paper 3",
  questions: [
    {
      id: "paper-03-001",
      domain: "STG",
      topic: "storage-options",
      type: "multiple-select",
      question: "Where can you store files in AWS? (Choose TWO)",
      options: [
        "Amazon EFS",
        "Amazon SNS",
        "Amazon EBS",
        "Amazon ECS",
        "Amazon EMR"
      ],
      correctAnswer: [0, 2],
      explanation: "Amazon EFS (a shared file system) and Amazon EBS (block storage volumes for EC2) are both storage services where files/data live. SNS is a notification/pub-sub messaging service, ECS is a container orchestration service, and EMR is a big-data processing service (Hadoop/Spark) — none of these are storage services."
    },
    {
      id: "paper-03-002",
      domain: "INT",
      topic: "sqs",
      type: "single",
      question: "Which AWS service can be used to store and reliably deliver messages across distributed systems?",
      options: [
        "Amazon Simple Queue Service",
        "AWS Storage Gateway",
        "Amazon Simple Email Service",
        "Amazon Simple Storage Service"
      ],
      correctAnswer: [0],
      explanation: "Amazon Simple Queue Service (SQS) is a fully managed message queuing service that lets the components of a distributed system send, store, and reliably receive messages without losing them. SES sends emails, S3 is object storage, and Storage Gateway connects on-premises storage to AWS — none of these are messaging queues."
    },
    {
      id: "paper-03-003",
      domain: "ACM",
      topic: "pricing-models",
      type: "single",
      question: "Which of the following describes the payment model that AWS makes available for customers that can commit to using Amazon EC2 over a one or 3-year term to reduce their total computing costs?",
      options: [
        "Pay less as AWS grows",
        "Pay as you go",
        "Pay less by using more",
        "Save when you reserve"
      ],
      correctAnswer: [3],
      explanation: "'Save when you reserve' describes the Reserved model, where committing to a 1- or 3-year term (e.g. Reserved Instances or Savings Plans) gives a large discount over On-Demand. 'Pay as you go' means paying only for what you use with no commitment, and 'Pay less by using more' refers to volume-based tiered discounts — neither requires a 1- or 3-year term."
    },
    {
      id: "paper-03-004",
      domain: "ACM",
      topic: "cost-management",
      type: "single",
      question: "A company is migrating its on-premises database to Amazon RDS. What should the company do to ensure Amazon RDS costs are kept to a minimum?",
      options: [
        "Right-size before and after migration",
        "Use a Multi-Region Active-Passive architecture",
        "Combine On-demand Capacity Reservations with Saving Plans",
        "Use a Multi-Region Active-Active architecture"
      ],
      correctAnswer: [0],
      explanation: "Right-sizing means matching your instance/database size to the actual workload, both before migrating and again after monitoring real usage — this avoids paying for over-provisioned capacity and is the core cost-optimization practice. Multi-Region Active-Active or Active-Passive architectures increase cost and are about availability/disaster recovery, not saving money, and combining Capacity Reservations with Savings Plans doesn't address sizing the database correctly."
    },
    {
      id: "paper-03-005",
      domain: "STG",
      topic: "ebs",
      type: "single",
      question: "What is the primary storage service used by Amazon RDS database instances?",
      options: [
        "Amazon Glacier",
        "Amazon EBS",
        "Amazon EFS",
        "Amazon S3"
      ],
      correctAnswer: [1],
      explanation: "Amazon RDS runs on Amazon EBS (Elastic Block Store) volumes, which provide the persistent block storage that database instances need for fast, low-latency read/write access. Glacier and S3 are for object/archive storage (not live databases), and EFS is a shared file system not used as the primary RDS storage."
    },
    {
      id: "paper-03-006",
      domain: "MON",
      topic: "x-ray",
      type: "single",
      question: "A company is developing a new application using a microservices framework. The new application is having performance and latency issues. Which AWS Service should be used to troubleshoot these issues?",
      options: [
        "AWS CodePipeline",
        "AWS X-Ray",
        "Amazon Inspector",
        "AWS CloudTrail"
      ],
      correctAnswer: [1],
      explanation: "AWS X-Ray helps you analyze and debug distributed applications, such as those built with microservices, by tracing requests as they travel through the system so you can pinpoint performance bottlenecks and latency. CodePipeline is for CI/CD deployment, Amazon Inspector checks for security vulnerabilities, and CloudTrail logs API activity for auditing — none trace application performance."
    },
    {
      id: "paper-03-007",
      domain: "GLB",
      topic: "availability-zones",
      type: "multiple-select",
      question: "Which of the following AWS services is designed with native Multi-AZ fault tolerance in mind? (Choose TWO)",
      options: [
        "Amazon Redshift",
        "AWS Snowball",
        "Amazon Simple Storage Service",
        "Amazon EBS",
        "Amazon DynamoDB"
      ],
      correctAnswer: [2, 4],
      explanation: "Amazon S3 and Amazon DynamoDB automatically store your data redundantly across multiple Availability Zones by default, giving them built-in Multi-AZ fault tolerance. Redshift and EBS are tied to a single AZ (Redshift clusters and EBS volumes live in one AZ), and Snowball is a physical data-transfer device, not a Multi-AZ service."
    },
    {
      id: "paper-03-008",
      domain: "DBA",
      topic: "rds",
      type: "multiple-select",
      question: "What are the Amazon RDS features that can be used to improve the availability of your database? (Choose TWO)",
      options: [
        "AWS Regions",
        "Multi-AZ Deployment",
        "Automatic patching",
        "Read Replicas",
        "Edge Locations"
      ],
      correctAnswer: [1, 3],
      explanation: "Multi-AZ Deployment keeps a standby copy of your database in another Availability Zone and automatically fails over if the primary fails, and Read Replicas offload read traffic and can be promoted if needed — both improve availability. Automatic patching is a maintenance/management feature (not availability), and AWS Regions and Edge Locations are infrastructure concepts, not RDS availability features you configure."
    },
    {
      id: "paper-03-009",
      domain: "GLB",
      topic: "cloudfront",
      type: "single",
      question: "Sarah has deployed an application in the Northern California (us-west-1) region. After examining the application's traffic, she notices that about 30% of the traffic is coming from Asia. What can she do to reduce latency for the users in Asia?",
      options: [
        "Replicate the current resources across multiple Availability Zones within the same region.",
        "Migrate the application to a hosting provider in Asia.",
        "Recreate the website content.",
        "Create a CDN using CloudFront, so that content is cached at Edge Locations close to and in Asia."
      ],
      correctAnswer: [3],
      explanation: "Amazon CloudFront is AWS's Content Delivery Network (CDN). It caches content at Edge Locations around the world (including in Asia), so users are served from a location physically close to them, reducing latency. Replicating across AZs in us-west-1 keeps everything in California, migrating away from AWS is unnecessary, and recreating content does nothing for latency."
    },
    {
      id: "paper-03-010",
      domain: "IAM",
      topic: "iam",
      type: "single",
      question: "An organization runs many systems and uses many AWS products. Which of the following services enables them to control how each developer interacts with these products?",
      options: [
        "AWS Identity and Access Management.",
        "Amazon RDS.",
        "Network Access Control Lists.",
        "Amazon EMR."
      ],
      correctAnswer: [0],
      explanation: "AWS Identity and Access Management (IAM) lets you create users, groups, and roles and attach policies that control exactly which AWS services and actions each developer can access. RDS is a database service, EMR is big-data processing, and Network ACLs only filter network traffic at the subnet level — none manage user permissions."
    },
    {
      id: "paper-03-011",
      domain: "CLD",
      topic: "cloud-models",
      type: "single",
      question: "Using Amazon EC2 falls under which of the following cloud computing models?",
      options: [
        "IaaS & SaaS.",
        "IaaS.",
        "SaaS.",
        "PaaS."
      ],
      correctAnswer: [1],
      explanation: "Amazon EC2 provides virtual servers where you manage the OS, applications, and configuration, while AWS manages the underlying hardware — this is Infrastructure as a Service (IaaS). SaaS delivers ready-to-use software (e.g. an email app), and PaaS provides a managed platform to deploy code (e.g. Elastic Beanstalk); EC2 is not either of these."
    },
    {
      id: "paper-03-012",
      domain: "ARC",
      topic: "well-architected",
      type: "single",
      question: "Which of the below is a best-practice when building applications on AWS?",
      options: [
        "Strengthen physical security by applying the principle of least privilege.",
        "Ensure that the application runs on hardware from trusted vendors.",
        "Use IAM policies to maintain performance.",
        "Decouple the components of the application so that they run independently."
      ],
      correctAnswer: [3],
      explanation: "Decoupling components so they run independently is an AWS best practice: if one component fails or needs to scale, it doesn't bring down the others, making the application more resilient and scalable (often using services like SQS or load balancers). The other options misapply security or hardware concepts — least privilege is about permissions (not physical security), IAM policies control access (not performance), and choosing 'trusted hardware' isn't something you do on AWS."
    },
    {
      id: "paper-03-013",
      domain: "S3",
      topic: "s3",
      type: "single",
      question: "Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?",
      options: [
        "Amazon EBS.",
        "Amazon SQS.",
        "Amazon Instance store.",
        "Amazon S3."
      ],
      correctAnswer: [3],
      explanation: "Amazon S3 is object storage designed to store and retrieve any amount of unstructured data such as photos and videos, with high durability and virtually unlimited capacity. EBS and Instance Store are block storage attached to a single EC2 instance (not ideal for shared media at scale), and SQS is a message queue, not storage."
    },
    {
      id: "paper-03-014",
      domain: "S3",
      topic: "storage-classes",
      type: "multiple-select",
      question: "Amazon Glacier is an Amazon S3 storage class that is suitable for storing […] & […]. (Choose TWO)",
      options: [
        "Active archives.",
        "Dynamic websites' assets.",
        "Long-term analytic data.",
        "Active databases.",
        "Cached data."
      ],
      correctAnswer: [0, 2],
      explanation: "Amazon S3 Glacier is a low-cost archive storage class meant for data you rarely access but must retain, such as active archives and long-term analytic data. It is NOT for frequently-accessed content like a dynamic website's assets, an active database, or cached data — those need low-latency storage, whereas Glacier trades fast retrieval for very low cost."
    },
    {
      id: "paper-03-015",
      domain: "DEP",
      topic: "elastic-beanstalk",
      type: "single",
      question: "What does Amazon Elastic Beanstalk provide?",
      options: [
        "A PaaS solution to automate application deployment.",
        "A compute engine for Amazon ECS.",
        "A scalable file storage solution for use with AWS and on-premises servers.",
        "A NoSQL database service."
      ],
      correctAnswer: [0],
      explanation: "AWS Elastic Beanstalk is a Platform as a Service (PaaS) that automatically handles the deployment details — capacity provisioning, load balancing, scaling, and health monitoring — so you just upload your application code. It is not a container engine for ECS, not a file storage solution (that's EFS), and not a NoSQL database (that's DynamoDB)."
    },
    {
      id: "paper-03-016",
      domain: "SEC",
      topic: "inspector",
      type: "single",
      question: "What is the AWS service that performs automated network assessments of Amazon EC2 instances to check for vulnerabilities?",
      options: [
        "Amazon Kinesis.",
        "Security groups.",
        "Amazon Inspector.",
        "AWS Network Access Control Lists."
      ],
      correctAnswer: [2],
      explanation: "Amazon Inspector is an automated security assessment service that scans EC2 instances (and container images) for software vulnerabilities and unintended network exposure. Amazon Kinesis processes streaming data, while Security Groups and Network ACLs are firewalls that filter traffic — they enforce rules but do not scan for vulnerabilities."
    },
    {
      id: "paper-03-017",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "multiple-select",
      question: "Under the Shared Responsibility Model, which of the following controls do customers fully inherit from AWS? (Choose TWO)",
      options: [
        "Patch management controls.",
        "Database controls.",
        "Awareness & Training.",
        "Environmental controls.",
        "Physical controls."
      ],
      correctAnswer: [3, 4],
      explanation: "Under the Shared Responsibility Model, AWS is fully responsible for the security 'of' the cloud — the physical data centers and their infrastructure — so customers fully inherit Physical controls and Environmental controls (fire suppression, power, climate). Patch management and Awareness & Training are shared controls, and Database controls fall to the customer when they configure the database — none of these are fully inherited from AWS."
    },
    {
      id: "paper-03-018",
      domain: "ACM",
      topic: "pricing-models",
      type: "single",
      question: "A company needs to host a database in Amazon RDS for at least three years. Which of the following options would be the most cost-effective solution?",
      options: [
        "Reserved instances - No Upfront.",
        "Reserved instances - Partial Upfront.",
        "On-Demand instances.",
        "Spot Instances."
      ],
      correctAnswer: [1],
      explanation: "For a database needed for a fixed long term (3 years) that must always be available, Reserved Instances give the biggest discount over On-Demand, and 'Partial Upfront' balances a strong discount with a smaller initial payment. On-Demand costs more for steady long-term use, and Spot Instances can be interrupted at any time so they're unsuitable for an always-on database."
    },
    {
      id: "paper-03-019",
      domain: "CLD",
      topic: "cloud-benefits",
      type: "single",
      question: "Your application has recently experienced significant global growth, and international users are complaining of high latency. What is the AWS characteristic that can help improve your international users' experience?",
      options: [
        "Elasticity.",
        "Global reach.",
        "Data durability.",
        "High availability."
      ],
      correctAnswer: [1],
      explanation: "'Global reach' is the AWS characteristic of having infrastructure (Regions and Edge Locations) around the world, letting you serve users close to them and lower latency for a global audience. Elasticity is about scaling capacity up/down with demand, high availability is about staying up during failures, and data durability is about not losing data — none of these directly address international latency."
    },
    {
      id: "paper-03-020",
      domain: "ACM",
      topic: "savings-plans",
      type: "multiple-select",
      question: "Savings Plans are available for which of the following AWS compute services? (Choose TWO)",
      options: [
        "AWS Batch.",
        "AWS Outposts.",
        "Amazon Lightsail.",
        "Amazon EC2.",
        "AWS Lambda."
      ],
      correctAnswer: [3, 4],
      explanation: "Savings Plans are flexible pricing commitments that apply to Amazon EC2 and AWS Lambda (as well as Fargate), giving discounts in exchange for a 1- or 3-year usage commitment. Savings Plans do not cover AWS Batch (which just runs on EC2/Fargate underneath), AWS Outposts, or Amazon Lightsail (which has its own bundled pricing)."
    },
    {
      id: "paper-03-021",
      domain: "GLB",
      topic: "disaster-recovery",
      type: "single",
      question: "A company has business critical workloads hosted on AWS and they are unwilling to accept any downtime. Which of the following is a recommended best practice to protect their workloads in the event of an unexpected natural disaster?",
      options: [
        "Replicate data across multiple Edge Locations worldwide and use Amazon CloudFront to perform automatic failover in the event of an outage.",
        "Deploy AWS resources across multiple Availability Zones within the same AWS Region.",
        "Create point-in-time backups in another subnet and recover this data when a disaster occurs.",
        "Deploy AWS resources to another AWS Region and implement an Active-Active disaster recovery strategy."
      ],
      correctAnswer: [3],
      explanation: "To protect against a whole-Region disaster and accept no downtime, you deploy to a second AWS Region with an Active-Active strategy, so both Regions serve traffic and one can take over instantly. Multiple AZs protect against a single data-center/AZ failure but not a full Region outage, Edge Locations/CloudFront only cache content (not failover for workloads), and point-in-time backups in another subnet stay in the same Region and involve recovery time (downtime)."
    },
    {
      id: "paper-03-022",
      domain: "ACM",
      topic: "service-quotas",
      type: "multiple-select",
      question: "Which statement is correct with regards to AWS service limits? (Choose TWO)",
      options: [
        "You can contact AWS support to increase the service limits.",
        "Each IAM user has the same service limit.",
        "There are no service limits on AWS.",
        "You can use the AWS Trusted Advisor to monitor your service limits.",
        "The Amazon Simple Email Service is responsible for sending email notifications when usage approaches a service limit."
      ],
      correctAnswer: [0, 3],
      explanation: "AWS sets default service limits (quotas) per account, and you can request an increase by contacting AWS Support, while AWS Trusted Advisor has checks that monitor your usage against those limits. It's false that there are no service limits, that every IAM user has the same limit (limits are per account, not per user), or that SES is responsible for limit notifications."
    },
    {
      id: "paper-03-023",
      domain: "IAM",
      topic: "cli",
      type: "single",
      question: "What is the AWS tool that enables you to use scripts to manage all AWS services and resources?",
      options: [
        "AWS Console.",
        "AWS Service Catalog.",
        "AWS OpsWorks.",
        "AWS CLI."
      ],
      correctAnswer: [3],
      explanation: "The AWS Command Line Interface (CLI) lets you manage all AWS services and resources by typing commands or running scripts, making it ideal for automation. The AWS Console is the point-and-click web interface (not scripting), Service Catalog manages approved product catalogs, and OpsWorks is a configuration-management service using Chef/Puppet."
    },
    {
      id: "paper-03-024",
      domain: "VPC",
      topic: "direct-connect",
      type: "multiple-select",
      question: "What are the connectivity options that can be used to build hybrid cloud architectures? (Choose TWO)",
      options: [
        "AWS Artifact.",
        "AWS Cloud9.",
        "AWS Direct Connect.",
        "AWS CloudTrail.",
        "AWS VPN."
      ],
      correctAnswer: [2, 4],
      explanation: "Hybrid architectures connect on-premises infrastructure to AWS. AWS Direct Connect provides a dedicated private network line, and AWS VPN provides an encrypted connection over the internet — both link your data center to AWS. AWS Artifact provides compliance reports, Cloud9 is a cloud IDE, and CloudTrail logs API activity — none provide network connectivity."
    },
    {
      id: "paper-03-025",
      domain: "ELB",
      topic: "elastic-load-balancing",
      type: "single",
      question: "A company has deployed a new web application on multiple Amazon EC2 instances. Which of the following should they use to ensure that the incoming HTTP traffic is distributed evenly across the instances?",
      options: [
        "AWS EC2 Auto Recovery.",
        "AWS Auto Scaling.",
        "AWS Network Load Balancer.",
        "AWS Application Load Balancer."
      ],
      correctAnswer: [3],
      explanation: "An Application Load Balancer (ALB) operates at Layer 7 and is designed to distribute HTTP/HTTPS web traffic evenly across multiple EC2 instances. A Network Load Balancer works at Layer 4 (TCP) for extreme performance rather than HTTP routing, Auto Scaling adds/removes instances (it doesn't distribute traffic), and EC2 Auto Recovery just recovers a failed instance."
    },
    {
      id: "paper-03-026",
      domain: "DBA",
      topic: "aurora",
      type: "single",
      question: "Which of the following AWS offerings is a MySQL-compatible relational database service that can scale capacity automatically based on demand?",
      options: [
        "Amazon Neptune.",
        "Amazon Aurora.",
        "Amazon RDS for SQL Server.",
        "Amazon RDS for PostgreSQL."
      ],
      correctAnswer: [1],
      explanation: "Amazon Aurora is AWS's cloud-native relational database that is MySQL- and PostgreSQL-compatible, and with Aurora Serverless it can automatically scale capacity up and down based on demand. Neptune is a graph database, and RDS for SQL Server / RDS for PostgreSQL are not MySQL-compatible."
    },
    {
      id: "paper-03-027",
      domain: "SEC",
      topic: "ddos",
      type: "multiple-select",
      question: "Which of the following can help protect your EC2 instances from DDoS attacks? (Choose TWO)",
      options: [
        "AWS CloudHSM.",
        "Security Groups.",
        "AWS Batch.",
        "AWS IAM.",
        "Network Access Control Lists (Network ACLs)."
      ],
      correctAnswer: [1, 4],
      explanation: "Security Groups (a firewall at the instance level) and Network ACLs (a firewall at the subnet level) both filter incoming traffic, so they can help block or limit the malicious traffic in a DDoS attack. CloudHSM manages encryption keys, IAM manages user permissions, and AWS Batch runs batch computing jobs — none of these filter network traffic. (Note: AWS Shield is the dedicated DDoS-protection service, but it isn't listed here.)"
    },
    {
      id: "paper-03-028",
      domain: "DBA",
      topic: "redshift",
      type: "single",
      question: "What is the AWS data warehouse service that supports a high level of query performance on large amounts of datasets?",
      options: [
        "Amazon Redshift.",
        "Amazon Kinesis.",
        "Amazon DynamoDB.",
        "Amazon RDS."
      ],
      correctAnswer: [0],
      explanation: "Amazon Redshift is AWS's fully managed data warehouse, built to run fast analytical queries across very large datasets (petabytes). Kinesis handles real-time streaming data, DynamoDB is a NoSQL key-value database for fast lookups, and RDS is a transactional relational database — none are optimized as a data warehouse."
    },
    {
      id: "paper-03-029",
      domain: "ACM",
      topic: "tco",
      type: "single",
      question: "Which of the following should be considered when performing a TCO analysis to compare the costs of running an application on AWS instead of on-premises?",
      options: [
        "Application development.",
        "Market research.",
        "Business analysis.",
        "Physical hardware."
      ],
      correctAnswer: [3],
      explanation: "Total Cost of Ownership (TCO) compares the full cost of on-premises vs. AWS, so you must include the physical hardware (servers, storage, networking gear) you'd otherwise buy and maintain — a cost AWS removes. Application development, market research, and business analysis are business costs that exist regardless of where you host, so they don't factor into an infrastructure TCO comparison."
    },
    {
      id: "paper-03-030",
      domain: "ACM",
      topic: "pricing-models",
      type: "single",
      question: "How are AWS customers billed for Linux-based Amazon EC2 usage?",
      options: [
        "EC2 instances will be billed on one second increments, with a minimum of one minute.",
        "EC2 instances will be billed on one hour increments, with a minimum of one day.",
        "EC2 instances will be billed on one minute increments, with a minimum of one hour.",
        "EC2 instances will be billed on one day increments, with a minimum of one month."
      ],
      correctAnswer: [0],
      explanation: "Linux-based EC2 instances are billed per second, with a minimum of 60 seconds (one minute). This fine-grained billing means you only pay for the compute time you actually use. The other options (hourly, per-day, or per-minute-with-one-hour-minimum billing) are incorrect."
    },
    {
      id: "paper-03-031",
      domain: "ACM",
      topic: "pricing-models",
      type: "multiple-select",
      question: "Which of the following will impact the price paid for an EC2 instance? (Choose TWO)",
      options: [
        "Instance type.",
        "The Availability Zone where the instance is provisioned.",
        "Load balancing.",
        "Number of buckets.",
        "Number of private IPs."
      ],
      correctAnswer: [0, 1],
      explanation: "EC2 pricing depends on the instance type (size and family determine the rate) and the Availability Zone/Region where it runs (prices vary by location). Load balancing is billed separately as its own service, and the number of S3 buckets or private IP addresses does not affect the EC2 instance price."
    },
    {
      id: "paper-03-032",
      domain: "EC2",
      topic: "ami",
      type: "single",
      question: "A customer spent a lot of time configuring a newly deployed Amazon EC2 instance. After the workload increases, the customer decides to provision another EC2 instance with an identical configuration. How can the customer achieve this?",
      options: [
        "By creating an AWS Config template from the old instance and launching a new instance from it.",
        "By creating an EBS Snapshot of the old instance.",
        "By installing Aurora on EC2 and launching a new instance from it.",
        "By creating an AMI from the old instance and launching a new instance from it."
      ],
      correctAnswer: [3],
      explanation: "An Amazon Machine Image (AMI) is a template that captures an instance's OS, configuration, and installed software, so launching a new instance from that AMI reproduces the exact configuration. AWS Config records resource configurations for auditing (it doesn't create instance templates), an EBS Snapshot only backs up a disk volume (not the full launchable image), and Aurora is a database (irrelevant here)."
    },
    {
      id: "paper-03-033",
      domain: "ACM",
      topic: "scp",
      type: "single",
      question: "A company uses AWS Organizations to manage all of its AWS accounts. Which of the following allows the company to restrict what services and actions are allowed in each individual account?",
      options: [
        "IAM Principals.",
        "AWS Service Control Policies (SCPs).",
        "IAM policies.",
        "AWS Fargate."
      ],
      correctAnswer: [1],
      explanation: "AWS Service Control Policies (SCPs) are used with AWS Organizations to set guardrails that limit which services and actions member accounts are allowed to use, no matter what their own IAM policies say. IAM policies and IAM principals grant permissions within a single account (not across accounts in an org), and AWS Fargate is a serverless container compute engine — unrelated to account-level restrictions."
    },
    {
      id: "paper-03-034",
      domain: "CLD",
      topic: "cloud-benefits",
      type: "single",
      question: "Which of the following statements describes the AWS Cloud's agility?",
      options: [
        "AWS allows you to host your applications in multiple regions around the world.",
        "AWS provides customizable hardware at the lowest possible cost.",
        "AWS allows you to provision resources in minutes.",
        "AWS allows you to pay upfront to reduce costs."
      ],
      correctAnswer: [2],
      explanation: "Agility on AWS means you can provision resources in minutes instead of the weeks or months it takes to buy and set up physical hardware, letting you experiment and respond quickly. Hosting in multiple regions is 'global reach,' paying upfront to reduce costs is a pricing option, and providing customizable hardware isn't what agility means."
    },
    {
      id: "paper-03-035",
      domain: "DBA",
      topic: "rds",
      type: "multiple-select",
      question: "What are the benefits of using the Amazon Relational Database Service? (Choose TWO)",
      options: [
        "Lower administrative burden.",
        "Complete control over the underlying host.",
        "Resizable compute capacity.",
        "Scales automatically to larger or smaller instance types.",
        "Supports the document and key-value data structure."
      ],
      correctAnswer: [0, 2],
      explanation: "Amazon RDS is a managed service, so AWS handles undifferentiated tasks like provisioning, patching, and backups — giving a lower administrative burden — and it offers resizable compute capacity so you can scale the instance as needed. RDS does NOT give you complete control over the underlying host (AWS manages it), it doesn't automatically change instance types on its own, and document/key-value structures are the domain of DynamoDB, not RDS."
    },
    {
      id: "paper-03-036",
      domain: "VPC",
      topic: "vpn",
      type: "single",
      question: "What is the connectivity option that uses Internet Protocol Security (IPSec) to establish encrypted connectivity between an on-premises network and the AWS Cloud?",
      options: [
        "Internet Gateway.",
        "AWS IQ.",
        "AWS Direct Connect.",
        "AWS Site-to-Site VPN."
      ],
      correctAnswer: [3],
      explanation: "AWS Site-to-Site VPN creates an encrypted tunnel using IPSec over the public internet to connect an on-premises network to the AWS Cloud. AWS Direct Connect is a dedicated private line but is not encrypted by IPSec on its own, an Internet Gateway just gives a VPC internet access, and AWS IQ is a marketplace for hiring AWS experts."
    },
    {
      id: "paper-03-037",
      domain: "ACM",
      topic: "support",
      type: "single",
      question: "What is the minimum level of AWS support that provides 24x7 access to technical support engineers via phone and chat?",
      options: [
        "Enterprise Support.",
        "Developer Support.",
        "Basic Support.",
        "Business Support."
      ],
      correctAnswer: [3],
      explanation: "AWS Business Support is the lowest tier that includes 24x7 access to technical support engineers via phone, chat, and email. Basic Support has no technical support (only docs and forums), Developer Support offers business-hours email access to support but not 24x7 phone/chat, and Enterprise adds more (like a TAM) but is above the minimum needed."
    },
    {
      id: "paper-03-038",
      domain: "VPC",
      topic: "security-groups",
      type: "multiple-select",
      question: "Which of the following is used to control network traffic in AWS? (Choose TWO)",
      options: [
        "Network Access Control Lists (NACLs).",
        "Key Pairs.",
        "Access Keys.",
        "IAM Policies.",
        "Security Groups."
      ],
      correctAnswer: [0, 4],
      explanation: "Network ACLs (subnet-level firewalls) and Security Groups (instance-level firewalls) are the two AWS features that control network traffic by allowing or denying it. Key Pairs are used for secure login (SSH) to instances, Access Keys authenticate API/CLI calls, and IAM Policies define permissions — none of these filter network traffic."
    },
    {
      id: "paper-03-039",
      domain: "ACM",
      topic: "pricing-models",
      type: "single",
      question: "A company has developed a media transcoding application in AWS. The application is designed to recover quickly from hardware failures. Which one of the following types of instance would be the most cost-effective choice to use?",
      options: [
        "Reserved instances.",
        "Spot Instances.",
        "On-Demand instances.",
        "Dedicated instances."
      ],
      correctAnswer: [1],
      explanation: "Spot Instances offer the deepest discount (up to ~90% off On-Demand) but AWS can reclaim them with little notice, so they suit workloads that tolerate interruption — like a transcoding app designed to recover quickly from failures. Reserved and Dedicated instances cost more and imply steady/long-term use, and On-Demand is more expensive than Spot for this fault-tolerant workload."
    },
    {
      id: "paper-03-040",
      domain: "MON",
      topic: "health-dashboard",
      type: "single",
      question: "Which AWS Service provides the current status of all AWS Services in all AWS Regions?",
      options: [
        "AWS Service Health Dashboard.",
        "AWS Management Console.",
        "Amazon CloudWatch.",
        "AWS Personal Health Dashboard."
      ],
      correctAnswer: [0],
      explanation: "The AWS Service Health Dashboard shows the current status and health of all AWS services across all Regions — the public, general view. The Personal Health Dashboard shows events affecting only your own resources, the Management Console is the web interface for using AWS, and CloudWatch monitors your own metrics/alarms, not overall AWS service status."
    },
    {
      id: "paper-03-041",
      domain: "IAM",
      topic: "sdk",
      type: "single",
      question: "Which AWS service or feature can be used to call AWS Services from different programming languages?",
      options: [
        "AWS Software Development Kit.",
        "AWS Command Line Interface.",
        "AWS CodeDeploy.",
        "AWS Management Console."
      ],
      correctAnswer: [0],
      explanation: "The AWS Software Development Kit (SDK) provides libraries that let you call AWS services from within your code in many programming languages (Python, Java, JavaScript, etc.). The CLI is for command-line/scripts, CodeDeploy automates deployments, and the Management Console is the web UI — none of these are language-specific programming libraries."
    },
    {
      id: "paper-03-042",
      domain: "GLB",
      topic: "route-53",
      type: "single",
      question: "Which AWS Service can be used to register a new domain name?",
      options: [
        "Amazon Personalize.",
        "Amazon Route 53.",
        "AWS KMS.",
        "AWS Config."
      ],
      correctAnswer: [1],
      explanation: "Amazon Route 53 is AWS's DNS service, and it can also register new domain names for you as well as route traffic to your resources. Amazon Personalize provides ML-based recommendations, AWS KMS manages encryption keys, and AWS Config tracks resource configurations — none register domains."
    },
    {
      id: "paper-03-043",
      domain: "DEP",
      topic: "cloudformation",
      type: "multiple-select",
      question: "App development companies move their business to AWS to reduce time-to-market and improve customer satisfaction, what are the AWS automation tools that help them deploy their applications faster? (Choose TWO)",
      options: [
        "AWS CloudFormation.",
        "AWS Migration Hub.",
        "AWS IAM.",
        "AWS Elastic Beanstalk.",
        "Amazon Macie."
      ],
      correctAnswer: [0, 3],
      explanation: "AWS CloudFormation lets you define infrastructure as code and deploy resources automatically from a template, and AWS Elastic Beanstalk automatically deploys and manages your application code — both speed up deployment. Migration Hub tracks migrations, IAM manages access, and Amazon Macie discovers sensitive data — none are application deployment automation tools."
    },
    {
      id: "paper-03-044",
      domain: "ACM",
      topic: "trusted-advisor",
      type: "single",
      question: "Which AWS service provides cost-optimization recommendations?",
      options: [
        "AWS Trusted Advisor.",
        "AWS Pricing Calculator.",
        "Amazon QuickSight.",
        "AWS X-Ray."
      ],
      correctAnswer: [0],
      explanation: "AWS Trusted Advisor inspects your environment and gives recommendations across several categories, including cost optimization (e.g. idle or underutilized resources you could downsize or stop). The Pricing Calculator estimates future costs, QuickSight is a business-intelligence dashboard tool, and X-Ray traces application performance — none provide cost-optimization recommendations."
    },
    {
      id: "paper-03-045",
      domain: "VPC",
      topic: "transit-gateway",
      type: "single",
      question: "A company has hundreds of VPCs in multiple AWS Regions worldwide. What service does AWS offer to simplify the connection management among the VPCs?",
      options: [
        "VPC Peering.",
        "AWS Transit Gateway.",
        "Amazon Connect.",
        "Security Groups."
      ],
      correctAnswer: [1],
      explanation: "AWS Transit Gateway acts as a central hub that connects many VPCs (and on-premises networks) together, greatly simplifying connection management at scale. VPC Peering only links VPCs one-to-one, which becomes unmanageable with hundreds of VPCs; Amazon Connect is a cloud contact-center service; and Security Groups are instance firewalls — neither simplifies VPC interconnection."
    },
    {
      id: "paper-03-046",
      domain: "ACM",
      topic: "pricing-models",
      type: "multiple-select",
      question: "What is one benefit and one drawback of buying a reserved EC2 instance? (Select TWO)",
      options: [
        "Instances can be shut down by AWS at any time with no notification.",
        "Reserved instances require at least a one-year pricing commitment.",
        "There is no additional charge for using dedicated instances.",
        "Reserved instances provide a significant discount compared to on-demand instances.",
        "Reserved instances are best suited for periodic workloads."
      ],
      correctAnswer: [1, 3],
      explanation: "The benefit of a Reserved Instance is a significant discount versus On-Demand, and the drawback is that it requires a commitment of at least one year. It's false that AWS shuts them down without notice (that describes Spot), that dedicated instances are free, or that they suit periodic/intermittent workloads (a commitment fits steady, predictable usage — periodic workloads are better on On-Demand or Spot)."
    },
    {
      id: "paper-03-047",
      domain: "GLB",
      topic: "availability-zones",
      type: "single",
      question: "Why does every AWS Region contain multiple Availability Zones?",
      options: [
        "Multiple Availability Zones allows you to build resilient and highly available architectures.",
        "Multiple Availability Zones results in lower total cost compared to deploying in a single Availability Zone.",
        "Multiple Availability Zones allows for data replication and global reach.",
        "Multiple Availability Zones within a region increases the storage capacity available in that region."
      ],
      correctAnswer: [0],
      explanation: "Availability Zones are physically separate data centers within a Region, so deploying across multiple AZs lets you build resilient, highly available architectures that survive the failure of a single data center. Using multiple AZs doesn't lower cost, isn't primarily about global reach (that's multiple Regions), and doesn't increase raw storage capacity."
    },
    {
      id: "paper-03-048",
      domain: "ACM",
      topic: "pricing-models",
      type: "single",
      question: "What is the most cost-effective purchasing option for running a set of EC2 instances that must always be available for a period of two months?",
      options: [
        "On-Demand Instances.",
        "Spot Instances.",
        "Reserved Instances - All Upfront.",
        "Reserved Instances - No Upfront."
      ],
      correctAnswer: [0],
      explanation: "For instances needed only for a short, fixed period like two months, On-Demand is the most cost-effective because you pay only for what you use with no long-term commitment. Reserved Instances require a 1- or 3-year commitment (wasteful for two months), and Spot Instances can be interrupted at any time, so they don't guarantee the 'always available' requirement."
    },
    {
      id: "paper-03-049",
      domain: "GLB",
      topic: "availability-zones",
      type: "single",
      question: "Which of the following is a benefit of running an application in multiple Availability Zones?",
      options: [
        "Allows you to exceed AWS service limits.",
        "Reduces application response time between servers and global users.",
        "Increases available compute capacity.",
        "Increases the availability of your application."
      ],
      correctAnswer: [3],
      explanation: "Running an application across multiple Availability Zones increases availability: if one AZ (data center) fails, the application keeps running in the others. It doesn't let you exceed service limits or add compute capacity by itself, and reducing latency for global users is achieved with multiple Regions or CloudFront edge caching — not multiple AZs."
    },
    {
      id: "paper-03-050",
      domain: "SEC",
      topic: "data-security",
      type: "single",
      question: "Data security is one of the top priorities of AWS. How does AWS deal with old storage devices that have reached the end of their useful life?",
      options: [
        "AWS sells the old devices to other hosting providers.",
        "AWS destroys the old devices in accordance with industry-standard practices.",
        "AWS sends the old devices for remanufacturing.",
        "AWS stores the old devices in a secure place."
      ],
      correctAnswer: [1],
      explanation: "AWS destroys old storage devices that reach end of life using industry-standard techniques (such as those in NIST 800-88) so that no customer data can be recovered — a decommissioned device is never released back into circulation. AWS does not sell, remanufacture, or simply store the old devices, as any of those would risk exposing customer data."
    }
  ]
});