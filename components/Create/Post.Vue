<template>
    <p id="hello" class="font-fragment p-5 rounded">Hello <span id="username" class="uppercase">{{user.first_name}}</span>,
    what do you want to create today?</p>
  <form @submit.prevent="createBlog" class="flex flex-col font-fragment gap-2">
    <label>
      Title:
      <input v-model="title" type="text" class="w-full rounded text-black" ref="title" />
    </label>
    <br />
    <label>
      Content:
      <textarea v-model="content" class="w-full rounded text-black"></textarea>
    </label>
    <br />
    <button type="submit" class="bg-white dark:bg-black rounded text-black dark:text-white p-3 border dark:border-white">Create Blog Post</button>
  </form>
</template>

<script>
import { Directus } = require ('@directus/sdk');




const client = new DirectusClient({
  url: 'YOUR_DIRECTUS_API_ENDPOINT',
  project: '_',
  auth: {
    mode: 'bearer',
    token: 'YOUR_DIRECTUS_API_KEY'
  }
});

export default {
  data() {
    return {
      title: '',
      content: ''
    };
  },
  methods: {
    async handleSubmit() {
      try {
        await client.createItems({
          collection: 'news',
          items: [
            {
              title: this.title,
              content: this.content,
              status: 'published'
            }
          ]
        });
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
