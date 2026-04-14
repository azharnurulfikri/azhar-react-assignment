// src/App.jsx
import React from 'react';
import Book from './Pages/Book';
// Import Bootstrap jika belum (biasanya di main.jsx, tapi bisa di sini juga)
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* Kamu bisa tambahkan Navbar di sini */}
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