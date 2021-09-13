<template>
  <div class="q-pa-md">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      animated
      control-color="primary"
      class="rounded-borders">
      <q-carousel-slide name="style" class="column no-wrap flex-center">
        <q-icon name="style" color="primary" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="column no-wrap flex-center">
        <q-icon name="live_tv" color="primary" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column no-wrap flex-center">
        <q-icon name="layers" color="primary" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="map" class="column no-wrap flex-center">
        <q-icon name="terrain" color="primary" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
    </q-carousel>

    <div class="row justify-center">
      <q-btn-toggle
        glossy
        v-model="slide"
        :options="[
          { label: 1, value: 'style' },
          { label: 2, value: 'tv' },
          { label: 3, value: 'layers' },
          { label: 4, value: 'map' }]"/>



    <div class="col-12 col-sm-6">
    <div class=" q-pa-md q-gutter-sm text-center"> 
    <div class=" q-pa-md q-gutter-sm text-center"> 
    <div class=" q-pa-md q-gutter-sm text-center">
    <q-btn color="primary" @click="showTextLoading">
    Mostrar carga de texto
    </q-btn>
    </div>
    
    <q-card class="bg-grey-4 relative-position card-example">
      <q-card-section class="q-pb-none">
        <div class="text-h6 text-center">History</div>
      </q-card-section>

      <q-card-section>
        <transition class="text-justify" appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
          <div v-show="showSimulatedReturnData">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel magna 
            eu risus laoreet tristique. Nulla ut fermentum elit, nec consequat augue. 
            Morbi et dolor nec metus tincidunt pellentesque. Nullam non semper ante. 
            Fusce pellentesque sagittis felis quis porta. Aenean condimentum neque sed 
            erat suscipit malesuada. Nulla eget rhoncus enim. Duis dictum interdum eros.
          </div>
        </transition>
      </q-card-section>

      <q-inner-loading :showing="visible">
        <q-spinner-gears size="50px" color="primary" />
      </q-inner-loading>
    </q-card>

          </div>
          </div>
          </div>
            </div>
            
            </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {

     const visible = ref(false)
    const showSimulatedReturnData = ref(false)
    return {
      slide: ref('style'),
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo provident incidunt ducimus iusto perferendis porro earum. Totam, numquam?',

       visible,
      showSimulatedReturnData,

      showTextLoading () {
        visible.value = true
        showSimulatedReturnData.value = false

        setTimeout(() => {
          visible.value = false
          showSimulatedReturnData.value = true
        }, 3000)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.card-example
  width: 288px
  height: 290px
</style>