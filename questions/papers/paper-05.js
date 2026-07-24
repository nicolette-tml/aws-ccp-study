window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "paper-05",
  paperId: "paper-05",
  paperName: "Practice Paper 5",
  questions: [
    {
      id: "paper-05-001",
      domain: "ARC",
      topic: "fault-tolerance",
      type: "single",
      question: "A company is using EC2 Instances to run their e-commerce site on the AWS platform. If the site becomes unavailable, the company will lose a significant amount of money for each minute the site is unavailable. Which design principle should the company use to minimize the risk of an outage?",
      options: [
        "Least Privilege.",
        "Pilot Light.",
        "Fault Tolerance.",
        "Multi-threading."
      ],
      correctAnswer: [2],
      explanation: "Fault tolerance is the design principle that lets a system continue operating even when a component fails, which minimizes the risk of a costly outage for a revenue-critical e-commerce site. Least privilege is a security concept unrelated to availability, pilot light is a disaster-recovery strategy pattern rather than a general design principle, and multi-threading is a software concurrency technique, not an AWS architectural design principle."
    },
    {
      id: "paper-05-002",
      domain: "ACM",
      topic: "reserved-instances",
      type: "single",
      question: "You decide to buy a reserved instance for a term of one year. Which option provides the largest total discount?",
      options: [
        "All up-front reservation.",
        "All reserved instance payment options provide the same discount level.",
        "Partial up-front reservation.",
        "No up-front reservation."
      ],
      correctAnswer: [0],
      explanation: "Paying all-upfront for a Reserved Instance provides the largest total discount because AWS rewards the greatest upfront commitment with the lowest effective hourly rate. Partial upfront and no upfront options offer progressively smaller discounts since less capital is committed at purchase time, so the claim that all payment options provide the same discount is incorrect."
    },
    {
      id: "paper-05-003",
      domain: "SEC",
      topic: "data-security",
      type: "multiple-select",
      question: "What features does AWS offer to help protect your data in the Cloud? (Choose TWO)",
      options: [
        "Access control.",
        "Physical MFA devices.",
        "Data encryption.",
        "Unlimited storage.",
        "Load balancing."
      ],
      correctAnswer: [0, 2],
      explanation: "AWS provides access control (via IAM policies) and data encryption (via services like KMS) as core features to help protect customer data in the cloud. Physical MFA devices are an authentication mechanism, not a data-protection feature; unlimited storage is not a real AWS offering; and load balancing addresses availability and traffic distribution, not data protection."
    },
    {
      id: "paper-05-004",
      domain: "EC2",
      topic: "ec2",
      type: "single",
      question: "An AWS customer has used one Amazon Linux instance for 2 hours, 5 minutes and 9 seconds, and one CentOS instance for 4 hours, 23 minutes and 7 seconds. How much time will the customer be billed for?",
      options: [
        "3 hours for the Linux instance and 5 hours for the CentOS instance.",
        "2 hours, 5 minutes and 9 seconds for the Linux instance and 4 hours, 23 minutes and 7 seconds for the CentOS instance.",
        "2 hours, 5 minutes and 9 seconds for the Linux instance and 5 hours for the CentOS instance.",
        "3 hours for the Linux instance and 4 hours, 23 minutes and 7 seconds for the CentOS instance."
      ],
      correctAnswer: [2],
      explanation: "AWS bills Linux instances by the exact second (with a one-minute minimum), so the Amazon Linux instance is billed for the precise 2 hours, 5 minutes, 9 seconds used; Windows and other non-Amazon-Linux OS instances like CentOS are billed by the hour, rounding up to the next full hour, so the CentOS instance is billed for 5 hours. The other options either round both instances incorrectly or fail to round the CentOS usage up to the hour."
    },
    {
      id: "paper-05-005",
      domain: "ACM",
      topic: "support",
      type: "single",
      question: "What is the AWS Support feature that allows customers to manage support cases programmatically?",
      options: [
        "AWS Trusted Advisor.",
        "AWS Operations Support.",
        "AWS Support API.",
        "AWS Personal Health Dashboard."
      ],
      correctAnswer: [2],
      explanation: "The AWS Support API allows customers to programmatically create, manage, and monitor AWS Support cases, which is exactly the capability described. AWS Trusted Advisor gives best-practice recommendations, there is no AWS service called 'Operations Support', and the Personal Health Dashboard reports on service events affecting your resources rather than managing support cases."
    },
    {
      id: "paper-05-006",
      domain: "IAM",
      topic: "iam",
      type: "multiple-select",
      question: "Which methods can be used by customers to interact with AWS Identity and Access Management (IAM)? (Choose TWO)",
      options: [
        "AWS CLI.",
        "AWS Security Groups.",
        "AWS SDKs.",
        "AWS Network Access Control Lists.",
        "AWS CodeCommit."
      ],
      correctAnswer: [0, 2],
      explanation: "Customers can interact with IAM programmatically or from the command line using the AWS CLI and the AWS SDKs, both of which support IAM API operations. Security Groups and Network ACLs are VPC networking controls, not IAM interaction methods, and AWS CodeCommit is a source-control service unrelated to managing IAM."
    },
    {
      id: "paper-05-007",
      domain: "IAM",
      topic: "iam",
      type: "multiple-select",
      question: "Which of the following are types of AWS Identity and Access Management (IAM) identities? (Choose TWO)",
      options: [
        "AWS Resource Groups.",
        "IAM Policies.",
        "IAM Roles.",
        "IAM Users.",
        "AWS Organizations."
      ],
      correctAnswer: [2, 3],
      explanation: "IAM Roles and IAM Users are both types of IAM identities that can be granted permissions to interact with AWS resources. AWS Resource Groups organize resources for management purposes, IAM Policies are documents that define permissions (not identities themselves), and AWS Organizations manages multiple accounts, none of which are IAM identity types."
    },
    {
      id: "paper-05-008",
      domain: "DBA",
      topic: "rds",
      type: "single",
      question: "Which of the following Amazon RDS features facilitates offloading of database read activity?",
      options: [
        "Database Snapshots.",
        "Multi-AZ Deployments.",
        "Automated Backups.",
        "Read Replicas."
      ],
      correctAnswer: [3],
      explanation: "Amazon RDS Read Replicas offload read traffic from the primary database instance by serving read queries from one or more asynchronously replicated copies, improving performance for read-heavy workloads. Database snapshots and automated backups are for data durability and recovery, not read offloading, and Multi-AZ deployments exist for high availability/failover rather than distributing read traffic."
    },
    {
      id: "paper-05-009",
      domain: "SEC",
      topic: "security-bulletins",
      type: "single",
      question: "How does AWS notify customers about security and privacy events pertaining to AWS services?",
      options: [
        "Using the AWS ACM service.",
        "Using Security Bulletins.",
        "Using the AWS Management Console.",
        "Using Compliance Resources."
      ],
      correctAnswer: [1],
      explanation: "AWS publishes Security Bulletins to notify customers about security and privacy events relevant to AWS services. AWS Certificate Manager (ACM) issues SSL/TLS certificates and is unrelated to notifications, the Management Console is simply the administrative interface, and Compliance Resources provide audit and compliance documentation rather than event notifications."
    },
    {
      id: "paper-05-010",
      domain: "IAM",
      topic: "iam",
      type: "single",
      question: "Which IAM entity can best be used to grant temporary access to your AWS resources?",
      options: [
        "IAM Users.",
        "Key Pair.",
        "IAM Roles.",
        "IAM Groups."
      ],
      correctAnswer: [2],
      explanation: "IAM Roles are the best mechanism for granting temporary access to AWS resources because they issue short-term security credentials that expire, rather than long-term credentials. IAM Users and Key Pairs represent long-term identity/credential mechanisms, and IAM Groups are simply collections of users used to manage permissions, not a way to grant temporary access."
    },
    {
      id: "paper-05-011",
      domain: "ELB",
      topic: "elb",
      type: "single",
      question: "A company has a web application that is hosted on a single EC2 instance and is approaching 100 percent CPU Utilization during peak loads. Rather than scaling the server vertically, the company has decided to deploy three Amazon EC2 instances in parallel and to distribute traffic across the three servers. What AWS Service should the company use to distribute the traffic evenly?",
      options: [
        "AWS Global Accelerator.",
        "AWS Application Load Balancer (ALB).",
        "Amazon CloudFront.",
        "Transit VPC."
      ],
      correctAnswer: [1],
      explanation: "An Application Load Balancer distributes incoming traffic evenly across multiple EC2 instances, which is exactly what's needed to spread load across the three parallel instances. AWS Global Accelerator improves global network performance/routing rather than distributing traffic among instances in one location, Amazon CloudFront is a content delivery network for caching content, and Transit VPC is a networking pattern for connecting multiple VPCs, not a load-balancing service."
    },
    {
      id: "paper-05-012",
      domain: "DEP",
      topic: "cloudformation",
      type: "single",
      question: "Which of the following approaches will help you eliminate human error and automate the process of creating and updating your AWS environment?",
      options: [
        "Use Software test automation tools.",
        "Use AWS CodeDeploy to build and automate your AWS environment.",
        "Use code to provision and operate your AWS infrastructure.",
        "Migrate all of your applications to a dedicated host."
      ],
      correctAnswer: [2],
      explanation: "Using code to provision and operate infrastructure (Infrastructure as Code, e.g., via AWS CloudFormation) eliminates manual, error-prone steps and automates environment creation and updates. Software test automation tools test application code rather than provision infrastructure, AWS CodeDeploy automates application deployments but not full environment provisioning, and migrating to a dedicated host does not address automation of infrastructure changes."
    },
    {
      id: "paper-05-013",
      domain: "IAM",
      topic: "mfa",
      type: "single",
      question: "A company is seeking to better secure its AWS account from unauthorized access. Which of the below options can the customer use to achieve this goal?",
      options: [
        "Restrict any API call made through SDKs or CLI.",
        "Create one IAM account for each department in the company (Development, QA, Production), and share it across all staff in that department.",
        "Require Multi-Factor Authentication (MFA) for all IAM User access.",
        "Set up two login passwords."
      ],
      correctAnswer: [2],
      explanation: "Requiring Multi-Factor Authentication for all IAM User access adds a critical extra layer of security beyond passwords, directly reducing the risk of unauthorized account access. Restricting all API calls made via SDKs or CLI would break legitimate automation without stopping unauthorized console access, sharing one IAM account across a department violates least privilege and traceability, and 'two login passwords' is not a real AWS security mechanism."
    },
    {
      id: "paper-05-014",
      domain: "S3",
      topic: "s3",
      type: "single",
      question: "Which AWS Service offers volume discounts based on usage?",
      options: [
        "Amazon VPC.",
        "Amazon S3.",
        "Amazon Lightsail.",
        "AWS Cost Explorer."
      ],
      correctAnswer: [1],
      explanation: "Amazon S3 offers volume/tiered pricing discounts where the per-GB storage cost decreases as usage increases. Amazon VPC has no usage-based volume discount pricing, Amazon Lightsail uses fixed bundle pricing rather than volume discounts, and AWS Cost Explorer is a cost-visibility tool, not a service with its own volume-discount pricing."
    },
    {
      id: "paper-05-015",
      domain: "GLB",
      topic: "regions",
      type: "multiple-select",
      question: "Which of the following factors should be considered when determining the region in which AWS Resources will be deployed? (Choose TWO)",
      options: [
        "The AWS Region’s security level.",
        "Data sovereignty.",
        "Cost.",
        "The planned number of VPCs.",
        "Geographic proximity to the company’s location."
      ],
      correctAnswer: [1, 2],
      explanation: "When choosing a Region, companies must weigh data sovereignty/compliance requirements and the cost of running resources in that Region, both of which vary by location. Security level is largely consistent across all AWS Regions, the number of VPCs a company plans to create is a design decision independent of Region choice, and while proximity affects latency it is a less standard/complete factor than the two AWS-emphasized considerations of compliance and cost in this context."
    },
    {
      id: "paper-05-016",
      domain: "DBA",
      topic: "elasticache",
      type: "single",
      question: "You are running a financial services web application on AWS. The application uses a MySQL database to store the data. Which of the following AWS services would improve the performance of your application by allowing you to retrieve information from fast in-memory caches?",
      options: [
        "Amazon EFS.",
        "Amazon Neptune.",
        "Amazon ElastiCache.",
        "DAX."
      ],
      correctAnswer: [2],
      explanation: "Amazon ElastiCache is an in-memory caching service that sits in front of databases like MySQL to serve frequently accessed data from fast in-memory stores, improving application performance. Amazon EFS is a file storage service, Amazon Neptune is a graph database, and DAX is specifically an in-memory cache for DynamoDB, not for MySQL-based RDS databases."
    },
    {
      id: "paper-05-017",
      domain: "ELB",
      topic: "auto-scaling",
      type: "single",
      question: "What are the advantages of using Auto Scaling Groups for EC2 instances?",
      options: [
        "Auto Scaling Groups caches the most recent responses at global edge locations to reduce latency and improve performance.",
        "Auto Scaling Groups scales EC2 instances in multiple Availability Zones to increase application availability and fault tolerance.",
        "Auto Scaling Groups scales EC2 instances across multiple regions to reduce latency for global users.",
        "Auto Scaling Groups distributes application traffic across multiple Availability Zones to enhance performance."
      ],
      correctAnswer: [1],
      explanation: "Auto Scaling Groups launch and terminate EC2 instances across multiple Availability Zones automatically, increasing both the availability and fault tolerance of an application. Caching content at edge locations describes CloudFront, scaling across multiple regions is not a native Auto Scaling Group capability, and distributing traffic across AZs describes the role of a load balancer, not Auto Scaling itself."
    },
    {
      id: "paper-05-018",
      domain: "ACM",
      topic: "tco",
      type: "single",
      question: "The TCO gap between AWS infrastructure and traditional infrastructure has widened over the recent years. Which of the following could be the reason for that?",
      options: [
        "AWS helps customers invest more in capital expenditures.",
        "AWS automates all infrastructure operations, so customers save more on human resources costs.",
        "AWS continues to lower the cost of cloud computing for its customers.",
        "AWS secures AWS resources at no additional charge."
      ],
      correctAnswer: [2],
      explanation: "AWS continuously lowers its prices through economies of scale and infrastructure efficiency improvements, which widens the total cost of ownership gap in favor of AWS over time. AWS actually helps customers shift away from capital expenditures (not invest more in them), AWS does not automate all infrastructure operations, and customers still pay for many security-related services and features, so security is not entirely free."
    },
    {
      id: "paper-05-019",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "multiple-select",
      question: "Which of the following are examples of the customer’s responsibility to implement “security IN the cloud”? (Choose TWO)",
      options: [
        "Building a schema for an application.",
        "Replacing physical hardware.",
        "Creating a new hypervisor.",
        "Patch management of the underlying infrastructure.",
        "File system encryption."
      ],
      correctAnswer: [0, 4],
      explanation: "Under the Shared Responsibility Model, 'security IN the cloud' tasks like building an application's data schema and implementing file system encryption are the customer's responsibility. Replacing physical hardware and creating hypervisors are part of 'security OF the cloud' handled by AWS, and patch management of the underlying infrastructure (host OS, hypervisor) is also an AWS responsibility, not the customer's."
    },
    {
      id: "paper-05-020",
      domain: "IAM",
      topic: "mfa",
      type: "single",
      question: "Which of the following is a type of MFA device that customers can use to protect their AWS resources?",
      options: [
        "AWS CloudHSM.",
        "U2F Security Key.",
        "AWS Access Keys.",
        "AWS Key Pair."
      ],
      correctAnswer: [1],
      explanation: "A U2F Security Key is a physical hardware device that can be used as an MFA method to protect AWS account access. AWS CloudHSM is a dedicated hardware module for cryptographic key management, AWS Access Keys are long-term programmatic credentials, and an AWS Key Pair is used for SSH access to EC2 instances — none of these are MFA devices."
    },
    {
      id: "paper-05-021",
      domain: "CMP",
      topic: "elastic-beanstalk",
      type: "single",
      question: "A company is seeking to deploy an existing .NET application onto AWS as quickly as possible. Which AWS Service should the customer use to achieve this goal?",
      options: [
        "Amazon SNS.",
        "AWS Elastic Beanstalk.",
        "AWS Systems Manager.",
        "AWS Trusted Advisor."
      ],
      correctAnswer: [1],
      explanation: "AWS Elastic Beanstalk lets developers quickly deploy and manage applications, including .NET applications, by simply uploading code while AWS handles the underlying infrastructure provisioning. Amazon SNS is a messaging/notification service, AWS Systems Manager is used for operational management of existing infrastructure, and AWS Trusted Advisor provides best-practice recommendations, none of which deploy applications."
    },
    {
      id: "paper-05-022",
      domain: "ACM",
      topic: "pricing-models",
      type: "multiple-select",
      question: "Which of the following is NOT a factor when estimating the costs of Amazon EC2? (Choose TWO)",
      options: [
        "The amount of time the instances will be running.",
        "Number of security groups.",
        "Allocated Elastic IP Addresses.",
        "Number of Hosted Zones.",
        "Number of instances."
      ],
      correctAnswer: [1, 3],
      explanation: "The number of security groups and the number of Route 53 hosted zones are not factors in estimating EC2 costs, since security groups are free and hosted zones are billed under Route 53, not EC2. The amount of running time, allocated Elastic IP addresses (when unattached or excess), and the number of instances are all legitimate cost factors for EC2."
    },
    {
      id: "paper-05-023",
      domain: "S3",
      topic: "storage-gateway",
      type: "single",
      question: "Which AWS Service helps enterprises extend their on-premises storage to AWS in a cost-effective manner?",
      options: [
        "AWS Data Pipeline.",
        "AWS Storage Gateway.",
        "Amazon Aurora.",
        "Amazon EFS."
      ],
      correctAnswer: [1],
      explanation: "AWS Storage Gateway is a hybrid cloud storage service that connects on-premises environments to AWS storage, extending on-premises storage cost-effectively. AWS Data Pipeline orchestrates data movement and transformation workflows, Amazon Aurora is a relational database, and Amazon EFS is a cloud-native file system, none of which extend on-premises storage to AWS."
    },
    {
      id: "paper-05-024",
      domain: "S3",
      topic: "s3",
      type: "single",
      question: "A company is building an online cloud storage platform. They need a storage service that can scale capacity automatically, while minimizing cost. Which AWS storage service should the company use to meet these requirements?",
      options: [
        "Amazon Simple Storage Service.",
        "Amazon Elastic Block Store.",
        "Amazon Elastic Container Service.",
        "AWS Storage Gateway."
      ],
      correctAnswer: [0],
      explanation: "Amazon S3 automatically scales storage capacity as needed and charges only for what is used, making it a cost-effective, scalable choice for an online storage platform. Amazon EBS requires provisioning fixed volume sizes upfront, Amazon ECS is a container orchestration service unrelated to storage, and AWS Storage Gateway is designed for hybrid on-premises-to-cloud storage, not a cloud-native storage platform."
    },
    {
      id: "paper-05-025",
      domain: "IAM",
      topic: "least-privilege",
      type: "single",
      question: "You have just hired a skilled sys-admin to join your team. As usual, you have created a new IAM user for him to interact with AWS services. On his first day, you ask him to create snapshots of all existing Amazon EBS volumes and save them in a new Amazon S3 bucket. However, the new member reports back that he is unable to create neither EBS snapshots nor S3 buckets. What might prevent him from doing this simple task?",
      options: [
        "EBS and S3 are accessible only to the root account owner.",
        "The systems administrator must contact AWS Support first to activate his new IAM account.",
        "There is not enough space in S3 to store the snapshots.",
        "There is a non-explicit deny to all new users."
      ],
      correctAnswer: [3],
      explanation: "By default, new IAM users have no permissions at all — there is an implicit (non-explicit) deny on every action until permissions are explicitly granted, which is why the new sys-admin cannot create EBS snapshots or S3 buckets. EBS and S3 are not restricted to the root account only, there's no requirement to contact AWS Support to activate a new IAM user, and S3 storage capacity is effectively unlimited, so lack of space is not the issue."
    },
    {
      id: "paper-05-026",
      domain: "MON",
      topic: "cloudtrail",
      type: "single",
      question: "An external auditor is requesting a log of all accesses to the AWS resources in the company’s account. Which of the following services will provide the auditor with the requested information?",
      options: [
        "AWS CloudTrail.",
        "Amazon CloudFront.",
        "AWS CloudFormation.",
        "Amazon CloudWatch."
      ],
      correctAnswer: [0],
      explanation: "AWS CloudTrail logs every API call and access made to resources in an AWS account, providing the audit trail an external auditor needs. Amazon CloudFront is a content delivery network, AWS CloudFormation is an infrastructure-as-code service, and Amazon CloudWatch monitors performance metrics and logs rather than recording API-level access history."
    },
    {
      id: "paper-05-027",
      domain: "OTH",
      topic: "cloud-directory",
      type: "single",
      question: "Which of the below options is true of Amazon Cloud Directory?",
      options: [
        "Amazon Cloud Directory allows the organization of hierarchies of data across multiple dimensions.",
        "Amazon Cloud Directory enables the analysis of video and data streams in real time.",
        "Amazon Cloud Directory allows users to access AWS with their existing Active Directory credentials.",
        "Amazon Cloud Directory allows for registration and management of domain names."
      ],
      correctAnswer: [0],
      explanation: "Amazon Cloud Directory is a managed directory service that lets you organize and query hierarchies of data across multiple dimensions, such as organizational charts or course catalogs. Real-time video/data stream analysis describes Amazon Kinesis, using Active Directory credentials to access AWS describes AWS Directory Service (AD Connector), and domain name registration/management describes Amazon Route 53."
    },
    {
      id: "paper-05-028",
      domain: "ACM",
      topic: "support",
      type: "single",
      question: "A user has opened a “Production System Down” support case to get help from AWS Support after a production system disruption. What is the expected response time for this type of support case?",
      options: [
        "12 hours.",
        "15 minutes.",
        "24 hours.",
        "One hour."
      ],
      correctAnswer: [3],
      explanation: "For a 'Production System Down' case under a support plan with the fastest response commitment, AWS guarantees a response within one hour (available with the Business Support plan, or Enterprise Support). 12 hours, 15 minutes, and 24 hours do not correspond to the standard one-hour response commitment for this severity level."
    },
    {
      id: "paper-05-029",
      domain: "ELB",
      topic: "high-availability",
      type: "single",
      question: "Which of the below options is a best practice for making your application on AWS highly available?",
      options: [
        "Deploy the application to at least two Availability Zones.",
        "Use Elastic Load Balancing (ELB) across multiple AWS Regions.",
        "Deploy the application code on at least two servers in the same Availability Zone.",
        "Rewrite the application code to handle all incoming requests."
      ],
      correctAnswer: [0],
      explanation: "Deploying an application across at least two Availability Zones is a best practice for high availability because it protects against the failure of a single data center. Using ELB across multiple Regions is not how Elastic Load Balancers work (an ELB operates within a single Region), deploying servers in a single Availability Zone does not protect against an AZ-level failure, and rewriting application code does not by itself provide infrastructure-level high availability."
    },
    {
      id: "paper-05-030",
      domain: "ACM",
      topic: "tco",
      type: "multiple-select",
      question: "Which of the following should be taken into account when performing a TCO analysis regarding the costs of running an application on AWS VS on-premises? (Choose TWO)",
      options: [
        "Labor and IT costs.",
        "Cooling and power consumption.",
        "Amazon EBS computing power.",
        "Software architecture.",
        "Software compatibility."
      ],
      correctAnswer: [0, 1],
      explanation: "A TCO analysis comparing AWS to on-premises should account for labor/IT staffing costs and facility costs like cooling and power consumption, since these are ongoing on-premises expenses that AWS eliminates. Amazon EBS computing power is not a meaningful TCO metric, and software architecture and software compatibility are technical design considerations rather than cost factors in a TCO analysis."
    },
    {
      id: "paper-05-031",
      domain: "ACM",
      topic: "support",
      type: "single",
      question: "Your company requires a response time of less than 15 minutes from support interactions about their business-critical systems that are hosted on AWS if those systems go down. Which AWS Support Plan should this company use?",
      options: [
        "AWS Basic Support.",
        "AWS Developer Support.",
        "AWS Business Support.",
        "AWS Enterprise Support."
      ],
      correctAnswer: [3],
      explanation: "AWS Enterprise Support is the plan that provides a response time of less than 15 minutes for business-critical system-down cases. AWS Basic Support offers no case response guarantees, AWS Developer Support offers slower response times (up to 24 hours for general guidance), and AWS Business Support's fastest response time for critical issues is one hour, not under 15 minutes."
    },
    {
      id: "paper-05-032",
      domain: "CMP",
      topic: "serverless",
      type: "multiple-select",
      question: "Which of the following AWS offerings are serverless services? (Choose TWO)",
      options: [
        "Amazon EC2.",
        "AWS Lambda.",
        "Amazon DynamoDB.",
        "Amazon EMR.",
        "Amazon RDS."
      ],
      correctAnswer: [1, 2],
      explanation: "AWS Lambda and Amazon DynamoDB are both serverless offerings, meaning customers do not provision or manage any underlying servers and pay only based on usage. Amazon EC2 requires customers to manage virtual servers directly, Amazon EMR runs on provisioned clusters of EC2 instances, and Amazon RDS still requires managing underlying database instances, so none of these are serverless."
    },
    {
      id: "paper-05-033",
      domain: "SEC",
      topic: "acm",
      type: "single",
      question: "Which AWS service enables you to quickly purchase and deploy SSL/TLS certificates?",
      options: [
        "Amazon GuardDuty.",
        "AWS ACM.",
        "Amazon Detective.",
        "AWS WAF."
      ],
      correctAnswer: [1],
      explanation: "AWS Certificate Manager (ACM) lets customers easily provision, manage, and deploy SSL/TLS certificates for use with AWS services. Amazon GuardDuty is a threat detection service, Amazon Detective is used for security investigation and analysis, and AWS WAF protects web applications from common exploits, none of which handle SSL/TLS certificate issuance."
    },
    {
      id: "paper-05-034",
      domain: "DEP",
      topic: "opsworks",
      type: "single",
      question: "Which AWS Service provides integration with Chef to automate the configuration of EC2 instances?",
      options: [
        "AWS Config.",
        "AWS OpsWorks.",
        "AutoScaling.",
        "AWS CloudFormation."
      ],
      correctAnswer: [1],
      explanation: "AWS OpsWorks provides managed instances of Chef and Puppet, enabling automated configuration management of EC2 instances using Chef. AWS Config tracks configuration changes and compliance rather than automating configuration via Chef, Auto Scaling manages instance capacity rather than configuration, and AWS CloudFormation provisions infrastructure as code but does not natively integrate with Chef for configuration management."
    },
    {
      id: "paper-05-035",
      domain: "S3",
      topic: "s3",
      type: "single",
      question: "A customer is seeking to store objects in their AWS environment and to make those objects downloadable over the internet. Which AWS Service can be used to accomplish this?",
      options: [
        "Amazon EBS.",
        "Amazon EFS.",
        "Amazon S3.",
        "Amazon Instance Store."
      ],
      correctAnswer: [2],
      explanation: "Amazon S3 is an object storage service designed to store objects and make them downloadable over the internet via HTTP/HTTPS. Amazon EBS and Instance Store provide block-level storage attached to a single EC2 instance and are not internet-accessible, and Amazon EFS is a network file system for use across EC2 instances, not a general internet-facing object store."
    },
    {
      id: "paper-05-036",
      domain: "MON",
      topic: "cloudwatch",
      type: "single",
      question: "Which of the following services can be used to monitor the HTTP and HTTPS requests that are forwarded to Amazon CloudFront?",
      options: [
        "AWS WAF.",
        "Amazon CloudWatch.",
        "AWS Cloud9.",
        "AWS CloudTrail."
      ],
      correctAnswer: [1],
      explanation: "Amazon CloudWatch collects and monitors metrics for HTTP and HTTPS requests forwarded through Amazon CloudFront, allowing visibility into request volume, error rates, and latency. AWS WAF filters and blocks malicious web traffic rather than monitoring request metrics, AWS Cloud9 is a cloud IDE, and AWS CloudTrail logs API calls rather than HTTP/HTTPS request metrics."
    },
    {
      id: "paper-05-037",
      domain: "ACM",
      topic: "reserved-instances",
      type: "single",
      question: "A company is migrating a web application to AWS. The application’s compute capacity is continually utilized throughout the year. Which of the below options offers the company the most cost-effective solution?",
      options: [
        "On-demand Instances.",
        "Dedicated Hosts.",
        "Spot Instances.",
        "Reserved Instances."
      ],
      correctAnswer: [3],
      explanation: "Reserved Instances are the most cost-effective option for workloads with continual, predictable usage throughout the year, since committing to a 1- or 3-year term yields a significant discount over On-Demand pricing. On-Demand Instances cost more for steady-state workloads, Spot Instances are best for interruptible workloads (not continuous usage), and Dedicated Hosts are primarily used for licensing or compliance needs and cost more than Reserved Instances for this use case."
    },
    {
      id: "paper-05-038",
      domain: "IAM",
      topic: "least-privilege",
      type: "single",
      question: "A company wants to grant a new employee long-term access to manage Amazon DynamoDB databases. Which of the following is a recommended best-practice when granting these permissions?",
      options: [
        "Create an IAM role and attach a policy with Amazon DynamoDB access permissions.",
        "Create an IAM role and attach a policy with Administrator access permissions.",
        "Create an IAM user and attach a policy with Amazon DynamoDB access permissions.",
        "Create an IAM user and attach a policy with Administrator access permissions."
      ],
      correctAnswer: [2],
      explanation: "Best practice for a permanent employee is to create an IAM user (for a person needing long-term access) and attach a policy scoped only to the DynamoDB permissions they need, following the principle of least privilege. IAM roles are intended for temporary access or for AWS services/applications to assume, not long-term individual human access, and granting full Administrator access violates least privilege by providing far more permissions than necessary."
    },
    {
      id: "paper-05-039",
      domain: "IAM",
      topic: "iam-roles",
      type: "single",
      question: "When granting permissions to applications running on Amazon EC2 instances, which of the following is considered best practice?",
      options: [
        "Generate new IAM access keys every time you delegate permissions.",
        "Store the required AWS credentials directly within the application code.",
        "Use temporary security credentials (IAM roles) instead of long-term access keys.",
        "Do nothing; Applications that run on Amazon EC2 instances do not need permission to interact with other AWS services or resources."
      ],
      correctAnswer: [2],
      explanation: "Best practice for EC2 applications is to use IAM roles, which provide temporary security credentials that are automatically rotated, rather than embedding long-term access keys in code. Generating new access keys repeatedly still involves managing long-term credentials with rotation overhead, hardcoding credentials in code is a serious security risk, and EC2 applications frequently do need permissions to interact with other AWS services."
    },
    {
      id: "paper-05-040",
      domain: "ACM",
      topic: "cost-management",
      type: "single",
      question: "Which of the following will help AWS customers save on costs when migrating their workloads to AWS?",
      options: [
        "Use servers instead of managed services.",
        "Use existing third-party software licenses on AWS.",
        "Migrate production workloads to AWS edge locations instead of AWS Regions.",
        "Use AWS Outposts to run all workloads in a cost-optimized environment."
      ],
      correctAnswer: [1],
      explanation: "Reusing existing third-party software licenses (License Mobility) on AWS avoids the cost of purchasing new licenses, helping reduce migration costs. Using servers instead of managed services typically increases operational overhead and cost rather than reducing it, migrating production workloads to edge locations is not how AWS Regions/edge locations work (edge locations don't run general workloads), and AWS Outposts is a premium option for extending AWS into on-premises environments, not a general cost-optimization tool for all workloads."
    },
    {
      id: "paper-05-041",
      domain: "INT",
      topic: "sqs",
      type: "single",
      question: "An organization has a legacy application designed using monolithic-based architecture. Which AWS Service can be used to decouple the components of the application?",
      options: [
        "Amazon SQS.",
        "Virtual Private Gateway.",
        "AWS Artifact.",
        "Amazon CloudFront."
      ],
      correctAnswer: [0],
      explanation: "Amazon SQS is a messaging queue service used to decouple application components so they can communicate asynchronously without being directly dependent on each other, ideal for breaking apart a monolithic application. A Virtual Private Gateway is a networking component for VPN connectivity, AWS Artifact provides compliance reports, and Amazon CloudFront is a content delivery network, none of which address component decoupling."
    },
    {
      id: "paper-05-042",
      domain: "IAM",
      topic: "mfa",
      type: "multiple-select",
      question: "Which of the following can be used to enable the Virtual Multi-Factor Authentication? (Choose TWO)",
      options: [
        "Amazon Connect.",
        "AWS CLI.",
        "AWS Identity and Access Management (IAM).",
        "Amazon SNS.",
        "Amazon Virtual Private Cloud."
      ],
      correctAnswer: [1, 2],
      explanation: "Virtual MFA devices can be enabled and managed through AWS Identity and Access Management (IAM), and configured/verified using the AWS CLI. Amazon Connect is a contact center service, Amazon SNS is a notification service, and Amazon VPC is a networking service, none of which relate to enabling MFA."
    },
    {
      id: "paper-05-043",
      domain: "EC2",
      topic: "ec2",
      type: "single",
      question: "According to best practices, which of the below options is best suited for processing a large number of binary files?",
      options: [
        "Vertically scaling EC2 instances.",
        "Running RDS instances in parallel.",
        "Vertically scaling RDS instances.",
        "Running EC2 instances in parallel."
      ],
      correctAnswer: [3],
      explanation: "Running EC2 instances in parallel (horizontal scaling) is the best-practice approach for processing a large number of binary files, since the workload can be distributed across many instances simultaneously. Vertically scaling EC2 or RDS instances only increases the capacity of a single instance rather than distributing the workload, and running RDS instances in parallel doesn't make sense for processing files, since RDS is a relational database service, not a file-processing compute service."
    },
    {
      id: "paper-05-044",
      domain: "ACM",
      topic: "pricing-calculator",
      type: "single",
      question: "A company is planning to use Amazon S3 and Amazon CloudFront to distribute its video courses globally. What tool can the company use to estimate the costs of these services?",
      options: [
        "AWS Cost Explorer.",
        "AWS Pricing Calculator.",
        "AWS Budgets.",
        "AWS Cost & Usage Report."
      ],
      correctAnswer: [1],
      explanation: "The AWS Pricing Calculator is designed to let customers estimate the cost of AWS services, such as S3 and CloudFront, before deploying them. AWS Cost Explorer analyzes and visualizes actual historical/current spending rather than estimating future costs, AWS Budgets sets alerts on spending thresholds, and the Cost & Usage Report provides detailed billing data for costs already incurred."
    },
    {
      id: "paper-05-045",
      domain: "SEC",
      topic: "incident-response",
      type: "multiple-select",
      question: "What should you do if you see resources, which you don’t remember creating, in the AWS Management Console? (Choose TWO)",
      options: [
        "Stop all running services and open an investigation.",
        "Give your root account password to AWS Support so that they can assist in troubleshooting and securing the account.",
        "Check the AWS CloudTrail logs and delete all IAM users that have access to your resources.",
        "Open an investigation and delete any potentially compromised IAM users.",
        "Change your AWS root account password and the passwords of any IAM users."
      ],
      correctAnswer: [3, 4],
      explanation: "If unexpected resources appear in the account, the correct response is to investigate and delete any IAM users that may have been compromised, and to change the root account password along with the passwords of any IAM users, to lock out unauthorized access. Sharing the root password with AWS Support is never appropriate since AWS never needs your root credentials, stopping all running services could cause unnecessary business disruption, and deleting all IAM users indiscriminately (rather than investigating first) is overly destructive and not the recommended first step."
    },
    {
      id: "paper-05-046",
      domain: "ARC",
      topic: "loose-coupling",
      type: "single",
      question: "A key practice when designing solutions on AWS is to minimize dependencies between components so that the failure of a single component does not impact other components. What is this practice called?",
      options: [
        "Elastic coupling.",
        "Loosely coupling.",
        "Scalable coupling.",
        "Tightly coupling."
      ],
      correctAnswer: [1],
      explanation: "Loose coupling is the design practice of minimizing dependencies between application components so that the failure of one component does not cascade to affect others. 'Elastic coupling', 'scalable coupling', and 'tightly coupling' are not real AWS design principles — tight coupling is, in fact, the opposite pattern that this practice seeks to avoid."
    },
    {
      id: "paper-05-047",
      domain: "STG",
      topic: "efs",
      type: "single",
      question: "Which AWS Service offers an NFS file system that can be mounted concurrently from multiple EC2 instances?",
      options: [
        "Amazon Elastic File System.",
        "Amazon Simple Storage Service.",
        "Amazon Elastic Block Store.",
        "AWS Storage Gateway."
      ],
      correctAnswer: [0],
      explanation: "Amazon Elastic File System (EFS) provides a scalable NFS file system that can be mounted concurrently across multiple EC2 instances. Amazon S3 is object storage accessed via API/HTTP rather than mounted as an NFS file system, Amazon EBS volumes can only attach to a single EC2 instance at a time (except for io2 Multi-Attach in narrow cases, not general NFS use), and AWS Storage Gateway bridges on-premises storage to AWS rather than providing a native EC2-mountable file system."
    },
    {
      id: "paper-05-048",
      domain: "GLB",
      topic: "availability-zones",
      type: "single",
      question: "Availability Zones within a Region are connected over low-latency links. Which of the following is a benefit of these links?",
      options: [
        "Create private connection to your data center.",
        "Achieve global high availability.",
        "Automate the process of provisioning new compute resources.",
        "Make synchronous replication of your data possible."
      ],
      correctAnswer: [3],
      explanation: "The low-latency, high-throughput links connecting Availability Zones within a Region make synchronous data replication possible, which underpins features like Multi-AZ RDS deployments. These links do not create a private connection to an on-premises data center (that's Direct Connect), do not by themselves achieve global high availability (that requires multi-Region deployment), and do not automate resource provisioning (that's a function of Auto Scaling or CloudFormation)."
    },
    {
      id: "paper-05-049",
      domain: "CMP",
      topic: "lambda",
      type: "multiple-select",
      question: "Which of the following are true regarding the languages that are supported on AWS Lambda? (Choose TWO)",
      options: [
        "Lambda only supports Python and Node.js, but third party plugins are available to convert code in other languages to these formats.",
        "Lambda natively supports a number of programming languages such as Node.js, Python, and Java.",
        "Lambda is AWS’ proprietary programming language for microservices.",
        "Lambda doesn’t support programming languages; it is a serverless compute service.",
        "Lambda can support any programming language using an API."
      ],
      correctAnswer: [1, 4],
      explanation: "AWS Lambda natively supports several programming languages such as Node.js, Python, and Java, and also supports custom runtimes, allowing developers to bring virtually any programming language via the Lambda Runtime API. It is false that Lambda only supports Python and Node.js via third-party plugins, that Lambda is a proprietary programming language, or that Lambda doesn't support programming languages at all — as a compute service, it runs code written in supported languages."
    },
    {
      id: "paper-05-050",
      domain: "MON",
      topic: "x-ray",
      type: "multiple-select",
      question: "What are the capabilities of AWS X-Ray? (Choose TWO)",
      options: [
        "Automatically decouples application components.",
        "Facilitates tracking of user requests to identify application issues.",
        "Helps improve application performance.",
        "Deploys applications to Amazon EC2 instances.",
        "Deploys applications to on-premises servers."
      ],
      correctAnswer: [1, 2],
      explanation: "AWS X-Ray helps developers analyze and debug distributed applications by tracing user requests as they travel through application components, which helps identify issues and improve overall application performance. X-Ray does not decouple application components (that's the role of services like SQS/SNS) and it does not deploy applications to EC2 instances or on-premises servers, since it is a tracing and analysis tool, not a deployment service."
    }
  ]
});
