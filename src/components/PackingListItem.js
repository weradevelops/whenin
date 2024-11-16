export default function PackingListItem({
  itemObj,
  onDeleteItem,
  onToggleItem,
}) {
  return (
    <li>
      <input
        type="checkbox"
        value={itemObj.packed}
        onChange={() => onToggleItem(itemObj.id)}
      />
      <span
        style={
          itemObj.packed
            ? {
                textDecoration: "line-through",
                textDecorationThickness: "2px",
                textDecorationColor: "#fffcf2",
              }
            : {}
        }
      >
        {itemObj.quantity} {itemObj.description}
      </span>
      <button onClick={() => onDeleteItem(itemObj.id)}>×</button>
    </li>
  );
}
