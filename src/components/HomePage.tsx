import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Book, Heart, Users, ArrowRight, BookOpen, Cross, Globe } from "lucide-react";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const featuredModules = [
    {
      id: 1,
      icon: <BookOpen className="w-8 h-8 text-[#2C5282]" />,
      title: "A Inspiração da Bíblia",
      description: "Entenda como a Palavra de Deus foi inspirada e sua autoridade em nossas vidas.",
      summary: "A Bíblia é a revelação divina escrita por homens inspirados pelo Espírito Santo."
    },
    {
      id: 2,
      icon: <Cross className="w-8 h-8 text-[#2C5282]" />,
      title: "O Deus Trino",
      description: "Explore o mistério da Trindade: Pai, Filho e Espírito Santo em unidade.",
      summary: "Deus existe em três pessoas distintas, mas é um só Deus verdadeiro."
    },
    {
      id: 3,
      icon: <Heart className="w-8 h-8 text-[#2C5282]" />,
      title: "Jesus Cristo, o Salvador",
      description: "Descubra a pessoa e obra de Jesus Cristo como nosso único Salvador.",
      summary: "Jesus é verdadeiro Deus e verdadeiro homem, o único caminho para a salvação."
    },
    {
      id: 4,
      icon: <Globe className="w-8 h-8 text-[#2C5282]" />,
      title: "A Pecaminosidade do Homem",
      description: "Compreenda a condição humana após a queda e nossa necessidade de redenção.",
      summary: "Todos os seres humanos nasceram em pecado e precisam do perdão de Deus."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#F9F7F3] to-white py-20 px-4">
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl md:text-6xl text-[#2D3748] mb-6">
              Fundamentos da Fé
            </h1>
            <h2 className="text-xl md:text-2xl text-[#2D3748] mb-8 leading-relaxed">
              Um guia de estudo da Declaração de Fé para pais que discipulam
            </h2>
            <Button 
              size="lg" 
              className="bg-[#2C5282] hover:bg-[#2A4D7A] text-white px-8 py-3 rounded-lg"
              onClick={() => onNavigate('modules')}
            >
              Começar o Estudo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-[#2D3748] mb-6">
            Capacitando Pais para Discipular
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Este projeto foi desenvolvido para equipar pais e responsáveis com um conhecimento 
            profundo da Declaração de Fé das Assembleias de Deus. Nosso objetivo é que você 
            compreenda as doutrinas fundamentais da fé cristã e seja capaz de ensiná-las de 
            forma simples e acessível aos seus filhos.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <Book className="w-12 h-12 text-[#2C5282] mx-auto mb-4" />
              <h3 className="font-serif text-xl text-[#2D3748] mb-2">Estudo Profundo</h3>
              <p className="text-gray-600">Conteúdo teológico sólido baseado na Declaração de Fé</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-[#2C5282] mx-auto mb-4" />
              <h3 className="font-serif text-xl text-[#2D3748] mb-2">Para a Família</h3>
              <p className="text-gray-600">Ferramentas práticas para ensinar as crianças</p>
            </div>
            <div className="text-center">
              <Heart className="w-12 h-12 text-[#2C5282] mx-auto mb-4" />
              <h3 className="font-serif text-xl text-[#2D3748] mb-2">Crescimento Espiritual</h3>
              <p className="text-gray-600">Fortalecimento da fé através do conhecimento</p>
            </div>
          </div>
        </div>
      </section>

      {/* Módulos em Destaque */}
      <section className="py-16 px-4 bg-[#F9F7F3]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-[#2D3748] mb-4">
              Módulos em Destaque
            </h2>
            <p className="text-lg text-gray-600">
              Comece sua jornada com estes fundamentos essenciais da fé cristã
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredModules.map((module) => (
              <Card 
                key={module.id} 
                className="bg-white shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
                onClick={() => onNavigate('lesson', module.id)}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-[#F9F7F3] rounded-full w-fit">
                    {module.icon}
                  </div>
                  <CardTitle className="font-serif text-lg text-[#2D3748] group-hover:text-[#2C5282] transition-colors">
                    {module.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {module.description}
                  </CardDescription>
                  <div className="bg-[#D69E2E]/10 p-3 rounded-lg">
                    <p className="text-sm text-[#2D3748]">
                      <strong>Resumo:</strong> {module.summary}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="border-[#2C5282] text-[#2C5282] hover:bg-[#2C5282] hover:text-white"
              onClick={() => onNavigate('modules')}
            >
              Ver Todos os Módulos
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}