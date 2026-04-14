// src/Pages/Book.jsx
import React, { useState } from "react";
import booksData from "../Utils/books";
import "./Book.css"; // Mengambil gaya dari file CSS yang baru dibuat

function Book() {
  const [listBuku, setListBuku] = useState(booksData);

  const tambahBuku = () => {
    const bukuBaru = {
      id: listBuku.length + 1,
      title: "Buku Baru",
      author: "Penulis Baru",
      year: 2026,
      description: "Deskripsi",
      // Memakai placeholder 150x150 abu-abu persis seperti contoh gambar
      image: "https://placehold.co/150x150/e0e0e0/a0a0a0?text=150+x+150",
    };
    setListBuku([...listBuku, bukuBaru]);
  };

  return (
    <div className="koleksi-container">
      <h2 className="koleksi-title">Daftar Buku</h2>

      <div className="koleksi-grid">
        {listBuku.map((item) => (
          <div className="koleksi-card" key={item.id}>
            {/* Supaya persis kayak gambar lu, semua gambar gua paksa pakai placeholder abu-abu */}
            <img src={item.image} alt={item.title} className="koleksi-image" />
            <h5 className="koleksi-judul">{item.title}</h5>
            <p className="koleksi-info">Tahun: {item.year}</p>
            <p className="koleksi-info">Penulis: {item.author}</p>
          </div>
        ))}
      </div>

      <button className="btn-tambah" onClick={tambahBuku}>
        Tambah Buku Baru
      </button>
    </div>
  );
}

export default Book;
