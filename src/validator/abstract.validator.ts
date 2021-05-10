import { Pattern } from './pattern';

export abstract class AbstractValidator {
  constructor(private readonly patterns: Pattern[]) {}

  static normalizeLicensePlateNumber(licensePlateNumber: string): string {
    return licensePlateNumber.toUpperCase().replace(/·|-|_|\.|:|,|;|\s/g, '');
  }

  format(licensePlateNumber: string): string[] {
    if (!this.validate(licensePlateNumber)) {
      throw new Error(
        'License plate cannot be formatted because it is invalid.'
      );
    }

    const normalizedLicensePlateNumber =
      AbstractValidator.normalizeLicensePlateNumber(licensePlateNumber);

    const formats = [];

    this.patterns.forEach((pattern) => {
      const matches = normalizedLicensePlateNumber.match(pattern.regexp);
      if (matches !== null) {
        formats.push(pattern.formatter(matches));
      }
    });

    return formats;
  }

  validate(licensePlateNumber: string): boolean {
    const normalizedLicensePlateNumber =
      AbstractValidator.normalizeLicensePlateNumber(licensePlateNumber);

    let valid = false;
    this.patterns.forEach((pattern) => {
      const matches = normalizedLicensePlateNumber.match(pattern.regexp);
      valid = valid || matches !== null;
    });

    return valid;
  }
}
