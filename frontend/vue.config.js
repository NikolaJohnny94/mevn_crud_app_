module.exports = {
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'Full-Stack MEVN CRUD APP plus Bootstrap | MEVN'
      args[0].meta = {
        description:
          'Simple Full-Stack MEVN (MongoDB, Express.js, Vue.js, Node.js) CRUD plus Bootstrap web app developed by Nikola',
      }
      return args
    })
  },
}
