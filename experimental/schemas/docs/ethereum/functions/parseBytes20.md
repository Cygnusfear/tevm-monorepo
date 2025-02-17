[**@tevm/schemas**](../../README.md) • **Docs**

***

[@tevm/schemas](../../modules.md) / [ethereum](../README.md) / parseBytes20

# Function: parseBytes20()

> **parseBytes20**\<`TBytes20`\>(`bytes20`): `TBytes20`

Parses a Bytes20 and returns the value if no errors.

## Type Parameters

• **TBytes20** *extends* \`0x$\{string\}\`

## Parameters

• **bytes20**: `TBytes20`

## Returns

`TBytes20`

## Example

```ts
import { parseBytes20 } from '@tevm/schemas';
const parsedBytes20 = parseBytes20('0xffaabbccddeeffaabbccddaaeeffaaeeffbbccdd');
```

## Defined in

[experimental/schemas/src/ethereum/SBytesFixed/parseBytesFixed.js:337](https://github.com/evmts/tevm-monorepo/blob/main/experimental/schemas/src/ethereum/SBytesFixed/parseBytesFixed.js#L337)
