import { Suspense } from "react";
import Footer from "./components/Footer"
import IssuesManagement from "./components/IssuesManagement";
import Navbar from "./components/Navbar"
import Loading from "./components/Loading";


const fetchIssues = async () => {
  const result = await fetch("/data.json");
  return result.json();
}

function App() {
  const fetchPromises = fetchIssues();

  return (
    <>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <IssuesManagement fetchPromises={fetchPromises} />
      </Suspense>
      <Footer />
    </>
  )
}

export default App
