function About() {
  return (
    <section id="about" className="bg-slate-800 border border-slate-700/60 p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-bold text-white border-b border-slate-700 pb-3 mb-4 flex items-center gap-2">
        <span>👤</span> Про мене
      </h2>
      <p className="text-slate-300 leading-relaxed text-sm md:text-base">
        Студент бакалаврату кафедри безпеки інформаційних технологій. Захоплююся проєктуванням корпоративних мережевих архітектур, захистом інфраструктури, вивченням стандартів інформаційної безпеки (ISO/IEC 27001), а також створенням сучасних і безпечних інтерфейсів на React.
      </p>
    </section>
  );
}

export default About;