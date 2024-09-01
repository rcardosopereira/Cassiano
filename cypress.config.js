const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  //video: true, // aqui ele vai criar um vídeo com evidências que o teste passou ou não. (Salva video.avi)
  viewportWidth: 1000,
  viewportHeight: 660,
 // viewportWidth: 1920,
 // viewportHeight: 1080,

});
