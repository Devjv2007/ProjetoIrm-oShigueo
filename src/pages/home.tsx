import ImageCarousel from '../components/imagecarousel';
import { useReveal } from '../hooks/useReveal';

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

function CardHover({
  src,
  title,
}: {
  src: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="relative bg-white rounded-xl overflow-hidden border border-[#5e5240]/12 hover:border-[#5e5240]/20 transition-all hover:shadow-md group">
      <div className="aspect-[3/4] overflow-hidden bg-[#f5f5f5]">
        <img
          src={src}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="font-serif text-center text-gray-700 mb-1.5 text-sm">{title}</h3>
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-x-0 bottom-0 p-4 text-white">
          <div className="mt-3 flex justify-center">
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/30 opacity-0 [@media(hover:none)]:opacity-100 [@media(hover:none)]:pointer-events-none"></div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white py-16">
      <ImageCarousel />

      <section id="sobre" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal delay={0.1}>
              <div>
                <h2 className="text-4xl font-serif text-gray-700 mb-6 tracking-tight">
                  A arte da alfaiataria clássica
                </h2>
                <p className="text-[#62686c] mb-5 leading-relaxed">
                  Há 11 anos elevando a elegância masculina em Presidente Prudente, Shigueo Kato Junior entrega alfaiataria sob medida com visita a domicílio: ele vai até você, tira as medidas com precisão, leva uma grande variedade de ternos para provar na hora, com Ternos com tecidos premium para caimento impecável, conforto e sofisticação.
                </p>
                <p className="text-[#62686c] mb-5 leading-relaxed">
                  Temos ternos infantis de 4 a 16 anos e Ternos adultos do tamanho 42 a 64
                </p>
                <p className="text-[#62686c] leading-relaxed">
                  Utilizamos apenas tecidos premium selecionados e que valorizam cada detalhe, do formato ao acabamento final.
                </p>
                <div className="mt-8 hidden md:flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://wa.me/5518981367870"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gray-700 text-white hover:opacity-90 transition"
                  >
                    Agendar visita em domicílio
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-[#e6e5e1] rounded-2xl aspect-[4/5] overflow-hidden">
                <img
                  src="https://img.freepik.com/fotos-gratis/artesao-de-precisao-a-fazer-medicoes_482257-79185.jpg?semt=ais_hybrid&w=740&q=80"
                  alt="Alfaiate trabalhando"
                  className="w-full h-full object-cover "
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="-mt-10 pb-1 lg:hidden">
                <a
                  href="https://wa.me/5518981367870"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gray-700 text-white hover:opacity-90 transition"
                >
                  Agendar visita em domicílio
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="ternos" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif text-gray-700 mb-4 tracking-tight">
                Ternos para todas as ocasiões.
              </h2>
              <p className="text-[#62686c] max-w-2xl mx-auto leading-relaxed">
                Modelos variados, tecidos premium e caimento perfeito.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Reveal delay={0.1}>
              <CardHover
                src="https://images.tcdn.com.br/img/img_prod/1384962/costume_melange_slim_fmw_8911_1_23ec89ac6657f2f98fd44417c4f50c8a.jpg"
                title="Costume Cinza Urbano"
                desc="Tecido mescla, modelagem slim e ombro leve."
              />
            </Reveal>
            <Reveal delay={0.2}>
              <CardHover
                src="https://images.tcdn.com.br/img/img_prod/1384962/terno_classico_fmw_10129_2_3e689286f53a5b62ba3501821814bde8.jpg"
                title="Costume Clássico"
                desc="Corte atemporal para escritório e eventos."
              />
            </Reveal>
            <Reveal delay={0.3}>
              <CardHover
                src="https://images.tcdn.com.br/img/img_prod/1384962/terno_classico_fmw_10129_1_e1a473014273303078191f3d0287350a.jpg"
                title="Costume Clássico Black"
                desc="Preto elegante com caimento preciso."
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section id="camisas" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif text-gray-700 mb-4 tracking-tight">
                Camisas de altíssimo padrão.
              </h2>
              <p className="text-[#62686c] max-w-2xl mx-auto leading-relaxed">
                Ideais para usar com ternos, sendo de alta durabilidade e conforto com todos os tamanhos e cores.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Reveal delay={0.1}>
              <CardHover
                src="https://paristernos.com/wp-content/uploads/2016/08/Capture-decran-2016-08-01-a-11.54.46-ConvertImage.jpg"
                title="Camisa Azul"
                desc="Algodão macio, colarinho firme e caimento perfeito."
              />
            </Reveal>
            <Reveal delay={0.2}>
              <CardHover
                src="https://paristernos.com/wp-content/uploads/2016/08/Capture-decran-2016-08-01-a-11.54.44-ConvertImage.jpg"
                title="Camisa Rosa"
                desc="Toque suave, alta respirabilidade e elegância moderna."
              />
            </Reveal>
            <Reveal delay={0.3}>
              <CardHover
                src="https://paristernos.com/wp-content/uploads/2016/08/Capture-decran-2016-08-01-a-11.54.33-ConvertImage.jpg"
                title="Camisa Branca"
                desc="Clássica e versátil, ideal com qualquer terno."
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section id="gravatas" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif text-gray-700 mb-4 tracking-tight">
                Gravatas que compoem seu visual
              </h2>
              <p className="text-[#62686c] max-w-2xl mx-auto leading-relaxed">
                Tecido Premium, únicos e sofisticadas
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Reveal delay={0.1}>
              <CardHover
                src="https://acdn-us.mitiendanube.com/stores/001/303/652/products/kcg659v-c937bc6512dd0b1cb917389879930929-480-0.webp"
                title="Gravata Xadres"
                desc="Padronagem xadrez em jacquard, nó perfeito."
              />
            </Reveal>
            <Reveal delay={0.2}>
              <CardHover
                src="https://acdn-us.mitiendanube.com/stores/001/303/652/products/fre8gdw-0ff1bae3d8b6daa1ec17595464188364-480-0.webp"
                title="Gravata Jacquard"
                desc="Textura canelada, brilho sutil e caimento elegante."
              />
            </Reveal>
            <Reveal delay={0.3}>
              <CardHover
                src="https://acdn-us.mitiendanube.com/stores/001/303/652/products/61leco2-05baacef3b5a95143b17594618060287-480-0.webp"
                title="Gravata Liza Azul Marinho"
                desc="Microtextura lisa para composições formais."
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section id="depoimentos" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif text-gray-700 mb-4 tracking-tight">
                Depoimentos de nossos clientes
              </h2>
              <p className="text-[#62686c] max-w-2xl mx-auto leading-relaxed">
                Testemunhos de quem vive a experiência da excelência
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {['depoimento1.jpg', 'depoimento2.jpg', 'depoimento3.jpg', 'depoimento4.jpg', 'depoimento5.jpg', 'depoimento6.jpg'].map(
              (src, i) => (
                <Reveal key={i} delay={0.1 + i * 0.05}>
                  <article className="bg-white rounded-xl overflow-hidden border border-[#5e5240]/12 hover:border-[#5e5240]/20 transition-all hover:shadow-md group">
                    <div className="h-full md:h-auto lg:h-[240px] justify-center items-center overflow-hidden mx-auto">
                      <img
                        src={src}
                        alt={`Depoimento ${i + 1}`}
                        className="object-contain md:object-cover object-center group-hover:scale-105 transition-transform duration-500 w-full h-full"
                        loading="lazy"
                        draggable={false}
                      />
                    </div>
                  </article>
                </Reveal>
              )
            )}
          </div>
        </div>
      </section>

      <section id="contato" className="relative isolate py-24 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal delay={0.1}>
            <h3 className="text-3xl md:text-4xl font-serif tracking-tight text-gray-700">
              Vista-se com confiança todos os dias
            </h3>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 text-base md:text-lg text-black/80">
              Agendamento rápido pelo WhatsApp. Vamos encontrar o terno perfeito para você!
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div>
              <a
                href="https://wa.me/5518981367870"
                className="mt-8 inline-flex items-center justify-center rounded-lg mx-1 bg-green-700 px-8 md:px-10 py-4 md:py-4.5 text-white text-base md:text-lg font-medium shadow-sm hover:brightness-110 active:brightness-95 transition"
              >
                Falar no WhatsApp
              </a>
              <a
                href="https://www.instagram.com/ternosdoirmaoshigueo/"
                className="mt-8 inline-flex items-center justify-center rounded-lg mx-1 bg-gray-700 px-8 md:px-10 py-4 md:py-4.5 text-white text-base md:text-lg font-medium shadow-sm hover:brightness-110 active:brightness-95 transition"
              >
                Nosso Instagram
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.35}>
            <p className="mt-4 text-xs text-black/60">Atendimento em Presidente Prudente e região</p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

export default App;
