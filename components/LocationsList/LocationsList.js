import React, { useState } from "react";
import LocationItem from "./LocationsItem";
import { useQuery } from "@apollo/react-hooks";
import InfiniteScroll from "react-infinite-scroll-component";
import { GET_LOCATIONS } from "../../graphql/queries/location";
import Loader from "../Loader";
import { motion } from "framer-motion";
import updateLocationsQuery from "../../lib/updateLocationsQuery";

const LocationsList = props => {
  const [page, setPage] = useState(1);
  const { data, fetchMore } = useQuery(GET_LOCATIONS, {
    variables: { page: 0 }
  });
  return (
    <InfiniteScroll
      dataLength={data ? data.locations.results.length : null}
      next={() => {
        setPage(page + 1);
        fetchMore({
          variables: { page: page + 1 },
          updateQuery: updateLocationsQuery
        });
      }}
      hasMore={data ? data.locations.info.pages !== page : false}
      loader={<Loader />}
    >
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{ enter: { transition: { staggerChildren: 0.1 } } }}
        className="locations_container"
      >
        {data &&
          data.locations.results.map(location => (
            <LocationItem
              name={location.name}
              type={location.type}
              residents={location.residents.slice(0, 3)}
              locationId={location.id}
              key={location.id}
            ></LocationItem>
          ))}
      </motion.div>
    </InfiniteScroll>
  );
};

export default LocationsList;
