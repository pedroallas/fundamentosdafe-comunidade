import jsPDF from "jspdf";
import { LessonData } from "../types/lesson";

export function generatePDF(lessonData: LessonData): void {
  try {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    const lineHeight = 7; // Aumentado para fonte 12
    let yPosition = margin;

    // Definir Arial como fonte padrão sempre
    doc.setFont("Arial", "normal");

    // Cores simples e funcionais
    const azulPrincipal = [44, 82, 130]; // #2C5282
    const amareloDestaque = [214, 158, 46]; // #D69E2E
    const azulClaro = [235, 244, 255]; // #EBF4FF
    const amareloClaro = [255, 250, 240]; // #FFFAF0
    const cinzaClaro = [247, 250, 252]; // #F7FAFC
    const verdeClaro = [240, 255, 244]; // #F0FFF4
    const textoEscuro = [45, 55, 72]; // #2D3748
    const textoMedio = [74, 85, 104]; // #4A5568
    const textoClaro = [113, 128, 150]; // #718096

    // Função para quebrar texto
    const quebrarTexto = (texto: string, larguraMax: number): string[] => {
      return doc.splitTextToSize(texto, larguraMax);
    };

    // Função para verificar quebra de página (mais restritiva)
    const verificarQuebraPagina = (altura: number = 40) => {
      if (yPosition + altura > pageHeight - 25) {
        doc.addPage();
        yPosition = margin;
        doc.setFont("Arial", "normal");
      }
    };

    // Função para desenhar caixa colorida
    const desenharCaixa = (
      x: number,
      y: number,
      largura: number,
      altura: number,
      corPreenchimento: number[]
    ) => {
      doc.setFillColor(
        corPreenchimento[0],
        corPreenchimento[1],
        corPreenchimento[2]
      );
      doc.rect(x, y, largura, altura, "F");
    };

    // Função para adicionar título de seção
    const adicionarTituloSecao = (titulo: string, espacamento: number = 15) => {
      verificarQuebraPagina(50); // Verificar se há espaço suficiente
      yPosition += espacamento;

      doc.setTextColor(azulPrincipal[0], azulPrincipal[1], azulPrincipal[2]);
      doc.setFontSize(16); // Título um pouco maior
      doc.setFont("Arial", "bold");
      doc.text(titulo, margin, yPosition);
      yPosition += 15;
    };

    // Função para rodapé
    const adicionarRodape = () => {
      doc.setTextColor(textoClaro[0], textoClaro[1], textoClaro[2]);
      doc.setFontSize(10); // Fonte 10 para rodapé
      doc.setFont("Arial", "normal");
      doc.text(
        "Material de Apoio - Ensinando a Proxima Geracao",
        pageWidth / 2,
        pageHeight - 15,
        { align: "center" }
      );
    };

    // ================= CABECALHO =================
    doc.setTextColor(azulPrincipal[0], azulPrincipal[1], azulPrincipal[2]);
    doc.setFontSize(20);
    doc.setFont("Arial", "bold");
    doc.text("MATERIAL DE APOIO", pageWidth / 2, yPosition, {
      align: "center",
    });
    yPosition += 10;

    doc.setTextColor(textoMedio[0], textoMedio[1], textoMedio[2]);
    doc.setFontSize(12); // Fonte 12
    doc.setFont("Arial", "normal");
    doc.text("Ensinando a Proxima Geracao", pageWidth / 2, yPosition, {
      align: "center",
    });
    yPosition += 8;

    doc.setFontSize(14); // Título principal um pouco maior
    doc.setFont("Arial", "bold");
    doc.text(
      `Modulo ${lessonData.number}: ${lessonData.title}`,
      pageWidth / 2,
      yPosition,
      { align: "center" }
    );
    yPosition += 15;

    // Badge de dificuldade
    const larguraBadge = 65;
    const alturaBadge = 8;
    const xBadge = (pageWidth - larguraBadge) / 2;
    desenharCaixa(
      xBadge,
      yPosition - 2,
      larguraBadge,
      alturaBadge,
      amareloDestaque
    );

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(10); // Fonte do badge um pouco maior
    doc.setFont("Arial", "bold");
    doc.text(
      `${lessonData.difficulty} • ${lessonData.estimatedTime}`,
      pageWidth / 2,
      yPosition + 2,
      { align: "center" }
    );
    yPosition += 20;

    // Linha divisoria
    doc.setDrawColor(azulPrincipal[0], azulPrincipal[1], azulPrincipal[2]);
    doc.setLineWidth(0.8);
    doc.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 15;

    // ================= VERSICULOS-CHAVE =================
    adicionarTituloSecao("VERSICULOS-CHAVE", 5);

    // Calcular altura dos versiculos
    let alturaVersiculos = 12;
    lessonData.keyVerses.forEach((versiculo) => {
      const linhas = quebrarTexto(
        `"${versiculo}"`,
        pageWidth - 2 * margin - 20
      );
      alturaVersiculos += linhas.length * lineHeight + 6;
    });

    // Caixa de fundo amarela
    desenharCaixa(
      margin,
      yPosition,
      pageWidth - 2 * margin,
      alturaVersiculos,
      amareloClaro
    );

    // Borda lateral amarela
    doc.setDrawColor(
      amareloDestaque[0],
      amareloDestaque[1],
      amareloDestaque[2]
    );
    doc.setLineWidth(2.5);
    doc.line(margin, yPosition, margin, yPosition + alturaVersiculos);

    yPosition += 8;
    doc.setTextColor(textoEscuro[0], textoEscuro[1], textoEscuro[2]);
    doc.setFontSize(12); // Fonte 12 para versículos
    doc.setFont("Arial", "italic");

    lessonData.keyVerses.forEach((versiculo, index) => {
      const linhasVersiculo = quebrarTexto(
        `"${versiculo}"`,
        pageWidth - 2 * margin - 20
      );
      linhasVersiculo.forEach((linha) => {
        doc.text(linha, margin + 12, yPosition);
        yPosition += lineHeight;
      });
      if (index < lessonData.keyVerses.length - 1) yPosition += 6;
    });

    yPosition += 20;

    // ================= RESUMO PARA CRIANCAS =================
    adicionarTituloSecao("RESUMO PARA CRIANCAS");

    const linhasResumo = quebrarTexto(
      lessonData.forChildren.summary,
      pageWidth - 2 * margin - 16
    );
    const alturaResumo = linhasResumo.length * lineHeight + 16;

    desenharCaixa(
      margin,
      yPosition,
      pageWidth - 2 * margin,
      alturaResumo,
      cinzaClaro
    );

    yPosition += 8;
    doc.setTextColor(textoEscuro[0], textoEscuro[1], textoEscuro[2]);
    doc.setFontSize(12); // Fonte 12 para resumo
    doc.setFont("Arial", "normal");

    linhasResumo.forEach((linha) => {
      doc.text(linha, margin + 8, yPosition);
      yPosition += lineHeight;
    });

    yPosition += 20;

    // ================= PONTOS PRINCIPAIS =================
    adicionarTituloSecao("PONTOS PRINCIPAIS PARA ENSINAR");

    doc.setTextColor(textoEscuro[0], textoEscuro[1], textoEscuro[2]);
    doc.setFontSize(12); // Fonte 12 para pontos principais
    doc.setFont("Arial", "normal");

    lessonData.forChildren.keyPoints.forEach((ponto, index) => {
      verificarQuebraPagina(12);
      const linhasPonto = quebrarTexto(
        `${index + 1}. ${ponto}`,
        pageWidth - 2 * margin - 8
      );
      linhasPonto.forEach((linha, indiceLinha) => {
        doc.text(linha, margin + (indiceLinha === 0 ? 0 : 10), yPosition);
        yPosition += lineHeight;
      });
      yPosition += 4;
    });

    // ================= QUESTOES PARA REFLEXAO (sem nova página automática) =================
    adicionarTituloSecao("QUESTOES PARA REFLEXAO PESSOAL", 25);

    lessonData.reflectionQuestions.forEach((pergunta, index) => {
      verificarQuebraPagina(40);

      const linhasPergunta = quebrarTexto(
        `${index + 1}. ${pergunta}`,
        pageWidth - 2 * margin - 16
      );
      const alturaPergunta = linhasPergunta.length * lineHeight + 16;

      desenharCaixa(
        margin,
        yPosition,
        pageWidth - 2 * margin,
        alturaPergunta,
        azulClaro
      );

      yPosition += 8;
      doc.setTextColor(textoEscuro[0], textoEscuro[1], textoEscuro[2]);
      doc.setFontSize(12); // Fonte 12 para questões
      doc.setFont("Arial", "bold");

      linhasPergunta.forEach((linha) => {
        doc.text(linha, margin + 8, yPosition);
        yPosition += lineHeight;
      });

      yPosition += 8;
      doc.setTextColor(textoClaro[0], textoClaro[1], textoClaro[2]);
      doc.setFontSize(10); // Fonte 10 para "espaço para anotações"
      doc.setFont("Arial", "italic");
      doc.text("Espaco para anotacoes:", margin + 8, yPosition);

      yPosition += 4;
      doc.setDrawColor(200, 200, 200);
      doc.setLineWidth(0.2);
      for (let i = 0; i < 3; i++) {
        doc.line(margin + 8, yPosition, pageWidth - margin - 8, yPosition);
        yPosition += 5;
      }

      yPosition += 12;
    });

    // ================= PERGUNTAS PARA FILHOS =================
    adicionarTituloSecao("PERGUNTAS PARA CONVERSAR COM OS FILHOS");

    doc.setTextColor(textoEscuro[0], textoEscuro[1], textoEscuro[2]);
    doc.setFontSize(12); // Fonte 12 para perguntas
    doc.setFont("Arial", "normal");

    lessonData.forChildren.conversationStarters.forEach((iniciador, index) => {
      verificarQuebraPagina(20); // Aumentei um pouco para fonte maior
      const linhasIniciador = quebrarTexto(
        `${index + 1}. ${iniciador}`,
        pageWidth - 2 * margin - 8
      );
      linhasIniciador.forEach((linha, indiceLinha) => {
        doc.text(linha, margin + (indiceLinha === 0 ? 0 : 10), yPosition);
        yPosition += lineHeight;
      });
      yPosition += 6;
    });

    // ================= ATIVIDADE EM FAMILIA =================
    adicionarTituloSecao("ATIVIDADE EM FAMILIA");

    const alturaAtividade = 60;
    desenharCaixa(
      margin,
      yPosition,
      pageWidth - 2 * margin,
      alturaAtividade,
      verdeClaro
    );

    // Borda verde
    doc.setDrawColor(144, 238, 144);
    doc.setLineWidth(1);
    doc.rect(margin, yPosition, pageWidth - 2 * margin, alturaAtividade);

    yPosition += 10;
    doc.setTextColor(textoEscuro[0], textoEscuro[1], textoEscuro[2]);
    doc.setFontSize(12); // Fonte 12 para título da atividade
    doc.setFont("Arial", "bold");
    doc.text(
      lessonData.forChildren.familyActivity.title,
      margin + 8,
      yPosition
    );

    yPosition += 8;
    doc.setFontSize(12); // Fonte 12 para descrição da atividade
    doc.setFont("Arial", "normal");
    const linhasAtividade = quebrarTexto(
      lessonData.forChildren.familyActivity.description,
      pageWidth - 2 * margin - 16
    );
    linhasAtividade.forEach((linha) => {
      doc.text(linha, margin + 8, yPosition);
      yPosition += lineHeight;
    });

    // Adicionar rodape
    adicionarRodape();

    // Salvar PDF
    doc.save(
      `modulo-${lessonData.number}-${lessonData.title.replace(/\s+/g, "-")}.pdf`
    );
  } catch (error) {
    console.error("Erro ao gerar PDF:", error);
    alert("Erro ao gerar o PDF. Verifique o console para mais detalhes.");
  }
}
