<template>
  <editor-content :editor="editor" class="text-editor"/>
</template>

<script>
import StarterKit from '@tiptap/starter-kit'
import { Editor, EditorContent } from '@tiptap/vue-3'

export default {
  components: {
    EditorContent,
  },

  data() {
    return {
      editor: null,
    }
  },

  mounted() {
    this.editor = new Editor({
      content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
      extensions: [
        StarterKit,
      ],
    })
  },

  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>

<style>
.text-editor
{
    height: 300px;
    background: rgba(0, 0, 0, 0) !important;
    border: 0;
    border-radius: 0px !important;
    border-bottom: 1px solid #797979;

}

.text-editor:focus {   
    border-color: rgba(255, 33, 71, 1);
    box-shadow: 0 0px 0px rgba(255, 33, 71, 1) inset, 0 0 0px rgba(255, 33, 71, 1);
    outline: 0 none;
}

.ProseMirror {
    height: 300px;
}
</style>
