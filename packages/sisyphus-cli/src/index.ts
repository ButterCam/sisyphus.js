#!/usr/bin/env node
import {program} from "commander"
import {GeneratorContext} from "@sisyphus.js/generator"

function collect(value: string, previous: string[]): string[] {
    return previous.concat(value)
}

export async function main(args: string[]): Promise<number> {
    program.version("0.0.0")
    program.option('-I --path <path>', "include paths.", collect, [])
    program.requiredOption('-O --output <output>', "output dir.")
        .parse(args)
    const generator = new GeneratorContext()
    const { path, output } = program.opts()
    for (const item of path) {
        generator.include(item)
    }
    await generator.generate(output, ...program.args)

    return 0
}

main(process.argv).then(ret => {
    process.exit(ret);
}).catch(err => {
    console.error(err)
    process.exit(1);
})