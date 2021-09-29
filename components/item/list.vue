<template>
  <div>
    <!-- <div> -->
    <div class="row">
      <div class="col-9">
        <button
          type="button"
          @click="change(sesi)"
          class="
            btn btn-warning
            border border-warning border-lg
            rounded-lg
            w-100
            m-0
          "
        >
          Session : <span>{{ sesi }}</span>
        </button>
      </div>
      <div class="col-3">
        <button class="btn btn-warning border border-warning rounded-lg m-0">
          <span><i class="fas fa-ellipsis-v"></i></span>
        </button>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>
<script>
export default {
  props: {
    sesi: { type: Number, default: 0 },
  },
  methods: {
    change(list) {
      this.$emit("change", list);
    },
  },
};
</script>