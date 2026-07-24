window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "paper-11",
  paperId: "paper-11",
  paperName: "Practice Paper 11",
  questions: [
    {
      id: "paper-11-001",
      domain: "ACM",
      topic: "tco",
      type: "single",
      question: "How can a company reduce its Total Cost of Ownership (TCO) using AWS?",
      options: [
        "By minimizing large capital expenditures.",
        "By having no responsibility for third-party license costs.",
        "By having no operational expenditures.",
        "By having AWS manage applications."
      ],
      correctAnswer: [0],
      explanation: "Migrating to AWS reduces Total Cost of Ownership primarily by eliminating large upfront capital expenditures on data centers and hardware, replacing them with variable, pay-as-you-go operational costs. AWS does not eliminate operational expenditures entirely, third-party software license costs still remain the customer's responsibility, and AWS managing applications on a customer's behalf is not a general TCO factor."
    },
    {
      id: "paper-11-002",
      domain: "ACM",
      topic: "support-resources",
      type: "multiple-select",
      question: "Which options does AWS make available for customers who want to learn about security in the cloud in an instructor-led setting? (Select TWO)",
      options: [
        "AWS Trusted Advisor.",
        "AWS Online Tech Talks.",
        "AWS Blog.",
        "AWS Forums.",
        "AWS Classroom Training."
      ],
      correctAnswer: [1, 4],
      explanation: "AWS Online Tech Talks and AWS Classroom Training are the options that provide instructor-led learning about security topics, delivered live by AWS experts or trainers. AWS Trusted Advisor is an account-optimization tool, and the AWS Blog and AWS Forums are self-service, non-instructor-led resources."
    },
    {
      id: "paper-11-003",
      domain: "IAM",
      topic: "mfa",
      type: "multiple-select",
      question: "Which of the following will enhance the security of access to the AWS Management Console’? (Select TWO)",
      options: [
        "AWS Secrets Manager.",
        "AWS Certificate Manager.",
        "AWS Multi-Factor Authentication (AWS MFA).",
        "Security groups.",
        "Password policies."
      ],
      correctAnswer: [2, 4],
      explanation: "Enabling AWS Multi-Factor Authentication (MFA) and enforcing strong password policies both directly strengthen the security of logins to the AWS Management Console by adding an extra verification step and requiring robust passwords. AWS Secrets Manager stores application secrets, AWS Certificate Manager manages SSL/TLS certificates, and security groups control network traffic to instances — none of these secure console logins."
    },
    {
      id: "paper-11-004",
      domain: "VPC",
      topic: "vpc",
      type: "multiple-select",
      question: "Which of the following features can be configured through the Amazon Virtual Private Cloud (Amazon VPC) Dashboard? (Select TWO)",
      options: [
        "Amazon CloudFront distributions.",
        "Amazon Route 53.",
        "Security Groups.",
        "Subnets.",
        "Elastic Load Balancing."
      ],
      correctAnswer: [2, 3],
      explanation: "The Amazon VPC Dashboard is used to configure networking components like Security Groups and Subnets within a Virtual Private Cloud. Amazon CloudFront, Amazon Route 53, and Elastic Load Balancing are separate AWS services with their own dedicated consoles and are not configured from the VPC Dashboard."
    },
    {
      id: "paper-11-005",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "For which auditing process does AWS have sole responsibility?",
      options: [
        "AWS IAM policies.",
        "Physical security.",
        "Amazon S3 bucket policies.",
        "AWS CloudTrail Logs."
      ],
      correctAnswer: [1],
      explanation: "Under the Shared Responsibility Model, AWS has sole responsibility for auditing the physical security of its data centers, since customers have no access to the underlying facilities. IAM policies, S3 bucket policies, and CloudTrail logs are all configured and controlled by the customer, making them the customer's auditing responsibility, not AWS's alone."
    },
    {
      id: "paper-11-006",
      domain: "ACM",
      topic: "consolidated-billing",
      type: "multiple-select",
      question: "Which of the following are advantages of AWS consolidated billing? (Select TWO)",
      options: [
        "The ability to receive one bill for multiple accounts.",
        "Service limits increasing by default in all accounts.",
        "A fixed discount on the monthly bill.",
        "Potential volume discounts, as usage in all accounts is combined.",
        "The automatic extension of the master account’s AWS support plan to all accounts."
      ],
      correctAnswer: [0, 3],
      explanation: "Consolidated billing lets an organization receive a single, combined bill for multiple linked accounts, and those accounts can benefit from potential volume discounts because their combined usage is aggregated. Service limits do not automatically increase across all accounts, there is no automatic fixed discount, and each account's own AWS Support plan is not extended to other accounts under consolidated billing."
    },
    {
      id: "paper-11-007",
      domain: "CLD",
      topic: "cloud-benefits",
      type: "multiple-select",
      question: "Which of the following common IT tasks can AWS cover to free up company IT resources? (Select TWO)",
      options: [
        "Patching databases software.",
        "Testing application releases.",
        "Backing up databases.",
        "Creating database schema.",
        "Running penetration tests."
      ],
      correctAnswer: [0, 2],
      explanation: "One of the core benefits of the cloud is offloading undifferentiated heavy lifting, so AWS can handle tasks like patching database software and backing up databases on the customer's behalf, freeing up internal IT resources. Testing application releases, creating database schemas, and running penetration tests remain the customer's responsibility since they involve application-specific logic and security testing only the customer can perform."
    },
    {
      id: "paper-11-008",
      domain: "GLB",
      topic: "regions",
      type: "single",
      question: "A company wants to expand from one AWS Region into a second AWS Region. What does the company need to do to start supporting the new Region?",
      options: [
        "Contact an AWS Account Manager to sign a new contract.",
        "Move an Availability Zone to the new Region.",
        "Begin deploying resources in the second Region.",
        "Download the AWS Management Console for the new Region."
      ],
      correctAnswer: [2],
      explanation: "To start supporting a new AWS Region, a company simply needs to begin deploying resources there — AWS Regions are available for use without any special contract or sign-up process. There is no need to contact an Account Manager, Availability Zones cannot be 'moved' between Regions, and the AWS Management Console is a single web application, not something downloaded per Region."
    },
    {
      id: "paper-11-009",
      domain: "ELB",
      topic: "elastic-load-balancing",
      type: "single",
      question: "Why is it beneficial to use Elastic Load Balancers with applications?",
      options: [
        "They allow for the conversion from Application Load.",
        "Balancers to Classic Load Balancers.",
        "They are capable of handling constant changes in network traffic patterns.",
        "They automatically adjust capacity. They are provided at no charge to users."
      ],
      correctAnswer: [2],
      explanation: "Elastic Load Balancers are beneficial because they can automatically handle constant changes in network traffic patterns, distributing incoming requests across healthy targets as demand fluctuates. ELB does not convert Application Load Balancers into Classic Load Balancers, it does not itself adjust EC2 capacity (that's Auto Scaling's role), and Elastic Load Balancing is a paid service, not free."
    },
    {
      id: "paper-11-010",
      domain: "ACM",
      topic: "support",
      type: "single",
      question: "Which is the MINIMUM AWS Support plan that allows for one-hour target response time for support cases?",
      options: [
        "Enterprise.",
        "Business.",
        "Developer",
        "Basic"
      ],
      correctAnswer: [1],
      explanation: "The Business Support plan is the minimum tier that offers a one-hour target response time for support cases involving production system issues. The Basic and Developer plans offer slower response times, and Enterprise is a higher (and pricier) plan than necessary to meet this requirement."
    },
    {
      id: "paper-11-011",
      domain: "S3",
      topic: "storage-classes",
      type: "single",
      question: "What is the lowest-cost, durable storage option for retaining database backups for immediate retrieval?",
      options: [
        "Amazon S3.",
        "Amazon Glacier.",
        "Amazon EBS.",
        "Amazon EC2 Instance Store."
      ],
      correctAnswer: [0],
      explanation: "Amazon S3 is the lowest-cost durable storage option that still allows immediate (millisecond) retrieval of data, making it ideal for database backups that may need to be restored quickly. Amazon Glacier is cheaper but has retrieval delays of minutes to hours, Amazon EBS is more expensive block storage tied to EC2 instances, and EC2 Instance Store is ephemeral and not durable."
    },
    {
      id: "paper-11-012",
      domain: "ACM",
      topic: "professional-services",
      type: "single",
      question: "What AWS team assists customers with accelerating cloud adoption through paid engagements in any of several specialty practice areas?",
      options: [
        "AWS Enterprise Support.",
        "AWS Solutions Architects.",
        "AWS Professional Services.",
        "AWS Account Managers."
      ],
      correctAnswer: [2],
      explanation: "AWS Professional Services is the team that assists customers with accelerating cloud adoption through paid engagements across specialty practice areas like migration, security, and DevOps. AWS Enterprise Support and Account Managers provide account-level guidance rather than hands-on paid engagements, and AWS Solutions Architects typically provide technical guidance but are not the dedicated paid-engagement team described here."
    },
    {
      id: "paper-11-013",
      domain: "ACM",
      topic: "support",
      type: "single",
      question: "A company needs 24/7 phone email and chat access with a response time of less than 1 hour if a production system has a service interruption Which AWS Support plan meets these requirements at the LOWEST cost?",
      options: [
        "Basic.",
        "Developer.",
        "Business.",
        "Enterprise."
      ],
      correctAnswer: [2],
      explanation: "The Business Support plan provides 24/7 phone, email, and chat access with a response time of less than one hour for production system impairments, at a lower cost than Enterprise. The Basic and Developer plans do not offer phone support or the one-hour response guarantee, and Enterprise offers similar or better response times but at a higher cost than necessary."
    },
    {
      id: "paper-11-014",
      domain: "MON",
      topic: "aws-config",
      type: "single",
      question: "If a customer needs to audit the change management of AWS resources, which of the following AWS services should the customer use?",
      options: [
        "AWS Config.",
        "AWS Trusted Advisor.",
        "Amazon CloudWatch.",
        "Amazon Inspector."
      ],
      correctAnswer: [0],
      explanation: "AWS Config tracks and records configuration changes to AWS resources over time, making it the right tool to audit change management. AWS Trusted Advisor gives best-practice recommendations, Amazon CloudWatch focuses on performance metrics and alarms, and Amazon Inspector scans for security vulnerabilities — none of these track configuration change history."
    },
    {
      id: "paper-11-015",
      domain: "ACM",
      topic: "trusted-advisor",
      type: "multiple-select",
      question: "How does AWS Trusted Advisor provide guidance to users of the AWS Cloud? (Select TWO)",
      options: [
        "It identifies software vulnerabilities in applications running on AWS.",
        "It provides a list of cost optimization recommendations based on current AWS usage.",
        "It detects potential security vulnerabilities caused by permissions settings on account resources.",
        "It automatically corrects potential security issues caused by permissions settings on account resources.",
        "It provides proactive alerting whenever an Amazon EC2 instance has been compromised."
      ],
      correctAnswer: [1, 2],
      explanation: "AWS Trusted Advisor provides a list of cost optimization recommendations based on current AWS usage, and it also detects potential security vulnerabilities caused by overly permissive settings on account resources. It does not scan application code for software vulnerabilities, it cannot automatically fix security issues itself, and it does not provide real-time alerts about compromised EC2 instances."
    },
    {
      id: "paper-11-016",
      domain: "DBA",
      topic: "rds",
      type: "single",
      question: "Which AWS managed service is used to host databases?",
      options: [
        "AWS Batch.",
        "AWS Artifact.",
        "AWS Data Pipeline.",
        "Amazon RDS."
      ],
      correctAnswer: [3],
      explanation: "Amazon RDS is AWS's managed relational database service, designed specifically to host and manage databases such as MySQL, PostgreSQL, and others. AWS Batch runs batch computing jobs, AWS Artifact provides compliance documentation, and AWS Data Pipeline orchestrates data movement — none of these host databases."
    },
    {
      id: "paper-11-017",
      domain: "IAM",
      topic: "iam-user",
      type: "single",
      question: "Which of the following Identity and Access Management (IAM) entities is associated with an access key ID and secret access key when using AWS Command Line Interface (AWS CLI)?",
      options: [
        "IAM group.",
        "IAM user.",
        "IAM role.",
        "IAM policy."
      ],
      correctAnswer: [1],
      explanation: "An access key ID and secret access key used with the AWS CLI are associated with an IAM user, providing that user's programmatic credentials. IAM groups are collections of users (they don't hold their own credentials), IAM roles use temporary credentials rather than long-term access keys, and IAM policies are permission documents, not credential holders."
    },
    {
      id: "paper-11-018",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "Under the shared responsibility model, which of the following is the customer responsible for?",
      options: [
        "Ensuring that disk drives are wiped after use.",
        "Ensuring that firmware is updated on hardware devices.",
        "Ensuring that data is encrypted at rest.",
        "Ensuring that network cables are category six or higher."
      ],
      correctAnswer: [2],
      explanation: "Under the Shared Responsibility Model, the customer is responsible for ensuring their data is encrypted at rest, since this falls under 'security in the cloud.' Wiping disk drives, updating hardware firmware, and network cabling standards are all physical infrastructure tasks that AWS manages as part of 'security of the cloud.'"
    },
    {
      id: "paper-11-019",
      domain: "STG",
      topic: "efs",
      type: "single",
      question: "Which AWS service provides a simple and scalable shared file storage solution for use with Linux-based AWS and on-premises servers?",
      options: [
        "Amazon S3.",
        "Amazon Glacier.",
        "Amazon EBS.",
        "Amazon EFS."
      ],
      correctAnswer: [3],
      explanation: "Amazon EFS (Elastic File System) provides a simple, scalable, shared file storage solution that can be mounted concurrently by multiple Linux-based EC2 instances and on-premises servers. Amazon S3 is object storage rather than a file system, Amazon Glacier is for archival, and Amazon EBS can only attach to a single EC2 instance at a time, so it is not a shared file system."
    },
    {
      id: "paper-11-020",
      domain: "IAM",
      topic: "access-keys",
      type: "multiple-select",
      question: "What credential components are required to gain programmatic access to an AWS account? (Select TWO)",
      options: [
        "An access key ID.",
        "A primary key.",
        "A secret access key.",
        "A user ID.",
        "A secondary key."
      ],
      correctAnswer: [0, 2],
      explanation: "Programmatic access to an AWS account requires an access key ID paired with a secret access key, which together authenticate API and CLI requests. There is no such thing as a 'primary key,' 'secondary key,' or generic 'user ID' used for AWS programmatic authentication."
    },
    {
      id: "paper-11-021",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "Which of the following is a shared control between the customer and AWS?",
      options: [
        "Providing a key for Amazon S3 client-side encryption.",
        "Configuration of an Amazon EC2 instance.",
        "Environmental controls of physical AWS data centers.",
        "Awareness."
      ],
      correctAnswer: [3],
      explanation: "Awareness and training is a shared control, meaning both AWS and the customer have responsibilities: AWS trains its own employees while the customer must train their own staff on security awareness. Providing a client-side encryption key and configuring EC2 instances are entirely customer responsibilities, while environmental controls of physical data centers are entirely AWS's responsibility."
    },
    {
      id: "paper-11-022",
      domain: "STG",
      topic: "instance-store",
      type: "single",
      question: "Which type of AWS storage is ephemeral and is deleted when an instance is stopped Of terminated?",
      options: [
        "Amazon EBS.",
        "Amazon EC2 instance store.",
        "Amazon EFS.",
        "Amazon S3."
      ],
      correctAnswer: [1],
      explanation: "Amazon EC2 Instance Store provides ephemeral, temporary block-level storage that is physically attached to the host and is deleted whenever the instance is stopped or terminated. Amazon EBS persists independently of the instance lifecycle, Amazon EFS is durable shared file storage, and Amazon S3 is durable object storage — none of these lose data on stop or terminate."
    },
    {
      id: "paper-11-023",
      domain: "ACM",
      topic: "consolidated-billing",
      type: "single",
      question: "Which of the following is an advantage of consolidated billing on AWS?",
      options: [
        "Volume pricing qualification.",
        "Shared access permissions.",
        "Multiple bills per account.",
        "Eliminates the need for tagging."
      ],
      correctAnswer: [0],
      explanation: "An advantage of consolidated billing is that combined usage across all linked accounts can qualify the organization for volume pricing discounts. Consolidated billing does not share access permissions between accounts, it produces a single combined bill rather than multiple bills, and it does not eliminate the need for cost-allocation tagging."
    },
    {
      id: "paper-11-024",
      domain: "CMP",
      topic: "serverless",
      type: "single",
      question: "Which services are parts of the AWS serverless platform?",
      options: [
        "Amazon EC2, Amazon S3, Amazon Athena.",
        "Amazon Kinesis, Amazon SQS, Amazon EMR.",
        "AWS Step Functions, Amazon DynamoDB, Amazon SNS.",
        "Amazon Athena, Amazon Cognito, Amazon EC2."
      ],
      correctAnswer: [2],
      explanation: "AWS Step Functions, Amazon DynamoDB, and Amazon SNS are all fully serverless services that require no server provisioning or management from the customer. The other combinations each include a non-serverless service — Amazon EC2 (options A and D) or Amazon EMR (option B) — which requires customers to provision and manage servers, disqualifying those groupings."
    },
    {
      id: "paper-11-025",
      domain: "ACM",
      topic: "dedicated-hosts",
      type: "single",
      question: "Which of the following Amazon EC2 pricing models allow customers to use existing server-bound software licenses?",
      options: [
        "Spot Instances.",
        "Reserved Instances.",
        "Dedicated Hosts.",
        "On-Demand Instances."
      ],
      correctAnswer: [2],
      explanation: "Dedicated Hosts provide a physical server dedicated to a single customer, giving the visibility into physical cores and sockets needed to use existing per-socket, per-core, or per-VM server-bound software licenses. Spot and On-Demand Instances run on shared hardware without this visibility, and while Reserved Instances offer a billing discount, they don't provide the dedicated physical hardware needed for license portability."
    },
    {
      id: "paper-11-026",
      domain: "IAM",
      topic: "least-privilege",
      type: "multiple-select",
      question: "Which of the following security measures protect access to an AWS account? (Select TWO)",
      options: [
        "Enable AWS CloudTrail.",
        "Grant least privilege access to IAM users.",
        "Create one IAM user and share with many developers and users.",
        "Enable Amazon CloudFront.",
        "Activate multi-factor authentication (MFA) for privileged users."
      ],
      correctAnswer: [1, 4],
      explanation: "Granting IAM users least privilege access and activating multi-factor authentication (MFA) for privileged users are both direct measures that protect access to an AWS account. Enabling CloudTrail only logs activity after the fact rather than preventing unauthorized access, sharing a single IAM user among many people is a security anti-pattern, and enabling CloudFront is a content-delivery service unrelated to account access security."
    },
    {
      id: "paper-11-027",
      domain: "DEP",
      topic: "cloudformation",
      type: "single",
      question: "Which AWS service provides the ability to manage infrastructure as code?",
      options: [
        "AWS CodePipeline.",
        "AWS CodeDeploy.",
        "AWS Direct Connect.",
        "AWS CloudFormation."
      ],
      correctAnswer: [3],
      explanation: "AWS CloudFormation lets you define and provision AWS infrastructure using code (templates), enabling repeatable, version-controlled infrastructure-as-code deployments. AWS CodePipeline automates release pipelines, AWS CodeDeploy automates application deployments, and AWS Direct Connect provides a dedicated network connection — none of these manage infrastructure as code."
    },
    {
      id: "paper-11-028",
      domain: "GLB",
      topic: "availability-zones",
      type: "single",
      question: "What is an advantage of deploying an application across multiple Availability Zones?",
      options: [
        "There is a lower risk of service failure if a natural disaster causes a service disruption in a given AWS Region.",
        "The application will have higher availability because it can withstand a service disruption in one Availability Zone.",
        "There will be better coverage as Availability Zones are geographical^ distant and can serve a wider area.",
        "There will be decreased application latency that will improve the user experience."
      ],
      correctAnswer: [1],
      explanation: "Deploying an application across multiple Availability Zones gives it higher availability because the application can continue running even if one Availability Zone experiences a service disruption. Multiple AZs within the same Region don't necessarily protect against a Region-wide natural disaster, AZs are not primarily about serving a wider geographic area, and using multiple AZs doesn't inherently reduce latency."
    },
    {
      id: "paper-11-029",
      domain: "DBA",
      topic: "aurora",
      type: "single",
      question: "A customer needs to run a MySQL database that easily scales. Which AWS service should they use?",
      options: [
        "Amazon Aurora.",
        "Amazon Redshift.",
        "Amazon DynamoDB.",
        "Amazon ElastiCache."
      ],
      correctAnswer: [0],
      explanation: "Amazon Aurora is a MySQL- and PostgreSQL-compatible relational database that automatically scales storage and read capacity, making it well suited for a MySQL workload that needs to scale easily. Amazon Redshift is a data warehouse for analytics, Amazon DynamoDB is a NoSQL database (not MySQL-compatible), and Amazon ElastiCache is an in-memory cache, not a relational database."
    },
    {
      id: "paper-11-030",
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
      explanation: "Implementing loose coupling is a core AWS Cloud architecture design principle, reducing dependencies between components so a failure in one does not cascade to others. Implementing single points of failure and monolithic design are anti-patterns AWS best practices specifically advise against, and vertical scaling (scaling up a single resource) is not the recommended cloud-native approach compared to horizontal scaling."
    },
    {
      id: "paper-11-031",
      domain: "ACM",
      topic: "support",
      type: "single",
      question: "AWS Enterprise Support users have access to which service or feature that is not available to users with other AWS Support plans?",
      options: [
        "AWS Trusted Advisor.",
        "AWS Support case.",
        "Concierge team.",
        "Amazon Connect."
      ],
      correctAnswer: [2],
      explanation: "AWS Enterprise Support customers get access to a dedicated Concierge team for billing and account support, a benefit not included in other support plans. AWS Trusted Advisor and the ability to open an AWS Support case are available on multiple plans (not exclusive to Enterprise), and Amazon Connect is a separate contact-center service, not part of the AWS Support offering."
    },
    {
      id: "paper-11-032",
      domain: "CLD",
      topic: "capex-opex",
      type: "single",
      question: "A company will be moving from an on-premises data center to the AWS Cloud. What would be one financial difference after the move?",
      options: [
        "Moving from variable operational expense ( opex ) to upfront capital expense (capex).",
        "Moving from upfront capital expense (capex) to variable capital expense (capex).",
        "Moving from upfront capital expense (capex) to variable operational expense ( opex ).",
        "Elimination of upfront capital expense (capex) and elimination of variable operational expense ( opex )."
      ],
      correctAnswer: [2],
      explanation: "Moving from an on-premises data center to the AWS Cloud shifts spending from upfront capital expense (buying servers and data centers) to variable operational expense (paying only for what is consumed), a fundamental financial benefit of cloud computing. The other options describe combinations that don't reflect this shift — capex is not traded for more capex, and AWS doesn't eliminate opex entirely since customers still pay for usage."
    },
    {
      id: "paper-11-033",
      domain: "ACM",
      topic: "dedicated-hosts",
      type: "single",
      question: "When performing a cost analysis that supports physical isolation of a customer workload, which compute hosting model should be accounted for in the Total Cost of Ownership (TCO)?",
      options: [
        "Dedicated Hosts",
        "Reserved Instances",
        "On-Demand Instances",
        "No Upfront Reserved Instances"
      ],
      correctAnswer: [0],
      explanation: "Dedicated Hosts should be accounted for in a TCO analysis requiring physical isolation of a customer's workload, since they provide a physical server dedicated entirely to one customer rather than shared hardware. On-Demand, Reserved, and No Upfront Reserved Instances all run on AWS's shared multi-tenant hardware and do not provide the physical isolation being analyzed."
    },
    {
      id: "paper-11-034",
      domain: "S3",
      topic: "glacier",
      type: "single",
      question: "Which AWS service should be used for long-term, low-cost storage of data backups?",
      options: [
        "Amazon RDS.",
        "Amazon Glacier.",
        "AWS Snowball.",
        "AWS EBS."
      ],
      correctAnswer: [1],
      explanation: "Amazon Glacier is purpose-built for long-term, low-cost storage of infrequently accessed data such as backups, offering the lowest storage cost among AWS's durable storage options. Amazon RDS is a database service (not archival storage), AWS Snowball is a physical data-transfer device (not a storage destination), and EBS is higher-cost block storage meant for active use with EC2 instances."
    },
    {
      id: "paper-11-035",
      domain: "ACM",
      topic: "support",
      type: "single",
      question: "Which is the MINIMUM AWS Support plan that provides technical support through phone calls?",
      options: [
        "Enterprise.",
        "Business.",
        "Developer.",
        "Basic."
      ],
      correctAnswer: [1],
      explanation: "The Business Support plan is the minimum tier that includes technical support through phone calls, available 24/7. The Basic plan offers no technical phone support, the Developer plan only offers business-hours email support, and Enterprise is a higher plan than needed to satisfy this minimum requirement."
    },
    {
      id: "paper-11-036",
      domain: "ACM",
      topic: "spot-instances",
      type: "single",
      question: "Which Amazon EC2 instance pricing model can provide discounts of up to 90%?",
      options: [
        "Reserved Instances.",
        "On-Demand.",
        "Dedicated Hosts.",
        "Spot Instances."
      ],
      correctAnswer: [3],
      explanation: "Spot Instances let customers use spare EC2 capacity and can provide discounts of up to 90% compared to On-Demand pricing. Reserved Instances offer discounts up to around 72% for committed usage, On-Demand has no discount, and Dedicated Hosts are priced for isolation and compliance rather than deep discounting."
    },
    {
      id: "paper-11-037",
      domain: "GLB",
      topic: "cloudfront",
      type: "multiple-select",
      question: "Which of the following AWS services can be used to serve large amounts of online video content with the lowest possible latency? (Select TWO)",
      options: [
        "appGateway.",
        "Amazon S3.",
        "Amazon Elastic File System (EFS).",
        "Amazon Glacier.",
        "Amazom CloudFront."
      ],
      correctAnswer: [1, 4],
      explanation: "Amazon S3 provides durable, scalable storage for video content, and Amazon CloudFront caches and delivers that content from Edge Locations around the world, together enabling low-latency delivery of large amounts of online video. Amazon EFS is shared file storage (not built for global content delivery), Amazon Glacier is archival storage with slow retrieval, and 'appGateway' is not a real AWS service."
    },
    {
      id: "paper-11-038",
      domain: "GLB",
      topic: "edge-locations",
      type: "multiple-select",
      question: "What can AWS edge locations be used for? (Select TWO)",
      options: [
        "Hosting applications.",
        "Delivering content closer to users.",
        "Running NoSQL database caching services.",
        "Reducing traffic on the server by caching responses.",
        "Sending notification messages to end users."
      ],
      correctAnswer: [1, 3],
      explanation: "AWS Edge Locations are used to deliver content closer to users (via CloudFront caching) and to reduce load on origin servers by caching and serving frequently requested content directly from the edge. Edge locations do not host full applications, run NoSQL database caching services, or send end-user notification messages — those are functions of EC2/Lambda, DAX, and SNS respectively."
    },
    {
      id: "paper-11-039",
      domain: "ACM",
      topic: "tco",
      type: "single",
      question: "A company is planning to migrate from on-premises to the AWS Cloud. When AWS tool or service provides detailed reports on estimated cost savings after migration?",
      options: [
        "AWS Total Cost of Ownership (TCO) Calculator.",
        "Cost Explorer.",
        "AWS Budgets.",
        "AWS Migration Hub."
      ],
      correctAnswer: [0],
      explanation: "The AWS TCO (Total Cost of Ownership) Calculator is designed specifically to compare on-premises costs against AWS costs and produce a detailed report of estimated savings from migration. Cost Explorer analyzes existing AWS spending, AWS Budgets sets spending alerts, and AWS Migration Hub tracks migration progress — none of these generate a pre-migration cost-savings report."
    },
    {
      id: "paper-11-040",
      domain: "MON",
      topic: "personal-health-dashboard",
      type: "single",
      question: "Which AWS service provides a customized view of the health of specific AWS services that power a customer’s workloads running on AWS?",
      options: [
        "AWS Service Health Dashboard.",
        "AWS X-Ray.",
        "AWS Personal Health Dashboard.",
        "Amazon CloudWatch."
      ],
      correctAnswer: [2],
      explanation: "AWS Personal Health Dashboard provides a customized view of the health of the specific AWS services underlying a customer's own workloads, along with alerts and guidance for events that affect them. The AWS Service Health Dashboard shows general, account-agnostic service status across all customers, AWS X-Ray traces application requests, and Amazon CloudWatch monitors performance metrics — none personalize AWS service health to one account."
    },
    {
      id: "paper-11-041",
      domain: "CLD",
      topic: "cloud-benefits",
      type: "single",
      question: "One of the advantages to moving infrastructure from an on-premises data center to the AWS Cloud is:",
      options: [
        "It allows the business to eliminate IT bills.",
        "It allows the business to put a server in each customer’s data center.",
        "It allows the business to focus on business activities.",
        "It allows the business to leave servers unpatched."
      ],
      correctAnswer: [2],
      explanation: "Moving infrastructure to the AWS Cloud lets a business focus on its core business activities instead of managing data centers, since AWS handles the undifferentiated heavy lifting of infrastructure operations. Moving to AWS doesn't eliminate IT bills entirely, it doesn't involve placing servers in each customer's own data center, and leaving servers unpatched is a security risk, not a genuine cloud benefit."
    },
    {
      id: "paper-11-042",
      domain: "ACM",
      topic: "support",
      type: "single",
      question: "How can an AWS user with an AWS Basic Support plan obtain technical assistance from AWS?",
      options: [
        "AWS Senior Support Engineers.",
        "AWS Technical Account Managers.",
        "AWS Trusted Advisor.",
        "AWS Discussion Forums."
      ],
      correctAnswer: [3],
      explanation: "Users on the AWS Basic Support plan can get technical assistance through the AWS Discussion Forums, a free community-based resource. Senior Support Engineers and Technical Account Managers are reserved for higher-tier paid support plans, and AWS Trusted Advisor provides automated recommendations rather than direct technical assistance."
    },
    {
      id: "paper-11-043",
      domain: "GLB",
      topic: "multi-region",
      type: "single",
      question: "How can a user protect against AWS service disruptions if a natural disaster affects an entire geographic area?",
      options: [
        "Deploy applications across multiple Availability Zones within an AWS Region.",
        "Use a hybrid cloud computing deployment model within the geographic area.",
        "Deploy applications across multiple AWS Regions.",
        "Store application artifacts using AWS Artifact and replicate them across multiple AWS Regions."
      ],
      correctAnswer: [2],
      explanation: "Deploying applications across multiple AWS Regions protects against service disruptions caused by a natural disaster affecting an entire geographic area, since Regions are geographically separated by significant distances. Multiple Availability Zones within a single Region can still be affected by a region-wide disaster, a hybrid deployment within the same affected geographic area doesn't solve the problem, and AWS Artifact is a compliance-documentation service, not a replication tool."
    },
    {
      id: "paper-11-044",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "Which activity is a customer responsibility in the AWS Cloud according to the AWS shared responsibility model?",
      options: [
        "Ensuring network connectivity from AWS to the internet.",
        "Patching and fixing flaws within the AWS Cloud infrastructure.",
        "Ensuring the physical security of cloud data centers.",
        "Ensuring Amazon EBS volumes are backed up."
      ],
      correctAnswer: [3],
      explanation: "Under the AWS Shared Responsibility Model, ensuring that Amazon EBS volumes are backed up is a customer responsibility, since data backup and management fall under 'security in the cloud.' Ensuring network connectivity to the internet, patching the underlying cloud infrastructure, and physically securing data centers are all part of 'security of the cloud,' which AWS manages."
    },
    {
      id: "paper-11-045",
      domain: "ACM",
      topic: "spot-instances",
      type: "single",
      question: "In which scenario should Amazon EC2 Spot Instances be used?",
      options: [
        "A company wants to move its main website to AWS from an on-premises web server.",
        "A company has a number of application services whose Service Level Agreement (SLA) requires 99.999% uptime.",
        "A company’s heavily used legacy database is currently running on-premises.",
        "A company has a number of infrequent, interruptible jobs that are currently using On-Demand Instances."
      ],
      correctAnswer: [3],
      explanation: "EC2 Spot Instances are ideal for infrequent, interruptible jobs, such as replacing On-Demand Instances for workloads that can tolerate being stopped, since Spot offers steep discounts in exchange for the possibility of interruption. Moving a main website, running workloads requiring 99.999% uptime, or hosting a heavily used legacy database all need consistent, reliable availability that Spot Instances cannot guarantee."
    },
    {
      id: "paper-11-046",
      domain: "GLB",
      topic: "regions",
      type: "multiple-select",
      question: "A customer is deploying a new application and needs to choose an AWS Region. Which of the following factors could influence the customer’s decision? (Select TWO)",
      options: [
        "Reduced latency to users.",
        "The application’s presentation in the local language.",
        "Data sovereignty compliance.",
        "Cooling costs in hotter climates.",
        "Proximity to the customer’s office for on-site visits."
      ],
      correctAnswer: [0, 2],
      explanation: "When choosing an AWS Region, reduced latency to users (by placing resources closer to them) and data sovereignty compliance (keeping data within required legal or geographic boundaries) are both legitimate deciding factors. Local language presentation is an application-level concern rather than a Region factor, cooling costs are AWS's internal infrastructure concern, and proximity to a customer's office for site visits is not a meaningful Region-selection criterion."
    },
    {
      id: "paper-11-047",
      domain: "MON",
      topic: "personal-health-dashboard",
      type: "single",
      question: "Which AWS service provides alerts when an AWS event may impact a company’s AWS resources?",
      options: [
        "AWS Personal Health Dashboard.",
        "AWS Service Health Dashboard.",
        "AWS Trusted Advisor.",
        "AWS Infrastructure Event Management."
      ],
      correctAnswer: [0],
      explanation: "AWS Personal Health Dashboard provides alerts when an AWS event may impact a company's specific AWS resources, giving personalized visibility and guidance. The AWS Service Health Dashboard only shows general service-wide status (not account-specific impact), AWS Trusted Advisor gives best-practice recommendations rather than event alerts, and 'AWS Infrastructure Event Management' is a proactive planning engagement, not an alerting service."
    },
    {
      id: "paper-11-048",
      domain: "GLB",
      topic: "disaster-recovery",
      type: "single",
      question: "Which disaster recovery scenario offers the lowest probability of down time?",
      options: [
        "Backup and restore.",
        "Pilot light.",
        "Warm standby.",
        "Multi-site active-active."
      ],
      correctAnswer: [3],
      explanation: "Multi-site active-active is the disaster recovery strategy that offers the lowest probability of downtime, since fully functional environments run simultaneously in multiple locations and can absorb failover instantly. Backup and restore has the longest recovery time, pilot light keeps only a minimal environment running, and warm standby keeps a scaled-down but not fully active environment — both provide less protection than a fully active multi-site setup."
    },
    {
      id: "paper-11-049",
      domain: "DEP",
      topic: "codecommit",
      type: "single",
      question: "Which service’s PRIMARY purpose is software version control?",
      options: [
        "Amazon CodeStar.",
        "AWS Command Line Interface (AWS CLI).",
        "Amazon Cognito.",
        "AWS CodeCommit."
      ],
      correctAnswer: [3],
      explanation: "AWS CodeCommit is a fully managed source control service whose primary purpose is hosting private Git repositories for software version control. Amazon CodeStar is a project-management tool that integrates several DevOps services, the AWS CLI is a command-line tool for managing AWS resources, and Amazon Cognito handles user authentication — none of these are version-control services."
    },
    {
      id: "paper-11-050",
      domain: "IAM",
      topic: "mfa",
      type: "multiple-select",
      question: "How can a customer increase security to AWS account logons? (Select TWO)",
      options: [
        "Configure AWS Certificate Manager",
        "Enable Multi-Factor Authentication (MFA)",
        "Use Amazon Cognito to manage access",
        "Configure a strong password policy",
        "Enable AWS Organizations"
      ],
      correctAnswer: [1, 3],
      explanation: "Enabling Multi-Factor Authentication (MFA) and configuring a strong password policy both directly increase the security of AWS account logons by adding extra verification and enforcing robust credentials. AWS Certificate Manager handles SSL/TLS certificates, Amazon Cognito manages application user identities (not AWS account console logons), and AWS Organizations manages multiple accounts but does not itself secure individual logons."
    }
  ]
});
