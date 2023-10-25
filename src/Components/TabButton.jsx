export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}

//Props.children refers to the text between your opening and closing tags of component i.e. in App.jsx here <TabButton></TabButton>

//children refers to destructured props.children
