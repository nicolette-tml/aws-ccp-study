/* Cloud Monitoring (MON) revision set — domain-aligned standalone questions.
   Registered to window.QUESTION_FILES so it loads over file:// without fetch().
   See aws-ccp-study-guide.html. Revision-only (no paperId). */
window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "mon",
  questions: [
    {
      id: "mon-001",
      domain: "MON",
      topic: "cloudwatch",
      type: "single",
      question: "Which sentence best describes AWS CloudWatch?",
      options: ["CloudWatch monitors your account and recommends you cost optimization and performance improvement actions.", "CloudWatch is a service that logs your AWS environment Actions. It is used to create events that describe how your application is being used.", "CloudWatch is a monitoring service that monitors your resources, and configures automatic alarms."],
      correctAnswer: [2],
      explanation: "AWS CloudWatch is a monitoring and observability service that collects metrics, logs, and events from AWS resources, and allows you to set alarms that automatically trigger actions based on defined thresholds. The first option describes Trusted Advisor, and the second describes CloudTrail, which logs API calls rather than monitoring metrics."
    },
    {
      id: "mon-002",
      domain: "MON",
      topic: "cloudtrail",
      type: "single",
      question: "Which AWS service do you need to use to get complete history of user activity?",
      options: ["AWS CloudWatch", "AWS TrustedAdvisor", "AWS CloudTrail"],
      correctAnswer: [2],
      explanation: "AWS CloudTrail provides a complete history of user activity and API calls made within your AWS account, recording who did what, when, and from where. CloudWatch monitors performance metrics and logs, while Trusted Advisor provides best practice recommendations—neither tracks user activity history."
    },
    {
      id: "mon-003",
      domain: "MON",
      topic: "cloudwatch-alarms",
      type: "single",
      question: "Which CloudWatch feature would you use to trigger notifications when a metric reaches a threshold you specify?",
      options: ["CloudWatch Events", "CloudWatch Logs", "CloudWatch Alarms", "CloudWatch Triggers"],
      correctAnswer: [2],
      explanation: "CloudWatch Alarms allow you to watch CloudWatch metrics and receive notifications when the metrics fall outside the high or low thresholds that you configure. CloudWatch Events (now EventBridge) is for event-driven workflows, CloudWatch Logs is for log aggregation, and CloudWatch Triggers is not an actual feature."
    },
    {
      id: "mon-004",
      domain: "MON",
      topic: "x-ray",
      type: "single",
      question: "Which AWS service helps developers analyze and debug production as well as distributed applications?",
      options: ["CloudWatch", "X-Ray", "Service Health Dashboard", "CloudTrail"],
      correctAnswer: [1],
      explanation: "AWS X-Ray helps developers analyze and debug production and distributed applications, such as those built using a microservices architecture, by providing end-to-end tracing and request analysis. CloudWatch monitors metrics and logs, Service Health Dashboard shows AWS service status, and CloudTrail records API calls for auditing."
    },
    {
      id: "mon-005",
      domain: "MON",
      topic: "account-health-dashboard",
      type: "single",
      question: "Which AWS service provides alerts and remediation guidance when AWS is experiencing events that may impact you?",
      options: ["AWS Service Health Dashboard", "Amazon CloudWatch", "AWS Account Health Dashboard", "AWS CloudTrail"],
      correctAnswer: [2],
      explanation: "AWS Account Health Dashboard (formerly Personal Health Dashboard) provides alerts and remediation guidance when AWS is experiencing events that may impact your specific account and resources. AWS Service Health Dashboard shows the general status of all AWS services but does not provide personalized alerts for your account."
    },
    {
      id: "mon-006",
      domain: "MON",
      topic: "cloudwatch",
      type: "single",
      question: "You need to set up metrics monitoring for every service in AWS. Which service would you use?",
      options: ["CloudTrail", "X-Ray", "CloudWatch", "Personal Health Dashboard"],
      correctAnswer: [2],
      explanation: "Amazon CloudWatch is a monitoring service for AWS cloud resources and applications that allows you to collect and track metrics, monitor log files, and set alarms for every AWS service. CloudTrail is for API call auditing, X-Ray is for application debugging, and Personal Health Dashboard provides service health alerts but not metrics monitoring."
    },
    {
      id: "mon-007",
      domain: "MON",
      topic: "cloudtrail",
      type: "single",
      question: "Which service allows you to inspect, audit, and record events and API calls made within your AWS account?",
      options: ["X-Ray", "CloudWatch", "CloudTrail"],
      correctAnswer: [2],
      explanation: "AWS CloudTrail is a service that records API calls and events made within your AWS account and delivers log files to your S3 bucket, enabling governance, compliance, operational auditing, and risk auditing. X-Ray is for application debugging and tracing, and CloudWatch is for metrics and log monitoring, not API call auditing."
    },
    {
      id: "mon-008",
      domain: "MON",
      topic: "codeguru",
      type: "single",
      question: "Which AWS service automatically analyzes code and provides performance recommendations?",
      options: ["X-Ray", "CodePipeline", "CodeGuru"],
      correctAnswer: [2],
      explanation: "Amazon CodeGuru is a developer tool that uses machine learning to automatically analyze code and provide intelligent recommendations to improve code quality and identify an application's most expensive lines of code. X-Ray is for distributed tracing, and CodePipeline is for CI/CD automation, neither providing automated code analysis and performance recommendations."
    },
    {
      id: "mon-009",
      domain: "MON",
      topic: "cloudwatch-logs",
      type: "single",
      question: "How would you describe Amazon CloudWatch Logs?",
      options: ["A single, highly scalable service that centralizes the logs from all of your systems, applications, and AWS services that you use.", "A service that provides a real-time stream of system events that describe changes in AWS resources.", "A service that enables governance, compliance, operational auditing, and risk auditing of your AWS account.", "A service that lets you run code without provisioning or managing servers."],
      correctAnswer: [0],
      explanation: "Amazon CloudWatch Logs is a single, highly scalable service that centralizes the logs from all of your systems, applications, and AWS services. EventBridge (formerly CloudWatch Events) provides event streams, CloudTrail enables governance and auditing, and Lambda runs serverless code."
    },
    {
      id: "mon-010",
      domain: "MON",
      topic: "cloudtrail",
      type: "single",
      question: "If a resource is deleted in AWS, which service should you use to investigate first?",
      options: ["CloudTrail", "CloudWatch Logs", "Personal Health Dashboard"],
      correctAnswer: [0],
      explanation: "CloudTrail records the history of events and API calls made within your AWS account, making it the first service to investigate when determining who or what deleted a resource. CloudWatch Logs aggregates application and system logs but does not track API calls, and Personal Health Dashboard shows service health status, not API activity."
    }
  ]
});
