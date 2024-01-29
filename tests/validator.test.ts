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
    valid: true,
    formats: ['S W621'],
  },
  {
    country: 'AT',
    license: 'SWBUS1',
    valid: true,
    formats: ['S WBUS1', 'SW BUS1'],
  },
  {
    country: 'AT',
    license: 'W85598F',
    valid: true,
    formats: ['W 85598F'],
  },
  {
    country: 'PL',
    license: 'KTAX12',
    valid: true,
    formats: ['KTA X12'],
    comment: 'Custom License Plate',
  },
  {
    country: 'PL',
    license: 'P0X122',
    valid: false,
    comment: 'Custom License Plate (too many digits)',
  },
  {
    country: 'PL',
    license: 'P0X12',
    valid: true,
    formats: ['P0 X12'],
    comment: 'Custom License Plate',
  },
  {
    country: 'PL',
    license: 'P0XXXX12',
    valid: false,
    comment: 'Custom License Plate (too long)',
  },
  {
    country: 'PL',
    license: 'P0X12X',
    valid: false,
    comment: 'Custom License Plate (digits before letters)',
  },
  {
    country: 'PL',
    license: 'P0XX',
    valid: false,
    comment: 'Custom License Plate (too short)',
  },
  {
    country: 'PL',
    license: 'P0234B',
    valid: true,
    formats: ['P0 234 B'],
    comment: 'Testing plate',
  },
  {
    country: 'PL',
    license: 'X1234P56',
    valid: true,
    formats: ['X12 34P56'],
    comment: 'Professional plate',
  },
  {
    country: 'PL',
    license: 'X1234L56',
    valid: false,
    comment: 'Professional plate (not P)',
  },
  {
    country: 'PL',
    license: 'P01234',
    valid: true,
    formats: ['P0 1234'],
    comment: 'Export plate',
  },
  {
    country: 'PL',
    license: 'P0123J',
    valid: true,
    formats: ['P0 123J'],
    comment: 'Export plate',
  },
  {
    country: 'PL',
    license: 'W123456',
    valid: true,
    formats: ['W 123456'],
    comment: 'Diplomatic plate',
  },
  {
    country: 'PL',
    license: 'PY17014',
    valid: true,
    formats: ['PY 17014'],
  },
  {
    country: 'PL',
    license: 'PO5VS57',
    valid: true,
    formats: ['PO 5VS57'],
  },
  {
    country: 'AT',
    license: 'SN19216',
    valid: true,
    formats: ['S N19216'],
  },
  {
    country: 'BE',
    license: '1RAE123',
    valid: true,
    formats: ['1-RAE-123'],
  },
  {
    country: 'BE',
    license: 'TXAM817',
    valid: true,
    formats: ['T-XAM-817'],
  },
  {
    country: 'BE',
    license: 'SUPERMAN',
    valid: true,
    formats: ['SUPERMAN'],
  },
];

describe('validate', function () {
  it('validates', function () {
    licensePlateTests.forEach((licensePlate) => {
      console.debug(
        `Testing license plate ${licensePlate.country}: ${licensePlate.license}`
      );

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
