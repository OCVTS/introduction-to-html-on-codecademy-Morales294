// Sample recipe data
const recipes = [
    {
      name: "Avocado Salad",
      description: "A fresh and nutritious salad with avocado, cherry tomatoes, and olive oil.",
      category: "salads",
      img: "https://via.placeholder.com/300x200?text=Avocado+Salad"
    },
    {
      name: "Berry Smoothie",
      description: "A refreshing smoothie made with mixed berries, almond milk, and honey.",
      category: "smoothies",
      img: "https://via.placeholder.com/300x200?text=Berry+Smoothie"
    },
    {
      name: "Vegetable Soup",
      description: "A hearty vegetable soup filled with carrots, potatoes, and green beans.",
      category: "soups",
      img: "https://via.placeholder.com/300x200?text=Vegetable+Soup"
    },
    {
      name: "Greek Salad",
      description: "A classic Greek salad with feta cheese, cucumbers, olives, and olive oil.",
      category: "salads",
      img: "https://via.placeholder.com/300x200?text=Greek+Salad"
    },
    {
      name: "Mango Smoothie",
      description: "A tropical smoothie made with fresh mango, yogurt, and a splash of lime.",
      category: "smoothies",
      img: "https://via.placeholder.com/300x200?text=Mango+Smoothie"
    }
  ];
  
  // Function to display all recipes
  function displayRecipes(filteredRecipes) {
    const container = document.getElementById("recipe-container");
    container.innerHTML = ''; // Clear current recipes
  
    filteredRecipes.forEach(recipe => {
      const recipeCard = document.createElement("div");
      recipeCard.classList.add("recipe-card");
  
      recipeCard.innerHTML = `
        <img src="${recipe.img}" alt="${recipe.name}">
        <h3>${recipe.name}</h3>
        <p>${recipe.description}</p>
        <button>Get Recipe</button>
      `;
  
      container.appendChild(recipeCard);
    });
  }
  
  // Function to filter recipes based on selected category
  function filterRecipes() {
    const category = document.getElementById("category").value;
  
    // If 'All Recipes' is selected, display all recipes
    if (category === "all") {
      displayRecipes(recipes);
    } else {
      // Filter recipes based on selected category
      const filteredRecipes = recipes.filter(recipe => recipe.category === category);
      displayRecipes(filteredRecipes);
    }
  }
  
  // Initial display of all recipes
  window.onload = () => {
    displayRecipes(recipes);
  };