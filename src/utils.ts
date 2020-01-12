/**
 * convert a hex string to a number
 * @param str
 */
export function hexToNum(str: string) {
  return str.startsWith('0x') ? Number(str) : Number('0x' + str);
}
