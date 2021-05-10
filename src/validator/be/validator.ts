import { ValidatorInterface } from '../validator.interface';
import { AbstractValidator } from '../abstract.validator';
import { Pattern } from '../pattern';

const patterns = [
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
    regexp: /^([0-9])([A-Z]{3})([0-9]{3})$/,
    formatter(matches): string {
      return matches[1] + '-' + matches[2] + '-' + matches[3];
    },
  },
  {
    regexp: /^(.+)$/,
    formatter(matches): string {
      return matches[1].replace(' ', '');
    },
  },
];

export class Validator extends AbstractValidator implements ValidatorInterface {
  constructor() {
    super(patterns as Pattern[]);
  }
}
