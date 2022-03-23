import { Dvd } from "../../store/dvdSlice";
import "./DvdList.css";
import DvdListItem from "./DvdListItem";

interface DvdListProps {
  dvds: Dvd[];
  onTitleSort: () => void;
  onCategorySort: () => void;
  isAdmin: boolean;
}

const DvdList: React.FC<DvdListProps> = ({
  dvds,
  onTitleSort,
  onCategorySort,
  isAdmin,
}) => {
  return (
    <>
      <div className="container">
        <div className="row-headerName" onClick={onTitleSort}>
          Show
        </div>
        <div className="row-header">
          <div onClick={onCategorySort}>Category</div>
          <div>Featured</div>
        </div>
      </div>
      {dvds.map((dvd) => (
        <DvdListItem isAdmin={isAdmin} key={dvd.id} dvd={dvd}></DvdListItem>
      ))}
    </>
  );
};
export default DvdList;
