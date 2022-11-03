import { defineComponent as _, openBlock as a, createElementBlock as d, pushScopeId as r, popScopeId as p, createElementVNode as l } from "vue";
const i = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, s] of t)
    o[n] = s;
  return o;
}, m = (e) => (r("data-v-0b09853e"), e = e(), p(), e), u = { class: "container" }, f = /* @__PURE__ */ m(() => /* @__PURE__ */ l("div", { class: "card" }, null, -1)), v = [
  f
], h = _({
  name: "Poker3dCard"
}), k = /* @__PURE__ */ Object.assign(h, {
  setup(e) {
    return (t, o) => (a(), d("div", u, v));
  }
}), c = /* @__PURE__ */ i(k, [["__scopeId", "data-v-0b09853e"]]), x = [c], I = {
  install(e) {
    x.forEach((t) => {
      e.component(t.name, c);
    });
  }
};
export {
  c as Card,
  I as default
};
