<template>
  <div>
    <div class="card shadow bg-warning w-auto">
      <div class="row p-3">
        <div class="col-8">
          {{ title }} <br />
          {{ tanggal }}
        </div>
        <div class="col-4">
          <button class="btn btn-warning">
            <i class="fas fa-ellipsis-v"></i>
          </button>
        </div>
      </div>

      <hr />
      <div class="card-body">
        <a href="#" class="text-white"
          ><i class="fas fa-file-download text-dark"></i> {{ materi }}</a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: { type: String, default: "Judul Materi" },
    tanggal: { type: String, default: "1 Januari 2021" },
    file: { type: String, default: "" },
    materi: { type: String, default: "Intro" },
  },
};
</script>