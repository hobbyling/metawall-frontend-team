<script setup>
import { ref } from '@vue/runtime-core'
import { storeToRefs } from 'pinia'
import { useModalStore } from '../stores/modalStore'
import Header from './../components/Header.vue'
import Navigation from './../components/Navigation.vue'
import ModalPost from './../components/ModalPost.vue'
import ModalLoader from './../components/ModalLoader.vue'
import ModalFollows from './../components/ModalFollows.vue'
import ModalLikes from './../components/ModalLikes.vue'


// ModalPost control
const modalStore = useModalStore()

const { useModalPost, useModalFollows, useModalLikes, useModalLoader } = storeToRefs(modalStore)

</script>

<template>
  <div class="main-wrapper">
    <!-- header -->
    <Header />
    <!-- main -->
    <main class="space-lr">
      <div class="main-content mw-1200">
        <!-- nav -->
        <div class="nav-wrap">
          <Navigation />
        </div>
        <!-- view -->
        <div class="main-view">
          <router-view></router-view>
        </div>
      </div>
      <!-- modal -->
      <Transition name="clip">
        <ModalPost v-if="useModalPost" />
      </Transition>
      <Transition name="clip">
        <ModalFollows v-if="useModalFollows" />
      </Transition>
      <Transition name="clip">
        <ModalFollows v-if="useModalFollows" />
      </Transition>
      <Transition name="clip">
        <ModalLikes v-if="useModalLikes" />
      </Transition>
      <Transition name="fade">
        <ModalLoader v-if="useModalLoader" />
      </Transition>
    </main>
  </div>
</template>

<style lang="sass">
@import ./../assets/sass/base/mixin

// main
main
  padding-top: 85px

  .main-content
    display: flex
  .main-view
    flex: 1
    padding-left: 30px
    // padding-right: 20px
    +rwdmax(900)
      padding-left: 0
  .nav-wrap
    width: 350px
    +rwdmax(1200)
      width: 300px
    +rwdmax(900)
      width: 0
    //   display: none

.fade-enter-active,
.fade-leave-active
  transition: opacity var(--trans-m)

.fade-enter-from,
.fade-leave-to
  opacity: 0

.clip-enter-from,
.clip-leave-to
  opacity: 0
  transition: opacity var(--trans-m) var(--trans-s)
  .modal
    opacity: 0
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0)
    transition: opacity .6s, clip-path .6s

.clip-enter-to,
.clip-leave-from
  opacity: 1
  transition: opacity var(--trans-xl)
  .modal
    opacity: 1
    clip-path: polygon(0 0, 100% 0, 100% 115%, 0 100%)
    transition: opacity .6s var(--trans-s), clip-path .6s var(--trans-s)

</style>