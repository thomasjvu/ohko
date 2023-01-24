<template>
    <form @submit.prevent="createOne" class="flex flex-col font-fragment gap-2">
        <label>
            Title:
            <input v-model="title" type="text" class="w-full rounded text-black" ref="title" id="title" />
            <p class="">
                Your "Title" is...: <span class="input-value">{{ title }}</span>
            </p>
        </label>
        <br />
        <label>
            Content:
            <textarea v-model="description" class="w-full rounded text-black" ref="description" id="description"></textarea>
            <!-- <p> -->
            <!--     Your "Content" is...: <span class="input-value">{{ content }}</span> -->
            <!-- </p> -->
        </label>
        <label>
            Content:
            <textarea v-model="content" class="w-full rounded text-black" ref="content" id="content"></textarea>
            <!-- <p> -->
            <!--     Your "Content" is...: <span class="input-value">{{ content }}</span> -->
            <!-- </p> -->
        </label>
        <br />
        <button type="submit" class="bg-white dark:bg-black rounded text-black dark:text-white p-3 border dark:border-white">Create Blog Post</button>
    </form>
</template>

<script>
import { Directus } from '@directus/sdk'

// const config = useRuntimeConfig()
const directus = new Directus('http://app.ohko.org')
const articles = directus.items('articles')

export default {
  data() {
    return {
      title: '',
      content: ''
    };
  },
  methods: {
    async createOne() {
      const postData = {
        title: this.title,
        description: this.description,
        content: this.content,

        // status: "Published",
      };
      await articles.createOne(postData);
      window.location.replace('/articles');
    }
  }
}
</script>

<style>
</style>
