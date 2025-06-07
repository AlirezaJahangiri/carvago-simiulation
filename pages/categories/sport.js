import CarList from "@/components/templates/CarList";
import carsData from "@/data/carsData";
function Sport() {
  const sportCars = carsData.filter((car) => car.category == "sport");

  return <CarList data={sportCars} />;
}

export default Sport;
