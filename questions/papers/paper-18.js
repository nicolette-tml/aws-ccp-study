window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "paper-18",
  paperId: "paper-18",
  paperName: "Practice Paper 18",
  questions: [
    {
      id: "paper-18-001",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "Under the AWS shared responsibility model, which of the following is an example of security in the AWS Cloud?",
      options: [
        "Managing edge locations",
        "Physical security",
        "Firewall configuration",
        "Global infrastructure"
      ],
      correctAnswer: [2],
      explanation: "Firewall configuration (e.g., Security Group rules) is a customer responsibility under the 'security in the AWS Cloud' side of the Shared Responsibility Model, since customers control access rules for their own resources. Managing edge locations, physical security, and global infrastructure are all part of AWS's 'security of the cloud' responsibility, not the customer's."
    },
    {
      id: "paper-18-002",
      domain: "ACM",
      topic: "support",
      type: "single",
      question: "How can an AWS user with an AWS Basic Support plan obtain technical assistance from AWS?",
      options: [
        "AWS Senior Support Engineers",
        "AWS Technical Account Managers",
        "AWS Trusted Advisor",
        "AWS Discussion Forums"
      ],
      correctAnswer: [3],
      explanation: "The AWS Basic Support plan only includes access to AWS Discussion Forums along with general customer service and account/billing support — there is no direct technical engineer access. AWS Senior Support Engineers and Technical Account Managers are reserved for the Business and Enterprise Support plans, and AWS Trusted Advisor is a recommendation tool, not a channel for obtaining technical assistance."
    },
    {
      id: "paper-18-003",
      domain: "ARC",
      topic: "well-architected",
      type: "multiple-select",
      question: "Which of the following are pillars of the AWS Well-Architected Framework? (Choose two.)",
      options: [
        "Multiple Availability Zones",
        "Performance efficiency",
        "Security",
        "Encryption usage",
        "High availability"
      ],
      correctAnswer: [1, 2],
      explanation: "Performance Efficiency and Security are two of the pillars of the AWS Well-Architected Framework, alongside Operational Excellence, Reliability, Cost Optimization, and Sustainability. Multiple Availability Zones and high availability are architectural techniques used to achieve the Reliability pillar rather than pillars themselves, and encryption usage is a technique supporting the Security pillar, not a pillar on its own."
    },
    {
      id: "paper-18-004",
      domain: "ACM",
      topic: "reserved-instances",
      type: "single",
      question: "After selecting an Amazon EC2 Dedicated Host reservation, which pricing option would provide the largest discount?",
      options: [
        "No upfront payment",
        "Hourly on-demand payment",
        "Partial upfront payment",
        "All upfront payment"
      ],
      correctAnswer: [3],
      explanation: "Paying All Upfront for a Reserved instance, including a Dedicated Host reservation, provides the largest discount because AWS rewards the full upfront commitment with the lowest effective rate. Partial Upfront and No Upfront options give progressively smaller discounts since less is committed in advance, and Hourly On-Demand payment offers no reservation discount at all."
    },
    {
      id: "paper-18-005",
      domain: "GLB",
      topic: "availability-zones",
      type: "single",
      question: "What is an advantage of deploying an application across multiple Availability Zones?",
      options: [
        "There is a lower risk of service failure if a natural disaster causes a service disruption in a given AWS Region.",
        "The application will have higher availability because it can withstand a service disruption in one Availability Zone.",
        "There will be better coverage as Availability Zones are geographically distant and can serve a wider area.",
        "There will be decreased application latency that will improve the user experience."
      ],
      correctAnswer: [1],
      explanation: "Deploying across multiple Availability Zones means that if one AZ experiences a disruption, the application keeps running from the others, giving it higher availability. This does not protect against a Region-wide natural disaster, Availability Zones are physically close together within a Region rather than geographically distant to serve a wider area, and spreading across AZs does not by itself reduce latency."
    },
    {
      id: "paper-18-006",
      domain: "ACM",
      topic: "pricing-calculator",
      type: "single",
      question: "A Cloud Practitioner is asked how to estimate the cost of using a new application on AWS. What is the MOST appropriate response?",
      options: [
        "Inform the user that AWS pricing allows for on-demand pricing.",
        "Direct the user to the AWS Simple Monthly Calculator for an estimate.",
        "Use Amazon QuickSight to analyze current spending on-premises.",
        "Use Amazon AppStream 2.0 for real-time pricing analytics."
      ],
      correctAnswer: [1],
      explanation: "The AWS Simple Monthly Calculator (now the AWS Pricing Calculator) is designed specifically to estimate the cost of running a new workload on AWS before deployment. Simply stating that AWS offers on-demand pricing gives no estimate, Amazon QuickSight is a business-intelligence and visualization tool rather than a cost estimator, and AppStream 2.0 is an application-streaming service unrelated to pricing."
    },
    {
      id: "paper-18-007",
      domain: "VPC",
      topic: "hybrid-connectivity",
      type: "multiple-select",
      question: "A company wants to migrate its applications to a VPC on AWS. These applications will need to access on-premises resources. What combination of actions will enable the company to accomplish this goal? (Choose two.)",
      options: [
        "Use the AWS Service Catalog to identify a list of on-premises resources that can be migrated.",
        "Build a VPN connection between an on-premises device and a virtual private gateway in the new VPC.",
        "Use Amazon Athena to query data from the on-premises database servers.",
        "Connect the company’s on-premises data center to AWS using AWS Direct Connect.",
        "Leverage Amazon CloudFront to restrict access to static web content provided through the company’s on-premises web servers."
      ],
      correctAnswer: [1, 3],
      explanation: "Building a VPN connection between an on-premises device and a virtual private gateway, and connecting via AWS Direct Connect, are the two standard ways to give applications in a VPC access to on-premises resources. AWS Service Catalog manages approved product catalogs rather than migration discovery, Amazon Athena queries data stored in Amazon S3 (not on-premises databases), and Amazon CloudFront is a content delivery network, not a way to restrict access to on-premises web servers."
    },
    {
      id: "paper-18-008",
      domain: "SEC",
      topic: "waf",
      type: "single",
      question: "A web application running on AWS has been spammed with malicious requests from a recurring set of IP addresses. Which AWS service can help secure the application and block the malicious traffic?",
      options: [
        "AWS IAM",
        "Amazon GuardDuty",
        "Amazon Simple Notification Service (Amazon SNS)",
        "AWS WAF"
      ],
      correctAnswer: [3],
      explanation: "AWS WAF (Web Application Firewall) lets users create rules that block malicious traffic such as repeated requests from specific IP addresses, protecting web applications from this kind of abuse. AWS IAM manages access permissions, Amazon GuardDuty detects threats but does not itself block traffic, and Amazon SNS is a notification service — none of these filter malicious web requests."
    },
    {
      id: "paper-18-009",
      domain: "DEP",
      topic: "infrastructure-as-code",
      type: "single",
      question: "Treating infrastructure as code in the AWS Cloud allows users to:",
      options: [
        "automate migration of on-premises hardware to AWS data centers.",
        "let a third party automate an audit of the AWS infrastructure.",
        "turn over application code to AWS so it can run on the AWS infrastructure.",
        "automate the infrastructure provisioning process."
      ],
      correctAnswer: [3],
      explanation: "Treating infrastructure as code, for example with AWS CloudFormation, lets users automate the infrastructure provisioning process by defining resources in reusable templates. It does not automate migrating physical on-premises hardware, hand off auditing to a third party, or involve turning application code over to AWS to run — those are unrelated activities."
    },
    {
      id: "paper-18-010",
      domain: "VPC",
      topic: "direct-connect",
      type: "single",
      question: "A company requires a dedicated network connection between its on-premises servers and the AWS Cloud. Which AWS service should be used?",
      options: [
        "AWS VPN",
        "AWS Direct Connect",
        "Amazon API Gateway",
        "Amazon Connect"
      ],
      correctAnswer: [1],
      explanation: "AWS Direct Connect establishes a dedicated, private network connection between an on-premises data center and AWS, bypassing the public internet. AWS VPN also links on-premises networks to AWS but over an encrypted internet connection rather than a dedicated line, while Amazon API Gateway manages APIs and Amazon Connect is a cloud contact-center service — neither provides dedicated network connectivity."
    },
    {
      id: "paper-18-011",
      domain: "DBA",
      topic: "athena",
      type: "single",
      question: "Which AWS service can be used to query stored datasets directly from Amazon S3 using standard SQL?",
      options: [
        "AWS Glue",
        "AWS Data Pipeline",
        "Amazon CloudSearch",
        "Amazon Athena"
      ],
      correctAnswer: [3],
      explanation: "Amazon Athena is a serverless interactive query service that lets users run standard SQL queries directly against data stored in Amazon S3, without moving it elsewhere. AWS Glue is an ETL and data-catalog service, AWS Data Pipeline orchestrates data workflows, and Amazon CloudSearch is a managed search service — none let you query S3 data with SQL."
    },
    {
      id: "paper-18-012",
      domain: "DEP",
      topic: "cloudformation",
      type: "single",
      question: "AWS CloudFormation is designed to help the user:",
      options: [
        "model and provision resources.",
        "update application code.",
        "set up data lakes.",
        "create reports for billing."
      ],
      correctAnswer: [0],
      explanation: "AWS CloudFormation is designed to model and provision AWS resources using infrastructure-as-code templates, automating and standardizing deployments. It does not update application code, set up data lakes, or generate billing reports."
    },
    {
      id: "paper-18-013",
      domain: "DBA",
      topic: "redshift",
      type: "single",
      question: "Which of the following is an AWS database service?",
      options: [
        "Amazon Redshift",
        "Amazon Elastic Block Store (Amazon EBS)",
        "Amazon S3 Glacier",
        "AWS Snowball"
      ],
      correctAnswer: [0],
      explanation: "Amazon Redshift is AWS's fully managed data warehouse service, making it a database offering. Amazon EBS is block storage for EC2 instances, Amazon S3 Glacier is an archival storage class, and AWS Snowball is a physical data-transfer device — none of these are databases."
    },
    {
      id: "paper-18-014",
      domain: "ACM",
      topic: "trusted-advisor",
      type: "single",
      question: "A Cloud Practitioner must determine if any security groups in an AWS account have been provisioned to allow unrestricted access for specific ports. What is the SIMPLEST way to do this?",
      options: [
        "Review the inbound rules for each security group in the Amazon EC2 management console to check for port 0.0.0.0/0.",
        "Run AWS Trusted Advisor and review the findings.",
        "Open the AWS IAM console and check the inbound rule filters for open access.",
        "In AWS Config, create a custom rule that invokes an AWS Lambda function to review rules for inbound access."
      ],
      correctAnswer: [1],
      explanation: "AWS Trusted Advisor automatically scans an account's security groups and flags any that allow unrestricted access on specific ports, making it the simplest way to surface this issue across an account. Manually reviewing every security group's inbound rules in the EC2 console is tedious and error-prone, the IAM console does not show security group rules at all, and writing a custom AWS Config rule with a Lambda function is far more effort than Trusted Advisor's built-in check."
    },
    {
      id: "paper-18-015",
      domain: "CLD",
      topic: "cloud-benefits",
      type: "multiple-select",
      question: "What are the benefits of developing and running a new application in the AWS Cloud compared to on-premises? (Choose two.)",
      options: [
        "AWS automatically distributes the data globally for higher durability.",
        "AWS will take care of operating the application.",
        "AWS makes it easy to architect for high availability.",
        "AWS can easily accommodate application demand changes.",
        "AWS takes care application security patching."
      ],
      correctAnswer: [2, 3],
      explanation: "AWS makes it easy to architect for high availability through multiple Availability Zones and redundant managed services, and it can easily accommodate application demand changes through elastic, on-demand scaling. AWS does not automatically distribute data globally for durability by default, AWS does not operate customers' applications on their behalf, and application security patching remains a customer responsibility under the Shared Responsibility Model."
    },
    {
      id: "paper-18-016",
      domain: "SEC",
      topic: "inspector",
      type: "single",
      question: "A user needs an automated security assessment report that will identify unintended network access to Amazon EC2 instances and vulnerabilities on those instances. Which AWS service will provide this assessment report?",
      options: [
        "EC2 security groups",
        "AWS Config",
        "Amazon Macie",
        "Amazon Inspector"
      ],
      correctAnswer: [3],
      explanation: "Amazon Inspector performs automated security assessments of EC2 instances, identifying both unintended network exposure and software vulnerabilities, and produces a detailed findings report. EC2 security groups only control traffic and generate no report, AWS Config tracks configuration changes over time rather than scanning for vulnerabilities, and Amazon Macie discovers and classifies sensitive data, not network or instance vulnerabilities."
    },
    {
      id: "paper-18-017",
      domain: "ACM",
      topic: "cost-management",
      type: "single",
      question: "How can a company isolate the costs of production and non-production workloads on AWS?",
      options: [
        "Create Identity and Access Management (IAM) roles for production and non-production workloads.",
        "Use different accounts for production and non-production expenses.",
        "Use Amazon EC2 for non-production workloads and other services for production workloads.",
        "Use Amazon CloudWatch to monitor the use of services."
      ],
      correctAnswer: [1],
      explanation: "Using separate AWS accounts for production and non-production workloads is the standard way to isolate costs, since each account produces its own separate bill that can be tracked independently. IAM roles control access rather than cost tracking, splitting services by workload type does not cleanly separate costs since both may use the same services, and CloudWatch monitors usage and performance metrics rather than isolating cost allocation."
    },
    {
      id: "paper-18-018",
      domain: "ARC",
      topic: "marketplace",
      type: "single",
      question: "Where can users find a catalog of AWS-recognized providers of third-party security solutions?",
      options: [
        "AWS Service Catalog",
        "AWS Marketplace",
        "AWS Quick Start",
        "AWS CodeDeploy"
      ],
      correctAnswer: [1],
      explanation: "AWS Marketplace is the catalog where customers can find AWS-recognized providers of third-party software, including security solutions, ready to deploy on AWS. AWS Service Catalog manages an organization's own approved product catalog, AWS Quick Start provides reference deployment templates, and AWS CodeDeploy automates application deployments — none catalog third-party vendors."
    },
    {
      id: "paper-18-019",
      domain: "S3",
      topic: "glacier",
      type: "single",
      question: "A Cloud Practitioner needs to store data for 7 years to meet regulatory requirements. Which AWS service will meet this requirement at the LOWEST cost?",
      options: [
        "Amazon S3",
        "AWS Snowball",
        "Amazon Redshift",
        "Amazon S3 Glacier"
      ],
      correctAnswer: [3],
      explanation: "Amazon S3 Glacier is purpose-built for long-term archival storage such as 7-year regulatory retention, and it offers a significantly lower cost per GB than other storage options for this use case. Standard Amazon S3 is more expensive for infrequently accessed archival data, AWS Snowball is a physical data-transfer device rather than ongoing storage, and Amazon Redshift is a data warehouse for analytics, not archival storage."
    },
    {
      id: "paper-18-020",
      domain: "CLD",
      topic: "cloud-benefits",
      type: "multiple-select",
      question: "What are the immediate benefits of using the AWS Cloud? (Choose two.)",
      options: [
        "Increased IT staff.",
        "Capital expenses are replaced with variable expenses.",
        "User control of infrastructure.",
        "Increased agility.",
        "AWS holds responsibility for security in the cloud."
      ],
      correctAnswer: [1, 3],
      explanation: "Two immediate benefits of the AWS Cloud are that capital expenses are replaced with variable expenses, since customers pay only for what they use instead of investing upfront in hardware, and increased agility, since resources can be provisioned in minutes. Cloud adoption typically reduces rather than increases IT staffing needs for infrastructure, users do not control the underlying physical infrastructure in the cloud, and AWS holding responsibility for security of the cloud is a shared-responsibility detail rather than the immediate benefit being described here."
    },
    {
      id: "paper-18-021",
      domain: "SEC",
      topic: "macie",
      type: "single",
      question: "Which security service automatically recognizes and classifies sensitive data or intellectual property on AWS?",
      options: [
        "Amazon GuardDuty",
        "Amazon Macie",
        "Amazon Inspector",
        "AWS Shield"
      ],
      correctAnswer: [1],
      explanation: "Amazon Macie uses machine learning to automatically discover, identify, and classify sensitive data such as personally identifiable information or intellectual property stored in AWS. Amazon GuardDuty detects threats and anomalous account activity, Amazon Inspector scans for vulnerabilities, and AWS Shield protects against DDoS attacks — none of these classify sensitive data."
    },
    {
      id: "paper-18-022",
      domain: "S3",
      topic: "storage-gateway",
      type: "single",
      question: "What is the purpose of AWS Storage Gateway?",
      options: [
        "It ensures on-premises data storage is 99.999999999% durable.",
        "It transports petabytes of data to and from AWS.",
        "It connects to multiple Amazon EC2 instances.",
        "It connects on-premises data storage to the AWS Cloud."
      ],
      correctAnswer: [3],
      explanation: "AWS Storage Gateway connects on-premises storage environments to the AWS Cloud, enabling hybrid storage architectures. It does not itself guarantee 99.999999999% durability for on-premises storage, it is not a bulk data-transport device like AWS Snowball, and it is not simply a way to connect to multiple EC2 instances."
    },
    {
      id: "paper-18-023",
      domain: "GLB",
      topic: "regions",
      type: "single",
      question: "What should users do if they want to install an application in geographically isolated locations?",
      options: [
        "Install the application using multiple internet gateways.",
        "Deploy the application to an Amazon VPC.",
        "Deploy the application to multiple AWS Regions.",
        "Configure the application using multiple NAT gateways."
      ],
      correctAnswer: [2],
      explanation: "Deploying an application to multiple AWS Regions places it in geographically isolated, independent locations around the world, satisfying the requirement for geographic isolation. Multiple internet gateways or NAT gateways only affect a single VPC's internet connectivity, not geographic isolation, and deploying to a single Amazon VPC keeps the application within one Region rather than multiple isolated locations."
    },
    {
      id: "paper-18-024",
      domain: "CLD",
      topic: "high-availability",
      type: "single",
      question: "A system in the AWS Cloud is designed to withstand the failure of one or more components. What is this an example of?",
      options: [
        "Elasticity",
        "High Availability",
        "Scalability",
        "Agility"
      ],
      correctAnswer: [1],
      explanation: "A system designed to withstand the failure of one or more components demonstrates High Availability, since it keeps operating despite individual failures. Elasticity refers to dynamically adjusting capacity to match demand, Scalability refers to the ability to handle growth in load, and Agility refers to the speed of provisioning and iterating — none of these specifically describe fault tolerance."
    },
    {
      id: "paper-18-025",
      domain: "VPC",
      topic: "direct-connect",
      type: "single",
      question: "A Cloud Practitioner needs a consistent and dedicated connection between AWS resources and an on-premises system. Which AWS service can fulfill this requirement?",
      options: [
        "AWS Direct Connect",
        "AWS VPN",
        "Amazon Connect",
        "AWS Data Pipeline"
      ],
      correctAnswer: [0],
      explanation: "AWS Direct Connect provides a consistent, dedicated network connection between on-premises infrastructure and AWS, offering more reliable bandwidth than an internet-based connection. AWS VPN connects over the public internet and is less consistent and dedicated, Amazon Connect is a cloud contact-center service, and AWS Data Pipeline orchestrates data workflows — neither provides dedicated network connectivity."
    },
    {
      id: "paper-18-026",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "Within the AWS shared responsibility model, who is responsible for security and compliance?",
      options: [
        "The customer is responsible.",
        "AWS is responsible.",
        "AWS and the customer share responsibility.",
        "AWS shares responsibility with the relevant governing body."
      ],
      correctAnswer: [2],
      explanation: "Under the AWS Shared Responsibility Model, security and compliance are a shared responsibility: AWS secures the infrastructure 'of' the cloud while the customer secures what they put 'in' the cloud, such as data, configurations, and applications. It is not solely the customer's or solely AWS's responsibility, and no third-party governing body shares in this arrangement."
    },
    {
      id: "paper-18-027",
      domain: "IAM",
      topic: "cli",
      type: "single",
      question: "To use the AWS CLI, users are required to generate:",
      options: [
        "a password policy.",
        "an access/secret key.",
        "a managed policy.",
        "an API key."
      ],
      correctAnswer: [1],
      explanation: "To use the AWS CLI, users must generate an access key and secret key pair, which are the credentials the CLI uses to authenticate API requests. A password policy governs password rules rather than CLI authentication, a managed policy defines permissions rather than credentials, and there is no single generic 'API key' concept used by AWS for CLI access."
    },
    {
      id: "paper-18-028",
      domain: "SEC",
      topic: "kms",
      type: "single",
      question: "Which AWS service is used to provide encryption for Amazon EBS?",
      options: [
        "AWS Certificate Manager",
        "AWS Systems Manager",
        "AWS KMS",
        "AWS Config"
      ],
      correctAnswer: [2],
      explanation: "AWS Key Management Service (KMS) provides and manages the encryption keys used to encrypt Amazon EBS volumes. AWS Certificate Manager handles SSL/TLS certificates, AWS Systems Manager is for operational management tasks, and AWS Config tracks resource configuration changes — none of these provide encryption for EBS."
    },
    {
      id: "paper-18-029",
      domain: "CMP",
      topic: "lambda",
      type: "multiple-select",
      question: "How does AWS charge for AWS Lambda usage once the free tier has been exceeded? (Choose two.)",
      options: [
        "By the time it takes for the Lambda function to execute.",
        "By the number of versions of a specific Lambda function.",
        "By the number of requests made for a given Lambda function.",
        "By the programming language that is used for the Lambda function.",
        "By the total number of Lambda functions in an AWS account."
      ],
      correctAnswer: [0, 2],
      explanation: "AWS Lambda charges based on the number of requests made to a function and the compute time it takes to execute, once free-tier limits are exceeded. It does not charge based on the number of function versions, the programming language used, or the total number of functions in an account, since none of these affect Lambda pricing."
    },
    {
      id: "paper-18-030",
      domain: "GLB",
      topic: "global-infrastructure",
      type: "multiple-select",
      question: "Which of the following describes the relationships among AWS Regions, Availability Zones, and edge locations? (Choose two.)",
      options: [
        "There are more AWS Regions than Availability Zones.",
        "There are more edge locations than AWS Regions.",
        "An edge location is an Availability Zone.",
        "There are more AWS Regions than edge locations.",
        "There are more Availability Zones than AWS Regions."
      ],
      correctAnswer: [1, 4],
      explanation: "There are far more Edge Locations than AWS Regions, since AWS operates hundreds of Edge Locations versus only a few dozen Regions, and there are more Availability Zones than Regions because each Region contains multiple AZs. It is false that there are more Regions than AZs or more Regions than Edge Locations, and an Edge Location is a distinct content-delivery site, not an Availability Zone."
    },
    {
      id: "paper-18-031",
      domain: "SEC",
      topic: "shield",
      type: "single",
      question: "What does AWS Shield Standard provide?",
      options: [
        "WAF rules",
        "DDoS protection",
        "Identity and Access Management (IAM) permissions and access to resources",
        "Data encryption"
      ],
      correctAnswer: [1],
      explanation: "AWS Shield Standard provides automatic DDoS (Distributed Denial of Service) protection at no additional cost for all AWS customers. It does not provide WAF rules, which come from the separate AWS WAF service, it does not manage IAM permissions or resource access, and it does not provide data encryption."
    },
    {
      id: "paper-18-032",
      domain: "CLD",
      topic: "cloud-economics",
      type: "single",
      question: "A company wants to build its new application workloads in the AWS Cloud instead of using on-premises resources. What expense can be reduced using the AWS Cloud?",
      options: [
        "The cost of writing custom-built Java or Node .js code",
        "Penetration testing for security",
        "hardware required to support new applications",
        "Writing specific test cases for third-party applications."
      ],
      correctAnswer: [2],
      explanation: "Moving to the AWS Cloud eliminates the need to purchase and maintain physical hardware to support new applications, replacing that capital expense with pay-as-you-go usage. Writing custom application code, performing penetration testing, and writing test cases for third-party applications are all activities that still need to happen regardless of where the application runs, so the cloud does not reduce those specific costs."
    },
    {
      id: "paper-18-033",
      domain: "ARC",
      topic: "marketplace",
      type: "multiple-select",
      question: "What does AWS Marketplace allow users to do? (Choose two.)",
      options: [
        "Sell unused Amazon EC2 Spot Instances.",
        "Sell solutions to other AWS users.",
        "Buy third-party software that runs on AWS.",
        "Purchase AWS security and compliance documents.",
        "Order AWS Snowball."
      ],
      correctAnswer: [1, 2],
      explanation: "AWS Marketplace lets independent software vendors sell their solutions to other AWS users, and it lets AWS customers buy and deploy that third-party software directly on AWS. It is not a venue for selling unused Spot Instances, it does not sell AWS's own security and compliance documents, which come from AWS Artifact, and it is not used to order AWS Snowball devices."
    },
    {
      id: "paper-18-034",
      domain: "CLD",
      topic: "hybrid-cloud",
      type: "single",
      question: "What does it mean if a user deploys a hybrid cloud architecture on AWS?",
      options: [
        "All resources run using on-premises infrastructure.",
        "Some resources run on-premises and some run in a colocation center.",
        "All resources run in the AWS Cloud.",
        "Some resources run on-premises and some run in the AWS Cloud."
      ],
      correctAnswer: [3],
      explanation: "A hybrid cloud architecture means some resources run on-premises and some run in the AWS Cloud, typically connected via VPN or Direct Connect. Running everything on-premises or everything in the cloud is not hybrid by definition, and a colocation center is a third-party-hosted physical facility, not what AWS means by hybrid cloud."
    },
    {
      id: "paper-18-035",
      domain: "MON",
      topic: "aws-config",
      type: "single",
      question: "Which AWS service allows users to identify the changes made to a resource over time?",
      options: [
        "Amazon Inspector",
        "AWS Config",
        "AWS Service Catalog",
        "AWS IAM"
      ],
      correctAnswer: [1],
      explanation: "AWS Config continuously records and tracks configuration changes made to AWS resources over time, letting users see exactly what changed and when. Amazon Inspector scans for vulnerabilities rather than configuration history, AWS Service Catalog manages approved product catalogs, and AWS IAM manages access permissions — none track configuration change history."
    },
    {
      id: "paper-18-036",
      domain: "ACM",
      topic: "tco",
      type: "single",
      question: "How can a company reduce its Total Cost of Ownership (TCO) using AWS?",
      options: [
        "By minimizing large capital expenditures",
        "By having no responsibility for third-party license costs",
        "By having no operational expenditures",
        "By having AWS manage applications"
      ],
      correctAnswer: [0],
      explanation: "A company reduces its Total Cost of Ownership on AWS primarily by minimizing large upfront capital expenditures, since AWS uses a pay-as-you-go model instead of requiring large hardware purchases. AWS does not eliminate third-party license costs, cloud usage still incurs operational expenditures even if they are more variable, and AWS managing applications on a customer's behalf is not a general TCO factor since most services still require customer management."
    },
    {
      id: "paper-18-037",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "Which activity is a customer responsibility in the AWS Cloud according to the AWS shared responsibility model?",
      options: [
        "Ensuring network connectivity from AWS to the internet",
        "Patching and fixing flaws within the AWS Cloud infrastructure",
        "Ensuring the physical security of cloud data centers",
        "Ensuring Amazon EBS volumes are backed up"
      ],
      correctAnswer: [3],
      explanation: "Ensuring that Amazon EBS volumes are backed up, for example via snapshots, is a customer responsibility, since AWS is only responsible for the durability of the underlying storage hardware, not for creating backups of customer data. Ensuring network connectivity to the internet, patching the AWS Cloud infrastructure, and ensuring physical security of data centers are all AWS's responsibilities under the Shared Responsibility Model."
    },
    {
      id: "paper-18-038",
      domain: "CLD",
      topic: "cloud-benefits",
      type: "multiple-select",
      question: "What are the advantages of the AWS Cloud? (Choose two.)",
      options: [
        "Fixed rate monthly cost",
        "No need to guess capacity requirements",
        "Increased speed to market",
        "Increased upfront capital expenditure",
        "Physical access to cloud data centers"
      ],
      correctAnswer: [1, 2],
      explanation: "Two advantages of the AWS Cloud are that customers no longer need to guess capacity requirements, since they can scale up or down as needed, and increased speed to market, since resources can be provisioned in minutes rather than weeks. AWS does not offer a fixed monthly rate since costs are variable and pay-as-you-go, it reduces rather than increases upfront capital expenditure, and customers do not get physical access to AWS data centers."
    },
    {
      id: "paper-18-039",
      domain: "ACM",
      topic: "tco",
      type: "multiple-select",
      question: "When comparing the total cost of ownership (TCO) of an on-premises infrastructure to a cloud architecture, what costs should be considered? (Choose two.)",
      options: [
        "The credit card processing fees for application transactions in the cloud.",
        "The cost of purchasing and installing server hardware in the on-premises data.",
        "The cost of administering the infrastructure, including operating system and software installations, patches, backups, and recovering from failures.",
        "The costs of third-party penetration testing.",
        "The advertising costs associated with an ongoing enterprise-wide campaign."
      ],
      correctAnswer: [1, 2],
      explanation: "When comparing Total Cost of Ownership, you should factor in the cost of purchasing and installing on-premises server hardware, and the cost of administering that infrastructure, including operating system and software installations, patching, backups, and failure recovery, since both are significant on-premises costs the cloud can reduce. Credit card processing fees, third-party penetration testing costs, and enterprise advertising costs are unrelated to the infrastructure cost comparison between on-premises and cloud."
    },
    {
      id: "paper-18-040",
      domain: "ACM",
      topic: "consolidated-billing",
      type: "single",
      question: "Which AWS feature allows a company to take advantage of usage tiers for services across multiple member accounts?",
      options: [
        "Service control policies (SCPs)",
        "Consolidated billing",
        "All Upfront Reserved Instances",
        "AWS Cost Explorer"
      ],
      correctAnswer: [1],
      explanation: "Consolidated billing combines usage across multiple member accounts under one paying account, allowing the combined usage to qualify for volume-based usage tier discounts that individual accounts might not reach alone. Service control policies restrict permissions rather than billing, All Upfront Reserved Instances is a specific payment option rather than a billing feature, and AWS Cost Explorer visualizes spending but does not itself provide usage-tier discounts."
    },
    {
      id: "paper-18-041",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "What is one of the customer’s responsibilities according to the AWS shared responsibility model?",
      options: [
        "Virtualization infrastructure",
        "Network infrastructure",
        "Application security",
        "Physical security of hardware"
      ],
      correctAnswer: [2],
      explanation: "Application security is a customer responsibility under the Shared Responsibility Model, since the customer controls the code, configuration, and data of their own applications. Virtualization infrastructure, network infrastructure, and physical security of hardware are all part of the underlying infrastructure that AWS manages, not the customer."
    },
    {
      id: "paper-18-042",
      domain: "GLB",
      topic: "edge-locations",
      type: "single",
      question: "What helps a company provide a lower latency experience to its users globally?",
      options: [
        "Using an AWS Region that is central to all users",
        "Using a second Availability Zone in the AWS Region that is using used",
        "Enabling caching in the AWS Region that is being used",
        "Using edge locations to put content closer to all users"
      ],
      correctAnswer: [3],
      explanation: "Using edge locations places cached content physically closer to users around the world, reducing the distance data must travel and lowering latency globally. Using a single central Region still leaves distant users with higher latency, using a second Availability Zone in the same Region does not help users far from that Region, and simply enabling caching in the Region being used does not put content near users the way distributed edge locations do."
    },
    {
      id: "paper-18-043",
      domain: "CLD",
      topic: "agility",
      type: "single",
      question: "How can the AWS Cloud increase user workforce productivity after migration from an on-premises data center?",
      options: [
        "Users do not have to wait for infrastructure provisioning.",
        "The AWS Cloud infrastructure is much faster than an on-premises data center infrastructure.",
        "AWS takes over application configuration management on behalf of users.",
        "Users do not need to address security and compliance issues."
      ],
      correctAnswer: [0],
      explanation: "The AWS Cloud increases workforce productivity because users no longer have to wait days or weeks for physical infrastructure to be provisioned, since resources become available in minutes, letting teams move faster. AWS Cloud infrastructure simply being faster is not the general productivity driver being described, AWS does not take over application configuration management by default, and security and compliance responsibilities still exist for the customer under the Shared Responsibility Model."
    },
    {
      id: "paper-18-044",
      domain: "ACM",
      topic: "organizations",
      type: "single",
      question: "Which AWS service provides a quick and automated way to create and manage AWS accounts?",
      options: [
        "AWS QuickSight",
        "Amazon Lightsail",
        "AWS Organizations",
        "Amazon Connect"
      ],
      correctAnswer: [2],
      explanation: "AWS Organizations provides a quick, automated way to create and centrally manage multiple AWS accounts, including applying policies and consolidated billing across them. AWS QuickSight is a business-intelligence tool, Amazon Lightsail is a simplified virtual-server service, and Amazon Connect is a cloud contact-center service — none manage AWS accounts."
    },
    {
      id: "paper-18-045",
      domain: "DBA",
      topic: "rds",
      type: "single",
      question: "Which Amazon RDS feature can be used to achieve high availability?",
      options: [
        "Multiple Availability Zones",
        "Amazon Reserved Instances",
        "Provisioned IOPS storage",
        "Enhanced monitoring"
      ],
      correctAnswer: [0],
      explanation: "Deploying an Amazon RDS database across Multiple Availability Zones automatically maintains a synchronous standby replica in a different AZ, providing automatic failover and high availability. Reserved Instances are a pricing option rather than an availability feature, Provisioned IOPS storage improves storage performance, and Enhanced Monitoring provides detailed OS-level metrics — neither provides high availability."
    },
    {
      id: "paper-18-046",
      domain: "ACM",
      topic: "support",
      type: "single",
      question: "Where should users report that AWS resources are being used for malicious purposes?",
      options: [
        "AWS Abuse team",
        "AWS Shield",
        "AWS Support",
        "AWS Developer Forums"
      ],
      correctAnswer: [0],
      explanation: "Reports of AWS resources being used for malicious purposes should go to the AWS Abuse team, which specifically investigates and handles abuse complaints such as spam, port scanning, or compromised resources. AWS Shield is a DDoS protection service rather than a reporting channel, AWS Support handles account and technical inquiries, and AWS Developer Forums are for community discussion, not abuse reporting."
    },
    {
      id: "paper-18-047",
      domain: "MON",
      topic: "cloudtrail",
      type: "single",
      question: "Which AWS service needs to be enabled to track all user account changes within the AWS Management Console?",
      options: [
        "AWS CloudTrail",
        "Amazon Simple Notification Service (Amazon SNS)",
        "VPC Flow Logs",
        "AWS CloudHSM"
      ],
      correctAnswer: [0],
      explanation: "AWS CloudTrail must be enabled to track and log all user account activity, including every action taken within the AWS Management Console, API, and CLI. Amazon SNS is a messaging and notification service, VPC Flow Logs record network traffic rather than console actions, and AWS CloudHSM is a hardware security module for key management — none log account or console activity."
    },
    {
      id: "paper-18-048",
      domain: "ARC",
      topic: "best-practices",
      type: "single",
      question: "What is an AWS Cloud design best practice?",
      options: [
        "Tight coupling of components",
        "Single point of failure",
        "High availability",
        "Overprovisioning of resources"
      ],
      correctAnswer: [2],
      explanation: "High availability is a recommended AWS Cloud design best practice, ensuring an application keeps running even if individual components fail. Tight coupling of components, having a single point of failure, and overprovisioning resources are all anti-patterns AWS recommends avoiding, not best practices."
    },
    {
      id: "paper-18-049",
      domain: "ACM",
      topic: "on-demand-instances",
      type: "single",
      question: "Why is AWS more economical than traditional data centers for applications with varying compute workloads?",
      options: [
        "Amazon Elastic Compute Cloud (Amazon EC2) costs are billed on a monthly basis.",
        "Customers retain full administrative access to their Amazon EC2 instances.",
        "Amazon EC2 instances can be launched on-demand when needed.",
        "Customers can permanently run enough instances to handle peak workloads."
      ],
      correctAnswer: [2],
      explanation: "AWS is more economical for varying compute workloads because Amazon EC2 instances can be launched on-demand exactly when needed and terminated when not, avoiding the cost of running excess capacity. On-Demand billing is by the second or hour rather than monthly, customers retaining administrative access does not itself save money, and permanently running enough instances to handle peak load, as an on-premises data center must, is precisely the wasteful approach the cloud avoids."
    },
    {
      id: "paper-18-050",
      domain: "OTH",
      topic: "database-migration-service",
      type: "single",
      question: "Which AWS service would simplify migration of a database to AWS?",
      options: [
        "AWS Storage Gateway",
        "AWS Database Migration Service (AWS DMS)",
        "Amazon Elastic Compute Cloud (Amazon EC2)",
        "Amazon AppStream 2.0"
      ],
      correctAnswer: [1],
      explanation: "AWS Database Migration Service (AWS DMS) is purpose-built to simplify and automate migrating databases to AWS, supporting continuous replication with minimal downtime and no impact on the source database. AWS Storage Gateway connects on-premises storage to AWS rather than migrating databases, Amazon EC2 is general compute rather than a migration tool, and Amazon AppStream 2.0 streams desktop applications — none specialize in database migration."
    }
  ]
});
