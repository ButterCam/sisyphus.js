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

    let generator = new GeneratorContext()

    for (let path of program.path) {
        generator.include(path)
    }
    await generator.generate(program.output, ...program.args)
    return 0
}

main(process.argv).then(ret => {
    process.exit(ret);
}).catch(err => {
    console.error(err)
    process.exit(1);
})