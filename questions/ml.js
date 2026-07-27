/* Machine Learning (ML) revision set — domain-aligned standalone questions.
   Registered to window.QUESTION_FILES so it loads over file:// without fetch().
   See aws-ccp-study-guide.html. Revision-only (no paperId). */
window.QUESTION_FILES = window.QUESTION_FILES || [];
window.QUESTION_FILES.push({
  source: "ml",
  questions: [
    {
      id: "ml-001",
      domain: "ML",
      topic: "lex",
      type: "single",
      question: "Which AWS service helps you build text chatbots?",
      options: ["Amazon Transcribe", "Amazon Polly", "Amazon Comprehend", "Amazon Lex"],
      correctAnswer: [3],
      explanation: "Amazon Lex is a service for building conversational interfaces and text or voice chatbots using the same deep learning technology that powers Amazon Alexa. Amazon Transcribe converts speech to text, Polly converts text to speech, and Comprehend analyzes text for sentiment and entities, but none of these build chatbots."
    },
    {
      id: "ml-002",
      domain: "ML",
      topic: "sagemaker",
      type: "single",
      question: "Which service helps you reduce development time and complexity of Machine Learning (ML)?",
      options: ["AWS Redshift", "AWS Lex", "AWS SageMaker", "AWS Elastic Beanstalk"],
      correctAnswer: [2],
      explanation: "Amazon SageMaker is a fully managed machine learning service that reduces development time and complexity by providing tools to build, train, and deploy ML models at scale with built-in algorithms and infrastructure. Redshift is a data warehouse, Lex builds conversational interfaces, and Elastic Beanstalk deploys web applications—none focus on ML development."
    },
    {
      id: "ml-003",
      domain: "ML",
      topic: "kendra",
      type: "single",
      question: "Which of the following services is a document search service powered by machine learning?",
      options: ["Translate", "Kendra", "Comprehend", "Polly"],
      correctAnswer: [1],
      explanation: "Amazon Kendra is a highly accurate enterprise search service powered by machine learning that enables document search across your organization. Translate converts text between languages, Comprehend performs NLP analysis, and Polly converts text to speech — none of these provide document search capabilities."
    },
    {
      id: "ml-004",
      domain: "ML",
      topic: "personalize",
      type: "single",
      question: "A start-up would like to rapidly create customized user experiences. Which AWS service can help?",
      options: ["Personalize", "Kendra", "Connect"],
      correctAnswer: [0],
      explanation: "Amazon Personalize is a machine learning service that makes it easy for developers to create individualized recommendations for customers using their applications, enabling rapid creation of customized user experiences. Kendra is for document search and Connect is a contact center service."
    },
    {
      id: "ml-005",
      domain: "ML",
      topic: "sagemaker",
      type: "single",
      question: "A developer would like to build, train, and deploy a machine learning model quickly. Which service can he use?",
      options: ["SageMaker", "Polly", "Comprehend", "Personalize"],
      correctAnswer: [0],
      explanation: "Amazon SageMaker is a fully managed service that provides every developer and data scientist with the ability to build, train, and deploy machine learning models quickly. Polly converts text to speech, Comprehend performs NLP analysis, and Personalize creates recommendations — none of these provide the full ML development lifecycle capabilities of SageMaker."
    },
    {
      id: "ml-006",
      domain: "ML",
      topic: "comprehend",
      type: "single",
      question: "A research team would like to group articles by topics using Natural Language Processing (NLP). Which service should they use?",
      options: ["Translate", "Comprehend", "Lex", "Rekognition"],
      correctAnswer: [1],
      explanation: "Amazon Comprehend is a natural language processing (NLP) service that uses machine learning to find meaning and insights in text, including the ability to group articles by topics. Translate converts languages, Lex builds chatbots, and Rekognition analyzes images and videos."
    },
    {
      id: "ml-007",
      domain: "ML",
      topic: "lex",
      type: "single",
      question: "A company would like to implement a chatbot that will convert speech-to-text and recognize the customers' intentions. What service should it use?",
      options: ["Transcribe", "Rekognition", "Connect", "Lex"],
      correctAnswer: [3],
      explanation: "Amazon Lex is a service for building conversational interfaces using voice and text. It provides automatic speech recognition (ASR) for converting speech to text and natural language understanding (NLU) to recognize customer intent. Transcribe only converts speech to text without intent recognition, Rekognition analyzes images/videos, and Connect is a contact center service."
    },
    {
      id: "ml-008",
      domain: "ML",
      topic: "translate",
      type: "single",
      question: "A company would like to convert its documents into different languages, with natural and accurate wording. What should they use?",
      options: ["Transcribe", "Polly", "Translate", "WordTranslator"],
      correctAnswer: [2],
      explanation: "Amazon Translate is a neural machine translation service that delivers fast, high-quality, and affordable language translation with natural and accurate wording. Transcribe converts speech to text, Polly converts text to speech, and WordTranslator is not an AWS service."
    },
    {
      id: "ml-009",
      domain: "ML",
      topic: "transcribe",
      type: "single",
      question: "You should use Amazon Transcribe to turn text into lifelike speech using deep learning.",
      options: ["True", "False"],
      correctAnswer: [1],
      explanation: "False. Amazon Transcribe converts speech-to-text, not text to speech. Amazon Polly is the service that turns text into lifelike speech using deep learning."
    },
    {
      id: "ml-010",
      domain: "ML",
      topic: "rekognition",
      type: "single",
      question: "You would like to find objects, people, text, or scenes in images and videos. What AWS service should you use?",
      options: ["Rekognition", "Polly", "Kendra", "Lex"],
      correctAnswer: [0],
      explanation: "Amazon Rekognition makes it easy to add image and video analysis to your applications, allowing you to find objects, people, text, or scenes in images and videos using proven, highly scalable deep learning technology. Polly converts text to speech, Kendra provides document search, and Lex builds chatbots."
    },
    {
      id: "ml-011",
      domain: "ML",
      topic: "transcribe",
      type: "single",
      question: "Which AWS service makes it easy to convert speech-to-text?",
      options: ["Connect", "Translate", "Transcribe", "Polly"],
      correctAnswer: [2],
      explanation: "Amazon Transcribe is an AWS service that makes it easy for customers to convert speech-to-text using automatic speech recognition. Connect is a contact center service, Translate converts between languages, and Polly converts text to speech."
    }
  ]
});
