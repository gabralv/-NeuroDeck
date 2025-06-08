import { create } from 'zustand';

export const useStore = create((set) => ({
  step: 0,
  answers: [],
  resultGenerated: false,
  traits: {},
  nextStep: (answer) => set((state) => {
    const newAnswers = [...state.answers, answer];
    const newStep = state.step + 1;
    const resultGenerated = newStep >= questions.length;
    const traits = resultGenerated ? calculateTraits(newAnswers) : {};
    return { step: newStep, answers: newAnswers, resultGenerated, traits };
  })
}));

export const questions = [
  { question: 'Você se considera mais racional ou emocional?', options: ['Racional', 'Emocional'] },
  { question: 'Você prefere trabalhar sozinho ou em equipe?', options: ['Sozinho', 'Em equipe'] },
  { question: 'Você lida bem com pressão?', options: ['Sim', 'Não'] },
  { question: 'Você é mais introvertido ou extrovertido?', options: ['Introvertido', 'Extrovertido'] },
];

function calculateTraits(answers) {
  return {
    racionalidade: answers[0] === 'Racional' ? 80 : 40,
    sociabilidade: answers[1] === 'Em equipe' ? 75 : 45,
    pressão: answers[2] === 'Sim' ? 85 : 30,
    introversão: answers[3] === 'Introvertido' ? 90 : 20,
  };
}
