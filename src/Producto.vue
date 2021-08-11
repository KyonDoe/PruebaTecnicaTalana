<template>
  <v-card
    class="mx-auto"
    max-width="310"
  >
    <v-img
      class="mx-auto"
      max-width="150"
      max-height="175"
      :src=prod.photo
    ></v-img>

    <v-card-title>
      {{ prod.name }}
    </v-card-title>

    <v-card-subtitle>
      ${{ prod.price }}
      <br>
      Stock: {{ prod.stock }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Agregar al carro
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ prod.abstract }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
  export default {
    props: {
      prod: Object
    },
    name: "CardProductos",
    data: () => ({
      show: false,
      producto: {
        prodName: '',
        prodPrice: "",
        prodStock: "",
        prodDescription: "",
        prodPhoto: ""
      },
    })
  }
</script>