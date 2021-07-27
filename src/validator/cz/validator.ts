import { ValidatorInterface } from '../validator.interface';
import { AbstractValidator } from '../abstract.validator';
import { Pattern } from '../pattern';

const patterns = [
  {
    regexp: /^([A-Z0-9]{2,3})([0-9]{3,4})$/,
    formatter(matches): string {
      return matches[1] + ' ' + matches[2];
    },
  },
  {
    regexp: /^((?=.*\d)[ABCDEFHI-NPR-VX-Z0-9]{7,8})$/,
    formatter(matches): string {
      return matches[1].substr(0, 3) + ' ' + matches[1].substr(3);
    },
  },
];

export class Validator extends AbstractValidator implements ValidatorInterface {
  constructor() {
    super(patterns as Pattern[]);
  }
}
