import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

export default function App() {
  const [listItems, setListItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );
  localStorage.setItem("items", JSON.stringify(listItems));

  function handleAddItem(item) {
    setListItems((items) => [...items, item]);
  }

  function handleRemoveItem(id) {
    setListItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setListItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearAll() {
    const confirm = window.confirm("Are you sure you want to delete the list?");
    if (confirm) setListItems([]);
  }

  return (
    <div className="trip">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        listItems={listItems}
        onRemoveItem={handleRemoveItem}
        onToggleItem={handleToggleItem}
        clearAll={handleClearAll}
      />
      <Stats listItems={listItems} />
    </div>
  );
}
