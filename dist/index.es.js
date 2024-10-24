import * as React from 'react';
import React__default, { createContext, useContext, useState, useMemo, Children as Children$1, cloneElement, forwardRef, createElement, isValidElement, PureComponent, useLayoutEffect, useEffect, useRef, useImperativeHandle, useId as useId$1, useCallback } from 'react';
import { Box, Paper, Avatar, Typography, useTheme as useTheme$2, useMediaQuery, Grid, TextField, InputAdornment, IconButton, Modal, Backdrop, Fade, CssBaseline, AppBar, Toolbar, Drawer, Button as Button$1 } from '@mui/material';
import * as ReactDOM from 'react-dom';

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production_min;

function requireReactJsxRuntime_production_min () {
	if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
	hasRequiredReactJsxRuntime_production_min = 1;
var f=React__default,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
	function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
	return reactJsxRuntime_production_min;
}

var reactJsxRuntime_development = {};

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_development;

function requireReactJsxRuntime_development () {
	if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
	hasRequiredReactJsxRuntime_development = 1;

	if (process.env.NODE_ENV !== "production") {
	  (function() {

	var React = React__default;

	// ATTENTION
	// When adding new symbols to this file,
	// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
	// The Symbol used to tag the ReactElement-like types.
	var REACT_ELEMENT_TYPE = Symbol.for('react.element');
	var REACT_PORTAL_TYPE = Symbol.for('react.portal');
	var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
	var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
	var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
	var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
	var REACT_CONTEXT_TYPE = Symbol.for('react.context');
	var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
	var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
	var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
	var REACT_MEMO_TYPE = Symbol.for('react.memo');
	var REACT_LAZY_TYPE = Symbol.for('react.lazy');
	var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator';
	function getIteratorFn(maybeIterable) {
	  if (maybeIterable === null || typeof maybeIterable !== 'object') {
	    return null;
	  }

	  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

	  if (typeof maybeIterator === 'function') {
	    return maybeIterator;
	  }

	  return null;
	}

	var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

	function error(format) {
	  {
	    {
	      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        args[_key2 - 1] = arguments[_key2];
	      }

	      printWarning('error', format, args);
	    }
	  }
	}

	function printWarning(level, format, args) {
	  // When changing this logic, you might want to also
	  // update consoleWithStackDev.www.js as well.
	  {
	    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
	    var stack = ReactDebugCurrentFrame.getStackAddendum();

	    if (stack !== '') {
	      format += '%s';
	      args = args.concat([stack]);
	    } // eslint-disable-next-line react-internal/safe-string-coercion


	    var argsWithFormat = args.map(function (item) {
	      return String(item);
	    }); // Careful: RN currently depends on this prefix

	    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
	    // breaks IE9: https://github.com/facebook/react/issues/13610
	    // eslint-disable-next-line react-internal/no-production-logging

	    Function.prototype.apply.call(console[level], console, argsWithFormat);
	  }
	}

	// -----------------------------------------------------------------------------

	var enableScopeAPI = false; // Experimental Create Event Handle API.
	var enableCacheElement = false;
	var enableTransitionTracing = false; // No known bugs, but needs performance testing

	var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
	// stuff. Intended to enable React core members to more easily debug scheduling
	// issues in DEV builds.

	var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

	var REACT_MODULE_REFERENCE;

	{
	  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
	}

	function isValidElementType(type) {
	  if (typeof type === 'string' || typeof type === 'function') {
	    return true;
	  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


	  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
	    return true;
	  }

	  if (typeof type === 'object' && type !== null) {
	    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
	    // types supported by any Flight configuration anywhere since
	    // we don't know which Flight build this will end up being used
	    // with.
	    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
	      return true;
	    }
	  }

	  return false;
	}

	function getWrappedName(outerType, innerType, wrapperName) {
	  var displayName = outerType.displayName;

	  if (displayName) {
	    return displayName;
	  }

	  var functionName = innerType.displayName || innerType.name || '';
	  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
	} // Keep in sync with react-reconciler/getComponentNameFromFiber


	function getContextName(type) {
	  return type.displayName || 'Context';
	} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


	function getComponentNameFromType(type) {
	  if (type == null) {
	    // Host root, text node or just invalid type.
	    return null;
	  }

	  {
	    if (typeof type.tag === 'number') {
	      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
	    }
	  }

	  if (typeof type === 'function') {
	    return type.displayName || type.name || null;
	  }

	  if (typeof type === 'string') {
	    return type;
	  }

	  switch (type) {
	    case REACT_FRAGMENT_TYPE:
	      return 'Fragment';

	    case REACT_PORTAL_TYPE:
	      return 'Portal';

	    case REACT_PROFILER_TYPE:
	      return 'Profiler';

	    case REACT_STRICT_MODE_TYPE:
	      return 'StrictMode';

	    case REACT_SUSPENSE_TYPE:
	      return 'Suspense';

	    case REACT_SUSPENSE_LIST_TYPE:
	      return 'SuspenseList';

	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_CONTEXT_TYPE:
	        var context = type;
	        return getContextName(context) + '.Consumer';

	      case REACT_PROVIDER_TYPE:
	        var provider = type;
	        return getContextName(provider._context) + '.Provider';

	      case REACT_FORWARD_REF_TYPE:
	        return getWrappedName(type, type.render, 'ForwardRef');

	      case REACT_MEMO_TYPE:
	        var outerName = type.displayName || null;

	        if (outerName !== null) {
	          return outerName;
	        }

	        return getComponentNameFromType(type.type) || 'Memo';

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            return getComponentNameFromType(init(payload));
	          } catch (x) {
	            return null;
	          }
	        }

	      // eslint-disable-next-line no-fallthrough
	    }
	  }

	  return null;
	}

	var assign = Object.assign;

	// Helpers to patch console.logs to avoid logging during side-effect free
	// replaying on render function. This currently only patches the object
	// lazily which won't cover if the log function was extracted eagerly.
	// We could also eagerly patch the method.
	var disabledDepth = 0;
	var prevLog;
	var prevInfo;
	var prevWarn;
	var prevError;
	var prevGroup;
	var prevGroupCollapsed;
	var prevGroupEnd;

	function disabledLog() {}

	disabledLog.__reactDisabledLog = true;
	function disableLogs() {
	  {
	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      prevLog = console.log;
	      prevInfo = console.info;
	      prevWarn = console.warn;
	      prevError = console.error;
	      prevGroup = console.group;
	      prevGroupCollapsed = console.groupCollapsed;
	      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

	      var props = {
	        configurable: true,
	        enumerable: true,
	        value: disabledLog,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        info: props,
	        log: props,
	        warn: props,
	        error: props,
	        group: props,
	        groupCollapsed: props,
	        groupEnd: props
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    disabledDepth++;
	  }
	}
	function reenableLogs() {
	  {
	    disabledDepth--;

	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      var props = {
	        configurable: true,
	        enumerable: true,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        log: assign({}, props, {
	          value: prevLog
	        }),
	        info: assign({}, props, {
	          value: prevInfo
	        }),
	        warn: assign({}, props, {
	          value: prevWarn
	        }),
	        error: assign({}, props, {
	          value: prevError
	        }),
	        group: assign({}, props, {
	          value: prevGroup
	        }),
	        groupCollapsed: assign({}, props, {
	          value: prevGroupCollapsed
	        }),
	        groupEnd: assign({}, props, {
	          value: prevGroupEnd
	        })
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    if (disabledDepth < 0) {
	      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
	    }
	  }
	}

	var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
	var prefix;
	function describeBuiltInComponentFrame(name, source, ownerFn) {
	  {
	    if (prefix === undefined) {
	      // Extract the VM specific prefix used by each line.
	      try {
	        throw Error();
	      } catch (x) {
	        var match = x.stack.trim().match(/\n( *(at )?)/);
	        prefix = match && match[1] || '';
	      }
	    } // We use the prefix to ensure our stacks line up with native stack frames.


	    return '\n' + prefix + name;
	  }
	}
	var reentry = false;
	var componentFrameCache;

	{
	  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
	  componentFrameCache = new PossiblyWeakMap();
	}

	function describeNativeComponentFrame(fn, construct) {
	  // If something asked for a stack inside a fake render, it should get ignored.
	  if ( !fn || reentry) {
	    return '';
	  }

	  {
	    var frame = componentFrameCache.get(fn);

	    if (frame !== undefined) {
	      return frame;
	    }
	  }

	  var control;
	  reentry = true;
	  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

	  Error.prepareStackTrace = undefined;
	  var previousDispatcher;

	  {
	    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
	    // for warnings.

	    ReactCurrentDispatcher.current = null;
	    disableLogs();
	  }

	  try {
	    // This should throw.
	    if (construct) {
	      // Something should be setting the props in the constructor.
	      var Fake = function () {
	        throw Error();
	      }; // $FlowFixMe


	      Object.defineProperty(Fake.prototype, 'props', {
	        set: function () {
	          // We use a throwing setter instead of frozen or non-writable props
	          // because that won't throw in a non-strict mode function.
	          throw Error();
	        }
	      });

	      if (typeof Reflect === 'object' && Reflect.construct) {
	        // We construct a different control for this case to include any extra
	        // frames added by the construct call.
	        try {
	          Reflect.construct(Fake, []);
	        } catch (x) {
	          control = x;
	        }

	        Reflect.construct(fn, [], Fake);
	      } else {
	        try {
	          Fake.call();
	        } catch (x) {
	          control = x;
	        }

	        fn.call(Fake.prototype);
	      }
	    } else {
	      try {
	        throw Error();
	      } catch (x) {
	        control = x;
	      }

	      fn();
	    }
	  } catch (sample) {
	    // This is inlined manually because closure doesn't do it for us.
	    if (sample && control && typeof sample.stack === 'string') {
	      // This extracts the first frame from the sample that isn't also in the control.
	      // Skipping one frame that we assume is the frame that calls the two.
	      var sampleLines = sample.stack.split('\n');
	      var controlLines = control.stack.split('\n');
	      var s = sampleLines.length - 1;
	      var c = controlLines.length - 1;

	      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
	        // We expect at least one stack frame to be shared.
	        // Typically this will be the root most one. However, stack frames may be
	        // cut off due to maximum stack limits. In this case, one maybe cut off
	        // earlier than the other. We assume that the sample is longer or the same
	        // and there for cut off earlier. So we should find the root most frame in
	        // the sample somewhere in the control.
	        c--;
	      }

	      for (; s >= 1 && c >= 0; s--, c--) {
	        // Next we find the first one that isn't the same which should be the
	        // frame that called our sample function and the control.
	        if (sampleLines[s] !== controlLines[c]) {
	          // In V8, the first line is describing the message but other VMs don't.
	          // If we're about to return the first line, and the control is also on the same
	          // line, that's a pretty good indicator that our sample threw at same line as
	          // the control. I.e. before we entered the sample frame. So we ignore this result.
	          // This can happen if you passed a class to function component, or non-function.
	          if (s !== 1 || c !== 1) {
	            do {
	              s--;
	              c--; // We may still have similar intermediate frames from the construct call.
	              // The next one that isn't the same should be our match though.

	              if (c < 0 || sampleLines[s] !== controlLines[c]) {
	                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
	                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
	                // but we have a user-provided "displayName"
	                // splice it in to make the stack more readable.


	                if (fn.displayName && _frame.includes('<anonymous>')) {
	                  _frame = _frame.replace('<anonymous>', fn.displayName);
	                }

	                {
	                  if (typeof fn === 'function') {
	                    componentFrameCache.set(fn, _frame);
	                  }
	                } // Return the line we found.


	                return _frame;
	              }
	            } while (s >= 1 && c >= 0);
	          }

	          break;
	        }
	      }
	    }
	  } finally {
	    reentry = false;

	    {
	      ReactCurrentDispatcher.current = previousDispatcher;
	      reenableLogs();
	    }

	    Error.prepareStackTrace = previousPrepareStackTrace;
	  } // Fallback to just using the name if we couldn't make it throw.


	  var name = fn ? fn.displayName || fn.name : '';
	  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

	  {
	    if (typeof fn === 'function') {
	      componentFrameCache.set(fn, syntheticFrame);
	    }
	  }

	  return syntheticFrame;
	}
	function describeFunctionComponentFrame(fn, source, ownerFn) {
	  {
	    return describeNativeComponentFrame(fn, false);
	  }
	}

	function shouldConstruct(Component) {
	  var prototype = Component.prototype;
	  return !!(prototype && prototype.isReactComponent);
	}

	function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

	  if (type == null) {
	    return '';
	  }

	  if (typeof type === 'function') {
	    {
	      return describeNativeComponentFrame(type, shouldConstruct(type));
	    }
	  }

	  if (typeof type === 'string') {
	    return describeBuiltInComponentFrame(type);
	  }

	  switch (type) {
	    case REACT_SUSPENSE_TYPE:
	      return describeBuiltInComponentFrame('Suspense');

	    case REACT_SUSPENSE_LIST_TYPE:
	      return describeBuiltInComponentFrame('SuspenseList');
	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_FORWARD_REF_TYPE:
	        return describeFunctionComponentFrame(type.render);

	      case REACT_MEMO_TYPE:
	        // Memo may contain any component type so we recursively resolve it.
	        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            // Lazy may contain any component type so we recursively resolve it.
	            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
	          } catch (x) {}
	        }
	    }
	  }

	  return '';
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	var loggedTypeFailures = {};
	var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame.setExtraStackFrame(null);
	    }
	  }
	}

	function checkPropTypes(typeSpecs, values, location, componentName, element) {
	  {
	    // $FlowFixMe This is okay but Flow doesn't know it.
	    var has = Function.call.bind(hasOwnProperty);

	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.

	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            // eslint-disable-next-line react-internal/prod-error-codes
	            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
	            err.name = 'Invariant Violation';
	            throw err;
	          }

	          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
	        } catch (ex) {
	          error$1 = ex;
	        }

	        if (error$1 && !(error$1 instanceof Error)) {
	          setCurrentlyValidatingElement(element);

	          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

	          setCurrentlyValidatingElement(null);
	        }

	        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error$1.message] = true;
	          setCurrentlyValidatingElement(element);

	          error('Failed %s type: %s', location, error$1.message);

	          setCurrentlyValidatingElement(null);
	        }
	      }
	    }
	  }
	}

	var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

	function isArray(a) {
	  return isArrayImpl(a);
	}

	/*
	 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
	 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
	 *
	 * The functions in this module will throw an easier-to-understand,
	 * easier-to-debug exception with a clear errors message message explaining the
	 * problem. (Instead of a confusing exception thrown inside the implementation
	 * of the `value` object).
	 */
	// $FlowFixMe only called in DEV, so void return is not possible.
	function typeName(value) {
	  {
	    // toStringTag is needed for namespaced types like Temporal.Instant
	    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
	    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
	    return type;
	  }
	} // $FlowFixMe only called in DEV, so void return is not possible.


	function willCoercionThrow(value) {
	  {
	    try {
	      testStringCoercion(value);
	      return false;
	    } catch (e) {
	      return true;
	    }
	  }
	}

	function testStringCoercion(value) {
	  // If you ended up here by following an exception call stack, here's what's
	  // happened: you supplied an object or symbol value to React (as a prop, key,
	  // DOM attribute, CSS property, string ref, etc.) and when React tried to
	  // coerce it to a string using `'' + value`, an exception was thrown.
	  //
	  // The most common types that will cause this exception are `Symbol` instances
	  // and Temporal objects like `Temporal.Instant`. But any object that has a
	  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
	  // exception. (Library authors do this to prevent users from using built-in
	  // numeric operators like `+` or comparison operators like `>=` because custom
	  // methods are needed to perform accurate arithmetic or comparison.)
	  //
	  // To fix the problem, coerce this object or symbol value to a string before
	  // passing it to React. The most reliable way is usually `String(value)`.
	  //
	  // To find which value is throwing, check the browser or debugger console.
	  // Before this exception was thrown, there should be `console.error` output
	  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
	  // problem and how that type was used: key, atrribute, input value prop, etc.
	  // In most cases, this console output also shows the component and its
	  // ancestor components where the exception happened.
	  //
	  // eslint-disable-next-line react-internal/safe-string-coercion
	  return '' + value;
	}
	function checkKeyStringCoercion(value) {
	  {
	    if (willCoercionThrow(value)) {
	      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

	      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
	    }
	  }
	}

	var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};
	var specialPropKeyWarningShown;
	var specialPropRefWarningShown;
	var didWarnAboutStringRefs;

	{
	  didWarnAboutStringRefs = {};
	}

	function hasValidRef(config) {
	  {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.key !== undefined;
	}

	function warnIfStringRefCannotBeAutoConverted(config, self) {
	  {
	    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
	      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

	      if (!didWarnAboutStringRefs[componentName]) {
	        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);

	        didWarnAboutStringRefs[componentName] = true;
	      }
	    }
	  }
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingKey = function () {
	      if (!specialPropKeyWarningShown) {
	        specialPropKeyWarningShown = true;

	        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingKey.isReactWarning = true;
	    Object.defineProperty(props, 'key', {
	      get: warnAboutAccessingKey,
	      configurable: true
	    });
	  }
	}

	function defineRefPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingRef = function () {
	      if (!specialPropRefWarningShown) {
	        specialPropRefWarningShown = true;

	        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingRef.isReactWarning = true;
	    Object.defineProperty(props, 'ref', {
	      get: warnAboutAccessingRef,
	      configurable: true
	    });
	  }
	}
	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, instanceof check
	 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} props
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} owner
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @internal
	 */


	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allows us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,
	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,
	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.

	    Object.defineProperty(element._store, 'validated', {
	      configurable: false,
	      enumerable: false,
	      writable: true,
	      value: false
	    }); // self and source are DEV only properties.

	    Object.defineProperty(element, '_self', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: self
	    }); // Two elements created in two different places should be considered
	    // equal for testing purposes and therefore we hide it from enumeration.

	    Object.defineProperty(element, '_source', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: source
	    });

	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};
	/**
	 * https://github.com/reactjs/rfcs/pull/107
	 * @param {*} type
	 * @param {object} props
	 * @param {string} key
	 */

	function jsxDEV(type, config, maybeKey, source, self) {
	  {
	    var propName; // Reserved names are extracted

	    var props = {};
	    var key = null;
	    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
	    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
	    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
	    // but as an intermediary step, we will use jsxDEV for everything except
	    // <div {...props} key="Hi" />, because we aren't currently able to tell if
	    // key is explicitly declared to be undefined or not.

	    if (maybeKey !== undefined) {
	      {
	        checkKeyStringCoercion(maybeKey);
	      }

	      key = '' + maybeKey;
	    }

	    if (hasValidKey(config)) {
	      {
	        checkKeyStringCoercion(config.key);
	      }

	      key = '' + config.key;
	    }

	    if (hasValidRef(config)) {
	      ref = config.ref;
	      warnIfStringRefCannotBeAutoConverted(config, self);
	    } // Remaining properties are added to a new props object


	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    } // Resolve default props


	    if (type && type.defaultProps) {
	      var defaultProps = type.defaultProps;

	      for (propName in defaultProps) {
	        if (props[propName] === undefined) {
	          props[propName] = defaultProps[propName];
	        }
	      }
	    }

	    if (key || ref) {
	      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

	      if (key) {
	        defineKeyPropWarningGetter(props, displayName);
	      }

	      if (ref) {
	        defineRefPropWarningGetter(props, displayName);
	      }
	    }

	    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	  }
	}

	var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
	var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement$1(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
	    }
	  }
	}

	var propTypesMisspellWarningShown;

	{
	  propTypesMisspellWarningShown = false;
	}
	/**
	 * Verifies the object is a ReactElement.
	 * See https://reactjs.org/docs/react-api.html#isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a ReactElement.
	 * @final
	 */


	function isValidElement(object) {
	  {
	    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	  }
	}

	function getDeclarationErrorAddendum() {
	  {
	    if (ReactCurrentOwner$1.current) {
	      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

	      if (name) {
	        return '\n\nCheck the render method of `' + name + '`.';
	      }
	    }

	    return '';
	  }
	}

	function getSourceInfoErrorAddendum(source) {
	  {
	    if (source !== undefined) {
	      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
	      var lineNumber = source.lineNumber;
	      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
	    }

	    return '';
	  }
	}
	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */


	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  {
	    var info = getDeclarationErrorAddendum();

	    if (!info) {
	      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

	      if (parentName) {
	        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
	      }
	    }

	    return info;
	  }
	}
	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */


	function validateExplicitKey(element, parentType) {
	  {
	    if (!element._store || element._store.validated || element.key != null) {
	      return;
	    }

	    element._store.validated = true;
	    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

	    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
	      return;
	    }

	    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
	    // property, it may be the creator of the child that's responsible for
	    // assigning it a key.

	    var childOwner = '';

	    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
	      // Give the component that originally created this child.
	      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
	    }

	    setCurrentlyValidatingElement$1(element);

	    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

	    setCurrentlyValidatingElement$1(null);
	  }
	}
	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */


	function validateChildKeys(node, parentType) {
	  {
	    if (typeof node !== 'object') {
	      return;
	    }

	    if (isArray(node)) {
	      for (var i = 0; i < node.length; i++) {
	        var child = node[i];

	        if (isValidElement(child)) {
	          validateExplicitKey(child, parentType);
	        }
	      }
	    } else if (isValidElement(node)) {
	      // This element was passed in a valid location.
	      if (node._store) {
	        node._store.validated = true;
	      }
	    } else if (node) {
	      var iteratorFn = getIteratorFn(node);

	      if (typeof iteratorFn === 'function') {
	        // Entry iterators used to provide implicit keys,
	        // but now we print a separate warning for them later.
	        if (iteratorFn !== node.entries) {
	          var iterator = iteratorFn.call(node);
	          var step;

	          while (!(step = iterator.next()).done) {
	            if (isValidElement(step.value)) {
	              validateExplicitKey(step.value, parentType);
	            }
	          }
	        }
	      }
	    }
	  }
	}
	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */


	function validatePropTypes(element) {
	  {
	    var type = element.type;

	    if (type === null || type === undefined || typeof type === 'string') {
	      return;
	    }

	    var propTypes;

	    if (typeof type === 'function') {
	      propTypes = type.propTypes;
	    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
	    // Inner props are checked in the reconciler.
	    type.$$typeof === REACT_MEMO_TYPE)) {
	      propTypes = type.propTypes;
	    } else {
	      return;
	    }

	    if (propTypes) {
	      // Intentionally inside to avoid triggering lazy initializers:
	      var name = getComponentNameFromType(type);
	      checkPropTypes(propTypes, element.props, 'prop', name, element);
	    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
	      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

	      var _name = getComponentNameFromType(type);

	      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
	    }

	    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
	      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
	    }
	  }
	}
	/**
	 * Given a fragment, validate that it can only be provided with fragment props
	 * @param {ReactElement} fragment
	 */


	function validateFragmentProps(fragment) {
	  {
	    var keys = Object.keys(fragment.props);

	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];

	      if (key !== 'children' && key !== 'key') {
	        setCurrentlyValidatingElement$1(fragment);

	        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

	        setCurrentlyValidatingElement$1(null);
	        break;
	      }
	    }

	    if (fragment.ref !== null) {
	      setCurrentlyValidatingElement$1(fragment);

	      error('Invalid attribute `ref` supplied to `React.Fragment`.');

	      setCurrentlyValidatingElement$1(null);
	    }
	  }
	}

	var didWarnAboutKeySpread = {};
	function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
	  {
	    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.

	    if (!validType) {
	      var info = '';

	      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
	      }

	      var sourceInfo = getSourceInfoErrorAddendum(source);

	      if (sourceInfo) {
	        info += sourceInfo;
	      } else {
	        info += getDeclarationErrorAddendum();
	      }

	      var typeString;

	      if (type === null) {
	        typeString = 'null';
	      } else if (isArray(type)) {
	        typeString = 'array';
	      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
	        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
	        info = ' Did you accidentally export a JSX literal instead of a component?';
	      } else {
	        typeString = typeof type;
	      }

	      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
	    }

	    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.

	    if (element == null) {
	      return element;
	    } // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)


	    if (validType) {
	      var children = props.children;

	      if (children !== undefined) {
	        if (isStaticChildren) {
	          if (isArray(children)) {
	            for (var i = 0; i < children.length; i++) {
	              validateChildKeys(children[i], type);
	            }

	            if (Object.freeze) {
	              Object.freeze(children);
	            }
	          } else {
	            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
	          }
	        } else {
	          validateChildKeys(children, type);
	        }
	      }
	    }

	    {
	      if (hasOwnProperty.call(props, 'key')) {
	        var componentName = getComponentNameFromType(type);
	        var keys = Object.keys(props).filter(function (k) {
	          return k !== 'key';
	        });
	        var beforeExample = keys.length > 0 ? '{key: someKey, ' + keys.join(': ..., ') + ': ...}' : '{key: someKey}';

	        if (!didWarnAboutKeySpread[componentName + beforeExample]) {
	          var afterExample = keys.length > 0 ? '{' + keys.join(': ..., ') + ': ...}' : '{}';

	          error('A props object containing a "key" prop is being spread into JSX:\n' + '  let props = %s;\n' + '  <%s {...props} />\n' + 'React keys must be passed directly to JSX without using spread:\n' + '  let props = %s;\n' + '  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);

	          didWarnAboutKeySpread[componentName + beforeExample] = true;
	        }
	      }
	    }

	    if (type === REACT_FRAGMENT_TYPE) {
	      validateFragmentProps(element);
	    } else {
	      validatePropTypes(element);
	    }

	    return element;
	  }
	} // These two functions exist to still get child warnings in dev
	// even with the prod transform. This means that jsxDEV is purely
	// opt-in behavior for better messages but that we won't stop
	// giving you warnings if you use production apis.

	function jsxWithValidationStatic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, true);
	  }
	}
	function jsxWithValidationDynamic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, false);
	  }
	}

	var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
	// for now we can ship identical prod functions

	var jsxs =  jsxWithValidationStatic ;

	reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_development.jsx = jsx;
	reactJsxRuntime_development.jsxs = jsxs;
	  })();
	}
	return reactJsxRuntime_development;
}

var hasRequiredJsxRuntime;

function requireJsxRuntime () {
	if (hasRequiredJsxRuntime) return jsxRuntime.exports;
	hasRequiredJsxRuntime = 1;

	if (process.env.NODE_ENV === 'production') {
	  jsxRuntime.exports = requireReactJsxRuntime_production_min();
	} else {
	  jsxRuntime.exports = requireReactJsxRuntime_development();
	}
	return jsxRuntime.exports;
}

var jsxRuntimeExports = requireJsxRuntime();

var DefaultContext$1 = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext$1 = React__default.createContext && /*#__PURE__*/React__default.createContext(DefaultContext$1);

var _excluded$1 = ["attr", "size", "title"];
function _objectWithoutProperties$1(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
function _extends$2() { _extends$2 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }
function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty$1(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty$1(obj, key, value) { key = _toPropertyKey$1(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey$1(t) { var i = _toPrimitive$1(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive$1(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Tree2Element$1(tree) {
  return tree && tree.map((node, i) => /*#__PURE__*/React__default.createElement(node.tag, _objectSpread$1({
    key: i
  }, node.attr), Tree2Element$1(node.child)));
}
function GenIcon$1(data) {
  return props => /*#__PURE__*/React__default.createElement(IconBase$1, _extends$2({
    attr: _objectSpread$1({}, data.attr)
  }, props), Tree2Element$1(data.child));
}
function IconBase$1(props) {
  var elem = conf => {
    var {
        attr,
        size,
        title
      } = props,
      svgProps = _objectWithoutProperties$1(props, _excluded$1);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return /*#__PURE__*/React__default.createElement("svg", _extends$2({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: _objectSpread$1(_objectSpread$1({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /*#__PURE__*/React__default.createElement("title", null, title), props.children);
  };
  return IconContext$1 !== undefined ? /*#__PURE__*/React__default.createElement(IconContext$1.Consumer, null, conf => elem(conf)) : elem(DefaultContext$1);
}

// THIS FILE IS AUTO GENERATED
function HiArrowLeft (props) {
  return GenIcon$1({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z","clipRule":"evenodd"},"child":[]}]})(props);
}function HiArrowRight (props) {
  return GenIcon$1({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clipRule":"evenodd"},"child":[]}]})(props);
}function HiCalendar (props) {
  return GenIcon$1({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z","clipRule":"evenodd"},"child":[]}]})(props);
}function HiChevronDown (props) {
  return GenIcon$1({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clipRule":"evenodd"},"child":[]}]})(props);
}function HiChevronLeft (props) {
  return GenIcon$1({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clipRule":"evenodd"},"child":[]}]})(props);
}function HiChevronRight (props) {
  return GenIcon$1({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clipRule":"evenodd"},"child":[]}]})(props);
}function HiStar (props) {
  return GenIcon$1({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"},"child":[]}]})(props);
}function HiX (props) {
  return GenIcon$1({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clipRule":"evenodd"},"child":[]}]})(props);
}function HiOutlineChevronDown (props) {
  return GenIcon$1({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M19 9l-7 7-7-7"},"child":[]}]})(props);
}function HiOutlineChevronLeft (props) {
  return GenIcon$1({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15 19l-7-7 7-7"},"child":[]}]})(props);
}function HiOutlineChevronRight (props) {
  return GenIcon$1({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 5l7 7-7 7"},"child":[]}]})(props);
}function HiOutlineChevronUp (props) {
  return GenIcon$1({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M5 15l7-7 7 7"},"child":[]}]})(props);
}function HiOutlineX (props) {
  return GenIcon$1({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M6 18L18 6M6 6l12 12"},"child":[]}]})(props);
}

const CLASS_PART_SEPARATOR = '-';
function createClassGroupUtils(config) {
  const classMap = createClassMap(config);
  const {
    conflictingClassGroups,
    conflictingClassGroupModifiers
  } = config;
  function getClassGroupId(className) {
    const classParts = className.split(CLASS_PART_SEPARATOR);
    // Classes like `-inset-1` produce an empty string as first classPart. We assume that classes for negative values are used correctly and remove it from classParts.
    if (classParts[0] === '' && classParts.length !== 1) {
      classParts.shift();
    }
    return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
  }
  function getConflictingClassGroupIds(classGroupId, hasPostfixModifier) {
    const conflicts = conflictingClassGroups[classGroupId] || [];
    if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
      return [...conflicts, ...conflictingClassGroupModifiers[classGroupId]];
    }
    return conflicts;
  }
  return {
    getClassGroupId,
    getConflictingClassGroupIds
  };
}
function getGroupRecursive(classParts, classPartObject) {
  if (classParts.length === 0) {
    return classPartObject.classGroupId;
  }
  const currentClassPart = classParts[0];
  const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : undefined;
  if (classGroupFromNextClassPart) {
    return classGroupFromNextClassPart;
  }
  if (classPartObject.validators.length === 0) {
    return undefined;
  }
  const classRest = classParts.join(CLASS_PART_SEPARATOR);
  return classPartObject.validators.find(({
    validator
  }) => validator(classRest))?.classGroupId;
}
const arbitraryPropertyRegex = /^\[(.+)\]$/;
function getGroupIdForArbitraryProperty(className) {
  if (arbitraryPropertyRegex.test(className)) {
    const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
    const property = arbitraryPropertyClassName?.substring(0, arbitraryPropertyClassName.indexOf(':'));
    if (property) {
      // I use two dots here because one dot is used as prefix for class groups in plugins
      return 'arbitrary..' + property;
    }
  }
}
/**
 * Exported for testing only
 */
function createClassMap(config) {
  const {
    theme,
    prefix
  } = config;
  const classMap = {
    nextPart: new Map(),
    validators: []
  };
  const prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
  prefixedClassGroupEntries.forEach(([classGroupId, classGroup]) => {
    processClassesRecursively(classGroup, classMap, classGroupId, theme);
  });
  return classMap;
}
function processClassesRecursively(classGroup, classPartObject, classGroupId, theme) {
  classGroup.forEach(classDefinition => {
    if (typeof classDefinition === 'string') {
      const classPartObjectToEdit = classDefinition === '' ? classPartObject : getPart(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }
    if (typeof classDefinition === 'function') {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId
      });
      return;
    }
    Object.entries(classDefinition).forEach(([key, classGroup]) => {
      processClassesRecursively(classGroup, getPart(classPartObject, key), classGroupId, theme);
    });
  });
}
function getPart(classPartObject, path) {
  let currentClassPartObject = classPartObject;
  path.split(CLASS_PART_SEPARATOR).forEach(pathPart => {
    if (!currentClassPartObject.nextPart.has(pathPart)) {
      currentClassPartObject.nextPart.set(pathPart, {
        nextPart: new Map(),
        validators: []
      });
    }
    currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  });
  return currentClassPartObject;
}
function isThemeGetter(func) {
  return func.isThemeGetter;
}
function getPrefixedClassGroupEntries(classGroupEntries, prefix) {
  if (!prefix) {
    return classGroupEntries;
  }
  return classGroupEntries.map(([classGroupId, classGroup]) => {
    const prefixedClassGroup = classGroup.map(classDefinition => {
      if (typeof classDefinition === 'string') {
        return prefix + classDefinition;
      }
      if (typeof classDefinition === 'object') {
        return Object.fromEntries(Object.entries(classDefinition).map(([key, value]) => [prefix + key, value]));
      }
      return classDefinition;
    });
    return [classGroupId, prefixedClassGroup];
  });
}

// LRU cache inspired from hashlru (https://github.com/dominictarr/hashlru/blob/v1.0.4/index.js) but object replaced with Map to improve performance
function createLruCache(maxCacheSize) {
  if (maxCacheSize < 1) {
    return {
      get: () => undefined,
      set: () => {}
    };
  }
  let cacheSize = 0;
  let cache = new Map();
  let previousCache = new Map();
  function update(key, value) {
    cache.set(key, value);
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache;
      cache = new Map();
    }
  }
  return {
    get(key) {
      let value = cache.get(key);
      if (value !== undefined) {
        return value;
      }
      if ((value = previousCache.get(key)) !== undefined) {
        update(key, value);
        return value;
      }
    },
    set(key, value) {
      if (cache.has(key)) {
        cache.set(key, value);
      } else {
        update(key, value);
      }
    }
  };
}
const IMPORTANT_MODIFIER = '!';
function createParseClassName(config) {
  const {
    separator,
    experimentalParseClassName
  } = config;
  const isSeparatorSingleCharacter = separator.length === 1;
  const firstSeparatorCharacter = separator[0];
  const separatorLength = separator.length;
  // parseClassName inspired by https://github.com/tailwindlabs/tailwindcss/blob/v3.2.2/src/util/splitAtTopLevelOnly.js
  function parseClassName(className) {
    const modifiers = [];
    let bracketDepth = 0;
    let modifierStart = 0;
    let postfixModifierPosition;
    for (let index = 0; index < className.length; index++) {
      let currentCharacter = className[index];
      if (bracketDepth === 0) {
        if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index, index + separatorLength) === separator)) {
          modifiers.push(className.slice(modifierStart, index));
          modifierStart = index + separatorLength;
          continue;
        }
        if (currentCharacter === '/') {
          postfixModifierPosition = index;
          continue;
        }
      }
      if (currentCharacter === '[') {
        bracketDepth++;
      } else if (currentCharacter === ']') {
        bracketDepth--;
      }
    }
    const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
    const hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
    const baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
    const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : undefined;
    return {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    };
  }
  if (experimentalParseClassName) {
    return function parseClassNameExperimental(className) {
      return experimentalParseClassName({
        className,
        parseClassName
      });
    };
  }
  return parseClassName;
}
/**
 * Sorts modifiers according to following schema:
 * - Predefined modifiers are sorted alphabetically
 * - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
 */
function sortModifiers(modifiers) {
  if (modifiers.length <= 1) {
    return modifiers;
  }
  const sortedModifiers = [];
  let unsortedModifiers = [];
  modifiers.forEach(modifier => {
    const isArbitraryVariant = modifier[0] === '[';
    if (isArbitraryVariant) {
      sortedModifiers.push(...unsortedModifiers.sort(), modifier);
      unsortedModifiers = [];
    } else {
      unsortedModifiers.push(modifier);
    }
  });
  sortedModifiers.push(...unsortedModifiers.sort());
  return sortedModifiers;
}
function createConfigUtils(config) {
  return {
    cache: createLruCache(config.cacheSize),
    parseClassName: createParseClassName(config),
    ...createClassGroupUtils(config)
  };
}
const SPLIT_CLASSES_REGEX = /\s+/;
function mergeClassList(classList, configUtils) {
  const {
    parseClassName,
    getClassGroupId,
    getConflictingClassGroupIds
  } = configUtils;
  /**
   * Set of classGroupIds in following format:
   * `{importantModifier}{variantModifiers}{classGroupId}`
   * @example 'float'
   * @example 'hover:focus:bg-color'
   * @example 'md:!pr'
   */
  const classGroupsInConflict = new Set();
  return classList.trim().split(SPLIT_CLASSES_REGEX).map(originalClassName => {
    const {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    } = parseClassName(originalClassName);
    let hasPostfixModifier = Boolean(maybePostfixModifierPosition);
    let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    if (!classGroupId) {
      if (!hasPostfixModifier) {
        return {
          isTailwindClass: false,
          originalClassName
        };
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        return {
          isTailwindClass: false,
          originalClassName
        };
      }
      hasPostfixModifier = false;
    }
    const variantModifier = sortModifiers(modifiers).join(':');
    const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    return {
      isTailwindClass: true,
      modifierId,
      classGroupId,
      originalClassName,
      hasPostfixModifier
    };
  }).reverse()
  // Last class in conflict wins, so we need to filter conflicting classes in reverse order.
  .filter(parsed => {
    if (!parsed.isTailwindClass) {
      return true;
    }
    const {
      modifierId,
      classGroupId,
      hasPostfixModifier
    } = parsed;
    const classId = modifierId + classGroupId;
    if (classGroupsInConflict.has(classId)) {
      return false;
    }
    classGroupsInConflict.add(classId);
    getConflictingClassGroupIds(classGroupId, hasPostfixModifier).forEach(group => classGroupsInConflict.add(modifierId + group));
    return true;
  }).reverse().map(parsed => parsed.originalClassName).join(' ');
}

/**
 * The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
 *
 * Specifically:
 * - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
 * - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
 *
 * Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
 */
function twJoin() {
  let index = 0;
  let argument;
  let resolvedValue;
  let string = '';
  while (index < arguments.length) {
    if (argument = arguments[index++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += ' ');
        string += resolvedValue;
      }
    }
  }
  return string;
}
function toValue(mix) {
  if (typeof mix === 'string') {
    return mix;
  }
  let resolvedValue;
  let string = '';
  for (let k = 0; k < mix.length; k++) {
    if (mix[k]) {
      if (resolvedValue = toValue(mix[k])) {
        string && (string += ' ');
        string += resolvedValue;
      }
    }
  }
  return string;
}
function createTailwindMerge(createConfigFirst, ...createConfigRest) {
  let configUtils;
  let cacheGet;
  let cacheSet;
  let functionToCall = initTailwindMerge;
  function initTailwindMerge(classList) {
    const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  }
  function tailwindMerge(classList) {
    const cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    const result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  }
  return function callTailwindMerge() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}
function fromTheme(key) {
  const themeGetter = theme => theme[key] || [];
  themeGetter.isThemeGetter = true;
  return themeGetter;
}
const arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
const fractionRegex = /^\d+\/\d+$/;
const stringLengths = /*#__PURE__*/new Set(['px', 'full', 'screen']);
const tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
const lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
const colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
// Shadow always begins with x and y offset separated by underscore optionally prepended by inset
const shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
const imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function isLength(value) {
  return isNumber(value) || stringLengths.has(value) || fractionRegex.test(value);
}
function isArbitraryLength(value) {
  return getIsArbitraryValue(value, 'length', isLengthOnly);
}
function isNumber(value) {
  return Boolean(value) && !Number.isNaN(Number(value));
}
function isArbitraryNumber(value) {
  return getIsArbitraryValue(value, 'number', isNumber);
}
function isInteger(value) {
  return Boolean(value) && Number.isInteger(Number(value));
}
function isPercent(value) {
  return value.endsWith('%') && isNumber(value.slice(0, -1));
}
function isArbitraryValue(value) {
  return arbitraryValueRegex.test(value);
}
function isTshirtSize(value) {
  return tshirtUnitRegex.test(value);
}
const sizeLabels = /*#__PURE__*/new Set(['length', 'size', 'percentage']);
function isArbitrarySize(value) {
  return getIsArbitraryValue(value, sizeLabels, isNever);
}
function isArbitraryPosition(value) {
  return getIsArbitraryValue(value, 'position', isNever);
}
const imageLabels = /*#__PURE__*/new Set(['image', 'url']);
function isArbitraryImage(value) {
  return getIsArbitraryValue(value, imageLabels, isImage);
}
function isArbitraryShadow(value) {
  return getIsArbitraryValue(value, '', isShadow);
}
function isAny() {
  return true;
}
function getIsArbitraryValue(value, label, testValue) {
  const result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return typeof label === 'string' ? result[1] === label : label.has(result[1]);
    }
    return testValue(result[2]);
  }
  return false;
}
function isLengthOnly(value) {
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  return lengthUnitRegex.test(value) && !colorFunctionRegex.test(value);
}
function isNever() {
  return false;
}
function isShadow(value) {
  return shadowRegex.test(value);
}
function isImage(value) {
  return imageRegex.test(value);
}
function getDefaultConfig() {
  const colors = fromTheme('colors');
  const spacing = fromTheme('spacing');
  const blur = fromTheme('blur');
  const brightness = fromTheme('brightness');
  const borderColor = fromTheme('borderColor');
  const borderRadius = fromTheme('borderRadius');
  const borderSpacing = fromTheme('borderSpacing');
  const borderWidth = fromTheme('borderWidth');
  const contrast = fromTheme('contrast');
  const grayscale = fromTheme('grayscale');
  const hueRotate = fromTheme('hueRotate');
  const invert = fromTheme('invert');
  const gap = fromTheme('gap');
  const gradientColorStops = fromTheme('gradientColorStops');
  const gradientColorStopPositions = fromTheme('gradientColorStopPositions');
  const inset = fromTheme('inset');
  const margin = fromTheme('margin');
  const opacity = fromTheme('opacity');
  const padding = fromTheme('padding');
  const saturate = fromTheme('saturate');
  const scale = fromTheme('scale');
  const sepia = fromTheme('sepia');
  const skew = fromTheme('skew');
  const space = fromTheme('space');
  const translate = fromTheme('translate');
  const getOverscroll = () => ['auto', 'contain', 'none'];
  const getOverflow = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'];
  const getSpacingWithAutoAndArbitrary = () => ['auto', isArbitraryValue, spacing];
  const getSpacingWithArbitrary = () => [isArbitraryValue, spacing];
  const getLengthWithEmptyAndArbitrary = () => ['', isLength, isArbitraryLength];
  const getNumberWithAutoAndArbitrary = () => ['auto', isNumber, isArbitraryValue];
  const getPositions = () => ['bottom', 'center', 'left', 'left-bottom', 'left-top', 'right', 'right-bottom', 'right-top', 'top'];
  const getLineStyles = () => ['solid', 'dashed', 'dotted', 'double', 'none'];
  const getBlendModes = () => ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity'];
  const getAlign = () => ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'];
  const getZeroAndEmpty = () => ['', '0', isArbitraryValue];
  const getBreaks = () => ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'];
  const getNumber = () => [isNumber, isArbitraryNumber];
  const getNumberAndArbitrary = () => [isNumber, isArbitraryValue];
  return {
    cacheSize: 500,
    separator: ':',
    theme: {
      colors: [isAny],
      spacing: [isLength, isArbitraryLength],
      blur: ['none', '', isTshirtSize, isArbitraryValue],
      brightness: getNumber(),
      borderColor: [colors],
      borderRadius: ['none', '', 'full', isTshirtSize, isArbitraryValue],
      borderSpacing: getSpacingWithArbitrary(),
      borderWidth: getLengthWithEmptyAndArbitrary(),
      contrast: getNumber(),
      grayscale: getZeroAndEmpty(),
      hueRotate: getNumberAndArbitrary(),
      invert: getZeroAndEmpty(),
      gap: getSpacingWithArbitrary(),
      gradientColorStops: [colors],
      gradientColorStopPositions: [isPercent, isArbitraryLength],
      inset: getSpacingWithAutoAndArbitrary(),
      margin: getSpacingWithAutoAndArbitrary(),
      opacity: getNumber(),
      padding: getSpacingWithArbitrary(),
      saturate: getNumber(),
      scale: getNumber(),
      sepia: getZeroAndEmpty(),
      skew: getNumberAndArbitrary(),
      space: getSpacingWithArbitrary(),
      translate: getSpacingWithArbitrary()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ['auto', 'square', 'video', isArbitraryValue]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ['container'],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isTshirtSize]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      'break-after': [{
        'break-after': getBreaks()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      'break-before': [{
        'break-before': getBreaks()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      'break-inside': [{
        'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column']
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      'box-decoration': [{
        'box-decoration': ['slice', 'clone']
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ['border', 'content']
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ['right', 'left', 'none', 'start', 'end']
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ['left', 'right', 'both', 'none', 'start', 'end']
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ['isolate', 'isolation-auto'],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      'object-fit': [{
        object: ['contain', 'cover', 'fill', 'none', 'scale-down']
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      'object-position': [{
        object: [...getPositions(), isArbitraryValue]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: getOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      'overflow-x': [{
        'overflow-x': getOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      'overflow-y': [{
        'overflow-y': getOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: getOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      'overscroll-x': [{
        'overscroll-x': getOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      'overscroll-y': [{
        'overscroll-y': getOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [inset]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-x': [{
        'inset-x': [inset]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-y': [{
        'inset-y': [inset]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [inset]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [inset]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [inset]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [inset]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [inset]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [inset]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ['visible', 'invisible', 'collapse'],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ['auto', isInteger, isArbitraryValue]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: getSpacingWithAutoAndArbitrary()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      'flex-direction': [{
        flex: ['row', 'row-reverse', 'col', 'col-reverse']
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      'flex-wrap': [{
        flex: ['wrap', 'wrap-reverse', 'nowrap']
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ['1', 'auto', 'initial', 'none', isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: getZeroAndEmpty()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: getZeroAndEmpty()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ['first', 'last', 'none', isInteger, isArbitraryValue]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      'grid-cols': [{
        'grid-cols': [isAny]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-start-end': [{
        col: ['auto', {
          span: ['full', isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-start': [{
        'col-start': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-end': [{
        'col-end': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      'grid-rows': [{
        'grid-rows': [isAny]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-start-end': [{
        row: ['auto', {
          span: [isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-start': [{
        'row-start': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-end': [{
        'row-end': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      'grid-flow': [{
        'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense']
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      'auto-cols': [{
        'auto-cols': ['auto', 'min', 'max', 'fr', isArbitraryValue]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      'auto-rows': [{
        'auto-rows': ['auto', 'min', 'max', 'fr', isArbitraryValue]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [gap]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      'gap-x': [{
        'gap-x': [gap]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      'gap-y': [{
        'gap-y': [gap]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      'justify-content': [{
        justify: ['normal', ...getAlign()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      'justify-items': [{
        'justify-items': ['start', 'end', 'center', 'stretch']
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      'justify-self': [{
        'justify-self': ['auto', 'start', 'end', 'center', 'stretch']
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      'align-content': [{
        content: ['normal', ...getAlign(), 'baseline']
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      'align-items': [{
        items: ['start', 'end', 'center', 'baseline', 'stretch']
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      'align-self': [{
        self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline']
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      'place-content': [{
        'place-content': [...getAlign(), 'baseline']
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      'place-items': [{
        'place-items': ['start', 'end', 'center', 'baseline', 'stretch']
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      'place-self': [{
        'place-self': ['auto', 'start', 'end', 'center', 'stretch']
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [padding]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [padding]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [padding]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [padding]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [padding]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [padding]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [padding]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [padding]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [padding]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [margin]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [margin]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [margin]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [margin]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [margin]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [margin]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [margin]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [margin]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [margin]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      'space-x': [{
        'space-x': [space]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      'space-x-reverse': ['space-x-reverse'],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      'space-y': [{
        'space-y': [space]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      'space-y-reverse': ['space-y-reverse'],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ['auto', 'min', 'max', 'fit', 'svw', 'lvw', 'dvw', isArbitraryValue, spacing]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      'min-w': [{
        'min-w': [isArbitraryValue, spacing, 'min', 'max', 'fit']
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      'max-w': [{
        'max-w': [isArbitraryValue, spacing, 'none', 'full', 'min', 'max', 'fit', 'prose', {
          screen: [isTshirtSize]
        }, isTshirtSize]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [isArbitraryValue, spacing, 'auto', 'min', 'max', 'fit', 'svh', 'lvh', 'dvh']
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      'min-h': [{
        'min-h': [isArbitraryValue, spacing, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh']
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      'max-h': [{
        'max-h': [isArbitraryValue, spacing, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh']
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [isArbitraryValue, spacing, 'auto', 'min', 'max', 'fit']
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      'font-size': [{
        text: ['base', isTshirtSize, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      'font-smoothing': ['antialiased', 'subpixel-antialiased'],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      'font-style': ['italic', 'not-italic'],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      'font-weight': [{
        font: ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black', isArbitraryNumber]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      'font-family': [{
        font: [isAny]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-normal': ['normal-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-ordinal': ['ordinal'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-slashed-zero': ['slashed-zero'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-figure': ['lining-nums', 'oldstyle-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-spacing': ['proportional-nums', 'tabular-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-fraction': ['diagonal-fractions', 'stacked-fractons'],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest', isArbitraryValue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      'line-clamp': [{
        'line-clamp': ['none', isNumber, isArbitraryNumber]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', isLength, isArbitraryValue]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      'list-image': [{
        'list-image': ['none', isArbitraryValue]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      'list-style-type': [{
        list: ['none', 'disc', 'decimal', isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      'list-style-position': [{
        list: ['inside', 'outside']
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      'placeholder-color': [{
        placeholder: [colors]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      'placeholder-opacity': [{
        'placeholder-opacity': [opacity]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      'text-alignment': [{
        text: ['left', 'center', 'right', 'justify', 'start', 'end']
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      'text-color': [{
        text: [colors]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      'text-opacity': [{
        'text-opacity': [opacity]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      'text-decoration-style': [{
        decoration: [...getLineStyles(), 'wavy']
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      'text-decoration-thickness': [{
        decoration: ['auto', 'from-font', isLength, isArbitraryLength]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      'underline-offset': [{
        'underline-offset': ['auto', isLength, isArbitraryValue]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      'text-decoration-color': [{
        decoration: [colors]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      'text-wrap': [{
        text: ['wrap', 'nowrap', 'balance', 'pretty']
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: getSpacingWithArbitrary()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      'vertical-align': [{
        align: ['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom', 'sub', 'super', isArbitraryValue]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces']
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ['normal', 'words', 'all', 'keep']
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ['none', 'manual', 'auto']
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ['none', isArbitraryValue]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      'bg-attachment': [{
        bg: ['fixed', 'local', 'scroll']
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      'bg-clip': [{
        'bg-clip': ['border', 'padding', 'content', 'text']
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      'bg-opacity': [{
        'bg-opacity': [opacity]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      'bg-origin': [{
        'bg-origin': ['border', 'padding', 'content']
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      'bg-position': [{
        bg: [...getPositions(), isArbitraryPosition]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      'bg-repeat': [{
        bg: ['no-repeat', {
          repeat: ['', 'x', 'y', 'round', 'space']
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      'bg-size': [{
        bg: ['auto', 'cover', 'contain', isArbitrarySize]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      'bg-image': [{
        bg: ['none', {
          'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl']
        }, isArbitraryImage]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      'bg-color': [{
        bg: [colors]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-from-pos': [{
        from: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-via-pos': [{
        via: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-to-pos': [{
        to: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-from': [{
        from: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-via': [{
        via: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-to': [{
        to: [gradientColorStops]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [borderRadius]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-s': [{
        'rounded-s': [borderRadius]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-e': [{
        'rounded-e': [borderRadius]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-t': [{
        'rounded-t': [borderRadius]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-r': [{
        'rounded-r': [borderRadius]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-b': [{
        'rounded-b': [borderRadius]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-l': [{
        'rounded-l': [borderRadius]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-ss': [{
        'rounded-ss': [borderRadius]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-se': [{
        'rounded-se': [borderRadius]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-ee': [{
        'rounded-ee': [borderRadius]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-es': [{
        'rounded-es': [borderRadius]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-tl': [{
        'rounded-tl': [borderRadius]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-tr': [{
        'rounded-tr': [borderRadius]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-br': [{
        'rounded-br': [borderRadius]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-bl': [{
        'rounded-bl': [borderRadius]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w': [{
        border: [borderWidth]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-x': [{
        'border-x': [borderWidth]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-y': [{
        'border-y': [borderWidth]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-s': [{
        'border-s': [borderWidth]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-e': [{
        'border-e': [borderWidth]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-t': [{
        'border-t': [borderWidth]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-r': [{
        'border-r': [borderWidth]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-b': [{
        'border-b': [borderWidth]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-l': [{
        'border-l': [borderWidth]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      'border-opacity': [{
        'border-opacity': [opacity]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      'border-style': [{
        border: [...getLineStyles(), 'hidden']
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-x': [{
        'divide-x': [borderWidth]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-x-reverse': ['divide-x-reverse'],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-y': [{
        'divide-y': [borderWidth]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-y-reverse': ['divide-y-reverse'],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      'divide-opacity': [{
        'divide-opacity': [opacity]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      'divide-style': [{
        divide: getLineStyles()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color': [{
        border: [borderColor]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-x': [{
        'border-x': [borderColor]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-y': [{
        'border-y': [borderColor]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-t': [{
        'border-t': [borderColor]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-r': [{
        'border-r': [borderColor]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-b': [{
        'border-b': [borderColor]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-l': [{
        'border-l': [borderColor]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      'divide-color': [{
        divide: [borderColor]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      'outline-style': [{
        outline: ['', ...getLineStyles()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      'outline-offset': [{
        'outline-offset': [isLength, isArbitraryValue]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      'outline-w': [{
        outline: [isLength, isArbitraryLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      'outline-color': [{
        outline: [colors]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      'ring-w': [{
        ring: getLengthWithEmptyAndArbitrary()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      'ring-w-inset': ['ring-inset'],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      'ring-color': [{
        ring: [colors]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      'ring-opacity': [{
        'ring-opacity': [opacity]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      'ring-offset-w': [{
        'ring-offset': [isLength, isArbitraryLength]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      'ring-offset-color': [{
        'ring-offset': [colors]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ['', 'inner', 'none', isTshirtSize, isArbitraryShadow]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      'shadow-color': [{
        shadow: [isAny]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [opacity]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      'mix-blend': [{
        'mix-blend': [...getBlendModes(), 'plus-lighter', 'plus-darker']
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      'bg-blend': [{
        'bg-blend': getBlendModes()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ['', 'none']
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [blur]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [brightness]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [contrast]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      'drop-shadow': [{
        'drop-shadow': ['', 'none', isTshirtSize, isArbitraryValue]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [grayscale]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      'hue-rotate': [{
        'hue-rotate': [hueRotate]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [invert]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [saturate]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [sepia]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      'backdrop-filter': [{
        'backdrop-filter': ['', 'none']
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      'backdrop-blur': [{
        'backdrop-blur': [blur]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      'backdrop-brightness': [{
        'backdrop-brightness': [brightness]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      'backdrop-contrast': [{
        'backdrop-contrast': [contrast]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      'backdrop-grayscale': [{
        'backdrop-grayscale': [grayscale]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      'backdrop-hue-rotate': [{
        'backdrop-hue-rotate': [hueRotate]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      'backdrop-invert': [{
        'backdrop-invert': [invert]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      'backdrop-opacity': [{
        'backdrop-opacity': [opacity]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      'backdrop-saturate': [{
        'backdrop-saturate': [saturate]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      'backdrop-sepia': [{
        'backdrop-sepia': [sepia]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      'border-collapse': [{
        border: ['collapse', 'separate']
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing': [{
        'border-spacing': [borderSpacing]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing-x': [{
        'border-spacing-x': [borderSpacing]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing-y': [{
        'border-spacing-y': [borderSpacing]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      'table-layout': [{
        table: ['auto', 'fixed']
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ['top', 'bottom']
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ['none', 'all', '', 'colors', 'opacity', 'shadow', 'transform', isArbitraryValue]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: getNumberAndArbitrary()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ['linear', 'in', 'out', 'in-out', isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: getNumberAndArbitrary()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ['none', 'spin', 'ping', 'pulse', 'bounce', isArbitraryValue]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ['', 'gpu', 'none']
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [scale]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-x': [{
        'scale-x': [scale]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-y': [{
        'scale-y': [scale]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [isInteger, isArbitraryValue]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-x': [{
        'translate-x': [translate]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-y': [{
        'translate-y': [translate]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      'skew-x': [{
        'skew-x': [skew]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      'skew-y': [{
        'skew-y': [skew]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      'transform-origin': [{
        origin: ['center', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', 'top-left', isArbitraryValue]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ['auto', colors]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ['none', 'auto']
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ['auto', 'default', 'pointer', 'wait', 'text', 'move', 'help', 'not-allowed', 'none', 'context-menu', 'progress', 'cell', 'crosshair', 'vertical-text', 'alias', 'copy', 'no-drop', 'grab', 'grabbing', 'all-scroll', 'col-resize', 'row-resize', 'n-resize', 'e-resize', 's-resize', 'w-resize', 'ne-resize', 'nw-resize', 'se-resize', 'sw-resize', 'ew-resize', 'ns-resize', 'nesw-resize', 'nwse-resize', 'zoom-in', 'zoom-out', isArbitraryValue]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      'caret-color': [{
        caret: [colors]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      'pointer-events': [{
        'pointer-events': ['none', 'auto']
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ['none', 'y', 'x', '']
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      'scroll-behavior': [{
        scroll: ['auto', 'smooth']
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-m': [{
        'scroll-m': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mx': [{
        'scroll-mx': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-my': [{
        'scroll-my': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-ms': [{
        'scroll-ms': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-me': [{
        'scroll-me': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mt': [{
        'scroll-mt': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mr': [{
        'scroll-mr': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mb': [{
        'scroll-mb': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-ml': [{
        'scroll-ml': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-p': [{
        'scroll-p': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-px': [{
        'scroll-px': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-py': [{
        'scroll-py': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-ps': [{
        'scroll-ps': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pe': [{
        'scroll-pe': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pt': [{
        'scroll-pt': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pr': [{
        'scroll-pr': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pb': [{
        'scroll-pb': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pl': [{
        'scroll-pl': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      'snap-align': [{
        snap: ['start', 'end', 'center', 'align-none']
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      'snap-stop': [{
        snap: ['normal', 'always']
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      'snap-type': [{
        snap: ['none', 'x', 'y', 'both']
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      'snap-strictness': [{
        snap: ['mandatory', 'proximity']
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ['auto', 'none', 'manipulation']
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      'touch-x': [{
        'touch-pan': ['x', 'left', 'right']
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      'touch-y': [{
        'touch-pan': ['y', 'up', 'down']
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      'touch-pz': ['touch-pinch-zoom'],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ['none', 'text', 'all', 'auto']
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      'will-change': [{
        'will-change': ['auto', 'scroll', 'contents', 'transform', isArbitraryValue]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [colors, 'none']
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      'stroke-w': [{
        stroke: [isLength, isArbitraryLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [colors, 'none']
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ['sr-only', 'not-sr-only'],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      'forced-color-adjust': [{
        'forced-color-adjust': ['auto', 'none']
      }]
    },
    conflictingClassGroups: {
      overflow: ['overflow-x', 'overflow-y'],
      overscroll: ['overscroll-x', 'overscroll-y'],
      inset: ['inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left'],
      'inset-x': ['right', 'left'],
      'inset-y': ['top', 'bottom'],
      flex: ['basis', 'grow', 'shrink'],
      gap: ['gap-x', 'gap-y'],
      p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
      px: ['pr', 'pl'],
      py: ['pt', 'pb'],
      m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
      mx: ['mr', 'ml'],
      my: ['mt', 'mb'],
      size: ['w', 'h'],
      'font-size': ['leading'],
      'fvn-normal': ['fvn-ordinal', 'fvn-slashed-zero', 'fvn-figure', 'fvn-spacing', 'fvn-fraction'],
      'fvn-ordinal': ['fvn-normal'],
      'fvn-slashed-zero': ['fvn-normal'],
      'fvn-figure': ['fvn-normal'],
      'fvn-spacing': ['fvn-normal'],
      'fvn-fraction': ['fvn-normal'],
      'line-clamp': ['display', 'overflow'],
      rounded: ['rounded-s', 'rounded-e', 'rounded-t', 'rounded-r', 'rounded-b', 'rounded-l', 'rounded-ss', 'rounded-se', 'rounded-ee', 'rounded-es', 'rounded-tl', 'rounded-tr', 'rounded-br', 'rounded-bl'],
      'rounded-s': ['rounded-ss', 'rounded-es'],
      'rounded-e': ['rounded-se', 'rounded-ee'],
      'rounded-t': ['rounded-tl', 'rounded-tr'],
      'rounded-r': ['rounded-tr', 'rounded-br'],
      'rounded-b': ['rounded-br', 'rounded-bl'],
      'rounded-l': ['rounded-tl', 'rounded-bl'],
      'border-spacing': ['border-spacing-x', 'border-spacing-y'],
      'border-w': ['border-w-s', 'border-w-e', 'border-w-t', 'border-w-r', 'border-w-b', 'border-w-l'],
      'border-w-x': ['border-w-r', 'border-w-l'],
      'border-w-y': ['border-w-t', 'border-w-b'],
      'border-color': ['border-color-t', 'border-color-r', 'border-color-b', 'border-color-l'],
      'border-color-x': ['border-color-r', 'border-color-l'],
      'border-color-y': ['border-color-t', 'border-color-b'],
      'scroll-m': ['scroll-mx', 'scroll-my', 'scroll-ms', 'scroll-me', 'scroll-mt', 'scroll-mr', 'scroll-mb', 'scroll-ml'],
      'scroll-mx': ['scroll-mr', 'scroll-ml'],
      'scroll-my': ['scroll-mt', 'scroll-mb'],
      'scroll-p': ['scroll-px', 'scroll-py', 'scroll-ps', 'scroll-pe', 'scroll-pt', 'scroll-pr', 'scroll-pb', 'scroll-pl'],
      'scroll-px': ['scroll-pr', 'scroll-pl'],
      'scroll-py': ['scroll-pt', 'scroll-pb'],
      touch: ['touch-x', 'touch-y', 'touch-pz'],
      'touch-x': ['touch'],
      'touch-y': ['touch'],
      'touch-pz': ['touch']
    },
    conflictingClassGroupModifiers: {
      'font-size': ['leading']
    }
  };
}
const twMerge = /*#__PURE__*/createTailwindMerge(getDefaultConfig);

function isObject(item) {
  return item !== null && typeof item === "object" && item.constructor === Object;
}

function cloneDeep(source) {
  if (!isObject(source)) {
    return source;
  }
  const output = {};
  for (const key in source) {
    output[key] = cloneDeep(source[key]);
  }
  return output;
}

function mergeDeep(target, source) {
  if (isObject(source) && Object.keys(source).length === 0) {
    return cloneDeep({ ...target, ...source });
  }
  const output = { ...target, ...source };
  if (isObject(source) && isObject(target)) {
    for (const key in source) {
      if (isObject(source[key]) && key in target && isObject(target[key])) {
        output[key] = mergeDeep(target[key], source[key]);
      } else {
        output[key] = isObject(source[key]) ? cloneDeep(source[key]) : source[key];
      }
    }
  }
  return output;
}

function createTheme$2(input) {
  return input;
}

const accordionTheme = createTheme$2({
  root: {
    base: "divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700",
    flush: {
      off: "rounded-lg border",
      on: "border-b"
    }
  },
  content: {
    base: "p-5 first:rounded-t-lg last:rounded-b-lg dark:bg-gray-900"
  },
  title: {
    arrow: {
      base: "h-6 w-6 shrink-0",
      open: {
        off: "",
        on: "rotate-180"
      }
    },
    base: "flex w-full items-center justify-between p-5 text-left font-medium text-gray-500 first:rounded-t-lg last:rounded-b-lg dark:text-gray-400",
    flush: {
      off: "hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800",
      on: "bg-transparent dark:bg-transparent"
    },
    heading: "",
    open: {
      off: "",
      on: "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white"
    }
  }
});

const alertTheme = createTheme$2({
  base: "flex flex-col gap-2 p-4 text-sm",
  borderAccent: "border-t-4",
  closeButton: {
    base: "-m-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-2",
    icon: "h-5 w-5",
    color: {
      info: "bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300",
      gray: "bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white",
      failure: "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",
      success: "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300",
      warning: "bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300",
      red: "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",
      green: "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300",
      yellow: "bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300",
      blue: "bg-blue-100 text-blue-500 hover:bg-blue-200 focus:ring-blue-400 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300",
      cyan: "bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300",
      pink: "bg-pink-100 text-pink-500 hover:bg-pink-200 focus:ring-pink-400 dark:bg-pink-200 dark:text-pink-600 dark:hover:bg-pink-300",
      lime: "bg-lime-100 text-lime-500 hover:bg-lime-200 focus:ring-lime-400 dark:bg-lime-200 dark:text-lime-600 dark:hover:bg-lime-300",
      dark: "bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-200 dark:text-gray-600 dark:hover:bg-gray-300",
      indigo: "bg-indigo-100 text-indigo-500 hover:bg-indigo-200 focus:ring-indigo-400 dark:bg-indigo-200 dark:text-indigo-600 dark:hover:bg-indigo-300",
      purple: "bg-purple-100 text-purple-500 hover:bg-purple-200 focus:ring-purple-400 dark:bg-purple-200 dark:text-purple-600 dark:hover:bg-purple-300",
      teal: "bg-teal-100 text-teal-500 hover:bg-teal-200 focus:ring-teal-400 dark:bg-teal-200 dark:text-teal-600 dark:hover:bg-teal-300",
      light: "bg-gray-50 text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white"
    }
  },
  color: {
    info: "border-cyan-500 bg-cyan-100 text-cyan-700 dark:bg-cyan-200 dark:text-cyan-800",
    gray: "border-gray-500 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300",
    failure: "border-red-500 bg-red-100 text-red-700 dark:bg-red-200 dark:text-red-800",
    success: "border-green-500 bg-green-100 text-green-700 dark:bg-green-200 dark:text-green-800",
    warning: "border-yellow-500 bg-yellow-100 text-yellow-700 dark:bg-yellow-200 dark:text-yellow-800",
    red: "border-red-500 bg-red-100 text-red-700 dark:bg-red-200 dark:text-red-800",
    green: "border-green-500 bg-green-100 text-green-700 dark:bg-green-200 dark:text-green-800",
    yellow: "border-yellow-500 bg-yellow-100 text-yellow-700 dark:bg-yellow-200 dark:text-yellow-800",
    blue: "border-blue-500 bg-blue-100 text-blue-700 dark:bg-blue-200 dark:text-blue-800",
    cyan: "border-cyan-500 bg-cyan-100 text-cyan-700 dark:bg-cyan-200 dark:text-cyan-800",
    pink: "border-pink-500 bg-pink-100 text-pink-700 dark:bg-pink-200 dark:text-pink-800",
    lime: "border-lime-500 bg-lime-100 text-lime-700 dark:bg-lime-200 dark:text-lime-800",
    dark: "border-gray-600 bg-gray-800 text-gray-200 dark:bg-gray-900 dark:text-gray-300",
    indigo: "border-indigo-500 bg-indigo-100 text-indigo-700 dark:bg-indigo-200 dark:text-indigo-800",
    purple: "border-purple-500 bg-purple-100 text-purple-700 dark:bg-purple-200 dark:text-purple-800",
    teal: "border-teal-500 bg-teal-100 text-teal-700 dark:bg-teal-200 dark:text-teal-800",
    light: "border-gray-400 bg-gray-50 text-gray-600 dark:bg-gray-500 dark:text-gray-200"
  },
  icon: "mr-3 inline h-5 w-5 flex-shrink-0",
  rounded: "rounded-lg",
  wrapper: "flex items-center"
});

const avatarTheme = createTheme$2({
  root: {
    base: "flex items-center justify-center space-x-4 rounded",
    bordered: "p-1 ring-2",
    rounded: "rounded-full",
    color: {
      dark: "ring-gray-800 dark:ring-gray-800",
      failure: "ring-red-500 dark:ring-red-700",
      gray: "ring-gray-500 dark:ring-gray-400",
      info: "ring-cyan-400 dark:ring-cyan-800",
      light: "ring-gray-300 dark:ring-gray-500",
      purple: "ring-purple-500 dark:ring-purple-600",
      success: "ring-green-500 dark:ring-green-500",
      warning: "ring-yellow-300 dark:ring-yellow-500",
      pink: "ring-pink-500 dark:ring-pink-500"
    },
    img: {
      base: "rounded",
      off: "relative overflow-hidden bg-gray-100 dark:bg-gray-600",
      on: "",
      placeholder: "absolute -bottom-1 h-auto w-auto text-gray-400"
    },
    size: {
      xs: "h-6 w-6",
      sm: "h-8 w-8",
      md: "h-10 w-10",
      lg: "h-20 w-20",
      xl: "h-36 w-36"
    },
    stacked: "ring-2 ring-gray-300 dark:ring-gray-500",
    statusPosition: {
      "bottom-left": "-bottom-1 -left-1",
      "bottom-center": "-bottom-1",
      "bottom-right": "-bottom-1 -right-1",
      "top-left": "-left-1 -top-1",
      "top-center": "-top-1",
      "top-right": "-right-1 -top-1",
      "center-right": "-right-1",
      center: "",
      "center-left": "-left-1"
    },
    status: {
      away: "bg-yellow-400",
      base: "absolute h-3.5 w-3.5 rounded-full border-2 border-white dark:border-gray-800",
      busy: "bg-red-400",
      offline: "bg-gray-400",
      online: "bg-green-400"
    },
    initials: {
      text: "font-medium text-gray-600 dark:text-gray-300",
      base: "relative inline-flex items-center justify-center overflow-hidden bg-gray-100 dark:bg-gray-600"
    }
  },
  group: {
    base: "flex -space-x-4"
  },
  groupCounter: {
    base: "relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-xs font-medium text-white ring-2 ring-gray-300 hover:bg-gray-600 dark:ring-gray-500"
  }
});

const badgeTheme = createTheme$2({
  root: {
    base: "flex h-fit items-center gap-1 font-semibold",
    color: {
      info: "bg-cyan-100 text-cyan-800 group-hover:bg-cyan-200 dark:bg-cyan-200 dark:text-cyan-800 dark:group-hover:bg-cyan-300",
      gray: "bg-gray-100 text-gray-800 group-hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:group-hover:bg-gray-600",
      failure: "bg-red-100 text-red-800 group-hover:bg-red-200 dark:bg-red-200 dark:text-red-900 dark:group-hover:bg-red-300",
      success: "bg-green-100 text-green-800 group-hover:bg-green-200 dark:bg-green-200 dark:text-green-900 dark:group-hover:bg-green-300",
      warning: "bg-yellow-100 text-yellow-800 group-hover:bg-yellow-200 dark:bg-yellow-200 dark:text-yellow-900 dark:group-hover:bg-yellow-300",
      indigo: "bg-indigo-100 text-indigo-800 group-hover:bg-indigo-200 dark:bg-indigo-200 dark:text-indigo-900 dark:group-hover:bg-indigo-300",
      purple: "bg-purple-100 text-purple-800 group-hover:bg-purple-200 dark:bg-purple-200 dark:text-purple-900 dark:group-hover:bg-purple-300",
      pink: "bg-pink-100 text-pink-800 group-hover:bg-pink-200 dark:bg-pink-200 dark:text-pink-900 dark:group-hover:bg-pink-300",
      blue: "bg-blue-100 text-blue-800 group-hover:bg-blue-200 dark:bg-blue-200 dark:text-blue-900 dark:group-hover:bg-blue-300",
      cyan: "bg-cyan-100 text-cyan-800 group-hover:bg-cyan-200 dark:bg-cyan-200 dark:text-cyan-900 dark:group-hover:bg-cyan-300",
      dark: "bg-gray-600 text-gray-100 group-hover:bg-gray-500 dark:bg-gray-900 dark:text-gray-200 dark:group-hover:bg-gray-700",
      light: "bg-gray-200 text-gray-800 group-hover:bg-gray-300 dark:bg-gray-400 dark:text-gray-900 dark:group-hover:bg-gray-500",
      green: "bg-green-100 text-green-800 group-hover:bg-green-200 dark:bg-green-200 dark:text-green-900 dark:group-hover:bg-green-300",
      lime: "bg-lime-100 text-lime-800 group-hover:bg-lime-200 dark:bg-lime-200 dark:text-lime-900 dark:group-hover:bg-lime-300",
      red: "bg-red-100 text-red-800 group-hover:bg-red-200 dark:bg-red-200 dark:text-red-900 dark:group-hover:bg-red-300",
      teal: "bg-teal-100 text-teal-800 group-hover:bg-teal-200 dark:bg-teal-200 dark:text-teal-900 dark:group-hover:bg-teal-300",
      yellow: "bg-yellow-100 text-yellow-800 group-hover:bg-yellow-200 dark:bg-yellow-200 dark:text-yellow-900 dark:group-hover:bg-yellow-300"
    },
    href: "group",
    size: {
      xs: "p-1 text-xs",
      sm: "p-1.5 text-sm"
    }
  },
  icon: {
    off: "rounded px-2 py-0.5",
    on: "rounded-full p-1.5",
    size: {
      xs: "h-3 w-3",
      sm: "h-3.5 w-3.5"
    }
  }
});

const blockquoteTheme = createTheme$2({
  root: {
    base: "text-xl font-semibold italic text-gray-900 dark:text-white"
  }
});

const breadcrumbTheme = createTheme$2({
  root: {
    base: "",
    list: "flex items-center"
  },
  item: {
    base: "group flex items-center",
    chevron: "mx-1 h-4 w-4 text-gray-400 group-first:hidden md:mx-2",
    href: {
      off: "flex items-center text-sm font-medium text-gray-500 dark:text-gray-400",
      on: "flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
    },
    icon: "mr-2 h-4 w-4"
  }
});

const buttonTheme = createTheme$2({
  base: "group relative flex items-stretch justify-center p-0.5 text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none",
  fullSized: "w-full",
  color: {
    dark: "border border-transparent bg-gray-800 text-white focus:ring-4 focus:ring-gray-300 enabled:hover:bg-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-gray-800 dark:enabled:hover:bg-gray-700",
    failure: "border border-transparent bg-red-700 text-white focus:ring-4 focus:ring-red-300 enabled:hover:bg-red-800 dark:bg-red-600 dark:focus:ring-red-900 dark:enabled:hover:bg-red-700",
    gray: ":ring-cyan-700 border border-gray-200 bg-white text-gray-900 focus:text-cyan-700 focus:ring-4 enabled:hover:bg-gray-100 enabled:hover:text-cyan-700 dark:border-gray-600 dark:bg-transparent dark:text-gray-400 dark:enabled:hover:bg-gray-700 dark:enabled:hover:text-white",
    info: "border border-transparent bg-cyan-700 text-white focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-cyan-800 dark:bg-cyan-600 dark:focus:ring-cyan-800 dark:enabled:hover:bg-cyan-700",
    light: "border border-gray-300 bg-white text-gray-900 focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-600 dark:text-white dark:focus:ring-gray-700 dark:enabled:hover:border-gray-700 dark:enabled:hover:bg-gray-700",
    purple: "border border-transparent bg-purple-700 text-white focus:ring-4 focus:ring-purple-300 enabled:hover:bg-purple-800 dark:bg-purple-600 dark:focus:ring-purple-900 dark:enabled:hover:bg-purple-700",
    success: "border border-transparent bg-green-700 text-white focus:ring-4 focus:ring-green-300 enabled:hover:bg-green-800 dark:bg-green-600 dark:focus:ring-green-800 dark:enabled:hover:bg-green-700",
    warning: "border border-transparent bg-yellow-400 text-white focus:ring-4 focus:ring-yellow-300 enabled:hover:bg-yellow-500 dark:focus:ring-yellow-900",
    blue: "border border-transparent bg-blue-700 text-white focus:ring-4 focus:ring-blue-300 enabled:hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    cyan: "border border-cyan-300 bg-white text-cyan-900 focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-cyan-100 dark:border-cyan-600 dark:bg-cyan-600 dark:text-white dark:focus:ring-cyan-700 dark:enabled:hover:border-cyan-700 dark:enabled:hover:bg-cyan-700",
    green: "border border-green-300 bg-white text-green-900 focus:ring-4 focus:ring-green-300 enabled:hover:bg-green-100 dark:border-green-600 dark:bg-green-600 dark:text-white dark:focus:ring-green-700 dark:enabled:hover:border-green-700 dark:enabled:hover:bg-green-700",
    indigo: "border border-indigo-300 bg-white text-indigo-900 focus:ring-4 focus:ring-indigo-300 enabled:hover:bg-indigo-100 dark:border-indigo-600 dark:bg-indigo-600 dark:text-white dark:focus:ring-indigo-700 dark:enabled:hover:border-indigo-700 dark:enabled:hover:bg-indigo-700",
    lime: "border border-lime-300 bg-white text-lime-900 focus:ring-4 focus:ring-lime-300 enabled:hover:bg-lime-100 dark:border-lime-600 dark:bg-lime-600 dark:text-white dark:focus:ring-lime-700 dark:enabled:hover:border-lime-700 dark:enabled:hover:bg-lime-700",
    pink: "border border-pink-300 bg-white text-pink-900 focus:ring-4 focus:ring-pink-300 enabled:hover:bg-pink-100 dark:border-pink-600 dark:bg-pink-600 dark:text-white dark:focus:ring-pink-700 dark:enabled:hover:border-pink-700 dark:enabled:hover:bg-pink-700",
    red: "border border-red-300 bg-white text-red-900 focus:ring-4 focus:ring-red-300 enabled:hover:bg-red-100 dark:border-red-600 dark:bg-red-600 dark:text-white dark:focus:ring-red-700 dark:enabled:hover:border-red-700 dark:enabled:hover:bg-red-700",
    teal: "border border-teal-300 bg-white text-teal-900 focus:ring-4 focus:ring-teal-300 enabled:hover:bg-teal-100 dark:border-teal-600 dark:bg-teal-600 dark:text-white dark:focus:ring-teal-700 dark:enabled:hover:border-teal-700 dark:enabled:hover:bg-teal-700",
    yellow: "border border-yellow-300 bg-white text-yellow-900 focus:ring-4 focus:ring-yellow-300 enabled:hover:bg-yellow-100 dark:border-yellow-600 dark:bg-yellow-600 dark:text-white dark:focus:ring-yellow-700 dark:enabled:hover:border-yellow-700 dark:enabled:hover:bg-yellow-700"
  },
  disabled: "cursor-not-allowed opacity-50",
  isProcessing: "cursor-wait",
  spinnerSlot: "absolute top-0 flex h-full items-center",
  spinnerLeftPosition: {
    xs: "left-2",
    sm: "left-3",
    md: "left-4",
    lg: "left-5",
    xl: "left-6"
  },
  gradient: {
    cyan: "bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-white focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-gradient-to-br dark:focus:ring-cyan-800",
    failure: "bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-white focus:ring-4 focus:ring-red-300 enabled:hover:bg-gradient-to-br dark:focus:ring-red-800",
    info: "bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 text-white focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-gradient-to-br dark:focus:ring-cyan-800",
    lime: "bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 text-gray-900 focus:ring-4 focus:ring-lime-300 enabled:hover:bg-gradient-to-br dark:focus:ring-lime-800",
    pink: "bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-white focus:ring-4 focus:ring-pink-300 enabled:hover:bg-gradient-to-br dark:focus:ring-pink-800",
    purple: "bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white focus:ring-4 focus:ring-purple-300 enabled:hover:bg-gradient-to-br dark:focus:ring-purple-800",
    success: "bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white focus:ring-4 focus:ring-green-300 enabled:hover:bg-gradient-to-br dark:focus:ring-green-800",
    teal: "bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white focus:ring-4 focus:ring-teal-300 enabled:hover:bg-gradient-to-br dark:focus:ring-teal-800"
  },
  gradientDuoTone: {
    cyanToBlue: "bg-gradient-to-r from-cyan-500 to-cyan-500 text-white focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-gradient-to-bl dark:focus:ring-cyan-800",
    greenToBlue: "bg-gradient-to-br from-green-400 to-cyan-600 text-white focus:ring-4 focus:ring-green-200 enabled:hover:bg-gradient-to-bl dark:focus:ring-green-800",
    pinkToOrange: "bg-gradient-to-br from-pink-500 to-orange-400 text-white focus:ring-4 focus:ring-pink-200 enabled:hover:bg-gradient-to-bl dark:focus:ring-pink-800",
    purpleToBlue: "bg-gradient-to-br from-purple-600 to-cyan-500 text-white focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-gradient-to-bl dark:focus:ring-cyan-800",
    purpleToPink: "bg-gradient-to-r from-purple-500 to-pink-500 text-white focus:ring-4 focus:ring-purple-200 enabled:hover:bg-gradient-to-l dark:focus:ring-purple-800",
    redToYellow: "bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 text-gray-900 focus:ring-4 focus:ring-red-100 enabled:hover:bg-gradient-to-bl dark:focus:ring-red-400",
    tealToLime: "bg-gradient-to-r from-teal-200 to-lime-200 text-gray-900 focus:ring-4 focus:ring-lime-200 enabled:hover:bg-gradient-to-l enabled:hover:from-teal-200 enabled:hover:to-lime-200 enabled:hover:text-gray-900 dark:focus:ring-teal-700"
  },
  inner: {
    base: "flex items-stretch transition-all duration-200",
    position: {
      none: "",
      start: "rounded-r-none",
      middle: "rounded-none",
      end: "rounded-l-none"
    },
    outline: "border border-transparent",
    isProcessingPadding: {
      xs: "pl-8",
      sm: "pl-10",
      md: "pl-12",
      lg: "pl-16",
      xl: "pl-20"
    }
  },
  label: "ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-cyan-200 text-xs font-semibold text-cyan-800",
  outline: {
    color: {
      gray: "border border-gray-900 dark:border-white",
      default: "border-0",
      light: ""
    },
    off: "",
    on: "flex w-full justify-center bg-white text-gray-900 transition-all duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit dark:bg-gray-900 dark:text-white",
    pill: {
      off: "rounded-md",
      on: "rounded-full"
    }
  },
  pill: {
    off: "rounded-lg",
    on: "rounded-full"
  },
  size: {
    xs: "px-2 py-1 text-xs",
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-2.5 text-base",
    xl: "px-6 py-3 text-base"
  }
});
const buttonGroupTheme = createTheme$2({
  base: "inline-flex",
  position: {
    none: "",
    start: "rounded-r-none focus:ring-2",
    middle: "rounded-none border-l-0 pl-0 focus:ring-2",
    end: "rounded-l-none border-l-0 pl-0 focus:ring-2"
  }
});

const cardTheme = createTheme$2({
  root: {
    base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
    children: "flex h-full flex-col justify-center gap-4 p-6",
    horizontal: {
      off: "flex-col",
      on: "flex-col md:max-w-xl md:flex-row"
    },
    href: "hover:bg-gray-100 dark:hover:bg-gray-700"
  },
  img: {
    base: "",
    horizontal: {
      off: "rounded-t-lg",
      on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
    }
  }
});

const carouselTheme = createTheme$2({
  root: {
    base: "relative h-full w-full",
    leftControl: "absolute left-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
    rightControl: "absolute right-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none"
  },
  indicators: {
    active: {
      off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
      on: "bg-white dark:bg-gray-800"
    },
    base: "h-3 w-3 rounded-full",
    wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
  },
  item: {
    base: "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
    wrapper: {
      off: "w-full flex-shrink-0 transform cursor-default snap-center",
      on: "w-full flex-shrink-0 transform cursor-grab snap-center"
    }
  },
  control: {
    base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
    icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
  },
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
    snap: "snap-x"
  }
});

const checkboxTheme = createTheme$2({
  root: {
    base: "h-4 w-4 rounded border border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700",
    color: {
      default: "text-cyan-600 focus:ring-cyan-600 dark:ring-offset-gray-800 dark:focus:ring-cyan-600",
      dark: "text-gray-800 focus:ring-gray-800 dark:ring-offset-gray-800 dark:focus:ring-gray-800",
      failure: "text-red-900 focus:ring-red-900 dark:ring-offset-red-900 dark:focus:ring-red-900",
      gray: "text-gray-900 focus:ring-gray-900 dark:ring-offset-gray-900 dark:focus:ring-gray-900",
      info: "text-cyan-800 focus:ring-cyan-800 dark:ring-offset-gray-800 dark:focus:ring-cyan-800",
      light: "text-gray-900 focus:ring-gray-900 dark:ring-offset-gray-900 dark:focus:ring-gray-900",
      purple: "text-purple-600 focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600",
      success: "text-green-800 focus:ring-green-800 dark:ring-offset-green-800 dark:focus:ring-green-800",
      warning: "text-yellow-400 focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400",
      blue: "text-blue-700 focus:ring-blue-600 dark:ring-offset-blue-700 dark:focus:ring-blue-700",
      cyan: "text-cyan-600 focus:ring-cyan-600 dark:ring-offset-cyan-600 dark:focus:ring-cyan-600",
      green: "text-green-600 focus:ring-green-600 dark:ring-offset-green-600 dark:focus:ring-green-600",
      indigo: "text-indigo-700 focus:ring-indigo-700 dark:ring-offset-indigo-700 dark:focus:ring-indigo-700",
      lime: "text-lime-700 focus:ring-lime-700 dark:ring-offset-lime-700 dark:focus:ring-lime-700",
      pink: "text-pink-600 focus:ring-pink-600 dark:ring-offset-pink-600 dark:focus:ring-pink-600",
      red: "text-red-600 focus:ring-red-600 dark:ring-offset-red-600 dark:focus:ring-red-600",
      teal: "text-teal-600 focus:ring-teal-600 dark:ring-offset-teal-600 dark:focus:ring-teal-600",
      yellow: "text-yellow-400 focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400"
    }
  }
});

const clipboardTheme = createTheme$2({
  button: {
    base: "inline-flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-3 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    label: "text-center text-sm font-medium text-white sm:w-auto"
  },
  withIcon: {
    base: "absolute end-2 top-1/2 inline-flex -translate-y-1/2 items-center justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800",
    icon: {
      defaultIcon: "h-4 w-4",
      successIcon: "h-4 w-4 text-blue-700 dark:text-blue-500"
    }
  },
  withIconText: {
    base: "absolute end-2.5 top-1/2 inline-flex -translate-y-1/2 items-center justify-center rounded-lg border border-gray-200 bg-white px-2.5 py-2 text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700",
    icon: {
      defaultIcon: "me-1.5 h-3 w-3",
      successIcon: "me-1.5 h-3 w-3 text-blue-700 dark:text-blue-500"
    },
    label: {
      base: "inline-flex items-center",
      defaultText: "text-xs font-semibold",
      successText: "text-xs font-semibold text-blue-700 dark:text-blue-500"
    }
  }
});

const darkThemeToggleTheme = createTheme$2({
  root: {
    base: "rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700",
    icon: "h-5 w-5"
  }
});

const datePickerTheme = createTheme$2({
  root: {
    base: "relative"
  },
  popup: {
    root: {
      base: "absolute top-10 z-50 block pt-2",
      inline: "relative top-0 z-auto",
      inner: "inline-block rounded-lg bg-white p-4 shadow-lg dark:bg-gray-700"
    },
    header: {
      base: "",
      title: "px-2 py-3 text-center font-semibold text-gray-900 dark:text-white",
      selectors: {
        base: "mb-2 flex justify-between",
        button: {
          base: "rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
          prev: "",
          next: "",
          view: ""
        }
      }
    },
    view: {
      base: "p-1"
    },
    footer: {
      base: "mt-2 flex space-x-2",
      button: {
        base: "w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-cyan-300",
        today: "bg-cyan-700 text-white hover:bg-cyan-800 dark:bg-cyan-600 dark:hover:bg-cyan-700",
        clear: "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
      }
    }
  },
  views: {
    days: {
      header: {
        base: "mb-1 grid grid-cols-7",
        title: "h-6 text-center text-sm font-medium leading-6 text-gray-500 dark:text-gray-400"
      },
      items: {
        base: "grid w-64 grid-cols-7",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
          selected: "bg-cyan-700 text-white hover:bg-cyan-600",
          disabled: "text-gray-500"
        }
      }
    },
    months: {
      items: {
        base: "grid w-64 grid-cols-4",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
          selected: "bg-cyan-700 text-white hover:bg-cyan-600",
          disabled: "text-gray-500"
        }
      }
    },
    years: {
      items: {
        base: "grid w-64 grid-cols-4",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
          selected: "bg-cyan-700 text-white hover:bg-cyan-600",
          disabled: "text-gray-500"
        }
      }
    },
    decades: {
      items: {
        base: "grid w-64 grid-cols-4",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
          selected: "bg-cyan-700 text-white hover:bg-cyan-600",
          disabled: "text-gray-500"
        }
      }
    }
  }
});

const drawerTheme = createTheme$2({
  root: {
    base: "fixed z-40 overflow-y-auto bg-white p-4 transition-transform dark:bg-gray-800",
    backdrop: "fixed inset-0 z-30 bg-gray-900/50 dark:bg-gray-900/80",
    edge: "bottom-16",
    position: {
      top: {
        on: "left-0 right-0 top-0 w-full transform-none",
        off: "left-0 right-0 top-0 w-full -translate-y-full"
      },
      right: {
        on: "right-0 top-0 h-screen w-80 transform-none",
        off: "right-0 top-0 h-screen w-80 translate-x-full"
      },
      bottom: {
        on: "bottom-0 left-0 right-0 w-full transform-none",
        off: "bottom-0 left-0 right-0 w-full translate-y-full"
      },
      left: {
        on: "left-0 top-0 h-screen w-80 transform-none",
        off: "left-0 top-0 h-screen w-80 -translate-x-full"
      }
    }
  },
  header: {
    inner: {
      closeButton: "absolute end-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
      closeIcon: "h-4 w-4",
      titleIcon: "me-2.5 h-4 w-4",
      titleText: "mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400"
    },
    collapsed: {
      on: "hidden",
      off: "block"
    }
  },
  items: {
    base: ""
  }
});

const dropdownTheme = createTheme$2({
  arrowIcon: "ml-2 h-4 w-4",
  content: "py-1 focus:outline-none",
  floating: {
    animation: "transition-opacity",
    arrow: {
      base: "absolute z-10 h-2 w-2 rotate-45",
      style: {
        dark: "bg-gray-900 dark:bg-gray-700",
        light: "bg-white",
        auto: "bg-white dark:bg-gray-700"
      },
      placement: "-4px"
    },
    base: "z-10 w-fit divide-y divide-gray-100 rounded shadow focus:outline-none",
    content: "py-1 text-sm text-gray-700 dark:text-gray-200",
    divider: "my-1 h-px bg-gray-100 dark:bg-gray-600",
    header: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-200",
    hidden: "invisible opacity-0",
    item: {
      container: "",
      base: "flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white",
      icon: "mr-2 h-4 w-4"
    },
    style: {
      dark: "bg-gray-900 text-white dark:bg-gray-700",
      light: "border border-gray-200 bg-white text-gray-900",
      auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white"
    },
    target: "w-fit"
  },
  inlineWrapper: "flex items-center"
});

const fileInputTheme = createTheme$2({
  root: {
    base: "flex"
  },
  field: {
    base: "relative w-full",
    input: {
      base: "block w-full overflow-hidden rounded-lg border disabled:cursor-not-allowed disabled:opacity-50",
      sizes: {
        sm: "sm:text-xs",
        md: "text-sm",
        lg: "sm:text-base"
      },
      colors: {
        gray: "border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
        info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
        failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
        warning: "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
        success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
      }
    }
  }
});

const floatingLabelTheme = createTheme$2({
  input: {
    default: {
      filled: {
        sm: "peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-xs text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500",
        md: "peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500"
      },
      outlined: {
        sm: "peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-xs text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500",
        md: "peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
      },
      standard: {
        sm: "peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-xs text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500",
        md: "peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
      }
    },
    success: {
      filled: {
        sm: "peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-green-600 bg-gray-50 px-2.5 pb-2.5 pt-5 text-xs text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0 dark:border-green-500 dark:bg-gray-700 dark:text-white dark:focus:border-green-500",
        md: "peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-green-600 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0 dark:border-green-500 dark:bg-gray-700 dark:text-white dark:focus:border-green-500"
      },
      outlined: {
        sm: "peer block w-full appearance-none rounded-lg border border-green-600 bg-transparent px-2.5 pb-2.5 pt-4 text-xs text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0 dark:border-green-500 dark:text-white dark:focus:border-green-500",
        md: "peer block w-full appearance-none rounded-lg border border-green-600 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0 dark:border-green-500 dark:text-white dark:focus:border-green-500"
      },
      standard: {
        sm: "peer block w-full appearance-none border-0 border-b-2 border-green-600 bg-transparent px-0 py-2.5 text-xs text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0 dark:border-green-500 dark:text-white dark:focus:border-green-500",
        md: "peer block w-full appearance-none border-0 border-b-2 border-green-600 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0 dark:border-green-500 dark:text-white dark:focus:border-green-500"
      }
    },
    error: {
      filled: {
        sm: "peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-red-600 bg-gray-50 px-2.5 pb-2.5 pt-5 text-xs text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 dark:border-red-500 dark:bg-gray-700 dark:text-white dark:focus:border-red-500",
        md: "peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-red-600 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 dark:border-red-500 dark:bg-gray-700 dark:text-white dark:focus:border-red-500"
      },
      outlined: {
        sm: "peer block w-full appearance-none rounded-lg border border-red-600 bg-transparent px-2.5 pb-2.5 pt-4 text-xs text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 dark:border-red-500 dark:text-white dark:focus:border-red-500",
        md: "peer block w-full appearance-none rounded-lg border border-red-600 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 dark:border-red-500 dark:text-white dark:focus:border-red-500"
      },
      standard: {
        sm: "peer block w-full appearance-none border-0 border-b-2 border-red-600 bg-transparent px-0 py-2.5 text-xs text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 dark:border-red-500 dark:text-white dark:focus:border-red-500",
        md: "peer block w-full appearance-none border-0 border-b-2 border-red-600 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 dark:border-red-500 dark:text-white dark:focus:border-red-500"
      }
    }
  },
  label: {
    default: {
      filled: {
        sm: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 text-xs text-gray-500 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500",
        md: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 text-sm text-gray-500 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
      },
      outlined: {
        sm: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-xs text-gray-500 transition-transform duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500",
        md: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-sm text-gray-500 transition-transform duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
      },
      standard: {
        sm: "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-xs text-gray-500 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500",
        md: "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
      }
    },
    success: {
      filled: {
        sm: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 text-sm text-green-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-green-500",
        md: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 text-sm text-green-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-green-500"
      },
      outlined: {
        sm: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-sm text-green-600 transition-transform duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900 dark:text-green-500",
        md: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-sm text-green-600 transition-transform duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900 dark:text-green-500"
      },
      standard: {
        sm: "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-xs text-green-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 dark:text-green-500",
        md: "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-green-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 dark:text-green-500"
      }
    },
    error: {
      filled: {
        sm: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 text-xs text-red-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-red-500",
        md: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 text-xs text-red-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-red-500"
      },
      outlined: {
        sm: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-xs text-red-600 transition-transform duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900 dark:text-red-500",
        md: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-xs text-red-600 transition-transform duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900 dark:text-red-500"
      },
      standard: {
        sm: "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-xs text-red-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 dark:text-red-500",
        md: "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-red-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 dark:text-red-500"
      }
    }
  },
  helperText: {
    default: "mt-2 text-xs text-gray-600 dark:text-gray-400",
    success: "mt-2 text-xs text-green-600 dark:text-green-400",
    error: "mt-2 text-xs text-red-600 dark:text-red-400"
  }
});

const footerTheme = createTheme$2({
  root: {
    base: "w-full rounded-lg bg-white shadow dark:bg-gray-800 md:flex md:items-center md:justify-between",
    container: "w-full p-6",
    bgDark: "bg-gray-800"
  },
  groupLink: {
    base: "flex flex-wrap text-sm text-gray-500 dark:text-white",
    link: {
      base: "me-4 last:mr-0 md:mr-6",
      href: "hover:underline"
    },
    col: "flex-col space-y-4"
  },
  icon: {
    base: "text-gray-500 dark:hover:text-white",
    size: "h-5 w-5"
  },
  title: {
    base: "mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-white"
  },
  divider: {
    base: "my-6 w-full border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8"
  },
  copyright: {
    base: "text-sm text-gray-500 dark:text-gray-400 sm:text-center",
    href: "ml-1 hover:underline",
    span: "ml-1"
  },
  brand: {
    base: "mb-4 flex items-center sm:mb-0",
    img: "mr-3 h-8",
    span: "self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white"
  }
});

const helperTextTheme = createTheme$2({
  root: {
    base: "mt-2 text-sm",
    colors: {
      gray: "text-gray-500 dark:text-gray-400",
      info: "text-cyan-700 dark:text-cyan-800",
      success: "text-green-600 dark:text-green-500",
      failure: "text-red-600 dark:text-red-500",
      warning: "text-yellow-500 dark:text-yellow-600"
    }
  }
});

const hrTheme = createTheme$2({
  root: {
    base: "my-8 h-px border-0 bg-gray-200 dark:bg-gray-700"
  },
  trimmed: {
    base: "mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10"
  },
  icon: {
    base: "inline-flex w-full items-center justify-center",
    hrLine: "my-8 h-1 w-64 rounded border-0 bg-gray-200 dark:bg-gray-700",
    icon: {
      base: "absolute left-1/2 -translate-x-1/2 bg-white px-4 dark:bg-gray-900",
      icon: "h-4 w-4 text-gray-700 dark:text-gray-300"
    }
  },
  text: {
    base: "inline-flex w-full items-center justify-center",
    hrLine: "my-8 h-px w-64 border-0 bg-gray-200 dark:bg-gray-700",
    text: "absolute left-1/2 -translate-x-1/2 bg-white px-3 font-medium text-gray-900 dark:bg-gray-900 dark:text-white"
  },
  square: {
    base: "mx-auto my-8 h-8 w-8 rounded border-0 bg-gray-200 dark:bg-gray-700 md:my-12"
  }
});

const kbdTheme = createTheme$2({
  root: {
    base: "rounded-lg border border-gray-200 bg-gray-100 px-2 py-1.5 text-xs font-semibold text-gray-800 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100",
    icon: "inline-block"
  }
});

const labelTheme = createTheme$2({
  root: {
    base: "text-sm font-medium",
    disabled: "opacity-50",
    colors: {
      default: "text-gray-900 dark:text-white",
      info: "text-cyan-500 dark:text-cyan-600",
      failure: "text-red-700 dark:text-red-500",
      warning: "text-yellow-500 dark:text-yellow-600",
      success: "text-green-700 dark:text-green-500"
    }
  }
});

const listTheme = createTheme$2({
  root: {
    base: "list-inside space-y-1 text-gray-500 dark:text-gray-400",
    ordered: {
      off: "list-disc",
      on: "list-decimal"
    },
    horizontal: "flex list-none flex-wrap items-center justify-center space-x-4 space-y-0",
    unstyled: "list-none",
    nested: "mt-2 ps-5"
  },
  item: {
    withIcon: {
      off: "",
      on: "flex items-center"
    },
    icon: "me-2 h-3.5 w-3.5 flex-shrink-0"
  }
});

const listGroupTheme = createTheme$2({
  root: {
    base: "list-none rounded-lg border border-gray-200 bg-white text-left text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
  },
  item: {
    base: "[&>*]:first:rounded-t-lg [&>*]:last:rounded-b-lg [&>*]:last:border-b-0",
    link: {
      base: "flex w-full items-center border-b border-gray-200 px-4 py-2 dark:border-gray-600",
      active: {
        off: "hover:bg-gray-100 hover:text-cyan-700 focus:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500",
        on: "bg-cyan-700 text-white dark:bg-gray-800"
      },
      disabled: {
        off: "",
        on: "cursor-not-allowed bg-gray-100 text-gray-900 hover:bg-gray-100 hover:text-gray-900 focus:text-gray-900"
      },
      href: {
        off: "",
        on: ""
      },
      icon: "mr-2 h-4 w-4 fill-current"
    }
  }
});

const navbarTheme = createTheme$2({
  root: {
    base: "bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4",
    rounded: {
      on: "rounded",
      off: ""
    },
    bordered: {
      on: "border",
      off: ""
    },
    inner: {
      base: "mx-auto flex flex-wrap items-center justify-between",
      fluid: {
        on: "",
        off: "container"
      }
    }
  },
  brand: {
    base: "flex items-center"
  },
  collapse: {
    base: "w-full md:block md:w-auto",
    list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
    hidden: {
      on: "hidden",
      off: ""
    }
  },
  link: {
    base: "block py-2 pl-3 pr-4 md:p-0",
    active: {
      on: "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700",
      off: "border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
    },
    disabled: {
      on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
      off: ""
    }
  },
  toggle: {
    base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
    icon: "h-6 w-6 shrink-0"
  }
});

const megaMenuTheme = createTheme$2({
  ...navbarTheme,
  dropdown: {
    base: "",
    toggle: {
      ...dropdownTheme,
      floating: {
        ...dropdownTheme.floating,
        base: twMerge(dropdownTheme.floating.base, "mt-2 block"),
        content: twMerge(dropdownTheme.floating.content, "text-gray-500 dark:text-gray-400"),
        style: {
          ...dropdownTheme.floating.style,
          auto: twMerge(dropdownTheme.floating.style.auto, "text-gray-500 dark:text-gray-400")
        }
      },
      inlineWrapper: twMerge(dropdownTheme.inlineWrapper, "flex w-full items-center justify-between")
    }
  },
  dropdownToggle: {
    base: twMerge(navbarTheme.link.base, navbarTheme.link.active.off, "flex w-full items-center justify-between")
  }
});

const modalTheme = createTheme$2({
  root: {
    base: "fixed inset-x-0 top-0 z-50 h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full",
    show: {
      on: "flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80",
      off: "hidden"
    },
    sizes: {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      "2xl": "max-w-2xl",
      "3xl": "max-w-3xl",
      "4xl": "max-w-4xl",
      "5xl": "max-w-5xl",
      "6xl": "max-w-6xl",
      "7xl": "max-w-7xl"
    },
    positions: {
      "top-left": "items-start justify-start",
      "top-center": "items-start justify-center",
      "top-right": "items-start justify-end",
      "center-left": "items-center justify-start",
      center: "items-center justify-center",
      "center-right": "items-center justify-end",
      "bottom-right": "items-end justify-end",
      "bottom-center": "items-end justify-center",
      "bottom-left": "items-end justify-start"
    }
  },
  content: {
    base: "relative h-full w-full p-4 md:h-auto",
    inner: "relative flex max-h-[90dvh] flex-col rounded-lg bg-white shadow dark:bg-gray-700"
  },
  body: {
    base: "flex-1 overflow-auto p-6",
    popup: "pt-0"
  },
  header: {
    base: "flex items-start justify-between rounded-t border-b p-5 dark:border-gray-600",
    popup: "border-b-0 p-2",
    title: "text-xl font-medium text-gray-900 dark:text-white",
    close: {
      base: "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
      icon: "h-5 w-5"
    }
  },
  footer: {
    base: "flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600",
    popup: "border-t"
  }
});

const paginationTheme = createTheme$2({
  base: "",
  layout: {
    table: {
      base: "text-sm text-gray-700 dark:text-gray-400",
      span: "font-semibold text-gray-900 dark:text-white"
    }
  },
  pages: {
    base: "xs:mt-0 mt-2 inline-flex items-center -space-x-px",
    showIcon: "inline-flex",
    previous: {
      base: "ml-0 rounded-l-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
      icon: "h-5 w-5"
    },
    next: {
      base: "rounded-r-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
      icon: "h-5 w-5"
    },
    selector: {
      base: "w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
      active: "bg-cyan-50 text-cyan-600 hover:bg-cyan-100 hover:text-cyan-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white",
      disabled: "cursor-not-allowed opacity-50"
    }
  }
});

const popoverTheme = {
  base: "absolute z-20 inline-block w-max max-w-[100vw] bg-white outline-none border border-gray-200 rounded-lg shadow-sm dark:border-gray-600 dark:bg-gray-800",
  content: "z-10 overflow-hidden rounded-[7px]",
  arrow: {
    base: "absolute h-2 w-2 z-0 rotate-45 mix-blend-lighten bg-white border border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:mix-blend-color",
    placement: "-4px"
  }
};

const progressTheme = createTheme$2({
  base: "w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700",
  label: "mb-1 flex justify-between font-medium dark:text-white",
  bar: "space-x-2 rounded-full text-center font-medium leading-none text-cyan-300 dark:text-cyan-100",
  color: {
    dark: "bg-gray-600 dark:bg-gray-300",
    blue: "bg-blue-600",
    red: "bg-red-600 dark:bg-red-500",
    green: "bg-green-600 dark:bg-green-500",
    yellow: "bg-yellow-400",
    indigo: "bg-indigo-600 dark:bg-indigo-500",
    purple: "bg-purple-600 dark:bg-purple-500",
    cyan: "bg-cyan-600",
    gray: "bg-gray-500",
    lime: "bg-lime-600",
    pink: "bg-pink-500",
    teal: "bg-teal-600"
  },
  size: {
    sm: "h-1.5",
    md: "h-2.5",
    lg: "h-4",
    xl: "h-6"
  }
});

const radioTheme = createTheme$2({
  root: {
    base: "h-4 w-4 border border-gray-300 text-cyan-600 focus:ring-2 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-cyan-600 dark:focus:ring-cyan-600"
  }
});

const rangeSliderTheme = createTheme$2({
  root: {
    base: "flex"
  },
  field: {
    base: "relative w-full",
    input: {
      base: "w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700",
      sizes: {
        sm: "h-1",
        md: "h-2",
        lg: "h-3"
      }
    }
  }
});

const ratingTheme = createTheme$2({
  root: {
    base: "flex items-center"
  },
  star: {
    empty: "text-gray-300 dark:text-gray-500",
    filled: "text-yellow-400",
    sizes: {
      sm: "h-5 w-5",
      md: "h-7 w-7",
      lg: "h-10 w-10"
    }
  }
});
const ratingAdvancedTheme = createTheme$2({
  base: "flex items-center",
  label: "text-sm font-medium text-cyan-600 dark:text-cyan-500",
  progress: {
    base: "mx-4 h-5 w-2/4 rounded bg-gray-200 dark:bg-gray-700",
    fill: "h-5 rounded bg-yellow-400",
    label: "text-sm font-medium text-cyan-600 dark:text-cyan-500"
  }
});

const selectTheme = createTheme$2({
  base: "flex",
  addon: "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
  field: {
    base: "relative w-full",
    icon: {
      base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
      svg: "h-5 w-5 text-gray-500 dark:text-gray-400"
    },
    select: {
      base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
      withIcon: {
        on: "pl-10",
        off: ""
      },
      withAddon: {
        on: "rounded-r-lg",
        off: "rounded-lg"
      },
      withShadow: {
        on: "shadow-sm dark:shadow-sm-light",
        off: ""
      },
      sizes: {
        sm: "p-2 sm:text-xs",
        md: "p-2.5 text-sm",
        lg: "p-4 sm:text-base"
      },
      colors: {
        gray: "border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
        info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
        failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
        warning: "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
        success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
      }
    }
  }
});

const sidebarTheme = createTheme$2({
  root: {
    base: "h-full",
    collapsed: {
      on: "w-16",
      off: "w-64"
    },
    inner: "h-full overflow-y-auto overflow-x-hidden rounded bg-gray-50 px-3 py-4 dark:bg-gray-800"
  },
  collapse: {
    button: "group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
    icon: {
      base: "h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
      open: {
        off: "",
        on: "text-gray-900"
      }
    },
    label: {
      base: "ml-3 flex-1 whitespace-nowrap text-left",
      icon: {
        base: "h-6 w-6 transition delay-0 ease-in-out",
        open: {
          on: "rotate-180",
          off: ""
        }
      }
    },
    list: "space-y-2 py-2"
  },
  cta: {
    base: "mt-6 rounded-lg bg-gray-100 p-4 dark:bg-gray-700",
    color: {
      blue: "bg-cyan-50 dark:bg-cyan-900",
      dark: "bg-dark-50 dark:bg-dark-900",
      failure: "bg-red-50 dark:bg-red-900",
      gray: "bg-alternative-50 dark:bg-alternative-900",
      green: "bg-green-50 dark:bg-green-900",
      light: "bg-light-50 dark:bg-light-900",
      red: "bg-red-50 dark:bg-red-900",
      purple: "bg-purple-50 dark:bg-purple-900",
      success: "bg-green-50 dark:bg-green-900",
      yellow: "bg-yellow-50 dark:bg-yellow-900",
      warning: "bg-yellow-50 dark:bg-yellow-900"
    }
  },
  item: {
    base: "flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
    active: "bg-gray-100 dark:bg-gray-700",
    collapsed: {
      insideCollapse: "group w-full pl-8 transition duration-75",
      noIcon: "font-bold"
    },
    content: {
      base: "flex-1 whitespace-nowrap px-3"
    },
    icon: {
      base: "h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
      active: "text-gray-700 dark:text-gray-100"
    },
    label: "",
    listItem: ""
  },
  items: {
    base: ""
  },
  itemGroup: {
    base: "mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700"
  },
  logo: {
    base: "mb-5 flex items-center pl-2.5",
    collapsed: {
      on: "hidden",
      off: "self-center whitespace-nowrap text-xl font-semibold dark:text-white"
    },
    img: "mr-3 h-6 sm:h-7"
  }
});

const spinnerTheme = createTheme$2({
  base: "inline animate-spin text-gray-200",
  color: {
    failure: "fill-red-600",
    gray: "fill-gray-600",
    info: "fill-cyan-600",
    pink: "fill-pink-600",
    purple: "fill-purple-600",
    success: "fill-green-500",
    warning: "fill-yellow-400"
  },
  light: {
    off: {
      base: "dark:text-gray-600",
      color: {
        failure: "",
        gray: "dark:fill-gray-300",
        info: "",
        pink: "",
        purple: "",
        success: "",
        warning: ""
      }
    },
    on: {
      base: "",
      color: {
        failure: "",
        gray: "",
        info: "",
        pink: "",
        purple: "",
        success: "",
        warning: ""
      }
    }
  },
  size: {
    xs: "h-3 w-3",
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
    xl: "h-10 w-10"
  }
});

const tableTheme = createTheme$2({
  root: {
    base: "w-full text-left text-sm text-gray-500 dark:text-gray-400",
    shadow: "absolute left-0 top-0 -z-10 h-full w-full rounded-lg bg-white drop-shadow-md dark:bg-black",
    wrapper: "relative"
  },
  body: {
    base: "group/body",
    cell: {
      base: "px-6 py-4 group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg"
    }
  },
  head: {
    base: "group/head text-xs uppercase text-gray-700 dark:text-gray-400",
    cell: {
      base: "bg-gray-50 px-6 py-3 group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg dark:bg-gray-700"
    }
  },
  row: {
    base: "group/row",
    hovered: "hover:bg-gray-50 dark:hover:bg-gray-600",
    striped: "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
  }
});

const tabTheme = createTheme$2({
  base: "flex flex-col gap-2",
  tablist: {
    base: "flex text-center",
    variant: {
      default: "flex-wrap border-b border-gray-200 dark:border-gray-700",
      underline: "-mb-px flex-wrap border-b border-gray-200 dark:border-gray-700",
      pills: "flex-wrap space-x-2 text-sm font-medium text-gray-500 dark:text-gray-400",
      fullWidth: "grid w-full grid-flow-col divide-x divide-gray-200 rounded-none text-sm font-medium shadow dark:divide-gray-700 dark:text-gray-400"
    },
    tabitem: {
      base: "flex items-center justify-center rounded-t-lg p-4 text-sm font-medium first:ml-0 focus:outline-none focus:ring-4 focus:ring-cyan-300 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
      variant: {
        default: {
          base: "rounded-t-lg",
          active: {
            on: "bg-gray-100 text-cyan-600 dark:bg-gray-800 dark:text-cyan-500",
            off: "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          }
        },
        underline: {
          base: "rounded-t-lg",
          active: {
            on: "active rounded-t-lg border-b-2 border-cyan-600 text-cyan-600 dark:border-cyan-500 dark:text-cyan-500",
            off: "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
          }
        },
        pills: {
          base: "",
          active: {
            on: "rounded-lg bg-cyan-600 text-white",
            off: "rounded-lg hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
          }
        },
        fullWidth: {
          base: "ml-0 flex w-full rounded-none first:ml-0",
          active: {
            on: "active rounded-none bg-gray-100 p-4 text-gray-900 dark:bg-gray-700 dark:text-white",
            off: "rounded-none bg-white hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
          }
        }
      },
      icon: "mr-2 h-5 w-5"
    }
  },
  tabitemcontainer: {
    base: "",
    variant: {
      default: "",
      underline: "",
      pills: "",
      fullWidth: ""
    }
  },
  tabpanel: "py-3"
});

const textareaTheme = createTheme$2({
  base: "block w-full rounded-lg border text-sm disabled:cursor-not-allowed disabled:opacity-50",
  colors: {
    gray: "border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
    info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
    failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
    warning: "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
    success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
  },
  withShadow: {
    on: "shadow-sm dark:shadow-sm-light",
    off: ""
  }
});

const textInputTheme = createTheme$2({
  base: "flex",
  addon: "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
  field: {
    base: "relative w-full",
    icon: {
      base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
      svg: "h-5 w-5 text-gray-500 dark:text-gray-400"
    },
    rightIcon: {
      base: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
      svg: "h-5 w-5 text-gray-500 dark:text-gray-400"
    },
    input: {
      base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
      sizes: {
        sm: "p-2 sm:text-xs",
        md: "p-2.5 text-sm",
        lg: "p-4 sm:text-base"
      },
      colors: {
        gray: "border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
        info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
        failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
        warning: "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
        success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
      },
      withRightIcon: {
        on: "pr-10",
        off: ""
      },
      withIcon: {
        on: "pl-10",
        off: ""
      },
      withAddon: {
        on: "rounded-r-lg",
        off: "rounded-lg"
      },
      withShadow: {
        on: "shadow-sm dark:shadow-sm-light",
        off: ""
      }
    }
  }
});

const timelineTheme = createTheme$2({
  root: {
    direction: {
      horizontal: "sm:flex",
      vertical: "relative border-l border-gray-200 dark:border-gray-700"
    }
  },
  item: {
    root: {
      horizontal: "relative mb-6 sm:mb-0",
      vertical: "mb-10 ml-6"
    },
    content: {
      root: {
        base: "",
        horizontal: "mt-3 sm:pr-8",
        vertical: ""
      },
      body: {
        base: "mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
      },
      time: {
        base: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
      },
      title: {
        base: "text-lg font-semibold text-gray-900 dark:text-white"
      }
    },
    point: {
      horizontal: "flex items-center",
      line: "hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex",
      marker: {
        base: {
          horizontal: "absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700",
          vertical: "absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"
        },
        icon: {
          base: "h-3 w-3 text-cyan-600 dark:text-cyan-300",
          wrapper: "absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-200 ring-8 ring-white dark:bg-cyan-900 dark:ring-gray-900"
        }
      },
      vertical: ""
    }
  }
});

const toastTheme = createTheme$2({
  root: {
    base: "flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400",
    closed: "opacity-0 ease-out"
  },
  toggle: {
    base: "-m-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white",
    icon: "h-5 w-5 shrink-0"
  }
});

const toggleSwitchTheme = createTheme$2({
  root: {
    base: "group flex rounded-lg focus:outline-none",
    active: {
      on: "cursor-pointer",
      off: "cursor-not-allowed opacity-50"
    },
    label: "ms-3 mt-0.5 text-start text-sm font-medium text-gray-900 dark:text-gray-300"
  },
  toggle: {
    base: "relative rounded-full border after:absolute after:rounded-full after:bg-white after:transition-all group-focus:ring-4 group-focus:ring-cyan-500/25",
    checked: {
      on: "after:translate-x-full after:border-white rtl:after:-translate-x-full",
      off: "border-gray-200 bg-gray-200 dark:border-gray-600 dark:bg-gray-700",
      color: {
        blue: "border-cyan-700 bg-cyan-700",
        dark: "bg-dark-700 border-dark-900",
        failure: "border-red-900 bg-red-700",
        gray: "border-gray-600 bg-gray-500",
        green: "border-green-700 bg-green-600",
        light: "bg-light-700 border-light-900",
        red: "border-red-900 bg-red-700",
        purple: "border-purple-900 bg-purple-700",
        success: "border-green-500 bg-green-500",
        yellow: "border-yellow-400 bg-yellow-400",
        warning: "border-yellow-600 bg-yellow-600",
        cyan: "border-cyan-500 bg-cyan-500",
        lime: "border-lime-400 bg-lime-400",
        indigo: "border-indigo-400 bg-indigo-400",
        teal: "bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4",
        info: "border-cyan-600 bg-cyan-600",
        pink: "border-pink-600 bg-pink-600"
      }
    },
    sizes: {
      sm: "h-5 w-9 min-w-9 after:left-px after:top-px after:h-4 after:w-4 rtl:after:right-px",
      md: "h-6 w-11 min-w-11 after:left-px after:top-px after:h-5 after:w-5 rtl:after:right-px",
      lg: "h-7 w-14 min-w-14 after:left-1 after:top-0.5 after:h-6 after:w-6 rtl:after:right-1"
    }
  }
});

const tooltipTheme = createTheme$2({
  target: "w-fit",
  animation: "transition-opacity",
  arrow: {
    base: "absolute z-10 h-2 w-2 rotate-45",
    style: {
      dark: "bg-gray-900 dark:bg-gray-700",
      light: "bg-white",
      auto: "bg-white dark:bg-gray-700"
    },
    placement: "-4px"
  },
  base: "absolute z-10 inline-block rounded-lg px-3 py-2 text-sm font-medium shadow-sm",
  hidden: "invisible opacity-0",
  style: {
    dark: "bg-gray-900 text-white dark:bg-gray-700",
    light: "border border-gray-200 bg-white text-gray-900",
    auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white"
  },
  content: "relative z-20"
});

const theme = {
  accordion: accordionTheme,
  alert: alertTheme,
  avatar: avatarTheme,
  badge: badgeTheme,
  blockquote: blockquoteTheme,
  breadcrumb: breadcrumbTheme,
  button: buttonTheme,
  buttonGroup: buttonGroupTheme,
  card: cardTheme,
  carousel: carouselTheme,
  checkbox: checkboxTheme,
  clipboard: clipboardTheme,
  datepicker: datePickerTheme,
  darkThemeToggle: darkThemeToggleTheme,
  drawer: drawerTheme,
  dropdown: dropdownTheme,
  fileInput: fileInputTheme,
  floatingLabel: floatingLabelTheme,
  footer: footerTheme,
  helperText: helperTextTheme,
  hr: hrTheme,
  kbd: kbdTheme,
  label: labelTheme,
  listGroup: listGroupTheme,
  list: listTheme,
  megaMenu: megaMenuTheme,
  modal: modalTheme,
  navbar: navbarTheme,
  pagination: paginationTheme,
  popover: popoverTheme,
  progress: progressTheme,
  radio: radioTheme,
  rangeSlider: rangeSliderTheme,
  rating: ratingTheme,
  ratingAdvanced: ratingAdvancedTheme,
  select: selectTheme,
  textInput: textInputTheme,
  textarea: textareaTheme,
  toggleSwitch: toggleSwitchTheme,
  sidebar: sidebarTheme,
  spinner: spinnerTheme,
  table: tableTheme,
  tabs: tabTheme,
  timeline: timelineTheme,
  toast: toastTheme,
  tooltip: tooltipTheme
};

const store = {
  theme: cloneDeep(theme)
};
function getTheme() {
  return cloneDeep(store.theme);
}

const AccordionPanelContext = createContext(void 0);
function useAccordionContext() {
  const context = useContext(AccordionPanelContext);
  if (!context) {
    throw new Error("useAccordionContext should be used within the AccordionPanelContext provider!");
  }
  return context;
}

const AccordionContent = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { isOpen } = useAccordionContext();
  const theme = mergeDeep(getTheme().accordion.content, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: twMerge(theme.base, className),
      "data-testid": "flowbite-accordion-content",
      hidden: !isOpen,
      ...props,
      children
    }
  );
};

const AccordionPanel = ({ children, ...props }) => {
  const { alwaysOpen } = props;
  const [isOpen, setOpen] = useState(props.isOpen);
  const provider = alwaysOpen ? {
    ...props,
    isOpen,
    setOpen: () => setOpen(!isOpen)
  } : props;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionPanelContext.Provider, { value: provider, children });
};

const AccordionTitle = ({
  as: Heading = "h2",
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { arrowIcon: ArrowIcon, flush, isOpen, setOpen } = useAccordionContext();
  const onClick = () => typeof setOpen !== "undefined" && setOpen();
  const theme = mergeDeep(getTheme().accordion.title, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      className: twMerge(theme.base, theme.flush[flush ? "on" : "off"], theme.open[isOpen ? "on" : "off"], className),
      onClick,
      type: "button",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { className: theme.heading, "data-testid": "flowbite-accordion-heading", children }),
        ArrowIcon && /* @__PURE__ */ jsxRuntimeExports.jsx(
          ArrowIcon,
          {
            "aria-hidden": true,
            className: twMerge(theme.arrow.base, theme.arrow.open[isOpen ? "on" : "off"]),
            "data-testid": "flowbite-accordion-arrow"
          }
        )
      ]
    }
  );
};

const AccordionComponent = ({
  alwaysOpen = false,
  arrowIcon = HiChevronDown,
  children,
  flush = false,
  collapseAll = false,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const [isOpen, setOpen] = useState(collapseAll ? -1 : 0);
  const panels = useMemo(
    () => Children$1.map(
      children,
      (child, i) => cloneElement(child, {
        alwaysOpen,
        arrowIcon,
        flush,
        isOpen: isOpen === i,
        setOpen: () => setOpen(isOpen === i ? -1 : i)
      })
    ),
    [alwaysOpen, arrowIcon, children, flush, isOpen]
  );
  const theme = mergeDeep(getTheme().accordion.root, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: twMerge(theme.base, theme.flush[flush ? "on" : "off"], className),
      "data-testid": "flowbite-accordion",
      ...props,
      children: panels
    }
  );
};
AccordionComponent.displayName = "Accordion";
AccordionPanel.displayName = "Accordion.Panel";
AccordionTitle.displayName = "Accordion.Title";
AccordionContent.displayName = "Accordion.Content";
Object.assign(AccordionComponent, {
  Panel: AccordionPanel,
  Title: AccordionTitle,
  Content: AccordionContent
});

const Alert = ({
  additionalContent,
  children,
  className,
  color = "info",
  icon: Icon,
  onDismiss,
  rounded = true,
  theme: customTheme = {},
  withBorderAccent,
  ...props
}) => {
  const theme = mergeDeep(getTheme().alert, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: twMerge(
        theme.base,
        theme.color[color],
        rounded && theme.rounded,
        withBorderAccent && theme.borderAccent,
        className
      ),
      role: "alert",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: theme.wrapper, "data-testid": "flowbite-alert-wrapper", children: [
          Icon && /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: theme.icon, "data-testid": "flowbite-alert-icon" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children }),
          typeof onDismiss === "function" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              "aria-label": "Dismiss",
              className: twMerge(theme.closeButton.base, theme.closeButton.color[color]),
              onClick: onDismiss,
              type: "button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(HiX, { "aria-hidden": true, className: theme.closeButton.icon })
            }
          )
        ] }),
        additionalContent && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: additionalContent })
      ]
    }
  );
};
Alert.displayName = "Alert";

const AvatarGroup = ({ children, className, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().avatar.group, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-testid": "avatar-group-element", className: twMerge(theme.base, className), ...props, children });
};
AvatarGroup.displayName = "Avatar.Group";

const AvatarGroupCounter = ({
  className,
  href,
  theme: customTheme = {},
  total,
  ...props
}) => {
  const theme = mergeDeep(getTheme().avatar.groupCounter, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href, className: twMerge(theme.base, className), ...props, children: [
    "+",
    total
  ] });
};
AvatarGroupCounter.displayName = "Avatar.GroupCounter";

const AvatarComponent = ({
  alt = "",
  bordered = false,
  children,
  className,
  color = "light",
  img,
  placeholderInitials = "",
  rounded = false,
  size = "md",
  stacked = false,
  status,
  statusPosition = "top-left",
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().avatar, customTheme);
  const imgClassName = twMerge(
    theme.root.img.base,
    bordered && theme.root.bordered,
    bordered && theme.root.color[color],
    rounded && theme.root.rounded,
    stacked && theme.root.stacked,
    theme.root.img.on,
    theme.root.size[size]
  );
  const imgProps = {
    className: twMerge(imgClassName, theme.root.img.on),
    "data-testid": "flowbite-avatar-img"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: twMerge(theme.root.base, className), "data-testid": "flowbite-avatar", ...props, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      img ? typeof img === "string" ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { alt, src: img, ...imgProps }) : img({ alt, ...imgProps }) : placeholderInitials ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: twMerge(
            theme.root.img.off,
            theme.root.initials.base,
            stacked && theme.root.stacked,
            bordered && theme.root.bordered,
            bordered && theme.root.color[color],
            theme.root.size[size],
            rounded && theme.root.rounded
          ),
          "data-testid": "flowbite-avatar-initials-placeholder",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: twMerge(theme.root.initials.text), "data-testid": "flowbite-avatar-initials-placeholder-text", children: placeholderInitials })
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: twMerge(imgClassName, theme.root.img.off), "data-testid": "flowbite-avatar-img", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "svg",
        {
          className: theme.root.img.placeholder,
          fill: "currentColor",
          viewBox: "0 0 20 20",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fillRule: "evenodd", d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z", clipRule: "evenodd" })
        }
      ) }),
      status && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          "data-testid": "flowbite-avatar-status",
          className: twMerge(
            theme.root.status.base,
            theme.root.status[status],
            theme.root.statusPosition[statusPosition]
          )
        }
      )
    ] }),
    children && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children })
  ] });
};
AvatarComponent.displayName = "Avatar";
Object.assign(AvatarComponent, {
  Group: AvatarGroup,
  Counter: AvatarGroupCounter
});

const Badge = ({
  children,
  color = "info",
  href,
  icon: Icon,
  size = "xs",
  className,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().badge, customTheme);
  const Content = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: twMerge(
        theme.root.base,
        theme.root.color[color],
        theme.root.size[size],
        theme.icon[Icon ? "on" : "off"],
        className
      ),
      "data-testid": "flowbite-badge",
      ...props,
      children: [
        Icon && /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { "aria-hidden": true, className: theme.icon.size[size], "data-testid": "flowbite-badge-icon" }),
        children && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children })
      ]
    }
  );
  return href ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: theme.root.href, href, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Content, {}) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Content, {});
};
Badge.displayName = "Badge";

const Spinner = ({
  className,
  color = "info",
  light,
  size = "md",
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().spinner, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { role: "status", ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      fill: "none",
      viewBox: "0 0 100 101",
      className: twMerge(
        theme.base,
        theme.color[color],
        theme.light[light ? "on" : "off"].base,
        theme.light[light ? "on" : "off"].color[color],
        theme.size[size],
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
            fill: "currentFill"
          }
        )
      ]
    }
  ) });
};
Spinner.displayName = "Spinner";

const ButtonBase = forwardRef(
  ({ children, as: Component, href, type = "button", ...props }, ref) => {
    const BaseComponent = Component || (href ? "a" : "button");
    return createElement(BaseComponent, { ref, href, type, ...props }, children);
  }
);
ButtonBase.displayName = "ButtonBaseComponent";

const processChildren = (children, outline, pill) => {
  return Children$1.map(children, (child, index) => {
    if (isValidElement(child)) {
      const positionInGroupProp = child.type == Button ? { positionInGroup: determinePosition(index, Children$1.count(children)) } : {};
      if (child.props.children) {
        return cloneElement(child, {
          ...child.props,
          children: processChildren(child.props.children, outline, pill),
          ...positionInGroupProp
        });
      } else {
        return cloneElement(child, {
          outline,
          pill,
          ...positionInGroupProp
        });
      }
    }
    return child;
  });
};
const determinePosition = (index, totalChildren) => {
  return index === 0 ? "start" : index === totalChildren - 1 ? "end" : "middle";
};
const ButtonGroup = ({
  children,
  className,
  outline,
  pill,
  theme: customTheme = {},
  ...props
}) => {
  const items = useMemo(() => processChildren(children, outline, pill), [children, outline, pill]);
  const theme = mergeDeep(getTheme().buttonGroup, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: twMerge(theme.base, className), role: "group", ...props, children: items });
};
ButtonGroup.displayName = "Button.Group";

const ButtonComponent = forwardRef(
  ({
    children,
    className,
    color = "info",
    disabled,
    fullSized,
    isProcessing = false,
    processingLabel = "Loading...",
    processingSpinner,
    gradientDuoTone,
    gradientMonochrome,
    label,
    outline = false,
    pill = false,
    positionInGroup = "none",
    size = "md",
    theme: customTheme = {},
    ...props
  }, ref) => {
    const { buttonGroup: groupTheme, button: buttonTheme } = getTheme();
    const theme = mergeDeep(buttonTheme, customTheme);
    const theirProps = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ButtonBase,
      {
        ref,
        disabled,
        className: twMerge(
          theme.base,
          disabled && theme.disabled,
          !gradientDuoTone && !gradientMonochrome && theme.color[color],
          gradientDuoTone && !gradientMonochrome && theme.gradientDuoTone[gradientDuoTone],
          !gradientDuoTone && gradientMonochrome && theme.gradient[gradientMonochrome],
          outline && (theme.outline.color[color] ?? theme.outline.color.default),
          theme.pill[pill ? "on" : "off"],
          fullSized && theme.fullSized,
          groupTheme.position[positionInGroup],
          className
        ),
        ...theirProps,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: twMerge(
              theme.inner.base,
              theme.outline[outline ? "on" : "off"],
              theme.outline.pill[outline && pill ? "on" : "off"],
              theme.size[size],
              outline && !theme.outline.color[color] && theme.inner.outline,
              isProcessing && theme.isProcessing,
              isProcessing && theme.inner.isProcessingPadding[size],
              theme.inner.position[positionInGroup]
            ),
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              isProcessing && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: twMerge(theme.spinnerSlot, theme.spinnerLeftPosition[size]), children: processingSpinner || /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size }) }),
              typeof children !== "undefined" ? children : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-testid": "flowbite-button-label", className: twMerge(theme.label), children: isProcessing ? processingLabel : label })
            ] })
          }
        )
      }
    );
  }
);
ButtonComponent.displayName = "Button";
const Button = Object.assign(ButtonComponent, {
  Group: ButtonGroup
});

const BannerCollapseButton = ({ children, ...props }) => {
  const onClick = (event) => {
    const collapseButton = event.target;
    const parentBanner = collapseButton.closest('[role="banner"]');
    parentBanner?.remove();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick, ...props, children });
};
BannerCollapseButton.displayName = "Banner.CollapseButton";

const BannerComponent = ({ children, ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-testid": "flowbite-banner", role: "banner", tabIndex: -1, ...props, children });
};
BannerComponent.displayName = "Banner";
Object.assign(BannerComponent, {
  CollapseButton: BannerCollapseButton
});

const BreadcrumbItem = forwardRef(
  ({ children, className, href, icon: Icon, theme: customTheme = {}, ...props }, ref) => {
    const isLink = typeof href !== "undefined";
    const Component = isLink ? "a" : "span";
    const theme = mergeDeep(getTheme().breadcrumb.item, customTheme);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: twMerge(theme.base, className), ...props, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HiOutlineChevronRight, { "aria-hidden": true, className: theme.chevron, "data-testid": "flowbite-breadcrumb-separator" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Component,
        {
          ref,
          className: theme.href[isLink ? "on" : "off"],
          "data-testid": "flowbite-breadcrumb-item",
          href,
          children: [
            Icon && /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { "aria-hidden": true, className: theme.icon }),
            children
          ]
        }
      )
    ] });
  }
);
BreadcrumbItem.displayName = "Breadcrumb.Item";

const BreadcrumbComponent = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().breadcrumb.root, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "Breadcrumb", className: twMerge(theme.base, className), ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: theme.list, children }) });
};
BreadcrumbComponent.displayName = "Breadcrumb";
Object.assign(BreadcrumbComponent, {
  Item: BreadcrumbItem
});

var classnames$1 = {exports: {}};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
classnames$1.exports;

var hasRequiredClassnames;

function requireClassnames () {
	if (hasRequiredClassnames) return classnames$1.exports;
	hasRequiredClassnames = 1;
	(function (module) {
		/* global define */

		(function () {

			var hasOwn = {}.hasOwnProperty;

			function classNames () {
				var classes = '';

				for (var i = 0; i < arguments.length; i++) {
					var arg = arguments[i];
					if (arg) {
						classes = appendClass(classes, parseValue(arg));
					}
				}

				return classes;
			}

			function parseValue (arg) {
				if (typeof arg === 'string' || typeof arg === 'number') {
					return arg;
				}

				if (typeof arg !== 'object') {
					return '';
				}

				if (Array.isArray(arg)) {
					return classNames.apply(null, arg);
				}

				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					return arg.toString();
				}

				var classes = '';

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes = appendClass(classes, key);
					}
				}

				return classes;
			}

			function appendClass (value, newClass) {
				if (!newClass) {
					return value;
				}
			
				if (value) {
					return value + ' ' + newClass;
				}
			
				return value + newClass;
			}

			if (module.exports) {
				classNames.default = classNames;
				module.exports = classNames;
			} else {
				window.classNames = classNames;
			}
		}()); 
	} (classnames$1));
	return classnames$1.exports;
}

var classnamesExports = requireClassnames();
var classnames = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);

var debounce$1 = {exports: {}};

var hasRequiredDebounce;

function requireDebounce () {
	if (hasRequiredDebounce) return debounce$1.exports;
	hasRequiredDebounce = 1;
	function debounce(function_, wait = 100, options = {}) {
		if (typeof function_ !== 'function') {
			throw new TypeError(`Expected the first parameter to be a function, got \`${typeof function_}\`.`);
		}

		if (wait < 0) {
			throw new RangeError('`wait` must not be negative.');
		}

		// TODO: Deprecate the boolean parameter at some point.
		const {immediate} = typeof options === 'boolean' ? {immediate: options} : options;

		let storedContext;
		let storedArguments;
		let timeoutId;
		let timestamp;
		let result;

		function run() {
			const callContext = storedContext;
			const callArguments = storedArguments;
			storedContext = undefined;
			storedArguments = undefined;
			result = function_.apply(callContext, callArguments);
			return result;
		}

		function later() {
			const last = Date.now() - timestamp;

			if (last < wait && last >= 0) {
				timeoutId = setTimeout(later, wait - last);
			} else {
				timeoutId = undefined;

				if (!immediate) {
					result = run();
				}
			}
		}

		const debounced = function (...arguments_) {
			if (storedContext && this !== storedContext) {
				throw new Error('Debounced method called with different contexts.');
			}

			storedContext = this; // eslint-disable-line unicorn/no-this-assignment
			storedArguments = arguments_;
			timestamp = Date.now();

			const callNow = immediate && !timeoutId;

			if (!timeoutId) {
				timeoutId = setTimeout(later, wait);
			}

			if (callNow) {
				result = run();
			}

			return result;
		};

		debounced.clear = () => {
			if (!timeoutId) {
				return;
			}

			clearTimeout(timeoutId);
			timeoutId = undefined;
		};

		debounced.flush = () => {
			if (!timeoutId) {
				return;
			}

			debounced.trigger();
		};

		debounced.trigger = () => {
			result = run();

			debounced.clear();
		};

		return debounced;
	}

	// Adds compatibility for ES modules
	debounce$1.exports.debounce = debounce;

	debounce$1.exports = debounce;
	return debounce$1.exports;
}

var debounceExports = /*@__PURE__*/ requireDebounce();
var debounce = /*@__PURE__*/getDefaultExportFromCjs(debounceExports);

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
const SCROLL_END_DEBOUNCE = 300;
const LEFT_BUTTON = 0;
class ScrollContainer extends PureComponent {
  constructor(props) {
    super(props);
    __publicField(this, "container");
    __publicField(this, "scrolling");
    __publicField(this, "started");
    __publicField(this, "pressed");
    __publicField(this, "isMobile", false);
    __publicField(this, "internal");
    __publicField(this, "scrollLeft");
    __publicField(this, "scrollTop");
    __publicField(this, "clientX");
    __publicField(this, "clientY");
    // Simulate 'onEndScroll' event that fires when scrolling is stopped
    __publicField(this, "onEndScroll", () => {
      this.scrolling = false;
      if (!this.pressed && this.started) {
        this.processEnd();
      }
    });
    __publicField(this, "onScroll", () => {
      const container = this.container.current;
      if (container.scrollLeft !== this.scrollLeft || container.scrollTop !== this.scrollTop) {
        this.scrolling = true;
        this.processScroll();
        this.onEndScroll();
      }
    });
    __publicField(this, "onTouchStart", (e) => {
      const { nativeMobileScroll } = this.props;
      if (this.isDraggable(e.target)) {
        this.internal = true;
        if (nativeMobileScroll && this.scrolling) {
          this.pressed = true;
        } else {
          const touch = e.touches[0];
          this.processClick(touch.clientX, touch.clientY);
          if (!nativeMobileScroll && this.props.stopPropagation) {
            e.stopPropagation();
          }
        }
      }
    });
    __publicField(this, "onTouchEnd", () => {
      const { nativeMobileScroll } = this.props;
      if (this.pressed) {
        if (this.started && (!this.scrolling || !nativeMobileScroll)) {
          this.processEnd();
        } else {
          this.pressed = false;
        }
        this.forceUpdate();
      }
    });
    __publicField(this, "onTouchMove", (e) => {
      const { nativeMobileScroll } = this.props;
      if (this.pressed && (!nativeMobileScroll || !this.isMobile)) {
        const touch = e.touches[0];
        if (touch) {
          this.processMove(touch.clientX, touch.clientY);
        }
        e.preventDefault();
        if (this.props.stopPropagation) {
          e.stopPropagation();
        }
      }
    });
    __publicField(this, "onMouseDown", (e) => {
      if (this.isDraggable(e.target) && this.isScrollable()) {
        this.internal = true;
        if (this.props?.buttons?.indexOf(e.button) !== -1) {
          this.processClick(e.clientX, e.clientY);
          e.preventDefault();
          if (this.props.stopPropagation) {
            e.stopPropagation();
          }
        }
      }
    });
    __publicField(this, "onMouseMove", (e) => {
      if (this.pressed) {
        this.processMove(e.clientX, e.clientY);
        e.preventDefault();
        if (this.props.stopPropagation) {
          e.stopPropagation();
        }
      }
    });
    __publicField(this, "onMouseUp", (e) => {
      if (this.pressed) {
        if (this.started) {
          this.processEnd();
        } else {
          this.internal = false;
          this.pressed = false;
          this.forceUpdate();
          if (this.props.onClick) {
            this.props.onClick(e);
          }
        }
        e.preventDefault();
        if (this.props.stopPropagation) {
          e.stopPropagation();
        }
      }
    });
    this.container = React__default.createRef();
    this.onEndScroll = debounce(this.onEndScroll, SCROLL_END_DEBOUNCE);
    this.scrolling = false;
    this.started = false;
    this.pressed = false;
    this.internal = false;
    this.getRef = this.getRef.bind(this);
  }
  componentDidMount() {
    const { nativeMobileScroll } = this.props;
    const container = this.container.current;
    window.addEventListener("mouseup", this.onMouseUp);
    window.addEventListener("mousemove", this.onMouseMove);
    window.addEventListener("touchmove", this.onTouchMove, { passive: false });
    window.addEventListener("touchend", this.onTouchEnd);
    container.addEventListener("touchstart", this.onTouchStart, {
      passive: false
    });
    container.addEventListener("mousedown", this.onMouseDown, {
      passive: false
    });
    if (nativeMobileScroll) {
      this.isMobile = this.isMobileDevice();
      if (this.isMobile) {
        this.forceUpdate();
      }
    }
  }
  componentWillUnmount() {
    window.removeEventListener("mouseup", this.onMouseUp);
    window.removeEventListener("mousemove", this.onMouseMove);
    window.removeEventListener("touchmove", this.onTouchMove);
    window.removeEventListener("touchend", this.onTouchEnd);
  }
  getElement() {
    return this.container.current;
  }
  isMobileDevice() {
    return typeof window.orientation !== "undefined" || navigator.userAgent.indexOf("IEMobile") !== -1;
  }
  isDraggable(target) {
    const ignoreElements = this.props.ignoreElements;
    if (ignoreElements) {
      const closest = target.closest(ignoreElements);
      return closest === null || closest.contains(this.getElement());
    } else {
      return true;
    }
  }
  isScrollable() {
    const container = this.container.current;
    return container && (container.scrollWidth > container.clientWidth || container.scrollHeight > container.clientHeight);
  }
  processClick(clientX, clientY) {
    const container = this.container.current;
    this.scrollLeft = container?.scrollLeft;
    this.scrollTop = container?.scrollTop;
    this.clientX = clientX;
    this.clientY = clientY;
    this.pressed = true;
  }
  processStart(changeCursor = true) {
    const { onStartScroll } = this.props;
    this.started = true;
    if (changeCursor) {
      document.body.classList.add("cursor-grab");
    }
    if (onStartScroll) {
      onStartScroll({
        external: !this.internal
      });
    }
    this.forceUpdate();
  }
  // Process native scroll (scrollbar, mobile scroll)
  processScroll() {
    if (this.started) {
      const { onScroll } = this.props;
      if (onScroll) {
        onScroll({
          external: !this.internal
        });
      }
    } else {
      this.processStart(false);
    }
  }
  // Process non-native scroll
  processMove(newClientX, newClientY) {
    const { horizontal, vertical, activationDistance, onScroll } = this.props;
    const container = this.container.current;
    if (!this.started) {
      if (horizontal && Math.abs(newClientX - this.clientX) > activationDistance || vertical && Math.abs(newClientY - this.clientY) > activationDistance) {
        this.clientX = newClientX;
        this.clientY = newClientY;
        this.processStart();
      }
    } else {
      if (horizontal) {
        container.scrollLeft -= newClientX - this.clientX;
      }
      if (vertical) {
        container.scrollTop -= newClientY - this.clientY;
      }
      if (onScroll) {
        onScroll({ external: !this.internal });
      }
      this.clientX = newClientX;
      this.clientY = newClientY;
      this.scrollLeft = container.scrollLeft;
      this.scrollTop = container.scrollTop;
    }
  }
  processEnd() {
    const { onEndScroll } = this.props;
    const container = this.container.current;
    if (container && onEndScroll) {
      onEndScroll({
        external: !this.internal
      });
    }
    this.pressed = false;
    this.started = false;
    this.scrolling = false;
    this.internal = false;
    document.body.classList.remove("cursor-grab");
    this.forceUpdate();
  }
  getRef(el) {
    [this.container, this.props.innerRef].forEach((ref) => {
      if (ref) {
        if (typeof ref === "function") {
          ref(el);
        } else {
          ref.current = el;
        }
      }
    });
  }
  render() {
    const { children, draggingClassName, className, style, hideScrollbars } = this.props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: classnames(className, this.pressed && draggingClassName, {
          "!scroll-auto [&>*]:pointer-events-none [&>*]:cursor-grab": this.pressed,
          "overflow-auto": this.isMobile,
          "overflow-hidden !overflow-x-hidden [overflow:-moz-scrollbars-none] [scrollbar-width:none]": hideScrollbars,
          "[&::-webkit-scrollbar]:[-webkit-appearance:none !important] [&::-webkit-scrollbar]:!hidden [&::-webkit-scrollbar]:!h-0 [&::-webkit-scrollbar]:!w-0 [&::-webkit-scrollbar]:!bg-transparent": hideScrollbars
        }),
        style,
        ref: this.getRef,
        onScroll: this.onScroll,
        children
      }
    );
  }
}
__publicField(ScrollContainer, "defaultProps", {
  nativeMobileScroll: true,
  hideScrollbars: true,
  activationDistance: 10,
  vertical: true,
  horizontal: true,
  stopPropagation: false,
  style: {},
  buttons: [LEFT_BUTTON]
});

const Checkbox = forwardRef(
  ({ className, color = "default", theme: customTheme = {}, ...props }, ref) => {
    const theme = mergeDeep(getTheme().checkbox, customTheme);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        ref,
        type: "checkbox",
        className: twMerge(theme.root.base, theme.root.color[color], className),
        ...props
      }
    );
  }
);
Checkbox.displayName = "Checkbox";

function hasWindow() {
  return typeof window !== 'undefined';
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || '').toLowerCase();
  }
  // Mocked nodes in testing environments may not be instances of Node. By
  // returning `#document` an infinite loop won't occur.
  // https://github.com/floating-ui/floating-ui/issues/2317
  return '#document';
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === 'undefined') {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
}
function isTableElement(element) {
  return ['table', 'td', 'th'].includes(getNodeName(element));
}
function isTopLayer(element) {
  return [':popover-open', ':modal'].some(selector => {
    try {
      return element.matches(selector);
    } catch (e) {
      return false;
    }
  });
}
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement(elementOrCss) ? getComputedStyle$1(elementOrCss) : elementOrCss;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  return css.transform !== 'none' || css.perspective !== 'none' || (css.containerType ? css.containerType !== 'normal' : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !webkit && (css.filter ? css.filter !== 'none' : false) || ['transform', 'perspective', 'filter'].some(value => (css.willChange || '').includes(value)) || ['paint', 'layout', 'strict', 'content'].some(value => (css.contain || '').includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === 'undefined' || !CSS.supports) return false;
  return CSS.supports('-webkit-backdrop-filter', 'none');
}
function isLastTraversableNode(node) {
  return ['html', 'body', '#document'].includes(getNodeName(node));
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }
  const result =
  // Step into the shadow DOM of the parent of a slotted node.
  node.assignedSlot ||
  // DOM Element detected.
  node.parentNode ||
  // ShadowRoot detected.
  isShadowRoot(node) && node.host ||
  // Fallback.
  getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}

function activeElement(doc) {
  let activeElement = doc.activeElement;
  while (((_activeElement = activeElement) == null || (_activeElement = _activeElement.shadowRoot) == null ? void 0 : _activeElement.activeElement) != null) {
    var _activeElement;
    activeElement = activeElement.shadowRoot.activeElement;
  }
  return activeElement;
}
function contains(parent, child) {
  if (!parent || !child) {
    return false;
  }
  const rootNode = child.getRootNode == null ? void 0 : child.getRootNode();

  // First, attempt with faster native method
  if (parent.contains(child)) {
    return true;
  }

  // then fallback to custom implementation with Shadow DOM support
  if (rootNode && isShadowRoot(rootNode)) {
    let next = child;
    while (next) {
      if (parent === next) {
        return true;
      }
      // @ts-ignore
      next = next.parentNode || next.host;
    }
  }

  // Give up, the result is false
  return false;
}
// Avoid Chrome DevTools blue warning.
function getPlatform() {
  const uaData = navigator.userAgentData;
  if (uaData != null && uaData.platform) {
    return uaData.platform;
  }
  return navigator.platform;
}
function getUserAgent() {
  const uaData = navigator.userAgentData;
  if (uaData && Array.isArray(uaData.brands)) {
    return uaData.brands.map(_ref => {
      let {
        brand,
        version
      } = _ref;
      return brand + "/" + version;
    }).join(' ');
  }
  return navigator.userAgent;
}

// License: https://github.com/adobe/react-spectrum/blob/b35d5c02fe900badccd0cf1a8f23bb593419f238/packages/@react-aria/utils/src/isVirtualEvent.ts
function isVirtualClick(event) {
  // FIXME: Firefox is now emitting a deprecation warning for `mozInputSource`.
  // Try to find a workaround for this. `react-aria` source still has the check.
  if (event.mozInputSource === 0 && event.isTrusted) {
    return true;
  }
  if (isAndroid() && event.pointerType) {
    return event.type === 'click' && event.buttons === 1;
  }
  return event.detail === 0 && !event.pointerType;
}
function isVirtualPointerEvent(event) {
  if (isJSDOM()) return false;
  return !isAndroid() && event.width === 0 && event.height === 0 || isAndroid() && event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === 'mouse' ||
  // iOS VoiceOver returns 0.333• for width/height.
  event.width < 1 && event.height < 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === 'touch';
}
function isSafari() {
  // Chrome DevTools does not complain about navigator.vendor
  return /apple/i.test(navigator.vendor);
}
function isAndroid() {
  const re = /android/i;
  return re.test(getPlatform()) || re.test(getUserAgent());
}
function isMac() {
  return getPlatform().toLowerCase().startsWith('mac') && !navigator.maxTouchPoints;
}
function isJSDOM() {
  return getUserAgent().includes('jsdom/');
}
function isMouseLikePointerType(pointerType, strict) {
  // On some Linux machines with Chromium, mouse inputs return a `pointerType`
  // of "pen": https://github.com/floating-ui/floating-ui/issues/2015
  const values = ['mouse', 'pen'];
  if (!strict) {
    values.push('', undefined);
  }
  return values.includes(pointerType);
}
function isReactEvent(event) {
  return 'nativeEvent' in event;
}
function isRootElement(element) {
  return element.matches('html,body');
}
function getDocument(node) {
  return (node == null ? void 0 : node.ownerDocument) || document;
}
function isEventTargetWithin(event, node) {
  if (node == null) {
    return false;
  }
  if ('composedPath' in event) {
    return event.composedPath().includes(node);
  }

  // TS thinks `event` is of type never as it assumes all browsers support composedPath, but browsers without shadow dom don't
  const e = event;
  return e.target != null && node.contains(e.target);
}
function getTarget(event) {
  if ('composedPath' in event) {
    return event.composedPath()[0];
  }

  // TS thinks `event` is of type never as it assumes all browsers support
  // `composedPath()`, but browsers without shadow DOM don't.
  return event.target;
}
const TYPEABLE_SELECTOR = "input:not([type='hidden']):not([disabled])," + "[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function isTypeableElement(element) {
  return isHTMLElement(element) && element.matches(TYPEABLE_SELECTOR);
}
function stopEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}
function isTypeableCombobox(element) {
  if (!element) return false;
  return element.getAttribute('role') === 'combobox' && isTypeableElement(element);
}

/**
 * Custom positioning reference element.
 * @see https://floating-ui.com/docs/virtual-elements
 */

const sides = ['top', 'right', 'bottom', 'left'];
const alignments = ['start', 'end'];
const placements = /*#__PURE__*/sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
const min = Math.min;
const max = Math.max;
const round$1 = Math.round;
const floor = Math.floor;
const createCoords = v => ({
  x: v,
  y: v
});
const oppositeSideMap = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
const oppositeAlignmentMap = {
  start: 'end',
  end: 'start'
};
function clamp$1(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === 'function' ? value(param) : value;
}
function getSide(placement) {
  return placement.split('-')[0];
}
function getAlignment(placement) {
  return placement.split('-')[1];
}
function getOppositeAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
function getAxisLength(axis) {
  return axis === 'y' ? 'height' : 'width';
}
function getSideAxis(placement) {
  return ['top', 'bottom'].includes(getSide(placement)) ? 'y' : 'x';
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ['left', 'right'];
  const rl = ['right', 'left'];
  const tb = ['top', 'bottom'];
  const bt = ['bottom', 'top'];
  switch (side) {
    case 'top':
    case 'bottom':
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case 'left':
    case 'right':
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === 'start', rtl);
  if (alignment) {
    list = list.map(side => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}

/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
// NOTE: separate `:not()` selectors has broader browser support than the newer
//  `:not([inert], [inert] *)` (Feb 2023)
// CAREFUL: JSDom does not support `:not([inert] *)` as a selector; using it causes
//  the entire query to fail, resulting in no nodes found, which will break a lot
//  of things... so we have to rely on JS to identify nodes inside an inert container
var candidateSelectors = ['input:not([inert])', 'select:not([inert])', 'textarea:not([inert])', 'a[href]:not([inert])', 'button:not([inert])', '[tabindex]:not(slot):not([inert])', 'audio[controls]:not([inert])', 'video[controls]:not([inert])', '[contenteditable]:not([contenteditable="false"]):not([inert])', 'details>summary:first-of-type:not([inert])', 'details:not([inert])'];
var candidateSelector = /* #__PURE__ */candidateSelectors.join(',');
var NoElement = typeof Element === 'undefined';
var matches = NoElement ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function (element) {
  var _element$getRootNode;
  return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
} : function (element) {
  return element === null || element === void 0 ? void 0 : element.ownerDocument;
};

/**
 * Determines if a node is inert or in an inert ancestor.
 * @param {Element} [node]
 * @param {boolean} [lookUp] If true and `node` is not inert, looks up at ancestors to
 *  see if any of them are inert. If false, only `node` itself is considered.
 * @returns {boolean} True if inert itself or by way of being in an inert ancestor.
 *  False if `node` is falsy.
 */
var isInert = function isInert(node, lookUp) {
  var _node$getAttribute;
  if (lookUp === void 0) {
    lookUp = true;
  }
  // CAREFUL: JSDom does not support inert at all, so we can't use the `HTMLElement.inert`
  //  JS API property; we have to check the attribute, which can either be empty or 'true';
  //  if it's `null` (not specified) or 'false', it's an active element
  var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, 'inert');
  var inert = inertAtt === '' || inertAtt === 'true';

  // NOTE: this could also be handled with `node.matches('[inert], :is([inert] *)')`
  //  if it weren't for `matches()` not being a function on shadow roots; the following
  //  code works for any kind of node
  // CAREFUL: JSDom does not appear to support certain selectors like `:not([inert] *)`
  //  so it likely would not support `:is([inert] *)` either...
  var result = inert || lookUp && node && isInert(node.parentNode); // recursive

  return result;
};

/**
 * Determines if a node's content is editable.
 * @param {Element} [node]
 * @returns True if it's content-editable; false if it's not or `node` is falsy.
 */
var isContentEditable = function isContentEditable(node) {
  var _node$getAttribute2;
  // CAREFUL: JSDom does not support the `HTMLElement.isContentEditable` API so we have
  //  to use the attribute directly to check for this, which can either be empty or 'true';
  //  if it's `null` (not specified) or 'false', it's a non-editable element
  var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, 'contenteditable');
  return attValue === '' || attValue === 'true';
};

/**
 * @param {Element} el container to check in
 * @param {boolean} includeContainer add container to check
 * @param {(node: Element) => boolean} filter filter candidates
 * @returns {Element[]}
 */
var getCandidates = function getCandidates(el, includeContainer, filter) {
  // even if `includeContainer=false`, we still have to check it for inertness because
  //  if it's inert, all its children are inert
  if (isInert(el)) {
    return [];
  }
  var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
  if (includeContainer && matches.call(el, candidateSelector)) {
    candidates.unshift(el);
  }
  candidates = candidates.filter(filter);
  return candidates;
};

/**
 * @callback GetShadowRoot
 * @param {Element} element to check for shadow root
 * @returns {ShadowRoot|boolean} ShadowRoot if available or boolean indicating if a shadowRoot is attached but not available.
 */

/**
 * @callback ShadowRootFilter
 * @param {Element} shadowHostNode the element which contains shadow content
 * @returns {boolean} true if a shadow root could potentially contain valid candidates.
 */

/**
 * @typedef {Object} CandidateScope
 * @property {Element} scopeParent contains inner candidates
 * @property {Element[]} candidates list of candidates found in the scope parent
 */

/**
 * @typedef {Object} IterativeOptions
 * @property {GetShadowRoot|boolean} getShadowRoot true if shadow support is enabled; falsy if not;
 *  if a function, implies shadow support is enabled and either returns the shadow root of an element
 *  or a boolean stating if it has an undisclosed shadow root
 * @property {(node: Element) => boolean} filter filter candidates
 * @property {boolean} flatten if true then result will flatten any CandidateScope into the returned list
 * @property {ShadowRootFilter} shadowRootFilter filter shadow roots;
 */

/**
 * @param {Element[]} elements list of element containers to match candidates from
 * @param {boolean} includeContainer add container list to check
 * @param {IterativeOptions} options
 * @returns {Array.<Element|CandidateScope>}
 */
var getCandidatesIteratively = function getCandidatesIteratively(elements, includeContainer, options) {
  var candidates = [];
  var elementsToCheck = Array.from(elements);
  while (elementsToCheck.length) {
    var element = elementsToCheck.shift();
    if (isInert(element, false)) {
      // no need to look up since we're drilling down
      // anything inside this container will also be inert
      continue;
    }
    if (element.tagName === 'SLOT') {
      // add shadow dom slot scope (slot itself cannot be focusable)
      var assigned = element.assignedElements();
      var content = assigned.length ? assigned : element.children;
      var nestedCandidates = getCandidatesIteratively(content, true, options);
      if (options.flatten) {
        candidates.push.apply(candidates, nestedCandidates);
      } else {
        candidates.push({
          scopeParent: element,
          candidates: nestedCandidates
        });
      }
    } else {
      // check candidate element
      var validCandidate = matches.call(element, candidateSelector);
      if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) {
        candidates.push(element);
      }

      // iterate over shadow content if possible
      var shadowRoot = element.shadowRoot ||
      // check for an undisclosed shadow
      typeof options.getShadowRoot === 'function' && options.getShadowRoot(element);

      // no inert look up because we're already drilling down and checking for inertness
      //  on the way down, so all containers to this root node should have already been
      //  vetted as non-inert
      var validShadowRoot = !isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element));
      if (shadowRoot && validShadowRoot) {
        // add shadow dom scope IIF a shadow root node was given; otherwise, an undisclosed
        //  shadow exists, so look at light dom children as fallback BUT create a scope for any
        //  child candidates found because they're likely slotted elements (elements that are
        //  children of the web component element (which has the shadow), in the light dom, but
        //  slotted somewhere _inside_ the undisclosed shadow) -- the scope is created below,
        //  _after_ we return from this recursive call
        var _nestedCandidates = getCandidatesIteratively(shadowRoot === true ? element.children : shadowRoot.children, true, options);
        if (options.flatten) {
          candidates.push.apply(candidates, _nestedCandidates);
        } else {
          candidates.push({
            scopeParent: element,
            candidates: _nestedCandidates
          });
        }
      } else {
        // there's not shadow so just dig into the element's (light dom) children
        //  __without__ giving the element special scope treatment
        elementsToCheck.unshift.apply(elementsToCheck, element.children);
      }
    }
  }
  return candidates;
};

/**
 * @private
 * Determines if the node has an explicitly specified `tabindex` attribute.
 * @param {HTMLElement} node
 * @returns {boolean} True if so; false if not.
 */
var hasTabIndex = function hasTabIndex(node) {
  return !isNaN(parseInt(node.getAttribute('tabindex'), 10));
};

/**
 * Determine the tab index of a given node.
 * @param {HTMLElement} node
 * @returns {number} Tab order (negative, 0, or positive number).
 * @throws {Error} If `node` is falsy.
 */
var getTabIndex = function getTabIndex(node) {
  if (!node) {
    throw new Error('No node provided');
  }
  if (node.tabIndex < 0) {
    // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
    // `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
    // yet they are still part of the regular tab order; in FF, they get a default
    // `tabIndex` of 0; since Chrome still puts those elements in the regular tab
    // order, consider their tab index to be 0.
    // Also browsers do not return `tabIndex` correctly for contentEditable nodes;
    // so if they don't have a tabindex attribute specifically set, assume it's 0.
    if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) {
      return 0;
    }
  }
  return node.tabIndex;
};

/**
 * Determine the tab index of a given node __for sort order purposes__.
 * @param {HTMLElement} node
 * @param {boolean} [isScope] True for a custom element with shadow root or slot that, by default,
 *  has tabIndex -1, but needs to be sorted by document order in order for its content to be
 *  inserted into the correct sort position.
 * @returns {number} Tab order (negative, 0, or positive number).
 */
var getSortOrderTabIndex = function getSortOrderTabIndex(node, isScope) {
  var tabIndex = getTabIndex(node);
  if (tabIndex < 0 && isScope && !hasTabIndex(node)) {
    return 0;
  }
  return tabIndex;
};
var sortOrderedTabbables = function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
};
var isInput = function isInput(node) {
  return node.tagName === 'INPUT';
};
var isHiddenInput = function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
};
var isDetailsWithSummary = function isDetailsWithSummary(node) {
  var r = node.tagName === 'DETAILS' && Array.prototype.slice.apply(node.children).some(function (child) {
    return child.tagName === 'SUMMARY';
  });
  return r;
};
var getCheckedRadio = function getCheckedRadio(nodes, form) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked && nodes[i].form === form) {
      return nodes[i];
    }
  }
};
var isTabbableRadio = function isTabbableRadio(node) {
  if (!node.name) {
    return true;
  }
  var radioScope = node.form || getRootNode(node);
  var queryRadios = function queryRadios(name) {
    return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
  };
  var radioSet;
  if (typeof window !== 'undefined' && typeof window.CSS !== 'undefined' && typeof window.CSS.escape === 'function') {
    radioSet = queryRadios(window.CSS.escape(node.name));
  } else {
    try {
      radioSet = queryRadios(node.name);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s', err.message);
      return false;
    }
  }
  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};
var isRadio = function isRadio(node) {
  return isInput(node) && node.type === 'radio';
};
var isNonTabbableRadio = function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
};

// determines if a node is ultimately attached to the window's document
var isNodeAttached = function isNodeAttached(node) {
  var _nodeRoot;
  // The root node is the shadow root if the node is in a shadow DOM; some document otherwise
  //  (but NOT _the_ document; see second 'If' comment below for more).
  // If rootNode is shadow root, it'll have a host, which is the element to which the shadow
  //  is attached, and the one we need to check if it's in the document or not (because the
  //  shadow, and all nodes it contains, is never considered in the document since shadows
  //  behave like self-contained DOMs; but if the shadow's HOST, which is part of the document,
  //  is hidden, or is not in the document itself but is detached, it will affect the shadow's
  //  visibility, including all the nodes it contains). The host could be any normal node,
  //  or a custom element (i.e. web component). Either way, that's the one that is considered
  //  part of the document, not the shadow root, nor any of its children (i.e. the node being
  //  tested).
  // To further complicate things, we have to look all the way up until we find a shadow HOST
  //  that is attached (or find none) because the node might be in nested shadows...
  // If rootNode is not a shadow root, it won't have a host, and so rootNode should be the
  //  document (per the docs) and while it's a Document-type object, that document does not
  //  appear to be the same as the node's `ownerDocument` for some reason, so it's safer
  //  to ignore the rootNode at this point, and use `node.ownerDocument`. Otherwise,
  //  using `rootNode.contains(node)` will _always_ be true we'll get false-positives when
  //  node is actually detached.
  // NOTE: If `nodeRootHost` or `node` happens to be the `document` itself (which is possible
  //  if a tabbable/focusable node was quickly added to the DOM, focused, and then removed
  //  from the DOM as in https://github.com/focus-trap/focus-trap-react/issues/905), then
  //  `ownerDocument` will be `null`, hence the optional chaining on it.
  var nodeRoot = node && getRootNode(node);
  var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;

  // in some cases, a detached node will return itself as the root instead of a document or
  //  shadow root object, in which case, we shouldn't try to look further up the host chain
  var attached = false;
  if (nodeRoot && nodeRoot !== node) {
    var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
    attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
    while (!attached && nodeRootHost) {
      var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
      // since it's not attached and we have a root host, the node MUST be in a nested shadow DOM,
      //  which means we need to get the host's host and check if that parent host is contained
      //  in (i.e. attached to) the document
      nodeRoot = getRootNode(nodeRootHost);
      nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
      attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
    }
  }
  return attached;
};
var isZeroArea = function isZeroArea(node) {
  var _node$getBoundingClie = node.getBoundingClientRect(),
    width = _node$getBoundingClie.width,
    height = _node$getBoundingClie.height;
  return width === 0 && height === 0;
};
var isHidden = function isHidden(node, _ref) {
  var displayCheck = _ref.displayCheck,
    getShadowRoot = _ref.getShadowRoot;
  // NOTE: visibility will be `undefined` if node is detached from the document
  //  (see notes about this further down), which means we will consider it visible
  //  (this is legacy behavior from a very long way back)
  // NOTE: we check this regardless of `displayCheck="none"` because this is a
  //  _visibility_ check, not a _display_ check
  if (getComputedStyle(node).visibility === 'hidden') {
    return true;
  }
  var isDirectSummary = matches.call(node, 'details>summary:first-of-type');
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
  if (matches.call(nodeUnderDetails, 'details:not([open]) *')) {
    return true;
  }
  if (!displayCheck || displayCheck === 'full' || displayCheck === 'legacy-full') {
    if (typeof getShadowRoot === 'function') {
      // figure out if we should consider the node to be in an undisclosed shadow and use the
      //  'non-zero-area' fallback
      var originalNode = node;
      while (node) {
        var parentElement = node.parentElement;
        var rootNode = getRootNode(node);
        if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true // check if there's an undisclosed shadow
        ) {
          // node has an undisclosed shadow which means we can only treat it as a black box, so we
          //  fall back to a non-zero-area test
          return isZeroArea(node);
        } else if (node.assignedSlot) {
          // iterate up slot
          node = node.assignedSlot;
        } else if (!parentElement && rootNode !== node.ownerDocument) {
          // cross shadow boundary
          node = rootNode.host;
        } else {
          // iterate up normal dom
          node = parentElement;
        }
      }
      node = originalNode;
    }
    // else, `getShadowRoot` might be true, but all that does is enable shadow DOM support
    //  (i.e. it does not also presume that all nodes might have undisclosed shadows); or
    //  it might be a falsy value, which means shadow DOM support is disabled

    // Since we didn't find it sitting in an undisclosed shadow (or shadows are disabled)
    //  now we can just test to see if it would normally be visible or not, provided it's
    //  attached to the main document.
    // NOTE: We must consider case where node is inside a shadow DOM and given directly to
    //  `isTabbable()` or `isFocusable()` -- regardless of `getShadowRoot` option setting.

    if (isNodeAttached(node)) {
      // this works wherever the node is: if there's at least one client rect, it's
      //  somehow displayed; it also covers the CSS 'display: contents' case where the
      //  node itself is hidden in place of its contents; and there's no need to search
      //  up the hierarchy either
      return !node.getClientRects().length;
    }

    // Else, the node isn't attached to the document, which means the `getClientRects()`
    //  API will __always__ return zero rects (this can happen, for example, if React
    //  is used to render nodes onto a detached tree, as confirmed in this thread:
    //  https://github.com/facebook/react/issues/9117#issuecomment-284228870)
    //
    // It also means that even window.getComputedStyle(node).display will return `undefined`
    //  because styles are only computed for nodes that are in the document.
    //
    // NOTE: THIS HAS BEEN THE CASE FOR YEARS. It is not new, nor is it caused by tabbable
    //  somehow. Though it was never stated officially, anyone who has ever used tabbable
    //  APIs on nodes in detached containers has actually implicitly used tabbable in what
    //  was later (as of v5.2.0 on Apr 9, 2021) called `displayCheck="none"` mode -- essentially
    //  considering __everything__ to be visible because of the innability to determine styles.
    //
    // v6.0.0: As of this major release, the default 'full' option __no longer treats detached
    //  nodes as visible with the 'none' fallback.__
    if (displayCheck !== 'legacy-full') {
      return true; // hidden
    }
    // else, fallback to 'none' mode and consider the node visible
  } else if (displayCheck === 'non-zero-area') {
    // NOTE: Even though this tests that the node's client rect is non-zero to determine
    //  whether it's displayed, and that a detached node will __always__ have a zero-area
    //  client rect, we don't special-case for whether the node is attached or not. In
    //  this mode, we do want to consider nodes that have a zero area to be hidden at all
    //  times, and that includes attached or not.
    return isZeroArea(node);
  }

  // visible, as far as we can tell, or per current `displayCheck=none` mode, we assume
  //  it's visible
  return false;
};

// form fields (nested) inside a disabled fieldset are not focusable/tabbable
//  unless they are in the _first_ <legend> element of the top-most disabled
//  fieldset
var isDisabledFromFieldset = function isDisabledFromFieldset(node) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
    var parentNode = node.parentElement;
    // check if `node` is contained in a disabled <fieldset>
    while (parentNode) {
      if (parentNode.tagName === 'FIELDSET' && parentNode.disabled) {
        // look for the first <legend> among the children of the disabled <fieldset>
        for (var i = 0; i < parentNode.children.length; i++) {
          var child = parentNode.children.item(i);
          // when the first <legend> (in document order) is found
          if (child.tagName === 'LEGEND') {
            // if its parent <fieldset> is not nested in another disabled <fieldset>,
            // return whether `node` is a descendant of its first <legend>
            return matches.call(parentNode, 'fieldset[disabled] *') ? true : !child.contains(node);
          }
        }
        // the disabled <fieldset> containing `node` has no <legend>
        return true;
      }
      parentNode = parentNode.parentElement;
    }
  }

  // else, node's tabbable/focusable state should not be affected by a fieldset's
  //  enabled/disabled state
  return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(options, node) {
  if (node.disabled ||
  // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  isInert(node) || isHiddenInput(node) || isHidden(node, options) ||
  // For a details element with a summary, the summary element gets the focus
  isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
    return false;
  }
  return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(options, node) {
  if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
    return false;
  }
  return true;
};
var isValidShadowRootTabbable = function isValidShadowRootTabbable(shadowHostNode) {
  var tabIndex = parseInt(shadowHostNode.getAttribute('tabindex'), 10);
  if (isNaN(tabIndex) || tabIndex >= 0) {
    return true;
  }
  // If a custom element has an explicit negative tabindex,
  // browsers will not allow tab targeting said element's children.
  return false;
};

/**
 * @param {Array.<Element|CandidateScope>} candidates
 * @returns Element[]
 */
var sortByOrder = function sortByOrder(candidates) {
  var regularTabbables = [];
  var orderedTabbables = [];
  candidates.forEach(function (item, i) {
    var isScope = !!item.scopeParent;
    var element = isScope ? item.scopeParent : item;
    var candidateTabindex = getSortOrderTabIndex(element, isScope);
    var elements = isScope ? sortByOrder(item.candidates) : element;
    if (candidateTabindex === 0) {
      isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        item: item,
        isScope: isScope,
        content: elements
      });
    }
  });
  return orderedTabbables.sort(sortOrderedTabbables).reduce(function (acc, sortable) {
    sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
    return acc;
  }, []).concat(regularTabbables);
};
var tabbable = function tabbable(container, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([container], options.includeContainer, {
      filter: isNodeMatchingSelectorTabbable.bind(null, options),
      flatten: false,
      getShadowRoot: options.getShadowRoot,
      shadowRootFilter: isValidShadowRootTabbable
    });
  } else {
    candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
  }
  return sortByOrder(candidates);
};
var isTabbable = function isTabbable(node, options) {
  options = options || {};
  if (!node) {
    throw new Error('No node provided');
  }
  if (matches.call(node, candidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorTabbable(options, node);
};

function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === 'y';
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case 'start':
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case 'end':
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === 'object') {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = 'clippingAncestors',
    rootBoundary = 'viewport',
    elementContext = 'floating',
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === 'floating' ? 'reference' : 'floating';
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === 'floating' ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
  const offsetScale = (await (platform.isElement == null ? void 0 : platform.isElement(offsetParent))) ? (await (platform.getScale == null ? void 0 : platform.getScale(offsetParent))) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow$3 = options => ({
  name: 'arrow',
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform,
      elements,
      middlewareData
    } = state;
    // Since `element` is required, we don't Partial<> the type.
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform.getDimensions(element);
    const isYAxis = axis === 'y';
    const minProp = isYAxis ? 'top' : 'left';
    const maxProp = isYAxis ? 'bottom' : 'right';
    const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;

    // DOM platform can return `window` as the `offsetParent`.
    if (!clientSize || !(await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent)))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;

    // If the padding is large enough that it causes the arrow to no longer be
    // centered, modify the padding so that it is centered.
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);

    // Make sure the arrow doesn't overflow the floating element if the center
    // point is outside the floating element's bounds.
    const min$1 = minPadding;
    const max = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset = clamp$1(min$1, center, max);

    // If the reference is small enough that the arrow's padding causes it to
    // to point to nothing for an aligned placement, adjust the offset of the
    // floating element itself. To ensure `shift()` continues to take action,
    // a single reset is performed when this is true.
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset,
        centerOffset: center - offset - alignmentOffset,
        ...(shouldAddOffset && {
          alignmentOffset
        })
      },
      reset: shouldAddOffset
    };
  }
});

function getPlacementList(alignment, autoAlignment, allowedPlacements) {
  const allowedPlacementsSortedByAlignment = alignment ? [...allowedPlacements.filter(placement => getAlignment(placement) === alignment), ...allowedPlacements.filter(placement => getAlignment(placement) !== alignment)] : allowedPlacements.filter(placement => getSide(placement) === placement);
  return allowedPlacementsSortedByAlignment.filter(placement => {
    if (alignment) {
      return getAlignment(placement) === alignment || (autoAlignment ? getOppositeAlignmentPlacement(placement) !== placement : false);
    }
    return true;
  });
}
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */
const autoPlacement$2 = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'autoPlacement',
    options,
    async fn(state) {
      var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
      const {
        rects,
        middlewareData,
        placement,
        platform,
        elements
      } = state;
      const {
        crossAxis = false,
        alignment,
        allowedPlacements = placements,
        autoAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      const placements$1 = alignment !== undefined || allowedPlacements === placements ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
      const currentPlacement = placements$1[currentIndex];
      if (currentPlacement == null) {
        return {};
      }
      const alignmentSides = getAlignmentSides(currentPlacement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));

      // Make `computeCoords` start from the right place.
      if (placement !== currentPlacement) {
        return {
          reset: {
            placement: placements$1[0]
          }
        };
      }
      const currentOverflows = [overflow[getSide(currentPlacement)], overflow[alignmentSides[0]], overflow[alignmentSides[1]]];
      const allOverflows = [...(((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || []), {
        placement: currentPlacement,
        overflows: currentOverflows
      }];
      const nextPlacement = placements$1[currentIndex + 1];

      // There are more placements to check.
      if (nextPlacement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: nextPlacement
          }
        };
      }
      const placementsSortedByMostSpace = allOverflows.map(d => {
        const alignment = getAlignment(d.placement);
        return [d.placement, alignment && crossAxis ?
        // Check along the mainAxis and main crossAxis side.
        d.overflows.slice(0, 2).reduce((acc, v) => acc + v, 0) :
        // Check only the mainAxis.
        d.overflows[0], d.overflows];
      }).sort((a, b) => a[1] - b[1]);
      const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter(d => d[2].slice(0,
      // Aligned placements should not check their opposite crossAxis
      // side.
      getAlignment(d[0]) ? 2 : 3).every(v => v <= 0));
      const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
      if (resetPlacement !== placement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: resetPlacement
          }
        };
      }
      return {};
    }
  };
};

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip$2 = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'flip',
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = 'bestFit',
        fallbackAxisSideDirection = 'none',
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);

      // If a reset by the arrow was caused due to an alignment offset being
      // added, we should skip any logic now since `flip()` has already done its
      // work.
      // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== 'none';
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides[0]], overflow[sides[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];

      // One or more sides is overflowing.
      if (!overflows.every(side => side <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          // Try next placement and re-run the lifecycle.
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }

        // First, find the candidates that fit on the mainAxis side of overflow,
        // then find the placement that fits the best on the main crossAxis side.
        let resetPlacement = (_overflowsData$filter = overflowsData.filter(d => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;

        // Otherwise fallback.
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case 'bestFit':
              {
                var _overflowsData$filter2;
                const placement = (_overflowsData$filter2 = overflowsData.filter(d => {
                  if (hasFallbackAxisSideDirection) {
                    const currentSideAxis = getSideAxis(d.placement);
                    return currentSideAxis === initialSideAxis ||
                    // Create a bias to the `y` side axis due to horizontal
                    // reading directions favoring greater width.
                    currentSideAxis === 'y';
                  }
                  return true;
                }).map(d => [d.placement, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                if (placement) {
                  resetPlacement = placement;
                }
                break;
              }
            case 'initialPlacement':
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};

function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some(side => overflow[side] >= 0);
}
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
const hide = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'hide',
    options,
    async fn(state) {
      const {
        rects
      } = state;
      const {
        strategy = 'referenceHidden',
        ...detectOverflowOptions
      } = evaluate(options, state);
      switch (strategy) {
        case 'referenceHidden':
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              elementContext: 'reference'
            });
            const offsets = getSideOffsets(overflow, rects.reference);
            return {
              data: {
                referenceHiddenOffsets: offsets,
                referenceHidden: isAnySideFullyClipped(offsets)
              }
            };
          }
        case 'escaped':
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              altBoundary: true
            });
            const offsets = getSideOffsets(overflow, rects.floating);
            return {
              data: {
                escapedOffsets: offsets,
                escaped: isAnySideFullyClipped(offsets)
              }
            };
          }
        default:
          {
            return {};
          }
      }
    }
  };
};

function getBoundingRect(rects) {
  const minX = min(...rects.map(rect => rect.left));
  const minY = min(...rects.map(rect => rect.top));
  const maxX = max(...rects.map(rect => rect.right));
  const maxY = max(...rects.map(rect => rect.bottom));
  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY
  };
}
function getRectsByLine(rects) {
  const sortedRects = rects.slice().sort((a, b) => a.y - b.y);
  const groups = [];
  let prevRect = null;
  for (let i = 0; i < sortedRects.length; i++) {
    const rect = sortedRects[i];
    if (!prevRect || rect.y - prevRect.y > prevRect.height / 2) {
      groups.push([rect]);
    } else {
      groups[groups.length - 1].push(rect);
    }
    prevRect = rect;
  }
  return groups.map(rect => rectToClientRect(getBoundingRect(rect)));
}
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */
const inline = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'inline',
    options,
    async fn(state) {
      const {
        placement,
        elements,
        rects,
        platform,
        strategy
      } = state;
      // A MouseEvent's client{X,Y} coords can be up to 2 pixels off a
      // ClientRect's bounds, despite the event listener being triggered. A
      // padding of 2 seems to handle this issue.
      const {
        padding = 2,
        x,
        y
      } = evaluate(options, state);
      const nativeClientRects = Array.from((await (platform.getClientRects == null ? void 0 : platform.getClientRects(elements.reference))) || []);
      const clientRects = getRectsByLine(nativeClientRects);
      const fallback = rectToClientRect(getBoundingRect(nativeClientRects));
      const paddingObject = getPaddingObject(padding);
      function getBoundingClientRect() {
        // There are two rects and they are disjoined.
        if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
          // Find the first rect in which the point is fully inside.
          return clientRects.find(rect => x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom) || fallback;
        }

        // There are 2 or more connected rects.
        if (clientRects.length >= 2) {
          if (getSideAxis(placement) === 'y') {
            const firstRect = clientRects[0];
            const lastRect = clientRects[clientRects.length - 1];
            const isTop = getSide(placement) === 'top';
            const top = firstRect.top;
            const bottom = lastRect.bottom;
            const left = isTop ? firstRect.left : lastRect.left;
            const right = isTop ? firstRect.right : lastRect.right;
            const width = right - left;
            const height = bottom - top;
            return {
              top,
              bottom,
              left,
              right,
              width,
              height,
              x: left,
              y: top
            };
          }
          const isLeftSide = getSide(placement) === 'left';
          const maxRight = max(...clientRects.map(rect => rect.right));
          const minLeft = min(...clientRects.map(rect => rect.left));
          const measureRects = clientRects.filter(rect => isLeftSide ? rect.left === minLeft : rect.right === maxRight);
          const top = measureRects[0].top;
          const bottom = measureRects[measureRects.length - 1].bottom;
          const left = minLeft;
          const right = maxRight;
          const width = right - left;
          const height = bottom - top;
          return {
            top,
            bottom,
            left,
            right,
            width,
            height,
            x: left,
            y: top
          };
        }
        return fallback;
      }
      const resetRects = await platform.getElementRects({
        reference: {
          getBoundingClientRect
        },
        floating: elements.floating,
        strategy
      });
      if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
        return {
          reset: {
            rects: resetRects
          }
        };
      }
      return {};
    }
  };
};

// For type backwards-compatibility, the `OffsetOptions` type was also
// Derivable.

async function convertValueToCoords(state, options) {
  const {
    placement,
    platform,
    elements
  } = state;
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === 'y';
  const mainAxisMulti = ['left', 'top'].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);

  // eslint-disable-next-line prefer-const
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === 'number' ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === 'number') {
    crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset$2 = function (options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: 'offset',
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);

      // If the placement is the same and the arrow caused an alignment offset
      // then we don't need to change the positioning coordinates.
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift$2 = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'shift',
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: _ref => {
            let {
              x,
              y
            } = _ref;
            return {
              x,
              y
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === 'y' ? 'top' : 'left';
        const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
        const min = mainAxisCoord + overflow[minSide];
        const max = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp$1(min, mainAxisCoord, max);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === 'y' ? 'top' : 'left';
        const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
        const min = crossAxisCoord + overflow[minSide];
        const max = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp$1(min, crossAxisCoord, max);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }
  };
};
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
const limitShift = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset, state);
      const computedOffset = typeof rawOffset === 'number' ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === 'y' ? 'height' : 'width';
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === 'y' ? 'width' : 'height';
        const isOriginSide = ['top', 'left'].includes(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const size = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'size',
    options,
    async fn(state) {
      const {
        placement,
        rects,
        platform,
        elements
      } = state;
      const {
        apply = () => {},
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === 'y';
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === 'top' || side === 'bottom') {
        heightSide = side;
        widthSide = alignment === ((await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating))) ? 'start' : 'end') ? 'left' : 'right';
      } else {
        widthSide = side;
        heightSide = alignment === 'end' ? 'top' : 'bottom';
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if (isYAxis) {
        availableWidth = alignment || noShift ? min(overflowAvailableWidth, maximumClippingWidth) : maximumClippingWidth;
      } else {
        availableHeight = alignment || noShift ? min(overflowAvailableHeight, maximumClippingHeight) : maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};

function getCssDimensions(element) {
  const css = getComputedStyle$1(element);
  // In testing environments, the `width` and `height` properties are empty
  // strings for SVG elements, returning NaN. Fallback to `0` in this case.
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round$1(width) !== offsetWidth || round$1(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}

function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}

function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round$1(rect.width) : rect.width) / width;
  let y = ($ ? round$1(rect.height) : rect.height) / height;

  // 0, NaN, or Infinity should always fallback to 1.

  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}

const noOffsets = /*#__PURE__*/createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}

function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle$1(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}

function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === 'fixed';
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}

function getClientRects(element) {
  return Array.from(element.getClientRects());
}

// If <html> has a CSS width greater than the viewport, then this will be
// incorrect for RTL.
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === 'rtl') {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}

// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === 'viewport') {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === 'document') {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}

// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter(el => isElement(el) && getNodeName(el) !== 'body');
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === 'fixed';
  let currentNode = elementIsFixed ? getParentNode(element) : element;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && ['absolute', 'fixed'].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      // Drop non-containing blocks.
      result = result.filter(ancestor => ancestor !== currentNode);
    } else {
      // Record last containing block for next iteration.
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}

// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === 'clippingAncestors' ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}

function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}

function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === 'fixed';
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      // If the <body> scrollbar appears on the left (e.g. RTL systems). Use
      // Firefox with layout.scrollbar.side = 3 in about:config to test this.
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  let htmlX = 0;
  let htmlY = 0;
  if (documentElement && !isOffsetParentAnElement && !isFixed) {
    const htmlRect = documentElement.getBoundingClientRect();
    htmlY = htmlRect.top + scroll.scrollTop;
    htmlX = htmlRect.left + scroll.scrollLeft -
    // RTL <body> scrollbar.
    getWindowScrollBarX(documentElement, htmlRect);
  }
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlX;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlY;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}

function isStaticPositioned(element) {
  return getComputedStyle$1(element).position === 'static';
}

function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === 'fixed') {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;

  // Firefox returns the <html> element as the offsetParent if it's non-static,
  // while Chrome and Safari return the <body> element. The <body> element must
  // be used to perform the correct calculations even if the <html> element is
  // non-static.
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}

// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}

const getElementRects = async function (data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};

function isRTL(element) {
  return getComputedStyle$1(element).direction === 'rtl';
}

const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};

// https://samthor.au/2021/observing-dom/
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          // If the reference is clipped, the ratio is 0. Throttle the refresh
          // to prevent an infinite loop of updates.
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1000);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }

    // Older browsers don't support a `document` as the root and will throw an
    // error.
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}

/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === 'function',
    layoutShift = typeof IntersectionObserver === 'function',
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...(referenceEl ? getOverflowAncestors(referenceEl) : []), ...getOverflowAncestors(floating)] : [];
  ancestors.forEach(ancestor => {
    ancestorScroll && ancestor.addEventListener('scroll', update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener('resize', update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver(_ref => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        // Prevent update loops when using the `size` middleware.
        // https://github.com/floating-ui/floating-ui/issues/1740
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.removeEventListener('scroll', update);
      ancestorResize && ancestor.removeEventListener('resize', update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset$1 = offset$2;

/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */
const autoPlacement$1 = autoPlacement$2;

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift$1 = shift$2;

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip$1 = flip$2;

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
size;

/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
hide;

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow$2 = arrow$3;

/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */
inline;

/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
limitShift;

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 */
const computePosition = (reference, floating, options) => {
  // This caches the expensive `getClippingElementAncestors` function so that
  // multiple lifecycle resets re-use the same result. It only lives for a
  // single call. If other functions become expensive, we can add them as well.
  const cache = new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

var index$1 = typeof document !== 'undefined' ? useLayoutEffect : useEffect;

// Fork of `fast-deep-equal` that only does the comparisons we need and compares
// functions
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === 'function' && a.toString() === b.toString()) {
    return true;
  }
  let length;
  let i;
  let keys;
  if (a && b && typeof a === 'object') {
    if (Array.isArray(a)) {
      length = a.length;
      if (length !== b.length) return false;
      for (i = length; i-- !== 0;) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0;) {
      if (!{}.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0;) {
      const key = keys[i];
      if (key === '_owner' && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}

function getDPR(element) {
  if (typeof window === 'undefined') {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}

function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}

function useLatestRef$1(value) {
  const ref = React.useRef(value);
  index$1(() => {
    ref.current = value;
  });
  return ref;
}

/**
 * Provides data to position a floating element.
 * @see https://floating-ui.com/docs/useFloating
 */
function useFloating$1(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React.useState(null);
  const [_floating, _setFloating] = React.useState(null);
  const setReference = React.useCallback(node => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React.useCallback(node => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React.useRef(null);
  const floatingRef = React.useRef(null);
  const dataRef = React.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef$1(whileElementsMounted);
  const platformRef = useLatestRef$1(platform);
  const openRef = useLatestRef$1(open);
  const update = React.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition(referenceRef.current, floatingRef.current, config).then(data => {
      const fullData = {
        ...data,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: openRef.current !== false
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef, openRef]);
  index$1(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData(data => ({
        ...data,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React.useRef(false);
  index$1(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index$1(() => {
    if (referenceEl) referenceRef.current = referenceEl;
    if (floatingEl) floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = React.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...(getDPR(elements.floating) >= 1.5 && {
          willChange: 'transform'
        })
      };
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * This wraps the core `arrow` middleware to allow React refs as the element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow$1 = options => {
  function isRef(value) {
    return {}.hasOwnProperty.call(value, 'current');
  }
  return {
    name: 'arrow',
    options,
    fn(state) {
      const {
        element,
        padding
      } = typeof options === 'function' ? options(state) : options;
      if (element && isRef(element)) {
        if (element.current != null) {
          return arrow$2({
            element: element.current,
            padding
          }).fn(state);
        }
        return {};
      }
      if (element) {
        return arrow$2({
          element,
          padding
        }).fn(state);
      }
      return {};
    }
  };
};

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset = (options, deps) => ({
  ...offset$1(options),
  options: [options, deps]
});

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift = (options, deps) => ({
  ...shift$1(options),
  options: [options, deps]
});

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip = (options, deps) => ({
  ...flip$1(options),
  options: [options, deps]
});

/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */
const autoPlacement = (options, deps) => ({
  ...autoPlacement$1(options),
  options: [options, deps]
});

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * This wraps the core `arrow` middleware to allow React refs as the element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow = (options, deps) => ({
  ...arrow$1(options),
  options: [options, deps]
});

/**
 * Merges an array of refs into a single memoized callback ref or `null`.
 * @see https://floating-ui.com/docs/react-utils#usemergerefs
 */
function useMergeRefs(refs) {
  return React.useMemo(() => {
    if (refs.every(ref => ref == null)) {
      return null;
    }
    return value => {
      refs.forEach(ref => {
        if (typeof ref === 'function') {
          ref(value);
        } else if (ref != null) {
          ref.current = value;
        }
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);
}

// https://github.com/mui/material-ui/issues/41190#issuecomment-2040873379
const SafeReact = {
  ...React
};

const useInsertionEffect$1 = SafeReact.useInsertionEffect;
const useSafeInsertionEffect = useInsertionEffect$1 || (fn => fn());
function useEffectEvent(callback) {
  const ref = React.useRef(() => {
    if (process.env.NODE_ENV !== "production") {
      throw new Error('Cannot call an event handler while rendering.');
    }
  });
  useSafeInsertionEffect(() => {
    ref.current = callback;
  });
  return React.useCallback(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return ref.current == null ? void 0 : ref.current(...args);
  }, []);
}

const ARROW_UP = 'ArrowUp';
const ARROW_DOWN = 'ArrowDown';
const ARROW_LEFT = 'ArrowLeft';
const ARROW_RIGHT = 'ArrowRight';
function isDifferentRow(index, cols, prevRow) {
  return Math.floor(index / cols) !== prevRow;
}
function isIndexOutOfBounds(listRef, index) {
  return index < 0 || index >= listRef.current.length;
}
function getMinIndex(listRef, disabledIndices) {
  return findNonDisabledIndex(listRef, {
    disabledIndices
  });
}
function getMaxIndex(listRef, disabledIndices) {
  return findNonDisabledIndex(listRef, {
    decrement: true,
    startingIndex: listRef.current.length,
    disabledIndices
  });
}
function findNonDisabledIndex(listRef, _temp) {
  let {
    startingIndex = -1,
    decrement = false,
    disabledIndices,
    amount = 1
  } = _temp === void 0 ? {} : _temp;
  const list = listRef.current;
  let index = startingIndex;
  do {
    index += decrement ? -amount : amount;
  } while (index >= 0 && index <= list.length - 1 && isDisabled(list, index, disabledIndices));
  return index;
}
function getGridNavigatedIndex(elementsRef, _ref) {
  let {
    event,
    orientation,
    loop,
    cols,
    disabledIndices,
    minIndex,
    maxIndex,
    prevIndex,
    stopEvent: stop = false
  } = _ref;
  let nextIndex = prevIndex;
  if (event.key === ARROW_UP) {
    stop && stopEvent(event);
    if (prevIndex === -1) {
      nextIndex = maxIndex;
    } else {
      nextIndex = findNonDisabledIndex(elementsRef, {
        startingIndex: nextIndex,
        amount: cols,
        decrement: true,
        disabledIndices
      });
      if (loop && (prevIndex - cols < minIndex || nextIndex < 0)) {
        const col = prevIndex % cols;
        const maxCol = maxIndex % cols;
        const offset = maxIndex - (maxCol - col);
        if (maxCol === col) {
          nextIndex = maxIndex;
        } else {
          nextIndex = maxCol > col ? offset : offset - cols;
        }
      }
    }
    if (isIndexOutOfBounds(elementsRef, nextIndex)) {
      nextIndex = prevIndex;
    }
  }
  if (event.key === ARROW_DOWN) {
    stop && stopEvent(event);
    if (prevIndex === -1) {
      nextIndex = minIndex;
    } else {
      nextIndex = findNonDisabledIndex(elementsRef, {
        startingIndex: prevIndex,
        amount: cols,
        disabledIndices
      });
      if (loop && prevIndex + cols > maxIndex) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex % cols - cols,
          amount: cols,
          disabledIndices
        });
      }
    }
    if (isIndexOutOfBounds(elementsRef, nextIndex)) {
      nextIndex = prevIndex;
    }
  }

  // Remains on the same row/column.
  if (orientation === 'both') {
    const prevRow = floor(prevIndex / cols);
    if (event.key === ARROW_RIGHT) {
      stop && stopEvent(event);
      if (prevIndex % cols !== cols - 1) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex,
          disabledIndices
        });
        if (loop && isDifferentRow(nextIndex, cols, prevRow)) {
          nextIndex = findNonDisabledIndex(elementsRef, {
            startingIndex: prevIndex - prevIndex % cols - 1,
            disabledIndices
          });
        }
      } else if (loop) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex - prevIndex % cols - 1,
          disabledIndices
        });
      }
      if (isDifferentRow(nextIndex, cols, prevRow)) {
        nextIndex = prevIndex;
      }
    }
    if (event.key === ARROW_LEFT) {
      stop && stopEvent(event);
      if (prevIndex % cols !== 0) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex,
          decrement: true,
          disabledIndices
        });
        if (loop && isDifferentRow(nextIndex, cols, prevRow)) {
          nextIndex = findNonDisabledIndex(elementsRef, {
            startingIndex: prevIndex + (cols - prevIndex % cols),
            decrement: true,
            disabledIndices
          });
        }
      } else if (loop) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex + (cols - prevIndex % cols),
          decrement: true,
          disabledIndices
        });
      }
      if (isDifferentRow(nextIndex, cols, prevRow)) {
        nextIndex = prevIndex;
      }
    }
    const lastRow = floor(maxIndex / cols) === prevRow;
    if (isIndexOutOfBounds(elementsRef, nextIndex)) {
      if (loop && lastRow) {
        nextIndex = event.key === ARROW_LEFT ? maxIndex : findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex - prevIndex % cols - 1,
          disabledIndices
        });
      } else {
        nextIndex = prevIndex;
      }
    }
  }
  return nextIndex;
}

/** For each cell index, gets the item index that occupies that cell */
function buildCellMap(sizes, cols, dense) {
  const cellMap = [];
  let startIndex = 0;
  sizes.forEach((_ref2, index) => {
    let {
      width,
      height
    } = _ref2;
    if (width > cols) {
      if (process.env.NODE_ENV !== "production") {
        throw new Error("[Floating UI]: Invalid grid - item width at index " + index + " is greater than grid columns");
      }
    }
    let itemPlaced = false;
    if (dense) {
      startIndex = 0;
    }
    while (!itemPlaced) {
      const targetCells = [];
      for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
          targetCells.push(startIndex + i + j * cols);
        }
      }
      if (startIndex % cols + width <= cols && targetCells.every(cell => cellMap[cell] == null)) {
        targetCells.forEach(cell => {
          cellMap[cell] = index;
        });
        itemPlaced = true;
      } else {
        startIndex++;
      }
    }
  });

  // convert into a non-sparse array
  return [...cellMap];
}

/** Gets cell index of an item's corner or -1 when index is -1. */
function getCellIndexOfCorner(index, sizes, cellMap, cols, corner) {
  if (index === -1) return -1;
  const firstCellIndex = cellMap.indexOf(index);
  const sizeItem = sizes[index];
  switch (corner) {
    case 'tl':
      return firstCellIndex;
    case 'tr':
      if (!sizeItem) {
        return firstCellIndex;
      }
      return firstCellIndex + sizeItem.width - 1;
    case 'bl':
      if (!sizeItem) {
        return firstCellIndex;
      }
      return firstCellIndex + (sizeItem.height - 1) * cols;
    case 'br':
      return cellMap.lastIndexOf(index);
  }
}

/** Gets all cell indices that correspond to the specified indices */
function getCellIndices(indices, cellMap) {
  return cellMap.flatMap((index, cellIndex) => indices.includes(index) ? [cellIndex] : []);
}
function isDisabled(list, index, disabledIndices) {
  if (disabledIndices) {
    return disabledIndices.includes(index);
  }
  const element = list[index];
  return element == null || element.hasAttribute('disabled') || element.getAttribute('aria-disabled') === 'true';
}

let rafId = 0;
function enqueueFocus(el, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    preventScroll = false,
    cancelPrevious = true,
    sync = false
  } = options;
  cancelPrevious && cancelAnimationFrame(rafId);
  const exec = () => el == null ? void 0 : el.focus({
    preventScroll
  });
  if (sync) {
    exec();
  } else {
    rafId = requestAnimationFrame(exec);
  }
}

var index = typeof document !== 'undefined' ? useLayoutEffect : useEffect;

function sortByDocumentPosition(a, b) {
  const position = a.compareDocumentPosition(b);
  if (position & Node.DOCUMENT_POSITION_FOLLOWING || position & Node.DOCUMENT_POSITION_CONTAINED_BY) {
    return -1;
  }
  if (position & Node.DOCUMENT_POSITION_PRECEDING || position & Node.DOCUMENT_POSITION_CONTAINS) {
    return 1;
  }
  return 0;
}
function areMapsEqual(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }
  for (const [key, value] of map1.entries()) {
    if (value !== map2.get(key)) {
      return false;
    }
  }
  return true;
}
const FloatingListContext = /*#__PURE__*/React.createContext({
  register: () => {},
  unregister: () => {},
  map: /*#__PURE__*/new Map(),
  elementsRef: {
    current: []
  }
});
/**
 * Provides context for a list of items within the floating element.
 * @see https://floating-ui.com/docs/FloatingList
 */
function FloatingList(props) {
  const {
    children,
    elementsRef,
    labelsRef
  } = props;
  const [map, setMap] = React.useState(() => new Map());
  const register = React.useCallback(node => {
    setMap(prevMap => new Map(prevMap).set(node, null));
  }, []);
  const unregister = React.useCallback(node => {
    setMap(prevMap => {
      const map = new Map(prevMap);
      map.delete(node);
      return map;
    });
  }, []);
  index(() => {
    const newMap = new Map(map);
    const nodes = Array.from(newMap.keys()).sort(sortByDocumentPosition);
    nodes.forEach((node, index) => {
      newMap.set(node, index);
    });
    if (!areMapsEqual(map, newMap)) {
      setMap(newMap);
    }
  }, [map]);
  return /*#__PURE__*/React.createElement(FloatingListContext.Provider, {
    value: React.useMemo(() => ({
      register,
      unregister,
      map,
      elementsRef,
      labelsRef
    }), [register, unregister, map, elementsRef, labelsRef])
  }, children);
}
/**
 * Used to register a list item and its index (DOM position) in the
 * `FloatingList`.
 * @see https://floating-ui.com/docs/FloatingList#uselistitem
 */
function useListItem(props) {
  if (props === void 0) {
    props = {};
  }
  const {
    label
  } = props;
  const {
    register,
    unregister,
    map,
    elementsRef,
    labelsRef
  } = React.useContext(FloatingListContext);
  const [index$1, setIndex] = React.useState(null);
  const componentRef = React.useRef(null);
  const ref = React.useCallback(node => {
    componentRef.current = node;
    if (index$1 !== null) {
      elementsRef.current[index$1] = node;
      if (labelsRef) {
        var _node$textContent;
        const isLabelDefined = label !== undefined;
        labelsRef.current[index$1] = isLabelDefined ? label : (_node$textContent = node == null ? void 0 : node.textContent) != null ? _node$textContent : null;
      }
    }
  }, [index$1, elementsRef, labelsRef, label]);
  index(() => {
    const node = componentRef.current;
    if (node) {
      register(node);
      return () => {
        unregister(node);
      };
    }
  }, [register, unregister]);
  index(() => {
    const index = componentRef.current ? map.get(componentRef.current) : null;
    if (index != null) {
      setIndex(index);
    }
  }, [map]);
  return React.useMemo(() => ({
    ref,
    index: index$1 == null ? -1 : index$1
  }), [index$1, ref]);
}

function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}

let serverHandoffComplete = false;
let count = 0;
const genId = () => // Ensure the id is unique with multiple independent versions of Floating UI
// on <React 18
"floating-ui-" + Math.random().toString(36).slice(2, 6) + count++;
function useFloatingId() {
  const [id, setId] = React.useState(() => serverHandoffComplete ? genId() : undefined);
  index(() => {
    if (id == null) {
      setId(genId());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  React.useEffect(() => {
    serverHandoffComplete = true;
  }, []);
  return id;
}
const useReactId = SafeReact.useId;

/**
 * Uses React 18's built-in `useId()` when available, or falls back to a
 * slightly less performant (requiring a double render) implementation for
 * earlier React versions.
 * @see https://floating-ui.com/docs/react-utils#useid
 */
const useId = useReactId || useFloatingId;

let devMessageSet;
if (process.env.NODE_ENV !== "production") {
  devMessageSet = /*#__PURE__*/new Set();
}
function warn() {
  var _devMessageSet;
  for (var _len = arguments.length, messages = new Array(_len), _key = 0; _key < _len; _key++) {
    messages[_key] = arguments[_key];
  }
  const message = "Floating UI: " + messages.join(' ');
  if (!((_devMessageSet = devMessageSet) != null && _devMessageSet.has(message))) {
    var _devMessageSet2;
    (_devMessageSet2 = devMessageSet) == null || _devMessageSet2.add(message);
    console.warn(message);
  }
}
function error() {
  var _devMessageSet3;
  for (var _len2 = arguments.length, messages = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    messages[_key2] = arguments[_key2];
  }
  const message = "Floating UI: " + messages.join(' ');
  if (!((_devMessageSet3 = devMessageSet) != null && _devMessageSet3.has(message))) {
    var _devMessageSet4;
    (_devMessageSet4 = devMessageSet) == null || _devMessageSet4.add(message);
    console.error(message);
  }
}

function createPubSub() {
  const map = new Map();
  return {
    emit(event, data) {
      var _map$get;
      (_map$get = map.get(event)) == null || _map$get.forEach(handler => handler(data));
    },
    on(event, listener) {
      map.set(event, [...(map.get(event) || []), listener]);
    },
    off(event, listener) {
      var _map$get2;
      map.set(event, ((_map$get2 = map.get(event)) == null ? void 0 : _map$get2.filter(l => l !== listener)) || []);
    }
  };
}

const FloatingNodeContext = /*#__PURE__*/React.createContext(null);
const FloatingTreeContext = /*#__PURE__*/React.createContext(null);

/**
 * Returns the parent node id for nested floating elements, if available.
 * Returns `null` for top-level floating elements.
 */
const useFloatingParentNodeId = () => {
  var _React$useContext;
  return ((_React$useContext = React.useContext(FloatingNodeContext)) == null ? void 0 : _React$useContext.id) || null;
};

/**
 * Returns the nearest floating tree context, if available.
 */
const useFloatingTree = () => React.useContext(FloatingTreeContext);

function createAttribute(name) {
  return "data-floating-ui-" + name;
}

function useLatestRef(value) {
  const ref = useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}

const safePolygonIdentifier = /*#__PURE__*/createAttribute('safe-polygon');
function getDelay(value, prop, pointerType) {
  if (pointerType && !isMouseLikePointerType(pointerType)) {
    return 0;
  }
  if (typeof value === 'number') {
    return value;
  }
  return value == null ? void 0 : value[prop];
}
/**
 * Opens the floating element while hovering over the reference element, like
 * CSS `:hover`.
 * @see https://floating-ui.com/docs/useHover
 */
function useHover(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    onOpenChange,
    dataRef,
    events,
    elements
  } = context;
  const {
    enabled = true,
    delay = 0,
    handleClose = null,
    mouseOnly = false,
    restMs = 0,
    move = true
  } = props;
  const tree = useFloatingTree();
  const parentId = useFloatingParentNodeId();
  const handleCloseRef = useLatestRef(handleClose);
  const delayRef = useLatestRef(delay);
  const openRef = useLatestRef(open);
  const pointerTypeRef = React.useRef();
  const timeoutRef = React.useRef(-1);
  const handlerRef = React.useRef();
  const restTimeoutRef = React.useRef(-1);
  const blockMouseMoveRef = React.useRef(true);
  const performedPointerEventsMutationRef = React.useRef(false);
  const unbindMouseMoveRef = React.useRef(() => {});
  const isHoverOpen = React.useCallback(() => {
    var _dataRef$current$open;
    const type = (_dataRef$current$open = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open.type;
    return (type == null ? void 0 : type.includes('mouse')) && type !== 'mousedown';
  }, [dataRef]);

  // When closing before opening, clear the delay timeouts to cancel it
  // from showing.
  React.useEffect(() => {
    if (!enabled) return;
    function onOpenChange(_ref) {
      let {
        open
      } = _ref;
      if (!open) {
        clearTimeout(timeoutRef.current);
        clearTimeout(restTimeoutRef.current);
        blockMouseMoveRef.current = true;
      }
    }
    events.on('openchange', onOpenChange);
    return () => {
      events.off('openchange', onOpenChange);
    };
  }, [enabled, events]);
  React.useEffect(() => {
    if (!enabled) return;
    if (!handleCloseRef.current) return;
    if (!open) return;
    function onLeave(event) {
      if (isHoverOpen()) {
        onOpenChange(false, event, 'hover');
      }
    }
    const html = getDocument(elements.floating).documentElement;
    html.addEventListener('mouseleave', onLeave);
    return () => {
      html.removeEventListener('mouseleave', onLeave);
    };
  }, [elements.floating, open, onOpenChange, enabled, handleCloseRef, isHoverOpen]);
  const closeWithDelay = React.useCallback(function (event, runElseBranch, reason) {
    if (runElseBranch === void 0) {
      runElseBranch = true;
    }
    if (reason === void 0) {
      reason = 'hover';
    }
    const closeDelay = getDelay(delayRef.current, 'close', pointerTypeRef.current);
    if (closeDelay && !handlerRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => onOpenChange(false, event, reason), closeDelay);
    } else if (runElseBranch) {
      clearTimeout(timeoutRef.current);
      onOpenChange(false, event, reason);
    }
  }, [delayRef, onOpenChange]);
  const cleanupMouseMoveHandler = useEffectEvent(() => {
    unbindMouseMoveRef.current();
    handlerRef.current = undefined;
  });
  const clearPointerEvents = useEffectEvent(() => {
    if (performedPointerEventsMutationRef.current) {
      const body = getDocument(elements.floating).body;
      body.style.pointerEvents = '';
      body.removeAttribute(safePolygonIdentifier);
      performedPointerEventsMutationRef.current = false;
    }
  });

  // Registering the mouse events on the reference directly to bypass React's
  // delegation system. If the cursor was on a disabled element and then entered
  // the reference (no gap), `mouseenter` doesn't fire in the delegation system.
  React.useEffect(() => {
    if (!enabled) return;
    function isClickLikeOpenEvent() {
      return dataRef.current.openEvent ? ['click', 'mousedown'].includes(dataRef.current.openEvent.type) : false;
    }
    function onMouseEnter(event) {
      clearTimeout(timeoutRef.current);
      blockMouseMoveRef.current = false;
      if (mouseOnly && !isMouseLikePointerType(pointerTypeRef.current) || restMs > 0 && !getDelay(delayRef.current, 'open')) {
        return;
      }
      const openDelay = getDelay(delayRef.current, 'open', pointerTypeRef.current);
      if (openDelay) {
        timeoutRef.current = window.setTimeout(() => {
          if (!openRef.current) {
            onOpenChange(true, event, 'hover');
          }
        }, openDelay);
      } else {
        onOpenChange(true, event, 'hover');
      }
    }
    function onMouseLeave(event) {
      if (isClickLikeOpenEvent()) return;
      unbindMouseMoveRef.current();
      const doc = getDocument(elements.floating);
      clearTimeout(restTimeoutRef.current);
      if (handleCloseRef.current && dataRef.current.floatingContext) {
        // Prevent clearing `onScrollMouseLeave` timeout.
        if (!open) {
          clearTimeout(timeoutRef.current);
        }
        handlerRef.current = handleCloseRef.current({
          ...dataRef.current.floatingContext,
          tree,
          x: event.clientX,
          y: event.clientY,
          onClose() {
            clearPointerEvents();
            cleanupMouseMoveHandler();
            closeWithDelay(event, true, 'safe-polygon');
          }
        });
        const handler = handlerRef.current;
        doc.addEventListener('mousemove', handler);
        unbindMouseMoveRef.current = () => {
          doc.removeEventListener('mousemove', handler);
        };
        return;
      }

      // Allow interactivity without `safePolygon` on touch devices. With a
      // pointer, a short close delay is an alternative, so it should work
      // consistently.
      const shouldClose = pointerTypeRef.current === 'touch' ? !contains(elements.floating, event.relatedTarget) : true;
      if (shouldClose) {
        closeWithDelay(event);
      }
    }

    // Ensure the floating element closes after scrolling even if the pointer
    // did not move.
    // https://github.com/floating-ui/floating-ui/discussions/1692
    function onScrollMouseLeave(event) {
      if (isClickLikeOpenEvent()) return;
      if (!dataRef.current.floatingContext) return;
      handleCloseRef.current == null || handleCloseRef.current({
        ...dataRef.current.floatingContext,
        tree,
        x: event.clientX,
        y: event.clientY,
        onClose() {
          clearPointerEvents();
          cleanupMouseMoveHandler();
          closeWithDelay(event);
        }
      })(event);
    }
    if (isElement(elements.domReference)) {
      var _elements$floating;
      const ref = elements.domReference;
      open && ref.addEventListener('mouseleave', onScrollMouseLeave);
      (_elements$floating = elements.floating) == null || _elements$floating.addEventListener('mouseleave', onScrollMouseLeave);
      move && ref.addEventListener('mousemove', onMouseEnter, {
        once: true
      });
      ref.addEventListener('mouseenter', onMouseEnter);
      ref.addEventListener('mouseleave', onMouseLeave);
      return () => {
        var _elements$floating2;
        open && ref.removeEventListener('mouseleave', onScrollMouseLeave);
        (_elements$floating2 = elements.floating) == null || _elements$floating2.removeEventListener('mouseleave', onScrollMouseLeave);
        move && ref.removeEventListener('mousemove', onMouseEnter);
        ref.removeEventListener('mouseenter', onMouseEnter);
        ref.removeEventListener('mouseleave', onMouseLeave);
      };
    }
  }, [elements, enabled, context, mouseOnly, restMs, move, closeWithDelay, cleanupMouseMoveHandler, clearPointerEvents, onOpenChange, open, openRef, tree, delayRef, handleCloseRef, dataRef]);

  // Block pointer-events of every element other than the reference and floating
  // while the floating element is open and has a `handleClose` handler. Also
  // handles nested floating elements.
  // https://github.com/floating-ui/floating-ui/issues/1722
  index(() => {
    var _handleCloseRef$curre;
    if (!enabled) return;
    if (open && (_handleCloseRef$curre = handleCloseRef.current) != null && _handleCloseRef$curre.__options.blockPointerEvents && isHoverOpen()) {
      const body = getDocument(elements.floating).body;
      body.setAttribute(safePolygonIdentifier, '');
      body.style.pointerEvents = 'none';
      performedPointerEventsMutationRef.current = true;
      const floatingEl = elements.floating;
      if (isElement(elements.domReference) && floatingEl) {
        var _tree$nodesRef$curren;
        const ref = elements.domReference;
        const parentFloating = tree == null || (_tree$nodesRef$curren = tree.nodesRef.current.find(node => node.id === parentId)) == null || (_tree$nodesRef$curren = _tree$nodesRef$curren.context) == null ? void 0 : _tree$nodesRef$curren.elements.floating;
        if (parentFloating) {
          parentFloating.style.pointerEvents = '';
        }
        ref.style.pointerEvents = 'auto';
        floatingEl.style.pointerEvents = 'auto';
        return () => {
          ref.style.pointerEvents = '';
          floatingEl.style.pointerEvents = '';
        };
      }
    }
  }, [enabled, open, parentId, elements, tree, handleCloseRef, isHoverOpen]);
  index(() => {
    if (!open) {
      pointerTypeRef.current = undefined;
      cleanupMouseMoveHandler();
      clearPointerEvents();
    }
  }, [open, cleanupMouseMoveHandler, clearPointerEvents]);
  React.useEffect(() => {
    return () => {
      cleanupMouseMoveHandler();
      clearTimeout(timeoutRef.current);
      clearTimeout(restTimeoutRef.current);
      clearPointerEvents();
    };
  }, [enabled, elements.domReference, cleanupMouseMoveHandler, clearPointerEvents]);
  const reference = React.useMemo(() => {
    function setPointerRef(event) {
      pointerTypeRef.current = event.pointerType;
    }
    return {
      onPointerDown: setPointerRef,
      onPointerEnter: setPointerRef,
      onMouseMove(event) {
        const {
          nativeEvent
        } = event;
        function handleMouseMove() {
          if (!blockMouseMoveRef.current && !openRef.current) {
            onOpenChange(true, nativeEvent, 'hover');
          }
        }
        if (mouseOnly && !isMouseLikePointerType(pointerTypeRef.current)) {
          return;
        }
        if (open || restMs === 0) {
          return;
        }
        clearTimeout(restTimeoutRef.current);
        if (pointerTypeRef.current === 'touch') {
          handleMouseMove();
        } else {
          restTimeoutRef.current = window.setTimeout(handleMouseMove, restMs);
        }
      }
    };
  }, [mouseOnly, onOpenChange, open, openRef, restMs]);
  const floating = React.useMemo(() => ({
    onMouseEnter() {
      clearTimeout(timeoutRef.current);
    },
    onMouseLeave(event) {
      closeWithDelay(event.nativeEvent, false);
    }
  }), [closeWithDelay]);
  return React.useMemo(() => enabled ? {
    reference,
    floating
  } : {}, [enabled, reference, floating]);
}

function getAncestors(nodes, id) {
  var _nodes$find;
  let allAncestors = [];
  let currentParentId = (_nodes$find = nodes.find(node => node.id === id)) == null ? void 0 : _nodes$find.parentId;
  while (currentParentId) {
    const currentNode = nodes.find(node => node.id === currentParentId);
    currentParentId = currentNode == null ? void 0 : currentNode.parentId;
    if (currentNode) {
      allAncestors = allAncestors.concat(currentNode);
    }
  }
  return allAncestors;
}

function getChildren(nodes, id) {
  let allChildren = nodes.filter(node => {
    var _node$context;
    return node.parentId === id && ((_node$context = node.context) == null ? void 0 : _node$context.open);
  });
  let currentChildren = allChildren;
  while (currentChildren.length) {
    currentChildren = nodes.filter(node => {
      var _currentChildren;
      return (_currentChildren = currentChildren) == null ? void 0 : _currentChildren.some(n => {
        var _node$context2;
        return node.parentId === n.id && ((_node$context2 = node.context) == null ? void 0 : _node$context2.open);
      });
    });
    allChildren = allChildren.concat(currentChildren);
  }
  return allChildren;
}
function getDeepestNode(nodes, id) {
  let deepestNodeId;
  let maxDepth = -1;
  function findDeepest(nodeId, depth) {
    if (depth > maxDepth) {
      deepestNodeId = nodeId;
      maxDepth = depth;
    }
    const children = getChildren(nodes, nodeId);
    children.forEach(child => {
      findDeepest(child.id, depth + 1);
    });
  }
  findDeepest(id, 0);
  return nodes.find(node => node.id === deepestNodeId);
}

// Modified to add conditional `aria-hidden` support:
// https://github.com/theKashey/aria-hidden/blob/9220c8f4a4fd35f63bee5510a9f41a37264382d4/src/index.ts
let counterMap = /*#__PURE__*/new WeakMap();
let uncontrolledElementsSet = /*#__PURE__*/new WeakSet();
let markerMap = {};
let lockCount = 0;
const supportsInert = () => typeof HTMLElement !== 'undefined' && 'inert' in HTMLElement.prototype;
const unwrapHost = node => node && (node.host || unwrapHost(node.parentNode));
const correctElements = (parent, targets) => targets.map(target => {
  if (parent.contains(target)) {
    return target;
  }
  const correctedTarget = unwrapHost(target);
  if (parent.contains(correctedTarget)) {
    return correctedTarget;
  }
  return null;
}).filter(x => x != null);
function applyAttributeToOthers(uncorrectedAvoidElements, body, ariaHidden, inert) {
  const markerName = 'data-floating-ui-inert';
  const controlAttribute = inert ? 'inert' : ariaHidden ? 'aria-hidden' : null;
  const avoidElements = correctElements(body, uncorrectedAvoidElements);
  const elementsToKeep = new Set();
  const elementsToStop = new Set(avoidElements);
  const hiddenElements = [];
  if (!markerMap[markerName]) {
    markerMap[markerName] = new WeakMap();
  }
  const markerCounter = markerMap[markerName];
  avoidElements.forEach(keep);
  deep(body);
  elementsToKeep.clear();
  function keep(el) {
    if (!el || elementsToKeep.has(el)) {
      return;
    }
    elementsToKeep.add(el);
    el.parentNode && keep(el.parentNode);
  }
  function deep(parent) {
    if (!parent || elementsToStop.has(parent)) {
      return;
    }
    [].forEach.call(parent.children, node => {
      if (getNodeName(node) === 'script') return;
      if (elementsToKeep.has(node)) {
        deep(node);
      } else {
        const attr = controlAttribute ? node.getAttribute(controlAttribute) : null;
        const alreadyHidden = attr !== null && attr !== 'false';
        const counterValue = (counterMap.get(node) || 0) + 1;
        const markerValue = (markerCounter.get(node) || 0) + 1;
        counterMap.set(node, counterValue);
        markerCounter.set(node, markerValue);
        hiddenElements.push(node);
        if (counterValue === 1 && alreadyHidden) {
          uncontrolledElementsSet.add(node);
        }
        if (markerValue === 1) {
          node.setAttribute(markerName, '');
        }
        if (!alreadyHidden && controlAttribute) {
          node.setAttribute(controlAttribute, 'true');
        }
      }
    });
  }
  lockCount++;
  return () => {
    hiddenElements.forEach(element => {
      const counterValue = (counterMap.get(element) || 0) - 1;
      const markerValue = (markerCounter.get(element) || 0) - 1;
      counterMap.set(element, counterValue);
      markerCounter.set(element, markerValue);
      if (!counterValue) {
        if (!uncontrolledElementsSet.has(element) && controlAttribute) {
          element.removeAttribute(controlAttribute);
        }
        uncontrolledElementsSet.delete(element);
      }
      if (!markerValue) {
        element.removeAttribute(markerName);
      }
    });
    lockCount--;
    if (!lockCount) {
      counterMap = new WeakMap();
      counterMap = new WeakMap();
      uncontrolledElementsSet = new WeakSet();
      markerMap = {};
    }
  };
}
function markOthers(avoidElements, ariaHidden, inert) {
  if (ariaHidden === void 0) {
    ariaHidden = false;
  }
  if (inert === void 0) {
    inert = false;
  }
  const body = getDocument(avoidElements[0]).body;
  return applyAttributeToOthers(avoidElements.concat(Array.from(body.querySelectorAll('[aria-live]'))), body, ariaHidden, inert);
}

const getTabbableOptions = () => ({
  getShadowRoot: true,
  displayCheck:
  // JSDOM does not support the `tabbable` library. To solve this we can
  // check if `ResizeObserver` is a real function (not polyfilled), which
  // determines if the current environment is JSDOM-like.
  typeof ResizeObserver === 'function' && ResizeObserver.toString().includes('[native code]') ? 'full' : 'none'
});
function getTabbableIn(container, direction) {
  const allTabbable = tabbable(container, getTabbableOptions());
  if (direction === 'prev') {
    allTabbable.reverse();
  }
  const activeIndex = allTabbable.indexOf(activeElement(getDocument(container)));
  const nextTabbableElements = allTabbable.slice(activeIndex + 1);
  return nextTabbableElements[0];
}
function getNextTabbable() {
  return getTabbableIn(document.body, 'next');
}
function getPreviousTabbable() {
  return getTabbableIn(document.body, 'prev');
}
function isOutsideEvent(event, container) {
  const containerElement = container || event.currentTarget;
  const relatedTarget = event.relatedTarget;
  return !relatedTarget || !contains(containerElement, relatedTarget);
}
function disableFocusInside(container) {
  const tabbableElements = tabbable(container, getTabbableOptions());
  tabbableElements.forEach(element => {
    element.dataset.tabindex = element.getAttribute('tabindex') || '';
    element.setAttribute('tabindex', '-1');
  });
}
function enableFocusInside(container) {
  const elements = container.querySelectorAll('[data-tabindex]');
  elements.forEach(element => {
    const tabindex = element.dataset.tabindex;
    delete element.dataset.tabindex;
    if (tabindex) {
      element.setAttribute('tabindex', tabindex);
    } else {
      element.removeAttribute('tabindex');
    }
  });
}
function getClosestTabbableElement(tabbableElements, element, floating) {
  const elementIndex = tabbableElements.indexOf(element);
  function traverseTabbableElements(next) {
    const attr = createAttribute('focus-guard');
    let index = elementIndex + (next ? 1 : 0);
    let currentElement = tabbableElements[index];
    while (currentElement && (!currentElement.isConnected || currentElement.hasAttribute(attr) || contains(floating, currentElement))) {
      if (next) {
        index++;
      } else {
        index--;
      }
      currentElement = tabbableElements[index];
    }
    return currentElement;
  }

  // First, try to find the next tabbable element
  const next = traverseTabbableElements(true);
  if (next) {
    return next;
  }

  // If we can't find a next tabbable element, try to find the previous one
  return traverseTabbableElements(false);
}

// See Diego Haz's Sandbox for making this logic work well on Safari/iOS:
// https://codesandbox.io/s/tabbable-portal-f4tng?file=/src/FocusTrap.tsx

const HIDDEN_STYLES = {
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  padding: 0,
  position: 'fixed',
  whiteSpace: 'nowrap',
  width: '1px',
  top: 0,
  left: 0
};
let timeoutId;
function setActiveElementOnTab(event) {
  if (event.key === 'Tab') {
    event.target;
    clearTimeout(timeoutId);
  }
}
const FocusGuard = /*#__PURE__*/React.forwardRef(function FocusGuard(props, ref) {
  const [role, setRole] = React.useState();
  index(() => {
    if (isSafari()) {
      // Unlike other screen readers such as NVDA and JAWS, the virtual cursor
      // on VoiceOver does trigger the onFocus event, so we can use the focus
      // trap element. On Safari, only buttons trigger the onFocus event.
      // NB: "group" role in the Sandbox no longer appears to work, must be a
      // button role.
      setRole('button');
    }
    document.addEventListener('keydown', setActiveElementOnTab);
    return () => {
      document.removeEventListener('keydown', setActiveElementOnTab);
    };
  }, []);
  const restProps = {
    ref,
    tabIndex: 0,
    // Role is only for VoiceOver
    role,
    'aria-hidden': role ? undefined : true,
    [createAttribute('focus-guard')]: '',
    style: HIDDEN_STYLES
  };
  return /*#__PURE__*/React.createElement("span", _extends$1({}, props, restProps));
});

const PortalContext = /*#__PURE__*/React.createContext(null);
const attr = /*#__PURE__*/createAttribute('portal');
/**
 * @see https://floating-ui.com/docs/FloatingPortal#usefloatingportalnode
 */
function useFloatingPortalNode(props) {
  if (props === void 0) {
    props = {};
  }
  const {
    id,
    root
  } = props;
  const uniqueId = useId();
  const portalContext = usePortalContext();
  const [portalNode, setPortalNode] = React.useState(null);
  const portalNodeRef = React.useRef(null);
  index(() => {
    return () => {
      portalNode == null || portalNode.remove();
      // Allow the subsequent layout effects to create a new node on updates.
      // The portal node will still be cleaned up on unmount.
      // https://github.com/floating-ui/floating-ui/issues/2454
      queueMicrotask(() => {
        portalNodeRef.current = null;
      });
    };
  }, [portalNode]);
  index(() => {
    // Wait for the uniqueId to be generated before creating the portal node in
    // React <18 (using `useFloatingId` instead of the native `useId`).
    // https://github.com/floating-ui/floating-ui/issues/2778
    if (!uniqueId) return;
    if (portalNodeRef.current) return;
    const existingIdRoot = id ? document.getElementById(id) : null;
    if (!existingIdRoot) return;
    const subRoot = document.createElement('div');
    subRoot.id = uniqueId;
    subRoot.setAttribute(attr, '');
    existingIdRoot.appendChild(subRoot);
    portalNodeRef.current = subRoot;
    setPortalNode(subRoot);
  }, [id, uniqueId]);
  index(() => {
    if (!uniqueId) return;
    if (portalNodeRef.current) return;
    let container = root || (portalContext == null ? void 0 : portalContext.portalNode);
    if (container && !isElement(container)) container = container.current;
    container = container || document.body;
    let idWrapper = null;
    if (id) {
      idWrapper = document.createElement('div');
      idWrapper.id = id;
      container.appendChild(idWrapper);
    }
    const subRoot = document.createElement('div');
    subRoot.id = uniqueId;
    subRoot.setAttribute(attr, '');
    container = idWrapper || container;
    container.appendChild(subRoot);
    portalNodeRef.current = subRoot;
    setPortalNode(subRoot);
  }, [id, root, uniqueId, portalContext]);
  return portalNode;
}
/**
 * Portals the floating element into a given container element — by default,
 * outside of the app root and into the body.
 * This is necessary to ensure the floating element can appear outside any
 * potential parent containers that cause clipping (such as `overflow: hidden`),
 * while retaining its location in the React tree.
 * @see https://floating-ui.com/docs/FloatingPortal
 */
function FloatingPortal(props) {
  const {
    children,
    id,
    root = null,
    preserveTabOrder = true
  } = props;
  const portalNode = useFloatingPortalNode({
    id,
    root
  });
  const [focusManagerState, setFocusManagerState] = React.useState(null);
  const beforeOutsideRef = React.useRef(null);
  const afterOutsideRef = React.useRef(null);
  const beforeInsideRef = React.useRef(null);
  const afterInsideRef = React.useRef(null);
  const shouldRenderGuards =
  // The FocusManager and therefore floating element are currently open/
  // rendered.
  !!focusManagerState &&
  // Guards are only for non-modal focus management.
  !focusManagerState.modal &&
  // Don't render if unmount is transitioning.
  focusManagerState.open && preserveTabOrder && !!(root || portalNode);

  // https://codesandbox.io/s/tabbable-portal-f4tng?file=/src/TabbablePortal.tsx
  React.useEffect(() => {
    if (!portalNode || !preserveTabOrder || focusManagerState != null && focusManagerState.modal) {
      return;
    }

    // Make sure elements inside the portal element are tabbable only when the
    // portal has already been focused, either by tabbing into a focus trap
    // element outside or using the mouse.
    function onFocus(event) {
      if (portalNode && isOutsideEvent(event)) {
        const focusing = event.type === 'focusin';
        const manageFocus = focusing ? enableFocusInside : disableFocusInside;
        manageFocus(portalNode);
      }
    }
    // Listen to the event on the capture phase so they run before the focus
    // trap elements onFocus prop is called.
    portalNode.addEventListener('focusin', onFocus, true);
    portalNode.addEventListener('focusout', onFocus, true);
    return () => {
      portalNode.removeEventListener('focusin', onFocus, true);
      portalNode.removeEventListener('focusout', onFocus, true);
    };
  }, [portalNode, preserveTabOrder, focusManagerState == null ? void 0 : focusManagerState.modal]);
  return /*#__PURE__*/React.createElement(PortalContext.Provider, {
    value: React.useMemo(() => ({
      preserveTabOrder,
      beforeOutsideRef,
      afterOutsideRef,
      beforeInsideRef,
      afterInsideRef,
      portalNode,
      setFocusManagerState
    }), [preserveTabOrder, portalNode])
  }, shouldRenderGuards && portalNode && /*#__PURE__*/React.createElement(FocusGuard, {
    "data-type": "outside",
    ref: beforeOutsideRef,
    onFocus: event => {
      if (isOutsideEvent(event, portalNode)) {
        var _beforeInsideRef$curr;
        (_beforeInsideRef$curr = beforeInsideRef.current) == null || _beforeInsideRef$curr.focus();
      } else {
        const prevTabbable = getPreviousTabbable() || (focusManagerState == null ? void 0 : focusManagerState.refs.domReference.current);
        prevTabbable == null || prevTabbable.focus();
      }
    }
  }), shouldRenderGuards && portalNode && /*#__PURE__*/React.createElement("span", {
    "aria-owns": portalNode.id,
    style: HIDDEN_STYLES
  }), portalNode && /*#__PURE__*/ReactDOM.createPortal(children, portalNode), shouldRenderGuards && portalNode && /*#__PURE__*/React.createElement(FocusGuard, {
    "data-type": "outside",
    ref: afterOutsideRef,
    onFocus: event => {
      if (isOutsideEvent(event, portalNode)) {
        var _afterInsideRef$curre;
        (_afterInsideRef$curre = afterInsideRef.current) == null || _afterInsideRef$curre.focus();
      } else {
        const nextTabbable = getNextTabbable() || (focusManagerState == null ? void 0 : focusManagerState.refs.domReference.current);
        nextTabbable == null || nextTabbable.focus();
        (focusManagerState == null ? void 0 : focusManagerState.closeOnFocusOut) && (focusManagerState == null ? void 0 : focusManagerState.onOpenChange(false, event.nativeEvent));
      }
    }
  }));
}
const usePortalContext = () => React.useContext(PortalContext);

const LIST_LIMIT = 20;
let previouslyFocusedElements = [];
function addPreviouslyFocusedElement(element) {
  previouslyFocusedElements = previouslyFocusedElements.filter(el => el.isConnected);
  let tabbableEl = element;
  if (!tabbableEl || getNodeName(tabbableEl) === 'body') return;
  if (!isTabbable(tabbableEl, getTabbableOptions())) {
    const tabbableChild = tabbable(tabbableEl, getTabbableOptions())[0];
    if (tabbableChild) {
      tabbableEl = tabbableChild;
    }
  }
  previouslyFocusedElements.push(tabbableEl);
  if (previouslyFocusedElements.length > LIST_LIMIT) {
    previouslyFocusedElements = previouslyFocusedElements.slice(-LIST_LIMIT);
  }
}
function getPreviouslyFocusedElement() {
  return previouslyFocusedElements.slice().reverse().find(el => el.isConnected);
}
const VisuallyHiddenDismiss = /*#__PURE__*/React.forwardRef(function VisuallyHiddenDismiss(props, ref) {
  return /*#__PURE__*/React.createElement("button", _extends$1({}, props, {
    type: "button",
    ref: ref,
    tabIndex: -1,
    style: HIDDEN_STYLES
  }));
});
/**
 * Provides focus management for the floating element.
 * @see https://floating-ui.com/docs/FloatingFocusManager
 */
function FloatingFocusManager(props) {
  const {
    context,
    children,
    disabled = false,
    order = ['content'],
    guards: _guards = true,
    initialFocus = 0,
    returnFocus = true,
    restoreFocus = false,
    modal = true,
    visuallyHiddenDismiss = false,
    closeOnFocusOut = true
  } = props;
  const {
    open,
    refs,
    nodeId,
    onOpenChange,
    events,
    dataRef,
    floatingId,
    elements: {
      domReference,
      floating
    }
  } = context;
  const ignoreInitialFocus = typeof initialFocus === 'number' && initialFocus < 0;
  // If the reference is a combobox and is typeable (e.g. input/textarea),
  // there are different focus semantics. The guards should not be rendered, but
  // aria-hidden should be applied to all nodes still. Further, the visually
  // hidden dismiss button should only appear at the end of the list, not the
  // start.
  const isUntrappedTypeableCombobox = isTypeableCombobox(domReference) && ignoreInitialFocus;

  // Force the guards to be rendered if the `inert` attribute is not supported.
  const guards = supportsInert() ? _guards : true;
  const orderRef = useLatestRef(order);
  const initialFocusRef = useLatestRef(initialFocus);
  const returnFocusRef = useLatestRef(returnFocus);
  const tree = useFloatingTree();
  const portalContext = usePortalContext();
  const startDismissButtonRef = React.useRef(null);
  const endDismissButtonRef = React.useRef(null);
  const preventReturnFocusRef = React.useRef(false);
  const isPointerDownRef = React.useRef(false);
  const tabbableIndexRef = React.useRef(-1);
  const isInsidePortal = portalContext != null;
  const firstElementChild = floating == null ? void 0 : floating.firstElementChild;
  // If the floating element is acting as a positioning wrapper rather than the
  // element that receives aria props, use it as the focus root instead.
  const floatingFocusNode = (firstElementChild == null ? void 0 : firstElementChild.id) === floatingId ? firstElementChild : floating;
  const getTabbableContent = useEffectEvent(function (container) {
    if (container === void 0) {
      container = floatingFocusNode;
    }
    return container ? tabbable(container, getTabbableOptions()) : [];
  });
  const getTabbableElements = useEffectEvent(container => {
    const content = getTabbableContent(container);
    return orderRef.current.map(type => {
      if (domReference && type === 'reference') {
        return domReference;
      }
      if (floatingFocusNode && type === 'floating') {
        return floatingFocusNode;
      }
      return content;
    }).filter(Boolean).flat();
  });
  React.useEffect(() => {
    if (disabled) return;
    if (!modal) return;
    function onKeyDown(event) {
      if (event.key === 'Tab') {
        // The focus guards have nothing to focus, so we need to stop the event.
        if (contains(floatingFocusNode, activeElement(getDocument(floatingFocusNode))) && getTabbableContent().length === 0 && !isUntrappedTypeableCombobox) {
          stopEvent(event);
        }
        const els = getTabbableElements();
        const target = getTarget(event);
        if (orderRef.current[0] === 'reference' && target === domReference) {
          stopEvent(event);
          if (event.shiftKey) {
            enqueueFocus(els[els.length - 1]);
          } else {
            enqueueFocus(els[1]);
          }
        }
        if (orderRef.current[1] === 'floating' && target === floatingFocusNode && event.shiftKey) {
          stopEvent(event);
          enqueueFocus(els[0]);
        }
      }
    }
    const doc = getDocument(floatingFocusNode);
    doc.addEventListener('keydown', onKeyDown);
    return () => {
      doc.removeEventListener('keydown', onKeyDown);
    };
  }, [disabled, domReference, floatingFocusNode, modal, orderRef, isUntrappedTypeableCombobox, getTabbableContent, getTabbableElements]);
  React.useEffect(() => {
    if (disabled) return;
    if (!floating) return;
    function handleFocusIn(event) {
      const target = getTarget(event);
      const tabbableContent = getTabbableContent();
      const tabbableIndex = tabbableContent.indexOf(target);
      if (tabbableIndex !== -1) {
        tabbableIndexRef.current = tabbableIndex;
      }
    }
    floating.addEventListener('focusin', handleFocusIn);
    return () => {
      floating.removeEventListener('focusin', handleFocusIn);
    };
  }, [disabled, floating, getTabbableContent]);
  React.useEffect(() => {
    if (disabled) return;
    if (!closeOnFocusOut) return;

    // In Safari, buttons lose focus when pressing them.
    function handlePointerDown() {
      isPointerDownRef.current = true;
      setTimeout(() => {
        isPointerDownRef.current = false;
      });
    }
    function handleFocusOutside(event) {
      const relatedTarget = event.relatedTarget;
      queueMicrotask(() => {
        const movedToUnrelatedNode = !(contains(domReference, relatedTarget) || contains(floating, relatedTarget) || contains(relatedTarget, floating) || contains(portalContext == null ? void 0 : portalContext.portalNode, relatedTarget) || relatedTarget != null && relatedTarget.hasAttribute(createAttribute('focus-guard')) || tree && (getChildren(tree.nodesRef.current, nodeId).find(node => {
          var _node$context, _node$context2;
          return contains((_node$context = node.context) == null ? void 0 : _node$context.elements.floating, relatedTarget) || contains((_node$context2 = node.context) == null ? void 0 : _node$context2.elements.domReference, relatedTarget);
        }) || getAncestors(tree.nodesRef.current, nodeId).find(node => {
          var _node$context3, _node$context4;
          return ((_node$context3 = node.context) == null ? void 0 : _node$context3.elements.floating) === relatedTarget || ((_node$context4 = node.context) == null ? void 0 : _node$context4.elements.domReference) === relatedTarget;
        })));

        // Restore focus to the previous tabbable element index to prevent
        // focus from being lost outside the floating tree.
        if (restoreFocus && movedToUnrelatedNode && activeElement(getDocument(floatingFocusNode)) === getDocument(floatingFocusNode).body) {
          // Let `FloatingPortal` effect knows that focus is still inside the
          // floating tree.
          if (isHTMLElement(floatingFocusNode)) {
            floatingFocusNode == null || floatingFocusNode.focus();
          }
          const prevTabbableIndex = tabbableIndexRef.current;
          const tabbableContent = getTabbableContent();
          const nodeToFocus = tabbableContent[prevTabbableIndex] || tabbableContent[tabbableContent.length - 1] || floatingFocusNode;
          if (isHTMLElement(nodeToFocus)) {
            nodeToFocus.focus();
          }
        }

        // Focus did not move inside the floating tree, and there are no tabbable
        // portal guards to handle closing.
        if ((isUntrappedTypeableCombobox ? true : !modal) && relatedTarget && movedToUnrelatedNode && !isPointerDownRef.current &&
        // Fix React 18 Strict Mode returnFocus due to double rendering.
        relatedTarget !== getPreviouslyFocusedElement()) {
          preventReturnFocusRef.current = true;
          onOpenChange(false, event);
        }
      });
    }
    if (floating && isHTMLElement(domReference)) {
      domReference.addEventListener('focusout', handleFocusOutside);
      domReference.addEventListener('pointerdown', handlePointerDown);
      floating.addEventListener('focusout', handleFocusOutside);
      return () => {
        domReference.removeEventListener('focusout', handleFocusOutside);
        domReference.removeEventListener('pointerdown', handlePointerDown);
        floating.removeEventListener('focusout', handleFocusOutside);
      };
    }
  }, [disabled, domReference, floating, floatingFocusNode, modal, nodeId, tree, portalContext, onOpenChange, closeOnFocusOut, restoreFocus, getTabbableContent, isUntrappedTypeableCombobox]);
  React.useEffect(() => {
    var _portalContext$portal;
    if (disabled) return;

    // Don't hide portals nested within the parent portal.
    const portalNodes = Array.from((portalContext == null || (_portalContext$portal = portalContext.portalNode) == null ? void 0 : _portalContext$portal.querySelectorAll("[" + createAttribute('portal') + "]")) || []);
    if (floating) {
      const insideElements = [floating, ...portalNodes, startDismissButtonRef.current, endDismissButtonRef.current, orderRef.current.includes('reference') || isUntrappedTypeableCombobox ? domReference : null].filter(x => x != null);
      const cleanup = modal || isUntrappedTypeableCombobox ? markOthers(insideElements, guards, !guards) : markOthers(insideElements);
      return () => {
        cleanup();
      };
    }
  }, [disabled, domReference, floating, modal, orderRef, portalContext, isUntrappedTypeableCombobox, guards]);
  index(() => {
    if (disabled || !isHTMLElement(floatingFocusNode)) return;
    const doc = getDocument(floatingFocusNode);
    const previouslyFocusedElement = activeElement(doc);

    // Wait for any layout effect state setters to execute to set `tabIndex`.
    queueMicrotask(() => {
      const focusableElements = getTabbableElements(floatingFocusNode);
      const initialFocusValue = initialFocusRef.current;
      const elToFocus = (typeof initialFocusValue === 'number' ? focusableElements[initialFocusValue] : initialFocusValue.current) || floatingFocusNode;
      const focusAlreadyInsideFloatingEl = contains(floatingFocusNode, previouslyFocusedElement);
      if (!ignoreInitialFocus && !focusAlreadyInsideFloatingEl && open) {
        enqueueFocus(elToFocus, {
          preventScroll: elToFocus === floatingFocusNode
        });
      }
    });
  }, [disabled, open, floatingFocusNode, ignoreInitialFocus, getTabbableElements, initialFocusRef]);
  index(() => {
    if (disabled || !floatingFocusNode) return;
    let preventReturnFocusScroll = false;
    const doc = getDocument(floatingFocusNode);
    const previouslyFocusedElement = activeElement(doc);
    const contextData = dataRef.current;
    let openEvent = contextData.openEvent;
    const domReference = refs.domReference.current;
    addPreviouslyFocusedElement(previouslyFocusedElement);

    // Dismissing via outside press should always ignore `returnFocus` to
    // prevent unwanted scrolling.
    function onOpenChange(_ref) {
      let {
        open,
        reason,
        event,
        nested
      } = _ref;
      if (open) {
        openEvent = event;
      }
      if (reason === 'escape-key' && refs.domReference.current) {
        addPreviouslyFocusedElement(refs.domReference.current);
      }
      if (reason === 'hover' && event.type === 'mouseleave') {
        preventReturnFocusRef.current = true;
      }
      if (reason !== 'outside-press') return;
      if (nested) {
        preventReturnFocusRef.current = false;
        preventReturnFocusScroll = true;
      } else {
        preventReturnFocusRef.current = !(isVirtualClick(event) || isVirtualPointerEvent(event));
      }
    }
    events.on('openchange', onOpenChange);
    return () => {
      events.off('openchange', onOpenChange);
      const activeEl = activeElement(doc);
      const isFocusInsideFloatingTree = contains(floating, activeEl) || tree && getChildren(tree.nodesRef.current, nodeId).some(node => {
        var _node$context5;
        return contains((_node$context5 = node.context) == null ? void 0 : _node$context5.elements.floating, activeEl);
      });
      const shouldFocusReference = isFocusInsideFloatingTree || openEvent && ['click', 'mousedown'].includes(openEvent.type);
      if (shouldFocusReference && refs.domReference.current) {
        addPreviouslyFocusedElement(refs.domReference.current);
      }
      const returnContextElement = domReference || previouslyFocusedElement;
      const tabbableElements = tabbable(getDocument(returnContextElement).body, getTabbableOptions());

      // Wait for the return element to get potentially disconnected before
      // checking.
      queueMicrotask(() => {
        let returnElement = getPreviouslyFocusedElement();
        if (!returnElement && isHTMLElement(returnContextElement) && floating) {
          returnElement = getClosestTabbableElement(tabbableElements, returnContextElement, floating);
        }
        if (
        // eslint-disable-next-line react-hooks/exhaustive-deps
        returnFocusRef.current && !preventReturnFocusRef.current && isHTMLElement(returnElement) && (
        // If the focus moved somewhere else after mount, avoid returning focus
        // since it likely entered a different element which should be
        // respected: https://github.com/floating-ui/floating-ui/issues/2607
        returnElement !== activeEl && activeEl !== doc.body ? isFocusInsideFloatingTree : true)) {
          returnElement.focus({
            preventScroll: preventReturnFocusScroll
          });
        }
      });
    };
  }, [disabled, floating, floatingFocusNode, returnFocusRef, dataRef, refs, events, tree, nodeId]);

  // Synchronize the `context` & `modal` value to the FloatingPortal context.
  // It will decide whether or not it needs to render its own guards.
  index(() => {
    if (disabled) return;
    if (!portalContext) return;
    portalContext.setFocusManagerState({
      modal,
      closeOnFocusOut,
      open,
      onOpenChange,
      refs
    });
    return () => {
      portalContext.setFocusManagerState(null);
    };
  }, [disabled, portalContext, modal, open, onOpenChange, refs, closeOnFocusOut]);
  index(() => {
    if (disabled) return;
    if (!floatingFocusNode) return;
    if (typeof MutationObserver !== 'function') return;
    if (ignoreInitialFocus) return;
    const handleMutation = () => {
      const tabIndex = floatingFocusNode.getAttribute('tabindex');
      const tabbableContent = getTabbableContent();
      const activeEl = activeElement(getDocument(floating));
      const tabbableIndex = tabbableContent.indexOf(activeEl);
      if (tabbableIndex !== -1) {
        tabbableIndexRef.current = tabbableIndex;
      }
      if (orderRef.current.includes('floating') || activeEl !== refs.domReference.current && tabbableContent.length === 0) {
        if (tabIndex !== '0') {
          floatingFocusNode.setAttribute('tabindex', '0');
        }
      } else if (tabIndex !== '-1') {
        floatingFocusNode.setAttribute('tabindex', '-1');
      }
    };
    handleMutation();
    const observer = new MutationObserver(handleMutation);
    observer.observe(floatingFocusNode, {
      childList: true,
      subtree: true,
      attributes: true
    });
    return () => {
      observer.disconnect();
    };
  }, [disabled, floating, floatingFocusNode, refs, orderRef, getTabbableContent, ignoreInitialFocus]);
  function renderDismissButton(location) {
    if (disabled || !visuallyHiddenDismiss || !modal) {
      return null;
    }
    return /*#__PURE__*/React.createElement(VisuallyHiddenDismiss, {
      ref: location === 'start' ? startDismissButtonRef : endDismissButtonRef,
      onClick: event => onOpenChange(false, event.nativeEvent)
    }, typeof visuallyHiddenDismiss === 'string' ? visuallyHiddenDismiss : 'Dismiss');
  }
  const shouldRenderGuards = !disabled && guards && (modal ? !isUntrappedTypeableCombobox : true) && (isInsidePortal || modal);
  return /*#__PURE__*/React.createElement(React.Fragment, null, shouldRenderGuards && /*#__PURE__*/React.createElement(FocusGuard, {
    "data-type": "inside",
    ref: portalContext == null ? void 0 : portalContext.beforeInsideRef,
    onFocus: event => {
      if (modal) {
        const els = getTabbableElements();
        enqueueFocus(order[0] === 'reference' ? els[0] : els[els.length - 1]);
      } else if (portalContext != null && portalContext.preserveTabOrder && portalContext.portalNode) {
        preventReturnFocusRef.current = false;
        if (isOutsideEvent(event, portalContext.portalNode)) {
          const nextTabbable = getNextTabbable() || domReference;
          nextTabbable == null || nextTabbable.focus();
        } else {
          var _portalContext$before;
          (_portalContext$before = portalContext.beforeOutsideRef.current) == null || _portalContext$before.focus();
        }
      }
    }
  }), !isUntrappedTypeableCombobox && renderDismissButton('start'), children, renderDismissButton('end'), shouldRenderGuards && /*#__PURE__*/React.createElement(FocusGuard, {
    "data-type": "inside",
    ref: portalContext == null ? void 0 : portalContext.afterInsideRef,
    onFocus: event => {
      if (modal) {
        enqueueFocus(getTabbableElements()[0]);
      } else if (portalContext != null && portalContext.preserveTabOrder && portalContext.portalNode) {
        if (closeOnFocusOut) {
          preventReturnFocusRef.current = true;
        }
        if (isOutsideEvent(event, portalContext.portalNode)) {
          const prevTabbable = getPreviousTabbable() || domReference;
          prevTabbable == null || prevTabbable.focus();
        } else {
          var _portalContext$afterO;
          (_portalContext$afterO = portalContext.afterOutsideRef.current) == null || _portalContext$afterO.focus();
        }
      }
    }
  }));
}

const activeLocks = /*#__PURE__*/new Set();
/**
 * Provides base styling for a fixed overlay element to dim content or block
 * pointer events behind a floating element.
 * It's a regular `<div>`, so it can be styled via any CSS solution you prefer.
 * @see https://floating-ui.com/docs/FloatingOverlay
 */
const FloatingOverlay = /*#__PURE__*/React.forwardRef(function FloatingOverlay(props, ref) {
  const {
    lockScroll = false,
    ...rest
  } = props;
  const lockId = useId();
  index(() => {
    if (!lockScroll) return;
    activeLocks.add(lockId);
    const isIOS = /iP(hone|ad|od)|iOS/.test(getPlatform());
    const bodyStyle = document.body.style;
    // RTL <body> scrollbar
    const scrollbarX = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft;
    const paddingProp = scrollbarX ? 'paddingLeft' : 'paddingRight';
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const scrollX = bodyStyle.left ? parseFloat(bodyStyle.left) : window.scrollX;
    const scrollY = bodyStyle.top ? parseFloat(bodyStyle.top) : window.scrollY;
    bodyStyle.overflow = 'hidden';
    if (scrollbarWidth) {
      bodyStyle[paddingProp] = scrollbarWidth + "px";
    }

    // Only iOS doesn't respect `overflow: hidden` on document.body, and this
    // technique has fewer side effects.
    if (isIOS) {
      var _window$visualViewpor, _window$visualViewpor2;
      // iOS 12 does not support `visualViewport`.
      const offsetLeft = ((_window$visualViewpor = window.visualViewport) == null ? void 0 : _window$visualViewpor.offsetLeft) || 0;
      const offsetTop = ((_window$visualViewpor2 = window.visualViewport) == null ? void 0 : _window$visualViewpor2.offsetTop) || 0;
      Object.assign(bodyStyle, {
        position: 'fixed',
        top: -(scrollY - Math.floor(offsetTop)) + "px",
        left: -(scrollX - Math.floor(offsetLeft)) + "px",
        right: '0'
      });
    }
    return () => {
      activeLocks.delete(lockId);
      if (activeLocks.size === 0) {
        Object.assign(bodyStyle, {
          overflow: '',
          [paddingProp]: ''
        });
        if (isIOS) {
          Object.assign(bodyStyle, {
            position: '',
            top: '',
            left: '',
            right: ''
          });
          window.scrollTo(scrollX, scrollY);
        }
      }
    };
  }, [lockId, lockScroll]);
  return /*#__PURE__*/React.createElement("div", _extends$1({
    ref: ref
  }, rest, {
    style: {
      position: 'fixed',
      overflow: 'auto',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...rest.style
    }
  }));
});

function isButtonTarget(event) {
  return isHTMLElement(event.target) && event.target.tagName === 'BUTTON';
}
function isSpaceIgnored(element) {
  return isTypeableElement(element);
}
/**
 * Opens or closes the floating element when clicking the reference element.
 * @see https://floating-ui.com/docs/useClick
 */
function useClick(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    onOpenChange,
    dataRef,
    elements: {
      domReference
    }
  } = context;
  const {
    enabled = true,
    event: eventOption = 'click',
    toggle = true,
    ignoreMouse = false,
    keyboardHandlers = true
  } = props;
  const pointerTypeRef = React.useRef();
  const didKeyDownRef = React.useRef(false);
  const reference = React.useMemo(() => ({
    onPointerDown(event) {
      pointerTypeRef.current = event.pointerType;
    },
    onMouseDown(event) {
      const pointerType = pointerTypeRef.current;

      // Ignore all buttons except for the "main" button.
      // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button
      if (event.button !== 0) return;
      if (eventOption === 'click') return;
      if (isMouseLikePointerType(pointerType, true) && ignoreMouse) return;
      if (open && toggle && (dataRef.current.openEvent ? dataRef.current.openEvent.type === 'mousedown' : true)) {
        onOpenChange(false, event.nativeEvent, 'click');
      } else {
        // Prevent stealing focus from the floating element
        event.preventDefault();
        onOpenChange(true, event.nativeEvent, 'click');
      }
    },
    onClick(event) {
      const pointerType = pointerTypeRef.current;
      if (eventOption === 'mousedown' && pointerTypeRef.current) {
        pointerTypeRef.current = undefined;
        return;
      }
      if (isMouseLikePointerType(pointerType, true) && ignoreMouse) return;
      if (open && toggle && (dataRef.current.openEvent ? dataRef.current.openEvent.type === 'click' : true)) {
        onOpenChange(false, event.nativeEvent, 'click');
      } else {
        onOpenChange(true, event.nativeEvent, 'click');
      }
    },
    onKeyDown(event) {
      pointerTypeRef.current = undefined;
      if (event.defaultPrevented || !keyboardHandlers || isButtonTarget(event)) {
        return;
      }
      if (event.key === ' ' && !isSpaceIgnored(domReference)) {
        // Prevent scrolling
        event.preventDefault();
        didKeyDownRef.current = true;
      }
      if (event.key === 'Enter') {
        if (open && toggle) {
          onOpenChange(false, event.nativeEvent, 'click');
        } else {
          onOpenChange(true, event.nativeEvent, 'click');
        }
      }
    },
    onKeyUp(event) {
      if (event.defaultPrevented || !keyboardHandlers || isButtonTarget(event) || isSpaceIgnored(domReference)) {
        return;
      }
      if (event.key === ' ' && didKeyDownRef.current) {
        didKeyDownRef.current = false;
        if (open && toggle) {
          onOpenChange(false, event.nativeEvent, 'click');
        } else {
          onOpenChange(true, event.nativeEvent, 'click');
        }
      }
    }
  }), [dataRef, domReference, eventOption, ignoreMouse, keyboardHandlers, onOpenChange, open, toggle]);
  return React.useMemo(() => enabled ? {
    reference
  } : {}, [enabled, reference]);
}

const bubbleHandlerKeys = {
  pointerdown: 'onPointerDown',
  mousedown: 'onMouseDown',
  click: 'onClick'
};
const captureHandlerKeys = {
  pointerdown: 'onPointerDownCapture',
  mousedown: 'onMouseDownCapture',
  click: 'onClickCapture'
};
const normalizeProp = normalizable => {
  var _normalizable$escapeK, _normalizable$outside;
  return {
    escapeKey: typeof normalizable === 'boolean' ? normalizable : (_normalizable$escapeK = normalizable == null ? void 0 : normalizable.escapeKey) != null ? _normalizable$escapeK : false,
    outsidePress: typeof normalizable === 'boolean' ? normalizable : (_normalizable$outside = normalizable == null ? void 0 : normalizable.outsidePress) != null ? _normalizable$outside : true
  };
};
/**
 * Closes the floating element when a dismissal is requested — by default, when
 * the user presses the `escape` key or outside of the floating element.
 * @see https://floating-ui.com/docs/useDismiss
 */
function useDismiss(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    onOpenChange,
    elements,
    dataRef
  } = context;
  const {
    enabled = true,
    escapeKey = true,
    outsidePress: unstable_outsidePress = true,
    outsidePressEvent = 'pointerdown',
    referencePress = false,
    referencePressEvent = 'pointerdown',
    ancestorScroll = false,
    bubbles,
    capture
  } = props;
  const tree = useFloatingTree();
  const outsidePressFn = useEffectEvent(typeof unstable_outsidePress === 'function' ? unstable_outsidePress : () => false);
  const outsidePress = typeof unstable_outsidePress === 'function' ? outsidePressFn : unstable_outsidePress;
  const insideReactTreeRef = React.useRef(false);
  const endedOrStartedInsideRef = React.useRef(false);
  const {
    escapeKey: escapeKeyBubbles,
    outsidePress: outsidePressBubbles
  } = normalizeProp(bubbles);
  const {
    escapeKey: escapeKeyCapture,
    outsidePress: outsidePressCapture
  } = normalizeProp(capture);
  const closeOnEscapeKeyDown = useEffectEvent(event => {
    var _dataRef$current$floa;
    if (!open || !enabled || !escapeKey || event.key !== 'Escape') {
      return;
    }
    const nodeId = (_dataRef$current$floa = dataRef.current.floatingContext) == null ? void 0 : _dataRef$current$floa.nodeId;
    const children = tree ? getChildren(tree.nodesRef.current, nodeId) : [];
    if (!escapeKeyBubbles) {
      event.stopPropagation();
      if (children.length > 0) {
        let shouldDismiss = true;
        children.forEach(child => {
          var _child$context;
          if ((_child$context = child.context) != null && _child$context.open && !child.context.dataRef.current.__escapeKeyBubbles) {
            shouldDismiss = false;
            return;
          }
        });
        if (!shouldDismiss) {
          return;
        }
      }
    }
    onOpenChange(false, isReactEvent(event) ? event.nativeEvent : event, 'escape-key');
  });
  const closeOnEscapeKeyDownCapture = useEffectEvent(event => {
    var _getTarget2;
    const callback = () => {
      var _getTarget;
      closeOnEscapeKeyDown(event);
      (_getTarget = getTarget(event)) == null || _getTarget.removeEventListener('keydown', callback);
    };
    (_getTarget2 = getTarget(event)) == null || _getTarget2.addEventListener('keydown', callback);
  });
  const closeOnPressOutside = useEffectEvent(event => {
    var _dataRef$current$floa2;
    // Given developers can stop the propagation of the synthetic event,
    // we can only be confident with a positive value.
    const insideReactTree = insideReactTreeRef.current;
    insideReactTreeRef.current = false;

    // When click outside is lazy (`click` event), handle dragging.
    // Don't close if:
    // - The click started inside the floating element.
    // - The click ended inside the floating element.
    const endedOrStartedInside = endedOrStartedInsideRef.current;
    endedOrStartedInsideRef.current = false;
    if (outsidePressEvent === 'click' && endedOrStartedInside) {
      return;
    }
    if (insideReactTree) {
      return;
    }
    if (typeof outsidePress === 'function' && !outsidePress(event)) {
      return;
    }
    const target = getTarget(event);
    const inertSelector = "[" + createAttribute('inert') + "]";
    const markers = getDocument(elements.floating).querySelectorAll(inertSelector);
    let targetRootAncestor = isElement(target) ? target : null;
    while (targetRootAncestor && !isLastTraversableNode(targetRootAncestor)) {
      const nextParent = getParentNode(targetRootAncestor);
      if (isLastTraversableNode(nextParent) || !isElement(nextParent)) {
        break;
      }
      targetRootAncestor = nextParent;
    }

    // Check if the click occurred on a third-party element injected after the
    // floating element rendered.
    if (markers.length && isElement(target) && !isRootElement(target) &&
    // Clicked on a direct ancestor (e.g. FloatingOverlay).
    !contains(target, elements.floating) &&
    // If the target root element contains none of the markers, then the
    // element was injected after the floating element rendered.
    Array.from(markers).every(marker => !contains(targetRootAncestor, marker))) {
      return;
    }

    // Check if the click occurred on the scrollbar
    if (isHTMLElement(target) && floating) {
      // In Firefox, `target.scrollWidth > target.clientWidth` for inline
      // elements.
      const canScrollX = target.clientWidth > 0 && target.scrollWidth > target.clientWidth;
      const canScrollY = target.clientHeight > 0 && target.scrollHeight > target.clientHeight;
      let xCond = canScrollY && event.offsetX > target.clientWidth;

      // In some browsers it is possible to change the <body> (or window)
      // scrollbar to the left side, but is very rare and is difficult to
      // check for. Plus, for modal dialogs with backdrops, it is more
      // important that the backdrop is checked but not so much the window.
      if (canScrollY) {
        const isRTL = getComputedStyle$1(target).direction === 'rtl';
        if (isRTL) {
          xCond = event.offsetX <= target.offsetWidth - target.clientWidth;
        }
      }
      if (xCond || canScrollX && event.offsetY > target.clientHeight) {
        return;
      }
    }
    const nodeId = (_dataRef$current$floa2 = dataRef.current.floatingContext) == null ? void 0 : _dataRef$current$floa2.nodeId;
    const targetIsInsideChildren = tree && getChildren(tree.nodesRef.current, nodeId).some(node => {
      var _node$context;
      return isEventTargetWithin(event, (_node$context = node.context) == null ? void 0 : _node$context.elements.floating);
    });
    if (isEventTargetWithin(event, elements.floating) || isEventTargetWithin(event, elements.domReference) || targetIsInsideChildren) {
      return;
    }
    const children = tree ? getChildren(tree.nodesRef.current, nodeId) : [];
    if (children.length > 0) {
      let shouldDismiss = true;
      children.forEach(child => {
        var _child$context2;
        if ((_child$context2 = child.context) != null && _child$context2.open && !child.context.dataRef.current.__outsidePressBubbles) {
          shouldDismiss = false;
          return;
        }
      });
      if (!shouldDismiss) {
        return;
      }
    }
    onOpenChange(false, event, 'outside-press');
  });
  const closeOnPressOutsideCapture = useEffectEvent(event => {
    var _getTarget4;
    const callback = () => {
      var _getTarget3;
      closeOnPressOutside(event);
      (_getTarget3 = getTarget(event)) == null || _getTarget3.removeEventListener(outsidePressEvent, callback);
    };
    (_getTarget4 = getTarget(event)) == null || _getTarget4.addEventListener(outsidePressEvent, callback);
  });
  React.useEffect(() => {
    if (!open || !enabled) {
      return;
    }
    dataRef.current.__escapeKeyBubbles = escapeKeyBubbles;
    dataRef.current.__outsidePressBubbles = outsidePressBubbles;
    function onScroll(event) {
      onOpenChange(false, event, 'ancestor-scroll');
    }
    const doc = getDocument(elements.floating);
    escapeKey && doc.addEventListener('keydown', escapeKeyCapture ? closeOnEscapeKeyDownCapture : closeOnEscapeKeyDown, escapeKeyCapture);
    outsidePress && doc.addEventListener(outsidePressEvent, outsidePressCapture ? closeOnPressOutsideCapture : closeOnPressOutside, outsidePressCapture);
    let ancestors = [];
    if (ancestorScroll) {
      if (isElement(elements.domReference)) {
        ancestors = getOverflowAncestors(elements.domReference);
      }
      if (isElement(elements.floating)) {
        ancestors = ancestors.concat(getOverflowAncestors(elements.floating));
      }
      if (!isElement(elements.reference) && elements.reference && elements.reference.contextElement) {
        ancestors = ancestors.concat(getOverflowAncestors(elements.reference.contextElement));
      }
    }

    // Ignore the visual viewport for scrolling dismissal (allow pinch-zoom)
    ancestors = ancestors.filter(ancestor => {
      var _doc$defaultView;
      return ancestor !== ((_doc$defaultView = doc.defaultView) == null ? void 0 : _doc$defaultView.visualViewport);
    });
    ancestors.forEach(ancestor => {
      ancestor.addEventListener('scroll', onScroll, {
        passive: true
      });
    });
    return () => {
      escapeKey && doc.removeEventListener('keydown', escapeKeyCapture ? closeOnEscapeKeyDownCapture : closeOnEscapeKeyDown, escapeKeyCapture);
      outsidePress && doc.removeEventListener(outsidePressEvent, outsidePressCapture ? closeOnPressOutsideCapture : closeOnPressOutside, outsidePressCapture);
      ancestors.forEach(ancestor => {
        ancestor.removeEventListener('scroll', onScroll);
      });
    };
  }, [dataRef, elements, escapeKey, outsidePress, outsidePressEvent, open, onOpenChange, ancestorScroll, enabled, escapeKeyBubbles, outsidePressBubbles, closeOnEscapeKeyDown, escapeKeyCapture, closeOnEscapeKeyDownCapture, closeOnPressOutside, outsidePressCapture, closeOnPressOutsideCapture]);
  React.useEffect(() => {
    insideReactTreeRef.current = false;
  }, [outsidePress, outsidePressEvent]);
  const reference = React.useMemo(() => ({
    onKeyDown: closeOnEscapeKeyDown,
    [bubbleHandlerKeys[referencePressEvent]]: event => {
      if (referencePress) {
        onOpenChange(false, event.nativeEvent, 'reference-press');
      }
    }
  }), [closeOnEscapeKeyDown, onOpenChange, referencePress, referencePressEvent]);
  const floating = React.useMemo(() => ({
    onKeyDown: closeOnEscapeKeyDown,
    onMouseDown() {
      endedOrStartedInsideRef.current = true;
    },
    onMouseUp() {
      endedOrStartedInsideRef.current = true;
    },
    [captureHandlerKeys[outsidePressEvent]]: () => {
      insideReactTreeRef.current = true;
    }
  }), [closeOnEscapeKeyDown, outsidePressEvent]);
  return React.useMemo(() => enabled ? {
    reference,
    floating
  } : {}, [enabled, reference, floating]);
}

function useFloatingRootContext(options) {
  const {
    open = false,
    onOpenChange: onOpenChangeProp,
    elements: elementsProp
  } = options;
  const floatingId = useId();
  const dataRef = React.useRef({});
  const [events] = React.useState(() => createPubSub());
  const nested = useFloatingParentNodeId() != null;
  if (process.env.NODE_ENV !== "production") {
    const optionDomReference = elementsProp.reference;
    if (optionDomReference && !isElement(optionDomReference)) {
      error('Cannot pass a virtual element to the `elements.reference` option,', 'as it must be a real DOM element. Use `refs.setPositionReference()`', 'instead.');
    }
  }
  const [positionReference, setPositionReference] = React.useState(elementsProp.reference);
  const onOpenChange = useEffectEvent((open, event, reason) => {
    dataRef.current.openEvent = open ? event : undefined;
    events.emit('openchange', {
      open,
      event,
      reason,
      nested
    });
    onOpenChangeProp == null || onOpenChangeProp(open, event, reason);
  });
  const refs = React.useMemo(() => ({
    setPositionReference
  }), []);
  const elements = React.useMemo(() => ({
    reference: positionReference || elementsProp.reference || null,
    floating: elementsProp.floating || null,
    domReference: elementsProp.reference
  }), [positionReference, elementsProp.reference, elementsProp.floating]);
  return React.useMemo(() => ({
    dataRef,
    open,
    onOpenChange,
    elements,
    events,
    floatingId,
    refs
  }), [open, onOpenChange, elements, events, floatingId, refs]);
}

/**
 * Provides data to position a floating element and context to add interactions.
 * @see https://floating-ui.com/docs/useFloating
 */
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    nodeId
  } = options;
  const internalRootContext = useFloatingRootContext({
    ...options,
    elements: {
      reference: null,
      floating: null,
      ...options.elements
    }
  });
  const rootContext = options.rootContext || internalRootContext;
  const computedElements = rootContext.elements;
  const [_domReference, setDomReference] = React.useState(null);
  const [positionReference, _setPositionReference] = React.useState(null);
  const optionDomReference = computedElements == null ? void 0 : computedElements.reference;
  const domReference = optionDomReference || _domReference;
  const domReferenceRef = React.useRef(null);
  const tree = useFloatingTree();
  index(() => {
    if (domReference) {
      domReferenceRef.current = domReference;
    }
  }, [domReference]);
  const position = useFloating$1({
    ...options,
    elements: {
      ...computedElements,
      ...(positionReference && {
        reference: positionReference
      })
    }
  });
  const setPositionReference = React.useCallback(node => {
    const computedPositionReference = isElement(node) ? {
      getBoundingClientRect: () => node.getBoundingClientRect(),
      contextElement: node
    } : node;
    // Store the positionReference in state if the DOM reference is specified externally via the
    // `elements.reference` option. This ensures that it won't be overridden on future renders.
    _setPositionReference(computedPositionReference);
    position.refs.setReference(computedPositionReference);
  }, [position.refs]);
  const setReference = React.useCallback(node => {
    if (isElement(node) || node === null) {
      domReferenceRef.current = node;
      setDomReference(node);
    }

    // Backwards-compatibility for passing a virtual element to `reference`
    // after it has set the DOM reference.
    if (isElement(position.refs.reference.current) || position.refs.reference.current === null ||
    // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    node !== null && !isElement(node)) {
      position.refs.setReference(node);
    }
  }, [position.refs]);
  const refs = React.useMemo(() => ({
    ...position.refs,
    setReference,
    setPositionReference,
    domReference: domReferenceRef
  }), [position.refs, setReference, setPositionReference]);
  const elements = React.useMemo(() => ({
    ...position.elements,
    domReference: domReference
  }), [position.elements, domReference]);
  const context = React.useMemo(() => ({
    ...position,
    ...rootContext,
    refs,
    elements,
    nodeId
  }), [position, refs, elements, nodeId, rootContext]);
  index(() => {
    rootContext.dataRef.current.floatingContext = context;
    const node = tree == null ? void 0 : tree.nodesRef.current.find(node => node.id === nodeId);
    if (node) {
      node.context = context;
    }
  });
  return React.useMemo(() => ({
    ...position,
    context,
    refs,
    elements
  }), [position, refs, elements, context]);
}

/**
 * Opens the floating element while the reference element has focus, like CSS
 * `:focus`.
 * @see https://floating-ui.com/docs/useFocus
 */
function useFocus(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    onOpenChange,
    events,
    dataRef,
    elements
  } = context;
  const {
    enabled = true,
    visibleOnly = true
  } = props;
  const blockFocusRef = React.useRef(false);
  const timeoutRef = React.useRef();
  const keyboardModalityRef = React.useRef(true);
  React.useEffect(() => {
    if (!enabled) return;
    const win = getWindow(elements.domReference);

    // If the reference was focused and the user left the tab/window, and the
    // floating element was not open, the focus should be blocked when they
    // return to the tab/window.
    function onBlur() {
      if (!open && isHTMLElement(elements.domReference) && elements.domReference === activeElement(getDocument(elements.domReference))) {
        blockFocusRef.current = true;
      }
    }
    function onKeyDown() {
      keyboardModalityRef.current = true;
    }
    win.addEventListener('blur', onBlur);
    win.addEventListener('keydown', onKeyDown, true);
    return () => {
      win.removeEventListener('blur', onBlur);
      win.removeEventListener('keydown', onKeyDown, true);
    };
  }, [elements.domReference, open, enabled]);
  React.useEffect(() => {
    if (!enabled) return;
    function onOpenChange(_ref) {
      let {
        reason
      } = _ref;
      if (reason === 'reference-press' || reason === 'escape-key') {
        blockFocusRef.current = true;
      }
    }
    events.on('openchange', onOpenChange);
    return () => {
      events.off('openchange', onOpenChange);
    };
  }, [events, enabled]);
  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);
  const reference = React.useMemo(() => ({
    onPointerDown(event) {
      if (isVirtualPointerEvent(event.nativeEvent)) return;
      keyboardModalityRef.current = false;
    },
    onMouseLeave() {
      blockFocusRef.current = false;
    },
    onFocus(event) {
      if (blockFocusRef.current) return;
      const target = getTarget(event.nativeEvent);
      if (visibleOnly && isElement(target)) {
        try {
          // Mac Safari unreliably matches `:focus-visible` on the reference
          // if focus was outside the page initially - use the fallback
          // instead.
          if (isSafari() && isMac()) throw Error();
          if (!target.matches(':focus-visible')) return;
        } catch (e) {
          // Old browsers will throw an error when using `:focus-visible`.
          if (!keyboardModalityRef.current && !isTypeableElement(target)) {
            return;
          }
        }
      }
      onOpenChange(true, event.nativeEvent, 'focus');
    },
    onBlur(event) {
      blockFocusRef.current = false;
      const relatedTarget = event.relatedTarget;
      const nativeEvent = event.nativeEvent;

      // Hit the non-modal focus management portal guard. Focus will be
      // moved into the floating element immediately after.
      const movedToFocusGuard = isElement(relatedTarget) && relatedTarget.hasAttribute(createAttribute('focus-guard')) && relatedTarget.getAttribute('data-type') === 'outside';

      // Wait for the window blur listener to fire.
      timeoutRef.current = window.setTimeout(() => {
        var _dataRef$current$floa;
        const activeEl = activeElement(elements.domReference ? elements.domReference.ownerDocument : document);

        // Focus left the page, keep it open.
        if (!relatedTarget && activeEl === elements.domReference) return;

        // When focusing the reference element (e.g. regular click), then
        // clicking into the floating element, prevent it from hiding.
        // Note: it must be focusable, e.g. `tabindex="-1"`.
        // We can not rely on relatedTarget to point to the correct element
        // as it will only point to the shadow host of the newly focused element
        // and not the element that actually has received focus if it is located
        // inside a shadow root.
        if (contains((_dataRef$current$floa = dataRef.current.floatingContext) == null ? void 0 : _dataRef$current$floa.refs.floating.current, activeEl) || contains(elements.domReference, activeEl) || movedToFocusGuard) {
          return;
        }
        onOpenChange(false, nativeEvent, 'focus');
      });
    }
  }), [dataRef, elements.domReference, onOpenChange, visibleOnly]);
  return React.useMemo(() => enabled ? {
    reference
  } : {}, [enabled, reference]);
}

const ACTIVE_KEY = 'active';
const SELECTED_KEY = 'selected';
function mergeProps(userProps, propsList, elementKey) {
  const map = new Map();
  const isItem = elementKey === 'item';
  let domUserProps = userProps;
  if (isItem && userProps) {
    const {
      [ACTIVE_KEY]: _,
      [SELECTED_KEY]: __,
      ...validProps
    } = userProps;
    domUserProps = validProps;
  }
  return {
    ...(elementKey === 'floating' && {
      tabIndex: -1
    }),
    ...domUserProps,
    ...propsList.map(value => {
      const propsOrGetProps = value ? value[elementKey] : null;
      if (typeof propsOrGetProps === 'function') {
        return userProps ? propsOrGetProps(userProps) : null;
      }
      return propsOrGetProps;
    }).concat(userProps).reduce((acc, props) => {
      if (!props) {
        return acc;
      }
      Object.entries(props).forEach(_ref => {
        let [key, value] = _ref;
        if (isItem && [ACTIVE_KEY, SELECTED_KEY].includes(key)) {
          return;
        }
        if (key.indexOf('on') === 0) {
          if (!map.has(key)) {
            map.set(key, []);
          }
          if (typeof value === 'function') {
            var _map$get;
            (_map$get = map.get(key)) == null || _map$get.push(value);
            acc[key] = function () {
              var _map$get2;
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              return (_map$get2 = map.get(key)) == null ? void 0 : _map$get2.map(fn => fn(...args)).find(val => val !== undefined);
            };
          }
        } else {
          acc[key] = value;
        }
      });
      return acc;
    }, {})
  };
}
/**
 * Merges an array of interaction hooks' props into prop getters, allowing
 * event handler functions to be composed together without overwriting one
 * another.
 * @see https://floating-ui.com/docs/useInteractions
 */
function useInteractions(propsList) {
  if (propsList === void 0) {
    propsList = [];
  }
  const referenceDeps = propsList.map(key => key == null ? void 0 : key.reference);
  const floatingDeps = propsList.map(key => key == null ? void 0 : key.floating);
  const itemDeps = propsList.map(key => key == null ? void 0 : key.item);
  const getReferenceProps = React.useCallback(userProps => mergeProps(userProps, propsList, 'reference'),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  referenceDeps);
  const getFloatingProps = React.useCallback(userProps => mergeProps(userProps, propsList, 'floating'),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  floatingDeps);
  const getItemProps = React.useCallback(userProps => mergeProps(userProps, propsList, 'item'),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  itemDeps);
  return React.useMemo(() => ({
    getReferenceProps,
    getFloatingProps,
    getItemProps
  }), [getReferenceProps, getFloatingProps, getItemProps]);
}

let isPreventScrollSupported = false;
function doSwitch(orientation, vertical, horizontal) {
  switch (orientation) {
    case 'vertical':
      return vertical;
    case 'horizontal':
      return horizontal;
    default:
      return vertical || horizontal;
  }
}
function isMainOrientationKey(key, orientation) {
  const vertical = key === ARROW_UP || key === ARROW_DOWN;
  const horizontal = key === ARROW_LEFT || key === ARROW_RIGHT;
  return doSwitch(orientation, vertical, horizontal);
}
function isMainOrientationToEndKey(key, orientation, rtl) {
  const vertical = key === ARROW_DOWN;
  const horizontal = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
  return doSwitch(orientation, vertical, horizontal) || key === 'Enter' || key === ' ' || key === '';
}
function isCrossOrientationOpenKey(key, orientation, rtl) {
  const vertical = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
  const horizontal = key === ARROW_DOWN;
  return doSwitch(orientation, vertical, horizontal);
}
function isCrossOrientationCloseKey(key, orientation, rtl) {
  const vertical = rtl ? key === ARROW_RIGHT : key === ARROW_LEFT;
  const horizontal = key === ARROW_UP;
  return doSwitch(orientation, vertical, horizontal);
}
/**
 * Adds arrow key-based navigation of a list of items, either using real DOM
 * focus or virtual focus.
 * @see https://floating-ui.com/docs/useListNavigation
 */
function useListNavigation(context, props) {
  const {
    open,
    onOpenChange,
    elements
  } = context;
  const {
    listRef,
    activeIndex,
    onNavigate: unstable_onNavigate = () => {},
    enabled = true,
    selectedIndex = null,
    allowEscape = false,
    loop = false,
    nested = false,
    rtl = false,
    virtual = false,
    focusItemOnOpen = 'auto',
    focusItemOnHover = true,
    openOnArrowKeyDown = true,
    disabledIndices = undefined,
    orientation = 'vertical',
    cols = 1,
    scrollItemIntoView = true,
    virtualItemRef,
    itemSizes,
    dense = false
  } = props;
  if (process.env.NODE_ENV !== "production") {
    if (allowEscape) {
      if (!loop) {
        warn('`useListNavigation` looping must be enabled to allow escaping.');
      }
      if (!virtual) {
        warn('`useListNavigation` must be virtual to allow escaping.');
      }
    }
    if (orientation === 'vertical' && cols > 1) {
      warn('In grid list navigation mode (`cols` > 1), the `orientation` should', 'be either "horizontal" or "both".');
    }
  }
  const parentId = useFloatingParentNodeId();
  const tree = useFloatingTree();
  const onNavigate = useEffectEvent(unstable_onNavigate);
  const focusItemOnOpenRef = React.useRef(focusItemOnOpen);
  const indexRef = React.useRef(selectedIndex != null ? selectedIndex : -1);
  const keyRef = React.useRef(null);
  const isPointerModalityRef = React.useRef(true);
  const previousOnNavigateRef = React.useRef(onNavigate);
  const previousMountedRef = React.useRef(!!elements.floating);
  const previousOpenRef = React.useRef(open);
  const forceSyncFocus = React.useRef(false);
  const forceScrollIntoViewRef = React.useRef(false);
  const disabledIndicesRef = useLatestRef(disabledIndices);
  const latestOpenRef = useLatestRef(open);
  const scrollItemIntoViewRef = useLatestRef(scrollItemIntoView);
  const floatingRef = useLatestRef(elements.floating);
  const selectedIndexRef = useLatestRef(selectedIndex);
  const [activeId, setActiveId] = React.useState();
  const [virtualId, setVirtualId] = React.useState();
  const focusItem = useEffectEvent(function (listRef, indexRef, forceScrollIntoView) {
    if (forceScrollIntoView === void 0) {
      forceScrollIntoView = false;
    }
    function runFocus(item) {
      if (virtual) {
        setActiveId(item.id);
        tree == null || tree.events.emit('virtualfocus', item);
        if (virtualItemRef) {
          virtualItemRef.current = item;
        }
      } else {
        enqueueFocus(item, {
          preventScroll: true,
          // Mac Safari does not move the virtual cursor unless the focus call
          // is sync. However, for the very first focus call, we need to wait
          // for the position to be ready in order to prevent unwanted
          // scrolling. This means the virtual cursor will not move to the first
          // item when first opening the floating element, but will on
          // subsequent calls. `preventScroll` is supported in modern Safari,
          // so we can use that instead.
          // iOS Safari must be async or the first item will not be focused.
          sync: isMac() && isSafari() ? isPreventScrollSupported || forceSyncFocus.current : false
        });
      }
    }
    const initialItem = listRef.current[indexRef.current];
    if (initialItem) {
      runFocus(initialItem);
    }
    requestAnimationFrame(() => {
      const waitedItem = listRef.current[indexRef.current] || initialItem;
      if (!waitedItem) return;
      if (!initialItem) {
        runFocus(waitedItem);
      }
      const scrollIntoViewOptions = scrollItemIntoViewRef.current;
      const shouldScrollIntoView = scrollIntoViewOptions && item && (forceScrollIntoView || !isPointerModalityRef.current);
      if (shouldScrollIntoView) {
        // JSDOM doesn't support `.scrollIntoView()` but it's widely supported
        // by all browsers.
        waitedItem.scrollIntoView == null || waitedItem.scrollIntoView(typeof scrollIntoViewOptions === 'boolean' ? {
          block: 'nearest',
          inline: 'nearest'
        } : scrollIntoViewOptions);
      }
    });
  });
  index(() => {
    document.createElement('div').focus({
      get preventScroll() {
        isPreventScrollSupported = true;
        return false;
      }
    });
  }, []);

  // Sync `selectedIndex` to be the `activeIndex` upon opening the floating
  // element. Also, reset `activeIndex` upon closing the floating element.
  index(() => {
    if (!enabled) return;
    if (open && elements.floating) {
      if (focusItemOnOpenRef.current && selectedIndex != null) {
        // Regardless of the pointer modality, we want to ensure the selected
        // item comes into view when the floating element is opened.
        forceScrollIntoViewRef.current = true;
        indexRef.current = selectedIndex;
        onNavigate(selectedIndex);
      }
    } else if (previousMountedRef.current) {
      // Since the user can specify `onNavigate` conditionally
      // (onNavigate: open ? setActiveIndex : setSelectedIndex),
      // we store and call the previous function.
      indexRef.current = -1;
      previousOnNavigateRef.current(null);
    }
  }, [enabled, open, elements.floating, selectedIndex, onNavigate]);

  // Sync `activeIndex` to be the focused item while the floating element is
  // open.
  index(() => {
    if (!enabled) return;
    if (open && elements.floating) {
      if (activeIndex == null) {
        forceSyncFocus.current = false;
        if (selectedIndexRef.current != null) {
          return;
        }

        // Reset while the floating element was open (e.g. the list changed).
        if (previousMountedRef.current) {
          indexRef.current = -1;
          focusItem(listRef, indexRef);
        }

        // Initial sync.
        if ((!previousOpenRef.current || !previousMountedRef.current) && focusItemOnOpenRef.current && (keyRef.current != null || focusItemOnOpenRef.current === true && keyRef.current == null)) {
          let runs = 0;
          const waitForListPopulated = () => {
            if (listRef.current[0] == null) {
              // Avoid letting the browser paint if possible on the first try,
              // otherwise use rAF. Don't try more than twice, since something
              // is wrong otherwise.
              if (runs < 2) {
                const scheduler = runs ? requestAnimationFrame : queueMicrotask;
                scheduler(waitForListPopulated);
              }
              runs++;
            } else {
              indexRef.current = keyRef.current == null || isMainOrientationToEndKey(keyRef.current, orientation, rtl) || nested ? getMinIndex(listRef, disabledIndicesRef.current) : getMaxIndex(listRef, disabledIndicesRef.current);
              keyRef.current = null;
              onNavigate(indexRef.current);
            }
          };
          waitForListPopulated();
        }
      } else if (!isIndexOutOfBounds(listRef, activeIndex)) {
        indexRef.current = activeIndex;
        focusItem(listRef, indexRef, forceScrollIntoViewRef.current);
        forceScrollIntoViewRef.current = false;
      }
    }
  }, [enabled, open, elements.floating, activeIndex, selectedIndexRef, nested, listRef, orientation, rtl, onNavigate, focusItem, disabledIndicesRef]);

  // Ensure the parent floating element has focus when a nested child closes
  // to allow arrow key navigation to work after the pointer leaves the child.
  index(() => {
    var _nodes$find;
    if (!enabled || elements.floating || !tree || virtual || !previousMountedRef.current) {
      return;
    }
    const nodes = tree.nodesRef.current;
    const parent = (_nodes$find = nodes.find(node => node.id === parentId)) == null || (_nodes$find = _nodes$find.context) == null ? void 0 : _nodes$find.elements.floating;
    const activeEl = activeElement(getDocument(elements.floating));
    const treeContainsActiveEl = nodes.some(node => node.context && contains(node.context.elements.floating, activeEl));
    if (parent && !treeContainsActiveEl && isPointerModalityRef.current) {
      parent.focus({
        preventScroll: true
      });
    }
  }, [enabled, elements.floating, tree, parentId, virtual]);
  index(() => {
    if (!enabled) return;
    if (!tree) return;
    if (!virtual) return;
    if (parentId) return;
    function handleVirtualFocus(item) {
      setVirtualId(item.id);
      if (virtualItemRef) {
        virtualItemRef.current = item;
      }
    }
    tree.events.on('virtualfocus', handleVirtualFocus);
    return () => {
      tree.events.off('virtualfocus', handleVirtualFocus);
    };
  }, [enabled, tree, virtual, parentId, virtualItemRef]);
  index(() => {
    previousOnNavigateRef.current = onNavigate;
    previousMountedRef.current = !!elements.floating;
  });
  index(() => {
    if (!open) {
      keyRef.current = null;
    }
  }, [open]);
  index(() => {
    previousOpenRef.current = open;
  }, [open]);
  const hasActiveIndex = activeIndex != null;
  const item = React.useMemo(() => {
    function syncCurrentTarget(currentTarget) {
      if (!open) return;
      const index = listRef.current.indexOf(currentTarget);
      if (index !== -1) {
        onNavigate(index);
      }
    }
    const props = {
      onFocus(_ref) {
        let {
          currentTarget
        } = _ref;
        syncCurrentTarget(currentTarget);
      },
      onClick: _ref2 => {
        let {
          currentTarget
        } = _ref2;
        return currentTarget.focus({
          preventScroll: true
        });
      },
      // Safari
      ...(focusItemOnHover && {
        onMouseMove(_ref3) {
          let {
            currentTarget
          } = _ref3;
          syncCurrentTarget(currentTarget);
        },
        onPointerLeave(_ref4) {
          let {
            pointerType
          } = _ref4;
          if (!isPointerModalityRef.current || pointerType === 'touch') {
            return;
          }
          indexRef.current = -1;
          focusItem(listRef, indexRef);
          onNavigate(null);
          if (!virtual) {
            enqueueFocus(floatingRef.current, {
              preventScroll: true
            });
          }
        }
      })
    };
    return props;
  }, [open, floatingRef, focusItem, focusItemOnHover, listRef, onNavigate, virtual]);
  const commonOnKeyDown = useEffectEvent(event => {
    isPointerModalityRef.current = false;
    forceSyncFocus.current = true;

    // If the floating element is animating out, ignore navigation. Otherwise,
    // the `activeIndex` gets set to 0 despite not being open so the next time
    // the user ArrowDowns, the first item won't be focused.
    if (!latestOpenRef.current && event.currentTarget === floatingRef.current) {
      return;
    }
    if (nested && isCrossOrientationCloseKey(event.key, orientation, rtl)) {
      stopEvent(event);
      onOpenChange(false, event.nativeEvent, 'list-navigation');
      if (isHTMLElement(elements.domReference) && !virtual) {
        elements.domReference.focus();
      }
      return;
    }
    const currentIndex = indexRef.current;
    const minIndex = getMinIndex(listRef, disabledIndices);
    const maxIndex = getMaxIndex(listRef, disabledIndices);
    if (event.key === 'Home') {
      stopEvent(event);
      indexRef.current = minIndex;
      onNavigate(indexRef.current);
    }
    if (event.key === 'End') {
      stopEvent(event);
      indexRef.current = maxIndex;
      onNavigate(indexRef.current);
    }

    // Grid navigation.
    if (cols > 1) {
      const sizes = itemSizes || Array.from({
        length: listRef.current.length
      }, () => ({
        width: 1,
        height: 1
      }));
      // To calculate movements on the grid, we use hypothetical cell indices
      // as if every item was 1x1, then convert back to real indices.
      const cellMap = buildCellMap(sizes, cols, dense);
      const minGridIndex = cellMap.findIndex(index => index != null && !isDisabled(listRef.current, index, disabledIndices));
      // last enabled index
      const maxGridIndex = cellMap.reduce((foundIndex, index, cellIndex) => index != null && !isDisabled(listRef.current, index, disabledIndices) ? cellIndex : foundIndex, -1);
      indexRef.current = cellMap[getGridNavigatedIndex({
        current: cellMap.map(itemIndex => itemIndex != null ? listRef.current[itemIndex] : null)
      }, {
        event,
        orientation,
        loop,
        cols,
        // treat undefined (empty grid spaces) as disabled indices so we
        // don't end up in them
        disabledIndices: getCellIndices([...(disabledIndices || listRef.current.map((_, index) => isDisabled(listRef.current, index) ? index : undefined)), undefined], cellMap),
        minIndex: minGridIndex,
        maxIndex: maxGridIndex,
        prevIndex: getCellIndexOfCorner(indexRef.current > maxIndex ? minIndex : indexRef.current, sizes, cellMap, cols,
        // use a corner matching the edge closest to the direction
        // we're moving in so we don't end up in the same item. Prefer
        // top/left over bottom/right.
        event.key === ARROW_DOWN ? 'bl' : event.key === ARROW_RIGHT ? 'tr' : 'tl'),
        stopEvent: true
      })]; // navigated cell will never be nullish

      onNavigate(indexRef.current);
      if (orientation === 'both') {
        return;
      }
    }
    if (isMainOrientationKey(event.key, orientation)) {
      stopEvent(event);

      // Reset the index if no item is focused.
      if (open && !virtual && activeElement(event.currentTarget.ownerDocument) === event.currentTarget) {
        indexRef.current = isMainOrientationToEndKey(event.key, orientation, rtl) ? minIndex : maxIndex;
        onNavigate(indexRef.current);
        return;
      }
      if (isMainOrientationToEndKey(event.key, orientation, rtl)) {
        if (loop) {
          indexRef.current = currentIndex >= maxIndex ? allowEscape && currentIndex !== listRef.current.length ? -1 : minIndex : findNonDisabledIndex(listRef, {
            startingIndex: currentIndex,
            disabledIndices
          });
        } else {
          indexRef.current = Math.min(maxIndex, findNonDisabledIndex(listRef, {
            startingIndex: currentIndex,
            disabledIndices
          }));
        }
      } else {
        if (loop) {
          indexRef.current = currentIndex <= minIndex ? allowEscape && currentIndex !== -1 ? listRef.current.length : maxIndex : findNonDisabledIndex(listRef, {
            startingIndex: currentIndex,
            decrement: true,
            disabledIndices
          });
        } else {
          indexRef.current = Math.max(minIndex, findNonDisabledIndex(listRef, {
            startingIndex: currentIndex,
            decrement: true,
            disabledIndices
          }));
        }
      }
      if (isIndexOutOfBounds(listRef, indexRef.current)) {
        onNavigate(null);
      } else {
        onNavigate(indexRef.current);
      }
    }
  });
  const ariaActiveDescendantProp = React.useMemo(() => {
    return virtual && open && hasActiveIndex && {
      'aria-activedescendant': virtualId || activeId
    };
  }, [virtual, open, hasActiveIndex, virtualId, activeId]);
  const floating = React.useMemo(() => {
    return {
      'aria-orientation': orientation === 'both' ? undefined : orientation,
      ...(!isTypeableCombobox(elements.domReference) && ariaActiveDescendantProp),
      onKeyDown: commonOnKeyDown,
      onPointerMove() {
        isPointerModalityRef.current = true;
      }
    };
  }, [ariaActiveDescendantProp, commonOnKeyDown, elements.domReference, orientation]);
  const reference = React.useMemo(() => {
    function checkVirtualMouse(event) {
      if (focusItemOnOpen === 'auto' && isVirtualClick(event.nativeEvent)) {
        focusItemOnOpenRef.current = true;
      }
    }
    function checkVirtualPointer(event) {
      // `pointerdown` fires first, reset the state then perform the checks.
      focusItemOnOpenRef.current = focusItemOnOpen;
      if (focusItemOnOpen === 'auto' && isVirtualPointerEvent(event.nativeEvent)) {
        focusItemOnOpenRef.current = true;
      }
    }
    return {
      ...ariaActiveDescendantProp,
      onKeyDown(event) {
        isPointerModalityRef.current = false;
        const isArrowKey = event.key.indexOf('Arrow') === 0;
        const isCrossOpenKey = isCrossOrientationOpenKey(event.key, orientation, rtl);
        const isCrossCloseKey = isCrossOrientationCloseKey(event.key, orientation, rtl);
        const isMainKey = isMainOrientationKey(event.key, orientation);
        const isNavigationKey = (nested ? isCrossOpenKey : isMainKey) || event.key === 'Enter' || event.key.trim() === '';
        if (virtual && open) {
          const rootNode = tree == null ? void 0 : tree.nodesRef.current.find(node => node.parentId == null);
          const deepestNode = tree && rootNode ? getDeepestNode(tree.nodesRef.current, rootNode.id) : null;
          if (isArrowKey && deepestNode && virtualItemRef) {
            const eventObject = new KeyboardEvent('keydown', {
              key: event.key,
              bubbles: true
            });
            if (isCrossOpenKey || isCrossCloseKey) {
              var _deepestNode$context, _deepestNode$context2;
              const isCurrentTarget = ((_deepestNode$context = deepestNode.context) == null ? void 0 : _deepestNode$context.elements.domReference) === event.currentTarget;
              const dispatchItem = isCrossCloseKey && !isCurrentTarget ? (_deepestNode$context2 = deepestNode.context) == null ? void 0 : _deepestNode$context2.elements.domReference : isCrossOpenKey ? listRef.current.find(item => (item == null ? void 0 : item.id) === activeId) : null;
              if (dispatchItem) {
                stopEvent(event);
                dispatchItem.dispatchEvent(eventObject);
                setVirtualId(undefined);
              }
            }
            if (isMainKey && deepestNode.context) {
              if (deepestNode.context.open && deepestNode.parentId && event.currentTarget !== deepestNode.context.elements.domReference) {
                var _deepestNode$context$;
                stopEvent(event);
                (_deepestNode$context$ = deepestNode.context.elements.domReference) == null || _deepestNode$context$.dispatchEvent(eventObject);
                return;
              }
            }
          }
          return commonOnKeyDown(event);
        }

        // If a floating element should not open on arrow key down, avoid
        // setting `activeIndex` while it's closed.
        if (!open && !openOnArrowKeyDown && isArrowKey) {
          return;
        }
        if (isNavigationKey) {
          keyRef.current = nested && isMainKey ? null : event.key;
        }
        if (nested) {
          if (isCrossOpenKey) {
            stopEvent(event);
            if (open) {
              indexRef.current = getMinIndex(listRef, disabledIndicesRef.current);
              onNavigate(indexRef.current);
            } else {
              onOpenChange(true, event.nativeEvent, 'list-navigation');
            }
          }
          return;
        }
        if (isMainKey) {
          if (selectedIndex != null) {
            indexRef.current = selectedIndex;
          }
          stopEvent(event);
          if (!open && openOnArrowKeyDown) {
            onOpenChange(true, event.nativeEvent, 'list-navigation');
          } else {
            commonOnKeyDown(event);
          }
          if (open) {
            onNavigate(indexRef.current);
          }
        }
      },
      onFocus() {
        if (open && !virtual) {
          onNavigate(null);
        }
      },
      onPointerDown: checkVirtualPointer,
      onMouseDown: checkVirtualMouse,
      onClick: checkVirtualMouse
    };
  }, [activeId, ariaActiveDescendantProp, commonOnKeyDown, disabledIndicesRef, focusItemOnOpen, listRef, nested, onNavigate, onOpenChange, open, openOnArrowKeyDown, orientation, rtl, selectedIndex, tree, virtual, virtualItemRef]);
  return React.useMemo(() => enabled ? {
    reference,
    floating,
    item
  } : {}, [enabled, reference, floating, item]);
}

const componentRoleToAriaRoleMap = /*#__PURE__*/new Map([['select', 'listbox'], ['combobox', 'listbox'], ['label', false]]);

/**
 * Adds base screen reader props to the reference and floating elements for a
 * given floating element `role`.
 * @see https://floating-ui.com/docs/useRole
 */
function useRole(context, props) {
  var _componentRoleToAriaR;
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    floatingId
  } = context;
  const {
    enabled = true,
    role = 'dialog'
  } = props;
  const ariaRole = (_componentRoleToAriaR = componentRoleToAriaRoleMap.get(role)) != null ? _componentRoleToAriaR : role;
  const referenceId = useId();
  const parentId = useFloatingParentNodeId();
  const isNested = parentId != null;
  const reference = React.useMemo(() => {
    if (ariaRole === 'tooltip' || role === 'label') {
      return {
        ["aria-" + (role === 'label' ? 'labelledby' : 'describedby')]: open ? floatingId : undefined
      };
    }
    return {
      'aria-expanded': open ? 'true' : 'false',
      'aria-haspopup': ariaRole === 'alertdialog' ? 'dialog' : ariaRole,
      'aria-controls': open ? floatingId : undefined,
      ...(ariaRole === 'listbox' && {
        role: 'combobox'
      }),
      ...(ariaRole === 'menu' && {
        id: referenceId
      }),
      ...(ariaRole === 'menu' && isNested && {
        role: 'menuitem'
      }),
      ...(role === 'select' && {
        'aria-autocomplete': 'none'
      }),
      ...(role === 'combobox' && {
        'aria-autocomplete': 'list'
      })
    };
  }, [ariaRole, floatingId, isNested, open, referenceId, role]);
  const floating = React.useMemo(() => {
    const floatingProps = {
      id: floatingId,
      ...(ariaRole && {
        role: ariaRole
      })
    };
    if (ariaRole === 'tooltip' || role === 'label') {
      return floatingProps;
    }
    return {
      ...floatingProps,
      ...(ariaRole === 'menu' && {
        'aria-labelledby': referenceId
      })
    };
  }, [ariaRole, floatingId, referenceId, role]);
  const item = React.useCallback(_ref => {
    let {
      active,
      selected
    } = _ref;
    const commonProps = {
      role: 'option',
      ...(active && {
        id: floatingId + "-option"
      })
    };

    // For `menu`, we are unable to tell if the item is a `menuitemradio`
    // or `menuitemcheckbox`. For backwards-compatibility reasons, also
    // avoid defaulting to `menuitem` as it may overwrite custom role props.
    switch (role) {
      case 'select':
        return {
          ...commonProps,
          'aria-selected': active && selected
        };
      case 'combobox':
        {
          return {
            ...commonProps,
            ...(active && {
              'aria-selected': true
            })
          };
        }
    }
    return {};
  }, [floatingId, role]);
  return React.useMemo(() => enabled ? {
    reference,
    floating,
    item
  } : {}, [enabled, reference, floating, item]);
}

/**
 * Provides a matching callback that can be used to focus an item as the user
 * types, often used in tandem with `useListNavigation()`.
 * @see https://floating-ui.com/docs/useTypeahead
 */
function useTypeahead(context, props) {
  var _ref;
  const {
    open,
    dataRef
  } = context;
  const {
    listRef,
    activeIndex,
    onMatch: unstable_onMatch,
    onTypingChange: unstable_onTypingChange,
    enabled = true,
    findMatch = null,
    resetMs = 750,
    ignoreKeys = [],
    selectedIndex = null
  } = props;
  const timeoutIdRef = React.useRef();
  const stringRef = React.useRef('');
  const prevIndexRef = React.useRef((_ref = selectedIndex != null ? selectedIndex : activeIndex) != null ? _ref : -1);
  const matchIndexRef = React.useRef(null);
  const onMatch = useEffectEvent(unstable_onMatch);
  const onTypingChange = useEffectEvent(unstable_onTypingChange);
  const findMatchRef = useLatestRef(findMatch);
  const ignoreKeysRef = useLatestRef(ignoreKeys);
  index(() => {
    if (open) {
      clearTimeout(timeoutIdRef.current);
      matchIndexRef.current = null;
      stringRef.current = '';
    }
  }, [open]);
  index(() => {
    // Sync arrow key navigation but not typeahead navigation.
    if (open && stringRef.current === '') {
      var _ref2;
      prevIndexRef.current = (_ref2 = selectedIndex != null ? selectedIndex : activeIndex) != null ? _ref2 : -1;
    }
  }, [open, selectedIndex, activeIndex]);
  const setTypingChange = useEffectEvent(value => {
    if (value) {
      if (!dataRef.current.typing) {
        dataRef.current.typing = value;
        onTypingChange(value);
      }
    } else {
      if (dataRef.current.typing) {
        dataRef.current.typing = value;
        onTypingChange(value);
      }
    }
  });
  const onKeyDown = useEffectEvent(event => {
    function getMatchingIndex(list, orderedList, string) {
      const str = findMatchRef.current ? findMatchRef.current(orderedList, string) : orderedList.find(text => (text == null ? void 0 : text.toLocaleLowerCase().indexOf(string.toLocaleLowerCase())) === 0);
      return str ? list.indexOf(str) : -1;
    }
    const listContent = listRef.current;
    if (stringRef.current.length > 0 && stringRef.current[0] !== ' ') {
      if (getMatchingIndex(listContent, listContent, stringRef.current) === -1) {
        setTypingChange(false);
      } else if (event.key === ' ') {
        stopEvent(event);
      }
    }
    if (listContent == null || ignoreKeysRef.current.includes(event.key) ||
    // Character key.
    event.key.length !== 1 ||
    // Modifier key.
    event.ctrlKey || event.metaKey || event.altKey) {
      return;
    }
    if (open && event.key !== ' ') {
      stopEvent(event);
      setTypingChange(true);
    }

    // Bail out if the list contains a word like "llama" or "aaron". TODO:
    // allow it in this case, too.
    const allowRapidSuccessionOfFirstLetter = listContent.every(text => {
      var _text$, _text$2;
      return text ? ((_text$ = text[0]) == null ? void 0 : _text$.toLocaleLowerCase()) !== ((_text$2 = text[1]) == null ? void 0 : _text$2.toLocaleLowerCase()) : true;
    });

    // Allows the user to cycle through items that start with the same letter
    // in rapid succession.
    if (allowRapidSuccessionOfFirstLetter && stringRef.current === event.key) {
      stringRef.current = '';
      prevIndexRef.current = matchIndexRef.current;
    }
    stringRef.current += event.key;
    clearTimeout(timeoutIdRef.current);
    timeoutIdRef.current = setTimeout(() => {
      stringRef.current = '';
      prevIndexRef.current = matchIndexRef.current;
      setTypingChange(false);
    }, resetMs);
    const prevIndex = prevIndexRef.current;
    const index = getMatchingIndex(listContent, [...listContent.slice((prevIndex || 0) + 1), ...listContent.slice(0, (prevIndex || 0) + 1)], stringRef.current);
    if (index !== -1) {
      onMatch(index);
      matchIndexRef.current = index;
    } else if (event.key !== ' ') {
      stringRef.current = '';
      setTypingChange(false);
    }
  });
  const reference = React.useMemo(() => ({
    onKeyDown
  }), [onKeyDown]);
  const floating = React.useMemo(() => {
    return {
      onKeyDown,
      onKeyUp(event) {
        if (event.key === ' ') {
          setTypingChange(false);
        }
      }
    };
  }, [onKeyDown, setTypingChange]);
  return React.useMemo(() => enabled ? {
    reference,
    floating
  } : {}, [enabled, reference, floating]);
}

function isPointInPolygon(point, polygon) {
  const [x, y] = point;
  let isInside = false;
  const length = polygon.length;
  for (let i = 0, j = length - 1; i < length; j = i++) {
    const [xi, yi] = polygon[i] || [0, 0];
    const [xj, yj] = polygon[j] || [0, 0];
    const intersect = yi >= y !== yj >= y && x <= (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect) {
      isInside = !isInside;
    }
  }
  return isInside;
}
function isInside(point, rect) {
  return point[0] >= rect.x && point[0] <= rect.x + rect.width && point[1] >= rect.y && point[1] <= rect.y + rect.height;
}
/**
 * Generates a safe polygon area that the user can traverse without closing the
 * floating element once leaving the reference element.
 * @see https://floating-ui.com/docs/useHover#safepolygon
 */
function safePolygon(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    buffer = 0.5,
    blockPointerEvents = false,
    requireIntent = true
  } = options;
  let timeoutId;
  let hasLanded = false;
  let lastX = null;
  let lastY = null;
  let lastCursorTime = performance.now();
  function getCursorSpeed(x, y) {
    const currentTime = performance.now();
    const elapsedTime = currentTime - lastCursorTime;
    if (lastX === null || lastY === null || elapsedTime === 0) {
      lastX = x;
      lastY = y;
      lastCursorTime = currentTime;
      return null;
    }
    const deltaX = x - lastX;
    const deltaY = y - lastY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const speed = distance / elapsedTime; // px / ms

    lastX = x;
    lastY = y;
    lastCursorTime = currentTime;
    return speed;
  }
  const fn = _ref => {
    let {
      x,
      y,
      placement,
      elements,
      onClose,
      nodeId,
      tree
    } = _ref;
    return function onMouseMove(event) {
      function close() {
        clearTimeout(timeoutId);
        onClose();
      }
      clearTimeout(timeoutId);
      if (!elements.domReference || !elements.floating || placement == null || x == null || y == null) {
        return;
      }
      const {
        clientX,
        clientY
      } = event;
      const clientPoint = [clientX, clientY];
      const target = getTarget(event);
      const isLeave = event.type === 'mouseleave';
      const isOverFloatingEl = contains(elements.floating, target);
      const isOverReferenceEl = contains(elements.domReference, target);
      const refRect = elements.domReference.getBoundingClientRect();
      const rect = elements.floating.getBoundingClientRect();
      const side = placement.split('-')[0];
      const cursorLeaveFromRight = x > rect.right - rect.width / 2;
      const cursorLeaveFromBottom = y > rect.bottom - rect.height / 2;
      const isOverReferenceRect = isInside(clientPoint, refRect);
      const isFloatingWider = rect.width > refRect.width;
      const isFloatingTaller = rect.height > refRect.height;
      const left = (isFloatingWider ? refRect : rect).left;
      const right = (isFloatingWider ? refRect : rect).right;
      const top = (isFloatingTaller ? refRect : rect).top;
      const bottom = (isFloatingTaller ? refRect : rect).bottom;
      if (isOverFloatingEl) {
        hasLanded = true;
        if (!isLeave) {
          return;
        }
      }
      if (isOverReferenceEl) {
        hasLanded = false;
      }
      if (isOverReferenceEl && !isLeave) {
        hasLanded = true;
        return;
      }

      // Prevent overlapping floating element from being stuck in an open-close
      // loop: https://github.com/floating-ui/floating-ui/issues/1910
      if (isLeave && isElement(event.relatedTarget) && contains(elements.floating, event.relatedTarget)) {
        return;
      }

      // If any nested child is open, abort.
      if (tree && getChildren(tree.nodesRef.current, nodeId).some(_ref2 => {
        let {
          context
        } = _ref2;
        return context == null ? void 0 : context.open;
      })) {
        return;
      }

      // If the pointer is leaving from the opposite side, the "buffer" logic
      // creates a point where the floating element remains open, but should be
      // ignored.
      // A constant of 1 handles floating point rounding errors.
      if (side === 'top' && y >= refRect.bottom - 1 || side === 'bottom' && y <= refRect.top + 1 || side === 'left' && x >= refRect.right - 1 || side === 'right' && x <= refRect.left + 1) {
        return close();
      }

      // Ignore when the cursor is within the rectangular trough between the
      // two elements. Since the triangle is created from the cursor point,
      // which can start beyond the ref element's edge, traversing back and
      // forth from the ref to the floating element can cause it to close. This
      // ensures it always remains open in that case.
      let rectPoly = [];
      switch (side) {
        case 'top':
          rectPoly = [[left, refRect.top + 1], [left, rect.bottom - 1], [right, rect.bottom - 1], [right, refRect.top + 1]];
          break;
        case 'bottom':
          rectPoly = [[left, rect.top + 1], [left, refRect.bottom - 1], [right, refRect.bottom - 1], [right, rect.top + 1]];
          break;
        case 'left':
          rectPoly = [[rect.right - 1, bottom], [rect.right - 1, top], [refRect.left + 1, top], [refRect.left + 1, bottom]];
          break;
        case 'right':
          rectPoly = [[refRect.right - 1, bottom], [refRect.right - 1, top], [rect.left + 1, top], [rect.left + 1, bottom]];
          break;
      }
      function getPolygon(_ref3) {
        let [x, y] = _ref3;
        switch (side) {
          case 'top':
            {
              const cursorPointOne = [isFloatingWider ? x + buffer / 2 : cursorLeaveFromRight ? x + buffer * 4 : x - buffer * 4, y + buffer + 1];
              const cursorPointTwo = [isFloatingWider ? x - buffer / 2 : cursorLeaveFromRight ? x + buffer * 4 : x - buffer * 4, y + buffer + 1];
              const commonPoints = [[rect.left, cursorLeaveFromRight ? rect.bottom - buffer : isFloatingWider ? rect.bottom - buffer : rect.top], [rect.right, cursorLeaveFromRight ? isFloatingWider ? rect.bottom - buffer : rect.top : rect.bottom - buffer]];
              return [cursorPointOne, cursorPointTwo, ...commonPoints];
            }
          case 'bottom':
            {
              const cursorPointOne = [isFloatingWider ? x + buffer / 2 : cursorLeaveFromRight ? x + buffer * 4 : x - buffer * 4, y - buffer];
              const cursorPointTwo = [isFloatingWider ? x - buffer / 2 : cursorLeaveFromRight ? x + buffer * 4 : x - buffer * 4, y - buffer];
              const commonPoints = [[rect.left, cursorLeaveFromRight ? rect.top + buffer : isFloatingWider ? rect.top + buffer : rect.bottom], [rect.right, cursorLeaveFromRight ? isFloatingWider ? rect.top + buffer : rect.bottom : rect.top + buffer]];
              return [cursorPointOne, cursorPointTwo, ...commonPoints];
            }
          case 'left':
            {
              const cursorPointOne = [x + buffer + 1, isFloatingTaller ? y + buffer / 2 : cursorLeaveFromBottom ? y + buffer * 4 : y - buffer * 4];
              const cursorPointTwo = [x + buffer + 1, isFloatingTaller ? y - buffer / 2 : cursorLeaveFromBottom ? y + buffer * 4 : y - buffer * 4];
              const commonPoints = [[cursorLeaveFromBottom ? rect.right - buffer : isFloatingTaller ? rect.right - buffer : rect.left, rect.top], [cursorLeaveFromBottom ? isFloatingTaller ? rect.right - buffer : rect.left : rect.right - buffer, rect.bottom]];
              return [...commonPoints, cursorPointOne, cursorPointTwo];
            }
          case 'right':
            {
              const cursorPointOne = [x - buffer, isFloatingTaller ? y + buffer / 2 : cursorLeaveFromBottom ? y + buffer * 4 : y - buffer * 4];
              const cursorPointTwo = [x - buffer, isFloatingTaller ? y - buffer / 2 : cursorLeaveFromBottom ? y + buffer * 4 : y - buffer * 4];
              const commonPoints = [[cursorLeaveFromBottom ? rect.left + buffer : isFloatingTaller ? rect.left + buffer : rect.right, rect.top], [cursorLeaveFromBottom ? isFloatingTaller ? rect.left + buffer : rect.right : rect.left + buffer, rect.bottom]];
              return [cursorPointOne, cursorPointTwo, ...commonPoints];
            }
        }
      }
      if (isPointInPolygon([clientX, clientY], rectPoly)) {
        return;
      }
      if (hasLanded && !isOverReferenceRect) {
        return close();
      }
      if (!isLeave && requireIntent) {
        const cursorSpeed = getCursorSpeed(event.clientX, event.clientY);
        const cursorSpeedThreshold = 0.1;
        if (cursorSpeed !== null && cursorSpeed < cursorSpeedThreshold) {
          return close();
        }
      }
      if (!isPointInPolygon([clientX, clientY], getPolygon([x, y]))) {
        close();
      } else if (!hasLanded && requireIntent) {
        timeoutId = window.setTimeout(close, 40);
      }
    };
  };
  fn.__options = {
    blockPointerEvents
  };
  return fn;
}

const getMiddleware = ({
  arrowRef,
  placement
}) => {
  const middleware = [];
  middleware.push(offset(8));
  middleware.push(placement === "auto" ? autoPlacement() : flip());
  middleware.push(shift({ padding: 8 }));
  if (arrowRef?.current) {
    middleware.push(arrow({ element: arrowRef.current }));
  }
  return middleware;
};
const getPlacement = ({ placement }) => {
  return placement === "auto" ? void 0 : placement;
};
const getArrowPlacement = ({ placement }) => {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[placement.split("-")[0]];
};

const useBaseFLoating = ({
  open,
  arrowRef,
  placement = "top",
  setOpen
}) => {
  return useFloating({
    placement: getPlacement({ placement }),
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: getMiddleware({ placement, arrowRef })
  });
};
const useFloatingInteractions = ({
  context,
  trigger,
  role = "tooltip",
  interactions = []
}) => {
  return useInteractions([
    useClick(context, { enabled: trigger === "click" }),
    useHover(context, {
      enabled: trigger === "hover",
      handleClose: safePolygon()
    }),
    useDismiss(context),
    useRole(context, { role }),
    ...interactions
  ]);
};

const Floating = ({
  animation = "duration-300",
  arrow = true,
  children,
  className,
  content,
  placement = "top",
  style = "dark",
  theme,
  trigger = "hover",
  minWidth,
  ...props
}) => {
  const arrowRef = useRef(null);
  const [open, setOpen] = useState(false);
  const floatingProperties = useBaseFLoating({
    open,
    placement,
    arrowRef,
    setOpen
  });
  const {
    context,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
    refs,
    strategy,
    update,
    x,
    y
  } = floatingProperties;
  const focus = useFocus(context);
  const { getFloatingProps, getReferenceProps } = useFloatingInteractions({
    context,
    role: "tooltip",
    trigger,
    interactions: [focus]
  });
  useEffect(() => {
    if (refs.reference.current && refs.floating.current && open) {
      return autoUpdate(refs.reference.current, refs.floating.current, update);
    }
  }, [open, refs.floating, refs.reference, update]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: refs.setReference,
        className: theme.target,
        "data-testid": "flowbite-tooltip-target",
        ...getReferenceProps(),
        children
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ref: refs.setFloating,
        "data-testid": "flowbite-tooltip",
        ...getFloatingProps({
          className: twMerge(
            theme.base,
            animation && `${theme.animation} ${animation}`,
            !open && theme.hidden,
            theme.style[style],
            className
          ),
          style: {
            position: strategy,
            top: y ?? " ",
            left: x ?? " ",
            minWidth
          },
          ...props
        }),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: theme.content, children: content }),
          arrow && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: twMerge(
                theme.arrow.base,
                style === "dark" && theme.arrow.style.dark,
                style === "light" && theme.arrow.style.light,
                style === "auto" && theme.arrow.style.auto
              ),
              "data-testid": "flowbite-tooltip-arrow",
              ref: arrowRef,
              style: {
                top: arrowY ?? " ",
                left: arrowX ?? " ",
                right: " ",
                bottom: " ",
                [getArrowPlacement({ placement: floatingProperties.placement })]: theme.arrow.placement
              },
              children: "\xA0"
            }
          )
        ]
      }
    )
  ] });
};

const Tooltip = ({
  animation = "duration-300",
  arrow = true,
  children,
  className,
  content,
  placement = "top",
  style = "dark",
  theme: customTheme = {},
  trigger = "hover",
  ...props
}) => {
  const theme = mergeDeep(getTheme().tooltip, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Floating,
    {
      animation,
      arrow,
      content,
      placement,
      style,
      theme,
      trigger,
      className,
      ...props,
      children
    }
  );
};
Tooltip.displayName = "Tooltip";

// THIS FILE IS AUTO GENERATED
function FaCheck (props) {
  return GenIcon$1({"tag":"svg","attr":{"viewBox":"0 0 448 512"},"child":[{"tag":"path","attr":{"d":"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"},"child":[]}]})(props);
}function FaClipboardList (props) {
  return GenIcon$1({"tag":"svg","attr":{"viewBox":"0 0 384 512"},"child":[{"tag":"path","attr":{"d":"M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM72 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zM72 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 0c0-8.8 7.2-16 16-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16z"},"child":[]}]})(props);
}function FaQuoteRight (props) {
  return GenIcon$1({"tag":"svg","attr":{"viewBox":"0 0 448 512"},"child":[{"tag":"path","attr":{"d":"M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"},"child":[]}]})(props);
}

const copyToClipboard = (valueToCopy, setIsJustCopied) => {
  setIsJustCopied(true);
  navigator?.clipboard?.writeText(valueToCopy).then(() => {
    console.log("Copy Successfull");
  }).catch((error) => {
    console.error("Failed to Copy text: ", error);
    setIsJustCopied(false);
  });
  setTimeout(() => setIsJustCopied(false), 4e3);
};

const ClipboardWithIcon = forwardRef(
  ({ valueToCopy, icon: Icon = FaClipboardList, theme: customTheme = {}, className, ...rest }, ref) => {
    const [isJustCopied, setIsJustCopied] = useState(false);
    const theme = mergeDeep(getTheme().clipboard.withIcon, customTheme);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: twMerge(theme.base, className),
        onClick: () => copyToClipboard(valueToCopy, setIsJustCopied),
        ...rest,
        ref,
        children: isJustCopied ? /* @__PURE__ */ jsxRuntimeExports.jsx(FaCheck, { "aria-hidden": true, className: theme.icon.successIcon }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { "aria-hidden": true, className: theme.icon.defaultIcon })
      }
    );
  }
);

const ClipboardWithIconText = forwardRef(
  ({ valueToCopy, icon: Icon = FaClipboardList, label = "Copy", theme: customTheme = {}, className, ...rest }, ref) => {
    const [isJustCopied, setIsJustCopied] = useState(false);
    const theme = mergeDeep(getTheme().clipboard.withIconText, customTheme);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: twMerge(theme.base, className),
        onClick: () => copyToClipboard(valueToCopy, setIsJustCopied),
        ...rest,
        ref,
        children: isJustCopied ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: theme.label.base, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FaCheck, { "aria-hidden": true, className: theme.icon.successIcon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: theme.label.successText, children: "Copied" })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: theme.label.base, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { "aria-hidden": true, className: theme.icon.defaultIcon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: theme.label.defaultText, children: label })
        ] })
      }
    );
  }
);

const ClipboardComponent = forwardRef(
  ({ className, valueToCopy, label, theme: customTheme = {}, ...rest }, ref) => {
    const [isJustCopied, setIsJustCopied] = useState(false);
    const theme = mergeDeep(getTheme().clipboard.button, customTheme);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { content: isJustCopied ? "Copied" : "Copy to clipboard", className: "[&_*]:cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: twMerge(theme.base, className),
        onClick: () => copyToClipboard(valueToCopy, setIsJustCopied),
        ...rest,
        ref,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: theme.label, children: label })
      }
    ) });
  }
);
ClipboardComponent.displayName = "Clipboard";
ClipboardWithIcon.displayName = "Clipboard.WithIcon";
ClipboardWithIconText.displayName = "Clipboard.WithIconText";
Object.assign(ClipboardComponent, {
  WithIcon: ClipboardWithIcon,
  WithIconText: ClipboardWithIconText
});

const HelperText = ({
  children,
  className,
  color = "default",
  theme: customTheme = {},
  value,
  ...props
}) => {
  const theme = mergeDeep(getTheme().helperText, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: twMerge(theme.root.base, theme.root.colors[color], className), ...props, children: value ?? children ?? "" });
};
HelperText.displayName = "HelperText";

const TextInput = forwardRef(
  ({
    addon,
    className,
    color = "gray",
    helperText,
    icon: Icon,
    rightIcon: RightIcon,
    shadow,
    sizing = "md",
    theme: customTheme = {},
    type = "text",
    ...props
  }, ref) => {
    const theme = mergeDeep(getTheme().textInput, customTheme);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: twMerge(theme.base, className), children: [
        addon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: theme.addon, children: addon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: theme.field.base, children: [
          Icon && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: theme.field.icon.base, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: theme.field.icon.svg }) }),
          RightIcon && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-testid": "right-icon", className: theme.field.rightIcon.base, children: /* @__PURE__ */ jsxRuntimeExports.jsx(RightIcon, { className: theme.field.rightIcon.svg }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              className: twMerge(
                theme.field.input.base,
                theme.field.input.colors[color],
                theme.field.input.sizes[sizing],
                theme.field.input.withIcon[Icon ? "on" : "off"],
                theme.field.input.withRightIcon[RightIcon ? "on" : "off"],
                theme.field.input.withAddon[addon ? "on" : "off"],
                theme.field.input.withShadow[shadow ? "on" : "off"]
              ),
              type,
              ...props,
              ref
            }
          )
        ] })
      ] }),
      helperText && /* @__PURE__ */ jsxRuntimeExports.jsx(HelperText, { color, children: helperText })
    ] });
  }
);
TextInput.displayName = "TextInput";

const DatepickerContext = createContext(void 0);
function useDatePickerContext() {
  const context = useContext(DatepickerContext);
  if (!context) {
    throw new Error("useDatePickerContext should be used within the DatePickerContext provider!");
  }
  return context;
}

var Views = /* @__PURE__ */ ((Views2) => {
  Views2[Views2["Days"] = 0] = "Days";
  Views2[Views2["Months"] = 1] = "Months";
  Views2[Views2["Years"] = 2] = "Years";
  Views2[Views2["Decades"] = 3] = "Decades";
  return Views2;
})(Views || {});
var WeekStart = /* @__PURE__ */ ((WeekStart2) => {
  WeekStart2[WeekStart2["Sunday"] = 0] = "Sunday";
  WeekStart2[WeekStart2["Monday"] = 1] = "Monday";
  WeekStart2[WeekStart2["Tuesday"] = 2] = "Tuesday";
  WeekStart2[WeekStart2["Wednesday"] = 3] = "Wednesday";
  WeekStart2[WeekStart2["Thursday"] = 4] = "Thursday";
  WeekStart2[WeekStart2["Friday"] = 5] = "Friday";
  WeekStart2[WeekStart2["Saturday"] = 6] = "Saturday";
  return WeekStart2;
})(WeekStart || {});
const isDateInRange = (date, minDate, maxDate) => {
  const dateTime = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
  if (minDate && maxDate) {
    const minDateTime = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate()).getTime();
    const maxDateTime = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate()).getTime();
    return dateTime >= minDateTime && dateTime <= maxDateTime;
  }
  if (minDate) {
    const minDateTime = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate()).getTime();
    return dateTime >= minDateTime;
  }
  if (maxDate) {
    const maxDateTime = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate()).getTime();
    return dateTime <= maxDateTime;
  }
  return true;
};
const isDateEqual = (date, selectedDate) => {
  date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  selectedDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());
  return date.getTime() === selectedDate.getTime();
};
const getFirstDateInRange = (date, minDate, maxDate) => {
  if (!isDateInRange(date, minDate, maxDate)) {
    if (minDate && date < minDate) {
      date = minDate;
    } else if (maxDate && date > maxDate) {
      date = maxDate;
    }
  }
  return date;
};
const getFirstDayOfTheMonth = (date, weekStart) => {
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const dayOfWeek = firstDayOfMonth.getDay();
  let diff = dayOfWeek - weekStart;
  if (diff < 0) {
    diff += 7;
  }
  return addDays(firstDayOfMonth, -diff);
};
const getWeekDays = (lang, weekStart) => {
  const weekdays = [];
  const date = /* @__PURE__ */ new Date(0);
  date.setDate(date.getDate() - date.getDay() + weekStart);
  const formatter = new Intl.DateTimeFormat(lang, { weekday: "short" });
  for (let i = 0; i < 7; i++) {
    weekdays.push(formatter.format(addDays(date, i)));
  }
  return weekdays;
};
const addDays = (date, amount) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + amount);
  return newDate;
};
const addMonths = (date, amount) => {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + amount);
  return newDate;
};
const addYears = (date, amount) => {
  const newDate = new Date(date);
  newDate.setFullYear(newDate.getFullYear() + amount);
  return newDate;
};
const getFormattedDate = (language, date, options) => {
  let defaultOptions = {
    day: "numeric",
    month: "long",
    year: "numeric"
  };
  if (options) {
    defaultOptions = options;
  }
  return new Intl.DateTimeFormat(language, defaultOptions).format(date);
};
const startOfYearPeriod = (date, years) => {
  const year = date.getFullYear();
  return Math.floor(year / years) * years;
};
const isDateInDecade = (date, startYear) => {
  const year = date.getFullYear();
  const endYear = startYear + 9;
  return year >= startYear && year <= endYear;
};

const DatepickerViewsDays = ({ theme: customTheme = {} }) => {
  const {
    theme: rootTheme,
    weekStart,
    minDate,
    maxDate,
    viewDate,
    selectedDate,
    changeSelectedDate,
    language
  } = useDatePickerContext();
  const theme = mergeDeep(rootTheme.views.days, customTheme);
  const weekDays = getWeekDays(language, weekStart);
  const startDate = getFirstDayOfTheMonth(viewDate, weekStart);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: theme.header.base, children: weekDays.map((day, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: theme.header.title, children: day }, index)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: theme.items.base, children: [...Array(42)].map((_date, index) => {
      const currentDate = addDays(startDate, index);
      const day = getFormattedDate(language, currentDate, { day: "numeric" });
      const isSelected = selectedDate && isDateEqual(selectedDate, currentDate);
      const isDisabled = !isDateInRange(currentDate, minDate, maxDate);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          disabled: isDisabled,
          type: "button",
          className: twMerge(
            theme.items.item.base,
            isSelected && theme.items.item.selected,
            isDisabled && theme.items.item.disabled
          ),
          onClick: () => {
            if (isDisabled) return;
            changeSelectedDate(currentDate, true);
          },
          children: day
        },
        index
      );
    }) })
  ] });
};

const DatepickerViewsDecades = ({ theme: customTheme = {} }) => {
  const { theme: rootTheme, viewDate, selectedDate, minDate, maxDate, setViewDate, setView } = useDatePickerContext();
  const theme = mergeDeep(rootTheme.views.decades, customTheme);
  const first = startOfYearPeriod(viewDate, 100);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: theme.items.base, children: [...Array(12)].map((_year, index) => {
    const year = first - 10 + index * 10;
    const newDate = new Date(viewDate.getTime());
    newDate.setFullYear(year + viewDate.getFullYear() % 10);
    const firstDate = new Date(year, 0, 1);
    const lastDate = addYears(firstDate, 9);
    const isSelected = selectedDate && isDateInDecade(selectedDate, year);
    const isDisabled = !isDateInRange(firstDate, minDate, maxDate) && !isDateInRange(lastDate, minDate, maxDate);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        disabled: isDisabled,
        type: "button",
        className: twMerge(
          theme.items.item.base,
          isSelected && theme.items.item.selected,
          isDisabled && theme.items.item.disabled
        ),
        onClick: () => {
          if (isDisabled) return;
          selectedDate && setViewDate(addYears(viewDate, year - selectedDate.getFullYear()));
          setView(Views.Years);
        },
        children: year
      },
      index
    );
  }) });
};

const DatepickerViewsMonth = ({ theme: customTheme = {} }) => {
  const {
    theme: rootTheme,
    minDate,
    maxDate,
    selectedDate,
    viewDate,
    language,
    setViewDate,
    setView
  } = useDatePickerContext();
  const theme = mergeDeep(rootTheme.views.months, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: theme.items.base, children: [...Array(12)].map((_month, index) => {
    const newDate = /* @__PURE__ */ new Date();
    newDate.setMonth(index, 1);
    newDate.setFullYear(viewDate.getFullYear());
    const month = getFormattedDate(language, newDate, { month: "short" });
    const isSelected = selectedDate && isDateEqual(selectedDate, newDate);
    const isDisabled = !isDateInRange(newDate, minDate, maxDate);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        disabled: isDisabled,
        type: "button",
        className: twMerge(
          theme.items.item.base,
          isSelected && theme.items.item.selected,
          isDisabled && theme.items.item.disabled
        ),
        onClick: () => {
          if (isDisabled) return;
          setViewDate(newDate);
          setView(Views.Days);
        },
        children: month
      },
      index
    );
  }) });
};

const DatepickerViewsYears = ({ theme: customTheme = {} }) => {
  const { theme: rootTheme, selectedDate, minDate, maxDate, viewDate, setViewDate, setView } = useDatePickerContext();
  const theme = mergeDeep(rootTheme.views.years, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: theme.items.base, children: [...Array(12)].map((_year, index) => {
    const first = startOfYearPeriod(viewDate, 10);
    const year = first + index;
    const newDate = new Date(viewDate.getTime());
    newDate.setFullYear(year);
    const isSelected = selectedDate && isDateEqual(selectedDate, newDate);
    const isDisabled = !isDateInRange(newDate, minDate, maxDate);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        disabled: isDisabled,
        type: "button",
        className: twMerge(
          theme.items.item.base,
          isSelected && theme.items.item.selected,
          isDisabled && theme.items.item.disabled
        ),
        onClick: () => {
          if (isDisabled) return;
          setViewDate(newDate);
          setView(Views.Months);
        },
        children: year
      },
      index
    );
  }) });
};

const DatepickerRender = ({
  title,
  open,
  inline = false,
  autoHide = true,
  // Hide when selected the day
  showClearButton = true,
  labelClearButton = "Clear",
  showTodayButton = true,
  labelTodayButton = "Today",
  defaultValue,
  minDate,
  maxDate,
  language = "en",
  weekStart = WeekStart.Sunday,
  className,
  theme: customTheme = {},
  onChange,
  label,
  value,
  ...props
}, ref) => {
  const theme = mergeDeep(getTheme().datepicker, customTheme);
  const initialDate = defaultValue ? getFirstDateInRange(defaultValue, minDate, maxDate) : null;
  const effectiveDefaultView = useMemo(() => {
    return defaultValue ? getFirstDateInRange(defaultValue, minDate, maxDate) : /* @__PURE__ */ new Date();
  }, []);
  const [isOpen, setIsOpen] = useState(open);
  const [view, setView] = useState(Views.Days);
  const [selectedDate, setSelectedDate] = useState(value ?? initialDate);
  const [viewDate, setViewDate] = useState(value ?? effectiveDefaultView);
  const inputRef = useRef(null);
  const datepickerRef = useRef(null);
  const changeSelectedDate = (date, useAutohide) => {
    setSelectedDate(date);
    if ((date === null || date) && onChange) {
      onChange(date);
    }
    if (autoHide && view === Views.Days && useAutohide == true && !inline) {
      setIsOpen(false);
    }
  };
  const clearDate = () => {
    changeSelectedDate(initialDate, true);
    if (defaultValue) {
      setViewDate(defaultValue);
    }
  };
  useImperativeHandle(ref, () => ({
    focus() {
      inputRef.current?.focus();
    },
    clear() {
      clearDate();
    }
  }));
  const renderView = (type) => {
    switch (type) {
      case Views.Decades:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(DatepickerViewsDecades, { theme: theme.views.decades });
      case Views.Years:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(DatepickerViewsYears, { theme: theme.views.years });
      case Views.Months:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(DatepickerViewsMonth, { theme: theme.views.months });
      case Views.Days:
      default:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(DatepickerViewsDays, { theme: theme.views.days });
    }
  };
  const getNextView = () => {
    switch (view) {
      case Views.Days:
        return Views.Months;
      case Views.Months:
        return Views.Years;
      case Views.Years:
        return Views.Decades;
    }
    return view;
  };
  const getViewTitle = () => {
    switch (view) {
      case Views.Decades:
        return `${startOfYearPeriod(viewDate, 100) - 10} - ${startOfYearPeriod(viewDate, 100) + 100}`;
      case Views.Years:
        return `${startOfYearPeriod(viewDate, 10)} - ${startOfYearPeriod(viewDate, 10) + 11}`;
      case Views.Months:
        return getFormattedDate(language, viewDate, { year: "numeric" });
      case Views.Days:
      default:
        return getFormattedDate(language, viewDate, { month: "long", year: "numeric" });
    }
  };
  const getViewDatePage = (view2, date, value2) => {
    switch (view2) {
      case Views.Days:
        return new Date(addMonths(date, value2));
      case Views.Months:
        return new Date(addYears(date, value2));
      case Views.Years:
        return new Date(addYears(date, value2 * 10));
      case Views.Decades:
        return new Date(addYears(date, value2 * 100));
      default:
        return new Date(addYears(date, value2 * 10));
    }
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedInsideDatepicker = datepickerRef?.current?.contains(event.target);
      const clickedInsideInput = inputRef?.current?.contains(event.target);
      if (!clickedInsideDatepicker && !clickedInsideInput) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputRef, datepickerRef, setIsOpen]);
  useEffect(() => {
    const effectiveValue = value && getFirstDateInRange(new Date(value), minDate, maxDate);
    const effectiveSelectedDate = selectedDate && getFirstDateInRange(new Date(selectedDate), minDate, maxDate);
    if (effectiveSelectedDate && effectiveValue && !isDateEqual(effectiveValue, effectiveSelectedDate)) {
      setSelectedDate(effectiveValue);
    }
    if (selectedDate == null) {
      setSelectedDate(initialDate);
    }
  }, [value, setSelectedDate, setViewDate, selectedDate]);
  const displayValue = value === null ? label : getFormattedDate(language, selectedDate || /* @__PURE__ */ new Date());
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DatepickerContext.Provider,
    {
      value: {
        theme,
        language,
        minDate,
        maxDate,
        weekStart,
        isOpen,
        setIsOpen,
        view,
        setView,
        viewDate,
        setViewDate,
        selectedDate,
        setSelectedDate,
        changeSelectedDate
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: twMerge(theme.root.base, className), children: [
        !inline && /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextInput,
          {
            theme: theme.root.input,
            icon: HiCalendar,
            ref: inputRef,
            onFocus: () => {
              if (selectedDate && !isDateEqual(viewDate, selectedDate)) {
                setViewDate(selectedDate);
              }
              setIsOpen(true);
            },
            value: displayValue,
            readOnly: true,
            defaultValue: initialDate ? getFormattedDate(language, initialDate) : label,
            ...props
          }
        ),
        (isOpen || inline) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: datepickerRef, className: twMerge(theme.popup.root.base, inline && theme.popup.root.inline), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: theme.popup.root.inner, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: theme.popup.header.base, children: [
            title && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: theme.popup.header.title, children: title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: theme.popup.header.selectors.base, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: twMerge(
                    theme.popup.header.selectors.button.base,
                    theme.popup.header.selectors.button.prev
                  ),
                  onClick: () => setViewDate(getViewDatePage(view, viewDate, -1)),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(HiArrowLeft, {})
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: twMerge(
                    theme.popup.header.selectors.button.base,
                    theme.popup.header.selectors.button.view
                  ),
                  onClick: () => setView(getNextView()),
                  children: getViewTitle()
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: twMerge(
                    theme.popup.header.selectors.button.base,
                    theme.popup.header.selectors.button.next
                  ),
                  onClick: () => setViewDate(getViewDatePage(view, viewDate, 1)),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(HiArrowRight, {})
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: theme.popup.view.base, children: renderView(view) }),
          (showClearButton || showTodayButton) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: theme.popup.footer.base, children: [
            showTodayButton && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: twMerge(theme.popup.footer.button.base, theme.popup.footer.button.today),
                onClick: () => {
                  const today = /* @__PURE__ */ new Date();
                  changeSelectedDate(today, true);
                  setViewDate(today);
                },
                children: labelTodayButton
              }
            ),
            showClearButton && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: twMerge(theme.popup.footer.button.base, theme.popup.footer.button.clear),
                onClick: () => {
                  changeSelectedDate(null, true);
                },
                children: labelClearButton
              }
            )
          ] })
        ] }) })
      ] })
    }
  );
};
const Datepicker = forwardRef(DatepickerRender);
Datepicker.displayName = "Datepicker";

const DrawerContext = createContext(void 0);
function useDrawerContext() {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("useDrawerContext should be used within the DrawerContext provider!");
  }
  return context;
}

// THIS FILE IS AUTO GENERATED
function MdHome (props) {
  return GenIcon$1({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"},"child":[]},{"tag":"path","attr":{"d":"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"},"child":[]}]})(props);
}function MdClose (props) {
  return GenIcon$1({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"},"child":[]},{"tag":"path","attr":{"d":"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"},"child":[]}]})(props);
}

const DrawerHeader = ({
  children,
  className,
  closeIcon: CloseIcon = MdClose,
  theme: customTheme = {},
  title,
  titleIcon: TitleIcon = MdHome,
  ...props
}) => {
  const id = useId$1();
  const { id: mainDivId, isOpen, onClose, theme: rootTheme } = useDrawerContext();
  const theme = mergeDeep(rootTheme.header, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className, ...props, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h5", { className: theme.inner.titleText, id: mainDivId, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TitleIcon, { "aria-hidden": true, className: theme.inner.titleIcon }),
      title
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onClose, "data-testid": "close-drawer", className: theme.inner.closeButton, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CloseIcon, { "aria-hidden": true, className: theme.inner.closeIcon }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close menu" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: theme.collapsed[isOpen ? "on" : "off"], id: `flowbite-drawer-header-${id}`, children })
  ] });
};
DrawerHeader.displayName = "Drawer.Header";

const DrawerItems = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme } = useDrawerContext();
  const theme = mergeDeep(rootTheme.items, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-testid": "flowbite-drawer-items", className: twMerge(theme.base, className), ...props, children });
};
DrawerItems.displayName = "Drawer.Items";

const DrawerComponent = ({
  backdrop = true,
  children,
  className,
  edge = false,
  position = "left",
  onClose,
  open: isOpen = false,
  theme: customTheme = {},
  ...props
}) => {
  const id = useId$1();
  const theme = mergeDeep(getTheme().drawer, customTheme);
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape" && isOpen && onClose) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [onClose, isOpen]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DrawerContext.Provider, { value: { theme, onClose, isOpen, id }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-modal": true,
        "aria-describedby": `drawer-dialog-${id}`,
        role: "dialog",
        tabIndex: -1,
        "data-testid": "flowbite-drawer",
        className: twMerge(
          theme.root.base,
          theme.root.position[position][isOpen ? "on" : "off"],
          edge && !isOpen && theme.root.edge,
          className
        ),
        ...props,
        children
      }
    ),
    isOpen && backdrop && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: () => onClose(), className: theme.root.backdrop })
  ] });
};
DrawerComponent.displayName = "Drawer";
Object.assign(DrawerComponent, {
  Header: DrawerHeader,
  Items: DrawerItems
});

const DropdownContext = createContext(void 0);
function useDropdownContext() {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("useDropdownContext should be used within the DropdownContext provider!");
  }
  return context;
}

const DropdownDivider = ({ className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme } = useDropdownContext();
  const theme = customTheme.divider ?? rootTheme.floating.divider;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: twMerge(theme, className), ...props });
};

const DropdownHeader = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme } = useDropdownContext();
  const theme = customTheme.header ?? rootTheme.floating.header;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: twMerge(theme, className), ...props, children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownDivider, {})
  ] });
};

const DropdownItem = forwardRef(
  ({ children, className, icon: Icon, onClick, theme: customTheme = {}, ...props }, forwardedRef) => {
    const { ref: listItemRef, index } = useListItem({ label: typeof children === "string" ? children : void 0 });
    const ref = useMergeRefs([forwardedRef, listItemRef]);
    const { theme: rootTheme, activeIndex, dismissOnClick, getItemProps, handleSelect } = useDropdownContext();
    const isActive = activeIndex === index;
    const theme = mergeDeep(rootTheme.floating.item, customTheme);
    const theirProps = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { role: "menuitem", className: theme.container, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      ButtonBase,
      {
        ref,
        className: twMerge(theme.base, className),
        ...theirProps,
        ...getItemProps({
          onClick: () => {
            onClick?.();
            dismissOnClick && handleSelect(null);
          }
        }),
        tabIndex: isActive ? 0 : -1,
        children: [
          Icon && /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: theme.icon }),
          children
        ]
      }
    ) });
  }
);
DropdownItem.displayName = "DropdownItem";

const icons = {
  top: HiOutlineChevronUp,
  right: HiOutlineChevronRight,
  bottom: HiOutlineChevronDown,
  left: HiOutlineChevronLeft
};
const Trigger = ({
  refs,
  children,
  inline,
  theme,
  disabled,
  setButtonWidth,
  getReferenceProps,
  renderTrigger,
  ...buttonProps
}) => {
  const ref = refs.reference;
  const a11yProps = getReferenceProps();
  useEffect(() => {
    if (ref.current) {
      setButtonWidth?.(ref.current.clientWidth);
    }
  }, [ref, setButtonWidth]);
  if (renderTrigger) {
    const triggerElement = renderTrigger(theme);
    return cloneElement(triggerElement, { ref: refs.setReference, disabled, ...a11yProps, ...triggerElement.props });
  }
  return inline ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", ref: refs.setReference, className: theme?.inlineWrapper, disabled, ...a11yProps, children }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { ...buttonProps, disabled, type: "button", ref: refs.setReference, ...a11yProps, children });
};
const DropdownComponent = ({
  children,
  className,
  dismissOnClick = true,
  theme: customTheme = {},
  enableTypeAhead = true,
  renderTrigger,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [buttonWidth, setButtonWidth] = useState(void 0);
  const elementsRef = useRef([]);
  const labelsRef = useRef([]);
  const theme = mergeDeep(getTheme().dropdown, customTheme);
  const theirProps = props;
  const dataTestId = props["data-testid"] || "flowbite-dropdown-target";
  const {
    placement = props.inline ? "bottom-start" : "bottom",
    trigger = "click",
    label,
    inline,
    arrowIcon = true,
    ...buttonProps
  } = theirProps;
  const handleSelect = useCallback((index) => {
    setSelectedIndex(index);
    setOpen(false);
  }, []);
  const handleTypeaheadMatch = useCallback(
    (index) => {
      if (open) {
        setActiveIndex(index);
      } else {
        handleSelect(index);
      }
    },
    [open, handleSelect]
  );
  const { context, floatingStyles, refs } = useBaseFLoating({
    open,
    setOpen,
    placement
  });
  const listNav = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    selectedIndex,
    onNavigate: setActiveIndex
  });
  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    activeIndex,
    selectedIndex,
    onMatch: handleTypeaheadMatch,
    enabled: enableTypeAhead
  });
  const { getReferenceProps, getFloatingProps, getItemProps } = useFloatingInteractions({
    context,
    role: "menu",
    trigger,
    interactions: [listNav, typeahead]
  });
  const Icon = useMemo(() => {
    const [p] = placement.split("-");
    return icons[p] ?? HiOutlineChevronDown;
  }, [placement]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownContext.Provider, { value: { theme, activeIndex, dismissOnClick, getItemProps, handleSelect }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Trigger,
      {
        ...buttonProps,
        refs,
        inline,
        theme,
        "data-testid": dataTestId,
        className: twMerge(theme.floating.target, buttonProps.className),
        setButtonWidth,
        getReferenceProps,
        renderTrigger,
        children: [
          label,
          arrowIcon && /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: theme.arrowIcon })
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingFocusManager, { context, modal: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: refs.setFloating,
        style: { ...floatingStyles, minWidth: buttonWidth },
        "data-testid": "flowbite-dropdown",
        "aria-expanded": open,
        ...getFloatingProps({
          className: twMerge(
            theme.floating.base,
            theme.floating.animation,
            "duration-100",
            !open && theme.floating.hidden,
            theme.floating.style.auto,
            className
          )
        }),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingList, { elementsRef, labelsRef, children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: theme.content, tabIndex: -1, children }) })
      }
    ) })
  ] });
};
DropdownComponent.displayName = "Dropdown";
DropdownHeader.displayName = "Dropdown.Header";
DropdownDivider.displayName = "Dropdown.Divider";
const Dropdown = Object.assign(DropdownComponent, {
  Item: DropdownItem,
  Header: DropdownHeader,
  Divider: DropdownDivider
});

const FileInput = forwardRef(
  ({ className, color = "gray", helperText, sizing = "md", theme: customTheme = {}, ...props }, ref) => {
    const theme = mergeDeep(getTheme().fileInput, customTheme);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: twMerge(theme.root.base, className), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: theme.field.base, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          className: twMerge(
            theme.field.input.base,
            theme.field.input.colors[color],
            theme.field.input.sizes[sizing]
          ),
          ...props,
          type: "file",
          ref
        }
      ) }) }),
      helperText && /* @__PURE__ */ jsxRuntimeExports.jsx(HelperText, { color, children: helperText })
    ] });
  }
);
FileInput.displayName = "FileInput";

const FloatingLabel = forwardRef(
  ({
    label,
    helperText,
    color = "default",
    sizing = "md",
    variant,
    disabled = false,
    theme: customTheme = {},
    className,
    ...props
  }, ref) => {
    const randomId = useId$1();
    const theme = mergeDeep(getTheme().floatingLabel, customTheme);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: twMerge("relative", variant === "standard" ? "z-0" : ""), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            id: props.id ? props.id : "floatingLabel" + randomId,
            "aria-describedby": "outlined_success_help",
            className: twMerge(theme.input[color][variant][sizing], className),
            placeholder: " ",
            "data-testid": "floating-label",
            disabled,
            ...props,
            ref
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "label",
          {
            htmlFor: props.id ? props.id : "floatingLabel" + randomId,
            className: twMerge(theme.label[color][variant][sizing], className),
            children: label
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { id: "outlined_helper_text" + randomId, className: twMerge(theme.helperText[color], className), children: helperText })
    ] });
  }
);
FloatingLabel.displayName = "FloatingLabel";

const FooterBrand = ({
  alt,
  className,
  children,
  href,
  name,
  src,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().footer.brand, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: href ? /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { "data-testid": "flowbite-footer-brand", href, className: twMerge(theme.base, className), ...props, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { alt, src, className: theme.img }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-testid": "flowbite-footer-brand-span", className: theme.span, children: name }),
    children
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      alt,
      "data-testid": "flowbite-footer-brand",
      src,
      className: twMerge(theme.img, className),
      ...props
    }
  ) });
};

const FooterCopyright = ({
  by,
  className,
  href,
  theme: customTheme = {},
  year,
  ...props
}) => {
  const theme = mergeDeep(getTheme().footer.copyright, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-testid": "flowbite-footer-copyright", className: twMerge(theme.base, className), ...props, children: [
    "\xA9 ",
    year,
    href ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, className: theme.href, children: by }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-testid": "flowbite-footer-copyright-span", className: theme.span, children: by })
  ] });
};

const FooterDivider = ({ className, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().footer.divider, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { "data-testid": "footer-divider", className: twMerge(theme.base, className), ...props });
};

const FooterIcon = ({
  ariaLabel,
  className,
  href,
  icon: Icon,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().footer.icon, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: href ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      "aria-label": ariaLabel,
      "data-testid": "flowbite-footer-icon",
      href,
      className: twMerge(theme.base, className),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: theme.size })
    }
  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { "data-testid": "flowbite-footer-icon", className: theme.size, ...props }) });
};

const FooterLink = ({
  as: Component = "a",
  children,
  className,
  href,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().footer.groupLink.link, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: twMerge(theme.base, className), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Component, { href, className: theme.href, ...props, children }) });
};

const FooterLinkGroup = ({
  children,
  className,
  col = false,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().footer.groupLink, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { "data-testid": "footer-groupLink", className: twMerge(theme.base, col && theme.col, className), ...props, children });
};

const FooterTitle = ({
  as: Component = "h2",
  className,
  theme: customTheme = {},
  title,
  ...props
}) => {
  const theme = mergeDeep(getTheme().footer.title, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, { "data-testid": "flowbite-footer-title", className: twMerge(theme.base, className), ...props, children: title });
};

const FooterComponent = ({
  bgDark = false,
  children,
  className,
  container = false,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().footer, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "footer",
    {
      "data-testid": "flowbite-footer",
      className: twMerge(theme.root.base, bgDark && theme.root.bgDark, container && theme.root.container, className),
      ...props,
      children
    }
  );
};
FooterComponent.displayName = "Footer";
FooterCopyright.displayName = "Footer.Copyright";
FooterLink.displayName = "Footer.Link";
FooterBrand.displayName = "Footer.Brand";
FooterLinkGroup.displayName = "Footer.LinkGroup";
FooterIcon.displayName = "Footer.Icon";
FooterTitle.displayName = "Footer.Title";
FooterDivider.displayName = "Footer.Divider";
Object.assign(FooterComponent, {
  Copyright: FooterCopyright,
  Link: FooterLink,
  LinkGroup: FooterLinkGroup,
  Brand: FooterBrand,
  Icon: FooterIcon,
  Title: FooterTitle,
  Divider: FooterDivider
});

const HRIcon = forwardRef(
  ({ theme: customTheme = {}, icon: Icon = FaQuoteRight, className, ...props }, ref) => {
    const theme = mergeDeep(getTheme().hr.icon, customTheme);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: theme.base, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "hr",
        {
          className: twMerge(theme.hrLine, className),
          role: "separator",
          "data-testid": "flowbite-hr-icon",
          ref,
          ...props
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: theme.icon.base, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { "aria-hidden": true, className: theme.icon.icon }) })
    ] });
  }
);

const HRSquare = forwardRef(
  ({ theme: customTheme = {}, className, ...props }, ref) => {
    const theme = mergeDeep(getTheme().hr.square, customTheme);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "hr",
      {
        className: twMerge(theme.base, className),
        role: "separator",
        "data-testid": "flowbite-hr-square",
        ref,
        ...props
      }
    );
  }
);

const HRText = forwardRef(
  ({ theme: customTheme = {}, text, className, ...props }, ref) => {
    const theme = mergeDeep(getTheme().hr.text, customTheme);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: theme.base, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "hr",
        {
          className: twMerge(theme.hrLine, className),
          "data-testid": "flowbite-hr-text",
          role: "separator",
          ref,
          ...props
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: theme.text, children: text })
    ] });
  }
);

const HRTrimmed = forwardRef(
  ({ theme: customTheme = {}, className, ...props }, ref) => {
    const theme = mergeDeep(getTheme().hr.trimmed, customTheme);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "hr",
      {
        className: twMerge(theme.base, className),
        role: "separator",
        "data-testid": "flowbite-hr-trimmed",
        ref,
        ...props
      }
    );
  }
);

const HRComponent = forwardRef(({ theme: customTheme = {}, className, ...props }, ref) => {
  const theme = mergeDeep(getTheme().hr.root, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: twMerge(theme.base, className), role: "separator", "data-testid": "flowbite-hr", ref, ...props });
});
HRComponent.displayName = "HR";
HRTrimmed.displayName = "HR.Trimmed";
HRIcon.displayName = "HR.Icon";
HRText.displayName = "HR.Text";
HRSquare.displayName = "HR.Square";
Object.assign(HRComponent, {
  Trimmed: HRTrimmed,
  Icon: HRIcon,
  Text: HRText,
  Square: HRSquare
});

const ListItem$1 = ({ children, className, icon: Icon, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().list.item, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: twMerge(theme.withIcon[Icon ? "on" : "off"], className), ...props, children: [
    Icon && /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: twMerge(theme.icon) }),
    children
  ] });
};

const ListComponent = ({
  children,
  className,
  unstyled,
  nested,
  ordered,
  horizontal,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().list, customTheme);
  const Component = ordered ? "ol" : "ul";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Component,
    {
      className: twMerge(
        theme.root.base,
        theme.root.ordered[ordered ? "on" : "off"],
        unstyled && theme.root.unstyled,
        nested && theme.root.nested,
        horizontal && theme.root.horizontal,
        className
      ),
      ...props,
      children
    }
  );
};
ListComponent.displayName = "List";
ListItem$1.displayName = "List.Item";
Object.assign(ListComponent, { Item: ListItem$1 });

const ListGroupItem = ({
  active: isActive,
  children,
  className,
  href,
  icon: Icon,
  onClick,
  theme: customTheme = {},
  disabled,
  ...props
}) => {
  const theme = mergeDeep(getTheme().listGroup.item, customTheme);
  const isLink = typeof href !== "undefined";
  const Component = isLink ? "a" : "button";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: twMerge(theme.base, className), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Component,
    {
      href,
      onClick,
      type: isLink ? void 0 : "button",
      disabled,
      className: twMerge(
        theme.link.active[isActive ? "on" : "off"],
        theme.link.disabled[disabled ? "on" : "off"],
        theme.link.base,
        theme.link.href[isLink ? "on" : "off"]
      ),
      ...props,
      children: [
        Icon && /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { "aria-hidden": true, "data-testid": "flowbite-list-group-item-icon", className: theme.link.icon }),
        children
      ]
    }
  ) });
};

const ListGroupComponent = ({ children, className, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().listGroup, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: twMerge(theme.root.base, className), ...props, children });
};
ListGroupComponent.displayName = "ListGroup";
ListGroupItem.displayName = "ListGroup.Item";
Object.assign(ListGroupComponent, {
  Item: ListGroupItem
});

const NavbarContext = createContext(void 0);
function useNavbarContext() {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavBarContext should be used within the NavbarContext provider!");
  }
  return context;
}

const NavbarBrand = ({
  as: Component = "a",
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { theme: rootTheme } = useNavbarContext();
  const theme = mergeDeep(rootTheme.brand, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, { className: twMerge(theme.base, className), ...props, children });
};

const NavbarCollapse = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme, isOpen } = useNavbarContext();
  const theme = mergeDeep(rootTheme.collapse, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-testid": "flowbite-navbar-collapse",
      className: twMerge(theme.base, theme.hidden[!isOpen ? "on" : "off"], className),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: theme.list, children })
    }
  );
};

const NavbarLink = ({
  active,
  as: Component = "a",
  disabled,
  children,
  className,
  theme: customTheme = {},
  onClick,
  ...props
}) => {
  const { theme: rootTheme, setIsOpen } = useNavbarContext();
  const theme = mergeDeep(rootTheme.link, customTheme);
  const handleClick = (event) => {
    setIsOpen(false);
    onClick?.(event);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Component,
    {
      className: twMerge(
        theme.base,
        active && theme.active.on,
        !active && !disabled && theme.active.off,
        theme.disabled[disabled ? "on" : "off"],
        className
      ),
      onClick: handleClick,
      ...props,
      children
    }
  ) });
};

// THIS FILE IS AUTO GENERATED
function FaBars (props) {
  return GenIcon$1({"tag":"svg","attr":{"viewBox":"0 0 448 512"},"child":[{"tag":"path","attr":{"d":"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},"child":[]}]})(props);
}

const NavbarToggle = ({
  barIcon: BarIcon = FaBars,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { theme: rootTheme, isOpen, setIsOpen } = useNavbarContext();
  const theme = mergeDeep(rootTheme.toggle, customTheme);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      "data-testid": "flowbite-navbar-toggle",
      onClick: handleClick,
      className: twMerge(theme.base, className),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Open main menu" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(BarIcon, { "aria-hidden": true, className: theme.icon })
      ]
    }
  );
};

const NavbarComponent = ({
  border,
  children,
  className,
  fluid = false,
  menuOpen,
  rounded,
  theme: customTheme = {},
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(menuOpen);
  const theme = mergeDeep(getTheme().navbar, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(NavbarContext.Provider, { value: { theme, isOpen, setIsOpen }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "nav",
    {
      className: twMerge(
        theme.root.base,
        theme.root.bordered[border ? "on" : "off"],
        theme.root.rounded[rounded ? "on" : "off"],
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: twMerge(theme.root.inner.base, theme.root.inner.fluid[fluid ? "on" : "off"]), children })
    }
  ) });
};
NavbarComponent.displayName = "Navbar";
NavbarBrand.displayName = "Navbar.Brand";
NavbarCollapse.displayName = "Navbar.Collapse";
NavbarLink.displayName = "Navbar.Link";
NavbarToggle.displayName = "Navbar.Toggle";
const Navbar = Object.assign(NavbarComponent, {
  Brand: NavbarBrand,
  Collapse: NavbarCollapse,
  Link: NavbarLink,
  Toggle: NavbarToggle
});

const MegaMenuDropdown = ({
  children,
  className,
  theme: customTheme = {},
  toggle,
  ...props
}) => {
  const [labelledBy, setLabelledBy] = useState(void 0);
  const theme = mergeDeep(getTheme().megaMenu.dropdown, customTheme);
  if (toggle) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dropdown,
      {
        inline: true,
        label: toggle,
        placement: "bottom",
        theme: theme.toggle,
        className: twMerge(theme.base, className),
        children
      }
    );
  }
  const id = useId$1();
  const ref = useRef(null);
  useEffect(() => {
    const findToggle = function() {
      const megaMenu = ref.current?.closest("nav");
      return megaMenu?.querySelector('[aria-haspopup="menu"]');
    };
    setLabelledBy(findToggle()?.id);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "aria-labelledby": labelledBy,
      id,
      ref,
      role: "menu",
      className: twMerge(theme.base, className),
      ...props,
      children
    }
  );
};
MegaMenuDropdown.displayName = "MegaMenu.Dropdown";

const MegaMenuDropdownToggle = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const id = useId$1();
  const ref = useRef(null);
  const [controls, setControls] = useState(void 0);
  const [isExpanded, setExpanded] = useState(void 0);
  const theme = mergeDeep(getTheme().megaMenu.dropdownToggle, customTheme);
  const findDropdown = function() {
    const megaMenu = ref.current?.closest("nav");
    return megaMenu?.querySelector('[role="menu"]');
  };
  const onClick = function() {
    findDropdown()?.classList.toggle("hidden");
    setExpanded(!isExpanded);
  };
  useEffect(() => {
    const dropdown = findDropdown();
    const isDropdownHidden = dropdown?.classList.contains("hidden");
    setControls(dropdown?.id);
    setExpanded(!isDropdownHidden);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      "aria-controls": controls,
      "aria-expanded": isExpanded,
      "aria-haspopup": "menu",
      id,
      onClick,
      ref,
      className: twMerge(theme.base, className),
      ...props,
      children
    }
  );
};
MegaMenuDropdownToggle.displayName = "MegaMenu.DropdownToggle";

const MegaMenuComponent = ({ children, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().megaMenu, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, { fluid: true, theme, ...props, children });
};
Object.assign(MegaMenuComponent, {
  Dropdown: MegaMenuDropdown,
  DropdownToggle: MegaMenuDropdownToggle
});
MegaMenuComponent.displayName = "MegaMenu";

const ModalContext = createContext(void 0);
function useModalContext() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext should be used within the ModalContext provider!");
  }
  return context;
}

const ModalBody = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme, popup } = useModalContext();
  const theme = mergeDeep(rootTheme.body, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: twMerge(theme.base, popup && [theme.popup], className), ...props, children });
};

const ModalFooter = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme, popup } = useModalContext();
  const theme = mergeDeep(rootTheme.footer, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: twMerge(theme.base, !popup && theme.popup, className), ...props, children });
};

const ModalHeader = ({
  as: Component = "h3",
  children,
  className,
  theme: customTheme = {},
  id,
  ...props
}) => {
  const innerHeaderId = useId$1();
  const headerId = id || innerHeaderId;
  const { theme: rootTheme, popup, onClose, setHeaderId } = useModalContext();
  const theme = mergeDeep(rootTheme.header, customTheme);
  useLayoutEffect(() => {
    setHeaderId(headerId);
    return () => setHeaderId(void 0);
  }, [headerId, setHeaderId]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: twMerge(theme.base, popup && theme.popup, className), ...props, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Component, { id: headerId, className: theme.title, children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "aria-label": "Close", className: theme.close.base, type: "button", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsx(HiOutlineX, { "aria-hidden": true, className: theme.close.icon }) })
  ] });
};

const ModalComponent = forwardRef(
  ({
    children,
    className,
    dismissible = false,
    onClose,
    popup,
    position = "center",
    root,
    show,
    size = "2xl",
    theme: customTheme = {},
    initialFocus,
    ...props
  }, theirRef) => {
    const [headerId, setHeaderId] = useState(void 0);
    const theme = mergeDeep(getTheme().modal, customTheme);
    const { context } = useFloating({
      open: show,
      onOpenChange: () => onClose && onClose()
    });
    const ref = useMergeRefs([context.refs.setFloating, theirRef]);
    const click = useClick(context);
    const dismiss = useDismiss(context, { outsidePressEvent: "mousedown", enabled: dismissible });
    const role = useRole(context);
    const { getFloatingProps } = useInteractions([click, dismiss, role]);
    if (!show) {
      return null;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ModalContext.Provider, { value: { theme, popup, onClose, setHeaderId }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingPortal, { root, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      FloatingOverlay,
      {
        lockScroll: true,
        "data-testid": "modal-overlay",
        className: twMerge(
          theme.root.base,
          theme.root.positions[position],
          show ? theme.root.show.on : theme.root.show.off,
          className
        ),
        ...props,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingFocusManager, { context, initialFocus, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            ref,
            ...getFloatingProps(props),
            "aria-labelledby": headerId,
            className: twMerge(theme.content.base, theme.root.sizes[size]),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: theme.content.inner, children })
          }
        ) })
      }
    ) }) });
  }
);
ModalComponent.displayName = "Modal";
ModalHeader.displayName = "Modal.Header";
ModalBody.displayName = "Modal.Body";
ModalFooter.displayName = "Modal.Footer";
Object.assign(ModalComponent, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter
});

const range = (start, end) => {
  if (start >= end) {
    return [];
  }
  return [...Array(end - start + 1).keys()].map((key) => key + start);
};

const PaginationButton = ({
  active,
  children,
  className,
  onClick,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().pagination, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      className: twMerge(active && theme.pages.selector.active, className),
      onClick,
      ...props,
      children
    }
  );
};
PaginationButton.displayName = "Pagination.Button";
const PaginationNavigation = ({
  children,
  className,
  onClick,
  theme: customTheme = {},
  disabled = false,
  ...props
}) => {
  const theme = mergeDeep(getTheme().pagination, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      className: twMerge(disabled && theme.pages.selector.disabled, className),
      disabled,
      onClick,
      ...props,
      children
    }
  );
};
PaginationNavigation.displayName = "Pagination.Navigation";

const PaginationComponent = ({
  className,
  currentPage,
  layout = "pagination",
  nextLabel = "Next",
  onPageChange,
  previousLabel = "Previous",
  renderPaginationButton = (props2) => /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationButton, { ...props2 }),
  showIcons: showIcon = false,
  theme: customTheme = {},
  totalPages,
  ...props
}) => {
  const theme = mergeDeep(getTheme().pagination, customTheme);
  const lastPage = Math.min(Math.max(layout === "pagination" ? currentPage + 2 : currentPage + 4, 5), totalPages);
  const firstPage = Math.max(1, lastPage - 4);
  const goToNextPage = () => {
    onPageChange(Math.min(currentPage + 1, totalPages));
  };
  const goToPreviousPage = () => {
    onPageChange(Math.max(currentPage - 1, 1));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: twMerge(theme.base, className), ...props, children: [
    layout === "table" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: theme.layout.table.base, children: [
      "Showing ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: theme.layout.table.span, children: firstPage }),
      " to\xA0",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: theme.layout.table.span, children: lastPage }),
      " of\xA0",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: theme.layout.table.span, children: totalPages }),
      " Entries"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: theme.pages.base, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        PaginationNavigation,
        {
          className: twMerge(theme.pages.previous.base, showIcon && theme.pages.showIcon),
          onClick: goToPreviousPage,
          disabled: currentPage === 1,
          children: [
            showIcon && /* @__PURE__ */ jsxRuntimeExports.jsx(HiChevronLeft, { "aria-hidden": true, className: theme.pages.previous.icon }),
            previousLabel
          ]
        }
      ) }),
      layout === "pagination" && range(firstPage, lastPage).map((page) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { "aria-current": page === currentPage ? "page" : void 0, children: renderPaginationButton({
        className: twMerge(theme.pages.selector.base, currentPage === page && theme.pages.selector.active),
        active: page === currentPage,
        onClick: () => onPageChange(page),
        children: page
      }) }, page)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        PaginationNavigation,
        {
          className: twMerge(theme.pages.next.base, showIcon && theme.pages.showIcon),
          onClick: goToNextPage,
          disabled: currentPage === totalPages,
          children: [
            nextLabel,
            showIcon && /* @__PURE__ */ jsxRuntimeExports.jsx(HiChevronRight, { "aria-hidden": true, className: theme.pages.next.icon })
          ]
        }
      ) })
    ] })
  ] });
};
PaginationComponent.displayName = "Pagination";
Object.assign(PaginationComponent, {
  Button: PaginationButton
});

const Radio = forwardRef(
  ({ className, theme: customTheme = {}, ...props }, ref) => {
    const theme = mergeDeep(getTheme().radio, customTheme);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref, type: "radio", className: twMerge(theme.root.base, className), ...props });
  }
);
Radio.displayName = "Radio";

const RangeSlider = forwardRef(
  ({ className, sizing = "md", theme: customTheme = {}, ...props }, ref) => {
    const theme = mergeDeep(getTheme().rangeSlider, customTheme);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-testid": "flowbite-range-slider", className: twMerge(theme.root.base, className), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: theme.field.base, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        ref,
        type: "range",
        className: twMerge(theme.field.input.base, theme.field.input.sizes[sizing]),
        ...props
      }
    ) }) }) });
  }
);
RangeSlider.displayName = "RangeSlider";

const RatingAdvanced = ({
  children,
  className,
  percentFilled = 0,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().ratingAdvanced, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: twMerge(theme.base, className), ...props, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: theme.label, children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: theme.progress.base, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: theme.progress.fill,
        "data-testid": "flowbite-rating-fill",
        style: { width: `${percentFilled}%` }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: theme.progress.label, children: `${percentFilled}%` })
  ] });
};

const RatingContext = createContext(void 0);
function useRatingContext() {
  const context = useContext(RatingContext);
  if (!context) {
    throw new Error("useRatingContext should be used within the RatingContext provider!");
  }
  return context;
}

const RatingStar = ({
  className,
  filled = true,
  starIcon: Icon = HiStar,
  theme: customTheme = {},
  ...props
}) => {
  const { theme: rootTheme, size = "sm" } = useRatingContext();
  const theme = mergeDeep(rootTheme.star, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Icon,
    {
      "data-testid": "flowbite-rating-star",
      className: twMerge(theme.sizes[size], theme[filled ? "filled" : "empty"], className),
      ...props
    }
  );
};

const RatingComponent = ({ children, className, size = "sm", theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().rating, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RatingContext.Provider, { value: { theme, size }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: twMerge(theme.root.base, className), ...props, children }) });
};
RatingComponent.displayName = "Rating";
RatingStar.displayName = "Rating.Star";
RatingAdvanced.displayName = "Rating.Advanced";
Object.assign(RatingComponent, {
  Star: RatingStar,
  Advanced: RatingAdvanced
});

const Select = forwardRef(
  ({
    addon,
    children,
    className,
    color = "gray",
    helperText,
    icon: Icon,
    shadow,
    sizing = "md",
    theme: customTheme = {},
    ...props
  }, ref) => {
    const theme = mergeDeep(getTheme().select, customTheme);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: twMerge(theme.base, className), children: [
      addon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: theme.addon, children: addon }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: theme.field.base, children: [
        Icon && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: theme.field.icon.base, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: theme.field.icon.svg }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "select",
          {
            className: twMerge(
              theme.field.select.base,
              theme.field.select.colors[color],
              theme.field.select.sizes[sizing],
              theme.field.select.withIcon[Icon ? "on" : "off"],
              theme.field.select.withAddon[addon ? "on" : "off"],
              theme.field.select.withShadow[shadow ? "on" : "off"]
            ),
            ...props,
            ref,
            children
          }
        ),
        helperText && /* @__PURE__ */ jsxRuntimeExports.jsx(HelperText, { color, children: helperText })
      ] })
    ] });
  }
);
Select.displayName = "Select";

const SidebarContext = createContext(void 0);
function useSidebarContext() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebarContext should be used within the SidebarContext provider!");
  }
  return context;
}

const SidebarItemContext = createContext(void 0);
function useSidebarItemContext() {
  const context = useContext(SidebarItemContext);
  if (!context) {
    throw new Error("useSidebarItemContext should be used within the SidebarItemContext provider!");
  }
  return context;
}

const SidebarCollapse = ({
  children,
  className,
  icon: Icon,
  label,
  chevronIcon: ChevronIcon = HiChevronDown,
  renderChevronIcon,
  open = false,
  theme: customTheme = {},
  ...props
}) => {
  const id = useId$1();
  const [isOpen, setOpen] = useState(open);
  const { theme: rootTheme, isCollapsed } = useSidebarContext();
  const theme = mergeDeep(rootTheme.collapse, customTheme);
  useEffect(() => setOpen(open), [open]);
  const Wrapper = ({ children: children2 }) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: isCollapsed && !isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { content: label, placement: "right", children: children2 }) : children2 });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Wrapper, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        id: `flowbite-sidebar-collapse-${id}`,
        onClick: () => setOpen(!isOpen),
        title: label,
        type: "button",
        className: twMerge(theme.button, className),
        ...props,
        children: [
          Icon && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Icon,
            {
              "aria-hidden": true,
              "data-testid": "flowbite-sidebar-collapse-icon",
              className: twMerge(theme.icon.base, theme.icon.open[isOpen ? "on" : "off"])
            }
          ),
          isCollapsed ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: label }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-testid": "flowbite-sidebar-collapse-label", className: theme.label.base, children: label }),
            renderChevronIcon ? renderChevronIcon(theme, isOpen) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              ChevronIcon,
              {
                "aria-hidden": true,
                className: twMerge(theme.label.icon.base, theme.label.icon.open[isOpen ? "on" : "off"])
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { "aria-labelledby": `flowbite-sidebar-collapse-${id}`, hidden: !isOpen, className: theme.list, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarItemContext.Provider, { value: { isInsideCollapse: true }, children }) })
  ] });
};
SidebarCollapse.displayName = "Sidebar.Collapse";

const SidebarCTA = ({
  children,
  color = "info",
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { theme: rootTheme, isCollapsed } = useSidebarContext();
  const theme = mergeDeep(rootTheme.cta, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-testid": "sidebar-cta",
      hidden: isCollapsed,
      className: twMerge(theme.base, theme.color[color], className),
      ...props,
      children
    }
  );
};
SidebarCTA.displayName = "Sidebar.CTA";

const ListItem = ({ id, theme, isCollapsed, tooltipChildren, children: wrapperChildren, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { ...props, children: isCollapsed ? /* @__PURE__ */ jsxRuntimeExports.jsx(
  Tooltip,
  {
    content: /* @__PURE__ */ jsxRuntimeExports.jsx(Children, { id, theme, children: tooltipChildren }),
    placement: "right",
    children: wrapperChildren
  }
) : wrapperChildren });
const Children = ({ id, theme, children }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      "data-testid": "flowbite-sidebar-item-content",
      id: `flowbite-sidebar-item-${id}`,
      className: twMerge(theme.content.base),
      children
    }
  );
};
const SidebarItem = forwardRef(
  ({
    active: isActive,
    as: Component = "a",
    children,
    className,
    icon: Icon,
    label,
    labelColor = "info",
    theme: customTheme = {},
    ...props
  }, ref) => {
    const id = useId$1();
    const { theme: rootTheme, isCollapsed } = useSidebarContext();
    const { isInsideCollapse } = useSidebarItemContext();
    const theme = mergeDeep(rootTheme.item, customTheme);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ListItem, { theme, className: theme.listItem, id, isCollapsed, tooltipChildren: children, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Component,
      {
        "aria-labelledby": `flowbite-sidebar-item-${id}`,
        ref,
        className: twMerge(
          theme.base,
          isActive && theme.active,
          !isCollapsed && isInsideCollapse && theme.collapsed?.insideCollapse,
          className
        ),
        ...props,
        children: [
          Icon && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Icon,
            {
              "aria-hidden": true,
              "data-testid": "flowbite-sidebar-item-icon",
              className: twMerge(theme.icon?.base, isActive && theme.icon?.active)
            }
          ),
          isCollapsed && !Icon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: theme.collapsed?.noIcon, children: children.charAt(0).toLocaleUpperCase() ?? "?" }),
          !isCollapsed && /* @__PURE__ */ jsxRuntimeExports.jsx(Children, { id, theme, children }),
          !isCollapsed && label && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { color: labelColor, "data-testid": "flowbite-sidebar-label", hidden: isCollapsed, className: theme.label, children: label })
        ]
      }
    ) });
  }
);
SidebarItem.displayName = "Sidebar.Item";

const SidebarItemGroup = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { theme: rootTheme } = useSidebarContext();
  const theme = mergeDeep(rootTheme.itemGroup, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { "data-testid": "flowbite-sidebar-item-group", className: twMerge(theme.base, className), ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarItemContext.Provider, { value: { isInsideCollapse: false }, children }) });
};
SidebarItemGroup.displayName = "Sidebar.ItemGroup";

const SidebarItems = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme } = useSidebarContext();
  const theme = mergeDeep(rootTheme.items, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: twMerge(theme.base, className), "data-testid": "flowbite-sidebar-items", ...props, children });
};
SidebarItems.displayName = "Sidebar.Items";

const SidebarLogo = ({
  children,
  className,
  href,
  img,
  imgAlt = "",
  theme: customTheme = {},
  ...props
}) => {
  const id = useId$1();
  const { theme: rootTheme, isCollapsed } = useSidebarContext();
  const theme = mergeDeep(rootTheme.logo, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      "aria-labelledby": `flowbite-sidebar-logo-${id}`,
      href,
      className: twMerge(theme.base, className),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { alt: imgAlt, src: img, className: theme.img }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: theme.collapsed[isCollapsed ? "on" : "off"], id: `flowbite-sidebar-logo-${id}`, children })
      ]
    }
  );
};
SidebarLogo.displayName = "Sidebar.Logo";

const SidebarComponent = ({
  children,
  as: Component = "nav",
  collapseBehavior = "collapse",
  collapsed: isCollapsed = false,
  theme: customTheme = {},
  className,
  ...props
}) => {
  const theme = mergeDeep(getTheme().sidebar, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarContext.Provider, { value: { theme, isCollapsed }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Component,
    {
      "aria-label": "Sidebar",
      hidden: isCollapsed && collapseBehavior === "hide",
      className: twMerge(theme.root.base, theme.root.collapsed[isCollapsed ? "on" : "off"], className),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: theme.root.inner, children })
    }
  ) });
};
SidebarComponent.displayName = "Sidebar";
Object.assign(SidebarComponent, {
  Collapse: SidebarCollapse,
  CTA: SidebarCTA,
  Item: SidebarItem,
  Items: SidebarItems,
  ItemGroup: SidebarItemGroup,
  Logo: SidebarLogo
});

const TableBodyContext = createContext(void 0);
function useTableBodyContext() {
  const context = useContext(TableBodyContext);
  if (!context) {
    throw new Error("useTableBodyContext should be used within the TableBodyContext provider!");
  }
  return context;
}

const TableContext = createContext(void 0);
function useTableContext() {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error("useTableContext should be used within the TableContext provider!");
  }
  return context;
}

const TableBody = forwardRef(
  ({ children, className, theme: customTheme = {}, ...props }, ref) => {
    const { theme: rootTheme } = useTableContext();
    const theme = mergeDeep(rootTheme.body, customTheme);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(TableBodyContext.Provider, { value: { theme }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: twMerge(theme.base, className), ref, ...props, children }) });
  }
);
TableBody.displayName = "Table.Body";

const TableCell = forwardRef(
  ({ children, className, theme: customTheme = {}, ...props }, ref) => {
    const { theme: bodyTheme } = useTableBodyContext();
    const theme = mergeDeep(bodyTheme.cell, customTheme);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: twMerge(theme.base, className), ref, ...props, children });
  }
);
TableCell.displayName = "Table.Cell";

const TableHeadContext = createContext(void 0);
function useTableHeadContext() {
  const context = useContext(TableHeadContext);
  if (!context) {
    throw new Error("useTableHeadContext should be used within the TableHeadContext provider!");
  }
  return context;
}

const TableHead = forwardRef(
  ({ children, className, theme: customTheme = {}, ...props }, ref) => {
    const { theme: rootTheme } = useTableContext();
    const theme = mergeDeep(rootTheme.head, customTheme);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeadContext.Provider, { value: { theme }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: twMerge(theme.base, className), ref, ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children }) }) });
  }
);
TableHead.displayName = "Table.Head";

const TableHeadCell = forwardRef(
  ({ children, className, theme: customTheme = {}, ...props }, ref) => {
    const { theme: headTheme } = useTableHeadContext();
    const theme = mergeDeep(headTheme.cell, customTheme);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: twMerge(theme.base, className), ref, ...props, children });
  }
);
TableHeadCell.displayName = "Table.HeadCell";

const TableRow = forwardRef(
  ({ children, className, theme: customTheme = {}, ...props }, ref) => {
    const { theme: rootTheme, hoverable, striped } = useTableContext();
    const theme = mergeDeep(rootTheme.row, customTheme);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "tr",
      {
        ref,
        "data-testid": "table-row-element",
        className: twMerge(theme.base, striped && theme.striped, hoverable && theme.hovered, className),
        ...props,
        children
      }
    );
  }
);
TableRow.displayName = "Table.Row";

const TableComponent = forwardRef(
  ({ children, className, striped, hoverable, theme: customTheme = {}, ...props }, ref) => {
    const theme = mergeDeep(getTheme().table, customTheme);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-testid": "table-element", className: twMerge(theme.root.wrapper), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableContext.Provider, { value: { theme, striped, hoverable }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: twMerge(theme.root.shadow, className) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("table", { className: twMerge(theme.root.base, className), ...props, ref, children })
    ] }) });
  }
);
TableComponent.displayName = "Table";
Object.assign(TableComponent, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
  HeadCell: TableHeadCell
});

const TabItem = ({ children, className }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className, children });
TabItem.displayName = "Tabs.Item";

const TabsComponent = forwardRef(
  ({ children, className, onActiveTabChange, variant = "default", theme: customTheme = {}, ...props }, ref) => {
    const theme = mergeDeep(getTheme().tabs, customTheme);
    const id = useId$1();
    const tabs = useMemo(
      () => Children$1.map(
        Children$1.toArray(children),
        ({ props: props2 }) => props2
      ),
      [children]
    );
    const tabRefs = useRef([]);
    const [activeTab, setActiveTab] = useState(
      Math.max(
        0,
        tabs.findIndex((tab) => tab.active)
      )
    );
    const [focusedTab, setFocusedTab] = useState(-1);
    const setActiveTabWithCallback = (activeTab2) => {
      setActiveTab(activeTab2);
      if (onActiveTabChange) onActiveTabChange(activeTab2);
    };
    const handleClick = ({ target }) => {
      setActiveTabWithCallback(target);
      setFocusedTab(target);
    };
    const handleKeyboard = ({ event, target }) => {
      if (event.key === "ArrowLeft") {
        setFocusedTab(Math.max(0, focusedTab - 1));
      }
      if (event.key === "ArrowRight") {
        setFocusedTab(Math.min(tabs.length - 1, focusedTab + 1));
      }
      if (event.key === "Enter") {
        setActiveTabWithCallback(target);
        setFocusedTab(target);
      }
    };
    const tabItemStyle = theme.tablist.tabitem.variant[variant];
    const tabItemContainerStyle = theme.tabitemcontainer.variant[variant];
    useEffect(() => {
      tabRefs.current[focusedTab]?.focus();
    }, [focusedTab]);
    useImperativeHandle(ref, () => ({
      setActiveTab: setActiveTabWithCallback
    }));
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: twMerge(theme.base, className), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "aria-label": "Tabs",
          role: "tablist",
          className: twMerge(theme.tablist.base, theme.tablist.variant[variant], className),
          ...props,
          children: tabs.map((tab, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "aria-controls": `${id}-tabpanel-${index}`,
              "aria-selected": index === activeTab,
              className: twMerge(
                theme.tablist.tabitem.base,
                tabItemStyle.base,
                index === activeTab && tabItemStyle.active.on,
                index !== activeTab && !tab.disabled && tabItemStyle.active.off
              ),
              disabled: tab.disabled,
              id: `${id}-tab-${index}`,
              onClick: () => handleClick({ target: index }),
              onKeyDown: (event) => handleKeyboard({ event, target: index }),
              ref: (element) => tabRefs.current[index] = element,
              role: "tab",
              tabIndex: index === focusedTab ? 0 : -1,
              style: { zIndex: index === focusedTab ? 2 : 1 },
              children: [
                tab.icon && /* @__PURE__ */ jsxRuntimeExports.jsx(tab.icon, { className: theme.tablist.tabitem.icon }),
                tab.title
              ]
            },
            index
          ))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: twMerge(theme.tabitemcontainer.base, tabItemContainerStyle), children: tabs.map((tab, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "aria-labelledby": `${id}-tab-${index}`,
          className: theme.tabpanel,
          hidden: index !== activeTab,
          id: `${id}-tabpanel-${index}`,
          role: "tabpanel",
          tabIndex: 0,
          children: tab.children
        },
        index
      )) })
    ] });
  }
);
TabsComponent.displayName = "Tabs";
Object.assign(TabsComponent, {
  Item: TabItem
});

const Textarea = forwardRef(
  ({ className, color = "gray", helperText, shadow, theme: customTheme = {}, ...props }, ref) => {
    const theme = mergeDeep(getTheme().textarea, customTheme);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          ref,
          className: twMerge(theme.base, theme.colors[color], theme.withShadow[shadow ? "on" : "off"], className),
          ...props
        }
      ),
      helperText && /* @__PURE__ */ jsxRuntimeExports.jsx(HelperText, { color, children: helperText })
    ] });
  }
);
Textarea.displayName = "Textarea";

const TimelineContentContext = createContext(void 0);
function useTimelineContentContext() {
  const context = useContext(TimelineContentContext);
  if (!context) {
    throw new Error("useTimelineContentContext should be used within the TimelineContentContext provider!");
  }
  return context;
}

const TimelineBody = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: contentTheme } = useTimelineContentContext();
  const theme = mergeDeep(contentTheme.body, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: twMerge(theme.base, className), ...props, children });
};

const TimelineContext = createContext(void 0);
function useTimelineContext() {
  const context = useContext(TimelineContext);
  if (!context) {
    throw new Error("useTimelineContext should be used within the TimelineContext provider!");
  }
  return context;
}

const TimelineItemContext = createContext(void 0);
function useTimelineItemContext() {
  const context = useContext(TimelineItemContext);
  if (!context) {
    throw new Error("useTimelineItemContext should be used within the TimelineItemContext provider!");
  }
  return context;
}

const TimelineContent = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { horizontal } = useTimelineContext();
  const { theme: itemTheme } = useTimelineItemContext();
  const theme = mergeDeep(itemTheme.content, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineContentContext.Provider, { value: { theme }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-testid": "timeline-content",
      className: twMerge(theme.root.base, horizontal ? theme.root.horizontal : theme.root.vertical, className),
      ...props,
      children
    }
  ) });
};

const TimelineItem = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme, horizontal } = useTimelineContext();
  const theme = mergeDeep(rootTheme.item, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineItemContext.Provider, { value: { theme }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "li",
    {
      "data-testid": "timeline-item",
      className: twMerge(horizontal && theme.root.horizontal, !horizontal && theme.root.vertical, className),
      ...props,
      children
    }
  ) });
};

const TimelinePoint = ({
  children,
  className,
  icon: Icon,
  theme: customTheme = {},
  ...props
}) => {
  const { horizontal } = useTimelineContext();
  const { theme: itemTheme } = useTimelineItemContext();
  const theme = mergeDeep(itemTheme.point, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-testid": "timeline-point",
      className: twMerge(horizontal && theme.horizontal, !horizontal && theme.vertical, className),
      ...props,
      children: [
        children,
        Icon ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: twMerge(theme.marker.icon.wrapper), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { "aria-hidden": true, className: twMerge(theme.marker.icon.base) }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: twMerge(horizontal && theme.marker.base.horizontal, !horizontal && theme.marker.base.vertical)
          }
        ),
        horizontal && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: twMerge(theme.line) })
      ]
    }
  );
};

const TimelineTime = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: contentTheme } = useTimelineContentContext();
  const theme = mergeDeep(contentTheme.time, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("time", { className: twMerge(theme.base, className), ...props, children });
};

const TimelineTitle = ({
  as: Tag = "h3",
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { theme: contentTheme } = useTimelineContentContext();
  const theme = mergeDeep(contentTheme.title, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: twMerge(theme.base, className), ...props, children });
};

const TimelineComponent = ({
  children,
  className,
  horizontal,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().timeline, customTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineContext.Provider, { value: { theme, horizontal }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "ol",
    {
      "data-testid": "timeline-component",
      className: twMerge(
        horizontal && theme.root.direction.horizontal,
        !horizontal && theme.root.direction.vertical,
        className
      ),
      ...props,
      children
    }
  ) });
};
TimelineComponent.displayName = "Timeline";
TimelineItem.displayName = "Timeline.Item";
TimelinePoint.displayName = "Timeline.Point";
TimelineContent.displayName = "Timeline.Content";
TimelineTime.displayName = "Timeline.Time";
TimelineTitle.displayName = "Timeline.Title";
TimelineBody.displayName = "Timeline.Body";
Object.assign(TimelineComponent, {
  Item: TimelineItem,
  Point: TimelinePoint,
  Content: TimelineContent,
  Time: TimelineTime,
  Title: TimelineTitle,
  Body: TimelineBody
});

const ToastContext = createContext(void 0);
function useToastContext() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToastContext should be used within the ToastContext provider!");
  }
  return context;
}

const ToastToggle = ({
  className,
  onClick,
  theme: customTheme = {},
  xIcon: XIcon = HiX,
  onDismiss,
  ...props
}) => {
  const { theme: rootTheme, duration, isClosed, isRemoved, setIsClosed, setIsRemoved } = useToastContext();
  const theme = mergeDeep(rootTheme.toggle, customTheme);
  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (onDismiss) {
      onDismiss();
      return;
    }
    setIsClosed(!isClosed);
    setTimeout(() => setIsRemoved(!isRemoved), duration);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      "aria-label": "Close",
      onClick: handleClick,
      type: "button",
      className: twMerge(theme.base, className),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(XIcon, { "aria-hidden": true, className: theme.icon })
    }
  );
};

const durationClasses = {
  75: "duration-75",
  100: "duration-100",
  150: "duration-150",
  200: "duration-200",
  300: "duration-300",
  500: "duration-500",
  700: "duration-700",
  1e3: "duration-1000"
};
const ToastComponent = ({ children, className, duration = 300, theme: customTheme = {}, ...props }) => {
  const [isClosed, setIsClosed] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);
  const theme = mergeDeep(getTheme().toast, customTheme);
  if (isRemoved) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ToastContext.Provider, { value: { theme, duration, isClosed, isRemoved, setIsClosed, setIsRemoved }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-testid": "flowbite-toast",
      role: "alert",
      className: twMerge(theme.root.base, durationClasses[duration], isClosed && theme.root.closed, className),
      ...props,
      children
    }
  ) });
};
ToastComponent.displayName = "Toast";
ToastToggle.displayName = "Toast.Toggle";
Object.assign(ToastComponent, {
  Toggle: ToastToggle
});

const ToggleSwitch = forwardRef(
  ({
    checked,
    className,
    color = "blue",
    sizing = "md",
    disabled,
    label,
    name,
    onChange,
    theme: customTheme = {},
    ...props
  }, ref) => {
    const id = useId$1();
    const theme = mergeDeep(getTheme().toggleSwitch, customTheme);
    const toggle = () => onChange(!checked);
    const handleClick = () => {
      toggle();
    };
    const handleOnKeyDown = (event) => {
      if (event.code == "Enter") {
        event.preventDefault();
      }
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      name && checked ? /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref, checked, hidden: true, name, readOnly: true, type: "checkbox", className: "sr-only" }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          "aria-checked": checked,
          "aria-labelledby": `${id}-flowbite-toggleswitch-label`,
          disabled,
          id: `${id}-flowbite-toggleswitch`,
          onClick: handleClick,
          onKeyDown: handleOnKeyDown,
          role: "switch",
          tabIndex: 0,
          type: "button",
          className: twMerge(theme.root.base, theme.root.active[disabled ? "off" : "on"], className),
          ...props,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                "data-testid": "flowbite-toggleswitch-toggle",
                className: twMerge(
                  theme.toggle.base,
                  theme.toggle.checked[checked ? "on" : "off"],
                  checked && theme.toggle.checked.color[color],
                  theme.toggle.sizes[sizing]
                )
              }
            ),
            label?.length ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                "data-testid": "flowbite-toggleswitch-label",
                id: `${id}-flowbite-toggleswitch-label`,
                className: theme.root.label,
                children: label
              }
            ) : null
          ]
        }
      )
    ] });
  }
);
ToggleSwitch.displayName = "ToggleSwitch";

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = React__default.createContext && /*#__PURE__*/React__default.createContext(DefaultContext);

var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /*#__PURE__*/React__default.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return props => /*#__PURE__*/React__default.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = conf => {
    var {
        attr,
        size,
        title
      } = props,
      svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return /*#__PURE__*/React__default.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /*#__PURE__*/React__default.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? /*#__PURE__*/React__default.createElement(IconContext.Consumer, null, conf => elem(conf)) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function HiOutlinePencilAlt (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"},"child":[]}]})(props);
}

var elevance = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACP0AAAPSCAYAAAAK5D3HAAAACXBIWXMAAC4jAAAuIwF4pT92AAAHDGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuYTZhNjM5NjhhLCAyMDI0LzAzLzA2LTExOjUyOjA1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjUuMTIgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDI0LTA5LTExVDE1OjUwOjUxKzA1OjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wOS0yNFQxNzozMTowNSswNTozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNC0wOS0yNFQxNzozMTowNSswNTozMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDYzYzNjOTMtMGUzZC00OWRmLWE5ZmYtODdkNjc3MGUyMmZhIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MjRlZTBiN2UtOGIxMC05NTQyLWE4YzctZGE1YzA4NzRkMmUwIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6OGRmZWZhZDMtMTM4YS00YTEzLTg3NzUtYTlhNjBjNTlkMzRmIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo4ZGZlZmFkMy0xMzhhLTRhMTMtODc3NS1hOWE2MGM1OWQzNGYiIHN0RXZ0OndoZW49IjIwMjQtMDktMTFUMTU6NTA6NTErMDU6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNS4xMiAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDozNTEzMjVhMy1iOGMxLTQyZTEtOTk4Mi0xMWVjNmZjZTFiNmYiIHN0RXZ0OndoZW49IjIwMjQtMDktMjNUMTU6MDY6MDArMDU6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNS4xMiAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MDYzYzNjOTMtMGUzZC00OWRmLWE5ZmYtODdkNjc3MGUyMmZhIiBzdEV2dDp3aGVuPSIyMDI0LTA5LTI0VDE3OjMxOjA1KzA1OjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjUuMTIgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rv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";

/**
 * WARNING: Don't import this directly. It's imported by the code generated by
 * `@mui/interal-babel-plugin-minify-errors`. Make sure to always use string literals in `Error`
 * constructors to ensure the plugin works as expected. Supported patterns include:
 *   throw new Error('My message');
 *   throw new Error(`My message: ${foo}`);
 *   throw new Error(`My message: ${foo}` + 'another string');
 *   ...
 * @param {number} code
 */
function formatMuiErrorMessage(code, ...args) {
  const url = new URL(`https://mui.com/production-error/?code=${code}`);
  args.forEach(arg => url.searchParams.append('args[]', arg));
  return `Minified MUI error #${code}; visit ${url} for the full message.`;
}

var THEME_ID = '$$material';

function memoize$1(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var isDevelopment$1 = false;

/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/

function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  } // this function should always return with a value
  // TS can't understand it though so we make it stop complaining here


  return undefined;
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}

var StyleSheet = /*#__PURE__*/function () {
  // Using Node instead of HTMLElement since container may be a ShadowRoot
  function StyleSheet(options) {
    var _this = this;

    this._insertTag = function (tag) {
      var before;

      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }

      _this.container.insertBefore(tag, before);

      _this.tags.push(tag);
    };

    this.isSpeedy = options.speedy === undefined ? !isDevelopment$1 : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    this.tags.forEach(function (tag) {
      var _tag$parentNode;

      return (_tag$parentNode = tag.parentNode) == null ? void 0 : _tag$parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();

var MS = '-ms-';
var MOZ = '-moz-';
var WEBKIT = '-webkit-';

var COMMENT = 'comm';
var RULESET = 'rule';
var DECLARATION = 'decl';
var IMPORT = '@import';
var KEYFRAMES = '@keyframes';
var LAYER = '@layer';

/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs;

/**
 * @param {number}
 * @return {string}
 */
var from = String.fromCharCode;

/**
 * @param {object}
 * @return {object}
 */
var assign = Object.assign;

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function hash (value, length) {
	return charat(value, 0) ^ 45 ? (((((((length << 2) ^ charat(value, 0)) << 2) ^ charat(value, 1)) << 2) ^ charat(value, 2)) << 2) ^ charat(value, 3) : 0
}

/**
 * @param {string} value
 * @return {string}
 */
function trim (value) {
	return value.trim()
}

/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */
function match (value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function replace (value, pattern, replacement) {
	return value.replace(pattern, replacement)
}

/**
 * @param {string} value
 * @param {string} search
 * @return {number}
 */
function indexof (value, search) {
	return value.indexOf(search)
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function charat (value, index) {
	return value.charCodeAt(index) | 0
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function substr (value, begin, end) {
	return value.slice(begin, end)
}

/**
 * @param {string} value
 * @return {number}
 */
function strlen (value) {
	return value.length
}

/**
 * @param {any[]} value
 * @return {number}
 */
function sizeof (value) {
	return value.length
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function append (value, array) {
	return array.push(value), value
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function combine (array, callback) {
	return array.map(callback).join('')
}

var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = '';

/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {number} length
 */
function node (value, root, parent, type, props, children, length) {
	return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: ''}
}

/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */
function copy (root, props) {
	return assign(node('', null, null, '', null, null, 0), root, {length: -root.length}, props)
}

/**
 * @return {number}
 */
function char () {
	return character
}

/**
 * @return {number}
 */
function prev () {
	character = position > 0 ? charat(characters, --position) : 0;

	if (column--, character === 10)
		column = 1, line--;

	return character
}

/**
 * @return {number}
 */
function next () {
	character = position < length ? charat(characters, position++) : 0;

	if (column++, character === 10)
		column = 1, line++;

	return character
}

/**
 * @return {number}
 */
function peek () {
	return charat(characters, position)
}

/**
 * @return {number}
 */
function caret () {
	return position
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice (begin, end) {
	return substr(characters, begin, end)
}

/**
 * @param {number} type
 * @return {number}
 */
function token (type) {
	switch (type) {
		// \0 \t \n \r \s whitespace token
		case 0: case 9: case 10: case 13: case 32:
			return 5
		// ! + , / > @ ~ isolate token
		case 33: case 43: case 44: case 47: case 62: case 64: case 126:
		// ; { } breakpoint token
		case 59: case 123: case 125:
			return 4
		// : accompanied token
		case 58:
			return 3
		// " ' ( [ opening delimit token
		case 34: case 39: case 40: case 91:
			return 2
		// ) ] closing delimit token
		case 41: case 93:
			return 1
	}

	return 0
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc (value) {
	return line = column = 1, length = strlen(characters = value), position = 0, []
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc (value) {
	return characters = '', value
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit (type) {
	return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace (type) {
	while (character = peek())
		if (character < 33)
			next();
		else
			break

	return token(type) > 2 || token(character) > 3 ? '' : ' '
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping (index, count) {
	while (--count && next())
		// not 0-9 A-F a-f
		if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
			break

	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32))
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter (type) {
	while (next())
		switch (character) {
			// ] ) " '
			case type:
				return position
			// " '
			case 34: case 39:
				if (type !== 34 && type !== 39)
					delimiter(character);
				break
			// (
			case 40:
				if (type === 41)
					delimiter(type);
				break
			// \
			case 92:
				next();
				break
		}

	return position
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter (type, index) {
	while (next())
		// //
		if (type + character === 47 + 10)
			break
		// /*
		else if (type + character === 42 + 42 && peek() === 47)
			break

	return '/*' + slice(index, position - 1) + '*' + from(type === 47 ? type : next())
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier (index) {
	while (!token(peek()))
		next();

	return slice(index, position)
}

/**
 * @param {string} value
 * @return {object[]}
 */
function compile (value) {
	return dealloc(parse('', null, null, null, [''], value = alloc(value), 0, [0], value))
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0;
	var offset = 0;
	var length = pseudo;
	var atrule = 0;
	var property = 0;
	var previous = 0;
	var variable = 1;
	var scanning = 1;
	var ampersand = 1;
	var character = 0;
	var type = '';
	var props = rules;
	var children = rulesets;
	var reference = rule;
	var characters = type;

	while (scanning)
		switch (previous = character, character = next()) {
			// (
			case 40:
				if (previous != 108 && charat(characters, length - 1) == 58) {
					if (indexof(characters += replace(delimit(character), '&', '&\f'), '&\f') != -1)
						ampersand = -1;
					break
				}
			// " ' [
			case 34: case 39: case 91:
				characters += delimit(character);
				break
			// \t \n \r \s
			case 9: case 10: case 13: case 32:
				characters += whitespace(previous);
				break
			// \
			case 92:
				characters += escaping(caret() - 1, 7);
				continue
			// /
			case 47:
				switch (peek()) {
					case 42: case 47:
						append(comment(commenter(next(), caret()), root, parent), declarations);
						break
					default:
						characters += '/';
				}
				break
			// {
			case 123 * variable:
				points[index++] = strlen(characters) * ampersand;
			// } ; \0
			case 125 * variable: case 59: case 0:
				switch (character) {
					// \0 }
					case 0: case 125: scanning = 0;
					// ;
					case 59 + offset: if (ampersand == -1) characters = replace(characters, /\f/g, '');
						if (property > 0 && (strlen(characters) - length))
							append(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration(replace(characters, ' ', '') + ';', rule, parent, length - 2), declarations);
						break
					// @ ;
					case 59: characters += ';';
					// { rule/at-rule
					default:
						append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets);

						if (character === 123)
							if (offset === 0)
								parse(characters, root, reference, reference, props, rulesets, length, points, children);
							else
								switch (atrule === 99 && charat(characters, 3) === 110 ? 100 : atrule) {
									// d l m s
									case 100: case 108: case 109: case 115:
										parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children);
										break
									default:
										parse(characters, reference, reference, reference, [''], children, 0, points, children);
								}
				}

				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
				break
			// :
			case 58:
				length = 1 + strlen(characters), property = previous;
			default:
				if (variable < 1)
					if (character == 123)
						--variable;
					else if (character == 125 && variable++ == 0 && prev() == 125)
						continue

				switch (characters += from(character), character * variable) {
					// &
					case 38:
						ampersand = offset > 0 ? 1 : (characters += '\f', -1);
						break
					// ,
					case 44:
						points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
						break
					// @
					case 64:
						// -
						if (peek() === 45)
							characters += delimit(next());

						atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), character++;
						break
					// -
					case 45:
						if (previous === 45 && strlen(characters) == 2)
							variable = 0;
				}
		}

	return rulesets
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @return {object}
 */
function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length) {
	var post = offset - 1;
	var rule = offset === 0 ? rules : [''];
	var size = sizeof(rule);

	for (var i = 0, j = 0, k = 0; i < index; ++i)
		for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
			if (z = trim(j > 0 ? rule[x] + ' ' + y : replace(y, /&\f/g, rule[x])))
				props[k++] = z;

	return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length)
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @return {object}
 */
function comment (value, root, parent) {
	return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0)
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @return {object}
 */
function declaration (value, root, parent, length) {
	return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length)
}

/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function serialize (children, callback) {
	var output = '';
	var length = sizeof(children);

	for (var i = 0; i < length; i++)
		output += callback(children[i], i, children, callback) || '';

	return output
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify (element, index, children, callback) {
	switch (element.type) {
		case LAYER: if (element.children.length) break
		case IMPORT: case DECLARATION: return element.return = element.return || element.value
		case COMMENT: return ''
		case KEYFRAMES: return element.return = element.value + '{' + serialize(element.children, callback) + '}'
		case RULESET: element.value = element.props.join(',');
	}

	return strlen(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
}

/**
 * @param {function[]} collection
 * @return {function}
 */
function middleware (collection) {
	var length = sizeof(collection);

	return function (element, index, children, callback) {
		var output = '';

		for (var i = 0; i < length; i++)
			output += collection[i](element, index, children, callback) || '';

		return output
	}
}

/**
 * @param {function} callback
 * @return {function}
 */
function rulesheet (callback) {
	return function (element) {
		if (!element.root)
			if (element = element.return)
				callback(element);
	}
}

var weakMemoize = function weakMemoize(func) {
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // Use non-null assertion because we just checked that the cache `has` it
      // This allows us to remove `undefined` from the return value
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

var isBrowser$2 = typeof document !== 'undefined';

var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
  var previous = 0;
  var character = 0;

  while (true) {
    previous = character;
    character = peek(); // &\f

    if (previous === 38 && character === 12) {
      points[index] = 1;
    }

    if (token(character)) {
      break;
    }

    next();
  }

  return slice(begin, position);
};

var toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;

  do {
    switch (token(character)) {
      case 0:
        // &\f
        if (character === 38 && peek() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }

        parsed[index] += identifierWithPointTracking(position - 1, points, index);
        break;

      case 2:
        parsed[index] += delimit(character);
        break;

      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = peek() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += from(character);
    }
  } while (character = next());

  return parsed;
};

var getRules = function getRules(value, points) {
  return dealloc(toRules(alloc(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


var fixedElements = /* #__PURE__ */new WeakMap();
var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }

  var value = element.value,
      parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;

  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case


  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  /* colon */
  && !fixedElements.get(parent)) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


  if (isImplicitRule) {
    return;
  }

  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;

  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;

    if ( // charcode for l
    value.charCodeAt(0) === 108 && // charcode for b
    value.charCodeAt(2) === 98) {
      // this ignores label
      element["return"] = '';
      element.value = '';
    }
  }
};

/* eslint-disable no-fallthrough */

function prefix(value, length) {
  switch (hash(value, length)) {
    // color-adjust
    case 5103:
      return WEBKIT + 'print-' + value + value;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)

    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921: // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break

    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005: // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,

    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855: // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)

    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    // appearance, user-select, transform, hyphens, text-size-adjust

    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    // flex, flex-direction

    case 6828:
    case 4268:
      return WEBKIT + value + MS + value + value;
    // order

    case 6165:
      return WEBKIT + value + MS + 'flex-' + value + value;
    // align-items

    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + 'box-$1$2' + MS + 'flex-$1$2') + value;
    // align-self

    case 5443:
      return WEBKIT + value + MS + 'flex-item-' + replace(value, /flex-|-self/, '') + value;
    // align-content

    case 4675:
      return WEBKIT + value + MS + 'flex-line-pack' + replace(value, /align-content|flex-|-self/, '') + value;
    // flex-shrink

    case 5548:
      return WEBKIT + value + MS + replace(value, 'shrink', 'negative') + value;
    // flex-basis

    case 5292:
      return WEBKIT + value + MS + replace(value, 'basis', 'preferred-size') + value;
    // flex-grow

    case 6060:
      return WEBKIT + 'box-' + replace(value, '-grow', '') + WEBKIT + value + MS + replace(value, 'grow', 'positive') + value;
    // transition

    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, '$1' + WEBKIT + '$2') + value;
    // cursor

    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + '$1'), /(image-set)/, WEBKIT + '$1'), value, '') + value;
    // background, background-image

    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + '$1' + '$`$1');
    // justify-content

    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + 'box-pack:$3' + MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + WEBKIT + value + value;
    // (margin|padding)-inline-(start|end)

    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + '$1$2') + value;
    // (min|max)?(width|height|inline-size|block-size)

    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      // stretch, max-content, min-content, fill-available
      if (strlen(value) - 1 - length > 6) switch (charat(value, length + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          // -
          if (charat(value, length + 4) !== 45) break;
        // (f)ill-available, (f)it-content

        case 102:
          return replace(value, /(.+:)(.+)-([^]+)/, '$1' + WEBKIT + '$2-$3' + '$1' + MOZ + (charat(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
        // (s)tretch

        case 115:
          return ~indexof(value, 'stretch') ? prefix(replace(value, 'stretch', 'fill-available'), length) + value : value;
      }
      break;
    // position: sticky

    case 4949:
      // (s)ticky?
      if (charat(value, length + 1) !== 115) break;
    // display: (flex|inline-flex)

    case 6444:
      switch (charat(value, strlen(value) - 3 - (~indexof(value, '!important') && 10))) {
        // stic(k)y
        case 107:
          return replace(value, ':', ':' + WEBKIT) + value;
        // (inline-)?fl(e)x

        case 101:
          return replace(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + WEBKIT + (charat(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + WEBKIT + '$2$3' + '$1' + MS + '$2box$3') + value;
      }

      break;
    // writing-mode

    case 5936:
      switch (charat(value, length + 11)) {
        // vertical-l(r)
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
        // vertical-r(l)

        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
        // horizontal(-)tb

        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
      }

      return WEBKIT + value + MS + value + value;
  }

  return value;
}

var prefixer = function prefixer(element, index, children, callback) {
  if (element.length > -1) if (!element["return"]) switch (element.type) {
    case DECLARATION:
      element["return"] = prefix(element.value, element.length);
      break;

    case KEYFRAMES:
      return serialize([copy(element, {
        value: replace(element.value, '@', '@' + WEBKIT)
      })], callback);

    case RULESET:
      if (element.length) return combine(element.props, function (value) {
        switch (match(value, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ':read-only':
          case ':read-write':
            return serialize([copy(element, {
              props: [replace(value, /:(read-\w+)/, ':' + MOZ + '$1')]
            })], callback);
          // :placeholder

          case '::placeholder':
            return serialize([copy(element, {
              props: [replace(value, /:(plac\w+)/, ':' + WEBKIT + 'input-$1')]
            }), copy(element, {
              props: [replace(value, /:(plac\w+)/, ':' + MOZ + '$1')]
            }), copy(element, {
              props: [replace(value, /:(plac\w+)/, MS + 'input-$1')]
            })], callback);
        }

        return '';
      });
  }
};

/* import type { StylisPlugin } from './types' */

/*
export type Options = {
  nonce?: string,
  stylisPlugins?: StylisPlugin[],
  key: string,
  container?: HTMLElement,
  speedy?: boolean,
  prepend?: boolean,
  insertionPoint?: HTMLElement
}
*/

var getServerStylisCache = isBrowser$2 ? undefined : weakMemoize(function () {
  return memoize$1(function () {
    var cache = {};
    return function (name) {
      return cache[name];
    };
  });
});
var defaultStylisPlugins = [prefixer];

var createCache = function
  /*: EmotionCache */
createCache(options
/*: Options */
) {
  var key = options.key;

  if (isBrowser$2 && key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
    // note this very very intentionally targets all style elements regardless of the key to ensure
    // that creating a cache works inside of render of a React component

    Array.prototype.forEach.call(ssrStyles, function (node
    /*: HTMLStyleElement */
    ) {
      // we want to only move elements which have a space in the data-emotion attribute value
      // because that indicates that it is an Emotion 11 server-side rendered style elements
      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
      // will not result in the Emotion 10 styles being destroyed
      var dataEmotionAttribute = node.getAttribute('data-emotion');

      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }

      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }

  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

  var inserted = {};
  var container;
  /* : Node */

  var nodesToHydrate = [];

  if (isBrowser$2) {
    container = options.container || document.head;
    Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node
    /*: HTMLStyleElement */
    ) {
      var attrib = node.getAttribute("data-emotion").split(' ');

      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }

      nodesToHydrate.push(node);
    });
  }

  var _insert;
  /*: (
  selector: string,
  serialized: SerializedStyles,
  sheet: StyleSheet,
  shouldCache: boolean
  ) => string | void */


  var omnipresentPlugins = [compat, removeLabel];

  if (isBrowser$2) {
    var currentSheet;
    var finalizingPlugins = [stringify, rulesheet(function (rule) {
      currentSheet.insert(rule);
    })];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

    var stylis = function stylis(styles) {
      return serialize(compile(styles), serializer);
    };

    _insert = function
      /*: void */
    insert(selector
    /*: string */
    , serialized
    /*: SerializedStyles */
    , sheet
    /*: StyleSheet */
    , shouldCache
    /*: boolean */
    ) {
      currentSheet = sheet;

      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  } else {
    var _finalizingPlugins = [stringify];

    var _serializer = middleware(omnipresentPlugins.concat(stylisPlugins, _finalizingPlugins));

    var _stylis = function _stylis(styles) {
      return serialize(compile(styles), _serializer);
    };

    var serverStylisCache = getServerStylisCache(stylisPlugins)(key);

    var getRules = function
      /*: string */
    getRules(selector
    /*: string */
    , serialized
    /*: SerializedStyles */
    ) {
      var name = serialized.name;

      if (serverStylisCache[name] === undefined) {
        serverStylisCache[name] = _stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      }

      return serverStylisCache[name];
    };

    _insert = function
      /*: string | void */
    _insert(selector
    /*: string */
    , serialized
    /*: SerializedStyles */
    , sheet
    /*: StyleSheet */
    , shouldCache
    /*: boolean */
    ) {
      var name = serialized.name;
      var rules = getRules(selector, serialized);

      if (cache.compat === undefined) {
        // in regular mode, we don't set the styles on the inserted cache
        // since we don't need to and that would be wasting memory
        // we return them so that they are rendered in a style tag
        if (shouldCache) {
          cache.inserted[name] = true;
        }

        return rules;
      } else {
        // in compat mode, we put the styles on the inserted cache so
        // that emotion-server can pull out the styles
        // except when we don't want to cache it which was in Global but now
        // is nowhere but we don't want to do a major right now
        // and just in case we're going to leave the case here
        // it's also not affecting client side bundle size
        // so it's really not a big deal
        if (shouldCache) {
          cache.inserted[name] = rules;
        } else {
          return rules;
        }
      }
    };
  }

  var cache
  /*: EmotionCache */
  = {
    key: key,
    sheet: new StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};

var reactIs$1 = {exports: {}};

var reactIs_production_min$1 = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min$1;

function requireReactIs_production_min$1 () {
	if (hasRequiredReactIs_production_min$1) return reactIs_production_min$1;
	hasRequiredReactIs_production_min$1 = 1;
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min$1.AsyncMode=l;reactIs_production_min$1.ConcurrentMode=m;reactIs_production_min$1.ContextConsumer=k;reactIs_production_min$1.ContextProvider=h;reactIs_production_min$1.Element=c;reactIs_production_min$1.ForwardRef=n;reactIs_production_min$1.Fragment=e;reactIs_production_min$1.Lazy=t;reactIs_production_min$1.Memo=r;reactIs_production_min$1.Portal=d;
	reactIs_production_min$1.Profiler=g;reactIs_production_min$1.StrictMode=f;reactIs_production_min$1.Suspense=p;reactIs_production_min$1.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min$1.isConcurrentMode=A;reactIs_production_min$1.isContextConsumer=function(a){return z(a)===k};reactIs_production_min$1.isContextProvider=function(a){return z(a)===h};reactIs_production_min$1.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min$1.isForwardRef=function(a){return z(a)===n};reactIs_production_min$1.isFragment=function(a){return z(a)===e};reactIs_production_min$1.isLazy=function(a){return z(a)===t};
	reactIs_production_min$1.isMemo=function(a){return z(a)===r};reactIs_production_min$1.isPortal=function(a){return z(a)===d};reactIs_production_min$1.isProfiler=function(a){return z(a)===g};reactIs_production_min$1.isStrictMode=function(a){return z(a)===f};reactIs_production_min$1.isSuspense=function(a){return z(a)===p};
	reactIs_production_min$1.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min$1.typeOf=z;
	return reactIs_production_min$1;
}

var reactIs_development$1 = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development$1;

function requireReactIs_development$1 () {
	if (hasRequiredReactIs_development$1) return reactIs_development$1;
	hasRequiredReactIs_development$1 = 1;



	if (process.env.NODE_ENV !== "production") {
	  (function() {

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?

	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	} // AsyncMode is deprecated along with isAsyncMode

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }

	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	reactIs_development$1.AsyncMode = AsyncMode;
	reactIs_development$1.ConcurrentMode = ConcurrentMode;
	reactIs_development$1.ContextConsumer = ContextConsumer;
	reactIs_development$1.ContextProvider = ContextProvider;
	reactIs_development$1.Element = Element;
	reactIs_development$1.ForwardRef = ForwardRef;
	reactIs_development$1.Fragment = Fragment;
	reactIs_development$1.Lazy = Lazy;
	reactIs_development$1.Memo = Memo;
	reactIs_development$1.Portal = Portal;
	reactIs_development$1.Profiler = Profiler;
	reactIs_development$1.StrictMode = StrictMode;
	reactIs_development$1.Suspense = Suspense;
	reactIs_development$1.isAsyncMode = isAsyncMode;
	reactIs_development$1.isConcurrentMode = isConcurrentMode;
	reactIs_development$1.isContextConsumer = isContextConsumer;
	reactIs_development$1.isContextProvider = isContextProvider;
	reactIs_development$1.isElement = isElement;
	reactIs_development$1.isForwardRef = isForwardRef;
	reactIs_development$1.isFragment = isFragment;
	reactIs_development$1.isLazy = isLazy;
	reactIs_development$1.isMemo = isMemo;
	reactIs_development$1.isPortal = isPortal;
	reactIs_development$1.isProfiler = isProfiler;
	reactIs_development$1.isStrictMode = isStrictMode;
	reactIs_development$1.isSuspense = isSuspense;
	reactIs_development$1.isValidElementType = isValidElementType;
	reactIs_development$1.typeOf = typeOf;
	  })();
	}
	return reactIs_development$1;
}

var hasRequiredReactIs$1;

function requireReactIs$1 () {
	if (hasRequiredReactIs$1) return reactIs$1.exports;
	hasRequiredReactIs$1 = 1;

	if (process.env.NODE_ENV === 'production') {
	  reactIs$1.exports = requireReactIs_production_min$1();
	} else {
	  reactIs$1.exports = requireReactIs_development$1();
	}
	return reactIs$1.exports;
}

var hoistNonReactStatics_cjs;
var hasRequiredHoistNonReactStatics_cjs;

function requireHoistNonReactStatics_cjs () {
	if (hasRequiredHoistNonReactStatics_cjs) return hoistNonReactStatics_cjs;
	hasRequiredHoistNonReactStatics_cjs = 1;

	var reactIs = requireReactIs$1();

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	var REACT_STATICS = {
	  childContextTypes: true,
	  contextType: true,
	  contextTypes: true,
	  defaultProps: true,
	  displayName: true,
	  getDefaultProps: true,
	  getDerivedStateFromError: true,
	  getDerivedStateFromProps: true,
	  mixins: true,
	  propTypes: true,
	  type: true
	};
	var KNOWN_STATICS = {
	  name: true,
	  length: true,
	  prototype: true,
	  caller: true,
	  callee: true,
	  arguments: true,
	  arity: true
	};
	var FORWARD_REF_STATICS = {
	  '$$typeof': true,
	  render: true,
	  defaultProps: true,
	  displayName: true,
	  propTypes: true
	};
	var MEMO_STATICS = {
	  '$$typeof': true,
	  compare: true,
	  defaultProps: true,
	  displayName: true,
	  propTypes: true,
	  type: true
	};
	var TYPE_STATICS = {};
	TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
	TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

	function getStatics(component) {
	  // React v16.11 and below
	  if (reactIs.isMemo(component)) {
	    return MEMO_STATICS;
	  } // React v16.12 and above


	  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
	}

	var defineProperty = Object.defineProperty;
	var getOwnPropertyNames = Object.getOwnPropertyNames;
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var getPrototypeOf = Object.getPrototypeOf;
	var objectPrototype = Object.prototype;
	function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
	  if (typeof sourceComponent !== 'string') {
	    // don't hoist over string (html) components
	    if (objectPrototype) {
	      var inheritedComponent = getPrototypeOf(sourceComponent);

	      if (inheritedComponent && inheritedComponent !== objectPrototype) {
	        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
	      }
	    }

	    var keys = getOwnPropertyNames(sourceComponent);

	    if (getOwnPropertySymbols) {
	      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
	    }

	    var targetStatics = getStatics(targetComponent);
	    var sourceStatics = getStatics(sourceComponent);

	    for (var i = 0; i < keys.length; ++i) {
	      var key = keys[i];

	      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
	        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

	        try {
	          // Avoid failures from read-only properties
	          defineProperty(targetComponent, key, descriptor);
	        } catch (e) {}
	      }
	    }
	  }

	  return targetComponent;
	}

	hoistNonReactStatics_cjs = hoistNonReactStatics;
	return hoistNonReactStatics_cjs;
}

requireHoistNonReactStatics_cjs();

var isBrowser$1 = typeof document !== 'undefined';
var registerStyles = function registerStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser$1 === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;

  if (cache.inserted[serialized.name] === undefined) {
    var stylesForSSR = '';
    var current = serialized;

    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

      if (!isBrowser$1 && maybeStyles !== undefined) {
        stylesForSSR += maybeStyles;
      }

      current = current.next;
    } while (current !== undefined);

    if (!isBrowser$1 && stylesForSSR.length !== 0) {
      return stylesForSSR;
    }
  }
};

/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

var isDevelopment = false;

var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = /* #__PURE__ */memoize$1(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

var noComponentSelectorMessage = 'Component selectors can only be used in conjunction with ' + '@emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware ' + 'compiler transform.';

function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }

  var componentSelector = interpolation;

  if (componentSelector.__emotion_styles !== undefined) {

    return componentSelector;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        var keyframes = interpolation;

        if (keyframes.anim === 1) {
          cursor = {
            name: keyframes.name,
            styles: keyframes.styles,
            next: cursor
          };
          return keyframes.name;
        }

        var serializedStyles = interpolation;

        if (serializedStyles.styles !== undefined) {
          var next = serializedStyles.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = serializedStyles.styles + ";";

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        }

        break;
      }
  } // finalize string values (regular strings and functions interpolated into css calls)


  var asString = interpolation;

  if (registered == null) {
    return asString;
  }

  var cached = registered[asString];
  return cached !== undefined ? cached : asString;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var key in obj) {
      var value = obj[key];

      if (typeof value !== 'object') {
        var asString = value;

        if (registered != null && registered[asString] !== undefined) {
          string += key + "{" + registered[asString] + "}";
        } else if (isProcessableValue(asString)) {
          string += processStyleName(key) + ":" + processStyleValue(key, asString) + ";";
        }
      } else {
        if (key === 'NO_COMPONENT_SELECTOR' && isDevelopment) {
          throw new Error(noComponentSelectorMessage);
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(key) + ":" + processStyleValue(key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);

          switch (key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(key) + ":" + interpolated + ";";
                break;
              }

            default:
              {

                string += key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;{]+)\s*(;|$)/g;
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    var asTemplateStringsArr = strings;

    styles += asTemplateStringsArr[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);

    if (stringMode) {
      var templateStringsArr = strings;

      styles += templateStringsArr[i];
    }
  }


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + match[1];
  }

  var name = murmur2(styles) + identifierName;

  return {
    name: name,
    styles: styles,
    next: cursor
  };
}

var useInsertionEffect = React['useInsertion' + 'Effect'] ? React['useInsertion' + 'Effect'] : false;
var useInsertionEffectWithLayoutFallback = useInsertionEffect || React.useLayoutEffect;

var isBrowser = typeof document !== 'undefined';

/* import { type EmotionCache } from '@emotion/utils' */
var EmotionCacheContext
/*: React.Context<EmotionCache | null> */
= /* #__PURE__ */React.createContext( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? /* #__PURE__ */createCache({
  key: 'css'
}) : null);

EmotionCacheContext.Provider;

var withEmotionCache = function withEmotionCache
/* <Props, Ref: React.Ref<*>> */
(func
/*: (props: Props, cache: EmotionCache, ref: Ref) => React.Node */
)
/*: React.AbstractComponent<Props> */
{
  return /*#__PURE__*/forwardRef(function (props
  /*: Props */
  , ref
  /*: Ref */
  ) {
    // the cache will never be null in the browser
    var cache = useContext(EmotionCacheContext);
    return func(props, cache, ref);
  });
};

if (!isBrowser) {
  withEmotionCache = function withEmotionCache
  /* <Props> */
  (func
  /*: (props: Props, cache: EmotionCache) => React.Node */
  )
  /*: React.StatelessFunctionalComponent<Props> */
  {
    return function (props
    /*: Props */
    ) {
      var cache = useContext(EmotionCacheContext);

      if (cache === null) {
        // yes, we're potentially creating this on every render
        // it doesn't actually matter though since it's only on the server
        // so there will only every be a single render
        // that could change in the future because of suspense and etc. but for now,
        // this works and i don't want to optimise for a future thing that we aren't sure about
        cache = createCache({
          key: 'css'
        });
        return /*#__PURE__*/React.createElement(EmotionCacheContext.Provider, {
          value: cache
        }, func(props, cache));
      } else {
        return func(props, cache);
      }
    };
  };
}

var ThemeContext$2 = /* #__PURE__ */React.createContext({});

// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag

var Global
/*: React.AbstractComponent<
GlobalProps
> */
= /* #__PURE__ */withEmotionCache(function (props
/*: GlobalProps */
, cache) {

  var styles = props.styles;
  var serialized = serializeStyles([styles], undefined, React.useContext(ThemeContext$2));

  if (!isBrowser) {
    var _ref;

    var serializedNames = serialized.name;
    var serializedStyles = serialized.styles;
    var next = serialized.next;

    while (next !== undefined) {
      serializedNames += ' ' + next.name;
      serializedStyles += next.styles;
      next = next.next;
    }

    var shouldCache = cache.compat === true;
    var rules = cache.insert("", {
      name: serializedNames,
      styles: serializedStyles
    }, cache.sheet, shouldCache);

    if (shouldCache) {
      return null;
    }

    return /*#__PURE__*/React.createElement("style", (_ref = {}, _ref["data-emotion"] = cache.key + "-global " + serializedNames, _ref.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref.nonce = cache.sheet.nonce, _ref));
  } // yes, i know these hooks are used conditionally
  // but it is based on a constant that will never change at runtime
  // it's effectively like having two implementations and switching them out
  // so it's not actually breaking anything


  var sheetRef = React.useRef();
  useInsertionEffectWithLayoutFallback(function () {
    var key = cache.key + "-global"; // use case of https://github.com/emotion-js/emotion/issues/2675

    var sheet = new cache.sheet.constructor({
      key: key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    });
    var rehydrating = false;
    var node
    /*: HTMLStyleElement | null*/
    = document.querySelector("style[data-emotion=\"" + key + " " + serialized.name + "\"]");

    if (cache.sheet.tags.length) {
      sheet.before = cache.sheet.tags[0];
    }

    if (node !== null) {
      rehydrating = true; // clear the hash so this node won't be recognizable as rehydratable by other <Global/>s

      node.setAttribute('data-emotion', key);
      sheet.hydrate([node]);
    }

    sheetRef.current = [sheet, rehydrating];
    return function () {
      sheet.flush();
    };
  }, [cache]);
  useInsertionEffectWithLayoutFallback(function () {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0],
        rehydrating = sheetRefCurrent[1];

    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }

    if (serialized.next !== undefined) {
      // insert keyframes
      insertStyles(cache, serialized.next, true);
    }

    if (sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }

    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]);
  return null;
});

var propTypes = {exports: {}};

var reactIs = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min;

function requireReactIs_production_min () {
	if (hasRequiredReactIs_production_min) return reactIs_production_min;
	hasRequiredReactIs_production_min = 1;
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
	reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
	reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
	reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;
	return reactIs_production_min;
}

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development;

function requireReactIs_development () {
	if (hasRequiredReactIs_development) return reactIs_development;
	hasRequiredReactIs_development = 1;



	if (process.env.NODE_ENV !== "production") {
	  (function() {

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?

	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	} // AsyncMode is deprecated along with isAsyncMode

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }

	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	reactIs_development.AsyncMode = AsyncMode;
	reactIs_development.ConcurrentMode = ConcurrentMode;
	reactIs_development.ContextConsumer = ContextConsumer;
	reactIs_development.ContextProvider = ContextProvider;
	reactIs_development.Element = Element;
	reactIs_development.ForwardRef = ForwardRef;
	reactIs_development.Fragment = Fragment;
	reactIs_development.Lazy = Lazy;
	reactIs_development.Memo = Memo;
	reactIs_development.Portal = Portal;
	reactIs_development.Profiler = Profiler;
	reactIs_development.StrictMode = StrictMode;
	reactIs_development.Suspense = Suspense;
	reactIs_development.isAsyncMode = isAsyncMode;
	reactIs_development.isConcurrentMode = isConcurrentMode;
	reactIs_development.isContextConsumer = isContextConsumer;
	reactIs_development.isContextProvider = isContextProvider;
	reactIs_development.isElement = isElement;
	reactIs_development.isForwardRef = isForwardRef;
	reactIs_development.isFragment = isFragment;
	reactIs_development.isLazy = isLazy;
	reactIs_development.isMemo = isMemo;
	reactIs_development.isPortal = isPortal;
	reactIs_development.isProfiler = isProfiler;
	reactIs_development.isStrictMode = isStrictMode;
	reactIs_development.isSuspense = isSuspense;
	reactIs_development.isValidElementType = isValidElementType;
	reactIs_development.typeOf = typeOf;
	  })();
	}
	return reactIs_development;
}

var hasRequiredReactIs;

function requireReactIs () {
	if (hasRequiredReactIs) return reactIs.exports;
	hasRequiredReactIs = 1;

	if (process.env.NODE_ENV === 'production') {
	  reactIs.exports = requireReactIs_production_min();
	} else {
	  reactIs.exports = requireReactIs_development();
	}
	return reactIs.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

var objectAssign;
var hasRequiredObjectAssign;

function requireObjectAssign () {
	if (hasRequiredObjectAssign) return objectAssign;
	hasRequiredObjectAssign = 1;
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};
	return objectAssign;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;

function requireReactPropTypesSecret () {
	if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
	hasRequiredReactPropTypesSecret = 1;

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	ReactPropTypesSecret_1 = ReactPropTypesSecret;
	return ReactPropTypesSecret_1;
}

var has;
var hasRequiredHas;

function requireHas () {
	if (hasRequiredHas) return has;
	hasRequiredHas = 1;
	has = Function.call.bind(Object.prototype.hasOwnProperty);
	return has;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var checkPropTypes_1;
var hasRequiredCheckPropTypes;

function requireCheckPropTypes () {
	if (hasRequiredCheckPropTypes) return checkPropTypes_1;
	hasRequiredCheckPropTypes = 1;

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  var ReactPropTypesSecret = /*@__PURE__*/ requireReactPropTypesSecret();
	  var loggedTypeFailures = {};
	  var has = /*@__PURE__*/ requireHas();

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) { /**/ }
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
	              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function() {
	  if (process.env.NODE_ENV !== 'production') {
	    loggedTypeFailures = {};
	  }
	};

	checkPropTypes_1 = checkPropTypes;
	return checkPropTypes_1;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithTypeCheckers;
var hasRequiredFactoryWithTypeCheckers;

function requireFactoryWithTypeCheckers () {
	if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
	hasRequiredFactoryWithTypeCheckers = 1;

	var ReactIs = requireReactIs();
	var assign = requireObjectAssign();

	var ReactPropTypesSecret = /*@__PURE__*/ requireReactPropTypesSecret();
	var has = /*@__PURE__*/ requireHas();
	var checkPropTypes = /*@__PURE__*/ requireCheckPropTypes();

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bigint: createPrimitiveTypeChecker('bigint'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message, data) {
	    this.message = message;
	    this.data = data && typeof data === 'object' ? data: {};
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError(
	          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
	          {expectedType: expectedType}
	        );
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!ReactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (arguments.length > 1) {
	          printWarning(
	            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
	            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
	          );
	        } else {
	          printWarning('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var expectedTypes = [];
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
	        if (checkerResult == null) {
	          return null;
	        }
	        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
	          expectedTypes.push(checkerResult.data.expectedType);
	        }
	      }
	      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function invalidValidatorError(componentName, location, propFullName, key, type) {
	    return new PropTypeError(
	      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
	      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
	    );
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (has(shapeTypes, key) && typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	return factoryWithTypeCheckers;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithThrowingShims;
var hasRequiredFactoryWithThrowingShims;

function requireFactoryWithThrowingShims () {
	if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
	hasRequiredFactoryWithThrowingShims = 1;

	var ReactPropTypesSecret = /*@__PURE__*/ requireReactPropTypesSecret();

	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	factoryWithThrowingShims = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  }	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bigint: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,

	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };

	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	return factoryWithThrowingShims;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredPropTypes;

function requirePropTypes () {
	if (hasRequiredPropTypes) return propTypes.exports;
	hasRequiredPropTypes = 1;
	if (process.env.NODE_ENV !== 'production') {
	  var ReactIs = requireReactIs();

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  propTypes.exports = /*@__PURE__*/ requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  propTypes.exports = /*@__PURE__*/ requireFactoryWithThrowingShims()();
	}
	return propTypes.exports;
}

var propTypesExports = /*@__PURE__*/ requirePropTypes();
var PropTypes = /*@__PURE__*/getDefaultExportFromCjs(propTypesExports);

function isEmpty(obj) {
  return obj === undefined || obj === null || Object.keys(obj).length === 0;
}
function GlobalStyles(props) {
  const {
    styles,
    defaultTheme = {}
  } = props;
  const globalStyles = typeof styles === 'function' ? themeInput => styles(isEmpty(themeInput) ? defaultTheme : themeInput) : styles;
  return /*#__PURE__*/jsxRuntimeExports.jsx(Global, {
    styles: globalStyles
  });
}
process.env.NODE_ENV !== "production" ? GlobalStyles.propTypes = {
  defaultTheme: PropTypes.object,
  styles: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object, PropTypes.func])
} : void 0;

// https://github.com/sindresorhus/is-plain-obj/blob/main/index.js
function isPlainObject(item) {
  if (typeof item !== 'object' || item === null) {
    return false;
  }
  const prototype = Object.getPrototypeOf(item);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in item) && !(Symbol.iterator in item);
}
function deepClone(source) {
  if (!isPlainObject(source)) {
    return source;
  }
  const output = {};
  Object.keys(source).forEach(key => {
    output[key] = deepClone(source[key]);
  });
  return output;
}
function deepmerge(target, source, options = {
  clone: true
}) {
  const output = options.clone ? {
    ...target
  } : target;
  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach(key => {
      if (isPlainObject(source[key]) &&
      // Avoid prototype pollution
      Object.prototype.hasOwnProperty.call(target, key) && isPlainObject(target[key])) {
        // Since `output` is a clone of `target` and we have narrowed `target` in this block we can cast to the same type.
        output[key] = deepmerge(target[key], source[key], options);
      } else if (options.clone) {
        output[key] = isPlainObject(source[key]) ? deepClone(source[key]) : source[key];
      } else {
        output[key] = source[key];
      }
    });
  }
  return output;
}

// Sorted ASC by size. That's important.
const sortBreakpointsValues = values => {
  const breakpointsAsArray = Object.keys(values).map(key => ({
    key,
    val: values[key]
  })) || [];
  // Sort in ascending order
  breakpointsAsArray.sort((breakpoint1, breakpoint2) => breakpoint1.val - breakpoint2.val);
  return breakpointsAsArray.reduce((acc, obj) => {
    return {
      ...acc,
      [obj.key]: obj.val
    };
  }, {});
};

// Keep in mind that @media is inclusive by the CSS specification.
function createBreakpoints(breakpoints) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536 // large screen
    },
    unit = 'px',
    step = 5,
    ...other
  } = breakpoints;
  const sortedValues = sortBreakpointsValues(values);
  const keys = Object.keys(sortedValues);
  function up(key) {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `@media (min-width:${value}${unit})`;
  }
  function down(key) {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `@media (max-width:${value - step / 100}${unit})`;
  }
  function between(start, end) {
    const endIndex = keys.indexOf(end);
    return `@media (min-width:${typeof values[start] === 'number' ? values[start] : start}${unit}) and ` + `(max-width:${(endIndex !== -1 && typeof values[keys[endIndex]] === 'number' ? values[keys[endIndex]] : end) - step / 100}${unit})`;
  }
  function only(key) {
    if (keys.indexOf(key) + 1 < keys.length) {
      return between(key, keys[keys.indexOf(key) + 1]);
    }
    return up(key);
  }
  function not(key) {
    // handle first and last key separately, for better readability
    const keyIndex = keys.indexOf(key);
    if (keyIndex === 0) {
      return up(keys[1]);
    }
    if (keyIndex === keys.length - 1) {
      return down(keys[keyIndex]);
    }
    return between(key, keys[keys.indexOf(key) + 1]).replace('@media', '@media not all and');
  }
  return {
    keys,
    values: sortedValues,
    up,
    down,
    between,
    only,
    not,
    unit,
    ...other
  };
}

/**
 * For using in `sx` prop to sort the breakpoint from low to high.
 * Note: this function does not work and will not support multiple units.
 *       e.g. input: { '@container (min-width:300px)': '1rem', '@container (min-width:40rem)': '2rem' }
 *            output: { '@container (min-width:40rem)': '2rem', '@container (min-width:300px)': '1rem' } // since 40 < 300 eventhough 40rem > 300px
 */
function sortContainerQueries(theme, css) {
  if (!theme.containerQueries) {
    return css;
  }
  const sorted = Object.keys(css).filter(key => key.startsWith('@container')).sort((a, b) => {
    const regex = /min-width:\s*([0-9.]+)/;
    return +(a.match(regex)?.[1] || 0) - +(b.match(regex)?.[1] || 0);
  });
  if (!sorted.length) {
    return css;
  }
  return sorted.reduce((acc, key) => {
    const value = css[key];
    delete acc[key];
    acc[key] = value;
    return acc;
  }, {
    ...css
  });
}
function isCqShorthand(breakpointKeys, value) {
  return value === '@' || value.startsWith('@') && (breakpointKeys.some(key => value.startsWith(`@${key}`)) || !!value.match(/^@\d/));
}
function getContainerQuery(theme, shorthand) {
  const matches = shorthand.match(/^@([^/]+)?\/?(.+)?$/);
  if (!matches) {
    if (process.env.NODE_ENV !== 'production') {
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${shorthand})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.\n` + 'For example, `@sm` or `@600` or `@40rem/sidebar`.' : formatMuiErrorMessage(18, `(${shorthand})`));
    }
    return null;
  }
  const [, containerQuery, containerName] = matches;
  const value = Number.isNaN(+containerQuery) ? containerQuery || 0 : +containerQuery;
  return theme.containerQueries(containerName).up(value);
}
function cssContainerQueries(themeInput) {
  const toContainerQuery = (mediaQuery, name) => mediaQuery.replace('@media', name ? `@container ${name}` : '@container');
  function attachCq(node, name) {
    node.up = (...args) => toContainerQuery(themeInput.breakpoints.up(...args), name);
    node.down = (...args) => toContainerQuery(themeInput.breakpoints.down(...args), name);
    node.between = (...args) => toContainerQuery(themeInput.breakpoints.between(...args), name);
    node.only = (...args) => toContainerQuery(themeInput.breakpoints.only(...args), name);
    node.not = (...args) => {
      const result = toContainerQuery(themeInput.breakpoints.not(...args), name);
      if (result.includes('not all and')) {
        // `@container` does not work with `not all and`, so need to invert the logic
        return result.replace('not all and ', '').replace('min-width:', 'width<').replace('max-width:', 'width>').replace('and', 'or');
      }
      return result;
    };
  }
  const node = {};
  const containerQueries = name => {
    attachCq(node, name);
    return node;
  };
  attachCq(containerQueries);
  return {
    ...themeInput,
    containerQueries
  };
}

const shape = {
  borderRadius: 4
};
var shape$1 = shape;

const responsivePropType = process.env.NODE_ENV !== 'production' ? PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object, PropTypes.array]) : {};
var responsivePropType$1 = responsivePropType;

function merge(acc, item) {
  if (!item) {
    return acc;
  }
  return deepmerge(acc, item, {
    clone: false // No need to clone deep, it's way faster.
  });
}

// The breakpoint **start** at this value.
// For instance with the first breakpoint xs: [xs, sm[.
const values = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536 // large screen
};
const defaultBreakpoints = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  up: key => `@media (min-width:${values[key]}px)`
};
const defaultContainerQueries = {
  containerQueries: containerName => ({
    up: key => {
      let result = typeof key === 'number' ? key : values[key] || key;
      if (typeof result === 'number') {
        result = `${result}px`;
      }
      return containerName ? `@container ${containerName} (min-width:${result})` : `@container (min-width:${result})`;
    }
  })
};
function handleBreakpoints(props, propValue, styleFromPropValue) {
  const theme = props.theme || {};
  if (Array.isArray(propValue)) {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return propValue.reduce((acc, item, index) => {
      acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
      return acc;
    }, {});
  }
  if (typeof propValue === 'object') {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return Object.keys(propValue).reduce((acc, breakpoint) => {
      if (isCqShorthand(themeBreakpoints.keys, breakpoint)) {
        const containerKey = getContainerQuery(theme.containerQueries ? theme : defaultContainerQueries, breakpoint);
        if (containerKey) {
          acc[containerKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
        }
      }
      // key is breakpoint
      else if (Object.keys(themeBreakpoints.values || values).includes(breakpoint)) {
        const mediaKey = themeBreakpoints.up(breakpoint);
        acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
      } else {
        const cssKey = breakpoint;
        acc[cssKey] = propValue[cssKey];
      }
      return acc;
    }, {});
  }
  const output = styleFromPropValue(propValue);
  return output;
}
function createEmptyBreakpointObject(breakpointsInput = {}) {
  const breakpointsInOrder = breakpointsInput.keys?.reduce((acc, key) => {
    const breakpointStyleKey = breakpointsInput.up(key);
    acc[breakpointStyleKey] = {};
    return acc;
  }, {});
  return breakpointsInOrder || {};
}
function removeUnusedBreakpoints(breakpointKeys, style) {
  return breakpointKeys.reduce((acc, key) => {
    const breakpointOutput = acc[key];
    const isBreakpointUnused = !breakpointOutput || Object.keys(breakpointOutput).length === 0;
    if (isBreakpointUnused) {
      delete acc[key];
    }
    return acc;
  }, style);
}

// It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
//
// A strict capitalization should uppercase the first letter of each word in the sentence.
// We only handle the first word.
function capitalize(string) {
  if (typeof string !== 'string') {
    throw new Error(process.env.NODE_ENV !== "production" ? 'MUI: `capitalize(string)` expects a string argument.' : formatMuiErrorMessage(7));
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getPath(obj, path, checkVars = true) {
  if (!path || typeof path !== 'string') {
    return null;
  }

  // Check if CSS variables are used
  if (obj && obj.vars && checkVars) {
    const val = `vars.${path}`.split('.').reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
    if (val != null) {
      return val;
    }
  }
  return path.split('.').reduce((acc, item) => {
    if (acc && acc[item] != null) {
      return acc[item];
    }
    return null;
  }, obj);
}
function getStyleValue(themeMapping, transform, propValueFinal, userValue = propValueFinal) {
  let value;
  if (typeof themeMapping === 'function') {
    value = themeMapping(propValueFinal);
  } else if (Array.isArray(themeMapping)) {
    value = themeMapping[propValueFinal] || userValue;
  } else {
    value = getPath(themeMapping, propValueFinal) || userValue;
  }
  if (transform) {
    value = transform(value, userValue, themeMapping);
  }
  return value;
}
function style$1(options) {
  const {
    prop,
    cssProperty = options.prop,
    themeKey,
    transform
  } = options;

  // false positive
  // eslint-disable-next-line react/function-component-definition
  const fn = props => {
    if (props[prop] == null) {
      return null;
    }
    const propValue = props[prop];
    const theme = props.theme;
    const themeMapping = getPath(theme, themeKey) || {};
    const styleFromPropValue = propValueFinal => {
      let value = getStyleValue(themeMapping, transform, propValueFinal);
      if (propValueFinal === value && typeof propValueFinal === 'string') {
        // Haven't found value
        value = getStyleValue(themeMapping, transform, `${prop}${propValueFinal === 'default' ? '' : capitalize(propValueFinal)}`, propValueFinal);
      }
      if (cssProperty === false) {
        return value;
      }
      return {
        [cssProperty]: value
      };
    };
    return handleBreakpoints(props, propValue, styleFromPropValue);
  };
  fn.propTypes = process.env.NODE_ENV !== 'production' ? {
    [prop]: responsivePropType$1
  } : {};
  fn.filterProps = [prop];
  return fn;
}

function memoize(fn) {
  const cache = {};
  return arg => {
    if (cache[arg] === undefined) {
      cache[arg] = fn(arg);
    }
    return cache[arg];
  };
}

const properties = {
  m: 'margin',
  p: 'padding'
};
const directions = {
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom']
};
const aliases = {
  marginX: 'mx',
  marginY: 'my',
  paddingX: 'px',
  paddingY: 'py'
};

// memoize() impact:
// From 300,000 ops/sec
// To 350,000 ops/sec
const getCssProperties = memoize(prop => {
  // It's not a shorthand notation.
  if (prop.length > 2) {
    if (aliases[prop]) {
      prop = aliases[prop];
    } else {
      return [prop];
    }
  }
  const [a, b] = prop.split('');
  const property = properties[a];
  const direction = directions[b] || '';
  return Array.isArray(direction) ? direction.map(dir => property + dir) : [property + direction];
});
const marginKeys = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'marginInline', 'marginInlineStart', 'marginInlineEnd', 'marginBlock', 'marginBlockStart', 'marginBlockEnd'];
const paddingKeys = ['p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'paddingX', 'paddingY', 'paddingInline', 'paddingInlineStart', 'paddingInlineEnd', 'paddingBlock', 'paddingBlockStart', 'paddingBlockEnd'];
const spacingKeys = [...marginKeys, ...paddingKeys];
function createUnaryUnit(theme, themeKey, defaultValue, propName) {
  const themeSpacing = getPath(theme, themeKey, true) ?? defaultValue;
  if (typeof themeSpacing === 'number' || typeof themeSpacing === 'string') {
    return val => {
      if (typeof val === 'string') {
        return val;
      }
      if (process.env.NODE_ENV !== 'production') {
        if (typeof val !== 'number') {
          console.error(`MUI: Expected ${propName} argument to be a number or a string, got ${val}.`);
        }
      }
      if (typeof themeSpacing === 'string') {
        return `calc(${val} * ${themeSpacing})`;
      }
      return themeSpacing * val;
    };
  }
  if (Array.isArray(themeSpacing)) {
    return val => {
      if (typeof val === 'string') {
        return val;
      }
      const abs = Math.abs(val);
      if (process.env.NODE_ENV !== 'production') {
        if (!Number.isInteger(abs)) {
          console.error([`MUI: The \`theme.${themeKey}\` array type cannot be combined with non integer values.` + `You should either use an integer value that can be used as index, or define the \`theme.${themeKey}\` as a number.`].join('\n'));
        } else if (abs > themeSpacing.length - 1) {
          console.error([`MUI: The value provided (${abs}) overflows.`, `The supported values are: ${JSON.stringify(themeSpacing)}.`, `${abs} > ${themeSpacing.length - 1}, you need to add the missing values.`].join('\n'));
        }
      }
      const transformed = themeSpacing[abs];
      if (val >= 0) {
        return transformed;
      }
      if (typeof transformed === 'number') {
        return -transformed;
      }
      return `-${transformed}`;
    };
  }
  if (typeof themeSpacing === 'function') {
    return themeSpacing;
  }
  if (process.env.NODE_ENV !== 'production') {
    console.error([`MUI: The \`theme.${themeKey}\` value (${themeSpacing}) is invalid.`, 'It should be a number, an array or a function.'].join('\n'));
  }
  return () => undefined;
}
function createUnarySpacing(theme) {
  return createUnaryUnit(theme, 'spacing', 8, 'spacing');
}
function getValue(transformer, propValue) {
  if (typeof propValue === 'string' || propValue == null) {
    return propValue;
  }
  return transformer(propValue);
}
function getStyleFromPropValue(cssProperties, transformer) {
  return propValue => cssProperties.reduce((acc, cssProperty) => {
    acc[cssProperty] = getValue(transformer, propValue);
    return acc;
  }, {});
}
function resolveCssProperty(props, keys, prop, transformer) {
  // Using a hash computation over an array iteration could be faster, but with only 28 items,
  // it's doesn't worth the bundle size.
  if (!keys.includes(prop)) {
    return null;
  }
  const cssProperties = getCssProperties(prop);
  const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
  const propValue = props[prop];
  return handleBreakpoints(props, propValue, styleFromPropValue);
}
function style(props, keys) {
  const transformer = createUnarySpacing(props.theme);
  return Object.keys(props).map(prop => resolveCssProperty(props, keys, prop, transformer)).reduce(merge, {});
}
function margin(props) {
  return style(props, marginKeys);
}
margin.propTypes = process.env.NODE_ENV !== 'production' ? marginKeys.reduce((obj, key) => {
  obj[key] = responsivePropType$1;
  return obj;
}, {}) : {};
margin.filterProps = marginKeys;
function padding(props) {
  return style(props, paddingKeys);
}
padding.propTypes = process.env.NODE_ENV !== 'production' ? paddingKeys.reduce((obj, key) => {
  obj[key] = responsivePropType$1;
  return obj;
}, {}) : {};
padding.filterProps = paddingKeys;
process.env.NODE_ENV !== 'production' ? spacingKeys.reduce((obj, key) => {
  obj[key] = responsivePropType$1;
  return obj;
}, {}) : {};

// The different signatures imply different meaning for their arguments that can't be expressed structurally.
// We express the difference with variable names.

function createSpacing(spacingInput = 8,
// Material Design layouts are visually balanced. Most measurements align to an 8dp grid, which aligns both spacing and the overall layout.
// Smaller components, such as icons, can align to a 4dp grid.
// https://m2.material.io/design/layout/understanding-layout.html
transform = createUnarySpacing({
  spacing: spacingInput
})) {
  // Already transformed.
  if (spacingInput.mui) {
    return spacingInput;
  }
  const spacing = (...argsInput) => {
    if (process.env.NODE_ENV !== 'production') {
      if (!(argsInput.length <= 4)) {
        console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${argsInput.length}`);
      }
    }
    const args = argsInput.length === 0 ? [1] : argsInput;
    return args.map(argument => {
      const output = transform(argument);
      return typeof output === 'number' ? `${output}px` : output;
    }).join(' ');
  };
  spacing.mui = true;
  return spacing;
}

function compose(...styles) {
  const handlers = styles.reduce((acc, style) => {
    style.filterProps.forEach(prop => {
      acc[prop] = style;
    });
    return acc;
  }, {});

  // false positive
  // eslint-disable-next-line react/function-component-definition
  const fn = props => {
    return Object.keys(props).reduce((acc, prop) => {
      if (handlers[prop]) {
        return merge(acc, handlers[prop](props));
      }
      return acc;
    }, {});
  };
  fn.propTypes = process.env.NODE_ENV !== 'production' ? styles.reduce((acc, style) => Object.assign(acc, style.propTypes), {}) : {};
  fn.filterProps = styles.reduce((acc, style) => acc.concat(style.filterProps), []);
  return fn;
}

function borderTransform(value) {
  if (typeof value !== 'number') {
    return value;
  }
  return `${value}px solid`;
}
function createBorderStyle(prop, transform) {
  return style$1({
    prop,
    themeKey: 'borders',
    transform
  });
}
const border = createBorderStyle('border', borderTransform);
const borderTop = createBorderStyle('borderTop', borderTransform);
const borderRight = createBorderStyle('borderRight', borderTransform);
const borderBottom = createBorderStyle('borderBottom', borderTransform);
const borderLeft = createBorderStyle('borderLeft', borderTransform);
const borderColor = createBorderStyle('borderColor');
const borderTopColor = createBorderStyle('borderTopColor');
const borderRightColor = createBorderStyle('borderRightColor');
const borderBottomColor = createBorderStyle('borderBottomColor');
const borderLeftColor = createBorderStyle('borderLeftColor');
const outline = createBorderStyle('outline', borderTransform);
const outlineColor = createBorderStyle('outlineColor');

// false positive
// eslint-disable-next-line react/function-component-definition
const borderRadius = props => {
  if (props.borderRadius !== undefined && props.borderRadius !== null) {
    const transformer = createUnaryUnit(props.theme, 'shape.borderRadius', 4, 'borderRadius');
    const styleFromPropValue = propValue => ({
      borderRadius: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
  }
  return null;
};
borderRadius.propTypes = process.env.NODE_ENV !== 'production' ? {
  borderRadius: responsivePropType$1
} : {};
borderRadius.filterProps = ['borderRadius'];
compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius, outline, outlineColor);

// false positive
// eslint-disable-next-line react/function-component-definition
const gap = props => {
  if (props.gap !== undefined && props.gap !== null) {
    const transformer = createUnaryUnit(props.theme, 'spacing', 8, 'gap');
    const styleFromPropValue = propValue => ({
      gap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.gap, styleFromPropValue);
  }
  return null;
};
gap.propTypes = process.env.NODE_ENV !== 'production' ? {
  gap: responsivePropType$1
} : {};
gap.filterProps = ['gap'];

// false positive
// eslint-disable-next-line react/function-component-definition
const columnGap = props => {
  if (props.columnGap !== undefined && props.columnGap !== null) {
    const transformer = createUnaryUnit(props.theme, 'spacing', 8, 'columnGap');
    const styleFromPropValue = propValue => ({
      columnGap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.columnGap, styleFromPropValue);
  }
  return null;
};
columnGap.propTypes = process.env.NODE_ENV !== 'production' ? {
  columnGap: responsivePropType$1
} : {};
columnGap.filterProps = ['columnGap'];

// false positive
// eslint-disable-next-line react/function-component-definition
const rowGap = props => {
  if (props.rowGap !== undefined && props.rowGap !== null) {
    const transformer = createUnaryUnit(props.theme, 'spacing', 8, 'rowGap');
    const styleFromPropValue = propValue => ({
      rowGap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.rowGap, styleFromPropValue);
  }
  return null;
};
rowGap.propTypes = process.env.NODE_ENV !== 'production' ? {
  rowGap: responsivePropType$1
} : {};
rowGap.filterProps = ['rowGap'];
const gridColumn = style$1({
  prop: 'gridColumn'
});
const gridRow = style$1({
  prop: 'gridRow'
});
const gridAutoFlow = style$1({
  prop: 'gridAutoFlow'
});
const gridAutoColumns = style$1({
  prop: 'gridAutoColumns'
});
const gridAutoRows = style$1({
  prop: 'gridAutoRows'
});
const gridTemplateColumns = style$1({
  prop: 'gridTemplateColumns'
});
const gridTemplateRows = style$1({
  prop: 'gridTemplateRows'
});
const gridTemplateAreas = style$1({
  prop: 'gridTemplateAreas'
});
const gridArea = style$1({
  prop: 'gridArea'
});
compose(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);

function paletteTransform(value, userValue) {
  if (userValue === 'grey') {
    return userValue;
  }
  return value;
}
const color = style$1({
  prop: 'color',
  themeKey: 'palette',
  transform: paletteTransform
});
const bgcolor = style$1({
  prop: 'bgcolor',
  cssProperty: 'backgroundColor',
  themeKey: 'palette',
  transform: paletteTransform
});
const backgroundColor = style$1({
  prop: 'backgroundColor',
  themeKey: 'palette',
  transform: paletteTransform
});
compose(color, bgcolor, backgroundColor);

function sizingTransform(value) {
  return value <= 1 && value !== 0 ? `${value * 100}%` : value;
}
const width = style$1({
  prop: 'width',
  transform: sizingTransform
});
const maxWidth = props => {
  if (props.maxWidth !== undefined && props.maxWidth !== null) {
    const styleFromPropValue = propValue => {
      const breakpoint = props.theme?.breakpoints?.values?.[propValue] || values[propValue];
      if (!breakpoint) {
        return {
          maxWidth: sizingTransform(propValue)
        };
      }
      if (props.theme?.breakpoints?.unit !== 'px') {
        return {
          maxWidth: `${breakpoint}${props.theme.breakpoints.unit}`
        };
      }
      return {
        maxWidth: breakpoint
      };
    };
    return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
  }
  return null;
};
maxWidth.filterProps = ['maxWidth'];
const minWidth = style$1({
  prop: 'minWidth',
  transform: sizingTransform
});
const height = style$1({
  prop: 'height',
  transform: sizingTransform
});
const maxHeight = style$1({
  prop: 'maxHeight',
  transform: sizingTransform
});
const minHeight = style$1({
  prop: 'minHeight',
  transform: sizingTransform
});
style$1({
  prop: 'size',
  cssProperty: 'width',
  transform: sizingTransform
});
style$1({
  prop: 'size',
  cssProperty: 'height',
  transform: sizingTransform
});
const boxSizing = style$1({
  prop: 'boxSizing'
});
compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);

const defaultSxConfig = {
  // borders
  border: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderTop: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderRight: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderBottom: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderLeft: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderColor: {
    themeKey: 'palette'
  },
  borderTopColor: {
    themeKey: 'palette'
  },
  borderRightColor: {
    themeKey: 'palette'
  },
  borderBottomColor: {
    themeKey: 'palette'
  },
  borderLeftColor: {
    themeKey: 'palette'
  },
  outline: {
    themeKey: 'borders',
    transform: borderTransform
  },
  outlineColor: {
    themeKey: 'palette'
  },
  borderRadius: {
    themeKey: 'shape.borderRadius',
    style: borderRadius
  },
  // palette
  color: {
    themeKey: 'palette',
    transform: paletteTransform
  },
  bgcolor: {
    themeKey: 'palette',
    cssProperty: 'backgroundColor',
    transform: paletteTransform
  },
  backgroundColor: {
    themeKey: 'palette',
    transform: paletteTransform
  },
  // spacing
  p: {
    style: padding
  },
  pt: {
    style: padding
  },
  pr: {
    style: padding
  },
  pb: {
    style: padding
  },
  pl: {
    style: padding
  },
  px: {
    style: padding
  },
  py: {
    style: padding
  },
  padding: {
    style: padding
  },
  paddingTop: {
    style: padding
  },
  paddingRight: {
    style: padding
  },
  paddingBottom: {
    style: padding
  },
  paddingLeft: {
    style: padding
  },
  paddingX: {
    style: padding
  },
  paddingY: {
    style: padding
  },
  paddingInline: {
    style: padding
  },
  paddingInlineStart: {
    style: padding
  },
  paddingInlineEnd: {
    style: padding
  },
  paddingBlock: {
    style: padding
  },
  paddingBlockStart: {
    style: padding
  },
  paddingBlockEnd: {
    style: padding
  },
  m: {
    style: margin
  },
  mt: {
    style: margin
  },
  mr: {
    style: margin
  },
  mb: {
    style: margin
  },
  ml: {
    style: margin
  },
  mx: {
    style: margin
  },
  my: {
    style: margin
  },
  margin: {
    style: margin
  },
  marginTop: {
    style: margin
  },
  marginRight: {
    style: margin
  },
  marginBottom: {
    style: margin
  },
  marginLeft: {
    style: margin
  },
  marginX: {
    style: margin
  },
  marginY: {
    style: margin
  },
  marginInline: {
    style: margin
  },
  marginInlineStart: {
    style: margin
  },
  marginInlineEnd: {
    style: margin
  },
  marginBlock: {
    style: margin
  },
  marginBlockStart: {
    style: margin
  },
  marginBlockEnd: {
    style: margin
  },
  // display
  displayPrint: {
    cssProperty: false,
    transform: value => ({
      '@media print': {
        display: value
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: gap
  },
  rowGap: {
    style: rowGap
  },
  columnGap: {
    style: columnGap
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: 'zIndex'
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: 'shadows'
  },
  // sizing
  width: {
    transform: sizingTransform
  },
  maxWidth: {
    style: maxWidth
  },
  minWidth: {
    transform: sizingTransform
  },
  height: {
    transform: sizingTransform
  },
  maxHeight: {
    transform: sizingTransform
  },
  minHeight: {
    transform: sizingTransform
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: 'font'
  },
  fontFamily: {
    themeKey: 'typography'
  },
  fontSize: {
    themeKey: 'typography'
  },
  fontStyle: {
    themeKey: 'typography'
  },
  fontWeight: {
    themeKey: 'typography'
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: false,
    themeKey: 'typography'
  }
};
var defaultSxConfig$1 = defaultSxConfig;

function objectsHaveSameKeys(...objects) {
  const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
  const union = new Set(allKeys);
  return objects.every(object => union.size === Object.keys(object).length);
}
function callIfFn(maybeFn, arg) {
  return typeof maybeFn === 'function' ? maybeFn(arg) : maybeFn;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
function unstable_createStyleFunctionSx() {
  function getThemeValue(prop, val, theme, config) {
    const props = {
      [prop]: val,
      theme
    };
    const options = config[prop];
    if (!options) {
      return {
        [prop]: val
      };
    }
    const {
      cssProperty = prop,
      themeKey,
      transform,
      style
    } = options;
    if (val == null) {
      return null;
    }

    // TODO v6: remove, see https://github.com/mui/material-ui/pull/38123
    if (themeKey === 'typography' && val === 'inherit') {
      return {
        [prop]: val
      };
    }
    const themeMapping = getPath(theme, themeKey) || {};
    if (style) {
      return style(props);
    }
    const styleFromPropValue = propValueFinal => {
      let value = getStyleValue(themeMapping, transform, propValueFinal);
      if (propValueFinal === value && typeof propValueFinal === 'string') {
        // Haven't found value
        value = getStyleValue(themeMapping, transform, `${prop}${propValueFinal === 'default' ? '' : capitalize(propValueFinal)}`, propValueFinal);
      }
      if (cssProperty === false) {
        return value;
      }
      return {
        [cssProperty]: value
      };
    };
    return handleBreakpoints(props, val, styleFromPropValue);
  }
  function styleFunctionSx(props) {
    const {
      sx,
      theme = {}
    } = props || {};
    if (!sx) {
      return null; // Emotion & styled-components will neglect null
    }
    const config = theme.unstable_sxConfig ?? defaultSxConfig$1;

    /*
     * Receive `sxInput` as object or callback
     * and then recursively check keys & values to create media query object styles.
     * (the result will be used in `styled`)
     */
    function traverse(sxInput) {
      let sxObject = sxInput;
      if (typeof sxInput === 'function') {
        sxObject = sxInput(theme);
      } else if (typeof sxInput !== 'object') {
        // value
        return sxInput;
      }
      if (!sxObject) {
        return null;
      }
      const emptyBreakpoints = createEmptyBreakpointObject(theme.breakpoints);
      const breakpointsKeys = Object.keys(emptyBreakpoints);
      let css = emptyBreakpoints;
      Object.keys(sxObject).forEach(styleKey => {
        const value = callIfFn(sxObject[styleKey], theme);
        if (value !== null && value !== undefined) {
          if (typeof value === 'object') {
            if (config[styleKey]) {
              css = merge(css, getThemeValue(styleKey, value, theme, config));
            } else {
              const breakpointsValues = handleBreakpoints({
                theme
              }, value, x => ({
                [styleKey]: x
              }));
              if (objectsHaveSameKeys(breakpointsValues, value)) {
                css[styleKey] = styleFunctionSx({
                  sx: value,
                  theme
                });
              } else {
                css = merge(css, breakpointsValues);
              }
            }
          } else {
            css = merge(css, getThemeValue(styleKey, value, theme, config));
          }
        }
      });
      return sortContainerQueries(theme, removeUnusedBreakpoints(breakpointsKeys, css));
    }
    return Array.isArray(sx) ? sx.map(traverse) : traverse(sx);
  }
  return styleFunctionSx;
}
const styleFunctionSx = unstable_createStyleFunctionSx();
styleFunctionSx.filterProps = ['sx'];
var styleFunctionSx$1 = styleFunctionSx;

/**
 * A universal utility to style components with multiple color modes. Always use it from the theme object.
 * It works with:
 *  - [Basic theme](https://mui.com/material-ui/customization/dark-mode/)
 *  - [CSS theme variables](https://mui.com/material-ui/customization/css-theme-variables/overview/)
 *  - Zero-runtime engine
 *
 * Tips: Use an array over object spread and place `theme.applyStyles()` last.
 *
 * ✅ [{ background: '#e5e5e5' }, theme.applyStyles('dark', { background: '#1c1c1c' })]
 *
 * 🚫 { background: '#e5e5e5', ...theme.applyStyles('dark', { background: '#1c1c1c' })}
 *
 * @example
 * 1. using with `styled`:
 * ```jsx
 *   const Component = styled('div')(({ theme }) => [
 *     { background: '#e5e5e5' },
 *     theme.applyStyles('dark', {
 *       background: '#1c1c1c',
 *       color: '#fff',
 *     }),
 *   ]);
 * ```
 *
 * @example
 * 2. using with `sx` prop:
 * ```jsx
 *   <Box sx={theme => [
 *     { background: '#e5e5e5' },
 *     theme.applyStyles('dark', {
 *        background: '#1c1c1c',
 *        color: '#fff',
 *      }),
 *     ]}
 *   />
 * ```
 *
 * @example
 * 3. theming a component:
 * ```jsx
 *   extendTheme({
 *     components: {
 *       MuiButton: {
 *         styleOverrides: {
 *           root: ({ theme }) => [
 *             { background: '#e5e5e5' },
 *             theme.applyStyles('dark', {
 *               background: '#1c1c1c',
 *               color: '#fff',
 *             }),
 *           ],
 *         },
 *       }
 *     }
 *   })
 *```
 */
function applyStyles(key, styles) {
  // @ts-expect-error this is 'any' type
  const theme = this;
  if (theme.vars) {
    if (!theme.colorSchemes?.[key] || typeof theme.getColorSchemeSelector !== 'function') {
      return {};
    }
    // If CssVarsProvider is used as a provider, returns '*:where({selector}) &'
    let selector = theme.getColorSchemeSelector(key);
    if (selector === '&') {
      return styles;
    }
    if (selector.includes('data-') || selector.includes('.')) {
      // '*' is required as a workaround for Emotion issue (https://github.com/emotion-js/emotion/issues/2836)
      selector = `*:where(${selector.replace(/\s*&$/, '')}) &`;
    }
    return {
      [selector]: styles
    };
  }
  if (theme.palette.mode === key) {
    return styles;
  }
  return {};
}

function createTheme$1(options = {}, ...args) {
  const {
    breakpoints: breakpointsInput = {},
    palette: paletteInput = {},
    spacing: spacingInput,
    shape: shapeInput = {},
    ...other
  } = options;
  const breakpoints = createBreakpoints(breakpointsInput);
  const spacing = createSpacing(spacingInput);
  let muiTheme = deepmerge({
    breakpoints,
    direction: 'ltr',
    components: {},
    // Inject component definitions.
    palette: {
      mode: 'light',
      ...paletteInput
    },
    spacing,
    shape: {
      ...shape$1,
      ...shapeInput
    }
  }, other);
  muiTheme = cssContainerQueries(muiTheme);
  muiTheme.applyStyles = applyStyles;
  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
  muiTheme.unstable_sxConfig = {
    ...defaultSxConfig$1,
    ...other?.unstable_sxConfig
  };
  muiTheme.unstable_sx = function sx(props) {
    return styleFunctionSx$1({
      sx: props,
      theme: this
    });
  };
  return muiTheme;
}

function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}
function useTheme$1(defaultTheme = null) {
  const contextTheme = React.useContext(ThemeContext$2);
  return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme : contextTheme;
}

const defaultGenerator = componentName => componentName;
const createClassNameGenerator = () => {
  let generate = defaultGenerator;
  return {
    configure(generator) {
      generate = generator;
    },
    generate(componentName) {
      return generate(componentName);
    },
    reset() {
      generate = defaultGenerator;
    }
  };
};
const ClassNameGenerator = createClassNameGenerator();
var ClassNameGenerator$1 = ClassNameGenerator;

const globalStateClasses = {
  active: 'active',
  checked: 'checked',
  completed: 'completed',
  disabled: 'disabled',
  error: 'error',
  expanded: 'expanded',
  focused: 'focused',
  focusVisible: 'focusVisible',
  open: 'open',
  readOnly: 'readOnly',
  required: 'required',
  selected: 'selected'
};
function generateUtilityClass(componentName, slot, globalStatePrefix = 'Mui') {
  const globalStateClass = globalStateClasses[slot];
  return globalStateClass ? `${globalStatePrefix}-${globalStateClass}` : `${ClassNameGenerator$1.generate(componentName)}-${slot}`;
}

function clamp(val, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
  return Math.max(min, Math.min(val, max));
}

/**
 * Returns a number whose value is limited to the given range.
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clampWrapper(value, min = 0, max = 1) {
  if (process.env.NODE_ENV !== 'production') {
    if (value < min || value > max) {
      console.error(`MUI: The value provided ${value} is out of range [${min}, ${max}].`);
    }
  }
  return clamp(value, min, max);
}

/**
 * Converts a color from CSS hex format to CSS rgb format.
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */
function hexToRgb(color) {
  color = color.slice(1);
  const re = new RegExp(`.{1,${color.length >= 6 ? 2 : 1}}`, 'g');
  let colors = color.match(re);
  if (colors && colors[0].length === 1) {
    colors = colors.map(n => n + n);
  }
  return colors ? `rgb${colors.length === 4 ? 'a' : ''}(${colors.map((n, index) => {
    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
  }).join(', ')})` : '';
}

/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */
function decomposeColor(color) {
  // Idempotent
  if (color.type) {
    return color;
  }
  if (color.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color));
  }
  const marker = color.indexOf('(');
  const type = color.substring(0, marker);
  if (!['rgb', 'rgba', 'hsl', 'hsla', 'color'].includes(type)) {
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${color}\` color.\n` + 'The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().' : formatMuiErrorMessage(9, color));
  }
  let values = color.substring(marker + 1, color.length - 1);
  let colorSpace;
  if (type === 'color') {
    values = values.split(' ');
    colorSpace = values.shift();
    if (values.length === 4 && values[3].charAt(0) === '/') {
      values[3] = values[3].slice(1);
    }
    if (!['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].includes(colorSpace)) {
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${colorSpace}\` color space.\n` + 'The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.' : formatMuiErrorMessage(10, colorSpace));
    }
  } else {
    values = values.split(',');
  }
  values = values.map(value => parseFloat(value));
  return {
    type,
    values,
    colorSpace
  };
}

/**
 * Returns a channel created from the input color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {string} - The channel for the color, that can be used in rgba or hsla colors
 */
const colorChannel = color => {
  const decomposedColor = decomposeColor(color);
  return decomposedColor.values.slice(0, 3).map((val, idx) => decomposedColor.type.includes('hsl') && idx !== 0 ? `${val}%` : val).join(' ');
};
const private_safeColorChannel = (color, warning) => {
  try {
    return colorChannel(color);
  } catch (error) {
    if (warning && process.env.NODE_ENV !== 'production') {
      console.warn(warning);
    }
    return color;
  }
};

/**
 * Converts a color object with type and values to a string.
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla', 'color'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */
function recomposeColor(color) {
  const {
    type,
    colorSpace
  } = color;
  let {
    values
  } = color;
  if (type.includes('rgb')) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map((n, i) => i < 3 ? parseInt(n, 10) : n);
  } else if (type.includes('hsl')) {
    values[1] = `${values[1]}%`;
    values[2] = `${values[2]}%`;
  }
  if (type.includes('color')) {
    values = `${colorSpace} ${values.join(' ')}`;
  } else {
    values = `${values.join(', ')}`;
  }
  return `${type}(${values})`;
}

/**
 * Converts a color from hsl format to rgb format.
 * @param {string} color - HSL color values
 * @returns {string} rgb color values
 */
function hslToRgb(color) {
  color = decomposeColor(color);
  const {
    values
  } = color;
  const h = values[0];
  const s = values[1] / 100;
  const l = values[2] / 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  let type = 'rgb';
  const rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
  if (color.type === 'hsla') {
    type += 'a';
    rgb.push(values[3]);
  }
  return recomposeColor({
    type,
    values: rgb
  });
}
/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */
function getLuminance(color) {
  color = decomposeColor(color);
  let rgb = color.type === 'hsl' || color.type === 'hsla' ? decomposeColor(hslToRgb(color)).values : color.values;
  rgb = rgb.map(val => {
    if (color.type !== 'color') {
      val /= 255; // normalized
    }
    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
  });

  // Truncate at 3 digits
  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}

/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */
function getContrastRatio(foreground, background) {
  const lumA = getLuminance(foreground);
  const lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}

/**
 * Sets the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} value - value to set the alpha channel to in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function alpha(color, value) {
  color = decomposeColor(color);
  value = clampWrapper(value);
  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }
  if (color.type === 'color') {
    color.values[3] = `/${value}`;
  } else {
    color.values[3] = value;
  }
  return recomposeColor(color);
}
function private_safeAlpha(color, value, warning) {
  try {
    return alpha(color, value);
  } catch (error) {
    if (warning && process.env.NODE_ENV !== 'production') {
      console.warn(warning);
    }
    return color;
  }
}

/**
 * Darkens a color.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clampWrapper(coefficient);
  if (color.type.includes('hsl')) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.includes('rgb') || color.type.includes('color')) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }
  return recomposeColor(color);
}
function private_safeDarken(color, coefficient, warning) {
  try {
    return darken(color, coefficient);
  } catch (error) {
    if (warning && process.env.NODE_ENV !== 'production') {
      console.warn(warning);
    }
    return color;
  }
}

/**
 * Lightens a color.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clampWrapper(coefficient);
  if (color.type.includes('hsl')) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.includes('rgb')) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  } else if (color.type.includes('color')) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] += (1 - color.values[i]) * coefficient;
    }
  }
  return recomposeColor(color);
}
function private_safeLighten(color, coefficient, warning) {
  try {
    return lighten(color, coefficient);
  } catch (error) {
    if (warning && process.env.NODE_ENV !== 'production') {
      console.warn(warning);
    }
    return color;
  }
}

/**
 * Darken or lighten a color, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function emphasize(color, coefficient = 0.15) {
  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}
function private_safeEmphasize(color, coefficient, warning) {
  try {
    return emphasize(color, coefficient);
  } catch (error) {
    if (warning && process.env.NODE_ENV !== 'production') {
      console.warn(warning);
    }
    return color;
  }
}

// This module is based on https://github.com/airbnb/prop-types-exact repository.
// However, in order to reduce the number of dependencies and to remove some extra safe checks
// the module was forked.

const specialProperty = 'exact-prop: \u200b';
function exactProp(propTypes) {
  if (process.env.NODE_ENV === 'production') {
    return propTypes;
  }
  return {
    ...propTypes,
    [specialProperty]: props => {
      const unsupportedProps = Object.keys(props).filter(prop => !propTypes.hasOwnProperty(prop));
      if (unsupportedProps.length > 0) {
        return new Error(`The following props are not supported: ${unsupportedProps.map(prop => `\`${prop}\``).join(', ')}. Please remove them.`);
      }
      return null;
    }
  };
}

const ThemeContext = /*#__PURE__*/React.createContext(null);
if (process.env.NODE_ENV !== 'production') {
  ThemeContext.displayName = 'ThemeContext';
}
var ThemeContext$1 = ThemeContext;

function useTheme() {
  const theme = React.useContext(ThemeContext$1);
  if (process.env.NODE_ENV !== 'production') {
    // TODO: uncomment once we enable eslint-plugin-react-compiler eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/rules-of-hooks -- It's not required to run React.useDebugValue in production
    React.useDebugValue(theme);
  }
  return theme;
}

const hasSymbol = typeof Symbol === 'function' && Symbol.for;
var nested = hasSymbol ? Symbol.for('mui.nested') : '__THEME_NESTED__';

function mergeOuterLocalTheme(outerTheme, localTheme) {
  if (typeof localTheme === 'function') {
    const mergedTheme = localTheme(outerTheme);
    if (process.env.NODE_ENV !== 'production') {
      if (!mergedTheme) {
        console.error(['MUI: You should return an object from your theme function, i.e.', '<ThemeProvider theme={() => ({})} />'].join('\n'));
      }
    }
    return mergedTheme;
  }
  return {
    ...outerTheme,
    ...localTheme
  };
}

/**
 * This component takes a `theme` prop.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */
function ThemeProvider$2(props) {
  const {
    children,
    theme: localTheme
  } = props;
  const outerTheme = useTheme();
  if (process.env.NODE_ENV !== 'production') {
    if (outerTheme === null && typeof localTheme === 'function') {
      console.error(['MUI: You are providing a theme function prop to the ThemeProvider component:', '<ThemeProvider theme={outerTheme => outerTheme} />', '', 'However, no outer theme is present.', 'Make sure a theme is already injected higher in the React tree ' + 'or provide a theme object.'].join('\n'));
    }
  }
  const theme = React.useMemo(() => {
    const output = outerTheme === null ? {
      ...localTheme
    } : mergeOuterLocalTheme(outerTheme, localTheme);
    if (output != null) {
      output[nested] = outerTheme !== null;
    }
    return output;
  }, [localTheme, outerTheme]);
  return /*#__PURE__*/jsxRuntimeExports.jsx(ThemeContext$1.Provider, {
    value: theme,
    children: children
  });
}
process.env.NODE_ENV !== "production" ? ThemeProvider$2.propTypes = {
  /**
   * Your component tree.
   */
  children: PropTypes.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired
} : void 0;
if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_ENV !== "production" ? ThemeProvider$2.propTypes = exactProp(ThemeProvider$2.propTypes) : void 0;
}

const RtlContext = /*#__PURE__*/React.createContext();
function RtlProvider({
  value,
  ...props
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsx(RtlContext.Provider, {
    value: value ?? true,
    ...props
  });
}
process.env.NODE_ENV !== "production" ? RtlProvider.propTypes = {
  children: PropTypes.node,
  value: PropTypes.bool
} : void 0;

const PropsContext = /*#__PURE__*/React.createContext(undefined);
function DefaultPropsProvider({
  value,
  children
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsx(PropsContext.Provider, {
    value: value,
    children: children
  });
}
process.env.NODE_ENV !== "production" ? DefaultPropsProvider.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  value: PropTypes.object
} : void 0;

const EMPTY_THEME = {};
function useThemeScoping(themeId, upperTheme, localTheme, isPrivate = false) {
  return React.useMemo(() => {
    const resolvedTheme = themeId ? upperTheme[themeId] || upperTheme : upperTheme;
    if (typeof localTheme === 'function') {
      const mergedTheme = localTheme(resolvedTheme);
      const result = themeId ? {
        ...upperTheme,
        [themeId]: mergedTheme
      } : mergedTheme;
      // must return a function for the private theme to NOT merge with the upper theme.
      // see the test case "use provided theme from a callback" in ThemeProvider.test.js
      if (isPrivate) {
        return () => result;
      }
      return result;
    }
    return themeId ? {
      ...upperTheme,
      [themeId]: localTheme
    } : {
      ...upperTheme,
      ...localTheme
    };
  }, [themeId, upperTheme, localTheme, isPrivate]);
}

/**
 * This component makes the `theme` available down the React tree.
 * It should preferably be used at **the root of your component tree**.
 *
 * <ThemeProvider theme={theme}> // existing use case
 * <ThemeProvider theme={{ id: theme }}> // theme scoping
 */
function ThemeProvider$1(props) {
  const {
    children,
    theme: localTheme,
    themeId
  } = props;
  const upperTheme = useTheme$1(EMPTY_THEME);
  const upperPrivateTheme = useTheme() || EMPTY_THEME;
  if (process.env.NODE_ENV !== 'production') {
    if (upperTheme === null && typeof localTheme === 'function' || themeId && upperTheme && !upperTheme[themeId] && typeof localTheme === 'function') {
      console.error(['MUI: You are providing a theme function prop to the ThemeProvider component:', '<ThemeProvider theme={outerTheme => outerTheme} />', '', 'However, no outer theme is present.', 'Make sure a theme is already injected higher in the React tree ' + 'or provide a theme object.'].join('\n'));
    }
  }
  const engineTheme = useThemeScoping(themeId, upperTheme, localTheme);
  const privateTheme = useThemeScoping(themeId, upperPrivateTheme, localTheme, true);
  const rtlValue = engineTheme.direction === 'rtl';
  return /*#__PURE__*/jsxRuntimeExports.jsx(ThemeProvider$2, {
    theme: privateTheme,
    children: /*#__PURE__*/jsxRuntimeExports.jsx(ThemeContext$2.Provider, {
      value: engineTheme,
      children: /*#__PURE__*/jsxRuntimeExports.jsx(RtlProvider, {
        value: rtlValue,
        children: /*#__PURE__*/jsxRuntimeExports.jsx(DefaultPropsProvider, {
          value: engineTheme?.components,
          children: children
        })
      })
    })
  });
}
process.env.NODE_ENV !== "production" ? ThemeProvider$1.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Your component tree.
   */
  children: PropTypes.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  /**
   * The design system's unique id for getting the corresponded theme when there are multiple design systems.
   */
  themeId: PropTypes.string
} : void 0;
if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_ENV !== "production" ? ThemeProvider$1.propTypes = exactProp(ThemeProvider$1.propTypes) : void 0;
}

/**
 * Split this component for RSC import
 */
const DEFAULT_MODE_STORAGE_KEY = 'mode';
const DEFAULT_COLOR_SCHEME_STORAGE_KEY = 'color-scheme';
const DEFAULT_ATTRIBUTE = 'data-color-scheme';
function InitColorSchemeScript(options) {
  const {
    defaultLightColorScheme = 'light',
    defaultDarkColorScheme = 'dark',
    modeStorageKey = DEFAULT_MODE_STORAGE_KEY,
    colorSchemeStorageKey = DEFAULT_COLOR_SCHEME_STORAGE_KEY,
    attribute: initialAttribute = DEFAULT_ATTRIBUTE,
    colorSchemeNode = 'document.documentElement',
    nonce
  } = options || {};
  let setter = '';
  let attribute = initialAttribute;
  if (initialAttribute === 'class') {
    attribute = '.%s';
  }
  if (initialAttribute === 'data') {
    attribute = '[data-%s]';
  }
  if (attribute.startsWith('.')) {
    const selector = attribute.substring(1);
    setter += `${colorSchemeNode}.classList.remove('${selector}'.replace('%s', light), '${selector}'.replace('%s', dark));
      ${colorSchemeNode}.classList.add('${selector}'.replace('%s', colorScheme));`;
  }
  const matches = attribute.match(/\[([^\]]+)\]/); // case [data-color-scheme=%s] or [data-color-scheme]
  if (matches) {
    const [attr, value] = matches[1].split('=');
    if (!value) {
      setter += `${colorSchemeNode}.removeAttribute('${attr}'.replace('%s', light));
      ${colorSchemeNode}.removeAttribute('${attr}'.replace('%s', dark));`;
    }
    setter += `
      ${colorSchemeNode}.setAttribute('${attr}'.replace('%s', colorScheme), ${value ? `${value}.replace('%s', colorScheme)` : '""'});`;
  } else {
    setter += `${colorSchemeNode}.setAttribute('${attribute}', colorScheme);`;
  }
  return /*#__PURE__*/jsxRuntimeExports.jsx("script", {
    suppressHydrationWarning: true,
    nonce: typeof window === 'undefined' ? nonce : ''
    // eslint-disable-next-line react/no-danger
    ,
    dangerouslySetInnerHTML: {
      __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${modeStorageKey}') || 'system';
  const dark = localStorage.getItem('${colorSchemeStorageKey}-dark') || '${defaultDarkColorScheme}';
  const light = localStorage.getItem('${colorSchemeStorageKey}-light') || '${defaultLightColorScheme}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${setter}
  }
} catch(e){}})();`
    }
  }, "mui-color-scheme-init");
}

function getSystemMode(mode) {
  if (typeof window !== 'undefined' && typeof window.matchMedia === 'function' && mode === 'system') {
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      return 'dark';
    }
    return 'light';
  }
  return undefined;
}
function processState(state, callback) {
  if (state.mode === 'light' || state.mode === 'system' && state.systemMode === 'light') {
    return callback('light');
  }
  if (state.mode === 'dark' || state.mode === 'system' && state.systemMode === 'dark') {
    return callback('dark');
  }
  return undefined;
}
function getColorScheme(state) {
  return processState(state, mode => {
    if (mode === 'light') {
      return state.lightColorScheme;
    }
    if (mode === 'dark') {
      return state.darkColorScheme;
    }
    return undefined;
  });
}
function initializeValue(key, defaultValue) {
  if (typeof window === 'undefined') {
    return undefined;
  }
  let value;
  try {
    value = localStorage.getItem(key) || undefined;
    if (!value) {
      // the first time that user enters the site.
      localStorage.setItem(key, defaultValue);
    }
  } catch {
    // Unsupported
  }
  return value || defaultValue;
}
function useCurrentColorScheme(options) {
  const {
    defaultMode = 'light',
    defaultLightColorScheme,
    defaultDarkColorScheme,
    supportedColorSchemes = [],
    modeStorageKey = DEFAULT_MODE_STORAGE_KEY,
    colorSchemeStorageKey = DEFAULT_COLOR_SCHEME_STORAGE_KEY,
    storageWindow = typeof window === 'undefined' ? undefined : window
  } = options;
  const joinedColorSchemes = supportedColorSchemes.join(',');
  const isMultiSchemes = supportedColorSchemes.length > 1;
  const [state, setState] = React.useState(() => {
    const initialMode = initializeValue(modeStorageKey, defaultMode);
    const lightColorScheme = initializeValue(`${colorSchemeStorageKey}-light`, defaultLightColorScheme);
    const darkColorScheme = initializeValue(`${colorSchemeStorageKey}-dark`, defaultDarkColorScheme);
    return {
      mode: initialMode,
      systemMode: getSystemMode(initialMode),
      lightColorScheme,
      darkColorScheme
    };
  });
  // This could be improved with `React.useSyncExternalStore` in the future.
  const [, setHasMounted] = React.useState(false);
  const hasMounted = React.useRef(false);
  React.useEffect(() => {
    if (isMultiSchemes) {
      setHasMounted(true); // to rerender the component after hydration
    }
    hasMounted.current = true;
  }, [isMultiSchemes]);
  const colorScheme = getColorScheme(state);
  const setMode = React.useCallback(mode => {
    setState(currentState => {
      if (mode === currentState.mode) {
        // do nothing if mode does not change
        return currentState;
      }
      const newMode = mode ?? defaultMode;
      try {
        localStorage.setItem(modeStorageKey, newMode);
      } catch {
        // Unsupported
      }
      return {
        ...currentState,
        mode: newMode,
        systemMode: getSystemMode(newMode)
      };
    });
  }, [modeStorageKey, defaultMode]);
  const setColorScheme = React.useCallback(value => {
    if (!value) {
      setState(currentState => {
        try {
          localStorage.setItem(`${colorSchemeStorageKey}-light`, defaultLightColorScheme);
          localStorage.setItem(`${colorSchemeStorageKey}-dark`, defaultDarkColorScheme);
        } catch {
          // Unsupported
        }
        return {
          ...currentState,
          lightColorScheme: defaultLightColorScheme,
          darkColorScheme: defaultDarkColorScheme
        };
      });
    } else if (typeof value === 'string') {
      if (value && !joinedColorSchemes.includes(value)) {
        console.error(`\`${value}\` does not exist in \`theme.colorSchemes\`.`);
      } else {
        setState(currentState => {
          const newState = {
            ...currentState
          };
          processState(currentState, mode => {
            try {
              localStorage.setItem(`${colorSchemeStorageKey}-${mode}`, value);
            } catch {
              // Unsupported
            }
            if (mode === 'light') {
              newState.lightColorScheme = value;
            }
            if (mode === 'dark') {
              newState.darkColorScheme = value;
            }
          });
          return newState;
        });
      }
    } else {
      setState(currentState => {
        const newState = {
          ...currentState
        };
        const newLightColorScheme = value.light === null ? defaultLightColorScheme : value.light;
        const newDarkColorScheme = value.dark === null ? defaultDarkColorScheme : value.dark;
        if (newLightColorScheme) {
          if (!joinedColorSchemes.includes(newLightColorScheme)) {
            console.error(`\`${newLightColorScheme}\` does not exist in \`theme.colorSchemes\`.`);
          } else {
            newState.lightColorScheme = newLightColorScheme;
            try {
              localStorage.setItem(`${colorSchemeStorageKey}-light`, newLightColorScheme);
            } catch (error) {
              // Unsupported
            }
          }
        }
        if (newDarkColorScheme) {
          if (!joinedColorSchemes.includes(newDarkColorScheme)) {
            console.error(`\`${newDarkColorScheme}\` does not exist in \`theme.colorSchemes\`.`);
          } else {
            newState.darkColorScheme = newDarkColorScheme;
            try {
              localStorage.setItem(`${colorSchemeStorageKey}-dark`, newDarkColorScheme);
            } catch (error) {
              // Unsupported
            }
          }
        }
        return newState;
      });
    }
  }, [joinedColorSchemes, colorSchemeStorageKey, defaultLightColorScheme, defaultDarkColorScheme]);
  const handleMediaQuery = React.useCallback(event => {
    if (state.mode === 'system') {
      setState(currentState => {
        const systemMode = event?.matches ? 'dark' : 'light';

        // Early exit, nothing changed.
        if (currentState.systemMode === systemMode) {
          return currentState;
        }
        return {
          ...currentState,
          systemMode
        };
      });
    }
  }, [state.mode]);

  // Ref hack to avoid adding handleMediaQuery as a dep
  const mediaListener = React.useRef(handleMediaQuery);
  mediaListener.current = handleMediaQuery;
  React.useEffect(() => {
    if (typeof window.matchMedia !== 'function' || !isMultiSchemes) {
      return undefined;
    }
    const handler = (...args) => mediaListener.current(...args);

    // Always listen to System preference
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    // Intentionally use deprecated listener methods to support iOS & old browsers
    media.addListener(handler);
    handler(media);
    return () => {
      media.removeListener(handler);
    };
  }, [isMultiSchemes]);

  // Handle when localStorage has changed
  React.useEffect(() => {
    if (storageWindow && isMultiSchemes) {
      const handleStorage = event => {
        const value = event.newValue;
        if (typeof event.key === 'string' && event.key.startsWith(colorSchemeStorageKey) && (!value || joinedColorSchemes.match(value))) {
          // If the key is deleted, value will be null then reset color scheme to the default one.
          if (event.key.endsWith('light')) {
            setColorScheme({
              light: value
            });
          }
          if (event.key.endsWith('dark')) {
            setColorScheme({
              dark: value
            });
          }
        }
        if (event.key === modeStorageKey && (!value || ['light', 'dark', 'system'].includes(value))) {
          setMode(value || defaultMode);
        }
      };
      // For syncing color-scheme changes between iframes
      storageWindow.addEventListener('storage', handleStorage);
      return () => {
        storageWindow.removeEventListener('storage', handleStorage);
      };
    }
    return undefined;
  }, [setColorScheme, setMode, modeStorageKey, colorSchemeStorageKey, joinedColorSchemes, defaultMode, storageWindow, isMultiSchemes]);
  return {
    ...state,
    mode: hasMounted.current || !isMultiSchemes ? state.mode : undefined,
    systemMode: hasMounted.current || !isMultiSchemes ? state.systemMode : undefined,
    colorScheme: hasMounted.current || !isMultiSchemes ? colorScheme : undefined,
    setMode,
    setColorScheme
  };
}

const DISABLE_CSS_TRANSITION = '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}';
function createCssVarsProvider(options) {
  const {
    themeId,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: defaultTheme = {},
    modeStorageKey: defaultModeStorageKey = DEFAULT_MODE_STORAGE_KEY,
    colorSchemeStorageKey: defaultColorSchemeStorageKey = DEFAULT_COLOR_SCHEME_STORAGE_KEY,
    disableTransitionOnChange: designSystemTransitionOnChange = false,
    defaultColorScheme,
    resolveTheme
  } = options;
  const defaultContext = {
    allColorSchemes: [],
    colorScheme: undefined,
    darkColorScheme: undefined,
    lightColorScheme: undefined,
    mode: undefined,
    setColorScheme: () => {},
    setMode: () => {},
    systemMode: undefined
  };
  const ColorSchemeContext = /*#__PURE__*/React.createContext(undefined);
  if (process.env.NODE_ENV !== 'production') {
    ColorSchemeContext.displayName = 'ColorSchemeContext';
  }
  const useColorScheme = () => React.useContext(ColorSchemeContext) || defaultContext;
  function CssVarsProvider(props) {
    const {
      children,
      theme: themeProp,
      modeStorageKey = defaultModeStorageKey,
      colorSchemeStorageKey = defaultColorSchemeStorageKey,
      disableTransitionOnChange = designSystemTransitionOnChange,
      storageWindow = typeof window === 'undefined' ? undefined : window,
      documentNode = typeof document === 'undefined' ? undefined : document,
      colorSchemeNode = typeof document === 'undefined' ? undefined : document.documentElement,
      disableNestedContext = false,
      disableStyleSheetGeneration = false,
      defaultMode: initialMode = 'system'
    } = props;
    const hasMounted = React.useRef(false);
    const upperTheme = useTheme();
    const ctx = React.useContext(ColorSchemeContext);
    const nested = !!ctx && !disableNestedContext;
    const initialTheme = React.useMemo(() => {
      if (themeProp) {
        return themeProp;
      }
      return typeof defaultTheme === 'function' ? defaultTheme() : defaultTheme;
    }, [themeProp]);
    const scopedTheme = initialTheme[themeId];
    const {
      colorSchemes = {},
      components = {},
      cssVarPrefix,
      ...restThemeProp
    } = scopedTheme || initialTheme;
    const joinedColorSchemes = Object.keys(colorSchemes).filter(k => !!colorSchemes[k]).join(',');
    const allColorSchemes = React.useMemo(() => joinedColorSchemes.split(','), [joinedColorSchemes]);
    const defaultLightColorScheme = typeof defaultColorScheme === 'string' ? defaultColorScheme : defaultColorScheme.light;
    const defaultDarkColorScheme = typeof defaultColorScheme === 'string' ? defaultColorScheme : defaultColorScheme.dark;
    const defaultMode = colorSchemes[defaultLightColorScheme] && colorSchemes[defaultDarkColorScheme] ? initialMode : colorSchemes[restThemeProp.defaultColorScheme]?.palette?.mode || restThemeProp.palette?.mode;

    // 1. Get the data about the `mode`, `colorScheme`, and setter functions.
    const {
      mode: stateMode,
      setMode,
      systemMode,
      lightColorScheme,
      darkColorScheme,
      colorScheme: stateColorScheme,
      setColorScheme
    } = useCurrentColorScheme({
      supportedColorSchemes: allColorSchemes,
      defaultLightColorScheme,
      defaultDarkColorScheme,
      modeStorageKey,
      colorSchemeStorageKey,
      defaultMode,
      storageWindow
    });
    let mode = stateMode;
    let colorScheme = stateColorScheme;
    if (nested) {
      mode = ctx.mode;
      colorScheme = ctx.colorScheme;
    }

    // `colorScheme` is undefined on the server and hydration phase
    const calculatedColorScheme = colorScheme || restThemeProp.defaultColorScheme;

    // 2. get the `vars` object that refers to the CSS custom properties
    const themeVars = restThemeProp.generateThemeVars?.() || restThemeProp.vars;

    // 3. Start composing the theme object
    const theme = {
      ...restThemeProp,
      components,
      colorSchemes,
      cssVarPrefix,
      vars: themeVars
    };
    if (typeof theme.generateSpacing === 'function') {
      theme.spacing = theme.generateSpacing();
    }

    // 4. Resolve the color scheme and merge it to the theme
    if (calculatedColorScheme) {
      const scheme = colorSchemes[calculatedColorScheme];
      if (scheme && typeof scheme === 'object') {
        // 4.1 Merge the selected color scheme to the theme
        Object.keys(scheme).forEach(schemeKey => {
          if (scheme[schemeKey] && typeof scheme[schemeKey] === 'object') {
            // shallow merge the 1st level structure of the theme.
            theme[schemeKey] = {
              ...theme[schemeKey],
              ...scheme[schemeKey]
            };
          } else {
            theme[schemeKey] = scheme[schemeKey];
          }
        });
      }
    }

    // 5. Declaring effects
    // 5.1 Updates the selector value to use the current color scheme which tells CSS to use the proper stylesheet.
    const colorSchemeSelector = restThemeProp.colorSchemeSelector;
    React.useEffect(() => {
      if (colorScheme && colorSchemeNode && colorSchemeSelector && colorSchemeSelector !== 'media') {
        const selector = colorSchemeSelector;
        let rule = colorSchemeSelector;
        if (selector === 'class') {
          rule = `.%s`;
        }
        if (selector === 'data') {
          rule = `[data-%s]`;
        }
        if (selector?.startsWith('data-') && !selector.includes('%s')) {
          // 'data-mui-color-scheme' -> '[data-mui-color-scheme="%s"]'
          rule = `[${selector}="%s"]`;
        }
        if (rule.startsWith('.')) {
          colorSchemeNode.classList.remove(...allColorSchemes.map(scheme => rule.substring(1).replace('%s', scheme)));
          colorSchemeNode.classList.add(rule.substring(1).replace('%s', colorScheme));
        } else {
          const matches = rule.replace('%s', colorScheme).match(/\[([^\]]+)\]/);
          if (matches) {
            const [attr, value] = matches[1].split('=');
            if (!value) {
              // for attributes like `data-theme-dark`, `data-theme-light`
              // remove all the existing data attributes before setting the new one
              allColorSchemes.forEach(scheme => {
                colorSchemeNode.removeAttribute(attr.replace(colorScheme, scheme));
              });
            }
            colorSchemeNode.setAttribute(attr, value ? value.replace(/"|'/g, '') : '');
          } else {
            colorSchemeNode.setAttribute(rule, colorScheme);
          }
        }
      }
    }, [colorScheme, colorSchemeSelector, colorSchemeNode, allColorSchemes]);

    // 5.2 Remove the CSS transition when color scheme changes to create instant experience.
    // credit: https://github.com/pacocoursey/next-themes/blob/b5c2bad50de2d61ad7b52a9c5cdc801a78507d7a/index.tsx#L313
    React.useEffect(() => {
      let timer;
      if (disableTransitionOnChange && hasMounted.current && documentNode) {
        const css = documentNode.createElement('style');
        css.appendChild(documentNode.createTextNode(DISABLE_CSS_TRANSITION));
        documentNode.head.appendChild(css);

        // Force browser repaint
        (() => window.getComputedStyle(documentNode.body))();
        timer = setTimeout(() => {
          documentNode.head.removeChild(css);
        }, 1);
      }
      return () => {
        clearTimeout(timer);
      };
    }, [colorScheme, disableTransitionOnChange, documentNode]);
    React.useEffect(() => {
      hasMounted.current = true;
      return () => {
        hasMounted.current = false;
      };
    }, []);
    const contextValue = React.useMemo(() => ({
      allColorSchemes,
      colorScheme,
      darkColorScheme,
      lightColorScheme,
      mode,
      setColorScheme,
      setMode,
      systemMode
    }), [allColorSchemes, colorScheme, darkColorScheme, lightColorScheme, mode, setColorScheme, setMode, systemMode]);
    let shouldGenerateStyleSheet = true;
    if (disableStyleSheetGeneration || restThemeProp.cssVariables === false || nested && upperTheme?.cssVarPrefix === cssVarPrefix) {
      shouldGenerateStyleSheet = false;
    }
    const element = /*#__PURE__*/jsxRuntimeExports.jsxs(React.Fragment, {
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(ThemeProvider$1, {
        themeId: scopedTheme ? themeId : undefined,
        theme: resolveTheme ? resolveTheme(theme) : theme,
        children: children
      }), shouldGenerateStyleSheet && /*#__PURE__*/jsxRuntimeExports.jsx(GlobalStyles, {
        styles: theme.generateStyleSheets?.() || []
      })]
    });
    if (nested) {
      return element;
    }
    return /*#__PURE__*/jsxRuntimeExports.jsx(ColorSchemeContext.Provider, {
      value: contextValue,
      children: element
    });
  }
  process.env.NODE_ENV !== "production" ? CssVarsProvider.propTypes = {
    /**
     * The component tree.
     */
    children: PropTypes.node,
    /**
     * The node used to attach the color-scheme attribute
     */
    colorSchemeNode: PropTypes.any,
    /**
     * localStorage key used to store `colorScheme`
     */
    colorSchemeStorageKey: PropTypes.string,
    /**
     * The default mode when the storage is empty,
     * require the theme to have `colorSchemes` with light and dark.
     */
    defaultMode: PropTypes.string,
    /**
     * If `true`, the provider creates its own context and generate stylesheet as if it is a root `CssVarsProvider`.
     */
    disableNestedContext: PropTypes.bool,
    /**
     * If `true`, the style sheet won't be generated.
     *
     * This is useful for controlling nested CssVarsProvider behavior.
     */
    disableStyleSheetGeneration: PropTypes.bool,
    /**
     * Disable CSS transitions when switching between modes or color schemes.
     */
    disableTransitionOnChange: PropTypes.bool,
    /**
     * The document to attach the attribute to.
     */
    documentNode: PropTypes.any,
    /**
     * The key in the local storage used to store current color scheme.
     */
    modeStorageKey: PropTypes.string,
    /**
     * The window that attaches the 'storage' event listener.
     * @default window
     */
    storageWindow: PropTypes.any,
    /**
     * The calculated theme object that will be passed through context.
     */
    theme: PropTypes.object
  } : void 0;
  const defaultLightColorScheme = typeof defaultColorScheme === 'string' ? defaultColorScheme : defaultColorScheme.light;
  const defaultDarkColorScheme = typeof defaultColorScheme === 'string' ? defaultColorScheme : defaultColorScheme.dark;
  const getInitColorSchemeScript = params => InitColorSchemeScript({
    colorSchemeStorageKey: defaultColorSchemeStorageKey,
    defaultLightColorScheme,
    defaultDarkColorScheme,
    modeStorageKey: defaultModeStorageKey,
    ...params
  });
  return {
    CssVarsProvider,
    useColorScheme,
    getInitColorSchemeScript
  };
}

/**
 * The benefit of this function is to help developers get CSS var from theme without specifying the whole variable
 * and they does not need to remember the prefix (defined once).
 */
function createGetCssVar$1(prefix = '') {
  function appendVar(...vars) {
    if (!vars.length) {
      return '';
    }
    const value = vars[0];
    if (typeof value === 'string' && !value.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)) {
      return `, var(--${prefix ? `${prefix}-` : ''}${value}${appendVar(...vars.slice(1))})`;
    }
    return `, ${value}`;
  }

  // AdditionalVars makes `getCssVar` less strict, so it can be use like this `getCssVar('non-mui-variable')` without type error.
  const getCssVar = (field, ...fallbacks) => {
    return `var(--${prefix ? `${prefix}-` : ''}${field}${appendVar(...fallbacks)})`;
  };
  return getCssVar;
}

/**
 * This function create an object from keys, value and then assign to target
 *
 * @param {Object} obj : the target object to be assigned
 * @param {string[]} keys
 * @param {string | number} value
 *
 * @example
 * const source = {}
 * assignNestedKeys(source, ['palette', 'primary'], 'var(--palette-primary)')
 * console.log(source) // { palette: { primary: 'var(--palette-primary)' } }
 *
 * @example
 * const source = { palette: { primary: 'var(--palette-primary)' } }
 * assignNestedKeys(source, ['palette', 'secondary'], 'var(--palette-secondary)')
 * console.log(source) // { palette: { primary: 'var(--palette-primary)', secondary: 'var(--palette-secondary)' } }
 */
const assignNestedKeys = (obj, keys, value, arrayKeys = []) => {
  let temp = obj;
  keys.forEach((k, index) => {
    if (index === keys.length - 1) {
      if (Array.isArray(temp)) {
        temp[Number(k)] = value;
      } else if (temp && typeof temp === 'object') {
        temp[k] = value;
      }
    } else if (temp && typeof temp === 'object') {
      if (!temp[k]) {
        temp[k] = arrayKeys.includes(k) ? [] : {};
      }
      temp = temp[k];
    }
  });
};

/**
 *
 * @param {Object} obj : source object
 * @param {Function} callback : a function that will be called when
 *                   - the deepest key in source object is reached
 *                   - the value of the deepest key is NOT `undefined` | `null`
 *
 * @example
 * walkObjectDeep({ palette: { primary: { main: '#000000' } } }, console.log)
 * // ['palette', 'primary', 'main'] '#000000'
 */
const walkObjectDeep = (obj, callback, shouldSkipPaths) => {
  function recurse(object, parentKeys = [], arrayKeys = []) {
    Object.entries(object).forEach(([key, value]) => {
      if (!shouldSkipPaths || shouldSkipPaths && !shouldSkipPaths([...parentKeys, key])) {
        if (value !== undefined && value !== null) {
          if (typeof value === 'object' && Object.keys(value).length > 0) {
            recurse(value, [...parentKeys, key], Array.isArray(value) ? [...arrayKeys, key] : arrayKeys);
          } else {
            callback([...parentKeys, key], value, arrayKeys);
          }
        }
      }
    });
  }
  recurse(obj);
};
const getCssValue = (keys, value) => {
  if (typeof value === 'number') {
    if (['lineHeight', 'fontWeight', 'opacity', 'zIndex'].some(prop => keys.includes(prop))) {
      // CSS property that are unitless
      return value;
    }
    const lastKey = keys[keys.length - 1];
    if (lastKey.toLowerCase().includes('opacity')) {
      // opacity values are unitless
      return value;
    }
    return `${value}px`;
  }
  return value;
};

/**
 * a function that parse theme and return { css, vars }
 *
 * @param {Object} theme
 * @param {{
 *  prefix?: string,
 *  shouldSkipGeneratingVar?: (objectPathKeys: Array<string>, value: string | number) => boolean
 * }} options.
 *  `prefix`: The prefix of the generated CSS variables. This function does not change the value.
 *
 * @returns {{ css: Object, vars: Object }} `css` is the stylesheet, `vars` is an object to get css variable (same structure as theme).
 *
 * @example
 * const { css, vars } = parser({
 *   fontSize: 12,
 *   lineHeight: 1.2,
 *   palette: { primary: { 500: 'var(--color)' } }
 * }, { prefix: 'foo' })
 *
 * console.log(css) // { '--foo-fontSize': '12px', '--foo-lineHeight': 1.2, '--foo-palette-primary-500': 'var(--color)' }
 * console.log(vars) // { fontSize: 'var(--foo-fontSize)', lineHeight: 'var(--foo-lineHeight)', palette: { primary: { 500: 'var(--foo-palette-primary-500)' } } }
 */
function cssVarsParser(theme, options) {
  const {
    prefix,
    shouldSkipGeneratingVar
  } = options || {};
  const css = {};
  const vars = {};
  const varsWithDefaults = {};
  walkObjectDeep(theme, (keys, value, arrayKeys) => {
    if (typeof value === 'string' || typeof value === 'number') {
      if (!shouldSkipGeneratingVar || !shouldSkipGeneratingVar(keys, value)) {
        // only create css & var if `shouldSkipGeneratingVar` return false
        const cssVar = `--${prefix ? `${prefix}-` : ''}${keys.join('-')}`;
        const resolvedValue = getCssValue(keys, value);
        Object.assign(css, {
          [cssVar]: resolvedValue
        });
        assignNestedKeys(vars, keys, `var(${cssVar})`, arrayKeys);
        assignNestedKeys(varsWithDefaults, keys, `var(${cssVar}, ${resolvedValue})`, arrayKeys);
      }
    }
  }, keys => keys[0] === 'vars' // skip 'vars/*' paths
  );
  return {
    css,
    vars,
    varsWithDefaults
  };
}

function prepareCssVars(theme, parserConfig = {}) {
  const {
    getSelector = defaultGetSelector,
    disableCssColorScheme,
    colorSchemeSelector: selector
  } = parserConfig;
  // @ts-ignore - ignore components do not exist
  const {
    colorSchemes = {},
    components,
    defaultColorScheme = 'light',
    ...otherTheme
  } = theme;
  const {
    vars: rootVars,
    css: rootCss,
    varsWithDefaults: rootVarsWithDefaults
  } = cssVarsParser(otherTheme, parserConfig);
  let themeVars = rootVarsWithDefaults;
  const colorSchemesMap = {};
  const {
    [defaultColorScheme]: defaultScheme,
    ...otherColorSchemes
  } = colorSchemes;
  Object.entries(otherColorSchemes || {}).forEach(([key, scheme]) => {
    const {
      vars,
      css,
      varsWithDefaults
    } = cssVarsParser(scheme, parserConfig);
    themeVars = deepmerge(themeVars, varsWithDefaults);
    colorSchemesMap[key] = {
      css,
      vars
    };
  });
  if (defaultScheme) {
    // default color scheme vars should be merged last to set as default
    const {
      css,
      vars,
      varsWithDefaults
    } = cssVarsParser(defaultScheme, parserConfig);
    themeVars = deepmerge(themeVars, varsWithDefaults);
    colorSchemesMap[defaultColorScheme] = {
      css,
      vars
    };
  }
  function defaultGetSelector(colorScheme, cssObject) {
    let rule = selector;
    if (selector === 'class') {
      rule = '.%s';
    }
    if (selector === 'data') {
      rule = '[data-%s]';
    }
    if (selector?.startsWith('data-') && !selector.includes('%s')) {
      // 'data-joy-color-scheme' -> '[data-joy-color-scheme="%s"]'
      rule = `[${selector}="%s"]`;
    }
    if (colorScheme) {
      if (rule === 'media') {
        if (theme.defaultColorScheme === colorScheme) {
          return ':root';
        }
        const mode = colorSchemes[colorScheme]?.palette?.mode || colorScheme;
        return {
          [`@media (prefers-color-scheme: ${mode})`]: {
            ':root': cssObject
          }
        };
      }
      if (rule) {
        if (theme.defaultColorScheme === colorScheme) {
          return `:root, ${rule.replace('%s', String(colorScheme))}`;
        }
        return rule.replace('%s', String(colorScheme));
      }
    }
    return ':root';
  }
  const generateThemeVars = () => {
    let vars = {
      ...rootVars
    };
    Object.entries(colorSchemesMap).forEach(([, {
      vars: schemeVars
    }]) => {
      vars = deepmerge(vars, schemeVars);
    });
    return vars;
  };
  const generateStyleSheets = () => {
    const stylesheets = [];
    const colorScheme = theme.defaultColorScheme || 'light';
    function insertStyleSheet(key, css) {
      if (Object.keys(css).length) {
        stylesheets.push(typeof key === 'string' ? {
          [key]: {
            ...css
          }
        } : key);
      }
    }
    insertStyleSheet(getSelector(undefined, {
      ...rootCss
    }), rootCss);
    const {
      [colorScheme]: defaultSchemeVal,
      ...other
    } = colorSchemesMap;
    if (defaultSchemeVal) {
      // default color scheme has to come before other color schemes
      const {
        css
      } = defaultSchemeVal;
      const cssColorSheme = colorSchemes[colorScheme]?.palette?.mode;
      const finalCss = !disableCssColorScheme && cssColorSheme ? {
        colorScheme: cssColorSheme,
        ...css
      } : {
        ...css
      };
      insertStyleSheet(getSelector(colorScheme, {
        ...finalCss
      }), finalCss);
    }
    Object.entries(other).forEach(([key, {
      css
    }]) => {
      const cssColorSheme = colorSchemes[key]?.palette?.mode;
      const finalCss = !disableCssColorScheme && cssColorSheme ? {
        colorScheme: cssColorSheme,
        ...css
      } : {
        ...css
      };
      insertStyleSheet(getSelector(key, {
        ...finalCss
      }), finalCss);
    });
    return stylesheets;
  };
  return {
    vars: themeVars,
    generateThemeVars,
    generateStyleSheets
  };
}

/* eslint-disable import/prefer-default-export */
function createGetColorSchemeSelector(selector) {
  return function getColorSchemeSelector(colorScheme) {
    if (selector === 'media') {
      if (process.env.NODE_ENV !== 'production') {
        if (colorScheme !== 'light' && colorScheme !== 'dark') {
          console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${colorScheme}'.`);
        }
      }
      return `@media (prefers-color-scheme: ${colorScheme})`;
    }
    if (selector) {
      if (selector.startsWith('data-') && !selector.includes('%s')) {
        return `[${selector}="${colorScheme}"] &`;
      }
      if (selector === 'class') {
        return `.${colorScheme} &`;
      }
      if (selector === 'data') {
        return `[data-${colorScheme}] &`;
      }
      return `${selector.replace('%s', colorScheme)} &`;
    }
    return '&';
  };
}

const common = {
  black: '#000',
  white: '#fff'
};
var common$1 = common;

const grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#f5f5f5',
  A200: '#eeeeee',
  A400: '#bdbdbd',
  A700: '#616161'
};
var grey$1 = grey;

const purple = {
  50: '#f3e5f5',
  100: '#e1bee7',
  200: '#ce93d8',
  300: '#ba68c8',
  400: '#ab47bc',
  500: '#9c27b0',
  600: '#8e24aa',
  700: '#7b1fa2',
  800: '#6a1b9a',
  900: '#4a148c',
  A100: '#ea80fc',
  A200: '#e040fb',
  A400: '#d500f9',
  A700: '#aa00ff'
};
var purple$1 = purple;

const red = {
  50: '#ffebee',
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
  A100: '#ff8a80',
  A200: '#ff5252',
  A400: '#ff1744',
  A700: '#d50000'
};
var red$1 = red;

const orange = {
  50: '#fff3e0',
  100: '#ffe0b2',
  200: '#ffcc80',
  300: '#ffb74d',
  400: '#ffa726',
  500: '#ff9800',
  600: '#fb8c00',
  700: '#f57c00',
  800: '#ef6c00',
  900: '#e65100',
  A100: '#ffd180',
  A200: '#ffab40',
  A400: '#ff9100',
  A700: '#ff6d00'
};
var orange$1 = orange;

const blue = {
  50: '#e3f2fd',
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6',
  400: '#42a5f5',
  500: '#2196f3',
  600: '#1e88e5',
  700: '#1976d2',
  800: '#1565c0',
  900: '#0d47a1',
  A100: '#82b1ff',
  A200: '#448aff',
  A400: '#2979ff',
  A700: '#2962ff'
};
var blue$1 = blue;

const lightBlue = {
  50: '#e1f5fe',
  100: '#b3e5fc',
  200: '#81d4fa',
  300: '#4fc3f7',
  400: '#29b6f6',
  500: '#03a9f4',
  600: '#039be5',
  700: '#0288d1',
  800: '#0277bd',
  900: '#01579b',
  A100: '#80d8ff',
  A200: '#40c4ff',
  A400: '#00b0ff',
  A700: '#0091ea'
};
var lightBlue$1 = lightBlue;

const green = {
  50: '#e8f5e9',
  100: '#c8e6c9',
  200: '#a5d6a7',
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  600: '#43a047',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20',
  A100: '#b9f6ca',
  A200: '#69f0ae',
  A400: '#00e676',
  A700: '#00c853'
};
var green$1 = green;

function getLight() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: 'rgba(0, 0, 0, 0.87)',
      // Secondary text.
      secondary: 'rgba(0, 0, 0, 0.6)',
      // Disabled text have even lower visual prominence.
      disabled: 'rgba(0, 0, 0, 0.38)'
    },
    // The color used to divide different elements.
    divider: 'rgba(0, 0, 0, 0.12)',
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: common$1.white,
      default: common$1.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: 'rgba(0, 0, 0, 0.54)',
      // The color of an hovered action.
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: 'rgba(0, 0, 0, 0.26)',
      // The background color of a disabled action.
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const light = getLight();
function getDark() {
  return {
    text: {
      primary: common$1.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)'
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: {
      paper: '#121212',
      default: '#121212'
    },
    action: {
      active: common$1.white,
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const dark = getDark();
function addLightOrDark(intent, direction, shade, tonalOffset) {
  const tonalOffsetLight = tonalOffset.light || tonalOffset;
  const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === 'light') {
      intent.light = lighten(intent.main, tonalOffsetLight);
    } else if (direction === 'dark') {
      intent.dark = darken(intent.main, tonalOffsetDark);
    }
  }
}
function getDefaultPrimary(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: blue$1[200],
      light: blue$1[50],
      dark: blue$1[400]
    };
  }
  return {
    main: blue$1[700],
    light: blue$1[400],
    dark: blue$1[800]
  };
}
function getDefaultSecondary(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: purple$1[200],
      light: purple$1[50],
      dark: purple$1[400]
    };
  }
  return {
    main: purple$1[500],
    light: purple$1[300],
    dark: purple$1[700]
  };
}
function getDefaultError(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: red$1[500],
      light: red$1[300],
      dark: red$1[700]
    };
  }
  return {
    main: red$1[700],
    light: red$1[400],
    dark: red$1[800]
  };
}
function getDefaultInfo(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: lightBlue$1[400],
      light: lightBlue$1[300],
      dark: lightBlue$1[700]
    };
  }
  return {
    main: lightBlue$1[700],
    light: lightBlue$1[500],
    dark: lightBlue$1[900]
  };
}
function getDefaultSuccess(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: green$1[400],
      light: green$1[300],
      dark: green$1[700]
    };
  }
  return {
    main: green$1[800],
    light: green$1[500],
    dark: green$1[900]
  };
}
function getDefaultWarning(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: orange$1[400],
      light: orange$1[300],
      dark: orange$1[700]
    };
  }
  return {
    main: '#ed6c02',
    // closest to orange[800] that pass 3:1.
    light: orange$1[500],
    dark: orange$1[900]
  };
}
function createPalette(palette) {
  const {
    mode = 'light',
    contrastThreshold = 3,
    tonalOffset = 0.2,
    ...other
  } = palette;
  const primary = palette.primary || getDefaultPrimary(mode);
  const secondary = palette.secondary || getDefaultSecondary(mode);
  const error = palette.error || getDefaultError(mode);
  const info = palette.info || getDefaultInfo(mode);
  const success = palette.success || getDefaultSuccess(mode);
  const warning = palette.warning || getDefaultWarning(mode);

  // Use the same logic as
  // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
  // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54
  function getContrastText(background) {
    const contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
    if (process.env.NODE_ENV !== 'production') {
      const contrast = getContrastRatio(background, contrastText);
      if (contrast < 3) {
        console.error([`MUI: The contrast ratio of ${contrast}:1 for ${contrastText} on ${background}`, 'falls below the WCAG recommended absolute minimum contrast ratio of 3:1.', 'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast'].join('\n'));
      }
    }
    return contrastText;
  }
  const augmentColor = ({
    color,
    name,
    mainShade = 500,
    lightShade = 300,
    darkShade = 700
  }) => {
    color = {
      ...color
    };
    if (!color.main && color[mainShade]) {
      color.main = color[mainShade];
    }
    if (!color.hasOwnProperty('main')) {
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${name ? ` (${name})` : ''} provided to augmentColor(color) is invalid.\n` + `The color object needs to have a \`main\` property or a \`${mainShade}\` property.` : formatMuiErrorMessage(11, name ? ` (${name})` : '', mainShade));
    }
    if (typeof color.main !== 'string') {
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${name ? ` (${name})` : ''} provided to augmentColor(color) is invalid.\n` + `\`color.main\` should be a string, but \`${JSON.stringify(color.main)}\` was provided instead.\n` + '\n' + 'Did you intend to use one of the following approaches?\n' + '\n' + 'import { green } from "@mui/material/colors";\n' + '\n' + 'const theme1 = createTheme({ palette: {\n' + '  primary: green,\n' + '} });\n' + '\n' + 'const theme2 = createTheme({ palette: {\n' + '  primary: { main: green[500] },\n' + '} });' : formatMuiErrorMessage(12, name ? ` (${name})` : '', JSON.stringify(color.main)));
    }
    addLightOrDark(color, 'light', lightShade, tonalOffset);
    addLightOrDark(color, 'dark', darkShade, tonalOffset);
    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }
    return color;
  };
  let modeHydrated;
  if (mode === 'light') {
    modeHydrated = getLight();
  } else if (mode === 'dark') {
    modeHydrated = getDark();
  }
  if (process.env.NODE_ENV !== 'production') {
    if (!modeHydrated) {
      console.error(`MUI: The palette mode \`${mode}\` is not supported.`);
    }
  }
  const paletteOutput = deepmerge({
    // A collection of common colors.
    common: {
      ...common$1
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode,
    // The colors used to represent primary interface elements for a user.
    primary: augmentColor({
      color: primary,
      name: 'primary'
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: augmentColor({
      color: secondary,
      name: 'secondary',
      mainShade: 'A400',
      lightShade: 'A200',
      darkShade: 'A700'
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: augmentColor({
      color: error,
      name: 'error'
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: augmentColor({
      color: warning,
      name: 'warning'
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: augmentColor({
      color: info,
      name: 'info'
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: augmentColor({
      color: success,
      name: 'success'
    }),
    // The grey colors.
    grey: grey$1,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText,
    // Generate a rich color object.
    augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset,
    // The light and dark mode object.
    ...modeHydrated
  }, other);
  return paletteOutput;
}

function prepareTypographyVars(typography) {
  const vars = {};
  const entries = Object.entries(typography);
  entries.forEach(entry => {
    const [key, value] = entry;
    if (typeof value === 'object') {
      vars[key] = `${value.fontStyle ? `${value.fontStyle} ` : ''}${value.fontVariant ? `${value.fontVariant} ` : ''}${value.fontWeight ? `${value.fontWeight} ` : ''}${value.fontStretch ? `${value.fontStretch} ` : ''}${value.fontSize || ''}${value.lineHeight ? `/${value.lineHeight} ` : ''}${value.fontFamily || ''}`;
    }
  });
  return vars;
}

function createMixins(breakpoints, mixins) {
  return {
    toolbar: {
      minHeight: 56,
      [breakpoints.up('xs')]: {
        '@media (orientation: landscape)': {
          minHeight: 48
        }
      },
      [breakpoints.up('sm')]: {
        minHeight: 64
      }
    },
    ...mixins
  };
}

function round(value) {
  return Math.round(value * 1e5) / 1e5;
}
const caseAllCaps = {
  textTransform: 'uppercase'
};
const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';

/**
 * @see @link{https://m2.material.io/design/typography/the-type-system.html}
 * @see @link{https://m2.material.io/design/typography/understanding-typography.html}
 */
function createTypography(palette, typography) {
  const {
    fontFamily = defaultFontFamily,
    // The default font size of the Material Specification.
    fontSize = 14,
    // px
    fontWeightLight = 300,
    fontWeightRegular = 400,
    fontWeightMedium = 500,
    fontWeightBold = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize = 16,
    // Apply the CSS properties to all the variants.
    allVariants,
    pxToRem: pxToRem2,
    ...other
  } = typeof typography === 'function' ? typography(palette) : typography;
  if (process.env.NODE_ENV !== 'production') {
    if (typeof fontSize !== 'number') {
      console.error('MUI: `fontSize` is required to be a number.');
    }
    if (typeof htmlFontSize !== 'number') {
      console.error('MUI: `htmlFontSize` is required to be a number.');
    }
  }
  const coef = fontSize / 14;
  const pxToRem = pxToRem2 || (size => `${size / htmlFontSize * coef}rem`);
  const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => ({
    fontFamily,
    fontWeight,
    fontSize: pxToRem(size),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...(fontFamily === defaultFontFamily ? {
      letterSpacing: `${round(letterSpacing / size)}em`
    } : {}),
    ...casing,
    ...allVariants
  });
  const variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: 'inherit',
      fontWeight: 'inherit',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      letterSpacing: 'inherit'
    }
  };
  return deepmerge({
    htmlFontSize,
    pxToRem,
    fontFamily,
    fontSize,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold,
    ...variants
  }, other, {
    clone: false // No need to clone deep
  });
}

const shadowKeyUmbraOpacity = 0.2;
const shadowKeyPenumbraOpacity = 0.14;
const shadowAmbientShadowOpacity = 0.12;
function createShadow(...px) {
  return [`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`, `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`, `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`].join(',');
}

// Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss
const shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
var shadows$1 = shadows;

// Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
// to learn the context in which each easing should be used.
const easing = {
  // This is the most common easing curve.
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
};

// Follow https://m2.material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
// to learn when use what timing
const duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function formatMs(milliseconds) {
  return `${Math.round(milliseconds)}ms`;
}
function getAutoHeightDuration(height) {
  if (!height) {
    return 0;
  }
  const constant = height / 36;

  // https://www.desmos.com/calculator/vbrp3ggqet
  return Math.min(Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10), 3000);
}
function createTransitions(inputTransitions) {
  const mergedEasing = {
    ...easing,
    ...inputTransitions.easing
  };
  const mergedDuration = {
    ...duration,
    ...inputTransitions.duration
  };
  const create = (props = ['all'], options = {}) => {
    const {
      duration: durationOption = mergedDuration.standard,
      easing: easingOption = mergedEasing.easeInOut,
      delay = 0,
      ...other
    } = options;
    if (process.env.NODE_ENV !== 'production') {
      const isString = value => typeof value === 'string';
      const isNumber = value => !Number.isNaN(parseFloat(value));
      if (!isString(props) && !Array.isArray(props)) {
        console.error('MUI: Argument "props" must be a string or Array.');
      }
      if (!isNumber(durationOption) && !isString(durationOption)) {
        console.error(`MUI: Argument "duration" must be a number or a string but found ${durationOption}.`);
      }
      if (!isString(easingOption)) {
        console.error('MUI: Argument "easing" must be a string.');
      }
      if (!isNumber(delay) && !isString(delay)) {
        console.error('MUI: Argument "delay" must be a number or a string.');
      }
      if (typeof options !== 'object') {
        console.error(['MUI: Secong argument of transition.create must be an object.', "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join('\n'));
      }
      if (Object.keys(other).length !== 0) {
        console.error(`MUI: Unrecognized argument(s) [${Object.keys(other).join(',')}].`);
      }
    }
    return (Array.isArray(props) ? props : [props]).map(animatedProp => `${animatedProp} ${typeof durationOption === 'string' ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === 'string' ? delay : formatMs(delay)}`).join(',');
  };
  return {
    getAutoHeightDuration,
    create,
    ...inputTransitions,
    easing: mergedEasing,
    duration: mergedDuration
  };
}

// We need to centralize the zIndex definitions as they work
// like global values in the browser.
const zIndex = {
  mobileStepper: 1000,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
var zIndex$1 = zIndex;

function createThemeNoVars(options = {}, ...args) {
  const {
    breakpoints: breakpointsInput,
    mixins: mixinsInput = {},
    spacing: spacingInput,
    palette: paletteInput = {},
    transitions: transitionsInput = {},
    typography: typographyInput = {},
    shape: shapeInput,
    ...other
  } = options;
  if (options.vars) {
    throw new Error(process.env.NODE_ENV !== "production" ? 'MUI: `vars` is a private field used for CSS variables support.\n' + 'Please use another name.' : formatMuiErrorMessage(20));
  }
  const palette = createPalette(paletteInput);
  const systemTheme = createTheme$1(options);
  let muiTheme = deepmerge(systemTheme, {
    mixins: createMixins(systemTheme.breakpoints, mixinsInput),
    palette,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: shadows$1.slice(),
    typography: createTypography(palette, typographyInput),
    transitions: createTransitions(transitionsInput),
    zIndex: {
      ...zIndex$1
    }
  });
  muiTheme = deepmerge(muiTheme, other);
  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
  if (process.env.NODE_ENV !== 'production') {
    // TODO v6: Refactor to use globalStateClassesMapping from @mui/utils once `readOnly` state class is used in Rating component.
    const stateClasses = ['active', 'checked', 'completed', 'disabled', 'error', 'expanded', 'focused', 'focusVisible', 'required', 'selected'];
    const traverse = (node, component) => {
      let key;

      // eslint-disable-next-line guard-for-in
      for (key in node) {
        const child = node[key];
        if (stateClasses.includes(key) && Object.keys(child).length > 0) {
          if (process.env.NODE_ENV !== 'production') {
            const stateClass = generateUtilityClass('', key);
            console.error([`MUI: The \`${component}\` component increases ` + `the CSS specificity of the \`${key}\` internal state.`, 'You can not override it like this: ', JSON.stringify(node, null, 2), '', `Instead, you need to use the '&.${stateClass}' syntax:`, JSON.stringify({
              root: {
                [`&.${stateClass}`]: child
              }
            }, null, 2), '', 'https://mui.com/r/state-classes-guide'].join('\n'));
          }
          // Remove the style to prevent global conflicts.
          node[key] = {};
        }
      }
    };
    Object.keys(muiTheme.components).forEach(component => {
      const styleOverrides = muiTheme.components[component].styleOverrides;
      if (styleOverrides && component.startsWith('Mui')) {
        traverse(styleOverrides, component);
      }
    });
  }
  muiTheme.unstable_sxConfig = {
    ...defaultSxConfig$1,
    ...other?.unstable_sxConfig
  };
  muiTheme.unstable_sx = function sx(props) {
    return styleFunctionSx$1({
      sx: props,
      theme: this
    });
  };
  return muiTheme;
}

// Inspired by https://github.com/material-components/material-components-ios/blob/bca36107405594d5b7b16265a5b0ed698f85a5ee/components/Elevation/src/UIColor%2BMaterialElevation.m#L61
function getOverlayAlpha(elevation) {
  let alphaValue;
  if (elevation < 1) {
    alphaValue = 5.11916 * elevation ** 2;
  } else {
    alphaValue = 4.5 * Math.log(elevation + 1) + 2;
  }
  return Math.round(alphaValue * 10) / 1000;
}

const defaultDarkOverlays = [...Array(25)].map((_, index) => {
  if (index === 0) {
    return 'none';
  }
  const overlay = getOverlayAlpha(index);
  return `linear-gradient(rgba(255 255 255 / ${overlay}), rgba(255 255 255 / ${overlay}))`;
});
function getOpacity(mode) {
  return {
    inputPlaceholder: mode === 'dark' ? 0.5 : 0.42,
    inputUnderline: mode === 'dark' ? 0.7 : 0.42,
    switchTrackDisabled: mode === 'dark' ? 0.2 : 0.12,
    switchTrack: mode === 'dark' ? 0.3 : 0.38
  };
}
function getOverlays(mode) {
  return mode === 'dark' ? defaultDarkOverlays : [];
}
function createColorScheme(options) {
  const {
    palette: paletteInput = {
      mode: 'light'
    },
    // need to cast to avoid module augmentation test
    opacity,
    overlays,
    ...rest
  } = options;
  const palette = createPalette(paletteInput);
  return {
    palette,
    opacity: {
      ...getOpacity(palette.mode),
      ...opacity
    },
    overlays: overlays || getOverlays(palette.mode),
    ...rest
  };
}

function shouldSkipGeneratingVar(keys) {
  return !!keys[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!keys[0].match(/sxConfig$/) ||
  // ends with sxConfig
  keys[0] === 'palette' && !!keys[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}

/**
 * @internal These variables should not appear in the :root stylesheet when the `defaultColorScheme="dark"`
 */
const excludeVariablesFromRoot = cssVarPrefix => [...[...Array(25)].map((_, index) => `--${cssVarPrefix ? `${cssVarPrefix}-` : ''}overlays-${index}`), `--${cssVarPrefix ? `${cssVarPrefix}-` : ''}palette-AppBar-darkBg`, `--${cssVarPrefix ? `${cssVarPrefix}-` : ''}palette-AppBar-darkColor`];
var excludeVariablesFromRoot$1 = excludeVariablesFromRoot;

var defaultGetSelector = theme => (colorScheme, css) => {
  const root = theme.rootSelector || ':root';
  const selector = theme.colorSchemeSelector;
  let rule = selector;
  if (selector === 'class') {
    rule = '.%s';
  }
  if (selector === 'data') {
    rule = '[data-%s]';
  }
  if (selector?.startsWith('data-') && !selector.includes('%s')) {
    // 'data-mui-color-scheme' -> '[data-mui-color-scheme="%s"]'
    rule = `[${selector}="%s"]`;
  }
  if (theme.defaultColorScheme === colorScheme) {
    if (colorScheme === 'dark') {
      const excludedVariables = {};
      excludeVariablesFromRoot$1(theme.cssVarPrefix).forEach(cssVar => {
        excludedVariables[cssVar] = css[cssVar];
        delete css[cssVar];
      });
      if (rule === 'media') {
        return {
          [root]: css,
          [`@media (prefers-color-scheme: dark)`]: {
            [root]: excludedVariables
          }
        };
      }
      if (rule) {
        return {
          [rule.replace('%s', colorScheme)]: excludedVariables,
          [`${root}, ${rule.replace('%s', colorScheme)}`]: css
        };
      }
      return {
        [root]: {
          ...css,
          ...excludedVariables
        }
      };
    }
    if (rule && rule !== 'media') {
      return `${root}, ${rule.replace('%s', String(colorScheme))}`;
    }
  } else if (colorScheme) {
    if (rule === 'media') {
      return {
        [`@media (prefers-color-scheme: ${String(colorScheme)})`]: {
          [root]: css
        }
      };
    }
    if (rule) {
      return rule.replace('%s', String(colorScheme));
    }
  }
  return root;
};

/* eslint-disable import/prefer-default-export */
function isSerializable(val) {
  return isPlainObject(val) || typeof val === 'undefined' || typeof val === 'string' || typeof val === 'boolean' || typeof val === 'number' || Array.isArray(val);
}

/**
 * `baseTheme` usually comes from `createTheme` or `extendTheme`.
 *
 * This function is intended to be used with zero-runtime CSS-in-JS like Pigment CSS
 * For example, in a Next.js project:
 *
 * ```js
 * // next.config.js
 * const { extendTheme } = require('@mui/material/styles');
 *
 * const theme = extendTheme();
 * // `.toRuntimeSource` is Pigment CSS specific to create a theme that is available at runtime.
 * theme.toRuntimeSource = stringifyTheme;
 *
 * module.exports = withPigment({
 *  theme,
 * });
 * ```
 */
function stringifyTheme(baseTheme = {}) {
  const serializableTheme = {
    ...baseTheme
  };
  function serializeTheme(object) {
    const array = Object.entries(object);
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < array.length; index++) {
      const [key, value] = array[index];
      if (!isSerializable(value) || key.startsWith('unstable_')) {
        delete object[key];
      } else if (isPlainObject(value)) {
        object[key] = {
          ...value
        };
        serializeTheme(object[key]);
      }
    }
  }
  serializeTheme(serializableTheme);
  return `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(serializableTheme, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}

function assignNode(obj, keys) {
  keys.forEach(k => {
    if (!obj[k]) {
      obj[k] = {};
    }
  });
}
function setColor(obj, key, defaultValue) {
  if (!obj[key] && defaultValue) {
    obj[key] = defaultValue;
  }
}
function toRgb(color) {
  if (!color || !color.startsWith('hsl')) {
    return color;
  }
  return hslToRgb(color);
}
function setColorChannel(obj, key) {
  if (!(`${key}Channel` in obj)) {
    // custom channel token is not provided, generate one.
    // if channel token can't be generated, show a warning.
    obj[`${key}Channel`] = private_safeColorChannel(toRgb(obj[key]), `MUI: Can't create \`palette.${key}Channel\` because \`palette.${key}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` + '\n' + `To suppress this warning, you need to explicitly provide the \`palette.${key}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`);
  }
}
function getSpacingVal(spacingInput) {
  if (typeof spacingInput === 'number') {
    return `${spacingInput}px`;
  }
  if (typeof spacingInput === 'string' || typeof spacingInput === 'function' || Array.isArray(spacingInput)) {
    return spacingInput;
  }
  return '8px';
}
const silent = fn => {
  try {
    return fn();
  } catch (error) {
    // ignore error
  }
  return undefined;
};
const createGetCssVar = (cssVarPrefix = 'mui') => createGetCssVar$1(cssVarPrefix);
function attachColorScheme$1(colorSchemes, scheme, restTheme, colorScheme) {
  if (!scheme) {
    return undefined;
  }
  scheme = scheme === true ? {} : scheme;
  const mode = colorScheme === 'dark' ? 'dark' : 'light';
  if (!restTheme) {
    colorSchemes[colorScheme] = createColorScheme({
      ...scheme,
      palette: {
        mode,
        ...scheme?.palette
      }
    });
    return undefined;
  }
  const {
    palette,
    ...muiTheme
  } = createThemeNoVars({
    ...restTheme,
    palette: {
      mode,
      ...scheme?.palette
    }
  });
  colorSchemes[colorScheme] = {
    ...scheme,
    palette,
    opacity: {
      ...getOpacity(mode),
      ...scheme?.opacity
    },
    overlays: scheme?.overlays || getOverlays(mode)
  };
  return muiTheme;
}

/**
 * A default `createThemeWithVars` comes with a single color scheme, either `light` or `dark` based on the `defaultColorScheme`.
 * This is better suited for apps that only need a single color scheme.
 *
 * To enable built-in `light` and `dark` color schemes, either:
 * 1. provide a `colorSchemeSelector` to define how the color schemes will change.
 * 2. provide `colorSchemes.dark` will set `colorSchemeSelector: 'media'` by default.
 */
function createThemeWithVars(options = {}, ...args) {
  const {
    colorSchemes: colorSchemesInput = {
      light: true
    },
    defaultColorScheme: defaultColorSchemeInput,
    disableCssColorScheme = false,
    cssVarPrefix = 'mui',
    shouldSkipGeneratingVar: shouldSkipGeneratingVar$1 = shouldSkipGeneratingVar,
    colorSchemeSelector: selector = colorSchemesInput.light && colorSchemesInput.dark ? 'media' : undefined,
    rootSelector = ':root',
    ...input
  } = options;
  const firstColorScheme = Object.keys(colorSchemesInput)[0];
  const defaultColorScheme = defaultColorSchemeInput || (colorSchemesInput.light && firstColorScheme !== 'light' ? 'light' : firstColorScheme);
  const getCssVar = createGetCssVar(cssVarPrefix);
  const {
    [defaultColorScheme]: defaultSchemeInput,
    light: builtInLight,
    dark: builtInDark,
    ...customColorSchemes
  } = colorSchemesInput;
  const colorSchemes = {
    ...customColorSchemes
  };
  let defaultScheme = defaultSchemeInput;

  // For built-in light and dark color schemes, ensure that the value is valid if they are the default color scheme.
  if (defaultColorScheme === 'dark' && !('dark' in colorSchemesInput) || defaultColorScheme === 'light' && !('light' in colorSchemesInput)) {
    defaultScheme = true;
  }
  if (!defaultScheme) {
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${defaultColorScheme}\` option is either missing or invalid.` : formatMuiErrorMessage(21, defaultColorScheme));
  }

  // Create the palette for the default color scheme, either `light`, `dark`, or custom color scheme.
  const muiTheme = attachColorScheme$1(colorSchemes, defaultScheme, input, defaultColorScheme);
  if (builtInLight && !colorSchemes.light) {
    attachColorScheme$1(colorSchemes, builtInLight, undefined, 'light');
  }
  if (builtInDark && !colorSchemes.dark) {
    attachColorScheme$1(colorSchemes, builtInDark, undefined, 'dark');
  }
  let theme = {
    defaultColorScheme,
    ...muiTheme,
    cssVarPrefix,
    colorSchemeSelector: selector,
    rootSelector,
    getCssVar,
    colorSchemes,
    font: {
      ...prepareTypographyVars(muiTheme.typography),
      ...muiTheme.font
    },
    spacing: getSpacingVal(input.spacing)
  };
  Object.keys(theme.colorSchemes).forEach(key => {
    const palette = theme.colorSchemes[key].palette;
    const setCssVarColor = cssVar => {
      const tokens = cssVar.split('-');
      const color = tokens[1];
      const colorToken = tokens[2];
      return getCssVar(cssVar, palette[color][colorToken]);
    };

    // attach black & white channels to common node
    if (palette.mode === 'light') {
      setColor(palette.common, 'background', '#fff');
      setColor(palette.common, 'onBackground', '#000');
    }
    if (palette.mode === 'dark') {
      setColor(palette.common, 'background', '#000');
      setColor(palette.common, 'onBackground', '#fff');
    }

    // assign component variables
    assignNode(palette, ['Alert', 'AppBar', 'Avatar', 'Button', 'Chip', 'FilledInput', 'LinearProgress', 'Skeleton', 'Slider', 'SnackbarContent', 'SpeedDialAction', 'StepConnector', 'StepContent', 'Switch', 'TableCell', 'Tooltip']);
    if (palette.mode === 'light') {
      setColor(palette.Alert, 'errorColor', private_safeDarken(palette.error.light, 0.6));
      setColor(palette.Alert, 'infoColor', private_safeDarken(palette.info.light, 0.6));
      setColor(palette.Alert, 'successColor', private_safeDarken(palette.success.light, 0.6));
      setColor(palette.Alert, 'warningColor', private_safeDarken(palette.warning.light, 0.6));
      setColor(palette.Alert, 'errorFilledBg', setCssVarColor('palette-error-main'));
      setColor(palette.Alert, 'infoFilledBg', setCssVarColor('palette-info-main'));
      setColor(palette.Alert, 'successFilledBg', setCssVarColor('palette-success-main'));
      setColor(palette.Alert, 'warningFilledBg', setCssVarColor('palette-warning-main'));
      setColor(palette.Alert, 'errorFilledColor', silent(() => palette.getContrastText(palette.error.main)));
      setColor(palette.Alert, 'infoFilledColor', silent(() => palette.getContrastText(palette.info.main)));
      setColor(palette.Alert, 'successFilledColor', silent(() => palette.getContrastText(palette.success.main)));
      setColor(palette.Alert, 'warningFilledColor', silent(() => palette.getContrastText(palette.warning.main)));
      setColor(palette.Alert, 'errorStandardBg', private_safeLighten(palette.error.light, 0.9));
      setColor(palette.Alert, 'infoStandardBg', private_safeLighten(palette.info.light, 0.9));
      setColor(palette.Alert, 'successStandardBg', private_safeLighten(palette.success.light, 0.9));
      setColor(palette.Alert, 'warningStandardBg', private_safeLighten(palette.warning.light, 0.9));
      setColor(palette.Alert, 'errorIconColor', setCssVarColor('palette-error-main'));
      setColor(palette.Alert, 'infoIconColor', setCssVarColor('palette-info-main'));
      setColor(palette.Alert, 'successIconColor', setCssVarColor('palette-success-main'));
      setColor(palette.Alert, 'warningIconColor', setCssVarColor('palette-warning-main'));
      setColor(palette.AppBar, 'defaultBg', setCssVarColor('palette-grey-100'));
      setColor(palette.Avatar, 'defaultBg', setCssVarColor('palette-grey-400'));
      setColor(palette.Button, 'inheritContainedBg', setCssVarColor('palette-grey-300'));
      setColor(palette.Button, 'inheritContainedHoverBg', setCssVarColor('palette-grey-A100'));
      setColor(palette.Chip, 'defaultBorder', setCssVarColor('palette-grey-400'));
      setColor(palette.Chip, 'defaultAvatarColor', setCssVarColor('palette-grey-700'));
      setColor(palette.Chip, 'defaultIconColor', setCssVarColor('palette-grey-700'));
      setColor(palette.FilledInput, 'bg', 'rgba(0, 0, 0, 0.06)');
      setColor(palette.FilledInput, 'hoverBg', 'rgba(0, 0, 0, 0.09)');
      setColor(palette.FilledInput, 'disabledBg', 'rgba(0, 0, 0, 0.12)');
      setColor(palette.LinearProgress, 'primaryBg', private_safeLighten(palette.primary.main, 0.62));
      setColor(palette.LinearProgress, 'secondaryBg', private_safeLighten(palette.secondary.main, 0.62));
      setColor(palette.LinearProgress, 'errorBg', private_safeLighten(palette.error.main, 0.62));
      setColor(palette.LinearProgress, 'infoBg', private_safeLighten(palette.info.main, 0.62));
      setColor(palette.LinearProgress, 'successBg', private_safeLighten(palette.success.main, 0.62));
      setColor(palette.LinearProgress, 'warningBg', private_safeLighten(palette.warning.main, 0.62));
      setColor(palette.Skeleton, 'bg', `rgba(${setCssVarColor('palette-text-primaryChannel')} / 0.11)`);
      setColor(palette.Slider, 'primaryTrack', private_safeLighten(palette.primary.main, 0.62));
      setColor(palette.Slider, 'secondaryTrack', private_safeLighten(palette.secondary.main, 0.62));
      setColor(palette.Slider, 'errorTrack', private_safeLighten(palette.error.main, 0.62));
      setColor(palette.Slider, 'infoTrack', private_safeLighten(palette.info.main, 0.62));
      setColor(palette.Slider, 'successTrack', private_safeLighten(palette.success.main, 0.62));
      setColor(palette.Slider, 'warningTrack', private_safeLighten(palette.warning.main, 0.62));
      const snackbarContentBackground = private_safeEmphasize(palette.background.default, 0.8);
      setColor(palette.SnackbarContent, 'bg', snackbarContentBackground);
      setColor(palette.SnackbarContent, 'color', silent(() => palette.getContrastText(snackbarContentBackground)));
      setColor(palette.SpeedDialAction, 'fabHoverBg', private_safeEmphasize(palette.background.paper, 0.15));
      setColor(palette.StepConnector, 'border', setCssVarColor('palette-grey-400'));
      setColor(palette.StepContent, 'border', setCssVarColor('palette-grey-400'));
      setColor(palette.Switch, 'defaultColor', setCssVarColor('palette-common-white'));
      setColor(palette.Switch, 'defaultDisabledColor', setCssVarColor('palette-grey-100'));
      setColor(palette.Switch, 'primaryDisabledColor', private_safeLighten(palette.primary.main, 0.62));
      setColor(palette.Switch, 'secondaryDisabledColor', private_safeLighten(palette.secondary.main, 0.62));
      setColor(palette.Switch, 'errorDisabledColor', private_safeLighten(palette.error.main, 0.62));
      setColor(palette.Switch, 'infoDisabledColor', private_safeLighten(palette.info.main, 0.62));
      setColor(palette.Switch, 'successDisabledColor', private_safeLighten(palette.success.main, 0.62));
      setColor(palette.Switch, 'warningDisabledColor', private_safeLighten(palette.warning.main, 0.62));
      setColor(palette.TableCell, 'border', private_safeLighten(private_safeAlpha(palette.divider, 1), 0.88));
      setColor(palette.Tooltip, 'bg', private_safeAlpha(palette.grey[700], 0.92));
    }
    if (palette.mode === 'dark') {
      setColor(palette.Alert, 'errorColor', private_safeLighten(palette.error.light, 0.6));
      setColor(palette.Alert, 'infoColor', private_safeLighten(palette.info.light, 0.6));
      setColor(palette.Alert, 'successColor', private_safeLighten(palette.success.light, 0.6));
      setColor(palette.Alert, 'warningColor', private_safeLighten(palette.warning.light, 0.6));
      setColor(palette.Alert, 'errorFilledBg', setCssVarColor('palette-error-dark'));
      setColor(palette.Alert, 'infoFilledBg', setCssVarColor('palette-info-dark'));
      setColor(palette.Alert, 'successFilledBg', setCssVarColor('palette-success-dark'));
      setColor(palette.Alert, 'warningFilledBg', setCssVarColor('palette-warning-dark'));
      setColor(palette.Alert, 'errorFilledColor', silent(() => palette.getContrastText(palette.error.dark)));
      setColor(palette.Alert, 'infoFilledColor', silent(() => palette.getContrastText(palette.info.dark)));
      setColor(palette.Alert, 'successFilledColor', silent(() => palette.getContrastText(palette.success.dark)));
      setColor(palette.Alert, 'warningFilledColor', silent(() => palette.getContrastText(palette.warning.dark)));
      setColor(palette.Alert, 'errorStandardBg', private_safeDarken(palette.error.light, 0.9));
      setColor(palette.Alert, 'infoStandardBg', private_safeDarken(palette.info.light, 0.9));
      setColor(palette.Alert, 'successStandardBg', private_safeDarken(palette.success.light, 0.9));
      setColor(palette.Alert, 'warningStandardBg', private_safeDarken(palette.warning.light, 0.9));
      setColor(palette.Alert, 'errorIconColor', setCssVarColor('palette-error-main'));
      setColor(palette.Alert, 'infoIconColor', setCssVarColor('palette-info-main'));
      setColor(palette.Alert, 'successIconColor', setCssVarColor('palette-success-main'));
      setColor(palette.Alert, 'warningIconColor', setCssVarColor('palette-warning-main'));
      setColor(palette.AppBar, 'defaultBg', setCssVarColor('palette-grey-900'));
      setColor(palette.AppBar, 'darkBg', setCssVarColor('palette-background-paper')); // specific for dark mode
      setColor(palette.AppBar, 'darkColor', setCssVarColor('palette-text-primary')); // specific for dark mode
      setColor(palette.Avatar, 'defaultBg', setCssVarColor('palette-grey-600'));
      setColor(palette.Button, 'inheritContainedBg', setCssVarColor('palette-grey-800'));
      setColor(palette.Button, 'inheritContainedHoverBg', setCssVarColor('palette-grey-700'));
      setColor(palette.Chip, 'defaultBorder', setCssVarColor('palette-grey-700'));
      setColor(palette.Chip, 'defaultAvatarColor', setCssVarColor('palette-grey-300'));
      setColor(palette.Chip, 'defaultIconColor', setCssVarColor('palette-grey-300'));
      setColor(palette.FilledInput, 'bg', 'rgba(255, 255, 255, 0.09)');
      setColor(palette.FilledInput, 'hoverBg', 'rgba(255, 255, 255, 0.13)');
      setColor(palette.FilledInput, 'disabledBg', 'rgba(255, 255, 255, 0.12)');
      setColor(palette.LinearProgress, 'primaryBg', private_safeDarken(palette.primary.main, 0.5));
      setColor(palette.LinearProgress, 'secondaryBg', private_safeDarken(palette.secondary.main, 0.5));
      setColor(palette.LinearProgress, 'errorBg', private_safeDarken(palette.error.main, 0.5));
      setColor(palette.LinearProgress, 'infoBg', private_safeDarken(palette.info.main, 0.5));
      setColor(palette.LinearProgress, 'successBg', private_safeDarken(palette.success.main, 0.5));
      setColor(palette.LinearProgress, 'warningBg', private_safeDarken(palette.warning.main, 0.5));
      setColor(palette.Skeleton, 'bg', `rgba(${setCssVarColor('palette-text-primaryChannel')} / 0.13)`);
      setColor(palette.Slider, 'primaryTrack', private_safeDarken(palette.primary.main, 0.5));
      setColor(palette.Slider, 'secondaryTrack', private_safeDarken(palette.secondary.main, 0.5));
      setColor(palette.Slider, 'errorTrack', private_safeDarken(palette.error.main, 0.5));
      setColor(palette.Slider, 'infoTrack', private_safeDarken(palette.info.main, 0.5));
      setColor(palette.Slider, 'successTrack', private_safeDarken(palette.success.main, 0.5));
      setColor(palette.Slider, 'warningTrack', private_safeDarken(palette.warning.main, 0.5));
      const snackbarContentBackground = private_safeEmphasize(palette.background.default, 0.98);
      setColor(palette.SnackbarContent, 'bg', snackbarContentBackground);
      setColor(palette.SnackbarContent, 'color', silent(() => palette.getContrastText(snackbarContentBackground)));
      setColor(palette.SpeedDialAction, 'fabHoverBg', private_safeEmphasize(palette.background.paper, 0.15));
      setColor(palette.StepConnector, 'border', setCssVarColor('palette-grey-600'));
      setColor(palette.StepContent, 'border', setCssVarColor('palette-grey-600'));
      setColor(palette.Switch, 'defaultColor', setCssVarColor('palette-grey-300'));
      setColor(palette.Switch, 'defaultDisabledColor', setCssVarColor('palette-grey-600'));
      setColor(palette.Switch, 'primaryDisabledColor', private_safeDarken(palette.primary.main, 0.55));
      setColor(palette.Switch, 'secondaryDisabledColor', private_safeDarken(palette.secondary.main, 0.55));
      setColor(palette.Switch, 'errorDisabledColor', private_safeDarken(palette.error.main, 0.55));
      setColor(palette.Switch, 'infoDisabledColor', private_safeDarken(palette.info.main, 0.55));
      setColor(palette.Switch, 'successDisabledColor', private_safeDarken(palette.success.main, 0.55));
      setColor(palette.Switch, 'warningDisabledColor', private_safeDarken(palette.warning.main, 0.55));
      setColor(palette.TableCell, 'border', private_safeDarken(private_safeAlpha(palette.divider, 1), 0.68));
      setColor(palette.Tooltip, 'bg', private_safeAlpha(palette.grey[700], 0.92));
    }

    // MUI X - DataGrid needs this token.
    setColorChannel(palette.background, 'default');

    // added for consistency with the `background.default` token
    setColorChannel(palette.background, 'paper');
    setColorChannel(palette.common, 'background');
    setColorChannel(palette.common, 'onBackground');
    setColorChannel(palette, 'divider');
    Object.keys(palette).forEach(color => {
      const colors = palette[color];

      // The default palettes (primary, secondary, error, info, success, and warning) errors are handled by the above `createTheme(...)`.

      if (colors && typeof colors === 'object') {
        // Silent the error for custom palettes.
        if (colors.main) {
          setColor(palette[color], 'mainChannel', private_safeColorChannel(toRgb(colors.main)));
        }
        if (colors.light) {
          setColor(palette[color], 'lightChannel', private_safeColorChannel(toRgb(colors.light)));
        }
        if (colors.dark) {
          setColor(palette[color], 'darkChannel', private_safeColorChannel(toRgb(colors.dark)));
        }
        if (colors.contrastText) {
          setColor(palette[color], 'contrastTextChannel', private_safeColorChannel(toRgb(colors.contrastText)));
        }
        if (color === 'text') {
          // Text colors: text.primary, text.secondary
          setColorChannel(palette[color], 'primary');
          setColorChannel(palette[color], 'secondary');
        }
        if (color === 'action') {
          // Action colors: action.active, action.selected
          if (colors.active) {
            setColorChannel(palette[color], 'active');
          }
          if (colors.selected) {
            setColorChannel(palette[color], 'selected');
          }
        }
      }
    });
  });
  theme = args.reduce((acc, argument) => deepmerge(acc, argument), theme);
  const parserConfig = {
    prefix: cssVarPrefix,
    disableCssColorScheme,
    shouldSkipGeneratingVar: shouldSkipGeneratingVar$1,
    getSelector: defaultGetSelector(theme)
  };
  const {
    vars,
    generateThemeVars,
    generateStyleSheets
  } = prepareCssVars(theme, parserConfig);
  theme.vars = vars;
  Object.entries(theme.colorSchemes[theme.defaultColorScheme]).forEach(([key, value]) => {
    theme[key] = value;
  });
  theme.generateThemeVars = generateThemeVars;
  theme.generateStyleSheets = generateStyleSheets;
  theme.generateSpacing = function generateSpacing() {
    return createSpacing(input.spacing, createUnarySpacing(this));
  };
  theme.getColorSchemeSelector = createGetColorSchemeSelector(selector);
  theme.spacing = theme.generateSpacing();
  theme.shouldSkipGeneratingVar = shouldSkipGeneratingVar$1;
  theme.unstable_sxConfig = {
    ...defaultSxConfig$1,
    ...input?.unstable_sxConfig
  };
  theme.unstable_sx = function sx(props) {
    return styleFunctionSx$1({
      sx: props,
      theme: this
    });
  };
  theme.toRuntimeSource = stringifyTheme; // for Pigment CSS integration

  return theme;
}

// eslint-disable-next-line consistent-return
function attachColorScheme(theme, scheme, colorScheme) {
  if (!theme.colorSchemes) {
    return undefined;
  }
  if (colorScheme) {
    theme.colorSchemes[scheme] = {
      ...(colorScheme !== true && colorScheme),
      palette: createPalette({
        ...(colorScheme === true ? {} : colorScheme.palette),
        mode: scheme
      }) // cast type to skip module augmentation test
    };
  }
}

/**
 * Generate a theme base on the options received.
 * @param options Takes an incomplete theme object and adds the missing parts.
 * @param args Deep merge the arguments with the about to be returned theme.
 * @returns A complete, ready-to-use theme object.
 */
function createTheme(options = {},
// cast type to skip module augmentation test
...args) {
  const {
    palette,
    cssVariables = false,
    colorSchemes: initialColorSchemes = !palette ? {
      light: true
    } : undefined,
    defaultColorScheme: initialDefaultColorScheme = palette?.mode,
    ...rest
  } = options;
  const defaultColorSchemeInput = initialDefaultColorScheme || 'light';
  const defaultScheme = initialColorSchemes?.[defaultColorSchemeInput];
  const colorSchemesInput = {
    ...initialColorSchemes,
    ...(palette ? {
      [defaultColorSchemeInput]: {
        ...(typeof defaultScheme !== 'boolean' && defaultScheme),
        palette
      }
    } : undefined)
  };
  if (cssVariables === false) {
    if (!('colorSchemes' in options)) {
      // Behaves exactly as v5
      return createThemeNoVars(options, ...args);
    }
    let paletteOptions = palette;
    if (!('palette' in options)) {
      if (colorSchemesInput[defaultColorSchemeInput]) {
        if (colorSchemesInput[defaultColorSchemeInput] !== true) {
          paletteOptions = colorSchemesInput[defaultColorSchemeInput].palette;
        } else if (defaultColorSchemeInput === 'dark') {
          // @ts-ignore to prevent the module augmentation test from failing
          paletteOptions = {
            mode: 'dark'
          };
        }
      }
    }
    const theme = createThemeNoVars({
      ...options,
      palette: paletteOptions
    }, ...args);
    theme.defaultColorScheme = defaultColorSchemeInput;
    theme.colorSchemes = colorSchemesInput;
    if (theme.palette.mode === 'light') {
      theme.colorSchemes.light = {
        ...(colorSchemesInput.light !== true && colorSchemesInput.light),
        palette: theme.palette
      };
      attachColorScheme(theme, 'dark', colorSchemesInput.dark);
    }
    if (theme.palette.mode === 'dark') {
      theme.colorSchemes.dark = {
        ...(colorSchemesInput.dark !== true && colorSchemesInput.dark),
        palette: theme.palette
      };
      attachColorScheme(theme, 'light', colorSchemesInput.light);
    }
    return theme;
  }
  if (!palette && !('light' in colorSchemesInput) && defaultColorSchemeInput === 'light') {
    colorSchemesInput.light = true;
  }
  return createThemeWithVars({
    ...rest,
    colorSchemes: colorSchemesInput,
    defaultColorScheme: defaultColorSchemeInput,
    ...(typeof cssVariables !== 'boolean' && cssVariables)
  }, ...args);
}

function ThemeProviderNoVars({
  theme: themeInput,
  ...props
}) {
  const scopedTheme = THEME_ID in themeInput ? themeInput[THEME_ID] : undefined;
  return /*#__PURE__*/jsxRuntimeExports.jsx(ThemeProvider$1, {
    ...props,
    themeId: scopedTheme ? THEME_ID : undefined,
    theme: scopedTheme || themeInput
  });
}

const defaultConfig = {
  attribute: 'data-mui-color-scheme',
  colorSchemeStorageKey: 'mui-color-scheme',
  defaultLightColorScheme: 'light',
  defaultDarkColorScheme: 'dark',
  modeStorageKey: 'mui-mode'
};

const {
  CssVarsProvider: InternalCssVarsProvider,
  useColorScheme,
  getInitColorSchemeScript: deprecatedGetInitColorSchemeScript
} = createCssVarsProvider({
  themeId: THEME_ID,
  // @ts-ignore ignore module augmentation tests
  theme: () => createTheme({
    cssVariables: true
  }),
  colorSchemeStorageKey: defaultConfig.colorSchemeStorageKey,
  modeStorageKey: defaultConfig.modeStorageKey,
  defaultColorScheme: {
    light: defaultConfig.defaultLightColorScheme,
    dark: defaultConfig.defaultDarkColorScheme
  },
  resolveTheme: theme => {
    const newTheme = {
      ...theme,
      typography: createTypography(theme.palette, theme.typography)
    };
    newTheme.unstable_sx = function sx(props) {
      return styleFunctionSx$1({
        sx: props,
        theme: this
      });
    };
    return newTheme;
  }
});

/**
 * TODO: remove this export in v7
 * @deprecated
 * The `CssVarsProvider` component has been deprecated and ported into `ThemeProvider`.
 *
 * You should use `ThemeProvider` and `createTheme` instead:
 *
 * ```diff
 * - import { CssVarsProvider, extendTheme } from '@mui/material/styles';
 * + import { ThemeProvider, createTheme } from '@mui/material/styles';
 *
 * - const theme = extendTheme();
 * + const theme = createTheme({
 * +   cssVariables: true,
 * +   colorSchemes: { light: true, dark: true },
 * + });
 *
 * - <CssVarsProvider theme={theme}>
 * + <ThemeProvider theme={theme}>
 * ```
 *
 * To see the full documentation, check out https://mui.com/material-ui/customization/css-theme-variables/usage/.
 */
const CssVarsProvider = InternalCssVarsProvider;

function ThemeProvider({
  theme,
  ...props
}) {
  if (typeof theme === 'function') {
    return /*#__PURE__*/jsxRuntimeExports.jsx(ThemeProviderNoVars, {
      theme: theme,
      ...props
    });
  }
  const muiTheme = THEME_ID in theme ? theme[THEME_ID] : theme;
  if (!('colorSchemes' in muiTheme)) {
    return /*#__PURE__*/jsxRuntimeExports.jsx(ThemeProviderNoVars, {
      theme: theme,
      ...props
    });
  }
  return /*#__PURE__*/jsxRuntimeExports.jsx(CssVarsProvider, {
    theme: theme,
    ...props
  });
}

// THIS FILE IS AUTO GENERATED
function FaTelegramPlane (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 448 512"},"child":[{"tag":"path","attr":{"d":"M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"},"child":[]}]})(props);
}

var chatbot = "data:image/png;base64,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";

var HashLoader$1 = {};

var colors = {};

var hasRequiredColors;

function requireColors () {
	if (hasRequiredColors) return colors;
	hasRequiredColors = 1;
	Object.defineProperty(colors, "__esModule", { value: true });
	colors.calculateRgba = void 0;
	var BasicColors;
	(function (BasicColors) {
	    BasicColors["maroon"] = "#800000";
	    BasicColors["red"] = "#FF0000";
	    BasicColors["orange"] = "#FFA500";
	    BasicColors["yellow"] = "#FFFF00";
	    BasicColors["olive"] = "#808000";
	    BasicColors["green"] = "#008000";
	    BasicColors["purple"] = "#800080";
	    BasicColors["fuchsia"] = "#FF00FF";
	    BasicColors["lime"] = "#00FF00";
	    BasicColors["teal"] = "#008080";
	    BasicColors["aqua"] = "#00FFFF";
	    BasicColors["blue"] = "#0000FF";
	    BasicColors["navy"] = "#000080";
	    BasicColors["black"] = "#000000";
	    BasicColors["gray"] = "#808080";
	    BasicColors["silver"] = "#C0C0C0";
	    BasicColors["white"] = "#FFFFFF";
	})(BasicColors || (BasicColors = {}));
	var handleRgbColorString = function (color, opacity) {
	    // rgb(a)(255 255 255 / 80%)
	    if (color.includes("/")) {
	        return color.replace("rgb(", "rgba(");
	    }
	    var rgbValues = color.substring(color.startsWith("rgba(") ? 5 : 4, color.length - 1).trim();
	    var splittedByCommas = rgbValues.split(",");
	    // rgb(a)(255, 255, 255, 0.8)
	    if (splittedByCommas.length === 4) {
	        return color.replace("rgb(", "rgba(");
	    }
	    // rgb(a)(255, 255, 255)
	    if (splittedByCommas.length === 3) {
	        return "rgba(".concat(rgbValues, ", ").concat(opacity, ")");
	    }
	    // rgb(a)(255 255 255)
	    return "rgba(".concat(rgbValues, " / ").concat(opacity, ")");
	};
	var calculateRgba = function (color, opacity) {
	    if (color.startsWith("rgb")) {
	        return handleRgbColorString(color, opacity);
	    }
	    if (Object.keys(BasicColors).includes(color)) {
	        color = BasicColors[color];
	    }
	    if (color[0] === "#") {
	        color = color.slice(1);
	    }
	    if (color.length === 3) {
	        var res_1 = "";
	        color.split("").forEach(function (c) {
	            res_1 += c;
	            res_1 += c;
	        });
	        color = res_1;
	    }
	    var rgbValues = (color.match(/.{2}/g) || []).map(function (hex) { return parseInt(hex, 16); }).join(", ");
	    return "rgba(".concat(rgbValues, ", ").concat(opacity, ")");
	};
	colors.calculateRgba = calculateRgba;
	return colors;
}

var unitConverter = {};

var hasRequiredUnitConverter;

function requireUnitConverter () {
	if (hasRequiredUnitConverter) return unitConverter;
	hasRequiredUnitConverter = 1;
	Object.defineProperty(unitConverter, "__esModule", { value: true });
	unitConverter.cssValue = unitConverter.parseLengthAndUnit = void 0;
	var cssUnit = {
	    cm: true,
	    mm: true,
	    in: true,
	    px: true,
	    pt: true,
	    pc: true,
	    em: true,
	    ex: true,
	    ch: true,
	    rem: true,
	    vw: true,
	    vh: true,
	    vmin: true,
	    vmax: true,
	    "%": true,
	};
	/**
	 * If size is a number, append px to the value as default unit.
	 * If size is a string, validate against list of valid units.
	 * If unit is valid, return size as is.
	 * If unit is invalid, console warn issue, replace with px as the unit.
	 *
	 * @param {(number | string)} size
	 * @return {LengthObject} LengthObject
	 */
	function parseLengthAndUnit(size) {
	    if (typeof size === "number") {
	        return {
	            value: size,
	            unit: "px",
	        };
	    }
	    var value;
	    var valueString = (size.match(/^[0-9.]*/) || "").toString();
	    if (valueString.includes(".")) {
	        value = parseFloat(valueString);
	    }
	    else {
	        value = parseInt(valueString, 10);
	    }
	    var unit = (size.match(/[^0-9]*$/) || "").toString();
	    if (cssUnit[unit]) {
	        return {
	            value: value,
	            unit: unit,
	        };
	    }
	    console.warn("React Spinners: ".concat(size, " is not a valid css value. Defaulting to ").concat(value, "px."));
	    return {
	        value: value,
	        unit: "px",
	    };
	}
	unitConverter.parseLengthAndUnit = parseLengthAndUnit;
	/**
	 * Take value as an input and return valid css value
	 *
	 * @param {(number | string)} value
	 * @return {string} valid css value
	 */
	function cssValue(value) {
	    var lengthWithunit = parseLengthAndUnit(value);
	    return "".concat(lengthWithunit.value).concat(lengthWithunit.unit);
	}
	unitConverter.cssValue = cssValue;
	return unitConverter;
}

var animation = {};

var hasRequiredAnimation;

function requireAnimation () {
	if (hasRequiredAnimation) return animation;
	hasRequiredAnimation = 1;
	Object.defineProperty(animation, "__esModule", { value: true });
	animation.createAnimation = void 0;
	var createAnimation = function (loaderName, frames, suffix) {
	    var animationName = "react-spinners-".concat(loaderName, "-").concat(suffix);
	    if (typeof window == "undefined" || !window.document) {
	        return animationName;
	    }
	    var styleEl = document.createElement("style");
	    document.head.appendChild(styleEl);
	    var styleSheet = styleEl.sheet;
	    var keyFrames = "\n    @keyframes ".concat(animationName, " {\n      ").concat(frames, "\n    }\n  ");
	    if (styleSheet) {
	        styleSheet.insertRule(keyFrames, 0);
	    }
	    return animationName;
	};
	animation.createAnimation = createAnimation;
	return animation;
}

var hasRequiredHashLoader;

function requireHashLoader () {
	if (hasRequiredHashLoader) return HashLoader$1;
	hasRequiredHashLoader = 1;
	var __assign = (HashLoader$1 && HashLoader$1.__assign) || function () {
	    __assign = Object.assign || function(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	                t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);
	};
	var __createBinding = (HashLoader$1 && HashLoader$1.__createBinding) || (Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    var desc = Object.getOwnPropertyDescriptor(m, k);
	    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
	      desc = { enumerable: true, get: function() { return m[k]; } };
	    }
	    Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	}));
	var __setModuleDefault = (HashLoader$1 && HashLoader$1.__setModuleDefault) || (Object.create ? (function(o, v) {
	    Object.defineProperty(o, "default", { enumerable: true, value: v });
	}) : function(o, v) {
	    o["default"] = v;
	});
	var __importStar = (HashLoader$1 && HashLoader$1.__importStar) || function (mod) {
	    if (mod && mod.__esModule) return mod;
	    var result = {};
	    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
	    __setModuleDefault(result, mod);
	    return result;
	};
	var __rest = (HashLoader$1 && HashLoader$1.__rest) || function (s, e) {
	    var t = {};
	    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
	        t[p] = s[p];
	    if (s != null && typeof Object.getOwnPropertySymbols === "function")
	        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
	                t[p[i]] = s[p[i]];
	        }
	    return t;
	};
	Object.defineProperty(HashLoader$1, "__esModule", { value: true });
	var React = __importStar(React__default);
	var colors_1 = /*@__PURE__*/ requireColors();
	var unitConverter_1 = /*@__PURE__*/ requireUnitConverter();
	var animation_1 = /*@__PURE__*/ requireAnimation();
	function HashLoader(_a) {
	    var _b = _a.loading, loading = _b === void 0 ? true : _b, _c = _a.color, color = _c === void 0 ? "#000000" : _c, _d = _a.speedMultiplier, speedMultiplier = _d === void 0 ? 1 : _d, _e = _a.cssOverride, cssOverride = _e === void 0 ? {} : _e, _f = _a.size, size = _f === void 0 ? 50 : _f, additionalprops = __rest(_a, ["loading", "color", "speedMultiplier", "cssOverride", "size"]);
	    var _g = (0, unitConverter_1.parseLengthAndUnit)(size), value = _g.value, unit = _g.unit;
	    var wrapper = __assign({ display: "inherit", position: "relative", width: (0, unitConverter_1.cssValue)(size), height: (0, unitConverter_1.cssValue)(size), transform: "rotate(165deg)" }, cssOverride);
	    var thickness = value / 5;
	    var lat = (value - thickness) / 2;
	    var offset = lat - thickness;
	    var colorValue = (0, colors_1.calculateRgba)(color, 0.75);
	    var before = (0, animation_1.createAnimation)("HashLoader", "0% {width: ".concat(thickness, "px; box-shadow: ").concat(lat, "px ").concat(-offset, "px ").concat(colorValue, ", ").concat(-lat, "px ").concat(offset, "px ").concat(colorValue, "}\n    35% {width: ").concat((0, unitConverter_1.cssValue)(size), "; box-shadow: 0 ").concat(-offset, "px ").concat(colorValue, ", 0 ").concat(offset, "px ").concat(colorValue, "}\n    70% {width: ").concat(thickness, "px; box-shadow: ").concat(-lat, "px ").concat(-offset, "px ").concat(colorValue, ", ").concat(lat, "px ").concat(offset, "px ").concat(colorValue, "}\n    100% {box-shadow: ").concat(lat, "px ").concat(-offset, "px ").concat(colorValue, ", ").concat(-lat, "px ").concat(offset, "px ").concat(colorValue, "}"), "before");
	    var after = (0, animation_1.createAnimation)("HashLoader", "0% {height: ".concat(thickness, "px; box-shadow: ").concat(offset, "px ").concat(lat, "px ").concat(color, ", ").concat(-offset, "px ").concat(-lat, "px ").concat(color, "}\n    35% {height: ").concat((0, unitConverter_1.cssValue)(size), "; box-shadow: ").concat(offset, "px 0 ").concat(color, ", ").concat(-offset, "px 0 ").concat(color, "}\n    70% {height: ").concat(thickness, "px; box-shadow: ").concat(offset, "px ").concat(-lat, "px ").concat(color, ", ").concat(-offset, "px ").concat(lat, "px ").concat(color, "}\n    100% {box-shadow: ").concat(offset, "px ").concat(lat, "px ").concat(color, ", ").concat(-offset, "px ").concat(-lat, "px ").concat(color, "}"), "after");
	    var style = function (i) {
	        return {
	            position: "absolute",
	            top: "50%",
	            left: "50%",
	            display: "block",
	            width: "".concat(value / 5).concat(unit),
	            height: "".concat(value / 5).concat(unit),
	            borderRadius: "".concat(value / 10).concat(unit),
	            transform: "translate(-50%, -50%)",
	            animationFillMode: "none",
	            animation: "".concat(i === 1 ? before : after, " ").concat(2 / speedMultiplier, "s infinite"),
	        };
	    };
	    if (!loading) {
	        return null;
	    }
	    return (React.createElement("span", __assign({ style: wrapper }, additionalprops),
	        React.createElement("span", { style: style(1) }),
	        React.createElement("span", { style: style(2) })));
	}
	HashLoader$1.default = HashLoader;
	return HashLoader$1;
}

var HashLoaderExports = /*@__PURE__*/ requireHashLoader();
var HashLoader = /*@__PURE__*/getDefaultExportFromCjs(HashLoaderExports);

var user = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAACAASURBVHic7J15nFxVmf6fc6uq972zdro7Cx0SAglbCLKogKjIogwC6oi4MaBsigugkEyN4igKjOKCjo6OOqMjo46MDjKOmp+KSEgnIZGwZU8nnfSW7nSn96p7fn/U0rXdOufcqu6u5Xk+H6Xq3Pd9zluVqvq+fe4mQFFUTqvt0V2lk0PHG8YnrXrLazUAol7AboAUDRKoB9AAiHoAVQAqAJQCqBBAKQQqpAw9j4xHjUXcNP0AIKc2SgADACYgMAwbJyAwKYB+CUwAGBaQg7ZAtwWrD8LuBTx9gN2HiYnezr8/uw9CSFAUlbMS6hCKoqZLy77QXhuY8DZLieYg0ASBFiHRJAUWQaAZEgsBzI8mOH5jDb/KKcJluo3m00oAvYDoAdABiUNSoMMS8iCkOCRtHBLB8QOd/rUj+pNRFJVNsQGgqGlW6+d31MvJYJsEltuQbQJiOUL/awNkY2K845/N+QN/rQAZCjkmgA4JuUtAvCqleEUK8Ur5xMQr+/1nDugXQ1GUqdgAUFSW1Ozf2QBMrIEl19i2WC0EVgNog0AC5NP/2ZxShQl/lboh8bKAeFVCvgpYLwQgnu+9b9UR3TIpinIWGwCKMtXjj3sWvNi2wrKwBrZ1urDkGki5GhAtSbFJ3zDCXxP+6byOAnheAM9LS27z2N7nD0+s3A2/sHVdKYpiA0BRSi3+XPvCyUnPuYA4V1jyNZBYi9ABd+lF+KeeMzP4O20+IYAdUsot0hLPeALyz533r+7QnYmiilFsACgqRm2P7iodGTixVkCeC1ucC4HXAGg1NiL8U885PfB30iEp8TQg/mIJ689Hxo9uh//igG4FFFXoYgNAFbf8G71NqFvnEfbFNsTFAM4HUJ7RV4PwTz3nzMI//Drjgoch8JyQ4ml4xO8aR+y/7PSfOqFbFUUVmtgAUMUlv7Rare2n2HbwAgFxqQTeCKBOxn0TCH+zafMC/qk8RgA8I6T8rYDnt0fuXbmV1y6giklsAKiC13z/9nklsC+XkFcAeANCF8+JivA38zEJyGH4p9JRSPxOAL+dDHr/r+/+FYf1ZqSo/BQbAKog1fqZ50+1pX2lkLhKAucBsFLFEf5mPiYBeQb/VHoRQvzSlvJXPfes+jNXB6hCExsAqiDU5G+vsIR4M6S4HMAVABaqcgh/Mx+TgAKAf2LSQUj53/CKJ7pqRv6AW9ZOunGkqFwSGwAqb9X8yDPlGCq7XEhxfXh5v1I3l/A38zEJKED4Jw4NAPi1LeUvMIYne/ynnnAzA0XNttgAUHmlJf6NZROi5o2WFNcB8mpAVJt6EP5mPiYBRQD/mDkBAGMS+C2E/MG8ETzBswqofBIbACrndap/Z8mgPfEWacnrAXmVG+hHRPib+ZgEFCH8E8P6beBnHlg/Ojq64g+8MiGV62IDQOWsmvztZ1nA+wDxt0DkevruP7KEv5mPSUCxwz9FYqeEeNwD8eOj96x4zk01FDXdYgNA5ZSa/c80AKXXColbJHAWgJhPKeGvCif8TWpRJLmHf+LTV6SU3/MEfd89+unlPS6Ko6hpERsAavZ13eOeplPbLvYAN0vIqyHhi24j/LXDCX+TWhRJ2YN/rCYE8AQEfti1eOWTuF4EtW0pahrEBoCaNTX521s9sD4kpfwggHlJAYS/djjhb1KLIml64J+ovUKI7wZtfK/3npWd2lNQVBbFBoCaYUnR5N/2BkvK2yBwFSQ8KcMIf+1wwt+kFkXSzMA/VgEJ/FrY+Hr3PSt/w4sNUTMpNgDUjKjN/2zNGHzvhMQdAE5LG0z4a4cT/ia1KJJmHv6JebuFFF+DGP9O1ydPH3bpQlHaYgNATata/VtXSWnfISFuAFClTCD8tcMJf5NaFEmzDf9wcvj97ZcC3w4Ggl/vv/fUg5k4UlQ6sQGgpkWt/vYLJaw7JeQ1jsv8iSL8tcMJf5NaFEm5Bf9Y2RDiSUuKr3R98uTfZuJOUanEBoDKnvzSasGWtwqIu22J84xyCX/tcMLfpBZFUu7CP1GbhZQPdo+s/C9eYIjKltgAUBnrVP/OkiGMv1NKeQ+AVcZHMRH+2uGEv0ktiqT8gX+s9kghv9h74uh34b84kMnMFMUGgHKtuf6dVaUYu1UAH4UM3X2P8DfeoB1O+JvUokjKT/hPSWKvtOSDdSXe7+++c/l4JlVQxSs2AJSxmvztFV4bfyeFuBfAgsg44W+8QTuc8DepRZGU7/CPlRRdEPKffMM1X+30N41k6EYVmdgAUNpqvuuZcqu29BYJcS+knB+7jfA33qAdTvib1KJIKiT4RwoRACR6APmwhfGv8RRCSldsACilTvXvLBkKjr1PeuQGSLEocTvhb7xBO5zwN6lFkVSo8I9VuBGoLfV8mbsGKJXYAFCOOvvmdl/3fHwQAp+GQEuqjwvhb7xBO5zwN6lFkVQM8I/XXgm5offEih/zrAHKSWwAqJRq3bDlKgn5MIDloU8J4a/2UHvphhP+JrUokooP/lFJ4EUhpL/nYyt+yssMU4liA0DFqWX9c+dAiIcA8ToAIPx1PdReuuGEv0ktiqTihn9s1rNSyE/3fnzlxmxUQRWG2ABQAEJ35rNs8YCAvAGRzwXhr+mh9tINJ/xNalEkEf6p9CvLtj7afffyPdmoiMpvsQEocrXeu6PeLpm4RwAfAVAW3UD4a3qovXTDCX+TWhRJhL+jDSAmJfCY9In1x+5cPph5bVS+ig1Ascq/0dsarL5VCvgB1MdtI/w1PdReuuGEv0ktiiTC39EmweiIAD7dM7T8BzxQsDjFBqAI1eLfuha2/AYgz0naSPhreqi9dMMJf5NaFEmEv6NNGqMtQsqP9nxixdMmlVH5LzYARaST/NvnTcjJByHxXqT6tyf8NT3UXrrhhL9JLYokwt/RRsNIAvgRAvbdvfes7NSblcp3sQEoBvml1Rpsv0EK8TCAOSljCH9ND7WXbjjhb1KLIonwd7QxLGhYQny2r6XtIVwvgiaJVP6JDUCBa7G//SzbxjcAnOsYRPhreqi9dMMJf5NaFEmEv6NNBgVtg7Bv7v3Yyna3BlTuiw1AgarN/2zNuO39AoBbAFiOgYS/pofaSzec8DepRZFE+DvaZKGgAIBHSqqq/qHzFt5oqBDFBqAA1bJhy5sB+c8AWtMGEv6aHmov3XDC36QWRRLh72iTlYKmvtf7BMStPR9reypzUyqXxAaggNTsf6ZB2CWPAHivMpjw1/RQe+mGE/4mtSiSCH9HmyzDPzqnlOLHXo91V/dHl3VlPgGVC2IDUCBq9W+5UtrymwCS7taXJMJf00PtpRtO+JvUokgi/B1tpgv+MRqAxB19H1/+b5lPRM222ADkuU7yb583bgceEpDv0Uog/DU91F664YS/SS2KJMLf0WYG4D8VJvCf477Ah4duP6Uv80mp2RIbgDxW6/ot10shvwGgUSuB8Nf0UHvphhP+JrUokgh/R5uZhH9MfKcNcVP/XW2/znxyajbEBiAPNefup6vLyksfElLcrJ1E+Gt6qL10wwl/k1oUSYS/o82swD9ePxSTwdt671k5lHkh1EyKDUCeqdm/eZ2wxb8DaNNOIvw1PdReuuGEv0ktiiTC39EmB+Af0QEhxft7P962MfOCqJkSG4B8kX+jt9muuU9A3g/Aq51H+Gt6qL10wwl/k1oUSYS/o00OwT+SbgPiob6Kgftxy9rJTEujpl9sAPJAS+/bujjgsX8I4LVGiYS/pofaSzec8DepRZFE+Dva5CD8Yx9s9njku7rvXL7HrSU1M3K+QhyVE2pdv/nGgMfeAcKf8E8hwl+RSPin8Zl6kEX4A8A5waBob/jynre7taVmRlwByFEt8W8ss2X1V6XETcbJhL+mh9pLN5zwN6lFkUT4O9rkAfwT9cPSiooP8VLCuSk2ADmo5vu3LRdW8KcA1hgnE/6aHmov3XDC36QWRRLh72iTh/BHeJIXbYh39n/spL+6nY6aHnEXQI6p1b/5WmEF20H4O6QS/oS/IpHwT+Mz9WBG4B8KW2UJ/KXxkd3qS5RTMyquAOSK/Bu9zXb1AwK4G27+XQh/TQ+1l2444W9SiyKJ8He0yWv4xyg85z8fOz5+B/ynTrgtgcqe2ADkgJrve36R8AR+AuACVwaEv6aH2ks3nPA3qUWRlAPwl5Fkwl/bx0TROUOpz1jSe23vXUuOuC2Fyo7YAMyyWv2bL5W2+BGAua4MCH9ND7WXbjjhb1KLIonwd7QpUPhH1AmB6459pO0ZtyVRmYvHAMyiWtdvuVna4kkQ/mlSCX/CX5FI+KfxmXqQQ/AHIJogxR/qv7znHrdlUZmLKwCzIf9Gb4us+SdIebtrD8Jf00PtpRtO+JvUokjKAfgD3Odv6mOiNPBPfPZv5XbJzYc+1jJqPAmVkdgAzLCa/O1zPLb4KSBf79qE8Nf0UHvphhP+JrUokgh/R5tig3+MNlke3zW9d7R2Gk9GuRYbgBnUIv+mky3b80sAJ7s2Ifw1PdReuuGEv0ktiiTC39GmiOEfyey0pLyq967lW40npVyJxwDMkJr9Wy6zbM9zIPwdalF7Ef4uJiP8k7wIfzMfE7mHPwCIJltYf6h/ZO9VxhNTrsQGYAbUvH7z3cKW/wOg1rUJ4a/pofbSDSf8TWpRJBH+jjaEf5yqhCV/Xv/lPbcaF0AZi7sAplPXPe5pOWXZVwF8OCMfwl/TQ+2lG074m9SiSMoB+PNof3MfE2UJ/vFpUjx6rGnpx3C9CLozoVRiAzBNartjV+l4/fEfArguIyPCX9ND7aUbTvib1KJIIvwdbQh/VS0AIJ6CCL7j2J3LB92ZUenEBmAa1Ox/pgF26S8F5PkZGRH+mh5qL91wwt+kFkUS4e9oQ/iraomVtcWyxVW8cmD2xQYgy1p639bFkx77KQGszMiI8Nf0UHvphhP+JrUokgh/RxvCX1VLysH9Hsg39XzkpF3uzKlUYgOQRbX4N58GW/waQHNGRoS/pofaSzec8DepRZFE+DvaEP6qWpwHJXBU2uItA3ctfd7dJFSieBZAlrRoQ/vFsMXTIPzT1KL2IvxdTEb4J8xJ+Jv6mGiW4A8AC4QlN9Z/Zc+F7iaiEsUGIAtq3rD57RbwFDI5zQ8g/LU91F664YS/SS2KJMLf0YbwV9XiPJjwOusA8b/1X9lzubsJqVixAchQLes3v1NA/AeAkoyMCH9ND7WXbjjhb1KLIonwd7Qh/FW1OA86vM4KQDxR9+i+97mbmIqIDUAGal6/5QYI8UMA3oyMCH9ND7WXbjjhb1KLIonwd7Qh/FW1OA8qXqdXQH634St7PuauAApgA+BaLevbbxVC/gCEf5pa1F6Ev4vJCP+EOQl/Ux8T5SD8I+FCCvFw/aP7eEthl2ID4EItG9o/DoGvIdNvOOGv6aH20g0n/E1qUSQR/o42hL+qFudBTfjHZnyh7qt717srqLjFBsBQrRva7wHwEAj/NLWovQh/F5MR/glzEv6mPibKD/iHhyU+U/fovg0uqipqsQEwUOuGzX4JfCFjI8Jf00PtpRtO+JvUokjKAfhHkwl/bR8T5RP8IxsF8A91X93390Z1Fbmy8vUpBrVs2PIAIO/L2Ijw1/RQe+mGE/4mtSiScgT+Zu9vei/CP175CP8EPdh/59J7VZYUVwC01LK+/X7CX1WL2ovwdzEZ4Z/kRfib+ZioAOAPAPfUP7ov85XaIhBXABRq2dD+cYT2+Wcmwl/TQ+2lG074m9SiSCL8HW0If1UtzoPTAP/YrZ85dudS7hJIIzYAadS8YfMHBcS3ken7RPhreqi9dMMJf5NaFEk5AH8e8GfuY6JCg39M2D39dyz9ol5w8YkNgINaN7S/VwLfRaa7SQh/TQ+1l2444W9SiyKJ8He0IfxVtTgPzgj8Q6FSCHzo2O1L/1k/qXjEBiCFWv2br5W2+A8AnoyMCH9ND7WXbjjhb1KLIonwd7Qh/FW1OA/OIPwjsiHw7v7bl/6HfnJxiA1Agpo3bH57+Nr+vMKfYy1qL8LfxWSEf8KchL+pj4mKBP6ROScExNX9dyz5tb5J4YsNQIya/ZsvErZ4CkBpRkaEv6aH2ks3nPA3qUWRRPg72hD+qlqcB2cR/hGNQsjLBm5f9kd9s8IWG4CwWvybT4Mt/gSgLiMjwl/TQ+2lG074m9SiSCL8HW0If1UtzoM5AP9IwKC0xSXHP7J4i75p4YoNAICl921dHPDYzwBoysiI8Nf0UHvphhP+JrUokgh/RxvCX1WL82AOwT/yoNu2PRcOfqRll755YaroLwS06FObGic99lMg/NPUovYi/F1MRvgnzEn4m/qYiPCPap5lBZ+qemz3PP0JClNF3QA03/VMueXz/EIAKzMyIvw1PdReuuGEv0ktiiTC39GG8FfV4jyYo/CPaJk34Ptl07c6K/QnKjwVbwNw3eMeUeX7NwAXZuRD+Gt6qL10wwl/k1oUSYS/ow3hr6rFeTDH4R/JWDcyOfF9+GXRcrBoX3jLqpO+DCGuyciE8Nf0UHvphhP+JrUokgh/RxvCX1WL82B+wD+aeG39nANFe9+AomwAmtdvvhtS3p6RCeGv6aH20g0n/E1qUSQR/o42hL+qFufBvIJ/OEwCn6z/+v5b9ScvHGXlq5dPavZvuUzY8lfI5Cp/hL+mh9pLN5zwN6lFkZQD8Ad4Yx9THxMR/mY+AIKAfPvA7Uuf0C8k/1VUDUCLf/NpwhbPSKDatQnhr+mh9tINJ/xNalEkEf6ONoS/qhbnwTyHf0QnIORrB25b+rx+QfmtotkFsOhTmxphi/8i/J1qUXsR/i4mI/yTvAh/Mx8TEf5mPgmqghRPFNPpgUXRAJx9c7vP4/P8J4A21yaEv6aH2ks3nPA3qUWRRPg72hD+qlqcBwsI/hG1eoO+n8G/s0TPML9VFA1A9wLxVQlc7NqA8Nf0UHvphhP+JrUokgh/RxvCX1WL82ABwj8SdGFdY/XDeqb5rYJvAFo3tH8EkLe4NiD8NT3UXrrhhL9JLYokwt/RhvBX1eI8WMDwDz+Ut9d+/cDf6Znnr7LylcxVtfo3Xypt8Wu4vbUv4a/pofbSDSf8TWpRJOUA/Hmqn7mPiQh/Mx+TIAmM25AXD92+5C96E+WfCrYBWOR/ttmyvVsBzHVlQPhreqi9dMMJf5NaFEmEv6MN4a+qxXmwiOAf0VGP7Tnn2J3Nh/QmzC8V5C6As29u9wnb9xMQ/mlSCX/CX5FI+KfxmXpA+OtMnZfwBwQWBD2Bn+LRXaV6k+aXCrIB6F4ovyggz3eVTPhreqi9dMMJf5NaFEmEv6MN4a+qxXmwSOEfeXBunVXyJb2J80tZ+Yrmklo2bH4bIP4Lbl4b4a/pofbSDSf8TWpRJOUA/AEe8GfqYyLC38zHJCg1/GNky2uP37HkZ3pF5IcKqgFovn/bcmEFNwOoNU4m/DU91F664YS/SS2KJMLf0YbwV9XiPEj4x+k4BM46fuvivXrF5L4KZhfAEv/GMljBn4Dwd0gl/Al/RSLhn8Zn6gHhrzN1wcEfAGoh8XghHQ9QMA1AUFY/JoAzjRMJf00PtZduOOFvUosiifB3tCH8VbU4DxL+jjq7kI4HyMpXdrbVun7zjVKI7xsnEv6aHmov3XDC36QWRZID/GtLBJqrgDmlEnVlArU+oNwLVIWvhuGzgLLwY6tmHiaCEuNBidFJib7RAPpGgugbDaJzcBJHTwQU3wfC39THRIS/mY9JkAv4TwXb4trjd7Tk/fEAed8ALL5/01Lb8jwPoMYokfDX9FB76YYT/ia1KJIEsKhS4JR6oK0GWFojsaBMoqHURpml/ylevXp12u3jAYmDg5PY1z+Bl3rG8UL3GHZ2j2Nv/wQk4W/sYyLC38zHJCgj+IcchmzpWTt0e/OrJtm5pvxuAPwbvc12zR+MT/kj/DU91F664YS/SS3JSQLAaY0Wzp4LrKoP4qRqiRqv7cYwTqoGwEn9o0FsOjyKZw+P4pmOEezoGoOdCSUJ/zgR/mY+JkGZwz9q9Nzx3pYL4BcBE5dckrtL5OaIWu2q+yXhT/inUCHAv9IrcHGLhXVzbJxaF0SNL3d+Z+rLPbisrQqXtVUBAHpGAvj9vmH8397Q/0YndZsTwj9RhL+Zj0lQ1uAfGlpXN/fg/QOA38Qpl5S3KwAt6587B8L6MwCfdhLhr+mh9tINJ/xNagntm79kkcBFTcDquiC8wjWCtOR2BSCdRiZtPLXnBH7x0hB+t28Yk45LA4R/ogh/Mx+ToKzCf2pTQNriwsHbWzaZOOaK8rIBmOvfWVVmj24FsFw7ifDX9FB76YYT/voebbXAWxcLvH6hjQpP5kv7upqOBiBW3cMB/GTnIH6wfQAHjk/GbCH8E0X4m/mYBE0T/CPaUyLLzui5bd4JE+dcUF7uAiiTo18H4a8amJpT20PtpRtO+Ks9LEi8scXC25cCS6tyZ3k/m5pX6cUd6xpw2zkN+M3eE/j6c8ew6fAY4Z8gwt/MxyRomuEPACdNWGMPArjNxD0XlHcrAK3rt1wvhfyJdgLhr+mh9tINJ/zTe5R4gGuXWbhqcRBzSmbur/1Umu4VgFRq7xzDlzf14Td7h9PGEf6Ev1nYrMA/OpWU4vLB21qeMplltpVXDUCTv32Ox8aL0L3LH+Gv6aH20g0n/J2HvQJ421KB65fZaJhl8Ec0Gw1ARFuPjOEf/9yLPx4YSdpG+BP+ZmGzCv/IpiNB21o9dHtzn8lss6m8uhKgx8Y3QPhreRH+LiabRvi/uUXgh2+Q+NDKQM7Af7Z11sIy/PTaZvzk7YuwvKEkOk74E/5mYbMPfwCwgYXCko+ZzDbbypsVgBb/5rfCFk9oBRP+mh5qL91wwj/18CkNAneeBrTl6D7+2VwBiNWkLfHtrQN46C99GJpwaJAIf41anAcJ/wwmVPjEzmlJ8faB21p+bjLzbCkvGoAl/m11QTv4AoBFymDCX9ND7aUbTvgnD5d7gZtOsXBF8yQ8Ofwty5UGIKKu4QDu+V03/mdXwgHVhL9GLc6DhH8GExrAP5xwVMBedfzWxf0mFcyG8mIXQFAGvwLCX+lF+LuYbBrgf8FCgX+9SOKtLbkN/1zU/Eov/vWtTXjs8gWoL/OEBgl/jVqcBwn/DCY0hz8ALLCF9aBJBbOlnP95at6w+S0C4kllIOGv6aH20g0n/OOHy7zArasELmsOQrjHy4wq11YAYtUzEsRtvz6CjQdGMzcj/A08tDY6hhY5/KObhS3eePz25t+ZVDPTyukVgDb/szUC4pvKQMJf00PtpRtO+McPr2qw8O3XSrylOZA38M91za3w4MfXNOPe8xszW0kh/A08tDY6hhL+UwPSIx/DIx3lJhXNtHK6ARiX3gcBtKYNIvw1PdReuuGEf/zw1UsFHj43gAXlPLo/2/II4OOvacDPr2tGY7nH3IDwN/DQ2ugYSvgnDS2vrsDfm1Q108rZXQAt/q1rYdubkK5JIfw1PdReuuGE/9SwTwB3n23honmTqePyQLm8CyBR+wcmceN/H8FLveN6CYS/gYfWRsdQwt9xKCAsz7nHb2naqlPZTCs3VwCue9wD2/4mCH/nObU91F664YT/1HBtqcDXXivyGv75piV1Pjz5zmZctLhCHUz4G3hobXQMJfzTDnmlbf8zHpculq+mXznZALSsXHYLgLMdAwh/TQ+1l2444T81vLha4BsXBLEsR8/tL2RVlVj48d804YbVtc5BhL+Bh9ZGx1DCX8dDnl3b13Fz+hlmRznXACz61KZGCHzGMYDw1/RQe+mGE/5Tw2saBR4938a8Mh7oN1vyWgKPvHEebjmrLnkj4W/gobXRMZTwN/EQn6v+Vuec9FEzr5xrAKwSz0MAGlNuJPw1PdReuuGE/9TwGXMtfO6cmb1dL5VaAsADF83FXec2xA/GPCD8daYm/NMpG/APqx524AGtyBlUTjUAres3XwCJ96bcSPhreqi9dMMJ/6nh8xda+NxZkyizCP9c0qcvaMSda+sIfyMPrY2OoYS/u1oExN/VPNaxTj9j+pU7DcB1j3sgxNeQ6i0l/DU91F664YT/1PDaeQL3rZlESU4exkOtf91c3HmyD4S/ydSEfzplG/5hWQC+DCkzAEd2lTMNQOvKZbdJ4IykDYS/pofaSzec8J8aXt1o4e/PDBL+Oa71VyzB7cu9hL/W1IR/Ok0T/COJ51V/83DqVe5ZUE40AK337qiXIsUFEwh/TQ+1l2444T81vLxO4HNrgyjz8IC/fNCGK5bg3U0uEgl/ZSjh77aW5EQBfKHun/alOIJ15pUTDYAsmVwPoCFukPDX9FB76YYT/lPDjWUCn11ro5wH/OWNhAAeue4kXFZrcG0Gwl8ZSvi7rcUxcb5d4dvg1imbmvUGYPH9m5YC8ta4QcJf00PtpRtO+E8Nl3uBL6yTaCwh/PNNHkvg2+9ejrOsYXUw4a8MJfzd1pImUQCQuK32WwdPcuuYLc16A2BbngcBlEYHCH9ND7WXbjjhHz+8Ya3AkqqgnimVcyov9eIH7zkZc4+nuR074a8MJfzd1pImUUTnLAlK8Vm3rtnSrDYAzevbzwVwbXSA8Nf0UHvphhP+8cPvX2lhbQOv8JfvWtBQjh+8cyk8nd3JGwl/ZSjh77aWNIlT8A8/Fe+s/ebBtW7ds6FZbQCEwEOIvC2Ev6aH2ks3nPCPHz53voV3LOW1/QtF56ycgwcuakTwUNfUIOGvDCX83daSJjEB/pFRW1oPuZ0hG5q1BqDVv/laABcCIPy1PdReuuGEf/xwbYnAJ9YEM7vvPJVz+rsrVuDqeTLUBBD+ylDC320taRJTwz+y7fU13+y4zO1MmWpWGoCzb273SVv8IwDCX9tD7aUbTvgnD3/qLKDOx4P+ClFfvn0dFh7rQbCjC4S/cyjh77aWNInp4B+tR3xxtu4WOCsNQPcC3ARgOeGv66H20g0n/JOHr1kmcDb3+xes3Qm8wgAAIABJREFUaitL8K2PnQf56gEEO44a5RL+Zj4mQYR/VKur+w/f4HbWTDTjDUDbHbtKAXyK8Nf1UHvphhP+ycONZQLvXc6//Atdr109HzddsRxBgyaA8DfzMQki/OMlJT6D7+0rczu7W814AzBWf/xmCLQQ/joeai/dcMI/9fA9Z4J39ysS+d97BpobyxHcdSC8O8BZhL+Zj0kQ4Z/SobVmrOQmtxW41Yw2AEv8G8uEhXsIfx0PtZduOOGfevjSZgtn1nPpv1hUVe7Dw7euA6RA8NX9sA+lOEUQhL+pj0kQ4e8sKcSn8UhHudtK3GhGG4CgXfVhSLEocZzwN96gHU74px4u8QAfXMm//ItNb1m3CG8+ZyEAgcCre2Efil8JIPzNfEyCCH+Vl1xYVWl9wG01bjRjDcD8T2yvhOW5J3Gc8DfeoB1O+DsPv3eFwJwSXu2vGPWPHzwLPq9AqAnYH20CCH8zH5Mgwl/PS0DcN5OrADPWAPiqArdByvmxY4S/8QbtcMLfeXhOucDbWgn/YtXyRTW46fLloScSCL66H8HI7gDCP8MpCX/XXgIA5MKqKuv9rqxcaEYagPmf2F4JiY/HjhH+xhu0wwn/9B4fWClQarn7ulKFobvfcRqqynwAAAkBe9d+2IcTDwwk/M3CCH/XXrEPJe6bqTMCZqQB8FUFbhPAvMhzwt94g3Y44Z/eY0GlwMULeOBfsauxphQ3X7EcECL8hxdg7zoY0wQQ/mZhhL9rr+R6mqomS2bkWIBpbwDa7thVKoCPRp4T/sYbtMMJf7XHB1YAXsG//ingzmtOQXV5aBUAQgBSwn7loOPZAUoR/qnnJPydvRzqsSTuxaO7SlNvzZ6mvQEYazz+HkgsBAh/wj+TWmLmdAn/OeUCr53Pff9USA3VpfjgW9pC8IdE5ANk7zqQdHaAUoR/6jkJf2evNPVIoKW6tPI9rqYw0DQ3AFIIiI8BhD/hn0ktMXO6hD8AvKtN8K9/Kk4fumoFfB6BRGoaNQGEf+o5CX9nL6165Cfgl9PK6Gk1b96w9WpInEL4G2/QDif89TxKPcAlTfzrn4pXU2M53nZBa/ygiFkJOKzYHUD4p56T8Hf20q9nRfWCzitcTaep6V0BEPgE4W+8QTuc8Nf3uHKxQBUv+Uul0IeuPHnqSWR3QPiDbr+637kJIPxTz0n4O3uZ1iPkx9VB7jVtDUCLf+vrAJxvlET4a4cT/ia1AG9u5tI/lVrnrGjEqUvq4uEfc1xA6BTBhCaA8E89J+Hv7OWqHvH6mm91nOtqag1NWwMgpfykUQLhrx1O+JvUAiyvE1hSxeV/ylnvumQpUsEfkJAQCO4+MHV2AOGfek7C39nLZT0SgA3ro8pAl5qWBqDVv3UVBPT3XRD+2uGEv0ktIV29RGTyiaCKQO+8aDF8lpUMfzFFgOCeg7A7e1JkE/6EfxqvDOAfNri27rEjS9y5pNe0NAAS8k5IzZdN+GuHE/4mtUyFr5vLv/6p9JpbW4bXrpmPlPAHQmMSCCbtDiD8Cf80XpnDHxDwBiz5EXdO6ZX1BmDZPe21UuLdWsGEv3Y44W9Sy5TOmWehzseD/yi13nZ+MxzhH/2PQHD3wXATQPgT/mm8sgP/yMOb6r63r86do7Oy3gBMlOJ9AKqUgYS/djjhb1JLfNLFSTefpqjUuvI1zfBYSAP/sGwZvmzw1EoA4Z/BhIR/VCnhH1JVYKL0RneuzspyAyAFLPFhZRjhrx1O+JvUkpx0ZiOX/yk9zakpxTkr58SMpIC/lAgdJyBg7z4A2dlN+GcyIeEfVRr4R4Y/DCldv9pUymoD0Lqh/VJIrEgbRPhrhxP+JrUkJ51UK9BYwuV/Sl8Xn7Eg/MgZ/iK8myCyO0Cmu1gQ4e+6FsI/SSurvnP09e5mSK2sNgC2JW5LG0D4a4cT/ia1pE66YL6bfKqYdcnpC6AFfyFCn10J2LsPQh5OcXYA4e+6FsLfKdhWr7AbKGsNQJO/vRUQVzoGEP7a4YS/SS3OSWfM4V//lJnOXt6AmgqfFvxjQ+w9B+KbAMLfdS2Ef9o5/6biXw42uZstWVlrACxpfRgSnpQbCX/tcMLfpBbnJAFgWRWv/keZyWMJrF3RODWgAf+QBOy94d0BhL/rWgh/pXxWwPt+dzMmKysNwKn+nSWA/EDKjYS/djjhb1JL+qS2eqDSyxUAylzrTm4IPdCFf8zFguy9Hal3B4QC9Ysg/FMnFDf8Iyk343GZ+o9tQ2WlATiOsSsBzEvaQPhrhxP+JrUokgRwRmMGnxWqqHXOyY3m8A89CTUBe1IdE0D4pxPhb6TW6sHOy93NHq+sNABS4r1Jg4S/djjhb1KLIik81FbD5X/KndYsq3cHf8hokL33IGT0ssGEfzoR/uaybdzsPntKGTcA8/3b5wmBt8QNEv7a4YS/SS2KpJihpepLUVFUSs2vK0NjdSncwh9A+OyAjpgmQEOEf+oEwj9FNeKyyq93L1BHplfGDUAJgjdAwhcdIPy1wwl/k1oUSQnfzwXlvAAQ5V4rmqvdwz86Dth7OiCPaDQBhH/qBMLfSV6UBN6ZqUnGDYCEnLo8IeGvHU74m9SiSEoYml8BlHu4C4ByrxUttRnDP/LY3n0Q8ojexYIIf7e1pEksPPgjvIsq40sDZ9QAtK7fcjYkTg8VFBkl/FXhhL9JLYqkhCEJoLUqW98yqljVMrcic/jH3FrY3uOwO4DwT51A+Dtr6nN4ZuW3u9ZkYpVRA2B7ZOjgP8JfO5zwN6lFkZQC/gDQxP3/VIZqnlMRP5AB/AEJSIHg3g7YnakvFkT4u60lTWJhwz8s+4ZM7Fw3AKf6d5ZAincR/vrhhL9JLYokB/gDwIIyN3NQ1JTiGoBM4Q8R/Xza+zpgH+kl/J0SCH9nJcEfEMCN8EuvW0vXDcCgPfEWCMyJluFShL+Zj0lAMcIfABpKuf+fykzz68NdZLbgL8L/JwXkvoPRlQDC320taRKLBP5hza9sPnKpW1vXDYC0gu8IPSL8VeGEv0ktiiQF/AGgttTNXBQ1pbrKkuzDHwCEhLQBufdQ/O6AVH7pRPinTiwu+EcmfY9ba1cNwBL/xjJAXEH4q8MJf5NaFEka8AeAKi9XAKjMVFvpi3mWPfiHLi0gICFh7zsMeaQ3tV86Ef6pE4sQ/uHf3avxg6OVbuxdNQABUXsFIGrc5AKEv6mPSUCxwx8AKn3Z+vZRxaoSr4XyUg+mC/6AAKSE3HsI8mgvtL8ohH/qxKKFPwCgompcvsU50lmuGgApcZ2bPIDwN/UxCSD8Q/KBNwGiMlep14tpg3/MZrnnsPHFgkyCCH9Nr/yEf+i5wNvdTGPcADT52ysEcIWbyQh/Mx+TAMJ/Sj6LKwBU5vJYmFb4C4jwB1pC7k3cHeA8rUkQ4a/plcfwBwApcSUe6Sg3ncq4ARDCcwUA4zOtCX8zH5MAwj9eHovHAFCZy+NJ/ExOA/xjLOW+Q6mbAMI/dSLhH1tBVUW1702m0xk3AJaUxsv/hL+Zj0kA4Z+cyAUAKhvyxH2QphP+EZ9IE5D6YkHOIvxdexUA/KPpUhrvBjBqAJr87RUSMLoPMeFv5mMSQPinTgzyEAAqCwrakU/eDMBfCECGm4D9naEDAwn/1ImEf2pZeCse31liMq1RA2AJ8WYA2qcbEP5mPiYBhL9zYlBm61tJFbNCDcAMwl+I0JiUkPsVxwRE8+NF+Gt6FRr8Qxa1FccbjC4KZLYLQArtv/4JfzMfkwDCP31iwHb380BRsYpbSZop+EfOOlA2AYS/a6/ChD8AASGE0W4A/QZASgHN5X/C38zHJIDwVyQKYNzmCgCVucYng6EHMw3/aIgM7Q5IagIIf9deBQz/sK6CX2pzXTuw9bNbzwLQpIoj/M18TAIIf0Vi+OmJABsAKjONT9oYnQjOIvzDD6QdPiagL2ZjvAh/Ta/Chz8AzK1oOXKWbhnaDYAtrStVMYS/mY9JAOGvSIx5OjRpUBJFpdDA8MTswz8SC4R2BxxN3h1A+Gt6FQf8wwYe7V31JrsA0l78h/A38zEJIPwViQlPhya5AkBlpsGRSeQG/MOPJSD3HYlrAgh/Ta9igj8AC/qXBdZqAOb7t88DcLbTdsLfzMckgPBXJKaw7h1nA0Blps6+UeQM/KNBMnqKIOGv6VVk8A/7rKt67Og8HTutBqBEBK5wiiX8zXxMAgh/RaJDPUdHtA0pKqUO9Y0it+AfkoSEfaATsqtvKldbhL+O8hn+YVnSB63TAbUaAOlw+h/hb+ZjEkD4KxLT1NMxrG1KUSl1uG8EOQf/mKdyfydkl+o6AbEi/HVUAPCPmGodB6BuAB5/3APgDUn+hL+Rj0kA4a9IVNSzf9DdzwdFRXSwezQ34S/C80gJeeBIygMDk0X466hg4B8KfbPO6YDKgNaXTzoDQH3sGOFv5mMSQPgrEjXqGZgABgOu7nRNUQCAlw4N5i78o4/DTUBkd0BKEf46Kij4hzSnvLXrHFWQ8lfSltYlsc8JfzMfkwDCX5FoUM+hETYAlHu90jmEnIZ/1G/qwMBkEf46KkD4h7Jk8sp9otS/klJeHH1I+Bv5mAQQ/opEw3oOnMjWN5kqNh3uG8XgSCD0JKfhj5jdAUeBuJUAwl9HhQp/ABASr1fFpG8A/Bu9gLwQIPxNfUwCCH9Foot6Xj1unkNRALBt70DoQT7AP2ZcHjgCdB1L8ooT4R9VIcMfAKTA+fiW9KWLSdsANKFuHSCqCX8zH5MAwl+R6PLj1t6jjqGoVNq861iewT8m90BnwkpAjAj/qAod/uGXVVVudTlevwdQNAAeyEsIfzMfkwDCX5GYwcftyIhA/wSPA6DMtXl3X97BX0TmB8IrAQlNAOEfVTHAPzSngCWstLsB0v5C2hYuTnLNoCAdL8LfxWSEf5KXBLBriA0AZabxSRtbdvfnJ/zFVJA8eATo1rtYEOGfoXIU/gAghXTXALQ9uqsUEudlXBThn3pOwt85MQvwhwA297EBoMy06dU+jE3YeQz/qCPkwcQDA5NF+GeoHIZ/eP4L4ZdepxTHX8iRY8fPAVBO+JtOS/hPzenCK0vwB4A/HhVxXwaKUmnjX7vzH/4i/H9SQnY4NwGEf4bKcfiHh6srFh890ynNsQEQwjqX8DedlvCfmtOFVxbhDwC9o5LXA6CM9LsdXSgI+EcnSL0SQPhnqDyAf3Rz0Pk4AOdfRynWZVpQmoGpabQ91F664YS/SS2KpByFf0TtxzyZGFNFpEO9I9i+L3z+aCHAP8ZPdhwFuo/FWSYkKof0RPjnEvzD9VzotM25ARDyvEwKSjMQFeHvYjLCP8kr3fv7VEcm3lQx6RebOkMH0hcY/AEAdujAQNmduDuA8DdSnsE/HOf4x3zKBmDx59oXAqLFbUFpBqIi/F1MRvgneane392DQOcoVwEotZ7YdLgw4R9bwsGu6EoA4W+ofIR/SAvLv9+7KNWGlA1AMOB9jduC0gxERfi7mIzwT/LSfX//1M3jAKj0Otgzgs27+wsX/jGnCKLjKNDdn/wmEP7Oyl/4h1ImgylvDJTyl9GGfa6bgtIMREX4u5iM8E/yMnl/f7HfQtDdrxFVJPr3PxwILf8XNPxjajl4BDK6EpBsoy/CP9fhH8oT+g2AgNBfASD8U89J+DsnziD8AaB7TOKFAcdTYakily0l/v0PHcUBfyEgw1cMREe4CSD8nVUI8AcAITUbgMcf9wBIe/3gxILSDERF+LuYjPBP8jKFf0S/OszjAKjU2rijBx09I0UE/5jYQ12QqXYHKEX45w38Q4nrIGVSclIDsODFthUAqnQLSjMQM7euh9pLN5zwN6lFkZTn8AeAjYclusZ4LACVrK8/ubv44C9EOMYGOo4aNgGEf17BP6Ta0n/taUscTPpF9FriDN2C0gxERfi7mIzwT/LKBP5AqO5fHeJuACpeLx0awu//2h1+Vmzwl6EipQQOHY0/JsBRhH8ewh8QgBd20m6ApAbAtsVqnYLSDERF+LuYjPBP8soU/hH9/IDASJC7AqgpfePJ3eGb6BUp/KMvRwKHuiF70jUBhH++wj9kJNYmbkpqAIQl1yiNnAeiIvxdTEb4J3llC/6AwFgQ+B8eC0CF1dE7gv/4UweKHv6xfoe6IHtS7Q4g/PMa/gCkEKcmbk7eKSpxusrIYSDGQl2MrpduOOFvUosiqQDhH/H54W6BYa4CUAC++PNXMBGQIPxjKYHQMQFxKwGEf77DHxCAxGmJIXENQLN/ZwOA5CsGEf6p5yT8nRNzEP4AMBwAfsFjAYpe+7uH8eM/HgLhn/glC3sf6obs7U8xf/zLMBPhr+uTdfiH1FTzneMNsVviGgApJpP/+if8U89J+Dsn5ij8I/rRHqB/gmcEFLP8P34Jk8Eg4R//KhBX7KHu+N0BhL+DR9IDl7VE5pwW+AMAJsX4qtjnVnxowv5/wj/1nIS/c2KOwx8AxgLAd3dzFaBYtenVY/jFpkOEf/yrmNoYmV8C4nD4mADC38Ej6YHLWiJzTh/8QyMybjdA/J9BMqYBIPxTz0n4OyfmAfwjevKQwCtDbAKKTbaUuOf7O0I/tIR/TIEJ8A/7SCkhOkNNAOGf6JH0wGUtkTmnF/6h4fgDARN2AVirUucS/oS/IjGP4B/RV1/28h4BRabv/nY/tu07TvhPvYqpjQnwn5peAoe7gZRnB6QT4a/rMyPwByCBNCsAkMsJf4c5CX/nxDyEvwTwYr/Ek50l2ZiYygMdHRjDZ37yEuE/9SqmNjrBH4AUAoAdagJ6B6Anwl/XZ6bgH96augFo/fyOegg0pnGOE+HvYjLCP8lrtuAf0TdeFuga52mBxaCPf3cHjg9PEP5xprHzO8E/7CclcLgL6FWtBBD+uj4zCf+w5lR+u2t+5Em0AbCD9vI0znEi/F1MRvgnec02/AFgPAg88qIXNncFFLR+9McO/GpzJ+EfZxo7vwL+sX6He9KsBBD+uj6zAH9IALYHJ0WeT+0CCMqYBoDwJ/wViQUA/4g29wC/5K6AgtX+7mHc/a/bCf8409j5NeEvYl7k4W6gJ7EJIPx1fWYL/uH/LouMTa0AWGhTmRH+LiYj/JO8cgn+EZuvv2Rh3wjPCig0TQZtfODRdgyNBUH4ZwP+UyWKzthjAgh/XZ/ZhH9IVnIDICTaCH/CX5lYgPAHBAIS8D/vwUiQFwgqJN3/bzuxZe8ACP8swj+21s6EAwMJ/7Q+sw9/wBJyafRxjFnCMQDOBur5CX/CP9krV+EfUcewwBdfLMn8S0rlhB5/ugPf/N+9IPyzD38R+T4DwJFeoG+A8Ff45AL8EfoYp2oAkLIBIPxdTEb4J3nlOvwj+uNR4D8P+lzUReWStu8bwJ3f2Q7CfxrhH4mRNtCZ7sBAZxH+Zj4pnjgqFfzDit8FsMS/rQ5AQ2I84e9iMsI/yStf4B/Rt16x8Jc+NgH5qs5jo3jnw89hdMIG4T/d8JdT9Rzp1jhFMN42OiHhr/RJ8cRRaeAPAIvw6K5SINwABGE1Kw2U8xP+hH+yV77BP5L/D8978TIvFZx3GhyZxLUPPovOY2Mg/GcK/jGxkd0BChH+Zj4pnjhKAX8AsEpr6xYD4QZAehDXABD+LiYj/JO88hH+EU3YEp/a6sXRMV4kKF80Oh7E9V/ahJ0dQyD8Zxj+kW2R3QHHjsNJhL+ZT4onjtKAPwABry2XAeEGwJayydFAOT/hT/gne+Uz/CM6PgHcubkEXeM8MyDXNT5p4z1f2Yy/vHIMhP9swT9m7s5u4FjySgDhb+aT4omjdOEPAFKIVmDqIMDmlAbK+Ql/wj/ZqxDgH1HvmMTH20twbCJbv1ZUtjURsHHjlzfj/57vBuE/y/CPfY2dvUDf8TjbaALhr/RJ8cRRJvAHAFtiIRBuAASwiPB3MRnhn+RVSPCPqHME+OgfJXqH7Ix8qOxrbDKIdz/yHJ7a1gXCP0fgH51MAkd6gGODhL+hT4onjjKFPwAIgflA5BgAYJG6GPPC0oUT/ia1KJIIf0ebrBQkgEMow22bPOjsD2TuR2VFoxNBvOvh5/CbQvvLP7I9r+EfE9fZHT4wkPDX8UnxxFFu4B9OnFoBAJB0FgDhn0ktMXMS/sZeuQb/yIMelOHO9hLs75nM3JfKSCdGA7j+S8/i9zt6UHDwj83LZ/jHvHbRdQzodz4w0EiEf3jOdB4qL7kAmGoA4lcACP8MaomZk/A39spV+Efm7BOl+NBzPmzeM5q5P+VKXQNjuPyBp/HHnX0g/HMd/uEYaUMc6U17doCWCP/wnOk8dLysUANwqn9nCYBGdQ7hT/gnexUT/CMaLy3HPTvL8OvtQ5nPQxnp1c4hXPr3f8L2fYMg/PME/pHHmTYBhH94znQeul7hFYBBjM+JRhP+GdQSMyfhb+yVL/CP1lFRgQcPVOOfnuzGZDDzKSm1/u/5Lly64U842DMKwj/P4B+NlRBHe1OeIphWhH94znQeRl5ldd/rr7MmLas+fQ7hT/gnexUz/KMRFeV4YnIe7vjXg+gdYhcwXZIS+NJ/vYLrv7QJx0cCIPzzFf6RuSXEkWP6KwGEf3jOdB5mXgAw4gkutCwL9YR/JrXEzEn4G3vlK/yjkZXleHnOYrzna3vw/148kXkNVJz6hibwzoeexQP/+TJsCRD+eQ7/KUOIo33qJoDwD8+ZzsPMKyIrKOdbgGxMvZnwJ/yTvQj/FKmVZRhdtQL3/6QDDz9xBGOTvF5ANvSHF3pwwT2/D5/jnwBrwj/2Tcgz+Mc860rTBBD+4TnTeZh5xWVYot4SNuozNiP8M/JQJhH+jjazDf9oZmUZvGefgv/aehw3fHkXtu0by7yuItXwWAB3f/+vuPofn8GRgXEQ/gUI/5j3LGUTQPiH50znYeaVmCKBGguWaEjaYmiUKMLfpBZFEuHvaJMr8I+ki8pyeM8+BUdPSNz+z7vw+Z934vgIjw0w0e93dOM192zEt57ag9A6CuFfsPAPx0gpgaO9EP2DDu9B8juiFOGvrEXYdo1lx60AEP6Ef7IX4a/vE2kCRKkPv2rvw7VfegU/2zTAMwUU6jw2hg89tgXXPPgXHOwejgc74V/Y8I+8T129EAODSCfC39zLKUUK1FoiugJA+BP+yV6Ev5kPgFATcNYpECUlGBkP4pEnDuHGR1/Fc7tH3M9ToBoZD+ILP3sFZ33s//DjPx2CtBPATvgXBfwjr1F29UE4HBNA+Jt7pUsRENVeSNQR/vo+hL87r2KBf3QkvBIQ2Poi5PgkDvaO467v7cEpTRX4wKXzcd6Kquy8tXmqiYCNH/3hID7/01dwdGA0AUiEfzHCP2Iju46F6m2oiXspShH+mrWE55Ko9UKi2siP8M/IQ5lE+Dva5Av8o1sqyuA9axUC20JNACTw0uERfPIH+7FmSSVufP08rFteAY9in2chaXgsgB9sPIBHf7UbncfGEIUC4R9TYPHCP/JAdveGHjXUEP7qQYNaYoaFVeOFQHkmRoS/SS2KJMLf0Sbf4B+NqCiD98xV0ZUACAEB4K/7h/HJA/uxqKEEN148HxetqkZlaeE2Akf6x/Cd3+zDv/x2H/pPTCAOHIR/TIGEfxTC3b2hx/VTKwEpRfhr1hK/QQrUiqbPbv8TgAvdGBH+JrUokgh/R5t8hX+s5MgYAtteAsbDdxKM+xEFynwWLj+7AVecVYeTm0qz80+godWrV0+bty0lfru9C9//3QE8tfUoAnaUJiD8Cf908I/GSQAL5kDWVSOlCH/NWuI3hOaUT3sBlLkxIvxNalEkEf6ONoUAfwBARRk8Z65EcNsrwMQkEkE2Nmnj55v68PNNvVhUX4LL1zbgtStrsHSuL/k3Nsf18qEh/PiPB/EfTx/E0f7xhJdK+BP+mHqfVPAXALrCuwMSmwDCX7OW+A1T/7RWtWj67PYXAJxqYkT4m9SiSCL8HW0KBf7ROQWAkTEEtr08tRIQ3Rb5cY+fq7mxBBedVod1bVU4dVEpSn3Z7QaysQIwOh7EH3b24DfbjuJ/t3Who3ck/DEQSa+H8Cf8jeCPmJj5jZB1NQnTEf76KSJxzhfFoge275ESy3SNCH+TWhRJhL+jTUHCP6KRMQS2vQKMT4S3pYY/IEM//OEfca9H4Iyl1Th7WSVOay5H2/wS1JRbxjXFyk0DcHx4Ept3HcNfXunDn1/sxba9AxidDEwVT/iD8M8y/CPj8xsh66tjtmWg4oY/AOzySumwC4Dwz8hDmUT4O9oUNPwBoKIc3jNXhlYCIrsDFPAHBAJBoH3PENr3DIUnkJhTW4rTWsqxYmE5mht9mF/rw5xqLxqrPPBm0BtICRzpH8X+rmHs6xrG3qPD2NlxHH89MIiOnhFAyPDvsoBMABnhT/gD0wB/AOg5FnpapzgwUCXCHwB8oumz248BCfcDIPwz8lAmEf6ONrMB/1IPUO4FSsPA7B5N/OxlEf6xAyNjCDz/EjA2qYR/klf4x13E/EgmorK63IM5NSVoqPSiutxCeYkHJV4LXi9QURJ6saOyDIEgMDQ6ifFJG31DE+gbHEPf0CSCto34z0mkjvyDv2UJzKsuAYTAeMDG6HgQ4wGb8M8n+FsxCfMbIGtdNgGEf0SHkw8CJPwz8lAmEf6ONtMB/7oS4LR6ieZKoKlcYkGZxNwyG3NKJEo9El4k37kvKIGBSQ+2Hffg/x314tluiaBBbVrwB4CKMnjPOAXBbS9BTkwim/AHgKExG0NjY9gXNZDpa0r8wc9j+Hs8Fs4/uQFvXbsAb1wzDy1zyuHzJP8bjk4EMTQWwMHeUezvGcWBnlHs7xnGvp5RvHBwEP0jk4R/rsEfALqPhT6KpisBhH+sfKLps9sDADxORoS/SS2KJMLf0SZb8F9YAaydI7CmLogVNTYWlQXVXwOFjk1a+NmhEjy+z0JAYaUN/1iNjCH4/MuQ4xNZg3/8D3bxwN8SAm9btxD3X7MCyxfRStHaAAAgAElEQVRWJr5gY+3vGcGzuwfwl1392LSrHy8fHYZtE/5TD2cB/rF+8xqcTxFMFOGfqP6pBoDwz8hDmUT4O9pkUpAFiXXzLLxhYRDnNARQ403+iz5b6p304of7SvDfHam3u4J/RCNjCDz/MuRkgPB3Cf9rzm3C+mtX4KT5mYPfSZ39Y/jvLV34eftRPLfneHj9iPAHZgH+kdi5Gk0A4Z9KJ0TTZ7dPQsCbuIXwN6lFkUT4O9q4LWjdXODShTbWNU4v9FPppRM+PPSiD3uHpsYygn9Eo+MIbHsJciKQnEr4O8L/pPmVePjG03DJaXMTX+i0qnNgHE9sOYqfP9eFTXsGCP/I+EzCP1LH3AbI2vQXCyL8k0LHRdMD2ycA+GLHCX+TWhRJhL+jjWlBpR7grS0Sb20OYFH57N5fNygFfnmkFN/aZWE0zOuM4B/RyDgC218OHxMQFuGfEv5lPgt3XdGGu65sQ5kvs9MhM9X2g0N47HcH8LPNXaGDC6Mi/Kcd/pH3bF59chNA+KfzsEXTA9vHAZRExgl/k1oUSYS/o41JQXPLgL9dJnHpggAqPbML/kT1THjwyMul+Etv4haXb7hAeHfAK6EmgPBPCf/zTm7A1z6wBssXVqV6F2dN3YMT+Jc/dOA7/+8QeobGQfjPEPwj6XMbgNqquLIJf0cPWzQ9sH0MQClA+Jt4KJMIf0cbXaNyL/Dek2y8rXkSpZb+OzjTkgD+dKwUD+30YHASyAj+EcU0AYT/VM3lpR7ce/XJ+Mjly2AlgSp3NDIexLc2duCL/7MXwxNBEP7AtMM/Mt5YD4QvFkT4p/WYFE0PbB8FUEb4m9SiSCL8HW10jASAK1uB9y2bQL1vZvfvZ6LBgIVv7inDk4ez9OUeGUPg+VeBiQnCHxJvPH0evvK+1Whu1L+B6Wyrc2AcD/5qL77/9BHYMvRZJvxjY7IMfxmuY26K3QGmKmz4A8CYaHpg+4hE5JbAhL+ZCP9YZQP+q+oF7l41gdaK3FrqN9HmgVJ88UUfesY0//XT/UiMjIWPCQgULfznVPvw4A2n4rrzFqV6o/JCW/cP4tbvv4iXjpwAQPhPK/whAWFBzqmf2h1gqsKHPwAMe6ou+fCnAfgIf1MR/rHKFP4CwAdOlvjkqvG8+qs/lRaVBXHVoklAePDXATef35hBnxeisQ6ytx8IxrwvRQL/v1m3AD/9xLk456T4i5XmmxbWleKGC5oQsCU27RsMvb+Ef0jTAH9AQoyOAZYHKCuBkYoD/hACo2LhA9sHAaG/VkL4p04i/B1tVEYtlRL3rQ7i5OpA2rh81M4hHx7c6cPBEfVnJtVg9L0dGUNwe/hWwkUA/4UN5Xj4xlNx5dkLUr1Jea1Ne4/j5u/txL6eUcJ/muAf+x7IufVAjeZKQJHAP6xjYuEDO7oB6J1AS/inTiL8HW1URm9aBNy1cjynD/LLVONB4EeHyvDDPRbsGLAmywH+EY2MIbjj1fANhCLxhQV/SwjcdOli+K9fiaqypMuTFIwGRwO46Xs78dQLfVODhH/W4R+tf049UKO4QFRxwR+A6PZUX/Kh2wBRlwWztFsJf0ViEcL/gyskPtw2Aa8oXPgDgNcCzqwL4HXzgZeHLPRNpHpfFPAHAJ8XVkMtZO9A6IYFBQb/FU1V+NFd5+ADlyxGSSa3MswDlfosXHP2fAyNBbF53yDhP43wBwAxMgZ4PECpw+6A4oM/APR6qi+59WaoVgAI/9RJhL+jTTojDyTuO93G25omslN2nqjeZ+PyhZNoq7XwwoCFkehxjhrwj8jnhdVYGzomwE48ViI/4V9f6cOn/mYFHrvlDCyZW5Hu1ReULCFw6apGNNWV4rcvHoMtCf/pgH+kLjEyClhW8jEBxQl/ADgiFn5uRzskzs6CWUoR/orEIoN/hUfioXU2VlZNOsYUg0ZtgZ8fLsUP9nkxHnPCg/JzFHlrR8cQ3L4rdIpg3AbkDfzLSjy49c3L8LEr21BTUbjL/Tr6/UvH8LffegEjE0HCfxrgH3ovwyGNMbsDihf+kFJsFQs/u+OPEHhtpmapRPgrEosM/qUe4OFzglhVXdzwj9VAwINfHinBj/dZGA4afgeiTUDM+5kH8K8o9eC9Fy/GRy4/CU318XcjL2ZtfLkf7/jmDowFJOE/TfCPjMmGOqA29piA4oJ/WE+LhQ/89SlAvjkLZnEi/BWJRQb/Ekvgi2sDWFNL+KfSiWCoEfj3/R4MpXqLnN7a2CYgx+FfV+3DLW9cig+9aSkaqgxPzSoS/c+OXrzn2y8k33aa8M8a/KPeDbXhswOKEv4A8Bux8HPbfwYprsmCWVSEvyKxyOBvQeLzayXOqZ9wjKFCGg8Cm46X4WcHLTzfHz4QLu2/kZhqAiYnkIvwP2NpLd53yWK84/xmVJR6XL4zxaNfbOvB+7/3IoJ2BMQg/LMM/0jOVBOQXgUIfwiIJ7ywxUj8m5TZbIS/IrHI4A8A964h/HVV6gFe1zCG1zUAB0c9+E13Cf6304Pu8VTR4fe9vAye05fD3vFq+C6Csw//poYyXL2uCe+5qBWrmjO8JGuR6eoz56Jz4CTc+7PdhP80wh8AxLHB0FUZq51PESxE+AOABAa9EBjJhlnYkPBPl1iE8H/XScCl8wl/N2otD+KmxaP44GKBV4e9eLrPh6c6LXSPAUnve3kZrDUnw97xKuyJwKzAv6mhDG87pwlXn7sQ65bX5/TNenJdt17cjBePDOMHz3SC8A+/4CzDPzIgjh0PzZmiCShU+Ie3HvdKYEDjd1wZQPgrEosQ/ufOFfjAsjHNuignCUisqJzEispJfLAV6Jrwor3fi019XjzTKzAZORsw3ATIHa9CToZPLZhG+HssYPWSerzlzAW47Mx5OH1JXTJzKNf6p3ecjL09o3h693EQ/tMD/6mVgIGQbUwTUMjwBwAJ2e+1gD6ZoRnhr0gsQvi3VEqsXz0Jj8G7RulpfkkAV8wP4Ir5wHDQwisnvHhlyMKLgxZ2DJRhYM0KBP/6KuTkZFbh31hTgjOX1uGMpfU4a1kdLjylEbUVvhl+9cUjn0fg+x84FRc9tAUd/eF9QIR/1uEffUHHjoe2VFcWPPwBQAgc98ISfZDppib8p+Z04VWE8PcK4B/OCKLCk7939MsXVXpsnFU7gbNqp8Z6JiwcOa8NR48MoXtgAp0DkzjUP4ljJwI4MWFjclLi+Egw7ke8tsKLEp8HlaUezK0tRcvcSrQ0lqF5TgVa55ZjVXMNWovoIj25ornVPnzvfatw2VeeRyAYA2vCP6GuDOEfCek/HjomoCrms16A8A+/5wNe2LI3XWHpRPgrEosQ/gBw+yqJJRWFd2OffNHcEhtzS2ysqStH9E7fKRSwgVWrTkWpr7Avu5vvWre0Bp98Uys+/+sDhP90wh8I3aujbwBCytDugMKFP6TAgAXL6nVjRvgrEosU/uvmAlcuTHnIOpVj8log/PNEn7xsMdYtqwXhn1hXluEf2f01MAQxPHV8fPwLM1QOwh8ALCEHLASDKRoAwn9qThdeRQr/ah9wz6mTSb8FFEVlJq8l8O33rEBVqZfwj9Y1TfCP1NQ/CHEitgkoHPgDgG1bXZbwlPQmRaUR4a9ILFL4A8BHVgVR7+N+f4qaDi2dU471Vy4B4T8D8I9s7B+EODEc/77qKofhDwAlmOi2Dk+s7AcQjEalEeGvSCxi+K+qF7hoLi/zS1HTqZtf24Q1zdUg/BPGYufPFvwj6j+RsBKgoRyHP4DgibL5fRb8wgZEP+EfO6cLryKGvwWJj6/i0j9FTbc8lsCj72iDlfRlI/ynBf6RyQYGIYZHoaXchz8A9OF6EYwcAdSdzoPwVyQWMfwB4B0nCSzlUf8UNSM6q7UaN5y7IGaE8J9W+EeG+49DnFA0AfkBfwDoAYBQAyBxyCmK8FckFjn8q33A3y7mpX4paiblv3IJqko9IPwTc6YJ/pEnA2magPyBPwB0AZEGAOhIFUH4KxKLHP4A8MHlNio9tjqQoqisaU6VD3de0jw1QPjH1zFlGJeSEfwjsccHk5uA/II/JMQhINwASJHcABD+ikTCH3PLgDcv4F//FDUbuuOiRZhX7SP8E2ueMoxLyQr8I4ptAvIM/oCAFV71t8L/F9cAEP6KRMIfAPChlTZ4e3eKmh1VlnrwyTe1gvCfYfhHxgeHIEacjgnIXfgDU3/0J+0CIPwViYQ/AGBxtcDreNofRc2q3n/+ArQ0lAEg/GMM41KmBf6RoeMnUpwdkNvwDz+MaQCE7AAIf2Ui4R/VjcsCvNMfRc2ySjwCH7l4EeE/ZRiXMq3wj/gNnohZCcgD+AOQdkwDEPTJDsJfkUj4RzW3DHjtXJ72R1G5oBtfMx/zq0sI/9mAfyRmILQSkA/wB4CJSc/UMQBdnzx9GAL92jNmsDkiwt+d12zDHwDec1IQXsG//ikqF1TmtXDL65oI/5iQGYV/5H0bTLU7IIVmGf4ATuCm2mPA1DEAEMBBrRkz2BwR4e/OKxfgX+0DLl3Av/4pKpd08wULUF3mJfwxS/AP/64KVRMw+/AHBHZHHkYbACmnBl0VRvgneRUa/AHguqUSZRb/+qeoXFJtuRfvPmce4T+L8I+GD56AGBlDknIB/gAgxZ7Iw6kVAIFXXBdG+Cd5FSL8Af71T1G5qpvOWwARhVTMBsI/4YUh4acwe/CP1CwGh4DYUwRzBf4AAJncAEgpHBoAwt9MhQv/CxcAC0p5u1+KykWtmF+O85dWE/6zDH9AQkJADA4DI2M5Bn9ACKRoAESqBoDwN1Phwh8CuLqZ8KeoXNZNF8TcJIjwT3hhSPgpnD74R22Gwk2Ao2YW/hAAhJXcAJRPTLySHJnZXADh79Yr1+A/tww4vY4X/qGoXNZbVzdiTpWP8E96YUj4KZx++EdrHRqO3x2QWJdK2YQ/AAiZfBDgfv+ZA4jeFpjwN1Nhwx8ArmiW8GTl9VEUNV0q8Qhcc/ocwj/uhSHhp3Dm4B/9z4lRYDR2JWCW4A+cGPvbuugZf1ZckMSrhL+pCh/+gMDr5nH5n6LyQdedOYfwj/og4adw5uEfiRFDI+HdAbMGfwiIlyCmLuIS1wAIYaU5E0BvLoDwd+uVq/BvqZRYXMGj/ykqH3Tu4mosbigF4Y+En8LZgz/CNYsTI8DoOJSaBvgDgA35UuzzuAZAStu5ASD8k7yKAf4AcFWLnZ2XSVHUtEsI4Noz5oLwT/FiZxH+oecCYuhE+iZgmuAfHnNuAADrBbdzAYS/W69chr8EcF4jl/8pKp/0N2sasgx/EP4xNUuX8I/MIU4Mp24CphP+AIQUL8Y+j2sAAhDPu5kLIPzdeuU6/JsqgKZyNgAUlU9a01SJRTUloSdZgT8I/xj4x89lBv9oBYlNwDTDPyTLuQHovW/VEQBHTeYCCH+3XrkOfwB4Q5PMzsulKGrGJATw5lPqCf8chX8kSZwYBsbGZwj+GBrfU7M3dsBKEfS87lwA4e/WKx/gDwCvabQz96coasZ12aq6+AHCH7kE/+jugOFRyDHVgYEZwx8AtsMv4n7QkxoAATxP+Cd7FSP8KzwSJ1fx4j8UlY96fVstyn3hn3jCH7kI/4h36DoBE0itrMAfENieOJTUANhCJh8HkEKEvzuvfIE/AJw3X8Ar9N91iqJyRxU+C+ctqSb8I+M5Cv+IkTWS6hTBLMEfgIClbgC80rtNZUT4u/PKJ/gDwNoGHvxHUfmsi5bXEP55AP9IqDUyBoxNxMQrpI0CgWCKg/yTGoDDEyt3AzjhZEP4u/PKN/gDwOo67v+nqHzW60+qBeEfW1fuwj8SYw2PxjQBaWQAfwCByZLBpNP8kw8C9AtbADtS2RD+7rzyEf71JUBTGVcAKCqfdXpTBeorPIR/nsA/UrM1MgqMp2kCzOAPCbyA61uS7kiU6iwASCm3JI2lm5Xwd/TKR/gDwHlzZeSdoCgqT+WxBC5cVkP45xH8I2PW8AgwnvpiQXqa+p0XkM+likjdAFjimbjn6WYl/B298hX+AHB6A5f/KaoQ9Jol1SD88wv+kTwxMha/EuAC/gBgQzybKiplA+ALBP4UeUz4u/PKZ/gD+P/tnXmAZGV57p/3q+p9754dZnCQJYZgJEJigokxF3NjYhLvjUFgFkDBURHQQYRsl4n3klxQ2WRHGSFBlLjgxkVQUUQIIjsEBGafnpnu6X2ml9rOe/+o7dTpquo6VdVV55x6fn/MVH3nO+/7ndPd3++tsxWO72YBQEgQeMdRnZR/On0mjvflnxlu+nRAmfIHAElYpR8B2PuPbxsEsIfyLy+W3+XfGgaO5ON/CQkEv72qA61hQ/ln4vhH/ul2mZsDoiVcGJh/nj8Ube9/NV/vvAVAMoA8Tvm7j+V3+QPASf1AiOf/CQkELWHBbx/ZTvn7VP5pS8tMpPiFgQXmeQWewumS9xNdwQIAisfztlP+BWMFQf4Ab/8jJGj87ppOyt/H8k/nl9lCRUDheV4MfpGnGUCRAsCImb8S5V8wVlDkDwDHdrEAICRIvO2IjuQLyt+38k8HkrkIJKcIKDLPCyCW/DzfIqBIAbA/cuB52B8IRPkXjBUk+QPAmnae/yckSLx1ZRvlHwD5Z8Y6F4FEY5k8heQPIB6JxvLeAQAUOwWw5d1xCJ6yBXIJ5W/HL/JvDymWtvD8PyFB4tglrWhvTkuf8ve1/NP5ZqOQaKyY/AHBc/jw0kP5ugDFCgAAovIY5V84VtDkDwAn9Aucv5KEEH8TMoITVrRS/kGRf+q2Tp1NHwlwDCuFWih4+B9YoABASH5cdHleKH87fpI/BDium/InJIi8dVUnKP8AyT/dPDcHicVytyW7SeUXAAMz1hMo8sVA86H87fhN/gDwpg4WAIQEkeOWtlD++frY4/lN/vbTATHHkQDAippQ+QXAy1tOiCqKVxA5G7FAE+WfDeNF+QOCI9p5BwAhQeS4pW3JF5R/bl6/y18FEAUiUUg0bg/+NM7qHkERip8CSPKjhbtQ/nb8Kn8AWNnKAoCQIHLcklbKP6jyT68XsV8TIAu6e+ECIGQtEITyt+Nn+XeEgZ4wbwEkJIis7m1Ge3Mot5HyR2DknyYag8TiMMCC1/AtWAAMf/q3XgSwP/9Syt+On+UPAMd0a3V2GSHEcxgBjlnSkm2g/BE4+ad/ptFYZK75UP6n+dpY+AiAiELxkzwLFmyi/LNhvC5/AHhzZ9kRCSE+4LilrckXlD8CK/9k+5M4ffUsFqCUawAg864DoPztBEH+ALCGdwAQEmiOW9JK+Qde/gIx5ocogZIKgJCJ/wiZXU/52wmK/AFgNe8AICTQHL+0lfIPuPwBhSX4LkqgpAJg8LLf3ivAc5R/LkGSPwCsamMBQEiQOX5pK+UfcPmLMbuj5614CSVQUgEAAJaY78xrpPwLhvGb/AGgv4l3ABASZI7qa86+ofwDJ3+IQEUeRImUXACoWLkFAOVfMIwf5d/dDDSX/NtACPEjXS0hdLaEKP+Ayh9QIBz6Pkqk5Cn/4KW/+TyA3dnBZ6H8s2H8KH8AWNlWbhJCiJ9Y2d2UfEH55x+fn+WP0GykY66Eh/clKf0zn4gC8h3Kv3AYv8ofAJa3lp2JEOIjVnY1Uf7zxhwE+RtA8JNSbv9L4+6gr+M0AOWfDeNn+QPAMhYAhDQEK7ubKP984/O7/AFYIfNtuMBVATDUO/sogPHMoEuC8i91OPYXtZQ/ACxlAUBIQ7Cqq5nyd44vAPJXaDwWbr0fLnB3BGDTyTEAD1L+2TBBkD8A9Lcs3IcQ4n8y1wBQ/gGSPyBGHsPZ3aNwgfvrvgXzbwcs0LHYW7dJKX93cdygAPqb+AwAQhqBlV1NoPyDJX8AsJqaXB3+B8ooAKwZ/QGAmeK9KP9Sh2N/US/5A0BfM08BENIIJAsAyj9I8ocRKyz4JlziugA4uOWEw4pijxmk/Esdjv1FPeUPAXp4BICQhmB5VxPlHyT5i8BAnpg9e8kgXFLWo18M9N78Syj/Uodjf1Fv+QNAW6hQT0JIkOhpSU/7lL992/0qfwiQMPJ1lEFZBcCSWTwIwHGxAeVf6nDsL7wgfwBoFh4BIKQR6GwJgfIPjvyhiDdb7fehDMoqAF7eckJUAdsFB5R/qcOxv/CK/FtDQKgq+5sQ4nWaQ4LmUHLqp/xzkvtP/gDEyM+mz+8cQhmU/fR3Y6VPA1D+pQ7H/sIr8geAriZ+CQAhjURni6H8c5P7Uv6AwIJ+DWVS9sw/FPnNnwKyL6eR8i8SJ/vCS/IHBF3hskdECPEhXS3Ji34of3/LH2JFYqHZb6BMyv/ot0UsKLIXHlD+ReJkX3hN/gDQ2cQCgJBGorPZUP5+lz8UxoS+i3PXTqBMKjr2a9TcmxlL2VD+buO4YSH5A0BnU1V2PiHEJ3Q0hyh/n8sfAihCX0YFVFQAHPi745+C4OXyI1D+buO4oRT5A0BHiEcACGkkOpsN5e9z+QvMnsju/odRAZVf/SW4s9wVKX93cdxQqvwBoC3sOjwhxMd0toQof8d6fpI/AKjBXdhS2f3bFRcATTHcBSDibi3K320cN7iRPwA0CY8AENJIhA3l72f5Q8Qykqjo8D9QhQJg8O/fMqoQF19BSPm7jeMGt/IHAFOVnwUhxC+EQ6D8/Sp/AAJ9ZO7clTtRIVW5AdyI9aXSelL+buO4oRz5A0CYjwEgpKFoCjn/6Cl/v8gfAFRDZZ56z6UqU//Qp9/yY0C3Fe9F+buN44Zy5Q8AYR4BIKShCOcc9qP8/SR/qBmPrlri+pv/8lGdz34iKmK2FulA+buM44ZK5A8AIV4DQEhD0ZQpACh/X8kfAgnjq/hzcXndXX6qdvDX0sSXAcTnL6H83cZxQ6XyB5yfBgghQacpBFD+qXYfyR8CWAYVX/yXpmoFwMHPnHBAgf+X20r5u43jhmrIHwBC5Y+eEOJDwiY19VP+2dc+kD9Eno6dvexZ59JyqerlX2LhJts7yt9lHDdUS/4AvwmQkEYjbJxzKuXvefkD0JDc6lxaCVUtAIYv+42HFPoK5e8+jhuqKf/kajwCQEgjkXsTAOXvB/kLMBKzlvy7s0clVPcGMBEVNTdQ/u7iuKH68gdiFg8BENJIzMbSD5Cj/P0gfwBIiLkZ58qcs1clVP0O8PDs4bshGK08EuXvZDHkDwCzCRYAhDQS0zELlL9/5A9oJC5ttzh7VUrVC4B9W06eUan0KkXK38liyR8A5hLlhSCE+JOZmILy94v8AZjwPTi384CzZ6UsyjPg1MgNAGLlrU35O1lM+QPALAsAQhqKmZhF+eeM1cPyF1HAXOfsWQ0WpQAY3Xz8IIBvu1+T8ney2PIHgDmLzwImpJGYjjlnM8rfo/KHCB6Ontv/orN3NVi0mV+MXu9yDcrfQS3kDwgmomVvHSHEh0xG7If9gij/VB6fyx8KJBK41tm7WixaATB8yVseB/BUab0pfye1kj8A7JnmEQBCGomdE9HUq6DKH4GQPyCvxD+89IfONarF4s78gqtL6UT551JL+QPA8BwQUxYBhDQCh6MWRmcSoPw9Ln8RqMG1yWsAFodFnfUPHj7+WwBeKtyD8ndSa/mnc45Gq7D/CCGeZ9dEFJS/9+UvgoMxLPk351rVZHE/9m0RS0QKHAWg/J3US/4AMBINlZeDEOIrdk7EKH+Pyx8AEgY3VfvBP04W/bjv8JrjvgrIG7mtlL+TesofAA5EeAqAkEZg52TqDm3K37PyB2QsHjKLdvFfmsWf9U+XhML6fLaB8ndSb/kDwK8nq7AvCSGe55n9s5R/ZpkX5Q9YRq7H+oEp59rVpiYf+0a6p+8UYDflPx8vyB8AnhnnKQBCGoEnB2dB+QNelT9CZiw+NbYoD/5xUpvjvptOjlnAtZR/Ll6RPwC8cQiYTrAIICTIDE/HsWMiSvl7Vf4isGBdh4uOXfRP/0CtCgAAzdPdtwMYXqgf5V97+ad5Y5oFACFB5om9M5S/h+UPwVh80rh8iF751KwA2Ldl1QxUrynWh/Kvn/whwCuHeCEgIUHmyX2pi8opfy/KH5bodbho8c/9p6npjN8S6rgBwGC+ZZR/feUPAD8/yCMAhASZh7Ydpvw9Kv9af/oHalwA7N28elaAf3G2U/71lz8AvDQhGIqwCCAkiLw2GsUrByPJN5S/Y6h1kr/JyB+WWtfW8tM/UOMCAACGuw7dAWBb+j3l7w35p3livKm88RBCPM03Xkm5hfJ3DLWOn/yz4x+LT03e4Iy02NT+pO+mk2MKvQKg/L0mfwB46EC4jAERQrzON1+Zovy9In/bJ38oYEG/UKsr/+3U5aqvkcPH36vACwU7UP4ljKVwY7nyB4CXeRqAkMDx6kgEr45GQPnbh1pH+dt3A7A/LvGanvvPDKUeSbFFLKj5x7zLKP8SxlK4sRL5pxc+NNxS+pgIIZ7njmfHQfnbh1on+dvHnxqsQv4JG1dMOyPWgrrd9zVy6bHfg+rPchop/xLGUrixGvIHgHt3GcxYvCWQkCAwPpfAv79oO/9P+ddP/raUqfVeiO3s3+qMWCvqOsuLmP+VfZP5p8KguS8o/1JS5y6cjgt+fJBHAQgJArc9PY7DUYvyTw/IA+f80y+sRPwSbBHLGbVW1LUAOPjp4x4FcD/lX8pYCjdWU/5p7t4eRqIaPxNCSN2Yiytuf2aC8k8PyCOH/QEFDL4X/9DyHzmj1pK6H+cNheQSoArfeUz5u4ix8MLhCPDzMR4FIMTP3PXCBIZm4pS/lw77J3PHEG7+jDNqral7ATD0qeO2i2hl33xE+buIUdJCAMANv27itQCE+JTxuQSufGyE8vee/CGW3ho9q/tVZ+Ra443ZvSV+JYB9Za1L+buIUdLCDKMR4L7B1pL6EkK8xZZHD2J0JkH5e0z+ACYi0ebPOiPXA08UAAcvOOGwAP/gekXK30WMkhbO63r3doPBCB8ORIifeH5oDlufnaD8PXTBX7oVZHkAACAASURBVLqPZfC/sal7xBm9HniiAACAg5uPvQvAL0tegfJ3EaOkhXm7JiC44Y3W8vcvIaSmWAp86qEhJED510X+9t0wb19aO+It/Tc6o9cLzxQAEFHLyCdRisspfxcxSlpYsKsCeGJE8INhngogxA987olRPLlvjvL3ytX+9nYT3ozTJerMUC+8UwAAGPvUsU8Aek/RTpS/ixglLSzY1Z7zmlfD2DbDLwoixMv8fPcMrnxshPL32GF/CCAqP4xu6LvfmaGeeKoAAAAVXA4g/5ciUP4uYpS0sGBXZ864Ci5/sQ2HE/yeAEK8yMGZBM793n7ElfKvufztuyHfJ3+VaQnLJmeGeuO5AmB08/GDKjr/gkDK30WMkhYW7Jo/p2BoDvjca23QcreXELIoJBQ4+7v7sO9wDJR/DeVfymF/FVia2DK3rm+XM0u98VwBAACjU8fdLIonMg2Uv4sYJS0s2LWQ/NM8Mmxw0/Z2XhRIiEdQABc+eAA/3TUNyr/G8relLCR/QF+KH7WksmfdLBKeLACwRSxjEpsAxCh/NzFKWliw60LyT3PfnhDu2tNeeg5CyKLx948cxFdemADlX0P5l3DOPyV/yzLYhHdL3JnJC3izAAAwtPktLwK4NvmO8i899eLKP82d28P49gEWAYTUk//z2Aiu/+UoKP8af/K374bC8oeI3BTfMPC4M5NX8GwBAACt0rYFItsAyr+01LWRf5prfx3G9/fyIUGE1INr/nMM//KLEVD+NZZ/aZ/8IaIHIonJ/wUP4+kCYO/m1bNGcAHlX0rq2so/3e3q7e249fk4EsqrAgipBQkFLnl4GP/4s2FQ/t6Uf3J/hC7AuWsnnNm8hKcLAAAY/uSxP1To11yvSPkv2LVS+af56mQ//vmxOOZiLAIIWUwORy188JuDuOWZMVD+3pU/gO9EN/Z9y5nNa3i+AACApoS5WIDSn51M+S/YtVryT/NTHcDmn0QxMWOVPh5CSMnsnYrhtHt244Fth0D5e1j+oodDcb3Qmc2L+KIAGLr0mGEFziupM+W/YNdqyz/NS21Lsf77s/jZ65HSx0UIWZBvvXoIv/+VXXhheA6Uvxfln11PIZ+e/dDAHmdGL1Km2erDwDWv3wPgrIIdKP8Fuy6W/O0JdOc+/NWqOC744x60N/nqV6zhOPHEE+s9BFKEqYiFf3hkGHc+Pwk+3tfL8k+vog9F1vf/GUR8cT7UF0cA0iQkfAGA/JUV5b9g10WXP5KTiaw9At8dasY5W/fhxX2x0uITQnJ4ePs0Tv7S9jrJH/Ce/G39PSN/Ww7BaASt5/hF/oDPjgAAQP/nX3uPGPkh7GOn/BfsWhP521GFtWsf9MAo/vj4TnzsXX04stdX9WZDwCMA3uPVkQiu/MUIvvXKoXmCbtxP/s5t9Yr87evpB6MbBu5zZvUyvisAAKD/mtdvF+B8AJR/CV1rLv90TlVoqggQI/jrt3Xjw6f2oL/Nl792gYQFgHfYdyiOf/3FCO56YQIJC5R/PeRf2hf7wLl/1cidsfV9H3Zm9Tq+nImXf+75jnio/TkIjkm2UP6FutZN/rZ3ums/9MAIIEBr2OCv3taN97+1A0f18yFC9YYFQP15YWgOtz4zgftensRsQjNSovz98clfDXbGIom34sNLDzkzex1fFgAA0HftG6ca6KOAuD6uTPm7i+Omk+ZbrArdnSoC0h1EcNKaNnzg7d049U0taOK3DNcFFgD1IWYpvvfaIdz53AQe2TmTbMz4l/L3jfwFlho5Lb6u7xFnZj/g2wIAAAaufeMqAJ9xsw7l7y6Om0555Z9ZaD8SkF0oIhjoCOG0t3Ti1GPacOLKZjQZ31xD43tYANSO2bjiJzsO4wevH8YPXj+EkdkEcsRO+fvrsD8AEXNVdEPv5c7MfsHXBQC2PBIe6F79Mwj+oJTulL+7OG46FZV/ppNCdx2ADiWf6SR5/uDbmgzedVwH3nlMG45b1owVXZL5+yTVhwXA4pHQ5AV9vxycwYPbpvGTndOYiaYelOUUO+VfYHs8+skfAMQ8F2vp+T2cLlFndr/g+6m1/wtvrBajzwHSX6wf5e8ujptOJck/0zl5OgBDY/Or/cz62bb2ZoO3rW7DiUe04PhlTVjeZTDQEUJncyljJQvBAqA6HJyOY+9UDNvGY3h6/yye2T+LZw9EMB1LZH/HM6e/Mv9Q/ukB+U3+MBHR8O9Gz+58wZndT/i+AACA/uu2/Y2ofqPQcsrfXRw3nVzJP7NS8kgAhkfzhM8zOeTMnMk/xrYmg9V9YRzR24SlXWG0hJPFQsgAXS0GTSGDVrcPIcqTP/1OMy+KjDV3lHliF0tsm2Rycjij2v8vA8dqnf3LS1wpPYnnjzNvo+1SsHUu+HchJWxXSZuer6DM36R5BTifw1ELcUsxMZf8/1DUQiRu4cB0AnsmY9gzGcNs3MqNI8V+ppR/NrwP5Z/cno/FNvbe6szuNwJRAADAwLWv3wzIx5ztlL+7OG46lSX/dOfMkYBR2/qlyd/ZR9UxkaXXczyla/5EmW/SzebMzN354olj56f6CMQ2+RUaM5KTHqSIKOwTtEP+eSd8x3qpPpr+lsbM5Cl5Jj3krp8jWfvknmpynpPJN4nm2WeZyTOzz1IvxMzfBwVF4Wiz58+s49xP8wVo2UXm/BnkbBhycxb7GTh//yj/bLuX5F/BOX+IAAn9Wuyc/jOd2f1IYJ7M0jUZ3qyQ5+xtlL+7OG46VSR/ABCBrFkJLB/InfQy3TJ/nSgsUso/Z79R/nn2E+Vv33Zb8rw/58DL3/l741b+ipdjA3O+u9+/EPN2o59Zev22Yy1LnwbQRfm7i+OmU8Xyzwmm0D2pawIy3bIiLixSyj9nf9Zb/kV+BpS/I2bd5J9nzHWXv3NbvXzYH4fFhH8vur7rv5wj8CuBOQIAAAcvfvPrUFxI+buL46ZTVeUPIHskoD/znvKX3NeUv2Nbbfkp/9x2yt/2+2xbYMTxp+7Yl4IF5K8QlfOCJH8gYAUAAIxuPuYugd5C+Veacn6nqss/vShdBKwYQO7MSflT/o42e37KP7ed8rf9PtsWVHrOP/m3e0P07N6vO0fgdwJXAADAaPvkxYA8mm1xZasFVsttpPwrSOiY3GX1itSRgEIipfxzdhrlj/n7ifK3b7stcN6fc+Dl7/y9KU/+T8Vaey91jiAIBLIAwKaTY2HI6QAGXdoqS97Vchsp/woS5lskAlm9EljWl3cCofzzTJ71kj9s+Sj/bPpMnPlj5gV/eX5/PX3OXwETGoslcLqfH/ZTjGAWAACGP3n0EEzoAwJEXK+c11u5jZR/BQmLxREB1qwElvbntFH+eSbPesrfLlTKn/IPovxFLDXxdTi3b6dzFEEhsAUAAIxdtPY/LcEnXa2UV065jZR/BQkXiJP5A1yzIlkEUP7I2WmUf579RPnbt92WPO/PmfJHKfKHGvPZ+FkDDzpHESRcTet+pf+6N24H5PwFO+bdG7mNlH8FCReIM287FcCeA9DhsfmTJeVP+ecmo/xzk+f9OVP+KE3+It+Ir+s5HSILTvl+JtBHANKMtU1cAOCxop3yyim3kfKvIOECceZvZ2ryXr0C4rxFkPKn/HOTUf65yfP+nOsjf8m2+UX+xjwd75k5O+jyBxqkAMCmk2NGQ6cD2J13eV455TZS/hUkXCBOXvlnXgpw5ArIstQtgpQ/5Z+bjPLPTZ7351w/+attW70vfxjZHY9G3oe/XDXjHEkQcTXF+53+a14/ASHzCyh6Mo1590BuI+VfQcIF4hSVv71JNXU6YNwxiTqjOSeyzIxQlvznx2sw+TuF1fDydxah88fM+/zz/P56/T5/EaiYQ6KhP4xt6HzeOZKg0hhHAFKMbT72ZUDPABAHUEBOuY2UfwUJF4hTsvyB5B/q6hWQZX3Z9/OiOSeyzIxQ9if/3HiUf7pPY8oflH9g5S+Whqz1jSR/oMEKAAAYu/iYBwH5OOVfIKeLYddM/pn3kiwC7LcIZqI5J7LMjFC2/DUnHuWf7tO48reHmz9myj/P768/5A8R/XTizL7vOkcSdFxN90Gi/7pt1yLnFsHcXUH5V5BwgThlyT8ngAJ7h6AHx0H555lEKX/HhiE3J+Xvf/mnY837O7D/bObv33zyV9WtiQ19H3KOpBFouCMAacYmjr5EBfcn3+X+xlH+FSRcIE7F8geSf8BHLocs7c12zkxkmRmB8oe9j2THRvlT/jlj9Zn8q/DFPmn5Q+RHiSN7P+IcSaPQsAUAtojVHOlYD5in7c2UfwUJF4hTFfln+knq7oA+yt++PuVvi4PcnJR/MORvC1OZ/K1X41Hrb/FuiTtH0yi4mvqDyJJrd660jPUYgKMp/woSLhCnqvLPCazA4DD04EQmC+Xv2AbKP09sW7tv5G//3Zq/XuDln45VBfmL6J5YQt+Jjf35bw1vEBq+AACAnmt3HW1M4jEAKwt2ovzLHsuiyT+9oiqwdxg6Mkb5w96nRPnbxEP5U/5Blz9ERoyad0XXd/2XczSNRuOeArAx+amjtgPWnwIYy9uB8i97LIsufyD5B37kMsjS5C2ClD/lP29jKX/KPxlnShL6Xso/CQuAFOMXH/OSUflzANM5Cyj/ssdSE/mnMQIcuRy6pB+UP+WfP7atnfLPbm7DyF9nAX1/bGPvr5yjaVRYANgY/eTaJ43o+5H+CmHKv+yx1FT+6blbkkUA+nuz7QXkj0aXf3rfUP62fWAP5wX52/ZJI8q/mlf7QxMalg3xdX2POEfTyLAAcDB60Zt/BNFzIbAK96L8i1EX+dvfr14BLO0tKv/sug0qf/s4KP+cfeAd+TvG3Gjyt4WpUP4qEtqU+GDvN52jaXRYAORh/KI33wvoJ/IvpfyLUVf5Z9oFOGI5MNCT7UD5Z2Pbx0H5U/7Blj9gQpfG1nV/2TkawgKgIOMXvfkWUb0kt5XyL4Yn5J9ZniwCZKAXORN0Zl3Kn/Kn/D0nf+fvTcXyN5+Nn9X9BedoSJKyp+NGoe+L2y6Hyr9S/sXX9JT87ahCBoego1O2dSl/yp/y95z8q/zJX0PmxsSZPRc6R0OysAAogf7rt39aRT5XUmfKP/8K9ZB/GlVgcAgYmwLlT/ln0mfiUP7Z8HWSfzpWteRv5LbEmT0fg4irqaLR4CmAEhi7+OjPA/qZBTtS/vlXqKf8geQEccQKYKAPlD/lT/kHW/4w5prEWb0fpfwXhgVAiYxfdPTnILisYAfKP/8K9ZZ/emURYNUyaH/P/LiUP+VP+QdD/iKfj5/V47h2ixSCBYALxi9ce7Uo/nneAso//wpekX8aA8iRy4EB23MCKH/Kn/IPhvyNXB1f13upczSkMCwAXDJ28dotAnw200D551/Ba/K3T+KrlkH7uyl/yp/yD4r8Ya6In9Vb+AgtyUvZ03Sj03v99gvFyPXI/pnlgfJ3xyLL344C2DsETEyB8qf8KX/ntvpM/ut7sh/KSMmwAKiA3hu2bxQxX1ZoeP5Syt8dNZR/GgWw9wAweSg3GeXvyOFX+efuA8rfnj4Q8lcAl8bX9/E+/zJhAVAhvV/c8X4AXwPQkm2l/N1RB/mnUSRvERxPPyeA8s/NQflT/s6xFtseew7Mz1FF+YvgU7F1fdc7R0NKhwVAFej74s73KvQbANopf7fUUf5p0kXAxCFQ/s5xUf6Uvz1nse2x53BsfHUf8hOXMD4SO6Nvq3M0xB0sAKpE9407fs+oPACgf8HOlH/+Fesh/zSq0MFhyMQhyj8zLsqf8rfnLLY99hyOja+m/AXTGrLOSJzR/33naIh7WABUkd4bdp4EwYMAlhXsRPnnX7Ge8k/nVQX2HYRMFHliIOVP+ecbH+WfX/7pWFWRv4zCkr+Kb+h+3DkaUh4sAKpMz827jjaWPqCK4+ctpPzzr+gF+WcCKDA4nCwCKH9bDlt+yj+3nfJfdPmr6I6wFXpvZEP3r52jIeXD5wBUmcmPH7U9EQ39ASCP5iyg/POv6CX5C5ITzxHLoL3dRXJR/pQ/5Z+bA/NzVEn+EPwqkQi/g/KvPiwAFoGpzavHJjT6pwrcC4DyL7Si1+SfeZsuArry5KL8KX/KPzcH5ueomvzlR/HO2J9gY9ewczSkcsqeykkJqErvjTuvgMgVxTtS/mXHqrb8czpp6pqA1HMCKP/cMecmq4P8kd1vlL8jvf/lLyJ3xw53n4dNEnOOhlQHFgA1oOfGnecJcAuAkh4YRPmXGGsx5Z/prJDBYWBqGpQ/5U/523Ngfo4qyR8GV8fP7Lkc/Ea/RYUFQI3ou3HX+xR6L4DObCvlX3asWsg/s5IC+4YhU9Opt5Q/5U/5L4r8jYmIsT4eO7PvTudISPVhAVBDem/a8Tao3A/gKMq/gli1lH9mZQX2H0w9LAiUf93kn7sPPCP/Ij/nwMu/evf5H4Ax/zN+VvcTzpGQxYEXAdaQiQvWPpdA+O2A/Ni5jPIvMVY95A8kJ6qVy4CeLsqf8qf801RL/sY8G5eZd1D+tYUFQI059IkjRydG1vyZAFel2yj/EmPVS/72/KuWAT2d2ViUf2PLP3e35KwXePk7f2/KlD8k/NV4U/epWLdql3MkZHGpZDokFdJ30851lsodANoAUP7FYtVb/jkIsH8YmDwMyr/B5Z/ze9VA8q/KJ3+TUME/xdf3/qtzFKQ2sACoMz037vwdwHwbomtKX4vyL4VFkb9dsOkigPKHc6LPxoFj31P+lL8CxoxpM86In977sHMUpHbwFECdmfzEm55pUvw+oE+WtgblXwqLKv9UWKxcBnR35i6n/G1x4Nj3lL/v5V+Nw/5GXgwJTqH86w8LAA8wcuGafZOJ2LtE8cXiPSn/Ulh0+dvCJ68J6KL8520YHPue8ve9/E2qXwXyV5FvxqzI78+t693uHAWpPdWaHkmV6L1x91+r6FYAfblLKP9SqJn87TkVkP0HgUOHs7kp//kbS/n7W/62MK7lbyECwd/FNvReBz7cxzOwAPAgvTduP0ol/DVA35FsofxLoS7yt72Q/cPAoRlQ/nk2lvL3r/zTscqVP/AarOYzYmd3POscAakvPAXgQSY+cfSuyfDwH0FxVXImKADln6Gu8k+l1ZXLgO4Oyt+5sZS/f+Vf+WH/e2ItsbdT/t6kWlMlWSSSpwSwFc5TApR/hrrL37FADowAU4cp/yDIPyPF+esFXv6VffKfhcrm2MbeW53ZiXdgAeADem7edTQsuReC3wVA+dvwlPxtPeTASOp0QDomspMo5U/5Z5YFUf7meQPzwciG7l87sxNvwQLAL2zRcM+y3ZcA8lkAzYW6Uf4VUrH8kZ0rh0aTRwIo//zbTvl7U/6VXfB3T6yl93ycLrPO7MR7sADwGd037T5FRP8NkOOdyyj/CqmW/NMvFJCh1OkAyj932yl/b8q/7E/+OiVNoY9Ez+z9ujMz8S68CNBnTF2w5qmuOXMSIFcBsNLtlH+FVFv+qf90+ZLkw4Iof8o/s8yj8i/zgj8IHgqbthMof/9RremT1IGeW3e9B5ZsVeCI3CWUvysWQ/6OADJ0EDg8C8qf8ves/G1hSpO/TinkstjGfl7o51NYAPicrhv3DojRWwD922QL5e+KxZa/LZAMjwBTM5mulL8jZj3l7xxzI8m/nMP+oj8IWW2bZs9uH3RmJf6BBUBA6Lpp11/CmJtFcWTOAsq/MLWSvy2i7B8Fpmcof8rfkb5O8nf7yV90UtW6PLZxKT/1BwAWAAGi77ZtPYl482ch+AQAQ/kXoebytwUeHkmdDgDlT/nXT/4uP/mL4EEjev7s+oG9zozEn7AACCBdN+/+QxG5HcBvuF+b8l80+dsTHBxNng6g/Cl/r3/yN5hUlct5rj94sAAIKtfsaetqxxWiuARAuLSVKP9Fl7890cGx5BcIUf6OXDWQf0aK89cLvPzdfPI3cn8UiY9jw9L9zmzE/7AACDi9twyeZEHvAPTtxXtS/jWTf3p1BXR4DHJ4mvLP18cej/J3jNWx6VX/5I83Eq24OPHB/gecmUhwYAHQCGxR071icD1UPw9g6fwOlH/N5Q9A05Pv0Chkepbyp/xR90/+kFlY1heiOnAlzpU5ZyYSLFgANBA9N+/qUzFbAFwAIJRspfzrJ3/bAIZTRUBOX8qf8neO1bHpVZS/QB4QmE/Mbezd4cxCggkLgAYkeVog8UXAnJqzgPIvEGPeizLHks6ZJ44CGB6DTKefE0D5U/7OsTo2vWryt7YnNHRx4uz+7zszkGDDAqBRUZXu2wY3QOUqQFdQ/oVizHtR5ljSOYvFUWBoDDIzR/lT/o6xOja9KvLXWQi+EE3wcH+jwgKgwem7bVtPAi1XQHGBFvmWwcJQ/qXGKS7/NAocGIXM2uZjyp/yd257pfJXud80ySfn1vXtckYnjQMLAAIA6Ltt35q4Wv8A4DyU/CVRlH+pcUqTfxoFhseTpwMof8rfue2lyL/Q1f4m9JTVgsviH+x7xBmZNB4sAEgOPTfve7tlrKsB/EnxnpR/qXHcyT+NAkPjkNlZyn/emCn/+dvpyGHbhckX1mtQXBE9Z8nXIVLSnwEJPiwASF46bh88LWTp1QqcNH8p5V9qnPLkn0aBkXHI4VnK3zm+YvJ3jrmx5T+o0CtjRw3cgXdL3BmVNDYsAEhhtqjpXDn4N6J6FSBrk42Uf6lxKpM/sqIZHk9eGEj5U/45OTA/R3oXQsYt6OfjbQPX4nRx3F9KSBIWAGRhtu5o7Y6Ez1eYywAcAYDyXyBOdeRvYzh1dwDlz8P+ReWvs5CmL0YPT/5ffPyocWc0QuywACCls3VHa/dc83lqcBng+NrhEqD83cXJfaPJImA2Asqf8s/JYQQQREXMXUZb/3n27PZBZyRC8sECgLjnvpebu8b7zgH0n1BiIUD5u4uT5w2gChkZB2aStwhS/raYjSp/kRkx+IoRc9Xsxv7dziiEFIMFACmf+15u7h7rOUMFVwBydKFulL+7OHne2FDIwfHMcwIo/waVv8ghFXN3LJS4kt/UR8qFBQCpnBteb+lq6dgA6GYAb7EvovzdxcnzJg/JIkBnI5R/g8lf1BpOmND18UPjN+KiY6ecaxPiBhYApHqoSscd+/6bsXAxBO+j/N3FyfOmIJoqAjAbofwd6wVT/maPZfT6ePuSm3lVP6kWLADIotB+y+BJIaOfUpgzIQhXJSjln8qZfSUjk8DsbJ59Q/kD8L/8RbYr5Aux6MAd2CQx51qEVAILALKo9N6y/02xED4q0E0AessORPmncjpjKGRkInkkwBmL8s++95P8RSwx8jOV8PXRjb3fBZ/cRxYJFgCkJvTdNtYTw9zZEHwUjusEFoTyT+UsFCN9JGAu20j5Z9/7RP4CjEDMV0TCN82d27fT2ZOQasMCgNSc9jv2vd1Y+AgEGwG0Fu1M+adyFouR7CEjU8kigPLPvveD/EWeU9E7Yh3RrTh9Nc/vk5rBAoDUjY47hpYbjZ9jQT4qwJvmdaD8UzmLxbA3pk4HzEVy2ih/+1g9In+RCEQesDR8TfzD/Y+BkDrAAoDUn/s01DWx7y8s4HyB/BmAMOWfzlksRr5GhYxOALNRUP4elL/I65Yxd8RnZ77ER/WSesMCgHiK7i/t6VcNfUBhNgJ6ar4+lP9CjakjAZHo/L6Uf2oPpZfVQP5ipoyxHohL09b42f0P86I+4hVYABDP0nHbgRON6EYVrAOwEqD8S2jMRJDRCWAumu1L+af2THrZIspfNCGCn1oqd8VCy/4D58ocCPEYLACI97lPQx1T+98DxUZA/hpAe8G+lH9OJBmdTBYBlH9qj6SXLYr81RjzK4V+PdTc+dWZDR18RC/xNCwAiL+4bV97p+C9auQDUPwFgK7MMso/T0CFjKeLAMp/MeQvoq9oKPw1g6Z/n/tQ73YQ4hNYABD/snVHa3ui7T1G8T4V/R8AllL++VZRyNhU8u4Ayr8q8peQ+bWqfBNNoa9Gzxl4GYT4EBYAJBjc93Jz+2T/aSLyNxC8D4plrmMEUv7pBAoZnwIiEcq/HPlrKA4jT0DMd0xL7D9mN67iV+8S38MCgASSztv3n6AG74PKaRD8MbDA9xEEWf6ZRKkiIHNNAOWfO4bcdjEyrsCjIuZ7c7HIt3jbHgkaLABI4Om6bd8SK2T+FIo/h+C/A1iS06ER5G9ndBISjWX7Uf7JeEYSgLwAkR8nQqHvxPcsfRxbxCq8IwnxNywASGOxRU3bmqFTJIHTRPAuCP4AQEdjyD8lVVXIxBQkEm1s+SfHt1Mgj4jIQ7Om7SGc1zNWaO8REjRYAJDG5jZtagsPn2wg71LoHynwTrHfWVAKfpJ/ZgAKGT8EiUYbS/4iO0XwuFr6qHQ3PTy3bjmv2icNCwsAQuxs0XDbkQd+x8D8kQLvhOAUAKsK9vej/O0jGZ+CRGynA4Ikf0hCTegVY+SXCCUelVb8eHb9kXsL7SVCGg0WAIQsQNtdI0dILHEKRE6B6ClQnAKg19/yTw9IgYnkkQBfy18AhQxC5GlR/WU8HHo8Dn0Sm1bNFNt8QhoZFgCEuEVVWu4eOTYct04B8DsqciKAE1DsSAE8KP8MqSIgEvOH/MUkINghwEsqeE5j4V9FWjqexKbukZI2lxACgAUAIVWj556Jvkg0+lvG0hNg5LdU8ZsCnAhgiXfln4qhCpk8BERi3pG/iAW19qqEXzeCVyQkL0dVXowbeZaf7AmpHBYAhCwynXcfWJaw5Fi1sBYwRxvRtQocDWAtgCMAmLrKP4NCJg4D6dMBNZG/KARDlsgOo7ITIbwBkdcSgtdiZuglbDqZoidkkWABQEg9ueH1lpaO3jeFja5VkTWWYqUIlkOxCqrLILIKwHIArTnrVV3+aRQyYT8SUIn8NYFQaFQVY4DsF8E+NbLXQHZBZWe8s21HFId24ty1/KY8QuoACwBCfEDv1vHemVBipYnrMhEZUFjdAnSpoFsg3Qr0iqJHJ6qJ7QAAAFlJREFUBd0AugBpA9AOSAsAQDQERXcmoKATQFP+bKkjAbFYTIE5I2ZaBXFVmRJBFCLTKjIpicSkhGXCEhkXxbhKeMxIdH/MtO5vbm7aP33+8qFF3zGEkLL5/3HhBSICQhnSAAAAAElFTkSuQmCC";

const ChatMessage = _ref => {
  let {
    chatLog
  } = _ref;
  return /*#__PURE__*/React__default.createElement(Box, {
    sx: {
      width: '100%',
      padding: '10px 0'
    }
  }, chatLog.map((chat, index) => /*#__PURE__*/React__default.createElement(Box, {
    key: index,
    sx: {
      display: 'flex',
      justifyContent: chat.role === 'assistant' ? 'flex-start' : 'flex-end',
      marginBottom: '10px'
    }
  }, /*#__PURE__*/React__default.createElement(Paper, {
    elevation: 2,
    sx: {
      backgroundColor: chat.role === 'assistant' ? '#fff' : '#e0f7fa',
      padding: '12px',
      transition: 'width 0.3s ease',
      borderRadius: '15px',
      maxWidth: '80%',
      // Limits width to 80% of container
      width: 'fit-content',
      alignSelf: chat.role === 'assistant' ? 'flex-start' : 'flex-end',
      // Align messages based on role
      boxShadow: '0px 0px 7px #898080',
      color: '#1a3673',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React__default.createElement(Box, {
    sx: {
      display: 'flex',
      justifyContent: chat.role === 'assistant' ? 'flex-start' : 'flex-end',
      marginBottom: '10px'
    }
  }, chat.role === 'assistant' ? /*#__PURE__*/React__default.createElement(Box, {
    sx: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React__default.createElement(Avatar, {
    src: chatbot,
    alt: "Chatbot",
    sx: {
      mr: 2,
      borderRadius: '50%',
      width: 32,
      height: 32
    }
  }), /*#__PURE__*/React__default.createElement(Typography, {
    variant: "body2",
    sx: {
      fontSize: 14,
      fontWeight: 'bold'
    }
  }, chat.content)) : /*#__PURE__*/React__default.createElement(Box, {
    sx: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React__default.createElement(Typography, {
    variant: "body2",
    sx: {
      fontSize: 14,
      mr: 2,
      fontWeight: 'bold'
    }
  }, chat.content), /*#__PURE__*/React__default.createElement(Avatar, {
    src: user,
    alt: "User",
    sx: {
      borderRadius: '50%',
      width: 32,
      height: 32
    }
  })))))));
};

function UserChat(props) {
  const theme = useTheme$2();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const {
    chatLog,
    setChatLog,
    themeColor,
    responseReceived,
    setResponseReceived,
    error,
    setError,
    isLoading,
    setIsLoading,
    successMessage,
    setSuccessMessage,
    showInitialView,
    setShowInitialView,
    requestId,
    setRequestId
  } = props;
  const endOfMessagesRef = useRef(null);
  const [apiResponse, setApiResponse] = useState(null); // New state for storing API response
  const [appCd, setAppCd] = useState('Chat_Bot'); // User input for app_cd
  const [input, setInput] = useState('');
  const layoutWidth = isSmallScreen ? '100%' : isMediumScreen ? '80%' : '70%';
  const inactivityTimeoutRef = useRef(null); // Ref for the inactivity timeout
  const [sessionActive, setSessionActive] = useState(true); // State to track session activity
  const [openPopup, setOpenPopup] = useState(false);
  // const INACTIVITY_TIME = 30 * 60 * 1000;
  const INACTIVITY_TIME = 1 * 60 * 1000; // 1 minute in milliseconds

  // Scroll to the bottom when a new message is added
  useLayoutEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, [chatLog]);

  // Start or reset the inactivity timer
  const resetInactivityTimeout = () => {
    if (inactivityTimeoutRef.current) {
      clearTimeout(inactivityTimeoutRef.current);
    }
    inactivityTimeoutRef.current = setTimeout(() => {
      handleSessionEnd(); // End session after 30 minutes of inactivity
    }, INACTIVITY_TIME);
  };

  // Handle session end due to inactivity
  const handleSessionEnd = () => {
    setSessionActive(false);
    setChatLog([...chatLog, {
      role: 'assistant',
      content: 'Session has ended due to inactivity.'
    }]);
    setOpenPopup(true); // Show the popup
  };

  // Update handleSubmit

  async function handleSubmit(e) {
    e.preventDefault();

    // Prevent empty messages
    if (!input.trim()) return;

    // Validate appCd and requestId
    if (!appCd.trim() || !requestId.trim()) {
      setError('Please provide valid app_cd and request_id.');
      return;
    }
    const newMessage = {
      role: 'user',
      content: input
    };
    const newChatLog = [...chatLog, newMessage]; // Add user's message to chat log
    setChatLog(newChatLog);
    setInput(''); // Clear the input field
    setIsLoading(true); // Set loading state
    setError(''); // Clear any previous error
    setShowInitialView(false);
    resetInactivityTimeout(); // Reset the inactivity timer on user action
    try {
      // Dynamic API URL based on user inputs
      const response = await fetch(`http://10.126.192.122:8001/get_llm_response/?app_cd=${appCd}&request_id=${requestId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([newMessage])
      });

      // Check if response is okay
      if (!response.ok) {
        if (response.status >= 500) {
          throw new Error('Server error, please try again later.');
        } else if (response.status === 404) {
          throw new Error('API endpoint not found.');
        } else if (response.status === 400) {
          throw new Error('Bad request. Please check the input parameters.');
        } else {
          throw new Error('Network response was not ok');
        }
      }
      const data = await response.json();
      setApiResponse(data);

      // Handle different formats of modelReply
      let modelReply;
      if (typeof data.modelreply === 'string') {
        modelReply = data.modelreply; // If it's a string, use it directly
      } else if (typeof data.modelreply === 'object' && data.modelreply.NAME) {
        modelReply = Object.values(data.modelreply.NAME).join('\n'); // Convert object to a string
      } else {
        modelReply = 'No valid reply found.'; // Fallback if modelreply is neither
      }
      const botMessage = {
        role: 'assistant',
        content: modelReply
      };
      setChatLog([...newChatLog, botMessage]); // Update chat log with assistant's message
    } catch (err) {
      // Enhanced error messaging
      setError(`Error: ${err.message || 'Error communicating with backend'}`);
      console.error(err);
    } finally {
      setIsLoading(false); // Set loading state to false
    }
  }

  // Handle focus or input changes
  const handleInputFocusOrChange = () => {
    setShowInitialView(false);
    resetInactivityTimeout();
  };

  // Effect to handle session end when the user closes or navigates away
  useEffect(() => {
    resetInactivityTimeout();
    return () => {
      if (inactivityTimeoutRef.current) {
        clearTimeout(inactivityTimeoutRef.current);
      }
    };
  }, []);
  return /*#__PURE__*/React__default.createElement(Box, {
    sx: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: layoutWidth,
      flexDirection: 'column',
      margin: 'auto'
    }
  }, showInitialView && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    style: {
      width: '40px',
      height: 'auto',
      overflow: 'hidden',
      marginRight: 2
    }
  }, /*#__PURE__*/React__default.createElement("img", {
    src: chatbot,
    alt: "Chatbot",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain' // Ensures the image fits within the container
    }
  })), /*#__PURE__*/React__default.createElement(Box, {
    component: "p",
    sx: {
      marginTop: '10px',
      fontSize: '16.5px',
      fontWeight: 600,
      color: themeColor,
      textAlign: 'center',
      marginBottom: '19%'
    }
  }, "Hello there, I am your Chat Assistant. How can I help you today?")), /*#__PURE__*/React__default.createElement(Box, {
    sx: {
      flex: 1,
      width: '100%',
      overflowY: 'auto',
      maxHeight: '73vh',
      padding: '10px'
    }
  }, /*#__PURE__*/React__default.createElement(ChatMessage, {
    chatLog: chatLog
  }), /*#__PURE__*/React__default.createElement("div", {
    ref: endOfMessagesRef
  }), isLoading && /*#__PURE__*/React__default.createElement(HashLoader, {
    color: "#1a3673",
    size: 30,
    "aria-label": "Loading Spinner",
    "data-testid": "loader"
  }), successMessage && /*#__PURE__*/React__default.createElement(Alert, {
    color: "success"
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "font-medium"
  }, successMessage))), /*#__PURE__*/React__default.createElement(Box, {
    sx: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      maxWidth: '100%',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React__default.createElement(Grid, {
    container: true,
    spacing: 2,
    sx: {
      width: '100%',
      maxWidth: '100%',
      position: 'fixed',
      bottom: '50px',
      left: '67%',
      transform: 'translateX(-50%)',
      width: '70%',
      marginLeft: '8px',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React__default.createElement(Grid, {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/React__default.createElement("form", {
    onSubmit: handleSubmit,
    style: {
      width: '100%',
      backgroundColor: '#fff',
      boxShadow: '0px -2px 5px rgba(0, 0, 0, 0.1)'
    }
  }, /*#__PURE__*/React__default.createElement(TextField, {
    fullWidth: true,
    placeholder: "What can I help you with...",
    value: input,
    onChange: e => {
      setInput(e.target.value);
      handleInputFocusOrChange(); // Ensure elements disappear when typing
    },
    onFocus: handleInputFocusOrChange,
    inputProps: {
      maxLength: 400
    },
    InputProps: {
      sx: {
        '& .MuiInputBase-input': {
          padding: '12px',
          fontSize: '13px',
          fontWeight: 'bold',
          color: themeColor
        },
        '& .MuiInputAdornment-root button': {
          color: themeColor
        }
      },
      endAdornment: /*#__PURE__*/React__default.createElement(InputAdornment, {
        position: "end"
      }, /*#__PURE__*/React__default.createElement(IconButton, {
        type: "submit"
      }, /*#__PURE__*/React__default.createElement(FaTelegramPlane, {
        className: "h-6 w-6",
        color: themeColor
      })))
    }
  }))))), /*#__PURE__*/React__default.createElement(Modal, {
    open: openPopup,
    onClose: () => setOpenPopup(false),
    closeAfterTransition: true,
    BackdropComponent: Backdrop,
    BackdropProps: {
      timeout: 500
    }
  }, /*#__PURE__*/React__default.createElement(Fade, {
    in: openPopup
  }, /*#__PURE__*/React__default.createElement(Box, {
    sx: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 300,
      bgcolor: 'background.paper',
      borderRadius: '8px',
      boxShadow: 24,
      p: 4,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React__default.createElement(Typography, {
    variant: "h6",
    component: "h2"
  }, "Session Ended"), /*#__PURE__*/React__default.createElement(Typography, {
    sx: {
      mt: 2
    }
  }, "Your session has ended due to 30 minutes of inactivity.")))));
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  //
  // Note to future-self: No, you can't remove the `toLowerCase()` call.
  // REF: https://github.com/uuidjs/uuid/pull/677#issuecomment-1757351351
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).

var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }
  return getRandomValues(rnds8);
}

var randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native = {
  randomUUID
};

function v4(options, buf, offset) {
  if (native.randomUUID && !buf && !options) {
    return native.randomUUID();
  }
  options = options || {};
  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    offset = offset || 0;
    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}

const drawerWidth = 180;
const Dashboard = () => {
  const isMobile = useMediaQuery("(max-width:950px)");
  // Lift the states up from UserChat
  const [chatLog, setChatLog] = useState([]); // Chat log state
  const [responseReceived, setResponseReceived] = useState(false); // Hide helpfulness prompt
  const [error, setError] = useState(''); // Error message state
  const [isLoading, setIsLoading] = useState(false); // Loading indicator
  const [successMessage, setSuccessMessage] = useState(''); // New state for success message
  const [themeColor, setThemeColor] = useState("#1a3673"); // Default theme color
  const [requestId, setRequestId] = useState(v4());
  // New state to control visibility of the initial view (avatar, prompts, categories)
  const [showInitialView, setShowInitialView] = useState(true);

  // Handle New Chat button click
  const handleNewChat = () => {
    setChatLog([]); // Reset chat log
    setResponseReceived(false);
    setError('');
    setIsLoading(false);
    setSuccessMessage('');
    setShowInitialView(true); // Show avatar, categories, etc.
    // setRequestId(uuidv4()); // Generate new unique request ID
    const newRequestId = v4(); // Generate new unique request ID
    setRequestId(newRequestId);
    console.log('New Request ID generated:', newRequestId);
  };

  // Define the theme dynamically based on selected color
  const theme = createTheme({
    palette: {
      primary: {
        main: themeColor
      },
      background: {
        default: themeColor
      }
    }
  });
  return /*#__PURE__*/React__default.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React__default.createElement(Box, {
    sx: {
      display: "flex",
      height: '100vh',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React__default.createElement(CssBaseline, null), /*#__PURE__*/React__default.createElement(AppBar, {
    position: "fixed",
    sx: {
      zIndex: theme => theme.zIndex.drawer + 1,
      backgroundColor: themeColor,
      boxShadow: "-1px -4px 14px #000",
      height: '64px'
    }
  }, /*#__PURE__*/React__default.createElement(Toolbar, {
    sx: {
      justifyContent: isMobile ? "space-between" : "flex-start"
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    style: {
      width: '120px',
      // Explicit width
      height: 'auto',
      // Explicit height
      overflow: 'hidden',
      marginRight: 2
    }
  }, /*#__PURE__*/React__default.createElement("img", {
    src: elevance,
    alt: "Elevance Health Logo",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain' // Ensures the image fits within the container
    }
  })), /*#__PURE__*/React__default.createElement(Typography, {
    variant: "h6",
    noWrap: true,
    component: "div",
    sx: {
      flexGrow: 1,
      textAlign: "center",
      fontWeight: "bold",
      fontSize: isMobile ? "1rem" : "1.5rem",
      marginLeft: '-80px'
    }
  }, "Chat Assistant"))), !isMobile && /*#__PURE__*/React__default.createElement(Drawer, {
    variant: "permanent",
    sx: {
      width: drawerWidth,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: {
        width: drawerWidth,
        boxSizing: "border-box",
        backgroundColor: "#fff",
        boxShadow: '-1px -3px 10px grey'
      }
    }
  }, /*#__PURE__*/React__default.createElement(Toolbar, null), /*#__PURE__*/React__default.createElement(Box, {
    sx: {
      position: "relative",
      height: "100%",
      padding: 2,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React__default.createElement(Button$1, {
    variant: "contained",
    size: "large",
    sx: {
      position: "absolute",
      bottom: 16,
      width: "90%",
      left: "50%",
      transform: "translateX(-50%)",
      fontWeight: "bold",
      backgroundColor: themeColor
    },
    startIcon: /*#__PURE__*/React__default.createElement(HiOutlinePencilAlt, null),
    onClick: handleNewChat
  }, "New Chat"))), /*#__PURE__*/React__default.createElement(Box, {
    component: "main",
    sx: {
      flexGrow: 1,
      bgcolor: "#fff",
      p: 3,
      height: "100vh",
      overflow: "hidden",
      paddingTop: '64px'
    }
  }, /*#__PURE__*/React__default.createElement(Toolbar, null), isMobile && /*#__PURE__*/React__default.createElement(Box, {
    sx: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 2
    }
  }, /*#__PURE__*/React__default.createElement(Button$1, {
    variant: "contained",
    size: "large",
    sx: {
      fontWeight: "bold"
    },
    startIcon: /*#__PURE__*/React__default.createElement(HiOutlinePencilAlt, null),
    onClick: handleNewChat
  }, "New Chat")), /*#__PURE__*/React__default.createElement(Box, {
    sx: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: '100%'
    }
  }, /*#__PURE__*/React__default.createElement(UserChat, {
    chatLog: chatLog,
    setChatLog: setChatLog,
    responseReceived: responseReceived,
    setResponseReceived: setResponseReceived,
    error: error,
    setError: setError,
    isLoading: isLoading,
    setIsLoading: setIsLoading,
    successMessage: successMessage,
    setSuccessMessage: setSuccessMessage,
    showInitialView: showInitialView,
    setShowInitialView: setShowInitialView,
    themeColor: themeColor,
    requestId: requestId,
    setRequestId: setRequestId
  })))));
};

export { ChatMessage, Dashboard, UserChat };
