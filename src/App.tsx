import React from 'react';
import { ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="text-center py-16 px-8">
        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          ProjectSZN
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Busco ajudar pessoas que passam pelo mesmo que já passei. Não deixe controlarem seu cérebro.
        </p>
      </header>

      {/* Produto Principal - Destaque */}
      <section className="max-w-4xl mx-auto px-8 mb-16">
        <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-8 text-center transform hover:scale-102 transition-all duration-300 shadow-xl">
          <div className="mb-6">
            <img 
              src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop" 
              alt="Não Seja Um Zumbi Digital" 
              className="w-full h-64 object-cover rounded-xl mb-6 shadow-lg"
            />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-blue-400">
            LIVRO: NÃO SEJA UM ZUMBI DIGITAL
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Desperte do transe digital e reconquiste o controle da sua vida. 
            Um guia completo para se libertar do vício em tecnologia e viver com propósito.
          </p>
          <div className="space-y-4">
            <a 
              href="https://zsn.mycartpanda.com/checkout/191739029:1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-semibold px-10 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              ADQUIRIR LIVRO
              <ExternalLink size={24} />
            </a>
            <p className="text-sm text-gray-500">
              Acesso imediato após a compra
            </p>
          </div>
        </div>
      </section>

      {/* Avaliações */}
      <section className="max-w-4xl mx-auto px-8 mb-16">
        <h3 className="text-3xl font-bold text-center mb-12 text-white">
          O que nossos leitores estão dizendo
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Avaliação 1 - 5 estrelas */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 text-xl">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              "Livro muito bem estruturado. Em 3 dias já consegui reduzir significativamente o tempo no celular. Recomendo."
            </p>
            <div className="text-sm text-gray-400">
              <strong className="text-blue-400">Carlos M.</strong> - Empresário
            </div>
          </div>

          {/* Avaliação 2 - 4 estrelas */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 text-xl">
                ⭐⭐⭐⭐⚪
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              "Estava perdendo muito tempo nas redes sociais. O livro me ajudou a criar uma rotina mais saudável com a tecnologia."
            </p>
            <div className="text-sm text-gray-400">
              <strong className="text-blue-400">Ana P.</strong> - Designer
            </div>
          </div>

          {/* Avaliação 3 - 5 estrelas */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 text-xl">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              "A primeira semana foi desafiadora, mas depois que estabeleci a rotina, minha produtividade aumentou consideravelmente."
            </p>
            <div className="text-sm text-gray-400">
              <strong className="text-blue-400">Roberto S.</strong> - Desenvolvedor
            </div>
          </div>

          {/* Avaliação 4 - 4 estrelas */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 text-xl">
                ⭐⭐⭐⭐⚪
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              "Conteúdo bem organizado e de fácil aplicação. Me ajudou a ter mais controle sobre meus hábitos digitais."
            </p>
            <div className="text-sm text-gray-400">
              <strong className="text-blue-400">Marina L.</strong> - Estudante
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-12 px-8 border-t border-gray-800">
        <p className="text-gray-500">
          &copy; 2025 ProjectSZN. Todos os direitos reservados.
        </p>
        <p className="text-sm text-gray-600 mt-2">
          Desperte seu potencial. Viva com propósito.
        </p>
      </footer>
    </div>
  );
}

export default App;