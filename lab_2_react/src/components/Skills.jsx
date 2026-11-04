function Skills() {
  const skillCategories = [
    { title: "Безпека та мережі", items: ["Cisco Packet Tracer", "WPA2-Enterprise", "RADIUS", "ISO/IEC 27001", "Wireshark"] },
    { title: "Розробка", items: ["Python", "C#", "React", "Tailwind CSS", "Vite", "Git"] }
  ];

  return (
    <section id="skills" className="bg-slate-800 border border-slate-700/60 p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-bold text-white border-b border-slate-700 pb-3 mb-4 flex items-center gap-2">
        <span>⚡</span> Технічні навички
      </h2>
      <div className="space-y-4">
        {skillCategories.map((cat, idx) => (
          <div key={idx}>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-slate-700/70 hover:bg-blue-600/30 text-slate-200 text-xs font-medium rounded-lg border border-slate-600/50 transition">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;