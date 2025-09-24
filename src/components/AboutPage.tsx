import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./ui/image-with-fallback";
import {
  Book,
  Heart,
  Users,
  Target,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9F7F3] via-white to-[#F9F7F3]">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl text-[#2D3748] mb-6">
                Sobre o Projeto
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                "Fundamentos da Fé: Ensinando a Próxima Geração" é uma
                iniciativa da Assembleia de Deus ADSETA Araguaína, dedicada a
                capacitar pais e educadores cristãos no ensino dos fundamentos
                doutrinários da fé cristã para crianças e jovens.
              </p>
              <Button
                onClick={() => onNavigate("modules")}
                className="bg-[#2C5282] hover:bg-[#2A5A7A] text-white px-8"
              >
                Explorar Módulos
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1523054147397-21c07b58c90e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBlZHVjYXRpb258ZW58MXx8fHwxNzU4NjM0NjA2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Educação cristã"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl text-[#2D3748] mb-4">
              Nossa Missão
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Facilitar o ensino da Declaração de Fé da Assembleia de Deus
              através de recursos educacionais práticos e acessíveis para toda a
              família.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
              <CardContent className="p-8 text-center">
                <div className="bg-[#2C5282]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Book className="w-8 h-8 text-[#2C5282]" />
                </div>
                <h3 className="font-serif text-xl text-[#2D3748] mb-4">
                  Educação Bíblica
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Fornecemos conteúdo baseado na Palavra de Deus e na tradição
                  assembleiana para formar uma base sólida na fé.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
              <CardContent className="p-8 text-center">
                <div className="bg-[#D69E2E]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-[#D69E2E]" />
                </div>
                <h3 className="font-serif text-xl text-[#2D3748] mb-4">
                  Amor Familiar
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Fortalecemos os laços familiares através do estudo conjunto
                  das Escrituras e da oração em família.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
              <CardContent className="p-8 text-center">
                <div className="bg-[#2C5282]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-[#2C5282]" />
                </div>
                <h3 className="font-serif text-xl text-[#2D3748] mb-4">
                  Comunidade
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Construímos uma comunidade de pais e educadores comprometidos
                  com o crescimento espiritual das próximas gerações.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1491440091121-b546925dc8a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBmYWl0aCUyMHRlYWNoaW5nfGVufDF8fHx8MTc1ODYzNDYwOXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Ensino familiar"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>

            <div>
              <h2 className="font-serif text-3xl text-[#2D3748] mb-6">
                Nossos Valores
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-[#2C5282] w-2 h-2 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-serif text-lg text-[#2D3748] mb-2">
                      Fidelidade Bíblica
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Todo nosso conteúdo está fundamentado na Palavra de Deus e
                      alinhado com a Declaração de Fé da Assembleia de Deus.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-[#D69E2E] w-2 h-2 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-serif text-lg text-[#2D3748] mb-2">
                      Simplicidade Prática
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Apresentamos verdades profundas de forma simples e
                      aplicável para o dia a dia das famílias cristãs.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-[#2C5282] w-2 h-2 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-serif text-lg text-[#2D3748] mb-2">
                      Amor e Cuidado
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Priorizamos um ambiente de amor, paciência e cuidado no
                      processo de ensino e aprendizagem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-[#2D3748] mb-6">
            Nossos Objetivos
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="text-left">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#2C5282] w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-medium">1</span>
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[#2D3748] mb-2">
                    Capacitar Pais e Educadores
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Equipar pais e líderes com ferramentas práticas para o
                    ensino eficaz da doutrina cristã.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#D69E2E] w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-medium">2</span>
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[#2D3748] mb-2">
                    Formar uma Geração Firme
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Contribuir para a formação de jovens com base sólida nos
                    fundamentos da fé cristã.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-left">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#2C5282] w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-medium">3</span>
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[#2D3748] mb-2">
                    Fortalecer a Igreja
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Edificar a Igreja de Cristo através do ensino consistente e
                    da formação de discípulos maduros.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#D69E2E] w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-medium">4</span>
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[#2D3748] mb-2">
                    Promover Unidade Familiar
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Fomentar momentos de estudo e oração que aproximem as
                    famílias em torno da Palavra de Deus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#2C5282] to-[#2A5A7A] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="font-serif text-3xl mb-4">Participe Desta Missão</h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Junte-se a nós nesta importante missão de formar as próximas
              gerações nos fundamentos da fé cristã.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center gap-2 text-blue-100">
                <Mail className="w-5 h-5" />
                <span>contato@fundamentosdafe.org</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <Phone className="w-5 h-5" />
                <span>(11) 99999-9999</span>
              </div>
            </div>

            <div className="mt-8">
              <Button
                onClick={() => onNavigate("modules")}
                className="bg-[#D69E2E] hover:bg-[#B7821D] text-white px-8"
              >
                Começar Agora
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
