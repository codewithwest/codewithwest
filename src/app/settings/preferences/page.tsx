import PreferenceList from "@/components/settings/preferences/preferenceList";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";

const Preferences = () => {
  return (
    <div className="flex flex-col min-h-screen">
       <Header />
        <main className="flex-1">
            <div className="container mx-auto px-4 py-16">
                 <h1 className="text-4xl font-headline font-bold text-center mb-12">Display Preferences</h1>
                 <PreferenceList />
            </div>
        </main>
        <Footer />
    </div>
  );
};

export default Preferences;
