import { initialItems } from "./data.tsx";
export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1> 🌴Far Away💼</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What did you need for your trip?😁</h3>{" "}
    </div>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span>
        {item.quantity}
        {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em> 💼you have X item on your List,and you already packed X (X%)</em>
    </footer>
  );
}
