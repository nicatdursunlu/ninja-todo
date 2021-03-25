<template>
  <v-dialog max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          color="green accent-3"
          dark
          v-bind="attrs"
          v-on="on"
      >
        Add new project
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2>Add a New Project</h2>
      </v-card-title>

    </v-card>
  </v-dialog>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>