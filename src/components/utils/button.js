import Image from "next/image";

const InteoReusableBtn = () => {
  return (
    <button className="flex itens-center justify-center gap-2 px-5 text-base text-white py-2.5 bg-yellow-700">
      <p className="uppercase">contact us</p>
      <Image
        src={"/images/arrow-icon.png"}
        alt="arrow"
        width={20}
        height={20}
      />
    </button>
  );
};

export default InteoReusableBtn
