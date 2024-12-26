import { useQuery } from "@tanstack/react-query";
import scaleService from "../service/scale";

const useScalesQuery = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const data = await scaleService.getScales();

      return data.data;
    },
  });
};

export default useScalesQuery;
