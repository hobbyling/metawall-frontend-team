<script setup>
import { useUserStore } from './../stores/userStore'
import { useModalStore } from './../stores/modalStore'


const userStore = useUserStore()
const modalStore = useModalStore()

const {
  openModalPost,
  openModalFollows,
  openModalLikes
} = modalStore

</script>

<template>
  <nav>
    <router-link class="user-wrap" :to="userStore._id">
      <div class="user-photo">
        <img :src="userStore.image" alt="user-photo">
      </div>
      <div class="user-name">{{ userStore.name }}</div>
    </router-link>
    <ul class="user-tools">
      <li @click="openModalPost">
        <i class="icon-add-square"></i>
        <span>新增貼文</span>
      </li>
      <li @click="openModalFollows">
        <i class="icon-bell"></i>
        <span>追蹤名單</span>
      </li>
      <li @click="openModalLikes">
        <i class="icon-like"></i>
        <span>收藏文章</span>
      </li>
    </ul>
  </nav>
</template>

<style lang="sass">
@import ./../assets/sass/base/variables
@import ./../assets/sass/base/mixin

// nav
nav
  position: sticky
  top: 85px
  right: 0
  +rwdmax(900)
    position: fixed
    z-index: 9
    top: auto
    bottom: 0
    width: 100%
    display: flex
    background-color: #fff
    border-top-left-radius: 30px
    border-top-right-radius: 30px
    box-shadow: 0 0 15px rgba(0, 0, 0, .1)

  .user-wrap
    display: flex
    align-items: center
    padding: 12px
    background-color: #fff
    border-radius: 40px
    border: 1px solid var(--dark-white)
    box-shadow: 0 0 5px rgba(0, 0, 0, .1)
    +rwdmax(900)
      background-color: transparent
      box-shadow: none
      border: none
    &:hover
      .user-name
        color: var(--primary-pink)
  .user-photo
    width: 50px
    height: 50px
    border-radius: 50%
    overflow: hidden
    margin-right: 15px
    box-shadow: 0 0 5px rgba(0, 0, 0, .2)
    img
      +fit
  .user-name
    font-family: $code-font
    font-size: px(18)
    line-height: 1.5
    color: var(--gray)
    transition: color var(--trans-s)
    +rwdmax(900)
      display: none

  .user-tools
    border-radius: 20px
    margin-top: 20px
    +rwdmax(900)
      display: flex
      align-items: center
      margin-top: 0
    li
      display: flex
      align-items: center
      color: var(--dark-gray)
      border-radius: 25px
      padding: 15px 20px
      transition: var(--trans-m)
      border: 1px solid transparent
      cursor: pointer
      &:hover
        i, span
          transform: translateX(8px)
        i
          color: var(--primary-pink)
      &.disable
        pointer-events: none
        opacity: .2
      i, span
        display: inline-block
        transition: transform var(--trans-s)
      i
        font-size: px(20)
        margin-right: 25px
      span
        font-size: px(14)
        +rwdmax(767)
          display: none
</style>