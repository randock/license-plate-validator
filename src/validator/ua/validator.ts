import { ValidatorInterface } from '../validator.interface';
import { AbstractValidator } from '../abstract.validator';
import { Pattern } from '../pattern';

const patterns = [
  {
    regexp:
      /^(AK|AB|AC|AE|AH|AM|AO|AP|AT|AI|AA|BA|BB|BC|BE|BH|BI|BK|BM|BO|AX|BT|BX|CA|CB|CE|CH)([0-9]{4})([A-Z]{2})$/,
    formatter(matches): string {
      return matches[1] + ' ' + matches[2] + ' ' + matches[3];
    },
  },
  {
    regexp: /^([0-9]{3})([0-9]{2})([A-Z]{2})$/,
    formatter(matches): string {
      return matches[1] + '-' + matches[2] + ' ' + matches[3];
    },
  },
  {
    regexp: /^([A-Z])([0-9]{4})([A-Z]{2})$/,
    formatter(matches): string {
      return matches[1] + matches[2] + ' ' + matches[3];
    },
  },
  {
    regexp: /^(D)([0-9]{3})([0-9]{3})$/,
    formatter(matches): string {
      return matches[1] + ' ' + matches[2] + ' ' + matches[3];
    },
  },
  {
    regexp:
      /^(01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27)([A-Z]{2})([0-9]{4})$/,
    formatter(matches): string {
      return matches[1] + matches[2] + ' ' + matches[3];
    },
  },
];

export class Validator extends AbstractValidator implements ValidatorInterface {
  constructor() {
    super(patterns as Pattern[]);
  }
}
