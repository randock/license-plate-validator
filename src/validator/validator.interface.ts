export interface ValidatorInterface {
  /**
   * Validates a license plate number.
   *
   * @param licensePlateNumber
   */
  validate(licensePlateNumber: string): boolean;

  /**
   * Formats a license plate number. The result of this method is an _array_ of strings (possible formats).
   * For most countries, the result is only one possible format. For some countries (for example DE),
   * the format cannot always be determined.
   *
   * For example, the German license plate "DES123" can either be DE S 123 (Dessau) or D ES 123 (Düsseldorf).
   *
   * @param licensePlateNumber
   */
  format(licensePlateNumber: string): string[];
}
