/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "LimeChain.mantrachain.mdb.v1";

export interface NftCollection {
  index: Uint8Array;
  did: string;
  images: NftCollectionImage[];
  url: string;
  links: NftCollectionLink[];
  options: NftCollectionOption[];
  category: string;
  opened: boolean;
  owner: Uint8Array;
  creator: Uint8Array;
}

export interface NftCollectionOption {
  type: string;
  value: string;
  subValue: string;
}

export interface NftCollectionImage {
  type: string;
  url: string;
}

export interface NftCollectionLink {
  type: string;
  url: string;
}

function createBaseNftCollection(): NftCollection {
  return {
    index: new Uint8Array(),
    did: "",
    images: [],
    url: "",
    links: [],
    options: [],
    category: "",
    opened: false,
    owner: new Uint8Array(),
    creator: new Uint8Array(),
  };
}

export const NftCollection = {
  encode(
    message: NftCollection,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.index.length !== 0) {
      writer.uint32(10).bytes(message.index);
    }
    if (message.did !== "") {
      writer.uint32(18).string(message.did);
    }
    for (const v of message.images) {
      NftCollectionImage.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.url !== "") {
      writer.uint32(34).string(message.url);
    }
    for (const v of message.links) {
      NftCollectionLink.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.options) {
      NftCollectionOption.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.category !== "") {
      writer.uint32(58).string(message.category);
    }
    if (message.opened === true) {
      writer.uint32(64).bool(message.opened);
    }
    if (message.owner.length !== 0) {
      writer.uint32(74).bytes(message.owner);
    }
    if (message.creator.length !== 0) {
      writer.uint32(82).bytes(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NftCollection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNftCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.bytes();
          break;
        case 2:
          message.did = reader.string();
          break;
        case 3:
          message.images.push(
            NftCollectionImage.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.url = reader.string();
          break;
        case 5:
          message.links.push(NftCollectionLink.decode(reader, reader.uint32()));
          break;
        case 6:
          message.options.push(
            NftCollectionOption.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.category = reader.string();
          break;
        case 8:
          message.opened = reader.bool();
          break;
        case 9:
          message.owner = reader.bytes();
          break;
        case 10:
          message.creator = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NftCollection {
    return {
      index: isSet(object.index)
        ? bytesFromBase64(object.index)
        : new Uint8Array(),
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
      opened: isSet(object.opened) ? Boolean(object.opened) : false,
      owner: isSet(object.owner)
        ? bytesFromBase64(object.owner)
        : new Uint8Array(),
      creator: isSet(object.creator)
        ? bytesFromBase64(object.creator)
        : new Uint8Array(),
    };
  },

  toJSON(message: NftCollection): unknown {
    const obj: any = {};
    message.index !== undefined &&
      (obj.index = base64FromBytes(
        message.index !== undefined ? message.index : new Uint8Array()
      ));
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
    message.opened !== undefined && (obj.opened = message.opened);
    message.owner !== undefined &&
      (obj.owner = base64FromBytes(
        message.owner !== undefined ? message.owner : new Uint8Array()
      ));
    message.creator !== undefined &&
      (obj.creator = base64FromBytes(
        message.creator !== undefined ? message.creator : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NftCollection>, I>>(
    object: I
  ): NftCollection {
    const message = createBaseNftCollection();
    message.index = object.index ?? new Uint8Array();
    message.did = object.did ?? "";
    message.images =
      object.images?.map((e) => NftCollectionImage.fromPartial(e)) || [];
    message.url = object.url ?? "";
    message.links =
      object.links?.map((e) => NftCollectionLink.fromPartial(e)) || [];
    message.options =
      object.options?.map((e) => NftCollectionOption.fromPartial(e)) || [];
    message.category = object.category ?? "";
    message.opened = object.opened ?? false;
    message.owner = object.owner ?? new Uint8Array();
    message.creator = object.creator ?? new Uint8Array();
    return message;
  },
};

function createBaseNftCollectionOption(): NftCollectionOption {
  return { type: "", value: "", subValue: "" };
}

export const NftCollectionOption = {
  encode(
    message: NftCollectionOption,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): NftCollectionOption {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNftCollectionOption();
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

  fromJSON(object: any): NftCollectionOption {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      value: isSet(object.value) ? String(object.value) : "",
      subValue: isSet(object.subValue) ? String(object.subValue) : "",
    };
  },

  toJSON(message: NftCollectionOption): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.value !== undefined && (obj.value = message.value);
    message.subValue !== undefined && (obj.subValue = message.subValue);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NftCollectionOption>, I>>(
    object: I
  ): NftCollectionOption {
    const message = createBaseNftCollectionOption();
    message.type = object.type ?? "";
    message.value = object.value ?? "";
    message.subValue = object.subValue ?? "";
    return message;
  },
};

function createBaseNftCollectionImage(): NftCollectionImage {
  return { type: "", url: "" };
}

export const NftCollectionImage = {
  encode(
    message: NftCollectionImage,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): NftCollectionImage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNftCollectionImage();
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

  fromJSON(object: any): NftCollectionImage {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      url: isSet(object.url) ? String(object.url) : "",
    };
  },

  toJSON(message: NftCollectionImage): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NftCollectionImage>, I>>(
    object: I
  ): NftCollectionImage {
    const message = createBaseNftCollectionImage();
    message.type = object.type ?? "";
    message.url = object.url ?? "";
    return message;
  },
};

function createBaseNftCollectionLink(): NftCollectionLink {
  return { type: "", url: "" };
}

export const NftCollectionLink = {
  encode(
    message: NftCollectionLink,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): NftCollectionLink {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNftCollectionLink();
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

  fromJSON(object: any): NftCollectionLink {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      url: isSet(object.url) ? String(object.url) : "",
    };
  },

  toJSON(message: NftCollectionLink): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NftCollectionLink>, I>>(
    object: I
  ): NftCollectionLink {
    const message = createBaseNftCollectionLink();
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
