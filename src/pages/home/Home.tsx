import { useDispatch, useSelector } from "react-redux";
import DvdCarousel from "../../components/dvdCarousel/DvdCarousel";
import { Dvd } from "../../store/dvdSlice";
import { RootState } from "../../store/store";

const Home = () => {
  const dvds = useSelector((state: RootState) => state.dvd.dvds);
  const dispatch = useDispatch();
  return (
    <>
      <DvdCarousel
        title="Featured"
        dvds={dvds.filter((dvd) => dvd.featured)}
      ></DvdCarousel>
      <DvdCarousel
        title="More"
        dvds={dvds.filter((dvd) => !dvd.featured)}
      ></DvdCarousel>
    </>
  );
};

export default Home;
