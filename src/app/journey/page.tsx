import journey from "@/provider/data/journey.json";
import { journeyItemType } from "@/helpers/general/journey";
import journeyListItem from "@/components/general/journeyListItem";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";

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
                  journeyListItem(journeyItem, index)
                )}
            </ol>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-8 font-headline text-primary">Education</h2>
            <ol className="relative border-s border-border">
              {journey
                .filter((item) => item.type === "education")
                .map((journeyItem: journeyItemType, index: number) =>
                  journeyListItem(journeyItem, index)
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
