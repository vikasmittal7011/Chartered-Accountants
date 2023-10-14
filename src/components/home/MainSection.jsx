import { image3, image4, image5 } from "../../assets/index";
import SearchCAInput from "./SearchCAInput";

const MainSection = () => {
  return (
    <>
      <div className="xs:mt-10 md:mt-36 mt-48 md:ml-6 xs:ml-3 ml-12 md:flex xs:gap-6 sm:gap-6 gap-1">
        <div>
          <h1 className="xs:text-2xl sm:text-3xl lg:text-6xl font-bold xs:w-full lg:w-[650px]">
            Find <span className="text-gradient">Partners</span> (CAs) available
            online
          </h1>
          <p className="xs:w-full lg:w-[650px] lg:h-14 lg:text-xl leading-8 text-gray-400 mt-4">
            <span className="font-semibold text-gray-500">CONNECT</span> with us
            where your services are listed and visible to a myriad of businesses
            seeking CA’s for compliance support
          </p>

          <SearchCAInput />
        </div>
        <div className="flex gap-2 sm:flex-row justify-center flex-col">
          <img
            src={image4}
            alt="image"
            className="lg:mt-12 lg:-mb-12 xs:p-3 lg:p-1 lg:h-full xs:h-96"
          />
          <img
            src={image3}
            alt="image"
            className="lg:-mt-12 lg:mb-12 xs:p-3 lg:p-1 lg:h-full xs:h-96"
          />
          <img
            src={image5}
            alt="image"
            className="lg:sm xs:p-3 lg:p-1 lg:h-full xs:h-96"
          />
        </div>
      </div>
    </>
  );
};

export default MainSection;
