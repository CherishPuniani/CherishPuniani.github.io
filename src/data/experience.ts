export interface Experience {
  company: string;
  role: string;
  dates: string;
  summary: string;
}

export const experience: Experience[] = [
  {
    company: "World Wide Technology",
    role: "Data Science Intern",
    dates: "May – Jul 2026",
    summary: "At World Wide Technology, I worked on turning complex engineering drawings into structured information. I used T-Rex-2 and DINO-X visual representations alongside template matching to identify components without task-specific training, then represented the components and their connections as a graph. Another part of my work focused on recovering text drawn as CAD strokes: I developed a bitmap-based recognition approach using dilated IoU that reconstructed machine-readable text with 90.6% character recovery.",
  },
  {
    company: "Coursetexts",
    role: "MLE",
    dates: "Jun 2025 – May 2026",
    summary: "My work at Coursetexts centered on understanding and organizing complex documents. I brought together Qwen-VL, DeepSeek OCR, and YOLOv10 segmentation in a pipeline that extracted information while accounting for document layout, reaching 90% validation accuracy. Alongside extraction, I worked on finding duplicate documents in real time, combining image embeddings and perceptual hashing with FAISS to build a low-latency visual retrieval pipeline.",
  },
  {
    company: "Greenifyindia",
    role: "MLE",
    dates: "May – Jul 2025",
    summary: "At Greenifyindia, I worked on using geotagged imagery to understand land use for autonomous sowing. The work involved geospatial segmentation and hex-grid sampling to identify and organize areas suitable for sowing.",
  },
  {
    company: "Data Science Group, IIT Roorkee",
    role: "Joint Secretary",
    dates: "2024 – present",
    summary: "As Joint Secretary of the Data Science Group at IIT Roorkee, I help students explore machine learning through research working groups, lectures, reading groups, workshops, and hackathons. During BYOP 2025, a month-long project sprint, I mentored students as they worked on their projects. I also designed problem statements and co-organized Beginner’s Hypothesis 2025, our annual campus-wide Kaggle competition.",
  },
];
