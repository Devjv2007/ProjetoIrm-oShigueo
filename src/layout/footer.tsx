export default function Footer() {
  return (
    <>

      <footer className="bg-gray-50 border-t border-gray-300 py-8 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:justify-between items-center gap-6">
          <div className="flex items-center space-x-4 flex-shrink-0">
            <div>
              <h4 className="font-bold text-lg text-slate-900">Shigueo Kato Junior</h4>
              <p className="text-sm text-slate-600">
                Vendas de Ternos • Atendimento a domicílio • Presidente Prudente
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center space-x-4 flex-shrink-0 text-slate-700">
              <span className="text-sm">
                <span className="ri-whatsapp-line px-1" />
                (18) 98136-7870
              </span>
              <span className="text-sm">
                <span className="ri-map-pin-line px-1" />
                Presidente Prudente e região
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-300 pt-4 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Shigueo Kato Junior — Todos os direitos reservados.
        </div>
      </footer>
      <footer className="bg-gray-50 border-t border-gray-300 py-6 block md:hidden">
        <div className="max-w-xs mx-auto flex flex-col items-center gap-3">
          <h4 className="font-bold text-base text-slate-900 mt-1">Shigueo Kato Junior</h4>
          <p className="text-xs text-slate-600 text-center">
            Vendas de Ternos • Atendimento a domicílio • Presidente Prudente
          </p>
          <div className="flex flex-col gap-1 mt-1 text-slate-700">
            <span className="text-sm">
              <span className="ri-whatsapp-line px-1" />
              (18) 98136-7870
            </span>
            <span className="text-sm">
              <span className="ri-map-pin-line px-1" />
              Presidente Prudente e região
            </span>
          </div>
        </div>

        <div className="mt-4 border-t border-gray-300 pt-3 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Shigueo Kato Junior
        </div>
      </footer>
    </>
  );
}
