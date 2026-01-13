import journey from "@/provider/data/journey.json";

export default function ExperienceSection() {
  const experiences = journey.slice(0, 3); // Taking first 3 for the home page section

  return (
    <section id="experience" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Experience & Education</h2>
          <p className="mt-4 text-muted-foreground">My professional journey and academic background.</p>
        </div>
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border" aria-hidden="true"></div>
          <div className="relative flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <div key={exp.title} className="relative flex items-start">
                <div className="absolute left-1/2 top-4 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-background bg-primary" aria-hidden="true"></div>
                <div
                  className={`flex w-full items-start gap-8 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className="w-1/2 text-left rtl:text-right">
                    {index % 2 === 1 && (
                      <>
                        <h3 className="font-headline text-lg font-bold">{exp.title}</h3>
                        <p className="font-medium text-primary">{exp.type === 'work' ? 'Work' : 'Education'}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{exp.date_interval}</p>
                        <p className="mt-2 text-sm">{exp.description}</p>
                      </>
                    )}
                  </div>
                  <div className="w-1/2 text-right rtl:text-left">
                    {index % 2 === 0 && (
                      <>
                        <h3 className="font-headline text-lg font-bold">{exp.title}</h3>
                        <p className="font-medium text-primary">{exp.type === 'work' ? 'Work' : 'Education'}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{exp.date_interval}</p>
                        <p className="mt-2 text-sm">{exp.description}</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
