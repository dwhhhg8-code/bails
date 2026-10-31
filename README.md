# bails

Modded [Baileys](https://github.com/WhiskeySockets/Baileys) multi-device WhatsApp
library. Drop-in replacement for the now-deleted `github:AkiraDevX/bails`
dependency used by **Rin-Itoshi-Bot** and similar bots.

It keeps the legacy CommonJS API shape those bots rely on:

- `default` export = `makeWASocket`
- named exports: `proto`, `makeWASocket`, `makeInMemoryStore`,
  `makeWALegacySocket`, `MessageRetryMap`, `generateWAMessage*`,
  `useMultiFileAuthState`, `DisconnectReason`, `fetchLatestBaileysVersion`, ...

## Usage in a bot

Point the bot's `package.json` at this repository:

```json
"@whiskeysockets/baileys": "github:dwhhhg8-code/bails"
```

then:

```bash
npm install --legacy-peer-deps
node index.js qr
```

## Requirements

- Node.js >= 20
- `ffmpeg` and `imagemagick` for the media/sticker commands of the bot

## Notes

- `lib/compat.js` re-adds `makeWALegacySocket` and `MessageRetryMap`, which were
  removed upstream but are still imported by older bot code.
