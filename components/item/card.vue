<template>
  <div>
    <div class="card" style="width: 18rem">
      <!-- <img :src="this.img" class="card-img-top" :alt="this.alt" /> -->
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <button
          type="button"
          class="btn btn-transparent text-black"
          data-toggle="modal"
          :data-target="'#exampleModal' + this.idHtml"
        >
          Lihat Kelas
        </button>
      </div>
    </div>
    <div
      class="modal fade"
      :id="'exampleModal' + this.idHtml"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ title }}</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">{{ desc }}</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: { type: String, default: "Judul" },
    desc: { type: String, default: "ini deskripsinya" },
    img: { type: String, default: "link img" },
    alt: { type: String, default: "Gambar tidak ada" },
    to: { type: String, default: "/" },
    idHtml: { type: Number, default: 0 },
  },
};
</script>