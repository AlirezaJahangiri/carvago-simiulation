import ShowCategoryName from "@/components/module/ShowCategoryName";
import CarList from "@/components/templates/CarList";
import carsData from "@/data/carsData";
function Sport() {
  const sportCars = carsData.filter((car) => car.category == "sport");

  return (
    <div>
      <ShowCategoryName />
      <CarList data={sportCars} />
    </div>
  );
}

export default Sport;
