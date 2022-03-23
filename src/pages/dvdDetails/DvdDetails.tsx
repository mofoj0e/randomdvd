import { useLocation } from "react-router-dom";
import "./DvdDetails.css";

const DvdDetails = () => {
  const location = useLocation();
  const details: any = location.state;
  console.log(details);
  return (
    <div className="details">
      <div className="title">{details.name}</div>
      <div className="sub-title">{details.category}</div>
      <img src={details.image} width="300vw" alt="dvd" />
    </div>
  );
};

export default DvdDetails;
