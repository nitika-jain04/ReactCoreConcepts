import Header from "./Components/Header";
import CoreConcepts from "./Components/CoreConcepts";
import Examples from "./Components/Examples";

function App() {
  return (
    // <div>
    <>
      <Header />
      <main>
        <CoreConcepts></CoreConcepts>
        <Examples></Examples>
      </main>
    </>
    // </div>
  );
}

export default App;
