/* Amazon S3 (S3) revision set — domain-aligned standalone questions.
   Registered to window.QUESTION_FILES so it loads over file:// without fetch().
   See aws-ccp-study-guide.html. Revision-only (no paperId). */
window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "s3",
  questions: [
    {
      id: "s3-001",
      domain: "S3",
      topic: "s3-storage-classes",
      type: "single",
      question: "Which Amazon S3 storage class has the lowest cost?",
      options: ["S3 Glacier Deep Archive", "S3 Intelligent-Tiering", "S3 Standard"],
      correctAnswer: [0],
      explanation: "S3 Glacier Deep Archive has the lowest storage cost of all S3 storage classes, designed for data that is accessed once or twice a year with retrieval times of 12 hours or more. S3 Standard has higher costs for frequently accessed data, and S3 Intelligent-Tiering automates cost optimization but is more expensive than Glacier Deep Archive for long-term archival."
    },
    {
      id: "s3-002",
      domain: "S3",
      topic: "s3-glacier-deep-archive",
      type: "single",
      question: "Which S3 Storage Class is the most cost-effective for archiving data with no retrieval time requirement?",
      options: ["Amazon Glacier", "Amazon Glacier Deep Archive", "Amazon S3 Standard-Infrequent Access", "Amazon S3 Intelligent Tiering"],
      correctAnswer: [1],
      explanation: "Amazon Glacier Deep Archive is the most cost-effective storage class for archiving data when there is no retrieval time requirement, with retrieval times of 12 or 48 hours. Amazon Glacier is more expensive but offers faster retrieval, while S3 Standard-IA and Intelligent-Tiering are not designed for archival use cases."
    },
    {
      id: "s3-003",
      domain: "S3",
      topic: "storage-gateway",
      type: "single",
      question: "What hybrid AWS service is used to allow on-premises servers to seamlessly use the AWS Cloud at the storage layer?",
      options: ["Elastic Block Store", "Snowball", "S3", "Storage Gateway"],
      correctAnswer: [3],
      explanation: "AWS Storage Gateway is a hybrid cloud storage service that enables on-premises servers to seamlessly use AWS Cloud storage, providing on-premises access to virtually unlimited cloud storage. EBS is block storage for EC2, Snowball is for physical data transfer, and S3 alone doesn't provide the hybrid on-premises integration."
    },
    {
      id: "s3-004",
      domain: "S3",
      topic: "s3-objects",
      type: "single",
      question: "What are Objects NOT composed of?",
      options: ["Key", "Value", "Access Keys", "Metadata"],
      correctAnswer: [2],
      explanation: "S3 objects are composed of a Key (name), Value (data), and Metadata, but not Access Keys. Access Keys are IAM credentials used to sign programmatic requests to the AWS CLI or AWS API, not components of S3 objects."
    },
    {
      id: "s3-005",
      domain: "S3",
      topic: "s3-buckets",
      type: "single",
      question: "Where are objects stored in Amazon S3?",
      options: ["Folders", "Buckets", "Files", "Bin"],
      correctAnswer: [1],
      explanation: "Objects in Amazon S3 are stored in buckets, which are containers for objects. Buckets are defined at the region level and must have globally unique names across all AWS accounts."
    },
    {
      id: "s3-006",
      domain: "S3",
      topic: "s3-lifecycle-rules",
      type: "single",
      question: "What can you use to define actions to move S3 objects between different storage classes?",
      options: ["Scaling Policies", "Bucket Policies", "Lifecycle Rules", "Replication"],
      correctAnswer: [2],
      explanation: "Lifecycle Rules define when S3 objects should be transitioned to another storage class or deleted after a specified time, enabling automated cost optimization. Bucket Policies grant permissions to S3 resources, while Replication copies objects across buckets but doesn't transition storage classes."
    },
    {
      id: "s3-007",
      domain: "S3",
      topic: "snowball-edge",
      type: "single",
      question: "A non-profit organization needs to regularly transfer petabytes of data to the cloud and to have access to local computing capacity. Which service can help with this task?",
      options: ["Snowball Edge - Storage Optimized", "Snowball Edge - Compute Optimized", "Snowcone", "Snowmobile"],
      correctAnswer: [0],
      explanation: "Snowball Edge Storage Optimized is well suited for large-scale petabyte data migrations and recurring transfer workflows while providing local computing capacity. Snowball Edge Compute Optimized focuses on high-performance workloads like machine learning rather than data transfer, while Snowcone handles smaller datasets and Snowmobile is for exabyte-scale transfers."
    },
    {
      id: "s3-008",
      domain: "S3",
      topic: "s3-standard-ia",
      type: "single",
      question: "Which S3 Storage Class is suitable for less frequently accessed data, but with rapid access when needed, while keeping a high durability and allowing an Availability Zone failure?",
      options: ["Amazon S3 Standard - General Purpose", "Amazon Glacier", "Amazon S3 One Zone-Infrequent Access", "Amazon S3 Standard-Infrequent Access"],
      correctAnswer: [3],
      explanation: "Amazon S3 Standard-Infrequent Access stores infrequently accessed data with rapid access when needed, maintains high durability, and is stored across multiple Availability Zones to survive AZ failures. S3 One Zone-IA cannot withstand an AZ failure, while Glacier is for archival storage with slower retrieval times."
    }
  ]
});
