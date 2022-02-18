<template>
    <div>
        <h1>21. (2:23:50) Simple form in Vue js 21 & 22 </h1>
        <ul>
            <li v-for="item in error" v-bind:key="item">
                {{item}} is not valid

            </li>
        </ul>
        <form action="">
            <label for="">Email:-</label>
            <input type="text" placeholder="Enter your email : " v-model="form.email" />
            <br/>
            <br/>
            <label for="">Password:-</label>
            <input type="password" placeholder="Enter your Password : " v-model="form.password" />
            <br/>
            <br/>
            <select  v-model="form.country">
                <option>USA</option>
                <option>Russia</option>
                <option>Canada</option>
                <option>India</option>
                
            </select>
            <br/>
            <br/>
            <h3>Gender</h3>
            <label for="">Male:</label>
            <input type="radio" name="gender" value="male" v-model="form.gender"> 
            <label for="">female:</label>
            <input type="radio" name="gender" value="female" v-model="form.gender"> 
            <br/>
            <br/>
            <h3>Technologies</h3>
            <label for="">java</label>
            <input type="checkbox"  value="java" v-model="form.technology"> 
            <label for="">Python</label>
            <input type="checkbox"  value="Python" v-model="form.technology"> 
            <label for="">React</label>
            <input type="checkbox"  value="React" v-model="form.technology"> 
            <label for="">vue</label>
            <input type="checkbox"  value="vue" v-model="form.technology"> 
            <br/>
            <br/>
            <button  v-on:click="login" type="button">Login</button>
            <br/>
            <br/>
            <h2>{{form}}</h2>
        </form>
    </div>
</template>
<script>
export default {
    name:'SimpleForm21',
    data() {
        return {
            form:{
                email:'',
                password:'',
                country:'',
                gender:'',
                technology:[],
            },
            error:[]
        }
    },
    methods: {
        login(){
            // alert(this.form)
            // console.log(this.form);
            // console.warn(this.form);
            this.error=[]
            for(const item  in this.form){
                if(this.form[item]=== ""  || this.form[item].length=== 0)
                {
                    this.error.push(item)
                }
            }
                if(this.error.length===0)
                {
                    alert("data has been submited")
                }
                console.warn(this.error);
        }
    },
}
</script>
