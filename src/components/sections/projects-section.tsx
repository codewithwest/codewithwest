"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, Terminal } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useQuery } from '@apollo/client';
import { GET_PROJECTS } from '@/provider/data_schema/projects.gql';
import { projectType } from '@/helpers/general/projects';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import ThreeAnimation from '../general/ThreeAnimation';

export default function ProjectsSection() {
  const { loading, error, data } = useQuery(GET_PROJECTS, {
    variables: { limit: 3 }, // Fetching only 3 for the homepage section
  });

  const projects = data?.getProjects?.data || [];

  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">My Projects</h2>
          <p className="mt-4 text-muted-foreground">
            A selection of my work. I'm always exploring new technologies and ideas.
          </p>
        </div>
        
        {error ? (
           <Alert variant="destructive" className="max-w-2xl mx-auto">
              <Terminal className="h-4 w-4" />
              <AlertTitle>Error Fetching Projects</AlertTitle>
              <AlertDescription>
                Sorry! An error occurred while fetching project information.
              </AlertDescription>
            </Alert>
        ) : loading ? (
           <div className="w-full h-[300px]">
              <ThreeAnimation />
            </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project: projectType) => (
              <Card key={project.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="p-0">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={`https://picsum.photos/seed/${project.id}/600/400`}
                      alt={project.name}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint="project image"
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex-grow p-6">
                  <CardTitle className="font-headline mb-2">{project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech_stacks?.map((tag: string) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <div className="flex w-full items-center justify-end gap-2">
                    {project.live_link && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={project.live_link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </Link>
                      </Button>
                    )}
                    {project.github_link && (
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={project.github_link} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" /> Source
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
