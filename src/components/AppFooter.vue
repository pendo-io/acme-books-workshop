<template>
  <v-footer height="40" app>
    <a
      v-for="item in items"
      :key="item.title"
      :href="item.href"
      :title="item.title"
      class="d-inline-block mx-2 social-link"
      rel="noopener noreferrer"
      target="_blank"
    >
      <v-icon
        :icon="item.icon"
        :size="item.icon === '$vuetify' ? 24 : 16"
      />
    </a>

    <div
      class="text-caption text-disabled"
      style="position: absolute; right: 16px;"
    >
      &copy; {{ (new Date()).getFullYear() }} <span class="d-none d-sm-inline-block">pendo.io</span>
    </div>
  </v-footer>
</template>

<script setup>
  const items = [
    {
      title: 'Vuetify Documentation',
      icon: `$vuetify`,
      href: 'https://vuetifyjs.com/',
    },
    {
      title: 'pendo.io',
      icon: `svg:M11.3172 3.27624C11.495 3.09937 11.7362 3 11.9877 3H20.0517C20.5754 3 21 3.42225 21 3.94313V11.9637C21 12.2119 20.9017 12.45 20.7263 12.6266L12.6887 20.7178C12.093 21.3175 11.0659 20.8979 11.0659 20.055V12.8804H3.95015C3.10533 12.8804 2.68228 11.8645 3.27964 11.2704L11.3172 3.27624Z`,
      href: 'https://pendo.io',
    },
  ]
</script>

<style scoped lang="sass">
  .social-link :deep(.v-icon)
    color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
    text-decoration: none
    transition: .2s ease-in-out

    &:hover
      color: rgba(25, 118, 210, 1)
</style>
