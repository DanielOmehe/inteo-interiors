import Image from "next/image";

const InteoSectionHeader = ({ text, variant, src, text_color }) => {
  return (
    <div className={`${variant} flex items-center mb-8 gap-4`}>
      <Image src={src ? src : "/images/brown-line.png"} width={80} height={2} alt="line" />
      <p className={`text-base font-normal uppercase ${text_color ? text_color : 'text-yellow-800'}`}>
        {text}
      </p>
    </div>
  );
};

export default InteoSectionHeader;
