import { useEffect, useState } from 'react';

function Reviews() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/22/comments')
      .then((res) => {
        if (!res.ok) throw new Error('Помилка завантаження даних');
        return res.json();
      })
      .then((data) => {
        setComments(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section id="reviews" className="bg-slate-800 border border-slate-700/60 p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-bold text-white border-b border-slate-700 pb-3 mb-4 flex items-center gap-2">
        <span>💬</span> Відгуки роботодавців (Fetch API )
      </h2>

      {loading && <p className="text-sm text-slate-400 animate-pulse">Завантаження коментарів...</p>}
      {error && <p className="text-sm text-red-400">Помилка: {error}</p>}

      <div className="space-y-4">
        {comments.map((item) => (
          <div key={item.id} className="p-4 bg-slate-900/60 border border-slate-700/50 rounded-xl space-y-1">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-semibold text-blue-400 capitalize">{item.name}</h3>
              <span className="text-[11px] text-slate-500">{item.email}</span>
            </div>
            <p className="text-xs text-slate-300 italic">"{item.body}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;