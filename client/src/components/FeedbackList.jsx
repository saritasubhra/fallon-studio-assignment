import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "../lib/axios";
import Spinner from "./Spinner";
import FeedbackCard from "./FeedbackCard";

function FeedbackList() {
  const [isLoading, setIsLoading] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    async function fetchAllFeedbacks() {
      try {
        setIsLoading(true);
        const res = await axios.get("/feedbacks");
        setFeedbacks((prev) => [...prev, ...res.data.data]);
      } catch (error) {
        toast.error(error.response.data.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchAllFeedbacks();
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <div className="mt-6 w-full max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {feedbacks.map((element) => (
        <FeedbackCard key={element._id} element={element} />
      ))}
    </div>
  );
}

export default FeedbackList;
