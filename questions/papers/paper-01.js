window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "paper-01",
  paperId: "paper-01",
  paperName: "Practice Paper 1",
  questions: [
    {
      id: "paper-01-001",
      domain: "IAM",
      topic: "management-console",
      type: "single",
      question: "AWS allows users to manage their resources using a web based user interface. What is the name of this interface?",
      options: [
        "AWS CLI.",
        "AWS API.",
        "AWS SDK.",
        "AWS Management Console."
      ],
      correctAnswer: [3],
      explanation: "The AWS Management Console is the web-based user interface where users can manage and interact with all AWS resources through a graphical dashboard. The AWS CLI and SDK are command-line and programmatic interfaces respectively, and the AWS API is the underlying technical layer — none of these are the web interface."
    },
    {
      id: "paper-01-002",
      domain: "CLD",
      topic: "scaling",
      type: "single",
      question: "Which of the following is an example of horizontal scaling in the AWS Cloud?",
      options: [
        "Replacing an existing EC2 instance with a larger, more powerful one.",
        "Increasing the compute capacity of a single EC2 instance to address the growing demands of an application.",
        "Adding more RAM capacity to an EC2 instance.",
        "Adding more EC2 instances of the same size to handle an increase in traffic."
      ],
      correctAnswer: [3],
      explanation: "Horizontal scaling means adding more instances of the same size to handle increased load, distributing the workload across multiple machines. Replacing an instance with a larger one or adding more RAM/compute to a single instance are examples of vertical scaling (scaling up), not horizontal scaling."
    },
    {
      id: "paper-01-003",
      domain: "MON",
      topic: "cloudtrail",
      type: "single",
      question: "You have noticed that several critical Amazon EC2 instances have been terminated. Which of the following AWS services would help you determine who took this action?",
      options: [
        "Amazon Inspector.",
        "AWS CloudTrail.",
        "AWS Trusted Advisor.",
        "EC2 Instance Usage Report."
      ],
      correctAnswer: [1],
      explanation: "AWS CloudTrail records every API call made to AWS services, including who terminated EC2 instances and when, making it the auditing tool for tracking actions. Amazon Inspector scans for vulnerabilities, Trusted Advisor gives best-practice recommendations, and there is no such service as 'EC2 Instance Usage Report' for this purpose."
    },
    {
      id: "paper-01-004",
      domain: "ARC",
      topic: "well-architected",
      type: "multiple-select",
      question: "Which of the below options are related to the reliability of AWS? (Choose TWO)",
      options: [
        "Applying the principle of least privilege to all AWS resources.",
        "Automatically provisioning new resources to meet demand.",
        "All AWS services are considered Global Services, and this design helps customers serve their international users.",
        "Providing compensation to customers if issues occur.",
        "Ability to recover quickly from failures."
      ],
      correctAnswer: [1, 4],
      explanation: "Reliability in AWS means the ability to recover quickly from failures and automatically provisioning new resources to meet demand, ensuring the system keeps running even when components fail or load increases. The principle of least privilege is a security concept, the global-services claim is false (many services are regional), and AWS does not provide monetary compensation for issues."
    },
    {
      id: "paper-01-005",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "Which statement is true regarding the AWS Shared Responsibility Model?",
      options: [
        "Responsibilities vary depending on the services used.",
        "Security of the IaaS services is the responsibility of AWS.",
        "Patching the guest OS is always the responsibility of AWS.",
        "Security of the managed services is the responsibility of the customer."
      ],
      correctAnswer: [0],
      explanation: "Under the AWS Shared Responsibility Model, the division of responsibilities varies depending on the service type — managed services shift more responsibility to AWS, while IaaS services like EC2 leave more to the customer (e.g., patching the guest OS on EC2 is the customer's job). It's false that AWS is responsible for IaaS security in full or that customers secure managed services entirely."
    },
    {
      id: "paper-01-006",
      domain: "ACM",
      topic: "reserved-instances",
      type: "single",
      question: "You have set up consolidated billing for several AWS accounts. One of the accounts has purchased a number of reserved instances for 3 years. Which of the following is true regarding this scenario?",
      options: [
        "The Reserved Instance discounts can only be shared with the master account.",
        "All accounts can receive the hourly cost benefit of the Reserved Instances.",
        "The purchased instances will have better performance than On-demand instances.",
        "There are no cost benefits from using consolidated billing; It is for informational purposes only."
      ],
      correctAnswer: [1],
      explanation: "When one account in a consolidated billing family purchases Reserved Instances, all accounts in the family can receive the hourly cost benefit (the discount automatically applies to matching usage across the organization). The discount is not limited to the master account, Reserved Instances don't improve performance (only cost), and consolidated billing does provide cost benefits."
    },
    {
      id: "paper-01-007",
      domain: "GLB",
      topic: "multi-region",
      type: "single",
      question: "A company has developed an eCommerce web application in AWS. What should they do to ensure that the application has the highest level of availability?",
      options: [
        "Deploy the application across multiple Availability Zones and Edge locations.",
        "Deploy the application across multiple Availability Zones and subnets.",
        "Deploy the application across multiple Regions and Availability Zones.",
        "Deploy the application across multiple VPC’s and subnets."
      ],
      correctAnswer: [2],
      explanation: "To achieve the highest level of availability for an eCommerce application, deploy across multiple Regions and multiple Availability Zones so that even a whole-Region failure won't take the application offline. Deploying only across AZs in one Region protects against a single data-center failure but not a Region outage, and Edge locations do not host application servers."
    },
    {
      id: "paper-01-008",
      domain: "S3",
      topic: "snowball",
      type: "multiple-select",
      question: "What does AWS Snowball provide? (Choose TWO)",
      options: [
        "Built-in computing capabilities that allow customers to process data locally.",
        "A catalog of third-party software solutions that customers need to build solutions and run their businesses.",
        "A hybrid cloud storage between on-premises environments and the AWS Cloud.",
        "An Exabyte-scale data transfer service that allows you to move extremely large amounts of data to AWS.",
        "Secure transfer of large amounts of data into and out of the AWS."
      ],
      correctAnswer: [0, 4],
      explanation: "AWS Snowball is a physical data-transfer device that securely transfers large amounts of data (up to petabytes) into and out of AWS, and Snowball Edge models include built-in computing capabilities so customers can process data locally before shipping. Snowball is not a catalog of third-party software (that's AWS Marketplace) or a hybrid storage solution like Storage Gateway, and the Exabyte-scale transfer service is AWS Snowmobile, not Snowball."
    },
    {
      id: "paper-01-009",
      domain: "ACM",
      topic: "support",
      type: "single",
      question: "A company has an AWS Enterprise Support plan. They want quick and efficient guidance with their billing and account inquiries. Which of the following should the company use?",
      options: [
        "AWS Health Dashboard.",
        "AWS Support Concierge.",
        "AWS Customer Service.",
        "AWS Operations Support."
      ],
      correctAnswer: [1],
      explanation: "AWS Support Concierge is available with the Enterprise Support plan and provides personalized assistance with billing and account inquiries. The AWS Health Dashboard shows service status, AWS Customer Service handles general account issues, and 'AWS Operations Support' is not a real service offering."
    },
    {
      id: "paper-01-010",
      domain: "GLB",
      topic: "regions",
      type: "single",
      question: "A Japanese company hosts their applications on Amazon EC2 instances in the Tokyo Region. The company has opened new branches in the United States, and the US users are complaining of high latency. What can the company do to reduce latency for the users in the US while minimizing costs?",
      options: [
        "Applying the Amazon Connect latency-based routing policy.",
        "Registering a new US domain name to serve the users in the US.",
        "Building a new data center in the US and implementing a hybrid model.",
        "Deploying new Amazon EC2 instances in a Region located in the US."
      ],
      correctAnswer: [3],
      explanation: "To reduce latency for US users while the application runs in Tokyo, deploy new EC2 instances in a US-based AWS Region so those users connect to servers physically close to them. Amazon Connect is a contact-center service (not latency routing), registering a new domain name doesn't reduce latency, and building a new data center is far more expensive and complex than using an AWS Region."
    },
    {
      id: "paper-01-011",
      domain: "IAM",
      topic: "iam-groups",
      type: "single",
      question: "An organization has a large number of technical employees who operate their AWS Cloud infrastructure. What does AWS provide to help organize them into teams and then assign the appropriate permissions for each team?",
      options: [
        "IAM roles.",
        "IAM users.",
        "IAM user groups.",
        "AWS Organizations."
      ],
      correctAnswer: [2],
      explanation: "IAM user groups let you organize many IAM users into teams and then attach permissions policies to the group, so every member inherits those permissions — this is the standard way to manage permissions at scale. IAM roles are for temporary credentials or service-to-service access, IAM users are the individuals (not the organizing structure), and AWS Organizations manages multiple AWS accounts (not user permissions within an account)."
    },
    {
      id: "paper-01-012",
      domain: "OTH",
      topic: "database-migration-service",
      type: "single",
      question: "A company has decided to migrate its Oracle database to AWS. Which AWS service can help achieve this without negatively impacting the functionality of the source database?",
      options: [
        "AWS OpsWorks.",
        "AWS Database Migration Service.",
        "AWS Server Migration Service.",
        "AWS Application Discovery Service."
      ],
      correctAnswer: [1],
      explanation: "AWS Database Migration Service (DMS) is built to migrate databases to AWS with minimal downtime and without impacting the source database's functionality during the migration. OpsWorks is a configuration-management service, Server Migration Service moves entire VMs/servers, and Application Discovery Service inventories on-premises environments — none specialize in database migration."
    },
    {
      id: "paper-01-013",
      domain: "CLD",
      topic: "elasticity",
      type: "single",
      question: "Adjusting compute capacity dynamically to reduce cost is an implementation of which AWS cloud best practice?",
      options: [
        "Build security in every layer.",
        "Parallelize tasks.",
        "Implement elasticity.",
        "Adopt monolithic architecture."
      ],
      correctAnswer: [2],
      explanation: "Implementing elasticity means automatically adjusting compute capacity up or down based on demand, which reduces cost by ensuring you only pay for what you actually need. Building security in every layer and parallelizing tasks are other best practices but not about dynamic capacity, and monolithic architecture is the opposite of a cloud best practice."
    },
    {
      id: "paper-01-014",
      domain: "CLD",
      topic: "cloud-benefits",
      type: "multiple-select",
      question: "What are the benefits of having infrastructure hosted in AWS? (Choose TWO)",
      options: [
        "Increasing speed and agility.",
        "There is no need to worry about security.",
        "Gaining complete control over the physical infrastructure.",
        "Operating applications on behalf of customers.",
        "All of the physical security and most of the data/network security are taken care of for you."
      ],
      correctAnswer: [0, 4],
      explanation: "AWS infrastructure gives you increasing speed and agility (you can deploy resources in minutes instead of weeks) and AWS handles all physical security and most network/data security at the infrastructure level, so you inherit that protection. You do still need to worry about your own security responsibilities (it's a shared model), you don't get complete control over physical infrastructure, and AWS doesn't operate your applications for you."
    },
    {
      id: "paper-01-015",
      domain: "ARC",
      topic: "decoupling",
      type: "single",
      question: "What is the advantage of the AWS-recommended practice of “decoupling” applications?",
      options: [
        "Allows treating an application as a single, cohesive unit.",
        "Reduces inter-dependencies so that failures do not impact other components of the application.",
        "Allows updates of any monolithic application quickly and easily.",
        "Allows tracking of any API call made to any AWS service."
      ],
      correctAnswer: [1],
      explanation: "Decoupling means designing application components to be loosely connected so that if one fails or needs maintenance, the others continue working — this reduces inter-dependencies and improves resilience. Decoupling is the opposite of treating an application as a single cohesive unit or monolith, and it's unrelated to tracking API calls (that's CloudTrail)."
    },
    {
      id: "paper-01-016",
      domain: "ACM",
      topic: "cost-reporting",
      type: "single",
      question: "Which of the following helps a customer view the Amazon EC2 billing activity for the past month?",
      options: [
        "AWS Budgets.",
        "AWS Pricing Calculator.",
        "AWS Systems Manager.",
        "AWS Cost & Usage Reports."
      ],
      correctAnswer: [3],
      explanation: "AWS Cost & Usage Reports provide detailed billing data, letting you view exactly what EC2 usage (and all other AWS usage) occurred in the past month. AWS Budgets set spending limits and alerts, the Pricing Calculator estimates future costs, and Systems Manager is for operational management — none show historical billing activity."
    },
    {
      id: "paper-01-017",
      domain: "ACM",
      topic: "consolidated-billing",
      type: "single",
      question: "What do you gain from setting up consolidated billing for five different AWS accounts under another master account?",
      options: [
        "AWS services’ costs will be reduced to half the original price.",
        "The consolidated billing feature is just for organizational purpose.",
        "Each AWS account gets volume discounts.",
        "Each AWS account gets five times the free-tier services capacity."
      ],
      correctAnswer: [2],
      explanation: "Consolidated billing pools the usage of all linked accounts, so each account benefits from volume discounts as if they were one larger customer (e.g., the more S3 storage total, the lower the per-GB rate everyone pays). AWS costs are not halved, consolidated billing is more than organizational (it's financial), and free-tier capacity does not multiply per account."
    },
    {
      id: "paper-01-018",
      domain: "STG",
      topic: "ebs",
      type: "multiple-select",
      question: "What should you do in order to keep the data on EBS volumes safe? (Choose TWO)",
      options: [
        "Regularly update firmware on EBS devices.",
        "Create EBS snapshots.",
        "Ensure that EBS data is encrypted at rest.",
        "Store a backup daily in an external drive.",
        "Prevent any unauthorized access to AWS data centers."
      ],
      correctAnswer: [1, 2],
      explanation: "To keep data on EBS volumes safe, create EBS snapshots (backups stored in S3) regularly and ensure EBS data is encrypted at rest so even if a volume is compromised, the data is protected. You cannot update firmware on EBS (AWS manages that), storing backups on an external drive defeats the purpose of cloud storage, and physical data-center access is AWS's responsibility, not yours."
    },
    {
      id: "paper-01-019",
      domain: "CLD",
      topic: "elasticity",
      type: "single",
      question: "One of the most important AWS best-practices to follow is the cloud architecture principle of elasticity. How does this principle improve your architecture’s design?",
      options: [
        "By automatically scaling your on-premises resources based on changes in demand.",
        "By automatically scaling your AWS resources using an Elastic Load Balancer.",
        "By reducing interdependencies between application components wherever possible.",
        "By automatically provisioning the required AWS resources based on changes in demand."
      ],
      correctAnswer: [3],
      explanation: "The principle of elasticity improves architecture by automatically provisioning (or de-provisioning) the required AWS resources based on changes in demand, so you always have the right capacity without over-provisioning. Elasticity is a cloud capability (on-premises can't auto-scale in this way), an Elastic Load Balancer distributes traffic but is not the elasticity principle itself, and reducing interdependencies is the decoupling principle."
    },
    {
      id: "paper-01-020",
      domain: "ACM",
      topic: "budgets",
      type: "multiple-select",
      question: "A startup company is operating on limited funds and is extremely concerned about cost overruns. Which of the below options can be used to notify the company when their monthly AWS bill exceeds $2000? (Choose TWO)",
      options: [
        "Setup a CloudWatch billing alarm that triggers an SNS notification when the threshold is exceeded.",
        "Configure the Amazon Simple Email Service to send billing alerts to their email address on a daily basis.",
        "Configure the AWS Budgets Service to alert the company when the threshold is exceeded.",
        "Configure AWS CloudTrail to automatically delete all AWS resources when the threshold is exceeded.",
        "Configure the Amazon Connect Service to alert the company when the threshold is exceeded."
      ],
      correctAnswer: [0, 2],
      explanation: "Both AWS Budgets and a CloudWatch billing alarm that triggers an SNS notification can alert the company when their monthly AWS bill exceeds a threshold like $2000. Amazon SES is for sending application emails (not automatic billing alerts), CloudTrail logs API activity (it can't delete resources), and Amazon Connect is a contact-center service — none of these send cost alerts."
    },
    {
      id: "paper-01-021",
      domain: "GLB",
      topic: "cloudfront",
      type: "single",
      question: "What does Amazon CloudFront use to distribute content to global users with low latency?",
      options: [
        "AWS Global Accelerator.",
        "AWS Regions.",
        "AWS Edge Locations.",
        "AWS Availability Zones."
      ],
      correctAnswer: [2],
      explanation: "Amazon CloudFront is AWS's Content Delivery Network (CDN), and it uses AWS Edge Locations around the world to cache and serve content close to users, achieving low latency globally. AWS Global Accelerator improves global routing but doesn't cache content, and Regions and Availability Zones are broader infrastructure concepts, not the caching layer CloudFront uses."
    },
    {
      id: "paper-01-022",
      domain: "IAM",
      topic: "least-privilege",
      type: "single",
      question: "What does the “Principle of Least Privilege” refer to?",
      options: [
        "You should grant your users only the permissions they need when they need them and nothing more.",
        "All IAM users should have at least the necessary permissions to access the core AWS services.",
        "All trusted IAM users should have access to any AWS service in the respective AWS account.",
        "IAM users should not be granted any permissions; to keep your account safe."
      ],
      correctAnswer: [0],
      explanation: "The Principle of Least Privilege means granting users only the permissions they need to do their job, and nothing more — this minimizes the risk of accidental or malicious misuse. It's not about giving all users access to core services or all trusted users full access, and it doesn't mean granting no permissions at all."
    },
    {
      id: "paper-01-023",
      domain: "CLD",
      topic: "cloud-models",
      type: "single",
      question: "Which of the following does NOT belong to the AWS Cloud Computing models?",
      options: [
        "Platform as a Service (PaaS).",
        "Infrastructure as a Service (IaaS).",
        "Software as a Service (SaaS).",
        "Networking as a Service (NaaS)."
      ],
      correctAnswer: [3],
      explanation: "The three standard cloud computing models are Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). 'Networking as a Service (NaaS)' is not an official AWS cloud computing model and does not belong to this list."
    },
    {
      id: "paper-01-024",
      domain: "S3",
      topic: "storage-classes",
      type: "single",
      question: "The identification process of an online financial services company requires that new users must complete an online interview with their security team. The completed recorded interviews are only required in the event of a legal issue or a regulatory compliance breach. What is the most cost-effective service to store the recorded videos?",
      options: [
        "S3 Intelligent-Tiering.",
        "AWS Marketplace.",
        "Amazon S3 Glacier Deep Archive.",
        "Amazon EBS."
      ],
      correctAnswer: [2],
      explanation: "Amazon S3 Glacier Deep Archive is the lowest-cost S3 storage class, designed for data that is rarely accessed and can tolerate retrieval times of several hours — perfect for compliance archives like recorded interviews. S3 Intelligent-Tiering automatically moves data between access tiers (more expensive for pure archival), AWS Marketplace is a software catalog, and EBS is block storage for EC2 (not archival storage)."
    },
    {
      id: "paper-01-025",
      domain: "GLB",
      topic: "route-53",
      type: "single",
      question: "Which service provides DNS in the AWS cloud?",
      options: [
        "Route 53.",
        "AWS Config.",
        "Amazon CloudFront.",
        "Amazon EMR."
      ],
      correctAnswer: [0],
      explanation: "Amazon Route 53 is AWS's DNS (Domain Name System) service, translating domain names into IP addresses and routing traffic to your resources. AWS Config tracks resource configurations, CloudFront is a CDN (not DNS), and EMR is a big-data processing service."
    },
    {
      id: "paper-01-026",
      domain: "SEC",
      topic: "ddos",
      type: "multiple-select",
      question: "Hundreds of thousands of DDoS attacks are recorded every month worldwide. What service does AWS provide to help protect AWS Customers from these attacks? (Choose TWO)",
      options: [
        "AWS Shield.",
        "AWS Config.",
        "Amazon Cognito.",
        "AWS WAF.",
        "AWS KMS."
      ],
      correctAnswer: [0, 3],
      explanation: "AWS Shield is AWS's managed DDoS protection service (Standard is free, Advanced provides enhanced protection), and AWS WAF (Web Application Firewall) filters malicious web traffic at the application layer — both help defend against DDoS attacks. AWS Config tracks resource compliance, Cognito handles user authentication, and KMS manages encryption keys — none directly protect against DDoS."
    },
    {
      id: "paper-01-027",
      domain: "DBA",
      topic: "elasticache",
      type: "single",
      question: "A company is deploying a new two-tier web application in AWS. Where should the most frequently accessed data be stored so that the application’s response time is optimal?",
      options: [
        "AWS OpsWorks.",
        "AWS Storage Gateway.",
        "Amazon EBS volume.",
        "Amazon ElastiCache."
      ],
      correctAnswer: [3],
      explanation: "Amazon ElastiCache is an in-memory caching service (Redis or Memcached) that stores frequently accessed data in RAM, delivering sub-millisecond response times and dramatically improving application performance. EBS is block storage attached to EC2 (slower than in-memory cache), Storage Gateway links on-premises storage to AWS, and OpsWorks is a configuration-management tool — none are in-memory caches."
    },
    {
      id: "paper-01-028",
      domain: "ACM",
      topic: "pricing-models",
      type: "single",
      question: "You want to run a questionnaire application for only one day (without interruption), which Amazon EC2 purchase option should you use?",
      options: [
        "Reserved instances.",
        "Spot instances.",
        "Dedicated instances.",
        "On-demand instances."
      ],
      correctAnswer: [3],
      explanation: "For a one-day workload that must run without interruption, On-Demand instances are the right choice: you pay by the hour/second with no commitment, and they won't be interrupted. Reserved instances require a 1- or 3-year commitment (wasteful for one day), Spot instances can be interrupted at any time (not reliable for 'no interruption'), and Dedicated instances are more expensive and meant for compliance, not cost-efficiency."
    },
    {
      id: "paper-01-029",
      domain: "ACM",
      topic: "spot-instances",
      type: "single",
      question: "You are working on a project that involves creating thumbnails of millions of images. Consistent uptime is not an issue, and continuous processing is not required. Which EC2 buying option would be the most cost-effective?",
      options: [
        "Reserved Instances.",
        "On-demand Instances.",
        "Dedicated Instances.",
        "Spot Instances."
      ],
      correctAnswer: [3],
      explanation: "Spot Instances are the most cost-effective EC2 option (up to 90% off On-Demand) for workloads that can tolerate interruptions, such as batch image processing where consistent uptime isn't required. Reserved Instances require a long-term commitment, On-Demand is more expensive than Spot for this use case, and Dedicated Instances are for compliance/licensing needs, not cost savings."
    },
    {
      id: "paper-01-030",
      domain: "GLB",
      topic: "cloudfront",
      type: "single",
      question: "Which of the following can be described as a global content delivery network (CDN) service?",
      options: [
        "AWS VPN.",
        "AWS Direct Connect.",
        "AWS Regions.",
        "Amazon CloudFront."
      ],
      correctAnswer: [3],
      explanation: "Amazon CloudFront is AWS's global Content Delivery Network (CDN), caching and delivering content from Edge Locations around the world to reduce latency. AWS VPN and Direct Connect are private network connections (not content delivery), and AWS Regions are the physical locations where AWS infrastructure is hosted, not a CDN service."
    },
    {
      id: "paper-01-031",
      domain: "SEC",
      topic: "artifact",
      type: "single",
      question: "Which of the following services allows customers to manage their agreements with AWS?",
      options: [
        "AWS Artifact.",
        "AWS Certificate Manager.",
        "AWS Systems Manager.",
        "AWS Organizations."
      ],
      correctAnswer: [0],
      explanation: "AWS Artifact provides on-demand access to AWS compliance reports and agreements (such as SOC reports, PCI attestations, and BAAs), letting customers manage their agreements and download compliance documentation. AWS Certificate Manager handles SSL/TLS certificates, Systems Manager is for operational management, and AWS Organizations manages multiple accounts — none handle compliance agreements."
    },
    {
      id: "paper-01-032",
      domain: "DBA",
      topic: "managed-services",
      type: "multiple-select",
      question: "Which of the following are examples of AWS-Managed Services, where AWS is responsible for the operational and maintenance burdens of running the service? (Choose TWO)",
      options: [
        "Amazon VPC.",
        "Amazon DynamoDB.",
        "Amazon Elastic MapReduce.",
        "AWS IAM.",
        "Amazon Elastic Compute Cloud."
      ],
      correctAnswer: [1, 2],
      explanation: "Amazon DynamoDB (a fully managed NoSQL database) and Amazon Elastic MapReduce / EMR (a managed big-data platform) are AWS-managed services where AWS handles provisioning, patching, and maintenance. Amazon VPC, IAM, and EC2 require more customer operational involvement (VPC is your network configuration, IAM is your access control, and EC2 instances need you to manage the OS)."
    },
    {
      id: "paper-01-033",
      domain: "DBA",
      topic: "dynamodb",
      type: "single",
      question: "Your company has a data store application that requires access to a NoSQL database. Which AWS database offering would meet this requirement?",
      options: [
        "Amazon Aurora.",
        "Amazon DynamoDB.",
        "Amazon Elastic Block Store.",
        "Amazon Redshift."
      ],
      correctAnswer: [1],
      explanation: "Amazon DynamoDB is AWS's fully managed NoSQL database, providing fast, flexible key-value and document data storage. Amazon Aurora is a relational (SQL) database, EBS is block storage (not a database), and Redshift is a data warehouse for analytics, not a transactional NoSQL database."
    },
    {
      id: "paper-01-034",
      domain: "ACM",
      topic: "support",
      type: "single",
      question: "As part of the Enterprise support plan, who is the primary point of contact for ongoing support needs?",
      options: [
        "AWS Identity and Access Management (IAM) user.",
        "Infrastructure Event Management (IEM) engineer.",
        "AWS Consulting Partners.",
        "Technical Account Manager (TAM)."
      ],
      correctAnswer: [3],
      explanation: "The Technical Account Manager (TAM) is the primary point of contact for ongoing support needs under the AWS Enterprise Support plan, providing proactive guidance and coordinating with AWS teams on your behalf. An IAM user is not a support contact, Infrastructure Event Management engineers assist with specific events, and AWS Consulting Partners are external, not included in the support plan."
    },
    {
      id: "paper-01-035",
      domain: "ACM",
      topic: "cost-explorer",
      type: "single",
      question: "How can you view the distribution of AWS spending in one of your AWS accounts?",
      options: [
        "By using Amazon VPC console.",
        "By contacting the AWS Support team.",
        "By using AWS Cost Explorer.",
        "By contacting the AWS Finance team."
      ],
      correctAnswer: [2],
      explanation: "AWS Cost Explorer is a visual tool that lets you view and analyze how your AWS spending is distributed across services, accounts, and time periods. The VPC console manages network resources, and neither the AWS Support team nor the AWS Finance team provide self-service spending breakdowns (Cost Explorer does)."
    },
    {
      id: "paper-01-036",
      domain: "IAM",
      topic: "cli",
      type: "single",
      question: "Which of the following must an IAM user provide to interact with AWS services using the AWS Command Line Interface (AWS CLI)?",
      options: [
        "Access keys.",
        "Secret token.",
        "UserID.",
        "User name and password."
      ],
      correctAnswer: [0],
      explanation: "To interact with AWS services using the AWS Command Line Interface (CLI), an IAM user must provide access keys (an Access Key ID and Secret Access Key) which authenticate the CLI commands. A secret token, UserID, or username and password are not the credentials the CLI requires."
    },
    {
      id: "paper-01-037",
      domain: "ACM",
      topic: "support",
      type: "single",
      question: "You have AWS Basic support, and you have discovered that some AWS resources are being used maliciously, and those resources could potentially compromise your data. What should you do?",
      options: [
        "Contact the AWS Customer Service team.",
        "Contact the AWS Abuse team.",
        "Contact the AWS Concierge team.",
        "Contact the AWS Security team."
      ],
      correctAnswer: [1],
      explanation: "If AWS resources are being used maliciously, contact the AWS Abuse team, which handles reports of abusive behavior such as spamming, port scanning, or compromised resources. AWS Customer Service handles billing/account issues, the Concierge is for Enterprise billing help, and there is no general 'AWS Security team' contact for abuse reports."
    },
    {
      id: "paper-01-038",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "multiple-select",
      question: "Select TWO examples of the AWS shared controls.",
      options: [
        "Patch Management.",
        "IAM Management.",
        "VPC Management.",
        "Configuration Management.",
        "Data Center operations."
      ],
      correctAnswer: [0, 3],
      explanation: "Shared controls are security responsibilities that both AWS and the customer implement in their respective layers. Patch Management and Configuration Management are both shared controls: AWS patches the underlying infrastructure, while the customer patches guest OSes and applications. IAM Management, VPC Management, and Data Center operations are not shared — IAM and VPC are customer-managed, and data-center operations are AWS-only."
    },
    {
      id: "paper-01-039",
      domain: "ELB",
      topic: "high-availability",
      type: "multiple-select",
      question: "In order to implement best practices when dealing with a “Single Point of Failure,” you should attempt to build as much automation as possible in both detecting and reacting to failure. Which of the following AWS services would help? (Choose TWO)",
      options: [
        "ELB.",
        "Auto Scaling.",
        "Amazon Athen.",
        "ECR.",
        "Amazon EC2."
      ],
      correctAnswer: [0, 1],
      explanation: "To handle Single Points of Failure with automation, use Elastic Load Balancing (ELB) to detect unhealthy instances and route traffic away from them, and Auto Scaling to automatically replace failed instances or add capacity. Amazon Athena is a query service, ECR is a container image registry, and EC2 alone (without ELB/Auto Scaling) doesn't provide automatic failure detection/reaction."
    },
    {
      id: "paper-01-040",
      domain: "GLB",
      topic: "cloudfront",
      type: "single",
      question: "A company is planning to host an educational website on AWS. Their video courses will be streamed all around the world. Which of the following AWS services will help achieve high transfer speeds?",
      options: [
        "Amazon SNS.",
        "Amazon Kinesis Video Streams.",
        "AWS CloudFormation.",
        "Amazon CloudFront."
      ],
      correctAnswer: [3],
      explanation: "Amazon CloudFront is AWS's Content Delivery Network that caches video content at Edge Locations around the world, enabling high transfer speeds and low latency for global viewers. SNS is a pub/sub messaging service, Kinesis Video Streams ingests video for processing (not streaming to viewers), and CloudFormation is an infrastructure-as-code tool — none deliver content globally like CloudFront."
    },
    {
      id: "paper-01-041",
      domain: "DBA",
      topic: "aurora",
      type: "single",
      question: "A developer is planning to build a two-tier web application that has a MySQL database layer. Which of the following AWS database services would provide automated backups for the application?",
      options: [
        "A MySQL database installed on an EC2 instance.",
        "Amazon Aurora.",
        "Amazon DynamoDB.",
        "Amazon Neptune."
      ],
      correctAnswer: [1],
      explanation: "Amazon Aurora is a fully managed, MySQL- and PostgreSQL-compatible relational database that provides automated backups, point-in-time recovery, and high availability out of the box. A MySQL database on EC2 requires you to manage backups yourself, DynamoDB is NoSQL (not MySQL), and Neptune is a graph database."
    },
    {
      id: "paper-01-042",
      domain: "DEP",
      topic: "cloudformation",
      type: "single",
      question: "What is the AWS service that enables AWS architects to manage infrastructure as code?",
      options: [
        "AWS CloudFormation.",
        "AWS Config.",
        "Amazon SES.",
        "Amazon EMR."
      ],
      correctAnswer: [0],
      explanation: "AWS CloudFormation is the infrastructure-as-code service that lets AWS architects define and manage infrastructure using templates (JSON or YAML), automatically provisioning resources in a repeatable, version-controlled way. AWS Config records resource configurations for auditing (not provisioning), SES is for sending email, and EMR is for big-data processing."
    },
    {
      id: "paper-01-043",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "Under the shared responsibility model, which of the following is the responsibility of AWS?",
      options: [
        "Client-side encryption.",
        "Configuring infrastructure devices.",
        "Server-side encryption.",
        "Filtering traffic with Security Groups."
      ],
      correctAnswer: [1],
      explanation: "Under the Shared Responsibility Model, AWS is responsible for configuring and maintaining the infrastructure devices (routers, firewalls, load balancers, etc.) that run the AWS cloud. Client-side encryption, server-side encryption choices, and configuring Security Groups are all customer responsibilities."
    },
    {
      id: "paper-01-044",
      domain: "MON",
      topic: "health-dashboard",
      type: "multiple-select",
      question: "What does the AWS Health Dashboard provide? (Choose TWO)",
      options: [
        "Detailed troubleshooting guidance to address AWS events impacting your resources.",
        "Health checks for Auto Scaling instances.",
        "Recommendations for Cost Optimization.",
        "A dashboard detailing vulnerabilities in your applications.",
        "Personalized view of AWS service health."
      ],
      correctAnswer: [0, 4],
      explanation: "The AWS Health Dashboard provides a personalized view of the health of AWS services affecting your resources and detailed troubleshooting guidance to address events impacting you. It does not perform health checks for Auto Scaling instances (Auto Scaling does that), provide cost-optimization recommendations (Trusted Advisor does), or detail application vulnerabilities."
    },
    {
      id: "paper-01-045",
      domain: "MON",
      topic: "cloudwatch",
      type: "single",
      question: "You have deployed your application on multiple Amazon EC2 instances. Your customers complain that sometimes they can’t reach your application. Which AWS service allows you to monitor the performance of your EC2 instances to assist in troubleshooting these issues?",
      options: [
        "AWS Lambda.",
        "AWS Config.",
        "Amazon CloudWatch.",
        "AWS CloudTrail."
      ],
      correctAnswer: [2],
      explanation: "Amazon CloudWatch collects and monitors metrics (CPU, network, disk, custom metrics) from your EC2 instances, letting you troubleshoot performance issues and set alarms. AWS Lambda is a serverless compute service, AWS Config tracks resource configuration changes, and CloudTrail logs API activity — none directly monitor EC2 instance performance metrics."
    },
    {
      id: "paper-01-046",
      domain: "ACM",
      topic: "trusted-advisor",
      type: "single",
      question: "Your company is developing a critical web application in AWS, and the security of the application is a top priority. Which of the following AWS services will provide infrastructure security optimization recommendations?",
      options: [
        "AWS Shield.",
        "AWS Management Console.",
        "AWS Secrets Manager.",
        "AWS Trusted Advisor."
      ],
      correctAnswer: [3],
      explanation: "AWS Trusted Advisor inspects your AWS environment and provides recommendations across five categories, including security optimizations like exposed access keys, overly permissive Security Groups, or unused IAM credentials. AWS Shield is DDoS protection, the Management Console is the web UI, and Secrets Manager stores secrets — none provide infrastructure security recommendations."
    },
    {
      id: "paper-01-047",
      domain: "S3",
      topic: "s3",
      type: "multiple-select",
      question: "Which of the following is not a benefit of Amazon S3? (Choose TWO)",
      options: [
        "Amazon S3 provides unlimited storage for any type of data.",
        "Amazon S3 can run any type of application or backend system.",
        "Amazon S3 stores any number of objects, but with object size limits.",
        "Amazon S3 can be scaled manually to store and retrieve any amount of data from anywhere.",
        "Amazon S3 provides 99.999999999% (11 9’s) of data durability."
      ],
      correctAnswer: [1, 3],
      explanation: "Amazon S3 does NOT run applications or backend systems (it's object storage, not compute), and S3 scales automatically — you never manually scale it. S3 does provide virtually unlimited storage, stores any number of objects (though with a 5 TB maximum per object), and delivers 99.999999999% durability (11 nines)."
    },
    {
      id: "paper-01-048",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "multiple-select",
      question: "In the AWS Shared responsibility Model, which of the following are the responsibility of the customer? (Choose TWO)",
      options: [
        "Disk disposal.",
        "Controlling physical access to compute resources.",
        "Patching the Network infrastructure.",
        "Setting password complexity rules.",
        "Configuring network access rules."
      ],
      correctAnswer: [3, 4],
      explanation: "Under the AWS Shared Responsibility Model, customers are responsible for security 'in' the cloud, including setting password complexity rules (IAM password policies) and configuring network access rules (Security Groups, NACLs). Disk disposal, controlling physical access to compute hardware, and patching the network infrastructure are all AWS's responsibility."
    },
    {
      id: "paper-01-049",
      domain: "OTH",
      topic: "quick-starts",
      type: "single",
      question: "What does AWS provide to deploy popular technologies such as IBM MQ on AWS with the least amount of effort and time?",
      options: [
        "Amazon Aurora.",
        "Amazon CloudWatch.",
        "AWS Quick Start reference deployments.",
        "AWS OpsWorks."
      ],
      correctAnswer: [2],
      explanation: "AWS Quick Start reference deployments are pre-built CloudFormation templates and architecture guides created by AWS and partners to deploy popular technologies (like IBM MQ, SAP, Hadoop) on AWS quickly, following best practices. Amazon Aurora is a database, CloudWatch monitors resources, and OpsWorks is a configuration-management tool using Chef/Puppet — none are Quick Starts."
    },
    {
      id: "paper-01-050",
      domain: "ACM",
      topic: "reserved-instances",
      type: "single",
      question: "An organization has decided to purchase an Amazon EC2 Reserved Instance (RI) for three years in order to reduce costs. It is possible that the application workloads could change during the reservation period. What is the EC2 Reserved Instance (RI) type that will allow the company to exchange the purchased reserved instance for another reserved instance with higher computing power if they need to?",
      options: [
        "Elastic RI.",
        "Premium RI.",
        "Standard RI.",
        "Convertible RI."
      ],
      correctAnswer: [3],
      explanation: "A Convertible Reserved Instance lets you exchange the RI for another RI with different instance attributes (like higher computing power) during the reservation term, giving flexibility if workloads change. There is no such thing as 'Elastic RI' or 'Premium RI,' and Standard RIs do not allow exchanges for different instance types."
    }
  ]
});
