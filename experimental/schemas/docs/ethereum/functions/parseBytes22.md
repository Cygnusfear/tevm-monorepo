[**@tevm/schemas**](../../README.md) • **Docs**

***

[@tevm/schemas](../../modules.md) / [ethereum](../README.md) / parseBytes22

# Function: parseBytes22()

> **parseBytes22**\<`TBytes22`\>(`bytes22`): `TBytes22`

Parses a Bytes22 and returns the value if no errors.

## Type Parameters

• **TBytes22** *extends* \`0x$\{string\}\`

## Parameters

• **bytes22**: `TBytes22`

## Returns

`TBytes22`

## Example

```ts
import { parseBytes22 } from '@tevm/schemas';
const parsedBytes22 = parseBytes22('0xffaabbccddeeffaabbccddaaeeffaaeeffbbccddbb');
```

## Defined in

[experimental/schemas/src/ethereum/SBytesFixed/parseBytesFixed.js:367](https://github.com/evmts/tevm-monorepo/blob/main/experimental/schemas/src/ethereum/SBytesFixed/parseBytesFixed.js#L367)
