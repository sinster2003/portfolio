import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";

const Projects = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 py-10">
        <p className="text-4xl text-primary-foreground">Projects</p>
      </div>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>
            Project
          </CardTitle>
          <CardContent>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
};

export default Projects;
