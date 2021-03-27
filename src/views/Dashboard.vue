<template>
  <div class="dashboard">
    <h1 class="subtitle-2 grey--text">Dashboard</h1>
    <v-container class="my-10">
      <v-layout row class="mb-8">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small class="grey white--text mr-3" @click="sortBy('title')" slot="activator" v-bind="attrs"
                   v-on="on">
              <v-icon left small>folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort projects by project name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small class="grey white--text" @click="sortBy('person')" slot="activator" v-bind="attrs" v-on="on">
              <v-icon left small>person</v-icon>
              <span class="caption text-lowercase">By person</span>
            </v-btn>
          </template>
          <span>Sort projects by person</span>
        </v-tooltip>
      </v-layout>

      <v-card flat class="grey lighten-4" v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-6 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project Title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="right">
              <v-chip small :class="`white--text my-3 caption ${project.status}`">{{ project.status }}</v-chip>
            </div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import db from "@/fb";

export default {
  data: () => ({
    projects: [

    ]
  }),
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
    },
  },
  created() {
    db.collection('projects').onSnapshot(res => {
      const updates = res.docChanges();
      console.log("updates", updates)

      updates.forEach(update => {
        if(update.type === 'added') {
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
.project.complete {
  border-left: 4px solid #3cd1c2;
}

.project.ongoing {
  border-left: 4px solid orange
}

.project.overdue {
  border-left: 4px solid tomato;
}

.v-chip.complete {
  background: #3cd1c2;
}

.v-chip.ongoing {
  background: #ffaa2c;
}

.v-chip.overdue {
  background: #f83e70;
}
</style>