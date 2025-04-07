import FeedbackForm from "./components/FeedbackForm";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <FeedbackForm />
      <Toaster />
    </div>
  );
}

export default App;
