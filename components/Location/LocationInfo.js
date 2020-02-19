import { useQuery } from "@apollo/react-hooks";
import { GET_LOCATION_INFO } from "../../graphql/queries/location";
import locationTypeHelper from "../../lib/locationTypeHelper";
import BackButton from "../BackButton";

const LocationInfo = props => {
  const { locationId } = props;
  const { data } = useQuery(GET_LOCATION_INFO, {
    variables: { id: locationId }
  });
  return (
    <div className="location_page_info">
      <div>
        <BackButton href="/" />
        <img
          className="location_page__image"
          src={locationTypeHelper(data ? data.location.type : null)}
        ></img>
      </div>
      <div className="location_page_info_text_container">
        <h1>{data && data.location.name}</h1>
        <p>{data && data.location.type}</p>
      </div>
    </div>
  );
};
export default LocationInfo;
