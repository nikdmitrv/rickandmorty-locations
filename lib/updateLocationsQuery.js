const updateLocationsQuery = (previousResult, { fetchMoreResult }) => {
  if (!fetchMoreResult) {
    return previousResult;
  }
  return {
    ...previousResult,
    locations: {
      ...previousResult.locations,
      results: [
        ...previousResult.locations.results,
        ...fetchMoreResult.locations.results
      ]
    }
  };
};

export default updateLocationsQuery;
