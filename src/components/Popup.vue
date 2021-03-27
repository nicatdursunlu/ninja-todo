<template>
  <v-dialog max-width="600px" v-model="dialog">
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
        <v-form class="px-5" ref="form">
          <v-text-field prepend-icon="folder" label="Title" v-model="title" :rules="inputRules"/>
          <v-textarea prepend-icon="edit" label="Information" v-model="content" :rules="inputRules"/>
          <v-menu>
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                  :value="formattedDate"
                  prepend-icon="date_range"
                  label="Due date"
                  v-bind="attrs"
                  v-on="on"
                  @click:clear="due = null"
                  :rules="inputRules"
              />
            </template>
            <v-date-picker v-model="due"/>
          </v-menu>
          <v-spacer/>
          <v-btn @click="submit" class="green accent-3 mx-0 mt-3" plain dark :loading="loading">
            <v-icon left>add</v-icon>
            <span>Add project</span>
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import {format, parseISO} from 'date-fns'
import db from "@/fb";

export default {
  data: () => ({
    title: '',
    content: '',
    due: null,
    inputRules: [
        v => v.length >= 3 || 'Minimum length is 3 characters'
    ],
    loading: false,
    dialog: false,
  }),
  methods: {
    submit() {
      if(this.$refs.form.validate()) {
        this.loading = true;

        const project = {
          title: this.title,
          content: this.content,
          due: format(parseISO(this.due), 'do MMMM yyyy'),
          person: 'Nijat Dursunlu',
          status: 'ongoing'
        }

        db.collection('projects').add(project).then(() => {
          console.log("added to database")
          this.loading = false;
          this.dialog = false;
          this.$emit('projectAdded');
        })

      }
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