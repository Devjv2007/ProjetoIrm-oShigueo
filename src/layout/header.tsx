import { useEffect, useState } from "react";

type HeaderProps = {
  whatsappNumber: string;
};

export default function Header({ }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50",
        scrolled ? "bg-white backdrop-blur shadow-sm" : "bg-white",
        "transition-[background-color,opacity] duration-200 ease-out"
      ].join(" ")}
    >
      <div className="container mx-auto px-3 py-2">
        <div className="flex items-center gap-4 relative">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-2xl font-serif text-gray-700">Ternos do Irmão Shigueo</h1>
            </div>
          </div>
          <div className="flex-1" />
          <nav className="hidden md:flex items-center gap-6">
            <a href="#sobre" className="hover:text-gray-700 transition-colors font-serif">Sobre</a>
            <a href="#ternos" className="hover:text-gray-700 transition-colors font-serif">Ternos</a>
            <a href="#camisas" className="hover:text-gray-700 transition-colors font-serif">Camisas</a>
            <a href="#gravatas" className="hover:text-gray-700 transition-colors font-serif">Gravatas</a>
            <a href="#depoimentos" className="hover:text-gray-700 transition-colors font-serif">Depoimentos</a>
            <a href="#contato" className="hover:text-gray-700 transition-colors font-serif">Contato</a>

          </nav>
          <div className="hidden md:flex">
        <a
            href={`https://api.whatsapp.com/send/?phone=5518981367870&text&type=phone_number&app_absent=0`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            WhatsApp
        </a>
          </div>
          <button
            aria-label="Abrir menu"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700"
          >
            {open ? (
              <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          {open && (
            <button
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
              className="fixed inset-0 z-40 bg- md:hidden"
            />
          )}
          <div
            id="mobile-menu"
            className={[
              "fixed left-0 right-0 top-12 z-50 md:hidden",
              "transform origin-top transition-[opacity,transform] duration-200 ease-out",
              open ? " translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
            ].join(" ")}
          >
            <nav className="rounded-b-lg  bg-white shadow-lg">
              <ul className="flex flex-col">
                <li><a onClick={() => setOpen(false)} href="#sobre" className="block px-4 py-3 hover:bg-slate-50 font-serif">Sobre</a></li>
                <li><a onClick={() => setOpen(false)} href="#ternos" className="block px-4 py-3 hover:bg-slate-50 font-serif">Ternos</a></li>
                <li><a onClick={() => setOpen(false)} href="#camisas" className="block px-4 py-3 hover:bg-slate-50 font-serif">Camisas</a></li>
                <li><a onClick={() => setOpen(false)} href="#gravatas" className="block px-4 py-3 hover:bg-slate-50 font-serif">Gravatas</a></li>
                <li><a onClick={() => setOpen(false)} href="#depoimentos" className="block px-4 py-3 hover:bg-slate-50 font-serif">Depoimentos</a></li>
                <li><a onClick={() => setOpen(false)} href="#contato" className="block px-4 py-3 hover:bg-slate-50 font-serif">Contato</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
