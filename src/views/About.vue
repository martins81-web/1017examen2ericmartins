<template>
  <div class="about">
    <h1> {{"aboutUs" | translateTo(language)}}</h1>
    <p>Sociosqu rutrum neque auctor litora, iaculis a elementum consectetur congue amet tempus. Dis venenatis aliquet quisque non est est! Et fames vitae sed euismod at fusce inceptos vitae facilisis diam sit! Accumsan ridiculus conubia nostra non posuere lobortis aliquet tristique ultricies egestas. Himenaeos orci aliquet lacinia potenti dapibus neque pulvinar! Nec venenatis.
      </p>
      <p>Id a volutpat feugiat malesuada egestas facilisis semper. Mauris cursus nunc sodales cursus mauris nunc parturient eleifend posuere consectetur est. Mus curabitur ante odio molestie a nulla commodo pharetra, cras turpis luctus vitae! Duis turpis iaculis ipsum eu mi suscipit velit? Dictum pulvinar class suscipit hendrerit facilisi sollicitudin diam erat urna augue dis. Lacinia gravida sagittis tempus vivamus orci. Mattis nulla torquent purus diam scelerisque hac aliquet ut id. Sem torquent feugiat tempor sociis. Commodo risus donec varius tortor dolor quis scelerisque bibendum.
      </p>
  </div>
</template>

<style scoped >
  .about {
    margin-right: 30%;
    margin-left: 30%;
  }
</style>

<script lang="js">
import   {mixinTranslations}  from "../mixins/mixinTranslations";

export default {
    mixins: [mixinTranslations]
    }
    </script>