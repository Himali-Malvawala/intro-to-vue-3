const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true,
      details: [
        { point: 1, desc: "whoho point 1" },
        { point: 2, desc: "whoho point 2" },
      ],
    };
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    // removeCart(id) {
    //   const index = this.cart.indexOf(id);
    //   if (index > -1) {
    //     this.cart.splice(index, 1);
    //   }
    // },
  },
});
