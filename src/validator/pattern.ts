export interface Pattern {
  fallback?: true;
  regexp: RegExp;
  formatter(matches: string[]): string;
  normalizer?(licensePlateNumber: string): string;
}
