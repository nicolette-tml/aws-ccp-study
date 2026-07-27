/* Elastic Load Balancing & Auto Scaling (ELB) revision set — domain-aligned standalone questions.
   Registered to window.QUESTION_FILES so it loads over file:// without fetch().
   See aws-ccp-study-guide.html. Revision-only (no paperId). */
window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "elb",
  questions: [
    {
      id: "elb-001",
      domain: "ELB",
      topic: "scaling",
      type: "single",
      question: "Which of the following is an example of vertical scaling?",
      options: ["Adding more EC2 instances behind a load balancer", "Increasing the instance size (e.g., t3.medium to t3.xlarge) of a single EC2 instance", "Distributing traffic across multiple Regions", "Adding read replicas to a database"],
      correctAnswer: [1],
      explanation: "Vertical scaling means increasing the resources (CPU/RAM) of a single instance, as opposed to horizontal scaling which adds more instances."
    },
    {
      id: "elb-002",
      domain: "ELB",
      topic: "elastic-load-balancing",
      type: "single",
      question: "Which service would you use to automatically distribute incoming application traffic across multiple EC2 instances in different Availability Zones?",
      options: ["Amazon Route 53", "Elastic Load Balancing", "AWS Auto Scaling", "Amazon CloudFront"],
      correctAnswer: [1],
      explanation: "Elastic Load Balancing (ELB) automatically distributes incoming traffic across multiple targets, such as EC2 instances, across one or more Availability Zones."
    },
    {
      id: "elb-003",
      domain: "ELB",
      topic: "high-availability",
      type: "single",
      question: "What is the main purpose of High Availability in the Cloud?",
      options: ["Increase scalability", "Application thriving even in case of a disaster", "Access on computers and smartphones", "Handle greater loads by launching EC2 instances based on the demand"],
      correctAnswer: [1],
      explanation: "High Availability means designing applications to continue functioning even during disasters by running in at least two Availability Zones, ensuring the application survives a data center loss. While it complements horizontal scaling, its primary purpose is resilience and disaster survival, not scalability."
    },
    {
      id: "elb-004",
      domain: "ELB",
      topic: "network-load-balancer",
      type: "single",
      question: "Which AWS offered Load Balancer should you use to handle hundreds of thousands of connections with low latency?",
      options: ["Application Load Balancer", "Network Load Balancer", "Elastic Load Balancer"],
      correctAnswer: [1],
      explanation: "Network Load Balancer can handle millions of requests per second with low latency, operating at Layer 4 to efficiently load-balance TCP, UDP, and TLS traffic with ultra-high performance. Application Load Balancer operates at Layer 7 for HTTP/HTTPS traffic, while Elastic Load Balancer is not a specific AWS service type."
    },
    {
      id: "elb-005",
      domain: "ELB",
      topic: "vertical-scaling",
      type: "single",
      question: "Changing an EC2 Instance Type from a t3a.medium to a t3a.2xlarge is an example of?",
      options: ["Horizontal scaling", "High Availability", "Agility", "Vertical scaling"],
      correctAnswer: [3],
      explanation: "Vertical scaling means increasing the size or capacity of a single instance. Changing from a t3a.medium to a t3a.2xlarge is a size increase, upgrading the compute power of the same instance rather than adding more instances horizontally."
    },
    {
      id: "elb-006",
      domain: "ELB",
      topic: "auto-scaling-group",
      type: "single",
      question: "What can you use to handle quickly and automatically the changing load on your websites and applications by adding compute resources?",
      options: ["An Elastic Load Balancer", "A bigger instance type", "An Auto Scaling Group", "Health Checks on your EC2 Instances"],
      correctAnswer: [2],
      explanation: "An Auto Scaling Group can automatically and quickly scale-in and scale-out to match changing load on applications by adding or removing compute resources. A bigger instance type would be manual vertical scaling, an ELB distributes traffic but doesn't add resources, and health checks only monitor instance status."
    },
    {
      id: "elb-007",
      domain: "ELB",
      topic: "auto-scaling-group",
      type: "single",
      question: "Which of the following statements is INCORRECT regarding Auto Scaling Groups?",
      options: ["Replace unhealthy instances", "Are cost-effective by running at optimal capacity", "Automatically register new instances to a load balancer", "Automatically changing the EC2 Instances Types"],
      correctAnswer: [3],
      explanation: "Auto Scaling Groups cannot automatically change EC2 instance types on the fly; they can only add or remove instances of the same type. ASGs do replace unhealthy instances, run cost-effectively at optimal capacity, and automatically register new instances to load balancers."
    },
    {
      id: "elb-008",
      domain: "ELB",
      topic: "application-load-balancer",
      type: "single",
      question: "Which Load Balancer is best suited for HTTP/HTTPS load balancing traffic?",
      options: ["Network Load Balancer", "Classic Load Balancer", "Elastic Load Balancer", "Application Load Balancer"],
      correctAnswer: [3],
      explanation: "Application Load Balancer is best suited for HTTP and HTTPS load balancing, operating at Layer 7 to handle web traffic. Network Load Balancer operates at Layer 4 for ultra-high performance TCP/UDP traffic, Classic Load Balancer is legacy, and Elastic Load Balancer is not a specific service type."
    },
    {
      id: "elb-009",
      domain: "ELB",
      topic: "auto-scaling-strategies",
      type: "single",
      question: "Which of the following is NOT an Auto Scaling Strategy?",
      options: ["Manual Scaling", "Dynamic Scaling", "Active Scaling", "Predictive Scaling"],
      correctAnswer: [2],
      explanation: "Active Scaling is not a valid Auto Scaling strategy. AWS Auto Scaling strategies include Manual Scaling, Dynamic Scaling (Simple/Step Scaling, Target Tracking Scaling, Scheduled Scaling), and Predictive Scaling that adjusts capacity based on demand patterns."
    },
    {
      id: "elb-010",
      domain: "ELB",
      topic: "auto-scaling-group",
      type: "single",
      question: "Which AWS service offers easy horizontal scaling of compute capacity?",
      options: ["EBS", "AMI", "IAM", "ASG"],
      correctAnswer: [3],
      explanation: "Auto Scaling Groups (ASG) offer horizontal scaling by adding or removing EC2 instances based on demand, making it easy to scale compute capacity out and in. EBS is block storage, AMI is a machine image, and IAM manages access and permissions."
    },
    {
      id: "elb-011",
      domain: "ELB",
      topic: "load-balancer-features",
      type: "single",
      question: "Which of the following statements is NOT a feature of Load Balancers?",
      options: ["Do regular health checks to your instances", "Spread load across multiple downstream instances", "Handle failures of downstream instances", "Back-end autoscaling"],
      correctAnswer: [3],
      explanation: "Load Balancers cannot provide back-end autoscaling; that capability is provided by Auto Scaling Groups. Load Balancers do perform regular health checks on instances, spread load across multiple downstream instances, and handle failures by redirecting traffic to healthy instances."
    }
  ]
});
