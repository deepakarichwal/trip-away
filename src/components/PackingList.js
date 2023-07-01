import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  listItems,
  onRemoveItem,
  onToggleItem,
  clearAll,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = listItems;
  if (sortBy === "description")
    sortedItems = listItems
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = listItems
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="packing-list">
      <ul className="list-items">
        {sortedItems &&
          sortedItems.map((item) => (
            <Item
              key={item.id}
              item={item}
              onRemoveItem={onRemoveItem}
              onToggleItem={onToggleItem}
            ></Item>
          ))}
      </ul>
      <div className="sort-items">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed items</option>
        </select>
        <button onClick={clearAll}>Clear All</button>
      </div>
    </div>
  );
}
