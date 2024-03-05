import { useEffect, useState } from "react";
import SideNav from "../components/home/SideNav";
import MainView from "../components/home/MainView";

// URLs
const FETCH_CATEGORIES = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
const FETCH_MEALS = (category) => `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

// Effects
const loadCategories = (setUpFxn) => {
  fetch(FETCH_CATEGORIES, {})
  .then((response) => response.json())
  .then((body) => setUpFxn(body))
}

const loadFoodItems = (category, setUpFxn) => {
  fetch(FETCH_MEALS(category), {})
  .then((response) => response.json())
  .then((body) => setUpFxn(body))
}

function Home(){

  const [foodItems, setFoodItems] = useState([]);
  const setUpFood = (body) => {
    const meals = body["meals"];
    const foodItemsList = meals.map((foodItem) => {
      const item = {
        id: foodItem["idMeal"],
        thumbnail: foodItem["strMealThumb"],
        name: foodItem["strMeal"]
      };
      return item;
    });
    console.log(`food:`, foodItemsList);
    setFoodItems(foodItemsList)
  }

  const [categories, setCategories] = useState([]);
  const setUpCategories = (body) => {
    const meals = body["meals"]
    const catList = meals.map((cat) => {
      const category = {
        id: crypto.randomUUID(),
        title: cat["strCategory"],
        count: parseInt(Math.random() * 20)
      }
      return category
    });
    loadFoodItems(catList[0].title, setUpFood)
    setCategories(catList);
  }

  
  const [categorySelected, selectCategory] = useState("");
  const changeMenu = (category) => {
    console.log("selected category", category);
    selectCategory(category)
  }

  // load all categories once
  useEffect(() => {
    loadCategories(setUpCategories)
  }, [])

  // load food when category changes
  useEffect(() => {
    loadFoodItems(categorySelected, setUpFood)
  }, [categorySelected]);

    return(
    <div className='app'>
        <aside className='side-nav'>
          <SideNav onChangeMenu={changeMenu} categories={categories} />
        </aside>
  
        <main className='main'>
          <MainView />
        </main>
    </div>
    )
}


export default Home