import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoaging] = useState(true);

  const updateImages = async () => {
    const gifs = await getGifs(category);
    setImages(gifs);
    setIsLoaging(false);
  };

  useEffect(() => {
    updateImages();
  }, []);
  return {
    images,
    isLoading,
  };
};
