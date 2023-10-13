import { plans } from "../../utils/utils";

const PlansSection = () => {
  return (
    <div className="xs:mt-16 sm:mt-24 mt-44 bg--image">
      <div className="text-center mb-20">
        <h1 className="font-extrabold xs:text-3xl sm:text-4xl lg:text-6xl xs:mb-6">
          Want to <span className="text-gradient"> Join</span> Us?
        </h1>
        <p className="sm:text-xl lg:text-2xl">
          To remain with us, it is essential that you diligently follow the
          steps provided
        </p>
      </div>

      <div className="lg:ml-40 flex flex-col sm:flex-row gap-5 flex-wrap xs:mx-5">
        {plans.map((plan, i) => {
          return (
            <div
              key={i}
              className="bg-white rounded-3xl text-center p-5 sm:w-[350px] relative"
            >
              <span className="absolute w-11 h-11 rounded-[10px] text-white text-center p-1 sx:text-lg text-2xl font-bold -top-3 -left-2  badge-gradient">
                {plan?.index.no}
                <sup>{plan?.index.letter}</sup>
              </span>
              <h1 className="text-xl font-extrabold my-2">{plan.title}</h1>
              <p className="text-base font-normal my-1">{plan.desc}</p>
              <div className="flex text-start justify-center my-4 gap-5 bg-gray-100 p-1 h-28 rounded-2xl">
                <div className="w-24">
                  <h1 className="font-bold text-base text-blue-500">
                    Due Date
                  </h1>
                  <p className="text-base">{plan.dueDate}</p>
                </div>
                <div>
                  <h1 className="font-bold text-base text-red-500">
                    Penalty Fees
                  </h1>
                  {plan?.penaltyFess?.map((fess, i) => {
                    return (
                      <p key={i} className="text-base">
                        <span className="font-bold underline">
                          {fess.amount}
                        </span>
                        {fess.text}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <p className="pb-20 xs:px-5 mt-5 lg:ps-40 lg:pe-28 ">
        * For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200
        <span className="font-bold"> every day</span> until you file the form .
        There is no maximum penalty amount. So, if you dont file the form for a
        year, you will owe ₹73,000 per form
      </p>
    </div>
  );
};

export default PlansSection;
