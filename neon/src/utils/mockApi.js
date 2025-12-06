const explanations = {
  'morning': {
    word: 'morning',
    translation: 'mañana',
    definition: 'The period of time between midnight and noon, especially from sunrise to noon.',
    context: 'Refers to the early part of the day when the sky shows unusual colors.',
    example: 'She always drinks coffee in the morning before starting work.'
  },
  'traveler': {
    word: 'traveler',
    translation: 'viajero',
    definition: 'A person who is traveling or who often travels.',
    context: 'Describes someone arriving at a village gate.',
    example: 'The weary traveler sought shelter from the storm.'
  },
  'marketplace': {
    word: 'marketplace',
    translation: 'mercado',
    definition: 'An open space where a market is held; the world of trade.',
    context: 'A bustling area where goods are bought and sold.',
    example: 'Farmers bring fresh produce to the marketplace every weekend.'
  },
  'fountain': {
    word: 'fountain',
    translation: 'fuente',
    definition: 'An ornamental structure from which jets of water are pumped into the air.',
    context: 'A gathering point in the town square.',
    example: 'Children threw coins into the fountain and made wishes.'
  },
  'technology': {
    word: 'technology',
    translation: 'tecnología',
    definition: 'The application of scientific knowledge for practical purposes.',
    context: 'Refers to rapidly evolving innovations.',
    example: 'Modern technology has changed how we communicate.'
  },
  'laboratory': {
    word: 'laboratory',
    translation: 'laboratorio',
    definition: 'A room or building equipped for scientific experiments and research.',
    context: 'The place where researchers work.',
    example: 'Scientists conducted experiments in the laboratory for months.'
  },
  'invention': {
    word: 'invention',
    translation: 'invención',
    definition: 'A thing that has been invented, especially a process or device.',
    context: 'A breakthrough discovery created through experimentation.',
    example: 'Her invention revolutionized the entire industry.'
  },
  'memories': {
    word: 'memories',
    translation: 'recuerdos',
    definition: 'Something remembered from the past; a recollection.',
    context: 'Mental impressions that flood back when returning to an old house.',
    example: 'He cherished the memories of his childhood summers.'
  },
  'garden': {
    word: 'garden',
    translation: 'jardín',
    definition: 'A piece of ground for growing flowers, fruit, or vegetables.',
    context: 'Describes gardens surrounding a property.',
    example: 'She spent hours tending to her vegetable garden.'
  },
  'mountain': {
    word: 'mountain',
    translation: 'montaña',
    definition: 'A large natural elevation of the earth\'s surface.',
    context: 'The setting for a hiking adventure.',
    example: 'The mountain peak was covered with snow year-round.'
  }
};

export const getExplanation = async (selectedText) => {
  await new Promise(resolve => setTimeout(resolve, 300));

  const text = selectedText.toLowerCase().trim();

  for (const [key, value] of Object.entries(explanations)) {
    if (text.includes(key)) {
      return value;
    }
  }

  return {
    word: selectedText,
    translation: 'palabra',
    definition: 'A unit or element of language with meaning.',
    context: `This phrase appears with contextual significance in the passage.`,
    example: `The word "${selectedText}" can be used in various contexts.`
  };
};
