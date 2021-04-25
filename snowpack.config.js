// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
    src: "/dist",
    public: {
      url: "/",
      static: true // if true, then don't build these files, serve them directly to the browser
    }
  },
  plugins: [
    "@snowpack/plugin-react-refresh",
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-sass'
    /* ... */
  ],
  optimize: {
    bundle:true, // will not rely on esm or imports, will just bundle everything into the index.ts file
    minify: true, // make the code smaller, by removing white space var name size, etc.
    target: 'es2018' // what js code to compile down to
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
