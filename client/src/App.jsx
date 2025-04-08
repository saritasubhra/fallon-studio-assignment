import FeedbackForm from "./components/FeedbackForm";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import { useState } from "react";
import FeedbackList from "./components/FeedbackList";

function App() {
  const [showFeedbacks, setShowFeedbacks] = useState(false);
  return (
    <div>
      <Navbar setShowFeedbacks={setShowFeedbacks} />
      {showFeedbacks ? <FeedbackList /> : <FeedbackForm />}
      <Toaster />
    </div>
  );
}

export default App;
