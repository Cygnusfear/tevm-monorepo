---
editUrl: false
next: false
prev: false
title: "bytesToHex"
---

> **bytesToHex**(`value`, `opts`?): [`Hex`](/reference/tevm/utils/type-aliases/hex/)

Encodes a bytes array into a hex string

- Docs: https://viem.sh/docs/utilities/toHex#bytestohex

## Parameters

• **value**: `Uint8Array`

Value to encode.

• **opts?**: `BytesToHexOpts`

Options.

## Returns

[`Hex`](/reference/tevm/utils/type-aliases/hex/)

Hex value.

## Examples

```ts
import { bytesToHex } from 'viem'
const data = bytesToHex(Uint8Array.from([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33])
// '0x48656c6c6f20576f726c6421'
```

```ts
import { bytesToHex } from 'viem'
const data = bytesToHex(Uint8Array.from([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]), { size: 32 })
// '0x48656c6c6f20576f726c64210000000000000000000000000000000000000000'
```

## Defined in

node\_modules/.pnpm/viem@2.14.2\_bufferutil@4.0.8\_typescript@5.5.4\_utf-8-validate@6.0.4\_zod@3.23.8/node\_modules/viem/\_types/utils/encoding/toHex.d.ts:91
