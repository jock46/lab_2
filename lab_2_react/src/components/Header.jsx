function Header() {
  return (
    <header className="bg-slate-800/90 backdrop-blur border border-slate-700 p-8 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-center md:text-left">
        <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/30 text-xs font-semibold rounded-full mb-3 tracking-wide">
          Cybersecurity & Web Development
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Свирида Іван
        </h1>
        <p className="text-slate-400 mt-1 text-sm md:text-base">
          Студент спеціальності «Кібербезпека» | НУ «Львівська політехніка»
        </p>
      </div>

      <nav className="flex flex-wrap gap-2 justify-center">
        <a href="#about" className="px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-700/80 rounded-lg transition">Про мене</a>
        <a href="#skills" className="px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-700/80 rounded-lg transition">Навички</a>
        <a href="#experience" className="px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-700/80 rounded-lg transition">Досвід</a>
        <a href="#education" className="px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-700/80 rounded-lg transition">Освіта</a>
        <a href="#contact" className="px-3.5 py-2 text-xs font-medium bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition shadow-md">Контакти</a>
      </nav>
    </header>
  );
}

export default Header;