<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light">
      <router-link class="navbar-brand" to="/">
         <img src="../assets/entropy_logo_black_v01.png" class="img-fluid" style="max-width: 150px;" alt="project entropy"> </img>
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample04">
        <ul class="navbar-nav mr-auto">
          
          <li class="nav-item">
            <router-link class="nav-link" to="map">Map</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="missions">Missions</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="join">Join</router-link>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li> -->
          <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="https://example.com" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div class="dropdown-menu" aria-labelledby="dropdown04">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li> -->
        </ul>
        <ul class="navbar-nav my-2 my-md-0">
          <li class="nav-item">
            <a class="nav-link" href="https://rocket.project-entropy.com">Chat</a>
          </li>
        </ul>
        <!-- <form class="form-inline my-2 my-md-0">
          <input class="form-control" type="text" placeholder="Search">
        </form> -->
      </div>
    </nav>


</template>

<script>

export default {

  name: 'nav',

  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
