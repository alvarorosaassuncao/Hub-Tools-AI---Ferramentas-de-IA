import React, { useState } from 'react';
import { Search, Sparkles, MessageSquare, Video, Image, Music, Code, Brain, BookOpen, X, Star, Sun, Moon } from 'lucide-react';

const categories = [
  { id: 'all', label: 'Todas', icon: Sparkles },
  { id: 'chatbot', label: 'Chatbots', icon: MessageSquare },
  { id: 'text', label: 'Texto', icon: BookOpen },
  { id: 'image', label: 'Imagem', icon: Image },
  { id: 'video', label: 'Vídeo', icon: Video },
  { id: 'audio', label: 'Áudio', icon: Music },
  { id: 'code', label: 'Programação', icon: Code },
  { id: 'productivity', label: 'Produtividade', icon: Brain },
];

const tools = [
  // Chatbots
  {
    name: 'ChatGPT',
    description: 'Assistente de IA conversacional avançado da OpenAI',
    longDescription: `ChatGPT é um modelo de linguagem avançado capaz de manter conversas naturais, 
    ajudar com redação, programação, análise e muito mais. É gratuito para uso básico e oferece 
    recursos premium com o ChatGPT Plus.`,
    url: 'https://chat.openai.com',
    category: 'chatbot',
    image: 'https://images.unsplash.com/photo-1684163761883-e61932afcd23',
    tags: ['Gratuito', 'Conversação', 'OpenAI'],
    featured: true,
    rating: 4.9,
    reviews: 1250
  },
  {
    name: 'Novo Bing',
    description: 'Chatbot com busca integrada da Microsoft',
    longDescription: `O Novo Bing combina busca na web com IA conversacional, permitindo 
    respostas mais contextualizadas e atualizadas. Integra-se com o Edge e oferece 
    recursos de geração de imagens.`,
    url: 'https://bing.com/chat',
    category: 'chatbot',
    image: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec',
    tags: ['Gratuito', 'Busca', 'Microsoft'],
    featured: true,
    rating: 4.7,
    reviews: 890
  },
  {
    name: 'Perplexity.ai',
    description: 'Motor de busca com IA para respostas detalhadas',
    longDescription: `Perplexity.ai é um mecanismo de busca alimentado por IA que fornece 
    respostas detalhadas e fundamentadas, citando fontes e oferecendo contexto adicional.`,
    url: 'https://perplexity.ai',
    category: 'chatbot',
    image: 'https://images.unsplash.com/photo-1676299081847-824916de030a',
    tags: ['Gratuito', 'Pesquisa', 'Citações'],
    rating: 4.6,
    reviews: 560
  },
  {
    name: 'YouChat',
    description: 'Chatbot inteligente com foco em pesquisa',
    longDescription: `YouChat oferece respostas precisas e contextualizadas, combinando 
    IA conversacional com capacidade de busca na web em tempo real.`,
    url: 'https://you.com/chat',
    category: 'chatbot',
    image: 'https://images.unsplash.com/photo-1675426513412-14ff698d9d43',
    tags: ['Gratuito', 'Pesquisa', 'Web'],
    rating: 4.5,
    reviews: 420
  },
  {
    name: 'Poe',
    description: 'Plataforma com múltiplos modelos de IA',
    longDescription: `Poe permite acesso a diversos modelos de IA em uma única interface, 
    incluindo ChatGPT, Claude e outros assistentes especializados.`,
    url: 'https://poe.com',
    category: 'chatbot',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    tags: ['Freemium', 'Múltiplos Modelos', 'Especializado'],
    rating: 4.6,
    reviews: 380
  },
  // Imagem
  {
    name: 'DALL-E',
    description: 'Gerador de imagens da OpenAI',
    longDescription: `DALL-E é uma IA capaz de criar imagens realistas e artísticas a partir 
    de descrições textuais. Oferece alta qualidade e controle preciso sobre os resultados.`,
    url: 'https://labs.openai.com',
    category: 'image',
    image: 'https://images.unsplash.com/photo-1686191128892-3f0c86f9a504',
    tags: ['Gratuito', 'Arte', 'OpenAI'],
    featured: true,
    rating: 4.8,
    reviews: 2100
  },
  {
    name: 'Stable Diffusion',
    description: 'Gerador de imagens open source',
    longDescription: `Stable Diffusion é um modelo de geração de imagens de código aberto, 
    oferecendo alta qualidade e flexibilidade. Pode ser usado online ou localmente.`,
    url: 'https://stability.ai',
    category: 'image',
    image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba',
    tags: ['Gratuito', 'Open Source', 'Customizável'],
    featured: true,
    rating: 4.7,
    reviews: 1800
  },
  {
    name: 'Midjourney',
    description: 'Gerador de imagens artísticas via Discord',
    longDescription: `Midjourney é conhecido por criar imagens artísticas impressionantes 
    com um estilo único. Funciona através do Discord e oferece diferentes níveis de assinatura.`,
    url: 'https://midjourney.com',
    category: 'image',
    image: 'https://images.unsplash.com/photo-1679083216051-aa510a1a2c0e',
    tags: ['Pago', 'Arte', 'Discord'],
    featured: true,
    rating: 4.9,
    reviews: 2500
  },
  {
    name: 'DiffusionBee',
    description: 'Interface desktop para Stable Diffusion',
    longDescription: `DiffusionBee é uma aplicação desktop que torna o Stable Diffusion 
    acessível para usuários Mac, com interface intuitiva e sem necessidade de conhecimentos técnicos.`,
    url: 'https://diffusionbee.com',
    category: 'image',
    image: 'https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1',
    tags: ['Gratuito', 'Desktop', 'Mac'],
    rating: 4.5,
    reviews: 320
  },
  // Áudio
  {
    name: 'ElevenLabs',
    description: 'Geração de voz realista com IA',
    longDescription: `ElevenLabs oferece tecnologia de ponta para síntese de voz, 
    permitindo criar vozes realistas em múltiplos idiomas e com controle de emoções.`,
    url: 'https://elevenlabs.io',
    category: 'audio',
    image: 'https://images.unsplash.com/photo-1610001797208-a6b40f76ce8d',
    tags: ['Freemium', 'Voz', 'Multilíngue'],
    featured: true,
    rating: 4.6,
    reviews: 780
  },
  {
    name: 'Whisper',
    description: 'Transcrição de áudio da OpenAI',
    longDescription: `Whisper é um sistema de reconhecimento de fala robusto que pode 
    transcrever áudio em múltiplos idiomas e traduzir para inglês.`,
    url: 'https://openai.com/research/whisper',
    category: 'audio',
    image: 'https://images.unsplash.com/photo-1678483789107-0029c61fdcb4',
    tags: ['Open Source', 'Transcrição', 'OpenAI'],
    rating: 4.7,
    reviews: 650
  },
  // Produtividade
  {
    name: 'NotionAI',
    description: 'Assistente de escrita integrado ao Notion',
    longDescription: `NotionAI é um assistente de escrita integrado que ajuda a gerar, 
    editar e melhorar conteúdo diretamente no Notion.`,
    url: 'https://notion.so',
    category: 'productivity',
    image: 'https://images.unsplash.com/photo-1675426512372-9721a1d7f5c7',
    tags: ['Integrado', 'Escrita', 'Produtividade'],
    featured: true,
    rating: 4.8,
    reviews: 920
  },
  // Vídeo
  {
    name: 'Runway',
    description: 'Edição e geração de vídeos com IA',
    longDescription: `Runway é uma plataforma completa para criação e edição de vídeos 
    com IA, oferecendo recursos como remoção de fundo, geração de vídeo e muito mais.`,
    url: 'https://runway.ml',
    category: 'video',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279',
    tags: ['Freemium', 'Edição', 'Geração'],
    featured: true,
    rating: 4.7,
    reviews: 920
  },
  // Código
  {
    name: 'GitHub Copilot',
    description: 'Assistente de programação da GitHub',
    longDescription: `GitHub Copilot é um programador par alimentado por IA que ajuda 
    você a escrever código mais rapidamente e com menos erros.`,
    url: 'https://github.com/features/copilot',
    category: 'code',
    image: 'https://images.unsplash.com/photo-1680795456548-d7cfb4d4ad99',
    tags: ['Pago', 'Programação', 'GitHub'],
    featured: true,
    rating: 4.8,
    reviews: 1500
  }
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTool, setSelectedTool] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const filteredTools = tools.filter(tool => {
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredTools = tools.filter(tool => tool.featured);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <header className={`${
        darkMode 
          ? 'bg-gradient-to-r from-purple-900 to-blue-900' 
          : 'bg-gradient-to-r from-purple-600 to-blue-600'
      } text-white py-12 shadow-lg transition duration-300 ease-in-out relative`}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex justify-center items-center mb-8">
              <h1 className="text-4xl font-bold animate-bounce">Hub Tools IA</h1>
            </div>
            <p className="text-xl opacity-90 mb-8 animate-fade-in">
              Explore as melhores ferramentas de IA gratuitas e acessíveis
            </p>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Buscar ferramentas..."
                className={`w-full pl-12 pr-4 py-4 rounded-xl ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-200 text-gray-800 placeholder-gray-500'
                } border focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300 ease-in-out`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 neon-glow transition duration-300 ease-in-out"
        >
          {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
        </button>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-purple-600 text-white'
                      : darkMode
                        ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* Featured Tools */}
          {selectedCategory === 'all' && searchTerm === '' && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Em Destaque</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredTools.map((tool, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedTool(tool)}
                    className={`${
                      darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
                    } rounded-xl shadow-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105`}
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={`${tool.image}?auto=format&fit=crop&w=800&q=80`}
                        alt={tool.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-semibold text-white mb-2">{tool.name}</h3>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < Math.floor(tool.rating)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-400'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-white text-sm">({tool.reviews})</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                        {tool.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {tool.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className={`px-2 py-1 text-sm rounded-full ${
                              darkMode
                                ? 'bg-purple-900/50 text-purple-300'
                                : 'bg-purple-100 text-purple-700'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* All Tools */}
          <section>
            <h2 className="text-2xl font-bold mb-6">
              {selectedCategory === 'all' ? 'Todas as Ferramentas' : categories.find(c => c.id === selectedCategory)?.label}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map((tool, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedTool(tool)}
                  className={`${
                    darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
                  } rounded-xl shadow-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105`}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={`${tool.image}?auto=format&fit=crop&w=800&q=80`}
                      alt={tool.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-semibold text-white mb-2">{tool.name}</h3>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(tool.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-400'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-white text-sm">({tool.reviews})</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                      {tool.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {tool.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`px-2 py-1 text-sm rounded-full ${
                            darkMode
                              ? 'bg-purple-900/50 text-purple-300'
                              : 'bg-purple-100 text-purple-700'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Tool Modal */}
      {selectedTool && (
        <div className={`fixed inset-0 ${darkMode ? 'bg-black/80' : 'bg-black/60'} backdrop-blur-sm flex items-center justify-center p-4 z-50`}>
          <div className={`${
            darkMode ? 'bg-gray-800' : 'bg-white'
          } rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto`}>
            <div className="relative">
              <img
                src={`${selectedTool.image}?auto=format&fit=crop&w=1200&q=80`}
                alt={selectedTool.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <button
                onClick={() => setSelectedTool(null)}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="absolute bottom-4 left-6">
                <h2 className="text-2xl font-bold text-white mb-2">{selectedTool.name}</h2>
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(selectedTool.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-white text-sm">({selectedTool.reviews} avaliações)</span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedTool.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`px-2 py-1 text-sm rounded-full ${
                      darkMode
                        ? 'bg-purple-900/50 text-purple-300'
                        : 'bg-purple-100 text-purple-700'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className={`prose ${darkMode ? 'prose-invert' : ''} max-w-none mb-6`}>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  {selectedTool.longDescription}
                </p>
              </div>
              <a
                href={selectedTool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Acessar Ferramenta
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;