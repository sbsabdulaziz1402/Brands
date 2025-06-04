import { defineComponent, reactive, mergeProps, unref, ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderSlot, ssrRenderClass, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, a as useNuxtApp } from './server.mjs';
import { collection, getDocs, doc, deleteDoc, updateDoc, addDoc } from 'firebase/firestore';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'pinia';
import 'vue-router';
import 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const useFirestore = () => {
  const { $db } = useNuxtApp();
  const db = $db;
  const saveToFirestore = async (collectionName, data, orderId) => {
    try {
      const docRef = await addDoc(collection(db, collectionName), {
        ...data,
        createdAt: /* @__PURE__ */ new Date()
      });
      return { success: true, id: docRef.id };
    } catch (error) {
      console.error("Firestore Save Error:", error);
      return { success: false, error };
    }
  };
  const updateFirestore = async (collectionName, docId, data) => {
    try {
      const docRef = doc(db, collectionName, docId);
      await updateDoc(docRef, {
        ...data,
        updatedAt: /* @__PURE__ */ new Date()
      });
      return { success: true };
    } catch (error) {
      console.error("Firestore Update Error:", error);
      return { success: false, error };
    }
  };
  const deleteFromFirestore = async (collectionName, docId) => {
    try {
      const docRef = doc(db, collectionName, docId);
      await deleteDoc(docRef);
      return { success: true };
    } catch (error) {
      console.error("Firestore Delete Error:", error);
      return { success: false, error };
    }
  };
  const getCollectionData = async (collectionName) => {
    const colRef = collection(db, collectionName);
    const snapshot = await getDocs(colRef);
    return snapshot.docs.map((doc2) => ({ id: doc2.id, ...doc2.data() }));
  };
  return { saveToFirestore, updateFirestore, deleteFromFirestore, getCollectionData };
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Input",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    type: {},
    mask: {},
    placeholder: {},
    label: {},
    error: {},
    hasError: { type: Boolean },
    icon: { type: Boolean },
    id: {},
    wrapperClass: {},
    inputClass: {}
  },
  setup(__props) {
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["relative h-[40px] flex flex-col gap-1 w-full", _ctx.wrapperClass]
      }, _attrs))}>`);
      if (_ctx.label) {
        _push(`<label${ssrRenderAttr("for", _ctx.id)} class="text-sm font-medium text-gray-700">${ssrInterpolate(_ctx.label)}</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="relative">`);
      ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
      _push(`<input${ssrRenderAttr("id", _ctx.id)}${ssrRenderAttr("type", _ctx.type)}${ssrRenderAttr("placeholder", _ctx.placeholder)}${ssrRenderAttr("value", _ctx.modelValue)} class="${ssrRenderClass([
        "w-full h-[40px] rounded-md bg-white border px-3 py-2 text-sm",
        _ctx.hasError ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500",
        _ctx.icon ? "pl-10" : "",
        _ctx.inputClass
      ])}"></div>`);
      if (_ctx.error) {
        _push(`<p class="text-xs text-red-500">${ssrInterpolate(_ctx.error)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/custom/Input.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DropDown",
  __ssrInlineRender: true,
  props: {
    items: {},
    unicId: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const isOpen = ref(false);
    const dropdownContent = ref({ name: "", id: 0, index: -1 });
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "relative h-[40px] flex flex-col gap-2",
        id: props.unicId
      }, _attrs))} data-v-3a6f5da6><div class="box-border bg-[#ffffff] rounded-md py-2 px-4 h-[40px] border border-[#DEE2E7] font-[14px] cursor-pointer" data-v-3a6f5da6>${ssrInterpolate(dropdownContent.value.name ? dropdownContent.value.name : "\u0442\u0430\u043D\u043B\u0430\u043D\u0433")}</div><div style="${ssrRenderStyle(isOpen.value ? null : { display: "none" })}" class="absolute rounded-md py-1 top-[110%] w-full z-10 bg-[#ffffff] border border-[#DEE2E7]" data-v-3a6f5da6><ul class="flex flex-col p-1 gap-1 overflow-y-auto no-scrollbar max-h-[250px]" data-v-3a6f5da6><!--[-->`);
      ssrRenderList(_ctx.items, (item, inx) => {
        _push(`<li class="" data-v-3a6f5da6><div class="${ssrRenderClass([dropdownContent.value.index == inx ? "bg-[#E5F1FF]" : "", "hover:bg-[#E5F1FF] flex justify-between cursor-pointer py-2 px-4 rounded-md"])}" data-v-3a6f5da6><div data-v-3a6f5da6>${ssrInterpolate(item.name)}</div>`);
        if (dropdownContent.value.index == inx) {
          _push(`<div class="flex items-center" data-v-3a6f5da6><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" data-v-3a6f5da6><path fill="#000" d="m10 15.17l9.192-9.191l1.414 1.414L10 17.999l-6.364-6.364l1.414-1.414z" data-v-3a6f5da6></path></svg></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></li>`);
      });
      _push(`<!--]--></ul></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/custom/DropDown.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-3a6f5da6"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "InputFileCard",
  __ssrInlineRender: true,
  props: {
    unicId: {},
    allowed: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    ref(null);
    const selectedFile = ref(null);
    const previewUrl = ref("");
    const compressedBlobUrl = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full max-w-[360px] max-h-[380px] bg-white cursor-pointer rounded-md border p-2 border-[#DEE2E7]" }, _attrs))}>`);
      if (!unref(selectedFile)) {
        _push(`<div class="rounded-md border bg-[#F7FAFC] border-[#DEE2E7] flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="300" viewBox="0 0 24 24"><path fill="#0D6EFD" d="M16.346 11.385V6.769h1v4.616zm-5.538 5.457q-.452-.269-.726-.734q-.274-.466-.274-1.031V6.769h1zM11.96 21q-2.271 0-3.846-1.595t-1.575-3.867v-8.73q0-1.587 1.09-2.697Q8.722 3 10.309 3t2.678 1.11t1.091 2.698V14h-1V6.789q-.006-1.166-.802-1.977T10.308 4q-1.163 0-1.966.821q-.804.821-.804 1.987v8.73q-.005 1.853 1.283 3.157Q10.11 20 11.961 20q.556 0 1.056-.124t.945-.372v1.11q-.468.2-.972.293q-.505.093-1.03.093m4.386-1v-2.616h-2.615v-1h2.615V13.77h1v2.615h2.616v1h-2.616V20z"></path></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(selectedFile)) {
        _push(`<div class="overflow-hidden rounded-md border border-[#DEE2E7]"><img${ssrRenderAttr("src", unref(compressedBlobUrl) || unref(previewUrl))}></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<input type="file" class="hidden" accept="image/*"></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/custom/InputFileCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    title: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "transition-all duration-100 ease-in-out p-[3px] rounded-4xl border-1 border-[#DEE2E7] active:border-[#0D6EFD] active:border-2 active:p-[2px]" }, _attrs))}><div class="h-[40px] rounded-4xl cursor-pointer bg-[#0D6EFD] border border-[#DEE2E7] flex justify-center items-center"><div class="text-white text-lg text-bold">${ssrInterpolate(props.title)}</div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/custom/Button.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const organizations = reactive([
  {
    "name": "\u0422\u0430\u043C\u043E\u0436\u043D\u0438",
    "id": 1
  },
  {
    "name": "\u0413\u0410\u0418",
    "id": 2
  },
  {
    "name": "\u041F\u0440\u043E\u043A\u0443\u0440\u0430\u0442\u0443\u0440\u0430",
    "id": 3
  },
  {
    "name": "\u041C\u0438\u0431",
    "id": 4
  },
  {
    "name": "\u0414\u0445\u0445",
    "id": 5
  },
  {
    "name": "\u041D\u0430\u043B\u043E\u0433",
    "id": 6
  },
  {
    "name": "\u041F\u041F\u0425",
    "id": 7
  },
  {
    "name": "\u041C\u0447\u0441",
    "id": 8
  },
  {
    "name": "\u041C\u0438\u043B\u0438\u0439 \u0433\u0432\u0430\u0440\u0434\u0438\u044F",
    "id": 9
  }
]);
const ranks = reactive([
  {
    "id": 1,
    "name": "\u0440\u044F\u0434\u043E\u0432\u043E\u0439"
  },
  {
    "id": 2,
    "name": "\u043C\u043B\u0430\u0434\u0448\u0438\u0439 \u0441\u0435\u0440\u0436\u0430\u043D\u0442"
  },
  {
    "id": 3,
    "name": "\u0441\u0435\u0440\u0436\u0430\u043D\u0442"
  },
  {
    "id": 4,
    "name": "\u0441\u0442\u0430\u0440\u0448\u0438\u0439 \u0441\u0435\u0440\u0436\u0430\u043D\u0442"
  },
  {
    "id": 5,
    "name": "\u043B\u0435\u0442\u0435\u043D\u0430\u043D\u0442"
  },
  {
    "id": 6,
    "name": "\u0441\u0442\u0430\u0440\u0448\u0438\u0439 \u043B\u0435\u0442\u0435\u043D\u0430\u043D\u0442"
  },
  {
    "id": 7,
    "name": "\u043A\u0430\u043F\u0438\u0442\u0430\u043D"
  },
  {
    "id": 8,
    "name": "\u043C\u0430\u0439\u043E\u0440"
  },
  {
    "id": 9,
    "name": "\u043F\u043E\u0434.\u043F\u043E\u043B\u043A\u043E\u0432\u043D\u0438\u043A"
  },
  {
    "id": 10,
    "name": "\u043F\u043E\u043B\u043A\u043E\u0432\u043D\u0438\u043A"
  }
]);
const blood_groups = ref([
  {
    "id": 1,
    "name": "I \u0433\u0440\u0443\u043F"
  },
  {
    "id": 2,
    "name": "II \u0433\u0440\u0443\u043F"
  },
  {
    "id": 3,
    "name": "III \u0433\u0440\u0443\u043F"
  },
  {
    "id": 4,
    "name": "IV \u0433\u0440\u0443\u043F"
  }
]);
const genders = [
  {
    "id": 1,
    "name": "\u043C\u0443\u0436\u0447\u0438\u043D\u0430"
  },
  {
    "id": 2,
    "name": "\u0436\u0435\u043D\u0449\u0438\u043D\u0430"
  }
];
const createOrder = async (order) => {
  const { saveToFirestore } = useFirestore();
  {
    await saveToFirestore("orders", order, order.customer.phone);
  }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const order = reactive({
      date: /* @__PURE__ */ new Date(),
      customer: {},
      full_payed: false,
      deposite: 0,
      payed_sum: 0,
      photo: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CustomInput = _sfc_main$4;
      const _component_CustomDropDown = __nuxt_component_1;
      const _component_CustomInputFileCard = _sfc_main$2;
      const _component_CustomButton = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#F7FAFC] flex flex-col p-4 gap-4" }, _attrs))}><div class="grid gap-x-4 gap-y-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"><div><label class="block text-sm font-medium mb-1">\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u0440\u0430\u043A\u0430\u043C\u0438</label>`);
      _push(ssrRenderComponent(_component_CustomInput, {
        modelValue: order.customer.phone,
        "onUpdate:modelValue": ($event) => order.customer.phone = $event,
        type: "string",
        mask: "00 000 00 00",
        placeholder: "XX XXX XX XX"
      }, null, _parent));
      _push(`</div><div><label class="block text-sm font-medium mb-1">\u0422\u0430\u0448\u043A\u0438\u043B\u043E\u0442</label>`);
      _push(ssrRenderComponent(_component_CustomDropDown, {
        modelValue: order.customer.org,
        "onUpdate:modelValue": ($event) => order.customer.org = $event,
        items: unref(organizations),
        unicId: "customOrg"
      }, null, _parent));
      _push(`</div><div><label class="block text-sm font-medium mb-1">\u041C\u0438\u0436\u043E\u0437</label>`);
      _push(ssrRenderComponent(_component_CustomInput, {
        modelValue: order.customer.name,
        "onUpdate:modelValue": ($event) => order.customer.name = $event,
        type: "string",
        placeholder: "\u0424.\u0418.\u0428"
      }, null, _parent));
      _push(`</div><div><label class="block text-sm font-medium mb-1">\u0417\u0432\u0430\u043D\u0438\u0435</label>`);
      _push(ssrRenderComponent(_component_CustomDropDown, {
        modelValue: order.customer.rank,
        "onUpdate:modelValue": ($event) => order.customer.rank = $event,
        items: unref(ranks),
        unicId: "customRank"
      }, null, _parent));
      _push(`</div><div><label class="block text-sm font-medium mb-1">\u0413\u0440\u0443\u043F\u043F\u0430 \u043A\u0440\u043E\u0432\u0438</label>`);
      _push(ssrRenderComponent(_component_CustomDropDown, {
        modelValue: order.customer.blood_group,
        "onUpdate:modelValue": ($event) => order.customer.blood_group = $event,
        items: unref(blood_groups),
        unicId: "bloodGroup"
      }, null, _parent));
      _push(`</div><div><label class="block text-sm font-medium mb-1">\u041F\u043E\u043B</label>`);
      _push(ssrRenderComponent(_component_CustomDropDown, {
        modelValue: order.customer.gender,
        "onUpdate:modelValue": ($event) => order.customer.gender = $event,
        items: unref(genders),
        unicId: "gender"
      }, null, _parent));
      _push(`</div></div><div>`);
      _push(ssrRenderComponent(_component_CustomInputFileCard, {
        unicId: "customer-sizes",
        modelValue: order.photo,
        "onUpdate:modelValue": ($event) => order.photo = $event
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_CustomButton, {
        title: "\u0421\u0430\u049B\u043B\u0430\u0448",
        onClick: ($event) => unref(createOrder)(order)
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/order-form/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DYzf83fl.mjs.map
