import { defineComponent, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const ordersList = ref([]);
    ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#F6F8FA] h-full px-1 py-2" }, _attrs))}><div class="flex flex-wrap gap-2"><!--[-->`);
      ssrRenderList(ordersList.value, (item, index) => {
        _push(`<div class="rounded-md border border-[#E2E2EA] bg-white max-w-[380px] w-full p-6 hover:border-[#41AD6D] flex flex-col gap-2"><div class="flex justify-between"><p class="text-bold text-[rgb(113,137,159)]"> T\u0435\u043B\u0435\u0444\u043E\u043D \u0440\u0430\u049B\u0430\u043C\u0438: </p><p>${ssrInterpolate(item.customer.phone)}</p></div><div class="flex justify-between"><p class="text-bold text-[#71899F]"> \u041C\u0438\u0436\u043E\u0437: </p><p class="">${ssrInterpolate(item.customer.name)}</p></div><div><img${ssrRenderAttr("src", item.photo)} alt=""></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-EINb5CFS.mjs.map
