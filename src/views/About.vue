<template>
  <section class="about">
    <h1 style="background-color: #4CAF50; color: white; padding: 20px; margin: 20px; width: 20%; border-left: 15px solid black"> 
    {{"aboutUs" | translateTo(this.$store.getters.getCurrentLanguage)}}
    </h1>
    <div>
        <p>Sociosqu rutrum neque auctor litora, iaculis a elementum consectetur congue amet tempus. Dis venenatis aliquet quisque non est est! Et fames vitae sed euismod at fusce inceptos vitae facilisis diam sit! Accumsan ridiculus conubia nostra non posuere lobortis aliquet tristique ultricies egestas. Himenaeos orci aliquet lacinia potenti dapibus neque pulvinar! Nec venenatis.
        </p>
        <p>Id a volutpat feugiat malesuada egestas facilisis semper. Mauris cursus nunc sodales cursus mauris nunc parturient eleifend posuere consectetur est. Mus curabitur ante odio molestie a nulla commodo pharetra, cras turpis luctus vitae! Duis turpis iaculis ipsum eu mi suscipit velit? Dictum pulvinar class suscipit hendrerit facilisi sollicitudin diam erat urna augue dis. Lacinia gravida sagittis tempus vivamus orci. Mattis nulla torquent purus diam scelerisque hac aliquet ut id. Sem torquent feugiat tempor sociis. Commodo risus donec varius tortor dolor quis scelerisque bibendum.
        </p>
      </div>
  </section>
</template>

<style scoped >
  .about {
    
  }

  .about div{
    margin: 20px;
    width: 50%
  }
</style>

<script lang="js">
import   {mixinTranslations}  from "../mixins/mixinTranslations";

export default {
    mixins: [mixinTranslations]
    }
    </script>