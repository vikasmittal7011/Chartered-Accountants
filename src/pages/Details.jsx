import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Alert from "../components/common/Alert";

import useFetchApiCall from "../hooks/useFetchApiCall";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import CADetails from "../components/details/CADetails";
import RecomendedCA from "../components/details/RecomendedCA";

const Details = () => {
  const navigate = useNavigate();

  const { caname } = useParams();
  const { apiCall } = useFetchApiCall();

  const [alertData, setAlertData] = useState({
    type: "",
    message: "",
    show: false,
  });
  const [caDetails, setCaDetails] = useState();
  const [otherCA, setOtherCA] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadCa = async () => {
    setLoading(true);
    const response = await apiCall();
    const searchedUser = response.record.filter((res) => res.name === caname);
    const recommended = response.record.filter((res, i) => {
      if (i < 4 && res.name !== caname) {
        const randomNumber = Math.round(Math.random() * response.record.length);
        return response.record[randomNumber];
      }
    });
    if (searchedUser.length > 0) {
      setCaDetails(searchedUser[0]);
      setOtherCA(recommended);
    } else {
      setAlertData({
        type: "error",
        message: "User Not Found",
        show: true,
      });
      navigate("/");
    }
    setLoading(false);
  };

  const closeAlert = () => {
    setAlertData({ ...alertData, show: false });
  };

  useEffect(() => {
    if (caname) {
      loadCa();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [caname]);

  return (
    <>
      {alertData.show && (
        <Alert
          onClose={closeAlert}
          type={alertData.type}
          message={alertData.message}
        />
      )}
      <Header />
      {!loading && caDetails && (
        <>
          <CADetails ca={caDetails} />
          <RecomendedCA cas={otherCA} />
          <Footer />
        </>
      )}
    </>
  );
};

export default Details;
