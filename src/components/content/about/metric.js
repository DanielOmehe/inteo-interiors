import PageHeadingLarge from "@/components/utils/heading";
import InteoParagraphText from "@/components/utils/paragraph";

const metrics = [
  { heading: "100%", text: "Satisfation clients" },
  { heading: "250", text: "employees worldwide" },
  { heading: "3469", text: "projects completed in 60 countries" },
];

const InteoMetricSection = () => {
  return (
    <section className="w-full px-36">
      <InteoMetricsContainer>
        {metrics.map((metric, indx) => (
          <InteoMetric heading={metric.heading} text={metric.text} key={indx} indx={indx} />
        ))}
      </InteoMetricsContainer>
    </section>
  );
};

export default InteoMetricSection;

const InteoMetricsContainer = ({ children }) => {
  return <div className="w-full flex border-b-2 border-gray-300 gap-8 items-center justify-between pb-20">{children}</div>;
};

const InteoMetric = ({ heading, text, indx }) => {
  return <div className={`h-max py-2 flex items-center gap-4 ${indx === 2 ? 'w-1/3' : 'w-1/4'}`}>
    <PageHeadingLarge variant={'text-7xl'}>{heading}</PageHeadingLarge>
    <InteoParagraphText variant={`text-base uppercase ${indx === 2 ? 'pr-16' : 'pr-4'}`}>{text}</InteoParagraphText>
  </div>;
};
