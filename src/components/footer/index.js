import Image from "next/image";
import PageHeadingLarge from "../utils/heading";
import { PageHeaderSmall } from "../utils/heading";
import InteoParagraphText from "../utils/paragraph";
import InteoSectionHeader from "../utils/sectionHeader";

const footerIcons = [
  { src: "/images/instagram.png", name: "Instagram" },
  { src: "/images/facebook.png", name: "Facebook" },
  { src: "/images/youtube.png", name: "Youtube" },
  { src: "/images/twitter.png", name: "Twitter" },
];

const InteoPageFooter = () => {
  return (
    <footer className="w-full px-36 md:px-12 py-16 md:py-12 sm:px-8 sm:py-12">
      <InteoFooterSection
        variant={"py-12 sm:py-6 md:py-8 border-b-2 border-t-2 border-gray-50 "}
      >
        <InteoFooterContainer>
          <PageHeadingLarge variant={"text-5xl pr-40 leading-tight mb-6 md:text-6xl md:pr-12 sm:pr-0 sm:text-4xl"}>
            Kick-start your dream home with us
          </PageHeadingLarge>
          <PageHeadingLarge
            variant={"text-4xl underline italic text-yellow-700 md:text-5xl sm:text-4xl"}
          >
            Send us a hi
          </PageHeadingLarge>
        </InteoFooterContainer>
        <InteoFooterContainer variant={"flex flex-col items-left w-1/4"}>
          <div className="mb-8">
            <PageHeaderSmall variant={"text-2xl md:text-3xl capitalize mb-3 sm:text-xl"}>
              brooklyn, new york
            </PageHeaderSmall>
            <InteoParagraphText variant={"text-base font-light md:text-lg md:pr-80 sm:pr-0 sm:text-base"}>
              962 Fifth Avenue Str, 3rd Floor-Trump Building NY 10006, United
              State.
            </InteoParagraphText>
          </div>
          <div className="mb-8">
            <InteoParagraphText variant={"text-base capitalize font-light mb-3 md:text-lg"}>
              email us at
            </InteoParagraphText>
            <PageHeaderSmall variant={"text-yellow-700 text-2xl md:text-3xl sm:text-2xl"}>
              hello@landify.design
            </PageHeaderSmall>
          </div>
          <div className="">
            <InteoParagraphText variant={"text-base font-light mb-3 md:text-lg"}>
              If you're hurry, quick call for us
            </InteoParagraphText>
            <PageHeaderSmall variant={"text-yellow-700 text-2xl md:text-3xl sm:text-2xl"}>
              +8(663)125-08-59
            </PageHeaderSmall>
          </div>
        </InteoFooterContainer>
      </InteoFooterSection>
      <InteoFooterSection variant={'flex items-center justify-between pt-16'}>
        <InteoParagraphText variant={'md:mb-8 sm:text-lg sm:mb-4'}>
          © 2022 Inteo - Award winning studio. Made with love by <span className="text-yellow-800">Landify</span>
        </InteoParagraphText>
        <InteoFooterContainer variant={"flex w-1/3 gap-8 items-center"}>
          <div className="flex items-center gap-4">
            <InteoParagraphText
              variant={"text-base uppercase"}
            >connect</InteoParagraphText>
            <Image src="/images/footer-line.png" width={80} height={1} alt="line" />
          </div>
          <InteoFooterIcons>
            {footerIcons.map(({ src, name }, indx) => (
              <InteoFooterIcon path={src} key={indx} name={name} />
            ))}
          </InteoFooterIcons>
        </InteoFooterContainer>
      </InteoFooterSection>
    </footer>
  );
};

const InteoFooterSection = ({ variant, children }) => {
  return (
    <section className={`w-full ${variant} flex md:block justify-between`}>
      {children}
    </section>
  );
};

const InteoFooterContainer = ({ variant, children }) => {
  return <div className={`w-1/2 md:w-full md:mb-12 ${variant}`}>{children}</div>;
};

const InteoFooterIcons = ({ children }) => {
  return (
    <div className="flex items-center justify-end gap-4">{children}</div>
  );
};

const InteoFooterIcon = ({ path, name }) => {
  return <Image src={path} width={40} height={40} alt={name} />;
};

export default InteoPageFooter;
