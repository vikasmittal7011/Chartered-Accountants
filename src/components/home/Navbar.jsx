import Header from "../common/Header";
import MainSection from "./MainSection";

const Navbar = () => {
  return (
    <>
      <div
        className="lg:h-[750px] relative"
        style={{
          background:
            "linear-gradient(75deg, #FEDDEE 0%, #FCF6FC 31.77%, #C5EAED 64.58%, #FDDDFE 100%)",
        }}
      >
        <Header />
        <MainSection />
      </div>
    </>
  );
};

export default Navbar;
