# ERC20

## Events

[Approval](#approval-event), [Transfer](#transfer-event)

## Functions

[allowance](#allowance-function), [approve](#approve-function), [balanceOf](#balanceof-function), [totalSupply](#totalsupply-function), [transfer](#transfer-function), [transferFrom](#transferfrom-function)

## Events

### <a id="approval-event">Approval</a>

| Input name | Type                                                                      | Index |
| ---------- | ------------------------------------------------------------------------- | ----- |
| owner      | [address](https://solidity.readthedocs.io/en/v0.6.10/types.html#address)  | ☑️    |
| spender    | [address](https://solidity.readthedocs.io/en/v0.6.10/types.html#address)  | ☑️    |
| value      | [uint256](https://solidity.readthedocs.io/en/v0.6.10/types.html#integers) | 🔘    |

### <a id="transfer-event">Transfer</a>

| Input name | Type                                                                      | Index |
| ---------- | ------------------------------------------------------------------------- | ----- |
| from       | [address](https://solidity.readthedocs.io/en/v0.6.10/types.html#address)  | ☑️    |
| to         | [address](https://solidity.readthedocs.io/en/v0.6.10/types.html#address)  | ☑️    |
| value      | [uint256](https://solidity.readthedocs.io/en/v0.6.10/types.html#integers) | 🔘    |

## Functions

### <a id="allowance-function">allowance</a>

👁 View

| Input name | Type                                                                     |
| ---------- | ------------------------------------------------------------------------ |
| owner      | [address](https://solidity.readthedocs.io/en/v0.6.10/types.html#address) |
| spender    | [address](https://solidity.readthedocs.io/en/v0.6.10/types.html#address) |

**Returns** [uint256](https://solidity.readthedocs.io/en/v0.6.10/types.html#integers)

### <a id="approve-function">approve</a>

🙅 Non-payable

| Input name | Type                                                                      |
| ---------- | ------------------------------------------------------------------------- |
| spender    | [address](https://solidity.readthedocs.io/en/v0.6.10/types.html#address)  |
| amount     | [uint256](https://solidity.readthedocs.io/en/v0.6.10/types.html#integers) |

**Returns** [bool](https://solidity.readthedocs.io/en/v0.6.10/types.html#booleans)

### <a id="balanceof-function">balanceOf</a>

👁 View

| Input name | Type                                                                     |
| ---------- | ------------------------------------------------------------------------ |
| account    | [address](https://solidity.readthedocs.io/en/v0.6.10/types.html#address) |

**Returns** [uint256](https://solidity.readthedocs.io/en/v0.6.10/types.html#integers)

### <a id="totalsupply-function">totalSupply</a>

👁 View

**Returns** [uint256](https://solidity.readthedocs.io/en/v0.6.10/types.html#integers)

### <a id="transfer-function">transfer</a>

🙅 Non-payable

| Input name | Type                                                                      |
| ---------- | ------------------------------------------------------------------------- |
| recipient  | [address](https://solidity.readthedocs.io/en/v0.6.10/types.html#address)  |
| amount     | [uint256](https://solidity.readthedocs.io/en/v0.6.10/types.html#integers) |

**Returns** [bool](https://solidity.readthedocs.io/en/v0.6.10/types.html#booleans)

### <a id="transferfrom-function">transferFrom</a>

🙅 Non-payable

| Input name | Type                                                                      |
| ---------- | ------------------------------------------------------------------------- |
| sender     | [address](https://solidity.readthedocs.io/en/v0.6.10/types.html#address)  |
| recipient  | [address](https://solidity.readthedocs.io/en/v0.6.10/types.html#address)  |
| amount     | [uint256](https://solidity.readthedocs.io/en/v0.6.10/types.html#integers) |

**Returns** [bool](https://solidity.readthedocs.io/en/v0.6.10/types.html#booleans)
