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
  },
  {
    country: 'NL',
    license: 'TP336V',
    valid: true,
    formats: ['TP-336-V'],
  },
  {
    country: 'PL',
    license: 'PKL38000',
    valid: true,
    formats: ['PKL 38000'],
  },
  {
    country: 'DE',
    license: 'LEVMS456',
    valid: true,
    formats: ['LEV MS 456'],
  },
  {
    country: 'DE',
    license: 'SIMD1923',
    valid: true,
    formats: ['SIM D 1923', 'SI MD 1923'],
  },
  {
    country: 'DE',
    license: 'LEVMS456E',
    valid: true,
    formats: ['LEV MS 456E'],
  },
  {
    country: 'DE',
    license: 'LEVMS456H',
    valid: true,
    formats: ['LEV MS 456H'],
  },
  {
    country: 'DE',
    license: '0-107-1',
    valid: true,
    formats: ['0 107-1'],
  },
  {
    country: 'UA',
    license: 'AA5381AP',
    valid: true,
    formats: ['AA 5381 AP'],
  },
  {
    country: 'UA',
    license: 'ZZ5381AP',
    valid: false,
  },
  {
    country: 'UA',
    license: '06202AP',
    valid: true,
    formats: ['062-02 AP'],
  },
  {
    country: 'UA',
    license: 'c8428IC',
    valid: true,
    formats: ['C8428 IC'],
  },
  {
    country: 'UA',
    license: 'D123456',
    valid: true,
    formats: ['D 123 456'],
  },
  {
    country: 'UA',
    license: '11BB0714',
    valid: true,
    formats: ['11BB 0714'],
  },
  {
    country: 'UA',
    license: '30BB0714',
    valid: false,
  },
  {
    country: 'UA',
    license: 'OO0010CC',
    valid: true,
    formats: ['OO 0010 CC'],
  },
  {
    country: 'CZ',
    license: '2SD5167',
    valid: true,
    formats: ['2SD 5167'],
  },
  {
    country: 'DE',
    license: 'DO04197',
    valid: true,
    formats: ['DO 04197'],
  },
  {
    country: 'DE',
    license: 'DO02197',
    valid: false,
  },
  {
    country: 'AT',
    license: 'SW962CK',
    valid: true,
    formats: ['SW 962CK'],
  },
  {
    country: 'AT',
    license: 'SWA62CK',
    valid: false,
  },
  {
    country: 'AT',
    license: 'SW621',
    valid: false,
  },
  {
    country: 'AT',
    license: 'SWBUS1',
    valid: true,
    formats: ['SW BUS 1'],
  },
];

describe('validate', function () {
  it('validates', function () {
    licensePlateTests.forEach((licensePlate) => {
      let validator = ValidatorFactory.forCountry(licensePlate.country);

      expect(validator.validate(licensePlate.license)).toBe(licensePlate.valid);

      if (licensePlate.valid) {
        expect(validator.format(licensePlate.license)).toStrictEqual(
          licensePlate.formats
        );
      }
    });
  });
});
