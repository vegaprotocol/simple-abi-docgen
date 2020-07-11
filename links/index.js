const version = 'v0.6.10'
const base = `https://solidity.readthedocs.io/en/${version}/types.html#`

module.exports = {
  links: {
    uint256: `${base}integers`,
    uint16: `${base}integers`,
    uint8: `${base}integers`,
    address: `${base}address`,
    bool: `${base}booleans`,
    bytes32: `${base}fixed-size-byte-arrays`,
    bytes16: `${base}fixed-size-byte-arrays`,
    bytes4: `${base}fixed-size-byte-arrays`,
    bytes: `${base}fixed-size-byte-arrays`
  }
}
