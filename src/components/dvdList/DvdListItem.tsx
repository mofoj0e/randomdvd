import { add, Dvd, remove } from "../../store/dvdSlice";
import "./DvdListItem.css";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";

interface DvdProps {
  dvd: Dvd;
  isAdmin: boolean;
}

const DvdListItem: React.FC<DvdProps> = ({ dvd, isAdmin }) => {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="row-itemName">
        {dvd.name}
        {isAdmin && (
          <span className="trash">
            <FaTrashAlt onClick={() => dispatch(remove(dvd.id))} />
          </span>
        )}
      </div>

      <div className="row-item">
        <div>{dvd.category}</div>
        <div>{dvd.featured ? "Yes" : "No"}</div>
      </div>
    </div>
  );
};

export default DvdListItem;
