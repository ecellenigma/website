import HeroPage from './hero';
import AboutPage from './about';
import EventsPage from './events';
import GallerySection from './gallerySection';


export default function LandingPage() {
  return (
    <>
      <HeroPage />
      <AboutPage />
      <EventsPage />
      <GallerySection/> 
    </>
  );
}
