import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { useStore } from '../store';

export default function Chart() {
  const { traits } = useStore();
  const data = Object.entries(traits).map(([k, v]) => ({ trait: k, value: v }));

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl mb-4">🧬 Seu Perfil de Personalidade</h2>
      <RadarChart outerRadius={90} width={400} height={300} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="trait" />
        <PolarRadiusAxis angle={30} domain={[0, 100]} />
        <Radar name="Você" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    </div>
  );
}
