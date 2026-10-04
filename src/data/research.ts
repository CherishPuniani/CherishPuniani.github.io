export interface ResearchTable {
  title: string;
  columns: string[];
  rows: string[][];
  source: string;
  note?: string;
  highlightRows?: number[];
}

export interface ResearchWork {
  slug: string;
  shortTitle: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  arxivId: string;
  paperUrl: string;
  summary: string;
  codeUrl?: string;
  figure?: { src: string; alt: string; caption?: string };
  highlights?: string[];
  abstract?: string[];
  contribution?: string[];
  method?: string[];
  algorithms?: {
    title: string;
    summary: string;
    src: string;
    alt: string;
    width: number;
    height: number;
    source: string;
    page: number;
  }[];
  results?: string[];
  tables?: ResearchTable[];
}

// Paper-grounded summaries are draft portfolio copy. Cherish can add personal
// contribution details and original figures after reviewing each page.
export const research: ResearchWork[] = [
  {
    slug: "b-dense",
    shortTitle: "B-DENSE",
    title: "B-DENSE: Branching For Dense Ensemble Network Supervision Efficiency",
    authors: ["Cherish Puniani", "Tushar Kumar", "Arnav Bendre", "Gaurav Kumar", "Shree Singhi"],
    venue: "ICLR DeLTa 2026",
    year: 2026,
    arxivId: "2602.15971",
    paperUrl: "https://arxiv.org/abs/2602.15971",
    summary: "Dense trajectory supervision for diffusion distillation in low-step image generation.",
    figure: {
      src: "/research/b-dense-method.png",
      alt: "B-DENSE diagram showing a student with multiple branches predicting successive denoising states along a teacher trajectory.",
      caption: "Method diagram from Figure 1 of the B-DENSE paper (p. 2).",
    },
    tables: [
      {
        title: "Progressive Distillation on CIFAR-10 · FID ↓",
        columns: ["Method", "512 NFE", "256 NFE", "128 NFE"],
        rows: [
          ["Progressive Distillation", "11.96", "21.52", "39.66"],
          ["B-DENSE", "8.92", "12.04", "20.81"],
        ],
        source: "Table 1, p. 7",
        highlightRows: [1],
      },
      {
        title: "SFD at low sampling budgets · FID ↓",
        columns: ["Dataset · method", "2 NFE", "3 NFE", "4 NFE", "5 NFE"],
        rows: [
          ["CIFAR-10 · SFD", "4.53", "3.58", "3.24", "3.06"],
          ["CIFAR-10 · B-DENSE", "4.40", "3.52", "3.21", "3.01"],
          ["ImageNet 64×64 · SFD", "10.25", "6.35", "4.99", "4.33"],
          ["ImageNet 64×64 · B-DENSE", "9.57", "6.54", "5.97", "5.91"],
        ],
        source: "Tables 2–3, p. 7",
        highlightRows: [1, 3],
        note: "Lower FID is better. On ImageNet, the B-DENSE improvement appears at 2 NFE; SFD leads at 3–5 NFE.",
      },
    ],
    highlights: [
      "Trains a student against intermediate states along a teacher's denoising path.",
      "Multiple output branches share one U-Net backbone.",
      "Improves CIFAR-10 FID across tested sampling budgets; ImageNet gains depend on step count.",
    ],
    abstract: [
      "Diffusion distillation speeds up image generation by teaching a student model to replace several denoising steps with fewer ones. Common approaches supervise the student at sparse points along the teacher's path, leaving intermediate states unused. B-DENSE asks whether those states can make the shortcut easier to learn.",
      "It expands the student's output into branches, each aligned with a different point in the teacher trajectory, and trains them together. The paper integrates this idea with Progressive Distillation and SFD. Its results support denser trajectory supervision, especially in low-step settings, while also showing that gains on ImageNet depend on the number of sampling steps and branch weights.",
    ],
    method: [
      "A pretrained teacher runs several denoising steps and retains the intermediate outputs. The student shares its main network across multiple output branches, with each branch predicting one corresponding teacher state. Training minimizes a weighted loss across those states. The paper evaluates this branched supervision on CIFAR-10 and ImageNet 64×64 using Fréchet inception distance (FID; lower is better).",
    ],
    algorithms: [
      {
        title: "Progressive Distillation + B-DENSE",
        summary: "Each distillation round initializes the student from the teacher. Intermediate DDIM targets supervise the student branches through a weighted reconstruction loss; after convergence, the student becomes the next teacher.",
        src: "/research/b-dense-pd-algorithm.png",
        alt: "Algorithm 2: initialize the student from the teacher, sample data and noise, retain intermediate DDIM targets, minimize the weighted sum of branch reconstruction errors, then promote the trained student to teacher and reduce the step count.",
        width: 800,
        height: 1032,
        source: "Algorithm 2, p. 4",
        page: 4,
      },
      {
        title: "SFD + B-DENSE",
        summary: "At each sampling interval, one branched student step is matched to the teacher solver's intermediate states. A weighted branch loss updates the student, and the detached endpoint prediction starts the next interval.",
        src: "/research/b-dense-sfd-algorithm.png",
        alt: "Algorithm 4: sample a noisy initial state, traverse sampling intervals, predict student branches with Euler, obtain teacher states with an ODE solver, minimize their weighted distance, and detach the endpoint branch for the next interval.",
        width: 796,
        height: 716,
        source: "Algorithm 4, p. 6",
        page: 6,
      },
    ],
    results: [
      "In Progressive Distillation on CIFAR-10, FID at 128 evaluations fell from 39.66 to 20.81. With SFD on CIFAR-10, B-DENSE improved FID at two to five evaluations (4.40 versus 4.53 at two). On ImageNet 64×64 it improved at two evaluations (9.57 versus 10.25), but trailed SFD at three to five.",
    ],
  },
  {
    slug: "image-alchemy",
    shortTitle: "IMAGE-ALCHEMY",
    title: "IMAGE-ALCHEMY: Advancing subject fidelity in personalised text-to-image generation",
    authors: ["Amritanshu Tiwari", "Cherish Puniani", "Kaustubh Sharma", "Ojasva Nema"],
    venue: "ICLR DeLTa 2025",
    year: 2025,
    arxivId: "2505.10743",
    paperUrl: "https://arxiv.org/abs/2505.10743",
    summary: "Subject-driven image personalization using LoRA and segmentation with SDXL.",
    figure: {
      src: "/research/image-alchemy-pipeline.png",
      alt: "IMAGE-ALCHEMY pipeline: a generic SDXL scene is generated, the subject is segmented and blurred, and a subject-specific LoRA inserts the personalized subject.",
      caption: "Overall pipeline from Figure 2 of the IMAGE-ALCHEMY paper (p. 4).",
    },
    tables: [
      {
        title: "Subject similarity and prompt alignment · cosine similarity ↑",
        columns: ["Method", "DINO", "CLIP-I", "CLIP-T"],
        rows: [
          ["Real images", "0.834", "0.763", "—"],
          ["DreamBooth", "0.668", "0.803", "0.305"],
          ["Textual Inversion", "0.569", "0.780", "0.255"],
          ["Custom Diffusion", "0.643", "0.798", "0.256"],
          ["Subject Diffusion", "0.711", "0.787", "0.293"],
          ["IMAGE-ALCHEMY", "0.789", "0.557", "0.334"],
        ],
        source: "Table 1, p. 8",
        highlightRows: [5],
        note: "DINO and CLIP-I compare generated images with subject references; CLIP-T compares images with text. The strong DINO result comes with a lower CLIP-I score than the listed personalization baselines.",
      },
    ],
    highlights: [
      "Separates scene composition from subject insertion.",
      "Combines a subject-specific LoRA with detection, segmentation, and image-to-image generation.",
      "Reports strong DINO subject similarity, while other quality measures are mixed.",
    ],
    abstract: [
      "Personalizing a text-to-image model from a handful of photos is difficult: the generated subject can lose its identity, while fine-tuning can narrow the model's ability to follow new scenes. IMAGE-ALCHEMY divides the task into two stages. Unmodified SDXL first creates the scene using a generic class description. A subject-specific LoRA then replaces the relevant region through a segmentation-guided image-to-image pass.",
      "This lets the base model handle composition while the adapted weights focus on identity. Experiments cover people and animals and compare generated images using subject-similarity and image-quality measures. The paper reports strong DINO similarity for subject preservation, while its other measures show a less uniform picture.",
    ],
    method: [
      "The method selects a low-association placeholder token and fine-tunes LoRA weights in SDXL's U-Net attention layers on roughly four or five subject images. It generates a base scene without the adapted weights, then uses Grounding DINO and SAM to locate the generic subject. After blurring that region, an image-to-image pass with the trained LoRA and subject token fills it with the personalized subject.",
    ],
    results: [
      "The two-stage method reports DINO similarity of 0.789, above the listed personalization baselines. Its CLIP-I score of 0.557 is lower than those baselines, and blind image-quality metrics do not uniformly improve over unmodified SDXL. The strongest supported claim is improved subject similarity under the paper's DINO evaluation.",
    ],
  },
  {
    slug: "impact-of-language-guidance",
    shortTitle: "Impact of Language Guidance",
    title: "Impact of Language Guidance: A Reproducibility Study",
    authors: ["Cherish Puniani", "Advika Sinha", "Shree Singhi", "Aayan Yadav"],
    venue: "arXiv preprint",
    year: 2025,
    arxivId: "2504.08140",
    paperUrl: "https://arxiv.org/abs/2504.08140",
    summary: "A reproducibility study of language guidance for self-supervised visual representation learning.",
    figure: {
      src: "/research/language-guidance-method.png",
      alt: "Caption refinement diagram: BLIP-2 generates an alternative caption and an image-text matching filter chooses between it and the RedCaps caption.",
      caption: "Caption-refinement method from Figure 2 of the Impact of Language Guidance paper (p. 4).",
    },
    tables: [
      {
        title: "Average accuracy across ten downstream datasets · % ↑",
        columns: ["Model", "Linear probe", "5-way, 5-shot"],
        rows: [
          ["SimCLR · visual", "64.13", "65.80"],
          ["LGSimCLR · original captions", "63.79", "69.72"],
          ["LGSimCLR · revised captions", "63.76", "70.27"],
          ["SimSiam · visual", "58.75", "59.82"],
          ["LGSimSiam · original captions", "57.45", "62.68"],
          ["LGSimSiam · revised captions", "59.28", "64.81"],
        ],
        source: "Tables 2–3, p. 8",
        highlightRows: [2, 5],
        note: "Revised captions improve the few-shot average for both language-guided models. Linear-probe averages are mixed; visual and original-caption rows provide context.",
      },
    ],
    highlights: [
      "Reexamines caption-based positive-pair sampling in visual self-supervised learning.",
      "Uses BLIP-2 and image-text matching to refine noisy RedCaps captions.",
      "Finds mixed downstream gains and little separation in saliency-map quality.",
    ],
    abstract: [
      "Contrastive visual learning often builds positive pairs from augmented versions of the same image. Language-guided sampling offers another route: pair different images whose captions describe similar concepts. This study revisits that idea under a resource-constrained setup and asks how much of its benefit depends on caption quality and visual backbone.",
      "The team trained variants of SimCLR and SimSiam with a ResNet-34 backbone, then compared original RedCaps text against captions selected through an automated refinement pipeline. Classification and saliency-map evaluations revealed a nuanced picture: better captions helped several downstream tasks, but improvements were inconsistent. Language-guided models also overfit early, and the smaller backbone did not reproduce the original paper's strongest gains.",
    ],
    method: [
      "The pipeline pairs images using similarity between sentence embeddings of their captions. For the revised dataset, BLIP-2 generates candidate captions and an image-text matching score selects the caption that better matches each image. Models are trained on RedCaps-2020 with a ResNet-34 backbone, then tested through frozen-feature linear probes, few-shot classification, and Grad-CAM-based saliency comparisons on ImageNet-S50.",
    ],
    results: [
      "On the ten-dataset few-shot average, revised-caption LGSimSiam reached 64.81 versus 62.68 with original captions; revised-caption LGSimCLR reached 70.27 versus 69.72. Linear-probe results were mixed, and saliency metrics differed little among compared models. Some original experiments could not be reproduced because of incomplete subsampling code and unavailable datasets.",
    ],
  },
];
