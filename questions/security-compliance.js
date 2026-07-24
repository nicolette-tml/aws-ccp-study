/* Security & Compliance (SC) question set. Registered to window.QUESTION_FILES
   so it loads over file:// without fetch(). See aws-ccp-study-guide.html. */
window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "security-compliance",
  questions: [
    {
      id: "security-compliance-001",
      domain: "SEC",
      topic: "shared-responsibility",
      type: "single",
      question: "Under the AWS Shared Responsibility Model, who is responsible for patching the guest operating system on an EC2 instance?",
      options: ["AWS", "The customer", "Both equally, split by AWS Support plan", "Neither — it is automatic"],
      correctAnswer: [1],
      explanation: "For EC2 (infrastructure as a service), AWS secures the underlying hardware/hypervisor, but the customer is responsible for guest OS patching, since they control the instance."
    },
    {
      id: "security-compliance-002",
      domain: "SEC",
      topic: "encryption",
      type: "single",
      question: "Which AWS service allows you to centrally manage encryption keys used to protect your data?",
      options: ["AWS KMS", "AWS IAM", "AWS Config", "Amazon Macie"],
      correctAnswer: [0],
      explanation: "AWS Key Management Service (KMS) lets you create and control cryptographic keys used to encrypt data across AWS services."
    },
    {
      id: "security-compliance-003",
      domain: "SEC",
      topic: "trusted-advisor",
      type: "single",
      question: "A company wants to receive continuous automated checks of their AWS account against security best practices, such as open security groups. Which service should they use?",
      options: ["AWS Trusted Advisor", "AWS Artifact", "AWS Budgets", "Amazon Inspector for networking"],
      correctAnswer: [0],
      explanation: "AWS Trusted Advisor inspects your environment and provides recommendations across cost optimization, performance, security, and fault tolerance."
    },
    {
      id: "security-compliance-004",
      domain: "IAM",
      topic: "root-user",
      type: "single",
      question: "What is the AWS best practice for the AWS account root user?",
      options: ["Use it for all daily administrative tasks", "Share its credentials with the operations team", "Enable MFA and avoid using it for everyday tasks", "Disable MFA to simplify automated deployments"],
      correctAnswer: [2],
      explanation: "AWS recommends enabling multi-factor authentication on the root user, locking away its credentials, and using IAM users/roles for daily tasks instead."
    },
    {
      id: "security-compliance-005",
      domain: "SEC",
      topic: "compliance",
      type: "single",
      question: "Where can a customer download AWS compliance reports, such as SOC and PCI documentation, to support their own audits?",
      options: ["AWS Trusted Advisor", "AWS Artifact", "AWS Config", "Amazon CloudWatch"],
      correctAnswer: [1],
      explanation: "AWS Artifact is the self-service portal for on-demand access to AWS compliance reports and select agreements."
    }
  ]
});
