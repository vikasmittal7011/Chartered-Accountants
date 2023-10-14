import { useState } from "react";
import useFetchApiCall from "../../hooks/useFetchApiCall";
import { useNavigate } from "react-router-dom";
import Alert from "../common/Alert";

const SearchCAInput = () => {
  const [alertData, setAlertData] = useState({
    type: "",
    message: "",
    show: false,
  });
  const [searchAc, setSearchAc] = useState("");
  const [caList, setCaList] = useState();
  const navigate = useNavigate();

  const { apiCall, loading } = useFetchApiCall();

  const loadCA = async () => {
    const response = await apiCall();
    return response.record;
  };

  const hanldeClick = async () => {
    if (searchAc) {
      const list = await loadCA();
      const ca = list.filter((ca) => ca.name === searchAc);
      console.log(ca, list);
      if (ca.length > 0) {
        navigate(`/${ca[0].name}`);
      }
      setAlertData({
        type: "error",
        message: "User Not Found",
        show: true,
      });
    }
    setAlertData({
      type: "error",
      message: "Plase Enter some name to search",
      show: true,
    });
  };

  const handleKeyUp = async (e) => {
    if (e.key === "Enter") {
      hanldeClick();
    }
    const ca = await loadCA();
    const list = ca.filter((a) => {
      return a.name.toLowerCase().includes(searchAc) && { name: a.name };
    });

    setCaList(list);
  };

  const hanleList = (name) => {
    if (searchAc) setSearchAc(name);
  };

  const closeAlert = () => {
    setAlertData({ ...alertData, show: false });
  };
  return (
    <>
      {alertData.show && (
        <Alert
          onClose={closeAlert}
          type={alertData.type}
          message={alertData.message}
        />
      )}
      <div className="mt-8 flex relative xs:mx-2 lg:mx-0">
        <input
          name="ca"
          type="text"
          className="block xs:w-full lg:w-[520px] rounded-tl-xl rounded-bl-xl border-0 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6 lg:px-4 lg:py-5 xs:p-2 font-semibold lg:text-lg"
          placeholder="Search by name"
          value={searchAc}
          onKeyUp={handleKeyUp}
          onChange={(e) => {
            setSearchAc(e.target.value);
          }}
        />

        <button
          className="absolute right-0 lg:w-44 lg:py-[20px] lg:px-3 xs:px-2 xs:py-[6px] border-blue-500 border-2 rounded-xl font-bold text-white bg-blue-500"
          onClick={hanldeClick}
          disabled={loading}
        >
          {loading ? "Searching" : "Search"}
        </button>
      </div>
      {caList?.length > 0 && (
        <ul className="lg:w-[520px] bg-gray-100">
          {caList.map((name, index) => (
            <li
              key={index}
              className="p-2 text-lg border-b-2 border-gray-200 cursor-pointer"
              onClick={() => {
                hanleList(name.name);
              }}
            >
              {name.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default SearchCAInput;
