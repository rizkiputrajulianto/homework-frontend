<template>
  <div class="card">
    <div class="card-body">
    <img :src="img" class="card-img-top" :alt="'foto ' +name">
        <h5 class="card-title">{{name}}</h5>
      <p class="card-text">{{desc}}</p>
<button type="button" class="btn btn-primary" onclick="id" data-toggle="modal" data-target="#exampleModal">
  Details
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Detail</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h4>deskripsi</h4>
        <p>{{desc}}</p>
        <h4>Jadwal</h4>
        <p>{{start}}</p>
        <p>{{end}}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>      
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: Number,
    },
    name: {
      type: String,
      default: "Nama Kelas",
    },
    desc: {
      type: String,
      default: "Ini deskripsi kelasnya ya",
    },
    img: {
      type: String,
      default: "https://i.pinimg.com/originals/e5/14/ed/e514ed267f3416f81b7b538e8d08ab93.jpg",
    },
    start: {
      type: String,
      default: "01-01-2021"
    },
    end: {
      type: String,
      default: "31-12-2021"
    }
  },
}
</script>
