import { ValidatorInterface } from './validator.interface';
import { Validator as NlValidator } from './nl/validator';
import { Validator as BeValidator } from './be/validator';
import { Validator as DeValidator } from './de/validator';
import { Validator as AtValidator } from './at/validator';
import { Validator as LuValidator } from './lu/validator';
import { Validator as FrValidator } from './fr/validator';
import { Validator as CzValidator } from './cz/validator';
import { Validator as ChValidator } from './ch/validator';
import { Validator as ItValidator } from './it/validator';
import { Validator as PlValidator } from './pl/validator';
import { Validator as UaValidator } from './ua/validator';

export class ValidatorFactory {
  static forCountry(country: string): ValidatorInterface {
    switch (country) {
      case 'NL':
        return new NlValidator();
      case 'BE':
        return new BeValidator();
      case 'DE':
        return new DeValidator();
      case 'AT':
        return new AtValidator();
      case 'IT':
        return new ItValidator();
      case 'LU':
        return new LuValidator();
      case 'CZ':
        return new CzValidator();
      case 'CH':
        return new ChValidator();
      case 'FR':
        return new FrValidator();
      case 'PL':
        return new PlValidator();
      case 'UA':
        return new UaValidator();
      default:
        throw new Error(`No validator defined for this country: ${country}.`);
    }
  }
}
