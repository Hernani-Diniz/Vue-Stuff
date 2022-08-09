<!-- TODO min 26:42 youtube -->
<template>
<div class="home">
    <h1>My Recipes</h1>
    <button @click="togglePopup">Add New Recipe</button>
    <div class="recipes">
      <div class="card" v-for="recipe in $store.state.recipes" 
      :key="recipe.slug">
        <h2>{{recipe.title}}</h2>
        <p>{{recipe.description}}</p>
        <router-link :to="`/recipe/${recipe.slug}`">
          <button>View Recipe</button>
        </router-link>
      </div>
    </div>

   <div class="add-recipe-popup" v-if="popupOpen">
      <div class="popup-content">
        <h2>Add new recipe</h2>

        <form @submit.prevent="addNewRecipe">
          <div class="group">
            <label>Title</label>
            <input type="text" v-model="newRecipe.title" />
          </div>

          <div class="group">
            <label>Description</label>
            <textarea v-model="newRecipe.description"></textarea>
          </div>

          <div class="group">
            <label>Ingredients</label>
            <div class="ingredient" v-for="i in newRecipe.ingredientsRows" 
            :key="i" >
              <input type="text" v-model="newRecipe.ingredients[i -1]" />
            </div>
            <button type="button" @click="addNewIngredient">Add Ingredient</button>
          </div>

          

          <div class="group">
            <label>Methods</label>
            <div class="method" v-for="i in newRecipe.methodRows"
            :key="i">
              <textarea v-model="newRecipe.method[i-1]"></textarea>
            </div>
            <button type="button" @click="addNewStep">Add Step</button>
          </div>

          <button type="submit">Add Recipe</button>
          <button type="button" @click="togglePopup">Close</button>

        </form>

      </div>
   </div> 
</div>
</template>

<script>
import { ref } from 'vue';
import { useStore} from 'vuex';

export default {
  name: 'HomeView',
  setup(){
    const newRecipe = ref({
      title:'',
      description:'',
      ingredients: [],
      method: [],
      ingredientsRows:1,
      methodRows:1
      });

      const popupOpen = ref(false);
      const store = useStore();

      const togglePopup = () => {
        popupOpen.value = !popupOpen.value;
      }

      const addNewIngredient = () =>{
        newRecipe.value.ingredientsRows++;
         }

      const addNewStep = () =>{
        newRecipe.value.methodRows++;
      }

      const addNewRecipe = () => {
        newRecipe.value.slug = newRecipe.value.title.toLowerCase().replace(/\s/g, '-');

        if(!newRecipe.value.slug){
          alert('Please Enter a title');
          return;
     }
     
     store.commit('ADD_RECIPE', {...newRecipe.value});

           newRecipe.value = {
        title: '',
        description: '',
        ingredients: [],
        method: [],
        ingredientRows: 1,
        methodRows: 1
      };

     togglePopup();
     }


      return{
        newRecipe,
        addNewRecipe,
        togglePopup,
        popupOpen,
        addNewStep,
        addNewIngredient,
      }
        } 
}
</script>

<style>
.home{
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  color: #ff6314;
  text-decoration: underline ;
  font-size: 3rem;
  margin-bottom: 32px;
}
.recipes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
.recipes .card {
  padding: 1rem;
  border-radius: 5px;
  margin: 1rem;
  background-color: #000000b0;
}
.recipes .card h2 {
  text-decoration: underline ;
  color:#ff4a02;
  font-size: 2rem;
  margin-bottom: 1rem;
}
.recipes .card p {
  color:rgb(246, 122, 6);
  font-size: 1.125rem;
  line-height: 1.4;
  margin-bottom: 1rem;
}
.add-recipe-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.add-recipe-popup .popup-content {
  color:black;
  background-color: #f74c03;
  padding: 2rem;
  border-radius: 1rem;
  width: 100%;
  max-width: 768px;
}
.popup-content h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.popup-content .group {
  margin-bottom: 1rem;
}
.popup-content .group label {
  text-decoration: underline;
  display: block;
  margin-bottom: 0.5rem;
}
.popup-content .group input,
.popup-content .group textarea {
  display: block;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid rgb(1, 1, 1);
  background-color: rgb(201, 201, 201);
  border-radius: 5px;
  margin-bottom: 1rem;
}
.popup-content .group textarea {
  height: 100px;
  resize: none;
}
.popup-content button[type="submit"] {
  margin-right: 1rem;
}

.popup-content h2{
  text-decoration: underline;
  font-weight: bolder;
}






</style>