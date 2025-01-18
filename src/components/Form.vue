<template>
  <form @submit.prevent="handleSubmit">
<label for="">Email</label>
<input type="email" v-model="email">
<label for="">Password</label>
<input type="password" v-model="password">
<div v-if="passwordError" class="error">{{ passworrdError}}</div>
<!-- if it is an empty string for true nothing is going to show -->

<p>{{ email }}</p>
<p>{{ password}}</p>
<label >Role</label>
<select v-model='role'>
    <option value="designer">webdesigner</option>
    <option value="developer">webdeveloper</option>
</select>
<label for="">skills</label>
<input type="text" v-model="tempSkill" @keyup="addskill">
 <div v-for='skill in skills' :key="skill" class="pill" >
  <p @click="deleteskill(skill)">{{ skill }} </p>

 </div>
 
 
 
 
 <div class="terms">
    <input type="checkbox" v-model="terms" required>
    <label for="">Accept terms and conditions</label>
 </div>
 {{ terms }}
 <div class="submit">
    <button>Create an Account</button>

 </div>
  </form>
</template>

<script>
export default {
    data(){
        return{
            email:'',
            password:'',
            role:'',
            terms:'',
            tempSkill:'',
            skills:[],

        }
    },
    
methods:{
    addskill(e) {
    if (e.key === "," && this.tempSkill.trim()) {
        // Remove the comma before checking for duplicates
        let trimSkill = this.tempSkill.trim().slice(0, -1);  // Remove the last character (comma)
        
        // Check if the trimmed skill is already in the array
        if (!this.skills.includes(trimSkill)) {
            this.skills.push(trimSkill);
        }
        
        // Clear the temporary skill field
        this.tempSkill = '';
    }
},
deleteskill(skill) {
  const index = this.skills.indexOf(skill);  // Find the index of the skill to delete
  if (index !== -1) {  // If the skill exists in the array
    this.skills.splice(index, 1);  // Remove the skill at the found index
  }
},
handleSubmit(){
this.passwordError = this.password.length > 7 ? '' : 'password must be atleast 8 characters long'
}
},

}

 

</script>

<style scoped>
form{
    max-width:720px;
    margin:30px auto;
    background:white;
    padding:100px;
    border-radius: 10px;
}
label{
    color:#aaa;
    display:inline-block;
    margin: 25px 0 25px;
    font-size: 0.6rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input,select{
    display: block;
    padding:12px 8px;
    box-sizing: border-box;
    border:none;
    border-bottom:1px solid #ddd;
    color:#555;
}
input[type="checkbox"]{
    display: inline-block;
    width:16px;
    margin:0 10px 0 0 ;
    position:relative;
    top:2px;

}
.pill{
color:black;
cursor:pointer;
background-color:#aaa;
padding:1rem;
margin-top:0.2rem;
border-radius:4px;
}
button{
    background:#0b6dff;
    border:0;
    padding:10px 20px;
    color:#fff;
    border-radius:20px;
}

.submit{
    text-align:center
}
.error{
    color:red;
    margin-top:10px;
    font-weight:bold;
}

</style>