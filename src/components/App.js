import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch pizza data from your API or json-server
    fetch("http://localhost:3001/pizzas")
      .then((response) => response.json())
      .then((data) => {
        setPizzas(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching pizza data:", error);
        setLoading(false);
      });
  }, []);

  const handleEditPizza = (pizza) => {
    setSelectedPizza(pizza);
  };

  const handlePizzaFormSubmit = (formData) => {
    // Handle form submission and update pizza data
    // You need to implement this part according to your backend API
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <PizzaList pizzas={pizzas} onEditClick={handleEditPizza} />
            )}
          </div>
          <div className="col-md-4">
            <PizzaForm selectedPizza={selectedPizza} onSubmit={handlePizzaFormSubmit} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

