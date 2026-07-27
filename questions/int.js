/* Cloud Integration (INT) revision set — domain-aligned standalone questions.
   Registered to window.QUESTION_FILES so it loads over file:// without fetch().
   See aws-ccp-study-guide.html. Revision-only (no paperId). */
window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "int",
  questions: [
    {
      id: "int-001",
      domain: "INT",
      topic: "sqs",
      type: "single",
      question: "Which service sends and receives messages between application components?",
      options: ["AWS Snowmobile", "AWS Simple Queue Service (AWS SQS)", "AWS Lambda", "AWS CloudTrail"],
      correctAnswer: [1],
      explanation: "AWS Simple Queue Service (SQS) is a fully managed message queuing service that enables asynchronous communication between distributed application components by sending, storing, and receiving messages. Snowmobile is a physical data transfer service, Lambda is serverless compute, and CloudTrail is an audit logging service, none of which provide message queuing."
    },
    {
      id: "int-002",
      domain: "INT",
      topic: "amazon-mq",
      type: "single",
      question: "A company using Apache ActiveMQ is migrating to the cloud. Which AWS service can it use to easily set up and operate its message brokers in the cloud?",
      options: ["Amazon SQS", "Amazon SNS", "Amazon MQ", "Amazon Kinesis"],
      correctAnswer: [2],
      explanation: "Amazon MQ is a managed message broker service that supports Apache ActiveMQ and RabbitMQ, making it the ideal choice for migrating existing message broker workloads to AWS. Amazon SQS and SNS are AWS-native messaging services that do not support ActiveMQ protocols, and Amazon Kinesis is for real-time streaming data, not traditional message brokering."
    },
    {
      id: "int-003",
      domain: "INT",
      topic: "sns",
      type: "single",
      question: "Which service is a fully managed pub/sub messaging service that makes it easy to set up, operate, and send notifications from the cloud, using a push-based system?",
      options: ["Simple Notification Service (SNS)", "Simple Queue Service (SQS)", "Auto Scaling Groups (ASG)"],
      correctAnswer: [0],
      explanation: "Amazon Simple Notification Service (SNS) is a fully managed pub/sub messaging service that uses a push-based system to send notifications from the cloud to subscribers. Simple Queue Service (SQS) uses a pull-based system where consumers poll for messages, and Auto Scaling Groups are for compute capacity scaling, not messaging."
    },
    {
      id: "int-004",
      domain: "INT",
      topic: "kinesis",
      type: "single",
      question: "You can use Kinesis to perform real-time analysis from video streams.",
      options: ["True", "False"],
      correctAnswer: [0],
      explanation: "True. Amazon Kinesis makes it easy to collect, process, and analyze real-time streaming data, and Kinesis Video Streams specifically enables you to perform real-time analysis from video streams. Kinesis offers four services: Data Firehose, Data Analytics, Data Streams, and Video Streams."
    },
    {
      id: "int-005",
      domain: "INT",
      topic: "decoupling",
      type: "single",
      question: "Which principle is mainly applied when using Amazon SQS or Amazon SNS?",
      options: ["Scalability", "Automation", "Decouple your applications"],
      correctAnswer: [2],
      explanation: "Amazon SQS and SNS apply the principle of decoupling your applications, which means designing IT systems to reduce interdependencies so that a change or failure in one component does not cascade to other components. While these services enable scalability and can be automated, the primary architectural principle they embody is decoupling."
    },
    {
      id: "int-006",
      domain: "INT",
      topic: "sqs",
      type: "single",
      question: "Which service allows you to send, store, and receive messages between software components at any volume, without losing messages or requiring other services to be available, using a pull-based system?",
      options: ["Simple Notification Service (SNS)", "Simple Queue Service (SQS)", "Auto Scaling Groups (ASG)"],
      correctAnswer: [1],
      explanation: "Amazon Simple Queue Service (SQS) is a fully managed message queueing service that enables you to send, store, and receive messages between software components at any volume without losing messages, using a pull-based system where consumers poll the queue. Simple Notification Service (SNS) uses push-based delivery, and Auto Scaling Groups are for compute capacity scaling, not messaging."
    }
  ]
});
