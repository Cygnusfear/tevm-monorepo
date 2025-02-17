[**@tevm/schemas**](../../README.md) • **Docs**

***

[@tevm/schemas](../../modules.md) / [ethereum](../README.md) / parseUINT32

# Function: parseUINT32()

> **parseUINT32**\<`TUINT32`\>(`uint32`): `TUINT32`

Parses a UINT32 and returns the value if no errors.

## Type Parameters

• **TUINT32** *extends* `bigint`

## Parameters

• **uint32**: `TUINT32`

## Returns

`TUINT32`

## Example

```ts
import { parseUINT32 } from '@tevm/schemas';
const parsedUINT32 = parseUINT32(BigInt(2147483647));
```

## Defined in

[experimental/schemas/src/ethereum/SUINT/parseUINT.js:56](https://github.com/evmts/tevm-monorepo/blob/main/experimental/schemas/src/ethereum/SUINT/parseUINT.js#L56)
