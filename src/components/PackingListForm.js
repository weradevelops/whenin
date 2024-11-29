import { useState } from "react";

export default function PackingListForm({ onAddItem }) {
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItem(newItem);

    setDescription("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>+</button>
    </form>
  );
}
