import { motion } from 'framer-motion';
import { useStore } from './store';
import Chart from './components/Chart';
import QuestionFlow from './components/QuestionFlow';

export default function App() {
  const { resultGenerated } = useStore();

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="max-w-4xl w-full"
      >
        <h1 className="text-4xl font-bold text-center mb-8">🧠 NeuroDeck</h1>
        {!resultGenerated ? <QuestionFlow /> : <Chart />}
      </motion.div>
    </main>
  );
}
