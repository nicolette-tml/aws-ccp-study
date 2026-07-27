/* Architecting & Ecosystem (ARC) revision set — domain-aligned standalone questions.
   Registered to window.QUESTION_FILES so it loads over file:// without fetch().
   See aws-ccp-study-guide.html. Revision-only (no paperId). */
window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "arc",
  questions: [
    {
      id: "arc-001",
      domain: "ARC",
      topic: "well-architected",
      type: "single",
      question: "Which AWS pillar of the Well-Architected Framework focuses on the ability to run workloads effectively, gain insight into operations, and continuously improve processes?",
      options: ["Operational Excellence", "Performance Efficiency", "Reliability", "Cost Optimization"],
      correctAnswer: [0],
      explanation: "Operational Excellence covers running and monitoring systems to deliver business value and continually improving processes and procedures."
    },
    {
      id: "arc-002",
      domain: "ARC",
      topic: "migration-strategies",
      type: "single",
      question: "Which of the following is AWS Migration Strategy?",
      options: ["Auditability", "Replatforming", "Governance"],
      correctAnswer: [1],
      explanation: "Replatforming (also known as \"lift, tinker, and shift\") is one of the six AWS migration strategies (6 Rs), which involves making a few cloud optimizations without changing the core architecture. Auditability and Governance are not migration strategies but rather aspects of cloud management and compliance."
    },
    {
      id: "arc-003",
      domain: "ARC",
      topic: "cloud-adoption-framework",
      type: "single",
      question: "Which perspective of the AWS Cloud Adoption Framework focuses on minimizing the business risks?",
      options: ["People Perspective", "Business Perspective", "Operations Perspective", "Governance Perspective"],
      correctAnswer: [3],
      explanation: "The Governance Perspective of the AWS Cloud Adoption Framework focuses on minimizing business risks through skills and process alignment, ensuring that IT is aligned with business needs and managing risks. The Business Perspective focuses on business value, People on organizational change, and Operations on service delivery."
    },
    {
      id: "arc-004",
      domain: "ARC",
      topic: "well-architected",
      type: "single",
      question: "Which pillar of the AWS Well-Architected Framework focuses on recovering from service or infrastructure disruptions?",
      options: ["Operational excellence", "Reliability", "Performance efficiency"],
      correctAnswer: [1],
      explanation: "The Reliability pillar of the AWS Well-Architected Framework focuses on the ability of a system to recover from infrastructure or service disruptions and dynamically acquire computing resources to meet demand. Operational Excellence focuses on running and monitoring systems, while Performance Efficiency focuses on using computing resources efficiently."
    },
    {
      id: "arc-005",
      domain: "ARC",
      topic: "database-migration-service",
      type: "single",
      question: "Which AWS service would simplify the migration of database to AWS?",
      options: ["AWS Storage Gateway", "AWS Database Migration Service", "Amazon EC2", "Amazon AppStream 2.0"],
      correctAnswer: [1],
      explanation: "AWS Database Migration Service (DMS) simplifies migrating databases to AWS by supporting both homogeneous and heterogeneous database migrations with minimal downtime. Storage Gateway connects on-premises storage to AWS, EC2 is a compute service, and AppStream 2.0 is for application streaming, none of which specifically handle database migration."
    },
    {
      id: "arc-006",
      domain: "ARC",
      topic: "horizontal-scaling",
      type: "single",
      question: "Auto Scaling in EC2 and DynamoDB are examples of?",
      options: ["Horizontal scaling", "Vertical scaling"],
      correctAnswer: [0],
      explanation: "Auto Scaling in EC2 adds or removes instances to handle load, and DynamoDB Auto Scaling adjusts read/write throughput capacity in response to changing demand — both are examples of horizontal scaling (scaling out by adding more resources). Vertical scaling would mean increasing the size or capacity of a single resource, such as upgrading an EC2 instance type."
    },
    {
      id: "arc-007",
      domain: "ARC",
      topic: "well-architected",
      type: "single",
      question: "AWS Trusted Advisor can provide guidance against the 6 Well-Architected pillars and architectural best practices.",
      options: ["True", "False"],
      correctAnswer: [1],
      explanation: "False. AWS Trusted Advisor provides real-time guidance on best practices across five categories: Cost Optimization, Performance, Security, Fault Tolerance, and Service Limits. The AWS Well-Architected Tool is the service that reviews workloads against the six Well-Architected Framework pillars (Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability)."
    },
    {
      id: "arc-008",
      domain: "ARC",
      topic: "well-architected",
      type: "single",
      question: "Which of the following are design principles of Performance Efficiency?",
      options: ["Go global in minutes & experiment more often", "Analyze and attribute expenditure & stop spending money on data center operations", "Make frequent, small, reversible changes & anticipate failure", "Automate security best practices & keep away people from data"],
      correctAnswer: [0],
      explanation: "Go global in minutes and experiment more often are design principles of the Performance Efficiency pillar. The other options describe principles from different pillars: analyzing expenditure and stopping data center spending relate to Cost Optimization, making frequent small changes and anticipating failure relate to Reliability, and automating security and keeping people away from data relate to Security."
    },
    {
      id: "arc-009",
      domain: "ARC",
      topic: "apn",
      type: "single",
      question: "Which of the following is NOT an AWS Partner Network (APN) type?",
      options: ["APN Technology Partners", "APN Services Partners", "APN Consulting Partners", "APN Training Partners"],
      correctAnswer: [1],
      explanation: "APN Services Partners is not a real AWS Partner Network type. The actual APN partner types are APN Technology Partners (providing software solutions on AWS), APN Consulting Partners (helping customers design and build solutions), and APN Training Partners (delivering AWS training)."
    },
    {
      id: "arc-010",
      domain: "ARC",
      topic: "well-architected",
      type: "single",
      question: "Testing recovery procedures, stopping guessing capacity, and managing changes in automation are design principles of Performance Efficiency.",
      options: ["True", "False"],
      correctAnswer: [1],
      explanation: "False. Testing recovery procedures, stopping guessing capacity, and managing changes in automation are design principles of the Reliability pillar, not Performance Efficiency. Performance Efficiency design principles include democratizing advanced technologies, going global in minutes, using serverless architectures, experimenting more often, and mechanical sympathy."
    },
    {
      id: "arc-011",
      domain: "ARC",
      topic: "well-architected",
      type: "single",
      question: "Which AWS service is the key to Operational Excellence?",
      options: ["CloudFormation", "EC2", "OpsWork", "CodeDeploy"],
      correctAnswer: [0],
      explanation: "CloudFormation is the key service for Operational Excellence because it enables infrastructure as code, allowing you to prepare, operate, and evolve your infrastructure through code-based automation rather than manual processes. EC2 is compute infrastructure, OpsWorks is configuration management, and CodeDeploy handles application deployments, but none of these embody the operations-as-code principle as fundamentally as CloudFormation."
    },
    {
      id: "arc-012",
      domain: "ARC",
      topic: "well-architected",
      type: "single",
      question: "AWS Cost Explorer and AWS Trusted Advisor are services examples of which Well-Architected Framework pillar?",
      options: ["Security", "Operational Excellence", "Cost Optimization", "Performance Efficiency"],
      correctAnswer: [2],
      explanation: "AWS Cost Explorer and AWS Trusted Advisor are examples of the Cost Optimization pillar, which focuses on avoiding unnecessary costs and optimizing spending. Other Cost Optimization services include AWS Budgets and Cost and Usage Reports. Security, Operational Excellence, and Performance Efficiency are separate pillars with different service examples."
    },
    {
      id: "arc-013",
      domain: "ARC",
      topic: "well-architected",
      type: "single",
      question: "Implementing Security Groups, NACLs, KMS, or CloudTrail reflects which Well-Architected Framework Pillar?",
      options: ["Reliability", "Performance Efficiency", "Security", "Cost Optimization"],
      correctAnswer: [2],
      explanation: "Implementing Security Groups, NACLs, KMS, and CloudTrail reflects the Security pillar of the Well-Architected Framework. This pillar focuses on protecting information, systems, and assets through risk assessments and mitigation strategies including network controls, encryption, and audit logging. Reliability, Performance Efficiency, and Cost Optimization are distinct pillars with different focuses."
    }
  ]
});
