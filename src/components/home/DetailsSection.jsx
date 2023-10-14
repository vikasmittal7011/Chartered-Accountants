import { image1, image2 } from "../../assets";
import { detailsPageChat, detailsPageInfo } from "../../utils/utils";

const DetailsSection = () => {
  return (
    <div className="mt-20 mb-40 md:ml-6 xs:ml-3 ml-12 flex flex-col lg:flex-row">
      <div>
        <div>
          <h1 className="font-extrabold xs:text-3xl sm:text-4xl lg:text-6xl xs:mb-6 lg:w-[670px]">
            <span className="text-gradient">All-in-One</span> platform that
            Makes Easier
          </h1>
          <p className="lg:w-[604px] lg:text-2xl ">
            We are more than a platform; We are your success partner. Discover
            our services to achieve your business and educational goals
          </p>
        </div>
        <div className="flex flex-wrap gap-10 mt-10 lg:w-[600px]">
          {detailsPageInfo.map((info, i) => (
            <div key={i} className="w-[220px] flex gap-2">
              <img src={info.image} alt={info.topic} />
              <p>
                <span className="font-bold">{info.topic}</span> {info.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="xs:mt-10 relative">
        <div className="sm:flex items-start">
          <div>
            {detailsPageChat.map((chat, i) => (
              <div key={i} className="justify-end">
                <p
                  className="my-2 xs:me-2 p-1 lg:w-max rounded-lg rounded-es-none"
                  style={{ background: `var(${chat.color})` }}
                >
                  {chat.message}
                </p>
              </div>
            ))}
          </div>
          <img src={image1} alt="" />
        </div>
        <img src={image2} alt="" className="sm:absolute sm:top-36 sm:left-16" />
      </div>
    </div>
  );
};

export default DetailsSection;
