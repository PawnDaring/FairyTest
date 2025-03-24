export interface Alignment {
  archetype: string;
  alignmentType: string;
  disposition: 'Dark' | 'Neutral' | 'Light';
  coreType: 'Mermaid' | 'Fairy' | 'Hybrid';
  score: number;
  signatureTrait: string;
  weakness: string;
}

export const alignments: Alignment[] = [
  {
    archetype: 'Siren',
    alignmentType: 'Abyss Siren',
    disposition: 'Dark',
    coreType: 'Mermaid',
    score: 0,
    signatureTrait: 'Voice of control 🎶',
    weakness: 'Mirrors 🪞'
  },
  {
    archetype: 'Undine',
    alignmentType: 'Dreamwalker',
    disposition: 'Neutral',
    coreType: 'Mermaid',
    score: 2,
    signatureTrait: 'Emotional aura 🌫',
    weakness: 'Land-based air drains energy'
  },
  {
    archetype: 'Selkie',
    alignmentType: 'Skinshifter',
    disposition: 'Light',
    coreType: 'Mermaid',
    score: 3,
    signatureTrait: 'Love-binding transformation 🫧',
    weakness: 'Loss of true self (skin)'
  },
  {
    archetype: 'Fae-Siren',
    alignmentType: 'Shadowglamour',
    disposition: 'Dark',
    coreType: 'Hybrid',
    score: 5,
    signatureTrait: 'Illusion + Song 💫',
    weakness: 'Sunlight burns glamour'
  },
  {
    archetype: 'Nymph',
    alignmentType: 'Verdant Flirt',
    disposition: 'Neutral',
    coreType: 'Hybrid',
    score: 5,
    signatureTrait: 'Seduction + Camouflage 🍃',
    weakness: 'Must stay near nature source'
  },
  {
    archetype: 'Dryad-Nereid',
    alignmentType: 'Healing Guardian',
    disposition: 'Light',
    coreType: 'Hybrid',
    score: 4,
    signatureTrait: 'Healing waters 🌿💧',
    weakness: 'Distracted by beauty'
  },
  {
    archetype: 'Banshee',
    alignmentType: 'Oracle Wailer',
    disposition: 'Dark',
    coreType: 'Fairy',
    score: 8,
    signatureTrait: 'Prophetic scream 🕯',
    weakness: 'Bound to endings'
  },
  {
    archetype: 'Pixie',
    alignmentType: 'Trickdust Imp',
    disposition: 'Neutral',
    coreType: 'Fairy',
    score: 9,
    signatureTrait: 'Pranks + Confusion 🌀',
    weakness: 'Sugar addiction 🍭'
  },
  {
    archetype: 'Sprite',
    alignmentType: 'Light Whisper',
    disposition: 'Light',
    coreType: 'Fairy',
    score: 10,
    signatureTrait: 'Light projection + flight ✨',
    weakness: 'Over-curious, naive'
  }
];