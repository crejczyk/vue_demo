<template>
  <div id="add-blog">
    <h2>Add New post</h2>
    <form v-if="!submitted">
      <label>Blog title</label>
      <input type="text" v-model.lazy="blog.title" required>
      <label>Blog Content</label>
      <textarea v-model.lazy="blog.content" />
      <div id="checkboxes">
        <label>Ninja</label>
        <input type="checkbox" value="ninja" v-model="blog.cat" />
        <label>Mario</label>
        <input type="checkbox" value="mario" v-model="blog.cat" />
      </div>
      <p>Author: </p>
      <select v-model="blog.auth">
        <option v-for="auth in authors">{{ auth }}</option>
      </select>
      <button v-on:click="post">Add Blog</button>
    </form>
    <div v-if="submitted"> 
        Thank You ! 
    </div>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog Title: {{ blog.title }}</p>
      <p>Blog Content: {{ blog.content }}</p>
      <p>Blog Cat: </p>
      <ul>
        <li v-for="cat in blog.cat">{{ cat }}</li>
      </ul>
      <p>Blog Content: {{ blog.auth }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addBlog',
  data() {
    return {
      blog: {
        title: "",
        content: "",
        cat: [],
        auth:""
      },
      authors: ["Author1", "Author2"],
      submitted: false
    }
  }, 
  methods: {
      post: function (){
          this.$http.post("https://jsonplaceholder.typicode.com/posts",{
              title: this.blog.title
          }).then(function(data){
              console.log(data); 
              this.submitted = true;
          })
      }
  }
}
</script>

<style>
#add-blog * {
  box-sizing: border-box;
}

#add-blog {
  margin: 20px auto;
  max-width: 500px;
}

label {
  display: block;
  margin: 10px 0 10px;
}

input {
  display: block;
  width: 100%;
  padding: 8px;
}

#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}

h3 {
  margin-top: 10px;
}

#checkboxes {
  display: inline-block;
  margin-right: 10px;
}

#checkboxes label {
  display: inline-block;
}
</style>

