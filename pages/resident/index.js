import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import { GET_RESIDENT } from "../../graphql/queries/resident";
import BackButton from "../../components/BackButton";
const ResidentInfo = props => {
  const { residentId } = props;
  const { data } = useQuery(GET_RESIDENT, { variables: { id: residentId } });
  const { name, image, status, species } = data ? data.character : {};
  function renderContent() {
    return (
      <div className="resident_info_container">
        <div>
          <BackButton href={`/location?id=${data.character.location.id}`} />
          <img
            className="resident_info__image"
            src={image}
            alt="picture of a character"
          ></img>
        </div>
        <div className="resident_info_text_container">
          <h1>{name}</h1>
          <p>Location: {data.character.location.name}</p>
          <p>Species: {species}</p>
          <h3>Status: {status}</h3>
        </div>
      </div>
    );
  }
  return data ? renderContent() : <div></div>;
};

const ResidentPage = props => {
  const router = useRouter();
  return (
    <>
      <ResidentInfo residentId={router.query.id}></ResidentInfo>
    </>
  );
};

export default ResidentPage;
