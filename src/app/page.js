import InteoAboutSection from "@/components/content/about";
import InteoHeader from "@/components/header";
import InteoNavbar from "@/components/header/nav";
import InteoPageHero from "@/components/hero";
import InteoMetricSection from "@/components/content/about/metric";
import InteoServiceSection from "@/components/content/services";
import InteoWorkSection from "@/components/content/our-work";
import InteoPageFooter from "@/components/footer";

export default function Home() {
  return (
    <>
      <InteoHeader>
        <InteoNavbar />
      </InteoHeader>
      <InteoPageHero />
      <InteoAboutSection />
      <InteoMetricSection />
      <InteoServiceSection />
      <InteoWorkSection />
      <InteoPageFooter />
    </>
  );
}
