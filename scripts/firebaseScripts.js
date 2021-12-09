// Import the functions you need from the SDKs you need
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getDatabase, ref, set, get, child, update, remove}
    from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPOZVapuv6UNJNBr_QVoLDkBP4ZV2PYqk",
  authDomain: "keylimepiewebsite.firebaseapp.com",
  databaseURL: "https://keylimepiewebsite-default-rtdb.firebaseio.com",
  projectId: "keylimepiewebsite",
  storageBucket: "keylimepiewebsite.appspot.com",
  messagingSenderId: "162671252448",
  appId: "1:162671252448:web:0f8700ffb4fe6e9b555185"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase();

var memName, recipe, tempRecipe, typeRecipe, allergens, link

    function dataPrep(){
        memName = document.getElementById('nameText').value;
        recipe = document.getElementById('recipeText').value;
        tempRecipe = document.getElementById('tempRecipeSelect').value;
        typeRecipe = document.getElementById('typeRecipeSelect').value;
        allergens = document.getElementById('allergensSelect').value;
        link = document.getElementById('linkText').value;
    }
   
    function InsertData(){
        set(ref(db, 'recipe/'+memName), {
            memberName: memName,
            recipeName: recipe,
            recipeTemp: tempRecipe,
            recipeType: typeRecipe, 
            recipeAllergens: allergens,
            recipeLink: link
        })
        .then(()=>{
            alert('data stored successfully');
        })
        .catch((error)=>{
            alert('unsuccessful, error'+error)
        })
    }
   
    function SelectData(){
        const dbref = ref(db);
        const name = document.getElementById('nameVal');
        const recipeTitle = document.getElementById('recipeVal');
        const temp = document.getElementById('tempRecipeVal');
        const type = document.getElementById('typeRecipeVal');
        const allergens = document.getElementById('allergensVal');
        const link = document.getElementById('linkVal');
   
   
        get(child(dbref,'recipe/'+memName)).then((snapshot)=>{
            if(snapshot.exists()){
                name.textContent = snapshot.val().memberName;
                recipeTitle.textContent = snapshot.val().recipeName;
                temp.textContent = snapshot.val().recipeTemp;
                type.textContent = snapshot.val().recipeType;
                allergens.textContent = snapshot.val().recipeAllergens;
                link.textContent = snapshot.val().recipeLink;
            }
            else{
                alert('No data found')
            }
           
        })
        .catch((error)=>{
            alert('unsuccessful, error'+error);
        })
   }
   
   
   function UpdateData(){
       update(ref(db, 'recipe/'+memName),{
            memberName: memName,
            recipeName: recipe,
            recipeTemp: tempRecipe,
            recipeType: typeRecipe, 
            recipeAllergens: allergens,
            recipeLink: link
       })
       .then(()=>{
           alert('data updated successfully');
       })
       .catch((error)=>{
           alert('unsuccessful, error'+error);
       });
   }
   
   if ($("body").data("title") === "community_recipes") {
    // Place the logic pertaining to the page with title 'my_page_title' here...
   function DeleteData(){
       remove(ref(db, 'recipe/'+memName))
       .then(()=>{
           alert('data removed successfully');
       })
       .catch((error)=>{
           alert('unsuccessful, error'+error)
       })
   }
    document.getElementById('insert').onclick = function(){
        dataPrep();
        InsertData();
    }
    
    document.getElementById('update').onclick = function(){
        dataPrep();
        UpdateData();
    }
    
    document.getElementById('delete').onclick = function(){
        dataPrep();
        DeleteData();
    }
    
    document.getElementById('select').onclick = function(){
        dataPrep();
        SelectData();
    }
}

