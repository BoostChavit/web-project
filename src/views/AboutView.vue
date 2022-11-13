<template>
  <body>
    <link rel="stylesheet" href="src/assets/style.css">
    <div v-for="profile in profiles" :key="profile" class="inline-block w-1/4 mx-12 my-6">
    <div>
      <a :href="profile.img" class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div class="flex flex-col justify-center"> <img :src="profile.img" alt="profile" class="rounded-full w-auto h-72 "> </div>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{profile.name}}</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">นาย{{profile.surname}}. </p>
        <p class="font-normal text-gray-700 dark:text-gray-400">อายุ : {{profile.age}}. ศึกษาอยู่ที่ {{profile.education}}.</p>
        <p v-if="profile.isStudy" class="font-normal text-gray-700 dark:text-gray-400">สถานะ : กำลังศึกษา.</p>
        <p v-else-if="profile.isStudy == false" class="font-normal text-gray-700 dark:text-gray-400">สถานะ : ไม่ได้ศึกษาเเล้ว.</p>
        <div class="mt-4 border-t-4 border-black border-solid">
          <a :href="profile.facebook"><font-awesome-icon icon="fa-brands fa-facebook" class="mt-3 ml-36 mr-3 text-3xl"/></a>
          <a :href="profile.ig"><font-awesome-icon icon="fa-brands fa-instagram" class="mr-3 text-3xl"/></a>
          <a :href="profile.song"><font-awesome-icon icon="fa-solid fa-music" class="text-3xl"/></a>
      </div>
        
      </a>
    </div>
  </div>
  </body>
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
