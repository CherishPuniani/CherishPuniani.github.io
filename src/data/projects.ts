export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  eyebrow: string;
  meta: string;
  summary: string;
  details: string[];
  links?: ProjectLink[];
  status?: "in-progress";
  image?: { src: string; alt: string; width: number; height: number; caption: string };
}

export const projects: Project[] = [
  {
    id: "miniserve",
    title: "MiniServe",
    eyebrow: "ML systems",
    meta: "Inference server · in progress",
    summary: "A minimal inference server exploring the latency and throughput trade-offs of dynamic batching.",
    details: ["It is WiP."],
    // details: [
    //   "I'm building a Python inference server with asyncio and FastAPI. Its batching engine queues concurrent requests and closes a batch when it reaches a size or timeout threshold.",
    //   "The next step is to benchmark throughput and latency against an unbatched baseline across batch settings. Those measurements are in progress, so no performance claim is shown yet.",
    // ],
    status: "in-progress",
  },
  {
    id: "systolic-array",
    title: "Systolic Array Simulator",
    eyebrow: "ML systems",
    meta: "Accelerator simulation · IIT Roorkee",
    summary: "A cycle-approximate simulator for matrix-multiply accelerators and dataflow trade-offs.",
    details: [
      "I modeled weight-stationary, output-stationary, and row-stationary dataflows, including their distinct data reuse and memory traffic patterns.",
      "The simulator accounts for pipeline fill and drain latency and double-buffered prefetching. Design-space sweeps across array size, SRAM bandwidth, and dataflow strategy reveal when utilization is limited by compute or memory bandwidth.",
    ],
    links: [{ label: "Repository", href: "https://github.com/CherishPuniani/systolic_array_acc_simulator" }],
  },
  {
    id: "adobe",
    title: "Re-Imagining Photoshop",
    eyebrow: "Computer vision",
    meta: "Inter-IIT Tech Meet 14.0 · 2025",
    summary: "Pose transfer, open-vocabulary grounding, and visual editing under constrained compute.",
    details: [
      "Our team combined SDXL Turbo with IP-Adapters and ControlNets to separate identity and pose conditioning for image editing in compute-constrained settings.",
      "I also designed a zero-shot object-grounding pipeline using GroundingDINO and MobileSAM. The project placed fourth at Inter-IIT Tech Meet 14.0.",
    ],
  },
  {
    id: "entitymatch",
    title: "EntityMatch",
    eyebrow: "Applied machine learning",
    meta: "Business entity resolution · Competition project",
    summary: "Linking business records across three sources using multilingual names, addresses, and country information.",
    details: [
      "The pipeline combines multilingual text normalization and Indic transliteration with compound blocking keys, learned candidate retrieval, and Qwen3 embeddings to narrow the search space.",
      "A two-stage LightGBM matcher combines lexical and address evidence with gated Qwen3 and XLM-R cross-encoder scores. Country-specific corrections and match-set decoding refine the final links, with evaluation using precision-focused macro F0.5.",
    ],
    links: [{ label: "Repository", href: "https://github.com/CherishPuniani/EntityMatch" }],
  },
  {
    id: "humanoid-teb",
    title: "Humanoid Robot",
    eyebrow: "Robotics",
    meta: "Mechanical design · SolidWorks · 2025",
    summary: "A full-body humanoid robot CAD assembly with articulated limbs, robotic hands, and joint mechanisms.",
    details: [
      "The design brings together the head, torso, arms, and lower body in a complete SolidWorks assembly, with separate parts and subassemblies for the hands and limb connections.",
      "This was an attempt to build a humanoid robot for one of my courses, Pls forgive if the humanoid does not look like a human, I was learning through practice.",
    ],
    image: {
      src: "/projects/humanoid-complete.png",
      alt: "Front view of the complete humanoid robot assembly in SolidWorks, showing its head, torso, articulated arms, hands, and legs.",
      width: 2263,
      height: 1365,
      caption: "Complete humanoid robot assembly in SolidWorks.",
    },
  },
  {
    id: "seedsense",
    title: "SeedSense",
    eyebrow: "Computer vision",
    meta: "Open source · 2025",
    summary: "Image segmentation for identifying land suitable for autonomous sowing.",
    details: [
      "SeedSense uses an SFA-Net-based image segmentation model to identify areas where seeds can be sown autonomously.",
    ],
    links: [{ label: "Repository", href: "https://github.com/CherishPuniani/SeedSense" }],
  },
];
