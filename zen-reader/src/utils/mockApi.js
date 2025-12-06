// Mock API to generate word/phrase explanations
const explanations = {
  'morning': {
    word: 'morning',
    translation: 'mañana (Spanish)',
    contextualMeaning: 'The early part of the day, typically from sunrise to noon. In this context, it refers to the time when the sky shows unusual colors.',
    exampleUsage: 'She always drinks coffee in the morning before starting work.'
  },
  'traveler': {
    word: 'traveler',
    translation: 'viajero (Spanish)',
    contextualMeaning: 'A person who is on a journey or moving from one place to another. Here, it describes someone arriving at a village.',
    exampleUsage: 'The weary traveler sought shelter from the storm.'
  },
  'marketplace': {
    word: 'marketplace',
    translation: 'mercado (Spanish)',
    contextualMeaning: 'A public space or area where goods are bought and sold. In this passage, it describes a bustling commercial area.',
    exampleUsage: 'Farmers bring fresh produce to the marketplace every weekend.'
  },
  'fountain': {
    word: 'fountain',
    translation: 'fuente (Spanish)',
    contextualMeaning: 'A structure that sends water into the air for decorative purposes. Here, it serves as a gathering point in the town square.',
    exampleUsage: 'Children threw coins into the fountain and made wishes.'
  },
  'technology': {
    word: 'technology',
    translation: 'tecnología (Spanish)',
    contextualMeaning: 'The application of scientific knowledge for practical purposes. In this text, it refers to rapidly evolving innovations.',
    exampleUsage: 'Modern technology has changed how we communicate with each other.'
  },
  'laboratory': {
    word: 'laboratory',
    translation: 'laboratorio (Spanish)',
    contextualMeaning: 'A room or building equipped for scientific research and experiments. The passage describes it as a place where researchers work.',
    exampleUsage: 'Scientists conducted experiments in the laboratory for months.'
  },
  'invention': {
    word: 'invention',
    translation: 'invención (Spanish)',
    contextualMeaning: 'A new device or process created through study and experimentation. Here, it refers to a breakthrough discovery.',
    exampleUsage: 'Her invention revolutionized the entire industry.'
  },
  'memories': {
    word: 'memories',
    translation: 'recuerdos (Spanish)',
    contextualMeaning: 'Mental impressions retained from past experiences. In this context, they flood back when the character returns to an old house.',
    exampleUsage: 'He cherished the memories of his childhood summers.'
  },
  'garden': {
    word: 'garden',
    translation: 'jardín (Spanish)',
    contextualMeaning: 'A planned space for growing flowers, plants, or vegetables. The text describes gardens surrounding a property.',
    exampleUsage: 'She spent hours tending to her vegetable garden.'
  },
  'mountain': {
    word: 'mountain',
    translation: 'montaña (Spanish)',
    contextualMeaning: 'A large natural elevation of the earth\'s surface. In this passage, mountains provide the setting for a hiking adventure.',
    exampleUsage: 'The mountain peak was covered with snow year-round.'
  },
  'trail': {
    word: 'trail',
    translation: 'sendero (Spanish)',
    contextualMeaning: 'A marked path through a natural area. Here, it describes a hiking route winding through the forest.',
    exampleUsage: 'They followed the trail through the dense woods.'
  },
  'city': {
    word: 'city',
    translation: 'ciudad (Spanish)',
    contextualMeaning: 'A large urban area with significant population and infrastructure. The passage portrays it as a constantly active place.',
    exampleUsage: 'The city attracts people from all over the country.'
  },
  'lights': {
    word: 'lights',
    translation: 'luces (Spanish)',
    contextualMeaning: 'Sources of illumination, especially artificial ones. In this text, they represent the vibrant energy of urban nightlife.',
    exampleUsage: 'The street lights flickered on as darkness fell.'
  }
};

// Generate explanation based on selected text
export const getExplanation = async (selectedText) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));

  const text = selectedText.toLowerCase().trim();

  // Check if we have a specific explanation for this word
  for (const [key, value] of Object.entries(explanations)) {
    if (text.includes(key)) {
      return value;
    }
  }

  // Generate generic explanation for unknown words
  return {
    word: selectedText,
    translation: 'palabra (Spanish)',
    contextualMeaning: `This phrase appears in the text with contextual significance. It contributes to the overall meaning of the passage.`,
    exampleUsage: `The word "${selectedText}" can be used in various contexts depending on the situation.`
  };
};
