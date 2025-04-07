import { useState } from "react";
import { ImSpinner3 } from "react-icons/im";
import { toast } from "react-hot-toast";
import axios from "../lib/axios";

const initialState = {
  fullname: "",
  email: "",
  message: "",
};

function FeedbackForm() {
  const [feedback, setFeedback] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  function handleFeedback(e) {
    setFeedback((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  async function handleSubmission(e) {
    e.preventDefault();

    try {
      setIsLoading(true);
      const res = await axios.post("/feedbacks", feedback);
      toast.success(res.data.message);
      setFeedback(initialState);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="max-w-sm sm:max-w-md mx-auto p-8 rounded-md shadow-2xl ">
      <form className="w-full space-y-4" onSubmit={handleSubmission}>
        <div>
          <label htmlFor="fullname" className="label">
            Full name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            id="fullname"
            name="fullname"
            required
            className="input"
            value={feedback.fullname}
            onChange={handleFeedback}
          />
        </div>

        <div>
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            placeholder="johndoe@gmail.com"
            id="email"
            name="email"
            required
            className="input"
            value={feedback.email}
            onChange={handleFeedback}
          />
        </div>

        <div>
          <label htmlFor="message" className="label">
            Message
          </label>
          <textarea
            type="text"
            placeholder="Write your feedback"
            id="message"
            name="message"
            required
            className="input"
            value={feedback.message}
            onChange={handleFeedback}
          />
        </div>

        <button type="submit" className="btn mt-2" disabled={isLoading}>
          {isLoading ? (
            <ImSpinner3
              fill="white"
              size={24}
              className="animate-spin mx-auto"
            />
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
}

export default FeedbackForm;
