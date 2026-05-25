import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { slides } from "@/slides/deck";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PLURI — Automação Inteligente para o Escritório" },
      { name: "description", content: "Apresentação sobre Inteligência Artificial aplicada ao fluxo interno — por Renan Herrmann, PLURI." },
    ],
  }),
  component: Index,
});

function Index() {
  const [idx, setIdx] = useState(0);
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const compute = () => {
      if (!containerRef.current) return;
      const { clientWidth: w, clientHeight: h } = containerRef.current;
      setScale(Math.min(w / 1920, h / 1080));
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        setIdx((i) => Math.min(i + 1, slides.length - 1));
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        setIdx((i) => Math.max(i - 1, 0));
      } else if (e.key === "Home") setIdx(0);
      else if (e.key === "End") setIdx(slides.length - 1);
      else if (e.key === "f" || e.key === "F") {
        if (!document.fullscreenElement) document.documentElement.requestFullscreen();
        else document.exitFullscreen();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const Slide = slides[idx];

  return (
    <div className="h-screen w-screen bg-background flex flex-col overflow-hidden">
      <div
        ref={containerRef}
        className="flex-1 relative overflow-hidden"
      >
        <div
          className="slide-wrapper"
          style={{ transform: `translate(-50%, -50%) scale(${scale})` as never, left: "50%", top: "50%", marginLeft: 0, marginTop: 0 }}
          key={idx}
        >
          <div className="slide-content fade-up">
            <Slide />
          </div>
        </div>
      </div>
      <Controls idx={idx} total={slides.length} onPrev={() => setIdx((i) => Math.max(0, i - 1))} onNext={() => setIdx((i) => Math.min(slides.length - 1, i + 1))} onJump={setIdx} />
    </div>
  );
}

function Controls({ idx, total, onPrev, onNext, onJump }: { idx: number; total: number; onPrev: () => void; onNext: () => void; onJump: (n: number) => void }) {
  return (
    <div className="border-t border-border bg-background/80 backdrop-blur px-6 py-3 flex items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <button onClick={onPrev} className="px-3 py-1.5 rounded-md bg-muted hover:bg-muted/70 text-sm transition" aria-label="Anterior">←</button>
        <button onClick={onNext} className="px-3 py-1.5 rounded-md bg-primary text-primary-foreground hover:opacity-90 text-sm transition" aria-label="Próximo">→</button>
        <span className="text-xs text-muted-foreground ml-3">{idx + 1} / {total} · use ← → ou F para tela cheia</span>
      </div>
      <div className="flex gap-1 overflow-x-auto max-w-[60%]">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onJump(i)}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-primary" : "w-2 bg-muted hover:bg-muted-foreground/50"}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
