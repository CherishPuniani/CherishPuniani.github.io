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
    summary: "Built a zero-shot component detection system for engineering drawings using deep visual encoders, and a training-free vector-to-text approach for recognizing CAD strokes. The latter achieved 90.6% character recovery in the internship evaluation.",
  },
  {
    company: "Coursetexts",
    role: "Machine Learning Engineer",
    dates: "Jun 2025 – May 2026",
    summary: "Designed a layout-aware document extraction pipeline using Qwen-VL, DeepSeek OCR, and YOLOv10 segmentation, reaching 90% validation accuracy. Built a low-latency visual retrieval pipeline for document deduplication with image embeddings, pHash, and FAISS.",
  },
  {
    company: "Greenifyindia",
    role: "ML Engineer",
    dates: "May – Jul 2025",
    summary: "Worked on geospatial land-use segmentation from geotagged imagery and hex-grid sampling for autonomous sowing.",
  },
  {
    company: "Data Science Group, IIT Roorkee",
    role: "Joint Secretary",
    dates: "2024 – present",
    summary: "Lead ML research working groups and organize lectures, reading groups, workshops, and hackathons. Mentored students during BYOP 2025 and helped organize Beginner’s Hypothesis 2025.",
  },
];
