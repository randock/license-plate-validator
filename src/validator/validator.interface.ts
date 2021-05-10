export interface ValidatorInterface {
  validate(licensePlateNumber: string): boolean;
  format(licensePlateNumber: string): string[];
}
