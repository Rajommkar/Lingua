import type { Lesson } from "@/types/learning";

export const additionalLessons: Lesson[] = [
  {
    id: "de-unit-1-lesson-1",
    unitId: "de-unit-1",
    languageCode: "de",
    order: 1,
    title: "Say Hallo",
    description: "Learn hallo, guten Morgen, and guten Abend.",
    difficulty: "beginner",
    xpReward: 15,
    estimatedMinutes: 5,
    goals: [
      {
        id: "de-u1-l1-g1",
        description:
          "Recognize common German greetings for different times of day.",
      },
    ],
    vocabulary: [
      {
        id: "de-hallo",
        term: "hallo",
        translation: "hello",
        pronunciationHint: "HAH-loh",
        partOfSpeech: "other",
      },
      {
        id: "de-guten-morgen",
        term: "guten Morgen",
        translation: "good morning",
        pronunciationHint: "GOO-ten MOR-gen",
        partOfSpeech: "phrase",
      },
      {
        id: "de-guten-abend",
        term: "guten Abend",
        translation: "good evening",
        pronunciationHint: "GOO-ten AH-bent",
        partOfSpeech: "phrase",
      },
    ],
    phrases: [
      {
        id: "de-ph-greeting",
        phrase: "Hallo! Guten Morgen!",
        translation: "Hello! Good morning!",
      },
    ],
    activities: [
      {
        id: "de-u1-l1-a1",
        type: "vocabulary",
        title: "German greetings",
        order: 1,
        estimatedMinutes: 2,
        items: [
          {
            id: "de-hallo",
            term: "hallo",
            translation: "hello",
            pronunciationHint: "HAH-loh",
            partOfSpeech: "other",
          },
          {
            id: "de-guten-morgen",
            term: "guten Morgen",
            translation: "good morning",
            pronunciationHint: "GOO-ten MOR-gen",
            partOfSpeech: "phrase",
          },
          {
            id: "de-guten-abend",
            term: "guten Abend",
            translation: "good evening",
            pronunciationHint: "GOO-ten AH-bent",
            partOfSpeech: "phrase",
          },
        ],
      },
      {
        id: "de-u1-l1-a2",
        type: "phrases",
        title: "Use the greeting",
        order: 2,
        items: [
          {
            id: "de-ph-greeting",
            phrase: "Hallo! Guten Morgen!",
            translation: "Hello! Good morning!",
          },
        ],
      },
    ],
  },
  {
    id: "de-unit-1-lesson-2",
    unitId: "de-unit-1",
    languageCode: "de",
    order: 2,
    title: "Say Goodbye",
    description: "Practice tschuss, auf Wiedersehen, and bis bald.",
    difficulty: "beginner",
    xpReward: 15,
    estimatedMinutes: 4,
    goals: [
      {
        id: "de-u1-l2-g1",
        description: "Say goodbye in casual and polite situations.",
      },
    ],
    vocabulary: [
      {
        id: "de-tschuss",
        term: "tschuss",
        translation: "bye",
        pronunciationHint: "choos",
        partOfSpeech: "other",
      },
      {
        id: "de-auf-wiedersehen",
        term: "auf Wiedersehen",
        translation: "goodbye",
        pronunciationHint: "owf VEE-der-zayn",
        partOfSpeech: "phrase",
      },
      {
        id: "de-bis-bald",
        term: "bis bald",
        translation: "see you soon",
        pronunciationHint: "bis balt",
        partOfSpeech: "phrase",
      },
    ],
    phrases: [
      {
        id: "de-ph-bye",
        phrase: "Tschuss! Bis bald.",
        translation: "Bye! See you soon.",
      },
    ],
    activities: [
      {
        id: "de-u1-l2-a1",
        type: "vocabulary",
        title: "Goodbye words",
        order: 1,
        items: [
          {
            id: "de-tschuss",
            term: "tschuss",
            translation: "bye",
            pronunciationHint: "choos",
          },
          {
            id: "de-auf-wiedersehen",
            term: "auf Wiedersehen",
            translation: "goodbye",
            pronunciationHint: "owf VEE-der-zayn",
            partOfSpeech: "phrase",
          },
          {
            id: "de-bis-bald",
            term: "bis bald",
            translation: "see you soon",
            pronunciationHint: "bis balt",
            partOfSpeech: "phrase",
          },
        ],
      },
      {
        id: "de-u1-l2-a2",
        type: "listening",
        title: "Hear the farewell",
        order: 2,
        vocabularyIds: ["de-tschuss", "de-auf-wiedersehen", "de-bis-bald"],
        instructions: "Listen and tap the phrase you hear.",
      },
    ],
  },
  {
    id: "de-unit-1-lesson-3",
    unitId: "de-unit-1",
    languageCode: "de",
    order: 3,
    title: "Be Polite",
    description: "Use bitte and danke in short everyday exchanges.",
    difficulty: "beginner",
    xpReward: 20,
    estimatedMinutes: 5,
    goals: [
      {
        id: "de-u1-l3-g1",
        description: "Understand when to say please and thank you.",
      },
    ],
    vocabulary: [
      {
        id: "de-bitte",
        term: "bitte",
        translation: "please / you're welcome",
        pronunciationHint: "BIT-teh",
        partOfSpeech: "other",
      },
      {
        id: "de-danke",
        term: "danke",
        translation: "thank you",
        pronunciationHint: "DAHN-keh",
        partOfSpeech: "other",
      },
    ],
    phrases: [
      {
        id: "de-ph-thanks",
        phrase: "Danke! Bitte!",
        translation: "Thank you! You're welcome!",
      },
    ],
    activities: [
      {
        id: "de-u1-l3-a1",
        type: "vocabulary",
        title: "Polite words",
        order: 1,
        items: [
          {
            id: "de-bitte",
            term: "bitte",
            translation: "please / you're welcome",
            pronunciationHint: "BIT-teh",
          },
          {
            id: "de-danke",
            term: "danke",
            translation: "thank you",
            pronunciationHint: "DAHN-keh",
          },
        ],
      },
      {
        id: "de-u1-l3-a2",
        type: "speaking",
        title: "Say it out loud",
        order: 2,
        phraseIds: ["de-ph-thanks"],
        instructions: "Repeat the polite exchange and keep the tone friendly.",
      },
    ],
  },
  {
    id: "de-unit-1-lesson-4",
    unitId: "de-unit-1",
    languageCode: "de",
    order: 4,
    title: "Ask Names",
    description: "Practice asking and answering names in German.",
    difficulty: "beginner",
    xpReward: 20,
    estimatedMinutes: 6,
    goals: [{ id: "de-u1-l4-g1", description: "Ask someone's name politely." }],
    vocabulary: [
      {
        id: "de-wie-heisst-du",
        term: "Wie heißt du?",
        translation: "What's your name?",
        pronunciationHint: "vee HYST doo",
        partOfSpeech: "phrase",
      },
      {
        id: "de-ich-heisse",
        term: "Ich heiße",
        translation: "My name is",
        pronunciationHint: "ikh HY-suh",
        partOfSpeech: "phrase",
      },
    ],
    phrases: [
      {
        id: "de-ph-name",
        phrase: "Wie heißt du? Ich heiße Lena.",
        translation: "What's your name? My name is Lena.",
      },
    ],
    activities: [
      {
        id: "de-u1-l4-a1",
        type: "vocabulary",
        title: "Name phrases",
        order: 1,
        items: [
          {
            id: "de-wie-heisst-du",
            term: "Wie heißt du?",
            translation: "What's your name?",
            pronunciationHint: "vee HYST doo",
          },
          {
            id: "de-ich-heisse",
            term: "Ich heiße",
            translation: "My name is",
            pronunciationHint: "ikh HY-suh",
          },
        ],
      },
    ],
  },
  {
    id: "de-unit-1-lesson-5",
    unitId: "de-unit-1",
    languageCode: "de",
    order: 5,
    title: "Ask How Someone Is",
    description: "Use wie geht's and simple responses in German.",
    difficulty: "beginner",
    xpReward: 20,
    estimatedMinutes: 6,
    goals: [
      {
        id: "de-u1-l5-g1",
        description: "Ask how someone is and answer naturally.",
      },
    ],
    vocabulary: [
      {
        id: "de-wie-gehts",
        term: "Wie geht's?",
        translation: "How are you?",
        pronunciationHint: "vee gayts",
        partOfSpeech: "phrase",
      },
      {
        id: "de-gut",
        term: "gut",
        translation: "good",
        pronunciationHint: "goot",
        partOfSpeech: "adjective",
      },
      {
        id: "de-nicht-schlecht",
        term: "Nicht schlecht",
        translation: "Not bad",
        pronunciationHint: "nikht shlekht",
        partOfSpeech: "phrase",
      },
    ],
    phrases: [
      {
        id: "de-ph-howareyou",
        phrase: "Wie geht's? Gut, danke.",
        translation: "How are you? Good, thank you.",
      },
    ],
    activities: [
      {
        id: "de-u1-l5-a1",
        type: "vocabulary",
        title: "Check-in words",
        order: 1,
        items: [
          {
            id: "de-wie-gehts",
            term: "Wie geht's?",
            translation: "How are you?",
            pronunciationHint: "vee gayts",
          },
          {
            id: "de-gut",
            term: "gut",
            translation: "good",
            pronunciationHint: "goot",
          },
          {
            id: "de-nicht-schlecht",
            term: "Nicht schlecht",
            translation: "Not bad",
            pronunciationHint: "nikht shlekht",
          },
        ],
      },
    ],
  },
  {
    id: "de-unit-1-lesson-6",
    unitId: "de-unit-1",
    languageCode: "de",
    order: 6,
    title: "Please & Thank You",
    description: "Practice bitte, danke, and polite responses in German.",
    difficulty: "beginner",
    xpReward: 20,
    estimatedMinutes: 6,
    goals: [
      {
        id: "de-u1-l6-g1",
        description: "Use polite words in everyday German.",
      },
    ],
    vocabulary: [
      {
        id: "de-bitte",
        term: "bitte",
        translation: "please / you're welcome",
        pronunciationHint: "BIT-teh",
        partOfSpeech: "phrase",
      },
      {
        id: "de-danke",
        term: "danke",
        translation: "thank you",
        pronunciationHint: "DAHN-keh",
        partOfSpeech: "other",
      },
      {
        id: "de-gern-geschehen",
        term: "Gern geschehen",
        translation: "You're welcome",
        pronunciationHint: "gehrn guh-SHAY-en",
        partOfSpeech: "phrase",
      },
    ],
    phrases: [
      {
        id: "de-ph-politeness",
        phrase: "Danke! Bitte sehr.",
        translation: "Thank you! You're very welcome.",
      },
    ],
    activities: [
      {
        id: "de-u1-l6-a1",
        type: "vocabulary",
        title: "Polite words",
        order: 1,
        items: [
          {
            id: "de-bitte",
            term: "bitte",
            translation: "please / you're welcome",
            pronunciationHint: "BIT-teh",
          },
          {
            id: "de-danke",
            term: "danke",
            translation: "thank you",
            pronunciationHint: "DAHN-keh",
          },
          {
            id: "de-gern-geschehen",
            term: "Gern geschehen",
            translation: "You're welcome",
            pronunciationHint: "gehrn guh-SHAY-en",
          },
        ],
      },
    ],
  },
  {
    id: "de-unit-2-lesson-1",
    unitId: "de-unit-2",
    languageCode: "de",
    order: 1,
    title: "Order Coffee",
    description: "Ask for coffee and tea with one simple sentence.",
    difficulty: "beginner",
    xpReward: 20,
    estimatedMinutes: 6,
    goals: [
      { id: "de-u2-l1-g1", description: "Order a drink politely in a cafe." },
    ],
    vocabulary: [
      {
        id: "de-kaffee",
        term: "Kaffee",
        translation: "coffee",
        pronunciationHint: "kah-FEH",
        partOfSpeech: "noun",
      },
      {
        id: "de-tee",
        term: "Tee",
        translation: "tea",
        pronunciationHint: "teh",
        partOfSpeech: "noun",
      },
      {
        id: "de-ich-mochte",
        term: "ich mochte",
        translation: "I would like",
        pronunciationHint: "ikh MERKH-teh",
        partOfSpeech: "phrase",
      },
    ],
    phrases: [
      {
        id: "de-ph-order",
        phrase: "Ich mochte einen Kaffee, bitte.",
        translation: "I would like a coffee, please.",
      },
    ],
    activities: [
      {
        id: "de-u2-l1-a1",
        type: "vocabulary",
        title: "Cafe words",
        order: 1,
        items: [
          {
            id: "de-kaffee",
            term: "Kaffee",
            translation: "coffee",
            pronunciationHint: "kah-FEH",
          },
          {
            id: "de-tee",
            term: "Tee",
            translation: "tea",
            pronunciationHint: "teh",
          },
          {
            id: "de-ich-mochte",
            term: "ich mochte",
            translation: "I would like",
            pronunciationHint: "ikh MERKH-teh",
            partOfSpeech: "phrase",
          },
        ],
      },
      {
        id: "de-u2-l1-a2",
        type: "chat-tutor",
        title: "Cafe roleplay",
        order: 2,
        starterMessage: "Bestelle bitte einen Kaffee auf Deutsch.",
        suggestedTopics: ["ordering tea", "adding bitte", "saying danke"],
      },
    ],
  },
  {
    id: "de-unit-2-lesson-2",
    unitId: "de-unit-2",
    languageCode: "de",
    order: 2,
    title: "Ask for Water",
    description: "Request water and practice one extra polite phrase.",
    difficulty: "beginner",
    xpReward: 20,
    estimatedMinutes: 5,
    goals: [
      {
        id: "de-u2-l2-g1",
        description: "Request water in a clear and polite way.",
      },
    ],
    vocabulary: [
      {
        id: "de-wasser",
        term: "Wasser",
        translation: "water",
        pronunciationHint: "VAH-ser",
        partOfSpeech: "noun",
      },
      {
        id: "de-noch",
        term: "noch",
        translation: "another / more",
        pronunciationHint: "nokh",
        partOfSpeech: "other",
      },
    ],
    phrases: [
      {
        id: "de-ph-water",
        phrase: "Ein Wasser, bitte.",
        translation: "A water, please.",
      },
    ],
    activities: [
      {
        id: "de-u2-l2-a1",
        type: "vocabulary",
        title: "Drink requests",
        order: 1,
        items: [
          {
            id: "de-wasser",
            term: "Wasser",
            translation: "water",
            pronunciationHint: "VAH-ser",
          },
          {
            id: "de-noch",
            term: "noch",
            translation: "another / more",
            pronunciationHint: "nokh",
          },
        ],
      },
      {
        id: "de-u2-l2-a2",
        type: "review",
        title: "Quick cafe review",
        order: 2,
        vocabularyIds: ["de-kaffee", "de-tee", "de-wasser"],
        phraseIds: ["de-ph-order", "de-ph-water"],
      },
    ],
  },
  {
    id: "de-unit-2-lesson-3",
    unitId: "de-unit-2",
    languageCode: "de",
    order: 3,
    title: "Pay the Bill",
    description: "Ask for the bill and wrap up a simple cafe visit.",
    difficulty: "beginner",
    xpReward: 25,
    estimatedMinutes: 6,
    goals: [
      {
        id: "de-u2-l3-g1",
        description: "Ask for the bill at the end of a meal.",
      },
    ],
    vocabulary: [
      {
        id: "de-rechnung",
        term: "die Rechnung",
        translation: "the bill",
        pronunciationHint: "dee REKH-noong",
        partOfSpeech: "noun",
      },
      {
        id: "de-zahlen",
        term: "zahlen",
        translation: "to pay",
        pronunciationHint: "TSAH-len",
        partOfSpeech: "verb",
      },
    ],
    phrases: [
      {
        id: "de-ph-bill",
        phrase: "Die Rechnung, bitte.",
        translation: "The bill, please.",
      },
    ],
    activities: [
      {
        id: "de-u2-l3-a1",
        type: "vocabulary",
        title: "Paying words",
        order: 1,
        items: [
          {
            id: "de-rechnung",
            term: "die Rechnung",
            translation: "the bill",
            pronunciationHint: "dee REKH-noong",
          },
          {
            id: "de-zahlen",
            term: "zahlen",
            translation: "to pay",
            pronunciationHint: "TSAH-len",
            partOfSpeech: "verb",
          },
        ],
      },
      {
        id: "de-u2-l3-a2",
        type: "vision-teacher",
        title: "Cafe practice with your AI teacher",
        order: 2,
        estimatedMinutes: 4,
        prompt: {
          systemContext:
            "You are a friendly German teacher for beginners. Keep examples short, pronounce clearly, and support the learner in English when helpful.",
          openingScript:
            "Hallo! Today we will order drinks and ask for the bill in German.",
          teachingFocus: [
            "Practice ich mochte and bitte",
            "Use Wasser and Kaffee naturally",
            "Finish with Die Rechnung, bitte",
          ],
          practiceScenarios: [
            "The learner orders a coffee and water.",
            "The learner asks for the bill before leaving the cafe.",
          ],
          wrapUpScript:
            "Sehr gut! You can now handle a very simple cafe conversation in German.",
        },
      },
    ],
  },
  {
    id: "de-unit-2-lesson-4",
    unitId: "de-unit-2",
    languageCode: "de",
    order: 4,
    title: "Travel & Directions",
    description: "Ask for directions and practice location words in German.",
    difficulty: "beginner",
    xpReward: 25,
    estimatedMinutes: 7,
    goals: [
      {
        id: "de-u2-l4-g1",
        description: "Ask for directions using simple location phrases.",
      },
    ],
    vocabulary: [
      {
        id: "de-rechts",
        term: "rechts",
        translation: "right",
        pronunciationHint: "rehkts",
        partOfSpeech: "other",
      },
      {
        id: "de-links",
        term: "links",
        translation: "left",
        pronunciationHint: "links",
        partOfSpeech: "other",
      },
      {
        id: "de-geradeaus",
        term: "geradeaus",
        translation: "straight ahead",
        pronunciationHint: "geh-RAH-deh-ows",
        partOfSpeech: "other",
      },
    ],
    phrases: [
      {
        id: "de-ph-directions",
        phrase: "Gehen Sie geradeaus und dann rechts.",
        translation: "Go straight ahead and then right.",
      },
    ],
    activities: [
      {
        id: "de-u2-l4-a1",
        type: "vocabulary",
        title: "Direction words",
        order: 1,
        items: [
          {
            id: "de-rechts",
            term: "rechts",
            translation: "right",
            pronunciationHint: "rehkts",
          },
          {
            id: "de-links",
            term: "links",
            translation: "left",
            pronunciationHint: "links",
          },
          {
            id: "de-geradeaus",
            term: "geradeaus",
            translation: "straight ahead",
            pronunciationHint: "geh-RAH-deh-ows",
          },
        ],
      },
    ],
  },
  {
    id: "de-unit-2-lesson-5",
    unitId: "de-unit-2",
    languageCode: "de",
    order: 5,
    title: "Shopping",
    description:
      "Learn simple shopping phrases and ask about prices in German.",
    difficulty: "beginner",
    xpReward: 25,
    estimatedMinutes: 7,
    goals: [
      {
        id: "de-u2-l5-g1",
        description:
          "Ask how much something costs and understand basic shop words.",
      },
    ],
    vocabulary: [
      {
        id: "de-laden",
        term: "Laden",
        translation: "shop",
        pronunciationHint: "LAH-den",
        partOfSpeech: "noun",
      },
      {
        id: "de-preis",
        term: "Preis",
        translation: "price",
        pronunciationHint: "pryce",
        partOfSpeech: "noun",
      },
      {
        id: "de-wie-viel",
        term: "wie viel",
        translation: "how much",
        pronunciationHint: "vee feel",
        partOfSpeech: "phrase",
      },
    ],
    phrases: [
      {
        id: "de-ph-shopping",
        phrase: "Wie viel kostet das?",
        translation: "How much does that cost?",
      },
    ],
    activities: [
      {
        id: "de-u2-l5-a1",
        type: "vocabulary",
        title: "Shopping words",
        order: 1,
        items: [
          {
            id: "de-laden",
            term: "Laden",
            translation: "shop",
            pronunciationHint: "LAH-den",
          },
          {
            id: "de-preis",
            term: "Preis",
            translation: "price",
            pronunciationHint: "pryce",
          },
          {
            id: "de-wie-viel",
            term: "wie viel",
            translation: "how much",
            pronunciationHint: "vee feel",
          },
        ],
      },
    ],
  },
  {
    id: "de-unit-2-lesson-6",
    unitId: "de-unit-2",
    languageCode: "de",
    order: 6,
    title: "Family & Friends",
    description: "Talk about family and friends with simple German words.",
    difficulty: "beginner",
    xpReward: 25,
    estimatedMinutes: 7,
    goals: [
      {
        id: "de-u2-l6-g1",
        description: "Describe family members and friendships in German.",
      },
    ],
    vocabulary: [
      {
        id: "de-familie",
        term: "Familie",
        translation: "family",
        pronunciationHint: "fah-MEE-lee-eh",
        partOfSpeech: "noun",
      },
      {
        id: "de-freund",
        term: "Freund",
        translation: "friend",
        pronunciationHint: "froint",
        partOfSpeech: "noun",
      },
      {
        id: "de-schwester",
        term: "Schwester",
        translation: "sister",
        pronunciationHint: "SHVESS-ter",
        partOfSpeech: "noun",
      },
    ],
    phrases: [
      {
        id: "de-ph-family",
        phrase: "Das ist meine Schwester und das ist mein Freund.",
        translation: "This is my sister and this is my friend.",
      },
    ],
    activities: [
      {
        id: "de-u2-l6-a1",
        type: "vocabulary",
        title: "Family words",
        order: 1,
        items: [
          {
            id: "de-familie",
            term: "Familie",
            translation: "family",
            pronunciationHint: "fah-MEE-lee-eh",
          },
          {
            id: "de-freund",
            term: "Freund",
            translation: "friend",
            pronunciationHint: "froint",
          },
          {
            id: "de-schwester",
            term: "Schwester",
            translation: "sister",
            pronunciationHint: "SHVESS-ter",
          },
        ],
      },
    ],
  },
  {
    id: "fr-unit-1-lesson-2",
    unitId: "fr-unit-1",
    languageCode: "fr",
    order: 2,
    title: "Say Your Name",
    description: "Use je m'appelle and enchante in a warm introduction.",
    difficulty: "beginner",
    xpReward: 18,
    estimatedMinutes: 5,
    goals: [
      {
        id: "fr-u1-l2-g1",
        description: "Introduce yourself by name in simple French.",
      },
    ],
    vocabulary: [
      {
        id: "fr-je-mappelle",
        term: "je m'appelle",
        translation: "my name is",
        pronunciationHint: "zhuh mah-pel",
        partOfSpeech: "phrase",
      },
      {
        id: "fr-enchante",
        term: "enchante",
        translation: "nice to meet you",
        pronunciationHint: "ahn-shahn-TAY",
        partOfSpeech: "phrase",
      },
    ],
    phrases: [
      {
        id: "fr-ph-intro",
        phrase: "Bonjour, je m'appelle Mia. Enchante !",
        translation: "Hello, my name is Mia. Nice to meet you!",
      },
    ],
    activities: [
      {
        id: "fr-u1-l2-a1",
        type: "vocabulary",
        title: "Introduction words",
        order: 1,
        items: [
          {
            id: "fr-je-mappelle",
            term: "je m'appelle",
            translation: "my name is",
            pronunciationHint: "zhuh mah-pel",
            partOfSpeech: "phrase",
          },
          {
            id: "fr-enchante",
            term: "enchante",
            translation: "nice to meet you",
            pronunciationHint: "ahn-shahn-TAY",
            partOfSpeech: "phrase",
          },
        ],
      },
      {
        id: "fr-u1-l2-a2",
        type: "speaking",
        title: "Say your introduction",
        order: 2,
        phraseIds: ["fr-ph-intro"],
        instructions: "Repeat the phrase and swap in your own name.",
      },
    ],
  },
  {
    id: "fr-unit-1-lesson-3",
    unitId: "fr-unit-1",
    languageCode: "fr",
    order: 3,
    title: "Ask How Someone Is",
    description: "Practice comment ca va and simple responses.",
    difficulty: "beginner",
    xpReward: 18,
    estimatedMinutes: 5,
    goals: [
      {
        id: "fr-u1-l3-g1",
        description: "Ask how someone is and reply simply.",
      },
    ],
    vocabulary: [
      {
        id: "fr-ca-va",
        term: "ca va ?",
        translation: "how are you?",
        pronunciationHint: "sah VAH",
        partOfSpeech: "phrase",
      },
      {
        id: "fr-tres-bien",
        term: "tres bien",
        translation: "very well",
        pronunciationHint: "tray BYEHN",
        partOfSpeech: "phrase",
      },
    ],
    phrases: [
      {
        id: "fr-ph-how-are-you",
        phrase: "Bonjour ! Ca va ? Tres bien.",
        translation: "Hello! How are you? Very well.",
      },
    ],
    activities: [
      {
        id: "fr-u1-l3-a1",
        type: "vocabulary",
        title: "Simple replies",
        order: 1,
        items: [
          {
            id: "fr-ca-va",
            term: "ca va ?",
            translation: "how are you?",
            pronunciationHint: "sah VAH",
            partOfSpeech: "phrase",
          },
          {
            id: "fr-tres-bien",
            term: "tres bien",
            translation: "very well",
            pronunciationHint: "tray BYEHN",
            partOfSpeech: "phrase",
          },
        ],
      },
      {
        id: "fr-u1-l3-a2",
        type: "chat-tutor",
        title: "Friendly check-in",
        order: 2,
        starterMessage: "Dis bonjour et demande comment ca va.",
        suggestedTopics: [
          "replying with tres bien",
          "asking again",
          "keeping it short",
        ],
      },
    ],
  },
  {
    id: "fr-unit-1-lesson-4",
    unitId: "fr-unit-1",
    languageCode: "fr",
    order: 4,
    title: "Ask Your Name",
    description: "Practice asking and answering names in French.",
    difficulty: "beginner",
    xpReward: 20,
    estimatedMinutes: 6,
    goals: [{ id: "fr-u1-l4-g1", description: "Ask someone's name politely." }],
    vocabulary: [
      {
        id: "fr-comment-t-appelles-tu",
        term: "Comment t'appelles-tu ?",
        translation: "What's your name?",
        pronunciationHint: "koh-mahn tah-pel TOO",
        partOfSpeech: "phrase",
      },
      {
        id: "fr-je-mappelle",
        term: "Je m'appelle",
        translation: "My name is",
        pronunciationHint: "zhuh mah-pel",
        partOfSpeech: "phrase",
      },
    ],
    phrases: [
      {
        id: "fr-ph-ask-name",
        phrase: "Comment t'appelles-tu ? Je m'appelle Emma.",
        translation: "What's your name? My name is Emma.",
      },
    ],
    activities: [
      {
        id: "fr-u1-l4-a1",
        type: "vocabulary",
        title: "Name phrases",
        order: 1,
        items: [
          {
            id: "fr-comment-t-appelles-tu",
            term: "Comment t'appelles-tu ?",
            translation: "What's your name?",
            pronunciationHint: "koh-mahn tah-pel TOO",
          },
          {
            id: "fr-je-mappelle",
            term: "Je m'appelle",
            translation: "My name is",
            pronunciationHint: "zhuh mah-pel",
          },
        ],
      },
    ],
  },
  {
    id: "fr-unit-1-lesson-5",
    unitId: "fr-unit-1",
    languageCode: "fr",
    order: 5,
    title: "Ask How Someone Is",
    description: "Use comment ça va and simple responses in French.",
    difficulty: "beginner",
    xpReward: 20,
    estimatedMinutes: 6,
    goals: [
      {
        id: "fr-u1-l5-g1",
        description: "Ask how someone is and reply simply.",
      },
    ],
    vocabulary: [
      {
        id: "fr-comment-ca-va",
        term: "Comment ça va ?",
        translation: "How are you?",
        pronunciationHint: "koh-mahn sah vah",
        partOfSpeech: "phrase",
      },
      {
        id: "fr-tres-bien",
        term: "Très bien",
        translation: "Very well",
        pronunciationHint: "treh byehn",
        partOfSpeech: "phrase",
      },
      {
        id: "fr-comme-ci-comme-ca",
        term: "Comme ci, comme ça",
        translation: "So-so",
        pronunciationHint: "kohm see kohm sah",
        partOfSpeech: "phrase",
      },
    ],
    phrases: [
      {
        id: "fr-ph-mood-check",
        phrase: "Comment ça va ? Très bien, merci.",
        translation: "How are you? Very well, thank you.",
      },
    ],
    activities: [
      {
        id: "fr-u1-l5-a1",
        type: "vocabulary",
        title: "Mood phrases",
        order: 1,
        items: [
          {
            id: "fr-comment-ca-va",
            term: "Comment ça va ?",
            translation: "How are you?",
            pronunciationHint: "koh-mahn sah vah",
          },
          {
            id: "fr-tres-bien",
            term: "Très bien",
            translation: "Very well",
            pronunciationHint: "treh byehn",
          },
          {
            id: "fr-comme-ci-comme-ca",
            term: "Comme ci, comme ça",
            translation: "So-so",
            pronunciationHint: "kohm see kohm sah",
          },
        ],
      },
    ],
  },
  {
    id: "fr-unit-1-lesson-6",
    unitId: "fr-unit-1",
    languageCode: "fr",
    order: 6,
    title: "Please & Thank You",
    description: "Practice polite words and short responses in French.",
    difficulty: "beginner",
    xpReward: 20,
    estimatedMinutes: 6,
    goals: [
      {
        id: "fr-u1-l6-g1",
        description: "Use merci and s'il vous plaît naturally.",
      },
    ],
    vocabulary: [
      {
        id: "fr-sil-vous-plait",
        term: "S'il vous plaît",
        translation: "Please",
        pronunciationHint: "seel voo PLAY",
        partOfSpeech: "phrase",
      },
      {
        id: "fr-merci",
        term: "Merci",
        translation: "Thank you",
        pronunciationHint: "mehr-SEE",
        partOfSpeech: "other",
      },
      {
        id: "fr-je-vous-en-prie",
        term: "Je vous en prie",
        translation: "You're welcome",
        pronunciationHint: "zhuh voo zahn pree",
        partOfSpeech: "phrase",
      },
    ],
    phrases: [
      {
        id: "fr-ph-polite",
        phrase: "Merci beaucoup. Je vous en prie.",
        translation: "Thank you very much. You're welcome.",
      },
    ],
    activities: [
      {
        id: "fr-u1-l6-a1",
        type: "vocabulary",
        title: "Polite French",
        order: 1,
        items: [
          {
            id: "fr-sil-vous-plait",
            term: "S'il vous plaît",
            translation: "Please",
            pronunciationHint: "seel voo PLAY",
          },
          {
            id: "fr-merci",
            term: "Merci",
            translation: "Thank you",
            pronunciationHint: "mehr-SEE",
          },
          {
            id: "fr-je-vous-en-prie",
            term: "Je vous en prie",
            translation: "You're welcome",
            pronunciationHint: "zhuh voo zahn pree",
          },
        ],
      },
    ],
  },
  {
    id: "fr-unit-2-lesson-1",
    unitId: "fr-unit-2",
    languageCode: "fr",
    order: 1,
    title: "Order a Coffee",
    description: "Ask for coffee politely in a French cafe.",
    difficulty: "beginner",
    xpReward: 20,
    estimatedMinutes: 6,
    goals: [
      {
        id: "fr-u2-l1-g1",
        description: "Order a coffee using one simple phrase.",
      },
    ],
    vocabulary: [
      {
        id: "fr-cafe",
        term: "un cafe",
        translation: "a coffee",
        pronunciationHint: "uhn kah-FAY",
        partOfSpeech: "noun",
      },
      {
        id: "fr-sil-vous-plait",
        term: "s'il vous plait",
        translation: "please",
        pronunciationHint: "seel voo PLAY",
        partOfSpeech: "phrase",
      },
    ],
    phrases: [
      {
        id: "fr-ph-order-coffee",
        phrase: "Un cafe, s'il vous plait.",
        translation: "A coffee, please.",
      },
    ],
    activities: [
      {
        id: "fr-u2-l1-a1",
        type: "vocabulary",
        title: "Cafe basics",
        order: 1,
        items: [
          {
            id: "fr-cafe",
            term: "un cafe",
            translation: "a coffee",
            pronunciationHint: "uhn kah-FAY",
          },
          {
            id: "fr-sil-vous-plait",
            term: "s'il vous plait",
            translation: "please",
            pronunciationHint: "seel voo PLAY",
            partOfSpeech: "phrase",
          },
        ],
      },
      {
        id: "fr-u2-l1-a2",
        type: "listening",
        title: "Hear the order",
        order: 2,
        vocabularyIds: ["fr-cafe", "fr-sil-vous-plait"],
        instructions: "Listen and choose the drink request you hear.",
      },
    ],
  },
  {
    id: "fr-unit-2-lesson-2",
    unitId: "fr-unit-2",
    languageCode: "fr",
    order: 2,
    title: "Order Water",
    description: "Request water and add a polite follow-up.",
    difficulty: "beginner",
    xpReward: 20,
    estimatedMinutes: 5,
    goals: [
      {
        id: "fr-u2-l2-g1",
        description: "Request water with calm, polite phrasing.",
      },
    ],
    vocabulary: [
      {
        id: "fr-eau",
        term: "de l'eau",
        translation: "water",
        pronunciationHint: "duh LOH",
        partOfSpeech: "noun",
      },
      {
        id: "fr-merci",
        term: "merci",
        translation: "thank you",
        pronunciationHint: "mehr-SEE",
        partOfSpeech: "other",
      },
    ],
    phrases: [
      {
        id: "fr-ph-water",
        phrase: "De l'eau, s'il vous plait.",
        translation: "Water, please.",
      },
    ],
    activities: [
      {
        id: "fr-u2-l2-a1",
        type: "vocabulary",
        title: "Drink requests",
        order: 1,
        items: [
          {
            id: "fr-eau",
            term: "de l'eau",
            translation: "water",
            pronunciationHint: "duh LOH",
          },
          {
            id: "fr-merci",
            term: "merci",
            translation: "thank you",
            pronunciationHint: "mehr-SEE",
          },
        ],
      },
      {
        id: "fr-u2-l2-a2",
        type: "review",
        title: "Cafe review",
        order: 2,
        vocabularyIds: ["fr-cafe", "fr-eau", "fr-merci"],
        phraseIds: ["fr-ph-order-coffee", "fr-ph-water"],
      },
    ],
  },
  {
    id: "fr-unit-2-lesson-3",
    unitId: "fr-unit-2",
    languageCode: "fr",
    order: 3,
    title: "Travel & Directions",
    description: "Ask for directions and talk about places in French.",
    difficulty: "beginner",
    xpReward: 25,
    estimatedMinutes: 7,
    goals: [
      {
        id: "fr-u2-l3-g1",
        description: "Ask where something is and use basic direction words.",
      },
    ],
    vocabulary: [
      {
        id: "fr-droite",
        term: "à droite",
        translation: "to the right",
        pronunciationHint: "ah drwaht",
        partOfSpeech: "phrase",
      },
      {
        id: "fr-gauche",
        term: "à gauche",
        translation: "to the left",
        pronunciationHint: "ah gohsh",
        partOfSpeech: "phrase",
      },
      {
        id: "fr-tout-droit",
        term: "tout droit",
        translation: "straight ahead",
        pronunciationHint: "too drwah",
        partOfSpeech: "phrase",
      },
    ],
    phrases: [
      {
        id: "fr-ph-directions",
        phrase: "Allez tout droit, puis tournez à droite.",
        translation: "Go straight ahead, then turn right.",
      },
    ],
    activities: [
      {
        id: "fr-u2-l3-a1",
        type: "vocabulary",
        title: "Direction phrases",
        order: 1,
        items: [
          {
            id: "fr-droite",
            term: "à droite",
            translation: "to the right",
            pronunciationHint: "ah drwaht",
          },
          {
            id: "fr-gauche",
            term: "à gauche",
            translation: "to the left",
            pronunciationHint: "ah gohsh",
          },
          {
            id: "fr-tout-droit",
            term: "tout droit",
            translation: "straight ahead",
            pronunciationHint: "too drwah",
          },
        ],
      },
    ],
  },
  {
    id: "fr-unit-2-lesson-4",
    unitId: "fr-unit-2",
    languageCode: "fr",
    order: 4,
    title: "Shopping",
    description: "Practice shopping phrases and asking about prices in French.",
    difficulty: "beginner",
    xpReward: 25,
    estimatedMinutes: 7,
    goals: [
      {
        id: "fr-u2-l4-g1",
        description: "Ask for prices and use simple shopping vocabulary.",
      },
    ],
    vocabulary: [
      {
        id: "fr-magasin",
        term: "magasin",
        translation: "store",
        pronunciationHint: "mah-gah-ZAN",
        partOfSpeech: "noun",
      },
      {
        id: "fr-prix",
        term: "prix",
        translation: "price",
        pronunciationHint: "pree",
        partOfSpeech: "noun",
      },
      {
        id: "fr-combien",
        term: "combien",
        translation: "how much",
        pronunciationHint: "kohm-BYAN",
        partOfSpeech: "phrase",
      },
    ],
    phrases: [
      {
        id: "fr-ph-shopping",
        phrase: "Combien ça coûte ?",
        translation: "How much does that cost?",
      },
    ],
    activities: [
      {
        id: "fr-u2-l4-a1",
        type: "vocabulary",
        title: "Shopping words",
        order: 1,
        items: [
          {
            id: "fr-magasin",
            term: "magasin",
            translation: "store",
            pronunciationHint: "mah-gah-ZAN",
          },
          {
            id: "fr-prix",
            term: "prix",
            translation: "price",
            pronunciationHint: "pree",
          },
          {
            id: "fr-combien",
            term: "combien",
            translation: "how much",
            pronunciationHint: "kohm-BYAN",
          },
        ],
      },
    ],
  },
  {
    id: "fr-unit-2-lesson-5",
    unitId: "fr-unit-2",
    languageCode: "fr",
    order: 5,
    title: "Family & Friends",
    description: "Talk about family and friends using simple French words.",
    difficulty: "beginner",
    xpReward: 25,
    estimatedMinutes: 7,
    goals: [
      {
        id: "fr-u2-l5-g1",
        description: "Describe family members and friends in French.",
      },
    ],
    vocabulary: [
      {
        id: "fr-famille",
        term: "famille",
        translation: "family",
        pronunciationHint: "fa-mee",
        partOfSpeech: "noun",
      },
      {
        id: "fr-ami",
        term: "ami",
        translation: "friend",
        pronunciationHint: "ah-mee",
        partOfSpeech: "noun",
      },
      {
        id: "fr-soeur",
        term: "soeur",
        translation: "sister",
        pronunciationHint: "sur",
        partOfSpeech: "noun",
      },
    ],
    phrases: [
      {
        id: "fr-ph-family",
        phrase: "C'est ma soeur et voici mon ami.",
        translation: "This is my sister and here is my friend.",
      },
    ],
    activities: [
      {
        id: "fr-u2-l5-a1",
        type: "vocabulary",
        title: "Family words",
        order: 1,
        items: [
          {
            id: "fr-famille",
            term: "famille",
            translation: "family",
            pronunciationHint: "fa-mee",
          },
          {
            id: "fr-ami",
            term: "ami",
            translation: "friend",
            pronunciationHint: "ah-mee",
          },
          {
            id: "fr-soeur",
            term: "soeur",
            translation: "sister",
            pronunciationHint: "sur",
          },
        ],
      },
    ],
  },
  {
    id: "fr-unit-2-lesson-6",
    unitId: "fr-unit-2",
    languageCode: "fr",
    order: 6,
    title: "Review & Practice",
    description: "Review cafe words, directions, and family phrases in French.",
    difficulty: "beginner",
    xpReward: 25,
    estimatedMinutes: 7,
    goals: [
      {
        id: "fr-u2-l6-g1",
        description: "Review vocabulary and phrases from the cafe unit.",
      },
    ],
    vocabulary: [
      {
        id: "fr-revoir",
        term: "revoir",
        translation: "see again / review",
        pronunciationHint: "ruh-vwar",
        partOfSpeech: "verb",
      },
    ],
    phrases: [
      {
        id: "fr-ph-review",
        phrase: "Nous révisons les mots du café.",
        translation: "We are reviewing the café words.",
      },
    ],
    activities: [
      {
        id: "fr-u2-l6-a1",
        type: "review",
        title: "Lesson review",
        order: 1,
        vocabularyIds: ["fr-cafe", "fr-eau", "fr-merci", "fr-prix"],
        phraseIds: ["fr-ph-order-coffee", "fr-ph-water", "fr-ph-shopping"],
      },
    ],
  },
  {
    id: "ja-unit-3-lesson-1",
    unitId: "ja-unit-3",
    languageCode: "ja",
    order: 1,
    title: "Share Your Mood",
    description: "Say you are doing well or just okay.",
    difficulty: "beginner",
    xpReward: 22,
    estimatedMinutes: 6,
    goals: [
      {
        id: "fr-u3-l1-g1",
        description: "Answer simple mood questions naturally.",
      },
    ],
    vocabulary: [
      {
        id: "fr-comme-ci-comme-ca",
        term: "comme ci, comme ca",
        translation: "so-so",
        pronunciationHint: "kom see kom sah",
        partOfSpeech: "phrase",
      },
      {
        id: "fr-je-vais-bien",
        term: "je vais bien",
        translation: "I am doing well",
        pronunciationHint: "zhuh vay BYEHN",
        partOfSpeech: "phrase",
      },
    ],
    phrases: [
      {
        id: "fr-ph-mood",
        phrase: "Ca va ? Je vais bien.",
        translation: "How are you? I am doing well.",
      },
    ],
    activities: [
      {
        id: "fr-u3-l1-a1",
        type: "vocabulary",
        title: "Mood phrases",
        order: 1,
        items: [
          {
            id: "fr-comme-ci-comme-ca",
            term: "comme ci, comme ca",
            translation: "so-so",
            pronunciationHint: "kom see kom sah",
            partOfSpeech: "phrase",
          },
          {
            id: "fr-je-vais-bien",
            term: "je vais bien",
            translation: "I am doing well",
            pronunciationHint: "zhuh vay BYEHN",
            partOfSpeech: "phrase",
          },
        ],
      },
      {
        id: "fr-u3-l1-a2",
        type: "vision-teacher",
        title: "Small-talk practice",
        order: 2,
        estimatedMinutes: 4,
        prompt: {
          systemContext:
            "You are a gentle French teacher for beginners. Keep the exchange short, repeat key lines, and give quick pronunciation support in English.",
          openingScript:
            "Bonjour ! Today we will practice introductions and simple small talk in French.",
          teachingFocus: [
            "Say je m'appelle clearly",
            "Ask ca va with friendly intonation",
            "Reply with je vais bien or comme ci, comme ca",
          ],
          practiceScenarios: [
            "The learner meets someone for the first time.",
            "The learner answers how they are doing.",
          ],
          wrapUpScript:
            "Excellent work. You can now greet someone and keep a tiny French conversation going.",
        },
      },
    ],
  },
  {
    id: "ja-unit-1-lesson-2",
    unitId: "ja-unit-1",
    languageCode: "ja",
    order: 2,
    title: "Say Goodbye",
    description: "Learn sayonara and mata ne for simple goodbyes.",
    difficulty: "beginner",
    xpReward: 18,
    estimatedMinutes: 5,
    goals: [
      {
        id: "ja-u1-l2-g1",
        description: "Use a simple goodbye in everyday situations.",
      },
    ],
    vocabulary: [
      {
        id: "ja-sayonara",
        term: "さようなら",
        translation: "goodbye",
        pronunciationHint: "sah-yoh-nah-rah",
        partOfSpeech: "other",
      },
      {
        id: "ja-mata-ne",
        term: "またね",
        translation: "see you",
        pronunciationHint: "mah-tah neh",
        partOfSpeech: "phrase",
      },
    ],
    phrases: [
      { id: "ja-ph-goodbye", phrase: "またね！", translation: "See you!" },
    ],
    activities: [
      {
        id: "ja-u1-l2-a1",
        type: "vocabulary",
        title: "Goodbye words",
        order: 1,
        items: [
          {
            id: "ja-sayonara",
            term: "さようなら",
            translation: "goodbye",
            pronunciationHint: "sah-yoh-nah-rah",
          },
          {
            id: "ja-mata-ne",
            term: "またね",
            translation: "see you",
            pronunciationHint: "mah-tah neh",
            partOfSpeech: "phrase",
          },
        ],
      },
      {
        id: "ja-u1-l2-a2",
        type: "phrases",
        title: "Casual farewell",
        order: 2,
        items: [
          { id: "ja-ph-goodbye", phrase: "またね！", translation: "See you!" },
        ],
      },
    ],
  },
  {
    id: "ja-unit-1-lesson-3",
    unitId: "ja-unit-1",
    languageCode: "ja",
    order: 3,
    title: "Excuse Me",
    description: "Practice sumimasen for attention and polite apologies.",
    difficulty: "beginner",
    xpReward: 18,
    estimatedMinutes: 5,
    goals: [
      {
        id: "ja-u1-l3-g1",
        description: "Use sumimasen in a polite everyday moment.",
      },
    ],
    vocabulary: [
      {
        id: "ja-sumimasen",
        term: "すみません",
        translation: "excuse me / sorry",
        pronunciationHint: "soo-mee-mah-sen",
        partOfSpeech: "phrase",
      },
      {
        id: "ja-hai",
        term: "はい",
        translation: "yes",
        pronunciationHint: "hai",
        partOfSpeech: "other",
      },
    ],
    phrases: [
      {
        id: "ja-ph-excuse-me",
        phrase: "すみません！",
        translation: "Excuse me!",
      },
    ],
    activities: [
      {
        id: "ja-u1-l3-a1",
        type: "vocabulary",
        title: "Polite essentials",
        order: 1,
        items: [
          {
            id: "ja-sumimasen",
            term: "すみません",
            translation: "excuse me / sorry",
            pronunciationHint: "soo-mee-mah-sen",
            partOfSpeech: "phrase",
          },
          {
            id: "ja-hai",
            term: "はい",
            translation: "yes",
            pronunciationHint: "hai",
          },
        ],
      },
      {
        id: "ja-u1-l3-a2",
        type: "listening",
        title: "Hear the phrase",
        order: 2,
        vocabularyIds: ["ja-sumimasen", "ja-hai"],
        instructions: "Listen closely and choose the phrase you hear.",
      },
    ],
  },
  {
    id: "ja-unit-1-lesson-4",
    unitId: "ja-unit-1",
    languageCode: "ja",
    order: 4,
    title: "Say Goodbye",
    description: "Practice common Japanese farewell phrases.",
    difficulty: "beginner",
    xpReward: 20,
    estimatedMinutes: 6,
    goals: [
      {
        id: "ja-u1-l4-g1",
        description: "Use simple goodbye phrases politely.",
      },
    ],
    vocabulary: [
      {
        id: "ja-sayonara",
        term: "さようなら",
        translation: "goodbye",
        pronunciationHint: "sah-yoh-nah-rah",
        partOfSpeech: "other",
      },
      {
        id: "ja-mata-ne",
        term: "またね",
        translation: "see you",
        pronunciationHint: "mah-tah neh",
        partOfSpeech: "phrase",
      },
    ],
    phrases: [
      {
        id: "ja-ph-goodbye2",
        phrase: "さようなら！またね！",
        translation: "Goodbye! See you!",
      },
    ],
    activities: [
      {
        id: "ja-u1-l4-a1",
        type: "vocabulary",
        title: "Goodbye words",
        order: 1,
        items: [
          {
            id: "ja-sayonara",
            term: "さようなら",
            translation: "goodbye",
            pronunciationHint: "sah-yoh-nah-rah",
          },
          {
            id: "ja-mata-ne",
            term: "またね",
            translation: "see you",
            pronunciationHint: "mah-tah neh",
          },
        ],
      },
    ],
  },
  {
    id: "ja-unit-1-lesson-5",
    unitId: "ja-unit-1",
    languageCode: "ja",
    order: 5,
    title: "Please & Thank You",
    description: "Use kudasai and arigatou in polite Japanese conversations.",
    difficulty: "beginner",
    xpReward: 20,
    estimatedMinutes: 6,
    goals: [
      {
        id: "ja-u1-l5-g1",
        description: "Make polite requests and say thank you.",
      },
    ],
    vocabulary: [
      {
        id: "ja-kudasai",
        term: "ください",
        translation: "please",
        pronunciationHint: "koo-dah-sai",
        partOfSpeech: "phrase",
      },
      {
        id: "ja-arigatou",
        term: "ありがとうございます",
        translation: "thank you",
        pronunciationHint: "ah-ree-gah-toh",
        partOfSpeech: "other",
      },
    ],
    phrases: [
      {
        id: "ja-ph-please-thanks",
        phrase: "みず を ください。ありがとうございます。",
        translation: "Please give me water. Thank you.",
      },
    ],
    activities: [
      {
        id: "ja-u1-l5-a1",
        type: "vocabulary",
        title: "Polite words",
        order: 1,
        items: [
          {
            id: "ja-kudasai",
            term: "ください",
            translation: "please",
            pronunciationHint: "koo-dah-sai",
          },
          {
            id: "ja-arigatou",
            term: "ありがとうございます",
            translation: "thank you",
            pronunciationHint: "ah-ree-gah-toh",
          },
        ],
      },
    ],
  },
  {
    id: "ja-unit-1-lesson-6",
    unitId: "ja-unit-1",
    languageCode: "ja",
    order: 6,
    title: "Review & Practice",
    description: "Review greetings, goodbyes, and polite Japanese phrases.",
    difficulty: "beginner",
    xpReward: 20,
    estimatedMinutes: 6,
    goals: [
      {
        id: "ja-u1-l6-g1",
        description: "Review the most useful polite Japanese phrases.",
      },
    ],
    vocabulary: [
      {
        id: "ja-fukushuu",
        term: "ふくしゅう",
        translation: "review",
        pronunciationHint: "foo-koo-shoo",
        partOfSpeech: "noun",
      },
    ],
    phrases: [
      {
        id: "ja-ph-review1",
        phrase: "こんにちは、さようなら、ありがとうございます。",
        translation: "Hello, goodbye, thank you.",
      },
    ],
    activities: [
      {
        id: "ja-u1-l6-a1",
        type: "review",
        title: "Unit review",
        order: 1,
        vocabularyIds: [
          "ja-konnichiwa",
          "ja-ohayou",
          "ja-sumimasen",
          "ja-kudasai",
        ],
        phraseIds: ["ja-ph-thanks", "ja-ph-goodbye2", "ja-ph-please-thanks"],
      },
    ],
  },
  {
    id: "ja-unit-2-lesson-1",
    unitId: "ja-unit-2",
    languageCode: "ja",
    order: 1,
    title: "Say Your Name",
    description: "Introduce yourself with watashi wa and desu.",
    difficulty: "beginner",
    xpReward: 20,
    estimatedMinutes: 6,
    goals: [
      {
        id: "ja-u2-l1-g1",
        description: "Share your name politely in Japanese.",
      },
    ],
    vocabulary: [
      {
        id: "ja-watashi-wa",
        term: "わたしは",
        translation: "I am",
        pronunciationHint: "wah-tah-shee wah",
        partOfSpeech: "phrase",
      },
      {
        id: "ja-desu",
        term: "です",
        translation: "am / is",
        pronunciationHint: "dess",
        partOfSpeech: "other",
      },
    ],
    phrases: [
      {
        id: "ja-ph-name",
        phrase: "わたしは Ken です。",
        translation: "I am Ken.",
      },
    ],
    activities: [
      {
        id: "ja-u2-l1-a1",
        type: "vocabulary",
        title: "Name words",
        order: 1,
        items: [
          {
            id: "ja-watashi-wa",
            term: "わたしは",
            translation: "I am",
            pronunciationHint: "wah-tah-shee wah",
            partOfSpeech: "phrase",
          },
          {
            id: "ja-desu",
            term: "です",
            translation: "am / is",
            pronunciationHint: "dess",
          },
        ],
      },
      {
        id: "ja-u2-l1-a2",
        type: "speaking",
        title: "Say your name",
        order: 2,
        phraseIds: ["ja-ph-name"],
        instructions: "Replace Ken with your own name and repeat it slowly.",
      },
    ],
  },
  {
    id: "ja-unit-2-lesson-2",
    unitId: "ja-unit-2",
    languageCode: "ja",
    order: 2,
    title: "Nice to Meet You",
    description: "Use yoroshiku onegaishimasu in a friendly first meeting.",
    difficulty: "beginner",
    xpReward: 20,
    estimatedMinutes: 6,
    goals: [
      {
        id: "ja-u2-l2-g1",
        description: "Respond politely when meeting someone new.",
      },
    ],
    vocabulary: [
      {
        id: "ja-hajimemashite",
        term: "はじめまして",
        translation: "nice to meet you",
        pronunciationHint: "hah-jee-meh-mahsh-teh",
        partOfSpeech: "phrase",
      },
      {
        id: "ja-yoroshiku",
        term: "よろしく おねがいします",
        translation: "please treat me kindly",
        pronunciationHint: "yoh-roh-shee-koo oh-neh-gai-shee-mahs",
        partOfSpeech: "phrase",
      },
    ],
    phrases: [
      {
        id: "ja-ph-meet-you",
        phrase: "はじめまして。よろしく おねがいします。",
        translation: "Nice to meet you. Please treat me kindly.",
      },
    ],
    activities: [
      {
        id: "ja-u2-l2-a1",
        type: "vocabulary",
        title: "Meeting phrases",
        order: 1,
        items: [
          {
            id: "ja-hajimemashite",
            term: "はじめまして",
            translation: "nice to meet you",
            pronunciationHint: "hah-jee-meh-mahsh-teh",
            partOfSpeech: "phrase",
          },
          {
            id: "ja-yoroshiku",
            term: "よろしく おねがいします",
            translation: "please treat me kindly",
            pronunciationHint: "yoh-roh-shee-koo oh-neh-gai-shee-mahs",
            partOfSpeech: "phrase",
          },
        ],
      },
      {
        id: "ja-u2-l2-a2",
        type: "chat-tutor",
        title: "First meeting practice",
        order: 2,
        starterMessage: "はじめまして。じこしょうかいをしてみましょう。",
        suggestedTopics: [
          "your name",
          "greeting politely",
          "ending with yoroshiku",
        ],
      },
    ],
  },
  {
    id: "ja-unit-2-lesson-3",
    unitId: "ja-unit-2",
    languageCode: "ja",
    order: 3,
    title: "Travel & Directions",
    description:
      "Ask for directions and use simple travel phrases in Japanese.",
    difficulty: "beginner",
    xpReward: 25,
    estimatedMinutes: 7,
    goals: [
      {
        id: "ja-u2-l3-g1",
        description: "Ask where places are and follow directions in Japanese.",
      },
    ],
    vocabulary: [
      {
        id: "ja-migi",
        term: "みぎ",
        translation: "right",
        pronunciationHint: "mee-ghee",
        partOfSpeech: "noun",
      },
      {
        id: "ja-hidari",
        term: "ひだり",
        translation: "left",
        pronunciationHint: "hee-dah-ree",
        partOfSpeech: "noun",
      },
      {
        id: "ja-massugu",
        term: "まっすぐ",
        translation: "straight",
        pronunciationHint: "mah-ssu-goo",
        partOfSpeech: "other",
      },
    ],
    phrases: [
      {
        id: "ja-ph-directions",
        phrase: "まっすぐ行って、みぎに曲がってください。",
        translation: "Go straight and turn right, please.",
      },
    ],
    activities: [
      {
        id: "ja-u2-l3-a1",
        type: "vocabulary",
        title: "Travel words",
        order: 1,
        items: [
          {
            id: "ja-migi",
            term: "みぎ",
            translation: "right",
            pronunciationHint: "mee-ghee",
          },
          {
            id: "ja-hidari",
            term: "ひだり",
            translation: "left",
            pronunciationHint: "hee-dah-ree",
          },
          {
            id: "ja-massugu",
            term: "まっすぐ",
            translation: "straight",
            pronunciationHint: "mah-ssu-goo",
          },
        ],
      },
    ],
  },
  {
    id: "ja-unit-2-lesson-4",
    unitId: "ja-unit-2",
    languageCode: "ja",
    order: 4,
    title: "Shopping",
    description: "Use basic Japanese phrases for shopping and asking prices.",
    difficulty: "beginner",
    xpReward: 25,
    estimatedMinutes: 7,
    goals: [
      {
        id: "ja-u2-l4-g1",
        description: "Ask how much things cost and shop politely in Japanese.",
      },
    ],
    vocabulary: [
      {
        id: "ja-kaban",
        term: "かばん",
        translation: "bag",
        pronunciationHint: "kah-bahn",
        partOfSpeech: "noun",
      },
      {
        id: "ja-ikura",
        term: "いくら",
        translation: "how much",
        pronunciationHint: "ee-koo-rah",
        partOfSpeech: "phrase",
      },
      {
        id: "ja-okaikei",
        term: "おかいけい",
        translation: "check / bill",
        pronunciationHint: "oh-kah-ee-keh",
        partOfSpeech: "noun",
      },
    ],
    phrases: [
      {
        id: "ja-ph-shopping",
        phrase: "これはいくらですか？",
        translation: "How much is this?",
      },
    ],
    activities: [
      {
        id: "ja-u2-l4-a1",
        type: "vocabulary",
        title: "Shopping words",
        order: 1,
        items: [
          {
            id: "ja-kaban",
            term: "かばん",
            translation: "bag",
            pronunciationHint: "kah-bahn",
          },
          {
            id: "ja-ikura",
            term: "いくら",
            translation: "how much",
            pronunciationHint: "ee-koo-rah",
          },
          {
            id: "ja-okaikei",
            term: "おかいけい",
            translation: "check / bill",
            pronunciationHint: "oh-kah-ee-keh",
          },
        ],
      },
    ],
  },
  {
    id: "ja-unit-2-lesson-5",
    unitId: "ja-unit-2",
    languageCode: "ja",
    order: 5,
    title: "Family & Friends",
    description: "Talk about family and friends using simple Japanese words.",
    difficulty: "beginner",
    xpReward: 25,
    estimatedMinutes: 7,
    goals: [
      {
        id: "ja-u2-l5-g1",
        description:
          "Describe family relationships and talk about friends in Japanese.",
      },
    ],
    vocabulary: [
      {
        id: "ja-kazoku",
        term: "かぞく",
        translation: "family",
        pronunciationHint: "kah-zoh-koo",
        partOfSpeech: "noun",
      },
      {
        id: "ja-tomodachi",
        term: "ともだち",
        translation: "friend",
        pronunciationHint: "toh-moh-dah-chee",
        partOfSpeech: "noun",
      },
      {
        id: "ja-ane",
        term: "あね",
        translation: "older sister",
        pronunciationHint: "ah-neh",
        partOfSpeech: "noun",
      },
    ],
    phrases: [
      {
        id: "ja-ph-family",
        phrase: "これは私の友達です。あねもいます。",
        translation: "This is my friend. I also have an older sister.",
      },
    ],
    activities: [
      {
        id: "ja-u2-l5-a1",
        type: "vocabulary",
        title: "Family words",
        order: 1,
        items: [
          {
            id: "ja-kazoku",
            term: "かぞく",
            translation: "family",
            pronunciationHint: "kah-zoh-koo",
          },
          {
            id: "ja-tomodachi",
            term: "ともだち",
            translation: "friend",
            pronunciationHint: "toh-moh-dah-chee",
          },
          {
            id: "ja-ane",
            term: "あね",
            translation: "older sister",
            pronunciationHint: "ah-neh",
          },
        ],
      },
    ],
  },
  {
    id: "ja-unit-2-lesson-6",
    unitId: "ja-unit-2",
    languageCode: "ja",
    order: 6,
    title: "Review & Practice",
    description: "Review travel, shopping, and family phrases in Japanese.",
    difficulty: "beginner",
    xpReward: 25,
    estimatedMinutes: 7,
    goals: [
      {
        id: "ja-u2-l6-g1",
        description: "Review and practice basic phrases from the unit.",
      },
    ],
    vocabulary: [
      {
        id: "ja-fukushuu",
        term: "ふくしゅう",
        translation: "review",
        pronunciationHint: "foo-koo-shoo",
        partOfSpeech: "noun",
      },
    ],
    phrases: [
      {
        id: "ja-ph-review",
        phrase: "旅行と買い物の言葉を復習しましょう。",
        translation: "Let's review travel and shopping words.",
      },
    ],
    activities: [
      {
        id: "ja-u2-l6-a1",
        type: "review",
        title: "Lesson review",
        order: 1,
        vocabularyIds: ["ja-migi", "ja-hidari", "ja-ikura", "ja-kazoku"],
        phraseIds: ["ja-ph-directions", "ja-ph-shopping", "ja-ph-family"],
      },
    ],
  },
  {
    id: "ja-unit-3-lesson-1",
    unitId: "ja-unit-3",
    languageCode: "ja",
    order: 1,
    title: "Please and Thanks",
    description: "Pair kudasai with arigatou in a useful mini exchange.",
    difficulty: "beginner",
    xpReward: 22,
    estimatedMinutes: 6,
    goals: [
      {
        id: "ja-u3-l1-g1",
        description: "Make a simple polite request and say thank you.",
      },
    ],
    vocabulary: [
      {
        id: "ja-kudasai",
        term: "ください",
        translation: "please give me",
        pronunciationHint: "koo-dah-sai",
        partOfSpeech: "phrase",
      },
      {
        id: "ja-dozo",
        term: "どうぞ",
        translation: "here you go",
        pronunciationHint: "doh-zoh",
        partOfSpeech: "phrase",
      },
    ],
    phrases: [
      {
        id: "ja-ph-please",
        phrase: "みず を ください。",
        translation: "Water, please.",
      },
    ],
    activities: [
      {
        id: "ja-u3-l1-a1",
        type: "vocabulary",
        title: "Helpful request words",
        order: 1,
        items: [
          {
            id: "ja-kudasai",
            term: "ください",
            translation: "please give me",
            pronunciationHint: "koo-dah-sai",
            partOfSpeech: "phrase",
          },
          {
            id: "ja-dozo",
            term: "どうぞ",
            translation: "here you go",
            pronunciationHint: "doh-zoh",
            partOfSpeech: "phrase",
          },
        ],
      },
      {
        id: "ja-u3-l1-a2",
        type: "vision-teacher",
        title: "Polite request practice",
        order: 2,
        estimatedMinutes: 4,
        prompt: {
          systemContext:
            "You are a supportive Japanese teacher for beginners. Keep the script slow, clear, and encouraging, with gentle English explanations.",
          openingScript:
            "こんにちは! Today we will make a polite request and respond kindly in Japanese.",
          teachingFocus: [
            "Use kudasai after a simple noun",
            "Answer with dozo",
            "Close with arigatou",
          ],
          practiceScenarios: [
            "The learner asks for water.",
            "The learner thanks someone after receiving help.",
          ],
          wrapUpScript:
            "Great work. These are small phrases, but they are very useful every day.",
        },
      },
    ],
  },
  {
    id: "es-unit-1-lesson-3",
    unitId: "es-unit-1",
    languageCode: "es",
    order: 3,
    title: "Be Polite",
    description: "Practice por favor, gracias, and polite Spanish responses.",
    difficulty: "beginner",
    xpReward: 20,
    estimatedMinutes: 6,
    goals: [
      {
        id: "es-u1-l3-g1",
        description: "Use polite words in everyday Spanish.",
      },
    ],
    vocabulary: [
      {
        id: "es-por-favor",
        term: "por favor",
        translation: "please",
        pronunciationHint: "por fah-VOR",
        partOfSpeech: "phrase",
      },
      {
        id: "es-gracias",
        term: "gracias",
        translation: "thank you",
        pronunciationHint: "GRAH-see-ahs",
        partOfSpeech: "other",
      },
      {
        id: "es-de-nada",
        term: "de nada",
        translation: "you're welcome",
        pronunciationHint: "deh NAH-dah",
        partOfSpeech: "phrase",
      },
    ],
    phrases: [
      {
        id: "es-ph-politeness",
        phrase: "Por favor, gracias. De nada.",
        translation: "Please, thank you. You're welcome.",
      },
    ],
    activities: [
      {
        id: "es-u1-l3-a1",
        type: "vocabulary",
        title: "Polite phrases",
        order: 1,
        items: [
          {
            id: "es-por-favor",
            term: "por favor",
            translation: "please",
            pronunciationHint: "por fah-VOR",
          },
          {
            id: "es-gracias",
            term: "gracias",
            translation: "thank you",
            pronunciationHint: "GRAH-see-ahs",
          },
          {
            id: "es-de-nada",
            term: "de nada",
            translation: "you're welcome",
            pronunciationHint: "deh NAH-dah",
          },
        ],
      },
    ],
  },
  {
    id: "es-unit-1-lesson-4",
    unitId: "es-unit-1",
    languageCode: "es",
    order: 4,
    title: "Ask How Are You",
    description: "Practice asking how someone is and replying in Spanish.",
    difficulty: "beginner",
    xpReward: 20,
    estimatedMinutes: 6,
    goals: [
      {
        id: "es-u1-l4-g1",
        description: "Ask and answer how someone is feeling.",
      },
    ],
    vocabulary: [
      {
        id: "es-como-estas",
        term: "¿Cómo estás?",
        translation: "How are you?",
        pronunciationHint: "KOH-moh eh-STAHS",
        partOfSpeech: "phrase",
      },
      {
        id: "es-bien",
        term: "bien",
        translation: "good",
        pronunciationHint: "bee-EN",
        partOfSpeech: "adjective",
      },
      {
        id: "es-mas-o-menos",
        term: "más o menos",
        translation: "so-so",
        pronunciationHint: "MAHS oh MEN-ohs",
        partOfSpeech: "phrase",
      },
    ],
    phrases: [
      {
        id: "es-ph-feeling",
        phrase: "¿Cómo estás? Bien, gracias.",
        translation: "How are you? Good, thank you.",
      },
    ],
    activities: [
      {
        id: "es-u1-l4-a1",
        type: "vocabulary",
        title: "Feeling words",
        order: 1,
        items: [
          {
            id: "es-como-estas",
            term: "¿Cómo estás?",
            translation: "How are you?",
            pronunciationHint: "KOH-moh eh-STAHS",
          },
          {
            id: "es-bien",
            term: "bien",
            translation: "good",
            pronunciationHint: "bee-EN",
          },
          {
            id: "es-mas-o-menos",
            term: "más o menos",
            translation: "so-so",
            pronunciationHint: "MAHS oh MEN-ohs",
          },
        ],
      },
    ],
  },
  {
    id: "es-unit-1-lesson-5",
    unitId: "es-unit-1",
    languageCode: "es",
    order: 5,
    title: "Talk About Family",
    description: "Learn family words and how to talk about a relative.",
    difficulty: "beginner",
    xpReward: 20,
    estimatedMinutes: 6,
    goals: [
      {
        id: "es-u1-l5-g1",
        description: "Use family vocabulary in a sentence.",
      },
    ],
    vocabulary: [
      {
        id: "es-madre",
        term: "madre",
        translation: "mother",
        pronunciationHint: "MAH-dray",
        partOfSpeech: "noun",
      },
      {
        id: "es-padre",
        term: "padre",
        translation: "father",
        pronunciationHint: "PAH-dray",
        partOfSpeech: "noun",
      },
      {
        id: "es-amigo",
        term: "amigo",
        translation: "friend",
        pronunciationHint: "ah-MEE-go",
        partOfSpeech: "noun",
      },
    ],
    phrases: [
      {
        id: "es-ph-family",
        phrase: "Mi madre es amable y mi amigo es divertido.",
        translation: "My mother is kind and my friend is fun.",
      },
    ],
    activities: [
      {
        id: "es-u1-l5-a1",
        type: "vocabulary",
        title: "Family words",
        order: 1,
        items: [
          {
            id: "es-madre",
            term: "madre",
            translation: "mother",
            pronunciationHint: "MAH-dray",
          },
          {
            id: "es-padre",
            term: "padre",
            translation: "father",
            pronunciationHint: "PAH-dray",
          },
          {
            id: "es-amigo",
            term: "amigo",
            translation: "friend",
            pronunciationHint: "ah-MEE-go",
          },
        ],
      },
    ],
  },
  {
    id: "es-unit-1-lesson-6",
    unitId: "es-unit-1",
    languageCode: "es",
    order: 6,
    title: "Review & Practice",
    description:
      "Review greetings, polite phrases, and family words in Spanish.",
    difficulty: "beginner",
    xpReward: 20,
    estimatedMinutes: 7,
    goals: [
      {
        id: "es-u1-l6-g1",
        description: "Review key beginner Spanish vocabulary.",
      },
    ],
    vocabulary: [
      {
        id: "es-repaso",
        term: "repaso",
        translation: "review",
        pronunciationHint: "reh-PAH-so",
        partOfSpeech: "noun",
      },
    ],
    phrases: [
      {
        id: "es-ph-review",
        phrase: "Repasemos hola, por favor, gracias y familia.",
        translation: "Let's review hello, please, thank you, and family.",
      },
    ],
    activities: [
      {
        id: "es-u1-l6-a1",
        type: "review",
        title: "Unit review",
        order: 1,
        vocabularyIds: ["es-hola", "es-por-favor", "es-madre", "es-amigo"],
        phraseIds: ["es-ph-politeness", "es-ph-family"],
      },
    ],
  },
  {
    id: "es-unit-2-lesson-2",
    unitId: "es-unit-2",
    languageCode: "es",
    order: 2,
    title: "Ask Their Name",
    description: "Use ¿Cómo te llamas? and answer with your own name.",
    difficulty: "beginner",
    xpReward: 20,
    estimatedMinutes: 6,
    goals: [
      { id: "es-u2-l2-g1", description: "Ask someone for their name clearly." },
    ],
    vocabulary: [
      {
        id: "es-como-te-llamas",
        term: "¿Cómo te llamas?",
        translation: "What's your name?",
        pronunciationHint: "KOH-moh tay YAH-mahs",
        partOfSpeech: "phrase",
      },
      {
        id: "es-tu-nombre",
        term: "tu nombre",
        translation: "your name",
        pronunciationHint: "too NOHM-bray",
        partOfSpeech: "phrase",
      },
    ],
    phrases: [
      {
        id: "es-ph-ask-name",
        phrase: "¿Cómo te llamas? Me llamo Carlos.",
        translation: "What's your name? My name is Carlos.",
      },
    ],
    activities: [
      {
        id: "es-u2-l2-a1",
        type: "vocabulary",
        title: "Name questions",
        order: 1,
        items: [
          {
            id: "es-como-te-llamas",
            term: "¿Cómo te llamas?",
            translation: "What's your name?",
            pronunciationHint: "KOH-moh tay YAH-mahs",
          },
          {
            id: "es-tu-nombre",
            term: "tu nombre",
            translation: "your name",
            pronunciationHint: "too NOHM-bray",
          },
        ],
      },
    ],
  },
  {
    id: "es-unit-2-lesson-3",
    unitId: "es-unit-2",
    languageCode: "es",
    order: 3,
    title: "Ask How Are You",
    description: "Practice ¿Cómo estás? and short responses in Spanish.",
    difficulty: "beginner",
    xpReward: 20,
    estimatedMinutes: 6,
    goals: [
      {
        id: "es-u2-l3-g1",
        description: "Ask how someone is and answer naturally.",
      },
    ],
    vocabulary: [
      {
        id: "es-como-estas-2",
        term: "¿Cómo estás?",
        translation: "How are you?",
        pronunciationHint: "KOH-moh eh-STAHS",
        partOfSpeech: "phrase",
      },
      {
        id: "es-estoy-bien",
        term: "Estoy bien",
        translation: "I'm fine",
        pronunciationHint: "eh-STOY bee-EN",
        partOfSpeech: "phrase",
      },
      {
        id: "es-mas-o-menos-2",
        term: "Más o menos",
        translation: "So-so",
        pronunciationHint: "MAHS oh MEN-ohs",
        partOfSpeech: "phrase",
      },
    ],
    phrases: [
      {
        id: "es-ph-howareyou",
        phrase: "¿Cómo estás? Estoy bien, gracias.",
        translation: "How are you? I'm fine, thank you.",
      },
    ],
    activities: [
      {
        id: "es-u2-l3-a1",
        type: "vocabulary",
        title: "Responses",
        order: 1,
        items: [
          {
            id: "es-como-estas-2",
            term: "¿Cómo estás?",
            translation: "How are you?",
            pronunciationHint: "KOH-moh eh-STAHS",
          },
          {
            id: "es-estoy-bien",
            term: "Estoy bien",
            translation: "I'm fine",
            pronunciationHint: "eh-STOY bee-EN",
          },
          {
            id: "es-mas-o-menos-2",
            term: "Más o menos",
            translation: "So-so",
            pronunciationHint: "MAHS oh MEN-ohs",
          },
        ],
      },
    ],
  },
  {
    id: "es-unit-2-lesson-4",
    unitId: "es-unit-2",
    languageCode: "es",
    order: 4,
    title: "Where Are You From?",
    description: "Use ¿De dónde eres? and simple country answers.",
    difficulty: "beginner",
    xpReward: 20,
    estimatedMinutes: 6,
    goals: [
      {
        id: "es-u2-l4-g1",
        description: "Ask where someone is from and answer.",
      },
    ],
    vocabulary: [
      {
        id: "es-de-donde-eres",
        term: "¿De dónde eres?",
        translation: "Where are you from?",
        pronunciationHint: "deh DON-deh EH-res",
        partOfSpeech: "phrase",
      },
      {
        id: "es-soy-de",
        term: "Soy de...",
        translation: "I'm from...",
        pronunciationHint: "soy deh",
        partOfSpeech: "phrase",
      },
    ],
    phrases: [
      {
        id: "es-ph-origin",
        phrase: "¿De dónde eres? Soy de México.",
        translation: "Where are you from? I'm from Mexico.",
      },
    ],
    activities: [
      {
        id: "es-u2-l4-a1",
        type: "vocabulary",
        title: "Origin phrases",
        order: 1,
        items: [
          {
            id: "es-de-donde-eres",
            term: "¿De dónde eres?",
            translation: "Where are you from?",
            pronunciationHint: "deh DON-deh EH-res",
          },
          {
            id: "es-soy-de",
            term: "Soy de...",
            translation: "I'm from...",
            pronunciationHint: "soy deh",
          },
        ],
      },
    ],
  },
  {
    id: "es-unit-2-lesson-5",
    unitId: "es-unit-2",
    languageCode: "es",
    order: 5,
    title: "Ask What They Do",
    description: "Learn simple work and hobby phrases in Spanish.",
    difficulty: "beginner",
    xpReward: 20,
    estimatedMinutes: 6,
    goals: [
      {
        id: "es-u2-l5-g1",
        description: "Ask and talk about simple activities.",
      },
    ],
    vocabulary: [
      {
        id: "es-que-haces",
        term: "¿Qué haces?",
        translation: "What are you doing?",
        pronunciationHint: "keh AH-sehs",
        partOfSpeech: "phrase",
      },
      {
        id: "es-trabajo",
        term: "trabajo",
        translation: "work",
        pronunciationHint: "trah-BAH-ho",
        partOfSpeech: "noun",
      },
    ],
    phrases: [
      {
        id: "es-ph-activities",
        phrase: "¿Qué haces? Trabajo y estudio español.",
        translation: "What are you doing? I work and study Spanish.",
      },
    ],
    activities: [
      {
        id: "es-u2-l5-a1",
        type: "vocabulary",
        title: "Activity words",
        order: 1,
        items: [
          {
            id: "es-que-haces",
            term: "¿Qué haces?",
            translation: "What are you doing?",
            pronunciationHint: "keh AH-sehs",
          },
          {
            id: "es-trabajo",
            term: "trabajo",
            translation: "work",
            pronunciationHint: "trah-BAH-ho",
          },
        ],
      },
    ],
  },
  {
    id: "es-unit-2-lesson-6",
    unitId: "es-unit-2",
    languageCode: "es",
    order: 6,
    title: "Review & Practice",
    description: "Review introductions and questions from this unit.",
    difficulty: "beginner",
    xpReward: 20,
    estimatedMinutes: 7,
    goals: [
      {
        id: "es-u2-l6-g1",
        description: "Review key questions and responses in Spanish.",
      },
    ],
    vocabulary: [
      {
        id: "es-revision",
        term: "revisión",
        translation: "review",
        pronunciationHint: "reh-bee-SYON",
        partOfSpeech: "noun",
      },
    ],
    phrases: [
      {
        id: "es-ph-review-2",
        phrase: "Practico mi nombre, cómo estás, y de dónde eres.",
        translation: "I practice my name, how are you, and where you are from.",
      },
    ],
    activities: [
      {
        id: "es-u2-l6-a1",
        type: "review",
        title: "Unit review",
        order: 1,
        vocabularyIds: [
          "es-me-llamo",
          "es-como-te-llamas",
          "es-de-donde-eres",
          "es-que-haces",
        ],
        phraseIds: ["es-ph-ask-name", "es-ph-howareyou", "es-ph-origin"],
      },
    ],
  },
  // Spanish Unit 3: At the Café
  {
    id: "es-unit-3-lesson-1",
    unitId: "es-unit-3",
    languageCode: "es",
    order: 1,
    title: "Greetings & Introductions",
    description:
      "Learn essential Spanish greetings and how to introduce yourself.",
    difficulty: "beginner",
    xpReward: 20,
    estimatedMinutes: 6,
    goals: [
      {
        id: "es-u3-l1-g1",
        description: "Greet someone in Spanish and introduce yourself.",
      },
      {
        id: "es-u3-l1-g2",
        description: "Understand basic greeting responses.",
      },
    ],
    vocabulary: [
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
        id: "es-mucho-gusto",
        term: "mucho gusto",
        translation: "nice to meet you",
        pronunciationHint: "MOO-choh GOOS-toh",
        partOfSpeech: "phrase",
      },
      {
        id: "es-me-llamo",
        term: "me llamo",
        translation: "my name is",
        pronunciationHint: "meh YAH-mo",
        partOfSpeech: "phrase",
      },
    ],
    phrases: [
      {
        id: "es-ph-greeting",
        phrase: "¡Hola! Me llamo Ana. Mucho gusto.",
        translation: "Hello! My name is Ana. Nice to meet you.",
      },
    ],
    activities: [
      {
        id: "es-u3-l1-a1",
        type: "vocabulary",
        title: "Greeting words",
        order: 1,
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
            id: "es-mucho-gusto",
            term: "mucho gusto",
            translation: "nice to meet you",
            pronunciationHint: "MOO-choh GOOS-toh",
            partOfSpeech: "phrase",
          },
        ],
      },
      {
        id: "es-u3-l1-a2",
        type: "speaking",
        title: "Introduce yourself",
        order: 2,
        phraseIds: ["es-ph-greeting"],
        instructions: "Say the greeting and replace Ana with your own name.",
      },
    ],
  },
  {
    id: "es-unit-3-lesson-2",
    unitId: "es-unit-3",
    languageCode: "es",
    order: 2,
    title: "Daily Life",
    description:
      "Learn vocabulary for everyday activities and routines in Spanish.",
    difficulty: "beginner",
    xpReward: 20,
    estimatedMinutes: 6,
    goals: [
      {
        id: "es-u3-l2-g1",
        description: "Understand common daily activity words.",
      },
      {
        id: "es-u3-l2-g2",
        description: "Use simple phrases about what you do daily.",
      },
    ],
    vocabulary: [
      {
        id: "es-mañana",
        term: "mañana",
        translation: "morning / tomorrow",
        pronunciationHint: "mah-YAH-nah",
        partOfSpeech: "noun",
      },
      {
        id: "es-tarde",
        term: "tarde",
        translation: "afternoon",
        pronunciationHint: "TAR-deh",
        partOfSpeech: "noun",
      },
      {
        id: "es-noche",
        term: "noche",
        translation: "night",
        pronunciationHint: "NOH-cheh",
        partOfSpeech: "noun",
      },
      {
        id: "es-dormir",
        term: "dormir",
        translation: "to sleep",
        pronunciationHint: "dor-MEER",
        partOfSpeech: "verb",
      },
    ],
    phrases: [
      {
        id: "es-ph-daily",
        phrase: "Por la mañana, duermo. Por la noche, duermo también.",
        translation: "In the morning, I sleep. At night, I sleep too.",
      },
    ],
    activities: [
      {
        id: "es-u3-l2-a1",
        type: "vocabulary",
        title: "Daily activities",
        order: 1,
        items: [
          {
            id: "es-mañana",
            term: "mañana",
            translation: "morning / tomorrow",
            pronunciationHint: "mah-YAH-nah",
            partOfSpeech: "noun",
          },
          {
            id: "es-tarde",
            term: "tarde",
            translation: "afternoon",
            pronunciationHint: "TAR-deh",
            partOfSpeech: "noun",
          },
          {
            id: "es-noche",
            term: "noche",
            translation: "night",
            pronunciationHint: "NOH-cheh",
            partOfSpeech: "noun",
          },
        ],
      },
      {
        id: "es-u3-l2-a2",
        type: "chat-tutor",
        title: "Talk about your day",
        order: 2,
        starterMessage: "¿Qué haces por la mañana? Responde en español.",
        suggestedTopics: [
          "morning routine",
          "afternoon activities",
          "evening plans",
        ],
      },
    ],
  },
  {
    id: "es-unit-3-lesson-3",
    unitId: "es-unit-3",
    languageCode: "es",
    order: 3,
    title: "At the Café",
    description:
      "Order drinks, say please and thank you, and ask for the bill in a Spanish café.",
    difficulty: "beginner",
    xpReward: 25,
    estimatedMinutes: 7,
    goals: [
      { id: "es-u3-l3-g1", description: "Order a drink politely at a café." },
      { id: "es-u3-l3-g2", description: "Ask for the bill in Spanish." },
      {
        id: "es-u3-l3-g3",
        description: "Use por favor and gracias naturally.",
      },
    ],
    vocabulary: [
      {
        id: "es-cafe",
        term: "un café",
        translation: "a coffee",
        pronunciationHint: "oon kah-FEH",
        partOfSpeech: "noun",
      },
      {
        id: "es-agua",
        term: "agua",
        translation: "water",
        pronunciationHint: "AH-gwah",
        partOfSpeech: "noun",
      },
      {
        id: "es-por-favor",
        term: "por favor",
        translation: "please",
        pronunciationHint: "por fah-VOR",
        partOfSpeech: "phrase",
      },
      {
        id: "es-la-cuenta",
        term: "la cuenta",
        translation: "the bill",
        pronunciationHint: "lah KWEN-tah",
        partOfSpeech: "noun",
      },
      {
        id: "es-gracias",
        term: "gracias",
        translation: "thank you",
        pronunciationHint: "GRAH-see-ahs",
        partOfSpeech: "other",
      },
    ],
    phrases: [
      {
        id: "es-ph-order",
        phrase: "Un café, por favor.",
        translation: "A coffee, please.",
      },
      {
        id: "es-ph-bill",
        phrase: "La cuenta, por favor.",
        translation: "The bill, please.",
      },
      { id: "es-ph-thanks", phrase: "¡Gracias!", translation: "Thank you!" },
    ],
    activities: [
      {
        id: "es-u3-l3-a1",
        type: "vocabulary",
        title: "Café vocabulary",
        order: 1,
        items: [
          {
            id: "es-cafe",
            term: "un café",
            translation: "a coffee",
            pronunciationHint: "oon kah-FEH",
          },
          {
            id: "es-agua",
            term: "agua",
            translation: "water",
            pronunciationHint: "AH-gwah",
          },
          {
            id: "es-por-favor",
            term: "por favor",
            translation: "please",
            pronunciationHint: "por fah-VOR",
            partOfSpeech: "phrase",
          },
          {
            id: "es-gracias",
            term: "gracias",
            translation: "thank you",
            pronunciationHint: "GRAH-see-ahs",
          },
        ],
      },
      {
        id: "es-u3-l3-a2",
        type: "vision-teacher",
        title: "Practice at the café",
        order: 2,
        estimatedMinutes: 5,
        prompt: {
          systemContext:
            "You are a friendly Spanish teacher for beginners. Speak clearly, use simple Spanish, and help the learner order at a café with confidence.",
          openingScript:
            "¡Bienvenido! Today we will practice ordering at a Spanish café. It's fun and easy!",
          teachingFocus: [
            "Use un café or agua with por favor",
            "Say gracias to thank the server",
            "Ask for la cuenta at the end",
          ],
          practiceScenarios: [
            "The learner enters a café and orders a coffee.",
            "The learner asks for the bill before leaving.",
          ],
          wrapUpScript:
            "¡Excelente! You can now order and pay at a café in Spanish. Practice this every day!",
        },
      },
    ],
  },
  {
    id: "es-unit-3-lesson-4",
    unitId: "es-unit-3",
    languageCode: "es",
    order: 4,
    title: "Travel & Directions",
    description: "Learn directional phrases and ask for directions in Spanish.",
    difficulty: "beginner",
    xpReward: 25,
    estimatedMinutes: 7,
    goals: [
      { id: "es-u3-l4-g1", description: "Ask for directions politely." },
      {
        id: "es-u3-l4-g2",
        description: "Understand basic directional vocabulary.",
      },
    ],
    vocabulary: [
      {
        id: "es-derecha",
        term: "derecha",
        translation: "right",
        pronunciationHint: "deh-REH-chah",
        partOfSpeech: "noun",
      },
      {
        id: "es-izquierda",
        term: "izquierda",
        translation: "left",
        pronunciationHint: "ees-KYEHR-dah",
        partOfSpeech: "noun",
      },
      {
        id: "es-cerca",
        term: "cerca",
        translation: "close / near",
        pronunciationHint: "SER-kah",
        partOfSpeech: "adjective",
      },
    ],
    phrases: [
      {
        id: "es-ph-directions",
        phrase: "¿Dónde está la estación? Está a la derecha.",
        translation: "Where is the station? It is to the right.",
      },
    ],
    activities: [
      {
        id: "es-u3-l4-a1",
        type: "vocabulary",
        title: "Directional words",
        order: 1,
        items: [
          {
            id: "es-derecha",
            term: "derecha",
            translation: "right",
            pronunciationHint: "deh-REH-chah",
          },
          {
            id: "es-izquierda",
            term: "izquierda",
            translation: "left",
            pronunciationHint: "ees-KYEHR-dah",
          },
        ],
      },
    ],
  },
  {
    id: "es-unit-3-lesson-5",
    unitId: "es-unit-3",
    languageCode: "es",
    order: 5,
    title: "Shopping",
    description:
      "Learn shopping vocabulary and practice buying items in a store.",
    difficulty: "beginner",
    xpReward: 25,
    estimatedMinutes: 7,
    goals: [
      { id: "es-u3-l5-g1", description: "Ask for items at a shop." },
      { id: "es-u3-l5-g2", description: "Understand prices and quantities." },
    ],
    vocabulary: [
      {
        id: "es-tienda",
        term: "tienda",
        translation: "shop / store",
        pronunciationHint: "tee-EN-dah",
        partOfSpeech: "noun",
      },
      {
        id: "es-precio",
        term: "precio",
        translation: "price",
        pronunciationHint: "PREH-see-oh",
        partOfSpeech: "noun",
      },
      {
        id: "es-cuanto",
        term: "¿cuánto?",
        translation: "how much?",
        pronunciationHint: "KWAHN-toh",
        partOfSpeech: "phrase",
      },
    ],
    phrases: [
      {
        id: "es-ph-shopping",
        phrase: "¿Cuánto cuesta? Cuesta diez euros.",
        translation: "How much does it cost? It costs ten euros.",
      },
    ],
    activities: [
      {
        id: "es-u3-l5-a1",
        type: "vocabulary",
        title: "Shopping words",
        order: 1,
        items: [
          {
            id: "es-tienda",
            term: "tienda",
            translation: "shop / store",
            pronunciationHint: "tee-EN-dah",
          },
          {
            id: "es-precio",
            term: "precio",
            translation: "price",
            pronunciationHint: "PREH-see-oh",
          },
        ],
      },
    ],
  },
  {
    id: "es-unit-3-lesson-6",
    unitId: "es-unit-3",
    languageCode: "es",
    order: 6,
    title: "Family & Friends",
    description: "Talk about your family and friends in Spanish.",
    difficulty: "beginner",
    xpReward: 25,
    estimatedMinutes: 7,
    goals: [
      { id: "es-u3-l6-g1", description: "Describe family members." },
      { id: "es-u3-l6-g2", description: "Talk about your friends." },
    ],
    vocabulary: [
      {
        id: "es-familia",
        term: "familia",
        translation: "family",
        pronunciationHint: "fah-MEE-lee-ah",
        partOfSpeech: "noun",
      },
      {
        id: "es-hermano",
        term: "hermano",
        translation: "brother",
        pronunciationHint: "er-MAH-noh",
        partOfSpeech: "noun",
      },
      {
        id: "es-hermana",
        term: "hermana",
        translation: "sister",
        pronunciationHint: "er-MAH-nah",
        partOfSpeech: "noun",
      },
      {
        id: "es-amigo",
        term: "amigo",
        translation: "friend (masculine)",
        pronunciationHint: "ah-MEE-go",
        partOfSpeech: "noun",
      },
    ],
    phrases: [
      {
        id: "es-ph-family",
        phrase:
          "Tengo un hermano y una hermana. Mis amigos son muy simpáticos.",
        translation: "I have a brother and a sister. My friends are very nice.",
      },
    ],
    activities: [
      {
        id: "es-u3-l6-a1",
        type: "vocabulary",
        title: "Family words",
        order: 1,
        items: [
          {
            id: "es-familia",
            term: "familia",
            translation: "family",
            pronunciationHint: "fah-MEE-lee-ah",
          },
          {
            id: "es-hermano",
            term: "hermano",
            translation: "brother",
            pronunciationHint: "er-MAH-noh",
          },
          {
            id: "es-hermana",
            term: "hermana",
            translation: "sister",
            pronunciationHint: "er-MAH-nah",
          },
        ],
      },
    ],
  },
];
