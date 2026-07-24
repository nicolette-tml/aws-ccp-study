/* Billing & Pricing (BP) question set. Registered to window.QUESTION_FILES so
   it loads over file:// without fetch(). See aws-ccp-study-guide.html. */
window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "billing-pricing",
  questions: [
    {
      id: "billing-pricing-001",
      domain: "ACM",
      topic: "pricing-models",
      type: "single",
      question: "Which AWS pricing model offers the largest discount in exchange for committing to a 1 or 3 year term and a specific instance configuration?",
      options: ["On-Demand", "Spot Instances", "Reserved Instances", "Savings Plans with no commitment"],
      correctAnswer: [2],
      explanation: "Reserved Instances offer significant discounts (up to ~72%) compared to On-Demand pricing in exchange for a 1- or 3-year commitment."
    },
    {
      id: "billing-pricing-002",
      domain: "ACM",
      topic: "cost-management",
      type: "single",
      question: "Which tool lets you set custom cost and usage thresholds and receive alerts when you exceed (or are forecasted to exceed) them?",
      options: ["AWS Cost Explorer", "AWS Budgets", "AWS Pricing Calculator", "AWS Cost and Usage Report"],
      correctAnswer: [1],
      explanation: "AWS Budgets lets you set custom cost, usage, or reservation budgets and alerts you when actual or forecasted values exceed the threshold."
    },
    {
      id: "billing-pricing-003",
      domain: "ACM",
      topic: "cost-management",
      type: "single",
      question: "A startup wants to estimate the monthly cost of a proposed architecture before deploying it. Which tool should they use?",
      options: ["AWS Cost Explorer", "AWS Pricing Calculator", "AWS Trusted Advisor", "AWS Budgets"],
      correctAnswer: [1],
      explanation: "AWS Pricing Calculator lets you model the cost of AWS services for a planned architecture before you actually deploy anything."
    },
    {
      id: "billing-pricing-004",
      domain: "ACM",
      topic: "support",
      type: "single",
      question: "Which AWS Support plan is the first tier to include access to a Technical Account Manager (TAM)?",
      options: ["Basic", "Developer", "Business", "Enterprise"],
      correctAnswer: [3],
      explanation: "A Technical Account Manager is provided starting with the Enterprise support plan (Enterprise On-Ramp includes a pooled TAM; full Enterprise includes a dedicated TAM)."
    },
    {
      id: "billing-pricing-005",
      domain: "ACM",
      topic: "billing",
      type: "single",
      question: "Which free AWS tool provides visibility into consolidated billing across linked accounts in an AWS Organization?",
      options: ["AWS Organizations Consolidated Billing", "Amazon QuickSight", "AWS Config Aggregator", "Amazon CloudWatch Billing"],
      correctAnswer: [0],
      explanation: "Consolidated Billing, a feature of AWS Organizations, combines usage from all member accounts to share volume pricing discounts and provide a single bill."
    }
  ]
});
