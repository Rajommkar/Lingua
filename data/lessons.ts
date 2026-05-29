import type { LanguageCode, Lesson } from "@/types/learning";

export const lessons: Lesson[] = [
  // —— Spanish: Hello & Goodbye ——
  {
    id: "es-unit-1-lesson-1",
    unitId: "es-unit-1",
    languageCode: "es",
    order: 1,
    title: "Say Hello",
    description: "Learn hola, buenos días, and buenas noches.",
    difficulty: "beginner",
    xpReward: 15,
    estimatedMinutes: 5,
    goals: [
      { id: "es-u1-l1-g1", description: "Recognize common Spanish greetings." },
      { id: "es-u1-l1-g2", description: "Choose the right greeting for morning or night." },
    ],
    vocabulary: [
      {
        id: "es-hola",
        term: "hola",
        translation: "hello",
        pronunciationHint: "OH-lah",
        partOfSpeech: "other",
        exampleSentence: "¡Hola! ¿Cómo estás?",
        exampleTranslation: "Hello! How are you?",
      },
      {
        id: "es-buenos-dias",
        term: "buenos días",
        translation: "good morning",
        pronunciationHint: "BWEH-nos DEE-as",
        partOfSpeech: "phrase",
        exampleSentence: "Buenos días, Ana.",
        exampleTranslation: "Good morning, Ana.",
      },
      {
        id: "es-buenas-noches",
        term: "buenas noches",
        translation: "good night",
        pronunciationHint: "BWEH-nas NO-ches",
        partOfSpeech: "phrase",
      },
    ],
    phrases: [
      {
        id: "es-ph-hello-how",
        phrase: "¡Hola! ¿Cómo estás?",
        translation: "Hello! How are you?",
        context: "Informal greeting with a friend.",
      },
    ],
    activities: [
      {
        id: "es-u1-l1-a1",
        type: "vocabulary",
        title: "Greeting words",
        order: 1,
        estimatedMinutes: 2,
        items: [
          {
            id: "es-hola",
            term: "hola",
            translation: "hello",
            pronunciationHint: "OH-lah",
            partOfSpeech: "other",
          },
          {
            id: "es-buenos-dias",
            term: "buenos días",
            translation: "good morning",
            pronunciationHint: "BWEH-nos DEE-as",
            partOfSpeech: "phrase",
          },
          {
            id: "es-buenas-noches",
            term: "buenas noches",
            translation: "good night",
            pronunciationHint: "BWEH-nas NO-ches",
            partOfSpeech: "phrase",
          },
        ],
      },
      {
        id: "es-u1-l1-a2",
        type: "phrases",
        title: "Say it naturally",
        order: 2,
        items: [
          {
            id: "es-ph-hello-how",
            phrase: "¡Hola! ¿Cómo estás?",
            translation: "Hello! How are you?",
            context: "Informal greeting with a friend.",
          },
        ],
      },
      {
        id: "es-u1-l1-a3",
        type: "vision-teacher",
        title: "Practice with your AI teacher",
        order: 3,
        estimatedMinutes: 3,
        prompt: {
          systemContext:
            "You are a warm, patient Spanish teacher for absolute beginners. Speak slowly, use simple Spanish, and encourage the learner in English when needed.",
          openingScript:
            "¡Hola! Welcome to your first Spanish greeting lesson. Today we will practice hola, buenos días, and buenas noches together.",
          teachingFocus: [
            "Pronounce hola clearly",
            "Explain when to use buenos días vs buenas noches",
            "Model one short greeting exchange",
          ],
          practiceScenarios: [
            "The learner greets you in the morning at a café.",
            "The learner says good night before leaving.",
          ],
          wrapUpScript:
            "Great job today. Try saying buenos días to someone tomorrow morning. ¡Hasta pronto!",
        },
      },
    ],
  },
  {
    id: "es-unit-1-lesson-2",
    unitId: "es-unit-1",
    languageCode: "es",
    order: 2,
    title: "Say Goodbye",
    description: "Learn adiós and hasta luego.",
    difficulty: "beginner",
    xpReward: 15,
    estimatedMinutes: 4,
    goals: [
      { id: "es-u1-l2-g1", description: "Say goodbye in casual and slightly formal situations." },
    ],
    vocabulary: [
      {
        id: "es-adios",
        term: "adiós",
        translation: "goodbye",
        pronunciationHint: "ah-DYOHS",
        partOfSpeech: "other",
      },
      {
        id: "es-hasta-luego",
        term: "hasta luego",
        translation: "see you later",
        pronunciationHint: "AHS-tah LWEH-go",
        partOfSpeech: "phrase",
      },
    ],
    phrases: [
      {
        id: "es-ph-see-you",
        phrase: "¡Hasta luego! Que tengas un buen día.",
        translation: "See you later! Have a good day.",
      },
    ],
    activities: [
      {
        id: "es-u1-l2-a1",
        type: "vocabulary",
        title: "Goodbye words",
        order: 1,
        items: [
          {
            id: "es-adios",
            term: "adiós",
            translation: "goodbye",
            pronunciationHint: "ah-DYOHS",
          },
          {
            id: "es-hasta-luego",
            term: "hasta luego",
            translation: "see you later",
            pronunciationHint: "AHS-tah LWEH-go",
            partOfSpeech: "phrase",
          },
        ],
      },
      {
        id: "es-u1-l2-a2",
        type: "listening",
        title: "Hear the difference",
        order: 2,
        vocabularyIds: ["es-adios", "es-hasta-luego"],
        instructions: "Listen and tap the phrase you hear.",
      },
      {
        id: "es-u1-l2-a3",
        type: "review",
        title: "Quick review",
        order: 3,
        vocabularyIds: ["es-hola", "es-adios", "es-hasta-luego"],
        phraseIds: ["es-ph-see-you"],
      },
    ],
  },

  // —— Spanish: Nice to Meet You ——
  {
    id: "es-unit-2-lesson-1",
    unitId: "es-unit-2",
    languageCode: "es",
    order: 1,
    title: "My Name Is…",
    description: "Introduce yourself with me llamo and mucho gusto.",
    difficulty: "beginner",
    xpReward: 20,
    estimatedMinutes: 6,
    goals: [
      { id: "es-u2-l1-g1", description: "Introduce yourself by name in Spanish." },
      { id: "es-u2-l1-g2", description: "Respond when someone says nice to meet you." },
    ],
    vocabulary: [
      {
        id: "es-me-llamo",
        term: "me llamo",
        translation: "my name is",
        pronunciationHint: "meh YAH-mo",
        partOfSpeech: "phrase",
        exampleSentence: "Me llamo Alex.",
        exampleTranslation: "My name is Alex.",
      },
      {
        id: "es-mucho-gusto",
        term: "mucho gusto",
        translation: "nice to meet you",
        pronunciationHint: "MOO-choh GOOS-toh",
        partOfSpeech: "phrase",
      },
    ],
    phrases: [
      {
        id: "es-ph-intro",
        phrase: "Hola, me llamo Alex. Mucho gusto.",
        translation: "Hello, my name is Alex. Nice to meet you.",
      },
    ],
    activities: [
      {
        id: "es-u2-l1-a1",
        type: "vocabulary",
        title: "Introduction words",
        order: 1,
        items: [
          {
            id: "es-me-llamo",
            term: "me llamo",
            translation: "my name is",
            pronunciationHint: "meh YAH-mo",
            partOfSpeech: "phrase",
          },
          {
            id: "es-mucho-gusto",
            term: "mucho gusto",
            translation: "nice to meet you",
            pronunciationHint: "MOO-choh GOOS-toh",
            partOfSpeech: "phrase",
          },
        ],
      },
      {
        id: "es-u2-l1-a2",
        type: "speaking",
        title: "Say your introduction",
        order: 2,
        phraseIds: ["es-ph-intro"],
        instructions: "Say the full introduction out loud. Replace Alex with your name.",
      },
      {
        id: "es-u2-l1-a3",
        type: "chat-tutor",
        title: "Chat practice",
        order: 3,
        starterMessage: "¡Hola! ¿Cómo te llamas? Responde en español.",
        suggestedTopics: ["your name", "where you are from", "saying mucho gusto"],
      },
    ],
  },

  // —— French: Bonjour! ——
  {
    id: "fr-unit-1-lesson-1",
    unitId: "fr-unit-1",
    languageCode: "fr",
    order: 1,
    title: "Basic Greetings",
    description: "Learn bonjour, bonsoir, and au revoir.",
    difficulty: "beginner",
    xpReward: 15,
    estimatedMinutes: 5,
    goals: [
      { id: "fr-u1-l1-g1", description: "Use bonjour during the day and bonsoir in the evening." },
    ],
    vocabulary: [
      {
        id: "fr-bonjour",
        term: "bonjour",
        translation: "hello / good day",
        pronunciationHint: "bon-ZHOOR",
        partOfSpeech: "other",
      },
      {
        id: "fr-bonsoir",
        term: "bonsoir",
        translation: "good evening",
        pronunciationHint: "bon-SWAHR",
        partOfSpeech: "other",
      },
      {
        id: "fr-au-revoir",
        term: "au revoir",
        translation: "goodbye",
        pronunciationHint: "oh ruh-VWAHR",
        partOfSpeech: "phrase",
      },
    ],
    phrases: [
      {
        id: "fr-ph-bonjour-comment",
        phrase: "Bonjour ! Comment ça va ?",
        translation: "Hello! How are you?",
        context: "Friendly, everyday French.",
      },
    ],
    activities: [
      {
        id: "fr-u1-l1-a1",
        type: "vocabulary",
        title: "French greetings",
        order: 1,
        items: [
          {
            id: "fr-bonjour",
            term: "bonjour",
            translation: "hello / good day",
            pronunciationHint: "bon-ZHOOR",
          },
          {
            id: "fr-bonsoir",
            term: "bonsoir",
            translation: "good evening",
            pronunciationHint: "bon-SWAHR",
          },
          {
            id: "fr-au-revoir",
            term: "au revoir",
            translation: "goodbye",
            pronunciationHint: "oh ruh-VWAHR",
            partOfSpeech: "phrase",
          },
        ],
      },
      {
        id: "fr-u1-l1-a2",
        type: "vision-teacher",
        title: "Greet your AI teacher",
        order: 2,
        estimatedMinutes: 3,
        prompt: {
          systemContext:
            "You are a friendly French teacher for beginners. Use simple French, repeat key phrases, and give brief English explanations.",
          openingScript:
            "Bonjour ! Bienvenue. Aujourd'hui nous allons pratiquer bonjour, bonsoir, et au revoir.",
          teachingFocus: [
            "Model bonjour with clear pronunciation",
            "Contrast bonjour and bonsoir by time of day",
            "Practice au revoir in a short dialogue",
          ],
          practiceScenarios: [
            "The learner enters a bakery in the morning.",
            "The learner leaves a friend's apartment in the evening.",
          ],
          wrapUpScript:
            "Très bien ! Practice saying bonjour when you start your day. Au revoir !",
        },
      },
    ],
  },

  // —— Japanese: First Words ——
  {
    id: "ja-unit-1-lesson-1",
    unitId: "ja-unit-1",
    languageCode: "ja",
    order: 1,
    title: "Polite Hellos",
    description: "Learn こんにちは, おはよう, and ありがとう.",
    difficulty: "beginner",
    xpReward: 15,
    estimatedMinutes: 6,
    goals: [
      { id: "ja-u1-l1-g1", description: "Recognize basic polite Japanese greetings." },
      { id: "ja-u1-l1-g2", description: "Say thank you with ありがとう." },
    ],
    vocabulary: [
      {
        id: "ja-konnichiwa",
        term: "こんにちは",
        translation: "hello (daytime)",
        pronunciationHint: "kon-nee-chee-wah",
        partOfSpeech: "other",
      },
      {
        id: "ja-ohayou",
        term: "おはよう",
        translation: "good morning (casual)",
        pronunciationHint: "oh-hah-yoh",
        partOfSpeech: "other",
        exampleSentence: "おはよう！",
        exampleTranslation: "Good morning!",
      },
      {
        id: "ja-arigatou",
        term: "ありがとう",
        translation: "thank you",
        pronunciationHint: "ah-ree-gah-toh",
        partOfSpeech: "other",
      },
    ],
    phrases: [
      {
        id: "ja-ph-thanks",
        phrase: "ありがとうございます。",
        translation: "Thank you very much.",
        context: "Polite form — use with strangers or in formal settings.",
        pronunciationHint: "ah-ree-gah-toh go-zah-ee-mahs",
      },
    ],
    activities: [
      {
        id: "ja-u1-l1-a1",
        type: "vocabulary",
        title: "First Japanese words",
        order: 1,
        items: [
          {
            id: "ja-konnichiwa",
            term: "こんにちは",
            translation: "hello (daytime)",
            pronunciationHint: "kon-nee-chee-wah",
          },
          {
            id: "ja-ohayou",
            term: "おはよう",
            translation: "good morning (casual)",
            pronunciationHint: "oh-hah-yoh",
          },
          {
            id: "ja-arigatou",
            term: "ありがとう",
            translation: "thank you",
            pronunciationHint: "ah-ree-gah-toh",
          },
        ],
      },
      {
        id: "ja-u1-l1-a2",
        type: "phrases",
        title: "Polite thanks",
        order: 2,
        items: [
          {
            id: "ja-ph-thanks",
            phrase: "ありがとうございます。",
            translation: "Thank you very much.",
            context: "Polite form — use with strangers or in formal settings.",
            pronunciationHint: "ah-ree-gah-toh go-zah-ee-mahs",
          },
        ],
      },
      {
        id: "ja-u1-l1-a3",
        type: "vision-teacher",
        title: "Practice with your AI teacher",
        order: 3,
        estimatedMinutes: 4,
        prompt: {
          systemContext:
            "You are a calm Japanese teacher for beginners. Introduce hiragana gently, speak slowly, and explain cultural context briefly in English.",
          openingScript:
            "こんにちは！Welcome. Today we will practice konnichiwa, ohayou, and arigatou.",
          teachingFocus: [
            "Pronounce こんにちは and when to use it",
            "Explain casual おはよう vs more polite morning greetings",
            "Practice ありがとう and ありがとうございます",
          ],
          practiceScenarios: [
            "The learner thanks you after receiving help.",
            "The learner greets you in the afternoon.",
          ],
          wrapUpScript:
            "よくできました！Well done. Try using arigatou once today. またね！",
        },
      },
    ],
  },
];

export function getLessonsByUnit(unitId: string): Lesson[] {
  return lessons
    .filter((lesson) => lesson.unitId === unitId)
    .sort((a, b) => a.order - b.order);
}

export function getLessonsByLanguage(code: LanguageCode): Lesson[] {
  return lessons
    .filter((lesson) => lesson.languageCode === code)
    .sort((a, b) => a.order - b.order);
}

export function getLessonById(id: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.id === id);
}
