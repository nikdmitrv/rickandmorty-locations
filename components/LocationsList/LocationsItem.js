import React from "react";
import locationTypeHelper from "../../lib/locationTypeHelper";
import Link from "next/link";
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

const LocationItem = props => {
  const { name, type, residents, locationId } = props;
  return (
    <Link href={`/location?id=${locationId}`}>
      <motion.div className="location_item_container" variants={variants}>
        <img
          className="location_item__image"
          src={locationTypeHelper(type)}
        ></img>
        <div className="location_item_info">
          <h3>{name}</h3>
          <p>{type}</p>
          <div className="location_item_residents">
            {residents &&
              residents.map(resident =>
                resident.id ? (
                  <Link href={`/resident?id=${resident.id}`} key={resident.id}>
                    <img
                      className="location_item__resident"
                      key={resident.id}
                      src={resident.image}
                      alt="picture of a resident"
                    ></img>
                  </Link>
                ) : null
              )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default LocationItem;
