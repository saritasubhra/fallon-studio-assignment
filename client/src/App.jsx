import FeedbackForm from "./components/FeedbackForm";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import Footer from "./components/Footer";

function App() {
  const [showFeedbacks, setShowFeedbacks] = useState(false);
  return (
    <div>
      <Navbar setShowFeedbacks={setShowFeedbacks} />
      {showFeedbacks ? <FeedbackList /> : <FeedbackForm />}
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
