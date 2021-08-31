<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn label="Informacion" color="primary" @click="dialog = true" />


    <q-tabs
        v-model="tab"
        class="text-teal"
      >
        <q-tab name="mails" icon="mail" label="Mails" />
        <q-tab name="alarms" icon="alarm" label="Alarms" />
        <q-tab name="movies" icon="movie" label="Movies" />
      </q-tabs>


     

    <q-dialog
      v-model="dialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down">

      <q-card class="bg-primary text-white">
        <q-bar>
          <q-space />

          <q-btn dense flat icon="minimize" @click="maximizedToggle = false" :disable="!maximizedToggle">
            <q-tooltip v-if="maximizedToggle" class="bg-white text-primary">Historia</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="crop_square" @click="maximizedToggle = true" :disable="maximizedToggle">
            <q-tooltip v-if="!maximizedToggle" class="bg-white text-primary">Historial</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div class="text-h5 text-color-red">Informacion</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
        Todas las notas aqui en presente vista son las ultimas notas vista modificadas.
        <br> <br>
        Esta aplicacion tiene versiones desde 1.0 hasta 1.5 
        </q-card-section>

    </q-card>
    </q-dialog>

    </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
        tab: ref('mails'),
      dialog: ref(false),
      maximizedToggle: ref(true)

    }
  }
}
</script>


<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>