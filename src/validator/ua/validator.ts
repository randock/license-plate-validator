import { ValidatorInterface } from '../validator.interface';
import { AbstractValidator } from '../abstract.validator';
import { Pattern } from '../pattern';

const patterns = [
  {
    regexp:
      /^(AA|KA|AB|KB|AC|KC|AE|KE|AH|KH|AI|KI|AK|KK|AM|KM|AO|KO|AP|KP|AT|KT|AX|KX|BA|HA|BB|HB|BC|HC|BE|HE|BH|HH|BI|HI|BK|HK|BM|HM|BO|HO|BP|HP|BT|HT|BX|HX|CA|IA|CB|IB|CC|IC|CE|IE|CH|IH|II)([0-9]{4})([A-Z]{2})$/,
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
