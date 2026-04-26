function Skills() {
  const skills = ["Основи Python", "OSINT та аналіз вразливостей", "Робота з Git"];
  return (
    <section className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-slate-800 mb-4">🛠 Навички</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map(skill => (
          <span key={skill} className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium hover:bg-blue-200 transition-colors">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
export default Skills