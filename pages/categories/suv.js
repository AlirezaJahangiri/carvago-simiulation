import ShowCategoryName from "@/components/module/ShowCategoryName";
import CarList from "@/components/templates/CarList";
import carsData from "@/data/carsData";
function Suv() {
  const suvtCars = carsData.filter((car) => car.category == "suv");

  return (
    <div>
      <ShowCategoryName />
      <CarList data={suvtCars} />
    </div>
  );
}

export default Suv;
