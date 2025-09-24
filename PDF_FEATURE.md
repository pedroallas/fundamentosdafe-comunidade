# Funcionalidade de Download em PDF

## O que foi implementado

A funcionalidade de download do material de apoio agora gera um arquivo PDF real ao invés de um arquivo de texto simples.

## Principais melhorias

### 1. Gerador de PDF Real

- Utiliza a biblioteca `jsPDF` para criar documentos PDF formatados
- Quebra automática de páginas quando o conteúdo é muito extenso
- Formatação profissional com tipografia hierárquica

### 2. Conteúdo Estruturado

O PDF inclui todas as seções do material de apoio:

- **Cabeçalho** com título do módulo e informações básicas
- **Versículos-chave** formatados com marcadores
- **Resumo para crianças** em linguagem simplificada
- **Pontos principais para ensinar** numerados
- **Perguntas para reflexão** para aprofundamento
- **Perguntas para conversar com os filhos** como iniciadores de diálogo
- **Atividade em família** com título e descrição detalhada
- **Rodapé** com informações de copyright

### 3. Formatação Profissional

- Uso de diferentes tamanhos de fonte para hierarquia visual
- Quebra automática de texto para evitar cortes
- Margens e espaçamentos adequados
- Quebra de página inteligente para manter conteúdo relacionado junto

### 4. Nome de Arquivo Intuitivo

- O arquivo é salvo com o nome `Fundamentos_da_Fe_Modulo_XX.pdf`
- Onde XX é o número do módulo

## Como usar

1. Navegue até qualquer lição dentro dos módulos
2. No painel lateral direito, na seção "Ensine seus Filhos"
3. Clique no botão "Baixar Material em PDF"
4. O arquivo PDF será automaticamente baixado para sua pasta de downloads

## Benefícios para o usuário

- **Material impresso de qualidade** para uso offline
- **Formatação profissional** adequada para compartilhamento
- **Conteúdo estruturado** facilitando o estudo e ensino
- **Formato universal** que pode ser aberto em qualquer dispositivo
- **Tamanho otimizado** para impressão em papel A4

## Tecnologias utilizadas

- **jsPDF**: Biblioteca JavaScript para geração de PDFs
- **TypeScript**: Tipagem forte para melhor manutenibilidade
- **React**: Interface reativa e componentizada
