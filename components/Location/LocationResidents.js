import { useQuery } from "@apollo/react-hooks";
import { GET_LOCATION_RESIDENTS } from "../../graphql/queries/location";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Link from "next/link";
import Loader from "../Loader";
import { motion } from "framer-motion";
const variants = {
  initial: { scale: 0.96, y: 30, opacity: 0 },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] }
  },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] }
  }
};

const Resident = props => {
  const { imgSrc, name, species, residentId, location } = props;
  return (
    <Link href={`/resident?id=${residentId}`}>
      <motion.div className="resident_item" variants={variants}>
        <img src={imgSrc} alt="location resident picture"></img>
        <div className="resident_item_info">
          <h2>{name}</h2>
          <p>{species}</p>
          <p>{location}</p>
        </div>
      </motion.div>
    </Link>
  );
};

const LocationResidents = props => {
  const { locationId } = props;
  const { data } = useQuery(GET_LOCATION_RESIDENTS, {
    variables: { id: locationId }
  });
  const [lastIndex, setLastIndex] = useState(19);
  return (
    <InfiniteScroll
      dataLength={lastIndex}
      next={() => {
        setLastIndex(lastIndex + 20);
      }}
      hasMore={data ? data.location.residents.length > lastIndex : true}
      loader={<Loader />}
    >
      <motion.div
        className="residents_container"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{ enter: { transition: { staggerChildren: 0.1 } } }}
      >
        {data &&
          data.location.residents
            .slice(0, lastIndex)
            .map(resident =>
              resident.id ? (
                <Resident
                  imgSrc={resident.image}
                  name={resident.name}
                  species={resident.species}
                  residentId={resident.id}
                  location={data.location.name}
                  key={resident.id}
                ></Resident>
              ) : null
            )}
      </motion.div>
    </InfiniteScroll>
  );
};
export default LocationResidents;
