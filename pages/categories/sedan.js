import ShowCategoryName from "@/components/module/ShowCategoryName";
import CarList from "@/components/templates/CarList";
import carsData from "@/data/carsData";
function Sedan() {
  const sedanCars = carsData.filter((car) => car.category == "sedan");

  return (
    <div>
      <ShowCategoryName />
      <CarList data={sedanCars} />
    </div>
  );
}

export default Sedan;
