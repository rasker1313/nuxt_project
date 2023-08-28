<template>
  <button type="button" :class="btnClasses" class="font-bold rounded-md flex gap-1.5 justify-center items-end transition-all">
    <slot></slot>
    <Icon v-if="icon" :name="iconLibrary + ':' + icon" height="17px" width="17px" class="text-slate-950/50 mb-0.5" />
  </button>
</template>

<script lang="ts">
export default {
  props: {
    color: { type: String, default: 'blue' },
    size: { type: String, default: 'md' }, // sm, md, lg, xl
    icon: { type: String, default: null },
    iconPosition: { type: String, default: 'left' },
    iconLibrary: { type: String, default: 'solar' }
  },
  methods: {

  },
  computed: {
    btnClasses() {
      const classes = []

      classes.push('btn-' + this.size)

      if (this.color === 'text') {
        classes.push('btn-text')
      } else {
        classes.push('btn-' + this.color)
      }

      return classes.join(' ')
    }
  }
}
</script>

<style scoped>

</style>