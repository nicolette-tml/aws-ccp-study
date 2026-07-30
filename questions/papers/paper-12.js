window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "paper-12",
  paperId: "paper-12",
  paperName: "Practice Paper 12",
  questions: [
    {
      id: "paper-12-001",
      domain: "GLB",
      topic: "availability-zones",
      type: "single",
      question: "Which of the following components of the AWS Global Infrastructure consists of one or more discrete data centers interconnected through low latency links?",
      options: [
        "Availability Zone",
        "Edge location",
        "Region",
        "Private networking"
      ],
      correctAnswer: [0],
      explanation: "An Availability Zone consists of one or more discrete data centers with redundant power, networking, and connectivity, interconnected through low-latency links, and each AWS Region contains multiple Availability Zones. An Edge location is a CloudFront caching point, a Region is the broader geographic area that contains multiple Availability Zones, and 'private networking' is not an AWS Global Infrastructure component."
    },
    {
      id: "paper-12-002",
      domain: "ACM",
      topic: "pricing-models",
      type: "single",
      question: "One benefit of On-Demand Amazon Elastic Compute Cloud (Amazon EC2) pricing is:",
      options: [
        "The ability to bid for a lower hourly cost.",
        "Paying a daily rate regardless of time used.",
        "Paying only for time used.",
        "Pre-paying for instances and paying a lower hourly rate."
      ],
      correctAnswer: [2],
      explanation: "On-Demand EC2 pricing lets customers pay only for the compute time they actually use, with no upfront commitment or long-term contract. Bidding for a lower hourly cost describes Spot Instances, paying a fixed daily rate regardless of usage is not how On-Demand pricing works, and pre-paying for a lower hourly rate describes Reserved Instances."
    },
    {
      id: "paper-12-003",
      domain: "ARC",
      topic: "aws-partner-network",
      type: "multiple-select",
      question: "What can assist in evaluating an application for migration to the cloud? (Select TWO)",
      options: [
        "AWS Trusted Advisor.",
        "AWS Professional Services.",
        "AWS Systems Manager.",
        "AWS Partner Network (APN).",
        "AWS Secrets Manager."
      ],
      correctAnswer: [1, 3],
      explanation: "AWS Professional Services and the AWS Partner Network (APN) both provide expert guidance and consulting support that help organizations evaluate and plan application migrations to the cloud. AWS Trusted Advisor gives account-level best-practice checks rather than migration evaluation, AWS Systems Manager is an operations management tool, and AWS Secrets Manager stores and rotates credentials — none of these evaluate migration readiness."
    },
    {
      id: "paper-12-004",
      domain: "GLB",
      topic: "edge-locations",
      type: "single",
      question: "A characteristic of edge locations is that they:",
      options: [
        "Host Amazon EC2 instances closer to users.",
        "Help lower latency and improve performance for users.",
        "Cache frequently changing data without reaching the origin server.",
        "Refresh data changes daily."
      ],
      correctAnswer: [1],
      explanation: "Edge locations are the caching sites CloudFront uses to serve content closer to end users, which lowers latency and improves performance. They do not host EC2 instances (that happens in Regions and Availability Zones), they cache content rather than serving frequently changing data without ever reaching the origin, and cache refresh is governed by expiration rules, not a fixed daily schedule."
    },
    {
      id: "paper-12-005",
      domain: "IAM",
      topic: "cli-sdk",
      type: "multiple-select",
      question: "Which of the following are valid ways for a customer to interact with AWS services? (Select TWO)",
      options: [
        "Command line interface.",
        "On-premises.",
        "Software Development Kits.",
        "Software-as-a-service.",
        "Hybrid."
      ],
      correctAnswer: [0, 2],
      explanation: "Customers can interact with AWS services directly through the Command Line Interface (CLI) or Software Development Kits (SDKs), both of which call the underlying AWS APIs. On-premises and hybrid describe deployment models rather than interaction methods, and Software-as-a-Service is a cloud service model, not a way of interacting with AWS."
    },
    {
      id: "paper-12-006",
      domain: "CLD",
      topic: "cloud-benefits",
      type: "single",
      question: "What is a value proposition of the AWS Cloud?",
      options: [
        "AWS is responsible for security in the AWS Cloud.",
        "No long-term contract is required.",
        "Provision new servers in days.",
        "AWS manages user applications in the AWS Cloud."
      ],
      correctAnswer: [1],
      explanation: "A key value proposition of the AWS Cloud is that no long-term contracts are required, since customers can pay as they go and scale usage freely. AWS being responsible for security of the cloud describes the Shared Responsibility Model rather than a general value proposition, provisioning servers happens in minutes rather than days, and AWS does not manage customer applications running on top of its infrastructure."
    },
    {
      id: "paper-12-007",
      domain: "ACM",
      topic: "reserved-instances",
      type: "single",
      question: "A company is migrating an application that is running non-interruptible workloads for a three-year time frame. Which pricing construct would provide the MOST cost-effective solution?",
      options: [
        "Amazon EC2 Spot Instances.",
        "Amazon EC2 Dedicated Instances.",
        "Amazon EC2 On-Demand Instances.",
        "Amazon EC2 Reserved Instances."
      ],
      correctAnswer: [3],
      explanation: "For a non-interruptible workload running steadily for three years, Reserved Instances are the most cost-effective option because the significant discount is earned by committing to a long, predictable usage term. Spot Instances can be interrupted at any time, Dedicated Instances address compliance or licensing needs rather than cost savings, and On-Demand Instances cost far more over three years than a reserved commitment."
    },
    {
      id: "paper-12-008",
      domain: "MON",
      topic: "aws-config",
      type: "single",
      question: "Which AWS service is used to track record, and audit configuration changes made to AWS resources?",
      options: [
        "AWS Shield.",
        "AWS Config.",
        "AWS IAM.",
        "Amazon Inspector."
      ],
      correctAnswer: [1],
      explanation: "AWS Config continuously records, tracks, and audits configuration changes made to AWS resources, evaluating them against desired configurations over time. AWS Shield protects against DDoS attacks, IAM manages access permissions, and Amazon Inspector scans for security vulnerabilities — none of these track configuration change history."
    },
    {
      id: "paper-12-009",
      domain: "GLB",
      topic: "global-reach",
      type: "single",
      question: "Which feature of the AWS Cloud will support an international company’s requirement for low latency to all of its customers?",
      options: [
        "Fault tolerance.",
        "Global reach.",
        "Pay-as-you-go pricing.",
        "High availability."
      ],
      correctAnswer: [1],
      explanation: "Global reach refers to AWS's worldwide network of Regions and Edge Locations, which lets an international company deploy resources close to customers everywhere and achieve low latency. Fault tolerance and high availability describe resilience to failure rather than proximity to users, and pay-as-you-go pricing is a cost model unrelated to latency."
    },
    {
      id: "paper-12-010",
      domain: "ACM",
      topic: "consolidated-billing",
      type: "single",
      question: "How can one AWS account use Reserved Instances from another AWS account?",
      options: [
        "By using Amazon EC2 Dedicated Instances.",
        "By using AWS Organizations consolidated billing.",
        "By using the AWS Cost Explorer tool.",
        "By using AWS Budgets."
      ],
      correctAnswer: [1],
      explanation: "AWS Organizations consolidated billing links multiple AWS accounts together, so Reserved Instance discounts purchased in one account can automatically apply to matching usage in other linked accounts. Dedicated Instances are an unrelated purchase option, and Cost Explorer and AWS Budgets are cost-visibility and alerting tools that don't enable sharing of RIs across accounts."
    },
    {
      id: "paper-12-011",
      domain: "CLD",
      topic: "cloud-benefits",
      type: "multiple-select",
      question: "What are the benefits of developing and running a new application in the AWS Cloud compared to on-premises? (Select TWO)",
      options: [
        "AWS automatically distributes the data globally for higher durability.",
        "AWS will take care of operating the application.",
        "AWS makes it easy to architect for high availability.",
        "AWS can easily accommodate application demand changes.",
        "AWS takes care of application security patching."
      ],
      correctAnswer: [2, 3],
      explanation: "Running a new application in AWS makes it easy to architect for high availability using services distributed across multiple Availability Zones, and AWS can easily accommodate changing application demand by scaling resources up or down as needed. AWS does not automatically distribute data globally for durability by default, does not operate the application on the customer's behalf, and application-level security patching remains the customer's responsibility."
    },
    {
      id: "paper-12-012",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "Which of the following services falls under the responsibility of the customer to maintain operating system configuration, security patching, and networking?",
      options: [
        "Amazon RDS.",
        "Amazon EC2.",
        "Amazon ElastiCache.",
        "AWS Fargate."
      ],
      correctAnswer: [1],
      explanation: "Amazon EC2 is an Infrastructure-as-a-Service offering, so under the Shared Responsibility Model the customer is responsible for the guest operating system configuration, security patching, and network configuration on their instances. Amazon RDS, Amazon ElastiCache, and AWS Fargate are managed services where AWS takes on more of that operational burden, including OS patching."
    },
    {
      id: "paper-12-013",
      domain: "IAM",
      topic: "mfa",
      type: "multiple-select",
      question: "AWS supports which of the following methods to add security to Identity and Access Management (IAM) users? (Select TWO)",
      options: [
        "Implementing Amazon Rekognition.",
        "Using AWS Shield-protected resources.",
        "Blocking access with Security Groups.",
        "Using Multi-Factor Authentication (MFA).",
        "Enforcing password strength and expiration."
      ],
      correctAnswer: [3, 4],
      explanation: "Multi-Factor Authentication (MFA) adds a second layer of verification beyond a password, and enforcing password strength and expiration policies reduces the risk of compromised credentials — both directly strengthen IAM user security. Amazon Rekognition is an image and video analysis service, AWS Shield-protected resources address DDoS attacks, and Security Groups control network traffic, none of which secure IAM user authentication."
    },
    {
      id: "paper-12-014",
      domain: "S3",
      topic: "storage-gateway",
      type: "single",
      question: "Which service provides a hybrid storage service that enables on-premises applications to seamlessly use cloud storage?",
      options: [
        "Amazon Glacier",
        "AWS Snowball",
        "AWS Storage Gateway",
        "Amazon Elastic Block Storage (Amazon EBS)"
      ],
      correctAnswer: [2],
      explanation: "AWS Storage Gateway is a hybrid storage service that connects on-premises applications to AWS cloud storage, letting them use S3, EBS, or other AWS storage seamlessly as if it were local. Amazon Glacier and AWS Snowball are for archival and bulk data transfer respectively, not seamless hybrid access, and Amazon EBS is block storage attached directly to EC2 instances rather than a hybrid gateway."
    },
    {
      id: "paper-12-015",
      domain: "ARC",
      topic: "aws-marketplace",
      type: "single",
      question: "Where should a company go to search software listings from independent software vendors to find, test, buy and deploy software that runs on AWS?",
      options: [
        "AWS Marketplace.",
        "Amazon Lumberyard.",
        "AWS Artifact.",
        "Amazon CloudSearch."
      ],
      correctAnswer: [0],
      explanation: "AWS Marketplace is the catalog where customers can search software listings from independent software vendors to find, test, buy, and deploy software that runs on AWS. Amazon Lumberyard is a game engine, AWS Artifact provides compliance reports rather than software listings, and Amazon CloudSearch is a managed search service, not a software marketplace."
    },
    {
      id: "paper-12-016",
      domain: "GLB",
      topic: "regions",
      type: "single",
      question: "Which of the following is a component of the AWS Global Infrastructure?",
      options: [
        "Amazon Alexa.",
        "AWS Regions.",
        "Amazon Lightsail.",
        "AWS Organizations."
      ],
      correctAnswer: [1],
      explanation: "AWS Regions are a core component of the AWS Global Infrastructure, representing geographic areas that each contain multiple Availability Zones. Amazon Alexa and Amazon Lightsail are AWS services rather than infrastructure components, and AWS Organizations is an account-management service, not part of the physical global infrastructure."
    },
    {
      id: "paper-12-017",
      domain: "ACM",
      topic: "spot-instances",
      type: "single",
      question: "Which Amazon EC2 pricing model adjusts based on supply and demand of EC2 instances?",
      options: [
        "On-Demand Instances.",
        "Reserved Instances.",
        "Spot Instances.",
        "Convertible Reserved Instances."
      ],
      correctAnswer: [2],
      explanation: "Spot Instances let customers use spare EC2 capacity at a price that fluctuates based on the real-time supply and demand of that unused capacity. On-Demand Instances have a fixed hourly rate, and Reserved and Convertible Reserved Instances have prices fixed by the commitment term, neither of which adjusts dynamically with supply and demand."
    },
    {
      id: "paper-12-018",
      domain: "VPC",
      topic: "direct-connect",
      type: "multiple-select",
      question: "A company wants to migrate its applications to a VPC on AWS. These applications will need to access on-premises resources. What combination of actions will enable the company to accomplish this goals? (Select TWO)",
      options: [
        "Use the AWS Service Catalog to identify a list of on-premises resources that can be migrated",
        "Build a VPN connection between an on-premises device and a virtual private gateway in the new VPC",
        "Use Amazon Athena to query data from the on-premises database servers",
        "Connect the company’s on-premises data center to AWS using AWS Direct Connect",
        "Leverage Amazon CloudFront to restrict access to static web content provided through the company’s on-premises web servers"
      ],
      correctAnswer: [1, 3],
      explanation: "Building a VPN connection between an on-premises device and a virtual private gateway, and connecting the on-premises data center to AWS using AWS Direct Connect, both establish network connectivity between the new VPC and the on-premises resources the applications need to reach. AWS Service Catalog manages approved product catalogs, Amazon Athena queries data already in AWS (not live on-premises databases), and CloudFront is a content delivery network — none of these establish connectivity to on-premises resources."
    },
    {
      id: "paper-12-019",
      domain: "ACM",
      topic: "trusted-advisor",
      type: "single",
      question: "A Cloud Practitioner must determine if any security groups in an AWS account have been provisioned to allow unrestricted access for specific ports. What is the SIMPLEST way to do this?",
      options: [
        "Review the inbound rules for each security group in the Amazon EC2 management console to check for port 0.0.0.0/0.",
        "Run AWS Trusted Advisor and review the findings.",
        "Open the AWS IAM console and check the inbound rule filters for open access.",
        "In AWS Config, create a custom rule that invokes an AWS Lambda function to review firewall rules for inbound access."
      ],
      correctAnswer: [1],
      explanation: "AWS Trusted Advisor includes a security check that automatically flags security groups with rules open to 0.0.0.0/0 on specific ports, making it the simplest way to find this issue across an account. Manually reviewing every security group's inbound rules in the EC2 console is far more time-consuming, the IAM console does not show security group rules, and building a custom AWS Config rule with a Lambda function requires significantly more effort than using an existing Trusted Advisor check."
    },
    {
      id: "paper-12-020",
      domain: "SEC",
      topic: "security-services",
      type: "multiple-select",
      question: "Which of the following security-related services does AWS offer? (Select TWO)",
      options: [
        "Multi-factor authentication physical tokens.",
        "AWS Trusted Advisor security checks.",
        "Data encryption.",
        "Automated penetration testing.",
        "Amazon S3 copyrighted content detection."
      ],
      correctAnswer: [1, 2],
      explanation: "AWS Trusted Advisor performs automated security checks, such as flagging security groups with overly open ports, and AWS provides data encryption capabilities to protect data at rest and in transit — both are genuine AWS security-related offerings. AWS does not sell physical MFA tokens, does not offer automated penetration testing as a self-service (customers must request authorization to test their own resources), and there is no S3 feature for detecting copyrighted content."
    },
    {
      id: "paper-12-021",
      domain: "SEC",
      topic: "ddos",
      type: "multiple-select",
      question: "Which of the following services have Distributed Denial of Service (DDoS) mitigation features? (Select TWO)",
      options: [
        "AWS WAF.",
        "Amazon DynamoDB.",
        "Amazon EC2.",
        "Amazon CloudFront.",
        "Amazon Inspector."
      ],
      correctAnswer: [0, 3],
      explanation: "AWS WAF filters malicious HTTP/HTTPS requests at the application layer, and Amazon CloudFront absorbs and disperses traffic across its global edge network, both of which help mitigate DDoS attacks. Amazon DynamoDB, Amazon EC2, and Amazon Inspector are not DDoS mitigation services — Inspector instead performs vulnerability assessments."
    },
    {
      id: "paper-12-022",
      domain: "EC2",
      topic: "ami",
      type: "single",
      question: "Which of the following AWS features enables a user to launch a pre-configured Amazon Elastic Compute Cloud (Amazon EC2) instance?",
      options: [
        "Amazon Elastic Block Store (Amazon EBS).",
        "Amazon Machine Image.",
        "Amazon EC2 Systems Manager.",
        "Amazon AppStream 2.0."
      ],
      correctAnswer: [1],
      explanation: "An Amazon Machine Image (AMI) is a template containing the software configuration needed to launch a pre-configured EC2 instance, including the operating system, application server, and applications. Amazon EBS is block storage rather than a launch template, EC2 Systems Manager manages already-running instances, and AppStream 2.0 streams desktop applications rather than launching EC2 instances."
    },
    {
      id: "paper-12-023",
      domain: "CLD",
      topic: "elasticity",
      type: "single",
      question: "A solution that is able to support growth in users, traffic, or data size with no drop in performance aligns with which cloud architecture principle?",
      options: [
        "Think parallel.",
        "Implement elasticity.",
        "Decouple your components.",
        "Design for failure."
      ],
      correctAnswer: [1],
      explanation: "Implementing elasticity means designing an architecture that automatically scales resources up or down to match demand, so growth in users, traffic, or data size does not degrade performance. Thinking parallel is about breaking work into concurrent tasks, decoupling reduces dependencies between components, and designing for failure is about resilience — none specifically describe scaling to sustain performance under growth."
    },
    {
      id: "paper-12-024",
      domain: "CLD",
      topic: "elasticity",
      type: "single",
      question: "Which AWS Cloud benefit eliminates the need for users to try estimating future infrastructure usage?",
      options: [
        "Easy and fast deployment of applications in multiple Regions around the world.",
        "Security of the AWS Cloud.",
        "Elasticity of the AWS Cloud.",
        "Lower variable costs due to massive economies of scale."
      ],
      correctAnswer: [2],
      explanation: "Elasticity of the AWS Cloud allows resources to automatically scale up or down based on actual demand, so customers never need to try to predict future infrastructure needs in advance. Fast global deployment, security, and lower variable costs from economies of scale are other AWS Cloud benefits, but none of them address the need to forecast capacity."
    },
    {
      id: "paper-12-025",
      domain: "SEC",
      topic: "artifact",
      type: "single",
      question: "What can users access from AWS Artifact?",
      options: [
        "AWS security and compliance documents.",
        "A download of configuration management details for all AWS resources.",
        "Training materials for AWS services.",
        "A security assessment of the applications deployed in the AWS Cloud."
      ],
      correctAnswer: [0],
      explanation: "AWS Artifact provides on-demand, self-service access to AWS's security and compliance documents, such as SOC and PCI reports. It does not provide configuration management details for resources (that's AWS Config), training materials, or security assessments of deployed applications (that's Amazon Inspector)."
    },
    {
      id: "paper-12-026",
      domain: "ACM",
      topic: "tco",
      type: "single",
      question: "Compared with costs in traditional and virtualized data centers, AWS has:",
      options: [
        "Greater variable costs and greater upfront costs.",
        "Fixed usage costs and lower upfront costs.",
        "Lower variable costs and greater upfront costs.",
        "Lower variable costs and lower upfront costs."
      ],
      correctAnswer: [3],
      explanation: "Compared to traditional and virtualized data centers, AWS offers lower variable costs thanks to economies of scale and pay-as-you-go pricing, and lower upfront costs since there's no need to buy hardware in advance — a core part of AWS's total cost of ownership advantage. The other options incorrectly claim greater variable or upfront costs, or a fixed usage cost, none of which reflect how AWS pricing actually works."
    },
    {
      id: "paper-12-027",
      domain: "GLB",
      topic: "cloudfront",
      type: "single",
      question: "Which AWS service would a customer use with a static website to achieve tower latency and high transfer speeds?",
      options: [
        "AWS Lambda.",
        "Amazon DynamoDB Accelerator.",
        "Amazon Route 53.",
        "Amazon CloudFront."
      ],
      correctAnswer: [3],
      explanation: "Amazon CloudFront is AWS's Content Delivery Network, caching static website content at Edge Locations around the world to deliver low latency and high transfer speeds to users. AWS Lambda is a compute service, DynamoDB Accelerator (DAX) caches database reads rather than website content, and Amazon Route 53 handles DNS routing rather than content delivery."
    },
    {
      id: "paper-12-028",
      domain: "ELB",
      topic: "auto-scaling",
      type: "single",
      question: "How do Amazon EC2 Auto Scaling groups help achieve high availability for a web application?",
      options: [
        "They automatically add more instances across multiple AWS Regions based on global demand of the application.",
        "They automatically add or replace instances across multiple Availability Zones when the application needs it.",
        "They enable the application’s stalk: content to reside closer to end users.",
        "They are able to distribute incoming requests across a tier of web server instances."
      ],
      correctAnswer: [1],
      explanation: "Amazon EC2 Auto Scaling groups achieve high availability by automatically adding or replacing instances across multiple Availability Zones whenever the application needs more capacity or an instance becomes unhealthy. Auto Scaling operates within a Region across Availability Zones rather than automatically across multiple Regions, bringing content closer to end users describes CloudFront, and distributing incoming requests across instances is the role of a load balancer, not Auto Scaling itself."
    },
    {
      id: "paper-12-029",
      domain: "IAM",
      topic: "iam-policies",
      type: "single",
      question: "Which of the following can limit Amazon Simple Storage Service (Amazon S3) bucket access to specific users?",
      options: [
        "A public and private key-pair.",
        "Amazon Inspector.",
        "AWS Identity and Access Management (IAM) policies.",
        "Security Groups."
      ],
      correctAnswer: [2],
      explanation: "AWS Identity and Access Management (IAM) policies can be attached to a bucket, user, or role to restrict Amazon S3 access to specific users. A public/private key-pair is used for encryption or SSH access rather than bucket-level access control, Amazon Inspector is a vulnerability-scanning service, and Security Groups control network traffic to EC2 instances, not S3 bucket access."
    },
    {
      id: "paper-12-030",
      domain: "ACM",
      topic: "pricing-calculator",
      type: "single",
      question: "How should a customer forecast the future costs for running a new web application?",
      options: [
        "Amazon Aurora Backtrack.",
        "Amazon CloudWatch Billing Alarms.",
        "AWS Simple Monthly Calculator.",
        "AWS Cost and Usage report."
      ],
      correctAnswer: [2],
      explanation: "The AWS Simple Monthly Calculator (now the AWS Pricing Calculator) lets customers estimate and forecast the future costs of running a new application before deploying it. Amazon Aurora Backtrack restores databases to a prior state, Amazon CloudWatch Billing Alarms alert on costs already incurred, and the AWS Cost and Usage Report details historical spending — none of these forecast future costs."
    },
    {
      id: "paper-12-031",
      domain: "SEC",
      topic: "artifact",
      type: "single",
      question: "Where are AWS compliance documents, such as an SOC 1 report, located?",
      options: [
        "Amazon Inspector.",
        "AWS CloudTrail.",
        "AWS Artifact.",
        "AWS Certificate Manager."
      ],
      correctAnswer: [2],
      explanation: "AWS Artifact is the self-service portal where customers can access AWS compliance documents, such as SOC 1 reports, PCI attestations, and other audit artifacts. Amazon Inspector scans for vulnerabilities, AWS CloudTrail logs API activity, and AWS Certificate Manager manages SSL/TLS certificates — none of these host compliance documentation."
    },
    {
      id: "paper-12-032",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "Which of the following tasks is the responsibility of AWS?",
      options: [
        "Encrypting client-side data.",
        "Configuring AWS Identity and Access Management (IAM) roles.",
        "Securing the Amazon EC2 hypervisor.",
        "Setting user password policies."
      ],
      correctAnswer: [2],
      explanation: "Under the Shared Responsibility Model, AWS is responsible for securing the underlying infrastructure, including the EC2 hypervisor. Encrypting client-side data, configuring IAM roles, and setting password policies are all customer responsibilities — security 'in' the cloud rather than security 'of' the cloud."
    },
    {
      id: "paper-12-033",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "multiple-select",
      question: "Under the shared responsibility model which of the following areas are the customer’s responsibility? (Select TWO)",
      options: [
        "Firmware upgrades of network infrastructure.",
        "Patching of operating systems.",
        "Patching of the underlying hypervisor.",
        "Physical security of data centers.",
        "Configuration of the security group."
      ],
      correctAnswer: [1, 4],
      explanation: "Under the Shared Responsibility Model, the customer is responsible for patching the guest operating systems on their instances and for configuring security groups to control network traffic to their resources. Firmware upgrades of network infrastructure, patching the underlying hypervisor, and physical security of data centers are all AWS's responsibility as part of security 'of' the cloud."
    },
    {
      id: "paper-12-034",
      domain: "DBA",
      topic: "redshift",
      type: "single",
      question: "A company is looking for a scalable data warehouse solution. Which of the following AWS solutions would meet the company’s needs?",
      options: [
        "Amazon Simple Storage Service (Amazon S3).",
        "Amazon DynamoDB.",
        "Amazon Kinesis.",
        "Amazon Redshift."
      ],
      correctAnswer: [3],
      explanation: "Amazon Redshift is AWS's fully managed, petabyte-scale data warehouse service, built for large-scale analytical queries and designed to scale as data grows. Amazon S3 is object storage rather than a warehouse, DynamoDB is a NoSQL database for transactional workloads, and Amazon Kinesis is for real-time streaming data, not data warehousing."
    },
    {
      id: "paper-12-035",
      domain: "VPC",
      topic: "direct-connect",
      type: "multiple-select",
      question: "Which AWS services provide a way to extend an on-premises architecture to the AWS Cloud? (Select TWO)",
      options: [
        "Amazon EBS.",
        "AWS Direct Connect.",
        "Amazon CloudFront.",
        "AWS Storage Gateway.",
        "Amazon Connect."
      ],
      correctAnswer: [1, 3],
      explanation: "AWS Direct Connect establishes a dedicated, private network connection between an on-premises data center and AWS, and AWS Storage Gateway extends on-premises applications to seamlessly use AWS cloud storage — both extend on-premises architecture into the AWS Cloud. Amazon EBS is block storage attached to EC2 instances, Amazon CloudFront is a content delivery network, and Amazon Connect is a cloud contact center service, none of which extend on-premises infrastructure to AWS."
    },
    {
      id: "paper-12-036",
      domain: "CLD",
      topic: "cloud-benefits",
      type: "multiple-select",
      question: "What are the advantages of the AWS Cloud (Select TWO)",
      options: [
        "Fixed rate monthly cost.",
        "No need to guess capacity requirements.",
        "Increased speed to market.",
        "Increased upfront capital expenditure.",
        "Physical access to cloud data centers."
      ],
      correctAnswer: [1, 2],
      explanation: "Two genuine advantages of the AWS Cloud are that customers no longer need to guess capacity requirements, since resources can scale on demand, and that AWS increases speed to market, since resources can be provisioned in minutes. A fixed monthly cost, increased upfront capital expenditure, and physical access to cloud data centers are not benefits of AWS — cloud costs are variable and pay-as-you-go, and customers never get physical access to AWS's data centers."
    },
    {
      id: "paper-12-037",
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
      explanation: "Migrating to the AWS Cloud increases workforce productivity because users no longer have to wait for infrastructure to be provisioned, which can take minutes rather than the weeks typically needed on-premises. AWS Cloud infrastructure being inherently 'faster' than on-premises is not the driver of productivity here, AWS does not manage a customer's application configuration on their behalf, and AWS does not eliminate a customer's own security and compliance responsibilities."
    },
    {
      id: "paper-12-038",
      domain: "DEP",
      topic: "codedeploy",
      type: "multiple-select",
      question: "Which of the following services could be used to deploy an application to servers running on-premises? (Select TWO)",
      options: [
        "AWS Elastic Beanstalk.",
        "AWS OpsWorks.",
        "AWS CodeDeploy.",
        "AWS Batch.",
        "AWS X-Ray."
      ],
      correctAnswer: [1, 2],
      explanation: "AWS OpsWorks and AWS CodeDeploy can both deploy applications to servers running on-premises, in addition to EC2 instances, by using agents installed on those on-premises servers. AWS Elastic Beanstalk only deploys to AWS-managed environments, AWS Batch runs batch computing jobs, and AWS X-Ray is a tracing and debugging tool — none of these deploy applications to on-premises servers."
    },
    {
      id: "paper-12-039",
      domain: "CLD",
      topic: "agility",
      type: "single",
      question: "What is an example of agility in the AWS Cloud?",
      options: [
        "Access to multiple instance types.",
        "Access to managed services.",
        "Using Consolidated Billing to produce one bill.",
        "Decreased acquisition time for new compute resources."
      ],
      correctAnswer: [3],
      explanation: "Agility in the AWS Cloud is exemplified by the decreased acquisition time for new compute resources — what used to take weeks to procure and provision on-premises can now be done in minutes. Access to multiple instance types and access to managed services are benefits of AWS but describe choice and reduced operational burden rather than agility itself, and Consolidated Billing is a cost-management feature unrelated to agility."
    },
    {
      id: "paper-12-040",
      domain: "SEC",
      topic: "shield",
      type: "single",
      question: "Which AWS security service protects applications from distributed denial of service attacks with always-on detection and automatic inline mitigations?",
      options: [
        "Amazon Inspector.",
        "AWS Web Application Firewall (AWS WAF).",
        "Elastic Load Balancing (ELB).",
        "AWS Shield."
      ],
      correctAnswer: [3],
      explanation: "AWS Shield provides always-on detection and automatic inline mitigation of Distributed Denial of Service (DDoS) attacks for applications running on AWS. Amazon Inspector performs vulnerability assessments, AWS WAF filters application-layer web traffic based on custom rules rather than providing always-on automatic DDoS mitigation, and Elastic Load Balancing distributes traffic but does not itself provide DDoS mitigation."
    },
    {
      id: "paper-12-041",
      domain: "ACM",
      topic: "consolidated-billing",
      type: "multiple-select",
      question: "Which of the following are advantages of AWS consolidated billing? (Choose two)",
      options: [
        "The ability to receive one bill for multiple accounts.",
        "Service limits increasing by default in all accounts.",
        "A fixed discount on the monthly bill.",
        "Potential volume discounts, as usage in all accounts is combined.",
        "The automatic extension of the master account’s AWS support plan to all accounts."
      ],
      correctAnswer: [0, 3],
      explanation: "AWS consolidated billing allows an organization to receive one bill for multiple linked accounts, and because usage across all accounts is combined, the organization may reach higher usage tiers and receive potential volume discounts. Service limits do not increase by default for all accounts, there is no fixed discount simply from consolidating, and the master account's AWS Support plan is not automatically extended to all linked accounts."
    },
    {
      id: "paper-12-042",
      domain: "STG",
      topic: "ebs",
      type: "single",
      question: "A company is considering using AWS for a self-hosted database that requires a nightly shutdown for maintenance and cost-saving purposes. Which service should the company use?",
      options: [
        "Amazon Redshift.",
        "Amazon DynamoDB.",
        "Amazon Elastic Compute Cloud (Amazon EC2) with Amazon EC2 instance store.",
        "Amazon EC2 with Amazon Elastic Block Store (Amazon EBS)."
      ],
      correctAnswer: [3],
      explanation: "Amazon EC2 with Amazon EBS is the right choice because EBS volumes persist independently of the instance and retain their data even when the instance is stopped nightly for maintenance, unlike EC2 instance store, whose data is lost when the instance stops. Amazon Redshift and Amazon DynamoDB are managed database services not suited to a self-hosted, custom database that requires manual nightly shutdown control."
    }
  ]
});
