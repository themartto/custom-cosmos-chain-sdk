/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "LimeChain.mantrachain.mdb.v1";

export interface Nft {
  index: Uint8Array;
  title: string;
  did: string;
  images: NftImage[];
  url: string;
  description: string;
  links: NftLink[];
  attributes: NftAttribute[];
  resellable: boolean;
  creator: Uint8Array;
  collectionId: string;
  collectionIndex: Uint8Array;
}

export interface NftAttribute {
  type: string;
  value: string;
  subValue: string;
}

export interface NftImage {
  type: string;
  url: string;
}

export interface NftLink {
  type: string;
  url: string;
}

function createBaseNft(): Nft {
  return {
    index: new Uint8Array(),
    title: "",
    did: "",
    images: [],
    url: "",
    description: "",
    links: [],
    attributes: [],
    resellable: false,
    creator: new Uint8Array(),
    collectionId: "",
    collectionIndex: new Uint8Array(),
  };
}

export const Nft = {
  encode(message: Nft, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index.length !== 0) {
      writer.uint32(10).bytes(message.index);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.did !== "") {
      writer.uint32(26).string(message.did);
    }
    for (const v of message.images) {
      NftImage.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.url !== "") {
      writer.uint32(42).string(message.url);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    for (const v of message.links) {
      NftLink.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.attributes) {
      NftAttribute.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.resellable === true) {
      writer.uint32(72).bool(message.resellable);
    }
    if (message.creator.length !== 0) {
      writer.uint32(82).bytes(message.creator);
    }
    if (message.collectionId !== "") {
      writer.uint32(90).string(message.collectionId);
    }
    if (message.collectionIndex.length !== 0) {
      writer.uint32(98).bytes(message.collectionIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Nft {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNft();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.bytes();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.did = reader.string();
          break;
        case 4:
          message.images.push(NftImage.decode(reader, reader.uint32()));
          break;
        case 5:
          message.url = reader.string();
          break;
        case 6:
          message.description = reader.string();
          break;
        case 7:
          message.links.push(NftLink.decode(reader, reader.uint32()));
          break;
        case 8:
          message.attributes.push(NftAttribute.decode(reader, reader.uint32()));
          break;
        case 9:
          message.resellable = reader.bool();
          break;
        case 10:
          message.creator = reader.bytes();
          break;
        case 11:
          message.collectionId = reader.string();
          break;
        case 12:
          message.collectionIndex = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Nft {
    return {
      index: isSet(object.index)
        ? bytesFromBase64(object.index)
        : new Uint8Array(),
      title: isSet(object.title) ? String(object.title) : "",
      did: isSet(object.did) ? String(object.did) : "",
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
      resellable: isSet(object.resellable) ? Boolean(object.resellable) : false,
      creator: isSet(object.creator)
        ? bytesFromBase64(object.creator)
        : new Uint8Array(),
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : "",
      collectionIndex: isSet(object.collectionIndex)
        ? bytesFromBase64(object.collectionIndex)
        : new Uint8Array(),
    };
  },

  toJSON(message: Nft): unknown {
    const obj: any = {};
    message.index !== undefined &&
      (obj.index = base64FromBytes(
        message.index !== undefined ? message.index : new Uint8Array()
      ));
    message.title !== undefined && (obj.title = message.title);
    message.did !== undefined && (obj.did = message.did);
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
    message.resellable !== undefined && (obj.resellable = message.resellable);
    message.creator !== undefined &&
      (obj.creator = base64FromBytes(
        message.creator !== undefined ? message.creator : new Uint8Array()
      ));
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.collectionIndex !== undefined &&
      (obj.collectionIndex = base64FromBytes(
        message.collectionIndex !== undefined
          ? message.collectionIndex
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Nft>, I>>(object: I): Nft {
    const message = createBaseNft();
    message.index = object.index ?? new Uint8Array();
    message.title = object.title ?? "";
    message.did = object.did ?? "";
    message.images = object.images?.map((e) => NftImage.fromPartial(e)) || [];
    message.url = object.url ?? "";
    message.description = object.description ?? "";
    message.links = object.links?.map((e) => NftLink.fromPartial(e)) || [];
    message.attributes =
      object.attributes?.map((e) => NftAttribute.fromPartial(e)) || [];
    message.resellable = object.resellable ?? false;
    message.creator = object.creator ?? new Uint8Array();
    message.collectionId = object.collectionId ?? "";
    message.collectionIndex = object.collectionIndex ?? new Uint8Array();
    return message;
  },
};

function createBaseNftAttribute(): NftAttribute {
  return { type: "", value: "", subValue: "" };
}

export const NftAttribute = {
  encode(
    message: NftAttribute,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    if (message.subValue !== "") {
      writer.uint32(26).string(message.subValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NftAttribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNftAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        case 3:
          message.subValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NftAttribute {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      value: isSet(object.value) ? String(object.value) : "",
      subValue: isSet(object.subValue) ? String(object.subValue) : "",
    };
  },

  toJSON(message: NftAttribute): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.value !== undefined && (obj.value = message.value);
    message.subValue !== undefined && (obj.subValue = message.subValue);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NftAttribute>, I>>(
    object: I
  ): NftAttribute {
    const message = createBaseNftAttribute();
    message.type = object.type ?? "";
    message.value = object.value ?? "";
    message.subValue = object.subValue ?? "";
    return message;
  },
};

function createBaseNftImage(): NftImage {
  return { type: "", url: "" };
}

export const NftImage = {
  encode(
    message: NftImage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NftImage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNftImage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NftImage {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      url: isSet(object.url) ? String(object.url) : "",
    };
  },

  toJSON(message: NftImage): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NftImage>, I>>(object: I): NftImage {
    const message = createBaseNftImage();
    message.type = object.type ?? "";
    message.url = object.url ?? "";
    return message;
  },
};

function createBaseNftLink(): NftLink {
  return { type: "", url: "" };
}

export const NftLink = {
  encode(
    message: NftLink,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NftLink {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNftLink();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NftLink {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      url: isSet(object.url) ? String(object.url) : "",
    };
  },

  toJSON(message: NftLink): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NftLink>, I>>(object: I): NftLink {
    const message = createBaseNftLink();
    message.type = object.type ?? "";
    message.url = object.url ?? "";
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  arr.forEach((byte) => {
    bin.push(String.fromCharCode(byte));
  });
  return btoa(bin.join(""));
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
