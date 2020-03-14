<template>
<ProblemPreview></ProblemPreview>
</template>

<script>
import ProblemPreview from '../components/ProblemPreview'
export default {
  name: 'Problems',
  components: {ProblemPreview}
}
</script>

<style scoped>
  #Problems{
    margin: 0;
    padding: 0;
    background: lightblue;
    height: 600px;
    width: 100%;
  }
</style>
