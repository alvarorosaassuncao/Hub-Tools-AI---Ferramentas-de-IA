import React from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';

export default function Categorias() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Categorias</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
          <Plus className="h-4 w-4" />
          Nova Categoria
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Categorias de Receitas</h3>
          <div className="space-y-3">
            {[
              { nome: 'Salário', cor: 'bg-green-500' },
              { nome: 'Investimentos', cor: 'bg-blue-500' },
              { nome: 'Freelance', cor: 'bg-purple-500' },
            ].map((cat, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={\`w-4 h-4 rounded-full \${cat.cor}\`}></div>
                  <span className="font-medium text-gray-800">{cat.nome}</span>
                </div>
                <div className="flex gap-2">
                  <button className="p-1 text-gray-400 hover:text-gray-600">
                    <Edit2 className="h-4 w-4" />
                  </button>
                  <button className="p-1 text-gray-400 hover:text-red-600">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Categorias de Despesas</h3>
          <div className="space-y-3">
            {[
              { nome: 'Moradia', cor: 'bg-red-500' },
              { nome: 'Alimentação', cor: 'bg-orange-500' },
              { nome: 'Transporte', cor: 'bg-yellow-500' },
              { nome: 'Lazer', cor: 'bg-pink-500' },
            ].map((cat, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={\`w-4 h-4 rounded-full \${cat.cor}\`}></div>
                  <span className="font-medium text-gray-800">{cat.nome}</span>
                </div>
                <div className="flex gap-2">
                  <button className="p-1 text-gray-400 hover:text-gray-600">
                    <Edit2 className="h-4 w-4" />
                  </button>
                  <button className="p-1 text-gray-400 hover:text-red-600">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}