export interface Question {
  id: number;
  text: string;
  answers: {
    text: string;
    score: number;
  }[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "When you dream, where do you find yourself?",
    answers: [
      { text: "Beneath crystal-clear waters, swimming with ancient creatures", score: 0 },
      { text: "Dancing between sea and shore, where waves meet sand", score: 3 },
      { text: "Floating through misty forests, barely touching the ground", score: 7 },
      { text: "High among the stars, trailing stardust in your wake", score: 10 }
    ]
  },
  {
    id: 2,
    text: "What calls to you most strongly?",
    answers: [
      { text: "The haunting melody of distant waves", score: 0 },
      { text: "The whispers of twilight shadows", score: 4 },
      { text: "The laughter carried on spring breezes", score: 8 },
      { text: "The sparkle of morning dew", score: 10 }
    ]
  },
  {
    id: 3,
    text: "Your most precious possession would be...",
    answers: [
      { text: "A shell that holds the echo of the ocean's secrets", score: 0 },
      { text: "A mirror that shows reflections of other worlds", score: 3 },
      { text: "A crystal that captures moonlight", score: 7 },
      { text: "A flower that never wilts", score: 10 }
    ]
  },
  {
    id: 4,
    text: "What's your preferred way of helping others?",
    answers: [
      { text: "Guiding them through emotional depths", score: 0 },
      { text: "Sharing ancient wisdom through stories", score: 4 },
      { text: "Teaching them to find joy in small moments", score: 7 },
      { text: "Sprinkling their path with unexpected delights", score: 10 }
    ]
  },
  {
    id: 5,
    text: "Your perfect sanctuary would be...",
    answers: [
      { text: "A hidden grotto beneath the waves", score: 0 },
      { text: "A misty shore at twilight", score: 3 },
      { text: "An enchanted garden", score: 7 },
      { text: "A moonlit clearing in an ancient forest", score: 10 }
    ]
  }
];