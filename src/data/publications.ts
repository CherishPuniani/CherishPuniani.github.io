import type { Chip } from "./projects";

export interface Publication {
  title: string;
  authors: string;
  arxiv: string;
  href: string;
  chips: Chip[];
  summary: string;
}

export const publications: Publication[] = [
  {
    title: "B-DENSE",
    authors: "C. Puniani, T. Kumar, A. Bendre, S. Singhi",
    arxiv: "arXiv:2602.15971",
    href: "https://arxiv.org/abs/2602.15971",
    chips: [
      { label: "ICLR 2026 W", tone: "b" },
      { label: "FID ↓", tone: "l" },
    ],
    summary:
      "Dense trajectory supervision for diffusion distillation — the whole teacher trajectory, not just the endpoint. Consistent FID gains at low step counts.",
  },
  {
    title: "IMAGE-ALCHEMY",
    authors: "A. Tiwari, C. Puniani, K. Sharma, O. Nema",
    arxiv: "arXiv:2505.10743",
    href: "https://arxiv.org/abs/2505.10743",
    chips: [
      { label: "ICLR 2025 W", tone: "b" },
      { label: "DINO 0.789", tone: "m" },
    ],
    summary:
      "Your face, faithfully, in SDXL — LoRA + segmentation personalization with fine-tuning under 7 minutes.",
  },
  {
    title: "Impact of Language Guidance",
    authors: "C. Puniani, A. Sinha, S. Singhi, A. Yadav",
    arxiv: "arXiv:2504.08140",
    href: "https://arxiv.org/abs/2504.08140",
    chips: [
      { label: "+5–8% ACC", tone: "l" },
      { label: "REPRO", tone: "b" },
    ],
    summary:
      "A reproducibility study that ended up improving the pipeline it was reproducing. ImageNet-1K, linear probes, receipts included.",
  },
];
