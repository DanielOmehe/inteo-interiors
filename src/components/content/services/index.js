import PageHeadingLarge from "@/components/utils/heading";
import InteoSectionHeader from "@/components/utils/sectionHeader";
import InteoServicesContainer from "./services";
import InteoService from "./service";

const services = [
  {
    icon: "/images/house.png",
    name: "architectural & interior design",
    desc: "Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.",
  },
  {
    icon: "/images/block.png",
    name: "building renovation",
    desc: "Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.",
  },
  {
    icon: "/images/arrow.png",
    name: "construction management",
    desc: "Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.",
  },
];

const InteoServiceSection = () => {
  return (
    <section className="px-36 py-20 w-full">
      <InteoSectionHeader text={"our services"} />
      <PageHeadingLarge variant={"text-5xl w-1/2 font-semibold"}>
        We provide the <span className="italic">best solutions</span> for your
        dream home
      </PageHeadingLarge>
      <InteoServicesContainer>
        {services.map((service, indx) => (
          <InteoService service={service} indx={indx} key={indx} />
        ))}
      </InteoServicesContainer>
    </section>
  );
};

export default InteoServiceSection;
