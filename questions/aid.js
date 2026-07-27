/* Advanced Identity (AID) revision set — domain-aligned standalone questions.
   Registered to window.QUESTION_FILES so it loads over file:// without fetch().
   See aws-ccp-study-guide.html. Revision-only (no paperId). */
window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "aid",
  questions: [
    {
      id: "aid-001",
      domain: "AID",
      topic: "directory-services",
      type: "single",
      question: "A company would like to use their on-premises Microsoft Active Directory to connect to its AWS resources. Which service can it use?",
      options: ["Directory Services", "IAM Identity Center", "Direct Connect", "Cognito"],
      correctAnswer: [0],
      explanation: "AWS Directory Services allows you to set up and run directories in the AWS cloud or connect your AWS resources with an existing on-premises Microsoft Active Directory. IAM Identity Center is for centralized SSO, Direct Connect is a network connection service, and Cognito is for mobile/web app user authentication."
    },
    {
      id: "aid-002",
      domain: "AID",
      topic: "sts",
      type: "single",
      question: "Which AWS service allows you to create temporary, limited-privilege credentials for your AWS resources?",
      options: ["IAM Identity Center", "Security Token Service (STS)", "AWS Directory Services", "Cognito"],
      correctAnswer: [1],
      explanation: "AWS Security Token Service (STS) enables you to request temporary, limited-privilege credentials for IAM users or federated users. IAM Identity Center provides SSO access, Directory Services integrates Active Directory, and Cognito manages mobile/web app user authentication."
    },
    {
      id: "aid-003",
      domain: "AID",
      topic: "cognito",
      type: "single",
      question: "A company just created a new mobile application and wants to add a simple and secure user sign-up, sign-in, and access control. Which AWS service can it use?",
      options: ["IAM", "Cognito", "Directory Services", "IAM Identity Center"],
      correctAnswer: [1],
      explanation: "Amazon Cognito provides user sign-up, sign-in, and access control for web and mobile applications quickly and easily. IAM is for AWS resource permissions, Directory Services integrates with Active Directory, and IAM Identity Center is for enterprise SSO across multiple AWS accounts."
    },
    {
      id: "aid-004",
      domain: "AID",
      topic: "iam-identity-center",
      type: "single",
      question: "A company would like to centrally manage access to multiple AWS accounts and business applications. Which service can it use?",
      options: ["Organizations", "Cognito", "Directory Service", "IAM Identity Center"],
      correctAnswer: [3],
      explanation: "AWS IAM Identity Center (formerly AWS SSO) enables centralized management of access to multiple AWS accounts and business applications, providing users with single sign-on access from one place. AWS Organizations manages account structure and billing but does not provide application access management."
    }
  ]
});
