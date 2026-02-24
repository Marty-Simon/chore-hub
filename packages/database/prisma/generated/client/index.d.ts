
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Household
 * 
 */
export type Household = $Result.DefaultSelection<Prisma.$HouseholdPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Chore
 * 
 */
export type Chore = $Result.DefaultSelection<Prisma.$ChorePayload>
/**
 * Model ChoreInstruction
 * 
 */
export type ChoreInstruction = $Result.DefaultSelection<Prisma.$ChoreInstructionPayload>
/**
 * Model ChoreSchedule
 * 
 */
export type ChoreSchedule = $Result.DefaultSelection<Prisma.$ChoreSchedulePayload>
/**
 * Model CalendarConnection
 * 
 */
export type CalendarConnection = $Result.DefaultSelection<Prisma.$CalendarConnectionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RecurrenceType: {
  DAILY: 'DAILY',
  WEEKLY: 'WEEKLY',
  MONTHLY: 'MONTHLY'
};

export type RecurrenceType = (typeof RecurrenceType)[keyof typeof RecurrenceType]


export const ScheduleStatus: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  SKIPPED: 'SKIPPED'
};

export type ScheduleStatus = (typeof ScheduleStatus)[keyof typeof ScheduleStatus]

}

export type RecurrenceType = $Enums.RecurrenceType

export const RecurrenceType: typeof $Enums.RecurrenceType

export type ScheduleStatus = $Enums.ScheduleStatus

export const ScheduleStatus: typeof $Enums.ScheduleStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Households
 * const households = await prisma.household.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Households
   * const households = await prisma.household.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.household`: Exposes CRUD operations for the **Household** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Households
    * const households = await prisma.household.findMany()
    * ```
    */
  get household(): Prisma.HouseholdDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chore`: Exposes CRUD operations for the **Chore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chores
    * const chores = await prisma.chore.findMany()
    * ```
    */
  get chore(): Prisma.ChoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.choreInstruction`: Exposes CRUD operations for the **ChoreInstruction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChoreInstructions
    * const choreInstructions = await prisma.choreInstruction.findMany()
    * ```
    */
  get choreInstruction(): Prisma.ChoreInstructionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.choreSchedule`: Exposes CRUD operations for the **ChoreSchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChoreSchedules
    * const choreSchedules = await prisma.choreSchedule.findMany()
    * ```
    */
  get choreSchedule(): Prisma.ChoreScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.calendarConnection`: Exposes CRUD operations for the **CalendarConnection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CalendarConnections
    * const calendarConnections = await prisma.calendarConnection.findMany()
    * ```
    */
  get calendarConnection(): Prisma.CalendarConnectionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.1
   * Query Engine version: 55ae170b1ced7fc6ed07a15f110549408c501bb3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Household: 'Household',
    User: 'User',
    Chore: 'Chore',
    ChoreInstruction: 'ChoreInstruction',
    ChoreSchedule: 'ChoreSchedule',
    CalendarConnection: 'CalendarConnection'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "household" | "user" | "chore" | "choreInstruction" | "choreSchedule" | "calendarConnection"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Household: {
        payload: Prisma.$HouseholdPayload<ExtArgs>
        fields: Prisma.HouseholdFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HouseholdFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HouseholdFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>
          }
          findFirst: {
            args: Prisma.HouseholdFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HouseholdFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>
          }
          findMany: {
            args: Prisma.HouseholdFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>[]
          }
          create: {
            args: Prisma.HouseholdCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>
          }
          createMany: {
            args: Prisma.HouseholdCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HouseholdCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>[]
          }
          delete: {
            args: Prisma.HouseholdDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>
          }
          update: {
            args: Prisma.HouseholdUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>
          }
          deleteMany: {
            args: Prisma.HouseholdDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HouseholdUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HouseholdUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>[]
          }
          upsert: {
            args: Prisma.HouseholdUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>
          }
          aggregate: {
            args: Prisma.HouseholdAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHousehold>
          }
          groupBy: {
            args: Prisma.HouseholdGroupByArgs<ExtArgs>
            result: $Utils.Optional<HouseholdGroupByOutputType>[]
          }
          count: {
            args: Prisma.HouseholdCountArgs<ExtArgs>
            result: $Utils.Optional<HouseholdCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Chore: {
        payload: Prisma.$ChorePayload<ExtArgs>
        fields: Prisma.ChoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChorePayload>
          }
          findFirst: {
            args: Prisma.ChoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChorePayload>
          }
          findMany: {
            args: Prisma.ChoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChorePayload>[]
          }
          create: {
            args: Prisma.ChoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChorePayload>
          }
          createMany: {
            args: Prisma.ChoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChorePayload>[]
          }
          delete: {
            args: Prisma.ChoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChorePayload>
          }
          update: {
            args: Prisma.ChoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChorePayload>
          }
          deleteMany: {
            args: Prisma.ChoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChorePayload>[]
          }
          upsert: {
            args: Prisma.ChoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChorePayload>
          }
          aggregate: {
            args: Prisma.ChoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChore>
          }
          groupBy: {
            args: Prisma.ChoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChoreCountArgs<ExtArgs>
            result: $Utils.Optional<ChoreCountAggregateOutputType> | number
          }
        }
      }
      ChoreInstruction: {
        payload: Prisma.$ChoreInstructionPayload<ExtArgs>
        fields: Prisma.ChoreInstructionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChoreInstructionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoreInstructionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChoreInstructionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoreInstructionPayload>
          }
          findFirst: {
            args: Prisma.ChoreInstructionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoreInstructionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChoreInstructionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoreInstructionPayload>
          }
          findMany: {
            args: Prisma.ChoreInstructionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoreInstructionPayload>[]
          }
          create: {
            args: Prisma.ChoreInstructionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoreInstructionPayload>
          }
          createMany: {
            args: Prisma.ChoreInstructionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChoreInstructionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoreInstructionPayload>[]
          }
          delete: {
            args: Prisma.ChoreInstructionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoreInstructionPayload>
          }
          update: {
            args: Prisma.ChoreInstructionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoreInstructionPayload>
          }
          deleteMany: {
            args: Prisma.ChoreInstructionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChoreInstructionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChoreInstructionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoreInstructionPayload>[]
          }
          upsert: {
            args: Prisma.ChoreInstructionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoreInstructionPayload>
          }
          aggregate: {
            args: Prisma.ChoreInstructionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChoreInstruction>
          }
          groupBy: {
            args: Prisma.ChoreInstructionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChoreInstructionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChoreInstructionCountArgs<ExtArgs>
            result: $Utils.Optional<ChoreInstructionCountAggregateOutputType> | number
          }
        }
      }
      ChoreSchedule: {
        payload: Prisma.$ChoreSchedulePayload<ExtArgs>
        fields: Prisma.ChoreScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChoreScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoreSchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChoreScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoreSchedulePayload>
          }
          findFirst: {
            args: Prisma.ChoreScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoreSchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChoreScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoreSchedulePayload>
          }
          findMany: {
            args: Prisma.ChoreScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoreSchedulePayload>[]
          }
          create: {
            args: Prisma.ChoreScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoreSchedulePayload>
          }
          createMany: {
            args: Prisma.ChoreScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChoreScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoreSchedulePayload>[]
          }
          delete: {
            args: Prisma.ChoreScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoreSchedulePayload>
          }
          update: {
            args: Prisma.ChoreScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoreSchedulePayload>
          }
          deleteMany: {
            args: Prisma.ChoreScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChoreScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChoreScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoreSchedulePayload>[]
          }
          upsert: {
            args: Prisma.ChoreScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoreSchedulePayload>
          }
          aggregate: {
            args: Prisma.ChoreScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChoreSchedule>
          }
          groupBy: {
            args: Prisma.ChoreScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChoreScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChoreScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<ChoreScheduleCountAggregateOutputType> | number
          }
        }
      }
      CalendarConnection: {
        payload: Prisma.$CalendarConnectionPayload<ExtArgs>
        fields: Prisma.CalendarConnectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CalendarConnectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarConnectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CalendarConnectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarConnectionPayload>
          }
          findFirst: {
            args: Prisma.CalendarConnectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarConnectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CalendarConnectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarConnectionPayload>
          }
          findMany: {
            args: Prisma.CalendarConnectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarConnectionPayload>[]
          }
          create: {
            args: Prisma.CalendarConnectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarConnectionPayload>
          }
          createMany: {
            args: Prisma.CalendarConnectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CalendarConnectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarConnectionPayload>[]
          }
          delete: {
            args: Prisma.CalendarConnectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarConnectionPayload>
          }
          update: {
            args: Prisma.CalendarConnectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarConnectionPayload>
          }
          deleteMany: {
            args: Prisma.CalendarConnectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CalendarConnectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CalendarConnectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarConnectionPayload>[]
          }
          upsert: {
            args: Prisma.CalendarConnectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarConnectionPayload>
          }
          aggregate: {
            args: Prisma.CalendarConnectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCalendarConnection>
          }
          groupBy: {
            args: Prisma.CalendarConnectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CalendarConnectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CalendarConnectionCountArgs<ExtArgs>
            result: $Utils.Optional<CalendarConnectionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    household?: HouseholdOmit
    user?: UserOmit
    chore?: ChoreOmit
    choreInstruction?: ChoreInstructionOmit
    choreSchedule?: ChoreScheduleOmit
    calendarConnection?: CalendarConnectionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type HouseholdCountOutputType
   */

  export type HouseholdCountOutputType = {
    members: number
    chores: number
  }

  export type HouseholdCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | HouseholdCountOutputTypeCountMembersArgs
    chores?: boolean | HouseholdCountOutputTypeCountChoresArgs
  }

  // Custom InputTypes
  /**
   * HouseholdCountOutputType without action
   */
  export type HouseholdCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdCountOutputType
     */
    select?: HouseholdCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HouseholdCountOutputType without action
   */
  export type HouseholdCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * HouseholdCountOutputType without action
   */
  export type HouseholdCountOutputTypeCountChoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChoreWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    assignedChores: number
    calendarConnections: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedChores?: boolean | UserCountOutputTypeCountAssignedChoresArgs
    calendarConnections?: boolean | UserCountOutputTypeCountCalendarConnectionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedChoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChoreScheduleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCalendarConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalendarConnectionWhereInput
  }


  /**
   * Count Type ChoreCountOutputType
   */

  export type ChoreCountOutputType = {
    instructions: number
    schedules: number
  }

  export type ChoreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructions?: boolean | ChoreCountOutputTypeCountInstructionsArgs
    schedules?: boolean | ChoreCountOutputTypeCountSchedulesArgs
  }

  // Custom InputTypes
  /**
   * ChoreCountOutputType without action
   */
  export type ChoreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoreCountOutputType
     */
    select?: ChoreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChoreCountOutputType without action
   */
  export type ChoreCountOutputTypeCountInstructionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChoreInstructionWhereInput
  }

  /**
   * ChoreCountOutputType without action
   */
  export type ChoreCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChoreScheduleWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Household
   */

  export type AggregateHousehold = {
    _count: HouseholdCountAggregateOutputType | null
    _min: HouseholdMinAggregateOutputType | null
    _max: HouseholdMaxAggregateOutputType | null
  }

  export type HouseholdMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HouseholdMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HouseholdCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HouseholdMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HouseholdMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HouseholdCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HouseholdAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Household to aggregate.
     */
    where?: HouseholdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Households to fetch.
     */
    orderBy?: HouseholdOrderByWithRelationInput | HouseholdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HouseholdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Households from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Households.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Households
    **/
    _count?: true | HouseholdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HouseholdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HouseholdMaxAggregateInputType
  }

  export type GetHouseholdAggregateType<T extends HouseholdAggregateArgs> = {
        [P in keyof T & keyof AggregateHousehold]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHousehold[P]>
      : GetScalarType<T[P], AggregateHousehold[P]>
  }




  export type HouseholdGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HouseholdWhereInput
    orderBy?: HouseholdOrderByWithAggregationInput | HouseholdOrderByWithAggregationInput[]
    by: HouseholdScalarFieldEnum[] | HouseholdScalarFieldEnum
    having?: HouseholdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HouseholdCountAggregateInputType | true
    _min?: HouseholdMinAggregateInputType
    _max?: HouseholdMaxAggregateInputType
  }

  export type HouseholdGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: HouseholdCountAggregateOutputType | null
    _min: HouseholdMinAggregateOutputType | null
    _max: HouseholdMaxAggregateOutputType | null
  }

  type GetHouseholdGroupByPayload<T extends HouseholdGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HouseholdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HouseholdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HouseholdGroupByOutputType[P]>
            : GetScalarType<T[P], HouseholdGroupByOutputType[P]>
        }
      >
    >


  export type HouseholdSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    members?: boolean | Household$membersArgs<ExtArgs>
    chores?: boolean | Household$choresArgs<ExtArgs>
    _count?: boolean | HouseholdCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["household"]>

  export type HouseholdSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["household"]>

  export type HouseholdSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["household"]>

  export type HouseholdSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HouseholdOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["household"]>
  export type HouseholdInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Household$membersArgs<ExtArgs>
    chores?: boolean | Household$choresArgs<ExtArgs>
    _count?: boolean | HouseholdCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HouseholdIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type HouseholdIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HouseholdPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Household"
    objects: {
      members: Prisma.$UserPayload<ExtArgs>[]
      chores: Prisma.$ChorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["household"]>
    composites: {}
  }

  type HouseholdGetPayload<S extends boolean | null | undefined | HouseholdDefaultArgs> = $Result.GetResult<Prisma.$HouseholdPayload, S>

  type HouseholdCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HouseholdFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HouseholdCountAggregateInputType | true
    }

  export interface HouseholdDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Household'], meta: { name: 'Household' } }
    /**
     * Find zero or one Household that matches the filter.
     * @param {HouseholdFindUniqueArgs} args - Arguments to find a Household
     * @example
     * // Get one Household
     * const household = await prisma.household.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HouseholdFindUniqueArgs>(args: SelectSubset<T, HouseholdFindUniqueArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Household that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HouseholdFindUniqueOrThrowArgs} args - Arguments to find a Household
     * @example
     * // Get one Household
     * const household = await prisma.household.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HouseholdFindUniqueOrThrowArgs>(args: SelectSubset<T, HouseholdFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Household that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdFindFirstArgs} args - Arguments to find a Household
     * @example
     * // Get one Household
     * const household = await prisma.household.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HouseholdFindFirstArgs>(args?: SelectSubset<T, HouseholdFindFirstArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Household that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdFindFirstOrThrowArgs} args - Arguments to find a Household
     * @example
     * // Get one Household
     * const household = await prisma.household.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HouseholdFindFirstOrThrowArgs>(args?: SelectSubset<T, HouseholdFindFirstOrThrowArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Households that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Households
     * const households = await prisma.household.findMany()
     * 
     * // Get first 10 Households
     * const households = await prisma.household.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const householdWithIdOnly = await prisma.household.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HouseholdFindManyArgs>(args?: SelectSubset<T, HouseholdFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Household.
     * @param {HouseholdCreateArgs} args - Arguments to create a Household.
     * @example
     * // Create one Household
     * const Household = await prisma.household.create({
     *   data: {
     *     // ... data to create a Household
     *   }
     * })
     * 
     */
    create<T extends HouseholdCreateArgs>(args: SelectSubset<T, HouseholdCreateArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Households.
     * @param {HouseholdCreateManyArgs} args - Arguments to create many Households.
     * @example
     * // Create many Households
     * const household = await prisma.household.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HouseholdCreateManyArgs>(args?: SelectSubset<T, HouseholdCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Households and returns the data saved in the database.
     * @param {HouseholdCreateManyAndReturnArgs} args - Arguments to create many Households.
     * @example
     * // Create many Households
     * const household = await prisma.household.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Households and only return the `id`
     * const householdWithIdOnly = await prisma.household.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HouseholdCreateManyAndReturnArgs>(args?: SelectSubset<T, HouseholdCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Household.
     * @param {HouseholdDeleteArgs} args - Arguments to delete one Household.
     * @example
     * // Delete one Household
     * const Household = await prisma.household.delete({
     *   where: {
     *     // ... filter to delete one Household
     *   }
     * })
     * 
     */
    delete<T extends HouseholdDeleteArgs>(args: SelectSubset<T, HouseholdDeleteArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Household.
     * @param {HouseholdUpdateArgs} args - Arguments to update one Household.
     * @example
     * // Update one Household
     * const household = await prisma.household.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HouseholdUpdateArgs>(args: SelectSubset<T, HouseholdUpdateArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Households.
     * @param {HouseholdDeleteManyArgs} args - Arguments to filter Households to delete.
     * @example
     * // Delete a few Households
     * const { count } = await prisma.household.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HouseholdDeleteManyArgs>(args?: SelectSubset<T, HouseholdDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Households.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Households
     * const household = await prisma.household.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HouseholdUpdateManyArgs>(args: SelectSubset<T, HouseholdUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Households and returns the data updated in the database.
     * @param {HouseholdUpdateManyAndReturnArgs} args - Arguments to update many Households.
     * @example
     * // Update many Households
     * const household = await prisma.household.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Households and only return the `id`
     * const householdWithIdOnly = await prisma.household.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HouseholdUpdateManyAndReturnArgs>(args: SelectSubset<T, HouseholdUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Household.
     * @param {HouseholdUpsertArgs} args - Arguments to update or create a Household.
     * @example
     * // Update or create a Household
     * const household = await prisma.household.upsert({
     *   create: {
     *     // ... data to create a Household
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Household we want to update
     *   }
     * })
     */
    upsert<T extends HouseholdUpsertArgs>(args: SelectSubset<T, HouseholdUpsertArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Households.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdCountArgs} args - Arguments to filter Households to count.
     * @example
     * // Count the number of Households
     * const count = await prisma.household.count({
     *   where: {
     *     // ... the filter for the Households we want to count
     *   }
     * })
    **/
    count<T extends HouseholdCountArgs>(
      args?: Subset<T, HouseholdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HouseholdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Household.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HouseholdAggregateArgs>(args: Subset<T, HouseholdAggregateArgs>): Prisma.PrismaPromise<GetHouseholdAggregateType<T>>

    /**
     * Group by Household.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HouseholdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HouseholdGroupByArgs['orderBy'] }
        : { orderBy?: HouseholdGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HouseholdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHouseholdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Household model
   */
  readonly fields: HouseholdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Household.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HouseholdClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Household$membersArgs<ExtArgs> = {}>(args?: Subset<T, Household$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chores<T extends Household$choresArgs<ExtArgs> = {}>(args?: Subset<T, Household$choresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Household model
   */
  interface HouseholdFieldRefs {
    readonly id: FieldRef<"Household", 'String'>
    readonly name: FieldRef<"Household", 'String'>
    readonly createdAt: FieldRef<"Household", 'DateTime'>
    readonly updatedAt: FieldRef<"Household", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Household findUnique
   */
  export type HouseholdFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * Filter, which Household to fetch.
     */
    where: HouseholdWhereUniqueInput
  }

  /**
   * Household findUniqueOrThrow
   */
  export type HouseholdFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * Filter, which Household to fetch.
     */
    where: HouseholdWhereUniqueInput
  }

  /**
   * Household findFirst
   */
  export type HouseholdFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * Filter, which Household to fetch.
     */
    where?: HouseholdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Households to fetch.
     */
    orderBy?: HouseholdOrderByWithRelationInput | HouseholdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Households.
     */
    cursor?: HouseholdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Households from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Households.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Households.
     */
    distinct?: HouseholdScalarFieldEnum | HouseholdScalarFieldEnum[]
  }

  /**
   * Household findFirstOrThrow
   */
  export type HouseholdFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * Filter, which Household to fetch.
     */
    where?: HouseholdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Households to fetch.
     */
    orderBy?: HouseholdOrderByWithRelationInput | HouseholdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Households.
     */
    cursor?: HouseholdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Households from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Households.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Households.
     */
    distinct?: HouseholdScalarFieldEnum | HouseholdScalarFieldEnum[]
  }

  /**
   * Household findMany
   */
  export type HouseholdFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * Filter, which Households to fetch.
     */
    where?: HouseholdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Households to fetch.
     */
    orderBy?: HouseholdOrderByWithRelationInput | HouseholdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Households.
     */
    cursor?: HouseholdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Households from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Households.
     */
    skip?: number
    distinct?: HouseholdScalarFieldEnum | HouseholdScalarFieldEnum[]
  }

  /**
   * Household create
   */
  export type HouseholdCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * The data needed to create a Household.
     */
    data: XOR<HouseholdCreateInput, HouseholdUncheckedCreateInput>
  }

  /**
   * Household createMany
   */
  export type HouseholdCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Households.
     */
    data: HouseholdCreateManyInput | HouseholdCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Household createManyAndReturn
   */
  export type HouseholdCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * The data used to create many Households.
     */
    data: HouseholdCreateManyInput | HouseholdCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Household update
   */
  export type HouseholdUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * The data needed to update a Household.
     */
    data: XOR<HouseholdUpdateInput, HouseholdUncheckedUpdateInput>
    /**
     * Choose, which Household to update.
     */
    where: HouseholdWhereUniqueInput
  }

  /**
   * Household updateMany
   */
  export type HouseholdUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Households.
     */
    data: XOR<HouseholdUpdateManyMutationInput, HouseholdUncheckedUpdateManyInput>
    /**
     * Filter which Households to update
     */
    where?: HouseholdWhereInput
    /**
     * Limit how many Households to update.
     */
    limit?: number
  }

  /**
   * Household updateManyAndReturn
   */
  export type HouseholdUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * The data used to update Households.
     */
    data: XOR<HouseholdUpdateManyMutationInput, HouseholdUncheckedUpdateManyInput>
    /**
     * Filter which Households to update
     */
    where?: HouseholdWhereInput
    /**
     * Limit how many Households to update.
     */
    limit?: number
  }

  /**
   * Household upsert
   */
  export type HouseholdUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * The filter to search for the Household to update in case it exists.
     */
    where: HouseholdWhereUniqueInput
    /**
     * In case the Household found by the `where` argument doesn't exist, create a new Household with this data.
     */
    create: XOR<HouseholdCreateInput, HouseholdUncheckedCreateInput>
    /**
     * In case the Household was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HouseholdUpdateInput, HouseholdUncheckedUpdateInput>
  }

  /**
   * Household delete
   */
  export type HouseholdDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * Filter which Household to delete.
     */
    where: HouseholdWhereUniqueInput
  }

  /**
   * Household deleteMany
   */
  export type HouseholdDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Households to delete
     */
    where?: HouseholdWhereInput
    /**
     * Limit how many Households to delete.
     */
    limit?: number
  }

  /**
   * Household.members
   */
  export type Household$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Household.chores
   */
  export type Household$choresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chore
     */
    select?: ChoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chore
     */
    omit?: ChoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInclude<ExtArgs> | null
    where?: ChoreWhereInput
    orderBy?: ChoreOrderByWithRelationInput | ChoreOrderByWithRelationInput[]
    cursor?: ChoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChoreScalarFieldEnum | ChoreScalarFieldEnum[]
  }

  /**
   * Household without action
   */
  export type HouseholdDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    householdId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    householdId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    householdId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    householdId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    householdId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    householdId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    householdId: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    householdId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    assignedChores?: boolean | User$assignedChoresArgs<ExtArgs>
    calendarConnections?: boolean | User$calendarConnectionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    householdId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    householdId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    householdId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "householdId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    assignedChores?: boolean | User$assignedChoresArgs<ExtArgs>
    calendarConnections?: boolean | User$calendarConnectionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      household: Prisma.$HouseholdPayload<ExtArgs>
      assignedChores: Prisma.$ChoreSchedulePayload<ExtArgs>[]
      calendarConnections: Prisma.$CalendarConnectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      householdId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    household<T extends HouseholdDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HouseholdDefaultArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignedChores<T extends User$assignedChoresArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedChoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoreSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    calendarConnections<T extends User$calendarConnectionsArgs<ExtArgs> = {}>(args?: Subset<T, User$calendarConnectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarConnectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly householdId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.assignedChores
   */
  export type User$assignedChoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoreSchedule
     */
    select?: ChoreScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoreSchedule
     */
    omit?: ChoreScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreScheduleInclude<ExtArgs> | null
    where?: ChoreScheduleWhereInput
    orderBy?: ChoreScheduleOrderByWithRelationInput | ChoreScheduleOrderByWithRelationInput[]
    cursor?: ChoreScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChoreScheduleScalarFieldEnum | ChoreScheduleScalarFieldEnum[]
  }

  /**
   * User.calendarConnections
   */
  export type User$calendarConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarConnection
     */
    select?: CalendarConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarConnection
     */
    omit?: CalendarConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarConnectionInclude<ExtArgs> | null
    where?: CalendarConnectionWhereInput
    orderBy?: CalendarConnectionOrderByWithRelationInput | CalendarConnectionOrderByWithRelationInput[]
    cursor?: CalendarConnectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CalendarConnectionScalarFieldEnum | CalendarConnectionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Chore
   */

  export type AggregateChore = {
    _count: ChoreCountAggregateOutputType | null
    _avg: ChoreAvgAggregateOutputType | null
    _sum: ChoreSumAggregateOutputType | null
    _min: ChoreMinAggregateOutputType | null
    _max: ChoreMaxAggregateOutputType | null
  }

  export type ChoreAvgAggregateOutputType = {
    recurrenceValue: number | null
    selectedWeekdays: number | null
    estimatedMinutes: number | null
    scheduledTime: number | null
  }

  export type ChoreSumAggregateOutputType = {
    recurrenceValue: number | null
    selectedWeekdays: number[]
    estimatedMinutes: number | null
    scheduledTime: number | null
  }

  export type ChoreMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    householdId: string | null
    recurrence: $Enums.RecurrenceType | null
    recurrenceValue: number | null
    estimatedMinutes: number | null
    scheduledTime: number | null
    isPrivate: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChoreMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    householdId: string | null
    recurrence: $Enums.RecurrenceType | null
    recurrenceValue: number | null
    estimatedMinutes: number | null
    scheduledTime: number | null
    isPrivate: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChoreCountAggregateOutputType = {
    id: number
    title: number
    description: number
    descriptionList: number
    householdId: number
    recurrence: number
    recurrenceValue: number
    selectedWeekdays: number
    estimatedMinutes: number
    scheduledTime: number
    isPrivate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChoreAvgAggregateInputType = {
    recurrenceValue?: true
    selectedWeekdays?: true
    estimatedMinutes?: true
    scheduledTime?: true
  }

  export type ChoreSumAggregateInputType = {
    recurrenceValue?: true
    selectedWeekdays?: true
    estimatedMinutes?: true
    scheduledTime?: true
  }

  export type ChoreMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    householdId?: true
    recurrence?: true
    recurrenceValue?: true
    estimatedMinutes?: true
    scheduledTime?: true
    isPrivate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChoreMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    householdId?: true
    recurrence?: true
    recurrenceValue?: true
    estimatedMinutes?: true
    scheduledTime?: true
    isPrivate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChoreCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    descriptionList?: true
    householdId?: true
    recurrence?: true
    recurrenceValue?: true
    selectedWeekdays?: true
    estimatedMinutes?: true
    scheduledTime?: true
    isPrivate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chore to aggregate.
     */
    where?: ChoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chores to fetch.
     */
    orderBy?: ChoreOrderByWithRelationInput | ChoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chores
    **/
    _count?: true | ChoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChoreMaxAggregateInputType
  }

  export type GetChoreAggregateType<T extends ChoreAggregateArgs> = {
        [P in keyof T & keyof AggregateChore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChore[P]>
      : GetScalarType<T[P], AggregateChore[P]>
  }




  export type ChoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChoreWhereInput
    orderBy?: ChoreOrderByWithAggregationInput | ChoreOrderByWithAggregationInput[]
    by: ChoreScalarFieldEnum[] | ChoreScalarFieldEnum
    having?: ChoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChoreCountAggregateInputType | true
    _avg?: ChoreAvgAggregateInputType
    _sum?: ChoreSumAggregateInputType
    _min?: ChoreMinAggregateInputType
    _max?: ChoreMaxAggregateInputType
  }

  export type ChoreGroupByOutputType = {
    id: string
    title: string
    description: string | null
    descriptionList: string[]
    householdId: string
    recurrence: $Enums.RecurrenceType
    recurrenceValue: number
    selectedWeekdays: number[]
    estimatedMinutes: number | null
    scheduledTime: number | null
    isPrivate: boolean
    createdAt: Date
    updatedAt: Date
    _count: ChoreCountAggregateOutputType | null
    _avg: ChoreAvgAggregateOutputType | null
    _sum: ChoreSumAggregateOutputType | null
    _min: ChoreMinAggregateOutputType | null
    _max: ChoreMaxAggregateOutputType | null
  }

  type GetChoreGroupByPayload<T extends ChoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChoreGroupByOutputType[P]>
            : GetScalarType<T[P], ChoreGroupByOutputType[P]>
        }
      >
    >


  export type ChoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    descriptionList?: boolean
    householdId?: boolean
    recurrence?: boolean
    recurrenceValue?: boolean
    selectedWeekdays?: boolean
    estimatedMinutes?: boolean
    scheduledTime?: boolean
    isPrivate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    instructions?: boolean | Chore$instructionsArgs<ExtArgs>
    schedules?: boolean | Chore$schedulesArgs<ExtArgs>
    _count?: boolean | ChoreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chore"]>

  export type ChoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    descriptionList?: boolean
    householdId?: boolean
    recurrence?: boolean
    recurrenceValue?: boolean
    selectedWeekdays?: boolean
    estimatedMinutes?: boolean
    scheduledTime?: boolean
    isPrivate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chore"]>

  export type ChoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    descriptionList?: boolean
    householdId?: boolean
    recurrence?: boolean
    recurrenceValue?: boolean
    selectedWeekdays?: boolean
    estimatedMinutes?: boolean
    scheduledTime?: boolean
    isPrivate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chore"]>

  export type ChoreSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    descriptionList?: boolean
    householdId?: boolean
    recurrence?: boolean
    recurrenceValue?: boolean
    selectedWeekdays?: boolean
    estimatedMinutes?: boolean
    scheduledTime?: boolean
    isPrivate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "descriptionList" | "householdId" | "recurrence" | "recurrenceValue" | "selectedWeekdays" | "estimatedMinutes" | "scheduledTime" | "isPrivate" | "createdAt" | "updatedAt", ExtArgs["result"]["chore"]>
  export type ChoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    instructions?: boolean | Chore$instructionsArgs<ExtArgs>
    schedules?: boolean | Chore$schedulesArgs<ExtArgs>
    _count?: boolean | ChoreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
  }
  export type ChoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
  }

  export type $ChorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chore"
    objects: {
      household: Prisma.$HouseholdPayload<ExtArgs>
      instructions: Prisma.$ChoreInstructionPayload<ExtArgs>[]
      schedules: Prisma.$ChoreSchedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      descriptionList: string[]
      householdId: string
      recurrence: $Enums.RecurrenceType
      recurrenceValue: number
      selectedWeekdays: number[]
      estimatedMinutes: number | null
      scheduledTime: number | null
      isPrivate: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chore"]>
    composites: {}
  }

  type ChoreGetPayload<S extends boolean | null | undefined | ChoreDefaultArgs> = $Result.GetResult<Prisma.$ChorePayload, S>

  type ChoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChoreCountAggregateInputType | true
    }

  export interface ChoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chore'], meta: { name: 'Chore' } }
    /**
     * Find zero or one Chore that matches the filter.
     * @param {ChoreFindUniqueArgs} args - Arguments to find a Chore
     * @example
     * // Get one Chore
     * const chore = await prisma.chore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChoreFindUniqueArgs>(args: SelectSubset<T, ChoreFindUniqueArgs<ExtArgs>>): Prisma__ChoreClient<$Result.GetResult<Prisma.$ChorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chore that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChoreFindUniqueOrThrowArgs} args - Arguments to find a Chore
     * @example
     * // Get one Chore
     * const chore = await prisma.chore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChoreFindUniqueOrThrowArgs>(args: SelectSubset<T, ChoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChoreClient<$Result.GetResult<Prisma.$ChorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoreFindFirstArgs} args - Arguments to find a Chore
     * @example
     * // Get one Chore
     * const chore = await prisma.chore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChoreFindFirstArgs>(args?: SelectSubset<T, ChoreFindFirstArgs<ExtArgs>>): Prisma__ChoreClient<$Result.GetResult<Prisma.$ChorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoreFindFirstOrThrowArgs} args - Arguments to find a Chore
     * @example
     * // Get one Chore
     * const chore = await prisma.chore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChoreFindFirstOrThrowArgs>(args?: SelectSubset<T, ChoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChoreClient<$Result.GetResult<Prisma.$ChorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chores
     * const chores = await prisma.chore.findMany()
     * 
     * // Get first 10 Chores
     * const chores = await prisma.chore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const choreWithIdOnly = await prisma.chore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChoreFindManyArgs>(args?: SelectSubset<T, ChoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chore.
     * @param {ChoreCreateArgs} args - Arguments to create a Chore.
     * @example
     * // Create one Chore
     * const Chore = await prisma.chore.create({
     *   data: {
     *     // ... data to create a Chore
     *   }
     * })
     * 
     */
    create<T extends ChoreCreateArgs>(args: SelectSubset<T, ChoreCreateArgs<ExtArgs>>): Prisma__ChoreClient<$Result.GetResult<Prisma.$ChorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chores.
     * @param {ChoreCreateManyArgs} args - Arguments to create many Chores.
     * @example
     * // Create many Chores
     * const chore = await prisma.chore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChoreCreateManyArgs>(args?: SelectSubset<T, ChoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chores and returns the data saved in the database.
     * @param {ChoreCreateManyAndReturnArgs} args - Arguments to create many Chores.
     * @example
     * // Create many Chores
     * const chore = await prisma.chore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chores and only return the `id`
     * const choreWithIdOnly = await prisma.chore.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChoreCreateManyAndReturnArgs>(args?: SelectSubset<T, ChoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chore.
     * @param {ChoreDeleteArgs} args - Arguments to delete one Chore.
     * @example
     * // Delete one Chore
     * const Chore = await prisma.chore.delete({
     *   where: {
     *     // ... filter to delete one Chore
     *   }
     * })
     * 
     */
    delete<T extends ChoreDeleteArgs>(args: SelectSubset<T, ChoreDeleteArgs<ExtArgs>>): Prisma__ChoreClient<$Result.GetResult<Prisma.$ChorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chore.
     * @param {ChoreUpdateArgs} args - Arguments to update one Chore.
     * @example
     * // Update one Chore
     * const chore = await prisma.chore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChoreUpdateArgs>(args: SelectSubset<T, ChoreUpdateArgs<ExtArgs>>): Prisma__ChoreClient<$Result.GetResult<Prisma.$ChorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chores.
     * @param {ChoreDeleteManyArgs} args - Arguments to filter Chores to delete.
     * @example
     * // Delete a few Chores
     * const { count } = await prisma.chore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChoreDeleteManyArgs>(args?: SelectSubset<T, ChoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chores
     * const chore = await prisma.chore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChoreUpdateManyArgs>(args: SelectSubset<T, ChoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chores and returns the data updated in the database.
     * @param {ChoreUpdateManyAndReturnArgs} args - Arguments to update many Chores.
     * @example
     * // Update many Chores
     * const chore = await prisma.chore.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chores and only return the `id`
     * const choreWithIdOnly = await prisma.chore.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChoreUpdateManyAndReturnArgs>(args: SelectSubset<T, ChoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chore.
     * @param {ChoreUpsertArgs} args - Arguments to update or create a Chore.
     * @example
     * // Update or create a Chore
     * const chore = await prisma.chore.upsert({
     *   create: {
     *     // ... data to create a Chore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chore we want to update
     *   }
     * })
     */
    upsert<T extends ChoreUpsertArgs>(args: SelectSubset<T, ChoreUpsertArgs<ExtArgs>>): Prisma__ChoreClient<$Result.GetResult<Prisma.$ChorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoreCountArgs} args - Arguments to filter Chores to count.
     * @example
     * // Count the number of Chores
     * const count = await prisma.chore.count({
     *   where: {
     *     // ... the filter for the Chores we want to count
     *   }
     * })
    **/
    count<T extends ChoreCountArgs>(
      args?: Subset<T, ChoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChoreAggregateArgs>(args: Subset<T, ChoreAggregateArgs>): Prisma.PrismaPromise<GetChoreAggregateType<T>>

    /**
     * Group by Chore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChoreGroupByArgs['orderBy'] }
        : { orderBy?: ChoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chore model
   */
  readonly fields: ChoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    household<T extends HouseholdDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HouseholdDefaultArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    instructions<T extends Chore$instructionsArgs<ExtArgs> = {}>(args?: Subset<T, Chore$instructionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoreInstructionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedules<T extends Chore$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, Chore$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoreSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Chore model
   */
  interface ChoreFieldRefs {
    readonly id: FieldRef<"Chore", 'String'>
    readonly title: FieldRef<"Chore", 'String'>
    readonly description: FieldRef<"Chore", 'String'>
    readonly descriptionList: FieldRef<"Chore", 'String[]'>
    readonly householdId: FieldRef<"Chore", 'String'>
    readonly recurrence: FieldRef<"Chore", 'RecurrenceType'>
    readonly recurrenceValue: FieldRef<"Chore", 'Int'>
    readonly selectedWeekdays: FieldRef<"Chore", 'Int[]'>
    readonly estimatedMinutes: FieldRef<"Chore", 'Int'>
    readonly scheduledTime: FieldRef<"Chore", 'Int'>
    readonly isPrivate: FieldRef<"Chore", 'Boolean'>
    readonly createdAt: FieldRef<"Chore", 'DateTime'>
    readonly updatedAt: FieldRef<"Chore", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Chore findUnique
   */
  export type ChoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chore
     */
    select?: ChoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chore
     */
    omit?: ChoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInclude<ExtArgs> | null
    /**
     * Filter, which Chore to fetch.
     */
    where: ChoreWhereUniqueInput
  }

  /**
   * Chore findUniqueOrThrow
   */
  export type ChoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chore
     */
    select?: ChoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chore
     */
    omit?: ChoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInclude<ExtArgs> | null
    /**
     * Filter, which Chore to fetch.
     */
    where: ChoreWhereUniqueInput
  }

  /**
   * Chore findFirst
   */
  export type ChoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chore
     */
    select?: ChoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chore
     */
    omit?: ChoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInclude<ExtArgs> | null
    /**
     * Filter, which Chore to fetch.
     */
    where?: ChoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chores to fetch.
     */
    orderBy?: ChoreOrderByWithRelationInput | ChoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chores.
     */
    cursor?: ChoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chores.
     */
    distinct?: ChoreScalarFieldEnum | ChoreScalarFieldEnum[]
  }

  /**
   * Chore findFirstOrThrow
   */
  export type ChoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chore
     */
    select?: ChoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chore
     */
    omit?: ChoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInclude<ExtArgs> | null
    /**
     * Filter, which Chore to fetch.
     */
    where?: ChoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chores to fetch.
     */
    orderBy?: ChoreOrderByWithRelationInput | ChoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chores.
     */
    cursor?: ChoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chores.
     */
    distinct?: ChoreScalarFieldEnum | ChoreScalarFieldEnum[]
  }

  /**
   * Chore findMany
   */
  export type ChoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chore
     */
    select?: ChoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chore
     */
    omit?: ChoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInclude<ExtArgs> | null
    /**
     * Filter, which Chores to fetch.
     */
    where?: ChoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chores to fetch.
     */
    orderBy?: ChoreOrderByWithRelationInput | ChoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chores.
     */
    cursor?: ChoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chores.
     */
    skip?: number
    distinct?: ChoreScalarFieldEnum | ChoreScalarFieldEnum[]
  }

  /**
   * Chore create
   */
  export type ChoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chore
     */
    select?: ChoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chore
     */
    omit?: ChoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInclude<ExtArgs> | null
    /**
     * The data needed to create a Chore.
     */
    data: XOR<ChoreCreateInput, ChoreUncheckedCreateInput>
  }

  /**
   * Chore createMany
   */
  export type ChoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chores.
     */
    data: ChoreCreateManyInput | ChoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chore createManyAndReturn
   */
  export type ChoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chore
     */
    select?: ChoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chore
     */
    omit?: ChoreOmit<ExtArgs> | null
    /**
     * The data used to create many Chores.
     */
    data: ChoreCreateManyInput | ChoreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chore update
   */
  export type ChoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chore
     */
    select?: ChoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chore
     */
    omit?: ChoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInclude<ExtArgs> | null
    /**
     * The data needed to update a Chore.
     */
    data: XOR<ChoreUpdateInput, ChoreUncheckedUpdateInput>
    /**
     * Choose, which Chore to update.
     */
    where: ChoreWhereUniqueInput
  }

  /**
   * Chore updateMany
   */
  export type ChoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chores.
     */
    data: XOR<ChoreUpdateManyMutationInput, ChoreUncheckedUpdateManyInput>
    /**
     * Filter which Chores to update
     */
    where?: ChoreWhereInput
    /**
     * Limit how many Chores to update.
     */
    limit?: number
  }

  /**
   * Chore updateManyAndReturn
   */
  export type ChoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chore
     */
    select?: ChoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chore
     */
    omit?: ChoreOmit<ExtArgs> | null
    /**
     * The data used to update Chores.
     */
    data: XOR<ChoreUpdateManyMutationInput, ChoreUncheckedUpdateManyInput>
    /**
     * Filter which Chores to update
     */
    where?: ChoreWhereInput
    /**
     * Limit how many Chores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chore upsert
   */
  export type ChoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chore
     */
    select?: ChoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chore
     */
    omit?: ChoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInclude<ExtArgs> | null
    /**
     * The filter to search for the Chore to update in case it exists.
     */
    where: ChoreWhereUniqueInput
    /**
     * In case the Chore found by the `where` argument doesn't exist, create a new Chore with this data.
     */
    create: XOR<ChoreCreateInput, ChoreUncheckedCreateInput>
    /**
     * In case the Chore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChoreUpdateInput, ChoreUncheckedUpdateInput>
  }

  /**
   * Chore delete
   */
  export type ChoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chore
     */
    select?: ChoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chore
     */
    omit?: ChoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInclude<ExtArgs> | null
    /**
     * Filter which Chore to delete.
     */
    where: ChoreWhereUniqueInput
  }

  /**
   * Chore deleteMany
   */
  export type ChoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chores to delete
     */
    where?: ChoreWhereInput
    /**
     * Limit how many Chores to delete.
     */
    limit?: number
  }

  /**
   * Chore.instructions
   */
  export type Chore$instructionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoreInstruction
     */
    select?: ChoreInstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoreInstruction
     */
    omit?: ChoreInstructionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInstructionInclude<ExtArgs> | null
    where?: ChoreInstructionWhereInput
    orderBy?: ChoreInstructionOrderByWithRelationInput | ChoreInstructionOrderByWithRelationInput[]
    cursor?: ChoreInstructionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChoreInstructionScalarFieldEnum | ChoreInstructionScalarFieldEnum[]
  }

  /**
   * Chore.schedules
   */
  export type Chore$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoreSchedule
     */
    select?: ChoreScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoreSchedule
     */
    omit?: ChoreScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreScheduleInclude<ExtArgs> | null
    where?: ChoreScheduleWhereInput
    orderBy?: ChoreScheduleOrderByWithRelationInput | ChoreScheduleOrderByWithRelationInput[]
    cursor?: ChoreScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChoreScheduleScalarFieldEnum | ChoreScheduleScalarFieldEnum[]
  }

  /**
   * Chore without action
   */
  export type ChoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chore
     */
    select?: ChoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chore
     */
    omit?: ChoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInclude<ExtArgs> | null
  }


  /**
   * Model ChoreInstruction
   */

  export type AggregateChoreInstruction = {
    _count: ChoreInstructionCountAggregateOutputType | null
    _avg: ChoreInstructionAvgAggregateOutputType | null
    _sum: ChoreInstructionSumAggregateOutputType | null
    _min: ChoreInstructionMinAggregateOutputType | null
    _max: ChoreInstructionMaxAggregateOutputType | null
  }

  export type ChoreInstructionAvgAggregateOutputType = {
    stepNumber: number | null
  }

  export type ChoreInstructionSumAggregateOutputType = {
    stepNumber: number | null
  }

  export type ChoreInstructionMinAggregateOutputType = {
    id: string | null
    choreId: string | null
    stepNumber: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChoreInstructionMaxAggregateOutputType = {
    id: string | null
    choreId: string | null
    stepNumber: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChoreInstructionCountAggregateOutputType = {
    id: number
    choreId: number
    stepNumber: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChoreInstructionAvgAggregateInputType = {
    stepNumber?: true
  }

  export type ChoreInstructionSumAggregateInputType = {
    stepNumber?: true
  }

  export type ChoreInstructionMinAggregateInputType = {
    id?: true
    choreId?: true
    stepNumber?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChoreInstructionMaxAggregateInputType = {
    id?: true
    choreId?: true
    stepNumber?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChoreInstructionCountAggregateInputType = {
    id?: true
    choreId?: true
    stepNumber?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChoreInstructionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChoreInstruction to aggregate.
     */
    where?: ChoreInstructionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChoreInstructions to fetch.
     */
    orderBy?: ChoreInstructionOrderByWithRelationInput | ChoreInstructionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChoreInstructionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChoreInstructions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChoreInstructions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChoreInstructions
    **/
    _count?: true | ChoreInstructionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChoreInstructionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChoreInstructionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChoreInstructionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChoreInstructionMaxAggregateInputType
  }

  export type GetChoreInstructionAggregateType<T extends ChoreInstructionAggregateArgs> = {
        [P in keyof T & keyof AggregateChoreInstruction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChoreInstruction[P]>
      : GetScalarType<T[P], AggregateChoreInstruction[P]>
  }




  export type ChoreInstructionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChoreInstructionWhereInput
    orderBy?: ChoreInstructionOrderByWithAggregationInput | ChoreInstructionOrderByWithAggregationInput[]
    by: ChoreInstructionScalarFieldEnum[] | ChoreInstructionScalarFieldEnum
    having?: ChoreInstructionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChoreInstructionCountAggregateInputType | true
    _avg?: ChoreInstructionAvgAggregateInputType
    _sum?: ChoreInstructionSumAggregateInputType
    _min?: ChoreInstructionMinAggregateInputType
    _max?: ChoreInstructionMaxAggregateInputType
  }

  export type ChoreInstructionGroupByOutputType = {
    id: string
    choreId: string
    stepNumber: number
    description: string
    createdAt: Date
    updatedAt: Date
    _count: ChoreInstructionCountAggregateOutputType | null
    _avg: ChoreInstructionAvgAggregateOutputType | null
    _sum: ChoreInstructionSumAggregateOutputType | null
    _min: ChoreInstructionMinAggregateOutputType | null
    _max: ChoreInstructionMaxAggregateOutputType | null
  }

  type GetChoreInstructionGroupByPayload<T extends ChoreInstructionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChoreInstructionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChoreInstructionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChoreInstructionGroupByOutputType[P]>
            : GetScalarType<T[P], ChoreInstructionGroupByOutputType[P]>
        }
      >
    >


  export type ChoreInstructionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    choreId?: boolean
    stepNumber?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chore?: boolean | ChoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["choreInstruction"]>

  export type ChoreInstructionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    choreId?: boolean
    stepNumber?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chore?: boolean | ChoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["choreInstruction"]>

  export type ChoreInstructionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    choreId?: boolean
    stepNumber?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chore?: boolean | ChoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["choreInstruction"]>

  export type ChoreInstructionSelectScalar = {
    id?: boolean
    choreId?: boolean
    stepNumber?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChoreInstructionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "choreId" | "stepNumber" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["choreInstruction"]>
  export type ChoreInstructionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chore?: boolean | ChoreDefaultArgs<ExtArgs>
  }
  export type ChoreInstructionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chore?: boolean | ChoreDefaultArgs<ExtArgs>
  }
  export type ChoreInstructionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chore?: boolean | ChoreDefaultArgs<ExtArgs>
  }

  export type $ChoreInstructionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChoreInstruction"
    objects: {
      chore: Prisma.$ChorePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      choreId: string
      stepNumber: number
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["choreInstruction"]>
    composites: {}
  }

  type ChoreInstructionGetPayload<S extends boolean | null | undefined | ChoreInstructionDefaultArgs> = $Result.GetResult<Prisma.$ChoreInstructionPayload, S>

  type ChoreInstructionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChoreInstructionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChoreInstructionCountAggregateInputType | true
    }

  export interface ChoreInstructionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChoreInstruction'], meta: { name: 'ChoreInstruction' } }
    /**
     * Find zero or one ChoreInstruction that matches the filter.
     * @param {ChoreInstructionFindUniqueArgs} args - Arguments to find a ChoreInstruction
     * @example
     * // Get one ChoreInstruction
     * const choreInstruction = await prisma.choreInstruction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChoreInstructionFindUniqueArgs>(args: SelectSubset<T, ChoreInstructionFindUniqueArgs<ExtArgs>>): Prisma__ChoreInstructionClient<$Result.GetResult<Prisma.$ChoreInstructionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChoreInstruction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChoreInstructionFindUniqueOrThrowArgs} args - Arguments to find a ChoreInstruction
     * @example
     * // Get one ChoreInstruction
     * const choreInstruction = await prisma.choreInstruction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChoreInstructionFindUniqueOrThrowArgs>(args: SelectSubset<T, ChoreInstructionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChoreInstructionClient<$Result.GetResult<Prisma.$ChoreInstructionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChoreInstruction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoreInstructionFindFirstArgs} args - Arguments to find a ChoreInstruction
     * @example
     * // Get one ChoreInstruction
     * const choreInstruction = await prisma.choreInstruction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChoreInstructionFindFirstArgs>(args?: SelectSubset<T, ChoreInstructionFindFirstArgs<ExtArgs>>): Prisma__ChoreInstructionClient<$Result.GetResult<Prisma.$ChoreInstructionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChoreInstruction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoreInstructionFindFirstOrThrowArgs} args - Arguments to find a ChoreInstruction
     * @example
     * // Get one ChoreInstruction
     * const choreInstruction = await prisma.choreInstruction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChoreInstructionFindFirstOrThrowArgs>(args?: SelectSubset<T, ChoreInstructionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChoreInstructionClient<$Result.GetResult<Prisma.$ChoreInstructionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChoreInstructions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoreInstructionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChoreInstructions
     * const choreInstructions = await prisma.choreInstruction.findMany()
     * 
     * // Get first 10 ChoreInstructions
     * const choreInstructions = await prisma.choreInstruction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const choreInstructionWithIdOnly = await prisma.choreInstruction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChoreInstructionFindManyArgs>(args?: SelectSubset<T, ChoreInstructionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoreInstructionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChoreInstruction.
     * @param {ChoreInstructionCreateArgs} args - Arguments to create a ChoreInstruction.
     * @example
     * // Create one ChoreInstruction
     * const ChoreInstruction = await prisma.choreInstruction.create({
     *   data: {
     *     // ... data to create a ChoreInstruction
     *   }
     * })
     * 
     */
    create<T extends ChoreInstructionCreateArgs>(args: SelectSubset<T, ChoreInstructionCreateArgs<ExtArgs>>): Prisma__ChoreInstructionClient<$Result.GetResult<Prisma.$ChoreInstructionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChoreInstructions.
     * @param {ChoreInstructionCreateManyArgs} args - Arguments to create many ChoreInstructions.
     * @example
     * // Create many ChoreInstructions
     * const choreInstruction = await prisma.choreInstruction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChoreInstructionCreateManyArgs>(args?: SelectSubset<T, ChoreInstructionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChoreInstructions and returns the data saved in the database.
     * @param {ChoreInstructionCreateManyAndReturnArgs} args - Arguments to create many ChoreInstructions.
     * @example
     * // Create many ChoreInstructions
     * const choreInstruction = await prisma.choreInstruction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChoreInstructions and only return the `id`
     * const choreInstructionWithIdOnly = await prisma.choreInstruction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChoreInstructionCreateManyAndReturnArgs>(args?: SelectSubset<T, ChoreInstructionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoreInstructionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChoreInstruction.
     * @param {ChoreInstructionDeleteArgs} args - Arguments to delete one ChoreInstruction.
     * @example
     * // Delete one ChoreInstruction
     * const ChoreInstruction = await prisma.choreInstruction.delete({
     *   where: {
     *     // ... filter to delete one ChoreInstruction
     *   }
     * })
     * 
     */
    delete<T extends ChoreInstructionDeleteArgs>(args: SelectSubset<T, ChoreInstructionDeleteArgs<ExtArgs>>): Prisma__ChoreInstructionClient<$Result.GetResult<Prisma.$ChoreInstructionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChoreInstruction.
     * @param {ChoreInstructionUpdateArgs} args - Arguments to update one ChoreInstruction.
     * @example
     * // Update one ChoreInstruction
     * const choreInstruction = await prisma.choreInstruction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChoreInstructionUpdateArgs>(args: SelectSubset<T, ChoreInstructionUpdateArgs<ExtArgs>>): Prisma__ChoreInstructionClient<$Result.GetResult<Prisma.$ChoreInstructionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChoreInstructions.
     * @param {ChoreInstructionDeleteManyArgs} args - Arguments to filter ChoreInstructions to delete.
     * @example
     * // Delete a few ChoreInstructions
     * const { count } = await prisma.choreInstruction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChoreInstructionDeleteManyArgs>(args?: SelectSubset<T, ChoreInstructionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChoreInstructions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoreInstructionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChoreInstructions
     * const choreInstruction = await prisma.choreInstruction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChoreInstructionUpdateManyArgs>(args: SelectSubset<T, ChoreInstructionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChoreInstructions and returns the data updated in the database.
     * @param {ChoreInstructionUpdateManyAndReturnArgs} args - Arguments to update many ChoreInstructions.
     * @example
     * // Update many ChoreInstructions
     * const choreInstruction = await prisma.choreInstruction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChoreInstructions and only return the `id`
     * const choreInstructionWithIdOnly = await prisma.choreInstruction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChoreInstructionUpdateManyAndReturnArgs>(args: SelectSubset<T, ChoreInstructionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoreInstructionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChoreInstruction.
     * @param {ChoreInstructionUpsertArgs} args - Arguments to update or create a ChoreInstruction.
     * @example
     * // Update or create a ChoreInstruction
     * const choreInstruction = await prisma.choreInstruction.upsert({
     *   create: {
     *     // ... data to create a ChoreInstruction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChoreInstruction we want to update
     *   }
     * })
     */
    upsert<T extends ChoreInstructionUpsertArgs>(args: SelectSubset<T, ChoreInstructionUpsertArgs<ExtArgs>>): Prisma__ChoreInstructionClient<$Result.GetResult<Prisma.$ChoreInstructionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChoreInstructions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoreInstructionCountArgs} args - Arguments to filter ChoreInstructions to count.
     * @example
     * // Count the number of ChoreInstructions
     * const count = await prisma.choreInstruction.count({
     *   where: {
     *     // ... the filter for the ChoreInstructions we want to count
     *   }
     * })
    **/
    count<T extends ChoreInstructionCountArgs>(
      args?: Subset<T, ChoreInstructionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChoreInstructionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChoreInstruction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoreInstructionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChoreInstructionAggregateArgs>(args: Subset<T, ChoreInstructionAggregateArgs>): Prisma.PrismaPromise<GetChoreInstructionAggregateType<T>>

    /**
     * Group by ChoreInstruction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoreInstructionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChoreInstructionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChoreInstructionGroupByArgs['orderBy'] }
        : { orderBy?: ChoreInstructionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChoreInstructionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChoreInstructionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChoreInstruction model
   */
  readonly fields: ChoreInstructionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChoreInstruction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChoreInstructionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chore<T extends ChoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChoreDefaultArgs<ExtArgs>>): Prisma__ChoreClient<$Result.GetResult<Prisma.$ChorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChoreInstruction model
   */
  interface ChoreInstructionFieldRefs {
    readonly id: FieldRef<"ChoreInstruction", 'String'>
    readonly choreId: FieldRef<"ChoreInstruction", 'String'>
    readonly stepNumber: FieldRef<"ChoreInstruction", 'Int'>
    readonly description: FieldRef<"ChoreInstruction", 'String'>
    readonly createdAt: FieldRef<"ChoreInstruction", 'DateTime'>
    readonly updatedAt: FieldRef<"ChoreInstruction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChoreInstruction findUnique
   */
  export type ChoreInstructionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoreInstruction
     */
    select?: ChoreInstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoreInstruction
     */
    omit?: ChoreInstructionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInstructionInclude<ExtArgs> | null
    /**
     * Filter, which ChoreInstruction to fetch.
     */
    where: ChoreInstructionWhereUniqueInput
  }

  /**
   * ChoreInstruction findUniqueOrThrow
   */
  export type ChoreInstructionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoreInstruction
     */
    select?: ChoreInstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoreInstruction
     */
    omit?: ChoreInstructionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInstructionInclude<ExtArgs> | null
    /**
     * Filter, which ChoreInstruction to fetch.
     */
    where: ChoreInstructionWhereUniqueInput
  }

  /**
   * ChoreInstruction findFirst
   */
  export type ChoreInstructionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoreInstruction
     */
    select?: ChoreInstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoreInstruction
     */
    omit?: ChoreInstructionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInstructionInclude<ExtArgs> | null
    /**
     * Filter, which ChoreInstruction to fetch.
     */
    where?: ChoreInstructionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChoreInstructions to fetch.
     */
    orderBy?: ChoreInstructionOrderByWithRelationInput | ChoreInstructionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChoreInstructions.
     */
    cursor?: ChoreInstructionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChoreInstructions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChoreInstructions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChoreInstructions.
     */
    distinct?: ChoreInstructionScalarFieldEnum | ChoreInstructionScalarFieldEnum[]
  }

  /**
   * ChoreInstruction findFirstOrThrow
   */
  export type ChoreInstructionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoreInstruction
     */
    select?: ChoreInstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoreInstruction
     */
    omit?: ChoreInstructionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInstructionInclude<ExtArgs> | null
    /**
     * Filter, which ChoreInstruction to fetch.
     */
    where?: ChoreInstructionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChoreInstructions to fetch.
     */
    orderBy?: ChoreInstructionOrderByWithRelationInput | ChoreInstructionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChoreInstructions.
     */
    cursor?: ChoreInstructionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChoreInstructions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChoreInstructions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChoreInstructions.
     */
    distinct?: ChoreInstructionScalarFieldEnum | ChoreInstructionScalarFieldEnum[]
  }

  /**
   * ChoreInstruction findMany
   */
  export type ChoreInstructionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoreInstruction
     */
    select?: ChoreInstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoreInstruction
     */
    omit?: ChoreInstructionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInstructionInclude<ExtArgs> | null
    /**
     * Filter, which ChoreInstructions to fetch.
     */
    where?: ChoreInstructionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChoreInstructions to fetch.
     */
    orderBy?: ChoreInstructionOrderByWithRelationInput | ChoreInstructionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChoreInstructions.
     */
    cursor?: ChoreInstructionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChoreInstructions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChoreInstructions.
     */
    skip?: number
    distinct?: ChoreInstructionScalarFieldEnum | ChoreInstructionScalarFieldEnum[]
  }

  /**
   * ChoreInstruction create
   */
  export type ChoreInstructionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoreInstruction
     */
    select?: ChoreInstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoreInstruction
     */
    omit?: ChoreInstructionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInstructionInclude<ExtArgs> | null
    /**
     * The data needed to create a ChoreInstruction.
     */
    data: XOR<ChoreInstructionCreateInput, ChoreInstructionUncheckedCreateInput>
  }

  /**
   * ChoreInstruction createMany
   */
  export type ChoreInstructionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChoreInstructions.
     */
    data: ChoreInstructionCreateManyInput | ChoreInstructionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChoreInstruction createManyAndReturn
   */
  export type ChoreInstructionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoreInstruction
     */
    select?: ChoreInstructionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChoreInstruction
     */
    omit?: ChoreInstructionOmit<ExtArgs> | null
    /**
     * The data used to create many ChoreInstructions.
     */
    data: ChoreInstructionCreateManyInput | ChoreInstructionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInstructionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChoreInstruction update
   */
  export type ChoreInstructionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoreInstruction
     */
    select?: ChoreInstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoreInstruction
     */
    omit?: ChoreInstructionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInstructionInclude<ExtArgs> | null
    /**
     * The data needed to update a ChoreInstruction.
     */
    data: XOR<ChoreInstructionUpdateInput, ChoreInstructionUncheckedUpdateInput>
    /**
     * Choose, which ChoreInstruction to update.
     */
    where: ChoreInstructionWhereUniqueInput
  }

  /**
   * ChoreInstruction updateMany
   */
  export type ChoreInstructionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChoreInstructions.
     */
    data: XOR<ChoreInstructionUpdateManyMutationInput, ChoreInstructionUncheckedUpdateManyInput>
    /**
     * Filter which ChoreInstructions to update
     */
    where?: ChoreInstructionWhereInput
    /**
     * Limit how many ChoreInstructions to update.
     */
    limit?: number
  }

  /**
   * ChoreInstruction updateManyAndReturn
   */
  export type ChoreInstructionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoreInstruction
     */
    select?: ChoreInstructionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChoreInstruction
     */
    omit?: ChoreInstructionOmit<ExtArgs> | null
    /**
     * The data used to update ChoreInstructions.
     */
    data: XOR<ChoreInstructionUpdateManyMutationInput, ChoreInstructionUncheckedUpdateManyInput>
    /**
     * Filter which ChoreInstructions to update
     */
    where?: ChoreInstructionWhereInput
    /**
     * Limit how many ChoreInstructions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInstructionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChoreInstruction upsert
   */
  export type ChoreInstructionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoreInstruction
     */
    select?: ChoreInstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoreInstruction
     */
    omit?: ChoreInstructionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInstructionInclude<ExtArgs> | null
    /**
     * The filter to search for the ChoreInstruction to update in case it exists.
     */
    where: ChoreInstructionWhereUniqueInput
    /**
     * In case the ChoreInstruction found by the `where` argument doesn't exist, create a new ChoreInstruction with this data.
     */
    create: XOR<ChoreInstructionCreateInput, ChoreInstructionUncheckedCreateInput>
    /**
     * In case the ChoreInstruction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChoreInstructionUpdateInput, ChoreInstructionUncheckedUpdateInput>
  }

  /**
   * ChoreInstruction delete
   */
  export type ChoreInstructionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoreInstruction
     */
    select?: ChoreInstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoreInstruction
     */
    omit?: ChoreInstructionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInstructionInclude<ExtArgs> | null
    /**
     * Filter which ChoreInstruction to delete.
     */
    where: ChoreInstructionWhereUniqueInput
  }

  /**
   * ChoreInstruction deleteMany
   */
  export type ChoreInstructionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChoreInstructions to delete
     */
    where?: ChoreInstructionWhereInput
    /**
     * Limit how many ChoreInstructions to delete.
     */
    limit?: number
  }

  /**
   * ChoreInstruction without action
   */
  export type ChoreInstructionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoreInstruction
     */
    select?: ChoreInstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoreInstruction
     */
    omit?: ChoreInstructionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInstructionInclude<ExtArgs> | null
  }


  /**
   * Model ChoreSchedule
   */

  export type AggregateChoreSchedule = {
    _count: ChoreScheduleCountAggregateOutputType | null
    _min: ChoreScheduleMinAggregateOutputType | null
    _max: ChoreScheduleMaxAggregateOutputType | null
  }

  export type ChoreScheduleMinAggregateOutputType = {
    id: string | null
    choreId: string | null
    assignedToId: string | null
    scheduledDate: Date | null
    completedAt: Date | null
    status: $Enums.ScheduleStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChoreScheduleMaxAggregateOutputType = {
    id: string | null
    choreId: string | null
    assignedToId: string | null
    scheduledDate: Date | null
    completedAt: Date | null
    status: $Enums.ScheduleStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChoreScheduleCountAggregateOutputType = {
    id: number
    choreId: number
    assignedToId: number
    scheduledDate: number
    completedAt: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChoreScheduleMinAggregateInputType = {
    id?: true
    choreId?: true
    assignedToId?: true
    scheduledDate?: true
    completedAt?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChoreScheduleMaxAggregateInputType = {
    id?: true
    choreId?: true
    assignedToId?: true
    scheduledDate?: true
    completedAt?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChoreScheduleCountAggregateInputType = {
    id?: true
    choreId?: true
    assignedToId?: true
    scheduledDate?: true
    completedAt?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChoreScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChoreSchedule to aggregate.
     */
    where?: ChoreScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChoreSchedules to fetch.
     */
    orderBy?: ChoreScheduleOrderByWithRelationInput | ChoreScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChoreScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChoreSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChoreSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChoreSchedules
    **/
    _count?: true | ChoreScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChoreScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChoreScheduleMaxAggregateInputType
  }

  export type GetChoreScheduleAggregateType<T extends ChoreScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateChoreSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChoreSchedule[P]>
      : GetScalarType<T[P], AggregateChoreSchedule[P]>
  }




  export type ChoreScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChoreScheduleWhereInput
    orderBy?: ChoreScheduleOrderByWithAggregationInput | ChoreScheduleOrderByWithAggregationInput[]
    by: ChoreScheduleScalarFieldEnum[] | ChoreScheduleScalarFieldEnum
    having?: ChoreScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChoreScheduleCountAggregateInputType | true
    _min?: ChoreScheduleMinAggregateInputType
    _max?: ChoreScheduleMaxAggregateInputType
  }

  export type ChoreScheduleGroupByOutputType = {
    id: string
    choreId: string
    assignedToId: string | null
    scheduledDate: Date
    completedAt: Date | null
    status: $Enums.ScheduleStatus
    createdAt: Date
    updatedAt: Date
    _count: ChoreScheduleCountAggregateOutputType | null
    _min: ChoreScheduleMinAggregateOutputType | null
    _max: ChoreScheduleMaxAggregateOutputType | null
  }

  type GetChoreScheduleGroupByPayload<T extends ChoreScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChoreScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChoreScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChoreScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ChoreScheduleGroupByOutputType[P]>
        }
      >
    >


  export type ChoreScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    choreId?: boolean
    assignedToId?: boolean
    scheduledDate?: boolean
    completedAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chore?: boolean | ChoreDefaultArgs<ExtArgs>
    assignedTo?: boolean | ChoreSchedule$assignedToArgs<ExtArgs>
  }, ExtArgs["result"]["choreSchedule"]>

  export type ChoreScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    choreId?: boolean
    assignedToId?: boolean
    scheduledDate?: boolean
    completedAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chore?: boolean | ChoreDefaultArgs<ExtArgs>
    assignedTo?: boolean | ChoreSchedule$assignedToArgs<ExtArgs>
  }, ExtArgs["result"]["choreSchedule"]>

  export type ChoreScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    choreId?: boolean
    assignedToId?: boolean
    scheduledDate?: boolean
    completedAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chore?: boolean | ChoreDefaultArgs<ExtArgs>
    assignedTo?: boolean | ChoreSchedule$assignedToArgs<ExtArgs>
  }, ExtArgs["result"]["choreSchedule"]>

  export type ChoreScheduleSelectScalar = {
    id?: boolean
    choreId?: boolean
    assignedToId?: boolean
    scheduledDate?: boolean
    completedAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChoreScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "choreId" | "assignedToId" | "scheduledDate" | "completedAt" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["choreSchedule"]>
  export type ChoreScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chore?: boolean | ChoreDefaultArgs<ExtArgs>
    assignedTo?: boolean | ChoreSchedule$assignedToArgs<ExtArgs>
  }
  export type ChoreScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chore?: boolean | ChoreDefaultArgs<ExtArgs>
    assignedTo?: boolean | ChoreSchedule$assignedToArgs<ExtArgs>
  }
  export type ChoreScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chore?: boolean | ChoreDefaultArgs<ExtArgs>
    assignedTo?: boolean | ChoreSchedule$assignedToArgs<ExtArgs>
  }

  export type $ChoreSchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChoreSchedule"
    objects: {
      chore: Prisma.$ChorePayload<ExtArgs>
      assignedTo: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      choreId: string
      assignedToId: string | null
      scheduledDate: Date
      completedAt: Date | null
      status: $Enums.ScheduleStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["choreSchedule"]>
    composites: {}
  }

  type ChoreScheduleGetPayload<S extends boolean | null | undefined | ChoreScheduleDefaultArgs> = $Result.GetResult<Prisma.$ChoreSchedulePayload, S>

  type ChoreScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChoreScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChoreScheduleCountAggregateInputType | true
    }

  export interface ChoreScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChoreSchedule'], meta: { name: 'ChoreSchedule' } }
    /**
     * Find zero or one ChoreSchedule that matches the filter.
     * @param {ChoreScheduleFindUniqueArgs} args - Arguments to find a ChoreSchedule
     * @example
     * // Get one ChoreSchedule
     * const choreSchedule = await prisma.choreSchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChoreScheduleFindUniqueArgs>(args: SelectSubset<T, ChoreScheduleFindUniqueArgs<ExtArgs>>): Prisma__ChoreScheduleClient<$Result.GetResult<Prisma.$ChoreSchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChoreSchedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChoreScheduleFindUniqueOrThrowArgs} args - Arguments to find a ChoreSchedule
     * @example
     * // Get one ChoreSchedule
     * const choreSchedule = await prisma.choreSchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChoreScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, ChoreScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChoreScheduleClient<$Result.GetResult<Prisma.$ChoreSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChoreSchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoreScheduleFindFirstArgs} args - Arguments to find a ChoreSchedule
     * @example
     * // Get one ChoreSchedule
     * const choreSchedule = await prisma.choreSchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChoreScheduleFindFirstArgs>(args?: SelectSubset<T, ChoreScheduleFindFirstArgs<ExtArgs>>): Prisma__ChoreScheduleClient<$Result.GetResult<Prisma.$ChoreSchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChoreSchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoreScheduleFindFirstOrThrowArgs} args - Arguments to find a ChoreSchedule
     * @example
     * // Get one ChoreSchedule
     * const choreSchedule = await prisma.choreSchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChoreScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, ChoreScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChoreScheduleClient<$Result.GetResult<Prisma.$ChoreSchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChoreSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoreScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChoreSchedules
     * const choreSchedules = await prisma.choreSchedule.findMany()
     * 
     * // Get first 10 ChoreSchedules
     * const choreSchedules = await prisma.choreSchedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const choreScheduleWithIdOnly = await prisma.choreSchedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChoreScheduleFindManyArgs>(args?: SelectSubset<T, ChoreScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoreSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChoreSchedule.
     * @param {ChoreScheduleCreateArgs} args - Arguments to create a ChoreSchedule.
     * @example
     * // Create one ChoreSchedule
     * const ChoreSchedule = await prisma.choreSchedule.create({
     *   data: {
     *     // ... data to create a ChoreSchedule
     *   }
     * })
     * 
     */
    create<T extends ChoreScheduleCreateArgs>(args: SelectSubset<T, ChoreScheduleCreateArgs<ExtArgs>>): Prisma__ChoreScheduleClient<$Result.GetResult<Prisma.$ChoreSchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChoreSchedules.
     * @param {ChoreScheduleCreateManyArgs} args - Arguments to create many ChoreSchedules.
     * @example
     * // Create many ChoreSchedules
     * const choreSchedule = await prisma.choreSchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChoreScheduleCreateManyArgs>(args?: SelectSubset<T, ChoreScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChoreSchedules and returns the data saved in the database.
     * @param {ChoreScheduleCreateManyAndReturnArgs} args - Arguments to create many ChoreSchedules.
     * @example
     * // Create many ChoreSchedules
     * const choreSchedule = await prisma.choreSchedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChoreSchedules and only return the `id`
     * const choreScheduleWithIdOnly = await prisma.choreSchedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChoreScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, ChoreScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoreSchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChoreSchedule.
     * @param {ChoreScheduleDeleteArgs} args - Arguments to delete one ChoreSchedule.
     * @example
     * // Delete one ChoreSchedule
     * const ChoreSchedule = await prisma.choreSchedule.delete({
     *   where: {
     *     // ... filter to delete one ChoreSchedule
     *   }
     * })
     * 
     */
    delete<T extends ChoreScheduleDeleteArgs>(args: SelectSubset<T, ChoreScheduleDeleteArgs<ExtArgs>>): Prisma__ChoreScheduleClient<$Result.GetResult<Prisma.$ChoreSchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChoreSchedule.
     * @param {ChoreScheduleUpdateArgs} args - Arguments to update one ChoreSchedule.
     * @example
     * // Update one ChoreSchedule
     * const choreSchedule = await prisma.choreSchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChoreScheduleUpdateArgs>(args: SelectSubset<T, ChoreScheduleUpdateArgs<ExtArgs>>): Prisma__ChoreScheduleClient<$Result.GetResult<Prisma.$ChoreSchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChoreSchedules.
     * @param {ChoreScheduleDeleteManyArgs} args - Arguments to filter ChoreSchedules to delete.
     * @example
     * // Delete a few ChoreSchedules
     * const { count } = await prisma.choreSchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChoreScheduleDeleteManyArgs>(args?: SelectSubset<T, ChoreScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChoreSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoreScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChoreSchedules
     * const choreSchedule = await prisma.choreSchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChoreScheduleUpdateManyArgs>(args: SelectSubset<T, ChoreScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChoreSchedules and returns the data updated in the database.
     * @param {ChoreScheduleUpdateManyAndReturnArgs} args - Arguments to update many ChoreSchedules.
     * @example
     * // Update many ChoreSchedules
     * const choreSchedule = await prisma.choreSchedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChoreSchedules and only return the `id`
     * const choreScheduleWithIdOnly = await prisma.choreSchedule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChoreScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, ChoreScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoreSchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChoreSchedule.
     * @param {ChoreScheduleUpsertArgs} args - Arguments to update or create a ChoreSchedule.
     * @example
     * // Update or create a ChoreSchedule
     * const choreSchedule = await prisma.choreSchedule.upsert({
     *   create: {
     *     // ... data to create a ChoreSchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChoreSchedule we want to update
     *   }
     * })
     */
    upsert<T extends ChoreScheduleUpsertArgs>(args: SelectSubset<T, ChoreScheduleUpsertArgs<ExtArgs>>): Prisma__ChoreScheduleClient<$Result.GetResult<Prisma.$ChoreSchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChoreSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoreScheduleCountArgs} args - Arguments to filter ChoreSchedules to count.
     * @example
     * // Count the number of ChoreSchedules
     * const count = await prisma.choreSchedule.count({
     *   where: {
     *     // ... the filter for the ChoreSchedules we want to count
     *   }
     * })
    **/
    count<T extends ChoreScheduleCountArgs>(
      args?: Subset<T, ChoreScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChoreScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChoreSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoreScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChoreScheduleAggregateArgs>(args: Subset<T, ChoreScheduleAggregateArgs>): Prisma.PrismaPromise<GetChoreScheduleAggregateType<T>>

    /**
     * Group by ChoreSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoreScheduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChoreScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChoreScheduleGroupByArgs['orderBy'] }
        : { orderBy?: ChoreScheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChoreScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChoreScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChoreSchedule model
   */
  readonly fields: ChoreScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChoreSchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChoreScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chore<T extends ChoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChoreDefaultArgs<ExtArgs>>): Prisma__ChoreClient<$Result.GetResult<Prisma.$ChorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignedTo<T extends ChoreSchedule$assignedToArgs<ExtArgs> = {}>(args?: Subset<T, ChoreSchedule$assignedToArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChoreSchedule model
   */
  interface ChoreScheduleFieldRefs {
    readonly id: FieldRef<"ChoreSchedule", 'String'>
    readonly choreId: FieldRef<"ChoreSchedule", 'String'>
    readonly assignedToId: FieldRef<"ChoreSchedule", 'String'>
    readonly scheduledDate: FieldRef<"ChoreSchedule", 'DateTime'>
    readonly completedAt: FieldRef<"ChoreSchedule", 'DateTime'>
    readonly status: FieldRef<"ChoreSchedule", 'ScheduleStatus'>
    readonly createdAt: FieldRef<"ChoreSchedule", 'DateTime'>
    readonly updatedAt: FieldRef<"ChoreSchedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChoreSchedule findUnique
   */
  export type ChoreScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoreSchedule
     */
    select?: ChoreScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoreSchedule
     */
    omit?: ChoreScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreScheduleInclude<ExtArgs> | null
    /**
     * Filter, which ChoreSchedule to fetch.
     */
    where: ChoreScheduleWhereUniqueInput
  }

  /**
   * ChoreSchedule findUniqueOrThrow
   */
  export type ChoreScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoreSchedule
     */
    select?: ChoreScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoreSchedule
     */
    omit?: ChoreScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreScheduleInclude<ExtArgs> | null
    /**
     * Filter, which ChoreSchedule to fetch.
     */
    where: ChoreScheduleWhereUniqueInput
  }

  /**
   * ChoreSchedule findFirst
   */
  export type ChoreScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoreSchedule
     */
    select?: ChoreScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoreSchedule
     */
    omit?: ChoreScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreScheduleInclude<ExtArgs> | null
    /**
     * Filter, which ChoreSchedule to fetch.
     */
    where?: ChoreScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChoreSchedules to fetch.
     */
    orderBy?: ChoreScheduleOrderByWithRelationInput | ChoreScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChoreSchedules.
     */
    cursor?: ChoreScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChoreSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChoreSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChoreSchedules.
     */
    distinct?: ChoreScheduleScalarFieldEnum | ChoreScheduleScalarFieldEnum[]
  }

  /**
   * ChoreSchedule findFirstOrThrow
   */
  export type ChoreScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoreSchedule
     */
    select?: ChoreScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoreSchedule
     */
    omit?: ChoreScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreScheduleInclude<ExtArgs> | null
    /**
     * Filter, which ChoreSchedule to fetch.
     */
    where?: ChoreScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChoreSchedules to fetch.
     */
    orderBy?: ChoreScheduleOrderByWithRelationInput | ChoreScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChoreSchedules.
     */
    cursor?: ChoreScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChoreSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChoreSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChoreSchedules.
     */
    distinct?: ChoreScheduleScalarFieldEnum | ChoreScheduleScalarFieldEnum[]
  }

  /**
   * ChoreSchedule findMany
   */
  export type ChoreScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoreSchedule
     */
    select?: ChoreScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoreSchedule
     */
    omit?: ChoreScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreScheduleInclude<ExtArgs> | null
    /**
     * Filter, which ChoreSchedules to fetch.
     */
    where?: ChoreScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChoreSchedules to fetch.
     */
    orderBy?: ChoreScheduleOrderByWithRelationInput | ChoreScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChoreSchedules.
     */
    cursor?: ChoreScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChoreSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChoreSchedules.
     */
    skip?: number
    distinct?: ChoreScheduleScalarFieldEnum | ChoreScheduleScalarFieldEnum[]
  }

  /**
   * ChoreSchedule create
   */
  export type ChoreScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoreSchedule
     */
    select?: ChoreScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoreSchedule
     */
    omit?: ChoreScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a ChoreSchedule.
     */
    data: XOR<ChoreScheduleCreateInput, ChoreScheduleUncheckedCreateInput>
  }

  /**
   * ChoreSchedule createMany
   */
  export type ChoreScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChoreSchedules.
     */
    data: ChoreScheduleCreateManyInput | ChoreScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChoreSchedule createManyAndReturn
   */
  export type ChoreScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoreSchedule
     */
    select?: ChoreScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChoreSchedule
     */
    omit?: ChoreScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many ChoreSchedules.
     */
    data: ChoreScheduleCreateManyInput | ChoreScheduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreScheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChoreSchedule update
   */
  export type ChoreScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoreSchedule
     */
    select?: ChoreScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoreSchedule
     */
    omit?: ChoreScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a ChoreSchedule.
     */
    data: XOR<ChoreScheduleUpdateInput, ChoreScheduleUncheckedUpdateInput>
    /**
     * Choose, which ChoreSchedule to update.
     */
    where: ChoreScheduleWhereUniqueInput
  }

  /**
   * ChoreSchedule updateMany
   */
  export type ChoreScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChoreSchedules.
     */
    data: XOR<ChoreScheduleUpdateManyMutationInput, ChoreScheduleUncheckedUpdateManyInput>
    /**
     * Filter which ChoreSchedules to update
     */
    where?: ChoreScheduleWhereInput
    /**
     * Limit how many ChoreSchedules to update.
     */
    limit?: number
  }

  /**
   * ChoreSchedule updateManyAndReturn
   */
  export type ChoreScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoreSchedule
     */
    select?: ChoreScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChoreSchedule
     */
    omit?: ChoreScheduleOmit<ExtArgs> | null
    /**
     * The data used to update ChoreSchedules.
     */
    data: XOR<ChoreScheduleUpdateManyMutationInput, ChoreScheduleUncheckedUpdateManyInput>
    /**
     * Filter which ChoreSchedules to update
     */
    where?: ChoreScheduleWhereInput
    /**
     * Limit how many ChoreSchedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreScheduleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChoreSchedule upsert
   */
  export type ChoreScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoreSchedule
     */
    select?: ChoreScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoreSchedule
     */
    omit?: ChoreScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the ChoreSchedule to update in case it exists.
     */
    where: ChoreScheduleWhereUniqueInput
    /**
     * In case the ChoreSchedule found by the `where` argument doesn't exist, create a new ChoreSchedule with this data.
     */
    create: XOR<ChoreScheduleCreateInput, ChoreScheduleUncheckedCreateInput>
    /**
     * In case the ChoreSchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChoreScheduleUpdateInput, ChoreScheduleUncheckedUpdateInput>
  }

  /**
   * ChoreSchedule delete
   */
  export type ChoreScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoreSchedule
     */
    select?: ChoreScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoreSchedule
     */
    omit?: ChoreScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreScheduleInclude<ExtArgs> | null
    /**
     * Filter which ChoreSchedule to delete.
     */
    where: ChoreScheduleWhereUniqueInput
  }

  /**
   * ChoreSchedule deleteMany
   */
  export type ChoreScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChoreSchedules to delete
     */
    where?: ChoreScheduleWhereInput
    /**
     * Limit how many ChoreSchedules to delete.
     */
    limit?: number
  }

  /**
   * ChoreSchedule.assignedTo
   */
  export type ChoreSchedule$assignedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ChoreSchedule without action
   */
  export type ChoreScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoreSchedule
     */
    select?: ChoreScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoreSchedule
     */
    omit?: ChoreScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreScheduleInclude<ExtArgs> | null
  }


  /**
   * Model CalendarConnection
   */

  export type AggregateCalendarConnection = {
    _count: CalendarConnectionCountAggregateOutputType | null
    _min: CalendarConnectionMinAggregateOutputType | null
    _max: CalendarConnectionMaxAggregateOutputType | null
  }

  export type CalendarConnectionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    provider: string | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CalendarConnectionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    provider: string | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CalendarConnectionCountAggregateOutputType = {
    id: number
    userId: number
    provider: number
    accessToken: number
    refreshToken: number
    expiresAt: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CalendarConnectionMinAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CalendarConnectionMaxAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CalendarConnectionCountAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CalendarConnectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CalendarConnection to aggregate.
     */
    where?: CalendarConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalendarConnections to fetch.
     */
    orderBy?: CalendarConnectionOrderByWithRelationInput | CalendarConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CalendarConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalendarConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalendarConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CalendarConnections
    **/
    _count?: true | CalendarConnectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CalendarConnectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CalendarConnectionMaxAggregateInputType
  }

  export type GetCalendarConnectionAggregateType<T extends CalendarConnectionAggregateArgs> = {
        [P in keyof T & keyof AggregateCalendarConnection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCalendarConnection[P]>
      : GetScalarType<T[P], AggregateCalendarConnection[P]>
  }




  export type CalendarConnectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalendarConnectionWhereInput
    orderBy?: CalendarConnectionOrderByWithAggregationInput | CalendarConnectionOrderByWithAggregationInput[]
    by: CalendarConnectionScalarFieldEnum[] | CalendarConnectionScalarFieldEnum
    having?: CalendarConnectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CalendarConnectionCountAggregateInputType | true
    _min?: CalendarConnectionMinAggregateInputType
    _max?: CalendarConnectionMaxAggregateInputType
  }

  export type CalendarConnectionGroupByOutputType = {
    id: string
    userId: string
    provider: string
    accessToken: string
    refreshToken: string | null
    expiresAt: Date | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: CalendarConnectionCountAggregateOutputType | null
    _min: CalendarConnectionMinAggregateOutputType | null
    _max: CalendarConnectionMaxAggregateOutputType | null
  }

  type GetCalendarConnectionGroupByPayload<T extends CalendarConnectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CalendarConnectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CalendarConnectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CalendarConnectionGroupByOutputType[P]>
            : GetScalarType<T[P], CalendarConnectionGroupByOutputType[P]>
        }
      >
    >


  export type CalendarConnectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calendarConnection"]>

  export type CalendarConnectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calendarConnection"]>

  export type CalendarConnectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calendarConnection"]>

  export type CalendarConnectionSelectScalar = {
    id?: boolean
    userId?: boolean
    provider?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CalendarConnectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "provider" | "accessToken" | "refreshToken" | "expiresAt" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["calendarConnection"]>
  export type CalendarConnectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CalendarConnectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CalendarConnectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CalendarConnectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CalendarConnection"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      provider: string
      accessToken: string
      refreshToken: string | null
      expiresAt: Date | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["calendarConnection"]>
    composites: {}
  }

  type CalendarConnectionGetPayload<S extends boolean | null | undefined | CalendarConnectionDefaultArgs> = $Result.GetResult<Prisma.$CalendarConnectionPayload, S>

  type CalendarConnectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CalendarConnectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CalendarConnectionCountAggregateInputType | true
    }

  export interface CalendarConnectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CalendarConnection'], meta: { name: 'CalendarConnection' } }
    /**
     * Find zero or one CalendarConnection that matches the filter.
     * @param {CalendarConnectionFindUniqueArgs} args - Arguments to find a CalendarConnection
     * @example
     * // Get one CalendarConnection
     * const calendarConnection = await prisma.calendarConnection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CalendarConnectionFindUniqueArgs>(args: SelectSubset<T, CalendarConnectionFindUniqueArgs<ExtArgs>>): Prisma__CalendarConnectionClient<$Result.GetResult<Prisma.$CalendarConnectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CalendarConnection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CalendarConnectionFindUniqueOrThrowArgs} args - Arguments to find a CalendarConnection
     * @example
     * // Get one CalendarConnection
     * const calendarConnection = await prisma.calendarConnection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CalendarConnectionFindUniqueOrThrowArgs>(args: SelectSubset<T, CalendarConnectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CalendarConnectionClient<$Result.GetResult<Prisma.$CalendarConnectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CalendarConnection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarConnectionFindFirstArgs} args - Arguments to find a CalendarConnection
     * @example
     * // Get one CalendarConnection
     * const calendarConnection = await prisma.calendarConnection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CalendarConnectionFindFirstArgs>(args?: SelectSubset<T, CalendarConnectionFindFirstArgs<ExtArgs>>): Prisma__CalendarConnectionClient<$Result.GetResult<Prisma.$CalendarConnectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CalendarConnection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarConnectionFindFirstOrThrowArgs} args - Arguments to find a CalendarConnection
     * @example
     * // Get one CalendarConnection
     * const calendarConnection = await prisma.calendarConnection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CalendarConnectionFindFirstOrThrowArgs>(args?: SelectSubset<T, CalendarConnectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CalendarConnectionClient<$Result.GetResult<Prisma.$CalendarConnectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CalendarConnections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarConnectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CalendarConnections
     * const calendarConnections = await prisma.calendarConnection.findMany()
     * 
     * // Get first 10 CalendarConnections
     * const calendarConnections = await prisma.calendarConnection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const calendarConnectionWithIdOnly = await prisma.calendarConnection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CalendarConnectionFindManyArgs>(args?: SelectSubset<T, CalendarConnectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarConnectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CalendarConnection.
     * @param {CalendarConnectionCreateArgs} args - Arguments to create a CalendarConnection.
     * @example
     * // Create one CalendarConnection
     * const CalendarConnection = await prisma.calendarConnection.create({
     *   data: {
     *     // ... data to create a CalendarConnection
     *   }
     * })
     * 
     */
    create<T extends CalendarConnectionCreateArgs>(args: SelectSubset<T, CalendarConnectionCreateArgs<ExtArgs>>): Prisma__CalendarConnectionClient<$Result.GetResult<Prisma.$CalendarConnectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CalendarConnections.
     * @param {CalendarConnectionCreateManyArgs} args - Arguments to create many CalendarConnections.
     * @example
     * // Create many CalendarConnections
     * const calendarConnection = await prisma.calendarConnection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CalendarConnectionCreateManyArgs>(args?: SelectSubset<T, CalendarConnectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CalendarConnections and returns the data saved in the database.
     * @param {CalendarConnectionCreateManyAndReturnArgs} args - Arguments to create many CalendarConnections.
     * @example
     * // Create many CalendarConnections
     * const calendarConnection = await prisma.calendarConnection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CalendarConnections and only return the `id`
     * const calendarConnectionWithIdOnly = await prisma.calendarConnection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CalendarConnectionCreateManyAndReturnArgs>(args?: SelectSubset<T, CalendarConnectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarConnectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CalendarConnection.
     * @param {CalendarConnectionDeleteArgs} args - Arguments to delete one CalendarConnection.
     * @example
     * // Delete one CalendarConnection
     * const CalendarConnection = await prisma.calendarConnection.delete({
     *   where: {
     *     // ... filter to delete one CalendarConnection
     *   }
     * })
     * 
     */
    delete<T extends CalendarConnectionDeleteArgs>(args: SelectSubset<T, CalendarConnectionDeleteArgs<ExtArgs>>): Prisma__CalendarConnectionClient<$Result.GetResult<Prisma.$CalendarConnectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CalendarConnection.
     * @param {CalendarConnectionUpdateArgs} args - Arguments to update one CalendarConnection.
     * @example
     * // Update one CalendarConnection
     * const calendarConnection = await prisma.calendarConnection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CalendarConnectionUpdateArgs>(args: SelectSubset<T, CalendarConnectionUpdateArgs<ExtArgs>>): Prisma__CalendarConnectionClient<$Result.GetResult<Prisma.$CalendarConnectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CalendarConnections.
     * @param {CalendarConnectionDeleteManyArgs} args - Arguments to filter CalendarConnections to delete.
     * @example
     * // Delete a few CalendarConnections
     * const { count } = await prisma.calendarConnection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CalendarConnectionDeleteManyArgs>(args?: SelectSubset<T, CalendarConnectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CalendarConnections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarConnectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CalendarConnections
     * const calendarConnection = await prisma.calendarConnection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CalendarConnectionUpdateManyArgs>(args: SelectSubset<T, CalendarConnectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CalendarConnections and returns the data updated in the database.
     * @param {CalendarConnectionUpdateManyAndReturnArgs} args - Arguments to update many CalendarConnections.
     * @example
     * // Update many CalendarConnections
     * const calendarConnection = await prisma.calendarConnection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CalendarConnections and only return the `id`
     * const calendarConnectionWithIdOnly = await prisma.calendarConnection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CalendarConnectionUpdateManyAndReturnArgs>(args: SelectSubset<T, CalendarConnectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarConnectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CalendarConnection.
     * @param {CalendarConnectionUpsertArgs} args - Arguments to update or create a CalendarConnection.
     * @example
     * // Update or create a CalendarConnection
     * const calendarConnection = await prisma.calendarConnection.upsert({
     *   create: {
     *     // ... data to create a CalendarConnection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CalendarConnection we want to update
     *   }
     * })
     */
    upsert<T extends CalendarConnectionUpsertArgs>(args: SelectSubset<T, CalendarConnectionUpsertArgs<ExtArgs>>): Prisma__CalendarConnectionClient<$Result.GetResult<Prisma.$CalendarConnectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CalendarConnections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarConnectionCountArgs} args - Arguments to filter CalendarConnections to count.
     * @example
     * // Count the number of CalendarConnections
     * const count = await prisma.calendarConnection.count({
     *   where: {
     *     // ... the filter for the CalendarConnections we want to count
     *   }
     * })
    **/
    count<T extends CalendarConnectionCountArgs>(
      args?: Subset<T, CalendarConnectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CalendarConnectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CalendarConnection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarConnectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CalendarConnectionAggregateArgs>(args: Subset<T, CalendarConnectionAggregateArgs>): Prisma.PrismaPromise<GetCalendarConnectionAggregateType<T>>

    /**
     * Group by CalendarConnection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarConnectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CalendarConnectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CalendarConnectionGroupByArgs['orderBy'] }
        : { orderBy?: CalendarConnectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CalendarConnectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCalendarConnectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CalendarConnection model
   */
  readonly fields: CalendarConnectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CalendarConnection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CalendarConnectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CalendarConnection model
   */
  interface CalendarConnectionFieldRefs {
    readonly id: FieldRef<"CalendarConnection", 'String'>
    readonly userId: FieldRef<"CalendarConnection", 'String'>
    readonly provider: FieldRef<"CalendarConnection", 'String'>
    readonly accessToken: FieldRef<"CalendarConnection", 'String'>
    readonly refreshToken: FieldRef<"CalendarConnection", 'String'>
    readonly expiresAt: FieldRef<"CalendarConnection", 'DateTime'>
    readonly isActive: FieldRef<"CalendarConnection", 'Boolean'>
    readonly createdAt: FieldRef<"CalendarConnection", 'DateTime'>
    readonly updatedAt: FieldRef<"CalendarConnection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CalendarConnection findUnique
   */
  export type CalendarConnectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarConnection
     */
    select?: CalendarConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarConnection
     */
    omit?: CalendarConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarConnectionInclude<ExtArgs> | null
    /**
     * Filter, which CalendarConnection to fetch.
     */
    where: CalendarConnectionWhereUniqueInput
  }

  /**
   * CalendarConnection findUniqueOrThrow
   */
  export type CalendarConnectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarConnection
     */
    select?: CalendarConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarConnection
     */
    omit?: CalendarConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarConnectionInclude<ExtArgs> | null
    /**
     * Filter, which CalendarConnection to fetch.
     */
    where: CalendarConnectionWhereUniqueInput
  }

  /**
   * CalendarConnection findFirst
   */
  export type CalendarConnectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarConnection
     */
    select?: CalendarConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarConnection
     */
    omit?: CalendarConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarConnectionInclude<ExtArgs> | null
    /**
     * Filter, which CalendarConnection to fetch.
     */
    where?: CalendarConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalendarConnections to fetch.
     */
    orderBy?: CalendarConnectionOrderByWithRelationInput | CalendarConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CalendarConnections.
     */
    cursor?: CalendarConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalendarConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalendarConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CalendarConnections.
     */
    distinct?: CalendarConnectionScalarFieldEnum | CalendarConnectionScalarFieldEnum[]
  }

  /**
   * CalendarConnection findFirstOrThrow
   */
  export type CalendarConnectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarConnection
     */
    select?: CalendarConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarConnection
     */
    omit?: CalendarConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarConnectionInclude<ExtArgs> | null
    /**
     * Filter, which CalendarConnection to fetch.
     */
    where?: CalendarConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalendarConnections to fetch.
     */
    orderBy?: CalendarConnectionOrderByWithRelationInput | CalendarConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CalendarConnections.
     */
    cursor?: CalendarConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalendarConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalendarConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CalendarConnections.
     */
    distinct?: CalendarConnectionScalarFieldEnum | CalendarConnectionScalarFieldEnum[]
  }

  /**
   * CalendarConnection findMany
   */
  export type CalendarConnectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarConnection
     */
    select?: CalendarConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarConnection
     */
    omit?: CalendarConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarConnectionInclude<ExtArgs> | null
    /**
     * Filter, which CalendarConnections to fetch.
     */
    where?: CalendarConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalendarConnections to fetch.
     */
    orderBy?: CalendarConnectionOrderByWithRelationInput | CalendarConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CalendarConnections.
     */
    cursor?: CalendarConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalendarConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalendarConnections.
     */
    skip?: number
    distinct?: CalendarConnectionScalarFieldEnum | CalendarConnectionScalarFieldEnum[]
  }

  /**
   * CalendarConnection create
   */
  export type CalendarConnectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarConnection
     */
    select?: CalendarConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarConnection
     */
    omit?: CalendarConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarConnectionInclude<ExtArgs> | null
    /**
     * The data needed to create a CalendarConnection.
     */
    data: XOR<CalendarConnectionCreateInput, CalendarConnectionUncheckedCreateInput>
  }

  /**
   * CalendarConnection createMany
   */
  export type CalendarConnectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CalendarConnections.
     */
    data: CalendarConnectionCreateManyInput | CalendarConnectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CalendarConnection createManyAndReturn
   */
  export type CalendarConnectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarConnection
     */
    select?: CalendarConnectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarConnection
     */
    omit?: CalendarConnectionOmit<ExtArgs> | null
    /**
     * The data used to create many CalendarConnections.
     */
    data: CalendarConnectionCreateManyInput | CalendarConnectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarConnectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CalendarConnection update
   */
  export type CalendarConnectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarConnection
     */
    select?: CalendarConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarConnection
     */
    omit?: CalendarConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarConnectionInclude<ExtArgs> | null
    /**
     * The data needed to update a CalendarConnection.
     */
    data: XOR<CalendarConnectionUpdateInput, CalendarConnectionUncheckedUpdateInput>
    /**
     * Choose, which CalendarConnection to update.
     */
    where: CalendarConnectionWhereUniqueInput
  }

  /**
   * CalendarConnection updateMany
   */
  export type CalendarConnectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CalendarConnections.
     */
    data: XOR<CalendarConnectionUpdateManyMutationInput, CalendarConnectionUncheckedUpdateManyInput>
    /**
     * Filter which CalendarConnections to update
     */
    where?: CalendarConnectionWhereInput
    /**
     * Limit how many CalendarConnections to update.
     */
    limit?: number
  }

  /**
   * CalendarConnection updateManyAndReturn
   */
  export type CalendarConnectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarConnection
     */
    select?: CalendarConnectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarConnection
     */
    omit?: CalendarConnectionOmit<ExtArgs> | null
    /**
     * The data used to update CalendarConnections.
     */
    data: XOR<CalendarConnectionUpdateManyMutationInput, CalendarConnectionUncheckedUpdateManyInput>
    /**
     * Filter which CalendarConnections to update
     */
    where?: CalendarConnectionWhereInput
    /**
     * Limit how many CalendarConnections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarConnectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CalendarConnection upsert
   */
  export type CalendarConnectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarConnection
     */
    select?: CalendarConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarConnection
     */
    omit?: CalendarConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarConnectionInclude<ExtArgs> | null
    /**
     * The filter to search for the CalendarConnection to update in case it exists.
     */
    where: CalendarConnectionWhereUniqueInput
    /**
     * In case the CalendarConnection found by the `where` argument doesn't exist, create a new CalendarConnection with this data.
     */
    create: XOR<CalendarConnectionCreateInput, CalendarConnectionUncheckedCreateInput>
    /**
     * In case the CalendarConnection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CalendarConnectionUpdateInput, CalendarConnectionUncheckedUpdateInput>
  }

  /**
   * CalendarConnection delete
   */
  export type CalendarConnectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarConnection
     */
    select?: CalendarConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarConnection
     */
    omit?: CalendarConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarConnectionInclude<ExtArgs> | null
    /**
     * Filter which CalendarConnection to delete.
     */
    where: CalendarConnectionWhereUniqueInput
  }

  /**
   * CalendarConnection deleteMany
   */
  export type CalendarConnectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CalendarConnections to delete
     */
    where?: CalendarConnectionWhereInput
    /**
     * Limit how many CalendarConnections to delete.
     */
    limit?: number
  }

  /**
   * CalendarConnection without action
   */
  export type CalendarConnectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarConnection
     */
    select?: CalendarConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarConnection
     */
    omit?: CalendarConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarConnectionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const HouseholdScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HouseholdScalarFieldEnum = (typeof HouseholdScalarFieldEnum)[keyof typeof HouseholdScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    householdId: 'householdId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ChoreScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    descriptionList: 'descriptionList',
    householdId: 'householdId',
    recurrence: 'recurrence',
    recurrenceValue: 'recurrenceValue',
    selectedWeekdays: 'selectedWeekdays',
    estimatedMinutes: 'estimatedMinutes',
    scheduledTime: 'scheduledTime',
    isPrivate: 'isPrivate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChoreScalarFieldEnum = (typeof ChoreScalarFieldEnum)[keyof typeof ChoreScalarFieldEnum]


  export const ChoreInstructionScalarFieldEnum: {
    id: 'id',
    choreId: 'choreId',
    stepNumber: 'stepNumber',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChoreInstructionScalarFieldEnum = (typeof ChoreInstructionScalarFieldEnum)[keyof typeof ChoreInstructionScalarFieldEnum]


  export const ChoreScheduleScalarFieldEnum: {
    id: 'id',
    choreId: 'choreId',
    assignedToId: 'assignedToId',
    scheduledDate: 'scheduledDate',
    completedAt: 'completedAt',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChoreScheduleScalarFieldEnum = (typeof ChoreScheduleScalarFieldEnum)[keyof typeof ChoreScheduleScalarFieldEnum]


  export const CalendarConnectionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    provider: 'provider',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    expiresAt: 'expiresAt',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CalendarConnectionScalarFieldEnum = (typeof CalendarConnectionScalarFieldEnum)[keyof typeof CalendarConnectionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'RecurrenceType'
   */
  export type EnumRecurrenceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecurrenceType'>
    


  /**
   * Reference to a field of type 'RecurrenceType[]'
   */
  export type ListEnumRecurrenceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecurrenceType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ScheduleStatus'
   */
  export type EnumScheduleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ScheduleStatus'>
    


  /**
   * Reference to a field of type 'ScheduleStatus[]'
   */
  export type ListEnumScheduleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ScheduleStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type HouseholdWhereInput = {
    AND?: HouseholdWhereInput | HouseholdWhereInput[]
    OR?: HouseholdWhereInput[]
    NOT?: HouseholdWhereInput | HouseholdWhereInput[]
    id?: StringFilter<"Household"> | string
    name?: StringFilter<"Household"> | string
    createdAt?: DateTimeFilter<"Household"> | Date | string
    updatedAt?: DateTimeFilter<"Household"> | Date | string
    members?: UserListRelationFilter
    chores?: ChoreListRelationFilter
  }

  export type HouseholdOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    members?: UserOrderByRelationAggregateInput
    chores?: ChoreOrderByRelationAggregateInput
  }

  export type HouseholdWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HouseholdWhereInput | HouseholdWhereInput[]
    OR?: HouseholdWhereInput[]
    NOT?: HouseholdWhereInput | HouseholdWhereInput[]
    name?: StringFilter<"Household"> | string
    createdAt?: DateTimeFilter<"Household"> | Date | string
    updatedAt?: DateTimeFilter<"Household"> | Date | string
    members?: UserListRelationFilter
    chores?: ChoreListRelationFilter
  }, "id">

  export type HouseholdOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HouseholdCountOrderByAggregateInput
    _max?: HouseholdMaxOrderByAggregateInput
    _min?: HouseholdMinOrderByAggregateInput
  }

  export type HouseholdScalarWhereWithAggregatesInput = {
    AND?: HouseholdScalarWhereWithAggregatesInput | HouseholdScalarWhereWithAggregatesInput[]
    OR?: HouseholdScalarWhereWithAggregatesInput[]
    NOT?: HouseholdScalarWhereWithAggregatesInput | HouseholdScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Household"> | string
    name?: StringWithAggregatesFilter<"Household"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Household"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Household"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    householdId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    household?: XOR<HouseholdScalarRelationFilter, HouseholdWhereInput>
    assignedChores?: ChoreScheduleListRelationFilter
    calendarConnections?: CalendarConnectionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    householdId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    household?: HouseholdOrderByWithRelationInput
    assignedChores?: ChoreScheduleOrderByRelationAggregateInput
    calendarConnections?: CalendarConnectionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    householdId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    household?: XOR<HouseholdScalarRelationFilter, HouseholdWhereInput>
    assignedChores?: ChoreScheduleListRelationFilter
    calendarConnections?: CalendarConnectionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    householdId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    householdId?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ChoreWhereInput = {
    AND?: ChoreWhereInput | ChoreWhereInput[]
    OR?: ChoreWhereInput[]
    NOT?: ChoreWhereInput | ChoreWhereInput[]
    id?: StringFilter<"Chore"> | string
    title?: StringFilter<"Chore"> | string
    description?: StringNullableFilter<"Chore"> | string | null
    descriptionList?: StringNullableListFilter<"Chore">
    householdId?: StringFilter<"Chore"> | string
    recurrence?: EnumRecurrenceTypeFilter<"Chore"> | $Enums.RecurrenceType
    recurrenceValue?: IntFilter<"Chore"> | number
    selectedWeekdays?: IntNullableListFilter<"Chore">
    estimatedMinutes?: IntNullableFilter<"Chore"> | number | null
    scheduledTime?: IntNullableFilter<"Chore"> | number | null
    isPrivate?: BoolFilter<"Chore"> | boolean
    createdAt?: DateTimeFilter<"Chore"> | Date | string
    updatedAt?: DateTimeFilter<"Chore"> | Date | string
    household?: XOR<HouseholdScalarRelationFilter, HouseholdWhereInput>
    instructions?: ChoreInstructionListRelationFilter
    schedules?: ChoreScheduleListRelationFilter
  }

  export type ChoreOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    descriptionList?: SortOrder
    householdId?: SortOrder
    recurrence?: SortOrder
    recurrenceValue?: SortOrder
    selectedWeekdays?: SortOrder
    estimatedMinutes?: SortOrderInput | SortOrder
    scheduledTime?: SortOrderInput | SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    household?: HouseholdOrderByWithRelationInput
    instructions?: ChoreInstructionOrderByRelationAggregateInput
    schedules?: ChoreScheduleOrderByRelationAggregateInput
  }

  export type ChoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChoreWhereInput | ChoreWhereInput[]
    OR?: ChoreWhereInput[]
    NOT?: ChoreWhereInput | ChoreWhereInput[]
    title?: StringFilter<"Chore"> | string
    description?: StringNullableFilter<"Chore"> | string | null
    descriptionList?: StringNullableListFilter<"Chore">
    householdId?: StringFilter<"Chore"> | string
    recurrence?: EnumRecurrenceTypeFilter<"Chore"> | $Enums.RecurrenceType
    recurrenceValue?: IntFilter<"Chore"> | number
    selectedWeekdays?: IntNullableListFilter<"Chore">
    estimatedMinutes?: IntNullableFilter<"Chore"> | number | null
    scheduledTime?: IntNullableFilter<"Chore"> | number | null
    isPrivate?: BoolFilter<"Chore"> | boolean
    createdAt?: DateTimeFilter<"Chore"> | Date | string
    updatedAt?: DateTimeFilter<"Chore"> | Date | string
    household?: XOR<HouseholdScalarRelationFilter, HouseholdWhereInput>
    instructions?: ChoreInstructionListRelationFilter
    schedules?: ChoreScheduleListRelationFilter
  }, "id">

  export type ChoreOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    descriptionList?: SortOrder
    householdId?: SortOrder
    recurrence?: SortOrder
    recurrenceValue?: SortOrder
    selectedWeekdays?: SortOrder
    estimatedMinutes?: SortOrderInput | SortOrder
    scheduledTime?: SortOrderInput | SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChoreCountOrderByAggregateInput
    _avg?: ChoreAvgOrderByAggregateInput
    _max?: ChoreMaxOrderByAggregateInput
    _min?: ChoreMinOrderByAggregateInput
    _sum?: ChoreSumOrderByAggregateInput
  }

  export type ChoreScalarWhereWithAggregatesInput = {
    AND?: ChoreScalarWhereWithAggregatesInput | ChoreScalarWhereWithAggregatesInput[]
    OR?: ChoreScalarWhereWithAggregatesInput[]
    NOT?: ChoreScalarWhereWithAggregatesInput | ChoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chore"> | string
    title?: StringWithAggregatesFilter<"Chore"> | string
    description?: StringNullableWithAggregatesFilter<"Chore"> | string | null
    descriptionList?: StringNullableListFilter<"Chore">
    householdId?: StringWithAggregatesFilter<"Chore"> | string
    recurrence?: EnumRecurrenceTypeWithAggregatesFilter<"Chore"> | $Enums.RecurrenceType
    recurrenceValue?: IntWithAggregatesFilter<"Chore"> | number
    selectedWeekdays?: IntNullableListFilter<"Chore">
    estimatedMinutes?: IntNullableWithAggregatesFilter<"Chore"> | number | null
    scheduledTime?: IntNullableWithAggregatesFilter<"Chore"> | number | null
    isPrivate?: BoolWithAggregatesFilter<"Chore"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Chore"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Chore"> | Date | string
  }

  export type ChoreInstructionWhereInput = {
    AND?: ChoreInstructionWhereInput | ChoreInstructionWhereInput[]
    OR?: ChoreInstructionWhereInput[]
    NOT?: ChoreInstructionWhereInput | ChoreInstructionWhereInput[]
    id?: StringFilter<"ChoreInstruction"> | string
    choreId?: StringFilter<"ChoreInstruction"> | string
    stepNumber?: IntFilter<"ChoreInstruction"> | number
    description?: StringFilter<"ChoreInstruction"> | string
    createdAt?: DateTimeFilter<"ChoreInstruction"> | Date | string
    updatedAt?: DateTimeFilter<"ChoreInstruction"> | Date | string
    chore?: XOR<ChoreScalarRelationFilter, ChoreWhereInput>
  }

  export type ChoreInstructionOrderByWithRelationInput = {
    id?: SortOrder
    choreId?: SortOrder
    stepNumber?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chore?: ChoreOrderByWithRelationInput
  }

  export type ChoreInstructionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    choreId_stepNumber?: ChoreInstructionChoreIdStepNumberCompoundUniqueInput
    AND?: ChoreInstructionWhereInput | ChoreInstructionWhereInput[]
    OR?: ChoreInstructionWhereInput[]
    NOT?: ChoreInstructionWhereInput | ChoreInstructionWhereInput[]
    choreId?: StringFilter<"ChoreInstruction"> | string
    stepNumber?: IntFilter<"ChoreInstruction"> | number
    description?: StringFilter<"ChoreInstruction"> | string
    createdAt?: DateTimeFilter<"ChoreInstruction"> | Date | string
    updatedAt?: DateTimeFilter<"ChoreInstruction"> | Date | string
    chore?: XOR<ChoreScalarRelationFilter, ChoreWhereInput>
  }, "id" | "choreId_stepNumber">

  export type ChoreInstructionOrderByWithAggregationInput = {
    id?: SortOrder
    choreId?: SortOrder
    stepNumber?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChoreInstructionCountOrderByAggregateInput
    _avg?: ChoreInstructionAvgOrderByAggregateInput
    _max?: ChoreInstructionMaxOrderByAggregateInput
    _min?: ChoreInstructionMinOrderByAggregateInput
    _sum?: ChoreInstructionSumOrderByAggregateInput
  }

  export type ChoreInstructionScalarWhereWithAggregatesInput = {
    AND?: ChoreInstructionScalarWhereWithAggregatesInput | ChoreInstructionScalarWhereWithAggregatesInput[]
    OR?: ChoreInstructionScalarWhereWithAggregatesInput[]
    NOT?: ChoreInstructionScalarWhereWithAggregatesInput | ChoreInstructionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChoreInstruction"> | string
    choreId?: StringWithAggregatesFilter<"ChoreInstruction"> | string
    stepNumber?: IntWithAggregatesFilter<"ChoreInstruction"> | number
    description?: StringWithAggregatesFilter<"ChoreInstruction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChoreInstruction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChoreInstruction"> | Date | string
  }

  export type ChoreScheduleWhereInput = {
    AND?: ChoreScheduleWhereInput | ChoreScheduleWhereInput[]
    OR?: ChoreScheduleWhereInput[]
    NOT?: ChoreScheduleWhereInput | ChoreScheduleWhereInput[]
    id?: StringFilter<"ChoreSchedule"> | string
    choreId?: StringFilter<"ChoreSchedule"> | string
    assignedToId?: StringNullableFilter<"ChoreSchedule"> | string | null
    scheduledDate?: DateTimeFilter<"ChoreSchedule"> | Date | string
    completedAt?: DateTimeNullableFilter<"ChoreSchedule"> | Date | string | null
    status?: EnumScheduleStatusFilter<"ChoreSchedule"> | $Enums.ScheduleStatus
    createdAt?: DateTimeFilter<"ChoreSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"ChoreSchedule"> | Date | string
    chore?: XOR<ChoreScalarRelationFilter, ChoreWhereInput>
    assignedTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ChoreScheduleOrderByWithRelationInput = {
    id?: SortOrder
    choreId?: SortOrder
    assignedToId?: SortOrderInput | SortOrder
    scheduledDate?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chore?: ChoreOrderByWithRelationInput
    assignedTo?: UserOrderByWithRelationInput
  }

  export type ChoreScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChoreScheduleWhereInput | ChoreScheduleWhereInput[]
    OR?: ChoreScheduleWhereInput[]
    NOT?: ChoreScheduleWhereInput | ChoreScheduleWhereInput[]
    choreId?: StringFilter<"ChoreSchedule"> | string
    assignedToId?: StringNullableFilter<"ChoreSchedule"> | string | null
    scheduledDate?: DateTimeFilter<"ChoreSchedule"> | Date | string
    completedAt?: DateTimeNullableFilter<"ChoreSchedule"> | Date | string | null
    status?: EnumScheduleStatusFilter<"ChoreSchedule"> | $Enums.ScheduleStatus
    createdAt?: DateTimeFilter<"ChoreSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"ChoreSchedule"> | Date | string
    chore?: XOR<ChoreScalarRelationFilter, ChoreWhereInput>
    assignedTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ChoreScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    choreId?: SortOrder
    assignedToId?: SortOrderInput | SortOrder
    scheduledDate?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChoreScheduleCountOrderByAggregateInput
    _max?: ChoreScheduleMaxOrderByAggregateInput
    _min?: ChoreScheduleMinOrderByAggregateInput
  }

  export type ChoreScheduleScalarWhereWithAggregatesInput = {
    AND?: ChoreScheduleScalarWhereWithAggregatesInput | ChoreScheduleScalarWhereWithAggregatesInput[]
    OR?: ChoreScheduleScalarWhereWithAggregatesInput[]
    NOT?: ChoreScheduleScalarWhereWithAggregatesInput | ChoreScheduleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChoreSchedule"> | string
    choreId?: StringWithAggregatesFilter<"ChoreSchedule"> | string
    assignedToId?: StringNullableWithAggregatesFilter<"ChoreSchedule"> | string | null
    scheduledDate?: DateTimeWithAggregatesFilter<"ChoreSchedule"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"ChoreSchedule"> | Date | string | null
    status?: EnumScheduleStatusWithAggregatesFilter<"ChoreSchedule"> | $Enums.ScheduleStatus
    createdAt?: DateTimeWithAggregatesFilter<"ChoreSchedule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChoreSchedule"> | Date | string
  }

  export type CalendarConnectionWhereInput = {
    AND?: CalendarConnectionWhereInput | CalendarConnectionWhereInput[]
    OR?: CalendarConnectionWhereInput[]
    NOT?: CalendarConnectionWhereInput | CalendarConnectionWhereInput[]
    id?: StringFilter<"CalendarConnection"> | string
    userId?: StringFilter<"CalendarConnection"> | string
    provider?: StringFilter<"CalendarConnection"> | string
    accessToken?: StringFilter<"CalendarConnection"> | string
    refreshToken?: StringNullableFilter<"CalendarConnection"> | string | null
    expiresAt?: DateTimeNullableFilter<"CalendarConnection"> | Date | string | null
    isActive?: BoolFilter<"CalendarConnection"> | boolean
    createdAt?: DateTimeFilter<"CalendarConnection"> | Date | string
    updatedAt?: DateTimeFilter<"CalendarConnection"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CalendarConnectionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CalendarConnectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CalendarConnectionWhereInput | CalendarConnectionWhereInput[]
    OR?: CalendarConnectionWhereInput[]
    NOT?: CalendarConnectionWhereInput | CalendarConnectionWhereInput[]
    userId?: StringFilter<"CalendarConnection"> | string
    provider?: StringFilter<"CalendarConnection"> | string
    accessToken?: StringFilter<"CalendarConnection"> | string
    refreshToken?: StringNullableFilter<"CalendarConnection"> | string | null
    expiresAt?: DateTimeNullableFilter<"CalendarConnection"> | Date | string | null
    isActive?: BoolFilter<"CalendarConnection"> | boolean
    createdAt?: DateTimeFilter<"CalendarConnection"> | Date | string
    updatedAt?: DateTimeFilter<"CalendarConnection"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CalendarConnectionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CalendarConnectionCountOrderByAggregateInput
    _max?: CalendarConnectionMaxOrderByAggregateInput
    _min?: CalendarConnectionMinOrderByAggregateInput
  }

  export type CalendarConnectionScalarWhereWithAggregatesInput = {
    AND?: CalendarConnectionScalarWhereWithAggregatesInput | CalendarConnectionScalarWhereWithAggregatesInput[]
    OR?: CalendarConnectionScalarWhereWithAggregatesInput[]
    NOT?: CalendarConnectionScalarWhereWithAggregatesInput | CalendarConnectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CalendarConnection"> | string
    userId?: StringWithAggregatesFilter<"CalendarConnection"> | string
    provider?: StringWithAggregatesFilter<"CalendarConnection"> | string
    accessToken?: StringWithAggregatesFilter<"CalendarConnection"> | string
    refreshToken?: StringNullableWithAggregatesFilter<"CalendarConnection"> | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"CalendarConnection"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"CalendarConnection"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CalendarConnection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CalendarConnection"> | Date | string
  }

  export type HouseholdCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserCreateNestedManyWithoutHouseholdInput
    chores?: ChoreCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserUncheckedCreateNestedManyWithoutHouseholdInput
    chores?: ChoreUncheckedCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserUpdateManyWithoutHouseholdNestedInput
    chores?: ChoreUpdateManyWithoutHouseholdNestedInput
  }

  export type HouseholdUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserUncheckedUpdateManyWithoutHouseholdNestedInput
    chores?: ChoreUncheckedUpdateManyWithoutHouseholdNestedInput
  }

  export type HouseholdCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HouseholdUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HouseholdUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    household: HouseholdCreateNestedOneWithoutMembersInput
    assignedChores?: ChoreScheduleCreateNestedManyWithoutAssignedToInput
    calendarConnections?: CalendarConnectionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    householdId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedChores?: ChoreScheduleUncheckedCreateNestedManyWithoutAssignedToInput
    calendarConnections?: CalendarConnectionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    household?: HouseholdUpdateOneRequiredWithoutMembersNestedInput
    assignedChores?: ChoreScheduleUpdateManyWithoutAssignedToNestedInput
    calendarConnections?: CalendarConnectionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    householdId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedChores?: ChoreScheduleUncheckedUpdateManyWithoutAssignedToNestedInput
    calendarConnections?: CalendarConnectionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    householdId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    householdId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoreCreateInput = {
    id?: string
    title: string
    description?: string | null
    descriptionList?: ChoreCreatedescriptionListInput | string[]
    recurrence: $Enums.RecurrenceType
    recurrenceValue: number
    selectedWeekdays?: ChoreCreateselectedWeekdaysInput | number[]
    estimatedMinutes?: number | null
    scheduledTime?: number | null
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    household: HouseholdCreateNestedOneWithoutChoresInput
    instructions?: ChoreInstructionCreateNestedManyWithoutChoreInput
    schedules?: ChoreScheduleCreateNestedManyWithoutChoreInput
  }

  export type ChoreUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    descriptionList?: ChoreCreatedescriptionListInput | string[]
    householdId: string
    recurrence: $Enums.RecurrenceType
    recurrenceValue: number
    selectedWeekdays?: ChoreCreateselectedWeekdaysInput | number[]
    estimatedMinutes?: number | null
    scheduledTime?: number | null
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    instructions?: ChoreInstructionUncheckedCreateNestedManyWithoutChoreInput
    schedules?: ChoreScheduleUncheckedCreateNestedManyWithoutChoreInput
  }

  export type ChoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionList?: ChoreUpdatedescriptionListInput | string[]
    recurrence?: EnumRecurrenceTypeFieldUpdateOperationsInput | $Enums.RecurrenceType
    recurrenceValue?: IntFieldUpdateOperationsInput | number
    selectedWeekdays?: ChoreUpdateselectedWeekdaysInput | number[]
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    scheduledTime?: NullableIntFieldUpdateOperationsInput | number | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    household?: HouseholdUpdateOneRequiredWithoutChoresNestedInput
    instructions?: ChoreInstructionUpdateManyWithoutChoreNestedInput
    schedules?: ChoreScheduleUpdateManyWithoutChoreNestedInput
  }

  export type ChoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionList?: ChoreUpdatedescriptionListInput | string[]
    householdId?: StringFieldUpdateOperationsInput | string
    recurrence?: EnumRecurrenceTypeFieldUpdateOperationsInput | $Enums.RecurrenceType
    recurrenceValue?: IntFieldUpdateOperationsInput | number
    selectedWeekdays?: ChoreUpdateselectedWeekdaysInput | number[]
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    scheduledTime?: NullableIntFieldUpdateOperationsInput | number | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructions?: ChoreInstructionUncheckedUpdateManyWithoutChoreNestedInput
    schedules?: ChoreScheduleUncheckedUpdateManyWithoutChoreNestedInput
  }

  export type ChoreCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    descriptionList?: ChoreCreatedescriptionListInput | string[]
    householdId: string
    recurrence: $Enums.RecurrenceType
    recurrenceValue: number
    selectedWeekdays?: ChoreCreateselectedWeekdaysInput | number[]
    estimatedMinutes?: number | null
    scheduledTime?: number | null
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionList?: ChoreUpdatedescriptionListInput | string[]
    recurrence?: EnumRecurrenceTypeFieldUpdateOperationsInput | $Enums.RecurrenceType
    recurrenceValue?: IntFieldUpdateOperationsInput | number
    selectedWeekdays?: ChoreUpdateselectedWeekdaysInput | number[]
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    scheduledTime?: NullableIntFieldUpdateOperationsInput | number | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionList?: ChoreUpdatedescriptionListInput | string[]
    householdId?: StringFieldUpdateOperationsInput | string
    recurrence?: EnumRecurrenceTypeFieldUpdateOperationsInput | $Enums.RecurrenceType
    recurrenceValue?: IntFieldUpdateOperationsInput | number
    selectedWeekdays?: ChoreUpdateselectedWeekdaysInput | number[]
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    scheduledTime?: NullableIntFieldUpdateOperationsInput | number | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoreInstructionCreateInput = {
    id?: string
    stepNumber: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chore: ChoreCreateNestedOneWithoutInstructionsInput
  }

  export type ChoreInstructionUncheckedCreateInput = {
    id?: string
    choreId: string
    stepNumber: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChoreInstructionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepNumber?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chore?: ChoreUpdateOneRequiredWithoutInstructionsNestedInput
  }

  export type ChoreInstructionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    choreId?: StringFieldUpdateOperationsInput | string
    stepNumber?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoreInstructionCreateManyInput = {
    id?: string
    choreId: string
    stepNumber: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChoreInstructionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepNumber?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoreInstructionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    choreId?: StringFieldUpdateOperationsInput | string
    stepNumber?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoreScheduleCreateInput = {
    id?: string
    scheduledDate: Date | string
    completedAt?: Date | string | null
    status?: $Enums.ScheduleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    chore: ChoreCreateNestedOneWithoutSchedulesInput
    assignedTo?: UserCreateNestedOneWithoutAssignedChoresInput
  }

  export type ChoreScheduleUncheckedCreateInput = {
    id?: string
    choreId: string
    assignedToId?: string | null
    scheduledDate: Date | string
    completedAt?: Date | string | null
    status?: $Enums.ScheduleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChoreScheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chore?: ChoreUpdateOneRequiredWithoutSchedulesNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedChoresNestedInput
  }

  export type ChoreScheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    choreId?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoreScheduleCreateManyInput = {
    id?: string
    choreId: string
    assignedToId?: string | null
    scheduledDate: Date | string
    completedAt?: Date | string | null
    status?: $Enums.ScheduleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChoreScheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoreScheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    choreId?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarConnectionCreateInput = {
    id?: string
    provider: string
    accessToken: string
    refreshToken?: string | null
    expiresAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCalendarConnectionsInput
  }

  export type CalendarConnectionUncheckedCreateInput = {
    id?: string
    userId: string
    provider: string
    accessToken: string
    refreshToken?: string | null
    expiresAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalendarConnectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCalendarConnectionsNestedInput
  }

  export type CalendarConnectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarConnectionCreateManyInput = {
    id?: string
    userId: string
    provider: string
    accessToken: string
    refreshToken?: string | null
    expiresAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalendarConnectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarConnectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type ChoreListRelationFilter = {
    every?: ChoreWhereInput
    some?: ChoreWhereInput
    none?: ChoreWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HouseholdCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HouseholdMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HouseholdMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type HouseholdScalarRelationFilter = {
    is?: HouseholdWhereInput
    isNot?: HouseholdWhereInput
  }

  export type ChoreScheduleListRelationFilter = {
    every?: ChoreScheduleWhereInput
    some?: ChoreScheduleWhereInput
    none?: ChoreScheduleWhereInput
  }

  export type CalendarConnectionListRelationFilter = {
    every?: CalendarConnectionWhereInput
    some?: CalendarConnectionWhereInput
    none?: CalendarConnectionWhereInput
  }

  export type ChoreScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CalendarConnectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    householdId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    householdId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    householdId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumRecurrenceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RecurrenceType | EnumRecurrenceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RecurrenceType[] | ListEnumRecurrenceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecurrenceType[] | ListEnumRecurrenceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRecurrenceTypeFilter<$PrismaModel> | $Enums.RecurrenceType
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ChoreInstructionListRelationFilter = {
    every?: ChoreInstructionWhereInput
    some?: ChoreInstructionWhereInput
    none?: ChoreInstructionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ChoreInstructionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChoreCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    descriptionList?: SortOrder
    householdId?: SortOrder
    recurrence?: SortOrder
    recurrenceValue?: SortOrder
    selectedWeekdays?: SortOrder
    estimatedMinutes?: SortOrder
    scheduledTime?: SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChoreAvgOrderByAggregateInput = {
    recurrenceValue?: SortOrder
    selectedWeekdays?: SortOrder
    estimatedMinutes?: SortOrder
    scheduledTime?: SortOrder
  }

  export type ChoreMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    householdId?: SortOrder
    recurrence?: SortOrder
    recurrenceValue?: SortOrder
    estimatedMinutes?: SortOrder
    scheduledTime?: SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChoreMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    householdId?: SortOrder
    recurrence?: SortOrder
    recurrenceValue?: SortOrder
    estimatedMinutes?: SortOrder
    scheduledTime?: SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChoreSumOrderByAggregateInput = {
    recurrenceValue?: SortOrder
    selectedWeekdays?: SortOrder
    estimatedMinutes?: SortOrder
    scheduledTime?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRecurrenceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecurrenceType | EnumRecurrenceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RecurrenceType[] | ListEnumRecurrenceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecurrenceType[] | ListEnumRecurrenceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRecurrenceTypeWithAggregatesFilter<$PrismaModel> | $Enums.RecurrenceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecurrenceTypeFilter<$PrismaModel>
    _max?: NestedEnumRecurrenceTypeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ChoreScalarRelationFilter = {
    is?: ChoreWhereInput
    isNot?: ChoreWhereInput
  }

  export type ChoreInstructionChoreIdStepNumberCompoundUniqueInput = {
    choreId: string
    stepNumber: number
  }

  export type ChoreInstructionCountOrderByAggregateInput = {
    id?: SortOrder
    choreId?: SortOrder
    stepNumber?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChoreInstructionAvgOrderByAggregateInput = {
    stepNumber?: SortOrder
  }

  export type ChoreInstructionMaxOrderByAggregateInput = {
    id?: SortOrder
    choreId?: SortOrder
    stepNumber?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChoreInstructionMinOrderByAggregateInput = {
    id?: SortOrder
    choreId?: SortOrder
    stepNumber?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChoreInstructionSumOrderByAggregateInput = {
    stepNumber?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumScheduleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ScheduleStatus | EnumScheduleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumScheduleStatusFilter<$PrismaModel> | $Enums.ScheduleStatus
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ChoreScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    choreId?: SortOrder
    assignedToId?: SortOrder
    scheduledDate?: SortOrder
    completedAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChoreScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    choreId?: SortOrder
    assignedToId?: SortOrder
    scheduledDate?: SortOrder
    completedAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChoreScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    choreId?: SortOrder
    assignedToId?: SortOrder
    scheduledDate?: SortOrder
    completedAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumScheduleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ScheduleStatus | EnumScheduleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumScheduleStatusWithAggregatesFilter<$PrismaModel> | $Enums.ScheduleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumScheduleStatusFilter<$PrismaModel>
    _max?: NestedEnumScheduleStatusFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CalendarConnectionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CalendarConnectionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CalendarConnectionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCreateNestedManyWithoutHouseholdInput = {
    create?: XOR<UserCreateWithoutHouseholdInput, UserUncheckedCreateWithoutHouseholdInput> | UserCreateWithoutHouseholdInput[] | UserUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: UserCreateOrConnectWithoutHouseholdInput | UserCreateOrConnectWithoutHouseholdInput[]
    createMany?: UserCreateManyHouseholdInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ChoreCreateNestedManyWithoutHouseholdInput = {
    create?: XOR<ChoreCreateWithoutHouseholdInput, ChoreUncheckedCreateWithoutHouseholdInput> | ChoreCreateWithoutHouseholdInput[] | ChoreUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: ChoreCreateOrConnectWithoutHouseholdInput | ChoreCreateOrConnectWithoutHouseholdInput[]
    createMany?: ChoreCreateManyHouseholdInputEnvelope
    connect?: ChoreWhereUniqueInput | ChoreWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutHouseholdInput = {
    create?: XOR<UserCreateWithoutHouseholdInput, UserUncheckedCreateWithoutHouseholdInput> | UserCreateWithoutHouseholdInput[] | UserUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: UserCreateOrConnectWithoutHouseholdInput | UserCreateOrConnectWithoutHouseholdInput[]
    createMany?: UserCreateManyHouseholdInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ChoreUncheckedCreateNestedManyWithoutHouseholdInput = {
    create?: XOR<ChoreCreateWithoutHouseholdInput, ChoreUncheckedCreateWithoutHouseholdInput> | ChoreCreateWithoutHouseholdInput[] | ChoreUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: ChoreCreateOrConnectWithoutHouseholdInput | ChoreCreateOrConnectWithoutHouseholdInput[]
    createMany?: ChoreCreateManyHouseholdInputEnvelope
    connect?: ChoreWhereUniqueInput | ChoreWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutHouseholdNestedInput = {
    create?: XOR<UserCreateWithoutHouseholdInput, UserUncheckedCreateWithoutHouseholdInput> | UserCreateWithoutHouseholdInput[] | UserUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: UserCreateOrConnectWithoutHouseholdInput | UserCreateOrConnectWithoutHouseholdInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutHouseholdInput | UserUpsertWithWhereUniqueWithoutHouseholdInput[]
    createMany?: UserCreateManyHouseholdInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutHouseholdInput | UserUpdateWithWhereUniqueWithoutHouseholdInput[]
    updateMany?: UserUpdateManyWithWhereWithoutHouseholdInput | UserUpdateManyWithWhereWithoutHouseholdInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ChoreUpdateManyWithoutHouseholdNestedInput = {
    create?: XOR<ChoreCreateWithoutHouseholdInput, ChoreUncheckedCreateWithoutHouseholdInput> | ChoreCreateWithoutHouseholdInput[] | ChoreUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: ChoreCreateOrConnectWithoutHouseholdInput | ChoreCreateOrConnectWithoutHouseholdInput[]
    upsert?: ChoreUpsertWithWhereUniqueWithoutHouseholdInput | ChoreUpsertWithWhereUniqueWithoutHouseholdInput[]
    createMany?: ChoreCreateManyHouseholdInputEnvelope
    set?: ChoreWhereUniqueInput | ChoreWhereUniqueInput[]
    disconnect?: ChoreWhereUniqueInput | ChoreWhereUniqueInput[]
    delete?: ChoreWhereUniqueInput | ChoreWhereUniqueInput[]
    connect?: ChoreWhereUniqueInput | ChoreWhereUniqueInput[]
    update?: ChoreUpdateWithWhereUniqueWithoutHouseholdInput | ChoreUpdateWithWhereUniqueWithoutHouseholdInput[]
    updateMany?: ChoreUpdateManyWithWhereWithoutHouseholdInput | ChoreUpdateManyWithWhereWithoutHouseholdInput[]
    deleteMany?: ChoreScalarWhereInput | ChoreScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutHouseholdNestedInput = {
    create?: XOR<UserCreateWithoutHouseholdInput, UserUncheckedCreateWithoutHouseholdInput> | UserCreateWithoutHouseholdInput[] | UserUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: UserCreateOrConnectWithoutHouseholdInput | UserCreateOrConnectWithoutHouseholdInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutHouseholdInput | UserUpsertWithWhereUniqueWithoutHouseholdInput[]
    createMany?: UserCreateManyHouseholdInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutHouseholdInput | UserUpdateWithWhereUniqueWithoutHouseholdInput[]
    updateMany?: UserUpdateManyWithWhereWithoutHouseholdInput | UserUpdateManyWithWhereWithoutHouseholdInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ChoreUncheckedUpdateManyWithoutHouseholdNestedInput = {
    create?: XOR<ChoreCreateWithoutHouseholdInput, ChoreUncheckedCreateWithoutHouseholdInput> | ChoreCreateWithoutHouseholdInput[] | ChoreUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: ChoreCreateOrConnectWithoutHouseholdInput | ChoreCreateOrConnectWithoutHouseholdInput[]
    upsert?: ChoreUpsertWithWhereUniqueWithoutHouseholdInput | ChoreUpsertWithWhereUniqueWithoutHouseholdInput[]
    createMany?: ChoreCreateManyHouseholdInputEnvelope
    set?: ChoreWhereUniqueInput | ChoreWhereUniqueInput[]
    disconnect?: ChoreWhereUniqueInput | ChoreWhereUniqueInput[]
    delete?: ChoreWhereUniqueInput | ChoreWhereUniqueInput[]
    connect?: ChoreWhereUniqueInput | ChoreWhereUniqueInput[]
    update?: ChoreUpdateWithWhereUniqueWithoutHouseholdInput | ChoreUpdateWithWhereUniqueWithoutHouseholdInput[]
    updateMany?: ChoreUpdateManyWithWhereWithoutHouseholdInput | ChoreUpdateManyWithWhereWithoutHouseholdInput[]
    deleteMany?: ChoreScalarWhereInput | ChoreScalarWhereInput[]
  }

  export type HouseholdCreateNestedOneWithoutMembersInput = {
    create?: XOR<HouseholdCreateWithoutMembersInput, HouseholdUncheckedCreateWithoutMembersInput>
    connectOrCreate?: HouseholdCreateOrConnectWithoutMembersInput
    connect?: HouseholdWhereUniqueInput
  }

  export type ChoreScheduleCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<ChoreScheduleCreateWithoutAssignedToInput, ChoreScheduleUncheckedCreateWithoutAssignedToInput> | ChoreScheduleCreateWithoutAssignedToInput[] | ChoreScheduleUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: ChoreScheduleCreateOrConnectWithoutAssignedToInput | ChoreScheduleCreateOrConnectWithoutAssignedToInput[]
    createMany?: ChoreScheduleCreateManyAssignedToInputEnvelope
    connect?: ChoreScheduleWhereUniqueInput | ChoreScheduleWhereUniqueInput[]
  }

  export type CalendarConnectionCreateNestedManyWithoutUserInput = {
    create?: XOR<CalendarConnectionCreateWithoutUserInput, CalendarConnectionUncheckedCreateWithoutUserInput> | CalendarConnectionCreateWithoutUserInput[] | CalendarConnectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CalendarConnectionCreateOrConnectWithoutUserInput | CalendarConnectionCreateOrConnectWithoutUserInput[]
    createMany?: CalendarConnectionCreateManyUserInputEnvelope
    connect?: CalendarConnectionWhereUniqueInput | CalendarConnectionWhereUniqueInput[]
  }

  export type ChoreScheduleUncheckedCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<ChoreScheduleCreateWithoutAssignedToInput, ChoreScheduleUncheckedCreateWithoutAssignedToInput> | ChoreScheduleCreateWithoutAssignedToInput[] | ChoreScheduleUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: ChoreScheduleCreateOrConnectWithoutAssignedToInput | ChoreScheduleCreateOrConnectWithoutAssignedToInput[]
    createMany?: ChoreScheduleCreateManyAssignedToInputEnvelope
    connect?: ChoreScheduleWhereUniqueInput | ChoreScheduleWhereUniqueInput[]
  }

  export type CalendarConnectionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CalendarConnectionCreateWithoutUserInput, CalendarConnectionUncheckedCreateWithoutUserInput> | CalendarConnectionCreateWithoutUserInput[] | CalendarConnectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CalendarConnectionCreateOrConnectWithoutUserInput | CalendarConnectionCreateOrConnectWithoutUserInput[]
    createMany?: CalendarConnectionCreateManyUserInputEnvelope
    connect?: CalendarConnectionWhereUniqueInput | CalendarConnectionWhereUniqueInput[]
  }

  export type HouseholdUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<HouseholdCreateWithoutMembersInput, HouseholdUncheckedCreateWithoutMembersInput>
    connectOrCreate?: HouseholdCreateOrConnectWithoutMembersInput
    upsert?: HouseholdUpsertWithoutMembersInput
    connect?: HouseholdWhereUniqueInput
    update?: XOR<XOR<HouseholdUpdateToOneWithWhereWithoutMembersInput, HouseholdUpdateWithoutMembersInput>, HouseholdUncheckedUpdateWithoutMembersInput>
  }

  export type ChoreScheduleUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<ChoreScheduleCreateWithoutAssignedToInput, ChoreScheduleUncheckedCreateWithoutAssignedToInput> | ChoreScheduleCreateWithoutAssignedToInput[] | ChoreScheduleUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: ChoreScheduleCreateOrConnectWithoutAssignedToInput | ChoreScheduleCreateOrConnectWithoutAssignedToInput[]
    upsert?: ChoreScheduleUpsertWithWhereUniqueWithoutAssignedToInput | ChoreScheduleUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: ChoreScheduleCreateManyAssignedToInputEnvelope
    set?: ChoreScheduleWhereUniqueInput | ChoreScheduleWhereUniqueInput[]
    disconnect?: ChoreScheduleWhereUniqueInput | ChoreScheduleWhereUniqueInput[]
    delete?: ChoreScheduleWhereUniqueInput | ChoreScheduleWhereUniqueInput[]
    connect?: ChoreScheduleWhereUniqueInput | ChoreScheduleWhereUniqueInput[]
    update?: ChoreScheduleUpdateWithWhereUniqueWithoutAssignedToInput | ChoreScheduleUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: ChoreScheduleUpdateManyWithWhereWithoutAssignedToInput | ChoreScheduleUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: ChoreScheduleScalarWhereInput | ChoreScheduleScalarWhereInput[]
  }

  export type CalendarConnectionUpdateManyWithoutUserNestedInput = {
    create?: XOR<CalendarConnectionCreateWithoutUserInput, CalendarConnectionUncheckedCreateWithoutUserInput> | CalendarConnectionCreateWithoutUserInput[] | CalendarConnectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CalendarConnectionCreateOrConnectWithoutUserInput | CalendarConnectionCreateOrConnectWithoutUserInput[]
    upsert?: CalendarConnectionUpsertWithWhereUniqueWithoutUserInput | CalendarConnectionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CalendarConnectionCreateManyUserInputEnvelope
    set?: CalendarConnectionWhereUniqueInput | CalendarConnectionWhereUniqueInput[]
    disconnect?: CalendarConnectionWhereUniqueInput | CalendarConnectionWhereUniqueInput[]
    delete?: CalendarConnectionWhereUniqueInput | CalendarConnectionWhereUniqueInput[]
    connect?: CalendarConnectionWhereUniqueInput | CalendarConnectionWhereUniqueInput[]
    update?: CalendarConnectionUpdateWithWhereUniqueWithoutUserInput | CalendarConnectionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CalendarConnectionUpdateManyWithWhereWithoutUserInput | CalendarConnectionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CalendarConnectionScalarWhereInput | CalendarConnectionScalarWhereInput[]
  }

  export type ChoreScheduleUncheckedUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<ChoreScheduleCreateWithoutAssignedToInput, ChoreScheduleUncheckedCreateWithoutAssignedToInput> | ChoreScheduleCreateWithoutAssignedToInput[] | ChoreScheduleUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: ChoreScheduleCreateOrConnectWithoutAssignedToInput | ChoreScheduleCreateOrConnectWithoutAssignedToInput[]
    upsert?: ChoreScheduleUpsertWithWhereUniqueWithoutAssignedToInput | ChoreScheduleUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: ChoreScheduleCreateManyAssignedToInputEnvelope
    set?: ChoreScheduleWhereUniqueInput | ChoreScheduleWhereUniqueInput[]
    disconnect?: ChoreScheduleWhereUniqueInput | ChoreScheduleWhereUniqueInput[]
    delete?: ChoreScheduleWhereUniqueInput | ChoreScheduleWhereUniqueInput[]
    connect?: ChoreScheduleWhereUniqueInput | ChoreScheduleWhereUniqueInput[]
    update?: ChoreScheduleUpdateWithWhereUniqueWithoutAssignedToInput | ChoreScheduleUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: ChoreScheduleUpdateManyWithWhereWithoutAssignedToInput | ChoreScheduleUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: ChoreScheduleScalarWhereInput | ChoreScheduleScalarWhereInput[]
  }

  export type CalendarConnectionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CalendarConnectionCreateWithoutUserInput, CalendarConnectionUncheckedCreateWithoutUserInput> | CalendarConnectionCreateWithoutUserInput[] | CalendarConnectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CalendarConnectionCreateOrConnectWithoutUserInput | CalendarConnectionCreateOrConnectWithoutUserInput[]
    upsert?: CalendarConnectionUpsertWithWhereUniqueWithoutUserInput | CalendarConnectionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CalendarConnectionCreateManyUserInputEnvelope
    set?: CalendarConnectionWhereUniqueInput | CalendarConnectionWhereUniqueInput[]
    disconnect?: CalendarConnectionWhereUniqueInput | CalendarConnectionWhereUniqueInput[]
    delete?: CalendarConnectionWhereUniqueInput | CalendarConnectionWhereUniqueInput[]
    connect?: CalendarConnectionWhereUniqueInput | CalendarConnectionWhereUniqueInput[]
    update?: CalendarConnectionUpdateWithWhereUniqueWithoutUserInput | CalendarConnectionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CalendarConnectionUpdateManyWithWhereWithoutUserInput | CalendarConnectionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CalendarConnectionScalarWhereInput | CalendarConnectionScalarWhereInput[]
  }

  export type ChoreCreatedescriptionListInput = {
    set: string[]
  }

  export type ChoreCreateselectedWeekdaysInput = {
    set: number[]
  }

  export type HouseholdCreateNestedOneWithoutChoresInput = {
    create?: XOR<HouseholdCreateWithoutChoresInput, HouseholdUncheckedCreateWithoutChoresInput>
    connectOrCreate?: HouseholdCreateOrConnectWithoutChoresInput
    connect?: HouseholdWhereUniqueInput
  }

  export type ChoreInstructionCreateNestedManyWithoutChoreInput = {
    create?: XOR<ChoreInstructionCreateWithoutChoreInput, ChoreInstructionUncheckedCreateWithoutChoreInput> | ChoreInstructionCreateWithoutChoreInput[] | ChoreInstructionUncheckedCreateWithoutChoreInput[]
    connectOrCreate?: ChoreInstructionCreateOrConnectWithoutChoreInput | ChoreInstructionCreateOrConnectWithoutChoreInput[]
    createMany?: ChoreInstructionCreateManyChoreInputEnvelope
    connect?: ChoreInstructionWhereUniqueInput | ChoreInstructionWhereUniqueInput[]
  }

  export type ChoreScheduleCreateNestedManyWithoutChoreInput = {
    create?: XOR<ChoreScheduleCreateWithoutChoreInput, ChoreScheduleUncheckedCreateWithoutChoreInput> | ChoreScheduleCreateWithoutChoreInput[] | ChoreScheduleUncheckedCreateWithoutChoreInput[]
    connectOrCreate?: ChoreScheduleCreateOrConnectWithoutChoreInput | ChoreScheduleCreateOrConnectWithoutChoreInput[]
    createMany?: ChoreScheduleCreateManyChoreInputEnvelope
    connect?: ChoreScheduleWhereUniqueInput | ChoreScheduleWhereUniqueInput[]
  }

  export type ChoreInstructionUncheckedCreateNestedManyWithoutChoreInput = {
    create?: XOR<ChoreInstructionCreateWithoutChoreInput, ChoreInstructionUncheckedCreateWithoutChoreInput> | ChoreInstructionCreateWithoutChoreInput[] | ChoreInstructionUncheckedCreateWithoutChoreInput[]
    connectOrCreate?: ChoreInstructionCreateOrConnectWithoutChoreInput | ChoreInstructionCreateOrConnectWithoutChoreInput[]
    createMany?: ChoreInstructionCreateManyChoreInputEnvelope
    connect?: ChoreInstructionWhereUniqueInput | ChoreInstructionWhereUniqueInput[]
  }

  export type ChoreScheduleUncheckedCreateNestedManyWithoutChoreInput = {
    create?: XOR<ChoreScheduleCreateWithoutChoreInput, ChoreScheduleUncheckedCreateWithoutChoreInput> | ChoreScheduleCreateWithoutChoreInput[] | ChoreScheduleUncheckedCreateWithoutChoreInput[]
    connectOrCreate?: ChoreScheduleCreateOrConnectWithoutChoreInput | ChoreScheduleCreateOrConnectWithoutChoreInput[]
    createMany?: ChoreScheduleCreateManyChoreInputEnvelope
    connect?: ChoreScheduleWhereUniqueInput | ChoreScheduleWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ChoreUpdatedescriptionListInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumRecurrenceTypeFieldUpdateOperationsInput = {
    set?: $Enums.RecurrenceType
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ChoreUpdateselectedWeekdaysInput = {
    set?: number[]
    push?: number | number[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type HouseholdUpdateOneRequiredWithoutChoresNestedInput = {
    create?: XOR<HouseholdCreateWithoutChoresInput, HouseholdUncheckedCreateWithoutChoresInput>
    connectOrCreate?: HouseholdCreateOrConnectWithoutChoresInput
    upsert?: HouseholdUpsertWithoutChoresInput
    connect?: HouseholdWhereUniqueInput
    update?: XOR<XOR<HouseholdUpdateToOneWithWhereWithoutChoresInput, HouseholdUpdateWithoutChoresInput>, HouseholdUncheckedUpdateWithoutChoresInput>
  }

  export type ChoreInstructionUpdateManyWithoutChoreNestedInput = {
    create?: XOR<ChoreInstructionCreateWithoutChoreInput, ChoreInstructionUncheckedCreateWithoutChoreInput> | ChoreInstructionCreateWithoutChoreInput[] | ChoreInstructionUncheckedCreateWithoutChoreInput[]
    connectOrCreate?: ChoreInstructionCreateOrConnectWithoutChoreInput | ChoreInstructionCreateOrConnectWithoutChoreInput[]
    upsert?: ChoreInstructionUpsertWithWhereUniqueWithoutChoreInput | ChoreInstructionUpsertWithWhereUniqueWithoutChoreInput[]
    createMany?: ChoreInstructionCreateManyChoreInputEnvelope
    set?: ChoreInstructionWhereUniqueInput | ChoreInstructionWhereUniqueInput[]
    disconnect?: ChoreInstructionWhereUniqueInput | ChoreInstructionWhereUniqueInput[]
    delete?: ChoreInstructionWhereUniqueInput | ChoreInstructionWhereUniqueInput[]
    connect?: ChoreInstructionWhereUniqueInput | ChoreInstructionWhereUniqueInput[]
    update?: ChoreInstructionUpdateWithWhereUniqueWithoutChoreInput | ChoreInstructionUpdateWithWhereUniqueWithoutChoreInput[]
    updateMany?: ChoreInstructionUpdateManyWithWhereWithoutChoreInput | ChoreInstructionUpdateManyWithWhereWithoutChoreInput[]
    deleteMany?: ChoreInstructionScalarWhereInput | ChoreInstructionScalarWhereInput[]
  }

  export type ChoreScheduleUpdateManyWithoutChoreNestedInput = {
    create?: XOR<ChoreScheduleCreateWithoutChoreInput, ChoreScheduleUncheckedCreateWithoutChoreInput> | ChoreScheduleCreateWithoutChoreInput[] | ChoreScheduleUncheckedCreateWithoutChoreInput[]
    connectOrCreate?: ChoreScheduleCreateOrConnectWithoutChoreInput | ChoreScheduleCreateOrConnectWithoutChoreInput[]
    upsert?: ChoreScheduleUpsertWithWhereUniqueWithoutChoreInput | ChoreScheduleUpsertWithWhereUniqueWithoutChoreInput[]
    createMany?: ChoreScheduleCreateManyChoreInputEnvelope
    set?: ChoreScheduleWhereUniqueInput | ChoreScheduleWhereUniqueInput[]
    disconnect?: ChoreScheduleWhereUniqueInput | ChoreScheduleWhereUniqueInput[]
    delete?: ChoreScheduleWhereUniqueInput | ChoreScheduleWhereUniqueInput[]
    connect?: ChoreScheduleWhereUniqueInput | ChoreScheduleWhereUniqueInput[]
    update?: ChoreScheduleUpdateWithWhereUniqueWithoutChoreInput | ChoreScheduleUpdateWithWhereUniqueWithoutChoreInput[]
    updateMany?: ChoreScheduleUpdateManyWithWhereWithoutChoreInput | ChoreScheduleUpdateManyWithWhereWithoutChoreInput[]
    deleteMany?: ChoreScheduleScalarWhereInput | ChoreScheduleScalarWhereInput[]
  }

  export type ChoreInstructionUncheckedUpdateManyWithoutChoreNestedInput = {
    create?: XOR<ChoreInstructionCreateWithoutChoreInput, ChoreInstructionUncheckedCreateWithoutChoreInput> | ChoreInstructionCreateWithoutChoreInput[] | ChoreInstructionUncheckedCreateWithoutChoreInput[]
    connectOrCreate?: ChoreInstructionCreateOrConnectWithoutChoreInput | ChoreInstructionCreateOrConnectWithoutChoreInput[]
    upsert?: ChoreInstructionUpsertWithWhereUniqueWithoutChoreInput | ChoreInstructionUpsertWithWhereUniqueWithoutChoreInput[]
    createMany?: ChoreInstructionCreateManyChoreInputEnvelope
    set?: ChoreInstructionWhereUniqueInput | ChoreInstructionWhereUniqueInput[]
    disconnect?: ChoreInstructionWhereUniqueInput | ChoreInstructionWhereUniqueInput[]
    delete?: ChoreInstructionWhereUniqueInput | ChoreInstructionWhereUniqueInput[]
    connect?: ChoreInstructionWhereUniqueInput | ChoreInstructionWhereUniqueInput[]
    update?: ChoreInstructionUpdateWithWhereUniqueWithoutChoreInput | ChoreInstructionUpdateWithWhereUniqueWithoutChoreInput[]
    updateMany?: ChoreInstructionUpdateManyWithWhereWithoutChoreInput | ChoreInstructionUpdateManyWithWhereWithoutChoreInput[]
    deleteMany?: ChoreInstructionScalarWhereInput | ChoreInstructionScalarWhereInput[]
  }

  export type ChoreScheduleUncheckedUpdateManyWithoutChoreNestedInput = {
    create?: XOR<ChoreScheduleCreateWithoutChoreInput, ChoreScheduleUncheckedCreateWithoutChoreInput> | ChoreScheduleCreateWithoutChoreInput[] | ChoreScheduleUncheckedCreateWithoutChoreInput[]
    connectOrCreate?: ChoreScheduleCreateOrConnectWithoutChoreInput | ChoreScheduleCreateOrConnectWithoutChoreInput[]
    upsert?: ChoreScheduleUpsertWithWhereUniqueWithoutChoreInput | ChoreScheduleUpsertWithWhereUniqueWithoutChoreInput[]
    createMany?: ChoreScheduleCreateManyChoreInputEnvelope
    set?: ChoreScheduleWhereUniqueInput | ChoreScheduleWhereUniqueInput[]
    disconnect?: ChoreScheduleWhereUniqueInput | ChoreScheduleWhereUniqueInput[]
    delete?: ChoreScheduleWhereUniqueInput | ChoreScheduleWhereUniqueInput[]
    connect?: ChoreScheduleWhereUniqueInput | ChoreScheduleWhereUniqueInput[]
    update?: ChoreScheduleUpdateWithWhereUniqueWithoutChoreInput | ChoreScheduleUpdateWithWhereUniqueWithoutChoreInput[]
    updateMany?: ChoreScheduleUpdateManyWithWhereWithoutChoreInput | ChoreScheduleUpdateManyWithWhereWithoutChoreInput[]
    deleteMany?: ChoreScheduleScalarWhereInput | ChoreScheduleScalarWhereInput[]
  }

  export type ChoreCreateNestedOneWithoutInstructionsInput = {
    create?: XOR<ChoreCreateWithoutInstructionsInput, ChoreUncheckedCreateWithoutInstructionsInput>
    connectOrCreate?: ChoreCreateOrConnectWithoutInstructionsInput
    connect?: ChoreWhereUniqueInput
  }

  export type ChoreUpdateOneRequiredWithoutInstructionsNestedInput = {
    create?: XOR<ChoreCreateWithoutInstructionsInput, ChoreUncheckedCreateWithoutInstructionsInput>
    connectOrCreate?: ChoreCreateOrConnectWithoutInstructionsInput
    upsert?: ChoreUpsertWithoutInstructionsInput
    connect?: ChoreWhereUniqueInput
    update?: XOR<XOR<ChoreUpdateToOneWithWhereWithoutInstructionsInput, ChoreUpdateWithoutInstructionsInput>, ChoreUncheckedUpdateWithoutInstructionsInput>
  }

  export type ChoreCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<ChoreCreateWithoutSchedulesInput, ChoreUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: ChoreCreateOrConnectWithoutSchedulesInput
    connect?: ChoreWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignedChoresInput = {
    create?: XOR<UserCreateWithoutAssignedChoresInput, UserUncheckedCreateWithoutAssignedChoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedChoresInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumScheduleStatusFieldUpdateOperationsInput = {
    set?: $Enums.ScheduleStatus
  }

  export type ChoreUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<ChoreCreateWithoutSchedulesInput, ChoreUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: ChoreCreateOrConnectWithoutSchedulesInput
    upsert?: ChoreUpsertWithoutSchedulesInput
    connect?: ChoreWhereUniqueInput
    update?: XOR<XOR<ChoreUpdateToOneWithWhereWithoutSchedulesInput, ChoreUpdateWithoutSchedulesInput>, ChoreUncheckedUpdateWithoutSchedulesInput>
  }

  export type UserUpdateOneWithoutAssignedChoresNestedInput = {
    create?: XOR<UserCreateWithoutAssignedChoresInput, UserUncheckedCreateWithoutAssignedChoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedChoresInput
    upsert?: UserUpsertWithoutAssignedChoresInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedChoresInput, UserUpdateWithoutAssignedChoresInput>, UserUncheckedUpdateWithoutAssignedChoresInput>
  }

  export type UserCreateNestedOneWithoutCalendarConnectionsInput = {
    create?: XOR<UserCreateWithoutCalendarConnectionsInput, UserUncheckedCreateWithoutCalendarConnectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCalendarConnectionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCalendarConnectionsNestedInput = {
    create?: XOR<UserCreateWithoutCalendarConnectionsInput, UserUncheckedCreateWithoutCalendarConnectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCalendarConnectionsInput
    upsert?: UserUpsertWithoutCalendarConnectionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCalendarConnectionsInput, UserUpdateWithoutCalendarConnectionsInput>, UserUncheckedUpdateWithoutCalendarConnectionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRecurrenceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RecurrenceType | EnumRecurrenceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RecurrenceType[] | ListEnumRecurrenceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecurrenceType[] | ListEnumRecurrenceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRecurrenceTypeFilter<$PrismaModel> | $Enums.RecurrenceType
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumRecurrenceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecurrenceType | EnumRecurrenceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RecurrenceType[] | ListEnumRecurrenceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecurrenceType[] | ListEnumRecurrenceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRecurrenceTypeWithAggregatesFilter<$PrismaModel> | $Enums.RecurrenceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecurrenceTypeFilter<$PrismaModel>
    _max?: NestedEnumRecurrenceTypeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumScheduleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ScheduleStatus | EnumScheduleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumScheduleStatusFilter<$PrismaModel> | $Enums.ScheduleStatus
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumScheduleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ScheduleStatus | EnumScheduleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumScheduleStatusWithAggregatesFilter<$PrismaModel> | $Enums.ScheduleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumScheduleStatusFilter<$PrismaModel>
    _max?: NestedEnumScheduleStatusFilter<$PrismaModel>
  }

  export type UserCreateWithoutHouseholdInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedChores?: ChoreScheduleCreateNestedManyWithoutAssignedToInput
    calendarConnections?: CalendarConnectionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHouseholdInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedChores?: ChoreScheduleUncheckedCreateNestedManyWithoutAssignedToInput
    calendarConnections?: CalendarConnectionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHouseholdInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHouseholdInput, UserUncheckedCreateWithoutHouseholdInput>
  }

  export type UserCreateManyHouseholdInputEnvelope = {
    data: UserCreateManyHouseholdInput | UserCreateManyHouseholdInput[]
    skipDuplicates?: boolean
  }

  export type ChoreCreateWithoutHouseholdInput = {
    id?: string
    title: string
    description?: string | null
    descriptionList?: ChoreCreatedescriptionListInput | string[]
    recurrence: $Enums.RecurrenceType
    recurrenceValue: number
    selectedWeekdays?: ChoreCreateselectedWeekdaysInput | number[]
    estimatedMinutes?: number | null
    scheduledTime?: number | null
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    instructions?: ChoreInstructionCreateNestedManyWithoutChoreInput
    schedules?: ChoreScheduleCreateNestedManyWithoutChoreInput
  }

  export type ChoreUncheckedCreateWithoutHouseholdInput = {
    id?: string
    title: string
    description?: string | null
    descriptionList?: ChoreCreatedescriptionListInput | string[]
    recurrence: $Enums.RecurrenceType
    recurrenceValue: number
    selectedWeekdays?: ChoreCreateselectedWeekdaysInput | number[]
    estimatedMinutes?: number | null
    scheduledTime?: number | null
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    instructions?: ChoreInstructionUncheckedCreateNestedManyWithoutChoreInput
    schedules?: ChoreScheduleUncheckedCreateNestedManyWithoutChoreInput
  }

  export type ChoreCreateOrConnectWithoutHouseholdInput = {
    where: ChoreWhereUniqueInput
    create: XOR<ChoreCreateWithoutHouseholdInput, ChoreUncheckedCreateWithoutHouseholdInput>
  }

  export type ChoreCreateManyHouseholdInputEnvelope = {
    data: ChoreCreateManyHouseholdInput | ChoreCreateManyHouseholdInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutHouseholdInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutHouseholdInput, UserUncheckedUpdateWithoutHouseholdInput>
    create: XOR<UserCreateWithoutHouseholdInput, UserUncheckedCreateWithoutHouseholdInput>
  }

  export type UserUpdateWithWhereUniqueWithoutHouseholdInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutHouseholdInput, UserUncheckedUpdateWithoutHouseholdInput>
  }

  export type UserUpdateManyWithWhereWithoutHouseholdInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutHouseholdInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    householdId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type ChoreUpsertWithWhereUniqueWithoutHouseholdInput = {
    where: ChoreWhereUniqueInput
    update: XOR<ChoreUpdateWithoutHouseholdInput, ChoreUncheckedUpdateWithoutHouseholdInput>
    create: XOR<ChoreCreateWithoutHouseholdInput, ChoreUncheckedCreateWithoutHouseholdInput>
  }

  export type ChoreUpdateWithWhereUniqueWithoutHouseholdInput = {
    where: ChoreWhereUniqueInput
    data: XOR<ChoreUpdateWithoutHouseholdInput, ChoreUncheckedUpdateWithoutHouseholdInput>
  }

  export type ChoreUpdateManyWithWhereWithoutHouseholdInput = {
    where: ChoreScalarWhereInput
    data: XOR<ChoreUpdateManyMutationInput, ChoreUncheckedUpdateManyWithoutHouseholdInput>
  }

  export type ChoreScalarWhereInput = {
    AND?: ChoreScalarWhereInput | ChoreScalarWhereInput[]
    OR?: ChoreScalarWhereInput[]
    NOT?: ChoreScalarWhereInput | ChoreScalarWhereInput[]
    id?: StringFilter<"Chore"> | string
    title?: StringFilter<"Chore"> | string
    description?: StringNullableFilter<"Chore"> | string | null
    descriptionList?: StringNullableListFilter<"Chore">
    householdId?: StringFilter<"Chore"> | string
    recurrence?: EnumRecurrenceTypeFilter<"Chore"> | $Enums.RecurrenceType
    recurrenceValue?: IntFilter<"Chore"> | number
    selectedWeekdays?: IntNullableListFilter<"Chore">
    estimatedMinutes?: IntNullableFilter<"Chore"> | number | null
    scheduledTime?: IntNullableFilter<"Chore"> | number | null
    isPrivate?: BoolFilter<"Chore"> | boolean
    createdAt?: DateTimeFilter<"Chore"> | Date | string
    updatedAt?: DateTimeFilter<"Chore"> | Date | string
  }

  export type HouseholdCreateWithoutMembersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chores?: ChoreCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chores?: ChoreUncheckedCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdCreateOrConnectWithoutMembersInput = {
    where: HouseholdWhereUniqueInput
    create: XOR<HouseholdCreateWithoutMembersInput, HouseholdUncheckedCreateWithoutMembersInput>
  }

  export type ChoreScheduleCreateWithoutAssignedToInput = {
    id?: string
    scheduledDate: Date | string
    completedAt?: Date | string | null
    status?: $Enums.ScheduleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    chore: ChoreCreateNestedOneWithoutSchedulesInput
  }

  export type ChoreScheduleUncheckedCreateWithoutAssignedToInput = {
    id?: string
    choreId: string
    scheduledDate: Date | string
    completedAt?: Date | string | null
    status?: $Enums.ScheduleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChoreScheduleCreateOrConnectWithoutAssignedToInput = {
    where: ChoreScheduleWhereUniqueInput
    create: XOR<ChoreScheduleCreateWithoutAssignedToInput, ChoreScheduleUncheckedCreateWithoutAssignedToInput>
  }

  export type ChoreScheduleCreateManyAssignedToInputEnvelope = {
    data: ChoreScheduleCreateManyAssignedToInput | ChoreScheduleCreateManyAssignedToInput[]
    skipDuplicates?: boolean
  }

  export type CalendarConnectionCreateWithoutUserInput = {
    id?: string
    provider: string
    accessToken: string
    refreshToken?: string | null
    expiresAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalendarConnectionUncheckedCreateWithoutUserInput = {
    id?: string
    provider: string
    accessToken: string
    refreshToken?: string | null
    expiresAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalendarConnectionCreateOrConnectWithoutUserInput = {
    where: CalendarConnectionWhereUniqueInput
    create: XOR<CalendarConnectionCreateWithoutUserInput, CalendarConnectionUncheckedCreateWithoutUserInput>
  }

  export type CalendarConnectionCreateManyUserInputEnvelope = {
    data: CalendarConnectionCreateManyUserInput | CalendarConnectionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HouseholdUpsertWithoutMembersInput = {
    update: XOR<HouseholdUpdateWithoutMembersInput, HouseholdUncheckedUpdateWithoutMembersInput>
    create: XOR<HouseholdCreateWithoutMembersInput, HouseholdUncheckedCreateWithoutMembersInput>
    where?: HouseholdWhereInput
  }

  export type HouseholdUpdateToOneWithWhereWithoutMembersInput = {
    where?: HouseholdWhereInput
    data: XOR<HouseholdUpdateWithoutMembersInput, HouseholdUncheckedUpdateWithoutMembersInput>
  }

  export type HouseholdUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chores?: ChoreUpdateManyWithoutHouseholdNestedInput
  }

  export type HouseholdUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chores?: ChoreUncheckedUpdateManyWithoutHouseholdNestedInput
  }

  export type ChoreScheduleUpsertWithWhereUniqueWithoutAssignedToInput = {
    where: ChoreScheduleWhereUniqueInput
    update: XOR<ChoreScheduleUpdateWithoutAssignedToInput, ChoreScheduleUncheckedUpdateWithoutAssignedToInput>
    create: XOR<ChoreScheduleCreateWithoutAssignedToInput, ChoreScheduleUncheckedCreateWithoutAssignedToInput>
  }

  export type ChoreScheduleUpdateWithWhereUniqueWithoutAssignedToInput = {
    where: ChoreScheduleWhereUniqueInput
    data: XOR<ChoreScheduleUpdateWithoutAssignedToInput, ChoreScheduleUncheckedUpdateWithoutAssignedToInput>
  }

  export type ChoreScheduleUpdateManyWithWhereWithoutAssignedToInput = {
    where: ChoreScheduleScalarWhereInput
    data: XOR<ChoreScheduleUpdateManyMutationInput, ChoreScheduleUncheckedUpdateManyWithoutAssignedToInput>
  }

  export type ChoreScheduleScalarWhereInput = {
    AND?: ChoreScheduleScalarWhereInput | ChoreScheduleScalarWhereInput[]
    OR?: ChoreScheduleScalarWhereInput[]
    NOT?: ChoreScheduleScalarWhereInput | ChoreScheduleScalarWhereInput[]
    id?: StringFilter<"ChoreSchedule"> | string
    choreId?: StringFilter<"ChoreSchedule"> | string
    assignedToId?: StringNullableFilter<"ChoreSchedule"> | string | null
    scheduledDate?: DateTimeFilter<"ChoreSchedule"> | Date | string
    completedAt?: DateTimeNullableFilter<"ChoreSchedule"> | Date | string | null
    status?: EnumScheduleStatusFilter<"ChoreSchedule"> | $Enums.ScheduleStatus
    createdAt?: DateTimeFilter<"ChoreSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"ChoreSchedule"> | Date | string
  }

  export type CalendarConnectionUpsertWithWhereUniqueWithoutUserInput = {
    where: CalendarConnectionWhereUniqueInput
    update: XOR<CalendarConnectionUpdateWithoutUserInput, CalendarConnectionUncheckedUpdateWithoutUserInput>
    create: XOR<CalendarConnectionCreateWithoutUserInput, CalendarConnectionUncheckedCreateWithoutUserInput>
  }

  export type CalendarConnectionUpdateWithWhereUniqueWithoutUserInput = {
    where: CalendarConnectionWhereUniqueInput
    data: XOR<CalendarConnectionUpdateWithoutUserInput, CalendarConnectionUncheckedUpdateWithoutUserInput>
  }

  export type CalendarConnectionUpdateManyWithWhereWithoutUserInput = {
    where: CalendarConnectionScalarWhereInput
    data: XOR<CalendarConnectionUpdateManyMutationInput, CalendarConnectionUncheckedUpdateManyWithoutUserInput>
  }

  export type CalendarConnectionScalarWhereInput = {
    AND?: CalendarConnectionScalarWhereInput | CalendarConnectionScalarWhereInput[]
    OR?: CalendarConnectionScalarWhereInput[]
    NOT?: CalendarConnectionScalarWhereInput | CalendarConnectionScalarWhereInput[]
    id?: StringFilter<"CalendarConnection"> | string
    userId?: StringFilter<"CalendarConnection"> | string
    provider?: StringFilter<"CalendarConnection"> | string
    accessToken?: StringFilter<"CalendarConnection"> | string
    refreshToken?: StringNullableFilter<"CalendarConnection"> | string | null
    expiresAt?: DateTimeNullableFilter<"CalendarConnection"> | Date | string | null
    isActive?: BoolFilter<"CalendarConnection"> | boolean
    createdAt?: DateTimeFilter<"CalendarConnection"> | Date | string
    updatedAt?: DateTimeFilter<"CalendarConnection"> | Date | string
  }

  export type HouseholdCreateWithoutChoresInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdUncheckedCreateWithoutChoresInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserUncheckedCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdCreateOrConnectWithoutChoresInput = {
    where: HouseholdWhereUniqueInput
    create: XOR<HouseholdCreateWithoutChoresInput, HouseholdUncheckedCreateWithoutChoresInput>
  }

  export type ChoreInstructionCreateWithoutChoreInput = {
    id?: string
    stepNumber: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChoreInstructionUncheckedCreateWithoutChoreInput = {
    id?: string
    stepNumber: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChoreInstructionCreateOrConnectWithoutChoreInput = {
    where: ChoreInstructionWhereUniqueInput
    create: XOR<ChoreInstructionCreateWithoutChoreInput, ChoreInstructionUncheckedCreateWithoutChoreInput>
  }

  export type ChoreInstructionCreateManyChoreInputEnvelope = {
    data: ChoreInstructionCreateManyChoreInput | ChoreInstructionCreateManyChoreInput[]
    skipDuplicates?: boolean
  }

  export type ChoreScheduleCreateWithoutChoreInput = {
    id?: string
    scheduledDate: Date | string
    completedAt?: Date | string | null
    status?: $Enums.ScheduleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTo?: UserCreateNestedOneWithoutAssignedChoresInput
  }

  export type ChoreScheduleUncheckedCreateWithoutChoreInput = {
    id?: string
    assignedToId?: string | null
    scheduledDate: Date | string
    completedAt?: Date | string | null
    status?: $Enums.ScheduleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChoreScheduleCreateOrConnectWithoutChoreInput = {
    where: ChoreScheduleWhereUniqueInput
    create: XOR<ChoreScheduleCreateWithoutChoreInput, ChoreScheduleUncheckedCreateWithoutChoreInput>
  }

  export type ChoreScheduleCreateManyChoreInputEnvelope = {
    data: ChoreScheduleCreateManyChoreInput | ChoreScheduleCreateManyChoreInput[]
    skipDuplicates?: boolean
  }

  export type HouseholdUpsertWithoutChoresInput = {
    update: XOR<HouseholdUpdateWithoutChoresInput, HouseholdUncheckedUpdateWithoutChoresInput>
    create: XOR<HouseholdCreateWithoutChoresInput, HouseholdUncheckedCreateWithoutChoresInput>
    where?: HouseholdWhereInput
  }

  export type HouseholdUpdateToOneWithWhereWithoutChoresInput = {
    where?: HouseholdWhereInput
    data: XOR<HouseholdUpdateWithoutChoresInput, HouseholdUncheckedUpdateWithoutChoresInput>
  }

  export type HouseholdUpdateWithoutChoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserUpdateManyWithoutHouseholdNestedInput
  }

  export type HouseholdUncheckedUpdateWithoutChoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserUncheckedUpdateManyWithoutHouseholdNestedInput
  }

  export type ChoreInstructionUpsertWithWhereUniqueWithoutChoreInput = {
    where: ChoreInstructionWhereUniqueInput
    update: XOR<ChoreInstructionUpdateWithoutChoreInput, ChoreInstructionUncheckedUpdateWithoutChoreInput>
    create: XOR<ChoreInstructionCreateWithoutChoreInput, ChoreInstructionUncheckedCreateWithoutChoreInput>
  }

  export type ChoreInstructionUpdateWithWhereUniqueWithoutChoreInput = {
    where: ChoreInstructionWhereUniqueInput
    data: XOR<ChoreInstructionUpdateWithoutChoreInput, ChoreInstructionUncheckedUpdateWithoutChoreInput>
  }

  export type ChoreInstructionUpdateManyWithWhereWithoutChoreInput = {
    where: ChoreInstructionScalarWhereInput
    data: XOR<ChoreInstructionUpdateManyMutationInput, ChoreInstructionUncheckedUpdateManyWithoutChoreInput>
  }

  export type ChoreInstructionScalarWhereInput = {
    AND?: ChoreInstructionScalarWhereInput | ChoreInstructionScalarWhereInput[]
    OR?: ChoreInstructionScalarWhereInput[]
    NOT?: ChoreInstructionScalarWhereInput | ChoreInstructionScalarWhereInput[]
    id?: StringFilter<"ChoreInstruction"> | string
    choreId?: StringFilter<"ChoreInstruction"> | string
    stepNumber?: IntFilter<"ChoreInstruction"> | number
    description?: StringFilter<"ChoreInstruction"> | string
    createdAt?: DateTimeFilter<"ChoreInstruction"> | Date | string
    updatedAt?: DateTimeFilter<"ChoreInstruction"> | Date | string
  }

  export type ChoreScheduleUpsertWithWhereUniqueWithoutChoreInput = {
    where: ChoreScheduleWhereUniqueInput
    update: XOR<ChoreScheduleUpdateWithoutChoreInput, ChoreScheduleUncheckedUpdateWithoutChoreInput>
    create: XOR<ChoreScheduleCreateWithoutChoreInput, ChoreScheduleUncheckedCreateWithoutChoreInput>
  }

  export type ChoreScheduleUpdateWithWhereUniqueWithoutChoreInput = {
    where: ChoreScheduleWhereUniqueInput
    data: XOR<ChoreScheduleUpdateWithoutChoreInput, ChoreScheduleUncheckedUpdateWithoutChoreInput>
  }

  export type ChoreScheduleUpdateManyWithWhereWithoutChoreInput = {
    where: ChoreScheduleScalarWhereInput
    data: XOR<ChoreScheduleUpdateManyMutationInput, ChoreScheduleUncheckedUpdateManyWithoutChoreInput>
  }

  export type ChoreCreateWithoutInstructionsInput = {
    id?: string
    title: string
    description?: string | null
    descriptionList?: ChoreCreatedescriptionListInput | string[]
    recurrence: $Enums.RecurrenceType
    recurrenceValue: number
    selectedWeekdays?: ChoreCreateselectedWeekdaysInput | number[]
    estimatedMinutes?: number | null
    scheduledTime?: number | null
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    household: HouseholdCreateNestedOneWithoutChoresInput
    schedules?: ChoreScheduleCreateNestedManyWithoutChoreInput
  }

  export type ChoreUncheckedCreateWithoutInstructionsInput = {
    id?: string
    title: string
    description?: string | null
    descriptionList?: ChoreCreatedescriptionListInput | string[]
    householdId: string
    recurrence: $Enums.RecurrenceType
    recurrenceValue: number
    selectedWeekdays?: ChoreCreateselectedWeekdaysInput | number[]
    estimatedMinutes?: number | null
    scheduledTime?: number | null
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: ChoreScheduleUncheckedCreateNestedManyWithoutChoreInput
  }

  export type ChoreCreateOrConnectWithoutInstructionsInput = {
    where: ChoreWhereUniqueInput
    create: XOR<ChoreCreateWithoutInstructionsInput, ChoreUncheckedCreateWithoutInstructionsInput>
  }

  export type ChoreUpsertWithoutInstructionsInput = {
    update: XOR<ChoreUpdateWithoutInstructionsInput, ChoreUncheckedUpdateWithoutInstructionsInput>
    create: XOR<ChoreCreateWithoutInstructionsInput, ChoreUncheckedCreateWithoutInstructionsInput>
    where?: ChoreWhereInput
  }

  export type ChoreUpdateToOneWithWhereWithoutInstructionsInput = {
    where?: ChoreWhereInput
    data: XOR<ChoreUpdateWithoutInstructionsInput, ChoreUncheckedUpdateWithoutInstructionsInput>
  }

  export type ChoreUpdateWithoutInstructionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionList?: ChoreUpdatedescriptionListInput | string[]
    recurrence?: EnumRecurrenceTypeFieldUpdateOperationsInput | $Enums.RecurrenceType
    recurrenceValue?: IntFieldUpdateOperationsInput | number
    selectedWeekdays?: ChoreUpdateselectedWeekdaysInput | number[]
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    scheduledTime?: NullableIntFieldUpdateOperationsInput | number | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    household?: HouseholdUpdateOneRequiredWithoutChoresNestedInput
    schedules?: ChoreScheduleUpdateManyWithoutChoreNestedInput
  }

  export type ChoreUncheckedUpdateWithoutInstructionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionList?: ChoreUpdatedescriptionListInput | string[]
    householdId?: StringFieldUpdateOperationsInput | string
    recurrence?: EnumRecurrenceTypeFieldUpdateOperationsInput | $Enums.RecurrenceType
    recurrenceValue?: IntFieldUpdateOperationsInput | number
    selectedWeekdays?: ChoreUpdateselectedWeekdaysInput | number[]
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    scheduledTime?: NullableIntFieldUpdateOperationsInput | number | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: ChoreScheduleUncheckedUpdateManyWithoutChoreNestedInput
  }

  export type ChoreCreateWithoutSchedulesInput = {
    id?: string
    title: string
    description?: string | null
    descriptionList?: ChoreCreatedescriptionListInput | string[]
    recurrence: $Enums.RecurrenceType
    recurrenceValue: number
    selectedWeekdays?: ChoreCreateselectedWeekdaysInput | number[]
    estimatedMinutes?: number | null
    scheduledTime?: number | null
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    household: HouseholdCreateNestedOneWithoutChoresInput
    instructions?: ChoreInstructionCreateNestedManyWithoutChoreInput
  }

  export type ChoreUncheckedCreateWithoutSchedulesInput = {
    id?: string
    title: string
    description?: string | null
    descriptionList?: ChoreCreatedescriptionListInput | string[]
    householdId: string
    recurrence: $Enums.RecurrenceType
    recurrenceValue: number
    selectedWeekdays?: ChoreCreateselectedWeekdaysInput | number[]
    estimatedMinutes?: number | null
    scheduledTime?: number | null
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    instructions?: ChoreInstructionUncheckedCreateNestedManyWithoutChoreInput
  }

  export type ChoreCreateOrConnectWithoutSchedulesInput = {
    where: ChoreWhereUniqueInput
    create: XOR<ChoreCreateWithoutSchedulesInput, ChoreUncheckedCreateWithoutSchedulesInput>
  }

  export type UserCreateWithoutAssignedChoresInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    household: HouseholdCreateNestedOneWithoutMembersInput
    calendarConnections?: CalendarConnectionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAssignedChoresInput = {
    id?: string
    name: string
    email: string
    householdId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    calendarConnections?: CalendarConnectionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAssignedChoresInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedChoresInput, UserUncheckedCreateWithoutAssignedChoresInput>
  }

  export type ChoreUpsertWithoutSchedulesInput = {
    update: XOR<ChoreUpdateWithoutSchedulesInput, ChoreUncheckedUpdateWithoutSchedulesInput>
    create: XOR<ChoreCreateWithoutSchedulesInput, ChoreUncheckedCreateWithoutSchedulesInput>
    where?: ChoreWhereInput
  }

  export type ChoreUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: ChoreWhereInput
    data: XOR<ChoreUpdateWithoutSchedulesInput, ChoreUncheckedUpdateWithoutSchedulesInput>
  }

  export type ChoreUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionList?: ChoreUpdatedescriptionListInput | string[]
    recurrence?: EnumRecurrenceTypeFieldUpdateOperationsInput | $Enums.RecurrenceType
    recurrenceValue?: IntFieldUpdateOperationsInput | number
    selectedWeekdays?: ChoreUpdateselectedWeekdaysInput | number[]
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    scheduledTime?: NullableIntFieldUpdateOperationsInput | number | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    household?: HouseholdUpdateOneRequiredWithoutChoresNestedInput
    instructions?: ChoreInstructionUpdateManyWithoutChoreNestedInput
  }

  export type ChoreUncheckedUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionList?: ChoreUpdatedescriptionListInput | string[]
    householdId?: StringFieldUpdateOperationsInput | string
    recurrence?: EnumRecurrenceTypeFieldUpdateOperationsInput | $Enums.RecurrenceType
    recurrenceValue?: IntFieldUpdateOperationsInput | number
    selectedWeekdays?: ChoreUpdateselectedWeekdaysInput | number[]
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    scheduledTime?: NullableIntFieldUpdateOperationsInput | number | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructions?: ChoreInstructionUncheckedUpdateManyWithoutChoreNestedInput
  }

  export type UserUpsertWithoutAssignedChoresInput = {
    update: XOR<UserUpdateWithoutAssignedChoresInput, UserUncheckedUpdateWithoutAssignedChoresInput>
    create: XOR<UserCreateWithoutAssignedChoresInput, UserUncheckedCreateWithoutAssignedChoresInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedChoresInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedChoresInput, UserUncheckedUpdateWithoutAssignedChoresInput>
  }

  export type UserUpdateWithoutAssignedChoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    household?: HouseholdUpdateOneRequiredWithoutMembersNestedInput
    calendarConnections?: CalendarConnectionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedChoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    householdId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calendarConnections?: CalendarConnectionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCalendarConnectionsInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    household: HouseholdCreateNestedOneWithoutMembersInput
    assignedChores?: ChoreScheduleCreateNestedManyWithoutAssignedToInput
  }

  export type UserUncheckedCreateWithoutCalendarConnectionsInput = {
    id?: string
    name: string
    email: string
    householdId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedChores?: ChoreScheduleUncheckedCreateNestedManyWithoutAssignedToInput
  }

  export type UserCreateOrConnectWithoutCalendarConnectionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCalendarConnectionsInput, UserUncheckedCreateWithoutCalendarConnectionsInput>
  }

  export type UserUpsertWithoutCalendarConnectionsInput = {
    update: XOR<UserUpdateWithoutCalendarConnectionsInput, UserUncheckedUpdateWithoutCalendarConnectionsInput>
    create: XOR<UserCreateWithoutCalendarConnectionsInput, UserUncheckedCreateWithoutCalendarConnectionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCalendarConnectionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCalendarConnectionsInput, UserUncheckedUpdateWithoutCalendarConnectionsInput>
  }

  export type UserUpdateWithoutCalendarConnectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    household?: HouseholdUpdateOneRequiredWithoutMembersNestedInput
    assignedChores?: ChoreScheduleUpdateManyWithoutAssignedToNestedInput
  }

  export type UserUncheckedUpdateWithoutCalendarConnectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    householdId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedChores?: ChoreScheduleUncheckedUpdateManyWithoutAssignedToNestedInput
  }

  export type UserCreateManyHouseholdInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChoreCreateManyHouseholdInput = {
    id?: string
    title: string
    description?: string | null
    descriptionList?: ChoreCreatedescriptionListInput | string[]
    recurrence: $Enums.RecurrenceType
    recurrenceValue: number
    selectedWeekdays?: ChoreCreateselectedWeekdaysInput | number[]
    estimatedMinutes?: number | null
    scheduledTime?: number | null
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutHouseholdInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedChores?: ChoreScheduleUpdateManyWithoutAssignedToNestedInput
    calendarConnections?: CalendarConnectionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHouseholdInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedChores?: ChoreScheduleUncheckedUpdateManyWithoutAssignedToNestedInput
    calendarConnections?: CalendarConnectionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutHouseholdInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoreUpdateWithoutHouseholdInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionList?: ChoreUpdatedescriptionListInput | string[]
    recurrence?: EnumRecurrenceTypeFieldUpdateOperationsInput | $Enums.RecurrenceType
    recurrenceValue?: IntFieldUpdateOperationsInput | number
    selectedWeekdays?: ChoreUpdateselectedWeekdaysInput | number[]
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    scheduledTime?: NullableIntFieldUpdateOperationsInput | number | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructions?: ChoreInstructionUpdateManyWithoutChoreNestedInput
    schedules?: ChoreScheduleUpdateManyWithoutChoreNestedInput
  }

  export type ChoreUncheckedUpdateWithoutHouseholdInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionList?: ChoreUpdatedescriptionListInput | string[]
    recurrence?: EnumRecurrenceTypeFieldUpdateOperationsInput | $Enums.RecurrenceType
    recurrenceValue?: IntFieldUpdateOperationsInput | number
    selectedWeekdays?: ChoreUpdateselectedWeekdaysInput | number[]
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    scheduledTime?: NullableIntFieldUpdateOperationsInput | number | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructions?: ChoreInstructionUncheckedUpdateManyWithoutChoreNestedInput
    schedules?: ChoreScheduleUncheckedUpdateManyWithoutChoreNestedInput
  }

  export type ChoreUncheckedUpdateManyWithoutHouseholdInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionList?: ChoreUpdatedescriptionListInput | string[]
    recurrence?: EnumRecurrenceTypeFieldUpdateOperationsInput | $Enums.RecurrenceType
    recurrenceValue?: IntFieldUpdateOperationsInput | number
    selectedWeekdays?: ChoreUpdateselectedWeekdaysInput | number[]
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    scheduledTime?: NullableIntFieldUpdateOperationsInput | number | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoreScheduleCreateManyAssignedToInput = {
    id?: string
    choreId: string
    scheduledDate: Date | string
    completedAt?: Date | string | null
    status?: $Enums.ScheduleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalendarConnectionCreateManyUserInput = {
    id?: string
    provider: string
    accessToken: string
    refreshToken?: string | null
    expiresAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChoreScheduleUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chore?: ChoreUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type ChoreScheduleUncheckedUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    choreId?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoreScheduleUncheckedUpdateManyWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    choreId?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarConnectionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarConnectionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarConnectionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoreInstructionCreateManyChoreInput = {
    id?: string
    stepNumber: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChoreScheduleCreateManyChoreInput = {
    id?: string
    assignedToId?: string | null
    scheduledDate: Date | string
    completedAt?: Date | string | null
    status?: $Enums.ScheduleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChoreInstructionUpdateWithoutChoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepNumber?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoreInstructionUncheckedUpdateWithoutChoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepNumber?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoreInstructionUncheckedUpdateManyWithoutChoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepNumber?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoreScheduleUpdateWithoutChoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: UserUpdateOneWithoutAssignedChoresNestedInput
  }

  export type ChoreScheduleUncheckedUpdateWithoutChoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoreScheduleUncheckedUpdateManyWithoutChoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}