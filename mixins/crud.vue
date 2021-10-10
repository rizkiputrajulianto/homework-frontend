<script>
export default {
  data() {
    return {
      listUpdate: {},
    };
  },
  computed: {
    listData() {
      return this.$store.state.jadwal.data;
    },
  },
  methods: {
    //buat update
    getDatas(kelas, list) {
      //   console.log(this.listData);
      this.listData.map((x) => {
        if (kelas == x.name) {
          const datas = x.jadwal;
          console.log(datas);
          datas.map((y) => {
            if (list == y.session) {
              this.listUpdate = y;
              //   const kelass = y;
              //   console.log(kelass);
              //     return kelass.map((item) => {
              //       return item;
              //     });
            }
          });
        }
      });
      //   return this.listData;
      return this.listUpdate;
    },
  },
};
</script>
