import { Pattern } from './pattern';

export abstract class AbstractValidator {
  constructor(private readonly patterns: Pattern[]) {}

  static normalizeLicensePlateNumber(
    pattern: Pattern,
    licensePlateNumber: string
  ): string {
    if (pattern.normalizer !== undefined) {
      return pattern.normalizer(licensePlateNumber);
    }

    return licensePlateNumber.toUpperCase().replace(/·|-|_|\.|:|,|;|\s/g, '');
  }

  format(licensePlateNumber: string): string[] {
    if (!this.validate(licensePlateNumber)) {
      throw new Error(
        'License plate cannot be formatted because it is invalid.'
      );
    }

    const formats = [];

    this.patterns.forEach((pattern: Pattern) => {
      const normalizedLicensePlateNumber =
        AbstractValidator.normalizeLicensePlateNumber(
          pattern,
          licensePlateNumber
        );

      const matches = normalizedLicensePlateNumber.match(pattern.regexp);
      if (matches !== null) {
        formats.push(pattern.formatter(matches));
      }
    });

    return formats;
  }

  validate(licensePlateNumber: string): boolean {
    let valid = false;
    this.patterns.forEach((pattern) => {
      const normalizedLicensePlateNumber =
        AbstractValidator.normalizeLicensePlateNumber(
          pattern,
          licensePlateNumber
        );

      const matches = normalizedLicensePlateNumber.match(pattern.regexp);
      valid = valid || matches !== null;
    });

    return valid;
  }
}
