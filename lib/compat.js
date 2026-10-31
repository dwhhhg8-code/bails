"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageRetryMap = exports.makeWALegacySocket = void 0;
const Socket_1 = require("./Socket");
// Upstream removed the legacy socket factory; older bot code still imports it
// behind an opt-in flag, so alias it to the regular socket factory.
exports.makeWALegacySocket = Socket_1.default;
// MessageRetryMap used to be a Map subclass tracking per-message retry counts.
class MessageRetryMap extends Map {
    get(key) {
        return super.get(key);
    }
    set(key, value) {
        super.set(key, value);
        return this;
    }
}
exports.MessageRetryMap = MessageRetryMap;
