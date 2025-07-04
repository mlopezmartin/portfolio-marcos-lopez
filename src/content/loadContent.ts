export async function loadContent(lang: 'es' | 'en') {
  const targetLang = ['es', 'en'].includes(lang) ? lang : 'es';

  const [skills, SkillsGrouped, Experience, OtherTools, Curriculum, Header, Hero, AboutMe, Footer] = await Promise.all([
    import(`./molecules/Skills/${targetLang}.tsx`).then(m => m.default),
    import(`./molecules/SkillsGrouped/${targetLang}.ts`).then(m => m.default),
    import(`./molecules/Experience/${targetLang}.ts`).then(m => m.default),
    import(`./molecules/OtherTools/${targetLang}.tsx`).then(m => m.default),
    import(`./molecules/Curriculum/${targetLang}.ts`).then(m => m.default),
    import(`./organisms/Header/${targetLang}.ts`).then(m => m.default),
    import(`./molecules/Hero/${targetLang}.tsx`).then(m => m.default),
    import(`./molecules/AboutMe/${targetLang}.ts`).then(m => m.default),
    import(`./organisms/Footer/${targetLang}.ts`).then(m => m.default),
    // añade más aquí si necesitas
  ]);

  return {
    skills,
    SkillsGrouped,
    Experience,
    OtherTools,
    Curriculum,
    Header,
    Hero,
    AboutMe,
    Footer
  };
}
