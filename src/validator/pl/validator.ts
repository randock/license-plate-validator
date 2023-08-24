import { ValidatorInterface } from '../validator.interface';
import { AbstractValidator } from '../abstract.validator';
import { Pattern } from '../pattern';

const patterns = [
  /** TWO LETTER powiat codes */
  {
    regexp: /^([A-PR-Z]{2})([0-9][ACE-HJ-NPR-Y0-9]{2,5})$/,
    formatter(matches): string {
      return matches[1] + ' ' + matches[2];
    },
  },
  /** THREE LETTER powiat codes */
  {
    regexp: /^([A-PR-Z]{3})([ACE-HJ-NPR-Y0-9]{2,5})$/,
    formatter(matches): string {
      return matches[1] + ' ' + matches[2];
    },
  },
  /** CUSTOM PLATES */
  {
    regexp: /^(?=.{5,7}$)([A-PR-Z][0-9])([A-PR-Z][A-PR-Z]{0,4}[0-9]{0,2})$/,
    formatter(matches): string {
      return matches[1] + ' ' + matches[2];
    },
  },
  /** TESTING PLATES */
  {
    regexp: /^([A-PR-Z][0-9])([0-9]{3})(B)$/,
    formatter(matches): string {
      return matches[1] + ' ' + matches[2] + ' ' + matches[3];
    },
  },
  /** PROFESSIONAL PLATES */
  {
    regexp: /^([A-PR-Z][0-9]{2})([0-9]{2}P[0-9]{2})$/,
    formatter(matches): string {
      return matches[1] + ' ' + matches[2];
    },
  },
  /** EXPORT PLATES */
  {
    regexp: /^([A-PR-Z][0-9])([0-9]{3}[0-9ACE-HJ-NPR-Y])$/,
    formatter(matches): string {
      return matches[1] + ' ' + matches[2];
    },
  },
  /** DIPLOMATIC PLATES */
  {
    regexp: /^(W)([0-9]{6})$/,
    formatter(matches): string {
      return matches[1] + ' ' + matches[2];
    },
  },
];

export class Validator extends AbstractValidator implements ValidatorInterface {
  constructor() {
    super(patterns as Pattern[]);
  }
}
