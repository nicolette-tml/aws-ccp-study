/* IAM: Identity & Access Management (IAM) revision set — domain-aligned standalone questions.
   Registered to window.QUESTION_FILES so it loads over file:// without fetch().
   See aws-ccp-study-guide.html. Revision-only (no paperId). */
window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "iam",
  questions: [
    {
      id: "iam-001",
      domain: "IAM",
      topic: "root-user",
      type: "single",
      question: "What is the AWS best practice for the AWS account root user?",
      options: ["Use it for all daily administrative tasks", "Share its credentials with the operations team", "Enable MFA and avoid using it for everyday tasks", "Disable MFA to simplify automated deployments"],
      correctAnswer: [2],
      explanation: "AWS recommends enabling multi-factor authentication on the root user, locking away its credentials, and using IAM users/roles for daily tasks instead."
    },
    {
      id: "iam-002",
      domain: "IAM",
      topic: "iam-policies",
      type: "multiple-select",
      question: "The Principal element is used in a resource-based JSON policy to specify the principal that is allowed or denied access to a resource. What is an example of a principal that can be specified? (Select THREE.)",
      options: ["IAM user", "IAM role", "S3 Bucket", "AWS services"],
      correctAnswer: [0, 1, 3],
      explanation: "In resource-based JSON policies, the Principal element specifies IAM users, IAM roles, or AWS services that are allowed or denied access to the resource. An S3 bucket is a resource that receives the policy, not a principal that can be granted access."
    },
    {
      id: "iam-003",
      domain: "IAM",
      topic: "iam",
      type: "single",
      question: "Which AWS service helps you create users and provide them security access?",
      options: ["AWS Identity and Access Management (IAM)", "AWS Redshift", "AWS Direct Connect", "AWS CloudFormation"],
      correctAnswer: [0],
      explanation: "AWS Identity and Access Management (IAM) enables you to securely control access to AWS resources by creating and managing users, groups, roles, and permissions. Redshift is a data warehouse, Direct Connect provides dedicated network connectivity, and CloudFormation is an infrastructure-as-code service, none of which manage user access."
    },
    {
      id: "iam-004",
      domain: "IAM",
      topic: "iam-policies",
      type: "single",
      question: "What is an IAM Policy?",
      options: ["IAM Policy is a temporary access to AWS services or resources", "IAM Policy is a document that customizes user permissions for AWS services and resources", "IAM Policy is an entity that interacts with AWS resources or services"],
      correctAnswer: [1],
      explanation: "An IAM Policy is a JSON document that defines permissions for AWS services and resources by specifying which actions are allowed or denied. The first option describes temporary credentials (STS), and the third describes an IAM user or role—not a policy document."
    },
    {
      id: "iam-005",
      domain: "IAM",
      topic: "iam-roles",
      type: "single",
      question: "What is a proper definition of IAM Roles?",
      options: ["An IAM entity that defines a set of permissions for making AWS service requests, that will be used by AWS services", "IAM Users in multiple Groups", "A password policy", "Permissions assigned to Users to perform actions"],
      correctAnswer: [0],
      explanation: "An IAM Role is an IAM entity that defines a set of permissions for making AWS service requests, which can be assumed by AWS services, applications, or users. Roles provide temporary credentials and are commonly used to grant services like EC2 or Lambda permission to access other AWS resources securely without embedding long-term credentials."
    },
    {
      id: "iam-006",
      domain: "IAM",
      topic: "iam-security-tools",
      type: "single",
      question: "Which of the following is an IAM Security Tool?",
      options: ["IAM Credentials Report", "IAM Root Account Manager", "IAM Services Report", "IAM Security Advisor"],
      correctAnswer: [0],
      explanation: "IAM Credentials Report is an IAM Security Tool that lists all your account's users and the status of their various credentials, including passwords, access keys, and MFA devices. The other IAM Security Tool is IAM Access Advisor, which shows service permissions granted to a user and when those services were last accessed. IAM Root Account Manager, IAM Services Report, and IAM Security Advisor do not exist."
    },
    {
      id: "iam-007",
      domain: "IAM",
      topic: "iam-users",
      type: "single",
      question: "Which answer is INCORRECT regarding IAM Users?",
      options: ["IAM Users can belong to multiple groups", "IAM Users don’t have to belong to a group", "IAM Users can have policies assigned to them", "IAM Users access AWS with the root account credentials"],
      correctAnswer: [3],
      explanation: "The statement that IAM Users access AWS with root account credentials is incorrect. IAM Users access AWS using their own username and password or access keys, not the root account credentials. Root account credentials should be reserved for the account owner and protected, while IAM Users have their own separate credentials."
    },
    {
      id: "iam-008",
      domain: "IAM",
      topic: "iam-best-practices",
      type: "single",
      question: "Which of the following is an IAM best practice?",
      options: ["Don’t use the root user account", "Create several users for a physical person", "Share credentials so a colleague can perform a task for you", "Do not enable MFA for easier access"],
      correctAnswer: [0],
      explanation: "Not using the root user account for everyday tasks is an IAM best practice. The root account should only be used to create your first IAM user and for a few account and service management tasks. For daily operations and administration, use an IAM user with appropriate permissions to minimize security risks."
    },
    {
      id: "iam-009",
      domain: "IAM",
      topic: "iam-policies",
      type: "single",
      question: "What are IAM Policies?",
      options: ["AWS services performable actions", "JSON documents to define Users, Groups or Roles’ permissions", "Rules to set up a password for IAM Users"],
      correctAnswer: [1],
      explanation: "IAM Policies are JSON documents that define permissions for Users, Groups, or Roles, specifying what actions are allowed or denied on which AWS resources. Policies are attached to IAM identities to control their access to AWS services and resources, implementing the principle of least privilege."
    },
    {
      id: "iam-010",
      domain: "IAM",
      topic: "shared-responsibility",
      type: "single",
      question: "Under the shared responsibility model, what is the customer responsible for in IAM",
      options: ["Infrastructure security", "Compliance validation", "Configuration and vulnerability analysis", "Assigning users proper IAM policies"],
      correctAnswer: [3],
      explanation: "Under the Shared Responsibility Model, customers are responsible for assigning users proper IAM policies and managing access controls to their AWS resources. AWS is responsible for the infrastructure security, compliance validation of the cloud infrastructure, and configuration of the underlying IAM service itself, while customers manage their own IAM configurations."
    },
    {
      id: "iam-011",
      domain: "IAM",
      topic: "cli-vs-sdk",
      type: "single",
      question: "Which of the following statements is TRUE?",
      options: ["The AWS CLI can interact with AWS using commands in your command-line shell, while the AWS SDK can interact with AWS programmatically.", "The AWS SDK can interact with AWS using commands in your command-line shell, while the AWS CLI can interact with AWS programmatically."],
      correctAnswer: [0],
      explanation: "The AWS CLI (Command Line Interface) can interact with AWS using commands in your command-line shell, allowing you to script and automate tasks. The AWS SDK (Software Development Kit) can interact with AWS programmatically from within your application code using languages like Python, Java, JavaScript, and others. Both provide alternatives to the AWS Management Console."
    },
    {
      id: "iam-012",
      domain: "IAM",
      topic: "least-privilege",
      type: "single",
      question: "Which principle should you apply regarding IAM Permissions?",
      options: ["Grant most privilege", "Grant least privilege", "Grant permissions if your employee asks you to", "Restrict root account permissions"],
      correctAnswer: [1],
      explanation: "The principle of least privilege should be applied to IAM permissions, meaning you should grant only the minimum permissions necessary for users to perform their required tasks. This reduces security risks by limiting potential damage from compromised credentials and prevents unauthorized access to resources."
    },
    {
      id: "iam-013",
      domain: "IAM",
      topic: "mfa",
      type: "single",
      question: "What should you do to increase your root account security",
      options: ["Enable Multi-Factor Authentication", "Remove permissions from the root account", "Use AWS only through the Command Line Interface (CLI)"],
      correctAnswer: [0],
      explanation: "Enabling Multi-Factor Authentication (MFA) on the root account significantly increases security by adding an additional layer of protection. Even if your password is stolen, lost, or hacked, the account remains protected because an attacker would also need access to your MFA device to authenticate successfully."
    }
  ]
});
