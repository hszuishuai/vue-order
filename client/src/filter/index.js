import  Vue from 'vue'
import moment from 'moment'
Vue.filter('date',value=>{
  return moment(value).format('YYYY-MM-D' )
})
