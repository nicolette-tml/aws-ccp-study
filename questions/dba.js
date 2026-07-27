/* Databases & Analytics (DBA) revision set — domain-aligned standalone questions.
   Registered to window.QUESTION_FILES so it loads over file:// without fetch().
   See aws-ccp-study-guide.html. Revision-only (no paperId). */
window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "dba",
  questions: [
    {
      id: "dba-001",
      domain: "DBA",
      topic: "rds",
      type: "multiple-select",
      question: "Which functions does Amazon RDS perform on the behalf of users? (Select THREE.)",
      options: ["Provision the infrastructure capacity.", "Install the database software.", "Automate data backups.", "Create database users."],
      correctAnswer: [0, 1, 2],
      explanation: "Amazon RDS is a managed service: it provisions infrastructure, installs and patches the database engine, and automates backups. Creating database users remains the customer's responsibility."
    },
    {
      id: "dba-002",
      domain: "DBA",
      topic: "dynamodb",
      type: "multiple-select",
      question: "Which statements about the query operation in Amazon DynamoDB are correct? (Select TWO.)",
      options: ["In a query operation, users must provide the name and a value of the partition key. The sort key is optional.", "In a query operation, users must provide the name and a value of the partition key as well as the sort key.", "A filter expression cannot contain partition key or sort key attributes.", "A filter expression can contain partition key or sort key attributes."],
      correctAnswer: [0, 2],
      explanation: "A DynamoDB query requires the partition key (sort key is optional for narrowing results), and filter expressions are applied after the query and cannot reference partition or sort key attributes."
    },
    {
      id: "dba-003",
      domain: "DBA",
      topic: "rds",
      type: "multiple-select",
      question: "Which functions does Amazon RDS perform on the behalf of users? (Select THREE.)",
      options: ["Provision the infrastructure capacity.", "Install the database software.", "Automate data backups.", "Create database users."],
      correctAnswer: [0, 1, 2],
      explanation: "Amazon RDS is a managed database service that provisions infrastructure capacity, installs database software, and automates backups on behalf of users. Creating database users is an administrative task that users perform themselves within the database — RDS does not create application-level database users automatically."
    },
    {
      id: "dba-004",
      domain: "DBA",
      topic: "dynamodb",
      type: "multiple-select",
      question: "Which statements about the query operation in Amazon DynamoDB are correct? (Select TWO.)",
      options: ["In a query operation, users must provide the name and a value of the partition key. The sort key is optional.", "In a query operation, users must provide the name and a value of the partition key as well as the sort key.", "A filter expression cannot contain partition key or sort key attributes.", "A filter expression can contain partition key or sort key attributes."],
      correctAnswer: [0, 2],
      explanation: "In DynamoDB query operations, you must provide the partition key name and value, while the sort key is optional (required only if querying a table with a composite key). Filter expressions are applied after the query retrieves items, and they cannot contain partition key or sort key attributes because those are already used to define the query itself."
    },
    {
      id: "dba-005",
      domain: "DBA",
      topic: "dynamodb",
      type: "single",
      question: "A company’s data architects designed their database schema to make the most common and important database queries as fast and as inexpensive as possible. Which AWS service is best suited to achieve their goal?",
      options: ["Amazon RDS", "Amazon DynamoDB", "Amazon Redshift", "Amazon Neptune"],
      correctAnswer: [1],
      explanation: "Amazon DynamoDB is a NoSQL database optimized for fast, predictable performance at any scale, making it ideal when schemas are designed around specific query patterns to maximize speed and minimize cost. RDS is for relational workloads, Redshift is for data warehousing analytics, and Neptune is for graph databases."
    },
    {
      id: "dba-006",
      domain: "DBA",
      topic: "dynamodb",
      type: "single",
      question: "What kind of database is AWS DynamoDB?",
      options: ["NoSQL database", "Relational database", "Document database"],
      correctAnswer: [0],
      explanation: "AWS DynamoDB is a fully managed NoSQL database that stores data in key-value and document formats, providing single-digit millisecond performance at any scale. While it can be categorized as a document database, NoSQL is the broader and more accurate classification that distinguishes it from relational databases."
    },
    {
      id: "dba-007",
      domain: "DBA",
      topic: "aurora",
      type: "single",
      question: "Which database is ideal for large organizations and enterprises?",
      options: ["PostgreSQL", "Amazon Aurora", "MySQL"],
      correctAnswer: [1],
      explanation: "Amazon Aurora is a fully managed relational database engine that is compatible with MySQL and PostgreSQL, offering up to five times the performance of MySQL and three times the performance of PostgreSQL at a fraction of the cost of commercial databases. While PostgreSQL and MySQL are open-source databases supported on AWS, Aurora is purpose-built for the cloud and ideal for enterprise-scale workloads."
    },
    {
      id: "dba-008",
      domain: "DBA",
      topic: "qldb",
      type: "single",
      question: "Which AWS database service proviced historical data of your application changes?",
      options: ["AWS DocumentDB", "AWS Neptune", "AWS Quantum Ledger Database", "AWS ElastiCache"],
      correctAnswer: [2],
      explanation: "AWS Quantum Ledger Database (QLDB) is an immutable, cryptographically verifiable ledger database that maintains a complete and verifiable history of all application data changes. DocumentDB is for MongoDB workloads, Neptune is a graph database, and ElastiCache is an in-memory caching service—none provide immutable historical audit trails."
    },
    {
      id: "dba-009",
      domain: "DBA",
      topic: "dax",
      type: "single",
      question: "What is AWS DynamoDB Accelerator capable of?",
      options: ["Improves read times of non-relational data", "Improves visualisation times of graphs", "Improves write times of documents", "Improves read times of relational data"],
      correctAnswer: [0],
      explanation: "DynamoDB Accelerator (DAX) is a fully managed in-memory cache that improves read performance of DynamoDB (non-relational) data by delivering microsecond response times. It does not accelerate graph visualization, document writes, or relational database reads."
    },
    {
      id: "dba-010",
      domain: "DBA",
      topic: "managed-blockchain",
      type: "single",
      question: "You want to create a decentralized blockchain on AWS. Which AWS service would you use?",
      options: ["DocumentDB", "QLDB", "Managed Blockchain", "QuickSight"],
      correctAnswer: [2],
      explanation: "Amazon Managed Blockchain is a fully managed service that makes it easy to create and manage scalable decentralized blockchain networks using Hyperledger Fabric and Ethereum frameworks, allowing multiple parties to execute transactions without a trusted central authority. DocumentDB is for MongoDB workloads, QLDB is a centralized immutable ledger, and QuickSight is a business intelligence tool."
    },
    {
      id: "dba-011",
      domain: "DBA",
      topic: "redshift",
      type: "single",
      question: "Which AWS database is a data warehouse?",
      options: ["DynamoDB", "ElastiCache", "Redshift", "RDS"],
      correctAnswer: [2],
      explanation: "Amazon Redshift is a fully managed, petabyte-scale data warehouse service optimized for analytics and OLAP workloads. DynamoDB is a NoSQL database, ElastiCache is an in-memory caching service, and RDS is for transactional OLTP workloads, not data warehousing."
    },
    {
      id: "dba-012",
      domain: "DBA",
      topic: "athena",
      type: "single",
      question: "Which AWS service is always serverless and has SQL capabilities?",
      options: ["RDS", "Aurora", "DynamoDB", "Athena"],
      correctAnswer: [3],
      explanation: "Amazon Athena is a serverless interactive query service that analyzes data in S3 using standard SQL, with no infrastructure to manage and pay-per-query pricing. RDS and Aurora have SQL capabilities but are not fully serverless, while DynamoDB is serverless but does not have SQL capabilities."
    },
    {
      id: "dba-013",
      domain: "DBA",
      topic: "glue",
      type: "single",
      question: "You would like to use a serverless service to prepare data so it can be loaded for analytics. Which service would you use?",
      options: ["Athena", "RDS", "Glue", "ElastiCache"],
      correctAnswer: [2],
      explanation: "AWS Glue is a fully managed serverless ETL service that prepares and loads data for analytics by extracting, transforming, and loading data. Athena queries data but does not transform it, RDS is a relational database, and ElastiCache is an in-memory cache."
    },
    {
      id: "dba-014",
      domain: "DBA",
      topic: "aurora",
      type: "single",
      question: "Which relational database is a proprietary technology from AWS and is cloud-optimized?",
      options: ["DynamoDB", "Oracle", "Athena", "Aurora"],
      correctAnswer: [3],
      explanation: "Amazon Aurora is a MySQL and PostgreSQL-compatible relational database built for the cloud by AWS, offering enterprise performance with open-source simplicity and cost-effectiveness. DynamoDB is NoSQL, Oracle is third-party database software, and Athena is a query service, not a database engine."
    },
    {
      id: "dba-015",
      domain: "DBA",
      topic: "dms",
      type: "single",
      question: "You would like to migrate databases to AWS while still being able to use the database during the migration. What service allows you to do this?",
      options: ["Elastic MapReduce (EMR)", "Database Migration Service (DMS)", "AWS Storage Gateway", "Snowball"],
      correctAnswer: [1],
      explanation: "AWS Database Migration Service (DMS) helps migrate databases to AWS quickly and securely while the source database remains fully operational, minimizing downtime. EMR is for big data processing, Storage Gateway connects on-premises storage to AWS, and Snowball is for physical data transfer."
    },
    {
      id: "dba-016",
      domain: "DBA",
      topic: "emr",
      type: "single",
      question: "How can you create Hadoop clusters to analyze and process a vast amount of data?",
      options: ["EMR", "Athena", "EC2 Instances", "Redshift"],
      correctAnswer: [0],
      explanation: "Amazon EMR (Elastic MapReduce) is a managed service that makes it easy to create and run Hadoop clusters to process and analyze vast amounts of big data. Athena queries data without a cluster, EC2 instances would require manual Hadoop setup, and Redshift is a data warehouse, not a Hadoop solution."
    },
    {
      id: "dba-017",
      domain: "DBA",
      topic: "elasticache",
      type: "single",
      question: "Which in-memory AWS database can you use to reduce the load off databases and has high performance, low latency?",
      options: ["Redshift", "ElastiCache", "RDS", "DynamoDB"],
      correctAnswer: [1],
      explanation: "Amazon ElastiCache is a fully managed in-memory caching service supporting Memcached and Redis that delivers high performance and low latency, helping reduce load off databases for read-intensive workloads. Redshift is a data warehouse, RDS is a relational database, and DynamoDB is a NoSQL database, none of which are in-memory caches."
    },
    {
      id: "dba-018",
      domain: "DBA",
      topic: "glue-data-catalog",
      type: "single",
      question: "What is the name of a central repository to store structural and operational metadata for data assets in AWS Glue?",
      options: ["Glue Data Table", "Glue Data Dictionary", "Glue Data Catalog"],
      correctAnswer: [2],
      explanation: "The AWS Glue Data Catalog is a central repository that stores structural and operational metadata for all data assets, including table definitions, physical locations, business attributes, and change tracking over time. Glue Data Table and Glue Data Dictionary are not actual AWS Glue components."
    },
    {
      id: "dba-019",
      domain: "DBA",
      topic: "rds",
      type: "single",
      question: "Which of the following databases is a managed service with SQL capability suited for Online Transaction Processing (OLTP)?",
      options: ["DynamoDB", "Redshift", "RDS", "MySQL on EC2"],
      correctAnswer: [2],
      explanation: "Amazon RDS is a fully managed SQL database service suited for Online Transaction Processing (OLTP) workloads, making it easy to set up, operate, and scale relational databases. DynamoDB is NoSQL, Redshift is optimized for OLAP analytics not OLTP, and MySQL on EC2 is not managed."
    },
    {
      id: "dba-020",
      domain: "DBA",
      topic: "dynamodb",
      type: "single",
      question: "You would like to set up a NoSQL database that can scale with no downtime and can handle millions of requests per second. Which AWS database is best suited for this work?",
      options: ["DynamoDB", "RDS", "Redshift", "Athena"],
      correctAnswer: [0],
      explanation: "DynamoDB is a fully managed NoSQL database service that scales with no downtime and can handle millions of requests per second with fast and consistent performance. RDS is a relational database with scaling limitations, Redshift is a data warehouse, and Athena is a query service, not a database."
    },
    {
      id: "dba-021",
      domain: "DBA",
      topic: "neptune",
      type: "single",
      question: "Which AWS service can create complex graphs for fraud detection?",
      options: ["Redshift", "Neptune", "QLDB", "Glue"],
      correctAnswer: [1],
      explanation: "Amazon Neptune is a fully managed graph database service optimized for storing and querying highly connected datasets, ideal for fraud detection, knowledge graphs, recommendation engines, and social networking. Redshift is a data warehouse, QLDB is a ledger database, and Glue is an ETL service."
    },
    {
      id: "dba-022",
      domain: "DBA",
      topic: "quicksight",
      type: "single",
      question: "Which AWS serverless service can use machine learning-powered business intelligence to create interactive dashboards such as business analytics?",
      options: ["QuickSight", "Aurora", "Athena", "Managed Blockchain"],
      correctAnswer: [0],
      explanation: "Amazon QuickSight is a serverless, machine learning-powered business intelligence service that enables you to create and publish interactive dashboards and perform business analytics. Aurora is a database, Athena is a query service, and Managed Blockchain is for blockchain networks."
    },
    {
      id: "dba-023",
      domain: "DBA",
      topic: "documentdb",
      type: "single",
      question: "A company would like to set up a fully managed MongoDB database. Which AWS database is best-suited for this task?",
      options: ["DocumentDB", "ElastiCache", "RDS", "Neptune"],
      correctAnswer: [0],
      explanation: "Amazon DocumentDB is a fully managed document database service with MongoDB compatibility, designed to be fast, scalable, and highly available for MongoDB workloads. ElastiCache is an in-memory cache, RDS supports relational databases not MongoDB, and Neptune is a graph database."
    },
    {
      id: "dba-024",
      domain: "DBA",
      topic: "dynamodb-dax",
      type: "single",
      question: "Which exclusive DynamoDB feature is an in-memory cache that can improve your performance up to 10x?",
      options: ["ElastiCache", "Edge Locations", "DynamoDB Accelerator", "Snowball Edge"],
      correctAnswer: [2],
      explanation: "Amazon DynamoDB Accelerator (DAX) is a fully managed in-memory cache exclusively for DynamoDB that delivers up to 10x performance improvement, reducing response times from milliseconds to microseconds even at millions of requests per second. ElastiCache is for general caching, Edge Locations are for CloudFront, and Snowball Edge is for data transfer."
    },
    {
      id: "dba-025",
      domain: "DBA",
      topic: "rds-availability",
      type: "single",
      question: "RDS Multi-AZ deployments’ main purpose is high availability, while RDS Read replicas’ main purpose is scalability.",
      options: ["True", "False"],
      correctAnswer: [0],
      explanation: "This statement is true. RDS Multi-AZ deployments provide high availability through automatic failover to a standby replica in another Availability Zone, while RDS Read Replicas provide horizontal read scalability by distributing read traffic across multiple database copies."
    }
  ]
});
