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
      fetch('https://funblockchain.com/user1.json')
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
        items: [
        {
          id: 1,
          user: "Stephen Curry",
          page: "https://www.nba.com/player/201939/stephen-curry",
          avator:
            "https://github.com/HC200ok/vue3-easy-data-table/blob/main/images/nba/Stephen.png?raw=true",
          teamName: "GSW",
          teamUrl: "https://www.nba.com/team/1610612744/warriors",
          number: 30,
          position: "Active",
          info: {
            height: "6-2",
            weight: 185,
          },
          lastAttended: "Davidson",
          country: "USA",
        },
        {
          id: 2,
          user: "Lebron James",
          page: "https://www.nba.com/player/2544/lebron-james",
          avator:
            "https://github.com/HC200ok/vue3-easy-data-table/blob/main/images/nba/lebron.png?raw=true",
          teamName: "LAL",
          teamUrl: "https://www.nba.com/team/1610612747/lakers",
          number: 6,
          position: "Active",
          info: {
            height: "6-9",
            weight: 250,
          },
          lastAttended: "St. Vincent-St. Mary HS (OH)",
          country: "USA",
        },
        {
          id: 3,
          user: "Kevin Durant",
          page: "https://www.nba.com/player/201142/kevin-durant",
          avator:
            "https://github.com/HC200ok/vue3-easy-data-table/blob/main/images/nba/Kevin.png?raw=true",
          teamName: "BKN",
          teamUrl: "https://www.nba.com/team/1610612751/nets",
          number: 7,
          position: "Active",
          info: {
            height: "6-10",
            weight: 240,
          },
          lastAttended: "Texas-Austin",
          country: "USA",
        },
        {
          id: 4,
          user: "Giannis",
          page: "https://www.nba.com/player/203507/giannis-antetokounmpo",
          avator:
            "https://github.com/HC200ok/vue3-easy-data-table/blob/main/images/nba/Giannis.png?raw=true",
          teamName: "MIL",
          teamUrl: "https://www.nba.com/team/1610612749/bucks",
          number: 34,
          position: "Active",
          info: {
            height: "6-11",
            weight: 242,
          },
          lastAttended: "Filathlitikos",
          country: "Greece",
        },
      ],
	
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
 
