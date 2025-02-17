---
editUrl: false
next: false
prev: false
title: "ReceiptsManager"
---

## Constructors

### new ReceiptsManager()

> **new ReceiptsManager**(`mapDb`, `chain`): [`ReceiptsManager`](/reference/tevm/receipt-manager/classes/receiptsmanager/)

#### Parameters

• **mapDb**: [`MapDb`](/reference/tevm/receipt-manager/type-aliases/mapdb/)

• **chain**: [`Chain`](/reference/tevm/blockchain/type-aliases/chain/)

#### Returns

[`ReceiptsManager`](/reference/tevm/receipt-manager/classes/receiptsmanager/)

#### Defined in

[RecieptManager.ts:125](https://github.com/evmts/tevm-monorepo/blob/main/packages/receipt-manager/src/RecieptManager.ts#L125)

## Properties

### GET\_LOGS\_BLOCK\_RANGE\_LIMIT

> **GET\_LOGS\_BLOCK\_RANGE\_LIMIT**: `number` = `2500`

Block range limit for getLogs

#### Defined in

[RecieptManager.ts:142](https://github.com/evmts/tevm-monorepo/blob/main/packages/receipt-manager/src/RecieptManager.ts#L142)

***

### GET\_LOGS\_LIMIT

> **GET\_LOGS\_LIMIT**: `number` = `10000`

Limit of logs to return in getLogs

#### Defined in

[RecieptManager.ts:132](https://github.com/evmts/tevm-monorepo/blob/main/packages/receipt-manager/src/RecieptManager.ts#L132)

***

### GET\_LOGS\_LIMIT\_MEGABYTES

> **GET\_LOGS\_LIMIT\_MEGABYTES**: `number` = `150`

Size limit for the getLogs response in megabytes

#### Defined in

[RecieptManager.ts:137](https://github.com/evmts/tevm-monorepo/blob/main/packages/receipt-manager/src/RecieptManager.ts#L137)

***

### chain

> `readonly` **chain**: [`Chain`](/reference/tevm/blockchain/type-aliases/chain/)

#### Defined in

[RecieptManager.ts:127](https://github.com/evmts/tevm-monorepo/blob/main/packages/receipt-manager/src/RecieptManager.ts#L127)

***

### mapDb

> `readonly` **mapDb**: [`MapDb`](/reference/tevm/receipt-manager/type-aliases/mapdb/)

#### Defined in

[RecieptManager.ts:126](https://github.com/evmts/tevm-monorepo/blob/main/packages/receipt-manager/src/RecieptManager.ts#L126)

## Methods

### deepCopy()

> **deepCopy**(`chain`): [`ReceiptsManager`](/reference/tevm/receipt-manager/classes/receiptsmanager/)

#### Parameters

• **chain**: [`Chain`](/reference/tevm/blockchain/type-aliases/chain/)

#### Returns

[`ReceiptsManager`](/reference/tevm/receipt-manager/classes/receiptsmanager/)

#### Defined in

[RecieptManager.ts:144](https://github.com/evmts/tevm-monorepo/blob/main/packages/receipt-manager/src/RecieptManager.ts#L144)

***

### deleteReceipts()

> **deleteReceipts**(`block`): `Promise`\<`void`\>

#### Parameters

• **block**: [`Block`](/reference/tevm/block/classes/block/)

#### Returns

`Promise`\<`void`\>

#### Defined in

[RecieptManager.ts:160](https://github.com/evmts/tevm-monorepo/blob/main/packages/receipt-manager/src/RecieptManager.ts#L160)

***

### getLogs()

> **getLogs**(`from`, `to`, `addresses`?, `topics`?): `Promise`\<`GetLogsReturn`\>

Returns logs as specified by the eth_getLogs JSON RPC query parameters

#### Parameters

• **from**: [`Block`](/reference/tevm/block/classes/block/)

• **to**: [`Block`](/reference/tevm/block/classes/block/)

• **addresses?**: `Uint8Array`[]

• **topics?**: (`null` \| `Uint8Array` \| `Uint8Array`[])[] = `[]`

#### Returns

`Promise`\<`GetLogsReturn`\>

#### Defined in

[RecieptManager.ts:225](https://github.com/evmts/tevm-monorepo/blob/main/packages/receipt-manager/src/RecieptManager.ts#L225)

***

### getReceiptByTxHash()

> **getReceiptByTxHash**(`txHash`): `Promise`\<`null` \| `GetReceiptByTxHashReturn`\>

Returns receipt by tx hash with additional metadata for the JSON RPC response, or null if not found

#### Parameters

• **txHash**: `Uint8Array`

the tx hash

#### Returns

`Promise`\<`null` \| `GetReceiptByTxHashReturn`\>

#### Defined in

[RecieptManager.ts:204](https://github.com/evmts/tevm-monorepo/blob/main/packages/receipt-manager/src/RecieptManager.ts#L204)

***

### getReceipts()

#### getReceipts(blockHash, calcBloom, includeTxType)

> **getReceipts**(`blockHash`, `calcBloom`?, `includeTxType`?): `Promise`\<[`TxReceiptWithType`](/reference/tevm/receipt-manager/type-aliases/txreceiptwithtype/)[]\>

Returns receipts for given blockHash

##### Parameters

• **blockHash**: `Uint8Array`

the block hash

• **calcBloom?**: `boolean`

whether to calculate and return the logs bloom for each receipt (default: false)

• **includeTxType?**: `true`

whether to include the tx type for each receipt (default: false)

##### Returns

`Promise`\<[`TxReceiptWithType`](/reference/tevm/receipt-manager/type-aliases/txreceiptwithtype/)[]\>

##### Defined in

[RecieptManager.ts:171](https://github.com/evmts/tevm-monorepo/blob/main/packages/receipt-manager/src/RecieptManager.ts#L171)

#### getReceipts(blockHash, calcBloom, includeTxType)

> **getReceipts**(`blockHash`, `calcBloom`?, `includeTxType`?): `Promise`\<[`TxReceipt`](/reference/tevm/receipt-manager/type-aliases/txreceipt/)[]\>

##### Parameters

• **blockHash**: `Uint8Array`

• **calcBloom?**: `boolean`

• **includeTxType?**: `false`

##### Returns

`Promise`\<[`TxReceipt`](/reference/tevm/receipt-manager/type-aliases/txreceipt/)[]\>

##### Defined in

[RecieptManager.ts:172](https://github.com/evmts/tevm-monorepo/blob/main/packages/receipt-manager/src/RecieptManager.ts#L172)

***

### saveReceipts()

> **saveReceipts**(`block`, `receipts`): `Promise`\<`void`\>

Saves receipts to db. Also saves tx hash indexes if within txLookupLimit,
and removes tx hash indexes for one block past txLookupLimit.

#### Parameters

• **block**: [`Block`](/reference/tevm/block/classes/block/)

the block to save receipts for

• **receipts**: [`TxReceipt`](/reference/tevm/receipt-manager/type-aliases/txreceipt/)[]

the receipts to save

#### Returns

`Promise`\<`void`\>

#### Defined in

[RecieptManager.ts:154](https://github.com/evmts/tevm-monorepo/blob/main/packages/receipt-manager/src/RecieptManager.ts#L154)
