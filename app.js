/* ==========================================================================
   LÓGICA INTERATIVA E CARREGAMENTO DE DADOS - PORTFÓLIO DE FREDERICO RIBEIRO NETO
   ========================================================================== */

// Dados Fallback integrados (Garante funcionamento perfeito mesmo via protocolo file://)
const PROFILE_DATA_FALLBACK = {
  "personal": {
    "name": "Frederico Ribeiro Neto",
    "nickname": "Fred",
    "title": "Cientista do Esporte & Pesquisador",
    "location": "Rede SARAH de Hospitais de Reabilitação",
    "bio": "Possui doutorado em Atividade Física e Esporte pela Universidade de Brasília (2017) e mestrado em Ciências da Reabilitação pela Rede SARAH de Hospitais de Reabilitação (2009). Especialista pela Universidade Gama Filho (2003) e pela Universidade de Brasília (2011), realizando atualmente estágio de pós-doutorado pela Universidade Federal de São Paulo (UNIFESP). No Centro Internacional de Neurociências e Reabilitação SARAH Lago Norte, coordena as áreas de Educação Física, Fisioterapia e Terapia Ocupacional, além de gerir o Projeto de Esportes Paralímpicos. Exerce ainda as funções de Coordenador do Setor Náutico e Supervisor do Programa de Estágio em Educação Física da unidade. É membro do Comitê de Ética em Pesquisa (CEP) da Rede SARAH desde 2017 e atua como treinador de atletas de Paradesporto (Para canoagem e Para halterofilismo). Suas investigações científicas e atuação profissional concentram-se em: Paradesporto, Reabilitação e Treinamento.",
    "avatar": "fred_profile.jpg"
  },
  "links": {
    "lattes": "https://lattes.cnpq.br/9147993784328176",
    "orcid": "https://orcid.org/0000-0002-7817-6001",
    "scholar": "https://scholar.google.com.br/citations?user=gZ4UWrwAAAAJ&hl=pt-BR",
    "github": "https://github.com/fredribeironeto",
    "linkedin": "https://www.linkedin.com/in/fred-ribeiro-12000971/",
    "researchgate": "https://www.researchgate.net/profile/Frederico-Ribeiro-Neto",
    "email": "fredribeironeto@gmail.com",
    "instagram": "https://www.instagram.com/fredribeironeto"
  },
  "expertise": [
    {
      "area": "Reabilitação & Biomecânica",
      "icon": "bi-person-wheelchair",
      "description": "Estudo do movimento humano, força muscular e adaptações neuromotoras no Centro Internacional de Neurociências SARAH Lago Norte."
    },
    {
      "area": "Desempenho Motor",
      "icon": "bi-speedometer2",
      "description": "Mapeamento cinemático longitudinal de velocidade, acelerações, potência e fadiga neuromuscular em atletas paralímpicos."
    },
    {
      "area": "Esportes Paralímpicos",
      "icon": "bi-trophy",
      "description": "Treinamento especializado em Paradesporto (Paracanoagem e Halterofilismo Paralímpico) e pesquisa de marcadores de classificação esportiva."
    },
    {
      "area": "Telerreabilitação & Tele-exercício",
      "icon": "bi-laptop",
      "description": "Desenvolvimento e avaliação de programas de reabilitação e treinamento remotos controlados para pessoas com lesão medular."
    }
  ],
  "projects": [
    {
      "title": "Paracanoe Pacing Analytics",
      "category": "Web App",
      "status": "Em produção",
      "description": "Aplicativo web interativo para análise de pacing na Paracanoagem. Processa arquivos de telemetria GPS (Polar/Garmin), aplica filtros Hampel para remoção de ruídos cinemáticos e plota curvas de velocidade de 200m.",
      "tech": [
        "Python",
        "Flask",
        "Pandas",
        "Chart.js",
        "Hampel Filter"
      ],
      "demo": "https://paracanoe-pacing-analytics.onrender.com/",
      "github": "https://github.com/fredribeironeto"
    },
    {
      "title": "Dashboard Paracanoagem",
      "category": "Web App",
      "status": "Em desenvolvimento",
      "description": "Painel analítico para monitoramento de atletas paralímpicos de canoagem brasileira de velocidade. Inclui modelos de efeitos mistos lineares para predição de trajetórias de rendimento longitudinal.",
      "tech": [
        "Python",
        "Dash/Plotly",
        "SQLite",
        "Statsmodels"
      ],
      "demo": "#",
      "github": "https://github.com/fredribeironeto"
    }
  ],
  "publications": [
    {
      "title": "Assessment of the cardiac vagal reflex: validation of the 4-s exercise test during simulated wheelchair propulsion",
      "authors": "Gustavo H. C. Bezerra; Marcela S. Araújo; Frederico Ribeiro Neto; Lauro C. Vianna",
      "journal": "European Journal of Applied Physiology",
      "year": 2026,
      "theme": "Lesão Medular / Reabilitação",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Validação clínica do teste de exercício de 4 segundos para avaliar as respostas reativas vagais cardíacas rápidas em usuários de cadeira de rodas simulada, fornecendo novos dados autonômicos."
    },
    {
      "title": "Comparison of the 200-Meter Race Phases Between Ergometer and On-Water Kayaks in Paralympic Canoe Sprint Athletes",
      "authors": "Frederico Ribeiro Neto; Luiz Gustavo T. F. Santos; Rodrigo R. Gomes Costa; Ciro Winckler",
      "journal": "Perceptual and Motor Skills",
      "year": 2026,
      "theme": "Para canoagem",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Análise comparativa das fases cinemáticas da corrida de 200m de velocidade entre ergômetro simulador e caiaque em condições de água em atletas de elite de paracanoagem."
    },
    {
      "title": "Instant video replay in para taekwondo: Influence on referees' decisions and match outcomes",
      "authors": "Rafael Lima Kons; Frederico Ribeiro Neto; Rodrigo R. Gomes Costa; Vinicius de Oliveira Guliás; Guilherme Felix",
      "journal": "International Journal of Sports Science & Coaching",
      "year": 2026,
      "theme": "Outros",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Análise quantitativa do impacto do sistema IVR (Instant Video Replay) sobre a precisão de julgamento dos árbitros e as consequências táticas nos resultados em lutas oficiais de Para Taekwondo."
    },
    {
      "title": "Paralympic health: emerging trends and innovations",
      "authors": "Ciro Winckler; Frederico Ribeiro Neto; Rodrigo R. Gomes Costa; Irineu Loturco; Elke Lima Trigo; Andrea Jacusiel Miranda; Luiz Gustavo T. F. Santos",
      "journal": "Frontiers in Sports and Active Living",
      "year": 2026,
      "theme": "Outros",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Comentário editorial sobre inovações estruturais, medicina preventiva, reabilitação física e avaliação do perfil de saúde em atletas de elite das equipes paralímpicas brasileiras."
    },
    {
      "title": "Physical Activity Guidelines: Are They Adequate for People With Disabilities in Low- and Middle-Income Countries?",
      "authors": "Frederico Ribeiro Neto; Rodrigo R. Gomes Costa; Sonny A. S. Bezerra; Ciro Winckler",
      "journal": "Journal of Physical Activity & Health",
      "year": 2026,
      "theme": "Outros",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Estudo analítico discutindo o impacto, viabilidade e adequação clínica das diretrizes globais de atividade física adaptada para pessoas com deficiência em países em desenvolvimento."
    },
    {
      "title": "Acute Performance Decrement Following Training Based on the Phases of the 200-Meter Races in Paralympic Canoe Sprint Athletes",
      "authors": "Frederico Ribeiro Neto; Luiz Gustavo T. F. Santos; Luis Felipe C. C. Campos; Rodrigo R. Gomes Costa; Ciro Winckler",
      "journal": "Perceptual and Motor Skills",
      "year": 2025,
      "theme": "Para canoagem",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Estudo experimental mapeando o decréscimo agudo de torque e velocidade em atletas de paracanoagem submetidos a regimes de treino intervalado intenso."
    },
    {
      "title": "Angle Analysis in the Arched Technique: Cutoff Points for Maximum Strength in Para Powerlifting",
      "authors": "Frederico Ribeiro Neto; Oliveira, R. X. C.; Fonseca, G.; João H. C. L. Veloso; Sonny A. S. Bezerra; Rodrigo R. Gomes Costa; Jefferson R. Dorneles",
      "journal": "Adapted Physical Activity Quarterly",
      "year": 2025,
      "theme": "Para halterofilismo",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Estudo inovador estabelecendo marcadores biomecânicos e ângulos ideais no supino em arco no para-halterofilismo brasileiro, definindo pontos de corte para geração de força máxima."
    },
    {
      "title": "Comparison of shoulder pain, physical activity adherence, and compliance in wheelchair users with spinal cord injury",
      "authors": "Frederico Ribeiro Neto; Rodrigo R. Gomes Costa; Jefferson R. Dorneles; Fonseca, G. C.; João H. C. L. Veloso; Sonny A. S. Bezerra; Ciro Winckler",
      "journal": "Journal of Spinal Cord Medicine",
      "year": 2025,
      "theme": "Lesão Medular / Reabilitação",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Investigação da prevalência e intensidade de dor no ombro e adesão de treino em indivíduos cadeirantes sob diferentes níveis de programas de paradesporto em hospitais."
    },
    {
      "title": "Tele-exercise in individuals with spinal cord injury: a systematic review",
      "authors": "Rodrigo R. Gomes Costa; Beatriz Lucena Ramos; Frederico Ribeiro Neto; Ciro Winckler",
      "journal": "Mhealth",
      "year": 2025,
      "theme": "Lesão Medular / Reabilitação",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Revisão sistemática de ensaios clínicos controlados e estudos longitudinais avaliando o impacto dos treinos de tele-exercício domésticos na aptidão funcional de pessoas com lesão medular."
    },
    {
      "title": "Validity, reliability and minimal detectable change in the sit-to-stand test for synchronous and asynchronous tele-assessment in post-COVID-19 condition",
      "authors": "Juliane M. Marques; Matheus Brasiliano da Paz; Rodrigo R. Gomes Costa; Frederico Ribeiro Neto",
      "journal": "PeerJ",
      "year": 2025,
      "theme": "Outros",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Avaliação de reprodutibilidade síncrona e assíncrona de testes físicos de sentar-levantar realizados em ambiente domiciliar monitorado em pacientes pós-COVID-19 crônico."
    },
    {
      "title": "Why Must Women Play Wheelchair Rugby Alongside Men?",
      "authors": "Rodrigo R. Gomes Costa; Beatriz Lucena Ramos; Frederico Ribeiro Neto; Elke Lima Trigo; Ciro Winckler; R. E. A. Cidade",
      "journal": "Australian Feminist Studies",
      "year": 2025,
      "theme": "Rugby em Cadeira de Rodas",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Discussão e modelagem de rendimento associando gênero no esporte misto Wheelchair Rugby, ressaltando o papel de integração funcional de para-atletas do gênero feminino."
    },
    {
      "title": "Age-related Trajectory and Age at Peak Competitive Performance in Wheelchair Rugby Players at the Paralympic Games",
      "authors": "Rodrigo R. Gomes Costa; Frederico Ribeiro Neto; Beatriz Lucena Ramos; Tanhoffer, Ricardo; Bob O'Shea; Ciro Winckler",
      "journal": "American Journal of Physical Medicine & Rehabilitation",
      "year": 2024,
      "theme": "Lesão Medular / Reabilitação",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Estudo clínico e biomecânico sobre reabilitação física, telerreabilitação e independência funcional em pessoas com lesão medular."
    },
    {
      "title": "Comparison of Neuromuscular Fatigue in Powerlifting Paralympics in Different Training Methods",
      "authors": "Getirana-mota, Márcio; Felipe J. Aidar; Frederico Ribeiro Neto; Santos, Taísa Pereira; Almeida-neto, Paulofrancisco De; Breno G. Cabral; Vieira-souza, Lucio Marques; Nuno D. Garrido; Victor M. Reis; Raphael Fabrício de Souza",
      "journal": "Sports Medicine International Open",
      "year": 2024,
      "theme": "Para halterofilismo",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Investigação de marcadores de força muscular máxima, fadiga neuromuscular e análise biomecânica de técnicas no Para halterofilismo."
    },
    {
      "title": "Effects of different training methods in tele-exercise on acute performance decrement in adults with disability and wheelchair users",
      "authors": "Frederico Ribeiro Neto; Gustavo H. C. Bezerra; Xavier Couto De Oliveira, Rafael; Luis Felipe C. C. Campos; Rodrigo R. Gomes Costa",
      "journal": "Disability and Rehabilitation: Assistive Technology",
      "year": 2024,
      "theme": "Lesão Medular / Reabilitação",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Estudo clínico e biomecânico sobre reabilitação física, telerreabilitação e independência funcional em pessoas com lesão medular."
    },
    {
      "title": "Origin of Impairment and Timing of Impairment Manifestation in Paralympic Sport",
      "authors": "Frederico Ribeiro Neto; Ciro Winckler; Rodrigo R. Gomes Costa",
      "journal": "American Journal of Physical Medicine & Rehabilitation",
      "year": 2024,
      "theme": "Outros",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Pesquisa acadêmica sobre atividade física adaptada, saúde paralímpica e ciências aplicadas ao paradesporto e reabilitação."
    },
    {
      "title": "Systematization of Para Sport: a Brazilian Model of Comprehensive Proposal for Hospital Applications",
      "authors": "Rodrigo R. Gomes Costa; Frederico Ribeiro Neto; Ciro Winckler",
      "journal": "American Journal of Physical Medicine & Rehabilitation",
      "year": 2024,
      "theme": "Outros",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Pesquisa acadêmica sobre atividade física adaptada, saúde paralímpica e ciências aplicadas ao paradesporto e reabilitação."
    },
    {
      "title": "Cross-Cultural Translation and Adaptation of the Perceived Recovery Status Scale to Brazilian Portuguese",
      "authors": "Rodrigo R. Gomes Costa; Laurent, Matt; Frederico Ribeiro Neto; De Campos, Luis Felipe Castellicorrea; Ciro Winckler",
      "journal": "Motricidade",
      "year": 2023,
      "theme": "Outros",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Pesquisa acadêmica sobre atividade física adaptada, saúde paralímpica e ciências aplicadas ao paradesporto e reabilitação."
    },
    {
      "title": "Does tele-exercise training for tetraplegia meet the spinal cord injury-specific physical activity guidelines? A 7-month longitudinal study",
      "authors": "Rodrigo R. Gomes Costa; Jefferson R. Dorneles; João H. C. L. Veloso; Carlos W. P. Gonçalves; Frederico Ribeiro Neto",
      "journal": "Journal of Telemedicine and Telecare",
      "year": 2023,
      "theme": "Lesão Medular / Reabilitação",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Estudo clínico e biomecânico sobre reabilitação física, telerreabilitação e independência funcional em pessoas com lesão medular."
    },
    {
      "title": "Mechanical diagnosis and therapy in musculoskeletal pain of individuals with spinal cord injury",
      "authors": "Poliana Grasser; Frederico Ribeiro Neto; João H. C. L. Veloso; Rodrigo R. Gomes Costa; Jefferson R. Dorneles",
      "journal": "Journal of Spinal Cord Medicine",
      "year": 2023,
      "theme": "Lesão Medular / Reabilitação",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Estudo clínico e biomecânico sobre reabilitação física, telerreabilitação e independência funcional em pessoas com lesão medular."
    },
    {
      "title": "Performance Trajectory Related to Age, Classification and Sex in Elite Kayak Para Canoe athletes",
      "authors": "Frederico Ribeiro Neto; Maria de Fátima Fernandes Vara; Jefferson R. Dorneles; Rodrigo R. Gomes Costa",
      "journal": "American Journal of Physical Medicine & Rehabilitation",
      "year": 2023,
      "theme": "Para canoagem",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Estudo focado na avaliação biomecânica, cinemática e trajetórias de rendimento de atletas na Para canoagem de velocidade."
    },
    {
      "title": "Sit to stand test and handgrip strength in men and women with post-COVID-19 syndrome without invasive ventilator support: insights from a Brazilian observational study",
      "authors": "Frederico Ribeiro Neto; Juliane M. Marques; Matheus Brasiliano da Paz; Eduardo Boiteux Uchôa Cavalcanti; Rodrigo R. Gomes Costa",
      "journal": "Monaldi Archives for Chest Disease",
      "year": 2023,
      "theme": "Outros",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Pesquisa acadêmica sobre atividade física adaptada, saúde paralímpica e ciências aplicadas ao paradesporto e reabilitação."
    },
    {
      "title": "Tele-health, tele-exercise and tele-assessment: an example of a fitness app for individuals with spinal cord injury",
      "authors": "Rodrigo R. Gomes Costa; Frederico Ribeiro Neto; Ciro Winckler",
      "journal": "JMIR mHealth and uHealth",
      "year": 2023,
      "theme": "Lesão Medular / Reabilitação",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Estudo clínico e biomecânico sobre reabilitação física, telerreabilitação e independência funcional em pessoas com lesão medular."
    },
    {
      "title": "Can Post-Exercise Hemodynamic Response Be Influenced by Different Recovery Methods in Paraplegic Sportsmen?",
      "authors": "Felipe J. Aidar; Edilson F. Dantas; Paulo F. Almeida-Neto; Frederico Ribeiro Neto; Nuno D. Garrido; Breno G. Cabral; Tiago Figueiredo; Victor M. Reis",
      "journal": "International Journal of Environmental Research and Public Health",
      "year": 2022,
      "theme": "Outros",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Pesquisa acadêmica sobre atividade física adaptada, saúde paralímpica e ciências aplicadas ao paradesporto e reabilitação."
    },
    {
      "title": "Feasibility and validity of the push-up test for synchronous and asynchronous strength tele-assessment in spinal cord injury individuals with paraplegia",
      "authors": "Rodrigo R. Gomes Costa; Jefferson R. Dorneles; João H. C. L. Veloso; Carlos W. P. Gonçalves; Frederico Ribeiro Neto",
      "journal": "Journal of Spinal Cord Medicine",
      "year": 2022,
      "theme": "Lesão Medular / Reabilitação",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Estudo clínico e biomecânico sobre reabilitação física, telerreabilitação e independência funcional em pessoas com lesão medular."
    },
    {
      "title": "Force-velocity relationship in Paralympic powerlifting: two or multiple-point methods to determine a maximum repetition",
      "authors": "Felipe J. Aidar; Ciro José Brito; Dihogo Gama de Matos; Levy Anthony S. de Oliveira; Raphael Fabrício de Souza; Paulo F. Almeida-Neto; Breno G. Cabral; Henrique P. Neiva; Frederico Ribeiro Neto; Victor M. Reis; Daniel A. Marinho; Mário C. Marques; Filipe Manuel Clemente; Hadi Nobari",
      "journal": "BMC Sports Science, Medicine and Rehabilitation",
      "year": 2022,
      "theme": "Para halterofilismo",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Investigação de marcadores de força muscular máxima, fadiga neuromuscular e análise biomecânica de técnicas no Para halterofilismo."
    },
    {
      "title": "Neuromuscular disorders in women and men with spinal cord injury are associated with changes in muscle and tendon architecture",
      "authors": "Larissa Santana; Emerson Fachin-Martins; David Lobato Borges; Jonathan Galvão Tenório Cavalcante; Nicolas Babault; Frederico Ribeiro Neto; João Luiz Quagliotti Durigan; Rita de Cássia Marqueti",
      "journal": "Journal of Spinal Cord Medicine",
      "year": 2022,
      "theme": "Lesão Medular / Reabilitação",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Estudo clínico e biomecânico sobre reabilitação física, telerreabilitação e independência funcional em pessoas com lesão medular."
    },
    {
      "title": "Time Course of Recovery Following CrossFit® Karen Benchmark Workout in Trained Men",
      "authors": "Ivo Vieira de Sousa Neto; Nuno Manuel Frade de Sousa; Frederico Ribeiro Neto; Joao Henrique Falk Neto; Ramires Alsamir Tibana",
      "journal": "Frontiers in Physiology",
      "year": 2022,
      "theme": "Outros",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Pesquisa acadêmica sobre atividade física adaptada, saúde paralímpica e ciências aplicadas ao paradesporto e reabilitação."
    },
    {
      "title": "Accuracy and cut-off points of different models of knee extension strength analysis to identify walking performance in individuals with chronic stroke",
      "authors": "Rodrigo R. Gomes Costa; Frederico Ribeiro Neto; Carlos W. P. Gonçalves; Rodrigo L. Carregaro",
      "journal": "Revista Brasileira de Medicina do Esporte",
      "year": 2021,
      "theme": "Outros",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Pesquisa acadêmica sobre atividade física adaptada, saúde paralímpica e ciências aplicadas ao paradesporto e reabilitação."
    },
    {
      "title": "Correlations Between Medicine Ball Throw With Wheelchair Mobility and Isokinetic Tests in Basketball Para-Athletes",
      "authors": "Frederico Ribeiro Neto; Irineu Loturco; Guilherme Henrique Lopes; Jefferson R. Dorneles; José Irineu Gorla; Rodrigo R. Gomes Costa",
      "journal": "Journal of Sport Rehabilitation",
      "year": 2021,
      "theme": "Lesão Medular / Reabilitação",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Estudo clínico e biomecânico sobre reabilitação física, telerreabilitação e independência funcional em pessoas com lesão medular."
    },
    {
      "title": "Evaluation of Strength and Muscle Activation Indicators in Sticking Point Region of National-Level Paralympic Powerlifting Athletes",
      "authors": "Felipe J. Aidar; Filipe Manuel Clemente; Dihogo Gama de Matos; Anderson Carlos Marçal; Raphael Fabrício de Souza; Osvaldo Costa Moreira; Paulo F. Almeida-Neto; José Vilaça-Alves; Nuno D. Garrido; Jymmys Lopes dos Santos; Ian Jeffreys; Frederico Ribeiro Neto; Victor M. Reis; Breno G. Cabral; Thomas Rosemann; Beat Knechtle",
      "journal": "Journal of Functional Morphology and Kinesiology",
      "year": 2021,
      "theme": "Para halterofilismo",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Investigação de marcadores de força muscular máxima, fadiga neuromuscular e análise biomecânica de técnicas no Para halterofilismo."
    },
    {
      "title": "Handgrip Strength Cutoff Points for Functional Independence and Wheelchair Ability in MenWith Spinal Cord Injury",
      "authors": "Frederico Ribeiro Neto; Rodrigo R. Gomes Costa; Dorneles, Jefferson R.; Carlos W. P. Gonçalves; João H. C. L. Veloso; Rodrigo L. Carregaro",
      "journal": "Topics in Spinal Cord Injury Rehabilitation",
      "year": 2021,
      "theme": "Lesão Medular / Reabilitação",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Estudo clínico e biomecânico sobre reabilitação física, telerreabilitação e independência funcional em pessoas com lesão medular."
    },
    {
      "title": "Internal and External Training Workload Quantification in 4 Experienced Paracanoeing Athletes",
      "authors": "Frederico Ribeiro Neto; Ramires Alsamir Tibana; Jefferson R. Dorneles; Rodrigo R. Gomes Costa",
      "journal": "Journal of Sport Rehabilitation",
      "year": 2021,
      "theme": "Para canoagem",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Estudo focado na avaliação biomecânica, cinemática e trajetórias de rendimento de atletas na Para canoagem de velocidade."
    },
    {
      "title": "Medicine Ball Throw Responsiveness to Measure Wheelchair Basketball Mobility in Male Players",
      "authors": "Rodrigo R. Gomes Costa; Jefferson R. Dorneles; Guilherme Henrique Lopes; José Irineu Gorla; Frederico Ribeiro Neto",
      "journal": "Journal of Sport Rehabilitation",
      "year": 2021,
      "theme": "Lesão Medular / Reabilitação",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Estudo clínico e biomecânico sobre reabilitação física, telerreabilitação e independência funcional em pessoas com lesão medular."
    },
    {
      "title": "Peak Torque Prediction Using Handgrip and Strength Predictors in Men and Women With Motor Complete Spinal Cord Injury",
      "authors": "Frederico Ribeiro Neto; Jefferson R. Dorneles; João H. C. L. Veloso; Carlos W. P. Gonçalves; Rodrigo R. Gomes Costa",
      "journal": "Topics in Spinal Cord Injury Rehabilitation",
      "year": 2021,
      "theme": "Lesão Medular / Reabilitação",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Estudo clínico e biomecânico sobre reabilitação física, telerreabilitação e independência funcional em pessoas com lesão medular."
    },
    {
      "title": "Response letter to -Gait & Posture: Fatigue, fatigability, and muscle torquereduction-",
      "authors": "Jefferson R. Dorneles; Frederico Ribeiro Neto; Carlos W. P. Gonçalves; Rodrigo R. Gomes Costa; Rodrigo L. Carregaro",
      "journal": "Gait & Posture",
      "year": 2021,
      "theme": "Outros",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Pesquisa acadêmica sobre atividade física adaptada, saúde paralímpica e ciências aplicadas ao paradesporto e reabilitação."
    },
    {
      "title": "Static and Dynamic Strength Indicators in Paralympic Power-Lifters with and without Spinal Cord Injury",
      "authors": "L. J. Lopes Teles; Felipe J. Aidar; Matos, D. G.; Marçal, A. C.; Almeida-neto, P. F.; E. B. Neves; Moreira, O. C.; Frederico Ribeiro Neto; Garrido, N. D.; Vilaça-alves, J.; A. L. Díaz-de-Durana; Clemente, F. M.; Jeffreys, I.; Cabral, B. G. A. T.; Reis, V. M.",
      "journal": "International Journal of Environmental Research and Public Health",
      "year": 2021,
      "theme": "Para halterofilismo",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Investigação de marcadores de força muscular máxima, fadiga neuromuscular e análise biomecânica de técnicas no Para halterofilismo."
    },
    {
      "title": "Synchronous and asynchronous tele-exercise during the coronavirus disease 2019 pandemic: Comparisons of implementation and training load in individuals with spinal cord injury",
      "authors": "Rodrigo R. Gomes Costa; Dorneles, Jefferson R; João H. C. L. Veloso; Carlos W. P. Gonçalves; Frederico Ribeiro Neto",
      "journal": "Journal of Telemedicine and Telecare",
      "year": 2021,
      "theme": "Lesão Medular / Reabilitação",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Estudo clínico e biomecânico sobre reabilitação física, telerreabilitação e independência funcional em pessoas com lesão medular."
    },
    {
      "title": "The Torque Referenced to a Perceived Exertion Level Is Affected by the Type of Movement in Men With Spinal Cord Injury",
      "authors": "Frederico Ribeiro Neto; Rodrigo R. Gomes Costa; Pereira Avela, B.; S. A. O. Júnior; A. M. Toledo; Rodrigo L. Carregaro",
      "journal": "Topics in Spinal Cord Injury Rehabilitation",
      "year": 2021,
      "theme": "Lesão Medular / Reabilitação",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Estudo clínico e biomecânico sobre reabilitação física, telerreabilitação e independência funcional em pessoas com lesão medular."
    },
    {
      "title": "Validation Of the Repetitions in Reserve Rating Scale in Paralympic Powerlifting Athletes",
      "authors": "Frederico Ribeiro Neto; Jefferson R. Dorneles; Felipe J. Aidar; Carlos W. P. Gonçalves; João H. C. L. Veloso; Rodrigo R. Gomes Costa",
      "journal": "International Journal of Sports Medicine",
      "year": 2021,
      "theme": "Para halterofilismo",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Investigação de marcadores de força muscular máxima, fadiga neuromuscular e análise biomecânica de técnicas no Para halterofilismo."
    },
    {
      "title": "Are Body Composition, Strength, and Functional Independence Similarities Between Spinal Cord Injury Classifications? A Discriminant Analysis",
      "authors": "Rodrigo R. Gomes Costa; Rodrigo L. Carregaro; Frederico Ribeiro Neto",
      "journal": "Journal of Sport Rehabilitation",
      "year": 2020,
      "theme": "Lesão Medular / Reabilitação",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Estudo clínico e biomecânico sobre reabilitação física, telerreabilitação e independência funcional em pessoas com lesão medular."
    },
    {
      "title": "Are the flat and arched bench press really similar?",
      "authors": "Frederico Ribeiro Neto; Jefferson R. Dorneles; Rodrigo R. Gomes Costa",
      "journal": "Sports Biomechanics",
      "year": 2020,
      "theme": "Para halterofilismo",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Investigação de marcadores de força muscular máxima, fadiga neuromuscular e análise biomecânica de técnicas no Para halterofilismo."
    },
    {
      "title": "Does prolonged walking cause greater muscle fatigability in individuals withincomplete spinal cord injury compared with matched-controls?",
      "authors": "Jefferson R. Dorneles; Frederico Ribeiro Neto; Carlos W. P. Gonçalves; Rodrigo R. Gomes Costa; Rodrigo L. Carregaro",
      "journal": "Gait & Posture",
      "year": 2020,
      "theme": "Lesão Medular / Reabilitação",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Estudo clínico e biomecânico sobre reabilitação física, telerreabilitação e independência funcional em pessoas com lesão medular."
    },
    {
      "title": "Muscle strength cutoff-points for men with SCI Muscle strength cutoff-points for functional independence and wheelchair ability in men with spinal cord injury",
      "authors": "Frederico Ribeiro Neto; Rodrigo R. Gomes Costa; Tanhoffer, R. A.; Josevan Cerqueira Leal; Martim Bottaro; Rodrigo L. Carregaro",
      "journal": "Archives of Physical Medicine and Rehabilitation",
      "year": 2020,
      "theme": "Lesão Medular / Reabilitação",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Estudo clínico e biomecânico sobre reabilitação física, telerreabilitação e independência funcional em pessoas com lesão medular."
    },
    {
      "title": "Neuromuscular efficiency of men with high and low spinal cord injury levels compared with non-disabled participants",
      "authors": "Frederico Ribeiro Neto; Rodrigo R. Gomes Costa; Tanhoffer, Ricardo Antônio; Josevan Cerqueira Leal; Martim Bottaro; Rodrigo L. Carregaro",
      "journal": "Isokinetics and Exercise Science",
      "year": 2020,
      "theme": "Lesão Medular / Reabilitação",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Estudo clínico e biomecânico sobre reabilitação física, telerreabilitação e independência funcional em pessoas com lesão medular."
    },
    {
      "title": "Performance Differences Between the Arched and Flat Bench Press in Beginner and Experienced Paralympic Powerlifters",
      "authors": "Frederico Ribeiro Neto; Jefferson R. Dorneles; Luna, R. M.; Spina, M. A.; Carlos W. P. Gonçalves; Rodrigo R. Gomes Costa",
      "journal": "Journal of Strength and Conditioning Research",
      "year": 2020,
      "theme": "Para halterofilismo",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Investigação de marcadores de força muscular máxima, fadiga neuromuscular e análise biomecânica de técnicas no Para halterofilismo."
    },
    {
      "title": "Cross-culturalvalidation of a Brazilian version of the adapted manual wheelchair circuit (AMWC-Brazil)",
      "authors": "Frederico Ribeiro Neto; Rodrigo R. Gomes Costa; Ana Cláudia Garcia Lopes; Rodrigo L. Carregaro",
      "journal": "Physiotherapy Theory and Practice",
      "year": 2019,
      "theme": "Lesão Medular / Reabilitação",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Estudo clínico e biomecânico sobre reabilitação física, telerreabilitação e independência funcional em pessoas com lesão medular."
    },
    {
      "title": "The addition of three new items in the Adapted Manual Wheelchair Circuit improves the discrimination between different levels of spinal cord injury",
      "authors": "Frederico Ribeiro Neto; Rodrigo R. Gomes Costa; Rodrigo L. Carregaro",
      "journal": "Motricidade",
      "year": 2019,
      "theme": "Lesão Medular / Reabilitação",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Estudo clínico e biomecânico sobre reabilitação física, telerreabilitação e independência funcional em pessoas com lesão medular."
    },
    {
      "title": "Cross-validity of one maximum repetition predictive equation for men with spinal cord injury",
      "authors": "Rodrigo R. Gomes Costa; Frederico Ribeiro Neto",
      "journal": "Journal of Spinal Cord Medicine",
      "year": 2018,
      "theme": "Lesão Medular / Reabilitação",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Estudo clínico e biomecânico sobre reabilitação física, telerreabilitação e independência funcional em pessoas com lesão medular."
    },
    {
      "title": "Differences of Relative and Absolute Strength of Individuals with Spinal Cord Injury from individuals without disability Subjects - A Discriminant Analysis",
      "authors": "Frederico Ribeiro Neto; Rodrigo R. Gomes Costa; Tanhoffer, Ricardo; Martim Bottaro; Rodrigo L. Carregaro",
      "journal": "Journal of Sport Rehabilitation",
      "year": 2018,
      "theme": "Lesão Medular / Reabilitação",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Estudo clínico e biomecânico sobre reabilitação física, telerreabilitação e independência funcional em pessoas com lesão medular."
    },
    {
      "title": "In Response to: Impact of CrossFit-Related Spinal Injuries",
      "authors": "R. L. Almeida; V. G. Carvalho; Frederico Ribeiro Neto",
      "journal": "Clinical Journal of Sport Medicine",
      "year": 2018,
      "theme": "Outros",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Pesquisa acadêmica sobre atividade física adaptada, saúde paralímpica e ciências aplicadas ao paradesporto e reabilitação."
    },
    {
      "title": "Influence of familiarization on maximum strength testing in male individuals with spinal cord injury",
      "authors": "Frederico Ribeiro Neto; Rodrigo R. Gomes Costa; Jefferson Rosa Cardoso; Lee Brown; Martim Bottaro; Rodrigo L. Carregaro",
      "journal": "Isokinetics and Exercise Science",
      "year": 2018,
      "theme": "Lesão Medular / Reabilitação",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Estudo clínico e biomecânico sobre reabilitação física, telerreabilitação e independência funcional em pessoas com lesão medular."
    },
    {
      "title": "Neuromuscular efficiency of the knee joint muscles in the early-phase of strength training: effects of antagonist muscles pre-activation",
      "authors": "Wagner Rodrigues Martins; Martim Bottaro; Euler Alves Cardoso; Frederico Ribeiro Neto; Rodrigo L. Carregaro",
      "journal": "Motricidade",
      "year": 2018,
      "theme": "Outros",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Pesquisa acadêmica sobre atividade física adaptada, saúde paralímpica e ciências aplicadas ao paradesporto e reabilitação."
    },
    {
      "title": "Functional Classification: Is There a Better Solution?",
      "authors": "Frederico Ribeiro Neto; Lopes, G. H.; Rodrigo R. Gomes Costa",
      "journal": "Journal of Sport Rehabilitation",
      "year": 2017,
      "theme": "Outros",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Pesquisa acadêmica sobre atividade física adaptada, saúde paralímpica e ciências aplicadas ao paradesporto e reabilitação."
    },
    {
      "title": "Validity of one-repetition maximum predictive equations in men with spinal cord injury",
      "authors": "Frederico Ribeiro Neto; Patrícia Guanais; Elisa Dornelas; Alessandra C. Coutinho; Rodrigo R. Gomes Costa",
      "journal": "Spinal Cord",
      "year": 2017,
      "theme": "Lesão Medular / Reabilitação",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Estudo clínico e biomecânico sobre reabilitação física, telerreabilitação e independência funcional em pessoas com lesão medular."
    },
    {
      "title": "Influence of Relative Strength on Functional Independence of Patients With Spinal Cord Injury",
      "authors": "Frederico Ribeiro Neto; Patrícia Guanais; Lopes, Guilherme H.; Elisa Dornelas; De Campos Barbetta, Daniela; Alessandra C. Coutinho; Carlos W. P. Gonçalves; Rodrigo R. Gomes Costa",
      "journal": "Archives of Physical Medicine and Rehabilitation",
      "year": 2016,
      "theme": "Lesão Medular / Reabilitação",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Estudo clínico e biomecânico sobre reabilitação física, telerreabilitação e independência funcional em pessoas com lesão medular."
    },
    {
      "title": "Kinesiotaping enhances the rate of force development but not the neuromuscular efficiency of physically active young men",
      "authors": "Igor Magalhães; Martim Bottaro; Rinaldo André Mezzarane; Frederico Ribeiro Neto; Bruno A. Rodrigues; João B. Ferreira-Junior; Rodrigo L. Carregaro",
      "journal": "Journal of Electromyography and Kinesiology",
      "year": 2016,
      "theme": "Outros",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Pesquisa acadêmica sobre atividade física adaptada, saúde paralímpica e ciências aplicadas ao paradesporto e reabilitação."
    },
    {
      "title": "Reproducibility and responsiveness of heart rate indexes to assess wheeling efficiency in patients with spinal cord injuries",
      "authors": "Frederico Ribeiro Neto; Alessandra C. Coutinho; P. S. S. Beraldo",
      "journal": "Spinal Cord",
      "year": 2014,
      "theme": "Lesão Medular / Reabilitação",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Estudo clínico e biomecânico sobre reabilitação física, telerreabilitação e independência funcional em pessoas com lesão medular."
    },
    {
      "title": "Sustained effect of resistance training on blood pressure and hand grip strength following a detraining period in elderly hypertensive women: a pilot study",
      "authors": "Dahan da Cunha Nascimento; Ramires Alsamir Tibana; Franklin Benik; Keila Elizabeth Fontana; Frederico Ribeiro Neto; Frederico Santos de Santana; Leopoldo dos Santos Neto; Renato André Sousa da Silva; Alessandro de Oliveira Silva; Darlan Lopes de Farias; Jonato Prestes; Sandor Balsamo",
      "journal": "Clinical Interventions in Aging",
      "year": 2014,
      "theme": "Outros",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Pesquisa acadêmica sobre atividade física adaptada, saúde paralímpica e ciências aplicadas ao paradesporto e reabilitação."
    },
    {
      "title": "Validity of heart rate indexes to assess wheeling efficiency in patients with spinal cord injuries",
      "authors": "Alessandra C. Coutinho; Frederico Ribeiro Neto; P. S. S. Beraldo",
      "journal": "Spinal Cord",
      "year": 2014,
      "theme": "Lesão Medular / Reabilitação",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Estudo clínico e biomecânico sobre reabilitação física, telerreabilitação e independência funcional em pessoas com lesão medular."
    },
    {
      "title": "Análise dos valores de composição corporal em homens com diferentes níveis de lesão medular",
      "authors": "Frederico Ribeiro Neto; Lopes, G. H.",
      "journal": "Fisioterapia em Movimento",
      "year": 2013,
      "theme": "Outros",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Pesquisa acadêmica sobre atividade física adaptada, saúde paralímpica e ciências aplicadas ao paradesporto e reabilitação."
    },
    {
      "title": "Determination of normative values for 20-min exercise of wheelchair propulsion by spinal cord injury patients",
      "authors": "Alessandra C. Coutinho; Frederico Ribeiro Neto; C. E. V. Perna",
      "journal": "Spinal Cord",
      "year": 2013,
      "theme": "Lesão Medular / Reabilitação",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Estudo clínico e biomecânico sobre reabilitação física, telerreabilitação e independência funcional em pessoas com lesão medular."
    },
    {
      "title": "The interactions between hemostasis and resistance training: a review",
      "authors": "Dahan da Cunha Nascimento; Frederico Ribeiro Neto; Renato André Sousa da Silva Santana; Leopoldo dos Santos Neto; Sandor Balsamo",
      "journal": "International Journal of General Medicine",
      "year": 2012,
      "theme": "Outros",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Pesquisa acadêmica sobre atividade física adaptada, saúde paralímpica e ciências aplicadas ao paradesporto e reabilitação."
    },
    {
      "title": "Body composition modifications in people with chronic spinal cord injury after supervised physical activity",
      "authors": "Frederico Ribeiro Neto; Guilherme Henrique Lopes",
      "journal": "Journal of Spinal Cord Medicine",
      "year": 2011,
      "theme": "Lesão Medular / Reabilitação",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Estudo clínico e biomecânico sobre reabilitação física, telerreabilitação e independência funcional em pessoas com lesão medular."
    },
    {
      "title": "Treinamento resistido como intervenção na reabilitação em pacientes com lesão medular: uma revisão de literatura",
      "authors": "Frederico Ribeiro Neto; Gentil, P.",
      "journal": "Acta Fisiátrica",
      "year": 2011,
      "theme": "Lesão Medular / Reabilitação",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Estudo clínico e biomecânico sobre reabilitação física, telerreabilitação e independência funcional em pessoas com lesão medular."
    },
    {
      "title": "Correlation of the Physical Valences Force, Flexibility and Balance with the Test of Activity of Daily Life to Arise Itself of the Ground",
      "authors": "Frederico Ribeiro Neto; R. Parca; J. Carmo",
      "journal": "The FIEP Bulletin",
      "year": 2004,
      "theme": "Outros",
      "status": "Finalizado",
      "doi": "#",
      "abstract": "Pesquisa acadêmica sobre atividade física adaptada, saúde paralímpica e ciências aplicadas ao paradesporto e reabilitação."
    }
  ]
};

let profileData = null;

// ==========================================================================
// 1. CARREGAMENTO INICIAL DE DADOS (Fetch / Fallback)
// ==========================================================================
async function loadProfileData() {
    try {
        const response = await fetch('profile_data.json');
        if (!response.ok) {
            throw new Error('Erro ao carregar o arquivo JSON local');
        }
        profileData = await response.json();
        console.log('Dados carregados com sucesso de profile_data.json');
    } catch (error) {
        console.warn('Usando dados de fallback integrados. Motivo: ', error.message);
        profileData = PROFILE_DATA_FALLBACK;
    }
    
    // Renderiza a interface com os dados disponíveis
    initializePortfolio();
}

// ==========================================================================
// 2. INICIALIZAÇÃO E RENDERIZAÇÃO DA PÁGINA
// ==========================================================================
function initializePortfolio() {
    if (!profileData) return;

    // A. Renderizar Dados Pessoais
    document.getElementById('profile-name').textContent = profileData.personal.name;
    document.getElementById('profile-bio-text').textContent = profileData.personal.bio;
    
    // B. Renderização Inteligente de Avatar (Foto ou Iniciais)
    renderAvatar();
    
    // C. Renderizar Badges de Mídias Acadêmicas e Contatos
    renderSocialBadges();

    // D. Renderizar Especialidades
    renderExpertise();

    // E. Renderizar Projetos
    renderProjects('all');

    // F. Popular Dropdowns Dinamicamente
    populateFilterDropdowns();

    // G. Renderizar Publicações Acadêmicas
    renderPublications('');
    
    // H. Inicializar Gráfico Bibliométrico
    renderCoauthorsChart();
    
    // I. Inicializar Listeners de Eventos do Portfólio
    setupEventListeners();
}

// Popular Dropdowns Dinamicamente com dados reais e contagem de artigos
function populateFilterDropdowns() {
    const yearSelect = document.getElementById('filter-pub-year');
    const journalSelect = document.getElementById('filter-pub-journal');
    const themeSelect = document.getElementById('filter-pub-theme');
    
    if (themeSelect) {
        themeSelect.innerHTML = '<option value="all">Todos os temas</option>';
        const themes = [...new Set(profileData.publications.map(p => p.theme))];
        themes.sort();
        themes.forEach(theme => {
            if (theme && theme.trim() !== "") {
                const count = profileData.publications.filter(p => p.theme === theme).length;
                const opt = document.createElement('option');
                opt.value = theme;
                opt.textContent = `${theme} (${count})`;
                themeSelect.appendChild(opt);
            }
        });
    }
    
    if (yearSelect) {
        yearSelect.innerHTML = '<option value="all">Todos os anos</option>';
        const years = [...new Set(profileData.publications.map(p => p.year))];
        years.sort((a, b) => b - a);
        
        years.forEach(year => {
            const count = profileData.publications.filter(p => p.year === year).length;
            const opt = document.createElement('option');
            opt.value = year.toString();
            opt.textContent = `${year} (${count})`;
            yearSelect.appendChild(opt);
        });
        
        const beforeCount = profileData.publications.filter(p => p.year < 2020).length;
        const optBefore = document.createElement('option');
        optBefore.value = 'before-2020';
        optBefore.textContent = `Antes de 2020 (${beforeCount})`;
        yearSelect.appendChild(optBefore);
    }
    
    if (journalSelect) {
        journalSelect.innerHTML = '<option value="all">Todos os periódicos</option>';
        const journals = [...new Set(profileData.publications.map(p => p.journal))];
        journals.sort();
        
        journals.forEach(journal => {
            if (journal.trim() !== "") {
                const count = profileData.publications.filter(p => p.journal === journal).length;
                const opt = document.createElement('option');
                opt.value = journal;
                opt.textContent = `${journal} (${count})`;
                journalSelect.appendChild(opt);
            }
        });
    }
}

// Lógica de Renderização de Avatar
function renderAvatar() {
    const visualContainer = document.getElementById('hero-avatar-visual');
    if (!visualContainer) return;
    
    visualContainer.innerHTML = '';
    
    if (profileData.personal.avatar && profileData.personal.avatar.trim() !== '') {
        // Criar imagem se houver caminho definido
        const img = document.createElement('img');
        img.id = 'profile-avatar-img';
        img.src = profileData.personal.avatar;
        img.alt = `Foto de Perfil de ${profileData.personal.name}`;
        
        visualContainer.appendChild(img);
    } else {
        // Gerar iniciais dinâmicas (ex: FRN) baseadas no nome
        const nameParts = profileData.personal.name.split(' ');
        let initials = '';
        if (nameParts.length >= 3) {
            initials = (nameParts[0][0] + nameParts[1][0] + nameParts[nameParts.length - 1][0]).toUpperCase();
        } else if (nameParts.length === 2) {
            initials = (nameParts[0][0] + nameParts[1][0]).toUpperCase();
        } else {
            initials = profileData.personal.name.substring(0, 2).toUpperCase();
        }
        
        const initialsDiv = document.createElement('div');
        initialsDiv.id = 'profile-initials-avatar';
        initialsDiv.className = 'initials-avatar';
        initialsDiv.textContent = initials;
        
        visualContainer.appendChild(initialsDiv);
    }
}

// Renderização dos Badges Sociais/Acadêmicos
function renderSocialBadges() {
    const container = document.getElementById('academic-social-badges-container');
    if (!container) return;
    container.innerHTML = '';
    
    const links = profileData.links;
    const badgeConfigs = [
        { key: 'lattes', label: 'Lattes', icon: 'bi-journal-code', className: 'badge-lattes' },
        { key: 'orcid', label: 'ORCID', icon: 'bi-person-badge', className: 'badge-orcid' },
        { key: 'scholar', label: 'Google Scholar', icon: 'bi-mortarboard', className: 'badge-scholar' },
        { key: 'researchgate', label: 'ResearchGate', icon: 'bi-blockquote-left', className: '' },
        { key: 'github', label: 'GitHub', icon: 'bi-github', className: '' },
        { key: 'linkedin', label: 'LinkedIn', icon: 'bi-linkedin', className: '' },
        { key: 'instagram', label: 'Instagram', icon: 'bi-instagram', className: '' },
        { key: 'email', label: 'E-mail', icon: 'bi-envelope', className: '' }
    ];

    badgeConfigs.forEach(config => {
        if (links[config.key]) {
            const badge = document.createElement('a');
            badge.className = `social-badge ${config.className}`;
            badge.id = `social-badge-link-${config.key}`;
            badge.innerHTML = `
                <i class="${config.icon}"></i>
                <span>${config.label}</span>
            `;
            
            if (config.key === 'email') {
                badge.href = '#';
                badge.addEventListener('click', (e) => {
                    e.preventDefault();
                    navigator.clipboard.writeText(links[config.key]).then(() => {
                        showToast('<i class="bi bi-check-circle-fill" style="color: var(--success); margin-right: 0.4rem;"></i> E-mail copiado para a área de transferência!');
                    }).catch(err => {
                        window.location.href = `mailto:${links[config.key]}`;
                    });
                });
            } else {
                badge.href = links[config.key];
                badge.target = '_blank';
                badge.rel = 'noopener noreferrer';
            }
            container.appendChild(badge);
        }
    });
}

// Função para exibir notificações flutuantes (Toast) premium
function showToast(message) {
    let toast = document.getElementById('floating-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'floating-toast';
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.innerHTML = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}


// Renderização das Especialidades
function renderExpertise() {
    const container = document.getElementById('expertise-grid-container');
    if (!container) return;
    container.innerHTML = '';

    profileData.expertise.forEach((item, index) => {
        const card = document.createElement('article');
        card.className = 'flat-card expertise-card';
        card.id = `expertise-card-${index}`;
        card.innerHTML = `
            <div class="expertise-icon-box" id="expertise-icon-box-${index}">
                <i class="${item.icon}"></i>
            </div>
            <h3 class="expertise-title" id="expertise-title-${index}" style="font-size: 1.1rem; font-weight: 600;">${item.area}</h3>
            <p class="expertise-desc" style="color: var(--text-secondary); font-size: 0.85rem; line-height: 1.5;">${item.description}</p>
        `;
        container.appendChild(card);
    });
}

// Renderização de Projetos
function renderProjects(filterValue) {
    const container = document.getElementById('projects-grid-container');
    if (!container) return;
    container.innerHTML = '';

    const filteredProjects = profileData.projects.filter(project => {
        if (filterValue === 'all') return true;
        return project.category.toLowerCase().includes(filterValue.toLowerCase());
    });

    if (filteredProjects.length === 0) {
        container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); font-size: 0.9rem;">Nenhum projeto encontrado nesta categoria.</p>`;
        return;
    }

    filteredProjects.forEach((project, index) => {
        const activeClass = project.status.toLowerCase() === 'em produção' ? 'active' : '';
        const techTags = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
        
        const card = document.createElement('article');
        card.className = 'flat-card project-card';
        card.id = `project-card-${index}`;
        
        card.innerHTML = `
            <div>
                <div class="project-header">
                    <span class="project-category">${project.category}</span>
                    <span class="project-status ${activeClass}">${project.status}</span>
                </div>
                <h3 class="project-title" id="project-title-${index}">${project.title}</h3>
                <p class="project-desc">${project.description}</p>
                <div class="project-tech">${techTags}</div>
            </div>
            <div class="project-links">
                <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="project-link" id="project-demo-link-${index}">
                    <i class="bi bi-box-arrow-up-right"></i> Acessar Site
                </a>
                <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link" id="project-github-link-${index}">
                    <i class="bi bi-github"></i> Código
                </a>
            </div>
        `;
        container.appendChild(card);
    });
}

// Renderização de Publicações (com busca integrada e estratificação)
function renderPublications(searchQuery) {
    const container = document.getElementById('publications-list-container');
    if (!container) return;
    container.innerHTML = '';

    // Ler valores selecionados nos dropdowns de estratificação
    const filterYear = document.getElementById('filter-pub-year') ? document.getElementById('filter-pub-year').value : 'all';
    const filterTheme = document.getElementById('filter-pub-theme') ? document.getElementById('filter-pub-theme').value : 'all';
    const filterJournal = document.getElementById('filter-pub-journal') ? document.getElementById('filter-pub-journal').value : 'all';
    const filterAuthor = document.getElementById('filter-pub-author') ? document.getElementById('filter-pub-author').value : 'all';

    const query = searchQuery.toLowerCase().trim();
    
    const filteredPubs = profileData.publications.filter(pub => {
        // 1. Filtro por Busca Textual
        const matchesQuery = !query || 
                             pub.title.toLowerCase().includes(query) || 
                             pub.journal.toLowerCase().includes(query) || 
                             pub.authors.toLowerCase().includes(query) ||
                             pub.abstract.toLowerCase().includes(query);

        // 2. Filtro por Ano
        let matchesYear = true;
        if (filterYear !== 'all') {
            if (filterYear === 'before-2020') {
                matchesYear = pub.year < 2020;
            } else {
                matchesYear = pub.year.toString() === filterYear;
            }
        }

        // 3. Filtro por Tema/Linha de Pesquisa
        let matchesTheme = true;
        if (filterTheme !== 'all') {
            if (filterTheme === 'Outros') {
                matchesTheme = pub.theme !== 'Lesão Medular / Reabilitação' && 
                               pub.theme !== 'Para-halterofilismo' && 
                               pub.theme !== 'Paracanoagem' && 
                               pub.theme !== 'Rugby em Cadeira de Rodas';
            } else {
                matchesTheme = pub.theme === filterTheme;
            }
        }

        // 4. Filtro por Periódico/Revista
        let matchesJournal = true;
        if (filterJournal !== 'all') {
            if (filterJournal === 'Outras') {
                matchesJournal = pub.journal !== 'Adapted Physical Activity Quarterly' && 
                                 pub.journal !== 'Perceptual and Motor Skills' && 
                                 pub.journal !== 'Journal of Spinal Cord Medicine' && 
                                 pub.journal !== 'Revista Brasileira de Medicina do Esporte' && 
                                 pub.journal !== 'Journal of Strength and Conditioning Research';
            } else {
                matchesJournal = pub.journal === filterJournal;
            }
        }

        // 5. Filtro por Autoria (F. Ribeiro Neto como 1º Autor ou Coautor)
        let matchesAuthor = true;
        if (filterAuthor !== 'all') {
            const authorsStr = pub.authors.trim();
            const isFirst = authorsStr.startsWith('Ribeiro Neto') || authorsStr.startsWith('Ribeiro-Neto');
            if (filterAuthor === 'first') {
                matchesAuthor = isFirst;
            } else if (filterAuthor === 'co') {
                matchesAuthor = !isFirst;
            }
        }

        return matchesQuery && matchesYear && matchesTheme && matchesJournal && matchesAuthor;
    });

    // Atualizar contador de resultados
    document.getElementById('pub-results-count-value').textContent = filteredPubs.length;

    if (filteredPubs.length === 0) {
        container.innerHTML = `
            <div class="flat-card" style="text-align: center; padding: 2.5rem;">
                <i class="bi bi-journal-x" style="font-size: 2.5rem; color: var(--text-muted); display: block; margin-bottom: 0.75rem;"></i>
                <p style="color: var(--text-secondary); font-size: 1rem; font-weight: 600;">Nenhum artigo científico corresponde aos filtros de busca e estratificação selecionados.</p>
                <p style="color: var(--text-muted); font-size: 0.8rem; margin-top: 0.25rem;">Tente ajustar as opções de estratificação acima.</p>
            </div>
        `;
        return;
    }

    filteredPubs.forEach((pub, index) => {
        const card = document.createElement('article');
        card.className = 'flat-card pub-card';
        card.id = `pub-card-${index}`;
        
        let doiUrl = pub.doi;
        if (!doiUrl || doiUrl.trim() === '#' || doiUrl.trim() === '') {
            doiUrl = `https://scholar.google.com/scholar?q=${encodeURIComponent(pub.title)}`;
        }
        
        card.innerHTML = `
            <div class="pub-meta">
                <span class="pub-year">${pub.year}</span>
                <span class="pub-journal">${pub.journal}</span>
                <span class="pub-status">${pub.status}</span>
            </div>
            <h3 class="pub-title" id="pub-title-${index}">${highlightText(pub.title, query)}</h3>
            <p class="pub-authors">${pub.authors}</p>
            
            <button class="pub-abstract-trigger" id="pub-abstract-trigger-${index}" aria-expanded="false" aria-controls="pub-abstract-${index}">
                <i class="bi bi-chevron-down"></i> Ver Resumo (Abstract)
            </button>
            <div class="pub-abstract" id="pub-abstract-${index}">
                <p style="line-height: 1.5; color: var(--text-secondary);">${pub.abstract}</p>
            </div>
            
            <div class="pub-links">
                <a href="${doiUrl}" target="_blank" rel="noopener noreferrer" class="pub-link" id="pub-doi-link-${index}">
                    <i class="bi bi-link-45deg"></i> Link de Acesso / DOI
                </a>
                <a href="mailto:${profileData.links.email}?subject=Solicitação de Artigo Científico: ${encodeURIComponent(pub.title)}&body=Olá Dr. Frederico Ribeiro Neto,%0A%0AGostaria de solicitar a versão em PDF do seu artigo científico:%0A%22${encodeURIComponent(pub.title)}%22 (publicado em ${pub.year}, no periódico ${encodeURIComponent(pub.journal)}).%0A%0AAgradeço desde já!%0A%0AAtenciosamente," class="pub-link" id="pub-request-link-${index}">
                    <i class="bi bi-envelope-paper"></i> Solicitar PDF por E-mail
                </a>
            </div>
        `;
        container.appendChild(card);
    });

    // Vincular os gatilhos dos abstracts criados
    bindAbstractTriggers();
}

// Efeito sutil de marcação (Highlight) do texto buscado
function highlightText(text, search) {
    if (!search) return text;
    const regex = new RegExp(`(${escapeRegExp(search)})`, 'gi');
    return text.replace(regex, '<mark style="background: rgba(96, 165, 250, 0.25); color: inherit; padding: 0.05rem 0.15rem; border-radius: 2px;">$1</mark>');
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Vincula a interatividade de ver/esconder abstract
function bindAbstractTriggers() {
    const triggers = document.querySelectorAll('.pub-abstract-trigger');
    triggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            const targetId = this.getAttribute('aria-controls');
            const target = document.getElementById(targetId);
            
            if (isExpanded) {
                target.style.display = 'none';
                this.setAttribute('aria-expanded', 'false');
                this.innerHTML = `<i class="bi bi-chevron-down"></i> Ver Resumo (Abstract)`;
            } else {
                target.style.display = 'block';
                this.setAttribute('aria-expanded', 'true');
                this.innerHTML = `<i class="bi bi-chevron-up"></i> Ocultar Resumo`;
            }
        });
    });
}

// ==========================================================================
// 3. EVENTOS, INTERATIVIDADE E NAVEGAÇÃO
// ==========================================================================
function setupEventListeners() {
    // A. Alternador de Tema Escuro/Claro
    const themeBtn = document.getElementById('theme-toggle-btn');
    const body = document.body;

    // Carregar tema preferido do localStorage (Default: dark)
    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.setAttribute('data-theme', savedTheme);
    updateThemeToggleIcon(savedTheme);

    themeBtn.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeToggleIcon(newTheme);
        // Recarregar gráfico para atualizar as cores dinamicamente
        renderCoauthorsChart();
    });

    // B. Menu Responsivo Mobile
    const mobileMenuBtn = document.getElementById('mobile-menu-trigger');
    const navMenu = document.getElementById('nav-menu-list');
    
    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.className = 'bi bi-x-lg';
        } else {
            icon.className = 'bi bi-list';
        }
    });

    // Fechar menu mobile ao clicar em um link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenuBtn.querySelector('i').className = 'bi bi-list';
        });
    });

    // Fechar menu mobile ao clicar fora dele
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            navMenu.classList.remove('active');
            mobileMenuBtn.querySelector('i').className = 'bi bi-list';
        }
    });

    // C. Filtros de Projetos
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const filterValue = this.getAttribute('data-filter');
            renderProjects(filterValue);
        });
    });

    // D. Buscador e Estratificação de Publicações
    const searchInput = document.getElementById('pub-search-input-field');
    const filterYear = document.getElementById('filter-pub-year');
    const filterTheme = document.getElementById('filter-pub-theme');
    const filterJournal = document.getElementById('filter-pub-journal');
    const filterAuthor = document.getElementById('filter-pub-author');

    const triggerFiltering = () => {
        const query = searchInput ? searchInput.value : '';
        renderPublications(query);
    };

    if (searchInput) searchInput.addEventListener('input', triggerFiltering);
    if (filterYear) filterYear.addEventListener('change', triggerFiltering);
    if (filterTheme) filterTheme.addEventListener('change', triggerFiltering);
    if (filterJournal) filterJournal.addEventListener('change', triggerFiltering);
    if (filterAuthor) filterAuthor.addEventListener('change', triggerFiltering);
}

function updateThemeToggleIcon(theme) {
    const btn = document.getElementById('theme-toggle-btn');
    const moon = btn.querySelector('.bi-moon-stars-fill');
    const sun = btn.querySelector('.bi-sun-fill');
    
    if (theme === 'light') {
        moon.style.display = 'none';
        sun.style.display = 'block';
    } else {
        moon.style.display = 'block';
        sun.style.display = 'none';
    }
}

// Iniciar carregamento dos dados quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', loadProfileData);


// ==========================================================================
// 4. GRÁFICO BIBLIOMÉTRICO DE COAUTORIA (Chart.js)
// ==========================================================================
function renderCoauthorsChart() {
    const canvas = document.getElementById('coauthorsChart');
    if (!canvas) return;
    
    const coauthorCounts = {};
    profileData.publications.forEach(pub => {
        // Obter os coautores dividindo por ponto e vírgula
        const names = pub.authors.split(';');
        names.forEach(name => {
            name = name.trim();
            if (!name) return;
            
            const lowerName = name.toLowerCase();
            // Ignorar Frederico
            if (lowerName.includes("ribeiro neto") || lowerName.includes("ribeiro-neto") || lowerName.includes("frederico ribeiro") || lowerName === "neto, f. r." || lowerName === "neto" || lowerName.includes("neto, frederico")) {
                return;
            }
            
            // Padronizações comuns de nomes para consistência no gráfico
            if (lowerName.includes("gomes costa") || lowerName.includes("costa, r. r. g.")) {
                name = "Rodrigo R. Gomes Costa";
            } else if (lowerName.includes("winckler")) {
                name = "Ciro Winckler";
            } else if (lowerName.includes("dorneles") || lowerName.includes("dornéles")) {
                name = "Jefferson R. Dorneles";
            } else if (lowerName.includes("veloso")) {
                name = "João H. C. L. Veloso";
            } else if (lowerName.includes("gonçalves") || lowerName.includes("goncalves")) {
                name = "Carlos W. P. Gonçalves";
            } else if (lowerName.includes("bezerra, s.") || lowerName.includes("bezerra, sonny")) {
                name = "Sonny A. S. Bezerra";
            } else if (lowerName.includes("aidar")) {
                name = "Felipe J. Aidar";
            } else if (lowerName.includes("carregaro")) {
                name = "Rodrigo L. Carregaro";
            } else if (lowerName.includes("marques, j.") || lowerName.includes("machado marques")) {
                name = "Juliane M. Marques";
            }
            
            coauthorCounts[name] = (coauthorCounts[name] || 0) + 1;
        });
    });
    
    // Ordenar e pegar os top 8 coautores
    const sortedCoauthors = Object.entries(coauthorCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 8);
        
    const labels = sortedCoauthors.map(item => item[0]);
    const counts = sortedCoauthors.map(item => item[1]);
    
    // Paleta de cores do gráfico integrada ao tema
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    const barColor = isDark ? '#60a5fa' : '#1e3a8a';
    const textColor = isDark ? '#f9fafb' : '#111827';
    const gridColor = isDark ? '#1f2937' : '#e5e7eb';
    
    if (window.myCoauthorsChart) {
        window.myCoauthorsChart.destroy();
    }
    
    const ctx = canvas.getContext('2d');
    window.myCoauthorsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Artigos em Parceria',
                data: counts,
                backgroundColor: barColor,
                borderWidth: 0,
                borderRadius: 4,
                barThickness: 16
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: isDark ? '#111827' : '#ffffff',
                    titleColor: textColor,
                    bodyColor: textColor,
                    borderColor: gridColor,
                    borderWidth: 1,
                    displayColors: false
                }
            },
            scales: {
                x: {
                    grid: {
                        color: gridColor
                    },
                    ticks: {
                        color: textColor,
                        font: {
                            family: 'Inter',
                            size: 11
                        },
                        stepSize: 5
                    }
                },
                y: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: textColor,
                        font: {
                            family: 'Inter',
                            size: 11,
                            weight: '500'
                        }
                    }
                }
            }
        }
    });
}
