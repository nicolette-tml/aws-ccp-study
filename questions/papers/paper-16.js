window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "paper-16",
  paperId: "paper-16",
  paperName: "Practice Paper 16",
  questions: [
    {
      id: "paper-16-001",
      domain: "ACM",
      topic: "tco-calculator",
      type: "single",
      question: "What will help a company perform a cost benefit analysis of migrating to the AWS Cloud?",
      options: [
        "Cost Explorer",
        "AWS Total Cost of Ownership (TCO) Calculator",
        "AWS Simple Monthly Calculator",
        "AWS Trusted Advisor"
      ],
      correctAnswer: [1],
      explanation: "The AWS Total Cost of Ownership (TCO) Calculator is designed specifically to compare the cost of running workloads on-premises versus on AWS, making it the right tool for a cost-benefit analysis of migration. Cost Explorer and Trusted Advisor analyze existing AWS spending and recommendations rather than on-premises-to-cloud comparisons, and the AWS Simple Monthly Calculator only estimated future AWS costs, not full TCO comparisons."
    },
    {
      id: "paper-16-002",
      domain: "ACM",
      topic: "consolidated-billing",
      type: "single",
      question: "Which of the following provides the ability to share the cost benefits of Reserved Instances across AWS accounts?",
      options: [
        "AWS Cost Explorer between AWS accounts",
        "Linked accounts and consolidated billing",
        "Amazon Elastic Compute Cloud (Amazon EC2) Reserved Instance Utilization Report",
        "Amazon EC2 Instance Usage Report between AWS accounts"
      ],
      correctAnswer: [1],
      explanation: "Linked accounts and consolidated billing allow the cost benefits of Reserved Instances purchased in one account to be shared automatically with all linked accounts in the organization. Cost Explorer and the EC2 Reserved Instance Utilization/Instance Usage Reports are reporting tools that show usage and savings, but they don't actually distribute the RI discount across accounts."
    },
    {
      id: "paper-16-003",
      domain: "ACM",
      topic: "organizations",
      type: "single",
      question: "A company has multiple AWS accounts and wants to simplify and consolidate its billing process. Which AWS service will achieve this?",
      options: [
        "AWS Cost and Usage Reports",
        "AWS Organizations",
        "AWS Cost Explorer",
        "AWS Budgets"
      ],
      correctAnswer: [1],
      explanation: "AWS Organizations lets a company centrally manage multiple AWS accounts under consolidated billing, simplifying billing into a single consolidated invoice with volume discounts. Cost and Usage Reports and Cost Explorer provide visibility into spending but don't consolidate multiple accounts, and AWS Budgets only sets spending alerts."
    },
    {
      id: "paper-16-004",
      domain: "GLB",
      topic: "cloudfront",
      type: "single",
      question: "A company is designing an application hosted in a single AWS Region serving end-users spread across the world. The company wants to provide the end-users low latency access to the application data. Which of the following services will help fulfill this requirement?",
      options: [
        "Amazon CloudFront",
        "AWS Direct Connect",
        "Amazon Route 53 global DNS",
        "Amazon Simple Storage Service (Amazon S3) transfer acceleration"
      ],
      correctAnswer: [0],
      explanation: "Amazon CloudFront caches application data at edge locations around the world, so end-users everywhere get low-latency access regardless of where the single origin Region is located. AWS Direct Connect provides private connectivity from a specific on-premises location rather than global end-users, Route 53 only handles DNS resolution rather than content delivery, and S3 Transfer Acceleration speeds up uploads to S3, not general application data access."
    },
    {
      id: "paper-16-005",
      domain: "CLD",
      topic: "deployment-models",
      type: "single",
      question: "Which of the following deployment models enables customers to fully trade their capital IT expenses for operational expenses?",
      options: [
        "On-premises",
        "Hybrid",
        "Cloud",
        "Platform as a service"
      ],
      correctAnswer: [2],
      explanation: "The cloud deployment model lets customers fully trade capital expenses, such as buying and maintaining hardware, for operational expenses, paying only for what they use, since AWS owns and maintains all the physical infrastructure. An on-premises model requires customers to retain full capital infrastructure, a hybrid model still keeps some capital expenses on-premises, and Platform as a Service is a service model, not a deployment model."
    },
    {
      id: "paper-16-006",
      domain: "CLD",
      topic: "asset-management",
      type: "single",
      question: "How is asset management on AWS easier than asset management in a physical data center?",
      options: [
        "AWS provides a Configuration Management Database that users can maintain.",
        "AWS performs infrastructure discovery scans on the customer’s behalf.",
        "Amazon EC2 automatically generates an asset report and places it in the customer’s specified Amazon S3 bucket.",
        "Users can gather asset metadata reliably with a few API calls."
      ],
      correctAnswer: [1],
      explanation: "AWS makes asset management easier because it performs infrastructure discovery scans on the customer's behalf, automatically tracking the hardware and resources underlying the services in use. AWS does not provide a customer-maintained Configuration Management Database, EC2 does not automatically generate asset reports into S3, and gathering asset metadata reliably via API calls still requires ongoing customer effort that AWS's automatic discovery removes."
    },
    {
      id: "paper-16-007",
      domain: "DBA",
      topic: "rds",
      type: "single",
      question: "What feature of Amazon RDS helps to create globally redundant databases?",
      options: [
        "Snapshots",
        "Automatic patching and updating",
        "Cross-Region read replicas",
        "Provisioned IOPS"
      ],
      correctAnswer: [2],
      explanation: "Amazon RDS cross-Region read replicas asynchronously replicate a database to another AWS Region, enabling globally redundant databases and improved disaster recovery. Snapshots are point-in-time backups rather than ongoing redundancy, automatic patching/updating maintains the database engine, and Provisioned IOPS is a storage performance option — none create cross-Region redundancy."
    },
    {
      id: "paper-16-008",
      domain: "IAM",
      topic: "least-privilege",
      type: "single",
      question: "Using AWS Identity and Access Management (IAM) to grant access only to the resources needed to perform a task is a concept known as:",
      options: [
        "restricted access.",
        "as-needed access.",
        "least privilege access.",
        "token access."
      ],
      correctAnswer: [2],
      explanation: "Least privilege access is the IAM concept of granting users only the specific permissions needed to perform their task, minimizing security risk. Restricted access, as-needed access, and token access are not the standard AWS/IAM terminology for this concept."
    },
    {
      id: "paper-16-009",
      domain: "ACM",
      topic: "cost-allocation-tags",
      type: "multiple-select",
      question: "Which methods can be used to identify AWS costs by departments? (Choose two.)",
      options: [
        "Enable multi-factor authentication for the AWS account root user.",
        "Create separate accounts for each department.",
        "Use Reserved Instances whenever possible.",
        "Use tags to associate each instance with a particular department.",
        "Pay bills using purchase orders."
      ],
      correctAnswer: [1, 3],
      explanation: "Creating separate AWS accounts for each department cleanly isolates billing by department, and using tags to label each instance with its department lets AWS attribute costs to a department even within a shared account — both are standard ways to break down costs by department. Enabling MFA is a security control unrelated to cost tracking, using Reserved Instances is a cost-optimization strategy rather than a cost-attribution method, and paying by purchase order is a payment mechanism that doesn't identify departmental spend."
    },
    {
      id: "paper-16-010",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "Under the AWS shared responsibility model, customer responsibilities include which one of the following?",
      options: [
        "Securing the hardware, software, facilities, and networks that run all products and services.",
        "Providing certificates, reports, and other documentation directly to AWS customers under NDA.",
        "Configuring the operating system, network, and firewall.",
        "Obtaining industry certifications and independent third-party attestations."
      ],
      correctAnswer: [2],
      explanation: "Under the shared responsibility model, customers are responsible for configuring the operating system, network settings, and firewall (security groups) on the resources they control — security 'in' the cloud. Securing the underlying hardware, facilities, and networks, providing compliance documentation, and obtaining certifications are all AWS's responsibilities as security 'of' the cloud."
    },
    {
      id: "paper-16-011",
      domain: "ACM",
      topic: "trusted-advisor",
      type: "single",
      question: "Which managed AWS service provides real-time guidance on AWS security best practices?",
      options: [
        "AWS X-Ray",
        "AWS Trusted Advisor",
        "Amazon CloudWatch",
        "AWS Systems Manager"
      ],
      correctAnswer: [1],
      explanation: "AWS Trusted Advisor inspects an AWS account and provides real-time recommendations across categories including security, following AWS best practices. AWS X-Ray traces application requests, CloudWatch monitors metrics and logs, and Systems Manager is an operational management tool — none provide the best-practice security guidance Trusted Advisor does."
    },
    {
      id: "paper-16-012",
      domain: "ELB",
      topic: "auto-scaling",
      type: "single",
      question: "Which feature adds elasticity to Amazon EC2 instances to handle the changing demand for workloads?",
      options: [
        "Resource groups",
        "Lifecycle policies",
        "Application Load Balancer",
        "Amazon EC2 Auto Scaling"
      ],
      correctAnswer: [3],
      explanation: "Amazon EC2 Auto Scaling automatically adds or removes EC2 instances based on demand, adding elasticity so capacity matches the changing workload. Resource groups and lifecycle policies are organizational/management tools, and an Application Load Balancer distributes traffic but does not itself change the number of running instances."
    },
    {
      id: "paper-16-013",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "multiple-select",
      question: "Under the AWS shared responsibility model, customers are responsible for which aspects of security in the cloud? (Choose two.)",
      options: [
        "Visualization management",
        "Hardware management",
        "Encryption management",
        "Facilities management",
        "Firewall management"
      ],
      correctAnswer: [2, 4],
      explanation: "Under the shared responsibility model, customers are responsible for encryption management, deciding what and how to encrypt their data, and firewall management, configuring security groups and NACLs — both are security 'in' the cloud tasks. Virtualization, hardware, and facilities management are AWS's responsibility as security 'of' the cloud."
    },
    {
      id: "paper-16-014",
      domain: "S3",
      topic: "storage-gateway",
      type: "single",
      question: "Which AWS hybrid storage service enables on-premises applications to seamlessly use AWS Cloud storage through standard file-storage protocols?",
      options: [
        "AWS Direct Connect",
        "AWS Snowball",
        "AWS Storage Gateway",
        "AWS Snowball Edge"
      ],
      correctAnswer: [2],
      explanation: "AWS Storage Gateway is the hybrid storage service that connects on-premises applications to AWS Cloud storage using standard protocols like NFS, SMB, and iSCSI, making cloud storage appear as local file storage. AWS Direct Connect provides network connectivity rather than storage protocols, and Snowball/Snowball Edge are physical devices for bulk data transfer, not continuous hybrid file access."
    },
    {
      id: "paper-16-015",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "What is a responsibility of AWS in the shared responsibility model?",
      options: [
        "Updating the network ACLs to block traffic to vulnerable ports.",
        "Patching operating systems running on Amazon EC2 instances.",
        "Updating the firmware on the underlying EC2 hosts.",
        "Updating the security group rules to block traffic to the vulnerable ports."
      ],
      correctAnswer: [2],
      explanation: "Updating the firmware on the underlying EC2 host hardware is AWS's responsibility, since AWS manages the physical infrastructure beneath the EC2 service. Patching the guest operating system, configuring network ACLs, and configuring security group rules are all customer responsibilities for security 'in' the cloud."
    },
    {
      id: "paper-16-016",
      domain: "ARC",
      topic: "design-for-failure",
      type: "single",
      question: "Which architectural principle is used when deploying an Amazon Relational Database Service (Amazon RDS) instance in Multiple Availability Zone mode?",
      options: [
        "Implement loose coupling.",
        "Design for failure.",
        "Automate everything that can be automated.",
        "Use services, not servers."
      ],
      correctAnswer: [1],
      explanation: "Deploying an RDS instance across Multiple Availability Zones follows the design-for-failure principle, ensuring the database can automatically fail over to a standby if the primary AZ becomes unavailable. Loose coupling reduces dependencies between components, automating everything relates to operational efficiency, and 'use services, not servers' is about preferring managed services — none directly describe Multi-AZ resilience."
    },
    {
      id: "paper-16-017",
      domain: "IAM",
      topic: "least-privilege",
      type: "single",
      question: "What does it mean to grant least privilege to AWS IAM users?",
      options: [
        "It is granting permissions to a single user only.",
        "It is granting permissions using AWS IAM policies only.",
        "It is granting AdministratorAccess policy permissions to trustworthy users.",
        "It is granting only the permissions required to perform a given task."
      ],
      correctAnswer: [3],
      explanation: "Granting least privilege to IAM users means giving them only the permissions required to perform a specific task, nothing more. It does not mean restricting permissions to a single user, granting permissions only through IAM policies, or giving trustworthy users full AdministratorAccess."
    },
    {
      id: "paper-16-018",
      domain: "ARC",
      topic: "loose-coupling",
      type: "single",
      question: "What is a benefit of loose coupling as a principle of cloud architecture design?",
      options: [
        "It facilitates low-latency request handling.",
        "It allows applications to have dependent workflows.",
        "It prevents cascading failures between different components.",
        "It allows companies to focus on their physical data center operations."
      ],
      correctAnswer: [2],
      explanation: "Loose coupling designs application components so they operate independently, meaning the failure of one component does not cascade and bring down the others. It doesn't inherently reduce latency, it discourages rather than enables dependent workflows, and it has nothing to do with focusing on physical data center operations."
    },
    {
      id: "paper-16-019",
      domain: "VPC",
      topic: "direct-connect",
      type: "single",
      question: "A director has been tasked with investigating hybrid cloud architecture. The company currently accesses AWS over the public internet. Which service will facilitate private hybrid connectivity?",
      options: [
        "Amazon Virtual Private Cloud (Amazon VPC) NAT Gateway",
        "AWS Direct Connect",
        "Amazon Simple Storage Service (Amazon S3) Transfer Acceleration",
        "AWS Web Application Firewall (AWS WAF)"
      ],
      correctAnswer: [1],
      explanation: "AWS Direct Connect establishes a dedicated, private network connection between an on-premises data center and AWS, avoiding the public internet for hybrid connectivity. A VPC NAT Gateway allows outbound internet access for private subnets, S3 Transfer Acceleration speeds up uploads over the public internet, and AWS WAF filters web application traffic — none provide private hybrid connectivity."
    },
    {
      id: "paper-16-020",
      domain: "ARC",
      topic: "decoupling",
      type: "single",
      question: "A company’s web application currently has tight dependencies on underlying components, so when one component fails the entire web application fails. Applying which AWS Cloud design principle will address the current design issue?",
      options: [
        "Implementing elasticity, enabling the application to scale up or scale down as demand changes.",
        "Enabling several EC2 instances to run in parallel to achieve better performance.",
        "Focusing on decoupling components by isolating them and ensuring individual components can function when other components fail.",
        "Doubling EC2 computing resources to increase system fault tolerance."
      ],
      correctAnswer: [2],
      explanation: "Decoupling components isolates them so each can function independently, meaning the failure of one component doesn't cause the entire application to fail — directly addressing the tight-dependency problem described. Elasticity, running instances in parallel, and doubling compute resources all address capacity or performance, not the underlying tight-coupling design issue."
    },
    {
      id: "paper-16-021",
      domain: "IAM",
      topic: "mfa",
      type: "multiple-select",
      question: "How can a customer increase security to AWS account logons? (Choose two.)",
      options: [
        "Configure AWS Certificate Manager",
        "Enable Multi-Factor Authentication (MFA)",
        "Use Amazon Cognito to manage access",
        "Configure a strong password policy",
        "Enable AWS Organizations"
      ],
      correctAnswer: [1, 3],
      explanation: "Enabling Multi-Factor Authentication adds a second verification factor beyond the password, and configuring a strong password policy enforces complexity requirements, both of which directly increase the security of account logons. AWS Certificate Manager manages SSL/TLS certificates, Amazon Cognito manages application user identities rather than AWS account logons, and AWS Organizations manages multiple accounts — none secure the login process itself."
    },
    {
      id: "paper-16-022",
      domain: "ACM",
      topic: "organizations",
      type: "single",
      question: "What AWS service would be used to centrally manage AWS access across multiple accounts?",
      options: [
        "AWS Service Catalog",
        "AWS Config",
        "AWS Trusted Advisor",
        "AWS Organizations"
      ],
      correctAnswer: [3],
      explanation: "AWS Organizations is used to centrally manage and govern access across multiple AWS accounts, including consolidated billing and service control policies. AWS Service Catalog manages approved product catalogs, AWS Config tracks resource configurations, and Trusted Advisor gives best-practice recommendations — none centrally manage cross-account access."
    },
    {
      id: "paper-16-023",
      domain: "ACM",
      topic: "budgets",
      type: "single",
      question: "Which AWS service can a customer use to set up an alert notification when the account is approaching a particular dollar amount?",
      options: [
        "AWS Cost and Usage reports",
        "AWS Budgets",
        "AWS Cost Explorer",
        "AWS Trusted Advisor"
      ],
      correctAnswer: [1],
      explanation: "AWS Budgets lets customers set custom cost and usage thresholds and receive alert notifications when actual or forecasted spend approaches or exceeds that amount. Cost and Usage Reports and Cost Explorer provide historical spending data and analysis but don't send threshold alerts, and Trusted Advisor gives best-practice recommendations, not billing alerts."
    },
    {
      id: "paper-16-024",
      domain: "SEC",
      topic: "artifact",
      type: "single",
      question: "What can users access from AWS Artifact?",
      options: [
        "AWS security and compliance documents",
        "A download of configuration management details for all AWS resources",
        "Training materials for AWS services",
        "A security assessment of the applications deployed in the AWS Cloud"
      ],
      correctAnswer: [0],
      explanation: "AWS Artifact provides on-demand access to AWS's security and compliance documents, such as SOC reports and PCI compliance certifications. It does not provide configuration management details for resources, which is AWS Config's role, training materials, or security assessments of deployed applications, which is Amazon Inspector's role."
    },
    {
      id: "paper-16-025",
      domain: "ACM",
      topic: "support",
      type: "single",
      question: "Which is the MINIMUM AWS Support plan that provides designated Technical Account Managers?",
      options: [
        "Enterprise",
        "Business",
        "Developer",
        "Basic"
      ],
      correctAnswer: [0],
      explanation: "The Enterprise Support plan is the minimum AWS Support tier that includes a designated Technical Account Manager (TAM) who provides proactive, personalized guidance. Business and Developer Support offer general technical support without a dedicated TAM, and Basic Support provides only account and billing support with no proactive guidance."
    },
    {
      id: "paper-16-026",
      domain: "ARC",
      topic: "well-architected",
      type: "single",
      question: "Which of the following is an AWS Well-Architected Framework design principle related to reliability?",
      options: [
        "Deployment to a single Availability Zone",
        "Ability to recover from failure",
        "Design for cost optimization",
        "Perform operations as code"
      ],
      correctAnswer: [1],
      explanation: "The ability to recover quickly from failure is a core AWS Well-Architected Framework design principle under the Reliability pillar. Deploying to a single Availability Zone is the opposite of a reliability best practice, cost optimization is a separate pillar entirely, and performing operations as code falls under operational excellence, not reliability."
    },
    {
      id: "paper-16-027",
      domain: "STG",
      topic: "instance-store",
      type: "single",
      question: "Which type of AWS storage is ephemeral and is deleted when an instance is stopped or terminated?",
      options: [
        "Amazon EBS",
        "Amazon EC2 instance store",
        "Amazon EFS",
        "Amazon S3"
      ],
      correctAnswer: [1],
      explanation: "Amazon EC2 instance store is ephemeral storage physically attached to the host, and its data is lost whenever the instance is stopped or terminated. Amazon EBS is persistent block storage that survives instance stop/termination, Amazon EFS is a durable managed file system, and Amazon S3 is durable object storage — none of these are ephemeral."
    },
    {
      id: "paper-16-028",
      domain: "CLD",
      topic: "cloud-benefits",
      type: "single",
      question: "What is an advantage of using the AWS Cloud over a traditional on-premises solution?",
      options: [
        "Users do not have to guess about future capacity needs.",
        "Users can utilize existing hardware contracts for purchases.",
        "Users can fix costs no matter what their traffic is.",
        "Users can avoid audits by using reports from AWS."
      ],
      correctAnswer: [0],
      explanation: "One of the biggest advantages of the AWS Cloud is that users can provision resources on demand and scale as needed, so they no longer need to guess future capacity requirements and over-provision hardware. Users cannot repurpose existing on-premises hardware contracts in the cloud, costs vary with usage rather than staying fixed, and AWS does not let customers avoid audits — compliance obligations still apply."
    },
    {
      id: "paper-16-029",
      domain: "CMP",
      topic: "lambda",
      type: "single",
      question: "Which of the following is an AWS-managed compute service?",
      options: [
        "Amazon SWF",
        "Amazon EC2",
        "AWS Lambda",
        "Amazon Aurora"
      ],
      correctAnswer: [2],
      explanation: "AWS Lambda is a fully AWS-managed serverless compute service where AWS handles all server provisioning, patching, and scaling. Amazon EC2 requires the customer to manage the underlying instances, Amazon SWF is a workflow orchestration service, and Amazon Aurora is a managed database rather than a compute service."
    },
    {
      id: "paper-16-030",
      domain: "ARC",
      topic: "design-for-failure",
      type: "single",
      question: "Which of the following is an important architectural principle when designing cloud applications?",
      options: [
        "Store data and backups in the same region.",
        "Design tightly coupled system components.",
        "Avoid multi-threading.",
        "Design for failure"
      ],
      correctAnswer: [3],
      explanation: "Designing for failure is a key AWS architectural principle, assuming that components can and will fail, and building resilience such as redundancy and automated recovery into the architecture accordingly. Storing data and backups in the same region increases risk rather than resilience, tightly coupled components make failures cascade, and avoiding multi-threading is unrelated to fault tolerance."
    },
    {
      id: "paper-16-031",
      domain: "IAM",
      topic: "sdk",
      type: "single",
      question: "Which mechanism allows developers to access AWS services from application code?",
      options: [
        "AWS Software Development Kit",
        "AWS Management Console",
        "AWS CodePipeline",
        "AWS Config"
      ],
      correctAnswer: [0],
      explanation: "The AWS Software Development Kit (SDK) provides libraries and APIs that let developers call AWS services directly from their application code in languages like Python, Java, or Node.js. The AWS Management Console is a web-based GUI rather than code-based access, AWS CodePipeline automates release pipelines, and AWS Config tracks resource configuration — none let application code call AWS services."
    },
    {
      id: "paper-16-032",
      domain: "ACM",
      topic: "pricing-models",
      type: "single",
      question: "Which Amazon EC2 pricing model is the MOST cost efficient for an uninterruptible workload that runs once a year for 24 hours?",
      options: [
        "On-Demand Instances",
        "Reserved Instances",
        "Spot Instances",
        "Dedicated Instances"
      ],
      correctAnswer: [0],
      explanation: "On-Demand Instances are the most cost-efficient choice for a workload that runs just once a year for 24 hours, since you pay only for that short usage with no upfront commitment. Reserved Instances require a 1- or 3-year commitment that would go unused most of the year, Spot Instances can be interrupted, unsuitable for an uninterruptible workload, and Dedicated Instances add cost for physical isolation that isn't needed here."
    },
    {
      id: "paper-16-033",
      domain: "DBA",
      topic: "aurora",
      type: "single",
      question: "Which of the following services is a MySQL-compatible database that automatically grows storage as needed?",
      options: [
        "Amazon Elastic Compute Cloud (Amazon EC2)",
        "Amazon Relational Database Service (Amazon RDS) for MySQL",
        "Amazon Lightsail",
        "Amazon Aurora"
      ],
      correctAnswer: [3],
      explanation: "Amazon Aurora is a MySQL- and PostgreSQL-compatible relational database that automatically grows its storage as data increases, without requiring manual provisioning. Amazon EC2 is general compute rather than a database, RDS for MySQL requires the customer to provision and manage storage capacity manually, and Amazon Lightsail is a simplified VPS offering, not a self-scaling database service."
    },
    {
      id: "paper-16-034",
      domain: "VPC",
      topic: "vpc-peering",
      type: "single",
      question: "Which Amazon Virtual Private Cloud (Amazon VPC) feature enables users to connect two VPCs together?",
      options: [
        "Amazon VPC endpoints",
        "Amazon Elastic Compute Cloud (Amazon EC2) ClassicLink",
        "Amazon VPC peering",
        "AWS Direct Connect"
      ],
      correctAnswer: [2],
      explanation: "Amazon VPC peering creates a direct network connection between two VPCs, allowing resources in each to communicate as if they were on the same network. VPC endpoints connect a VPC privately to AWS services rather than to another VPC, EC2 ClassicLink connects EC2-Classic instances to a VPC, and Direct Connect provides connectivity from on-premises to AWS, not VPC-to-VPC."
    },
    {
      id: "paper-16-035",
      domain: "DEP",
      topic: "codecommit",
      type: "single",
      question: "Which service’s PRIMARY purpose is software version control?",
      options: [
        "Amazon CodeStar",
        "AWS Command Line Interface (AWS CLI)",
        "Amazon Cognito",
        "AWS CodeCommit"
      ],
      correctAnswer: [3],
      explanation: "AWS CodeCommit is a managed source control service whose primary purpose is hosting private Git repositories for software version control. Amazon CodeStar is a project-management and CI/CD hub, the AWS CLI is a command-line tool for managing AWS resources, and Amazon Cognito handles user authentication — none are version control services."
    },
    {
      id: "paper-16-036",
      domain: "ACM",
      topic: "tco-calculator",
      type: "single",
      question: "A company is considering migrating its applications to AWS. The company wants to compare the cost of running the workload on-premises to running the equivalent workload on the AWS platform. Which tool can be used to perform this comparison?",
      options: [
        "AWS Simple Monthly Calculator",
        "AWS Total Cost of Ownership (TCO) Calculator",
        "AWS Billing and Cost Management console",
        "Cost Explorer"
      ],
      correctAnswer: [1],
      explanation: "The AWS Total Cost of Ownership (TCO) Calculator is purpose-built to compare the cost of running workloads on-premises versus running the equivalent workload on AWS. The AWS Simple Monthly Calculator and Cost Explorer only estimate or analyze AWS-side costs, and the Billing and Cost Management console shows billing details rather than an on-premises comparison."
    },
    {
      id: "paper-16-037",
      domain: "S3",
      topic: "snowmobile",
      type: "single",
      question: "Which AWS service provides a secure, fast, and cost-effective way to migrate or transport exabyte-scale datasets into AWS?",
      options: [
        "AWS Batch",
        "AWS Snowball",
        "AWS Migration Hub",
        "AWS Snowmobile"
      ],
      correctAnswer: [3],
      explanation: "AWS Snowmobile is an exabyte-scale data transfer service using a ruggedized shipping container pulled by a semi-trailer truck, designed for the largest migrations. AWS Snowball handles petabyte-scale, not exabyte-scale, transfers, AWS Batch runs batch computing jobs, and AWS Migration Hub tracks migration progress rather than transporting data."
    },
    {
      id: "paper-16-038",
      domain: "ACM",
      topic: "pricing-models",
      type: "multiple-select",
      question: "Which of the following BEST describe the AWS pricing model? (Choose two.)",
      options: [
        "Fixed-term",
        "Pay-as-you-go",
        "Colocation",
        "Planned",
        "Variable cost"
      ],
      correctAnswer: [1, 4],
      explanation: "AWS pricing follows a pay-as-you-go model with variable costs, meaning customers pay only for the resources they actually consume and costs scale with usage. AWS does not require fixed-term contracts or planned, fixed spending, and colocation refers to renting space in a third-party data center, unrelated to AWS's cloud pricing model."
    },
    {
      id: "paper-16-039",
      domain: "ELB",
      topic: "load-balancer-types",
      type: "multiple-select",
      question: "Which load balancer types are available with Elastic Load Balancing (ELB)? (Choose two.)",
      options: [
        "Public load balancers with AWS Application Auto Scaling capabilities",
        "F5 Big-IP and Citrix NetScaler load balancers",
        "Classic Load Balancers",
        "Cross-zone load balancers with public and private IPs",
        "Application Load Balancers"
      ],
      correctAnswer: [2, 4],
      explanation: "Elastic Load Balancing offers Classic Load Balancers, the original ELB type, and Application Load Balancers for Layer 7 HTTP/HTTPS routing, alongside Network and Gateway Load Balancers. There is no such thing as F5 Big-IP or Citrix NetScaler load balancers offered by ELB, 'public load balancers with Application Auto Scaling' is not a real ELB type, and 'cross-zone load balancers with public and private IPs' is not an ELB category either."
    },
    {
      id: "paper-16-040",
      domain: "CLD",
      topic: "cloud-benefits",
      type: "single",
      question: "Why should a company choose AWS instead of a traditional data center?",
      options: [
        "AWS provides users with full control over the underlying resources.",
        "AWS does not require long-term contracts and provides a pay-as-you-go model.",
        "AWS offers edge locations in every country, supporting global reach.",
        "AWS has no limits on the number of resources that can be created."
      ],
      correctAnswer: [1],
      explanation: "AWS eliminates the need for long-term contracts and offers a pay-as-you-go pricing model, letting companies pay only for the compute and storage they actually use instead of over-provisioning as in a traditional data center. AWS does not give users full control over underlying physical resources, which remains AWS's responsibility, it does not have edge locations in every country, and it does enforce service quotas, though these can be raised."
    },
    {
      id: "paper-16-041",
      domain: "GLB",
      topic: "cloudfront",
      type: "single",
      question: "Which solution provides the FASTEST application response times to frequently accessed data to users in multiple AWS Regions?",
      options: [
        "AWS CloudTrail across multiple Availability Zones",
        "Amazon CloudFront to edge locations",
        "AWS CloudFormation in multiple regions",
        "A virtual private gateway over AWS Direct Connect"
      ],
      correctAnswer: [1],
      explanation: "Amazon CloudFront caches frequently accessed content at edge locations distributed globally, delivering the fastest possible response times to users across multiple Regions. CloudTrail logs API activity rather than delivering content, CloudFormation provisions infrastructure as code, and a virtual private gateway over Direct Connect provides private connectivity but not the caching CloudFront offers."
    },
    {
      id: "paper-16-042",
      domain: "SEC",
      topic: "artifact",
      type: "single",
      question: "Which AWS service provides a self-service portal for on-demand access to AWS compliance reports?",
      options: [
        "AWS Config",
        "AWS Certificate Manager",
        "Amazon Inspector",
        "AWS Artifact"
      ],
      correctAnswer: [3],
      explanation: "AWS Artifact is a self-service portal that provides on-demand access to AWS's compliance reports and agreements. AWS Config tracks resource configuration compliance rather than compliance reports, AWS Certificate Manager issues SSL/TLS certificates, and Amazon Inspector performs vulnerability assessments — none provide a compliance-report portal."
    },
    {
      id: "paper-16-043",
      domain: "EC2",
      topic: "ec2",
      type: "single",
      question: "Which of the following AWS services can be used to run a self-managed database?",
      options: [
        "Amazon Route 53",
        "AWS X-Ray",
        "AWS Snowmobile",
        "Amazon Elastic Compute Cloud (Amazon EC2)"
      ],
      correctAnswer: [3],
      explanation: "Amazon EC2 provides virtual servers where customers can install and run any self-managed database software, such as MySQL or PostgreSQL, giving full control over the database engine. Amazon Route 53 is a DNS service, AWS X-Ray traces application requests, and AWS Snowmobile transports massive datasets — none can host a self-managed database."
    },
    {
      id: "paper-16-044",
      domain: "ACM",
      topic: "support",
      type: "single",
      question: "What exclusive benefit is provided to users with Enterprise Support?",
      options: [
        "Access to a Technical Project Manager",
        "Access to a Technical Account Manager",
        "Access to a Cloud Support Engineer",
        "Access to a Solutions Architect"
      ],
      correctAnswer: [1],
      explanation: "Access to a designated Technical Account Manager (TAM) is an exclusive benefit of the Enterprise Support plan, providing proactive, personalized architectural and operational guidance. Access to a Technical Project Manager, Cloud Support Engineer, or Solutions Architect are not the specific named role tied exclusively to Enterprise Support."
    },
    {
      id: "paper-16-045",
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
      explanation: "Deploying applications across multiple AWS Regions protects against a natural disaster that affects an entire geographic area, since Regions are physically distant from one another. Deploying only across multiple Availability Zones within one Region wouldn't help if the disaster affects the whole Region, a hybrid model within the same geographic area faces the same disaster risk, and AWS Artifact only stores compliance documents, not application data or infrastructure."
    },
    {
      id: "paper-16-046",
      domain: "CLD",
      topic: "cloud-benefits",
      type: "single",
      question: "How does AWS MOST effectively reduce computing costs for a growing start-up company?",
      options: [
        "It provides on-demand resources for peak usage.",
        "It automates the provisioning of individual developer environments.",
        "It automates customer relationship management.",
        "It implements a fixed monthly computing budget."
      ],
      correctAnswer: [0],
      explanation: "AWS reduces computing costs most effectively for a growing startup by providing on-demand resources that can be scaled up during peak usage and back down afterward, avoiding the need to over-provision hardware for worst-case demand. AWS doesn't automate provisioning of individual developer environments or customer relationship management as core cost-reduction mechanisms, and a fixed monthly budget contradicts the flexible, usage-based nature of cloud cost savings."
    },
    {
      id: "paper-16-047",
      domain: "CLD",
      topic: "agility",
      type: "single",
      question: "A startup is working on a new application that needs to go to market quickly. The application requirements may need to be adjusted in the near future. Which of the following is a characteristic of the AWS Cloud that would meet this specific need?",
      options: [
        "Elasticity",
        "Reliability",
        "Performance",
        "Agility"
      ],
      correctAnswer: [3],
      explanation: "Agility is the AWS Cloud characteristic that lets a startup provision and adjust resources quickly, making it easy to go to market fast and adapt requirements as they change. Elasticity refers to automatically scaling capacity with demand, reliability refers to fault tolerance, and performance refers to speed of operations — none directly describe the flexibility to quickly adjust a product to changing market needs."
    },
    {
      id: "paper-16-048",
      domain: "ACM",
      topic: "support",
      type: "single",
      question: "Which AWS Support plan provides a full set of AWS Trusted Advisor checks?",
      options: [
        "Business and Developer Support",
        "Business and Basic Support",
        "Enterprise and Developer Support",
        "Enterprise and Business Support"
      ],
      correctAnswer: [3],
      explanation: "The full set of AWS Trusted Advisor checks, across all categories, is available with the Business and Enterprise Support plans. Developer and Basic Support plans only include a limited subset of core checks, mainly security, so any combination including those tiers is incorrect."
    },
    {
      id: "paper-16-049",
      domain: "SEC",
      topic: "ddos",
      type: "multiple-select",
      question: "Which of the following services have Distributed Denial of Service (DDoS) mitigation features? (Choose two.)",
      options: [
        "AWS WAF",
        "Amazon DynamoDB",
        "Amazon EC2",
        "Amazon CloudFront",
        "Amazon Inspector"
      ],
      correctAnswer: [0, 3],
      explanation: "AWS WAF filters malicious web traffic at the application layer and Amazon CloudFront absorbs and disperses traffic across its global edge network, both providing DDoS mitigation alongside AWS Shield, which protects both. Amazon DynamoDB and Amazon EC2 are compute and database services without built-in DDoS mitigation features, and Amazon Inspector performs vulnerability assessments, not DDoS protection."
    },
    {
      id: "paper-16-050",
      domain: "ACM",
      topic: "tco-calculator",
      type: "multiple-select",
      question: "When building a cloud Total Cost of Ownership (TCO) model, which cost elements should be considered for workloads running on AWS? (Choose three.)",
      options: [
        "Compute costs",
        "Facilities costs",
        "Storage costs",
        "Data transfer costs",
        "Network infrastructure costs"
      ],
      correctAnswer: [0, 2, 3],
      explanation: "A cloud TCO model should account for compute costs, storage costs, and data transfer costs, since these are the direct usage-based costs of running workloads on AWS. Facilities costs and network infrastructure costs are on-premises capital and operational expenses that AWS eliminates for the customer, so they aren't part of the AWS-side TCO calculation for these workloads."
    }
  ]
});
