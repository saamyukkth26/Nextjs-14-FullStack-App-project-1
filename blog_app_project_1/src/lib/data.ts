export const personalInfo = {
  name: "Saamyukkth Suresh",
  title: "Software Development Engineer",
  subtitle: "AI/ML & GenAI Engineer",
  tagline: "Building intelligent systems at the intersection of AI, LLMs, and scalable engineering.",
  email: "saamyukkth.s@gmail.com",
  phone: "+91 9342483010",
  linkedin: "https://www.linkedin.com/in/saamyukkth-s-787119222/",
  github: "https://github.com/saamyukkth",
  location: "Chennai, Tamil Nadu, India",
  bio: "Software Development Engineer at Prodapt, specializing in AI/ML and Generative AI systems. I build production-grade intelligent platforms — from LLM-powered agents to vector search pipelines — with a passion for pushing what's possible with modern AI.",
};

export const skills = {
  "Programming & Scripting": ["Python", "JavaScript", "C++", "C", "SQL", "TypeScript"],
  "AI / ML & GenAI": ["Large Language Models", "RAG", "Prompt Engineering", "Embeddings", "Semantic Search", "Deep Learning", "Machine Learning", "SHAP / Explainable AI", "Vector Similarity Search"],
  "Frameworks & Agentic AI": ["FastAPI", "LangChain", "LangGraph", "CrewAI", "Scikit-learn", "NumPy", "Pandas", "WEKA", "Next.js", "React"],
  "Databases & Data Stores": ["Milvus Vector DB", "MySQL", "MongoDB"],
  "Cloud, DevOps & Tools": ["Azure OpenAI", "GCP Agents", "Google Gemini", "Docker", "Git", "GitHub", "Jira", "MS Teams APIs"],
};

export const techIcons: Record<string, string> = {
  Python: "🐍",
  JavaScript: "🟨",
  TypeScript: "🔷",
  "C++": "⚡",
  SQL: "🗃️",
  FastAPI: "⚡",
  LangChain: "🔗",
  LangGraph: "🕸️",
  CrewAI: "🤖",
  Docker: "🐳",
  GitHub: "🐙",
  "Azure OpenAI": "☁️",
  "GCP Agents": "🌐",
  "Milvus Vector DB": "🔮",
  MySQL: "🐬",
  MongoDB: "🍃",
  React: "⚛️",
  "Next.js": "▲",
};

export const experience = [
  {
    company: "Prodapt",
    role: "Software Development Engineer",
    period: "Jul 2025 – Present",
    type: "Full-time",
    location: "Chennai, Tamil Nadu",
    logo: "/prodapt-logo.png",
    color: "#FF6B35",
    projects: [
      {
        name: "SKILLOS – AI Skill Intelligence Platform",
        description: "Engineered a production-grade AI skill intelligence system leveraging Azure OpenAI embeddings and Milvus Vector DB to perform semantic skill extraction, vector similarity search, and workforce capability analysis via scalable pipelines.",
        tags: ["Azure OpenAI", "Milvus", "Embeddings", "Vector Search", "FastAPI"],
      },
      {
        name: "GenAI Assessment & Evaluation Engine",
        description: "Developed a GenAI-driven assessment platform using LLMs, embedding-based similarity scoring, and FastAPI microservices to automate question generation and evaluation with persistent storage in MySQL.",
        tags: ["LLMs", "FastAPI", "MySQL", "Embeddings", "GenAI"],
      },
      {
        name: "Employee Attrition Prediction & Explainable AI",
        description: "Built machine learning models for employee attrition prediction using Scikit-learn and WEKA, integrating SHAP-based explainability to quantify feature impact and support interpretable, data-driven decisions.",
        tags: ["Scikit-learn", "WEKA", "SHAP", "XAI", "ML"],
      },
      {
        name: "Enterprise Onboarding Agent (GCP-Based Agentic AI)",
        description: "Contributed to building a cloud-hosted agentic AI system on GCP to automate company onboarding workflows, implementing LLM-driven agents, tool invocation, and stateful task orchestration.",
        tags: ["GCP", "Agentic AI", "LLM Agents", "Orchestration", "Cloud"],
      },
    ],
  },
  {
    company: "Prodapt",
    role: "Software Development Engineer Intern",
    period: "Jan 2025 – Jul 2025",
    type: "Internship",
    location: "Chennai, Tamil Nadu",
    logo: "/prodapt-logo.png",
    color: "#FF6B35",
    projects: [
      {
        name: "RAG Conversational AI",
        description: "Developed a personalized RAG-based conversational AI system using LangChain, LangGraph, and Milvus Vector DB, integrating Azure OpenAI LLMs for contextual semantic retrieval and response generation.",
        tags: ["LangChain", "LangGraph", "RAG", "Milvus", "Azure OpenAI"],
      },
      {
        name: "Multi-Agent Automation System",
        description: "Built CrewAI-based multi-agent workflows for automated news scraping and semantic summarization, leveraging asynchronous pipelines and agent orchestration.",
        tags: ["CrewAI", "Multi-Agent", "Async", "Semantic AI"],
      },
      {
        name: "Jira–MS Teams AI Automation (Meeting Intelligence PoC)",
        description: "Built a meeting intelligence proof-of-concept that processes MS Teams meeting transcripts, applies speaker diarization and LLM-based intent extraction, and integrates with Jira APIs to automatically generate and assign work items.",
        tags: ["MS Teams API", "Jira API", "LLMs", "Speaker Diarization", "NLP"],
      },
    ],
  },
];

export const education = [
  {
    institution: "Vellore Institute of Technology (VIT)",
    degree: "B.Tech in Computer Science",
    specialization: "Specialisation in AI and ML",
    cgpa: "8.65",
    period: "Oct 2021 – Sept 2025",
    location: "Chennai, Tamil Nadu",
    logo: "/vit-logo.png",
    color: "#1A73E8",
  },
];

export const certifications = [
  {
    name: "LLM Engineering: Master AI, Large Language Models and Agents",
    issuer: "Udemy",
    date: "Oct 2025",
    description: "Hands-on training in LLM architectures, agentic workflows, prompt engineering, tool calling, and production LLM systems.",
    tags: ["LLMs", "Agents", "Prompt Engineering"],
    color: "#A435F0",
  },
  {
    name: "LangChain: Develop AI Agents with LangChain and LangGraph",
    issuer: "Udemy",
    date: "Oct 2025",
    description: "Focused on building RAG pipelines, agent orchestration, memory, tools, and graph-based LLM workflows using LangChain and LangGraph.",
    tags: ["LangChain", "LangGraph", "RAG"],
    color: "#1CC88A",
  },
  {
    name: "AI / ML / DS 1-Credit Program",
    issuer: "Cognizant",
    date: "2024",
    description: "Foundational program covering machine learning algorithms, data science workflows, and applied analytics.",
    tags: ["ML", "Data Science", "Analytics"],
    color: "#0066CC",
  },
  {
    name: "The Complete 2023 Web Development Bootcamp",
    issuer: "Udemy",
    date: "Dec 2023",
    description: "End-to-end exposure to full-stack web development, REST APIs, frontend–backend integration, and deployment fundamentals.",
    tags: ["Full-Stack", "REST APIs", "Web Dev"],
    color: "#FF6B35",
  },
];

export const projects = [
  {
    title: "SKILLOS – AI Skill Intelligence Platform",
    description: "Production-grade AI system for semantic skill extraction and workforce capability analysis using Azure OpenAI and Milvus Vector DB.",
    tech: ["Azure OpenAI", "Milvus", "FastAPI", "Python", "Embeddings"],
    liveUrl: "",
    githubUrl: "",
    thumbnail: "",
    featured: true,
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    title: "GenAI Assessment Engine",
    description: "LLM-powered platform that automates question generation and evaluation with embedding-based similarity scoring via FastAPI microservices.",
    tech: ["LLMs", "FastAPI", "MySQL", "Python", "GenAI"],
    liveUrl: "",
    githubUrl: "",
    thumbnail: "",
    featured: true,
    gradient: "from-purple-600 to-pink-500",
  },
  {
    title: "RAG Conversational AI",
    description: "Personalized RAG-based conversational AI system using LangChain, LangGraph, and Milvus with Azure OpenAI for contextual retrieval.",
    tech: ["LangChain", "LangGraph", "Milvus", "Azure OpenAI", "RAG"],
    liveUrl: "",
    githubUrl: "",
    thumbnail: "",
    featured: true,
    gradient: "from-green-600 to-teal-500",
  },
  {
    title: "Enterprise Onboarding Agent",
    description: "Cloud-hosted agentic AI system on GCP automating company onboarding workflows with LLM-driven agents and stateful task orchestration.",
    tech: ["GCP", "LLM Agents", "Python", "Cloud", "Orchestration"],
    liveUrl: "",
    githubUrl: "",
    thumbnail: "",
    featured: false,
    gradient: "from-orange-600 to-red-500",
  },
  {
    title: "Multi-Agent Automation System",
    description: "CrewAI-based multi-agent workflows for automated news scraping and semantic summarization with asynchronous pipelines.",
    tech: ["CrewAI", "Python", "Async", "Multi-Agent", "NLP"],
    liveUrl: "",
    githubUrl: "",
    thumbnail: "",
    featured: false,
    gradient: "from-indigo-600 to-blue-500",
  },
  {
    title: "Meeting Intelligence PoC",
    description: "MS Teams transcript processor with speaker diarization, LLM intent extraction, and automatic Jira ticket creation end-to-end.",
    tech: ["MS Teams API", "Jira API", "LLMs", "Python", "NLP"],
    liveUrl: "",
    githubUrl: "",
    thumbnail: "",
    featured: false,
    gradient: "from-rose-600 to-pink-500",
  },
];
