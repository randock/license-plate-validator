import { ValidatorInterface } from '../validator.interface';
import { AbstractValidator } from '../abstract.validator';
import { Pattern } from '../pattern';

const patterns = [
  /** REGULAR LICENSE PLATE */
  {
    regexp:
      /^(A|B|E|G|I|K|L|N|O|P|S|T|V|W)(([A-PR-Z]{1,2})([0-9]{3,5})|([0-9]{1,2})([A-PR-Z]{3,5})|([A-PR-Z]{3,5})([0-9]{1,2})|([0-9]{3,5})([A-PR-Z]{1,2}))$/,
    formatter(matches): string {
      matches = matches.filter((match) => match !== undefined);
      return matches[1] + ' ' + matches[3] + matches[4];
    },
  },
  {
    regexp:
      /^(AM|BA|BB|BD|BG|BH|BL|BM|BN|BP|BR|BZ|DL|DO|EF|EU|FB|FE|FF|FK|FR|FV|FW|GB|GD|GF|GK|GM|GR|GS|GU|HA|HB|HE|HF|HL|HO|IL|IM|JE|JO|JU|JW|KB|KG|KI|KF|KK|KL|KO|KR|KS|KU|LA|LB|LE|LF|LI|LL|LN|LZ|MA|MD|ME|MI|MT|MU|MZ|ND|NK|OP|OW|PE|PL|PT|RA|RE|RI|RO|SB|SD|SE|SK|SL|SP|SO|SR|ST|SV|SW|SZ|TA|TD|TK|TU|UU|VB|VD|VI|VK|VL|VO|WB|WD|WK|WE|WL|WN|WO|WT|WU|WY|WZ|ZE|ZT|ZW)(([A-PR-Z]{1,2})([0-9]{3,5})|([0-9]{1,2})([A-PR-Z]{3,5})|([A-PR-Z]{3,5})([0-9]{1,2})|([0-9]{3,5})([A-PR-Z]{1,2}))$/,
    formatter(matches): string {
      matches = matches.filter((match) => match !== undefined);
      return matches[1] + ' ' + matches[3] + matches[4];
    },
  },
];

export class Validator extends AbstractValidator implements ValidatorInterface {
  constructor() {
    super(patterns as Pattern[]);
  }
}
