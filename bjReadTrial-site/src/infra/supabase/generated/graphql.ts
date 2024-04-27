/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core"
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /** A high precision floating point value represented as a string */
  BigFloat: { input: any; output: any }
  /** An arbitrary size integer represented as a string */
  BigInt: { input: any; output: any }
  /** An opaque string using for tracking a position in results during pagination */
  Cursor: { input: any; output: any }
  /** A date wihout time information */
  Date: { input: any; output: any }
  /** A date and time */
  Datetime: { input: any; output: any }
  /** A Javascript Object Notation value serialized as a string */
  JSON: { input: any; output: any }
  /** Any type not handled by the type system */
  Opaque: { input: any; output: any }
  /** A time without date information */
  Time: { input: any; output: any }
  /** A universally unique identifier */
  UUID: { input: any; output: any }
}

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq: InputMaybe<Scalars["BigFloat"]["input"]>
  gt: InputMaybe<Scalars["BigFloat"]["input"]>
  gte: InputMaybe<Scalars["BigFloat"]["input"]>
  in: InputMaybe<Array<Scalars["BigFloat"]["input"]>>
  is: InputMaybe<FilterIs>
  lt: InputMaybe<Scalars["BigFloat"]["input"]>
  lte: InputMaybe<Scalars["BigFloat"]["input"]>
  neq: InputMaybe<Scalars["BigFloat"]["input"]>
}

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq: InputMaybe<Scalars["BigInt"]["input"]>
  gt: InputMaybe<Scalars["BigInt"]["input"]>
  gte: InputMaybe<Scalars["BigInt"]["input"]>
  in: InputMaybe<Array<Scalars["BigInt"]["input"]>>
  is: InputMaybe<FilterIs>
  lt: InputMaybe<Scalars["BigInt"]["input"]>
  lte: InputMaybe<Scalars["BigInt"]["input"]>
  neq: InputMaybe<Scalars["BigInt"]["input"]>
}

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq: InputMaybe<Scalars["Boolean"]["input"]>
  is: InputMaybe<FilterIs>
}

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq: InputMaybe<Scalars["Date"]["input"]>
  gt: InputMaybe<Scalars["Date"]["input"]>
  gte: InputMaybe<Scalars["Date"]["input"]>
  in: InputMaybe<Array<Scalars["Date"]["input"]>>
  is: InputMaybe<FilterIs>
  lt: InputMaybe<Scalars["Date"]["input"]>
  lte: InputMaybe<Scalars["Date"]["input"]>
  neq: InputMaybe<Scalars["Date"]["input"]>
}

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq: InputMaybe<Scalars["Datetime"]["input"]>
  gt: InputMaybe<Scalars["Datetime"]["input"]>
  gte: InputMaybe<Scalars["Datetime"]["input"]>
  in: InputMaybe<Array<Scalars["Datetime"]["input"]>>
  is: InputMaybe<FilterIs>
  lt: InputMaybe<Scalars["Datetime"]["input"]>
  lte: InputMaybe<Scalars["Datetime"]["input"]>
  neq: InputMaybe<Scalars["Datetime"]["input"]>
}

export enum FilterIs {
  NotNull = "NOT_NULL",
  Null = "NULL",
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq: InputMaybe<Scalars["Float"]["input"]>
  gt: InputMaybe<Scalars["Float"]["input"]>
  gte: InputMaybe<Scalars["Float"]["input"]>
  in: InputMaybe<Array<Scalars["Float"]["input"]>>
  is: InputMaybe<FilterIs>
  lt: InputMaybe<Scalars["Float"]["input"]>
  lte: InputMaybe<Scalars["Float"]["input"]>
  neq: InputMaybe<Scalars["Float"]["input"]>
}

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq: InputMaybe<Scalars["ID"]["input"]>
}

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq: InputMaybe<Scalars["Int"]["input"]>
  gt: InputMaybe<Scalars["Int"]["input"]>
  gte: InputMaybe<Scalars["Int"]["input"]>
  in: InputMaybe<Array<Scalars["Int"]["input"]>>
  is: InputMaybe<FilterIs>
  lt: InputMaybe<Scalars["Int"]["input"]>
  lte: InputMaybe<Scalars["Int"]["input"]>
  neq: InputMaybe<Scalars["Int"]["input"]>
}

/** The root type for creating and mutating data */
export type Mutation = {
  /** Deletes zero or more records from the `mst_user_profile` collection */
  deleteFrommst_user_profileCollection: Mst_User_ProfileDeleteResponse
  /** Deletes zero or more records from the `trn_subscription` collection */
  deleteFromtrn_subscriptionCollection: Trn_SubscriptionDeleteResponse
  /** Adds one or more `mst_user_profile` records to the collection */
  insertIntomst_user_profileCollection: Maybe<Mst_User_ProfileInsertResponse>
  /** Adds one or more `trn_subscription` records to the collection */
  insertIntotrn_subscriptionCollection: Maybe<Trn_SubscriptionInsertResponse>
  /** Updates zero or more records in the `mst_user_profile` collection */
  updatemst_user_profileCollection: Mst_User_ProfileUpdateResponse
  /** Updates zero or more records in the `trn_subscription` collection */
  updatetrn_subscriptionCollection: Trn_SubscriptionUpdateResponse
}

/** The root type for creating and mutating data */
export type MutationDeleteFrommst_User_ProfileCollectionArgs = {
  atMost?: Scalars["Int"]["input"]
  filter: InputMaybe<Mst_User_ProfileFilter>
}

/** The root type for creating and mutating data */
export type MutationDeleteFromtrn_SubscriptionCollectionArgs = {
  atMost?: Scalars["Int"]["input"]
  filter: InputMaybe<Trn_SubscriptionFilter>
}

/** The root type for creating and mutating data */
export type MutationInsertIntomst_User_ProfileCollectionArgs = {
  objects: Array<Mst_User_ProfileInsertInput>
}

/** The root type for creating and mutating data */
export type MutationInsertIntotrn_SubscriptionCollectionArgs = {
  objects: Array<Trn_SubscriptionInsertInput>
}

/** The root type for creating and mutating data */
export type MutationUpdatemst_User_ProfileCollectionArgs = {
  atMost?: Scalars["Int"]["input"]
  filter: InputMaybe<Mst_User_ProfileFilter>
  set: Mst_User_ProfileUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdatetrn_SubscriptionCollectionArgs = {
  atMost?: Scalars["Int"]["input"]
  filter: InputMaybe<Trn_SubscriptionFilter>
  set: Trn_SubscriptionUpdateInput
}

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars["ID"]["output"]
}

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq: InputMaybe<Scalars["Opaque"]["input"]>
  is: InputMaybe<FilterIs>
}

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = "AscNullsFirst",
  /** Ascending order, nulls last */
  AscNullsLast = "AscNullsLast",
  /** Descending order, nulls first */
  DescNullsFirst = "DescNullsFirst",
  /** Descending order, nulls last */
  DescNullsLast = "DescNullsLast",
}

export type PageInfo = {
  endCursor: Maybe<Scalars["String"]["output"]>
  hasNextPage: Scalars["Boolean"]["output"]
  hasPreviousPage: Scalars["Boolean"]["output"]
  startCursor: Maybe<Scalars["String"]["output"]>
}

/** The root type for querying data */
export type Query = {
  /** A pagable collection of type `mst_user_profile` */
  mst_user_profileCollection: Maybe<Mst_User_ProfileConnection>
  /** Retrieve a record by its `ID` */
  node: Maybe<Node>
  /** A pagable collection of type `trn_subscription` */
  trn_subscriptionCollection: Maybe<Trn_SubscriptionConnection>
}

/** The root type for querying data */
export type QueryMst_User_ProfileCollectionArgs = {
  after: InputMaybe<Scalars["Cursor"]["input"]>
  before: InputMaybe<Scalars["Cursor"]["input"]>
  filter: InputMaybe<Mst_User_ProfileFilter>
  first: InputMaybe<Scalars["Int"]["input"]>
  last: InputMaybe<Scalars["Int"]["input"]>
  orderBy: InputMaybe<Array<Mst_User_ProfileOrderBy>>
}

/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars["ID"]["input"]
}

/** The root type for querying data */
export type QueryTrn_SubscriptionCollectionArgs = {
  after: InputMaybe<Scalars["Cursor"]["input"]>
  before: InputMaybe<Scalars["Cursor"]["input"]>
  filter: InputMaybe<Trn_SubscriptionFilter>
  first: InputMaybe<Scalars["Int"]["input"]>
  last: InputMaybe<Scalars["Int"]["input"]>
  orderBy: InputMaybe<Array<Trn_SubscriptionOrderBy>>
}

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq: InputMaybe<Scalars["String"]["input"]>
  gt: InputMaybe<Scalars["String"]["input"]>
  gte: InputMaybe<Scalars["String"]["input"]>
  ilike: InputMaybe<Scalars["String"]["input"]>
  in: InputMaybe<Array<Scalars["String"]["input"]>>
  iregex: InputMaybe<Scalars["String"]["input"]>
  is: InputMaybe<FilterIs>
  like: InputMaybe<Scalars["String"]["input"]>
  lt: InputMaybe<Scalars["String"]["input"]>
  lte: InputMaybe<Scalars["String"]["input"]>
  neq: InputMaybe<Scalars["String"]["input"]>
  regex: InputMaybe<Scalars["String"]["input"]>
  startsWith: InputMaybe<Scalars["String"]["input"]>
}

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq: InputMaybe<Scalars["Time"]["input"]>
  gt: InputMaybe<Scalars["Time"]["input"]>
  gte: InputMaybe<Scalars["Time"]["input"]>
  in: InputMaybe<Array<Scalars["Time"]["input"]>>
  is: InputMaybe<FilterIs>
  lt: InputMaybe<Scalars["Time"]["input"]>
  lte: InputMaybe<Scalars["Time"]["input"]>
  neq: InputMaybe<Scalars["Time"]["input"]>
}

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq: InputMaybe<Scalars["UUID"]["input"]>
  in: InputMaybe<Array<Scalars["UUID"]["input"]>>
  is: InputMaybe<FilterIs>
  neq: InputMaybe<Scalars["UUID"]["input"]>
}

export type Mst_User_Profile = Node & {
  building: Maybe<Scalars["String"]["output"]>
  city: Maybe<Scalars["String"]["output"]>
  created_at: Scalars["Datetime"]["output"]
  firstname: Scalars["String"]["output"]
  id: Scalars["UUID"]["output"]
  kana: Scalars["String"]["output"]
  lastname: Scalars["String"]["output"]
  nickname: Scalars["String"]["output"]
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"]
  state: Maybe<Scalars["String"]["output"]>
  street: Maybe<Scalars["String"]["output"]>
  updated_at: Maybe<Scalars["Datetime"]["output"]>
  zipcode: Maybe<Scalars["String"]["output"]>
}

export type Mst_User_ProfileConnection = {
  edges: Array<Mst_User_ProfileEdge>
  pageInfo: PageInfo
}

export type Mst_User_ProfileDeleteResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"]
  /** Array of records impacted by the mutation */
  records: Array<Mst_User_Profile>
}

export type Mst_User_ProfileEdge = {
  cursor: Scalars["String"]["output"]
  node: Mst_User_Profile
}

export type Mst_User_ProfileFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and: InputMaybe<Array<Mst_User_ProfileFilter>>
  building: InputMaybe<StringFilter>
  city: InputMaybe<StringFilter>
  created_at: InputMaybe<DatetimeFilter>
  firstname: InputMaybe<StringFilter>
  id: InputMaybe<UuidFilter>
  kana: InputMaybe<StringFilter>
  lastname: InputMaybe<StringFilter>
  nickname: InputMaybe<StringFilter>
  nodeId: InputMaybe<IdFilter>
  /** Negates a filter */
  not: InputMaybe<Mst_User_ProfileFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or: InputMaybe<Array<Mst_User_ProfileFilter>>
  state: InputMaybe<StringFilter>
  street: InputMaybe<StringFilter>
  updated_at: InputMaybe<DatetimeFilter>
  zipcode: InputMaybe<StringFilter>
}

export type Mst_User_ProfileInsertInput = {
  building: InputMaybe<Scalars["String"]["input"]>
  city: InputMaybe<Scalars["String"]["input"]>
  created_at: InputMaybe<Scalars["Datetime"]["input"]>
  firstname: InputMaybe<Scalars["String"]["input"]>
  id: InputMaybe<Scalars["UUID"]["input"]>
  kana: InputMaybe<Scalars["String"]["input"]>
  lastname: InputMaybe<Scalars["String"]["input"]>
  nickname: InputMaybe<Scalars["String"]["input"]>
  state: InputMaybe<Scalars["String"]["input"]>
  street: InputMaybe<Scalars["String"]["input"]>
  updated_at: InputMaybe<Scalars["Datetime"]["input"]>
  zipcode: InputMaybe<Scalars["String"]["input"]>
}

export type Mst_User_ProfileInsertResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"]
  /** Array of records impacted by the mutation */
  records: Array<Mst_User_Profile>
}

export type Mst_User_ProfileOrderBy = {
  building: InputMaybe<OrderByDirection>
  city: InputMaybe<OrderByDirection>
  created_at: InputMaybe<OrderByDirection>
  firstname: InputMaybe<OrderByDirection>
  id: InputMaybe<OrderByDirection>
  kana: InputMaybe<OrderByDirection>
  lastname: InputMaybe<OrderByDirection>
  nickname: InputMaybe<OrderByDirection>
  state: InputMaybe<OrderByDirection>
  street: InputMaybe<OrderByDirection>
  updated_at: InputMaybe<OrderByDirection>
  zipcode: InputMaybe<OrderByDirection>
}

export type Mst_User_ProfileUpdateInput = {
  building: InputMaybe<Scalars["String"]["input"]>
  city: InputMaybe<Scalars["String"]["input"]>
  created_at: InputMaybe<Scalars["Datetime"]["input"]>
  firstname: InputMaybe<Scalars["String"]["input"]>
  id: InputMaybe<Scalars["UUID"]["input"]>
  kana: InputMaybe<Scalars["String"]["input"]>
  lastname: InputMaybe<Scalars["String"]["input"]>
  nickname: InputMaybe<Scalars["String"]["input"]>
  state: InputMaybe<Scalars["String"]["input"]>
  street: InputMaybe<Scalars["String"]["input"]>
  updated_at: InputMaybe<Scalars["Datetime"]["input"]>
  zipcode: InputMaybe<Scalars["String"]["input"]>
}

export type Mst_User_ProfileUpdateResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"]
  /** Array of records impacted by the mutation */
  records: Array<Mst_User_Profile>
}

export type Trn_Subscription = Node & {
  cancel_at: Maybe<Scalars["Datetime"]["output"]>
  created_at: Scalars["Datetime"]["output"]
  current_period_end: Maybe<Scalars["Datetime"]["output"]>
  customer_id: Scalars["String"]["output"]
  id: Scalars["UUID"]["output"]
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"]
  plan_id: Maybe<Scalars["String"]["output"]>
  status: Maybe<Scalars["String"]["output"]>
  user_id: Maybe<Scalars["UUID"]["output"]>
}

export type Trn_SubscriptionConnection = {
  edges: Array<Trn_SubscriptionEdge>
  pageInfo: PageInfo
}

export type Trn_SubscriptionDeleteResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"]
  /** Array of records impacted by the mutation */
  records: Array<Trn_Subscription>
}

export type Trn_SubscriptionEdge = {
  cursor: Scalars["String"]["output"]
  node: Trn_Subscription
}

export type Trn_SubscriptionFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and: InputMaybe<Array<Trn_SubscriptionFilter>>
  cancel_at: InputMaybe<DatetimeFilter>
  created_at: InputMaybe<DatetimeFilter>
  current_period_end: InputMaybe<DatetimeFilter>
  customer_id: InputMaybe<StringFilter>
  id: InputMaybe<UuidFilter>
  nodeId: InputMaybe<IdFilter>
  /** Negates a filter */
  not: InputMaybe<Trn_SubscriptionFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or: InputMaybe<Array<Trn_SubscriptionFilter>>
  plan_id: InputMaybe<StringFilter>
  status: InputMaybe<StringFilter>
  user_id: InputMaybe<UuidFilter>
}

export type Trn_SubscriptionInsertInput = {
  cancel_at: InputMaybe<Scalars["Datetime"]["input"]>
  created_at: InputMaybe<Scalars["Datetime"]["input"]>
  current_period_end: InputMaybe<Scalars["Datetime"]["input"]>
  customer_id: InputMaybe<Scalars["String"]["input"]>
  id: InputMaybe<Scalars["UUID"]["input"]>
  plan_id: InputMaybe<Scalars["String"]["input"]>
  status: InputMaybe<Scalars["String"]["input"]>
  user_id: InputMaybe<Scalars["UUID"]["input"]>
}

export type Trn_SubscriptionInsertResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"]
  /** Array of records impacted by the mutation */
  records: Array<Trn_Subscription>
}

export type Trn_SubscriptionOrderBy = {
  cancel_at: InputMaybe<OrderByDirection>
  created_at: InputMaybe<OrderByDirection>
  current_period_end: InputMaybe<OrderByDirection>
  customer_id: InputMaybe<OrderByDirection>
  id: InputMaybe<OrderByDirection>
  plan_id: InputMaybe<OrderByDirection>
  status: InputMaybe<OrderByDirection>
  user_id: InputMaybe<OrderByDirection>
}

export type Trn_SubscriptionUpdateInput = {
  cancel_at: InputMaybe<Scalars["Datetime"]["input"]>
  created_at: InputMaybe<Scalars["Datetime"]["input"]>
  current_period_end: InputMaybe<Scalars["Datetime"]["input"]>
  customer_id: InputMaybe<Scalars["String"]["input"]>
  id: InputMaybe<Scalars["UUID"]["input"]>
  plan_id: InputMaybe<Scalars["String"]["input"]>
  status: InputMaybe<Scalars["String"]["input"]>
  user_id: InputMaybe<Scalars["UUID"]["input"]>
}

export type Trn_SubscriptionUpdateResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"]
  /** Array of records impacted by the mutation */
  records: Array<Trn_Subscription>
}

export type GetUserProfileQueryVariables = Exact<{
  userId: Scalars["UUID"]["input"]
}>

export type GetUserProfileQuery = {
  mst_user_profileCollection: {
    edges: Array<{
      node: {
        id: any
        firstname: string
        lastname: string
        nickname: string
        created_at: any
      }
    }>
  } | null
}

export const GetUserProfileDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetUserProfile" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "UUID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "mst_user_profileCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "userId" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "firstname" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "lastname" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nickname" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "created_at" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetUserProfileQuery, GetUserProfileQueryVariables>
