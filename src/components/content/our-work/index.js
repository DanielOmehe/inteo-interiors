import { PageHeadingMedium } from "@/components/utils/heading";
import InteoSectionHeader from "@/components/utils/sectionHeader";
import InteoWork from "./work";
import InteoReusableBtn from "@/components/utils/button";

const InteoWorkSection = () => {
  return (
    <section className="w-full px-36 py-12 flex items-start gap-16">
      <InteoWorkSectionContainer>
        <InteoSectionHeader text={"recent work"} />
        <PageHeadingMedium variant={"text-6xl mb-24 pr-32"}>
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
          margin={'mb-28'}
        />
        <InteoReusableBtn></InteoReusableBtn>
      </InteoWorkSectionContainer>
      <InteoWorkSectionContainer>
        <InteoWork
          src={"/images/our-work-desktop-1.png"}
          title={"villa furnishing & interior"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi."
          }
          width={550}
          height={400}
        />
        <InteoWork
          src={"/images/our-work-desktop-2.png"}
          title={"villa furnishing & interior"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi."
          }
          width={550}
          height={400}
        />
      </InteoWorkSectionContainer>
    </section>
  );
};

export default InteoWorkSection;

const InteoWorkSectionContainer = ({ children }) => {
  return <div className="w-1/2">{children}</div>;
};
