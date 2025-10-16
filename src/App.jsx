import { Suspense } from "react";
import Container from "./components/Container"
import Footer from "./components/Footer"
import IssuesManagement from "./components/IssuesManagement";
import Navbar from "./components/Navbar"


const fetchIssues = async () => {
        const result = await fetch("/data.json");
        return result.json()
    }

function App() {
  const fetchPromises = fetchIssues();


  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback="loading...">
        <IssuesManagement fetchPromises={fetchPromises}></IssuesManagement>

      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App
