import { NavigationBar } from '@/components/navigation-bar';
import { HeroSection } from '@/components/hero-section';
import { CityGrid } from '@/components/city-grid';
import { Sidebar } from '@/components/sidebar';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationBar />
      <HeroSection />

      <main className="container mx-auto px-4 pb-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content */}
          <div className="flex-1">
            <CityGrid />
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 lg:sticky lg:top-20 lg:h-fit">
            <Sidebar />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}