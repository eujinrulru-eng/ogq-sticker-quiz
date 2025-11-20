import { z } from "zod";

// Quiz and Result Types
export interface QuizOption {
  text: string;
  nextQuestionId?: string;
  resultId?: string;
}

export interface QuizQuestion {
  id: string;
  text: string;
  options: QuizOption[];
}

export interface QuizResult {
  id: string;
  name: string;
  description: string;
  ogqLink: string;
  imagePath: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  emoji: string;
  color: string;
  questions: QuizQuestion[];
  results: QuizResult[];
}

// Quiz answer tracking
export interface QuizAnswer {
  questionId: string;
  optionIndex: number;
}
