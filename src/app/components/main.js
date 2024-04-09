"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

export default function Main() {
  const [catData, setCatData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const apiKey =
    "live_uWECtJEa9IWjKvq7nGXj88oREmwmJHRWPXTkirBDlcLooZmYD2jqdmGbqJXheA6L";
  const apiUrl = `https://api.thecatapi.com/v1/breeds?api_key=${apiKey}`;

  useEffect(() => {
    const fetchCatData = async () => {
      try {
        const response = await axios.get(apiUrl);
        const data = response.data;
        setCatData(data);
      } catch (error) {
        console.error("Erro ao buscar informações do gato:", error);
      }
    };

    fetchCatData();
  }, [apiUrl]);

  // Função para filtrar os resultados 
  const filterCatData = () => {
    if (!catData) return [];
    return catData.filter((cat) =>
      cat.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // Função para reagir mudança no campo de busca
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div id="home" className="container mx-auto px-4 py-8">
      {catData && (
        <div>
          <h1 className="text-2xl text-center font-bold mb-4">
            Guia Completo de Raças de Gatos: Descubra o Mundo Felino
          </h1>
          
          <div className="mb-4 flex justify-center items-center">
            <input
              type="text"
              placeholder="Buscar por raça..."
              value={searchTerm}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={filterCatData}
              className="bg-blue-500 text-white px-4 py-2 rounded-r focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Buscar
            </button>
          </div>
         
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filterCatData().map((cat) => (
              <div
                key={cat.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg"
              >
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{cat.name}</h2>
                  {cat.image && (
                    <Image
                      src={cat.image.url}
                      alt={cat.name}
                      width={400}
                      height={300}
                      className="w-full h-auto mb-2"
                    />
                  )}
                  <p>
                    <strong>Origem:</strong> {cat.origin}
                  </p>
                  <p>
                    <strong>Descrição:</strong> {cat.description}
                  </p>
                  <p>
                    <strong>Temperamento:</strong> {cat.temperament}
                  </p>
                  <p>
                    <strong>Nível de Afeto:</strong> {cat.affection_level}
                  </p>
                  <p>
                    <strong>Nível de Energia:</strong> {cat.energy_level}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
