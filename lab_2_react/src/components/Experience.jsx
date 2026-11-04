function Experience() {
  const projects = [
    {
      title: "Моделювання безпечної бездротової інфраструктури",
      period: "2026",
      tech: "Cisco Packet Tracer, RADIUS, WPA2-Enterprise",
      desc: "Проєктування і розгортання корпоративної топології з сегментацією VLAN, міжмережевою маршрутизацією та централізованою автентифікацією."
    },
    {
      title: "Розробка модульного вебдодатка резюме",
      period: "2026",
      tech: "React, Vite, Tailwind CSS",
      desc: "Побудова адаптивного компонентного інтерфейсу портфоліо та оптимізація швидкодії."
    }
  ];

  return (
    <section id="experience" className="bg-slate-800 border border-slate-700/60 p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-bold text-white border-b border-slate-700 pb-3 mb-6 flex items-center gap-2">
        <span>💼</span> Досвід та проєкти
      </h2>
      <div className="space-y-6">
        {projects.map((p, idx) => (
          <div key={idx} className="relative pl-6 border-l-2 border-slate-700 hover:border-blue-500 transition duration-200">
            <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-blue-500"></span>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <h3 className="font-semibold text-slate-100 text-base">{p.title}</h3>
              <span className="text-xs text-slate-400 mt-1 sm:mt-0">{p.period}</span>
            </div>
            <p className="text-xs text-blue-400 font-medium my-1">{p.tech}</p>
            <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;