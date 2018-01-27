'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('./../../../npm/axios/index.js');

var _axios2 = _interopRequireDefault(_axios);

var _adapter = require('./../../../npm/wepy-plugin-axios/dist/adapter.js');

var _adapter2 = _interopRequireDefault(_adapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// adapter 的初始化一定要在任何其它的 axios.create 之前执行
var adapter = (0, _adapter2.default)(_axios2.default);

exports.default = _axios2.default.create({
  adapter: adapter
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImFkYXB0ZXIiLCJjcmVhdGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBO0FBQ0EsSUFBTUEsVUFBVSx1Q0FBaEI7O2tCQUVlLGdCQUFNQyxNQUFOLENBQWE7QUFDMUJELFdBQVNBO0FBRGlCLENBQWIsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB3ZXB5QXhpb3NBZGFwdGVyIGZyb20gJ3dlcHktcGx1Z2luLWF4aW9zL2Rpc3QvYWRhcHRlcidcblxuLy8gYWRhcHRlciDnmoTliJ3lp4vljJbkuIDlrpropoHlnKjku7vkvZXlhbblroPnmoQgYXhpb3MuY3JlYXRlIOS5i+WJjeaJp+ihjFxuY29uc3QgYWRhcHRlciA9IHdlcHlBeGlvc0FkYXB0ZXIoYXhpb3MpXG5cbmV4cG9ydCBkZWZhdWx0IGF4aW9zLmNyZWF0ZSh7XG4gIGFkYXB0ZXI6IGFkYXB0ZXJcbn0pXG4iXX0=