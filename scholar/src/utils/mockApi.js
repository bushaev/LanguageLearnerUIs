const explanations = {
  'morning': {
    word: 'morning',
    partOfSpeech: 'noun',
    pronunciation: '/ˈmɔːrnɪŋ/',
    translation: 'mañana (Spanish)',
    definitions: [
      'The period of time between midnight and noon, especially from sunrise to noon',
      'The early part of something; the beginning'
    ],
    contextualMeaning: 'The early part of the day, typically from sunrise to noon. In this context, it refers to the time when the sky shows unusual colors.',
    exampleUsage: 'She always drinks coffee in the morning before starting work.',
    etymology: 'From Old English morgen, of Germanic origin.'
  },
  'traveler': {
    word: 'traveler',
    partOfSpeech: 'noun',
    pronunciation: '/ˈtrævələr/',
    translation: 'viajero (Spanish)',
    definitions: [
      'A person who is traveling or who often travels',
      'One who journeys from place to place'
    ],
    contextualMeaning: 'A person who is on a journey or moving from one place to another. Here, it describes someone arriving at a village.',
    exampleUsage: 'The weary traveler sought shelter from the storm.',
    etymology: 'Middle English: from travel + -er.'
  },
  'marketplace': {
    word: 'marketplace',
    partOfSpeech: 'noun',
    pronunciation: '/ˈmɑːrkɪtpleɪs/',
    translation: 'mercado (Spanish)',
    definitions: [
      'An open space where a market is held',
      'The arena of commercial activity; the world of trade'
    ],
    contextualMeaning: 'A public space or area where goods are bought and sold. In this passage, it describes a bustling commercial area.',
    exampleUsage: 'Farmers bring fresh produce to the marketplace every weekend.',
    etymology: 'Late Middle English: from market + place.'
  },
  'fountain': {
    word: 'fountain',
    partOfSpeech: 'noun',
    pronunciation: '/ˈfaʊntən/',
    translation: 'fuente (Spanish)',
    definitions: [
      'An ornamental structure in a pool or lake from which jets of water are pumped into the air',
      'A source of a desirable quality or commodity'
    ],
    contextualMeaning: 'A structure that sends water into the air for decorative purposes. Here, it serves as a gathering point in the town square.',
    exampleUsage: 'Children threw coins into the fountain and made wishes.',
    etymology: 'Middle English: from Old French fontaine, from Latin fontana.'
  },
  'technology': {
    word: 'technology',
    partOfSpeech: 'noun',
    pronunciation: '/tekˈnɒlədʒi/',
    translation: 'tecnología (Spanish)',
    definitions: [
      'The application of scientific knowledge for practical purposes',
      'Machinery and equipment developed from scientific knowledge'
    ],
    contextualMeaning: 'The application of scientific knowledge for practical purposes. In this text, it refers to rapidly evolving innovations.',
    exampleUsage: 'Modern technology has changed how we communicate with each other.',
    etymology: 'Early 17th century: from Greek tekhnologia.'
  },
  'laboratory': {
    word: 'laboratory',
    partOfSpeech: 'noun',
    pronunciation: '/ˈlæbrətɔːri/',
    translation: 'laboratorio (Spanish)',
    definitions: [
      'A room or building equipped for scientific experiments, research, or teaching',
      'A place providing opportunity for experimentation or practice'
    ],
    contextualMeaning: 'A room or building equipped for scientific research and experiments. The passage describes it as a place where researchers work.',
    exampleUsage: 'Scientists conducted experiments in the laboratory for months.',
    etymology: 'Late 16th century: from medieval Latin laboratorium.'
  },
  'invention': {
    word: 'invention',
    partOfSpeech: 'noun',
    pronunciation: '/ɪnˈvenʃən/',
    translation: 'invención (Spanish)',
    definitions: [
      'The action of creating or designing something new',
      'A thing that has been invented, especially a process or device'
    ],
    contextualMeaning: 'A new device or process created through study and experimentation. Here, it refers to a breakthrough discovery.',
    exampleUsage: 'Her invention revolutionized the entire industry.',
    etymology: 'Late Middle English: from Latin inventio(n-).'
  },
  'memories': {
    word: 'memories',
    partOfSpeech: 'noun (plural)',
    pronunciation: '/ˈmeməriz/',
    translation: 'recuerdos (Spanish)',
    definitions: [
      'The faculty by which the mind stores and remembers information',
      'Something remembered from the past; a recollection'
    ],
    contextualMeaning: 'Mental impressions retained from past experiences. In this context, they flood back when the character returns to an old house.',
    exampleUsage: 'He cherished the memories of his childhood summers.',
    etymology: 'Middle English: from Old French memorie.'
  },
  'garden': {
    word: 'garden',
    partOfSpeech: 'noun',
    pronunciation: '/ˈɡɑːrdən/',
    translation: 'jardín (Spanish)',
    definitions: [
      'A piece of ground for growing flowers, fruit, or vegetables',
      'An ornamental area of ground for public enjoyment'
    ],
    contextualMeaning: 'A planned space for growing flowers, plants, or vegetables. The text describes gardens surrounding a property.',
    exampleUsage: 'She spent hours tending to her vegetable garden.',
    etymology: 'Middle English: from Old French gardin.'
  },
  'mountain': {
    word: 'mountain',
    partOfSpeech: 'noun',
    pronunciation: '/ˈmaʊntən/',
    translation: 'montaña (Spanish)',
    definitions: [
      'A large natural elevation of the earth\'s surface rising abruptly from the surrounding level',
      'A large pile or quantity of something'
    ],
    contextualMeaning: 'A large natural elevation of the earth\'s surface. In this passage, mountains provide the setting for a hiking adventure.',
    exampleUsage: 'The mountain peak was covered with snow year-round.',
    etymology: 'Middle English: from Old French montaigne.'
  },
  'trail': {
    word: 'trail',
    partOfSpeech: 'noun',
    pronunciation: '/treɪl/',
    translation: 'sendero (Spanish)',
    definitions: [
      'A mark or a series of signs left by something that has passed',
      'A beaten path through rough country'
    ],
    contextualMeaning: 'A marked path through a natural area. Here, it describes a hiking route winding through the forest.',
    exampleUsage: 'They followed the trail through the dense woods.',
    etymology: 'Middle English: from Old French trailler.'
  },
  'city': {
    word: 'city',
    partOfSpeech: 'noun',
    pronunciation: '/ˈsɪti/',
    translation: 'ciudad (Spanish)',
    definitions: [
      'A large town or urban area',
      'A town created by charter and containing a cathedral'
    ],
    contextualMeaning: 'A large urban area with significant population and infrastructure. The passage portrays it as a constantly active place.',
    exampleUsage: 'The city attracts people from all over the country.',
    etymology: 'Middle English: from Old French cite.'
  },
  'lights': {
    word: 'lights',
    partOfSpeech: 'noun (plural)',
    pronunciation: '/laɪts/',
    translation: 'luces (Spanish)',
    definitions: [
      'The natural agent that stimulates sight and makes things visible',
      'A source of illumination, especially an electric lamp'
    ],
    contextualMeaning: 'Sources of illumination, especially artificial ones. In this text, they represent the vibrant energy of urban nightlife.',
    exampleUsage: 'The street lights flickered on as darkness fell.',
    etymology: 'Old English lēoht, of Germanic origin.'
  }
};

export const getExplanation = async (selectedText) => {
  await new Promise(resolve => setTimeout(resolve, 350));

  const text = selectedText.toLowerCase().trim();

  for (const [key, value] of Object.entries(explanations)) {
    if (text.includes(key)) {
      return value;
    }
  }

  return {
    word: selectedText,
    partOfSpeech: 'phrase',
    pronunciation: '/word/',
    translation: 'palabra (Spanish)',
    definitions: [
      'A unit of language with meaning',
      'Used in the context of this passage'
    ],
    contextualMeaning: `This phrase appears in the text with contextual significance. It contributes to the overall meaning of the passage.`,
    exampleUsage: `The word "${selectedText}" can be used in various contexts depending on the situation.`,
    etymology: 'Origin varies depending on usage.'
  };
};
