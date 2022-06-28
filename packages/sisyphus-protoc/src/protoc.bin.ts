#!/usr/bin/env node

import protoc from './protoc'

main().catch((err) => {
    process.exit(1)
})

async function main() {
    const code = await protoc(...process.argv.slice(2))
    process.exit(code ?? 0)
}