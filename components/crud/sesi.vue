<template>
  <div>
    <div class="card">
      ini list data {{ list }}
      <br />
      URL SLUG {{ $route.params.main }} {{ $route.params.add }}
      <div class="card-body">
        <form @submit.prevent="submitDate">
          <div class="form-group">
            <label for="namaSesi">Judul</label>
            <input
              type="text"
              id="namaSesi"
              class="form-control"
              v-model="list.judul"
            />
          </div>
          <div class="form-group">
            <label for="tanggalStart">Tanggal</label>
            <input
              type="date"
              id="tanggalStart"
              class="form-control"
              v-model="list.tanggal"
            />
          </div>
          <div class="pt-3 text-right">
            <button type="button" class="btn btn-danger mr-2">Back</button>
            <button type="submit" class="btn btn-warning">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: { type: String, default: "Nama" },
    deskripsi: { type: String, default: "Deskripsi" },
    startDate: { type: String, default: "01-01-2001" },
    endDate: { type: String, default: "02-01-2001" },
    update: { type: Boolean },
  },
  data() {
    return {
      kelas: this.$route.params.main,
      sesi: this.$route.params.add,
      list: {
        session: "",
        judul: "",
        materi: "",
        tanggal: "",
      },
    };
  },
  mounted() {
    if (this.$route.params.main && this.$route.params.add) this.getData();
  },
  methods: {
    getData() {
      const data = this.getDatas(this.kelas, this.sesi);
      console.log(data);
      this.list = {
        session: data.session,
        judul: data.judul,
        materi: data.materi,
        tanggal: data.tanggal,
      };
    },
    submitDate() {
      const data = {
        name: this.kelas,
        jadwal: this.list,
      };
      this.$store.dispatch("jadwal/edit", data);
    },
  },
};
</script>