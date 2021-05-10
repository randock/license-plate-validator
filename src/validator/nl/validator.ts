import { sidecodes } from './sidecodes';
import { ValidatorInterface } from '../validator.interface';

const diplomats = /^CD[ABFJNST][0-9]{1,3}$/;

export class Validator implements ValidatorInterface {
  private static VERSION_CD = 99;

  private static calculateVersion(licensePlateNumber: string): number {
    // except licensePlateNumbers for diplomats
    if (licensePlateNumber.match(diplomats)) {
      return this.VERSION_CD;
    }

    for (let i = 0; i < sidecodes.length; i++) {
      if (licensePlateNumber.match(sidecodes[i])) {
        return i + 1;
      }
    }

    return undefined;
  }

  format(licensePlateNumber: string): string[] {
    if (!this.validate(licensePlateNumber)) {
      throw new Error('Invalid license plate, cannot format.');
    }

    licensePlateNumber = licensePlateNumber
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, '');

    const version = Validator.calculateVersion(licensePlateNumber);

    if (version <= 6) {
      licensePlateNumber =
        licensePlateNumber.substr(0, 2) +
        '-' +
        licensePlateNumber.substr(2, 2) +
        '-' +
        licensePlateNumber.substr(4, 2);
    }
    if (version === 7 || version === 9) {
      licensePlateNumber =
        licensePlateNumber.substr(0, 2) +
        '-' +
        licensePlateNumber.substr(2, 3) +
        '-' +
        licensePlateNumber.substr(5, 1);
    }
    if (version === 8 || version === 10) {
      licensePlateNumber =
        licensePlateNumber.substr(0, 1) +
        '-' +
        licensePlateNumber.substr(1, 3) +
        '-' +
        licensePlateNumber.substr(4, 2);
    }
    if (version === 11 || version === 14) {
      licensePlateNumber =
        licensePlateNumber.substr(0, 3) +
        '-' +
        licensePlateNumber.substr(3, 2) +
        '-' +
        licensePlateNumber.substr(5, 1);
    }
    if (version === 12 || version === 13) {
      licensePlateNumber =
        licensePlateNumber.substr(0, 1) +
        '-' +
        licensePlateNumber.substr(1, 2) +
        '-' +
        licensePlateNumber.substr(3, 3);
    }

    return [licensePlateNumber];
  }

  validate(licensePlateNumber: string): boolean {
    licensePlateNumber = licensePlateNumber
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, '');

    return Validator.calculateVersion(licensePlateNumber) !== undefined;
  }
}
