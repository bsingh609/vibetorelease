export const CALENDLY_URL = 'https://calendly.com/vibetorelease/30min';

export const NAV_LINKS = [
  { href: '#problem', label: 'The Problem' },
  { href: '#solution', label: 'Our Solution' },
  { href: '#faq', label: 'FAQ' },
] as const;

export const PAIN_POINTS = [
  {
    icon: 'FaLaptopCode',
    title: 'Works perfectly... on one developer\'s laptop',
    description: 'Your AI model runs great in Jupyter notebooks, but production is a different beast entirely.',
  },
  {
    icon: 'FaTheaterMasks',
    title: 'Impressed investors... months ago',
    description: 'The demo was amazing. But demos don\'t generate revenue. Shipped products do.',
  },
  {
    icon: 'FaFireAlt',
    title: 'Burning money while competitors ship',
    description: 'Every month of delay costs you market share and burns through your runway.',
  },
  {
    icon: 'FaRedo',
    title: 'Your team keeps saying \'just a bit more work\'',
    description: 'The scope keeps creeping. The timeline keeps slipping. Sound familiar?',
  },
] as const;

export const STATS = [
  {
    value: 85,
    suffix: '%',
    label: 'of AI projects never reach production',
    description: 'Industry-wide failure rate',
  },
  {
    value: 8,
    suffix: '+',
    prefix: '',
    label: 'months average prototype sits idle',
    description: 'Time wasted in development limbo',
  },
  {
    value: 50,
    suffix: 'K',
    prefix: '$',
    label: 'average sunk cost per stuck prototype',
    description: 'Money down the drain',
  },
  {
    value: 100,
    suffix: '%',
    label: 'of projects we\'ve taken on deployed',
    description: 'Our track record',
    highlight: true,
  },
] as const;

export const SOLUTION_PHASES = [
  {
    phase: 1,
    title: 'Audit & Assessment',
    subtitle: 'Week 1-2',
    description: 'We diagnose what\'s blocking production',
    items: [
      'Technical debt analysis',
      'Infrastructure requirements mapping',
      'Dependency and security audit',
      'Performance bottleneck identification',
      'Deployment roadmap creation',
    ],
  },
  {
    phase: 2,
    title: 'Deploy & Monitor',
    subtitle: 'Week 3-6',
    description: 'We get it live with real users',
    items: [
      'CI/CD pipeline setup',
      'Cloud infrastructure provisioning',
      'Model serving optimization',
      'Real-time monitoring dashboards',
      'Staged rollout execution',
    ],
  },
  {
    phase: 3,
    title: 'Scale & Optimize',
    subtitle: 'Week 7-8',
    description: 'We ensure it handles production load',
    items: [
      'Load testing and optimization',
      'Cost optimization strategies',
      'Auto-scaling configuration',
      'Knowledge transfer sessions',
      'Ongoing support handoff',
    ],
  },
] as const;

export const TESTIMONIALS = [
  {
    quote: 'We had been trying to deploy our recommendation engine for 9 months. VibeToRelease had it in production in 6 weeks. Our conversion rate is up 34%.',
    author: 'Sarah Chen',
    role: 'CTO, ShopSmart AI',
    result: '34% conversion lift',
    avatar: '/avatars/sarah.jpg',
  },
  {
    quote: 'Our investors were getting impatient. VibeToRelease didn\'t just deploy our ML pipeline—they made it 3x faster and 60% cheaper to run.',
    author: 'Marcus Rodriguez',
    role: 'VP Engineering, DataFlow',
    result: '60% cost reduction',
    avatar: '/avatars/marcus.jpg',
  },
  {
    quote: 'I was skeptical anyone could untangle our technical debt. They deployed in 5 weeks what we couldn\'t do in 14 months.',
    author: 'Jennifer Park',
    role: 'Founder, MediScan AI',
    result: 'Live in 5 weeks',
    avatar: '/avatars/jennifer.jpg',
  },
] as const;

export const DIFFERENTIATORS = [
  {
    title: 'We Ship, Not Consult',
    description: 'No 100-page reports. We deploy your prototype to production ourselves. You get a running system, not recommendations.',
    icon: 'FaRocket',
  },
  {
    title: 'Fixed Scope, Fixed Price',
    description: 'No surprise bills. We scope the work, quote a price, and deliver. If we underestimate, that\'s on us.',
    icon: 'FaFileContract',
  },
  {
    title: 'AI-Native Team',
    description: 'Our team has deployed ML systems at Google, Meta, and OpenAI. We know production AI inside and out.',
    icon: 'FaBrain',
  },
  {
    title: 'Your Team Learns',
    description: 'We don\'t create dependency. Your engineers work alongside us and inherit a production system they understand.',
    icon: 'FaGraduationCap',
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: 'What types of AI projects do you work with?',
    answer: 'We specialize in deploying ML/AI prototypes to production. This includes recommendation systems, NLP models, computer vision, predictive analytics, and generative AI applications. If it runs in a notebook and needs to run in production, we can help.',
  },
  {
    question: 'How long does a typical deployment take?',
    answer: 'Most projects take 6-8 weeks from kickoff to production. Simple deployments can be faster (4 weeks), while complex enterprise integrations may take up to 12 weeks. We\'ll give you a precise timeline during the free audit.',
  },
  {
    question: 'What if our prototype needs significant changes to be production-ready?',
    answer: 'That\'s exactly what we\'re here for. Many prototypes need refactoring, optimization, or even partial rewrites for production. We\'ll identify what needs to change during the audit and include it in our fixed-price quote.',
  },
  {
    question: 'Do you work with our existing cloud provider?',
    answer: 'Yes. We deploy on AWS, GCP, Azure, or your preferred cloud. We can also work with on-premise infrastructure for enterprises with specific compliance requirements.',
  },
  {
    question: 'What happens after deployment?',
    answer: 'You get a fully documented, production-grade system your team can maintain. We provide 30 days of post-deployment support included in every engagement, with optional ongoing support packages available.',
  },
  {
    question: 'How do you price your services?',
    answer: 'Fixed-price engagements based on project scope. No hourly billing surprises. After the free audit, we provide a detailed quote. If the project takes longer than estimated, we absorb the cost—not you.',
  },
] as const;

export const SOCIAL_LINKS = [
  { href: 'https://twitter.com/vibetorelease', label: 'Twitter', icon: 'FaTwitter' },
  { href: 'https://linkedin.com/company/vibetorelease', label: 'LinkedIn', icon: 'FaLinkedin' },
  { href: 'https://github.com/vibetorelease', label: 'GitHub', icon: 'FaGithub' },
] as const;
