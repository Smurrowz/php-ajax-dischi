const app = new Vue({
  el: '#app',
  data: {
    albums: []
  },
  methods: {
    fetchAlbums() {
      axios.get('./api/')
        .then(res => {
          // console.log(res.data);
          const { response } = res.data;
          this.albums = response;
          this.ogAlbums = response;
          console.log(this.albums);
        })
    },
  },
  created() {
    this.fetchAlbums();
  },

})