import {indentCode} from "./utils";

export class CodeBuilder {
    private _indent: number = 0

    private _content: string = ""

    get content(): string {
        return this._content
    }

    append(code: string): CodeBuilder {
        if (this._content.length > 0 && this._content[this._content.length - 1] == "\n") {
            this._content += this._indent ? indentCode(code, " ".repeat(this._indent * 4)) : code
        } else {
            this._content += code
        }
        return this
    }

    ln(): CodeBuilder {
        this._content += "\n"
        return this
    }

    appendLn(code: string): CodeBuilder {
        return this.append(code).ln()
    }

    beginBlock(code: string): CodeBuilder {
        return this.appendLn(code + " {").indent()
    }

    endBlock(): CodeBuilder {
        return this.deindent().normalize().appendLn("}")
    }

    normalize(): CodeBuilder {
        this._content = this._content.trimRight()
        return this.ln()
    }

    indent(): CodeBuilder {
        this._indent++
        return this
    }

    deindent(): CodeBuilder {
        this._indent--
        if (this._indent < 0) {
            throw new Error("Wrong indent state.")
        }
        return this
    }

    build(): string {
        return this._content.trimRight()
    }
}