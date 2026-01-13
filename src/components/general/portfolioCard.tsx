"use client";

import { PortfolioCardType } from "@/helpers/general/projects";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  description,
  githubLink,
  liveLink,
}: PortfolioCardType) => {
  
  const isVisible = showCard === "all projects" || showCard === category.toLowerCase();

  return (
    <Card className={`flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${isVisible ? 'block' : 'hidden'}`}>
      <CardHeader className="p-0">
        <div className="aspect-video overflow-hidden">
          <Image
            src={ImageHref ? ImageHref.toString() : "https://picsum.photos/seed/placeholder/600/400"}
            alt={title}
            width={600}
            height={400}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            data-ai-hint="project image"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <CardTitle className="font-headline mb-2">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <div className="flex w-full items-center justify-end gap-2">
          {liveLink && (
            <Button variant="outline" size="sm" asChild>
              <Link href={liveLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </Link>
            </Button>
          )}
          {githubLink && (
            <Button variant="ghost" size="sm" asChild>
              <Link href={githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> Source
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default PortfolioCard;
