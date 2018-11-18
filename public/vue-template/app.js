const SECTIONS = "all, white, red, blue, grees, pink";
const SIZELIST = "XS, S, M, L, LL, 3L"

Vue.component('item-list', {
  props: ['items', 'size'],
  template: `
    <section>
      <div class="row mb-5">
        <div class="col-md-12 order-2">
            <div class="row mb-5">
              <div class="col-sm-6 col-lg-4 mb-4" data-aos="fade-up" v-for="item in items">
                <div class="block-4 text-center border">
                  <div class="card-divider">
                    {{ item.title }}
                  </div>
                  <figure class="block-4-image">
                    <a href="item"><img :src="item.image_url" alt="Image placeholder" class="img-fluid"></a>
                    <!--<a :href="item.url" target="_blank"><img :src="item.image_url"></a>-->
                  </figure>

                    
                  <div class="card-section">
                    <p>{{ item.price }}</p>
                    <select v-model="size">
                      <option v-for="size in item.present_stock_size" :value="size">{{ size }}</option>
                    </select>
                    <p>{{ size }}</p>
                    <a href="item" class="button">Add To Cart</a>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>

        <!--<div class="row mb-5">-->
          <!--<div class="col-md-12 order-2">-->

            <!--<div class="row mb-5">-->

              <!--<div class="col-sm-6 col-lg-4 mb-4" data-aos="fade-up" v-for="item in items">-->
                <!--<div class="block-4 text-center border">-->
                  <!--<figure class="block-4-image">-->
                    <!--<a href="item"><img :src="item.image_url" alt="Image placeholder" class="img-fluid"></a>-->
                  <!--</figure>-->
                  <!--<div class="block-4-text p-4">-->
                    <!--<h3><a href="item">Tank Top</a></h3>-->
                    <!--<p class="mb-0">Finding perfect t-shirt</p>-->
                    <!--<p class="text-primary font-weight-bold">{{ item.price }}</p>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->

            <!--</div>-->
          <!--</div>    -->
  `,
});

const vm = new Vue({
  el: '#app',
  data: {
    items: [
      {title: "タイトル1", price: 2000, url: "", image_url: "./images/sample1.png", present_stock_size: ["S", "M"], size: "M"},
      {title: "タイトル2", price: 2400, url: "", image_url: "./images/sample2.png", present_stock_size: ["S", "L"], size: "S"},
      {title: "タイトル3", price: 2600, url: "", image_url: "./images/sample3.png", present_stock_size: ["S",], size: "S"},
      {title: "タイトル4", price: 2000, url: "", image_url: "./images/sample4.png", present_stock_size: ["M"], size: "M"},
      {title: "タイトル5", price: 2400, url: "", image_url: "./images/sample5.png", present_stock_size: ["M"], size: "M"},
      {title: "タイトル6", price: 2600, url: "", image_url: "./images/sample6.png", present_stock_size: ["S", "M", "L"], size: "S"},
      {title: "タイトル7", price: 2000, url: "", image_url: "./images/sample7.png", present_stock_size: ["S", "M"], size: "S"},
      {title: "タイトル8", price: 2400, url: "", image_url: "./images/sample8.png", present_stock_size: ["S"], size: "S"},
      {title: "タイトル9", price: 2600, url: "", image_url: "./images/sample9.png", present_stock_size: ["L", "LL", "3L"], size: "L"},
    ],
    sections: SECTIONS.split(', '), // create an array of the sections
    sizelist: SIZELIST.split(', '), // create an array of the sections
    section: 'white', // set default section to 'home'
    size: 'M',
    loading: true,
    title: ''
  },
  mounted() {
    this.getItems('all');
  },
  methods: {
    getItems(section) {
      console.log("---アイテム取得---");
      this.loading = false;
    }
  },
});
