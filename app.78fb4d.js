webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScrollBarWidth = exports.getPageOffset = exports.ignoreProps = exports.api = exports.localStorage = exports.constants = exports.request = exports.links = exports.web3 = exports.btc = exports.eos = undefined;

var _eos = __webpack_require__(231);

var _eos2 = _interopRequireDefault(_eos);

var _btc = __webpack_require__(697);

var _btc2 = _interopRequireDefault(_btc);

var _web = __webpack_require__(193);

var _web2 = _interopRequireDefault(_web);

var _links = __webpack_require__(186);

var _links2 = _interopRequireDefault(_links);

var _request = __webpack_require__(858);

var _request2 = _interopRequireDefault(_request);

var _constants = __webpack_require__(428);

var _constants2 = _interopRequireDefault(_constants);

var _localStorage = __webpack_require__(869);

var _localStorage2 = _interopRequireDefault(_localStorage);

var _api = __webpack_require__(871);

var _api2 = _interopRequireDefault(_api);

var _ignoreProps = __webpack_require__(872);

var _ignoreProps2 = _interopRequireDefault(_ignoreProps);

var _getPageOffset = __webpack_require__(875);

var _getPageOffset2 = _interopRequireDefault(_getPageOffset);

var _getScrollBarWidth = __webpack_require__(876);

var _getScrollBarWidth2 = _interopRequireDefault(_getScrollBarWidth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Getters
exports.eos = _eos2.default;
exports.btc = _btc2.default;
exports.web3 = _web2.default;
exports.links = _links2.default;
exports.request = _request2.default;
exports.constants = _constants2.default;
exports.localStorage = _localStorage2.default;
exports.api = _api2.default;
exports.ignoreProps = _ignoreProps2.default;
exports.getPageOffset = _getPageOffset2.default;
exports.getScrollBarWidth = _getScrollBarWidth2.default;

// Methods

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modals = __webpack_require__(942);

var _modals2 = _interopRequireDefault(_modals);

var _loader = __webpack_require__(943);

var _loader2 = _interopRequireDefault(_loader);

var _notifications = __webpack_require__(944);

var _notifications2 = _interopRequireDefault(_notifications);

var _user = __webpack_require__(945);

var _user2 = _interopRequireDefault(_user);

var _feed = __webpack_require__(947);

var _feed2 = _interopRequireDefault(_feed);

var _core = __webpack_require__(948);

var _core2 = _interopRequireDefault(_core);

var _filter = __webpack_require__(949);

var _filter2 = _interopRequireDefault(_filter);

var _btc = __webpack_require__(950);

var _btc2 = _interopRequireDefault(_btc);

var _eth = __webpack_require__(951);

var _eth2 = _interopRequireDefault(_eth);

var _eos = __webpack_require__(955);

var _eos2 = _interopRequireDefault(_eos);

var _token = __webpack_require__(161);

var _token2 = _interopRequireDefault(_token);

var _nimiq = __webpack_require__(971);

var _nimiq2 = _interopRequireDefault(_nimiq);

var _api = __webpack_require__(973);

var _api2 = _interopRequireDefault(_api);

var _referral = __webpack_require__(454);

var _referral2 = _interopRequireDefault(_referral);

var _analytics = __webpack_require__(974);

var _analytics2 = _interopRequireDefault(_analytics);

var _ipfs = __webpack_require__(979);

var _ipfs2 = _interopRequireDefault(_ipfs);

var _btrm = __webpack_require__(980);

var _btrm2 = _interopRequireDefault(_btrm);

var _swap = __webpack_require__(981);

var _swap2 = _interopRequireDefault(_swap);

var _noxon = __webpack_require__(982);

var _noxon2 = _interopRequireDefault(_noxon);

var _jot = __webpack_require__(983);

var _jot2 = _interopRequireDefault(_jot);

var _usdt = __webpack_require__(984);

var _usdt2 = _interopRequireDefault(_usdt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  btrm: _btrm2.default,
  swap: _swap2.default,
  noxon: _noxon2.default,
  jot: _jot2.default,
  filter: _filter2.default,
  modals: _modals2.default,
  loader: _loader2.default,
  notifications: _notifications2.default,
  user: _user2.default,
  core: _core2.default,
  btc: _btc2.default,
  usdt: _usdt2.default,
  eth: _eth2.default,
  token: _token2.default,
  nimiq: _nimiq2.default,
  eos: _eos2.default,
  feed: _feed2.default,
  analytics: _analytics2.default,
  referral: _referral2.default,
  ipfs: _ipfs2.default,
  api: _api2.default
};

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.util = exports.constants = exports.Events = exports.Collection = exports.SwapInterface = exports.ServiceInterface = undefined;

var _SwapApp = __webpack_require__(433);

var _SwapApp2 = _interopRequireDefault(_SwapApp);

var _ServiceInterface = __webpack_require__(907);

var _ServiceInterface2 = _interopRequireDefault(_ServiceInterface);

var _SwapInterface = __webpack_require__(908);

var _SwapInterface2 = _interopRequireDefault(_SwapInterface);

var _Collection = __webpack_require__(909);

var _Collection2 = _interopRequireDefault(_Collection);

var _Events = __webpack_require__(910);

var _Events2 = _interopRequireDefault(_Events);

var _constants = __webpack_require__(280);

var _constants2 = _interopRequireDefault(_constants);

var _util = __webpack_require__(911);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SwapApp2.default;
exports.ServiceInterface = _ServiceInterface2.default;
exports.SwapInterface = _SwapInterface2.default;
exports.Collection = _Collection2.default;
exports.Events = _Events2.default;
exports.constants = _constants2.default;
exports.util = _util2.default;

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// resolve object in webpack
exports.default = {"propENV":"mainnet.prod","paths":{},"referral":{"url":"https://wiki.swap.online/affiliate.php"},"publicPath":"https://swap.online/","http":{"host":"localhost","port":9001},"i18nDate":{"month":"long","day":"numeric","hour":"numeric","minute":"numeric"},"exchangeRates":{"swapeth":1,"ethswap":1,"swapnoxon":1,"noxonswap":1,"swapbtc":0.07,"btcswap":0.07,"etheth":1,"ethbtc":0.07,"btceth":14,"ethnoxon":1,"noxoneth":1,"btcnoxon":0.07,"noxonbtc":0.07},"currency":{"eos":{"description":"EOS is domestic blockchain and basic cryptocurrency for the EOS.IO decentralised operating system, which serves as a hosting for dApps. This service covers the RAM trading, data storage and exchange options. EOS.IO is developed by the former leaders of SteemIt and BitShares and has a great scalability and commercial implementation prospects. EOS is well-known due to the largest ICO ever (349 days, $4B raised). Traditionally, EOS is purchased via centralized exchanges or EOS-only wallets.\nHere you can exchange EOS for BTC, ETH, ERC-20 tokens with zero fee in decentralized and prompt manner. \n","title":"Ethereum Operating System"},"jot":{"description":"","title":"ERC 20 token"},"noxon":{"description":"","title":"ERC 20 token"},"swap":{"description":"","title":"ERC 20 token"},"btc":{"description":"","title":"Bitcoin"},"eth":{"description":"","title":"Ethereum"}},"env":"production","entry":"mainnet","base":"https://swap.online/","services":{"web3":{"provider":"https://mainnet.infura.io/5lcMmHUURYg8F20GLGSr","rate":0.1,"gas":100000,"gasPrice":"20000000000"},"eos":{"chainId":"","httpEndpoint":""}},"ipfs":{"swarm":"/dns4/discovery.libp2p.array.io/tcp/9091/wss/p2p-websocket-star/","server":"discovery.libp2p.array.io"},"token":{"contract":"0x85F806b0df30709886C22ed1be338d2c647Abd6B"},"eth":{"contract":"0x843FcaAeb0Cce5FFaf272F5F2ddFFf3603F9c2A0"},"eos":{"contract":"swaponline42"},"tokens":{"swap":{"address":"0x14a52cf6B4F68431bd5D9524E4fcD6F41ce4ADe9","decimals":18},"BEE":{"address":"0x4d8fc1453a0f359e99c9675954e656d80d996fbf","decimals":18},"DRT":{"address":"0x9af4f26941677c706cfecf6d3379ff01bb85d5ab","decimals":8},"SMT":{"address":"0x21f15966e07a10554c364b988e91dab01d32794a","decimals":18},"DAO":{"address":"0x8aA33A7899FCC8eA5fBe6A608A109c3893A1B8b2","decimals":18},"jot":{"address":"0xdb455c71c1bc2de4e80ca451184041ef32054001","decimals":18},"btrm":{"address":"0xae72146eb535607Ee79f5D8834303ea18751845f","decimals":18},"omg":{"address":"0xd26114cd6EE289AccF82350c8d8487fedB8A0C07","decimals":18},"SENC":{"address":"0xa13f0743951b4f6e3e3aa039f682e17279f52bc3","decimals":18},"noxon":{"address":"0x9E4AD79049282F942c1b4c9b418F0357A0637017","decimals":0},"INSTAR":{"address":"0xc72fe8e3dd5bef0f9f31f259399f301272ef2a2d","decimals":18},"UTNP":{"address":"0x9e3319636e2126e3c0bc9e3134aec5e1508a46c7","decimals":18},"TNT":{"address":"0x08f5a9235b08173b7569f83645d2c7fb55e8ccd8","decimals":8},"POE":{"address":"0x0e0989b1f9b8a38983c2ba8053269ca62ec9b195","decimals":8},"FIL":{"address":"0xb8b01cec5ced05c457654fc0fda0948f859883ca","decimals":2},"PPP":{"address":"0xc42209aCcC14029c1012fB5680D95fBd6036E2a0","decimals":18},"QASH":{"address":"0x618e75ac90b12c6049ba3b27f5d5f8651b0037f6","decimals":6},"ELI":{"address":"0xc7c03b8a3fc5719066e185ea616e87b88eba44a3","decimals":18},"GEN":{"address":"0x543ff227f64aa17ea132bf9886cab5db55dcaddf","decimals":18},"RKT":{"address":"0x106aa49295b525fcf959aa75ec3f7dcbf5352f1c","decimals":18},"RFR":{"address":"0xd0929d411954c47438dc1d871dd6081f5c5e149c","decimals":4},"STORM":{"address":"0xd0a4b8946cb52f0661273bfbc6fd0e0c75fc6433","decimals":18},"HBT":{"address":"0xdd6c68bb32462e01705011a4e2ad1a60740f217f","decimals":15},"IND":{"address":"0xf8e386eda857484f5a12e4b5daa9984e06e73705","decimals":18},"HOLD":{"address":"0xd6e1401a079922469e9b965cb090ea6ff64c6839","decimals":18},"CFI":{"address":"0x12fef5e57bf45873cd9b62e9dbd7bfb99e32d73e","decimals":18},"DACC":{"address":"0x6310e4523ae82c0b6307ccf68708fd6055784b87","decimals":2},"LEV":{"address":"0x0f4ca92660efad97a9a70cb0fe969c755439772c","decimals":9},"AVT":{"address":"0x0d88ed6e74bbfd96b831231638b66c05571e824f","decimals":18},"POWR":{"address":"0x595832f8fc6bf59c85c527fec3740a1b7a361269","decimals":6},"AIR":{"address":"0x27dce1ec4d3f72c3e457cc50354f1f975ddef488","decimals":8},"J8T":{"address":"0x0d262e5dc4a06a0f1c90ce79c7a60c09dfc884e4","decimals":8},"DATx":{"address":"0xabbbb6447b68ffd6141da77c18c7b5876ed6c5ab","decimals":18},"ATMI":{"address":"0x4114fb8b1879f61b18f7d2e623569a847a03e15a","decimals":18},"HYB":{"address":"0x6059f55751603ead7dc6d280ad83a7b33d837c90","decimals":18},"SHIP":{"address":"0xe25b0bba01dc5630312b6a21927e578061a13f55","decimals":18},"CRPT":{"address":"0x80a7e048f37a50500351c204cb407766fa3bae7f","decimals":18},"DXT":{"address":"0x8db54ca569d3019a2ba126d03c37c44b5ef81ef6","decimals":8},"CRED":{"address":"0x672a1ad4f667fb18a333af13667aa0af1f5b5bdd","decimals":18},"DX":{"address":"0x70c19e79e8611ed9dd566165647e78dd2bf71764","decimals":8},"VIB":{"address":"0x2c974b2d0ba1716e644c1fc59982a89ddd2ff724","decimals":18},"RCN":{"address":"0xf970b8e36e23f7fc3fd752eea86f8be8d83375a6","decimals":18},"SKM":{"address":"0xd99b8a7fa48e25cce83b81812220a3e03bf64e5f","decimals":18},"LBA":{"address":"0xf67da90c14c9176b8e572cb93cf8c847d28602a8","decimals":18},"ZCO":{"address":"0x2008e3057bd734e10ad13c9eae45ff132abc1722","decimals":8},"IPSX":{"address":"0x001f0aa5da15585e5b2305dbab2bac425ea71007","decimals":18},"fdX":{"address":"0x52a7cb918c11a16958be40cba7e31e32a499a465","decimals":18},"THRT":{"address":"0x4f27053f32eda8af84956437bc00e5ffa7003287","decimals":18},"MVP":{"address":"0x8a77e40936bbc27e80e9a3f526368c967869c86d","decimals":18},"PAL":{"address":"0xfedae5642668f8636a11987ff386bfd215f942ee","decimals":18},"ZXC":{"address":"0xc4fccdf067129a4d0909555c7e6d894b2b39efeb","decimals":18},"THETA":{"address":"0x3883f5e181fccaF8410FA61e12b59BAd963fb645","decimals":18},"ZIL":{"address":"0x05f4a42e251f2d52b8ed15e9fedaacfcef1fad27","decimals":12},"TIO":{"address":"0x80bc5512561c7f85a3a9508c7df7901b370fa1df","decimals":18},"ZIPT":{"address":"0xedd7c94fd7b4971b916d15067bc454b9e1bad980","decimals":18},"ABT":{"address":"0xb98d4c97425d9908e66e53a6fdf673acca0be986","decimals":18},"CHX":{"address":"0x1460a58096d80a50a2F1f956DDA497611Fa4f165","decimals":18}},"link":{"bitpay":"https://insight.bitpay.com","etherscan":"https://etherscan.io","eos":"","omniexplorer":"https://www.omniexplorer.info"},"api":{"blocktrail":"https://api.blocktrail.com/v1/BTC","bitpay":"https://insight.bitpay.com/api","etherscan":"https://api.etherscan.io/api"},"apiAlternatives":{"bitpay":["https://insight.bitpay.com/api"]},"apiKeys":{"etherscan":"RHHFPNMAZMD6I4ZWBZBF6FA11CMW9AXZNM","blocktrail":"1835368c0fa8e71907ca26f3c978ab742a7db42e"}};

/***/ }),
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redaction = __webpack_require__(14);

var _reducers = __webpack_require__(360);

var _reducers2 = _interopRequireDefault(_reducers);

var _store = __webpack_require__(241);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redaction.wrapReducers)(_reducers2.default, _store2.default.dispatch);

/***/ }),
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(59);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Button = __webpack_require__(1112);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(props) {
  var children = props.children,
      className = props.className,
      fullWidth = props.fullWidth,
      brand = props.brand,
      green = props.green,
      white = props.white,
      gray = props.gray,
      disabled = props.disabled,
      onClick = props.onClick,
      _props$id = props.id,
      id = _props$id === undefined ? '' : _props$id;


  var styleName = (0, _classnames2.default)('button', {
    'fullWidth': fullWidth,
    'brand': brand,
    'green': green,
    'white': white,
    'gray': gray,
    'disabled': disabled
  });

  return _react2.default.createElement(
    'button',
    {
      styleName: styleName,
      className: className,
      onClick: onClick,
      id: id,
      disabled: disabled
    },
    children
  );
};

Button.propTypes = {
  children: _propTypes2.default.any,
  className: _propTypes2.default.string,
  fullWidth: _propTypes2.default.bool,
  brand: _propTypes2.default.bool,
  green: _propTypes2.default.bool,
  white: _propTypes2.default.bool,
  gray: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  onClick: _propTypes2.default.func
};

exports.default = (0, _reactCssModules2.default)(Button, _Button2.default, { allowMultiple: true });

/***/ }),
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getState = exports.reducers = undefined;

var _store = __webpack_require__(241);

var _store2 = _interopRequireDefault(_store);

var _reducers = __webpack_require__(30);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getState = function getState() {
  return _store2.default.getState();
};

exports.reducers = _reducers2.default;
exports.getState = getState;

/***/ }),
/* 65 */,
/* 66 */,
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WithdrawButton = exports.TimerButton = exports.RemoveButton = exports.ReloadButton = exports.Flip = exports.ButtonInRow = exports.Button = undefined;

var _Button = __webpack_require__(43);

var _Button2 = _interopRequireDefault(_Button);

var _ButtonsInRow = __webpack_require__(483);

var _ButtonsInRow2 = _interopRequireDefault(_ButtonsInRow);

var _Flip = __webpack_require__(484);

var _Flip2 = _interopRequireDefault(_Flip);

var _ReloadButton = __webpack_require__(1120);

var _ReloadButton2 = _interopRequireDefault(_ReloadButton);

var _RemoveButton = __webpack_require__(485);

var _RemoveButton2 = _interopRequireDefault(_RemoveButton);

var _TimerButton = __webpack_require__(165);

var _TimerButton2 = _interopRequireDefault(_TimerButton);

var _WithdrawButton = __webpack_require__(294);

var _WithdrawButton2 = _interopRequireDefault(_WithdrawButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Button = _Button2.default;
exports.ButtonInRow = _ButtonsInRow2.default;
exports.Flip = _Flip2.default;
exports.ReloadButton = _ReloadButton2.default;
exports.RemoveButton = _RemoveButton2.default;
exports.TimerButton = _TimerButton2.default;
exports.WithdrawButton = _WithdrawButton2.default;

/***/ }),
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _InlineLoader = __webpack_require__(1109);

var _InlineLoader2 = _interopRequireDefault(_InlineLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InlineLoader = function InlineLoader() {
  return _react2.default.createElement(
    'div',
    { styleName: 'ellipsis' },
    _react2.default.createElement('div', null),
    _react2.default.createElement('div', null),
    _react2.default.createElement('div', null),
    _react2.default.createElement('div', null)
  );
};

exports.default = (0, _reactCssModules2.default)(InlineLoader, _InlineLoader2.default);

/***/ }),
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _SubTitle = __webpack_require__(1132);

var _SubTitle2 = _interopRequireDefault(_SubTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubTitle = function SubTitle(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'h1',
    { styleName: 'subTitle' },
    children
  );
};

exports.default = (0, _reactCssModules2.default)(SubTitle, _SubTitle2.default);

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = exports.TextArea = exports.Radio = exports.Checkbox = exports.NumberInput = exports.Input = undefined;

var _keys = __webpack_require__(62);

var _keys2 = _interopRequireDefault(_keys);

var _toConsumableArray2 = __webpack_require__(82);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _tags = __webpack_require__(1187);

Object.defineProperty(exports, 'Input', {
  enumerable: true,
  get: function get() {
    return _tags.Input;
  }
});
Object.defineProperty(exports, 'NumberInput', {
  enumerable: true,
  get: function get() {
    return _tags.NumberInput;
  }
});
Object.defineProperty(exports, 'Checkbox', {
  enumerable: true,
  get: function get() {
    return _tags.Checkbox;
  }
});
Object.defineProperty(exports, 'Radio', {
  enumerable: true,
  get: function get() {
    return _tags.Radio;
  }
});
Object.defineProperty(exports, 'TextArea', {
  enumerable: true,
  get: function get() {
    return _tags.TextArea;
  }
});
Object.defineProperty(exports, 'Select', {
  enumerable: true,
  get: function get() {
    return _tags.Select;
  }
});

var _valuelink = __webpack_require__(1190);

var _valuelink2 = _interopRequireDefault(_valuelink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this.state = { foo: '', bar: '' }  =>   Link.all(this, 'foo', 'bar')
_valuelink2.default.allFields = function (component) {
  return _valuelink2.default.all.apply(_valuelink2.default, [component].concat((0, _toConsumableArray3.default)((0, _keys2.default)(component.state))));
};

exports.default = _valuelink2.default;

/***/ }),
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Flow = undefined;

var _Swap = __webpack_require__(887);

var _Swap2 = _interopRequireDefault(_Swap);

var _Flow = __webpack_require__(918);

var _Flow2 = _interopRequireDefault(_Flow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Swap2.default;
exports.Flow = _Flow2.default;

/***/ }),
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Table = __webpack_require__(113);

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Table = (_dec = (0, _reactCssModules2.default)(_Table2.default), _dec(_class = function (_React$Component) {
  (0, _inherits3.default)(Table, _React$Component);

  function Table() {
    (0, _classCallCheck3.default)(this, Table);
    return (0, _possibleConstructorReturn3.default)(this, (Table.__proto__ || (0, _getPrototypeOf2.default)(Table)).apply(this, arguments));
  }

  (0, _createClass3.default)(Table, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var _props = this.props,
          rows = _props.rows,
          isLoading = _props.isLoading;

      return isLoading !== nextProps.isLoading || rows !== nextProps.rows;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          titles = _props2.titles,
          rows = _props2.rows,
          rowRender = _props2.rowRender,
          textIfEmpty = _props2.textIfEmpty,
          isLoading = _props2.isLoading,
          loadingText = _props2.loadingText,
          classTitle = _props2.classTitle;


      return _react2.default.createElement(
        'table',
        { styleName: 'table', className: classTitle },
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            titles.filter(function (title) {
              return !!title;
            }).map(function (title, index) {
              return _react2.default.createElement(
                'th',
                { key: index },
                title
              );
            })
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          isLoading && _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              { styleName: 'color' },
              loadingText
            )
          ),
          !isLoading && !rows.length && _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              { styleName: 'color' },
              textIfEmpty
            )
          ),
          !isLoading && !!rows.length && rows.map(function (row, rowIndex) {
            return typeof rowRender === 'function' && rowRender(row, rowIndex);
          })
        )
      );
    }
  }]);
  return Table;
}(_react2.default.Component)) || _class);
exports.default = Table;


Table.defaultProps = {
  textIfEmpty: 'The table is empty',
  loadingText: 'Loading...'
};

/***/ }),
/* 113 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"table":"_18lfg0","color":"cbmQ26","exchange":"_1E6Kgf","historySwap":"_2VKg9V","history":"mc5i5B","wallet":"_3f2xoz"};

/***/ }),
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _PageHeadline = __webpack_require__(1131);

var _PageHeadline2 = _interopRequireDefault(_PageHeadline);

var _Title = __webpack_require__(214);

var _Title2 = _interopRequireDefault(_Title);

var _SubTitle = __webpack_require__(92);

var _SubTitle2 = _interopRequireDefault(_SubTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageHeadline = function PageHeadline(_ref) {
  var children = _ref.children,
      title = _ref.title,
      subTitle = _ref.subTitle;
  return _react2.default.createElement(
    'div',
    { styleName: 'headline' },
    children || _react2.default.createElement(
      _react.Fragment,
      null,
      title && _react2.default.createElement(
        _Title2.default,
        null,
        title
      ),
      subTitle && _react2.default.createElement(
        _SubTitle2.default,
        null,
        subTitle
      )
    )
  );
};

PageHeadline.propTypes = {
  title: _propTypes2.default.string,
  subTitle: _propTypes2.default.string
};

exports.default = (0, _reactCssModules2.default)(PageHeadline, _PageHeadline2.default);

/***/ }),
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(51);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(48);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(59);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _WidthContainer = __webpack_require__(1407);

var _WidthContainer2 = _interopRequireDefault(_WidthContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WidthContainer = function WidthContainer(_ref) {
  var children = _ref.children,
      className = _ref.className,
      main = _ref.main,
      fullHeight = _ref.fullHeight,
      relative = _ref.relative,
      contentCentering = _ref.contentCentering,
      rest = (0, _objectWithoutProperties3.default)(_ref, ['children', 'className', 'main', 'fullHeight', 'relative', 'contentCentering']);

  var containerStyleName = (0, _classnames2.default)('widthContainer', {
    'main': main,
    'fullHeight': fullHeight,
    'centeringContent': contentCentering
  });

  if (fullHeight || relative) {
    var containerInStyleName = (0, _classnames2.default)('widthContainerIn', {
      'fullHeight': fullHeight,
      'relative': relative
    });

    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({ styleName: containerStyleName, className: className }, rest),
      _react2.default.createElement(
        'div',
        { styleName: containerInStyleName },
        children
      )
    );
  }

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ styleName: containerStyleName, className: className }, rest),
    children
  );
};

WidthContainer.propTypes = {
  children: _propTypes2.default.node,
  main: _propTypes2.default.bool, // uses for main container between header and footer with vertical paddings
  fullHeight: _propTypes2.default.bool,
  relative: _propTypes2.default.bool,
  contentCentering: _propTypes2.default.bool,
  className: _propTypes2.default.string
};

exports.default = (0, _reactCssModules2.default)(WidthContainer, _WidthContainer2.default, { allowMultiple: true });

/***/ }),
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(61);

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = __webpack_require__(54);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(55);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _humanStandardTokenAbi = __webpack_require__(970);

var _humanStandardTokenAbi2 = _interopRequireDefault(_humanStandardTokenAbi);

var _helpers = __webpack_require__(11);

var _core = __webpack_require__(64);

var _actions = __webpack_require__(13);

var _actions2 = _interopRequireDefault(_actions);

var _web = __webpack_require__(193);

var _web2 = _interopRequireDefault(_web);

var _reducers = __webpack_require__(30);

var _reducers2 = _interopRequireDefault(_reducers);

var _appConfig = __webpack_require__(21);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _bignumber = __webpack_require__(91);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_bignumber.BigNumber.config({ RANGE: [-1e+9, 1e+9], POW_PRECISION: 0 });

var login = function login(privateKey, contractAddress, nameContract, decimals) {
  var data = void 0;
  if (privateKey) {
    data = _web2.default.eth.accounts.privateKeyToAccount(privateKey);
  } else {
    console.info('Created account ETH Token ...');
    data = _web2.default.eth.accounts.create();
    _web2.default.eth.accounts.wallet.add(data);
  }

  _web2.default.eth.accounts.wallet.add(data.privateKey);
  console.info('Logged in with ETH Token', data);

  setupContract(data.address, contractAddress, nameContract, decimals);
};

var setupContract = function setupContract(ethAddress, contractAddress, nameContract, decimals) {
  if (!_web2.default.eth.accounts.wallet[ethAddress]) {
    throw new Error('web3 does not have given address');
  }

  var data = {
    address: ethAddress,
    balance: 0,
    name: nameContract.toLowerCase(),
    currency: nameContract.toUpperCase(),
    contractAddress: contractAddress,
    decimals: decimals,
    token: true
  };

  _reducers2.default.user.setTokenAuthData({ name: data.name, data: data });
};

var getBalance = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(currency) {
    var _getState, tokensData, _tokensData$currency$, address, contractAddress, decimals, name, ERC20, result, amount;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _getState = (0, _core.getState)(), tokensData = _getState.user.tokensData;

            if (!(currency === undefined)) {
              _context.next = 3;
              break;
            }

            return _context.abrupt('return');

          case 3:
            _tokensData$currency$ = tokensData[currency.toLowerCase()], address = _tokensData$currency$.address, contractAddress = _tokensData$currency$.contractAddress, decimals = _tokensData$currency$.decimals, name = _tokensData$currency$.name;
            ERC20 = new _web2.default.eth.Contract(_humanStandardTokenAbi2.default, contractAddress);
            _context.next = 7;
            return ERC20.methods.balanceOf(address).call();

          case 7:
            result = _context.sent;

            console.log('result get balance', result);
            amount = new _bignumber.BigNumber(String(result)).dividedBy(new _bignumber.BigNumber(String(10)).pow(decimals)).toNumber();


            _reducers2.default.user.setTokenBalance({ name: name, amount: amount });
            return _context.abrupt('return', amount);

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function getBalance(_x) {
    return _ref.apply(this, arguments);
  };
}();

var fetchBalance = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(address, contractAddress, decimals) {
    var ERC20, result, amount;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            ERC20 = new _web2.default.eth.Contract(_humanStandardTokenAbi2.default, contractAddress);
            _context2.next = 3;
            return ERC20.methods.balanceOf(address).call();

          case 3:
            result = _context2.sent;
            amount = new _bignumber.BigNumber(String(result)).dividedBy(new _bignumber.BigNumber(String(10)).pow(decimals)).toNumber();
            return _context2.abrupt('return', amount);

          case 6:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function fetchBalance(_x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var getTransaction = function getTransaction(contractAddress) {
  return new _promise2.default(function (resolve) {
    var _getState2 = (0, _core.getState)(),
        address = _getState2.user.ethData.address;

    var url = ['https://api-rinkeby.etherscan.io/api?module=account&action=tokentx', '&contractaddress=' + contractAddress, '&address=' + address, '&startblock=0&endblock=99999999', '&sort=asc&apikey=' + _appConfig2.default.apiKeys.blocktrail].join('');

    return _helpers.request.get(url).then(function (res) {
      var transactions = res.result.filter(function (item) {
        return item.value > 0;
      }).map(function (item) {
        return {
          confirmations: item.confirmations,
          type: item.tokenSymbol,
          hash: item.hash,
          contractAddress: item.contractAddress,
          status: item.blockHash != null ? 1 : 0,
          value: new _bignumber.BigNumber(String(item.value)).dividedBy(new _bignumber.BigNumber(10).pow(Number(item.tokenDecimal))).toNumber(),
          address: item.to,
          date: item.timeStamp * 1000,
          direction: address.toLowerCase() === item.to.toLowerCase() ? 'in' : 'out'
        };
      });
      resolve(transactions);
    }).catch(function () {
      resolve([]);
    });
  });
};

var send = function send(contractAddress, to, amount, decimals) {
  var _getState3 = (0, _core.getState)(),
      address = _getState3.user.ethData.address;

  var options = {
    from: address,
    gas: '' + _appConfig2.default.services.web3.gas,
    gasPrice: '' + _appConfig2.default.services.web3.gasPrice
  };

  var tokenContract = new _web2.default.eth.Contract(_humanStandardTokenAbi2.default, contractAddress, options);
  var newAmount = new _bignumber.BigNumber(String(amount)).times(new _bignumber.BigNumber(10).pow(decimals)).integerValue();

  return new _promise2.default(function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(resolve, reject) {
      var receipt;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return tokenContract.methods.transfer(to, newAmount).send().on('transactionHash', function (hash) {
                var txId = _appConfig2.default.link.etherscan + '/tx/' + hash;
                _actions2.default.loader.show(true, true, txId);
              }).on('error', function (err) {
                reject(err);
              });

            case 2:
              receipt = _context3.sent;


              resolve(receipt);

            case 4:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
};

var approve = function approve(name, amount) {
  var _getState4 = (0, _core.getState)(),
      tokensData = _getState4.user.tokensData;

  var _tokensData$name$toLo = tokensData[name.toLowerCase()],
      address = _tokensData$name$toLo.address,
      contractAddress = _tokensData$name$toLo.contractAddress,
      decimals = _tokensData$name$toLo.decimals;


  var newAmount = new _bignumber.BigNumber(String(amount)).times(new _bignumber.BigNumber(10).pow(decimals)).integerValue();
  var ERC20 = new _web2.default.eth.Contract(_humanStandardTokenAbi2.default, contractAddress);

  return new _promise2.default(function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(resolve, reject) {
      var result;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return ERC20.methods.approve(_appConfig2.default.token.contract, newAmount).send({
                from: address,
                gas: '' + _appConfig2.default.services.web3.gas,
                gasPrice: '' + _appConfig2.default.services.web3.gasPrice
              }).on('transactionHash', function (hash) {
                var txId = _appConfig2.default.link.etherscan + '/tx/' + hash;
                _actions2.default.loader.show(true, true, txId);
              }).on('error', function (err) {
                reject(err);
              });

            case 3:
              result = _context4.sent;


              resolve(result);
              _context4.next = 10;
              break;

            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4['catch'](0);

              reject(_context4.t0);

            case 10:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined, [[0, 7]]);
    }));

    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }()).then(function () {
    _reducers2.default.user.setTokenApprove({ name: name.toLowerCase(), approve: true });
  });
};

var allowance = function allowance(contractAddress, name) {
  var _getState5 = (0, _core.getState)(),
      address = _getState5.user.ethData.address;

  var ERC20 = new _web2.default.eth.Contract(_humanStandardTokenAbi2.default, contractAddress);

  return new _promise2.default(function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(resolve, reject) {
      var allowance;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return ERC20.methods.allowance(address, _appConfig2.default.token.contract).call();

            case 2:
              allowance = _context5.sent;


              console.log('💸 allowance:', allowance);

              _reducers2.default.user.setTokenApprove({ name: name, approve: allowance > 0 });

              resolve(allowance);

            case 6:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, undefined);
    }));

    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }());
};

exports.default = {
  login: login,
  getBalance: getBalance,
  getTransaction: getTransaction,
  send: send,
  fetchBalance: fetchBalance,
  approve: approve,
  allowance: allowance
};

/***/ }),
/* 162 */,
/* 163 */,
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Timer = __webpack_require__(1111);

var _Timer2 = _interopRequireDefault(_Timer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Timer = (_dec = (0, _reactCssModules2.default)(_Timer2.default), _dec(_class = (_temp = _class2 = function (_React$Component) {
  (0, _inherits3.default)(Timer, _React$Component);

  function Timer(_ref) {
    var lockTime = _ref.lockTime;
    (0, _classCallCheck3.default)(this, Timer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Timer.__proto__ || (0, _getPrototypeOf2.default)(Timer)).call(this));

    _this.timer = null;

    _this.tick = function () {
      var timeLeft = _this.state.timeLeft;

      var newTimeLeft = timeLeft - 1000;

      if (newTimeLeft <= 0) {
        _this.props.enabledButton();
      } else {
        _this.timer = setTimeout(_this.tick, 1000);
        _this.setState({
          timeLeft: newTimeLeft
        });
      }
    };

    _this.state = {
      lockTime: lockTime,
      timeLeft: null
    };
    return _this;
  }

  (0, _createClass3.default)(Timer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.tick();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var lockTime = this.state.lockTime;

      console.log(lockTime);

      var dateNow = new Date().getTime();
      var timeLeft = lockTime - dateNow;

      this.setState({
        timeLeft: timeLeft
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var timeLeft = this.state.timeLeft;

      var min = Math.ceil(timeLeft / 1000 / 60);

      return _react2.default.createElement(
        'div',
        { styleName: 'timer' },
        min > 0 ? min + ' minute left for refund' : 'refund ready'
      );
    }
  }]);
  return Timer;
}(_react2.default.Component), _class2.propTypes = {
  lockTime: _propTypes2.default.number
}, _temp)) || _class);
exports.default = Timer;

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp, _initialiseProps;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = __webpack_require__(43);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TimerButton = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(TimerButton, _Component);

  function TimerButton(_ref) {
    var timeLeft = _ref.timeLeft;
    (0, _classCallCheck3.default)(this, TimerButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TimerButton.__proto__ || (0, _getPrototypeOf2.default)(TimerButton)).call(this));

    _initialiseProps.call(_this);

    _this.state = {
      timeLeft: timeLeft
    };
    return _this;
  }

  (0, _createClass3.default)(TimerButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.tick();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timer);
    }
  }, {
    key: 'render',
    value: function render() {
      var timeLeft = this.state.timeLeft;
      var _props = this.props,
          children = _props.children,
          isButton = _props.isButton;


      return isButton ? _react2.default.createElement(
        _Button2.default,
        { brand: true, onClick: this.handleClick },
        children,
        ' ',
        timeLeft,
        's'
      ) : '' + timeLeft;
    }
  }]);
  return TimerButton;
}(_react.Component), _class.propTypes = {
  timeLeft: _propTypes2.default.number, // seconds
  onClick: _propTypes2.default.func.isRequired
}, _class.defaultProps = {
  timeLeft: 10,
  isButton: true
}, _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.timer = null;

  this.tick = function () {
    var timeLeft = _this2.state.timeLeft;

    var newTimeLeft = timeLeft - 1;

    if (newTimeLeft <= 0) {
      _this2.handleClick();
    } else {
      _this2.timer = setTimeout(_this2.tick, 1000);
      _this2.setState({
        timeLeft: newTimeLeft
      });
    }
  };

  this.handleClick = function () {
    var onClick = _this2.props.onClick;


    clearTimeout(_this2.timer);
    onClick();
  };
}, _temp);
exports.default = TimerButton;

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(32);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Href = __webpack_require__(1117);

var _Href2 = _interopRequireDefault(_Href);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Href = function Href(_ref) {
  var children = _ref.children,
      to = _ref.to,
      redirect = _ref.redirect,
      tab = _ref.tab,
      rel = _ref.rel;

  if (to) {
    return _react2.default.createElement(
      _reactRouterDom.NavLink,
      { styleName: 'link' },
      children
    );
  }

  return _react2.default.createElement(
    'a',
    { styleName: 'link', href: redirect || tab, target: tab ? '_blank' : null, rel: rel ? rel : null },
    children
  );
};

exports.default = (0, _reactCssModules2.default)(Href, _Href2.default);

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Coins = __webpack_require__(1135);

var _Coins2 = _interopRequireDefault(_Coins);

var _Coin = __webpack_require__(215);

var _Coin2 = _interopRequireDefault(_Coin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Coins = function Coins(_ref) {
  var className = _ref.className,
      names = _ref.names,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 40 : _ref$size;
  return _react2.default.createElement(
    'div',
    { styleName: 'coins', className: className },
    _react2.default.createElement(_Coin2.default, { name: names[0], size: size }),
    _react2.default.createElement(_Coin2.default, { name: names[1], size: size })
  );
};

exports.default = (0, _reactCssModules2.default)(Coins, _Coins2.default);

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextArea = exports.Input = exports.FieldLabel = undefined;

var _FieldLabel = __webpack_require__(217);

var _FieldLabel2 = _interopRequireDefault(_FieldLabel);

var _Input = __webpack_require__(218);

var _Input2 = _interopRequireDefault(_Input);

var _TextArea = __webpack_require__(490);

var _TextArea2 = _interopRequireDefault(_TextArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.FieldLabel = _FieldLabel2.default;
exports.Input = _Input2.default;
exports.TextArea = _TextArea2.default;

/***/ }),
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalContainer = exports.ModalConductor = exports.Modal = undefined;

var _Modal = __webpack_require__(224);

var _Modal2 = _interopRequireDefault(_Modal);

var _ModalConductor = __webpack_require__(531);

var _ModalConductor2 = _interopRequireDefault(_ModalConductor);

var _ModalContainer = __webpack_require__(1457);

var _ModalContainer2 = _interopRequireDefault(_ModalContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Modal = _Modal2.default;
exports.ModalConductor = _ModalConductor2.default;
exports.ModalContainer = _ModalContainer2.default;

/***/ }),
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  home: '/',
  exchange: '/exchange',
  history: '/history',
  swap: '/swap',
  feed: '/feed',
  affiliate: '/affiliate',
  listing: '/listing',
  test: 'https://testnet.swap.online',
  main: 'https://swap.online/',
  coins: '/coins',

  // social networks
  medium: 'https://medium.com/swaponline',
  twitter: 'https://twitter.com/SwapOnlineTeam',
  facebook: 'https://www.facebook.com/pg/Swaponline-637233326642691',
  telegram: 'https://t.me/swaponline',
  bitcointalk: 'https://bitcointalk.org/index.php?topic=4636633.0',

  // footer links
  etherdelta: 'https://etherdelta.com/#0x14a52cf6b4f68431bd5d9524e4fcd6f41ce4ade9-ETH',
  button: 'https://wiki.swap.online/about-swap-online/#b2b',
  about: 'https://wiki.swap.online/about-swap-online/',
  career: 'https://wiki.swap.online/careers-swap-online/',
  contacts: 'https://wiki.swap.online/contacts-swap-online/',
  concept: 'https://wiki.swap.online/en.pdf',
  description: 'https://docs.google.com/document/d/1XNLzmNXkFeJWveJp62vFPQdjH8xabpeSm6ifbgj4MeM/edit?usp=sharing',
  research: 'https://docs.google.com/spreadsheets/d/1qWFLK2y8oMH5Gfam-iwqXPzLtwNabzp_EL6QFxjSBc0/edit?usp=sharing',
  reuters: 'https://www.reuters.com/brandfeatures/venture-capital/article?id=37488',
  wiki: 'https://wiki.swap.online',
  github: 'https://github.com/swaponline/swap.core',
  githubButton: 'https://github.com/swaponline/swap.button',
  bitcointalkSendTx: 'https://bitcointalk.org/index.php?topic=1938621.0',
  privacyPolicy: 'https://drive.google.com/file/d/1LdsCOfX_pOJAMqlL4g6DfUpZrGF5eRe9/view?usp=sharing',
  privacyPolicyDoc: 'https://drive.google.com/file/d/0Bz2ZwZCmFtj_N29fQVk4bV9tUXRscjFEcUkxVkFXdF9tY0ow/view?usp=sharing',
  terms: 'https://drive.google.com/file/d/0Bz2ZwZCmFtj_Nm9qSm0tUm9Ia1kwVGhWRlVlVXRJTGZtYW5N/view?usp=sharing',
  legalOpinion: 'https://drive.google.com/file/d/0Bz2ZwZCmFtj_WlNkY0ZYN0ZpNUo2VFVEeW9rWEVoTlNja0VZ/view?usp=sharing'
};

/***/ }),
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = __webpack_require__(723);

var _web2 = _interopRequireDefault(_web);

var _appConfig = __webpack_require__(21);

var _appConfig2 = _interopRequireDefault(_appConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = new _web2.default(new _web2.default.providers.HttpProvider(_appConfig2.default.services.web3.provider));

exports.default = web3;

/***/ }),
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Title = __webpack_require__(1130);

var _Title2 = _interopRequireDefault(_Title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Title = function Title(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { styleName: 'title' },
    children
  );
};

exports.default = (0, _reactCssModules2.default)(Title, _Title2.default);

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Coin = __webpack_require__(1136);

var _Coin2 = _interopRequireDefault(_Coin);

var _CurrencyIcon = __webpack_require__(486);

var _CurrencyIcon2 = _interopRequireDefault(_CurrencyIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Coin = function Coin(_ref) {
  var className = _ref.className,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 40 : _ref$size,
      name = _ref.name;

  var style = {
    width: size ? size + 'px' : null
  };

  var iconProps = {
    name: name.toLowerCase()
  };

  var isIconExist = _CurrencyIcon.iconNames.includes(name.toLowerCase());

  if (isIconExist) {
    iconProps = (0, _assign2.default)({}, iconProps, {
      styleName: 'icon'
    });
  } else {
    iconProps = (0, _assign2.default)({}, iconProps, {
      styleName: 'letter',
      style: {
        lineHeight: size + 'px',
        fontSize: size / 2 + 'px'
      }
    });
  }

  return _react2.default.createElement(
    'div',
    { styleName: 'coin', className: className, style: style },
    _react2.default.createElement(_CurrencyIcon2.default, iconProps)
  );
};

exports.default = (0, _reactCssModules2.default)(Coin, _Coin2.default);

/***/ }),
/* 216 */,
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(59);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _FieldLabel = __webpack_require__(1186);

var _FieldLabel2 = _interopRequireDefault(_FieldLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FieldLabel = function FieldLabel(_ref) {
  var children = _ref.children,
      inRow = _ref.inRow;
  return _react2.default.createElement(
    'div',
    { styleName: (0, _classnames2.default)('label', { 'inRow': inRow }) },
    children
  );
};

exports.default = (0, _reactCssModules2.default)(FieldLabel, _FieldLabel2.default, { allowMultiple: true });

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(48);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _swValuelink = __webpack_require__(93);

var _classnames = __webpack_require__(59);

var _classnames2 = _interopRequireDefault(_classnames);

var _helpers = __webpack_require__(11);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Input = __webpack_require__(1193);

var _Input2 = _interopRequireDefault(_Input);

var _TextArea = __webpack_require__(490);

var _TextArea2 = _interopRequireDefault(_TextArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = (_dec = (0, _reactCssModules2.default)(_Input2.default, { allowMultiple: true }), _dec(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(Input, _Component);

  function Input() {
    (0, _classCallCheck3.default)(this, Input);
    return (0, _possibleConstructorReturn3.default)(this, (Input.__proto__ || (0, _getPrototypeOf2.default)(Input)).apply(this, arguments));
  }

  (0, _createClass3.default)(Input, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          inputContainerClassName = _props.inputContainerClassName,
          inputClassName = _props.inputClassName,
          error = _props.valueLink.error,
          valueLink = _props.valueLink,
          multiline = _props.multiline,
          focusOnInit = _props.focusOnInit,
          disabled = _props.disabled,
          readOnly = _props.readOnly,
          type = _props.type,
          rest = (0, _objectWithoutProperties3.default)(_props, ['className', 'inputContainerClassName', 'inputClassName', 'valueLink', 'valueLink', 'multiline', 'focusOnInit', 'disabled', 'readOnly', 'type']);


      var inputContainerStyleName = (0, _classnames2.default)('inputContainer', {
        'withError': error
      });

      return _react2.default.createElement(
        'div',
        { styleName: 'root', className: className },
        _react2.default.createElement(
          'div',
          { styleName: inputContainerStyleName, className: inputContainerClassName },
          _react2.default.createElement(multiline ? _TextArea2.default : _swValuelink.Input, (0, _assign2.default)({}, (0, _helpers.ignoreProps)(rest, 'styles'), {
            styleName: 'input',
            className: inputClassName,
            valueLink: valueLink,
            type: type,
            disabled: disabled || readOnly,
            autoFocus: !!focusOnInit,
            dir: 'auto',
            autoComplete: 'off'
          }))
        ),
        Boolean(error) && _react2.default.createElement(
          'div',
          { styleName: 'error' },
          error
        )
      );
    }
  }]);
  return Input;
}(_react.Component), _class2.propTypes = {
  className: _propTypes2.default.string,
  rootClassName: _propTypes2.default.string,
  inputClassName: _propTypes2.default.string,
  placeholder: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  type: _propTypes2.default.string,
  valueLink: _propTypes2.default.object.isRequired,
  focusOnInit: _propTypes2.default.bool,
  multiline: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  readOnly: _propTypes2.default.bool,
  required: _propTypes2.default.bool,
  icon: _propTypes2.default.bool,
  intl: _propTypes2.default.object
}, _class2.defaultProps = {
  focusOnInit: false,
  multiline: false,
  disabled: false,
  readOnly: false,
  required: false,
  type: 'text'
}, _temp)) || _class);
exports.default = Input;

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SwapAuth = __webpack_require__(302);

var _SwapAuth2 = _interopRequireDefault(_SwapAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SwapAuth2.default;
module.exports = exports['default'];

/***/ }),
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactClickOutside = __webpack_require__(489);

var _reactClickOutside2 = _interopRequireDefault(_reactClickOutside);

var _actions = __webpack_require__(13);

var _actions2 = _interopRequireDefault(_actions);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(59);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Modal = __webpack_require__(1429);

var _Modal2 = _interopRequireDefault(_Modal);

var _WidthContainer = __webpack_require__(133);

var _WidthContainer2 = _interopRequireDefault(_WidthContainer);

var _CloseIcon = __webpack_require__(530);

var _CloseIcon2 = _interopRequireDefault(_CloseIcon);

var _Overlay = __webpack_require__(532);

var _Overlay2 = _interopRequireDefault(_Overlay);

var _Center = __webpack_require__(533);

var _Center2 = _interopRequireDefault(_Center);

var _Logo = __webpack_require__(311);

var _Logo2 = _interopRequireDefault(_Logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = (_dec = (0, _reactCssModules2.default)(_Modal2.default, { allowMultiple: true }), _dec(_class = (_temp2 = _class2 = function (_Component) {
  (0, _inherits3.default)(Modal, _Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Modal.__proto__ || (0, _getPrototypeOf2.default)(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.close = function () {
      var _this$props = _this.props,
          name = _this$props.name,
          data = _this$props.data,
          onClose = _this$props.onClose,
          disableClose = _this$props.disableClose;


      if (name === 'OfferModal') {
        _actions2.default.analytics.dataEvent('orderbook-addoffer-click-exit-button');
      }

      if (!disableClose) {
        _actions2.default.modals.close(name);

        if (typeof onClose === 'function') {
          onClose();
        }

        if (typeof data.onClose === 'function') {
          data.onClose();
        }
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Modal, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          whiteLogo = _props.whiteLogo,
          title = _props.title,
          showCloseButton = _props.showCloseButton,
          disableClose = _props.disableClose,
          children = _props.children,
          titleUppercase = _props.titleUppercase,
          name = _props.name;


      var titleStyleName = (0, _classnames2.default)('title', {
        'uppercase': titleUppercase
      });

      return _react2.default.createElement(
        _reactClickOutside2.default,
        { onClickOutside: function onClickOutside() {
            _actions2.default.modals.close(name);
          } },
        _react2.default.createElement(
          _Overlay2.default,
          null,
          _react2.default.createElement(
            'div',
            { styleName: 'modal', className: className },
            Boolean(title || showCloseButton) && _react2.default.createElement(
              'div',
              { styleName: 'header' },
              _react2.default.createElement(
                _WidthContainer2.default,
                { styleName: 'headerContent' },
                _react2.default.createElement(_Logo2.default, { colored: !whiteLogo }),
                _react2.default.createElement(
                  'div',
                  { styleName: titleStyleName, role: 'title' },
                  title
                ),
                showCloseButton && !disableClose && _react2.default.createElement(_CloseIcon2.default, { styleName: 'closeButton', onClick: this.close, 'data-testid': 'modalCloseIcon' })
              )
            ),
            _react2.default.createElement(
              'div',
              { styleName: 'contentContainer' },
              _react2.default.createElement(
                _Center2.default,
                { scrollable: true },
                _react2.default.createElement(
                  'div',
                  { styleName: 'content' },
                  children
                )
              )
            )
          )
        )
      );
    }
  }]);
  return Modal;
}(_react.Component), _class2.propTypes = {
  children: _propTypes2.default.node,
  name: _propTypes2.default.string.isRequired,
  title: _propTypes2.default.any,
  showCloseButton: _propTypes2.default.bool,
  data: _propTypes2.default.object,
  disableClose: _propTypes2.default.bool,
  titleUppercase: _propTypes2.default.bool,
  onClose: _propTypes2.default.func
}, _class2.defaultProps = {
  data: {},
  whiteLogo: false,
  showCloseButton: true,
  fullWidth: false,
  disableClose: false,
  disableCloseOverlay: false,
  uppercase: false
}, _temp2)) || _class);
exports.default = Modal;

/***/ }),
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ecc = exports.eos = undefined;

var _promise = __webpack_require__(61);

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = __webpack_require__(54);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(55);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _core = __webpack_require__(64);

var _appConfig = __webpack_require__(21);

var _appConfig2 = _interopRequireDefault(_appConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var eosInstance = null;
var eccInstance = null;
var semaphore = false;

var keyProvider = function keyProvider(_ref) {
  var transaction = _ref.transaction,
      pubkeys = _ref.pubkeys;

  var _getState = (0, _core.getState)(),
      _getState$user$eosDat = _getState.user.eosData,
      privateKeys = _getState$user$eosDat.privateKeys,
      publicKeys = _getState$user$eosDat.publicKeys;

  if (!pubkeys) {
    return [publicKeys.active];
  }

  return [privateKeys.active];
};

var setupEOS = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var EOS, _config$services$eos, chainId, httpEndpoint;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('eos start import');
            _context.next = 3;
            return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 1489));

          case 3:
            EOS = _context.sent;

            console.log('eos finish import');

            _config$services$eos = _appConfig2.default.services.eos, chainId = _config$services$eos.chainId, httpEndpoint = _config$services$eos.httpEndpoint;


            eosInstance = EOS({
              chainId: chainId, httpEndpoint: httpEndpoint, keyProvider: keyProvider
            });

            eccInstance = EOS.modules.ecc;

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function setupEOS() {
    return _ref2.apply(this, arguments);
  };
}();

var timeout = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(ms) {
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt('return', new _promise2.default(function (resolve) {
              return setTimeout(resolve, ms);
            }));

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function timeout(_x) {
    return _ref3.apply(this, arguments);
  };
}();

var eos = {
  getInstance: function getInstance() {
    var _this = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(eosInstance === null && semaphore === false)) {
                _context3.next = 6;
                break;
              }

              semaphore = true;
              _context3.next = 4;
              return setupEOS();

            case 4:
              _context3.next = 9;
              break;

            case 6:
              if (!(eosInstance === null && semaphore === true)) {
                _context3.next = 9;
                break;
              }

              _context3.next = 9;
              return timeout(5000);

            case 9:

              console.log('eos instance', eosInstance);

              return _context3.abrupt('return', eosInstance);

            case 11:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this);
    }))();
  }
};

var ecc = {
  getInstance: function getInstance() {
    var _this2 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!(eosInstance === null && semaphore === false)) {
                _context4.next = 6;
                break;
              }

              semaphore = true;
              _context4.next = 4;
              return setupEOS();

            case 4:
              _context4.next = 9;
              break;

            case 6:
              if (!(eosInstance === null && semaphore === true)) {
                _context4.next = 9;
                break;
              }

              _context4.next = 9;
              return timeout(5000);

            case 9:
              return _context4.abrupt('return', eccInstance);

            case 10:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this2);
    }))();
  }
};

exports.eos = eos;
exports.ecc = ecc;

/***/ }),
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.history = undefined;

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

var _reactRouterRedux = __webpack_require__(349);

var _history = __webpack_require__(72);

var _redaction = __webpack_require__(14);

var _reduxLogger = __webpack_require__(625);

var _reducers = __webpack_require__(360);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = exports.history = (0, _history.createBrowserHistory)();
var middleware = (0, _reactRouterRedux.routerMiddleware)(history);
var initialState = {}; // (localStorage['redux-store']) ? JSON.parse(localStorage['redux-store']) : {}


var store = (0, _redaction.createStore)({
  reducers: (0, _assign2.default)({}, (0, _redaction.combineReducers)(_reducers2.default, _reactRouterRedux.routerReducer)),
  middleware: [middleware].concat( true ? [] : [(0, _reduxLogger.createLogger)()]),
  initialState: initialState
});

exports.default = store;

/***/ }),
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _COINS = __webpack_require__(901);

var _COINS2 = _interopRequireDefault(_COINS);

var _ENV = __webpack_require__(902);

var _ENV2 = _interopRequireDefault(_ENV);

var _SERVICES = __webpack_require__(903);

var _SERVICES2 = _interopRequireDefault(_SERVICES);

var _NETWORKS = __webpack_require__(904);

var _NETWORKS2 = _interopRequireDefault(_NETWORKS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  COINS: _COINS2.default,
  ENV: _ENV2.default,
  SERVICES: _SERVICES2.default,
  NETWORKS: _NETWORKS2.default
};
module.exports = exports['default'];

/***/ }),
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _WithdrawButton = __webpack_require__(1127);

var _WithdrawButton2 = _interopRequireDefault(_WithdrawButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WithdrawButton = function WithdrawButton(_ref) {
  var onClick = _ref.onClick,
      children = _ref.children,
      className = _ref.className;
  return _react2.default.createElement(
    'button',
    { styleName: 'withdrawButton', className: className, onClick: onClick },
    children
  );
};

exports.default = (0, _reactCssModules2.default)(WithdrawButton, _WithdrawButton2.default);

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _identicon = __webpack_require__(487);

var _identicon2 = _interopRequireDefault(_identicon);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Avatar = __webpack_require__(1150);

var _Avatar2 = _interopRequireDefault(_Avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Avatar = function Avatar(_ref) {
  var value = _ref.value,
      className = _ref.className,
      background = _ref.background,
      margin = _ref.margin,
      size = _ref.size,
      format = _ref.format;


  var options = {
    background: background,
    margin: margin,
    size: size,
    format: format
  };

  var data = new _identicon2.default(value, options).toString();

  return _react2.default.createElement('img', { className: className, styleName: 'avatar', alt: value, src: 'data:image/svg+xml;base64,' + data });
};

Avatar.defaultProps = {
  background: [255, 255, 255, 255],
  margin: 0,
  size: 35,
  format: 'svg'
};

exports.default = (0, _reactCssModules2.default)(Avatar, _Avatar2.default);

/***/ }),
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(281);

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = __webpack_require__(84);

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(44);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

var _swap = __webpack_require__(17);

var _swap2 = _interopRequireDefault(_swap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _privateKeys = void 0;
var getPublicDataMethods = {};

var SwapAuth = function (_ServiceInterface) {
  (0, _inherits3.default)(SwapAuth, _ServiceInterface);
  (0, _createClass3.default)(SwapAuth, null, [{
    key: 'name',
    get: function get() {
      return 'auth';
    }
  }]);

  function SwapAuth(privateKeys) {
    (0, _classCallCheck3.default)(this, SwapAuth);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SwapAuth.__proto__ || (0, _getPrototypeOf2.default)(SwapAuth)).call(this));

    _this._serviceName = 'auth';
    _this.accounts = {};

    _privateKeys = privateKeys;
    return _this;
  }

  (0, _createClass3.default)(SwapAuth, [{
    key: 'initService',
    value: function initService() {
      var _this2 = this;

      (0, _keys2.default)(_privateKeys).forEach(function (name) {
        if ((0, _keys2.default)(_swap.constants.COINS).indexOf(name) < 0) {
          var error = 'SwapAuth._initService(): There is no instance with name "' + name + '".';
          error += 'Only [' + (0, _stringify2.default)((0, _keys2.default)(_swap.constants.COINS)).replace(/"/g, '\'') + '] available';

          throw new Error(error);
        }

        try {
          var instance = __webpack_require__(1274)("./" + name);
          instance = instance.default || instance;
          var account = instance.login(_privateKeys[name]);

          _this2.accounts[name] = account;
          getPublicDataMethods[name] = function () {
            return instance.getPublicData(account);
          };
        } catch (err) {
          throw new Error('SwapAuth._initService(): ' + err);
        }
      });
    }
  }, {
    key: 'getPublicData',
    value: function getPublicData() {
      var data = {
        peer: _swap2.default.services.room.peer
      };

      (0, _keys2.default)(getPublicDataMethods).forEach(function (name) {
        data[name] = getPublicDataMethods[name]();
      });

      return data;
    }
  }]);
  return SwapAuth;
}(_swap.ServiceInterface);

exports.default = SwapAuth;
module.exports = exports['default'];

/***/ }),
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(32);

var _helpers = __webpack_require__(11);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Logo = __webpack_require__(1404);

var _Logo2 = _interopRequireDefault(_Logo);

var _logo = __webpack_require__(1405);

var _logo2 = _interopRequireDefault(_logo);

var _logoColored = __webpack_require__(1406);

var _logoColored2 = _interopRequireDefault(_logoColored);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Logo = function Logo(_ref) {
  var colored = _ref.colored,
      withLink = _ref.withLink,
      mobile = _ref.mobile;

  var imgNode = _react2.default.createElement('img', {
    styleName: !withLink && 'logo',
    src: colored ? _logoColored2.default : _logo2.default,
    alt: 'swap.online logo'
  });

  if (withLink) {
    return _react2.default.createElement(
      _reactRouterDom.Link,
      { styleName: mobile ? 'mobile' : 'logo', to: _helpers.links.home },
      imgNode
    );
  }

  return imgNode;
};

exports.default = (0, _reactCssModules2.default)(Logo, _Logo2.default);

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Loader = __webpack_require__(1420);

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loader = function Loader(_ref) {
  var overlayClassName = _ref.overlayClassName,
      className = _ref.className,
      _ref$text = _ref.text,
      text = _ref$text === undefined ? false : _ref$text,
      txId = _ref.txId;
  return _react2.default.createElement(
    'div',
    { styleName: 'overlay', className: overlayClassName },
    _react2.default.createElement(
      'div',
      { styleName: 'loader center', className: className },
      _react2.default.createElement('div', { styleName: 'loader1' }),
      _react2.default.createElement('div', { styleName: 'loader2' }),
      _react2.default.createElement('div', { styleName: 'loader3' })
    ),
    text && _react2.default.createElement(
      'p',
      { styleName: 'text' },
      'Please wait, it takes from 3 to 5 minutes to complete the transaction.'
    ),
    txId && _react2.default.createElement(
      'a',
      { href: txId, styleName: 'link', target: '_blank', rel: 'noopener noreferrer' },
      txId
    )
  );
};

exports.default = (0, _reactCssModules2.default)(Loader, _Loader2.default, { allowMultiple: true });

/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Row = __webpack_require__(1436);

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Row = function Row(_ref) {
  var title = _ref.title,
      children = _ref.children;
  return _react2.default.createElement(
    'div',
    { styleName: 'row' },
    _react2.default.createElement(
      'div',
      { styleName: 'title' },
      title
    ),
    _react2.default.createElement(
      'div',
      { styleName: 'content' },
      children
    )
  );
};

exports.default = (0, _reactCssModules2.default)(Row, _Row2.default);

/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Value = __webpack_require__(1437);

var _Value2 = _interopRequireDefault(_Value);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Value = function Value(_ref) {
  var value = _ref.value,
      currency = _ref.currency;
  return _react2.default.createElement(
    'span',
    { styleName: 'value' },
    _react2.default.createElement(
      'span',
      null,
      value,
      ' '
    ),
    _react2.default.createElement(
      'span',
      { styleName: 'currency' },
      ' ',
      currency.toUpperCase()
    )
  );
};

exports.default = (0, _reactCssModules2.default)(Value, _Value2.default);

/***/ }),
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _notifications = __webpack_require__(626);

var notifications = _interopRequireWildcard(_notifications);

var _modals = __webpack_require__(629);

var modals = _interopRequireWildcard(_modals);

var _history = __webpack_require__(630);

var history = _interopRequireWildcard(_history);

var _loader = __webpack_require__(635);

var loader = _interopRequireWildcard(_loader);

var _user = __webpack_require__(636);

var user = _interopRequireWildcard(_user);

var _feeds = __webpack_require__(637);

var feeds = _interopRequireWildcard(_feeds);

var _core = __webpack_require__(638);

var core = _interopRequireWildcard(_core);

var _ipfs = __webpack_require__(639);

var ipfs = _interopRequireWildcard(_ipfs);

var _api = __webpack_require__(640);

var api = _interopRequireWildcard(_api);

var _currencies = __webpack_require__(641);

var currencies = _interopRequireWildcard(_currencies);

var _menu = __webpack_require__(642);

var menu = _interopRequireWildcard(_menu);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
  notifications: notifications,
  modals: modals,
  history: history,
  loader: loader,
  core: core,
  user: user,
  feeds: feeds,
  ipfs: ipfs,
  api: api,
  currencies: currencies,
  menu: menu
};

/***/ }),
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _localStorage = __webpack_require__(865);

var _localStorage2 = _interopRequireDefault(_localStorage);

var _privateKeyNames = __webpack_require__(866);

var _privateKeyNames2 = _interopRequireDefault(_privateKeyNames);

var _notifications = __webpack_require__(867);

var _notifications2 = _interopRequireDefault(_notifications);

var _modals = __webpack_require__(868);

var _modals2 = _interopRequireDefault(_modals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  localStorage: _localStorage2.default,
  privateKeyNames: _privateKeyNames2.default,
  notifications: _notifications2.default,
  modals: _modals2.default
};

/***/ }),
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _values = __webpack_require__(279);

var _values2 = _interopRequireDefault(_values);

var _keys = __webpack_require__(84);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _constants = __webpack_require__(280);

var _constants2 = _interopRequireDefault(_constants);

var _StorageFactory = __webpack_require__(905);

var _StorageFactory2 = _interopRequireDefault(_StorageFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwapApp = function () {
  function SwapApp() {
    (0, _classCallCheck3.default)(this, SwapApp);
  }

  (0, _createClass3.default)(SwapApp, [{
    key: 'setup',


    /**
     *
     * @param {object}  options
     * @param {string}  options.network
     * @param {object}  options.env
     * @param {array}   options.services
     * @param {array}   options.swaps
     * @param {array}   options.flows
     */
    value: function setup(options) {
      this.network = options.network || _constants2.default.NETWORKS.TESTNET;
      this.env = {};
      this.services = {};
      this.swaps = {};
      this.flows = {};

      this._addEnv(options.env || {});
      this._addServices(options.services || {});
      this._addSwaps(options.swaps || {});
      this._addFlows(options.flows || {});
    }

    // Configure -------------------------------------------------------- /

  }, {
    key: '_addEnv',
    value: function _addEnv(env) {
      (0, _keys2.default)(env).forEach(function (name) {
        if ((0, _values2.default)(_constants2.default.ENV).indexOf(name) < 0) {
          throw new Error('SwapApp.addEnv(): Only ' + (0, _values2.default)(_constants2.default.ENV) + ' available');
        }
      });

      this.env = env;
      this.env.storage = new _StorageFactory2.default(env.storage);
    }
  }, {
    key: '_addService',
    value: function _addService(service) {
      if (!service._serviceName) {
        throw new Error('SwapApp service should contain "_serviceName" property');
      }

      if (!(0, _values2.default)(_constants2.default.SERVICES).includes(service._serviceName)) {
        throw new Error('SwapApp service should contain "_serviceName" property should be one of ' + (0, _values2.default)(_constants2.default.SERVICES) + ', got "' + service._serviceName + '"');
      }

      this.services[service._serviceName] = service;
    }
  }, {
    key: '_addServices',
    value: function _addServices(services) {
      var _this = this;

      // add service to app by _serviceName
      services.forEach(function (service) {
        return _this._addService(service);
      });
      // spy expects
      (0, _keys2.default)(this.services).forEach(function (serviceName) {
        return _this.services[serviceName]._waitRelationsResolve();
      });
      // init services
      (0, _keys2.default)(this.services).forEach(function (serviceName) {
        return _this.services[serviceName]._tryInitService();
      });
    }
  }, {
    key: '_addSwap',
    value: function _addSwap(swap) {
      if (!swap._swapName) {
        throw new Error('SwapApp swap should contain "_swapName" property');
      }

      if (!(0, _values2.default)(_constants2.default.COINS).includes(swap._swapName.toUpperCase())) {
        throw new Error('SwapApp swap should contain "_swapName" property should be one of ' + (0, _values2.default)(_constants2.default.COINS) + ', got "' + swap._swapName.toUpperCase() + '"');
      }

      this.swaps[swap._swapName] = swap;

      if (typeof swap._initSwap === 'function') {
        swap._initSwap();
      }
    }
  }, {
    key: '_addSwaps',
    value: function _addSwaps(swaps) {
      var _this2 = this;

      swaps.forEach(function (swap) {
        _this2._addSwap(swap);
      });
    }
  }, {
    key: '_addFlow',
    value: function _addFlow(Flow) {
      var flowName = Flow.getName();

      if (!/^[A-Za-z]+2[A-Za-z]+$/.test(flowName)) {
        throw new Error('SwapApp flow "_flowName" property should be "^[A-Za-z]+2[A-Za-z]+$" format');
      }

      var flowNameLeftPart = flowName.match(/^[^\d]+/);
      var flowNameRightPart = flowName.match(/[^\d]+$/);

      if (!flowNameLeftPart || !flowNameRightPart || !(0, _values2.default)(_constants2.default.COINS).includes(flowNameLeftPart[0].toUpperCase()) || !(0, _values2.default)(_constants2.default.COINS).includes(flowNameRightPart[0].toUpperCase())) {
        throw new Error('SwapApp flow "_flowName" property should contain only: ' + (0, _values2.default)(_constants2.default.COINS) + '. Got: "' + flowName.toUpperCase() + '"');
      }

      this.flows[flowName] = Flow;
    }
  }, {
    key: '_addFlows',
    value: function _addFlows(flows) {
      var _this3 = this;

      flows.forEach(function (flow) {
        _this3._addFlow(flow);
      });
    }

    // Public methods --------------------------------------------------- /

  }, {
    key: 'isMainNet',
    value: function isMainNet() {
      return this.network.toLowerCase() === _constants2.default.NETWORKS.MAINNET;
    }
  }, {
    key: 'isTestNet',
    value: function isTestNet() {
      return this.network.toLowerCase() === _constants2.default.NETWORKS.TESTNET;
    }
  }, {
    key: 'isLocalNet',
    value: function isLocalNet() {
      return this.network.toLowerCase() === _constants2.default.NETWORKS.LOCALNET;
    }
  }]);
  return SwapApp;
}();

exports.default = new SwapApp();
module.exports = exports['default'];

/***/ }),
/* 434 */,
/* 435 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(88);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(277);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _swap = __webpack_require__(17);

var _swap2 = _interopRequireDefault(_swap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Room = function () {

  // TODO add destroy method with all events unsubscribe (when swap is finished)

  function Room(_ref) {
    var _this = this;

    var swapId = _ref.swapId,
        participantPeer = _ref.participantPeer;
    (0, _classCallCheck3.default)(this, Room);

    this.getOnlineParticipant = function () {
      var online = _swap2.default.services.room.connection.hasPeer(_this.peer);

      if (!online) {
        _this._events.dispatch('participant is offline', _this.peer);
      }

      return online;
    };

    this.swapId = swapId;
    this.peer = participantPeer;
    this._events = new _swap.Events();
  }

  (0, _createClass3.default)(Room, [{
    key: 'on',
    value: function on(eventName, handler) {
      var _this2 = this;

      _swap2.default.services.room.on(eventName, function (_ref2) {
        var fromPeer = _ref2.fromPeer,
            swapId = _ref2.swapId,
            values = (0, _objectWithoutProperties3.default)(_ref2, ['fromPeer', 'swapId']);

        console.log('on ' + eventName + ' from ' + fromPeer + ' at swap ' + swapId, values);
        if (fromPeer === _this2.peer && swapId === _this2.swapId) {
          handler(values);
        }
      });
    }
  }, {
    key: 'once',
    value: function once(eventName, handler) {
      var self = this;

      _swap2.default.services.room.on(eventName, function (_ref3) {
        var fromPeer = _ref3.fromPeer,
            swapId = _ref3.swapId,
            values = (0, _objectWithoutProperties3.default)(_ref3, ['fromPeer', 'swapId']);

        console.log('once ' + eventName + ' from ' + fromPeer + ' at swap ' + swapId, values);
        if (fromPeer === self.peer && swapId === self.swapId) {
          this.unsubscribe();
          handler(values);
        }
      });
    }
  }, {
    key: 'sendMessage',
    value: function sendMessage(message) {
      var _this3 = this;

      if (!this.getOnlineParticipant()) {
        setTimeout(function () {
          _this3.sendMessage(message);
        }, 3000);
      }

      var event = message.event,
          data = message.data;


      _swap2.default.services.room.sendConfirmation(this.peer, {
        event: event,
        action: 'active',
        data: (0, _extends3.default)({
          swapId: this.swapId
        }, data)
      });
    }
  }]);
  return Room;
}();

exports.default = Room;
module.exports = exports['default'];

/***/ }),
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = __webpack_require__(11);

var _appConfig = __webpack_require__(21);

var _appConfig2 = _interopRequireDefault(_appConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var URL = __webpack_require__(952);

var newReferral = function newReferral(ethAddress) {
  var _ref = new URL(window.location.href, 1, true),
      query = _ref.query;

  if (query.ref) {
    _helpers.request.get(_appConfig2.default.referral.url + '?referral=' + query.ref + '&action=add_referrer&address=' + ethAddress);
  }
};

exports.default = {
  newReferral: newReferral
};

/***/ }),
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Href = __webpack_require__(166);

var _Href2 = _interopRequireDefault(_Href);

var _appConfig = __webpack_require__(21);

var _appConfig2 = _interopRequireDefault(_appConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var type = _ref.type,
      id = _ref.id,
      _ref$link = _ref.link,
      link = _ref$link === undefined ? '#' : _ref$link;

  switch (type) {
    case 'BTC':
      link = _appConfig2.default.api.blocktrail + '/tx/' + id;

    case 'ETH':
      link = _appConfig2.default.link.etherscan + '/tx/' + id;

    case 'EOS':
      link = _appConfig2.default.link.eos + '/#tx/' + id;
  }

  return _react2.default.createElement(
    'div',
    null,
    'Transaction: ',
    _react2.default.createElement(
      'strong',
      null,
      _react2.default.createElement(
        _Href2.default,
        { tab: link, rel: 'noopener noreferrer' },
        id
      )
    )
  );
};

/***/ }),
/* 483 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(48);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _ButtonsInRow = __webpack_require__(1118);

var _ButtonsInRow2 = _interopRequireDefault(_ButtonsInRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonsInRow = function ButtonsInRow(_ref) {
  var children = _ref.children,
      rest = (0, _objectWithoutProperties3.default)(_ref, ['children']);
  return _react2.default.createElement(
    'div',
    rest,
    _react2.default.createElement(
      'div',
      { styleName: 'twoButtonsInRow' },
      children
    )
  );
};

ButtonsInRow.propTypes = {
  children: _propTypes2.default.node.isRequired
};

exports.default = (0, _reactCssModules2.default)(ButtonsInRow, _ButtonsInRow2.default);

/***/ }),
/* 484 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Flip = __webpack_require__(1119);

var _Flip2 = _interopRequireDefault(_Flip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Flip(_ref) {
  var onClick = _ref.onClick;

  return _react2.default.createElement('button', { alt: 'flip currency', onClick: onClick, styleName: 'trade-panel__change' });
}

exports.default = (0, _reactCssModules2.default)(Flip, _Flip2.default);

/***/ }),
/* 485 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _RemoveButton = __webpack_require__(1124);

var _RemoveButton2 = _interopRequireDefault(_RemoveButton);

var _RemoveIcon = __webpack_require__(1125);

var _RemoveIcon2 = _interopRequireDefault(_RemoveIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RemoveButton = function RemoveButton(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return _react2.default.createElement(
    'div',
    { styleName: 'removeButton', className: className, onClick: onClick },
    _react2.default.createElement(_RemoveIcon2.default, { styleName: 'icon' })
  );
};

exports.default = (0, _reactCssModules2.default)(RemoveButton, _RemoveButton2.default);

/***/ }),
/* 486 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iconNames = undefined;

var _keys = __webpack_require__(62);

var _keys2 = _interopRequireDefault(_keys);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _CurrencyIcon = __webpack_require__(1137);

var _CurrencyIcon2 = _interopRequireDefault(_CurrencyIcon);

var _btc = __webpack_require__(1138);

var _btc2 = _interopRequireDefault(_btc);

var _eth = __webpack_require__(1139);

var _eth2 = _interopRequireDefault(_eth);

var _icx = __webpack_require__(1140);

var _icx2 = _interopRequireDefault(_icx);

var _waves = __webpack_require__(1141);

var _waves2 = _interopRequireDefault(_waves);

var _xrp = __webpack_require__(1142);

var _xrp2 = _interopRequireDefault(_xrp);

var _nim = __webpack_require__(1143);

var _nim2 = _interopRequireDefault(_nim);

var _eos = __webpack_require__(1144);

var _eos2 = _interopRequireDefault(_eos);

var _swap = __webpack_require__(1145);

var _swap2 = _interopRequireDefault(_swap);

var _usdt = __webpack_require__(1146);

var _usdt2 = _interopRequireDefault(_usdt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var icons = {
  btc: _btc2.default,
  eth: _eth2.default,
  icx: _icx2.default,
  usdt: _usdt2.default,
  swap: _swap2.default,
  waves: _waves2.default,
  xrp: _xrp2.default,
  eos: _eos2.default,
  nim: _nim2.default
};

var iconNames = exports.iconNames = (0, _keys2.default)(icons);

var CurrencyIcon = function CurrencyIcon(_ref) {
  var className = _ref.className,
      style = _ref.style,
      name = _ref.name;

  var isIconExist = iconNames.includes(name.toLowerCase());

  if (isIconExist) {
    return _react2.default.createElement('img', {
      className: className,
      src: icons[name],
      alt: name + ' icon',
      role: 'image'
    });
  }

  return _react2.default.createElement(
    'span',
    {
      role: 'letter',
      styleName: 'text',
      className: className,
      style: style
    },
    name.charAt(0).toUpperCase()
  );
};

exports.default = (0, _reactCssModules2.default)(CurrencyIcon, _CurrencyIcon2.default);

/***/ }),
/* 487 */,
/* 488 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _CurrencySelect = __webpack_require__(1160);

var _CurrencySelect2 = _interopRequireDefault(_CurrencySelect);

var _Option = __webpack_require__(1161);

var _Option2 = _interopRequireDefault(_Option);

var _DropDown = __webpack_require__(1163);

var _DropDown2 = _interopRequireDefault(_DropDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CurrencySelect = function CurrencySelect(_ref) {
  var className = _ref.className,
      selectedValue = _ref.selectedValue,
      onSelect = _ref.onSelect,
      currencies = _ref.currencies;
  return _react2.default.createElement(_DropDown2.default, {
    className: className,
    items: currencies,
    selectedValue: selectedValue,
    selectedItemRender: function selectedItemRender(item) {
      return _react2.default.createElement(_Option2.default, item);
    },
    itemRender: function itemRender(item) {
      return _react2.default.createElement(_Option2.default, item);
    },
    onSelect: onSelect
  });
};

exports.default = (0, _reactCssModules2.default)(CurrencySelect, _CurrencySelect2.default);

/***/ }),
/* 489 */,
/* 490 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(51);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(48);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _autosize = __webpack_require__(1194);

var _autosize2 = _interopRequireDefault(_autosize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UPDATE = 'autosize:update';
var DESTROY = 'autosize:destroy';
var RESIZED = 'autosize:resized';

var TextareaAutosize = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(TextareaAutosize, _Component);

  function TextareaAutosize() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TextareaAutosize);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TextareaAutosize.__proto__ || (0, _getPrototypeOf2.default)(TextareaAutosize)).call.apply(_ref, [this].concat(args))), _this), _this.dispatchEvent = function (EVENT_TYPE, defer) {
      var event = document.createEvent('Event');

      event.initEvent(EVENT_TYPE, true, false);

      var dispatch = function dispatch() {
        return _this.textareaEl.dispatchEvent(event);
      };

      if (defer) {
        setTimeout(dispatch);
      } else {
        dispatch();
      }
    }, _this.getValue = function (_ref2) {
      var valueLink = _ref2.valueLink,
          value = _ref2.value;
      return valueLink ? valueLink.value : value;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TextareaAutosize, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _autosize2.default)(this.textareaEl);

      if (this.props.onResize) {
        this.textareaEl.addEventListener(RESIZED, this.props.onResize);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.onResize) {
        this.textareaEl.removeEventListener(RESIZED, this.props.onResize);
      }

      this.dispatchEvent(DESTROY);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.getValue(nextProps) !== this.getValue(this.props)) {
        this.dispatchEvent(UPDATE, true);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          valueLink = _props.valueLink,
          props = (0, _objectWithoutProperties3.default)(_props, ['valueLink']);


      return _react2.default.createElement('textarea', (0, _extends3.default)({
        ref: function ref(el) {
          return _this2.textareaEl = el;
        }
      }, props, {
        value: valueLink.value,
        onChange: valueLink.action(function (x, e) {
          return e.target.value;
        })
      }));
    }
  }]);
  return TextareaAutosize;
}(_react.Component), _class.propTypes = {
  valueLink: _propTypes2.default.object.isRequired,
  onResize: _propTypes2.default.func
}, _class.defaultProps = {
  rows: 1
}, _temp2);
exports.default = TextareaAutosize;

/***/ }),
/* 491 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"history-filter":"r9K_HC","history-filter__item":"xJUwLa","history-filter__item_active":"_2ZTLX3"};

/***/ }),
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _swap = __webpack_require__(17);

var _swap2 = _interopRequireDefault(_swap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var login = function login(_privateKey) {
  var storageKey = _swap2.default.network + ':btc:privateKey';
  var privateKey = _privateKey || _swap2.default.env.storage.getItem(storageKey);
  var account = void 0;

  var network = _swap2.default.isMainNet() ? _swap2.default.env.bitcoin.networks.bitcoin : _swap2.default.env.bitcoin.networks.testnet;

  if (!privateKey) {
    privateKey = _swap2.default.env.bitcoin.ECPair.makeRandom({ network: network }).toWIF();
  }

  account = new _swap2.default.env.bitcoin.ECPair.fromWIF(privateKey, network);

  account.__proto__.getPublicKey = function () {
    return account.getPublicKeyBuffer().toString('hex');
  };
  account.__proto__.getPrivateKey = function () {
    return privateKey;
  };

  if (!_privateKey) {
    _swap2.default.env.storage.setItem(storageKey, privateKey);
  }

  return account;
};

var getPublicData = function getPublicData(account) {
  return {
    address: account.getAddress(),
    publicKey: account.getPublicKey()
  };
};

exports.default = {
  login: login,
  getPublicData: getPublicData
};
module.exports = exports['default'];

/***/ }),
/* 504 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _swap = __webpack_require__(17);

var _swap2 = _interopRequireDefault(_swap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var login = function login(accountNameKey) {
  return accountNameKey;
};
var getPublicData = function getPublicData(accountNameKey) {
  return {
    address: window.localStorage.getItem(accountNameKey)
  };
};

exports.default = {
  login: login,
  getPublicData: getPublicData
};
module.exports = exports['default'];

/***/ }),
/* 505 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _swap = __webpack_require__(17);

var _swap2 = _interopRequireDefault(_swap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var login = function login(_privateKey) {
  var storageKey = _swap2.default.network + ':eth:privateKey';
  var privateKey = _privateKey || _swap2.default.env.storage.getItem(storageKey);
  var account = void 0;

  if (privateKey) {
    account = _swap2.default.env.web3.eth.accounts.privateKeyToAccount(privateKey);
  } else {
    account = _swap2.default.env.web3.eth.accounts.create();
  }

  _swap2.default.env.web3.eth.accounts.wallet.add(account.privateKey);

  if (!_privateKey) {
    _swap2.default.env.storage.setItem(storageKey, account.privateKey);
  }

  return account;
};

var getPublicData = function getPublicData(account) {
  return {
    address: account.address,
    publicKey: null
  };
};

exports.default = {
  login: login,
  getPublicData: getPublicData
};
module.exports = exports['default'];

/***/ }),
/* 506 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SwapRoom = __webpack_require__(1275);

var _SwapRoom2 = _interopRequireDefault(_SwapRoom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SwapRoom2.default;
module.exports = exports['default'];

/***/ }),
/* 507 */,
/* 508 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _swap = __webpack_require__(17);

exports.default = new _swap.Events();
module.exports = exports['default'];

/***/ }),
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "71af1b68ea0f662eb88996ea7a25bf8a.mp4";

/***/ }),
/* 527 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redaction = __webpack_require__(14);

var _reactRouter = __webpack_require__(71);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _controls = __webpack_require__(67);

var _actions = __webpack_require__(13);

var _actions2 = _interopRequireDefault(_actions);

var _helpers = __webpack_require__(11);

var _reactRouterDom = __webpack_require__(32);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _UserTooltip = __webpack_require__(1398);

var _UserTooltip2 = _interopRequireDefault(_UserTooltip);

var _arrowRight = __webpack_require__(1399);

var _arrowRight2 = _interopRequireDefault(_arrowRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserTooltip = (_dec = (0, _redaction.connect)({
  feeds: 'feeds.items',
  peer: 'ipfs.peer'
}), _dec2 = (0, _reactCssModules2.default)(_UserTooltip2.default), (0, _reactRouter.withRouter)(_class = _dec(_class = _dec2(_class = (_temp2 = _class2 = function (_Component) {
  (0, _inherits3.default)(UserTooltip, _Component);

  function UserTooltip() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, UserTooltip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = UserTooltip.__proto__ || (0, _getPrototypeOf2.default)(UserTooltip)).call.apply(_ref, [this].concat(args))), _this), _this.declineRequest = function (orderId, participantPeer) {
      _actions2.default.core.declineRequest(orderId, participantPeer);
      _actions2.default.core.updateCore();
    }, _this.acceptRequest = function (orderId, participantPeer) {
      var toggle = _this.props.toggle;


      _actions2.default.core.acceptRequest(orderId, participantPeer);
      _actions2.default.core.updateCore();
      !!toggle && toggle();
    }, _this.autoAcceptRequest = function (orderId, participantPeer, link) {
      _this.acceptRequest(orderId, participantPeer);
      _this.props.history.push(link);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(UserTooltip, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          feeds = _props.feeds,
          mePeer = _props.peer;


      return !!feeds.length && _react2.default.createElement(
        'div',
        { styleName: 'column' },
        feeds.length < 3 ? feeds.map(function (row) {
          var request = row.request,
              _row$content = row.content,
              buyAmount = _row$content.buyAmount,
              buyCurrency = _row$content.buyCurrency,
              sellAmount = _row$content.sellAmount,
              sellCurrency = _row$content.sellCurrency,
              id = row.id,
              ownerPeer = row.peer;


          return mePeer === ownerPeer && request.map(function (_ref2) {
            var peer = _ref2.peer,
                reputation = _ref2.reputation;
            return _react2.default.createElement(
              'div',
              { styleName: 'userTooltip' },
              _react2.default.createElement(
                'div',
                { key: peer },
                _react2.default.createElement(
                  'div',
                  { styleName: 'title' },
                  'User with ',
                  _react2.default.createElement(
                    'b',
                    null,
                    reputation
                  ),
                  ' reputation wants to swap'
                ),
                _react2.default.createElement(
                  'div',
                  { styleName: 'currency' },
                  _react2.default.createElement(
                    'span',
                    null,
                    buyAmount.toFixed(5),
                    ' ',
                    _react2.default.createElement(
                      'span',
                      { styleName: 'coin' },
                      buyCurrency
                    )
                  ),
                  _react2.default.createElement(
                    'span',
                    { styleName: 'arrow' },
                    _react2.default.createElement('img', { src: _arrowRight2.default, alt: '' })
                  ),
                  _react2.default.createElement(
                    'span',
                    null,
                    sellAmount.toFixed(5),
                    ' ',
                    _react2.default.createElement(
                      'span',
                      { styleName: 'coin' },
                      sellCurrency
                    )
                  )
                )
              ),
              _react2.default.createElement('span', { styleName: 'decline', onClick: function onClick() {
                  return _this2.declineRequest(id, peer);
                } }),
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: _helpers.links.swap + '/' + sellCurrency + '-' + buyCurrency + '/' + id },
                _react2.default.createElement('div', { styleName: 'checked', onClick: function onClick() {
                    return _this2.acceptRequest(id, peer);
                  } })
              ),
              _react2.default.createElement(_controls.TimerButton, { isButton: false, onClick: function onClick() {
                  return _this2.autoAcceptRequest(id, peer, _helpers.links.swap + '/' + sellCurrency + '-' + buyCurrency + '/' + id);
                } })
            );
          });
        }) : _react2.default.createElement(
          'div',
          { styleName: 'feed' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: _helpers.links.feed },
            ' Go to the feed page'
          )
        )
      );
    }
  }]);
  return UserTooltip;
}(_react.Component), _class2.propTypes = {
  toggle: _propTypes2.default.func
}, _temp2)) || _class) || _class) || _class);
exports.default = UserTooltip;

/***/ }),
/* 528 */,
/* 529 */,
/* 530 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(51);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(48);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(59);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _CloseIcon = __webpack_require__(1425);

var _CloseIcon2 = _interopRequireDefault(_CloseIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CloseIcon = function CloseIcon(_ref) {
  var whiteColor = _ref.whiteColor,
      brandColor = _ref.brandColor,
      rest = (0, _objectWithoutProperties3.default)(_ref, ['whiteColor', 'brandColor']);

  var styleName = (0, _classnames2.default)('button', {
    'whiteColor': whiteColor,
    'brandColor': brandColor
  });

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ styleName: styleName }, rest, { role: 'closeButton' }),
    _react2.default.createElement('div', { styleName: 'icon', role: 'closeIcon' })
  );
};

CloseIcon.propTypes = {
  whiteColor: _propTypes2.default.bool,
  brandColor: _propTypes2.default.bool
};

exports.default = (0, _reactCssModules2.default)(CloseIcon, _CloseIcon2.default, { allowMultiple: true });

/***/ }),
/* 531 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _keys = __webpack_require__(62);

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redaction = __webpack_require__(14);

var _helpers = __webpack_require__(11);

var _modals = __webpack_require__(1426);

var _modals2 = _interopRequireDefault(_modals);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _ModalConductor = __webpack_require__(1471);

var _ModalConductor2 = _interopRequireDefault(_ModalConductor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalConductor = (_dec = (0, _redaction.connect)({
  modals: 'modals'
}), _dec2 = (0, _reactCssModules2.default)(_ModalConductor2.default), _dec(_class = _dec2(_class = (_temp2 = _class2 = function (_Component) {
  (0, _inherits3.default)(ModalConductor, _Component);

  function ModalConductor() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ModalConductor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ModalConductor.__proto__ || (0, _getPrototypeOf2.default)(ModalConductor)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      offsetTop: 0
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ModalConductor, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref2) {
      var modals = _ref2.modals;
      var offsetTop = this.state.offsetTop;


      var myOffsetTop = (0, _helpers.getPageOffset)().y;

      // When modal is showing add overflow: hidden to body and padding-right: ${scrollWidth}
      // to prevent screen from blinking
      if ((0, _keys2.default)(modals).length) {
        document.body.classList.add('withOpenedModal');
        document.body.style.paddingRight = (0, _helpers.getScrollBarWidth)() + 'px';

        if (myOffsetTop > 0) {
          this.setState({
            offsetTop: myOffsetTop
          });
        }
      } else {
        document.body.classList.remove('withOpenedModal');
        document.body.style.paddingRight = '0px';

        if (offsetTop > 0) {
          window.scrollTo(0, offsetTop);

          this.setState({
            offsetTop: 0
          });
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var modals = this.props.modals;


      var modalNames = (0, _keys2.default)(modals);
      var areModalsExist = Boolean(modalNames.length);

      return areModalsExist && _react2.default.createElement(
        'div',
        { styleName: 'modalConductor' },
        modalNames.map(function (key) {
          var _modals$key = modals[key],
              name = _modals$key.name,
              _modals$key$data = _modals$key.data,
              data = _modals$key$data === undefined ? {} : _modals$key$data,
              zIndex = _modals$key.zIndex;


          return _react2.default.createElement(_modals2.default[name], {
            key: name,
            name: name,
            data: data,
            style: { zIndex: zIndex }
          });
        })
      );
    }
  }]);
  return ModalConductor;
}(_react.Component), _class2.propTypes = {
  modals: _propTypes2.default.object
}, _temp2)) || _class) || _class);
exports.default = ModalConductor;

/***/ }),
/* 532 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Overlay = __webpack_require__(1430);

var _Overlay2 = _interopRequireDefault(_Overlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Overlay = function Overlay(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick;
  return _react2.default.createElement(
    'div',
    { styleName: 'overlay', onClick: onClick },
    children
  );
};

Overlay.propTypes = {
  children: _propTypes2.default.node,
  onClick: _propTypes2.default.func
};

exports.default = (0, _reactCssModules2.default)(Overlay, _Overlay2.default);

/***/ }),
/* 533 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(51);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(48);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(59);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Center = __webpack_require__(1431);

var _Center2 = _interopRequireDefault(_Center);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Center = function Center(_ref) {
  var children = _ref.children,
      scrollable = _ref.scrollable,
      rest = (0, _objectWithoutProperties3.default)(_ref, ['children', 'scrollable']);

  // TODO move overflow to Modal and any other cases where it belongs
  var styleName = (0, _classnames2.default)('centringContainer', {
    'scrollable': scrollable
  });

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ styleName: styleName }, rest),
    _react2.default.createElement(
      'div',
      { styleName: 'centringContent' },
      children
    )
  );
};

Center.propTypes = {
  children: _propTypes2.default.node,
  scrollable: _propTypes2.default.bool
};

Center.defaultProps = {
  scrollable: false
};

exports.default = (0, _reactCssModules2.default)(Center, _Center2.default, { allowMultiple: true });

/***/ }),
/* 534 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Group = __webpack_require__(1447);

var _Group2 = _interopRequireDefault(_Group);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Input = __webpack_require__(218);

var _Input2 = _interopRequireDefault(_Input);

var _FieldLabel = __webpack_require__(217);

var _FieldLabel2 = _interopRequireDefault(_FieldLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Group = function Group(_ref) {
  var className = _ref.className,
      label = _ref.label,
      id = _ref.id,
      inputValueLink = _ref.inputValueLink,
      _ref$isInteger = _ref.isInteger,
      isInteger = _ref$isInteger === undefined ? false : _ref$isInteger,
      placeholder = _ref.placeholder,
      children = _ref.children;
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      _FieldLabel2.default,
      { inRow: true },
      label
    ),
    _react2.default.createElement(
      'div',
      { styleName: 'groupField', className: className },
      _react2.default.createElement(_Input2.default, {
        styleName: 'inputRoot',
        inputContainerClassName: 'inputContainer',
        valueLink: inputValueLink,
        pattern: isInteger ? '0-9' : '0-9.',
        id: id,
        placeholder: placeholder
      }),
      children
    )
  );
};

exports.default = (0, _reactCssModules2.default)(Group, _Group2.default);

/***/ }),
/* 535 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(59);

var _classnames2 = _interopRequireDefault(_classnames);

var _actions = __webpack_require__(13);

var _actions2 = _interopRequireDefault(_actions);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Notification = __webpack_require__(1476);

var _Notification2 = _interopRequireDefault(_Notification);

var _Sound = __webpack_require__(526);

var _Sound2 = _interopRequireDefault(_Sound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Notification = (_dec = (0, _reactCssModules2.default)(_Notification2.default, { allowMultiple: true }), _dec(_class = (_temp2 = _class2 = function (_Component) {
  (0, _inherits3.default)(Notification, _Component);

  function Notification() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Notification);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Notification.__proto__ || (0, _getPrototypeOf2.default)(Notification)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      mounted: false,
      removed: false
    }, _this.close = function () {
      var name = _this.props.name;


      _this.setState({
        removed: true
      }, function () {
        setTimeout(function () {
          _actions2.default.notifications.hide(name);
        }, 300);
      });
    }, _this.soundClick = function () {
      var audio = new Audio();
      audio.src = _Sound2.default;
      audio.autoplay = true;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Notification, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.soundClick();
      setTimeout(function () {
        _this2.setState({
          mounted: true
        }, function () {
          setTimeout(_this2.close, 4000);
        });
      }, 0);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          mounted = _state.mounted,
          removed = _state.removed;
      var _props = this.props,
          children = _props.children,
          type = _props.type;


      var containerStyleName = (0, _classnames2.default)('container', {
        'mounted': mounted,
        'removed': removed
      });

      var notificationStyleName = (0, _classnames2.default)('notification', {
        'mounted': mounted,
        'removed': removed,
        'info': type === 'info',
        'success': type === 'success',
        'warning': type === 'warning',
        'error': type === 'error'
      });

      return _react2.default.createElement(
        'div',
        { styleName: containerStyleName },
        _react2.default.createElement(
          'div',
          { styleName: notificationStyleName, onClick: this.close },
          _react2.default.createElement(
            'div',
            { styleName: 'content' },
            children
          )
        )
      );
    }
  }]);
  return Notification;
}(_react.Component), _class2.childContextTypes = {
  close: _propTypes2.default.func
}, _temp2)) || _class);
exports.default = Notification;

/***/ }),
/* 536 */,
/* 537 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var seo = {
  config: {
    medium: 'https://medium.com/@swaponline',
    twitter: 'https://twitter.com/SwapOnlineTeam',
    facebook: 'https://www.facebook.com/SwapOnlineTeam',
    telegram: 'https://t.me/swaponlineint',
    email: 'info@swap.online',
    mainUrl: 'https://swap.online',
    logo: 'https://wiki.swap.online/assets/swap-logo.png'
  },
  pages: [{
    uri: '/',
    title: 'Swap.Online - Cryptocurrency Wallet with Atomic Swap Exchange',
    description: 'Atomic swap algorithms will help you to exchange cryptocurrencies instantly in a more secure way exluding third-parties. Decentralized exchange.'
  }, {
    uri: '/exchange',
    title: 'Exchange',
    description: 'Exchange'
  }, {
    uri: '/exchange/btc',
    title: 'Bitcoin',
    description: 'Bitcoin',
    h1: 'Bitcoin Trade'
  }, {
    uri: '/exchange/eth',
    title: 'Ethereum',
    description: 'Ethereum',
    h1: 'Ethereum Trade'
  }, {
    uri: '/exchange/swap',
    title: 'Swap',
    description: 'Swap',
    h1: 'Swap Trade'
  }, {
    uri: '/exchange/noxon',
    title: 'Noxon',
    description: 'Noxon',
    h1: 'Noxon Trade'
  }, {
    uri: '/exchange/jot',
    title: 'Jot',
    description: 'Jot',
    h1: 'Jot Trade'
  }, {
    uri: '/history',
    title: 'History',
    description: 'History'
  }, {
    uri: '/affiliate',
    title: 'Affiliate',
    description: 'Affiliate'
  }, {
    uri: '/listing',
    title: 'Listing',
    description: 'Listing'
  }, {
    uri: '/swap',
    title: 'Swap',
    description: 'Swap'
  }, {
    uri: '/feed',
    title: 'Feed',
    description: 'Feed'
  }, {
    uri: '/eth-btc',
    title: 'Atomic Swap Ethereum (ETH) to Bitcoin (BTC) Decentralized Exchange',
    desctption: 'Best exchange rate for Ethereum (ETH) to Bitcoin (BTC) atomic swap. Decentralized exchange of digital currencies with online wallet.',
    h1: 'Atomic Swap Ethereum (ETH) to Bitcoin (BTC) - Instant Exchange'
  }, {
    uri: '/btc-eth',
    title: 'Atomic Swap Bitcoin (BTC) to Ethereum (ETH) Cross-Chain Exchange',
    desctption: 'Looking for best exchange rate to buy Ethereum (ETH) with Bitcoin (BTC)? Place your order on Swap.online to get the best rate.',
    h1: 'Atomic Swap Bitcoin (BTC) to Ethereum (ETH) - Decentralized Exchange'
  }, {
    uri: '/eos-btc',
    title: 'Atomic Swap EOS to Bitcoin (BTC) Instant Exchange',
    desctption: 'How to exchange EOS to BTC instantly and safely? Use Swap.Online service to exchange coins with atomic swap algorithm. ',
    h1: 'Best Exchange Rate EOS to Bitcoin (BTC) - Atomic Swap'
  }, {
    uri: '/btc-eos',
    title: 'Atomic Swap Bitcoin (BTC) to EOS Instant Exchange',
    desctption: 'Atomic Swap Bitcoin (BTC) to EOS is the best way of exchanging cryptocurrencies decenralized. Swap.Online - Multi Currency Wallet.',
    h1: 'Best Exchange Rate Bitcoin (BTC) to EOS - Atomic Swap'
  }]
};

var getSeoPage = exports.getSeoPage = function getSeoPage(uri) {
  return seo.pages.find(function (p) {
    return p.uri === uri;
  });
};

var getUrl = exports.getUrl = function getUrl(uri) {
  return '' + seo.config.mainUrl + uri;
};

exports.default = seo;

/***/ }),
/* 538 */,
/* 539 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(322);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _routes = __webpack_require__(548);

var _routes2 = _interopRequireDefault(_routes);

var _store = __webpack_require__(241);

var _store2 = _interopRequireDefault(_store);

var _Root = __webpack_require__(1219);

var _Root2 = _interopRequireDefault(_Root);

var _Loader = __webpack_require__(312);

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_Loader2.default, null), document.getElementById('root'));

var ipfsRoom = window.document.getElementById('ipfsRoom');

setInterval(ipfsRoom.onload = function () {
  _reactDom2.default.render(_react2.default.createElement(_Root2.default, { history: _store.history, store: _store2.default, routes: _routes2.default }), document.getElementById('root'));
}, 500);

/***/ }),
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(71);

var _reactRouterDom = __webpack_require__(32);

var _helpers = __webpack_require__(11);

var _Swap = __webpack_require__(877);

var _Swap2 = _interopRequireDefault(_Swap);

var _Home = __webpack_require__(1129);

var _Home2 = _interopRequireDefault(_Home);

var _Wallet = __webpack_require__(1166);

var _Wallet2 = _interopRequireDefault(_Wallet);

var _Listing = __webpack_require__(1180);

var _Listing2 = _interopRequireDefault(_Listing);

var _History = __webpack_require__(1195);

var _History2 = _interopRequireDefault(_History);

var _NotFound = __webpack_require__(1211);

var _NotFound2 = _interopRequireDefault(_NotFound);

var _Affiliate = __webpack_require__(1212);

var _Affiliate2 = _interopRequireDefault(_Affiliate);

var _Currency = __webpack_require__(1213);

var _Currency2 = _interopRequireDefault(_Currency);

var _AllCoins = __webpack_require__(1216);

var _AllCoins2 = _interopRequireDefault(_AllCoins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = _react2.default.createElement(
  _reactRouterDom.Switch,
  null,
  _react2.default.createElement(_reactRouter.Route, { path: _helpers.links.swap + '/:buy-:sell/:orderId', component: _Swap2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: _helpers.links.home + ':buy-:sell/:orderId', component: _Home2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: _helpers.links.home + ':buy-:sell', component: _Home2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: _helpers.links.exchange, component: _Home2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: _helpers.links.affiliate, component: _Affiliate2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: _helpers.links.listing, component: _Listing2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: _helpers.links.history, component: _History2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: _helpers.links.coins, component: _AllCoins2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: _helpers.links.home + ':currency', component: _Currency2.default }),
  _react2.default.createElement(_reactRouter.Route, { exact: true, path: _helpers.links.home, component: _Wallet2.default }),
  _react2.default.createElement(_reactRouter.Route, { component: _NotFound2.default })
);

exports.default = routes;

/***/ }),
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */,
/* 576 */,
/* 577 */,
/* 578 */,
/* 579 */,
/* 580 */,
/* 581 */,
/* 582 */,
/* 583 */,
/* 584 */,
/* 585 */,
/* 586 */,
/* 587 */,
/* 588 */,
/* 589 */,
/* 590 */,
/* 591 */,
/* 592 */,
/* 593 */,
/* 594 */,
/* 595 */,
/* 596 */,
/* 597 */,
/* 598 */,
/* 599 */,
/* 600 */,
/* 601 */,
/* 602 */,
/* 603 */,
/* 604 */,
/* 605 */,
/* 606 */,
/* 607 */,
/* 608 */,
/* 609 */,
/* 610 */,
/* 611 */,
/* 612 */,
/* 613 */,
/* 614 */,
/* 615 */,
/* 616 */,
/* 617 */,
/* 618 */,
/* 619 */,
/* 620 */,
/* 621 */,
/* 622 */,
/* 623 */,
/* 624 */,
/* 625 */,
/* 626 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hide = exports.show = exports.initialState = undefined;

var _objectWithoutProperties2 = __webpack_require__(48);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _defineProperty2 = __webpack_require__(142);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = exports.initialState = {};

var show = exports.show = function show(state, _ref) {
  var name = _ref.name,
      _ref$data = _ref.data,
      data = _ref$data === undefined ? {} : _ref$data;
  return (0, _assign2.default)({}, state, (0, _defineProperty3.default)({}, name, {
    name: name,
    data: data
  }));
};

var hide = function hide(state, name) {
  var closingNotification = state[name],
      otherNotifications = (0, _objectWithoutProperties3.default)(state, [name]);

  return otherNotifications;
};
exports.hide = hide;

/***/ }),
/* 627 */,
/* 628 */,
/* 629 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.close = exports.open = exports.initialState = undefined;

var _objectWithoutProperties2 = __webpack_require__(48);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _defineProperty2 = __webpack_require__(142);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this is necessary to arrange the modals in the opening order, not alphabetical
var zIndex = 305;

var initialState = exports.initialState = {};

var open = exports.open = function open(state, _ref) {
  var name = _ref.name,
      _ref$data = _ref.data,
      data = _ref$data === undefined ? {} : _ref$data;
  return (0, _assign2.default)({}, state, (0, _defineProperty3.default)({}, name, {
    name: name,
    data: data,
    zIndex: ++zIndex
  }));
};

var close = function close(state, name) {
  var closingModal = state[name],
      otherModals = (0, _objectWithoutProperties3.default)(state, [name]);


  zIndex -= 1;

  return otherModals;
};
exports.close = close;

/***/ }),
/* 630 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setSwapHistory = exports.setTransactions = exports.setFilter = exports.initialState = undefined;

var _toConsumableArray2 = __webpack_require__(82);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = exports.initialState = {
  transactions: [],
  filter: 'all',
  swapHistory: {}
};

var setFilter = exports.setFilter = function setFilter(state, payload) {
  return (0, _assign2.default)({}, state, {
    filter: payload
  });
};

var setTransactions = exports.setTransactions = function setTransactions(state, payload) {
  return (0, _assign2.default)({}, state, {
    transactions: [].concat((0, _toConsumableArray3.default)(payload))
  });
};

var setSwapHistory = exports.setSwapHistory = function setSwapHistory(state, payload) {
  return (0, _assign2.default)({}, state, {
    swapHistory: {
      payload: payload
    }
  });
};

/***/ }),
/* 631 */,
/* 632 */,
/* 633 */,
/* 634 */,
/* 635 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setVisibility = exports.initialState = undefined;

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = exports.initialState = {
  isVisible: false,
  text: false,
  txId: null,
  swap: false,
  data: null
};

var setVisibility = exports.setVisibility = function setVisibility(state, payload) {
  return (0, _assign2.default)({}, state, {
    isVisible: payload.isVisible,
    text: payload.text,
    txId: payload.txId,
    swap: payload.swap,
    data: payload.data
  });
};

/***/ }),
/* 636 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTokenApprove = exports.setTokenBalance = exports.setBalance = exports.setTokenAuthData = exports.setAuthData = exports.initialState = undefined;

var _defineProperty2 = __webpack_require__(142);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = exports.initialState = {
  ethData: {
    balance: 0,
    isBalanceFetched: false,
    currency: 'ETH',
    fullName: 'Ethereum'
  },
  btcData: {
    balance: 0,
    isBalanceFetched: false,
    currency: 'BTC',
    fullName: 'Bitcoin'
  },
  usdtData: {
    address: '0x0',
    publicKey: '0x0',
    balance: 0,
    isBalanceFetched: false,
    currency: 'USDT'
  },
  nimData: {
    balance: 0,
    isBalanceFetched: false,
    currency: 'NIM',
    fullName: 'Nimiq'
  },
  eosData: {
    balance: 0,
    address: '',
    isBalanceFetched: true,
    currency: 'EOS',
    fullName: 'Eos'
  },
  tokensData: {}
};

var setAuthData = exports.setAuthData = function setAuthData(state, _ref) {
  var name = _ref.name,
      data = _ref.data;
  return (0, _assign2.default)({}, state, (0, _defineProperty3.default)({
    tokensData: (0, _assign2.default)({}, state.tokensData)
  }, name, (0, _assign2.default)({}, state[name], data)));
};

var setTokenAuthData = exports.setTokenAuthData = function setTokenAuthData(state, _ref2) {
  var name = _ref2.name,
      data = _ref2.data;
  return (0, _assign2.default)({}, state, {
    tokensData: (0, _assign2.default)({}, state.tokensData, (0, _defineProperty3.default)({}, name, (0, _assign2.default)({}, state[name], data)))
  });
};

var setBalance = exports.setBalance = function setBalance(state, _ref3) {
  var name = _ref3.name,
      amount = _ref3.amount,
      unconfirmedBalance = _ref3.unconfirmedBalance;
  return (0, _assign2.default)({}, state, (0, _defineProperty3.default)({
    tokensData: (0, _assign2.default)({}, state.tokensData)
  }, name, (0, _assign2.default)({}, state[name], {
    balance: Number(amount),
    unconfirmedBalance: unconfirmedBalance,
    isBalanceFetched: true
  })));
};

var setTokenBalance = exports.setTokenBalance = function setTokenBalance(state, _ref4) {
  var name = _ref4.name,
      amount = _ref4.amount;
  return (0, _assign2.default)({}, state, {
    tokensData: (0, _assign2.default)({}, state.tokensData, (0, _defineProperty3.default)({}, name, (0, _assign2.default)({}, state.tokensData[name], {
      balance: Number(amount),
      isBalanceFetched: true
    })))
  });
};

var setTokenApprove = exports.setTokenApprove = function setTokenApprove(state, _ref5) {
  var name = _ref5.name,
      approve = _ref5.approve;
  return (0, _assign2.default)({}, state, {
    tokensData: (0, _assign2.default)({}, state.tokensData, (0, _defineProperty3.default)({}, name, (0, _assign2.default)({}, state.tokensData[name], {
      approve: approve
    })))
  });
};

/***/ }),
/* 637 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteItems = exports.addItems = exports.initialState = undefined;

var _toConsumableArray2 = __webpack_require__(82);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = exports.initialState = {
  items: []
};

var addItems = exports.addItems = function addItems(state, payload) {
  return (0, _assign2.default)({}, state, {
    items: [].concat((0, _toConsumableArray3.default)(payload))
  });
};

var deleteItems = exports.deleteItems = function deleteItems(state, payload) {
  return (0, _assign2.default)({}, state, {
    items: payload
  });
};

/***/ }),
/* 638 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.markCoinAsVisible = exports.markCoinAsHidden = exports.setFilter = exports.getOrders = exports.initialState = undefined;

var _toConsumableArray2 = __webpack_require__(82);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = exports.initialState = {
  orders: [],
  filter: 'btc-swap',
  hiddenCoinsList: JSON.parse(localStorage.getItem('hiddenCoinsList')) || []
};

var getOrders = exports.getOrders = function getOrders(state, _ref) {
  var orders = _ref.orders;
  return (0, _assign2.default)({}, state, {
    orders: orders
  });
};

var setFilter = exports.setFilter = function setFilter(state, _ref2) {
  var filter = _ref2.filter;
  return (0, _assign2.default)({}, state, {
    orders: [].concat((0, _toConsumableArray3.default)(state.orders)),
    filter: filter
  });
};

var markCoinAsHidden = exports.markCoinAsHidden = function markCoinAsHidden(state, coin) {
  return (0, _assign2.default)({}, state, {
    hiddenCoinsList: [].concat((0, _toConsumableArray3.default)(state.hiddenCoinsList), [coin])
  });
};
var markCoinAsVisible = exports.markCoinAsVisible = function markCoinAsVisible(state, coin) {
  return (0, _assign2.default)({}, state, {
    hiddenCoinsList: state.hiddenCoinsList.filter(function (c) {
      return c !== coin;
    })
  });
};

/***/ }),
/* 639 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userLeft = exports.userJoined = exports.set = exports.initialState = undefined;

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = exports.initialState = {
  isOnline: false,
  onlineUsers: 0,
  server: null,
  peer: ''
};

var set = exports.set = function set(state, payload) {
  return (0, _assign2.default)({}, state, payload);
};

/**
 * Событие "Пользователь вошел в сеть".
 */
var userJoined = exports.userJoined = function userJoined(state) {
  return (0, _assign2.default)({}, state, {
    onlineUsers: state.onlineUsers + 1
  });
};

/**
 * Событие "Пользователь вышел из сети".
 */
var userLeft = exports.userLeft = function userLeft(state) {
  return (0, _assign2.default)({}, state, {
    onlineUsers: state.onlineUsers - 1
  });
};

/***/ }),
/* 640 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setApiServer = exports.setErrors = exports.setChecked = exports.initialState = undefined;

var _defineProperty2 = __webpack_require__(142);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

var _appConfig = __webpack_require__(21);

var _appConfig2 = _interopRequireDefault(_appConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = exports.initialState = {
  servers: _appConfig2.default.api,
  checked: false,
  errors: null
};

var setChecked = exports.setChecked = function setChecked(state, checked) {
  return (0, _assign2.default)({}, state, {
    checked: checked
  });
};

var setErrors = exports.setErrors = function setErrors(state, errors) {
  return (0, _assign2.default)({}, state, {
    errors: errors,
    checked: true
  });
};

var setApiServer = exports.setApiServer = function setApiServer(state, _ref) {
  var provider = _ref.provider,
      server = _ref.server;
  return (0, _assign2.default)({}, state, {
    servers: (0, _assign2.default)({}, state.servers, (0, _defineProperty3.default)({}, provider, server))
  });
};

/***/ }),
/* 641 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var initialState = exports.initialState = {
  items: [{
    name: 'EOS',
    title: 'EOS',
    icon: 'eos',
    value: 'eos',
    fullTitle: 'EOS'
  }, {
    name: 'ETH',
    title: 'ETH',
    icon: 'eth',
    value: 'eth',
    fullTitle: 'ethereum'
  }, {
    name: 'BTC',
    title: 'BTC',
    icon: 'btc',
    value: 'btc',
    fullTitle: 'bitcoin'
  },
  // {
  //   name: 'USDT',
  //   title: 'USDT',
  //   icon: 'usdt',
  //   value: 'usdt',
  // },
  {
    name: 'NOXON',
    title: 'NOXON',
    icon: 'noxon',
    value: 'noxon',
    fullTitle: 'noxon'
  }, {
    name: 'SWAP',
    title: 'SWAP',
    icon: 'swap',
    value: 'swap',
    fullTitle: 'swap'
  }, {
    name: 'JOT',
    title: 'JOT',
    icon: 'jot',
    value: 'jot',
    fullTitle: 'jot'
  }]
};

/***/ }),
/* 642 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = undefined;

var _links = __webpack_require__(186);

var _links2 = _interopRequireDefault(_links);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = exports.initialState = {
  items: [{
    title: 'Wallet',
    link: _links2.default.home,
    exact: true,
    icon: 'wallet'
  }, {
    title: 'Exchange',
    link: _links2.default.exchange,
    icon: 'exchange-alt'
  }, {
    title: 'History',
    link: _links2.default.history,
    icon: 'history'
  }, {
    title: 'Affiliate',
    link: _links2.default.affiliate,
    isMobile: false
  }, {
    title: 'Listing',
    link: _links2.default.listing,
    isMobile: false
  }]
};

/***/ }),
/* 643 */,
/* 644 */,
/* 645 */,
/* 646 */,
/* 647 */,
/* 648 */,
/* 649 */,
/* 650 */,
/* 651 */,
/* 652 */,
/* 653 */,
/* 654 */,
/* 655 */,
/* 656 */,
/* 657 */,
/* 658 */,
/* 659 */,
/* 660 */,
/* 661 */,
/* 662 */,
/* 663 */,
/* 664 */,
/* 665 */,
/* 666 */,
/* 667 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 668 */,
/* 669 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 670 */,
/* 671 */,
/* 672 */,
/* 673 */,
/* 674 */,
/* 675 */,
/* 676 */,
/* 677 */,
/* 678 */,
/* 679 */,
/* 680 */,
/* 681 */,
/* 682 */,
/* 683 */,
/* 684 */,
/* 685 */,
/* 686 */,
/* 687 */,
/* 688 */,
/* 689 */,
/* 690 */,
/* 691 */,
/* 692 */,
/* 693 */,
/* 694 */,
/* 695 */,
/* 696 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 697 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bitcoinjsLib = __webpack_require__(149);

var _bitcoinjsLib2 = _interopRequireDefault(_bitcoinjsLib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var network =  true ? _bitcoinjsLib2.default.networks.bitcoin : _bitcoinjsLib2.default.networks.testnet;

exports.default = {
  network: network
};

/***/ }),
/* 698 */,
/* 699 */,
/* 700 */,
/* 701 */,
/* 702 */,
/* 703 */,
/* 704 */,
/* 705 */,
/* 706 */,
/* 707 */,
/* 708 */,
/* 709 */,
/* 710 */,
/* 711 */,
/* 712 */,
/* 713 */,
/* 714 */,
/* 715 */,
/* 716 */,
/* 717 */,
/* 718 */,
/* 719 */,
/* 720 */,
/* 721 */,
/* 722 */,
/* 723 */,
/* 724 */,
/* 725 */,
/* 726 */,
/* 727 */,
/* 728 */,
/* 729 */,
/* 730 */,
/* 731 */,
/* 732 */,
/* 733 */,
/* 734 */,
/* 735 */,
/* 736 */,
/* 737 */,
/* 738 */,
/* 739 */,
/* 740 */,
/* 741 */,
/* 742 */,
/* 743 */,
/* 744 */,
/* 745 */,
/* 746 */,
/* 747 */,
/* 748 */,
/* 749 */,
/* 750 */,
/* 751 */,
/* 752 */,
/* 753 */,
/* 754 */,
/* 755 */,
/* 756 */,
/* 757 */,
/* 758 */,
/* 759 */,
/* 760 */,
/* 761 */,
/* 762 */,
/* 763 */,
/* 764 */,
/* 765 */,
/* 766 */,
/* 767 */,
/* 768 */,
/* 769 */,
/* 770 */,
/* 771 */,
/* 772 */,
/* 773 */,
/* 774 */,
/* 775 */,
/* 776 */,
/* 777 */,
/* 778 */,
/* 779 */,
/* 780 */,
/* 781 */,
/* 782 */,
/* 783 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 784 */,
/* 785 */,
/* 786 */,
/* 787 */,
/* 788 */,
/* 789 */,
/* 790 */,
/* 791 */,
/* 792 */,
/* 793 */,
/* 794 */,
/* 795 */,
/* 796 */,
/* 797 */,
/* 798 */,
/* 799 */,
/* 800 */,
/* 801 */,
/* 802 */,
/* 803 */,
/* 804 */,
/* 805 */,
/* 806 */,
/* 807 */,
/* 808 */,
/* 809 */,
/* 810 */,
/* 811 */,
/* 812 */,
/* 813 */,
/* 814 */,
/* 815 */,
/* 816 */,
/* 817 */,
/* 818 */,
/* 819 */,
/* 820 */,
/* 821 */,
/* 822 */,
/* 823 */,
/* 824 */,
/* 825 */,
/* 826 */,
/* 827 */,
/* 828 */,
/* 829 */,
/* 830 */,
/* 831 */,
/* 832 */,
/* 833 */,
/* 834 */,
/* 835 */,
/* 836 */,
/* 837 */,
/* 838 */,
/* 839 */,
/* 840 */,
/* 841 */,
/* 842 */,
/* 843 */,
/* 844 */,
/* 845 */,
/* 846 */,
/* 847 */,
/* 848 */,
/* 849 */,
/* 850 */,
/* 851 */,
/* 852 */,
/* 853 */,
/* 854 */,
/* 855 */,
/* 856 */,
/* 857 */,
/* 858 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

var _promise = __webpack_require__(61);

var _promise2 = _interopRequireDefault(_promise);

var _superagent = __webpack_require__(859);

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createResponseHandler = function createResponseHandler(req, opts) {
  var debug = opts.method.toUpperCase() + ' ' + opts.endpoint;

  return new _promise2.default(function (fulfill, reject) {
    return req.end(function (err, res) {
      var serverError = void 0;
      var body = res.body;

      // Errors

      if (!res && !err) {
        serverError = 'Connection failed: ' + debug;
      } else if (!res || res.statusCode >= 500) {
        serverError = 'We`re having technical issues at that moment. Please try again later';
      }

      if (serverError) {
        throw new Error(serverError);
      }

      if (err) {
        // TODO write Error notifier
        opts.onComplete();
        return reject({ resData: body, err: err, res: res });
      }

      if (!body) {
        try {
          body = JSON.parse(res.text);
        } catch (err) {
          return reject(err);
        }
      }

      var resData = opts.modifyResult(body);

      // Resolve

      fulfill(resData, res);
      opts.onComplete();
    });
  });
};

var defaultOptions = {
  sameOrigin: false,
  modifyResult: function modifyResult(resData) {
    return resData;
  },
  onComplete: function onComplete() {}

  /**
   *
   * @param {Object} options
   * @param {String} options.endpoint
   * @param {String} options.method
   * @param {Object} options.headers
   * @param {Object} options.query
   * @param {Object} options.body
   * @param {number} options.delay
   */
};var sendRequest = function sendRequest(options) {
  var opts = (0, _assign2.default)({}, defaultOptions, options);
  var req = _superagent2.default[opts.method](opts.endpoint);

  // req.set({
  //   'Content-Type': opts.formData ? 'application/x-www-form-urlencoded; charset=UTF-8' : 'application/json',
  //   ...(opts.headers || {}),
  // })

  if (opts.timeout) {
    req.timeout((0, _assign2.default)({
      response: 5000, // Wait 5 seconds for the server to start sending,
      deadline: 60000 }, opts.timeout));
  }

  if (opts.query) {
    req.query(opts.query);
  }

  if (opts.body) {
    req.send(opts.body);
  }

  if (opts.sameOrigin) {
    req.withCredentials();
  }

  var responseHandler = createResponseHandler(req, opts);

  responseHandler.abort = req.abort.bind(req);

  return responseHandler;
};

var requestByMethod = function requestByMethod(method) {
  return function (endpoint, opts) {
    return sendRequest((0, _assign2.default)({}, opts, { endpoint: endpoint, method: method }));
  };
};

exports.default = {
  get: requestByMethod('get'),
  post: requestByMethod('post'),
  patch: requestByMethod('patch'),
  put: requestByMethod('put'),
  delete: requestByMethod('delete')
};

/***/ }),
/* 859 */,
/* 860 */,
/* 861 */,
/* 862 */,
/* 863 */,
/* 864 */,
/* 865 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  privateKeysSaved: 'privateKeysSaved',
  demoMoneyReceived: 'demoMoneyReceived',
  activeTabId: 'activeTabId',
  hiddenCoinsList: 'hiddenCoinsList'
};

/***/ }),
/* 866 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  eth: "mainnet" + ":eth:privateKey",
  btc: "mainnet" + ":btc:privateKey",
  eos: "mainnet" + ":eos:privateKey",
  eosAccount: "mainnet" + ":eos:account"
};

/***/ }),
/* 867 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  SuccessWithdraw: 'SuccessWithdraw',
  Message: 'Message'
};

/***/ }),
/* 868 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  Withdraw: 'WithdrawModal',
  Offer: 'OfferModal',
  PrivateKeys: 'PrivateKeysModal',
  Eos: 'EosModal',
  Approve: 'Approve',
  ImportKeys: 'ImportKeys',
  EthChecker: 'EthChecker',
  ReceiveModal: 'ReceiveModal'
};

/***/ }),
/* 869 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(154);

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isLocalStorageEnabled = void 0;

try {
  window.localStorage.setItem('test', 'test');
  window.localStorage.removeItem('test');
  isLocalStorageEnabled = true;
} catch (e) {
  isLocalStorageEnabled = false;
}

var setItem = function setItem(key, value) {
  if (isLocalStorageEnabled) {
    window.localStorage.setItem(key, (0, _stringify2.default)(value));
  }
};

var getItem = function getItem(key) {
  if (isLocalStorageEnabled) {
    var value = window.localStorage.getItem(key);

    try {
      return JSON.parse(value);
    } catch (err) {
      return value;
    }
  }
  return undefined;
};

var removeItem = function removeItem(key) {
  if (isLocalStorageEnabled) {
    return window.localStorage.removeItem(key);
  }
};

var clear = function clear() {
  if (isLocalStorageEnabled) {
    window.localStorage.clear();
  }
};

var subscribe = function subscribe(key, originalListener) {
  var listener = function listener(event) {
    if (event.storageArea === window.localStorage && event.key === key) {
      originalListener(event.newValue, event.oldValue);
    }
  };
  window.addEventListener('storage', listener, false);
  return listener;
};

var unsubscribe = function unsubscribe(listener) {
  window.removeEventListener('storage', listener, false);
};

exports.default = {
  setItem: setItem,
  getItem: getItem,
  removeItem: removeItem,
  clear: clear,
  subscribe: subscribe,
  unsubscribe: unsubscribe
};

/***/ }),
/* 870 */,
/* 871 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _appConfig = __webpack_require__(21);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _core = __webpack_require__(64);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getApiServer = function getApiServer(provider) {
  var _getState = (0, _core.getState)(),
      servers = _getState.api.servers;

  return (servers || {})[provider] || _appConfig2.default.api[provider];
};

exports.default = {
  getApiServer: getApiServer
};

/***/ }),
/* 872 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(62);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ignoreProps = function ignoreProps() {
  for (var _len = arguments.length, ignored = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    ignored[_key - 1] = arguments[_key];
  }

  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var list = {};

  (0, _keys2.default)(props).forEach(function (key) {
    if (!ignored.includes(key)) {
      list[key] = props[key];
    }
  });

  return list;
};

exports.default = ignoreProps;

/***/ }),
/* 873 */,
/* 874 */,
/* 875 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getPageOffset = function getPageOffset() {
  // isCSS1Compat for old browsers support like IE < 9,
  // which do not have window.pageYOffset and window.scrollY
  // For more info check https://developer.mozilla.org/ru/docs/Web/API/Window/scrollY
  var isCSS1Compat = (document.compatMode || '') === 'CSS1Compat';
  var isSupportPageOffset = window.pageXOffset !== undefined;

  if (isSupportPageOffset) {

    return {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }

  return {
    x: isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
    y: isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
  };
};

exports.default = getPageOffset;

/***/ }),
/* 876 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getScrollBarWidth = function getScrollBarWidth() {
  var outer = document.createElement('div');

  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps

  document.body.appendChild(outer);

  var widthNoScroll = outer.offsetWidth;

  // force scrollbars
  outer.style.overflow = 'scroll';

  // add innerdiv
  var inner = document.createElement('div');

  inner.style.width = '100%';
  outer.appendChild(inner);

  var widthWithScroll = inner.offsetWidth;

  // remove divs
  outer.parentNode.removeChild(outer);

  return widthNoScroll - widthWithScroll;
};

exports.default = getScrollBarWidth;

/***/ }),
/* 877 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _stringify = __webpack_require__(154);

var _stringify2 = _interopRequireDefault(_stringify);

var _toConsumableArray2 = __webpack_require__(82);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;
// import UsdtToEthToken from './UsdtToEthToken'
// import EthTokenToUsdt from './EthTokenToUsdt'


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _swap = __webpack_require__(105);

var _swap2 = _interopRequireDefault(_swap);

var _redaction = __webpack_require__(14);

var _actions = __webpack_require__(13);

var _actions2 = _interopRequireDefault(_actions);

var _helpers = __webpack_require__(11);

var _EmergencySave = __webpack_require__(985);

var _EmergencySave2 = _interopRequireDefault(_EmergencySave);

var _InlineLoader = __webpack_require__(79);

var _InlineLoader2 = _interopRequireDefault(_InlineLoader);

var _BtcToEth = __webpack_require__(1110);

var _BtcToEth2 = _interopRequireDefault(_BtcToEth);

var _EthToBtc = __webpack_require__(1113);

var _EthToBtc2 = _interopRequireDefault(_EthToBtc);

var _EthTokenToBtc = __webpack_require__(1114);

var _EthTokenToBtc2 = _interopRequireDefault(_EthTokenToBtc);

var _BtcToEthToken = __webpack_require__(1115);

var _BtcToEthToken2 = _interopRequireDefault(_BtcToEthToken);

var _BtcToEos = __webpack_require__(1116);

var _BtcToEos2 = _interopRequireDefault(_BtcToEos);

var _EosToBtc = __webpack_require__(1128);

var _EosToBtc2 = _interopRequireDefault(_EosToBtc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var swapComponents = {
  'BTC2ETH': _BtcToEth2.default,
  'ETH2BTC': _EthToBtc2.default,
  'NOXON2BTC': _EthTokenToBtc2.default,
  'BTC2NOXON': _BtcToEthToken2.default,
  'SWAP2BTC': _EthTokenToBtc2.default,
  'BTC2SWAP': _BtcToEthToken2.default,
  'JOT2BTC': _EthTokenToBtc2.default,
  'BTC2JOT': _BtcToEthToken2.default,
  // 'SWAP2USDT': EthTokenToUsdt,
  // 'USDT2SWAP': UsdtToEthToken,
  'BTC2EOS': _BtcToEos2.default,
  'EOS2BTC': _EosToBtc2.default
};

var SwapComponent = (_dec = (0, _redaction.connect)({
  errors: 'api.errors',
  checked: 'api.checked'
}), _dec(_class = function (_PureComponent) {
  (0, _inherits3.default)(SwapComponent, _PureComponent);

  function SwapComponent() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SwapComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SwapComponent.__proto__ || (0, _getPrototypeOf2.default)(SwapComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      swap: null,
      SwapComponent: null
    }, _this.setSaveSwapId = function (orderId) {
      var swapsId = JSON.parse(localStorage.getItem('swapId'));

      if (swapsId === null || swapsId.length === 0) {
        swapsId = [];
        swapsId.push(orderId);
      }

      var boolean = swapsId.map(function (item) {
        return item === orderId;
      });

      if (!Boolean.apply(undefined, (0, _toConsumableArray3.default)(boolean))) {
        swapsId.push(orderId);
      }

      localStorage.setItem('swapId', (0, _stringify2.default)(swapsId));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(SwapComponent, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          orderId = _props.match.params.orderId,
          history = _props.history;


      if (!orderId) {
        history.push(_helpers.links.exchange);
        return;
      }

      var swap = new _swap2.default(orderId);
      var SwapComponent = swapComponents[swap.flow._flowName.toUpperCase()];

      this.setState({
        SwapComponent: SwapComponent,
        swap: swap
      });

      this.setSaveSwapId(orderId);

      // for debug and emergency save
      window.swap = swap;
    }

    // componentWillMount() {
    //   actions.api.checkServers()
    //     .then(() => {
    //
    //     })
    // }

  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          swap = _state.swap,
          SwapComponent = _state.SwapComponent;


      if (!swap || !SwapComponent) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        { style: { paddingLeft: '30px', paddingTop: '30px' } },
        _react2.default.createElement(
          SwapComponent,
          { swap: swap },
          _react2.default.createElement(_EmergencySave2.default, { flow: swap.flow })
        )
      );
    }
  }]);
  return SwapComponent;
}(_react.PureComponent)) || _class);
exports.default = SwapComponent;

/***/ }),
/* 878 */,
/* 879 */,
/* 880 */,
/* 881 */,
/* 882 */,
/* 883 */,
/* 884 */,
/* 885 */,
/* 886 */,
/* 887 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(84);

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = __webpack_require__(88);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(277);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _bignumber = __webpack_require__(202);

var _bignumber2 = _interopRequireDefault(_bignumber);

var _swap = __webpack_require__(17);

var _swap2 = _interopRequireDefault(_swap);

var _Room = __webpack_require__(435);

var _Room2 = _interopRequireDefault(_Room);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Swap = function () {
  function Swap(id) {
    (0, _classCallCheck3.default)(this, Swap);

    this.id = null;
    this.isMy = null;
    this.owner = null;
    this.participant = null;
    this.buyCurrency = null;
    this.sellCurrency = null;
    this.buyAmount = null;
    this.sellAmount = null;

    var data = _swap2.default.env.storage.getItem('swap.' + id);

    if (!data) {
      var order = _swap2.default.services.orders.getByKey(id);

      data = this._getDataFromOrder(order);
    }

    this.update(data);

    this.events = new _swap.Events();

    this.room = new _Room2.default({
      swapId: id,
      participantPeer: this.participant.peer
    });

    // NOXON2BTC
    // BTC2NOXON
    var Flow = _swap2.default.flows[data.sellCurrency.toUpperCase() + '2' + data.buyCurrency.toUpperCase()];

    if (!Flow) {
      throw new Error('Flow with name "' + data.sellCurrency.toUpperCase() + '2' + data.buyCurrency.toUpperCase() + '" not found in SwapApp.flows');
    }

    this.flow = new Flow(this);
  }

  (0, _createClass3.default)(Swap, [{
    key: '_getDataFromOrder',
    value: function _getDataFromOrder(order) {
      // TODO add check order format (typeforce)

      var data = _swap.util.pullProps(order, 'id', 'isMy', 'owner', 'participant', 'buyCurrency', 'sellCurrency', 'buyAmount', 'sellAmount');

      var isMy = data.isMy,
          buyCurrency = data.buyCurrency,
          sellCurrency = data.sellCurrency,
          buyAmount = data.buyAmount,
          sellAmount = data.sellAmount,
          rest = (0, _objectWithoutProperties3.default)(data, ['isMy', 'buyCurrency', 'sellCurrency', 'buyAmount', 'sellAmount']);


      var swap = (0, _extends3.default)({}, rest, {
        isMy: isMy,
        buyCurrency: isMy ? buyCurrency : sellCurrency,
        sellCurrency: isMy ? sellCurrency : buyCurrency,
        buyAmount: isMy ? buyAmount : sellAmount,
        sellAmount: isMy ? sellAmount : buyAmount
      });

      if (!swap.participant && !isMy) {
        swap.participant = swap.owner;
      }

      return swap;
    }
  }, {
    key: '_pullRequiredData',
    value: function _pullRequiredData(data) {
      return _swap.util.pullProps(data, 'id', 'isMy', 'owner', 'participant', 'buyCurrency', 'sellCurrency', 'buyAmount', 'sellAmount');
    }
  }, {
    key: '_saveState',
    value: function _saveState() {
      var data = this._pullRequiredData(this);

      _swap2.default.env.storage.setItem('swap.' + this.id, data);
    }
  }, {
    key: 'update',
    value: function update(values) {
      var _this = this;

      (0, _keys2.default)(values).forEach(function (key) {
        if (key === 'buyAmount' || key === 'sellAmount') {
          _this[key] = new _bignumber2.default(String(values[key]));
        } else {
          _this[key] = values[key];
        }
      });
      this._saveState();
    }
  }, {
    key: 'on',
    value: function on(eventName, handler) {
      this.events.subscribe(eventName, handler);
    }
  }, {
    key: 'off',
    value: function off(eventName, handler) {
      this.events.unsubscribe(eventName, handler);
    }
  }]);
  return Swap;
}();

exports.default = Swap;
module.exports = exports['default'];

/***/ }),
/* 888 */,
/* 889 */,
/* 890 */,
/* 891 */,
/* 892 */,
/* 893 */,
/* 894 */,
/* 895 */,
/* 896 */,
/* 897 */,
/* 898 */,
/* 899 */,
/* 900 */,
/* 901 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  eth: 'ETH',
  btc: 'BTC',
  eos: 'EOS',
  nim: 'NIM',
  usdt: 'USDT',

  // ETH Tokens
  noxon: 'NOXON',
  jot: 'JOT',
  swap: 'SWAP',
  btrm: 'BTRM'
};
module.exports = exports['default'];

/***/ }),
/* 902 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  eos: 'eos',
  web3: 'web3',
  bitcoin: 'bitcoin',
  Ipfs: 'Ipfs',
  IpfsRoom: 'IpfsRoom',
  storage: 'storage'
};
module.exports = exports['default'];

/***/ }),
/* 903 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  auth: 'auth',
  room: 'room',
  orders: 'orders',
  swaps: 'swaps'
};
module.exports = exports['default'];

/***/ }),
/* 904 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  MAINNET: 'mainnet',
  TESTNET: 'testnet',
  LOCALNET: 'localnet'
};
module.exports = exports['default'];

/***/ }),
/* 905 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(281);

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StorageFactory = function () {
  function StorageFactory(storage) {
    (0, _classCallCheck3.default)(this, StorageFactory);

    this.prefix = 'swap:';
    this.storage = storage || global.localStorage;

    try {
      this.storage.setItem('test', 'test');
      this.storage.getItem('test');
      this.storage.removeItem('test');
    } catch (err) {
      throw new Error('SwapApp.env.StorageFactory: ' + err);
    }
  }

  (0, _createClass3.default)(StorageFactory, [{
    key: 'setItem',
    value: function setItem(key, value) {
      this.storage.setItem('' + this.prefix + key, (0, _stringify2.default)(value));
    }
  }, {
    key: 'getItem',
    value: function getItem(key) {
      var value = this.storage.getItem('' + this.prefix + key);

      try {
        return JSON.parse(value);
      } catch (err) {
        console.error('SwapApp.env.storage.getItem(' + key + ') parse error. Looks like the value was created w/o setItem method');
        console.error(err);
        return undefined;
      }
    }
  }, {
    key: 'removeItem',
    value: function removeItem(key) {
      return this.storage.removeItem('' + this.prefix + key);
    }
  }]);
  return StorageFactory;
}();

exports.default = StorageFactory;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 906 */,
/* 907 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(84);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _SwapApp = __webpack_require__(433);

var _SwapApp2 = _interopRequireDefault(_SwapApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ServiceInterface = function () {
  (0, _createClass3.default)(ServiceInterface, [{
    key: '_constructor',


    // _constructor for aggregation
    value: function _constructor() {
      // service name, within it will be stored in SwapApp.services
      this._serviceName = null;
      this._dependsOn = null;
      this._spyHandlers = [];
    }
  }]);

  function ServiceInterface() {
    (0, _classCallCheck3.default)(this, ServiceInterface);

    this._constructor();
  }

  (0, _createClass3.default)(ServiceInterface, [{
    key: '_waitRelationsResolve',
    value: function _waitRelationsResolve() {
      var _this = this;

      if (this._dependsOn && this._dependsOn.length) {
        var dependsOnMap = {};

        this._dependsOn.forEach(function (Service) {
          dependsOnMap[Service.name] = {
            initialized: false
          };

          _SwapApp2.default.services[Service.name]._addWaitRelationHandler(function () {
            dependsOnMap[Service.name].initialized = true;

            var areAllExpectsInitialized = (0, _keys2.default)(dependsOnMap).every(function (serviceName) {
              return dependsOnMap[serviceName].initialized;
            });

            if (areAllExpectsInitialized) {
              _this.initService();
            }
          });
        });
      }
    }
  }, {
    key: '_addWaitRelationHandler',
    value: function _addWaitRelationHandler(handler) {
      this._spyHandlers.push(handler);
    }
  }, {
    key: '_tryInitService',
    value: function _tryInitService() {
      if (!this._dependsOn || !this._dependsOn.length) {
        this.initService();
        this._spyHandlers.forEach(function (handler) {
          return handler();
        });
        this._spyHandlers = [];
      }
    }
  }, {
    key: 'initService',
    value: function initService() {
      // init service on SwapApp mounting
    }
  }]);
  return ServiceInterface;
}();

exports.default = ServiceInterface;
module.exports = exports['default'];

/***/ }),
/* 908 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwapInterface = function () {
  function SwapInterface() {
    (0, _classCallCheck3.default)(this, SwapInterface);

    // service name, within it will be stored in SwapApp.swaps
    this._swapName = null;
  }

  (0, _createClass3.default)(SwapInterface, [{
    key: "_initSwap",
    value: function _initSwap() {
      // init service on SwapApp mounting
    }
  }]);
  return SwapInterface;
}();

exports.default = SwapInterface;
module.exports = exports["default"];

/***/ }),
/* 909 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(84);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Collection = function () {
  (0, _createClass3.default)(Collection, [{
    key: "_constructor",


    // _constructor for aggregation
    value: function _constructor() {
      this.items = [];
      this.itemIds = {};
    }
  }]);

  function Collection() {
    (0, _classCallCheck3.default)(this, Collection);

    this._constructor();
  }

  /**
   * Add item at the start of current collection
   * @param item
   * @param key {string|number}
   * @returns {*}
   */


  (0, _createClass3.default)(Collection, [{
    key: "prepend",
    value: function prepend(item, key) {
      this.items.unshift(item);
      if (key) {
        for (var _key in this.itemIds) {
          if (this.itemIds.hasOwnProperty(_key)) {
            this.itemIds[_key] += 1;
          }
        }
        this.itemIds[key] = 0;
      }
      return item;
    }

    /**
     * Add item at the end of current collection
     * @param item
     * @param key {string|number}
     * @returns {*}
     */

  }, {
    key: "append",
    value: function append(item, key) {
      this.items.push(item);
      if (key) {
        this.itemIds[key] = this.items.length - 1;
      }
      return item;
    }

    /**
     * Remove item by index from current collection
     * @param index
     * @returns {*}
     */

  }, {
    key: "removeByIndex",
    value: function removeByIndex(index) {
      this.items = this.items.splice(index, 1);
    }

    /**
     * Remove item by key [id] from current collection
     * @param key {string|number}
     * @returns {*}
     */

  }, {
    key: "removeByKey",
    value: function removeByKey(key) {
      var _this = this;

      var index = this.itemIds[key];

      if (index !== undefined) {
        this.items.splice(index, 1);
        delete this.itemIds[key];

        (0, _keys2.default)(this.itemIds).forEach(function (key) {
          if (_this.itemIds[key] > index) {
            _this.itemIds[key]--;
          }
        });
      }
    }

    /**
     * Get index of item in current collection
     * @param item
     * @returns {number}
     */

  }, {
    key: "indexOf",
    value: function indexOf(item) {
      return this.items.indexOf(item);
    }

    /**
     * Get item by index from current collection
     * @param index
     * @returns {*}
     */

  }, {
    key: "getByIndex",
    value: function getByIndex(index) {
      return this.items[index];
    }

    /**
     * Get item by key [id] from current collection
     * @param key {string|number}
     * @returns {*}
     */

  }, {
    key: "getByKey",
    value: function getByKey(key) {
      return this.items[this.itemIds[key]];
    }
  }, {
    key: "isExist",
    value: function isExist(item) {
      return this.items.includes(item);
    }

    /**
     * Check if item with such name exists in current collection
     * @param key {string|number}
     * @returns {boolean}
     */

  }, {
    key: "isExistByKey",
    value: function isExistByKey(key) {
      return Boolean(this.getByKey(key));
    }
  }]);
  return Collection;
}();

exports.default = Collection;
module.exports = exports["default"];

/***/ }),
/* 910 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.events = undefined;

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Event = function () {

  /**
   *
   * @param name {string}
   */
  function Event(name) {
    (0, _classCallCheck3.default)(this, Event);

    this.name = name;
    this.handlers = [];
  }

  /**
   * Add handler to current Event
   *
   * @param handler {function}
   */


  (0, _createClass3.default)(Event, [{
    key: "addHandler",
    value: function addHandler(handler) {
      var _this = this;

      this.handlers.push(handler.bind({
        unsubscribe: function unsubscribe() {
          _this.removeHandler(handler);
        }
      }));
    }

    /**
     * Remove handler from current Event
     *
     * @param handler {function}
     * @returns {Array.<T>|*}
     */

  }, {
    key: "removeHandler",
    value: function removeHandler(handler) {
      var handlerIndex = this.handlers.indexOf(handler);

      this.handlers.splice(handlerIndex, 1);
    }

    /**
     * Call all handlers in all priorities of current Event
     *
     * @param eventArgs {...array}
     */

  }, {
    key: "call",
    value: function call() {
      for (var _len = arguments.length, eventArgs = Array(_len), _key = 0; _key < _len; _key++) {
        eventArgs[_key] = arguments[_key];
      }

      this.handlers.forEach(function (handler) {
        try {
          handler.apply(undefined, eventArgs);
        } catch (err) {
          console.error(err);
        }
      });
    }
  }]);
  return Event;
}();

var EventAggregator = function () {
  function EventAggregator() {
    (0, _classCallCheck3.default)(this, EventAggregator);

    this.events = {};
  }

  /**
   * Get Event by name
   *
   * @param name
   * @returns {*}
   */


  (0, _createClass3.default)(EventAggregator, [{
    key: "getEvent",
    value: function getEvent(name) {
      var event = this.events[name];

      if (!event) {
        event = new Event(name);
        this.events[name] = event;
      }

      return event;
    }

    /**
     *
     * @param name {string}
     * @param handler {function}
     * @returns {{ event: *, handler: * }}
     */

  }, {
    key: "subscribe",
    value: function subscribe(name, handler) {
      var event = this.getEvent(name);

      event.addHandler(handler);

      return { event: event, handler: handler };
    }

    /**
     *
     * @param eventName {string}
     * @param handler {function}
     */

  }, {
    key: "unsubscribe",
    value: function unsubscribe(eventName, handler) {
      var event = this.getEvent(eventName);

      event.removeHandler(handler);
    }

    /**
     *
     * @param name {string}
     * @param eventArgs {...array}
     */

  }, {
    key: "dispatch",
    value: function dispatch(name) {
      var event = this.getEvent(name);

      if (event) {
        for (var _len2 = arguments.length, eventArgs = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          eventArgs[_key2 - 1] = arguments[_key2];
        }

        event.call.apply(event, eventArgs);
      }
    }

    /**
     * Subscribe to Event and unsubscribe after call
     *
     * @param eventName {string}
     * @param handler {function}
     * @returns {{ event: *, handlerWrapper: (function(...[*])) }}
     */

  }, {
    key: "once",
    value: function once(eventName, handler) {
      var event = this.getEvent(eventName);

      var handlerWrapper = function handlerWrapper() {
        var result = handler.apply(undefined, arguments);
        if (result) {
          event.removeHandler(handlerWrapper);
        }
      };

      event.addHandler(handlerWrapper);

      return { event: event, handlerWrapper: handlerWrapper };
    }
  }]);
  return EventAggregator;
}();

var events = new EventAggregator();

exports.default = EventAggregator;
exports.events = events;

/***/ }),
/* 911 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pullProps = __webpack_require__(912);

var _pullProps2 = _interopRequireDefault(_pullProps);

var _ignoreProps = __webpack_require__(913);

var _ignoreProps2 = _interopRequireDefault(_ignoreProps);

var _typeforce = __webpack_require__(914);

var _typeforce2 = _interopRequireDefault(_typeforce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  pullProps: _pullProps2.default,
  ignoreProps: _ignoreProps2.default,
  typeforce: _typeforce2.default
};
module.exports = exports['default'];

/***/ }),
/* 912 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var pullProps = function pullProps(obj) {
  for (var _len = arguments.length, props = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    props[_key - 1] = arguments[_key];
  }

  var result = {};

  props.forEach(function (propName) {
    result[propName] = obj[propName];
  });

  return result;
};

exports.default = pullProps;
module.exports = exports["default"];

/***/ }),
/* 913 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(84);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ignoreProps = function ignoreProps() {
  for (var _len = arguments.length, ignored = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    ignored[_key - 1] = arguments[_key];
  }

  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var list = {};

  (0, _keys2.default)(props).forEach(function (key) {
    if (!ignored.includes(key)) {
      list[key] = props[key];
    }
  });

  return list;
};

exports.default = ignoreProps;
module.exports = exports["default"];

/***/ }),
/* 914 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(915);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _values = __webpack_require__(279);

var _values2 = _interopRequireDefault(_values);

var _isCoinAddress, _isPublicKey;

var _typeforce = __webpack_require__(916);

var _typeforce2 = _interopRequireDefault(_typeforce);

var _constants = __webpack_require__(280);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var check = function check() {
  try {
    return _typeforce2.default.apply(undefined, arguments);
  } catch (err) {
    console.error(err);
    return false;
  }
};

var isNumeric = function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
};

var isCoinName = function isCoinName(value) {
  return (0, _values2.default)(_constants2.default.COINS).map(function (v) {
    return v.toLowerCase();
  }).includes(value.toLowerCase());
};

var isCoinAddress = (_isCoinAddress = {}, (0, _defineProperty3.default)(_isCoinAddress, _constants2.default.COINS.eos, '?String'), (0, _defineProperty3.default)(_isCoinAddress, _constants2.default.COINS.eth, function (value) {
  return typeof value === 'string' && /^0x[A-Fa-f0-9]{40}$/.test(value);
}), (0, _defineProperty3.default)(_isCoinAddress, _constants2.default.COINS.btc, function (value) {
  return typeof value === 'string' && /^[A-Za-z0-9]{34}$/.test(value);
}), (0, _defineProperty3.default)(_isCoinAddress, _constants2.default.COINS.nim, function (value) {
  return typeof value === 'string' && /^0x[A-Fa-f0-9]{40}$/.test(value);
}), (0, _defineProperty3.default)(_isCoinAddress, _constants2.default.COINS.noxon, function (value) {
  return typeof value === 'string' && /^0x[A-Fa-f0-9]{40}$/.test(value);
}), (0, _defineProperty3.default)(_isCoinAddress, _constants2.default.COINS.swap, function (value) {
  return typeof value === 'string' && /^0x[A-Fa-f0-9]{40}$/.test(value);
}), (0, _defineProperty3.default)(_isCoinAddress, _constants2.default.COINS.usdt, function (value) {
  return typeof value === 'string';
}), _isCoinAddress);

var isPublicKey = (_isPublicKey = {}, (0, _defineProperty3.default)(_isPublicKey, _constants2.default.COINS.eos, '?String'), (0, _defineProperty3.default)(_isPublicKey, _constants2.default.COINS.eth, '?String'), (0, _defineProperty3.default)(_isPublicKey, _constants2.default.COINS.btc, function (value) {
  return typeof value === 'string' && /^[A-Za-z0-9]{66}$/.test(value);
}), (0, _defineProperty3.default)(_isPublicKey, _constants2.default.COINS.nim, '?String'), (0, _defineProperty3.default)(_isPublicKey, _constants2.default.COINS.noxon, '?String'), (0, _defineProperty3.default)(_isPublicKey, _constants2.default.COINS.swap, '?String'), (0, _defineProperty3.default)(_isPublicKey, _constants2.default.COINS.usdt, '?String'), _isPublicKey);

exports.default = {
  t: _typeforce2.default,
  check: check,
  isNumeric: isNumeric,
  isCoinName: isCoinName,
  isCoinAddress: isCoinAddress,
  isPublicKey: isPublicKey
};
module.exports = exports['default'];

/***/ }),
/* 915 */,
/* 916 */,
/* 917 */,
/* 918 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(89);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(90);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _toConsumableArray2 = __webpack_require__(451);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = __webpack_require__(88);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _swap2 = __webpack_require__(17);

var _swap3 = _interopRequireDefault(_swap2);

var _Room = __webpack_require__(435);

var _Room2 = _interopRequireDefault(_Room);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Flow = function () {
  function Flow(swap) {
    (0, _classCallCheck3.default)(this, Flow);

    this.swap = swap;
    this.steps = [];

    this.stepNumbers = {};

    this.state = {
      step: 0,
      isWaitingForOwner: false
    };
  }

  (0, _createClass3.default)(Flow, [{
    key: '_persistState',
    value: function _persistState() {
      var _this = this;

      var state = _swap3.default.env.storage.getItem('flow.' + this.swap.id);

      if (state) {
        this.state = (0, _extends3.default)({}, this.state, state);
      }

      this.swap.room.on('persist state', function (values) {
        _this.setState(values, true);
      });
    }
  }, {
    key: '_persistSteps',
    value: function _persistSteps() {
      var _this2 = this;

      this.steps = [].concat((0, _toConsumableArray3.default)(this._getInitialSteps()), (0, _toConsumableArray3.default)(this._getSteps()));

      // wait events placed
      setTimeout(function () {
        if (_this2.state.step >= _this2.steps.length) return;else _this2.goStep(_this2.state.step);
      }, 0);
    }
  }, {
    key: '_getInitialSteps',
    value: function _getInitialSteps() {
      var _this3 = this;

      var flow = this;

      return [

      // Check if order exists

      (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _swap, orderId, owner;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _swap = _this3.swap, orderId = _swap.id, owner = _swap.owner;

                // TODO how can we don't know who is participant???
                // TODO if there is no participant in `order` then no need to create Flow...
                // if there is no order it orderCollection that means owner is offline, so `swap.owner` will be undefined

                if (!owner) {
                  flow.setState({
                    isWaitingForOwner: true
                  });

                  _swap3.default.services.room.on('new orders', function (_ref2) {
                    var orders = _ref2.orders;

                    var order = orders.find(function (_ref3) {
                      var id = _ref3.id;
                      return id === orderId;
                    });

                    if (order) {
                      this.unsubscribe();

                      var _order = orders.getByKey(orderId);

                      // TODO move this to Swap.js
                      flow.swap.room = new _Room2.default({
                        participantPeer: _order.owner.peer
                      });
                      flow.swap.update((0, _extends3.default)({}, _order, {
                        participant: _order.owner
                      }));
                      flow.finishStep({
                        isWaitingForOwner: false
                      });
                    }
                  });
                } else {
                  flow.finishStep();
                }

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this3);
      }))];
    }
  }, {
    key: '_getSteps',
    value: function _getSteps() {
      return [];
    }
  }, {
    key: '_saveState',
    value: function _saveState() {
      _swap3.default.env.storage.setItem('flow.' + this.swap.id, this.state);
    }
  }, {
    key: 'finishStep',
    value: function finishStep(data, constraints) {
      console.log('on step ' + this.state.step + ', constraints =', constraints);

      if (constraints) {
        var step = constraints.step,
            silentError = constraints.silentError;


        var n_step = this.stepNumbers[step];
        console.log('trying to finish step ' + step + ' = ' + n_step + ' when on step ' + this.state.step);

        if (step && this.state.step < n_step) {
          if (silentError) {
            console.error('Cant finish step ' + step + ' = ' + n_step + ' when on step ' + this.state.step);
            return;
          } else {
            throw new Error('Cant finish step ' + step + ' = ' + n_step + ' when on step ' + this.state.step);
            return;
          }
        }
      }

      console.log('proceed to step ' + (this.state.step + 1) + ', data=', data);

      this.goNextStep(data);
    }
  }, {
    key: 'goNextStep',
    value: function goNextStep(data) {
      var step = this.state.step;

      var newStep = step + 1;

      this.swap.events.dispatch('leave step', step);

      this.setState((0, _extends3.default)({
        step: newStep
      }, data || {}), true);

      if (this.steps.length > newStep) this.goStep(newStep);
    }
  }, {
    key: 'goStep',
    value: function goStep(index) {
      this.swap.events.dispatch('enter step', index);
      this.steps[index]();
    }
  }, {
    key: 'setState',
    value: function setState(values, save) {
      this.state = (0, _extends3.default)({}, this.state, values);

      if (save) {
        this._saveState();
      }

      this.swap.events.dispatch('state update', this.state, values);
    }
  }]);
  return Flow;
}();

exports.default = Flow;
module.exports = exports['default'];

/***/ }),
/* 919 */,
/* 920 */,
/* 921 */,
/* 922 */,
/* 923 */,
/* 924 */,
/* 925 */,
/* 926 */,
/* 927 */,
/* 928 */,
/* 929 */,
/* 930 */,
/* 931 */,
/* 932 */,
/* 933 */,
/* 934 */,
/* 935 */,
/* 936 */,
/* 937 */,
/* 938 */,
/* 939 */,
/* 940 */,
/* 941 */,
/* 942 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducers = __webpack_require__(30);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var open = function open(name, data) {
  return _reducers2.default.modals.open({ name: name, data: data });
};

var close = function close(name) {
  return _reducers2.default.modals.close(name);
};

exports.default = {
  open: open,
  close: close
};

/***/ }),
/* 943 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducers = __webpack_require__(30);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var show = function show(isVisible, text, txId, swap, data) {
  return _reducers2.default.loader.setVisibility({ isVisible: isVisible, text: text, txId: txId, swap: swap, data: data });
};
var hide = function hide() {
  return _reducers2.default.loader.setVisibility({});
};

exports.default = {
  show: show,
  hide: hide
};

/***/ }),
/* 944 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducers = __webpack_require__(30);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var show = function show(name, data) {
  return _reducers2.default.notifications.show({ name: name, data: data });
};

var hide = function hide(name) {
  return _reducers2.default.notifications.hide(name);
};

exports.default = {
  show: show,
  hide: hide
};

/***/ }),
/* 945 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(82);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _promise = __webpack_require__(61);

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = __webpack_require__(54);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _keys = __webpack_require__(62);

var _keys2 = _interopRequireDefault(_keys);

var _asyncToGenerator2 = __webpack_require__(55);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _appConfig = __webpack_require__(21);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _moment = __webpack_require__(452);

var _moment2 = _interopRequireDefault(_moment);

var _helpers = __webpack_require__(11);

var _actions = __webpack_require__(13);

var _actions2 = _interopRequireDefault(_actions);

var _core = __webpack_require__(64);

var _reducers = __webpack_require__(30);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sign = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var btcPrivateKey, ethPrivateKey, _ethPrivateKey, eosMasterPrivateKey, eosAccount;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            btcPrivateKey = localStorage.getItem(_helpers.constants.privateKeyNames.btc);
            ethPrivateKey = localStorage.getItem(_helpers.constants.privateKeyNames.eth);
            _ethPrivateKey = _actions2.default.eth.login(ethPrivateKey);


            _actions2.default.btc.login(btcPrivateKey);
            _actions2.default.usdt.login(btcPrivateKey);

            (0, _keys2.default)(_appConfig2.default.tokens).forEach(function (name) {
              _actions2.default.token.login(_ethPrivateKey, _appConfig2.default.tokens[name].address, name, _appConfig2.default.tokens[name].decimals);
            });
            // await actions.nimiq.login(_ethPrivateKey)

            eosMasterPrivateKey = localStorage.getItem(_helpers.constants.privateKeyNames.eos);
            eosAccount = localStorage.getItem(_helpers.constants.privateKeyNames.eosAccount);

            if (!(eosMasterPrivateKey && eosAccount)) {
              _context.next = 13;
              break;
            }

            _context.next = 11;
            return _actions2.default.eos.login(eosAccount, eosMasterPrivateKey);

          case 11:
            _context.next = 13;
            return _actions2.default.eos.getBalance();

          case 13:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function sign() {
    return _ref.apply(this, arguments);
  };
}();

var getBalances = function getBalances() {
  _actions2.default.eth.getBalance();
  _actions2.default.btc.getBalance();
  _actions2.default.usdt.getBalance();
  _actions2.default.eos.getBalance();

  (0, _keys2.default)(_appConfig2.default.tokens).forEach(function (name) {
    _actions2.default.token.getBalance(name);
  });
  // actions.nimiq.getBalance()
};

var getDemoMoney =  true ? function () {} : function () {
  _helpers.request.get('https://swap.wpmix.net/demokeys.php', {}).then(function (r) {
    window.localStorage.clear();
    localStorage.setItem(_helpers.constants.privateKeyNames.btc, r[0]);
    localStorage.setItem(_helpers.constants.privateKeyNames.eth, r[1]);
    localStorage.setItem(_helpers.constants.localStorage.demoMoneyReceived, true);
  });
};

var getExchangeRate = function getExchangeRate(sellCurrency, buyCurrency) {
  return new _promise2.default(function (resolve, reject) {
    var url = 'https://api.cryptonator.com/api/full/' + sellCurrency + '-' + buyCurrency;
    _helpers.request.get(url).then(function (_ref2) {
      var exchangeRate = _ref2.ticker.price;

      resolve(exchangeRate);
    }).catch(function () {
      resolve(_appConfig2.default.exchangeRates['' + sellCurrency.toLowerCase() + buyCurrency.toLowerCase()]);
    });
  });
};

var setTransactions = function setTransactions() {
  return _promise2.default.all([_actions2.default.btc.getTransaction(), _actions2.default.eth.getTransaction(), _actions2.default.token.getTransaction(_appConfig2.default.tokens.swap.address), _actions2.default.token.getTransaction(_appConfig2.default.tokens.noxon.address)]).then(function (transactions) {
    var _ref3;

    var data = (_ref3 = []).concat.apply(_ref3, [[]].concat((0, _toConsumableArray3.default)(transactions))).sort(function (a, b) {
      return b.date - a.date;
    });
    _reducers2.default.history.setTransactions(data);
  });
};

var getText = function getText() {
  var _getState = (0, _core.getState)(),
      _getState$user = _getState.user,
      ethData = _getState$user.ethData,
      btcData = _getState$user.btcData,
      eosData = _getState$user.eosData;

  var text = '\n' + window.location.hostname + ' emergency instruction\n\r\n\n\r\n\n#ETHEREUM\n\r\n\n\r\n\nEthereum address: ' + ethData.address + '  \r\n\nPrivate key: ' + ethData.privateKey + '\r\n\n\r\n\n\r\n\nHow to access tokens and ethers: \r\n\n1. Go here https://www.myetherwallet.com/#send-transaction \r\n\n2. Select \'Private key\'\r\n\n3. paste private key to input and click "unlock"\r\n\n\r\n\n\r\n\n\r\n\n# BITCOIN\r\n\n\r\n\n\r\n\nBitcoin address: ' + btcData.address + '\r\n\nPrivate key: ' + btcData.privateKey + '\r\n\n\r\n\n\r\n\n1. Go to blockchain.info\r\n\n2. login\r\n\n3. Go to settings > addresses > import\r\n\n4. paste private key and click "Ok"\r\n\n\r\n\n\r\n\n* We don`t store your private keys and will not be able to restore them!\n\r\n\n\r\n\n\r\n\n# EOS\r\n\n\r\n\nEOS Master Private Key: ' + eosData.masterPrivateKey + '\r\n\nAccount name: ' + eosData.address + '\r\n\n';

  return text;
};

var downloadPrivateKeys = function downloadPrivateKeys() {
  var element = document.createElement('a');
  var text = getText();
  var message = 'Check your browser downloads';

  element.setAttribute('href', 'data:text/plaincharset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', window.location.hostname + '_keys_' + (0, _moment2.default)().format('DD.MM.YYYY') + '.txt');

  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);

  _actions2.default.notifications.show(_helpers.constants.notifications.Message, {
    message: message
  });
};

exports.default = {
  sign: sign,
  getBalances: getBalances,
  getDemoMoney: getDemoMoney,
  getExchangeRate: getExchangeRate,
  setTransactions: setTransactions,
  downloadPrivateKeys: downloadPrivateKeys
};

/***/ }),
/* 946 */,
/* 947 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(62);

var _keys2 = _interopRequireDefault(_keys);

var _reducers = __webpack_require__(30);

var _reducers2 = _interopRequireDefault(_reducers);

var _core = __webpack_require__(64);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addItemToFeed = function addItemToFeed(feeds) {
  var filteredFeeds = feeds.filter(function (f) {
    return f.request.length !== 0;
  });
  _reducers2.default.feeds.addItems(filteredFeeds);
};

var deleteItemToFeed = function deleteItemToFeed(orderId) {
  var _getState = (0, _core.getState)(),
      feeds = _getState.feeds;

  var filteredFeeds = (0, _keys2.default)(feeds).map(function (k) {
    return feeds[k];
  }).filter(function (f) {
    return f.id === orderId;
  });

  _reducers2.default.feeds.deleteItems(filteredFeeds);
};

var getFeedDataFromOrder = function getFeedDataFromOrder(orders) {
  var feeds = orders.map(function (order) {
    return {
      peer: order.owner.peer,
      id: order.id,
      content: {
        sellCurrency: order.sellCurrency,
        buyCurrency: order.buyCurrency,
        sellAmount: order.sellAmount,
        buyAmount: order.buyAmount
      },
      request: order.requests
    };
  });

  addItemToFeed(feeds);
};

exports.default = {
  getFeedDataFromOrder: getFeedDataFromOrder,
  deleteItemToFeed: deleteItemToFeed
};

/***/ }),
/* 948 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(154);

var _stringify2 = _interopRequireDefault(_stringify);

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

var _reducers = __webpack_require__(30);

var _reducers2 = _interopRequireDefault(_reducers);

var _actions = __webpack_require__(13);

var _actions2 = _interopRequireDefault(_actions);

var _core = __webpack_require__(64);

var _swap = __webpack_require__(17);

var _swap2 = _interopRequireDefault(_swap);

var _helpers = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getOrders = function getOrders(orders) {
  _reducers2.default.core.getOrders({ orders: orders });
};

var setFilter = function setFilter(filter) {
  _reducers2.default.core.setFilter({ filter: filter });
};

var acceptRequest = function acceptRequest(orderId, participantPeer) {
  var order = _swap2.default.services.orders.getByKey(orderId);
  order.acceptRequest(participantPeer);
};

var declineRequest = function declineRequest(orderId, participantPeer) {
  var order = _swap2.default.services.orders.getByKey(orderId);
  order.declineRequest(participantPeer);
};

var removeOrder = function removeOrder(orderId) {
  _swap2.default.services.orders.remove(orderId);
  _actions2.default.feed.deleteItemToFeed(orderId);
};

var sendRequest = function sendRequest(orderId, callback) {
  var order = _swap2.default.services.orders.getByKey(orderId);

  order.sendRequest(callback);
};

var createOrder = function createOrder(data) {
  _swap2.default.services.orders.create(data);
};

var updateCore = function updateCore() {
  var orders = _swap2.default.services.orders.items;

  getOrders(orders);
  getSwapHistory();
  _actions2.default.feed.getFeedDataFromOrder(orders);
};

var getSwapHistory = function getSwapHistory() {
  var swapId = JSON.parse(localStorage.getItem('swapId'));

  if (swapId === null || swapId.length === 0) {
    return;
  }

  var historySwap = swapId.map(function (item) {
    return (0, _assign2.default)({}, _swap2.default.env.storage.getItem('swap.' + item), _swap2.default.env.storage.getItem('flow.' + item));
  });

  _reducers2.default.history.setSwapHistory(historySwap);
};

var markCoinAsHidden = function markCoinAsHidden(coin) {
  var list = (0, _core.getState)().core.hiddenCoinsList || [];
  if (!list.includes(coin)) {
    _reducers2.default.core.markCoinAsHidden(coin);
    localStorage.setItem(_helpers.constants.localStorage.hiddenCoinsList, (0, _stringify2.default)((0, _core.getState)().core.hiddenCoinsList));
  }
};

var markCoinAsVisible = function markCoinAsVisible(coin) {
  _reducers2.default.core.markCoinAsVisible(coin);
  localStorage.setItem(_helpers.constants.localStorage.hiddenCoinsList, (0, _stringify2.default)((0, _core.getState)().core.hiddenCoinsList));
};

exports.default = {
  getOrders: getOrders,
  setFilter: setFilter,
  createOrder: createOrder,
  getSwapHistory: getSwapHistory,
  updateCore: updateCore,
  sendRequest: sendRequest,
  acceptRequest: acceptRequest,
  declineRequest: declineRequest,
  removeOrder: removeOrder,
  markCoinAsHidden: markCoinAsHidden,
  markCoinAsVisible: markCoinAsVisible
};

/***/ }),
/* 949 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducers = __webpack_require__(30);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setFilter = function setFilter(filter) {
  _reducers2.default.history.setFilter(filter);
};

var ordersFilter = function ordersFilter(filter) {
  _reducers2.default.orders.ordersFilter(filter);
};

exports.default = {
  setFilter: setFilter,
  ordersFilter: ordersFilter
};

/***/ }),
/* 950 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(54);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(55);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = __webpack_require__(61);

var _promise2 = _interopRequireDefault(_promise);

var _bigi = __webpack_require__(40);

var _bigi2 = _interopRequireDefault(_bigi);

var _bignumber = __webpack_require__(91);

var _bitcoinjsLib = __webpack_require__(149);

var _bitcoinjsLib2 = _interopRequireDefault(_bitcoinjsLib);

var _core = __webpack_require__(64);

var _reducers = __webpack_require__(30);

var _reducers2 = _interopRequireDefault(_reducers);

var _helpers = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var login = function login(privateKey) {
  var keyPair = void 0;

  if (privateKey) {
    var hash = _bitcoinjsLib2.default.crypto.sha256(privateKey);
    var d = _bigi2.default.fromBuffer(hash);

    keyPair = new _bitcoinjsLib2.default.ECPair(d, null, { network: _helpers.btc.network });
  } else {
    console.info('Created account Bitcoin ...');
    keyPair = _bitcoinjsLib2.default.ECPair.makeRandom({ network: _helpers.btc.network });
    privateKey = keyPair.toWIF();
  }

  localStorage.setItem(_helpers.constants.privateKeyNames.btc, privateKey);

  var account = new _bitcoinjsLib2.default.ECPair.fromWIF(privateKey, _helpers.btc.network); // eslint-disable-line
  var address = account.getAddress();
  var publicKey = account.getPublicKeyBuffer().toString('hex');

  var data = {
    account: account,
    keyPair: keyPair,
    address: address,
    privateKey: privateKey,
    publicKey: publicKey
  };

  window.getBtcAddress = function () {
    return data.address;
  };

  console.info('Logged in with Bitcoin', data);
  _reducers2.default.user.setAuthData({ name: 'btcData', data: data });
};

var getBalance = function getBalance() {
  var _getState = (0, _core.getState)(),
      address = _getState.user.btcData.address;

  return _helpers.request.get(_helpers.api.getApiServer('bitpay') + '/addr/' + address).then(function (_ref) {
    var balance = _ref.balance,
        unconfirmedBalance = _ref.unconfirmedBalance;

    console.log('BTC Balance:', balance);
    console.log('BTC unconfirmedBalance Balance:', unconfirmedBalance);
    _reducers2.default.user.setBalance({ name: 'btcData', amount: balance, unconfirmedBalance: unconfirmedBalance });
    return balance;
  }, function () {
    return _promise2.default.reject();
  });
};

var fetchBalance = function fetchBalance(address) {
  return _helpers.request.get(_helpers.api.getApiServer('bitpay') + '/addr/' + address).then(function (_ref2) {
    var balance = _ref2.balance;
    return balance;
  });
};

var getTransaction = function getTransaction() {
  return new _promise2.default(function (resolve) {
    var _getState2 = (0, _core.getState)(),
        address = _getState2.user.btcData.address;

    var url = _helpers.api.getApiServer('bitpay') + '/txs/?address=' + address;

    return _helpers.request.get(url).then(function (res) {
      var transactions = res.txs.map(function (item) {
        return {
          type: 'btc',
          hash: item.txid,
          confirmations: item.confirmations,
          value: item.vout.filter(function (item) {
            return item.scriptPubKey.addresses[0] === address;
          })[0].value,
          date: item.time * 1000,
          direction: address === item.vout[0].scriptPubKey.addresses[0] ? 'in' : 'out'
        };
      });
      resolve(transactions);
    }).catch(function () {
      resolve([]);
    });
  });
};

var createScript = function createScript(data) {
  var secretHash = data.secretHash,
      ownerPublicKey = data.ownerPublicKey,
      recipientPublicKey = data.recipientPublicKey,
      lockTime = data.lockTime;


  var script = _bitcoinjsLib2.default.script.compile([_bitcoinjsLib2.default.opcodes.OP_RIPEMD160, Buffer.from(secretHash, 'hex'), _bitcoinjsLib2.default.opcodes.OP_EQUALVERIFY, Buffer.from(recipientPublicKey, 'hex'), _bitcoinjsLib2.default.opcodes.OP_EQUAL, _bitcoinjsLib2.default.opcodes.OP_IF, Buffer.from(recipientPublicKey, 'hex'), _bitcoinjsLib2.default.opcodes.OP_CHECKSIG, _bitcoinjsLib2.default.opcodes.OP_ELSE, _bitcoinjsLib2.default.script.number.encode(lockTime), _bitcoinjsLib2.default.opcodes.OP_CHECKLOCKTIMEVERIFY, _bitcoinjsLib2.default.opcodes.OP_DROP, Buffer.from(ownerPublicKey, 'hex'), _bitcoinjsLib2.default.opcodes.OP_CHECKSIG, _bitcoinjsLib2.default.opcodes.OP_ENDIF]);

  var scriptPubKey = _bitcoinjsLib2.default.script.scriptHash.output.encode(_bitcoinjsLib2.default.crypto.hash160(script));
  var scriptAddress = _bitcoinjsLib2.default.address.fromOutputScript(scriptPubKey, { network: _helpers.btc.network });

  return {
    scriptAddress: scriptAddress
  };
};

var send = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(from, to, amount) {
    var _getState3, privateKey, keyPair, tx, unspents, fundValue, feeValue, totalUnspent, skipValue, txRaw;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _getState3 = (0, _core.getState)(), privateKey = _getState3.user.btcData.privateKey;
            keyPair = _bitcoinjsLib2.default.ECPair.fromWIF(privateKey, _helpers.btc.network);
            tx = new _bitcoinjsLib2.default.TransactionBuilder(_helpers.btc.network);
            _context.next = 5;
            return fetchUnspents(from);

          case 5:
            unspents = _context.sent;
            fundValue = new _bignumber.BigNumber(String(amount)).multipliedBy(1e8).integerValue().toNumber();
            feeValue = 15000;
            totalUnspent = unspents.reduce(function (summ, _ref4) {
              var satoshis = _ref4.satoshis;
              return summ + satoshis;
            }, 0);
            skipValue = totalUnspent - feeValue - fundValue;


            unspents.forEach(function (_ref5) {
              var txid = _ref5.txid,
                  vout = _ref5.vout;
              return tx.addInput(txid, vout, 0xfffffffe);
            });
            tx.addOutput(to, fundValue);
            tx.addOutput(from, skipValue);

            tx.inputs.forEach(function (input, index) {
              tx.sign(index, keyPair);
            });

            txRaw = tx.buildIncomplete();


            broadcastTx(txRaw.toHex());

          case 16:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function send(_x, _x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}();

var fetchUnspents = function fetchUnspents(address) {
  return _helpers.request.get(_helpers.api.getApiServer('bitpay') + '/addr/' + address + '/utxo');
};

var broadcastTx = function broadcastTx(txRaw) {
  return _helpers.request.post(_helpers.api.getApiServer('bitpay') + '/tx/send', {
    body: {
      rawtx: txRaw
    }
  });
};

exports.default = {
  login: login,
  getBalance: getBalance,
  getTransaction: getTransaction,
  send: send,
  fetchUnspents: fetchUnspents,
  createScript: createScript,
  broadcastTx: broadcastTx,
  fetchBalance: fetchBalance
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7).Buffer))

/***/ }),
/* 951 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(54);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(55);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = __webpack_require__(61);

var _promise2 = _interopRequireDefault(_promise);

var _helpers = __webpack_require__(11);

var _core = __webpack_require__(64);

var _actions = __webpack_require__(13);

var _actions2 = _interopRequireDefault(_actions);

var _web = __webpack_require__(193);

var _web2 = _interopRequireDefault(_web);

var _reducers = __webpack_require__(30);

var _reducers2 = _interopRequireDefault(_reducers);

var _appConfig = __webpack_require__(21);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _referral = __webpack_require__(454);

var _referral2 = _interopRequireDefault(_referral);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var login = function login(privateKey) {
  var data = void 0;

  if (privateKey) {
    data = _web2.default.eth.accounts.privateKeyToAccount(privateKey);
  } else {
    console.info('Created account Ethereum ...');
    data = _web2.default.eth.accounts.create();
  }

  localStorage.setItem(_helpers.constants.privateKeyNames.eth, data.privateKey);

  _web2.default.eth.accounts.wallet.add(data.privateKey);
  _reducers2.default.user.setAuthData({ name: 'ethData', data: data });

  window.getEthAddress = function () {
    return data.address;
  };
  _referral2.default.newReferral(data.address);

  console.info('Logged in with Ethereum', data);

  return data.privateKey;
};

var getBalance = function getBalance() {
  var _getState = (0, _core.getState)(),
      address = _getState.user.ethData.address;

  return _web2.default.eth.getBalance(address).then(function (result) {
    var amount = Number(_web2.default.utils.fromWei(result));

    _reducers2.default.user.setBalance({ name: 'ethData', amount: amount });
    return amount;
  }).catch(function (e) {
    console.log('Web3 doesn\'t work please again later ', e.error);
  });
};

var fetchBalance = function fetchBalance(address) {
  return _web2.default.eth.getBalance(address).then(function (result) {
    return Number(_web2.default.utils.fromWei(result));
  }).catch(function (e) {
    console.log('Web3 doesn\'t work please again later ', e.error);
  });
};

var getTransaction = function getTransaction() {
  return new _promise2.default(function (resolve) {
    var _getState2 = (0, _core.getState)(),
        address = _getState2.user.ethData.address;

    var url = _helpers.api.getApiServer('etherscan') + '?module=account&action=txlist&address=' + address + '&startblock=0&endblock=99999999&sort=asc&apikey=' + _appConfig2.default.apiKeys.etherscan;

    return _helpers.request.get(url).then(function (res) {
      var transactions = res.result.filter(function (item) {
        return item.value > 0;
      }).map(function (item) {
        return {
          type: 'eth',
          confirmations: item.confirmations,
          hash: item.hash,
          status: item.blockHash != null ? 1 : 0,
          value: _web2.default.utils.fromWei(item.value),
          address: item.to,
          date: item.timeStamp * 1000,
          direction: address.toLowerCase() === item.to.toLowerCase() ? 'in' : 'out'
        };
      });

      resolve(transactions);
    }).catch(function () {
      resolve([]);
    });
  });
};

var send = function send(from, to, amount) {
  return new _promise2.default(function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(resolve, reject) {
      var _getState3, privateKey, params, txRaw, receipt;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _getState3 = (0, _core.getState)(), privateKey = _getState3.user.ethData.privateKey;
              params = {
                to: String(to).trim(),
                gasPrice: '20000000000',
                gas: '21000',
                value: _web2.default.utils.toWei(String(amount))
              };
              txRaw = void 0;
              _context.next = 5;
              return _web2.default.eth.accounts.signTransaction(params, privateKey).then(function (result) {
                txRaw = _web2.default.eth.sendSignedTransaction(result.rawTransaction);
              });

            case 5:
              _context.next = 7;
              return txRaw.on('transactionHash', function (hash) {
                var txId = _appConfig2.default.link.etherscan + '/tx/' + hash;
                _actions2.default.loader.show(true, true, txId);
              }).on('error', function (err) {
                reject(err);
              });

            case 7:
              receipt = _context.sent;


              resolve(receipt);

            case 9:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};

exports.default = {
  send: send,
  login: login,
  getBalance: getBalance,
  fetchBalance: fetchBalance,
  getTransaction: getTransaction
};

/***/ }),
/* 952 */,
/* 953 */,
/* 954 */,
/* 955 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parseFloat = __webpack_require__(956);

var _parseFloat2 = _interopRequireDefault(_parseFloat);

var _regenerator = __webpack_require__(54);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

var _asyncToGenerator2 = __webpack_require__(55);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _core = __webpack_require__(64);

var _reducers = __webpack_require__(30);

var _reducers2 = _interopRequireDefault(_reducers);

var _constants = __webpack_require__(428);

var _constants2 = _interopRequireDefault(_constants);

var _eos = __webpack_require__(231);

var _eosjsKeygen = __webpack_require__(961);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var register = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(accountName, privateKey) {
    var keys, eosInstance, eccInstance, _ref2, permissions, providedKey, requiredKey;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _eosjsKeygen.Keygen.generateMasterKeys(privateKey);

          case 2:
            keys = _context.sent;

            if (!(keys.masterPrivateKey !== privateKey)) {
              _context.next = 5;
              break;
            }

            throw new Error('Invalid private key');

          case 5:
            _context.next = 7;
            return _eos.eos.getInstance();

          case 7:
            eosInstance = _context.sent;
            _context.next = 10;
            return _eos.ecc.getInstance();

          case 10:
            eccInstance = _context.sent;
            _context.next = 13;
            return eosInstance.getAccount(accountName);

          case 13:
            _ref2 = _context.sent;
            permissions = _ref2.permissions;
            providedKey = eccInstance.privateToPublic(keys.privateKeys.active);
            requiredKey = permissions.find(function (item) {
              return item.perm_name === 'active';
            }).required_auth.keys[0].key;

            if (!(providedKey !== requiredKey)) {
              _context.next = 19;
              break;
            }

            throw new Error('Invalid accounts permissions');

          case 19:

            localStorage.setItem(_constants2.default.privateKeyNames.eos, privateKey);
            localStorage.setItem(_constants2.default.privateKeyNames.eosAccount, accountName);

            _reducers2.default.user.setAuthData({ name: 'eosData', data: (0, _assign2.default)({}, keys, { address: accountName }) });

          case 22:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function register(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var login = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(accountName, masterPrivateKey) {
    var keys;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _eosjsKeygen.Keygen.generateMasterKeys(masterPrivateKey);

          case 2:
            keys = _context2.sent;

            _reducers2.default.user.setAuthData({ name: 'eosData', data: (0, _assign2.default)({}, keys, { address: accountName }) });

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function login(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();

var getBalance = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
    var _getState, address, eosInstance, balance, amount;

    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _getState = (0, _core.getState)(), address = _getState.user.eosData.address;

            if (!(typeof address !== 'string')) {
              _context3.next = 3;
              break;
            }

            return _context3.abrupt('return');

          case 3:
            _context3.next = 5;
            return _eos.eos.getInstance();

          case 5:
            eosInstance = _context3.sent;
            _context3.next = 8;
            return eosInstance.getCurrencyBalance({
              code: 'eosio.token',
              symbol: 'EOS',
              account: address
            });

          case 8:
            balance = _context3.sent;
            amount = (0, _parseFloat2.default)(balance[0]) || 0;


            _reducers2.default.user.setBalance({ name: 'eosData', amount: amount });

          case 11:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function getBalance() {
    return _ref4.apply(this, arguments);
  };
}();

var send = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(from, to, amount) {
    var _getState2, address, eosInstance, transfer;

    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _getState2 = (0, _core.getState)(), address = _getState2.user.eosData.address;

            if (!(typeof address !== 'string')) {
              _context4.next = 3;
              break;
            }

            return _context4.abrupt('return');

          case 3:
            _context4.next = 5;
            return _eos.eos.getInstance();

          case 5:
            eosInstance = _context4.sent;
            _context4.next = 8;
            return eosInstance.transaction({
              actions: [{
                account: 'eosio.token',
                name: 'transfer',
                authorization: [{
                  actor: from,
                  permission: 'active'
                }],
                data: {
                  from: from,
                  to: to.trim(),
                  quantity: amount + '.0000 EOS',
                  memo: ''
                }
              }]
            });

          case 8:
            transfer = _context4.sent;

          case 9:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined);
  }));

  return function send(_x5, _x6, _x7) {
    return _ref5.apply(this, arguments);
  };
}();

exports.default = {
  login: login,
  register: register,
  getBalance: getBalance,
  send: send
};

/***/ }),
/* 956 */,
/* 957 */,
/* 958 */,
/* 959 */,
/* 960 */,
/* 961 */,
/* 962 */,
/* 963 */,
/* 964 */,
/* 965 */,
/* 966 */,
/* 967 */,
/* 968 */,
/* 969 */,
/* 970 */,
/* 971 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(54);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(61);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(55);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var initWallet = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(privateKey) {
    var keyPair;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            keyPair = (0, _nimiq.ethKeyToKeyPair)(privateKey);
            return _context2.abrupt('return', new window.Nimiq.Wallet(keyPair));

          case 2:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function initWallet(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var init = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
    var _this = this;

    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return initNimiq();

          case 2:
            if (!initPromise) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt('return', initPromise);

          case 6:
            if (!isInitialized) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt('return', _promise2.default.resolve());

          case 8:

            initPromise = new _promise2.default(function () {
              var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(resolve) {
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        window.nim = $;

                        _context3.next = 3;
                        return window.Nimiq.Consensus.nano();

                      case 3:
                        $.consensus = _context3.sent;

                        $.blockchain = $.consensus.blockchain;
                        $.accounts = $.blockchain.accounts;
                        $.mempool = $.consensus.mempool;
                        $.network = $.consensus.network;

                        $.consensus.on('established', function () {
                          window.Nimiq.Log.i('Consensus', 'Current state: height=' + $.blockchain.height + ', headHash=' + $.blockchain.headHash);
                          resolve();
                        });
                        $.network.connect();

                      case 10:
                      case 'end':
                        return _context3.stop();
                    }
                  }
                }, _callee3, _this);
              }));

              return function (_x2) {
                return _ref4.apply(this, arguments);
              };
            }());

            return _context4.abrupt('return', initPromise);

          case 10:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function init() {
    return _ref3.apply(this, arguments);
  };
}();

var _reducers = __webpack_require__(30);

var _reducers2 = _interopRequireDefault(_reducers);

var _appConfig = __webpack_require__(21);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _nimiq = __webpack_require__(972);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $ = {};
var initNimiqPromise = void 0;
var isNimiqInitialized = false;
var initPromise = void 0;
var isInitialized = false;

var NETWORK = _appConfig2.default.entry === 'mainnet' ? 'main' : 'test';

var initNimiq = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!initNimiqPromise) {
              _context.next = 4;
              break;
            }

            return _context.abrupt('return', initNimiqPromise);

          case 4:
            if (!isNimiqInitialized) {
              _context.next = 6;
              break;
            }

            return _context.abrupt('return', _promise2.default.resolve());

          case 6:

            initNimiqPromise = new _promise2.default(function (resolve, reject) {
              if (!window.Nimiq) {
                console.error('Nimiq not present, add from CDN: https://cdn.nimiq.com/nimiq.js');
                reject();
              } else {
                window.Nimiq.init(function () {
                  isNimiqInitialized = true;
                  window.Nimiq.GenesisConfig.init(window.Nimiq.GenesisConfig.CONFIGS[NETWORK]);
                  resolve();
                });
              }
            });

            return _context.abrupt('return', initNimiqPromise);

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function initNimiq() {
    return _ref.apply(this, arguments);
  };
}();

var login = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(ethPrivateKey) {
    var data;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return init();

          case 2:
            _context5.next = 4;
            return initWallet(ethPrivateKey);

          case 4:
            $.wallet = _context5.sent;
            data = {
              balance: 0,
              address: $.wallet.address.toUserFriendlyAddress()
            };


            window.getNimAddress = function () {
              return data.address;
            };

            console.info('Logged in with Nimiq', data);
            _reducers2.default.user.setAuthData({ name: 'nimData', data: data });

            return _context5.abrupt('return', data);

          case 10:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, undefined);
  }));

  return function login(_x3) {
    return _ref5.apply(this, arguments);
  };
}();

var getBalance = function () {
  var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
    var account, amount;
    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return init();

          case 2:
            _context6.next = 4;
            return $.consensus.getAccount($.wallet.address);

          case 4:
            account = _context6.sent;
            amount = window.Nimiq.Policy.satoshisToCoins(account.balance).toFixed(0);


            _reducers2.default.user.setBalance({ name: 'nimData', amount: amount });

            return _context6.abrupt('return', amount);

          case 8:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, undefined);
  }));

  return function getBalance() {
    return _ref6.apply(this, arguments);
  };
}();

var getTransaction = function getTransaction() {};

var send = function () {
  var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(from, address, amount) {
    var _prepareTransaction, addr, value, fee, height, tx;

    return _regenerator2.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return init();

          case 2:
            _prepareTransaction = (0, _nimiq.prepareTransaction)($, address, amount), addr = _prepareTransaction.addr, value = _prepareTransaction.value, fee = _prepareTransaction.fee, height = _prepareTransaction.height;
            tx = $.wallet.createTransaction(addr, value, fee, height);


            $.consensus.relayTransaction(tx);
            $.consensus.subscribeAccounts([tx.recipient]);

            window.Nimiq.Log.i('TX', 'Waiting for Nimiq transaction [' + tx.hash().toHex() + '] to confirm, please wait...');

            (0, _nimiq.followTransaction)($, tx).then(function () {
              return window.Nimiq.Log.i('TX', 'Nimiq transaction [' + tx.hash().toHex() + '] confirmed!');
            }).then(function () {
              return getBalance();
            });

            return _context7.abrupt('return', tx);

          case 9:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, undefined);
  }));

  return function send(_x4, _x5, _x6) {
    return _ref7.apply(this, arguments);
  };
}();

exports.default = {
  login: login,
  getBalance: getBalance,
  getTransaction: getTransaction,
  send: send
};

/***/ }),
/* 972 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareTransaction = exports.followTransaction = exports.ethKeyToKeyPair = undefined;

var _promise = __webpack_require__(61);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ethKeyToKeyPair = function ethKeyToKeyPair(ethKey) {
  if (!window.Nimiq) throw new Error('include Nimiq from CDN');

  var raw = ethKey.slice(0, 2) === '0x' ? ethKey.substring(2) : ethKey;
  var buf = Buffer.from(raw, 'hex');
  var privKey = new window.Nimiq.PrivateKey(buf);
  var publicKey = window.Nimiq.PublicKey.derive(privKey);

  return new window.Nimiq.KeyPair(privKey, publicKey);
};

var followTransaction = function followTransaction($, tx) {
  return new _promise2.default(function (resolve) {
    var id = $.mempool.on('transaction-mined', function (tx2) {
      if (tx.equals(tx2)) {
        $.mempool.off('transaction-mined', id);
        resolve();
      }
    });
  });
};

var prepareTransaction = function prepareTransaction($, address, amount) {
  var height = $.blockchain.height + 1;
  var addr = window.Nimiq.Address.fromUserFriendlyAddress(address);
  var value = window.Nimiq.Policy.coinsToSatoshis(amount);
  var fee = window.Nimiq.Policy.coinsToSatoshis(0);

  return { addr: addr, value: value, fee: fee, height: height };
};

exports.ethKeyToKeyPair = ethKeyToKeyPair;
exports.followTransaction = followTransaction;
exports.prepareTransaction = prepareTransaction;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7).Buffer))

/***/ }),
/* 973 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(62);

var _keys2 = _interopRequireDefault(_keys);

var _promise = __webpack_require__(61);

var _promise2 = _interopRequireDefault(_promise);

var _reducers = __webpack_require__(30);

var _reducers2 = _interopRequireDefault(_reducers);

var _appConfig = __webpack_require__(21);

var _appConfig2 = _interopRequireDefault(_appConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkServers = function checkServers() {
  _reducers2.default.api.setChecked(false);
  return _promise2.default.all((0, _keys2.default)(_appConfig2.default.apiAlternatives).map(function (provider) {
    return _promise2.default.race(_appConfig2.default.apiAlternatives[provider].map(function (server) {
      return new _promise2.default(function (resolve, reject) {
        fetch(server + '/status').then(function () {
          return resolve(server);
        }).catch(function (e) {
          return reject(e);
        });
      });
    })).then(function (chosen) {
      _reducers2.default.api.setApiServer(provider, chosen);
      console.log('[' + provider + '] ' + chosen + ' is OK, using it');
    });
  })).then(function () {
    _reducers2.default.api.setChecked(true);
    console.log('All servers is OK.');
  }).catch(function (e) {
    return _reducers2.default.api.setErrors(true);
  });
};

exports.default = {
  checkServers: checkServers
};

/***/ }),
/* 974 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactGtmModule = __webpack_require__(975);

var _reactGtmModule2 = _interopRequireDefault(_reactGtmModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dataEvent = function dataEvent(eventName) {
  window.dataLayer = window.dataLayer ? window.dataLayer : [];
  window.dataLayer.push({ 'event': eventName });
};

var swapEvent = function swapEvent(eventAction, eventLabel) {
  if (window.ga) {
    var tracker = window.ga.getAll()[0];
    tracker.send({ hitType: 'event', eventCategory: 'Swap', eventAction: eventAction, eventLabel: eventLabel });
  }

  if (window.yaCounter48876458) {
    window.yaCounter48876458.reachGoal('swap-' + eventAction, { currency: eventLabel });
  }
};

var tagManagerArgs = {
  gtmId: 'GTM-WK72GSV',
  dataLayerName: 'dataLayer'
};

_reactGtmModule2.default.initialize(tagManagerArgs);

exports.default = {
  dataEvent: dataEvent,
  swapEvent: swapEvent
};

/***/ }),
/* 975 */,
/* 976 */,
/* 977 */,
/* 978 */,
/* 979 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducers = __webpack_require__(30);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var set = function set(payload) {
  _reducers2.default.ipfs.set(payload);
};

var userJoined = function userJoined() {
  _reducers2.default.ipfs.userJoined();
};

var userLeft = function userLeft() {
  _reducers2.default.ipfs.userLeft();
};

exports.default = {
  set: set,
  userJoined: userJoined,
  userLeft: userLeft
};

/***/ }),
/* 980 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

var _token = __webpack_require__(161);

var _token2 = _interopRequireDefault(_token);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _assign2.default)({}, _token2.default);

/***/ }),
/* 981 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

var _token = __webpack_require__(161);

var _token2 = _interopRequireDefault(_token);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _assign2.default)({}, _token2.default);

/***/ }),
/* 982 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

var _token = __webpack_require__(161);

var _token2 = _interopRequireDefault(_token);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _assign2.default)({}, _token2.default);

/***/ }),
/* 983 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

var _token = __webpack_require__(161);

var _token2 = _interopRequireDefault(_token);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _assign2.default)({}, _token2.default);

/***/ }),
/* 984 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(54);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(55);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _bigi = __webpack_require__(40);

var _bigi2 = _interopRequireDefault(_bigi);

var _bignumber = __webpack_require__(91);

var _core = __webpack_require__(64);

var _reducers = __webpack_require__(30);

var _reducers2 = _interopRequireDefault(_reducers);

var _bitcoinjsLib = __webpack_require__(149);

var _bitcoinjsLib2 = _interopRequireDefault(_bitcoinjsLib);

var _helpers = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var login = function login(privateKey) {
  var keyPair = void 0;

  if (privateKey) {
    var hash = _bitcoinjsLib2.default.crypto.sha256(privateKey);
    var d = _bigi2.default.fromBuffer(hash);

    keyPair = new _bitcoinjsLib2.default.ECPair(d, null, { network: _helpers.btc.network });
  } else {
    console.info('Created account Bitcoin ...');
    keyPair = _bitcoinjsLib2.default.ECPair.makeRandom({ network: _helpers.btc.network });
    privateKey = keyPair.toWIF();
  }

  var account = new _bitcoinjsLib2.default.ECPair.fromWIF(privateKey, _helpers.btc.network); // eslint-disable-line
  var address = account.getAddress();
  var publicKey = account.getPublicKeyBuffer().toString('hex');

  var data = {
    account: account,
    keyPair: keyPair,
    address: address,
    privateKey: privateKey,
    publicKey: publicKey
  };

  console.info('Logged in with USDT', data);
  _reducers2.default.user.setAuthData({ name: 'usdtData', data: data });
};

var getBalance = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var _getState, address, balance;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _getState = (0, _core.getState)(), address = _getState.user.usdtData.address;
            _context.next = 3;
            return fetchBalance(address);

          case 3:
            balance = _context.sent;


            _reducers2.default.user.setBalance({ name: 'usdtData', amount: balance });
            return _context.abrupt('return', balance);

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function getBalance() {
    return _ref.apply(this, arguments);
  };
}();

var fetchBalance = function fetchBalance(address) {
  var assetId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 31;
  return _helpers.request.post('https://api.omniexplorer.info/v1/address/addr/', {
    body: 'addr=' + address
  }).then(function (response) {
    var error = response.error,
        balance = response.balance;


    if (error) throw new Error('Omni Balance: ' + error + ' at ' + address);

    var findById = balance.filter(function (asset) {
      return parseInt(asset.id) === assetId || asset.id === assetId;
    });

    if (!findById.length) {
      return 0;
    }

    console.log('Omni Balance:', findById[0].value);
    console.log('Omni Balance pending:', findById[0].pendingpos);
    console.log('Omni Balance pending:', findById[0].pendingneg);

    var usdsatoshis = (0, _bignumber.BigNumber)(findById[0].value);

    if (usdsatoshis) {
      return usdsatoshis.dividedBy(1e8).toNumber();
    } else {
      return 0;
    }
  }).catch(function (error) {
    return console.error(error);
  });
};

exports.default = {
  login: login,
  getBalance: getBalance,
  fetchBalance: fetchBalance
};

/***/ }),
/* 985 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _stringify = __webpack_require__(154);

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _EmergencySave = __webpack_require__(1108);

var _EmergencySave2 = _interopRequireDefault(_EmergencySave);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmergencySave = (_dec = (0, _reactCssModules2.default)(_EmergencySave2.default), _dec(_class = (_temp2 = _class2 = function (_Component) {
  (0, _inherits3.default)(EmergencySave, _Component);

  function EmergencySave() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, EmergencySave);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EmergencySave.__proto__ || (0, _getPrototypeOf2.default)(EmergencySave)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isShowEmergency: false
    }, _this.showEmergency = function () {
      _this.setState({
        isShowEmergency: !_this.state.isShowEmergency
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(EmergencySave, [{
    key: 'render',
    value: function render() {
      var isShowEmergency = this.state.isShowEmergency;
      var state = this.props.flow.state;


      return _react2.default.createElement(
        'div',
        { styleName: 'block' },
        _react2.default.createElement(
          'span',
          { styleName: 'button', onClick: this.showEmergency },
          'Information about swap'
        ),
        isShowEmergency && _react2.default.createElement(
          'pre',
          null,
          _react2.default.createElement(
            'code',
            null,
            (0, _stringify2.default)(state, false, 4)
          )
        )
      );
    }
  }]);
  return EmergencySave;
}(_react.Component), _class2.propTypes = {
  flow: _propTypes2.default.object
}, _temp2)) || _class);
exports.default = EmergencySave;

/***/ }),
/* 986 */,
/* 987 */,
/* 988 */,
/* 989 */,
/* 990 */,
/* 991 */,
/* 992 */,
/* 993 */,
/* 994 */,
/* 995 */,
/* 996 */,
/* 997 */,
/* 998 */,
/* 999 */,
/* 1000 */,
/* 1001 */,
/* 1002 */,
/* 1003 */,
/* 1004 */,
/* 1005 */,
/* 1006 */,
/* 1007 */,
/* 1008 */,
/* 1009 */,
/* 1010 */,
/* 1011 */,
/* 1012 */,
/* 1013 */,
/* 1014 */,
/* 1015 */,
/* 1016 */,
/* 1017 */,
/* 1018 */,
/* 1019 */,
/* 1020 */,
/* 1021 */,
/* 1022 */,
/* 1023 */,
/* 1024 */,
/* 1025 */,
/* 1026 */,
/* 1027 */,
/* 1028 */,
/* 1029 */,
/* 1030 */,
/* 1031 */,
/* 1032 */,
/* 1033 */,
/* 1034 */,
/* 1035 */,
/* 1036 */,
/* 1037 */,
/* 1038 */,
/* 1039 */,
/* 1040 */,
/* 1041 */,
/* 1042 */,
/* 1043 */,
/* 1044 */,
/* 1045 */,
/* 1046 */,
/* 1047 */,
/* 1048 */,
/* 1049 */,
/* 1050 */,
/* 1051 */,
/* 1052 */,
/* 1053 */,
/* 1054 */,
/* 1055 */,
/* 1056 */,
/* 1057 */,
/* 1058 */,
/* 1059 */,
/* 1060 */,
/* 1061 */,
/* 1062 */,
/* 1063 */,
/* 1064 */,
/* 1065 */,
/* 1066 */,
/* 1067 */,
/* 1068 */,
/* 1069 */,
/* 1070 */,
/* 1071 */,
/* 1072 */,
/* 1073 */,
/* 1074 */,
/* 1075 */,
/* 1076 */,
/* 1077 */,
/* 1078 */,
/* 1079 */,
/* 1080 */,
/* 1081 */,
/* 1082 */,
/* 1083 */,
/* 1084 */,
/* 1085 */,
/* 1086 */,
/* 1087 */,
/* 1088 */,
/* 1089 */,
/* 1090 */,
/* 1091 */,
/* 1092 */,
/* 1093 */,
/* 1094 */,
/* 1095 */,
/* 1096 */,
/* 1097 */,
/* 1098 */,
/* 1099 */,
/* 1100 */,
/* 1101 */,
/* 1102 */,
/* 1103 */,
/* 1104 */,
/* 1105 */,
/* 1106 */,
/* 1107 */,
/* 1108 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"block":"FrwFdW","button":"_2yZ_HA"};

/***/ }),
/* 1109 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"ellipsis":"_2Zo-qQ","ellipsis1":"_2_LbWQ","ellipsis2":"_2fJ8Hd","ellipsis3":"_2Nlot5"};

/***/ }),
/* 1110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp, _initialiseProps;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _crypto = __webpack_require__(104);

var _crypto2 = _interopRequireDefault(_crypto);

var _appConfig = __webpack_require__(21);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _bignumber = __webpack_require__(91);

var _actions = __webpack_require__(13);

var _actions2 = _interopRequireDefault(_actions);

var _Timer = __webpack_require__(164);

var _Timer2 = _interopRequireDefault(_Timer);

var _Button = __webpack_require__(43);

var _Button2 = _interopRequireDefault(_Button);

var _InlineLoader = __webpack_require__(79);

var _InlineLoader2 = _interopRequireDefault(_InlineLoader);

var _TimerButton = __webpack_require__(165);

var _TimerButton2 = _interopRequireDefault(_TimerButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BtcToEth = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(BtcToEth, _Component);

  function BtcToEth(_ref) {
    var swap = _ref.swap;
    (0, _classCallCheck3.default)(this, BtcToEth);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BtcToEth.__proto__ || (0, _getPrototypeOf2.default)(BtcToEth)).call(this));

    _initialiseProps.call(_this);

    _this.swap = swap;

    _this.state = {
      flow: _this.swap.flow.state,
      secret: _crypto2.default.randomBytes(32).toString('hex'),
      enabledButton: false
    };
    return _this;
  }

  (0, _createClass3.default)(BtcToEth, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.swap.on('state update', this.handleFlowStateUpdate);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.swap.off('state update', this.handleFlowStateUpdate);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var children = this.props.children;
      var _state = this.state,
          secret = _state.secret,
          flow = _state.flow,
          enabledButton = _state.enabledButton;


      return _react2.default.createElement(
        'div',
        null,
        this.swap.id && _react2.default.createElement(
          'strong',
          null,
          this.swap.sellAmount.toNumber(),
          ' ',
          this.swap.sellCurrency,
          ' \u27F6 ',
          this.swap.buyAmount.toNumber(),
          ' ',
          this.swap.buyCurrency
        ),
        !this.swap.id && (this.swap.isMy ? _react2.default.createElement(
          'h3',
          null,
          'This order doesn\'t have a buyer'
        ) : _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            'The order creator is offline. Waiting for him..'
          ),
          _react2.default.createElement(_InlineLoader2.default, null)
        )),
        !flow.isParticipantSigned && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            'We are waiting for a market maker. If it does not appear within 5 minutes, the swap will be canceled automatically.'
          ),
          _react2.default.createElement(_InlineLoader2.default, null)
        ),
        flow.isParticipantSigned && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            '2. Create a secret key'
          ),
          !flow.secretHash ? _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement('input', { type: 'text', placeholder: 'Secret Key', defaultValue: secret }),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              _TimerButton2.default,
              { timeLeft: 5, brand: true, onClick: this.submitSecret },
              'Confirm'
            )
          ) : _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'div',
              null,
              'Save the secret key! Otherwise there will be a chance you loose your money!'
            ),
            _react2.default.createElement(
              'div',
              null,
              'Secret Key: ',
              _react2.default.createElement(
                'strong',
                null,
                flow.secret
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              'Secret Hash: ',
              _react2.default.createElement(
                'strong',
                null,
                flow.secretHash
              )
            )
          ),
          flow.step === 3 && !flow.isBalanceEnough && !flow.isBalanceFetching && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              'Not enough money for this swap. Please charge the balance'
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'div',
                null,
                'Your balance: ',
                _react2.default.createElement(
                  'strong',
                  null,
                  flow.balance
                ),
                ' ',
                this.swap.sellCurrency
              ),
              _react2.default.createElement(
                'div',
                null,
                'Required balance: ',
                _react2.default.createElement(
                  'strong',
                  null,
                  this.swap.sellAmount.toNumber()
                ),
                ' ',
                this.swap.sellCurrency
              ),
              _react2.default.createElement(
                'div',
                null,
                'Your address: ',
                this.swap.flow.myBtcAddress
              ),
              _react2.default.createElement('hr', null),
              _react2.default.createElement(
                'span',
                null,
                flow.address
              )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              _Button2.default,
              { brand: true, onClick: this.updateBalance },
              'Continue'
            )
          ),
          flow.step === 3 && flow.isBalanceFetching && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'div',
              null,
              'Checking balance..'
            ),
            _react2.default.createElement(_InlineLoader2.default, null)
          ),
          (flow.step === 4 || flow.btcScriptValues) && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              '3. Creating Bitcoin Script. Please wait, it will take a while'
            ),
            flow.btcScriptCreatingTransactionHash && _react2.default.createElement(
              'div',
              null,
              'Transaction:',
              _react2.default.createElement(
                'strong',
                null,
                _react2.default.createElement(
                  'a',
                  {
                    href: _appConfig2.default.link.bitpay + '/tx/' + flow.btcScriptCreatingTransactionHash,
                    target: '_blank',
                    rel: 'noopener noreferrer'
                  },
                  flow.btcScriptCreatingTransactionHash
                )
              )
            ),
            !flow.btcScriptValues && _react2.default.createElement(_InlineLoader2.default, null)
          ),
          flow.btcScriptValues && !flow.isFinished && !flow.isEthWithdrawn && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement('br', null),
            !flow.refundTxHex && _react2.default.createElement(
              _Button2.default,
              { brand: true, onClick: this.getRefundTxHex },
              ' Create refund hex'
            ),
            flow.refundTxHex && _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: 'https://wiki.swap.online/faq/my-swap-got-stuck-and-my-bitcoin-has-been-withdrawn-what-to-do/',
                  target: '_blank',
                  rel: 'noopener noreferrer'
                },
                'How refund your money ?'
              ),
              'Refund hex transaction:',
              _react2.default.createElement(
                'code',
                null,
                flow.refundTxHex
              )
            )
          ),
          (flow.step === 5 || flow.isEthContractFunded) && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              '4. ETH Owner received Bitcoin Script and Secret Hash. Waiting when he creates ETH Contract'
            ),
            !flow.isEthContractFunded && _react2.default.createElement(_InlineLoader2.default, null)
          ),
          flow.ethSwapCreationTransactionHash && _react2.default.createElement(
            'div',
            null,
            'Transaction:',
            _react2.default.createElement(
              'strong',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: _appConfig2.default.link.etherscan + '/tx/' + flow.ethSwapCreationTransactionHash,
                  target: '_blank',
                  rel: 'noopener noreferrer'
                },
                flow.ethSwapCreationTransactionHash
              )
            )
          ),
          (flow.step === 6 || flow.isEthWithdrawn) && _react2.default.createElement(
            'h3',
            null,
            '5. ETH Contract created and charged. Requesting withdrawal from ETH Contract. Please wait'
          ),
          flow.ethSwapWithdrawTransactionHash && _react2.default.createElement(
            'div',
            null,
            'Transaction:',
            _react2.default.createElement(
              'strong',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: _appConfig2.default.link.etherscan + '/tx/' + flow.ethSwapWithdrawTransactionHash,
                  target: '_blank',
                  rel: 'noreferrer noopener'
                },
                flow.ethSwapWithdrawTransactionHash
              )
            )
          ),
          flow.step === 6 && _react2.default.createElement(_InlineLoader2.default, null),
          flow.isEthWithdrawn && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              '6. Money was transferred to your wallet. Check the balance.'
            ),
            _react2.default.createElement(
              'h2',
              null,
              'Thank you for using Swap.Online!'
            )
          ),
          flow.step >= 5 && !flow.isFinished && _react2.default.createElement(
            'div',
            { style: { display: 'flex', alignItems: 'center' } },
            enabledButton && !flow.isEthWithdrawn && _react2.default.createElement(
              _Button2.default,
              { brand: true, onClick: this.tryRefund },
              'TRY REFUND'
            ),
            _react2.default.createElement(_Timer2.default, {
              lockTime: flow.btcScriptValues.lockTime * 1000,
              enabledButton: function enabledButton() {
                return _this2.setState({ enabledButton: true });
              }
            })
          ),
          flow.refundTransactionHash && _react2.default.createElement(
            'div',
            null,
            'Transaction:',
            _react2.default.createElement(
              'strong',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: _appConfig2.default.link.bitpay + '/tx/' + flow.refundTransactionHash,
                  target: '_blank',
                  rel: 'noreferrer noopener'
                },
                flow.refundTransactionHash
              )
            )
          )
        ),
        _react2.default.createElement('br', null),
        children
      );
    }
  }]);
  return BtcToEth;
}(_react.Component), _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.handleFlowStateUpdate = function (values) {
    var stepNumbers = {
      1: 'sign',
      2: 'submit-secret',
      3: 'sync-balance',
      4: 'lock-btc',
      5: 'wait-lock-eth',
      6: 'withdraw-eth',
      7: 'finish',
      8: 'end'
    };

    _actions2.default.analytics.swapEvent(stepNumbers[values.step], 'BTC-ETH');

    _this3.setState({
      flow: values
    });
  };

  this.overProgress = function () {
    var swap = _this3.swap;

    _actions2.default.loader.show(true, '', '', true, { swap: swap });
  };

  this.submitSecret = function () {
    var secret = _this3.state.secret;


    _this3.swap.flow.submitSecret(secret);
  };

  this.updateBalance = function () {
    _this3.swap.flow.syncBalance();
  };

  this.addGasPrice = function () {
    var gwei = new _bignumber.BigNumber(String(_this3.swap.flow.ethSwap.gasPrice)).plus(new _bignumber.BigNumber(1e9));
    _this3.swap.flow.ethSwap.addGasPrice(gwei);
    _this3.swap.flow.restartStep();
  };

  this.tryRefund = function () {
    _this3.swap.flow.tryRefund();
  };

  this.getRefundTxHex = function () {
    var flow = _this3.state.flow;


    if (flow.refundTxHex) {
      return flow.refundTxHex;
    } else if (flow.btcScriptValues) {
      _this3.swap.flow.getRefundTxHex();
    }
  };
}, _temp);
exports.default = BtcToEth;

/***/ }),
/* 1111 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"timer":"_2wnb2C"};

/***/ }),
/* 1112 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"button":"qJheS4","fullWidth":"_2Gzkvz","brand":"_3zY6WO","green":"_s-GvI","white":"ewAS27","gray":"_9dfBig","disabled":"_1WzQpi"};

/***/ }),
/* 1113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp, _initialiseProps;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(13);

var _actions2 = _interopRequireDefault(_actions);

var _appConfig = __webpack_require__(21);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _bignumber = __webpack_require__(91);

var _InlineLoader = __webpack_require__(79);

var _InlineLoader2 = _interopRequireDefault(_InlineLoader);

var _TimerButton = __webpack_require__(165);

var _TimerButton2 = _interopRequireDefault(_TimerButton);

var _Button = __webpack_require__(43);

var _Button2 = _interopRequireDefault(_Button);

var _Timer = __webpack_require__(164);

var _Timer2 = _interopRequireDefault(_Timer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EthToBtc = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(EthToBtc, _Component);

  function EthToBtc(_ref) {
    var swap = _ref.swap;
    (0, _classCallCheck3.default)(this, EthToBtc);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EthToBtc.__proto__ || (0, _getPrototypeOf2.default)(EthToBtc)).call(this));

    _initialiseProps.call(_this);

    _this.swap = swap;

    _this.state = {
      flow: _this.swap.flow.state,
      enabledButton: false,
      isShowingBitcoinScript: false
    };
    return _this;
  }

  (0, _createClass3.default)(EthToBtc, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.swap.on('state update', this.handleFlowStateUpdate);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.swap.off('state update', this.handleFlowStateUpdate);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var children = this.props.children;
      var _state = this.state,
          flow = _state.flow,
          enabledButton = _state.enabledButton,
          isShowingBitcoinScript = _state.isShowingBitcoinScript;


      return _react2.default.createElement(
        'div',
        null,
        this.swap.id && _react2.default.createElement(
          'strong',
          null,
          this.swap.sellAmount.toNumber(),
          ' ',
          this.swap.sellCurrency,
          ' \u27F6 ',
          this.swap.buyAmount.toNumber(),
          ' ',
          this.swap.buyCurrency
        ),
        !this.swap.id && (this.swap.isMy ? _react2.default.createElement(
          'h3',
          null,
          'This order doesn\'t have a buyer'
        ) : _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            'The order creator is offline. Waiting for him..'
          ),
          _react2.default.createElement(_InlineLoader2.default, null)
        )),
        flow.isWaitingForOwner && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            'Waiting for other user when he connect to the order'
          ),
          _react2.default.createElement(_InlineLoader2.default, null)
        ),
        flow.step === 1 && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'div',
            null,
            'Confirmation of the transaction is necessary for crediting the reputation. If a user does not bring the deal to the end he gets a negative reputation.'
          ),
          _react2.default.createElement(
            _TimerButton2.default,
            { timeLeft: 5, brand: true, onClick: this.signSwap },
            'Sign'
          ),
          (flow.isSignFetching || flow.signTransactionHash) && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h4',
              null,
              'Please wait. Confirmation processing'
            ),
            flow.signTransactionHash && _react2.default.createElement(
              'div',
              null,
              'Transaction:',
              _react2.default.createElement(
                'strong',
                null,
                _react2.default.createElement(
                  'a',
                  {
                    href: _appConfig2.default.link.etherscan + '/tx/' + flow.signTransactionHash,
                    target: '_blank',
                    rel: 'noopener noreferrer'
                  },
                  flow.signTransactionHash
                )
              )
            ),
            flow.isSignFetching && _react2.default.createElement(_InlineLoader2.default, null)
          )
        ),
        flow.isMeSigned && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            '2. Waiting BTC Owner creates Secret Key, creates BTC Script and charges it'
          ),
          flow.step === 2 && _react2.default.createElement(_InlineLoader2.default, null),
          flow.secretHash && flow.btcScriptValues && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              '3. Bitcoin Script created and charged. Please check the information below'
            ),
            _react2.default.createElement(
              'div',
              null,
              'Secret Hash: ',
              _react2.default.createElement(
                'strong',
                null,
                flow.secretHash
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              'Script address:',
              _react2.default.createElement(
                'strong',
                null,
                flow.btcScriptCreatingTransactionHash && _react2.default.createElement(
                  'a',
                  {
                    href: _appConfig2.default.link.bitpay + '/tx/' + flow.btcScriptCreatingTransactionHash,
                    target: '_blank',
                    rel: 'noopener noreferrer'
                  },
                  flow.btcScriptCreatingTransactionHash
                )
              )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              _react.Fragment,
              null,
              flow.btcScriptValues && _react2.default.createElement(
                'span',
                { onClick: this.toggleBitcoinScript },
                'Show bitcoin script'
              ),
              isShowingBitcoinScript && _react2.default.createElement(
                'pre',
                null,
                _react2.default.createElement(
                  'code',
                  null,
                  '\n  bitcoinjs.script.compile([\n    bitcoin.core.opcodes.OP_RIPEMD160,\n    Buffer.from(\'' + flow.btcScriptValues.secretHash + '\', \'hex\'),\n    bitcoin.core.opcodes.OP_EQUALVERIFY,\n\n    Buffer.from(\'' + flow.btcScriptValues.recipientPublicKey + '\', \'hex\'),\n    bitcoin.core.opcodes.OP_EQUAL,\n    bitcoin.core.opcodes.OP_IF,\n\n    Buffer.from(\'' + flow.btcScriptValues.recipientPublicKey + '\', \'hex\'),\n    bitcoin.core.opcodes.OP_CHECKSIG,\n\n    bitcoin.core.opcodes.OP_ELSE,\n\n    bitcoin.core.script.number.encode(' + flow.btcScriptValues.lockTime + '),\n    bitcoin.core.opcodes.OP_CHECKLOCKTIMEVERIFY,\n    bitcoin.core.opcodes.OP_DROP,\n    Buffer.from(\'' + flow.btcScriptValues.ownerPublicKey + '\', \'hex\'),\n    bitcoin.core.opcodes.OP_CHECKSIG,\n\n    bitcoin.core.opcodes.OP_ENDIF,\n  ])\n                      '
                )
              )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            flow.step === 3 && _react2.default.createElement(
              _react.Fragment,
              null,
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                _TimerButton2.default,
                { timeLeft: 5, brand: true, onClick: this.confirmBTCScriptChecked },
                'Everything is OK. Continue'
              )
            )
          ),
          flow.step === 4 && !flow.isBalanceEnough && !flow.isBalanceFetching && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              'Not enough money for this swap. Please fund the balance'
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'div',
                null,
                'Your balance: ',
                _react2.default.createElement(
                  'strong',
                  null,
                  flow.balance
                ),
                ' ',
                this.swap.sellCurrency
              ),
              _react2.default.createElement(
                'div',
                null,
                'Required balance: ',
                _react2.default.createElement(
                  'strong',
                  null,
                  this.swap.sellAmount.toNumber()
                ),
                ' ',
                this.swap.sellCurrency
              ),
              _react2.default.createElement(
                'div',
                null,
                'Your address: ',
                this.swap.flow.myEthAddress
              ),
              _react2.default.createElement('hr', null),
              _react2.default.createElement(
                'span',
                null,
                flow.address
              )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              _Button2.default,
              { brand: true, onClick: this.updateBalance },
              'Continue'
            )
          ),
          flow.step === 4 && flow.isBalanceFetching && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'div',
              null,
              'Checking balance..'
            ),
            _react2.default.createElement(_InlineLoader2.default, null)
          ),
          (flow.step >= 5 || flow.isEthContractFunded) && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              '4. Creating Ethereum Contract. Please wait, it will take a while'
            )
          ),
          flow.ethSwapCreationTransactionHash && _react2.default.createElement(
            'div',
            null,
            'Transaction:',
            _react2.default.createElement(
              'strong',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: _appConfig2.default.link.etherscan + '/tx/' + flow.ethSwapCreationTransactionHash,
                  target: '_blank',
                  rel: 'noopener noreferrer'
                },
                flow.ethSwapCreationTransactionHash
              )
            )
          ),
          flow.step === 5 && _react2.default.createElement(_InlineLoader2.default, null),
          flow.refundTransactionHash && _react2.default.createElement(
            'div',
            null,
            'Transaction:',
            _react2.default.createElement(
              'strong',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: _appConfig2.default.link.etherscan + '/tx/' + flow.refundTransactionHash,
                  target: '_blank',
                  rel: 'noopener noreferrer'
                },
                flow.refundTransactionHash
              )
            )
          ),
          (flow.step === 6 || flow.isEthWithdrawn) && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              '5. Waiting BTC Owner adds Secret Key to ETH Contact'
            ),
            !flow.isEthWithdrawn && _react2.default.createElement(_InlineLoader2.default, null)
          ),
          (flow.step === 7 || flow.isBtcWithdrawn) && _react2.default.createElement(
            'h3',
            null,
            '6. BTC Owner successfully took money from ETH Contract and left Secret Key. Requesting withdrawal from BTC Script. Please wait'
          ),
          flow.btcSwapWithdrawTransactionHash && _react2.default.createElement(
            'div',
            null,
            'Transaction:',
            _react2.default.createElement(
              'strong',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: _appConfig2.default.link.bitpay + '/tx/' + flow.btcSwapWithdrawTransactionHash,
                  target: '_blank',
                  rel: 'noopener noreferrer'
                },
                flow.btcSwapWithdrawTransactionHash
              )
            )
          ),
          flow.step === 7 && _react2.default.createElement(_InlineLoader2.default, null),
          flow.isBtcWithdrawn && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              '7. Money was transferred to your wallet. Check the balance.'
            ),
            _react2.default.createElement(
              'h2',
              null,
              'Thank you for using Swap.Online!'
            )
          ),
          flow.step >= 6 && !flow.isFinished && _react2.default.createElement(
            'div',
            { style: { display: 'flex', alignItems: 'center' } },
            enabledButton && !flow.isBtcWithdrawn && _react2.default.createElement(
              _Button2.default,
              { brand: true, onClick: this.tryRefund },
              'TRY REFUND'
            ),
            _react2.default.createElement(_Timer2.default, {
              lockTime: (flow.btcScriptValues.lockTime - 5400) * 1000,
              enabledButton: function enabledButton() {
                return _this2.setState({ enabledButton: true });
              }
            })
          ),
          flow.refundTransactionHash && _react2.default.createElement(
            'div',
            null,
            'Transaction:',
            _react2.default.createElement(
              'strong',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: _appConfig2.default.link.bitpay + '/tx/' + flow.refundTransactionHash,
                  target: '_blank',
                  rel: 'noreferrer noopener'
                },
                flow.refundTransactionHash
              )
            )
          )
        ),
        _react2.default.createElement('br', null),
        children
      );
    }
  }]);
  return EthToBtc;
}(_react.Component), _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.handleFlowStateUpdate = function (values) {
    var stepNumbers = {
      1: 'sign',
      2: 'wait-lock-btc',
      3: 'verify-script',
      4: 'sync-balance',
      5: 'lock-eth',
      6: 'wait-withdraw-eth',
      7: 'withdraw-btc',
      8: 'finish',
      9: 'end'
    };

    _actions2.default.analytics.swapEvent(stepNumbers[values.step], 'ETH-BTC');

    _this3.setState({
      flow: values
    });
  };

  this.overProgress = function () {
    var swap = _this3.swap;

    _actions2.default.loader.show(true, '', '', true, { swap: swap });
  };

  this.signSwap = function () {
    _this3.swap.flow.sign();
  };

  this.confirmBTCScriptChecked = function () {
    _this3.swap.flow.verifyBtcScript();
  };

  this.updateBalance = function () {
    _this3.swap.flow.syncBalance();
  };

  this.tryRefund = function () {
    _this3.swap.flow.tryRefund();
  };

  this.toggleBitcoinScript = function () {
    _this3.setState({
      isShowingBitcoinScript: !_this3.state.isShowingBitcoinScript
    });
  };

  this.addGasPrice = function () {
    var gwei = new _bignumber.BigNumber(String(_this3.swap.flow.ethSwap.gasPrice)).plus(new _bignumber.BigNumber(1e9));
    _this3.swap.flow.ethSwap.addGasPrice(gwei);
    _this3.swap.flow.restartStep();
  };
}, _temp);
exports.default = EthToBtc;

/***/ }),
/* 1114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _appConfig = __webpack_require__(21);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _bignumber = __webpack_require__(91);

var _InlineLoader = __webpack_require__(79);

var _InlineLoader2 = _interopRequireDefault(_InlineLoader);

var _TimerButton = __webpack_require__(165);

var _TimerButton2 = _interopRequireDefault(_TimerButton);

var _Button = __webpack_require__(43);

var _Button2 = _interopRequireDefault(_Button);

var _Timer = __webpack_require__(164);

var _Timer2 = _interopRequireDefault(_Timer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EthTokenToBtc = function (_Component) {
  (0, _inherits3.default)(EthTokenToBtc, _Component);

  function EthTokenToBtc(_ref) {
    var swap = _ref.swap;
    (0, _classCallCheck3.default)(this, EthTokenToBtc);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EthTokenToBtc.__proto__ || (0, _getPrototypeOf2.default)(EthTokenToBtc)).call(this));

    _this.handleFlowStateUpdate = function (values) {
      _this.setState({
        flow: values
      });
    };

    _this.signSwap = function () {
      _this.swap.flow.sign();
    };

    _this.confirmBTCScriptChecked = function () {
      _this.swap.flow.verifyBtcScript();
    };

    _this.updateBalance = function () {
      _this.swap.flow.syncBalance();
    };

    _this.tryRefund = function () {
      _this.swap.flow.tryRefund();
    };

    _this.toggleBitcoinScript = function () {
      _this.setState({
        isShowingBitcoinScript: !_this.state.isShowingBitcoinScript
      });
    };

    _this.addGasPrice = function () {
      var gwei = new _bignumber.BigNumber(String(_this.swap.flow.ethSwap.gasPrice)).plus(new _bignumber.BigNumber(1e10));
      _this.swap.flow.ethSwap.addGasPrice(gwei);
      _this.swap.flow.restartStep();
    };

    _this.swap = swap;

    _this.state = {
      flow: _this.swap.flow.state,
      enabledButton: false
    };
    return _this;
  }

  (0, _createClass3.default)(EthTokenToBtc, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.swap.on('state update', this.handleFlowStateUpdate);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.swap.off('state update', this.handleFlowStateUpdate);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var children = this.props.children;
      var _state = this.state,
          flow = _state.flow,
          enabledButton = _state.enabledButton,
          isShowingBitcoinScript = _state.isShowingBitcoinScript;


      return _react2.default.createElement(
        'div',
        null,
        this.swap.id && _react2.default.createElement(
          'strong',
          null,
          this.swap.sellAmount.toNumber(),
          ' ',
          this.swap.sellCurrency,
          ' \u27F6 ',
          this.swap.buyAmount.toNumber(),
          ' ',
          this.swap.buyCurrency
        ),
        flow.isWaitingForOwner && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            'Waiting for other user when he connect to the order'
          ),
          _react2.default.createElement(_InlineLoader2.default, null)
        ),
        (flow.step === 1 || flow.isMeSigned) && _react2.default.createElement(
          'h3',
          null,
          '1. Please confirm your participation to begin the deal'
        ),
        flow.step === 1 && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'div',
            null,
            'Confirmation of the transaction is necessary for crediting the reputation. If a user does not bring the deal to the end he gets a negative reputation.'
          ),
          !flow.isSignFetching && !flow.isMeSigned && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              _TimerButton2.default,
              { timeLeft: 5, brand: true, onClick: this.signSwap },
              'Confirm'
            )
          ),
          (flow.isSignFetching || flow.signTransactionHash) && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h4',
              null,
              'Please wait. Confirmation processing'
            ),
            flow.signTransactionHash && _react2.default.createElement(
              'div',
              null,
              'Transaction:',
              _react2.default.createElement(
                'strong',
                null,
                _react2.default.createElement(
                  'a',
                  {
                    href: _appConfig2.default.link.etherscan + '/tx/' + flow.signTransactionHash,
                    target: '_blank',
                    rel: 'noopener noreferrer'
                  },
                  flow.signTransactionHash
                )
              )
            ),
            flow.isSignFetching && _react2.default.createElement(_InlineLoader2.default, null)
          )
        ),
        flow.isMeSigned && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            '2. Waiting BTC Owner creates Secret Key, creates BTC Script and charges it'
          ),
          flow.step === 2 && _react2.default.createElement(_InlineLoader2.default, null),
          flow.secretHash && flow.btcScriptValues && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              '3. Bitcoin Script created and charged. Please check the information below'
            ),
            _react2.default.createElement(
              'div',
              null,
              'Secret Hash: ',
              _react2.default.createElement(
                'strong',
                null,
                flow.secretHash
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              'Script address:',
              _react2.default.createElement(
                'strong',
                null,
                flow.btcScriptCreatingTransactionHash && _react2.default.createElement(
                  'a',
                  {
                    href: _appConfig2.default.link.bitpay + '/tx/' + flow.btcScriptCreatingTransactionHash,
                    target: '_blank',
                    rel: 'noopener noreferrer'
                  },
                  flow.btcScriptCreatingTransactionHash
                )
              )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              _react.Fragment,
              null,
              flow.btcScriptValues && _react2.default.createElement(
                'span',
                { onClick: this.toggleBitcoinScript },
                'Show bitcoin script'
              ),
              isShowingBitcoinScript && _react2.default.createElement(
                'pre',
                null,
                _react2.default.createElement(
                  'code',
                  null,
                  '\n  bitcoinjs.script.compile([\n    bitcoin.core.opcodes.OP_RIPEMD160,\n    Buffer.from(\'' + flow.btcScriptValues.secretHash + '\', \'hex\'),\n    bitcoin.core.opcodes.OP_EQUALVERIFY,\n\n    Buffer.from(\'' + flow.btcScriptValues.recipientPublicKey + '\', \'hex\'),\n    bitcoin.core.opcodes.OP_EQUAL,\n    bitcoin.core.opcodes.OP_IF,\n\n    Buffer.from(\'' + flow.btcScriptValues.recipientPublicKey + '\', \'hex\'),\n    bitcoin.core.opcodes.OP_CHECKSIG,\n\n    bitcoin.core.opcodes.OP_ELSE,\n\n    bitcoin.core.script.number.encode(' + flow.btcScriptValues.lockTime + '),\n    bitcoin.core.opcodes.OP_CHECKLOCKTIMEVERIFY,\n    bitcoin.core.opcodes.OP_DROP,\n    Buffer.from(\'' + flow.btcScriptValues.ownerPublicKey + '\', \'hex\'),\n    bitcoin.core.opcodes.OP_CHECKSIG,\n\n    bitcoin.core.opcodes.OP_ENDIF,\n  ])\n                      '
                )
              )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            flow.step === 3 && _react2.default.createElement(
              _react.Fragment,
              null,
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                _TimerButton2.default,
                { timeLeft: 5, brand: true, onClick: this.confirmBTCScriptChecked },
                'Everything is OK. Continue'
              )
            )
          ),
          flow.step === 4 && !flow.isBalanceEnough && !flow.isBalanceFetching && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              'Not enough money for this swap. Please fund the balance'
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'div',
                null,
                'Your balance: ',
                _react2.default.createElement(
                  'strong',
                  null,
                  flow.balance
                ),
                ' ',
                this.swap.sellCurrency
              ),
              _react2.default.createElement(
                'div',
                null,
                'Required balance: ',
                _react2.default.createElement(
                  'strong',
                  null,
                  this.swap.sellAmount.toNumber()
                ),
                ' ',
                this.swap.sellCurrency
              ),
              _react2.default.createElement(
                'div',
                null,
                'Your address: ',
                this.swap.flow.myEthAddress
              ),
              _react2.default.createElement('hr', null),
              _react2.default.createElement(
                'span',
                null,
                flow.address
              )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              _TimerButton2.default,
              { brand: true, onClick: this.updateBalance },
              'Continue'
            )
          ),
          flow.step === 4 && flow.isBalanceFetching && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'div',
              null,
              'Checking balance..'
            ),
            _react2.default.createElement(_InlineLoader2.default, null)
          ),
          (flow.step >= 5 || flow.isEthContractFunded) && _react2.default.createElement(
            'h3',
            null,
            '4. Creating Ethereum Contract. Please wait, it will take a while'
          ),
          flow.ethSwapCreationTransactionHash && _react2.default.createElement(
            'div',
            null,
            'Transaction:',
            _react2.default.createElement(
              'strong',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: _appConfig2.default.link.etherscan + '/tx/' + flow.ethSwapCreationTransactionHash,
                  target: '_blank',
                  rel: 'noopener noreferrer'
                },
                flow.ethSwapCreationTransactionHash
              )
            )
          ),
          flow.step === 5 && _react2.default.createElement(_InlineLoader2.default, null),
          flow.refundTransactionHash && _react2.default.createElement(
            'div',
            null,
            'Transaction:',
            _react2.default.createElement(
              'strong',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: _appConfig2.default.link.etherscan + '/tx/' + flow.refundTransactionHash,
                  target: '_blank',
                  rel: 'noopener noreferrer'
                },
                flow.refundTransactionHash
              )
            )
          ),
          (flow.step === 6 || flow.isEthWithdrawn) && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              '5. Waiting BTC Owner adds Secret Key to ETH Contact'
            ),
            !flow.isEthWithdrawn && _react2.default.createElement(_InlineLoader2.default, null)
          ),
          (flow.step === 7 || flow.isBtcWithdrawn) && _react2.default.createElement(
            'h3',
            null,
            '6. BTC Owner successfully took money from ETH Contract and left Secret Key. Requesting withdrawal from BTC Script. Please wait'
          ),
          flow.btcSwapWithdrawTransactionHash && _react2.default.createElement(
            'div',
            null,
            'Transaction:',
            _react2.default.createElement(
              'strong',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: _appConfig2.default.link.bitpay + '/tx/' + flow.btcSwapWithdrawTransactionHash,
                  target: '_blank',
                  rel: 'noopener noreferrer'
                },
                flow.btcSwapWithdrawTransactionHash
              )
            )
          ),
          flow.step === 7 && _react2.default.createElement(_InlineLoader2.default, null),
          flow.isBtcWithdrawn && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              '7. Money was transferred to your wallet. Check the balance.'
            ),
            _react2.default.createElement(
              'h2',
              null,
              'Thank you for using Swap.Online!'
            )
          ),
          flow.step >= 6 && !flow.isFinished && _react2.default.createElement(
            'div',
            { style: { display: 'flex', alignItems: 'center' } },
            enabledButton && !flow.isBtcWithdrawn && _react2.default.createElement(
              _Button2.default,
              { brand: true, onClick: this.tryRefund },
              'TRY REFUND'
            ),
            _react2.default.createElement(_Timer2.default, {
              lockTime: (flow.btcScriptValues.lockTime - 5400) * 1000,
              enabledButton: function enabledButton() {
                return _this2.setState({ enabledButton: true });
              }
            })
          )
        ),
        _react2.default.createElement('br', null),
        children
      );
    }
  }]);
  return EthTokenToBtc;
}(_react.Component);

exports.default = EthTokenToBtc;

/***/ }),
/* 1115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _crypto = __webpack_require__(104);

var _crypto2 = _interopRequireDefault(_crypto);

var _appConfig = __webpack_require__(21);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _bignumber = __webpack_require__(91);

var _InlineLoader = __webpack_require__(79);

var _InlineLoader2 = _interopRequireDefault(_InlineLoader);

var _TimerButton = __webpack_require__(165);

var _TimerButton2 = _interopRequireDefault(_TimerButton);

var _Button = __webpack_require__(43);

var _Button2 = _interopRequireDefault(_Button);

var _Timer = __webpack_require__(164);

var _Timer2 = _interopRequireDefault(_Timer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BtcToEthToken = function (_Component) {
  (0, _inherits3.default)(BtcToEthToken, _Component);

  function BtcToEthToken(_ref) {
    var swap = _ref.swap;
    (0, _classCallCheck3.default)(this, BtcToEthToken);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BtcToEthToken.__proto__ || (0, _getPrototypeOf2.default)(BtcToEthToken)).call(this));

    _this.handleFlowStateUpdate = function (values) {
      _this.setState({
        flow: values
      });
    };

    _this.submitSecret = function () {
      var secret = _this.state.secret;


      _this.swap.flow.submitSecret(secret);
    };

    _this.updateBalance = function () {
      _this.swap.flow.syncBalance();
    };

    _this.addGasPrice = function () {
      var gwei = new _bignumber.BigNumber(String(_this.swap.flow.ethSwap.gasPrice)).plus(new _bignumber.BigNumber(1e9));
      _this.swap.flow.ethSwap.addGasPrice(gwei);
      _this.swap.flow.restartStep();
    };

    _this.getRefundTxHex = function () {
      var flow = _this.state.flow;


      if (flow.refundTxHex) {
        return flow.refundTxHex;
      } else if (flow.btcScriptValues) {
        _this.swap.flow.getRefundTxHex();
      }
    };

    _this.swap = swap;

    _this.state = {
      flow: _this.swap.flow.state,
      secret: _crypto2.default.randomBytes(32).toString('hex'),
      enabledButton: false
    };
    return _this;
  }

  (0, _createClass3.default)(BtcToEthToken, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.swap.on('state update', this.handleFlowStateUpdate);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.swap.off('state update', this.handleFlowStateUpdate);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var children = this.props.children;
      var _state = this.state,
          secret = _state.secret,
          flow = _state.flow,
          enabledButton = _state.enabledButton;


      return _react2.default.createElement(
        'div',
        null,
        this.swap.id && _react2.default.createElement(
          'strong',
          null,
          this.swap.sellAmount.toNumber(),
          ' ',
          this.swap.sellCurrency,
          ' \u27F6 ',
          this.swap.buyAmount.toNumber(),
          ' ',
          this.swap.buyCurrency
        ),
        flow.isWaitingForOwner && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            'We are waiting for a market maker. If it does not appear within 5 minutes, the swap will be canceled automatically.'
          ),
          _react2.default.createElement(_InlineLoader2.default, null)
        ),
        (flow.step === 1 || flow.isMeSigned) && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            '1. Waiting participant confirm this swap'
          ),
          _react2.default.createElement(_InlineLoader2.default, null)
        ),
        flow.isParticipantSigned && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            '2. Create a secret key'
          ),
          !flow.secretHash ? _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement('input', { type: 'text', placeholder: 'Secret Key', defaultValue: secret }),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              _TimerButton2.default,
              { timeLeft: 5, brand: true, onClick: this.submitSecret },
              'Confirm'
            )
          ) : _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'div',
              null,
              'Save the secret key! Otherwise there will be a chance you loose your money!'
            ),
            _react2.default.createElement(
              'div',
              null,
              'Secret Key: ',
              _react2.default.createElement(
                'strong',
                null,
                flow.secret
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              'Secret Hash: ',
              _react2.default.createElement(
                'strong',
                null,
                flow.secretHash
              )
            )
          ),
          flow.step === 3 && !flow.isBalanceEnough && !flow.isBalanceFetching && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              'Not enough money for this swap. Please charge the balance'
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'div',
                null,
                'Your balance: ',
                _react2.default.createElement(
                  'strong',
                  null,
                  flow.balance
                ),
                ' ',
                this.swap.sellCurrency
              ),
              _react2.default.createElement(
                'div',
                null,
                'Required balance: ',
                _react2.default.createElement(
                  'strong',
                  null,
                  this.swap.sellAmount.toNumber()
                ),
                ' ',
                this.swap.sellCurrency
              ),
              _react2.default.createElement(
                'div',
                null,
                'Your address: ',
                this.swap.flow.myBtcAddress
              ),
              _react2.default.createElement('hr', null),
              _react2.default.createElement(
                'span',
                null,
                flow.address
              )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              _TimerButton2.default,
              { brand: true, onClick: this.updateBalance },
              'Continue'
            )
          ),
          flow.step === 3 && flow.isBalanceFetching && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'div',
              null,
              'Checking balance..'
            ),
            _react2.default.createElement(_InlineLoader2.default, null)
          ),
          (flow.step === 4 || flow.btcScriptValues) && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              '3. Creating Bitcoin Script. Please wait, it will take a while'
            ),
            flow.btcScriptCreatingTransactionHash && _react2.default.createElement(
              'div',
              null,
              'Transaction:',
              _react2.default.createElement(
                'strong',
                null,
                _react2.default.createElement(
                  'a',
                  {
                    href: _appConfig2.default.link.bitpay + '/tx/' + flow.btcScriptCreatingTransactionHash,
                    target: '_blank',
                    rel: 'noopener noreferrer'
                  },
                  flow.btcScriptCreatingTransactionHash
                )
              )
            ),
            !flow.btcScriptValues && _react2.default.createElement(_InlineLoader2.default, null)
          ),
          flow.btcScriptValues && !flow.isFinished && !flow.isEthWithdrawn && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement('br', null),
            !flow.refundTxHex && _react2.default.createElement(
              _Button2.default,
              { brand: true, onClick: this.getRefundTxHex },
              ' Create refund hex'
            ),
            flow.refundTxHex && _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: 'https://wiki.swap.online/faq/my-swap-got-stuck-and-my-bitcoin-has-been-withdrawn-what-to-do/',
                  target: '_blank',
                  rel: 'noopener noreferrer'
                },
                'How refund your money ?'
              ),
              'Refund hex transaction:',
              _react2.default.createElement(
                'code',
                null,
                flow.refundTxHex
              )
            )
          ),
          (flow.step === 5 || flow.isEthContractFunded) && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              '4. ETH Owner received Bitcoin Script and Secret Hash. Waiting when he creates ETH Contract'
            ),
            !flow.isEthContractFunded && _react2.default.createElement(_InlineLoader2.default, null)
          ),
          flow.ethSwapCreationTransactionHash && _react2.default.createElement(
            'div',
            null,
            'Transaction:',
            _react2.default.createElement(
              'strong',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: _appConfig2.default.link.etherscan + '/tx/' + flow.ethSwapCreationTransactionHash,
                  target: '_blank',
                  rel: 'noopener noreferrer'
                },
                flow.ethSwapCreationTransactionHash
              )
            )
          ),
          (flow.step === 6 || flow.isEthWithdrawn) && _react2.default.createElement(
            'h3',
            null,
            '5. ETH Contract created and charged. Requesting withdrawal from ETH Contract. Please wait'
          ),
          flow.ethSwapWithdrawTransactionHash && _react2.default.createElement(
            'div',
            null,
            'Transaction:',
            _react2.default.createElement(
              'strong',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: _appConfig2.default.link.etherscan + '/tx/' + flow.ethSwapWithdrawTransactionHash,
                  target: '_blank',
                  rel: 'noreferrer noopener'
                },
                flow.ethSwapWithdrawTransactionHash
              )
            )
          ),
          flow.step === 6 && _react2.default.createElement(_InlineLoader2.default, null),
          flow.isEthWithdrawn && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              '6. Money was transferred to your wallet. Check the balance.'
            ),
            _react2.default.createElement(
              'h2',
              null,
              'Thank you for using Swap.Online!'
            )
          ),
          flow.step >= 5 && !flow.isFinished && _react2.default.createElement(
            'div',
            { style: { display: 'flex', alignItems: 'center' } },
            enabledButton && !flow.isEthWithdrawn && _react2.default.createElement(
              _Button2.default,
              { brand: true, onClick: this.tryRefund },
              'TRY REFUND'
            ),
            _react2.default.createElement(_Timer2.default, {
              lockTime: flow.btcScriptValues.lockTime * 1000,
              enabledButton: function enabledButton() {
                return _this2.setState({ enabledButton: true });
              }
            })
          ),
          flow.refundTransactionHash && _react2.default.createElement(
            'div',
            null,
            'Transaction:',
            _react2.default.createElement(
              'strong',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: _appConfig2.default.link.bitpay + '/tx/' + flow.refundTransactionHash,
                  target: '_blank',
                  rel: 'noreferrer noopener'
                },
                flow.refundTransactionHash
              )
            )
          )
        ),
        _react2.default.createElement('br', null),
        children
      );
    }
  }]);
  return BtcToEthToken;
}(_react.Component);

exports.default = BtcToEthToken;

/***/ }),
/* 1116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _crypto = __webpack_require__(104);

var _crypto2 = _interopRequireDefault(_crypto);

var _bitcoinjsLib = __webpack_require__(149);

var _bitcoinjsLib2 = _interopRequireDefault(_bitcoinjsLib);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _InlineLoader = __webpack_require__(79);

var _InlineLoader2 = _interopRequireDefault(_InlineLoader);

var _TransactionLink = __webpack_require__(482);

var _TransactionLink2 = _interopRequireDefault(_TransactionLink);

var _controls = __webpack_require__(67);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BtcToEos = function (_Component) {
  (0, _inherits3.default)(BtcToEos, _Component);

  function BtcToEos(_ref) {
    var swap = _ref.swap;
    (0, _classCallCheck3.default)(this, BtcToEos);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BtcToEos.__proto__ || (0, _getPrototypeOf2.default)(BtcToEos)).call(this));

    _this.handleFlowStateUpdate = function (values) {
      _this.setState({
        flow: values
      });
    };

    _this.submitSecret = function () {
      var fromHexString = function fromHexString(hexString) {
        return new Uint8Array(hexString.match(/.{1,2}/g).map(function (byte) {
          return parseInt(byte, 16);
        }));
      };

      var hash = function hash(secret) {
        return _bitcoinjsLib2.default.crypto.sha256(fromHexString(secret));
      };

      var secret = _crypto2.default.randomBytes(32).toString('hex');
      var secretHash = hash(secret).toString('hex');

      _this.swap.events.dispatch('submit secret', { secret: secret, secretHash: secretHash });

      _this.setState({
        isSubmitted: true
      });
    };

    _this.swap = swap;

    _this.state = {
      flow: _this.swap.flow.state,
      isSubmitted: false
    };
    return _this;
  }

  (0, _createClass3.default)(BtcToEos, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.swap.on('state update', this.handleFlowStateUpdate);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.swap.off('state update', this.handleFlowStateUpdate);
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var _state = this.state,
          flow = _state.flow,
          isSubmitted = _state.isSubmitted;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            '1. Generate secret key'
          ),
          !isSubmitted && _react2.default.createElement(
            _controls.Button,
            { brand: true, onClick: this.submitSecret },
            'Send secret'
          ),
          flow.secret && flow.secretHash && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'div',
              null,
              'Secret: ',
              _react2.default.createElement(
                'strong',
                null,
                flow.secret.toString('hex')
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              'Hash: ',
              _react2.default.createElement(
                'strong',
                null,
                flow.secretHash.toString('hex')
              )
            )
          )
        ),
        flow.step >= 2 && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            '2. Fund BTC script'
          ),
          flow.createTx === null && _react2.default.createElement(_InlineLoader2.default, null),
          flow.createTx !== null && _react2.default.createElement(_TransactionLink2.default, { type: 'BTC', id: flow.createTx })
        ),
        flow.step >= 3 && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            '3. Request to open EOS contract'
          ),
          flow.openTx === null && _react2.default.createElement(_InlineLoader2.default, null),
          flow.openTx !== null && _react2.default.createElement(_TransactionLink2.default, { type: 'EOS', id: flow.openTx })
        ),
        flow.step >= 4 && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            '4. Withdraw EOS from contract'
          ),
          flow.eosWithdrawTx === null && _react2.default.createElement(_InlineLoader2.default, null),
          flow.eosWithdrawTx !== null && _react2.default.createElement(_TransactionLink2.default, { type: 'EOS', id: flow.eosWithdrawTx })
        ),
        flow.step >= 5 && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            '5. Request to withdraw BTC from script'
          ),
          flow.btcWithdrawTx === null && _react2.default.createElement(_InlineLoader2.default, null),
          flow.btcWithdrawTx !== null && _react2.default.createElement(_TransactionLink2.default, { type: 'BTC', id: flow.btcWithdrawTx })
        ),
        _react2.default.createElement('br', null),
        children
      );
    }
  }]);
  return BtcToEos;
}(_react.Component);

exports.default = BtcToEos;

/***/ }),
/* 1117 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"link":"_1bLBL3"};

/***/ }),
/* 1118 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"twoButtonsInRow":"_2KYO-l"};

/***/ }),
/* 1119 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"trade-panel__change":"_2LOdkU"};

/***/ }),
/* 1120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _ReloadButton = __webpack_require__(1121);

var _ReloadButton2 = _interopRequireDefault(_ReloadButton);

var _ReloadIcon = __webpack_require__(1122);

var _ReloadIcon2 = _interopRequireDefault(_ReloadIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReloadButton = function ReloadButton(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return _react2.default.createElement(
    'div',
    { styleName: 'reloadButton', className: className, onClick: onClick },
    _react2.default.createElement(_ReloadIcon2.default, { styleName: 'icon' })
  );
};

exports.default = (0, _reactCssModules2.default)(ReloadButton, _ReloadButton2.default);

/***/ }),
/* 1121 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"reloadButton":"_2NgnzZ","icon":"tps3tZ"};

/***/ }),
/* 1122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reload = __webpack_require__(1123);

var _reload2 = _interopRequireDefault(_reload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReloadIcon = function ReloadIcon(_ref) {
  var className = _ref.className;
  return _react2.default.createElement('img', { className: className, src: _reload2.default, alt: 'reload icon' });
};

exports.default = ReloadIcon;

/***/ }),
/* 1123 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/reload_d8d88b.svg";

/***/ }),
/* 1124 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"removeButton":"_1Vm5zB","icon":"_1b1kpz"};

/***/ }),
/* 1125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _delete = __webpack_require__(1126);

var _delete2 = _interopRequireDefault(_delete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RemoveIcon = function RemoveIcon(_ref) {
  var className = _ref.className;
  return _react2.default.createElement('img', { className: className, src: _delete2.default, alt: 'remove icon' });
};

exports.default = RemoveIcon;

/***/ }),
/* 1126 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/delete_6ab99e.svg";

/***/ }),
/* 1127 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"withdrawButton":"_2yf2Si"};

/***/ }),
/* 1128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _InlineLoader = __webpack_require__(79);

var _InlineLoader2 = _interopRequireDefault(_InlineLoader);

var _TransactionLink = __webpack_require__(482);

var _TransactionLink2 = _interopRequireDefault(_TransactionLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EosToBtc = function (_Component) {
  (0, _inherits3.default)(EosToBtc, _Component);

  function EosToBtc(_ref) {
    var swap = _ref.swap;
    (0, _classCallCheck3.default)(this, EosToBtc);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EosToBtc.__proto__ || (0, _getPrototypeOf2.default)(EosToBtc)).call(this));

    _this.handleFlowStateUpdate = function (values) {
      _this.setState({
        flow: values
      });
    };

    _this.verifyScript = function () {
      _this.swap.events.dispatch('verify script');
    };

    _this.swap = swap;

    _this.state = {
      flow: _this.swap.flow.state
    };
    return _this;
  }

  (0, _createClass3.default)(EosToBtc, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.swap.on('state update', this.handleFlowStateUpdate);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.swap.off('state update', this.handleFlowStateUpdate);
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var flow = this.state.flow;


      if (flow.step === 2) {
        this.verifyScript();
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            '1. Request to fund BTC script'
          ),
          flow.createTx === null && _react2.default.createElement(_InlineLoader2.default, null),
          flow.createTx !== null && _react2.default.createElement(_TransactionLink2.default, { type: 'BTC', id: flow.createTx })
        ),
        flow.step >= 2 && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            '2. Verify BTC script'
          )
        ),
        flow.step >= 3 && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            '3. Open EOS contract'
          ),
          flow.openTx === null && _react2.default.createElement(_InlineLoader2.default, null),
          flow.openTx !== null && _react2.default.createElement(_TransactionLink2.default, { type: 'EOS', id: flow.openTx })
        ),
        flow.step >= 4 && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            '4. Request to withdraw EOS from contract'
          ),
          flow.eosWithdrawTx === null && _react2.default.createElement(_InlineLoader2.default, null),
          flow.eosWithdrawTx !== null && _react2.default.createElement(_TransactionLink2.default, { type: 'EOS', id: flow.eosWithdrawTx })
        ),
        flow.step >= 5 && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            '5. Withdraw BTC from script'
          ),
          flow.btcWithdrawTx === null && _react2.default.createElement(_InlineLoader2.default, null),
          flow.btcWithdrawTx !== null && _react2.default.createElement(_TransactionLink2.default, { type: 'BTC', id: flow.btcWithdrawTx })
        ),
        _react2.default.createElement('br', null),
        children
      );
    }
  }]);
  return EosToBtc;
}(_react.Component);

exports.default = EosToBtc;

/***/ }),
/* 1129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp, _initialiseProps;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(13);

var _actions2 = _interopRequireDefault(_actions);

var _redaction = __webpack_require__(14);

var _helpers = __webpack_require__(11);

var _Title = __webpack_require__(214);

var _Title2 = _interopRequireDefault(_Title);

var _PageHeadline = __webpack_require__(128);

var _PageHeadline2 = _interopRequireDefault(_PageHeadline);

var _SubTitle = __webpack_require__(92);

var _SubTitle2 = _interopRequireDefault(_SubTitle);

var _Orders = __webpack_require__(1133);

var _Orders2 = _interopRequireDefault(_Orders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = (_dec = (0, _redaction.connect)(function (_ref) {
  var filter = _ref.core.filter;
  return {
    filter: filter
  };
}), _dec(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home(_ref2) {
    var initialData = _ref2.initialData,
        _ref2$match$params = _ref2.match.params,
        buy = _ref2$match$params.buy,
        sell = _ref2$match$params.sell;
    (0, _classCallCheck3.default)(this, Home);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call(this));

    _initialiseProps.call(_this);

    var _ref3 = initialData || {},
        buyCurrency = _ref3.buyCurrency,
        sellCurrency = _ref3.sellCurrency;

    _this.state = {
      buyCurrency: buy || buyCurrency,
      sellCurrency: sell || sellCurrency
    };
    return _this;
  }

  (0, _createClass3.default)(Home, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          filter = _props.filter,
          _props$match$params = _props.match.params,
          buy = _props$match$params.buy,
          sell = _props$match$params.sell;


      if (!buy && !sell) {
        filter = filter.split('-');
        this.handelReplaceHistory(filter[1], filter[0]);

        this.setState(function () {
          return {
            buyCurrency: filter[0],
            sellCurrency: filter[1]
          };
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var orderId = this.props.match.params.orderId;
      var _state = this.state,
          buyCurrency = _state.buyCurrency,
          sellCurrency = _state.sellCurrency;


      return _react2.default.createElement(
        'section',
        { style: { position: 'relative', width: '100%' } },
        _react2.default.createElement(
          _PageHeadline2.default,
          null,
          _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              _Title2.default,
              null,
              buyCurrency,
              ' \u2192 ',
              sellCurrency,
              ' no limit exchange with 0 fee'
            ),
            _react2.default.createElement(
              _SubTitle2.default,
              null,
              'Choose the direction of exchange'
            )
          ),
          _react2.default.createElement(_Orders2.default, {
            handleSellCurrencySelect: this.handleSellCurrencySelect,
            handleBuyCurrencySelect: this.handleBuyCurrencySelect,
            buyCurrency: buyCurrency,
            sellCurrency: sellCurrency,
            flipCurrency: this.flipCurrency,
            orderId: orderId
          })
        )
      );
    }
  }]);
  return Home;
}(_react.Component), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.handleBuyCurrencySelect = function (_ref4) {
    var value = _ref4.value;
    var _state2 = _this2.state,
        sellCurrency = _state2.sellCurrency,
        buyCurrency = _state2.buyCurrency;


    if (value === sellCurrency) {
      sellCurrency = buyCurrency;
    }

    _this2.handelReplaceHistory(sellCurrency, value);

    _this2.setState({
      buyCurrency: value,
      sellCurrency: sellCurrency
    });
  };

  this.handleSellCurrencySelect = function (_ref5) {
    var value = _ref5.value;
    var _state3 = _this2.state,
        sellCurrency = _state3.sellCurrency,
        buyCurrency = _state3.buyCurrency;


    if (value === buyCurrency) {
      buyCurrency = sellCurrency;
    }

    _this2.handelReplaceHistory(value, buyCurrency);

    _this2.setState({
      buyCurrency: buyCurrency,
      sellCurrency: value
    });
  };

  this.handelReplaceHistory = function (sellCurrency, buyCurrency) {
    var history = _this2.props.history;


    _this2.setFilter(buyCurrency + '-' + sellCurrency);
    history.replace('' + _helpers.links.home + buyCurrency + '-' + sellCurrency);
  };

  this.flipCurrency = function () {
    var _state4 = _this2.state,
        buyCurrency = _state4.buyCurrency,
        sellCurrency = _state4.sellCurrency;

    var value = sellCurrency;

    sellCurrency = buyCurrency;
    buyCurrency = value;

    _this2.handelReplaceHistory(sellCurrency, buyCurrency);

    _this2.setState({
      buyCurrency: buyCurrency,
      sellCurrency: sellCurrency
    });
  };

  this.setFilter = function (filter) {
    _actions2.default.core.setFilter(filter);
  };
}, _temp)) || _class);
exports.default = Home;

/***/ }),
/* 1130 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"title":"_1Sjfw-"};

/***/ }),
/* 1131 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"headline":"_3j0ceJ"};

/***/ }),
/* 1132 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"subTitle":"_3J0EOu"};

/***/ }),
/* 1133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redaction = __webpack_require__(14);

var _Row = __webpack_require__(1134);

var _Row2 = _interopRequireDefault(_Row);

var _Table = __webpack_require__(112);

var _Table2 = _interopRequireDefault(_Table);

var _Table3 = __webpack_require__(113);

var _Table4 = _interopRequireDefault(_Table3);

var _MyOrders = __webpack_require__(1151);

var _MyOrders2 = _interopRequireDefault(_MyOrders);

var _SearchSwap = __webpack_require__(1158);

var _SearchSwap2 = _interopRequireDefault(_SearchSwap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var filterMyOrders = function filterMyOrders(orders, peer) {
  return orders.filter(function (order) {
    return order.owner.peer === peer;
  });
};

var filterOrders = function filterOrders(orders, filter) {
  return orders.filter(function (order) {
    return order.isMy ? order.buyCurrency.toLowerCase() + '-' + order.sellCurrency.toLowerCase() === filter : order.sellCurrency.toLowerCase() + '-' + order.buyCurrency.toLowerCase() === filter;
  }).sort(function (a, b) {
    return Number(b.buyAmount.dividedBy(b.sellAmount)) - Number(a.buyAmount.dividedBy(a.sellAmount));
  });
};

var Orders = (_dec = (0, _redaction.connect)(function (_ref) {
  var _ref$core = _ref.core,
      orders = _ref$core.orders,
      filter = _ref$core.filter,
      _ref$ipfs = _ref.ipfs,
      isOnline = _ref$ipfs.isOnline,
      peer = _ref$ipfs.peer,
      currencies = _ref.currencies.items;
  return {
    orders: filterOrders(orders, filter),
    myOrders: filterMyOrders(orders, peer),
    isOnline: isOnline,
    currencies: currencies
  };
}), _dec(_class = function (_Component) {
  (0, _inherits3.default)(Orders, _Component);

  function Orders() {
    (0, _classCallCheck3.default)(this, Orders);
    return (0, _possibleConstructorReturn3.default)(this, (Orders.__proto__ || (0, _getPrototypeOf2.default)(Orders)).apply(this, arguments));
  }

  (0, _createClass3.default)(Orders, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var _props = this.props,
          orders = _props.orders,
          myOrders = _props.myOrders;

      return orders !== nextProps.orders || myOrders !== nextProps.myOrders;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          sellCurrency = _props2.sellCurrency,
          buyCurrency = _props2.buyCurrency,
          handleSellCurrencySelect = _props2.handleSellCurrencySelect,
          handleBuyCurrencySelect = _props2.handleBuyCurrencySelect,
          flipCurrency = _props2.flipCurrency,
          currencies = _props2.currencies;

      var titles = ['OWNER', 'EXCHANGE', 'YOU BUY', 'YOU SELL', 'EXCHANGE RATE', 'ACTIONS'];
      var _props3 = this.props,
          isOnline = _props3.isOnline,
          orders = _props3.orders,
          myOrders = _props3.myOrders,
          orderId = _props3.orderId;


      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_MyOrders2.default, { myOrders: myOrders }),
        _react2.default.createElement(_SearchSwap2.default, {
          handleSellCurrencySelect: handleSellCurrencySelect,
          handleBuyCurrencySelect: handleBuyCurrencySelect,
          buyCurrency: buyCurrency,
          sellCurrency: sellCurrency,
          flipCurrency: flipCurrency,
          currencies: currencies
        }),
        _react2.default.createElement(
          'h3',
          null,
          'All orders'
        ),
        _react2.default.createElement(_Table2.default, {
          classTitle: _Table4.default.exchange,
          titles: titles,
          rows: orders,
          rowRender: function rowRender(row, index) {
            return _react2.default.createElement(_Row2.default, {
              key: index,
              orderId: orderId,
              row: row
            });
          },
          isLoading: !isOnline
        })
      );
    }
  }]);
  return Orders;
}(_react.Component)) || _class);
exports.default = Orders;

/***/ }),
/* 1134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _regenerator = __webpack_require__(54);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(55);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redaction = __webpack_require__(14);

var _actions = __webpack_require__(13);

var _actions2 = _interopRequireDefault(_actions);

var _helpers = __webpack_require__(11);

var _reactRouterDom = __webpack_require__(32);

var _Coins = __webpack_require__(167);

var _Coins2 = _interopRequireDefault(_Coins);

var _InlineLoader = __webpack_require__(79);

var _InlineLoader2 = _interopRequireDefault(_InlineLoader);

var _RequestButton = __webpack_require__(1147);

var _RequestButton2 = _interopRequireDefault(_RequestButton);

var _RemoveButton = __webpack_require__(485);

var _RemoveButton2 = _interopRequireDefault(_RemoveButton);

var _Avatar = __webpack_require__(295);

var _Avatar2 = _interopRequireDefault(_Avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Row = (_dec = (0, _redaction.connect)({
  peer: 'ipfs.peer'
}), _dec(_class = (_temp2 = _class2 = function (_Component) {
  (0, _inherits3.default)(Row, _Component);

  function Row() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Row);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Row.__proto__ || (0, _getPrototypeOf2.default)(Row)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      balance: 0
    }, _this.checkBalance = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(currency) {
        var balance;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _actions2.default[currency.toLowerCase()].getBalance(currency);

              case 2:
                balance = _context.sent;


                _this.setState({
                  balance: balance
                });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.handleGoTrade = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var balance;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _actions2.default.eth.getBalance();

            case 2:
              balance = _context2.sent;


              if (balance - 0.02 < 0) {
                _actions2.default.modals.open(_helpers.constants.modals.EthChecker, {});
              }

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    })), _this.removeOrder = function (orderId) {
      _actions2.default.core.removeOrder(orderId);
      _actions2.default.core.updateCore();
    }, _this.sendRequest = function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(orderId) {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this.setState({ isFetching: true });
                _context3.next = 3;
                return _this.handleGoTrade();

              case 3:

                _actions2.default.core.sendRequest(orderId, function (isAccepted) {
                  console.log('user has ' + (isAccepted ? 'accepted' : 'declined') + ' your request');

                  if (isAccepted) {
                    _this.setState({ redirect: true, isFetching: false });
                  } else {
                    _this.setState({ isFetching: false });
                  }
                });
                _actions2.default.core.updateCore();

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this2);
      }));

      return function (_x2) {
        return _ref4.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Row, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props$row = this.props.row,
          sellCurrency = _props$row.sellCurrency,
          isMy = _props$row.isMy,
          buyCurrency = _props$row.buyCurrency;

      if (isMy) {
        this.checkBalance(sellCurrency);
      } else {
        this.checkBalance(buyCurrency);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          balance = _state.balance,
          isFetching = _state.isFetching;
      var _props = this.props,
          orderId = _props.orderId,
          _props$row2 = _props.row,
          id = _props$row2.id,
          buyCurrency = _props$row2.buyCurrency,
          sellCurrency = _props$row2.sellCurrency,
          isMy = _props$row2.isMy,
          buyAmount = _props$row2.buyAmount,
          sellAmount = _props$row2.sellAmount,
          isRequested = _props$row2.isRequested,
          isProcessing = _props$row2.isProcessing,
          ownerPeer = _props$row2.owner.peer,
          peer = _props.peer;

      var amount = isMy ? sellAmount : buyAmount;

      if (this.state.redirect) {
        return _react2.default.createElement(_reactRouterDom.Redirect, { push: true, to: _helpers.links.swap + '/' + buyCurrency + '-' + sellCurrency + '/' + id });
      }

      return _react2.default.createElement(
        'tr',
        { style: orderId === id ? { background: 'rgba(0, 236, 0, 0.1)' } : {} },
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(_Avatar2.default, {
            value: ownerPeer,
            size: 45
          })
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(_Coins2.default, { names: [buyCurrency, sellCurrency] })
        ),
        _react2.default.createElement(
          'td',
          null,
          isMy ? buyAmount.toFixed(5) + ' ' + buyCurrency + ' ' : sellAmount.toFixed(5) + ' ' + sellCurrency + ' '
        ),
        _react2.default.createElement(
          'td',
          null,
          isMy ? sellAmount.toFixed(5) + ' ' + sellCurrency + ' ' : buyAmount.toFixed(5) + ' ' + buyCurrency + ' '
        ),
        _react2.default.createElement(
          'td',
          null,
          buyAmount.dividedBy(sellAmount).toFixed(5),
          isMy ? sellCurrency + '/' + buyCurrency : buyCurrency + '/' + sellCurrency
        ),
        _react2.default.createElement(
          'td',
          null,
          peer === ownerPeer ? _react2.default.createElement(_RemoveButton2.default, { onClick: function onClick() {
              return _this3.removeOrder(id);
            } }) : _react2.default.createElement(
            _react.Fragment,
            null,
            isRequested ? _react2.default.createElement(
              _react.Fragment,
              null,
              _react2.default.createElement(
                'div',
                { style: { color: 'red' } },
                'REQUESTING'
              ),
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: _helpers.links.swap + '/' + buyCurrency + '-' + sellCurrency + '/' + id },
                ' Go to the swap'
              )
            ) : isProcessing ? _react2.default.createElement(
              'span',
              null,
              'This order is in execution'
            ) : balance > Number(amount) ? isFetching ? _react2.default.createElement(
              _react.Fragment,
              null,
              _react2.default.createElement(_InlineLoader2.default, null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'span',
                null,
                'Please wait while we confirm your request'
              )
            ) : _react2.default.createElement(_RequestButton2.default, { onClick: function onClick() {
                return _this3.sendRequest(id);
              } }) : _react2.default.createElement(
              'span',
              null,
              'Insufficient funds'
            )
          )
        )
      );
    }
  }]);
  return Row;
}(_react.Component), _class2.propTypes = {
  row: _propTypes2.default.object
}, _temp2)) || _class);
exports.default = Row;

/***/ }),
/* 1135 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"coins":"_1TWvrk"};

/***/ }),
/* 1136 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"coin":"_1wYXYN","icon":"mK0HOH","letter":"_1Nd751"};

/***/ }),
/* 1137 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"text":"_3WoNsh"};

/***/ }),
/* 1138 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/btc_8edde4.svg";

/***/ }),
/* 1139 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/eth_aa4ec5.svg";

/***/ }),
/* 1140 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/icx_d6bb3b.svg";

/***/ }),
/* 1141 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/waves_de7e9b.svg";

/***/ }),
/* 1142 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/xrp_3be55b.svg";

/***/ }),
/* 1143 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/nim_e23886.svg";

/***/ }),
/* 1144 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/eos_a9a7a2.svg";

/***/ }),
/* 1145 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/swap_16a987.svg";

/***/ }),
/* 1146 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/usdt_4043a4.svg";

/***/ }),
/* 1147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _RequestButton = __webpack_require__(1148);

var _RequestButton2 = _interopRequireDefault(_RequestButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RequestButton = function RequestButton(_ref) {
  var onClick = _ref.onClick;
  return _react2.default.createElement('div', { styleName: 'button', onClick: onClick });
};

exports.default = (0, _reactCssModules2.default)(RequestButton, _RequestButton2.default, { allowMultiple: true });

/***/ }),
/* 1148 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"button":"_2R1jZb"};

/***/ }),
/* 1149 */,
/* 1150 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"avatar":"_2q028Y"};

/***/ }),
/* 1151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(13);

var _actions2 = _interopRequireDefault(_actions);

var _Table = __webpack_require__(112);

var _Table2 = _interopRequireDefault(_Table);

var _Table3 = __webpack_require__(113);

var _Table4 = _interopRequireDefault(_Table3);

var _RowFeeds = __webpack_require__(1152);

var _RowFeeds2 = _interopRequireDefault(_RowFeeds);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MyOrders = function (_PureComponent) {
  (0, _inherits3.default)(MyOrders, _PureComponent);

  function MyOrders() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, MyOrders);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MyOrders.__proto__ || (0, _getPrototypeOf2.default)(MyOrders)).call.apply(_ref, [this].concat(args))), _this), _this.removeOrder = function (orderId) {
      _actions2.default.core.removeOrder(orderId);
      _actions2.default.core.updateCore();
    }, _this.acceptRequest = function (orderId, peer) {
      _actions2.default.core.acceptRequest(orderId, peer);
      _actions2.default.core.updateCore();
    }, _this.declineRequest = function (orderId, peer) {
      _actions2.default.core.declineRequest(orderId, peer);
      _actions2.default.core.updateCore();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(MyOrders, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this.setState();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var titles = ['EXCHANGE', 'YOU BUY', 'YOU SELL', 'EXCHANGE RATE', 'SHARE', 'ACTIONS'];
      var myOrders = this.props.myOrders;


      if (myOrders.length === undefined || myOrders.length <= 0) {
        return null;
      }

      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          'h3',
          { style: { marginTop: '50px' } },
          'Your orders'
        ),
        _react2.default.createElement(_Table2.default, {
          classTitle: _Table4.default.exchange,
          titles: titles,
          rows: myOrders,
          rowRender: function rowRender(row, index) {
            return _react2.default.createElement(_RowFeeds2.default, {
              key: index,
              row: row,
              declineRequest: _this2.declineRequest,
              acceptRequest: _this2.acceptRequest,
              removeOrder: _this2.removeOrder
            });
          }
        })
      );
    }
  }]);
  return MyOrders;
}(_react.PureComponent);

exports.default = MyOrders;

/***/ }),
/* 1152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = __webpack_require__(11);

var _reactRouterDom = __webpack_require__(32);

var _reactCopyToClipboard = __webpack_require__(296);

var _reactCopyToClipboard2 = _interopRequireDefault(_reactCopyToClipboard);

var _RowFeeds = __webpack_require__(1156);

var _RowFeeds2 = _interopRequireDefault(_RowFeeds);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _shareAltSolid = __webpack_require__(1157);

var _shareAltSolid2 = _interopRequireDefault(_shareAltSolid);

var _Coins = __webpack_require__(167);

var _Coins2 = _interopRequireDefault(_Coins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RowFeeds = (_dec = (0, _reactCssModules2.default)(_RowFeeds2.default, { allowMultiple: true }), _dec(_class = (_temp2 = _class2 = function (_Component) {
  (0, _inherits3.default)(RowFeeds, _Component);

  function RowFeeds() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RowFeeds);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RowFeeds.__proto__ || (0, _getPrototypeOf2.default)(RowFeeds)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isLinkCopied: false
    }, _this.handleCopyLink = function () {
      _this.setState({
        isLinkCopied: true
      }, function () {
        setTimeout(function () {
          _this.setState({
            isLinkCopied: false
          });
        }, 500);
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RowFeeds, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps !== this.props) {
        this.setState();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var isLinkCopied = this.state.isLinkCopied;
      var _props = this.props,
          _props$row = _props.row,
          requests = _props$row.requests,
          buyAmount = _props$row.buyAmount,
          buyCurrency = _props$row.buyCurrency,
          sellAmount = _props$row.sellAmount,
          sellCurrency = _props$row.sellCurrency,
          exchangeRate = _props$row.exchangeRate,
          id = _props$row.id,
          declineRequest = _props.declineRequest,
          acceptRequest = _props.acceptRequest,
          removeOrder = _props.removeOrder;


      return _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(_Coins2.default, { names: [buyCurrency, sellCurrency] })
        ),
        _react2.default.createElement(
          'td',
          null,
          buyAmount.toFixed(5) + ' ' + buyCurrency
        ),
        _react2.default.createElement(
          'td',
          null,
          sellAmount.toFixed(5) + ' ' + sellCurrency
        ),
        _react2.default.createElement(
          'td',
          null,
          (exchangeRate || buyAmount / sellAmount).toFixed(5) + ' ' + buyCurrency + '/' + sellCurrency
        ),
        _react2.default.createElement(
          _reactCopyToClipboard2.default,
          {
            onCopy: this.handleCopyLink,
            text: window.location + '/' + id
          },
          _react2.default.createElement(
            'td',
            { style: { position: 'relative', cursor: 'pointer' } },
            isLinkCopied && _react2.default.createElement(
              'span',
              { style: { fontSize: '12px', position: 'absolute', top: '8px', left: 'calc(20%)' } },
              ' Copied ',
              _react2.default.createElement('br', null)
            ),
            _react2.default.createElement('img', { src: _shareAltSolid2.default, styleName: 'img', alt: 'share' }),
            _react2.default.createElement(
              'span',
              null,
              'Share'
            )
          )
        ),
        _react2.default.createElement(
          'td',
          null,
          Boolean(requests && requests.length) ? _react2.default.createElement(
            'div',
            { styleName: 'buttons' },
            _react2.default.createElement(
              'div',
              { styleName: 'delete', onClick: function onClick() {
                  return declineRequest(id, requests[0].peer);
                } },
              'Decline'
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: _helpers.links.swap + '/' + sellCurrency + '-' + buyCurrency + '/' + id },
              _react2.default.createElement(
                'div',
                { styleName: 'accept', onClick: function onClick() {
                    return acceptRequest(id, requests[0].peer);
                  } },
                'Accept'
              )
            )
          ) : _react2.default.createElement(
            'div',
            { styleName: 'delete', onClick: function onClick() {
                return removeOrder(id);
              } },
            ' Delete order'
          )
        )
      );
    }
  }]);
  return RowFeeds;
}(_react.Component), _class2.propTypes = {
  row: _propTypes2.default.object
}, _temp2)) || _class);
exports.default = RowFeeds;

/***/ }),
/* 1153 */,
/* 1154 */,
/* 1155 */,
/* 1156 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"userTooltip":"_3fhX3C","buy":"_2e83r_","accept":"_2ClHjy","sell":"_3kCurQ","delete":"_1RcmYq","currency":"_3St5DH","coin":"_1b2RPo","buttons":"_3L8CPG","arrow":"_1U9SQc","img":"p_tiXr","share":"_2dhcGr"};

/***/ }),
/* 1157 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/share-alt-solid_2c226f.svg";

/***/ }),
/* 1158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(13);

var _actions2 = _interopRequireDefault(_actions);

var _helpers = __webpack_require__(11);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _SearchSwap = __webpack_require__(1159);

var _SearchSwap2 = _interopRequireDefault(_SearchSwap);

var _Flip = __webpack_require__(484);

var _Flip2 = _interopRequireDefault(_Flip);

var _Button = __webpack_require__(43);

var _Button2 = _interopRequireDefault(_Button);

var _CurrencySelect = __webpack_require__(488);

var _CurrencySelect2 = _interopRequireDefault(_CurrencySelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CreateOfferButton = (_dec = (0, _reactCssModules2.default)(_SearchSwap2.default), _dec(_class = function (_Component) {
  (0, _inherits3.default)(CreateOfferButton, _Component);

  function CreateOfferButton() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CreateOfferButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CreateOfferButton.__proto__ || (0, _getPrototypeOf2.default)(CreateOfferButton)).call.apply(_ref, [this].concat(args))), _this), _this.createOffer = function () {
      _actions2.default.modals.open(_helpers.constants.modals.Offer, {
        buyCurrency: _this.props.buyCurrency,
        sellCurrency: _this.props.sellCurrency
      });
      _actions2.default.analytics.dataEvent('orderbook-click-createoffer-button');
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CreateOfferButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          buyCurrency = _props.buyCurrency,
          sellCurrency = _props.sellCurrency,
          flipCurrency = _props.flipCurrency,
          handleBuyCurrencySelect = _props.handleBuyCurrencySelect,
          handleSellCurrencySelect = _props.handleSellCurrencySelect,
          currencies = _props.currencies;


      return _react2.default.createElement(
        'div',
        { styleName: 'choice' },
        _react2.default.createElement(
          'div',
          { styleName: 'row' },
          _react2.default.createElement(
            'p',
            { styleName: 'text' },
            'You have '
          ),
          _react2.default.createElement(_CurrencySelect2.default, {
            styleName: 'currencySelect',
            selectedValue: sellCurrency,
            onSelect: handleSellCurrencySelect,
            currencies: currencies
          })
        ),
        _react2.default.createElement(_Flip2.default, { onClick: flipCurrency }),
        _react2.default.createElement(
          'div',
          { styleName: 'row' },
          _react2.default.createElement(
            'p',
            { styleName: 'text' },
            'You get'
          ),
          _react2.default.createElement(_CurrencySelect2.default, {
            styleName: 'currencySelect',
            selectedValue: buyCurrency,
            onSelect: handleBuyCurrencySelect,
            currencies: currencies
          })
        ),
        _react2.default.createElement(
          'div',
          { styleName: 'row' },
          _react2.default.createElement(
            _Button2.default,
            { brand: true, onClick: this.createOffer },
            'Create offer'
          )
        )
      );
    }
  }]);
  return CreateOfferButton;
}(_react.Component)) || _class);
exports.default = CreateOfferButton;

/***/ }),
/* 1159 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"currencySelect":"_3zIboc","choice":"_1TXLKZ","row":"_2lapE0","text":"_11f2Sj"};

/***/ }),
/* 1160 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Option = __webpack_require__(1162);

var _Option2 = _interopRequireDefault(_Option);

var _CurrencyIcon = __webpack_require__(486);

var _CurrencyIcon2 = _interopRequireDefault(_CurrencyIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Option = function Option(_ref) {
  var icon = _ref.icon,
      title = _ref.title;
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(_CurrencyIcon2.default, { styleName: 'icon', name: icon }),
    title
  );
};

exports.default = (0, _reactCssModules2.default)(Option, _Option2.default);

/***/ }),
/* 1162 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"icon":"wo-HER"};

/***/ }),
/* 1163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class, _class2, _temp, _initialiseProps;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(59);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactClickOutside = __webpack_require__(489);

var _reactClickOutside2 = _interopRequireDefault(_reactClickOutside);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _DropDown = __webpack_require__(1164);

var _DropDown2 = _interopRequireDefault(_DropDown);

var _toggle = __webpack_require__(1165);

var _toggle2 = _interopRequireDefault(_toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DropDown = (_dec = (0, _toggle2.default)(), _dec2 = (0, _reactCssModules2.default)(_DropDown2.default, { allowMultiple: true }), _dec(_class = _dec2(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(DropDown, _Component);

  function DropDown(_ref) {
    var initialValue = _ref.initialValue,
        selectedValue = _ref.selectedValue;
    (0, _classCallCheck3.default)(this, DropDown);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DropDown.__proto__ || (0, _getPrototypeOf2.default)(DropDown)).call(this));

    _initialiseProps.call(_this);

    _this.state = {
      selectedValue: initialValue || selectedValue || 0
    };
    return _this;
  }

  (0, _createClass3.default)(DropDown, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          items = _props.items,
          isToggleActive = _props.isToggleActive;


      var dropDownStyleName = (0, _classnames2.default)('dropDown', {
        'active': isToggleActive
      });

      return _react2.default.createElement(
        _reactClickOutside2.default,
        { onClickOutside: isToggleActive ? function () {
            return _this2.toggle();
          } : function () {} },
        _react2.default.createElement(
          'div',
          { styleName: dropDownStyleName, className: className },
          _react2.default.createElement(
            'div',
            { styleName: 'selectedItem', onClick: this.toggle },
            _react2.default.createElement('div', { styleName: 'arrow' }),
            this.renderSelectedItem()
          ),
          isToggleActive && _react2.default.createElement(
            'div',
            { styleName: 'select' },
            items.map(function (item) {
              return _react2.default.createElement(
                'div',
                {
                  key: item.value,
                  styleName: 'option',
                  onClick: function onClick() {
                    return _this2.handleOptionClick(item);
                  }
                },
                _this2.renderItem(item)
              );
            })
          )
        )
      );
    }
  }]);
  return DropDown;
}(_react.Component), _class2.propTypes = {
  initialValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  selectedValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    title: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired
  })),
  selectedItemRender: _propTypes2.default.func,
  itemRender: _propTypes2.default.func,
  onSelect: _propTypes2.default.func,
  isToggleActive: _propTypes2.default.bool.isRequired, // @toggle
  toggleOpen: _propTypes2.default.func.isRequired, // @toggle
  toggleClose: _propTypes2.default.func.isRequired // @toggle
}, _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.toggle = function () {
    var _props2 = _this3.props,
        isToggleActive = _props2.isToggleActive,
        toggleOpen = _props2.toggleOpen,
        toggleClose = _props2.toggleClose;


    if (isToggleActive) {
      toggleClose();
    } else {
      toggleOpen();
    }
  };

  this.handleOptionClick = function (item) {
    var _props3 = _this3.props,
        toggleClose = _props3.toggleClose,
        selectedValue = _props3.selectedValue,
        onSelect = _props3.onSelect;

    // if there is no passed `selectedValue` then change it

    if (typeof selectedValue === 'undefined') {
      _this3.setState({
        selectedValue: item.value
      });
    }

    // for example we'd like to change `selectedValue` manually
    if (typeof onSelect === 'function') {
      onSelect(item);
    }

    toggleClose();
  };

  this.renderSelectedItem = function () {
    var _props4 = _this3.props,
        items = _props4.items,
        selectedItemRender = _props4.selectedItemRender;


    var selectedValue = typeof _this3.props.selectedValue !== 'undefined' ? _this3.props.selectedValue : _this3.state.selectedValue;
    var selectedItem = items.find(function (_ref2) {
      var value = _ref2.value;
      return value === selectedValue;
    });

    if (typeof selectedItemRender === 'function') {
      return selectedItemRender(selectedItem);
    }

    return selectedItem.title;
  };

  this.renderItem = function (item) {
    var itemRender = _this3.props.itemRender;


    if (typeof itemRender === 'function') {
      return itemRender(item);
    }

    return item.title;
  };
}, _temp)) || _class) || _class);
exports.default = DropDown;

/***/ }),
/* 1164 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"dropDown":"_3TGsDm","active":"_241k3D","arrow":"_4VDBhE","selectedItem":"_30-6Oj","select":"_2ukQw7","option":"_1fOZbQ"};

/***/ }),
/* 1165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(51);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { processClick: false };
  return function (Component) {
    return function (_PureComponent) {
      (0, _inherits3.default)(WrappedComponent, _PureComponent);

      function WrappedComponent() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, WrappedComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = WrappedComponent.__proto__ || (0, _getPrototypeOf2.default)(WrappedComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
          isToggleActive: false
        }, _this.toggleClose = function (event) {
          if (options.processClick) {
            event.stopPropagation();

            document.removeEventListener('click', _this.toggleClose);
          }

          _this.setState({
            isToggleActive: false
          });
        }, _this.toggleOpen = function (event) {
          var isToggleActive = _this.state.isToggleActive;


          if (isToggleActive) {
            return;
          }

          if (options.processClick) {
            event.stopPropagation();

            document.addEventListener('click', _this.toggleClose);
          }

          _this.setState({
            isToggleActive: true
          });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
      }

      (0, _createClass3.default)(WrappedComponent, [{
        key: 'render',
        value: function render() {

          return _react2.default.createElement(Component, (0, _extends3.default)({}, this.props, this.state, {
            toggleOpen: this.toggleOpen,
            toggleClose: this.toggleClose
          }));
        }
      }]);
      return WrappedComponent;
    }(_react.PureComponent);
  };
};

/***/ }),
/* 1166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(51);

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = __webpack_require__(82);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _keys = __webpack_require__(62);

var _keys2 = _interopRequireDefault(_keys);

var _dec, _dec2, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDeviceDetect = __webpack_require__(216);

var _redaction = __webpack_require__(14);

var _helpers = __webpack_require__(11);

var _actions = __webpack_require__(13);

var _actions2 = _interopRequireDefault(_actions);

var _Table = __webpack_require__(112);

var _Table2 = _interopRequireDefault(_Table);

var _Table3 = __webpack_require__(113);

var _Table4 = _interopRequireDefault(_Table3);

var _Confirm = __webpack_require__(1167);

var _Confirm2 = _interopRequireDefault(_Confirm);

var _SaveKeys = __webpack_require__(1169);

var _SaveKeys2 = _interopRequireDefault(_SaveKeys);

var _PageHeadline = __webpack_require__(128);

var _PageHeadline2 = _interopRequireDefault(_PageHeadline);

var _SubTitle = __webpack_require__(92);

var _SubTitle2 = _interopRequireDefault(_SubTitle);

var _controls = __webpack_require__(67);

var _Wallet = __webpack_require__(1173);

var _Wallet2 = _interopRequireDefault(_Wallet);

var _Row = __webpack_require__(1174);

var _Row2 = _interopRequireDefault(_Row);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _reactRouter = __webpack_require__(71);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wallet = (_dec = (0, _redaction.connect)(function (_ref) {
  var hiddenCoinsList = _ref.core.hiddenCoinsList,
      _ref$user = _ref.user,
      ethData = _ref$user.ethData,
      btcData = _ref$user.btcData,
      tokensData = _ref$user.tokensData,
      eosData = _ref$user.eosData,
      nimData = _ref$user.nimData,
      usdtData = _ref$user.usdtData,
      currencies = _ref.currencies.items;
  return {
    tokens: (0, _keys2.default)(tokensData).map(function (k) {
      return tokensData[k];
    }),
    items: [ethData, btcData, eosData, usdtData /* eosData  nimData */],
    currencies: currencies,
    hiddenCoinsList: hiddenCoinsList
  };
}), _dec2 = (0, _reactCssModules2.default)(_Wallet2.default, { allowMultiple: true }), (0, _reactRouter.withRouter)(_class = _dec(_class = _dec2(_class = function (_Component) {
  (0, _inherits3.default)(Wallet, _Component);

  function Wallet() {
    var _ref2;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Wallet);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = Wallet.__proto__ || (0, _getPrototypeOf2.default)(Wallet)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      view: 'off'
    }, _this.handleClear =  true ? function () {} : function (event) {
      event.preventDefault();
      window.localStorage.clear();
      window.location.reload();
    }, _this.handleShowMore = function () {
      _this.props.history.push('/coins');
    }, _this.handleDownload = function () {
      _actions2.default.user.downloadPrivateKeys();
      _this.changeView('checkKeys');
    }, _this.handleConfirm = function () {
      _this.changeView('checkKeys');
      localStorage.setItem(_helpers.constants.localStorage.privateKeysSaved, true);
    }, _this.handleImportKeys = function () {
      _actions2.default.modals.open(_helpers.constants.modals.ImportKeys, {});
    }, _this.changeView = function (view) {
      _this.setState({
        view: view
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Wallet, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (localStorage.getItem(_helpers.constants.localStorage.privateKeysSaved)) {
        this.changeView('checkKeys');
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _actions2.default.user.getBalances();
      _actions2.default.analytics.dataEvent('open-page-balances');
      // if (!localStorage.getItem(constants.localStorage.privateKeysSaved)) {
      //   actions.modals.open(constants.modals.PrivateKeys, {})
      // }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var view = this.state.view;
      var _props = this.props,
          items = _props.items,
          tokens = _props.tokens,
          currencies = _props.currencies,
          hiddenCoinsList = _props.hiddenCoinsList;

      var titles = ['Coin', !_reactDeviceDetect.isMobile && 'Name', 'Balance', !_reactDeviceDetect.isMobile && 'Address', _reactDeviceDetect.isMobile ? 'Receive, send, swap' : 'Actions'];

      return _react2.default.createElement(
        'section',
        null,
        _react2.default.createElement(
          _PageHeadline2.default,
          null,
          _react2.default.createElement(
            _SubTitle2.default,
            null,
            'Swap.Online - Cryptocurrency Wallet with Atomic Swap Exchange'
          )
        ),
        _react2.default.createElement(_Confirm2.default, {
          title: 'Are you sure ?',
          isConfirm: function isConfirm() {
            return _this2.handleConfirm();
          },
          isReject: function isReject() {
            return _this2.changeView('off');
          },
          animation: view === 'on'
        }),
        _react2.default.createElement(_Table2.default, {
          classTitle: _Table4.default.wallet,
          titles: titles,
          rows: [].concat((0, _toConsumableArray3.default)(items), (0, _toConsumableArray3.default)(tokens)).filter(function (coin) {
            return !hiddenCoinsList.includes(coin.currency);
          }),
          rowRender: function rowRender(row, index) {
            return _react2.default.createElement(_Row2.default, (0, _extends3.default)({ key: index }, row, { currencies: currencies, hiddenCoinsList: hiddenCoinsList }));
          }
        }),
        _react2.default.createElement(
          'div',
          null,
          view === 'off' && _react2.default.createElement(_SaveKeys2.default, { isDownload: this.handleDownload, isChange: function isChange() {
              return _this2.changeView('on');
            } }),
          false && _react2.default.createElement(
            _controls.WithdrawButton,
            { onClick: this.handleClear },
            'Exit'
          ),
          _react2.default.createElement(
            _controls.WithdrawButton,
            { onClick: this.handleDownload },
            'Download keys'
          ),
          _react2.default.createElement(
            _controls.WithdrawButton,
            { onClick: this.handleImportKeys },
            'Import keys'
          ),
          hiddenCoinsList.length !== 0 && _react2.default.createElement(
            _controls.WithdrawButton,
            { onClick: this.handleShowMore },
            'Show more coins (',
            hiddenCoinsList.length,
            ')'
          )
        )
      );
    }
  }]);
  return Wallet;
}(_react.Component)) || _class) || _class) || _class);
exports.default = Wallet;

/***/ }),
/* 1167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Confirm = __webpack_require__(1168);

var _Confirm2 = _interopRequireDefault(_Confirm);

var _SubTitle = __webpack_require__(92);

var _SubTitle2 = _interopRequireDefault(_SubTitle);

var _Button = __webpack_require__(43);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Confirm = function Confirm(_ref) {
  var isConfirm = _ref.isConfirm,
      isReject = _ref.isReject,
      title = _ref.title,
      animation = _ref.animation;
  return _react2.default.createElement(
    'div',
    { styleName: animation ? 'confirm animation' : 'confirm' },
    _react2.default.createElement(
      _SubTitle2.default,
      null,
      title
    ),
    _react2.default.createElement(
      'div',
      { styleName: 'row' },
      _react2.default.createElement(
        _Button2.default,
        { brand: true, onClick: isConfirm },
        'Yes'
      ),
      _react2.default.createElement(
        _Button2.default,
        { brand: true, onClick: isReject },
        'No'
      )
    )
  );
};

exports.default = (0, _reactCssModules2.default)(Confirm, _Confirm2.default, { allowMultiple: true });

/***/ }),
/* 1168 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"confirm":"_3hz-0j","animation":"_2QfucO","open":"_1BY5jO","row":"_3sMVTN"};

/***/ }),
/* 1169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redaction = __webpack_require__(14);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _SaveKeys = __webpack_require__(1170);

var _SaveKeys2 = _interopRequireDefault(_SaveKeys);

var _Field = __webpack_require__(1171);

var _Field2 = _interopRequireDefault(_Field);

var _Button = __webpack_require__(43);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SaveKeys = (_dec = (0, _redaction.connect)(function (_ref) {
  var _ref$user = _ref.user,
      ethData = _ref$user.ethData,
      btcData = _ref$user.btcData,
      eosData = _ref$user.eosData;
  return {
    btcData: btcData, ethData: ethData, eosData: eosData
  };
}), _dec2 = (0, _reactCssModules2.default)(_SaveKeys2.default), _dec(_class = _dec2(_class = function (_Component) {
  (0, _inherits3.default)(SaveKeys, _Component);

  function SaveKeys() {
    (0, _classCallCheck3.default)(this, SaveKeys);
    return (0, _possibleConstructorReturn3.default)(this, (SaveKeys.__proto__ || (0, _getPrototypeOf2.default)(SaveKeys)).apply(this, arguments));
  }

  (0, _createClass3.default)(SaveKeys, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          ethData = _props.ethData,
          btcData = _props.btcData,
          eosData = _props.eosData,
          isChange = _props.isChange,
          isDownload = _props.isDownload;


      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          'div',
          { styleName: 'title' },
          'These are your private keys. Download the keys by  clicking on ',
          _react2.default.createElement('br', null),
          'the button or take a screenshot of this page, then confirm it and click here. ',
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'span',
            { styleName: 'linked', onClick: isChange },
            'I saved the keys in a safe place'
          )
        ),
        _react2.default.createElement(
          'div',
          { styleName: 'row' },
          _react2.default.createElement(
            _Button2.default,
            { brand: true, onClick: isDownload },
            'Download'
          ),
          _react2.default.createElement(
            'div',
            { styleName: 'cell' },
            _react2.default.createElement(_Field2.default, {
              label: ethData.currency,
              privateKey: ethData.privateKey.toString()
            }),
            _react2.default.createElement(_Field2.default, {
              label: btcData.currency,
              privateKey: btcData.privateKey.toString()
            }),
            typeof eosData.masterPrivateKey === 'string' && _react2.default.createElement(_Field2.default, {
              label: eosData.currency,
              privateKey: eosData.masterPrivateKey.toString()
            })
          )
        )
      );
    }
  }]);
  return SaveKeys;
}(_react.Component)) || _class) || _class);
exports.default = SaveKeys;

/***/ }),
/* 1170 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"title":"_34whwW","row":"_1iYant","cell":"_3ZIa3Z","linked":"_1wQQoQ"};

/***/ }),
/* 1171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Field = __webpack_require__(1172);

var _Field2 = _interopRequireDefault(_Field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Field = function Field(_ref) {
  var privateKey = _ref.privateKey,
      label = _ref.label;
  return _react2.default.createElement(
    'div',
    { styleName: 'row' },
    _react2.default.createElement(
      'strong',
      null,
      label,
      ':  '
    ),
    ' ',
    privateKey
  );
};

exports.default = (0, _reactCssModules2.default)(Field, _Field2.default);

/***/ }),
/* 1172 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"row":"_37f8Rw"};

/***/ }),
/* 1173 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"coinsActionsBlock":"_1ChnDp"};

/***/ }),
/* 1174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _keys = __webpack_require__(62);

var _keys2 = _interopRequireDefault(_keys);

var _regenerator = __webpack_require__(54);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(55);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(13);

var _actions2 = _interopRequireDefault(_actions);

var _helpers = __webpack_require__(11);

var _appConfig = __webpack_require__(21);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _reactDeviceDetect = __webpack_require__(216);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Row = __webpack_require__(1175);

var _Row2 = _interopRequireDefault(_Row);

var _reactCopyToClipboard = __webpack_require__(296);

var _reactCopyToClipboard2 = _interopRequireDefault(_reactCopyToClipboard);

var _CoinInteractive = __webpack_require__(1176);

var _CoinInteractive2 = _interopRequireDefault(_CoinInteractive);

var _InlineLoader = __webpack_require__(79);

var _InlineLoader2 = _interopRequireDefault(_InlineLoader);

var _WithdrawButton = __webpack_require__(294);

var _WithdrawButton2 = _interopRequireDefault(_WithdrawButton);

var _LinkAcount = __webpack_require__(1179);

var _LinkAcount2 = _interopRequireDefault(_LinkAcount);

var _reactRouter = __webpack_require__(71);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Row = (_dec = (0, _reactCssModules2.default)(_Row2.default), (0, _reactRouter.withRouter)(_class = _dec(_class = function (_Component) {
  (0, _inherits3.default)(Row, _Component);

  function Row() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Row);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Row.__proto__ || (0, _getPrototypeOf2.default)(Row)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isBalanceFetching: false,
      viewText: false,
      tradeAllowed: false,
      isAddressCopied: false
    }, _this.handleReloadBalance = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var _this$state, isBalanceFetching, token, action, currency;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$state = _this.state, isBalanceFetching = _this$state.isBalanceFetching, token = _this$state.token;

              if (!isBalanceFetching) {
                _context.next = 3;
                break;
              }

              return _context.abrupt('return', null);

            case 3:

              _this.setState({
                isBalanceFetching: true
              });
              action = void 0;
              currency = _this.props.currency;


              currency = currency.toLowerCase();

              if (token) {
                action = _actions2.default.token.getBalance(currency);
              } else {
                action = _actions2.default[currency].getBalance();
              }

              _context.next = 10;
              return action;

            case 10:

              _this.setState(function () {
                return {
                  isBalanceFetching: false
                };
              });

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _this.handleCopyAddress = function () {
      _this.setState({
        isAddressCopied: true
      }, function () {
        setTimeout(function () {
          _this.setState({
            isAddressCopied: false
          });
        }, 500);
      });
    }, _this.handleEosLogin = function () {
      _actions2.default.modals.open(_helpers.constants.modals.Eos, {});
    }, _this.handleWithdraw = function () {
      var _this$props = _this.props,
          currency = _this$props.currency,
          address = _this$props.address,
          contractAddress = _this$props.contractAddress,
          decimals = _this$props.decimals,
          balance = _this$props.balance,
          token = _this$props.token;


      _actions2.default.analytics.dataEvent('balances-withdraw-' + currency.toLowerCase());
      _actions2.default.modals.open(_helpers.constants.modals.Withdraw, {
        currency: currency,
        address: address,
        contractAddress: contractAddress,
        decimals: decimals,
        token: token,
        balance: balance
      });
    }, _this.handleReceive = function () {
      var _this$props2 = _this.props,
          currency = _this$props2.currency,
          address = _this$props2.address;


      _actions2.default.modals.open(_helpers.constants.modals.ReceiveModal, {
        currency: currency,
        address: address
      });
    }, _this.handleGoTrade = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(link) {
        var balance;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _actions2.default.eth.getBalance();

              case 2:
                balance = _context2.sent;


                if (balance - 0.02 > 0) {
                  _this.props.history.push(link);
                } else {
                  _actions2.default.modals.open(_helpers.constants.modals.EthChecker, {});
                }

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }(), _this.handleMarkCoinAsHidden = function (coin) {
      _actions2.default.core.markCoinAsHidden(coin);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Row, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          currency = _props.currency,
          currencies = _props.currencies;


      this.setState({
        tradeAllowed: !!currencies.find(function (c) {
          return c.value === currency.toLowerCase();
        })
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var hiddenCoinsList = this.props.hiddenCoinsList;


      (0, _keys2.default)(_appConfig2.default.tokens).forEach(function (name) {
        if (!hiddenCoinsList.includes(name.toUpperCase())) {
          _actions2.default.core.markCoinAsVisible(name.toUpperCase());
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          isBalanceFetching = _state.isBalanceFetching,
          tradeAllowed = _state.tradeAllowed,
          isAddressCopied = _state.isAddressCopied;
      var _props2 = this.props,
          currency = _props2.currency,
          balance = _props2.balance,
          isBalanceFetched = _props2.isBalanceFetched,
          address = _props2.address,
          contractAddress = _props2.contractAddress,
          unconfirmedBalance = _props2.unconfirmedBalance;


      return _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(_CoinInteractive2.default, { onHide: this.handleMarkCoinAsHidden, name: currency, size: 40 })
        ),
        !_reactDeviceDetect.isMobile && _react2.default.createElement(
          'td',
          null,
          currency
        ),
        _react2.default.createElement(
          'td',
          null,
          !isBalanceFetched || isBalanceFetching ? _react2.default.createElement(_InlineLoader2.default, null) : _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement('i', { className: 'fas fa-sync-alt', styleName: 'icon', onClick: this.handleReloadBalance }),
            _react2.default.createElement(
              'span',
              null,
              String(balance).length > 5 ? balance.toFixed(5) : balance
            ),
            currency === 'BTC' && currency === 'USDT' && unconfirmedBalance !== 0 && _react2.default.createElement(
              _react.Fragment,
              null,
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'span',
                { style: { fontSize: '12px', color: '#c9c9c9' } },
                'Unconfirmed ',
                unconfirmedBalance
              )
            )
          )
        ),
        !_reactDeviceDetect.isMobile && _react2.default.createElement(
          _reactCopyToClipboard2.default,
          {
            text: address,
            onCopy: this.handleCopyAddress
          },
          _react2.default.createElement(
            'td',
            { style: { position: 'relative' } },
            !contractAddress ? _react2.default.createElement(
              _react.Fragment,
              null,
              currency !== 'EOS' && _react2.default.createElement('i', { className: 'far fa-copy', styleName: 'icon' }),
              _react2.default.createElement(
                _LinkAcount2.default,
                { type: currency, address: address },
                address
              )
            ) : _react2.default.createElement(
              _react.Fragment,
              null,
              _react2.default.createElement('i', { className: 'far fa-copy', styleName: 'icon' }),
              _react2.default.createElement(
                _LinkAcount2.default,
                { type: currency, contractAddress: contractAddress, address: address },
                address
              )
            ),
            currency === 'EOS' && address === '' && _react2.default.createElement(
              'button',
              { styleName: 'button', onClick: this.handleEosLogin },
              'Login'
            ),
            isAddressCopied && _react2.default.createElement(
              'p',
              { styleName: 'copied' },
              'Address copied to clipboard'
            )
          )
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              _WithdrawButton2.default,
              { onClick: this.handleWithdraw, styleName: 'marginRight' },
              _react2.default.createElement('i', { className: 'fas fa-arrow-alt-circle-down' }),
              _react2.default.createElement(
                'span',
                null,
                'Send'
              )
            ),
            _reactDeviceDetect.isMobile && _react2.default.createElement(
              _WithdrawButton2.default,
              { onClick: this.handleReceive, styleName: 'marginRight' },
              _react2.default.createElement('i', { className: 'fas fa-arrow-alt-circle-up' }),
              _react2.default.createElement(
                'span',
                null,
                'Receive'
              )
            ),
            tradeAllowed && _react2.default.createElement(
              _WithdrawButton2.default,
              { onClick: function onClick() {
                  return _this3.handleGoTrade('/' + currency.toLowerCase());
                } },
              _react2.default.createElement('i', { className: 'fas fa-exchange-alt' }),
              _react2.default.createElement(
                'span',
                null,
                'Swap'
              )
            )
          )
        )
      );
    }
  }]);
  return Row;
}(_react.Component)) || _class) || _class);
exports.default = Row;

/***/ }),
/* 1175 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"marginRight":"qq8rKP","copied":"_3b4eD1","icon":"_2718ee","button":"_3gDOry"};

/***/ }),
/* 1176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _CoinInteractive = __webpack_require__(1177);

var _CoinInteractive2 = _interopRequireDefault(_CoinInteractive);

var _Coin = __webpack_require__(215);

var _Coin2 = _interopRequireDefault(_Coin);

var _hide = __webpack_require__(1178);

var _hide2 = _interopRequireDefault(_hide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CoinInteractive = function CoinInteractive(_ref) {
  var className = _ref.className,
      name = _ref.name,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 40 : _ref$size,
      onHide = _ref.onHide;
  return _react2.default.createElement(
    'div',
    { styleName: 'coinHover', className: className, onClick: function onClick() {
        return onHide(name);
      } },
    _react2.default.createElement(_Coin2.default, { name: name, size: size }),
    _react2.default.createElement(
      'div',
      { styleName: 'coinHide' },
      _react2.default.createElement('img', { src: _hide2.default })
    )
  );
};

exports.default = (0, _reactCssModules2.default)(CoinInteractive, _CoinInteractive2.default);

/***/ }),
/* 1177 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"coinHover":"_3pg4lS","coinHide":"_2U_lOU"};

/***/ }),
/* 1178 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/hide_81b0cc.svg";

/***/ }),
/* 1179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _appConfig = __webpack_require__(21);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _Href = __webpack_require__(166);

var _Href2 = _interopRequireDefault(_Href);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LinkAccount = function LinkAccount(_ref) {
  var type = _ref.type,
      children = _ref.children,
      address = _ref.address,
      contractAddress = _ref.contractAddress;
  return _react2.default.createElement(
    _react.Fragment,
    null,
    type.toLowerCase() === 'eth' && _react2.default.createElement(
      _Href2.default,
      { tab: _appConfig2.default.link.etherscan + '/address/' + address },
      children
    ),
    type.toLowerCase() === 'btc' && _react2.default.createElement(
      _Href2.default,
      { tab: _appConfig2.default.link.bitpay + '/address/' + address },
      children
    ),
    type.toLowerCase() === 'usdt' && _react2.default.createElement(
      _Href2.default,
      { tab: _appConfig2.default.link.omniexplorer + '/address/' + address },
      children
    ),
    contractAddress !== undefined && _react2.default.createElement(
      _Href2.default,
      { tab: _appConfig2.default.link.etherscan + '/token/' + contractAddress + '?a=' + address },
      children
    ),
    type.toLowerCase() === 'eos' && _react2.default.createElement(
      _Href2.default,
      { tab: _appConfig2.default.link.eos + '/#accountInfo' },
      children
    )
  );
};

exports.default = LinkAccount;

/***/ }),
/* 1180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Listing = __webpack_require__(1181);

var _Listing2 = _interopRequireDefault(_Listing);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _listingScreen = __webpack_require__(1182);

var _listingScreen2 = _interopRequireDefault(_listingScreen);

var _Href = __webpack_require__(166);

var _Href2 = _interopRequireDefault(_Href);

var _controls = __webpack_require__(67);

var _FeedBack = __webpack_require__(1183);

var _FeedBack2 = _interopRequireDefault(_FeedBack);

var _forms = __webpack_require__(168);

var _SubTitle = __webpack_require__(92);

var _SubTitle2 = _interopRequireDefault(_SubTitle);

var _PageHeadline = __webpack_require__(128);

var _PageHeadline2 = _interopRequireDefault(_PageHeadline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Listing = function Listing() {
  return _react2.default.createElement(
    'div',
    { styleName: 'container' },
    _react2.default.createElement(
      _PageHeadline2.default,
      null,
      _react2.default.createElement(
        _SubTitle2.default,
        null,
        'Listing'
      )
    ),
    _react2.default.createElement(
      'p',
      null,
      'Crypto Pink Sheets: ALL Coins Welcome To SWAP.Online!'
    ),
    _react2.default.createElement(
      'p',
      null,
      'OTC-approach-crypto market to be opened in Aug, 2018.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'There was one company in the U.S. in the year of 1913, the National Quotation Bureau. They brought to life very simple idea - to provide every entity with the ability to be quoted freely, without complicated safety and control proceedings. The list of the bond orders was primarily published on the yellow paper and the stock orders were published on the pink paper. The Pink Sheets, as the lists were immediately called by the traders. rapidly became very popular among the market players. Every firm opened in the U.S. or abroad was able to publish its securities quotations in the list of Pink Sheets. With the increasing requirements of NYSE and NASDAQ and growing demands of the SEC to the information regarding the company applying the market, the interest to the Pink Sheets arose very fast. In September, 1990, the NQB introduced the real-time Electronic Quotation Service, so the over-the-counter trading entered the Internet. By the year 2010 the operators of the Pink Sheets trading were acquisited by the OTC Market Group, Inc. In 2014, two of five U.S. stock trades were over-the-counter.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Wal-Mart was the Pink Sheet company in 1972 and earned there USD 1B.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Navistar International, the 12-billion-dollar-corporation, came to the Pink Sheets Market in 2006 leaving the NYSE due to some issues with the auditor board.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'In SWAP.Online we have noticed that Pink Sheets principles are very close to the initial meaning of cryptocurrencies. Both of them are based on the faith in transparency, decentralization, bilateral responsibility of buyer and seller. As we decided to make the exchange of crypto really',
      _react2.default.createElement(
        _Href2.default,
        { tab: 'https://wiki.swap.online/decentralised_exchanges_2018trends_eng/' },
        ' safe, rapid and decentralized'
      ),
      ', we couldn\u2019t go about this another way.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'SWAP.Online will be cryptocurrency Pink Sheets market.'
    ),
    _react2.default.createElement('img', { src: _listingScreen2.default, styleName: 'listingImg', alt: 'Orders book on swap.online' }),
    _react2.default.createElement(
      'p',
      null,
      'It\u2019s well known that even in traditional stock market, one willing to be quoted must meet the requirements of SEC, or as far as the OTC Market Group Inc. markets (OTCQX and OTCQB) are concerned, must show the big income and seek the support of the influential consulting agencies. Moreover, the information about the company audit must be provided annually to the SEC or SEC-approved regulators.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Some of the cryptocurrency \u2018fat cats\u2019 allow themselves to do the same. For example, Localbitcoins CEO said they would newer list a token of the project with less than USD1B capitalisation. Cryptobridge and some related centralized exchanges ask for the USD 23 thousand (in BTS equivalent) for the token owner to be listed.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'That is not about us. '
    ),
    _react2.default.createElement(
      'p',
      null,
      'As our transactions is peer-to-peer, based on the Atomic Swaps technology, we can add to the balances every token corresponding some our criterias. Obviously, clearly fraudulent projects are to be rejected from the very beginning. But all other start-ups on the different stages of development are welcome.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'In contradiction to the widespread Ethereum-pegged exchanges, the main currency to be changed on tokens in our project is Bitcoin. It can be treated as our killer-feature: for the crypto-newbies and vast majority of small customers Bitcoin is much clearer and easy to buy via Localbitcoins etc.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'We offer two-level way of access to the balances. On the first stage, we analyze the level of project technical development, collect the basic information (name, ticker, logo) and add the token to trading balances.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Then, to start trading with Bitcoin, the project should publish the information about the collaboration with SWAP.Online on every social platform and on the web-site forum. With this information published, our developers will release the final version of the exchange to client\u2019s token. This option is available for the first ten projects only.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'The conditions of delisting are discussed, but at the moment, we plan to expel twenty per cent worst tokens every month.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Thus, you token can start to be quoted in free and decentralized manner as quickly as possible for your unlimited profit.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        'strong',
        null,
        'Stay with us.'
      ),
      ' ',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'strong',
        null,
        'Grow with us.'
      ),
      ' ',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'strong',
        null,
        'Earn with us.'
      ),
      ' ',
      _react2.default.createElement('br', null)
    ),
    _react2.default.createElement(_FeedBack2.default, { link: 'https://t.me/sashanoxon' })
  );
};

exports.default = (0, _reactCssModules2.default)(Listing, _Listing2.default);

/***/ }),
/* 1181 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"listingImg":"_11f0U6","listingForm":"_2o0mJW","listingBtn":"_3y6L25","container":"_1QAUub"};

/***/ }),
/* 1182 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/listing-screen_fc16f6.png";

/***/ }),
/* 1183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FeedBack = __webpack_require__(1184);

var _FeedBack2 = _interopRequireDefault(_FeedBack);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _telegram = __webpack_require__(1185);

var _telegram2 = _interopRequireDefault(_telegram);

var _Href = __webpack_require__(166);

var _Href2 = _interopRequireDefault(_Href);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FeedBack = function FeedBack(_ref) {
  var link = _ref.link;
  return _react2.default.createElement(
    'div',
    { styleName: 'feedback' },
    _react2.default.createElement(
      'h2',
      { styleName: 'heading' },
      'Contacts'
    ),
    _react2.default.createElement(
      'div',
      { styleName: 'contact' },
      _react2.default.createElement('img', { src: _telegram2.default, alt: '' }),
      _react2.default.createElement(
        _Href2.default,
        { tab: link },
        link
      ),
      _react2.default.createElement(
        'span',
        { styleName: 'text' },
        'or'
      ),
      _react2.default.createElement(
        _Href2.default,
        { tab: 'mailto:team@swap.online' },
        'team@swap.online'
      ),
      _react2.default.createElement(
        'span',
        { styleName: 'text' },
        'to find out further actions'
      )
    )
  );
};

exports.default = (0, _reactCssModules2.default)(FeedBack, _FeedBack2.default);

/***/ }),
/* 1184 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"feedback":"_2qwouh","heading":"_1kFWUv","text":"_4ViCT0","contact":"_10Uaos"};

/***/ }),
/* 1185 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/telegram_ebde6d.png";

/***/ }),
/* 1186 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"label":"_1AbkiC","inRow":"_2Hoger"};

/***/ }),
/* 1187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberInput = exports.Checkbox = exports.Radio = exports.Select = exports.TextArea = exports.Input = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = __webpack_require__(51);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(48);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _defineProperty2 = __webpack_require__(142);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactInputMask = __webpack_require__(1188);

var _reactInputMask2 = _interopRequireDefault(_reactInputMask);

var _classnames = __webpack_require__(59);

var _classnames2 = _interopRequireDefault(_classnames);

var _helpers = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setValue = function setValue(x, e) {
  return e.target.value;
};
var setBoolValue = function setBoolValue(x, e) {
  return Boolean(e.target.checked);
};

var validationClasses = function validationClasses(_ref, value, error) {
  var className = _ref.className,
      invalidClass = _ref.invalidClass,
      requiredClass = _ref.requiredClass;

  var _cx;

  return (0, _classnames2.default)(className, (_cx = {}, (0, _defineProperty3.default)(_cx, invalidClass || 'invalid', Boolean(error)), (0, _defineProperty3.default)(_cx, requiredClass || 'required', Boolean(error && value === '')), _cx));
};

var Input = function Input(props) {
  var valueLink = props.valueLink,
      checkedLink = props.checkedLink,
      pattern = props.pattern,
      mask = props.mask,
      maskChar = props.maskChar,
      maskReplace = props.maskReplace,
      rest = (0, _objectWithoutProperties3.default)(props, ['valueLink', 'checkedLink', 'pattern', 'mask', 'maskChar', 'maskReplace']);

  var link = valueLink || checkedLink;

  switch (props.type) {
    case 'checkbox':
      return _react2.default.createElement('input', (0, _extends3.default)({}, rest, {
        checked: Boolean(link.value),
        onChange: link.action(setBoolValue)
      }));
    case 'radio':
      return _react2.default.createElement('input', (0, _extends3.default)({}, rest, {
        checked: link.value === props.value,
        onChange: function onChange(e) {
          if (e.target.checked) {
            link.set(props.value);
          }
        }
      }));
    default:
      var className = validationClasses(rest, valueLink.value, valueLink.error);
      var node = Boolean(mask) ? _reactInputMask2.default : 'input';

      var nodeProps = (0, _assign2.default)({}, rest, {
        className: className,
        value: typeof valueLink.value !== 'undefined' ? String(valueLink.value) : '',
        onChange: valueLink.action(function (x, e) {
          var val = e.target.value;

          if (pattern && val) {
            val = val.replace(new RegExp('[^' + pattern + ']+', 'g'), '');
          }

          if (mask && val) {
            if (maskReplace) {
              return val.replace(maskReplace, '');
            } else if (maskReplace !== null && maskReplace !== false) {
              return val.replace(/[^0-9]+/g, '');
            }
          }
          return val;
        })
      });

      if (mask) {
        nodeProps.mask = mask;
        nodeProps.maskChar = maskChar;
      }

      return _react2.default.createElement(node, nodeProps);
  }
};

var NumberInput = function (_Component) {
  (0, _inherits3.default)(NumberInput, _Component);

  function NumberInput() {
    (0, _classCallCheck3.default)(this, NumberInput);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NumberInput.__proto__ || (0, _getPrototypeOf2.default)(NumberInput)).apply(this, arguments));

    _this.onChange = function (e) {
      var value = e.target.value;

      var asNumber = Number(value);

      _this.setValue(value);

      if (value && !isNaN(asNumber)) {
        _this.props.valueLink.update(function (x) {
          // Update link if value is changed
          if (asNumber !== Number(x)) {
            return asNumber;
          }
        });
      }
    };

    _this.onKeyPress = function (event) {
      var _this$props = _this.props,
          integer = _this$props.integer,
          positive = _this$props.positive;
      var charCode = event.charCode,
          ctrlKey = event.ctrlKey;


      var allowedCharCodes = (positive ? [] : [45]).concat(integer ? [] : [46]);

      if (ctrlKey) {
        return;
      }

      if (charCode && (charCode < 48 || charCode > 57) && allowedCharCodes.indexOf(charCode) < 0) {
        event.preventDefault();
      }
    };
    return _this;
  }

  (0, _createClass3.default)(NumberInput, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setAndConvert(this.props.valueLink.value);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var next = nextProps.valueLink;


      if (Number(next.value) !== Number(this.value)) {
        this.setAndConvert(next.value); // keep state being synced
      }
    }
  }, {
    key: 'setValue',
    value: function setValue(x) {
      // We're not using native state in order to avoid race condition.
      this.value = String(x);
      this.error = this.value === '' || isNaN(Number(x));

      this.forceUpdate();
    }
  }, {
    key: 'setAndConvert',
    value: function setAndConvert(x) {
      var value = Number(x);

      if (this.props.positive) {
        value = Math.abs(x);
      }
      if (this.props.integer) {
        value = Math.round(value);
      }

      this.setValue(value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          valueLink = _props.valueLink,
          props = (0, _objectWithoutProperties3.default)(_props, ['valueLink']);

      var error = valueLink.error || this.error;

      return _react2.default.createElement('input', (0, _extends3.default)({}, (0, _helpers.ignoreProps)(props, 'positive', 'integer'), {
        type: 'text',
        className: validationClasses(props, this.value, error),
        value: this.value,
        onKeyPress: this.onKeyPress,
        onChange: this.onChange
      }));
    }
  }]);
  return NumberInput;
}(_react.Component);

/**
 * Wrapper for standard <textarea/> to be compliant with React 0.14 valueLink semantic.
 * Simple supports for link validation - adds 'invalid' class if link has an error.
 *
 *     <TextArea valueLink={ linkToText } />
 */


var TextArea = function TextArea(_ref2) {
  var valueLink = _ref2.valueLink,
      props = (0, _objectWithoutProperties3.default)(_ref2, ['valueLink']);
  return _react2.default.createElement('textarea', (0, _extends3.default)({}, props, {
    className: validationClasses(props, valueLink.value, valueLink.error),
    value: valueLink.value,
    onChange: valueLink.action(setValue)
  }));
};

/**
 * Wrapper for standard <select/> to be compliant with React 0.14 valueLink semantic.
 * Regular <option/> tags must be used:
 *
 *     <Select valueLink={ linkToSelectedValue }>
 *         <option value="a">A</option>
 *         <option value="b">B</option>
 *     </Select>
 */
var Select = function Select(_ref3) {
  var valueLink = _ref3.valueLink,
      children = _ref3.children,
      props = (0, _objectWithoutProperties3.default)(_ref3, ['valueLink', 'children']);
  return _react2.default.createElement(
    'select',
    (0, _extends3.default)({}, props, {
      value: valueLink.value,
      onChange: valueLink.action(setValue)
    }),
    children
  );
};

/**
 * Simple custom <Radio/> tag implementation. Can be easily styled.
 * Intended to be used with offhand bool link:
 *
 *    <Radio checkedLink={ linkToValue.equals( optionValue ) />
 */
var Radio = function Radio(_ref4) {
  var _ref4$className = _ref4.className,
      className = _ref4$className === undefined ? 'radio' : _ref4$className,
      checkedLink = _ref4.checkedLink,
      children = _ref4.children;
  return _react2.default.createElement(
    'div',
    {
      className: (0, _classnames2.default)(className, { 'selected': checkedLink.value }),
      onClick: checkedLink.action(function () {
        return true;
      })
    },
    children
  );
};

/**
 * Simple custom <Checkbox /> tag implementation.
 * Takes any type of boolean link. Can be easily styled.
 *
 *     <Checkbox checkedLink={ boolLink } />
 */
var Checkbox = function Checkbox(_ref5) {
  var _ref5$className = _ref5.className,
      className = _ref5$className === undefined ? 'checkbox' : _ref5$className,
      checkedLink = _ref5.checkedLink,
      children = _ref5.children;
  return _react2.default.createElement(
    'div',
    {
      className: (0, _classnames2.default)(className, { 'selected': checkedLink.value }),
      onClick: checkedLink.action(function (x) {
        return !x;
      })
    },
    children
  );
};

exports.Input = Input;
exports.TextArea = TextArea;
exports.Select = Select;
exports.Radio = Radio;
exports.Checkbox = Checkbox;
exports.NumberInput = NumberInput;

/***/ }),
/* 1188 */,
/* 1189 */,
/* 1190 */,
/* 1191 */,
/* 1192 */,
/* 1193 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"_1aWblp","inputContainer":"_2di3Mb","disabled":"_3u8Uu2","withError":"_3RwSrH","input":"_3T0zd_","label":"_3xlNvF","error":"_3LmV0i"};

/***/ }),
/* 1194 */,
/* 1195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _values = __webpack_require__(1196);

var _values2 = _interopRequireDefault(_values);

var _extends2 = __webpack_require__(51);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redaction = __webpack_require__(14);

var _actions = __webpack_require__(13);

var _actions2 = _interopRequireDefault(_actions);

var _Row = __webpack_require__(1200);

var _Row2 = _interopRequireDefault(_Row);

var _SwapsHistory = __webpack_require__(1204);

var _SwapsHistory2 = _interopRequireDefault(_SwapsHistory);

var _Table = __webpack_require__(113);

var _Table2 = _interopRequireDefault(_Table);

var _Filter = __webpack_require__(1207);

var _Filter2 = _interopRequireDefault(_Filter);

var _PageHeadline = __webpack_require__(128);

var _PageHeadline2 = _interopRequireDefault(_PageHeadline);

var _InfiniteScrollTable = __webpack_require__(1209);

var _InfiniteScrollTable2 = _interopRequireDefault(_InfiniteScrollTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var filterHistory = function filterHistory(items, filter) {
  if (filter === 'sent') {
    return items.filter(function (_ref) {
      var direction = _ref.direction;
      return direction === 'out';
    });
  }

  if (filter === 'received') {
    return items.filter(function (_ref2) {
      var direction = _ref2.direction;
      return direction === 'in';
    });
  }

  return items;
};

var History = (_dec = (0, _redaction.connect)(function (_ref3) {
  var _ref3$history = _ref3.history,
      transactions = _ref3$history.transactions,
      filter = _ref3$history.filter,
      swapHistory = _ref3$history.swapHistory;
  return {
    items: filterHistory(transactions, filter),
    swapHistory: swapHistory
  };
}), _dec(_class = function (_Component) {
  (0, _inherits3.default)(History, _Component);

  function History() {
    var _ref4;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, History);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref4 = History.__proto__ || (0, _getPrototypeOf2.default)(History)).call.apply(_ref4, [this].concat(args))), _this), _this.state = {
      renderedItems: 10
    }, _this.loadMore = function () {
      var items = _this.props.items;
      var renderedItems = _this.state.renderedItems;


      if (renderedItems < items.length) {
        _this.setState(function (state) {
          return {
            renderedItems: state.renderedItems + Math.min(10, items.length - state.renderedItems)
          };
        });
      }
    }, _this.rowRender = function (row) {
      return _react2.default.createElement(_Row2.default, (0, _extends3.default)({ key: row.hash }, row));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(History, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _actions2.default.analytics.dataEvent('open-page-history');
      _actions2.default.user.setTransactions();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          items = _props.items,
          swapHistory = _props.swapHistory;

      var titles = ['Coin', 'Status', 'Statement', 'Amount'];

      console.log('swapHistory', swapHistory);

      return _react2.default.createElement(
        'section',
        null,
        _react2.default.createElement(_PageHeadline2.default, { subTitle: 'History' }),
        _react2.default.createElement(_SwapsHistory2.default, { orders: (0, _values2.default)(swapHistory).filter(function (item) {
            return item.step >= 4;
          }) }),
        _react2.default.createElement(
          'h3',
          null,
          'All transactions'
        ),
        _react2.default.createElement(_Filter2.default, null),
        _react2.default.createElement(_InfiniteScrollTable2.default, {
          classTitle: _Table2.default.history,
          titles: titles,
          bottomOffset: 400,
          getMore: this.loadMore,
          itemsCount: items.length,
          items: items.slice(0, this.state.renderedItems),
          rowRender: this.rowRender
        })
      );
    }
  }]);
  return History;
}(_react.Component)) || _class);
exports.default = History;

/***/ }),
/* 1196 */,
/* 1197 */,
/* 1198 */,
/* 1199 */,
/* 1200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(59);

var _classnames2 = _interopRequireDefault(_classnames);

var _momentWithLocalesEs = __webpack_require__(298);

var _momentWithLocalesEs2 = _interopRequireDefault(_momentWithLocalesEs);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Row = __webpack_require__(1202);

var _Row2 = _interopRequireDefault(_Row);

var _Coin = __webpack_require__(215);

var _Coin2 = _interopRequireDefault(_Coin);

var _LinkTransaction = __webpack_require__(1203);

var _LinkTransaction2 = _interopRequireDefault(_LinkTransaction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Row = function (_React$PureComponent) {
  (0, _inherits3.default)(Row, _React$PureComponent);

  function Row() {
    (0, _classCallCheck3.default)(this, Row);
    return (0, _possibleConstructorReturn3.default)(this, (Row.__proto__ || (0, _getPrototypeOf2.default)(Row)).apply(this, arguments));
  }

  (0, _createClass3.default)(Row, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          type = _props.type,
          date = _props.date,
          direction = _props.direction,
          hash = _props.hash,
          value = _props.value,
          confirmations = _props.confirmations;


      var statusStyleName = (0, _classnames2.default)('status', {
        'in': direction === 'in',
        'out': direction !== 'in'
      });

      return _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(_Coin2.default, { name: type, size: 40 })
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(
            'div',
            { styleName: statusStyleName },
            direction === 'in' ? 'Received ' : 'Sent '
          ),
          _react2.default.createElement(
            'div',
            { styleName: 'date' },
            (0, _momentWithLocalesEs2.default)(date).format('LLLL')
          ),
          _react2.default.createElement(
            _LinkTransaction2.default,
            { type: type, styleName: 'address', hash: hash },
            hash
          )
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(
            'div',
            { styleName: confirmations > 0 ? 'confirm cell' : 'unconfirmed cell' },
            confirmations > 0 ? 'Confirm ' + confirmations : 'Unconfirmed'
          )
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(
            'div',
            { styleName: 'amount' },
            value,
            ' ',
            type.toUpperCase()
          )
        )
      );
    }
  }]);
  return Row;
}(_react2.default.PureComponent);

exports.default = (0, _reactCssModules2.default)(Row, _Row2.default, { allowMultiple: true });

/***/ }),
/* 1201 */,
/* 1202 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"status":"B1fidj","in":"_2WudR1","out":"_3MGYaP","cell":"_3iy6qi","confirm":"_38S3z2","unconfirmed":"_2NV1PP","date":"_3qRLEP","address":"qb31A4","amount":"z9ksse"};

/***/ }),
/* 1203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _appConfig = __webpack_require__(21);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _Href = __webpack_require__(166);

var _Href2 = _interopRequireDefault(_Href);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LinkTransaction = function LinkTransaction(_ref) {
  var type = _ref.type,
      children = _ref.children,
      hash = _ref.hash;
  return _react2.default.createElement(
    _react.Fragment,
    null,
    type.toLowerCase() === 'eth' && _react2.default.createElement(
      _Href2.default,
      { tab: _appConfig2.default.link.etherscan + '/tx/' + hash },
      children
    ),
    type.toLowerCase() === 'btc' && _react2.default.createElement(
      _Href2.default,
      { tab: _appConfig2.default.link.bitpay + '/tx/' + hash },
      children
    ),
    type.toLowerCase() === 'noxon' && _react2.default.createElement(
      _Href2.default,
      { tab: _appConfig2.default.link.etherscan + '/tx/' + hash },
      children
    ),
    type.toLowerCase() === 'swap' && _react2.default.createElement(
      _Href2.default,
      { tab: _appConfig2.default.link.etherscan + '/tx/' + hash },
      children
    )
  );
};

exports.default = LinkTransaction;

/***/ }),
/* 1204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Table = __webpack_require__(112);

var _Table2 = _interopRequireDefault(_Table);

var _Table3 = __webpack_require__(113);

var _Table4 = _interopRequireDefault(_Table3);

var _RowHistory = __webpack_require__(1205);

var _RowHistory2 = _interopRequireDefault(_RowHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwapsHistory = function (_PureComponent) {
  (0, _inherits3.default)(SwapsHistory, _PureComponent);

  function SwapsHistory() {
    (0, _classCallCheck3.default)(this, SwapsHistory);
    return (0, _possibleConstructorReturn3.default)(this, (SwapsHistory.__proto__ || (0, _getPrototypeOf2.default)(SwapsHistory)).apply(this, arguments));
  }

  (0, _createClass3.default)(SwapsHistory, [{
    key: 'render',
    value: function render() {
      var orders = this.props.orders;

      var titles = ['', 'Exchange', 'You buy', 'You sell', 'Exchange rate', 'Status refund', 'Status order', 'Lock time', 'Link'];

      if (orders === null || orders.length === 0) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        { style: { marginBottom: '50px' } },
        _react2.default.createElement(
          'h3',
          null,
          'Swaps history'
        ),
        _react2.default.createElement(_Table2.default, {
          classTitle: _Table4.default.historySwap,
          titles: titles,
          rows: orders,
          rowRender: function rowRender(row, index) {
            return _react2.default.createElement(_RowHistory2.default, {
              key: index,
              row: row
            });
          }
        })
      );
    }
  }]);
  return SwapsHistory;
}(_react.PureComponent);

exports.default = SwapsHistory;

/***/ }),
/* 1205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = __webpack_require__(452);

var _moment2 = _interopRequireDefault(_moment);

var _identicon = __webpack_require__(487);

var _identicon2 = _interopRequireDefault(_identicon);

var _helpers = __webpack_require__(11);

var _reactRouterDom = __webpack_require__(32);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _RowHistory = __webpack_require__(1206);

var _RowHistory2 = _interopRequireDefault(_RowHistory);

var _Coins = __webpack_require__(167);

var _Coins2 = _interopRequireDefault(_Coins);

var _Timer = __webpack_require__(164);

var _Timer2 = _interopRequireDefault(_Timer);

var _Avatar = __webpack_require__(295);

var _Avatar2 = _interopRequireDefault(_Avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RowHistory = function RowHistory(_ref) {
  var row = _ref.row;


  if (row === 'undefined') {
    return null;
  }

  var buyAmount = row.buyAmount,
      buyCurrency = row.buyCurrency,
      sellAmount = row.sellAmount,
      btcScriptValues = row.btcScriptValues,
      isRefunded = row.isRefunded,
      isMy = row.isMy,
      sellCurrency = row.sellCurrency,
      isFinished = row.isFinished,
      id = row.id,
      lockTime = row.btcScriptValues.lockTime;


  var lockDateAndTime = _moment2.default.unix(lockTime).format('HH:mm:ss DD/MM/YYYY');

  buyAmount = Number(buyAmount);
  sellAmount = Number(sellAmount);

  return _react2.default.createElement(
    'tr',
    null,
    _react2.default.createElement(
      'td',
      null,
      _react2.default.createElement(_Avatar2.default, {
        value: id
      })
    ),
    _react2.default.createElement(
      'td',
      null,
      _react2.default.createElement(_Coins2.default, { names: [buyCurrency, sellCurrency] })
    ),
    _react2.default.createElement(
      'td',
      null,
      isMy ? sellAmount.toFixed(5) + ' ' + sellCurrency.toUpperCase() : buyAmount.toFixed(5) + ' ' + buyCurrency.toUpperCase()
    ),
    _react2.default.createElement(
      'td',
      null,
      isMy ? buyAmount.toFixed(5) + ' ' + buyCurrency.toUpperCase() : sellAmount.toFixed(5) + ' ' + sellCurrency.toUpperCase()
    ),
    _react2.default.createElement(
      'td',
      null,
      (sellAmount / buyAmount).toFixed(5),
      ' ' + sellCurrency + '/' + buyCurrency
    ),
    _react2.default.createElement(
      'td',
      null,
      btcScriptValues && !isRefunded && !isFinished ? _react2.default.createElement(_Timer2.default, {
        lockTime: btcScriptValues.lockTime * 1000,
        enabledButton: function enabledButton() {}
      }) : _react2.default.createElement(
        'span',
        null,
        'Refund not available'
      )
    ),
    _react2.default.createElement(
      'td',
      null,
      isFinished ? 'Finished' : 'Uncompleted'
    ),
    _react2.default.createElement(
      'td',
      null,
      lockDateAndTime.split(' ').map(function (item, key) {
        return _react2.default.createElement(
          _react.Fragment,
          { key: key },
          item,
          _react2.default.createElement('br', null)
        );
      })
    ),
    _react2.default.createElement(
      'td',
      null,
      isMy ? _react2.default.createElement(
        _reactRouterDom.Link,
        { to: _helpers.links.swap + '/' + sellCurrency + '-' + buyCurrency + '/' + id },
        'Link to the swap'
      ) : _react2.default.createElement(
        _reactRouterDom.Link,
        { to: _helpers.links.swap + '/' + buyCurrency + '-' + sellCurrency + '/' + id },
        'Link to the swap'
      )
    )
  );
};

RowHistory.propTypes = {
  row: _propTypes2.default.object
};

exports.default = (0, _reactCssModules2.default)(RowHistory, _RowHistory2.default, { allowMultiple: true });

/***/ }),
/* 1206 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"userTooltip":"_2Z_jhL","delete":"eDuZ67","currency":"_2vYSxF","coin":"_17Dby6","buy":"_35V0oz","sell":"_3BVZDc","buttons":"Plxv_t","arrow":"poSVpG"};

/***/ }),
/* 1207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__(13);

var _actions2 = _interopRequireDefault(_actions);

var _redaction = __webpack_require__(14);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Filter = __webpack_require__(491);

var _Filter2 = _interopRequireDefault(_Filter);

var _FilterLink = __webpack_require__(1208);

var _FilterLink2 = _interopRequireDefault(_FilterLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Filter = (_dec = (0, _redaction.connect)(function (_ref) {
  var filter = _ref.history.filter;
  return {
    filter: filter
  };
}), _dec2 = (0, _reactCssModules2.default)(_Filter2.default), _dec(_class = _dec2(_class = (_temp2 = _class2 = function (_Component) {
  (0, _inherits3.default)(Filter, _Component);

  function Filter() {
    var _ref2;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Filter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = Filter.__proto__ || (0, _getPrototypeOf2.default)(Filter)).call.apply(_ref2, [this].concat(args))), _this), _this.handleChangeFilter = function (filter) {
      _actions2.default.filter.setFilter(filter);
      _actions2.default.analytics.dataEvent('history-click-' + filter);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Filter, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var filter = this.props.filter;


      return _react2.default.createElement(
        'div',
        { styleName: 'history-filter' },
        _react2.default.createElement(_FilterLink2.default, {
          name: 'All',
          onClick: function onClick() {
            return _this2.handleChangeFilter('all');
          },
          filter: filter
        }),
        _react2.default.createElement(_FilterLink2.default, {
          name: 'Sent',
          onClick: function onClick() {
            return _this2.handleChangeFilter('sent');
          },
          filter: filter
        }),
        _react2.default.createElement(_FilterLink2.default, {
          name: 'Received',
          onClick: function onClick() {
            return _this2.handleChangeFilter('received');
          },
          filter: filter
        })
      );
    }
  }]);
  return Filter;
}(_react.Component), _class2.propTypes = {
  filter: _propTypes2.default.string
}, _temp2)) || _class) || _class);
exports.default = Filter;

/***/ }),
/* 1208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Filter = __webpack_require__(491);

var _Filter2 = _interopRequireDefault(_Filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FilterLink = function FilterLink(_ref) {
  var name = _ref.name,
      filter = _ref.filter,
      onClick = _ref.onClick;
  return _react2.default.createElement(
    'span',
    {
      styleName: filter === name.toLowerCase() ? 'history-filter__item  history-filter__item_active' : 'history-filter__item',
      onClick: onClick
    },
    name
  );
};

FilterLink.propTypes = {
  name: _propTypes2.default.string.isRequired,
  filter: _propTypes2.default.string.isRequired
};

exports.default = (0, _reactCssModules2.default)(FilterLink, _Filter2.default, { allowMultiple: true });

/***/ }),
/* 1209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(51);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(48);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Table = __webpack_require__(112);

var _Table2 = _interopRequireDefault(_Table);

var _withInfiniteScroll = __webpack_require__(1210);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InfiniteScrollTable = (_dec = (0, _withInfiniteScroll.withInfiniteScroll)(), _dec(_class = function (_React$Component) {
  (0, _inherits3.default)(InfiniteScrollTable, _React$Component);

  function InfiniteScrollTable() {
    (0, _classCallCheck3.default)(this, InfiniteScrollTable);
    return (0, _possibleConstructorReturn3.default)(this, (InfiniteScrollTable.__proto__ || (0, _getPrototypeOf2.default)(InfiniteScrollTable)).apply(this, arguments));
  }

  (0, _createClass3.default)(InfiniteScrollTable, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          items = _props.items,
          rest = (0, _objectWithoutProperties3.default)(_props, ['items']);


      return _react2.default.createElement(_Table2.default, (0, _extends3.default)({}, rest, { rows: items }));
    }
  }]);
  return InfiniteScrollTable;
}(_react2.default.Component)) || _class);
exports.default = InfiniteScrollTable;

/***/ }),
/* 1210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withInfiniteScroll = undefined;

var _objectWithoutProperties2 = __webpack_require__(48);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withInfiniteScroll = function withInfiniteScroll() {
  return function (Component) {
    var InfiniteScroll = function (_React$Component) {
      (0, _inherits3.default)(InfiniteScroll, _React$Component);

      function InfiniteScroll() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, InfiniteScroll);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = InfiniteScroll.__proto__ || (0, _getPrototypeOf2.default)(InfiniteScroll)).call.apply(_ref, [this].concat(args))), _this), _this.onScroll = function () {
          var _this$props = _this.props,
              bottomOffset = _this$props.bottomOffset,
              items = _this$props.items,
              itemsCount = _this$props.itemsCount;


          var bottomSidePositionOnPage = document.documentElement.scrollTop + document.documentElement.clientHeight;

          if (bottomSidePositionOnPage >= document.body.offsetHeight - bottomOffset && items.length !== itemsCount && items.length) {
            _this.props.getMore();
          }
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
      }

      (0, _createClass3.default)(InfiniteScroll, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          window.addEventListener('scroll', this.onScroll);
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          window.removeEventListener('scroll', this.onScroll);
        }
      }, {
        key: 'render',
        value: function render() {
          var _props = this.props,
              getMore = _props.getMore,
              bottomOffset = _props.bottomOffset,
              itemsCount = _props.itemsCount,
              rest = (0, _objectWithoutProperties3.default)(_props, ['getMore', 'bottomOffset', 'itemsCount']);

          return _react2.default.createElement(Component, rest);
        }
      }]);
      return InfiniteScroll;
    }(_react2.default.Component);

    InfiniteScroll.propTypes = {
      getMore: _propTypes2.default.func,
      bottomOffset: _propTypes2.default.number,
      items: _propTypes2.default.array,
      itemsCount: _propTypes2.default.number
    };

    return InfiniteScroll;
  };
};
exports.withInfiniteScroll = withInfiniteScroll;

/***/ }),
/* 1211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NotFound;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NotFound() {
  return _react2.default.createElement(
    "div",
    { className: "container" },
    _react2.default.createElement(
      "h2",
      { className: "description__sub-title" },
      "Page not found!"
    )
  );
}

/***/ }),
/* 1212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redaction = __webpack_require__(14);

var _PageHeadline = __webpack_require__(128);

var _PageHeadline2 = _interopRequireDefault(_PageHeadline);

var _SubTitle = __webpack_require__(92);

var _SubTitle2 = _interopRequireDefault(_SubTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Affiliate = function Affiliate(_ref) {
  var address = _ref.address;
  return _react2.default.createElement(
    'section',
    { style: { height: '100%' } },
    _react2.default.createElement(
      _PageHeadline2.default,
      null,
      _react2.default.createElement(
        _SubTitle2.default,
        null,
        'Make up to $1000 per Client! Swap.Online Affiliate Program'
      )
    ),
    _react2.default.createElement('iframe', { width: '100%', height: '550px', title: 'wiki.swap.online', src: 'https://wiki.swap.online/affiliate.php?addr=' + address, frameBorder: '0' })
  );
};

exports.default = (0, _redaction.connect)(function (state) {
  return {
    address: state.user.ethData.address
  };
})(Affiliate);

/***/ }),
/* 1213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(51);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redaction = __webpack_require__(14);

var _appConfig = __webpack_require__(21);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _Title = __webpack_require__(214);

var _Title2 = _interopRequireDefault(_Title);

var _PageHeadline = __webpack_require__(128);

var _PageHeadline2 = _interopRequireDefault(_PageHeadline);

var _SubTitle = __webpack_require__(92);

var _SubTitle2 = _interopRequireDefault(_SubTitle);

var _Table = __webpack_require__(112);

var _Table2 = _interopRequireDefault(_Table);

var _Row = __webpack_require__(1214);

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Currency = (_dec = (0, _redaction.connect)(function (_ref) {
  var currencies = _ref.currencies;
  return {
    currencies: currencies.items
  };
}), _dec(_class = function (_Component) {
  (0, _inherits3.default)(Currency, _Component);

  function Currency() {
    var _ref2;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Currency);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = Currency.__proto__ || (0, _getPrototypeOf2.default)(Currency)).call.apply(_ref2, [this].concat(args))), _this), _this.getRows = function () {
      var _this$props = _this.props,
          currency = _this$props.match.params.currency,
          currencies = _this$props.currencies;


      if (currency === 'btc') {
        currencies = currencies.filter(function (c) {
          return c.value !== currency;
        });
      } else {
        currencies = currencies.filter(function (c) {
          return c.value === 'btc';
        });
      }

      currencies = currencies.reduce(function (previous, current) {
        return previous.concat({ from: currency, to: current.value }, { from: current.value, to: currency });
      }, []);

      return currencies;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Currency, [{
    key: 'render',
    value: function render() {
      var currency = this.props.match.params.currency;


      return _react2.default.createElement(
        'section',
        null,
        _react2.default.createElement(
          _PageHeadline2.default,
          null,
          _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              _Title2.default,
              null,
              _appConfig2.default.currency[currency.toLowerCase()].title
            ),
            _react2.default.createElement(
              _SubTitle2.default,
              null,
              currency.toUpperCase(),
              ' Trade'
            ),
            _react2.default.createElement(
              'p',
              null,
              _appConfig2.default.currency[currency.toLowerCase()].description
            )
          )
        ),
        _react2.default.createElement(_Table2.default, {
          titles: ['Coin', 'Exchange', ''],
          rows: this.getRows(),
          rowRender: function rowRender(row, index) {
            return _react2.default.createElement(_Row2.default, (0, _extends3.default)({ key: index }, row));
          }
        })
      );
    }
  }]);
  return Currency;
}(_react.Component)) || _class);
exports.default = Currency;

/***/ }),
/* 1214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(32);

var _helpers = __webpack_require__(11);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Row = __webpack_require__(1215);

var _Row2 = _interopRequireDefault(_Row);

var _Coins = __webpack_require__(167);

var _Coins2 = _interopRequireDefault(_Coins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Row = (_dec = (0, _reactCssModules2.default)(_Row2.default), _dec(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(Row, _Component);

  function Row() {
    (0, _classCallCheck3.default)(this, Row);
    return (0, _possibleConstructorReturn3.default)(this, (Row.__proto__ || (0, _getPrototypeOf2.default)(Row)).apply(this, arguments));
  }

  (0, _createClass3.default)(Row, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          from = _props.from,
          to = _props.to;


      return _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(_Coins2.default, { styleName: 'coins', names: [from, to], size: 40 })
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(
            'span',
            null,
            from.toUpperCase(),
            '-',
            to.toUpperCase()
          )
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { styleName: 'button', to: '' + _helpers.links.home + from.toLowerCase() + '-' + to.toLowerCase() },
            'Trade'
          )
        )
      );
    }
  }]);
  return Row;
}(_react.Component), _class2.propTypes = {
  from: _propTypes2.default.string.isRequired,
  to: _propTypes2.default.string.isRequired
}, _temp)) || _class);
exports.default = Row;

/***/ }),
/* 1215 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"coins":"_1Wexht","reloadButton":"_3ixjtr","copied":"_3V2rdt","button":"_2_YN3T"};

/***/ }),
/* 1216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(51);

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = __webpack_require__(82);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _keys = __webpack_require__(62);

var _keys2 = _interopRequireDefault(_keys);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redaction = __webpack_require__(14);

var _Table = __webpack_require__(112);

var _Table2 = _interopRequireDefault(_Table);

var _Table3 = __webpack_require__(113);

var _Table4 = _interopRequireDefault(_Table3);

var _SubTitle = __webpack_require__(92);

var _SubTitle2 = _interopRequireDefault(_SubTitle);

var _Row = __webpack_require__(1217);

var _Row2 = _interopRequireDefault(_Row);

var _reactRouter = __webpack_require__(71);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wallet = (_dec = (0, _redaction.connect)(function (_ref) {
  var hiddenCoinsList = _ref.core.hiddenCoinsList,
      _ref$user = _ref.user,
      ethData = _ref$user.ethData,
      btcData = _ref$user.btcData,
      tokensData = _ref$user.tokensData,
      eosData = _ref$user.eosData,
      nimData = _ref$user.nimData,
      usdtData = _ref$user.usdtData,
      currencies = _ref.currencies.items;
  return {
    tokens: (0, _keys2.default)(tokensData).map(function (k) {
      return tokensData[k];
    }),
    items: [ethData, btcData, eosData, usdtData /* eosData  nimData */],
    currencies: currencies,
    hiddenCoinsList: hiddenCoinsList
  };
}), (0, _reactRouter.withRouter)(_class = _dec(_class = function (_Component) {
  (0, _inherits3.default)(Wallet, _Component);

  function Wallet() {
    var _ref2;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Wallet);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = Wallet.__proto__ || (0, _getPrototypeOf2.default)(Wallet)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      view: 'off'
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Wallet, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          items = _props.items,
          tokens = _props.tokens,
          currencies = _props.currencies,
          hiddenCoinsList = _props.hiddenCoinsList;

      var titles = ['Coin', 'Name', 'Actions'];

      return _react2.default.createElement(
        'section',
        { style: { display: 'flex', justifyContent: 'flex-start' } },
        _react2.default.createElement(
          'div',
          { style: { width: '500px' } },
          _react2.default.createElement(
            _SubTitle2.default,
            { style: { marginTop: '80px' } },
            'Coins in Wallet'
          ),
          _react2.default.createElement(_Table2.default, {
            classTitle: _Table4.default.wallet,
            titles: titles,
            rows: [].concat((0, _toConsumableArray3.default)(items), (0, _toConsumableArray3.default)(tokens)).filter(function (coin) {
              return !hiddenCoinsList.includes(coin.currency);
            }),
            rowRender: function rowRender(row, index) {
              return _react2.default.createElement(_Row2.default, (0, _extends3.default)({ key: index }, row, { isHidden: false, currencies: currencies }));
            }
          })
        ),
        hiddenCoinsList.length !== 0 && _react2.default.createElement(
          'div',
          { style: { width: '500px' } },
          _react2.default.createElement(
            _SubTitle2.default,
            null,
            'Other coins'
          ),
          _react2.default.createElement(_Table2.default, {
            classTitle: _Table4.default.wallet,
            titles: titles,
            rows: [].concat((0, _toConsumableArray3.default)(items), (0, _toConsumableArray3.default)(tokens)).filter(function (coin) {
              return hiddenCoinsList.includes(coin.currency);
            }),
            rowRender: function rowRender(row, index) {
              return _react2.default.createElement(_Row2.default, (0, _extends3.default)({ key: index }, row, { isHidden: true, currencies: currencies }));
            }
          })
        )
      );
    }
  }]);
  return Wallet;
}(_react.Component)) || _class) || _class);
exports.default = Wallet;

/***/ }),
/* 1217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(13);

var _actions2 = _interopRequireDefault(_actions);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Row = __webpack_require__(1218);

var _Row2 = _interopRequireDefault(_Row);

var _Coin = __webpack_require__(215);

var _Coin2 = _interopRequireDefault(_Coin);

var _WithdrawButton = __webpack_require__(294);

var _WithdrawButton2 = _interopRequireDefault(_WithdrawButton);

var _reactRouter = __webpack_require__(71);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Row = (_dec = (0, _reactCssModules2.default)(_Row2.default), (0, _reactRouter.withRouter)(_class = _dec(_class = function (_Component) {
  (0, _inherits3.default)(Row, _Component);

  function Row() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Row);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Row.__proto__ || (0, _getPrototypeOf2.default)(Row)).call.apply(_ref, [this].concat(args))), _this), _this.handleMarkCoinAsHidden = function () {
      _actions2.default.core.markCoinAsHidden(_this.props.currency);
    }, _this.handleMarkCoinAsVisible = function () {
      _actions2.default.core.markCoinAsVisible(_this.props.currency);
    }, _this.getCurrencyFullTitle = function (currencyTitle, currencies) {
      var match = currencies.find(function (el) {
        return el.title === currencyTitle;
      });
      return match ? match.fullTitle : currencyTitle;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Row, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isHidden = _props.isHidden,
          currency = _props.currency;


      return _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(_Coin2.default, { name: currency, size: 40 })
        ),
        _react2.default.createElement(
          'td',
          null,
          currency
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(
            'div',
            null,
            isHidden && _react2.default.createElement(
              _WithdrawButton2.default,
              {
                onClick: this.handleMarkCoinAsVisible,
                styleName: 'marginRight'
              },
              _react2.default.createElement('i', { className: 'fas fa-arrow-alt-circle-down' }),
              _react2.default.createElement(
                'span',
                null,
                'Show in wallet'
              )
            ),
            !isHidden && _react2.default.createElement(
              _WithdrawButton2.default,
              {
                onClick: this.handleMarkCoinAsHidden,
                styleName: 'marginRight'
              },
              _react2.default.createElement('i', { className: 'fas fa-arrow-alt-circle-down' }),
              _react2.default.createElement(
                'span',
                null,
                'Hide from wallet'
              )
            )
          )
        )
      );
    }
  }]);
  return Row;
}(_react.Component)) || _class) || _class);
exports.default = Row;

/***/ }),
/* 1218 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"marginRight":"_1KJZHV","copied":"_3XS6ZA","icon":"_2q7GlY","button":"_3gYB1H"};

/***/ }),
/* 1219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(353);

var _reactRouterRedux = __webpack_require__(349);

var _App = __webpack_require__(1220);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Root = (_temp = _class = function (_React$PureComponent) {
  (0, _inherits3.default)(Root, _React$PureComponent);

  function Root() {
    (0, _classCallCheck3.default)(this, Root);
    return (0, _possibleConstructorReturn3.default)(this, (Root.__proto__ || (0, _getPrototypeOf2.default)(Root)).apply(this, arguments));
  }

  (0, _createClass3.default)(Root, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          history = _props.history,
          store = _props.store,
          routes = _props.routes;

      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
          _reactRouterRedux.ConnectedRouter,
          { history: history },
          _react2.default.createElement(
            _App2.default,
            null,
            routes
          )
        )
      );
    }
  }]);
  return Root;
}(_react2.default.PureComponent), _class.propTypes = {
  store: _propTypes2.default.object.isRequired,
  history: _propTypes2.default.object.isRequired,
  routes: _propTypes2.default.element.isRequired
}, _temp);
exports.default = Root;

/***/ }),
/* 1220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(71);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__(13);

var _actions2 = _interopRequireDefault(_actions);

var _redaction = __webpack_require__(14);

var _momentWithLocalesEs = __webpack_require__(298);

var _momentWithLocalesEs2 = _interopRequireDefault(_momentWithLocalesEs);

var _helpers = __webpack_require__(11);

var _reactDeviceDetect = __webpack_require__(216);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _App = __webpack_require__(1221);

var _App2 = _interopRequireDefault(_App);

__webpack_require__(1222);

var _newSwap = __webpack_require__(1223);

var _Core = __webpack_require__(1388);

var _Core2 = _interopRequireDefault(_Core);

var _Header = __webpack_require__(1389);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(1408);

var _Footer2 = _interopRequireDefault(_Footer);

var _Loader = __webpack_require__(312);

var _Loader2 = _interopRequireDefault(_Loader);

var _PreventMultiTabs = __webpack_require__(1421);

var _PreventMultiTabs2 = _interopRequireDefault(_PreventMultiTabs);

var _RequestLoader = __webpack_require__(1422);

var _RequestLoader2 = _interopRequireDefault(_RequestLoader);

var _ModalConductor = __webpack_require__(531);

var _ModalConductor2 = _interopRequireDefault(_ModalConductor);

var _WidthContainer = __webpack_require__(133);

var _WidthContainer2 = _interopRequireDefault(_WidthContainer);

var _NotificationConductor = __webpack_require__(1472);

var _NotificationConductor2 = _interopRequireDefault(_NotificationConductor);

var _Seo = __webpack_require__(1480);

var _Seo2 = _interopRequireDefault(_Seo);

var _ErrorNotification = __webpack_require__(1487);

var _ErrorNotification2 = _interopRequireDefault(_ErrorNotification);

var _UserTooltip = __webpack_require__(527);

var _UserTooltip2 = _interopRequireDefault(_UserTooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userLanguage = (navigator.userLanguage || navigator.language || 'en-gb').split('-')[0];
_momentWithLocalesEs2.default.locale(userLanguage);

var App = (_dec = (0, _redaction.connect)({
  isVisible: 'loader.isVisible',
  ethAddress: 'user.ethData.address',
  btcAddress: 'user.btcData.address',
  tokenAddress: 'user.tokensData.noxon.address'
}), _dec2 = (0, _reactCssModules2.default)(_App2.default), (0, _reactRouter.withRouter)(_class = _dec(_class = _dec2(_class = (_temp = _class2 = function (_React$Component) {
  (0, _inherits3.default)(App, _React$Component);

  function App() {
    (0, _classCallCheck3.default)(this, App);

    var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this));

    _this.hideErrorNotification = function () {
      _this.setState({ error: '', fallbackUiError: '' });
    };

    _this.localStorageListener = null;

    _this.state = {
      fetching: false,
      multiTabs: false,
      error: '',
      fallbackUiError: ''
    };
    return _this;
  }

  (0, _createClass3.default)(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      _helpers.localStorage.setItem(_helpers.constants.localStorage.activeTabId, Date.now());

      if (_helpers.localStorage.getItem(_helpers.constants.localStorage.activeTabId)) {
        _helpers.localStorage.setItem(_helpers.constants.localStorage.activeTabId, Date.now());
      }

      this.localStorageListener = _helpers.localStorage.subscribe(_helpers.constants.localStorage.activeTabId, function (newValue) {
        if (newValue !== _helpers.localStorage.getItem(_helpers.constants.localStorage.activeTabId)) {
          _this2.setState({ multiTabs: true });
        }
      });

      if (!_helpers.localStorage.getItem(_helpers.constants.localStorage.demoMoneyReceived)) {
        _actions2.default.user.getDemoMoney();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _helpers.localStorage.unsubscribe(this.localStorageListener);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      window.onerror = function (error) {
        _this3.setState({ error: error });
      };

      setTimeout(function () {
        _actions2.default.user.sign();
        (0, _newSwap.createSwapApp)();
        _this3.setState({ fetching: true });
      }, 1000);
    }
  }, {
    key: 'componentDidCatch',
    value: function componentDidCatch(error) {
      this.setState({ fallbackUiError: error.message });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          fetching = _state.fetching,
          multiTabs = _state.multiTabs,
          error = _state.error,
          fallbackUiError = _state.fallbackUiError;
      var _props = this.props,
          children = _props.children,
          ethAddress = _props.ethAddress,
          btcAddress = _props.btcAddress,
          tokenAddress = _props.tokenAddress,
          history = _props.history;

      var isFetching = !ethAddress || !btcAddress || !tokenAddress || !fetching;

      if (multiTabs) {
        return _react2.default.createElement(_PreventMultiTabs2.default, null);
      }

      if (isFetching) {
        return _react2.default.createElement(_Loader2.default, null);
      }

      if (fallbackUiError) {
        return _react2.default.createElement(_ErrorNotification2.default, { hideErrorNotification: this.hideErrorNotification, error: error });
      }

      return _react2.default.createElement(
        _react.Fragment,
        null,
        error && _react2.default.createElement(_ErrorNotification2.default, { hideErrorNotification: this.hideErrorNotification, error: error }),
        _react2.default.createElement(_Seo2.default, { location: history.location }),
        _reactDeviceDetect.isMobile && _react2.default.createElement(_UserTooltip2.default, null),
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          _WidthContainer2.default,
          { styleName: 'main' },
          _react2.default.createElement(
            'main',
            null,
            children
          )
        ),
        _react2.default.createElement(_Core2.default, null),
        !_reactDeviceDetect.isMobile && _react2.default.createElement(_Footer2.default, null),
        _react2.default.createElement(_RequestLoader2.default, null),
        _react2.default.createElement(_ModalConductor2.default, null),
        _react2.default.createElement(_NotificationConductor2.default, null)
      );
    }
  }]);
  return App;
}(_react2.default.Component), _class2.propTypes = {
  children: _propTypes2.default.element.isRequired
}, _temp)) || _class) || _class) || _class);
exports.default = App;

/***/ }),
/* 1221 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"main":"_3gjuKq"};

/***/ }),
/* 1222 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"modal":"UVZ-gM","btn":"_2xXs60"};

/***/ }),
/* 1223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSwapApp = undefined;

var _eos = __webpack_require__(231);

__webpack_require__(1224);

var _web = __webpack_require__(193);

var _web2 = _interopRequireDefault(_web);

var _bitcoinjsLib = __webpack_require__(149);

var _bitcoinjsLib2 = _interopRequireDefault(_bitcoinjsLib);

var _ipfsPubsubRoom = __webpack_require__(1225);

var _ipfsPubsubRoom2 = _interopRequireDefault(_ipfsPubsubRoom);

var _appConfig = __webpack_require__(21);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _helpers = __webpack_require__(11);

var _actions = __webpack_require__(13);

var _actions2 = _interopRequireDefault(_actions);

var _swap = __webpack_require__(17);

var _swap2 = _interopRequireDefault(_swap);

var _swap3 = __webpack_require__(219);

var _swap4 = _interopRequireDefault(_swap3);

var _swap5 = __webpack_require__(506);

var _swap6 = _interopRequireDefault(_swap5);

var _swap7 = __webpack_require__(1276);

var _swap8 = _interopRequireDefault(_swap7);

var _swap9 = __webpack_require__(1287);

var _swap10 = __webpack_require__(1381);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-mutable-exports,max-len */
var createSwapApp = function createSwapApp() {
  _swap2.default.setup({
    network:  true ? 'mainnet' : 'testnet',

    env: {
      eos: _eos.eos,
      web3: _web2.default,
      bitcoin: _bitcoinjsLib2.default,
      Ipfs: window.Ipfs,
      IpfsRoom: _ipfsPubsubRoom2.default,
      storage: window.localStorage
    },

    services: [new _swap4.default({
      // TODO need init swapApp only after private keys created!!!!!!!!!!!!!!!!!!!
      eth: localStorage.getItem(_helpers.constants.privateKeyNames.eth),
      btc: localStorage.getItem(_helpers.constants.privateKeyNames.btc),
      eos: _helpers.constants.privateKeyNames.eosAccount
    }), new _swap6.default({
      repo: 'client/ipfs/data',
      EXPERIMENTAL: {
        pubsub: true
      },
      config: {
        Addresses: {
          Swarm: [_appConfig2.default.ipfs.swarm]
        }
      }
    }), new _swap8.default()],

    swaps: [new _swap9.EthSwap({
      address: _appConfig2.default.eth.contract,
      gasLimit: 1e5,
      abi: [{ 'constant': false, 'inputs': [{ 'name': 'val', 'type': 'uint256' }], 'name': 'testnetWithdrawn', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_secret', 'type': 'bytes32' }, { 'name': '_ownerAddress', 'type': 'address' }], 'name': 'withdraw', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '_participantAddress', 'type': 'address' }], 'name': 'getSecret', 'outputs': [{ 'name': '', 'type': 'bytes32' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '', 'type': 'address' }, { 'name': '', 'type': 'address' }], 'name': 'participantSigns', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'owner', 'outputs': [{ 'name': '', 'type': 'address' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '', 'type': 'address' }, { 'name': '', 'type': 'address' }], 'name': 'swaps', 'outputs': [{ 'name': 'secret', 'type': 'bytes32' }, { 'name': 'secretHash', 'type': 'bytes20' }, { 'name': 'createdAt', 'type': 'uint256' }, { 'name': 'balance', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_secretHash', 'type': 'bytes20' }, { 'name': '_participantAddress', 'type': 'address' }], 'name': 'createSwap', 'outputs': [], 'payable': true, 'stateMutability': 'payable', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'ratingContractAddress', 'outputs': [{ 'name': '', 'type': 'address' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '_ownerAddress', 'type': 'address' }], 'name': 'getBalance', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_participantAddress', 'type': 'address' }], 'name': 'refund', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'inputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'constructor' }, { 'anonymous': false, 'inputs': [{ 'indexed': false, 'name': 'createdAt', 'type': 'uint256' }], 'name': 'CreateSwap', 'type': 'event' }, { 'anonymous': false, 'inputs': [{ 'indexed': false, 'name': '_secret', 'type': 'bytes32' }, { 'indexed': false, 'name': 'addr', 'type': 'address' }, { 'indexed': false, 'name': 'amount', 'type': 'uint256' }], 'name': 'Withdraw', 'type': 'event' }, { 'anonymous': false, 'inputs': [], 'name': 'Close', 'type': 'event' }, { 'anonymous': false, 'inputs': [], 'name': 'Refund', 'type': 'event' }],
      fetchBalance: function fetchBalance(address) {
        return _actions2.default.eth.fetchBalance(address);
      }
    }), new _swap9.BtcSwap({
      fetchBalance: function fetchBalance(address) {
        return _actions2.default.btc.fetchBalance(address);
      },
      fetchUnspents: function fetchUnspents(scriptAddress) {
        return _actions2.default.btc.fetchUnspents(scriptAddress);
      },
      broadcastTx: function broadcastTx(txRaw) {
        return _actions2.default.btc.broadcastTx(txRaw);
      }
    }), new _swap9.EosSwap({
      swapAccount: _appConfig2.default.eos.contract
    }), new _swap9.EthTokenSwap({
      name: _swap.constants.COINS.noxon,
      address: _appConfig2.default.token.contract,
      decimals: _appConfig2.default.tokens.noxon.decimals,
      abi: [{ 'constant': false, 'inputs': [{ 'name': '_secret', 'type': 'bytes32' }, { 'name': '_ownerAddress', 'type': 'address' }], 'name': 'withdraw', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '_participantAddress', 'type': 'address' }], 'name': 'getSecret', 'outputs': [{ 'name': '', 'type': 'bytes32' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_ratingContractAddress', 'type': 'address' }], 'name': 'setReputationAddress', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '', 'type': 'address' }, { 'name': '', 'type': 'address' }], 'name': 'participantSigns', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'owner', 'outputs': [{ 'name': '', 'type': 'address' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_ownerAddress', 'type': 'address' }], 'name': 'abort', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '', 'type': 'address' }, { 'name': '', 'type': 'address' }], 'name': 'swaps', 'outputs': [{ 'name': 'token', 'type': 'address' }, { 'name': 'secret', 'type': 'bytes32' }, { 'name': 'secretHash', 'type': 'bytes20' }, { 'name': 'createdAt', 'type': 'uint256' }, { 'name': 'balance', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_secretHash', 'type': 'bytes20' }, { 'name': '_participantAddress', 'type': 'address' }, { 'name': '_value', 'type': 'uint256' }, { 'name': '_token', 'type': 'address' }], 'name': 'createSwap', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '_ownerAddress', 'type': 'address' }], 'name': 'checkSign', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_participantAddress', 'type': 'address' }], 'name': 'close', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'ratingContractAddress', 'outputs': [{ 'name': '', 'type': 'address' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_participantAddress', 'type': 'address' }], 'name': 'sign', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '_ownerAddress', 'type': 'address' }], 'name': 'getBalance', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_participantAddress', 'type': 'address' }], 'name': 'refund', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'inputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'constructor' }, { 'anonymous': false, 'inputs': [], 'name': 'Sign', 'type': 'event' }, { 'anonymous': false, 'inputs': [{ 'indexed': false, 'name': 'createdAt', 'type': 'uint256' }], 'name': 'CreateSwap', 'type': 'event' }, { 'anonymous': false, 'inputs': [], 'name': 'Withdraw', 'type': 'event' }, { 'anonymous': false, 'inputs': [], 'name': 'Close', 'type': 'event' }, { 'anonymous': false, 'inputs': [], 'name': 'Refund', 'type': 'event' }, { 'anonymous': false, 'inputs': [], 'name': 'Abort', 'type': 'event' }],
      tokenAddress: _appConfig2.default.tokens.noxon.address,
      tokenAbi: [{ 'constant': true, 'inputs': [], 'name': 'name', 'outputs': [{ 'name': '', 'type': 'string' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_spender', 'type': 'address' }, { 'name': '_amount', 'type': 'uint256' }], 'name': 'approve', 'outputs': [{ 'name': 'success', 'type': 'bool' }], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'totalSupply', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_from', 'type': 'address' }, { 'name': '_to', 'type': 'address' }, { 'name': '_amount', 'type': 'uint256' }], 'name': 'transferFrom', 'outputs': [{ 'name': 'success', 'type': 'bool' }], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': false, 'inputs': [], 'name': 'getBurnPrice', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'decimals', 'outputs': [{ 'name': '', 'type': 'uint8' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'manager', 'outputs': [{ 'name': '', 'type': 'address' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [], 'name': 'unlockEmission', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '_owner', 'type': 'address' }], 'name': 'balanceOf', 'outputs': [{ 'name': 'balance', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'emissionlocked', 'outputs': [{ 'name': '', 'type': 'bool' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [], 'name': 'acceptOwnership', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': false, 'inputs': [], 'name': 'lockEmission', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'owner', 'outputs': [{ 'name': '', 'type': 'address' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'symbol', 'outputs': [{ 'name': '', 'type': 'string' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [], 'name': 'burnAll', 'outputs': [{ 'name': '', 'type': 'bool' }], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_newManager', 'type': 'address' }], 'name': 'changeManager', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_newOwner', 'type': 'address' }], 'name': 'changeOwner', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_to', 'type': 'address' }, { 'name': '_amount', 'type': 'uint256' }], 'name': 'transfer', 'outputs': [{ 'name': 'success', 'type': 'bool' }], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'emissionPrice', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [], 'name': 'addToReserve', 'outputs': [{ 'name': '', 'type': 'bool' }], 'payable': true, 'stateMutability': 'payable', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'burnPrice', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': 'tokenAddress', 'type': 'address' }, { 'name': 'amount', 'type': 'uint256' }], 'name': 'transferAnyERC20Token', 'outputs': [{ 'name': 'success', 'type': 'bool' }], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '_owner', 'type': 'address' }, { 'name': '_spender', 'type': 'address' }], 'name': 'allowance', 'outputs': [{ 'name': 'remaining', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [], 'name': 'NoxonInit', 'outputs': [{ 'name': '', 'type': 'bool' }], 'payable': true, 'stateMutability': 'payable', 'type': 'function' }, { 'constant': false, 'inputs': [], 'name': 'acceptManagership', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'inputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'constructor' }, { 'payable': true, 'stateMutability': 'payable', 'type': 'fallback' }, { 'anonymous': false, 'inputs': [{ 'indexed': true, 'name': 'buyer', 'type': 'address' }, { 'indexed': false, 'name': 'ethers', 'type': 'uint256' }, { 'indexed': false, 'name': '_emissionedPrice', 'type': 'uint256' }, { 'indexed': false, 'name': 'amountOfTokens', 'type': 'uint256' }], 'name': 'TokenBought', 'type': 'event' }, { 'anonymous': false, 'inputs': [{ 'indexed': true, 'name': 'buyer', 'type': 'address' }, { 'indexed': false, 'name': 'ethers', 'type': 'uint256' }, { 'indexed': false, 'name': '_burnedPrice', 'type': 'uint256' }, { 'indexed': false, 'name': 'amountOfTokens', 'type': 'uint256' }], 'name': 'TokenBurned', 'type': 'event' }, { 'anonymous': false, 'inputs': [{ 'indexed': false, 'name': 'etherReserved', 'type': 'uint256' }], 'name': 'EtherReserved', 'type': 'event' }, { 'anonymous': false, 'inputs': [{ 'indexed': true, 'name': '_from', 'type': 'address' }, { 'indexed': true, 'name': '_to', 'type': 'address' }, { 'indexed': false, 'name': '_value', 'type': 'uint256' }], 'name': 'Transfer', 'type': 'event' }, { 'anonymous': false, 'inputs': [{ 'indexed': true, 'name': '_owner', 'type': 'address' }, { 'indexed': true, 'name': '_spender', 'type': 'address' }, { 'indexed': false, 'name': '_value', 'type': 'uint256' }], 'name': 'Approval', 'type': 'event' }],
      fetchBalance: function fetchBalance(address) {
        return _actions2.default.token.fetchBalance(address, _appConfig2.default.tokens.noxon.address, _appConfig2.default.tokens.noxon.decimals);
      }
    }), new _swap9.EthTokenSwap({
      name: _swap.constants.COINS.swap,
      address: _appConfig2.default.token.contract,
      decimals: _appConfig2.default.tokens.swap.decimals,
      abi: [{ 'constant': false, 'inputs': [{ 'name': '_secret', 'type': 'bytes32' }, { 'name': '_ownerAddress', 'type': 'address' }], 'name': 'withdraw', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '_participantAddress', 'type': 'address' }], 'name': 'getSecret', 'outputs': [{ 'name': '', 'type': 'bytes32' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_ratingContractAddress', 'type': 'address' }], 'name': 'setReputationAddress', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '', 'type': 'address' }, { 'name': '', 'type': 'address' }], 'name': 'participantSigns', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'owner', 'outputs': [{ 'name': '', 'type': 'address' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_ownerAddress', 'type': 'address' }], 'name': 'abort', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '', 'type': 'address' }, { 'name': '', 'type': 'address' }], 'name': 'swaps', 'outputs': [{ 'name': 'token', 'type': 'address' }, { 'name': 'secret', 'type': 'bytes32' }, { 'name': 'secretHash', 'type': 'bytes20' }, { 'name': 'createdAt', 'type': 'uint256' }, { 'name': 'balance', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_secretHash', 'type': 'bytes20' }, { 'name': '_participantAddress', 'type': 'address' }, { 'name': '_value', 'type': 'uint256' }, { 'name': '_token', 'type': 'address' }], 'name': 'createSwap', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '_ownerAddress', 'type': 'address' }], 'name': 'checkSign', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_participantAddress', 'type': 'address' }], 'name': 'close', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'ratingContractAddress', 'outputs': [{ 'name': '', 'type': 'address' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_participantAddress', 'type': 'address' }], 'name': 'sign', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '_ownerAddress', 'type': 'address' }], 'name': 'getBalance', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_participantAddress', 'type': 'address' }], 'name': 'refund', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'inputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'constructor' }, { 'anonymous': false, 'inputs': [], 'name': 'Sign', 'type': 'event' }, { 'anonymous': false, 'inputs': [{ 'indexed': false, 'name': 'createdAt', 'type': 'uint256' }], 'name': 'CreateSwap', 'type': 'event' }, { 'anonymous': false, 'inputs': [], 'name': 'Withdraw', 'type': 'event' }, { 'anonymous': false, 'inputs': [], 'name': 'Close', 'type': 'event' }, { 'anonymous': false, 'inputs': [], 'name': 'Refund', 'type': 'event' }, { 'anonymous': false, 'inputs': [], 'name': 'Abort', 'type': 'event' }],
      tokenAddress: _appConfig2.default.tokens.swap.address,
      tokenAbi: [{ 'constant': true, 'inputs': [], 'name': 'name', 'outputs': [{ 'name': '', 'type': 'string' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_spender', 'type': 'address' }, { 'name': '_amount', 'type': 'uint256' }], 'name': 'approve', 'outputs': [{ 'name': 'success', 'type': 'bool' }], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'totalSupply', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_from', 'type': 'address' }, { 'name': '_to', 'type': 'address' }, { 'name': '_amount', 'type': 'uint256' }], 'name': 'transferFrom', 'outputs': [{ 'name': 'success', 'type': 'bool' }], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': false, 'inputs': [], 'name': 'getBurnPrice', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'decimals', 'outputs': [{ 'name': '', 'type': 'uint8' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'manager', 'outputs': [{ 'name': '', 'type': 'address' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [], 'name': 'unlockEmission', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '_owner', 'type': 'address' }], 'name': 'balanceOf', 'outputs': [{ 'name': 'balance', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'emissionlocked', 'outputs': [{ 'name': '', 'type': 'bool' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [], 'name': 'acceptOwnership', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': false, 'inputs': [], 'name': 'lockEmission', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'owner', 'outputs': [{ 'name': '', 'type': 'address' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'symbol', 'outputs': [{ 'name': '', 'type': 'string' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [], 'name': 'burnAll', 'outputs': [{ 'name': '', 'type': 'bool' }], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_newManager', 'type': 'address' }], 'name': 'changeManager', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_newOwner', 'type': 'address' }], 'name': 'changeOwner', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_to', 'type': 'address' }, { 'name': '_amount', 'type': 'uint256' }], 'name': 'transfer', 'outputs': [{ 'name': 'success', 'type': 'bool' }], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'emissionPrice', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [], 'name': 'addToReserve', 'outputs': [{ 'name': '', 'type': 'bool' }], 'payable': true, 'stateMutability': 'payable', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'burnPrice', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': 'tokenAddress', 'type': 'address' }, { 'name': 'amount', 'type': 'uint256' }], 'name': 'transferAnyERC20Token', 'outputs': [{ 'name': 'success', 'type': 'bool' }], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '_owner', 'type': 'address' }, { 'name': '_spender', 'type': 'address' }], 'name': 'allowance', 'outputs': [{ 'name': 'remaining', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [], 'name': 'NoxonInit', 'outputs': [{ 'name': '', 'type': 'bool' }], 'payable': true, 'stateMutability': 'payable', 'type': 'function' }, { 'constant': false, 'inputs': [], 'name': 'acceptManagership', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'inputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'constructor' }, { 'payable': true, 'stateMutability': 'payable', 'type': 'fallback' }, { 'anonymous': false, 'inputs': [{ 'indexed': true, 'name': 'buyer', 'type': 'address' }, { 'indexed': false, 'name': 'ethers', 'type': 'uint256' }, { 'indexed': false, 'name': '_emissionedPrice', 'type': 'uint256' }, { 'indexed': false, 'name': 'amountOfTokens', 'type': 'uint256' }], 'name': 'TokenBought', 'type': 'event' }, { 'anonymous': false, 'inputs': [{ 'indexed': true, 'name': 'buyer', 'type': 'address' }, { 'indexed': false, 'name': 'ethers', 'type': 'uint256' }, { 'indexed': false, 'name': '_burnedPrice', 'type': 'uint256' }, { 'indexed': false, 'name': 'amountOfTokens', 'type': 'uint256' }], 'name': 'TokenBurned', 'type': 'event' }, { 'anonymous': false, 'inputs': [{ 'indexed': false, 'name': 'etherReserved', 'type': 'uint256' }], 'name': 'EtherReserved', 'type': 'event' }, { 'anonymous': false, 'inputs': [{ 'indexed': true, 'name': '_from', 'type': 'address' }, { 'indexed': true, 'name': '_to', 'type': 'address' }, { 'indexed': false, 'name': '_value', 'type': 'uint256' }], 'name': 'Transfer', 'type': 'event' }, { 'anonymous': false, 'inputs': [{ 'indexed': true, 'name': '_owner', 'type': 'address' }, { 'indexed': true, 'name': '_spender', 'type': 'address' }, { 'indexed': false, 'name': '_value', 'type': 'uint256' }], 'name': 'Approval', 'type': 'event' }],
      fetchBalance: function fetchBalance(address) {
        return _actions2.default.token.fetchBalance(address, _appConfig2.default.tokens.swap.address, _appConfig2.default.tokens.swap.decimals);
      }
    }), new _swap9.EthTokenSwap({
      name: _swap.constants.COINS.jot,
      address: _appConfig2.default.token.contract,
      decimals: _appConfig2.default.tokens.jot.decimals,
      abi: [{ 'constant': false, 'inputs': [{ 'name': '_secret', 'type': 'bytes32' }, { 'name': '_ownerAddress', 'type': 'address' }], 'name': 'withdraw', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '_participantAddress', 'type': 'address' }], 'name': 'getSecret', 'outputs': [{ 'name': '', 'type': 'bytes32' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_ratingContractAddress', 'type': 'address' }], 'name': 'setReputationAddress', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '', 'type': 'address' }, { 'name': '', 'type': 'address' }], 'name': 'participantSigns', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'owner', 'outputs': [{ 'name': '', 'type': 'address' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_ownerAddress', 'type': 'address' }], 'name': 'abort', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '', 'type': 'address' }, { 'name': '', 'type': 'address' }], 'name': 'swaps', 'outputs': [{ 'name': 'token', 'type': 'address' }, { 'name': 'secret', 'type': 'bytes32' }, { 'name': 'secretHash', 'type': 'bytes20' }, { 'name': 'createdAt', 'type': 'uint256' }, { 'name': 'balance', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_secretHash', 'type': 'bytes20' }, { 'name': '_participantAddress', 'type': 'address' }, { 'name': '_value', 'type': 'uint256' }, { 'name': '_token', 'type': 'address' }], 'name': 'createSwap', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '_ownerAddress', 'type': 'address' }], 'name': 'checkSign', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_participantAddress', 'type': 'address' }], 'name': 'close', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'ratingContractAddress', 'outputs': [{ 'name': '', 'type': 'address' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_participantAddress', 'type': 'address' }], 'name': 'sign', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '_ownerAddress', 'type': 'address' }], 'name': 'getBalance', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_participantAddress', 'type': 'address' }], 'name': 'refund', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'inputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'constructor' }, { 'anonymous': false, 'inputs': [], 'name': 'Sign', 'type': 'event' }, { 'anonymous': false, 'inputs': [{ 'indexed': false, 'name': 'createdAt', 'type': 'uint256' }], 'name': 'CreateSwap', 'type': 'event' }, { 'anonymous': false, 'inputs': [], 'name': 'Withdraw', 'type': 'event' }, { 'anonymous': false, 'inputs': [], 'name': 'Close', 'type': 'event' }, { 'anonymous': false, 'inputs': [], 'name': 'Refund', 'type': 'event' }, { 'anonymous': false, 'inputs': [], 'name': 'Abort', 'type': 'event' }],
      tokenAddress: _appConfig2.default.tokens.jot.address,
      tokenAbi: [{ 'constant': true, 'inputs': [], 'name': 'name', 'outputs': [{ 'name': '', 'type': 'string' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_spender', 'type': 'address' }, { 'name': '_amount', 'type': 'uint256' }], 'name': 'approve', 'outputs': [{ 'name': 'success', 'type': 'bool' }], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'totalSupply', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_from', 'type': 'address' }, { 'name': '_to', 'type': 'address' }, { 'name': '_amount', 'type': 'uint256' }], 'name': 'transferFrom', 'outputs': [{ 'name': 'success', 'type': 'bool' }], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': false, 'inputs': [], 'name': 'getBurnPrice', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'decimals', 'outputs': [{ 'name': '', 'type': 'uint8' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'manager', 'outputs': [{ 'name': '', 'type': 'address' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [], 'name': 'unlockEmission', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '_owner', 'type': 'address' }], 'name': 'balanceOf', 'outputs': [{ 'name': 'balance', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'emissionlocked', 'outputs': [{ 'name': '', 'type': 'bool' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [], 'name': 'acceptOwnership', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': false, 'inputs': [], 'name': 'lockEmission', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'owner', 'outputs': [{ 'name': '', 'type': 'address' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'symbol', 'outputs': [{ 'name': '', 'type': 'string' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [], 'name': 'burnAll', 'outputs': [{ 'name': '', 'type': 'bool' }], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_newManager', 'type': 'address' }], 'name': 'changeManager', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_newOwner', 'type': 'address' }], 'name': 'changeOwner', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_to', 'type': 'address' }, { 'name': '_amount', 'type': 'uint256' }], 'name': 'transfer', 'outputs': [{ 'name': 'success', 'type': 'bool' }], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'emissionPrice', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [], 'name': 'addToReserve', 'outputs': [{ 'name': '', 'type': 'bool' }], 'payable': true, 'stateMutability': 'payable', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'burnPrice', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': 'tokenAddress', 'type': 'address' }, { 'name': 'amount', 'type': 'uint256' }], 'name': 'transferAnyERC20Token', 'outputs': [{ 'name': 'success', 'type': 'bool' }], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '_owner', 'type': 'address' }, { 'name': '_spender', 'type': 'address' }], 'name': 'allowance', 'outputs': [{ 'name': 'remaining', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [], 'name': 'NoxonInit', 'outputs': [{ 'name': '', 'type': 'bool' }], 'payable': true, 'stateMutability': 'payable', 'type': 'function' }, { 'constant': false, 'inputs': [], 'name': 'acceptManagership', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'inputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'constructor' }, { 'payable': true, 'stateMutability': 'payable', 'type': 'fallback' }, { 'anonymous': false, 'inputs': [{ 'indexed': true, 'name': 'buyer', 'type': 'address' }, { 'indexed': false, 'name': 'ethers', 'type': 'uint256' }, { 'indexed': false, 'name': '_emissionedPrice', 'type': 'uint256' }, { 'indexed': false, 'name': 'amountOfTokens', 'type': 'uint256' }], 'name': 'TokenBought', 'type': 'event' }, { 'anonymous': false, 'inputs': [{ 'indexed': true, 'name': 'buyer', 'type': 'address' }, { 'indexed': false, 'name': 'ethers', 'type': 'uint256' }, { 'indexed': false, 'name': '_burnedPrice', 'type': 'uint256' }, { 'indexed': false, 'name': 'amountOfTokens', 'type': 'uint256' }], 'name': 'TokenBurned', 'type': 'event' }, { 'anonymous': false, 'inputs': [{ 'indexed': false, 'name': 'etherReserved', 'type': 'uint256' }], 'name': 'EtherReserved', 'type': 'event' }, { 'anonymous': false, 'inputs': [{ 'indexed': true, 'name': '_from', 'type': 'address' }, { 'indexed': true, 'name': '_to', 'type': 'address' }, { 'indexed': false, 'name': '_value', 'type': 'uint256' }], 'name': 'Transfer', 'type': 'event' }, { 'anonymous': false, 'inputs': [{ 'indexed': true, 'name': '_owner', 'type': 'address' }, { 'indexed': true, 'name': '_spender', 'type': 'address' }, { 'indexed': false, 'name': '_value', 'type': 'uint256' }], 'name': 'Approval', 'type': 'event' }],
      fetchBalance: function fetchBalance(address) {
        return _actions2.default.token.fetchBalance(address, _appConfig2.default.tokens.jot.address, _appConfig2.default.tokens.jot.decimals);
      }
    })],

    flows: [_swap10.ETH2BTC, _swap10.BTC2ETH, (0, _swap10.ETHTOKEN2BTC)(_swap.constants.COINS.noxon), (0, _swap10.BTC2ETHTOKEN)(_swap.constants.COINS.noxon), (0, _swap10.ETHTOKEN2BTC)(_swap.constants.COINS.swap), (0, _swap10.ETHTOKEN2BTC)(_swap.constants.COINS.swap), (0, _swap10.ETHTOKEN2BTC)(_swap.constants.COINS.jot), (0, _swap10.BTC2ETHTOKEN)(_swap.constants.COINS.jot),
    //
    // ETHTOKEN2USDT(constants.COINS.swap),
    // USDT2ETHTOKEN(constants.COINS.swap),

    _swap10.BTC2EOS, _swap10.EOS2BTC]
  });
};

exports.createSwapApp = createSwapApp;

/***/ }),
/* 1224 */,
/* 1225 */,
/* 1226 */,
/* 1227 */,
/* 1228 */,
/* 1229 */,
/* 1230 */,
/* 1231 */,
/* 1232 */,
/* 1233 */,
/* 1234 */,
/* 1235 */,
/* 1236 */,
/* 1237 */,
/* 1238 */,
/* 1239 */,
/* 1240 */,
/* 1241 */,
/* 1242 */,
/* 1243 */,
/* 1244 */,
/* 1245 */,
/* 1246 */,
/* 1247 */,
/* 1248 */,
/* 1249 */,
/* 1250 */,
/* 1251 */,
/* 1252 */,
/* 1253 */,
/* 1254 */,
/* 1255 */,
/* 1256 */,
/* 1257 */,
/* 1258 */,
/* 1259 */,
/* 1260 */,
/* 1261 */,
/* 1262 */,
/* 1263 */,
/* 1264 */,
/* 1265 */,
/* 1266 */,
/* 1267 */,
/* 1268 */,
/* 1269 */,
/* 1270 */,
/* 1271 */,
/* 1272 */,
/* 1273 */,
/* 1274 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./": 219,
	"./SwapAuth": 302,
	"./SwapAuth.js": 302,
	"./btc": 503,
	"./btc.js": 503,
	"./eos": 504,
	"./eos.js": 504,
	"./eth": 505,
	"./eth.js": 505,
	"./index": 219,
	"./index.js": 219
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1274;

/***/ }),
/* 1275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(281);

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = __webpack_require__(220);

var _typeof3 = _interopRequireDefault(_typeof2);

var _extends2 = __webpack_require__(88);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(44);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

var _swap = __webpack_require__(17);

var _swap2 = _interopRequireDefault(_swap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwapRoom = function (_ServiceInterface) {
  (0, _inherits3.default)(SwapRoom, _ServiceInterface);
  (0, _createClass3.default)(SwapRoom, null, [{
    key: 'name',
    get: function get() {
      return 'room';
    }
  }]);

  function SwapRoom(config) {
    (0, _classCallCheck3.default)(this, SwapRoom);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SwapRoom.__proto__ || (0, _getPrototypeOf2.default)(SwapRoom)).call(this));

    _this._handleUserOnline = function (peer) {
      if (peer !== _this.peer) {
        _this._events.dispatch('user online', peer);
      }
    };

    _this._handleUserOffline = function (peer) {
      if (peer !== _this.peer) {
        _this._events.dispatch('user offline', peer);
      }
    };

    _this._handleNewMessage = function (message) {
      var from = message.from,
          rawData = message.data;


      if (from === _this.peer) {
        return;
      }

      var parsedData = void 0;

      try {
        parsedData = JSON.parse(rawData.toString());
      } catch (err) {
        console.error('parse message data err:', err);
      }

      var _parsedData = parsedData,
          fromAddress = _parsedData.fromAddress,
          data = _parsedData.data,
          sign = _parsedData.sign,
          event = _parsedData.event,
          action = _parsedData.action;


      if (!data) {
        return;
      }

      var recover = _this._recoverMessage(data, sign);

      if (recover !== fromAddress) {
        console.error('Wrong message sign! Message from: ' + fromAddress + ', recover: ' + recover);
        return;
      }

      if (action === 'active') {
        _this.acknowledgeReceipt(parsedData);
      }

      _this._events.dispatch(event, (0, _extends3.default)({
        fromPeer: from
      }, data));
    };

    if (!config || (typeof config === 'undefined' ? 'undefined' : (0, _typeof3.default)(config)) !== 'object') {
      throw new Error('SwapRoomService: "config" of type object required');
    }

    _this._serviceName = 'room';
    _this._config = config;
    _this._events = new _swap.Events();
    _this.peer = null;
    _this.connection = null;
    _this.roomName = null;
    return _this;
  }

  (0, _createClass3.default)(SwapRoom, [{
    key: 'initService',
    value: function initService() {
      var _this2 = this;

      if (!_swap2.default.env.Ipfs) {
        throw new Error('SwapRoomService: Ipfs required');
      }
      if (!_swap2.default.env.IpfsRoom) {
        throw new Error('SwapRoomService: IpfsRoom required');
      }

      var ipfs = new _swap2.default.env.Ipfs(this._config).on('ready', function () {
        return ipfs.id(function (err, info) {
          console.info('IPFS ready!');

          if (err) {
            throw err;
          }

          _this2._init({
            peer: info.id,
            ipfsConnection: ipfs
          });
        });
      }).on('error', function (err) {
        console.log('IPFS error!', err);
      });
    }
  }, {
    key: '_init',
    value: function _init(_ref) {
      var _this3 = this;

      var peer = _ref.peer,
          ipfsConnection = _ref.ipfsConnection;

      if (!ipfsConnection) {
        setTimeout(function () {
          _this3._init({ peer: peer, ipfsConnection: ipfsConnection });
        }, 999);
        return;
      }

      this.peer = peer;
      this.roomName = _swap2.default.isMainNet() ? 'swap.online' : 'testnet.swap.online';

      console.log('Using room: ' + this.roomName);

      this.connection = _swap2.default.env.IpfsRoom(ipfsConnection, this.roomName, {
        pollInterval: 1000
      });

      this.connection.on('peer joined', this._handleUserOnline);
      this.connection.on('peer left', this._handleUserOffline);
      this.connection.on('message', this._handleNewMessage);

      this._events.dispatch('ready');
    }
  }, {
    key: 'on',
    value: function on(eventName, handler) {
      this._events.subscribe(eventName, handler);
    }
  }, {
    key: 'off',
    value: function off(eventName, handler) {
      this._events.unsubscribe(eventName, handler);
    }
  }, {
    key: 'once',
    value: function once(eventName, handler) {
      this._events.once(eventName, handler);
    }
  }, {
    key: 'subscribe',
    value: function subscribe(eventName, handler) {
      this._events.subscribe(eventName, handler);
    }
  }, {
    key: 'unsubscribe',
    value: function unsubscribe(eventName, handler) {
      this._events.unsubscribe(eventName, handler);
    }
  }, {
    key: '_recoverMessage',
    value: function _recoverMessage(message, sign) {
      var hash = _swap2.default.env.web3.utils.soliditySha3((0, _stringify2.default)(message));
      var recover = _swap2.default.env.web3.eth.accounts.recover(hash, sign.signature);

      return recover;
    }
  }, {
    key: '_signMessage',
    value: function _signMessage(message) {
      var hash = _swap2.default.env.web3.utils.soliditySha3((0, _stringify2.default)(message));
      var sign = _swap2.default.env.web3.eth.accounts.sign(hash, _swap2.default.services.auth.accounts.eth.privateKey);

      return sign;
    }
  }, {
    key: 'checkReceiving',
    value: function checkReceiving(message, callback) {
      var _this4 = this;

      var address = message.fromAddress;

      var waitReceipt = function waitReceipt(data) {
        if (!data.action || data.action !== 'confirmation') {
          return;
        }

        if ((0, _stringify2.default)(message.data) === (0, _stringify2.default)(data.message)) {
          _this4.unsubscribe(address, waitReceipt);

          if (_this4.CheckReceiptsT[message.peer]) {
            clearTimeout(_this4.CheckReceiptsT[message.peer]);
          }

          callback(true);
        }
      };

      this.subscribe(address, waitReceipt);

      if (!this.CheckReceiptsT) {
        this.CheckReceiptsT = {};
      }

      this.CheckReceiptsT[message.peer] = setTimeout(function () {
        _this4.unsubscribe(address, waitReceipt);

        callback(false);
      }, 15000);
    }
  }, {
    key: 'sendConfirmation',
    value: function sendConfirmation(peer, message) {
      var _this5 = this;

      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var repeat = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 9;


      if (!this.connection) {
        setTimeout(function () {
          _this5.sendConfirmation(message, callback);
        }, 1000);
        return;
      }

      if (message.action === 'confirmation' && peer !== this.peer) {
        return;
      }

      message = this.sendMessagePeer(peer, message);

      this.checkReceiving(message, function (delivered) {
        if (!delivered && repeat > 0) {
          repeat--;
          setTimeout(function () {
            _this5.sendConfirmation(peer, message, callback, repeat);
          }, 1000);
          return;
        }

        if (callback) callback(delivered);
      });
    }
  }, {
    key: 'acknowledgeReceipt',
    value: function acknowledgeReceipt(message) {
      if (!message.peer || !message.action || message.action === 'confirmation' || message.action === 'active') {
        return;
      }

      var fromAddress = message.fromAddress,
          data = message.data;


      this.sendMessagePeer(fromAddress, {
        action: 'confirmation',
        data: data
      });
    }
  }, {
    key: 'sendMessagePeer',
    value: function sendMessagePeer(peer, message) {
      var _this6 = this;

      if (!this.connection) {
        if (message.action !== 'active') {
          setTimeout(function () {
            _this6.sendMessagePeer(peer, message);
          }, 999);
        }
        return;
      }

      var data = message.data,
          event = message.event;

      var sign = this._signMessage(data);

      this.connection.sendTo(peer, (0, _stringify2.default)({
        fromAddress: _swap2.default.services.auth.accounts.eth.address,
        data: data,
        event: event,
        sign: sign
      }));

      return message;
    }
  }, {
    key: 'sendMessageRoom',
    value: function sendMessageRoom(message) {
      var data = message.data,
          event = message.event;

      var sign = this._signMessage(data);

      this.connection.broadcast((0, _stringify2.default)({
        fromAddress: _swap2.default.services.auth.accounts.eth.address,
        data: data,
        event: event,
        sign: sign
      }));
    }
  }]);
  return SwapRoom;
}(_swap.ServiceInterface);

exports.default = SwapRoom;
module.exports = exports['default'];

/***/ }),
/* 1276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SwapOrders = __webpack_require__(1277);

var _SwapOrders2 = _interopRequireDefault(_SwapOrders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SwapOrders2.default;
module.exports = exports['default'];

/***/ }),
/* 1277 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(277);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(44);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

var _keys = __webpack_require__(84);

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = __webpack_require__(88);

var _extends3 = _interopRequireDefault(_extends2);

var _bignumber = __webpack_require__(202);

var _bignumber2 = _interopRequireDefault(_bignumber);

var _swap = __webpack_require__(17);

var _swap2 = _interopRequireDefault(_swap);

var _swap3 = __webpack_require__(506);

var _swap4 = _interopRequireDefault(_swap3);

var _aggregation2 = __webpack_require__(1278);

var _aggregation3 = _interopRequireDefault(_aggregation2);

var _events = __webpack_require__(508);

var _events2 = _interopRequireDefault(_events);

var _Order = __webpack_require__(1286);

var _Order2 = _interopRequireDefault(_Order);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getUniqueId = function () {
  var id = Date.now();
  return function () {
    return _swap2.default.services.room.peer + '-' + ++id;
  };
}();

var checkIncomeOrderFormat = function checkIncomeOrderFormat(order) {
  console.log('order check', order);
  var format = {
    id: '?String',
    owner: (0, _extends3.default)({
      peer: 'String',
      reputation: _swap.util.typeforce.t.maybe(_swap.util.typeforce.isNumeric)
    }, function () {
      var result = {};
      (0, _keys2.default)(_swap.constants.COINS).forEach(function (key) {
        result[key] = _swap.util.typeforce.t.maybe({
          address: _swap.util.typeforce.isCoinAddress[_swap.constants.COINS[key]],
          publicKey: _swap.util.typeforce.isPublicKey[_swap.constants.COINS[key]]
        });
      });
      return result;
    }()),
    buyCurrency: _swap.util.typeforce.isCoinName,
    sellCurrency: _swap.util.typeforce.isCoinName,
    buyAmount: _swap.util.typeforce.isNumeric,
    sellAmount: _swap.util.typeforce.isNumeric,
    exchangeRate: _swap.util.typeforce.t.maybe(_swap.util.typeforce.isNumeric),
    isProcessing: '?Boolean',
    isRequested: '?Boolean'
  };

  var isValid = _swap.util.typeforce.check(format, order, true);

  if (!isValid) {
    console.log('Wrong income order format. Excepted:', format, 'got:', order);
  }

  return isValid;
};

var checkIncomeOrderOwner = function checkIncomeOrderOwner(_ref, fromPeer) {
  var peer = _ref.owner.peer;
  return peer === fromPeer;
};

var checkIncomeOrder = function checkIncomeOrder(order, fromPeer) {
  console.log('checkIncomeOrder', order);
  console.log('checkIncomeOrder fromPeer', fromPeer);
  var isFormatValid = checkIncomeOrderFormat(order);
  var isOwnerValid = checkIncomeOrderOwner(order, fromPeer);

  return isFormatValid && isOwnerValid;
};

var SwapOrders = function (_aggregation) {
  (0, _inherits3.default)(SwapOrders, _aggregation);
  (0, _createClass3.default)(SwapOrders, null, [{
    key: 'name',
    get: function get() {
      return 'orders';
    }
  }]);

  function SwapOrders() {
    (0, _classCallCheck3.default)(this, SwapOrders);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SwapOrders.__proto__ || (0, _getPrototypeOf2.default)(SwapOrders)).call(this));

    _this._handleReady = function () {
      _this._persistMyOrders();
    };

    _this._handleUserOnline = function (peer) {
      var myOrders = _this.getMyOrders();

      if (myOrders.length) {
        // clean orders from other additional props
        myOrders = myOrders.map(function (item) {
          return _swap.util.pullProps(item, 'id', 'owner', 'buyCurrency', 'sellCurrency', 'buyAmount', 'exchangeRate', 'sellAmount', 'isRequested', 'isProcessing');
        });

        _swap2.default.services.room.sendMessagePeer(peer, {
          event: 'new orders',
          data: {
            orders: myOrders
          }
        });
      }
    };

    _this._handleUserOffline = function (peer) {
      var peerOrders = _this.getPeerOrders(peer);

      if (peerOrders.length) {
        peerOrders.forEach(function (_ref2) {
          var id = _ref2.id;

          _this._handleRemove(id);
        });
      }
    };

    _this._handleNewOrders = function (_ref3) {
      var fromPeer = _ref3.fromPeer,
          orders = _ref3.orders;

      // ductape to check if such orders already exist
      var filteredOrders = orders.filter(function (_ref4) {
        var id = _ref4.id,
            peer = _ref4.owner.peer;
        return !_this.getByKey(id) && peer === fromPeer;
      });

      _this._handleMultipleCreate({ orders: filteredOrders, fromPeer: fromPeer });
    };

    _this._handleNewOrder = function (_ref5) {
      var fromPeer = _ref5.fromPeer,
          order = _ref5.order;

      if (order && order.owner && order.owner.peer === fromPeer) {
        if (checkIncomeOrder(order, fromPeer)) {
          _this._handleCreate(order);
        }
      }
    };

    _this._handleRemoveOrder = function (_ref6) {
      var fromPeer = _ref6.fromPeer,
          orderId = _ref6.orderId;

      var order = _this.getByKey(orderId);

      if (order && order.owner && order.owner.peer === fromPeer) {
        _this._handleRemove(orderId);
      }
    };

    _this._serviceName = 'orders';
    _this._dependsOn = [_swap4.default];
    return _this;
  }

  (0, _createClass3.default)(SwapOrders, [{
    key: 'initService',
    value: function initService() {
      _swap2.default.services.room.on('ready', this._handleReady);
      _swap2.default.services.room.on('user online', this._handleUserOnline);
      _swap2.default.services.room.on('user offline', this._handleUserOffline);
      _swap2.default.services.room.on('new orders', this._handleNewOrders);
      _swap2.default.services.room.on('new order', this._handleNewOrder);
      _swap2.default.services.room.on('remove order', this._handleRemoveOrder);
    }
  }, {
    key: '_persistMyOrders',
    value: function _persistMyOrders() {
      var _this2 = this;

      this.getMyOrders().forEach(function (orderData) {
        _this2._handleCreate(orderData);
      });
    }

    /**
     *
     * @param {object} data
     * @param {string} data.id
     * @param {object} data.owner
     * @param {string} data.owner.peer
     * @param {number} data.owner.reputation
     * @param {object} data.owner.<currency>
     * @param {string} data.owner.<currency>.address
     * @param {string} data.owner.<currency>.publicKey
     * @param {string} data.buyCurrency
     * @param {string} data.sellCurrency
     * @param {number} data.buyAmount
     * @param {number} data.sellAmount
     * @param {boolean} data.isProcessing
     * @param {boolean} data.isRequested
     */

  }, {
    key: '_create',
    value: function _create(data) {
      var id = data.id,
          buyAmount = data.buyAmount,
          sellAmount = data.sellAmount,
          buyCurrency = data.buyCurrency,
          sellCurrency = data.sellCurrency,
          rest = (0, _objectWithoutProperties3.default)(data, ['id', 'buyAmount', 'sellAmount', 'buyCurrency', 'sellCurrency']);


      var order = new _Order2.default(this, (0, _extends3.default)({
        id: id || getUniqueId(),
        buyAmount: new _bignumber2.default(String(buyAmount)),
        sellAmount: new _bignumber2.default(String(sellAmount)),
        buyCurrency: buyCurrency.toUpperCase(),
        sellCurrency: sellCurrency.toUpperCase()
      }, rest));

      this.append(order, order.id);

      return order;
    }
  }, {
    key: '_handleCreate',
    value: function _handleCreate(data) {
      var order = this._create(data);

      if (order) {
        _events2.default.dispatch('new order', order);
      }
    }
  }, {
    key: '_handleMultipleCreate',
    value: function _handleMultipleCreate(_ref7) {
      var _this3 = this;

      var orders = _ref7.orders,
          fromPeer = _ref7.fromPeer;

      var newOrders = [];

      orders.forEach(function (data) {
        if (checkIncomeOrder(data, fromPeer)) {
          var order = _this3._create(data);

          newOrders.push(order);
        }
      });

      if (newOrders.length) {
        _events2.default.dispatch('new orders', newOrders);
      }
    }

    /**
     *
     * @param {string} orderId
     */

  }, {
    key: '_handleRemove',
    value: function _handleRemove(orderId) {
      try {
        var order = this.getByKey(orderId);

        if (order) {
          this.removeByKey(orderId);
          _events2.default.dispatch('remove order', order);
        }
      } catch (err) {}
    }
  }, {
    key: '_saveMyOrders',
    value: function _saveMyOrders() {
      var myOrders = this.items.filter(function (_ref8) {
        var peer = _ref8.owner.peer;
        return peer === _swap2.default.services.room.peer;
      });

      // clean orders from other additional props
      // TODO need to add functionality to sync `requests` for users who going offline / online
      // problem: when I going online and persisting my orders need to show only online users requests,
      // but then user comes online need to change status. Ofc we can leave this bcs developers can do this themselves
      // with filters - skip requests where user is offline, but it looks like not very good
      myOrders = myOrders.map(function (item) {
        return _swap.util.pullProps(item, 'id', 'owner', 'buyCurrency', 'sellCurrency', 'buyAmount', 'sellAmount', 'exchangeRate', 'participant', 'requests', 'isRequested', 'isProcessing');
      });

      _swap2.default.env.storage.setItem('myOrders', myOrders);
    }
  }, {
    key: 'getMyOrders',
    value: function getMyOrders() {
      return _swap2.default.env.storage.getItem('myOrders') || [];
    }
  }, {
    key: 'getPeerOrders',
    value: function getPeerOrders(peer) {
      return this.items.filter(function (_ref9) {
        var owner = _ref9.owner;
        return peer === owner.peer;
      });
    }

    /**
     *
     * @param {object} data
     * @param {string} data.buyCurrency
     * @param {string} data.sellCurrency
     * @param {number} data.buyAmount
     * @param {number} data.sellAmount
     */

  }, {
    key: 'create',
    value: function create(data) {
      var order = this._create((0, _extends3.default)({}, data, {
        owner: _swap2.default.services.auth.getPublicData()
      }));
      this._saveMyOrders();

      _swap2.default.services.room.sendMessageRoom({
        event: 'new order',
        data: {
          order: _swap.util.pullProps(order, 'id', 'owner', 'buyCurrency', 'exchangeRate', 'sellCurrency', 'buyAmount', 'sellAmount', 'isRequested', 'isProcessing')
        }
      });
    }

    /**
     *
     * @param {string} orderId
     */

  }, {
    key: 'remove',
    value: function remove(orderId) {
      this.removeByKey(orderId);
      _swap2.default.services.room.sendMessageRoom({
        event: 'remove order',
        data: {
          orderId: orderId
        }
      });
      this._saveMyOrders();
    }
  }, {
    key: 'on',
    value: function on(eventName, handler) {
      _events2.default.subscribe(eventName, handler);
      return this;
    }
  }, {
    key: 'off',
    value: function off(eventName, handler) {
      _events2.default.unsubscribe(eventName, handler);
      return this;
    }
  }]);
  return SwapOrders;
}((0, _aggregation3.default)(_swap.ServiceInterface, _swap.Collection));

exports.default = SwapOrders;
module.exports = exports['default'];

/***/ }),
/* 1278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getOwnPropertyDescriptor = __webpack_require__(507);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _defineProperty = __webpack_require__(278);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertySymbols = __webpack_require__(1281);

var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);

var _getOwnPropertyNames = __webpack_require__(1283);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(44);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 Allows multiple extending
 */

var aggregation = function aggregation(baseClass) {
  for (var _len = arguments.length, mixins = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    mixins[_key - 1] = arguments[_key];
  }

  var base = function (_baseClass) {
    (0, _inherits3.default)(_Combined, _baseClass);

    function _Combined() {
      var _ref;

      (0, _classCallCheck3.default)(this, _Combined);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = _Combined.__proto__ || (0, _getPrototypeOf2.default)(_Combined)).call.apply(_ref, [this].concat(args)));

      mixins.forEach(function (mixin) {
        mixin.prototype._constructor.call(_this);
      });
      return _this;
    }

    return _Combined;
  }(baseClass);

  var copyProps = function copyProps(target, source) {
    (0, _getOwnPropertyNames2.default)(source).concat((0, _getOwnPropertySymbols2.default)(source)).forEach(function (prop) {
      if (prop.match(/^(?:_?constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/)) {
        return;
      }

      (0, _defineProperty2.default)(target, prop, (0, _getOwnPropertyDescriptor2.default)(source, prop));
    });
  };

  mixins.forEach(function (mixin) {
    copyProps(base.prototype, mixin.prototype);
    copyProps(base, mixin);
  });

  return base;
};

exports.default = aggregation;
module.exports = exports["default"];

/***/ }),
/* 1279 */,
/* 1280 */,
/* 1281 */,
/* 1282 */,
/* 1283 */,
/* 1284 */,
/* 1285 */,
/* 1286 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(451);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _keys = __webpack_require__(84);

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = __webpack_require__(88);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _swap = __webpack_require__(17);

var _swap2 = _interopRequireDefault(_swap);

var _events = __webpack_require__(508);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Order = function () {

  /**
   *
   * @param {object}  parent
   * @param {object}  data
   * @param {string}  data.id
   * @param {object}  data.owner
   * @param {string}  data.owner.peer
   * @param {number}  data.owner.reputation
   * @param {object}  data.owner.<currency>
   * @param {string}  data.owner.<currency>.address
   * @param {string}  data.owner.<currency>.publicKey
   * @param {string}  data.buyCurrency
   * @param {string}  data.sellCurrency
   * @param {number}  data.buyAmount
   * @param {number}  data.sellAmount
   */
  function Order(parent, data) {
    (0, _classCallCheck3.default)(this, Order);

    this.id = data.id;
    this.isMy = null;
    this.owner = null;
    this.participant = null;
    this.buyCurrency = null;
    this.exchangeRate = null;
    this.sellCurrency = null;
    this.buyAmount = null;
    this.sellAmount = null;

    this.collection = parent;
    this.requests = []; // income requests
    this.isRequested = false; // outcome request status
    this.isProcessing = false; // if swap isProcessing

    this._update((0, _extends3.default)({}, data, {
      isMy: data.owner.peer === _swap2.default.services.room.peer
    }));

    this._onMount();
  }

  (0, _createClass3.default)(Order, [{
    key: '_onMount',
    value: function _onMount() {
      var _this = this;

      _swap2.default.services.room.on('request swap', function (_ref) {
        var orderId = _ref.orderId,
            participant = _ref.participant;

        if (orderId === _this.id && !_this.requests.find(function (_ref2) {
          var peer = _ref2.peer;
          return peer === participant.peer;
        })) {
          _this.requests.push(participant);

          _events2.default.dispatch('new order request', {
            orderId: orderId,
            participant: participant
          });
        }
      });
    }
  }, {
    key: '_update',
    value: function _update(values) {
      var _this2 = this;

      (0, _keys2.default)(values).forEach(function (key) {
        _this2[key] = values[key];
      });
    }
  }, {
    key: 'update',
    value: function update(values) {
      this._update(values);
      this.collection._saveMyOrders();

      _events2.default.dispatch('swap update', this, values);
    }

    /**
     *
     * @param callback - awaiting for response - accept / decline
     */

  }, {
    key: 'sendRequest',
    value: function sendRequest(callback) {
      var self = this;

      if (_swap2.default.services.room.peer === this.owner.peer) {
        console.warn('You are the owner of this Order. You can\'t send request to yourself.');
        return;
      }

      if (this.isRequested) {
        console.warn('You have already requested this swap.');
        return;
      }

      this.update({
        isRequested: true
      });

      var participant = _swap2.default.services.auth.getPublicData();

      _swap2.default.services.room.sendMessagePeer(this.owner.peer, {
        event: 'request swap',
        data: {
          orderId: this.id,
          // TODO why do we send this info?
          participant: participant
        }
      });

      _swap2.default.services.room.on('accept swap request', function (_ref3) {
        var orderId = _ref3.orderId;

        if (orderId === self.id) {
          this.unsubscribe();

          self.update({
            isProcessing: true,
            isRequested: false,
            participant: participant
          });

          callback(true);
        }
      });

      _swap2.default.services.room.on('decline swap request', function (_ref4) {
        var orderId = _ref4.orderId;

        if (orderId === self.id) {
          this.unsubscribe();

          self.update({
            isRequested: false
          });

          // TODO think about preventing user from sent requests every N seconds
          callback(false);
        }
      });
    }
  }, {
    key: 'acceptRequest',
    value: function acceptRequest(participantPeer) {
      var participant = this.requests.find(function (_ref5) {
        var peer = _ref5.peer;
        return peer === participantPeer;
      });

      this.update({
        isRequested: false,
        isProcessing: true,
        participant: participant,
        requests: []
      });

      _swap2.default.services.room.sendMessagePeer(participantPeer, {
        event: 'accept swap request',
        data: {
          orderId: this.id
        }
      });
    }
  }, {
    key: 'declineRequest',
    value: function declineRequest(participantPeer) {
      var index = void 0;

      this.requests.some(function (_ref6, _index) {
        var peer = _ref6.peer;

        if (peer === participantPeer) {
          index = _index;
        }
        return index !== undefined;
      });

      var requests = [].concat((0, _toConsumableArray3.default)(this.requests.slice(0, index)), (0, _toConsumableArray3.default)(this.requests.slice(index + 1)));

      this.update({
        isRequested: false,
        requests: requests
      });

      _swap2.default.services.room.sendMessagePeer(participantPeer, {
        event: 'decline swap request',
        data: {
          orderId: this.id
        }
      });
    }
  }]);
  return Order;
}();

exports.default = Order;
module.exports = exports['default'];

/***/ }),
/* 1287 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EosSwap = exports.EthTokenSwap = exports.BtcSwap = exports.EthSwap = undefined;

var _EthSwap = __webpack_require__(1288);

var _EthSwap2 = _interopRequireDefault(_EthSwap);

var _EthTokenSwap = __webpack_require__(1373);

var _EthTokenSwap2 = _interopRequireDefault(_EthTokenSwap);

var _BtcSwap = __webpack_require__(1374);

var _BtcSwap2 = _interopRequireDefault(_BtcSwap);

var _EosSwap = __webpack_require__(1375);

var _EosSwap2 = _interopRequireDefault(_EosSwap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.EthSwap = _EthSwap2.default;
exports.BtcSwap = _BtcSwap2.default;
exports.EthTokenSwap = _EthTokenSwap2.default;
exports.EosSwap = _EosSwap2.default;

/***/ }),
/* 1288 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(89);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(90);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = __webpack_require__(127);

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(44);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

var _swap = __webpack_require__(17);

var _swap2 = _interopRequireDefault(_swap);

var _bignumber = __webpack_require__(202);

var _bignumber2 = _interopRequireDefault(_bignumber);

var _ethereumInputDataDecoder = __webpack_require__(1289);

var _ethereumInputDataDecoder2 = _interopRequireDefault(_ethereumInputDataDecoder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EthSwap = function (_SwapInterface) {
  (0, _inherits3.default)(EthSwap, _SwapInterface);

  /**
   *
   * @param {object}    options
   * @param {string}    options.address
   * @param {array}     options.abi
   * @param {number}    options.gasLimit
   * @param {function}  options.fetchBalance
   */
  function EthSwap(options) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, EthSwap);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EthSwap.__proto__ || (0, _getPrototypeOf2.default)(EthSwap)).call(this));

    _this.addGasPrice = function (value) {
      value = value.toNumber();
      _this.gasPrice = value;
    };

    _this.repeatToTheResult = function (repeat, action) {
      var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5000;
      return new _promise2.default(function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(resolve, reject) {
          var result;
          return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return action();

                case 2:
                  result = _context2.sent;


                  if (result === 0 || typeof result === 'undefined' || result === null) {
                    if (repeat > 0) {
                      repeat--;
                      setTimeout((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                        return _regenerator2.default.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                _context.next = 2;
                                return _this.repeatToTheResult(repeat, action);

                              case 2:
                                result = _context.sent;

                                resolve(result);

                              case 4:
                              case 'end':
                                return _context.stop();
                            }
                          }
                        }, _callee, _this2);
                      })), delay);
                    }
                  } else {
                    resolve(result);
                  }

                case 4:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this2);
        }));

        return function (_x2, _x3) {
          return _ref.apply(this, arguments);
        };
      }());
    };

    _this.getSecretFromTxhash = function (transactionHash) {
      return _this.repeatToTheResult(9, function () {
        return _swap2.default.env.web3.eth.getTransaction(transactionHash).then(function (txResult) {
          var bytes32 = _this.decoder.decodeData(txResult.input);
          console.log('bytes32', bytes32);
          return _swap2.default.env.web3.utils.bytesToHex(bytes32.inputs[0]).split('0x')[1];
        });
      });
    };

    if (typeof options.fetchBalance !== 'function') {
      throw new Error('EthSwap: "fetchBalance" required');
    }
    if (typeof options.address !== 'string') {
      throw new Error('EthSwap: "address" required');
    }
    if (!Array.isArray(options.abi)) {
      throw new Error('EthSwap: "abi" required');
    }

    _this.address = options.address;
    _this.abi = options.abi;

    _this._swapName = _swap.constants.COINS.eth;
    _this.gasLimit = options.gasLimit || 3e6;
    _this.gasPrice = options.gasPrice || 2e9;
    _this.fetchBalance = options.fetchBalance;
    return _this;
  }

  (0, _createClass3.default)(EthSwap, [{
    key: '_initSwap',
    value: function _initSwap() {
      this.decoder = new _ethereumInputDataDecoder2.default(this.abi);
      this.contract = new _swap2.default.env.web3.eth.Contract(this.abi, this.address);
    }

    /**
     *
     * @param {object} data
     * @param {string} data.secretHash
     * @param {string} data.participantAddress
     * @param {number} data.amount
     * @param {function} handleTransactionHash
     * @returns {Promise}
     */

  }, {
    key: 'create',
    value: function create(data, handleTransactionHash) {
      var _this3 = this;

      var secretHash = data.secretHash,
          participantAddress = data.participantAddress,
          amount = data.amount;


      var base = (0, _bignumber2.default)(10).pow(18);
      var newAmount = new _bignumber2.default(amount.toString()).times(base).integerValue().toNumber();

      return new _promise2.default(function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(resolve, reject) {
          var _contract$methods;

          var hash, params, values, receipt;
          return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  hash = '0x' + secretHash.replace(/^0x/, '');
                  params = {
                    from: _swap2.default.services.auth.accounts.eth.address,
                    gas: _this3.gasLimit,
                    value: newAmount,
                    gasPrice: _this3.gasPrice
                  };
                  values = [hash, participantAddress];
                  _context3.next = 5;
                  return (_contract$methods = _this3.contract.methods).createSwap.apply(_contract$methods, values).send(params).on('transactionHash', function (hash) {
                    if (typeof handleTransactionHash === 'function') {
                      handleTransactionHash(hash);
                    }
                  }).on('error', function (err) {
                    reject(err);
                  });

                case 5:
                  receipt = _context3.sent;


                  resolve(receipt);

                case 7:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this3);
        }));

        return function (_x4, _x5) {
          return _ref3.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {string} value
     */

  }, {
    key: 'getBalance',


    /**
     *
     * @param {object} data
     * @param {string} data.ownerAddress
     * @returns {Promise}
     */
    value: function getBalance(data) {
      var _this4 = this;

      var ownerAddress = data.ownerAddress;


      return new _promise2.default(function () {
        var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(resolve, reject) {
          var balance;
          return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  balance = void 0;
                  _context4.prev = 1;
                  _context4.next = 4;
                  return _this4.contract.methods.getBalance(ownerAddress).call({
                    from: _swap2.default.services.auth.accounts.eth.address
                  });

                case 4:
                  balance = _context4.sent;
                  _context4.next = 10;
                  break;

                case 7:
                  _context4.prev = 7;
                  _context4.t0 = _context4['catch'](1);

                  reject(_context4.t0);

                case 10:

                  resolve(balance);

                case 11:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, _this4, [[1, 7]]);
        }));

        return function (_x6, _x7) {
          return _ref4.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {object} data
     * @param {string} data.ownerAddress
     * @param {string} data.participantAddress
     * @returns {Promise}
     */

  }, {
    key: 'checkSwapExists',
    value: function checkSwapExists(data) {
      var _this5 = this;

      var ownerAddress = data.ownerAddress,
          participantAddress = data.participantAddress;


      return new _promise2.default(function () {
        var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(resolve, reject) {
          var swap, balance;
          return _regenerator2.default.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  swap = void 0;
                  _context5.prev = 1;
                  _context5.next = 4;
                  return _this5.contract.methods.swaps(ownerAddress, participantAddress).call();

                case 4:
                  swap = _context5.sent;
                  _context5.next = 10;
                  break;

                case 7:
                  _context5.prev = 7;
                  _context5.t0 = _context5['catch'](1);

                  reject(_context5.t0);

                case 10:

                  console.log('swapExists', swap);

                  balance = parseInt(swap.balance);

                  resolve(balance);

                case 13:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5, _this5, [[1, 7]]);
        }));

        return function (_x8, _x9) {
          return _ref5.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {number} repeat
     * @param {function} action
     * @param delay
     * @returns {Promise<any>}
     */

  }, {
    key: 'checkBalance',


    /**
     *
     * @param {object} data
     * @param {string} data.ownerAddress
     * @param {BigNumber} data.expectedValue
     * @returns {Promise.<string>}
     */
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(data) {
        var _this6 = this;

        var ownerAddress, expectedValue, balance;
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                ownerAddress = data.ownerAddress, expectedValue = data.expectedValue;
                _context6.next = 3;
                return this.repeatToTheResult(9, function () {
                  return _this6.getBalance({ ownerAddress: ownerAddress });
                });

              case 3:
                balance = _context6.sent;

                if (!expectedValue.isGreaterThan(balance)) {
                  _context6.next = 6;
                  break;
                }

                return _context6.abrupt('return', 'Expected value: ' + expectedValue.toNumber() + ', got: ' + balance);

              case 6:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function checkBalance(_x10) {
        return _ref6.apply(this, arguments);
      }

      return checkBalance;
    }()

    /**
     *
     * @param {object} data
     * @param {string} data.secret
     * @param {string} data.ownerAddress
     * @param {function} handleTransactionHash
     * @returns {Promise}
     */

  }, {
    key: 'withdraw',
    value: function withdraw(data, handleTransactionHash) {
      var _this7 = this;

      var ownerAddress = data.ownerAddress,
          secret = data.secret;


      return new _promise2.default(function () {
        var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(resolve, reject) {
          var _secret, params, receipt;

          return _regenerator2.default.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _secret = '0x' + secret.replace(/^0x/, '');
                  params = {
                    from: _swap2.default.services.auth.accounts.eth.address,
                    gas: _this7.gasLimit
                  };
                  _context7.next = 4;
                  return _this7.contract.methods.withdraw(_secret, ownerAddress).send(params).on('transactionHash', function (hash) {
                    if (typeof handleTransactionHash === 'function') {
                      handleTransactionHash(hash);
                    }
                  }).on('error', function (err) {
                    reject(err);
                  });

                case 4:
                  receipt = _context7.sent;


                  resolve(receipt);

                case 6:
                case 'end':
                  return _context7.stop();
              }
            }
          }, _callee7, _this7);
        }));

        return function (_x11, _x12) {
          return _ref7.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {object} data
     * @param {string} data.participantAddress
     * @param {function} handleTransactionHash
     * @returns {Promise}
     */

  }, {
    key: 'refund',
    value: function refund(data, handleTransactionHash) {
      var _this8 = this;

      var participantAddress = data.participantAddress;


      return new _promise2.default(function () {
        var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(resolve, reject) {
          var params, receipt;
          return _regenerator2.default.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  params = {
                    from: _swap2.default.services.auth.accounts.eth.address,
                    gas: _this8.gasLimit
                  };
                  _context8.next = 3;
                  return _this8.contract.methods.refund(participantAddress).send(params).on('transactionHash', function (hash) {
                    if (typeof handleTransactionHash === 'function') {
                      handleTransactionHash(hash);
                    }
                  }).on('error', function (err) {
                    reject(err);
                  });

                case 3:
                  receipt = _context8.sent;


                  resolve(receipt);

                case 5:
                case 'end':
                  return _context8.stop();
              }
            }
          }, _callee8, _this8);
        }));

        return function (_x13, _x14) {
          return _ref8.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {object} data
     * @param {string} data.participantAddress
     * @returns {Promise}
     */

  }, {
    key: 'getSecret',
    value: function getSecret(data) {
      var _this9 = this;

      var participantAddress = data.participantAddress;


      return new _promise2.default(function () {
        var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(resolve, reject) {
          var secret, secretValue;
          return _regenerator2.default.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.prev = 0;
                  _context9.next = 3;
                  return _this9.contract.methods.getSecret(participantAddress).call({
                    from: _swap2.default.services.auth.accounts.eth.address
                  });

                case 3:
                  secret = _context9.sent;


                  console.log('secret ethswap.js', secret);

                  secretValue = secret && !/^0x0+/.test(secret) ? secret : null;


                  resolve(secretValue);
                  _context9.next = 12;
                  break;

                case 9:
                  _context9.prev = 9;
                  _context9.t0 = _context9['catch'](0);

                  reject(_context9.t0);

                case 12:
                case 'end':
                  return _context9.stop();
              }
            }
          }, _callee9, _this9, [[0, 9]]);
        }));

        return function (_x15, _x16) {
          return _ref9.apply(this, arguments);
        };
      }());
    }

    /*
      Function: withdraw(bytes32 _secret, address _ownerAddress)
      bytes32 {...}
      inputs: (2) […]
        0: Uint8Array(32) [ 208, 202, 170, … ]
        1: "e918c8719bae0525786548b8da7fbef9b33d4e25"
      name: "withdraw"
      types: (2) […]
        0: "bytes32"
        1: "address"
    */

    /**
     *
     * @param {string} transactionHash
     * @returns {Promise<any>}
     */

  }, {
    key: 'close',


    /**
     *
     * @param {object} data
     * @param {string} data.participantAddress
     * @param handleTransactionHash
     * @returns {Promise}
     */
    value: function close(data, handleTransactionHash) {
      var _this10 = this;

      var participantAddress = data.participantAddress;


      return new _promise2.default(function () {
        var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10(resolve, reject) {
          var params, result;
          return _regenerator2.default.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  params = {
                    from: _swap2.default.services.auth.accounts.eth.address,
                    gas: _this10.gasLimit
                  };
                  _context10.prev = 1;
                  _context10.next = 4;
                  return _this10.contract.methods.close(participantAddress).send(params).on('transactionHash', function (hash) {
                    if (typeof handleTransactionHash === 'function') {
                      handleTransactionHash(hash);
                    }
                  }).on('error', function (err) {
                    reject(err);
                  });

                case 4:
                  result = _context10.sent;


                  resolve(result);
                  _context10.next = 11;
                  break;

                case 8:
                  _context10.prev = 8;
                  _context10.t0 = _context10['catch'](1);

                  reject(_context10.t0);

                case 11:
                case 'end':
                  return _context10.stop();
              }
            }
          }, _callee10, _this10, [[1, 8]]);
        }));

        return function (_x17, _x18) {
          return _ref10.apply(this, arguments);
        };
      }());
    }
  }]);
  return EthSwap;
}(_swap.SwapInterface);

exports.default = EthSwap;

// /**
//  *
//  * @param {object} data
//  * @param {string} data.participantAddress
//  * @param {function} handleTransactionHash
//  * @returns {Promise}
//  */
// sign(data, handleTransactionHash) {
//   const { participantAddress } = data
//
//   return new Promise(async (resolve, reject) => {
//     const params = {
//       from: SwapApp.services.auth.accounts.eth.address,
//       gas: this.gasLimit,
//     }
//
//     const receipt = await this.contract.methods.sign(participantAddress).send(params)
//       .on('transactionHash', (hash) => {
//         if (typeof handleTransactionHash === 'function') {
//           handleTransactionHash(hash)
//         }
//       })
//       .on('error', (err) => {
//         reject(err)
//       })
//
//     resolve(receipt)
//   })
// }

module.exports = exports['default'];

/***/ }),
/* 1289 */,
/* 1290 */,
/* 1291 */,
/* 1292 */,
/* 1293 */,
/* 1294 */,
/* 1295 */,
/* 1296 */,
/* 1297 */,
/* 1298 */,
/* 1299 */,
/* 1300 */,
/* 1301 */,
/* 1302 */,
/* 1303 */,
/* 1304 */,
/* 1305 */,
/* 1306 */,
/* 1307 */,
/* 1308 */,
/* 1309 */,
/* 1310 */,
/* 1311 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 1312 */,
/* 1313 */,
/* 1314 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 1315 */,
/* 1316 */,
/* 1317 */,
/* 1318 */,
/* 1319 */,
/* 1320 */,
/* 1321 */,
/* 1322 */,
/* 1323 */,
/* 1324 */,
/* 1325 */,
/* 1326 */,
/* 1327 */,
/* 1328 */,
/* 1329 */,
/* 1330 */,
/* 1331 */,
/* 1332 */,
/* 1333 */,
/* 1334 */,
/* 1335 */,
/* 1336 */,
/* 1337 */,
/* 1338 */,
/* 1339 */,
/* 1340 */,
/* 1341 */,
/* 1342 */,
/* 1343 */,
/* 1344 */,
/* 1345 */,
/* 1346 */,
/* 1347 */,
/* 1348 */,
/* 1349 */,
/* 1350 */,
/* 1351 */,
/* 1352 */,
/* 1353 */,
/* 1354 */,
/* 1355 */,
/* 1356 */,
/* 1357 */,
/* 1358 */,
/* 1359 */,
/* 1360 */,
/* 1361 */,
/* 1362 */,
/* 1363 */,
/* 1364 */,
/* 1365 */,
/* 1366 */,
/* 1367 */,
/* 1368 */,
/* 1369 */,
/* 1370 */,
/* 1371 */,
/* 1372 */,
/* 1373 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(89);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(90);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = __webpack_require__(127);

var _promise2 = _interopRequireDefault(_promise);

var _values = __webpack_require__(279);

var _values2 = _interopRequireDefault(_values);

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(44);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

var _swap = __webpack_require__(17);

var _swap2 = _interopRequireDefault(_swap);

var _bignumber = __webpack_require__(202);

var _bignumber2 = _interopRequireDefault(_bignumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EthTokenSwap = function (_SwapInterface) {
  (0, _inherits3.default)(EthTokenSwap, _SwapInterface);

  /**
   *
   * @param {object}    options
   * @param {string}    options.name
   * @param {string}    options.address
   * @param {array}     options.abi
   * @param {string}    options.tokenAddress
   * @param {array}     options.tokenAbi
   * @param {number}    options.gasLimit
   * @param {function}  options.fetchBalance
   */
  function EthTokenSwap(options) {
    (0, _classCallCheck3.default)(this, EthTokenSwap);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EthTokenSwap.__proto__ || (0, _getPrototypeOf2.default)(EthTokenSwap)).call(this));

    if (!options.name) {
      throw new Error('EthTokenSwap: "name" required');
    }
    if (!(0, _values2.default)(_swap.constants.COINS).includes(options.name.toUpperCase())) {
      throw new Error('EthTokenSwap: "name" should be correct');
    }
    if (typeof options.address !== 'string') {
      throw new Error('EthTokenSwap: "address" required');
    }
    if (!Array.isArray(options.abi)) {
      throw new Error('EthTokenSwap: "abi" required');
    }
    if (typeof options.tokenAddress !== 'string') {
      throw new Error('EthTokenSwap: "tokenAddress" required');
    }
    if (!Array.isArray(options.tokenAbi)) {
      throw new Error('EthTokenSwap: "tokenAbi" required');
    }

    _this._swapName = options.name.toUpperCase();

    _this.address = options.address;
    _this.abi = options.abi;
    _this.decimals = options.decimals;
    _this.tokenAddress = options.tokenAddress;
    _this.tokenAbi = options.tokenAbi;

    _this.gasLimit = options.gasLimit || 3e6;
    _this.fetchBalance = options.fetchBalance;
    return _this;
  }

  (0, _createClass3.default)(EthTokenSwap, [{
    key: '_initSwap',
    value: function _initSwap() {
      this.contract = new _swap2.default.env.web3.eth.Contract(this.abi, this.address);
      this.ERC20 = new _swap2.default.env.web3.eth.Contract(this.tokenAbi, this.tokenAddress);
    }

    /**
     *
     * @param {object} data
     * @param {BigNumber} data.amount
     * @param {function} handleTransactionHash
     * @returns {Promise}
     */

  }, {
    key: 'approve',
    value: function approve(data, handleTransactionHash) {
      var _this2 = this;

      var amount = data.amount;

      var newAmount = new _bignumber2.default(String(amount)).times(new _bignumber2.default(10).pow(this.decimals)).decimalPlaces(this.decimals).toNumber();

      return new _promise2.default(function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(resolve, reject) {
          var result;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return _this2.ERC20.methods.approve(_this2.address, newAmount).send({
                    from: _swap2.default.services.auth.accounts.eth.address,
                    gas: _this2.gasLimit
                  }).on('transactionHash', function (hash) {
                    if (typeof handleTransactionHash === 'function') {
                      handleTransactionHash(hash);
                    }
                  }).on('error', function (err) {
                    reject(err);
                  });

                case 3:
                  result = _context.sent;


                  resolve(result);
                  _context.next = 10;
                  break;

                case 7:
                  _context.prev = 7;
                  _context.t0 = _context['catch'](0);

                  reject(_context.t0);

                case 10:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[0, 7]]);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {object} data
     * @param {string} data.owner
     * @param {string} data.spender
     * @returns {Promise}
     */

  }, {
    key: 'checkAllowance',
    value: function checkAllowance(data) {
      var _this3 = this;

      var owner = data.owner,
          spender = data.spender;


      return new _promise2.default(function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(resolve, reject) {
          var result;
          return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return _this3.ERC20.methods.allowance(owner, spender).call({
                    from: _swap2.default.services.auth.accounts.eth.address
                  });

                case 3:
                  result = _context2.sent;


                  resolve(result);
                  _context2.next = 10;
                  break;

                case 7:
                  _context2.prev = 7;
                  _context2.t0 = _context2['catch'](0);

                  reject(_context2.t0);

                case 10:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this3, [[0, 7]]);
        }));

        return function (_x3, _x4) {
          return _ref2.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {object} data
     * @param {string} data.secretHash
     * @param {string} data.participantAddress
     * @param {BigNumber} data.amount
     * @param {function} handleTransactionHash
     * @returns {Promise}
     */

  }, {
    key: 'create',
    value: function create(data, handleTransactionHash) {
      var _this4 = this;

      var secretHash = data.secretHash,
          participantAddress = data.participantAddress,
          amount = data.amount;

      var newAmount = new _bignumber2.default(String(amount)).times(new _bignumber2.default(10).pow(this.decimals)).decimalPlaces(this.decimals).toNumber();

      return new _promise2.default(function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(resolve, reject) {
          var hash, values, params, _contract$methods, result;

          return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  hash = '0x' + secretHash.replace(/^0x/, '');
                  values = [hash, participantAddress, newAmount, _this4.tokenAddress];
                  params = {
                    from: _swap2.default.services.auth.accounts.eth.address,
                    gas: _this4.gasLimit
                  };
                  _context3.prev = 3;
                  _context3.next = 6;
                  return (_contract$methods = _this4.contract.methods).createSwap.apply(_contract$methods, values).send(params).on('transactionHash', function (hash) {
                    if (typeof handleTransactionHash === 'function') {
                      handleTransactionHash(hash);
                    }
                  }).on('error', function (err) {
                    reject(err);
                  });

                case 6:
                  result = _context3.sent;

                  console.log('result', result);
                  resolve(result);
                  _context3.next = 14;
                  break;

                case 11:
                  _context3.prev = 11;
                  _context3.t0 = _context3['catch'](3);

                  reject(_context3.t0);

                case 14:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this4, [[3, 11]]);
        }));

        return function (_x5, _x6) {
          return _ref3.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {object} data
     * @param {string} data.ownerAddress
     * @param {string} data.participantAddress
     * @returns {Promise}
     */

  }, {
    key: 'checkSwapExists',
    value: function checkSwapExists(data) {
      var _this5 = this;

      var ownerAddress = data.ownerAddress,
          participantAddress = data.participantAddress;


      return new _promise2.default(function () {
        var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(resolve, reject) {
          var swap, balance;
          return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  swap = void 0;
                  _context4.prev = 1;
                  _context4.next = 4;
                  return _this5.contract.methods.swaps(ownerAddress, participantAddress).call();

                case 4:
                  swap = _context4.sent;
                  _context4.next = 10;
                  break;

                case 7:
                  _context4.prev = 7;
                  _context4.t0 = _context4['catch'](1);

                  reject(_context4.t0);

                case 10:

                  console.log('swapExists', swap);

                  balance = parseInt(swap.balance);

                  resolve(balance);

                case 13:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, _this5, [[1, 7]]);
        }));

        return function (_x7, _x8) {
          return _ref4.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {object} data
     * @param {string} data.ownerAddress
     * @returns {Promise}
     */

  }, {
    key: 'getBalance',
    value: function getBalance(data) {
      var _this6 = this;

      var ownerAddress = data.ownerAddress;


      return new _promise2.default(function () {
        var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(resolve, reject) {
          var balance;
          return _regenerator2.default.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  balance = void 0;
                  _context5.prev = 1;
                  _context5.next = 4;
                  return _this6.contract.methods.getBalance(ownerAddress).call({
                    from: _swap2.default.services.auth.accounts.eth.address
                  });

                case 4:
                  balance = _context5.sent;
                  _context5.next = 10;
                  break;

                case 7:
                  _context5.prev = 7;
                  _context5.t0 = _context5['catch'](1);

                  reject(_context5.t0);

                case 10:
                  console.log('balance', balance);
                  resolve(balance);

                case 12:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5, _this6, [[1, 7]]);
        }));

        return function (_x9, _x10) {
          return _ref5.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {object} data
     * @param {string} data.ownerAddress
     * @param {BigNumber} data.expectedValue
     * @returns {Promise.<string>}
     */

  }, {
    key: 'checkBalance',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(data) {
        var ownerAddress, expectedValue, balance;
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                ownerAddress = data.ownerAddress, expectedValue = data.expectedValue;
                _context6.next = 3;
                return this.getBalance({ ownerAddress: ownerAddress });

              case 3:
                balance = _context6.sent;

                if (!expectedValue.isGreaterThan(balance)) {
                  _context6.next = 6;
                  break;
                }

                return _context6.abrupt('return', 'Expected value: ' + expectedValue.toNumber() + ', got: ' + balance);

              case 6:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function checkBalance(_x11) {
        return _ref6.apply(this, arguments);
      }

      return checkBalance;
    }()

    /**
     *
     * @param {object} data
     * @param {string} data.secret
     * @param {string} data.ownerAddress
     * @param {function} handleTransactionHash
     * @returns {Promise}
     */

  }, {
    key: 'withdraw',
    value: function withdraw(data, handleTransactionHash) {
      var _this7 = this;

      var ownerAddress = data.ownerAddress,
          secret = data.secret;


      return new _promise2.default(function () {
        var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(resolve, reject) {
          var _secret, params, result;

          return _regenerator2.default.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _secret = '0x' + secret.replace(/^0x/, '');
                  params = {
                    from: _swap2.default.services.auth.accounts.eth.address,
                    gas: _this7.gasLimit
                  };
                  _context7.prev = 2;
                  _context7.next = 5;
                  return _this7.contract.methods.withdraw(_secret, ownerAddress).send(params).on('transactionHash', function (hash) {
                    if (typeof handleTransactionHash === 'function') {
                      handleTransactionHash(hash);
                    }
                  }).on('error', function (err) {
                    reject(err);
                  });

                case 5:
                  result = _context7.sent;


                  resolve(result);
                  _context7.next = 12;
                  break;

                case 9:
                  _context7.prev = 9;
                  _context7.t0 = _context7['catch'](2);

                  reject(_context7.t0);

                case 12:
                case 'end':
                  return _context7.stop();
              }
            }
          }, _callee7, _this7, [[2, 9]]);
        }));

        return function (_x12, _x13) {
          return _ref7.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {object} data
     * @param {string} data.participantAddress
     * @param {function} handleTransactionHash
     * @returns {Promise}
     */

  }, {
    key: 'refund',
    value: function refund(data, handleTransactionHash) {
      var _this8 = this;

      var participantAddress = data.participantAddress;


      return new _promise2.default(function () {
        var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(resolve, reject) {
          var params, receipt;
          return _regenerator2.default.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  params = {
                    from: _swap2.default.services.auth.accounts.eth.address,
                    gas: _this8.gasLimit
                  };
                  _context8.next = 3;
                  return _this8.contract.methods.refund(participantAddress).send(params).on('transactionHash', function (hash) {
                    if (typeof handleTransactionHash === 'function') {
                      handleTransactionHash(hash);
                    }
                  }).on('error', function (err) {
                    reject(err);
                  });

                case 3:
                  receipt = _context8.sent;


                  resolve(receipt);

                case 5:
                case 'end':
                  return _context8.stop();
              }
            }
          }, _callee8, _this8);
        }));

        return function (_x14, _x15) {
          return _ref8.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {object} data
     * @param {string} data.participantAddress
     * @returns {Promise}
     */

  }, {
    key: 'getSecret',
    value: function getSecret(data) {
      var _this9 = this;

      var participantAddress = data.participantAddress;


      return new _promise2.default(function () {
        var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(resolve, reject) {
          var secret, secretValue;
          return _regenerator2.default.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.prev = 0;
                  _context9.next = 3;
                  return _this9.contract.methods.getSecret(participantAddress).call({
                    from: _swap2.default.services.auth.accounts.eth.address
                  });

                case 3:
                  secret = _context9.sent;
                  secretValue = secret && !/^0x0+/.test(secret) ? secret : null;


                  resolve(secretValue);
                  _context9.next = 11;
                  break;

                case 8:
                  _context9.prev = 8;
                  _context9.t0 = _context9['catch'](0);

                  reject(_context9.t0);

                case 11:
                case 'end':
                  return _context9.stop();
              }
            }
          }, _callee9, _this9, [[0, 8]]);
        }));

        return function (_x16, _x17) {
          return _ref9.apply(this, arguments);
        };
      }());
    }
  }]);
  return EthTokenSwap;
}(_swap.SwapInterface);

exports.default = EthTokenSwap;

// /**
//  *
//  * @param {object} data
//  * @param {string} data.participantAddress
//  * @param {function} handleTransactionHash
//  * @returns {Promise}
//  */
// sign(data, handleTransactionHash) {
//   const { participantAddress } = data
//
//   return new Promise(async (resolve, reject) => {
//     const params = {
//       from: SwapApp.services.auth.accounts.eth.address,
//       gas: this.gasLimit,
//     }
//
//     try {
//       const result = await this.contract.methods.sign(participantAddress).send(params)
//         .on('transactionHash', (hash) => {
//           if (typeof handleTransactionHash === 'function') {
//             handleTransactionHash(hash)
//           }
//         })
//         .on('error', (err) => {
//           reject(err)
//         })
//
//       resolve(result)
//     }
//     catch (err) {
//       reject(err)
//     }
//   })
// }

module.exports = exports['default'];

/***/ }),
/* 1374 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(220);

var _typeof3 = _interopRequireDefault(_typeof2);

var _promise = __webpack_require__(127);

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = __webpack_require__(89);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(90);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(44);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

var _swap = __webpack_require__(17);

var _swap2 = _interopRequireDefault(_swap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BtcSwap = function (_SwapInterface) {
  (0, _inherits3.default)(BtcSwap, _SwapInterface);

  /**
   *
   * @param options
   * @param options.fetchBalance
   * @param options.fetchUnspents
   * @param options.broadcastTx
   */
  function BtcSwap(options) {
    (0, _classCallCheck3.default)(this, BtcSwap);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BtcSwap.__proto__ || (0, _getPrototypeOf2.default)(BtcSwap)).call(this));

    if (typeof options.fetchBalance !== 'function') {
      throw new Error('EthSwap: "fetchBalance" required');
    }
    if (typeof options.fetchUnspents !== 'function') {
      throw new Error('EthSwap: "fetchUnspents" required');
    }
    if (typeof options.broadcastTx !== 'function') {
      throw new Error('EthSwap: "broadcastTx" required');
    }

    _this._swapName = _swap.constants.COINS.btc;
    _this.fetchBalance = options.fetchBalance;
    _this.fetchUnspents = options.fetchUnspents;
    _this.broadcastTx = options.broadcastTx;
    return _this;
  }

  (0, _createClass3.default)(BtcSwap, [{
    key: '_initSwap',
    value: function _initSwap() {
      this.network = _swap2.default.isMainNet() ? _swap2.default.env.bitcoin.networks.bitcoin : _swap2.default.env.bitcoin.networks.testnet;
    }

    /**
     *
     * @param {object} data
     * @param {object} data.script
     * @param {*} data.txRaw
     * @param {string} data.secret
     * @private
     */

  }, {
    key: '_signTransaction',
    value: function _signTransaction(data) {
      var script = data.script,
          txRaw = data.txRaw,
          secret = data.secret;


      var hashType = _swap2.default.env.bitcoin.Transaction.SIGHASH_ALL;
      var signatureHash = txRaw.hashForSignature(0, script, hashType);
      var signature = _swap2.default.services.auth.accounts.btc.sign(signatureHash).toScriptSignature(hashType);

      var scriptSig = _swap2.default.env.bitcoin.script.scriptHash.input.encode([signature, _swap2.default.services.auth.accounts.btc.getPublicKeyBuffer(), Buffer.from(secret.replace(/^0x/, ''), 'hex')], script);

      txRaw.setInputScript(0, scriptSig);
    }

    /**
     *
     * @param {object} data
     * @param {string} data.secretHash
     * @param {string} data.ownerPublicKey
     * @param {string} data.recipientPublicKey
     * @param {number} data.lockTime
     * @returns {{scriptAddress: *, script: (*|{ignored})}}
     */

  }, {
    key: 'createScript',
    value: function createScript(data) {
      var secretHash = data.secretHash,
          ownerPublicKey = data.ownerPublicKey,
          recipientPublicKey = data.recipientPublicKey,
          lockTime = data.lockTime;


      console.log('DATA', data);

      var script = _swap2.default.env.bitcoin.script.compile([_swap2.default.env.bitcoin.opcodes.OP_RIPEMD160, Buffer.from(secretHash, 'hex'), _swap2.default.env.bitcoin.opcodes.OP_EQUALVERIFY, Buffer.from(recipientPublicKey, 'hex'), _swap2.default.env.bitcoin.opcodes.OP_EQUAL, _swap2.default.env.bitcoin.opcodes.OP_IF, Buffer.from(recipientPublicKey, 'hex'), _swap2.default.env.bitcoin.opcodes.OP_CHECKSIG, _swap2.default.env.bitcoin.opcodes.OP_ELSE, _swap2.default.env.bitcoin.script.number.encode(lockTime), _swap2.default.env.bitcoin.opcodes.OP_CHECKLOCKTIMEVERIFY, _swap2.default.env.bitcoin.opcodes.OP_DROP, Buffer.from(ownerPublicKey, 'hex'), _swap2.default.env.bitcoin.opcodes.OP_CHECKSIG, _swap2.default.env.bitcoin.opcodes.OP_ENDIF]);

      var scriptPubKey = _swap2.default.env.bitcoin.script.scriptHash.output.encode(_swap2.default.env.bitcoin.crypto.hash160(script));
      var scriptAddress = _swap2.default.env.bitcoin.address.fromOutputScript(scriptPubKey, this.network);

      return {
        scriptAddress: scriptAddress,
        script: script
      };
    }

    /**
     *
     * @param {object} data
     * @param {string} data.recipientPublicKey
     * @param {number} data.lockTime
     * @param {object} expected
     * @param {number} expected.value
     * @param {number} expected.lockTime
     * @param {string} expected.recipientPublicKey
     * @returns {Promise.<string>}
     */

  }, {
    key: 'checkScript',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(data, expected) {
        var recipientPublicKey, lockTime, _createScript, scriptAddress, script, unspents, totalUnspent, expectedValue;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                recipientPublicKey = data.recipientPublicKey, lockTime = data.lockTime;
                _createScript = this.createScript(data), scriptAddress = _createScript.scriptAddress, script = _createScript.script;
                _context.next = 4;
                return this.fetchUnspents(scriptAddress);

              case 4:
                unspents = _context.sent;
                totalUnspent = unspents.reduce(function (summ, _ref2) {
                  var satoshis = _ref2.satoshis;
                  return summ + satoshis;
                }, 0);
                expectedValue = expected.value.multipliedBy(1e8).integerValue();

                if (!expectedValue.isGreaterThan(totalUnspent)) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt('return', 'Expected script value: ' + expectedValue.toNumber() + ', got: ' + totalUnspent);

              case 9:
                if (!(expected.lockTime > lockTime)) {
                  _context.next = 11;
                  break;
                }

                return _context.abrupt('return', 'Expected script lockTime: ' + expected.lockTime + ', got: ' + lockTime);

              case 11:
                if (!(expected.recipientPublicKey !== recipientPublicKey)) {
                  _context.next = 13;
                  break;
                }

                return _context.abrupt('return', 'Expected script recipient publicKey: ' + expected.recipientPublicKey + ', got: ' + recipientPublicKey);

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function checkScript(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return checkScript;
    }()

    /**
     *
     * @param {object} data
     * @param {object} data.scriptValues
     * @param {BigNumber} data.amount
     * @param {function} handleTransactionHash
     * @returns {Promise}
     */

  }, {
    key: 'fundScript',
    value: function fundScript(data, handleTransactionHash) {
      var _this2 = this;

      var scriptValues = data.scriptValues,
          amount = data.amount;


      return new _promise2.default(function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(resolve, reject) {
          var _createScript2, scriptAddress, tx, unspents, fundValue, feeValue, totalUnspent, skipValue, txRaw, result;

          return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _createScript2 = _this2.createScript(scriptValues), scriptAddress = _createScript2.scriptAddress;
                  tx = new _swap2.default.env.bitcoin.TransactionBuilder(_this2.network);
                  _context2.next = 5;
                  return _this2.fetchUnspents(_swap2.default.services.auth.accounts.btc.getAddress());

                case 5:
                  unspents = _context2.sent;
                  fundValue = amount.multipliedBy(1e8).integerValue().toNumber();
                  feeValue = 15000; // TODO how to get this value

                  totalUnspent = unspents.reduce(function (summ, _ref4) {
                    var satoshis = _ref4.satoshis;
                    return summ + satoshis;
                  }, 0);
                  skipValue = totalUnspent - fundValue - feeValue;

                  if (!(totalUnspent < feeValue + fundValue)) {
                    _context2.next = 12;
                    break;
                  }

                  throw new Error('Total less than fee: ' + totalUnspent + ' < ' + feeValue + ' + ' + fundValue);

                case 12:

                  unspents.forEach(function (_ref5) {
                    var txid = _ref5.txid,
                        vout = _ref5.vout;
                    return tx.addInput(txid, vout);
                  });
                  tx.addOutput(scriptAddress, fundValue);
                  tx.addOutput(_swap2.default.services.auth.accounts.btc.getAddress(), skipValue);
                  tx.inputs.forEach(function (input, index) {
                    tx.sign(index, _swap2.default.services.auth.accounts.btc);
                  });

                  txRaw = tx.buildIncomplete();


                  if (typeof handleTransactionHash === 'function') {
                    handleTransactionHash(txRaw.getId());
                  }

                  _context2.prev = 18;
                  _context2.next = 21;
                  return _this2.broadcastTx(txRaw.toHex());

                case 21:
                  result = _context2.sent;


                  resolve(result);
                  _context2.next = 28;
                  break;

                case 25:
                  _context2.prev = 25;
                  _context2.t0 = _context2['catch'](18);

                  reject(_context2.t0);

                case 28:
                  _context2.next = 33;
                  break;

                case 30:
                  _context2.prev = 30;
                  _context2.t1 = _context2['catch'](0);

                  reject(_context2.t1);

                case 33:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this2, [[0, 30], [18, 25]]);
        }));

        return function (_x3, _x4) {
          return _ref3.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {object|string} data - scriptValues or wallet address
     * @returns {Promise.<void>}
     */

  }, {
    key: 'getBalance',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(data) {
        var address, _createScript3, scriptAddress, unspents, totalUnspent;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                address = void 0;

                if (!(typeof data === 'string')) {
                  _context3.next = 5;
                  break;
                }

                address = data;
                _context3.next = 11;
                break;

              case 5:
                if (!((typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data)) === 'object')) {
                  _context3.next = 10;
                  break;
                }

                _createScript3 = this.createScript(data), scriptAddress = _createScript3.scriptAddress;


                address = scriptAddress;
                _context3.next = 11;
                break;

              case 10:
                throw new Error('Wrong data type');

              case 11:
                _context3.next = 13;
                return this.fetchUnspents(address);

              case 13:
                unspents = _context3.sent;
                totalUnspent = unspents && unspents.length && unspents.reduce(function (summ, _ref7) {
                  var satoshis = _ref7.satoshis;
                  return summ + satoshis;
                }, 0) || 0;
                return _context3.abrupt('return', totalUnspent);

              case 16:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getBalance(_x5) {
        return _ref6.apply(this, arguments);
      }

      return getBalance;
    }()

    /**
     *
     * @param {object} data
     * @param {object} data.scriptValues
     * @param {string} data.secret
     * @param {boolean} isRefund
     * @returns {Promise}
     */

  }, {
    key: 'getWithdrawRawTransaction',
    value: function () {
      var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(data, isRefund) {
        var scriptValues, secret, _createScript4, script, scriptAddress, tx, unspents, feeValue, totalUnspent, txRaw;

        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                scriptValues = data.scriptValues, secret = data.secret;
                _createScript4 = this.createScript(scriptValues), script = _createScript4.script, scriptAddress = _createScript4.scriptAddress;
                tx = new _swap2.default.env.bitcoin.TransactionBuilder(this.network);
                _context4.next = 5;
                return this.fetchUnspents(scriptAddress);

              case 5:
                unspents = _context4.sent;
                feeValue = 15000; // TODO how to get this value

                totalUnspent = unspents.reduce(function (summ, _ref9) {
                  var satoshis = _ref9.satoshis;
                  return summ + satoshis;
                }, 0);

                if (!(totalUnspent < feeValue)) {
                  _context4.next = 10;
                  break;
                }

                throw new Error('Total less than fee: ' + totalUnspent + ' < ' + feeValue);

              case 10:

                if (isRefund) {
                  tx.setLockTime(scriptValues.lockTime);
                }

                unspents.forEach(function (_ref10) {
                  var txid = _ref10.txid,
                      vout = _ref10.vout;
                  return tx.addInput(txid, vout, 0xfffffffe);
                });
                tx.addOutput(_swap2.default.services.auth.accounts.btc.getAddress(), totalUnspent - feeValue);

                txRaw = tx.buildIncomplete();


                this._signTransaction({
                  script: script,
                  secret: secret,
                  txRaw: txRaw
                });

                return _context4.abrupt('return', txRaw);

              case 16:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getWithdrawRawTransaction(_x6, _x7) {
        return _ref8.apply(this, arguments);
      }

      return getWithdrawRawTransaction;
    }()

    /**
     *
     * @param {object} data
     * @param {object} data.scriptValues
     * @param {string} data.secret
     * @param {boolean} isRefund
     * @returns {Promise}
     */

  }, {
    key: 'getWithdrawHexTransaction',
    value: function () {
      var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(data, isRefund) {
        var txRaw;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.getWithdrawRawTransaction(data, isRefund);

              case 2:
                txRaw = _context5.sent;
                return _context5.abrupt('return', txRaw.toHex());

              case 4:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getWithdrawHexTransaction(_x8, _x9) {
        return _ref11.apply(this, arguments);
      }

      return getWithdrawHexTransaction;
    }()

    /**
     *
     * @param {object} data
     * @param {object} data.scriptValues
     * @param {string} data.secret
     * @returns {Promise}
     */

  }, {
    key: 'getRefundRawTransaction',
    value: function getRefundRawTransaction(data) {
      return this.getWithdrawRawTransaction(data, true);
    }

    /**
     *
     * @param {object} data
     * @param {object} data.scriptValues
     * @param {string} data.secret
     * @returns {Promise}
     */

  }, {
    key: 'getRefundHexTransaction',
    value: function () {
      var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(data) {
        var txRaw;
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.getRefundRawTransaction(data);

              case 2:
                txRaw = _context6.sent;
                return _context6.abrupt('return', txRaw.toHex());

              case 4:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getRefundHexTransaction(_x10) {
        return _ref12.apply(this, arguments);
      }

      return getRefundHexTransaction;
    }()

    /**
     *
     * @param {object} data
     * @param {object} data.scriptValues
     * @param {string} data.secret
     * @param {function} handleTransactionHash
     * @param {boolean} isRefund
     * @returns {Promise}
     */

  }, {
    key: 'withdraw',
    value: function withdraw(data, handleTransactionHash, isRefund) {
      var _this3 = this;

      return new _promise2.default(function () {
        var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(resolve, reject) {
          var txRaw, result;
          return _regenerator2.default.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.prev = 0;
                  _context7.next = 3;
                  return _this3.getWithdrawRawTransaction(data, isRefund);

                case 3:
                  txRaw = _context7.sent;


                  if (typeof handleTransactionHash === 'function') {
                    handleTransactionHash(txRaw.getId());
                  }

                  _context7.next = 7;
                  return _this3.broadcastTx(txRaw.toHex());

                case 7:
                  result = _context7.sent;


                  resolve(result);
                  _context7.next = 14;
                  break;

                case 11:
                  _context7.prev = 11;
                  _context7.t0 = _context7['catch'](0);

                  reject(_context7.t0);

                case 14:
                case 'end':
                  return _context7.stop();
              }
            }
          }, _callee7, _this3, [[0, 11]]);
        }));

        return function (_x11, _x12) {
          return _ref13.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {object} data
     * @param {object} data.scriptValues
     * @param {string} data.secret
     * @param {function} handleTransactionHash
     * @returns {Promise}
     */

  }, {
    key: 'refund',
    value: function refund(data, handleTransactionHash) {
      return this.withdraw(data, handleTransactionHash, true);
    }
  }]);
  return BtcSwap;
}(_swap.SwapInterface);

exports.default = BtcSwap;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7).Buffer))

/***/ }),
/* 1375 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(44);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

var _parseFloat = __webpack_require__(1376);

var _parseFloat2 = _interopRequireDefault(_parseFloat);

var _swap = __webpack_require__(17);

var _swap2 = _interopRequireDefault(_swap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var amountToUnits = function amountToUnits(amount) {
  return (0, _parseFloat2.default)(amount.toString()).toFixed(4) * 10 ** 4;
};

var amountToAsset = function amountToAsset(amount) {
  return (0, _parseFloat2.default)(amount.toString()).toFixed(4).concat(' EOS');
};

var EosSwap = function (_SwapInterface) {
  (0, _inherits3.default)(EosSwap, _SwapInterface);

  function EosSwap(options) {
    (0, _classCallCheck3.default)(this, EosSwap);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EosSwap.__proto__ || (0, _getPrototypeOf2.default)(EosSwap)).call(this));

    _this.getAccounts = function () {
      return {
        userAccount: _swap2.default.services.auth.getPublicData().eos.address,
        swapAccount: _this.swapAccount,
        tokenAccount: 'eosio.token'
      };
    };

    _this._swapName = _swap.constants.COINS.eos;

    _this.swapAccount = options.swapAccount;

    _this.eos = null;
    return _this;
  }

  (0, _createClass3.default)(EosSwap, [{
    key: '_initSwap',
    value: function _initSwap() {}
  }, {
    key: 'getSwaps',
    value: function getSwaps() {
      return this.eos.getTableRows({
        code: this.swapAccount,
        scope: this.swapAccount,
        table: 'swap',
        json: true
      });
    }
  }, {
    key: 'lazyInit',
    value: function lazyInit() {
      var _this2 = this;

      return _swap2.default.env.eos.getInstance().then(function (eosInstance) {
        _this2.eos = eosInstance;
      });
    }
  }, {
    key: 'open',
    value: function open(_ref, finishCallback) {
      var _this3 = this;

      var participantAccount = _ref.participantAccount,
          secretHash = _ref.secretHash,
          amount = _ref.amount;

      var _getAccounts = this.getAccounts(),
          userAccount = _getAccounts.userAccount,
          swapAccount = _getAccounts.swapAccount,
          tokenAccount = _getAccounts.tokenAccount;

      return this.lazyInit().then(function () {
        return _this3.getSwaps().then(function (swaps) {
          if (swaps && swaps.rows) {
            return swaps.rows.length;
          } else {
            return 0;
          }
        });
      }).then(function (swapID) {
        var quantity = amountToAsset(amount);

        return _this3.eos.transaction({
          actions: [{
            account: swapAccount,
            name: 'open',
            authorization: [{
              actor: userAccount,
              permission: 'active'
            }],
            data: {
              secretHash: secretHash,
              eosOwner: userAccount,
              btcOwner: participantAccount,
              quantity: quantity
            }
          }, {
            account: tokenAccount,
            name: 'transfer',
            authorization: [{
              actor: userAccount,
              permission: 'active'
            }],
            data: {
              from: userAccount,
              to: swapAccount,
              quantity: quantity,
              memo: swapID
            }
          }]
        }).then(function (transaction) {
          var openTx = transaction.transaction_id;

          if (typeof finishCallback === 'function') {
            finishCallback({ openTx: openTx, swapID: swapID });
          }
          return { openTx: openTx, swapID: swapID };
        });
      });
    }
  }, {
    key: 'withdraw',
    value: function withdraw(_ref2, finishCallback) {
      var _this4 = this;

      var swapID = _ref2.swapID,
          secret = _ref2.secret;

      var _getAccounts2 = this.getAccounts(),
          userAccount = _getAccounts2.userAccount,
          swapAccount = _getAccounts2.swapAccount;

      return this.lazyInit().then(function () {
        return _this4.eos.transaction({
          actions: [{
            account: swapAccount,
            name: 'withdraw',
            authorization: [{
              actor: userAccount,
              permission: 'active'
            }],
            data: {
              swapID: swapID,
              secret: secret
            }
          }]
        }).then(function (transaction) {
          var eosWithdrawTx = transaction.transaction_id;

          if (typeof finishCallback === 'function') {
            finishCallback(eosWithdrawTx);
          }
          return eosWithdrawTx;
        });
      });
    }
  }, {
    key: 'refund',
    value: function refund(_ref3, finishCallback) {
      var _this5 = this;

      var swapID = _ref3.swapID;

      var _getAccounts3 = this.getAccounts(),
          userAccount = _getAccounts3.userAccount,
          swapAccount = _getAccounts3.swapAccount;

      this.lasyInit().then(function () {
        _this5.eos.transaction({
          actions: [{
            account: swapAccount,
            name: 'refund',
            authorization: [{
              actor: userAccount,
              permission: 'active'
            }],
            data: {
              swapID: swapID
            }
          }]
        }).then(function (eosRefundTx) {
          if (typeof finishCallback === 'function') {
            finishCallback(eosRefundTx);
          }
          return eosRefundTx;
        });
      });
    }
  }, {
    key: 'getLockTime',
    value: function getLockTime() {
      var utcNow = function utcNow() {
        return Math.floor(Date.now() / 1000);
      };
      return utcNow() + 3600 * 3;
    }
  }]);
  return EosSwap;
}(_swap.SwapInterface);

exports.default = EosSwap;
module.exports = exports['default'];

/***/ }),
/* 1376 */,
/* 1377 */,
/* 1378 */,
/* 1379 */,
/* 1380 */,
/* 1381 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BTC2EOS = exports.EOS2BTC = exports.BTC2ETHTOKEN = exports.ETHTOKEN2BTC = exports.BTC2ETH = exports.ETH2BTC = undefined;

var _ETH2BTC = __webpack_require__(1382);

var _ETH2BTC2 = _interopRequireDefault(_ETH2BTC);

var _BTC2ETH = __webpack_require__(1383);

var _BTC2ETH2 = _interopRequireDefault(_BTC2ETH);

var _ETHTOKEN2BTC = __webpack_require__(1384);

var _ETHTOKEN2BTC2 = _interopRequireDefault(_ETHTOKEN2BTC);

var _BTC2ETHTOKEN = __webpack_require__(1385);

var _BTC2ETHTOKEN2 = _interopRequireDefault(_BTC2ETHTOKEN);

var _EOS2BTC = __webpack_require__(1386);

var _EOS2BTC2 = _interopRequireDefault(_EOS2BTC);

var _BTC2EOS = __webpack_require__(1387);

var _BTC2EOS2 = _interopRequireDefault(_BTC2EOS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ETH2BTC = _ETH2BTC2.default;
exports.BTC2ETH = _BTC2ETH2.default;
exports.ETHTOKEN2BTC = _ETHTOKEN2BTC2.default;
exports.BTC2ETHTOKEN = _BTC2ETHTOKEN2.default;
exports.EOS2BTC = _EOS2BTC2.default;
exports.BTC2EOS = _BTC2EOS2.default;

/***/ }),
/* 1382 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(89);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(90);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(44);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

var _get2 = __webpack_require__(132);

var _get3 = _interopRequireDefault(_get2);

var _crypto = __webpack_require__(175);

var _crypto2 = _interopRequireDefault(_crypto);

var _swap = __webpack_require__(17);

var _swap2 = _interopRequireDefault(_swap);

var _swap3 = __webpack_require__(105);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// move to BtcSwap
var ETH2BTC = function (_Flow) {
  (0, _inherits3.default)(ETH2BTC, _Flow);
  (0, _createClass3.default)(ETH2BTC, null, [{
    key: 'getName',
    value: function getName() {
      return _swap.constants.COINS.eth + '2' + _swap.constants.COINS.btc;
    }
  }]);

  function ETH2BTC(swap) {
    (0, _classCallCheck3.default)(this, ETH2BTC);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ETH2BTC.__proto__ || (0, _getPrototypeOf2.default)(ETH2BTC)).call(this, swap));

    _this._flowName = ETH2BTC.getName();

    _this.ethSwap = _swap2.default.swaps[_swap.constants.COINS.eth];
    _this.btcSwap = _swap2.default.swaps[_swap.constants.COINS.btc];

    _this.myBtcAddress = _swap2.default.services.auth.accounts.btc.getAddress();
    _this.myEthAddress = _swap2.default.services.auth.accounts.eth.address;

    _this.stepNumbers = {
      'sign': 1,
      'wait-lock-btc': 2,
      'verify-script': 3,
      'sync-balance': 4,
      'lock-eth': 5,
      'wait-withdraw-eth': 6, // aka getSecret
      'withdraw-btc': 7,
      'finish': 8,
      'end': 9
    };

    if (!_this.ethSwap) {
      throw new Error('BTC2ETH: "ethSwap" of type object required');
    }
    if (!_this.btcSwap) {
      throw new Error('BTC2ETH: "btcSwap" of type object required');
    }

    _this.state = {
      step: 0,

      signTransactionHash: null,
      isSignFetching: false,
      isMeSigned: false,

      secretHash: null,
      btcScriptValues: null,

      btcScriptVerified: false,

      isBalanceFetching: false,
      isBalanceEnough: false,
      balance: null,

      btcScriptCreatingTransactionHash: null,
      ethSwapCreationTransactionHash: null,

      isEthContractFunded: false,

      secret: null,

      isEthWithdrawn: false,
      isBtcWithdrawn: false,

      refundTransactionHash: null,
      isRefunded: false,

      isFinished: false,
      isSwapExist: false
    };

    (0, _get3.default)(ETH2BTC.prototype.__proto__ || (0, _getPrototypeOf2.default)(ETH2BTC.prototype), '_persistSteps', _this).call(_this);
    _this._persistState();
    return _this;
  }

  (0, _createClass3.default)(ETH2BTC, [{
    key: '_persistState',
    value: function _persistState() {
      (0, _get3.default)(ETH2BTC.prototype.__proto__ || (0, _getPrototypeOf2.default)(ETH2BTC.prototype), '_persistState', this).call(this);
    }
  }, {
    key: '_getSteps',
    value: function _getSteps() {
      var _this2 = this;

      var flow = this;

      return [

      // 1. Sign swap to start

      function () {
        // this.sign()
      },

      // 2. Wait participant create, fund BTC Script

      function () {
        flow.swap.room.once('create btc script', function (_ref) {
          var scriptValues = _ref.scriptValues,
              btcScriptCreatingTransactionHash = _ref.btcScriptCreatingTransactionHash;

          flow.finishStep({
            secretHash: scriptValues.secretHash,
            btcScriptValues: scriptValues,
            btcScriptCreatingTransactionHash: btcScriptCreatingTransactionHash
          }, { step: 'wait-lock-btc', silentError: true });
        });

        flow.swap.room.sendMessage({
          event: 'request btc script'
        });
      },

      // 3. Verify BTC Script

      function () {
        console.log('waiting verify btc script');
        // this.verifyBtcScript()
      },

      // 4. Check balance

      function () {
        _this2.syncBalance();
      },

      // 5. Create ETH Contract

      (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _flow$swap, participant, buyAmount, sellAmount, utcNow, getLockTime, scriptCheckResult, swapData;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _flow$swap = flow.swap, participant = _flow$swap.participant, buyAmount = _flow$swap.buyAmount, sellAmount = _flow$swap.sellAmount;

                // TODO move this somewhere!

                utcNow = function utcNow() {
                  return Math.floor(Date.now() / 1000);
                };

                getLockTime = function getLockTime() {
                  return utcNow() + 3600 * 1;
                }; // 1 hour from now

                _context.next = 5;
                return flow.btcSwap.checkScript(flow.state.btcScriptValues, {
                  value: buyAmount,
                  recipientPublicKey: _swap2.default.services.auth.accounts.btc.getPublicKey(),
                  lockTime: getLockTime()
                });

              case 5:
                scriptCheckResult = _context.sent;

                if (!scriptCheckResult) {
                  _context.next = 10;
                  break;
                }

                console.error('Btc script check error:', scriptCheckResult);
                flow.swap.events.dispatch('btc script check error', scriptCheckResult);
                return _context.abrupt('return');

              case 10:
                swapData = {
                  participantAddress: participant.eth.address,
                  secretHash: flow.state.secretHash,
                  amount: sellAmount
                };
                _context.prev = 11;
                _context.next = 14;
                return _this2.ethSwap.create(swapData, function (hash) {
                  flow.swap.room.sendMessage({
                    event: 'create eth contract',
                    data: {
                      ethSwapCreationTransactionHash: hash
                    }
                  });

                  flow.setState({
                    ethSwapCreationTransactionHash: hash
                  });
                });

              case 14:
                _context.next = 27;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context['catch'](11);

                if (!/known transaction/.test(_context.t0.message)) {
                  _context.next = 22;
                  break;
                }

                return _context.abrupt('return', console.error('known tx: ' + _context.t0.message));

              case 22:
                if (!/out of gas/.test(_context.t0.message)) {
                  _context.next = 26;
                  break;
                }

                return _context.abrupt('return', console.error('tx failed (wrong secret?): ' + _context.t0.message));

              case 26:
                return _context.abrupt('return', console.error(_context.t0));

              case 27:

                console.log('finish step');

                flow.finishStep({
                  isEthContractFunded: true
                }, { step: 'lock-eth' });

              case 29:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[11, 16]]);
      })),

      // 6. Wait participant withdraw

      function () {
        flow.swap.room.once('ethWithdrawTxHash', function () {
          var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(_ref4) {
            var ethSwapWithdrawTransactionHash = _ref4.ethSwapWithdrawTransactionHash;
            var secret;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    flow.setState({
                      ethSwapWithdrawTransactionHash: ethSwapWithdrawTransactionHash
                    });

                    _context2.next = 3;
                    return flow.ethSwap.getSecretFromTxhash(ethSwapWithdrawTransactionHash);

                  case 3:
                    secret = _context2.sent;


                    if (!flow.state.isEthWithdrawn && secret) {
                      flow.finishStep({
                        isEthWithdrawn: true,
                        secret: secret
                      }, { step: 'wait-withdraw-eth' });
                    }

                  case 5:
                  case 'end':
                    return _context2.stop();
                }
              }
            }, _callee2, _this2);
          }));

          return function (_x) {
            return _ref3.apply(this, arguments);
          };
        }());

        flow.swap.room.sendMessage({
          event: 'request ethWithdrawTxHash'
        });
      },

      // 7. Withdraw

      (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var _flow$state, secret, btcScriptValues;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _flow$state = flow.state, secret = _flow$state.secret, btcScriptValues = _flow$state.btcScriptValues;

                if (btcScriptValues) {
                  _context3.next = 4;
                  break;
                }

                console.error('There is no "btcScriptValues" in state. No way to continue swap...');
                return _context3.abrupt('return');

              case 4:
                _context3.next = 6;
                return flow.btcSwap.withdraw({
                  scriptValues: flow.state.btcScriptValues,
                  secret: secret
                }, function (hash) {
                  flow.setState({
                    btcSwapWithdrawTransactionHash: hash
                  });
                });

              case 6:

                flow.finishStep({
                  isBtcWithdrawn: true
                }, { step: 'withdraw-btc' });

              case 7:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this2);
      })),

      // 8. Finish

      function () {
        flow.swap.room.sendMessage({
          event: 'swap finished'
        });

        flow.finishStep({
          isFinished: true
        }, { step: 'finish' });
      },

      // 9. Finished!
      function () {}];
    }
  }, {
    key: '_checkSwapAlreadyExists',
    value: function _checkSwapAlreadyExists() {
      var participant = this.swap.participant;


      var swapData = {
        ownerAddress: _swap2.default.services.auth.accounts.eth.address,
        participantAddress: participant.eth.address
      };

      return this.ethSwap.checkSwapExists(swapData);
    }
  }, {
    key: 'sign',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
        var _this3 = this;

        var swapExists;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this._checkSwapAlreadyExists();

              case 2:
                swapExists = _context4.sent;

                if (!swapExists) {
                  _context4.next = 8;
                  break;
                }

                this.swap.room.sendMessage({
                  event: 'swap exists'
                });

                this.setState({
                  isSwapExist: true
                });
                _context4.next = 11;
                break;

              case 8:
                this.setState({
                  isSignFetching: true
                });

                this.swap.room.once('request sign', function () {
                  _this3.swap.room.sendMessage({
                    event: 'swap sign'
                  });

                  _this3.finishStep({
                    isMeSigned: true
                  }, { step: 'sign' });
                });

                return _context4.abrupt('return', true);

              case 11:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function sign() {
        return _ref6.apply(this, arguments);
      }

      return sign;
    }()
  }, {
    key: 'verifyBtcScript',
    value: function verifyBtcScript() {
      if (this.state.btcScriptVerified) return true;
      if (!this.state.btcScriptValues) throw new Error('No script, cannot verify');

      this.finishStep({
        btcScriptVerified: true
      }, { step: 'verify-script' });

      return true;
    }
  }, {
    key: 'syncBalance',
    value: function () {
      var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
        var sellAmount, balance, isEnoughMoney;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                sellAmount = this.swap.sellAmount;


                this.setState({
                  isBalanceFetching: true
                });

                _context5.next = 4;
                return this.ethSwap.fetchBalance(_swap2.default.services.auth.accounts.eth.address);

              case 4:
                balance = _context5.sent;
                isEnoughMoney = sellAmount.isLessThanOrEqualTo(balance);


                if (isEnoughMoney) {
                  this.finishStep({
                    balance: balance,
                    isBalanceFetching: false,
                    isBalanceEnough: true
                  }, { step: 'sync-balance' });
                } else {
                  this.setState({
                    balance: balance,
                    isBalanceFetching: false,
                    isBalanceEnough: false
                  });
                }

              case 7:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function syncBalance() {
        return _ref7.apply(this, arguments);
      }

      return syncBalance;
    }()
  }, {
    key: 'tryWithdraw',
    value: function () {
      var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(_secret) {
        var _this4 = this;

        var _state, secret, secretHash, isEthWithdrawn, isBtcWithdrawn, btcScriptValues, _secretHash, _btcSwap$createScript, scriptAddress, balance;

        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _state = this.state, secret = _state.secret, secretHash = _state.secretHash, isEthWithdrawn = _state.isEthWithdrawn, isBtcWithdrawn = _state.isBtcWithdrawn, btcScriptValues = _state.btcScriptValues;

                if (_secret) {
                  _context6.next = 3;
                  break;
                }

                throw new Error('Withdrawal is automatic. For manual withdrawal, provide a secret');

              case 3:
                if (btcScriptValues) {
                  _context6.next = 5;
                  break;
                }

                throw new Error('Cannot withdraw without script values');

              case 5:

                if (secret && secret != _secret) console.warn('Secret already known and is different. Are you sure?');

                if (isBtcWithdrawn) console.warn('Looks like money were already withdrawn, are you sure?');

                console.log('WITHDRAW using secret = ' + _secret);

                _secretHash = _crypto2.default.ripemd160(Buffer.from(_secret, 'hex')).toString('hex');


                if (secretHash != _secretHash) console.warn('Hash does not match!');

                _btcSwap$createScript = this.btcSwap.createScript(btcScriptValues), scriptAddress = _btcSwap$createScript.scriptAddress;
                _context6.next = 13;
                return this.btcSwap.getBalance(scriptAddress);

              case 13:
                balance = _context6.sent;


                console.log('address=' + scriptAddress + ', balance=' + balance);

                if (!(balance === 0)) {
                  _context6.next = 18;
                  break;
                }

                flow.finishStep({
                  isBtcWithdrawn: true
                }, { step: 'withdraw-btc' });

                throw new Error('Already withdrawn: address=' + scriptAddress + ',balance=' + balance);

              case 18:
                _context6.next = 20;
                return this.btcSwap.withdraw({
                  scriptValues: btcScriptValues,
                  secret: _secret
                }, function (hash) {
                  console.log('TX hash=' + hash);
                  _this4.setState({
                    btcSwapWithdrawTransactionHash: hash
                  });
                });

              case 20:

                console.log('TX withdraw sent: ' + this.state.btcSwapWithdrawTransactionHash);

                this.finishStep({
                  isBtcWithdrawn: true
                }, { step: 'withdraw-btc' });

              case 22:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function tryWithdraw(_x2) {
        return _ref8.apply(this, arguments);
      }

      return tryWithdraw;
    }()
  }, {
    key: 'tryRefund',
    value: function tryRefund() {
      var _this5 = this;

      var participant = this.swap.participant;


      return this.ethSwap.refund({
        participantAddress: participant.eth.address
      }, function (hash) {
        _this5.setState({
          refundTransactionHash: hash,
          isRefunded: true
        });
      }).then(function () {
        _this5.swap.room.sendMessage({
          event: 'refund completed'
        });

        _this5.setState({
          isSwapExist: false
        });
      });
    }
  }]);
  return ETH2BTC;
}(_swap3.Flow);

exports.default = ETH2BTC;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7).Buffer))

/***/ }),
/* 1383 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(89);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(90);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(44);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

var _get2 = __webpack_require__(132);

var _get3 = _interopRequireDefault(_get2);

var _crypto = __webpack_require__(175);

var _crypto2 = _interopRequireDefault(_crypto);

var _swap = __webpack_require__(17);

var _swap2 = _interopRequireDefault(_swap);

var _swap3 = __webpack_require__(105);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BTC2ETH = function (_Flow) {
  (0, _inherits3.default)(BTC2ETH, _Flow);
  (0, _createClass3.default)(BTC2ETH, null, [{
    key: 'getName',
    value: function getName() {
      return _swap.constants.COINS.btc + '2' + _swap.constants.COINS.eth;
    }
  }]);

  function BTC2ETH(swap) {
    (0, _classCallCheck3.default)(this, BTC2ETH);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BTC2ETH.__proto__ || (0, _getPrototypeOf2.default)(BTC2ETH)).call(this, swap));

    _this.getRefundTxHex = function () {
      _this.btcSwap.getRefundHexTransaction({
        scriptValues: _this.state.btcScriptValues,
        secret: _this.state.secret
      }).then(function (txHex) {
        _this.setState({
          refundTxHex: txHex
        });
      });
    };

    _this._flowName = BTC2ETH.getName();

    _this.ethSwap = _swap2.default.swaps[_swap.constants.COINS.eth];
    _this.btcSwap = _swap2.default.swaps[_swap.constants.COINS.btc];

    _this.myBtcAddress = _swap2.default.services.auth.accounts.btc.getAddress();
    _this.myEthAddress = _swap2.default.services.auth.accounts.eth.address;

    _this.stepNumbers = {
      'sign': 1,
      'submit-secret': 2,
      'sync-balance': 3,
      'lock-btc': 4,
      'wait-lock-eth': 5,
      'withdraw-eth': 6,
      'finish': 7,
      'end': 8
    };

    if (!_this.ethSwap) {
      throw new Error('BTC2ETH: "ethSwap" of type object required');
    }
    if (!_this.btcSwap) {
      throw new Error('BTC2ETH: "btcSwap" of type object required');
    }

    _this.state = {
      step: 0,

      signTransactionHash: null,
      isSignFetching: false,
      isParticipantSigned: false,

      btcScriptCreatingTransactionHash: null,
      ethSwapCreationTransactionHash: null,

      secretHash: null,
      btcScriptValues: null,

      btcScriptVerified: false,

      isBalanceFetching: false,
      isBalanceEnough: false,
      balance: null,

      isEthContractFunded: false,

      ethSwapWithdrawTransactionHash: null,
      isEthWithdrawn: false,

      refundTransactionHash: null,
      isRefunded: false,

      refundTxHex: null,
      isFinished: false,
      isSwapExist: false
    };

    (0, _get3.default)(BTC2ETH.prototype.__proto__ || (0, _getPrototypeOf2.default)(BTC2ETH.prototype), '_persistSteps', _this).call(_this);
    _this._persistState();
    return _this;
  }

  (0, _createClass3.default)(BTC2ETH, [{
    key: '_persistState',
    value: function _persistState() {
      (0, _get3.default)(BTC2ETH.prototype.__proto__ || (0, _getPrototypeOf2.default)(BTC2ETH.prototype), '_persistState', this).call(this);

      // this.ethSwap.getBalance({
      //   ownerAddress: this.swap.participant.eth.address,
      // })
      //   .then((balance) => {
      //     console.log('balance:', balance)
      //   })
    }
  }, {
    key: '_getSteps',
    value: function _getSteps() {
      var _this2 = this;

      var flow = this;

      return [

      // 1. Signs

      function () {
        flow.swap.room.once('swap sign', function () {
          flow.finishStep({
            isParticipantSigned: true
          }, { step: 'sign', silentError: true });
        });

        flow.swap.room.once('swap exists', function () {
          flow.setState({
            isSwapExist: true
          });
        });

        if (flow.state.isSwapExist) {
          flow.swap.room.once('refund completed', function () {
            flow.swap.room.sendMessage({
              event: 'request sign'
            });
          });
        } else {
          flow.swap.room.sendMessage({
            event: 'request sign'
          });
        }
      },
      // 2. Create secret, secret hash

      function () {
        // this.submitSecret()
      },

      // 3. Check balance

      function () {
        _this2.syncBalance();
        console.log('sync balance');
      },

      // 4. Create BTC Script, fund, notify participant

      (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _flow$swap, sellAmount, participant, btcScriptCreatingTransactionHash, utcNow, getLockTime, scriptValues;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _flow$swap = flow.swap, sellAmount = _flow$swap.sellAmount, participant = _flow$swap.participant;
                btcScriptCreatingTransactionHash = void 0;

                // TODO move this somewhere!

                utcNow = function utcNow() {
                  return Math.floor(Date.now() / 1000);
                };

                getLockTime = function getLockTime() {
                  return utcNow() + 3600 * 3;
                }; // 3 hours from now

                scriptValues = {
                  secretHash: flow.state.secretHash,
                  ownerPublicKey: _swap2.default.services.auth.accounts.btc.getPublicKey(),
                  recipientPublicKey: participant.btc.publicKey,
                  lockTime: getLockTime()
                };
                _context.next = 7;
                return flow.btcSwap.fundScript({
                  scriptValues: scriptValues,
                  amount: sellAmount
                }, function (hash) {
                  btcScriptCreatingTransactionHash = hash;
                  flow.setState({
                    btcScriptCreatingTransactionHash: hash
                  });
                });

              case 7:

                flow.swap.room.on('request btc script', function () {
                  flow.swap.room.sendMessage({
                    event: 'create btc script',
                    data: {
                      scriptValues: scriptValues,
                      btcScriptCreatingTransactionHash: btcScriptCreatingTransactionHash
                    }
                  });
                });

                flow.swap.room.sendMessage({
                  event: 'create btc script',
                  data: {
                    scriptValues: scriptValues,
                    btcScriptCreatingTransactionHash: btcScriptCreatingTransactionHash
                  }
                });

                flow.finishStep({
                  isBtcScriptFunded: true,
                  btcScriptValues: scriptValues
                }, { step: 'lock-btc' });

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      })),

      // 5. Wait participant creates ETH Contract

      function () {
        var participant = flow.swap.participant;

        var timer = void 0;

        flow.swap.room.once('create eth contract', function (_ref2) {
          var ethSwapCreationTransactionHash = _ref2.ethSwapCreationTransactionHash;

          flow.setState({
            ethSwapCreationTransactionHash: ethSwapCreationTransactionHash
          });
        });

        var checkEthBalance = function checkEthBalance() {
          timer = setTimeout((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var balance;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return flow.ethSwap.getBalance({
                      ownerAddress: participant.eth.address
                    });

                  case 2:
                    balance = _context2.sent;


                    if (balance > 0) {
                      if (!flow.state.isEthContractFunded) {
                        // redundant condition but who cares :D
                        flow.finishStep({
                          isEthContractFunded: true
                        }, { step: 'wait-lock-eth' });
                      }
                    } else {
                      checkEthBalance();
                    }

                  case 4:
                  case 'end':
                    return _context2.stop();
                }
              }
            }, _callee2, _this2);
          })), 20 * 1000);
        };

        checkEthBalance();

        flow.swap.room.once('create eth contract', function () {
          if (!flow.state.isEthContractFunded) {
            clearTimeout(timer);
            timer = null;

            flow.finishStep({
              isEthContractFunded: true
            }, { step: 'wait-lock-eth' });
          }
        });
      },

      // 6. Withdraw

      (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var _flow$swap2, buyAmount, participant, data, balanceCheckResult;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _flow$swap2 = flow.swap, buyAmount = _flow$swap2.buyAmount, participant = _flow$swap2.participant;
                data = {
                  ownerAddress: participant.eth.address,
                  secret: flow.state.secret
                };
                _context3.next = 4;
                return flow.ethSwap.checkBalance({
                  ownerAddress: participant.eth.address,
                  expectedValue: buyAmount
                });

              case 4:
                balanceCheckResult = _context3.sent;

                if (!balanceCheckResult) {
                  _context3.next = 9;
                  break;
                }

                console.error('Waiting until deposit: ETH balance check error:', balanceCheckResult);
                flow.swap.events.dispatch('eth balance check error', balanceCheckResult);
                return _context3.abrupt('return');

              case 9:
                _context3.prev = 9;
                _context3.next = 12;
                return flow.ethSwap.withdraw(data, function (hash) {
                  flow.setState({
                    ethSwapWithdrawTransactionHash: hash
                  });

                  flow.swap.room.sendMessage({
                    event: 'ethWithdrawTxHash',
                    data: {
                      ethSwapWithdrawTransactionHash: hash
                    }
                  });
                });

              case 12:
                _context3.next = 25;
                break;

              case 14:
                _context3.prev = 14;
                _context3.t0 = _context3['catch'](9);

                if (!/known transaction/.test(_context3.t0.message)) {
                  _context3.next = 20;
                  break;
                }

                return _context3.abrupt('return', console.error('known tx: ' + _context3.t0.message));

              case 20:
                if (!/out of gas/.test(_context3.t0.message)) {
                  _context3.next = 24;
                  break;
                }

                return _context3.abrupt('return', console.error('tx failed (wrong secret?): ' + _context3.t0.message));

              case 24:
                return _context3.abrupt('return', console.error(_context3.t0));

              case 25:

                flow.swap.room.on('request ethWithdrawTxHash', function () {
                  flow.swap.room.sendMessage({
                    event: 'ethWithdrawTxHash',
                    data: {
                      ethSwapWithdrawTransactionHash: flow.state.ethSwapWithdrawTransactionHash
                    }
                  });
                });

                flow.swap.room.sendMessage({
                  event: 'finish eth withdraw'
                });

                flow.finishStep({
                  isEthWithdrawn: true
                });

              case 28:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this2, [[9, 14]]);
      })),

      // 7. Finish

      function () {
        flow.swap.room.once('swap finished', function () {
          flow.finishStep({
            isFinished: true
          });
        });
      },

      // 8. Finished!
      function () {}];
    }
  }, {
    key: 'submitSecret',
    value: function submitSecret(secret) {
      if (this.state.secret) {
        return;
      }

      if (!this.state.isParticipantSigned) {
        throw new Error('Cannot proceed: participant not signed. step=' + this.state.step);
      }

      var secretHash = _crypto2.default.ripemd160(Buffer.from(secret, 'hex')).toString('hex');

      this.finishStep({
        secret: secret,
        secretHash: secretHash
      }, { step: 'submit-secret' });
    }
  }, {
    key: 'syncBalance',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
        var sellAmount, balance, isEnoughMoney;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                sellAmount = this.swap.sellAmount;


                this.setState({
                  isBalanceFetching: true
                });

                _context4.next = 4;
                return this.btcSwap.fetchBalance(this.myBtcAddress);

              case 4:
                balance = _context4.sent;
                isEnoughMoney = sellAmount.isLessThanOrEqualTo(balance);


                if (isEnoughMoney) {
                  this.finishStep({
                    balance: balance,
                    isBalanceFetching: false,
                    isBalanceEnough: true
                  }, { step: 'sync-balance' });
                } else {
                  console.error('Not enough money: ' + balance + ' < ' + sellAmount);
                  this.setState({
                    balance: balance,
                    isBalanceFetching: false,
                    isBalanceEnough: false
                  });
                }

              case 7:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function syncBalance() {
        return _ref5.apply(this, arguments);
      }

      return syncBalance;
    }()
  }, {
    key: 'tryRefund',
    value: function tryRefund() {
      var _this3 = this;

      return this.btcSwap.refund({
        scriptValues: this.state.btcScriptValues,
        secret: this.state.secret
      }, function (hash) {
        _this3.setState({
          refundTransactionHash: hash,
          isRefunded: true
        });
      }).then(function () {
        _this3.setState({
          isSwapExist: false
        });
      });
    }
  }]);
  return BTC2ETH;
}(_swap3.Flow);

exports.default = BTC2ETH;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7).Buffer))

/***/ }),
/* 1384 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(89);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(90);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(44);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

var _get2 = __webpack_require__(132);

var _get3 = _interopRequireDefault(_get2);

var _crypto = __webpack_require__(175);

var _crypto2 = _interopRequireDefault(_crypto);

var _swap = __webpack_require__(17);

var _swap2 = _interopRequireDefault(_swap);

var _swap3 = __webpack_require__(105);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// move to BtcSwap
exports.default = function (tokenName) {
  var ETHTOKEN2BTC = function (_Flow) {
    (0, _inherits3.default)(ETHTOKEN2BTC, _Flow);
    (0, _createClass3.default)(ETHTOKEN2BTC, null, [{
      key: 'getName',
      value: function getName() {
        return tokenName.toUpperCase() + '2' + _swap.constants.COINS.btc;
      }
    }]);

    function ETHTOKEN2BTC(swap) {
      (0, _classCallCheck3.default)(this, ETHTOKEN2BTC);

      var _this = (0, _possibleConstructorReturn3.default)(this, (ETHTOKEN2BTC.__proto__ || (0, _getPrototypeOf2.default)(ETHTOKEN2BTC)).call(this, swap));

      _this._flowName = ETHTOKEN2BTC.getName();

      _this.ethTokenSwap = _swap2.default.swaps[tokenName.toUpperCase()];
      _this.btcSwap = _swap2.default.swaps[_swap.constants.COINS.btc];

      _this.myBtcAddress = _swap2.default.services.auth.accounts.btc.getAddress();
      _this.myEthAddress = _swap2.default.services.auth.accounts.eth.address;

      _this.stepNumbers = {
        'sign': 1,
        'wait-lock-btc': 2,
        'verify-script': 3,
        'sync-balance': 4,
        'lock-eth': 5,
        'wait-withdraw-eth': 6, // aka getSecret
        'withdraw-btc': 7,
        'finish': 8,
        'end': 9
      };

      if (!_this.ethTokenSwap) {
        throw new Error('ETHTOKEN2BTC: "ethTokenSwap" of type object required');
      }
      if (!_this.btcSwap) {
        throw new Error('ETHTOKEN2BTC: "btcSwap" of type object required');
      }

      _this.state = {
        step: 0,

        signTransactionHash: null,
        isSignFetching: false,
        isMeSigned: false,

        secretHash: null,
        btcScriptValues: null,

        btcScriptVerified: false,

        isBalanceFetching: false,
        isBalanceEnough: false,
        balance: null,

        btcScriptCreatingTransactionHash: null,
        ethSwapCreationTransactionHash: null,
        isEthContractFunded: false,

        secret: null,

        isEthWithdrawn: false,
        isBtcWithdrawn: false,

        refundTransactionHash: null,

        isFinished: false
      };

      (0, _get3.default)(ETHTOKEN2BTC.prototype.__proto__ || (0, _getPrototypeOf2.default)(ETHTOKEN2BTC.prototype), '_persistSteps', _this).call(_this);
      _this._persistState();
      return _this;
    }

    (0, _createClass3.default)(ETHTOKEN2BTC, [{
      key: '_persistState',
      value: function _persistState() {
        (0, _get3.default)(ETHTOKEN2BTC.prototype.__proto__ || (0, _getPrototypeOf2.default)(ETHTOKEN2BTC.prototype), '_persistState', this).call(this);
      }
    }, {
      key: '_getSteps',
      value: function _getSteps() {
        var _this2 = this;

        var flow = this;
        console.log('FLOW', flow);

        return [

        // 1. Sign swap to start

        function () {
          // this.sign()
        },

        // 2. Wait participant create, fund BTC Script

        function () {
          flow.swap.room.once('create btc script', function (_ref) {
            var scriptValues = _ref.scriptValues,
                btcScriptCreatingTransactionHash = _ref.btcScriptCreatingTransactionHash;

            flow.finishStep({
              secretHash: scriptValues.secretHash,
              btcScriptValues: scriptValues,
              btcScriptCreatingTransactionHash: btcScriptCreatingTransactionHash
            }, { step: 'wait-lock-btc', silentError: true });
          });

          flow.swap.room.sendMessage({
            event: 'request btc script'
          });
        },

        // 3. Verify BTC Script

        function () {
          // this.verifyBtcScript()
        },

        // 4. Check balance

        function () {
          _this2.syncBalance();
        },

        // 5. Create ETH Contract

        (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
          var _flow$swap, participant, buyAmount, sellAmount, ethSwapCreationTransactionHash, utcNow, getLockTime, scriptCheckResult, swapData;

          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _flow$swap = flow.swap, participant = _flow$swap.participant, buyAmount = _flow$swap.buyAmount, sellAmount = _flow$swap.sellAmount;
                  ethSwapCreationTransactionHash = void 0;

                  // TODO move this somewhere!

                  utcNow = function utcNow() {
                    return Math.floor(Date.now() / 1000);
                  };

                  getLockTime = function getLockTime() {
                    return utcNow() + 3600 * 1;
                  }; // 1 hour from now

                  _context.next = 6;
                  return flow.btcSwap.checkScript(flow.state.btcScriptValues, {
                    value: buyAmount,
                    recipientPublicKey: _swap2.default.services.auth.accounts.btc.getPublicKey(),
                    lockTime: getLockTime()
                  });

                case 6:
                  scriptCheckResult = _context.sent;

                  if (!scriptCheckResult) {
                    _context.next = 11;
                    break;
                  }

                  console.error('Btc script check error:', scriptCheckResult);
                  flow.swap.events.dispatch('btc script check error', scriptCheckResult);
                  return _context.abrupt('return');

                case 11:
                  swapData = {
                    participantAddress: participant.eth.address,
                    secretHash: flow.state.secretHash,
                    amount: sellAmount
                  };
                  _context.next = 14;
                  return flow.ethTokenSwap.approve({
                    amount: sellAmount
                  });

                case 14:
                  _context.next = 16;
                  return flow.ethTokenSwap.create(swapData, function (hash) {
                    ethSwapCreationTransactionHash = hash;

                    flow.setState({
                      ethSwapCreationTransactionHash: hash
                    });
                  });

                case 16:

                  flow.swap.room.sendMessage({
                    event: 'create eth contract',
                    data: {
                      ethSwapCreationTransactionHash: ethSwapCreationTransactionHash
                    }
                  });

                  flow.finishStep({
                    isEthContractFunded: true
                  });

                case 18:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        })),

        // 6. Wait participant withdraw

        function () {
          var participant = flow.swap.participant;

          var timer = void 0;

          var checkSecretExist = function checkSecretExist() {
            timer = setTimeout((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
              var secret;
              return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      secret = void 0;
                      _context2.prev = 1;
                      _context2.next = 4;
                      return flow.ethTokenSwap.getSecret({
                        participantAddress: participant.eth.address
                      });

                    case 4:
                      secret = _context2.sent;
                      _context2.next = 9;
                      break;

                    case 7:
                      _context2.prev = 7;
                      _context2.t0 = _context2['catch'](1);

                    case 9:

                      if (secret) {
                        if (!flow.state.isEthWithdrawn) {
                          // redundant condition but who cares :D
                          flow.finishStep({
                            isEthWithdrawn: true,
                            secret: secret
                          }, { step: 'wait-withdraw-eth' });
                        }
                      } else {
                        checkSecretExist();
                      }

                    case 10:
                    case 'end':
                      return _context2.stop();
                  }
                }
              }, _callee2, _this2, [[1, 7]]);
            })), 20 * 1000);
          };

          checkSecretExist();

          flow.swap.room.once('finish eth withdraw', function () {
            if (!flow.state.isEthWithdrawn) {
              clearTimeout(timer);
              timer = null;

              flow.finishStep({
                isEthWithdrawn: true
              }, { step: 'wait-withdraw-eth' });
            }
          });
        },

        // 7. Withdraw

        (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
          var participant, secret, data;
          return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  participant = flow.swap.participant;
                  secret = flow.state.secret;
                  data = {
                    participantAddress: participant.eth.address

                    // if there is no secret in state then request it
                  };

                  if (secret) {
                    _context3.next = 15;
                    break;
                  }

                  _context3.prev = 4;
                  _context3.next = 7;
                  return flow.ethTokenSwap.getSecret(data);

                case 7:
                  secret = _context3.sent;


                  flow.setState({
                    secret: secret
                  });
                  _context3.next = 15;
                  break;

                case 11:
                  _context3.prev = 11;
                  _context3.t0 = _context3['catch'](4);

                  // TODO notify user that smth goes wrong
                  if (!/known transaction/.test(_context3.t0.message)) console.error(_context3.t0);
                  return _context3.abrupt('return');

                case 15:
                  if (secret) {
                    _context3.next = 18;
                    break;
                  }

                  console.error('Secret required! Got ' + secret);
                  return _context3.abrupt('return');

                case 18:
                  _context3.next = 20;
                  return flow.btcSwap.withdraw({
                    scriptValues: flow.state.btcScriptValues,
                    secret: secret
                  }, function (hash) {
                    flow.setState({
                      btcSwapWithdrawTransactionHash: hash
                    });
                  });

                case 20:

                  flow.finishStep({
                    isBtcWithdrawn: true
                  });

                case 21:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this2, [[4, 11]]);
        })),

        // 8. Finish

        function () {
          flow.swap.room.sendMessage({
            event: 'swap finished'
          });

          flow.finishStep({
            isFinished: true
          });
        },

        // 9. Finished!

        function () {}];
      }
    }, {
      key: '_checkSwapAlreadyExists',
      value: function _checkSwapAlreadyExists() {
        var participant = this.swap.participant;


        var swapData = {
          ownerAddress: _swap2.default.services.auth.accounts.eth.address,
          participantAddress: participant.eth.address
        };

        return this.ethTokenSwap.checkSwapExists(swapData);
      }
    }, {
      key: 'sign',
      value: function () {
        var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
          var _this3 = this;

          var participant, isMeSigned, swapExists;
          return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  participant = this.swap.participant;
                  isMeSigned = this.state.isMeSigned;

                  if (!isMeSigned) {
                    _context4.next = 4;
                    break;
                  }

                  return _context4.abrupt('return', this.swap.room.sendMessage({
                    event: 'swap sign'
                  }));

                case 4:
                  _context4.next = 6;
                  return this._checkSwapAlreadyExists();

                case 6:
                  swapExists = _context4.sent;

                  if (!swapExists) {
                    _context4.next = 11;
                    break;
                  }

                  this.swap.room.sendMessage({
                    event: 'swap exists'
                  });
                  // TODO go to 6 step automatically here
                  throw new Error('Cannot sign: swap with ' + participant.eth.address + ' already exists! Please refund it or drop ' + this.swap.id);

                case 11:

                  this.setState({
                    isSignFetching: true
                  });

                  this.swap.room.once('request sign', function () {
                    _this3.swap.room.sendMessage({
                      event: 'swap sign'
                    });
                  });

                  this.swap.room.sendMessage({
                    event: 'swap sign'
                  });

                  this.finishStep({
                    isMeSigned: true
                  }, { step: 'sign' });

                  return _context4.abrupt('return', true);

                case 16:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        function sign() {
          return _ref5.apply(this, arguments);
        }

        return sign;
      }()
    }, {
      key: 'verifyBtcScript',
      value: function verifyBtcScript() {
        if (this.state.btcScriptVerified) return true;
        if (!this.state.btcScriptValues) throw new Error('No script, cannot verify');

        this.finishStep({
          btcScriptVerified: true
        }, { step: 'verify-script' });

        return true;
      }
    }, {
      key: 'syncBalance',
      value: function () {
        var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
          var sellAmount, balance, isEnoughMoney;
          return _regenerator2.default.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  sellAmount = this.swap.sellAmount;


                  this.setState({
                    isBalanceFetching: true
                  });

                  _context5.next = 4;
                  return this.ethTokenSwap.fetchBalance(_swap2.default.services.auth.accounts.eth.address);

                case 4:
                  balance = _context5.sent;
                  isEnoughMoney = sellAmount.isLessThanOrEqualTo(balance);


                  if (isEnoughMoney) {
                    this.finishStep({
                      balance: balance,
                      isBalanceFetching: false,
                      isBalanceEnough: true
                    }, { step: 'sync-balance' });
                  } else {
                    this.setState({
                      balance: balance,
                      isBalanceFetching: false,
                      isBalanceEnough: false
                    });
                  }

                case 7:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }));

        function syncBalance() {
          return _ref6.apply(this, arguments);
        }

        return syncBalance;
      }()
    }, {
      key: 'tryWithdraw',
      value: function () {
        var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(_secret) {
          var _this4 = this;

          var _state, secret, secretHash, isEthWithdrawn, isBtcWithdrawn, btcScriptValues, _secretHash, _btcSwap$createScript, scriptAddress, balance;

          return _regenerator2.default.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _state = this.state, secret = _state.secret, secretHash = _state.secretHash, isEthWithdrawn = _state.isEthWithdrawn, isBtcWithdrawn = _state.isBtcWithdrawn, btcScriptValues = _state.btcScriptValues;

                  if (_secret) {
                    _context6.next = 3;
                    break;
                  }

                  throw new Error('Withdrawal is automatic. For manual withdrawal, provide a secret');

                case 3:
                  if (btcScriptValues) {
                    _context6.next = 5;
                    break;
                  }

                  throw new Error('Cannot withdraw without script values');

                case 5:

                  if (secret && secret != _secret) console.warn('Secret already known and is different. Are you sure?');

                  if (isBtcWithdrawn) console.warn('Looks like money were already withdrawn, are you sure?');

                  console.log('WITHDRAW using secret = ' + _secret);

                  _secretHash = _crypto2.default.ripemd160(Buffer.from(_secret, 'hex')).toString('hex');


                  if (secretHash != _secretHash) console.warn('Hash does not match!');

                  _btcSwap$createScript = this.btcSwap.createScript(btcScriptValues), scriptAddress = _btcSwap$createScript.scriptAddress;
                  _context6.next = 13;
                  return this.btcSwap.getBalance(scriptAddress);

                case 13:
                  balance = _context6.sent;


                  console.log('address=' + scriptAddress + ', balance=' + balance);

                  if (!(balance === 0)) {
                    _context6.next = 18;
                    break;
                  }

                  flow.finishStep({
                    isBtcWithdrawn: true
                  }, { step: 'withdraw-btc' });

                  throw new Error('Already withdrawn: address=' + scriptAddress + ',balance=' + balance);

                case 18:
                  _context6.next = 20;
                  return this.btcSwap.withdraw({
                    scriptValues: btcScriptValues,
                    secret: _secret
                  }, function (hash) {
                    console.log('TX hash=' + hash);
                    _this4.setState({
                      btcSwapWithdrawTransactionHash: hash
                    });
                  });

                case 20:

                  console.log('TX withdraw sent: ' + this.state.btcSwapWithdrawTransactionHash);

                  this.finishStep({
                    isBtcWithdrawn: true
                  }, { step: 'withdraw-btc' });

                case 22:
                case 'end':
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }));

        function tryWithdraw(_x) {
          return _ref7.apply(this, arguments);
        }

        return tryWithdraw;
      }()
    }, {
      key: 'tryRefund',
      value: function () {
        var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
          var _this5 = this;

          var participant, _state2, secret, btcScriptValues;

          return _regenerator2.default.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  participant = this.swap.participant;
                  _state2 = this.state, secret = _state2.secret, btcScriptValues = _state2.btcScriptValues;
                  _context7.prev = 2;

                  console.log('TRYING REFUND!');

                  _context7.prev = 4;
                  _context7.next = 7;
                  return this.ethTokenSwap.refund({
                    participantAddress: participant.eth.address
                  }, function (hash) {
                    _this5.setState({
                      refundTransactionHash: hash
                    });
                  });

                case 7:

                  console.log('SUCCESS REFUND!');
                  return _context7.abrupt('return');

                case 11:
                  _context7.prev = 11;
                  _context7.t0 = _context7['catch'](4);

                  console.err('REFUND FAILED!', _context7.t0);

                case 14:
                  _context7.next = 19;
                  break;

                case 16:
                  _context7.prev = 16;
                  _context7.t1 = _context7['catch'](2);

                  console.error('Mbe it\'s still under lockTime?! ' + _context7.t1);

                case 19:

                  if (!btcScriptValues) {
                    console.error('You can\'t do refund w/o btc script values! Try wait until lockTime expires on eth contract!');
                  }

                  if (secret) {
                    _context7.next = 31;
                    break;
                  }

                  _context7.prev = 21;
                  _context7.next = 24;
                  return this.ethTokenSwap.getSecret(data);

                case 24:
                  secret = _context7.sent;
                  _context7.next = 31;
                  break;

                case 27:
                  _context7.prev = 27;
                  _context7.t2 = _context7['catch'](21);

                  console.error('Can\'t receive secret from contract');
                  return _context7.abrupt('return');

                case 31:

                  console.log('TRYING WITHDRAW!');

                  _context7.prev = 32;
                  _context7.next = 35;
                  return this.btcSwap.withdraw({
                    scriptValues: this.state.btcScriptValues,
                    secret: secret
                  }, function (hash) {
                    _this5.setState({
                      btcSwapWithdrawTransactionHash: hash
                    });
                  });

                case 35:

                  console.log('SUCCESS WITHDRAW!');
                  _context7.next = 41;
                  break;

                case 38:
                  _context7.prev = 38;
                  _context7.t3 = _context7['catch'](32);

                  console.error('WITHDRAW FAILED!', _context7.t3);

                case 41:
                case 'end':
                  return _context7.stop();
              }
            }
          }, _callee7, this, [[2, 16], [4, 11], [21, 27], [32, 38]]);
        }));

        function tryRefund() {
          return _ref8.apply(this, arguments);
        }

        return tryRefund;
      }()
    }]);
    return ETHTOKEN2BTC;
  }(_swap3.Flow);

  return ETHTOKEN2BTC;
};

module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7).Buffer))

/***/ }),
/* 1385 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(89);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(90);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(44);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

var _get2 = __webpack_require__(132);

var _get3 = _interopRequireDefault(_get2);

var _crypto = __webpack_require__(175);

var _crypto2 = _interopRequireDefault(_crypto);

var _swap = __webpack_require__(17);

var _swap2 = _interopRequireDefault(_swap);

var _swap3 = __webpack_require__(105);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (tokenName) {
  var BTC2ETHTOKEN = function (_Flow) {
    (0, _inherits3.default)(BTC2ETHTOKEN, _Flow);
    (0, _createClass3.default)(BTC2ETHTOKEN, null, [{
      key: 'getName',
      value: function getName() {
        return _swap.constants.COINS.btc + '2' + tokenName.toUpperCase();
      }
    }]);

    function BTC2ETHTOKEN(swap) {
      (0, _classCallCheck3.default)(this, BTC2ETHTOKEN);

      var _this = (0, _possibleConstructorReturn3.default)(this, (BTC2ETHTOKEN.__proto__ || (0, _getPrototypeOf2.default)(BTC2ETHTOKEN)).call(this, swap));

      _this.getRefundTxHex = function () {
        _this.btcSwap.getRefundHexTransaction({
          scriptValues: _this.state.btcScriptValues,
          secret: _this.state.secret
        }).then(function (txHex) {
          _this.setState({
            refundTxHex: txHex
          });
        });
      };

      _this._flowName = BTC2ETHTOKEN.getName();

      _this.ethTokenSwap = _swap2.default.swaps[tokenName.toUpperCase()];
      _this.btcSwap = _swap2.default.swaps[_swap.constants.COINS.btc];

      _this.myBtcAddress = _swap2.default.services.auth.accounts.btc.getAddress();
      _this.myEthAddress = _swap2.default.services.auth.accounts.eth.address;

      _this.stepNumbers = {
        'sign': 1,
        'submit-secret': 2,
        'sync-balance': 3,
        'lock-btc': 4,
        'wait-lock-eth': 5,
        'withdraw-eth': 6,
        'finish': 7,
        'end': 8
      };

      if (!_this.ethTokenSwap) {
        throw new Error('BTC2ETH: "ethTokenSwap" of type object required');
      }
      if (!_this.btcSwap) {
        throw new Error('BTC2ETH: "btcSwap" of type object required');
      }

      _this.state = {
        step: 0,

        signTransactionHash: null,
        isSignFetching: false,
        isParticipantSigned: false,

        btcScriptCreatingTransactionHash: null,
        ethSwapCreationTransactionHash: null,

        secretHash: null,
        btcScriptValues: null,

        btcScriptVerified: false,

        isBalanceFetching: false,
        isBalanceEnough: false,
        balance: null,

        isEthContractFunded: false,

        ethSwapWithdrawTransactionHash: null,
        isEthWithdrawn: false,
        isBtcWithdrawn: false,

        refundTxHex: null,
        isFinished: false
      };

      (0, _get3.default)(BTC2ETHTOKEN.prototype.__proto__ || (0, _getPrototypeOf2.default)(BTC2ETHTOKEN.prototype), '_persistSteps', _this).call(_this);
      _this._persistState();
      return _this;
    }

    (0, _createClass3.default)(BTC2ETHTOKEN, [{
      key: '_persistState',
      value: function _persistState() {
        (0, _get3.default)(BTC2ETHTOKEN.prototype.__proto__ || (0, _getPrototypeOf2.default)(BTC2ETHTOKEN.prototype), '_persistState', this).call(this);
      }
    }, {
      key: '_getSteps',
      value: function _getSteps() {
        var _this2 = this;

        var flow = this;

        return [

        // 1. Signs

        function () {
          flow.swap.room.once('swap sign', function () {
            flow.finishStep({
              isParticipantSigned: true
            }, { step: 'sign', silentError: true });
          });

          flow.swap.room.once('swap exists', function () {
            console.log('swap already exists');
          });

          // if I came late and he ALREADY send this, I request AGAIN
          flow.swap.room.sendMessage({
            event: 'request sign'
          });
        },

        // 2. Create secret, secret hash

        function () {
          // this.submitSecret()
        },

        // 3. Check balance

        function () {
          _this2.syncBalance();
        },

        // 4. Create BTC Script, fund, notify participant

        (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
          var _flow$swap, sellAmount, participant, btcScriptValues, btcScriptCreatingTransactionHash, utcNow, getLockTime, scriptValues;

          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _flow$swap = flow.swap, sellAmount = _flow$swap.sellAmount, participant = _flow$swap.participant;
                  btcScriptValues = flow.state.btcScriptValues;
                  btcScriptCreatingTransactionHash = void 0;

                  // TODO move this somewhere!

                  utcNow = function utcNow() {
                    return Math.floor(Date.now() / 1000);
                  };

                  getLockTime = function getLockTime() {
                    return utcNow() + 3600 * 3;
                  }; // 3 hours from now

                  scriptValues = void 0;


                  if (!btcScriptValues) {
                    scriptValues = {
                      secretHash: flow.state.secretHash,
                      ownerPublicKey: _swap2.default.services.auth.accounts.btc.getPublicKey(),
                      recipientPublicKey: participant.btc.publicKey,
                      lockTime: getLockTime()
                    };

                    flow.setState({
                      btcScriptValues: scriptValues
                    });
                  } else {
                    scriptValues = btcScriptValues;
                  }

                  console.log('sellAmount', sellAmount);

                  _context.next = 10;
                  return flow.btcSwap.fundScript({
                    scriptValues: scriptValues,
                    amount: sellAmount
                  }, function (hash) {
                    btcScriptCreatingTransactionHash = hash;

                    flow.setState({
                      btcScriptCreatingTransactionHash: hash
                    });
                  });

                case 10:

                  flow.swap.room.on('request btc script', function () {
                    flow.swap.room.sendMessage({
                      event: 'create btc script',
                      data: {
                        scriptValues: scriptValues,
                        btcScriptCreatingTransactionHash: btcScriptCreatingTransactionHash
                      }
                    });
                  });

                  flow.swap.room.sendMessage({
                    event: 'create btc script',
                    data: {
                      scriptValues: scriptValues,
                      btcScriptCreatingTransactionHash: btcScriptCreatingTransactionHash
                    }
                  });

                  flow.finishStep({
                    isBtcScriptFunded: true,
                    btcScriptValues: scriptValues
                  });

                case 13:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        })),

        // 5. Wait participant creates ETH Contract

        function () {
          var participant = flow.swap.participant;

          var timer = void 0;

          flow.swap.room.once('create eth contract', function (_ref2) {
            var ethSwapCreationTransactionHash = _ref2.ethSwapCreationTransactionHash;

            flow.setState({
              ethSwapCreationTransactionHash: ethSwapCreationTransactionHash
            });
          });

          var checkEthBalance = function checkEthBalance() {
            timer = setTimeout((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
              var balance;
              return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return flow.ethTokenSwap.getBalance({
                        ownerAddress: participant.eth.address
                      });

                    case 2:
                      balance = _context2.sent;


                      if (balance > 0) {
                        if (!flow.state.isEthContractFunded) {
                          // redundant condition but who cares :D
                          flow.finishStep({
                            isEthContractFunded: true
                          }, { step: 'wait-lock-eth' });
                        }
                      } else {
                        checkEthBalance();
                      }

                    case 4:
                    case 'end':
                      return _context2.stop();
                  }
                }
              }, _callee2, _this2);
            })), 20 * 1000);
          };

          checkEthBalance();

          flow.swap.room.once('create eth contract', function () {
            if (!flow.state.isEthContractFunded) {
              clearTimeout(timer);
              timer = null;

              flow.finishStep({
                isEthContractFunded: true
              }, { step: 'wait-lock-eth' });
            }
          });
        },

        // 6. Withdraw

        (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
          var _flow$swap2, buyAmount, participant, data, balanceCheckResult;

          return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _flow$swap2 = flow.swap, buyAmount = _flow$swap2.buyAmount, participant = _flow$swap2.participant;
                  data = {
                    ownerAddress: participant.eth.address,
                    secret: flow.state.secret
                  };
                  _context3.next = 4;
                  return flow.ethTokenSwap.checkBalance({
                    ownerAddress: participant.eth.address,
                    expectedValue: buyAmount
                  });

                case 4:
                  balanceCheckResult = _context3.sent;

                  if (!balanceCheckResult) {
                    _context3.next = 9;
                    break;
                  }

                  console.error('Waiting until deposit: ETH balance check error:', balanceCheckResult);
                  flow.swap.events.dispatch('eth balance check error', balanceCheckResult);
                  return _context3.abrupt('return');

                case 9:
                  _context3.prev = 9;
                  _context3.next = 12;
                  return flow.ethTokenSwap.withdraw(data, function (hash) {
                    flow.setState({
                      ethSwapWithdrawTransactionHash: hash
                    });
                  });

                case 12:
                  _context3.next = 18;
                  break;

                case 14:
                  _context3.prev = 14;
                  _context3.t0 = _context3['catch'](9);

                  // TODO user can stuck here after page reload...
                  if (!/known transaction/.test(_context3.t0.message)) console.error(_context3.t0);
                  return _context3.abrupt('return');

                case 18:

                  flow.swap.room.sendMessage({
                    event: 'finish eth withdraw'
                  });

                  flow.finishStep({
                    isEthWithdrawn: true
                  });

                case 20:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this2, [[9, 14]]);
        })),

        // 7. Finish

        function () {
          flow.swap.room.once('swap finished', function () {
            flow.finishStep({
              isFinished: true
            });
          });
        },

        // 8. Finished!
        function () {}];
      }
    }, {
      key: 'submitSecret',
      value: function submitSecret(secret) {
        if (this.state.secretHash) return true;
        if (!this.state.isParticipantSigned) throw new Error('Cannot proceed: participant not signed. step=' + this.state.step);

        var secretHash = _crypto2.default.ripemd160(Buffer.from(secret, 'hex')).toString('hex');

        this.finishStep({
          secret: secret,
          secretHash: secretHash
        }, { step: 'submit-secret' });

        return true;
      }
    }, {
      key: 'syncBalance',
      value: function () {
        var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
          var sellAmount, balance, isEnoughMoney;
          return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  sellAmount = this.swap.sellAmount;


                  this.setState({
                    isBalanceFetching: true
                  });

                  _context4.next = 4;
                  return this.btcSwap.fetchBalance(_swap2.default.services.auth.accounts.btc.getAddress());

                case 4:
                  balance = _context4.sent;
                  isEnoughMoney = sellAmount.isLessThanOrEqualTo(balance);


                  if (isEnoughMoney) {
                    this.finishStep({
                      balance: balance,
                      isBalanceFetching: false,
                      isBalanceEnough: true
                    }, { step: 'sync-balance' });
                  } else {
                    this.setState({
                      balance: balance,
                      isBalanceFetching: false,
                      isBalanceEnough: false
                    });
                  }

                case 7:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        function syncBalance() {
          return _ref5.apply(this, arguments);
        }

        return syncBalance;
      }()
    }, {
      key: 'tryRefund',
      value: function tryRefund() {
        var _this3 = this;

        return this.btcSwap.refund({
          scriptValues: this.state.btcScriptValues,
          secret: this.state.secret
        }, function (hash) {
          _this3.setState({
            refundTransactionHash: hash
          });
        }).then(function () {
          _this3.setState({
            isRefunded: true
          });
        });
      }
    }]);
    return BTC2ETHTOKEN;
  }(_swap3.Flow);

  return BTC2ETHTOKEN;
};

module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7).Buffer))

/***/ }),
/* 1386 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(127);

var _promise2 = _interopRequireDefault(_promise);

var _extends2 = __webpack_require__(88);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(44);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

var _get2 = __webpack_require__(132);

var _get3 = _interopRequireDefault(_get2);

var _swap = __webpack_require__(17);

var _swap2 = _interopRequireDefault(_swap);

var _swap3 = __webpack_require__(105);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EOS2BTC = function (_Flow) {
  (0, _inherits3.default)(EOS2BTC, _Flow);
  (0, _createClass3.default)(EOS2BTC, null, [{
    key: 'getName',
    value: function getName() {
      return _swap.constants.COINS.eos + '2' + _swap.constants.COINS.btc;
    }
  }]);

  function EOS2BTC(swap) {
    (0, _classCallCheck3.default)(this, EOS2BTC);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EOS2BTC.__proto__ || (0, _getPrototypeOf2.default)(EOS2BTC)).call(this, swap));

    _this._flowName = EOS2BTC.getName();

    _this.eosSwap = _swap2.default.swaps[_swap.constants.COINS.eos];
    _this.btcSwap = _swap2.default.swaps[_swap.constants.COINS.btc];

    _this.state = (0, _extends3.default)({}, _this.state, {
      swapID: null,

      secret: null,
      secretHash: null,

      scriptValues: null,

      createTx: null,
      openTx: null,
      eosWithdrawTx: null,
      btcWithdrawTx: null
    });

    _this.listenRequests = {};

    (0, _get3.default)(EOS2BTC.prototype.__proto__ || (0, _getPrototypeOf2.default)(EOS2BTC.prototype), '_persistSteps', _this).call(_this);
    (0, _get3.default)(EOS2BTC.prototype.__proto__ || (0, _getPrototypeOf2.default)(EOS2BTC.prototype), '_persistState', _this).call(_this);
    return _this;
  }

  (0, _createClass3.default)(EOS2BTC, [{
    key: '_getSteps',
    value: function _getSteps() {
      var _this2 = this;

      var flow = this;

      return [function () {
        flow.needs().btcScript().then(function (_ref) {
          var scriptValues = _ref.scriptValues,
              createTx = _ref.createTx;
          var secretHash = scriptValues.secretHash;


          flow.finishStep({ scriptValues: scriptValues, secretHash: secretHash, createTx: createTx });
        });
      }, function () {
        flow.needs().verifyScript().then(function () {
          flow.finishStep();
        });
      }, function () {
        var secretHash = flow.state.secretHash;
        var _flow$swap = flow.swap,
            amount = _flow$swap.sellAmount,
            participant = _flow$swap.participant;


        flow.eosSwap.open({
          participantAccount: participant.eos.address,
          secretHash: secretHash,
          amount: amount
        }, function (_ref2) {
          var openTx = _ref2.openTx,
              swapID = _ref2.swapID;

          flow.finishStep({ openTx: openTx, swapID: swapID });
          flow.send().openSwap();
        });
      }, function () {
        flow.needs().eosWithdraw().then(function (_ref3) {
          var secret = _ref3.secret,
              eosWithdrawTx = _ref3.eosWithdrawTx;

          flow.finishStep({ secret: secret, eosWithdrawTx: eosWithdrawTx });
        });
      }, function () {
        var _flow$state = flow.state,
            secret = _flow$state.secret,
            scriptValues = _flow$state.scriptValues;


        flow.btcSwap.withdraw({ scriptValues: scriptValues, secret: secret }, function (btcWithdrawTx) {
          _this2.finishStep({ btcWithdrawTx: btcWithdrawTx });
          flow.send().btcWithdraw();
        });
      }];
    }
  }, {
    key: 'needs',
    value: function needs() {
      var flow = this;
      var swap = this.swap;
      return {
        btcScript: function btcScript() {
          flow.updateListenRequests();
          return new _promise2.default(function (resolve) {
            swap.room.once('create btc script', resolve);
            swap.room.sendMessage({
              event: 'request create btc script'
            });
          });
        },
        verifyScript: function verifyScript() {
          flow.updateListenRequests();
          return new _promise2.default(function (resolve) {
            swap.events.once('verify script', resolve);
          });
        },
        eosWithdraw: function eosWithdraw() {
          flow.updateListenRequests();
          return new _promise2.default(function (resolve) {
            swap.room.once('eos withdraw', resolve);
            swap.room.sendMessage({
              event: 'request eos withdraw'
            });
          });
        }
      };
    }
  }, {
    key: 'updateListenRequests',
    value: function updateListenRequests() {
      var flow = this;
      var state = this.state;
      var swap = this.swap;

      if (!flow.listenRequests['request open swap']) {
        if (state.openTx && state.swapID) {
          swap.room.on('request open swap', function () {
            flow.send().openSwap();
          });

          flow.listenRequests['request open swap'] = true;
        }
      }

      if (!flow.listenRequests['request btc withdraw']) {
        if (state.btcWithdrawTx) {
          swap.room.on('request btc withdraw', function () {
            flow.send().btcWithdraw();
          });

          flow.listenRequests['request btc withdraw'] = true;
        }
      }
    }
  }, {
    key: 'send',
    value: function send() {
      var state = this.state;
      var swap = this.swap;
      return {
        openSwap: function openSwap() {
          var openTx = state.openTx,
              swapID = state.swapID;


          swap.room.sendMessage({
            event: 'open swap',
            data: {
              openTx: openTx, swapID: swapID
            }
          });
        },
        btcWithdraw: function btcWithdraw() {
          var btcWithdrawTx = state.btcWithdrawTx;


          swap.room.sendMessage({
            event: 'btc withdraw',
            data: {
              btcWithdrawTx: btcWithdrawTx
            }
          });
        }
      };
    }
  }]);
  return EOS2BTC;
}(_swap3.Flow);

exports.default = EOS2BTC;
module.exports = exports['default'];

/***/ }),
/* 1387 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(127);

var _promise2 = _interopRequireDefault(_promise);

var _extends2 = __webpack_require__(88);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(44);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

var _get2 = __webpack_require__(132);

var _get3 = _interopRequireDefault(_get2);

var _crypto = __webpack_require__(175);

var _crypto2 = _interopRequireDefault(_crypto);

var _swap = __webpack_require__(17);

var _swap2 = _interopRequireDefault(_swap);

var _swap3 = __webpack_require__(105);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BTC2EOS = function (_Flow) {
  (0, _inherits3.default)(BTC2EOS, _Flow);
  (0, _createClass3.default)(BTC2EOS, null, [{
    key: 'getName',
    value: function getName() {
      return _swap.constants.COINS.btc + '2' + _swap.constants.COINS.eos;
    }
  }]);

  function BTC2EOS(swap) {
    (0, _classCallCheck3.default)(this, BTC2EOS);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BTC2EOS.__proto__ || (0, _getPrototypeOf2.default)(BTC2EOS)).call(this, swap));

    _this._flowName = BTC2EOS.getName();

    _this.btcSwap = _swap2.default.swaps[_swap.constants.COINS.btc];
    _this.eosSwap = _swap2.default.swaps[_swap.constants.COINS.eos];

    _this.state = (0, _extends3.default)({}, _this.state, {
      swapID: null,

      secret: null,
      secretHash: null,

      scriptValues: null,

      createTx: null,
      openTx: null,
      eosWithdrawTx: null,
      btcWithdrawTx: null
    });

    _this.listenRequests = {};

    (0, _get3.default)(BTC2EOS.prototype.__proto__ || (0, _getPrototypeOf2.default)(BTC2EOS.prototype), '_persistSteps', _this).call(_this);
    (0, _get3.default)(BTC2EOS.prototype.__proto__ || (0, _getPrototypeOf2.default)(BTC2EOS.prototype), '_persistState', _this).call(_this);
    return _this;
  }

  (0, _createClass3.default)(BTC2EOS, [{
    key: '_getSteps',
    value: function _getSteps() {
      var _this2 = this;

      var flow = this;

      return [function () {
        flow.needs().secret().then(function (_ref) {
          var secret = _ref.secret,
              secretHash = _ref.secretHash;

          _this2.finishStep({
            secret: secret, secretHash: secretHash
          });
        });
      }, function () {
        var _flow$swap = flow.swap,
            amount = _flow$swap.sellAmount,
            participant = _flow$swap.participant;


        var scriptValues = {
          secretHash: flow.state.secretHash,
          ownerPublicKey: _swap2.default.services.auth.accounts.btc.getPublicKey(),
          recipientPublicKey: participant.btc.publicKey,
          lockTime: flow.eosSwap.getLockTime()
        };

        flow.btcSwap.fundScript({
          scriptValues: scriptValues,
          amount: amount
        }, function (createTx) {
          flow.finishStep({ scriptValues: scriptValues, createTx: createTx });
          flow.send().btcScript();
        });
      }, function () {
        flow.needs().openSwap().then(function (_ref2) {
          var openTx = _ref2.openTx,
              swapID = _ref2.swapID;

          flow.finishStep({ openTx: openTx, swapID: swapID });
        });
      }, function () {
        var _flow$state = flow.state,
            swapID = _flow$state.swapID,
            secret = _flow$state.secret;


        flow.eosSwap.withdraw({
          swapID: swapID,
          secret: secret
        }, function (eosWithdrawTx) {
          flow.finishStep({ eosWithdrawTx: eosWithdrawTx });
          flow.send().eosWithdraw();
        });
      }, function () {
        flow.needs().btcWithdraw().then(function (_ref3) {
          var btcWithdrawTx = _ref3.btcWithdrawTx;

          flow.finishStep({ btcWithdrawTx: btcWithdrawTx });
        });
      }];
    }
  }, {
    key: 'needs',
    value: function needs() {
      var flow = this;
      var swap = this.swap;
      return {
        secret: function secret() {
          flow.updateListenRequests();
          return new _promise2.default(function (resolve) {
            swap.events.once('submit secret', resolve);
          });
        },
        openSwap: function openSwap() {
          flow.updateListenRequests();
          return new _promise2.default(function (resolve) {
            swap.room.once('open swap', resolve);
            swap.room.sendMessage({
              event: 'request open swap'
            });
          });
        },
        btcWithdraw: function btcWithdraw() {
          flow.updateListenRequests();
          return new _promise2.default(function (resolve) {
            swap.room.once('btc withdraw', resolve);
            swap.room.sendMessage({
              event: 'request btc withdraw'
            });
          });
        }
      };
    }
  }, {
    key: 'updateListenRequests',
    value: function updateListenRequests() {
      var flow = this;
      var state = this.state;
      var swap = this.swap;

      if (!flow.listenRequests['request create btc script']) {
        if (state.scriptValues && state.createTx) {
          swap.room.on('request create btc script', function () {
            console.log('SEND BTC SCRIPT');

            flow.send().btcScript();
          });

          flow.listenRequests['request create btc script'] = true;
        }
      }

      if (!flow.listenRequests['request eos withdraw']) {
        if (state.eosWithdrawTx && state.secret) {
          swap.room.on('request eos withdraw', function () {
            flow.send().eosWithdraw();
          });

          flow.listenRequests['request eos withdraw'];
        }
      }

      console.log('listen requests', flow.listenRequests);
    }
  }, {
    key: 'send',
    value: function send() {
      var state = this.state;
      var swap = this.swap;
      return {
        btcScript: function btcScript() {
          var scriptValues = state.scriptValues,
              createTx = state.createTx;


          swap.room.sendMessage({
            event: 'create btc script',
            data: {
              scriptValues: scriptValues, createTx: createTx
            }
          });
        },
        eosWithdraw: function eosWithdraw() {
          var eosWithdrawTx = state.eosWithdrawTx,
              secret = state.secret;


          swap.room.sendMessage({
            event: 'eos withdraw',
            data: {
              eosWithdrawTx: eosWithdrawTx, secret: secret
            }
          });
        }
      };
    }
  }]);
  return BTC2EOS;
}(_swap3.Flow);

exports.default = BTC2EOS;
module.exports = exports['default'];

/***/ }),
/* 1388 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _swap = __webpack_require__(17);

var _swap2 = _interopRequireDefault(_swap);

var _actions = __webpack_require__(13);

var _actions2 = _interopRequireDefault(_actions);

var _appConfig = __webpack_require__(21);

var _appConfig2 = _interopRequireDefault(_appConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Core = function (_Component) {
  (0, _inherits3.default)(Core, _Component);

  function Core() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Core);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Core.__proto__ || (0, _getPrototypeOf2.default)(Core)).call.apply(_ref, [this].concat(args))), _this), _this.setIpfs = function () {
      setTimeout(function () {
        var isOnline = _swap2.default.services.room.connection._ipfs.isOnline();
        var peer = _swap2.default.services.room.peer;


        _this.updateOrders();

        _swap2.default.services.room.connection.on('peer joined', _actions2.default.ipfs.userJoined).on('peer left', _actions2.default.ipfs.userLeft).on('accept swap request', _this.updateOrders).on('decline swap request', _this.updateOrders);

        setTimeout(function () {
          _actions2.default.ipfs.set({
            isOnline: isOnline,
            peer: peer,
            server: _appConfig2.default.ipfs.server
          });
        }, 1000);
      }, 8000);
    }, _this.updateOrders = function () {
      var orders = _swap2.default.services.orders.items;
      _actions2.default.core.updateCore(orders);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Core, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      _actions2.default.core.getSwapHistory();
      _swap2.default.services.orders.on('new orders', this.updateOrders).on('new order', this.updateOrders).on('order update', this.updateOrders).on('remove order', this.updateOrders).on('new order request', this.updateOrders);
      this.setIpfs();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _swap2.default.services.orders.off('new orders', this.updateOrders).off('new order', this.updateOrders).off('order update', this.updateOrders).off('remove order', this.updateOrders).off('new order request', this.updateOrders);
      _swap2.default.services.room.connection.off('peer joined', _actions2.default.ipfs.userJoined).off('peer left', _actions2.default.ipfs.userLeft).off('accept swap request', this.updateOrders).off('decline swap request', this.updateOrders);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateOrders();
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  return Core;
}(_react.Component);

exports.default = Core;

/***/ }),
/* 1389 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redaction = __webpack_require__(14);

var _reactRouterDom = __webpack_require__(32);

var _reactDeviceDetect = __webpack_require__(216);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Header = __webpack_require__(1390);

var _Header2 = _interopRequireDefault(_Header);

var _Nav = __webpack_require__(1391);

var _Nav2 = _interopRequireDefault(_Nav);

var _User = __webpack_require__(1393);

var _User2 = _interopRequireDefault(_User);

var _NavMobile = __webpack_require__(1402);

var _NavMobile2 = _interopRequireDefault(_NavMobile);

var _Logo = __webpack_require__(311);

var _Logo2 = _interopRequireDefault(_Logo);

var _WidthContainer = __webpack_require__(133);

var _WidthContainer2 = _interopRequireDefault(_WidthContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = (_dec = (0, _redaction.connect)(function (_ref) {
  var menu = _ref.menu.items;
  return {
    menu: menu
  };
}), _dec2 = (0, _reactCssModules2.default)(_Header2.default), (0, _reactRouterDom.withRouter)(_class = _dec(_class = _dec2(_class = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header() {
    (0, _classCallCheck3.default)(this, Header);
    return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments));
  }

  (0, _createClass3.default)(Header, [{
    key: 'render',
    value: function render() {
      var menu = this.props.menu;


      if (_reactDeviceDetect.isMobile) {
        return _react2.default.createElement(_NavMobile2.default, { menu: menu });
      }

      return _react2.default.createElement(
        'div',
        { styleName: 'header' },
        _react2.default.createElement(
          _WidthContainer2.default,
          { styleName: 'container' },
          _react2.default.createElement(_Logo2.default, { withLink: true }),
          _react2.default.createElement(_Nav2.default, { menu: menu }),
          _react2.default.createElement(_Logo2.default, { withLink: true, mobile: true }),
          _react2.default.createElement(_User2.default, null)
        )
      );
    }
  }]);
  return Header;
}(_react.Component)) || _class) || _class) || _class);
exports.default = Header;

/***/ }),
/* 1390 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"header":"qZaPkJ","container":"_1AYBnf"};

/***/ }),
/* 1391 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(32);

var _helpers = __webpack_require__(11);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Nav = __webpack_require__(1392);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Nav = (_dec = (0, _reactCssModules2.default)(_Nav2.default), _dec(_class = (_temp2 = _class2 = function (_Component) {
  (0, _inherits3.default)(Nav, _Component);

  function Nav() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Nav);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Nav.__proto__ || (0, _getPrototypeOf2.default)(Nav)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function () {
      var scrollStep = -window.scrollY / (500 / 15);
      var scrollInterval = setInterval(function () {
        if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep);
        } else {
          clearInterval(scrollInterval);
        }
      }, 15);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Nav, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var menu = this.props.menu;


      return _react2.default.createElement(
        'div',
        { styleName: 'nav' },
        _react2.default.createElement(
          _react.Fragment,
          null,
          menu.filter(function (i) {
            return i.isDesktop !== false;
          }).map(function (_ref2) {
            var title = _ref2.title,
                link = _ref2.link,
                exact = _ref2.exact;
            return _react2.default.createElement(
              _reactRouterDom.NavLink,
              {
                onClick: _this2.handleClick,
                key: title,
                exact: exact,
                styleName: 'link',
                to: link,
                activeClassName: _Nav2.default.active
              },
              title
            );
          }),
          true && _react2.default.createElement(
            'a',
            { href: _helpers.links.test, styleName: 'link', target: '_blank', rel: 'noreferrer noopener' },
            'Testnet'
          )
        )
      );
    }
  }]);
  return Nav;
}(_react.Component), _class2.propTypes = {
  menu: _propTypes2.default.array.isRequired
}, _temp2)) || _class);
exports.default = Nav;

/***/ }),
/* 1392 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"nav":"_34R6Y0","link":"_16Gtic","active":"_2Mv-fo"};

/***/ }),
/* 1393 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redaction = __webpack_require__(14);

var _User = __webpack_require__(1394);

var _User2 = _interopRequireDefault(_User);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Sound = __webpack_require__(526);

var _Sound2 = _interopRequireDefault(_Sound);

var _UserAvatar = __webpack_require__(1395);

var _UserAvatar2 = _interopRequireDefault(_UserAvatar);

var _UserTooltip = __webpack_require__(527);

var _UserTooltip2 = _interopRequireDefault(_UserTooltip);

var _AddOfferButton = __webpack_require__(1400);

var _AddOfferButton2 = _interopRequireDefault(_AddOfferButton);

var _Avatar = __webpack_require__(295);

var _Avatar2 = _interopRequireDefault(_Avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = (_dec = (0, _redaction.connect)({
  feeds: 'feeds.items',
  peer: 'ipfs.peer'
}), _dec2 = (0, _reactCssModules2.default)(_User2.default), _dec(_class = _dec2(_class = function (_React$Component) {
  (0, _inherits3.default)(User, _React$Component);

  function User() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, User);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = User.__proto__ || (0, _getPrototypeOf2.default)(User)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      view: true
    }, _this.handleChangeView = function () {
      _this.setState({ view: true });
    }, _this.handleToggleTooltip = function () {
      _this.setState({
        view: !_this.state.view
      });
    }, _this.soundClick = function () {
      var audio = new Audio();
      audio.src = _Sound2.default;
      audio.autoplay = true;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(User, [{
    key: 'render',
    value: function render() {
      var view = this.state.view;
      var _props = this.props,
          feeds = _props.feeds,
          peer = _props.peer;


      return _react2.default.createElement(
        'div',
        { styleName: 'user-cont' },
        _react2.default.createElement(_AddOfferButton2.default, null),
        _react2.default.createElement(_UserAvatar2.default, {
          isToggle: this.handleToggleTooltip,
          feeds: feeds,
          soundClick: this.soundClick,
          changeView: this.handleChangeView
        }),
        view && _react2.default.createElement(_UserTooltip2.default, {
          toggle: this.handleToggleTooltip
        }),
        !!peer && _react2.default.createElement(_Avatar2.default, {
          className: _User2.default.avatar,
          value: peer,
          background: [81, 14, 216, 255],
          size: 40
        })
      );
    }
  }]);
  return User;
}(_react2.default.Component)) || _class) || _class);
exports.default = User;

/***/ }),
/* 1394 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"user-cont":"_33Ia7P","hidden":"_3MuJfF","avatar":"_2Sdn1G"};

/***/ }),
/* 1395 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _UserAvatar = __webpack_require__(1396);

var _UserAvatar2 = _interopRequireDefault(_UserAvatar);

var _avatar = __webpack_require__(1397);

var _avatar2 = _interopRequireDefault(_avatar);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserAvatar = (_dec = (0, _reactCssModules2.default)(_UserAvatar2.default, { allowMultiple: true }), _dec(_class = function (_Component) {
  (0, _inherits3.default)(UserAvatar, _Component);

  function UserAvatar() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, UserAvatar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = UserAvatar.__proto__ || (0, _getPrototypeOf2.default)(UserAvatar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      feeds: null,
      animation: 'user'
    }, _this.handleClick = function () {
      var isToggle = _this.props.isToggle;


      isToggle();
      _this.setState({
        animation: 'user'
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(UserAvatar, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var _props = this.props,
          feeds = _props.feeds,
          soundClick = _props.soundClick,
          changeView = _props.changeView;


      if (nextProps.feeds.length > feeds.length) {
        changeView();

        this.setState({
          feeds: nextProps.feeds,
          animation: 'user shake new'
        });

        setTimeout(function () {
          _this2.setState({
            animation: 'user new'
          });
        }, 820);

        soundClick();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var animation = this.state.animation;


      return _react2.default.createElement(
        'div',
        { styleName: animation, onClick: this.handleClick },
        _react2.default.createElement('img', { styleName: 'bell', src: _avatar2.default, alt: 'Bell' })
      );
    }
  }]);
  return UserAvatar;
}(_react.Component)) || _class);
exports.default = UserAvatar;

/***/ }),
/* 1396 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"user":"_3R8ezp","bell":"_18U74M","status":"_1EDMx_","new":"_3UWWZN","shake":"_3RMI-t"};

/***/ }),
/* 1397 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/avatar_e241ff.svg";

/***/ }),
/* 1398 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"column":"_1gVhNf","feed":"_2nP3zE","userTooltip":"ZUrxv8","title":"_3Wmf4W","currency":"n4WzMO","coin":"FTx5Zs","arrow":"_1HGghg","checked":"Rrpe2k","decline":"_1oOc8J","icon":"hRKJDr"};

/***/ }),
/* 1399 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/arrow-right_861e95.svg";

/***/ }),
/* 1400 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(32);

var _helpers = __webpack_require__(11);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _AddOfferButton = __webpack_require__(1401);

var _AddOfferButton2 = _interopRequireDefault(_AddOfferButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddOfferButton = (_dec = (0, _reactCssModules2.default)(_AddOfferButton2.default), _dec(_class = function (_Component) {
  (0, _inherits3.default)(AddOfferButton, _Component);

  function AddOfferButton() {
    (0, _classCallCheck3.default)(this, AddOfferButton);
    return (0, _possibleConstructorReturn3.default)(this, (AddOfferButton.__proto__ || (0, _getPrototypeOf2.default)(AddOfferButton)).apply(this, arguments));
  }

  (0, _createClass3.default)(AddOfferButton, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _react.Fragment,
        null,
         false ? _react2.default.createElement(
          'a',
          {
            href: _helpers.links.main,
            target: '_blank',
            rel: 'noreferrer noopener',
            styleName: 'button'
          },
          'Mainnet'
        ) : _react2.default.createElement(
          'div',
          {
            styleName: 'button',
            onClick: function onClick() {
              return pinkClick();
            } /* eslint-disable-line */
          },
          'Subscribe'
        ),
        _react2.default.createElement('div', {
          styleName: 'buttonMobile',
          onClick: function onClick() {
            return pinkClick();
          } /* eslint-disable-line */
        })
      );
    }
  }]);
  return AddOfferButton;
}(_react.Component)) || _class);
exports.default = AddOfferButton;

/***/ }),
/* 1401 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"button":"_3-kNLg","buttonMobile":"_3jxypg"};

/***/ }),
/* 1402 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(32);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _NavMobile = __webpack_require__(1403);

var _NavMobile2 = _interopRequireDefault(_NavMobile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavMobile = (_dec = (0, _reactCssModules2.default)(_NavMobile2.default), _dec(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(NavMobile, _Component);

  function NavMobile() {
    (0, _classCallCheck3.default)(this, NavMobile);
    return (0, _possibleConstructorReturn3.default)(this, (NavMobile.__proto__ || (0, _getPrototypeOf2.default)(NavMobile)).apply(this, arguments));
  }

  (0, _createClass3.default)(NavMobile, [{
    key: 'render',
    value: function render() {
      var menu = this.props.menu;


      return _react2.default.createElement(
        'div',
        { styleName: 'navbar' },
        menu.filter(function (i) {
          return i.isMobile !== false;
        }).map(function (_ref) {
          var title = _ref.title,
              link = _ref.link,
              exact = _ref.exact,
              icon = _ref.icon;
          return _react2.default.createElement(
            _reactRouterDom.NavLink,
            {
              key: title,
              exact: exact,
              to: link,
              activeClassName: _NavMobile2.default.active
            },
            _react2.default.createElement('i', { className: 'fas fa-' + icon, 'aria-hidden': 'true' }),
            _react2.default.createElement(
              'span',
              null,
              title
            )
          );
        })
      );
    }
  }]);
  return NavMobile;
}(_react.Component), _class2.propTypes = {
  menu: _propTypes2.default.array.isRequired
}, _temp)) || _class);
exports.default = NavMobile;

/***/ }),
/* 1403 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"navbar":"_3bqdv6","active":"_3eJxZS"};

/***/ }),
/* 1404 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"logo":"kQLHsU","mobile":"_1fQO7J"};

/***/ }),
/* 1405 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/logo_3436dc.svg";

/***/ }),
/* 1406 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/logo-colored_eb1f60.svg";

/***/ }),
/* 1407 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"widthContainer":"_3BXipS","widthContainerIn":"_3Igl7j","relative":"_3gxpYb","fullHeight":"_1GF4SW","centeringContent":"_3RUiHP","main":"_3aO2EZ"};

/***/ }),
/* 1408 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redaction = __webpack_require__(14);

var _reactRouterDom = __webpack_require__(32);

var _Footer = __webpack_require__(1409);

var _Footer2 = _interopRequireDefault(_Footer);

var _logo = __webpack_require__(1410);

var _logo2 = _interopRequireDefault(_logo);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Info = __webpack_require__(1411);

var _Info2 = _interopRequireDefault(_Info);

var _SocialMenu = __webpack_require__(1416);

var _SocialMenu2 = _interopRequireDefault(_SocialMenu);

var _Links = __webpack_require__(1418);

var _Links2 = _interopRequireDefault(_Links);

var _WidthContainer = __webpack_require__(133);

var _WidthContainer2 = _interopRequireDefault(_WidthContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = (_dec = (0, _redaction.connect)(function (_ref) {
  var _ref$ipfs = _ref.ipfs,
      server = _ref$ipfs.server,
      isOnline = _ref$ipfs.isOnline,
      onlineUsers = _ref$ipfs.onlineUsers;
  return {
    server: server,
    isOnline: isOnline,
    onlineUsers: onlineUsers
  };
}), _dec2 = (0, _reactCssModules2.default)(_Footer2.default, { allowMultiple: true }), (0, _reactRouterDom.withRouter)(_class = _dec(_class = _dec2(_class = function (_Component) {
  (0, _inherits3.default)(Footer, _Component);

  function Footer() {
    (0, _classCallCheck3.default)(this, Footer);
    return (0, _possibleConstructorReturn3.default)(this, (Footer.__proto__ || (0, _getPrototypeOf2.default)(Footer)).apply(this, arguments));
  }

  (0, _createClass3.default)(Footer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          onlineUsers = _props.onlineUsers,
          isOnline = _props.isOnline,
          server = _props.server;


      return _react2.default.createElement(
        'div',
        { styleName: 'footer' },
        _react2.default.createElement(
          'div',
          { styleName: 'information-footer' },
          _react2.default.createElement(
            _WidthContainer2.default,
            { styleName: 'container' },
            _react2.default.createElement(_Info2.default, { serverAddress: server, onlineUsers: onlineUsers, isOnline: isOnline })
          )
        ),
        _react2.default.createElement(
          'div',
          { styleName: 'default-footer' },
          _react2.default.createElement(
            _WidthContainer2.default,
            null,
            _react2.default.createElement(_Links2.default, null)
          ),
          _react2.default.createElement(
            _WidthContainer2.default,
            { styleName: 'container--social' },
            _react2.default.createElement(_SocialMenu2.default, null)
          ),
          _react2.default.createElement(
            _WidthContainer2.default,
            { styleName: 'container--copyright' },
            _react2.default.createElement(
              'div',
              { styleName: 'copyright' },
              _react2.default.createElement('img', { src: _logo2.default, styleName: 'copyright-logo', alt: 'logotype' }),
              _react2.default.createElement(
                'span',
                { styleName: 'copyright-text' },
                '\xA9 2018 Swap Online Harju maakond, Tallinn, Kesklinna linnaosa'
              )
            )
          )
        )
      );
    }
  }]);
  return Footer;
}(_react.Component)) || _class) || _class) || _class);
exports.default = Footer;

/***/ }),
/* 1409 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"footer":"_3I8ngW","information-footer":"_3vZL5k","text":"_2mlrGY","container":"_19TQvN","container--copyright":"_3g2PS3","container--social":"Q3swHS","default-footer":"_1et5bP","copyright":"_1D7G47","copyright-logo":"_1Z1Unz","copyright-text":"_2_l7sw"};

/***/ }),
/* 1410 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/logo_f8bdcb.svg";

/***/ }),
/* 1411 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _rcProgress = __webpack_require__(1412);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Info = __webpack_require__(1415);

var _Info2 = _interopRequireDefault(_Info);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Info = function (_React$Component) {
  (0, _inherits3.default)(Info, _React$Component);

  function Info() {
    (0, _classCallCheck3.default)(this, Info);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Info.__proto__ || (0, _getPrototypeOf2.default)(Info)).call(this));

    _this.state = {
      progressValue: 0,
      isVisibleProgressBar: true
    };
    return _this;
  }

  (0, _createClass3.default)(Info, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.launchProgressBar();
    }
  }, {
    key: 'hideProgressBar',
    value: function hideProgressBar() {
      this.setState({ isVisibleProgressBar: false });
    }
  }, {
    key: 'launchProgressBar',
    value: function launchProgressBar() {
      var _this2 = this;

      var maxValue = 100;
      var timeToReachMaxValue = 60000;
      var howOftenToProgres = 1000;
      var progressUnit = maxValue / (timeToReachMaxValue / howOftenToProgres);

      var interval = setInterval(function () {
        var progressValue = _this2.state.progressValue;


        if (progressValue >= maxValue) {
          clearInterval(interval);
          _this2.hideProgressBar();
        } else {
          _this2.setState({ progressValue: progressValue + progressUnit });
        }
      }, howOftenToProgres);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          isOnline = _props.isOnline,
          serverAddress = _props.serverAddress,
          onlineUsers = _props.onlineUsers;
      var _state = this.state,
          progressValue = _state.progressValue,
          isVisibleProgressBar = _state.isVisibleProgressBar;


      return _react2.default.createElement(
        'div',
        { styleName: 'title' },
        _react2.default.createElement(
          'span',
          { styleName: isOnline ? 'connect' : 'disconnect' },
          isOnline ? 'Connected ' : 'Loading or not available '
        ),
        'to IPFS signal ',
        serverAddress,
        ' / peers online: ',
        onlineUsers,
        isVisibleProgressBar && _react2.default.createElement(_rcProgress.Line, { strokeColor: '#2181F7', percent: progressValue, strokeWidth: '1' })
      );
    }
  }]);
  return Info;
}(_react2.default.Component);

exports.default = (0, _reactCssModules2.default)(Info, _Info2.default, { allowMultiple: true });

/***/ }),
/* 1412 */,
/* 1413 */,
/* 1414 */,
/* 1415 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"title":"_1C587Y","connect":"_34nV3E","disconnect":"_2UdlK9"};

/***/ }),
/* 1416 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _SocialMenu = __webpack_require__(1417);

var _SocialMenu2 = _interopRequireDefault(_SocialMenu);

var _links = __webpack_require__(186);

var _links2 = _interopRequireDefault(_links);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SocialMenu = (_dec = (0, _reactCssModules2.default)(_SocialMenu2.default), _dec(_class = function (_React$Component) {
  (0, _inherits3.default)(SocialMenu, _React$Component);

  function SocialMenu() {
    (0, _classCallCheck3.default)(this, SocialMenu);
    return (0, _possibleConstructorReturn3.default)(this, (SocialMenu.__proto__ || (0, _getPrototypeOf2.default)(SocialMenu)).apply(this, arguments));
  }

  (0, _createClass3.default)(SocialMenu, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'ul',
        { styleName: 'social-menu' },
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: _links2.default.medium, target: '_blank', rel: 'noopener noreferrer' },
            _react2.default.createElement('i', { styleName: 'icon', className: 'fab fa-medium-m' })
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: _links2.default.twitter, target: '_blank', rel: 'noopener noreferrer' },
            _react2.default.createElement('i', { styleName: 'icon', className: 'fab fa-twitter' })
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: _links2.default.facebook, target: '_blank', rel: 'noopener noreferrer' },
            _react2.default.createElement('i', { styleName: 'icon', className: 'fab fa-facebook-f' })
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: _links2.default.telegram, target: '_blank', rel: 'noopener noreferrer' },
            _react2.default.createElement('i', { styleName: 'icon', className: 'fab fa-telegram-plane' })
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: _links2.default.bitcointalk, target: '_blank', rel: 'noopener noreferrer' },
            _react2.default.createElement('i', { styleName: 'icon', className: 'fab fa-btc' })
          )
        )
      );
    }
  }]);
  return SocialMenu;
}(_react2.default.Component)) || _class);
exports.default = SocialMenu;

/***/ }),
/* 1417 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"social-menu":"eSQrZX","icon":"_1aBVqk"};

/***/ }),
/* 1418 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Links = __webpack_require__(1419);

var _Links2 = _interopRequireDefault(_Links);

var _links = __webpack_require__(186);

var _links2 = _interopRequireDefault(_links);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Links = function Links() {
  return _react2.default.createElement(
    'div',
    { styleName: 'links' },
    _react2.default.createElement(
      'div',
      { styleName: 'column' },
      _react2.default.createElement(
        'h4',
        null,
        'Swap Online'
      ),
      _react2.default.createElement(
        'a',
        { href: _links2.default.etherdelta, target: '_blank', rel: 'noopener noreferrer' },
        'Buy/Sell token on etherdelta.com'
      ),
      _react2.default.createElement(
        'a',
        { href: _links2.default.test, target: '_blank', rel: 'noopener noreferrer' },
        'Swap.Online Testnet'
      ),
      _react2.default.createElement(
        'a',
        { href: _links2.default.button, target: '_blank', rel: 'noopener noreferrer' },
        'Swap.Button'
      ),
      _react2.default.createElement(
        'a',
        { href: _links2.default.about, target: '_blank', rel: 'noopener noreferrer' },
        'About company'
      ),
      _react2.default.createElement(
        'a',
        { href: _links2.default.career, target: '_blank', rel: 'noopener noreferrer' },
        'Career'
      ),
      _react2.default.createElement(
        'a',
        { href: _links2.default.contacts, target: '_blank', rel: 'noopener noreferrer' },
        'Contacts'
      )
    ),
    _react2.default.createElement(
      'div',
      { styleName: 'column' },
      _react2.default.createElement(
        'h4',
        null,
        'Documentation'
      ),
      _react2.default.createElement(
        'a',
        { href: _links2.default.concept, target: '_blank', rel: 'noopener noreferrer' },
        'Project and Token Concept Summary (PDF)'
      ),
      _react2.default.createElement(
        'a',
        { href: _links2.default.description, target: '_blank', rel: 'noopener noreferrer' },
        'Technical description of the protocol'
      ),
      _react2.default.createElement(
        'a',
        { href: _links2.default.research, target: '_blank', rel: 'noopener noreferrer' },
        'DEX Trend Research'
      )
    ),
    _react2.default.createElement(
      'div',
      { styleName: 'column' },
      _react2.default.createElement(
        'h4',
        null,
        'Resources'
      ),
      _react2.default.createElement(
        'a',
        { href: _links2.default.wiki, target: '_blank', rel: 'noopener noreferrer' },
        'Wiki'
      ),
      _react2.default.createElement(
        'a',
        { href: _links2.default.github, target: '_blank', rel: 'noopener noreferrer' },
        'GitHub Core'
      ),
      _react2.default.createElement(
        'a',
        { href: _links2.default.githubButton, target: '_blank', rel: 'noopener noreferrer' },
        'GitHub Button'
      ),
      _react2.default.createElement(
        'a',
        { href: _links2.default.bitcointalkSendTx, target: '_blank', rel: 'noopener noreferrer' },
        'Send bitcoin transacton'
      )
    ),
    _react2.default.createElement(
      'div',
      { styleName: 'column' },
      _react2.default.createElement(
        'h4',
        null,
        'Press'
      ),
      _react2.default.createElement(
        'span',
        null,
        'Reuters:',
        _react2.default.createElement(
          'a',
          { href: _links2.default.reuters, target: '_blank', rel: 'noopener noreferrer' },
          'Swap Online Release Details of their Decentralized Exchange of Bitcoin-to-Altcoins'
        )
      ),
      _react2.default.createElement(
        'a',
        { href: _links2.default.medium, target: '_blank', rel: 'noopener noreferrer' },
        'Medium'
      )
    ),
    _react2.default.createElement(
      'div',
      { styleName: 'column' },
      _react2.default.createElement(
        'h4',
        null,
        'Legal'
      ),
      _react2.default.createElement(
        'a',
        { href: _links2.default.privacyPolicy, target: '_blank', rel: 'noopener noreferrer' },
        'Privacy Policy'
      ),
      _react2.default.createElement(
        'a',
        { href: _links2.default.privacyPolicyDoc, target: '_blank', rel: 'noopener noreferrer' },
        'Privacy Policy Doc'
      ),
      _react2.default.createElement(
        'a',
        { href: _links2.default.terms, target: '_blank', rel: 'noopener noreferrer' },
        'Terms'
      ),
      _react2.default.createElement(
        'a',
        { href: _links2.default.legalOpinion, target: '_blank', rel: 'noopener noreferrer' },
        'Legal opinion'
      )
    )
  );
};

exports.default = (0, _reactCssModules2.default)(_Links2.default)(Links);

/***/ }),
/* 1419 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"links":"XBi5CM","column":"vRPQ8C"};

/***/ }),
/* 1420 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"overlay":"_3V4vPK","loader":"_37qfX_","small":"_1Cc0hi","center":"_3wUrWW","loader1":"B8rIc7","loader2":"_2dF68e","loader3":"_1fAQsv","text":"_2mdCx-","link":"_1pQH11","over":"_1YQJwX"};

/***/ }),
/* 1421 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _WidthContainer = __webpack_require__(133);

var _WidthContainer2 = _interopRequireDefault(_WidthContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PreventMultiTabs = function PreventMultiTabs() {
  return _react2.default.createElement(
    _WidthContainer2.default,
    null,
    _react2.default.createElement(
      'h1',
      null,
      'Such error, many tabs'
    ),
    'Swap.Online supports only one active tab. Please reload this page to continue using this tab or close it.'
  );
};

exports.default = PreventMultiTabs;

/***/ }),
/* 1422 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redaction = __webpack_require__(14);

var _Loader = __webpack_require__(312);

var _Loader2 = _interopRequireDefault(_Loader);

var _SwapProgress = __webpack_require__(1423);

var _SwapProgress2 = _interopRequireDefault(_SwapProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RequestLoader = function RequestLoader(_ref) {
  var isVisible = _ref.isVisible,
      text = _ref.text,
      txId = _ref.txId,
      swap = _ref.swap,
      data = _ref.data;

  if (!isVisible) {
    return null;
  }
  return swap ? _react2.default.createElement(_SwapProgress2.default, { data: data }) : _react2.default.createElement(_Loader2.default, { text: text, txId: txId });
};

exports.default = (0, _redaction.connect)({
  isVisible: 'loader.isVisible',
  text: 'loader.text',
  txId: 'loader.txId',
  swap: 'loader.swap',
  data: 'loader.data'
})(RequestLoader);

/***/ }),
/* 1423 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
		value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(13);

var _actions2 = _interopRequireDefault(_actions);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _SwapProgress = __webpack_require__(1424);

var _SwapProgress2 = _interopRequireDefault(_SwapProgress);

var _WidthContainer = __webpack_require__(133);

var _WidthContainer2 = _interopRequireDefault(_WidthContainer);

var _CloseIcon = __webpack_require__(530);

var _CloseIcon2 = _interopRequireDefault(_CloseIcon);

var _Title = __webpack_require__(214);

var _Title2 = _interopRequireDefault(_Title);

var _Logo = __webpack_require__(311);

var _Logo2 = _interopRequireDefault(_Logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwapProgress = (_dec = (0, _reactCssModules2.default)(_SwapProgress2.default, { allowMultiple: true }), _dec(_class = (_temp2 = _class2 = function (_Component) {
		(0, _inherits3.default)(SwapProgress, _Component);

		function SwapProgress() {
				var _ref;

				var _temp, _this, _ret;

				(0, _classCallCheck3.default)(this, SwapProgress);

				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
						args[_key] = arguments[_key];
				}

				return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SwapProgress.__proto__ || (0, _getPrototypeOf2.default)(SwapProgress)).call.apply(_ref, [this].concat(args))), _this), _this.handleStepEthToBtc = function (step) {
						switch (step) {
								case 1:
										return _react2.default.createElement(
												_Title2.default,
												null,
												'1. Please wait. Confirmation processing'
										);
								case 2:
										return _react2.default.createElement(
												_Title2.default,
												null,
												'2. Waiting BTC Owner creates Secret Key, creates BTC Script and charges it'
										);
								case 3:
										return _react2.default.createElement(
												_Title2.default,
												null,
												'3. Bitcoin Script created and charged. Please check the information below'
										);
								case 4:
										return _react2.default.createElement(
												_Title2.default,
												null,
												'4. Checking balance..'
										);
								case 5:
										return _react2.default.createElement(
												_Title2.default,
												null,
												'5. Creating Ethereum Contract. Please wait, it will take a while'
										);
								case 6:
										return _react2.default.createElement(
												_Title2.default,
												null,
												'6. Waiting BTC Owner adds Secret Key to ETH Contact'
										);
								case 7:
										return _react2.default.createElement(
												_Title2.default,
												null,
												'7. Money was transferred to your wallet. Check the balance.'
										);
								case 8:
										return _react2.default.createElement(
												_Title2.default,
												null,
												'Thank you for using Swap.Online!'
										);
								case 9:
										return _react2.default.createElement(
												_Title2.default,
												null,
												'Thank you for using Swap.Online!'
										);
								default:
										return null;
						}
				}, _this.handleStepBtcToEth = function (step) {
						switch (step) {
								case 1:
										return _react2.default.createElement(
												_Title2.default,
												null,
												'1. The order creator is offline. Waiting for him..'
										);
								case 2:
										return _react2.default.createElement(
												_Title2.default,
												null,
												'2. Create a secret key'
										);
								case 3:
										return _react2.default.createElement(
												_Title2.default,
												null,
												'3. Checking balance..'
										);
								case 4:
										return _react2.default.createElement(
												_Title2.default,
												null,
												'4. Creating Bitcoin Script. Please wait, it will take a while'
										);
								case 5:
										return _react2.default.createElement(
												_Title2.default,
												null,
												'5. ETH Owner received Bitcoin Script and Secret Hash. Waiting when he creates ETH Contract'
										);
								case 6:
										return _react2.default.createElement(
												_Title2.default,
												null,
												'6. ETH Contract created and charged. Requesting withdrawal from ETH Contract. Please wait'
										);
								case 7:
										return _react2.default.createElement(
												_Title2.default,
												null,
												'7. Money was transferred to your wallet. Check the balance.'
										);
								case 8:
										return _react2.default.createElement(
												_Title2.default,
												null,
												'Thank you for using Swap.Online!'
										);
								default:
										return null;
						}
				}, _this.close = function () {
						_actions2.default.loader.hide();
				}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
		}

		(0, _createClass3.default)(SwapProgress, [{
				key: 'render',
				value: function render() {
						var _props = this.props,
						    data = _props.data,
						    whiteLogo = _props.whiteLogo;

						var flowName = data.swap.flow._flowName;
						var progress = Math.floor(100 / data.swap.flow.stepNumbers.finish * data.swap.flow.state.step);

						return _react2.default.createElement(
								'div',
								{ styleName: 'overlay' },
								_react2.default.createElement(
										'div',
										{ styleName: 'header' },
										_react2.default.createElement(
												_WidthContainer2.default,
												{ styleName: 'headerContent' },
												_react2.default.createElement(_Logo2.default, { colored: !whiteLogo }),
												_react2.default.createElement(
														'div',
														{ role: 'title', styleName: 'title' },
														'SwapProgress'
												),
												_react2.default.createElement(_CloseIcon2.default, { styleName: 'closeButton', onClick: this.close, 'data-testid': 'modalCloseIcon' })
										)
								),
								_react2.default.createElement(
										'div',
										{ styleName: 'container' },
										_react2.default.createElement(
												'div',
												{ styleName: 'progress' },
												_react2.default.createElement('div', { styleName: 'bar', style: { width: progress + '%' } })
										),
										_react2.default.createElement(
												'span',
												{ styleName: 'steps' },
												data.swap.flow.state.step,
												' / ',
												data.swap.flow.stepNumbers.end,
												' steps'
										),
										_react2.default.createElement(
												'span',
												{ styleName: 'info' },
												flowName === 'ETH2BTC' ? this.handleStepEthToBtc(data.swap.flow.state.step) : this.handleStepBtcToEth(data.swap.flow.state.step)
										)
								)
						);
				}
		}]);
		return SwapProgress;
}(_react.Component), _class2.propTypes = {
		data: _propTypes2.default.object
}, _class2.defaultProps = {
		data: {},
		whiteLogo: false
}, _temp2)) || _class);
exports.default = SwapProgress;

/***/ }),
/* 1424 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"overlay":"_2JsrcT","container":"_3AWbqv","progress":"_1nD7c3","bar":"isJ-dc","steps":"_23RonK","info":"kocebT","headerContent":"_3ssOIa","title":"_2QmNjc","uppercase":"_1DGOAZ","closeButton":"_3gqrJP","header":"_3ZAeNS"};

/***/ }),
/* 1425 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"button":"_3KAFwf","whiteColor":"_1qVzDl","icon":"_2g6BBl","brandColor":"_1ZJhlM"};

/***/ }),
/* 1426 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _OfferModal = __webpack_require__(1427);

var _OfferModal2 = _interopRequireDefault(_OfferModal);

var _WithdrawModal = __webpack_require__(1450);

var _WithdrawModal2 = _interopRequireDefault(_WithdrawModal);

var _PrivateKeysModal = __webpack_require__(1452);

var _PrivateKeysModal2 = _interopRequireDefault(_PrivateKeysModal);

var _EosModal = __webpack_require__(1456);

var _EosModal2 = _interopRequireDefault(_EosModal);

var _Approve = __webpack_require__(1460);

var _Approve2 = _interopRequireDefault(_Approve);

var _ImportKeys = __webpack_require__(1462);

var _ImportKeys2 = _interopRequireDefault(_ImportKeys);

var _EthChecker = __webpack_require__(1466);

var _EthChecker2 = _interopRequireDefault(_EthChecker);

var _ReceiveModal = __webpack_require__(1468);

var _ReceiveModal2 = _interopRequireDefault(_ReceiveModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  OfferModal: _OfferModal2.default,
  WithdrawModal: _WithdrawModal2.default,
  PrivateKeysModal: _PrivateKeysModal2.default,
  ImportKeys: _ImportKeys2.default,
  EosModal: _EosModal2.default,
  Approve: _Approve2.default,
  EthChecker: _EthChecker2.default,
  ReceiveModal: _ReceiveModal2.default
};

/***/ }),
/* 1427 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__(13);

var _actions2 = _interopRequireDefault(_actions);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _OfferModal = __webpack_require__(1428);

var _OfferModal2 = _interopRequireDefault(_OfferModal);

var _Modal = __webpack_require__(224);

var _Modal2 = _interopRequireDefault(_Modal);

var _ConfirmOffer = __webpack_require__(1432);

var _ConfirmOffer2 = _interopRequireDefault(_ConfirmOffer);

var _AddOffer = __webpack_require__(1441);

var _AddOffer2 = _interopRequireDefault(_AddOffer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Offer = (_dec = (0, _reactCssModules2.default)(_OfferModal2.default), _dec(_class = (_temp2 = _class2 = function (_React$Component) {
  (0, _inherits3.default)(Offer, _React$Component);

  function Offer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Offer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Offer.__proto__ || (0, _getPrototypeOf2.default)(Offer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      view: 'editOffer', // editOffer / confirmOffer
      offer: {
        buyCurrency: _this.props.data.buyCurrency,
        sellCurrency: _this.props.data.sellCurrency
      }
    }, _this.handleMoveToConfirmation = function (offer) {
      _this.setState({
        view: 'confirmOffer',
        offer: offer
      });
    }, _this.handleMoveToOfferEditing = function () {
      _actions2.default.analytics.dataEvent('orderbook-addoffer-click-confirm-button');
      _this.setState({
        view: 'editOffer'
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Offer, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.scrollTo({ top: 0 });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          view = _state.view,
          offer = _state.offer;
      var name = this.props.name;


      var title = view === 'editOffer' ? 'Add offer' : 'Confirm offer';

      return _react2.default.createElement(
        _Modal2.default,
        { name: name, title: title },
        _react2.default.createElement(
          'div',
          { styleName: 'content' },
          view === 'editOffer' ? _react2.default.createElement(_AddOffer2.default, { initialData: offer, onNext: this.handleMoveToConfirmation }) : _react2.default.createElement(_ConfirmOffer2.default, { offer: offer, onBack: this.handleMoveToOfferEditing })
        )
      );
    }
  }]);
  return Offer;
}(_react2.default.Component), _class2.propTypes = {
  name: _propTypes2.default.string
}, _temp2)) || _class);
exports.default = Offer;

/***/ }),
/* 1428 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"content":"_2EHTMr"};

/***/ }),
/* 1429 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"modal":"_3d-lMl","header":"utYl-8","headerContent":"_2FzjWy","title":"_1H7w4U","uppercase":"_1XykmZ","closeButton":"_3UgYwG","contentContainer":"_2OSr4P","content":"_2SEeRQ"};

/***/ }),
/* 1430 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"overlay":"a_1CO5"};

/***/ }),
/* 1431 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"centringContainer":"_1uK09U","scrollable":"_1K6mUM","centringContent":"_1xMZgg"};

/***/ }),
/* 1432 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(13);

var _actions2 = _interopRequireDefault(_actions);

var _helpers = __webpack_require__(11);

var _reactRouterDom = __webpack_require__(32);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _ConfirmOffer = __webpack_require__(1433);

var _ConfirmOffer2 = _interopRequireDefault(_ConfirmOffer);

var _ButtonsInRow = __webpack_require__(483);

var _ButtonsInRow2 = _interopRequireDefault(_ButtonsInRow);

var _Button = __webpack_require__(43);

var _Button2 = _interopRequireDefault(_Button);

var _Coins = __webpack_require__(167);

var _Coins2 = _interopRequireDefault(_Coins);

var _Amounts = __webpack_require__(1434);

var _Amounts2 = _interopRequireDefault(_Amounts);

var _ExchangeRate = __webpack_require__(1438);

var _ExchangeRate2 = _interopRequireDefault(_ExchangeRate);

var _Fee = __webpack_require__(1440);

var _Fee2 = _interopRequireDefault(_Fee);

var _redaction = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConfirmOffer = (_dec = (0, _redaction.connect)(function (_ref) {
  var currencies = _ref.currencies.items;
  return {
    currencies: currencies
  };
}), _dec2 = (0, _reactCssModules2.default)(_ConfirmOffer2.default), _dec(_class = _dec2(_class = function (_Component) {
  (0, _inherits3.default)(ConfirmOffer, _Component);

  function ConfirmOffer() {
    var _ref2;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ConfirmOffer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = ConfirmOffer.__proto__ || (0, _getPrototypeOf2.default)(ConfirmOffer)).call.apply(_ref2, [this].concat(args))), _this), _this.handleConfirm = function () {
      _this.createOrder();
      _actions2.default.modals.close('OfferModal');
    }, _this.createOrder = function () {
      var _this$props$offer = _this.props.offer,
          buyAmount = _this$props$offer.buyAmount,
          sellAmount = _this$props$offer.sellAmount,
          buyCurrency = _this$props$offer.buyCurrency,
          sellCurrency = _this$props$offer.sellCurrency,
          exchangeRate = _this$props$offer.exchangeRate;


      var data = {
        buyCurrency: '' + buyCurrency,
        sellCurrency: '' + sellCurrency,
        buyAmount: Number(buyAmount),
        sellAmount: Number(sellAmount),
        exchangeRate: Number(exchangeRate)
      };
      _actions2.default.analytics.dataEvent('orderbook-addoffer-click-confirm-button');
      _actions2.default.core.createOrder(data);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ConfirmOffer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$offer = _props.offer,
          buyAmount = _props$offer.buyAmount,
          sellAmount = _props$offer.sellAmount,
          buyCurrency = _props$offer.buyCurrency,
          sellCurrency = _props$offer.sellCurrency,
          exchangeRate = _props$offer.exchangeRate,
          onBack = _props.onBack,
          currencies = _props.currencies;


      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_Coins2.default, { styleName: 'coins', names: [buyCurrency, sellCurrency], size: 100 }),
        _react2.default.createElement(_Amounts2.default, { buyAmount: buyAmount, sellAmount: sellAmount, buyCurrency: buyCurrency, sellCurrency: sellCurrency }),
        _react2.default.createElement(_ExchangeRate2.default, { value: exchangeRate, buyCurrency: buyCurrency, sellCurrency: sellCurrency }),
        _react2.default.createElement(_Fee2.default, { amount: 0.0001, currency: sellCurrency }),
        _react2.default.createElement(
          _ButtonsInRow2.default,
          { styleName: 'buttonsInRow' },
          _react2.default.createElement(
            _Button2.default,
            { styleName: 'button', gray: true, onClick: onBack },
            'Back'
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { styleName: 'link', to: '' + _helpers.links.home + buyCurrency + '-' + sellCurrency },
            _react2.default.createElement(
              _Button2.default,
              { styleName: 'button', id: 'confirm', brand: true, onClick: this.handleConfirm },
              'Add'
            )
          )
        )
      );
    }
  }]);
  return ConfirmOffer;
}(_react.Component)) || _class) || _class);
exports.default = ConfirmOffer;

/***/ }),
/* 1433 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"coins":"_2SFTdv","buttonsInRow":"_3Z13ki","button":"_1IOrqN","link":"ilIyX_"};

/***/ }),
/* 1434 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Amounts = __webpack_require__(1435);

var _Amounts2 = _interopRequireDefault(_Amounts);

var _Row = __webpack_require__(313);

var _Row2 = _interopRequireDefault(_Row);

var _Value = __webpack_require__(314);

var _Value2 = _interopRequireDefault(_Value);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Amounts = function Amounts(_ref) {
  var buyAmount = _ref.buyAmount,
      sellAmount = _ref.sellAmount,
      buyCurrency = _ref.buyCurrency,
      sellCurrency = _ref.sellCurrency;
  return _react2.default.createElement(
    _Row2.default,
    { title: 'Exchange' },
    _react2.default.createElement(_Value2.default, { value: Number(sellAmount), currency: sellCurrency }),
    _react2.default.createElement('div', { styleName: 'arrow' }),
    _react2.default.createElement(_Value2.default, { value: Number(buyAmount), currency: buyCurrency })
  );
};

exports.default = (0, _reactCssModules2.default)(Amounts, _Amounts2.default);

/***/ }),
/* 1435 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"arrow":"_1JeVyh"};

/***/ }),
/* 1436 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"row":"_3kZbpm","title":"_2-aWLd","content":"_2ALy7S"};

/***/ }),
/* 1437 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"value":"_1MvMZq","currency":"ka6sxH"};

/***/ }),
/* 1438 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _ExchangeRate = __webpack_require__(1439);

var _ExchangeRate2 = _interopRequireDefault(_ExchangeRate);

var _Row = __webpack_require__(313);

var _Row2 = _interopRequireDefault(_Row);

var _Value = __webpack_require__(314);

var _Value2 = _interopRequireDefault(_Value);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExchangeRate = function ExchangeRate(_ref) {
  var value = _ref.value,
      buyCurrency = _ref.buyCurrency,
      sellCurrency = _ref.sellCurrency;
  return _react2.default.createElement(
    _Row2.default,
    { title: 'Exchange rate' },
    _react2.default.createElement(_Value2.default, { value: 1, currency: buyCurrency }),
    _react2.default.createElement(
      'div',
      { styleName: 'equal' },
      '='
    ),
    _react2.default.createElement(_Value2.default, { value: Number(value), currency: sellCurrency })
  );
};

exports.default = (0, _reactCssModules2.default)(ExchangeRate, _ExchangeRate2.default);

/***/ }),
/* 1439 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"equal":"_62CYy3"};

/***/ }),
/* 1440 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Row = __webpack_require__(313);

var _Row2 = _interopRequireDefault(_Row);

var _Value = __webpack_require__(314);

var _Value2 = _interopRequireDefault(_Value);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Fee = function Fee(_ref) {
  var amount = _ref.amount,
      currency = _ref.currency;
  return _react2.default.createElement(
    _Row2.default,
    { title: 'Miner fee' },
    _react2.default.createElement(_Value2.default, { value: amount, currency: currency })
  );
};

exports.default = Fee;

/***/ }),
/* 1441 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _regenerator = __webpack_require__(54);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(61);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(55);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class, _class2, _temp, _initialiseProps;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redaction = __webpack_require__(14);

var _actions = __webpack_require__(13);

var _actions2 = _interopRequireDefault(_actions);

var _swValuelink = __webpack_require__(93);

var _swValuelink2 = _interopRequireDefault(_swValuelink);

var _appConfig = __webpack_require__(21);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _bignumber = __webpack_require__(91);

var _AddOffer = __webpack_require__(1442);

var _AddOffer2 = _interopRequireDefault(_AddOffer);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Select = __webpack_require__(1443);

var _Select2 = _interopRequireDefault(_Select);

var _ExchangeRateGroup = __webpack_require__(1445);

var _ExchangeRateGroup2 = _interopRequireDefault(_ExchangeRateGroup);

var _SelectGroup = __webpack_require__(1448);

var _SelectGroup2 = _interopRequireDefault(_SelectGroup);

var _Button = __webpack_require__(43);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var minAmount = {
  eth: 0.05,
  btc: 0.004,
  noxon: 1,
  swap: 1,
  jot: 1
};

var AddOffer = (_dec = (0, _redaction.connect)(function (_ref) {
  var currencies = _ref.currencies;
  return {
    currencies: currencies.items
  };
}), _dec2 = (0, _reactCssModules2.default)(_AddOffer2.default, { allowMultiple: true }), _dec(_class = _dec2(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(AddOffer, _Component);

  function AddOffer(_ref2) {
    var initialData = _ref2.initialData;
    (0, _classCallCheck3.default)(this, AddOffer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AddOffer.__proto__ || (0, _getPrototypeOf2.default)(AddOffer)).call(this));

    _initialiseProps.call(_this);

    var _ref3 = initialData || {},
        exchangeRate = _ref3.exchangeRate,
        buyAmount = _ref3.buyAmount,
        sellAmount = _ref3.sellAmount,
        buyCurrency = _ref3.buyCurrency,
        sellCurrency = _ref3.sellCurrency;

    _this.state = {
      exchangeRate: exchangeRate || _appConfig2.default.exchangeRates.ethbtc,
      buyAmount: buyAmount || '',
      sellAmount: sellAmount || '',
      buyCurrency: buyCurrency || 'btc',
      sellCurrency: sellCurrency || 'eth',
      ethBalance: null,
      isSending: false,
      balance: null,
      isSellFieldInteger: false,
      isBuyFieldInteger: false
    };
    return _this;
  }

  (0, _createClass3.default)(AddOffer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _state = this.state,
          sellCurrency = _state.sellCurrency,
          buyCurrency = _state.buyCurrency;

      this.checkBalance(sellCurrency);
      this.updateExchangeRate(sellCurrency, buyCurrency);
    }
  }, {
    key: 'updateExchangeRate',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(sellCurrency, buyCurrency) {
        var _this2 = this;

        var exchangeRate;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _actions2.default.user.getExchangeRate(sellCurrency, buyCurrency);

              case 2:
                exchangeRate = _context.sent;
                return _context.abrupt('return', new _promise2.default(function (resolve, reject) {
                  _this2.setState({ exchangeRate: exchangeRate }, function () {
                    return resolve();
                  });
                }));

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function updateExchangeRate(_x, _x2) {
        return _ref4.apply(this, arguments);
      }

      return updateExchangeRate;
    }()
  }, {
    key: 'render',
    value: function render() {
      var currencies = this.props.currencies;
      var _state2 = this.state,
          exchangeRate = _state2.exchangeRate,
          buyAmount = _state2.buyAmount,
          sellAmount = _state2.sellAmount,
          buyCurrency = _state2.buyCurrency,
          sellCurrency = _state2.sellCurrency,
          balance = _state2.balance,
          isBuyFieldInteger = _state2.isBuyFieldInteger,
          isSellFieldInteger = _state2.isSellFieldInteger,
          ethBalance = _state2.ethBalance;

      var linked = _swValuelink2.default.all(this, 'exchangeRate', 'buyAmount', 'sellAmount');
      var isDisabled = !exchangeRate || !buyAmount && !sellAmount || sellAmount > balance || sellAmount < minAmount[sellCurrency] || ethBalance < 0.02;

      linked.sellAmount.check(function (value) {
        return value > minAmount[sellCurrency];
      }, 'Amount must be greater than ' + minAmount[sellCurrency] + ' ');
      linked.sellAmount.check(function (value) {
        return value <= balance;
      }, 'Amount must be bigger your balance');

      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_ExchangeRateGroup2.default, {
          label: 'Exchange rate',
          inputValueLink: linked.exchangeRate.onChange(this.handleExchangeRateChange),
          currency: false,
          id: 'exchangeRate',
          placeholder: 'Enter exchange rate amount',
          buyCurrency: buyCurrency,
          sellCurrency: sellCurrency
        }),
        _react2.default.createElement(_Select2.default, {
          changeBalance: this.changeBalance,
          balance: balance,
          currency: sellCurrency
        }),
        ethBalance < 0.02 && _react2.default.createElement(
          'span',
          { styleName: 'error' },
          'For a swap, you need 0.02 ETH on your balance'
        ),
        _react2.default.createElement(_SelectGroup2.default, {
          styleName: 'sellGroup',
          label: 'Sell',
          inputValueLink: linked.sellAmount.pipe(this.handleSellAmountChange),
          selectedCurrencyValue: sellCurrency,
          onCurrencySelect: this.handleSellCurrencySelect,
          id: 'sellAmount',
          currencies: currencies,
          isInteger: isSellFieldInteger,
          placeholder: 'Enter sell amount'
        }),
        _react2.default.createElement(_SelectGroup2.default, {
          label: 'Buy',
          inputValueLink: linked.buyAmount.pipe(this.handleBuyAmountChange),
          selectedCurrencyValue: buyCurrency,
          onCurrencySelect: this.handleBuyCurrencySelect,
          id: 'buyAmount',
          currencies: currencies,
          isInteger: isBuyFieldInteger,
          placeholder: 'Enter buy amount'
        }),
        _react2.default.createElement(
          _Button2.default,
          {
            styleName: 'button',
            fullWidth: true,
            brand: true,
            disabled: isDisabled,
            onClick: this.handleNext
          },
          'Next'
        )
      );
    }
  }]);
  return AddOffer;
}(_react.Component), _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.checkBalance = function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(sellCurrency) {
      var balance, ethBalance;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _actions2.default[sellCurrency].getBalance(sellCurrency);

            case 2:
              balance = _context2.sent;
              _context2.next = 5;
              return _actions2.default.eth.getBalance();

            case 5:
              ethBalance = _context2.sent;


              _this3.setState({
                balance: balance,
                ethBalance: ethBalance
              });

            case 7:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this3);
    }));

    return function (_x3) {
      return _ref5.apply(this, arguments);
    };
  }();

  this.handleExchangeRateChange = function (value) {
    var _state3 = _this3.state,
        buyAmount = _state3.buyAmount,
        sellAmount = _state3.sellAmount;


    if (value === 0 || !value) {
      // eslint-disable-line
      buyAmount = new _bignumber.BigNumber(0);
      sellAmount = new _bignumber.BigNumber(0);
    } else {
      buyAmount = new _bignumber.BigNumber(String(sellAmount) || 0).multipliedBy(value);
      sellAmount = new _bignumber.BigNumber(String(buyAmount) || 0).dividedBy(value);
    }

    _this3.setState({
      buyAmount: buyAmount,
      sellAmount: sellAmount
    });
  };

  this.handleBuyCurrencySelect = function () {
    var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(_ref7) {
      var value = _ref7.value;

      var _state4, buyCurrency, sellCurrency, buyAmount, sellAmount, exchangeRate, isBuyFieldInteger;

      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _state4 = _this3.state, buyCurrency = _state4.buyCurrency, sellCurrency = _state4.sellCurrency, buyAmount = _state4.buyAmount, sellAmount = _state4.sellAmount;


              if (value === sellCurrency) {
                sellCurrency = buyCurrency;
              }

              buyCurrency = value;

              _this3.checkBalance(sellCurrency);

              _context3.next = 6;
              return _this3.updateExchangeRate(sellCurrency, buyCurrency);

            case 6:
              exchangeRate = _this3.state.exchangeRate;

              sellAmount = new _bignumber.BigNumber(String(buyAmount) || 0).multipliedBy(exchangeRate);

              isBuyFieldInteger = _appConfig2.default.tokens[buyCurrency] && _appConfig2.default.tokens[buyCurrency].decimals === 0;


              if (isBuyFieldInteger) {
                buyAmount = new _bignumber.BigNumber(String(buyAmount) || 0).dp(0, _bignumber.BigNumber.ROUND_HALF_EVEN);
              }
              _this3.setState({
                buyCurrency: buyCurrency,
                sellCurrency: sellCurrency,
                sellAmount: sellAmount,
                buyAmount: buyAmount,
                isSellFieldInteger: _appConfig2.default.tokens[sellCurrency] && _appConfig2.default.tokens[sellCurrency].decimals === 0,
                isBuyFieldInteger: isBuyFieldInteger
              });

            case 11:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this3);
    }));

    return function (_x4) {
      return _ref6.apply(this, arguments);
    };
  }();

  this.handleSellCurrencySelect = function () {
    var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(_ref9) {
      var value = _ref9.value;

      var _state5, buyCurrency, sellCurrency, sellAmount, buyAmount, exchangeRate, isSellFieldInteger;

      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _state5 = _this3.state, buyCurrency = _state5.buyCurrency, sellCurrency = _state5.sellCurrency, sellAmount = _state5.sellAmount, buyAmount = _state5.buyAmount;


              if (value === buyCurrency) {
                buyCurrency = sellCurrency;
              }

              sellCurrency = value;

              _this3.checkBalance(sellCurrency);
              _context4.next = 6;
              return _this3.updateExchangeRate(sellCurrency, buyCurrency);

            case 6:
              exchangeRate = _this3.state.exchangeRate;

              buyAmount = new _bignumber.BigNumber(String(sellAmount) || 0).dividedBy(exchangeRate);

              isSellFieldInteger = _appConfig2.default.tokens[sellCurrency] && _appConfig2.default.tokens[sellCurrency].decimals === 0;


              if (isSellFieldInteger) {
                sellAmount = new _bignumber.BigNumber(String(sellAmount) || 0).dp(0, _bignumber.BigNumber.ROUND_HALF_EVEN);
              }

              _this3.setState({
                buyCurrency: buyCurrency,
                sellCurrency: sellCurrency,
                buyAmount: buyAmount,
                sellAmount: sellAmount,
                isSellFieldInteger: isSellFieldInteger,
                isBuyFieldInteger: _appConfig2.default.tokens[buyCurrency] && _appConfig2.default.tokens[buyCurrency].decimals === 0
              });

            case 11:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this3);
    }));

    return function (_x5) {
      return _ref8.apply(this, arguments);
    };
  }();

  this.handleBuyAmountChange = function (value, prev) {
    var exchangeRate = _this3.state.exchangeRate;


    var firstDot = value.indexOf('.');
    var secondDot = value.lastIndexOf('.');

    if (firstDot !== secondDot) {
      return undefined;
    }

    if (!_this3.isSending) {
      _actions2.default.analytics.dataEvent('orderbook-addoffer-enter-ordervalue');
      _this3.setState({ isSending: true });
    }

    _this3.setState({
      sellAmount: new _bignumber.BigNumber(String(value) || 0).dividedBy(exchangeRate || 0),
      buyAmount: new _bignumber.BigNumber(String(value))
    });

    return value;
  };

  this.handleSellAmountChange = function (value) {
    var exchangeRate = _this3.state.exchangeRate;


    var firstDot = value.indexOf('.');
    var secondDot = value.lastIndexOf('.');

    if (firstDot !== secondDot) {
      return undefined;
    }

    if (!_this3.isSending) {
      _actions2.default.analytics.dataEvent('orderbook-addoffer-enter-ordervalue');
      _this3.setState({ isSending: true });
    }

    _this3.setState({
      sellAmount: new _bignumber.BigNumber(String(value)),
      buyAmount: new _bignumber.BigNumber(String(value) || 0).multipliedBy(exchangeRate || 0)
    });

    return value;
  };

  this.handleNext = function () {
    var _state6 = _this3.state,
        exchangeRate = _state6.exchangeRate,
        buyAmount = _state6.buyAmount,
        sellAmount = _state6.sellAmount,
        balance = _state6.balance,
        sellCurrency = _state6.sellCurrency,
        ethBalance = _state6.ethBalance;
    var onNext = _this3.props.onNext;


    var isDisabled = !exchangeRate || !buyAmount || !sellAmount || sellAmount > balance || sellAmount < minAmount[sellCurrency] || ethBalance < 0.02;

    if (!isDisabled) {
      _actions2.default.analytics.dataEvent('orderbook-addoffer-click-next-button');
      onNext(_this3.state);
    }
  };

  this.changeBalance = function (value) {
    _this3.setState({
      sellAmount: value
    });
    _this3.handleSellAmountChange(value);
  };
}, _temp)) || _class) || _class);
exports.default = AddOffer;

/***/ }),
/* 1442 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"sellGroup":"EElyaT","button":"_3riRsA","error":"oiWUOF"};

/***/ }),
/* 1443 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Select = __webpack_require__(1444);

var _Select2 = _interopRequireDefault(_Select);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _FieldLabel = __webpack_require__(217);

var _FieldLabel2 = _interopRequireDefault(_FieldLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Select = function Select(_ref) {
  var balance = _ref.balance,
      currency = _ref.currency,
      changeBalance = _ref.changeBalance;
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      _FieldLabel2.default,
      { inRow: true },
      'Available amount'
    ),
    _react2.default.createElement(
      'div',
      { styleName: 'groupField' },
      _react2.default.createElement(
        'p',
        null,
        currency.toUpperCase(),
        ' ',
        balance ? balance.toFixed(3) : 0.00
      ),
      _react2.default.createElement(
        'div',
        { styleName: 'cell', onClick: function onClick() {
            return changeBalance(balance / 10);
          } },
        '1/10'
      ),
      _react2.default.createElement(
        'div',
        { styleName: 'cell', onClick: function onClick() {
            return changeBalance(balance / 4);
          } },
        '1/4'
      ),
      _react2.default.createElement(
        'div',
        { styleName: 'cell', onClick: function onClick() {
            return changeBalance(balance / 2);
          } },
        '1/2'
      ),
      _react2.default.createElement(
        'div',
        { styleName: 'cell', onClick: function onClick() {
            return changeBalance(balance);
          } },
        'ALL'
      )
    )
  );
};

exports.default = (0, _reactCssModules2.default)(Select, _Select2.default);

/***/ }),
/* 1444 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"groupField":"_1TBx4e","cell":"_1fGtMw"};

/***/ }),
/* 1445 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ExchangeRateGroup = __webpack_require__(1446);

var _ExchangeRateGroup2 = _interopRequireDefault(_ExchangeRateGroup);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Group = __webpack_require__(534);

var _Group2 = _interopRequireDefault(_Group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExchangeRateGroup = function ExchangeRateGroup(_ref) {
  var className = _ref.className,
      label = _ref.label,
      id = _ref.id,
      inputValueLink = _ref.inputValueLink,
      placeholder = _ref.placeholder,
      buyCurrency = _ref.buyCurrency,
      sellCurrency = _ref.sellCurrency;
  return _react2.default.createElement(
    _Group2.default,
    {
      className: className,
      label: label,
      id: id,
      inputValueLink: inputValueLink,
      placeholder: placeholder },
    _react2.default.createElement(
      'span',
      { styleName: 'currencyRatio' },
      sellCurrency,
      ' / ',
      buyCurrency
    )
  );
};

exports.default = (0, _reactCssModules2.default)(ExchangeRateGroup, _ExchangeRateGroup2.default);

/***/ }),
/* 1446 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"currencyRatio":"_3uQetM"};

/***/ }),
/* 1447 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"groupField":"_2QVvGM","inputRoot":"_2gYR9R","inputContainer":"zgZs0H"};

/***/ }),
/* 1448 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SelectGroup = __webpack_require__(1449);

var _SelectGroup2 = _interopRequireDefault(_SelectGroup);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Group = __webpack_require__(534);

var _Group2 = _interopRequireDefault(_Group);

var _CurrencySelect = __webpack_require__(488);

var _CurrencySelect2 = _interopRequireDefault(_CurrencySelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectGroup = function SelectGroup(_ref) {
  var className = _ref.className,
      label = _ref.label,
      id = _ref.id,
      inputValueLink = _ref.inputValueLink,
      placeholder = _ref.placeholder,
      isInteger = _ref.isInteger,
      selectedCurrencyValue = _ref.selectedCurrencyValue,
      onCurrencySelect = _ref.onCurrencySelect,
      currencies = _ref.currencies;
  return _react2.default.createElement(
    _Group2.default,
    {
      className: className,
      label: label,
      id: id,
      isInteger: isInteger,
      inputValueLink: inputValueLink,
      placeholder: placeholder },
    _react2.default.createElement(_CurrencySelect2.default, {
      styleName: 'currencySelect',
      selectedValue: selectedCurrencyValue,
      onSelect: onCurrencySelect,
      currencies: currencies
    })
  );
};

exports.default = (0, _reactCssModules2.default)(SelectGroup, _SelectGroup2.default);

/***/ }),
/* 1449 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"currencySelect":"gFvyga"};

/***/ }),
/* 1450 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = __webpack_require__(11);

var _actions = __webpack_require__(13);

var _actions2 = _interopRequireDefault(_actions);

var _swValuelink = __webpack_require__(93);

var _swValuelink2 = _interopRequireDefault(_swValuelink);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _WithdrawModal = __webpack_require__(1451);

var _WithdrawModal2 = _interopRequireDefault(_WithdrawModal);

var _Modal = __webpack_require__(224);

var _Modal2 = _interopRequireDefault(_Modal);

var _FieldLabel = __webpack_require__(217);

var _FieldLabel2 = _interopRequireDefault(_FieldLabel);

var _Input = __webpack_require__(218);

var _Input2 = _interopRequireDefault(_Input);

var _Button = __webpack_require__(43);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WithdrawModal = (_dec = (0, _reactCssModules2.default)(_WithdrawModal2.default), _dec(_class = (_temp2 = _class2 = function (_React$Component) {
  (0, _inherits3.default)(WithdrawModal, _React$Component);

  function WithdrawModal() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, WithdrawModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = WithdrawModal.__proto__ || (0, _getPrototypeOf2.default)(WithdrawModal)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isSubmitted: false,
      address: '',
      amount: ''
    }, _this.handleSubmit = function () {
      var _this$state = _this.state,
          to = _this$state.address,
          amount = _this$state.amount;
      var _this$props$data = _this.props.data,
          currency = _this$props$data.currency,
          contractAddress = _this$props$data.contractAddress,
          address = _this$props$data.address,
          decimals = _this$props$data.decimals,
          balance = _this$props$data.balance,
          token = _this$props$data.token;


      if (!to || !amount || amount < 0.01 || amount > balance) {
        _this.setState({
          isSubmitted: true
        });
        return;
      }

      if (token) {
        _actions2.default.token.send(contractAddress || address, to, Number(amount), decimals).then(function () {
          _actions2.default.loader.hide();
          _actions2.default.token.getBalance(currency);

          _actions2.default.notifications.show(_helpers.constants.notifications.SuccessWithdraw, {
            amount: amount,
            currency: currency,
            address: to
          });
        });
      } else {
        _actions2.default[currency.toLowerCase()].send(address, to, Number(amount)).then(function () {
          _actions2.default.loader.hide();
          _actions2.default[currency.toLowerCase()].getBalance(currency);

          _actions2.default.notifications.show(_helpers.constants.notifications.SuccessWithdraw, {
            amount: amount,
            currency: currency,
            address: to
          });
        });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(WithdrawModal, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          isSubmitted = _state.isSubmitted,
          address = _state.address,
          amount = _state.amount;
      var _props = this.props,
          name = _props.name,
          data = _props.data;
      var balance = data.balance;


      var linked = _swValuelink2.default.all(this, 'address', 'amount');
      var isDisabled = !address || !amount;

      if (isSubmitted) {
        linked.amount.check(function (value) {
          return value > 0.01;
        }, 'Amount must be greater than 0.05 ');
        linked.amount.check(function (value) {
          return value < balance;
        }, 'Amount must be bigger your balance');
      }

      return _react2.default.createElement(
        _Modal2.default,
        { name: name, title: 'Withdraw ' + data.currency.toUpperCase() },
        _react2.default.createElement(
          'p',
          { style: { fontSize: '16px' } },
          'Please notice, that you need to have minimum 0.01 amount ',
          _react2.default.createElement('br', null),
          ' of the ETH on your wallet, to use it for Ethereum miners fee'
        ),
        _react2.default.createElement(
          _FieldLabel2.default,
          { inRow: true },
          'Address'
        ),
        _react2.default.createElement(_Input2.default, { valueLink: linked.address, pattern: '0-9a-zA-Z' }),
        _react2.default.createElement(
          _FieldLabel2.default,
          { inRow: true },
          'Amount'
        ),
        _react2.default.createElement(_Input2.default, { valueLink: linked.amount, pattern: '0-9\\.' }),
        !linked.amount.error && _react2.default.createElement(
          'div',
          { styleName: 'note' },
          'No less than 0.01'
        ),
        _react2.default.createElement(
          _Button2.default,
          {
            styleName: 'button',
            brand: true,
            fullWidth: true,
            disabled: isDisabled,
            onClick: this.handleSubmit
          },
          'Transfer'
        )
      );
    }
  }]);
  return WithdrawModal;
}(_react2.default.Component), _class2.propTypes = {
  name: _propTypes2.default.string,
  data: _propTypes2.default.object
}, _temp2)) || _class);
exports.default = WithdrawModal;

/***/ }),
/* 1451 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"note":"_rh3p5","button":"_36O4pp"};

/***/ }),
/* 1452 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redaction = __webpack_require__(14);

var _momentWithLocalesEs = __webpack_require__(298);

var _momentWithLocalesEs2 = _interopRequireDefault(_momentWithLocalesEs);

var _actions = __webpack_require__(13);

var _actions2 = _interopRequireDefault(_actions);

var _swValuelink = __webpack_require__(93);

var _swValuelink2 = _interopRequireDefault(_swValuelink);

var _helpers = __webpack_require__(11);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _PrivateKeysModal = __webpack_require__(1453);

var _PrivateKeysModal2 = _interopRequireDefault(_PrivateKeysModal);

var _Field = __webpack_require__(1454);

var _Field2 = _interopRequireDefault(_Field);

var _Modal = __webpack_require__(224);

var _Modal2 = _interopRequireDefault(_Modal);

var _Button = __webpack_require__(43);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrivateKeysModal = (_dec = (0, _redaction.connect)({
  ethData: 'user.ethData',
  btcData: 'user.btcData'
}), _dec2 = (0, _reactCssModules2.default)(_PrivateKeysModal2.default, { allowMultiple: true }), _dec(_class = _dec2(_class = (_temp2 = _class2 = function (_React$PureComponent) {
  (0, _inherits3.default)(PrivateKeysModal, _React$PureComponent);

  function PrivateKeysModal() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PrivateKeysModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PrivateKeysModal.__proto__ || (0, _getPrototypeOf2.default)(PrivateKeysModal)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      view: 'saveKeys', // saveKeys, checkKeys
      ethValidated: false,
      btcValidated: false
    }, _this.changeView = function (view) {
      _this.setState({
        view: view
      });
    }, _this.close = function () {
      var name = _this.props.name;


      _helpers.localStorage.setItem(_helpers.constants.localStorage.privateKeysSaved, true);
      _actions2.default.modals.close(name);
    }, _this.getText = function () {
      var _this$props = _this.props,
          ethData = _this$props.ethData,
          btcData = _this$props.btcData;


      var text = '\n' + window.location.hostname + ' emergency instruction\n\r\n\n\r\n\n#ETHEREUM\n\r\n\n\r\n\nEthereum address: ' + ethData.address + '  \r\n\nPrivate key: ' + ethData.privateKey + '\r\n\n\r\n\n\r\n\nHow to access tokens and ethers: \r\n\n1. Go here https://www.myetherwallet.com/#send-transaction \r\n\n2. Select \'Private key\'\r\n\n3. paste private key to input and click "unlock"\r\n\n\r\n\n\r\n\n\r\n\n# BITCOIN\r\n\n\r\n\n\r\n\nBitcoin address: ' + btcData.address + '\r\n\nPrivate key: ' + btcData.privateKey + '\r\n\n\r\n\n\r\n\n1. Go to blockchain.info\r\n\n2. login\r\n\n3. Go to settings > addresses > import\r\n\n4. paste private key and click "Ok"\r\n\n\r\n\n\r\n\n* We don`t store your private keys and will not be able to restore them!\n    ';

      return text;
    }, _this.handleDownload = function () {
      var element = document.createElement('a');
      var text = _this.getText();
      var message = 'Check your browser downloads';

      element.setAttribute('href', 'data:text/plaincharset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', window.location.hostname + '_keys_' + (0, _momentWithLocalesEs2.default)().format('DD.MM.YYYY') + '.txt');

      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);

      _this.changeView('checkKeys');

      _actions2.default.notifications.show(_helpers.constants.notifications.Message, {
        message: message
      });
    }, _this.handleSendByEmail = function () {
      var text = _this.getText();

      window.open('mailto:?subject=Your_Subject&body=' + text);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(PrivateKeysModal, [{
    key: 'render',
    value: function render() {
      var view = this.state.view;
      var _props = this.props,
          name = _props.name,
          ethData = _props.ethData,
          btcData = _props.btcData;


      var ethValidated = _swValuelink2.default.state(this, 'ethValidated');
      var btcValidated = _swValuelink2.default.state(this, 'btcValidated');
      var isValidated = ethValidated.value && btcValidated.value;

      return _react2.default.createElement(
        _Modal2.default,
        {
          styleName: 'modal',
          name: name,
          showCloseButton: false,
          whiteLogo: true,
          title: 'CAUTION!'
        },
        _react2.default.createElement(
          'div',
          { styleName: 'content' },
          view === 'saveKeys' ? _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'div',
              { styleName: 'title' },
              'Before you continue be sure to save your private keys!',
              _react2.default.createElement('br', null),
              'It`s very important because If you don`t',
              _react2.default.createElement('br', null),
              'there is a big chance you`ll loose your money.'
            ),
            _react2.default.createElement(
              'div',
              { styleName: 'subTitle' },
              'We don`t store your private keys and will not be able to restore them!'
            ),
            _react2.default.createElement(
              _Button2.default,
              { brand: true, styleName: 'button', onClick: this.handleDownload },
              'Download instruction'
            )
          ) : _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'div',
              { styleName: 'title' },
              'Please fill information below from instruction.txt file. We`d like to be sure that you saved the private keys before you can continue to the site.'
            ),
            _react2.default.createElement(_Field2.default, {
              label: ethData.currency,
              privateKey: ethData.privateKey,
              valueLink: ethValidated
            }),
            _react2.default.createElement(_Field2.default, {
              label: btcData.currency,
              privateKey: btcData.privateKey,
              valueLink: btcValidated
            }),
            isValidated && _react2.default.createElement(
              _Button2.default,
              { white: true, styleName: 'button', onClick: this.close },
              'GO TO THE SITE!'
            )
          )
        )
      );
    }
  }]);
  return PrivateKeysModal;
}(_react2.default.PureComponent), _class2.propTypes = {
  name: _propTypes2.default.string,
  ethData: _propTypes2.default.object.isRequired,
  btcData: _propTypes2.default.object.isRequired
}, _temp2)) || _class) || _class);
exports.default = PrivateKeysModal;

/***/ }),
/* 1453 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"modal":"_3ixJuZ","content":"_3o3Tl_","title":"_1HvQwA","subTitle":"_2vKFTm","button":"_19cTFn"};

/***/ }),
/* 1454 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _swValuelink = __webpack_require__(93);

var _swValuelink2 = _interopRequireDefault(_swValuelink);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Field = __webpack_require__(1455);

var _Field2 = _interopRequireDefault(_Field);

var _Input = __webpack_require__(218);

var _Input2 = _interopRequireDefault(_Input);

var _Button = __webpack_require__(43);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Field2 = (_dec = (0, _reactCssModules2.default)(_Field2.default), _dec(_class = (_temp2 = _class2 = function (_React$Component) {
  (0, _inherits3.default)(Field2, _React$Component);

  function Field2() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Field2);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Field2.__proto__ || (0, _getPrototypeOf2.default)(Field2)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: '',
      error: false,
      success: false
    }, _this.handleCheck = function () {
      var _this$state = _this.state,
          value = _this$state.value,
          error = _this$state.error,
          success = _this$state.success;
      var _this$props = _this.props,
          valueLink = _this$props.valueLink,
          privateKey = _this$props.privateKey;


      if (error || success) {
        return;
      }

      if (value !== privateKey) {
        _this.setState({
          error: true
        });
      } else {
        valueLink.set(true);
        _this.setState({
          success: true
        });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Field2, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          error = _state.error,
          success = _state.success;
      var label = this.props.label;


      var linkedValue = _swValuelink2.default.state(this, 'value');

      return _react2.default.createElement(
        'div',
        { styleName: 'container' },
        _react2.default.createElement(
          'div',
          { styleName: 'section' },
          _react2.default.createElement(
            'div',
            { styleName: 'label' },
            label.toUpperCase()
          ),
          _react2.default.createElement(_Input2.default, {
            styleName: 'input',
            placeholder: 'Write private key here...',
            valueLink: linkedValue
          }),
          _react2.default.createElement(
            _Button2.default,
            {
              styleName: 'button',
              white: !success,
              green: success,
              onClick: this.handleCheck
            },
            success ? 'OK' : 'Check'
          )
        ),
        error && _react2.default.createElement(
          'div',
          { styleName: 'error' },
          'You should pass correct value! Reload page and enter key again'
        )
      );
    }
  }]);
  return Field2;
}(_react2.default.Component), _class2.propTypes = {
  label: _propTypes2.default.string.isRequired,
  privateKey: _propTypes2.default.string.isRequired,
  valueLink: _propTypes2.default.object.isRequired
}, _temp2)) || _class);
exports.default = Field2;

/***/ }),
/* 1455 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"_2VJQBX","section":"_3kogcs","label":"_2soNit","input":"BtOAgk","button":"guRICj","error":"vB1kUx"};

/***/ }),
/* 1456 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _regenerator = __webpack_require__(54);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(55);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _modal = __webpack_require__(176);

var _controls = __webpack_require__(67);

var _forms = __webpack_require__(168);

var _swValuelink = __webpack_require__(93);

var _swValuelink2 = _interopRequireDefault(_swValuelink);

var _actions = __webpack_require__(13);

var _actions2 = _interopRequireDefault(_actions);

var _helpers = __webpack_require__(11);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _EosModal = __webpack_require__(1459);

var _EosModal2 = _interopRequireDefault(_EosModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EosModal = (_dec = (0, _reactCssModules2.default)(_EosModal2.default), _dec(_class = function (_React$Component) {
  (0, _inherits3.default)(EosModal, _React$Component);

  function EosModal() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, EosModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EosModal.__proto__ || (0, _getPrototypeOf2.default)(EosModal)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      accountName: '',
      privateKey: '',
      error: ''
    }, _this.handleSubmit = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var _this$state, accountName, privateKey;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$state = _this.state, accountName = _this$state.accountName, privateKey = _this$state.privateKey;


              _actions2.default.loader.show(true);

              _context.prev = 2;
              _context.next = 5;
              return _actions2.default.eos.register(accountName, privateKey);

            case 5:
              _context.next = 7;
              return _actions2.default.eos.getBalance();

            case 7:

              _actions2.default.modals.close(_helpers.constants.modals.Eos);
              _context.next = 14;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context['catch'](2);

              console.error(_context.t0);
              _this.setState({ error: _context.t0.toString() });

            case 14:

              _actions2.default.loader.hide();

            case 15:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2, [[2, 10]]);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(EosModal, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          accountName = _state.accountName,
          privateKey = _state.privateKey,
          error = _state.error;
      var name = this.props.name;


      var linked = _swValuelink2.default.all(this, 'accountName', 'privateKey');
      var isDisabled = !accountName || !privateKey;

      return _react2.default.createElement(
        _modal.Modal,
        { name: name, title: 'EOS Login' },
        _react2.default.createElement(
          _forms.FieldLabel,
          { inRow: true },
          'Account name'
        ),
        _react2.default.createElement(_forms.Input, { valueLink: linked.accountName }),
        _react2.default.createElement(
          _forms.FieldLabel,
          { inRow: true },
          'Private key'
        ),
        _react2.default.createElement(_forms.Input, { valueLink: linked.privateKey }),
        error && _react2.default.createElement(
          'div',
          { styleName: 'error' },
          'Sorry, error occured during activation'
        ),
        _react2.default.createElement(
          _controls.Button,
          {
            styleName: 'button',
            brand: true,
            fullWidth: true,
            disabled: isDisabled,
            onClick: this.handleSubmit
          },
          'Login'
        )
      );
    }
  }]);
  return EosModal;
}(_react2.default.Component)) || _class);
exports.default = EosModal;

/***/ }),
/* 1457 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = __webpack_require__(11);

var _classnames = __webpack_require__(59);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _ModalContainer = __webpack_require__(1458);

var _ModalContainer2 = _interopRequireDefault(_ModalContainer);

var _Overlay = __webpack_require__(532);

var _Overlay2 = _interopRequireDefault(_Overlay);

var _Center = __webpack_require__(533);

var _Center2 = _interopRequireDefault(_Center);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalContainer = (_dec = (0, _reactCssModules2.default)(_ModalContainer2.default, { allowMultiple: true }), _dec(_class = (_temp2 = _class2 = function (_Component) {
  (0, _inherits3.default)(ModalContainer, _Component);

  function ModalContainer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ModalContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ModalContainer.__proto__ || (0, _getPrototypeOf2.default)(ModalContainer)).call.apply(_ref, [this].concat(args))), _this), _this.handleMount = function (el) {
      if (el) {
        setTimeout(function () {
          el.classList.add(_ModalContainer2.default.mounted);
        }, 0);
      }
    }, _this.close = function () {
      var _this$props = _this.props,
          disableClose = _this$props.disableClose,
          onClose = _this$props.onClose;


      if (!disableClose) {
        onClose();
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ModalContainer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          fullWidth = _props.fullWidth;

      // TODO move overflow to Modal from Center

      var modalContainerStyleName = (0, _classnames2.default)('modalContainer', {
        'fullWidth': fullWidth
      });

      return _react2.default.createElement(
        _Overlay2.default,
        { onClick: this.close },
        _react2.default.createElement(
          _Center2.default,
          { scrollable: true },
          _react2.default.createElement(
            'div',
            {
              styleName: modalContainerStyleName,
              ref: this.handleMount
            },
            children
          )
        )
      );
    }
  }]);
  return ModalContainer;
}(_react.Component), _class2.propTypes = {
  children: _propTypes2.default.any.isRequired,
  fullWidth: _propTypes2.default.bool,
  disableClose: _propTypes2.default.bool,
  onClose: _propTypes2.default.func.isRequired
}, _temp2)) || _class);
exports.default = ModalContainer;

/***/ }),
/* 1458 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"modalContainer":"_5wv85l","fullWidth":"_3v15t0","mounted":"_2elaml"};

/***/ }),
/* 1459 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"button":"_3EXSN4","error":"vZrYLm"};

/***/ }),
/* 1460 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__(13);

var _actions2 = _interopRequireDefault(_actions);

var _helpers = __webpack_require__(11);

var _swValuelink = __webpack_require__(93);

var _swValuelink2 = _interopRequireDefault(_swValuelink);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Approve = __webpack_require__(1461);

var _Approve2 = _interopRequireDefault(_Approve);

var _modal = __webpack_require__(176);

var _controls = __webpack_require__(67);

var _forms = __webpack_require__(168);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Offer = (_dec = (0, _reactCssModules2.default)(_Approve2.default), _dec(_class = (_temp2 = _class2 = function (_React$Component) {
  (0, _inherits3.default)(Offer, _React$Component);

  function Offer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Offer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Offer.__proto__ || (0, _getPrototypeOf2.default)(Offer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      amount: 999999,
      isSubmitted: false
    }, _this.handleApprove = function () {
      var amount = _this.state.amount;
      var _this$props$data = _this.props.data,
          contractAddress = _this$props$data.contractAddress,
          name = _this$props$data.name;

      var message = 'Your approve ' + amount + ' tokens on contract address ' + contractAddress;
      var error = 'Please again later';

      if (amount <= 0 || !amount) {
        _this.setState({
          isSubmitted: true
        });
        return;
      }

      _actions2.default.token.approve(name, amount).then(function () {
        _actions2.default.loader.hide();
        _actions2.default.notifications.show(_helpers.constants.notifications.Message, { message: message });
        _actions2.default.modals.close(_helpers.constants.modals.Approve);
      }).catch(function () {
        _actions2.default.loader.hide();
        _actions2.default.notifications.show(_helpers.constants.notifications.Message, { error: error });
        _actions2.default.modals.close(_helpers.constants.modals.Approve);
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Offer, [{
    key: 'render',
    value: function render() {
      var name = this.props.name;
      var _state = this.state,
          amount = _state.amount,
          isSubmitted = _state.isSubmitted;

      var linked = _swValuelink2.default.all(this, 'amount');
      var isDisabled = !amount;

      if (isSubmitted) {
        linked.amount.check(function (value) {
          return value <= 0;
        }, 'Amount must be greater than 1 ');
      }

      return _react2.default.createElement(
        _modal.Modal,
        { name: name, title: 'Approve token' },
        _react2.default.createElement(
          'div',
          { styleName: 'content' },
          _react2.default.createElement(
            'p',
            null,
            'Please set the amount limit that the swap smart contract can deduct from your account. We do not recommend setting any limits.'
          ),
          _react2.default.createElement(
            _forms.FieldLabel,
            { inRow: true },
            'Amount'
          ),
          _react2.default.createElement(_forms.Input, { valueLink: linked.amount, type: 'number' }),
          _react2.default.createElement(
            _controls.Button,
            {
              styleName: 'button',
              brand: true,
              fullWidth: true,
              disabled: isDisabled,
              onClick: this.handleApprove
            },
            'Approve'
          )
        )
      );
    }
  }]);
  return Offer;
}(_react2.default.Component), _class2.propTypes = {
  name: _propTypes2.default.string
}, _temp2)) || _class);
exports.default = Offer;

/***/ }),
/* 1461 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"button":"_2sLZn8","content":"_153K8d"};

/***/ }),
/* 1462 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(13);

var _actions2 = _interopRequireDefault(_actions);

var _swValuelink = __webpack_require__(93);

var _swValuelink2 = _interopRequireDefault(_swValuelink);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _ImportKeys = __webpack_require__(1463);

var _ImportKeys2 = _interopRequireDefault(_ImportKeys);

var _Group = __webpack_require__(1464);

var _Group2 = _interopRequireDefault(_Group);

var _modal = __webpack_require__(176);

var _forms = __webpack_require__(168);

var _controls = __webpack_require__(67);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImportKeys = (_dec = (0, _reactCssModules2.default)(_ImportKeys2.default), _dec(_class = function (_Component) {
  (0, _inherits3.default)(ImportKeys, _Component);

  function ImportKeys() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ImportKeys);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ImportKeys.__proto__ || (0, _getPrototypeOf2.default)(ImportKeys)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      ethKey: '',
      btcKey: '',

      isSubmittedEth: false,
      isSubmittedBtc: false,

      isImportedEth: false,
      isImportedBtc: false,

      isDisabled: true
    }, _this.handleEthImportKey = function () {
      var ethKey = _this.state.ethKey;


      if (!ethKey || ethKey.length < 40) {
        _this.setState({ isSubmittedEth: true });
        return;
      }
      _this.setState({ isDisabled: false });

      try {
        _actions2.default.eth.login(ethKey);
        _this.setState({
          isImportedEth: true,
          isDisabled: false
        });
      } catch (e) {
        _this.setState({ isSubmittedEth: true });
      }
    }, _this.handleBtcImportKey = function () {
      var btcKey = _this.state.btcKey;


      if (!btcKey || btcKey.length < 27) {
        _this.setState({ isSubmittedBtc: true });
        return;
      }
      _this.setState({ isDisabled: false });

      try {
        _actions2.default.btc.login(btcKey);
        _this.setState({
          isImportedBtc: true,
          isDisabled: false
        });
      } catch (e) {
        _this.setState({ isSubmittedBtc: true });
      }
    }, _this.handleImportKeys = function () {
      var isDisabled = _this.state.isDisabled;


      if (!isDisabled) {
        window.location.reload();
      }
    }, _this.handleCloseModal = function () {
      _actions2.default.modals.close(_this.props.name);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ImportKeys, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          isSubmittedEth = _state.isSubmittedEth,
          isSubmittedBtc = _state.isSubmittedBtc,
          isImportedEth = _state.isImportedEth,
          isImportedBtc = _state.isImportedBtc,
          isDisabled = _state.isDisabled;

      var linked = _swValuelink2.default.all(this, 'ethKey', 'btcKey');

      if (isSubmittedEth) {
        linked.ethKey.check(function (value) {
          return value !== '';
        }, 'Please enter ETH private key');
        linked.ethKey.check(function (value) {
          return value.length > 40;
        }, 'Please valid ETH private key');
      }

      if (isSubmittedBtc) {
        linked.btcKey.check(function (value) {
          return value !== '';
        }, 'Please enter BTC private key');
        linked.btcKey.check(function (value) {
          return value.length > 27;
        }, 'Please valid BTC private key');
      }

      return _react2.default.createElement(
        _modal.Modal,
        { name: this.props.name, title: 'Import keys' },
        _react2.default.createElement(
          'div',
          { styleName: 'modal' },
          _react2.default.createElement(
            'p',
            null,
            'This procedure will rewrite your private key. If you are not sure about it, we recommend to press cancel'
          ),
          _react2.default.createElement(
            _forms.FieldLabel,
            null,
            'Please enter eth private key'
          ),
          _react2.default.createElement(_Group2.default, {
            inputLink: linked.ethKey,
            placeholder: 'Key',
            disabled: isImportedEth,
            onClick: this.handleEthImportKey
          }),
          _react2.default.createElement(
            _forms.FieldLabel,
            null,
            'Please enter btc private key in WIF format'
          ),
          _react2.default.createElement(_Group2.default, {
            inputLink: linked.btcKey,
            placeholder: 'Key in WIF format',
            disabled: isImportedBtc,
            onClick: this.handleBtcImportKey
          }),
          _react2.default.createElement(
            _controls.Button,
            { brand: true, disabled: isDisabled, styleName: 'button', onClick: this.handleImportKeys },
            ' Confirm'
          ),
          _react2.default.createElement(
            _controls.Button,
            { gray: true, styleName: 'button', onClick: this.handleCloseModal },
            ' Cancel'
          )
        )
      );
    }
  }]);
  return ImportKeys;
}(_react.Component)) || _class);
exports.default = ImportKeys;

/***/ }),
/* 1463 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"modal":"_25Ymyf","button":"_2VqYnV"};

/***/ }),
/* 1464 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Group = __webpack_require__(1465);

var _Group2 = _interopRequireDefault(_Group);

var _forms = __webpack_require__(168);

var _controls = __webpack_require__(67);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Group = function Group(_ref) {
  var inputLink = _ref.inputLink,
      placeholder = _ref.placeholder,
      onClick = _ref.onClick,
      disabled = _ref.disabled;
  return _react2.default.createElement(
    'div',
    { styleName: 'group' },
    _react2.default.createElement(_forms.Input, { valueLink: inputLink, readOnly: disabled, placeholder: placeholder, styleName: 'input', pattern: '0-9a-zA-Z' }),
    _react2.default.createElement(
      _controls.Button,
      { brand: true, onClick: onClick, disabled: disabled, styleName: 'button' },
      ' Import'
    )
  );
};

exports.default = (0, _reactCssModules2.default)(Group, _Group2.default);

/***/ }),
/* 1465 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"group":"_3in6cA","input":"fWnzpt","button":"_2aNnxu"};

/***/ }),
/* 1466 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(32);

var _actions = __webpack_require__(13);

var _actions2 = _interopRequireDefault(_actions);

var _helpers = __webpack_require__(11);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _EthChecker = __webpack_require__(1467);

var _EthChecker2 = _interopRequireDefault(_EthChecker);

var _modal = __webpack_require__(176);

var _controls = __webpack_require__(67);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EthChecker = (_dec = (0, _reactCssModules2.default)(_EthChecker2.default), _dec(_class = function (_React$Component) {
  (0, _inherits3.default)(EthChecker, _React$Component);

  function EthChecker() {
    (0, _classCallCheck3.default)(this, EthChecker);
    return (0, _possibleConstructorReturn3.default)(this, (EthChecker.__proto__ || (0, _getPrototypeOf2.default)(EthChecker)).apply(this, arguments));
  }

  (0, _createClass3.default)(EthChecker, [{
    key: 'render',
    value: function render() {
      var name = this.props.name;


      return _react2.default.createElement(
        _modal.Modal,
        { name: name, title: 'Approve token' },
        _react2.default.createElement(
          'div',
          { styleName: 'content' },
          _react2.default.createElement(
            'p',
            null,
            'This token works on Ethereum blockchain. To swap this token you must have at least 0.02 ETH on your balance'
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: _helpers.links.home },
            _react2.default.createElement(
              _controls.Button,
              {
                styleName: 'button',
                brand: true,
                fullWidth: true,
                onClick: function onClick() {
                  return _actions2.default.modals.close(name);
                }
              },
              'Go wallet'
            )
          )
        )
      );
    }
  }]);
  return EthChecker;
}(_react2.default.Component)) || _class);
exports.default = EthChecker;

/***/ }),
/* 1467 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"button":"_2BSqVp","content":"_2ve1EH"};

/***/ }),
/* 1468 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCopyToClipboard = __webpack_require__(296);

var _reactCopyToClipboard2 = _interopRequireDefault(_reactCopyToClipboard);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _ReceiveModal = __webpack_require__(1469);

var _ReceiveModal2 = _interopRequireDefault(_ReceiveModal);

var _QR = __webpack_require__(1470);

var _QR2 = _interopRequireDefault(_QR);

var _modal = __webpack_require__(176);

var _controls = __webpack_require__(67);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReceiveModal = (_dec = (0, _reactCssModules2.default)(_ReceiveModal2.default), _dec(_class = function (_React$Component) {
  (0, _inherits3.default)(ReceiveModal, _React$Component);

  function ReceiveModal(props) {
    (0, _classCallCheck3.default)(this, ReceiveModal);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ReceiveModal.__proto__ || (0, _getPrototypeOf2.default)(ReceiveModal)).call(this, props));

    _this.handleCopyAddress = function () {
      _this.setState({
        isAddressCopied: true
      }, function () {
        setTimeout(function () {
          _this.setState({
            isAddressCopied: false
          });
        }, 500);
      });
    };

    _this.state = {
      isAddressCopied: false
    };
    return _this;
  }

  (0, _createClass3.default)(ReceiveModal, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          _props$data = _props.data,
          currency = _props$data.currency,
          address = _props$data.address,
          isAddressCopied = this.state.isAddressCopied;


      return _react2.default.createElement(
        _modal.Modal,
        { name: name, title: 'Receive' },
        _react2.default.createElement(
          'div',
          { styleName: 'content' },
          _react2.default.createElement(
            'p',
            null,
            'This is your address for receive ',
            currency
          ),
          _react2.default.createElement(
            _reactCopyToClipboard2.default,
            {
              text: address,
              onCopy: this.handleCopyAddress
            },
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(_QR2.default, {
                network: currency,
                address: address,
                size: 500
              }),
              address,
              _react2.default.createElement(
                _controls.Button,
                {
                  styleName: 'button',
                  brand: true,
                  onClick: function onClick() {},
                  disabled: isAddressCopied,
                  fullWidth: true
                },
                isAddressCopied ? 'Address copied to clipboard' : 'Copy to clipboard'
              )
            )
          )
        )
      );
    }
  }]);
  return ReceiveModal;
}(_react2.default.Component)) || _class);
exports.default = ReceiveModal;

/***/ }),
/* 1469 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"button":"_3n_44B","content":"QJyzGp"};

/***/ }),
/* 1470 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @todo Amount support?
 */
var QR = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(QR, _Component);

  function QR() {
    (0, _classCallCheck3.default)(this, QR);
    return (0, _possibleConstructorReturn3.default)(this, (QR.__proto__ || (0, _getPrototypeOf2.default)(QR)).apply(this, arguments));
  }

  (0, _createClass3.default)(QR, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          network = _props.network,
          address = _props.address,
          _props$size = _props.size,
          size = _props$size === undefined ? 250 : _props$size;


      return _react2.default.createElement('img', {
        src: 'https://chart.googleapis.com/chart?chs=' + size + 'x' + size + '&cht=qr&chl=' + network + ':' + address,
        alt: network + ': ' + address
      });
    }
  }]);
  return QR;
}(_react.Component), _class.propTypes = {
  network: _propTypes2.default.string.isRequired,
  address: _propTypes2.default.string.isRequired,
  size: _propTypes2.default.number
}, _temp);
exports.default = QR;

/***/ }),
/* 1471 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"modalConductor":"qe8yZ6"};

/***/ }),
/* 1472 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _keys = __webpack_require__(62);

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redaction = __webpack_require__(14);

var _notifications = __webpack_require__(1473);

var _notifications2 = _interopRequireDefault(_notifications);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _NotificationConductor = __webpack_require__(1479);

var _NotificationConductor2 = _interopRequireDefault(_NotificationConductor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotificationConductor = (_dec = (0, _redaction.connect)({
  notifications: 'notifications'
}), _dec2 = (0, _reactCssModules2.default)(_NotificationConductor2.default), _dec(_class = _dec2(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(NotificationConductor, _Component);

  function NotificationConductor() {
    (0, _classCallCheck3.default)(this, NotificationConductor);
    return (0, _possibleConstructorReturn3.default)(this, (NotificationConductor.__proto__ || (0, _getPrototypeOf2.default)(NotificationConductor)).apply(this, arguments));
  }

  (0, _createClass3.default)(NotificationConductor, [{
    key: 'render',
    value: function render() {
      var notifications = this.props.notifications;


      var notificationNames = (0, _keys2.default)(notifications);
      var areNotificationsExist = Boolean(notificationNames.length);

      return areNotificationsExist && _react2.default.createElement(
        'div',
        { styleName: 'notificationConductor' },
        notificationNames.map(function (key) {
          var _notifications$key = notifications[key],
              name = _notifications$key.name,
              _notifications$key$da = _notifications$key.data,
              data = _notifications$key$da === undefined ? {} : _notifications$key$da;


          return _react2.default.createElement(_notifications2.default[name], {
            key: name,
            name: name,
            data: data
          });
        })
      );
    }
  }]);
  return NotificationConductor;
}(_react.Component), _class2.propTypes = {
  notifications: _propTypes2.default.object
}, _temp)) || _class) || _class);
exports.default = NotificationConductor;

/***/ }),
/* 1473 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SuccessWithdraw = __webpack_require__(1474);

var _SuccessWithdraw2 = _interopRequireDefault(_SuccessWithdraw);

var _Message = __webpack_require__(1477);

var _Message2 = _interopRequireDefault(_Message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  SuccessWithdraw: _SuccessWithdraw2.default,
  Message: _Message2.default
};

/***/ }),
/* 1474 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _SuccessWithdraw = __webpack_require__(1475);

var _SuccessWithdraw2 = _interopRequireDefault(_SuccessWithdraw);

var _Notification = __webpack_require__(535);

var _Notification2 = _interopRequireDefault(_Notification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SuccessWithdraw = (_dec = (0, _reactCssModules2.default)(_SuccessWithdraw2.default), _dec(_class = function (_Component) {
  (0, _inherits3.default)(SuccessWithdraw, _Component);

  function SuccessWithdraw() {
    (0, _classCallCheck3.default)(this, SuccessWithdraw);
    return (0, _possibleConstructorReturn3.default)(this, (SuccessWithdraw.__proto__ || (0, _getPrototypeOf2.default)(SuccessWithdraw)).apply(this, arguments));
  }

  (0, _createClass3.default)(SuccessWithdraw, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          _props$data = _props.data,
          amount = _props$data.amount,
          currency = _props$data.currency,
          address = _props$data.address;


      return _react2.default.createElement(
        _Notification2.default,
        { name: name },
        _react2.default.createElement(
          'span',
          { styleName: 'value' },
          amount,
          ' ',
          currency
        ),
        ' were successfully transferred to ',
        address,
        '!'
      );
    }
  }]);
  return SuccessWithdraw;
}(_react.Component)) || _class);
exports.default = SuccessWithdraw;

/***/ }),
/* 1475 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"value":"_3M190E"};

/***/ }),
/* 1476 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"_1rGs3i","mounted":"_3e2bwy","removed":"_359s7d","notification":"_2HVVjT","content":"_2sHyls"};

/***/ }),
/* 1477 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Message = __webpack_require__(1478);

var _Message2 = _interopRequireDefault(_Message);

var _Notification = __webpack_require__(535);

var _Notification2 = _interopRequireDefault(_Notification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Message = (_dec = (0, _reactCssModules2.default)(_Message2.default), _dec(_class = function (_Component) {
  (0, _inherits3.default)(Message, _Component);

  function Message() {
    (0, _classCallCheck3.default)(this, Message);
    return (0, _possibleConstructorReturn3.default)(this, (Message.__proto__ || (0, _getPrototypeOf2.default)(Message)).apply(this, arguments));
  }

  (0, _createClass3.default)(Message, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          message = _props.data.message;


      return _react2.default.createElement(
        _Notification2.default,
        { name: name },
        _react2.default.createElement(
          'span',
          { styleName: 'value' },
          message
        )
      );
    }
  }]);
  return Message;
}(_react.Component)) || _class);
exports.default = Message;

/***/ }),
/* 1478 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"value":"xt8YYA"};

/***/ }),
/* 1479 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"notificationConductor":"_8T39zz"};

/***/ }),
/* 1480 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDocumentMeta = __webpack_require__(1481);

var _reactDocumentMeta2 = _interopRequireDefault(_reactDocumentMeta);

var _JsonLd = __webpack_require__(1486);

var _JsonLd2 = _interopRequireDefault(_JsonLd);

var _seo = __webpack_require__(537);

var _seo2 = _interopRequireDefault(_seo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Seo = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(Seo, _Component);

  function Seo(props) {
    (0, _classCallCheck3.default)(this, Seo);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Seo.__proto__ || (0, _getPrototypeOf2.default)(Seo)).call(this, props));

    _this.seoPage = (0, _seo.getSeoPage)(props.location.pathname);
    return _this;
  }

  (0, _createClass3.default)(Seo, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.location.pathname !== this.props.location.pathname) {
        this.seoPage = (0, _seo.getSeoPage)(nextProps.location.pathname);
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props.location.pathname !== nextProps.location.pathname;
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.seoPage) {
        return null;
      }
      var _seoPage = this.seoPage,
          uri = _seoPage.uri,
          title = _seoPage.title,
          description = _seoPage.description;

      var url = (0, _seo.getUrl)(uri);
      return _react2.default.createElement(
        _reactDocumentMeta2.default,
        {
          title: title,
          description: description,
          canonical: url,
          meta: {
            property: {
              'og:title': title,
              'og:description': description,
              'og:url': url,
              'og:image': _seo2.default.config.logo
            }
          }
        },
        _react2.default.createElement(_JsonLd2.default, { uri: uri, title: title, description: description })
      );
    }
  }]);
  return Seo;
}(_react.Component), _class.propTypes = {
  location: _propTypes2.default.object.isRequired
}, _temp);
exports.default = Seo;

/***/ }),
/* 1481 */,
/* 1482 */,
/* 1483 */,
/* 1484 */,
/* 1485 */,
/* 1486 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(154);

var _stringify2 = _interopRequireDefault(_stringify);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _seo = __webpack_require__(537);

var _seo2 = _interopRequireDefault(_seo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JsonLd = function JsonLd(_ref) {
  var uri = _ref.uri,
      title = _ref.title,
      description = _ref.description;
  return _react2.default.createElement('script', {
    type: 'application/ld+json',
    dangerouslySetInnerHTML: {
      __html: (0, _stringify2.default)({
        '@context': 'http://schema.org',
        '@type': 'Website',
        sameAs: [_seo2.default.config.medium, _seo2.default.config.twitter, _seo2.default.config.facebook, _seo2.default.config.telegram],
        email: _seo2.default.config.email,
        url: (0, _seo.getUrl)(uri),
        name: title,
        description: description,
        logo: _seo2.default.config.logo
      })
    }
  });
};

exports.default = JsonLd;

/***/ }),
/* 1487 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _ErrorNotification = __webpack_require__(1488);

var _ErrorNotification2 = _interopRequireDefault(_ErrorNotification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorNotification = function ErrorNotification(_ref) {
  var error = _ref.error,
      hideErrorNotification = _ref.hideErrorNotification;
  return _react2.default.createElement(
    'div',
    { styleName: 'error-notification-container' },
    _react2.default.createElement(
      'span',
      { styleName: 'error-notification-close', onClick: hideErrorNotification },
      '\xD7'
    ),
    _react2.default.createElement(
      'h3',
      { styleName: 'error-notification-heading' },
      'Oops, looks like something went wrong!'
    ),
    _react2.default.createElement(
      'p',
      { styleName: 'error-notification-text' },
      'Error: ',
      error
    )
  );
};

exports.default = (0, _reactCssModules2.default)(ErrorNotification, _ErrorNotification2.default, { allowMultiple: true });

/***/ }),
/* 1488 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"error-notification-container":"_2O9mh2","error-notification-close":"k8Pl0Q","error-notification-heading":"_24T2OC","error-notification-text":"_4xHeE4"};

/***/ })
],[539]);