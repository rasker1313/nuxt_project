<template>
  <button type="button" :class="classes">
    <slot></slot>
    <Icon v-if="icon" :name="icon" class="h-5" />
  </button>
</template>

<script lang="ts">
export default {
  props: {
    text: { type: String, default: '' },
    color: { type: String, default: 'blue' },
    size: { type: String, default: 'md' }, // sm, md, lg
    iconName: { type: String },
    iconPosition: { type: String, default: 'left' },
    iconLibrary: { type: String, default: 'solar' },
  },
  methods: {

  },
  computed: {
    icon() {
      return this.iconName ? `${this.iconLibrary}:${this.iconName}` : null;
    },
    classes() {
      const result = [
        'text-white', 'font-bold', 'text-sm',
        `bg-${this.color}-600`, `hover:bg-${this.color}-500`,
        'rounded-md'
      ]

      if (this.size === 'sm') {
        result.push('px-2', 'py-1')
      } else if (this.size === 'md') {
        result.push('px-4', 'py-2')
      } else if (this.size === 'lg') {
        result.push('px-7', 'pt-3', 'pb-3.5')
      }

      return result.join(' ')
    }
  }
}
</script>

<style scoped>

</style>