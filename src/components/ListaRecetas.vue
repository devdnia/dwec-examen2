<template>
  <table>
    <h3>RECEPTES</h3>
    <tbody>
      <tr
        v-for="recepta in receptes"
        :key="recepta.id"
        @click="veureRecepta(recepta.id)"
      >
        <td>{{ recepta.autor }}</td>
        <td>{{ recepta.titol }}</td>
      </tr>
    </tbody>
    <router-link to="/nuevarecepta">Nova recepta</router-link>
  </table>
</template>

<script>
import { getReceptes } from "../api/api";

export default {
  data() {
    return {
      receptes: Array,
    };
  },
  methods: {
    async fetchReceptes() {
      this.receptes = await getReceptes();
    },
    veureRecepta( id ){
        this.$router.push({ name: "Recepta", params:{ id}})
        console.log( id );

    }
  },
  async mounted() {
    this.fetchReceptes();
  },
};
</script>

<style>
</style>