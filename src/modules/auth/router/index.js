export default {
  name: 'auth',
  component: () =>
    import(
      /* webpackChunkName: "authLayout" */ '@/modules/auth/layouts/AuthLayout.vue'
    ),
  children: [],
};
