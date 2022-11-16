<template>
  <div class="container mt-2">
  
  
   <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Active User</a>
      </li>
      <li class="nav-item">
        <li class="nav-item">   <router-link to="/inuser" class="nav-link">Archived User</router-link>    &nbsp;</li>
      </li>
	</ul>
  
  
  
       <!-- <div class="row">
            <div class="col-lg-12 margin-tb">
                <div class="pull-left">
                    <h2>Active Users</h2>
                </div>
                 
            </div>
        </div>-->
        
        
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
          
                  <div class="row">
                          <div class="col-md-6">
                                <select v-model="searchField"  class="form-control rounded"  placeholder="Field">
                                    <option>user</option>
                                    <option>team</option>
                                  </select>
                          
                          </div>
                         <div class="col-md-6">
                         <input type="text" v-model="searchValue" class="form-control rounded"   placeholder="Search"   aria-label="Search"   aria-describedby="search-addon">
                         
                         </div>
                </div>
          
          
            
          
          </div>
</nav>
        
          
  
  
  
  <easy-data-table
    :headers="headers"
    :items="items"
    :search-field="searchField"
    :search-value="searchValue"
   >
   
   
   
   </easy-data-table>
</div>
  
 
  
</template>


<script>
  
 
export default {
  name: 'User',
  //components: { User },
  props: { },
  methods: {
    getPosts() {
      fetch('/user1.json')
        .then(response => response.json())
        .then(data => this.items = data)
    }},
    mounted() {
    this.getPosts()
  },
  data() {
    return { 
	searchField :"user",
	searchValue :"",
		headers:[
      { text: "USER", value: "user" },
      { text: "TEAM", value: "teamName" },
      { text: "NUMBER", value: "number" },
      { text: "AGE", value: "position" },
      { text: "HEIGHT", value: "info.height" },
      { text: "WEIGHT (lbs)", value: "info.weight", sortable: true },
     // { text: "LAST ATTENDED", value: "lastAttended" },
      { text: "COUNTRY", value: "country" },
      
    ],
        items: [ ],
	
	}
  }
}


 


</script>

<style>
.operation-wrapper .operation-icon {
  width: 20px;
  cursor: pointer;
}
.player-wrapper {
  padding: 5px;
  display: flex;
  align-items: center;
  justify-items: center;
}
.avator {
  margin-right: 10px;
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 10%);
}
</style>
 
