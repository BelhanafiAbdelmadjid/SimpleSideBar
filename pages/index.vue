<template>
  <div class="w-full flex flex-col  gap-8 items-start justify-start  bg-neutral-800 p-6" >
    <header :class="[
      'w-full',
      'flex lg:flex-row lg:items-center lg:justify-between lg:gap-0', //lg screen
      'flex-col items-start justify-start gap-4', //!lg screen
    ]" >
      <div class="flex grow flex-col items-start justify-start" >


        <span :class="[
          'text-white', //common
          'text-lg', //!lg screen 
          'lg:text-2xl' //lg screen
        ]">Welcome back, Jhon</span>


        <span class="text-neutral-100 lg:text-sm text-xs font-thin" >Measure your advertising ROI and report website traffic.</span>
      </div>
      <div :class="[
        'flex gap-2',
        'lg:self-start',
        'self-end'
        ]" >
        <UButton 
          size="xs" 
          icon="i-heroicons-pencil-square" 
          :trailing="true" 
          color="black"
          :ui="{
            color : {
              black : {
                solid : 'bg-neutral-700  transition-all duration-150 text-white'
              }
            }
          }"
        >Export Data</UButton>
        <UButton 
          size="xs"
          color="purple"
          :ui="{
            color : {
              purple : {
                solid : 'bg-secondary-600 text-white'
              }
            }
          }"
        >Create Report</UButton>
      </div>
    </header>
  
    <div :class="[
      'gap-4 grid w-full', //commn
      'overflow-x-auto lg:grid-cols-4 ',
      'grid-cols-2 ',
    ]">
      <StatCard v-for="stat,index in stats" :key="index" :stat="stat" />
     
    </div>


    <main :class="[
      'w-full rounded-xl ',
      'lg:overflow-hidden lg:grid  lg:grid-cols-5',//lg
      'overflow-hidden grid  grid-cols-1',
    ]" >
      <highchart class="p-5 bg-secondary-100  col-start-1 col-end-4   sm:border-b-2 lg:border-r-2 border-neutral-700" :options="revenue_chart_options" />
      <div class="lg:col-start-4 lg:col-end-6   grid grid-rows-2 " >
          <highchart class="p-5 bg-secondary-100 row-start-1 row-end-2 border-b-2 border-neutral-700 " :options="profit_chart_options" />
          <highchart  class="p-5 bg-secondary-100 row-start-2 row-end-3":options="sessions_chart_options" />
      </div>
    </main>

  </div>
</template>

<script setup>
const stats = ref([
  {
    titel : 'Page Views',
    icon : 'i-hugeicons-view',
    elipsis : 'i-fe-elipsis-h',
    value : '50.8K',
    pourcentage : '28.4%',
    positive : true,
  },
  {
    titel : 'Monthly Users',
    icon : 'i-mdi-users',
    elipsis : 'i-fe-elipsis-h',
    value : '23.6K',
    pourcentage : '12.6%',
    positive : false,
  },
  {
    titel : 'New Sign Ups',
    icon : 'i-zondicons-add-solid',
    elipsis : 'i-fe-elipsis-h',
    value : '756',
    pourcentage : '3.1%',
    positive : true,
  },
  {
    titel : 'Subscriptions',
    icon : 'i-material-symbols-star',
    elipsis : 'i-fe-elipsis-h',
    value : '2.3K',
    pourcentage : '11.3%',
    positive : true,
  },
])

const revenue_chart_options = computed(() => (
  {
    chart: {
      backgroundColor: '#101935',
      polar: true,
      type: 'area',
      borderColor: '',

    },
    title: {
      text: 'Total revenue',
      align: 'left',
      style: {
        color: 'white',
      }
    },

    subtitle: {
      text: '$240.8K',
      align: 'left',
      style: {
        color: 'white',
      }
    },

    yAxis: {
      labels: {
        style: {
          color: 'white'
        }
      },

    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      labels: {
        style: {
          color: 'white'
        }
      }
    },

    legend: {
      layout: 'horizontal',
      align: 'right',
      verticalAlign: 'top',
      itemStyle: {
        color: 'white'
      }

    },
    series: [{
      name: 'Revenue',
      data: [
        43934, 48656, 65165, 81827, 112143, 142383,
        171533, 165174, 155157, 161454, 154610, 168960
      ],
      color: '#21C3FC'
    }, {
      name: 'Expenses',
      data: [
        24916, 37941, 29742, 29851, 32490, 30282,
        38121, 36885, 33726, 34243, 31050, 33099
      ],
      color: '#CB3CFF'
    }],

    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        // Make the labels less space demanding on mobile
        chartOptions: {

        }
      }]
    }

  }
))
const sessions_chart_options = computed(() => (
  {
    chart: {
      backgroundColor: '#101935',
      polar: true,
      type: 'line',
      borderColor: '',

    },
    title: {
      text: 'Total Sessions',
      align: 'left',
      style: {
        color: 'white',
      }
    },

    subtitle: {
      text: '400',
      align: 'left',
      style: {
        color: 'white',
      }
    },

    yAxis: {
      labels: {
        style: {
          color: 'white'
        }
      },

    },
    xAxis: {
      categories: ['12AM', '8AM', '4PM', '11PM'],
      labels: {
        style: {
          color: 'white'
        }
      }
    },

    legend: {
      layout: 'horizontal',
      align: 'right',
      verticalAlign: 'top',
      itemStyle: {
        color: 'white'
      }

    },
    series: [{
      name: 'Revenue',
      data: [
        43934, 48656, 65165, 81827, 
      ],
      color: '#CB3CFF'
    },
  ],

    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        // Make the labels less space demanding on mobile
        chartOptions: {

        }
      }]
    }

  }
))
const profit_chart_options = computed(() => (
  {
    chart: {
      backgroundColor: '#101935',
      polar: true,
      type: 'column',
      borderColor: '',

    },
    title: {
      text: 'Total Profit',
      align: 'left',
      style: {
        color: 'white',
      }
    },

    subtitle: {
      text: '$144.6K',
      align: 'left',
      style: {
        color: 'white',
      }
    },

    yAxis: {
      labels: {
        style: {
          color: 'white'
        }
      },

    },
    xAxis: {
      categories: ['12AM', '8AM', '4PM', '11PM'],
      labels: {
        style: {
          color: 'white'
        }
      }
    },

    legend: {
      layout: 'horizontal',
      align: 'right',
      verticalAlign: 'top',
      itemStyle: {
        color: 'white'
      }

    },
    series: [{
      name: 'Revenue',
      data: [
        43934, 48656, 65165, 81827, 
      ],
      color: '#21C3FC'
    },
  ],

    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        // Make the labels less space demanding on mobile
        chartOptions: {

        }
      }]
    }

  }
))

</script>

<style>

</style>