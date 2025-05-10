//Props
import './App.css'
import Welcome from "./comp/Welcome.tsx";

function App() {

  return (
    <>
     <Welcome name={"Vishan"} age={21} isStudent={true} isVerified={true} />
    </>
  )
}

export default App
