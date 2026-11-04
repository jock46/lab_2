import { useEffect, useState } from 'react';

function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isClosed = sessionStorage.getItem('modal_closed');
    if (isClosed) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('modal_closed', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-4 relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl font-bold"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold text-white">Зворотний зв'язок</h2>
        <p className="text-xs text-slate-400">
          Форма з'явилася, оскільки ви перебуваєте на сайті понад 1 хвилину.
        </p>

        <form
          action="https://formspree.io/f/maeqrdpa"
          method="POST"
          className="space-y-3"
        >
          <div>
            <label className="block text-xs text-slate-300 mb-1">Ім'я</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Іван Свирида"
              className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-sm text-slate-200 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-xs text-slate-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="ivan@example.com"
              className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-sm text-slate-200 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-xs text-slate-300 mb-1">Номер телефону</label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="+380..."
              className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-sm text-slate-200 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-xs text-slate-300 mb-1">Повідомлення</label>
            <textarea
              name="message"
              rows="3"
              required
              placeholder="Ваше повідомлення..."
              className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-sm text-slate-200 focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          <div className="flex gap-2 pt-2">
            <button
              type="submit"
              className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold text-sm transition"
            >
              Надіслати
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2.5 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-xl font-semibold text-sm transition"
            >
              Закрити
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactModal;