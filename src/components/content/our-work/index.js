import { PageHeadingMedium } from "@/components/utils/heading";
import InteoSectionHeader from "@/components/utils/sectionHeader";
import InteoWork from "./work";
import InteoReusableBtn from "@/components/utils/button";

const InteoWorkSection = () => {
  return (
    <section id="work" className="w-full px-36 md:min-h-screen md:px-12 py-12 flex md:block md:relative items-start gap-16 sm:px-8 sm:py-8 md:gap-0 md:items-center md:justify-center">
      <InteoWorkSectionContainer>
        <InteoSectionHeader text={"recent work"} />
        <PageHeadingMedium variant={"text-6xl mb-24 pr-32 sm:pr-0 sm:text-4xl"}>
          Some of <span className="italic">our crafts</span> made with love
        </PageHeadingMedium>
        <InteoWork
          src={"/images/our-work-desktop-3.png"}
          title={"villa furnishing & interior"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi."
          }
          width={700}
          height={600}
          margin={'mb-28 md:mb-12'}
        />
        <InteoReusableBtn variant={'md:absolute bottom-0'} />
      </InteoWorkSectionContainer>
      <InteoWorkSectionContainer>
        <InteoWork
          src={"/images/our-work-desktop-1.png"}
          title={"Luxury Hotel Renovation"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi."
          }
          width={550}
          height={400}
          margin={'md:mt-6'}
        />
        <InteoWork
          src={"/images/our-work-desktop-2.png"}
          title={"Residence Swimming Pool"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi."
          }
          width={550}
          height={400}
          margin={'md:mt-6'}
        />
      </InteoWorkSectionContainer>
    </section>
  );
};

export default InteoWorkSection;

const InteoWorkSectionContainer = ({ children }) => {
  return <div className="w-1/2 md:w-full">{children}</div>;
};
