"use client";

import journey from "@/provider/data/journey.json";
import { motion } from 'framer-motion';

export default function ExperienceSection() {
  const experiences = journey.slice(0, 3); // Taking first 3 for the home page section

  return (
    <section id="experience" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-xl text-center mb-12"
        >
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Experience & Education</h2>
          <p className="mt-4 text-muted-foreground">My professional journey and academic background.</p>
        </motion.div>
        
        <div className="relative mx-auto max-w-4xl px-4 md:px-0">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary/50 via-border to-primary/50 opacity-50" aria-hidden="true"></div>
          
          <div className="relative space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.title} 
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 top-6 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-background bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)] z-10" aria-hidden="true"></div>
                
                <div className={`flex flex-col md:flex-row items-center justify-center gap-8 ${
                  index % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}>
                  {/* Content Side */}
                  <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/10 shadow-lg hover:shadow-primary/5 hover:border-primary/20 transition-all group">
                      <div className="flex flex-col mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary/70 mb-1">{exp.type === 'work' ? 'Professional' : 'Academic'}</span>
                        <h3 className="font-headline text-xl font-bold text-foreground group-hover:text-primary transition-colors">{exp.title}</h3>
                      </div>
                      <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground/70 justify-start md:justify-end">
                        <span className="px-2 py-0.5 rounded-full bg-primary/5 border border-primary/10">{exp.date_interval}</span>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground line-clamp-3 md:line-clamp-none">
                        {exp.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for the other side on desktop */}
                  <div className="hidden md:block w-[45%]"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
