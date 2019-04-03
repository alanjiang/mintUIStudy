<template>
  <div>
   <h1> {{ msg }} </h1>
  </div>
</template>

<script>
export default {
  name: 'MyTabber',
  data () {
    return {
      msg: 'mintUI start...'
    }
  }
}
</script>


<style scoped>
h1 {
  font-weight: normal;
  color:pink;
  font-size:48px;
}

a {
  color: #42b983;
}
</style>
