var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/*! For license information please see main.04eca99e4e900cb5c6d1.js.LICENSE.txt */
(function () {
    "use strict";
    var e, t, n, r, a = { 448: function (e, t, n) { var r = n(294), a = n(840); function o(e) { for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
            t += "&args[]=" + encodeURIComponent(arguments[n]); return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."; } var l = new Set, i = {}; function u(e, t) { s(e, t), s(e + "Capture", t); } function s(e, t) { for (i[e] = t, e = 0; e < t.length; e++)
            l.add(t[e]); } var c = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement), f = Object.prototype.hasOwnProperty, d = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, p = {}, h = {}; function m(e, t, n, r, a, o, l) { this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = l; } var v = {}; "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function (e) { v[e] = new m(e, 0, !1, e, null, !1, !1); })), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach((function (e) { var t = e[0]; v[t] = new m(t, 1, !1, e[1], null, !1, !1); })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function (e) { v[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1); })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function (e) { v[e] = new m(e, 2, !1, e, null, !1, !1); })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function (e) { v[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1); })), ["checked", "multiple", "muted", "selected"].forEach((function (e) { v[e] = new m(e, 3, !0, e, null, !1, !1); })), ["capture", "download"].forEach((function (e) { v[e] = new m(e, 4, !1, e, null, !1, !1); })), ["cols", "rows", "size", "span"].forEach((function (e) { v[e] = new m(e, 6, !1, e, null, !1, !1); })), ["rowSpan", "start"].forEach((function (e) { v[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1); })); var g = /[\-:]([a-z])/g; function y(e) { return e[1].toUpperCase(); } function b(e, t, n, r) { var a = v.hasOwnProperty(t) ? v[t] : null; (null !== a ? 0 !== a.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function (e, t, n, r) { if (null == t || function (e, t, n, r) { if (null !== n && 0 === n.type)
            return !1; switch (typeof t) {
            case "function":
            case "symbol": return !0;
            case "boolean": return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
            default: return !1;
        } }(e, t, n, r))
            return !0; if (r)
            return !1; if (null !== n)
            switch (n.type) {
                case 3: return !t;
                case 4: return !1 === t;
                case 5: return isNaN(t);
                case 6: return isNaN(t) || 1 > t;
            } return !1; }(t, n, a, r) && (n = null), r || null === a ? function (e) { return !!f.call(h, e) || !f.call(p, e) && (d.test(e) ? h[e] = !0 : (p[e] = !0, !1)); }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = null === n ? 3 !== a.type && "" : n : (t = a.attributeName, r = a.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (a = a.type) || 4 === a && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n)))); } "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function (e) { var t = e.replace(g, y); v[t] = new m(t, 1, !1, e, null, !1, !1); })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function (e) { var t = e.replace(g, y); v[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1); })), ["xml:base", "xml:lang", "xml:space"].forEach((function (e) { var t = e.replace(g, y); v[t] = new m(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1); })), ["tabIndex", "crossOrigin"].forEach((function (e) { v[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1); })), v.xlinkHref = new m("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function (e) { v[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0); })); var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, k = Symbol.for("react.element"), S = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), P = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), N = Symbol.for("react.memo"), z = Symbol.for("react.lazy"); Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode"); var D = Symbol.for("react.offscreen"); Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker"); var M = Symbol.iterator; function O(e) { return null === e || "object" != typeof e ? null : "function" == typeof (e = M && e[M] || e["@@iterator"]) ? e : null; } var F, U = Object.assign; function j(e) { if (void 0 === F)
            try {
                throw Error();
            }
            catch (e) {
                var t = e.stack.trim().match(/\n( *(at )?)/);
                F = t && t[1] || "";
            } return "\n" + F + e; } var I = !1; function A(e, t) { if (!e || I)
            return ""; I = !0; var n = Error.prepareStackTrace; Error.prepareStackTrace = void 0; try {
            if (t)
                if (t = function () { throw Error(); }, Object.defineProperty(t.prototype, "props", { set: function () { throw Error(); } }), "object" == typeof Reflect && Reflect.construct) {
                    try {
                        Reflect.construct(t, []);
                    }
                    catch (e) {
                        var r = e;
                    }
                    Reflect.construct(e, [], t);
                }
                else {
                    try {
                        t.call();
                    }
                    catch (e) {
                        r = e;
                    }
                    e.call(t.prototype);
                }
            else {
                try {
                    throw Error();
                }
                catch (e) {
                    r = e;
                }
                e();
            }
        }
        catch (t) {
            if (t && r && "string" == typeof t.stack) {
                for (var a = t.stack.split("\n"), o = r.stack.split("\n"), l = a.length - 1, i = o.length - 1; 1 <= l && 0 <= i && a[l] !== o[i];)
                    i--;
                for (; 1 <= l && 0 <= i; l--, i--)
                    if (a[l] !== o[i]) {
                        if (1 !== l || 1 !== i)
                            do {
                                if (l--, 0 > --i || a[l] !== o[i]) {
                                    var u = "\n" + a[l].replace(" at new ", " at ");
                                    return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
                                }
                            } while (1 <= l && 0 <= i);
                        break;
                    }
            }
        }
        finally {
            I = !1, Error.prepareStackTrace = n;
        } return (e = e ? e.displayName || e.name : "") ? j(e) : ""; } function B(e) { switch (e.tag) {
            case 5: return j(e.type);
            case 16: return j("Lazy");
            case 13: return j("Suspense");
            case 19: return j("SuspenseList");
            case 0:
            case 2:
            case 15: return A(e.type, !1);
            case 11: return A(e.type.render, !1);
            case 1: return A(e.type, !0);
            default: return "";
        } } function $(e) { if (null == e)
            return null; if ("function" == typeof e)
            return e.displayName || e.name || null; if ("string" == typeof e)
            return e; switch (e) {
            case x: return "Fragment";
            case S: return "Portal";
            case C: return "Profiler";
            case E: return "StrictMode";
            case R: return "Suspense";
            case T: return "SuspenseList";
        } if ("object" == typeof e)
            switch (e.$$typeof) {
                case P: return (e.displayName || "Context") + ".Consumer";
                case _: return (e._context.displayName || "Context") + ".Provider";
                case L:
                    var t = e.render;
                    return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                case N: return null !== (t = e.displayName || null) ? t : $(e.type) || "Memo";
                case z:
                    t = e._payload, e = e._init;
                    try {
                        return $(e(t));
                    }
                    catch (e) { }
            } return null; } function V(e) { var t = e.type; switch (e.tag) {
            case 24: return "Cache";
            case 9: return (t.displayName || "Context") + ".Consumer";
            case 10: return (t._context.displayName || "Context") + ".Provider";
            case 18: return "DehydratedFragment";
            case 11: return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
            case 7: return "Fragment";
            case 5: return t;
            case 4: return "Portal";
            case 3: return "Root";
            case 6: return "Text";
            case 16: return $(t);
            case 8: return t === E ? "StrictMode" : "Mode";
            case 22: return "Offscreen";
            case 12: return "Profiler";
            case 21: return "Scope";
            case 13: return "Suspense";
            case 19: return "SuspenseList";
            case 25: return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
                if ("function" == typeof t)
                    return t.displayName || t.name || null;
                if ("string" == typeof t)
                    return t;
        } return null; } function W(e) { switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object": return e;
            default: return "";
        } } function H(e) { var t = e.type; return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t); } function Q(e) { e._valueTracker || (e._valueTracker = function (e) { var t = H(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t]; if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
            var a = n.get, o = n.set;
            return Object.defineProperty(e, t, { configurable: !0, get: function () { return a.call(this); }, set: function (e) { r = "" + e, o.call(this, e); } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function () { return r; }, setValue: function (e) { r = "" + e; }, stopTracking: function () { e._valueTracker = null, delete e[t]; } };
        } }(e)); } function q(e) { if (!e)
            return !1; var t = e._valueTracker; if (!t)
            return !0; var n = t.getValue(), r = ""; return e && (r = H(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0); } function K(e) { if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0)))
            return null; try {
            return e.activeElement || e.body;
        }
        catch (t) {
            return e.body;
        } } function Y(e, t) { var n = t.checked; return U({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != n ? n : e._wrapperState.initialChecked }); } function X(e, t) { var n = null == t.defaultValue ? "" : t.defaultValue, r = null != t.checked ? t.checked : t.defaultChecked; n = W(null != t.value ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value }; } function J(e, t) { null != (t = t.checked) && b(e, "checked", t, !1); } function G(e, t) { J(e, t); var n = W(t.value), r = t.type; if (null != n)
            "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value"); t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, W(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked); } function Z(e, t, n) { if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value))
                return;
            t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
        } "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n); } function ee(e, t, n) { "number" === t && K(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n)); } var te = Array.isArray; function ne(e, t, n, r) { if (e = e.options, t) {
            t = {};
            for (var a = 0; a < n.length; a++)
                t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
                a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0);
        }
        else {
            for (n = "" + W(n), t = null, a = 0; a < e.length; a++) {
                if (e[a].value === n)
                    return e[a].selected = !0, void (r && (e[a].defaultSelected = !0));
                null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
        } } function re(e, t) { if (null != t.dangerouslySetInnerHTML)
            throw Error(o(91)); return U({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue }); } function ae(e, t) { var n = t.value; if (null == n) {
            if (n = t.children, t = t.defaultValue, null != n) {
                if (null != t)
                    throw Error(o(92));
                if (te(n)) {
                    if (1 < n.length)
                        throw Error(o(93));
                    n = n[0];
                }
                t = n;
            }
            null == t && (t = ""), n = t;
        } e._wrapperState = { initialValue: W(n) }; } function oe(e, t) { var n = W(t.value), r = W(t.defaultValue); null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r); } function le(e) { var t = e.textContent; t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t); } function ie(e) { switch (e) {
            case "svg": return "http://www.w3.org/2000/svg";
            case "math": return "http://www.w3.org/1998/Math/MathML";
            default: return "http://www.w3.org/1999/xhtml";
        } } function ue(e, t) { return null == e || "http://www.w3.org/1999/xhtml" === e ? ie(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e; } var se, ce, fe = (ce = function (e, t) { if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e)
            e.innerHTML = t;
        else {
            for ((se = se || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = se.firstChild; e.firstChild;)
                e.removeChild(e.firstChild);
            for (; t.firstChild;)
                e.appendChild(t.firstChild);
        } }, "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function (e, t, n, r) { MSApp.execUnsafeLocalFunction((function () { return ce(e, t); })); } : ce); function de(e, t) { if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
                return void (n.nodeValue = t);
        } e.textContent = t; } var pe = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, he = ["Webkit", "ms", "Moz", "O"]; function me(e, t, n) { return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || pe.hasOwnProperty(e) && pe[e] ? ("" + t).trim() : t + "px"; } function ve(e, t) { for (var n in e = e.style, t)
            if (t.hasOwnProperty(n)) {
                var r = 0 === n.indexOf("--"), a = me(n, t[n], r);
                "float" === n && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
            } } Object.keys(pe).forEach((function (e) { he.forEach((function (t) { t = t + e.charAt(0).toUpperCase() + e.substring(1), pe[t] = pe[e]; })); })); var ge = U({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 }); function ye(e, t) { if (t) {
            if (ge[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
                throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
                if (null != t.children)
                    throw Error(o(60));
                if ("object" != typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML))
                    throw Error(o(61));
            }
            if (null != t.style && "object" != typeof t.style)
                throw Error(o(62));
        } } function be(e, t) { if (-1 === e.indexOf("-"))
            return "string" == typeof t.is; switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph": return !1;
            default: return !0;
        } } var we = null; function ke(e) { return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e; } var Se = null, xe = null, Ee = null; function Ce(e) { if (e = ba(e)) {
            if ("function" != typeof Se)
                throw Error(o(280));
            var t = e.stateNode;
            t && (t = ka(t), Se(e.stateNode, e.type, t));
        } } function _e(e) { xe ? Ee ? Ee.push(e) : Ee = [e] : xe = e; } function Pe() { if (xe) {
            var e = xe, t = Ee;
            if (Ee = xe = null, Ce(e), t)
                for (e = 0; e < t.length; e++)
                    Ce(t[e]);
        } } function Le(e, t) { return e(t); } function Re() { } var Te = !1; function Ne(e, t, n) { if (Te)
            return e(t, n); Te = !0; try {
            return Le(e, t, n);
        }
        finally {
            Te = !1, (null !== xe || null !== Ee) && (Re(), Pe());
        } } function ze(e, t) { var n = e.stateNode; if (null === n)
            return null; var r = ka(n); if (null === r)
            return null; n = r[t]; e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                break e;
            default: e = !1;
        } if (e)
            return null; if (n && "function" != typeof n)
            throw Error(o(231, t, typeof n)); return n; } var De = !1; if (c)
            try {
                var Me = {};
                Object.defineProperty(Me, "passive", { get: function () { De = !0; } }), window.addEventListener("test", Me, Me), window.removeEventListener("test", Me, Me);
            }
            catch (ce) {
                De = !1;
            } function Oe(e, t, n, r, a, o, l, i, u) { var s = Array.prototype.slice.call(arguments, 3); try {
            t.apply(n, s);
        }
        catch (e) {
            this.onError(e);
        } } var Fe = !1, Ue = null, je = !1, Ie = null, Ae = { onError: function (e) { Fe = !0, Ue = e; } }; function Be(e, t, n, r, a, o, l, i, u) { Fe = !1, Ue = null, Oe.apply(Ae, arguments); } function $e(e) { var t = e, n = e; if (e.alternate)
            for (; t.return;)
                t = t.return;
        else {
            e = t;
            do {
                0 != (4098 & (t = e).flags) && (n = t.return), e = t.return;
            } while (e);
        } return 3 === t.tag ? n : null; } function Ve(e) { if (13 === e.tag) {
            var t = e.memoizedState;
            if (null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)
                return t.dehydrated;
        } return null; } function We(e) { if ($e(e) !== e)
            throw Error(o(188)); } function He(e) { return null !== (e = function (e) { var t = e.alternate; if (!t) {
            if (null === (t = $e(e)))
                throw Error(o(188));
            return t !== e ? null : e;
        } for (var n = e, r = t;;) {
            var a = n.return;
            if (null === a)
                break;
            var l = a.alternate;
            if (null === l) {
                if (null !== (r = a.return)) {
                    n = r;
                    continue;
                }
                break;
            }
            if (a.child === l.child) {
                for (l = a.child; l;) {
                    if (l === n)
                        return We(a), e;
                    if (l === r)
                        return We(a), t;
                    l = l.sibling;
                }
                throw Error(o(188));
            }
            if (n.return !== r.return)
                n = a, r = l;
            else {
                for (var i = !1, u = a.child; u;) {
                    if (u === n) {
                        i = !0, n = a, r = l;
                        break;
                    }
                    if (u === r) {
                        i = !0, r = a, n = l;
                        break;
                    }
                    u = u.sibling;
                }
                if (!i) {
                    for (u = l.child; u;) {
                        if (u === n) {
                            i = !0, n = l, r = a;
                            break;
                        }
                        if (u === r) {
                            i = !0, r = l, n = a;
                            break;
                        }
                        u = u.sibling;
                    }
                    if (!i)
                        throw Error(o(189));
                }
            }
            if (n.alternate !== r)
                throw Error(o(190));
        } if (3 !== n.tag)
            throw Error(o(188)); return n.stateNode.current === n ? e : t; }(e)) ? Qe(e) : null; } function Qe(e) { if (5 === e.tag || 6 === e.tag)
            return e; for (e = e.child; null !== e;) {
            var t = Qe(e);
            if (null !== t)
                return t;
            e = e.sibling;
        } return null; } var qe = a.unstable_scheduleCallback, Ke = a.unstable_cancelCallback, Ye = a.unstable_shouldYield, Xe = a.unstable_requestPaint, Je = a.unstable_now, Ge = a.unstable_getCurrentPriorityLevel, Ze = a.unstable_ImmediatePriority, et = a.unstable_UserBlockingPriority, tt = a.unstable_NormalPriority, nt = a.unstable_LowPriority, rt = a.unstable_IdlePriority, at = null, ot = null, lt = Math.clz32 ? Math.clz32 : function (e) { return 0 === (e >>>= 0) ? 32 : 31 - (it(e) / ut | 0) | 0; }, it = Math.log, ut = Math.LN2, st = 64, ct = 4194304; function ft(e) { switch (e & -e) {
            case 1: return 1;
            case 2: return 2;
            case 4: return 4;
            case 8: return 8;
            case 16: return 16;
            case 32: return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152: return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864: return 130023424 & e;
            case 134217728: return 134217728;
            case 268435456: return 268435456;
            case 536870912: return 536870912;
            case 1073741824: return 1073741824;
            default: return e;
        } } function dt(e, t) { var n = e.pendingLanes; if (0 === n)
            return 0; var r = 0, a = e.suspendedLanes, o = e.pingedLanes, l = 268435455 & n; if (0 !== l) {
            var i = l & ~a;
            0 !== i ? r = ft(i) : 0 != (o &= l) && (r = ft(o));
        }
        else
            0 != (l = n & ~a) ? r = ft(l) : 0 !== o && (r = ft(o)); if (0 === r)
            return 0; if (0 !== t && t !== r && 0 == (t & a) && ((a = r & -r) >= (o = t & -t) || 16 === a && 0 != (4194240 & o)))
            return t; if (0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes))
            for (e = e.entanglements, t &= r; 0 < t;)
                a = 1 << (n = 31 - lt(t)), r |= e[n], t &= ~a; return r; } function pt(e, t) { switch (e) {
            case 1:
            case 2:
            case 4: return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152: return t + 5e3;
            default: return -1;
        } } function ht(e) { return 0 != (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0; } function mt() { var e = st; return 0 == (4194240 & (st <<= 1)) && (st = 64), e; } function vt(e) { for (var t = [], n = 0; 31 > n; n++)
            t.push(e); return t; } function gt(e, t, n) { e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - lt(t)] = n; } function yt(e, t) { var n = e.entangledLanes |= t; for (e = e.entanglements; n;) {
            var r = 31 - lt(n), a = 1 << r;
            a & t | e[r] & t && (e[r] |= t), n &= ~a;
        } } var bt = 0; function wt(e) { return 1 < (e &= -e) ? 4 < e ? 0 != (268435455 & e) ? 16 : 536870912 : 4 : 1; } var kt, St, xt, Et, Ct, _t = !1, Pt = [], Lt = null, Rt = null, Tt = null, Nt = new Map, zt = new Map, Dt = [], Mt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" "); function Ot(e, t) { switch (e) {
            case "focusin":
            case "focusout":
                Lt = null;
                break;
            case "dragenter":
            case "dragleave":
                Rt = null;
                break;
            case "mouseover":
            case "mouseout":
                Tt = null;
                break;
            case "pointerover":
            case "pointerout":
                Nt.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture": zt.delete(t.pointerId);
        } } function Ft(e, t, n, r, a, o) { return null === e || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [a] }, null !== t && null !== (t = ba(t)) && St(t), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== a && -1 === t.indexOf(a) && t.push(a), e); } function Ut(e) { var t = ya(e.target); if (null !== t) {
            var n = $e(t);
            if (null !== n)
                if (13 === (t = n.tag)) {
                    if (null !== (t = Ve(n)))
                        return e.blockedOn = t, void Ct(e.priority, (function () { xt(n); }));
                }
                else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
                    return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
        } e.blockedOn = null; } function jt(e) { if (null !== e.blockedOn)
            return !1; for (var t = e.targetContainers; 0 < t.length;) {
            var n = Yt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
                return null !== (t = ba(n)) && St(t), e.blockedOn = n, !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            we = r, n.target.dispatchEvent(r), we = null, t.shift();
        } return !0; } function It(e, t, n) { jt(e) && n.delete(t); } function At() { _t = !1, null !== Lt && jt(Lt) && (Lt = null), null !== Rt && jt(Rt) && (Rt = null), null !== Tt && jt(Tt) && (Tt = null), Nt.forEach(It), zt.forEach(It); } function Bt(e, t) { e.blockedOn === t && (e.blockedOn = null, _t || (_t = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, At))); } function $t(e) { function t(t) { return Bt(t, e); } if (0 < Pt.length) {
            Bt(Pt[0], e);
            for (var n = 1; n < Pt.length; n++) {
                var r = Pt[n];
                r.blockedOn === e && (r.blockedOn = null);
            }
        } for (null !== Lt && Bt(Lt, e), null !== Rt && Bt(Rt, e), null !== Tt && Bt(Tt, e), Nt.forEach(t), zt.forEach(t), n = 0; n < Dt.length; n++)
            (r = Dt[n]).blockedOn === e && (r.blockedOn = null); for (; 0 < Dt.length && null === (n = Dt[0]).blockedOn;)
            Ut(n), null === n.blockedOn && Dt.shift(); } var Vt = w.ReactCurrentBatchConfig, Wt = !0; function Ht(e, t, n, r) { var a = bt, o = Vt.transition; Vt.transition = null; try {
            bt = 1, qt(e, t, n, r);
        }
        finally {
            bt = a, Vt.transition = o;
        } } function Qt(e, t, n, r) { var a = bt, o = Vt.transition; Vt.transition = null; try {
            bt = 4, qt(e, t, n, r);
        }
        finally {
            bt = a, Vt.transition = o;
        } } function qt(e, t, n, r) { if (Wt) {
            var a = Yt(e, t, n, r);
            if (null === a)
                Wr(e, t, r, Kt, n), Ot(e, r);
            else if (function (e, t, n, r, a) { switch (t) {
                case "focusin": return Lt = Ft(Lt, e, t, n, r, a), !0;
                case "dragenter": return Rt = Ft(Rt, e, t, n, r, a), !0;
                case "mouseover": return Tt = Ft(Tt, e, t, n, r, a), !0;
                case "pointerover":
                    var o = a.pointerId;
                    return Nt.set(o, Ft(Nt.get(o) || null, e, t, n, r, a)), !0;
                case "gotpointercapture": return o = a.pointerId, zt.set(o, Ft(zt.get(o) || null, e, t, n, r, a)), !0;
            } return !1; }(a, e, t, n, r))
                r.stopPropagation();
            else if (Ot(e, r), 4 & t && -1 < Mt.indexOf(e)) {
                for (; null !== a;) {
                    var o = ba(a);
                    if (null !== o && kt(o), null === (o = Yt(e, t, n, r)) && Wr(e, t, r, Kt, n), o === a)
                        break;
                    a = o;
                }
                null !== a && r.stopPropagation();
            }
            else
                Wr(e, t, r, null, n);
        } } var Kt = null; function Yt(e, t, n, r) { if (Kt = null, null !== (e = ya(e = ke(r))))
            if (null === (t = $e(e)))
                e = null;
            else if (13 === (n = t.tag)) {
                if (null !== (e = Ve(t)))
                    return e;
                e = null;
            }
            else if (3 === n) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                    return 3 === t.tag ? t.stateNode.containerInfo : null;
                e = null;
            }
            else
                t !== e && (e = null); return Kt = e, null; } function Xt(e) { switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart": return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave": return 4;
            case "message": switch (Ge()) {
                case Ze: return 1;
                case et: return 4;
                case tt:
                case nt: return 16;
                case rt: return 536870912;
                default: return 16;
            }
            default: return 16;
        } } var Jt = null, Gt = null, Zt = null; function en() { if (Zt)
            return Zt; var e, t, n = Gt, r = n.length, a = "value" in Jt ? Jt.value : Jt.textContent, o = a.length; for (e = 0; e < r && n[e] === a[e]; e++)
            ; var l = r - e; for (t = 1; t <= l && n[r - t] === a[o - t]; t++)
            ; return Zt = a.slice(e, 1 < t ? 1 - t : void 0); } function tn(e) { var t = e.keyCode; return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0; } function nn() { return !0; } function rn() { return !1; } function an(e) { function t(t, n, r, a, o) { for (var l in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = a, this.target = o, this.currentTarget = null, e)
            e.hasOwnProperty(l) && (t = e[l], this[l] = t ? t(a) : a[l]); return this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? nn : rn, this.isPropagationStopped = rn, this; } return U(t.prototype, { preventDefault: function () { this.defaultPrevented = !0; var e = this.nativeEvent; e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = nn); }, stopPropagation: function () { var e = this.nativeEvent; e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = nn); }, persist: function () { }, isPersistent: nn }), t; } var on, ln, un, sn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) { return e.timeStamp || Date.now(); }, defaultPrevented: 0, isTrusted: 0 }, cn = an(sn), fn = U({}, sn, { view: 0, detail: 0 }), dn = an(fn), pn = U({}, fn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Cn, button: 0, buttons: 0, relatedTarget: function (e) { return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget; }, movementX: function (e) { return "movementX" in e ? e.movementX : (e !== un && (un && "mousemove" === e.type ? (on = e.screenX - un.screenX, ln = e.screenY - un.screenY) : ln = on = 0, un = e), on); }, movementY: function (e) { return "movementY" in e ? e.movementY : ln; } }), hn = an(pn), mn = an(U({}, pn, { dataTransfer: 0 })), vn = an(U({}, fn, { relatedTarget: 0 })), gn = an(U({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })), yn = U({}, sn, { clipboardData: function (e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData; } }), bn = an(yn), wn = an(U({}, sn, { data: 0 })), kn = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, Sn = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, xn = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" }; function En(e) { var t = this.nativeEvent; return t.getModifierState ? t.getModifierState(e) : !!(e = xn[e]) && !!t[e]; } function Cn() { return En; } var _n = U({}, fn, { key: function (e) { if (e.key) {
                var t = kn[e.key] || e.key;
                if ("Unidentified" !== t)
                    return t;
            } return "keypress" === e.type ? 13 === (e = tn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? Sn[e.keyCode] || "Unidentified" : ""; }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Cn, charCode: function (e) { return "keypress" === e.type ? tn(e) : 0; }, keyCode: function (e) { return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0; }, which: function (e) { return "keypress" === e.type ? tn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0; } }), Pn = an(_n), Ln = an(U({}, pn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 })), Rn = an(U({}, fn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Cn })), Tn = an(U({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })), Nn = U({}, pn, { deltaX: function (e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0; }, deltaY: function (e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0; }, deltaZ: 0, deltaMode: 0 }), zn = an(Nn), Dn = [9, 13, 27, 32], Mn = c && "CompositionEvent" in window, On = null; c && "documentMode" in document && (On = document.documentMode); var Fn = c && "TextEvent" in window && !On, Un = c && (!Mn || On && 8 < On && 11 >= On), jn = String.fromCharCode(32), In = !1; function An(e, t) { switch (e) {
            case "keyup": return -1 !== Dn.indexOf(t.keyCode);
            case "keydown": return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout": return !0;
            default: return !1;
        } } function Bn(e) { return "object" == typeof (e = e.detail) && "data" in e ? e.data : null; } var $n = !1, Vn = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 }; function Wn(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return "input" === t ? !!Vn[e.type] : "textarea" === t; } function Hn(e, t, n, r) { _e(r), 0 < (t = Qr(t, "onChange")).length && (n = new cn("onChange", "change", null, n, r), e.push({ event: n, listeners: t })); } var Qn = null, qn = null; function Kn(e) { jr(e, 0); } function Yn(e) { if (q(wa(e)))
            return e; } function Xn(e, t) { if ("change" === e)
            return t; } var Jn = !1; if (c) {
            var Gn;
            if (c) {
                var Zn = "oninput" in document;
                if (!Zn) {
                    var er = document.createElement("div");
                    er.setAttribute("oninput", "return;"), Zn = "function" == typeof er.oninput;
                }
                Gn = Zn;
            }
            else
                Gn = !1;
            Jn = Gn && (!document.documentMode || 9 < document.documentMode);
        } function tr() { Qn && (Qn.detachEvent("onpropertychange", nr), qn = Qn = null); } function nr(e) { if ("value" === e.propertyName && Yn(qn)) {
            var t = [];
            Hn(t, qn, e, ke(e)), Ne(Kn, t);
        } } function rr(e, t, n) { "focusin" === e ? (tr(), qn = n, (Qn = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr(); } function ar(e) { if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Yn(qn); } function or(e, t) { if ("click" === e)
            return Yn(t); } function lr(e, t) { if ("input" === e || "change" === e)
            return Yn(t); } var ir = "function" == typeof Object.is ? Object.is : function (e, t) { return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t; }; function ur(e, t) { if (ir(e, t))
            return !0; if ("object" != typeof e || null === e || "object" != typeof t || null === t)
            return !1; var n = Object.keys(e), r = Object.keys(t); if (n.length !== r.length)
            return !1; for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!f.call(t, a) || !ir(e[a], t[a]))
                return !1;
        } return !0; } function sr(e) { for (; e && e.firstChild;)
            e = e.firstChild; return e; } function cr(e, t) { var n, r = sr(e); for (e = 0; r;) {
            if (3 === r.nodeType) {
                if (n = e + r.textContent.length, e <= t && n >= t)
                    return { node: r, offset: t - e };
                e = n;
            }
            e: {
                for (; r;) {
                    if (r.nextSibling) {
                        r = r.nextSibling;
                        break e;
                    }
                    r = r.parentNode;
                }
                r = void 0;
            }
            r = sr(r);
        } } function fr(e, t) { return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? fr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))); } function dr() { for (var e = window, t = K(); t instanceof e.HTMLIFrameElement;) {
            try {
                var n = "string" == typeof t.contentWindow.location.href;
            }
            catch (e) {
                n = !1;
            }
            if (!n)
                break;
            t = K((e = t.contentWindow).document);
        } return t; } function pr(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable); } function hr(e) { var t = dr(), n = e.focusedElem, r = e.selectionRange; if (t !== n && n && n.ownerDocument && fr(n.ownerDocument.documentElement, n)) {
            if (null !== r && pr(n))
                if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n)
                    n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
                    e = e.getSelection();
                    var a = n.textContent.length, o = Math.min(r.start, a);
                    r = void 0 === r.end ? o : Math.min(r.end, a), !e.extend && o > r && (a = r, r = o, o = a), a = cr(n, o);
                    var l = cr(n, r);
                    a && l && (1 !== e.rangeCount || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && ((t = t.createRange()).setStart(a.node, a.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)));
                }
            for (t = [], e = n; e = e.parentNode;)
                1 === e.nodeType && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for ("function" == typeof n.focus && n.focus(), n = 0; n < t.length; n++)
                (e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top;
        } } var mr = c && "documentMode" in document && 11 >= document.documentMode, vr = null, gr = null, yr = null, br = !1; function wr(e, t, n) { var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument; br || null == vr || vr !== K(r) || (r = "selectionStart" in (r = vr) && pr(r) ? { start: r.selectionStart, end: r.selectionEnd } : { anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }, yr && ur(yr, r) || (yr = r, 0 < (r = Qr(gr, "onSelect")).length && (t = new cn("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = vr))); } function kr(e, t) { var n = {}; return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n; } var Sr = { animationend: kr("Animation", "AnimationEnd"), animationiteration: kr("Animation", "AnimationIteration"), animationstart: kr("Animation", "AnimationStart"), transitionend: kr("Transition", "TransitionEnd") }, xr = {}, Er = {}; function Cr(e) { if (xr[e])
            return xr[e]; if (!Sr[e])
            return e; var t, n = Sr[e]; for (t in n)
            if (n.hasOwnProperty(t) && t in Er)
                return xr[e] = n[t]; return e; } c && (Er = document.createElement("div").style, "AnimationEvent" in window || (delete Sr.animationend.animation, delete Sr.animationiteration.animation, delete Sr.animationstart.animation), "TransitionEvent" in window || delete Sr.transitionend.transition); var _r = Cr("animationend"), Pr = Cr("animationiteration"), Lr = Cr("animationstart"), Rr = Cr("transitionend"), Tr = new Map, Nr = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" "); function zr(e, t) { Tr.set(e, t), u(t, [e]); } for (var Dr = 0; Dr < Nr.length; Dr++) {
            var Mr = Nr[Dr];
            zr(Mr.toLowerCase(), "on" + (Mr[0].toUpperCase() + Mr.slice(1)));
        } zr(_r, "onAnimationEnd"), zr(Pr, "onAnimationIteration"), zr(Lr, "onAnimationStart"), zr("dblclick", "onDoubleClick"), zr("focusin", "onFocus"), zr("focusout", "onBlur"), zr(Rr, "onTransitionEnd"), s("onMouseEnter", ["mouseout", "mouseover"]), s("onMouseLeave", ["mouseout", "mouseover"]), s("onPointerEnter", ["pointerout", "pointerover"]), s("onPointerLeave", ["pointerout", "pointerover"]), u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" ")); var Or = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Fr = new Set("cancel close invalid load scroll toggle".split(" ").concat(Or)); function Ur(e, t, n) { var r = e.type || "unknown-event"; e.currentTarget = n, function (e, t, n, r, a, l, i, u, s) { if (Be.apply(this, arguments), Fe) {
            if (!Fe)
                throw Error(o(198));
            var c = Ue;
            Fe = !1, Ue = null, je || (je = !0, Ie = c);
        } }(r, t, void 0, e), e.currentTarget = null; } function jr(e, t) { t = 0 != (4 & t); for (var n = 0; n < e.length; n++) {
            var r = e[n], a = r.event;
            r = r.listeners;
            e: {
                var o = void 0;
                if (t)
                    for (var l = r.length - 1; 0 <= l; l--) {
                        var i = r[l], u = i.instance, s = i.currentTarget;
                        if (i = i.listener, u !== o && a.isPropagationStopped())
                            break e;
                        Ur(a, i, s), o = u;
                    }
                else
                    for (l = 0; l < r.length; l++) {
                        if (u = (i = r[l]).instance, s = i.currentTarget, i = i.listener, u !== o && a.isPropagationStopped())
                            break e;
                        Ur(a, i, s), o = u;
                    }
            }
        } if (je)
            throw e = Ie, je = !1, Ie = null, e; } function Ir(e, t) { var n = t[ma]; void 0 === n && (n = t[ma] = new Set); var r = e + "__bubble"; n.has(r) || (Vr(t, e, 2, !1), n.add(r)); } function Ar(e, t, n) { var r = 0; t && (r |= 4), Vr(n, e, r, t); } var Br = "_reactListening" + Math.random().toString(36).slice(2); function $r(e) { if (!e[Br]) {
            e[Br] = !0, l.forEach((function (t) { "selectionchange" !== t && (Fr.has(t) || Ar(t, !1, e), Ar(t, !0, e)); }));
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Br] || (t[Br] = !0, Ar("selectionchange", !1, t));
        } } function Vr(e, t, n, r) { switch (Xt(t)) {
            case 1:
                var a = Ht;
                break;
            case 4:
                a = Qt;
                break;
            default: a = qt;
        } n = a.bind(null, t, n, e), a = void 0, !De || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (a = !0), r ? void 0 !== a ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : void 0 !== a ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1); } function Wr(e, t, n, r, a) { var o = r; if (0 == (1 & t) && 0 == (2 & t) && null !== r)
            e: for (;;) {
                if (null === r)
                    return;
                var l = r.tag;
                if (3 === l || 4 === l) {
                    var i = r.stateNode.containerInfo;
                    if (i === a || 8 === i.nodeType && i.parentNode === a)
                        break;
                    if (4 === l)
                        for (l = r.return; null !== l;) {
                            var u = l.tag;
                            if ((3 === u || 4 === u) && ((u = l.stateNode.containerInfo) === a || 8 === u.nodeType && u.parentNode === a))
                                return;
                            l = l.return;
                        }
                    for (; null !== i;) {
                        if (null === (l = ya(i)))
                            return;
                        if (5 === (u = l.tag) || 6 === u) {
                            r = o = l;
                            continue e;
                        }
                        i = i.parentNode;
                    }
                }
                r = r.return;
            } Ne((function () { var r = o, a = ke(n), l = []; e: {
            var i = Tr.get(e);
            if (void 0 !== i) {
                var u = cn, s = e;
                switch (e) {
                    case "keypress": if (0 === tn(n))
                        break e;
                    case "keydown":
                    case "keyup":
                        u = Pn;
                        break;
                    case "focusin":
                        s = "focus", u = vn;
                        break;
                    case "focusout":
                        s = "blur", u = vn;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        u = vn;
                        break;
                    case "click": if (2 === n.button)
                        break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        u = hn;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        u = mn;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        u = Rn;
                        break;
                    case _r:
                    case Pr:
                    case Lr:
                        u = gn;
                        break;
                    case Rr:
                        u = Tn;
                        break;
                    case "scroll":
                        u = dn;
                        break;
                    case "wheel":
                        u = zn;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        u = bn;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup": u = Ln;
                }
                var c = 0 != (4 & t), f = !c && "scroll" === e, d = c ? null !== i ? i + "Capture" : null : i;
                c = [];
                for (var p, h = r; null !== h;) {
                    var m = (p = h).stateNode;
                    if (5 === p.tag && null !== m && (p = m, null !== d && null != (m = ze(h, d)) && c.push(Hr(h, m, p))), f)
                        break;
                    h = h.return;
                }
                0 < c.length && (i = new u(i, s, null, n, a), l.push({ event: i, listeners: c }));
            }
        } if (0 == (7 & t)) {
            if (u = "mouseout" === e || "pointerout" === e, (!(i = "mouseover" === e || "pointerover" === e) || n === we || !(s = n.relatedTarget || n.fromElement) || !ya(s) && !s[ha]) && (u || i) && (i = a.window === a ? a : (i = a.ownerDocument) ? i.defaultView || i.parentWindow : window, u ? (u = r, null !== (s = (s = n.relatedTarget || n.toElement) ? ya(s) : null) && (s !== (f = $e(s)) || 5 !== s.tag && 6 !== s.tag) && (s = null)) : (u = null, s = r), u !== s)) {
                if (c = hn, m = "onMouseLeave", d = "onMouseEnter", h = "mouse", "pointerout" !== e && "pointerover" !== e || (c = Ln, m = "onPointerLeave", d = "onPointerEnter", h = "pointer"), f = null == u ? i : wa(u), p = null == s ? i : wa(s), (i = new c(m, h + "leave", u, n, a)).target = f, i.relatedTarget = p, m = null, ya(a) === r && ((c = new c(d, h + "enter", s, n, a)).target = p, c.relatedTarget = f, m = c), f = m, u && s)
                    e: {
                        for (d = s, h = 0, p = c = u; p; p = qr(p))
                            h++;
                        for (p = 0, m = d; m; m = qr(m))
                            p++;
                        for (; 0 < h - p;)
                            c = qr(c), h--;
                        for (; 0 < p - h;)
                            d = qr(d), p--;
                        for (; h--;) {
                            if (c === d || null !== d && c === d.alternate)
                                break e;
                            c = qr(c), d = qr(d);
                        }
                        c = null;
                    }
                else
                    c = null;
                null !== u && Kr(l, i, u, c, !1), null !== s && null !== f && Kr(l, f, s, c, !0);
            }
            if ("select" === (u = (i = r ? wa(r) : window).nodeName && i.nodeName.toLowerCase()) || "input" === u && "file" === i.type)
                var v = Xn;
            else if (Wn(i))
                if (Jn)
                    v = lr;
                else {
                    v = ar;
                    var g = rr;
                }
            else
                (u = i.nodeName) && "input" === u.toLowerCase() && ("checkbox" === i.type || "radio" === i.type) && (v = or);
            switch (v && (v = v(e, r)) ? Hn(l, v, n, a) : (g && g(e, i, r), "focusout" === e && (g = i._wrapperState) && g.controlled && "number" === i.type && ee(i, "number", i.value)), g = r ? wa(r) : window, e) {
                case "focusin":
                    (Wn(g) || "true" === g.contentEditable) && (vr = g, gr = r, yr = null);
                    break;
                case "focusout":
                    yr = gr = vr = null;
                    break;
                case "mousedown":
                    br = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    br = !1, wr(l, n, a);
                    break;
                case "selectionchange": if (mr)
                    break;
                case "keydown":
                case "keyup": wr(l, n, a);
            }
            var y;
            if (Mn)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var b = "onCompositionStart";
                            break e;
                        case "compositionend":
                            b = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            b = "onCompositionUpdate";
                            break e;
                    }
                    b = void 0;
                }
            else
                $n ? An(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
            b && (Un && "ko" !== n.locale && ($n || "onCompositionStart" !== b ? "onCompositionEnd" === b && $n && (y = en()) : (Gt = "value" in (Jt = a) ? Jt.value : Jt.textContent, $n = !0)), 0 < (g = Qr(r, b)).length && (b = new wn(b, e, null, n, a), l.push({ event: b, listeners: g }), (y || null !== (y = Bn(n))) && (b.data = y))), (y = Fn ? function (e, t) { switch (e) {
                case "compositionend": return Bn(t);
                case "keypress": return 32 !== t.which ? null : (In = !0, jn);
                case "textInput": return (e = t.data) === jn && In ? null : e;
                default: return null;
            } }(e, n) : function (e, t) { if ($n)
                return "compositionend" === e || !Mn && An(e, t) ? (e = en(), Zt = Gt = Jt = null, $n = !1, e) : null; switch (e) {
                case "paste":
                default: return null;
                case "keypress":
                    if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                        if (t.char && 1 < t.char.length)
                            return t.char;
                        if (t.which)
                            return String.fromCharCode(t.which);
                    }
                    return null;
                case "compositionend": return Un && "ko" !== t.locale ? null : t.data;
            } }(e, n)) && 0 < (r = Qr(r, "onBeforeInput")).length && (a = new wn("onBeforeInput", "beforeinput", null, n, a), l.push({ event: a, listeners: r }), a.data = y);
        } jr(l, t); })); } function Hr(e, t, n) { return { instance: e, listener: t, currentTarget: n }; } function Qr(e, t) { for (var n = t + "Capture", r = []; null !== e;) {
            var a = e, o = a.stateNode;
            5 === a.tag && null !== o && (a = o, null != (o = ze(e, n)) && r.unshift(Hr(e, o, a)), null != (o = ze(e, t)) && r.push(Hr(e, o, a))), e = e.return;
        } return r; } function qr(e) { if (null === e)
            return null; do {
            e = e.return;
        } while (e && 5 !== e.tag); return e || null; } function Kr(e, t, n, r, a) { for (var o = t._reactName, l = []; null !== n && n !== r;) {
            var i = n, u = i.alternate, s = i.stateNode;
            if (null !== u && u === r)
                break;
            5 === i.tag && null !== s && (i = s, a ? null != (u = ze(n, o)) && l.unshift(Hr(n, u, i)) : a || null != (u = ze(n, o)) && l.push(Hr(n, u, i))), n = n.return;
        } 0 !== l.length && e.push({ event: t, listeners: l }); } var Yr = /\r\n?/g, Xr = /\u0000|\uFFFD/g; function Jr(e) { return ("string" == typeof e ? e : "" + e).replace(Yr, "\n").replace(Xr, ""); } function Gr(e, t, n) { if (t = Jr(t), Jr(e) !== t && n)
            throw Error(o(425)); } function Zr() { } var ea = null, ta = null; function na(e, t) { return "textarea" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html; } var ra = "function" == typeof setTimeout ? setTimeout : void 0, aa = "function" == typeof clearTimeout ? clearTimeout : void 0, oa = "function" == typeof Promise ? Promise : void 0, la = "function" == typeof queueMicrotask ? queueMicrotask : void 0 !== oa ? function (e) { return oa.resolve(null).then(e).catch(ia); } : ra; function ia(e) { setTimeout((function () { throw e; })); } function ua(e, t) { var n = t, r = 0; do {
            var a = n.nextSibling;
            if (e.removeChild(n), a && 8 === a.nodeType)
                if ("/$" === (n = a.data)) {
                    if (0 === r)
                        return e.removeChild(a), void $t(t);
                    r--;
                }
                else
                    "$" !== n && "$?" !== n && "$!" !== n || r++;
            n = a;
        } while (n); $t(t); } function sa(e) { for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t)
                break;
            if (8 === t) {
                if ("$" === (t = e.data) || "$!" === t || "$?" === t)
                    break;
                if ("/$" === t)
                    return null;
            }
        } return e; } function ca(e) { e = e.previousSibling; for (var t = 0; e;) {
            if (8 === e.nodeType) {
                var n = e.data;
                if ("$" === n || "$!" === n || "$?" === n) {
                    if (0 === t)
                        return e;
                    t--;
                }
                else
                    "/$" === n && t++;
            }
            e = e.previousSibling;
        } return null; } var fa = Math.random().toString(36).slice(2), da = "__reactFiber$" + fa, pa = "__reactProps$" + fa, ha = "__reactContainer$" + fa, ma = "__reactEvents$" + fa, va = "__reactListeners$" + fa, ga = "__reactHandles$" + fa; function ya(e) { var t = e[da]; if (t)
            return t; for (var n = e.parentNode; n;) {
            if (t = n[ha] || n[da]) {
                if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                    for (e = ca(e); null !== e;) {
                        if (n = e[da])
                            return n;
                        e = ca(e);
                    }
                return t;
            }
            n = (e = n).parentNode;
        } return null; } function ba(e) { return !(e = e[da] || e[ha]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e; } function wa(e) { if (5 === e.tag || 6 === e.tag)
            return e.stateNode; throw Error(o(33)); } function ka(e) { return e[pa] || null; } var Sa = [], xa = -1; function Ea(e) { return { current: e }; } function Ca(e) { 0 > xa || (e.current = Sa[xa], Sa[xa] = null, xa--); } function _a(e, t) { xa++, Sa[xa] = e.current, e.current = t; } var Pa = {}, La = Ea(Pa), Ra = Ea(!1), Ta = Pa; function Na(e, t) { var n = e.type.contextTypes; if (!n)
            return Pa; var r = e.stateNode; if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext; var a, o = {}; for (a in n)
            o[a] = t[a]; return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o; } function za(e) { return null != e.childContextTypes; } function Da() { Ca(Ra), Ca(La); } function Ma(e, t, n) { if (La.current !== Pa)
            throw Error(o(168)); _a(La, t), _a(Ra, n); } function Oa(e, t, n) { var r = e.stateNode; if (t = t.childContextTypes, "function" != typeof r.getChildContext)
            return n; for (var a in r = r.getChildContext())
            if (!(a in t))
                throw Error(o(108, V(e) || "Unknown", a)); return U({}, n, r); } function Fa(e) { return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Pa, Ta = La.current, _a(La, e), _a(Ra, Ra.current), !0; } function Ua(e, t, n) { var r = e.stateNode; if (!r)
            throw Error(o(169)); n ? (e = Oa(e, t, Ta), r.__reactInternalMemoizedMergedChildContext = e, Ca(Ra), Ca(La), _a(La, e)) : Ca(Ra), _a(Ra, n); } var ja = null, Ia = !1, Aa = !1; function Ba(e) { null === ja ? ja = [e] : ja.push(e); } function $a() { if (!Aa && null !== ja) {
            Aa = !0;
            var e = 0, t = bt;
            try {
                var n = ja;
                for (bt = 1; e < n.length; e++) {
                    var r = n[e];
                    do {
                        r = r(!0);
                    } while (null !== r);
                }
                ja = null, Ia = !1;
            }
            catch (t) {
                throw null !== ja && (ja = ja.slice(e + 1)), qe(Ze, $a), t;
            }
            finally {
                bt = t, Aa = !1;
            }
        } return null; } var Va = [], Wa = 0, Ha = null, Qa = 0, qa = [], Ka = 0, Ya = null, Xa = 1, Ja = ""; function Ga(e, t) { Va[Wa++] = Qa, Va[Wa++] = Ha, Ha = e, Qa = t; } function Za(e, t, n) { qa[Ka++] = Xa, qa[Ka++] = Ja, qa[Ka++] = Ya, Ya = e; var r = Xa; e = Ja; var a = 32 - lt(r) - 1; r &= ~(1 << a), n += 1; var o = 32 - lt(t) + a; if (30 < o) {
            var l = a - a % 5;
            o = (r & (1 << l) - 1).toString(32), r >>= l, a -= l, Xa = 1 << 32 - lt(t) + a | n << a | r, Ja = o + e;
        }
        else
            Xa = 1 << o | n << a | r, Ja = e; } function eo(e) { null !== e.return && (Ga(e, 1), Za(e, 1, 0)); } function to(e) { for (; e === Ha;)
            Ha = Va[--Wa], Va[Wa] = null, Qa = Va[--Wa], Va[Wa] = null; for (; e === Ya;)
            Ya = qa[--Ka], qa[Ka] = null, Ja = qa[--Ka], qa[Ka] = null, Xa = qa[--Ka], qa[Ka] = null; } var no = null, ro = null, ao = !1, oo = null; function lo(e, t) { var n = zs(5, null, null, 0); n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n); } function io(e, t) { switch (e.tag) {
            case 5:
                var n = e.type;
                return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, no = e, ro = sa(t.firstChild), !0);
            case 6: return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, no = e, ro = null, !0);
            case 13: return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== Ya ? { id: Xa, overflow: Ja } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, (n = zs(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, no = e, ro = null, !0);
            default: return !1;
        } } function uo(e) { return 0 != (1 & e.mode) && 0 == (128 & e.flags); } function so(e) { if (ao) {
            var t = ro;
            if (t) {
                var n = t;
                if (!io(e, t)) {
                    if (uo(e))
                        throw Error(o(418));
                    t = sa(n.nextSibling);
                    var r = no;
                    t && io(e, t) ? lo(r, n) : (e.flags = -4097 & e.flags | 2, ao = !1, no = e);
                }
            }
            else {
                if (uo(e))
                    throw Error(o(418));
                e.flags = -4097 & e.flags | 2, ao = !1, no = e;
            }
        } } function co(e) { for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;)
            e = e.return; no = e; } function fo(e) { if (e !== no)
            return !1; if (!ao)
            return co(e), ao = !0, !1; var t; if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !na(e.type, e.memoizedProps)), t && (t = ro)) {
            if (uo(e))
                throw po(), Error(o(418));
            for (; t;)
                lo(e, t), t = sa(t.nextSibling);
        } if (co(e), 13 === e.tag) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
                throw Error(o(317));
            e: {
                for (e = e.nextSibling, t = 0; e;) {
                    if (8 === e.nodeType) {
                        var n = e.data;
                        if ("/$" === n) {
                            if (0 === t) {
                                ro = sa(e.nextSibling);
                                break e;
                            }
                            t--;
                        }
                        else
                            "$" !== n && "$!" !== n && "$?" !== n || t++;
                    }
                    e = e.nextSibling;
                }
                ro = null;
            }
        }
        else
            ro = no ? sa(e.stateNode.nextSibling) : null; return !0; } function po() { for (var e = ro; e;)
            e = sa(e.nextSibling); } function ho() { ro = no = null, ao = !1; } function mo(e) { null === oo ? oo = [e] : oo.push(e); } var vo = w.ReactCurrentBatchConfig; function go(e, t) { if (e && e.defaultProps) {
            for (var n in t = U({}, t), e = e.defaultProps)
                void 0 === t[n] && (t[n] = e[n]);
            return t;
        } return t; } var yo = Ea(null), bo = null, wo = null, ko = null; function So() { ko = wo = bo = null; } function xo(e) { var t = yo.current; Ca(yo), e._currentValue = t; } function Eo(e, t, n) { for (; null !== e;) {
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
                break;
            e = e.return;
        } } function Co(e, t) { bo = e, ko = wo = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 != (e.lanes & t) && (wi = !0), e.firstContext = null); } function _o(e) { var t = e._currentValue; if (ko !== e)
            if (e = { context: e, memoizedValue: t, next: null }, null === wo) {
                if (null === bo)
                    throw Error(o(308));
                wo = e, bo.dependencies = { lanes: 0, firstContext: e };
            }
            else
                wo = wo.next = e; return t; } var Po = null; function Lo(e) { null === Po ? Po = [e] : Po.push(e); } function Ro(e, t, n, r) { var a = t.interleaved; return null === a ? (n.next = n, Lo(t)) : (n.next = a.next, a.next = n), t.interleaved = n, To(e, r); } function To(e, t) { e.lanes |= t; var n = e.alternate; for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;)
            e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return; return 3 === n.tag ? n.stateNode : null; } var No = !1; function zo(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null }; } function Do(e, t) { e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects }); } function Mo(e, t) { return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null }; } function Oo(e, t, n) { var r = e.updateQueue; if (null === r)
            return null; if (r = r.shared, 0 != (2 & Ru)) {
            var a = r.pending;
            return null === a ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, To(e, n);
        } return null === (a = r.interleaved) ? (t.next = t, Lo(r)) : (t.next = a.next, a.next = t), r.interleaved = t, To(e, n); } function Fo(e, t, n) { if (null !== (t = t.updateQueue) && (t = t.shared, 0 != (4194240 & n))) {
            var r = t.lanes;
            n |= r &= e.pendingLanes, t.lanes = n, yt(e, n);
        } } function Uo(e, t) { var n = e.updateQueue, r = e.alternate; if (null !== r && n === (r = r.updateQueue)) {
            var a = null, o = null;
            if (null !== (n = n.firstBaseUpdate)) {
                do {
                    var l = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
                    null === o ? a = o = l : o = o.next = l, n = n.next;
                } while (null !== n);
                null === o ? a = o = t : o = o.next = t;
            }
            else
                a = o = t;
            return n = { baseState: r.baseState, firstBaseUpdate: a, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, void (e.updateQueue = n);
        } null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t; } function jo(e, t, n, r) { var a = e.updateQueue; No = !1; var o = a.firstBaseUpdate, l = a.lastBaseUpdate, i = a.shared.pending; if (null !== i) {
            a.shared.pending = null;
            var u = i, s = u.next;
            u.next = null, null === l ? o = s : l.next = s, l = u;
            var c = e.alternate;
            null !== c && (i = (c = c.updateQueue).lastBaseUpdate) !== l && (null === i ? c.firstBaseUpdate = s : i.next = s, c.lastBaseUpdate = u);
        } if (null !== o) {
            var f = a.baseState;
            for (l = 0, c = s = u = null, i = o;;) {
                var d = i.lane, p = i.eventTime;
                if ((r & d) === d) {
                    null !== c && (c = c.next = { eventTime: p, lane: 0, tag: i.tag, payload: i.payload, callback: i.callback, next: null });
                    e: {
                        var h = e, m = i;
                        switch (d = t, p = n, m.tag) {
                            case 1:
                                if ("function" == typeof (h = m.payload)) {
                                    f = h.call(p, f, d);
                                    break e;
                                }
                                f = h;
                                break e;
                            case 3: h.flags = -65537 & h.flags | 128;
                            case 0:
                                if (null == (d = "function" == typeof (h = m.payload) ? h.call(p, f, d) : h))
                                    break e;
                                f = U({}, f, d);
                                break e;
                            case 2: No = !0;
                        }
                    }
                    null !== i.callback && 0 !== i.lane && (e.flags |= 64, null === (d = a.effects) ? a.effects = [i] : d.push(i));
                }
                else
                    p = { eventTime: p, lane: d, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, null === c ? (s = c = p, u = f) : c = c.next = p, l |= d;
                if (null === (i = i.next)) {
                    if (null === (i = a.shared.pending))
                        break;
                    i = (d = i).next, d.next = null, a.lastBaseUpdate = d, a.shared.pending = null;
                }
            }
            if (null === c && (u = f), a.baseState = u, a.firstBaseUpdate = s, a.lastBaseUpdate = c, null !== (t = a.shared.interleaved)) {
                a = t;
                do {
                    l |= a.lane, a = a.next;
                } while (a !== t);
            }
            else
                null === o && (a.shared.lanes = 0);
            Uu |= l, e.lanes = l, e.memoizedState = f;
        } } function Io(e, t, n) { if (e = t.effects, t.effects = null, null !== e)
            for (t = 0; t < e.length; t++) {
                var r = e[t], a = r.callback;
                if (null !== a) {
                    if (r.callback = null, r = n, "function" != typeof a)
                        throw Error(o(191, a));
                    a.call(r);
                }
            } } var Ao = (new r.Component).refs; function Bo(e, t, n, r) { n = null == (n = n(r, t = e.memoizedState)) ? t : U({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n); } var $o = { isMounted: function (e) { return !!(e = e._reactInternals) && $e(e) === e; }, enqueueSetState: function (e, t, n) { e = e._reactInternals; var r = ts(), a = ns(e), o = Mo(r, a); o.payload = t, null != n && (o.callback = n), null !== (t = Oo(e, o, a)) && (rs(t, e, a, r), Fo(t, e, a)); }, enqueueReplaceState: function (e, t, n) { e = e._reactInternals; var r = ts(), a = ns(e), o = Mo(r, a); o.tag = 1, o.payload = t, null != n && (o.callback = n), null !== (t = Oo(e, o, a)) && (rs(t, e, a, r), Fo(t, e, a)); }, enqueueForceUpdate: function (e, t) { e = e._reactInternals; var n = ts(), r = ns(e), a = Mo(n, r); a.tag = 2, null != t && (a.callback = t), null !== (t = Oo(e, a, r)) && (rs(t, e, r, n), Fo(t, e, r)); } }; function Vo(e, t, n, r, a, o, l) { return "function" == typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, o, l) : !(t.prototype && t.prototype.isPureReactComponent && ur(n, r) && ur(a, o)); } function Wo(e, t, n) { var r = !1, a = Pa, o = t.contextType; return "object" == typeof o && null !== o ? o = _o(o) : (a = za(t) ? Ta : La.current, o = (r = null != (r = t.contextTypes)) ? Na(e, a) : Pa), t = new t(n, o), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = $o, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = o), t; } function Ho(e, t, n, r) { e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && $o.enqueueReplaceState(t, t.state, null); } function Qo(e, t, n, r) { var a = e.stateNode; a.props = n, a.state = e.memoizedState, a.refs = Ao, zo(e); var o = t.contextType; "object" == typeof o && null !== o ? a.context = _o(o) : (o = za(t) ? Ta : La.current, a.context = Na(e, o)), a.state = e.memoizedState, "function" == typeof (o = t.getDerivedStateFromProps) && (Bo(e, t, o, n), a.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof a.getSnapshotBeforeUpdate || "function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount || (t = a.state, "function" == typeof a.componentWillMount && a.componentWillMount(), "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), t !== a.state && $o.enqueueReplaceState(a, a.state, null), jo(e, n, a, r), a.state = e.memoizedState), "function" == typeof a.componentDidMount && (e.flags |= 4194308); } function qo(e, t, n) { if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
            if (n._owner) {
                if (n = n._owner) {
                    if (1 !== n.tag)
                        throw Error(o(309));
                    var r = n.stateNode;
                }
                if (!r)
                    throw Error(o(147, e));
                var a = r, l = "" + e;
                return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === l ? t.ref : (t = function (e) { var t = a.refs; t === Ao && (t = a.refs = {}), null === e ? delete t[l] : t[l] = e; }, t._stringRef = l, t);
            }
            if ("string" != typeof e)
                throw Error(o(284));
            if (!n._owner)
                throw Error(o(290, e));
        } return e; } function Ko(e, t) { throw e = Object.prototype.toString.call(t), Error(o(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)); } function Yo(e) { return (0, e._init)(e._payload); } function Xo(e) { function t(t, n) { if (e) {
            var r = t.deletions;
            null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n);
        } } function n(n, r) { if (!e)
            return null; for (; null !== r;)
            t(n, r), r = r.sibling; return null; } function r(e, t) { for (e = new Map; null !== t;)
            null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling; return e; } function a(e, t) { return (e = Ms(e, t)).index = 0, e.sibling = null, e; } function l(t, n, r) { return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 2, n) : (t.flags |= 1048576, n); } function i(t) { return e && null === t.alternate && (t.flags |= 2), t; } function u(e, t, n, r) { return null === t || 6 !== t.tag ? ((t = js(n, e.mode, r)).return = e, t) : ((t = a(t, n)).return = e, t); } function s(e, t, n, r) { var o = n.type; return o === x ? f(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === o || "object" == typeof o && null !== o && o.$$typeof === z && Yo(o) === t.type) ? ((r = a(t, n.props)).ref = qo(e, t, n), r.return = e, r) : ((r = Os(n.type, n.key, n.props, null, e.mode, r)).ref = qo(e, t, n), r.return = e, r); } function c(e, t, n, r) { return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Is(n, e.mode, r)).return = e, t) : ((t = a(t, n.children || [])).return = e, t); } function f(e, t, n, r, o) { return null === t || 7 !== t.tag ? ((t = Fs(n, e.mode, r, o)).return = e, t) : ((t = a(t, n)).return = e, t); } function d(e, t, n) { if ("string" == typeof t && "" !== t || "number" == typeof t)
            return (t = js("" + t, e.mode, n)).return = e, t; if ("object" == typeof t && null !== t) {
            switch (t.$$typeof) {
                case k: return (n = Os(t.type, t.key, t.props, null, e.mode, n)).ref = qo(e, null, t), n.return = e, n;
                case S: return (t = Is(t, e.mode, n)).return = e, t;
                case z: return d(e, (0, t._init)(t._payload), n);
            }
            if (te(t) || O(t))
                return (t = Fs(t, e.mode, n, null)).return = e, t;
            Ko(e, t);
        } return null; } function p(e, t, n, r) { var a = null !== t ? t.key : null; if ("string" == typeof n && "" !== n || "number" == typeof n)
            return null !== a ? null : u(e, t, "" + n, r); if ("object" == typeof n && null !== n) {
            switch (n.$$typeof) {
                case k: return n.key === a ? s(e, t, n, r) : null;
                case S: return n.key === a ? c(e, t, n, r) : null;
                case z: return p(e, t, (a = n._init)(n._payload), r);
            }
            if (te(n) || O(n))
                return null !== a ? null : f(e, t, n, r, null);
            Ko(e, n);
        } return null; } function h(e, t, n, r, a) { if ("string" == typeof r && "" !== r || "number" == typeof r)
            return u(t, e = e.get(n) || null, "" + r, a); if ("object" == typeof r && null !== r) {
            switch (r.$$typeof) {
                case k: return s(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                case S: return c(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                case z: return h(e, t, n, (0, r._init)(r._payload), a);
            }
            if (te(r) || O(r))
                return f(t, e = e.get(n) || null, r, a, null);
            Ko(t, r);
        } return null; } function m(a, o, i, u) { for (var s = null, c = null, f = o, m = o = 0, v = null; null !== f && m < i.length; m++) {
            f.index > m ? (v = f, f = null) : v = f.sibling;
            var g = p(a, f, i[m], u);
            if (null === g) {
                null === f && (f = v);
                break;
            }
            e && f && null === g.alternate && t(a, f), o = l(g, o, m), null === c ? s = g : c.sibling = g, c = g, f = v;
        } if (m === i.length)
            return n(a, f), ao && Ga(a, m), s; if (null === f) {
            for (; m < i.length; m++)
                null !== (f = d(a, i[m], u)) && (o = l(f, o, m), null === c ? s = f : c.sibling = f, c = f);
            return ao && Ga(a, m), s;
        } for (f = r(a, f); m < i.length; m++)
            null !== (v = h(f, a, m, i[m], u)) && (e && null !== v.alternate && f.delete(null === v.key ? m : v.key), o = l(v, o, m), null === c ? s = v : c.sibling = v, c = v); return e && f.forEach((function (e) { return t(a, e); })), ao && Ga(a, m), s; } function v(a, i, u, s) { var c = O(u); if ("function" != typeof c)
            throw Error(o(150)); if (null == (u = c.call(u)))
            throw Error(o(151)); for (var f = c = null, m = i, v = i = 0, g = null, y = u.next(); null !== m && !y.done; v++, y = u.next()) {
            m.index > v ? (g = m, m = null) : g = m.sibling;
            var b = p(a, m, y.value, s);
            if (null === b) {
                null === m && (m = g);
                break;
            }
            e && m && null === b.alternate && t(a, m), i = l(b, i, v), null === f ? c = b : f.sibling = b, f = b, m = g;
        } if (y.done)
            return n(a, m), ao && Ga(a, v), c; if (null === m) {
            for (; !y.done; v++, y = u.next())
                null !== (y = d(a, y.value, s)) && (i = l(y, i, v), null === f ? c = y : f.sibling = y, f = y);
            return ao && Ga(a, v), c;
        } for (m = r(a, m); !y.done; v++, y = u.next())
            null !== (y = h(m, a, v, y.value, s)) && (e && null !== y.alternate && m.delete(null === y.key ? v : y.key), i = l(y, i, v), null === f ? c = y : f.sibling = y, f = y); return e && m.forEach((function (e) { return t(a, e); })), ao && Ga(a, v), c; } return function e(r, o, l, u) { if ("object" == typeof l && null !== l && l.type === x && null === l.key && (l = l.props.children), "object" == typeof l && null !== l) {
            switch (l.$$typeof) {
                case k:
                    e: {
                        for (var s = l.key, c = o; null !== c;) {
                            if (c.key === s) {
                                if ((s = l.type) === x) {
                                    if (7 === c.tag) {
                                        n(r, c.sibling), (o = a(c, l.props.children)).return = r, r = o;
                                        break e;
                                    }
                                }
                                else if (c.elementType === s || "object" == typeof s && null !== s && s.$$typeof === z && Yo(s) === c.type) {
                                    n(r, c.sibling), (o = a(c, l.props)).ref = qo(r, c, l), o.return = r, r = o;
                                    break e;
                                }
                                n(r, c);
                                break;
                            }
                            t(r, c), c = c.sibling;
                        }
                        l.type === x ? ((o = Fs(l.props.children, r.mode, u, l.key)).return = r, r = o) : ((u = Os(l.type, l.key, l.props, null, r.mode, u)).ref = qo(r, o, l), u.return = r, r = u);
                    }
                    return i(r);
                case S:
                    e: {
                        for (c = l.key; null !== o;) {
                            if (o.key === c) {
                                if (4 === o.tag && o.stateNode.containerInfo === l.containerInfo && o.stateNode.implementation === l.implementation) {
                                    n(r, o.sibling), (o = a(o, l.children || [])).return = r, r = o;
                                    break e;
                                }
                                n(r, o);
                                break;
                            }
                            t(r, o), o = o.sibling;
                        }
                        (o = Is(l, r.mode, u)).return = r, r = o;
                    }
                    return i(r);
                case z: return e(r, o, (c = l._init)(l._payload), u);
            }
            if (te(l))
                return m(r, o, l, u);
            if (O(l))
                return v(r, o, l, u);
            Ko(r, l);
        } return "string" == typeof l && "" !== l || "number" == typeof l ? (l = "" + l, null !== o && 6 === o.tag ? (n(r, o.sibling), (o = a(o, l)).return = r, r = o) : (n(r, o), (o = js(l, r.mode, u)).return = r, r = o), i(r)) : n(r, o); }; } var Jo = Xo(!0), Go = Xo(!1), Zo = {}, el = Ea(Zo), tl = Ea(Zo), nl = Ea(Zo); function rl(e) { if (e === Zo)
            throw Error(o(174)); return e; } function al(e, t) { switch (_a(nl, t), _a(tl, e), _a(el, Zo), e = t.nodeType) {
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
                break;
            default: t = ue(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName);
        } Ca(el), _a(el, t); } function ol() { Ca(el), Ca(tl), Ca(nl); } function ll(e) { rl(nl.current); var t = rl(el.current), n = ue(t, e.type); t !== n && (_a(tl, e), _a(el, n)); } function il(e) { tl.current === e && (Ca(el), Ca(tl)); } var ul = Ea(0); function sl(e) { for (var t = e; null !== t;) {
            if (13 === t.tag) {
                var n = t.memoizedState;
                if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data))
                    return t;
            }
            else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                if (0 != (128 & t.flags))
                    return t;
            }
            else if (null !== t.child) {
                t.child.return = t, t = t.child;
                continue;
            }
            if (t === e)
                break;
            for (; null === t.sibling;) {
                if (null === t.return || t.return === e)
                    return null;
                t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
        } return null; } var cl = []; function fl() { for (var e = 0; e < cl.length; e++)
            cl[e]._workInProgressVersionPrimary = null; cl.length = 0; } var dl = w.ReactCurrentDispatcher, pl = w.ReactCurrentBatchConfig, hl = 0, ml = null, vl = null, gl = null, yl = !1, bl = !1, wl = 0, kl = 0; function Sl() { throw Error(o(321)); } function xl(e, t) { if (null === t)
            return !1; for (var n = 0; n < t.length && n < e.length; n++)
            if (!ir(e[n], t[n]))
                return !1; return !0; } function El(e, t, n, r, a, l) { if (hl = l, ml = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, dl.current = null === e || null === e.memoizedState ? ii : ui, e = n(r, a), bl) {
            l = 0;
            do {
                if (bl = !1, wl = 0, 25 <= l)
                    throw Error(o(301));
                l += 1, gl = vl = null, t.updateQueue = null, dl.current = si, e = n(r, a);
            } while (bl);
        } if (dl.current = li, t = null !== vl && null !== vl.next, hl = 0, gl = vl = ml = null, yl = !1, t)
            throw Error(o(300)); return e; } function Cl() { var e = 0 !== wl; return wl = 0, e; } function _l() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return null === gl ? ml.memoizedState = gl = e : gl = gl.next = e, gl; } function Pl() { if (null === vl) {
            var e = ml.alternate;
            e = null !== e ? e.memoizedState : null;
        }
        else
            e = vl.next; var t = null === gl ? ml.memoizedState : gl.next; if (null !== t)
            gl = t, vl = e;
        else {
            if (null === e)
                throw Error(o(310));
            e = { memoizedState: (vl = e).memoizedState, baseState: vl.baseState, baseQueue: vl.baseQueue, queue: vl.queue, next: null }, null === gl ? ml.memoizedState = gl = e : gl = gl.next = e;
        } return gl; } function Ll(e, t) { return "function" == typeof t ? t(e) : t; } function Rl(e) { var t = Pl(), n = t.queue; if (null === n)
            throw Error(o(311)); n.lastRenderedReducer = e; var r = vl, a = r.baseQueue, l = n.pending; if (null !== l) {
            if (null !== a) {
                var i = a.next;
                a.next = l.next, l.next = i;
            }
            r.baseQueue = a = l, n.pending = null;
        } if (null !== a) {
            l = a.next, r = r.baseState;
            var u = i = null, s = null, c = l;
            do {
                var f = c.lane;
                if ((hl & f) === f)
                    null !== s && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
                else {
                    var d = { lane: f, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null };
                    null === s ? (u = s = d, i = r) : s = s.next = d, ml.lanes |= f, Uu |= f;
                }
                c = c.next;
            } while (null !== c && c !== l);
            null === s ? i = r : s.next = u, ir(r, t.memoizedState) || (wi = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
        } if (null !== (e = n.interleaved)) {
            a = e;
            do {
                l = a.lane, ml.lanes |= l, Uu |= l, a = a.next;
            } while (a !== e);
        }
        else
            null === a && (n.lanes = 0); return [t.memoizedState, n.dispatch]; } function Tl(e) { var t = Pl(), n = t.queue; if (null === n)
            throw Error(o(311)); n.lastRenderedReducer = e; var r = n.dispatch, a = n.pending, l = t.memoizedState; if (null !== a) {
            n.pending = null;
            var i = a = a.next;
            do {
                l = e(l, i.action), i = i.next;
            } while (i !== a);
            ir(l, t.memoizedState) || (wi = !0), t.memoizedState = l, null === t.baseQueue && (t.baseState = l), n.lastRenderedState = l;
        } return [l, r]; } function Nl() { } function zl(e, t) { var n = ml, r = Pl(), a = t(), l = !ir(r.memoizedState, a); if (l && (r.memoizedState = a, wi = !0), r = r.queue, Wl(Ol.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || null !== gl && 1 & gl.memoizedState.tag) {
            if (n.flags |= 2048, Il(9, Ml.bind(null, n, r, a, t), void 0, null), null === Tu)
                throw Error(o(349));
            0 != (30 & hl) || Dl(n, t, a);
        } return a; } function Dl(e, t, n) { e.flags |= 16384, e = { getSnapshot: t, value: n }, null === (t = ml.updateQueue) ? (t = { lastEffect: null, stores: null }, ml.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e); } function Ml(e, t, n, r) { t.value = n, t.getSnapshot = r, Fl(t) && Ul(e); } function Ol(e, t, n) { return n((function () { Fl(t) && Ul(e); })); } function Fl(e) { var t = e.getSnapshot; e = e.value; try {
            var n = t();
            return !ir(e, n);
        }
        catch (e) {
            return !0;
        } } function Ul(e) { var t = To(e, 1); null !== t && rs(t, e, 1, -1); } function jl(e) { var t = _l(); return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ll, lastRenderedState: e }, t.queue = e, e = e.dispatch = ni.bind(null, ml, e), [t.memoizedState, e]; } function Il(e, t, n, r) { return e = { tag: e, create: t, destroy: n, deps: r, next: null }, null === (t = ml.updateQueue) ? (t = { lastEffect: null, stores: null }, ml.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e; } function Al() { return Pl().memoizedState; } function Bl(e, t, n, r) { var a = _l(); ml.flags |= e, a.memoizedState = Il(1 | t, n, void 0, void 0 === r ? null : r); } function $l(e, t, n, r) { var a = Pl(); r = void 0 === r ? null : r; var o = void 0; if (null !== vl) {
            var l = vl.memoizedState;
            if (o = l.destroy, null !== r && xl(r, l.deps))
                return void (a.memoizedState = Il(t, n, o, r));
        } ml.flags |= e, a.memoizedState = Il(1 | t, n, o, r); } function Vl(e, t) { return Bl(8390656, 8, e, t); } function Wl(e, t) { return $l(2048, 8, e, t); } function Hl(e, t) { return $l(4, 2, e, t); } function Ql(e, t) { return $l(4, 4, e, t); } function ql(e, t) { return "function" == typeof t ? (e = e(), t(e), function () { t(null); }) : null != t ? (e = e(), t.current = e, function () { t.current = null; }) : void 0; } function Kl(e, t, n) { return n = null != n ? n.concat([e]) : null, $l(4, 4, ql.bind(null, t, e), n); } function Yl() { } function Xl(e, t) { var n = Pl(); t = void 0 === t ? null : t; var r = n.memoizedState; return null !== r && null !== t && xl(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e); } function Jl(e, t) { var n = Pl(); t = void 0 === t ? null : t; var r = n.memoizedState; return null !== r && null !== t && xl(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e); } function Gl(e, t, n) { return 0 == (21 & hl) ? (e.baseState && (e.baseState = !1, wi = !0), e.memoizedState = n) : (ir(n, t) || (n = mt(), ml.lanes |= n, Uu |= n, e.baseState = !0), t); } function Zl(e, t) { var n = bt; bt = 0 !== n && 4 > n ? n : 4, e(!0); var r = pl.transition; pl.transition = {}; try {
            e(!1), t();
        }
        finally {
            bt = n, pl.transition = r;
        } } function ei() { return Pl().memoizedState; } function ti(e, t, n) { var r = ns(e); n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, ri(e) ? ai(t, n) : null !== (n = Ro(e, t, n, r)) && (rs(n, e, r, ts()), oi(n, t, r)); } function ni(e, t, n) { var r = ns(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }; if (ri(e))
            ai(t, a);
        else {
            var o = e.alternate;
            if (0 === e.lanes && (null === o || 0 === o.lanes) && null !== (o = t.lastRenderedReducer))
                try {
                    var l = t.lastRenderedState, i = o(l, n);
                    if (a.hasEagerState = !0, a.eagerState = i, ir(i, l)) {
                        var u = t.interleaved;
                        return null === u ? (a.next = a, Lo(t)) : (a.next = u.next, u.next = a), void (t.interleaved = a);
                    }
                }
                catch (e) { }
            null !== (n = Ro(e, t, a, r)) && (rs(n, e, r, a = ts()), oi(n, t, r));
        } } function ri(e) { var t = e.alternate; return e === ml || null !== t && t === ml; } function ai(e, t) { bl = yl = !0; var n = e.pending; null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t; } function oi(e, t, n) { if (0 != (4194240 & n)) {
            var r = t.lanes;
            n |= r &= e.pendingLanes, t.lanes = n, yt(e, n);
        } } var li = { readContext: _o, useCallback: Sl, useContext: Sl, useEffect: Sl, useImperativeHandle: Sl, useInsertionEffect: Sl, useLayoutEffect: Sl, useMemo: Sl, useReducer: Sl, useRef: Sl, useState: Sl, useDebugValue: Sl, useDeferredValue: Sl, useTransition: Sl, useMutableSource: Sl, useSyncExternalStore: Sl, useId: Sl, unstable_isNewReconciler: !1 }, ii = { readContext: _o, useCallback: function (e, t) { return _l().memoizedState = [e, void 0 === t ? null : t], e; }, useContext: _o, useEffect: Vl, useImperativeHandle: function (e, t, n) { return n = null != n ? n.concat([e]) : null, Bl(4194308, 4, ql.bind(null, t, e), n); }, useLayoutEffect: function (e, t) { return Bl(4194308, 4, e, t); }, useInsertionEffect: function (e, t) { return Bl(4, 2, e, t); }, useMemo: function (e, t) { var n = _l(); return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e; }, useReducer: function (e, t, n) { var r = _l(); return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = ti.bind(null, ml, e), [r.memoizedState, e]; }, useRef: function (e) { return e = { current: e }, _l().memoizedState = e; }, useState: jl, useDebugValue: Yl, useDeferredValue: function (e) { return _l().memoizedState = e; }, useTransition: function () { var e = jl(!1), t = e[0]; return e = Zl.bind(null, e[1]), _l().memoizedState = e, [t, e]; }, useMutableSource: function () { }, useSyncExternalStore: function (e, t, n) { var r = ml, a = _l(); if (ao) {
                if (void 0 === n)
                    throw Error(o(407));
                n = n();
            }
            else {
                if (n = t(), null === Tu)
                    throw Error(o(349));
                0 != (30 & hl) || Dl(r, t, n);
            } a.memoizedState = n; var l = { value: n, getSnapshot: t }; return a.queue = l, Vl(Ol.bind(null, r, l, e), [e]), r.flags |= 2048, Il(9, Ml.bind(null, r, l, n, t), void 0, null), n; }, useId: function () { var e = _l(), t = Tu.identifierPrefix; if (ao) {
                var n = Ja;
                t = ":" + t + "R" + (n = (Xa & ~(1 << 32 - lt(Xa) - 1)).toString(32) + n), 0 < (n = wl++) && (t += "H" + n.toString(32)), t += ":";
            }
            else
                t = ":" + t + "r" + (n = kl++).toString(32) + ":"; return e.memoizedState = t; }, unstable_isNewReconciler: !1 }, ui = { readContext: _o, useCallback: Xl, useContext: _o, useEffect: Wl, useImperativeHandle: Kl, useInsertionEffect: Hl, useLayoutEffect: Ql, useMemo: Jl, useReducer: Rl, useRef: Al, useState: function () { return Rl(Ll); }, useDebugValue: Yl, useDeferredValue: function (e) { return Gl(Pl(), vl.memoizedState, e); }, useTransition: function () { return [Rl(Ll)[0], Pl().memoizedState]; }, useMutableSource: Nl, useSyncExternalStore: zl, useId: ei, unstable_isNewReconciler: !1 }, si = { readContext: _o, useCallback: Xl, useContext: _o, useEffect: Wl, useImperativeHandle: Kl, useInsertionEffect: Hl, useLayoutEffect: Ql, useMemo: Jl, useReducer: Tl, useRef: Al, useState: function () { return Tl(Ll); }, useDebugValue: Yl, useDeferredValue: function (e) { var t = Pl(); return null === vl ? t.memoizedState = e : Gl(t, vl.memoizedState, e); }, useTransition: function () { return [Tl(Ll)[0], Pl().memoizedState]; }, useMutableSource: Nl, useSyncExternalStore: zl, useId: ei, unstable_isNewReconciler: !1 }; function ci(e, t) { try {
            var n = "", r = t;
            do {
                n += B(r), r = r.return;
            } while (r);
            var a = n;
        }
        catch (e) {
            a = "\nError generating stack: " + e.message + "\n" + e.stack;
        } return { value: e, source: t, stack: a, digest: null }; } function fi(e, t, n) { return { value: e, source: null, stack: null != n ? n : null, digest: null != t ? t : null }; } function di(e, t) { try {
            console.error(t.value);
        }
        catch (e) {
            setTimeout((function () { throw e; }));
        } } var pi = "function" == typeof WeakMap ? WeakMap : Map; function hi(e, t, n) { (n = Mo(-1, n)).tag = 3, n.payload = { element: null }; var r = t.value; return n.callback = function () { Hu || (Hu = !0, Qu = r), di(0, t); }, n; } function mi(e, t, n) { (n = Mo(-1, n)).tag = 3; var r = e.type.getDerivedStateFromError; if ("function" == typeof r) {
            var a = t.value;
            n.payload = function () { return r(a); }, n.callback = function () { di(0, t); };
        } var o = e.stateNode; return null !== o && "function" == typeof o.componentDidCatch && (n.callback = function () { di(0, t), "function" != typeof r && (null === qu ? qu = new Set([this]) : qu.add(this)); var e = t.stack; this.componentDidCatch(t.value, { componentStack: null !== e ? e : "" }); }), n; } function vi(e, t, n) { var r = e.pingCache; if (null === r) {
            r = e.pingCache = new pi;
            var a = new Set;
            r.set(t, a);
        }
        else
            void 0 === (a = r.get(t)) && (a = new Set, r.set(t, a)); a.has(n) || (a.add(n), e = _s.bind(null, e, t, n), t.then(e, e)); } function gi(e) { do {
            var t;
            if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t)
                return e;
            e = e.return;
        } while (null !== e); return null; } function yi(e, t, n, r, a) { return 0 == (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = Mo(-1, 1)).tag = 2, Oo(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e); } var bi = w.ReactCurrentOwner, wi = !1; function ki(e, t, n, r) { t.child = null === e ? Go(t, null, n, r) : Jo(t, e.child, n, r); } function Si(e, t, n, r, a) { n = n.render; var o = t.ref; return Co(t, a), r = El(e, t, n, r, o, a), n = Cl(), null === e || wi ? (ao && n && eo(t), t.flags |= 1, ki(e, t, r, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Hi(e, t, a)); } function xi(e, t, n, r, a) { if (null === e) {
            var o = n.type;
            return "function" != typeof o || Ds(o) || void 0 !== o.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Os(n.type, null, r, t, t.mode, a)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = o, Ei(e, t, o, r, a));
        } if (o = e.child, 0 == (e.lanes & a)) {
            var l = o.memoizedProps;
            if ((n = null !== (n = n.compare) ? n : ur)(l, r) && e.ref === t.ref)
                return Hi(e, t, a);
        } return t.flags |= 1, (e = Ms(o, r)).ref = t.ref, e.return = t, t.child = e; } function Ei(e, t, n, r, a) { if (null !== e) {
            var o = e.memoizedProps;
            if (ur(o, r) && e.ref === t.ref) {
                if (wi = !1, t.pendingProps = r = o, 0 == (e.lanes & a))
                    return t.lanes = e.lanes, Hi(e, t, a);
                0 != (131072 & e.flags) && (wi = !0);
            }
        } return Pi(e, t, n, r, a); } function Ci(e, t, n) { var r = t.pendingProps, a = r.children, o = null !== e ? e.memoizedState : null; if ("hidden" === r.mode)
            if (0 == (1 & t.mode))
                t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, _a(Mu, Du), Du |= n;
            else {
                if (0 == (1073741824 & n))
                    return e = null !== o ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, _a(Mu, Du), Du |= e, null;
                t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = null !== o ? o.baseLanes : n, _a(Mu, Du), Du |= r;
            }
        else
            null !== o ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, _a(Mu, Du), Du |= r; return ki(e, t, a, n), t.child; } function _i(e, t) { var n = t.ref; (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152); } function Pi(e, t, n, r, a) { var o = za(n) ? Ta : La.current; return o = Na(t, o), Co(t, a), n = El(e, t, n, r, o, a), r = Cl(), null === e || wi ? (ao && r && eo(t), t.flags |= 1, ki(e, t, n, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Hi(e, t, a)); } function Li(e, t, n, r, a) { if (za(n)) {
            var o = !0;
            Fa(t);
        }
        else
            o = !1; if (Co(t, a), null === t.stateNode)
            Wi(e, t), Wo(t, n, r), Qo(t, n, r, a), r = !0;
        else if (null === e) {
            var l = t.stateNode, i = t.memoizedProps;
            l.props = i;
            var u = l.context, s = n.contextType;
            s = "object" == typeof s && null !== s ? _o(s) : Na(t, s = za(n) ? Ta : La.current);
            var c = n.getDerivedStateFromProps, f = "function" == typeof c || "function" == typeof l.getSnapshotBeforeUpdate;
            f || "function" != typeof l.UNSAFE_componentWillReceiveProps && "function" != typeof l.componentWillReceiveProps || (i !== r || u !== s) && Ho(t, l, r, s), No = !1;
            var d = t.memoizedState;
            l.state = d, jo(t, r, l, a), u = t.memoizedState, i !== r || d !== u || Ra.current || No ? ("function" == typeof c && (Bo(t, n, c, r), u = t.memoizedState), (i = No || Vo(t, n, i, r, d, u, s)) ? (f || "function" != typeof l.UNSAFE_componentWillMount && "function" != typeof l.componentWillMount || ("function" == typeof l.componentWillMount && l.componentWillMount(), "function" == typeof l.UNSAFE_componentWillMount && l.UNSAFE_componentWillMount()), "function" == typeof l.componentDidMount && (t.flags |= 4194308)) : ("function" == typeof l.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), l.props = r, l.state = u, l.context = s, r = i) : ("function" == typeof l.componentDidMount && (t.flags |= 4194308), r = !1);
        }
        else {
            l = t.stateNode, Do(e, t), i = t.memoizedProps, s = t.type === t.elementType ? i : go(t.type, i), l.props = s, f = t.pendingProps, d = l.context, u = "object" == typeof (u = n.contextType) && null !== u ? _o(u) : Na(t, u = za(n) ? Ta : La.current);
            var p = n.getDerivedStateFromProps;
            (c = "function" == typeof p || "function" == typeof l.getSnapshotBeforeUpdate) || "function" != typeof l.UNSAFE_componentWillReceiveProps && "function" != typeof l.componentWillReceiveProps || (i !== f || d !== u) && Ho(t, l, r, u), No = !1, d = t.memoizedState, l.state = d, jo(t, r, l, a);
            var h = t.memoizedState;
            i !== f || d !== h || Ra.current || No ? ("function" == typeof p && (Bo(t, n, p, r), h = t.memoizedState), (s = No || Vo(t, n, s, r, d, h, u) || !1) ? (c || "function" != typeof l.UNSAFE_componentWillUpdate && "function" != typeof l.componentWillUpdate || ("function" == typeof l.componentWillUpdate && l.componentWillUpdate(r, h, u), "function" == typeof l.UNSAFE_componentWillUpdate && l.UNSAFE_componentWillUpdate(r, h, u)), "function" == typeof l.componentDidUpdate && (t.flags |= 4), "function" == typeof l.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" != typeof l.componentDidUpdate || i === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" != typeof l.getSnapshotBeforeUpdate || i === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = h), l.props = r, l.state = h, l.context = u, r = s) : ("function" != typeof l.componentDidUpdate || i === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" != typeof l.getSnapshotBeforeUpdate || i === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
        } return Ri(e, t, n, r, o, a); } function Ri(e, t, n, r, a, o) { _i(e, t); var l = 0 != (128 & t.flags); if (!r && !l)
            return a && Ua(t, n, !1), Hi(e, t, o); r = t.stateNode, bi.current = t; var i = l && "function" != typeof n.getDerivedStateFromError ? null : r.render(); return t.flags |= 1, null !== e && l ? (t.child = Jo(t, e.child, null, o), t.child = Jo(t, null, i, o)) : ki(e, t, i, o), t.memoizedState = r.state, a && Ua(t, n, !0), t.child; } function Ti(e) { var t = e.stateNode; t.pendingContext ? Ma(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Ma(0, t.context, !1), al(e, t.containerInfo); } function Ni(e, t, n, r, a) { return ho(), mo(a), t.flags |= 256, ki(e, t, n, r), t.child; } var zi, Di, Mi, Oi, Fi = { dehydrated: null, treeContext: null, retryLane: 0 }; function Ui(e) { return { baseLanes: e, cachePool: null, transitions: null }; } function ji(e, t, n) { var r, a = t.pendingProps, l = ul.current, i = !1, u = 0 != (128 & t.flags); if ((r = u) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & l)), r ? (i = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (l |= 1), _a(ul, 1 & l), null === e)
            return so(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (0 == (1 & t.mode) ? t.lanes = 1 : "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824, null) : (u = a.children, e = a.fallback, i ? (a = t.mode, i = t.child, u = { mode: "hidden", children: u }, 0 == (1 & a) && null !== i ? (i.childLanes = 0, i.pendingProps = u) : i = Us(u, a, 0, null), e = Fs(e, a, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Ui(n), t.memoizedState = Fi, e) : Ii(t, u)); if (null !== (l = e.memoizedState) && null !== (r = l.dehydrated))
            return function (e, t, n, r, a, l, i) { if (n)
                return 256 & t.flags ? (t.flags &= -257, Ai(e, t, i, r = fi(Error(o(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, a = t.mode, r = Us({ mode: "visible", children: r.children }, a, 0, null), (l = Fs(l, a, i, null)).flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, 0 != (1 & t.mode) && Jo(t, e.child, null, i), t.child.memoizedState = Ui(i), t.memoizedState = Fi, l); if (0 == (1 & t.mode))
                return Ai(e, t, i, null); if ("$!" === a.data) {
                if (r = a.nextSibling && a.nextSibling.dataset)
                    var u = r.dgst;
                return r = u, Ai(e, t, i, r = fi(l = Error(o(419)), r, void 0));
            } if (u = 0 != (i & e.childLanes), wi || u) {
                if (null !== (r = Tu)) {
                    switch (i & -i) {
                        case 4:
                            a = 2;
                            break;
                        case 16:
                            a = 8;
                            break;
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                        case 67108864:
                            a = 32;
                            break;
                        case 536870912:
                            a = 268435456;
                            break;
                        default: a = 0;
                    }
                    0 !== (a = 0 != (a & (r.suspendedLanes | i)) ? 0 : a) && a !== l.retryLane && (l.retryLane = a, To(e, a), rs(r, e, a, -1));
                }
                return vs(), Ai(e, t, i, r = fi(Error(o(421))));
            } return "$?" === a.data ? (t.flags |= 128, t.child = e.child, t = Ls.bind(null, e), a._reactRetry = t, null) : (e = l.treeContext, ro = sa(a.nextSibling), no = t, ao = !0, oo = null, null !== e && (qa[Ka++] = Xa, qa[Ka++] = Ja, qa[Ka++] = Ya, Xa = e.id, Ja = e.overflow, Ya = t), (t = Ii(t, r.children)).flags |= 4096, t); }(e, t, u, a, r, l, n); if (i) {
            i = a.fallback, u = t.mode, r = (l = e.child).sibling;
            var s = { mode: "hidden", children: a.children };
            return 0 == (1 & u) && t.child !== l ? ((a = t.child).childLanes = 0, a.pendingProps = s, t.deletions = null) : (a = Ms(l, s)).subtreeFlags = 14680064 & l.subtreeFlags, null !== r ? i = Ms(r, i) : (i = Fs(i, u, n, null)).flags |= 2, i.return = t, a.return = t, a.sibling = i, t.child = a, a = i, i = t.child, u = null === (u = e.child.memoizedState) ? Ui(n) : { baseLanes: u.baseLanes | n, cachePool: null, transitions: u.transitions }, i.memoizedState = u, i.childLanes = e.childLanes & ~n, t.memoizedState = Fi, a;
        } return e = (i = e.child).sibling, a = Ms(i, { mode: "visible", children: a.children }), 0 == (1 & t.mode) && (a.lanes = n), a.return = t, a.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = a, t.memoizedState = null, a; } function Ii(e, t) { return (t = Us({ mode: "visible", children: t }, e.mode, 0, null)).return = e, e.child = t; } function Ai(e, t, n, r) { return null !== r && mo(r), Jo(t, e.child, null, n), (e = Ii(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e; } function Bi(e, t, n) { e.lanes |= t; var r = e.alternate; null !== r && (r.lanes |= t), Eo(e.return, t, n); } function $i(e, t, n, r, a) { var o = e.memoizedState; null === o ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = a); } function Vi(e, t, n) { var r = t.pendingProps, a = r.revealOrder, o = r.tail; if (ki(e, t, r.children, n), 0 != (2 & (r = ul.current)))
            r = 1 & r | 2, t.flags |= 128;
        else {
            if (null !== e && 0 != (128 & e.flags))
                e: for (e = t.child; null !== e;) {
                    if (13 === e.tag)
                        null !== e.memoizedState && Bi(e, n, t);
                    else if (19 === e.tag)
                        Bi(e, n, t);
                    else if (null !== e.child) {
                        e.child.return = e, e = e.child;
                        continue;
                    }
                    if (e === t)
                        break e;
                    for (; null === e.sibling;) {
                        if (null === e.return || e.return === t)
                            break e;
                        e = e.return;
                    }
                    e.sibling.return = e.return, e = e.sibling;
                }
            r &= 1;
        } if (_a(ul, r), 0 == (1 & t.mode))
            t.memoizedState = null;
        else
            switch (a) {
                case "forwards":
                    for (n = t.child, a = null; null !== n;)
                        null !== (e = n.alternate) && null === sl(e) && (a = n), n = n.sibling;
                    null === (n = a) ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), $i(t, !1, a, n, o);
                    break;
                case "backwards":
                    for (n = null, a = t.child, t.child = null; null !== a;) {
                        if (null !== (e = a.alternate) && null === sl(e)) {
                            t.child = a;
                            break;
                        }
                        e = a.sibling, a.sibling = n, n = a, a = e;
                    }
                    $i(t, !0, n, null, o);
                    break;
                case "together":
                    $i(t, !1, null, null, void 0);
                    break;
                default: t.memoizedState = null;
            } return t.child; } function Wi(e, t) { 0 == (1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2); } function Hi(e, t, n) { if (null !== e && (t.dependencies = e.dependencies), Uu |= t.lanes, 0 == (n & t.childLanes))
            return null; if (null !== e && t.child !== e.child)
            throw Error(o(153)); if (null !== t.child) {
            for (n = Ms(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;)
                e = e.sibling, (n = n.sibling = Ms(e, e.pendingProps)).return = t;
            n.sibling = null;
        } return t.child; } function Qi(e, t) { if (!ao)
            switch (e.tailMode) {
                case "hidden":
                    t = e.tail;
                    for (var n = null; null !== t;)
                        null !== t.alternate && (n = t), t = t.sibling;
                    null === n ? e.tail = null : n.sibling = null;
                    break;
                case "collapsed":
                    n = e.tail;
                    for (var r = null; null !== n;)
                        null !== n.alternate && (r = n), n = n.sibling;
                    null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null;
            } } function qi(e) { var t = null !== e.alternate && e.alternate.child === e.child, n = 0, r = 0; if (t)
            for (var a = e.child; null !== a;)
                n |= a.lanes | a.childLanes, r |= 14680064 & a.subtreeFlags, r |= 14680064 & a.flags, a.return = e, a = a.sibling;
        else
            for (a = e.child; null !== a;)
                n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling; return e.subtreeFlags |= r, e.childLanes = n, t; } function Ki(e, t, n) { var r = t.pendingProps; switch (to(t), t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14: return qi(t), null;
            case 1:
            case 17: return za(t.type) && Da(), qi(t), null;
            case 3: return r = t.stateNode, ol(), Ca(Ra), Ca(La), fl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (fo(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 == (256 & t.flags) || (t.flags |= 1024, null !== oo && (is(oo), oo = null))), Di(e, t), qi(t), null;
            case 5:
                il(t);
                var a = rl(nl.current);
                if (n = t.type, null !== e && null != t.stateNode)
                    Mi(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                else {
                    if (!r) {
                        if (null === t.stateNode)
                            throw Error(o(166));
                        return qi(t), null;
                    }
                    if (e = rl(el.current), fo(t)) {
                        r = t.stateNode, n = t.type;
                        var l = t.memoizedProps;
                        switch (r[da] = t, r[pa] = l, e = 0 != (1 & t.mode), n) {
                            case "dialog":
                                Ir("cancel", r), Ir("close", r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Ir("load", r);
                                break;
                            case "video":
                            case "audio":
                                for (a = 0; a < Or.length; a++)
                                    Ir(Or[a], r);
                                break;
                            case "source":
                                Ir("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Ir("error", r), Ir("load", r);
                                break;
                            case "details":
                                Ir("toggle", r);
                                break;
                            case "input":
                                X(r, l), Ir("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = { wasMultiple: !!l.multiple }, Ir("invalid", r);
                                break;
                            case "textarea": ae(r, l), Ir("invalid", r);
                        }
                        for (var u in ye(n, l), a = null, l)
                            if (l.hasOwnProperty(u)) {
                                var s = l[u];
                                "children" === u ? "string" == typeof s ? r.textContent !== s && (!0 !== l.suppressHydrationWarning && Gr(r.textContent, s, e), a = ["children", s]) : "number" == typeof s && r.textContent !== "" + s && (!0 !== l.suppressHydrationWarning && Gr(r.textContent, s, e), a = ["children", "" + s]) : i.hasOwnProperty(u) && null != s && "onScroll" === u && Ir("scroll", r);
                            }
                        switch (n) {
                            case "input":
                                Q(r), Z(r, l, !0);
                                break;
                            case "textarea":
                                Q(r), le(r);
                                break;
                            case "select":
                            case "option": break;
                            default: "function" == typeof l.onClick && (r.onclick = Zr);
                        }
                        r = a, t.updateQueue = r, null !== r && (t.flags |= 4);
                    }
                    else {
                        u = 9 === a.nodeType ? a : a.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = ie(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = u.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" == typeof r.is ? e = u.createElement(n, { is: r.is }) : (e = u.createElement(n), "select" === n && (u = e, r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, n), e[da] = t, e[pa] = r, zi(e, t, !1, !1), t.stateNode = e;
                        e: {
                            switch (u = be(n, r), n) {
                                case "dialog":
                                    Ir("cancel", e), Ir("close", e), a = r;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    Ir("load", e), a = r;
                                    break;
                                case "video":
                                case "audio":
                                    for (a = 0; a < Or.length; a++)
                                        Ir(Or[a], e);
                                    a = r;
                                    break;
                                case "source":
                                    Ir("error", e), a = r;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    Ir("error", e), Ir("load", e), a = r;
                                    break;
                                case "details":
                                    Ir("toggle", e), a = r;
                                    break;
                                case "input":
                                    X(e, r), a = Y(e, r), Ir("invalid", e);
                                    break;
                                case "option":
                                default:
                                    a = r;
                                    break;
                                case "select":
                                    e._wrapperState = { wasMultiple: !!r.multiple }, a = U({}, r, { value: void 0 }), Ir("invalid", e);
                                    break;
                                case "textarea": ae(e, r), a = re(e, r), Ir("invalid", e);
                            }
                            for (l in ye(n, a), s = a)
                                if (s.hasOwnProperty(l)) {
                                    var c = s[l];
                                    "style" === l ? ve(e, c) : "dangerouslySetInnerHTML" === l ? null != (c = c ? c.__html : void 0) && fe(e, c) : "children" === l ? "string" == typeof c ? ("textarea" !== n || "" !== c) && de(e, c) : "number" == typeof c && de(e, "" + c) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (i.hasOwnProperty(l) ? null != c && "onScroll" === l && Ir("scroll", e) : null != c && b(e, l, c, u));
                                }
                            switch (n) {
                                case "input":
                                    Q(e), Z(e, r, !1);
                                    break;
                                case "textarea":
                                    Q(e), le(e);
                                    break;
                                case "option":
                                    null != r.value && e.setAttribute("value", "" + W(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple, null != (l = r.value) ? ne(e, !!r.multiple, l, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default: "function" == typeof a.onClick && (e.onclick = Zr);
                            }
                            switch (n) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    r = !!r.autoFocus;
                                    break e;
                                case "img":
                                    r = !0;
                                    break e;
                                default: r = !1;
                            }
                        }
                        r && (t.flags |= 4);
                    }
                    null !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                }
                return qi(t), null;
            case 6:
                if (e && null != t.stateNode)
                    Oi(e, t, e.memoizedProps, r);
                else {
                    if ("string" != typeof r && null === t.stateNode)
                        throw Error(o(166));
                    if (n = rl(nl.current), rl(el.current), fo(t)) {
                        if (r = t.stateNode, n = t.memoizedProps, r[da] = t, (l = r.nodeValue !== n) && null !== (e = no))
                            switch (e.tag) {
                                case 3:
                                    Gr(r.nodeValue, n, 0 != (1 & e.mode));
                                    break;
                                case 5: !0 !== e.memoizedProps.suppressHydrationWarning && Gr(r.nodeValue, n, 0 != (1 & e.mode));
                            }
                        l && (t.flags |= 4);
                    }
                    else
                        (r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[da] = t, t.stateNode = r;
                }
                return qi(t), null;
            case 13:
                if (Ca(ul), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                    if (ao && null !== ro && 0 != (1 & t.mode) && 0 == (128 & t.flags))
                        po(), ho(), t.flags |= 98560, l = !1;
                    else if (l = fo(t), null !== r && null !== r.dehydrated) {
                        if (null === e) {
                            if (!l)
                                throw Error(o(318));
                            if (!(l = null !== (l = t.memoizedState) ? l.dehydrated : null))
                                throw Error(o(317));
                            l[da] = t;
                        }
                        else
                            ho(), 0 == (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                        qi(t), l = !1;
                    }
                    else
                        null !== oo && (is(oo), oo = null), l = !0;
                    if (!l)
                        return 65536 & t.flags ? t : null;
                }
                return 0 != (128 & t.flags) ? (t.lanes = n, t) : ((r = null !== r) != (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 0 != (1 & t.mode) && (null === e || 0 != (1 & ul.current) ? 0 === Ou && (Ou = 3) : vs())), null !== t.updateQueue && (t.flags |= 4), qi(t), null);
            case 4: return ol(), Di(e, t), null === e && $r(t.stateNode.containerInfo), qi(t), null;
            case 10: return xo(t.type._context), qi(t), null;
            case 19:
                if (Ca(ul), null === (l = t.memoizedState))
                    return qi(t), null;
                if (r = 0 != (128 & t.flags), null === (u = l.rendering))
                    if (r)
                        Qi(l, !1);
                    else {
                        if (0 !== Ou || null !== e && 0 != (128 & e.flags))
                            for (e = t.child; null !== e;) {
                                if (null !== (u = sl(e))) {
                                    for (t.flags |= 128, Qi(l, !1), null !== (r = u.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;)
                                        e = r, (l = n).flags &= 14680066, null === (u = l.alternate) ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, e = u.dependencies, l.dependencies = null === e ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                                    return _a(ul, 1 & ul.current | 2), t.child;
                                }
                                e = e.sibling;
                            }
                        null !== l.tail && Je() > Vu && (t.flags |= 128, r = !0, Qi(l, !1), t.lanes = 4194304);
                    }
                else {
                    if (!r)
                        if (null !== (e = sl(u))) {
                            if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), Qi(l, !0), null === l.tail && "hidden" === l.tailMode && !u.alternate && !ao)
                                return qi(t), null;
                        }
                        else
                            2 * Je() - l.renderingStartTime > Vu && 1073741824 !== n && (t.flags |= 128, r = !0, Qi(l, !1), t.lanes = 4194304);
                    l.isBackwards ? (u.sibling = t.child, t.child = u) : (null !== (n = l.last) ? n.sibling = u : t.child = u, l.last = u);
                }
                return null !== l.tail ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = Je(), t.sibling = null, n = ul.current, _a(ul, r ? 1 & n | 2 : 1 & n), t) : (qi(t), null);
            case 22:
            case 23: return ds(), r = null !== t.memoizedState, null !== e && null !== e.memoizedState !== r && (t.flags |= 8192), r && 0 != (1 & t.mode) ? 0 != (1073741824 & Du) && (qi(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : qi(t), null;
            case 24:
            case 25: return null;
        } throw Error(o(156, t.tag)); } function Yi(e, t) { switch (to(t), t.tag) {
            case 1: return za(t.type) && Da(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
            case 3: return ol(), Ca(Ra), Ca(La), fl(), 0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
            case 5: return il(t), null;
            case 13:
                if (Ca(ul), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                    if (null === t.alternate)
                        throw Error(o(340));
                    ho();
                }
                return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
            case 19: return Ca(ul), null;
            case 4: return ol(), null;
            case 10: return xo(t.type._context), null;
            case 22:
            case 23: return ds(), null;
            default: return null;
        } } zi = function (e, t) { for (var n = t.child; null !== n;) {
            if (5 === n.tag || 6 === n.tag)
                e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
                n.child.return = n, n = n.child;
                continue;
            }
            if (n === t)
                break;
            for (; null === n.sibling;) {
                if (null === n.return || n.return === t)
                    return;
                n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
        } }, Di = function () { }, Mi = function (e, t, n, r) { var a = e.memoizedProps; if (a !== r) {
            e = t.stateNode, rl(el.current);
            var o, l = null;
            switch (n) {
                case "input":
                    a = Y(e, a), r = Y(e, r), l = [];
                    break;
                case "select":
                    a = U({}, a, { value: void 0 }), r = U({}, r, { value: void 0 }), l = [];
                    break;
                case "textarea":
                    a = re(e, a), r = re(e, r), l = [];
                    break;
                default: "function" != typeof a.onClick && "function" == typeof r.onClick && (e.onclick = Zr);
            }
            for (c in ye(n, r), n = null, a)
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                    if ("style" === c) {
                        var u = a[c];
                        for (o in u)
                            u.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
                    }
                    else
                        "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (i.hasOwnProperty(c) ? l || (l = []) : (l = l || []).push(c, null));
            for (c in r) {
                var s = r[c];
                if (u = null != a ? a[c] : void 0, r.hasOwnProperty(c) && s !== u && (null != s || null != u))
                    if ("style" === c)
                        if (u) {
                            for (o in u)
                                !u.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
                            for (o in s)
                                s.hasOwnProperty(o) && u[o] !== s[o] && (n || (n = {}), n[o] = s[o]);
                        }
                        else
                            n || (l || (l = []), l.push(c, n)), n = s;
                    else
                        "dangerouslySetInnerHTML" === c ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, null != s && u !== s && (l = l || []).push(c, s)) : "children" === c ? "string" != typeof s && "number" != typeof s || (l = l || []).push(c, "" + s) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (i.hasOwnProperty(c) ? (null != s && "onScroll" === c && Ir("scroll", e), l || u === s || (l = [])) : (l = l || []).push(c, s));
            }
            n && (l = l || []).push("style", n);
            var c = l;
            (t.updateQueue = c) && (t.flags |= 4);
        } }, Oi = function (e, t, n, r) { n !== r && (t.flags |= 4); }; var Xi = !1, Ji = !1, Gi = "function" == typeof WeakSet ? WeakSet : Set, Zi = null; function eu(e, t) { var n = e.ref; if (null !== n)
            if ("function" == typeof n)
                try {
                    n(null);
                }
                catch (n) {
                    Cs(e, t, n);
                }
            else
                n.current = null; } function tu(e, t, n) { try {
            n();
        }
        catch (n) {
            Cs(e, t, n);
        } } var nu = !1; function ru(e, t, n) { var r = t.updateQueue; if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = r = r.next;
            do {
                if ((a.tag & e) === e) {
                    var o = a.destroy;
                    a.destroy = void 0, void 0 !== o && tu(t, n, o);
                }
                a = a.next;
            } while (a !== r);
        } } function au(e, t) { if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
            var n = t = t.next;
            do {
                if ((n.tag & e) === e) {
                    var r = n.create;
                    n.destroy = r();
                }
                n = n.next;
            } while (n !== t);
        } } function ou(e) { var t = e.ref; if (null !== t) {
            var n = e.stateNode;
            e.tag, e = n, "function" == typeof t ? t(e) : t.current = e;
        } } function lu(e) { var t = e.alternate; null !== t && (e.alternate = null, lu(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && null !== (t = e.stateNode) && (delete t[da], delete t[pa], delete t[ma], delete t[va], delete t[ga]), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null; } function iu(e) { return 5 === e.tag || 3 === e.tag || 4 === e.tag; } function uu(e) { e: for (;;) {
            for (; null === e.sibling;) {
                if (null === e.return || iu(e.return))
                    return null;
                e = e.return;
            }
            for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
                if (2 & e.flags)
                    continue e;
                if (null === e.child || 4 === e.tag)
                    continue e;
                e.child.return = e, e = e.child;
            }
            if (!(2 & e.flags))
                return e.stateNode;
        } } function su(e, t, n) { var r = e.tag; if (5 === r || 6 === r)
            e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Zr));
        else if (4 !== r && null !== (e = e.child))
            for (su(e, t, n), e = e.sibling; null !== e;)
                su(e, t, n), e = e.sibling; } function cu(e, t, n) { var r = e.tag; if (5 === r || 6 === r)
            e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (4 !== r && null !== (e = e.child))
            for (cu(e, t, n), e = e.sibling; null !== e;)
                cu(e, t, n), e = e.sibling; } var fu = null, du = !1; function pu(e, t, n) { for (n = n.child; null !== n;)
            hu(e, t, n), n = n.sibling; } function hu(e, t, n) { if (ot && "function" == typeof ot.onCommitFiberUnmount)
            try {
                ot.onCommitFiberUnmount(at, n);
            }
            catch (e) { } switch (n.tag) {
            case 5: Ji || eu(n, t);
            case 6:
                var r = fu, a = du;
                fu = null, pu(e, t, n), du = a, null !== (fu = r) && (du ? (e = fu, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : fu.removeChild(n.stateNode));
                break;
            case 18:
                null !== fu && (du ? (e = fu, n = n.stateNode, 8 === e.nodeType ? ua(e.parentNode, n) : 1 === e.nodeType && ua(e, n), $t(e)) : ua(fu, n.stateNode));
                break;
            case 4:
                r = fu, a = du, fu = n.stateNode.containerInfo, du = !0, pu(e, t, n), fu = r, du = a;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!Ji && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
                    a = r = r.next;
                    do {
                        var o = a, l = o.destroy;
                        o = o.tag, void 0 !== l && (0 != (2 & o) || 0 != (4 & o)) && tu(n, t, l), a = a.next;
                    } while (a !== r);
                }
                pu(e, t, n);
                break;
            case 1:
                if (!Ji && (eu(n, t), "function" == typeof (r = n.stateNode).componentWillUnmount))
                    try {
                        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
                    }
                    catch (e) {
                        Cs(n, t, e);
                    }
                pu(e, t, n);
                break;
            case 21:
                pu(e, t, n);
                break;
            case 22:
                1 & n.mode ? (Ji = (r = Ji) || null !== n.memoizedState, pu(e, t, n), Ji = r) : pu(e, t, n);
                break;
            default: pu(e, t, n);
        } } function mu(e) { var t = e.updateQueue; if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Gi), t.forEach((function (t) { var r = Rs.bind(null, e, t); n.has(t) || (n.add(t), t.then(r, r)); }));
        } } function vu(e, t) { var n = t.deletions; if (null !== n)
            for (var r = 0; r < n.length; r++) {
                var a = n[r];
                try {
                    var l = e, i = t, u = i;
                    e: for (; null !== u;) {
                        switch (u.tag) {
                            case 5:
                                fu = u.stateNode, du = !1;
                                break e;
                            case 3:
                            case 4:
                                fu = u.stateNode.containerInfo, du = !0;
                                break e;
                        }
                        u = u.return;
                    }
                    if (null === fu)
                        throw Error(o(160));
                    hu(l, i, a), fu = null, du = !1;
                    var s = a.alternate;
                    null !== s && (s.return = null), a.return = null;
                }
                catch (e) {
                    Cs(a, t, e);
                }
            } if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t;)
                gu(t, e), t = t.sibling; } function gu(e, t) { var n = e.alternate, r = e.flags; switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if (vu(t, e), yu(e), 4 & r) {
                    try {
                        ru(3, e, e.return), au(3, e);
                    }
                    catch (t) {
                        Cs(e, e.return, t);
                    }
                    try {
                        ru(5, e, e.return);
                    }
                    catch (t) {
                        Cs(e, e.return, t);
                    }
                }
                break;
            case 1:
                vu(t, e), yu(e), 512 & r && null !== n && eu(n, n.return);
                break;
            case 5:
                if (vu(t, e), yu(e), 512 & r && null !== n && eu(n, n.return), 32 & e.flags) {
                    var a = e.stateNode;
                    try {
                        de(a, "");
                    }
                    catch (t) {
                        Cs(e, e.return, t);
                    }
                }
                if (4 & r && null != (a = e.stateNode)) {
                    var l = e.memoizedProps, i = null !== n ? n.memoizedProps : l, u = e.type, s = e.updateQueue;
                    if (e.updateQueue = null, null !== s)
                        try {
                            "input" === u && "radio" === l.type && null != l.name && J(a, l), be(u, i);
                            var c = be(u, l);
                            for (i = 0; i < s.length; i += 2) {
                                var f = s[i], d = s[i + 1];
                                "style" === f ? ve(a, d) : "dangerouslySetInnerHTML" === f ? fe(a, d) : "children" === f ? de(a, d) : b(a, f, d, c);
                            }
                            switch (u) {
                                case "input":
                                    G(a, l);
                                    break;
                                case "textarea":
                                    oe(a, l);
                                    break;
                                case "select":
                                    var p = a._wrapperState.wasMultiple;
                                    a._wrapperState.wasMultiple = !!l.multiple;
                                    var h = l.value;
                                    null != h ? ne(a, !!l.multiple, h, !1) : p !== !!l.multiple && (null != l.defaultValue ? ne(a, !!l.multiple, l.defaultValue, !0) : ne(a, !!l.multiple, l.multiple ? [] : "", !1));
                            }
                            a[pa] = l;
                        }
                        catch (t) {
                            Cs(e, e.return, t);
                        }
                }
                break;
            case 6:
                if (vu(t, e), yu(e), 4 & r) {
                    if (null === e.stateNode)
                        throw Error(o(162));
                    a = e.stateNode, l = e.memoizedProps;
                    try {
                        a.nodeValue = l;
                    }
                    catch (t) {
                        Cs(e, e.return, t);
                    }
                }
                break;
            case 3:
                if (vu(t, e), yu(e), 4 & r && null !== n && n.memoizedState.isDehydrated)
                    try {
                        $t(t.containerInfo);
                    }
                    catch (t) {
                        Cs(e, e.return, t);
                    }
                break;
            case 4:
            default:
                vu(t, e), yu(e);
                break;
            case 13:
                vu(t, e), yu(e), 8192 & (a = e.child).flags && (l = null !== a.memoizedState, a.stateNode.isHidden = l, !l || null !== a.alternate && null !== a.alternate.memoizedState || ($u = Je())), 4 & r && mu(e);
                break;
            case 22:
                if (f = null !== n && null !== n.memoizedState, 1 & e.mode ? (Ji = (c = Ji) || f, vu(t, e), Ji = c) : vu(t, e), yu(e), 8192 & r) {
                    if (c = null !== e.memoizedState, (e.stateNode.isHidden = c) && !f && 0 != (1 & e.mode))
                        for (Zi = e, f = e.child; null !== f;) {
                            for (d = Zi = f; null !== Zi;) {
                                switch (h = (p = Zi).child, p.tag) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        ru(4, p, p.return);
                                        break;
                                    case 1:
                                        eu(p, p.return);
                                        var m = p.stateNode;
                                        if ("function" == typeof m.componentWillUnmount) {
                                            r = p, n = p.return;
                                            try {
                                                t = r, m.props = t.memoizedProps, m.state = t.memoizedState, m.componentWillUnmount();
                                            }
                                            catch (e) {
                                                Cs(r, n, e);
                                            }
                                        }
                                        break;
                                    case 5:
                                        eu(p, p.return);
                                        break;
                                    case 22: if (null !== p.memoizedState) {
                                        Su(d);
                                        continue;
                                    }
                                }
                                null !== h ? (h.return = p, Zi = h) : Su(d);
                            }
                            f = f.sibling;
                        }
                    e: for (f = null, d = e;;) {
                        if (5 === d.tag) {
                            if (null === f) {
                                f = d;
                                try {
                                    a = d.stateNode, c ? "function" == typeof (l = a.style).setProperty ? l.setProperty("display", "none", "important") : l.display = "none" : (u = d.stateNode, i = null != (s = d.memoizedProps.style) && s.hasOwnProperty("display") ? s.display : null, u.style.display = me("display", i));
                                }
                                catch (t) {
                                    Cs(e, e.return, t);
                                }
                            }
                        }
                        else if (6 === d.tag) {
                            if (null === f)
                                try {
                                    d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                                }
                                catch (t) {
                                    Cs(e, e.return, t);
                                }
                        }
                        else if ((22 !== d.tag && 23 !== d.tag || null === d.memoizedState || d === e) && null !== d.child) {
                            d.child.return = d, d = d.child;
                            continue;
                        }
                        if (d === e)
                            break e;
                        for (; null === d.sibling;) {
                            if (null === d.return || d.return === e)
                                break e;
                            f === d && (f = null), d = d.return;
                        }
                        f === d && (f = null), d.sibling.return = d.return, d = d.sibling;
                    }
                }
                break;
            case 19: vu(t, e), yu(e), 4 & r && mu(e);
            case 21:
        } } function yu(e) { var t = e.flags; if (2 & t) {
            try {
                e: {
                    for (var n = e.return; null !== n;) {
                        if (iu(n)) {
                            var r = n;
                            break e;
                        }
                        n = n.return;
                    }
                    throw Error(o(160));
                }
                switch (r.tag) {
                    case 5:
                        var a = r.stateNode;
                        32 & r.flags && (de(a, ""), r.flags &= -33), cu(e, uu(e), a);
                        break;
                    case 3:
                    case 4:
                        var l = r.stateNode.containerInfo;
                        su(e, uu(e), l);
                        break;
                    default: throw Error(o(161));
                }
            }
            catch (t) {
                Cs(e, e.return, t);
            }
            e.flags &= -3;
        } 4096 & t && (e.flags &= -4097); } function bu(e, t, n) { Zi = e, wu(e, t, n); } function wu(e, t, n) { for (var r = 0 != (1 & e.mode); null !== Zi;) {
            var a = Zi, o = a.child;
            if (22 === a.tag && r) {
                var l = null !== a.memoizedState || Xi;
                if (!l) {
                    var i = a.alternate, u = null !== i && null !== i.memoizedState || Ji;
                    i = Xi;
                    var s = Ji;
                    if (Xi = l, (Ji = u) && !s)
                        for (Zi = a; null !== Zi;)
                            u = (l = Zi).child, 22 === l.tag && null !== l.memoizedState ? xu(a) : null !== u ? (u.return = l, Zi = u) : xu(a);
                    for (; null !== o;)
                        Zi = o, wu(o, t, n), o = o.sibling;
                    Zi = a, Xi = i, Ji = s;
                }
                ku(e);
            }
            else
                0 != (8772 & a.subtreeFlags) && null !== o ? (o.return = a, Zi = o) : ku(e);
        } } function ku(e) { for (; null !== Zi;) {
            var t = Zi;
            if (0 != (8772 & t.flags)) {
                var n = t.alternate;
                try {
                    if (0 != (8772 & t.flags))
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Ji || au(5, t);
                                break;
                            case 1:
                                var r = t.stateNode;
                                if (4 & t.flags && !Ji)
                                    if (null === n)
                                        r.componentDidMount();
                                    else {
                                        var a = t.elementType === t.type ? n.memoizedProps : go(t.type, n.memoizedProps);
                                        r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                                    }
                                var l = t.updateQueue;
                                null !== l && Io(t, l, r);
                                break;
                            case 3:
                                var i = t.updateQueue;
                                if (null !== i) {
                                    if (n = null, null !== t.child)
                                        switch (t.child.tag) {
                                            case 5:
                                            case 1: n = t.child.stateNode;
                                        }
                                    Io(t, i, n);
                                }
                                break;
                            case 5:
                                var u = t.stateNode;
                                if (null === n && 4 & t.flags) {
                                    n = u;
                                    var s = t.memoizedProps;
                                    switch (t.type) {
                                        case "button":
                                        case "input":
                                        case "select":
                                        case "textarea":
                                            s.autoFocus && n.focus();
                                            break;
                                        case "img": s.src && (n.src = s.src);
                                    }
                                }
                                break;
                            case 6:
                            case 4:
                            case 12:
                            case 19:
                            case 17:
                            case 21:
                            case 22:
                            case 23:
                            case 25: break;
                            case 13:
                                if (null === t.memoizedState) {
                                    var c = t.alternate;
                                    if (null !== c) {
                                        var f = c.memoizedState;
                                        if (null !== f) {
                                            var d = f.dehydrated;
                                            null !== d && $t(d);
                                        }
                                    }
                                }
                                break;
                            default: throw Error(o(163));
                        }
                    Ji || 512 & t.flags && ou(t);
                }
                catch (e) {
                    Cs(t, t.return, e);
                }
            }
            if (t === e) {
                Zi = null;
                break;
            }
            if (null !== (n = t.sibling)) {
                n.return = t.return, Zi = n;
                break;
            }
            Zi = t.return;
        } } function Su(e) { for (; null !== Zi;) {
            var t = Zi;
            if (t === e) {
                Zi = null;
                break;
            }
            var n = t.sibling;
            if (null !== n) {
                n.return = t.return, Zi = n;
                break;
            }
            Zi = t.return;
        } } function xu(e) { for (; null !== Zi;) {
            var t = Zi;
            try {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        var n = t.return;
                        try {
                            au(4, t);
                        }
                        catch (e) {
                            Cs(t, n, e);
                        }
                        break;
                    case 1:
                        var r = t.stateNode;
                        if ("function" == typeof r.componentDidMount) {
                            var a = t.return;
                            try {
                                r.componentDidMount();
                            }
                            catch (e) {
                                Cs(t, a, e);
                            }
                        }
                        var o = t.return;
                        try {
                            ou(t);
                        }
                        catch (e) {
                            Cs(t, o, e);
                        }
                        break;
                    case 5:
                        var l = t.return;
                        try {
                            ou(t);
                        }
                        catch (e) {
                            Cs(t, l, e);
                        }
                }
            }
            catch (e) {
                Cs(t, t.return, e);
            }
            if (t === e) {
                Zi = null;
                break;
            }
            var i = t.sibling;
            if (null !== i) {
                i.return = t.return, Zi = i;
                break;
            }
            Zi = t.return;
        } } var Eu, Cu = Math.ceil, _u = w.ReactCurrentDispatcher, Pu = w.ReactCurrentOwner, Lu = w.ReactCurrentBatchConfig, Ru = 0, Tu = null, Nu = null, zu = 0, Du = 0, Mu = Ea(0), Ou = 0, Fu = null, Uu = 0, ju = 0, Iu = 0, Au = null, Bu = null, $u = 0, Vu = 1 / 0, Wu = null, Hu = !1, Qu = null, qu = null, Ku = !1, Yu = null, Xu = 0, Ju = 0, Gu = null, Zu = -1, es = 0; function ts() { return 0 != (6 & Ru) ? Je() : -1 !== Zu ? Zu : Zu = Je(); } function ns(e) { return 0 == (1 & e.mode) ? 1 : 0 != (2 & Ru) && 0 !== zu ? zu & -zu : null !== vo.transition ? (0 === es && (es = mt()), es) : 0 !== (e = bt) ? e : e = void 0 === (e = window.event) ? 16 : Xt(e.type); } function rs(e, t, n, r) { if (50 < Ju)
            throw Ju = 0, Gu = null, Error(o(185)); gt(e, n, r), 0 != (2 & Ru) && e === Tu || (e === Tu && (0 == (2 & Ru) && (ju |= n), 4 === Ou && us(e, zu)), as(e, r), 1 === n && 0 === Ru && 0 == (1 & t.mode) && (Vu = Je() + 500, Ia && $a())); } function as(e, t) { var n = e.callbackNode; !function (e, t) { for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
            var l = 31 - lt(o), i = 1 << l, u = a[l];
            -1 === u ? 0 != (i & n) && 0 == (i & r) || (a[l] = pt(i, t)) : u <= t && (e.expiredLanes |= i), o &= ~i;
        } }(e, t); var r = dt(e, e === Tu ? zu : 0); if (0 === r)
            null !== n && Ke(n), e.callbackNode = null, e.callbackPriority = 0;
        else if (t = r & -r, e.callbackPriority !== t) {
            if (null != n && Ke(n), 1 === t)
                0 === e.tag ? function (e) { Ia = !0, Ba(e); }(ss.bind(null, e)) : Ba(ss.bind(null, e)), la((function () { 0 == (6 & Ru) && $a(); })), n = null;
            else {
                switch (wt(r)) {
                    case 1:
                        n = Ze;
                        break;
                    case 4:
                        n = et;
                        break;
                    case 16:
                    default:
                        n = tt;
                        break;
                    case 536870912: n = rt;
                }
                n = Ts(n, os.bind(null, e));
            }
            e.callbackPriority = t, e.callbackNode = n;
        } } function os(e, t) { if (Zu = -1, es = 0, 0 != (6 & Ru))
            throw Error(o(327)); var n = e.callbackNode; if (xs() && e.callbackNode !== n)
            return null; var r = dt(e, e === Tu ? zu : 0); if (0 === r)
            return null; if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t)
            t = gs(e, r);
        else {
            t = r;
            var a = Ru;
            Ru |= 2;
            var l = ms();
            for (Tu === e && zu === t || (Wu = null, Vu = Je() + 500, ps(e, t));;)
                try {
                    bs();
                    break;
                }
                catch (t) {
                    hs(e, t);
                }
            So(), _u.current = l, Ru = a, null !== Nu ? t = 0 : (Tu = null, zu = 0, t = Ou);
        } if (0 !== t) {
            if (2 === t && 0 !== (a = ht(e)) && (r = a, t = ls(e, a)), 1 === t)
                throw n = Fu, ps(e, 0), us(e, r), as(e, Je()), n;
            if (6 === t)
                us(e, r);
            else {
                if (a = e.current.alternate, 0 == (30 & r) && !function (e) { for (var t = e;;) {
                    if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                            for (var r = 0; r < n.length; r++) {
                                var a = n[r], o = a.getSnapshot;
                                a = a.value;
                                try {
                                    if (!ir(o(), a))
                                        return !1;
                                }
                                catch (e) {
                                    return !1;
                                }
                            }
                    }
                    if (n = t.child, 16384 & t.subtreeFlags && null !== n)
                        n.return = t, t = n;
                    else {
                        if (t === e)
                            break;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === e)
                                return !0;
                            t = t.return;
                        }
                        t.sibling.return = t.return, t = t.sibling;
                    }
                } return !0; }(a) && (2 === (t = gs(e, r)) && 0 !== (l = ht(e)) && (r = l, t = ls(e, l)), 1 === t))
                    throw n = Fu, ps(e, 0), us(e, r), as(e, Je()), n;
                switch (e.finishedWork = a, e.finishedLanes = r, t) {
                    case 0:
                    case 1: throw Error(o(345));
                    case 2:
                    case 5:
                        Ss(e, Bu, Wu);
                        break;
                    case 3:
                        if (us(e, r), (130023424 & r) === r && 10 < (t = $u + 500 - Je())) {
                            if (0 !== dt(e, 0))
                                break;
                            if (((a = e.suspendedLanes) & r) !== r) {
                                ts(), e.pingedLanes |= e.suspendedLanes & a;
                                break;
                            }
                            e.timeoutHandle = ra(Ss.bind(null, e, Bu, Wu), t);
                            break;
                        }
                        Ss(e, Bu, Wu);
                        break;
                    case 4:
                        if (us(e, r), (4194240 & r) === r)
                            break;
                        for (t = e.eventTimes, a = -1; 0 < r;) {
                            var i = 31 - lt(r);
                            l = 1 << i, (i = t[i]) > a && (a = i), r &= ~l;
                        }
                        if (r = a, 10 < (r = (120 > (r = Je() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Cu(r / 1960)) - r)) {
                            e.timeoutHandle = ra(Ss.bind(null, e, Bu, Wu), r);
                            break;
                        }
                        Ss(e, Bu, Wu);
                        break;
                    default: throw Error(o(329));
                }
            }
        } return as(e, Je()), e.callbackNode === n ? os.bind(null, e) : null; } function ls(e, t) { var n = Au; return e.current.memoizedState.isDehydrated && (ps(e, t).flags |= 256), 2 !== (e = gs(e, t)) && (t = Bu, Bu = n, null !== t && is(t)), e; } function is(e) { null === Bu ? Bu = e : Bu.push.apply(Bu, e); } function us(e, t) { for (t &= ~Iu, t &= ~ju, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
            var n = 31 - lt(t), r = 1 << n;
            e[n] = -1, t &= ~r;
        } } function ss(e) { if (0 != (6 & Ru))
            throw Error(o(327)); xs(); var t = dt(e, 0); if (0 == (1 & t))
            return as(e, Je()), null; var n = gs(e, t); if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && (t = r, n = ls(e, r));
        } if (1 === n)
            throw n = Fu, ps(e, 0), us(e, t), as(e, Je()), n; if (6 === n)
            throw Error(o(345)); return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ss(e, Bu, Wu), as(e, Je()), null; } function cs(e, t) { var n = Ru; Ru |= 1; try {
            return e(t);
        }
        finally {
            0 === (Ru = n) && (Vu = Je() + 500, Ia && $a());
        } } function fs(e) { null !== Yu && 0 === Yu.tag && 0 == (6 & Ru) && xs(); var t = Ru; Ru |= 1; var n = Lu.transition, r = bt; try {
            if (Lu.transition = null, bt = 1, e)
                return e();
        }
        finally {
            bt = r, Lu.transition = n, 0 == (6 & (Ru = t)) && $a();
        } } function ds() { Du = Mu.current, Ca(Mu); } function ps(e, t) { e.finishedWork = null, e.finishedLanes = 0; var n = e.timeoutHandle; if (-1 !== n && (e.timeoutHandle = -1, aa(n)), null !== Nu)
            for (n = Nu.return; null !== n;) {
                var r = n;
                switch (to(r), r.tag) {
                    case 1:
                        null != (r = r.type.childContextTypes) && Da();
                        break;
                    case 3:
                        ol(), Ca(Ra), Ca(La), fl();
                        break;
                    case 5:
                        il(r);
                        break;
                    case 4:
                        ol();
                        break;
                    case 13:
                    case 19:
                        Ca(ul);
                        break;
                    case 10:
                        xo(r.type._context);
                        break;
                    case 22:
                    case 23: ds();
                }
                n = n.return;
            } if (Tu = e, Nu = e = Ms(e.current, null), zu = Du = t, Ou = 0, Fu = null, Iu = ju = Uu = 0, Bu = Au = null, null !== Po) {
            for (t = 0; t < Po.length; t++)
                if (null !== (r = (n = Po[t]).interleaved)) {
                    n.interleaved = null;
                    var a = r.next, o = n.pending;
                    if (null !== o) {
                        var l = o.next;
                        o.next = a, r.next = l;
                    }
                    n.pending = r;
                }
            Po = null;
        } return e; } function hs(e, t) { for (;;) {
            var n = Nu;
            try {
                if (So(), dl.current = li, yl) {
                    for (var r = ml.memoizedState; null !== r;) {
                        var a = r.queue;
                        null !== a && (a.pending = null), r = r.next;
                    }
                    yl = !1;
                }
                if (hl = 0, gl = vl = ml = null, bl = !1, wl = 0, Pu.current = null, null === n || null === n.return) {
                    Ou = 1, Fu = t, Nu = null;
                    break;
                }
                e: {
                    var l = e, i = n.return, u = n, s = t;
                    if (t = zu, u.flags |= 32768, null !== s && "object" == typeof s && "function" == typeof s.then) {
                        var c = s, f = u, d = f.tag;
                        if (0 == (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                            var p = f.alternate;
                            p ? (f.updateQueue = p.updateQueue, f.memoizedState = p.memoizedState, f.lanes = p.lanes) : (f.updateQueue = null, f.memoizedState = null);
                        }
                        var h = gi(i);
                        if (null !== h) {
                            h.flags &= -257, yi(h, i, u, 0, t), 1 & h.mode && vi(l, c, t), s = c;
                            var m = (t = h).updateQueue;
                            if (null === m) {
                                var v = new Set;
                                v.add(s), t.updateQueue = v;
                            }
                            else
                                m.add(s);
                            break e;
                        }
                        if (0 == (1 & t)) {
                            vi(l, c, t), vs();
                            break e;
                        }
                        s = Error(o(426));
                    }
                    else if (ao && 1 & u.mode) {
                        var g = gi(i);
                        if (null !== g) {
                            0 == (65536 & g.flags) && (g.flags |= 256), yi(g, i, u, 0, t), mo(ci(s, u));
                            break e;
                        }
                    }
                    l = s = ci(s, u), 4 !== Ou && (Ou = 2), null === Au ? Au = [l] : Au.push(l), l = i;
                    do {
                        switch (l.tag) {
                            case 3:
                                l.flags |= 65536, t &= -t, l.lanes |= t, Uo(l, hi(0, s, t));
                                break e;
                            case 1:
                                u = s;
                                var y = l.type, b = l.stateNode;
                                if (0 == (128 & l.flags) && ("function" == typeof y.getDerivedStateFromError || null !== b && "function" == typeof b.componentDidCatch && (null === qu || !qu.has(b)))) {
                                    l.flags |= 65536, t &= -t, l.lanes |= t, Uo(l, mi(l, u, t));
                                    break e;
                                }
                        }
                        l = l.return;
                    } while (null !== l);
                }
                ks(n);
            }
            catch (e) {
                t = e, Nu === n && null !== n && (Nu = n = n.return);
                continue;
            }
            break;
        } } function ms() { var e = _u.current; return _u.current = li, null === e ? li : e; } function vs() { 0 !== Ou && 3 !== Ou && 2 !== Ou || (Ou = 4), null === Tu || 0 == (268435455 & Uu) && 0 == (268435455 & ju) || us(Tu, zu); } function gs(e, t) { var n = Ru; Ru |= 2; var r = ms(); for (Tu === e && zu === t || (Wu = null, ps(e, t));;)
            try {
                ys();
                break;
            }
            catch (t) {
                hs(e, t);
            } if (So(), Ru = n, _u.current = r, null !== Nu)
            throw Error(o(261)); return Tu = null, zu = 0, Ou; } function ys() { for (; null !== Nu;)
            ws(Nu); } function bs() { for (; null !== Nu && !Ye();)
            ws(Nu); } function ws(e) { var t = Eu(e.alternate, e, Du); e.memoizedProps = e.pendingProps, null === t ? ks(e) : Nu = t, Pu.current = null; } function ks(e) { var t = e; do {
            var n = t.alternate;
            if (e = t.return, 0 == (32768 & t.flags)) {
                if (null !== (n = Ki(n, t, Du)))
                    return void (Nu = n);
            }
            else {
                if (null !== (n = Yi(n, t)))
                    return n.flags &= 32767, void (Nu = n);
                if (null === e)
                    return Ou = 6, void (Nu = null);
                e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            }
            if (null !== (t = t.sibling))
                return void (Nu = t);
            Nu = t = e;
        } while (null !== t); 0 === Ou && (Ou = 5); } function Ss(e, t, n) { var r = bt, a = Lu.transition; try {
            Lu.transition = null, bt = 1, function (e, t, n, r) { do {
                xs();
            } while (null !== Yu); if (0 != (6 & Ru))
                throw Error(o(327)); n = e.finishedWork; var a = e.finishedLanes; if (null === n)
                return null; if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
                throw Error(o(177)); e.callbackNode = null, e.callbackPriority = 0; var l = n.lanes | n.childLanes; if (function (e, t) { var n = e.pendingLanes & ~t; e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements; var r = e.eventTimes; for (e = e.expirationTimes; 0 < n;) {
                var a = 31 - lt(n), o = 1 << a;
                t[a] = 0, r[a] = -1, e[a] = -1, n &= ~o;
            } }(e, l), e === Tu && (Nu = Tu = null, zu = 0), 0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags) || Ku || (Ku = !0, Ts(tt, (function () { return xs(), null; }))), l = 0 != (15990 & n.flags), 0 != (15990 & n.subtreeFlags) || l) {
                l = Lu.transition, Lu.transition = null;
                var i = bt;
                bt = 1;
                var u = Ru;
                Ru |= 4, Pu.current = null, function (e, t) { if (ea = Wt, pr(e = dr())) {
                    if ("selectionStart" in e)
                        var n = { start: e.selectionStart, end: e.selectionEnd };
                    else
                        e: {
                            var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                                n = r.anchorNode;
                                var a = r.anchorOffset, l = r.focusNode;
                                r = r.focusOffset;
                                try {
                                    n.nodeType, l.nodeType;
                                }
                                catch (e) {
                                    n = null;
                                    break e;
                                }
                                var i = 0, u = -1, s = -1, c = 0, f = 0, d = e, p = null;
                                t: for (;;) {
                                    for (var h; d !== n || 0 !== a && 3 !== d.nodeType || (u = i + a), d !== l || 0 !== r && 3 !== d.nodeType || (s = i + r), 3 === d.nodeType && (i += d.nodeValue.length), null !== (h = d.firstChild);)
                                        p = d, d = h;
                                    for (;;) {
                                        if (d === e)
                                            break t;
                                        if (p === n && ++c === a && (u = i), p === l && ++f === r && (s = i), null !== (h = d.nextSibling))
                                            break;
                                        p = (d = p).parentNode;
                                    }
                                    d = h;
                                }
                                n = -1 === u || -1 === s ? null : { start: u, end: s };
                            }
                            else
                                n = null;
                        }
                    n = n || { start: 0, end: 0 };
                }
                else
                    n = null; for (ta = { focusedElem: e, selectionRange: n }, Wt = !1, Zi = t; null !== Zi;)
                    if (e = (t = Zi).child, 0 != (1028 & t.subtreeFlags) && null !== e)
                        e.return = t, Zi = e;
                    else
                        for (; null !== Zi;) {
                            t = Zi;
                            try {
                                var m = t.alternate;
                                if (0 != (1024 & t.flags))
                                    switch (t.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                        case 5:
                                        case 6:
                                        case 4:
                                        case 17: break;
                                        case 1:
                                            if (null !== m) {
                                                var v = m.memoizedProps, g = m.memoizedState, y = t.stateNode, b = y.getSnapshotBeforeUpdate(t.elementType === t.type ? v : go(t.type, v), g);
                                                y.__reactInternalSnapshotBeforeUpdate = b;
                                            }
                                            break;
                                        case 3:
                                            var w = t.stateNode.containerInfo;
                                            1 === w.nodeType ? w.textContent = "" : 9 === w.nodeType && w.documentElement && w.removeChild(w.documentElement);
                                            break;
                                        default: throw Error(o(163));
                                    }
                            }
                            catch (e) {
                                Cs(t, t.return, e);
                            }
                            if (null !== (e = t.sibling)) {
                                e.return = t.return, Zi = e;
                                break;
                            }
                            Zi = t.return;
                        } m = nu, nu = !1; }(e, n), gu(n, e), hr(ta), Wt = !!ea, ta = ea = null, e.current = n, bu(n, e, a), Xe(), Ru = u, bt = i, Lu.transition = l;
            }
            else
                e.current = n; if (Ku && (Ku = !1, Yu = e, Xu = a), 0 === (l = e.pendingLanes) && (qu = null), function (e) { if (ot && "function" == typeof ot.onCommitFiberRoot)
                try {
                    ot.onCommitFiberRoot(at, e, void 0, 128 == (128 & e.current.flags));
                }
                catch (e) { } }(n.stateNode), as(e, Je()), null !== t)
                for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    r((a = t[n]).value, { componentStack: a.stack, digest: a.digest }); if (Hu)
                throw Hu = !1, e = Qu, Qu = null, e; 0 != (1 & Xu) && 0 !== e.tag && xs(), 0 != (1 & (l = e.pendingLanes)) ? e === Gu ? Ju++ : (Ju = 0, Gu = e) : Ju = 0, $a(); }(e, t, n, r);
        }
        finally {
            Lu.transition = a, bt = r;
        } return null; } function xs() { if (null !== Yu) {
            var e = wt(Xu), t = Lu.transition, n = bt;
            try {
                if (Lu.transition = null, bt = 16 > e ? 16 : e, null === Yu)
                    var r = !1;
                else {
                    if (e = Yu, Yu = null, Xu = 0, 0 != (6 & Ru))
                        throw Error(o(331));
                    var a = Ru;
                    for (Ru |= 4, Zi = e.current; null !== Zi;) {
                        var l = Zi, i = l.child;
                        if (0 != (16 & Zi.flags)) {
                            var u = l.deletions;
                            if (null !== u) {
                                for (var s = 0; s < u.length; s++) {
                                    var c = u[s];
                                    for (Zi = c; null !== Zi;) {
                                        var f = Zi;
                                        switch (f.tag) {
                                            case 0:
                                            case 11:
                                            case 15: ru(8, f, l);
                                        }
                                        var d = f.child;
                                        if (null !== d)
                                            d.return = f, Zi = d;
                                        else
                                            for (; null !== Zi;) {
                                                var p = (f = Zi).sibling, h = f.return;
                                                if (lu(f), f === c) {
                                                    Zi = null;
                                                    break;
                                                }
                                                if (null !== p) {
                                                    p.return = h, Zi = p;
                                                    break;
                                                }
                                                Zi = h;
                                            }
                                    }
                                }
                                var m = l.alternate;
                                if (null !== m) {
                                    var v = m.child;
                                    if (null !== v) {
                                        m.child = null;
                                        do {
                                            var g = v.sibling;
                                            v.sibling = null, v = g;
                                        } while (null !== v);
                                    }
                                }
                                Zi = l;
                            }
                        }
                        if (0 != (2064 & l.subtreeFlags) && null !== i)
                            i.return = l, Zi = i;
                        else
                            e: for (; null !== Zi;) {
                                if (0 != (2048 & (l = Zi).flags))
                                    switch (l.tag) {
                                        case 0:
                                        case 11:
                                        case 15: ru(9, l, l.return);
                                    }
                                var y = l.sibling;
                                if (null !== y) {
                                    y.return = l.return, Zi = y;
                                    break e;
                                }
                                Zi = l.return;
                            }
                    }
                    var b = e.current;
                    for (Zi = b; null !== Zi;) {
                        var w = (i = Zi).child;
                        if (0 != (2064 & i.subtreeFlags) && null !== w)
                            w.return = i, Zi = w;
                        else
                            e: for (i = b; null !== Zi;) {
                                if (0 != (2048 & (u = Zi).flags))
                                    try {
                                        switch (u.tag) {
                                            case 0:
                                            case 11:
                                            case 15: au(9, u);
                                        }
                                    }
                                    catch (e) {
                                        Cs(u, u.return, e);
                                    }
                                if (u === i) {
                                    Zi = null;
                                    break e;
                                }
                                var k = u.sibling;
                                if (null !== k) {
                                    k.return = u.return, Zi = k;
                                    break e;
                                }
                                Zi = u.return;
                            }
                    }
                    if (Ru = a, $a(), ot && "function" == typeof ot.onPostCommitFiberRoot)
                        try {
                            ot.onPostCommitFiberRoot(at, e);
                        }
                        catch (e) { }
                    r = !0;
                }
                return r;
            }
            finally {
                bt = n, Lu.transition = t;
            }
        } return !1; } function Es(e, t, n) { e = Oo(e, t = hi(0, t = ci(n, t), 1), 1), t = ts(), null !== e && (gt(e, 1, t), as(e, t)); } function Cs(e, t, n) { if (3 === e.tag)
            Es(e, e, n);
        else
            for (; null !== t;) {
                if (3 === t.tag) {
                    Es(t, e, n);
                    break;
                }
                if (1 === t.tag) {
                    var r = t.stateNode;
                    if ("function" == typeof t.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === qu || !qu.has(r))) {
                        t = Oo(t, e = mi(t, e = ci(n, e), 1), 1), e = ts(), null !== t && (gt(t, 1, e), as(t, e));
                        break;
                    }
                }
                t = t.return;
            } } function _s(e, t, n) { var r = e.pingCache; null !== r && r.delete(t), t = ts(), e.pingedLanes |= e.suspendedLanes & n, Tu === e && (zu & n) === n && (4 === Ou || 3 === Ou && (130023424 & zu) === zu && 500 > Je() - $u ? ps(e, 0) : Iu |= n), as(e, t); } function Ps(e, t) { 0 === t && (0 == (1 & e.mode) ? t = 1 : (t = ct, 0 == (130023424 & (ct <<= 1)) && (ct = 4194304))); var n = ts(); null !== (e = To(e, t)) && (gt(e, t, n), as(e, n)); } function Ls(e) { var t = e.memoizedState, n = 0; null !== t && (n = t.retryLane), Ps(e, n); } function Rs(e, t) { var n = 0; switch (e.tag) {
            case 13:
                var r = e.stateNode, a = e.memoizedState;
                null !== a && (n = a.retryLane);
                break;
            case 19:
                r = e.stateNode;
                break;
            default: throw Error(o(314));
        } null !== r && r.delete(t), Ps(e, n); } function Ts(e, t) { return qe(e, t); } function Ns(e, t, n, r) { this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null; } function zs(e, t, n, r) { return new Ns(e, t, n, r); } function Ds(e) { return !(!(e = e.prototype) || !e.isReactComponent); } function Ms(e, t) { var n = e.alternate; return null === n ? ((n = zs(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n; } function Os(e, t, n, r, a, l) { var i = 2; if (r = e, "function" == typeof e)
            Ds(e) && (i = 1);
        else if ("string" == typeof e)
            i = 5;
        else
            e: switch (e) {
                case x: return Fs(n.children, a, l, t);
                case E:
                    i = 8, a |= 8;
                    break;
                case C: return (e = zs(12, n, t, 2 | a)).elementType = C, e.lanes = l, e;
                case R: return (e = zs(13, n, t, a)).elementType = R, e.lanes = l, e;
                case T: return (e = zs(19, n, t, a)).elementType = T, e.lanes = l, e;
                case D: return Us(n, a, l, t);
                default:
                    if ("object" == typeof e && null !== e)
                        switch (e.$$typeof) {
                            case _:
                                i = 10;
                                break e;
                            case P:
                                i = 9;
                                break e;
                            case L:
                                i = 11;
                                break e;
                            case N:
                                i = 14;
                                break e;
                            case z:
                                i = 16, r = null;
                                break e;
                        }
                    throw Error(o(130, null == e ? e : typeof e, ""));
            } return (t = zs(i, n, t, a)).elementType = e, t.type = r, t.lanes = l, t; } function Fs(e, t, n, r) { return (e = zs(7, e, r, t)).lanes = n, e; } function Us(e, t, n, r) { return (e = zs(22, e, r, t)).elementType = D, e.lanes = n, e.stateNode = { isHidden: !1 }, e; } function js(e, t, n) { return (e = zs(6, e, null, t)).lanes = n, e; } function Is(e, t, n) { return (t = zs(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t; } function As(e, t, n, r, a) { this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = vt(0), this.expirationTimes = vt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = vt(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null; } function Bs(e, t, n, r, a, o, l, i, u) { return e = new As(e, t, n, i, u), 1 === t ? (t = 1, !0 === o && (t |= 8)) : t = 0, o = zs(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, zo(o), e; } function $s(e) { if (!e)
            return Pa; e: {
            if ($e(e = e._reactInternals) !== e || 1 !== e.tag)
                throw Error(o(170));
            var t = e;
            do {
                switch (t.tag) {
                    case 3:
                        t = t.stateNode.context;
                        break e;
                    case 1: if (za(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
                }
                t = t.return;
            } while (null !== t);
            throw Error(o(171));
        } if (1 === e.tag) {
            var n = e.type;
            if (za(n))
                return Oa(e, n, t);
        } return t; } function Vs(e, t, n, r, a, o, l, i, u) { return (e = Bs(n, r, !0, e, 0, o, 0, i, u)).context = $s(null), n = e.current, (o = Mo(r = ts(), a = ns(n))).callback = null != t ? t : null, Oo(n, o, a), e.current.lanes = a, gt(e, a, r), as(e, r), e; } function Ws(e, t, n, r) { var a = t.current, o = ts(), l = ns(a); return n = $s(n), null === t.context ? t.context = n : t.pendingContext = n, (t = Mo(o, l)).payload = { element: e }, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = Oo(a, t, l)) && (rs(e, a, l, o), Fo(e, a, l)), l; } function Hs(e) { return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null; } function Qs(e, t) { if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
        } } function qs(e, t) { Qs(e, t), (e = e.alternate) && Qs(e, t); } Eu = function (e, t, n) { if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Ra.current)
                wi = !0;
            else {
                if (0 == (e.lanes & n) && 0 == (128 & t.flags))
                    return wi = !1, function (e, t, n) { switch (t.tag) {
                        case 3:
                            Ti(t), ho();
                            break;
                        case 5:
                            ll(t);
                            break;
                        case 1:
                            za(t.type) && Fa(t);
                            break;
                        case 4:
                            al(t, t.stateNode.containerInfo);
                            break;
                        case 10:
                            var r = t.type._context, a = t.memoizedProps.value;
                            _a(yo, r._currentValue), r._currentValue = a;
                            break;
                        case 13:
                            if (null !== (r = t.memoizedState))
                                return null !== r.dehydrated ? (_a(ul, 1 & ul.current), t.flags |= 128, null) : 0 != (n & t.child.childLanes) ? ji(e, t, n) : (_a(ul, 1 & ul.current), null !== (e = Hi(e, t, n)) ? e.sibling : null);
                            _a(ul, 1 & ul.current);
                            break;
                        case 19:
                            if (r = 0 != (n & t.childLanes), 0 != (128 & e.flags)) {
                                if (r)
                                    return Vi(e, t, n);
                                t.flags |= 128;
                            }
                            if (null !== (a = t.memoizedState) && (a.rendering = null, a.tail = null, a.lastEffect = null), _a(ul, ul.current), r)
                                break;
                            return null;
                        case 22:
                        case 23: return t.lanes = 0, Ci(e, t, n);
                    } return Hi(e, t, n); }(e, t, n);
                wi = 0 != (131072 & e.flags);
            }
        else
            wi = !1, ao && 0 != (1048576 & t.flags) && Za(t, Qa, t.index); switch (t.lanes = 0, t.tag) {
            case 2:
                var r = t.type;
                Wi(e, t), e = t.pendingProps;
                var a = Na(t, La.current);
                Co(t, n), a = El(null, t, r, e, a, n);
                var l = Cl();
                return t.flags |= 1, "object" == typeof a && null !== a && "function" == typeof a.render && void 0 === a.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, za(r) ? (l = !0, Fa(t)) : l = !1, t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null, zo(t), a.updater = $o, t.stateNode = a, a._reactInternals = t, Qo(t, r, e, n), t = Ri(null, t, r, !0, l, n)) : (t.tag = 0, ao && l && eo(t), ki(null, t, a, n), t = t.child), t;
            case 16:
                r = t.elementType;
                e: {
                    switch (Wi(e, t), e = t.pendingProps, r = (a = r._init)(r._payload), t.type = r, a = t.tag = function (e) { if ("function" == typeof e)
                        return Ds(e) ? 1 : 0; if (null != e) {
                        if ((e = e.$$typeof) === L)
                            return 11;
                        if (e === N)
                            return 14;
                    } return 2; }(r), e = go(r, e), a) {
                        case 0:
                            t = Pi(null, t, r, e, n);
                            break e;
                        case 1:
                            t = Li(null, t, r, e, n);
                            break e;
                        case 11:
                            t = Si(null, t, r, e, n);
                            break e;
                        case 14:
                            t = xi(null, t, r, go(r.type, e), n);
                            break e;
                    }
                    throw Error(o(306, r, ""));
                }
                return t;
            case 0: return r = t.type, a = t.pendingProps, Pi(e, t, r, a = t.elementType === r ? a : go(r, a), n);
            case 1: return r = t.type, a = t.pendingProps, Li(e, t, r, a = t.elementType === r ? a : go(r, a), n);
            case 3:
                e: {
                    if (Ti(t), null === e)
                        throw Error(o(387));
                    r = t.pendingProps, a = (l = t.memoizedState).element, Do(e, t), jo(t, r, null, n);
                    var i = t.memoizedState;
                    if (r = i.element, l.isDehydrated) {
                        if (l = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = l, t.memoizedState = l, 256 & t.flags) {
                            t = Ni(e, t, r, n, a = ci(Error(o(423)), t));
                            break e;
                        }
                        if (r !== a) {
                            t = Ni(e, t, r, n, a = ci(Error(o(424)), t));
                            break e;
                        }
                        for (ro = sa(t.stateNode.containerInfo.firstChild), no = t, ao = !0, oo = null, n = Go(t, null, r, n), t.child = n; n;)
                            n.flags = -3 & n.flags | 4096, n = n.sibling;
                    }
                    else {
                        if (ho(), r === a) {
                            t = Hi(e, t, n);
                            break e;
                        }
                        ki(e, t, r, n);
                    }
                    t = t.child;
                }
                return t;
            case 5: return ll(t), null === e && so(t), r = t.type, a = t.pendingProps, l = null !== e ? e.memoizedProps : null, i = a.children, na(r, a) ? i = null : null !== l && na(r, l) && (t.flags |= 32), _i(e, t), ki(e, t, i, n), t.child;
            case 6: return null === e && so(t), null;
            case 13: return ji(e, t, n);
            case 4: return al(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Jo(t, null, r, n) : ki(e, t, r, n), t.child;
            case 11: return r = t.type, a = t.pendingProps, Si(e, t, r, a = t.elementType === r ? a : go(r, a), n);
            case 7: return ki(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12: return ki(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    if (r = t.type._context, a = t.pendingProps, l = t.memoizedProps, i = a.value, _a(yo, r._currentValue), r._currentValue = i, null !== l)
                        if (ir(l.value, i)) {
                            if (l.children === a.children && !Ra.current) {
                                t = Hi(e, t, n);
                                break e;
                            }
                        }
                        else
                            for (null !== (l = t.child) && (l.return = t); null !== l;) {
                                var u = l.dependencies;
                                if (null !== u) {
                                    i = l.child;
                                    for (var s = u.firstContext; null !== s;) {
                                        if (s.context === r) {
                                            if (1 === l.tag) {
                                                (s = Mo(-1, n & -n)).tag = 2;
                                                var c = l.updateQueue;
                                                if (null !== c) {
                                                    var f = (c = c.shared).pending;
                                                    null === f ? s.next = s : (s.next = f.next, f.next = s), c.pending = s;
                                                }
                                            }
                                            l.lanes |= n, null !== (s = l.alternate) && (s.lanes |= n), Eo(l.return, n, t), u.lanes |= n;
                                            break;
                                        }
                                        s = s.next;
                                    }
                                }
                                else if (10 === l.tag)
                                    i = l.type === t.type ? null : l.child;
                                else if (18 === l.tag) {
                                    if (null === (i = l.return))
                                        throw Error(o(341));
                                    i.lanes |= n, null !== (u = i.alternate) && (u.lanes |= n), Eo(i, n, t), i = l.sibling;
                                }
                                else
                                    i = l.child;
                                if (null !== i)
                                    i.return = l;
                                else
                                    for (i = l; null !== i;) {
                                        if (i === t) {
                                            i = null;
                                            break;
                                        }
                                        if (null !== (l = i.sibling)) {
                                            l.return = i.return, i = l;
                                            break;
                                        }
                                        i = i.return;
                                    }
                                l = i;
                            }
                    ki(e, t, a.children, n), t = t.child;
                }
                return t;
            case 9: return a = t.type, r = t.pendingProps.children, Co(t, n), r = r(a = _o(a)), t.flags |= 1, ki(e, t, r, n), t.child;
            case 14: return a = go(r = t.type, t.pendingProps), xi(e, t, r, a = go(r.type, a), n);
            case 15: return Ei(e, t, t.type, t.pendingProps, n);
            case 17: return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : go(r, a), Wi(e, t), t.tag = 1, za(r) ? (e = !0, Fa(t)) : e = !1, Co(t, n), Wo(t, r, a), Qo(t, r, a, n), Ri(null, t, r, !0, e, n);
            case 19: return Vi(e, t, n);
            case 22: return Ci(e, t, n);
        } throw Error(o(156, t.tag)); }; var Ks = "function" == typeof reportError ? reportError : function (e) { console.error(e); }; function Ys(e) { this._internalRoot = e; } function Xs(e) { this._internalRoot = e; } function Js(e) { return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType); } function Gs(e) { return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue)); } function Zs() { } function ec(e, t, n, r, a) { var o = n._reactRootContainer; if (o) {
            var l = o;
            if ("function" == typeof a) {
                var i = a;
                a = function () { var e = Hs(l); i.call(e); };
            }
            Ws(t, l, e, a);
        }
        else
            l = function (e, t, n, r, a) { if (a) {
                if ("function" == typeof r) {
                    var o = r;
                    r = function () { var e = Hs(l); o.call(e); };
                }
                var l = Vs(t, r, e, 0, null, !1, 0, "", Zs);
                return e._reactRootContainer = l, e[ha] = l.current, $r(8 === e.nodeType ? e.parentNode : e), fs(), l;
            } for (; a = e.lastChild;)
                e.removeChild(a); if ("function" == typeof r) {
                var i = r;
                r = function () { var e = Hs(u); i.call(e); };
            } var u = Bs(e, 0, !1, null, 0, !1, 0, "", Zs); return e._reactRootContainer = u, e[ha] = u.current, $r(8 === e.nodeType ? e.parentNode : e), fs((function () { Ws(t, u, n, r); })), u; }(n, t, e, a, r); return Hs(l); } Xs.prototype.render = Ys.prototype.render = function (e) { var t = this._internalRoot; if (null === t)
            throw Error(o(409)); Ws(e, t, null, null); }, Xs.prototype.unmount = Ys.prototype.unmount = function () { var e = this._internalRoot; if (null !== e) {
            this._internalRoot = null;
            var t = e.containerInfo;
            fs((function () { Ws(null, e, null, null); })), t[ha] = null;
        } }, Xs.prototype.unstable_scheduleHydration = function (e) { if (e) {
            var t = Et();
            e = { blockedOn: null, target: e, priority: t };
            for (var n = 0; n < Dt.length && 0 !== t && t < Dt[n].priority; n++)
                ;
            Dt.splice(n, 0, e), 0 === n && Ut(e);
        } }, kt = function (e) { switch (e.tag) {
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = ft(t.pendingLanes);
                    0 !== n && (yt(t, 1 | n), as(t, Je()), 0 == (6 & Ru) && (Vu = Je() + 500, $a()));
                }
                break;
            case 13: fs((function () { var t = To(e, 1); if (null !== t) {
                var n = ts();
                rs(t, e, 1, n);
            } })), qs(e, 1);
        } }, St = function (e) { if (13 === e.tag) {
            var t = To(e, 134217728);
            null !== t && rs(t, e, 134217728, ts()), qs(e, 134217728);
        } }, xt = function (e) { if (13 === e.tag) {
            var t = ns(e), n = To(e, t);
            null !== n && rs(n, e, t, ts()), qs(e, t);
        } }, Et = function () { return bt; }, Ct = function (e, t) { var n = bt; try {
            return bt = e, t();
        }
        finally {
            bt = n;
        } }, Se = function (e, t, n) { switch (t) {
            case "input":
                if (G(e, n), t = n.name, "radio" === n.type && null != t) {
                    for (n = e; n.parentNode;)
                        n = n.parentNode;
                    for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var a = ka(r);
                            if (!a)
                                throw Error(o(90));
                            q(r), G(r, a);
                        }
                    }
                }
                break;
            case "textarea":
                oe(e, n);
                break;
            case "select": null != (t = n.value) && ne(e, !!n.multiple, t, !1);
        } }, Le = cs, Re = fs; var tc = { usingClientEntryPoint: !1, Events: [ba, wa, ka, _e, Pe, cs] }, nc = { findFiberByHostInstance: ya, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, rc = { bundleType: nc.bundleType, version: nc.version, rendererPackageName: nc.rendererPackageName, rendererConfig: nc.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: w.ReactCurrentDispatcher, findHostInstanceByFiber: function (e) { return null === (e = He(e)) ? null : e.stateNode; }, findFiberByHostInstance: nc.findFiberByHostInstance || function () { return null; }, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" }; if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
            var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!ac.isDisabled && ac.supportsFiber)
                try {
                    at = ac.inject(rc), ot = ac;
                }
                catch (ce) { }
        } t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc, t.createPortal = function (e, t) { var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null; if (!Js(t))
            throw Error(o(200)); return function (e, t, n) { var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null; return { $$typeof: S, key: null == r ? null : "" + r, children: e, containerInfo: t, implementation: n }; }(e, t, null, n); }, t.createRoot = function (e, t) { if (!Js(e))
            throw Error(o(299)); var n = !1, r = "", a = Ks; return null != t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (a = t.onRecoverableError)), t = Bs(e, 1, !1, null, 0, n, 0, r, a), e[ha] = t.current, $r(8 === e.nodeType ? e.parentNode : e), new Ys(t); }, t.findDOMNode = function (e) { if (null == e)
            return null; if (1 === e.nodeType)
            return e; var t = e._reactInternals; if (void 0 === t) {
            if ("function" == typeof e.render)
                throw Error(o(188));
            throw e = Object.keys(e).join(","), Error(o(268, e));
        } return null === (e = He(t)) ? null : e.stateNode; }, t.flushSync = function (e) { return fs(e); }, t.hydrate = function (e, t, n) { if (!Gs(t))
            throw Error(o(200)); return ec(null, e, t, !0, n); }, t.hydrateRoot = function (e, t, n) { if (!Js(e))
            throw Error(o(405)); var r = null != n && n.hydratedSources || null, a = !1, l = "", i = Ks; if (null != n && (!0 === n.unstable_strictMode && (a = !0), void 0 !== n.identifierPrefix && (l = n.identifierPrefix), void 0 !== n.onRecoverableError && (i = n.onRecoverableError)), t = Vs(t, null, e, 1, null != n ? n : null, a, 0, l, i), e[ha] = t.current, $r(e), r)
            for (e = 0; e < r.length; e++)
                a = (a = (n = r[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(n, a); return new Xs(t); }, t.render = function (e, t, n) { if (!Gs(t))
            throw Error(o(200)); return ec(null, e, t, !1, n); }, t.unmountComponentAtNode = function (e) { if (!Gs(e))
            throw Error(o(40)); return !!e._reactRootContainer && (fs((function () { ec(null, null, e, !1, (function () { e._reactRootContainer = null, e[ha] = null; })); })), !0); }, t.unstable_batchedUpdates = cs, t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) { if (!Gs(n))
            throw Error(o(200)); if (null == e || void 0 === e._reactInternals)
            throw Error(o(38)); return ec(e, t, n, !1, r); }, t.version = "18.2.0-next-9e3b772b8-20220608"; }, 745: function (e, t, n) { var r = n(935); t.s = r.createRoot, r.hydrateRoot; }, 935: function (e, t, n) { !function e() { if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            }
            catch (e) {
                console.error(e);
            } }(), e.exports = n(448); }, 251: function (e, t, n) { var r = n(294), a = Symbol.for("react.element"), o = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 }; function s(e, t, n) { var r, o = {}, s = null, c = null; for (r in void 0 !== n && (s = "" + n), void 0 !== t.key && (s = "" + t.key), void 0 !== t.ref && (c = t.ref), t)
            l.call(t, r) && !u.hasOwnProperty(r) && (o[r] = t[r]); if (e && e.defaultProps)
            for (r in t = e.defaultProps)
                void 0 === o[r] && (o[r] = t[r]); return { $$typeof: a, type: e, key: s, ref: c, props: o, _owner: i.current }; } t.Fragment = o, t.jsx = s, t.jsxs = s; }, 408: function (e, t) { var n = Symbol.for("react.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), u = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.iterator, h = { isMounted: function () { return !1; }, enqueueForceUpdate: function () { }, enqueueReplaceState: function () { }, enqueueSetState: function () { } }, m = Object.assign, v = {}; function g(e, t, n) { this.props = e, this.context = t, this.refs = v, this.updater = n || h; } function y() { } function b(e, t, n) { this.props = e, this.context = t, this.refs = v, this.updater = n || h; } g.prototype.isReactComponent = {}, g.prototype.setState = function (e, t) { if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables."); this.updater.enqueueSetState(this, e, t, "setState"); }, g.prototype.forceUpdate = function (e) { this.updater.enqueueForceUpdate(this, e, "forceUpdate"); }, y.prototype = g.prototype; var w = b.prototype = new y; w.constructor = b, m(w, g.prototype), w.isPureReactComponent = !0; var k = Array.isArray, S = Object.prototype.hasOwnProperty, x = { current: null }, E = { key: !0, ref: !0, __self: !0, __source: !0 }; function C(e, t, r) { var a, o = {}, l = null, i = null; if (null != t)
            for (a in void 0 !== t.ref && (i = t.ref), void 0 !== t.key && (l = "" + t.key), t)
                S.call(t, a) && !E.hasOwnProperty(a) && (o[a] = t[a]); var u = arguments.length - 2; if (1 === u)
            o.children = r;
        else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++)
                s[c] = arguments[c + 2];
            o.children = s;
        } if (e && e.defaultProps)
            for (a in u = e.defaultProps)
                void 0 === o[a] && (o[a] = u[a]); return { $$typeof: n, type: e, key: l, ref: i, props: o, _owner: x.current }; } function _(e) { return "object" == typeof e && null !== e && e.$$typeof === n; } var P = /\/+/g; function L(e, t) { return "object" == typeof e && null !== e && null != e.key ? function (e) { var t = { "=": "=0", ":": "=2" }; return "$" + e.replace(/[=:]/g, (function (e) { return t[e]; })); }("" + e.key) : t.toString(36); } function R(e, t, a, o, l) { var i = typeof e; "undefined" !== i && "boolean" !== i || (e = null); var u = !1; if (null === e)
            u = !0;
        else
            switch (i) {
                case "string":
                case "number":
                    u = !0;
                    break;
                case "object": switch (e.$$typeof) {
                    case n:
                    case r: u = !0;
                }
            } if (u)
            return l = l(u = e), e = "" === o ? "." + L(u, 0) : o, k(l) ? (a = "", null != e && (a = e.replace(P, "$&/") + "/"), R(l, t, a, "", (function (e) { return e; }))) : null != l && (_(l) && (l = function (e, t) { return { $$typeof: n, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }; }(l, a + (!l.key || u && u.key === l.key ? "" : ("" + l.key).replace(P, "$&/") + "/") + e)), t.push(l)), 1; if (u = 0, o = "" === o ? "." : o + ":", k(e))
            for (var s = 0; s < e.length; s++) {
                var c = o + L(i = e[s], s);
                u += R(i, t, a, c, l);
            }
        else if (c = function (e) { return null === e || "object" != typeof e ? null : "function" == typeof (e = p && e[p] || e["@@iterator"]) ? e : null; }(e), "function" == typeof c)
            for (e = c.call(e), s = 0; !(i = e.next()).done;)
                u += R(i = i.value, t, a, c = o + L(i, s++), l);
        else if ("object" === i)
            throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."); return u; } function T(e, t, n) { if (null == e)
            return e; var r = [], a = 0; return R(e, r, "", "", (function (e) { return t.call(n, e, a++); })), r; } function N(e) { if (-1 === e._status) {
            var t = e._result;
            (t = t()).then((function (t) { 0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t); }), (function (t) { 0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t); })), -1 === e._status && (e._status = 0, e._result = t);
        } if (1 === e._status)
            return e._result.default; throw e._result; } var z = { current: null }, D = { transition: null }, M = { ReactCurrentDispatcher: z, ReactCurrentBatchConfig: D, ReactCurrentOwner: x }; t.Children = { map: T, forEach: function (e, t, n) { T(e, (function () { t.apply(this, arguments); }), n); }, count: function (e) { var t = 0; return T(e, (function () { t++; })), t; }, toArray: function (e) { return T(e, (function (e) { return e; })) || []; }, only: function (e) { if (!_(e))
                throw Error("React.Children.only expected to receive a single React element child."); return e; } }, t.Component = g, t.Fragment = a, t.Profiler = l, t.PureComponent = b, t.StrictMode = o, t.Suspense = c, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M, t.cloneElement = function (e, t, r) { if (null == e)
            throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + "."); var a = m({}, e.props), o = e.key, l = e.ref, i = e._owner; if (null != t) {
            if (void 0 !== t.ref && (l = t.ref, i = x.current), void 0 !== t.key && (o = "" + t.key), e.type && e.type.defaultProps)
                var u = e.type.defaultProps;
            for (s in t)
                S.call(t, s) && !E.hasOwnProperty(s) && (a[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s]);
        } var s = arguments.length - 2; if (1 === s)
            a.children = r;
        else if (1 < s) {
            u = Array(s);
            for (var c = 0; c < s; c++)
                u[c] = arguments[c + 2];
            a.children = u;
        } return { $$typeof: n, type: e.type, key: o, ref: l, props: a, _owner: i }; }, t.createContext = function (e) { return (e = { $$typeof: u, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }).Provider = { $$typeof: i, _context: e }, e.Consumer = e; }, t.createElement = C, t.createFactory = function (e) { var t = C.bind(null, e); return t.type = e, t; }, t.createRef = function () { return { current: null }; }, t.forwardRef = function (e) { return { $$typeof: s, render: e }; }, t.isValidElement = _, t.lazy = function (e) { return { $$typeof: d, _payload: { _status: -1, _result: e }, _init: N }; }, t.memo = function (e, t) { return { $$typeof: f, type: e, compare: void 0 === t ? null : t }; }, t.startTransition = function (e) { var t = D.transition; D.transition = {}; try {
            e();
        }
        finally {
            D.transition = t;
        } }, t.unstable_act = function () { throw Error("act(...) is not supported in production builds of React."); }, t.useCallback = function (e, t) { return z.current.useCallback(e, t); }, t.useContext = function (e) { return z.current.useContext(e); }, t.useDebugValue = function () { }, t.useDeferredValue = function (e) { return z.current.useDeferredValue(e); }, t.useEffect = function (e, t) { return z.current.useEffect(e, t); }, t.useId = function () { return z.current.useId(); }, t.useImperativeHandle = function (e, t, n) { return z.current.useImperativeHandle(e, t, n); }, t.useInsertionEffect = function (e, t) { return z.current.useInsertionEffect(e, t); }, t.useLayoutEffect = function (e, t) { return z.current.useLayoutEffect(e, t); }, t.useMemo = function (e, t) { return z.current.useMemo(e, t); }, t.useReducer = function (e, t, n) { return z.current.useReducer(e, t, n); }, t.useRef = function (e) { return z.current.useRef(e); }, t.useState = function (e) { return z.current.useState(e); }, t.useSyncExternalStore = function (e, t, n) { return z.current.useSyncExternalStore(e, t, n); }, t.useTransition = function () { return z.current.useTransition(); }, t.version = "18.2.0"; }, 294: function (e, t, n) { e.exports = n(408); }, 893: function (e, t, n) { e.exports = n(251); }, 53: function (e, t) { function n(e, t) { var n = e.length; e.push(t); e: for (; 0 < n;) {
            var r = n - 1 >>> 1, a = e[r];
            if (!(0 < o(a, t)))
                break e;
            e[r] = t, e[n] = a, n = r;
        } } function r(e) { return 0 === e.length ? null : e[0]; } function a(e) { if (0 === e.length)
            return null; var t = e[0], n = e.pop(); if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, l = a >>> 1; r < l;) {
                var i = 2 * (r + 1) - 1, u = e[i], s = i + 1, c = e[s];
                if (0 > o(u, n))
                    s < a && 0 > o(c, u) ? (e[r] = c, e[s] = n, r = s) : (e[r] = u, e[i] = n, r = i);
                else {
                    if (!(s < a && 0 > o(c, n)))
                        break e;
                    e[r] = c, e[s] = n, r = s;
                }
            }
        } return t; } function o(e, t) { var n = e.sortIndex - t.sortIndex; return 0 !== n ? n : e.id - t.id; } if ("object" == typeof performance && "function" == typeof performance.now) {
            var l = performance;
            t.unstable_now = function () { return l.now(); };
        }
        else {
            var i = Date, u = i.now();
            t.unstable_now = function () { return i.now() - u; };
        } var s = [], c = [], f = 1, d = null, p = 3, h = !1, m = !1, v = !1, g = "function" == typeof setTimeout ? setTimeout : null, y = "function" == typeof clearTimeout ? clearTimeout : null, b = "undefined" != typeof setImmediate ? setImmediate : null; function w(e) { for (var t = r(c); null !== t;) {
            if (null === t.callback)
                a(c);
            else {
                if (!(t.startTime <= e))
                    break;
                a(c), t.sortIndex = t.expirationTime, n(s, t);
            }
            t = r(c);
        } } function k(e) { if (v = !1, w(e), !m)
            if (null !== r(s))
                m = !0, D(S);
            else {
                var t = r(c);
                null !== t && M(k, t.startTime - e);
            } } function S(e, n) { m = !1, v && (v = !1, y(_), _ = -1), h = !0; var o = p; try {
            for (w(n), d = r(s); null !== d && (!(d.expirationTime > n) || e && !R());) {
                var l = d.callback;
                if ("function" == typeof l) {
                    d.callback = null, p = d.priorityLevel;
                    var i = l(d.expirationTime <= n);
                    n = t.unstable_now(), "function" == typeof i ? d.callback = i : d === r(s) && a(s), w(n);
                }
                else
                    a(s);
                d = r(s);
            }
            if (null !== d)
                var u = !0;
            else {
                var f = r(c);
                null !== f && M(k, f.startTime - n), u = !1;
            }
            return u;
        }
        finally {
            d = null, p = o, h = !1;
        } } "undefined" != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling); var x, E = !1, C = null, _ = -1, P = 5, L = -1; function R() { return !(t.unstable_now() - L < P); } function T() { if (null !== C) {
            var e = t.unstable_now();
            L = e;
            var n = !0;
            try {
                n = C(!0, e);
            }
            finally {
                n ? x() : (E = !1, C = null);
            }
        }
        else
            E = !1; } if ("function" == typeof b)
            x = function () { b(T); };
        else if ("undefined" != typeof MessageChannel) {
            var N = new MessageChannel, z = N.port2;
            N.port1.onmessage = T, x = function () { z.postMessage(null); };
        }
        else
            x = function () { g(T, 0); }; function D(e) { C = e, E || (E = !0, x()); } function M(e, n) { _ = g((function () { e(t.unstable_now()); }), n); } t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function (e) { e.callback = null; }, t.unstable_continueExecution = function () { m || h || (m = !0, D(S)); }, t.unstable_forceFrameRate = function (e) { 0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < e ? Math.floor(1e3 / e) : 5; }, t.unstable_getCurrentPriorityLevel = function () { return p; }, t.unstable_getFirstCallbackNode = function () { return r(s); }, t.unstable_next = function (e) { switch (p) {
            case 1:
            case 2:
            case 3:
                var t = 3;
                break;
            default: t = p;
        } var n = p; p = t; try {
            return e();
        }
        finally {
            p = n;
        } }, t.unstable_pauseExecution = function () { }, t.unstable_requestPaint = function () { }, t.unstable_runWithPriority = function (e, t) { switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5: break;
            default: e = 3;
        } var n = p; p = e; try {
            return t();
        }
        finally {
            p = n;
        } }, t.unstable_scheduleCallback = function (e, a, o) { var l = t.unstable_now(); switch (o = "object" == typeof o && null !== o && "number" == typeof (o = o.delay) && 0 < o ? l + o : l, e) {
            case 1:
                var i = -1;
                break;
            case 2:
                i = 250;
                break;
            case 5:
                i = 1073741823;
                break;
            case 4:
                i = 1e4;
                break;
            default: i = 5e3;
        } return e = { id: f++, callback: a, priorityLevel: e, startTime: o, expirationTime: i = o + i, sortIndex: -1 }, o > l ? (e.sortIndex = o, n(c, e), null === r(s) && e === r(c) && (v ? (y(_), _ = -1) : v = !0, M(k, o - l))) : (e.sortIndex = i, n(s, e), m || h || (m = !0, D(S))), e; }, t.unstable_shouldYield = R, t.unstable_wrapCallback = function (e) { var t = p; return function () { var n = p; p = t; try {
            return e.apply(this, arguments);
        }
        finally {
            p = n;
        } }; }; }, 840: function (e, t, n) { e.exports = n(53); } }, o = {};
    function l(e) { var t = o[e]; if (void 0 !== t)
        return t.exports; var n = o[e] = { exports: {} }; return a[e](n, n.exports, l), n.exports; }
    l.m = a, t = Object.getPrototypeOf ? function (e) { return Object.getPrototypeOf(e); } : function (e) { return e.__proto__; }, l.t = function (n, r) { if (1 & r && (n = this(n)), 8 & r)
        return n; if ("object" == typeof n && n) {
        if (4 & r && n.__esModule)
            return n;
        if (16 & r && "function" == typeof n.then)
            return n;
    } var a = Object.create(null); l.r(a); var o = {}; e = e || [null, t({}), t([]), t(t)]; for (var i = 2 & r && n; "object" == typeof i && !~e.indexOf(i); i = t(i))
        Object.getOwnPropertyNames(i).forEach((function (e) { return o[e] = function () { return n[e]; }; })); return o.default = function () { return n; }, l.d(a, o), a; }, l.d = function (e, t) { for (var n in t)
        l.o(t, n) && !l.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] }); }, l.f = {}, l.e = function (e) { return Promise.all(Object.keys(l.f).reduce((function (t, n) { return (l.f[n](e, t), t); }), [])); }, l.u = function (e) { return e + "." + { 593: "16947afcfb339efb4ab2", 932: "1abd590e6b2cf4d78b55" }[e] + ".js"; }, l.miniCssF = function (e) { }, l.g = function () { if ("object" == typeof globalThis)
        return globalThis; try {
        return this || new Function("return this")();
    }
    catch (e) {
        if ("object" == typeof window)
            return window;
    } }(), l.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, n = {}, r = "e-commerce:", l.l = function (e, t, a, o) { if (n[e])
        n[e].push(t);
    else {
        var i, u;
        if (void 0 !== a)
            for (var s = document.getElementsByTagName("script"), c = 0; c < s.length; c++) {
                var f = s[c];
                if (f.getAttribute("src") == e || f.getAttribute("data-webpack") == r + a) {
                    i = f;
                    break;
                }
            }
        i || (u = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, l.nc && i.setAttribute("nonce", l.nc), i.setAttribute("data-webpack", r + a), i.src = e), n[e] = [t];
        var d = function (t, r) { i.onerror = i.onload = null, clearTimeout(p); var a = n[e]; if (delete n[e], i.parentNode && i.parentNode.removeChild(i), a && a.forEach((function (e) { return e(r); })), t)
            return t(r); }, p = setTimeout(d.bind(null, void 0, { type: "timeout", target: i }), 12e4);
        i.onerror = d.bind(null, i.onerror), i.onload = d.bind(null, i.onload), u && document.head.appendChild(i);
    } }, l.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }); }, (function () { var e; l.g.importScripts && (e = l.g.location + ""); var t = l.g.document; if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var n = t.getElementsByTagName("script");
        if (n.length)
            for (var r = n.length - 1; r > -1 && !e;)
                e = n[r--].src;
    } if (!e)
        throw new Error("Automatic publicPath is not supported in this browser"); e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), l.p = e; })(), (function () { var e = { 179: 0 }; l.f.j = function (t, n) { var r = l.o(e, t) ? e[t] : void 0; if (0 !== r)
        if (r)
            n.push(r[2]);
        else {
            var a = new Promise((function (n, a) { return r = e[t] = [n, a]; }));
            n.push(r[2] = a);
            var o = l.p + l.u(t), i = new Error;
            l.l(o, (function (n) { if (l.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                var a = n && ("load" === n.type ? "missing" : n.type), o = n && n.target && n.target.src;
                i.message = "Loading chunk " + t + " failed.\n(" + a + ": " + o + ")", i.name = "ChunkLoadError", i.type = a, i.request = o, r[1](i);
            } }), "chunk-" + t, t);
        } }; var t = function (t, n) { var r, a, o = n[0], i = n[1], u = n[2], s = 0; if (o.some((function (t) { return 0 !== e[t]; }))) {
        for (r in i)
            l.o(i, r) && (l.m[r] = i[r]);
        u && u(l);
    } for (t && t(n); s < o.length; s++)
        a = o[s], l.o(e, a) && e[a] && e[a][0](), e[a] = 0; }, n = self.webpackChunke_commerce = self.webpackChunke_commerce || []; n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n)); })(), (function () { var e = l(893), t = l(745), n = l(294), r = l.t(n, 2); var a = "hash-base64-8"; var o, i = l(935), u = l.t(i, 2); function s() { return s = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    } return e; }, s.apply(this, arguments); } !function (e) { e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"; }(o || (o = {})); var c = "popstate"; function f(e, t) { if (!1 === e || null == e)
        throw new Error(t); } function d(e, t) { if (!e) {
        "undefined" != typeof console && console.warn(t);
        try {
            throw new Error(t);
        }
        catch (e) { }
    } } function p(e, t) { return { usr: e.state, key: e.key, idx: t }; } function h(e, t, n, r) { return void 0 === n && (n = null), s({ pathname: "string" == typeof e ? e : e.pathname, search: "", hash: "" }, "string" == typeof t ? v(t) : t, { state: n, key: t && t.key || r || Math.random().toString(36).substr(2, 8) }); } function m(e) { var _b = e.pathname, t = _b === void 0 ? "/" : _b, _c = e.search, n = _c === void 0 ? "" : _c, _d = e.hash, r = _d === void 0 ? "" : _d; return n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n), r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r), t; } function v(e) { var t = {}; if (e) {
        var n_1 = e.indexOf("#");
        n_1 >= 0 && (t.hash = e.substr(n_1), e = e.substr(0, n_1));
        var r_1 = e.indexOf("?");
        r_1 >= 0 && (t.search = e.substr(r_1), e = e.substr(0, r_1)), e && (t.pathname = e);
    } return t; } var g; !function (e) { e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"; }(g || (g = {})); var y = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]); function b(e, t, n, r) { return void 0 === n && (n = []), void 0 === r && (r = {}), e.map((function (e, a) { var o = __spreadArray(__spreadArray([], n, true), [a], false), l = "string" == typeof e.id ? e.id : o.join("-"); if (f(!0 !== e.index || !e.children, "Cannot specify children on an index route"), f(!r[l], 'Found a route id collision on id "' + l + "\".  Route id's must be globally unique within Data Router usages"), function (e) { return !0 === e.index; }(e)) {
        var n_2 = s({}, e, t(e), { id: l });
        return r[l] = n_2, n_2;
    } {
        var n_3 = s({}, e, t(e), { id: l, children: void 0 });
        return r[l] = n_3, e.children && (n_3.children = b(e.children, t, o, r)), n_3;
    } })); } function w(e, t, n) { void 0 === n && (n = "/"); var r = M(("string" == typeof t ? v(t) : t).pathname || "/", n); if (null == r)
        return null; var a = k(e); !function (e) { e.sort((function (e, t) { return e.score !== t.score ? t.score - e.score : function (e, t) { return e.length === t.length && e.slice(0, -1).every((function (e, n) { return e === t[n]; })) ? e[e.length - 1] - t[t.length - 1] : 0; }(e.routesMeta.map((function (e) { return e.childrenIndex; })), t.routesMeta.map((function (e) { return e.childrenIndex; }))); })); }(a); var o = null; for (var e_1 = 0; null == o && e_1 < a.length; ++e_1)
        o = N(a[e_1], D(r)); return o; } function k(e, t, n, r) { void 0 === t && (t = []), void 0 === n && (n = []), void 0 === r && (r = ""); var a = function (e, a, o) { var l = { relativePath: void 0 === o ? e.path || "" : o, caseSensitive: !0 === e.caseSensitive, childrenIndex: a, route: e }; l.relativePath.startsWith("/") && (f(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path "' + r + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), l.relativePath = l.relativePath.slice(r.length)); var i = I([r, l.relativePath]), u = n.concat(l); e.children && e.children.length > 0 && (f(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + i + '".'), k(e.children, t, u, i)), (null != e.path || e.index) && t.push({ path: i, score: T(i, e.index), routesMeta: u }); }; return e.forEach((function (e, t) { var n; if ("" !== e.path && null != (n = e.path) && n.includes("?"))
        for (var _b = 0, _c = S(e.path); _b < _c.length; _b++) {
            var n_4 = _c[_b];
            a(e, t, n_4);
        }
    else
        a(e, t); })), t; } function S(e) { var t = e.split("/"); if (0 === t.length)
        return []; var n = t[0], r = t.slice(1), a = n.endsWith("?"), o = n.replace(/\?$/, ""); if (0 === r.length)
        return a ? [o, ""] : [o]; var l = S(r.join("/")), i = []; return i.push.apply(i, l.map((function (e) { return "" === e ? o : [o, e].join("/"); }))), a && i.push.apply(i, l), i.map((function (t) { return e.startsWith("/") && "" === t ? "/" : t; })); } var x = /^:\w+$/, E = 3, C = 2, _ = 1, P = 10, L = -2, R = function (e) { return "*" === e; }; function T(e, t) { var n = e.split("/"), r = n.length; return n.some(R) && (r += L), t && (r += C), n.filter((function (e) { return !R(e); })).reduce((function (e, t) { return e + (x.test(t) ? E : "" === t ? _ : P); }), r); } function N(e, t) { var n = e.routesMeta, r = {}, a = "/", o = []; for (var e_2 = 0; e_2 < n.length; ++e_2) {
        var l_1 = n[e_2], i_1 = e_2 === n.length - 1, u_1 = "/" === a ? t : t.slice(a.length) || "/", s_1 = z({ path: l_1.relativePath, caseSensitive: l_1.caseSensitive, end: i_1 }, u_1);
        if (!s_1)
            return null;
        Object.assign(r, s_1.params);
        var c_1 = l_1.route;
        o.push({ params: r, pathname: I([a, s_1.pathname]), pathnameBase: A(I([a, s_1.pathnameBase])), route: c_1 }), "/" !== s_1.pathnameBase && (a = I([a, s_1.pathnameBase]));
    } return o; } function z(e, t) { "string" == typeof e && (e = { path: e, caseSensitive: !1, end: !0 }); var _b = function (e, t, n) { void 0 === t && (t = !1), void 0 === n && (n = !0), d("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".'); var r = [], a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:(\w+)(\?)?/g, (function (e, t, n) { return (r.push({ paramName: t, isOptional: null != n }), n ? "/?([^\\/]+)?" : "/([^\\/]+)"); })); return e.endsWith("*") ? (r.push({ paramName: "*" }), a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? a += "\\/*$" : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))"), [new RegExp(a, t ? void 0 : "i"), r]; }(e.path, e.caseSensitive, e.end), n = _b[0], r = _b[1], a = t.match(n); if (!a)
        return null; var o = a[0], l = o.replace(/(.)\/+$/, "$1"), i = a.slice(1); return { params: r.reduce((function (e, t, n) { var r = t.paramName, a = t.isOptional; if ("*" === r) {
            var e_3 = i[n] || "";
            l = o.slice(0, o.length - e_3.length).replace(/(.)\/+$/, "$1");
        } var u = i[n]; return e[r] = a && !u ? void 0 : function (e, t) { try {
            return decodeURIComponent(e);
        }
        catch (n) {
            return d(!1, 'The value for the URL param "' + t + '" will not be decoded because the string "' + e + '" is a malformed URL segment. This is probably due to a bad percent encoding (' + n + ")."), e;
        } }(u || "", r), e; }), {}), pathname: o, pathnameBase: l, pattern: e }; } function D(e) { try {
        return decodeURI(e);
    }
    catch (t) {
        return d(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e;
    } } function M(e, t) { if ("/" === t)
        return e; if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null; var n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n); return r && "/" !== r ? null : e.slice(n) || "/"; } function O(e, t, n, r) { return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the `to." + n + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'; } function F(e) { return e.filter((function (e, t) { return 0 === t || e.route.path && e.route.path.length > 0; })); } function U(e) { return F(e).map((function (t, n) { return n === e.length - 1 ? t.pathname : t.pathnameBase; })); } function j(e, t, n, r) { var a; void 0 === r && (r = !1), "string" == typeof e ? a = v(e) : (a = s({}, e), f(!a.pathname || !a.pathname.includes("?"), O("?", "pathname", "search", a)), f(!a.pathname || !a.pathname.includes("#"), O("#", "pathname", "hash", a)), f(!a.search || !a.search.includes("#"), O("#", "search", "hash", a))); var o, l = "" === e || "" === a.pathname, i = l ? "/" : a.pathname; if (null == i)
        o = n;
    else if (r) {
        var e_4 = t[t.length - 1].replace(/^\//, "").split("/");
        if (i.startsWith("..")) {
            var t_1 = i.split("/");
            for (; ".." === t_1[0];)
                t_1.shift(), e_4.pop();
            a.pathname = t_1.join("/");
        }
        o = "/" + e_4.join("/");
    }
    else {
        var e_5 = t.length - 1;
        if (i.startsWith("..")) {
            var t_2 = i.split("/");
            for (; ".." === t_2[0];)
                t_2.shift(), e_5 -= 1;
            a.pathname = t_2.join("/");
        }
        o = e_5 >= 0 ? t[e_5] : "/";
    } var u = function (e, t) { void 0 === t && (t = "/"); var _b = "string" == typeof e ? v(e) : e, n = _b.pathname, _c = _b.search, r = _c === void 0 ? "" : _c, _d = _b.hash, a = _d === void 0 ? "" : _d, o = n ? n.startsWith("/") ? n : function (e, t) { var n = t.replace(/\/+$/, "").split("/"); return e.split("/").forEach((function (e) { ".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e); })), n.length > 1 ? n.join("/") : "/"; }(n, t) : t; return { pathname: o, search: B(r), hash: $(a) }; }(a, o), c = i && "/" !== i && i.endsWith("/"), d = (l || "." === i) && n.endsWith("/"); return u.pathname.endsWith("/") || !c && !d || (u.pathname += "/"), u; } var I = function (e) { return e.join("/").replace(/\/\/+/g, "/"); }, A = function (e) { return e.replace(/\/+$/, "").replace(/^\/*/, "/"); }, B = function (e) { return e && "?" !== e ? e.startsWith("?") ? e : "?" + e : ""; }, $ = function (e) { return e && "#" !== e ? e.startsWith("#") ? e : "#" + e : ""; }; Error;
        var V = /** @class */ (function () {
            function V(e, t, n, r) {
                void 0 === r && (r = !1), this.status = e, this.statusText = t || "", this.internal = r, n instanceof Error ? (this.data = n.toString(), this.error = n) : this.data = n;
            }
            return V;
        }()); function W(e) { return null != e && "number" == typeof e.status && "string" == typeof e.statusText && "boolean" == typeof e.internal && "data" in e; } var H = ["post", "put", "patch", "delete"], Q = new Set(H), q = __spreadArray(["get"], H, true), K = new Set(q), Y = new Set([301, 302, 303, 307, 308]), X = new Set([307, 308]), J = { state: "idle", location: void 0, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 }, G = { state: "idle", data: void 0, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 }, Z = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 }, ee = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, te = function (e) { return ({ hasErrorBoundary: Boolean(e.hasErrorBoundary) }); }, ne = "remix-router-transitions"; function re(e, t, n, r, a, o, l) { var i, u; if (o) {
        i = [];
        for (var _b = 0, t_3 = t; _b < t_3.length; _b++) {
            var e_6 = t_3[_b];
            if (i.push(e_6), e_6.route.id === o) {
                u = e_6;
                break;
            }
        }
    }
    else
        i = t, u = t[t.length - 1]; var s = j(a || ".", U(i), M(e.pathname, n) || e.pathname, "path" === l); return null == a && (s.search = e.search, s.hash = e.hash), null != a && "" !== a && "." !== a || !u || !u.route.index || _e(s.search) || (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"), r && "/" !== n && (s.pathname = "/" === s.pathname ? n : I([n, s.pathname])), m(s); } function ae(e, t, n, r) { if (!r || !function (e) { return null != e && ("formData" in e && null != e.formData || "body" in e && void 0 !== e.body); }(r))
        return { path: n }; if (r.formMethod && (a = r.formMethod, !K.has(a.toLowerCase())))
        return { path: n, error: ge(405, { method: r.formMethod }) }; var a; var o, l, i = function () { return ({ path: n, error: ge(400, { type: "invalid-body" }) }); }, u = r.formMethod || "get", s = e ? u.toUpperCase() : u.toLowerCase(), c = be(n); if (void 0 !== r.body) {
        if ("text/plain" === r.formEncType) {
            if (!xe(s))
                return i();
            var e_7 = "string" == typeof r.body ? r.body : r.body instanceof FormData || r.body instanceof URLSearchParams ? Array.from(r.body.entries()).reduce((function (e, t) { var n = t[0], r = t[1]; return "" + e + n + "=" + r + "\n"; }), "") : String(r.body);
            return { path: n, submission: { formMethod: s, formAction: c, formEncType: r.formEncType, formData: void 0, json: void 0, text: e_7 } };
        }
        if ("application/json" === r.formEncType) {
            if (!xe(s))
                return i();
            try {
                var e_8 = "string" == typeof r.body ? JSON.parse(r.body) : r.body;
                return { path: n, submission: { formMethod: s, formAction: c, formEncType: r.formEncType, formData: void 0, json: e_8, text: void 0 } };
            }
            catch (e) {
                return i();
            }
        }
    } if (f("function" == typeof FormData, "FormData is not available in this environment"), r.formData)
        o = fe(r.formData), l = r.formData;
    else if (r.body instanceof FormData)
        o = fe(r.body), l = r.body;
    else if (r.body instanceof URLSearchParams)
        o = r.body, l = de(o);
    else if (null == r.body)
        o = new URLSearchParams, l = new FormData;
    else
        try {
            o = new URLSearchParams(r.body), l = de(o);
        }
        catch (e) {
            return i();
        } var d = { formMethod: s, formAction: c, formEncType: r && r.formEncType || "application/x-www-form-urlencoded", formData: l, json: void 0, text: void 0 }; if (xe(d.formMethod))
        return { path: n, submission: d }; var p = v(n); return t && p.search && _e(p.search) && o.append("index", ""), p.search = "?" + o, { path: m(p), submission: d }; } function oe(e, t, n, r, a, o, l, i, u, c, f, d, p, h, m) { var v = m ? Object.values(m)[0] : h ? Object.values(h)[0] : void 0, g = e.createURL(t.location), y = e.createURL(a), b = m ? Object.keys(m)[0] : void 0, k = function (e, t) { var n = e; if (t) {
        var r_2 = e.findIndex((function (e) { return e.route.id === t; }));
        r_2 >= 0 && (n = e.slice(0, r_2));
    } return n; }(n, b).filter((function (e, n) { if (e.route.lazy)
        return !0; if (null == e.route.loader)
        return !1; if (function (e, t, n) { var r = !t || n.route.id !== t.route.id, a = void 0 === e[n.route.id]; return r || a; }(t.loaderData, t.matches[n], e) || l.some((function (t) { return t === e.route.id; })))
        return !0; var a = t.matches[n], i = e; return ie(e, s({ currentUrl: g, currentParams: a.params, nextUrl: y, nextParams: i.params }, r, { actionResult: v, defaultShouldRevalidate: o || g.pathname + g.search === y.pathname + y.search || g.search !== y.search || le(a, i) })); })), S = []; return c.forEach((function (e, a) { if (!n.some((function (t) { return t.route.id === e.routeId; })) || u.has(a))
        return; var l = w(d, e.path, p); if (!l)
        return void S.push({ key: a, routeId: e.routeId, path: e.path, matches: null, match: null, controller: null }); var c = t.fetchers.get(a), h = Pe(l, e.path), m = !1; m = !f.has(a) && (!!i.includes(a) || (c && "idle" !== c.state && void 0 === c.data ? o : ie(h, s({ currentUrl: g, currentParams: t.matches[t.matches.length - 1].params, nextUrl: y, nextParams: n[n.length - 1].params }, r, { actionResult: v, defaultShouldRevalidate: o })))), m && S.push({ key: a, routeId: e.routeId, path: e.path, matches: l, match: h, controller: new AbortController }); })), [k, S]; } function le(e, t) { var n = e.route.path; return e.pathname !== t.pathname || null != n && n.endsWith("*") && e.params["*"] !== t.params["*"]; } function ie(e, t) { if (e.route.shouldRevalidate) {
        var n_5 = e.route.shouldRevalidate(t);
        if ("boolean" == typeof n_5)
            return n_5;
    } return t.defaultShouldRevalidate; } function ue(e, t, n) {
        return __awaiter(this, void 0, void 0, function () { var r, a, o, e_9, t_4; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!e.lazy)
                        return [2 /*return*/];
                    return [4 /*yield*/, e.lazy()];
                case 1:
                    r = _b.sent();
                    if (!e.lazy)
                        return [2 /*return*/];
                    a = n[e.id];
                    f(a, "No route found in manifest");
                    o = {};
                    for (e_9 in r) {
                        t_4 = void 0 !== a[e_9] && "hasErrorBoundary" !== e_9;
                        d(!t_4, 'Route "' + a.id + '" has a static property "' + e_9 + '" defined but its lazy function is also returning a value for this property. The lazy route property "' + e_9 + '" will be ignored.'), t_4 || y.has(e_9) || (o[e_9] = r[e_9]);
                    }
                    Object.assign(a, o), Object.assign(a, s({}, t(a), { lazy: void 0 }));
                    return [2 /*return*/];
            }
        }); });
    } function se(e, t, n, r, a, o, l, i) {
        return __awaiter(this, void 0, void 0, function () { var u, s, c, d, r_3, e_11, t_5, e_12, r_4, e_13, e_10, e_14, a_1, e_15, n_6, r_5, a_2, o_1, _b, p, h, m; return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    void 0 === i && (i = {});
                    d = function (e) { var r, a = new Promise((function (e, t) { return r = t; })); return c = function () { return r(); }, t.signal.addEventListener("abort", c), Promise.race([e({ request: t, params: n.params, context: i.requestContext }), a]); };
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 10, 11, 12]);
                    r_3 = n.route[e];
                    if (!n.route.lazy) return [3 /*break*/, 7];
                    if (!r_3) return [3 /*break*/, 3];
                    return [4 /*yield*/, Promise.all([d(r_3).catch((function (t) { e_11 = t; })), ue(n.route, o, a)])];
                case 2:
                    t_5 = _c.sent();
                    if (e_11)
                        throw e_11;
                    s = t_5[0];
                    return [3 /*break*/, 6];
                case 3: return [4 /*yield*/, ue(n.route, o, a)];
                case 4:
                    if (_c.sent(), r_3 = n.route[e], !r_3) {
                        if ("action" === e) {
                            e_12 = new URL(t.url), r_4 = e_12.pathname + e_12.search;
                            throw ge(405, { method: t.method, pathname: r_4, routeId: n.route.id });
                        }
                        return [2 /*return*/, { type: g.data, data: void 0 }];
                    }
                    return [4 /*yield*/, d(r_3)];
                case 5:
                    s = _c.sent();
                    _c.label = 6;
                case 6: return [3 /*break*/, 9];
                case 7:
                    if (!r_3) {
                        e_13 = new URL(t.url);
                        throw ge(404, { pathname: e_13.pathname + e_13.search });
                    }
                    return [4 /*yield*/, d(r_3)];
                case 8:
                    s = _c.sent();
                    _c.label = 9;
                case 9:
                    f(void 0 !== s, "You defined " + ("action" === e ? "an action" : "a loader") + ' for route "' + n.route.id + "\" but didn't return anything from your `" + e + "` function. Please return a value or `null`.");
                    return [3 /*break*/, 12];
                case 10:
                    e_10 = _c.sent();
                    u = g.error, s = e_10;
                    return [3 /*break*/, 12];
                case 11:
                    c && t.signal.removeEventListener("abort", c);
                    return [7 /*endfinally*/];
                case 12:
                    if (!(null != (p = s) && "number" == typeof p.status && "string" == typeof p.statusText && "object" == typeof p.headers && void 0 !== p.body)) return [3 /*break*/, 17];
                    a_1 = s.status;
                    if (Y.has(a_1)) {
                        e_15 = s.headers.get("Location");
                        if (f(e_15, "Redirects returned/thrown from loaders/actions must have a Location header"), ee.test(e_15)) {
                            if (!i.isStaticRequest) {
                                n_6 = new URL(t.url), r_5 = e_15.startsWith("//") ? new URL(n_6.protocol + e_15) : new URL(e_15), a_2 = null != M(r_5.pathname, l);
                                r_5.origin === n_6.origin && a_2 && (e_15 = r_5.pathname + r_5.search + r_5.hash);
                            }
                        }
                        else
                            e_15 = re(new URL(t.url), r.slice(0, r.indexOf(n) + 1), l, !0, e_15);
                        if (i.isStaticRequest)
                            throw s.headers.set("Location", e_15), s;
                        return [2 /*return*/, { type: g.redirect, status: a_1, location: e_15, revalidate: null !== s.headers.get("X-Remix-Revalidate"), reloadDocument: null !== s.headers.get("X-Remix-Reload-Document") }];
                    }
                    if (i.isRouteRequest)
                        throw { type: u === g.error ? g.error : g.data, response: s };
                    o_1 = s.headers.get("Content-Type");
                    if (!(o_1 && /\bapplication\/json\b/.test(o_1))) return [3 /*break*/, 14];
                    return [4 /*yield*/, s.json()];
                case 13:
                    _b = _c.sent();
                    return [3 /*break*/, 16];
                case 14: return [4 /*yield*/, s.text()];
                case 15:
                    _b = _c.sent();
                    _c.label = 16;
                case 16: return [2 /*return*/, (e_14 = _b, u === g.error ? { type: u, error: new V(a_1, s.statusText, e_14), headers: s.headers } : { type: g.data, data: e_14, statusCode: s.status, headers: s.headers })];
                case 17: return [2 /*return*/, u === g.error ? { type: u, error: s } : function (e) { var t = e; return t && "object" == typeof t && "object" == typeof t.data && "function" == typeof t.subscribe && "function" == typeof t.cancel && "function" == typeof t.resolveData; }(s) ? { type: g.deferred, deferredData: s, statusCode: null == (h = s.init) ? void 0 : h.status, headers: (null == (m = s.init) ? void 0 : m.headers) && new Headers(s.init.headers) } : { type: g.data, data: s }];
            }
        }); });
    } function ce(e, t, n, r) { var a = e.createURL(be(t)).toString(), o = { signal: n }; if (r && xe(r.formMethod)) {
        var e_16 = r.formMethod, t_6 = r.formEncType;
        o.method = e_16.toUpperCase(), "application/json" === t_6 ? (o.headers = new Headers({ "Content-Type": t_6 }), o.body = JSON.stringify(r.json)) : "text/plain" === t_6 ? o.body = r.text : "application/x-www-form-urlencoded" === t_6 && r.formData ? o.body = fe(r.formData) : o.body = r.formData;
    } return new Request(a, o); } function fe(e) { var t = new URLSearchParams; for (var _b = 0, _c = e.entries(); _b < _c.length; _b++) {
        var _d = _c[_b], n_7 = _d[0], r_6 = _d[1];
        t.append(n_7, "string" == typeof r_6 ? r_6 : r_6.name);
    } return t; } function de(e) { var t = new FormData; for (var _b = 0, _c = e.entries(); _b < _c.length; _b++) {
        var _d = _c[_b], n_8 = _d[0], r_7 = _d[1];
        t.append(n_8, r_7);
    } return t; } function pe(e, t, n, r, a, o, l, i) {
        var _b;
        var _c = function (e, t, n, r, a) { var o, l = {}, i = null, u = !1, s = {}; return n.forEach((function (n, c) { var d = t[c].route.id; if (f(!Se(n), "Cannot handle redirect results in processLoaderData"), ke(n)) {
            var t_7 = me(e, d), a_3 = n.error;
            r && (a_3 = Object.values(r)[0], r = void 0), i = i || {}, null == i[t_7.route.id] && (i[t_7.route.id] = a_3), l[d] = void 0, u || (u = !0, o = W(n.error) ? n.error.status : 500), n.headers && (s[d] = n.headers);
        }
        else
            we(n) ? (a.set(d, n.deferredData), l[d] = n.deferredData.data) : l[d] = n.data, null == n.statusCode || 200 === n.statusCode || u || (o = n.statusCode), n.headers && (s[d] = n.headers); })), r && (i = r, l[Object.keys(r)[0]] = void 0), { loaderData: l, errors: i, statusCode: o || 200, loaderHeaders: s }; }(t, n, r, a, i), u = _c.loaderData, c = _c.errors;
        for (var t_8 = 0; t_8 < o.length; t_8++) {
            var _d = o[t_8], n_9 = _d.key, r_8 = _d.match, a_4 = _d.controller;
            f(void 0 !== l && void 0 !== l[t_8], "Did not find corresponding fetcher result");
            var i_2 = l[t_8];
            if (!a_4 || !a_4.signal.aborted)
                if (ke(i_2)) {
                    var t_9 = me(e.matches, null == r_8 ? void 0 : r_8.route.id);
                    c && c[t_9.route.id] || (c = s({}, c, (_b = {}, _b[t_9.route.id] = i_2.error, _b))), e.fetchers.delete(n_9);
                }
                else if (Se(i_2))
                    f(!1, "Unhandled fetcher revalidation redirect");
                else if (we(i_2))
                    f(!1, "Unhandled fetcher deferred data");
                else {
                    var t_10 = Ne(i_2.data);
                    e.fetchers.set(n_9, t_10);
                }
        }
        return { loaderData: u, errors: c };
    } function he(e, t, n, r) { var a = s({}, t); for (var _b = 0, n_10 = n; _b < n_10.length; _b++) {
        var o_2 = n_10[_b];
        var n_11 = o_2.route.id;
        if (t.hasOwnProperty(n_11) ? void 0 !== t[n_11] && (a[n_11] = t[n_11]) : void 0 !== e[n_11] && o_2.route.loader && (a[n_11] = e[n_11]), r && r.hasOwnProperty(n_11))
            break;
    } return a; } function me(e, t) { return (t ? e.slice(0, e.findIndex((function (e) { return e.route.id === t; })) + 1) : __spreadArray([], e, true)).reverse().find((function (e) { return !0 === e.route.hasErrorBoundary; })) || e[0]; } function ve(e) { var t = 1 === e.length ? e[0] : e.find((function (e) { return e.index || !e.path || "/" === e.path; })) || { id: "__shim-error-route__" }; return { matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }], route: t }; } function ge(e, t) { var _b = void 0 === t ? {} : t, n = _b.pathname, r = _b.routeId, a = _b.method, o = _b.type, l = "Unknown Server Error", i = "Unknown @remix-run/router error"; return 400 === e ? (l = "Bad Request", a && n && r ? i = "You made a " + a + ' request to "' + n + '" but did not provide a `loader` for route "' + r + '", so there is no way to handle the request.' : "defer-action" === o ? i = "defer() is not supported in actions" : "invalid-body" === o && (i = "Unable to encode submission body")) : 403 === e ? (l = "Forbidden", i = 'Route "' + r + '" does not match URL "' + n + '"') : 404 === e ? (l = "Not Found", i = 'No route matches URL "' + n + '"') : 405 === e && (l = "Method Not Allowed", a && n && r ? i = "You made a " + a.toUpperCase() + ' request to "' + n + '" but did not provide an `action` for route "' + r + '", so there is no way to handle the request.' : a && (i = 'Invalid request method "' + a.toUpperCase() + '"')), new V(e || 500, l, new Error(i), !0); } function ye(e) { for (var t_11 = e.length - 1; t_11 >= 0; t_11--) {
        var n_12 = e[t_11];
        if (Se(n_12))
            return { result: n_12, idx: t_11 };
    } } function be(e) { return m(s({}, "string" == typeof e ? v(e) : e, { hash: "" })); } function we(e) { return e.type === g.deferred; } function ke(e) { return e.type === g.error; } function Se(e) { return (e && e.type) === g.redirect; } function xe(e) { return Q.has(e.toLowerCase()); } function Ee(e, t, n, r, a, o) {
        return __awaiter(this, void 0, void 0, function () { var _loop_1, l_2; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _loop_1 = function (l_2) {
                        var i_3, u_2, s_2, c_2, e_17;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    i_3 = n[l_2], u_2 = t[l_2];
                                    if (!u_2)
                                        return [2 /*return*/, "continue"];
                                    s_2 = e.find((function (e) { return e.route.id === u_2.route.id; })), c_2 = null != s_2 && !le(s_2, u_2) && void 0 !== (o && o[u_2.route.id]);
                                    if (!(we(i_3) && (a || c_2))) return [3 /*break*/, 2];
                                    e_17 = r[l_2];
                                    f(e_17, "Expected an AbortSignal for revalidating fetcher deferred result");
                                    return [4 /*yield*/, Ce(i_3, e_17, a).then((function (e) { e && (n[l_2] = e || n[l_2]); }))];
                                case 1:
                                    _c.sent();
                                    _c.label = 2;
                                case 2: return [2 /*return*/];
                            }
                        });
                    };
                    l_2 = 0;
                    _b.label = 1;
                case 1:
                    if (!(l_2 < n.length)) return [3 /*break*/, 4];
                    return [5 /*yield**/, _loop_1(l_2)];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3:
                    l_2++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        }); });
    } function Ce(e, t, n) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    void 0 === n && (n = !1);
                    return [4 /*yield*/, e.deferredData.resolveData(t)];
                case 1:
                    if (!(_b.sent())) {
                        if (n)
                            try {
                                return [2 /*return*/, { type: g.data, data: e.deferredData.unwrappedData }];
                            }
                            catch (e) {
                                return [2 /*return*/, { type: g.error, error: e }];
                            }
                        return [2 /*return*/, { type: g.data, data: e.deferredData.data }];
                    }
                    return [2 /*return*/];
            }
        }); });
    } function _e(e) { return new URLSearchParams(e).getAll("index").some((function (e) { return "" === e; })); } function Pe(e, t) { var n = "string" == typeof t ? v(t).search : t.search; if (e[e.length - 1].route.index && _e(n || ""))
        return e[e.length - 1]; var r = F(e); return r[r.length - 1]; } function Le(e) { var t = e.formMethod, n = e.formAction, r = e.formEncType, a = e.text, o = e.formData, l = e.json; if (t && n && r)
        return null != a ? { formMethod: t, formAction: n, formEncType: r, formData: void 0, json: void 0, text: a } : null != o ? { formMethod: t, formAction: n, formEncType: r, formData: o, json: void 0, text: void 0 } : void 0 !== l ? { formMethod: t, formAction: n, formEncType: r, formData: void 0, json: l, text: void 0 } : void 0; } function Re(e, t) { return t ? { state: "loading", location: e, formMethod: t.formMethod, formAction: t.formAction, formEncType: t.formEncType, formData: t.formData, json: t.json, text: t.text } : { state: "loading", location: e, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 }; } function Te(e, t) { return e ? { state: "loading", formMethod: e.formMethod, formAction: e.formAction, formEncType: e.formEncType, formData: e.formData, json: e.json, text: e.text, data: t } : { state: "loading", formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0, data: t }; } function Ne(e) { return { state: "idle", formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0, data: e }; } function ze() { return ze = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    } return e; }, ze.apply(this, arguments); } Symbol("deferred"); var De = n.createContext(null), Me = n.createContext(null), Oe = n.createContext(null), Fe = n.createContext(null), Ue = n.createContext({ outlet: null, matches: [], isDataRoute: !1 }), je = n.createContext(null); function Ie() { return null != n.useContext(Fe); } function Ae() { return Ie() || f(!1), n.useContext(Fe).location; } function Be(e) { n.useContext(Oe).static || n.useLayoutEffect(e); } function $e() { var e = n.useContext(Ue).isDataRoute; return e ? function () { var e = function (e) { var t = n.useContext(De); return t || f(!1), t; }(Xe.UseNavigateStable).router, t = Ge(Je.UseNavigateStable), r = n.useRef(!1); Be((function () { r.current = !0; })); var a = n.useCallback((function (n, a) { void 0 === a && (a = {}), r.current && ("number" == typeof n ? e.navigate(n) : e.navigate(n, ze({ fromRouteId: t }, a))); }), [e, t]); return a; }() : function () { Ie() || f(!1); var e = n.useContext(De), _b = n.useContext(Oe), t = _b.basename, r = _b.navigator, a = n.useContext(Ue).matches, o = Ae().pathname, l = JSON.stringify(U(a)), i = n.useRef(!1); return Be((function () { i.current = !0; })), n.useCallback((function (n, a) { if (void 0 === a && (a = {}), !i.current)
        return; if ("number" == typeof n)
        return void r.go(n); var u = j(n, JSON.parse(l), o, "path" === a.relative); null == e && "/" !== t && (u.pathname = "/" === u.pathname ? t : I([t, u.pathname])), (a.replace ? r.replace : r.push)(u, a.state, a); }), [t, r, l, o, e]); }(); } var Ve = n.createContext(null); function We(e, t) { var r = (void 0 === t ? {} : t).relative, a = n.useContext(Ue).matches, o = Ae().pathname, l = JSON.stringify(U(a)); return n.useMemo((function () { return j(e, JSON.parse(l), o, "path" === r); }), [e, l, o, r]); } function He(e, t, r) { Ie() || f(!1); var a = n.useContext(Oe).navigator, l = n.useContext(Ue).matches, i = l[l.length - 1], u = i ? i.params : {}, s = (i && i.pathname, i ? i.pathnameBase : "/"); i && i.route; var c, d = Ae(); if (t) {
        var p;
        var e_18 = "string" == typeof t ? v(t) : t;
        "/" === s || (null == (p = e_18.pathname) ? void 0 : p.startsWith(s)) || f(!1), c = e_18;
    }
    else
        c = d; var h = c.pathname || "/", m = w(e, { pathname: "/" === s ? h : h.slice(s.length) || "/" }), g = function (e, t, r) { var a; if (void 0 === t && (t = []), void 0 === r && (r = null), null == e) {
        var o;
        if (null == (o = r) || !o.errors)
            return null;
        e = r.matches;
    } var l = e, i = null == (a = r) ? void 0 : a.errors; if (null != i) {
        var e_19 = l.findIndex((function (e) { return e.route.id && (null == i ? void 0 : i[e.route.id]); }));
        e_19 >= 0 || f(!1), l = l.slice(0, Math.min(l.length, e_19 + 1));
    } return l.reduceRight((function (e, a, o) { var u = a.route.id ? null == i ? void 0 : i[a.route.id] : null, s = null; r && (s = a.route.errorElement || qe); var c = t.concat(l.slice(0, o + 1)), f = function () { var t; return t = u ? s : a.route.Component ? n.createElement(a.route.Component, null) : a.route.element ? a.route.element : e, n.createElement(Ye, { match: a, routeContext: { outlet: e, matches: c, isDataRoute: null != r }, children: t }); }; return r && (a.route.ErrorBoundary || a.route.errorElement || 0 === o) ? n.createElement(Ke, { location: r.location, revalidation: r.revalidation, component: s, error: u, children: f(), routeContext: { outlet: null, matches: c, isDataRoute: !0 } }) : f(); }), null); }(m && m.map((function (e) { return Object.assign({}, e, { params: Object.assign({}, u, e.params), pathname: I([s, a.encodeLocation ? a.encodeLocation(e.pathname).pathname : e.pathname]), pathnameBase: "/" === e.pathnameBase ? s : I([s, a.encodeLocation ? a.encodeLocation(e.pathnameBase).pathname : e.pathnameBase]) }); })), l, r); return t && g ? n.createElement(Fe.Provider, { value: { location: ze({ pathname: "/", search: "", hash: "", state: null, key: "default" }, c), navigationType: o.Pop } }, g) : g; } function Qe() { var e = function () { var e; var t = n.useContext(je), r = function (e) { var t = n.useContext(Me); return t || f(!1), t; }(Je.UseRouteError), a = Ge(Je.UseRouteError); return t || (null == (e = r.errors) ? void 0 : e[a]); }(), t = W(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), r = e instanceof Error ? e.stack : null, a = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" }; return n.createElement(n.Fragment, null, n.createElement("h2", null, "Unexpected Application Error!"), n.createElement("h3", { style: { fontStyle: "italic" } }, t), r ? n.createElement("pre", { style: a }, r) : null, null); } var qe = n.createElement(Qe, null);
        var Ke = /** @class */ (function (_super) {
            __extends(Ke, _super);
            function Ke(e) {
                var _this = this;
                _this = _super.call(this, e) || this, _this.state = { location: e.location, revalidation: e.revalidation, error: e.error };
                return _this;
            }
            Ke.getDerivedStateFromError = function (e) { return { error: e }; };
            Ke.getDerivedStateFromProps = function (e, t) { return t.location !== e.location || "idle" !== t.revalidation && "idle" === e.revalidation ? { error: e.error, location: e.location, revalidation: e.revalidation } : { error: e.error || t.error, location: t.location, revalidation: e.revalidation || t.revalidation }; };
            Ke.prototype.componentDidCatch = function (e, t) { console.error("React Router caught the following error during render", e, t); };
            Ke.prototype.render = function () { return this.state.error ? n.createElement(Ue.Provider, { value: this.props.routeContext }, n.createElement(je.Provider, { value: this.state.error, children: this.props.component })) : this.props.children; };
            return Ke;
        }(n.Component)); function Ye(e) { var t = e.routeContext, r = e.match, a = e.children, o = n.useContext(De); return o && o.static && o.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = r.route.id), n.createElement(Ue.Provider, { value: t }, a); } var Xe = function (e) { return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e; }(Xe || {}), Je = function (e) { return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e; }(Je || {}); function Ge(e) { var t = function (e) { var t = n.useContext(Ue); return t || f(!1), t; }(), r = t.matches[t.matches.length - 1]; return r.route.id || f(!1), r.route.id; } function Ze(e) { return function (e) { var t = n.useContext(Ue).outlet; return t ? n.createElement(Ve.Provider, { value: e }, t) : t; }(e.context); } function et(e) { var _b = e.basename, t = _b === void 0 ? "/" : _b, _c = e.children, r = _c === void 0 ? null : _c, a = e.location, _d = e.navigationType, l = _d === void 0 ? o.Pop : _d, i = e.navigator, _f = e.static, u = _f === void 0 ? !1 : _f; Ie() && f(!1); var s = t.replace(/^\/*/, "/"), c = n.useMemo((function () { return ({ basename: s, navigator: i, static: u }); }), [s, i, u]); "string" == typeof a && (a = v(a)); var _g = a.pathname, d = _g === void 0 ? "/" : _g, _h = a.search, p = _h === void 0 ? "" : _h, _j = a.hash, h = _j === void 0 ? "" : _j, _k = a.state, m = _k === void 0 ? null : _k, _m = a.key, g = _m === void 0 ? "default" : _m, y = n.useMemo((function () { var e = M(d, s); return null == e ? null : { location: { pathname: e, search: p, hash: h, state: m, key: g }, navigationType: l }; }), [s, d, p, h, m, g, l]); return null == y ? null : n.createElement(Oe.Provider, { value: c }, n.createElement(Fe.Provider, { children: r, value: y })); } function tt() { return tt = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    } return e; }, tt.apply(this, arguments); } r.startTransition, new Promise((function () { })), n.Component, new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]); var nt = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"]; function rt(e) { if (!e)
        return null; var t = Object.entries(e), n = {}; for (var _b = 0, t_12 = t; _b < t_12.length; _b++) {
        var _c = t_12[_b], e_20 = _c[0], r_9 = _c[1];
        if (r_9 && "RouteErrorResponse" === r_9.__type)
            n[e_20] = new V(r_9.status, r_9.statusText, r_9.data, !0 === r_9.internal);
        else if (r_9 && "Error" === r_9.__type) {
            if (r_9.__subType) {
                var t_13 = window[r_9.__subType];
                if ("function" == typeof t_13)
                    try {
                        var a_5 = new t_13(r_9.message);
                        a_5.stack = "", n[e_20] = a_5;
                    }
                    catch (e) { }
            }
            if (null == n[e_20]) {
                var t_14 = new Error(r_9.message);
                t_14.stack = "", n[e_20] = t_14;
            }
        }
        else
            n[e_20] = r_9;
    } return n; } var at = n.createContext({ isTransitioning: !1 }), ot = n.createContext(new Map), lt = r.startTransition, it = u.flushSync; function ut(e) { it ? it(e) : e(); }
        var st = /** @class */ (function () {
            function st() {
                var _this = this;
                this.status = "pending", this.promise = new Promise((function (e, t) { _this.resolve = function (t) { "pending" === _this.status && (_this.status = "resolved", e(t)); }, _this.reject = function (e) { "pending" === _this.status && (_this.status = "rejected", t(e)); }; }));
            }
            return st;
        }()); function ct(e) { var t = e.routes, n = e.state; return He(t, void 0, n); } var ft = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement, dt = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, pt = n.forwardRef((function (e, t) { var r, a = e.onClick, o = e.relative, l = e.reloadDocument, i = e.replace, u = e.state, s = e.target, c = e.to, d = e.preventScrollReset, p = e.unstable_viewTransition, h = function (e, t) { if (null == e)
        return {}; var n, r, a = {}, o = Object.keys(e); for (r = 0; r < o.length; r++)
        n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]); return a; }(e, nt), v = n.useContext(Oe).basename, g = !1; if ("string" == typeof c && dt.test(c) && (r = c, ft))
        try {
            var e_21 = new URL(window.location.href), t_15 = c.startsWith("//") ? new URL(e_21.protocol + c) : new URL(c), n_13 = M(t_15.pathname, v);
            t_15.origin === e_21.origin && null != n_13 ? c = n_13 + t_15.search + t_15.hash : g = !0;
        }
        catch (e) { } var y = function (e, t) { var r = (void 0 === t ? {} : t).relative; Ie() || f(!1); var _b = n.useContext(Oe), a = _b.basename, o = _b.navigator, _c = We(e, { relative: r }), l = _c.hash, i = _c.pathname, u = _c.search, s = i; return "/" !== a && (s = "/" === i ? a : I([a, i])), o.createHref({ pathname: s, search: u, hash: l }); }(c, { relative: o }), b = function (e, t) { var _b = void 0 === t ? {} : t, r = _b.target, a = _b.replace, o = _b.state, l = _b.preventScrollReset, i = _b.relative, u = _b.unstable_viewTransition, s = $e(), c = Ae(), f = We(e, { relative: i }); return n.useCallback((function (t) { if (function (e, t) { return !(0 !== e.button || t && "_self" !== t || function (e) { return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey); }(e)); }(t, r)) {
        t.preventDefault();
        var n_14 = void 0 !== a ? a : m(c) === m(f);
        s(e, { replace: n_14, state: o, preventScrollReset: l, relative: i, unstable_viewTransition: u });
    } }), [c, s, f, a, o, r, e, l, i, u]); }(c, { replace: i, state: u, target: s, preventScrollReset: d, relative: o, unstable_viewTransition: p }); return n.createElement("a", tt({}, h, { href: r || y, onClick: g || l ? a : function (e) { a && a(e), e.defaultPrevented || b(e); }, ref: t, target: s })); })); var ht, mt; (function (e) { e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"; })(ht || (ht = {})), function (e) { e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"; }(mt || (mt = {})); var vt = (0, n.lazy)((function () { return l.e(593).then(l.bind(l, 593)); })), gt = (0, n.lazy)((function () { return l.e(932).then(l.bind(l, 459)); })), yt = document.getElementById("root"); if (!yt)
        throw new Error("root in not found"); var bt, wt, kt = (0, t.s)(yt), St = (bt = [{ path: "/", element: (0, e.jsx)((function () { var t = (0, n.useState)(0), r = t[0], o = t[1]; return (0, e.jsxs)("div", { children: ["Platform: ", "desktop", (0, e.jsxs)("nav", { children: [(0, e.jsx)(pt, { to: "/about", children: "about" }), (0, e.jsx)(pt, { to: "/shop", children: "shop" })] }), r, (0, e.jsxs)("div", { children: [(0, e.jsx)("button", { className: a, onClick: function () { return o((function (e) { return e + 1; })); }, children: "+" }), (0, e.jsx)("button", { className: a, onClick: function () { return o((function (e) { return e - 1; })); }, children: "-" })] }), (0, e.jsx)(Ze, {})] }); }), {}), children: [{ path: "/about", element: (0, e.jsx)(n.Suspense, { fallback: (0, e.jsx)(e.Fragment, { children: "Loading" }), children: (0, e.jsx)(vt, {}) }) }, { path: "/shop", element: (0, e.jsx)(n.Suspense, { fallback: (0, e.jsx)(e.Fragment, { children: "Loading" }), children: (0, e.jsx)(gt, {}) }) }] }], function (e) {
        var _b;
        var t = e.window ? e.window : "undefined" != typeof window ? window : void 0, n = void 0 !== t && void 0 !== t.document && void 0 !== t.document.createElement, r = !n;
        var a;
        if (f(e.routes.length > 0, "You must provide a non-empty routes array to createRouter"), e.mapRouteProperties)
            a = e.mapRouteProperties;
        else if (e.detectErrorBoundary) {
            var t_16 = e.detectErrorBoundary;
            a = function (e) { return ({ hasErrorBoundary: t_16(e) }); };
        }
        else
            a = te;
        var l, i = {}, u = b(e.routes, a, void 0, i), c = e.basename || "/", p = s({ v7_fetcherPersist: !1, v7_normalizeFormMethod: !1, v7_prependBasename: !1 }, e.future), m = null, v = new Set, y = null, k = null, S = null, x = null != e.hydrationData, E = w(u, e.history.location, c), C = null;
        if (null == E) {
            var t_17 = ge(404, { pathname: e.history.location.pathname }), _c = ve(u), n_15 = _c.matches, r_10 = _c.route;
            E = n_15, C = (_b = {}, _b[r_10.id] = t_17, _b);
        }
        var _, P, L = !(E.some((function (e) { return e.route.lazy; })) || E.some((function (e) { return e.route.loader; })) && null == e.hydrationData), R = { historyAction: e.history.action, location: e.history.location, matches: E, initialized: L, navigation: J, restoreScrollPosition: null == e.hydrationData && null, preventScrollReset: !1, revalidation: "idle", loaderData: e.hydrationData && e.hydrationData.loaderData || {}, actionData: e.hydrationData && e.hydrationData.actionData || null, errors: e.hydrationData && e.hydrationData.errors || C, fetchers: new Map, blockers: new Map }, T = o.Pop, N = !1, z = !1, D = new Map, O = null, F = !1, U = !1, j = [], I = [], A = new Map, B = 0, $ = -1, V = new Map, W = new Set, H = new Map, Q = new Map, q = new Set, K = new Map, Y = new Map, le = !1;
        function ie(e, t) { void 0 === t && (t = {}), R = s({}, R, e); var n = [], r = []; p.v7_fetcherPersist && R.fetchers.forEach((function (e, t) { "idle" === e.state && (q.has(t) ? r.push(t) : n.push(t)); })), __spreadArray([], v, true).forEach((function (e) { return e(R, { deletedFetchers: r, unstable_viewTransitionOpts: t.viewTransitionOpts, unstable_flushSync: !0 === t.flushSync }); })), p.v7_fetcherPersist && (n.forEach((function (e) { return R.fetchers.delete(e); })), r.forEach((function (e) { return Oe(e); }))); }
        function ue(t, n, r) { var a, i; var c, f = (void 0 === r ? {} : r).flushSync, d = null != R.actionData && null != R.navigation.formMethod && xe(R.navigation.formMethod) && "loading" === R.navigation.state && !0 !== (null == (a = t.state) ? void 0 : a._isRedirect); c = n.actionData ? Object.keys(n.actionData).length > 0 ? n.actionData : null : d ? R.actionData : null; var p = n.loaderData ? he(R.loaderData, n.loaderData, n.matches || [], n.errors) : R.loaderData, h = R.blockers; h.size > 0 && (h = new Map(h), h.forEach((function (e, t) { return h.set(t, Z); }))); var m, v = !0 === N || null != R.navigation.formMethod && xe(R.navigation.formMethod) && !0 !== (null == (i = t.state) ? void 0 : i._isRedirect); if (l && (u = l, l = void 0), F || T === o.Pop || (T === o.Push ? e.history.push(t, t.state) : T === o.Replace && e.history.replace(t, t.state)), T === o.Pop) {
            var e_22 = D.get(R.location.pathname);
            e_22 && e_22.has(t.pathname) ? m = { currentLocation: R.location, nextLocation: t } : D.has(t.pathname) && (m = { currentLocation: t, nextLocation: R.location });
        }
        else if (z) {
            var e_23 = D.get(R.location.pathname);
            e_23 ? e_23.add(t.pathname) : (e_23 = new Set([t.pathname]), D.set(R.location.pathname, e_23)), m = { currentLocation: R.location, nextLocation: t };
        } ie(s({}, n, { actionData: c, loaderData: p, historyAction: T, location: t, initialized: !0, navigation: J, revalidation: "idle", restoreScrollPosition: He(t, n.matches || R.matches), preventScrollReset: v, blockers: h }), { viewTransitionOpts: m, flushSync: !0 === f }), T = o.Pop, N = !1, z = !1, F = !1, U = !1, j = [], I = []; }
        function fe(t, n, r) {
            return __awaiter(this, void 0, void 0, function () {
                var f, d, p, h, e_24, _b, t_18, r_11, m, v, b, k, x, e_25, _c, E, C, _;
                var _d, _f;
                return __generator(this, function (_g) {
                    switch (_g.label) {
                        case 0:
                            P && P.abort(), P = null, T = t, F = !0 === (r && r.startUninterruptedRevalidation), function (e, t) { if (y && S) {
                                var n_16 = We(e, t);
                                y[n_16] = S();
                            } }(R.location, R.matches), N = !0 === (r && r.preventScrollReset), z = !0 === (r && r.enableViewTransition);
                            f = l || u, d = r && r.overrideNavigation, p = w(f, n, c), h = !0 === (r && r.flushSync);
                            if (!p) {
                                e_24 = ge(404, { pathname: n.pathname }), _b = ve(f), t_18 = _b.matches, r_11 = _b.route;
                                return [2 /*return*/, (Ve(), void ue(n, { matches: t_18, loaderData: {}, errors: (_d = {}, _d[r_11.id] = e_24, _d) }, { flushSync: h }))];
                            }
                            if (R.initialized && !U && (m = R.location, v = n, m.pathname === v.pathname && m.search === v.search && ("" === m.hash ? "" !== v.hash : m.hash === v.hash || "" !== v.hash)) && !(r && r.submission && xe(r.submission.formMethod)))
                                return [2 /*return*/, void ue(n, { matches: p }, { flushSync: h })];
                            P = new AbortController;
                            x = ce(e.history, n, P.signal, r && r.submission);
                            if (!(r && r.pendingError)) return [3 /*break*/, 1];
                            k = (_f = {}, _f[me(p).route.id] = r.pendingError, _f);
                            return [3 /*break*/, 3];
                        case 1:
                            if (!(r && r.submission && xe(r.submission.formMethod))) return [3 /*break*/, 3];
                            return [4 /*yield*/, function (e, t, n, r, l) {
                                    return __awaiter(this, void 0, void 0, function () {
                                        var u, s, f, e_26, e_27;
                                        var _b, _c;
                                        return __generator(this, function (_d) {
                                            switch (_d.label) {
                                                case 0:
                                                    void 0 === l && (l = {}), _e();
                                                    s = function (e, t) { return { state: "submitting", location: e, formMethod: t.formMethod, formAction: t.formAction, formEncType: t.formEncType, formData: t.formData, json: t.json, text: t.text }; }(t, n);
                                                    ie({ navigation: s }, { flushSync: !0 === l.flushSync });
                                                    f = Pe(r, t);
                                                    if (!(f.route.action || f.route.lazy)) return [3 /*break*/, 2];
                                                    return [4 /*yield*/, se("action", e, f, r, i, a, c)];
                                                case 1:
                                                    if (u = _d.sent(), e.signal.aborted)
                                                        return [2 /*return*/, { shortCircuited: !0 }];
                                                    return [3 /*break*/, 3];
                                                case 2:
                                                    u = { type: g.error, error: ge(405, { method: e.method, pathname: t.pathname, routeId: f.route.id }) };
                                                    _d.label = 3;
                                                case 3:
                                                    if (!Se(u)) return [3 /*break*/, 5];
                                                    e_26 = l && null != l.replace ? l.replace : u.location === R.location.pathname + R.location.search;
                                                    return [4 /*yield*/, de(R, u, { submission: n, replace: e_26 })];
                                                case 4: return [2 /*return*/, (_d.sent(), { shortCircuited: !0 })];
                                                case 5:
                                                    if (ke(u)) {
                                                        e_27 = me(r, f.route.id);
                                                        return [2 /*return*/, (!0 !== (l && l.replace) && (T = o.Push), { pendingActionData: {}, pendingActionError: (_b = {}, _b[e_27.route.id] = u.error, _b) })];
                                                    }
                                                    if (we(u))
                                                        throw ge(400, { type: "defer-action" });
                                                    return [2 /*return*/, { pendingActionData: (_c = {}, _c[f.route.id] = u.data, _c) }];
                                            }
                                        });
                                    });
                                }(x, n, r.submission, p, { replace: r.replace, flushSync: h })];
                        case 2:
                            e_25 = _g.sent();
                            if (e_25.shortCircuited)
                                return [2 /*return*/];
                            b = e_25.pendingActionData, k = e_25.pendingActionError, d = Re(n, r.submission), h = !1, x = new Request(x.url, { signal: x.signal });
                            _g.label = 3;
                        case 3: return [4 /*yield*/, function (t, n, r, a, o, i, f, d, p, h) {
                                return __awaiter(this, void 0, void 0, function () { var m, v, g, _b, y, b, e_28, e_29, w, _c, k, S, x, E, e_30, _d, C, _, L, T; return __generator(this, function (_f) {
                                    switch (_f.label) {
                                        case 0:
                                            m = a || Re(n, o), v = o || i || Le(m), g = l || u, _b = oe(e.history, R, r, v, n, U, j, I, q, H, W, g, c, p, h), y = _b[0], b = _b[1];
                                            if (Ve((function (e) { return !(r && r.some((function (t) { return t.route.id === e; }))) || y && y.some((function (t) { return t.route.id === e; })); })), $ = ++B, 0 === y.length && 0 === b.length) {
                                                e_28 = je();
                                                return [2 /*return*/, (ue(n, s({ matches: r, loaderData: {}, errors: h || null }, p ? { actionData: p } : {}, e_28 ? { fetchers: new Map(R.fetchers) } : {}), { flushSync: d }), { shortCircuited: !0 })];
                                            }
                                            if (!F) {
                                                b.forEach((function (e) { var t = R.fetchers.get(e.key), n = Te(void 0, t ? t.data : void 0); R.fetchers.set(e.key, n); }));
                                                e_29 = p || R.actionData;
                                                ie(s({ navigation: m }, e_29 ? 0 === Object.keys(e_29).length ? { actionData: null } : { actionData: e_29 } : {}, b.length > 0 ? { fetchers: new Map(R.fetchers) } : {}), { flushSync: d });
                                            }
                                            b.forEach((function (e) { A.has(e.key) && Fe(e.key), e.controller && A.set(e.key, e.controller); }));
                                            w = function () { return b.forEach((function (e) { return Fe(e.key); })); };
                                            P && P.signal.addEventListener("abort", w);
                                            return [4 /*yield*/, be(R.matches, r, y, b, t)];
                                        case 1:
                                            _c = _f.sent(), k = _c.results, S = _c.loaderResults, x = _c.fetcherResults;
                                            if (t.signal.aborted)
                                                return [2 /*return*/, { shortCircuited: !0 }];
                                            P && P.signal.removeEventListener("abort", w), b.forEach((function (e) { return A.delete(e.key); }));
                                            E = ye(k);
                                            if (!E) return [3 /*break*/, 3];
                                            if (E.idx >= y.length) {
                                                e_30 = b[E.idx - y.length].key;
                                                W.add(e_30);
                                            }
                                            return [4 /*yield*/, de(R, E.result, { replace: f })];
                                        case 2: return [2 /*return*/, (_f.sent(), { shortCircuited: !0 })];
                                        case 3:
                                            _d = pe(R, r, y, S, h, b, x, K), C = _d.loaderData, _ = _d.errors;
                                            K.forEach((function (e, t) { e.subscribe((function (n) { (n || e.done) && K.delete(t); })); }));
                                            L = je(), T = Ie($);
                                            return [2 /*return*/, s({ loaderData: C, errors: _ }, L || T || b.length > 0 ? { fetchers: new Map(R.fetchers) } : {})];
                                    }
                                }); });
                            }(x, n, p, d, r && r.submission, r && r.fetcherSubmission, r && r.replace, h, b, k)];
                        case 4:
                            _c = _g.sent(), E = _c.shortCircuited, C = _c.loaderData, _ = _c.errors;
                            E || (P = null, ue(n, s({ matches: p }, b ? { actionData: b } : {}, { loaderData: C, errors: _ })));
                            return [2 /*return*/];
                    }
                });
            });
        }
        function de(r, a, l) {
            return __awaiter(this, void 0, void 0, function () { var _b, i, u, d, p, n_17, r_12, m, _c, v, g, y, b, e_31; return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = void 0 === l ? {} : l, i = _b.submission, u = _b.fetcherSubmission, d = _b.replace;
                        a.revalidate && (U = !0);
                        p = h(r.location, a.location, { _isRedirect: !0 });
                        if (f(p, "Expected a location on the redirect navigation"), n) {
                            n_17 = !1;
                            if (a.reloadDocument)
                                n_17 = !0;
                            else if (ee.test(a.location)) {
                                r_12 = e.history.createURL(a.location);
                                n_17 = r_12.origin !== t.location.origin || null == M(r_12.pathname, c);
                            }
                            if (n_17)
                                return [2 /*return*/, void (d ? t.location.replace(a.location) : t.location.assign(a.location))];
                        }
                        P = null;
                        m = !0 === d ? o.Replace : o.Push, _c = r.navigation, v = _c.formMethod, g = _c.formAction, y = _c.formEncType;
                        !i && !u && v && g && y && (i = Le(r.navigation));
                        b = i || u;
                        if (!(X.has(a.status) && b && xe(b.formMethod))) return [3 /*break*/, 2];
                        return [4 /*yield*/, fe(m, p, { submission: s({}, b, { formAction: a.location }), preventScrollReset: N })];
                    case 1:
                        _d.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        e_31 = Re(p, i);
                        return [4 /*yield*/, fe(m, p, { overrideNavigation: e_31, fetcherSubmission: u, preventScrollReset: N })];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4: return [2 /*return*/];
                }
            }); });
        }
        function be(t, n, r, o, l) {
            return __awaiter(this, void 0, void 0, function () { var u, s, f; return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Promise.all(__spreadArray(__spreadArray([], r.map((function (e) { return se("loader", l, e, n, i, a, c); })), true), o.map((function (t) { return t.matches && t.match && t.controller ? se("loader", ce(e.history, t.path, t.controller.signal), t.match, t.matches, i, a, c) : { type: g.error, error: ge(404, { pathname: t.path }) }; })), true))];
                    case 1:
                        u = _b.sent(), s = u.slice(0, r.length), f = u.slice(r.length);
                        return [4 /*yield*/, Promise.all([Ee(t, r, s, s.map((function () { return l.signal; })), !1, R.loaderData), Ee(t, o.map((function (e) { return e.match; })), f, o.map((function (e) { return e.controller ? e.controller.signal : null; })), !0)])];
                    case 2: return [2 /*return*/, (_b.sent(), { results: u, loaderResults: s, fetcherResults: f })];
                }
            }); });
        }
        function _e() { U = !0, j.push.apply(j, Ve()), H.forEach((function (e, t) { A.has(t) && (I.push(t), Fe(t)); })); }
        function ze(e, t, n) { void 0 === n && (n = {}), R.fetchers.set(e, t), ie({ fetchers: new Map(R.fetchers) }, { flushSync: !0 === (n && n.flushSync) }); }
        function De(e, t, n, r) {
            var _b;
            void 0 === r && (r = {});
            var a = me(R.matches, t);
            Oe(e), ie({ errors: (_b = {}, _b[a.route.id] = n, _b), fetchers: new Map(R.fetchers) }, { flushSync: !0 === (r && r.flushSync) });
        }
        function Me(e) { return p.v7_fetcherPersist && (Q.set(e, (Q.get(e) || 0) + 1), q.has(e) && q.delete(e)), R.fetchers.get(e) || G; }
        function Oe(e) { var t = R.fetchers.get(e); !A.has(e) || t && "loading" === t.state && V.has(e) || Fe(e), H.delete(e), V.delete(e), W.delete(e), q.delete(e), R.fetchers.delete(e); }
        function Fe(e) { var t = A.get(e); f(t, "Expected fetch controller: " + e), t.abort(), A.delete(e); }
        function Ue(e) { for (var _b = 0, e_32 = e; _b < e_32.length; _b++) {
            var t_19 = e_32[_b];
            var e_33 = Ne(Me(t_19).data);
            R.fetchers.set(t_19, e_33);
        } }
        function je() { var e = [], t = !1; for (var _b = 0, W_1 = W; _b < W_1.length; _b++) {
            var n_18 = W_1[_b];
            var r_13 = R.fetchers.get(n_18);
            f(r_13, "Expected fetcher: " + n_18), "loading" === r_13.state && (W.delete(n_18), e.push(n_18), t = !0);
        } return Ue(e), t; }
        function Ie(e) { var t = []; for (var _b = 0, V_1 = V; _b < V_1.length; _b++) {
            var _c = V_1[_b], n_19 = _c[0], r_14 = _c[1];
            if (r_14 < e) {
                var e_34 = R.fetchers.get(n_19);
                f(e_34, "Expected fetcher: " + n_19), "loading" === e_34.state && (Fe(n_19), V.delete(n_19), t.push(n_19));
            }
        } return Ue(t), t.length > 0; }
        function Ae(e) { R.blockers.delete(e), Y.delete(e); }
        function Be(e, t) { var n = R.blockers.get(e) || Z; f("unblocked" === n.state && "blocked" === t.state || "blocked" === n.state && "blocked" === t.state || "blocked" === n.state && "proceeding" === t.state || "blocked" === n.state && "unblocked" === t.state || "proceeding" === n.state && "unblocked" === t.state, "Invalid blocker state transition: " + n.state + " -> " + t.state); var r = new Map(R.blockers); r.set(e, t), ie({ blockers: r }); }
        function $e(e) { var t = e.currentLocation, n = e.nextLocation, r = e.historyAction; if (0 === Y.size)
            return; Y.size > 1 && d(!1, "A router only supports one blocker at a time"); var a = Array.from(Y.entries()), _b = a[a.length - 1], o = _b[0], l = _b[1], i = R.blockers.get(o); return i && "proceeding" === i.state ? void 0 : l({ currentLocation: t, nextLocation: n, historyAction: r }) ? o : void 0; }
        function Ve(e) { var t = []; return K.forEach((function (n, r) { e && !e(r) || (n.cancel(), t.push(r), K.delete(r)); })), t; }
        function We(e, t) { return k && k(e, t.map((function (e) { return function (e, t) { var n = e.route, r = e.pathname, a = e.params; return { id: n.id, pathname: r, params: a, data: t[n.id], handle: n.handle }; }(e, R.loaderData); }))) || e.key; }
        function He(e, t) { if (y) {
            var n_20 = We(e, t), r_15 = y[n_20];
            if ("number" == typeof r_15)
                return r_15;
        } return null; }
        return _ = { get basename() { return c; }, get state() { return R; }, get routes() { return u; }, get window() { return t; }, initialize: function () { if (m = e.history.listen((function (t) { var n = t.action, r = t.location, a = t.delta; if (le)
                return void (le = !1); d(0 === Y.size || null != a, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."); var o = $e({ currentLocation: R.location, nextLocation: r, historyAction: n }); return o && null != a ? (le = !0, e.history.go(-1 * a), void Be(o, { state: "blocked", location: r, proceed: function () { Be(o, { state: "proceeding", proceed: void 0, reset: void 0, location: r }), e.history.go(a); }, reset: function () { var e = new Map(R.blockers); e.set(o, Z), ie({ blockers: e }); } })) : fe(n, r); })), n) {
                !function (e, t) { try {
                    var n_21 = e.sessionStorage.getItem(ne);
                    if (n_21) {
                        var e_35 = JSON.parse(n_21);
                        for (var _b = 0, _c = Object.entries(e_35 || {}); _b < _c.length; _b++) {
                            var _d = _c[_b], n_22 = _d[0], r_16 = _d[1];
                            r_16 && Array.isArray(r_16) && t.set(n_22, new Set(r_16 || []));
                        }
                    }
                }
                catch (e) { } }(t, D);
                var e_36 = function () { return function (e, t) { if (t.size > 0) {
                    var n_23 = {};
                    for (var _b = 0, t_20 = t; _b < t_20.length; _b++) {
                        var _c = t_20[_b], e_37 = _c[0], r_17 = _c[1];
                        n_23[e_37] = __spreadArray([], r_17, true);
                    }
                    try {
                        e.sessionStorage.setItem(ne, JSON.stringify(n_23));
                    }
                    catch (e) {
                        d(!1, "Failed to save applied view transitions in sessionStorage (" + e + ").");
                    }
                } }(t, D); };
                t.addEventListener("pagehide", e_36), O = function () { return t.removeEventListener("pagehide", e_36); };
            } return R.initialized || fe(o.Pop, R.location), _; }, subscribe: function (e) { return v.add(e), function () { return v.delete(e); }; }, enableScrollRestoration: function (e, t, n) { if (y = e, S = t, k = n || null, !x && R.navigation === J) {
                x = !0;
                var e_38 = He(R.location, R.matches);
                null != e_38 && ie({ restoreScrollPosition: e_38 });
            } return function () { y = null, S = null, k = null; }; }, navigate: function t(n, r) {
                return __awaiter(this, void 0, void 0, function () { var a, _b, l, i, u, f, d, m, v, g, y, b; return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if ("number" == typeof n)
                                return [2 /*return*/, void e.history.go(n)];
                            a = re(R.location, R.matches, c, p.v7_prependBasename, n, null == r ? void 0 : r.fromRouteId, null == r ? void 0 : r.relative), _b = ae(p.v7_normalizeFormMethod, !1, a, r), l = _b.path, i = _b.submission, u = _b.error, f = R.location, d = h(R.location, l, r && r.state);
                            d = s({}, d, e.history.encodeLocation(d));
                            m = r && null != r.replace ? r.replace : void 0, v = o.Push;
                            !0 === m ? v = o.Replace : !1 === m || null != i && xe(i.formMethod) && i.formAction === R.location.pathname + R.location.search && (v = o.Replace);
                            g = r && "preventScrollReset" in r ? !0 === r.preventScrollReset : void 0, y = !0 === (r && r.unstable_flushSync), b = $e({ currentLocation: f, nextLocation: d, historyAction: v });
                            if (!!b) return [3 /*break*/, 2];
                            return [4 /*yield*/, fe(v, d, { submission: i, pendingError: u, preventScrollReset: g, replace: r && r.replace, enableViewTransition: r && r.unstable_viewTransition, flushSync: y })];
                        case 1: return [2 /*return*/, _c.sent()];
                        case 2:
                            Be(b, { state: "blocked", location: d, proceed: function () { Be(b, { state: "proceeding", proceed: void 0, reset: void 0, location: d }), t(n, r); }, reset: function () { var e = new Map(R.blockers); e.set(b, Z), ie({ blockers: e }); } });
                            return [2 /*return*/];
                    }
                }); });
            }, fetch: function (t, n, o, s) { if (r)
                throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."); A.has(t) && Fe(t); var d = !0 === (s && s.unstable_flushSync), h = l || u, m = re(R.location, R.matches, c, p.v7_prependBasename, o, n, null == s ? void 0 : s.relative), v = w(h, m, c); if (!v)
                return void De(t, n, ge(404, { pathname: m }), { flushSync: d }); var _b = ae(p.v7_normalizeFormMethod, !0, m, s), g = _b.path, y = _b.submission, b = _b.error; if (b)
                return void De(t, n, b, { flushSync: d }); var k = Pe(v, g); N = !0 === (s && s.preventScrollReset), y && xe(y.formMethod) ? function (t, n, r, o, s, d, p) {
                return __awaiter(this, void 0, void 0, function () {
                    var e_39, h, m, v, g, y, b, k, S, x, E, C, _b, _, L, N, _c, z, D, M, O, e_40, _d, F, Q, e_41;
                    var _f;
                    return __generator(this, function (_g) {
                        switch (_g.label) {
                            case 0:
                                if (_e(), H.delete(t), !o.route.action && !o.route.lazy) {
                                    e_39 = ge(405, { method: p.formMethod, pathname: r, routeId: n });
                                    return [2 /*return*/, void De(t, n, e_39, { flushSync: d })];
                                }
                                h = R.fetchers.get(t);
                                ze(t, function (e, t) { return { state: "submitting", formMethod: e.formMethod, formAction: e.formAction, formEncType: e.formEncType, formData: e.formData, json: e.json, text: e.text, data: t ? t.data : void 0 }; }(p, h), { flushSync: d });
                                m = new AbortController, v = ce(e.history, r, m.signal, p);
                                A.set(t, m);
                                g = B;
                                return [4 /*yield*/, se("action", v, o, s, i, a, c)];
                            case 1:
                                y = _g.sent();
                                if (v.signal.aborted)
                                    return [2 /*return*/, void (A.get(t) === m && A.delete(t))];
                                if (q.has(t))
                                    return [2 /*return*/, void ze(t, Ne(void 0))];
                                if (Se(y))
                                    return [2 /*return*/, (A.delete(t), $ > g ? void ze(t, Ne(void 0)) : (W.add(t), ze(t, Te(p)), de(R, y, { fetcherSubmission: p })))];
                                if (ke(y))
                                    return [2 /*return*/, void De(t, n, y.error)];
                                if (we(y))
                                    throw ge(400, { type: "defer-action" });
                                b = R.navigation.location || R.location, k = ce(e.history, b, m.signal), S = l || u, x = "idle" !== R.navigation.state ? w(S, R.navigation.location, c) : R.matches;
                                f(x, "Didn't find any matches after fetcher action");
                                E = ++B;
                                V.set(t, E);
                                C = Te(p, y.data);
                                R.fetchers.set(t, C);
                                _b = oe(e.history, R, x, p, b, U, j, I, q, H, W, S, c, (_f = {}, _f[o.route.id] = y.data, _f), void 0), _ = _b[0], L = _b[1];
                                L.filter((function (e) { return e.key !== t; })).forEach((function (e) { var t = e.key, n = R.fetchers.get(t), r = Te(void 0, n ? n.data : void 0); R.fetchers.set(t, r), A.has(t) && Fe(t), e.controller && A.set(t, e.controller); })), ie({ fetchers: new Map(R.fetchers) });
                                N = function () { return L.forEach((function (e) { return Fe(e.key); })); };
                                m.signal.addEventListener("abort", N);
                                return [4 /*yield*/, be(R.matches, x, _, L, k)];
                            case 2:
                                _c = _g.sent(), z = _c.results, D = _c.loaderResults, M = _c.fetcherResults;
                                if (m.signal.aborted)
                                    return [2 /*return*/];
                                m.signal.removeEventListener("abort", N), V.delete(t), A.delete(t), L.forEach((function (e) { return A.delete(e.key); }));
                                O = ye(z);
                                if (O) {
                                    if (O.idx >= _.length) {
                                        e_40 = L[O.idx - _.length].key;
                                        W.add(e_40);
                                    }
                                    return [2 /*return*/, de(R, O.result)];
                                }
                                _d = pe(R, R.matches, _, D, void 0, L, M, K), F = _d.loaderData, Q = _d.errors;
                                if (R.fetchers.has(t)) {
                                    e_41 = Ne(y.data);
                                    R.fetchers.set(t, e_41);
                                }
                                Ie(E), "loading" === R.navigation.state && E > $ ? (f(T, "Expected pending action"), P && P.abort(), ue(R.navigation.location, { matches: x, loaderData: F, errors: Q, fetchers: new Map(R.fetchers) })) : (ie({ errors: Q, loaderData: he(R.loaderData, F, x, Q), fetchers: new Map(R.fetchers) }), U = !1);
                                return [2 /*return*/];
                        }
                    });
                });
            }(t, n, g, k, v, d, y) : (H.set(t, { routeId: n, path: g }), function (t, n, r, o, l, u, s) {
                return __awaiter(this, void 0, void 0, function () { var d, p, h, m, v, _b, _c, _d; return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            d = R.fetchers.get(t);
                            ze(t, Te(s, d ? d.data : void 0), { flushSync: u });
                            p = new AbortController, h = ce(e.history, r, p.signal);
                            A.set(t, p);
                            m = B;
                            return [4 /*yield*/, se("loader", h, o, l, i, a, c)];
                        case 1:
                            v = _f.sent();
                            _b = we(v);
                            if (!_b) return [3 /*break*/, 3];
                            return [4 /*yield*/, Ce(v, h.signal, !0)];
                        case 2:
                            _b = (v = (_f.sent()) || v);
                            _f.label = 3;
                        case 3:
                            if (!(_b, A.get(t) === p && A.delete(t), !h.signal.aborted)) return [3 /*break*/, 10];
                            if (!!q.has(t)) return [3 /*break*/, 9];
                            if (!Se(v)) return [3 /*break*/, 7];
                            if (!($ > m)) return [3 /*break*/, 4];
                            _d = void ze(t, Ne(void 0));
                            return [3 /*break*/, 6];
                        case 4:
                            W.add(t);
                            return [4 /*yield*/, de(R, v)];
                        case 5:
                            _d = (void (_f.sent()));
                            _f.label = 6;
                        case 6:
                            _c = _d;
                            return [3 /*break*/, 8];
                        case 7:
                            _c = void (ke(v) ? De(t, n, v.error) : (f(!we(v), "Unhandled fetcher deferred data"), ze(t, Ne(v.data))));
                            _f.label = 8;
                        case 8: return [2 /*return*/, _c];
                        case 9:
                            ze(t, Ne(void 0));
                            _f.label = 10;
                        case 10: return [2 /*return*/];
                    }
                }); });
            }(t, n, g, k, v, d, y)); }, revalidate: function () { _e(), ie({ revalidation: "loading" }), "submitting" !== R.navigation.state && ("idle" !== R.navigation.state ? fe(T || R.historyAction, R.navigation.location, { overrideNavigation: R.navigation }) : fe(R.historyAction, R.location, { startUninterruptedRevalidation: !0 })); }, createHref: function (t) { return e.history.createHref(t); }, encodeLocation: function (t) { return e.history.encodeLocation(t); }, getFetcher: Me, deleteFetcher: function (e) { if (p.v7_fetcherPersist) {
                var t_21 = (Q.get(e) || 0) - 1;
                t_21 <= 0 ? (Q.delete(e), q.add(e)) : Q.set(e, t_21);
            }
            else
                Oe(e); ie({ fetchers: new Map(R.fetchers) }); }, dispose: function () { m && m(), O && O(), v.clear(), P && P.abort(), R.fetchers.forEach((function (e, t) { return Oe(t); })), R.blockers.forEach((function (e, t) { return Ae(t); })); }, getBlocker: function (e, t) { var n = R.blockers.get(e) || Z; return Y.get(e) !== t && Y.set(e, t), n; }, deleteBlocker: Ae, _internalFetchControllers: A, _internalActiveDeferreds: K, _internalSetRoutes: function (e) { i = {}, l = b(e, a, void 0, i); } }, _;
    }({ basename: void 0, future: tt({}, void 0, { v7_prependBasename: !0 }), history: (wt = { window: void 0 }, void 0 === wt && (wt = {}), function (e, t, n, r) { void 0 === r && (r = {}); var _b = r.window, a = _b === void 0 ? document.defaultView : _b, _c = r.v5Compat, l = _c === void 0 ? !1 : _c, i = a.history, u = o.Pop, d = null, v = g(); function g() { return (i.state || { idx: null }).idx; } function y() { u = o.Pop; var e = g(), t = null == e ? null : e - v; v = e, d && d({ action: u, location: w.location, delta: t }); } function b(e) { var t = "null" !== a.location.origin ? a.location.origin : a.location.href, n = "string" == typeof e ? e : m(e); return f(t, "No window.location.(origin|href) available to create URL for href: " + n), new URL(n, t); } null == v && (v = 0, i.replaceState(s({}, i.state, { idx: v }), "")); var w = { get action() { return u; }, get location() { return e(a, i); }, listen: function (e) { if (d)
                throw new Error("A history only accepts one active listener"); return a.addEventListener(c, y), d = e, function () { a.removeEventListener(c, y), d = null; }; }, createHref: function (e) { return t(a, e); }, createURL: b, encodeLocation: function (e) { var t = b(e); return { pathname: t.pathname, search: t.search, hash: t.hash }; }, push: function (e, t) { u = o.Push; var r = h(w.location, e, t); n && n(r, e), v = g() + 1; var s = p(r, v), c = w.createHref(r); try {
                i.pushState(s, "", c);
            }
            catch (e) {
                if (e instanceof DOMException && "DataCloneError" === e.name)
                    throw e;
                a.location.assign(c);
            } l && d && d({ action: u, location: w.location, delta: 1 }); }, replace: function (e, t) { u = o.Replace; var r = h(w.location, e, t); n && n(r, e), v = g(); var a = p(r, v), s = w.createHref(r); i.replaceState(a, "", s), l && d && d({ action: u, location: w.location, delta: 0 }); }, go: function (e) { return i.go(e); } }; return w; }((function (e, t) { var _b = e.location, n = _b.pathname, r = _b.search, a = _b.hash; return h("", { pathname: n, search: r, hash: a }, t.state && t.state.usr || null, t.state && t.state.key || "default"); }), (function (e, t) { return "string" == typeof t ? t : m(t); }), null, wt)), hydrationData: function () { var e; var t = null == (e = window) ? void 0 : e.__staticRouterHydrationData; return t && t.errors && (t = tt({}, t, { errors: rt(t.errors) })), t; }(), routes: bt, mapRouteProperties: function (e) { var t = { hasErrorBoundary: null != e.ErrorBoundary || null != e.errorElement }; return e.Component && Object.assign(t, { element: n.createElement(e.Component), Component: void 0 }), e.ErrorBoundary && Object.assign(t, { errorElement: n.createElement(e.ErrorBoundary), ErrorBoundary: void 0 }), t; }, window: void 0 }).initialize()); kt.render((0, e.jsx)((function (e) {
        var _this = this;
        var t = e.fallbackElement, r = e.router, a = e.future, _b = n.useState(r.state), o = _b[0], l = _b[1], _c = n.useState(), i = _c[0], u = _c[1], _d = n.useState({ isTransitioning: !1 }), s = _d[0], c = _d[1], _f = n.useState(), f = _f[0], d = _f[1], _g = n.useState(), p = _g[0], h = _g[1], _h = n.useState(), m = _h[0], v = _h[1], g = n.useRef(new Map), y = (a || {}).v7_startTransition, b = n.useCallback((function (e) { y ? function (e) { lt ? lt(e) : e(); }(e) : e(); }), [y]), w = n.useCallback((function (e, t) { var n = t.deletedFetchers, a = t.unstable_flushSync, o = t.unstable_viewTransitionOpts; n.forEach((function (e) { return g.current.delete(e); })), e.fetchers.forEach((function (e, t) { void 0 !== e.data && g.current.set(t, e.data); })); var i = null == r.window || "function" != typeof r.window.document.startViewTransition; if (o && !i) {
            if (a) {
                ut((function () { p && (f && f.resolve(), p.skipTransition()), c({ isTransitioning: !0, flushSync: !0, currentLocation: o.currentLocation, nextLocation: o.nextLocation }); }));
                var t_22 = r.window.document.startViewTransition((function () { ut((function () { return l(e); })); }));
                return t_22.finished.finally((function () { ut((function () { d(void 0), h(void 0), u(void 0), c({ isTransitioning: !1 }); })); })), void ut((function () { return h(t_22); }));
            }
            p ? (f && f.resolve(), p.skipTransition(), v({ state: e, currentLocation: o.currentLocation, nextLocation: o.nextLocation })) : (u(e), c({ isTransitioning: !0, flushSync: !1, currentLocation: o.currentLocation, nextLocation: o.nextLocation }));
        }
        else
            a ? ut((function () { return l(e); })) : b((function () { return l(e); })); }), [r.window, p, f, g, b]);
        n.useLayoutEffect((function () { return r.subscribe(w); }), [r, w]), n.useEffect((function () { s.isTransitioning && !s.flushSync && d(new st); }), [s]), n.useEffect((function () { if (f && i && r.window) {
            var e_42 = i, t_23 = f.promise, n_24 = r.window.document.startViewTransition((function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        b((function () { return l(e_42); }));
                        return [4 /*yield*/, t_23];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            }); }); }));
            n_24.finished.finally((function () { d(void 0), h(void 0), u(void 0), c({ isTransitioning: !1 }); })), h(n_24);
        } }), [b, i, f, r.window]), n.useEffect((function () { f && i && o.location.key === i.location.key && f.resolve(); }), [f, p, o.location, i]), n.useEffect((function () { !s.isTransitioning && m && (u(m.state), c({ isTransitioning: !0, flushSync: !1, currentLocation: m.currentLocation, nextLocation: m.nextLocation }), v(void 0)); }), [s.isTransitioning, m]);
        var k = n.useMemo((function () { return ({ createHref: r.createHref, encodeLocation: r.encodeLocation, go: function (e) { return r.navigate(e); }, push: function (e, t, n) { return r.navigate(e, { state: t, preventScrollReset: null == n ? void 0 : n.preventScrollReset }); }, replace: function (e, t, n) { return r.navigate(e, { replace: !0, state: t, preventScrollReset: null == n ? void 0 : n.preventScrollReset }); } }); }), [r]), S = r.basename || "/", x = n.useMemo((function () { return ({ router: r, navigator: k, static: !1, basename: S }); }), [r, k, S]);
        return n.createElement(n.Fragment, null, n.createElement(De.Provider, { value: x }, n.createElement(Me.Provider, { value: o }, n.createElement(ot.Provider, { value: g.current }, n.createElement(at.Provider, { value: s }, n.createElement(et, { basename: S, location: o.location, navigationType: o.historyAction, navigator: k }, o.initialized ? n.createElement(ct, { routes: r.routes, state: o }) : t))))), null);
    }), { router: St })); })();
})();
