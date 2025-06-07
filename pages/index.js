import SearchBar from "@/components/module/SearchBar";
import Categories from "@/components/module/Categories";
import CarsPage from "@/components/templates/CarsPage";
import carsData from "@/data/carsData";
import AllCars from "@/components/module/AllCars";

function Index() {
  const cars = carsData.slice(0, 3);
  return (
    <div>
      <SearchBar />
      <Categories />
      <AllCars />
      <CarsPage data={cars} />
    </div>
  );
}

export default Index;
