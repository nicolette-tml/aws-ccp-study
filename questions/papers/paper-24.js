window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
    source: "paper-24",
    paperId: "paper-24",
    paperName: "Udemy Practice Exam",
    questions: [
        {
            id: "paper-24-001",
            domain: "EC2",
            topic: "ec2",
            type: "single",
            question: `A company's flagship application runs on a fleet of Amazon Elastic Compute Cloud (Amazon EC2) instances. As per the new policies, the system administrators are looking for the best way to provide secure shell access to Amazon Elastic Compute Cloud (Amazon EC2) instances without opening new ports or using public IP addresses.
                Which tool/service will help you achieve this requirement?`,
            options: [
                "Amazon Inspector",
                "Amazon Route 53",
                "AWS Systems Manager Session Manager",
                "Amazon Elastic Compute Cloud (Amazon EC2) Instance Connect"
            ],
            correctAnswer: [2],
            explanation: `Correct option:

                AWS Systems Manager Session Manager

                AWS Systems Manager Session Manager is a fully-managed service that provides you with an interactive browser-based shell and CLI experience. It helps provide secure and auditable instance management without the need to open inbound ports, maintain bastion hosts, and manage SSH keys. AWS Systems Manager Session Manager helps to enable compliance with corporate policies that require controlled access to instances, increase security and auditability of access to the instances while providing simplicity and cross-platform instance access to end-users.

                Incorrect options:

                Amazon Elastic Compute Cloud (Amazon EC2) Instance Connect - Amazon Elastic Compute Cloud (Amazon EC2) Instance Connect provides a simple and secure way to connect to your Linux instances using Secure Shell (SSH). With EC2 Instance Connect, you use AWS Identity and Access Management (IAM) policies and principals to control SSH access to your instances, removing the need to share and manage SSH keys. EC2 Instance Connect will need port 22 to be open for traffic. Therefore, not the correct option here.

                Amazon Inspector - Amazon Inspector is an automated security assessment service that helps improve the security and compliance of applications deployed on AWS. Amazon Inspector automatically assesses applications for exposure, vulnerabilities, and deviations from best practices. After performing an assessment, Amazon Inspector produces a detailed list of security findings prioritized by level of severity. Amazon Inspector cannot provide secure shell access to EC2 instances.

                Amazon Route 53 - Amazon Route 53 is a highly available and scalable cloud Domain Name System (DNS) web service. It is designed to give developers and businesses an extremely reliable and cost-effective way to route end users to Internet applications by translating names like www.example.com into the numeric IP addresses like 192.0.2.1 that computers use to connect to each other. Amazon Route 53 cannot provide secure shell access to EC2 instances.

                Reference:

                https://aws.amazon.com/systems-manager/faq/`
        },
        {
            id: "paper-24-002",
            domain: "STG",
            topic: "ebs",
            type: "multiple-select",
            questions: "Which of the following AWS services offer block-level storage? (Select two)",
            options: [
                "Amazon Simple Storage Service (Amazon S3)",
                "Amazon Elastic Container Service (Amazon ECS)",
                "Amazon Elastic Block Store (Amazon EBS)",
                "Amazon Elastic File System (Amazon EFS)",
                "Instance Store"
            ],
            correctAnswer: [2, 4],
            explanation: `Correct options:

Amazon Elastic Block Store (Amazon EBS)

Amazon Elastic Block Store (Amazon EBS) is an easy to use, high-performance block storage service designed for use with Amazon Elastic Compute Cloud (Amazon EC2) for both throughput and transaction-intensive workloads at any scale. A broad range of workloads, such as relational and non-relational databases, enterprise applications, containerized applications, big data analytics engines, file systems, and media workflows are widely deployed on Amazon EBS.

Instance Store

An instance store provides temporary block-level storage for your EC2 instance. This storage is located on disks that are physically attached to the host computer. Instance store is ideal for the temporary storage of information that changes frequently, such as buffers, caches, scratch data, and other temporary content, or for data that is replicated across a fleet of instances, such as a load-balanced pool of web servers. Instance storage is temporary, data is lost if instance experiences failure or is terminated. Amazon EC2 instance store cannot be used for file sharing between instances.

Incorrect options:

Amazon Elastic File System (Amazon EFS) - Amazon Elastic File System (Amazon EFS) provides a simple, scalable, fully managed, elastic NFS file system. It is built to scale on-demand to petabytes without disrupting applications, growing and shrinking automatically as you add and remove files, eliminating the need to provision and manage capacity to accommodate growth. Amazon EFS is designed to provide massively parallel shared access to thousands of Amazon EC2 instances, enabling your applications to achieve high levels of aggregate throughput and IOPS with consistent low latencies.

Amazon Simple Storage Service (Amazon S3) - Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance. This means customers of all sizes and industries can use it to store and protect any amount of data for a range of use cases, such as websites, mobile applications, backup and restore, archive, enterprise applications, IoT devices, and big data analytics.

Amazon Elastic Container Service (Amazon ECS) - Amazon Elastic Container Service (Amazon ECS) is a highly scalable, high-performance container management service that supports Docker containers and allows you to easily run applications on a managed cluster of Amazon EC2 instances. This is not a storage service and has been added as a distractor.

References:

https://aws.amazon.com/ebs/

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html`
        },
        {
            id: "paper-24-003",
            domain: "",
            topic: "",
            type: "multiple-select",
            question: "Which of the following are the best practices when using AWS Organizations? (Select TWO)",
            options: [
                "Do not use AWS Organizations to automate AWS account creation",
                "Disable AWS CloudTrail on several accounts",
                "Never use tags for billing",
                "Create AWS accounts per department",
                "Restrict account privileges using Service Control Policies (SCP)"
            ],
            correctAnswer: [3, 4],
            explanation: `Correct options:

Create AWS accounts per department

Restrict account privileges using Service Control Policies (SCP)

AWS Organizations helps you centrally govern your environment as you grow and scale your workloads on AWS. Whether you are a growing startup or a large enterprise, AWS Organizations help you to centrally manage billing; control access, compliance, and security; and share resources across your AWS accounts.

Using AWS Organizations, you can automate account creation, create groups of accounts to reflect your business needs, and apply policies for these groups for governance. You can also simplify billing by setting up a single payment method for all of your AWS accounts. Through integrations with other AWS services, you can use AWS Organizations to define central configurations and resource sharing across accounts in your organization. AWS Organizations is available to all AWS customers at no additional charge.

You should create accounts per department based on regulatory restrictions (using Service Control Policies (SCP)) for better resource isolation, and to have separate per-account service limits.

AWS Organizations allows you to restrict what services and actions are allowed in your accounts. You can use the Service Control Policies (SCP) to apply permission guardrails on AWS Identity and Access Management (IAM) users and roles.

Incorrect options:

Never use tags for billing - You should use tags standards to categorize AWS resources for billing purposes.

Disable AWS CloudTrail on several accounts - You should enable AWS CloudTrail to monitor activity on all accounts for governance, compliance, risk, and auditing purposes.

Do not use AWS Organizations to automate AWS account creation - AWS Organizations helps you simplify IT operations by automating AWS account creation and management. The AWS Organizations APIs enable you to create new accounts programmatically and to add new accounts to a group. The policies attached to the group are automatically applied to the new account.

Reference:

https://aws.amazon.com/organizations/`
        },
        {
            id: "paper-24-004",
            domain: "",
            topic: "",
            type: "single",
            question: "Which AWS Route 53 routing policy would you use to route traffic to multiple resources and also choose how much traffic is routed to each resource?",
            options: [
                "Weighted routing",
                "Simple routing",
                "Latency-based routing",
                "Failover routing"
            ],
            correctAnswer: [0],
            explanation: `Correct option:

Weighted routing

Amazon Route 53 is a highly available and scalable cloud Domain Name System (DNS) web service. It is designed to give developers and businesses an extremely reliable and cost-effective way to route end users to Internet applications by translating names like www.example.com into the numeric IP addresses like 192.0.2.1 that computers use to connect to each other.

Weighted routing lets you associate multiple resources with a single domain name (example.com) or subdomain name (acme.example.com) and choose how much traffic is routed to each resource. This can be useful for a variety of purposes, including load balancing and testing new versions of software. To configure weighted routing, you create records that have the same name and type for each of your resources. You assign each record a relative weight that corresponds with how much traffic you want to send to each resource. Amazon Route 53 sends traffic to a resource based on the weight that you assign to the record as a proportion of the total weight for all records in the group.

Route 53 Routing Policy Overview:  via - https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html

Incorrect options:

Failover routing - This routing policy is used when you want to configure active-passive failover.

Simple routing - With simple routing, you typically route traffic to a single resource, for example, to a web server for your website.

latency-based routing - This routing policy is used when you have resources in multiple AWS Regions and you want to route traffic to the region that provides the best latency.

Reference:

https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html`
        },
        {
            id: "paper-24-005",
            domain: "",
            topic: "",
            type: "single",
            question: "A startup wants to provision an EC2 instance for the lowest possible cost for a long-term duration but needs to make sure that the instance would never be interrupted. As a Cloud Practitioner, which of the following options would you recommend?",
            options: [
                "EC2 Reserved Instance (RI)",
                "EC2 On-Demand Instance",
                "EC2 Dedicated Host",
                "EC2 Spot Instance"
            ],
            correctAnswer: [0],
            explanation: `Correct option:

EC2 Reserved Instance (RI)

An EC2 Reserved Instance (RI) provides you with significant savings (up to 75%) on your Amazon EC2 costs compared to On-Demand Instance pricing. A Reserved Instance (RI) is not a physical instance, but rather a billing discount applied to the use of On-Demand Instances in your account. You can purchase a Reserved Instance (RI) for a one-year or three-year commitment, with the three-year commitment offering a bigger discount. A reserved instance (RI) cannot be interrupted. So this is the correct option.

EC2 Pricing Options Overview:  via - https://aws.amazon.com/ec2/pricing/

Incorrect options:

EC2 On-Demand Instance - An EC2 On-Demand Instance is an instance that you use on-demand. You have full control over its lifecycle — you decide when to launch, stop, hibernate, start, reboot, or terminate it. There is no long-term commitment required when you purchase On-Demand Instances. There is no upfront payment and you pay only for the seconds that your On-Demand Instances are running. The price per second for running an On-Demand Instance is fixed. On-demand instances cannot be interrupted. However, On-demand instances are not as cost-effective as Reserved instances, so this option is not correct.

EC2 Spot Instance - An EC2 Spot Instance is an unused EC2 instance that is available for less than the On-Demand price. Because Spot Instances enable you to request unused EC2 instances at steep discounts (up to 90%), you can lower your Amazon EC2 costs significantly. Spot Instances are well-suited for data analysis, batch jobs, background processing, and optional tasks. These can be terminated at short notice, so these are not suitable for critical workloads that need to run at a specific point in time. So this option is not correct for the given use-case.

EC2 Dedicated Host - An Amazon EC2 Dedicated Host allows you to use your eligible software licenses from vendors such as Microsoft and Oracle on Amazon EC2 so that you get the flexibility and cost-effectiveness of using your licenses, but with the resiliency, simplicity, and elasticity of AWS. An Amazon EC2 Dedicated Host is a physical server fully dedicated for your use, so you can help address corporate compliance requirement. It is not cost-efficient compared to an On-Demand instance. So this option is not correct.

Reference:

https://aws.amazon.com/ec2/pricing/`
        },
        {
            id: "paper-24-006",
            domain: "",
            topic: "",
            type: "single",
            question: "A medical device company is looking for a durable and cost-effective way of storing their historic data. Due to compliance requirements, the data must be stored for 10 years. Which AWS Storage solution will you suggest?",
            options: [
                "AWS Storage Gateway",
                "Amazon S3 Glacier Flexible Retrieval",
                "Amazon S3 Glacier Deep Archive",
                "Amazon Elastic File System (Amazon EFS)"
            ],
            correctAnswer: [2],
            explanation: `Correct option:

Amazon S3 Glacier Deep Archive

Amazon S3 Glacier Deep Archive is Amazon S3’s lowest-cost storage class and supports long-term retention and digital preservation for data that may be accessed once or twice in a year. It is designed for customers — particularly those in highly-regulated industries, such as the Financial Services, Healthcare, and Public Sectors — that retain data sets for 7-10 years or longer to meet regulatory compliance requirements. Amazon S3 Glacier Deep Archive can also be used for backup and disaster recovery use cases. It has a retrieval time (first byte latency) of 12 to 48 hours.

Amazon S3 Glacier Deep Archive Overview:  via - https://aws.amazon.com/s3/storage-classes/

Incorrect options:

Amazon S3 Glacier Flexible Retrieval - Amazon S3 Glacier Flexible Retrieval (formerly S3 Glacier) is the ideal storage class for archiving data that does not require immediate access but needs the flexibility to retrieve large sets of data at no cost, such as backup or disaster recovery use cases. Amazon S3 Glacier Deep Archive is a better fit as it is more cost-optimal than Amazon S3 Glacier Flexible Retrieval for the given use-case.

AWS Storage Gateway - AWS Storage Gateway is a hybrid cloud storage service that gives you on-premises access to virtually unlimited cloud storage. All data transferred between the gateway and AWS storage is encrypted using SSL (for all three types of gateways - File, Volume and Tape Gateways). AWS Storage Gateway cannot be used for data archival.

Amazon Elastic File System (Amazon EFS) - Amazon Elastic File System (Amazon EFS) provides a simple, scalable, fully managed elastic NFS file system for use with AWS Cloud services and on-premises resources. It is built to scale on-demand to petabytes without disrupting applications, growing and shrinking automatically as you add and remove files, eliminating the need to provision and manage capacity to accommodate growth.

Reference:

https://aws.amazon.com/s3/storage-classes/`
        },
        {
            id: "paper-24-007",
            domain: "",
            topic: "",
            type: "single",
            question: "The DevOps team at an e-commerce company is trying to debug performance issues for its serverless application built using a microservices architecture. As a Cloud Practitioner, which AWS service would you recommend addressing this use-case?",
            options: [
                "AWS X-Ray",
                "AWS Trusted Advisor",
                "Amazon Pinpoint",
                "AWS CloudFormation"
            ],
            correctAnswer: [0],
            explanation: `Correct option:

AWS X-Ray

You can use AWS X-Ray to analyze and debug serverless and distributed applications such as those built using a microservices architecture. With X-Ray, you can understand how your application and its underlying services are performing to identify and troubleshoot the root cause of performance issues and errors.

How AWS X-Ray Works:  via - https://aws.amazon.com/xray/

Incorrect options:

AWS Trusted Advisor - AWS Trusted Advisor is an online tool that provides you real-time guidance to help you provision your resources following AWS best practices on cost optimization, security, fault tolerance, service limits and performance improvement. Whether establishing new workflows, developing applications, or as part of ongoing improvement, recommendations provided by Trusted Advisor regularly help keep your solutions provisioned optimally. Trusted Advisor cannot be used to debug performance issues for this serverless application built using a microservices architecture.

Amazon Pinpoint - Amazon Pinpoint allows marketers and developers to deliver customer-centric engagement experiences by capturing customer usage data to draw real-time insights. Pinpoint cannot be used to debug performance issues for this serverless application built using a microservices architecture.

AWS CloudFormation - AWS CloudFormation allows you to use programming languages or a simple text file to model and provision, in an automated and secure manner, all the resources needed for your applications across all Regions and accounts. Think infrastructure as code; think CloudFormation. CloudFormation cannot be used to debug performance issues for this serverless application built using a microservices architecture.

How Amazon Pinpoint Works:  via - https://aws.amazon.com/pinpoint/

Reference:

https://aws.amazon.com/xray/`
        },
        {
            id: "paper-24-008",
            domain: "",
            topic: "",
            type: "single",
            question: "A financial services enterprise plans to enable Multi-Factor Authentication (MFA) for its employees. For ease of travel, they prefer not to use any physical devices to implement Multi-Factor Authentication (MFA). Which of the below options is best suited for this use case?",
            options: [
                "Virtual Multi-Factor Authentication (MFA) device",
                "U2F security key",
                "Soft Token Multi-Factor Authentication (MFA) device",
                "Hardware Multi-Factor Authentication (MFA) device"
            ],
            correctAnswer: [0],
            explanation: `Correct option:

Virtual Multi-Factor Authentication (MFA) device

A software app that runs on a phone or other device and emulates a physical device. The device generates a six-digit numeric code based upon a time-synchronized one-time password algorithm. The user must type a valid code from the device on a second webpage during sign-in. Each virtual Multi-Factor Authentication (MFA) device assigned to a user must be unique. A user cannot type a code from another user's virtual Multi-Factor Authentication (MFA) device to authenticate.

Google Authenticator is an example of a Virtual Multi-Factor Authentication (MFA) device: 

Incorrect options:

U2F security key - A device that you plug into a USB port on your computer. U2F is an open authentication standard hosted by the FIDO Alliance. When you enable a U2F security key, you sign in by entering your credentials and then tapping the device instead of manually entering a code.

Hardware Multi-Factor Authentication (MFA) device - A hardware device that generates a six-digit numeric code based upon a time-synchronized one-time password algorithm. The user must type a valid code from the device on a second webpage during sign-in. Each Multi-Factor Authentication (MFA) device assigned to a user must be unique. A user cannot type a code from another user's device to be authenticated.

Soft Token Multi-Factor Authentication (MFA) device - This is a made-up option and has been added as a distractor.

Reference:

https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa.html`
        },
        {
            id: "paper-24-009",
            domain: "",
            topic: "",
            type: "multiple-select",
            question: "A company would like to optimize Amazon Elastic Compute Cloud (Amazon EC2) costs. Which of the following actions can help with this task? (Select TWO)",
            options: [
                "Set up Auto Scaling groups to align the number of instances with the demand",
                "Opt for a higher AWS Support plan",
                "Vertically scale the EC2 instances",
                "Purchase Amazon EC2 Reserved instances (RIs)",
                "Build its own servers"
            ],
            correctAnswer: [0, 3],
            explanation: `Correct options:

Set up Auto Scaling groups to align the number of instances with the demand

Purchase Amazon EC2 Reserved instances (RIs)

An Auto Scaling group contains a collection of Amazon EC2 instances that are treated as a logical grouping for automatic scaling and management. You can adjust its size to meet demand, either manually or by using automatic scaling.

AWS Auto Scaling can help you optimize your utilization and cost efficiencies when consuming AWS services so you only pay for the resources you need.

How AWS Auto Scaling works:  via - https://aws.amazon.com/autoscaling/

Amazon EC2 Reserved Instances (RI) provide a significant discount (up to 72%) compared to On-Demand pricing and provide a capacity reservation when used in a specific Availability Zone (AZ).

EC2 Pricing Options Overview:  via - https://aws.amazon.com/ec2/pricing/

Incorrect options:

Vertically scale the EC2 instances - Vertically scaling EC2 instances (increasing one computer performance by adding CPUs, memory, and storage) is limited and is way more expensive than scaling horizontally (adding more computers to the system).

Opt for a higher AWS Support plan - The AWS Support plans do not help with EC2 costs.

Build its own servers - Building your own servers is more expensive than using EC2 instances in the cloud. You're more likely to spend more money than saving money.

References:

https://docs.aws.amazon.com/autoscaling/ec2/userguide/AutoScalingGroup.html

https://aws.amazon.com/ec2/pricing/reserved-instances/

https://wa.aws.amazon.com/wat.concept.horizontal-scaling.en.html

https://aws.amazon.com/autoscaling/`
        },
        {
            id: "paper-24-010",
            domain: "",
            topic: "",
            type: "single",
            question: "Which AWS service can help you analyze your infrastructure to identify unattached or underutilized Amazon EBS Elastic Volumes?",
            options: [
                "AWS Trusted Advisor",
                "Amazon Inspector",
                "Amazon CloudWatch",
                "AWS Config"
            ],
            correctAnswer: [0],
            explanation: `Correct option:

AWS Trusted Advisor

AWS Trusted Advisor is an online tool that provides real-time guidance to help provision your resources following AWS best practices. Whether establishing new workflows, developing applications, or as part of ongoing improvement, recommendations provided by Trusted Advisor regularly help keep your solutions provisioned optimally. AWS Trusted Advisor analyzes your AWS environment and provides best practice recommendations in five categories: Cost Optimization, Performance, Security, Fault Tolerance, Service Limits.

AWS Trusted Advisor can check Amazon Elastic Block Store (Amazon EBS) volume configurations and warns when volumes appear to be underused. Charges begin when a volume is created. If a volume remains unattached or has very low write activity (excluding boot volumes) for a period of time, the volume is probably not being used.

How AWS Trusted Advisor Works:  via - https://aws.amazon.com/premiumsupport/technology/trusted-advisor/

Incorrect options:

AWS Config - AWS Config is a service that enables you to assess, audit, and evaluate the configurations of your AWS resources. Config continuously monitors and records your AWS resource configurations and allows you to automate the evaluation of recorded configurations against desired configurations. Think resource-specific change history, audit, and compliance; think Config. Its a configuration tracking service and not an infrastructure tracking service.

Amazon CloudWatch - Amazon CloudWatch is a monitoring and observability service built for DevOps engineers, developers, site reliability engineers (SREs), and IT managers. CloudWatch provides data and actionable insights to monitor applications, respond to system-wide performance changes, optimize resource utilization, and get a unified view of operational health. Amazon EBS emits notifications based on Amazon CloudWatch Events for a variety of volume, snapshot, and encryption status changes. With CloudWatch Events, you can establish rules that trigger programmatic actions in response to a change in volume, snapshot, or encryption key state (though not for underutilized volume usage).

Amazon Inspector - Amazon Inspector is an automated security assessment service that helps improve the security and compliance of applications deployed on your Amazon EC2 instances. Amazon Inspector automatically assesses applications for exposure, vulnerabilities, and deviations from best practices. Its a security assessment service and not an infrastructure tracking service.

References:

https://aws.amazon.com/premiumsupport/technology/trusted-advisor/best-practice-checklist/

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-cloud-watch-events.html`
        },
        {
            id: "paper-24-011",
            domain: "",
            topic: "",
            type: "single",
            question: "A multi-national corporation wants to get expert professional advice on migrating to AWS and managing their applications on AWS Cloud. Which of the following entities would you recommend for this engagement?",
            options: [
                "Concierge Support Team",
                "APN Consulting Partner",
                "APN Technology Partner",
                "AWS Trusted Advisor"
            ],
            correctAnswer: [1],
            explanation: `Correct option:

APN Consulting Partner

The AWS Partner Network (APN) is the global partner program for technology and consulting businesses that leverage Amazon Web Services to build solutions and services for customers.

APN Consulting Partners are professional services firms that help customers of all types and sizes design, architect, build, migrate, and manage their workloads and applications on AWS, accelerating their migration to AWS cloud.

APN Partner Types Overview:  via - https://aws.amazon.com/partners/

Incorrect options:

APN Technology Partner - APN Technology Partners provide hardware, connectivity services, or software solutions that are either hosted on or integrated with, the AWS Cloud. APN Technology Partners cannot help in migrating to AWS and managing applications on AWS Cloud.

AWS Trusted Advisor - AWS Trusted Advisor is an online tool that provides you real-time guidance to help you provision your resources following AWS best practices on cost optimization, security, fault tolerance, service limits, and performance improvement. Whether establishing new workflows, developing applications, or as part of ongoing improvement, recommendations provided by Trusted Advisor regularly help keep your solutions provisioned optimally. All AWS customers get access to the seven core Trusted Advisor checks to help increase the security and performance of the AWS environment. Trusted Advisor cannot be used to migrate to AWS and manage applications on AWS Cloud.

Concierge Support Team - The Concierge Support Team are AWS billing and account experts that specialize in working with enterprise accounts. They will quickly and efficiently assist you with your billing and account inquiries. The Concierge Support Team is only available for the Enterprise Support plan. Concierge Support Team cannot help in migrating to AWS and managing applications on AWS Cloud.

Reference:

https://aws.amazon.com/partners/`
        },
        {
            id: "paper-24-012",
            domain: "",
            topic: "",
            type: "single",
            question: "What is the primary benefit of deploying an Amazon Relational Database Service (Amazon RDS) database in a Read Replica configuration?",
            options: [
                "Read Replica enhances database availability",
                "Read Replica improves database scalability",
                "Read Replica reduces database usage costs",
                "Read Replica protects the database from a regional failure"
            ],
            correctAnswer: [1],
            explanation: `Correct option:

Read Replica improves database scalability

Amazon Relational Database Service (Amazon RDS) makes it easy to set up, operate, and scale a relational database in the cloud. Read Replicas allow you to create read-only copies that are synchronized with your master database. Read Replicas are used for improved read performance. You can also place your read replica in a different AWS Region closer to your users for better performance. Read Replicas are an example of horizontal scaling of resources.

Read Replica Overview:  via - https://aws.amazon.com/rds/features/multi-az/

Exam Alert:

Please review the differences between Amazon RDS Multi-AZ, Multi-Region and Read Replica deployments for RDS:  via - https://aws.amazon.com/rds/features/multi-az/

Incorrect options:

Read Replica enhances database availability - Amazon RDS Multi-AZ deployments provide enhanced availability and durability for RDS database (DB) instances, making them a natural fit for production database workloads. When you provision a Multi-AZ DB Instance, Amazon RDS automatically creates a primary DB Instance and synchronously replicates the data to a standby instance in a different Availability Zone (AZ). Read Replica cannot enhance database availability.

Read Replica protects the database from a regional failure - You need to use RDS in Multi-Region deployment configuration to protect from a regional failure. Read Replica cannot protect from a regional failure.

Read Replica reduces database usage costs - Amazon Relational Database Service (Amazon RDS) with Read Replicas increases the database costs compared to the standard deployment. So this option is incorrect.

Reference:

https://aws.amazon.com/rds/features/multi-az/`
        },
        {
            id: "paper-24-013",
            domain: "",
            topic: "",
            type: "single",
            question: "An organization maintains a separate Virtual Private Cloud (VPC) for each of its business units. Two units need to privately share data. Which is the most optimal way of privately sharing data between the two VPCs?",
            options: [
                "AWS Direct Connect",
                "AWS Site-to-Site VPN",
                "VPC peering connection",
                "VPC Endpoint"
            ],
            correctAnswer: [2],
            explanation: `Correct option:

VPC peering connection

A VPC peering connection is a networking connection between two VPCs that enables you to route traffic between them privately. Instances in either VPC can communicate with each other as if they are within the same network. You can create a VPC peering connection between your VPCs, with a VPC in another AWS account, or with a VPC in a different AWS Region.

VPC Peering Overview:  via - https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html

Incorrect options:

AWS Site-to-Site VPN - AWS Site-to-Site VPN creates a secure connection between your data center or branch office and your AWS cloud resources. This connection goes over the public internet. Site to Site VPN cannot be used to interconnect VPCs.

AWS Direct Connect - AWS Direct Connect creates a dedicated private connection from a remote network to your VPC. This is a private connection and does not use the public internet. Takes at least a month to establish this connection. AWS Direct Connect cannot be used to interconnect VPCs.

VPC Endpoint - A VPC endpoint enables you to privately connect your VPC to supported AWS services and VPC endpoint services powered by AWS PrivateLink without requiring an internet gateway, NAT device, VPN connection, or AWS Direct Connect connection. You cannot connect two VPCs using a VPC endpoint.

Reference:

https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html`
        },
        {
            id: "paper-24-014",
            domain: "",
            topic: "",
            type: "single",
            question: "Which AWS service can be used to automate code deployment to Amazon Elastic Compute Cloud (Amazon EC2) instances as well as on-premises instances?",
            options: [
                "AWS CloudFormation",
                "AWS CodePipeline",
                "AWS CodeDeploy",
                "AWS CodeCommit"
            ],
            correctAnswer: [2],
            explanation: `Correct option:

AWS CodeDeploy

AWS CodeDeploy is a service that automates code deployments to any instance, including Amazon EC2 instances and instances running on-premises. AWS CodeDeploy makes it easier for you to rapidly release new features, helps you avoid downtime during deployment, and handles the complexity of updating your applications. You can use AWS CodeDeploy to automate deployments, eliminating the need for error-prone manual operations, and the service scales with your infrastructure so you can easily deploy to one instance or thousands.

Incorrect options:

AWS CodeCommit - AWS CodeCommit is a fully-managed source control service that hosts secure Git-based repositories. It makes it easy for teams to collaborate on code in a secure and highly scalable ecosystem. CodeCommit eliminates the need to operate your own source control system or worry about scaling its infrastructure. It cannot be used to automate code deployment.

AWS CloudFormation - AWS CloudFormation allows you to use programming languages or a simple text file to model and provision, in an automated and secure manner, all the resources needed for your applications across all regions and accounts. It cannot be used to automate code deployment.

AWS CodePipeline - AWS CodePipeline is a continuous delivery service that enables you to model, visualize, and automate the steps required to release your software. With AWS CodePipeline, you model the full release process for building your code, deploying to pre-production environments, testing your application and releasing it to production.

AWS CodePipeline integrates with AWS services such as AWS CodeCommit, Amazon S3, AWS CodeBuild, AWS CodeDeploy, AWS Elastic Beanstalk, AWS CloudFormation, AWS OpsWorks, Amazon ECS, and AWS Lambda. To further elucidate, CodePipeline cannot by itself deploy the code, it can integrate with CodeDeploy for the actual deployment.

How AWS CodePipeline Works:  via - https://aws.amazon.com/codepipeline/

Reference:

https://aws.amazon.com/codedeploy/`
        },
        {
            id: "paper-24-015",
            domain: "",
            topic: "",
            type: "multiple-select",
            question: "An IT company is on a cost-optimization spree and wants to identify all Amazon Elastic Compute Cloud (Amazon EC2) instances that are under-utilized. Which AWS services can be used off-the-shelf to address this use-case without needing any manual configurations? (Select two)",
            options: [
                "AWS Cost Explorer",
                "Amazon CloudWatch",
                "AWS Trusted Advisor",
                "AWS Cost & Usage Report (AWS CUR)",
                "AWS Budgets"
            ],
            correctAnswer: [0, 2],
            explanation: `Correct option:

AWS Trusted Advisor

AWS Trusted Advisor is an online tool that provides real-time guidance to help provision your resources following AWS best practices. Whether establishing new workflows, developing applications, or as part of ongoing improvement, recommendations provided by Trusted Advisor regularly help keep your solutions provisioned optimally. AWS Trusted Advisor analyzes your AWS environment and provides best practice recommendations in five categories: Cost Optimization, Performance, Security, Fault Tolerance, Service Limits.

AWS Trusted Advisor checks the Amazon Elastic Compute Cloud (Amazon EC2) instances that were running at any time during the last 14 days and alerts you if the daily CPU utilization was 10% or less and network I/O was 5 MB or less on 4 or more days.

How AWS Trusted Advisor Works:  via - https://aws.amazon.com/premiumsupport/technology/trusted-advisor/

How AWS Trusted Advisor identifies low utilization Amazon EC2 instances:  via - https://aws.amazon.com/premiumsupport/technology/trusted-advisor/best-practice-checklist/#Cost_Optimization

AWS Cost Explorer

AWS Cost Explorer has an easy-to-use interface that lets you visualize, understand, and manage your AWS costs and usage over time. AWS Cost Explorer includes a default report that helps you visualize the costs and usage associated with your top five cost-accruing AWS services, and gives you a detailed breakdown of all services in the table view. The reports let you adjust the time range to view historical data going back up to twelve months to gain an understanding of your cost trends.

The rightsizing recommendations feature in AWS Cost Explorer helps you identify cost-saving opportunities by downsizing or terminating Amazon EC2 instances. You can see all of your underutilized Amazon EC2 instances across member accounts in a single view to immediately identify how much you can save.

Incorrect options:

AWS Cost & Usage Report (AWS CUR) - The AWS Cost & Usage Report (AWS CUR) contains the most comprehensive set of cost and usage data available. You can use AWS Cost & Usage Report (AWS CUR) to publish your AWS billing reports to an Amazon Simple Storage Service (Amazon S3) bucket that you own. You can receive reports that break down your costs by the hour or month, by product or product resource, or by tags that you define yourself. AWS Cost & Usage Report (AWS CUR) cannot be used to identify under-utilized Amazon EC2 instances.

Amazon CloudWatch - Amazon CloudWatch can be used to create alarm to monitor your estimated charges. When you enable the monitoring of estimated charges for your AWS account, the estimated charges are calculated and sent several times daily to CloudWatch as metric data. You can choose to receive alerts by email when charges have exceeded a certain threshold. Think resource performance monitoring, events, and alerts; think CloudWatch. Amazon CloudWatch cannot be used to identify under-utilized Amazon EC2 instances without manually configuring an alarm with the appropriate threshold to track the Amazon EC2 utilization, so this option is incorrect.

AWS Budgets - AWS Budgets gives the ability to set custom budgets that alert you when your costs or usage exceed (or are forecasted to exceed) your budgeted amount. You can also use AWS Budgets to set reservation utilization or coverage targets and receive alerts when your utilization drops below the threshold you define. AWS Budgets can be created at the monthly, quarterly, or yearly level, and you can customize the start and end dates. You can further refine your budget to track costs associated with multiple dimensions, such as AWS service, linked account, tag, and others. AWS Budgets cannot be used to identify under-utilized EC2 instances without manually configuring coverage targets, so this option is incorrect.

References:

https://aws.amazon.com/premiumsupport/technology/trusted-advisor/best-practice-checklist/#Cost_Optimization

https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-rightsizing.html`
        },
        {
            id: "paper-24-016",
            domain: "",
            topic: "",
            type: "single",
            question: "What is the primary benefit of deploying an Amazon RDS Multi-AZ database with one standby?",
            options: [
                "Amazon RDS Multi-AZ enhances database availability",
                "Amazon RDS Multi-AZ protects the database from a regional failure",
                "Amazon RDS Multi-AZ improves database performance for read-heavy workloads",
                "Amazon RDS Multi-AZ reduces database usage costs"
            ],
            correctAnswer: [0],
            explanation: `Correct option:

Amazon RDS Multi-AZ enhances database availability

Amazon RDS Multi-AZ deployments provide enhanced availability and durability forAmazon Relational Database Service (Amazon RDS) instances, making them a natural fit for production database workloads. When you provision an Amazon RDS Multi-AZ Instance with one standby, Amazon RDS automatically creates a primary DB Instance and synchronously replicates the data to a standby instance in a different Availability Zone (AZ).

In case of an infrastructure failure, Amazon RDS performs an automatic failover to the standby so that you can resume database operations as soon as the failover is complete.

How Amazon RDS Multi-AZ Works:  via - https://aws.amazon.com/rds/features/multi-az/

Exam Alert:

Please review the differences between Multi-AZ, Multi-Region and Read Replica deployments for RDS:  via - https://aws.amazon.com/rds/features/multi-az/

Incorrect options:

Amazon RDS Multi-AZ improves database performance for read-heavy workloads - Amazon RDS Multi-AZ with one standby does not allow read operations from the standby. Read Replicas allow you to create read-only copies that are synchronized with your master database. Read Replicas are used for improved read performance. Therefore, this option is incorrect.

Amazon RDS Multi-AZ protects the database from a regional failure - You need to use RDS in Multi-Region deployment configuration to protect from a regional failure. Amazon RDS Multi-AZ cannot protect from a regional failure.

Amazon RDS Multi-AZ reduces database usage costs - Amazon RDS Multi-AZ increases the database costs compared to the standard deployment. So this option is incorrect.

Reference:

https://aws.amazon.com/rds/features/multi-az/`
        },
        {
            id: "paper-24-017",
            domain: "",
            topic: "",
            type: "single",
            question: "A company would like to separate cost for AWS services by the department for cost allocation. Which of the following is the simplest way to achieve this task?",
            options: [
                "Create different virtual private cloud (VPCs) for different departments",
                "Create different accounts for different departments",
                "Create one account for all departments and share this account",
                "Create tags for each department"
            ],
            correctAnswer: [3],
            explanation: `Correct option:

Create tags for each department

You can assign metadata to your AWS resources in the form of tags. Each tag is a label consisting of a user-defined key and value. Tags can help you manage, identify, organize, search for, and filter resources. You can create tags to categorize resources by purpose, owner, environment, or other criteria.

Typically, you use business tags such as cost center/business unit, customer, or project to associate AWS costs with traditional cost-allocation dimensions. But a cost allocation report can include any tag. This lets you associate costs with technical or security dimensions, such as specific applications, environments, or compliance programs.

Example of tagging for cost optimization:  via - https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html

Incorrect options:

Create different accounts for different departments - Users can belong to several departments. Therefore, having different accounts for different departments would imply some users having several accounts. This is contrary to the security best practice: one physical user = one account. Also, it is much simpler to set up tags for tracking costs for each department.

Create one account for all departments and share this account - Sharing accounts is not a security best practice, and is not recommended.

Create different virtual private cloud (VPCs) for different departments - Creating different VPCs will not help with separating costs.

Reference:

https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html`
        },
        {
            id: "paper-24-018",
            domain: "",
            topic: "",
            type: "single",
            question: "Which benefit of Cloud Computing allows AWS to offer lower pay-as-you-go prices as usage from hundreds of thousands of customers is aggregated in the cloud?",
            options: [
                "Trade capital expense for variable expense",
                "Go global in minutes",
                "Massive economies of scale",
                "Increased speed and agility"
            ],
            correctAnswer: [2],
            explanation: `Correct option:

Massive economies of scale

Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing. Instead of buying, owning, and maintaining physical data centers and servers, you can access technology services, such as computing power, storage, and databases, on an as-needed basis.

By using cloud computing, you can achieve a lower variable cost than you can get on your own. Because usage from hundreds of thousands of customers is aggregated in the cloud, providers such as AWS can achieve higher economies of scale, which translates into lower pay-as-you-go prices.

Exam Alert:

Please check out the following six advantages of Cloud Computing. You would certainly be asked questions on the advantages of Cloud Computing compared to a traditional on-premises setup:  via - https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html

Incorrect options:

Trade capital expense for variable expense - Instead of having to invest heavily in data centers and servers before you know how you’re going to use them, you can pay only when you consume computing resources, and pay only for how much you consume.

Increased speed and agility - In a cloud computing environment, new IT resources are only a click away, which means that you reduce the time to make those resources available to your developers from weeks to just minutes. This results in a dramatic increase in agility for the organization since the cost and time it takes to experiment and develop is significantly lower.

Go global in minutes - Easily deploy your application in multiple regions around the world with just a few clicks. This means you can provide lower latency and a better experience for your customers at minimal cost.

Although these three options are also benefits of Cloud Computing, it is the massive economies of scale that allow AWS to offer lower pay-as-you-go prices as usage from hundreds of thousands of customers is aggregated in the cloud.

References:

https://aws.amazon.com/what-is-cloud-computing/

https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html`
        },
        {
            id: "paper-24-019",
            domain: "",
            topic: "",
            type: "multiple-select",
            question: "An IT company wants to run a log backup process every Monday at 2 AM. The usual runtime of the process is 5 minutes. As a Cloud Practitioner, which AWS services would you recommend to build a serverless solution for this use-case? (Select two)",
            options: [
                "AWS Step Function",
                "Amazon Eventbridge",
                "AWS Lambda",
                "Amazon Elastic Compute Cloud (Amazon EC2)",
                "AWS Systems Manager"
            ],
            correctAnswer: [1, 2],
            explanation: `Correct option:

Amazon Eventbridge - Amazon EventBridge is a service that provides real-time access to changes in data in AWS services, your own applications, and software as a service (SaaS) applications without writing code. Amazon EventBridge Scheduler is a serverless task scheduler that simplifies creating, executing, and managing millions of schedules across AWS services without provisioning or managing underlying infrastructure.

Amazon Eventbridge Scheduler:  via - https://aws.amazon.com/eventbridge/

AWS Lambda - AWS Lambda lets you run code without provisioning or managing servers. You pay only for the compute time you consume. The lambda has a maximum execution time of 15 minutes, so it can be used to run this log backup process.

To build the solution for the given use-case, you can leverage the Amazon EventBridge Scheduler to trigger on a schedule. You can then set the Lambda as the target for this rule.

Incorrect options:

AWS Systems Manager - AWS Systems Manager gives you visibility and control of your infrastructure on AWS. Systems Manager provides a unified user interface so you can view operational data from multiple AWS services and allows you to automate operational tasks across your AWS resources. With Systems Manager, you can group resources, like Amazon EC2 instances, Amazon S3 buckets, or Amazon RDS instances, by application, view operational data for monitoring and troubleshooting, and take action on your groups of resources. Secrets Manager cannot be used to run a process on a schedule.

Amazon Elastic Compute Cloud (Amazon EC2) - Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides secure, resizable compute capacity in the cloud with support for per-second billing. It is the easiest way to provision servers on AWS Cloud and access the underlying OS. As the company wants a serverless solution, so this option is ruled out.

AWS Step Function - AWS Step Function lets you coordinate multiple AWS services into serverless workflows. You can design and run workflows that stitch together services such as AWS Lambda, AWS Glue and Amazon SageMaker. Step Function cannot be used to run a process on a schedule.

Reference:

https://aws.amazon.com/eventbridge/`
        },
        {
            id: "paper-24-020",
            domain: "",
            topic: "",
            type: "single",
            question: "A Cloud Practitioner would like to deploy identical resources across all AWS regions and accounts using templates while estimating costs. Which AWS service can assist with this task?",
            options: [
                "AWS CloudFormation",
                "AWS Directory Service for Microsoft Active Directory (AWS Managed Microsoft AD)",
                "Amazon LightSail",
                "AWS CodeDeploy"
            ],
            correctAnswer: [0],
            explanation: `Correct option:

AWS CloudFormation

AWS CloudFormation gives developers and systems administrators an easy way to create and manage a collection of related AWS resources, provisioning and updating them in an orderly and predictable fashion.

You can use the AWS CloudFormation sample templates or create your own templates to describe your AWS resources, and any associated dependencies or runtime parameters, required to run your application. This provides a single source of truth for all your resources and helps you to standardize infrastructure components used across your organization, enabling configuration compliance and faster troubleshooting.

AWS CloudFormation templates allow you to estimate the cost of your resources.

How AWS CloudFormation works:  via - https://aws.amazon.com/cloudformation/

Incorrect options:

AWS Directory Service for Microsoft Active Directory (AWS Managed Microsoft AD) - AWS Directory Service for Microsoft Active Directory (AWS Managed Microsoft AD), also known as AWS Managed Microsoft AD, enables your directory-aware workloads and AWS resources to use managed Active Directory in the AWS Cloud. It is not used to deploy resources.

Amazon LightSail - Amazon Lightsail is designed to be the easiest way to launch and manage a virtual private server with AWS. It is not best suited when deploying more complex resources, while AWS CloudFormation can.

AWS CodeDeploy - AWS CodeDeploy is a service that automates code deployments to any instance, including Amazon EC2 instances and instances running on-premises. Unlike AWS CloudFormation, it does not deal with infrastructure configuration and orchestration.

Reference:

https://aws.amazon.com/cloudformation/

`
        },
        {
            id: "paper-24-021",
            domain: "",
            topic: "",
            type: "single",
            question: "Which of the following is a container service of AWS?",
            options: [
                "Amazon SageMaker",
                "AWS Elastic Beanstalk",
                "Amazon Simple Notification Service (Amazon SNS)",
                "AWS Fargate"
            ],
            correctAnswer: [3],
            explanation: `Correct option:

AWS Fargate

AWS Fargate is a serverless compute engine for containers that works with both Amazon Elastic Container Service (ECS) and Amazon Elastic Kubernetes Service (EKS). Fargate makes it easy for you to focus on building your applications. Fargate removes the need to provision and manage servers, lets you specify and pay for resources per application, and improves security through application isolation by design.

How AWS Fargate Works:  via - https://aws.amazon.com/fargate/

Incorrect options:

AWS Elastic Beanstalk - AWS Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications and services. You simply upload your code and Elastic Beanstalk automatically handles the deployment, from capacity provisioning, load balancing, auto-scaling to application health monitoring. Beanstalk provisions servers so it is not a serverless service.

Amazon Simple Notification Service (Amazon SNS) - Amazon Simple Notification Service (Amazon SNS) is a highly available, durable, secure, fully managed pub/sub messaging service that enables you to decouple microservices, distributed systems, and serverless applications.

Amazon SageMaker - Amazon SageMaker is a fully managed service that provides every developer and data scientist with the ability to build, train, and deploy machine learning (ML) models quickly. SageMaker removes the heavy lifting from each step of the machine learning process to make it easier to develop high-quality models.

Reference:

https://aws.amazon.com/fargate/`
        },
        {
            id: "paper-24-022",
            domain: "",
            topic: "",
            type: "single",
            question: "Which of the following statements is the MOST accurate when describing AWS Elastic Beanstalk?",
            options: [
                "It is a Platform as a Service (PaaS) that allows you to model and provision resources needed for an application",
                "It is a Platform as a Service (PaaS) that allows you to deploy and scale web applications and services",
                "It is an Infrastructure as a Service (IaaS) that allows you to deploy and scale web applications and services",
                "It is an Infrastructure as Code (IaC) that allows you to model and provision resources needed for an application"
            ],
            correctAnswer: [1],
            explanation: `Correct option:

It is a Platform as a Service (PaaS) that allows you to deploy and scale web applications and services

AWS Elastic Beanstalk makes it even easier for developers to quickly deploy and manage applications in the AWS Cloud. Developers simply upload their applications, and AWS Elastic Beanstalk automatically handles the deployment details of capacity provisioning, load balancing, auto-scaling, and application health monitoring.

It is a Platform as a Service (PaaS) as you only manage the applications and the data.

Please review this overview of the types of Cloud Computing:  via - https://aws.amazon.com/types-of-cloud-computing/

Incorrect options:

It is an Infrastructure as Code (IaC) that allows you to model and provision resources needed for an application - This is the definition of AWS CloudFormation. AWS CloudFormation gives developers and systems administrators an easy way to create and manage a collection of related AWS resources, provisioning and updating them in an orderly and predictable fashion. You can use the AWS CloudFormation sample templates or create your own templates to describe your AWS resources, and any associated dependencies or runtime parameters, required to run your application.

It is a Platform as a Service (PaaS) that allows you to model and provision resources needed for an application - AWS Elastic Beanstalk is a Platform as a Service (PaaS). However, the service that allows you to model and provision resources needed for an application is AWS CloudFormation.

It is an Infrastructure as a Service (IaaS) that allows you to deploy and scale web applications and services - AWS Elastic Beanstalk allows you to deploy and scale web applications and services, but it is not an Infrastructure as a Service (IaaS). With AWS Elastic Beanstalk, you do not manage the runtime, the middleware, and the operating system.

Reference:

https://aws.amazon.com/elasticbeanstalk/`
        },
        {
            id: "paper-24-023",
            domain: "",
            topic: "",
            type: "single",
            question: "Which AWS service would you choose for a data processing project that needs a schemaless database?",
            options: [
                "Amazon Relational Database Service (Amazon RDS)",
                "Amazon Aurora",
                "Amazon DynamoDB",
                "Amazon RedShift"
            ],
            correctAnswer: [2],
            explanation: `Correct option:

Amazon DynamoDB

Amazon DynamoDB is a key-value and document database that delivers single-digit millisecond performance at any scale. It's a fully managed, multi-Region, multi-master, durable database with built-in security, backup and restore, and in-memory caching for internet-scale applications. DynamoDB is schemaless. DynamoDB can manage structured or semistructured data, including JSON documents.

Incorrect options:

Amazon RedShift - Amazon Redshift is a fully-managed petabyte-scale cloud-based data warehouse product designed for large scale data set storage and analysis. Amazon Redshift requires a well-defined schema.

Amazon Aurora - Amazon Aurora is an AWS service for relational databases. Aurora requires a well-defined schema.

Amazon Relational Database Service (Amazon RDS) - Amazon Relational Database Service (Amazon RDS) is an AWS service for relational databases. RDS requires a well-defined schema.

References:

https://aws.amazon.com/dynamodb/features/

https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SQLtoNoSQL.WhyDynamoDB.html`
        },
        {
            id: "paper-24-024",
            domain: "",
            topic: "",
            type: "multiple-select",
            question: "Which of the following are correct statements regarding the AWS Shared Responsibility Model? (Select two)",
            options: [
                "For a service like Amazon EC2, that falls under Infrastructure as a Service (IaaS), AWS is responsible for maintaining guest operating system",
                "Configuration Management is the responsibility of the customer",
                "AWS is responsible for Security 'of' the Cloud",
                "For abstracted services like Amazon S3, AWS operates the infrastructure layer, the operating system, and platforms",
                "AWS is responsible for training AWS and customer employees on AWS products and services"
            ],
            correctAnswer: [2, 3],
            explanation: `Correct options:

Security and Compliance is a shared responsibility between AWS and the customer. This shared model can help relieve the customer’s operational burden as AWS operates, manages and controls the components from the host operating system and virtualization layer down to the physical security of the facilities in which the service operates.

AWS is responsible for Security 'of' the Cloud

AWS is responsible for protecting the infrastructure that runs all of the services offered in the AWS Cloud. This infrastructure is composed of the hardware, software, networking, and facilities that run AWS Cloud services.

For abstracted services like Amazon S3, AWS operates the infrastructure layer, the operating system, and platforms

For abstracted services, such as Amazon S3 and Amazon DynamoDB, AWS operates the infrastructure layer, the operating system, and platforms, and customers access the endpoints to store and retrieve data.

AWS Shared Responsibility Model Overview:  via - https://aws.amazon.com/compliance/shared-responsibility-model/

Incorrect options:

For a service like Amazon EC2, that falls under Infrastructure as a Service (IaaS), AWS is responsible for maintaining guest operating system - A service such as Amazon Elastic Compute Cloud (Amazon EC2) is categorized as Infrastructure as a Service (IaaS) and, as such, requires the customer to perform all of the necessary security configuration and management tasks. Customers are responsible for the management of the guest operating system (including updates and security patches), any application software or utilities installed by the customer on the instances, and the configuration of the AWS-provided firewall (called a security group) on each instance.

Configuration Management is the responsibility of the customer - Configuration management is a shared responsibility. AWS maintains the configuration of its infrastructure devices, but a customer is responsible for configuring their own guest operating systems, databases, and applications.

AWS is responsible for training AWS and customer employees on AWS products and services - Awareness & Training is also a shared responsibility. AWS trains AWS employees, but a customer must train their own employees.

Reference:

https://aws.amazon.com/compliance/shared-responsibility-model/`
        },
        {
            id: "paper-24-025",
            domain: "",
            topic: "",
            type: "single",
            question: "What is the primary use case for Amazon GuardDuty?",
            options: [
                "Protecting web applications from common exploits and vulnerabilities such as SQL injection",
                "Detecting malicious activity and threats in your AWS accounts and workloads",
                "Encrypting data in transit between AWS services using TLS certificates.",
                "Enforcing secure communication between VPCs using network traffic filtering"
            ],
            correctAnswer: [1],
            explanation: `Correct option:

Detecting malicious activity and threats in your AWS accounts and workloads

Amazon GuardDuty is a managed threat detection service that identifies potential security risks by analyzing logs, such as AWS CloudTrail, VPC Flow Logs, and DNS query logs. It helps organizations detect suspicious or malicious activity in their AWS environments.

Amazon GuardDuty Overview:  via - https://aws.amazon.com/guardduty/

Incorrect options:

Enforcing secure communication between VPCs using network traffic filtering - This is a feature provided by AWS Network Firewall or Security Groups, which allow you to control network traffic into and out of your VPCs. GuardDuty detects malicious activities but does not enforce network traffic filtering.

Encrypting data in transit between AWS services using TLS certificates. - AWS Certificate Manager (ACM) or AWS Key Management Service (KMS) is responsible for managing encryption and TLS certificates. GuardDuty does not handle encryption but focuses on identifying potential security threats.

Protecting web applications from common exploits and vulnerabilities such as SQL injection - This is the primary use case for AWS Web Application Firewall (WAF), which protects web applications from vulnerabilities like SQL injection and cross-site scripting. GuardDuty detects threats but does not directly protect applications.

Reference:

https://aws.amazon.com/guardduty/`
        },
        {
            id: "paper-24-026",
            domain: "",
            topic: "",
            type: "multiple-select",
            question: "Which of the following are the advantages of using the AWS Cloud? (Select TWO)",
            options: [
                "AWS is responsible for security in the cloud",
                "Stop guessing about capacity",
                "Limited scaling",
                "Increase speed and agility",
                "Trade operational expense for capital expense"
            ],
            correctAnswer: [1, 3],
            explanation: `Correct options:

Increase speed and agility

Stop guessing about capacity

Exam Alert:

Please check out the following six advantages of Cloud Computing. You would certainly be asked questions on the advantages of Cloud Computing compared to a traditional on-premises setup:

 via - https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html

Incorrect options:

Limited scaling - Scaling is not limited in the cloud. You can access as much or as little capacity as you need, and scale up and down as required with only a few minutes’ notice.

AWS is responsible for security in the cloud - AWS is responsible for the security OF the cloud, which means AWS is responsible for protecting the infrastructure that runs all the services offered in the AWS Cloud.

Trade operational expense for capital expense - In the cloud, you trade capital expense (CAPEX) for the operational expense (OPEX). Instead of having to invest heavily in data centers and servers before you know how you’re going to use them, you can pay only when you consume computing resources, and pay only for how much you consume.

Reference:

https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html`
        },
        {
            id: "paper-24-027",
            domain: "",
            topic: "",
            type: "single",
            question: "Which policy describes prohibited uses of the web services offered by Amazon Web Services?",
            options: [
                "AWS Acceptable Use Policy",
                "AWS Trusted Advisor",
                "AWS Fair Use Policy",
                "AWS Applicable Use Policy"],
            correctAnswer: [0],
            explanation: `Correct option:

AWS Acceptable Use Policy

The Acceptable Use Policy describes prohibited uses of the web services offered by Amazon Web Services, Inc. and its affiliates (the “Services”) and the website located at http://aws.amazon.com (the “AWS Site”). This policy is present at https://aws.amazon.com/aup/ and is updated on a need basis by AWS.

Incorrect options:

AWS Trusted Advisor - AWS Trusted Advisor is an online tool that provides you real-time guidance to help you provision your resources following AWS best practices on cost optimization, security, fault tolerance, service limits, and performance improvement. Whether establishing new workflows, developing applications, or as part of ongoing improvement, recommendations provided by Trusted Advisor regularly help keep your solutions provisioned optimally. Trusted Advisor does not describe prohibited uses of the web services offered by Amazon Web Services.

AWS Fair Use Policy - This is a made-up option and has been added as a distractor.

AWS Applicable Use Policy - This is a made-up option and has been added as a distractor.

Reference:

https://aws.amazon.com/aup/`
        },
        {
            id: "paper-24-028",
            domain: "",
            topic: "",
            type: "single",
            question: "A cyber-security agency uses AWS Cloud and wants to carry out security assessments on its own AWS infrastructure without any prior approval from AWS. Which of the following describes/facilitates this practice?",
            options: ["Amazon Inspector",

                "AWS Secrets Manager",
                "Penetration Testing",
                "Network Stress Testing"],
            correctAnswer: [2],
            explanation: `Correct option:

Penetration Testing

AWS customers can carry out security assessments or penetration tests against their AWS infrastructure without prior approval for few common AWS services. Customers are not permitted to conduct any security assessments of AWS infrastructure, or the AWS services themselves.

Incorrect options:

Network Stress Testing - AWS considers "network stress test" to be when a test sends a large volume of legitimate or test traffic to a specific intended target application. The endpoint and infrastructure are expected to be able to handle this traffic.

Amazon Inspector - Amazon Inspector is an automated, security assessment service that helps you check for unintended network accessibility of your Amazon EC2 instances and for vulnerabilities on those Amazon EC2 instances. Amazon Inspector assessments are offered to you as pre-defined rules packages mapped to common security best practices and vulnerability definitions.

AWS Secrets Manager - AWS Secrets Manager helps you protect secrets needed to access your applications, services, and IT resources. The service enables you to easily rotate, manage, and retrieve database credentials, API keys, and other secrets throughout their lifecycle. Users and applications retrieve secrets with a call to AWS Secrets Manager APIs, eliminating the need to hardcode sensitive information in plain text.

Reference:

https://aws.amazon.com/security/penetration-testing/`
        },
        {
            id: "paper-24-029",
            domain: "",
            topic: "",
            type: "single",
            question: "A gaming company is looking at a technology/service that can deliver a consistent low-latency gameplay to ensure a great user experience for end-users in various locations. Which AWS technology/ service will provide the necessary low - latency access to the end - users ? ",
            options: ["AWS Edge Locations",
                "AWS Local Zones",
                "AWS Direct Connect",
                "AWS Wavelength"],
            correctAnswer: [1],
            explanation: `AWS Local Zones

AWS Local Zones allow you to use select AWS services, like compute and storage services, closer to more end-users, providing them very low latency access to the applications running locally. AWS Local Zones are also connected to the parent region via Amazon’s redundant and very high bandwidth private network, giving applications running in AWS Local Zones fast, secure, and seamless access to the rest of AWS services.

You should use AWS Local Zones to deploy workloads closer to your end-users for low-latency requirements. AWS Local Zones have their connection to the internet and support AWS Direct Connect, so resources created in the Local Zone can serve local end-users with very low-latency communications.

Various AWS services such as Amazon Elastic Compute Cloud (EC2), Amazon Virtual Private Cloud (VPC), Amazon Elastic Block Store (EBS), Amazon FSx, Amazon Elastic Load Balancing, Amazon EMR, Amazon ElastiCache, and Amazon Relational Database Service (RDS) are available locally in the AWS Local Zones. You can also use services that orchestrate or work with local services such as Amazon EC2 Auto Scaling, Amazon EKS clusters, Amazon ECS clusters, Amazon EC2 Systems Manager, Amazon CloudWatch, AWS CloudTrail, and AWS CloudFormation. AWS Local Zones also provide a high-bandwidth, secure connection to the AWS Region, allowing you to seamlessly connect to the full range of services in the AWS Region through the same APIs and toolsets.

Incorrect options:

AWS Edge Locations - An AWS Edge location is a site that CloudFront uses to cache copies of the content for faster delivery to users at any location.

AWS Wavelength - AWS Wavelength extends the AWS cloud to a global network of 5G edge locations to enable developers to innovate and build a whole new class of applications that require ultra-low latency. Wavelength Zones provide a high-bandwidth, secure connection to the parent AWS Region, allowing developers to seamlessly connect to the full range of services in the AWS Region through the same APIs and toolsets.

AWS Direct Connect - AWS Direct Connect is a cloud service that links your network directly to AWS, bypassing the internet to deliver more consistent, lower-latency performance. When creating a new connection, you can choose a hosted connection provided by an AWS Direct Connect Delivery Partner, or choose a dedicated connection from AWS—and deploy at over 100 AWS Direct Connect locations around the world. AWS Direct Connect provides consistently high bandwidth, low-latency access and it is generally used between on-premises data centers and AWS network. Direct Connect is overkill for the given requirement.

Reference:

https://aws.amazon.com/about-aws/global-infrastructure/localzones/`
        },
        {
            id: "paper-24-030",
            domain: "",
            topic: "",
            type: "single",
            question: "Which pillar of the AWS Well-Architected Framework recommends maintaining infrastructure as code (IaC)?",
            options: ["Operational Excellence",
                "Performance Efficiency",
                "Cost Optimization",
                "Security"],
            correctAnswer: [0],
            explanation: `Correct option:

Operational Excellence

The AWS Well-Architected Framework helps you understand the pros and cons of decisions you make while building systems on AWS. By using the Framework you will learn architectural best practices for designing and operating reliable, secure, efficient, and cost-effective systems in the cloud. It provides a way for you to consistently measure your architectures against best practices and identify areas for improvement.

The AWS Well-Architected Framework is based on six pillars — Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization and Sustainability.

The Operational Excellence pillar includes the ability to run and monitor systems to deliver business value and to continually improve supporting processes and procedures. In the cloud, you can apply the same engineering discipline that you use for application code to your entire environment. You can define your entire workload (applications, infrastructure) as code and update it with code. You can implement your operations procedures as code and automate their execution by triggering them in response to events.

Incorrect options:

Cost Optimization - Cost Optimization focuses on avoiding un-needed costs. Key topics include understanding and controlling where the money is being spent, selecting the most appropriate and right number of resource types, analyzing spend over time, and scaling to meet business needs without overspending.

Performance Efficiency - The performance efficiency pillar focuses on using IT and computing resources efficiently. Key topics include selecting the right resource types and sizes based on workload requirements, monitoring performance, and making informed decisions to maintain efficiency as business needs evolve.

Security - The security pillar focuses on protecting information & systems. Key topics include confidentiality and integrity of data, identifying and managing who can do what with privilege management, protecting systems, and establishing controls to detect security events.

Reference:

https://wa.aws.amazon.com/wat.pillar.operationalExcellence.en.html`
        },
        {
            id: "paper-24-031",
            domain: "",
            topic: "",
            type: "multiple-select",
            question: "Which of the following AWS services are always free to use (Select two)?",
            options: ["Amazon Simple Storage Service(Amazon S3)",
                "Amazon DynamoDB",
                "Amazon Elastic Compute Cloud(Amazon EC2)",
                "AWS Auto Scaling",
                "AWS Identity and Access Management(AWS IAM)"],
            correctAnswer: [3, 4],
            explanation: `Correct options:

AWS Identity and Access Management (AWS IAM) - AWS Identity and Access Management (AWS IAM) enables you to manage access to AWS services and resources securely. Using IAM, you can create and manage AWS users and groups, and use permissions to allow and deny their access to AWS resources. IAM is a feature of your AWS account offered at no additional charge.

AWS Auto Scaling - AWS Auto Scaling monitors your applications and automatically adjusts the capacity to maintain steady, predictable performance at the lowest possible cost. Using AWS Auto Scaling, it’s easy to setup application scaling for multiple resources across multiple services in minutes. AWS Auto Scaling is available at no additional charge. You pay only for the AWS resources needed to run your applications and Amazon CloudWatch monitoring fees.

Incorrect options:

Amazon Elastic Compute Cloud (Amazon EC2) - Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides secure, resizable compute capacity in the cloud. It is designed to make web-scale cloud computing easier for developers. This is not a free service. You pay for what you use or depending on the plan you choose.

Amazon Simple Storage Service (Amazon S3) - Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance. S3 service is not free and you pay to depend on the storage class you choose for your data.

Amazon DynamoDB - Amazon DynamoDB is a key-value and document database that delivers single-digit millisecond performance at any scale. It's a fully managed, multi-Region, multi-master, durable database with built-in security, backup and restore, and in-memory caching for internet-scale applications. DynamoDB is not free and you are charged for reading, writing, and storing data in your DynamoDB tables, along with any optional features you choose to enable.

References:

https://aws.amazon.com/iam/

https://aws.amazon.com/autoscaling/`
        },
        {
            id: "paper-24-032",
            domain: "",
            topic: "",
            type: "single",
            question: "Which AWS service can be used to subscribe to an RSS feed to be notified of the status of all AWS service interruptions?",
            options: ["Amazon Simple Notification Service(Amazon SNS)",
                "AWS Health Dashboard - Service Health",
                "AWS Health Dashboard - Your Account Health",
                "AWS Lambda"],
            correctAnswer: [1],
            explanation: `Correct option:

AWS Health Dashboard - Service Health

The AWS Health Dashboard – Service health is the single place to learn about the availability and operations of AWS services. You can view the overall status of AWS services, and you can sign in to view personalized communications about your particular AWS account or organization.

You can check on this page https://health.aws.amazon.com/health/status to get current status information.

The AWS Health Dashboard – Service health offers the possibility to subscribe to an RSS feed to be notified of interruptions to each service.

Incorrect options:

Amazon Simple Notification Service (Amazon SNS) - Amazon Simple Notification Service (Amazon SNS) is a highly available, durable, secure, fully managed pub/sub messaging service that enables you to decouple microservices, distributed systems, and serverless applications. It can be used to deliver notifications, but it does not provide the current services' status.

AWS Health Dashboard - Your Account Health - Your AWS Health Dashboard – Your Account Health provides alerts and remediation guidance when AWS is experiencing events that may impact you.

AWS Lambda - AWS Lambda lets you run code without provisioning or managing servers. It does not provide all AWS services' status.

Reference:

https://health.aws.amazon.com/health/status`
        },
        {
            id: "paper-24-033",
            domain: "",
            topic: "",
            type: "multiple-select",
            question: "AWS Organizations provides which of the following benefits? (Select two)",
            options: ["Volume discounts for Amazon EC2 and Amazon S3 aggregated across the member AWS accounts",
                "Deploy patches on Amazon EC2 instances across the member AWS accounts",
                "Provision Amazon EC2 Spot instances across the member AWS accounts",
                "Share the reserved Amazon EC2 instances amongst the member AWS accounts",
                "Check vulnerabilities on Amazon EC2 instances across the member AWS accounts"],
            correctAnswer: [0, 3],
            explanation: `Correct options:

Volume discounts for Amazon EC2 and Amazon S3 aggregated across the member AWS accounts

Share the reserved Amazon EC2 instances amongst the member AWS accounts

AWS Organizations helps you to centrally manage billing; control access, compliance, and security; and share resources such as reserved Amazon EC2 instances across your AWS accounts.

Using AWS Organizations, you can automate account creation, create groups of accounts to reflect your business needs, and apply policies for these groups for governance. You can also simplify billing by setting up a single payment method for all of your AWS accounts. AWS Organizations is available to all AWS customers at no additional charge.

You can use AWS Organizations to set up a single payment method for all the AWS accounts in your organization through consolidated billing. With consolidated billing, you can see a combined view of charges incurred by all your accounts, as well as take advantage of pricing benefits from aggregated usage, such as volume discounts for Amazon EC2 and Amazon S3.

Key benefits of AWS Organizations:  via - https://aws.amazon.com/organizations/

Incorrect options:

Check vulnerabilities on Amazon EC2 instances across the member AWS accounts

Deploy patches on Amazon EC2 instances across the member AWS accounts

Provision Amazon EC2 Spot instances across the member AWS accounts

These three options contradict the details provided earlier in the explanation, so these options are incorrect.

Reference:

https://aws.amazon.com/organizations/`
        },
        {
            id: "paper-24-034",
            domain: "",
            topic: "",
            type: "multiple-select",
            question: "Which of the following are the serverless computing services offered by AWS ? (Select two)",
            options: ["AWS Fargate",
                "AWS Elastic Beanstalk",
                "Amazon Lightsail",
                "Amazon Elastic Compute Cloud(Amazon EC2)",
                "AWS Lambda"],
            correctAnswer: [0, 4],
            explanation: `Correct options:

Serverless is the native architecture of the cloud that enables you to shift more of your operational responsibilities to AWS, increasing your agility and innovation. Serverless allows you to build and run applications and services without thinking about servers. It eliminates infrastructure management tasks such as server or cluster provisioning, patching, operating system maintenance, and capacity provisioning.

The AWS serverless platform overview:  via - https://aws.amazon.com/serverless/

AWS Lambda

With AWS Lambda, you can run code for virtually any type of application or backend service - all with zero administration. Just upload your code and Lambda takes care of everything required to run and scale your code with high availability. You can set up your code to automatically trigger from other AWS services or call it directly from any web or mobile app.

AWS Lambda lets you run code without provisioning or managing servers. You pay only for the compute time you consume - there is no charge when your code is not running.

AWS Fargate

AWS Fargate is a serverless compute engine for containers that works with both Amazon Elastic Container Service (ECS) and Amazon Elastic Kubernetes Service (EKS). Fargate makes it easy for you to focus on building your applications. Fargate removes the need to provision and manage servers, lets you specify and pay for resources per application, and improves security through application isolation by design.

AWS Fargate is a purpose-built serverless compute engine for containers. Fargate scales and manages the infrastructure required to run your containers.

Incorrect options:

Amazon Elastic Compute Cloud (Amazon EC2) - Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides secure, resizable compute capacity in the cloud with support for per-second billing. It is the easiest way to provision servers on AWS Cloud and access the underlying OS. Amazon EC2 reduces the time required to obtain and boot new server instances to minutes, allowing you to quickly scale capacity, both up and down, as your computing requirements change.

AWS Elastic Beanstalk - AWS Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications and services. You simply upload your code and Elastic Beanstalk automatically handles the deployment, from capacity provisioning, load balancing, auto-scaling to application health monitoring. Beanstalk provisions servers so it is not a serverless service.

Amazon Lightsail - Amazon Lightsail is an easy-to-use cloud platform that offers you everything needed to build an application or website, plus a cost-effective, monthly plan. Lightsail offers several preconfigured, one-click-to-launch operating systems, development stacks, and web applications, including Linux, Windows OS, and WordPress.

References:

https://aws.amazon.com/serverless/

https://aws.amazon.com/fargate/`
        },
        {
            id: "paper-24-035",
            domain: "",
            topic: "",
            type: "single",
            question: "Which of the following AWS authentication mechanisms supports an AWS Multi-Factor Authentication (AWS MFA) device that you can plug into a USB port on your computer?",
            options: ["Hardware Multi - Factor Authentication(AWS MFA) device",
                "Virtual Multi - Factor Authentication(AWS MFA) device",
                "U2F security key",
                "SMS text message - based Multi - Factor Authentication(AWS MFA)"],
            correctAnswer: [2],
            explanation: `Correct option:

U2F security key

Universal 2nd Factor (U2F) Security Key is a device that you can plug into a USB port on your computer. U2F is an open authentication standard hosted by the FIDO Alliance. When you enable a U2F security key, you sign in by entering your credentials and then tapping the device instead of manually entering a code.

How to enable the U2F Security Key for your own IAM user:  via - https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa_enable_u2f.html

Incorrect options:

Virtual Multi-Factor Authentication (AWS MFA) device - This is a software app that runs on a phone or other device and emulates a physical device. The device generates a six-digit numeric code based upon a time-synchronized one-time password algorithm. The user must type a valid code from the device on a second webpage during sign-in. Each virtual MFA device assigned to a user must be unique.

Hardware Multi-Factor Authentication (AWS MFA) device - This is a hardware device that generates a six-digit numeric code based upon a time-synchronized one-time password algorithm. The user must type a valid code from the device on a second webpage during sign-in. Each MFA device assigned to a user must be unique. A user cannot type a code from another user's device to be authenticated.

SMS text message-based Multi-Factor Authentication (AWS MFA) - This is a type of MFA in which the IAM user settings include the phone number of the user's SMS-compatible mobile device. When the user signs in, AWS sends a six-digit numeric code by SMS text message to the user's mobile device. The user is required to type that code on a second webpage during sign-in.

References:

https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa.html

https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa_enable_u2f.html`
        },
        {
            id: "paper-24-036",
            domain: "",
            topic: "",
            type: "single",
            question: "A data analytics company is running a proprietary batch analytics application on AWS and wants to use a storage service which would be accessed by hundreds of EC2 instances simultaneously to append data to existing files. As a Cloud Practitioner, which AWS service would you suggest for this use-case?",
            options: ["Amazon Simple Storage Service(Amazon S3)",
                "Instance Store",
                "Amazon Elastic Block Store(Amazon EBS)",
                "Amazon Elastic File System(Amazon EFS)"],
            correctAnswer: [3],
            explanation: `Correct option:

Amazon Elastic File System (Amazon EFS)

Amazon EFS is a file storage service for use with Amazon EC2. Amazon EFS provides a file system interface, file system access semantics, and concurrently-accessible storage for up to thousands of Amazon EC2 instances. Amazon EFS uses the Network File System protocol.

How EFS works:  via - https://aws.amazon.com/efs/

Incorrect options:

Amazon Elastic Block Store (Amazon EBS) - Amazon Elastic Block Store (EBS) is an easy to use, high-performance block storage service designed for use with Amazon Elastic Compute Cloud (EC2) for both throughput and transaction-intensive workloads at any scale. EBS volumes cannot be accessed simultaneously by multiple EC2 instances, so this option is incorrect.

Instance Store - An instance store provides temporary block-level storage for your instance. This storage is located on disks that are physically attached to the host computer. Instance Store volumes cannot be accessed simultaneously by multiple EC2 instances, so this option is incorrect.

Amazon Simple Storage Service (Amazon S3) - Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance. S3 is object storage and it does not support file append operations, so this option is incorrect.

Reference:

https://aws.amazon.com/efs/`
        },
        {
            id: "paper-24-037",
            domain: "",
            topic: "",
            type: "single",
            question: "An e-commerce company wants to store data from a recommendation engine in a database. As a Cloud Practioner, which AWS service would you recommend to provide this functionality with the LEAST operational overhead for any scale?",
            options: ["Amazon Neptune",
                "Amazon Simple Storage Service(Amazon S3)",
                "Amazon DynamoDB",
                "Amazon Relational Database Service(Amazon RDS)",],
            correctAnswer: [2],
            explanation: `Correct options:

Amazon DynamoDB

Amazon DynamoDB is a key-value and document database that delivers sub-millisecond performance at any scale. Amazon DynamoDB enables customers to offload the administrative burdens of operating and scaling distributed databases to AWS so that they don’t have to worry about hardware provisioning, setup and configuration, throughput capacity planning, replication, software patching, or cluster scaling.

You can use Amazon DynamoDB to store recommendation results with the LEAST operational overhead for any scale.

 via - https://catalog.us-east-1.prod.workshops.aws/workshops/ed82a5d4-6630-41f0-a6a1-9345898fa6ec/en-US/batch/dynamodb

Incorrect options:

Amazon Relational Database Service (Amazon RDS) - Amazon Relational Database Service (Amazon RDS) is a relational database service from AWS. Amazon RDS is less operationally efficient than Amazon DynamoDB while building a highly scalable solution.

Amazon Simple Storage Service (Amazon S3) - Amazon Simple Storage Service (Amazon S3) is an object storage service and not a database service.

Amazon Neptune - Amazon Neptune is a fully managed database service built for the cloud that makes it easier to build and run graph applications. It's not the right fit to store recommendation results with the LEAST operational overhead for any scale.

Reference:

https://catalog.us-east-1.prod.workshops.aws/workshops/ed82a5d4-6630-41f0-a6a1-9345898fa6ec/en-US/batch/dynamodb`
        },
        {
            id: "paper-24-038",
            domain: "",
            topic: "",
            type: "multiple-select",
            question: "Which of the following AWS services have data encryption automatically enabled? (Select two)?",
            options: ["Amazon Redshift",
                "Amazon Elastic Block Store(Amazon EBS)",
                "Amazon Simple Storage Service(Amazon S3)",
                "Amazon Elastic File System(Amazon EFS)",
                "AWS Storage Gateway"],
            correctAnswer: [2, 4],
            explanation: `Correct option:

Amazon Simple Storage Service (Amazon S3)

All Amazon S3 buckets have encryption configured by default, and objects are automatically encrypted by using server-side encryption with Amazon S3 managed keys (SSE-S3). This encryption setting applies to all objects in your Amazon S3 buckets.

AWS Storage Gateway

AWS Storage Gateway is a hybrid cloud storage service that gives you on-premises access to virtually unlimited cloud storage. All data transferred between the gateway and AWS storage is encrypted using SSL (for all three types of gateways - File, Volume and Tape Gateways).

Incorrect options:

Amazon Elastic Block Store (Amazon EBS) - Amazon Elastic Block Store (Amazon EBS) volumes are not encrypted, by default. You can configure your AWS account to enforce the encryption of the new EBS volumes and snapshot copies that you create.

Amazon Redshift - Encryption is an optional setting in Amazon Redshift. When you enable encryption for a cluster, the data-blocks and system metadata are encrypted for the cluster and its snapshots.

Amazon Elastic File System (Amazon EFS) - Encryption is not a default setting, but an optional configuration for Amazon EFS drives. Amazon EFS supports two forms of encryption for file systems, encryption of data in transit and encryption at rest.

References:

https://aws.amazon.com/storagegateway/faqs/

https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-encryption.html`
        },
        {
            id: "paper-24-039",
            domain: "",
            topic: "",
            type: "single",
            question: "A company uses reserved EC2 instances across multiple units with each unit having its own AWS account. However, some of the units under-utilize their reserved instances while other units need more reserved instances. As a Cloud Practitioner, which of the following would you recommend as the most cost-optimal solution?",
            options: ["Use AWS Organizations to manage AWS accounts of all units and then share the reserved EC2 instances amongst all units",
                "Use AWS Trusted Advisor to manage AWS accounts of all units and then share the reserved EC2 instances amongst all units",
                "Use AWS Systems Manager to manage AWS accounts of all units and then share the reserved EC2 instances amongst all units",
                "Use AWS Cost Explorer to manage AWS accounts of all units and then share the reserved EC2 instances amongst all units"],
            correctAnswer: [0],
            explanation: `Correct option:

Use AWS Organizations to manage AWS accounts of all units and then share the reserved EC2 instances amongst all units

AWS Organizations helps you to centrally manage billing; control access, compliance, and security; and share resources across your AWS accounts. Using AWS Organizations, you can automate account creation, create groups of accounts to reflect your business needs, and apply policies for these groups for governance. You can also simplify billing by setting up a single payment method for all of your AWS accounts. AWS Organizations is available to all AWS customers at no additional charge.

Key Features of AWS Organizations:  via - https://aws.amazon.com/organizations/

Incorrect options:

Use AWS Trusted Advisor to manage AWS accounts of all units and then share the reserved EC2 instances amongst all units - AWS Trusted Advisor is an online tool that provides you real-time guidance to help you provision your resources following AWS best practices on cost optimization, security, fault tolerance, service limits, and performance improvement. You cannot use Trusted Advisor to share the reserved EC2 instances amongst multiple AWS accounts.

How Trusted Advisor Works:  via - https://aws.amazon.com/premiumsupport/technology/trusted-advisor/

Use AWS Cost Explorer to manage AWS accounts of all units and then share the reserved EC2 instances amongst all units - AWS Cost Explorer lets you explore your AWS costs and usage at both a high level and at a detailed level of analysis, and empowering you to dive deeper using several filtering dimensions (e.g., AWS Service, Region, Linked Account). You cannot use Cost Explorer to share the reserved EC2 instances amongst multiple AWS accounts.

Use AWS Systems Manager to manage AWS accounts of all units and then share the reserved EC2 instances amongst all units - Systems Manager provides a unified user interface so you can view operational data from multiple AWS services and allows you to automate operational tasks across your AWS resources. With Systems Manager, you can group resources, like Amazon EC2 instances, Amazon S3 buckets, or Amazon RDS instances, by application, view operational data for monitoring and troubleshooting, and take action on your groups of resources. You cannot use Systems Manager to share the reserved EC2 instances amongst multiple AWS accounts.

How AWS Systems Manager Works:  via - https://aws.amazon.com/systems-manager/

References:

https://aws.amazon.com/organizations/

https://aws.amazon.com/premiumsupport/technology/trusted-advisor/

https://aws.amazon.com/systems-manager/`
        },
        {
            id: "paper-24-040",
            domain: "",
            topic: "",
            type: "single",
            question: "Which entity ensures that your application on Amazon Elastic Compute Cloud (Amazon EC2) always has the right amount of capacity to handle the current traffic demand?",
            options: ["Amazon EC2 Auto Scaling",
                "Application Load Balancer",
                "Multi - AZ deployment",
                "Network Load Balancer"],
            correctAnswer: [0],
            explanation: `Correct option:

Amazon EC2 Auto Scaling

Amazon EC2 Auto Scaling helps you ensure that you have the correct number of Amazon EC2 instances available to handle the load for your application. You create collections of Amazon EC2 instances, called Auto Scaling groups. You can specify the minimum number of instances in each Auto Scaling group, and Amazon EC2 Auto Scaling ensures that your group never goes below this size.

Amazon EC2 Auto Scaling Overview:  via - https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html

Incorrect options:

Multi-AZ deployment - With Availability Zones (AZ), you can design and operate applications and databases that automatically failover between zones without interruption. Multi-AZ deployment of Amazon EC2 instances provided high availability, it does not help in scaling resources.

Network Load Balancer - Network Load Balancer is best suited for load balancing of Transmission Control Protocol (TCP), User Datagram Protocol (UDP) and Transport Layer Security (TLS) traffic where extreme performance is required. It distributes traffic, does not scale resources.

Application Load Balancer - An Application Load Balancer serves as the single point of contact for clients. The load balancer distributes incoming application traffic across multiple targets, such as EC2 instances, in multiple Availability Zones. It distributes traffic, does not scale resources.

Reference:

https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html`
        },
        {
            id: "paper-24-041",
            domain: "",
            topic: "",
            type: "single",
            question: "An organization deploys its IT infrastructure in a combination of its on-premises data center along with AWS Cloud. How would you categorize this deployment model?",
            options: ["Cloud deployment",
                "Hybrid deployment",
                "Private deployment",
                "Mixed deployment"],
            correctAnswer: [1],
            explanation: `Correct option:

Hybrid deployment

A hybrid deployment is a way to connect your on-premises infrastructure to the cloud. The most common method of hybrid deployment is between the cloud and existing on-premises infrastructure to extend an organization's infrastructure into the cloud while connecting cloud resources to internal systems.

Overview of Cloud Computing Deployment Models:  via - https://aws.amazon.com/types-of-cloud-computing/

Incorrect options:

Cloud deployment - For this type of deployment, a cloud-based application is fully deployed in the cloud, and all parts of the application run in the cloud. Applications in the cloud have either been created in the cloud or have been migrated from an existing infrastructure to take advantage of the benefits of cloud computing.

Private deployment - For this deployment model, resources are deployed on-premises using virtualization technologies. On-premises deployment does not provide many of the benefits of cloud computing but is sometimes sought for its ability to provide dedicated resources.

Mixed deployment - This is a made-up option and has been added as a distractor.

References:

https://aws.amazon.com/types-of-cloud-computing/

https://aws.amazon.com/hybrid/`
        },
        {
            id: "paper-24-042",
            domain: "",
            topic: "",
            type: "multiple-select",
            question: "AWS Marketplace facilitates which of the following use-cases? (Select two)",
            options: ["Sell Software as a Service(SaaS) solutions to AWS customers",
                "Raise request for purchasing AWS Direct Connect connection",
                "Buy Amazon EC2 Standard Reserved Instances(RI)",
                "AWS customer can buy software that has been bundled into customized Amazon Machine Image(AMIs) by the AWS Marketplace sellers",
                "Purchase compliance documents from third- party vendors"],
            correctAnswer: [0, 3],
            explanation: `Correct option:

Sell Software as a Service (SaaS) solutions to AWS customers

AWS customer can buy software that has been bundled into customized Amazon Machine Image (AMIs) by the AWS Marketplace sellers

AWS Marketplace is a digital catalog with thousands of software listings from independent software vendors that make it easy to find, test, buy, and deploy software that runs on AWS. The AWS Marketplace enables qualified partners to market and sell their software to AWS Customers.

AWS Marketplace offers two ways for sellers to deliver software to customers: Amazon Machine Image (AMI) and Software as a Service (SaaS).

Amazon Machine Image (AMI): Offering an AMI is the preferred option for listing products in AWS Marketplace. Partners have the option for free or paid products. Partners can offer paid products charged by the hour or month. Bring-Your-Own-License (BYOL) is also available and enables customers with existing software licenses to easily migrate to AWS.

Software as a Service (SaaS): If you offer a SaaS solution running on AWS (and are unable to build your product into an AMI) the SaaS listing offers our partners a way to market their software to customers.

Incorrect options:

Purchase compliance documents from third-party vendors - There is no third party vendor for providing compliance documents. AWS Artifact is your go-to, central resource for compliance-related information that matters to you. It provides on-demand access to AWS’ security and compliance reports and select online agreements.

Buy Amazon EC2 Standard Reserved Instances (RI) - Amazon EC2 Standard Reserved Instances (RI) can be bought from the Amazon EC2 console at https://console.aws.amazon.com/ec2/

Raise request for purchasing AWS Direct Connect connection - AWS Direct Connect connection can be raised from the AWS management console at https://console.aws.amazon.com/directconnect/v2/home

References:

https://aws.amazon.com/partners/aws-marketplace/

https://aws.amazon.com/artifact/

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-concepts-buying.html#ri-queued-purchase`
        },
        {
            id: "paper-24-043",
            domain: "",
            topic: "",
            type: "single",
            question: "A financial services company wants to ensure that its AWS account activity meets the governance, compliance and auditing norms. As a Cloud Practitioner, which AWS service would you recommend for this use-case?",
            options: ["AWS CloudTrail",
                "AWS Trusted Advisor",
                "Amazon CloudWatch",
                "AWS Config"],
            correctAnswer: [0],
            explanation: `Correct option:

AWS CloudTrail

You can use CloudTrail to log, monitor and retain account activity related to actions across your AWS infrastructure. CloudTrail provides an event history of your AWS account activity, including actions taken through the AWS Management Console, AWS SDKs, command-line tools, and other AWS services.

How CloudTrail Works:  via - https://aws.amazon.com/cloudtrail/

Incorrect options:

AWS Config - AWS Config is a service that enables you to assess, audit, and evaluate the configurations of your AWS resources. Config continuously monitors and records your AWS resource configurations and allows you to automate the evaluation of recorded configurations against desired configurations.

Amazon CloudWatch - Amazon CloudWatch is a monitoring and observability service built for DevOps engineers, developers, site reliability engineers (SREs), and IT managers. CloudWatch provides data and actionable insights to monitor applications, respond to system-wide performance changes, optimize resource utilization, and get a unified view of operational health. This is an excellent service for building Resilient systems.

AWS Trusted Advisor - AWS Trusted Advisor is an online tool that provides you real-time guidance to help you provision your resources following AWS best practices on cost optimization, security, fault tolerance, service limits and performance improvement.

Exam Alert:

You may see use-cases asking you to select one of CloudWatch vs CloudTrail vs Config. Just remember this thumb rule -

Think resource performance monitoring, events, and alerts; think CloudWatch.

Think account-specific activity and audit; think CloudTrail.

Think resource-specific change history, audit, and compliance; think Config.

Reference:

https://aws.amazon.com/cloudtrail/`
        },
        {
            id: "paper-24-044",
            domain: "",
            topic: "",
            type: "single",
            question: "Which of the following options is NOT a feature of Amazon Inspector?",
            options: ["Track configuration changes",
                "Analyze against unintended network accessibility",
                "Automate security assessments",
                "Inspect running operating systems(OS) against known vulnerabilities"],
            correctAnswer: [0],
            explanation: `Correct option:

Track configuration changes

Tracking configuration changes is a feature of AWS Config.

AWS Config is a service that enables you to assess, audit, and evaluate the configurations of your AWS resources. Config continuously monitors and records your AWS resource configurations and allows you to automate the evaluation of recorded configurations against desired configurations.

How AWS Config works:  via - https://aws.amazon.com/config/

Incorrect options:

Automate security assessments

Analyze against unintended network accessibility

Inspect running operating systems (OS) against known vulnerabilities

These options are all features of Amazon Inspector.

Amazon Inspector is an automated security assessment service that helps improve the security and compliance of applications deployed on AWS. Amazon Inspector automatically assesses applications for exposure, vulnerabilities, and deviations from best practices.

Amazon Inspector security assessments help you check for unintended network accessibility of your Amazon EC2 instances and for vulnerabilities on those EC2 instances.

Amazon Inspector also offers predefined software called an agent that you can optionally install in the operating system of the EC2 instances that you want to assess. The agent monitors the behavior of the EC2 instances, including network, file system, and process activity. It also collects a wide set of behavior and configuration data (telemetry).

References:

https://aws.amazon.com/config/

https://aws.amazon.com/inspector/`
        },
        {
            id: "paper-24-045",
            domain: "",
            topic: "",
            type: "single",
            question: "A Cloud Practitioner would like to get operational insights of its resources to quickly identify any issues that might impact applications using those resources. Which AWS service can help with this task?",
            options: ["AWS Systems Manager",
                "Amazon Inspector",
                "AWS Health Dashboard - Your Account Health",
                "AWS Trusted Advisor"],
            correctAnswer: [0],
            explanation: `Correct option:

AWS Systems Manager

AWS Systems Manager allows you to centralize operational data from multiple AWS services and automate tasks across your AWS resources. You can create logical groups of resources such as applications, different layers of an application stack, or production versus development environments.

With AWS Systems Manager, you can select a resource group and view its recent API activity, resource configuration changes, related notifications, operational alerts, software inventory, and patch compliance status. You can also take action on each resource group depending on your operational needs. AWS Systems Manager provides a central place to view and manage your AWS resources, so you can have complete visibility and control over your operations.

How AWS Systems Manager works:  via - https://aws.amazon.com/systems-manager/

Incorrect options:

Amazon Inspector - Amazon Inspector is an automated security assessment service that helps improve the security and compliance of applications deployed on AWS. It is not used to get operational insights of AWS resources.

AWS Health Dashboard - Your Account Health - AWS Health Dashboard - Your Account Health provides alerts and remediation guidance when AWS is experiencing events that may impact you. It is not used to get operational insights of AWS resources.

AWS Trusted Advisor - AWS Trusted Advisor is an online resource to help you reduce cost, increase performance, and improve security by optimizing your AWS environment. AWS Trusted Advisor provides real-time guidance to help you provision your resources following AWS best practices. It is not used to get operational insights of AWS resources.

Reference:

https://aws.amazon.com/systems-manager/`
        },
        {
            id: "paper-24-046",
            domain: "",
            topic: "",
            type: "single",
            question: "An AWS user is trying to launch an Amazon Elastic Compute Cloud (Amazon EC2) instance in a given region. What is the region-specific constraint that the Amazon Machine Image (AMI) must meet so that it can be used for this Amazon Elastic Compute Cloud (Amazon EC2) instance?",
            options: ["An Amazon Machine Image(AMI) is a global entity, so the region is not applicable",
                "You must use an Amazon Machine Image(AMI) from the same region as that of the Amazon EC2 instance.The region of the Amazon Machine Image(AMI) has no bearing on the performance of the Amazon EC2 instance",
                "You should use an Amazon Machine Image(AMI) from the same region, as it improves the performance of the Amazon EC2 instance",
                "You can use an Amazon Machine Image(AMI) from a different region, but it degrades the performance of the Amazon EC2 instance"],
            correctAnswer: [1],
            explanation: `Correct option:

You must use an Amazon Machine Image (AMI) from the same region as that of the Amazon EC2 instance. The region of the Amazon Machine Image (AMI) has no bearing on the performance of the Amazon EC2 instance

An Amazon Machine Image (AMI) provides the information required to launch an instance. You must specify an Amazon Machine Image (AMI) when you launch an instance. You can launch multiple instances from a single AMI when you need multiple instances with the same configuration.

The Amazon Machine Image (AMI) must be in the same region as that of the Amazon EC2 instance to be launched. If the Amazon Machine Image (AMI) exists in a different region, you can copy that Amazon Machine Image (AMI) to the region where you want to launch the EC2 instance. The region of Amazon Machine Image (AMI) has no bearing on the performance of the Amazon EC2 instance.

Amazon Machine Images (AMI) Overview:  via - https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html

Incorrect options:

You can use an Amazon Machine Image (AMI) from a different region, but it degrades the performance of the Amazon EC2 instance

You should use an Amazon Machine Image (AMI) from the same region, as it improves the performance of the Amazon EC2 instance

An Amazon Machine Image (AMI) is a global entity, so the region is not applicable

These three options contradict the details provided earlier in the explanation, so these options are incorrect.

Reference:

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html`
        },
        {
            id: "paper-24-047",
            domain: "",
            topic: "",
            type: "single",
            question: "Which AWS service will you use to provision the same AWS infrastructure across multiple AWS accounts and regions?",
            options: ["AWS CodeDeploy",
                "AWS CloudFormation",
                "AWS Systems Manager",
                "AWS Config"],
            correctAnswer: [1],
            explanation: `Correct option:

AWS CloudFormation

AWS CloudFormation allows you to use programming languages or a simple text file to model and provision, in an automated and secure manner, all the resources needed for your applications across all Regions and accounts. A stack is a collection of AWS resources that you can manage as a single unit. In other words, you can create, update, or delete a collection of resources by creating, updating, or deleting stacks.

AWS CloudFormation StackSets extends the functionality of stacks by enabling you to create, update, or delete stacks across multiple accounts and regions with a single operation. Using an administrator account, you define and manage an AWS CloudFormation template, and use the template as the basis for provisioning stacks into selected target accounts across specified regions.

How CloudFormation Works:  via - https://aws.amazon.com/cloudformation/

Incorrect options:

AWS CodeDeploy - AWS CodeDeploy is a fully managed deployment service that automates software deployments to a variety of compute services such as Amazon EC2, AWS Fargate, AWS Lambda, and your on-premises servers. AWS CodeDeploy makes it easier for you to rapidly release new features, helps you avoid downtime during application deployment, and handles the complexity of updating your applications. You cannot use this service to provision AWS infrastructure.

AWS Config - AWS Config is a service that enables you to assess, audit, and evaluate the configurations of your AWS resources. AWS Config continuously monitors and records your AWS resource configurations and allows you to automate the evaluation of recorded configurations against desired configurations.

AWS Systems Manager - AWS Systems Manager gives you visibility and control of your infrastructure on AWS. Systems Manager provides a unified user interface so you can view operational data from multiple AWS services and allows you to automate operational tasks across your AWS resources. With Systems Manager, you can group resources, like Amazon EC2 instances, Amazon S3 buckets, or Amazon RDS instances, by application, view operational data for monitoring and troubleshooting, and take action on your groups of resources. You cannot use this service to provision AWS infrastructure.

Reference:

https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/what-is-cfnstacksets.html`
        },
        {
            id: "paper-24-048",
            domain: "",
            topic: "",
            type: "single",
            question: "An intern at an IT company provisioned a Linux based On-demand EC2 instance with per-second billing but terminated it within 30 seconds as he wanted to provision another instance type. What is the duration for which the instance would be charged?",
            options: ["300 seconds",
                "30 seconds",
                "60 seconds",
                "600 seconds"],
            correctAnswer: [2],
            explanation: `Correct option:

60 seconds

There is a one-minute minimum charge for Linux based EC2 instances, so this is the correct option.

Incorrect options:

30 seconds

300 seconds

600 seconds

These three options contradict the details provided earlier in the explanation, so these options are incorrect.

Reference:

https://aws.amazon.com/blogs/aws/new-per-second-billing-for-ec2-instances-and-ebs-volumes/`
        },
        {
            id: "paper-24-049",
            domain: "",
            topic: "",
            type: "single",
            question: "Which of the following AWS services can be used to forecast your AWS account usage and costs?",
            options: ["AWS Cost & Usage Report(AWS CUR)",
                "AWS Budgets",
                "AWS Pricing Calculator",
                "AWS Cost Explorer"],
            correctAnswer: [3],
            explanation: `Correct option:

AWS Cost Explorer

AWS Cost Explorer has an easy-to-use interface that lets you visualize, understand, and manage your AWS costs and usage over time. AWS Cost Explorer includes a default report that helps you visualize the costs and usage associated with your top five cost-accruing AWS services, and gives you a detailed breakdown of all services in the table view. The reports let you adjust the time range to view historical data going back up to twelve months to gain an understanding of your cost trends. AWS Cost Explorer also supports forecasting to get a better idea of what your costs and usage may look like in the future so that you can plan.

AWS Cost Explorer Features:  via - https://aws.amazon.com/aws-cost-management/aws-cost-explorer/

Incorrect options:

AWS Cost & Usage Report (AWS CUR) - The AWS Cost & Usage Report (AWS CUR) contains the most comprehensive set of cost and usage data available. You can use Cost and Usage Reports to publish your AWS billing reports to an Amazon Simple Storage Service (Amazon S3) bucket that you own. You can receive reports that break down your costs by the hour or month, by product or product resource, or by tags that you define yourself. AWS updates the report in your bucket once a day in a comma-separated value (CSV) format. AWS Cost and Usage Reports cannot forecast your AWS account cost and usage.

AWS Budgets - AWS Budgets gives the ability to set custom budgets that alert you when your costs or usage exceed (or are forecasted to exceed) your budgeted amount. You can also use AWS Budgets to set reservation utilization or coverage targets and receive alerts when your utilization drops below the threshold you define. Budgets can be created at the monthly, quarterly, or yearly level, and you can customize the start and end dates. You can further refine your budget to track costs associated with multiple dimensions, such as AWS service, linked account, tag, and others. AWS Budgets cannot forecast your AWS account cost and usage.

AWS Pricing Calculator - AWS Pricing Calculator lets you explore AWS services and create an estimate for the cost of your use cases on AWS. You can model your solutions before building them, explore the price points and calculations behind your estimate, and find the available instance types and contract terms that meet your needs. This enables you to make informed decisions about using AWS. You can plan your AWS costs and usage or price out setting up a new set of instances and services. You cannot use this service to forecast your AWS account cost and usage.

Reference:

https://aws.amazon.com/aws-cost-management/aws-cost-explorer/`
        },
        {
            id: "paper-24-050",
            domain: "",
            topic: "",
            type: "single",
            question: "A corporation would like to simplify access management to multiple AWS accounts as well as facilitate AWS Single Sign-On (AWS SSO) access to its AWS accounts. As a Cloud Practitioner, which AWS service would you use for this task?",
            options: ["AWS Cognito",
                "AWS Identity and Access Management(AWS IAM)",
                "AWS Command Line Interface(CLI)",
                "AWS IAM Identity Center"],
            correctAnswer: [3],
            explanation: `Correct option:

AWS IAM Identity Center

AWS IAM Identity Center is the successor to AWS Single Sign-On (AWS SSO). It is built on top of AWS Identity and Access Management (IAM) to simplify access management to multiple AWS accounts, AWS applications, and other SAML-enabled cloud applications. In IAM Identity Center, you create or connect, your workforce users for use across AWS. You can choose to manage access just to your AWS accounts, just to your cloud applications, or to both.

You can create users directly in IAM Identity Center, or you can bring them from your existing workforce directory. With IAM Identity Center, you get a unified administration experience to define, customize, and assign fine-grained access. Your workforce users get a user portal to access their assigned AWS accounts or cloud applications.

You can use IAM Identity Center to quickly and easily assign and manage your employees’ access to multiple AWS accounts, SAML-enabled cloud applications (such as Salesforce, Microsoft 365, and Box), and custom-built in-house applications, all from a central place.

How AWS IAM Identity Center works:  via - https://aws.amazon.com/iam/identity-center/

Incorrect options:

AWS Cognito - Amazon Cognito lets you add user sign-up, sign-in, and access control to your web and mobile apps quickly and easily. With Amazon Cognito, you also have the option to authenticate users through social identity providers such as Facebook, Twitter, or Amazon, with SAML identity solutions, or by using your own identity system. It is an identity management solution for customers/developers building B2C or B2B apps for their customers.

AWS Identity and Access Management (AWS IAM) - AWS Identity and Access Management (AWS IAM) enables you to securely control access to AWS services and resources for your users. Using AWS IAM, you can create and manage AWS users and groups, and use permissions to allow and deny their access to AWS resources. It is not used to log in but to manage users and roles.

AWS Command Line Interface (CLI) - The AWS Command Line Interface (CLI) is a unified tool to manage your AWS services. With just one tool to download and configure, you can control multiple AWS services from the command line and automate them through scripts. It is not a central user portal.

Reference:

https://aws.amazon.com/iam/identity-center/`
        },
        {
            id: "paper-24-051",
            domain: "",
            topic: "",
            type: "single",
            question: "Due to regulatory and compliance reasons, an organization is supposed to use a hardware device for any data encryption operations in the cloud. Which AWS service can be used to meet this compliance requirement?",
            options: ["AWS CloudHSM",
                "AWS Trusted Advisor",
                "AWS Secrets Manager",
                "AWS Key Management Service(AWS KMS)"],
            correctAnswer: [0],
            explanation: `Correct option:

AWS CloudHSM

AWS CloudHSM is a cloud-based Hardware Security Module (HSM) that enables you to easily generate and use your encryption keys on the AWS Cloud. With CloudHSM, you can manage your encryption keys using FIPS 140-2 Level 3 validated HSMs. It is a fully-managed service that automates time-consuming administrative tasks for you, such as hardware provisioning, software patching, high-availability, and backups.

Please review this detailed description for CloudHSM:  via - https://aws.amazon.com/cloudhsm/

Incorrect options:

AWS Key Management Service (AWS KMS) - AWS Key Management Service (AWS KMS) makes it easy for you to create and manage cryptographic keys and control their use across a wide range of AWS services and in your applications. It is a secure and resilient service that uses hardware security modules that have been validated under FIPS 140-2, or are in the process of being validated, to protect your keys. It cannot be used as a Hardware Security Module for data encryption operations in AWS Cloud.

AWS Secrets Manager - AWS Secrets Manager helps you protect secrets needed to access your applications, services, and IT resources. The service enables you to easily rotate, manage, and retrieve database credentials, API keys, and other secrets throughout their lifecycle. Users and applications retrieve secrets with a call to Secrets Manager APIs, eliminating the need to hardcode sensitive information in plain text. Secrets Manager cannot be used as a Hardware Security Module for data encryption operations in AWS Cloud.

AWS Trusted Advisor - AWS Trusted Advisor is an online tool that provides you real-time guidance to help you provision your resources following AWS best practices on cost optimization, security, fault tolerance, service limits, and performance improvement. Whether establishing new workflows, developing applications, or as part of ongoing improvement, recommendations provided by Trusted Advisor regularly help keep your solutions provisioned optimally.

Reference:

https://aws.amazon.com/cloudhsm/`
        },
        {
            id: "paper-24-052",
            domain: "",
            topic: "",
            type: "single",
            question: "A unicorn startup is building an analytics application with support for a speech-based interface. The application will accept speech-based input from users and then convey results via speech. As a Cloud Practitioner, which solution would you recommend for the given use-case?",
            options: ["Use Amazon Polly to convert speech to text for downstream analysis.Then use Amazon Translate to convey the text results via speech",
                "Use Amazon Transcribe to convert speech to text for downstream analysis.Then use Amazon Polly to convey the text results via speech",
                "Use Amazon Translate to convert speech to text for downstream analysis.Then use Amazon Polly to convey the text results via speech",
                "Use Amazon Polly to convert speech to text for downstream analysis.Then use Amazon Transcribe to convey the text results via speech"],
            correctAnswer: [1],
            explanation: `Correct option:

Use Amazon Transcribe to convert speech to text for downstream analysis. Then use Amazon Polly to convey the text results via speech

You can use Amazon Transcribe to add speech-to-text capability to your applications. Amazon Transcribe uses a deep learning process called automatic speech recognition (ASR) to convert speech to text quickly and accurately. Amazon Transcribe can be used to transcribe customer service calls, to automate closed captioning and subtitling, and to generate metadata for media assets.

Amazon Transcribe Use-Cases:  via - https://aws.amazon.com/transcribe/

You can use Amazon Polly to turn text into lifelike speech thereby allowing you to create applications that talk. Polly's Text-to-Speech (TTS) service uses advanced deep learning technologies to synthesize natural sounding human speech.

Amazon Polly Benefits:  via - https://aws.amazon.com/polly/

Amazon Translate is used for language translation. Amazon Translate uses neural machine translation via deep learning models to deliver more accurate and more natural-sounding translation than traditional statistical and rule-based translation algorithms.

Incorrect options:

Use Amazon Polly to convert speech to text for downstream analysis. Then use Amazon Transcribe to convey the text results via speech - Amazon Polly cannot be used to convert speech to text, so this option is incorrect.

Use Amazon Translate to convert speech to text for downstream analysis. Then use Amazon Polly to convey the text results via speech - Amazon Translate cannot convert speech to text, so this option is incorrect.

Use Amazon Polly to convert speech to text for downstream analysis. Then use Amazon Translate to convey the text results via speech - Amazon Polly cannot be used to convert speech to text, so this option is incorrect.

References:

https://aws.amazon.com/transcribe/

https://aws.amazon.com/polly/`
        },
        {
            id: "paper-24-053",
            domain: "",
            topic: "",
            type: "single",
            question: "A photo sharing web application wants to store thumbnails of user-uploaded images on Amazon Simple Storage Service (Amazon S3). The thumbnails are rarely used but need to be immediately accessible from the web application. The thumbnails can be regenerated easily if they are lost. Which is the most cost-effective way to store these thumbnails on Amazon Simple Storage Service (Amazon S3)?",
            options: ["Use Amazon S3 One Zone - Infrequent Access(S3 One Zone - IA) to store the thumbnails",
                "Use Amazon S3 Glacier Flexible Retrieval to store the thumbnails",
                "Use Amazon S3 Standard - Infrequent Access(S3 Standard - IA) to store the thumbnails",
                "Use Amazon S3 Standard to store the thumbnails"],
            correctAnswer: [0],
            explanation: `Correct option:

Use Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA) to store the thumbnails

Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA) is for data that is accessed less frequently but requires rapid access when needed. Unlike other S3 Storage Classes which store data in a minimum of three Availability Zones (AZs), Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA) stores data in a single Availability Zone (AZ) and costs 20% less than Amazon S3 Standard-Infrequent Access (S3 Standard-IA). Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA) offers the same high durability, high throughput, and low latency of S3 Standard, with a low per GB storage price and per GB retrieval fee. Although Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA) offers less availability than S3 Standard but that's not an issue for the given use-case since the thumbnails can be regenerated easily.

As the thumbnails are rarely used but need to be rapidly accessed when required, so Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA) is the best choice for this use-case.

Exam Alert:

Please review this detailed comparison on S3 Storage Classes as you can expect a few questions on this aspect of S3:  via - https://aws.amazon.com/s3/storage-classes/

Incorrect options:

Use Amazon S3 Standard-Infrequent Access (S3 Standard-IA) to store the thumbnails - Amazon S3 Standard-Infrequent Access (S3 Standard-IA) storage class is for data that is accessed less frequently but requires rapid access when needed. Amazon S3 Standard-Infrequent Access (S3 Standard-IA) matches the high durability, high throughput, and low latency of S3 Standard, with a low per GB storage price and per GB retrieval fee. Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA) costs 20% less than Amazon S3 Standard-Infrequent Access (S3 Standard-IA), so this option is incorrect.

Use Amazon S3 Standard to store the thumbnails - Amazon S3 Standard offers high durability, availability, and performance object storage for frequently accessed data. As described above, Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA) is a better fit than Amazon S3 Standard, hence using Amazon S3 standard is ruled out for the given use-case.

Use Amazon S3 Glacier Flexible Retrieval to store the thumbnails - Amazon S3 Glacier Flexible Retrieval is a secure, durable, and low-cost storage class for data archiving. Although Amazon S3 Glacier Flexible Retrieval is cheaper than Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA), however the retrieval time ranges from a minute to hours, so this option is also ruled out for the given use-case.

Reference:

https://aws.amazon.com/s3/storage-classes/`
        },
        {
            id: "paper-24-054",
            domain: "",
            topic: "",
            type: "single",
            question: "A start-up would like to quickly deploy a popular technology on AWS. As a Cloud Practitioner, which AWS tool would you use for this task?",
            options: ["AWS CodeDeploy",
                "AWS Forums",
                "AWS Whitepapers",
                "AWS Partner Solutions(formerly Quick Starts)",],
            correctAnswer: [3],
            explanation: `Correct option:

AWS Partner Solutions (formerly Quick Starts)

AWS Partner Solutions are automated reference deployments built by Amazon Web Services (AWS) solutions architects and AWS Partners. Partner Solutions help you deploy popular technologies to AWS according to AWS best practices. You can reduce hundreds of manual procedures to a few steps and start using your environment within minutes.

AWS Partner Solutions are automated reference deployments for key workloads on the AWS Cloud. Each Partner Solution launches, configures, and runs the AWS compute, network, storage, and other services required to deploy a specific workload on AWS, using AWS best practices for security and availability.

Incorrect options:

AWS Forums - AWS Forums is an AWS community platform where people can help each other. It is not used to deploy technologies on AWS.

AWS CodeDeploy - AWS CodeDeploy is a service that automates code deployments to any instance, including Amazon EC2 instances and instances running on-premises. It is not suited to rapidly deploy popular technologies on AWS ready to be used immediately.

AWS Whitepapers - AWS Whitepapers are technical content authored by AWS and the AWS community to expand your knowledge of the cloud. They include technical whitepapers, technical guides, reference material, and reference architecture diagrams. You can find useful content for your deployment, but it is not a service that will deploy technologies.

Reference:

https://aws.amazon.com/quickstart/`
        },
        {
            id: "paper-24-055",
            domain: "",
            topic: "",
            type: "single",
            question: "Multi-AZ deployment is an example of which of the following?",
            options: ["Scale up",
                "High Availability",
                "Scale out",
                "Performance Efficiency"],
            correctAnswer: [1],
            explanation: `Correct option:

High Availability

A system that is available is capable of delivering the designed functionality at a given point in time. Highly available systems are those that can withstand some measure of degradation while still remaining available. On AWS Cloud, you can run instances for an application in a multi-AZ deployment to achieve High Availability.

Incorrect options:

Scale out - The scale out (horizontal scaling) operation refers to an increase in capacity by adding more computers to the system. This is in contrast to a "scale up" operation, which is constrained to running its processes on only one computer; in such systems, the only way to increase performance is to add more resources into one computer in the form of faster (or more) CPUs, memory or storage. Horizontally scalable systems are oftentimes able to outperform vertically scalable systems by enabling parallel execution of workloads and distributing those across many different computers. Auto Scaling Group is an example of Horizontal Scaling on AWS.

Scale up - The scale up (vertical scaling) operation implies adding more resources (like CPU, RAM) to a single node or machine. Example- Resizing an instance of EC2.

Performance Efficiency - Performance Efficiency is the ability to use computing resources efficiently to meet system requirements and to maintain that efficiency as demand changes and technologies evolve.

References:

https://wa.aws.amazon.com/wat.concept.availability.en.html

https://wa.aws.amazon.com/wat.concept.horizontal-scaling.en.html`
        },
        {
            id: "paper-24-056",
            domain: "",
            topic: "",
            type: "multiple-select",
            question: "Which option is a common stakeholder role for the AWS Cloud Adoption Framework (AWS CAF) platform perspective? (Select two)",
            options: ["Engineer",
                "Chief Information Officer(CIO)",
                "Chief Technology Officer(CTO)",
                "Chief Data Officer(CDO)",
                "Chief Product Officer(CPO)"],
            correctAnswer: [0, 2],
            explanation: `Correct option:

Engineer

Chief Technology Officer (CTO)

The AWS Cloud Adoption Framework (AWS CAF) leverages AWS experience and best practices to help you digitally transform and accelerate your business outcomes through innovative use of AWS. AWS CAF identifies specific organizational capabilities that underpin successful cloud transformations. These capabilities provide best practice guidance that helps you improve your cloud readiness. AWS CAF groups its capabilities in six perspectives: Business, People, Governance, Platform, Security, and Operations.

The platform perspective focuses on accelerating the delivery of your cloud workloads via an enterprise-grade, scalable, hybrid cloud environment. It comprises seven capabilities shown in the following figure. Common stakeholders include Chief Technology Officer (CTO), technology leaders, architects, and engineers.

The AWS Cloud Adoption Framework (AWS CAF) platform perspective:  via - https://docs.aws.amazon.com/whitepapers/latest/overview-aws-cloud-adoption-framework/platform-perspective.html

Incorrect options:

Chief Product Officer (CPO)

Chief Data Officer (CDO)

Chief Information Officer (CIO)

These three options contradict the explanation provided above, so these options are incorrect.

References:

https://docs.aws.amazon.com/whitepapers/latest/overview-aws-cloud-adoption-framework/platform-perspective.html

https://d1.awsstatic.com/whitepapers/aws-caf-ebook.pdf`
        },
        {
            id: "paper-24-057",
            domain: "",
            topic: "",
            type: "single",
            question: "A financial services company wants to migrate from its on-premises data center to AWS Cloud. As a Cloud Practitioner, which AWS service would you recommend so that the company can compare the cost of running their IT infrastructure on-premises vs AWS Cloud?",
            options: ["AWS Pricing Calculator",
                "AWS Cost Explorer",
                "AWS Trusted Advisor",
                "AWS Budgets"],
            correctAnswer: [0],
            explanation: `Correct option:

AWS Pricing Calculator

AWS Pricing Calculator lets you explore AWS services and create an estimate for the cost of your use cases on AWS. You can model your solutions before building them, explore the price points and calculations behind your estimate, and find the available instance types and contract terms that meet your needs. This enables you to make informed decisions about using AWS. You can plan your AWS costs and usage or price out setting up a new set of instances and services. AWS Pricing Calculator can be accessed at https://calculator.aws/#/.

AWS also offers a complimentary service called Migration Evaluator (Formerly TSO Logic) to create data-driven business cases for AWS Cloud planning and migration.

Incorrect options:

AWS Trusted Advisor - AWS Trusted Advisor provides recommendations that help you follow AWS best practices. Trusted Advisor evaluates your account by using checks. These checks identify ways to optimize your AWS infrastructure, improve security and performance, reduce costs, and monitor service quotas. This service cannot be used to compare the cost of running the IT infrastructure on-premises vs AWS Cloud.

AWS Cost Explorer - AWS Cost Explorer has an easy-to-use interface that lets you visualize, understand, and manage your AWS costs and usage over time. AWS Cost Explorer includes a default report that helps you visualize the costs and usage associated with your top five cost-accruing AWS services, and gives you a detailed breakdown of all services in the table view. The reports let you adjust the time range to view historical data going back up to twelve months to gain an understanding of your cost trends. AWS Cost Explorer cannot be used to compare the cost of running the IT infrastructure on-premises vs AWS Cloud.

AWS Budgets - AWS Budgets gives the ability to set custom budgets that alert you when your costs or usage exceed (or are forecasted to exceed) your budgeted amount. You can also use AWS Budgets to set reservation utilization or coverage targets and receive alerts when your utilization drops below the threshold you define. Budgets can be created at the monthly, quarterly, or yearly level, and you can customize the start and end dates. You can further refine your budget to track costs associated with multiple dimensions, such as AWS service, linked account, tag, and others. AWS Budgets cannot be used to compare the cost of running the IT infrastructure on-premises vs AWS Cloud.

Reference:

https://calculator.aws/#/

https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/aws-pricingtco-tools.html

https://aws.amazon.com/migration-evaluator/`
        },
        {
            id: "paper-24-058",
            domain: "",
            topic: "",
            type: "multiple-select",
            question: "AWS Compute Optimizer delivers recommendations for which of the following AWS resources? (Select two)",
            options: ["Amazon Elastic Block Store(Amazon EBS), AWS Lambda functions",
                "Amazon Elastic Compute Cloud(Amazon EC2) instances, Amazon EC2 Auto Scaling groups",
                "Amazon Elastic File System(Amazon EFS), AWS Lambda functions",
                "AWS Lambda functions, Amazon Simple Storage Service(Amazon S3)",
                "Amazon Elastic Compute Cloud(Amazon EC2) instances, Amazon Elastic File System(Amazon EFS)"],
            correctAnswer: [0, 1],
            explanation: `Correct options:

Amazon Elastic Compute Cloud (Amazon EC2) instances, Amazon EC2 Auto Scaling groups

Amazon Elastic Block Store (Amazon EBS), AWS Lambda functions

AWS Compute Optimizer helps you identify the optimal AWS resource configurations, such as Amazon EC2 instance types, Amazon EBS volume configurations, and AWS Lambda function memory sizes, using machine learning to analyze historical utilization metrics. AWS Compute Optimizer delivers recommendations for selected types of EC2 instances, EC2 Auto Scaling groups, Amazon EBS volumes, and AWS Lambda functions.

AWS Compute Optimizer calculates an individual performance risk score for each resource dimension of the recommended instance, including CPU, memory, EBS throughput, EBS IOPS, disk throughput, disk throughput, network throughput, and network packets per second (PPS).

AWS Compute Optimizer provides EC2 instance type and size recommendations for EC2 Auto Scaling groups with a fixed group size, meaning desired, minimum, and maximum are all set to the same value and have no scaling policy attached.

AWS Compute Optimizer supports IOPS and throughput recommendations for General Purpose (SSD) (gp3) volumes and IOPS recommendations for Provisioned IOPS (io1 and io2) volumes.

AWS Compute Optimizer helps you optimize two categories of Lambda functions. The first category includes Lambda functions that may be over-provisioned in memory sizes. The second category includes compute-intensive Lambda functions that may benefit from additional CPU power.

Incorrect options:

Amazon Elastic Compute Cloud (Amazon EC2) instances, Amazon Elastic File System (Amazon EFS)

Amazon Elastic File System (Amazon EFS), AWS Lambda functions

AWS Lambda functions, Amazon Simple Storage Service (Amazon S3)

AWS Compute Optimizer does not provide optimization recommendations for S3 and EFS, so these options are incorrect.

Reference:

https://aws.amazon.com/compute-optimizer/faqs/`
        },
        {
            id: "paper-24-059",
            domain: "",
            topic: "",
            type: "single",
            question: "Which service gives a personalized view of the status of the AWS services that are part of your Cloud architecture so that you can quickly assess the impact on your business when AWS service(s) are experiencing issues?",
            options: ["Amazon Inspector",
                "AWS Health - Service Health Dashboard",
                "Amazon CloudWatch",
                "AWS Health - Your Account Health Dashboard"],
            correctAnswer: [3],
            explanation: `Correct option:

AWS Health - Your Account Health Dashboard

AWS Health - Your Account Health Dashboard provides alerts and remediation guidance when AWS is experiencing events that may impact you.

With AWS Health - Your Account Health Dashboard, alerts are triggered by changes in the health of your AWS resources, giving you event visibility, and guidance to help quickly diagnose and resolve issues.

You can check on this page https://phd.aws.amazon.com/phd/home to get current status information.

Incorrect options:

Amazon Inspector - Amazon Inspector is an automated security assessment service that helps improve the security and compliance of applications deployed on AWS. Amazon Inspector automatically assesses applications for exposure, vulnerabilities, and deviations from best practices. Amazon Inspector cannot be used to prevent Distributed Denial-of-Service (DDoS) attack. It cannot provide the status of your AWS resources.

Amazon CloudWatch - Amazon CloudWatch is a monitoring and observability service built for DevOps engineers, developers, site reliability engineers (SREs), and IT managers. CloudWatch provides data and actionable insights to monitor applications, respond to system-wide performance changes, optimize resource utilization, and get a unified view of operational health. This is an excellent service for building Resilient systems. Think resource performance monitoring, events, and alerts; think CloudWatch. It cannot provide the status of your AWS resources.

AWS Health - Service Health Dashboard - The AWS Health - Service Health Dashboard is the single place to learn about the availability and operations of AWS services. You can view the overall status of AWS services, and you can sign in to view personalized communications about your particular AWS account or organization.

You can check on this page https://health.aws.amazon.com/health/status to get current status information.

Exam Alert:

While the AWS Health - Service Health Dashboard displays the general status of AWS services; the AWS Health - Your Account Health Dashboard gives you a personalized view of the performance and availability of the AWS services underlying your AWS resources.

Reference:

https://docs.aws.amazon.com/health/latest/ug/what-is-aws-health.html`
        },
        {
            id: "paper-24-060",
            domain: "",
            topic: "",
            type: "single",
            question: "A company wants to improve the resiliency of its flagship application so it wants to move from its traditional database system to a managed AWS NoSQL database service to support active-active configuration in both the East and West US AWS regions. The active-active configuration with cross-region support is the prime criteria for any database solution that the company considers. Which AWS database service is the right fit for this requirement?",
            options: ["Amazon Aurora with multi - master clusters",
                "Amazon DynamoDB with global tables",
                "Amazon Relational Database Service(Amazon RDS) for MYSQL",
                "Amazon DynamoDB with DynamoDB Accelerator"],
            correctAnswer: [1],
            explanation: `Correct option:

Amazon DynamoDB with global tables

Amazon DynamoDB is a fully managed, serverless, key-value NoSQL database designed to run high-performance applications at any scale. DynamoDB offers built-in security, continuous backups, automated multi-region replication, in-memory caching, and data export tools.

DynamoDB global tables replicate data automatically across your choice of AWS Regions and automatically scale capacity to accommodate your workloads. With global tables, your globally distributed applications can access data locally in the selected regions to get single-digit millisecond read and write performance. DynamoDB offers active-active cross-region support that is needed for the company.

Incorrect options:

Amazon DynamoDB with DynamoDB Accelerator - DynamoDB Accelerator (DAX) is an in-memory cache that delivers fast read performance for your tables at scale by enabling you to use a fully managed in-memory cache. Using DAX, you can improve the read performance of your DynamoDB tables by up to 10 times—taking the time required for reads from milliseconds to microseconds, even at millions of requests per second. DAX does not offer active-active cross-Region configuration.

Amazon Aurora with multi-master clusters - Amazon Aurora (Aurora) is a fully managed relational database engine that's compatible with MySQL and PostgreSQL. With some workloads, Aurora can deliver up to five times the throughput of MySQL and up to three times the throughput of PostgreSQL without requiring changes to most of your existing applications. In a multi-master cluster, all DB instances have read/write capability. Aurora is not a NoSQL database, so this option is incorrect.

Amazon Relational Database Service (Amazon RDS) for MYSQL - Amazon Relational Database Service (Amazon RDS) makes it easy to set up, operate, and scale a relational database in the cloud. It provides cost-efficient and resizable capacity while automating time-consuming administration tasks such as hardware provisioning, database setup, patching and backups. It frees you to focus on your applications so you can give them the fast performance, high availability, security and compatibility they need. RDS is not a NoSQL database, so this option is incorrect.

References:

https://aws.amazon.com/dynamodb/features/

https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-multi-master.html`
        },
        {
            id: "paper-24-061",
            domain: "",
            topic: "",
            type: "single",
            question: "An IT company has a hybrid cloud architecture and it wants to centralize the server logs for its Amazon Elastic Compute Cloud (Amazon EC2) instances and on-premises servers. Which of the following is the MOST effective for this use-case?",
            options: ["Use Amazon CloudWatch Logs for both the Amazon Elastic Compute Cloud(Amazon EC2) instance and the on- premises servers",
                "Use AWS Lambda to send log data from Amazon Elastic Compute Cloud(Amazon EC2) instance as well as on - premises servers to Amazon CloudWatch Logs",
                "Use Amazon CloudWatch Logs for the Amazon Elastic Compute Cloud(Amazon EC2) instance and AWS CloudTrail for the on - premises servers",
                "Use AWS CloudTrail for the Amazon Elastic Compute Cloud(Amazon EC2) instance and Amazon CloudWatch Logs for the on - premises servers"],
            correctAnswer: [0],
            explanation: `Correct option:

Use Amazon CloudWatch Logs for both the Amazon Elastic Compute Cloud (Amazon EC2) instance and the on-premises servers

You can use Amazon CloudWatch Logs to monitor, store, and access your log files from Amazon Elastic Compute Cloud (Amazon EC2) instances, AWS CloudTrail, Route 53, and other sources such as on-premises servers.

Amazon CloudWatch Logs enables you to centralize the logs from all of your systems, applications, and AWS services that you use, in a single, highly scalable service. You can then easily view them, search them for specific error codes or patterns, filter them based on specific fields, or archive them securely for future analysis.

Incorrect options:

Use AWS Lambda to send log data from Amazon Elastic Compute Cloud (Amazon EC2) instance as well as on-premises servers to Amazon CloudWatch Logs

AWS Lambda lets you run code without provisioning or managing servers. You pay only for the compute time you consume. Lambda cannot be used to centralize the logs from Amazon Elastic Compute Cloud (Amazon EC2) instances and on-premises servers.

Use Amazon CloudWatch Logs for the Amazon Elastic Compute Cloud (Amazon EC2) instance and AWS CloudTrail for the on-premises servers

Use AWS CloudTrail for the Amazon Elastic Compute Cloud (Amazon EC2) instance and Amazon CloudWatch Logs for the on-premises servers

AWS CloudTrail is a service that enables governance, compliance, operational auditing, and risk auditing of your AWS account. With AWS CloudTrail, you can log, continuously monitor, and retain account activity related to actions across your AWS infrastructure. AWS CloudTrail provides event history of your AWS account activity, including actions taken through the AWS Management Console, AWS SDKs, command-line tools, and other AWS services. AWS CloudTrail cannot be used to centralize the server logs for Amazon Elastic Compute Cloud (Amazon EC2) instances or on-premises servers, so both these options are incorrect.

References:

https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html

https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AgentReference.html`
        },
        {
            id: "paper-24-062",
            domain: "",
            topic: "",
            type: "single",
            question: "A startup runs its proprietary application on docker containers. As a Cloud Practitioner, which AWS service would you recommend so that the startup can run containers and still have access to the underlying servers?",
            options: ["Amazon Elastic Container Service(Amazon ECS)",
                "AWS Fargate",
                "AWS Lambda",
                "Amazon Elastic Container Registry (Amazon ECR)"],
            correctAnswer: [0],
            explanation: `Correct option:

Amazon Elastic Container Service (Amazon ECS)

Amazon Elastic Container Service (Amazon ECS) is a highly scalable, fast, container management service that makes it easy to run, stop, and manage Docker containers on a cluster. This is not a fully managed service and you can manage the underlying servers yourself.

Incorrect options:

AWS Fargate - AWS Fargate is a serverless compute engine for containers. It works with both Amazon Elastic Container Service (Amazon ECS) and Amazon Elastic Kubernetes Service (Amazon EKS). AWS Fargate makes it easy for you to focus on building your applications. AWS Fargate removes the need to provision and manage servers, lets you specify and pay for resources per application, and improves security through application isolation by design. With AWS Fargate, you do not have access to the underlying servers, so this option is incorrect.

How AWS Fargate Works:  via - https://aws.amazon.com/fargate/

AWS Lambda - AWS Lambda is a compute service that lets you run code without provisioning or managing servers. AWS Lambda executes your code only when needed and scales automatically, from a few requests per day to thousands per second. AWS Lambda does not support running container applications.

Amazon Elastic Container Registry (Amazon ECR) - Amazon Elastic Container Registry (Amazon ECR) can be used to store, manage, and deploy Docker container images. Amazon Elastic Container Registry (Amazon ECR) eliminates the need to operate your container repositories. Amazon Elastic Container Registry (Amazon ECR) does not support running container applications.

Reference:

https://aws.amazon.com/fargate/`
        },
        {
            id: "paper-24-063",
            domain: "",
            topic: "",
            type: "single",
            question: "A silicon valley based healthcare startup stores anonymized patient health data on Amazon S3. The CTO further wants to ensure that any sensitive data on S3 is discovered and identified to prevent any sensitive data leaks. As a Cloud Practitioner, which AWS service would you recommend addressing this use-case?",
            options: ["Amazon Macie",
                "AWS Glue",
                "Amazon Polly",
                "AWS Secrets Manager"],
            correctAnswer: [0],
            explanation: `Correct option:

Amazon Macie

Amazon Macie is a fully managed data security and data privacy service that uses machine learning and pattern matching to discover and protect your sensitive data in AWS. Macie automatically provides an inventory of Amazon S3 buckets including a list of unencrypted buckets, publicly accessible buckets, and buckets shared with AWS accounts outside those you have defined in AWS Organizations. Then, Macie applies machine learning and pattern matching techniques to the buckets you select to identify and alert you to sensitive data, such as personally identifiable information (PII).

How Macie Works:  via - https://aws.amazon.com/macie/

Incorrect options:

AWS Glue - AWS Glue is a fully managed extract, transform, and load (ETL) service that makes it easy for customers to prepare and load their data for analytics. AWS Glue job is meant to be used for batch ETL data processing. It cannot be used to discover and protect your sensitive data in AWS.

Amazon Polly - Amazon Polly is a service that turns text into lifelike speech, allowing you to create applications that talk, and build entirely new categories of speech-enabled products. Polly's Text-to-Speech (TTS) service uses advanced deep learning technologies to synthesize natural sounding human speech. It cannot be used to discover and protect your sensitive data in AWS.

AWS Secrets Manager - AWS Secrets Manager helps you protect secrets needed to access your applications, services, and IT resources. The service enables you to easily rotate, manage, and retrieve database credentials, API keys, and other secrets throughout their lifecycle. Users and applications retrieve secrets with a call to Secrets Manager APIs, eliminating the need to hardcode sensitive information in plain text. It cannot be used to discover and protect your sensitive data in AWS.

Reference:

https://aws.amazon.com/macie/`
        },
        {
            id: "paper-24-064",
            domain: "",
            topic: "",
            type: "single",
            question: "Which of the following Amazon S3 storage classes takes the most time to retrieve data (also known as first byte latency)?",
            options: ["Amazon S3 Glacier Flexible Retrieval",
                "Amazon S3 Glacier Deep Archive",
                "Amazon S3 Intelligent - Tiering",
                "Amazon S3 Standard"],
            correctAnswer: [1],
            explanation: `Correct option:

Amazon S3 Glacier Deep Archive

Amazon S3 Glacier Deep Archive is Amazon S3’s lowest-cost storage class and supports long-term retention and digital preservation for data that may be accessed once or twice in a year. It is designed for customers — particularly those in highly-regulated industries, such as the Financial Services, Healthcare, and Public Sectors — that retain data sets for 7-10 years or longer to meet regulatory compliance requirements. Amazon S3 Glacier Deep Archive can also be used for backup and disaster recovery use cases. It has a retrieval time (first byte latency) of 12 to 48 hours.

Please review this illustration for Amazon S3 Storage Classes data retrieval times. You don't need to memorize the actual numbers, just remember that Amazon S3 Glacier Deep Archive takes the most time to retrieve data:  via - https://aws.amazon.com/s3/storage-classes/

Incorrect options:

Amazon S3 Standard - Amazon S3 Standard offers high durability, availability, and performance object storage for frequently accessed data. Amazon S3 Standard has a retrieval time (first byte latency) of milliseconds.

Amazon S3 Intelligent-Tiering - The Amazon S3 Intelligent-Tiering storage class is designed to optimize costs by automatically moving data to the most cost-effective access tier, without performance impact or operational overhead. It works by storing objects in two access tiers: one tier that is optimized for frequent access and another lower-cost tier that is optimized for infrequent access. Amazon S3 Intelligent-Tiering has a retrieval time (first byte latency) of milliseconds.

Amazon S3 Glacier Flexible Retrieval - Amazon S3 Glacier Flexible Retrieval delivers low-cost storage, up to 10% lower cost (than Amazon S3 Glacier Instant Retrieval), for archive data that is accessed 1—2 times per year and is retrieved asynchronously. For archive data that does not require immediate access but needs the flexibility to retrieve large sets of data at no cost, such as backup or disaster recovery use cases, Amazon S3 Glacier Flexible Retrieval (formerly Amazon S3 Glacier) is the ideal storage class.

Reference:

https://aws.amazon.com/s3/storage-classes/`
        },
        {
            id: "paper-24-065",
            domain: "",
            topic: "",
            type: "multiple-select",
            question: "Which of the following options are the benefits of using AWS Elastic Load Balancing (ELB)? (Select TWO)",
            options: ["Storage",
                "Agility",
                "Fault tolerance",
                "High availability",
                "Less costly"],
            correctAnswer: [2, 3],
            explanation: `Correct options:

High availability

Fault tolerance

Elastic Load Balancing (ELB) automatically distributes incoming application traffic across multiple targets, such as Amazon EC2 instances, containers, and IP addresses. It can handle the varying load of your application traffic in a single Availability Zone (AZ) or across multiple Availability Zones (AZs).

Elastic Load Balancing (ELB) offers three types of load balancers that all feature the high availability, automatic scaling, and robust security necessary to make your applications fault-tolerant: Application Load Balancer (best suited for HTTP and HTTPS traffic), Network Load Balancer (best suited for TCP traffic), and Classic Load Balancer.

Incorrect options:

Agility - Agility refers to new IT resources being only a click away, which means that you reduce the time to make those resources available to your developers from weeks to just minutes. AWS Elastic Load Balancing (ELB) does not help with agility.

Less costly - AWS Elastic Load Balancing (ELB) does not help with reducing costs.

Storage - AWS Elastic Load Balancing (ELB) does not offer storage benefits. It is not a storage-related service.

Reference:

https://aws.amazon.com/elasticloadbalancing/`
        }
    ]
})