import { useState } from "react";

import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./Components/Header.jsx";
import CoreConcept from "./Components/CoreConcepts";
import TabButton from "./Components/TabButton";

function App() {
  const [selectedTopic, setSelectedTopic] = useState(""); //setSelectedTopic is fn, tells react to execute component fn again

  function handleSelect(selectedButton) {
    //selectedButton => 'components', 'jsx' , 'props', 'state'
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept
                key={conceptItem.title}
                {...conceptItem}
              ></CoreConcept>
            ))}
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              img={CORE_CONCEPTS[0].image}
            ></CoreConcept> */}
            {/* <CoreConcept {...CORE_CONCEPTS[0]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[3]}></CoreConcept> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          {/* prettier-ignore */}
          <menu>
           
            <TabButton isSelected={selectedTopic === "components"} onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === "props"} onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic === "state"} onSelect={() => handleSelect("state")}>State</TabButton>
            {/* <TabButton label="Components"></TabButton> */}
          </menu>
          {!selectedTopic ? (
            <p>Please select a topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
