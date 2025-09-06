'use client';

import { useState } from 'react';
import { Graphs, Station } from '@/app/station';
import { findShortestPath } from '@/app/bfs';

// Mapeia as cores das linhas para classes do Tailwind CSS
const colorMap: { [key: string]: string } = {
  'Azul': 'border-blue-500 bg-blue-100',
  'Vermelha': 'border-red-500 bg-red-100',
  'Azul Escuro': 'border-blue-800 bg-blue-200',
  'Verde': 'border-green-500 bg-green-100',
  'Roxa': 'border-purple-500 bg-purple-100',
  'Amarela': 'border-yellow-400 bg-yellow-100',
};

export default function HomePage() {
  const [startStation, setStartStation] = useState<string>('0');
  const [endStation, setEndStation] = useState<string>('89');
  const [path, setPath] = useState<Station[] | null>(null);

  const handleFindPath = () => {
    const result = findShortestPath(startStation, endStation);
    setPath(result);
  };

  // Cria um conjunto de IDs do caminho para facilitar a verificação e o destaque
  const pathIds = new Set(path?.map(p => p.id));

  return (
    <main className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-black">🚇 Localizador de Rotas do Metrô</h1>
          <p className="text-black mt-2">
            Encontre o caminho mais rápido entre duas estações usando Busca em Largura (BFS).
          </p>
        </header>

        {/* Painel de Controle */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8 sticky top-4 z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div>
              <label htmlFor="start" className="block text-sm font-medium text-black mb-1">
                Estação de Partida
              </label>
              <select
                id="start"
                value={startStation}
                onChange={(e) => setStartStation(e.target.value)}
                className="w-full text-black p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              >
                {Graphs.map((station) => (
                  <option key={station.id} value={station.id}>
                    {station.name} ({station.color})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="end" className="block text-sm font-medium text-black mb-1">
                Estação de Destino
              </label>
              <select
                id="end"
                value={endStation}
                onChange={(e) => setEndStation(e.target.value)}
                className="w-full p-2 border border-gray-300 text-black rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              >
                {Graphs.map((station) => (
                  <option key={station.id} value={station.id}>
                    {station.name} ({station.color})
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={handleFindPath}
              className="w-full bg-indigo-600 text-black font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
            >
              Encontrar Caminho
            </button>
          </div>
        </div>

        {/* Exibição do Caminho */}
        {path && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">
              {path.length > 0 ? `Rota Encontrada (${path.length} estações)` : 'Nenhuma rota encontrada'}
            </h2>
            <div className="flex flex-wrap gap-2 items-center bg-white p-4 rounded-lg shadow">
              {path.map((station, index) => (
                <div key={station.id} className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm text-black font-medium border-2 ${colorMap[station.color]}`}>
                    {station.name}
                  </span>
                  {index < path.length - 1 && <span className="text-black font-bold">→</span>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}