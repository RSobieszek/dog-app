import { useEffect } from "react";
import { useQuery } from "react-query";

// Import api
import dogAPI from "services";
import {
  GET_BREED_RANDOM_IMAGE_API,
  QUERY_BREED_RANDOM_IMAGE,
} from "services/api";

const useModal = ({ selectedBreedType }) => {
  useEffect(() => {
    //clear breed image data
    return remove();
    // eslint-disable-next-line
  }, []);

  const fetchBreedImage = () => {
    const url = GET_BREED_RANDOM_IMAGE_API.replace(":breed", selectedBreedType);
    return dogAPI.get(url);
  };

  const { data, isFetching, remove, refetch } = useQuery({
    queryKey: `${QUERY_BREED_RANDOM_IMAGE}_${selectedBreedType}`,
    queryFn: fetchBreedImage,
  });

  const src = data?.data?.message || "";

  return { src, getRandomImage: refetch, isFetching };
};

export default useModal;
