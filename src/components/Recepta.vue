<template>
  <div class="container d-flex flex-column align-items-center">
    <div v-if="recepta" class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">{{ recepta.titol }}</h5>
        <p class="card-text">Autor: {{ recepta.autor }}</p>
        <p class="card-text">Email: {{ recepta.email }}</p>
        <p class="card-text">Descripció: {{ recepta.descripcio }}</p>
        <p class="card-text">Ingredients: {{ recepta.ingredients }}</p>
        <p class="card-text">Instruccions: {{ recepta.instruccions }}</p>

        <button @click="editaRecepta(recepta.id)" class="btn btn-success me-4">
          Editar recepta
        </button>
        <button @click="eliminarRecepta" class="btn btn-danger">
          Eliminar
        </button>
      </div>
    </div>
    <div v-else>
      <p>Error al cargar</p>
    </div>
  </div>
</template>

<script>
import { getRecepta, deleteRecepta } from "../api/api";

export default {
  data() {
    return {
      recepta: null,
    };
  },
  methods: {
    async fetchRecepta() {
      const receptaId = this.$route.params.id
      if (receptaId) {
        try {
          this.recepta = await getRecepta(receptaId);
        } catch (error) {
          console.log(`Error al obtener la receta: ${receptaId}`);
        }
      }
    },
    async eliminarRecepta() {
      const receptaId = this.$route.params.id
      console.log( typeof(receptaId));
      await deleteRecepta(receptaId);

      //Navegar al home después del borrado
      this.$router.replace({ name: "Home" });
    },
    editaRecepta( id ){
      this.$router.push({ name: 'editarecepta', params: { id }})
    }
  },

  async mounted() {
    this.fetchRecepta()
  },
};
</script>

<style>
</style>