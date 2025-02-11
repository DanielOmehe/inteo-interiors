import { PageHeadingMedium } from "@/components/utils/heading";
import InteoParagraphText from "@/components/utils/paragraph";
import Image from "next/image";

const InteoService = ({ service, indx }) => {
  return (
    <div className="w-1/3 p-8 border-2 h-96 border-gray-200 gap-0">
      <Image
        className="mb-12"
        src={service.icon}
        width={50}
        height={50}
        alt={service.name}
      />
      <PageHeadingMedium
        variant={`capitalize text-3xl mb-4 ${indx === 1 ? "pr-20" : "pr-12"}`}
      >
        {service.name}
      </PageHeadingMedium>
      <InteoParagraphText variant={"text-lg"}>
        {service.desc}
      </InteoParagraphText>
    </div>
  );
};

export default InteoService;
