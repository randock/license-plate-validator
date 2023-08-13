import { ValidatorInterface } from '../validator.interface';
import { AbstractValidator } from '../abstract.validator';
import { Pattern } from '../pattern';

const patterns = [
  /** REGULAR LICENSE PLATE */
  {
    regexp:
      /^(AM|BA|BB|BD|BG|BH|BL|BM|BN|BP|BR|BZ|DL|DO|EF|EU|FB|FE|FF|FK|FR|FV|FW|GB|GD|GF|GK|GM|GR|GS|GU|HA|HB|HE|HF|HL|HO|IL|IM|JE|JO|JU|JW|KB|KI|KF|KK|KL|KO|KR|KS|KU|LA|LB|LE|LF|LI|LL|LN|LZ|MA|MD|ME|MI|MT|MU|MZ|ND|NK|OP|OW|PE|PL|PT|RA|RE|RI|RO|SB|SD|SE|SK|SL|SP|SO|SR|ST|SV|SW|SZ|TA|TD|TK|TU|UU|VB|VD|VI|VK|VL|VO|WB|WD|WK|WE|WL|WN|WO|WT|WU|WY|WZ|ZE|ZT|ZW)([0-9][A-PR-Z0-9]{2,4}[A-PR-Z])$/,
    formatter(matches): string {
      return matches[1] + ' ' + matches[2];
    },
  },
  /** CUSTOM PAID LICENSE PLATE */
  {
    regexp:
      /^(AM|BA|BB|BD|BG|BH|BL|BM|BN|BP|BR|BZ|DL|DO|EF|EU|FB|FE|FF|FK|FR|FV|FW|GB|GD|GF|GK|GM|GR|GS|GU|HA|HB|HE|HF|HL|HO|IL|IM|JE|JO|JU|JW|KB|KI|KF|KK|KL|KO|KR|KS|KU|LA|LB|LE|LF|LI|LL|LN|LZ|MA|MD|ME|MI|MT|MU|MZ|ND|NK|OP|OW|PE|PL|PT|RA|RE|RI|RO|SB|SD|SE|SK|SL|SP|SO|SR|ST|SV|SW|SZ|TA|TD|TK|TU|UU|VB|VD|VI|VK|VL|VO|WB|WD|WK|WE|WL|WN|WO|WT|WU|WY|WZ|ZE|ZT|ZW)([A-PR-Z]{3})([0-9])$/,
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
