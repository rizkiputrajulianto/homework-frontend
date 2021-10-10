<template>
  <div>
    {{ listSession }}
    <hr />
    <div class="row">
      <div class="col-md-3 w-100">
        <div class="row">
          <div
            class="col-md-12"
            v-for="(item, i) in listSession.jadwal"
            :key="i"
          >
            <item-list :sesi="item.session" @change="(val) => (mat = val)" />
          </div>
        </div>
        <nuxt-link
          class="nav-link text-warning"
          :to="'/' + listSession.name + '/' + 1"
          >+ Session</nuxt-link
        >
      </div>
      <div class="col-md-9">
        <div class="row">
          <div
            class="col-md-4"
            v-for="(item, index) in listSession.jadwal"
            :key="index"
          >
            <div v-if="item.session === mat">
              <div v-for="(items, i) in item.materi" :key="i">
                <item-materi
                  :title="items.namaMateri"
                  :tanggal="item.tanggal"
                  :materi="items.file"
                />
              </div>
            </div>
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
      id: this.$route.params.main, //untuk data kelas
      mat: 1, //untuk sesi
      // kelas: this.$route.params.id
      // jadwals: "Fullstack",
    };
  },
  computed: {
    listSession() {
      return this.$store.state.jadwal.data[this.id]; //test
      // return.this.$store.state.jadwal.data[kelas]
      //yang diatas ini universal
    },
    // listMateri() {
    //   return this.listSession;
    // },
  },
};
</script>