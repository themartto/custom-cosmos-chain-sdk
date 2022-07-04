/* eslint-disable */
import { Params } from "./params";
import { Any } from "./google/protobuf/any";
import Long from "long";
import {
  NftCollectionImage,
  NftCollectionLink,
  NftCollectionOption,
} from "./nft_collection";
import { NftImage, NftLink, NftAttribute } from "./nft";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "LimeChain.mantrachain.mdb.v1";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}

export interface QueryGetNftCollectionRequest {
  creator: string;
  id: string;
}

export interface QueryGetNftCollectionResponse {
  id: string;
  name: string;
  symbol: string;
  description: string;
  did: string;
  images: NftCollectionImage[];
  url: string;
  links: NftCollectionLink[];
  options: NftCollectionOption[];
  category: string;
  owner: string;
  creator: string;
  opened: boolean;
  data: Any;
}

export interface QueryGetNftRequest {
  collectionCreator: string;
  collectionId: string;
  id: string;
}

export interface QueryGetNftResponse {
  id: string;
  title: string;
  did: string;
  description: string;
  images: NftImage[];
  url: string;
  links: NftLink[];
  attributes: NftAttribute[];
  owner: string;
  creator: string;
  data: Any;
  collectionId: string;
  resellable: boolean;
}

export interface QueryGetNftCollectionsRequest {
  creator: string;
}

export interface QueryGetNftCollectionsResponse {
  nftCollections: QueryGetNftCollectionResponse[];
}

export interface QueryGetCollectionNftsRequest {
  collectionCreator: string;
  collectionId: string;
}

export interface QueryGetCollectionNftsResponse {
  nfts: QueryGetNftResponse[];
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(
    _: QueryParamsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(
    _: I
  ): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(
    object: I
  ): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};

function createBaseQueryGetNftCollectionRequest(): QueryGetNftCollectionRequest {
  return { creator: "", id: "" };
}

export const QueryGetNftCollectionRequest = {
  encode(
    message: QueryGetNftCollectionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetNftCollectionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNftCollectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetNftCollectionRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: QueryGetNftCollectionRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetNftCollectionRequest>, I>>(
    object: I
  ): QueryGetNftCollectionRequest {
    const message = createBaseQueryGetNftCollectionRequest();
    message.creator = object.creator ?? "";
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseQueryGetNftCollectionResponse(): QueryGetNftCollectionResponse {
  return {
    id: "",
    name: "",
    symbol: "",
    description: "",
    did: "",
    images: [],
    url: "",
    links: [],
    options: [],
    category: "",
    owner: "",
    creator: "",
    opened: false,
    data: undefined,
  };
}

export const QueryGetNftCollectionResponse = {
  encode(
    message: QueryGetNftCollectionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.did !== "") {
      writer.uint32(42).string(message.did);
    }
    for (const v of message.images) {
      NftCollectionImage.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.url !== "") {
      writer.uint32(58).string(message.url);
    }
    for (const v of message.links) {
      NftCollectionLink.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.options) {
      NftCollectionOption.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.category !== "") {
      writer.uint32(82).string(message.category);
    }
    if (message.owner !== "") {
      writer.uint32(90).string(message.owner);
    }
    if (message.creator !== "") {
      writer.uint32(98).string(message.creator);
    }
    if (message.opened === true) {
      writer.uint32(104).bool(message.opened);
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetNftCollectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNftCollectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.symbol = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.did = reader.string();
          break;
        case 6:
          message.images.push(
            NftCollectionImage.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.url = reader.string();
          break;
        case 8:
          message.links.push(NftCollectionLink.decode(reader, reader.uint32()));
          break;
        case 9:
          message.options.push(
            NftCollectionOption.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.category = reader.string();
          break;
        case 11:
          message.owner = reader.string();
          break;
        case 12:
          message.creator = reader.string();
          break;
        case 13:
          message.opened = reader.bool();
          break;
        case 14:
          message.data = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetNftCollectionResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      description: isSet(object.description) ? String(object.description) : "",
      did: isSet(object.did) ? String(object.did) : "",
      images: Array.isArray(object?.images)
        ? object.images.map((e: any) => NftCollectionImage.fromJSON(e))
        : [],
      url: isSet(object.url) ? String(object.url) : "",
      links: Array.isArray(object?.links)
        ? object.links.map((e: any) => NftCollectionLink.fromJSON(e))
        : [],
      options: Array.isArray(object?.options)
        ? object.options.map((e: any) => NftCollectionOption.fromJSON(e))
        : [],
      category: isSet(object.category) ? String(object.category) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      opened: isSet(object.opened) ? Boolean(object.opened) : false,
      data: isSet(object.data) ? Any.fromJSON(object.data) : undefined,
    };
  },

  toJSON(message: QueryGetNftCollectionResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.description !== undefined &&
      (obj.description = message.description);
    message.did !== undefined && (obj.did = message.did);
    if (message.images) {
      obj.images = message.images.map((e) =>
        e ? NftCollectionImage.toJSON(e) : undefined
      );
    } else {
      obj.images = [];
    }
    message.url !== undefined && (obj.url = message.url);
    if (message.links) {
      obj.links = message.links.map((e) =>
        e ? NftCollectionLink.toJSON(e) : undefined
      );
    } else {
      obj.links = [];
    }
    if (message.options) {
      obj.options = message.options.map((e) =>
        e ? NftCollectionOption.toJSON(e) : undefined
      );
    } else {
      obj.options = [];
    }
    message.category !== undefined && (obj.category = message.category);
    message.owner !== undefined && (obj.owner = message.owner);
    message.creator !== undefined && (obj.creator = message.creator);
    message.opened !== undefined && (obj.opened = message.opened);
    message.data !== undefined &&
      (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetNftCollectionResponse>, I>>(
    object: I
  ): QueryGetNftCollectionResponse {
    const message = createBaseQueryGetNftCollectionResponse();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.description = object.description ?? "";
    message.did = object.did ?? "";
    message.images =
      object.images?.map((e) => NftCollectionImage.fromPartial(e)) || [];
    message.url = object.url ?? "";
    message.links =
      object.links?.map((e) => NftCollectionLink.fromPartial(e)) || [];
    message.options =
      object.options?.map((e) => NftCollectionOption.fromPartial(e)) || [];
    message.category = object.category ?? "";
    message.owner = object.owner ?? "";
    message.creator = object.creator ?? "";
    message.opened = object.opened ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? Any.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseQueryGetNftRequest(): QueryGetNftRequest {
  return { collectionCreator: "", collectionId: "", id: "" };
}

export const QueryGetNftRequest = {
  encode(
    message: QueryGetNftRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionCreator !== "") {
      writer.uint32(10).string(message.collectionCreator);
    }
    if (message.collectionId !== "") {
      writer.uint32(18).string(message.collectionId);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNftRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNftRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionCreator = reader.string();
          break;
        case 2:
          message.collectionId = reader.string();
          break;
        case 3:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetNftRequest {
    return {
      collectionCreator: isSet(object.collectionCreator)
        ? String(object.collectionCreator)
        : "",
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: QueryGetNftRequest): unknown {
    const obj: any = {};
    message.collectionCreator !== undefined &&
      (obj.collectionCreator = message.collectionCreator);
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetNftRequest>, I>>(
    object: I
  ): QueryGetNftRequest {
    const message = createBaseQueryGetNftRequest();
    message.collectionCreator = object.collectionCreator ?? "";
    message.collectionId = object.collectionId ?? "";
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseQueryGetNftResponse(): QueryGetNftResponse {
  return {
    id: "",
    title: "",
    did: "",
    description: "",
    images: [],
    url: "",
    links: [],
    attributes: [],
    owner: "",
    creator: "",
    data: undefined,
    collectionId: "",
    resellable: false,
  };
}

export const QueryGetNftResponse = {
  encode(
    message: QueryGetNftResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.did !== "") {
      writer.uint32(26).string(message.did);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    for (const v of message.images) {
      NftImage.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.url !== "") {
      writer.uint32(50).string(message.url);
    }
    for (const v of message.links) {
      NftLink.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.attributes) {
      NftAttribute.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.owner !== "") {
      writer.uint32(74).string(message.owner);
    }
    if (message.creator !== "") {
      writer.uint32(82).string(message.creator);
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(90).fork()).ldelim();
    }
    if (message.collectionId !== "") {
      writer.uint32(98).string(message.collectionId);
    }
    if (message.resellable === true) {
      writer.uint32(104).bool(message.resellable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNftResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNftResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.did = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.images.push(NftImage.decode(reader, reader.uint32()));
          break;
        case 6:
          message.url = reader.string();
          break;
        case 7:
          message.links.push(NftLink.decode(reader, reader.uint32()));
          break;
        case 8:
          message.attributes.push(NftAttribute.decode(reader, reader.uint32()));
          break;
        case 9:
          message.owner = reader.string();
          break;
        case 10:
          message.creator = reader.string();
          break;
        case 11:
          message.data = Any.decode(reader, reader.uint32());
          break;
        case 12:
          message.collectionId = reader.string();
          break;
        case 13:
          message.resellable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetNftResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      title: isSet(object.title) ? String(object.title) : "",
      did: isSet(object.did) ? String(object.did) : "",
      description: isSet(object.description) ? String(object.description) : "",
      images: Array.isArray(object?.images)
        ? object.images.map((e: any) => NftImage.fromJSON(e))
        : [],
      url: isSet(object.url) ? String(object.url) : "",
      links: Array.isArray(object?.links)
        ? object.links.map((e: any) => NftLink.fromJSON(e))
        : [],
      attributes: Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => NftAttribute.fromJSON(e))
        : [],
      owner: isSet(object.owner) ? String(object.owner) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      data: isSet(object.data) ? Any.fromJSON(object.data) : undefined,
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      resellable: isSet(object.resellable) ? Boolean(object.resellable) : false,
    };
  },

  toJSON(message: QueryGetNftResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.title !== undefined && (obj.title = message.title);
    message.did !== undefined && (obj.did = message.did);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.images) {
      obj.images = message.images.map((e) =>
        e ? NftImage.toJSON(e) : undefined
      );
    } else {
      obj.images = [];
    }
    message.url !== undefined && (obj.url = message.url);
    if (message.links) {
      obj.links = message.links.map((e) => (e ? NftLink.toJSON(e) : undefined));
    } else {
      obj.links = [];
    }
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) =>
        e ? NftAttribute.toJSON(e) : undefined
      );
    } else {
      obj.attributes = [];
    }
    message.owner !== undefined && (obj.owner = message.owner);
    message.creator !== undefined && (obj.creator = message.creator);
    message.data !== undefined &&
      (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.resellable !== undefined && (obj.resellable = message.resellable);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetNftResponse>, I>>(
    object: I
  ): QueryGetNftResponse {
    const message = createBaseQueryGetNftResponse();
    message.id = object.id ?? "";
    message.title = object.title ?? "";
    message.did = object.did ?? "";
    message.description = object.description ?? "";
    message.images = object.images?.map((e) => NftImage.fromPartial(e)) || [];
    message.url = object.url ?? "";
    message.links = object.links?.map((e) => NftLink.fromPartial(e)) || [];
    message.attributes =
      object.attributes?.map((e) => NftAttribute.fromPartial(e)) || [];
    message.owner = object.owner ?? "";
    message.creator = object.creator ?? "";
    message.data =
      object.data !== undefined && object.data !== null
        ? Any.fromPartial(object.data)
        : undefined;
    message.collectionId = object.collectionId ?? "";
    message.resellable = object.resellable ?? false;
    return message;
  },
};

function createBaseQueryGetNftCollectionsRequest(): QueryGetNftCollectionsRequest {
  return { creator: "" };
}

export const QueryGetNftCollectionsRequest = {
  encode(
    message: QueryGetNftCollectionsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetNftCollectionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNftCollectionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetNftCollectionsRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: QueryGetNftCollectionsRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetNftCollectionsRequest>, I>>(
    object: I
  ): QueryGetNftCollectionsRequest {
    const message = createBaseQueryGetNftCollectionsRequest();
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseQueryGetNftCollectionsResponse(): QueryGetNftCollectionsResponse {
  return { nftCollections: [] };
}

export const QueryGetNftCollectionsResponse = {
  encode(
    message: QueryGetNftCollectionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.nftCollections) {
      QueryGetNftCollectionResponse.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetNftCollectionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNftCollectionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftCollections.push(
            QueryGetNftCollectionResponse.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetNftCollectionsResponse {
    return {
      nftCollections: Array.isArray(object?.nftCollections)
        ? object.nftCollections.map((e: any) =>
            QueryGetNftCollectionResponse.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: QueryGetNftCollectionsResponse): unknown {
    const obj: any = {};
    if (message.nftCollections) {
      obj.nftCollections = message.nftCollections.map((e) =>
        e ? QueryGetNftCollectionResponse.toJSON(e) : undefined
      );
    } else {
      obj.nftCollections = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetNftCollectionsResponse>, I>>(
    object: I
  ): QueryGetNftCollectionsResponse {
    const message = createBaseQueryGetNftCollectionsResponse();
    message.nftCollections =
      object.nftCollections?.map((e) =>
        QueryGetNftCollectionResponse.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseQueryGetCollectionNftsRequest(): QueryGetCollectionNftsRequest {
  return { collectionCreator: "", collectionId: "" };
}

export const QueryGetCollectionNftsRequest = {
  encode(
    message: QueryGetCollectionNftsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionCreator !== "") {
      writer.uint32(10).string(message.collectionCreator);
    }
    if (message.collectionId !== "") {
      writer.uint32(18).string(message.collectionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetCollectionNftsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCollectionNftsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionCreator = reader.string();
          break;
        case 2:
          message.collectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCollectionNftsRequest {
    return {
      collectionCreator: isSet(object.collectionCreator)
        ? String(object.collectionCreator)
        : "",
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
    };
  },

  toJSON(message: QueryGetCollectionNftsRequest): unknown {
    const obj: any = {};
    message.collectionCreator !== undefined &&
      (obj.collectionCreator = message.collectionCreator);
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetCollectionNftsRequest>, I>>(
    object: I
  ): QueryGetCollectionNftsRequest {
    const message = createBaseQueryGetCollectionNftsRequest();
    message.collectionCreator = object.collectionCreator ?? "";
    message.collectionId = object.collectionId ?? "";
    return message;
  },
};

function createBaseQueryGetCollectionNftsResponse(): QueryGetCollectionNftsResponse {
  return { nfts: [] };
}

export const QueryGetCollectionNftsResponse = {
  encode(
    message: QueryGetCollectionNftsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.nfts) {
      QueryGetNftResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetCollectionNftsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCollectionNftsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nfts.push(
            QueryGetNftResponse.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCollectionNftsResponse {
    return {
      nfts: Array.isArray(object?.nfts)
        ? object.nfts.map((e: any) => QueryGetNftResponse.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryGetCollectionNftsResponse): unknown {
    const obj: any = {};
    if (message.nfts) {
      obj.nfts = message.nfts.map((e) =>
        e ? QueryGetNftResponse.toJSON(e) : undefined
      );
    } else {
      obj.nfts = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetCollectionNftsResponse>, I>>(
    object: I
  ): QueryGetCollectionNftsResponse {
    const message = createBaseQueryGetCollectionNftsResponse();
    message.nfts =
      object.nfts?.map((e) => QueryGetNftResponse.fromPartial(e)) || [];
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a NftCollection. */
  NftCollection(
    request: QueryGetNftCollectionRequest
  ): Promise<QueryGetNftCollectionResponse>;
  /** Queries a Nft. */
  Nft(request: QueryGetNftRequest): Promise<QueryGetNftResponse>;
  /** Queries a list of NftCollections items. */
  NftCollections(
    request: QueryGetNftCollectionsRequest
  ): Promise<QueryGetNftCollectionsResponse>;
  /** Queries a list of CollectionNfts items. */
  CollectionNfts(
    request: QueryGetCollectionNftsRequest
  ): Promise<QueryGetCollectionNftsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.NftCollection = this.NftCollection.bind(this);
    this.Nft = this.Nft.bind(this);
    this.NftCollections = this.NftCollections.bind(this);
    this.CollectionNfts = this.CollectionNfts.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "LimeChain.mantrachain.mdb.v1.Query",
      "Params",
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  NftCollection(
    request: QueryGetNftCollectionRequest
  ): Promise<QueryGetNftCollectionResponse> {
    const data = QueryGetNftCollectionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "LimeChain.mantrachain.mdb.v1.Query",
      "NftCollection",
      data
    );
    return promise.then((data) =>
      QueryGetNftCollectionResponse.decode(new _m0.Reader(data))
    );
  }

  Nft(request: QueryGetNftRequest): Promise<QueryGetNftResponse> {
    const data = QueryGetNftRequest.encode(request).finish();
    const promise = this.rpc.request(
      "LimeChain.mantrachain.mdb.v1.Query",
      "Nft",
      data
    );
    return promise.then((data) =>
      QueryGetNftResponse.decode(new _m0.Reader(data))
    );
  }

  NftCollections(
    request: QueryGetNftCollectionsRequest
  ): Promise<QueryGetNftCollectionsResponse> {
    const data = QueryGetNftCollectionsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "LimeChain.mantrachain.mdb.v1.Query",
      "NftCollections",
      data
    );
    return promise.then((data) =>
      QueryGetNftCollectionsResponse.decode(new _m0.Reader(data))
    );
  }

  CollectionNfts(
    request: QueryGetCollectionNftsRequest
  ): Promise<QueryGetCollectionNftsResponse> {
    const data = QueryGetCollectionNftsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "LimeChain.mantrachain.mdb.v1.Query",
      "CollectionNfts",
      data
    );
    return promise.then((data) =>
      QueryGetCollectionNftsResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
