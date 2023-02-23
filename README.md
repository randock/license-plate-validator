# License Plate Validator

This package provides validators for the following countries:

- NL
- BE
- DE
- AT
- FR
- LU
- CZ
- CH
- IT
- PL
- UA

The easiest way to use the package is as follows.

```typescript
import { ValidatorFactory } from '@randock/license-plate-validator';

// obtain a validator instance
const validator = ValidatorFactory.forCountry('NL');

// validate license plate
const valid: boolean = validator.validate('XX-YY-ZZ'); // true

// format license plate (result is a string array)
const formats: string[] = validator.format('11YYZZ'); // ["11-YY-ZZ"]
```

For some countries, the format cannot be deduced to only one possible format. For example, the German license plate "DES123" can either be DE S 123 (Dessau) or D ES 123 (Düsseldorf). That is why the result of the format method is always an array of strings.
