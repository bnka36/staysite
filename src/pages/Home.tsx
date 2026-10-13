import { useI18n } from "../hooks/useI18n";
import { usePageTitle } from "../hooks/usePageTitle";
import Hero from "../components/Hero";
import Presentation from "../components/Presentation";
import Specialties from "../components/Specialties";
import MenuPreview from "../components/MenuPreview";
import Gallery from "../components/Gallery";
import Location from "../components/Location";
import RestaurantJsonLd from "../components/RestaurantJsonLd";

export default function Home() {
  const { t } = useI18n();
  usePageTitle(t.pages.home.title);

  return (
    <>
      <RestaurantJsonLd />
      <Hero />
      <Presentation />
      <Specialties />
      <MenuPreview />
      <Gallery limit={4} />
      <Location />
    </>
  );
}
