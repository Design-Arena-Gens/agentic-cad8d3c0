"use client";

import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("overview");

  const sections = [
    { id: "overview", label: "Visão Geral" },
    { id: "features", label: "Funcionalidades" },
    { id: "methodology", label: "Metodologia" },
    { id: "models", label: "Modelos IA" },
    { id: "founders", label: "Fundadores" },
    { id: "stats", label: "Estatísticas" },
    { id: "conclusion", label: "Conclusão" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-slate-900/80 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">DA</span>
            </div>
            <h1 className="text-xl font-bold text-white">Relatório Design Arena</h1>
          </div>
          <a
            href="https://designarena.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Visitar Site
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.08%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20"></div>
        <div className="max-w-5xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-purple-300 text-sm font-medium">Y Combinator S25</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Design Arena
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Plataforma de Benchmark para Design IA
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            A maior plataforma crowdsourced do mundo para avaliação de designs gerados por inteligência artificial,
            utilizando votação comunitária e o sistema de classificação Bradley-Terry (Elo).
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold text-white">50K+</div>
              <div className="text-slate-400 text-sm">Usuários Ativos</div>
            </div>
            <div className="px-6 py-3 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold text-white">140+</div>
              <div className="text-slate-400 text-sm">Países</div>
            </div>
            <div className="px-6 py-3 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold text-white">54+</div>
              <div className="text-slate-400 text-sm">Modelos LLM</div>
            </div>
            <div className="px-6 py-3 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold text-white">12+</div>
              <div className="text-slate-400 text-sm">Modelos de Imagem</div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="sticky top-16 z-40 bg-slate-800/50 backdrop-blur-lg border-y border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto gap-1 py-2 scrollbar-hide">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeSection === section.id
                    ? "bg-purple-600 text-white"
                    : "text-slate-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Overview Section */}
        {activeSection === "overview" && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                O que é o Design Arena?
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                O <strong className="text-white">Design Arena</strong> é uma plataforma web inovadora desenvolvida para avaliar 
                designs gerados por IA através de testes de preferência humana crowdsourced. Lançada em 2025 por graduados 
                de Harvard, a plataforma aborda a falta de métodos padronizados para avaliar a qualidade estética e funcional 
                de visuais gerados por IA.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                A plataforma permite que desenvolvedores e designers substituam revisões manuais de design tradicionais 
                por um processo rápido e orientado por dados, usando um sistema de votação head-to-head. Isso gera uma 
                classificação pública de ferramentas de IA generativa, promovendo a melhoria da indústria.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-slate-900/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">🎯 Missão</h3>
                  <p className="text-slate-400">
                    Criar um benchmark público e transparente para medir a qualidade de designs gerados por 
                    diferentes modelos de IA, baseado em preferências humanas reais.
                  </p>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">🌍 Alcance Global</h3>
                  <p className="text-slate-400">
                    Com mais de 50.000 usuários em 140 países, a plataforma representa uma das maiores 
                    comunidades de avaliação de design IA do mundo.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </span>
                Público-Alvo
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: "🤖", title: "Engenheiros AI/ML", desc: "Avaliação de performance de modelos" },
                  { icon: "🎨", title: "UI/UX Designers", desc: "Comparação de outputs de design" },
                  { icon: "💻", title: "Desenvolvedores", desc: "Integração de ferramentas IA" },
                  { icon: "📊", title: "Product Managers", desc: "Decisões baseadas em dados" },
                ].map((item, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-5 text-center">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h4 className="text-white font-medium mb-2">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Features Section */}
        {activeSection === "features" && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20">
              <h2 className="text-2xl font-bold text-white mb-8">Funcionalidades Principais</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: "🏆",
                    title: "Website Arena",
                    desc: "Avalie designs de websites gerados por IA em competições head-to-head. Compare criação e edição de sites e web apps.",
                    color: "purple"
                  },
                  {
                    icon: "🖼️",
                    title: "Image Arena",
                    desc: "Compare imagens geradas por diferentes modelos de IA. Avalie qualidade estética, composição e criatividade.",
                    color: "pink"
                  },
                  {
                    icon: "🎬",
                    title: "Video Arena",
                    desc: "Avaliação de vídeos gerados por IA. Compare qualidade, fluidez e coerência visual entre modelos.",
                    color: "blue"
                  },
                  {
                    icon: "🔊",
                    title: "Audio Arena",
                    desc: "Compare áudios e músicas geradas por IA. Avalie qualidade sonora, composição e naturalidade.",
                    color: "green"
                  },
                  {
                    icon: "🎮",
                    title: "Game Development",
                    desc: "Avaliação de assets e elementos de jogos gerados por IA. Ideal para desenvolvedores de games.",
                    color: "orange"
                  },
                  {
                    icon: "📊",
                    title: "Leaderboards Públicos",
                    desc: "Rankings transparentes baseados em votos da comunidade. Acompanhe a evolução dos modelos.",
                    color: "cyan"
                  },
                  {
                    icon: "🔒",
                    title: "Avaliação Privada",
                    desc: "Serviços de avaliação privada para empresas. Teste seus modelos antes do lançamento público.",
                    color: "red"
                  },
                  {
                    icon: "📈",
                    title: "Analytics Avançados",
                    desc: "Métricas detalhadas de performance. Win rates, rankings Elo e análises comparativas.",
                    color: "yellow"
                  },
                ].map((feature, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-6 hover:bg-slate-900/70 transition-colors">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-400">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-8 border border-purple-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">Modelo Freemium</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-green-400 mb-3">✅ Gratuito</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Votar em comparações</li>
                    <li>• Ver leaderboards públicos</li>
                    <li>• Participar da comunidade</li>
                    <li>• Sugerir novos modelos</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-3">💎 Enterprise</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Avaliações privadas</li>
                    <li>• Analytics avançados</li>
                    <li>• API de integração</li>
                    <li>• Suporte dedicado</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Methodology Section */}
        {activeSection === "methodology" && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </span>
                Metodologia de Avaliação
              </h2>
              
              <div className="space-y-6">
                <div className="bg-slate-900/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">🔄 Sistema de Torneio</h3>
                  <p className="text-slate-300 mb-4">
                    O Design Arena utiliza uma metodologia única de estilo torneio onde modelos de IA competem em 
                    comparações pareadas (pairwise comparisons). Os outputs são apresentados anonimamente para 
                    prevenir viés de marca.
                  </p>
                  <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
                    <p className="text-purple-300 text-sm">
                      <strong>Processo:</strong> Em cada sessão de votação, 4 modelos são selecionados aleatoriamente 
                      e competem em comparações pareadas, permitindo que a comunidade molde os rankings.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">📊 Modelo Bradley-Terry</h3>
                  <p className="text-slate-300 mb-4">
                    O sistema de ranking utiliza o modelo Bradley-Terry para calcular as classificações, que estima 
                    a força de cada modelo baseado em seu desempenho em comparações head-to-head.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-purple-400 mb-2">Elo Rating</div>
                      <p className="text-slate-400 text-sm">Sistema de pontuação similar ao xadrez</p>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-pink-400 mb-2">Win Rate</div>
                      <p className="text-slate-400 text-sm">Taxa de vitória em comparações</p>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-blue-400 mb-2">Ranking</div>
                      <p className="text-slate-400 text-sm">Posição geral no leaderboard</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">🎯 Princípios de Avaliação</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { icon: "👁️", title: "Anonimato", desc: "Modelos apresentados sem identificação para evitar viés" },
                      { icon: "🎲", title: "Aleatoriedade", desc: "Seleção aleatória de modelos para comparação justa" },
                      { icon: "👥", title: "Crowdsourced", desc: "Decisões baseadas em preferências coletivas da comunidade" },
                      { icon: "🔍", title: "Transparência", desc: "Metodologia aberta para revisão e feedback da comunidade" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 bg-slate-800/50 rounded-lg p-4">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <h4 className="text-white font-medium">{item.title}</h4>
                          <p className="text-slate-400 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Models Section */}
        {activeSection === "models" && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20">
              <h2 className="text-2xl font-bold text-white mb-6">Modelos de IA Avaliados</h2>
              <p className="text-slate-300 mb-8">
                O Design Arena avalia uma ampla gama de modelos de IA das principais empresas e laboratórios de pesquisa do mundo.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-900/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="text-2xl">🤖</span>
                    Modelos LLM (54+)
                  </h3>
                  <div className="space-y-3">
                    {[
                      { name: "GPT-4 / ChatGPT", company: "OpenAI", color: "green" },
                      { name: "Claude", company: "Anthropic", color: "orange" },
                      { name: "Gemini", company: "Google", color: "blue" },
                      { name: "Mistral", company: "Mistral AI", color: "purple" },
                      { name: "LLaMA", company: "Meta", color: "cyan" },
                      { name: "Grok", company: "xAI", color: "red" },
                    ].map((model, i) => (
                      <div key={i} className="flex items-center justify-between bg-slate-800/50 rounded-lg p-3">
                        <span className="text-white font-medium">{model.name}</span>
                        <span className="text-slate-400 text-sm">{model.company}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="text-2xl">🖼️</span>
                    Modelos de Imagem (12+)
                  </h3>
                  <div className="space-y-3">
                    {[
                      { name: "DALL-E 3", company: "OpenAI", color: "green" },
                      { name: "Midjourney", company: "Midjourney", color: "purple" },
                      { name: "Stable Diffusion", company: "Stability AI", color: "blue" },
                      { name: "Imagen", company: "Google", color: "yellow" },
                      { name: "Firefly", company: "Adobe", color: "red" },
                      { name: "Leonardo AI", company: "Leonardo", color: "orange" },
                    ].map((model, i) => (
                      <div key={i} className="flex items-center justify-between bg-slate-800/50 rounded-lg p-3">
                        <span className="text-white font-medium">{model.name}</span>
                        <span className="text-slate-400 text-sm">{model.company}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-lg font-semibold text-white mb-4">🏆 Principais Competidores no Website Arena</h3>
                <p className="text-slate-300 mb-4">
                  No leaderboard de websites, os principais modelos competem para criar os melhores designs de sites e web apps:
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Gemini", "Claude", "GPT-4", "Mistral", "v0 by Vercel", "Bolt.new", "Lovable"].map((model, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                      {model}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Founders Section */}
        {activeSection === "founders" && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20">
              <h2 className="text-2xl font-bold text-white mb-8">Fundadores & Equipe</h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    name: "Grace Li",
                    role: "Co-founder",
                    background: "Harvard Graduate, ex-Apple Engineer",
                    icon: "👩‍💻"
                  },
                  {
                    name: "Kamryn Ohly",
                    role: "Co-founder",
                    background: "Harvard Graduate, Engineering Background",
                    icon: "👨‍💻"
                  },
                  {
                    name: "Jayden Personnat",
                    role: "Co-founder",
                    background: "Harvard Graduate, ex-Nvidia Engineer",
                    icon: "👨‍💻"
                  },
                ].map((founder, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-6 text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-4xl">
                      {founder.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white">{founder.name}</h3>
                    <p className="text-purple-400 text-sm mb-2">{founder.role}</p>
                    <p className="text-slate-400 text-sm">{founder.background}</p>
                  </div>
                ))}
              </div>

              <div className="bg-slate-900/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">🏢 Sobre a Empresa</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-slate-300 mb-4">
                      <strong className="text-white">Arcada Labs</strong> é a empresa por trás do Design Arena. 
                      Fundada por graduados de Harvard com experiência em empresas como Apple e Nvidia, a startup 
                      começou com o objetivo de criar um motor de jogos com IA.
                    </p>
                    <p className="text-slate-300">
                      Após identificar deficiências na estética de designs gerados por IA, a equipe pivotou para 
                      criar uma plataforma de benchmarking que prioriza o julgamento humano em design.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-slate-800/50 rounded-lg p-3">
                      <span className="text-2xl">📍</span>
                      <div>
                        <p className="text-white font-medium">Localização</p>
                        <p className="text-slate-400 text-sm">San Francisco, CA</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-800/50 rounded-lg p-3">
                      <span className="text-2xl">🚀</span>
                      <div>
                        <p className="text-white font-medium">Aceleradora</p>
                        <p className="text-slate-400 text-sm">Y Combinator S25</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-800/50 rounded-lg p-3">
                      <span className="text-2xl">📅</span>
                      <div>
                        <p className="text-white font-medium">Fundação</p>
                        <p className="text-slate-400 text-sm">2025</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Stats Section */}
        {activeSection === "stats" && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20">
              <h2 className="text-2xl font-bold text-white mb-8">Estatísticas & Métricas</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                  { value: "50,000+", label: "Usuários Ativos", icon: "👥", color: "purple" },
                  { value: "140+", label: "Países Alcançados", icon: "🌍", color: "blue" },
                  { value: "54+", label: "Modelos LLM", icon: "🤖", color: "green" },
                  { value: "12+", label: "Modelos de Imagem", icon: "🖼️", color: "pink" },
                ].map((stat, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-6 text-center">
                    <div className="text-4xl mb-3">{stat.icon}</div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-900/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">📈 Crescimento</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-slate-400">Adoção Global</span>
                        <span className="text-white">140 países</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{ width: "72%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-slate-400">Engajamento Comunidade</span>
                        <span className="text-white">Alto</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-slate-400">Cobertura de Modelos</span>
                        <span className="text-white">54+ LLMs</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">🎯 Áreas de Avaliação</h3>
                  <div className="space-y-3">
                    {[
                      { area: "Web Design", percentage: "95%" },
                      { area: "UI/UX", percentage: "90%" },
                      { area: "Imagens", percentage: "88%" },
                      { area: "Vídeos", percentage: "75%" },
                      { area: "Áudio", percentage: "70%" },
                      { area: "3D Design", percentage: "65%" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-slate-300">{item.area}</span>
                        <span className="text-purple-400 font-medium">{item.percentage}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Conclusion Section */}
        {activeSection === "conclusion" && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/20">
              <h2 className="text-2xl font-bold text-white mb-6">Conclusão & Perspectivas</h2>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 leading-relaxed mb-6">
                  O <strong className="text-white">Design Arena</strong> representa uma evolução significativa na forma como avaliamos 
                  e comparamos ferramentas de design baseadas em inteligência artificial. Ao democratizar o processo de benchmark 
                  através de preferências humanas crowdsourced, a plataforma preenche uma lacuna crítica no ecossistema de IA generativa.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="text-lg font-semibold text-green-400 mb-4">✅ Pontos Fortes</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Metodologia transparente e aberta</li>
                    <li>• Comunidade global engajada</li>
                    <li>• Cobertura ampla de modelos</li>
                    <li>• Interface intuitiva e gamificada</li>
                    <li>• Feedback rápido e orientado por dados</li>
                    <li>• Prevenção de viés através de anonimato</li>
                  </ul>
                </div>

                <div className="bg-yellow-900/20 rounded-xl p-6 border border-yellow-500/20">
                  <h3 className="text-lg font-semibold text-yellow-400 mb-4">⚠️ Desafios</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Subjetividade de votos crowdsourced</li>
                    <li>• Variação de preferências culturais</li>
                    <li>• Necessidade de volume constante de votos</li>
                    <li>• Evolução rápida dos modelos de IA</li>
                    <li>• Competição com benchmarks tradicionais</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-500/20 mb-8">
                <h3 className="text-lg font-semibold text-purple-400 mb-4">🔮 Futuro da Plataforma</h3>
                <p className="text-slate-300 mb-4">
                  Com o apoio da Y Combinator e uma base de usuários em rápido crescimento, o Design Arena está 
                  bem posicionado para se tornar o padrão de referência na avaliação de design IA. Algumas 
                  direções esperadas incluem:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { icon: "🔌", title: "API Pública", desc: "Integração com workflows de desenvolvimento" },
                    { icon: "📱", title: "Apps Mobile", desc: "Expansão para plataformas móveis" },
                    { icon: "🎥", title: "Animação", desc: "Suporte expandido para conteúdo animado" },
                  ].map((item, i) => (
                    <div key={i} className="bg-slate-800/50 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <h4 className="text-white font-medium text-sm">{item.title}</h4>
                      <p className="text-slate-400 text-xs mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-3">Experimente o Design Arena</h3>
                <p className="text-white/80 mb-4">
                  Participe da maior comunidade de avaliação de design IA do mundo e ajude a moldar o futuro das ferramentas criativas.
                </p>
                <a
                  href="https://designarena.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
                >
                  Acessar Design Arena →
                </a>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-400">
            Relatório sobre Design Arena • Criado em Dezembro 2025
          </p>
          <p className="text-slate-500 text-sm mt-2">
            Fonte: <a href="https://designarena.ai" className="text-purple-400 hover:text-purple-300">designarena.ai</a>
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
