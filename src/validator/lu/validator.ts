import { ValidatorInterface } from '../validator.interface';
import { AbstractValidator } from '../abstract.validator';
import { Pattern } from '../pattern';

const patterns = [
  {
    regexp: /^([0-9]{4,5})$/,
    formatter(matches): string {
      return matches[1];
    },
  },
  {
    regexp: /^([A-Z]{2})([0-9]{2,4})$/,
    formatter(matches): string {
      return matches[1] + ' ' + matches[2];
    },
  },
  {
    regexp: /^([A-Z])([0-9]{4})$/,
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
