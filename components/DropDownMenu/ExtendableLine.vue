<template>
  <NuxtLink :to="sublink.to">

  <div>
    <span :class="[
        'flex items-center justify-start gap-1  h-[30px] cursor-pointer transition-all duration-150 text-neutral-100 text-sm w-full', //base
        'hover:bg-neutral-700 hover:text-white  ',
        //styling before on hovering
        'relative', //adding relative to use position absolute
  
        //style for current tab
        sublink.active ? 'text-white before:content:\'\' before:w-[3px] before:h-full before:bg-secondary-600' : null,
        sublink.active ? 'bg-neutral-700' : null,
        
        //style for default behaviour on hover
        'hover:before:content:\'\' hover:before:w-[3px] before:w-[3px] hover:before:h-full hover:before:bg-secondary-600 transition-all duration-150' ,
    ]" >{{ sublink.text }}</span>
    
  </div>
</NuxtLink>
</template>

<script lang="ts" setup>
  const props = defineProps(['sublink'])
</script>

<style>


</style>