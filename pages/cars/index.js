import Categories from "@/components/module/Categories";
import CarsPage from "@/components/templates/CarsPage";
import carsData from "@/data/carsData";

function Cars() {
  return (
    <div>
      <Categories />
      <CarsPage data={carsData} />
    </div>
  );
}

export default Cars;
