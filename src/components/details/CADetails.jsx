import CADetailsLeftSection from "./CADetailsLeftSection";
import CADetailsRightSection from "./CADetailsRightSection";

const ca = {
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
};

const CADetails = () => {
  return (
    <div className="mt-20 sm:px-6 lg:px-8 m-10 lg:flex">
      <CADetailsLeftSection ca={ca} />
      <CADetailsRightSection ca={ca} />
    </div>
  );
};

export default CADetails;
