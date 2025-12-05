import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { profile } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-[calc(100vh-4rem)] min-h-[600px]">
      <div className="container mx-auto flex h-full flex-col items-center justify-center gap-8 px-4 text-center md:px-6">
        <Avatar className="h-32 w-32 border-4 border-primary/50">
          <AvatarImage src={profile.avatar} alt={profile.name} data-ai-hint={profile.avatarHint} />
          <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="space-y-4">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I&apos;m <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">{profile.name}</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            A passionate developer building modern, responsive, and engaging web experiences from scratch.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <Link href="#projects" aria-label="Scroll to projects">
          <ArrowDown className="h-6 w-6 animate-bounce text-muted-foreground" />
        </Link>
      </div>
    </section>
  );
}
