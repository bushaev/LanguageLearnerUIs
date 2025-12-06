const explanations = {
  'morning': {
    word: 'morning',
    translation: 'mañana',
    pronunciation: '/ˈmɔːrnɪŋ/',
    contextualMeaning: 'The early part of the day, typically from sunrise to noon. In this context, it refers to the time when the sky shows unusual colors.',
    exampleUsage: 'She always drinks coffee in the morning before starting work.',
    partOfSpeech: 'noun'
  },
  'traveler': {
    word: 'traveler',
    translation: 'viajero',
    pronunciation: '/ˈtrævələr/',
    contextualMeaning: 'A person who is on a journey or moving from one place to another. Here, it describes someone arriving at a village.',
    exampleUsage: 'The weary traveler sought shelter from the storm.',
    partOfSpeech: 'noun'
  },
  'marketplace': {
    word: 'marketplace',
    translation: 'mercado',
    pronunciation: '/ˈmɑːrkɪtpleɪs/',
    contextualMeaning: 'A public space or area where goods are bought and sold. In this passage, it describes a bustling commercial area.',
    exampleUsage: 'Farmers bring fresh produce to the marketplace every weekend.',
    partOfSpeech: 'noun'
  },
  'fountain': {
    word: 'fountain',
    translation: 'fuente',
    pronunciation: '/ˈfaʊntən/',
    contextualMeaning: 'A structure that sends water into the air for decorative purposes. Here, it serves as a gathering point in the town square.',
    exampleUsage: 'Children threw coins into the fountain and made wishes.',
    partOfSpeech: 'noun'
  },
  'technology': {
    word: 'technology',
    translation: 'tecnología',
    pronunciation: '/tekˈnɒlədʒi/',
    contextualMeaning: 'The application of scientific knowledge for practical purposes. In this text, it refers to rapidly evolving innovations.',
    exampleUsage: 'Modern technology has changed how we communicate with each other.',
    partOfSpeech: 'noun'
  },
  'laboratory': {
    word: 'laboratory',
    translation: 'laboratorio',
    pronunciation: '/ˈlæbrətɔːri/',
    contextualMeaning: 'A room or building equipped for scientific research and experiments. The passage describes it as a place where researchers work.',
    exampleUsage: 'Scientists conducted experiments in the laboratory for months.',
    partOfSpeech: 'noun'
  },
  'invention': {
    word: 'invention',
    translation: 'invención',
    pronunciation: '/ɪnˈvenʃən/',
    contextualMeaning: 'A new device or process created through study and experimentation. Here, it refers to a breakthrough discovery.',
    exampleUsage: 'Her invention revolutionized the entire industry.',
    partOfSpeech: 'noun'
  },
  'memories': {
    word: 'memories',
    translation: 'recuerdos',
    pronunciation: '/ˈmeməriz/',
    contextualMeaning: 'Mental impressions retained from past experiences. In this context, they flood back when the character returns to an old house.',
    exampleUsage: 'He cherished the memories of his childhood summers.',
    partOfSpeech: 'noun'
  },
  'garden': {
    word: 'garden',
    translation: 'jardín',
    pronunciation: '/ˈɡɑːrdən/',
    contextualMeaning: 'A planned space for growing flowers, plants, or vegetables. The text describes gardens surrounding a property.',
    exampleUsage: 'She spent hours tending to her vegetable garden.',
    partOfSpeech: 'noun'
  },
  'mountain': {
    word: 'mountain',
    translation: 'montaña',
    pronunciation: '/ˈmaʊntən/',
    contextualMeaning: 'A large natural elevation of the earth\'s surface. In this passage, mountains provide the setting for a hiking adventure.',
    exampleUsage: 'The mountain peak was covered with snow year-round.',
    partOfSpeech: 'noun'
  },
  'trail': {
    word: 'trail',
    translation: 'sendero',
    pronunciation: '/treɪl/',
    contextualMeaning: 'A marked path through a natural area. Here, it describes a hiking route winding through the forest.',
    exampleUsage: 'They followed the trail through the dense woods.',
    partOfSpeech: 'noun'
  },
  'city': {
    word: 'city',
    translation: 'ciudad',
    pronunciation: '/ˈsɪti/',
    contextualMeaning: 'A large urban area with significant population and infrastructure. The passage portrays it as a constantly active place.',
    exampleUsage: 'The city attracts people from all over the country.',
    partOfSpeech: 'noun'
  },
  'lights': {
    word: 'lights',
    translation: 'luces',
    pronunciation: '/laɪts/',
    contextualMeaning: 'Sources of illumination, especially artificial ones. In this text, they represent the vibrant energy of urban nightlife.',
    exampleUsage: 'The street lights flickered on as darkness fell.',
    partOfSpeech: 'noun'
  }
};

export const getExplanation = async (selectedText) => {
  await new Promise(resolve => setTimeout(resolve, 400));

  const text = selectedText.toLowerCase().trim();

  for (const [key, value] of Object.entries(explanations)) {
    if (text.includes(key)) {
      return value;
    }
  }

  return {
    word: selectedText,
    translation: 'palabra',
    pronunciation: '/wɜːrd/',
    contextualMeaning: `This phrase appears in the text with contextual significance. It contributes to the overall meaning of the passage.`,
    exampleUsage: `The word "${selectedText}" can be used in various contexts depending on the situation.`,
    partOfSpeech: 'phrase'
  };
};
