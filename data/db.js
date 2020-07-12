var channels = require("./channels.json");
var programInfo = require("./program.json");
module.exports = function () {
  return {
    channels: channels,
    programInfo: programInfo,
  };
};
