<template>
 <div>
  <p>{{msg}}</p>
  <button id="toggle-message" @click="toggleMessage">
   Change message
  </button>
 </div>
</template>

<script>
  export default {
    name: 'message-toggle',
    data: () => ({
      msg: 'default message'
    }),
    methods: {
      toggleMessage () {
        this.msg = this.msg === 'message' ? 'toggled message' : 'message'
      }
    }
  }
</script>
