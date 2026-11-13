// Dawn at the sky bakery: a dough-kneader in a tall white cap pulls a
// blazing round loaf from a brick kiln, only for the loaf to turn out
// to be the morning star itself, pouring gold light over the rooftops.
// The finished picture rests in this folder already; this runner does
// nothing more than carry that picture, untouched, to the place the
// contest harness will look for it. No pixels are drawn here and no
// network is touched — the image is the work, the runner is the courier.
//
// When run outside the harness, the destination folder comes from the
// environment, falling back to the usual spot when it is not set.

import { copyFileSync as duplicateFile } from 'node:fs';
import { join as joinPath } from 'node:path';

// Where the finished picture should land.
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The artwork sits right next to this file.
const artwork = new URL('./entry.png', import.meta.url);

// Carry the bytes across without altering a single one.
// One call, no transformation: what lands is what left.
duplicateFile(artwork, joinPath(targetDir, 'entry.png'));
