<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-container class="py-0 fill-height">

        <v-btn
          v-for="link in links"
          :key="link"
          text
        >
          {{ link }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list color="transparent">

                <v-list-item
                  color="grey lighten-4"
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      Categorias
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item
                  v-for="categoria in categorias"
                  link
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ categoria.name }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <!--  -->
              <v-row>

                <v-col sm="3" v-for="(producto, index) in productos" :key="index" >
                    <CardProductos :prod="producto" />
                </v-col>

              </v-row>
<!--               <v-list-item v-for="producto in productos">
                <CardProductos :prod="producto"/>
              </v-list-item> -->

            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

  import CardProductos from './Producto.vue'

  export default {
    components:{
      CardProductos
    },
    data: () => ({
      categorias: null,
      productos: null,
      searchCategoria: null, 
      links: [
        'Inicio',
        'Quienes somos',
        'Nuestra ubicación',
        'Contactenos',
      ],
    }),
    mounted () {
      this.$axios
        .get('http://sva.talana.com:8000/api/product-category/')
        .then(response => (this.categorias = response.data));
      this.$axios
        .get('http://sva.talana.com:8000/api/product/')
        .then(response => (this.productos = response.data));
    }
  }
</script>
