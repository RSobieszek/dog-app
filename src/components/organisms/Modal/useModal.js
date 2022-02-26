import { useEffect } from "react";
import { useQuery } from "react-query";

// Import api
import dogAPI from "services";
import {
  GET_BREED_RANDOM_IMAGE_API,
  QUERY_BREED_RANDOM_IMAGE,
} from "services/api";

const useModal = ({ selectedBreed }) => {
  useEffect(() => {
    //clear breed image data
    return remove();
    // eslint-disable-next-line
  }, []);

  const fetchBreedImage = () =>
    dogAPI.get(GET_BREED_RANDOM_IMAGE_API.replace(":breed", selectedBreed));

  const { data, isFetching, remove, refetch } = useQuery({
    queryKey: `${QUERY_BREED_RANDOM_IMAGE}_${selectedBreed}`,
    queryFn: fetchBreedImage,
  });

  const src = data?.data?.message || "";

  return { src, getRandomImage: refetch, isFetching };
};

export default useModal;
