import ShowCategoryName from "@/components/module/ShowCategoryName";
import CarList from "@/components/templates/CarList";
import carsData from "@/data/carsData";
function Hatchback() {
  const hatchbackCars = carsData.filter((car) => car.category == "hatchback");

  return (
    <div>
      <ShowCategoryName/>
      <CarList data={hatchbackCars} />
    </div>
  );
}

export default Hatchback;
