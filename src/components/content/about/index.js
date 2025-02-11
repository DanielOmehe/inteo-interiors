import InteoSectionHeader from "@/components/utils/sectionHeader";
import PageHeadingLarge from "@/components/utils/heading";
import InteoParagraphText from "@/components/utils/paragraph";
import Image from "next/image";

const InteoAboutSection = () => {
  return (
    <section className="w-full flex items-start justify-between gap-24 py-48 px-36">
      <InteoAboutSectionContainer>
        <InteoSectionHeader text={"about us"} />
        <PageHeadingLarge variant={"text-6xl drop-shadow-lg mb-6 line-height"}>
          We help to bring your <span className="italic">dream home</span> to
          reality
        </PageHeadingLarge>
        <InteoParagraphText variant={'mb-6 font-light text-lg'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
          fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.
        </InteoParagraphText>
        <InteoParagraphText variant={'mb-6 font-light text-lg pr-2'}>
          Tempor dolor elementum tellus non ipsum faucibus. Justo, magna mauris
          posuere auctor justo. Habitant proin aliquet volutpat leo ultricies.
          Dui blandit eget vitae turpis ultrices aliquet nunc. Faucibus sit odio
          bibendum lobortis diam.
        </InteoParagraphText>
      </InteoAboutSectionContainer>
      <InteoAboutSectionContainer variant={"flex gap-4"}>
        <Image
          className="-translate-y-20"
          src={"/images/about-image-one.png"}
          alt="dining room"
          width={500}
          height={800}
        />
        <Image
          src={"/images/about-image-two.png"}
          alt="dining room"
          width={500}
          height={800}
        />
      </InteoAboutSectionContainer>
    </section>
  );
};

export default InteoAboutSection;

export const InteoAboutSectionContainer = ({ variant, children }) => {
  return <div className={`${variant}  w-1/2`}>{children}</div>;
};
