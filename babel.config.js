module.exports = function (api) {
  api.cache(true);

  const presets = [];
  const plugins = ["./plugins/babel-plugin-arrowFunction"];

  return {presets, plugins};
}