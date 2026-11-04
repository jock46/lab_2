function ContactForm() {
  return (
    <section id="contact" className="bg-slate-800 border border-slate-700/60 p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-bold text-white border-b border-slate-700 pb-3 mb-4 flex items-center gap-2">
        <span>✉️</span> Зв'язатися зі мною
      </h2>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Ваше ім'я</label>
          <input
            type="text"
            placeholder="Олександр"
            className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-slate-200 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Повідомлення</label>
          <textarea
            rows="3"
            placeholder="Текст повідомлення..."
            className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-slate-200 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-semibold transition shadow-md shadow-blue-600/30 active:scale-[0.99]"
        >
          Надіслати
        </button>
      </form>
    </section>
  );
}

export default ContactForm;