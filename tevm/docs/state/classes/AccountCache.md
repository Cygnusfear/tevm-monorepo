[**tevm**](../../README.md) • **Docs**

***

[tevm](../../modules.md) / [state](../README.md) / AccountCache

# Class: AccountCache

## Extends

- `Cache`

## Constructors

### new AccountCache()

> **new AccountCache**(`opts`): [`AccountCache`](AccountCache.md)

#### Parameters

• **opts**: `CacheOpts`

#### Returns

[`AccountCache`](AccountCache.md)

#### Overrides

`Cache.constructor`

#### Defined in

node\_modules/.pnpm/@ethereumjs+statemanager@2.3.0/node\_modules/@ethereumjs/statemanager/dist/esm/cache/account.d.ts:27

## Properties

### \_checkpoints

> **\_checkpoints**: `number`

#### Inherited from

`Cache._checkpoints`

#### Defined in

node\_modules/.pnpm/@ethereumjs+statemanager@2.3.0/node\_modules/@ethereumjs/statemanager/dist/esm/cache/cache.d.ts:4

***

### \_debug

> **\_debug**: `Debugger`

#### Inherited from

`Cache._debug`

#### Defined in

node\_modules/.pnpm/@ethereumjs+statemanager@2.3.0/node\_modules/@ethereumjs/statemanager/dist/esm/cache/cache.d.ts:3

***

### \_diffCache

> **\_diffCache**: `Map`\<`string`, `undefined` \| `AccountCacheElement`\>[]

Diff cache collecting the state of the cache
at the beginning of checkpoint height
(respectively: before a first modification)

If the whole cache element is undefined (in contrast
to the account), the element didn't exist in the cache
before.

#### Defined in

node\_modules/.pnpm/@ethereumjs+statemanager@2.3.0/node\_modules/@ethereumjs/statemanager/dist/esm/cache/account.d.ts:26

***

### \_lruCache

> **\_lruCache**: `undefined` \| `LRUCache`\<`string`, `AccountCacheElement`, `unknown`\>

#### Defined in

node\_modules/.pnpm/@ethereumjs+statemanager@2.3.0/node\_modules/@ethereumjs/statemanager/dist/esm/cache/account.d.ts:15

***

### \_orderedMapCache

> **\_orderedMapCache**: `undefined` \| `OrderedMap`\<`string`, `AccountCacheElement`\>

#### Defined in

node\_modules/.pnpm/@ethereumjs+statemanager@2.3.0/node\_modules/@ethereumjs/statemanager/dist/esm/cache/account.d.ts:16

***

### \_stats

> **\_stats**: `object`

#### dels

> **dels**: `number`

#### hits

> **hits**: `number`

#### reads

> **reads**: `number`

#### size

> **size**: `number`

#### writes

> **writes**: `number`

#### Inherited from

`Cache._stats`

#### Defined in

node\_modules/.pnpm/@ethereumjs+statemanager@2.3.0/node\_modules/@ethereumjs/statemanager/dist/esm/cache/cache.d.ts:5

## Methods

### \_saveCachePreState()

> **\_saveCachePreState**(`cacheKeyHex`): `void`

#### Parameters

• **cacheKeyHex**: `string`

#### Returns

`void`

#### Defined in

node\_modules/.pnpm/@ethereumjs+statemanager@2.3.0/node\_modules/@ethereumjs/statemanager/dist/esm/cache/account.d.ts:28

***

### checkpoint()

> **checkpoint**(): `void`

Marks current state of cache as checkpoint, which can
later on be reverted or committed.

#### Returns

`void`

#### Defined in

node\_modules/.pnpm/@ethereumjs+statemanager@2.3.0/node\_modules/@ethereumjs/statemanager/dist/esm/cache/account.d.ts:62

***

### clear()

> **clear**(): `void`

Clears cache.

#### Returns

`void`

#### Defined in

node\_modules/.pnpm/@ethereumjs+statemanager@2.3.0/node\_modules/@ethereumjs/statemanager/dist/esm/cache/account.d.ts:82

***

### commit()

> **commit**(): `void`

Commits to current state of cache (no effect on trie).

#### Returns

`void`

#### Defined in

node\_modules/.pnpm/@ethereumjs+statemanager@2.3.0/node\_modules/@ethereumjs/statemanager/dist/esm/cache/account.d.ts:57

***

### del()

> **del**(`address`): `void`

Marks address as deleted in cache.

#### Parameters

• **address**: [`EthjsAddress`](../../utils/classes/EthjsAddress.md)

Address

#### Returns

`void`

#### Defined in

node\_modules/.pnpm/@ethereumjs+statemanager@2.3.0/node\_modules/@ethereumjs/statemanager/dist/esm/cache/account.d.ts:44

***

### flush()

> **flush**(): [`string`, `AccountCacheElement`][]

Flushes cache by returning accounts that have been modified
or deleted and resetting the diff cache (at checkpoint height).

#### Returns

[`string`, `AccountCacheElement`][]

#### Defined in

node\_modules/.pnpm/@ethereumjs+statemanager@2.3.0/node\_modules/@ethereumjs/statemanager/dist/esm/cache/account.d.ts:49

***

### get()

> **get**(`address`): `undefined` \| `AccountCacheElement`

Returns the queried account or undefined if account doesn't exist

#### Parameters

• **address**: [`EthjsAddress`](../../utils/classes/EthjsAddress.md)

Address of account

#### Returns

`undefined` \| `AccountCacheElement`

#### Defined in

node\_modules/.pnpm/@ethereumjs+statemanager@2.3.0/node\_modules/@ethereumjs/statemanager/dist/esm/cache/account.d.ts:39

***

### put()

> **put**(`address`, `account`): `void`

Puts account to cache under its address.

#### Parameters

• **address**: [`EthjsAddress`](../../utils/classes/EthjsAddress.md)

Address of account

• **account**: `undefined` \| [`EthjsAccount`](../../utils/classes/EthjsAccount.md)

Account or undefined if account doesn't exist in the trie

#### Returns

`void`

#### Defined in

node\_modules/.pnpm/@ethereumjs+statemanager@2.3.0/node\_modules/@ethereumjs/statemanager/dist/esm/cache/account.d.ts:34

***

### revert()

> **revert**(): `void`

Revert changes to cache last checkpoint (no effect on trie).

#### Returns

`void`

#### Defined in

node\_modules/.pnpm/@ethereumjs+statemanager@2.3.0/node\_modules/@ethereumjs/statemanager/dist/esm/cache/account.d.ts:53

***

### size()

> **size**(): `number`

Returns the size of the cache

#### Returns

`number`

#### Defined in

node\_modules/.pnpm/@ethereumjs+statemanager@2.3.0/node\_modules/@ethereumjs/statemanager/dist/esm/cache/account.d.ts:67

***

### stats()

> **stats**(`reset`?): `object`

Returns a dict with cache stats

#### Parameters

• **reset?**: `boolean`

#### Returns

`object`

##### dels

> **dels**: `number`

##### hits

> **hits**: `number`

##### reads

> **reads**: `number`

##### size

> **size**: `number`

##### writes

> **writes**: `number`

#### Defined in

node\_modules/.pnpm/@ethereumjs+statemanager@2.3.0/node\_modules/@ethereumjs/statemanager/dist/esm/cache/account.d.ts:72
