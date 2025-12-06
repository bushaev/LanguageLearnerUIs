const mockExplanations = {
  default: {
    word: 'peculiar',
    translation: 'extraño, peculiar',
    definition: 'Strange or odd in a way that is interesting or attractive; unusual.',
    context: 'In this passage, it emphasizes something unusual yet fascinating.',
    example: 'The old house had a peculiar charm that drew visitors from afar.',
  },
  a: {
    word: 'ancient',
    translation: 'antiguo',
    definition: 'Belonging to the very distant past and no longer in existence.',
    context: 'Refers to something very old, from long ago.',
    example: 'The ancient ruins told stories of civilizations lost to time.',
  },
  b: {
    word: 'discovered',
    translation: 'descubrió',
    definition: 'To find something or learn about something for the first time.',
    context: 'The act of finding out or learning something new.',
    example: 'She discovered a hidden passage behind the bookshelf.',
  },
  c: {
    word: 'curious',
    translation: 'curioso',
    definition: 'Eager to know or learn something; strange or unusual.',
    context: 'Describes someone interested in learning or something odd.',
    example: 'The curious child asked endless questions about everything.',
  },
  d: {
    word: 'delicate',
    translation: 'delicado',
    definition: 'Very fine in texture or structure; easily broken or damaged.',
    context: 'Something fragile or requiring careful handling.',
    example: 'The delicate porcelain teacup was handled with great care.',
  },
  e: {
    word: 'elegant',
    translation: 'elegante',
    definition: 'Graceful and stylish in appearance or manner.',
    context: 'Describes something refined and tasteful.',
    example: 'Her elegant dress caught everyone\'s attention at the party.',
  },
};

export const getExplanation = async (text) => {
  await new Promise(resolve => setTimeout(resolve, 800));

  const firstLetter = text.toLowerCase().charAt(0);
  const explanation = mockExplanations[firstLetter] || mockExplanations.default;

  return {
    ...explanation,
    word: text,
  };
};
