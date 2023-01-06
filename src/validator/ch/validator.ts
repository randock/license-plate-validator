import { ValidatorInterface } from '../validator.interface';
import { AbstractValidator } from '../abstract.validator';
import { Pattern } from '../pattern';

const patterns = [
  {
    regexp: /^([A-Z]{1,2})([0-9]{1,6})$/,
    formatter(matches): string {
      return matches[1] + ' ' + matches[2];
    },
  },
  {
    regexp: /^([A-Z]{1,2})([0-9]{1,6})([ZU])$/,
    formatter(matches): string {
      return matches[1] + ' ' + matches[2] + ' ' + matches[3];
    },
  },
];

export class Validator extends AbstractValidator implements ValidatorInterface {
  constructor() {
    super(patterns as Pattern[]);
  }
}
