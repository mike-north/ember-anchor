"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('dummy/app', ['exports', 'ember', 'dummy/resolver', 'ember-load-initializers', 'dummy/config/environment'], function (exports, _ember, _dummyResolver, _emberLoadInitializers, _dummyConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix,
    Resolver: _dummyResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _dummyConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('dummy/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'dummy/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _dummyConfigEnvironment) {

  var name = _dummyConfigEnvironment['default'].APP.name;
  var version = _dummyConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('dummy/components/customized-page', ['exports', 'ember', 'ember-anchor/mixins/view-support'], function (exports, _ember, _emberAnchorMixinsViewSupport) {
  exports['default'] = _ember['default'].Component.extend(_emberAnchorMixinsViewSupport['default'], {
    anchorQueryParam: 'custom'
  });
});
define('dummy/components/ember-anchor', ['exports', 'ember-anchor/components/ember-anchor'], function (exports, _emberAnchorComponentsEmberAnchor) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAnchorComponentsEmberAnchor['default'];
    }
  });
});
define('dummy/components/index-page', ['exports', 'ember', 'ember-anchor/mixins/view-support'], function (exports, _ember, _emberAnchorMixinsViewSupport) {
  exports['default'] = _ember['default'].Component.extend(_emberAnchorMixinsViewSupport['default'], {});
});
define('dummy/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('dummy/controllers/customized', ['exports', 'ember', 'ember-anchor/mixins/controller-support'], function (exports, _ember, _emberAnchorMixinsControllerSupport) {
  exports['default'] = _ember['default'].Controller.extend(_emberAnchorMixinsControllerSupport['default'], {
    anchorQueryParam: 'custom'
  });
});
define('dummy/controllers/index', ['exports', 'ember', 'ember-anchor/mixins/controller-support'], function (exports, _ember, _emberAnchorMixinsControllerSupport) {
  exports['default'] = _ember['default'].Controller.extend(_emberAnchorMixinsControllerSupport['default'], {});
});
define('dummy/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('dummy/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'dummy/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _dummyConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_dummyConfigEnvironment['default'].APP.name, _dummyConfigEnvironment['default'].APP.version)
  };
});
define('dummy/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('dummy/initializers/ember-anchor', ['exports', 'dummy/config/environment'], function (exports, _dummyConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    var emberAnchor = _dummyConfigEnvironment['default'].emberAnchor;

    application.register('config:ember-anchor', emberAnchor, { instantiate: false });
  }

  exports['default'] = {
    name: 'ember-anchor',
    initialize: initialize
  };
});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_dummyConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _dummyConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_dummyConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('dummy/initializers/fastboot/ajax', ['exports'], function (exports) {
  /* globals najax */

  var nodeAjax = function nodeAjax(options) {
    najax(options);
  };

  exports['default'] = {
    name: 'ajax-service',

    initialize: function initialize(application) {
      application.register('ajax:node', nodeAjax, { instantiate: false });
      application.inject('adapter', '_ajaxRequest', 'ajax:node');
    }
  };
});
define("dummy/initializers/fastboot/dom-helper-patches", ["exports"], function (exports) {
  /*globals Ember, URL*/
  exports["default"] = {
    name: "dom-helper-patches",

    initialize: function initialize(App) {
      // TODO: remove me
      Ember.HTMLBars.DOMHelper.prototype.protocolForURL = function (url) {
        var protocol = URL.parse(url).protocol;
        return protocol == null ? ':' : protocol;
      };

      // TODO: remove me https://github.com/tildeio/htmlbars/pull/425
      Ember.HTMLBars.DOMHelper.prototype.parseHTML = function (html) {
        return this.document.createRawHTMLSection(html);
      };
    }
  };
});
define('dummy/mixins/controller-support', ['exports', 'ember-anchor/mixins/controller-support'], function (exports, _emberAnchorMixinsControllerSupport) {
  exports['default'] = _emberAnchorMixinsControllerSupport['default'];
});
define('dummy/mixins/view-support', ['exports', 'ember-anchor/mixins/view-support'], function (exports, _emberAnchorMixinsViewSupport) {
  exports['default'] = _emberAnchorMixinsViewSupport['default'];
});
define('dummy/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _dummyConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('customized');
  });

  exports['default'] = Router;
});
define('dummy/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('dummy/services/fastboot', ['exports', 'ember'], function (exports, _ember) {

  var alias = _ember['default'].computed.alias;
  var computed = _ember['default'].computed;

  exports['default'] = _ember['default'].Service.extend({
    cookies: alias('_fastbootInfo.cookies'),
    headers: alias('_fastbootInfo.headers'),
    host: computed(function () {
      return this._fastbootInfo.host();
    }),
    isFastBoot: computed(function () {
      return typeof FastBoot !== 'undefined';
    })
  });
});
/* global FastBoot */
define("dummy/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 10
          }
        },
        "moduleName": "dummy/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "id", "title");
        var el2 = dom.createTextNode("Ember Anchor");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [3, 0], [3, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/customized", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 41,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/customized.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h5");
        dom.setAttribute(el1, "data-custom", "first");
        var el2 = dom.createTextNode("First");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\nBacon ipsum dolor amet tri-tip turkey doner meatloaf sirloin cupim pork belly shankle short ribs fatback t-bone meatball flank. Bacon turducken meatloaf, kielbasa hamburger tri-tip doner ham pig filet mignon. Pork chop jerky capicola salami jowl, cupim alcatra beef ball tip. Shankle brisket sirloin doner. Pancetta t-bone sausage, brisket bacon sirloin pork chop swine meatball alcatra boudin andouille pork. Porchetta turducken strip steak, pork loin kevin kielbasa ribeye cow pancetta.\n\nSpare ribs short ribs tongue, tenderloin kevin meatloaf venison prosciutto. Pork chop sausage beef ribs pancetta pastrami, short ribs swine shoulder. Pork belly chuck fatback pork, salami pastrami hamburger capicola biltong turducken tail frankfurter jerky prosciutto ham. Frankfurter salami ham tail shankle jerky ribeye corned beef rump.\n\nBiltong jowl tenderloin swine, ball tip brisket alcatra. Swine ribeye boudin shankle. Drumstick tenderloin alcatra tongue turducken jowl hamburger chicken t-bone capicola pork loin shank. Spare ribs andouille corned beef drumstick turducken pig shoulder tail bacon pork loin. Pork alcatra porchetta, bresaola meatball short ribs ham turkey shoulder cow beef ribs pancetta leberkas.\n\nHamburger boudin capicola jowl meatball, ball tip sirloin strip steak. Kielbasa capicola leberkas jerky sirloin short ribs salami pork loin. Alcatra fatback venison bresaola tri-tip turducken. Pork chop cow brisket, pork belly ground round boudin landjaeger. Leberkas short ribs flank doner boudin pork landjaeger tri-tip jowl ham bacon shank chicken pork chop venison. Jerky pork chop filet mignon, rump biltong sausage kielbasa chuck boudin andouille salami corned beef meatball.\n\nBacon sirloin ball tip boudin venison, jowl swine shoulder salami pork chop hamburger turducken tongue pork. Turkey cow t-bone tenderloin jowl filet mignon turducken, salami pastrami capicola porchetta tri-tip biltong spare ribs pork loin. Shank andouille landjaeger ham hock tail pork belly brisket boudin bresaola flank ground round. Bresaola frankfurter porchetta pork chop capicola leberkas. Frankfurter shank pastrami bresaola kevin venison pork. Tongue brisket tenderloin chuck flank bacon beef meatloaf. Biltong pork loin turducken meatloaf ribeye bresaola tail short loin shank tongue swine.\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h5");
        dom.setAttribute(el1, "data-custom", "second");
        var el2 = dom.createTextNode("Second");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\nBacon ipsum dolor amet tri-tip turkey doner meatloaf sirloin cupim pork belly shankle short ribs fatback t-bone meatball flank. Bacon turducken meatloaf, kielbasa hamburger tri-tip doner ham pig filet mignon. Pork chop jerky capicola salami jowl, cupim alcatra beef ball tip. Shankle brisket sirloin doner. Pancetta t-bone sausage, brisket bacon sirloin pork chop swine meatball alcatra boudin andouille pork. Porchetta turducken strip steak, pork loin kevin kielbasa ribeye cow pancetta.\n\nSpare ribs short ribs tongue, tenderloin kevin meatloaf venison prosciutto. Pork chop sausage beef ribs pancetta pastrami, short ribs swine shoulder. Pork belly chuck fatback pork, salami pastrami hamburger capicola biltong turducken tail frankfurter jerky prosciutto ham. Frankfurter salami ham tail shankle jerky ribeye corned beef rump.\n\nBiltong jowl tenderloin swine, ball tip brisket alcatra. Swine ribeye boudin shankle. Drumstick tenderloin alcatra tongue turducken jowl hamburger chicken t-bone capicola pork loin shank. Spare ribs andouille corned beef drumstick turducken pig shoulder tail bacon pork loin. Pork alcatra porchetta, bresaola meatball short ribs ham turkey shoulder cow beef ribs pancetta leberkas.\n\nHamburger boudin capicola jowl meatball, ball tip sirloin strip steak. Kielbasa capicola leberkas jerky sirloin short ribs salami pork loin. Alcatra fatback venison bresaola tri-tip turducken. Pork chop cow brisket, pork belly ground round boudin landjaeger. Leberkas short ribs flank doner boudin pork landjaeger tri-tip jowl ham bacon shank chicken pork chop venison. Jerky pork chop filet mignon, rump biltong sausage kielbasa chuck boudin andouille salami corned beef meatball.\n\nBacon sirloin ball tip boudin venison, jowl swine shoulder salami pork chop hamburger turducken tongue pork. Turkey cow t-bone tenderloin jowl filet mignon turducken, salami pastrami capicola porchetta tri-tip biltong spare ribs pork loin. Shank andouille landjaeger ham hock tail pork belly brisket boudin bresaola flank ground round. Bresaola frankfurter porchetta pork chop capicola leberkas. Frankfurter shank pastrami bresaola kevin venison pork. Tongue brisket tenderloin chuck flank bacon beef meatloaf. Biltong pork loin turducken meatloaf ribeye bresaola tail short loin shank tongue swine.\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h5");
        dom.setAttribute(el1, "data-custom", "third");
        var el2 = dom.createTextNode("Third");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\nBacon ipsum dolor amet tri-tip turkey doner meatloaf sirloin cupim pork belly shankle short ribs fatback t-bone meatball flank. Bacon turducken meatloaf, kielbasa hamburger tri-tip doner ham pig filet mignon. Pork chop jerky capicola salami jowl, cupim alcatra beef ball tip. Shankle brisket sirloin doner. Pancetta t-bone sausage, brisket bacon sirloin pork chop swine meatball alcatra boudin andouille pork. Porchetta turducken strip steak, pork loin kevin kielbasa ribeye cow pancetta.\n\nSpare ribs short ribs tongue, tenderloin kevin meatloaf venison prosciutto. Pork chop sausage beef ribs pancetta pastrami, short ribs swine shoulder. Pork belly chuck fatback pork, salami pastrami hamburger capicola biltong turducken tail frankfurter jerky prosciutto ham. Frankfurter salami ham tail shankle jerky ribeye corned beef rump.\n\nBiltong jowl tenderloin swine, ball tip brisket alcatra. Swine ribeye boudin shankle. Drumstick tenderloin alcatra tongue turducken jowl hamburger chicken t-bone capicola pork loin shank. Spare ribs andouille corned beef drumstick turducken pig shoulder tail bacon pork loin. Pork alcatra porchetta, bresaola meatball short ribs ham turkey shoulder cow beef ribs pancetta leberkas.\n\nHamburger boudin capicola jowl meatball, ball tip sirloin strip steak. Kielbasa capicola leberkas jerky sirloin short ribs salami pork loin. Alcatra fatback venison bresaola tri-tip turducken. Pork chop cow brisket, pork belly ground round boudin landjaeger. Leberkas short ribs flank doner boudin pork landjaeger tri-tip jowl ham bacon shank chicken pork chop venison. Jerky pork chop filet mignon, rump biltong sausage kielbasa chuck boudin andouille salami corned beef meatball.\n\nBacon sirloin ball tip boudin venison, jowl swine shoulder salami pork chop hamburger turducken tongue pork. Turkey cow t-bone tenderloin jowl filet mignon turducken, salami pastrami capicola porchetta tri-tip biltong spare ribs pork loin. Shank andouille landjaeger ham hock tail pork belly brisket boudin bresaola flank ground round. Bresaola frankfurter porchetta pork chop capicola leberkas. Frankfurter shank pastrami bresaola kevin venison pork. Tongue brisket tenderloin chuck flank bacon beef meatloaf. Biltong pork loin turducken meatloaf ribeye bresaola tail short loin shank tongue swine.\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 6, 6, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "customized-page", [], ["a", ["subexpr", "@mut", [["get", "custom", ["loc", [null, [1, 20], [1, 26]]]]], [], []]], ["loc", [null, [1, 0], [1, 28]]]], ["inline", "link-to", ["Go to First", "customized", ["subexpr", "query-params", [], ["custom", "first"], ["loc", [null, [2, 37], [2, 66]]]]], ["class", "first-link"], ["loc", [null, [2, 0], [2, 87]]]], ["inline", "link-to", ["Go to Second", "customized", ["subexpr", "query-params", [], ["custom", "second"], ["loc", [null, [3, 38], [3, 68]]]]], ["class", "second-link"], ["loc", [null, [3, 0], [3, 90]]]], ["inline", "link-to", ["Go to Third", "customized", ["subexpr", "query-params", [], ["custom", "third"], ["loc", [null, [4, 37], [4, 66]]]]], ["class", "third-link"], ["loc", [null, [4, 0], [4, 87]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 41,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h5");
        dom.setAttribute(el1, "data-anc", "first");
        var el2 = dom.createTextNode("First");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\nBacon ipsum dolor amet tri-tip turkey doner meatloaf sirloin cupim pork belly shankle short ribs fatback t-bone meatball flank. Bacon turducken meatloaf, kielbasa hamburger tri-tip doner ham pig filet mignon. Pork chop jerky capicola salami jowl, cupim alcatra beef ball tip. Shankle brisket sirloin doner. Pancetta t-bone sausage, brisket bacon sirloin pork chop swine meatball alcatra boudin andouille pork. Porchetta turducken strip steak, pork loin kevin kielbasa ribeye cow pancetta.\n\nSpare ribs short ribs tongue, tenderloin kevin meatloaf venison prosciutto. Pork chop sausage beef ribs pancetta pastrami, short ribs swine shoulder. Pork belly chuck fatback pork, salami pastrami hamburger capicola biltong turducken tail frankfurter jerky prosciutto ham. Frankfurter salami ham tail shankle jerky ribeye corned beef rump.\n\nBiltong jowl tenderloin swine, ball tip brisket alcatra. Swine ribeye boudin shankle. Drumstick tenderloin alcatra tongue turducken jowl hamburger chicken t-bone capicola pork loin shank. Spare ribs andouille corned beef drumstick turducken pig shoulder tail bacon pork loin. Pork alcatra porchetta, bresaola meatball short ribs ham turkey shoulder cow beef ribs pancetta leberkas.\n\nHamburger boudin capicola jowl meatball, ball tip sirloin strip steak. Kielbasa capicola leberkas jerky sirloin short ribs salami pork loin. Alcatra fatback venison bresaola tri-tip turducken. Pork chop cow brisket, pork belly ground round boudin landjaeger. Leberkas short ribs flank doner boudin pork landjaeger tri-tip jowl ham bacon shank chicken pork chop venison. Jerky pork chop filet mignon, rump biltong sausage kielbasa chuck boudin andouille salami corned beef meatball.\n\nBacon sirloin ball tip boudin venison, jowl swine shoulder salami pork chop hamburger turducken tongue pork. Turkey cow t-bone tenderloin jowl filet mignon turducken, salami pastrami capicola porchetta tri-tip biltong spare ribs pork loin. Shank andouille landjaeger ham hock tail pork belly brisket boudin bresaola flank ground round. Bresaola frankfurter porchetta pork chop capicola leberkas. Frankfurter shank pastrami bresaola kevin venison pork. Tongue brisket tenderloin chuck flank bacon beef meatloaf. Biltong pork loin turducken meatloaf ribeye bresaola tail short loin shank tongue swine.\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h5");
        dom.setAttribute(el1, "data-anc", "second");
        var el2 = dom.createTextNode("Second");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\nBacon ipsum dolor amet tri-tip turkey doner meatloaf sirloin cupim pork belly shankle short ribs fatback t-bone meatball flank. Bacon turducken meatloaf, kielbasa hamburger tri-tip doner ham pig filet mignon. Pork chop jerky capicola salami jowl, cupim alcatra beef ball tip. Shankle brisket sirloin doner. Pancetta t-bone sausage, brisket bacon sirloin pork chop swine meatball alcatra boudin andouille pork. Porchetta turducken strip steak, pork loin kevin kielbasa ribeye cow pancetta.\n\nSpare ribs short ribs tongue, tenderloin kevin meatloaf venison prosciutto. Pork chop sausage beef ribs pancetta pastrami, short ribs swine shoulder. Pork belly chuck fatback pork, salami pastrami hamburger capicola biltong turducken tail frankfurter jerky prosciutto ham. Frankfurter salami ham tail shankle jerky ribeye corned beef rump.\n\nBiltong jowl tenderloin swine, ball tip brisket alcatra. Swine ribeye boudin shankle. Drumstick tenderloin alcatra tongue turducken jowl hamburger chicken t-bone capicola pork loin shank. Spare ribs andouille corned beef drumstick turducken pig shoulder tail bacon pork loin. Pork alcatra porchetta, bresaola meatball short ribs ham turkey shoulder cow beef ribs pancetta leberkas.\n\nHamburger boudin capicola jowl meatball, ball tip sirloin strip steak. Kielbasa capicola leberkas jerky sirloin short ribs salami pork loin. Alcatra fatback venison bresaola tri-tip turducken. Pork chop cow brisket, pork belly ground round boudin landjaeger. Leberkas short ribs flank doner boudin pork landjaeger tri-tip jowl ham bacon shank chicken pork chop venison. Jerky pork chop filet mignon, rump biltong sausage kielbasa chuck boudin andouille salami corned beef meatball.\n\nBacon sirloin ball tip boudin venison, jowl swine shoulder salami pork chop hamburger turducken tongue pork. Turkey cow t-bone tenderloin jowl filet mignon turducken, salami pastrami capicola porchetta tri-tip biltong spare ribs pork loin. Shank andouille landjaeger ham hock tail pork belly brisket boudin bresaola flank ground round. Bresaola frankfurter porchetta pork chop capicola leberkas. Frankfurter shank pastrami bresaola kevin venison pork. Tongue brisket tenderloin chuck flank bacon beef meatloaf. Biltong pork loin turducken meatloaf ribeye bresaola tail short loin shank tongue swine.\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h5");
        dom.setAttribute(el1, "data-anc", "third");
        var el2 = dom.createTextNode("Third");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\nBacon ipsum dolor amet tri-tip turkey doner meatloaf sirloin cupim pork belly shankle short ribs fatback t-bone meatball flank. Bacon turducken meatloaf, kielbasa hamburger tri-tip doner ham pig filet mignon. Pork chop jerky capicola salami jowl, cupim alcatra beef ball tip. Shankle brisket sirloin doner. Pancetta t-bone sausage, brisket bacon sirloin pork chop swine meatball alcatra boudin andouille pork. Porchetta turducken strip steak, pork loin kevin kielbasa ribeye cow pancetta.\n\nSpare ribs short ribs tongue, tenderloin kevin meatloaf venison prosciutto. Pork chop sausage beef ribs pancetta pastrami, short ribs swine shoulder. Pork belly chuck fatback pork, salami pastrami hamburger capicola biltong turducken tail frankfurter jerky prosciutto ham. Frankfurter salami ham tail shankle jerky ribeye corned beef rump.\n\nBiltong jowl tenderloin swine, ball tip brisket alcatra. Swine ribeye boudin shankle. Drumstick tenderloin alcatra tongue turducken jowl hamburger chicken t-bone capicola pork loin shank. Spare ribs andouille corned beef drumstick turducken pig shoulder tail bacon pork loin. Pork alcatra porchetta, bresaola meatball short ribs ham turkey shoulder cow beef ribs pancetta leberkas.\n\nHamburger boudin capicola jowl meatball, ball tip sirloin strip steak. Kielbasa capicola leberkas jerky sirloin short ribs salami pork loin. Alcatra fatback venison bresaola tri-tip turducken. Pork chop cow brisket, pork belly ground round boudin landjaeger. Leberkas short ribs flank doner boudin pork landjaeger tri-tip jowl ham bacon shank chicken pork chop venison. Jerky pork chop filet mignon, rump biltong sausage kielbasa chuck boudin andouille salami corned beef meatball.\n\nBacon sirloin ball tip boudin venison, jowl swine shoulder salami pork chop hamburger turducken tongue pork. Turkey cow t-bone tenderloin jowl filet mignon turducken, salami pastrami capicola porchetta tri-tip biltong spare ribs pork loin. Shank andouille landjaeger ham hock tail pork belly brisket boudin bresaola flank ground round. Bresaola frankfurter porchetta pork chop capicola leberkas. Frankfurter shank pastrami bresaola kevin venison pork. Tongue brisket tenderloin chuck flank bacon beef meatloaf. Biltong pork loin turducken meatloaf ribeye bresaola tail short loin shank tongue swine.\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 6, 6, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "ember-anchor", [], ["a", ["subexpr", "@mut", [["get", "anc", ["loc", [null, [1, 17], [1, 20]]]]], [], []]], ["loc", [null, [1, 0], [1, 22]]]], ["inline", "link-to", ["Go to First", "index", ["subexpr", "query-params", [], ["anc", "first"], ["loc", [null, [2, 32], [2, 58]]]]], ["class", "first-link"], ["loc", [null, [2, 0], [2, 79]]]], ["inline", "link-to", ["Go to Second", "index", ["subexpr", "query-params", [], ["anc", "second"], ["loc", [null, [3, 33], [3, 60]]]]], ["class", "second-link"], ["loc", [null, [3, 0], [3, 82]]]], ["inline", "link-to", ["Go to Third", "index", ["subexpr", "query-params", [], ["anc", "third"], ["loc", [null, [4, 32], [4, 58]]]]], ["class", "third-link"], ["loc", [null, [4, 0], [4, 79]]]]],
      locals: [],
      templates: []
    };
  })());
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  return { 'default': {"modulePrefix":"dummy","environment":"production","baseURL":"ember-anchor/","locationType":"hash","EmberENV":{"FEATURES":{},"RAISE_ON_DEPRECATION":false},"contentSecurityPolicy":{"style-src":"'self' 'unsafe-inline'","img-src":"'self' https://camo.githubusercontent.com","default-src":"'none'","script-src":"'self'","font-src":"'self'","connect-src":"'self'","media-src":"'self'"},"emberAnchor":{"anchorQueryParam":"anc"},"APP":{"name":"ember-anchor","version":"0.1.3+bbbc37ea","autoboot":false},"contentSecurityPolicyHeader":"Content-Security-Policy-Report-Only","exportApplicationGlobal":false}};
});

/* jshint ignore:end */

/* jshint ignore:start */


define('~fastboot/app-factory', ['dummy/app', 'dummy/config/environment'], function(App, config) {
  App = App['default'];
  config = config['default'];

  return {
    'default': function() {
      return App.create(config.APP);
    }
  };
});


/* jshint ignore:end */
