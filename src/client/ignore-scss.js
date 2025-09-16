// ignore-scss.js
if (typeof require !== 'undefined') {
  require.extensions['.scss'] = function () {
    return null;
  };
  require.extensions['.css'] = function () {
    return null;
  };
}
