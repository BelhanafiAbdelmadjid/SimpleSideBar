<template>
  <div class="flex p-3 gap-3 rounded-xl border-neutral-800 flex-col items-start justify-start  bg-secondary-100" >
        <div class="flex w-full  gap-1 items-center justify-start" >
            <UIcon class="text-neutral-100" :name="stat.icon" />
            <span class=" grow text-xs text-neutral-100" >{{ stat.titel }}</span>
            <UIcon class="text-neutral-100 cursor-pointer" :name="stat.elipsis" />
        </div>
        <div class="flex items-center gap-2 justify-start" >
            <span class="text-white text-2xl" >{{ stat.value }}</span>
            <UKbd 
                size="xs"
                :ui="{
                    background : stat.positive ? 'bg-green-800/75': 'bg-red-800/75',
                    base: stat.positive ? 'text-green-400 ' : 'text-red-400  ' ,
                    ring : 'ring-0'
                }" 
                >
                <span>{{ stat.pourcentage }}</span>
                <UIcon v-if="stat.positive" name="i-ph-trend-up-thin" />
                <UIcon v-else name="i-ph-trend-down" />
            </UKbd>
        </div>
  </div>
</template>

<script  setup>
const props = defineProps({
    stat : {
        type : Object,
        require : true
    }
})
</script>

<style>

</style>