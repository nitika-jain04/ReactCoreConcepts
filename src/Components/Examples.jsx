import { useState } from "react";

import TabButton from "./TabButton";
import Section from "./Section";
import { EXAMPLES } from "../data";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(""); //setSelectedTopic is fn, tells react to execute component fn again

  function handleSelect(selectedButton) {
    //selectedButton => 'components', 'jsx' , 'props', 'state'
    setSelectedTopic(selectedButton);
  }

  return (
    <Section title="Examples" id="examples">
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
    </Section>
  );
}
