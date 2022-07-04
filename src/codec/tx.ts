/* eslint-disable */
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

export interface MsgCreateNftCollection {
  creator: string;
  collection?: MsgCreateNftCollectionMetadata;
  pubKeyHex: string;
  pubKeyType: string;
}

export interface MsgCreateNftCollectionMetadata {
  id: string;
  name?: string;
  images?: NftCollectionImage[];
  url?: string;
  description?: string;
  links?: NftCollectionLink[];
  options?: NftCollectionOption[];
  category?: string;
  symbol?: string;
  opened?: boolean;
  data?: Any;
}

export interface MsgCreateNftCollectionResponse {
  id: string;
}

export interface MsgMintNfts {
  creator: string;
  collectionCreator: string;
  collectionId: string;
  nfts?: MsgNftsMetadata;
  pubKeyHex: string;
  pubKeyType: string;
}

export interface MsgNftsMetadata {
  nfts: MsgNftMetadata[];
}

export interface MsgNftMetadata {
  id: string;
  title: string;
  images: NftImage[];
  url: string;
  description: string;
  links: NftLink[];
  attributes: NftAttribute[];
  data?: Any;
  resellable: boolean;
}

export interface MsgMintNftsResponse {
  ids: string[];
}

export interface MsgBurnNfts {
  creator: string;
  collectionCreator: string;
  collectionId: string;
  nfts?: MsgNftsIds;
  pubKeyHex: string;
  pubKeyType: string;
}

export interface MsgNftsIds {
  nftsIds: string[];
}

export interface MsgBurnNftsResponse {
  ids: string[];
}

function createBaseMsgCreateNftCollection(): MsgCreateNftCollection {
  return { creator: "", collection: undefined, pubKeyHex: "", pubKeyType: "" };
}

export const MsgCreateNftCollection = {
  encode(
    message: MsgCreateNftCollection,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.collection !== undefined) {
      MsgCreateNftCollectionMetadata.encode(
        message.collection,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.pubKeyHex !== "") {
      writer.uint32(26).string(message.pubKeyHex);
    }
    if (message.pubKeyType !== "") {
      writer.uint32(34).string(message.pubKeyType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateNftCollection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateNftCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.collection = MsgCreateNftCollectionMetadata.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.pubKeyHex = reader.string();
          break;
        case 4:
          message.pubKeyType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateNftCollection {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      collection: isSet(object.collection)
        ? MsgCreateNftCollectionMetadata.fromJSON(object.collection)
        : undefined,
      pubKeyHex: isSet(object.pubKeyHex) ? String(object.pubKeyHex) : "",
      pubKeyType: isSet(object.pubKeyType) ? String(object.pubKeyType) : "",
    };
  },

  toJSON(message: MsgCreateNftCollection): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.collection !== undefined &&
      (obj.collection = message.collection
        ? MsgCreateNftCollectionMetadata.toJSON(message.collection)
        : undefined);
    message.pubKeyHex !== undefined && (obj.pubKeyHex = message.pubKeyHex);
    message.pubKeyType !== undefined && (obj.pubKeyType = message.pubKeyType);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateNftCollection>, I>>(
    object: I
  ): MsgCreateNftCollection {
    const message = createBaseMsgCreateNftCollection();
    message.creator = object.creator ?? "";
    message.collection =
      object.collection !== undefined && object.collection !== null
        ? MsgCreateNftCollectionMetadata.fromPartial(object.collection)
        : undefined;
    message.pubKeyHex = object.pubKeyHex ?? "";
    message.pubKeyType = object.pubKeyType ?? "";
    return message;
  },
};

function createBaseMsgCreateNftCollectionMetadata(): MsgCreateNftCollectionMetadata {
  return {
    id: "",
    name: "",
    images: [],
    url: "",
    description: "",
    links: [],
    options: [],
    category: "",
    symbol: "",
    opened: false,
    data: undefined,
  };
}

export const MsgCreateNftCollectionMetadata = {
  encode(
    message: MsgCreateNftCollectionMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name!);
    }
    for (const v of message.images!) {
      NftCollectionImage.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.url !== "") {
      writer.uint32(34).string(message.url!);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description!);
    }
    for (const v of message.links!) {
      NftCollectionLink.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.options!) {
      NftCollectionOption.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.category !== "") {
      writer.uint32(66).string(message.category!);
    }
    if (message.symbol !== "") {
      writer.uint32(74).string(message.symbol!);
    }
    if (message.opened === true) {
      writer.uint32(80).bool(message.opened);
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateNftCollectionMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateNftCollectionMetadata();
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
          message.images!.push(
            NftCollectionImage.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.url = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          message.links!.push(NftCollectionLink.decode(reader, reader.uint32()));
          break;
        case 7:
          message.options!.push(
            NftCollectionOption.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.category = reader.string();
          break;
        case 9:
          message.symbol = reader.string();
          break;
        case 10:
          message.opened = reader.bool();
          break;
        case 11:
          message.data = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateNftCollectionMetadata {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      images: Array.isArray(object?.images)
        ? object.images.map((e: any) => NftCollectionImage.fromJSON(e))
        : [],
      url: isSet(object.url) ? String(object.url) : "",
      description: isSet(object.description) ? String(object.description) : "",
      links: Array.isArray(object?.links)
        ? object.links.map((e: any) => NftCollectionLink.fromJSON(e))
        : [],
      options: Array.isArray(object?.options)
        ? object.options.map((e: any) => NftCollectionOption.fromJSON(e))
        : [],
      category: isSet(object.category) ? String(object.category) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      opened: isSet(object.opened) ? Boolean(object.opened) : false,
      data: isSet(object.data) ? Any.fromJSON(object.data) : undefined,
    };
  },

  toJSON(message: MsgCreateNftCollectionMetadata): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    if (message.images) {
      obj.images = message.images.map((e) =>
        e ? NftCollectionImage.toJSON(e) : undefined
      );
    } else {
      obj.images = [];
    }
    message.url !== undefined && (obj.url = message.url);
    message.description !== undefined &&
      (obj.description = message.description);
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
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.opened !== undefined && (obj.opened = message.opened);
    message.data !== undefined &&
      (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateNftCollectionMetadata>, I>>(
    object: I
  ): MsgCreateNftCollectionMetadata {
    const message = createBaseMsgCreateNftCollectionMetadata();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.images =
      object.images?.map((e) => NftCollectionImage.fromPartial(e)) || [];
    message.url = object.url ?? "";
    message.description = object.description ?? "";
    message.links =
      object.links?.map((e) => NftCollectionLink.fromPartial(e)) || [];
    message.options =
      object.options?.map((e) => NftCollectionOption.fromPartial(e)) || [];
    message.category = object.category ?? "";
    message.symbol = object.symbol ?? "";
    message.opened = object.opened ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? Any.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseMsgCreateNftCollectionResponse(): MsgCreateNftCollectionResponse {
  return { id: "" };
}

export const MsgCreateNftCollectionResponse = {
  encode(
    message: MsgCreateNftCollectionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateNftCollectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateNftCollectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateNftCollectionResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: MsgCreateNftCollectionResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateNftCollectionResponse>, I>>(
    object: I
  ): MsgCreateNftCollectionResponse {
    const message = createBaseMsgCreateNftCollectionResponse();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseMsgMintNfts(): MsgMintNfts {
  return {
    creator: "",
    collectionCreator: "",
    collectionId: "",
    nfts: undefined,
    pubKeyHex: "",
    pubKeyType: "",
  };
}

export const MsgMintNfts = {
  encode(
    message: MsgMintNfts,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.collectionCreator !== "") {
      writer.uint32(18).string(message.collectionCreator);
    }
    if (message.collectionId !== "") {
      writer.uint32(26).string(message.collectionId);
    }
    if (message.nfts !== undefined) {
      MsgNftsMetadata.encode(message.nfts, writer.uint32(34).fork()).ldelim();
    }
    if (message.pubKeyHex !== "") {
      writer.uint32(42).string(message.pubKeyHex);
    }
    if (message.pubKeyType !== "") {
      writer.uint32(50).string(message.pubKeyType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintNfts {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintNfts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.collectionCreator = reader.string();
          break;
        case 3:
          message.collectionId = reader.string();
          break;
        case 4:
          message.nfts = MsgNftsMetadata.decode(reader, reader.uint32());
          break;
        case 5:
          message.pubKeyHex = reader.string();
          break;
        case 6:
          message.pubKeyType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintNfts {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      collectionCreator: isSet(object.collectionCreator)
        ? String(object.collectionCreator)
        : "",
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      nfts: isSet(object.nfts)
        ? MsgNftsMetadata.fromJSON(object.nfts)
        : undefined,
      pubKeyHex: isSet(object.pubKeyHex) ? String(object.pubKeyHex) : "",
      pubKeyType: isSet(object.pubKeyType) ? String(object.pubKeyType) : "",
    };
  },

  toJSON(message: MsgMintNfts): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.collectionCreator !== undefined &&
      (obj.collectionCreator = message.collectionCreator);
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.nfts !== undefined &&
      (obj.nfts = message.nfts
        ? MsgNftsMetadata.toJSON(message.nfts)
        : undefined);
    message.pubKeyHex !== undefined && (obj.pubKeyHex = message.pubKeyHex);
    message.pubKeyType !== undefined && (obj.pubKeyType = message.pubKeyType);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintNfts>, I>>(
    object: I
  ): MsgMintNfts {
    const message = createBaseMsgMintNfts();
    message.creator = object.creator ?? "";
    message.collectionCreator = object.collectionCreator ?? "";
    message.collectionId = object.collectionId ?? "";
    message.nfts =
      object.nfts !== undefined && object.nfts !== null
        ? MsgNftsMetadata.fromPartial(object.nfts)
        : undefined;
    message.pubKeyHex = object.pubKeyHex ?? "";
    message.pubKeyType = object.pubKeyType ?? "";
    return message;
  },
};

function createBaseMsgNftsMetadata(): MsgNftsMetadata {
  return { nfts: [] };
}

export const MsgNftsMetadata = {
  encode(
    message: MsgNftsMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.nfts) {
      MsgNftMetadata.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgNftsMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgNftsMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nfts.push(MsgNftMetadata.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgNftsMetadata {
    return {
      nfts: Array.isArray(object?.nfts)
        ? object.nfts.map((e: any) => MsgNftMetadata.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgNftsMetadata): unknown {
    const obj: any = {};
    if (message.nfts) {
      obj.nfts = message.nfts.map((e) =>
        e ? MsgNftMetadata.toJSON(e) : undefined
      );
    } else {
      obj.nfts = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgNftsMetadata>, I>>(
    object: I
  ): MsgNftsMetadata {
    const message = createBaseMsgNftsMetadata();
    message.nfts = object.nfts?.map((e) => MsgNftMetadata.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgNftMetadata(): MsgNftMetadata {
  return {
    id: "",
    title: "",
    images: [],
    url: "",
    description: "",
    links: [],
    attributes: [],
    data: undefined,
    resellable: false,
  };
}

export const MsgNftMetadata = {
  encode(
    message: MsgNftMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    for (const v of message.images) {
      NftImage.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.url !== "") {
      writer.uint32(34).string(message.url);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    for (const v of message.links) {
      NftLink.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.attributes) {
      NftAttribute.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(66).fork()).ldelim();
    }
    if (message.resellable === true) {
      writer.uint32(72).bool(message.resellable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgNftMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgNftMetadata();
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
          message.images.push(NftImage.decode(reader, reader.uint32()));
          break;
        case 4:
          message.url = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          message.links.push(NftLink.decode(reader, reader.uint32()));
          break;
        case 7:
          message.attributes.push(NftAttribute.decode(reader, reader.uint32()));
          break;
        case 8:
          message.data = Any.decode(reader, reader.uint32());
          break;
        case 9:
          message.resellable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgNftMetadata {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      title: isSet(object.title) ? String(object.title) : "",
      images: Array.isArray(object?.images)
        ? object.images.map((e: any) => NftImage.fromJSON(e))
        : [],
      url: isSet(object.url) ? String(object.url) : "",
      description: isSet(object.description) ? String(object.description) : "",
      links: Array.isArray(object?.links)
        ? object.links.map((e: any) => NftLink.fromJSON(e))
        : [],
      attributes: Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => NftAttribute.fromJSON(e))
        : [],
      data: isSet(object.data) ? Any.fromJSON(object.data) : undefined,
      resellable: isSet(object.resellable) ? Boolean(object.resellable) : false,
    };
  },

  toJSON(message: MsgNftMetadata): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.title !== undefined && (obj.title = message.title);
    if (message.images) {
      obj.images = message.images.map((e) =>
        e ? NftImage.toJSON(e) : undefined
      );
    } else {
      obj.images = [];
    }
    message.url !== undefined && (obj.url = message.url);
    message.description !== undefined &&
      (obj.description = message.description);
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
    message.data !== undefined &&
      (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    message.resellable !== undefined && (obj.resellable = message.resellable);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgNftMetadata>, I>>(
    object: I
  ): MsgNftMetadata {
    const message = createBaseMsgNftMetadata();
    message.id = object.id ?? "";
    message.title = object.title ?? "";
    message.images = object.images?.map((e) => NftImage.fromPartial(e)) || [];
    message.url = object.url ?? "";
    message.description = object.description ?? "";
    message.links = object.links?.map((e) => NftLink.fromPartial(e)) || [];
    message.attributes =
      object.attributes?.map((e) => NftAttribute.fromPartial(e)) || [];
    message.data =
      object.data !== undefined && object.data !== null
        ? Any.fromPartial(object.data)
        : undefined;
    message.resellable = object.resellable ?? false;
    return message;
  },
};

function createBaseMsgMintNftsResponse(): MsgMintNftsResponse {
  return { ids: [] };
}

export const MsgMintNftsResponse = {
  encode(
    message: MsgMintNftsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.ids) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintNftsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintNftsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ids.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintNftsResponse {
    return {
      ids: Array.isArray(object?.ids)
        ? object.ids.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: MsgMintNftsResponse): unknown {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map((e) => e);
    } else {
      obj.ids = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintNftsResponse>, I>>(
    object: I
  ): MsgMintNftsResponse {
    const message = createBaseMsgMintNftsResponse();
    message.ids = object.ids?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgBurnNfts(): MsgBurnNfts {
  return {
    creator: "",
    collectionCreator: "",
    collectionId: "",
    nfts: undefined,
    pubKeyHex: "",
    pubKeyType: "",
  };
}

export const MsgBurnNfts = {
  encode(
    message: MsgBurnNfts,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.collectionCreator !== "") {
      writer.uint32(18).string(message.collectionCreator);
    }
    if (message.collectionId !== "") {
      writer.uint32(26).string(message.collectionId);
    }
    if (message.nfts !== undefined) {
      MsgNftsIds.encode(message.nfts, writer.uint32(34).fork()).ldelim();
    }
    if (message.pubKeyHex !== "") {
      writer.uint32(42).string(message.pubKeyHex);
    }
    if (message.pubKeyType !== "") {
      writer.uint32(50).string(message.pubKeyType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnNfts {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnNfts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.collectionCreator = reader.string();
          break;
        case 3:
          message.collectionId = reader.string();
          break;
        case 4:
          message.nfts = MsgNftsIds.decode(reader, reader.uint32());
          break;
        case 5:
          message.pubKeyHex = reader.string();
          break;
        case 6:
          message.pubKeyType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurnNfts {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      collectionCreator: isSet(object.collectionCreator)
        ? String(object.collectionCreator)
        : "",
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      nfts: isSet(object.nfts) ? MsgNftsIds.fromJSON(object.nfts) : undefined,
      pubKeyHex: isSet(object.pubKeyHex) ? String(object.pubKeyHex) : "",
      pubKeyType: isSet(object.pubKeyType) ? String(object.pubKeyType) : "",
    };
  },

  toJSON(message: MsgBurnNfts): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.collectionCreator !== undefined &&
      (obj.collectionCreator = message.collectionCreator);
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.nfts !== undefined &&
      (obj.nfts = message.nfts ? MsgNftsIds.toJSON(message.nfts) : undefined);
    message.pubKeyHex !== undefined && (obj.pubKeyHex = message.pubKeyHex);
    message.pubKeyType !== undefined && (obj.pubKeyType = message.pubKeyType);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnNfts>, I>>(
    object: I
  ): MsgBurnNfts {
    const message = createBaseMsgBurnNfts();
    message.creator = object.creator ?? "";
    message.collectionCreator = object.collectionCreator ?? "";
    message.collectionId = object.collectionId ?? "";
    message.nfts =
      object.nfts !== undefined && object.nfts !== null
        ? MsgNftsIds.fromPartial(object.nfts)
        : undefined;
    message.pubKeyHex = object.pubKeyHex ?? "";
    message.pubKeyType = object.pubKeyType ?? "";
    return message;
  },
};

function createBaseMsgNftsIds(): MsgNftsIds {
  return { nftsIds: [] };
}

export const MsgNftsIds = {
  encode(
    message: MsgNftsIds,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.nftsIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgNftsIds {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgNftsIds();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftsIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgNftsIds {
    return {
      nftsIds: Array.isArray(object?.nftsIds)
        ? object.nftsIds.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: MsgNftsIds): unknown {
    const obj: any = {};
    if (message.nftsIds) {
      obj.nftsIds = message.nftsIds.map((e) => e);
    } else {
      obj.nftsIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgNftsIds>, I>>(
    object: I
  ): MsgNftsIds {
    const message = createBaseMsgNftsIds();
    message.nftsIds = object.nftsIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgBurnNftsResponse(): MsgBurnNftsResponse {
  return { ids: [] };
}

export const MsgBurnNftsResponse = {
  encode(
    message: MsgBurnNftsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.ids) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnNftsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnNftsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ids.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurnNftsResponse {
    return {
      ids: Array.isArray(object?.ids)
        ? object.ids.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: MsgBurnNftsResponse): unknown {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map((e) => e);
    } else {
      obj.ids = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnNftsResponse>, I>>(
    object: I
  ): MsgBurnNftsResponse {
    const message = createBaseMsgBurnNftsResponse();
    message.ids = object.ids?.map((e) => e) || [];
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateNftCollection(
    request: MsgCreateNftCollection
  ): Promise<MsgCreateNftCollectionResponse>;
  MintNfts(request: MsgMintNfts): Promise<MsgMintNftsResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  BurnNfts(request: MsgBurnNfts): Promise<MsgBurnNftsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateNftCollection = this.CreateNftCollection.bind(this);
    this.MintNfts = this.MintNfts.bind(this);
    this.BurnNfts = this.BurnNfts.bind(this);
  }
  CreateNftCollection(
    request: MsgCreateNftCollection
  ): Promise<MsgCreateNftCollectionResponse> {
    const data = MsgCreateNftCollection.encode(request).finish();
    const promise = this.rpc.request(
      "LimeChain.mantrachain.mdb.v1.Msg",
      "CreateNftCollection",
      data
    );
    return promise.then((data) =>
      MsgCreateNftCollectionResponse.decode(new _m0.Reader(data))
    );
  }

  MintNfts(request: MsgMintNfts): Promise<MsgMintNftsResponse> {
    const data = MsgMintNfts.encode(request).finish();
    const promise = this.rpc.request(
      "LimeChain.mantrachain.mdb.v1.Msg",
      "MintNfts",
      data
    );
    return promise.then((data) =>
      MsgMintNftsResponse.decode(new _m0.Reader(data))
    );
  }

  BurnNfts(request: MsgBurnNfts): Promise<MsgBurnNftsResponse> {
    const data = MsgBurnNfts.encode(request).finish();
    const promise = this.rpc.request(
      "LimeChain.mantrachain.mdb.v1.Msg",
      "BurnNfts",
      data
    );
    return promise.then((data) =>
      MsgBurnNftsResponse.decode(new _m0.Reader(data))
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
