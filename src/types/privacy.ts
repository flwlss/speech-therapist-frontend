export type PolicyItem = {
  number: string;
  /** Обычный абзац пункта */
  text?: string;
  /** Определение: «Термин — определение» */
  term?: string;
  definition?: string;
  /** Вводная фраза перед списком */
  lead?: string;
  list?: string[];
};

export type PolicySection = {
  id: string;
  number: string;
  title: string;
  intro?: string;
  items?: PolicyItem[];
  /** Строки «название — значение» (раздел 6) */
  rows?: { label: string; value: string }[];
};
