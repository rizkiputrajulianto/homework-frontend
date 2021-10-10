<template>
    <div>
    <div class="row">
      <div class="col-md" v-for="(item,i) in listClass" :key="i">
        <class-item :id="item.id" :name="item.name" :desc="item.description" :img="item.img" :start="item.startDate" :end="item.endDate"/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.getListClass();
  },
  data() {
    return {
      listClass: [],
    };
  },
  methods: {
    detail(id) {
      this.$router.push(`${id}`);
    },
    async getListClass() {
      const ListClass = await this.$axios.$get("api/class");
      this.listClass = ListClass.data;
    },
  },
};
</script>