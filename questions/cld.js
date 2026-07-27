/* Cloud Computing (CLD) revision set — domain-aligned standalone questions.
   Registered to window.QUESTION_FILES so it loads over file:// without fetch().
   See aws-ccp-study-guide.html. Revision-only (no paperId). */
window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "cld",
  questions: [
    {
      id: "cld-001",
      domain: "CLD",
      topic: "cloud-benefits",
      type: "single",
      question: "A company wants to shift IT spending from a large upfront capital investment to a variable, pay-as-you-go model. Which cloud benefit does this describe?",
      options: ["Economies of scale", "Trade capital expense for variable expense", "Increased speed and agility", "Global reach in minutes"],
      correctAnswer: [1],
      explanation: "Paying only for what you use, instead of investing heavily in data centers upfront, is the 'trade capex for opex' benefit of cloud computing."
    },
    {
      id: "cld-002",
      domain: "CLD",
      topic: "cloud-computing-definition",
      type: "single",
      question: "Which statement accurately describes cloud computing?",
      options: ["Hardware is kept in a location other than a company’s building.", "Code runs in several places at the same time.", "IT resources are delivered over the internet, on demand, with pay-as-you-go pricing."],
      correctAnswer: [2],
      explanation: "Cloud computing is the on-demand delivery of IT resources over the internet with pay-as-you-go pricing, allowing organizations to access compute, storage, and other services without upfront capital investment. While cloud resources may be in remote locations and code can run distributed, these are characteristics rather than the core definition of cloud computing."
    },
    {
      id: "cld-003",
      domain: "CLD",
      topic: "region-selection",
      type: "single",
      question: "Which of the following options is NOT a point of consideration when choosing an AWS Region?",
      options: ["Compliance with data governance", "Latency", "Capacity availability", "Pricing"],
      correctAnswer: [2],
      explanation: "Capacity availability is NOT a consideration when choosing an AWS Region because AWS provides virtually unlimited capacity in the cloud. The four main considerations are: compliance with data governance and legal requirements, proximity to customers for lower latency, available services and features within a Region, and pricing differences between Regions."
    },
    {
      id: "cld-004",
      domain: "CLD",
      topic: "pricing-fundamentals",
      type: "single",
      question: "Which are the 3 pricing fundamentals of the AWS Cloud?",
      options: ["Compute, Storage, and Data transfer in the AWS Cloud", "Compute Networking, and Data transfer out of the AWS Cloud", "Compute, Storage, and Data transfer out of the AWS Cloud", "Storage, Functions, and Data transfer in the AWS Cloud"],
      correctAnswer: [2],
      explanation: "The three fundamental pricing components in AWS are Compute (for processing power), Storage (for data storage), and Data transfer out of the AWS Cloud (outbound data transfer charges). Data transfer into AWS and between services within the same Region is typically free."
    },
    {
      id: "cld-005",
      domain: "CLD",
      topic: "regions-azs",
      type: "single",
      question: "AWS Regions are composed of?",
      options: ["Two or more Edge Locations", "One or more discrete data centers", "Three or more Availability Zones"],
      correctAnswer: [2],
      explanation: "AWS Regions consist of three or more Availability Zones within a geographical area. Each Availability Zone is one or more discrete data centers with redundant power, networking, and connectivity, isolated from failures in other zones. Edge Locations are separate and used for content delivery."
    },
    {
      id: "cld-006",
      domain: "CLD",
      topic: "acceptable-use-policy",
      type: "single",
      question: "What is NOT authorized to do on AWS according to the AWS Acceptable Use Policy?",
      options: ["Building a gaming application", "Deploying a website", "Run analytics on stolen content", "Backup your data"],
      correctAnswer: [2],
      explanation: "Running analytics on stolen content violates the AWS Acceptable Use Policy. AWS prohibits illegal, harmful, or fraudulent activities, including processing stolen, fraudulent, or illegally obtained content. Building applications, deploying websites, and backing up data are all legitimate uses of AWS services."
    },
    {
      id: "cld-007",
      domain: "CLD",
      topic: "shared-responsibility",
      type: "single",
      question: "What defines the distribution of responsibilities for security in the AWS Cloud?",
      options: ["AWS Pricing Fundamentals", "The Shared Responsibility Model", "AWS Acceptable Use Policy", "The AWS Management Console"],
      correctAnswer: [1],
      explanation: "The Shared Responsibility Model defines the distribution of security responsibilities between AWS and the customer. AWS is responsible for security of the cloud (infrastructure, hardware, facilities), while customers are responsible for security in the cloud (data, applications, operating systems, network configuration)."
    },
    {
      id: "cld-008",
      domain: "CLD",
      topic: "availability-zones",
      type: "single",
      question: "Which Global Infrastructure identity is composed of one or more discrete data centers with redundant power, networking, and connectivity, and are used to deploy infrastructure?",
      options: ["Edge Locations", "Availability Zones", "Regions"],
      correctAnswer: [1],
      explanation: "Availability Zones are composed of one or more discrete data centers with redundant power, networking, and connectivity, and are used to deploy infrastructure. Regions contain multiple Availability Zones, while Edge Locations are separate endpoints used primarily for content caching and delivery."
    },
    {
      id: "cld-009",
      domain: "CLD",
      topic: "global-vs-regional-services",
      type: "single",
      question: "Which of the following services has a global scope?",
      options: ["EC2", "IAM", "Lambda", "Rekognition"],
      correctAnswer: [1],
      explanation: "IAM is a global service that encompasses all AWS Regions, meaning IAM users, groups, roles, and policies are available across all Regions without needing to be recreated. EC2, Lambda, and Rekognition are regional services that must be configured separately in each Region where you want to use them."
    },
    {
      id: "cld-010",
      domain: "CLD",
      topic: "cloud-characteristics",
      type: "single",
      question: "Which of the following is NOT one of the Five Characteristics of Cloud Computing?",
      options: ["Rapid elasticity and scalability", "Multi-tenancy and resource pooling", "Dedicated Support Agent to help you deploy applications", "On-demand self service"],
      correctAnswer: [2],
      explanation: "A dedicated support agent to help deploy applications is NOT one of the Five Characteristics of Cloud Computing. Cloud computing is based on self-service, so users provision and manage resources without human interaction from the service provider. The five characteristics are: on-demand self-service, broad network access, resource pooling, rapid elasticity, and measured service."
    },
    {
      id: "cld-011",
      domain: "CLD",
      topic: "cloud-service-models",
      type: "single",
      question: "You ONLY want to manage Applications and Data. Which type of Cloud Computing model should you use?",
      options: ["On-premises", "Infrastructure as a Service (IaaS)", "Software as a Service (SaaS)", "Platform as a Service (PaaS)"],
      correctAnswer: [3],
      explanation: "Platform as a Service (PaaS) allows you to manage only Applications and Data while the cloud provider handles the underlying infrastructure, runtime, middleware, and operating system. IaaS requires managing more layers including OS and runtime, while SaaS manages everything for you, and on-premises requires managing all layers."
    },
    {
      id: "cld-012",
      domain: "CLD",
      topic: "pay-as-you-go",
      type: "single",
      question: "What is the pricing model of Cloud Computing?",
      options: ["Discounts over time", "Pay-as-you-go pricing", "Pay once a year", "Flat-rate pricing"],
      correctAnswer: [1],
      explanation: "Cloud Computing uses a pay-as-you-go pricing model where you are only charged for the resources you actually consume. This eliminates upfront costs and allows you to scale resources up or down based on demand, paying only for what you use rather than flat-rate or annual pricing."
    },
    {
      id: "cld-013",
      domain: "CLD",
      topic: "cloud-advantages",
      type: "single",
      question: "Which of the following is NOT an advantage of Cloud Computing?",
      options: ["Trade capital expense (CAPEX) for operational expense (OPEX)", "Train your employees less", "Go global in minutes", "Stop spending money running and maintaining data centers"],
      correctAnswer: [1],
      explanation: "Training your employees less is NOT an advantage of Cloud Computing; in fact, you must train employees more to use cloud services effectively. The actual advantages include trading capital expense for operational expense, going global in minutes, stopping data center spending, benefiting from massive economies of scale, and increasing speed and agility."
    },
    {
      id: "cld-014",
      domain: "CLD",
      topic: "cloud-definition",
      type: "single",
      question: "Which of the following is the definition of Cloud Computing?",
      options: ["Rapidly develop, test and launch software applications", "Automatic and quick ability to acquire resources as you need them and release resources when you no longer need them", "On-demand availability of computer system resources, especially data storage (cloud storage) and computing power, without direct active management by the user", "Change resource types when needed"],
      correctAnswer: [2],
      explanation: "Cloud Computing is defined as the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user. This definition encompasses the core concept that users can access computing resources over the internet without managing physical infrastructure."
    },
    {
      id: "cld-015",
      domain: "CLD",
      topic: "hybrid-cloud",
      type: "single",
      question: "A company would like to benefit from the advantages of the Public Cloud but would like to keep sensitive assets in its own infrastructure. Which deployment model should the company use?",
      options: ["Private Cloud", "Public Cloud", "Hybrid Cloud"],
      correctAnswer: [2],
      explanation: "A Hybrid Cloud deployment model allows companies to benefit from the flexibility, scalability, and on-demand access of the Public Cloud while keeping sensitive assets and infrastructure on-premises. This provides a balance between public cloud advantages and private infrastructure control for security and compliance needs."
    }
  ]
});
