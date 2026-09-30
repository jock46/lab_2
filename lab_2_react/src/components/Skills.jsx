function Skills() {
  const skillsList = [
    { title: "Мережева безпека", desc: "Моделювання топологій (Cisco Packet Tracer), налаштування протоколів WPA2/WPA3-Enterprise, серверів RADIUS." },
    { title: "Стандарти безпеки", desc: "ISO/IEC 27001, ISO/IEC 27002, ISO/IEC 27005." },
    { title: "Мови програмування", desc: "Python, C#, SQL." },
    { title: "Інструменти", desc: "Git, PyCharm, Linux, VS Code, Wireshark." }
  ];

  return (
    <section id="skills">
      <h2>Технічні та професійні навички</h2>
      <ul>
        {skillsList.map((skill, index) => (
          <li key={index}>
            <strong>{skill.title}:</strong> {skill.desc}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;