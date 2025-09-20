import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Henrique Reimão",
  initials: "HR",
  url: "https://henriquereimao.vercel.app",
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
    //{ href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "Henrique.reimao@outlook.com",
    tel: "+55071992076895",
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
      title: "Saúde Pet Digital",
      logoUrl: "/logo/QrPetesLogo.svg",
      start: "May 2025",
      end: "Present",
      description:
        "Nossa missão é garantir a segurança e o bem-estar dos pets, oferecendo uma solução digital, rápida e eficiente para que informações vitais estejam sempre acessíveis. Acreditamos que a tecnologia pode ser uma grande aliada na proteção dos nossos melhores amigos.",
    },
  ],
  education: [
    {
      school: "Hackersdobem/Senai",
      href: "https://hackersdobem.org.br/",
      degree: "Redes/cybersecurity",
      logoUrl: "logo/Hdb.png",
      start: "2024",
      end: "2025",
    },
    {
      school: "IBM/Coursera",
      href: "coursera.org/",
      degree: "DevOps",
      logoUrl: "logo/IBM-Logo.png",
      start: "2025",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Rust Studio",
      stack: "Rust",
      href: "https://docs.rs/crate/rust-studio/latest",
      dates: "Jan 2025 - Present",
      active: true,
      description:
        "A modern Rust database client with a web UI. Cargo subcommand, cross-platform, connects via env vars, permite gerenciar bancos de dados via interface gráfica.",
      technologies: ["Rust", "Axum", "Tokio", "SQLx"],
      links: [
        {
          type: "open source project",
          href: "https://docs.rs/crate/rust-studio/latest",
          icon: <Icons.rust className="size-3" />,
        },
      ],
      image: "/rust-studio-painel.png",
    },
    {
      title: "API MercadoLivre",
      stack: "Node.js",
      href: "https://github.com/ReimaoHenrique/api_mercadolivre",
      dates: "2024",
      active: false,
      description:
        "API desenvolvida com NestJS para integração com MercadoLivre, oferecendo funcionalidades de e-commerce e gerenciamento de produtos.",
      technologies: ["Node.js", "NestJS", "TypeScript", "REST API"],
      links: [
        {
          type: "source",
          href: "https://github.com/ReimaoHenrique/api_mercadolivre",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Ingressa",
      stack: "Node.js",
      href: "https://github.com/ReimaoHenrique/Ingressa",
      dates: "2024",
      active: false,
      description:
        "Plataforma de venda de ingressos desenvolvida com Next.js, oferecendo uma experiência moderna e responsiva para eventos.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      links: [
        {
          type: "source",
          href: "https://github.com/ReimaoHenrique/Ingressa",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Kubernetes Infrastructure",
      stack: "K8s",
      href: "https://github.com/ReimaoHenrique/infra-k8s",
      dates: "2024",
      active: false,
      description:
        "Configurações e manifests para infraestrutura Kubernetes, demonstrando práticas de DevOps e orquestração de containers.",
      technologies: ["Kubernetes", "Docker", "YAML", "DevOps"],
      links: [
        {
          type: "source",
          href: "https://github.com/ReimaoHenrique/infra-k8s",
          icon: <Icons.github className="size-3" />,
        },
      ],
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
