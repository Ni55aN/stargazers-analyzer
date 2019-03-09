<template lang="pug">
Badge.badge(:count="count", :overflow-count="overflowCount")
  slot
</template>

<script>
export default {
  props: {
    count: Number,
    overflowCount: {
      type: Number,
      default: 99999
    }
  }
}
</script>


<style lang="sass" scoped>
.badge
  margin: 2em 1em
  color: #7b7b7b
  background: #e8e8e8
  border-radius: 6px
  padding: 0.5em
  display: inline-block
</style>
