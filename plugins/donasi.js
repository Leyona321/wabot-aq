let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Axis [083899684835]
╰────

╭─「 Donasi • Non Pulsa 」
│ • DANA [083899684835]
│ • OVO [083899684835]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
