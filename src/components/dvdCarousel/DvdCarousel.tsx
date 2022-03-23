import { Dvd } from "../../store/dvdSlice";
import DvdItem from "./DvdItem";
import "./DvdCarousel.css";

interface DvdListProps {
  title: string;
  dvds: Dvd[];
}

const DvdCarousel: React.FC<DvdListProps> = ({ title, dvds }) => {
  return (
    <>
      <div className="row-title">{title}</div>
      <div className="row">
        {dvds.map((dvd) => (
          <DvdItem key={dvd.id} dvd={dvd} />
        ))}
      </div>
    </>
  );
};
export default DvdCarousel;
