/* Cloud Concepts (CC) question set. Registered to window.QUESTION_FILES so it
   loads over file:// without fetch(). See aws-ccp-study-guide.html. */
window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "cloud-concepts",
  questions: [
    {
      id: "cloud-concepts-001",
      domain: "ARC",
      topic: "well-architected",
      type: "single",
      question: "Which AWS pillar of the Well-Architected Framework focuses on the ability to run workloads effectively, gain insight into operations, and continuously improve processes?",
      options: ["Operational Excellence", "Performance Efficiency", "Reliability", "Cost Optimization"],
      correctAnswer: [0],
      explanation: "Operational Excellence covers running and monitoring systems to deliver business value and continually improving processes and procedures."
    },
    {
      id: "cloud-concepts-002",
      domain: "CLD",
      topic: "cloud-benefits",
      type: "single",
      question: "A company wants to shift IT spending from a large upfront capital investment to a variable, pay-as-you-go model. Which cloud benefit does this describe?",
      options: ["Economies of scale", "Trade capital expense for variable expense", "Increased speed and agility", "Global reach in minutes"],
      correctAnswer: [1],
      explanation: "Paying only for what you use, instead of investing heavily in data centers upfront, is the 'trade capex for opex' benefit of cloud computing."
    },
    {
      id: "cloud-concepts-003",
      domain: "GLB",
      topic: "availability-zones",
      type: "single",
      question: "What is the main advantage of deploying workloads across multiple AWS Availability Zones within a Region?",
      options: ["Lower data transfer costs", "Higher fault tolerance and availability", "Access to more AWS services", "Reduced IAM complexity"],
      correctAnswer: [1],
      explanation: "Availability Zones are isolated locations within a Region; spreading resources across them protects applications from a single data center failure."
    },
    {
      id: "cloud-concepts-004",
      domain: "ELB",
      topic: "scaling",
      type: "single",
      question: "Which of the following is an example of vertical scaling?",
      options: ["Adding more EC2 instances behind a load balancer", "Increasing the instance size (e.g., t3.medium to t3.xlarge) of a single EC2 instance", "Distributing traffic across multiple Regions", "Adding read replicas to a database"],
      correctAnswer: [1],
      explanation: "Vertical scaling means increasing the resources (CPU/RAM) of a single instance, as opposed to horizontal scaling which adds more instances."
    },
    {
      id: "cloud-concepts-005",
      domain: "VPC",
      topic: "networking",
      type: "single",
      question: "Which AWS service is primarily used to provision a logically isolated section of the AWS Cloud where you can launch resources in a virtual network you define?",
      options: ["AWS Direct Connect", "Amazon VPC", "AWS Transit Gateway", "Amazon Route 53"],
      correctAnswer: [1],
      explanation: "Amazon VPC (Virtual Private Cloud) lets you define your own isolated virtual network, including subnets, route tables, and gateways."
    }
  ]
});
