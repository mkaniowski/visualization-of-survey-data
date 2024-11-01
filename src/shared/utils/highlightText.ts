/**
 * Highlights occurrences of a specified text within an HTML element.
 *
 * @param {string} text - The text to highlight.
 * @param {string} selector - The CSS selector of the HTML element containing the text.
 * @returns {string} - The HTML content of the element with the specified text highlighted.
 */
export const highlightText = (text: string, selector: string): string => {
  const ele = document.querySelector(selector)

  if (!ele || !text) {
    return ''
  }

  const regex = new RegExp(text, 'gi')

  /**
   * Decodes HTML entities in a string.
   *
   * @param {string} html - The HTML string to decode.
   * @returns {string} - The decoded string.
   */
  const decodeHtml = (html: string) => {
    const txt = document.createElement('textarea')
    txt.innerHTML = html
    return txt.value
  }

  const decodedHtml = decodeHtml(ele.innerHTML).replaceAll(/<mark>(.*?)<\/mark>/gi, '$1')
  return decodedHtml.replace(regex, (match) => `<mark>${match}</mark>`)
}
