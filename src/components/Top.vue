<script setup>
import ShowList from './ShowList.vue'

</script>

<template>
  <div>
    <form>
      <div class="form_element">
        <label for="title">タイトル</label><br>
        <input type="text" id="title">
      </div>
      <div class="form_element">
        <label for="review">感想</label><br>
        <textarea id="review"></textarea>
      </div>
      <input type="submit" value="送信">
    </form>
    <ShowList />
  </div>
</template>


<style scoped>
form {
  margin: 24px auto;
}

.form_element {
  margin-top: 16px;
}

.form_element input, textarea {
  width: 320px;
  padding: 16px;
}
</style>
