/**
 * Some steam for input usage.
 */
export interface InputStream {
    /**
     * Read data to fill buffer, return real filled size.
     * @param buffer buffer to fill
     */
    read(buffer: Uint8Array): number

    /**
     * Current read pos.
     */
    pos(): number

    /**
     * Steam size.
     */
    size(): number
}

/**
 * Some steam for output usage.
 */
export interface OutputStream {
    /**
     * Write a buffer.
     */
    write(buffer: Uint8Array): number

    /**
     * Steam size.
     */
    size(): number
}