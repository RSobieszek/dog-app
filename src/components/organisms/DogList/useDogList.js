import { useState } from "react";
import { useQuery } from "react-query";

// Import utilities
import { useToggle } from "utilities/hooks";

// Import api
import dogAPI from "services";
import { GET_BREEDS_LIST_API, QUERY_BREEDS_LIST } from "services/api";

const useDogList = () => {
  // MODAL VISIBILITY STATE
  const [isOpen, toggle] = useToggle();

  // STATE
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [selectedBreedName, setSelectedBreedName] = useState(null);

  // STATE UPDATE
  const selectBreed = ({ breed, subBreed }) => {
    let breedType = `${breed}`;
    let breedName = `${breed}`;

    if (subBreed) {
      breedType = `${breed}/${subBreed}`;
      breedName = `${subBreed} ${breed}`;
    }

    setSelectedBreed(breedType);
    setSelectedBreedName(breedName);
    toggle();
  };

  // QUERY (API DATA)
  const fetchDogBreeds = () => dogAPI.get(GET_BREEDS_LIST_API);

  const { data } = useQuery({
    queryKey: QUERY_BREEDS_LIST,
    queryFn: fetchDogBreeds,
  });

  const breedsData = data?.data?.message || {};

  // change data structure for easier component mapping
  const breeds = Object.entries(breedsData);

  return {
    breeds,
    isOpen,
    toggle,
    selectedBreed,
    selectBreed,
    selectedBreedName,
  };
};

export default useDogList;
