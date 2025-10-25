import ImageCarousel from '../components/imagecarousel';
function App() {
  return (
    <div className="min-h-screen bg-white py-16">
       <ImageCarousel />

    <section id="sobre" className="py-24 px-6 bg-white">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-4xl font-medium text-[#13343b] mb-6 tracking-tight">
          A arte da alfaiataria clássica
        </h2>

        <p className="text-[#62686c] mb-5 leading-relaxed">
          Há 11 anos elevando a elegância masculina em Presidente Prudente, Shigueo Kato Junior entrega alfaiataria sob medida com visita a domicílio: ele vai até você, tira as medidas com precisão, leva uma curadoria de ternos para provar na hora e finaliza cada peça com técnicas artesanais e tecidos premium para caimento impecável, conforto e sofisticação.
        </p>

        <p className="text-[#62686c] mb-5 leading-relaxed">
          Cada peça é cuidadosamente elaborada, respeitando as medidas e preferências individuais de cada cliente, garantindo não apenas o caimento perfeito, mas também o conforto e a elegância que você merece.
        </p>

        <p className="text-[#62686c] leading-relaxed">
          Utilizamos apenas tecidos premium selecionados e técnicas artesanais que valorizam cada detalhe, do corte ao acabamento final.
        </p>

        {/* CTA opcional */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href="https://wa.me/5518981367870"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#13343b] text-white hover:opacity-90 transition"
          >
            Agendar visita em domicílio
          </a>
        </div>
      </div>

      <div className="bg-[#e6e5e1] rounded-2xl aspect-[4/5] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&q=92&auto=format&fit=crop"
          srcSet="
            https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1280&q=88&auto=format&fit=crop 1280w,
            https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&q=92&auto=format&fit=crop 1920w,
            https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=2560&q=95&auto=format&fit=crop 2560w
          "
          sizes="(min-width: 1024px) 50vw, 100vw"
          alt="Alfaiate trabalhando"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</section>


      {/* Gravatas Section */}
      <section id="gravatas" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-[#13343b] mb-4 tracking-tight">
              Gravatas que compoem seu visual
            </h2>
            <p className="text-[#62686c] max-w-2xl mx-auto leading-relaxed">
              Uma seleção refinada de gravatas em seda pura, com diversos padrões e cores para harmonizar perfeitamente com seu terno.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-white rounded-xl overflow-hidden border border-[#5e5240]/12 hover:border-[#5e5240]/20 transition-all hover:shadow-md group">
              <div className="aspect-[3/4] overflow-hidden bg-[#f5f5f5]">
                <img 
                  src="https://acdn-us.mitiendanube.com/stores/001/303/652/products/kcg659v-c937bc6512dd0b1cb917389879930929-480-0.webp" 
                  alt="Seda Pura Azul Marinho"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-medium text-[#13343b] mb-1.5 text-sm">Seda Pura</h3>
                <p className="text-xs text-[#62686c] mb-0.5">Lisa</p>
                <p className="text-xs text-[#62686c]">Azul Marinho</p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden border border-[#5e5240]/12 hover:border-[#5e5240]/20 transition-all hover:shadow-md group">
              <div className="aspect-[3/4] overflow-hidden bg-[#f5f5f5]">
                <img 
                  src="https://acdn-us.mitiendanube.com/stores/001/303/652/products/fre8gdw-0ff1bae3d8b6daa1ec17595464188364-480-0.webp" 
                  alt="Seda Italiana Bordô"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-medium text-[#13343b] mb-1.5 text-sm">Seda Italiana</h3>
                <p className="text-xs text-[#62686c] mb-0.5">Listrado</p>
                <p className="text-xs text-[#62686c]">Bordô</p>
              </div>
            </div>


            <div className="bg-white rounded-xl overflow-hidden border border-[#5e5240]/12 hover:border-[#5e5240]/20 transition-all hover:shadow-md group">
              <div className="aspect-[3/4] overflow-hidden bg-[#f5f5f5]">
                <img 
                  src="https://acdn-us.mitiendanube.com/stores/001/303/652/products/61leco2-05baacef3b5a95143b17594618060287-480-0.webp" 
                  alt="Seda Premium Poá"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-medium text-[#13343b] mb-1.5 text-sm">Seda Premium</h3>
                <p className="text-xs text-[#62686c] mb-0.5">Poá</p>
                <p className="text-xs text-[#62686c]">Cinza Chumbo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tecidos Section */}
      <section id="tecidos" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-[#13343b] mb-4 tracking-tight">
              nossos tecidos elevam o conceito de vestir bem.
            </h2>
            <p className="text-[#62686c] max-w-2xl mx-auto leading-relaxed">
              Uma seleção refinada de tecidos com qualidade pura, com diversos padrões e cores para harmonizar perfeitamente com seu terno.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-white rounded-xl overflow-hidden border border-[#5e5240]/12 hover:border-[#5e5240]/20 transition-all hover:shadow-md group">
              <div className="aspect-[3/4] overflow-hidden bg-[#f5f5f5]">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/luxury-australian-wool-fabric-texture-close-up-dar-LLQgxhz035rfTfjVl9zL85oqU9gXJ0.jpg" 
                  alt="Seda Pura Azul Marinho"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-medium text-[#13343b] mb-1.5 text-sm">Lã Australiana</h3>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden border border-[#5e5240]/12 hover:border-[#5e5240]/20 transition-all hover:shadow-md group">
              <div className="aspect-[3/4] overflow-hidden bg-[#f5f5f5]">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/premium-super-120s-wool-fabric-texture-charcoal-gr-BEVsuslMgnO3y6sETNzwPxpbcy6hiy.jpg" 
                  alt="Seda Italiana Bordô"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-medium text-[#13343b] mb-1.5 text-sm">Super 120s</h3> 
              </div>
            </div>


            <div className="bg-white rounded-xl overflow-hidden border border-[#5e5240]/12 hover:border-[#5e5240]/20 transition-all hover:shadow-md group">
              <div className="aspect-[3/4] overflow-hidden bg-[#f5f5f5]">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/cashmere-blend-fabric-texture-soft-brown-j4jKzCtQbUNjb7P5YbUlX5sOorc1a0.jpg" 
                  alt="Seda Premium Poá"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-medium text-[#13343b] mb-1.5 text-sm">Cashmere Blend</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
    
    </div>
  );
}

export default App;
