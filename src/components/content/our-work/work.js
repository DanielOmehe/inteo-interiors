import { PageHeadingMedium } from "@/components/utils/heading";
import InteoParagraphText from "@/components/utils/paragraph";
import Image from "next/image";

const InteoWork = ({ src, title, desc, width, height, margin  }) => {
  return (
    <div className={`mb-12 ${margin}`}>
      <Image src={src} width={width} height={height} alt={title} className="mb-8" />
      <PageHeadingMedium variant={'text-3xl capitalize mb-4'}>{title}</PageHeadingMedium>
      <InteoParagraphText variant={'text-lg pr-12 font-light'}>{desc}</InteoParagraphText>
    </div>
  );
};

export default InteoWork