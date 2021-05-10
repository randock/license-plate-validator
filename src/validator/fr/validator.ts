import { ValidatorInterface } from '../validator.interface';
import { AbstractValidator } from '../abstract.validator';
import { Pattern } from '../pattern';

const patterns = [
  {
    regexp: /^([A-Z]{2})([0-9]{3})([A-Z]{2})$/,
    formatter(matches): string {
      return matches[1] + '-' + matches[2] + '-' + matches[3];
    },
  },
  {
    regexp: /^([0-9]{1,4})([A-Z]{1,3})([0-9]{2,3}[AB]?)$/,
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
