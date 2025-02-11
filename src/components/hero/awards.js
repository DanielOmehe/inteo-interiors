import Image from "next/image";
import InteoParagraphText from "../utils/paragraph";
import { PageHeaderSmall } from "../utils/heading";

const awards =[
    {src: "/images/german-design-award.png", name: "German Design Award", year: "2021"},
    {src: "/images/a-design-award.png", name: "Gold A' Design Award", year: "2021"},
    {src: "/images/german-design-award.png", name: "IF Design Award", year: "2020"},
    {src: "/images/german-design-award.png", name: "Good Design Award", year: "2019"},
]

const InteoAwards = () => {
  return (
    <section className="w-full py-4 px-24 bg-gray-900 flex items-center gap-8">
      <InteoAwardsLeft />
      <InteoAwardsContainer>
        {
            awards.map((award, indx) => {
                return <InteoAward path={award.src} name={award.name} desc={award.year} key={indx} />
            })
        }
      </InteoAwardsContainer>
    </section>
  );
};

export default InteoAwards;

const InteoAwardsLeft = () => {
  return (
    <div className="flex mr-8 items-center text-gray-400">
      <PageHeaderSmall variant={"text-lg -rotate-90 text-gray-400"}>Awards</PageHeaderSmall>
      <Image src={'/images/Line.png'} width={100} height={1} alt="line" />
    </div>
  );
};

const InteoAwardsContainer = ({ children }) => {
  return <div className="flex gap-8">{children}</div>;
};

const InteoAward = ({ path, name, desc }) => {
  return (
    <div className="flex w-1/4 text-left gap-4 items-center w-max">
      <Image src={path} alt="award" width={80} height={80} />
      <div className="">
        <InteoParagraphText variant={"text-base text-gray-400"}>{name}</InteoParagraphText>
        <InteoParagraphText variant={"text-base text-gray-400"}>{desc}</InteoParagraphText>
      </div>
    </div>
  );
};
