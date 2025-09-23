// Codes couleurs ANSI
export const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  underscore: '\x1b[4m',
  blink: '\x1b[5m',
  reverse: '\x1b[7m',
  hidden: '\x1b[8m',
  
  // Couleurs de texte
  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  
  // Couleurs de texte claires
  brightBlack: '\x1b[90m',
  brightRed: '\x1b[91m',
  brightGreen: '\x1b[92m',
  brightYellow: '\x1b[93m',
  brightBlue: '\x1b[94m',
  brightMagenta: '\x1b[95m',
  brightCyan: '\x1b[96m',
  brightWhite: '\x1b[97m',
  
  // Couleurs de fond
  bgBlack: '\x1b[40m',
  bgRed: '\x1b[41m',
  bgGreen: '\x1b[42m',
  bgYellow: '\x1b[43m',
  bgBlue: '\x1b[44m',
  bgMagenta: '\x1b[45m',
  bgCyan: '\x1b[46m',
  bgWhite: '\x1b[47m',
  
  // Couleurs de fond claires
  bgBrightBlack: '\x1b[100m',
  bgBrightRed: '\x1b[101m',
  bgBrightGreen: '\x1b[102m',
  bgBrightYellow: '\x1b[103m',
  bgBrightBlue: '\x1b[104m',
  bgBrightMagenta: '\x1b[105m',
  bgBrightCyan: '\x1b[106m',
  bgBrightWhite: '\x1b[107m',
}

/**
 * Fonction principale pour colorer du texte
 * @param {string} color - Code couleur ANSI
 * @param {string} text - Texte à colorer
 * @returns {string} Texte coloré
 */
export const colorize = (color, text) => `${color}${text}${colors.reset}`

// Fonctions de couleurs de base
export const black = (text) => colorize(colors.black, text)
export const red = (text) => colorize(colors.red, text)
export const green = (text) => colorize(colors.green, text)
export const yellow = (text) => colorize(colors.yellow, text)
export const blue = (text) => colorize(colors.blue, text)
export const magenta = (text) => colorize(colors.magenta, text)
export const cyan = (text) => colorize(colors.cyan, text)
export const white = (text) => colorize(colors.white, text)

// Fonctions de couleurs claires
export const brightBlack = (text) => colorize(colors.brightBlack, text)
export const brightRed = (text) => colorize(colors.brightRed, text)
export const brightGreen = (text) => colorize(colors.brightGreen, text)
export const brightYellow = (text) => colorize(colors.brightYellow, text)
export const brightBlue = (text) => colorize(colors.brightBlue, text)
export const brightMagenta = (text) => colorize(colors.brightMagenta, text)
export const brightCyan = (text) => colorize(colors.brightCyan, text)
export const brightWhite = (text) => colorize(colors.brightWhite, text)

// Fonctions avec styles
export const bold = (text) => colorize(colors.bright, text)
export const dim = (text) => colorize(colors.dim, text)
export const underline = (text) => colorize(colors.underscore, text)
export const blink = (text) => colorize(colors.blink, text)
export const reverse = (text) => colorize(colors.reverse, text)

// Combinaisons utiles pour les logs
export const success = (text) => colorize(colors.green + colors.bright, text)
export const error = (text) => colorize(colors.red + colors.bright, text)
export const warning = (text) => colorize(colors.yellow + colors.bright, text)
export const info = (text) => colorize(colors.cyan, text)
export const debug = (text) => colorize(colors.dim, text)

// Fonctions spécialisées pour serveurs
export const backend = (text) => colorize(colors.blue + colors.bright, text)
export const frontend = (text) => colorize(colors.magenta + colors.bright, text)

// Fonctions avec fond coloré
export const bgRed = (text) => colorize(colors.bgRed + colors.white, text)
export const bgGreen = (text) => colorize(colors.bgGreen + colors.black, text)
export const bgYellow = (text) => colorize(colors.bgYellow + colors.black, text)
export const bgBlue = (text) => colorize(colors.bgBlue + colors.white, text)
export const bgMagenta = (text) => colorize(colors.bgMagenta + colors.white, text)
export const bgCyan = (text) => colorize(colors.bgCyan + colors.black, text)



// Export par défaut avec toutes les fonctions utiles
export default {
  colors,
  colorize,
  // Couleurs de base
  black, red, green, yellow, blue, magenta, cyan, white,
  // Couleurs claires
  brightBlack, brightRed, brightGreen, brightYellow, 
  brightBlue, brightMagenta, brightCyan, brightWhite,
  // Styles
  bold, dim, underline, blink, reverse,
  // Log levels
  success, error, warning, info, debug,
  // Serveurs
  backend, frontend,
  // Fonds
  bgRed, bgGreen, bgYellow, bgBlue, bgMagenta, bgCyan,
}