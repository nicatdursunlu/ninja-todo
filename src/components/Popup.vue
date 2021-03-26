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
      <v-card-text>
        <v-form class="px-5">
          <v-text-field prepend-icon="folder" label="Title" v-model="title"/>
          <v-textarea prepend-icon="edit" label="Information" v-model="content"/>
          <v-menu>
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                  :value="formattedDate"
                  prepend-icon="date_range"
                  label="Due date"
                  v-bind="attrs"
                  v-on="on"
                  @click:clear="due = null"
              />
            </template>
            <v-date-picker v-model="due"/>
          </v-menu>
          <v-spacer/>
          <v-btn @click="submit" class="green accent-3 mx-0 mt-3" plain dark>Add project</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import {format, parseISO} from 'date-fns'

export default {
  data: () => ({
    title: '',
    content: '',
    due: null
  }),
  methods: {
    submit() {
      console.log(this.title, this.content)
    }
  },
  computed: {
    formattedDate() {
      return this.due ? format(parseISO(this.due), 'do MMMM yyyy') : ''
    }
  }
}
</script>

<style scoped>

</style>