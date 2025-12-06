const mockExplanations = {
  default: {
    word: 'connection',
    type: 'noun',
    definition: 'A relationship or link between people, things, or ideas.',
    context: 'The text explores how modern technology affects human connection despite physical distance.',
  },
  a: {
    word: 'ambition',
    type: 'noun',
    definition: 'A strong desire to achieve something, typically requiring determination and hard work.',
    context: 'Buildings represent the collective ambitions of those who designed and built them.',
  },
  b: {
    word: 'beautiful',
    type: 'adjective',
    definition: 'Pleasing the senses or mind aesthetically.',
    context: 'Nature\'s beauty exists independent of human observation or appreciation.',
  },
  c: {
    word: 'connection',
    type: 'noun',
    definition: 'A relationship or link between people, things, or ideas.',
    context: 'Digital networks create connections that transcend physical proximity.',
  },
  d: {
    word: 'distance',
    type: 'noun',
    definition: 'The amount of space between two points or the state of being far apart.',
    context: 'Modern distance includes emotional and psychological separation, not just physical space.',
  },
  e: {
    word: 'evolution',
    type: 'noun',
    definition: 'The gradual development of something, especially from a simple to a more complex form.',
    context: 'Communication has evolved while core human needs remain constant.',
  },
  f: {
    word: 'fundamental',
    type: 'adjective',
    definition: 'Forming a necessary base or core; of central importance.',
    context: 'Despite technological change, fundamental human needs persist unchanged.',
  },
};

export const getExplanation = async (text) => {
  await new Promise(resolve => setTimeout(resolve, 600));

  const firstLetter = text.toLowerCase().charAt(0);
  const explanation = mockExplanations[firstLetter] || mockExplanations.default;

  return {
    ...explanation,
    word: text,
  };
};
