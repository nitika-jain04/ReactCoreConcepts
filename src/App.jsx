import { useState } from "react";

import { CORE_CONCEPTS } from "./data";
import Header from "./Components/Header.jsx";
import CoreConcept from "./Components/CoreConcepts";
import TabButton from "./Components/TabButton";

function App() {
  useState();

  let tabContent = "Please click a button";

  function handleSelect(selectedButton) {
    //selectedButton => 'components', 'jsx' , 'props', 'state'
    tabContent = selectedButton;
  }

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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
            {/* <TabButton label="Components"></TabButton> */}
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
