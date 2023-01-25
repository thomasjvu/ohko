<template>
    <editor-content :editor="editor" />
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

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
            content: '<p>Start creating, here! 👾</p>',
            extensions: [StarterKit],
            onUpdate: () => {
                this.$emit('update:modelValue', this.editor.getHTML())
            },
        })
    },

    watch: {
        modelValue(value) {
            if (this.editor.getHTML() === value) return
            this.editor.commands.setContent(this.modelValue, false)
        },
    },

    beforeDestroy() {
        this.editor.destroy()
    },
}
</script>

<style>
.ProseMirror {
    height: 300px;
    padding: 10px;
}

.ProseMirror h1 {
    line-height: 6rem;
}
.ProseMirror h2 {
    line-height: 5rem;
}
.ProseMirror h3 {
    line-height: 4rem;
}
.ProseMirror h4 {
    line-height: 3rem;
}
.ProseMirror h5 {
    line-height: 2rem;
}
.ProseMirror h6 {
    line-height: 1.75rem;
}
.ProseMirror p {
    line-height: 2rem;
}
</style>
