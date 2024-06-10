import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import projects from "@/utils/projects.json";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 py-10">
        <p className="text-4xl text-primary-foreground">Projects</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 my-10">
      {projects.map((project) => {
        return (
          <Card key={project.id} className="w-[350px] h-[400px] border-[#7C3AED]">
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle className="w-fit">{project.title}</CardTitle>
              <div className="flex gap-2 items-center">
                <Link target="_blank" href={project.githublink}><Image src={"/github.png"} alt="github" width={32} height={32}/></Link>
                <Link target="_blank" href={project.livelink}><Image src={"/link.png"} alt="live-link" width={24} height={24}/></Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <div className="relative w-[300px] h-[150px]">
                  <Image src={project.src} alt={project.title} fill style={{ objectFit: "contain" }}/>
                </div>
                <p>{project.desc}</p>
              </div>
            </CardContent>
          </Card>
        );
      })}
      </div>
    </div>
  );
};

export default Projects;
