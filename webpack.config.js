module.exports = {
    entry: __dirname + '/client/src/app.jsx',

    output: {
        path: __dirname + '/client/dist/js',
        filename: 'app.js',
    },

    module: {
        
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ["react", "es2015"]
            }
        }],
    },

    watch: true
}