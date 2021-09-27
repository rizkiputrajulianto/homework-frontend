<template>
  <div>
    <div>
      <nuxt-link
        :to="'/main/' + this.session"
        class="
          btn btn-warning
          border border-warning border-lg
          rounded-lg
          py-2
          pl-1
          pr-5
        "
        >Session : <span>{{ sesi }}</span></nuxt-link
      ><button class="btn btn-warning border border-warning rounded-lg">
        <span><i class="fas fa-ellipsis-v"></i></span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    sesi: { type: String, default: "0" },
  },
};
</script>