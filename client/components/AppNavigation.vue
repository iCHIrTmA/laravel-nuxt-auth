<script setup lang="ts">
const { isAuthenticated, user } = useSanctumAuth();

</script>
<template>
  <div class="p-6 flex items-center justify-between">
    <div class="flex items-center space-x-6">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/dashboard">Dashboard</NuxtLink>
    </div>

    
    <div v-if="! isAuthenticated"class="flex items-center space-x-6">
      <NuxtLink to="/auth/login">Sign in</NuxtLink>
    </div>

    <div v-if="isAuthenticated" class="flex items-center space-x-6">
      <div class="font-semibold">{{ user.name }}</div>
    </div>
  </div>
</template>
