const alunos = [

    {
      nome: "Pedro",
      idade: 24,
      skills: ["JavaScript", "TypeScript", "React"],
    },

    {
      nome: "Maria",
      idade: 22,
      skills: ["Python", "Django", "JavaScript"],
    },

    {
      nome: "João",
      idade: 25,
      skills: ["Java", "Spring", "Hibernate"],
    },

    {
      nome: "Ana",
      idade: 23,
      skills: ["C++", "Qt", "C#"],
    },

    {
      nome: "Clara",
      idade: 21,
      skills: ["Ruby", "Rails", "React Native"],
    },

  ];
  
  function filtrarHabil(alunos, habilidade) {
    const alunosSkills = alunos.filter((aluno) =>
      aluno.skills.includes(habilidade)
    );
  
    alunosSkills.forEach((aluno) => {
      console.log(aluno);
    });
  }
  
  filtrarAlunosPorHabilidade(alunos, "JavaScript");