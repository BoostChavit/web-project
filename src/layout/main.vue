<template>
     <div>
        <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul class="flex flex-wrap -mb-px">
                <li class="mr-2">
                    <router-link to="about" class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">About Us</router-link>
                </li>
            </ul>
        </div>
        <div>
            <slot/>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    components: { RouterLink }
}
</script>