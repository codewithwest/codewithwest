import { SettingsCard } from "@/components/settings/settingsCard";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";

const Settings = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-headline font-bold text-center mb-12">Settings</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <SettingsCard
                    url="settings/preferences"
                    header="Preferences"
                    description="Update your display preferences"
                />
                {/* Add more settings cards here */}
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Settings;
