import { skills } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Technical Skills</h2>
          <p className="mt-4 text-muted-foreground">
            My toolbox for building beautiful and functional web applications.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((category) => (
            <Card key={category.name}>
              <CardHeader>
                <CardTitle className="font-headline text-xl text-primary">{category.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="mb-2 font-semibold">Proficient</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.filter(s => s.proficiency === 'Proficient').map((skill) => (
                      <Badge key={skill.name} variant="outline">{skill.name}</Badge>
                    ))}
                  </div>
                </div>
                 <div>
                  <h4 className="mb-2 font-semibold">Familiar</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.filter(s => s.proficiency === 'Familiar').map((skill) => (
                      <Badge key={skill.name} variant="outline">{skill.name}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
