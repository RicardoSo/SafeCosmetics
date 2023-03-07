import logo from './logo.svg';
import './App.css';

const data = [
  {
    id: "1",
    title: "Tarta de manzana",
    description: "Una deliciosa tarta con manzanas frescas y canela.",
    price: "$15.99",
    image: "https://picsum.photos/200/300/?random"
  },
  {
    id: "2",
    title: "Brownie de chocolate",
    description: "Un brownie de chocolate denso y rico en sabor.",
    price: "$12.99",
    image: "https://picsum.photos/200/300/?random"
  },
  {
    id: "3",
    title: "Tiramisú",
    description: "Un postre italiano clásico con capas de bizcocho, crema y café.",
    price: "$18.99",
    image: "https://picsum.photos/200/300/?random"
  },
  {
    id: "4",
    title: "Cheesecake de fresa",
    description: "Un pastel de queso suave con un toque de fresas frescas.",
    price: "$22.99",
    image: "https://picsum.photos/200/300/?random"
  },
  {
    id: "5",
    title: "Helado de vainilla",
    description: "Un clásico que nunca falla, helado cremoso de vainilla.",
    price: "$8.99",
    image: "https://picsum.photos/200/300/?random"
  }
];

function App() {
  const listItems = data.map(dessert => {
    const itemText = `${dessert.title} - ${dessert.price}`;
    return <li>{itemText}</li>
  });

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {listItems}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
