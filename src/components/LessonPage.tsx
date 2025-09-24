import React, { useState, useMemo, useCallback } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import {
  ArrowLeft,
  BookOpen,
  Download,
  Heart,
  Users,
  MessageCircleQuestion,
  Lightbulb,
  CheckSquare,
} from "lucide-react";
import { MediaController } from "./MediaController";
import { generatePDF } from "./PDFGenerator";
import { LessonData, LessonPageProps } from "../types/lesson";

// Move lesson data outside component to avoid recreation
const LESSON_DATA: LessonData[] = [
  {
    id: 1,
    number: "01",
    title: "A Inspiração da Bíblia",
    difficulty: "Básico",
    estimatedTime: "40 minutos",
    keyVerses: [
      "Toda a Escritura é inspirada por Deus e útil para o ensino, para a repreensão, para a correção e para a instrução na justiça. - 2 Timóteo 3:16",
      "Porque a profecia nunca teve origem na vontade humana, mas homens santos falaram da parte de Deus, impelidos pelo Espírito Santo. - 2 Pedro 1:21",
    ],
    content: `
      <h3>A Autoridade Suprema da Palavra de Deus</h3>
      <p>A Bíblia é a revelação especial de Deus para a humanidade. Ela não é apenas um livro humano, mas a própria Palavra de Deus escrita através de homens inspirados pelo Espírito Santo.</p>
      
      <h3>O Processo de Inspiração</h3>
      <p>A inspiração bíblica significa que Deus orientou sobrenaturalmente os escritores da Bíblia, sem anular suas personalidades individuais, para que escrevessem exatamente o que Ele queria comunicar.</p>
      
      <h3>A Inerrância da Escritura</h3>
      <p>Por ser inspirada por Deus, a Bíblia é inerrante em seus manuscritos originais. Ela é nossa única regra infalível de fé e prática cristã.</p>
    `,
    reflectionQuestions: [
      "Como a inspiração da Bíblia fortalece sua confiança na Palavra de Deus?",
      "De que forma você pode aplicar 2 Timóteo 3:16 em sua vida diária?",
      "Qual o papel da Bíblia em sua tomada de decisões?",
    ],
    forChildren: {
      summary:
        "A Bíblia é um livro muito especial porque Deus ajudou os homens a escreverem exatamente o que Ele queria nos contar. É como se Deus fosse o verdadeiro autor da Bíblia.",
      keyPoints: [
        "Deus ajudou homens especiais a escrever a Bíblia",
        "Tudo que está na Bíblia é verdade",
        "A Bíblia nos ensina como viver",
        "Devemos ler e obedecer a Palavra de Deus",
      ],
      conversationStarters: [
        "Você sabia que Deus ajudou a escrever a Bíblia?",
        "Por que você acha que a Bíblia é diferente de outros livros?",
        "O que a Bíblia nos ensina sobre Deus?",
      ],
      familyActivity: {
        title: "Caça ao Tesouro Bíblico",
        description:
          "Procurem juntos versículos que falem sobre a Palavra de Deus. Cada vez que encontrarem um, escrevam em um papel colorido e colem na geladeira.",
      },
    },
  },
  {
    id: 2,
    number: "02",
    title: "O Deus Trino",
    difficulty: "Intermediário",
    estimatedTime: "45 minutos",
    keyVerses: [
      "Portanto, ide e fazei discípulos de todas as nações, batizando-os em nome do Pai, e do Filho, e do Espírito Santo. - Mateus 28:19",
      "A graça do Senhor Jesus Cristo, e o amor de Deus, e a comunhão do Espírito Santo sejam com todos vós. - 2 Coríntios 13:14",
    ],
    content: `
      <h3>Introdução à Doutrina da Trindade</h3>
      <p>A doutrina da Trindade é um dos fundamentos mais importantes da fé cristã. Ela nos ensina que Deus existe eternamente em três pessoas distintas - o Pai, o Filho (Jesus Cristo) e o Espírito Santo - mas que essas três pessoas são um só Deus verdadeiro.</p>
      
      <h3>O Pai, o Filho e o Espírito Santo</h3>
      <p>Embora seja um mistério que nossa mente humana não pode compreender completamente, a Bíblia claramente revela essa verdade.</p>
      
      <h3>Unidade na Diversidade</h3>
      <p>Embora sejam três pessoas distintas, elas compartilham a mesma essência divina. Não são três deuses, mas um só Deus em três pessoas.</p>
    `,
    reflectionQuestions: [
      "Como a doutrina da Trindade fortalece sua fé pessoal?",
      "De que maneira você pode experimentar a comunhão com cada pessoa da Trindade?",
      "Como essa verdade impacta sua vida de oração?",
    ],
    forChildren: {
      summary:
        "Deus é um só, mas Ele existe como três pessoas: o Pai (que nos ama), o Filho Jesus (que nos salvou) e o Espírito Santo (que vive em nosso coração).",
      keyPoints: [
        "Deus é um só, mas existe em três pessoas",
        "O Pai nos criou e nos ama muito",
        "Jesus morreu na cruz para nos salvar",
        "O Espírito Santo vive no coração de quem crê",
      ],
      conversationStarters: [
        "Você sabia que Deus tem três nomes especiais?",
        "Como podemos falar com Deus Pai, Jesus e o Espírito Santo?",
      ],
      familyActivity: {
        title: "Ilustração do Ovo",
        description:
          "Use um ovo para explicar a Trindade: a casca (Pai), a clara (Espírito Santo) e a gema (Jesus). Três partes diferentes, mas um só ovo.",
      },
    },
  },
  {
    id: 3,
    number: "03",
    title: "Jesus Cristo, o Salvador",
    difficulty: "Básico",
    estimatedTime: "40 minutos",
    keyVerses: [
      "Jesus disse: Eu sou o caminho, e a verdade, e a vida. Ninguém vem ao Pai senão por mim. - João 14:6",
      "Porque há um só Deus e um só mediador entre Deus e os homens, Jesus Cristo, homem. - 1 Timóteo 2:5",
    ],
    content: `
      <h3>A Pessoa de Jesus Cristo</h3>
      <p>Jesus Cristo é verdadeiro Deus e verdadeiro homem. Ele é a segunda pessoa da Trindade que se encarnou para nossa salvação.</p>
      
      <h3>A Obra Salvadora de Cristo</h3>
      <p>Jesus veio ao mundo para salvar os pecadores. Sua morte na cruz pagou o preço pelos nossos pecados, e sua ressurreição garante nossa vida eterna.</p>
      
      <h3>O Único Caminho para Deus</h3>
      <p>Jesus é o único mediador entre Deus e os homens. Não há salvação em nenhum outro nome.</p>
    `,
    reflectionQuestions: [
      "O que significa para você que Jesus é verdadeiro Deus e verdadeiro homem?",
      "Como a obra de Cristo na cruz transforma sua vida?",
      "De que forma você pode compartilhar sobre Jesus com outros?",
    ],
    forChildren: {
      summary:
        "Jesus é o Filho de Deus que veio do céu para nos salvar. Ele morreu na cruz pelos nossos pecados e ressuscitou para nos dar vida eterna.",
      keyPoints: [
        "Jesus é o Filho de Deus",
        "Ele morreu na cruz pelos nossos pecados",
        "Jesus ressuscitou no terceiro dia",
        "Ele é o único caminho para o céu",
      ],
      conversationStarters: [
        "Por que você acha que Jesus veio ao mundo?",
        "O que Jesus fez por você na cruz?",
      ],
      familyActivity: {
        title: "Linha do Tempo de Jesus",
        description:
          "Criem uma linha do tempo ilustrada da vida de Jesus, desde seu nascimento até a ressurreição.",
      },
    },
  },
  {
    id: 4,
    number: "04",
    title: "A Pecaminosidade do Homem",
    difficulty: "Básico",
    estimatedTime: "35 minutos",
    keyVerses: [
      "Todos pecaram e carecem da glória de Deus. - Romanos 3:23",
      "O salário do pecado é a morte, mas o dom gratuito de Deus é a vida eterna em Cristo Jesus, nosso Senhor. - Romanos 6:23",
    ],
    content: `
      <h3>A Origem do Pecado</h3>
      <p>O pecado entrou no mundo através da desobediência de Adão e Eva no Jardim do Éden. Desde então, todos os seres humanos nascem com uma natureza pecaminosa.</p>
      
      <h3>A Universalidade do Pecado</h3>
      <p>Não há exceções: todos pecaram e carecem da glória de Deus. Ninguém pode alcançar a salvação por méritos próprios.</p>
      
      <h3>As Consequências do Pecado</h3>
      <p>O pecado separa o homem de Deus e resulta em morte espiritual. Somente através de Jesus Cristo podemos ser reconciliados com Deus.</p>
    `,
    reflectionQuestions: [
      "Como a realidade do pecado afeta sua compreensão da necessidade de salvação?",
      "De que forma você reconhece a obra do pecado em sua própria vida?",
      "Como essa doutrina influencia sua atitude em relação a outros?",
    ],
    forChildren: {
      summary:
        "Todos nós fazemos coisas erradas (pecados) que deixam Deus triste. Por isso precisamos pedir perdão e aceitar Jesus como nosso Salvador.",
      keyPoints: [
        "Todos nós fazemos coisas erradas (pecamos)",
        "O pecado nos separa de Deus",
        "Não conseguimos ser perfeitos sozinhos",
        "Jesus pode nos perdoar e nos limpar",
      ],
      conversationStarters: [
        "Você já fez algo que sabia que estava errado?",
        "Por que você acha que precisamos pedir perdão?",
      ],
      familyActivity: {
        title: "Limpeza do Coração",
        description:
          "Use uma esponja suja e água limpa para mostrar como Jesus limpa nosso coração do pecado quando pedimos perdão.",
      },
    },
  },
  {
    id: 5,
    number: "05",
    title: "A Salvação pela Graça",
    difficulty: "Básico",
    estimatedTime: "40 minutos",
    keyVerses: [
      "Porque pela graça sois salvos, mediante a fé; e isto não vem de vós; é dom de Deus. - Efésios 2:8",
      "Não por obras de justiça praticadas por nós, mas segundo sua misericórdia, ele nos salvou. - Tito 3:5",
    ],
    content: `
      <h3>A Graça de Deus</h3>
      <p>A salvação é um dom gratuito de Deus. Não podemos ganhar ou merecer a salvação através de boas obras ou esforços próprios.</p>
      
      <h3>A Fé como Meio</h3>
      <p>Recebemos a salvação mediante a fé em Jesus Cristo. A fé é confiar completamente na obra de Cristo na cruz.</p>
      
      <h3>A Segurança da Salvação</h3>
      <p>Aqueles que verdadeiramente creem em Jesus têm a segurança de que são salvos e têm vida eterna.</p>
    `,
    reflectionQuestions: [
      "Como a compreensão da graça transforma sua relação com Deus?",
      "De que forma você pode expressar gratidão pela salvação recebida?",
      "Como você compartilharia o evangelho da graça com alguém?",
    ],
    forChildren: {
      summary:
        "Deus nos ama tanto que nos dá a salvação de presente. Não precisamos fazer nada para merecer, só acreditar em Jesus.",
      keyPoints: [
        "A salvação é um presente de Deus",
        "Não precisamos fazer nada para merecer",
        "Só precisamos crer em Jesus",
        "Deus nos ama muito",
      ],
      conversationStarters: [
        "Qual é o melhor presente que você já recebeu?",
        "Como você se sente sabendo que Deus te ama de graça?",
      ],
      familyActivity: {
        title: "Presentes da Graça",
        description:
          "Façam pequenos presentes uns para os outros sem motivo especial, explicando que assim é o amor de Deus por nós.",
      },
    },
  },
];

export const LessonPage = React.memo(function LessonPage({
  moduleId,
  onNavigate,
}: LessonPageProps) {
  // Optimized lesson data lookup
  const lessonData = useMemo(() => {
    return (
      LESSON_DATA.find((lesson) => lesson.id === moduleId) || LESSON_DATA[0]
    );
  }, [moduleId]);

  // PDF download function using jsPDF
  const handleDownloadPDF = useCallback(() => {
    try {
      generatePDF(lessonData);
    } catch (error) {
      console.error("Erro ao gerar PDF:", error);
      alert("Erro ao baixar material em PDF. Tente novamente.");
    }
  }, [lessonData]);

  return (
    <div className="min-h-screen bg-[#F9F7F3]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => onNavigate("modules")}
              className="text-[#2C5282] hover:bg-[#2C5282]/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar aos Módulos
            </Button>

            <div className="flex items-center gap-4">
              <Badge className="bg-yellow-100 text-yellow-800">
                {lessonData.difficulty}
              </Badge>
              <span className="text-sm text-gray-600">
                {lessonData.estimatedTime}
              </span>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center justify-center w-12 h-12 bg-[#2C5282] text-white rounded-lg font-serif">
                {lessonData.number}
              </div>
              <div>
                <h1 className="font-serif text-3xl text-[#2D3748]">
                  {lessonData.title}
                </h1>
                <p className="text-gray-600">
                  Módulo {lessonData.number} da Declaração de Fé
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Key Verses */}
            <Card className="bg-[#D69E2E]/10 border-[#D69E2E]/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#2D3748]">
                  <BookOpen className="w-5 h-5" />
                  Versículos-Chave
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {lessonData.keyVerses.map((verse, index) => (
                  <p
                    key={index}
                    className="text-[#2D3748] italic border-l-4 border-[#D69E2E] pl-4"
                  >
                    {verse}
                  </p>
                ))}
              </CardContent>
            </Card>

            {/* Media Player */}
            <MediaController
              title={lessonData.title}
              videoUrl="https://www.youtube.com/embed/9CqwnIDoD5s"
            />

            {/* Lesson Content */}
            <Card>
              <CardHeader>
                <CardTitle className="text-[#2D3748]">
                  Conteúdo da Lição
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  className="prose prose-lg max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{
                    __html: lessonData.content,
                  }}
                />
              </CardContent>
            </Card>

            {/* Reflection Questions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#2D3748]">
                  <MessageCircleQuestion className="w-5 h-5" />
                  Questões para Reflexão
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {lessonData.reflectionQuestions.map((question, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center justify-center w-6 h-6 bg-[#2C5282] text-white rounded-full text-sm flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-gray-700">{question}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Tools for Parents */}
          <div className="space-y-6">
            <Card className="bg-[#2C5282]/5 border-[#2C5282]/20">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-[#2D3748] text-lg">
                  <Heart className="w-5 h-5" />
                  Ensine seus Filhos
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Ferramentas práticas para pais
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Summary for Children */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#2D3748] text-lg">
                  <Lightbulb className="w-5 h-5" />
                  Resumo Simplificado
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  {lessonData.forChildren.summary}
                </p>
              </CardContent>
            </Card>

            {/* Key Points for Children */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#2D3748] text-lg">
                  <CheckSquare className="w-5 h-5" />
                  Pontos Principais para Crianças
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {lessonData.forChildren.keyPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-5 h-5 bg-[#2C5282] text-white rounded-full text-xs flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 text-sm">{point}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Conversation Starters */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#2D3748] text-lg">
                  <MessageCircleQuestion className="w-5 h-5" />
                  Perguntas para Iniciar a Conversa
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {lessonData.forChildren.conversationStarters.map(
                    (question, index) => (
                      <div
                        key={index}
                        className="p-3 bg-[#D69E2E]/10 rounded-lg"
                      >
                        <p className="text-gray-700 text-sm italic">
                          "{question}"
                        </p>
                      </div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Family Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#2D3748] text-lg">
                  <Users className="w-5 h-5" />
                  Atividade em Família
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-[#2D3748] mb-2">
                  {lessonData.forChildren.familyActivity.title}
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {lessonData.forChildren.familyActivity.description}
                </p>
              </CardContent>
            </Card>

            {/* Download Material */}
            <Card className="bg-[#D69E2E]/10 border-[#D69E2E]/30">
              <CardContent className="pt-6">
                <Button
                  className="w-full bg-[#D69E2E] hover:bg-[#C69500] text-white"
                  size="lg"
                  onClick={handleDownloadPDF}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Baixar Material em PDF
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
});
