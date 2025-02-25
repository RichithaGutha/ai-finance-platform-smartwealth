import { useState } from 'react';
import supabase from '../utils/supabaseClient';

export default function BudgetManager() {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState(0);

  const addBudget = async () => {
    const { data, error } = await supabase
      .from('budgets')
      .insert([{ user_id: supabase.auth.user().id, category, amount }]);

    if (error) console.error('Error adding budget:', error);
    else console.log('Budget added:', data);
  };

  return (
    <div>
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button onClick={addBudget}>Add Budget</button>
    </div>
  );
}