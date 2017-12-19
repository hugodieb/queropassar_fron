import Vue from 'vue'
import VueChartJs from 'vue-chartjs'

Vue.component('line-chart', {
  extends: VueChartJs.Pie,
  mounted () {
    this.renderChart({
      labels: ['Resposta (A)', 'Resposta (B)', 'Resposta (C)', 'Resposta (D)', 'Resposta (E)',],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: ['#FFA500', '#AFEEEE', '#DB7093', '#663399', ' #FFFF00' ],
          data: [262, 48, 1107, 412, 34]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
  
})

var vm = new Vue({
  el: '.app',
  data: {
    
  }
})