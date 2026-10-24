// Edit everything here: brand, links, plans, testimonials, FAQ.
// Empty strings ("") mean "not configured yet" — buttons show a clear notice instead of failing.

export const site = {
  brand: { name: "FORJA", tagline: "Método de Musculação" },
  contactUrl: "", // e.g. "https://wa.me/351900000000"
  vsl: {
    // Use a direct video file (mp4) OR an embed URL (YouTube/Vimeo). Leave both empty until ready.
    fileUrl: "",
    embedUrl: "",
    posterUrl: "", // optional cover image URL
    description:
      "Neste vídeo apresentamos a abordagem do método, como estão organizados os treinos e como escolher o plano adequado ao teu nível.",
  },
};

export type Plan = {
  id: string;
  name: string;
  forWho: string;
  price: string; // e.g. "49" — leave "" until defined
  previousPrice: string; // only if a real previous price existed
  currency: string;
  billing: string; // e.g. "pagamento único" / "por mês"
  duration: string;
  access: string;
  guarantee: string;
  checkoutUrl: string;
  features: string[];
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    id: "essencial",
    name: "Essencial",
    forWho: "Para quem procura começar com uma estrutura organizada.",
    price: "",
    previousPrice: "",
    currency: "€",
    billing: "",
    duration: "",
    access: "",
    guarantee: "",
    checkoutUrl: "",
    features: [
      "Acesso ao conteúdo base do programa",
      "Plano de treino estruturado",
      "Orientações fundamentais de execução",
      "Recursos complementares",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    forWho: "Para quem procura mais recursos e orientação.",
    price: "",
    previousPrice: "",
    currency: "€",
    billing: "",
    duration: "",
    access: "",
    guarantee: "",
    checkoutUrl: "",
    featured: true,
    features: [
      "Tudo o que inclui o plano Essencial",
      "Recursos de acompanhamento adicionais",
      "Materiais complementares",
      "Ferramentas de registo da evolução",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    forWho: "Para quem pretende uma experiência mais completa.",
    price: "",
    previousPrice: "",
    currency: "€",
    billing: "",
    duration: "",
    access: "",
    guarantee: "",
    checkoutUrl: "",
    features: [
      "Tudo o que inclui o plano Pro",
      "Acompanhamento personalizado",
      "Recursos avançados",
      "Benefícios adicionais",
    ],
  },
];

export type Testimonial = {
  name: string;
  text: string;
  photoUrl?: string;
  period?: string;
  videoUrl?: string;
};

// Add only real, authorized testimonials.
export const testimonials: Testimonial[] = [];

export const coach = {
  name: "",
  photoUrl: "",
  experience: "",
  philosophy: "",
  specialties: [] as string[],
  certifications: [] as string[],
  message: "",
};

export const faqs: { q: string; a: string }[] = [
  { q: "Para quem é indicado o programa?", a: "Para quem quer treinar musculação com um plano estruturado, desde iniciantes a praticantes com experiência. (Editar conforme a oferta.)" },
  { q: "Preciso de experiência prévia em musculação?", a: "Não. O plano é ajustado ao teu nível atual. (Editar conforme a oferta.)" },
  { q: "Como recebo acesso aos conteúdos?", a: "A informação de acesso será definida pelo responsável do programa." },
  { q: "O programa pode ser seguido num ginásio?", a: "Sim, o programa foi pensado para treino em ginásio. (Editar conforme a oferta.)" },
  { q: "Que equipamentos são necessários?", a: "A lista de equipamentos será indicada de acordo com o plano." },
  { q: "Como funcionam os planos?", a: "Cada plano tem recursos diferentes. Compara-os na secção de planos." },
  { q: "O pagamento é único ou recorrente?", a: "As condições de pagamento serão indicadas em cada plano." },
  { q: "Durante quanto tempo tenho acesso?", a: "A duração do acesso será indicada em cada plano." },
  { q: "Existe acompanhamento individual?", a: "Apenas nos planos em que esse serviço estiver efetivamente incluído." },
  { q: "Como posso esclarecer dúvidas?", a: "Através do botão “Falar com a equipa”." },
  { q: "Existe uma política de reembolso?", a: "A política de reembolso será publicada pelo responsável do programa." },
];
