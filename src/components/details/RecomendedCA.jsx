import { AiFillStar } from "react-icons/ai";
import { image6 } from "../../assets";

const cas = [
  {
    id: 1,
    name: "Michael Jackson",
    image:
      "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?fit=crop&w=800&q=80",
    intro:
      "Expertise in accounting and finance, specializing in financial statements and auditing.",
    rating: 4.8,
    reviewCount: 89,
    taskComplexity: "Basic to complex tasks",
    price: "€4,370",
    deliveryTime: "Delivers within 2 days",
    testimonial: {
      text: "Exceptional service in managing personal finances and deep understanding of financial markets.",
      author: "John Doe",
    },
    about: {
      from: "INDIA",
      partnerSince: 2011,
      averageResponseTime: "30 minutes",
      description:
        "Professional Chartered Accountant offering diverse accounting and financial services.",
      services: ["Financial accounting", "Bookkeeping", "Balance Sheets"],
      benefits: ["One-time delivery", "24/7 support"],
    },
  },
  {
    id: 2,
    name: "Lucy Brown",
    image:
      "https://images.unsplash.com/photo-1556746818-17b142980bb2?fit=crop&w=800&q=80",
    intro:
      "Dedicated accountant with expertise in taxation and corporate finance.",
    rating: 4.5,
    reviewCount: 75,
    taskComplexity: "Intermediate to advanced tasks",
    price: "€3,900",
    deliveryTime: "Delivers within 3 days",
    testimonial: {
      text: "Lucy has been an invaluable asset to our company's financial planning.",
      author: "Alice Martin",
    },
    about: {
      from: "USA",
      partnerSince: 2013,
      averageResponseTime: "45 minutes",
      description:
        "Committed to delivering top-notch accounting services to businesses and individuals.",
      services: ["Taxation", "Corporate Finance", "Auditing"],
      benefits: ["Error-free documentation", "Expert consultations"],
    },
  },
  {
    id: 3,
    name: "Robert Smith",
    image:
      "https://images.unsplash.com/photo-1517433456452-f9633a875fbc?fit=crop&w=800&q=80",
    intro:
      "Experienced in overseeing financial management of medium to large enterprises.",
    rating: 4.6,
    reviewCount: 65,
    taskComplexity: "Advanced financial tasks",
    price: "€4,500",
    deliveryTime: "Delivers within 4 days",
    testimonial: {
      text: "Robert's strategic approach to financial management has been pivotal to our company's success.",
      author: "James Walker",
    },
    about: {
      from: "UK",
      partnerSince: 2010,
      averageResponseTime: "25 minutes",
      description:
        "Specialized in strategic financial planning and corporate finance.",
      services: ["Corporate finance", "Strategic planning", "Asset management"],
      benefits: [
        "Comprehensive financial review",
        "Customized financial solutions",
      ],
    },
  },
];

const RecomendedCA = () => {
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

            <button className="w-full px-3 my-5 font-blod sm:text-base xs:text-sm rounded-xl xs:px-1 xs:py-1 sm:px-2 sm:py-2 font-bold text-white bg-blue-600">
              View services
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecomendedCA;
