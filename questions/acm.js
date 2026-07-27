/* Account Management, Billing & Support (ACM) revision set — domain-aligned standalone questions.
   Registered to window.QUESTION_FILES so it loads over file:// without fetch().
   See aws-ccp-study-guide.html. Revision-only (no paperId). */
window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "acm",
  questions: [
    {
      id: "acm-001",
      domain: "ACM",
      topic: "pricing-models",
      type: "single",
      question: "Which AWS pricing model offers the largest discount in exchange for committing to a 1 or 3 year term and a specific instance configuration?",
      options: ["On-Demand", "Spot Instances", "Reserved Instances", "Savings Plans with no commitment"],
      correctAnswer: [2],
      explanation: "Reserved Instances offer significant discounts (up to ~72%) compared to On-Demand pricing in exchange for a 1- or 3-year commitment."
    },
    {
      id: "acm-002",
      domain: "ACM",
      topic: "cost-management",
      type: "single",
      question: "Which tool lets you set custom cost and usage thresholds and receive alerts when you exceed (or are forecasted to exceed) them?",
      options: ["AWS Cost Explorer", "AWS Budgets", "AWS Pricing Calculator", "AWS Cost and Usage Report"],
      correctAnswer: [1],
      explanation: "AWS Budgets lets you set custom cost, usage, or reservation budgets and alerts you when actual or forecasted values exceed the threshold."
    },
    {
      id: "acm-003",
      domain: "ACM",
      topic: "cost-management",
      type: "single",
      question: "A startup wants to estimate the monthly cost of a proposed architecture before deploying it. Which tool should they use?",
      options: ["AWS Cost Explorer", "AWS Pricing Calculator", "AWS Trusted Advisor", "AWS Budgets"],
      correctAnswer: [1],
      explanation: "AWS Pricing Calculator lets you model the cost of AWS services for a planned architecture before you actually deploy anything."
    },
    {
      id: "acm-004",
      domain: "ACM",
      topic: "support",
      type: "single",
      question: "Which AWS Support plan is the first tier to include access to a Technical Account Manager (TAM)?",
      options: ["Basic", "Developer", "Business", "Enterprise"],
      correctAnswer: [3],
      explanation: "A Technical Account Manager is provided starting with the Enterprise support plan (Enterprise On-Ramp includes a pooled TAM; full Enterprise includes a dedicated TAM)."
    },
    {
      id: "acm-005",
      domain: "ACM",
      topic: "billing",
      type: "single",
      question: "Which free AWS tool provides visibility into consolidated billing across linked accounts in an AWS Organization?",
      options: ["AWS Organizations Consolidated Billing", "Amazon QuickSight", "AWS Config Aggregator", "Amazon CloudWatch Billing"],
      correctAnswer: [0],
      explanation: "Consolidated Billing, a feature of AWS Organizations, combines usage from all member accounts to share volume pricing discounts and provide a single bill."
    },
    {
      id: "acm-006",
      domain: "ACM",
      topic: "organizations",
      type: "single",
      question: "What is the purpose of AWS Organizations service?",
      options: ["AWS Organizations groups your applications and manages them", "AWS Organizations organizes your services and makes service usage reports", "AWS Organizations helps you manage multiple AWS Accounts", "AWS Organizations optimizes your system performance"],
      correctAnswer: [2],
      explanation: "AWS Organizations is a service that helps you centrally manage and govern multiple AWS accounts, enabling consolidated billing, policy-based management, and organizational units. It does not group applications, create service usage reports (CloudWatch and Cost Explorer do that), or directly optimize system performance."
    },
    {
      id: "acm-007",
      domain: "ACM",
      topic: "pricing-models",
      type: "single",
      question: "Economies of scale continually reduce AWS Cloud pricing.",
      options: ["True", "False"],
      correctAnswer: [0],
      explanation: "AWS passes savings from economies of scale directly to customers by continually reducing prices as they grow and optimize their infrastructure. As AWS expands and achieves greater operational efficiency from managing massive global infrastructure, these cost reductions are reflected in lower pricing for AWS services over time."
    },
    {
      id: "acm-008",
      domain: "ACM",
      topic: "consolidated-billing",
      type: "single",
      question: "Can all accounts of an AWS Organization be billed with a single bill?",
      options: ["Yes", "No"],
      correctAnswer: [0],
      explanation: "AWS Organizations provides consolidated billing, which combines usage across all accounts in the organization into a single bill paid by the management account. This feature also enables volume pricing discounts by aggregating usage across all member accounts."
    },
    {
      id: "acm-009",
      domain: "ACM",
      topic: "cost-explorer",
      type: "single",
      question: "Which tool lets you visualise and manage your AWS costs?",
      options: ["AWS Budgets", "AWS Cost Explorer", "AWS Price Calculator"],
      correctAnswer: [1],
      explanation: "AWS Cost Explorer provides visualization and management of AWS costs through interactive graphs, filtering, and forecasting capabilities. AWS Budgets sets spending alerts and thresholds, while AWS Pricing Calculator estimates costs for new workloads—neither offers the same visual cost analysis features."
    },
    {
      id: "acm-010",
      domain: "ACM",
      topic: "service-control-policies",
      type: "single",
      question: "Which of the following allows you to centrally manage all users and roles permissions in your AWS Organization?",
      options: ["Technical Account Manager (TAM)", "Service Control Policies (SCPs)", "AWS IAM", "AWS Config"],
      correctAnswer: [1],
      explanation: "Service Control Policies (SCPs) are organization policies that let you manage permissions centrally across all accounts in your AWS Organization, spanning all IAM users, groups, roles, and even the root user. AWS IAM controls access within individual accounts but cannot apply policies to the root user, TAM is a support resource, and Config monitors compliance."
    },
    {
      id: "acm-011",
      domain: "ACM",
      topic: "control-tower",
      type: "single",
      question: "You would like to automatically set up and govern a secure multi-account AWS environment with best practices for your organization. Which AWS tool can you use?",
      options: ["Control Tower", "Organizations", "Trusted Advisor", "Security Hub"],
      correctAnswer: [0],
      explanation: "AWS Control Tower offers the easiest way to automatically set up and govern a secure multi-account AWS environment, establishing a landing zone based on best-practices blueprints with pre-packaged guardrails. Organizations helps you govern your environment but does not automatically set it up, Trusted Advisor provides recommendations, and Security Hub aggregates security findings."
    },
    {
      id: "acm-012",
      domain: "ACM",
      topic: "trusted-advisor",
      type: "single",
      question: "A company would like recommendations regarding its performance, security, and fault tolerance. What can it use?",
      options: ["Inspector", "Config", "Trusted Advisor", "Technical Account Manager"],
      correctAnswer: [2],
      explanation: "AWS Trusted Advisor is an online tool that provides real-time guidance to help you provision resources following AWS best practices across performance, security, fault tolerance, cost optimization, and service limits. Inspector performs security assessments, Config monitors resource configurations, and TAM is a person available with Enterprise Support."
    },
    {
      id: "acm-013",
      domain: "ACM",
      topic: "organizations",
      type: "single",
      question: "Which of the following is INCORRECT regarding AWS Organizations?",
      options: ["Manage multiple AWS accounts", "Consolidated billing across all accounts", "Volume discounts from aggregated usage", "Faster access to the AWS Support"],
      correctAnswer: [3],
      explanation: "AWS Organizations does not offer faster access to AWS Support. Organizations does enable you to manage multiple AWS accounts, provides consolidated billing across all accounts, and delivers volume discounts from aggregated usage."
    },
    {
      id: "acm-014",
      domain: "ACM",
      topic: "support-plans",
      type: "single",
      question: "What is the most cost-effective option to have 24x7 phone, email, and chat support?",
      options: ["Basic Support Plan", "Developer Support Plan", "Enterprise Support Plan", "Business Support Plan"],
      correctAnswer: [3],
      explanation: "Business Support Plan is the most cost-effective option that offers 24x7 phone, email, and chat support. Basic and Developer plans do not offer 24x7 support, and Enterprise Support Plan offers the same support but at a higher cost."
    },
    {
      id: "acm-015",
      domain: "ACM",
      topic: "pricing-calculator",
      type: "single",
      question: "What can you use to estimate the cost of your architecture solution?",
      options: ["Simple Monthly Calculator/Pricing Calculator", "Cost and Usage Reports", "Total Cost of Ownership (TCO)", "Trusted Advisor"],
      correctAnswer: [0],
      explanation: "The AWS Simple Monthly Calculator (now replaced by AWS Pricing Calculator) is an easy-to-use online tool that enables you to estimate the monthly cost of AWS services for your architecture solution based on expected usage. Cost and Usage Reports show historical spending, TCO compares on-premises vs. cloud costs, and Trusted Advisor provides best practice recommendations."
    },
    {
      id: "acm-016",
      domain: "ACM",
      topic: "support-plans",
      type: "single",
      question: "The Enterprise Support Plan comes with a business-critical system down response under 15 minutes and offers access to a Technical Account Manager, as well as a Concierge Support Team.",
      options: ["True", "False"],
      correctAnswer: [0],
      explanation: "True. The Enterprise Support Plan provides business-critical system down response under 15 minutes and is the only plan that offers access to both a Technical Account Manager (TAM) and a Concierge Support Team."
    },
    {
      id: "acm-017",
      domain: "ACM",
      topic: "pricing-calculator",
      type: "single",
      question: "A company is not sure whether or not it is cost-effective to migrate to the AWS Cloud. Which service can help the executive board make a decision?",
      options: ["Simple Monthly Calculator", "Pricing Calculator", "Billing Dashboard", "Cost Explorer"],
      correctAnswer: [1],
      explanation: "AWS Pricing Calculator is a web-based service that helps create cost estimates for AWS use cases, useful for both new AWS users and those expanding usage, making it ideal for evaluating whether migrating to AWS is cost-effective. Simple Monthly Calculator is the older version of this tool, Billing Dashboard shows current costs, and Cost Explorer analyzes historical spending."
    },
    {
      id: "acm-018",
      domain: "ACM",
      topic: "resource-groups",
      type: "single",
      question: "What do Resource Groups rely on to group your resources?",
      options: ["Labels", "Categories", "Tags", "Stickers"],
      correctAnswer: [2],
      explanation: "Resource Groups rely on tags to group your resources. You can assign metadata to AWS resources in the form of tags, which help you manage, identify, organize, search for, and filter resources."
    },
    {
      id: "acm-019",
      domain: "ACM",
      topic: "budgets",
      type: "single",
      question: "What can you use to get alerts when your costs and usage are exceeding or are forecasted to exceed your budgeting amount?",
      options: ["CloudWatch Billing Alarms", "Budgets", "Cost and Usage Reports", "Billing Dashboard"],
      correctAnswer: [1],
      explanation: "AWS Budgets gives you the ability to set custom budgets that alert you when your costs or usage exceed or are forecasted to exceed your budgeted amount. CloudWatch Billing Alarms only send alerts when costs exceed your budget (not forecasted), while Budgets does both. Cost and Usage Reports provide detailed cost data, and Billing Dashboard shows current spending."
    },
    {
      id: "acm-020",
      domain: "ACM",
      topic: "cost-explorer",
      type: "single",
      question: "A company would like to choose the best Savings Plan and forecast its cost in the next 3 months. Which AWS service can help?",
      options: ["Cost and Usage Reports", "Budgets", "Cost Explorer", "Forecast"],
      correctAnswer: [2],
      explanation: "Cost Explorer can forecast usage up to 12 months based on previous usage and helps you choose an optimal Savings Plan through its easy-to-use interface for visualizing and managing AWS costs over time. Cost and Usage Reports provide detailed cost data but not Savings Plan recommendations, Budgets alert on spending thresholds, and Forecast is for ML-based forecasting of business metrics (not AWS costs)."
    },
    {
      id: "acm-021",
      domain: "ACM",
      topic: "compute-optimizer",
      type: "single",
      question: "Which of the following options uses machine learning to recommend optimal AWS resources and therefore reduces costs?",
      options: ["Trusted Advisor", "Budgets", "Cost Explorer", "Compute Optimizer"],
      correctAnswer: [3],
      explanation: "AWS Compute Optimizer recommends optimal AWS resources for your workloads to reduce costs and improve performance by using machine learning to analyze historical utilization metrics. Trusted Advisor provides best practice recommendations but not ML-based resource optimization, Budgets sets spending alerts, and Cost Explorer analyzes historical costs."
    },
    {
      id: "acm-022",
      domain: "ACM",
      topic: "free-services",
      type: "single",
      question: "Which services are free to use in AWS?",
      options: ["IAM, VPC, Consolidated Billing, and Elastic Beanstalk", "Elastic Beanstalk, CloudFormation, Auto Scaling Groups, and Lambda", "SNS, SQS, IAM, VPC", "All services have a free tier included"],
      correctAnswer: [0],
      explanation: "IAM, VPC, Consolidated Billing, and Elastic Beanstalk are free to use in AWS, though you pay for the underlying resources they provision. While Elastic Beanstalk itself is free, you pay for the EC2 instances, load balancers, and other resources it creates. Lambda has a generous free tier but is not entirely free, and CloudFormation and Auto Scaling Groups are free services but were grouped with Lambda which is not entirely free."
    },
    {
      id: "acm-023",
      domain: "ACM",
      topic: "cloudfront-pricing",
      type: "single",
      question: "CloudFront pricing is the same in every geographic region.",
      options: ["True", "False"],
      correctAnswer: [1],
      explanation: "This statement is false because CloudFront pricing varies by geographic region based on edge location costs. Different regions have different pricing due to varying infrastructure and operational costs, so data transfer rates differ across geographic areas."
    },
    {
      id: "acm-024",
      domain: "ACM",
      topic: "reserved-instances",
      type: "single",
      question: "When you reserve, the larger the upfront payment, the smaller the discount.",
      options: ["True", "False, the upfront payment does not matter on the discount", "False, the larger the upfront, the bigger the discount"],
      correctAnswer: [2],
      explanation: "The statement is false. With AWS Reserved Instances (and Savings Plans), the larger your upfront payment, the bigger the discount: the All Upfront option gives the greatest savings, Partial Upfront gives less, and No Upfront gives the least. \"True\" is wrong because a larger upfront never shrinks the discount, and the other \"False\" option is wrong because the upfront amount does affect the discount."
    },
    {
      id: "acm-025",
      domain: "ACM",
      topic: "s3-pricing",
      type: "single",
      question: "Which of the following is NOT a pricing factor in S3?",
      options: ["Storage class", "Data transfer into S3", "Objects size", "Type of requests"],
      correctAnswer: [1],
      explanation: "Data transfer into S3 is not a pricing factor because inbound data transfer to S3 is free. S3 pricing is based on storage class type, the number and size of objects stored, and the type and number of requests made, but uploading data into S3 does not incur transfer charges."
    },
    {
      id: "acm-026",
      domain: "ACM",
      topic: "ebs-pricing",
      type: "single",
      question: "EBS Snapshots are added cost in GB per month.",
      options: ["True", "False"],
      correctAnswer: [0],
      explanation: "This statement is true. EBS Snapshots are incremental backups stored in S3, and you are charged for the storage consumed by these snapshots at a rate per GB per month. This is in addition to other EBS costs like volume type, provisioned storage, and IOPS."
    },
    {
      id: "acm-027",
      domain: "ACM",
      topic: "compute-savings-plans",
      type: "single",
      question: "Which of the following options can provide up to 66% discount compared to On-demand for a commitment to a consistent amount of usage for 1 or 3 years and offers the possibility to change EC2 instances family type?",
      options: ["Spot instances", "Standard Reserved instances", "Compute Savings Plans", "EC2 Instance Savings Plans"],
      correctAnswer: [2],
      explanation: "Compute Savings Plans provide up to 66% discount and offer the most flexibility, automatically applying to EC2 usage regardless of instance family, size, AZ, region, OS, or tenancy, and also covering Fargate and Lambda. Standard Reserved Instances do not allow changing instance family type, and EC2 Instance Savings Plans lock you into a specific instance family within a region."
    },
    {
      id: "acm-028",
      domain: "ACM",
      topic: "ec2-billing",
      type: "single",
      question: "You are running an on-demand Linux EC2 instance, what timing is applied regarding billing?",
      options: ["Pay per minute", "Pay per hour", "Pay per day", "Pay per second"],
      correctAnswer: [3],
      explanation: "Linux EC2 on-demand instances are billed per second with a minimum charge of 60 seconds. This per-second billing provides granular cost control for short-running workloads, unlike the older per-hour billing model."
    },
    {
      id: "acm-029",
      domain: "ACM",
      topic: "reservation-pricing",
      type: "single",
      question: "Which pricing model allows you to minimize risks, predictably manage budgets, and comply with long-term requirements, and is available for EC2, DynamoDB, ElastiCache, RDS, and Redshift?",
      options: ["Pay as you go", "Pay less as AWS grows", "Pay less by using more", "Save when you reserve"],
      correctAnswer: [3],
      explanation: "The \"Save when you reserve\" pricing model allows you to commit to long-term usage in exchange for significant discounts, helping to minimize risks, predictably manage budgets, and comply with long-term requirements. Reservations are available for EC2, DynamoDB, ElastiCache, RDS, and Redshift."
    },
    {
      id: "acm-030",
      domain: "ACM",
      topic: "rds-reserved-instances",
      type: "single",
      question: "Which RDS pricing option is the most cost-effective if you need capacity for 3 years?",
      options: ["On-demand", "Spot Instances", "Dedicated Instances", "Reserved Instances"],
      correctAnswer: [3],
      explanation: "RDS Reserved Instances are the most cost-effective option for a 3-year commitment, offering up to 69% discount compared to on-demand pricing. RDS does not support Spot Instances, and on-demand or dedicated instances would be significantly more expensive over a 3-year period."
    }
  ]
});
