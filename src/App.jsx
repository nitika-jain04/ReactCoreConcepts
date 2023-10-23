import { CORE_CONCEPTS } from "./data";
import Header from "./Components/Header";
import CoreConcept from "./Components/CoreConcept";

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              img={CORE_CONCEPTS[0].image}
            ></CoreConcept> */}
            <CoreConcept {...CORE_CONCEPTS[0]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[3]}></CoreConcept>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
