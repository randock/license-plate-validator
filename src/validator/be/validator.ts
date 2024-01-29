import { ValidatorInterface } from '../validator.interface';
import { AbstractValidator } from '../abstract.validator';
import { Pattern } from '../pattern';

const patterns: Pattern[] = [
  {
    regexp: /^([A-Z]{3})([0-9]{3})$/,
    formatter(matches): string {
      return matches[1] + '-' + matches[2];
    },
  },
  {
    regexp: /^([0-9]{3})([A-Z]{3})$/,
    formatter(matches): string {
      return matches[1] + '-' + matches[2];
    },
  },
  {
    regexp: /^([0-9GMWOSTUQZ]|ZZ)([A-Z]{3})([0-9]{3})$/,
    formatter(matches): string {
      return matches[1] + '-' + matches[2] + '-' + matches[3];
    },
  },
  {
    regexp: /^(CD)([A-Z]{2})([0-9]{3})$/,
    formatter(matches): string {
      return matches[1] + '-' + matches[2] + '-' + matches[3];
    },
  },
  {
    fallback: true,
    regexp: /^(.+)$/,
    formatter(matches): string {
      return matches[1].replace(' ', '');
    },
  },
];

export class Validator extends AbstractValidator implements ValidatorInterface {
  constructor() {
    super(patterns);
  }
}
