<template>
  <v-row>
    <v-col sm="12" cols="12">
      <h1>Home</h1>
      <div>
        <HelloWorld />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import HelloWorld from '@/components/HelloWorld';

export default {
  name: 'Home',

  components: {
    HelloWorld
  },

  data: () => ({
    //
  }),
};
</script>
