# Simple ABI docgen

Generates a basic Markdown overview from a given [ABI file](https://solidity.readthedocs.io/en/v0.5.3/abi-spec.html).

It's pretty basic.

## Running it

```
node index.js ./contract.json My Contract Title
```

### Sample output

See [the ERC20 example](./examples/openzeppelin-erc20) for the output, run against [OpenZeppelin IERC20.sol](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/IERC20.sol).

# In the wild

Feel free to add your project here if you're using simple-abi-docgen:

# Alternatives

You probably really want [solidity-docgen](https://github.com/OpenZeppelin/solidity-docgen) and to use NatSpec.
