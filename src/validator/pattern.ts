export interface Pattern {
  regexp: RegExp;
  formatter(matches: string[]): string;
}
