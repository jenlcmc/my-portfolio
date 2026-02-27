export interface Encounter {
  quote: string;
  game: string;
  character?: string;
  action?: string;
  effect?: 'glitch' | 'flash' | 'shake';
}

export const encounters: Encounter[] = [
  /* ── Cyberpunk 2077 ── */
  {
    quote: 'Wake up, Samurai. We have a portfolio to browse.',
    game: 'Cyberpunk 2077',
    character: 'Johnny Silverhand',
    effect: 'glitch',
  },
  {
    quote: "The city's always got a promise for you. Keep scrolling.",
    game: 'Cyberpunk 2077',
    character: 'V',
  },
  { quote: 'In Night City, you can become anyone. Even a developer.', game: 'Cyberpunk 2077' },

  /* ── The Witcher 3 ── */
  { quote: "Wind's howling.", game: 'The Witcher 3', character: 'Geralt', action: 'Hmm.' },
  {
    quote: 'How about a round of code review?',
    game: 'The Witcher 3',
    character: 'Geralt',
    action: '*nods silently*',
  },
  { quote: 'Place of Power... gotta be.', game: 'The Witcher 3', character: 'Geralt' },
  {
    quote: "Damn, you're ugly. (talking to legacy code)",
    game: 'The Witcher 3',
    character: 'Geralt',
  },
  {
    quote: 'Evil is evil. Lesser, greater, middling... but bugs are just bugs.',
    game: 'The Witcher 3',
    character: 'Geralt',
  },

  /* ── Red Dead Redemption 2 ── */
  {
    quote: 'I have a plan. I just need more commits.',
    game: 'Red Dead Redemption 2',
    character: 'Dutch',
    action: 'Have faith',
  },
  {
    quote: 'You sir, are a developer of focus and commitment.',
    game: 'Red Dead Redemption 2',
    character: 'Arthur Morgan',
  },
  {
    quote: 'We just need more time... and coffee.',
    game: 'Red Dead Redemption 2',
    character: 'Dutch',
  },
  { quote: 'I gave you all I had.', game: 'Red Dead Redemption 2', character: 'Arthur Morgan' },

  /* ── GTA ── */
  {
    quote: 'Ah, here we go again. Another refactor.',
    game: 'GTA: San Andreas',
    character: 'CJ',
    effect: 'shake',
  },
  {
    quote: 'All you had to do was follow the damn commit message, CJ!',
    game: 'GTA: San Andreas',
    character: 'Big Smoke',
  },

  /* ── Baldur's Gate 3 ── */
  {
    quote: 'Roll for Perception... You notice a well-crafted portfolio.',
    game: "Baldur's Gate 3",
    action: 'Roll d20',
  },
  { quote: 'You must gather your party before venturing forth.', game: "Baldur's Gate 3" },
  {
    quote: 'A natural 20! Critical success on the code review.',
    game: "Baldur's Gate 3",
    effect: 'flash',
  },
  { quote: 'The Absolute demands cleaner code. Perhaps a refactor?', game: "Baldur's Gate 3" },

  /* ── Marvel's Spider-Man ── */
  {
    quote: "My Spider-Sense is tingling... someone's viewing the source code.",
    game: "Marvel's Spider-Man",
    character: 'Peter Parker',
  },
  {
    quote: 'With great power comes great responsibility to write clean code.',
    game: "Marvel's Spider-Man",
  },
  {
    quote: 'Anyone can wear the mask. Anyone can be a developer.',
    game: 'Spider-Man: Miles Morales',
  },

  /* ── Marvel Rivals ── */
  { quote: 'New challenger approaching the repository.', game: 'Marvel Rivals' },
  {
    quote: 'Team assembled. Beginning code deployment.',
    game: 'Marvel Rivals',
    action: 'Assemble!',
  },

  /* ── Helldivers 2 ── */
  {
    quote: 'For Super Earth! And clean code!',
    game: 'Helldivers 2',
    action: 'Salute 🫡',
    effect: 'shake',
  },
  { quote: 'Spreading managed democracy... one commit at a time.', game: 'Helldivers 2' },
  { quote: 'How about a nice cup of Liber-tea?', game: 'Helldivers 2', action: 'Sip ☕' },
  { quote: 'STRATAGEM ACTIVATED: git push --force', game: 'Helldivers 2', effect: 'glitch' },
];

/* ── Alert banner messages ── */
export const alerts: string[] = [
  'INCOMING: New quest available — browse the projects section',
  'ALERT: Threat level PEACEFUL — all systems nominal',
  'BREAKING: V has jacked into the portfolio mainframe',
  'MARKET UPDATE: Developer productivity up 200% after coffee',
  'ALERT: Steel Path enabled — increased scroll difficulty',
  'INCOMING TRANSMISSION: "How do you like that silver?" — Geralt',
  'SYSTEM: Achievement progress updated — check your trophy case',
  'FLASH: Orbital scan complete — no bugs detected in sector',
  'DISPATCH: Helldiver division reports clean build on Super Earth',
  'INTEL: Night City sources confirm portfolio is preem',
  'BROADCAST: Dutch has a new plan — just one more commit',
  'ALERT: Random encounter probability increasing...',
  'SYSTEM: Warp drive capacitor at 100% — ready for navigation',
  'MARKET: REACT index up 4.2% — components rendering smoothly',
  'FLASH: Spider-Sense detected — visitor approaching',
];
