/**  Localized variant of a text in a particular language. */
export interface LocalizedText {
    /**  Localized string in the language corresponding to `language_code' below. */
    text?: string

    /**
     *  The text's BCP-47 language code, such as "en-US" or "sr-Latn".
     * 
     *  For more information, see
     *  http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string
}

export namespace LocalizedText {
    export const name = 'google.type.LocalizedText'
}
