"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "LimeChain.mantrachain.mdb.v1";
function createBaseParams() {
    return {
        validNftCollectionId: "",
        nftCollectionDefaultId: "",
        nftCollectionDefaultName: "",
        validNftCollectionMetadataSymbolMinLength: 0,
        validNftCollectionMetadataSymbolMaxLength: 0,
        validNftCollectionMetadataDescriptionMaxLength: 0,
        validNftCollectionMetadataNameMaxLength: 0,
        validNftCollectionMetadataImagesMaxCount: 0,
        validNftCollectionMetadataImagesTypeMaxLength: 0,
        validNftCollectionMetadataLinksMaxCount: 0,
        validNftCollectionMetadataLinksTypeMaxLength: 0,
        validNftCollectionMetadataOptionsMaxCount: 0,
        validNftCollectionMetadataOptionsTypeMaxLength: 0,
        validNftCollectionMetadataOptionsValueMaxLength: 0,
        validNftCollectionMetadataOptionsSubValueMaxLength: 0,
        validNftId: "",
        validNftMetadataMaxCount: 0,
        validNftMetadataTitleMaxLength: 0,
        validNftMetadataDescriptionMaxLength: 0,
        validNftMetadataImagesMaxCount: 0,
        validNftMetadataImagesTypeMaxLength: 0,
        validNftMetadataLinksMaxCount: 0,
        validNftMetadataLinksTypeMaxLength: 0,
        validNftMetadataAttributesMaxCount: 0,
        validNftMetadataAttributesTypeMaxLength: 0,
        validNftMetadataAttributesValueMaxLength: 0,
        validNftMetadataAttributesSubValueMaxLength: 0,
        validBurnNftMaxCount: 0,
    };
}
exports.Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validNftCollectionId !== "") {
            writer.uint32(10).string(message.validNftCollectionId);
        }
        if (message.nftCollectionDefaultId !== "") {
            writer.uint32(18).string(message.nftCollectionDefaultId);
        }
        if (message.nftCollectionDefaultName !== "") {
            writer.uint32(26).string(message.nftCollectionDefaultName);
        }
        if (message.validNftCollectionMetadataSymbolMinLength !== 0) {
            writer
                .uint32(32)
                .int32(message.validNftCollectionMetadataSymbolMinLength);
        }
        if (message.validNftCollectionMetadataSymbolMaxLength !== 0) {
            writer
                .uint32(40)
                .int32(message.validNftCollectionMetadataSymbolMaxLength);
        }
        if (message.validNftCollectionMetadataDescriptionMaxLength !== 0) {
            writer
                .uint32(48)
                .int32(message.validNftCollectionMetadataDescriptionMaxLength);
        }
        if (message.validNftCollectionMetadataNameMaxLength !== 0) {
            writer.uint32(56).int32(message.validNftCollectionMetadataNameMaxLength);
        }
        if (message.validNftCollectionMetadataImagesMaxCount !== 0) {
            writer.uint32(64).int32(message.validNftCollectionMetadataImagesMaxCount);
        }
        if (message.validNftCollectionMetadataImagesTypeMaxLength !== 0) {
            writer
                .uint32(72)
                .int32(message.validNftCollectionMetadataImagesTypeMaxLength);
        }
        if (message.validNftCollectionMetadataLinksMaxCount !== 0) {
            writer.uint32(80).int32(message.validNftCollectionMetadataLinksMaxCount);
        }
        if (message.validNftCollectionMetadataLinksTypeMaxLength !== 0) {
            writer
                .uint32(88)
                .int32(message.validNftCollectionMetadataLinksTypeMaxLength);
        }
        if (message.validNftCollectionMetadataOptionsMaxCount !== 0) {
            writer
                .uint32(96)
                .int32(message.validNftCollectionMetadataOptionsMaxCount);
        }
        if (message.validNftCollectionMetadataOptionsTypeMaxLength !== 0) {
            writer
                .uint32(104)
                .int32(message.validNftCollectionMetadataOptionsTypeMaxLength);
        }
        if (message.validNftCollectionMetadataOptionsValueMaxLength !== 0) {
            writer
                .uint32(112)
                .int32(message.validNftCollectionMetadataOptionsValueMaxLength);
        }
        if (message.validNftCollectionMetadataOptionsSubValueMaxLength !== 0) {
            writer
                .uint32(120)
                .int32(message.validNftCollectionMetadataOptionsSubValueMaxLength);
        }
        if (message.validNftId !== "") {
            writer.uint32(130).string(message.validNftId);
        }
        if (message.validNftMetadataMaxCount !== 0) {
            writer.uint32(136).int32(message.validNftMetadataMaxCount);
        }
        if (message.validNftMetadataTitleMaxLength !== 0) {
            writer.uint32(144).int32(message.validNftMetadataTitleMaxLength);
        }
        if (message.validNftMetadataDescriptionMaxLength !== 0) {
            writer.uint32(152).int32(message.validNftMetadataDescriptionMaxLength);
        }
        if (message.validNftMetadataImagesMaxCount !== 0) {
            writer.uint32(160).int32(message.validNftMetadataImagesMaxCount);
        }
        if (message.validNftMetadataImagesTypeMaxLength !== 0) {
            writer.uint32(168).int32(message.validNftMetadataImagesTypeMaxLength);
        }
        if (message.validNftMetadataLinksMaxCount !== 0) {
            writer.uint32(176).int32(message.validNftMetadataLinksMaxCount);
        }
        if (message.validNftMetadataLinksTypeMaxLength !== 0) {
            writer.uint32(184).int32(message.validNftMetadataLinksTypeMaxLength);
        }
        if (message.validNftMetadataAttributesMaxCount !== 0) {
            writer.uint32(192).int32(message.validNftMetadataAttributesMaxCount);
        }
        if (message.validNftMetadataAttributesTypeMaxLength !== 0) {
            writer.uint32(200).int32(message.validNftMetadataAttributesTypeMaxLength);
        }
        if (message.validNftMetadataAttributesValueMaxLength !== 0) {
            writer
                .uint32(208)
                .int32(message.validNftMetadataAttributesValueMaxLength);
        }
        if (message.validNftMetadataAttributesSubValueMaxLength !== 0) {
            writer
                .uint32(216)
                .int32(message.validNftMetadataAttributesSubValueMaxLength);
        }
        if (message.validBurnNftMaxCount !== 0) {
            writer.uint32(224).int32(message.validBurnNftMaxCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validNftCollectionId = reader.string();
                    break;
                case 2:
                    message.nftCollectionDefaultId = reader.string();
                    break;
                case 3:
                    message.nftCollectionDefaultName = reader.string();
                    break;
                case 4:
                    message.validNftCollectionMetadataSymbolMinLength = reader.int32();
                    break;
                case 5:
                    message.validNftCollectionMetadataSymbolMaxLength = reader.int32();
                    break;
                case 6:
                    message.validNftCollectionMetadataDescriptionMaxLength =
                        reader.int32();
                    break;
                case 7:
                    message.validNftCollectionMetadataNameMaxLength = reader.int32();
                    break;
                case 8:
                    message.validNftCollectionMetadataImagesMaxCount = reader.int32();
                    break;
                case 9:
                    message.validNftCollectionMetadataImagesTypeMaxLength =
                        reader.int32();
                    break;
                case 10:
                    message.validNftCollectionMetadataLinksMaxCount = reader.int32();
                    break;
                case 11:
                    message.validNftCollectionMetadataLinksTypeMaxLength = reader.int32();
                    break;
                case 12:
                    message.validNftCollectionMetadataOptionsMaxCount = reader.int32();
                    break;
                case 13:
                    message.validNftCollectionMetadataOptionsTypeMaxLength =
                        reader.int32();
                    break;
                case 14:
                    message.validNftCollectionMetadataOptionsValueMaxLength =
                        reader.int32();
                    break;
                case 15:
                    message.validNftCollectionMetadataOptionsSubValueMaxLength =
                        reader.int32();
                    break;
                case 16:
                    message.validNftId = reader.string();
                    break;
                case 17:
                    message.validNftMetadataMaxCount = reader.int32();
                    break;
                case 18:
                    message.validNftMetadataTitleMaxLength = reader.int32();
                    break;
                case 19:
                    message.validNftMetadataDescriptionMaxLength = reader.int32();
                    break;
                case 20:
                    message.validNftMetadataImagesMaxCount = reader.int32();
                    break;
                case 21:
                    message.validNftMetadataImagesTypeMaxLength = reader.int32();
                    break;
                case 22:
                    message.validNftMetadataLinksMaxCount = reader.int32();
                    break;
                case 23:
                    message.validNftMetadataLinksTypeMaxLength = reader.int32();
                    break;
                case 24:
                    message.validNftMetadataAttributesMaxCount = reader.int32();
                    break;
                case 25:
                    message.validNftMetadataAttributesTypeMaxLength = reader.int32();
                    break;
                case 26:
                    message.validNftMetadataAttributesValueMaxLength = reader.int32();
                    break;
                case 27:
                    message.validNftMetadataAttributesSubValueMaxLength = reader.int32();
                    break;
                case 28:
                    message.validBurnNftMaxCount = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            validNftCollectionId: isSet(object.validNftCollectionId)
                ? String(object.validNftCollectionId)
                : "",
            nftCollectionDefaultId: isSet(object.nftCollectionDefaultId)
                ? String(object.nftCollectionDefaultId)
                : "",
            nftCollectionDefaultName: isSet(object.nftCollectionDefaultName)
                ? String(object.nftCollectionDefaultName)
                : "",
            validNftCollectionMetadataSymbolMinLength: isSet(object.validNftCollectionMetadataSymbolMinLength)
                ? Number(object.validNftCollectionMetadataSymbolMinLength)
                : 0,
            validNftCollectionMetadataSymbolMaxLength: isSet(object.validNftCollectionMetadataSymbolMaxLength)
                ? Number(object.validNftCollectionMetadataSymbolMaxLength)
                : 0,
            validNftCollectionMetadataDescriptionMaxLength: isSet(object.validNftCollectionMetadataDescriptionMaxLength)
                ? Number(object.validNftCollectionMetadataDescriptionMaxLength)
                : 0,
            validNftCollectionMetadataNameMaxLength: isSet(object.validNftCollectionMetadataNameMaxLength)
                ? Number(object.validNftCollectionMetadataNameMaxLength)
                : 0,
            validNftCollectionMetadataImagesMaxCount: isSet(object.validNftCollectionMetadataImagesMaxCount)
                ? Number(object.validNftCollectionMetadataImagesMaxCount)
                : 0,
            validNftCollectionMetadataImagesTypeMaxLength: isSet(object.validNftCollectionMetadataImagesTypeMaxLength)
                ? Number(object.validNftCollectionMetadataImagesTypeMaxLength)
                : 0,
            validNftCollectionMetadataLinksMaxCount: isSet(object.validNftCollectionMetadataLinksMaxCount)
                ? Number(object.validNftCollectionMetadataLinksMaxCount)
                : 0,
            validNftCollectionMetadataLinksTypeMaxLength: isSet(object.validNftCollectionMetadataLinksTypeMaxLength)
                ? Number(object.validNftCollectionMetadataLinksTypeMaxLength)
                : 0,
            validNftCollectionMetadataOptionsMaxCount: isSet(object.validNftCollectionMetadataOptionsMaxCount)
                ? Number(object.validNftCollectionMetadataOptionsMaxCount)
                : 0,
            validNftCollectionMetadataOptionsTypeMaxLength: isSet(object.validNftCollectionMetadataOptionsTypeMaxLength)
                ? Number(object.validNftCollectionMetadataOptionsTypeMaxLength)
                : 0,
            validNftCollectionMetadataOptionsValueMaxLength: isSet(object.validNftCollectionMetadataOptionsValueMaxLength)
                ? Number(object.validNftCollectionMetadataOptionsValueMaxLength)
                : 0,
            validNftCollectionMetadataOptionsSubValueMaxLength: isSet(object.validNftCollectionMetadataOptionsSubValueMaxLength)
                ? Number(object.validNftCollectionMetadataOptionsSubValueMaxLength)
                : 0,
            validNftId: isSet(object.validNftId) ? String(object.validNftId) : "",
            validNftMetadataMaxCount: isSet(object.validNftMetadataMaxCount)
                ? Number(object.validNftMetadataMaxCount)
                : 0,
            validNftMetadataTitleMaxLength: isSet(object.validNftMetadataTitleMaxLength)
                ? Number(object.validNftMetadataTitleMaxLength)
                : 0,
            validNftMetadataDescriptionMaxLength: isSet(object.validNftMetadataDescriptionMaxLength)
                ? Number(object.validNftMetadataDescriptionMaxLength)
                : 0,
            validNftMetadataImagesMaxCount: isSet(object.validNftMetadataImagesMaxCount)
                ? Number(object.validNftMetadataImagesMaxCount)
                : 0,
            validNftMetadataImagesTypeMaxLength: isSet(object.validNftMetadataImagesTypeMaxLength)
                ? Number(object.validNftMetadataImagesTypeMaxLength)
                : 0,
            validNftMetadataLinksMaxCount: isSet(object.validNftMetadataLinksMaxCount)
                ? Number(object.validNftMetadataLinksMaxCount)
                : 0,
            validNftMetadataLinksTypeMaxLength: isSet(object.validNftMetadataLinksTypeMaxLength)
                ? Number(object.validNftMetadataLinksTypeMaxLength)
                : 0,
            validNftMetadataAttributesMaxCount: isSet(object.validNftMetadataAttributesMaxCount)
                ? Number(object.validNftMetadataAttributesMaxCount)
                : 0,
            validNftMetadataAttributesTypeMaxLength: isSet(object.validNftMetadataAttributesTypeMaxLength)
                ? Number(object.validNftMetadataAttributesTypeMaxLength)
                : 0,
            validNftMetadataAttributesValueMaxLength: isSet(object.validNftMetadataAttributesValueMaxLength)
                ? Number(object.validNftMetadataAttributesValueMaxLength)
                : 0,
            validNftMetadataAttributesSubValueMaxLength: isSet(object.validNftMetadataAttributesSubValueMaxLength)
                ? Number(object.validNftMetadataAttributesSubValueMaxLength)
                : 0,
            validBurnNftMaxCount: isSet(object.validBurnNftMaxCount)
                ? Number(object.validBurnNftMaxCount)
                : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.validNftCollectionId !== undefined &&
            (obj.validNftCollectionId = message.validNftCollectionId);
        message.nftCollectionDefaultId !== undefined &&
            (obj.nftCollectionDefaultId = message.nftCollectionDefaultId);
        message.nftCollectionDefaultName !== undefined &&
            (obj.nftCollectionDefaultName = message.nftCollectionDefaultName);
        message.validNftCollectionMetadataSymbolMinLength !== undefined &&
            (obj.validNftCollectionMetadataSymbolMinLength = Math.round(message.validNftCollectionMetadataSymbolMinLength));
        message.validNftCollectionMetadataSymbolMaxLength !== undefined &&
            (obj.validNftCollectionMetadataSymbolMaxLength = Math.round(message.validNftCollectionMetadataSymbolMaxLength));
        message.validNftCollectionMetadataDescriptionMaxLength !== undefined &&
            (obj.validNftCollectionMetadataDescriptionMaxLength = Math.round(message.validNftCollectionMetadataDescriptionMaxLength));
        message.validNftCollectionMetadataNameMaxLength !== undefined &&
            (obj.validNftCollectionMetadataNameMaxLength = Math.round(message.validNftCollectionMetadataNameMaxLength));
        message.validNftCollectionMetadataImagesMaxCount !== undefined &&
            (obj.validNftCollectionMetadataImagesMaxCount = Math.round(message.validNftCollectionMetadataImagesMaxCount));
        message.validNftCollectionMetadataImagesTypeMaxLength !== undefined &&
            (obj.validNftCollectionMetadataImagesTypeMaxLength = Math.round(message.validNftCollectionMetadataImagesTypeMaxLength));
        message.validNftCollectionMetadataLinksMaxCount !== undefined &&
            (obj.validNftCollectionMetadataLinksMaxCount = Math.round(message.validNftCollectionMetadataLinksMaxCount));
        message.validNftCollectionMetadataLinksTypeMaxLength !== undefined &&
            (obj.validNftCollectionMetadataLinksTypeMaxLength = Math.round(message.validNftCollectionMetadataLinksTypeMaxLength));
        message.validNftCollectionMetadataOptionsMaxCount !== undefined &&
            (obj.validNftCollectionMetadataOptionsMaxCount = Math.round(message.validNftCollectionMetadataOptionsMaxCount));
        message.validNftCollectionMetadataOptionsTypeMaxLength !== undefined &&
            (obj.validNftCollectionMetadataOptionsTypeMaxLength = Math.round(message.validNftCollectionMetadataOptionsTypeMaxLength));
        message.validNftCollectionMetadataOptionsValueMaxLength !== undefined &&
            (obj.validNftCollectionMetadataOptionsValueMaxLength = Math.round(message.validNftCollectionMetadataOptionsValueMaxLength));
        message.validNftCollectionMetadataOptionsSubValueMaxLength !== undefined &&
            (obj.validNftCollectionMetadataOptionsSubValueMaxLength = Math.round(message.validNftCollectionMetadataOptionsSubValueMaxLength));
        message.validNftId !== undefined && (obj.validNftId = message.validNftId);
        message.validNftMetadataMaxCount !== undefined &&
            (obj.validNftMetadataMaxCount = Math.round(message.validNftMetadataMaxCount));
        message.validNftMetadataTitleMaxLength !== undefined &&
            (obj.validNftMetadataTitleMaxLength = Math.round(message.validNftMetadataTitleMaxLength));
        message.validNftMetadataDescriptionMaxLength !== undefined &&
            (obj.validNftMetadataDescriptionMaxLength = Math.round(message.validNftMetadataDescriptionMaxLength));
        message.validNftMetadataImagesMaxCount !== undefined &&
            (obj.validNftMetadataImagesMaxCount = Math.round(message.validNftMetadataImagesMaxCount));
        message.validNftMetadataImagesTypeMaxLength !== undefined &&
            (obj.validNftMetadataImagesTypeMaxLength = Math.round(message.validNftMetadataImagesTypeMaxLength));
        message.validNftMetadataLinksMaxCount !== undefined &&
            (obj.validNftMetadataLinksMaxCount = Math.round(message.validNftMetadataLinksMaxCount));
        message.validNftMetadataLinksTypeMaxLength !== undefined &&
            (obj.validNftMetadataLinksTypeMaxLength = Math.round(message.validNftMetadataLinksTypeMaxLength));
        message.validNftMetadataAttributesMaxCount !== undefined &&
            (obj.validNftMetadataAttributesMaxCount = Math.round(message.validNftMetadataAttributesMaxCount));
        message.validNftMetadataAttributesTypeMaxLength !== undefined &&
            (obj.validNftMetadataAttributesTypeMaxLength = Math.round(message.validNftMetadataAttributesTypeMaxLength));
        message.validNftMetadataAttributesValueMaxLength !== undefined &&
            (obj.validNftMetadataAttributesValueMaxLength = Math.round(message.validNftMetadataAttributesValueMaxLength));
        message.validNftMetadataAttributesSubValueMaxLength !== undefined &&
            (obj.validNftMetadataAttributesSubValueMaxLength = Math.round(message.validNftMetadataAttributesSubValueMaxLength));
        message.validBurnNftMaxCount !== undefined &&
            (obj.validBurnNftMaxCount = Math.round(message.validBurnNftMaxCount));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.validNftCollectionId = object.validNftCollectionId ?? "";
        message.nftCollectionDefaultId = object.nftCollectionDefaultId ?? "";
        message.nftCollectionDefaultName = object.nftCollectionDefaultName ?? "";
        message.validNftCollectionMetadataSymbolMinLength =
            object.validNftCollectionMetadataSymbolMinLength ?? 0;
        message.validNftCollectionMetadataSymbolMaxLength =
            object.validNftCollectionMetadataSymbolMaxLength ?? 0;
        message.validNftCollectionMetadataDescriptionMaxLength =
            object.validNftCollectionMetadataDescriptionMaxLength ?? 0;
        message.validNftCollectionMetadataNameMaxLength =
            object.validNftCollectionMetadataNameMaxLength ?? 0;
        message.validNftCollectionMetadataImagesMaxCount =
            object.validNftCollectionMetadataImagesMaxCount ?? 0;
        message.validNftCollectionMetadataImagesTypeMaxLength =
            object.validNftCollectionMetadataImagesTypeMaxLength ?? 0;
        message.validNftCollectionMetadataLinksMaxCount =
            object.validNftCollectionMetadataLinksMaxCount ?? 0;
        message.validNftCollectionMetadataLinksTypeMaxLength =
            object.validNftCollectionMetadataLinksTypeMaxLength ?? 0;
        message.validNftCollectionMetadataOptionsMaxCount =
            object.validNftCollectionMetadataOptionsMaxCount ?? 0;
        message.validNftCollectionMetadataOptionsTypeMaxLength =
            object.validNftCollectionMetadataOptionsTypeMaxLength ?? 0;
        message.validNftCollectionMetadataOptionsValueMaxLength =
            object.validNftCollectionMetadataOptionsValueMaxLength ?? 0;
        message.validNftCollectionMetadataOptionsSubValueMaxLength =
            object.validNftCollectionMetadataOptionsSubValueMaxLength ?? 0;
        message.validNftId = object.validNftId ?? "";
        message.validNftMetadataMaxCount = object.validNftMetadataMaxCount ?? 0;
        message.validNftMetadataTitleMaxLength =
            object.validNftMetadataTitleMaxLength ?? 0;
        message.validNftMetadataDescriptionMaxLength =
            object.validNftMetadataDescriptionMaxLength ?? 0;
        message.validNftMetadataImagesMaxCount =
            object.validNftMetadataImagesMaxCount ?? 0;
        message.validNftMetadataImagesTypeMaxLength =
            object.validNftMetadataImagesTypeMaxLength ?? 0;
        message.validNftMetadataLinksMaxCount =
            object.validNftMetadataLinksMaxCount ?? 0;
        message.validNftMetadataLinksTypeMaxLength =
            object.validNftMetadataLinksTypeMaxLength ?? 0;
        message.validNftMetadataAttributesMaxCount =
            object.validNftMetadataAttributesMaxCount ?? 0;
        message.validNftMetadataAttributesTypeMaxLength =
            object.validNftMetadataAttributesTypeMaxLength ?? 0;
        message.validNftMetadataAttributesValueMaxLength =
            object.validNftMetadataAttributesValueMaxLength ?? 0;
        message.validNftMetadataAttributesSubValueMaxLength =
            object.validNftMetadataAttributesSubValueMaxLength ?? 0;
        message.validBurnNftMaxCount = object.validBurnNftMaxCount ?? 0;
        return message;
    },
};
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=params.js.map