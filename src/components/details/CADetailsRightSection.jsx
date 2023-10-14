/* eslint-disable react/prop-types */
import { image6 } from "../../assets/index";

const CADetailsRightSection = ({ ca }) => {
  return (
    <div className="lg:ps-7">
      <div>
        <img src={image6} alt="" />
      </div>

      <div className="my-5">
        <h1 className="font-bold lg:text-4xl xs:text-xl">About {ca.name}</h1>
      </div>

      <div className="flex justify-between flex-col lg:flex-row">
        <div>
          <p className="my-1 text-gray-400 font-bold">FROM</p>
          <p className="my-1 lg:text-xl xs:text-lg">{ca.about.from}</p>
        </div>
        <div>
          <p className="my-1 text-gray-400 font-bold">PARTNER SINCE</p>
          <p className="my-1 lg:text-xl xs:text-lg">{ca.about.partnerSince}</p>
        </div>
        <div>
          <p className="my-1 text-gray-400 font-bold">AVERAGE RESPONSE TIME</p>
          <p className="my-1 lg:text-xl xs:text-lg">
            {ca.about.averageResponseTime}
          </p>
        </div>
      </div>

      <div className="my-5">
        <p className="my-1 text-gray-400 font-bold">About</p>
        <p className="my-1 lg:text-xl xs:text-lg">{ca.about.description}</p>
      </div>

      <div className="flex justify-between flex-col lg:flex-row">
        <div>
          <p className="mt-1 mb-2 text-gray-400 font-bold">SERVICES I OFFER</p>
          {ca.about.services.map((service, i) => (
            <p key={i} className="decoration-dotted lg:text-xl xs:text-lg my-1">
              &bull; {service}
            </p>
          ))}
        </div>
        <div>
          <p className="mt-1 mb-2 text-gray-400 font-bold">WHY ME?</p>
          {ca.about.benefits.map((benefit, i) => (
            <p key={i} className="decoration-dotted lg:text-xl xs:text-lg my-1">
              &bull; {benefit}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CADetailsRightSection;
