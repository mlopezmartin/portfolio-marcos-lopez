export async function loadContent(lang: 'es' | 'en') {
  const targetLang = ['es', 'en'].includes(lang) ? lang : 'es';

  const [skills,/*  hero */] = await Promise.all([
    import(`./molecules/Skills/${targetLang}.tsx`).then(m => m.default),
    //import(`@/content/organisms/Hero/${targetLang}.ts`).then(m => m.default),
    // añade más aquí si necesitas
  ]);

  return {
    skills,
   /*  hero */
  };
}
