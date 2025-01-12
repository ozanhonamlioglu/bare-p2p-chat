const BASE_SIZE = 4;

/**
 *
 * @description To keep consistency, keep sizing same for every component.
 * @param {number} pad multiplies with pre defined base size.
 * @returns {number}
 */
export const makeSize = (pad) => BASE_SIZE * pad;
