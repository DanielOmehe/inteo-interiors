import PageHeadingLarge from "../utils/heading";
import InteoParagraphText from "../utils/paragraph";
import InteoPageHeroContent from "./hero";

const InteoPageHero = () => {
  return (
    <section className="w-full text-center mt-12">
      <PageHeadingLarge variant={"text-6xl center font-bold"}>
        Make <span className="italic">your home</span> an ode to joy
      </PageHeadingLarge>
      <InteoParagraphText variant={"mt-7 mb-20 font-extralight text-xl px-96"}>
        We turn your empty house to a lovely home, making the compact spaces
        with space saving furnitures. Making the unique tastes of yours into
        reality!
      </InteoParagraphText>
      <InteoPageHeroContent />
    </section>
  );
};

export default InteoPageHero;
