import { useState } from "react";
import Stats from "./components/Stats";
import PackingList from "./components/PackingList";
import PackingListForm from "./components/PackingListForm";
import Hamburger from "./components/Hamburger";
import Logo from "./components/Logo";
import colosseum from "./assets/img/colosseum.png";
export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="App">
      <div className="background-overlay"></div>
      <header className="header">
        <Logo />
        <Hamburger />
      </header>
      <main className="main">
        <div className="hero-text">
          <h1 className="city">Roma</h1>
          <h3 className="date">Dec 5 - Dec 9</h3>
        </div>
        <div className="image">
          <div className="city-monument">
            <img src={colosseum} alt="Colosseum" />
          </div>
        </div>
        <h3 className="packing-checklist">Packing Checklist</h3>
        <PackingListForm onAddItem={handleAddItem} />
        <PackingList
          items={items}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
        />
        <Stats items={items} />
      </main>
    </div>
  );
}
