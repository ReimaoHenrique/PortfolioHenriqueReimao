import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "./project-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export function ProjectsTabs() {
  return (
    <div className="flex w-full max-w-3xl flex-col gap-6 mx-auto">
      <Tabs defaultValue="rust">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="node" className="flex items-center gap-2">
            <Image src="/logo/node.svg" alt="Node.js" width={18} height={18} />
            Node.js
          </TabsTrigger>
          <TabsTrigger value="rust" className="flex items-center gap-2">
            <Image src="/logo/rust.svg" alt="Rust" width={18} height={18} />
            Rust
          </TabsTrigger>
          <TabsTrigger value="k8s" className="flex items-center gap-2">
            <Image
              src="/logo/k8s.svg"
              alt="Kubernetes"
              width={18}
              height={18}
            />
            K8s
          </TabsTrigger>
        </TabsList>

        <TabsContent value="node">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Card>
              <CardTitle className="mt-10 mb-10 flex items-center gap-2">
                <Image
                  src="/logo/node.svg"
                  alt="Node.js"
                  width={22}
                  height={22}
                />
                Node.js Projects
              </CardTitle>
              {DATA.projects
                .filter((project) => (project as any).stack === "Node.js")
                .map((project, id) => (
                  <ProjectCard
                    href={project.href}
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={(project as any).video}
                    links={project.links}
                  />
                ))}
            </Card>
          </BlurFade>
        </TabsContent>

        {/* Rust */}
        <TabsContent value="rust">
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <Card>
              <CardTitle className="mt-10 mb-10 flex items-center gap-2">
                <Image
                  src="/logo/rust.svg"
                  alt="Rust"
                  width={22}
                  height={22}
                />
                Rust Projects
              </CardTitle>
              {DATA.projects
                .filter((project) => (project as any).stack === "Rust")
                .map((project, id) => (
                  <ProjectCard
                    href={project.href}
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={(project as any).video}
                    links={project.links}
                  />
                ))}
            </Card>
          </BlurFade>
        </TabsContent>

        {/* Kubernetes */}
        <TabsContent value="k8s">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <Card>
              <CardTitle className="mt-10 mb-10 flex items-center gap-2">
                <Image
                  src="/logo/k8s.svg"
                  alt="Kubernetes"
                  width={22}
                  height={22}
                />
                K8s Projects
              </CardTitle>
              {DATA.projects
                .filter((project) => (project as any).stack === "K8s")
                .map((project, id) => (
                  <ProjectCard
                    href={project.href}
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={(project as any).video}
                    links={project.links}
                  />
                ))}
            </Card>
          </BlurFade>
        </TabsContent>
      </Tabs>
    </div>
  );
}
