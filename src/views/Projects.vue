<template>
  <div class="projects">
    <h1 class="subtitle-2 grey--text">Projects</h1>

    <v-container class="my-10">
      <v-expansion-panels>
        <v-expansion-panel v-for="project in myProjects" :key="project.title">
          <v-expansion-panel-header>{{ project.title }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card flat>
              <v-card-text class="px-4 grey--text">
                <div class="font-weight-bold">Due by {{ project.due }}</div>
                <div>{{ project.content }}</div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
import db from "@/fb";

export default {
  data: () => ({
    projects: []
  }),
  computed: {
    myProjects() {
      return this.projects.filter(project => {
        return project.person === 'Nijat Dursunlu'
      })
    }
  },
  created() {
    db.collection('projects').onSnapshot(res => {
      const updates = res.docChanges();
      console.log("updates", updates)

      updates.forEach(update => {
        if (update.type === 'added') {
          this.projects.push({
            ...update.doc.data(),
            id: update.doc.id,
          })
        }
      })
    })
  }
}
</script>

<style scoped>

</style>