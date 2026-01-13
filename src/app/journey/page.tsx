import journey from "@/provider/data/journey.json";
import { journeyItemType } from "@/helpers/general/journey";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const JourneyListItem = (journeyItem: journeyItemType, index: number) => {
  const date = new Date();
  
  // A bit of a hack to show "Present" for the first item
  const displayDate = index === 0 
    ? journeyItem?.date_interval +
      `${date.toLocaleString("default", {
        month: "long",
      })} ${date.getFullYear()}`
    : journeyItem?.date_interval;

  return (
    <li className="mb-10 ms-6">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-secondary rounded-full -start-3 ring-8 ring-background ">
        <svg className="w-2.5 h-2.5 text-primary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
        </svg>
      </span>
      <h3 className="flex items-center mb-1 text-lg font-semibold">
        {journeyItem.title}
      </h3>
      <time className="block mb-2 text-sm font-normal leading-none text-muted-foreground">
        {displayDate}
      </time>
      <p className="mb-4 text-base font-normal text-muted-foreground">
        {journeyItem.description}
      </p>
      {journeyItem.link && journeyItem.link !== "#" && (
        <Button asChild variant="outline" size="sm">
          <a
            href={journeyItem.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Verify <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      )}
    </li>
  );
};

const Journey = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-1">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-headline font-bold text-center mb-12">My Journey</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold mb-8 font-headline text-primary">Work Experience</h2>
            <ol className="relative border-s border-border">
              {journey
                .filter((item) => item.type === "work")
                .map((journeyItem: journeyItemType, index: number) =>
                  JourneyListItem(journeyItem, index)
                )}
            </ol>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-8 font-headline text-primary">Education</h2>
            <ol className="relative border-s border-border">
              {journey
                .filter((item) => item.type === "education")
                .map((journeyItem: journeyItemType, index: number) =>
                  JourneyListItem(journeyItem, index)
                )}
            </ol>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Journey;
