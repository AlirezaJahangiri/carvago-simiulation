import CarList from "@/components/templates/CarList";
import Nothing from "@/components/templates/Nothing";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";
function FilteredCars() {
  const router = useRouter();
  const [min, max] = router.query.slug || [];
  const filteredCars = carsData.filter(
    (car) => car.price > min && car.price < max
  );

  if (!filteredCars.length) {
    return <Nothing />;
  }

  return (
    <div>
      <CarList data={filteredCars} />
    </div>
  );
}

export default FilteredCars;
