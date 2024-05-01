import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import publicAxios from "../../api/publicAxios";

type SummaryInput = {
  section: string;
  country: string;
};

const useSummary = (setGeneratedSummary:React.Dispatch<React.SetStateAction<string>>) => {

  return useMutation({
    mutationFn: async (userData: SummaryInput) => {
      const response = await publicAxios.post("/summary", userData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response.data.summary;
    },
    onSuccess: (data) => {
      setGeneratedSummary(data)
      toast.success("Summary generated successfully!");
    },
    onError: () => {
      toast.error("Error generating summary!");
    },
  });
};

export default useSummary;
