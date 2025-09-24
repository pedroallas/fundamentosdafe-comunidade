import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { CheckCircle, Circle, BookOpen, Cross, Heart, Globe, Users, Shield, Zap, Crown, ArrowRight, Calendar, Star } from "lucide-react";

interface ModulesPageProps {
  onNavigate: (page: string, moduleId?: number) => void;
  completedModules: number[];
  onToggleCompletion: (moduleId: number) => void;
}

export function ModulesPage({ onNavigate, completedModules, onToggleCompletion }: ModulesPageProps) {
  const modules = [
    {
      id: 1,
      number: "01",
      title: "A Inspiração da Bíblia",
      description: "A Palavra de Deus como autoridade suprema e guia infalível para a vida cristã.",
      keyVerse: "Toda a Escritura é inspirada por Deus - 2 Timóteo 3:16",
      icon: <BookOpen className="w-6 h-6" />,
      difficulty: "Básico"
    },
    {
      id: 2,
      number: "02",
      title: "O Deus Trino",
      description: "A doutrina da Trindade: Um Deus em três pessoas distintas - Pai, Filho e Espírito Santo.",
      keyVerse: "Portanto, ide e fazei discípulos - Mateus 28:19",
      icon: <Cross className="w-6 h-6" />,
      difficulty: "Intermediário"
    },
    {
      id: 3,
      number: "03",
      title: "Jesus Cristo, o Salvador",
      description: "A pessoa e obra de Cristo: verdadeiro Deus e verdadeiro homem, nosso único Salvador.",
      keyVerse: "Jesus disse: Eu sou o caminho - João 14:6",
      icon: <Heart className="w-6 h-6" />,
      difficulty: "Básico"
    },
    {
      id: 4,
      number: "04",
      title: "A Pecaminosidade do Homem",
      description: "A condição humana após a queda e nossa total dependência da graça divina.",
      keyVerse: "Todos pecaram e carecem da glória de Deus - Romanos 3:23",
      icon: <Globe className="w-6 h-6" />,
      difficulty: "Básico"
    },
    {
      id: 5,
      number: "05",
      title: "A Salvação pela Graça",
      description: "O plano divino de redenção através da fé em Jesus Cristo, não por obras.",
      keyVerse: "Pela graça sois salvos, mediante a fé - Efésios 2:8",
      icon: <Shield className="w-6 h-6" />,
      difficulty: "Básico"
    },
    {
      id: 6,
      number: "06",
      title: "O Batismo nas Águas",
      description: "O simbolismo e importância do batismo por imersão para o novo convertido.",
      keyVerse: "Quem crer e for batizado será salvo - Marcos 16:16",
      icon: <Users className="w-6 h-6" />,
      difficulty: "Básico"
    },
    {
      id: 7,
      number: "07",
      title: "O Batismo no Espírito Santo",
      description: "A promessa do revestimento de poder e os dons espirituais para a igreja.",
      keyVerse: "Recebereis poder ao descer sobre vós o Espírito Santo - Atos 1:8",
      icon: <Zap className="w-6 h-6" />,
      difficulty: "Intermediário"
    },
    {
      id: 8,
      number: "08",
      title: "A Santificação",
      description: "O processo contínuo de separação do pecado e crescimento na semelhança de Cristo.",
      keyVerse: "Segui a paz e a santificação - Hebreus 12:14",
      icon: <Star className="w-6 h-6" />,
      difficulty: "Intermediário"
    },
    {
      id: 9,
      number: "09",
      title: "A Igreja de Cristo",
      description: "A natureza, propósito e missão da igreja como corpo de Cristo na Terra.",
      keyVerse: "Edificarei a minha igreja - Mateus 16:18",
      icon: <Users className="w-6 h-6" />,
      difficulty: "Básico"
    },
    {
      id: 10,
      number: "10",
      title: "A Segunda Vinda de Cristo",
      description: "A esperança bendita do retorno glorioso de Jesus Cristo para buscar sua igreja.",
      keyVerse: "Este Jesus voltará da mesma forma - Atos 1:11",
      icon: <Crown className="w-6 h-6" />,
      difficulty: "Avançado"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Básico": return "bg-green-100 text-green-800";
      case "Intermediário": return "bg-yellow-100 text-yellow-800";
      case "Avançado": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const completedCount = completedModules.length;
  const progressPercentage = (completedCount / modules.length) * 100;

  return (
    <div className="min-h-screen bg-[#F9F7F3] py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl text-[#2D3748] mb-4">
            Módulos da Declaração de Fé
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Estude os fundamentos da fé cristã e aprenda a ensinar seus filhos
          </p>
          
          {/* Progress */}
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Seu Progresso</span>
              <span className="text-sm text-[#2C5282]">{completedCount}/{modules.length} módulos</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-[#2C5282] h-2 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <Card 
              key={module.id} 
              className="bg-white shadow-lg hover:shadow-xl transition-all cursor-pointer group border-l-4 border-[#2C5282]"
              onClick={() => onNavigate('lesson', module.id)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#2C5282] text-white rounded-lg font-serif">
                      {module.number}
                    </div>
                    <div className="flex-1">
                      <Badge className={`mb-2 ${getDifficultyColor(module.difficulty)}`}>
                        {module.difficulty}
                      </Badge>
                      <CardTitle className="font-serif text-lg text-[#2D3748] group-hover:text-[#2C5282] transition-colors leading-tight">
                        {module.title}
                      </CardTitle>
                    </div>
                  </div>
                  
                  <div 
                    className="flex items-center gap-2 cursor-pointer p-1 rounded-full hover:bg-gray-100 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleCompletion(module.id);
                    }}
                    title={completedModules.includes(module.id) ? "Marcar como não concluído" : "Marcar como concluído"}
                  >
                    {completedModules.includes(module.id) ? (
                      <CheckCircle className="w-6 h-6 text-green-600 hover:text-green-700 transition-colors" />
                    ) : (
                      <Circle className="w-6 h-6 text-gray-400 hover:text-green-500 transition-colors" />
                    )}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                  {module.description}
                </CardDescription>
                
                <div className="bg-[#D69E2E]/10 p-3 rounded-lg mb-4">
                  <p className="text-sm text-[#2D3748]">
                    <strong>Versículo-chave:</strong> {module.keyVerse}
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2 text-[#2C5282]">
                    {module.icon}
                    <span className="text-sm">Estudar Módulo</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#2C5282] transition-colors" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Study Tips */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-sm">
          <h2 className="font-serif text-2xl text-[#2D3748] mb-6 text-center">
            Dicas para o Estudo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Calendar className="w-8 h-8 text-[#2C5282] mx-auto mb-3" />
              <h3 className="font-serif text-lg text-[#2D3748] mb-2">Estabeleça uma Rotina</h3>
              <p className="text-gray-600 text-sm">Dedique um tempo regular para o estudo, preferencialmente no mesmo horário cada dia.</p>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 text-[#2C5282] mx-auto mb-3" />
              <h3 className="font-serif text-lg text-[#2D3748] mb-2">Estude em Família</h3>
              <p className="text-gray-600 text-sm">Inclua sua família no processo de aprendizado, compartilhando insights e experiências.</p>
            </div>
            <div className="text-center">
              <BookOpen className="w-8 h-8 text-[#2C5282] mx-auto mb-3" />
              <h3 className="font-serif text-lg text-[#2D3748] mb-2">Anote e Reflita</h3>
              <p className="text-gray-600 text-sm">Mantenha um caderno de anotações para registrar aprendizados e reflexões pessoais.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}