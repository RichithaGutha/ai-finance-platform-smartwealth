import 'chart.js/auto';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import supabase from '../utils/supabaseClient';

export default function Dashboard() { // ✅ Fix export (default export)
  const [budgets, setBudgets] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    async function fetchBudgets() {
      const { data, error } = await supabase
        .from('budgets')
        .select('category, amount, spent')
        .eq('user_id', (await supabase.auth.getUser()).data.user?.id);

      if (error) console.error('Error fetching budgets:', error);
      else setBudgets(data);
    }

    async function fetchTransactions() {
      const { data, error } = await supabase
        .from('transactions')
        .select('category, amount')
        .eq('user_id', (await supabase.auth.getUser()).data.user?.id);

      if (error) console.error('Error fetching transactions:', error);
      else setTransactions(data);
    }

    fetchBudgets();
    fetchTransactions();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mt-4">Spending by Category</h2>
      {alerts.length > 0 ? (
        <div className="text-red-500">
          {alerts.map((alert, index) => (
            <p key={index}>{alert}</p>
          ))}
        </div>
      ) : (
        <p>No alerts at the moment.</p>
      )}

      <Bar data={{
        labels: budgets.map(budget => budget.category),
        datasets: [{
          label: 'Spending by Category',
          data: budgets.map(budget => budget.spent),
          backgroundColor: ['#f87171', '#60a5fa', '#34d399', '#facc15'],
        }],
      }} />
    </div>
  );
}
