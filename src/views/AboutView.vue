<template>
  <div v-for="profile in profiles" :key="profile">
    <div class="">
      <div>
        <img :src="profile.img" alt="profile">
      </div>
    </div>
  </div>
</template>

<script>
import { useProfileStore } from "../stores/profiles";
export default {
  name:"AboutView",
  data() {
    return {
      profiles:[]
    };
  },
  async mounted() {
    await useProfileStore().fetchProfile();
    this.profiles = useProfileStore().getProfiles;
  }
}

</script>
