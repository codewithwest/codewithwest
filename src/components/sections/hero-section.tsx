"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { profile } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-[calc(100vh-4rem)] min-h-[600px] overflow-hidden">
      <div className="container mx-auto flex h-full flex-col items-center justify-center gap-8 px-4 text-center md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Avatar className="h-32 w-32 border-4 border-primary/50 shadow-xl">
            <AvatarImage src={profile.avatar} alt={profile.name} data-ai-hint={profile.avatarHint} />
            <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
          </Avatar>
        </motion.div>
        
        <div className="space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x">{profile.name}</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl"
          >
            A Software and Platform Engineer with 3 years of experience building and scaling high-performance applications. I&apos;m passionate about automation, performance optimization, and system architecture. My journey includes hands-on experience as a Backend Engineer at Vaimo, a leading e-commerce developer. Currently, I&apos;m creating a training management app for athletes.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Button asChild size="lg" className="rounded-full px-8 shadow-lg transition-all hover:scale-105">
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 transition-all hover:bg-primary/10">
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <Link href="#projects" aria-label="Scroll to projects">
          <ArrowDown className="h-6 w-6 animate-bounce text-muted-foreground" />
        </Link>
      </motion.div>
      
      {/* Background blobs for "life" */}
      <div className="absolute top-1/4 -left-20 h-64 w-64 rounded-full bg-primary/20 blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 h-64 w-64 rounded-full bg-accent/20 blur-[120px] -z-10" />
    </section>
  );
}
