#!/bin/sh
# Dev-server wrapper: ensures the nvm-installed Node is on PATH for tooling
# that re-invokes `node` via `#!/usr/bin/env node` (e.g. npm, astro).
export PATH="/Users/irena/.nvm/versions/node/v24.16.0/bin:$PATH"
exec npm run dev
