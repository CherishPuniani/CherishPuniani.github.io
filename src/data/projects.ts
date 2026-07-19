export interface Chip {
  label: string;
  tone: "b" | "l" | "m";
}

export interface Project {
  title: string;
  dates: string;
  href?: string;
  chips: Chip[];
  blurb: string;
}

export const projects: Project[] = [
  {
    title: "Adobe — Re-Imagining Photoshop",
    dates: "Oct – Dec 2025 · Inter-IIT Tech Meet 14.0",
    chips: [
      { label: "SDXL TURBO", tone: "b" },
      { label: "CONTROLNET", tone: "l" },
      { label: "IC-LIGHT", tone: "m" },
    ],
    blurb:
      "Pose transfer that keeps identity intact, zero-shot grounding with GroundingDINO + MobileSAM, and photorealistic relighting that survives dynamic illumination.",
  },
  {
    title: "SeedSense",
    dates: "2025 · open source",
    href: "https://github.com/CherishPuniani/SeedSense",
    chips: [
      { label: "SFA-NET", tone: "l" },
      { label: "SEGMENTATION", tone: "b" },
    ],
    blurb:
      "Finds land where seeds can actually grow — the perception layer for autonomous afforestation.",
  },
];
