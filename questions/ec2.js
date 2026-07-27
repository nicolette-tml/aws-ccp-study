/* EC2: Virtual Machines (EC2) revision set — domain-aligned standalone questions.
   Registered to window.QUESTION_FILES so it loads over file:// without fetch().
   See aws-ccp-study-guide.html. Revision-only (no paperId). */
window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "ec2",
  questions: [
    {
      id: "ec2-001",
      domain: "EC2",
      topic: "ec2",
      type: "single",
      question: "Which AWS service provides resizable compute capacity in the cloud, designed to help developers with web-scale computing?",
      options: ["Amazon Elastic Compute Cloud (Amazon EC2)", "Amazon Simple Storage Service (Amazon S3)", "Amazon SageMaker"],
      correctAnswer: [0],
      explanation: "Amazon EC2 provides resizable compute capacity in the cloud and is designed specifically to help developers with web-scale computing by offering virtual servers. S3 is object storage, not compute, and SageMaker is a machine learning service rather than general-purpose compute."
    },
    {
      id: "ec2-002",
      domain: "EC2",
      topic: "ec2-free-tier",
      type: "single",
      question: "Windows and Linux Amazon EC2 instances have Free Tier eligible instance types",
      options: ["True", "False"],
      correctAnswer: [0],
      explanation: "True. Both Windows and Linux EC2 instances have Free Tier eligible instance types, such as the t2.micro or t3.micro instances, allowing new AWS customers to use certain instance types at no charge for the first 12 months."
    },
    {
      id: "ec2-003",
      domain: "EC2",
      topic: "ec2",
      type: "single",
      question: "What is AWS EC2?",
      options: ["AWS EC2 is a virtual server in the AWS Cloud", "AWS EC2 is a data center", "AWS EC2 is a serverless compute service", "AWS EC2 is a resource monitoring service"],
      correctAnswer: [0],
      explanation: "AWS EC2 (Elastic Compute Cloud) provides resizable virtual servers in the AWS Cloud that you can configure with different CPU, memory, storage, and networking capacity. It is not a physical data center, not serverless (Lambda is serverless), and not a monitoring service (CloudWatch monitors resources)."
    },
    {
      id: "ec2-004",
      domain: "EC2",
      topic: "ec2-pricing",
      type: "single",
      question: "With AWS EC2 you only pay for the compute time that you use.",
      options: ["True", "False"],
      correctAnswer: [0],
      explanation: "With Amazon EC2, you only pay for the compute time when instances are running (per-second or per-hour billing depending on instance type). When you stop or terminate an instance, you stop incurring compute charges, though you may still pay for attached EBS storage."
    },
    {
      id: "ec2-005",
      domain: "EC2",
      topic: "ec2-purchasing",
      type: "single",
      question: "Which EC2 Purchasing Option can provide the biggest discount, but is not suitable for critical jobs or databases?",
      options: ["Reserved Instances", "Convertible Instances", "Dedicated Hosts", "Spot Instances"],
      correctAnswer: [3],
      explanation: "Spot Instances offer the biggest discount (up to 90% off On-Demand pricing) but can be interrupted by AWS with a two-minute warning when capacity is needed, making them unsuitable for critical jobs or databases. Reserved Instances and Convertible Instances provide discounts with guaranteed availability, while Dedicated Hosts are for compliance and licensing but offer no significant discount."
    },
    {
      id: "ec2-006",
      domain: "EC2",
      topic: "security-groups",
      type: "single",
      question: "Which network security tool can you use to control traffic in and out of EC2 Instances?",
      options: ["Network Access Control List (NACL)", "Identity and Management Access (IAM)", "GuardDuty", "Security Groups"],
      correctAnswer: [3],
      explanation: "Security Groups are virtual firewalls that control inbound and outbound traffic at the EC2 instance level. NACLs operate at the subnet level rather than instance level, IAM manages permissions for AWS services, and GuardDuty is a threat detection service."
    },
    {
      id: "ec2-007",
      domain: "EC2",
      topic: "shared-responsibility",
      type: "single",
      question: "Under the Shared Responsibility Model, who is responsible for operating-system patches and updates on EC2 Instances?",
      options: ["The customer", "AWS", "Both AWS and the customer"],
      correctAnswer: [0],
      explanation: "Under the Shared Responsibility Model, the customer is responsible for operating system patches and updates on EC2 instances, as well as data security, security group rules, and application configuration. AWS is responsible for the underlying infrastructure, hypervisor, and physical security."
    },
    {
      id: "ec2-008",
      domain: "EC2",
      topic: "ec2-purchasing",
      type: "single",
      question: "How long can you reserve an EC2 Reserved Instance?",
      options: ["1 or 3 years", "2 or 4 years", "6 months or 1 year", "Anytime between 1 and 3 years."],
      correctAnswer: [0],
      explanation: "EC2 Reserved Instances can be reserved for 1 year or 3 years only. These are the only two commitment term options available, providing significant discounts compared to On-Demand pricing in exchange for the capacity reservation commitment."
    },
    {
      id: "ec2-009",
      domain: "EC2",
      topic: "ec2-instance-types",
      type: "single",
      question: "A company would like to deploy a high-performance computing (HPC) application on EC2. Which EC2 instance type should it choose?",
      options: ["Compute Optimized", "Storage Optimized", "Memory Optimized", "General Purpose"],
      correctAnswer: [0],
      explanation: "Compute Optimized instances are designed for high-performance computing (HPC) applications with high-performance processors, ideal for batch processing, media transcoding, scientific modeling, and machine learning workloads. Storage Optimized is for high IOPS, Memory Optimized is for in-memory databases, and General Purpose balances compute, memory, and networking."
    },
    {
      id: "ec2-010",
      domain: "EC2",
      topic: "ec2-purchasing",
      type: "single",
      question: "Which of the following is NOT an EC2 Instance Purchasing Option?",
      options: ["Spot Instances", "Reserved Instances", "On-demand Instances", "Connect Instances"],
      correctAnswer: [3],
      explanation: "Connect Instances is not a real EC2 purchasing option. The valid EC2 purchasing options include On-Demand Instances (pay per use), Reserved Instances (1 or 3 year commitment), Spot Instances (bid for unused capacity), Savings Plans, and Dedicated Hosts/Instances."
    },
    {
      id: "ec2-011",
      domain: "EC2",
      topic: "ec2-purchasing",
      type: "single",
      question: "Which EC2 Purchasing Option should you use for an application you plan on running on a server continuously for 1 year?",
      options: ["Reserved Instances", "Spot Instances", "On-demand Instances", "Convertible Instances"],
      correctAnswer: [0],
      explanation: "Reserved Instances are the best choice for continuous workloads running for 1 or 3 years, offering up to 72% discount compared to On-Demand pricing. Spot Instances can be interrupted and are unsuitable for continuous workloads, On-Demand has no discount, and Convertible Instances are a type of Reserved Instance with flexibility to change instance families."
    }
  ]
});
