import { ValidatorFactory } from '../dist';

const licensePlateTests = [
  {
    country: 'NL',
    license: '53-FS-JB',
    valid: true,
    formats: ['53-FS-JB'],
  },
  {
    country: 'NL',
    license: '53-FS-J',
    valid: false,
    formats: ['53-FS-JB'],
  },
  {
    country: 'NL',
    license: '53FSJB',
    valid: true,
    formats: ['53-FS-JB'],
  }, {
    country: 'NL',
    license: 'TP336V',
    valid: true,
    formats: ['TP-336-V'],
  }, {
    country: 'PL',
    license: 'PKL38000',
    valid: true,
    formats: ['PKL 38000'],
  },
];

describe('validate', function () {
  it('validates', function () {
    licensePlateTests.forEach((licensePlate) => {
      let validator = ValidatorFactory.forCountry(licensePlate.country);
      expect(validator.validate(licensePlate.license)).toBe(licensePlate.valid);

      if (licensePlate.valid) {
          expect(validator.format(licensePlate.license)).toStrictEqual(licensePlate.formats);
      }
    });
  });
});
