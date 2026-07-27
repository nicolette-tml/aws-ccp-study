window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "paper-21",
  paperId: "paper-21",
  paperName: "Practice Paper 21",
  questions: [
    {
      id: "paper-21-001",
      domain: "DBA",
      topic: "dynamodb",
      type: "single",
      question: "A user needs to quickly deploy a non-relational database on AWS. The user does not want to manage the underlying hardware or the database software. Which AWS service can be used to accomplish this?",
      options: [
        "Amazon RDS",
        "Amazon DynamoDB",
        "Amazon Aurora",
        "Amazon Redshift"
      ],
      correctAnswer: [1],
      explanation: "Amazon DynamoDB is a fully managed, non-relational (NoSQL) database service, so AWS handles all underlying hardware and database software management. Amazon RDS and Aurora are managed relational database services, and Amazon Redshift is a data warehouse for analytics — none of these are non-relational databases."
    },
    {
      id: "paper-21-002",
      domain: "GLB",
      topic: "regions",
      type: "single",
      question: "A Cloud Practitioner is developing a disaster recovery plan and intends to replicate data between multiple geographic areas. Which of the following meets these requirements?",
      options: [
        "AWS Accounts",
        "AWS Regions",
        "Availability Zones",
        "Edge locations"
      ],
      correctAnswer: [1],
      explanation: "AWS Regions are separate geographic areas, so replicating data between Regions provides the geographic separation needed for disaster recovery. AWS Accounts are administrative boundaries (not geographic), Availability Zones sit within a single Region rather than being separate geographic areas, and Edge locations are used for content caching, not data replication."
    },
    {
      id: "paper-21-003",
      domain: "ACM",
      topic: "organizations",
      type: "multiple-select",
      question: "Which features and benefits does the AWS Organizations service provide? (Choose two.)",
      options: [
        "Establishing real-time communications between members of an internal team",
        "Facilitating the use of NoSQL databases",
        "Providing automated security checks",
        "Implementing consolidated billing",
        "Enforcing the governance of AWS accounts"
      ],
      correctAnswer: [3, 4],
      explanation: "AWS Organizations provides consolidated billing across member accounts and enforces governance of AWS accounts through features like Service Control Policies. It does not provide real-time team communication, facilitate NoSQL databases, or perform automated security checks — those roles belong to services like Amazon Connect/Chime, DynamoDB, and Trusted Advisor/Inspector respectively."
    },
    {
      id: "paper-21-004",
      domain: "DEP",
      topic: "opsworks",
      deprecated: "AWS OpsWorks",
      type: "single",
      question: "Which AWS service is used to automate configuration management using Chef and Puppet?",
      options: [
        "AWS Config",
        "AWS OpsWorks",
        "AWS CloudFormation",
        "AWS Systems Manager"
      ],
      correctAnswer: [1],
      explanation: "AWS OpsWorks is a configuration management service that provides managed instances of Chef and Puppet, automating server configuration. AWS Config tracks resource configuration state rather than automating it via Chef/Puppet, CloudFormation provisions infrastructure as code, and Systems Manager handles broader operational tasks — none of them use Chef or Puppet directly."
    },
    {
      id: "paper-21-005",
      domain: "ACM",
      topic: "consolidated-billing",
      type: "single",
      question: "Which tool is best suited for combining the billing of AWS accounts that were previously independent from one another?",
      options: [
        "Detailed billing report",
        "Consolidated billing",
        "AWS Cost and Usage report",
        "Cost allocation report"
      ],
      correctAnswer: [1],
      explanation: "Consolidated billing is the AWS feature specifically designed to combine billing for multiple, previously independent AWS accounts into a single payer account. A detailed billing report, the Cost and Usage report, and cost allocation reports all provide billing data or analysis, but none of them merge separate accounts' billing together."
    },
    {
      id: "paper-21-006",
      domain: "ACM",
      topic: "tco-calculator",
      type: "single",
      question: "The AWS Total Cost of Ownership (TCO) Calculator is used to:",
      options: [
        "receive reports that break down AWS Cloud compute costs by duration, resource, or tags",
        "estimate savings when comparing the AWS Cloud to an on-premises environment",
        "estimate a monthly bill for the AWS Cloud resources that will be used",
        "enable billing alerts to monitor actual AWS costs compared to estimated costs"
      ],
      correctAnswer: [1],
      explanation: "The AWS TCO Calculator estimates the cost savings of migrating to AWS by comparing on-premises infrastructure costs against equivalent AWS Cloud costs. Cost and Usage Reports break down actual usage/costs by resource, the Pricing Calculator estimates a future monthly AWS bill, and billing alerts compare actual spend to a threshold — none of these compare AWS costs to an on-premises environment."
    },
    {
      id: "paper-21-007",
      domain: "VPC",
      topic: "direct-connect",
      type: "multiple-select",
      question: "Which AWS services can be used to provide network connectivity between an on-premises network and a VPC? (Choose two.)",
      options: [
        "Amazon Route 53",
        "AWS Direct Connect",
        "AWS Data Pipeline",
        "AWS VPN",
        "Amazon Connect"
      ],
      correctAnswer: [1, 3],
      explanation: "AWS Direct Connect provides a dedicated private network connection, and AWS VPN establishes an encrypted connection over the internet — both connect an on-premises network to a VPC. Amazon Route 53 is a DNS service, AWS Data Pipeline orchestrates data workflows, and Amazon Connect is a cloud contact center service, none of which establish network connectivity to a VPC."
    },
    {
      id: "paper-21-008",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "multiple-select",
      question: "Under the AWS shared responsibility model, which of the following are customer responsibilities? (Choose two.)",
      options: [
        "Setting up server-side encryption on an Amazon S3 bucket",
        "Amazon RDS instance patching",
        "Network and firewall configurations",
        "Physical security of data center facilities",
        "Compute capacity availability"
      ],
      correctAnswer: [0, 2],
      explanation: "Setting up server-side encryption on an S3 bucket and configuring network and firewall settings are customer responsibilities under the Shared Responsibility Model, since customers control their own data protection and network configuration. Amazon RDS instance patching, physical data center security, and compute capacity availability are all AWS's responsibility as the managed service and infrastructure provider."
    },
    {
      id: "paper-21-009",
      domain: "ACM",
      topic: "support",
      type: "single",
      question: "What is the MINIMUM AWS Support plan level that will provide users with access to the AWS Support API?",
      options: [
        "Developer",
        "Enterprise",
        "Business",
        "Basic"
      ],
      correctAnswer: [2],
      explanation: "The Business support plan is the minimum tier that includes access to the AWS Support API, allowing programmatic case management. The Developer and Basic plans do not include Support API access, and while Enterprise also includes it, it is a higher tier than the minimum required."
    },
    {
      id: "paper-21-010",
      domain: "DEP",
      topic: "systems-manager",
      type: "single",
      question: "A company has deployed several relational databases on Amazon EC2 instances. Every month, the database software vendor releases new security patches that need to be applied to the databases. What is the MOST efficient way to apply the security patches?",
      options: [
        "Connect to each database instance on a monthly basis, and download and apply the necessary security patches from the vendor.",
        "Enable automatic patching for the instances using the Amazon RDS console.",
        "In AWS Config, configure a rule for the instances and the required patch level.",
        "Use AWS Systems Manager to automate database patching according to a schedule."
      ],
      correctAnswer: [3],
      explanation: "AWS Systems Manager can automate patch management on EC2 instances according to a defined schedule, making it the most efficient, least manual option. Manually connecting to each instance monthly is time-consuming and error-prone, the RDS console option doesn't apply since these are self-managed databases on EC2 rather than RDS, and an AWS Config rule only monitors patch compliance rather than performing the patching itself."
    },
    {
      id: "paper-21-011",
      domain: "GLB",
      topic: "availability-zones",
      type: "single",
      question: "A company wants to use Amazon Elastic Compute Cloud (Amazon EC2) to deploy a global commercial application. The deployment solution should be built with the highest redundancy and fault tolerance. Based on this situation, the Amazon EC2 instances should be deployed:",
      options: [
        "in a single Availability Zone in one AWS Region",
        "with multiple Elastic Network Interfaces belonging to different subnets",
        "across multiple Availability Zones in one AWS Region",
        "across multiple Availability Zones in two AWS Regions"
      ],
      correctAnswer: [2],
      explanation: "Deploying EC2 instances across multiple Availability Zones within a single Region is the standard AWS approach for achieving high redundancy and fault tolerance, since each Availability Zone has independent power, cooling, and networking. A single Availability Zone offers no protection against a data-center-level failure, multiple Elastic Network Interfaces in different subnets don't by themselves provide AZ-level redundancy, and spanning two Regions introduces unnecessary latency and complexity beyond what this scenario calls for."
    },
    {
      id: "paper-21-012",
      domain: "GLB",
      topic: "regions",
      type: "single",
      question: "A company has an application with users in both Australia and Brazil. All the company infrastructure is currently provisioned in the Asia Pacific (Sydney) Region in Australia, and Brazilian users are experiencing high latency. What should the company do to reduce latency?",
      options: [
        "Implement AWS Direct Connect for users in Brazil",
        "Provision resources in the South America (São Paulo) Region in Brazil.",
        "Use AWS Transit Gateway to quickly route users from Brazil to the application",
        "Launch additional Amazon EC2 instances in Sydney to handle the demand"
      ],
      correctAnswer: [1],
      explanation: "Provisioning resources in the South America (São Paulo) Region places infrastructure physically closer to Brazilian users, directly reducing latency. AWS Direct Connect provides dedicated connectivity but doesn't move compute closer to users, AWS Transit Gateway only routes traffic between networks without reducing distance-based latency, and adding more EC2 instances in Sydney does not address the geographic distance causing the latency."
    },
    {
      id: "paper-21-013",
      domain: "ACM",
      topic: "on-demand-instances",
      type: "single",
      question: "An Amazon EC2 instance runs only when needed yet must remain active for the duration of the process. What is the most appropriate purchasing option?",
      options: [
        "Dedicated Instances",
        "Spot Instances",
        "On-Demand Instances",
        "Reserved Instances"
      ],
      correctAnswer: [2],
      explanation: "On-Demand Instances are ideal for workloads that run only when needed and must remain active without interruption for the duration of the process, since you pay only for the time used with no upfront commitment. Dedicated Instances are meant for compliance or licensing needs, Spot Instances can be interrupted by AWS at any time (unsuitable when the instance must stay active), and Reserved Instances require a long-term commitment unsuited to intermittent use."
    },
    {
      id: "paper-21-014",
      domain: "MON",
      topic: "health-dashboard",
      type: "single",
      question: "Which AWS dashboard displays relevant and timely information to help users manage events in progress, and provides proactive notifications to help plan for scheduled activities?",
      options: [
        "AWS Service Health Dashboard",
        "AWS Personal Health Dashboard",
        "AWS Trusted Advisor dashboard",
        "Amazon CloudWatch dashboard"
      ],
      correctAnswer: [1],
      explanation: "The AWS Personal Health Dashboard provides a personalized view of events affecting your specific AWS resources and proactively notifies you of scheduled activities like maintenance. The AWS Service Health Dashboard shows the general status of AWS services rather than being personalized to your resources, Trusted Advisor gives best-practice recommendations, and CloudWatch monitors performance metrics — none provide this kind of personalized event guidance."
    },
    {
      id: "paper-21-015",
      domain: "STG",
      topic: "storage-gateway",
      type: "single",
      question: "Which AWS hybrid storage service enables a user’s on-premises applications to seamlessly use AWS Cloud storage?",
      options: [
        "AWS Backup",
        "Amazon Connect",
        "AWS Direct Connect",
        "AWS Storage Gateway"
      ],
      correctAnswer: [3],
      explanation: "AWS Storage Gateway is a hybrid storage service that connects on-premises applications to AWS Cloud storage, making cloud storage appear as local storage to on-premises systems. AWS Backup centralizes backup management rather than providing hybrid access, Amazon Connect is a contact center service, and AWS Direct Connect provides network connectivity but not the storage integration itself."
    },
    {
      id: "paper-21-016",
      domain: "VPC",
      topic: "security-groups",
      type: "single",
      question: "Which of the following acts as a virtual firewall at the Amazon EC2 instance level to control traffic for one or more instances?",
      options: [
        "Access keys",
        "Virtual private gateways",
        "Security groups",
        "Access Control Lists (ACL)"
      ],
      correctAnswer: [2],
      explanation: "Security groups act as virtual firewalls at the instance level, controlling inbound and outbound traffic for one or more EC2 instances. Access keys are credentials for authentication rather than traffic control, virtual private gateways are the VPC-side endpoint of a VPN connection, and Network ACLs operate at the subnet level rather than the instance level."
    },
    {
      id: "paper-21-017",
      domain: "VPC",
      topic: "transit-gateway",
      type: "single",
      question: "What is the most efficient way to establish network connectivity from on-premises to multiple VPCs in different AWS Regions?",
      options: [
        "Use AWS Direct Connect",
        "Use AWS VPN",
        "Use AWS Client VPN",
        "Use an AWS Transit Gateway"
      ],
      correctAnswer: [3],
      explanation: "AWS Transit Gateway acts as a central hub that efficiently connects an on-premises network to multiple VPCs across different Regions through a single connection point. AWS Direct Connect and AWS VPN would require a separate connection to each VPC (which becomes complex at scale), and AWS Client VPN is for individual remote user access rather than site-to-site multi-VPC connectivity."
    },
    {
      id: "paper-21-018",
      domain: "ACM",
      topic: "support",
      type: "single",
      question: "Which AWS Support plan provides access to architectural and operational reviews, as well as 24/7 access to Senior Cloud Support Engineers through email, online chat, and phone?",
      options: [
        "Basic",
        "Business",
        "Developer",
        "Enterprise"
      ],
      correctAnswer: [3],
      explanation: "The Enterprise support plan includes access to architectural and operational reviews along with 24/7 access to Senior Cloud Support Engineers via email, chat, and phone, plus a dedicated Technical Account Manager. The Basic and Developer plans offer limited or no proactive/24/7 engineer access, and while the Business plan provides 24/7 engineer access, it does not include the architectural reviews offered at the Enterprise tier."
    },
    {
      id: "paper-21-019",
      domain: "ACM",
      topic: "organizations",
      type: "single",
      question: "Which AWS service or feature helps restrict the AWS services, resources, and individual API actions the users and roles in each member account can access?",
      options: [
        "Amazon Cognito",
        "AWS Organizations",
        "AWS Shield",
        "AWS Firewall Manager"
      ],
      correctAnswer: [1],
      explanation: "AWS Organizations, through Service Control Policies, lets administrators restrict which AWS services, resources, and individual API actions users and roles in member accounts can access. Amazon Cognito manages application user identities rather than account-level governance, AWS Shield protects against DDoS attacks, and AWS Firewall Manager centrally manages firewall rules — none control account-wide service or API access restrictions."
    },
    {
      id: "paper-21-020",
      domain: "SEC",
      topic: "artifact",
      type: "single",
      question: "What is the best resource for a user to find compliance-related information and reports about AWS?",
      options: [
        "AWS Artifact",
        "AWS Marketplace",
        "Amazon Inspector",
        "AWS Support"
      ],
      correctAnswer: [0],
      explanation: "AWS Artifact is the central resource for on-demand access to AWS's compliance reports and agreements, such as SOC and PCI reports. AWS Marketplace is a software catalog, Amazon Inspector scans for vulnerabilities, and AWS Support handles account and technical inquiries — none provide compliance documentation the way Artifact does."
    },
    {
      id: "paper-21-021",
      domain: "S3",
      topic: "storage-classes",
      type: "single",
      question: "Which Amazon S3 storage class is optimized to provide access to data with lower resiliency requirements, but rapid access when needed such as duplicate backups?",
      options: [
        "Amazon S3 Standard",
        "Amazon S3 Glacier Deep Archive",
        "Amazon S3 One Zone-Infrequent Access",
        "Amazon S3 Glacier"
      ],
      correctAnswer: [2],
      explanation: "Amazon S3 One Zone-Infrequent Access stores data in a single Availability Zone, giving it lower resiliency than multi-AZ classes, while still providing rapid access when needed, making it well suited for easily re-creatable data like duplicate backups. S3 Standard offers higher resiliency across multiple AZs at a higher cost for infrequent access, and both Glacier and Glacier Deep Archive are designed for archival data with retrieval delays rather than rapid access."
    },
    {
      id: "paper-21-022",
      domain: "GLB",
      topic: "availability-zones",
      type: "single",
      question: "What is an Availability Zone in AWS?",
      options: [
        "One or more physical data centers",
        "A completely isolated geographic location",
        "One or more edge locations based around the world",
        "A data center location with a single source of power and networking"
      ],
      correctAnswer: [0],
      explanation: "An Availability Zone consists of one or more discrete physical data centers with independent power, cooling, and networking within an AWS Region. A completely isolated geographic location instead describes an AWS Region, edge locations are separate infrastructure used for content caching, and a data center with only a single source of power and networking describes an individual facility, not the redundant design of an AZ."
    },
    {
      id: "paper-21-023",
      domain: "DEP",
      topic: "infrastructure-automation",
      type: "multiple-select",
      question: "Which AWS services can be used as infrastructure automation tools? (Choose two.)",
      options: [
        "AWS CloudFormation",
        "Amazon CloudFront",
        "AWS Batch",
        "AWS OpsWorks",
        "Amazon QuickSight"
      ],
      correctAnswer: [0, 3],
      explanation: "AWS CloudFormation automates infrastructure provisioning through code-based templates, and AWS OpsWorks automates configuration management using Chef and Puppet — both are infrastructure automation tools. Amazon CloudFront is a content delivery network, AWS Batch runs batch computing jobs, and Amazon QuickSight is a business intelligence tool, none of which automate infrastructure provisioning or configuration."
    },
    {
      id: "paper-21-024",
      domain: "DEP",
      topic: "cloudformation",
      type: "single",
      question: "Which AWS service enables users to create copies of resources across AWS Regions?",
      options: [
        "Amazon ElastiCache",
        "AWS CloudFormation",
        "AWS CloudTrail",
        "AWS Systems Manager"
      ],
      correctAnswer: [1],
      explanation: "AWS CloudFormation lets users define infrastructure as reusable templates, which can be deployed in multiple AWS Regions to create consistent copies of resources. Amazon ElastiCache is an in-memory caching service, AWS CloudTrail logs API activity, and AWS Systems Manager handles operational tasks — none are designed to replicate resource stacks across Regions."
    },
    {
      id: "paper-21-025",
      domain: "SEC",
      topic: "kms",
      type: "single",
      question: "A user would like to encrypt data that is received, stored, and managed by AWS CloudTrail. Which AWS service will provide this capability?",
      options: [
        "AWS Secrets Manager",
        "AWS Systems Manager",
        "AWS Key Management Service (AWS KMS)",
        "AWS Certificate Manager"
      ],
      correctAnswer: [2],
      explanation: "AWS Key Management Service (KMS) provides the encryption keys used to encrypt data received, stored, and managed by AWS CloudTrail, as well as by many other AWS services. AWS Secrets Manager stores credentials and secrets rather than providing general encryption key management, Systems Manager handles operational tasks, and Certificate Manager manages SSL/TLS certificates — none provide the encryption capability CloudTrail relies on."
    },
    {
      id: "paper-21-026",
      domain: "CLD",
      topic: "elasticity",
      type: "single",
      question: "Which AWS Cloud benefit eliminates the need for users to try estimating future infrastructure usage?",
      options: [
        "Easy and fast deployment of applications in multiple Regions around the world",
        "Security of the AWS Cloud",
        "Elasticity of the AWS Cloud",
        "Lower variable costs due to massive economies of scale"
      ],
      correctAnswer: [2],
      explanation: "Elasticity of the AWS Cloud allows resources to automatically scale up or down based on actual demand, eliminating the need to guess future infrastructure requirements in advance. Fast global deployment, security, and lower variable costs from economies of scale are all real AWS benefits, but they don't address the need to estimate usage the way elasticity does."
    },
    {
      id: "paper-21-027",
      domain: "IAM",
      topic: "access-keys",
      type: "multiple-select",
      question: "What credential components are required to gain programmatic access to an AWS account? (Choose two.)",
      options: [
        "An access key ID",
        "A primary key",
        "A secret access key",
        "A user ID",
        "A secondary key"
      ],
      correctAnswer: [0, 2],
      explanation: "Programmatic access to AWS requires an access key ID paired with a secret access key, which together authenticate API, CLI, or SDK requests. There is no such thing as a 'primary key' or 'secondary key' used for AWS authentication, and a user ID alone is not sufficient to authenticate programmatic requests."
    },
    {
      id: "paper-21-028",
      domain: "CMP",
      topic: "compute-services",
      type: "multiple-select",
      question: "Which of the following are AWS compute services? (Select two.)",
      options: [
        "Amazon Lightsail",
        "AWS Systems Manager",
        "AWS CloudFormation",
        "AWS Batch",
        "Amazon Inspector"
      ],
      correctAnswer: [0, 3],
      explanation: "Amazon Lightsail and AWS Batch are both AWS compute services — Lightsail provides simplified virtual private servers, and Batch runs batch computing workloads. AWS Systems Manager is an operations management tool, AWS CloudFormation is an infrastructure-as-code service, and Amazon Inspector is a security assessment service, none of which are compute services."
    },
    {
      id: "paper-21-029",
      domain: "ACM",
      topic: "account-separation",
      type: "single",
      question: "How can a company separate costs for network traffic, Amazon EC2, Amazon S3, and other AWS services by department?",
      options: [
        "Add department-specific tags to each resource",
        "Create a separate VPC for each department",
        "Create a separate AWS account for each department",
        "Use AWS Organizations"
      ],
      correctAnswer: [2],
      explanation: "Creating a separate AWS account for each department is the clearest way to separate and track costs, since AWS billing is inherently organized by account and each department's usage appears distinctly (these accounts can then still be consolidated for billing via AWS Organizations). Tagging resources helps allocate costs within a single account but is less clean at scale, a separate VPC per department only isolates networking rather than billing, and AWS Organizations manages multiple accounts but doesn't by itself create the cost separation."
    },
    {
      id: "paper-21-030",
      domain: "ACM",
      topic: "consolidated-billing",
      type: "single",
      question: "What is a benefit of consolidated billing for AWS accounts?",
      options: [
        "Access to AWS Personal Health Dashboard",
        "Combined usage volume discounts",
        "Improved account security",
        "Centralized AWS IAM"
      ],
      correctAnswer: [1],
      explanation: "Consolidated billing combines usage across all linked accounts, allowing them to collectively reach volume-based pricing tiers and receive combined usage discounts. The Personal Health Dashboard, account security, and centralized IAM are unrelated benefits not provided by consolidated billing itself."
    },
    {
      id: "paper-21-031",
      domain: "ACM",
      topic: "budgets",
      type: "single",
      question: "Which AWS service will allow a user to set custom cost and usage limits, and will alert when the thresholds are exceeded?",
      options: [
        "AWS Organizations",
        "AWS Budgets",
        "Cost Explorer",
        "AWS Trusted Advisor"
      ],
      correctAnswer: [1],
      explanation: "AWS Budgets lets users set custom cost and usage thresholds and sends alerts when those thresholds are exceeded or forecasted to be exceeded. AWS Organizations manages multiple accounts, Cost Explorer visualizes historical spending without custom alerting, and Trusted Advisor gives best-practice recommendations — none provide custom threshold-based budget alerts."
    },
    {
      id: "paper-21-032",
      domain: "SEC",
      topic: "macie",
      type: "single",
      question: "Which AWS service provides the ability to detect inadvertent data leaks of personally identifiable information (PII) and user credential data?",
      options: [
        "Amazon GuardDuty",
        "Amazon Inspector",
        "Amazon Macie",
        "AWS Shield"
      ],
      correctAnswer: [2],
      explanation: "Amazon Macie uses machine learning to automatically detect and classify sensitive data, such as personally identifiable information and credentials, stored in S3. Amazon GuardDuty detects threats and anomalous account activity, Amazon Inspector scans for software vulnerabilities, and AWS Shield protects against DDoS attacks — none scan for sensitive data leaks."
    },
    {
      id: "paper-21-033",
      domain: "ACM",
      topic: "trusted-advisor",
      type: "single",
      question: "Which tool can be used to monitor AWS service limits?",
      options: [
        "AWS Total Cost of Ownership (TCO) Calculator",
        "AWS Trusted Advisor",
        "AWS Personal Health Dashboard",
        "AWS Cost and Usage report"
      ],
      correctAnswer: [1],
      explanation: "AWS Trusted Advisor includes a service-limits check that monitors usage against AWS service quotas and warns when an account approaches those limits. The TCO Calculator estimates on-premises versus cloud costs, the Personal Health Dashboard shows account-specific service events, and the Cost and Usage Report details billing data — none monitor service limits."
    },
    {
      id: "paper-21-034",
      domain: "CLD",
      topic: "cloud-models",
      type: "single",
      question: "A company has distributed its workload on both the AWS Cloud and some on-premises servers. What type of architecture is this?",
      options: [
        "Virtual private network",
        "Virtual private cloud",
        "Hybrid cloud",
        "Private cloud"
      ],
      correctAnswer: [2],
      explanation: "A hybrid cloud architecture combines on-premises infrastructure with cloud resources, which matches a workload distributed across both AWS and on-premises servers. A virtual private network and virtual private cloud are networking constructs rather than deployment models, and a private cloud runs entirely on dedicated, non-shared infrastructure without any public cloud component."
    },
    {
      id: "paper-21-035",
      domain: "IAM",
      topic: "least-privilege",
      type: "single",
      question: "Which of the following describes a security best practice that can be implemented using AWS IAM?",
      options: [
        "Disable AWS Management Console access for all users",
        "Generate secret keys for every IAM user",
        "Grant permissions to users who are required to perform a given task only",
        "Store AWS credentials within Amazon EC2 instances"
      ],
      correctAnswer: [2],
      explanation: "Granting permissions only for the tasks a user is required to perform reflects the Principle of Least Privilege, a core IAM security best practice that minimizes risk. Disabling console access for everyone, generating secret keys for every user, and storing AWS credentials on EC2 instances are all poor practices that either reduce usability unnecessarily or increase security risk."
    },
    {
      id: "paper-21-036",
      domain: "ACM",
      topic: "control-tower",
      type: "single",
      question: "What can be used to automate and manage secure, well-architected, multi-account AWS environments?",
      options: [
        "AWS shared responsibility model",
        "AWS Control Tower",
        "AWS Security Hub",
        "AWS Well-Architected Tool"
      ],
      correctAnswer: [1],
      explanation: "AWS Control Tower automates the setup and ongoing governance of a secure, well-architected, multi-account AWS environment, building on top of AWS Organizations. The Shared Responsibility Model describes the division of security tasks rather than account setup, AWS Security Hub aggregates security findings, and the AWS Well-Architected Tool reviews workloads against best practices but doesn't automate multi-account provisioning."
    },
    {
      id: "paper-21-037",
      domain: "VPC",
      topic: "transit-gateway",
      type: "single",
      question: "Which AWS service or feature allows a user to easily scale connectivity among thousands of VPCs?",
      options: [
        "VPC peering",
        "AWS Transit Gateway",
        "AWS Direct Connect",
        "AWS Global Accelerator"
      ],
      correctAnswer: [1],
      explanation: "AWS Transit Gateway acts as a central hub that can connect thousands of VPCs and on-premises networks through a single gateway, dramatically simplifying network scaling. VPC peering requires a separate connection for each pair of VPCs, which doesn't scale well, Direct Connect provides connectivity to on-premises rather than VPC-to-VPC scaling, and Global Accelerator improves application routing rather than interconnecting VPCs."
    },
    {
      id: "paper-21-038",
      domain: "SEC",
      topic: "shield",
      type: "single",
      question: "A company needs protection from expanded distributed denial of service (DDoS) attacks on its website and assistance from AWS experts during such events. Which AWS managed service will meet these requirements?",
      options: [
        "AWS Shield Advanced",
        "AWS Firewall Manager",
        "AWS WAF",
        "Amazon GuardDuty"
      ],
      correctAnswer: [0],
      explanation: "AWS Shield Advanced provides enhanced DDoS protection along with 24/7 access to the AWS DDoS Response Team for assistance during attacks. AWS Firewall Manager centrally manages security rules without DDoS-specific expert support, AWS WAF filters web application traffic, and Amazon GuardDuty detects threats but doesn't provide DDoS-specific expert response assistance."
    },
    {
      id: "paper-21-039",
      domain: "ACM",
      topic: "spot-instances",
      type: "single",
      question: "A company’s application has flexible start and end times. Which Amazon EC2 pricing model will be the MOST cost-effective?",
      options: [
        "On-Demand Instances",
        "Spot Instances",
        "Reserved Instances",
        "Dedicated Hosts"
      ],
      correctAnswer: [1],
      explanation: "Spot Instances are most cost-effective for workloads with flexible start and end times, since they can tolerate interruption when AWS reclaims capacity, offering savings of up to 90% over On-Demand pricing. On-Demand Instances cost more for flexible workloads, Reserved Instances require a long-term commitment unsuited to flexible timing, and Dedicated Hosts are priced for compliance or licensing needs rather than cost optimization."
    },
    {
      id: "paper-21-040",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "multiple-select",
      question: "Under the AWS shared responsibility model, what are the customer’s responsibilities? (Choose two.)",
      options: [
        "Physical and environmental security",
        "Physical network devices including firewalls",
        "Storage device decommissioning",
        "Security of data in transit",
        "Data integrity authentication"
      ],
      correctAnswer: [3, 4],
      explanation: "Security of data in transit and data integrity authentication are customer responsibilities under the Shared Responsibility Model, since customers control how their data and applications handle security. Physical and environmental security, physical network devices, and storage device decommissioning are all AWS's responsibility as part of securing the underlying infrastructure."
    },
    {
      id: "paper-21-041",
      domain: "ACM",
      topic: "spot-instances",
      type: "single",
      question: "A cloud practitioner has a data analysis workload that is infrequently executed and can be interrupted without harm. To optimize for cost, which Amazon EC2 purchasing option should be used?",
      options: [
        "On-Demand Instances",
        "Reserved Instances",
        "Spot Instances",
        "Dedicated Hosts"
      ],
      correctAnswer: [2],
      explanation: "Spot Instances are the most cost-effective choice for infrequent workloads that can tolerate interruption, since they offer steep discounts in exchange for the possibility of being reclaimed by AWS. On-Demand Instances cost more without offering this discount, Reserved Instances require a long-term commitment unsuited to infrequent workloads, and Dedicated Hosts are priced for compliance and licensing needs rather than cost savings."
    },
    {
      id: "paper-21-042",
      domain: "CMP",
      topic: "ecs",
      type: "single",
      question: "Which AWS container service will help a user install, operate, and scale the cluster management infrastructure?",
      options: [
        "Amazon Elastic Container Registry (Amazon ECR)",
        "AWS Elastic Beanstalk",
        "Amazon Elastic Container Service (Amazon ECS)",
        "Amazon Elastic Block Store (Amazon EBS)"
      ],
      correctAnswer: [2],
      explanation: "Amazon Elastic Container Service (ECS) manages the cluster infrastructure needed to run, scale, and orchestrate containers, removing the burden of installing and operating that infrastructure yourself. Amazon ECR is a container image registry rather than cluster management, AWS Elastic Beanstalk is a broader application deployment service, and Amazon EBS is block storage — none manage container cluster infrastructure."
    },
    {
      id: "paper-21-043",
      domain: "IAM",
      topic: "iam-roles",
      type: "single",
      question: "Which of the following allows an application running on an Amazon EC2 instance to securely write data to an Amazon S3 bucket without using long term credentials?",
      options: [
        "Amazon Cognito",
        "AWS Shield",
        "AWS IAM role",
        "AWS IAM user access key"
      ],
      correctAnswer: [2],
      explanation: "An IAM role can be attached to an EC2 instance, providing temporary security credentials that the application can use to securely access S3 without storing long-term credentials on the instance. Amazon Cognito manages application user identities rather than EC2-to-service access, AWS Shield is DDoS protection, and an IAM user access key is itself a long-term credential — the opposite of what's needed here."
    },
    {
      id: "paper-21-044",
      domain: "ACM",
      topic: "support",
      type: "single",
      question: "A company with a Developer-level AWS Support plan provisioned an Amazon RDS database and cannot connect to it. Who should the developer contact for this level of support?",
      options: [
        "AWS Support using a support case",
        "AWS Professional Services",
        "AWS technical account manager",
        "AWS consulting partners"
      ],
      correctAnswer: [0],
      explanation: "With a Developer-level AWS Support plan, technical issues like being unable to connect to an RDS database should be raised through a support case with AWS Support. AWS Professional Services and consulting partners are paid, separate engagements not included in the Developer plan, and a dedicated Technical Account Manager is only included with the Enterprise plan."
    },
    {
      id: "paper-21-045",
      domain: "VPC",
      topic: "internet-gateway",
      type: "single",
      question: "What is the purpose of having an internet gateway within a VPC?",
      options: [
        "To create a VPN connection to the VPC",
        "To allow communication between the VPC and the Internet",
        "To impose bandwidth constraints on internet traffic",
        "To load balance traffic from the Internet across Amazon EC2 instances"
      ],
      correctAnswer: [1],
      explanation: "An internet gateway is a horizontally scaled, redundant VPC component that allows communication between resources in a VPC and the internet. It is not used to create VPN connections, which is the role of a virtual private gateway, it doesn't impose bandwidth constraints, and it doesn't load balance traffic across instances."
    },
    {
      id: "paper-21-046",
      domain: "DBA",
      topic: "rds-multi-az",
      type: "single",
      question: "A company must ensure that its endpoint for a database instance remains the same after a single Availability Zone service interruption. The application needs to resume database operations without the need for manual administrative intervention. How can these requirements be met?",
      options: [
        "Use multiple Amazon Route 53 routes to the standby database instance endpoint hosted on AWS Storage Gateway.",
        "Configure Amazon RDS Multi-Availability Zone deployments with automatic failover to the standby.",
        "Add multiple Application Load Balancers and deploy the database instance with AWS Elastic Beanstalk.",
        "Deploy a single Network Load Balancer to distribute incoming traffic across multiple Amazon CloudFront origins."
      ],
      correctAnswer: [1],
      explanation: "Amazon RDS Multi-AZ deployments maintain a synchronously replicated standby in another Availability Zone and automatically fail over to it during an AZ interruption, preserving the same database endpoint without manual intervention. Routing to a standby hosted on Storage Gateway is not a valid database failover pattern, Application Load Balancers and Elastic Beanstalk don't provide database failover, and a Network Load Balancer with CloudFront origins is unrelated to database availability."
    },
    {
      id: "paper-21-047",
      domain: "ELB",
      topic: "elb",
      type: "single",
      question: "Which AWS managed service can be used to distribute traffic between one or more Amazon EC2 instances?",
      options: [
        "NAT gateway",
        "Elastic Load Balancing",
        "Amazon Athena",
        "AWS PrivateLink"
      ],
      correctAnswer: [1],
      explanation: "Elastic Load Balancing automatically distributes incoming application traffic across multiple EC2 instances to improve availability and fault tolerance. A NAT gateway allows outbound internet access for private subnets, Amazon Athena is a query service for data in S3, and AWS PrivateLink provides private connectivity to services — none distribute traffic across EC2 instances."
    },
    {
      id: "paper-21-048",
      domain: "ACM",
      topic: "trusted-advisor",
      type: "multiple-select",
      question: "AWS Trusted Advisor provides recommendations on which of the following? (Choose two.)",
      options: [
        "Cost optimization",
        "Auditing",
        "Serverless architecture",
        "Performance",
        "Scalability"
      ],
      correctAnswer: [0, 3],
      explanation: "AWS Trusted Advisor provides recommendations across five categories, including cost optimization and performance, along with security, fault tolerance, and service limits. Auditing, serverless architecture, and scalability are not among Trusted Advisor's defined recommendation categories."
    },
    {
      id: "paper-21-049",
      domain: "IAM",
      topic: "root-user",
      type: "multiple-select",
      question: "Which of the following tasks can only be performed after signing in with AWS account root user credentials? (Choose two.)",
      options: [
        "Closing an AWS account",
        "Creating a new IAM policy",
        "Changing AWS Support plans",
        "Attaching a role to an Amazon EC2 instance",
        "Generating access keys for IAM users"
      ],
      correctAnswer: [0, 2],
      explanation: "Closing an AWS account and changing AWS Support plans are among the limited set of actions that can only be performed while signed in as the root user. Creating IAM policies, attaching roles to EC2 instances, and generating access keys for IAM users can all be performed by appropriately privileged IAM users, not just the root user."
    },
    {
      id: "paper-21-050",
      domain: "CLD",
      topic: "fault-tolerance",
      type: "single",
      question: "Fault tolerance refers to:",
      options: [
        "the ability of an application to accommodate growth without changing design",
        "how well and how quickly an application’s environment can have lost data restored",
        "how secure your application is",
        "the built-in redundancy of an application’s components"
      ],
      correctAnswer: [3],
      explanation: "Fault tolerance refers to the built-in redundancy of an application's components, allowing it to continue operating even if a component fails. Accommodating growth without changing design describes scalability, restoring lost data quickly describes disaster recovery, and general security is a separate concern from fault tolerance."
    }
  ]
});
