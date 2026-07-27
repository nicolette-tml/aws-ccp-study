/* VPC & Networking (VPC) revision set — domain-aligned standalone questions.
   Registered to window.QUESTION_FILES so it loads over file:// without fetch().
   See aws-ccp-study-guide.html. Revision-only (no paperId). */
window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "vpc",
  questions: [
    {
      id: "vpc-001",
      domain: "VPC",
      topic: "networking",
      type: "single",
      question: "Which AWS service is primarily used to provision a logically isolated section of the AWS Cloud where you can launch resources in a virtual network you define?",
      options: ["AWS Direct Connect", "Amazon VPC", "AWS Transit Gateway", "Amazon Route 53"],
      correctAnswer: [1],
      explanation: "Amazon VPC (Virtual Private Cloud) lets you define your own isolated virtual network, including subnets, route tables, and gateways."
    },
    {
      id: "vpc-002",
      domain: "VPC",
      topic: "vpc-peering",
      type: "single",
      question: "A virtual private cloud (VPC) peering connection can be established only between two VPCs.",
      options: ["True", "False"],
      correctAnswer: [0],
      explanation: "True. A VPC peering connection is a one-to-one networking connection between exactly two VPCs, enabling traffic to route between them using private IP addresses as if they were in the same network."
    },
    {
      id: "vpc-003",
      domain: "VPC",
      topic: "dns",
      type: "single",
      question: "DNS stands for \"Data Name System\".",
      options: ["True", "False"],
      correctAnswer: [1],
      explanation: "DNS stands for Domain Name System, not Data Name System. DNS translates human-readable domain names (like example.com) into IP addresses that computers use to identify each other on networks."
    },
    {
      id: "vpc-004",
      domain: "VPC",
      topic: "nat-gateway",
      type: "single",
      question: "Your private subnets need to connect to the Internet while still remaining private. Which AWS-managed VPC component allows you to do this?",
      options: ["NAT Instances", "Internet Gateway", "Security Groups", "NAT Gateways"],
      correctAnswer: [3],
      explanation: "NAT Gateways allow instances in private subnets to access the Internet while remaining private, and are fully managed by AWS. Internet Gateways enable communication between VPCs and the Internet but do not maintain the privacy of subnets, Security Groups are stateful firewalls at the instance level, and NAT Instances are customer-managed alternatives that require more maintenance."
    },
    {
      id: "vpc-005",
      domain: "VPC",
      topic: "subnet-types",
      type: "single",
      question: "A public subnet is accessible from the Internet while a private subnet is not accessible from the Internet.",
      options: ["Yes", "No, all subnets are accessible from the Internet", "No, all subnets are not accessible from the Internet"],
      correctAnswer: [0],
      explanation: "This statement is true. A public subnet has a route to an Internet Gateway, making resources in it accessible from the Internet when they have public IPs. A private subnet does not have a route to an Internet Gateway, so resources in it cannot be directly accessed from the Internet."
    },
    {
      id: "vpc-006",
      domain: "VPC",
      topic: "nacl",
      type: "single",
      question: "Which type of firewall has both ALLOW and DENY rules and operates at the subnet level?",
      options: ["Network Access Control List (NACL)", "Web Application Firewall (WAF)", "Security Groups", "GuardDuty"],
      correctAnswer: [0],
      explanation: "A Network Access Control List (NACL) is an optional layer of security for your VPC that acts as a firewall for controlling traffic in and out of one or more subnets, supporting both ALLOW and DENY rules. Security Groups only support ALLOW rules and operate at the instance level, WAF protects web applications from exploits, and GuardDuty is a threat detection service."
    },
    {
      id: "vpc-007",
      domain: "VPC",
      topic: "transit-gateway",
      type: "single",
      question: "You would like to connect hundreds of VPCs and your on-premises data centers together. Which AWS service allows you to do link all these together efficiently?",
      options: ["Site-to-Site VPN", "Transit Gateway", "Internet Gateway", "Direct Connect"],
      correctAnswer: [1],
      explanation: "Transit Gateway connects thousands of VPCs and on-premises networks together in a single gateway, acting as a central hub. Site-to-Site VPN connects on-premises to AWS over the public internet but does not interconnect VPCs, Direct Connect provides dedicated private connectivity from on-premises to AWS but does not connect VPCs to each other, and Internet Gateway only provides internet access for VPCs."
    },
    {
      id: "vpc-008",
      domain: "VPC",
      topic: "vpc-peering",
      type: "single",
      question: "A company needs two VPCs to communicate with each other. What can they use?",
      options: ["VPC Endpoints", "AWS Direct Connect", "Internet Gateway", "VPC Peering"],
      correctAnswer: [3],
      explanation: "VPC Peering creates a networking connection between two VPCs using AWS's private network, allowing them to communicate as if they were on the same network. VPC Endpoints connect VPCs to AWS services privately, AWS Direct Connect links on-premises data centers to AWS, and Internet Gateway provides internet access rather than VPC-to-VPC communication."
    },
    {
      id: "vpc-009",
      domain: "VPC",
      topic: "vpc",
      type: "single",
      question: "You need a logically isolated section of AWS, where you can launch AWS resources in a private network that you define. What should you use?",
      options: ["Subnets", "Availability Zones", "A VPC", "NAT Instances"],
      correctAnswer: [2],
      explanation: "A Virtual Private Cloud (VPC) is a virtual network dedicated to your AWS account that is logically isolated from other virtual networks in the AWS Cloud, where you can launch AWS resources in a private network that you define. Subnets are subdivisions within a VPC, Availability Zones are physical data center locations, and NAT Instances are used for outbound internet connectivity from private subnets."
    },
    {
      id: "vpc-010",
      domain: "VPC",
      topic: "direct-connect",
      type: "single",
      question: "A company needs to have a private, secure, and fast connection between its on-premises data centers and the AWS Cloud. Which connection should they use?",
      options: ["AWS Connect", "Site-to-Site VPN", "VPC Peering", "AWS Direct Connect"],
      correctAnswer: [3],
      explanation: "AWS Direct Connect establishes a dedicated private network connection from your on-premises data centers to AWS, providing private, secure, and fast connectivity. Site-to-Site VPN connects on-premises to AWS but travels over the public internet rather than a private connection, VPC Peering connects VPCs together but not on-premises networks, and AWS Connect is not a networking service."
    },
    {
      id: "vpc-011",
      domain: "VPC",
      topic: "internet-gateway",
      type: "single",
      question: "Your VPC needs to connect with the Internet. Which VPC component can help?",
      options: ["NAT Gateways", "NAT Instances", "Network ACL", "Internet Gateway"],
      correctAnswer: [3],
      explanation: "An Internet Gateway is a horizontally scaled, redundant, and highly available VPC component that allows communication between your VPC and the internet. NAT Gateways and NAT Instances enable private subnets to access the internet while staying private, and Network ACLs are subnet-level firewalls rather than internet connectivity components."
    }
  ]
});
