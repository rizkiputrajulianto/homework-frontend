<template>
  <div>
    <!-- {{ listSession }}
    <hr />
    {{ listMateri }} -->
    <div class="row">
      <div class="col-md-3 w-100">
        <div class="row">
          <div class="col-md-12" v-for="(item, i) in listSession" :key="i">
            <item-list
              :sesi="item.session"
              @change="(val) => (mat = val - 1)"
            />
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <div class="row">
          <div
            class="col-md-4"
            v-for="(item, index) in listSession"
            :key="index"
          >
            <div v-if="index === mat">
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
      id: 0, //untuk data kelas
      mat: 0, //untuk sesi
      // kelas: this.$route.params.id
      // jadwals: "Fullstack",
    };
  },
  computed: {
    listSession() {
      return this.$store.state.jadwal.data[this.id].jadwal; //test
      // return.this.$store.state.jadwal.data[kelas]
      //yang diatas ini universal
    },
    listMateri() {
      return this.listSession[this.mat];
    },
  },
};
</script>