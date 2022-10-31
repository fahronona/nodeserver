module.exports = {
  apps: [
    {
      name: "node",
      script: "./app.js",
      node_args: "-r esm",
    },
  ],
};
