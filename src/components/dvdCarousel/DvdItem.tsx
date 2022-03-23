import { Link, useNavigate } from "react-router-dom";
import { Dvd } from "../../store/dvdSlice";
import "./DvdItem.css";

interface DvdProps {
  dvd: Dvd;
}

const DvdItem: React.FC<DvdProps> = ({ dvd }) => {
  let navigate = useNavigate();

  const navigateHandler = () => {
    navigate(`dvds/${dvd.id}`, { state: { ...dvd } });
  };
  return (
    // <div className="dvd-item" to={`dvds/${dvd.id}`} state={{ ...dvd }}>
    <div className="dvd-item" onClick={navigateHandler}>
      <img src={dvd.image} width="175px" alt="dvd"></img>
      <div>{dvd.name}</div>
    </div>
  );
};
export default DvdItem;
