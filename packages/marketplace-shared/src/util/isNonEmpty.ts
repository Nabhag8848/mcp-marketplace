import { isEmpty } from 'lodash';

// Union type for all possible input types that isEmpty accepts
type EmptyCheckable =
  | string
  | number
  | boolean
  | object
  | unknown[]
  | Map<unknown, unknown>
  | Set<unknown>
  | null
  | undefined;

/**
 * Checks if a value is non-empty by negating lodash's isEmpty function.
 *
 * This function determines whether a value contains meaningful content:
 * - For strings: returns true if not empty string ('')
 * - For arrays: returns true if length > 0
 * - For objects: returns true if has at least one enumerable property
 * - For Maps/Sets: returns true if size > 0
 * - For null/undefined: always returns false
 * - For primitives (numbers, booleans): always returns false (lodash behavior)
 * - For other objects (Date, RegExp, functions): always returns false (lodash behavior)
 *
 * @param value - The value to check for non-emptiness
 * @returns true if the value is non-empty, false otherwise
 */
function isNonEmpty<T extends EmptyCheckable>(value: T): boolean {
  return !isEmpty(value);
}

export { isNonEmpty };
