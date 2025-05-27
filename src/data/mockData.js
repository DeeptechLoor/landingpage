
// Mock data for projects
export const mockProjects = [
  {
    id: '1',
    name: 'NanoMed Solutions',
    description: 'Desenvolvimento de nanopartículas inteligentes para entrega direcionada de medicamentos, aumentando a eficácia e reduzindo efeitos colaterais em tratamentos oncológicos.',
    image: null,
    category: 'Biotecnologia',
    raised: 850000,
    goal: 1200000,
    investors: 45,
    daysLeft: 18,
    tags: ['Nanotecnologia', 'Saúde', 'Oncologia'],
    team: [
      { name: 'Dra. Mariana Silva', role: 'CEO & Pesquisadora Chefe' },
      { name: 'Dr. Ricardo Oliveira', role: 'CTO & Especialista em Nanotecnologia' },
      { name: 'Carla Mendes', role: 'COO' }
    ],
    about: 'A NanoMed Solutions está revolucionando o tratamento do câncer através de nanopartículas programáveis que entregam medicamentos diretamente às células cancerígenas, poupando as células saudáveis. Nossa tecnologia proprietária permite uma eficácia 3x maior que tratamentos convencionais, com redução de 70% nos efeitos colaterais.',
    problem: 'Os tratamentos quimioterápicos atuais afetam tanto células cancerígenas quanto saudáveis, causando severos efeitos colaterais e limitando as doses que podem ser administradas, o que reduz a eficácia do tratamento.',
    solution: 'Desenvolvemos nanopartículas que reconhecem marcadores específicos das células cancerígenas, liberando o medicamento apenas quando em contato com o tumor. Isso permite maior concentração do medicamento no local desejado e menor toxicidade sistêmica.',
    traction: 'Testes pré-clínicos concluídos com resultados promissores. Patente depositada em 5 países. Parceria com dois centros oncológicos de referência para testes clínicos iniciais.',
    businessModel: 'Licenciamento da tecnologia para farmacêuticas e desenvolvimento de medicamentos proprietários para tratamentos específicos.',
    competition: 'Existem outras abordagens de entrega direcionada de medicamentos, mas nossa tecnologia é a única que combina alta especificidade, estabilidade prolongada na corrente sanguínea e capacidade de atravessar barreiras biológicas.',
    fundingUse: 'Os recursos serão utilizados para finalizar os testes pré-clínicos, iniciar testes clínicos de fase I, e expandir nossa equipe de P&D.',
    updates: [
      { date: '2023-10-15', title: 'Conclusão de testes in vitro', content: 'Finalizamos com sucesso os testes in vitro, demonstrando eficácia 3x superior aos tratamentos convencionais.' },
      { date: '2023-08-20', title: 'Nova parceria estabelecida', content: 'Firmamos parceria com o Centro de Oncologia Avançada para testes clínicos iniciais.' }
    ]
  },
  {
    id: '2',
    name: 'QuantumCompute',
    description: 'Plataforma de computação quântica acessível para empresas, permitindo resolver problemas complexos de otimização e simulação que são intratáveis para computadores clássicos.',
    image: null,
    category: 'Computação Quântica',
    raised: 1200000,
    goal: 2000000,
    investors: 32,
    daysLeft: 25,
    tags: ['Quantum', 'Cloud Computing', 'B2B'],
    team: [
      { name: 'Dr. Felipe Santos', role: 'CEO & Físico Quântico' },
      { name: 'Ana Luiza Costa', role: 'CTO & Engenheira de Software' },
      { name: 'Marcos Pereira', role: 'COO' }
    ],
    about: 'A QuantumCompute está democratizando o acesso à computação quântica através de uma plataforma cloud que permite empresas utilizarem o poder do processamento quântico sem precisar investir em hardware especializado. Nossa solução torna acessível uma tecnologia que pode resolver problemas impossíveis para computadores tradicionais.',
    problem: 'Computadores quânticos são extremamente caros, complexos de operar e acessíveis apenas para grandes corporações e instituições de pesquisa. Isso cria uma barreira significativa para a adoção desta tecnologia revolucionária.',
    solution: 'Nossa plataforma cloud oferece acesso a processadores quânticos através de uma interface amigável e APIs que se integram facilmente aos sistemas existentes. Desenvolvemos também bibliotecas de algoritmos quânticos otimizados para problemas específicos de diversos setores.',
    traction: 'Beta-teste com 12 empresas concluído com sucesso. Duas patentes concedidas para nossa arquitetura de integração. Parceria com fabricante líder de processadores quânticos.',
    businessModel: 'Modelo de assinatura baseado em uso computacional, com planos específicos para diferentes necessidades empresariais, desde startups até grandes corporações.',
    competition: 'Grandes players de tecnologia estão desenvolvendo soluções similares, mas nosso diferencial está na facilidade de uso, bibliotecas especializadas por setor e suporte técnico especializado.',
    fundingUse: 'Os recursos serão utilizados para expandir nossa infraestrutura de computação, desenvolver novas bibliotecas de algoritmos e ampliar nossa equipe de vendas e suporte.',
    updates: [
      { date: '2023-11-05', title: 'Lançamento da versão beta pública', content: 'Nossa plataforma está agora disponível em versão beta para empresas interessadas em explorar computação quântica.' },
      { date: '2023-09-12', title: 'Parceria estratégica', content: 'Firmamos parceria com a QuantumTech para acesso prioritário aos seus processadores de última geração.' }
    ]
  },
  {
    id: '3',
    name: 'EcoStorage',
    description: 'Baterias de nova geração utilizando materiais sustentáveis e abundantes, com densidade energética superior e ciclo de vida prolongado para armazenamento de energia renovável.',
    image: null,
    category: 'Energia Sustentável',
    raised: 750000,
    goal: 1500000,
    investors: 28,
    daysLeft: 30,
    tags: ['Energia', 'Armazenamento', 'Sustentabilidade'],
    team: [
      { name: 'Dra. Juliana Martins', role: 'CEO & Química' },
      { name: 'Pedro Alves', role: 'CTO & Engenheiro de Materiais' },
      { name: 'Luciana Ferreira', role: 'COO' }
    ],
    about: 'A EcoStorage está desenvolvendo a próxima geração de baterias utilizando materiais abundantes e não tóxicos, com densidade energética 40% superior às baterias de íon-lítio convencionais e vida útil 3x maior. Nossa tecnologia resolve os principais gargalos para a adoção massiva de energias renováveis.',
    problem: 'As baterias atuais utilizam materiais raros, tóxicos e de extração problemática. Além disso, sua densidade energética e ciclo de vida limitados dificultam a adoção em larga escala de energias renováveis intermitentes como solar e eólica.',
    solution: 'Desenvolvemos uma nova química de bateria baseada em materiais abundantes e sustentáveis, com arquitetura inovadora que permite maior densidade energética, ciclos de carga/descarga mais rápidos e vida útil significativamente maior.',
    traction: 'Protótipo funcional demonstrado com sucesso. Patentes depositadas em 8 países. Parceria com fabricante de painéis solares para integração da tecnologia.',
    businessModel: 'Licenciamento da tecnologia para fabricantes de baterias e desenvolvimento de produtos próprios para mercados específicos, como armazenamento residencial e industrial.',
    competition: 'Existem várias startups e grandes empresas desenvolvendo novas tecnologias de baterias, mas nossa abordagem é única na combinação de materiais sustentáveis com alta performance.',
    fundingUse: 'Os recursos serão utilizados para otimizar o processo de fabricação, construir uma linha piloto de produção e realizar testes de campo com parceiros estratégicos.',
    updates: [
      { date: '2023-10-28', title: 'Protótipo de 10kWh concluído', content: 'Finalizamos a construção do primeiro protótipo em escala real, com capacidade de 10kWh.' },
      { date: '2023-08-15', title: 'Resultados de testes de ciclo', content: 'Nossos testes de laboratório confirmaram mais de 5.000 ciclos completos sem degradação significativa de performance.' }
    ]
  },
  {
    id: '4',
    name: 'NeuroLink',
    description: 'Interface cérebro-computador não invasiva para controle preciso de dispositivos digitais e tratamento de condições neurológicas através de neurofeedback avançado.',
    image: null,
    category: 'Neurotecnologia',
    raised: 950000,
    goal: 1800000,
    investors: 38,
    daysLeft: 15,
    tags: ['Neurotecnologia', 'Saúde', 'Interface Homem-Máquina'],
    team: [
      { name: 'Dr. André Campos', role: 'CEO & Neurocientista' },
      { name: 'Dra. Beatriz Lima', role: 'CTO & Engenheira Biomédica' },
      { name: 'Rafael Sousa', role: 'COO' }
    ],
    about: 'A NeuroLink está revolucionando a forma como interagimos com tecnologia e tratamos condições neurológicas. Nossa interface cérebro-computador não invasiva combina sensores avançados, algoritmos de IA e feedback em tempo real para permitir controle preciso de dispositivos e terapias neurológicas personalizadas.',
    problem: 'Interfaces cérebro-computador atuais são invasivas, caras e limitadas em precisão, enquanto tratamentos para condições neurológicas frequentemente envolvem medicamentos com efeitos colaterais significativos e eficácia variável.',
    solution: 'Desenvolvemos um headset não invasivo com sensores de alta densidade que captam sinais cerebrais com precisão sem precedentes. Nossa plataforma de IA interpreta esses sinais e os traduz em comandos para dispositivos ou feedback terapêutico personalizado.',
    traction: 'Protótipo funcional testado com 50 voluntários. Resultados preliminares mostram precisão 3x maior que tecnologias concorrentes. Parceria com clínica neurológica para testes em pacientes com condições específicas.',
    businessModel: 'Venda de hardware (headset) e assinatura de software para aplicações terapêuticas e de acessibilidade. Licenciamento da tecnologia para desenvolvedores de aplicações específicas.',
    competition: 'Existem algumas empresas desenvolvendo interfaces cérebro-computador, mas a maioria foca em soluções invasivas ou tem precisão limitada para aplicações práticas.',
    fundingUse: 'Os recursos serão utilizados para miniaturização do hardware, expansão dos testes clínicos e desenvolvimento de aplicações específicas para condições neurológicas prioritárias.',
    updates: [
      { date: '2023-11-10', title: 'Resultados de testes clínicos iniciais', content: 'Os primeiros testes com pacientes de Parkinson mostraram melhora significativa no controle motor após 4 semanas de terapia.' },
      { date: '2023-09-05', title: 'Nova versão do headset', content: 'Lançamos a versão 2.0 do nosso headset, com 40% de redução no tamanho e aumento de 25% na precisão de leitura.' }
    ]
  },
  {
    id: '5',
    name: 'CyberShield',
    description: 'Sistema de segurança cibernética baseado em IA quântica que detecta e neutraliza ameaças avançadas em tempo real, protegendo infraestruturas críticas contra ataques sofisticados.',
    image: null,
    category: 'Cibersegurança',
    raised: 1100000,
    goal: 1600000,
    investors: 42,
    daysLeft: 22,
    tags: ['Cibersegurança', 'IA', 'Infraestrutura Crítica'],
    team: [
      { name: 'Carlos Rocha', role: 'CEO & Especialista em Segurança' },
      { name: 'Dra. Fernanda Dias', role: 'CTO & Cientista de Dados' },
      { name: 'Gustavo Melo', role: 'COO' }
    ],
    about: 'A CyberShield está na vanguarda da proteção contra ameaças cibernéticas avançadas. Nosso sistema combina algoritmos de IA com princípios de computação quântica para detectar padrões de ataque imperceptíveis para soluções convencionais, protegendo infraestruturas críticas como redes elétricas, sistemas financeiros e instalações industriais.',
    problem: 'Ataques cibernéticos estão se tornando cada vez mais sofisticados, com ameaças persistentes avançadas (APTs) capazes de permanecer indetectadas por meses. Soluções tradicionais baseadas em assinaturas e regras estáticas não conseguem acompanhar a evolução das táticas de ataque.',
    solution: 'Nossa plataforma utiliza algoritmos inspirados em princípios quânticos para analisar comportamentos de rede em múltiplas dimensões simultaneamente, identificando anomalias sutis que indicam comprometimento. O sistema aprende continuamente e se adapta a novas ameaças sem intervenção humana.',
    traction: 'Sistema em operação em 5 clientes enterprise, incluindo uma instituição financeira de grande porte. Detecção comprovada de 3 APTs que passaram despercebidas por soluções convencionais.',
    businessModel: 'Modelo de assinatura baseado no tamanho da infraestrutura protegida, com serviços adicionais de resposta a incidentes e consultoria especializada.',
    competition: 'Grandes empresas de segurança oferecem soluções de detecção avançada, mas nenhuma utiliza nossa abordagem baseada em princípios quânticos, que demonstrou eficácia superior em testes comparativos.',
    fundingUse: 'Os recursos serão utilizados para expandir nossa equipe de pesquisa em IA, acelerar o desenvolvimento de módulos específicos para setores críticos e ampliar nossa presença internacional.',
    updates: [
      { date: '2023-11-15', title: 'Detecção de nova ameaça zero-day', content: 'Nosso sistema identificou e ajudou a neutralizar uma ameaça zero-day direcionada ao setor financeiro antes que causasse danos significativos.' },
      { date: '2023-09-20', title: 'Parceria com agência governamental', content: 'Firmamos parceria com agência de segurança cibernética para proteção de infraestruturas críticas nacionais.' }
    ]
  },
  {
    id: '6',
    name: 'AgroGenomics',
    description: 'Plataforma de edição genética para desenvolvimento acelerado de culturas agrícolas resistentes a condições climáticas extremas e pragas, aumentando a produtividade e sustentabilidade.',
    image: null,
    category: 'Biotecnologia',
    raised: 680000,
    goal: 1400000,
    investors: 25,
    daysLeft: 35,
    tags: ['Agritech', 'Genômica', 'Sustentabilidade'],
    team: [
      { name: 'Dr. Paulo Ribeiro', role: 'CEO & Biólogo Molecular' },
      { name: 'Dra. Amanda Torres', role: 'CTO & Geneticista' },
      { name: 'João Silveira', role: 'COO & Agrônomo' }
    ],
    about: 'A AgroGenomics está utilizando tecnologias avançadas de edição genética para desenvolver culturas agrícolas mais resistentes, nutritivas e sustentáveis. Nossa plataforma permite identificar e modificar genes específicos relacionados à resistência a secas, inundações, pragas e doenças, criando variedades adaptadas aos desafios das mudanças climáticas.',
    problem: 'As mudanças climáticas estão intensificando eventos extremos como secas e inundações, enquanto pragas e doenças evoluem rapidamente. Os métodos tradicionais de melhoramento genético são lentos e limitados, não acompanhando a velocidade dessas mudanças.',
    solution: 'Nossa plataforma combina sequenciamento de alta precisão, IA para identificação de genes-alvo e técnicas avançadas de edição genética para desenvolver novas variedades em uma fração do tempo dos métodos convencionais, sem introduzir DNA externo.',
    traction: 'Desenvolvimento bem-sucedido de variedade de milho com resistência a seca 40% superior. Parceria com duas cooperativas agrícolas para testes em campo. Patentes depositadas para 3 técnicas proprietárias.',
    businessModel: 'Licenciamento de variedades desenvolvidas para empresas de sementes e desenvolvimento sob demanda para culturas específicas. Royalties sobre a venda de sementes com nossa tecnologia.',
    competition: 'Grandes empresas de biotecnologia agrícola dominam o mercado, mas focam principalmente em culturas comerciais de grande escala. Nossa abordagem permite atender mercados negligenciados e culturas regionais importantes.',
    fundingUse: 'Os recursos serão utilizados para expandir nossa biblioteca genômica, acelerar o desenvolvimento de variedades prioritárias e iniciar testes de campo em diferentes regiões climáticas.',
    updates: [
      { date: '2023-10-20', title: 'Resultados de testes de campo', content: 'Nossa variedade de milho resistente à seca mostrou produtividade 35% superior em condições de estresse hídrico severo.' },
      { date: '2023-08-10', title: 'Nova parceria estabelecida', content: 'Firmamos acordo com cooperativa agrícola para testes em larga escala em três estados brasileiros.' }
    ]
  }
];

// Mock data for user investments
export const mockInvestments = [
  {
    id: '1',
    projectId: '1',
    projectName: 'NanoMed Solutions',
    amount: 10000,
    date: '2023-10-15',
    shares: 500,
    status: 'Ativo'
  },
  {
    id: '2',
    projectId: '3',
    projectName: 'EcoStorage',
    amount: 5000,
    date: '2023-09-22',
    shares: 250,
    status: 'Ativo'
  },
  {
    id: '3',
    projectId: '5',
    projectName: 'CyberShield',
    amount: 8000,
    date: '2023-11-05',
    shares: 400,
    status: 'Ativo'
  }
];

// Mock data for startup projects
export const mockStartupProjects = [
  {
    id: '7',
    name: 'BioSensor AI',
    description: 'Sensores biológicos inteligentes para monitoramento contínuo de parâmetros de saúde, utilizando IA para análise preditiva e detecção precoce de condições médicas.',
    image: null,
    category: 'Biotecnologia',
    raised: 350000,
    goal: 900000,
    investors: 15,
    daysLeft: 40,
    status: 'Ativo',
    tags: ['Saúde', 'IoT', 'IA'],
    updates: [
      { date: '2023-11-10', title: 'Aprovação regulatória inicial', content: 'Recebemos aprovação preliminar da ANVISA para testes clínicos do nosso sensor de glicose.' },
      { date: '2023-10-05', title: 'Novo protótipo finalizado', content: 'Concluímos o desenvolvimento do protótipo miniaturizado com 30% mais autonomia de bateria.' }
    ]
  }
];
