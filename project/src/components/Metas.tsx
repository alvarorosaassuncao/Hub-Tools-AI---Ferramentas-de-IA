import React from 'react';
import { Plus, Target } from 'lucide-react';

export default function Metas() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Metas Financeiras</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
          <Plus className="h-4 w-4" />
          Nova Meta
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            titulo: 'Fundo de Emergência',
            atual: 10000,
            objetivo: 15000,
            prazo: 'Dezembro 2024',
            cor: 'blue'
          },
          {
            titulo: 'Viagem',
            atual: 2500,
            objetivo: 5000,
            prazo: 'Julho 2024',
            cor: 'green'
          },
          {
            titulo: 'Novo Carro',
            atual: 15000,
            objetivo: 50000,
            prazo: 'Janeiro 2025',
            cor: 'purple'
          },
        ].map((meta, i) => (
          <div key={i} className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">{meta.titulo}</h3>
              <Target className={\`h-6 w-6 text-\${meta.cor}-600\`} />
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Progresso</span>
                  <span>{((meta.atual / meta.objetivo) * 100).toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={\`bg-\${meta.cor}-600 h-2 rounded-full\`}
                    style={{ width: \`\${(meta.atual / meta.objetivo) * 100}%\` }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Atual</p>
                  <p className="text-lg font-semibold text-gray-800">
                    R$ {meta.atual.toLocaleString('pt-BR')}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Objetivo</p>
                  <p className="text-lg font-semibold text-gray-800">
                    R$ {meta.objetivo.toLocaleString('pt-BR')}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-500">Prazo</p>
                <p className="text-gray-800">{meta.prazo}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}