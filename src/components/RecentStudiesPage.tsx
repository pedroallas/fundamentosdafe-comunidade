import { useState, useEffect } from 'react';
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Calendar,
  Users,
  Clock,
  Grid3x3,
  Camera,
  Heart,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause
} from "lucide-react";

interface RecentStudiesPageProps {
  onNavigate: (page: string, moduleId?: number) => void;
}

export function RecentStudiesPage({ onNavigate }: RecentStudiesPageProps) {
  const [showAllImages, setShowAllImages] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Todas as imagens dos estudos e momentos da igreja
  const allStudyImages = [
    {
      id: 1,
      title: "A Inspiração da Bíblia",
      date: "Há 2 dias",
      participants: 45,
      duration: "40 min",
      image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHN0dWR5JTIwZ3JvdXB8ZW58MXx8fHwxNzU4NjMzNTQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Estudo sobre a autoridade suprema da Palavra de Deus e sua relevância para nossa vida cotidiana.",
      category: "Fundamentos"
    },
    {
      id: 2,
      title: "O Deus Trino",
      date: "Há 5 dias",
      participants: 38,
      duration: "45 min",
      image: "https://images.unsplash.com/photo-1565130935995-303a00dad6d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwcmF5ZXJ8ZW58MXx8fHwxNzU4NjMzNTUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Compreendendo a natureza trina de Deus: Pai, Filho e Espírito Santo em perfeita unidade.",
      category: "Teologia"
    },
    {
      id: 3,
      title: "Jesus Cristo, o Salvador",
      date: "Há 1 semana",
      participants: 52,
      duration: "40 min",
      image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJpc3RpYW4lMjB3b3JzaGlwfGVufDF8fHx8MTc1ODYzMzU1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "A pessoa e obra salvadora de Cristo como centro da fé cristã e esperança da humanidade.",
      category: "Salvação"
    },
    {
      id: 4,
      title: "A Pecaminosidade do Homem",
      date: "Há 1 semana",
      participants: 41,
      duration: "35 min",
      image: "https://images.unsplash.com/photo-1437603568260-1950d3ca6eab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMHByYXlpbmd8ZW58MXx8fHwxNzU4NjMzNTU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "A origem e consequências do pecado, e a necessidade universal da graça divina.",
      category: "Doutrina"
    },
    {
      id: 5,
      title: "A Salvação pela Graça",
      date: "Há 2 semanas",
      participants: 47,
      duration: "40 min",
      image: "https://images.unsplash.com/photo-1565813086292-604790c8a97b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjb21tdW5pdHl8ZW58MXx8fHwxNzU4NjM0MDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "O dom gratuito da salvação através da graça de Deus, não por obras humanas.",
      category: "Graça"
    },
    {
      id: 6,
      title: "Ensinando Crianças na Fé",
      date: "Há 2 semanas",
      participants: 33,
      duration: "30 min",
      image: "https://images.unsplash.com/photo-1541802802036-1d572ba70147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHJlYWRpbmclMjBiaWJsZXxlbnwxfHx8fDE3NTg2MzM1NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Métodos práticos e amorosos para ensinar os fundamentos da fé às próximas gerações.",
      category: "Pedagogia"
    },
    {
      id: 7,
      title: "Estudo da Palavra",
      date: "Há 3 semanas",
      participants: 29,
      duration: "35 min",
      image: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHJlYWRpbmd8ZW58MXx8fHwxNzU4NjM2MDIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Mergulhando profundamente nas Escrituras para compreender a vontade de Deus.",
      category: "Estudo Bíblico"
    },
    {
      id: 8,
      title: "Círculo de Oração",
      date: "Há 3 semanas",
      participants: 51,
      duration: "45 min",
      image: "https://images.unsplash.com/photo-1609234656388-0ff363383899?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmF5ZXIlMjBncm91cHxlbnwxfHx8fDE3NTg2MzYwMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Momento de comunhão e intercessão pela igreja e pelas famílias.",
      category: "Oração"
    },
    {
      id: 9,
      title: "Culto de Adoração",
      date: "Há 4 semanas",
      participants: 78,
      duration: "60 min",
      image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBzZXJ2aWNlfGVufDF8fHx8MTc1ODYzMzU2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Celebração em comunidade com louvor, adoração e reflexão espiritual.",
      category: "Adoração"
    },
    {
      id: 10,
      title: "Comunhão Cristã",
      date: "Há 1 mês",
      participants: 42,
      duration: "50 min",
      image: "https://images.unsplash.com/photo-1667790977364-f2c0c1a22b5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJpc3RpYW4lMjBmZWxsb3dzaGlwfGVufDF8fHx8MTc1ODYzNjAzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Fortalecimento dos laços fraternos através da Palavra e testemunhos.",
      category: "Comunhão"
    },
    {
      id: 11,
      title: "Escola Dominical",
      date: "Há 1 mês",
      participants: 63,
      duration: "50 min",
      image: "https://images.unsplash.com/photo-1650763202808-23e89654711c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWxpZ2lvdXMlMjBlZHVjYXRpb258ZW58MXx8fHwxNzU4NjM2MDMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Ensino sistemático das doutrinas bíblicas para todas as idades.",
      category: "Educação"
    },
    {
      id: 12,
      title: "Culto Familiar",
      date: "Há 1 mês",
      participants: 35,
      duration: "30 min",
      image: "https://images.unsplash.com/photo-1565130936076-02149ea8c20e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjB3b3JzaGlwfGVufDF8fHx8MTc1ODYzNjAzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Momentos especiais de adoração e ensino em família na igreja.",
      category: "Família"
    },
    {
      id: 13,
      title: "Ministério Infantil",
      date: "Há 5 semanas",
      participants: 28,
      duration: "40 min",
      image: "https://images.unsplash.com/photo-1736878014266-cd69aaac14cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwYmlibGUlMjBzdHVkeXxlbnwxfHx8fDE3NTg2MzYwMzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Atividades educativas e divertidas para ensinar as crianças sobre Jesus.",
      category: "Infantil"
    },
    {
      id: 14,
      title: "Juventude em Ação",
      date: "Há 6 semanas",
      participants: 44,
      duration: "55 min",
      image: "https://images.unsplash.com/photo-1593896385987-16bcbf9451e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMG1pbmlzdHJ5fGVufDF8fHx8MTc1ODYzNjA0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Encontros dinâmicos com jovens focados no crescimento espiritual e missional.",
      category: "Juventude"
    }
  ];

  // Estudos destacados para o slideshow (primeiros 6)
  const featuredStudies = allStudyImages.slice(0, 6);
  
  // Determina quantas imagens mostrar na galeria - reduzido para melhorar performance
  const imagesToShow = showAllImages ? allStudyImages : allStudyImages.slice(0, 6);

  // Auto-play functionality para o slideshow
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredStudies.length);
    }, 5000); // Muda a cada 5 segundos (aumentado para reduzir carga)

    return () => clearInterval(interval);
  }, [isAutoPlay, featuredStudies.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredStudies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredStudies.length) % featuredStudies.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  const currentStudy = featuredStudies[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9F7F3] via-white to-[#F9F7F3]">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Camera className="w-10 h-10 text-[#2C5282]" />
            <h1 className="font-serif text-4xl md:text-5xl text-[#2D3748]">
              Galeria de Estudos
            </h1>
          </div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed mb-4">
            Reviva os momentos mais marcantes dos nossos estudos bíblicos, cultos e encontros de comunhão 
            através desta galeria visual que documenta nossa jornada de fé.
          </p>
          <div className="flex items-center justify-center gap-2 text-[#D69E2E]">
            <Heart className="w-5 h-5" />
            <span className="text-sm">Registrando momentos especiais da nossa igreja</span>
          </div>
        </div>
      </section>

      {/* Slideshow em Destaque */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl text-[#2D3748] mb-4">
              Momentos em Destaque
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Os estudos mais recentes e impactantes da nossa comunidade em apresentação automática
            </p>
          </div>

          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Main Image */}
            <div className="relative h-80 md:h-[400px] overflow-hidden">
              <ImageWithFallback
                src={currentStudy.image}
                alt={currentStudy.title}
                className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              
              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 text-white hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 text-white hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Auto-play Toggle */}
              <button
                onClick={toggleAutoPlay}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 text-white"
              >
                {isAutoPlay ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="max-w-3xl">
                  <Badge className="bg-[#D69E2E] hover:bg-[#D69E2E] text-white mb-3">
                    {currentStudy.category}
                  </Badge>
                  
                  <h3 className="font-serif text-2xl md:text-3xl text-white mb-3">
                    {currentStudy.title}
                  </h3>
                  
                  <p className="text-white/90 mb-4 leading-relaxed line-clamp-2">
                    {currentStudy.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{currentStudy.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{currentStudy.participants} participantes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{currentStudy.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {featuredStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-[#2C5282] scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Thumbnail Preview */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {featuredStudies.map((study, index) => (
              <button
                key={study.id}
                onClick={() => goToSlide(index)}
                className={`relative rounded-lg overflow-hidden aspect-video transition-all duration-300 ${
                  index === currentSlide 
                    ? 'ring-3 ring-[#2C5282] scale-105' 
                    : 'hover:scale-105 opacity-70 hover:opacity-100'
                }`}
              >
                <ImageWithFallback
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2">
                  <span className="text-white text-xs font-medium truncate">
                    {study.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria Principal */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Grid3x3 className="w-8 h-8 text-[#2C5282]" />
              <h2 className="font-serif text-3xl text-[#2D3748]">
                Galeria Completa
              </h2>
            </div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Explore todos os momentos registrados dos nossos estudos, cultos e atividades da igreja
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {imagesToShow.map((study) => (
              <Card 
                key={study.id} 
                className="group bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-0"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <ImageWithFallback
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay com informações */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="text-white">
                        <h3 className="font-serif text-lg mb-2 line-clamp-2">
                          {study.title}
                        </h3>
                        <p className="text-white/90 text-sm mb-3 leading-relaxed line-clamp-2">
                          {study.description}
                        </p>
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              <span>{study.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              <span>{study.participants}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{study.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <Badge className="absolute top-3 left-3 bg-[#D69E2E] hover:bg-[#D69E2E] text-white text-xs">
                    {study.category}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>

          {/* Botão Ver Mais/Menos */}
          <div className="text-center mt-12">
            <Button 
              onClick={() => setShowAllImages(!showAllImages)}
              variant="outline"
              className="border-[#2C5282] text-[#2C5282] hover:bg-[#2C5282] hover:text-white px-8"
            >
              {showAllImages ? (
                <>
                  Ver Menos Imagens
                  <ChevronDown className="w-4 h-4 ml-2 rotate-180" />
                </>
              ) : (
                <>
                  Ver Todas as Imagens
                  <ChevronDown className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </div>
      </section>



      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#2C5282] to-[#2A5A7A] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="font-serif text-3xl mb-4">
              Faça Parte da Nossa História
            </h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Junte-se à nossa comunidade e participe dos próximos momentos que serão registrados 
              nesta galeria de fé e comunhão.
            </p>
            
            <Button 
              onClick={() => onNavigate('modules')}
              className="bg-[#D69E2E] hover:bg-[#B7821D] text-white px-8"
            >
              Conhecer os Módulos de Estudo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}