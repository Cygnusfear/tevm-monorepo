[**@tevm/schemas**](../../README.md) • **Docs**

***

[@tevm/schemas](../../modules.md) / [ethereum](../README.md) / parseBytes12

# Function: parseBytes12()

> **parseBytes12**\<`TBytes12`\>(`bytes12`): `TBytes12`

Parses a Bytes12 and returns the value if no errors.

## Type Parameters

• **TBytes12** *extends* \`0x$\{string\}\`

## Parameters

• **bytes12**: `TBytes12`

## Returns

`TBytes12`

## Example

```ts
import { parseBytes12 } from '@tevm/schemas';
const parsedBytes12 = parseBytes12('0xffaabbccddeeffaabbccddaaee');
```

## Defined in

[experimental/schemas/src/ethereum/SBytesFixed/parseBytesFixed.js:217](https://github.com/evmts/tevm-monorepo/blob/main/experimental/schemas/src/ethereum/SBytesFixed/parseBytesFixed.js#L217)
