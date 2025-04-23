interface SegmentData {
  segment: string;
  index: number;
  input: string;
}

declare namespace Intl {
  class Segmenter {
    constructor(locale: string, options?: { granularity: 'grapheme' | 'word' | 'sentence' });
    segment(input: string): Iterable<SegmentData>;
  }
} 