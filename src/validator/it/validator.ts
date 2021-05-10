import { ValidatorInterface } from '../validator.interface';
import { AbstractValidator } from '../abstract.validator';
import { Pattern } from '../pattern';

const patterns = [
  {
    regexp: /^([A-Z]{2})([0-9]{3}[A-Z]{2})$/,
    formatter(matches): string {
      return matches[1] + ' ' + matches[2];
    },
  },
  {
    regexp: /^([A-Z]{2})([0-9]{5})$/,
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
