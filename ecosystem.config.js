module.exports = {
  apps: [
    {
      name: 'me-app',
      script: 'dist/main.js',
      watch: false,
      exec_mode: 'cluster',
      instances: 2,
    },
  ],
};
