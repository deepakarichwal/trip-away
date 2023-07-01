export default function Item({ item, onRemoveItem, onToggleItem }) {
  return (
    <li className="item">
      <input
        type="checkbox"
        value={item.packed}
        defaultChecked={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button className="close" onClick={() => onRemoveItem(item.id)}>
        &#10006;
      </button>
    </li>
  );
}
