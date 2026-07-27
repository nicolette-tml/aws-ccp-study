/* Other AWS Services (OTH) revision set — domain-aligned standalone questions.
   Registered to window.QUESTION_FILES so it loads over file:// without fetch().
   See aws-ccp-study-guide.html. Revision-only (no paperId). */
window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "oth",
  questions: [
    {
      id: "oth-001",
      domain: "OTH",
      topic: "snowmobile",
      type: "single",
      question: "Which AWS storage service is designed to transfer petabytes of data in and out of the cloud?",
      options: ["AWS Snowmobile", "AWS Redshift", "AWS S3"],
      correctAnswer: [0],
      explanation: "AWS Snowmobile is a massive exabyte-scale data transfer service using a 45-foot shipping container truck to move up to 100 petabytes of data physically into or out of AWS. Redshift is a data warehouse and S3 is object storage—neither are designed for physical bulk data migration at this scale."
    },
    {
      id: "oth-002",
      domain: "OTH",
      topic: "marketplace",
      type: "single",
      question: "What does AWS Marketplace allows you to do?",
      options: ["AWS Marketplace lets you list and sell software", "AWS Marketplace lets you see the cost analysis of all AWS Cloud Services", "AWS Marketplace lets you list all AWS Cloud Services"],
      correctAnswer: [0],
      explanation: "AWS Marketplace is a digital catalog where third-party vendors can list and sell software solutions, and customers can discover, purchase, and deploy software that runs on AWS. It is not a cost analysis tool or a catalog of AWS services themselves."
    },
    {
      id: "oth-003",
      domain: "OTH",
      topic: "appstream",
      type: "single",
      question: "You would like to access desktop applications through a browser. Which AWS service would you use?",
      options: ["Outposts", "WorkSpaces", "AppStream 2.0", "EC2 Instance Connect"],
      correctAnswer: [2],
      explanation: "Amazon AppStream 2.0 is a fully managed application streaming service that provides users instant access to desktop applications through a browser from anywhere. WorkSpaces provisions full virtual desktops rather than streaming individual applications through a browser."
    },
    {
      id: "oth-004",
      domain: "OTH",
      topic: "device-farm",
      type: "single",
      question: "Which AWS service can be used to test your application across real desktop browsers and mobile devices?",
      options: ["IoT Core", "AppStream 2.0", "WorkSpaces", "Device Farm"],
      correctAnswer: [3],
      explanation: "AWS Device Farm is an application testing service that lets you test web and mobile apps across real desktop browsers and mobile devices without provisioning testing infrastructure. IoT Core connects IoT devices, while AppStream and WorkSpaces are for desktop streaming and provisioning."
    },
    {
      id: "oth-005",
      domain: "OTH",
      topic: "iot-core",
      type: "single",
      question: "Which AWS service is serverless and lets you connect billions of devices to the AWS Cloud?",
      options: ["Transit Gateway", "Connect", "Elastic Transcoder", "IoT Core"],
      correctAnswer: [3],
      explanation: "AWS IoT Core is a serverless service that lets you securely connect billions of IoT devices to the AWS Cloud and to one another without provisioning or managing servers. Transit Gateway connects VPCs and on-premises networks, Amazon Connect is a cloud-based contact center service, and Elastic Transcoder is a media transcoding service — none of these connect IoT devices."
    },
    {
      id: "oth-006",
      domain: "OTH",
      topic: "backup-disaster-recovery",
      type: "single",
      question: "CloudEndure Disaster Recovery is used to centrally automate backups across AWS services while AWS Backup is used to quickly and easily recover servers into AWS.",
      options: ["True", "False"],
      correctAnswer: [1],
      explanation: "This statement is false because the services are described in reverse. AWS Backup is the centralized service that automates backups across AWS services, while CloudEndure Disaster Recovery is designed to quickly recover physical, virtual, and cloud-based servers into AWS with minimal downtime and data loss."
    },
    {
      id: "oth-007",
      domain: "OTH",
      topic: "workspaces",
      type: "single",
      question: "A hybrid company would like to provision desktops to their employees so they can access securely both the AWS Cloud and their data centers. Which AWS service can help?",
      options: ["WorkSpaces", "AppStream 2.0", "Site-to-Site VPN", "Sumerian"],
      correctAnswer: [0],
      explanation: "Amazon WorkSpaces is a fully managed, secure cloud desktop service that can provision Windows or Linux desktops in minutes and scale to thousands of users, allowing secure access to both AWS Cloud resources and on-premises data centers. AppStream 2.0 only streams applications, not full desktops, and Site-to-Site VPN is a network connectivity service."
    }
  ]
});
