import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Dvd } from "../store/dvdSlice";
import { RootState } from "../store/store";

type SortDirection = "desc" | "asc";

type Category = "all" | "drama" | "reality";

const useFilterSort: () => [
  Dvd[],
  Category,
  () => void,
  () => void,
  (category: string) => void
] = () => {
  const dvds = useSelector((state: RootState) => state.dvd.dvds);
  const [filtered, setFiltered] = useState(dvds);
  const [titleSortDirection, setTitleSortDirection] =
    useState<SortDirection>("desc");
  const [catSortDirection, setCatSortDirection] =
    useState<SortDirection>("desc");

  const [category, setCategory] = useState<Category>("all");

  useEffect(() => {
    setFiltered(dvds);
  }, [dvds]);

  const titleSortHandler = () => {
    setFiltered(
      [...dvds].sort((a, b) => {
        if (titleSortDirection === "desc") {
          if (a.name < b.name) return -1;
          else if (a.name > b.name) return 1;
          return 0;
        }
        if (a.name > b.name) return -1;
        else if (a.name < b.name) return 1;
        return 0;
      })
    );
    setTitleSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const categorySortHandler = () => {
    setFiltered(
      [...dvds].sort((a, b) => {
        if (catSortDirection === "desc") {
          if (a.category < b.category) return -1;
          else if (a.category > b.category) return 1;
          return 0;
        }
        if (a.category > b.category) return -1;
        else if (a.category < b.category) return 1;
        return 0;
      })
    );
    setCatSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const categoryChangeHanlder = (category: any) => {
    console.log(category);
    setCategory(category);
    setFiltered(
      dvds.filter((dvd) => dvd.category === category || category === "all")
    );
    console.log(category);
  };

  return [
    filtered,
    category,
    titleSortHandler,
    categorySortHandler,
    categoryChangeHanlder,
  ];
};

export default useFilterSort;
