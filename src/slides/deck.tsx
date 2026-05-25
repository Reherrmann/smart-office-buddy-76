import type { ComponentType, ReactNode } from "react";
import logoUrl from "@/assets/pluri-logo.jpg";

function Logo({ size = 36 }: { size?: number }) {
  return (
    <img
      src={logoUrl}
      alt="PLURI"
      width={size}
      height={size}
      className="rounded-lg object-cover shrink-0"
      style={{ width: size, height: size }}
    />
  );
}

/* ---------- shared layout primitives ---------- */

function Orbs() {
  return (
    <>
      <div className="glow-orb" style={{ width: 700, height: 700, top: -200, left: -200, background: "oklch(0.35 0.1 250)" }} />
      <div className="glow-orb" style={{ width: 800, height: 800, bottom: -300, right: -200, background: "oklch(0.82 0.15 85)", opacity: 0.25 }} />
    </>
  );
}

function PageFrame({ children, num, title }: { children: ReactNode; num: number; title?: string }) {
  return (
    <div className="absolute inset-0 px-32 py-24 flex flex-col">
      <Orbs />
      <header className="relative flex items-center justify-between mb-12">
        <div className="flex items-center gap-3">
          <Logo size={40} />
          <span className="slide-chrome tracking-[0.3em] font-semibold">PLURI</span>
        </div>
        {title && <span className="slide-kicker text-muted-foreground">{title}</span>}
        <span className="slide-page text-muted-foreground">{String(num).padStart(2, "0")}</span>
      </header>
      <div className="relative flex-1 flex flex-col">{children}</div>
    </div>
  );
}

function Check() {
  return (
    <span className="inline-flex shrink-0 items-center justify-center h-12 w-12 rounded-full mt-1"
      style={{ background: "oklch(0.82 0.15 85 / 0.18)", color: "oklch(0.88 0.16 90)" }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
    </span>
  );
}

function Dot() {
  return (
    <span className="inline-block h-3 w-3 rounded-full mt-5 shrink-0" style={{ background: "oklch(0.82 0.15 85)" }} />
  );
}

/* ---------- slides ---------- */

const S01_Cover: ComponentType = () => (
  <div className="absolute inset-0 flex flex-col justify-between px-32 py-24">
    <Orbs />
    <div className="relative flex items-center gap-3">
      <Logo size={48} />
      <span className="slide-chrome tracking-[0.3em] font-semibold">PLURI</span>
    </div>
    <div className="relative">
      <p className="slide-kicker grad-text mb-8">Apresentação · 2026</p>
      <h1 className="slide-title-lg mb-8">
        Automação <span className="grad-text">inteligente</span><br />para o escritório
      </h1>
      <p className="slide-subtitle text-muted-foreground max-w-[1400px]">
        Inteligência Artificial aplicada ao fluxo interno — atendimento, organização e gestão de informações.
      </p>
    </div>
    <div className="relative flex items-end justify-between">
      <div>
        <p className="slide-caption text-muted-foreground mb-2">Apresentado por</p>
        <p className="slide-body-lg font-semibold">Renan Herrmann</p>
        <p className="slide-caption text-muted-foreground">PLURI — Estratégia, Automação e IA</p>
      </div>
      <div className="slide-caption text-muted-foreground">Pressione → para avançar</div>
    </div>
  </div>
);

const S02_Objetivo: ComponentType = () => (
  <PageFrame num={2} title="Objetivo">
    <h2 className="slide-title mb-8">Não é sobre <span className="grad-text">substituir</span> pessoas.</h2>
    <p className="slide-body-lg text-muted-foreground mb-12 max-w-[1400px]">É sobre liberar o time do operacional repetitivo para focar no que realmente importa.</p>
    <div className="grid grid-cols-2 gap-x-16 gap-y-6 max-w-[1500px]">
      {[
        "Reduzir tarefas repetitivas",
        "Organizar informações automaticamente",
        "Acelerar processos internos",
        "Melhorar o acompanhamento de demandas",
        "Diminuir perda de informações",
        "Centralizar dados importantes",
        "Apoiar o time no dia a dia",
        "Já em uso prático, com resultados reais",
      ].map((t) => (
        <div key={t} className="flex items-start gap-5"><Check /><span className="slide-body">{t}</span></div>
      ))}
    </div>
  </PageFrame>
);

const S03_Cenario: ComponentType = () => (
  <PageFrame num={3} title="O cenário atual">
    <h2 className="slide-title mb-16">Muito tempo perdido em <span className="grad-text">processos manuais</span>.</h2>
    <div className="grid grid-cols-2 gap-16 flex-1">
      <div className="slide-card p-12">
        <p className="slide-kicker text-muted-foreground mb-6">Dependências de hoje</p>
        <ul className="space-y-4">
          {["Mensagens espalhadas","Informações manuais","Acompanhamento individual","Retrabalho","Atualização manual de planilhas","Consultas repetitivas","Falta de centralização"].map((t) => (
            <li key={t} className="flex items-start gap-4 slide-body"><Dot />{t}</li>
          ))}
        </ul>
      </div>
      <div className="slide-card p-12" style={{ background: "oklch(0.6 0.18 25 / 0.08)", borderColor: "oklch(0.6 0.18 25 / 0.25)" }}>
        <p className="slide-kicker mb-6" style={{ color: "oklch(0.75 0.18 25)" }}>O que isso gera</p>
        <ul className="space-y-4">
          {["Perda de tempo","Demora operacional","Dificuldade de acompanhamento","Risco de esquecer informações","Excesso de tarefas operacionais"].map((t) => (
            <li key={t} className="flex items-start gap-4 slide-body"><Dot />{t}</li>
          ))}
        </ul>
      </div>
    </div>
  </PageFrame>
);

const S04_Proposta: ComponentType = () => (
  <PageFrame num={4} title="A proposta">
    <h2 className="slide-title mb-6">Um fluxo inteligente <span className="grad-text">integrado com IA</span>.</h2>
    <p className="slide-body-lg text-muted-foreground mb-12">Pensado para apoiar o time, não para competir com ele.</p>
    <div className="grid grid-cols-2 gap-x-16 gap-y-6 max-w-[1500px]">
      {[
        "Organização automática de informações",
        "Registro automático de atendimentos",
        "Atualização integrada de planilhas",
        "Resumos automáticos de conversas",
        "Centralização de dados",
        "Apoio operacional inteligente",
        "Personalização por necessidade",
        "Pronto para escalar no futuro",
      ].map((t) => (
        <div key={t} className="flex items-start gap-5"><Check /><span className="slide-body">{t}</span></div>
      ))}
    </div>
  </PageFrame>
);

const S05_Fluxo: ComponentType = () => {
  const steps = [
    "Cliente / Solicitação",
    "Atendimento automatizado",
    "IA interpreta informações",
    "Dados organizados automaticamente",
    "Atualização de planilhas e registros",
    "Resumo automático do atendimento",
    "Equipe acompanha tudo centralizado",
  ];
  return (
    <PageFrame num={5} title="Como funciona">
      <h2 className="slide-title mb-16">Fluxo, do <span className="grad-text">início ao fim</span>.</h2>
      <div className="flex-1 flex flex-col justify-center gap-4">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-6">
            <div className="h-16 w-16 rounded-2xl flex items-center justify-center slide-body font-bold shrink-0"
              style={{ background: `linear-gradient(135deg, oklch(0.78 0.18 155 / ${0.2 + i * 0.08}), oklch(0.7 0.2 195 / ${0.2 + i * 0.08}))`, border: "1px solid oklch(1 0 0 / 0.15)" }}>
              {i + 1}
            </div>
            <div className="slide-body-lg font-medium">{s}</div>
            {i < steps.length - 1 && <div className="ml-auto text-muted-foreground slide-caption">↓</div>}
          </div>
        ))}
      </div>
    </PageFrame>
  );
};

const S06_Diferencial: ComponentType = () => (
  <PageFrame num={6} title="O diferencial">
    <h2 className="slide-title mb-6">Não é apenas um <span className="grad-text">chatbot</span>.</h2>
    <p className="slide-body-lg text-muted-foreground mb-12 max-w-[1500px]">É uma estrutura inteligente de apoio operacional — pensada para o dia a dia real do escritório.</p>
    <div className="grid grid-cols-3 gap-6 flex-1 max-h-[500px]">
      {[
        ["Interpretar","Mensagens e contexto"],
        ["Organizar","Informações automaticamente"],
        ["Atualizar","Registros e planilhas"],
        ["Resumir","Atendimentos completos"],
        ["Identificar","Demandas relevantes"],
        ["Centralizar","Histórico unificado"],
      ].map(([t, d]) => (
        <div key={t} className="slide-card p-10 flex flex-col justify-center">
          <p className="slide-subtitle grad-text mb-3 font-bold">{t}</p>
          <p className="slide-body text-muted-foreground">{d}</p>
        </div>
      ))}
    </div>
  </PageFrame>
);

const S07_Exemplos: ComponentType = () => {
  const cols: [string, string[]][] = [
    ["Atendimento", ["Respostas iniciais","Direcionamento automático","Coleta de informações","Registro automático"]],
    ["Organização interna", ["Atualização de planilhas","Criação de históricos","Acompanhamento de solicitações","Centralização de dados"]],
    ["Inteligência operacional", ["Resumos automáticos","Classificação de demandas","Apoio ao acompanhamento","Informação estratégica"]],
  ];
  return (
    <PageFrame num={7} title="O que pode ser automatizado">
      <h2 className="slide-title mb-16">Exemplos <span className="grad-text">práticos</span>.</h2>
      <div className="grid grid-cols-3 gap-8 flex-1">
        {cols.map(([title, items]) => (
          <div key={title} className="slide-card p-10 flex flex-col">
            <p className="slide-subtitle font-bold mb-8">{title}</p>
            <ul className="space-y-4">
              {items.map((i) => (<li key={i} className="flex items-start gap-4 slide-body"><Dot /><span>{i}</span></li>))}
            </ul>
          </div>
        ))}
      </div>
    </PageFrame>
  );
};

const S08_Integracoes: ComponentType = () => (
  <PageFrame num={8} title="Integrações">
    <h2 className="slide-title mb-6">Conecta com o que você <span className="grad-text">já usa</span>.</h2>
    <p className="slide-body-lg text-muted-foreground mb-12">Tudo personalizável conforme a necessidade do escritório.</p>
    <div className="grid grid-cols-3 gap-6 flex-1 max-h-[520px]">
      {["WhatsApp","Google Sheets","Google Drive","E-mail","CRM","Agenda","Sistemas internos","Banco de dados","APIs externas"].map((t) => (
        <div key={t} className="slide-card flex items-center justify-center slide-subtitle font-semibold">{t}</div>
      ))}
    </div>
  </PageFrame>
);

const S09_Beneficios: ComponentType = () => {
  const items = [
    ["+ Produtividade","Redução de tarefas operacionais repetitivas."],
    ["+ Organização","Informações centralizadas e registradas automaticamente."],
    ["+ Velocidade","Processos internos muito mais rápidos."],
    ["+ Controle","Acompanhamento melhor das demandas."],
    ["+ Escalabilidade","Estrutura preparada para o crescimento futuro."],
  ];
  return (
    <PageFrame num={9} title="Benefícios diretos">
      <h2 className="slide-title mb-16">Cinco ganhos <span className="grad-text">imediatos</span>.</h2>
      <div className="grid grid-cols-5 gap-5 flex-1 max-h-[520px]">
        {items.map(([t, d]) => (
          <div key={t} className="slide-card p-8 flex flex-col justify-center">
            <p className="slide-subtitle grad-text font-bold mb-4">{t}</p>
            <p className="slide-caption text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </PageFrame>
  );
};

const S10_Pratica: ComponentType = () => (
  <PageFrame num={10} title="Já na prática">
    <h2 className="slide-title mb-6">Resultados <span className="grad-text">reais</span> em uso.</h2>
    <p className="slide-body-lg text-muted-foreground mb-12 max-w-[1500px]">Mesmo em ajustes e melhorias contínuas, o fluxo já vem ajudando muito no dia a dia.</p>
    <div className="grid grid-cols-2 gap-x-16 gap-y-6 max-w-[1500px]">
      {["Ganho de tempo","Organização melhor das informações","Facilidade no acompanhamento","Redução de retrabalho","Mais clareza operacional","Apoio direto nas atividades"].map((t) => (
        <div key={t} className="flex items-start gap-5"><Check /><span className="slide-body">{t}</span></div>
      ))}
    </div>
  </PageFrame>
);

const S11_Personalizavel: ComponentType = () => (
  <PageFrame num={11} title="Inteligente e personalizável">
    <h2 className="slide-title mb-12">Feito sob medida. <span className="grad-text">Evolui com você</span>.</h2>
    <div className="grid grid-cols-2 gap-16 flex-1">
      <div>
        <p className="slide-kicker text-muted-foreground mb-6">Adaptável a</p>
        <ul className="space-y-4">
          {["Necessidade do escritório","Áreas específicas","Equipes diferentes","Tipos de atendimento","Fluxos internos","Crescimento futuro"].map((t) => (
            <li key={t} className="flex items-start gap-4 slide-body"><Dot />{t}</li>
          ))}
        </ul>
      </div>
      <div className="slide-card p-12">
        <p className="slide-kicker grad-text mb-6">Sempre evoluindo</p>
        <ul className="space-y-5">
          {["Pode mudar de identidade","Pode adaptar a linguagem","Pode criar novos fluxos","Pode integrar novos sistemas","Pode evoluir continuamente"].map((t) => (
            <li key={t} className="flex items-start gap-4 slide-body"><Check />{t}</li>
          ))}
        </ul>
      </div>
    </div>
  </PageFrame>
);

const S12_Seguranca: ComponentType = () => (
  <PageFrame num={12} title="Segurança e acompanhamento">
    <h2 className="slide-title mb-8">Com <span className="grad-text">supervisão humana</span>, sempre.</h2>
    <p className="slide-body-lg text-muted-foreground mb-16 max-w-[1500px]">Toda implementação é acompanhada e ajustada conforme a necessidade. A IA atua como suporte inteligente.</p>
    <div className="grid grid-cols-4 gap-6 flex-1 max-h-[400px]">
      {[["Estrutura","organizada"],["Supervisão","humana"],["Melhorias","contínuas"],["Foco","operacional"]].map(([a,b]) => (
        <div key={a} className="slide-card p-10 flex flex-col justify-center text-center">
          <p className="slide-subtitle grad-text font-bold">{a}</p>
          <p className="slide-body text-muted-foreground mt-2">{b}</p>
        </div>
      ))}
    </div>
  </PageFrame>
);

const S13_Proximos: ComponentType = () => (
  <PageFrame num={13} title="Próximos passos">
    <h2 className="slide-title mb-16">Do <span className="grad-text">mapeamento</span> à expansão.</h2>
    <div className="grid grid-cols-5 gap-4 flex-1 max-h-[520px]">
      {[
        ["01","Mapear","Processos que mais consomem tempo"],
        ["02","Identificar","Pontos de automação"],
        ["03","Implementar","Fluxo piloto"],
        ["04","Acompanhar","Resultados e ajustes"],
        ["05","Expandir","Para outras áreas"],
      ].map(([n, t, d]) => (
        <div key={n} className="slide-card p-8 flex flex-col">
          <p className="slide-title font-bold grad-text mb-4">{n}</p>
          <p className="slide-subtitle font-semibold mb-3">{t}</p>
          <p className="slide-caption text-muted-foreground">{d}</p>
        </div>
      ))}
    </div>
  </PageFrame>
);

const S14_Futuro: ComponentType = () => (
  <PageFrame num={14} title="Possibilidades futuras">
    <h2 className="slide-title mb-16">Para onde isso pode <span className="grad-text">evoluir</span>.</h2>
    <div className="grid grid-cols-4 gap-6 flex-1 max-h-[560px]">
      {["Dashboards inteligentes","Análise de produtividade","CRM automatizado","Relatórios automáticos","Acompanhamento de processos","Central inteligente de atendimento","Gestão integrada","Automações avançadas"].map((t) => (
        <div key={t} className="slide-card p-8 flex items-center justify-center text-center slide-body-lg font-medium">{t}</div>
      ))}
    </div>
  </PageFrame>
);

const S15_Final: ComponentType = () => (
  <PageFrame num={15} title="Considerações finais">
    <h2 className="slide-title mb-10">A automação <span className="grad-text">amplifica</span> o trabalho humano.</h2>
    <p className="slide-body-lg text-muted-foreground mb-12 max-w-[1500px]">Ela reduz o repetitivo e libera a equipe para focar no que realmente importa.</p>
    <div className="grid grid-cols-5 gap-5 flex-1 max-h-[400px]">
      {["Organização","Produtividade","Inteligência operacional","Otimização de processos","Apoio estratégico"].map((t) => (
        <div key={t} className="slide-card p-8 flex items-center justify-center text-center slide-body font-semibold">{t}</div>
      ))}
    </div>
  </PageFrame>
);

const S16_Obrigado: ComponentType = () => (
  <div className="absolute inset-0 flex flex-col items-center justify-center px-32 text-center">
    <Orbs />
    <p className="slide-kicker grad-text mb-8 relative">Encerramento</p>
    <h1 className="slide-title-lg mb-12 relative">Obrigado.</h1>
    <div className="h-px w-48 mb-12 relative" style={{ background: "linear-gradient(90deg, transparent, oklch(0.7 0.18 175), transparent)" }} />
    <p className="slide-subtitle font-semibold relative">Renan Herrmann</p>
    <p className="slide-body text-muted-foreground mt-3 relative">PLURI — Estratégia, Automação e Inteligência Artificial</p>
  </div>
);

export const slides: ComponentType[] = [
  S01_Cover, S02_Objetivo, S03_Cenario, S04_Proposta, S05_Fluxo,
  S06_Diferencial, S07_Exemplos, S08_Integracoes, S09_Beneficios, S10_Pratica,
  S11_Personalizavel, S12_Seguranca, S13_Proximos, S14_Futuro, S15_Final, S16_Obrigado,
];