import { useState, useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface PurchaseEvent {
  name: string;
  city: string;
  state: string;
  plan: string;
  timeAgo: string;
}

const PURCHASES: PurchaseEvent[] = [
  { name: 'Lucas Silva', city: 'São Paulo', state: 'SP', plan: 'Combo Completo', timeAgo: 'há 35 segundos' },
  { name: 'Maria Eduarda Santos', city: 'Belo Horizonte', state: 'MG', plan: 'Combo Completo', timeAgo: 'há 1 minuto' },
  { name: 'Gabriel Oliveira', city: 'Curitiba', state: 'PR', plan: 'Combo Completo', timeAgo: 'há 20 segundos' },
  { name: 'Ana Clara Souza', city: 'Rio de Janeiro', state: 'RJ', plan: 'Combo Completo', timeAgo: 'há 2 minutos' },
  { name: 'Matheus Costa', city: 'Porto Alegre', state: 'RS', plan: 'Combo Completo', timeAgo: 'há 15 segundos' },
  { name: 'Camila Ferreira', city: 'Campinas', state: 'SP', plan: 'Combo Completo', timeAgo: 'há 3 minutos' },
  { name: 'João Pedro Lima', city: 'Goiânia', state: 'GO', plan: 'Combo Completo', timeAgo: 'há 50 segundos' },
  { name: 'Juliana Barbosa', city: 'Salvador', state: 'BA', plan: 'Combo Completo', timeAgo: 'há 1 minuto' },
  { name: 'Felipe Rodrigues', city: 'Fortaleza', state: 'CE', plan: 'Combo Completo', timeAgo: 'há 2 minutos' },
  { name: 'Beatriz Almeida', city: 'Florianópolis', state: 'SC', plan: 'Combo Completo', timeAgo: 'há 40 segundos' },
  { name: 'Rafael Pereira', city: 'Brasília', state: 'DF', plan: 'Combo Completo', timeAgo: 'há 1 minuto' },
  { name: 'Mariana Carvalho', city: 'Vitória', state: 'ES', plan: 'Combo Completo', timeAgo: 'há 25 segundos' },
  { name: 'Gustavo Ribeiro', city: 'Joinville', state: 'SC', plan: 'Combo Completo', timeAgo: 'há 3 minutos' },
  { name: 'Larissa Martins', city: 'Santos', state: 'SP', plan: 'Combo Completo', timeAgo: 'há 1 minuto' },
  { name: 'Thiago Rocha', city: 'Londrina', state: 'PR', plan: 'Combo Completo', timeAgo: 'há 2 minutos' },
  { name: 'Bruna Gomes', city: 'Niterói', state: 'RJ', plan: 'Combo Completo', timeAgo: 'há 30 segundos' },
  { name: 'Bruno Alves', city: 'Ribeirão Preto', state: 'SP', plan: 'Combo Completo', timeAgo: 'há 1 minuto' },
  { name: 'Fernanda Dias', city: 'Manaus', state: 'AM', plan: 'Combo Completo', timeAgo: 'há 4 minutos' },
  { name: 'Carlos Eduardo Ramos', city: 'Sorocaba', state: 'SP', plan: 'Combo Completo', timeAgo: 'há 45 segundos' },
  { name: 'Aline Castro', city: 'Recife', state: 'PE', plan: 'Combo Completo', timeAgo: 'há 15 segundos' },
  { name: 'Leonardo Moreira', city: 'São José dos Campos', state: 'SP', plan: 'Combo Completo', timeAgo: 'há 1 minuto' },
  { name: 'Letícia Cardoso', city: 'Campo Grande', state: 'MS', plan: 'Combo Completo', timeAgo: 'há 2 minutos' },
];

export function SalesToast() {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout>;
    let nextTimer: ReturnType<typeof setTimeout>;

    // Show next notification
    const triggerNext = () => {
      // Pick next index, avoiding the same immediate one
      setCurrentIdx((prev) => {
        let next = Math.floor(Math.random() * PURCHASES.length);
        if (next === prev) next = (prev + 1) % PURCHASES.length;
        return next;
      });
      setIsVisible(true);

      // Keep visible for 3.8 seconds
      hideTimer = setTimeout(() => {
        setIsVisible(false);

        // Wait between 5 and 10 seconds before showing the next one
        const delayBetween = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000;
        nextTimer = setTimeout(triggerNext, delayBetween);
      }, 3800);
    };

    // Initial popup delay: appears smoothly 3.5 seconds after page loads
    const initialDelay = setTimeout(triggerNext, 3500);

    return () => {
      clearTimeout(initialDelay);
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
    };
  }, []);

  const current = PURCHASES[currentIdx];

  const handleDismiss = () => {
    setIsVisible(false);
  };

  return (
    <div
      aria-live="polite"
      className={`fixed top-2.5 sm:top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out pointer-events-none ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 -translate-y-4 scale-95'
      }`}
    >
      <div className="pointer-events-auto bg-white/95 backdrop-blur-md text-gray-900 border border-emerald-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.15)] rounded-full pl-2 pr-3 py-1.5 flex items-center gap-2.5 max-w-[340px] sm:max-w-sm">
        {/* Verified icon bubble */}
        <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs">
          <CheckCircle2 className="w-4 h-4 text-white" />
        </div>

        {/* Content - Clickable to go to the larger offer */}
        <div 
          onClick={() => {
            document.getElementById('combo-completo')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          className="text-left flex-1 min-w-0 pr-1 cursor-pointer select-none"
          title="Ver Combo Completo"
        >
          <p className="text-[11px] sm:text-xs font-black text-gray-900 truncate leading-tight">
            {current.name}{' '}
            <span className="font-semibold text-gray-500 text-[10px] sm:text-[11px]">
              • {current.city}/{current.state}
            </span>
          </p>
          <p className="text-[10px] sm:text-[11px] text-emerald-700 font-bold leading-tight truncate">
            Comprou o <span className="font-extrabold">{current.plan}</span>
          </p>
        </div>

        {/* Dismiss button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleDismiss();
          }}
          aria-label="Fechar notificação"
          className="text-gray-400 hover:text-gray-600 p-0.5 rounded-full hover:bg-gray-100 transition-colors shrink-0 cursor-pointer"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
