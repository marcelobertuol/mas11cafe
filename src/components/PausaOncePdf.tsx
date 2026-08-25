import React from 'react';

export const PausaOncePdf: React.FC = () => {
  const cards = [
    {
      id: 'p1',
      imgSrc: 'https://lh3.googleusercontent.com/d/1dHY2hppD2eICnyPEQ5yyYVbX0lyUacrC',
      fallback: 'https://drive.google.com/thumbnail?id=1dHY2hppD2eICnyPEQ5yyYVbX0lyUacrC&sz=w600',
      text: 'En el barrio más vibrante y cosmopolita de Buenos Aires, nace un nuevo concepto de café al paso, diseñado para quienes viven la ciudad a mil por hora.',
    },
    {
      id: 'p2',
      imgSrc: 'https://lh3.googleusercontent.com/d/1ANTLEVGcJsma8rhZFxHQKjYIngjASGXm',
      fallback: 'https://drive.google.com/thumbnail?id=1ANTLEVGcJsma8rhZFxHQKjYIngjASGXm&sz=w600',
      text: 'Somos la parada obligatoria para la comunidad universitaria y los trabajadores de la zona que buscan calidad sin perder tiempo.',
    },
    {
      id: 'p3',
      imgSrc: 'https://lh3.googleusercontent.com/d/1-Bqfy-J2wMRPyt2TkmQ9_0mHsjTdGAdO',
      fallback: 'https://drive.google.com/thumbnail?id=1-Bqfy-J2wMRPyt2TkmQ9_0mHsjTdGAdO&sz=w600',
      text: 'Fusionamos la rapidez del servicio con la calidez de un buen producto, ofreciendo una experiencia urbana, dinámica y multicultural.',
    },
  ];

  return (
    <section className="bg-[#C8641B] text-white pt-28 pb-32 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Subtle Wave Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Floating Transparent Design Graphics around Terracotta Canvas */}
      {/* SUPERIOR IZQUIERDA: Libro/Diseño (Agrandado bastante y subido bien arriba en mobile) */}
      <div className="absolute -top-3 sm:top-6 -left-3 sm:left-3 lg:left-8 z-0 pointer-events-none opacity-90">
        <img
          src="https://drive.google.com/thumbnail?id=1jjZ5WPAeEopyzFXbyxuYZwJ_EJF1wyDe&sz=w600"
          alt="Diseño +11"
          className="w-40 sm:w-36 lg:w-44 h-auto object-contain drop-shadow-lg transform -rotate-12 hover:scale-105 transition-transform"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://lh3.googleusercontent.com/d/1jjZ5WPAeEopyzFXbyxuYZwJ_EJF1wyDe';
          }}
        />
      </div>

      {/* SUPERIOR DERECHA: Medialunas/Diseño (Agrandado bastante y subido bien arriba en mobile) */}
      <div className="absolute -top-3 sm:top-6 -right-3 sm:right-3 lg:right-8 z-0 pointer-events-none opacity-90">
        <img
          src="https://drive.google.com/thumbnail?id=1_A1wrZViUYhVXZjy6JUaYqP47W3ykjyn&sz=w600"
          alt="Diseño +11"
          className="w-40 sm:w-36 lg:w-44 h-auto object-contain drop-shadow-lg transform rotate-12 hover:scale-105 transition-transform"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://lh3.googleusercontent.com/d/1_A1wrZViUYhVXZjy6JUaYqP47W3ykjyn';
          }}
        />
      </div>

      {/* INFERIOR IZQUIERDA: Gato/Diseño (Agrandado similar a los de arriba y ubicado en la esquina inferior en mobile) */}
      <div className="absolute -bottom-3 sm:bottom-6 -left-2 sm:left-3 lg:left-8 z-0 pointer-events-none opacity-90">
        <img
          src="https://drive.google.com/thumbnail?id=1qh3uuvnTF94m_JBnuY3WAwiDlzzvTKtn&sz=w600"
          alt="Diseño +11"
          className="w-36 sm:w-32 lg:w-40 h-auto object-contain drop-shadow-lg transform rotate-6 hover:scale-105 transition-transform"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://lh3.googleusercontent.com/d/1qh3uuvnTF94m_JBnuY3WAwiDlzzvTKtn';
          }}
        />
      </div>

      {/* INFERIOR DERECHA: Mezclador/Cafetera (Agrandado similar a los de arriba y ubicado en la esquina inferior en mobile) */}
      <div className="absolute -bottom-3 sm:bottom-6 -right-2 sm:right-3 lg:right-8 z-0 pointer-events-none opacity-90">
        <img
          src="https://drive.google.com/thumbnail?id=1ntqlHPCUqVN8phhsaW6WzC2NTn1A8jRh&sz=w600"
          alt="Diseño +11"
          className="w-36 sm:w-32 lg:w-40 h-auto object-contain drop-shadow-lg transform -rotate-6 hover:scale-105 transition-transform"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://lh3.googleusercontent.com/d/1ntqlHPCUqVN8phhsaW6WzC2NTn1A8jRh';
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Centered White Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase drop-shadow-sm">
            Tu pausa en el Once
          </h2>
          <div className="w-16 h-1 bg-white/70 mx-auto mt-3 rounded-full" />
        </div>

        {/* 3 Columns Layout (Desktop) / Vertical Stack (Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {cards.map((card, idx) => (
            <div
              key={card.id}
              className="flex flex-col items-center text-center bg-white/10 backdrop-blur-xs p-6 sm:p-8 rounded-3xl border border-white/20 shadow-xl transition-transform hover:-translate-y-1"
            >
              {/* Circular Top Photo */}
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-white shadow-2xl mb-6 shrink-0 bg-stone-800">
                <img
                  src={card.imgSrc}
                  alt={`Fotografía ${idx + 1} - Tu pausa en el Once`}
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = card.fallback;
                  }}
                />
              </div>

              {/* Exact Text Copy from PDF */}
              <p className="text-sm sm:text-base text-white/95 leading-relaxed font-medium">
                {card.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
