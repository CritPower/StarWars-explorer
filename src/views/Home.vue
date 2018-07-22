<template>
  <div class="home">
    <SiteInfo/>
  </div>
</template>

<script>
// @ is an alias to /src
import SiteInfo from "@/views/SiteInfo.vue";

export default {
  name: "home",
  components: {
    SiteInfo
  }
};
</script>
