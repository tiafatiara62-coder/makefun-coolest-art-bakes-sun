// coolest-art-01 entry (Node 22, standard library only): the art is the
// entry.png beside this file — "The Baker Who Bakes the Sun", an ukiyo-e print of
// a small baker drawing a huge golden sun out of a glowing stone oven at dawn,
// its long sunbeams spilling across the sky — and the
// program copies it to /output/entry.png. The gate takes a whole PNG or
// JPEG of at most 1 MiB and at most 1024 by 1024 pixels, and the judge sees
// exactly the bytes copied.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The copy is byte-exact: the judge sees exactly the bytes in this repo.
// entry.png is a JPEG; the gate tells PNG and JPEG apart by magic bytes.
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
