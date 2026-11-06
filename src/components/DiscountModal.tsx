import { useEffect, useState } from 'react';
import { X, Gift, CheckCircle2, ArrowRight, Sparkles, Clock, ShieldCheck } from 'lucide-react';

interface DiscountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAcceptDiscount?: () => void;
  onProceedBasic?: () => void;
  discountCheckoutUrl?: string;
  basicCheckoutUrl?: string;
}

export function DiscountModal({
  isOpen,
  onClose,
  onAcceptDiscount,
  onProceedBasic,
  discountCheckoutUrl = 'https://checkout.criadorhub.shop/VCCL1O8SDA3I',
  basicCheckoutUrl = 'https://checkout.criadorhub.shop/VCCL1O8SDA3H'
}: DiscountModalProps) {
  // Mini timer regressivo para aumentar o senso de urgência (05:00)
  const [secondsLeft, setSecondsLeft] = useState(300);

  useEffect(() => {
    if (!isOpen) {
      setSecondsLeft(300);
      return;
    }

    // Travar scroll da página de fundo quando modal estiver aberto
    document.body.style.overflow = 'hidden';

    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => {
      document.body.style.overflow = 'unset';
      clearInterval(timer);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-sky-950/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border-2 border-amber-400 overflow-hidden z-10 my-auto animate-in zoom-in-95 duration-200">
        {/* Faixa superior de atenção */}
        <div className="bg-gradient-to-r from-red-600 via-amber-500 to-red-600 py-2 sm:py-2.5 px-4 text-center text-white relative">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-black uppercase tracking-wider">
            <span>🛑 ESPERE! NÃO VÁ EMBORA AINDA...</span>
          </div>
          <button
            onClick={onClose}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/90 hover:text-white bg-black/20 hover:bg-black/30 p-1.5 rounded-full transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-4 sm:p-6 text-center">
          {/* Badge de desconto */}
          <div className="inline-flex items-center gap-1.5 bg-amber-100 border border-amber-300 text-amber-900 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wide mb-2.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Condição Exclusiva Liberada</span>
          </div>

          {/* Chamada Principal */}
          <h3 className="text-xl sm:text-2xl font-black text-sky-950 leading-tight mb-2">
            Nós vamos liberar um desconto para você aproveitar o <span className="text-emerald-600">PACOTE COMPLETO</span>!
          </h3>

          <p className="text-xs sm:text-sm text-gray-600 font-medium mb-4 max-w-md mx-auto">
            Por uma diferença de apenas <strong className="text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">R$ 4,21</strong>, leve todas as <strong className="text-gray-900">360 atividades</strong> + <strong className="text-gray-900">TODOS os 5 Bônus Exclusivos</strong>.
          </p>

          {/* Card de Preço Promocional */}
          <div className="bg-gradient-to-b from-sky-950 to-sky-900 text-white rounded-2xl p-4 sm:p-5 mb-4 border border-sky-800 shadow-inner relative overflow-hidden">
            {/* Tag 10% OFF */}
            <div className="absolute top-2.5 right-2.5 bg-emerald-500 text-white font-black text-[10px] sm:text-xs px-2.5 py-1 rounded-lg uppercase tracking-wider shadow-md">
              10% DE DESCONTO
            </div>

            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2">
              <img 
                src="https://matematica.aprendizadodivertido01.com/imagens/mockup.webp" 
                alt="Combo Completo" 
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-lg border border-white/20 shadow-md bg-white/5"
              />
              <div className="text-left">
                <p className="text-[11px] sm:text-xs font-semibold text-sky-300 uppercase">Combo Completo VIP</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-xs sm:text-sm text-sky-300/80 line-through">De R$ 37,90</span>
                  <span className="text-xs font-black text-emerald-400">(-10%)</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-xs sm:text-sm font-bold text-amber-300">Por apenas</span>
                  <span className="text-3xl sm:text-4xl font-black text-white text-emerald-300">R$ 34,11</span>
                </div>
                <p className="text-[10px] text-sky-200 font-medium mt-0.5">Pagamento único no PIX ou Cartão</p>
              </div>
            </div>

            {/* Benefícios rápidos */}
            <div className="grid grid-cols-2 gap-1.5 pt-3 border-t border-sky-800/80 text-[11px] sm:text-xs text-left text-sky-100 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>360 Atividades (1º ao 5º ano)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>100 Probleminhas Extras</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Tabuada Visual Lúdica</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Mapa + Cartões + Guia dos Pais</span>
              </div>
            </div>

            {/* Contador de urgência */}
            <div className="mt-3 inline-flex items-center justify-center gap-1.5 text-[11px] font-bold text-amber-300 bg-black/30 px-3 py-1 rounded-full">
              <Clock className="w-3.5 h-3.5 animate-pulse" />
              <span>Esta condição expira em: <span className="font-mono font-black text-white">{formattedTime}</span></span>
            </div>
          </div>

          {/* Os 2 Botões Solicitados */}
          <div className="space-y-2.5">
            {/* Botão 1: Quero aproveitar o desconto */}
            <a
              href={discountCheckoutUrl}
              onClick={onAcceptDiscount}
              className="w-full group bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-400 hover:to-green-500 text-white font-black text-base sm:text-lg py-3.5 px-4 rounded-2xl shadow-[0_8px_20px_rgba(16,185,129,0.35)] border-b-4 border-emerald-700 active:border-b-0 active:translate-y-1 transition-all duration-150 cursor-pointer flex items-center justify-center gap-2 text-center"
            >
              <Gift className="w-5 h-5 text-amber-300 group-hover:rotate-12 transition-transform shrink-0" />
              <span>QUERO APROVEITAR O DESCONTO (R$ 34,11)</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
            </a>

            {/* Botão 2: Quero o plano básico mesmo */}
            <a
              href={basicCheckoutUrl}
              onClick={onProceedBasic}
              className="w-full block text-xs sm:text-sm text-gray-500 hover:text-gray-800 font-semibold py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer border border-transparent hover:border-gray-200 text-center"
            >
              Não, quero o plano básico mesmo por R$ 29,90
            </a>
          </div>

          {/* Garantia sutil */}
          <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-gray-500 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Garantia incondicional de 7 dias com reembolso total</span>
          </div>
        </div>
      </div>
    </div>
  );
}
