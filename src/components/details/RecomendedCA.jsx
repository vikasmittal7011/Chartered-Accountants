/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { image6 } from "../../assets";

const RecomendedCA = ({ cas }) => {
  const navigate = useNavigate();
  return (
    <div className="mt-20 sm:px-6 lg:px-8 m-10">
      <h1 className="sm:text-4xl xs:text-2xl font-bold">Recommended for you</h1>

      <div className="flex flex-wrap justify-between gap-5 mt-10">
        {cas.map((ca, i) => (
          <div key={i} className="box-shahow rounded-lg">
            <img src={image6} alt="" height={244} width={385} />

            <div className="flex justify-between my-5 text-xl font-bold px-3">
              <p>{ca.name}</p>
              <p className="">{ca.price}</p>
            </div>

            <p className="sm:w-[365px] px-3">{ca.intro}</p>

            <p className="text-blue-500 flex gap-2 items-center font-bold px-3 my-2">
              <AiFillStar size="24" /> {ca.rating}{" "}
              <span className="text-black font-normal">({ca.reviewCount})</span>
            </p>

            <button
              onClick={() => {
                navigate(`/${ca.name}`);
              }}
              className="w-full px-3 my-5 font-blod sm:text-base xs:text-sm rounded-xl xs:px-1 xs:py-1 sm:px-2 sm:py-2 font-bold text-white bg-blue-600"
            >
              View services
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecomendedCA;
