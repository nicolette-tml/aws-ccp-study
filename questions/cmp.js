/* Other Compute (CMP) revision set — domain-aligned standalone questions.
   Registered to window.QUESTION_FILES so it loads over file:// without fetch().
   See aws-ccp-study-guide.html. Revision-only (no paperId). */
window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "cmp",
  questions: [
    {
      id: "cmp-001",
      domain: "CMP",
      topic: "lambda",
      type: "single",
      question: "Which AWS compute service lets you run code without provisioning or managing servers, billed per request and execution duration?",
      options: ["Amazon EC2", "AWS Lambda", "Amazon Lightsail", "AWS Elastic Beanstalk"],
      correctAnswer: [1],
      explanation: "AWS Lambda is a serverless compute service; you upload code and it runs in response to events, and you're billed based on requests and compute time."
    },
    {
      id: "cmp-002",
      domain: "CMP",
      topic: "elastic-beanstalk",
      type: "single",
      question: "AWS Elastic Beanstalk is a service that manages web infrastructure.",
      options: ["True", "False"],
      correctAnswer: [0],
      explanation: "AWS Elastic Beanstalk is a Platform-as-a-Service that automatically handles deployment, capacity provisioning, load balancing, scaling, and application health monitoring for web applications. You upload your code and Beanstalk manages the underlying infrastructure including EC2 instances, load balancers, and auto-scaling groups."
    },
    {
      id: "cmp-003",
      domain: "CMP",
      topic: "lambda",
      type: "single",
      question: "How is called a service that lets you run code without needing to think about servers?",
      options: ["AWS ECS", "AWS EC2 Auto Scaling", "AWS Lambda", "AWS Serverless"],
      correctAnswer: [2],
      explanation: "AWS Lambda is a serverless compute service that runs code without requiring you to provision or manage servers—you simply upload code and Lambda handles execution. ECS is container orchestration, EC2 Auto Scaling manages instance capacity, and AWS Serverless is not a specific service name."
    },
    {
      id: "cmp-004",
      domain: "CMP",
      topic: "containers",
      type: "single",
      question: "Containers are an essential concept in microservice architectures.",
      options: ["True", "False"],
      correctAnswer: [0],
      explanation: "Containers are indeed essential in microservice architectures because they package individual microservices with their dependencies, enabling independent deployment, scaling, and version management of each service component in a distributed application."
    },
    {
      id: "cmp-005",
      domain: "CMP",
      topic: "lambda",
      type: "single",
      question: "How do you get charged in AWS Lambda?",
      options: ["Per programming language", "Per number of functions", "Per call and per duration", "Per inactive time"],
      correctAnswer: [2],
      explanation: "AWS Lambda charges per request and compute time (duration). You pay for the number of function invocations and the execution time, not per programming language, number of functions, or inactive time."
    },
    {
      id: "cmp-006",
      domain: "CMP",
      topic: "fargate",
      type: "single",
      question: "You would like to launch Docker containers in AWS without worrying about provisioning or managing any infrastructure. The Docker containers will be used to host a heavy workloads to serve different types of requests. Some requests may need up to 30 minutes to be completed. Which AWS service should you use to run Docker containers in a Serverless way and satisfy the requirements?",
      options: ["ECS", "Fargate", "ECR", "Lambda"],
      correctAnswer: [1],
      explanation: "Fargate allows you to launch Docker containers on AWS without provisioning or managing infrastructure, making it fully serverless and suitable for long-running workloads up to 30 minutes. ECS requires you to manage EC2 instances, ECR is only a container registry for storing images, and Lambda has a maximum execution time of 15 minutes."
    },
    {
      id: "cmp-007",
      domain: "CMP",
      topic: "lightsail",
      type: "single",
      question: "A complete cloud beginner would like to create a simple application with predictable pricing. What service should this person use?",
      options: ["EC2", "Lambda", "Lightsail", "EasyStart"],
      correctAnswer: [2],
      explanation: "Amazon Lightsail is designed for cloud beginners and offers simple virtual private servers with predictable, low monthly pricing that includes compute, storage, data transfer, DNS management, and a static IP. EC2 has variable pricing, Lambda charges per invocation, and EasyStart is not a real AWS service."
    },
    {
      id: "cmp-008",
      domain: "CMP",
      topic: "docker",
      type: "single",
      question: "What is the name of the software development platform that allows you to run applications the same way, regardless of where they are run?",
      options: ["Dolphin", "Shark", "Docker", "ECS"],
      correctAnswer: [2],
      explanation: "Docker is a software development platform that allows applications to run consistently regardless of environment by packaging them in containers. ECS is an AWS orchestration service for Docker, while Dolphin and Shark are not container platforms."
    },
    {
      id: "cmp-009",
      domain: "CMP",
      topic: "lambda",
      type: "single",
      question: "How would you best describe \"event-driven\" in AWS Lambda?",
      options: ["Happens on a certain day", "Happens at a certain time", "Happens on a regular basis", "Happens when needed"],
      correctAnswer: [3],
      explanation: "Event-driven in AWS Lambda means functions are invoked when needed in response to triggers or events, rather than running on a schedule, at a certain time, or continuously."
    },
    {
      id: "cmp-010",
      domain: "CMP",
      topic: "ecs",
      type: "single",
      question: "Which AWS service allows you to launch Docker containers on AWS, but requires you to provision and maintain the infrastructure?",
      options: ["ECR", "EC2", "ECS", "Fargate"],
      correctAnswer: [2],
      explanation: "Amazon ECS (Elastic Container Service) allows you to launch Docker containers on AWS but requires you to provision and maintain the underlying EC2 infrastructure. Fargate is the serverless option, ECR is only a container registry, and EC2 doesn't provide container orchestration."
    },
    {
      id: "cmp-011",
      domain: "CMP",
      topic: "serverless",
      type: "single",
      question: "Which of the following statements is INCORRECT regarding the definition of the term \"serverless\"?",
      options: ["Serverless allows you to deploy functions as a service", "There are no servers", "You don’t need to manage servers", "Lambda is the serverless pioneer"],
      correctAnswer: [1],
      explanation: "The statement that there are no servers is incorrect. Serverless means you don't provision, manage, or see the servers, but they still exist behind the scenes managed by AWS."
    },
    {
      id: "cmp-012",
      domain: "CMP",
      topic: "lambda",
      type: "single",
      question: "Which of the following statements is NOT a feature of AWS Lambda?",
      options: ["Integration with the whole AWS suite of services", "Virtual functions", "Automated and continuous scaling", "Definition of a minimum and maximum of EC2 Instances running"],
      correctAnswer: [3],
      explanation: "Defining a minimum and maximum number of EC2 instances is a feature of Auto Scaling Groups, not AWS Lambda. Lambda provides virtual functions, integrates with AWS services, and scales automatically without instance management."
    },
    {
      id: "cmp-013",
      domain: "CMP",
      topic: "batch",
      type: "single",
      question: "A company needs to run thousands of jobs but would like to NOT manage the compute resources. What service can it use?",
      options: ["ECS", "EC2 Spot Instances", "EC2 Instances", "Batch"],
      correctAnswer: [3],
      explanation: "AWS Batch enables running hundreds of thousands of batch computing jobs without managing infrastructure, automatically provisioning the optimal compute resources based on job requirements. ECS and EC2 options require infrastructure management."
    },
    {
      id: "cmp-014",
      domain: "CMP",
      topic: "ecr",
      type: "single",
      question: "Where should you store your private Docker images so they can be run by ECS or Fargate?",
      options: ["Elastic Docker Registry", "Elastic Docker File Registry", "Elastic Container Registry", "Elastic Private Container Registry"],
      correctAnswer: [2],
      explanation: "Amazon Elastic Container Registry (ECR) is the AWS service for storing private Docker images that can be run by ECS or Fargate. The other options are not real AWS service names."
    },
    {
      id: "cmp-015",
      domain: "CMP",
      topic: "api-gateway",
      type: "single",
      question: "Which AWS serverless service can be used by developers to create APIs?",
      options: ["ECR", "Lambda", "API Gateway"],
      correctAnswer: [2],
      explanation: "Amazon API Gateway is a fully managed serverless service that allows developers to create, publish, maintain, monitor, and secure APIs at any scale. Lambda runs code serverlessly but doesn't itself create APIs, and ECR is a container registry."
    }
  ]
});
