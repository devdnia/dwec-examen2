<template>
  <!-- Si hay lanzamiento -->
  <div class="d-flex justify-content-center align-items-center" v-if="recepta">
    <div class="card m-3 w-50">
      <h5 class="card-header">EDITA RECEPTA</h5>
      <div class="card-body d-flex flex-column align-items-center">
        <form @submit.prevent="saveChangesRecepta">
          <!-- AUTOR -->
          <div class="form-group p-2">
            <label for="autor">AUTOR:</label>
            <input
              id="autor"
              type="text"
              class="form-control"
              placeholder="Autor"
              v-model="recepta.autor"
            />
          </div>

          <!-- EMAIL -->
          <div class="form-group p-2">
            <label for="email">EMAIL:</label>
            <input
              id="email"
              type="email"
              class="form-control"
              placeholder="Correo electronic"
              v-model="recepta.email"
            />
          </div>

          <!-- Titol -->
          <div class="form-group p-2">
            <label for="titol">TITOL:</label>
            <input
              id="titol"
              type="text"
              class="form-control"
              placeholder="Titol"
              v-model="recepta.titol"
            />
          </div>

          <!-- Descripció -->
          <div class="form-group mb-5 p-2">
            <label for="img">DESCRIPCIÓ:</label>
            <input
              id="descripcio"
              type="text"
              class="form-control"
              placeholder="descripcio"
              v-model="recepta.descripcio"
            />
          </div>

          <!-- Instruccions -->
          <div class="form-group mb-5 p-2">
            <label for="instruccions">INSTRUCCIONS:</label>
            <input
              id="instruccions"
              type="text"
              class="form-control"
              placeholder="instruccions"
              v-model="recepta.instruccions"
            />
          </div>
          <!-- Botones de formulario -->
          <button type="submit" class="btn btn-success mt-3 me-3">
            Guardar
          </button>

          <button @click="goHome" class="btn btn-secondary mt-3">
            Salir
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { getRecepta, updateRecepta } from "../api/api";

export default {
  data() {
    return {
      recepta: null,
      newRecepta: {
        mission_id: null,
        mission_name: null,
        launch_year: null,
        mission_patch_small: null,
      },
    };
  },
  methods: {
    async fechtRecepta() {
      const receptaId = this.$route.params.id;
      if (receptaId) {
        try {
          this.recepta = await getRecepta(receptaId);
        } catch (error) {
          console.log(`Error al obtener la recepta: ${receptaId}`);
        }
      }
    },
    async saveChangesRecepta() {
      try {
        await updateRecepta(this.recepta.id, this.recepta);
        this.goHome();
      } catch (error) {
        console.error("Error al actualizar la recepta:", error);
      }
    },
        // Navegación
        goHome() {
      this.$router.push("/receptes");
    },
  },

  async mounted() {
    this.fechtRecepta();
  },
};
</script>

<style>
</style>