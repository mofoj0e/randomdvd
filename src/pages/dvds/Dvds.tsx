import { useSelector } from "react-redux";
import DvdList from "../../components/dvdList/DvdList";
import useFilterSort from "../../hooks/useFilterSort";
import { RootState } from "../../store/store";
import "./Dvds.css";
import { FaPlusSquare } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Dvds = () => {
  const [
    filtered,
    category,
    titleSortHandler,
    categorySortHandler,
    categoryFilterChangeHandler,
  ] = useFilterSort();

  const [searchParams, setSearchParams] = useSearchParams();
  const [isAdmin, setIsAdmin] = useState(!!searchParams.get("isAdmin"));

  console.log("in DVDS", isAdmin);

  // // useEffect(() => {
  // //   setIsAdmin(searchParams.get)
  // // }, searchParams);

  return (
    <div>
      <div className="filter">
        <FaPlusSquare style={{ marginRight: "5px" }} />
        <select
          name="category"
          value={category}
          onChange={(event) => categoryFilterChangeHandler(event.target.value)}
        >
          <option id="all">all</option>
          <option id="drama">drama</option>
          <option id="reality">reality</option>
          <option id="news">news</option>
          <option id="comedy">comedy</option>
        </select>
      </div>
      <div className="table">
        <DvdList
          dvds={filtered}
          onTitleSort={titleSortHandler}
          onCategorySort={categorySortHandler}
          isAdmin={isAdmin}
        ></DvdList>
      </div>
    </div>
  );
};

export default Dvds;
