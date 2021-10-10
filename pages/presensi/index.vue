<template>
  <div>
      <h1>SPV</h1>
    <div class="row">
      <div class="col-md-4" v-for="(user,i) in listTeacher" :key="i">
        <class-item :name="user.name" :desc="user.desc" />
      </div>
    </div>
    <h1>Student</h1>
    
    <div class="row">
      <div class="col-md-4" v-for="(user,i) in listStudent" :key="i">
        <class-item :name="user.name" :desc="user.desc" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  asyncData() {
    return {
      listTeacher: [
        { name: "student", desc: "desc" },
        { name: "student", desc: "desc" },
      ],
      listStudent: [
        { name: "student", desc: "desc" },
        { name: "student", desc: "desc" },
        { name: "student", desc: "desc" },
        { name: "student", desc: "desc" },
        { name: "student", desc: "desc" },
      ],
    };
  },
};
</script>