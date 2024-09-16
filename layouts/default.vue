<template>
  <div :class="[
    'relative', //for common styling
    'lg:flex', //for lg devices
    'grid', //for !lg devices
    ]" >
    <!-- <h1 class="bg-red-500" >Default layout</h1> -->
    <SideBar/>
    <slot />
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>