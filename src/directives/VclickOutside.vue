<script>
export default {
  mounted(element, {value}, ref = false){
    element.clickOutside = function (event) {
      if((element !== event.target) && !element.contains(event.target) && (ref !== event.target)){
        value(event)
      }
    }

    document.body.addEventListener('click', element.clickOutside)
  },

  unmounted(element, {value}){
    document.body.removeEventListener('click', element.clickOutside)
  }
}
</script>