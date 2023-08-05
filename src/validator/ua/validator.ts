import { ValidatorInterface } from '../validator.interface';
import { AbstractValidator } from '../abstract.validator';
import { Pattern } from '../pattern';

const patterns = [
  {
    regexp:
      /^(AA|KA|TT|TA|AI|KI|TI|ME|AB|KB|MM|OK|AC|KC|CM|TC|AE|KE|PP|MI|AK|МА|TK|MK|AH|KH|TH|MH|AM|KM|TM|MB|AO|KO|MT|MO|AP|KP|TP|MP|AT|KT|TO|XC|BA|HA|XA|EA|BB|HB|EE|EB|BC|HC|CC|EC|BE|HE|XE|XH|BH|HH|OO|EH|BI|HI|XI|EI|BK|HK|XK|EK|CH|IH|OH|PH|BM|HM|XM|EM|BO|HO|XO|EO|AX|KX|XX|EX|BT|HT|XT|ET|BX|HX|OX|PX|CA|IA|OA|PA|CB|IB|OB|PB|CE|IE|OE|PE|KK|BP|HP|IC|II)([0-9]{4})([A-Z]{2})$/,
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
