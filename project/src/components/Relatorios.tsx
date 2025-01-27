import React from 'react';
import { BarChart, PieChart, Download } from 'lucide-react';

export default function Relatorios() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Relatórios</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
          <Download className="h-4 w-4" />
          Exportar Relatório
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Despesas por Categoria</h3>
            <PieChart className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {[
              { categoria: 'Moradia', valor: 2500, porcentagem: 35, cor: 'bg-blue-500' },
              { categoria: 'Alimentação', valor: 1500, porcentagem: 25, cor: 'bg-green-500' },
              { categoria: 'Transporte', valor: 1000, porcentagem: 20, cor: 'bg-yellow-500' },
              { categoria: 'Lazer', valor: 800, porcentagem: 15, cor: 'bg-purple-500' },
              { categoria: 'Outros', valor: 200, porcentagem: 5, cor: 'bg-gray-500' },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-600">{item.categoria}</span>
                  <span className="text-sm font-medium text-gray-800">
                    R$ {item.valor.toLocaleString('pt-BR')} ({item.porcentagem}%)
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`${item.cor} h-2 rounded-full`}
                    style={{ width: `${item.porcentagem}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Fluxo de Caixa Mensal</h3>
            <BarChart className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {[
              { mes: 'Janeiro', receitas: 8000, despesas: 6000 },
              { mes: 'Fevereiro', receitas: 7500, despesas: 5500 },
              { mes: 'Março', receitas: 8500, despesas: 6500 },
            ].map((mes, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{mes.mes}</span>
                  <div className="space-x-4">
                    <span className="text-sm text-green-600">
                      R$ {mes.receitas.toLocaleString('pt-BR')}
                    </span>
                    <span className="text-sm text-red-600">
                      R$ {mes.despesas.toLocaleString('pt-BR')}
                    </span>
                  </div>
                </div>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${(mes.receitas / 10000) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex mb-2 items-center justify-between">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-red-500 h-2 rounded-full"
                        style={{ width: `${(mes.despesas / 10000) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Resumo Anual</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-gray-500">Total de Receitas</p>
            <p className="text-2xl font-bold text-green-600">R$ 95.000,00</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Total de Despesas</p>
            <p className="text-2xl font-bold text-red-600">R$ 72.000,00</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Saldo do Ano</p>
            <p className="text-2xl font-bold text-blue-600">R$ 23.000,00</p>
          </div>
        </div>
      </div>
    </div>
  );
}