import CarList from "@/components/templates/CarList";
import carsData from "@/data/carsData";
function Suv() {
  const suvtCars = carsData.filter((car) => car.category == "suv");

  return <CarList data={suvtCars} />;
}

export default Suv;
