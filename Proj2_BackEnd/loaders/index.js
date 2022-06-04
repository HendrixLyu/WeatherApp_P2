const expressloaders = require('./express')
exports.init = () => {
    expressloaders()
}
// ↑↑此为后端Common-JS写法↑↑.

// ↓↓前端采用ES6写法↓↓
// import xxx from './aaa/bbb'
// export default xxx