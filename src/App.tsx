import { useState } from 'react';
import { Lock, Zap, Award, Target, BookOpenText, ShieldCheck, CheckCircle2, RotateCcw, BadgeCheck, ArrowRight, ChevronDown } from 'lucide-react';
import { SalesToast } from './components/SalesToast';
import { DiscountModal } from './components/DiscountModal';

const CHECKOUT_COMBO_URL = 'https://checkout.criadorhub.shop/VCCL1O8SDA3G';
const CHECKOUT_BASIC_URL = 'https://checkout.criadorhub.shop/VCCL1O8SDA3H';
const CHECKOUT_DISCOUNT_URL = 'https://checkout.criadorhub.shop/VCCL1O8SDA3I';

export default function App() {
  const [isDiscountModalOpen, setIsDiscountModalOpen] = useState(false);
  const [hasDiscountApplied, setHasDiscountApplied] = useState(false);

  const scrollToCombo = () => {
    const el = document.getElementById('combo-completo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      document.getElementById('ofertas')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAcceptDiscount = () => {
    setIsDiscountModalOpen(false);
    setHasDiscountApplied(true);
    window.location.href = CHECKOUT_DISCOUNT_URL;
  };

  const handleProceedBasic = () => {
    setIsDiscountModalOpen(false);
    window.location.href = CHECKOUT_BASIC_URL;
  };

  return (
    <div className="min-h-screen bg-white text-gray-950 font-sans relative">
      {/* Real-time Discreet Social Proof Purchase Pop-up */}
      <SalesToast />

      {/* Pop-up de Desconto de 10% no Plano Básico */}
      <DiscountModal 
        isOpen={isDiscountModalOpen}
        onClose={() => setIsDiscountModalOpen(false)}
        onAcceptDiscount={handleAcceptDiscount}
        onProceedBasic={handleProceedBasic}
        discountCheckoutUrl={CHECKOUT_DISCOUNT_URL}
        basicCheckoutUrl={CHECKOUT_BASIC_URL}
      />
      
      {/* Hero: High Tension */}
      <section className="bg-gradient-to-b from-sky-950 via-sky-900 to-sky-800 text-white px-4 pt-10 pb-12 sm:pt-16 sm:pb-20 text-center relative overflow-hidden">
        {/* Glow de fundo sutil */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-500/10 blur-[120px] pointer-events-none rounded-full" />

        <div className="inline-flex items-center gap-2 bg-amber-400 text-sky-950 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full font-black text-xs sm:text-sm mb-6 shadow-[0_0_20px_rgba(251,191,36,0.4)] uppercase tracking-wider animate-pulse">
          <ShieldCheck size={15} /> Para pais que não aguentam mais ver o filho sofrendo
        </div>
        
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black leading-[1.1] mb-4 sm:mb-6 max-w-4xl mx-auto px-1 tracking-tight">
          TODO DIA A HORA DA LIÇÃO DE CASA É UM <span className="text-amber-400 underline decoration-amber-400/50 underline-offset-4">CAMPO DE BATALHA</span>?
        </h1>
        
        <p className="text-base sm:text-xl font-medium mb-6 sm:mb-8 max-w-2xl mx-auto text-sky-100 leading-relaxed px-1">
          Choro, gritos, frustração e a sensação de que você está perdendo a paciência à toa. <span className="font-bold text-white">O problema não é falta de inteligência do seu filho... é o método arcaico da escola.</span>
        </p>

        <div className="max-w-[220px] sm:max-w-xs mx-auto mb-6 sm:mb-8">
          <img 
            src="https://matematica.aprendizadodivertido01.com/imagens/mockup.webp" 
            alt="Caderno de Atividades Lúdicas" 
            className="rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.35)] border-4 border-white/90 w-full transform hover:scale-[1.02] transition-transform duration-300" 
          />
        </div>

        {/* Navegação proporcional e humana (sem agressividade de venda antes da hora) */}
        <div className="max-w-md mx-auto flex flex-col items-center">
          <button 
            onClick={() => {
              const el = document.getElementById('problema-metodo');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              else scrollToCombo();
            }}
            className="group inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 active:bg-white/25 text-white hover:text-amber-300 font-bold py-2.5 px-6 rounded-full border border-white/20 hover:border-amber-400/50 backdrop-blur-sm transition-all duration-200 cursor-pointer text-xs sm:text-sm tracking-wide shadow-sm"
          >
            <span>Descubra como transformar o estudo em um jogo</span>
            <ChevronDown className="w-4 h-4 text-amber-400 group-hover:translate-y-0.5 transition-transform" />
          </button>
          
          <div className="flex items-center justify-center gap-3 text-xs text-sky-200/80 mt-4 font-medium">
            <span>✨ Sem decoreba exaustiva</span>
            <span className="opacity-40">•</span>
            <span>🧠 Raciocínio visual e lúdico</span>
          </div>
        </div>
      </section>

      {/* The Problem/Transformation */}
      <section id="problema-metodo" className="container mx-auto px-4 py-8 sm:py-14 scroll-mt-6">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-10 items-center max-w-4xl mx-auto">
          <div className="bg-sky-50 p-3 sm:p-4 rounded-2xl border border-sky-100 max-w-[200px] sm:max-w-xs mx-auto md:max-w-none">
             <img src="https://matematica.aprendizadodivertido01.com/imagens/produtoprincipal.webp" alt="Atividades" className="rounded-xl shadow-md w-36 sm:w-48 mx-auto" />
          </div>
          <div className="space-y-3 sm:space-y-5 text-left">
            <h2 className="text-xl sm:text-3xl font-black text-sky-950 leading-tight">O PROBLEMA NÃO É O SEU FILHO, É O MÉTODO!</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">Enquanto você tenta ensinar números abstratos, o cérebro dele clama por estímulos visuais, lógica e diversão prática.</p>
            <p className="text-sm sm:text-lg font-bold text-sky-900 border-l-4 border-amber-400 pl-3">A matemática fica fácil quando ela fala a língua dele.</p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">Nosso material transforma a resistência em missão. Ele não está apenas fazendo contas; ele está resolvendo desafios no estilo do universo que ele adora. <span className="font-bold text-sky-800">Você percebe a confiança dele voltar nas primeiras páginas.</span></p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-gray-50 py-8 sm:py-14 border-y border-gray-100">
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <h2 className="text-xl sm:text-3xl font-black text-sky-950 mb-4 sm:mb-6">VEJA QUEM JÁ VIU A MUDANÇA:</h2>
          <div className="flex gap-3 sm:gap-5 overflow-x-auto pb-3 sm:pb-5 snap-x snap-mandatory scrollbar-hide px-1">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <img key={i} src={`https://matematica.aprendizadodivertido01.com/imagens/PROVASOCIAL%20(${i}).webp`} alt={`Relato ${i}`} className="snap-center h-[360px] xs:h-[400px] sm:h-[480px] rounded-2xl shadow-sm shrink-0 border border-gray-200/70" />
            ))}
          </div>
          <p className="text-center font-bold mt-2 text-sky-700 text-xs sm:text-sm animate-pulse">👈 Arraste para o lado para ler os relatos →</p>
        </div>
      </section>

      {/* Extra Materials Section */}
      <section className="container mx-auto px-4 py-8 sm:py-14 bg-white text-sky-900 max-w-3xl">
        <h2 className="text-xl sm:text-3xl font-black mb-5 sm:mb-8 text-center">E NÃO PARA POR AÍ... TEM MAIS 5 BÔNUS!</h2>
        <div className="space-y-3 sm:space-y-3.5">
          {[
            { img: 'https://matematica.aprendizadodivertido01.com/imagens/probleminhas.webp', title: 'EXTRA 01: 100 PROBLEMINHAS', desc: 'Aprende a interpretar problemas reais e desenvolver raciocínio lógico brincando.' },
            { img: 'https://matematica.aprendizadodivertido01.com/imagens/tabuada.webp', title: 'EXTRA 02: TABUADA VISUAL', desc: 'Chega de decorar sem entender. Multiplicação de forma intuitiva e memorável.' },
            { img: 'https://matematica.aprendizadodivertido01.com/imagens/bonus1.webp', title: 'BÔNUS 01: MAPA DE PROGRESSO', desc: 'A criança visualiza cada conquista. Motivação contínua para avançar.' },
            { img: 'https://matematica.aprendizadodivertido01.com/imagens/bonus2.webp', title: 'BÔNUS 02: CARTÕES DE RECOMPENSA', desc: 'Reforce o esforço e pequenas metas com recompensas divertidas.' },
            { img: 'https://matematica.aprendizadodivertido01.com/imagens/bonus3.webp', title: 'BÔNUS 03: GUIA RÁPIDO PARA PAIS', desc: 'Orientações práticas para aplicar o material com leveza, sem atrito.' }
          ].map((item, i) => (
            <div key={i} className="bg-sky-50/80 p-3 sm:p-3.5 rounded-xl border border-sky-100 flex gap-3 sm:gap-4 items-center">
              <img src={item.img} alt={item.title} className="w-16 sm:w-20 rounded-lg shadow-sm shrink-0" />
              <div className="text-left flex-1 min-w-0">
                <h3 className="font-black text-sm sm:text-base leading-tight text-sky-950 mb-0.5">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-snug line-clamp-2">{item.desc}</p>
                <span className="text-emerald-700 font-extrabold text-[10px] sm:text-xs uppercase inline-block mt-1">GRÁTIS NO COMBO</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing / Offers: High Conversion Focus */}
      <section id="ofertas" className="container mx-auto px-4 py-10 sm:py-16 scroll-mt-6 max-w-4xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-sky-950 mb-2 sm:mb-3">
            O PREÇO DE UM LANCHE PARA MUDAR O FUTURO DELE.
          </h2>
          <p className="text-sm sm:text-lg font-bold text-red-600 animate-pulse">
            ⚠️ OFERTA LIMITADA: O DESCONTO EXPIRA EM BREVE!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-stretch max-w-3xl mx-auto">
          {/* Basic */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col justify-between order-2 md:order-1">
            <div>
              <img src="https://matematica.aprendizadodivertido01.com/imagens/produtoprincipal.webp" alt="Básico" className="rounded-xl mb-4 w-28 sm:w-32 mx-auto shadow-md border border-gray-100" />
              <h3 className="text-lg sm:text-xl font-black text-center mb-3 text-gray-900">PLANO BÁSICO</h3>
              <ul className="space-y-1.5 mb-5 text-gray-700 font-medium text-xs sm:text-sm">
                {['360 atividades (PDF)', '1º ao 5º ano', 'Visuais e intuitivas', 'Prontas para imprimir', 'Foco em resultados'].map(item => (
                  <li key={item} className="flex gap-2 items-center">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-center mb-4">
                <p className="text-xs sm:text-sm text-gray-400 line-through">de R$ 49,90</p>
                <p className="text-3xl sm:text-4xl font-black text-sky-900">R$ 29,90</p>
              </div>
              <button 
                onClick={() => setIsDiscountModalOpen(true)}
                className="w-full bg-slate-900 hover:bg-black text-white font-black text-sm sm:text-base py-3 px-4 rounded-xl active:scale-95 transition-all duration-200 cursor-pointer uppercase tracking-wider shadow-sm"
              >
                QUERO O BÁSICO
              </button>
            </div>
          </div>

          {/* Premium (Oferta Maior) */}
          <div 
            id="combo-completo" 
            className={`bg-sky-950 p-5 sm:p-6 rounded-2xl shadow-xl border-2 relative flex flex-col justify-between order-1 md:order-2 mt-3 md:mt-0 scroll-mt-14 sm:scroll-mt-20 transition-all duration-300 ${
              hasDiscountApplied ? 'border-emerald-400 ring-4 ring-emerald-400/30 shadow-emerald-500/20' : 'border-amber-400'
            }`}
          >
            <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-0.5 rounded-full font-black text-[11px] sm:text-xs uppercase tracking-wider shadow-md whitespace-nowrap ${
              hasDiscountApplied 
                ? 'bg-emerald-400 text-sky-950 animate-bounce' 
                : 'bg-amber-400 text-sky-950 animate-pulse'
            }`}>
              {hasDiscountApplied ? '🎉 10% OFF EXCLUSIVO APLICADO!' : '🔥 MAIS VENDIDO'}
            </div>
            <div>
              <img src="https://matematica.aprendizadodivertido01.com/imagens/mockup.webp" alt="Completo" className="rounded-xl mb-4 w-28 sm:w-32 mx-auto shadow-xl border border-sky-800" />
              <h3 className="text-lg sm:text-xl font-black text-center mb-1 text-white">COMBO COMPLETO</h3>
              <p className="text-center font-bold text-amber-300 mb-4 uppercase tracking-wide text-[11px] sm:text-xs">
                {hasDiscountApplied ? 'OFERTA VIP COM 10% DE DESCONTO' : 'MAIS CONTEÚDO, MAIS RESULTADO'}
              </p>
              <ul className="space-y-1.5 mb-5 text-white font-medium text-xs sm:text-sm">
                {['Tudo do Básico', '100 Probleminhas (Extra)', 'Tabuada Visual (Extra)', '🎁 Mapa de Progresso', '🎁 Cartões de Recompensa', '🎁 Guia Rápido Pais', 'Acesso Vitalício'].map(item => (
                  <li key={item} className="flex gap-2 items-center">
                    <CheckCircle2 className={`w-4 h-4 shrink-0 ${hasDiscountApplied ? 'text-emerald-400' : 'text-amber-400'}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-center mb-4 bg-white/10 p-3 sm:p-3.5 rounded-xl border border-white/10">
                {hasDiscountApplied ? (
                  <>
                    <div className="flex items-center justify-center gap-2">
                      <p className="text-xs text-sky-300 line-through">de R$ 79,90</p>
                      <p className="text-xs text-sky-300 line-through font-semibold">por R$ 37,90</p>
                    </div>
                    <p className="text-4xl sm:text-5xl font-black text-emerald-300">R$ 34,11</p>
                    <p className="text-[10px] sm:text-xs text-emerald-300 mt-0.5 font-bold uppercase tracking-wider">
                      ⚡ 10% de desconto ativado no PIX ou Cartão
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-xs text-sky-200 line-through">de R$ 79,90</p>
                    <p className="text-4xl sm:text-5xl font-black text-white">R$ 37,90</p>
                    <p className="text-[10px] sm:text-xs text-sky-300 mt-0.5 font-bold uppercase tracking-wider">pagamento único (economize mais de 50%)</p>
                  </>
                )}
              </div>
              <a 
                href={hasDiscountApplied ? CHECKOUT_DISCOUNT_URL : CHECKOUT_COMBO_URL}
                className={`w-full font-black text-base sm:text-lg py-3.5 px-5 rounded-xl shadow-md active:scale-95 transition-all duration-200 cursor-pointer uppercase tracking-wider flex items-center justify-center gap-2 text-center ${
                  hasDiscountApplied 
                    ? 'bg-gradient-to-r from-emerald-400 to-green-500 hover:from-emerald-300 hover:to-green-400 text-sky-950 shadow-emerald-400/30' 
                    : 'bg-amber-400 hover:bg-amber-300 text-sky-950 shadow-amber-400/30'
                }`}
              >
                <span>{hasDiscountApplied ? 'QUERO O COMBO POR R$ 34,11' : 'QUERO O COMBO COMPLETO'}</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>
              <p className="text-center text-sky-200 mt-2.5 text-[11px] sm:text-xs font-semibold">
                ✅ Compra 100% segura • Acesso imediato
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Professional 7-Day Guarantee Section */}
      <section className="bg-gradient-to-b from-sky-950 via-slate-900 to-sky-950 text-white py-8 sm:py-14 px-4 border-t border-sky-800/40 relative overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto max-w-3xl relative z-10">
          {/* Main Guarantee Card */}
          <div className="bg-gradient-to-br from-sky-900/60 to-slate-900/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-10 border-2 border-amber-400/40 shadow-[0_0_40px_rgba(2,132,199,0.2)] text-center">
            
            {/* Seal / Badge */}
            <div className="relative inline-block mb-4 sm:mb-6">
              <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full bg-gradient-to-tr from-amber-500 via-amber-300 to-amber-500 p-1.5 shadow-[0_0_30px_rgba(245,158,11,0.35)] flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-sky-950 flex flex-col items-center justify-center border-2 border-amber-300/40 text-center p-2">
                  <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 text-amber-400 mb-0.5" />
                  <span className="text-xl sm:text-2xl font-black text-amber-400 leading-none">7 DIAS</span>
                  <span className="text-[9px] sm:text-[10px] font-bold text-amber-200 tracking-wider uppercase mt-0.5">GARANTIA</span>
                </div>
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-amber-400 text-sky-950 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider whitespace-nowrap shadow-md">
                100% INCONDICIONAL
              </div>
            </div>

            {/* Headline & Subhead */}
            <h2 className="text-xl sm:text-3xl md:text-4xl font-black text-white mb-2 sm:mb-3 leading-tight px-1">
              VOCÊ TEM <span className="text-amber-400 underline decoration-amber-400/60 decoration-2 sm:decoration-4">7 DIAS DE TESTE</span> COM RISCO ZERO
            </h2>
            <p className="text-xs sm:text-base text-sky-100 max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed px-1">
              O risco é <strong className="text-white font-black">100% meu</strong>, não seu. Se o seu filho não se interessar ou você achar que o material não facilitou a rotina, devolvemos seu dinheiro sem complicações.
            </p>

            {/* 3 Step Reassurance Grid */}
            <div className="grid sm:grid-cols-3 gap-3 sm:gap-4 text-left mb-6 sm:mb-8">
              <div className="bg-sky-950/70 p-4 rounded-xl border border-sky-800/60 flex flex-col justify-start">
                <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-300 flex items-center justify-center font-black text-sm mb-2 border border-sky-400/30">
                  1
                </div>
                <h3 className="font-black text-white text-sm mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  Baixe e Teste Hoje
                </h3>
                <p className="text-xs text-sky-200/80 leading-relaxed">
                  Acesse no e-mail, imprima as primeiras páginas e dê para seu filho brincar e resolver.
                </p>
              </div>

              <div className="bg-sky-950/70 p-4 rounded-xl border border-sky-800/60 flex flex-col justify-start">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center font-black text-sm mb-2 border border-amber-400/30">
                  2
                </div>
                <h3 className="font-black text-white text-sm mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  Sinta a Diferença
                </h3>
                <p className="text-xs text-sky-200/80 leading-relaxed">
                  Veja a resistência diminuir e a curiosidade dele despertar com os desafios lúdicos.
                </p>
              </div>

              <div className="bg-sky-950/70 p-4 rounded-xl border border-sky-800/60 flex flex-col justify-start">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-black text-sm mb-2 border border-emerald-400/30">
                  3
                </div>
                <h3 className="font-black text-white text-sm mb-1 flex items-center gap-1.5">
                  <RotateCcw className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  Reembolso em 1 Clique
                </h3>
                <p className="text-xs text-sky-200/80 leading-relaxed">
                  Se não gostar por qualquer razão, solicite o reembolso. Sem burocracia nem perguntas.
                </p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 border-t border-sky-800/60 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[11px] sm:text-xs text-sky-200/90 font-medium">
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-amber-400" /> Transação Criptografada
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Código de Defesa do Consumidor
              </span>
              <span className="flex items-center gap-1">
                <BadgeCheck className="w-3.5 h-3.5 text-sky-400" /> Satisfação Garantida
              </span>
            </div>

            {/* CTA Button inside the Guarantee fold */}
            <div className="mt-5 pt-4 border-t border-sky-800/60">
              <a 
                href={CHECKOUT_COMBO_URL}
                className="w-full max-w-xs sm:max-w-sm mx-auto bg-amber-400 hover:bg-amber-300 text-sky-950 font-black text-base sm:text-lg py-3.5 px-5 rounded-xl shadow-md shadow-amber-400/30 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider text-center"
              >
                <span>QUERO AGORA</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>
              <p className="text-[11px] sm:text-xs text-sky-200/80 mt-2 font-medium text-center">
                ⚡ Acesso imediato no e-mail • Garantia total de 7 dias
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-sky-950 text-white py-8 sm:py-14 px-4 border-t border-sky-900/40">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-xl sm:text-3xl font-black mb-5 sm:mb-8 text-center text-white">DÚVIDAS FREQUENTES</h2>
          <div className="space-y-3 text-left text-sky-950">
            {[
              { q: 'Como recebo o material?', a: 'O acesso é enviado automaticamente para o seu e-mail logo após a confirmação do pagamento.' },
              { q: 'O material é físico?', a: 'Não, o material é digital em formato PDF para você baixar e imprimir quando e como quiser.' },
              { q: 'Para quais idades é indicado?', a: 'O conteúdo foi planejado para crianças que estão cursando do 1º ao 5º ano do ensino fundamental.' },
              { q: 'Posso pedir reembolso?', a: 'Sim, você tem 7 dias de garantia para avaliar o material e, se não gostar, solicitar o reembolso.' }
            ].map((faq, i) => (
              <details key={i} className="bg-white p-4 sm:p-5 rounded-xl border border-sky-800 shadow-md group">
                <summary className="font-black text-sm sm:text-base cursor-pointer list-none flex justify-between items-center text-sky-950">
                  <span className="pr-2">{faq.q}</span>
                  <span className="text-sky-600 font-bold text-xl group-open:rotate-45 transition-transform duration-200 shrink-0">+</span>
                </summary>
                <p className="text-gray-700 mt-2.5 text-xs sm:text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-500 text-[11px] sm:text-xs mt-4 sm:mt-8 border-t border-gray-100">
        <p className="mb-2 font-bold">Copyright © 2026 | Todos os direitos reservados.</p>
        <p className="max-w-3xl mx-auto leading-relaxed">Material educacional independente. Este site não é afiliado ou endossado pelo Facebook™, Instagram™, Google™, Mojang Synergies AB ou Microsoft™. As referências estéticas são utilizadas exclusivamente para fins de engajamento pedagógico. O material é um recurso complementar e não substitui o acompanhamento escolar ou profissional quando necessário.</p>
      </footer>
    </div>
  );
}
