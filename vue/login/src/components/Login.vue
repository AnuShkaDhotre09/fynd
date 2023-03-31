<template>
    <div>
     <div>
     <img class="logo" src="../assets/1.jpg"/>
     <h1>Login</h1>
    </div>
    <div class="login">
     <input type="'text" v-model="email" placeholder="Enter Email" />
     <input type="password" v-model="password" placeholder="Enter Password" />
     <button v-on:click="login">Login</button>
     <p>
         Don't have any account? 
     <router-link to="/sign-up"> Sign Up</router-link>
    </p>
     </div>
 </div>
 </template>
 
 <script>
 import axios from "axios"
 export default {
     name:"Login",
     data(){
         return{
             email:"",
             password:""
         }
 
 },
 methods:{
     async login(){
         let result= await axios.get(
             `http://localhost:3000/user?email=${this.email}&password=${this.password}`
         )
         console.warn(result);
         if(result.status==200 && result.data.length>0)
             {
             
                 localStorage.setItem("user-info",JSON.stringify(result.data[0]))
                 this.$router.push({name:'Home'})
             }
 
     }
 },
 
 mounted()
     {
        let user=localStorage.getItem(user-info);
         if(user){
           this.$router.push({name:'Home'})
       }
     }
 }
 
 </script>
 
 
 
 
 
 
 