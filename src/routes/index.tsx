import { createFileRoute } from "@tanstack/react-router";
import logoUrl from "@/assets/pluri-logo.jpg";
import { Check, ArrowRight, Sparkles, Workflow, ShieldCheck, Zap, Layers, Target } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PLURI — Automação Inteligente para o Escritório" },
      { name: "description", content: "Apresentação sobre Inteligência Artificial aplicada ao fluxo interno — por Renan Herrmann, PLURI." },
    ],
  }),
  component: LandingPage,
});

function Logo({ size = 36 }: { size?: number }) {
  return (
    <img src={logoUrl} alt="PLURI" width={size} height={size}
      className="rounded-lg object-cover shrink-0" style={{ width: size, height: size }} />
  );
}

function Orbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[120px] opacity-40"
        style={{ background: "oklch(0.35 0.1 250)" }} />
      <div className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full blur-[120px] opacity-25"
        style={{ background: "oklch(0.82 0.15 85)" }} />
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-[0.2em] uppercase">
      {children}
    </span>
  );
}

function SectionHeader({ kicker, title, subtitle }: { kicker: string; title: React.ReactNode; subtitle?: string }) {
  return (
    <div className="max-w-4xl mb-14">
      <Pill>{kicker}</Pill>
      <h2 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">{title}</h2>
      {subtitle && <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-3xl">{subtitle}</p>}
    </div>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
        <Check className="h-4 w-4" strokeWidth={3} />
      </span>
      <span className="text-base md:text-lg">{children}</span>
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur p-7 ${className}`}>
      {children}
    </div>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <Logo size={36} />
            <span className="font-bold tracking-[0.3em] text-sm">PLURI</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#proposta" className="hover:text-foreground transition">Proposta</a>
            <a href="#fluxo" className="hover:text-foreground transition">Como funciona</a>
            <a href="#beneficios" className="hover:text-foreground transition">Benefícios</a>
            <a href="#proximos" className="hover:text-foreground transition">Próximos passos</a>
          </nav>
          <a href="#contato" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition">
            Falar com a PLURI <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <Orbs />
        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-32 md:pt-32 md:pb-40">
          <Pill><Sparkles className="h-3 w-3" /> Apresentação · 2026</Pill>
          <h1 className="mt-6 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.02] max-w-5xl">
            Automação <span className="grad-text">inteligente</span><br />para o escritório.
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
            Inteligência Artificial aplicada ao fluxo interno — atendimento, organização e gestão de informações.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#proposta" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition">
              Ver a proposta <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#fluxo" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 hover:bg-white/5 transition font-semibold">
              Como funciona
            </a>
          </div>
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div>
              <p className="text-xs uppercase tracking-widest mb-1">Apresentado por</p>
              <p className="text-foreground font-semibold">Renan Herrmann</p>
            </div>
            <span className="opacity-30">·</span>
            <p>PLURI — Estratégia, Automação e Inteligência Artificial</p>
          </div>
        </div>
      </section>

      {/* OBJETIVO */}
      <section className="relative max-w-7xl mx-auto px-6 py-24">
        <SectionHeader
          kicker="Objetivo"
          title={<>Não é sobre <span className="grad-text">substituir</span> pessoas.</>}
          subtitle="É sobre liberar o time do operacional repetitivo para focar no que realmente importa."
        />
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-5">
          {[
            "Reduzir tarefas repetitivas",
            "Organizar informações automaticamente",
            "Acelerar processos internos",
            "Melhorar o acompanhamento de demandas",
            "Diminuir perda de informações",
            "Centralizar dados importantes",
            "Apoiar o time no dia a dia",
            "Já em uso prático, com resultados reais",
          ].map((t) => <CheckItem key={t}>{t}</CheckItem>)}
        </div>
      </section>

      {/* CENÁRIO */}
      <section className="relative bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <SectionHeader
            kicker="O cenário atual"
            title={<>Muito tempo perdido em <span className="grad-text">processos manuais</span>.</>}
          />
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-5 font-semibold">Dependências de hoje</p>
              <ul className="space-y-3">
                {["Mensagens espalhadas","Informações manuais","Acompanhamento individual","Retrabalho","Atualização manual de planilhas","Consultas repetitivas","Falta de centralização"].map((t) => (
                  <li key={t} className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />{t}</li>
                ))}
              </ul>
            </Card>
            <Card className="!border-destructive/25" >
              <p className="text-xs uppercase tracking-widest mb-5 font-semibold" style={{ color: "oklch(0.75 0.18 25)" }}>O que isso gera</p>
              <ul className="space-y-3">
                {["Perda de tempo","Demora operacional","Dificuldade de acompanhamento","Risco de esquecer informações","Excesso de tarefas operacionais"].map((t) => (
                  <li key={t} className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: "oklch(0.75 0.18 25)" }} />{t}</li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* PROPOSTA */}
      <section id="proposta" className="relative max-w-7xl mx-auto px-6 py-24">
        <SectionHeader
          kicker="A proposta"
          title={<>Um fluxo inteligente <span className="grad-text">integrado com IA</span>.</>}
          subtitle="Pensado para apoiar o time, não para competir com ele."
        />
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-5">
          {[
            "Organização automática de informações",
            "Registro automático de atendimentos",
            "Atualização integrada de planilhas",
            "Resumos automáticos de conversas",
            "Centralização de dados",
            "Apoio operacional inteligente",
            "Personalização por necessidade",
            "Pronto para escalar no futuro",
          ].map((t) => <CheckItem key={t}>{t}</CheckItem>)}
        </div>
      </section>

      {/* FLUXO */}
      <section id="fluxo" className="relative bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <SectionHeader
            kicker="Como funciona"
            title={<>Fluxo, do <span className="grad-text">início ao fim</span>.</>}
          />
          <ol className="space-y-3">
            {[
              "Cliente / Solicitação",
              "Atendimento automatizado",
              "IA interpreta informações",
              "Dados organizados automaticamente",
              "Atualização de planilhas e registros",
              "Resumo automático do atendimento",
              "Equipe acompanha tudo centralizado",
            ].map((s, i) => (
              <li key={s} className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <span className="h-12 w-12 rounded-xl flex items-center justify-center font-bold shrink-0 bg-primary/15 text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lg md:text-xl font-medium">{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* DIFERENCIAL */}
      <section className="relative max-w-7xl mx-auto px-6 py-24">
        <SectionHeader
          kicker="O diferencial"
          title={<>Não é apenas um <span className="grad-text">chatbot</span>.</>}
          subtitle="É uma estrutura inteligente de apoio operacional — pensada para o dia a dia real do escritório."
        />
        <div className="grid md:grid-cols-3 gap-5">
          {[
            [Sparkles, "Interpretar", "Mensagens e contexto"],
            [Layers, "Organizar", "Informações automaticamente"],
            [Workflow, "Atualizar", "Registros e planilhas"],
            [Zap, "Resumir", "Atendimentos completos"],
            [Target, "Identificar", "Demandas relevantes"],
            [ShieldCheck, "Centralizar", "Histórico unificado"],
          ].map(([Icon, t, d]) => {
            const I = Icon as typeof Sparkles;
            return (
              <Card key={t as string}>
                <I className="h-7 w-7 text-primary mb-4" />
                <p className="text-2xl font-bold mb-2">{t as string}</p>
                <p className="text-muted-foreground">{d as string}</p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* EXEMPLOS */}
      <section className="relative bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <SectionHeader
            kicker="O que pode ser automatizado"
            title={<>Exemplos <span className="grad-text">práticos</span>.</>}
          />
          <div className="grid md:grid-cols-3 gap-5">
            {([
              ["Atendimento", ["Respostas iniciais","Direcionamento automático","Coleta de informações","Registro automático"]],
              ["Organização interna", ["Atualização de planilhas","Criação de históricos","Acompanhamento de solicitações","Centralização de dados"]],
              ["Inteligência operacional", ["Resumos automáticos","Classificação de demandas","Apoio ao acompanhamento","Informação estratégica"]],
            ] as [string, string[]][]).map(([title, items]) => (
              <Card key={title}>
                <p className="text-xl font-bold mb-5">{title}</p>
                <ul className="space-y-3">
                  {items.map((i) => (
                    <li key={i} className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />{i}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRAÇÕES */}
      <section className="relative max-w-7xl mx-auto px-6 py-24">
        <SectionHeader
          kicker="Integrações"
          title={<>Conecta com o que você <span className="grad-text">já usa</span>.</>}
          subtitle="Tudo personalizável conforme a necessidade do escritório."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {["WhatsApp","Google Sheets","Google Drive","E-mail","CRM","Agenda","Sistemas internos","Banco de dados","APIs externas"].map((t) => (
            <div key={t} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center font-semibold hover:border-primary/40 hover:bg-primary/5 transition">
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section id="beneficios" className="relative bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <SectionHeader
            kicker="Benefícios diretos"
            title={<>Cinco ganhos <span className="grad-text">imediatos</span>.</>}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              ["+ Produtividade","Redução de tarefas operacionais repetitivas."],
              ["+ Organização","Informações centralizadas e registradas automaticamente."],
              ["+ Velocidade","Processos internos muito mais rápidos."],
              ["+ Controle","Acompanhamento melhor das demandas."],
              ["+ Escalabilidade","Estrutura preparada para o crescimento futuro."],
            ].map(([t, d]) => (
              <Card key={t}>
                <p className="grad-text text-xl font-bold mb-3">{t}</p>
                <p className="text-sm text-muted-foreground">{d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRÁTICA */}
      <section className="relative max-w-7xl mx-auto px-6 py-24">
        <SectionHeader
          kicker="Já na prática"
          title={<>Resultados <span className="grad-text">reais</span> em uso.</>}
          subtitle="Mesmo em ajustes e melhorias contínuas, o fluxo já vem ajudando muito no dia a dia."
        />
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-5">
          {["Ganho de tempo","Organização melhor das informações","Facilidade no acompanhamento","Redução de retrabalho","Mais clareza operacional","Apoio direto nas atividades"].map((t) => (
            <CheckItem key={t}>{t}</CheckItem>
          ))}
        </div>
      </section>

      {/* PERSONALIZÁVEL */}
      <section className="relative bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <SectionHeader
            kicker="Inteligente e personalizável"
            title={<>Feito sob medida. <span className="grad-text">Evolui com você</span>.</>}
          />
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-5 font-semibold">Adaptável a</p>
              <ul className="space-y-3">
                {["Necessidade do escritório","Áreas específicas","Equipes diferentes","Tipos de atendimento","Fluxos internos","Crescimento futuro"].map((t) => (
                  <li key={t} className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />{t}</li>
                ))}
              </ul>
            </Card>
            <Card>
              <p className="text-xs uppercase tracking-widest grad-text mb-5 font-semibold">Sempre evoluindo</p>
              <ul className="space-y-3">
                {["Pode mudar de identidade","Pode adaptar a linguagem","Pode criar novos fluxos","Pode integrar novos sistemas","Pode evoluir continuamente"].map((t) => (
                  <li key={t} className="flex items-start gap-3"><Check className="h-5 w-5 text-primary shrink-0 mt-1" strokeWidth={3} />{t}</li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* SEGURANÇA */}
      <section className="relative max-w-7xl mx-auto px-6 py-24">
        <SectionHeader
          kicker="Segurança e acompanhamento"
          title={<>Com <span className="grad-text">supervisão humana</span>, sempre.</>}
          subtitle="Toda implementação é acompanhada e ajustada conforme a necessidade. A IA atua como suporte inteligente."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[["Estrutura","organizada"],["Supervisão","humana"],["Melhorias","contínuas"],["Foco","operacional"]].map(([a,b]) => (
            <Card key={a} className="text-center">
              <p className="grad-text text-xl font-bold">{a}</p>
              <p className="text-muted-foreground mt-1">{b}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* PRÓXIMOS PASSOS */}
      <section id="proximos" className="relative bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <SectionHeader
            kicker="Próximos passos"
            title={<>Do <span className="grad-text">mapeamento</span> à expansão.</>}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              ["01","Mapear","Processos que mais consomem tempo"],
              ["02","Identificar","Pontos de automação"],
              ["03","Implementar","Fluxo piloto"],
              ["04","Acompanhar","Resultados e ajustes"],
              ["05","Expandir","Para outras áreas"],
            ].map(([n, t, d]) => (
              <Card key={n}>
                <p className="grad-text text-3xl font-bold mb-3">{n}</p>
                <p className="text-lg font-semibold mb-1">{t}</p>
                <p className="text-sm text-muted-foreground">{d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FUTURO */}
      <section className="relative max-w-7xl mx-auto px-6 py-24">
        <SectionHeader
          kicker="Possibilidades futuras"
          title={<>Para onde isso pode <span className="grad-text">evoluir</span>.</>}
        />
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {["Dashboards inteligentes","Análise de produtividade","CRM automatizado","Relatórios automáticos","Acompanhamento de processos","Central inteligente de atendimento","Gestão integrada","Automações avançadas"].map((t) => (
            <div key={t} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 font-medium hover:border-primary/40 hover:bg-primary/5 transition">
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* CONSIDERAÇÕES + CTA */}
      <section id="contato" className="relative overflow-hidden">
        <Orbs />
        <div className="relative max-w-5xl mx-auto px-6 py-32 text-center">
          <Pill>Considerações finais</Pill>
          <h2 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            A automação <span className="grad-text">amplifica</span><br />o trabalho humano.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ela reduz o repetitivo e libera a equipe para focar no que realmente importa.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a href="mailto:contato@pluri.ai" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition">
              Falar com a PLURI <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <Logo size={28} />
            <span className="font-bold tracking-[0.3em] text-foreground">PLURI</span>
          </div>
          <p>Renan Herrmann · Estratégia, Automação e Inteligência Artificial</p>
        </div>
      </footer>
    </div>
  );
}
