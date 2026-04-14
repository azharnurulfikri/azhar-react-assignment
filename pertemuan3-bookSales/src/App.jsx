import React from "react";
import Book from "./Pages/Book";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark mb-4">
        <div className="container">
          <span className="navbar-brand mb-0 h1">BookSales App</span>
        </div>
      </nav>

      <main>
        <Book />
      </main>
    </div>
  );
}

export default App;
