import PageHeadingLarge from "@/components/utils/heading";
import InteoParagraphText from "@/components/utils/paragraph";

const metrics = [
  { heading: "100%", text: "Satisfation clients" },
  { heading: "250", text: "employees worldwide" },
  { heading: "3469", text: "projects completed in 60 countries" },
];

const InteoMetricSection = () => {
  return (
    <section className="w-full px-36 md:px-12 sm:px-8 sm:py-12">
      <InteoMetricsContainer>
        {metrics.map((metric, indx) => (
          <InteoMetric
            heading={metric.heading}
            text={metric.text}
            key={indx}
            indx={indx}
          />
        ))}
      </InteoMetricsContainer>
    </section>
  );
};

export default InteoMetricSection;

const InteoMetricsContainer = ({ children }) => {
  return (
    <div className="w-full flex border-b-2 border-gray-300 gap-8 items-center sm:block justify-between pb-20 md:pb-12">
      {children}
    </div>
  );
};

const InteoMetric = ({ heading, text, indx }) => {
  return (
    <div
      className={`h-max py-2 flex items-center md:block md:gap-6 md:w-1/3 gap-4 sm:w-full sm:flex ${
        indx === 2 ? "w-1/3 md:w-1/2 sm:w-full" : "w-1/4 md:w-1/3 sm:w-2/3"
      }`}
    >
      <PageHeadingLarge variant={"text-7xl md:mb-3"}>
        {heading}
      </PageHeadingLarge>
      <InteoParagraphText
        variant={`text-base uppercase ${indx === 2 ? "pr-16 sm:pr-4" : "pr-4 sm:pr-12"}`}
      >
        {text}
      </InteoParagraphText>
    </div>
  );
};
