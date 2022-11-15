 

<template>
 
  
  <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="#"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav me-auto">
                       <li class="nav-item">   <router-link to="/chart" class="nav-link">Home</router-link>    &nbsp;</li>
                       <li class="nav-item">   <router-link to="/user" class="nav-link">Users</router-link>    &nbsp;</li>
                       <!--<li class="nav-item">   <router-link to="/chart" class="nav-link">Chart</router-link>    &nbsp; </li>-->
                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ms-auto">
                        <!-- Authentication Links -->
                         
                                <!--<li class="nav-item">
                                    <a class="nav-link" href="{{ route('login') }}">Login</a>
                                </li>
                            
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('register') }}">Register</a>
                                </li>-->
                                
                                <li class="nav-item dropdown1">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre> Welcome, FirstName  </a>

                                
                            </li>
                          
                    </ul>
                </div>
            </div>
        </nav>
  
  
  

  <main>
      <router-view />

  </main>
</template>
 
