/* Security & Compliance (SEC) revision set — domain-aligned standalone questions.
   Registered to window.QUESTION_FILES so it loads over file:// without fetch().
   See aws-ccp-study-guide.html. Revision-only (no paperId). */
window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "sec",
  questions: [
    {
      id: "sec-001",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "Under the AWS Shared Responsibility Model, who is responsible for patching the guest operating system on an EC2 instance?",
      options: ["AWS", "The customer", "Both equally, split by AWS Support plan", "Neither — it is automatic"],
      correctAnswer: [1],
      explanation: "For EC2 (infrastructure as a service), AWS secures the underlying hardware/hypervisor, but the customer is responsible for guest OS patching, since they control the instance."
    },
    {
      id: "sec-002",
      domain: "SEC",
      topic: "encryption",
      type: "single",
      question: "Which AWS service allows you to centrally manage encryption keys used to protect your data?",
      options: ["AWS KMS", "AWS IAM", "AWS Config", "Amazon Macie"],
      correctAnswer: [0],
      explanation: "AWS Key Management Service (KMS) lets you create and control cryptographic keys used to encrypt data across AWS services."
    },
    {
      id: "sec-003",
      domain: "SEC",
      topic: "trusted-advisor",
      type: "single",
      question: "A company wants to receive continuous automated checks of their AWS account against security best practices, such as open security groups. Which service should they use?",
      options: ["AWS Trusted Advisor", "AWS Artifact", "AWS Budgets", "Amazon Inspector for networking"],
      correctAnswer: [0],
      explanation: "AWS Trusted Advisor inspects your environment and provides recommendations across cost optimization, performance, security, and fault tolerance."
    },
    {
      id: "sec-004",
      domain: "SEC",
      topic: "compliance",
      type: "single",
      question: "Where can a customer download AWS compliance reports, such as SOC and PCI documentation, to support their own audits?",
      options: ["AWS Trusted Advisor", "AWS Artifact", "AWS Config", "Amazon CloudWatch"],
      correctAnswer: [1],
      explanation: "AWS Artifact is the self-service portal for on-demand access to AWS compliance reports and select agreements."
    },
    {
      id: "sec-005",
      domain: "SEC",
      topic: "dos-ddos",
      type: "single",
      question: "Denial-of-Service (DoS) attack comes from different sources.",
      options: ["False", "True"],
      correctAnswer: [0],
      explanation: "A Denial-of-Service (DoS) attack comes from a single source attempting to overwhelm a system, not from different sources. When an attack comes from multiple sources, it is called a Distributed Denial-of-Service (DDoS) attack."
    },
    {
      id: "sec-006",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "Who is responsible for protecting the storage and database infrastructure in AWS Cloud?",
      options: ["AWS", "Customers"],
      correctAnswer: [0],
      explanation: "Under the AWS Shared Responsibility Model, AWS is responsible for security \"of\" the cloud, which includes protecting the physical infrastructure, hardware, software, networking, and facilities that run AWS services. Customers are responsible for security \"in\" the cloud, such as data encryption, access management, and application configuration."
    },
    {
      id: "sec-007",
      domain: "SEC",
      topic: "artifact",
      type: "single",
      question: "AWS Artifact is a service that provides access to AWS security and compliance reports.",
      options: ["True", "False"],
      correctAnswer: [0],
      explanation: "AWS Artifact is a self-service portal that provides on-demand access to AWS security and compliance reports, including SOC reports, PCI reports, and ISO certifications. This service helps customers demonstrate compliance with regulatory requirements and understand AWS security controls."
    },
    {
      id: "sec-008",
      domain: "SEC",
      topic: "shield",
      type: "single",
      question: "What does AWS Shield protects from?",
      options: ["Dos and DDoS attacks", "Infrastructure threats", "Software vulnerabilities"],
      correctAnswer: [0],
      explanation: "AWS Shield is a managed DDoS (Distributed Denial-of-Service) protection service that safeguards applications running on AWS from DoS and DDoS attacks. Shield Standard provides automatic protection at no additional cost, while Shield Advanced offers enhanced protection and 24/7 access to the AWS DDoS Response Team."
    },
    {
      id: "sec-009",
      domain: "SEC",
      topic: "waf",
      type: "single",
      question: "Based on application's network requests, AWS Web Application Firewall can block network traffic.",
      options: ["True", "False"],
      correctAnswer: [0],
      explanation: "AWS Web Application Firewall (WAF) can block network traffic based on application network requests by inspecting HTTP/HTTPS requests and applying customizable rules to filter malicious traffic, SQL injection attempts, cross-site scripting, and other common web exploits."
    },
    {
      id: "sec-010",
      domain: "SEC",
      topic: "kms",
      type: "single",
      question: "Which AWS service manages encryption and decryption of data?",
      options: ["AWS Key Management Service (AWS KMS)", "AWS Inspector", "AWS WAF", "AWS GuardDuty"],
      correctAnswer: [0],
      explanation: "AWS Key Management Service (KMS) manages encryption and decryption of data through creation and control of cryptographic keys. AWS Inspector assesses security vulnerabilities, WAF protects web applications from attacks, and GuardDuty provides threat detection—none of these manage encryption keys."
    },
    {
      id: "sec-011",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "Who is responsible of managing platform and customer data in the AWS Cloud?",
      options: ["AWS", "Customers"],
      correctAnswer: [1],
      explanation: "Under the AWS Shared Responsibility Model, customers are responsible for managing platform software (operating systems, application software) and all customer data, including encryption and access controls. AWS manages the underlying infrastructure, hardware, and facilities."
    },
    {
      id: "sec-012",
      domain: "SEC",
      topic: "data-at-rest",
      type: "single",
      question: "Data sitting on an RDS instance would be referred to as?",
      options: ["Data in transit", "Data at rest", "Encrypted data"],
      correctAnswer: [1],
      explanation: "Data at rest refers to data stored or archived on a device, such as data sitting on an RDS database instance. Data in transit refers to data moving between systems, and while data at rest may be encrypted, encryption is a protection mechanism rather than a classification of the data state itself."
    },
    {
      id: "sec-013",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "According to the Shared Responsibility Model, who is responsible for firewall and network configuration for EC2 Instances?",
      options: ["AWS", "The customer", "AWS and the customer"],
      correctAnswer: [1],
      explanation: "The customer is responsible for firewall and network configuration for EC2 instances, including security groups and network ACLs. Under the Shared Responsibility Model, customers are responsible for security IN the cloud, which includes server-side encryption, client-side data protection, and network configuration. AWS is responsible for security OF the cloud infrastructure itself."
    },
    {
      id: "sec-014",
      domain: "SEC",
      topic: "macie",
      type: "single",
      question: "Which of the following services can you use to discover and protect your sensitive data in AWS?",
      options: ["Macie", "Shield", "Artifact", "X-Ray"],
      correctAnswer: [0],
      explanation: "Amazon Macie is a security service that uses machine learning to automatically discover, classify, and protect sensitive data in AWS, such as personally identifiable information (PII) or intellectual property. Shield protects against DDoS attacks, Artifact provides compliance documentation, and X-Ray is for application tracing and debugging."
    },
    {
      id: "sec-015",
      domain: "SEC",
      topic: "detective",
      type: "single",
      question: "Which AWS service lets you quickly find the root of potential security issues to take faster actions?",
      options: ["Inspector", "Detective", "CloudWatch", "WAF"],
      correctAnswer: [1],
      explanation: "Amazon Detective makes it easy to analyze, investigate, and quickly identify the root cause of potential security issues or suspicious activities using machine learning and graph analysis. Inspector is an automated security assessment service that scans for vulnerabilities but does not perform root cause analysis, CloudWatch is for monitoring metrics and logs, and WAF protects web applications from exploits."
    },
    {
      id: "sec-016",
      domain: "SEC",
      topic: "waf",
      type: "single",
      question: "A company would like to protect its web applications from common web exploits that may affect availability, compromise security, or consume excessive resources. Which AWS service should they use?",
      options: ["Auto Scaling Groups (ASG)", "Shield", "CloudHSM", "Web Application Firewall (WAF)"],
      correctAnswer: [3],
      explanation: "AWS WAF (Web Application Firewall) is designed to protect web applications or APIs against common web exploits that may affect availability, compromise security, or consume excessive resources, such as SQL injection and cross-site scripting. Auto Scaling Groups manage capacity, Shield protects against DDoS attacks, and CloudHSM manages hardware security modules for encryption keys."
    },
    {
      id: "sec-017",
      domain: "SEC",
      topic: "artifact",
      type: "single",
      question: "Where can you find on-demand access to AWS compliance documentation and AWS agreements?",
      options: ["Artifact", "Personal Health Dashboard", "Secrets Manager", "Shared Responsibility Model"],
      correctAnswer: [0],
      explanation: "AWS Artifact is your central resource for compliance-related information, providing on-demand access to AWS compliance documentation and AWS agreements such as SOC reports, PCI compliance documents, and BAAs. Personal Health Dashboard shows service health events, Secrets Manager stores credentials, and Shared Responsibility Model is a concept rather than a service."
    },
    {
      id: "sec-018",
      domain: "SEC",
      topic: "penetration-testing",
      type: "single",
      question: "You can perform any kind of penetration testing on any AWS service without prior approval.",
      options: ["True", "False"],
      correctAnswer: [1],
      explanation: "This statement is false. Penetration testing is allowed without prior approval on only 8 specific AWS services, not all services. Prohibited activities include DDoS attacks, port flooding, and protocol flooding. Customers must follow AWS's penetration testing policy and request approval for any testing outside the permitted services."
    },
    {
      id: "sec-019",
      domain: "SEC",
      topic: "config",
      type: "single",
      question: "You want to record configurations and changes over time. Which service allows you to do this?",
      options: ["Config", "Inspector", "GuardDuty", "Secrets Manager"],
      correctAnswer: [0],
      explanation: "AWS Config is a service that enables you to assess, audit, and evaluate the configurations of your AWS resources over time, recording configuration changes and maintaining a history. Inspector is for security assessment of EC2 instances, GuardDuty is for threat detection, and Secrets Manager stores and rotates credentials."
    },
    {
      id: "sec-020",
      domain: "SEC",
      topic: "acm",
      type: "single",
      question: "A company would like to secure network communications using SSL & TLS certificates. Which AWS service can it use?",
      options: ["Certificate Manager (ACM)", "Secrets Manager", "Macie", "WAF"],
      correctAnswer: [0],
      explanation: "AWS Certificate Manager (ACM) is a service that lets you easily provision, manage, and deploy public and private SSL/TLS certificates for use with AWS services and your internal connected resources. Secrets Manager stores credentials and API keys, Macie discovers sensitive data, and WAF protects web applications from exploits."
    },
    {
      id: "sec-021",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "According to the Shared Responsibility Model, who is responsible for Patch Management?",
      options: ["AWS", "The customer", "AWS and the customer"],
      correctAnswer: [2],
      explanation: "Patch management is a shared control between AWS and the customer. AWS is responsible for patching and fixing flaws within the infrastructure (hypervisor, physical hardware, managed services), while customers are responsible for patching their guest operating systems and applications running on EC2 instances or containers."
    },
    {
      id: "sec-022",
      domain: "SEC",
      topic: "security-hub",
      type: "single",
      question: "You want to centrally automate security checks across several AWS accounts. Which AWS service can you use?",
      options: ["Macie", "Detective", "CloudTrail", "Security Hub"],
      correctAnswer: [3],
      explanation: "AWS Security Hub provides a comprehensive view of your security state across multiple AWS accounts, enabling centralized and automated security checks against security standards and best practices. Macie discovers sensitive data, Detective investigates security issues, and CloudTrail records API calls but does not perform centralized security checks."
    },
    {
      id: "sec-023",
      domain: "SEC",
      topic: "kms",
      type: "single",
      question: "Which of the following services is managed by AWS and is used to manage encryption keys?",
      options: ["CloudHSM", "KMS", "AWS Secrets Manager", "IAM"],
      correctAnswer: [1],
      explanation: "AWS KMS (Key Management Service) is a fully managed service that enables you to easily create and control the encryption keys used for cryptographic operations. CloudHSM provides dedicated hardware security modules but requires more customer management, Secrets Manager stores credentials and API keys rather than encryption keys, and IAM manages access control rather than encryption."
    },
    {
      id: "sec-024",
      domain: "SEC",
      topic: "inspector",
      type: "single",
      question: "A company would like to automate security on EC2 instances to assess security and vulnerabilities in these instances. Which AWS service should it use?",
      options: ["Config", "Trusted Advisor", "Inspector", "Systems Manager"],
      correctAnswer: [2],
      explanation: "Amazon Inspector is an automated security assessment service that helps improve the security and compliance of applications deployed on AWS by assessing EC2 instances for security vulnerabilities and deviations from best practices. Config tracks configuration changes, Trusted Advisor provides optimization recommendations across multiple categories, and Systems Manager manages and automates operational tasks."
    },
    {
      id: "sec-025",
      domain: "SEC",
      topic: "root-user",
      type: "single",
      question: "Which of the following actions does NOT require the root user?",
      options: ["Close your AWS account", "Change your AWS Support plan", "Register as a seller in the Reserved Instance Marketplace", "Access the billing dashboard"],
      correctAnswer: [3],
      explanation: "Accessing the billing dashboard does not require the root user. While by default only the root user can access billing, you can attach IAM policies to grant other IAM users access to billing information. The other options (closing accounts, changing support plans, and registering as a Reserved Instance seller) all require root user credentials."
    },
    {
      id: "sec-026",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "According to the Shared Responsibility Model, who is responsible for protecting hardware?",
      options: ["AWS", "The customer", "AWS and the customer"],
      correctAnswer: [0],
      explanation: "AWS is responsible for protecting hardware, including physical security of data centers, server infrastructure, and networking equipment. This falls under AWS's responsibility for security OF the cloud, which encompasses the infrastructure that runs all AWS services. Customers are responsible for security IN the cloud, such as their data, applications, and configurations."
    },
    {
      id: "sec-027",
      domain: "SEC",
      topic: "shield",
      type: "single",
      question: "Which AWS service's ONLY role is to safeguard running applications from DDoS attacks?",
      options: ["WAF", "Shield", "CloudFront", "KMS"],
      correctAnswer: [1],
      explanation: "AWS Shield is a managed DDoS (Distributed Denial of Service) protection service that safeguards applications running on AWS from DDoS attacks. WAF protects against web exploits beyond just DDoS, CloudFront is a CDN that can provide some DDoS mitigation but serves primarily as a content delivery service, and KMS manages encryption keys."
    },
    {
      id: "sec-028",
      domain: "SEC",
      topic: "guardduty",
      type: "single",
      question: "Which service is a threat detection service that continuously monitors for malicious activity and unauthorized behavior to protect your AWS accounts and workloads?",
      options: ["KMS", "WAF", "Inspector", "GuardDuty"],
      correctAnswer: [3],
      explanation: "Amazon GuardDuty is a threat detection service that continuously monitors for malicious activity and unauthorized behavior to protect your AWS accounts and workloads, using machine learning and threat intelligence feeds. KMS manages encryption keys, WAF protects web applications from exploits, and Inspector assesses EC2 instances for vulnerabilities but does not provide continuous threat monitoring."
    },
    {
      id: "sec-029",
      domain: "SEC",
      topic: "abuse-team",
      type: "single",
      question: "Which of the following options is NOT a situation where you should contact the AWS Abuse team?",
      options: ["DDoS attack from AWS-owned IP addresses", "Spam from AWS-owned IP addresses or AWS resources", "Hosting objectionable or copyrighted content on AWS", "Losing your MFA device"],
      correctAnswer: [3],
      explanation: "Losing your MFA device is not a situation where you should contact the AWS Abuse team; this is an account security issue you would resolve through AWS Support. The AWS Abuse team should be contacted for: spam from AWS resources, port scanning, DDoS attacks, intrusion attempts, hosting objectionable or copyrighted content, and distributing malware."
    }
  ]
});
