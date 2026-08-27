import React from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';

export const InstagramSection: React.FC = () => {
  const instagramUrl = 'https://www.instagram.com/mas11cafe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==';

  const posts = [
    {
      id: 'post1',
      image: 'https://lh3.googleusercontent.com/d/1GO1AfHmBYk6YnWIF3GihQqYYGJbQvi8J',
      fallback: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80',
      caption: 'Flat White perfecto con granos de origen único en Larrea 777. ☕✨ #Mas11Cafe #CafeDeEspecialidad',
      likes: '142',
      comments: '18',
    },
    {
      id: 'post2',
      image: 'https://lh3.googleusercontent.com/d/1POW-XJZJvczS8ue_vcmCNp-EMLz_o8IN',
      fallback: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80',
      caption: 'Mbeyú bien calentito recien hecho en la plancha 🧀🔥 ¿Ya probaste la receta típica?',
      likes: '289',
      comments: '34',
    },
    {
      id: 'post3',
      image: 'https://lh3.googleusercontent.com/d/1rESjPWyp92dmkJhkUM4c94w2MUlkVESa',
      fallback: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80',
      caption: '+COL Caturra 1700 msnm. Nuestro café de especialidad directo de origen en saquito o grano 🌿',
      likes: '198',
      comments: '22',
    },
    {
      id: 'post4',
      image: 'https://lh3.googleusercontent.com/d/1UprA3PKNSIWp4LMwKE_6RhO4eebaQKx2',
      fallback: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80',
      caption: 'Porción de chipitas paraguayas crujientes por fuera y súper suave por dentro 🧀🤤',
      likes: '312',
      comments: '41',
    },
    {
      id: 'post5',
      image: 'https://lh3.googleusercontent.com/d/1csh8ApCjvY2JS1F4Um5VPsHndwg9yzVp',
      fallback: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80',
      caption: 'Medialunas de manteca hojaldradas + Espresso doble para arrancar la mañana en Once 🥐☕',
      likes: '254',
      comments: '27',
    },
  ];

  return (
    <section className="bg-stone-50 py-16 px-4 sm:px-6 border-t border-stone-200 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Header Instagram */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-10 pb-6 border-b border-stone-200">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 p-[3px] shadow-md flex-shrink-0">
              <div className="w-full h-full bg-white rounded-full p-1 flex items-center justify-center">
                <img
                  src="https://lh3.googleusercontent.com/d/17J7q1FAr4-G-HKY4s3GaF0tE1orBN9JK"
                  alt="+11 Café Logo"
                  className="w-full h-full object-contain rounded-full"
                  onError={(e) => {
                    (e.target as HTMLElement).setAttribute('hidden', '');
                  }}
                />
                <Instagram className="w-7 h-7 text-rose-600 hidden group-has-[img[hidden]]:block" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <h2 className="text-2xl sm:text-3xl font-black text-[#2C221E] tracking-tight">
                  @mas11cafe
                </h2>
                <span className="inline-flex items-center gap-1 bg-gradient-to-r from-amber-500 to-rose-500 text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full shadow-sm">
                  <Sparkles className="w-3 h-3" /> Oficial
                </span>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 font-medium mt-1">
                Seguinos en Instagram para ver nuestras novedades, promos y el día a día en el local.
              </p>
            </div>
          </div>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-amber-600 via-rose-600 to-purple-600 hover:from-amber-500 hover:to-purple-500 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2.5"
          >
            <Instagram className="w-4 h-4" />
            <span>Seguinos en Instagram</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

        {/* Responsive Grid of Recent Instagram Posts */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {posts.map((post) => (
            <a
              key={post.id}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-stone-900 border border-stone-200"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = post.fallback;
                }}
              />

              {/* Hover Dark Overlay with Stats & Caption */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 flex flex-col justify-between text-white">
                <div className="flex items-center justify-end">
                  <Instagram className="w-4 h-4 text-amber-400" />
                </div>

                <p className="text-[10px] sm:text-xs font-semibold line-clamp-3 leading-snug drop-shadow-sm">
                  {post.caption}
                </p>

                <div className="flex items-center justify-between text-[10px] font-bold text-amber-200">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3 fill-rose-500 text-rose-500" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3 fill-white/80 text-white" />
                    {post.comments}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-stone-500 font-medium">
            📸 Etiquetanos en tu foto con tu café o mbeyú usando <strong className="text-[#EA7C12]">#Mas11Cafe</strong> para aparecer en nuestras historias.
          </p>
        </div>

      </div>
    </section>
  );
};
