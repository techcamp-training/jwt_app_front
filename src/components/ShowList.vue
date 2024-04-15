<script setup>
</script>

<template>
  <h2>レビュー一覧</h2>
  <div>
    <ul class="review-lists"> 
      <li class="review-list">
        <h2 class="review-title">タイトル</h2>
        <p>レビュー</p>
      </li>
      <li class="review-list">
        <h2 class="review-title">タイトル</h2>
        <p>レビュー</p>
      </li>
      <li class="review-list">
        <h2 class="review-title">タイトル</h2>
        <p>レビュー</p>
      </li>

    </ul>
  </div>
</template>

<style>
ul {
  list-style: none;
  padding: 0;
}


.review-lists {
  display: flex;
  flex-wrap: wrap;
}

.review-list {
  border:1px solid #a4a4a4;
  padding: 8px;
  width: 320px;
  margin-right: 16px;
}

.review-title {
  font-weight: 400;
  margin: 8px 0;
}
</style>