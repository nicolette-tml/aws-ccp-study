/* EC2 Instance Storage (STG) revision set — domain-aligned standalone questions.
   Registered to window.QUESTION_FILES so it loads over file:// without fetch().
   See aws-ccp-study-guide.html. Revision-only (no paperId). */
window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "stg",
  questions: [
    {
      id: "stg-001",
      domain: "STG",
      topic: "efs",
      type: "single",
      question: "Which storage service is best suited for a POSIX-compliant, scalable file system that can be mounted concurrently by many Linux EC2 instances?",
      options: ["Amazon S3", "Amazon EFS", "Amazon EBS", "Amazon FSx for Windows File Server"],
      correctAnswer: [1],
      explanation: "Amazon EFS (Elastic File System) provides a shared, scalable NFS file system that many EC2 instances can mount at the same time."
    },
    {
      id: "stg-002",
      domain: "STG",
      topic: "ebs",
      type: "single",
      question: "Which storage option is directly attached to a single EC2 instance and behaves like a virtual hard drive?",
      options: ["Amazon S3", "Amazon EBS", "Amazon EFS", "Amazon Glacier"],
      correctAnswer: [1],
      explanation: "Amazon EBS (Elastic Block Store) provides block-level storage volumes attached to individual EC2 instances, similar to a traditional hard drive."
    },
    {
      id: "stg-003",
      domain: "STG",
      topic: "fsx",
      type: "single",
      question: "A media company needs a native, fully managed Windows file share supporting the SMB protocol for its Windows-based applications. Which service fits best?",
      options: ["Amazon EFS", "Amazon FSx for Windows File Server", "Amazon S3 with SMB gateway", "AWS Storage Gateway Volume mode"],
      correctAnswer: [1],
      explanation: "Amazon FSx for Windows File Server provides a fully managed native Windows file system built on SMB, ideal for Windows-based workloads."
    },
    {
      id: "stg-004",
      domain: "STG",
      topic: "efs",
      type: "single",
      question: "Which resource provides an IP address for an NFSv4 endpoint on which a file system in Amazon Elastic File System (Amazon EFS) can be mounted?",
      options: ["An access point", "A file share", "A mount target", "A resource policy"],
      correctAnswer: [2],
      explanation: "A mount target provides an IP address for an NFSv4 endpoint that allows EC2 instances to mount an Amazon EFS file system. Access points manage application access to shared datasets, file shares are not an EFS concept, and resource policies control permissions but do not provide mount endpoints."
    },
    {
      id: "stg-005",
      domain: "STG",
      topic: "efs",
      type: "single",
      question: "What is AWS EFS?",
      options: ["AWS Elastic File System", "AWS Enterprise File System", "AWS Efficient File System"],
      correctAnswer: [0],
      explanation: "AWS EFS stands for Elastic File System, a fully managed, scalable NFS file system that can be mounted by multiple EC2 instances simultaneously. The other options (Enterprise File System and Efficient File System) are not real AWS service names."
    },
    {
      id: "stg-006",
      domain: "STG",
      topic: "instance-store",
      type: "single",
      question: "If an instance store reboots, does the data in the instance persist?",
      options: ["Yes", "No"],
      correctAnswer: [0],
      explanation: "Instance store data persists during a reboot because the instance remains on the same physical host. However, if the instance is stopped or terminated, or if the underlying host fails, the data in instance store is lost because it is ephemeral storage physically attached to the host machine."
    },
    {
      id: "stg-007",
      domain: "STG",
      topic: "ebs-snapshots",
      type: "single",
      question: "AWS Elastic Block Store Snapshot is:",
      options: ["Full data backup", "Differential data backup", "Incremental data backup"],
      correctAnswer: [2],
      explanation: "EBS Snapshots are incremental backups, meaning the first snapshot copies all data blocks, but subsequent snapshots only copy blocks that changed since the last snapshot. This approach saves storage space and time compared to full or differential backups."
    },
    {
      id: "stg-008",
      domain: "STG",
      topic: "efs",
      type: "single",
      question: "Which EC2 Storage would you use to create a shared network file system for your EC2 Instances?",
      options: ["EBS Volume", "EC2 Instance Store", "EBS Snapshots", "EFS"],
      correctAnswer: [3],
      explanation: "Amazon EFS (Elastic File System) is a fully managed, scalable network file system that can be mounted by multiple EC2 instances simultaneously across multiple availability zones. EBS volumes are block storage tied to a single instance (in most cases), EC2 Instance Store is ephemeral local storage, and EBS Snapshots are backups, not file systems."
    },
    {
      id: "stg-009",
      domain: "STG",
      topic: "ec2-image-builder",
      type: "single",
      question: "Which service can be used to automate image management processes?",
      options: ["AMI", "EC2 Image Builder", "EBS Snapshots", "IAM"],
      correctAnswer: [1],
      explanation: "EC2 Image Builder provides an automated pipeline for creating, maintaining, validating, sharing, and deploying Amazon Machine Images (AMIs) for use on AWS and on-premises. While AMIs are the images themselves, EC2 Image Builder automates the entire image management lifecycle, whereas EBS Snapshots are just volume backups and IAM manages permissions."
    },
    {
      id: "stg-010",
      domain: "STG",
      topic: "fsx",
      type: "single",
      question: "Which of the following is a fully managed native Microsoft Windows file system?",
      options: ["EFS", "FSx", "EBS"],
      correctAnswer: [1],
      explanation: "Amazon FSx for Windows File Server is a fully managed native Microsoft Windows file system built on Windows Server, providing SMB protocol support and Active Directory integration. EFS is for Linux-based NFS workloads, and EBS is block storage rather than a file system service."
    },
    {
      id: "stg-011",
      domain: "STG",
      topic: "ami",
      type: "single",
      question: "What are AMIs NOT used for?",
      options: ["Add your own software license", "Add your own configuration", "Add your own operating-system", "Add your own IP addresses"],
      correctAnswer: [3],
      explanation: "AMIs (Amazon Machine Images) are used to package operating systems, software, configuration, and licenses, but they do not include or manage IP addresses. IP addresses are assigned when you launch an EC2 instance, either automatically or manually, and are separate from the AMI configuration."
    },
    {
      id: "stg-012",
      domain: "STG",
      topic: "ebs",
      type: "single",
      question: "EBS Volumes CANNOT be attached to multiple EC2 instances at a time.",
      options: ["True", "False"],
      correctAnswer: [0],
      explanation: "This statement is true. Standard EBS volumes can only be attached to one EC2 instance at a time, though the instance can have multiple EBS volumes attached. There is a special multi-attach feature for certain Provisioned IOPS SSD volumes, but the default behavior is one volume to one instance."
    },
    {
      id: "stg-013",
      domain: "STG",
      topic: "ebs",
      type: "single",
      question: "An EBS Volume is a network drive you can attach to your instances while they run, so your instances' data persist even after their termination.",
      options: ["True", "False"],
      correctAnswer: [0],
      explanation: "This statement is true. EBS (Elastic Block Store) volumes are network-attached block storage devices that persist independently of the EC2 instance lifecycle. When configured properly, data on an EBS volume persists even after the instance is terminated, making them suitable for durable storage."
    },
    {
      id: "stg-014",
      domain: "STG",
      topic: "ec2-instance-store",
      type: "single",
      question: "Which statement is CORRECT regarding EC2 Instance Store?",
      options: ["It is not good to use a disk to cache content", "It has a better I/O performance, but the data is lost if the EC2 Instance is terminated", "Your data is always safe with EC2 Instance Store"],
      correctAnswer: [1],
      explanation: "EC2 Instance Store provides high I/O performance because it is physically attached to the host computer, but the data is ephemeral and lost if the EC2 instance is stopped, terminated, or fails. This makes it ideal for temporary data like caches or buffers, but not for persistent storage."
    },
    {
      id: "stg-015",
      domain: "STG",
      topic: "ebs",
      type: "single",
      question: "What is an EBS Snapshot?",
      options: ["The operating-system on an EC2 Instance", "A backup of your EBS Volume at a point in time", "The amount of CPU and RAM of an EC2 Instance"],
      correctAnswer: [1],
      explanation: "An EBS Snapshot is a point-in-time backup of an EBS volume stored in Amazon S3. Snapshots are incremental, capturing only the blocks that have changed since the last snapshot, and can be used to restore volumes or create new ones across availability zones."
    },
    {
      id: "stg-016",
      domain: "STG",
      topic: "ami",
      type: "single",
      question: "Where can you find a third party's AMI so you can use it to launch your EC2 Instance?",
      options: ["Public AMIs", "My own AMIs", "AWS Marketplace AMIs"],
      correctAnswer: [2],
      explanation: "AWS Marketplace AMIs are where you can find and purchase third-party AMIs with pre-configured software, often with commercial licensing. Public AMIs are free community-shared images, and My own AMIs are the custom images you create yourself."
    },
    {
      id: "stg-017",
      domain: "STG",
      topic: "ebs",
      type: "single",
      question: "What is an EBS Volume tied to?",
      options: ["A region", "A data center", "An edge location", "An availability zone"],
      correctAnswer: [3],
      explanation: "EBS volumes are tied to a specific availability zone within a region. You can only attach an EBS volume to an EC2 instance in the same availability zone. To move data across availability zones, you must create a snapshot and restore it in the target zone."
    }
  ]
});
