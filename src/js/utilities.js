/**
 * Utility functions for use in vue-slider
 */
export default {

  /**
   * Convert hex value to rgba
   * Thanks to https://stackoverflow.com/users/3878400/ajfarkas
   *
   * @param {String} hex
   * @param {String} alpha
   */
  hexToRGB (hex, alpha) {
    if (hex === '#FFFFFF') {
      hex = '#000000'
    }

    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)

    if (alpha) {
      return `rgba(${r}, ${g}, ${b}, ${alpha})`
    }

    return `rgb(${r}, ${g}, ${b})`
  }
}
