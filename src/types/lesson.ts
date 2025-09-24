export interface LessonData {
  id: number;
  number: string;
  title: string;
  difficulty: string;
  estimatedTime: string;
  keyVerses: string[];
  content: string;
  reflectionQuestions: string[];
  forChildren: {
    summary: string;
    keyPoints: string[];
    conversationStarters: string[];
    familyActivity: {
      title: string;
      description: string;
    };
  };
}

export interface LessonPageProps {
  moduleId: number;
  onNavigate: (page: string, moduleId?: number) => void;
}
