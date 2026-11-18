export const CATEGORIAS = ['Todos', 'Mobile', 'Back-end', 'Dados', 'Infraestrutura']

export const LISTA_CURSOS = [
  {
    id: 1,
    titulo: 'React Native com Expo',
    categoria: 'Mobile',
    nivel: 'Intermediário',
    cargaHoraria: 40,
    instrutor: 'João Silva',
    vagas: 10,
    descricao: 'Aprenda a criar aplicações mobile modernas para Android e iOS com React Native e Expo.',
  },
  {
    id: 2,
    titulo: 'APIs modernas com Node.js',
    categoria: 'Back-end',
    nivel: 'Avançado',
    cargaHoraria: 50,
    instrutor: 'Maria Oliveira',
    vagas: 8,
    descricao: 'Domine o desenvolvimento de APIs e aplicações com Node.js, uma das tecnologias mais requisitadas do mercado.',
  },
  {
    id: 3,
    titulo: 'Curso de Data Science',
    categoria: 'Dados',
    nivel: 'Intermediário',
    cargaHoraria: 45,
    instrutor: 'Carlos Pereira',
    vagas: 12,
    descricao: 'Aprenda a analisar dados e construir modelos preditivos com Python e suas bibliotecas.',
  },
  {
    id: 4,
    titulo: 'Curso de DevOps',
    categoria: 'Infraestrutura',
    nivel: 'Avançado',
    cargaHoraria: 60,
    instrutor: 'Ana Souza',
    vagas: 5,
    descricao: 'Aprenda a implementar práticas de DevOps e automação de infraestrutura com ferramentas como Docker e Kubernetes.',
  },
]

export default { CATEGORIAS, LISTA_CURSOS }