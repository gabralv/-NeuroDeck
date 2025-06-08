import { useStore, questions } from '../store';

export default function QuestionFlow() {
  const { step, nextStep } = useStore();
  const q = questions[step];

  return (
    <div className="flex flex-col items-center space-y-4">
      <p className="text-xl text-center">{q.question}</p>
      <div className="flex space-x-4">
        {q.options.map((opt, i) => (
          <button key={i} onClick={() => nextStep(opt)} className="px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-800 transition">
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
