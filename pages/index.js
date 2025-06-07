import SearchBar from "@/components/module/SearchBar";
import Categories from "@/components/module/Categories";
import CarsPage from "@/components/templates/CarsPage";
import carsData from "@/data/carsData";

function Index() {
  const cars = carsData.slice(0, 3);
  return (
    <div>
      <SearchBar />
      <Categories />
      <CarsPage data={cars} />
    </div>
  );
}

export default Index;
