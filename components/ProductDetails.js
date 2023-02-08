app.component("product-details", {
  props: {
    details: {
      type: Array,
      required: true,
    },
  },
  template:
    /*html*/
    `
    <div>
    <ul>
    <li v-for="(detail, index) in details" :key="index">{{detail.desc}}</li></ul>
    </div>
    
    `,
});
