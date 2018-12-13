const oak = require('oak')

oak.on('ready', () => {
  oak.load({
    url: process.env.KIOSK_URL || 'https://www.zivelo.com/'
  })
})
