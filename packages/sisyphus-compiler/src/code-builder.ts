import {ImportManager} from './import-manager'

export class CodeBuilder {
    private _indent: number = 0

    private _content: string = ''

    importManager: ImportManager

    constructor(importManager: ImportManager) {
        this.importManager = importManager
    }

    get content(): string {
        return this._content
    }

    append(code: string): CodeBuilder {
        if (this._content.length > 0 && this._content[this._content.length - 1] == '\n') {
            this._content += this._indent ? indentCode(code, ' '.repeat(this._indent * 4)) : code
        } else {
            this._content += code
        }
        return this
    }

    ln(): CodeBuilder {
        this._content += '\n'
        return this
    }

    document(comment: string): CodeBuilder {
        if (!comment) return this
        return this.appendLn(normalizeBlockComment(comment, true))
    }

    blockComment(comment: string): CodeBuilder {
        if (!comment) return this
        return this.appendLn(normalizeBlockComment(comment, false))
    }

    lineComment(...comments: string[]): CodeBuilder {
        if (comments.length == 0) return this
        for (let comment of comments) {
            this.append(normalizeLineComment(comment)).normalize()
        }
        return this
    }

    trailingComment(comment: string): CodeBuilder {
        if (!comment) return this
        return this.append(` //${comment.replace('\n', ' ')}`)
    }

    appendLn(code: string): CodeBuilder {
        return this.append(code).ln()
    }

    beginBlock(code: string): CodeBuilder {
        if (code.endsWith('{')) {
            return this.appendLn(code).indent()
        } else {
            return this.appendLn(code + ' {').indent()
        }
    }

    endBlock(trailingComment?: string): CodeBuilder {
        return this.dedent().trimEnd().ln()
            .append('}').trailingComment(trailingComment ?? '')
            .ln().normalize()
    }

    trimEnd(char?: string): CodeBuilder {
        if (char === undefined) {
            this._content = this._content.trimEnd()
        } else {
            while (true) {
                if (this._content.length == 0) break
                let last = this._content.charAt(this._content.length - 1)

                if (char.indexOf(last) >= 0) {
                    this._content = this._content.substring(0, this._content.length - 1)
                } else {
                    break
                }
            }
        }
        return this
    }

    normalize(): CodeBuilder {
        this.trimEnd()
        if (this.content.length == 0) return this
        if (this._content[this.content.length - 1] !== '{') {
            this.ln()
        }
        return this.ln()
    }

    indent(): CodeBuilder {
        this._indent++
        return this
    }

    dedent(): CodeBuilder {
        this._indent--
        if (this._indent < 0) {
            throw new Error('Wrong indent state.')
        }
        return this
    }

    build(): string {
        this.trimEnd().ln()

        const imports = this.importManager.build()
        if (imports) {
            return `${imports}\n\n${this._content}`
        } else {
            return this._content
        }
    }
}

function indentCode(content: string, indentation: string) {
    return content.replace(/^(?!\s*$)/gm, indentation)
}

function dedentCode(content: string, indentation: string) {
    const regex = new RegExp(`^${indentation}`, 'gm')
    return content.replace(regex, '')
}

function normalizeLineComment(comment: string): string {
    if (!comment) return comment

    if (comment.indexOf('\n') < 0) {
        return `// ${comment}`
    }

    return comment.trimEnd().replace(/^/gm, '// ')
}

function normalizeBlockComment(comment: string, doc: boolean): string {
    if (!comment) return comment
    const prefix = doc ? '/**' : '/*'

    comment = comment.trimEnd().replace(/\*\//g, '*&#47;')

    if (comment.indexOf('\n') < 0) {
        return `${prefix} ${comment} */`
    }

    let normalized = comment.replace(/^/gm, ' * ')
    return `${prefix}\n${normalized}\n */`
}
