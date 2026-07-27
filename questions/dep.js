/* Deploying & Managing at Scale (DEP) revision set — domain-aligned standalone questions.
   Registered to window.QUESTION_FILES so it loads over file:// without fetch().
   See aws-ccp-study-guide.html. Revision-only (no paperId). */
window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "dep",
  questions: [
    {
      id: "dep-001",
      domain: "DEP",
      topic: "cdk",
      type: "single",
      question: "A developer would like to deploy infrastructure on AWS but only knows Python. Which AWS service can assist him?",
      options: ["Software Development Kit (SDK)", "Cloud Development Kit (CDK)", "CloudFormation", "CodeBuild"],
      correctAnswer: [1],
      explanation: "AWS Cloud Development Kit (CDK) allows developers to define cloud infrastructure using familiar programming languages like Python, TypeScript, Java, and C#, which are then synthesized into CloudFormation templates. CloudFormation uses JSON/YAML, SDK is for interacting with AWS services programmatically, and CodeBuild is for building code."
    },
    {
      id: "dep-002",
      domain: "DEP",
      topic: "codeartifact",
      type: "single",
      question: "Which of the following services can a developer use to store code dependencies?",
      options: ["CodeBuild", "CodeCommit", "CodeDeploy", "CodeArtifact"],
      correctAnswer: [3],
      explanation: "AWS CodeArtifact is a fully managed artifact repository service for securely storing, publishing, and sharing software packages and code dependencies. CodeBuild compiles code, CodeCommit is source control, and CodeDeploy automates deployments."
    },
    {
      id: "dep-003",
      domain: "DEP",
      topic: "codecommit",
      type: "single",
      question: "You are a software developer working on a project with your team. You need a secure and reliable version control system to store, share, and collaborate your code with the team. Which AWS service can help the developers?",
      options: ["CodeDeploy", "CodeCommit", "CodePipeline", "Elastic Beanstalk"],
      correctAnswer: [1],
      explanation: "AWS CodeCommit is a secure, scalable, managed source control service that provides version control and makes it easy for teams to collaborate on code. CodeDeploy handles deployments, CodePipeline orchestrates CI/CD workflows, and Elastic Beanstalk is a PaaS deployment service."
    },
    {
      id: "dep-004",
      domain: "DEP",
      topic: "systems-manager",
      type: "single",
      question: "You need a unified user interface that gives you visibility, control, and patching capabilities for your EC2 Instances on AWS, as well as for servers running in your on-premises data centers. Which service should you use?",
      options: ["Storage Gateway", "Elastic Beanstalk", "Elastic Container Service", "Systems Manager"],
      correctAnswer: [3],
      explanation: "AWS Systems Manager provides a unified interface for visibility, control, and patching of both EC2 instances and on-premises servers at scale. Storage Gateway connects on-premises storage to AWS, Elastic Beanstalk is for application deployment, and ECS is for container orchestration."
    },
    {
      id: "dep-005",
      domain: "DEP",
      topic: "codedeploy",
      type: "single",
      question: "Which AWS managed service allows to automate software deployments to a hybrid mix of EC2 Instances and On-Premises servers?",
      options: ["CodeDeploy", "CloudFormation", "Elastic Beanstalk", "CodePipeline"],
      correctAnswer: [0],
      explanation: "AWS CodeDeploy automates application deployments to any instance, including Amazon EC2 instances and on-premises servers, making it ideal for hybrid environments. CloudFormation manages infrastructure as code, Elastic Beanstalk is a PaaS, and CodePipeline orchestrates CI/CD workflows."
    },
    {
      id: "dep-006",
      domain: "DEP",
      topic: "cloudformation",
      type: "single",
      question: "What is called the declaration of the AWS resources that make up a stack?",
      options: ["CloudFormation Schemas", "CloudFormation Diagrams", "CloudFormation Templates", "CloudFormation Models"],
      correctAnswer: [2],
      explanation: "CloudFormation templates are JSON or YAML-formatted text files that declare the AWS resources making up a stack. The other options (Schemas, Diagrams, Models) are not the correct CloudFormation terminology."
    },
    {
      id: "dep-007",
      domain: "DEP",
      topic: "cloudformation",
      type: "single",
      question: "CloudFormation and Elastic Beanstalk are free of use.",
      options: ["True", "False"],
      correctAnswer: [0],
      explanation: "This statement is true. CloudFormation and Elastic Beanstalk themselves are free to use, but you pay for the underlying AWS resources they create and manage, such as EC2 instances, load balancers, and storage."
    },
    {
      id: "dep-008",
      domain: "DEP",
      topic: "elastic-beanstalk",
      type: "single",
      question: "Which service is referred to as a Platform as a Service (PaaS)?",
      options: ["Elastic Beanstalk", "CodeDeploy", "CloudFormation", "EC2"],
      correctAnswer: [0],
      explanation: "Elastic Beanstalk is a Platform as a Service (PaaS) where you only manage applications and data while AWS handles the underlying infrastructure, capacity provisioning, load balancing, and auto-scaling. CodeDeploy and CloudFormation are deployment tools, while EC2 is Infrastructure as a Service (IaaS)."
    },
    {
      id: "dep-009",
      domain: "DEP",
      topic: "codebuild",
      type: "single",
      question: "Which serverless service can be used to build code and run tests?",
      options: ["CodeDeploy", "Cloud Development Kit (CDK)", "CodePipeline", "CodeBuild"],
      correctAnswer: [3],
      explanation: "AWS CodeBuild is a fully managed serverless continuous integration service that compiles source code, runs tests, and produces deployment-ready software packages without requiring you to provision or manage build servers. CodeDeploy handles deployments, CDK defines infrastructure, and CodePipeline orchestrates workflows."
    },
    {
      id: "dep-010",
      domain: "DEP",
      topic: "cloudformation",
      type: "single",
      question: "Which of the following allows you to deploy any AWS Infrastructure as a Code?",
      options: ["Elastic Beanstalk", "CodeDeploy", "CloudFormation", "Systems Manager"],
      correctAnswer: [2],
      explanation: "AWS CloudFormation allows you to model and provision AWS infrastructure and third-party resources as code using JSON or YAML templates. Elastic Beanstalk is a PaaS for applications, CodeDeploy automates deployments, and Systems Manager manages existing infrastructure."
    }
  ]
});
