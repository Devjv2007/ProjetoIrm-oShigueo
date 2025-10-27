import React, { useEffect, useState } from 'react';

type Slide = {
  src: string;
  alt: string;
  title: string;
  srcSet?: string;
};

const toBase = (url: string) => url.split('?')[0];

const ImageCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const images: Slide[] = [
    {
      src: 'https://images.unsplash.com/photo-1491336477066-31156b5e4f35',
      alt: 'Ternos em cabides',
      title: 'New Collection',
      srcSet: `
        https://images.unsplash.com/photo-1491336477066-31156b5e4f35?w=1280&q=88&auto=format&fit=crop 1280w,
        https://images.unsplash.com/photo-1491336477066-31156b5e4f35?w=1920&q=92&auto=format&fit=crop 1920w,
        https://images.unsplash.com/photo-1491336477066-31156b5e4f35?w=2560&q=95&auto=format&fit=crop 2560w
      `,
    },
    
    {
      src: 'https://images.unsplash.com/photo-1425421669292-0c3da3b8f529',
      alt: 'Close de terno',
      title: 'Detalhes que Contam',
      srcSet: `
        https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?w=1280&q=88&auto=format&fit=crop 1280w,
        https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?w=1920&q=92&auto=format&fit=crop 1920w,
        https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?w=2560&q=95&auto=format&fit=crop 2560w
      `,
    },
    {
      src: 'https://images.unsplash.com/photo-1580684518721-3d7c2af77e5a',
      alt: 'Paletós escuros em cabides',
      title: 'Elegância Clássica',
      srcSet: `
        https://images.unsplash.com/photo-1580684518721-3d7c2af77e5a?w=1280&q=88&auto=format&fit=crop 1280w,
        https://images.unsplash.com/photo-1580684518721-3d7c2af77e5a?w=1920&q=92&auto=format&fit=crop 1920w,
        https://images.unsplash.com/photo-1580684518721-3d7c2af77e5a?w=2560&q=95&auto=format&fit=crop 2560w
      `,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <section className="relative w-full h-[70vh] md:h-[90vh] lg:h-screen overflow-hidden">
  {images.map((image, index) => {
    const src = `${toBase(image.src)}?w=1920&q=92&auto=format&fit=crop`;
    const isActive = index === currentSlide;
    return (
      <div
        key={index}
        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
          isActive ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden={!isActive}
      >
        <img
          src={src}
          srcSet={image.srcSet}
          sizes="100vw"
          alt={image.alt}
          className="absolute inset-0 w-full h-full object-cover object-center"
          draggable={false}
          loading={index === 0 ? 'eager' : 'lazy'}
        />

        {/* Overlays só em md+ para não aparecer “fundo” no mobile */}
        <div className="hidden md:block absolute inset-0 bg-black/40" />
        <div className="hidden md:block pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>
    );
  })}


      <div className="relative z-10 h-full translate-y-10 md:translate-y-0">
      <div className="max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
        <h1 className="mt-6 text-4xl md:text-6xl font-serif text-white leading-tight max-w-3xl">
          O segredo da elegância 
        </h1>
        <p className="mt-4 text-white/80 max-w-xl">
          Descubra o equilíbrio perfeito entre forma, função e elegância
        </p>
      </div>
    </div>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            aria-label={`Ir para slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              i === currentSlide ? 'w-6 bg-white' : 'w-2.5 bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageCarousel;
