
"use client";

import { createApolloClient } from '@/services/apolloClient';
import { ApolloProvider } from '@apollo/client';
import ContactSection from '@/components/sections/contact-section';
import ExperienceSection from '@/components/sections/experience-section';
import HeroSection from '@/components/sections/hero-section';
import ProjectsSection from '@/components/sections/projects-section';
import SkillsSection from '@/components/sections/skills-section';
import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';
import { useEffect, useState } from 'react';
import type { ApolloClient, NormalizedCacheObject } from '@apollo/client';

function HomePageContent() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default function Home() {
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject> | null>(null);

  useEffect(() => {
    // Initialize the client on the client-side
    setClient(createApolloClient());
  }, []);

  if (!client) {
      return (
          <div className="flex flex-col min-h-screen items-center justify-center">
              <p>Initializing API client...</p>
          </div>
      );
  }
    
  return (
      <ApolloProvider client={client}>
          <HomePageContent />
      </ApolloProvider>
  )
}
