"use client";

import { skills } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-xl text-center mb-12"
        >
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl px-4 py-2 bg-primary/10 rounded-full inline-block mb-4">Technical Skills</h2>
          <p className="mt-4 text-muted-foreground">
            My toolbox for building beautiful and functional web applications.
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="h-full border-primary/10 hover:border-primary/30 transition-colors bg-card/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="font-headline text-xl text-primary">{category.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="mb-2 font-semibold">Proficient</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.filter(s => s.proficiency === 'Proficient').map((skill) => (
                        <Badge key={skill.name} variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">{skill.name}</Badge>
                      ))}
                    </div>
                  </div>
                   <div>
                    <h4 className="mb-2 font-semibold">Familiar</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.filter(s => s.proficiency === 'Familiar').map((skill) => (
                        <Badge key={skill.name} variant="outline" className="opacity-70 hover:opacity-100 transition-opacity">{skill.name}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
