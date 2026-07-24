/* Database question set (domain "DB", topic "database").
   Ported from database.json into the unified schema. Registered to
   window.QUESTION_FILES so it loads over file:// without fetch(). */
window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "database",
  questions: [
    {
      id: "database-001",
      domain: "DBA",
      topic: "rds",
      type: "multiple-select",
      question: "Which functions does Amazon RDS perform on the behalf of users? (Select THREE.)",
      options: [
        "Provision the infrastructure capacity.",
        "Install the database software.",
        "Automate data backups.",
        "Create database users."
      ],
      correctAnswer: [0, 1, 2],
      explanation: "Amazon RDS is a managed service: it provisions infrastructure, installs and patches the database engine, and automates backups. Creating database users remains the customer's responsibility."
    },
    {
      id: "database-002",
      domain: "DBA",
      topic: "dynamodb",
      type: "multiple-select",
      question: "Which statements about the query operation in Amazon DynamoDB are correct? (Select TWO.)",
      options: [
        "In a query operation, users must provide the name and a value of the partition key. The sort key is optional.",
        "In a query operation, users must provide the name and a value of the partition key as well as the sort key.",
        "A filter expression cannot contain partition key or sort key attributes.",
        "A filter expression can contain partition key or sort key attributes."
      ],
      correctAnswer: [0, 2],
      explanation: "A DynamoDB query requires the partition key (sort key is optional for narrowing results), and filter expressions are applied after the query and cannot reference partition or sort key attributes."
    }
  ]
});
