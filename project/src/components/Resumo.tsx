import React from 'react';
import { ArrowUpCircle, ArrowDownCircle, Wallet } from 'lucide-react';

export default function Resumo() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Resumo Financeiro</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Saldo Total</p>
              <p className="text-2xl font-bold text-gray-800">R$ 15.750,00</p>
            </div>
            <Wallet className="h-8 w-8 text-blue-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Receitas do Mês</p>
              <p className="text-2xl font-bold text-green-600">R$ 8.500,00</p>
            </div>
            <ArrowUpCircle className="h-8 w-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Despesas do Mês</p>
              <p className="text-2xl font-bold text-red-600">R$ 3.250,00</p>
            </div>
            <ArrowDownCircle className="h-8 w-8 text-red-600" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Últimas Transações</h3>
          <div className="space-y-4">
            {[
              { desc: 'Salário', valor: 5000, tipo: 'receita', data: '15/03/2024' },
              { desc: 'Aluguel', valor: -1500, tipo: 'despesa', data: '10/03/2024' },
              { desc: 'Freelance', valor: 2000, tipo: 'receita', data: '08/03/2024' },
            ].map((trans, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b">
                <div>
                  <p className="font-medium text-gray-800">{trans.desc}</p>
                  <p className="text-sm text-gray-500">{trans.data}</p>
                </div>
                <p className={\`font-semibold \${
                  trans.tipo === 'receita' ? 'text-green-600' : 'text-red-600'
                }\`}>
                  R$ {Math.abs(trans.valor).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Metas do Mês</h3>
          <div className="space-y-4">
            {[
              { meta: 'Economia', atual: 2500, objetivo: 3000 },
              { meta: 'Investimentos', atual: 1500, objetivo: 2000 },
              { meta: 'Fundo de Emergência', atual: 10000, objetivo: 15000 },
            ].map((meta, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between">
                  <p className="text-gray-800">{meta.meta}</p>
                  <p className="text-gray-600">
                    R$ {meta.atual.toLocaleString('pt-BR')} / R$ {meta.objetivo.toLocaleString('pt-BR')}
                  </p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: \`\${(meta.atual / meta.objetivo) * 100}%\` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}