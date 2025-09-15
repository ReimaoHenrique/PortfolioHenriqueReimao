import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Henrique Reimão",
  initials: "HR",
  url: "https://henrique.reimao.vercel.app",
  location: "Salvador, Ba",
  description:
    "Software Developer turned entrepreneur. Passionate about building solutions that matter and helping people grow. Always exploring new ideas, especially in Rust, Linux, and cybersecurity.",
  summary:
    "In early 2025, I decided to take a bold step: leaving my comfort zone to focus on building my own projects and digital products. [Qr Pets](https://qrpets.info) Before that, I gained experience as a software developer, with a strong passion for Rust, Linux, and cybersecurity. I’ve also dived into the container world with Podman and Kubernetes, explored the back-end ecosystem with Axum, and actively engaged with tech communities to both learn and share. My journey is driven by the desire to create solutions that truly matter and help people grow through technology.",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Postgres",
    "Docker",
    "Podman",
    "Kubernetes",
    "Rust",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ReimaoHenrique",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/henriquereimao/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Medium: {
        name: "medium.com",
        url: "https://www.linkedin.com/in/henriquereimao/",
        icon: Icons.medium,

        navbar: false,
      },
      X: {
        name: "X",
        url: "https://x.com",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "QR Petes",
      href: "https://www.qrpets.info",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/logo/QrPetesLogo.svg",
      start: "May 2025",
      end: "Present",
      description:
        "Nossa missão é garantir a segurança e o bem-estar dos pets, oferecendo uma solução digital, rápida e eficiente para que informações vitais estejam sempre acessíveis. Acreditamos que a tecnologia pode ser uma grande aliada na proteção dos nossos melhores amigos.",
    },
  ],
  education: [
    {
      school: "Hackersdobem",
      href: "https://hackersdobem.org.br/",
      degree: "s3",
      logoUrl: "logo/Hdb.png",
      start: "2024",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
  ],
  hackathons: [
    {
      title: "HackSão Salvador 2023",
      dates: "September 15th, 2023",
      location: "Salvador, Ba",
      description:
        "Developed a smart pet tracker using QR codes and IoT sensors, integrating real-time notifications and a web dashboard.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hacksp-pets.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/henriquereimao/qr-pets-hackathon",
        },
      ],
    },
  ],
} as const;
