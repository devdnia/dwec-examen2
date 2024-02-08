<template>
  <!-- SI NO HAY DATOS -->
  <div class="d-flex justify-content-center align-items-center">
    <div class="card m-3 w-50">
      <h5 class="card-header">
        NOVA RECEPTA
      </h5>
      <div class="card-body d-flex flex-column align-items-center">
        <Form
          @submit="onSubmit"
          :validation-schema="schema"
          v-slot="{ errors }"
          class="w-50 d-flex flex-column"
        >
          <!-- autor -->
          <div class="form-group">
            <label>AUTOR</label>
            <Field
              name="autor"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors.receptaId }"
            />
            <div class="invalid-feedback">{{ errors.receptaId }}</div>
          </div>

          <!-- email -->
          <div class="form-group">
            <label>EMAIL:</label>
            <Field
              name="email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors.receptaId }"
            />
            <div class="invalid-feedback">{{ errors.receptaId }}</div>
          </div>

          <!-- TITOL -->
          <div class="form-group">
            <label>Titol:</label>
            <Field
              name="titol"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors.receptaId }"
            />
            <div class="invalid-feedback">{{ errors.receptaId }}</div>
          </div>

          <!-- descripció -->
          <div class="form-group">
            <label>Descripció</label>
            <Field
              name="descripcio"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors.receptaId }"
            />
            <div class="invalid-feedback">{{ errors.receptaId }}</div>
          </div>

          <!-- ingredients -->
          <div class="form-group">
            <label>Ingredients</label>
            <Field
              name="ingredients"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors.receptaId }"
            />
            <div class="invalid-feedback">{{ errors.receptaId }}</div>
          </div>

          <!-- instruccions -->
          <div class="form-group">
            <label>Instruccions</label>
            <Field name="instruccsions" type="text" class="form-control" />
          </div>

          <div class="form-group mt-5">
            <button type="submit" class="btn btn-success me-3">
              Guardar &nbsp; 🚀
            </button>
            <button @click="goHome" class="btn btn-secondary">
              Cancelar &nbsp; 😟
            </button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import { createRecepta } from "../api/api"

export default {
    components:{
        Form,
        Field
    },
  data() {
    const schema = Yup.object().shape({
      autor: Yup.string().required("El autor es obligatorio"),
      email: Yup.string()
        .required("Email es obligatorio")
        .email("Correo no valido"),
      titol: Yup.string().required("El titulo es obligatorio"),
      descripcio: Yup.string().required("La descripcio es obligatoria"),
      ingredients: Yup.string().required("Ingredientes obligatorios"),
      instruccions: Yup.string(),
    });
    return {
      newRecepta: {
        autor: null,
        email: null,
        titol: null,
        descripcio: null,
        ingredients: null,
        instruccions: null,
      },
      schema,
    };
  },
  methods: {
    // Navegación
    goHome() {
      this.$router.push("/");
    },

    async onSubmit(values) {
      // let id = crypto.randomUUID();
      //this.newRecepta.mission_id = values.missionId;
      this.newRecepta.autor = values.autor;
      this.newRecepta.email = values.email;
      this.newRecepta.titol = values.titol;
      this.newRecepta.descripcio = values.descripcio;
      this.newRecepta.ingredients = values.ingredients;
      this.newRecepta.instruccions = values.instruccions;

    
      if (!this.newRecepta.instruccions) {
        this.newRecepta.mission_patch_small =
          "No hay instrucciones";
      }

      try {
        await createRecepta(this.newRecepta);
        this.goHome();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style>