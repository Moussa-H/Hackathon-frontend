module.exports = {
    // other configurations...
    resolve: {
        fallback: {
            "http": require.resolve('stream-http')
        }
    }
};