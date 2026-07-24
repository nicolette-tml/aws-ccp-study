/* Technology (TE) question set. Registered to window.QUESTION_FILES so it
   loads over file:// without fetch(). See aws-ccp-study-guide.html. */
window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "technology",
  questions: [
    {
      id: "technology-001",
      domain: "STG",
      topic: "efs",
      type: "single",
      question: "Which storage service is best suited for a POSIX-compliant, scalable file system that can be mounted concurrently by many Linux EC2 instances?",
      options: ["Amazon S3", "Amazon EFS", "Amazon EBS", "Amazon FSx for Windows File Server"],
      correctAnswer: [1],
      explanation: "Amazon EFS (Elastic File System) provides a shared, scalable NFS file system that many EC2 instances can mount at the same time."
    },
    {
      id: "technology-002",
      domain: "STG",
      topic: "ebs",
      type: "single",
      question: "Which storage option is directly attached to a single EC2 instance and behaves like a virtual hard drive?",
      options: ["Amazon S3", "Amazon EBS", "Amazon EFS", "Amazon Glacier"],
      correctAnswer: [1],
      explanation: "Amazon EBS (Elastic Block Store) provides block-level storage volumes attached to individual EC2 instances, similar to a traditional hard drive."
    },
    {
      id: "technology-003",
      domain: "STG",
      topic: "fsx",
      type: "single",
      question: "A media company needs a native, fully managed Windows file share supporting the SMB protocol for its Windows-based applications. Which service fits best?",
      options: ["Amazon EFS", "Amazon FSx for Windows File Server", "Amazon S3 with SMB gateway", "AWS Storage Gateway Volume mode"],
      correctAnswer: [1],
      explanation: "Amazon FSx for Windows File Server provides a fully managed native Windows file system built on SMB, ideal for Windows-based workloads."
    },
    {
      id: "technology-004",
      domain: "CMP",
      topic: "lambda",
      type: "single",
      question: "Which AWS compute service lets you run code without provisioning or managing servers, billed per request and execution duration?",
      options: ["Amazon EC2", "AWS Lambda", "Amazon Lightsail", "AWS Elastic Beanstalk"],
      correctAnswer: [1],
      explanation: "AWS Lambda is a serverless compute service; you upload code and it runs in response to events, and you're billed based on requests and compute time."
    },
    {
      id: "technology-005",
      domain: "ELB",
      topic: "elastic-load-balancing",
      type: "single",
      question: "Which service would you use to automatically distribute incoming application traffic across multiple EC2 instances in different Availability Zones?",
      options: ["Amazon Route 53", "Elastic Load Balancing", "AWS Auto Scaling", "Amazon CloudFront"],
      correctAnswer: [1],
      explanation: "Elastic Load Balancing (ELB) automatically distributes incoming traffic across multiple targets, such as EC2 instances, across one or more Availability Zones."
    }
  ]
});
