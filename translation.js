// =======================================================
// Dicionário de Textos de Tradução (Completo)
// =======================================================
const translations = {
    
    pt: {
        // --- NAVEGAÇÃO --- (Chaves do Cabeçalho e Rodapé)
        navHome: "Home",
        navSobre: "Sobre Nós",
        navEquipes: "Equipes",
        navContato: "Contato",
        
        // --- HOME: HERO ---
        heroTag: "π-Tágoras",
        heroTitle: '<span class="dark-text">Harmonia</span> <span class="highlight-text">Para o Corpo</span> E a <span class="highlight-text">Mente</span>',
        heroDescription: "A Pitágoras auxilia no desenvolvimento do raciocínio crítico e na reflexão ética, aplicando conceitos filosóficos para aprimorar a liderança e a tomada de decisões na sua empresa.",
        heroCta: "Agendar Demonstração",

        // --- HOME: TIMES (ÁREAS DE CONSULTORIA) ---
        timesTitle: "Áreas das Equipes",
        timesSubtitle: "A Pitágoras é composta por equipes especializadas, cada uma focada em uma área fundamental da filosofia aplicada para aprimorar o seu negócio com precisão e profundidade.",
        timeGregoLogo: "GREGO",
        timeGregoTitle: "Time Grego: Filosofia Clássica",
        timeRomanoLogo: "ROMANO",
        timeRomanoTitle: "Time Romano: Ética e Direito",
        timeAlemaoLogo: "ALEMÃO",
        timeAlemaoTitle: "Time Alemão: Lógica e Razão",
        timeBrasilLogo: "BRASIL",
        timeBrasilTitle: "Time Brasileiro: Pensamento Contemporâneo",
        timeLink: "Ver Mais", // Usado para todos os links

        // --- HOME: PRESENÇA NACIONAL (MÉTRICAS) ---
        presTitle: 'Nossa Presença <span>Nacional</span>',
        presPartnersText: "Parcerias estratégicas com grandes instituições para levar o pensamento crítico e a ética a todo o Brasil.",
        metricaState: "Estados do Brasil utilizam nossas soluções",
        metricaYears: "Anos no mercado de Filosofia Aplicada",
        metricaClients: "Clientes e Empresas Atendidos",
        metricaUsers: "Pessoas ativas em nossos cursos e palestras",
        presCta: "Agendar Demonstração",

        // --- HOME: ÉTICA (PILARES) ---
        eticaTitle: 'Nossa <span>Ética</span>',
        pilarRazaoTitle: "Razão e Lógica",
        pilarRazaoText: "Guiamos todas as decisões e estratégias com base em princípios lógicos sólidos, incentivando a análise racional e o pensamento crítico.",
        pilarJusticaTitle: "Justiça e Equidade",
        pilarJusticaText: "Promovemos ambientes de trabalho éticos e justos, garantindo que a integridade e a transparência sejam o alicerce de cada interação.",
        pilarDesenTitle: "Desenvolvimento Contínuo",
        pilarDesenText: "Focamos na melhoria constante, aplicando a filosofia como uma ferramenta de auto-aperfeiçoamento pessoal e profissional para todos os colaboradores.",
        pilarLink: "Ver os benefícios",

        // --- HOME: DEPOIMENTOS ---
        depoTitle: 'Depoimentos de <span>Clientes</span>',
        depo1Text: "“A consultoria filosófica da Pitágoras transformou a forma como nossa equipe lida com dilemas éticos. O raciocínio crítico aplicado elevou o nível das nossas decisões estratégicas. Recomendo fortemente!”",
        depo1Author: "- Maria Clara Mendes, CEO da InnovaTech",
        depo2Text: "“Com o apoio da Pitágoras, conseguimos estruturar nossos valores de forma sólida e coerente. Foi um investimento que deu clareza e propósito à nossa cultura corporativa.”",
        depo2Author: "- João Paulo Silveira, Diretor de RH",
        depo3Text: "“Os workshops sobre Filosofia Antiga e Liderança foram um diferencial. Saímos inspirados a buscar a sabedoria e a humanidade em cada projeto. Excelente trabalho!”",
        depo3Author: "- Ana Beatriz Costa, Gerente de Projetos",

        // --- HOME: FAQ ---
        faqTitle: 'Perguntas <span>Frequentes</span>',
        faqQ1: "O que a empresa Pitágoras faz?",
        faqA1: "A Pitágoras oferece cursos, palestras, consultorias e conteúdos voltados à filosofia e ao pensamento crítico, aplicando conceitos filosóficos à vida cotidiana e ao ambiente profissional.",
        faqQ2: "Por que o nome “Pitágoras”?",
        faqA2: "O nome homenageia o filósofo e matemático grego Pitágoras, símbolo da harmonia entre razão, lógica e espiritualidade — pilares fundamentais do nosso trabalho.",
        faqQ3: "A filosofia pode ser aplicada nas empresas?",
        faqA3: "Sim! A filosofia ajuda líderes e equipes a refletirem sobre ética, propósito, tomada de decisão e convivência, tornando o ambiente mais equilibrado e produtivo.",
        faqQ4: "Quem pode participar dos cursos?",
        faqA4: "Todos! Desde estudantes curiosos por filosofia até profissionais interessados em aprimorar o pensamento crítico e a visão de mundo.",
        faqQ5: "A Pitágoras trabalha apenas com filosofia antiga?",
        faqA5: "Não. Embora valorizemos os clássicos, também exploramos correntes modernas e contemporâneas, conectando as ideias antigas aos desafios atuais.",
        faqQ6: "Como posso entrar em contato?",
        faqA6: "Você pode entrar em contato pelo nosso site, e-mail ou redes sociais. Teremos prazer em conversar sobre filosofia e como ela pode transformar sua vida ou seu negócio.",
        btnAgenda: "Baixar Agenda",
        btnJogo: "Baixar Jogo",

        // --- RODAPÉ ---
        footerSlogan: "<strong>Filosofia para uma vida mais Sábia.</strong>",
        footerAddress: "Endereço: Rua Exemplo, 123 - Cidade/Estado",
        footerCopy: "&copy; 2025 Pitágoras - Todos os direitos reservados.",
        footerNavTitle: "Navegação",
        footerLinkHome: "Home",
        footerLinkSobre: "Sobre Nós",
        footerLinkAreas: "Áreas de Consultoria",
        footerLinkEtica: "Ética e Pilares",
        footerLinkContato: "Contato",
        footerContactTitle: "Fale Conosco",
        footerEmail: "Email: contato@pitagoras.com", // Inclui o email completo
        footerPhone: "Telefone: (11) 1234-5678",

        // =========================================================
        // --- CHAVES: SOBRE NÓS (SOBRE.HTML) ---
        // =========================================================
        historyTitle: 'Nossa <span>Trajetória</span>',
        historySubtitle1: 'A Origem do Raciocínio Aplicado',
        historyP1: 'A PITÁGORAS nasceu da convicção de que a filosofia não deve estar confinada ao meio acadêmico, mas sim ser uma ferramenta prática e poderosa para o mundo dos negócios e para o desenvolvimento pessoal.',
        historyP2: 'Fundada em 2010 por um grupo de Estudantes, nosso foco inicial foi oferecer workshops sobre ética e tomada de decisão para CEOs e líderes, abordando dilemas complexos que a gestão tradicional não conseguia resolver. Rapidamente, nos tornamos referência em aplicar a lógica estoica e aristotélica em contextos corporativos.',
        historySubtitle2: 'Evolução e Expansão',
        historyP3: 'Em 2018, expandimos nossos serviços para incluir consultoria estratégica de longo prazo, ajudando empresas a definir e manter seus valores culturais em meio a rápidas transformações tecnológicas. Nossa trajetória é marcada pelo compromisso contínuo com a excelência do pensamento e a construção de culturas organizacionais que promovem a sabedoria e a justiça (Dikaiosyne).',
        historyP4: 'Hoje, a PITÁGORAS é sinônimo de clareza e propósito, apoiando líderes a conduzir seus negócios de forma mais consciente, racional e humana. Seguimos investindo em pesquisa e desenvolvimento para transformar o dilema em convicção e a complexidade em simplicidade.',
        
        mvvTitle: 'Nossos Pilares de <span>Filosofia</span> Aplicada',
        mvvMissionTitle: 'Nossa Missão',
        mvvMissionText: 'Promover o pensamento crítico e o autoconhecimento através do ensino e da prática filosófica, ajudando pessoas e organizações a compreenderem melhor o mundo, suas ações e suas ideias.',
        mvvVisionTitle: 'Nossa Visão',
        mvvVisionText: 'Ser reconhecida como a principal referência em filosofia aplicada no Brasil, inspirando indivíduos e empresas a pensarem de forma mais consciente, racional e humana.',
        mvvValuesTitle: 'Nossos Valores',
        mvvValue1Title: 'Sabedoria:',
        mvvValue1Desc: 'Buscamos compreender antes de julgar.',
        mvvValue2Title: 'Ética:',
        mvvValue2Desc: 'Pautamos nossas ações em princípios morais e respeito mútuo.',
        mvvValue3Title: 'Raciocínio Crítico:',
        mvvValue3Desc: 'Valorizamos a dúvida como caminho para o conhecimento.',
        mvvValue4Title: 'Humanidade:',
        mvvValue4Desc: 'Colocamos o ser humano no centro das reflexões.',
        mvvValue5Title: 'Conhecimento Contínuo:',
        mvvValue5Desc: 'Acreditamos que aprender é um processo sem fim.',
        
        timelineTitle: 'Nossa <span>Evolução</span> Filosófica',
        timelineYear1: '2010',
        timelineDesc1: '<strong>Fundação da PITÁGORAS:</strong> Início das atividades como workshops de Ética e Liderança, focados em filosofia estoica.',
        timelineYear2: '2014',
        timelineDesc2: '<strong>Primeira Publicação:</strong> Lançamento do e-book "O Raciocínio de Aristóteles nos Negócios", marcando nossa expansão digital.',
        timelineYear3: '2018',
        timelineDesc3: '<strong>Consultoria Estratégica:</strong> Ampliação do foco para consultoria de longo prazo em cultura e valores corporativos.',
        timelineYear4: '2023',
        timelineDesc4: '<strong>Inovação:</strong> Implementação da área de <Strong>"Filosofia da Tecnologia"</Strong>, abordando ética em IA e transformação digital.',
        timelineYear5: 'HOJE',
        timelineDesc5: '<strong>Liderança:</strong> Consolidada como referência em filosofia aplicada no Brasil e parceira de grandes organizações.',
        
        impactTitle: 'Nosso Impacto <span>Global</span>',
        metricaGlobalNum1: '12 <span>+</span>',
        metricaGlobalText1: 'Países com consultoria estratégica',
        metricaGlobalNum2: '15 <span>+</span>',
        metricaGlobalText2: 'Anos no mercado de consultoria de liderança',
        metricaGlobalNum3: '2.500 <span>+</span>',
        metricaGlobalText3: 'Líderes e CEOs treinados em Ética',
        metricaGlobalNum4: '70 <span>+</span>',
        metricaGlobalText4: 'Empresas com Framework de Valores desenvolvido',
        metricaGlobalNum5: '180 <span>+</span>',
        metricaGlobalText5: 'Workshops de Raciocínio Crítico e Estoicismo',
        metricaGlobalNum6: '98 <span>%</span>',
        metricaGlobalText6: 'De satisfação em programas de mentoria',

        teamTitleNew: 'Os Pensadores <span>da PITÁGORAS</span>',
        teamSubtitleNew: 'Nossa equipe é formada por mestres e doutores em filosofia com profunda experiência em consultoria estratégica.',
        membro1Nome: 'Sócrates Almeida',
        membro1Cargo: 'CEO e Filósofo Fundador',
        membro1Espec: 'Ética Aplicada e Lógica Estoica',
        membro2Nome: 'Platão Ferreira',
        membro2Cargo: 'Diretor de Estratégia',
        membro2Espec: 'Teoria do Conhecimento e Liderança',
        membro3Nome: 'Hipátia Nunes',
        membro3Cargo: 'Consultora Sênior',
        membro3Espec: 'Filosofia da Ciência e Tomada de Decisão',
        membro4Nome: 'Aristóteles Mello',
        membro4Cargo: 'Especialista em Ética de IA',
        membro4Espec: 'Justiça Algorítmica e Raciocínio Formal',
        membro5Nome: 'Maria Arendt',
        membro5Cargo: 'Líder de Pesquisa',
        membro5Espec: 'Filosofia Política e Cultura Organizacional',
        membro6Nome: 'Immanuel Kant',
        membro6Cargo: 'Consultor de Ética Prática',
        membro6Espec: 'Dilemas Morais e Imperativo Categórico',
        membro7Nome: 'Simon Beauvoir',
        membro7Cargo: 'Mentora Executiva',
        membro7Espec: 'Existencialismo e Autoconhecimento',
        membro8Nome: 'Laozi Chen',
        membro8Cargo: 'Estrategista de Relacionamento',
        membro8Espec: 'Filosofia Oriental e Gestão de Conflitos',

        // NAV e TÍTULOS
        'nav_home': 'Home',
        'nav_about': 'Sobre Nós',
        'nav_teams': 'Equipes',
        'nav_contact': 'Contato',
        'teams_title': 'Nossas Equipes de <span>Pensadores</span>',
        'teams_subtitle': 'Escolha um dos grupos abaixo para ver os 6 pilares de conhecimento que guiam nossa consultoria:',
        'pilares_title': 'Os 6 Pilares de <span>Nossa Consultoria</span>',
        'pilares_subtitle': 'Nossa metodologia é baseada em seis áreas fundamentais da Filosofia, aplicadas para resolver desafios modernos em sua vida pessoal e profissional.',
        
        // DESCRIÇÕES DE EQUIPES
        'team_grego_title': 'Time Grego 🧠',
        'team_grego_desc': 'Os pioneiros: a base do raciocínio crítico, da lógica e do autoconhecimento.',
        'team_romano_title': 'Time Romano ⚖️',
        'team_romano_desc': 'Os mestres da sabedoria aplicada à vida real: virtude, ética e controle emocional.',
        'team_alemao_title': 'Time Alemão ⚙️',
        'team_alemao_desc': 'Os estrategistas do pensamento: profundidade conceitual, idealismo e crítica radical.',
        'team_brasil_title': 'Time Brasileiro 🌎',
        'team_brasil_desc': 'Os pensadores da prática: filosofia com impacto social, política e educacional.',

        // FILÓSOFOS GREGOS (SÓCRATES, PLATÃO, etc.)
        'socrates_desc': 'Pai da filosofia ocidental; criador do método socrático.',
        'socrates_frase': '"Só sei que nada sei."',
        'platao_desc': 'Fundador da Academia; ideias sobre o Mundo das Ideias.',
        'platao_frase': '"O não examinado não vale a pena ser vivido."',
        'aristoteles_desc': 'Discípulo de Platão; base da lógica e da ciência.',
        'aristoteles_frase': '"A felicidade é o significado e o propósito da vida."',
        'heraclito_desc': '"Tudo flui"; destacou a mudança constante do mundo.',
        'heraclito_frase': '"Ninguém pode entrar duas vezes no mesmo rio."',
        'pitagoras_desc': 'Ligou matemática e filosofia espiritual.',
        'pitagoras_frase': '"Os números governam o universo."',
        'epicuro_desc': 'Defendeu o prazer moderado e a ausência de dor.',
        'epicuro_frase': '"Não é o que temos, mas o que desfrutamos, que constitui a nossa abundância."',
        
        // FILÓSOFOS ROMANOS (SÊNECA, CÍCERO, etc.)
        'seneca_desc': 'Filósofo estoico; ensinou sobre virtude e controle emocional.',
        'seneca_frase': '"Nós sofremos mais na imaginação do que na realidade."',
        'cicero_desc': 'Grande orador e defensor da ética política.',
        'cicero_frase': '"A amizade torna a prosperidade mais brilhante e atenua a adversidade, dividindo-a e compartilhando-a."',
        'marcoaurelio_desc': 'Imperador estoico; autor de Meditações.',
        'marcoaurelio_frase': '"Não perca mais tempo discutindo o que um bom homem deve ser. Seja um."',
        'epicteto_desc': 'Escravo liberto; ensinou que só controlamos nossas atitudes.',
        'epicteto_frase': '"Não são as coisas que nos incomodam, mas o nosso julgamento sobre elas."',
        'lucrecio_desc': 'Poeta e seguidor do epicurismo; escreveu Da Natureza das Coisas.',
        'lucrecio_frase': '"O que é alimento para uns, é veneno amargo para outros."',
        'plotino_desc': 'Criador do neoplatonismo; influenciou o pensamento cristão.',
        'plotino_frase': '"A beleza está na ausência de necessidade."',
        
        // FILÓSOFOS ALEMÃES (KANT, HEGEL, etc.)
        'kant_desc': 'Fundador do idealismo crítico; Crítica da Razão Pura.',
        'kant_frase': '"Ouse saber! (Sapere aude.)"',
        'hegel_desc': 'Desenvolveu a dialética; influenciou Marx.',
        'hegel_frase': '"O real é racional e o racional é real."',
        'schopenhauer_desc': 'Filosofia do pessimismo e da vontade.',
        'schopenhauer_frase': '"A vida humana oscila como um pêndulo, de um lado para a dor, do outro para o tédio."',
        'nietzsche_desc': '"Deus está morto"; crítica à moral tradicional.',
        'nietzsche_frase': '"Quem luta com monstros deve se precaver para não se tornar um monstro."',
        'marx_desc': 'Criador do materialismo histórico e do comunismo.',
        'marx_frase': '"Os filósofos limitaram-se a interpretar o mundo de diversas maneiras; o que importa é modificá-lo."',
        'heidegger_desc': 'Estudou o "ser" e a existência humana (Ser e Tempo).',
        'heidegger_frase': '"A linguagem é a casa do ser."',
        
        // FILÓSOFOS BRASILEIROS (FREIRE, CHAUI, etc.)
        'freire_desc': 'Filósofo e educador; autor de Pedagogia do Oprimido.',
        'freire_frase': '"Se a educação sozinha não transforma a sociedade, sem ela tampouco a sociedade muda."',
        'chaui_desc': 'Defensora da filosofia crítica e da democracia.',
        'chaui_frase': '"Ser de esquerda é ter a coragem de ser a favor da igualdade."',
        'konder_desc': 'Marxista; escreveu sobre alienação e política.',
        'konder_frase': '"Alienar-se é esquecer-se de si mesmo."',
        'pradojr_desc': 'Estudou a relação entre filosofia e linguagem.',
        'pradojr_frase': '"O pensamento só se faz na linguagem, e a linguagem é um pensamento que se faz a si mesmo."',
        'unger_desc': 'Filósofo e político, conhecido no exterior.',
        'unger_frase': '"Devemos ser capazes de reinventar o futuro e não apenas gerenciar o passado."',
        'reale_desc': 'Criador da teoria tridimensional do Direito (fato, valor, norma).',
        'reale_frase': '"O Direito é a conjugação do Fato, do Valor e da Norma."',
        
        // PILARES
        'pilar1_title': '1. Lógica & Raciocínio Crítico',
        'pilar1_desc': 'Estruturar argumentos sólidos, identificar falácias e tomar decisões baseadas na coerência. Essencial para planejamento e resolução de problemas complexos.',
        'pilar2_title': '2. Ética & Valores',
        'pilar2_desc': 'Definir o que é "o bem" na prática. Aplicação de princípios morais para liderança, construção de cultura organizacional e relacionamento com o mercado.',
        'pilar3_title': '3. Autoconhecimento & Autogestão',
        'pilar3_desc': 'Otimizar a performance e resiliência pessoal. Identificar o que está sob seu controle e desenvolver a paz mental para lidar com a adversidade.',
        'pilar4_title': '4. Dialética & Mudança',
        'pilar4_desc': 'Compreender o movimento e a evolução de ideias, mercados e culturas. Estratégias para navegar na instabilidade e antecipar transformações.',
        'pilar5_title': '5. Crítica & Desconstrução',
        'pilar5_desc': 'Desafiar pressupostos e identificar o "status quo". Fundamental para inovação radical, disrupção de modelos antigos e quebra de paradigmas.',
        'pilar6_title': '6. Fenomenologia & Ação',
        'pilar6_desc': 'Focar na experiência real e na intencionalidade da ação. Transforma o conhecimento teórico em prática com impacto social, educacional e existencial.',
        'based_on': '**Baseado em:**',
        
        // RODAPÉ (FOOTER)
        'footer_tagline': 'Filosofia para uma vida mais Sábia.',
        'footer_address': 'Endereço: Rua Exemplo, 123 - Cidade/Estado',
        'footer_nav_title': 'Navegação',
        'footer_contact_title': 'Fale Conosco',
        'footer_all_rights': '&copy; 2025 Pitágoras - Todos os direitos reservados.',

    },
    en: {
        // --- NAVEGAÇÃO ---
        navHome: "Home",
        navSobre: "About Us",
        navEquipes: "Teams",
        navContato: "Contact",

        // --- HOME: HERO ---
        heroTag: "π-Tágoras",
        heroTitle: '<span class="dark-text">Harmony</span> <span class="highlight-text">For the Body</span> And the <span class="highlight-text">Mind</span>',
        heroDescription: "Pitágoras assists in developing critical thinking and ethical reflection, applying philosophical concepts to enhance leadership and decision-making in your company.",
        heroCta: "Schedule a Demo",

        // --- HOME: TEAMS (CONSULTING AREAS) ---
        timesTitle: "Consulting Areas",
        timesSubtitle: "Pitágoras is composed of specialized teams, each focused on a fundamental area of applied philosophy to enhance your business with precision and depth.",
        timeGregoLogo: "GREEK",
        timeGregoTitle: "Greek Team: Classical Philosophy",
        timeRomanoLogo: "ROMAN",
        timeRomanoTitle: "Roman Team: Ethics and Law",
        timeAlemaoLogo: "GERMAN",
        timeAlemaoTitle: "German Team: Logic and Reason",
        timeBrasilLogo: "BRAZIL",
        timeBrasilTitle: "Brazilian Team: Contemporary Thought",
        timeLink: "View More",

        // --- HOME: NATIONAL PRESENCE (METRICS) ---
        presTitle: 'Our <span>National</span> Presence',
        presPartnersText: "Strategic partnerships with major institutions to bring critical thinking and ethics throughout Brazil.",
        metricaState: "Brazilian states use our solutions",
        metricaYears: "Years in the Applied Philosophy market",
        metricaClients: "Clients and Companies Served",
        metricaUsers: "Active people in our courses and lectures",
        presCta: "Schedule a Demo",
        
        // --- HOME: ETHICS (PILLARS) ---
        eticaTitle: 'Our <span>Ethics</span>',
        pilarRazaoTitle: "Reason and Logic",
        pilarRazaoText: "We guide all decisions and strategies based on solid logical principles, encouraging rational analysis and critical thinking.",
        pilarJusticaTitle: "Justice and Equity",
        pilarJusticaText: "We promote ethical and fair work environments, ensuring that integrity and transparency are the foundation of every interaction.",
        pilarDesenTitle: "Continuous Development",
        pilarDesenText: "We focus on constant improvement, applying philosophy as a tool for personal and professional self-improvement for all employees.",
        pilarLink: "View benefits",
        
        // --- HOME: TESTIMONIALS ---
        depoTitle: 'Client <span>Testimonials</span>',
        depo1Text: "“Pitágoras' philosophical consultancy transformed how our team handles ethical dilemmas. The applied critical thinking raised the level of our strategic decisions. I highly recommend it!”",
        depo1Author: "- Maria Clara Mendes, CEO of InnovaTech",
        depo2Text: "“With Pitágoras' support, we were able to structure our values in a solid and coherent way. It was an investment that brought clarity and purpose to our corporate culture.”",
        depo2Author: "- João Paulo Silveira, HR Director",
        depo3Text: "“The workshops on Ancient Philosophy and Leadership were a differential. We left inspired to seek wisdom and humanity in every project. Excellent work!”",
        depo3Author: "- Ana Beatriz Costa, Project Manager",

        // --- HOME: FAQ ---
        faqTitle: 'Frequently Asked <span>Questions</span>',
        faqQ1: "What does the Pitágoras company do?",
        faqA1: "Pitágoras offers courses, lectures, consultancies, and content focused on philosophy and critical thinking, applying philosophical concepts to daily life and the professional environment.",
        faqQ2: "Why the name “Pitágoras”?",
        faqA2: "The name honors the Greek philosopher and mathematician Pythagoras, a symbol of harmony between reason, logic, and spirituality — fundamental pillars of our work.",
        faqQ3: "Can philosophy be applied in companies?",
        faqA3: "Yes! Philosophy helps leaders and teams reflect on ethics, purpose, decision-making, and coexistence, making the environment more balanced and productive.",
        faqQ4: "Who can participate in the courses?",
        faqA4: "Everyone! From students curious about philosophy to professionals interested in enhancing critical thinking and worldview.",
        faqQ5: "Does Pitágoras only work with ancient philosophy?",
        faqA5: "No. Although we value the classics, we also explore modern and contemporary currents, connecting ancient ideas to current challenges.",
        faqQ6: "How can I get in touch?",
        faqA6: "You can contact us through our website, email, or social media. We will be happy to discuss philosophy and how it can transform your life or business.",
        btnAgenda: "Download Agenda",
        btnJogo: "Download Game",
        
        // --- RODAPÉ ---
        footerSlogan: "<strong>Philosophy for a Wiser Life.</strong>",
        footerAddress: "Address: Example Street, 123 - City/State",
        footerCopy: "&copy; 2025 Pitágoras - All rights reserved.",
        footerNavTitle: "Navigation",
        footerLinkHome: "Home",
        footerLinkSobre: "About Us",
        footerLinkAreas: "Consulting Areas",
        footerLinkEtica: "Ethics and Pillars",
        footerLinkContato: "Contact",
        footerContactTitle: "Contact Us",
        footerEmail: "Email: contato@pitagoras.com",
        footerPhone: "Phone: (11) 1234-5678",

        // =========================================================
        // --- CHAVES: ABOUT US (SOBRE.HTML) ---
        // =========================================================
        historyTitle: 'Our <span>Journey</span>',
        historySubtitle1: 'The Origin of Applied Reasoning',
        historyP1: 'PITÁGORAS was born from the conviction that philosophy should not be confined to academia, but rather be a practical and powerful tool for the business world and personal development.',
        historyP2: 'Founded in 2010 by a group of Students, our initial focus was on offering workshops on ethics and decision-making for CEOs and leaders, addressing complex dilemmas that traditional management could not resolve. We quickly became a reference in applying Stoic and Aristotelian logic in corporate contexts.',
        historySubtitle2: 'Evolution and Expansion',
        historyP3: 'In 2018, we expanded our services to include long-term strategic consulting, helping companies define and maintain their cultural values amidst rapid technological transformations. Our trajectory is marked by continuous commitment to excellence of thought and building organizational cultures that promote wisdom and justice (Dikaiosyne).',
        historyP4: 'Today, PITÁGORAS is synonymous with clarity and purpose, supporting leaders to conduct their business more consciously, rationally, and humanely. We continue to invest in research and development to transform dilemma into conviction and complexity into simplicity.',
        
        mvvTitle: 'Our Pillars of <span>Applied Philosophy</span>',
        mvvMissionTitle: 'Our Mission',
        mvvMissionText: 'To promote critical thinking and self-knowledge through philosophical teaching and practice, helping people and organizations better understand the world, their actions, and their ideas.',
        mvvVisionTitle: 'Our Vision',
        mvvVisionText: 'To be recognized as the main reference in applied philosophy in Brazil, inspiring individuals and companies to think more consciously, rationally, and humanely.',
        mvvValuesTitle: 'Our Values',
        mvvValue1Title: 'Wisdom:',
        mvvValue1Desc: 'We seek to understand before judging.',
        mvvValue2Title: 'Ethics:',
        mvvValue2Desc: 'We base our actions on moral principles and mutual respect.',
        mvvValue3Title: 'Critical Thinking:',
        mvvValue3Desc: 'We value doubt as the path to knowledge.',
        mvvValue4Title: 'Humanity:',
        mvvValue4Desc: 'We place the human being at the center of reflections.',
        mvvValue5Title: 'Continuous Knowledge:',
        mvvValue5Desc: 'We believe that learning is a never-ending process.',
        
        timelineTitle: 'Our Philosophical <span>Evolution</span>',
        timelineYear1: '2010',
        timelineDesc1: '<strong>PITÁGORAS Foundation:</strong> Start of activities as Ethics and Leadership workshops, focused on Stoic philosophy.',
        timelineYear2: '2014',
        timelineDesc2: '<strong>First Publication:</strong> Launch of the e-book "Aristotle\'s Reasoning in Business", marking our digital expansion.',
        timelineYear3: '2018',
        timelineDesc3: '<strong>Strategic Consulting:</strong> Expanded focus on long-term consulting on corporate culture and values.',
        timelineYear4: '2023',
        timelineDesc4: '<strong>Innovation:</strong> Implementation of the area of <Strong>"Philosophy of Technology"</Strong>, addressing AI ethics and digital transformation.',
        timelineYear5: 'TODAY',
        timelineDesc5: '<strong>Leadership:</strong> Consolidated as a reference in applied philosophy in Brazil and a partner of major organizations.',
        
        impactTitle: 'Our <span>Global</span> Impact',
        metricaGlobalNum1: '12 <span>+</span>',
        metricaGlobalText1: 'Countries with strategic consulting',
        metricaGlobalNum2: '15 <span>+</span>',
        metricaGlobalText2: 'Years in the leadership consulting market',
        metricaGlobalNum3: '2,500 <span>+</span>',
        metricaGlobalText3: 'Leaders and CEOs trained in Ethics',
        metricaGlobalNum4: '70 <span>+</span>',
        metricaGlobalText4: 'Companies with Value Framework developed',
        metricaGlobalNum5: '180 <span>+</span>',
        metricaGlobalText5: 'Workshops on Critical Thinking and Stoicism',
        metricaGlobalNum6: '98 <span>%</span>',
        metricaGlobalText6: 'Satisfaction in mentoring programs',

        teamTitleNew: 'The <span>PITÁGORAS</span> Thinkers',
        teamSubtitleNew: 'Our team is formed by masters and doctors in philosophy with deep experience in strategic consulting.',
        membro1Nome: 'Socrates Almeida',
        membro1Cargo: 'CEO and Founding Philosopher',
        membro1Espec: 'Applied Ethics and Stoic Logic',
        membro2Nome: 'Plato Ferreira',
        membro2Cargo: 'Strategy Director',
        membro2Espec: 'Theory of Knowledge and Leadership',
        membro3Nome: 'Hypatia Nunes',
        membro3Cargo: 'Senior Consultant',
        membro3Espec: 'Philosophy of Science and Decision Making',
        membro4Nome: 'Aristotle Mello',
        membro4Cargo: 'AI Ethics Specialist',
        membro4Espec: 'Algorithmic Justice and Formal Reasoning',
        membro5Nome: 'Maria Arendt',
        membro5Cargo: 'Research Leader',
        membro5Espec: 'Political Philosophy and Organizational Culture',
        membro6Nome: 'Immanuel Kant',
        membro6Cargo: 'Practical Ethics Consultant',
        membro6Espec: 'Moral Dilemmas and Categorical Imperative',
        membro7Nome: 'Simon Beauvoir',
        membro7Cargo: 'Executive Mentor',
        membro7Espec: 'Existentialism and Self-Knowledge',
        membro8Nome: 'Laozi Chen',
        membro8Cargo: 'Relationship Strategist',
        membro8Espec: 'Eastern Philosophy and Conflict Management',

        // NAV e TÍTULOS
        'nav_home': 'Home',
        'nav_about': 'About Us',
        'nav_teams': 'Teams',
        'nav_contact': 'Contact',
        'teams_title': 'Our <span>Thinkers</span> Teams',
        'teams_subtitle': 'Choose one of the groups below to see the 6 pillars of knowledge that guide our consultancy:',
        'pilares_title': 'The 6 Pillars of <span>Our Consultancy</span>',
        'pilares_subtitle': 'Our methodology is based on six fundamental areas of Philosophy, applied to solve modern challenges in your personal and professional life.',

        // DESCRIÇÕES DE EQUIPES
        'team_grego_title': 'Greek Team 🧠',
        'team_grego_desc': 'The pioneers: the foundation of critical reasoning, logic, and self-knowledge.',
        'team_romano_title': 'Roman Team ⚖️',
        'team_romano_desc': 'The masters of wisdom applied to real life: virtue, ethics, and emotional control.',
        'team_alemao_title': 'German Team ⚙️',
        'team_alemao_desc': 'The strategists of thought: conceptual depth, idealism, and radical critique.',
        'team_brasil_title': 'Brazilian Team 🌎',
        'team_brasil_desc': 'The thinkers of practice: philosophy with social, political, and educational impact.',

        // FILÓSOFOS GREGOS
        'socrates_desc': 'Father of Western philosophy; creator of the Socratic method.',
        'socrates_frase': '"I know that I know nothing."',
        'platao_desc': 'Founder of the Academy; ideas about the World of Forms.',
        'platao_frase': '"The unexamined life is not worth living."',
        'aristoteles_desc': 'Plato\'s disciple; foundation of logic and science.',
        'aristoteles_frase': '"Happiness is the meaning and the purpose of life."',
        'heraclito_desc': '"Everything flows"; highlighted the constant change of the world.',
        'heraclito_frase': '"No man ever steps in the same river twice."',
        'pitagoras_desc': 'Linked mathematics and spiritual philosophy.',
        'pitagoras_frase': '"Numbers govern the universe."',
        'epicuro_desc': 'Advocated moderate pleasure and the absence of pain.',
        'epicuro_frase': '"It is not what we have, but what we enjoy, that constitutes our abundance."',
        
        // FILÓSOFOS ROMANOS
        'seneca_desc': 'Stoic philosopher; taught about virtue and emotional control.',
        'seneca_frase': '"We suffer more often in imagination than in reality."',
        'cicero_desc': 'Great orator and defender of political ethics.',
        'cicero_frase': '"Friendship makes prosperity brighter and lightens adversity by dividing and sharing it."',
        'marcoaurelio_desc': 'Stoic Emperor; author of Meditations.',
        'marcoaurelio_frase': '"Waste no more time arguing about what a good man should be. Be one."',
        'epicteto_desc': 'Freed slave; taught that we only control our attitudes.',
        'epicteto_frase': '"It is not things that bother us, but our judgment about them."',
        'lucrecio_desc': 'Poet and follower of Epicureanism; wrote On the Nature of Things.',
        'lucrecio_frase': '"What is food to one, is bitter poison to others."',
        'plotino_desc': 'Creator of Neoplatonism; influenced Christian thought.',
        'plotino_frase': '"Beauty is the absence of necessity."',
        
        // FILÓSOFOS ALEMÃES
        'kant_desc': 'Founder of critical idealism; Critique of Pure Reason.',
        'kant_frase': '"Dare to know! (Sapere aude.)"',
        'hegel_desc': 'Developed the dialectic; influenced Marx.',
        'hegel_frase': '"The rational is real, and the real is rational."',
        'schopenhauer_desc': 'Philosophy of pessimism and the will.',
        'schopenhauer_frase': '"Human life swings like a pendulum, from side to side between pain and boredom."',
        'nietzsche_desc': '"God is dead"; critique of traditional morality.',
        'nietzsche_frase': '"He who fights with monsters should look to it that he himself does not become a monster."',
        'marx_desc': 'Creator of historical materialism and communism.',
        'marx_frase': '"Philosophers have hitherto only interpreted the world in various ways; the point is to change it."',
        'heidegger_desc': 'Studied "being" and human existence (Being and Time).',
        'heidegger_frase': '"Language is the house of being."',

        // FILÓSOFOS BRASILEIROS
        'freire_desc': 'Philosopher and educator; author of Pedagogy of the Oppressed.',
        'freire_frase': '"If education alone cannot transform society, without it neither can society change."',
        'chaui_desc': 'Advocate of critical philosophy and democracy.',
        'chaui_frase': '"Being left-wing is having the courage to be in favor of equality."',
        'konder_desc': 'Marxist; wrote about alienation and politics.',
        'konder_frase': '"To be alienated is to forget oneself."',
        'pradojr_desc': 'Studied the relationship between philosophy and language.',
        'pradojr_frase': '"Thought is only made in language, and language is a thought that makes itself."',
        'unger_desc': 'Philosopher and politician, known abroad.',
        'unger_frase': '"We must be able to reinvent the future and not just manage the past."',
        'reale_desc': 'Creator of the three-dimensional theory of Law (fact, value, norm).',
        'reale_frase': '"Law is the conjugation of Fact, Value, and Norm."',

        // PILARES
        'pilar1_title': '1. Logic & Critical Reasoning',
        'pilar1_desc': 'Structure solid arguments, identify fallacies, and make decisions based on coherence. Essential for planning and complex problem-solving.',
        'pilar2_title': '2. Ethics & Values',
        'pilar2_desc': 'Define what "the good" is in practice. Application of moral principles for leadership, building organizational culture, and market relationship.',
        'pilar3_title': '3. Self-Knowledge & Self-Management',
        'pilar3_desc': 'Optimize personal performance and resilience. Identify what is under your control and develop peace of mind to deal with adversity.',
        'pilar4_title': '4. Dialectic & Change',
        'pilar4_desc': 'Understand the movement and evolution of ideas, markets, and cultures. Strategies to navigate instability and anticipate transformations.',
        'pilar5_title': '5. Critique & Deconstruction',
        'pilar5_desc': 'Challenge assumptions and identify the "status quo." Fundamental for radical innovation, disrupting old models, and breaking paradigms.',
        'pilar6_title': '6. Phenomenology & Action',
        'pilar6_desc': 'Focus on real experience and the intentionality of action. Transforms theoretical knowledge into practice with social, educational, and existential impact.',
        'based_on': '**Based on:**',

        // RODAPÉ (FOOTER)
        'footer_tagline': 'Philosophy for a Wiser Life.',
        'footer_address': 'Address: Example Street, 123 - City/State',
        'footer_nav_title': 'Navigation',
        'footer_contact_title': 'Contact Us',
        'footer_all_rights': '&copy; 2025 Pitágoras - All rights reserved.',
    },
    es: {
        // --- NAVEGAÇÃO ---
        navHome: "Inicio",
        navSobre: "Sobre Nosotros",
        navEquipes: "Equipos",
        navContato: "Contacto",

        // --- HOME: HERO ---
        heroTag: "π-Tágoras",
        heroTitle: '<span class="dark-text">Armonía</span> <span class="highlight-text">Para el Cuerpo</span> Y la <span class="highlight-text">Mente</span>',
        heroDescription: "Pitágoras ayuda en el desarrollo del razonamiento crítico y la reflexión ética, aplicando conceptos filosóficos para mejorar el liderazgo y la toma de decisiones en su empresa.",
        heroCta: "Programar Demostración",

        // --- HOME: EQUIPOS (ÁREAS DE CONSULTORÍA) ---
        timesTitle: "Áreas de Consultoría",
        timesSubtitle: "Pitágoras está compuesto por equipos especializados, cada uno enfocado en un área fundamental de la filosofía aplicada para mejorar su negocio con precisión y profundidad.",
        timeGregoLogo: "GRIEGO",
        timeGregoTitle: "Equipo Griego: Filosofía Clásica",
        timeRomanoLogo: "ROMANO",
        timeRomanoTitle: "Equipo Romano: Ética y Derecho",
        timeAlemaoLogo: "ALEMÁN",
        timeAlemaoTitle: "Equipo Alemán: Lógica y Razón",
        timeBrasilLogo: "BRASIL",
        timeBrasilTitle: "Equipo Brasileño: Pensamiento Contemporáneo",
        timeLink: "Ver Más",

        // --- HOME: PRESENCIA NACIONAL (MÉTRICAS) ---
        presTitle: 'Nuestra Presencia <span>Nacional</span>',
        presPartnersText: "Alianzas estratégicas con grandes instituciones para llevar el pensamiento crítico y la ética a todo Brasil.",
        metricaState: "Estados de Brasil utilizan nuestras soluciones",
        metricaYears: "Años en el mercado de Filosofía Aplicada",
        metricaClients: "Clientes y Empresas Atendidos",
        metricaUsers: "Personas activas en nuestros cursos y conferencias",
        presCta: "Programar Demostración",

        // --- HOME: ÉTICA (PILARE) ---
        eticaTitle: 'Nuestra <span>Ética</span>',
        pilarRazaoTitle: "Razón y Lógica",
        pilarRazaoText: "Guiamos todas las decisiones y estrategias basándonos en principios lógicos sólidos, fomentando el análisis racional y el pensamiento crítico.",
        pilarJusticaTitle: "Justicia y Equidad",
        pilarJusticaText: "Promovemos ambientes de trabajo éticos y justos, asegurando que la integridad y la transparencia sean el cimiento de cada interacción.",
        pilarDesenTitle: "Desarrollo Continuo",
        pilarDesenText: "Nos enfocamos en la mejora constante, aplicando la filosofía como una herramienta de automejora personal y profesional para todos los colaboradores.",
        pilarLink: "Ver los beneficios",

        // --- HOME: TESTIMONIOS ---
        depoTitle: 'Testimonios de <span>Clientes</span>',
        depo1Text: "“La consultoría filosófica de Pitágoras transformó la forma en que nuestro equipo maneja los dilemas éticos. El razonamiento crítico aplicado elevó el nivel de nuestras decisiones estratégicas. ¡Lo recomiendo encarecidamente!”",
        depo1Author: "- Maria Clara Mendes, CEO de InnovaTech",
        depo2Text: "“Con el apoyo de Pitágoras, logramos estructurar nuestros valores de manera sólida y coherente. Fue una inversión que aportó claridad y propósito a nuestra cultura corporativa.”",
        depo2Author: "- João Paulo Silveira, Director de RRHH",
        depo3Text: "“Los talleres sobre Filosofía Antigua y Liderazgo fueron un diferencial. Salimos inspirados a buscar la sabiduría y la humanidad en cada proyecto. Excelente trabajo!”",
        depo3Author: "- Ana Beatriz Costa, Gerente de Proyectos",

        // --- HOME: FAQ ---
        faqTitle: 'Preguntas <span>Frecuentes</span>',
        faqQ1: "¿Qué hace la empresa Pitágoras?",
        faqA1: "Pitágoras ofrece cursos, conferencias, consultorías y contenidos enfocados en filosofía y pensamiento crítico, aplicando conceptos filosóficos a la vida cotidiana y al entorno profesional.",
        faqQ2: "¿Por qué el nombre “Pitágoras”?",
        faqA2: "El nombre rinde homenaje al filósofo y matemático griego Pitágoras, símbolo de la armonía entre razón, lógica y espiritualidad — pilares fundamentales de nuestro trabajo.",
        faqQ3: "¿Se puede aplicar la filosofía en las empresas?",
        faqA3: "¡Sí! La filosofía ayuda a líderes y equipos a reflexionar sobre ética, propósito, toma de decisiones y convivencia, haciendo que el ambiente sea más equilibrado y productivo.",
        faqQ4: "¿Quién puede participar en los cursos?",
        faqA4: "¡Todos! Desde estudiantes curiosos por la filosofía hasta profesionales interesados en mejorar el pensamiento crítico y la visión del mundo.",
        faqQ5: "¿Pitágoras solo trabaja con filosofía antigua?",
        faqA5: "No. Aunque valoramos los clásicos, también exploramos corrientes modernas y contemporáneas, conectando las ideas antiguas con los desafíos actuales.",
        faqQ6: "¿Cómo puedo ponerme en contacto?",
        faqA6: "Puede contactarnos a través de nuestro sitio web, correo electrónico o redes sociales. Estaremos encantados de hablar sobre filosofía y cómo puede transformar su vida o negocio.",
        btnAgenda: "Descargar Agenda",
        btnJogo: "Descargar Juego",

        // --- PIES DE PÁGINA ---
        footerSlogan: "<strong>Filosofía para una vida más Sabia.</strong>",
        footerAddress: "Dirección: Calle Ejemplo, 123 - Ciudad/Estado",
        footerCopy: "&copy; 2025 Pitágoras - Todos los derechos reservados.",
        footerNavTitle: "Navegación",
        footerLinkHome: "Inicio",
        footerLinkSobre: "Sobre Nosotros",
        footerLinkAreas: "Áreas de Consultoría",
        footerLinkEtica: "Ética y Pilares",
        footerLinkContato: "Contacto",
        footerContactTitle: "Contáctenos",
        footerEmail: "Email: contacto@pitagoras.com",
        footerPhone: "Teléfono: (11) 1234-5678",
        
        // =========================================================
        // --- CLAVES: SOBRE NOSOTROS (SOBRE.HTML) ---
        // =========================================================
        historyTitle: 'Nuestra <span>Trayectoria</span>',
        historySubtitle1: 'El Origen del Razonamiento Aplicado',
        historyP1: 'PITÁGORAS nació de la convicción de que la filosofía no debe limitarse al ámbito académico, sino ser una herramienta práctica y poderosa para el mundo de los negocios y el desarrollo personal.',
        historyP2: 'Fundada en 2010 por un grupo de Estudiantes, nuestro enfoque inicial fue ofrecer talleres sobre ética y toma de decisiones para CEOs y líderes, abordando dilemas complejos que la gestión tradicional no podía resolver. Rápidamente, nos convertimos en referencia en la aplicación de la lógica estoica y aristotélica en contextos corporativos.',
        historySubtitle2: 'Evolución y Expansión',
        historyP3: 'En 2018, expandimos nuestros servicios para incluir consultoría estratégica a largo plazo, ayudando a las empresas a definir y mantener sus valores culturales en medio de rápidas transformaciones tecnológicas. Nuestra trayectoria está marcada por el compromiso continuo con la excelencia del pensamiento y la construcción de culturas organizacionales que promueven la sabiduría y la justicia (Dikaiosyne).',
        historyP4: 'Hoy, PITÁGORAS es sinónimo de claridad y propósito, apoyando a los líderes a conducir sus negocios de forma más consciente, racional y humana. Seguimos invirtiendo en investigación y desarrollo para transformar el dilema en convicción y la complejidad en simplicidad.',

        mvvTitle: 'Nuestros Pilares de <span>Filosofía</span> Aplicada',
        mvvMissionTitle: 'Nuestra Misión',
        mvvMissionText: 'Promover el pensamiento crítico y el autoconocimiento a través de la enseñanza y la práctica filosófica, ayudando a personas y organizaciones a comprender mejor el mundo, sus acciones y sus ideas.',
        mvvVisionTitle: 'Nuestra Visión',
        mvvVisionText: 'Ser reconocida como la principal referencia en filosofía aplicada en Brasil, inspirando a individuos y empresas a pensar de forma más consciente, racional y humana.',
        mvvValuesTitle: 'Nuestros Valores',
        mvvValue1Title: 'Sabiduría:',
        mvvValue1Desc: 'Buscamos comprender antes de juzgar.',
        mvvValue2Title: 'Ética:',
        mvvValue2Desc: 'Basamos nuestras acciones en principios morales y respeto mutuo.',
        mvvValue3Title: 'Razonamiento Crítico:',
        mvvValue3Desc: 'Valoramos la duda como camino hacia el conocimiento.',
        mvvValue4Title: 'Humanidad:',
        mvvValue4Desc: 'Colocamos al ser humano en el centro de las reflexiones.',
        mvvValue5Title: 'Conocimiento Continuo:',
        mvvValue5Desc: 'Creemos que aprender es un proceso interminable.',
        
        timelineTitle: 'Nuestra <span>Evolución</span> Filosófica',
        timelineYear1: '2010',
        timelineDesc1: '<strong>Fundación de PITÁGORAS:</strong> Inicio de actividades como talleres de Ética y Liderazgo, enfocados en filosofía estoica.',
        timelineYear2: '2014',
        timelineDesc2: '<strong>Primera Publicación:</strong> Lanzamiento del e-book "El Razonamiento de Aristóteles en los Negocios", marcando nuestra expansión digital.',
        timelineYear3: '2018',
        timelineDesc3: '<strong>Consultoría Estratégica:</strong> Ampliación del enfoque para consultoría a largo plazo en cultura y valores corporativos.',
        timelineYear4: '2023',
        timelineDesc4: '<strong>Innovación:</strong> Implementación del área de <Strong>"Filosofía de la Tecnología"</Strong>, abordando la ética de la IA y la transformación digital.',
        timelineYear5: 'HOY',
        timelineDesc5: '<strong>Liderazgo:</strong> Consolidada como referencia en filosofía aplicada en Brasil y socia de grandes organizaciones.',
        
        impactTitle: 'Nuestro Impacto <span>Global</span>',
        metricaGlobalNum1: '12 <span>+</span>',
        metricaGlobalText1: 'Países con consultoría estratégica',
        metricaGlobalNum2: '15 <span>+</span>',
        metricaGlobalText2: 'Años en el mercado de consultoría de liderazgo',
        metricaGlobalNum3: '2,500 <span>+</span>',
        metricaGlobalText3: 'Líderes y CEOs entrenados en Ética',
        metricaGlobalNum4: '70 <span>+</span>',
        metricaGlobalText4: 'Empresas con Marco de Valores desarrollado',
        metricaGlobalNum5: '180 <span>+</span>',
        metricaGlobalText5: 'Talleres de Razonamiento Crítico y Estoicismo',
        metricaGlobalNum6: '98 <span>%</span>',
        metricaGlobalText6: 'De satisfacción en programas de mentoría',

        teamTitleNew: 'Los Pensadores <span>de PITÁGORAS</span>',
        teamSubtitleNew: 'Nuestro equipo está formado por maestros y doctores en filosofía con profunda experiencia en consultoría estratégica.',
        membro1Nome: 'Sócrates Almeida',
        membro1Cargo: 'CEO y Filósofo Fundador',
        membro1Espec: 'Ética Aplicada y Lógica Estoica',
        membro2Nome: 'Platón Ferreira',
        membro2Cargo: 'Director de Estrategia',
        membro2Espec: 'Teoría del Conocimiento y Liderazgo',
        membro3Nome: 'Hipatia Nunes',
        membro3Cargo: 'Consultora Senior',
        membro3Espec: 'Filosofía de la Ciencia y Toma de Decisiones',
        membro4Nome: 'Aristóteles Mello',
        membro4Cargo: 'Especialista en Ética de IA',
        membro4Espec: 'Justicia Algorítmica y Razonamiento Formal',
        membro5Nome: 'Maria Arendt',
        membro5Cargo: 'Líder de Investigación',
        membro5Espec: 'Filosofía Política y Cultura Organizacional',
        membro6Nome: 'Immanuel Kant',
        membro6Cargo: 'Consultor de Ética Práctica',
        membro6Espec: 'Dilemas Morales e Imperativo Categórico',
        membro7Nome: 'Simon Beauvoir',
        membro7Cargo: 'Mentora Ejecutiva',
        membro7Espec: 'Existencialismo y Autoconocimiento',
        membro8Nome: 'Laozi Chen',
        membro8Cargo: 'Estratega de Relaciones',
        membro8Espec: 'Filosofía Oriental y Gestión de Conflictos',

        // NAV y TÍTULOS
        'nav_home': 'Inicio',
        'nav_about': 'Sobre Nosotros',
        'nav_teams': 'Equipos',
        'nav_contact': 'Contacto',
        'teams_title': 'Nuestros Equipos de <span>Pensadores</span>',
        'teams_subtitle': 'Elija uno de los grupos a continuación para ver los 6 pilares de conocimiento que guían nuestra consultoría:',
        'pilares_title': 'Los 6 Pilares de <span>Nuestra Consultoría</span>',
        'pilares_subtitle': 'Nuestra metodología se basa en seis áreas fundamentales de la Filosofía, aplicadas para resolver desafíos modernos en su vida personal y profesional.',

        // DESCRIPCIONES DE EQUIPES
        'team_grego_title': 'Equipo Griego 🧠',
        'team_grego_desc': 'Los pioneros: la base del razonamiento crítico, la lógica y el autoconocimiento.',
        'team_romano_title': 'Equipo Romano ⚖️',
        'team_romano_desc': 'Los maestros de la sabiduría aplicada a la vida real: virtud, ética y control emocional.',
        'team_alemao_title': 'Equipo Alemán ⚙️',
        'team_alemao_desc': 'Los estrategas del pensamiento: profundidad conceptual, idealismo y crítica radical.',
        'team_brasil_title': 'Equipo Brasileño 🌎',
        'team_brasil_desc': 'Los pensadores de la práctica: filosofía con impacto social, político y educacional.',

        // FILÓSOFOS GRIEGOS
        'socrates_desc': 'Padre de la filosofía occidental; creador del método socrático.',
        'socrates_frase': '"Solo sé que nada sé."',
        'platao_desc': 'Fundador de la Academia; ideas sobre el Mundo de las Ideas.',
        'platao_frase': '"Una vida sin examen no merece ser vivida."',
        'aristoteles_desc': 'Discípulo de Platón; base de la lógica y la ciencia.',
        'aristoteles_frase': '"La felicidad es el significado y el propósito de la vida."',
        'heraclito_desc': '"Todo fluye"; destacó el cambio constante del mundo.',
        'heraclito_frase': '"Nadie puede bañarse dos veces en el mismo río."',
        'pitagoras_desc': 'Vinculó las matemáticas y la filosofía espiritual.',
        'pitagoras_frase': '"Los números gobiernan el universo."',
        'epicuro_desc': 'Defendió el placer moderado y la ausencia de dolor.',
        'epicuro_frase': '"No es lo que tenemos, sino lo que disfrutamos, lo que constituye nuestra abundancia."',

        // FILÓSOFOS ROMANOS
        'seneca_desc': 'Filósofo estoico; enseñó sobre la virtud y el control emocional.',
        'seneca_frase': '"Sufrimos más a menudo en la imaginación que en la realidad."',
        'cicero_desc': 'Gran orador y defensor de la ética política.',
        'cicero_frase': '"La amistad hace más brillante la prosperidad y aligera la adversidad al dividirla y compartirla."',
        'marcoaurelio_desc': 'Emperador estoico; autor de Meditaciones.',
        'marcoaurelio_frase': '"No pierdas más tiempo discutiendo lo que un buen hombre debe ser. Sé uno."',
        'epicteto_desc': 'Esclavo liberado; ensinó que solo controlamos nuestras actitudes.',
        'epicteto_frase': '"No son las cosas las que nos perturban, sino nuestro juicio sobre ellas."',
        'lucrecio_desc': 'Poeta y seguidor del epicureísmo; escribió Sobre la Naturaleza de las Cosas.',
        'lucrecio_frase': '"Lo que es alimento para unos, es veneno amargo para otros."',
        'plotino_desc': 'Creador del neoplatonismo; influyó en el pensamiento cristiano.',
        'plotino_frase': '"La belleza es la ausencia de necesidad."',

        // FILÓSOFOS ALEMANES
        'kant_desc': 'Fundador del idealismo crítico; Crítica de la Razón Pura.',
        'kant_frase': '"¡Atrévete a saber! (Sapere aude.)"',
        'hegel_desc': 'Desarrolló la dialética; influyó en Marx.',
        'hegel_frase': '"Lo racional es real y lo real es racional."',
        'schopenhauer_desc': 'Filosofía del pesimismo y la voluntad.',
        'schopenhauer_frase': '"La vida humana oscila como un péndulo, de un lado hacia el dolor, del otro hacia el aburrimiento."',
        'nietzsche_desc': '"Dios ha muerto"; crítica a la moral tradicional.',
        'nietzsche_frase': '"Quien lucha contra monstruos debe procurar no convertirse a su vez en un monstruo."',
        'marx_desc': 'Creador del materialismo histórico y del comunismo.',
        'marx_frase': '"Los filósofos se han limitado a interpretar el mundo de diversas maneras; de lo que se trata es de transformarlo."',
        'heidegger_desc': 'Estudió el "ser" y la existencia humana (Ser y Tiempo).',
        'heidegger_frase': '"El lenguaje es la casa del ser."',

        // FILÓSOFOS BRASILEÑOS
        'freire_desc': 'Filósofo y educador; autor de Pedagogía del Oprimido.',
        'freire_frase': '"Si la educación sola no transforma la sociedad, sin ella tampoco la sociedad cambia."',
        'chaui_desc': 'Defensora de la filosofía crítica y la democracia.',
        'chaui_frase': '"Ser de izquierda es tener el coraje de estar a favor de la igualdad."',
        'konder_desc': 'Marxista; escribió sobre alienación y política.',
        'konder_frase': '"Alienarse es olvidarse de sí mismo."',
        'pradojr_desc': 'Estudió la relación entre filosofía y lenguaje.',
        'pradojr_frase': '"El pensamiento solo se hace en el lenguaje, y el lenguaje es un pensamiento que se hace a sí mismo."',
        'unger_desc': 'Filósofo y político, conocido en el extranjero.',
        'unger_frase': '"Debemos ser capaces de reinventar el futuro y no solo administrar el pasado."',
        'reale_desc': 'Creador de la teoría tridimensional del Derecho (hecho, valor, norma).',
        'reale_frase': '"El Derecho es la conjugación del Hecho, del Valor y de la Norma."',

        // PILARES
        'pilar1_title': '1. Lógica y Razonamiento Crítico',
        'pilar1_desc': 'Estructurar argumentos sólidos, identificar falacias y tomar decisiones basadas en la coherencia. Esencial para la planificación y la resolución de problemas complejos.',
        'pilar2_title': '2. Ética y Valores',
        'pilar2_desc': 'Definir lo que es "el bien" en la práctica. Aplicación de principios morales para el liderazgo, la construcción de cultura organizacional y la relación con el mercado.',
        'pilar3_title': '3. Autoconocimiento y Autogestión',
        'pilar3_desc': 'Optimizar el rendimiento y la resiliência personal. Identificar lo que está bajo su control y desarrollar la paz mental para enfrentar la adversidad.',
        'pilar4_title': '4. Dialéctica y Cambio',
        'pilar4_desc': 'Comprender el movimiento y la evolución de ideas, mercados y culturas. Estrategias para navegar la inestabilidad y anticipar transformaciones.',
        'pilar5_title': '5. Crítica y Desconstrucción',
        'pilar5_desc': 'Desafiar supuestos e identificar el "status quo". Fundamental para la innovación radical, la disrupción de modelos antiguos y la ruptura de paradigmas.',
        'pilar6_title': '6. Fenomenología y Acción',
        'pilar6_desc': 'Centrarse en la experiencia real y la intencionalidad de la acción. Transforma el conocimiento teórico en práctica con impacto social, educacional y existencial.',
        'based_on': '**Basado en:**',

        // PIE DE PÁGINA (FOOTER)
        'footer_tagline': 'Filosofia para uma vida mais Sabia.',
        'footer_address': 'Dirección: Calle Ejemplo, 123 - Ciudad/Estado',
        'footer_nav_title': 'Navegación',
        'footer_contact_title': 'Contáctenos',
        'footer_all_rights': '&copy; 2025 Pitágoras - Todos los derechos reservados.',
    },
};

// =========================================================
// CONFIGURAÇÕES GLOBAIS DE ACESSIBILIDADE
// =========================================================

// --- Variáveis de Fonte ---
const FONT_STEP = 0.1;
const MAX_SCALE = 1.3;
const MIN_SCALE = 0.7;

// Variável GLOBAL para o wrapper principal (mantida)
let CONTENT_WRAPPER = null; 

// O dicionário de traduções (translations) DEVE estar declarado no topo do arquivo.
// Declaração placeholder para evitar 'ReferenceError' no setLanguage, 
// assumindo que o objeto completo será carregado por outro script.


// =========================================================
// FUNÇÕES AUXILIARES PARA LOADER
// =========================================================

function showLoader() {
    const loader = document.getElementById('page-loader');
    if (loader) {
        // Garante que o loader está visível e acima de tudo
        loader.classList.remove('hidden');
        loader.style.display = 'flex'; 
    }
}

function hideLoader() {
    const loader = document.getElementById('page-loader');
    if (loader) {
        // Inicia a transição de opacidade para ocultar
        loader.classList.add('hidden'); 
        
        // Remove ou oculta totalmente após a transição CSS (600ms)
        setTimeout(() => {
            loader.style.display = 'none';
        }, 600); 
    }
}


// ==========================================
// 1. FUNÇÕES DE TRADUÇÃO
// ==========================================

function setLanguage(lang) {
    // 1. MOSTRA O LOADER antes de iniciar a tradução
    showLoader(); 

    // Simula um pequeno atraso para que o usuário veja o loader antes da tradução instantânea
    setTimeout(() => {
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            
            // Certifique-se de que a variável 'translations' esteja definida globalmente
            if (typeof translations !== 'undefined' && translations[lang] && translations[lang][key]) {
                const translatedText = translations[lang][key];

                element.innerHTML = translatedText;
                
                if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                    // Remove tags HTML do placeholder, se houver
                    element.setAttribute('placeholder', translatedText.replace(/(<([^>]+)>)/gi, ""));
                }
            }
        });
        
        localStorage.setItem('preferredLanguage', lang);
        
        // 2. ESCONDE O LOADER após a tradução
        hideLoader();

    }, 200); // 200ms de "tempo de processamento" de tradução.
}


// ==========================================
// 2. FUNÇÕES DE TAMANHO DA FONTE
// ==========================================

function applyFontScale(scale) {
    if (document.body) {
        // Usa variável CSS para aplicar o zoom, permitindo unidades relativas na folha de estilo
        document.body.style.setProperty('--font-scale-factor', scale);
        localStorage.setItem('fontScale', scale);
    }
}

function adjustFontSize(action) {
    let currentScale = parseFloat(localStorage.getItem('fontScale')) || 1.0;

    if (action === 'increase' && currentScale < MAX_SCALE) {
        currentScale += FONT_STEP;
    } else if (action === 'decrease' && currentScale > MIN_SCALE) {
        currentScale -= FONT_STEP;
    } else if (action === 'reset') {
        currentScale = 1.0;
    }

    // Arredonda para uma casa decimal para evitar números flutuantes longos
    currentScale = Math.round(currentScale * 10) / 10;
    applyFontScale(currentScale);
}



// =========================================================
// CARREGAMENTO INICIAL (DOMContentedLoaded e Window Load)
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
    // Inicializa o wrapper
    CONTENT_WRAPPER = document.getElementById('main-content-wrapper');

    // --- 1. CARREGAR IDIOMA ---
    // A função setLanguage é chamada diretamente aqui, garantindo que o loader seja exibido 
    // brevemente, conforme definido na própria função setLanguage.
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'pt';
    setLanguage(savedLanguage); 
    
    // --- 2. CARREGAR ZOOM DA FONTE ---
    const savedScale = parseFloat(localStorage.getItem('fontScale'));
    if (savedScale && savedScale >= MIN_SCALE && savedScale <= MAX_SCALE) {
        applyFontScale(savedScale);
    } else {
        // Aplica a escala padrão se não houver ou se for inválida
        applyFontScale(1.0);
    }

});


// LÓGICA DO LOADER INICIAL: Oculta a animação somente quando TUDO (incluindo imagens) estiver carregado.
window.addEventListener('load', () => {
    // Esconde o loader após o carregamento total da página
    hideLoader(); 
});
