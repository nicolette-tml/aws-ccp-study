window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "paper-17",
  paperId: "paper-17",
  paperName: "Practice Paper 17",
  questions: [
    {
      id: "paper-17-001",
      domain: "ML",
      topic: "rekognition",
      type: "single",
      question: "What time-savings advantage is offered with the use of Amazon Rekognition?",
      options: [
        "Amazon Rekognition provides automatic watermarking of images.",
        "Amazon Rekognition provides automatic detection of objects appearing in pictures.",
        "Amazon Rekognition provides the ability to resize millions of images automatically.",
        "Amazon Rekognition uses Amazon Mechanical Turk to allow humans to bid on object detection jobs."
      ],
      correctAnswer: [1],
      explanation: "Amazon Rekognition saves time by automatically detecting and labeling objects, scenes, and faces appearing in images and video, removing the need for manual review. It does not perform watermarking, image resizing, or use Mechanical Turk for bidding on detection jobs."
    },
    {
      id: "paper-17-002",
      domain: "ACM",
      topic: "pricing-models",
      type: "single",
      question: "When comparing AWS with on-premises Total Cost of Ownership (TCO), what costs are included?",
      options: [
        "Data center security",
        "Business analysis",
        "Project management",
        "Operating system administration"
      ],
      correctAnswer: [0],
      explanation: "When comparing AWS to on-premises TCO, costs like data center security are included because a customer running their own data center must pay for physical security, which AWS absorbs in the cloud. Business analysis, project management, and OS administration are operational staffing costs that exist in both environments and are not part of the infrastructure TCO comparison."
    },
    {
      id: "paper-17-003",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "According to the AWS shared responsibility model, what is AWS responsible for?",
      options: [
        "Configuring Amazon VPC",
        "Managing application code",
        "Maintaining application traffic",
        "Managing the network infrastructure"
      ],
      correctAnswer: [3],
      explanation: "Under the shared responsibility model, AWS is responsible for managing the underlying network infrastructure of the cloud (security of the cloud). Configuring a customer's VPC, managing application code, and maintaining application traffic are all tasks the customer controls and is responsible for (security in the cloud)."
    },
    {
      id: "paper-17-004",
      domain: "ACM",
      topic: "cost-explorer",
      type: "single",
      question: "Which service should be used to estimate the costs of running a new project on AWS?",
      options: [
        "AWS TCO Calculator",
        "AWS Simple Monthly Calculator",
        "AWS Cost Explorer API",
        "AWS Budgets"
      ],
      correctAnswer: [2],
      explanation: "The AWS Cost Explorer API lets users programmatically estimate and analyze the costs of running a new project by querying historical and forecasted usage data. The TCO Calculator compares on-premises versus AWS costs, the Simple Monthly Calculator was a legacy estimation tool (now replaced by the Pricing Calculator) rather than a cost-analysis API, and AWS Budgets is for setting spending alerts, not estimating new project costs."
    },
    {
      id: "paper-17-005",
      domain: "ACM",
      topic: "trusted-advisor",
      type: "single",
      question: "Which AWS tool will identify security groups that grant unrestricted Internet access to a limited list of ports?",
      options: [
        "AWS Organizations",
        "AWS Trusted Advisor",
        "AWS Usage Report",
        "Amazon EC2 dashboard"
      ],
      correctAnswer: [1],
      explanation: "AWS Trusted Advisor includes automated security checks that flag security groups with rules allowing unrestricted access to specific ports. AWS Organizations manages multiple accounts, there is no service called 'AWS Usage Report,' and the EC2 dashboard only shows instance details, not security posture checks."
    },
    {
      id: "paper-17-006",
      domain: "MON",
      topic: "cloudwatch",
      type: "single",
      question: "Which AWS service can be used to generate alerts based on an estimated monthly bill?",
      options: [
        "AWS Config",
        "Amazon CloudWatch",
        "AWS X-Ray",
        "AWS CloudTrail"
      ],
      correctAnswer: [1],
      explanation: "Amazon CloudWatch supports billing alarms that can trigger notifications when estimated charges exceed a defined threshold. AWS Config tracks resource configuration changes, AWS X-Ray traces application requests, and AWS CloudTrail logs API activity — none generate billing alerts."
    },
    {
      id: "paper-17-007",
      domain: "ACM",
      topic: "reserved-instances",
      type: "single",
      question: "Which Amazon EC2 pricing model offers the MOST significant discount when compared to On-Demand Instances?",
      options: [
        "Partial Upfront Reserved Instances for a 1-year term",
        "All Upfront Reserved Instances for a 1-year term",
        "All Upfront Reserved Instances for a 3-year term",
        "No Upfront Reserved Instances for a 3-year term"
      ],
      correctAnswer: [2],
      explanation: "All Upfront Reserved Instances for a 3-year term offer the deepest discount compared to On-Demand pricing because paying the full amount upfront for the longest commitment maximizes AWS's discount. Partial Upfront and All Upfront 1-year terms involve shorter commitments with smaller discounts, and No Upfront 3-year term carries less discount than paying all upfront for the same term."
    },
    {
      id: "paper-17-008",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "Which of the following is the responsibility of AWS?",
      options: [
        "Setting up AWS Identity and Access Management (IAM) users and groups",
        "Physically destroying storage media at end of life",
        "Patching guest operating systems",
        "Configuring security settings on Amazon EC2 instances"
      ],
      correctAnswer: [1],
      explanation: "Physically destroying storage media at end of life is AWS's responsibility as part of securing the physical infrastructure ('security of the cloud'). Setting up IAM users/groups, patching guest operating systems, and configuring EC2 security settings are all customer responsibilities under the shared responsibility model."
    },
    {
      id: "paper-17-009",
      domain: "CLD",
      topic: "cloud-benefits",
      type: "single",
      question: "Which of the following is an advantage of using AWS?",
      options: [
        "AWS audits user data.",
        "Data is automatically secure.",
        "There is no guessing on capacity needs.",
        "AWS manages compliance needs."
      ],
      correctAnswer: [2],
      explanation: "A key advantage of AWS is that customers no longer need to guess capacity needs in advance, since resources can scale elastically based on actual demand. AWS does not audit customer data, data is not automatically secure (security is a shared responsibility), and AWS does not manage a customer's compliance needs for them."
    },
    {
      id: "paper-17-010",
      domain: "GLB",
      topic: "cloudfront",
      type: "single",
      question: "Which AWS service would a customer use with a static website to achieve lower latency and high transfer speeds?",
      options: [
        "AWS Lambda",
        "Amazon DynamoDB Accelerator",
        "Amazon Route 53",
        "Amazon CloudFront"
      ],
      correctAnswer: [3],
      explanation: "Amazon CloudFront is the CDN that caches static website content at edge locations worldwide, delivering lower latency and higher transfer speeds to end users. AWS Lambda is a compute service, DynamoDB Accelerator (DAX) caches DynamoDB queries, and Route 53 provides DNS routing, not content caching."
    },
    {
      id: "paper-17-011",
      domain: "DEP",
      topic: "cloudformation",
      type: "multiple-select",
      question: "Which services manage and automate application deployments on AWS? (Choose two.)",
      options: [
        "AWS Elastic Beanstalk",
        "AWS CodeCommit",
        "AWS Data Pipeline",
        "AWS CloudFormation",
        "AWS Config"
      ],
      correctAnswer: [0, 3],
      explanation: "AWS Elastic Beanstalk and AWS CloudFormation both manage and automate application deployments: Elastic Beanstalk automatically provisions and manages the underlying resources for an application, while CloudFormation automates infrastructure provisioning via templates. AWS CodeCommit is a source-control repository, AWS Data Pipeline orchestrates data workflows, and AWS Config tracks resource configuration — none automate deployments."
    },
    {
      id: "paper-17-012",
      domain: "ACM",
      topic: "tco-calculator",
      type: "single",
      question: "A user wants guidance on possible savings when migrating from on-premises to AWS. Which tool is suitable for this scenario?",
      options: [
        "AWS Budgets",
        "Cost Explorer",
        "AWS Total Cost of Ownership (TCO) Calculator",
        "AWS Well-Architected Tool"
      ],
      correctAnswer: [2],
      explanation: "The AWS Total Cost of Ownership (TCO) Calculator is designed specifically to estimate potential savings when migrating workloads from on-premises to AWS by comparing the costs of both environments. AWS Budgets sets spending alerts, Cost Explorer analyzes existing AWS usage, and the Well-Architected Tool reviews architecture against best practices — none compare on-premises versus AWS costs."
    },
    {
      id: "paper-17-013",
      domain: "ARC",
      topic: "well-architected",
      type: "multiple-select",
      question: "Which principles are used to architect applications for reliability on the AWS Cloud? (Choose two.)",
      options: [
        "Design for automated failure recovery",
        "Use multiple Availability Zones",
        "Manage changes via documented processes",
        "Test for moderate demand to ensure reliability",
        "Backup recovery to an on-premises environment"
      ],
      correctAnswer: [0, 1],
      explanation: "Designing for automated failure recovery and using multiple Availability Zones are both core reliability principles, ensuring applications can withstand and recover from component failures. Managing changes via documented processes relates more to operational excellence, testing for moderate demand doesn't validate reliability under real stress, and backing up to on-premises is not an AWS reliability best practice."
    },
    {
      id: "paper-17-014",
      domain: "SEC",
      topic: "account-compromise",
      type: "multiple-select",
      question: "What tasks should a customer perform when that customer suspects an AWS account has been compromised? (Choose two.)",
      options: [
        "Rotate passwords and access keys.",
        "Remove MFA tokens.",
        "Move resources to a different AWS Region.",
        "Delete AWS CloudTrail Resources.",
        "Contact AWS Support."
      ],
      correctAnswer: [0, 4],
      explanation: "If an AWS account is suspected of being compromised, the customer should rotate passwords and access keys to cut off unauthorized access, and contact AWS Support for assistance investigating and remediating the incident. Removing MFA tokens would weaken security further, moving resources to another Region doesn't address the compromise, and deleting CloudTrail resources would destroy evidence needed for investigation."
    },
    {
      id: "paper-17-015",
      domain: "ELB",
      topic: "high-availability",
      type: "single",
      question: "What is an example of high availability in the AWS Cloud?",
      options: [
        "Consulting AWS technical support at any time day or night",
        "Ensuring an application remains accessible, even if a resource fails",
        "Making any AWS service available for use by paying on demand",
        "Deploying in any part of the world using AWS Regions"
      ],
      correctAnswer: [1],
      explanation: "High availability means an application remains accessible to users even when an underlying resource fails, typically achieved through redundancy across multiple Availability Zones. Round-the-clock support access, on-demand service availability, and Region-based global deployment are separate AWS characteristics, not the definition of high availability."
    },
    {
      id: "paper-17-016",
      domain: "SEC",
      topic: "shield",
      type: "single",
      question: "Which AWS security service protects applications from distributed denial of service attacks with always-on detection and automatic inline mitigations?",
      options: [
        "Amazon Inspector",
        "AWS Web Application Firewall (AWS WAF)",
        "Elastic Load Balancing (ELB)",
        "AWS Shield"
      ],
      correctAnswer: [3],
      explanation: "AWS Shield provides always-on detection and automatic inline mitigation to protect applications against distributed denial of service (DDoS) attacks. Amazon Inspector scans for vulnerabilities, AWS WAF filters malicious web application traffic (not full DDoS mitigation), and Elastic Load Balancing distributes traffic but doesn't specifically detect and mitigate DDoS attacks."
    },
    {
      id: "paper-17-017",
      domain: "MON",
      topic: "cloudwatch",
      type: "single",
      question: "A company wants to monitor the CPU usage of its Amazon EC2 resources. Which AWS service should the company use?",
      options: [
        "AWS CloudTrail",
        "Amazon CloudWatch",
        "AWS Cost and Usage report",
        "Amazon Simple Notification Service (Amazon SNS)"
      ],
      correctAnswer: [1],
      explanation: "Amazon CloudWatch monitors metrics such as CPU utilization for EC2 instances, making it the correct choice for this monitoring need. AWS CloudTrail logs API calls, the Cost and Usage report tracks billing details, and Amazon SNS is a notification service — none monitor resource performance metrics."
    },
    {
      id: "paper-17-018",
      domain: "IAM",
      topic: "iam-roles",
      type: "single",
      question: "What is an AWS Identity and Access Management (IAM) role?",
      options: [
        "A user associated with an AWS resource",
        "A group associated with an AWS resource",
        "An entity that defines a set of permissions for use with an AWS resource",
        "An authentication credential associated with a multi-factor authentication (MFA) token"
      ],
      correctAnswer: [2],
      explanation: "An IAM role is an entity that defines a set of permissions for use with an AWS resource, and it can be assumed temporarily by users, applications, or services without long-term credentials. It is not itself a user or group associated with a resource, nor is it an MFA authentication credential."
    },
    {
      id: "paper-17-019",
      domain: "ACM",
      topic: "reserved-instances",
      type: "multiple-select",
      question: "What are the advantages of Reserved Instances? (Choose two.)",
      options: [
        "They provide a discount over on-demand pricing.",
        "They provide access to additional instance types.",
        "They provide additional networking capability.",
        "Customers can upgrade instances as new types become available.",
        "Customers can reserve capacity in an Availability Zone."
      ],
      correctAnswer: [0, 4],
      explanation: "Reserved Instances provide a discount over On-Demand pricing in exchange for a commitment, and they also allow customers to reserve capacity in a specific Availability Zone, guaranteeing availability when needed. They do not provide access to additional instance types or extra networking capability, and while Convertible RIs allow exchanges, customers cannot freely 'upgrade' instances as new types become available under a Standard RI."
    },
    {
      id: "paper-17-020",
      domain: "ELB",
      topic: "auto-scaling",
      type: "single",
      question: "How do Amazon EC2 Auto Scaling groups help achieve high availability for a web application?",
      options: [
        "They automatically add more instances across multiple AWS Regions based on global demand of the application.",
        "They automatically add or replace instances across multiple Availability Zones when the application needs it.",
        "They enable the application’s static content to reside closer to end users.",
        "They are able to distribute incoming requests across a tier of web server instances."
      ],
      correctAnswer: [1],
      explanation: "Amazon EC2 Auto Scaling groups achieve high availability by automatically adding or replacing instances across multiple Availability Zones as needed, ensuring the application keeps running even if one AZ has issues. Auto Scaling does not span multiple Regions, does not place static content closer to users (that's CloudFront), and does not itself distribute incoming requests (that's the role of a load balancer)."
    },
    {
      id: "paper-17-021",
      domain: "ACM",
      topic: "consolidated-billing",
      type: "single",
      question: "How can one AWS account use Reserved Instances from another AWS account?",
      options: [
        "By using Amazon EC2 Dedicated Instances",
        "By using AWS Organizations consolidated billing",
        "By using the AWS Cost Explorer tool",
        "By using AWS Budgets"
      ],
      correctAnswer: [1],
      explanation: "AWS Organizations' consolidated billing feature lets Reserved Instance discounts purchased by one account automatically apply to matching usage across all linked accounts in the organization. Dedicated Instances are a separate EC2 purchasing option, and Cost Explorer and AWS Budgets are for viewing and alerting on costs, not sharing RI benefits across accounts."
    },
    {
      id: "paper-17-022",
      domain: "EC2",
      topic: "ec2-billing",
      type: "single",
      question: "A customer runs an On-Demand Amazon Linux EC2 instance for 3 hours, 5 minutes, and 6 seconds. For how much time will the customer be billed?",
      options: [
        "3 hours, 5 minutes",
        "3 hours, 5 minutes, and 6 seconds",
        "3 hours, 6 minutes",
        "4 hours"
      ],
      correctAnswer: [1],
      explanation: "On-Demand EC2 instances are billed per-second (for Linux instances), so a run of 3 hours, 5 minutes, and 6 seconds is billed for exactly that duration. Rounding down to 3 hours 5 minutes, rounding to 3 hours 6 minutes, or rounding up to a full 4 hours would all misrepresent per-second billing."
    },
    {
      id: "paper-17-023",
      domain: "CMP",
      topic: "compute-services",
      type: "multiple-select",
      question: "Which of the following AWS services provide compute resources? (Choose two.)",
      options: [
        "AWS Lambda",
        "Amazon Elastic Container Service (Amazon ECS)",
        "AWS CodeDeploy",
        "Amazon Glacier",
        "AWS Organizations"
      ],
      correctAnswer: [0, 1],
      explanation: "AWS Lambda and Amazon ECS both provide compute resources: Lambda runs serverless functions, and ECS runs and orchestrates containers. AWS CodeDeploy automates deployments (not compute), Amazon Glacier is archival storage, and AWS Organizations manages multiple accounts — none provide compute capacity."
    },
    {
      id: "paper-17-024",
      domain: "DEP",
      topic: "cloudformation",
      type: "single",
      question: "Which AWS service enables users to deploy infrastructure as code by automating the process of provisioning resources?",
      options: [
        "Amazon GameLift",
        "AWS CloudFormation",
        "AWS Data Pipeline",
        "AWS Glue"
      ],
      correctAnswer: [1],
      explanation: "AWS CloudFormation lets users define infrastructure as code in templates and automates the provisioning of those resources. Amazon GameLift is for game server hosting, AWS Data Pipeline orchestrates data workflows, and AWS Glue is an ETL service — none provide infrastructure-as-code provisioning."
    },
    {
      id: "paper-17-025",
      domain: "VPC",
      topic: "direct-connect",
      type: "multiple-select",
      question: "Which AWS services provide a way to extend an on-premises architecture to the AWS Cloud? (Choose two.)",
      options: [
        "Amazon EBS",
        "AWS Direct Connect",
        "Amazon CloudFront",
        "AWS Storage Gateway",
        "Amazon Connect"
      ],
      correctAnswer: [1, 3],
      explanation: "AWS Direct Connect provides a dedicated network connection extending an on-premises data center into the AWS Cloud, and AWS Storage Gateway extends on-premises storage to use AWS cloud storage as a backend. Amazon EBS is block storage for EC2, Amazon CloudFront is a CDN, and Amazon Connect is a cloud contact center service — none extend on-premises architecture to AWS."
    },
    {
      id: "paper-17-026",
      domain: "VPC",
      topic: "direct-connect",
      type: "single",
      question: "Which of the following allows users to provision a dedicated network connection from their internal network to AWS?",
      options: [
        "AWS CloudHSM",
        "AWS Direct Connect",
        "AWS VPN",
        "Amazon Connect"
      ],
      correctAnswer: [1],
      explanation: "AWS Direct Connect provisions a dedicated, private network connection from a customer's on-premises network directly to AWS, bypassing the public internet. AWS CloudHSM is a hardware security module for key storage, AWS VPN uses encrypted tunnels over the public internet (not a dedicated line), and Amazon Connect is a contact center service."
    },
    {
      id: "paper-17-027",
      domain: "GLB",
      topic: "edge-locations",
      type: "multiple-select",
      question: "Which services use AWS edge locations? (Choose two.)",
      options: [
        "Amazon CloudFront",
        "AWS Shield",
        "Amazon EC2",
        "Amazon RDS",
        "Amazon ElastiCache"
      ],
      correctAnswer: [0, 1],
      explanation: "Amazon CloudFront uses edge locations to cache and deliver content close to users, and AWS Shield's DDoS protection operates at these same edge locations to absorb and mitigate attacks near the source. Amazon EC2, RDS, and ElastiCache run within Regions and Availability Zones, not at edge locations."
    },
    {
      id: "paper-17-028",
      domain: "VPC",
      topic: "vpc",
      type: "single",
      question: "Which service would provide network connectivity in a hybrid architecture that includes the AWS Cloud?",
      options: [
        "Amazon VPC",
        "AWS Direct Connect",
        "AWS Directory Service",
        "Amazon API Gateway"
      ],
      correctAnswer: [0],
      explanation: "Amazon VPC provides the networking foundation, including VPN gateways and connectivity options, that enables network connectivity between on-premises infrastructure and the AWS Cloud in a hybrid architecture. AWS Direct Connect provides the physical dedicated link but works through a VPC, AWS Directory Service manages directories, and Amazon API Gateway manages APIs — neither directly provides hybrid network connectivity like VPC does."
    },
    {
      id: "paper-17-029",
      domain: "ACM",
      topic: "tco-calculator",
      type: "single",
      question: "Which tool can be used to compare the costs of running a web application in a traditional hosting environment to running it on AWS?",
      options: [
        "AWS Cost Explorer",
        "AWS Budgets",
        "AWS Cost and Usage report",
        "AWS Total Cost of Ownership (TCO) Calculator"
      ],
      correctAnswer: [3],
      explanation: "The AWS Total Cost of Ownership (TCO) Calculator is specifically built to compare the cost of running a workload in a traditional on-premises or hosted environment against running it on AWS. AWS Cost Explorer analyzes existing AWS spending, AWS Budgets sets spending alerts, and the Cost and Usage report details AWS billing — none compare traditional hosting to AWS costs."
    },
    {
      id: "paper-17-030",
      domain: "ACM",
      topic: "marketplace",
      type: "multiple-select",
      question: "What is the value of using third-party software from AWS Marketplace instead of installing third-party software on Amazon EC2? (Choose two.)",
      options: [
        "Users pay for software by the hour or month depending on licensing.",
        "AWS Marketplace enables the user to launch applications with 1-Click.",
        "AWS Marketplace data encryption is managed by a third-party vendor.",
        "AWS Marketplace eliminates the need to upgrade to newer software versions.",
        "Users can deploy third-party software without testing."
      ],
      correctAnswer: [0, 1],
      explanation: "AWS Marketplace lets users pay for third-party software by the hour or month according to its licensing model, and it enables launching pre-configured software with 1-Click deployment, both saving time and cost compared to manually installing software on EC2. Data encryption remains the customer's or AWS's responsibility (not the third-party vendor's), it does not eliminate the need to upgrade software versions, and users should still test software regardless of the source."
    },
    {
      id: "paper-17-031",
      domain: "ARC",
      topic: "decoupling",
      type: "single",
      question: "Which of the following is a cloud architectural design principle?",
      options: [
        "Scale up, not out.",
        "Loosely couple components.",
        "Build monolithic systems.",
        "Use commercial database software."
      ],
      correctAnswer: [1],
      explanation: "Loosely coupling components is a core cloud architectural design principle, allowing components to fail or scale independently without impacting the rest of the system. Scaling up (not out), building monolithic systems, and requiring commercial database software all contradict recommended cloud design principles, which favor horizontal scaling, decoupled components, and flexible technology choices."
    },
    {
      id: "paper-17-032",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "multiple-select",
      question: "Under the shared responsibility model; which of the following areas are the customer’s responsibility? (Choose two.)",
      options: [
        "Firmware upgrades of network infrastructure",
        "Patching of operating systems",
        "Patching of the underlying hypervisor",
        "Physical security of data centers",
        "Configuration of the security group"
      ],
      correctAnswer: [1, 4],
      explanation: "Under the shared responsibility model, the customer is responsible for patching the guest operating systems on their instances and configuring security groups to control traffic. Firmware upgrades of network infrastructure, patching the underlying hypervisor, and physical security of data centers are all AWS's responsibility as part of securing the underlying cloud infrastructure."
    },
    {
      id: "paper-17-033",
      domain: "MON",
      topic: "aws-config",
      type: "single",
      question: "Which service enables customers to audit and monitor changes in AWS resources?",
      options: [
        "AWS Trusted Advisor",
        "Amazon GuardDuty",
        "Amazon Inspector",
        "AWS Config"
      ],
      correctAnswer: [3],
      explanation: "AWS Config records and tracks configuration changes to AWS resources over time, enabling auditing and compliance monitoring. AWS Trusted Advisor gives best-practice recommendations, Amazon GuardDuty detects threats, and Amazon Inspector scans for vulnerabilities — none track configuration change history for auditing."
    },
    {
      id: "paper-17-034",
      domain: "ACM",
      topic: "trusted-advisor",
      type: "single",
      question: "Which AWS service identifies security groups that allow unrestricted access to a user’s AWS resources?",
      options: [
        "AWS CloudTrail",
        "AWS Trusted Advisor",
        "Amazon CloudWatch",
        "Amazon Inspector"
      ],
      correctAnswer: [1],
      explanation: "AWS Trusted Advisor performs automated security checks that identify security groups allowing unrestricted access to a user's resources. AWS CloudTrail logs API calls, Amazon CloudWatch monitors metrics, and Amazon Inspector scans EC2 instances for vulnerabilities rather than reviewing security group rules directly."
    },
    {
      id: "paper-17-035",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "According to the AWS shared responsibility model, who is responsible for configuration management?",
      options: [
        "It is solely the responsibility of the customer.",
        "It is solely the responsibility of AWS.",
        "It is shared between AWS and the customer.",
        "It is not part of the AWS shared responsibility model."
      ],
      correctAnswer: [2],
      explanation: "Configuration management under the AWS shared responsibility model is shared between AWS and the customer: AWS manages configuration of the underlying infrastructure, while the customer manages configuration of their guest operating systems, applications, and security groups. It is not solely the responsibility of either party alone, and configuration management is very much part of the shared responsibility model."
    },
    {
      id: "paper-17-036",
      domain: "GLB",
      topic: "cloudfront",
      type: "single",
      question: "Which AWS service is a content delivery network that securely delivers data, video, and applications to users globally with low latency and high speeds?",
      options: [
        "AWS CloudFormation",
        "AWS Direct Connect",
        "Amazon CloudFront",
        "Amazon Pinpoint"
      ],
      correctAnswer: [2],
      explanation: "Amazon CloudFront is AWS's content delivery network (CDN) that securely delivers data, video, and applications to users worldwide with low latency and high transfer speeds. AWS CloudFormation is an infrastructure-as-code tool, AWS Direct Connect provides dedicated network links, and Amazon Pinpoint is a customer engagement/messaging service — none function as a CDN."
    },
    {
      id: "paper-17-037",
      domain: "CLD",
      topic: "elasticity",
      type: "single",
      question: "Which benefit of the AWS Cloud supports matching the supply of resources with changing workload demands?",
      options: [
        "Security",
        "Reliability",
        "Elasticity",
        "High availability"
      ],
      correctAnswer: [2],
      explanation: "Elasticity is the cloud benefit that allows resources to automatically scale up or down to match changing workload demand, avoiding both under- and over-provisioning. Security and reliability are separate cloud benefits unrelated to matching resource supply to demand, and high availability refers to minimizing downtime rather than dynamically adjusting capacity."
    },
    {
      id: "paper-17-038",
      domain: "SEC",
      topic: "ddos",
      type: "single",
      question: "A user is running an application on AWS and notices that one or more AWS-owned IP addresses is involved in a distributed denial-of-service (DDoS) attack. Who should the user contact FIRST about this situation?",
      options: [
        "AWS Premium Support",
        "AWS Technical Account Manager",
        "AWS Solutions Architect",
        "AWS Abuse team"
      ],
      correctAnswer: [3],
      explanation: "When AWS-owned IP addresses are involved in a DDoS attack, the AWS Abuse team is the correct first point of contact, as they specifically handle reports of resource misuse and abuse. AWS Premium Support, a Technical Account Manager, and a Solutions Architect handle general account and architecture support, not abuse reporting."
    },
    {
      id: "paper-17-039",
      domain: "CLD",
      topic: "cloud-benefits",
      type: "multiple-select",
      question: "Which of the following are benefits of hosting infrastructure in the AWS Cloud? (Choose two.)",
      options: [
        "There are no upfront commitments.",
        "AWS manages all security in the cloud.",
        "Users have the ability to provision resources on demand.",
        "Users have access to free and unlimited storage.",
        "Users have control over the physical infrastructure."
      ],
      correctAnswer: [0, 2],
      explanation: "Hosting infrastructure in the AWS Cloud removes upfront commitments, letting customers avoid large capital expenditures, and gives users the ability to provision resources on demand as needed. AWS does not manage all security in the cloud (it's shared), storage is not free and unlimited, and users do not control the physical infrastructure — that remains AWS's responsibility."
    },
    {
      id: "paper-17-040",
      domain: "ACM",
      topic: "organizations",
      type: "single",
      question: "What AWS service would be used to centrally manage AWS access policies across multiple accounts?",
      options: [
        "AWS Service Catalog",
        "AWS Config",
        "AWS Trusted Advisor",
        "AWS Organizations"
      ],
      correctAnswer: [3],
      explanation: "AWS Organizations allows centralized management of access policies (via Service Control Policies) across multiple AWS accounts. AWS Service Catalog manages approved product catalogs, AWS Config tracks resource configurations, and AWS Trusted Advisor gives best-practice recommendations — none centrally manage access policies across accounts."
    },
    {
      id: "paper-17-041",
      domain: "ACM",
      topic: "trusted-advisor",
      type: "single",
      question: "What is AWS Trusted Advisor?",
      options: [
        "It is an AWS staff member who provides recommendations and best practices on how to use AWS.",
        "It is a network of AWS partners who provide recommendations and best practices on how to use AWS.",
        "It is an online tool with a set of automated checks that provides recommendations on cost optimization, performance, and security.",
        "It is another name for AWS Technical Account Managers who provide recommendations on cost optimization, performance, and security."
      ],
      correctAnswer: [2],
      explanation: "AWS Trusted Advisor is an online tool that runs automated checks against your account and provides recommendations across categories such as cost optimization, performance, and security. It is not a human staff member, a partner network, or another name for Technical Account Managers — it is an automated software tool."
    },
    {
      id: "paper-17-042",
      domain: "ACM",
      topic: "cost-explorer",
      type: "single",
      question: "Which AWS service or feature allows a company to visualize, understand, and manage AWS costs and usage over time?",
      options: [
        "AWS Budgets",
        "AWS Cost Explorer",
        "AWS Organizations",
        "Consolidated billing"
      ],
      correctAnswer: [1],
      explanation: "AWS Cost Explorer is the visualization tool that lets companies understand, analyze, and manage their AWS costs and usage patterns over time. AWS Budgets sets spending thresholds and alerts, AWS Organizations manages multiple accounts, and consolidated billing aggregates billing across accounts — none provide the visualization and analysis Cost Explorer offers."
    },
    {
      id: "paper-17-043",
      domain: "SEC",
      topic: "artifact",
      type: "single",
      question: "Which AWS service offers on-demand access to AWS security and compliance reports?",
      options: [
        "AWS CloudTrail",
        "AWS Artifact",
        "AWS Health",
        "Amazon CloudWatch"
      ],
      correctAnswer: [1],
      explanation: "AWS Artifact provides on-demand access to AWS's compliance reports and security documentation, such as SOC reports and PCI attestations. AWS CloudTrail logs API activity, AWS Health reports on service health events, and Amazon CloudWatch monitors metrics — none provide compliance report access."
    },
    {
      id: "paper-17-044",
      domain: "GLB",
      topic: "multi-region",
      type: "multiple-select",
      question: "What are the benefits of using the AWS Cloud for companies with customers in many countries around the world? (Choose two.)",
      options: [
        "Companies can deploy applications in multiple AWS Regions to reduce latency.",
        "Amazon Translate automatically translates third-party website interfaces into multiple languages.",
        "Amazon CloudFront has multiple edge locations around the world to reduce latency.",
        "Amazon Comprehend allows users to build applications that can respond to user requests in many languages.",
        "Elastic Load Balancing can distribute application web traffic to multiple AWS Regions around the world, which reduces latency."
      ],
      correctAnswer: [0, 2],
      explanation: "Deploying applications across multiple AWS Regions reduces latency for a globally distributed customer base, and CloudFront's global network of edge locations further reduces latency by caching content closer to users. Amazon Translate translates text (not website interfaces automatically), Amazon Comprehend performs natural language analysis (not multilingual response generation), and Elastic Load Balancing distributes traffic within a Region, not across multiple Regions."
    },
    {
      id: "paper-17-045",
      domain: "DEP",
      topic: "elastic-beanstalk",
      type: "single",
      question: "Which AWS service handles the deployment details of capacity provisioning, load balancing, Auto Scaling, and application health monitoring?",
      options: [
        "AWS Config",
        "AWS Elastic Beanstalk",
        "Amazon Route 53",
        "Amazon CloudFront"
      ],
      correctAnswer: [1],
      explanation: "AWS Elastic Beanstalk handles the underlying deployment details of capacity provisioning, load balancing, Auto Scaling, and application health monitoring, letting developers focus on code. AWS Config tracks resource configuration, Amazon Route 53 provides DNS, and Amazon CloudFront is a CDN — none manage the full deployment lifecycle like Elastic Beanstalk."
    },
    {
      id: "paper-17-046",
      domain: "VPC",
      topic: "vpc",
      type: "single",
      question: "Which AWS service provides inbound and outbound network ACLs to harden external connectivity to Amazon EC2?",
      options: [
        "AWS IAM",
        "Amazon Connect",
        "Amazon VPC",
        "Amazon API Gateway"
      ],
      correctAnswer: [2],
      explanation: "Amazon VPC provides network access control lists (NACLs) that filter inbound and outbound traffic at the subnet level to harden external connectivity to EC2 instances. AWS IAM manages permissions, Amazon Connect is a contact center service, and Amazon API Gateway manages APIs — none provide network ACL functionality."
    },
    {
      id: "paper-17-047",
      domain: "GLB",
      topic: "regions",
      type: "single",
      question: "When a company provisions web servers in multiple AWS Regions, what is being increased?",
      options: [
        "Coupling",
        "Availability",
        "Security",
        "Durability"
      ],
      correctAnswer: [1],
      explanation: "Provisioning web servers across multiple AWS Regions increases availability, since the application can continue running even if an entire Region experiences an outage. This does not increase coupling (multi-Region design typically reduces tight coupling), and it doesn't directly address security or data durability, which relate to access controls and data redundancy respectively."
    },
    {
      id: "paper-17-048",
      domain: "ACM",
      topic: "pricing-models",
      type: "single",
      question: "The pay-as-you-go pricing model for AWS services:",
      options: [
        "reduces capital expenditures.",
        "requires payment up front for AWS services.",
        "is relevant only for Amazon EC2, Amazon S3, and Amazon RDS.",
        "reduces operational expenditures."
      ],
      correctAnswer: [0],
      explanation: "The pay-as-you-go pricing model reduces capital expenditures because customers pay only for the resources they consume instead of investing upfront in physical infrastructure. It does not require payment upfront (that's the opposite of pay-as-you-go), it applies broadly across AWS services (not just EC2, S3, and RDS), and it reduces capital, not necessarily operational, expenditures."
    },
    {
      id: "paper-17-049",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "Under the AWS shared responsibility model, AWS is responsible for which security-related task?",
      options: [
        "Lifecycle management of IAM credentials",
        "Physical security of global infrastructure",
        "Encryption of Amazon EBS volumes",
        "Firewall configuration"
      ],
      correctAnswer: [1],
      explanation: "AWS is responsible for the physical security of its global infrastructure, including data centers, under the shared responsibility model. Lifecycle management of IAM credentials, encryption of EBS volumes, and firewall (security group) configuration are all customer responsibilities."
    },
    {
      id: "paper-17-050",
      domain: "ACM",
      topic: "organizations",
      type: "single",
      question: "Which AWS service enables users to consolidate billing across multiple accounts?",
      options: [
        "Amazon QuickSight",
        "AWS Organizations",
        "AWS Budgets",
        "Amazon Forecast"
      ],
      correctAnswer: [1],
      explanation: "AWS Organizations enables consolidated billing, allowing a company to combine usage across multiple linked accounts into a single bill and benefit from volume discounts. Amazon QuickSight is a business intelligence tool, AWS Budgets sets spending alerts, and Amazon Forecast is a machine learning forecasting service — none consolidate billing across accounts."
    }
  ]
});
