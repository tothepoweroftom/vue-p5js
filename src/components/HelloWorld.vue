<template>
  <div class='sketch' id="sketch">
  </div>
</template>

<script>
import sketch from './sketch.js'
import p5 from 'p5'

export default {
  name: 'HelloWorld',
  data () {
    return {
      myp5: null,
    }
  }, 

  mounted() {
        this.myp5 = new p5(sketch, document.getElementById('sketch'))
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#sketch {
    width: 100%;
    height:100%;
    position: absolute;
    left: 0;
    top: 0;
    border: 1px solid black;
}
</style>
