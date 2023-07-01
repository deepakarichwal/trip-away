export default function Stats({ listItems }) {
  if (listItems.length === 0)
    return <p className="stats">Add some items in your list</p>;

  const numItems = listItems.length;
  const packedItems = listItems.filter((item) => item.packed).length;
  const packedPercent = Math.round((packedItems / numItems) * 100) || 0;
  return (
    <p className="stats">
      {packedPercent === 100
        ? "You are ready to fly! ✈️"
        : `You have ${numItems} items on your list, and you already packed
        ${packedItems} (${packedPercent}%)`}
    </p>
  );
}
