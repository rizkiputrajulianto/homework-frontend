<template>
  <div>
    <!-- {{ listSession }} -->
    <div class="row">
      <div class="col-md-3 w-100">
        <div class="row">
          <div class="col-md-12" v-for="(item, i) in listSession" :key="i">
            <item-list :sesi="item.session" />
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <div class="row">
          <div class="col-md-4">
            <item-materi />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      jadwals: "Fullstack",
    };
  },
  computed: {
    listSession() {
      return this.$store.state.jadwal.Fullstack.jadwal;
    },
  },
};
</script>