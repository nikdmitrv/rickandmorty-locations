import { useRouter } from "next/router";
import LocationInfo from "../../components/Location/LocationInfo";
import LocationResidents from "../../components/Location/LocationResidents";

const LocationPage = props => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <main className="location_page_main">
      <LocationInfo locationId={id}></LocationInfo>
      <LocationResidents locationId={id}></LocationResidents>
    </main>
  );
};

export default LocationPage;
