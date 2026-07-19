export interface Experience {
  company: string;
  role: string;
  dates: string;
  summary: string;
}

export const experience: Experience[] = [
  {
    company: "Coursetexts",
    role: "ML Engineer",
    dates: "Jun 2025 – May 2026",
    summary:
      "Layout-aware PDF extraction with Qwen-VL and DeepSeek OCR; an end-to-end multimodal pipeline (PyMuPDF, YOLOv10, perceptual hashing) with multi-LLM orchestration at 90% validation accuracy — Dockerized on Render with GCS and Modal for serverless GPU inference.",
  },
  {
    company: "Greenifyindia",
    role: "ML Engineer",
    dates: "May – Jul 2025",
    summary:
      "Geospatial land-use segmentation from raw geotagged imagery (mIoU 0.55 on LoveDA); hex-grid sampling and rebalancing layers exporting GPS coordinates for autonomous sowing.",
  },
  {
    company: "Data Science Group, IITR",
    role: "Joint Secretary",
    dates: "Feb 2024 – now",
    summary:
      "Leading research groups and organising lectures, workshops, and hackathons across ML, DL, and RL — bridging research and industry.",
  },
];
