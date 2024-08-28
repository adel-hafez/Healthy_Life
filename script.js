document.addEventListener('DOMContentLoaded', () => {
  const authSection = document.getElementById('auth-section');
  const showLoginBtn = document.getElementById('show-login');
  const showRegisterBtn = document.getElementById('show-register');
  const registerForm = document.getElementById('register-form');
  const loginForm = document.getElementById('login-form');
  
  showLoginBtn.addEventListener('click', () => {
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
    document.getElementById('auth-title').innerText = 'Login';
  });
  
  showRegisterBtn.addEventListener('click', () => {
    registerForm.style.display = 'block';
    loginForm.style.display = 'none';
    document.getElementById('auth-title').innerText = 'Register';
  });
  
  // Handle calorie calculation
  document.getElementById('calorie-form').addEventListener('submit', (event) => {
    event.preventDefault();
    
    const age = parseInt(document.getElementById('age').value);
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    
    const bmr = 10 * weight + 6.25 * height - 5 * age + 5; // BMR formula for males
    const calorieResult = document.getElementById('calorie-result');
    
    calorieResult.innerText = `Your BMR is ${bmr.toFixed(2)} calories/day.`;
  });

  // Ingredients and instructions for dishes
  const dishDetails = {
    shawarma: {
      ingredients: "Chicken, garlic, yogurt, lemon juice, spices",
      instructions: "Marinate chicken, cook on a grill, wrap in pita with vegetables"
    },
    falafel: {
      ingredients: "Chickpeas, onions, garlic, parsley, spices",
      instructions: "Blend ingredients, form into balls, deep fry"
    },
    'fool-medames': {
      ingredients: "Fava beans, garlic, lemon, cumin, olive oil",
      instructions: "Cook beans, mix with other ingredients, serve warm"
    },
    koshari: {
      ingredients: "Rice, lentils, pasta, tomato sauce, onions",
      instructions: "Cook ingredients separately, mix, top with tomato sauce"
    },
    fattah: {
      ingredients: "Bread, rice, meat, yogurt, garlic, vinegar",
      instructions: "Layer ingredients, top with yogurt and garlic sauce"
    },
    mahshi: {
      ingredients: "Vegetables (zucchini, bell peppers), rice, meat, spices",
      instructions: "Stuff vegetables with rice mixture, cook in tomato sauce"
    },
    molokhia: {
      ingredients: "Molokhia leaves, chicken, garlic, coriander",
      instructions: "Cook leaves with chicken, add garlic and coriander, serve with rice"
    }
  };

  // Symptom cures
  const symptomCures = {
    flu: "Rest, hydrate, and take over-the-counter medications. Consult a doctor if symptoms persist.",
    fever: "Rest, drink fluids, and use fever reducers like acetaminophen or ibuprofen.",
    headache: "Rest, stay hydrated, and use pain relievers if needed. Consider reducing screen time.",
    stomachache: "Stay hydrated, eat bland foods, and avoid fatty or spicy foods. Consult a doctor if pain continues.",
    'covid-19': "Isolate yourself, monitor symptoms, and seek medical advice. Follow CDC guidelines."
  };
  
  // Toggle info sections
  document.getElementById('info-type').addEventListener('change', (event) => {
    const infoType = event.target.value;
    const dishesInfo = document.getElementById('dishes-info');
    const symptomsInfo = document.getElementById('symptoms-info');
    
    if (infoType === 'dishes') {
      dishesInfo.style.display = 'block';
      symptomsInfo.style.display = 'none';
    } else if (infoType === 'symptoms') {
      dishesInfo.style.display = 'none';
      symptomsInfo.style.display = 'block';
    }
  });

  // Handle info submission
  document.getElementById('info-form').addEventListener('submit', (event) => {
    event.preventDefault();
    
    const infoType = document.getElementById('info-type').value;
    let result = '';
    
    if (infoType === 'dishes') {
      const dish = document.getElementById('dish').value;
      const { ingredients, instructions } = dishDetails[dish] || {};
      result = `Dish: ${dish}\nIngredients: ${ingredients || 'N/A'}\nInstructions: ${instructions || 'N/A'}`;
    } else if (infoType === 'symptoms') {
      const symptom = document.getElementById('symptom').value;
      result = `Symptom: ${symptom}\nCommon Cure: ${symptomCures[symptom] || 'No information available'}`;
    }
    
    const infoResult = document.getElementById('info-result');
    infoResult.innerText = result;
  });

  // Handle feedback submission
  document.getElementById('feedback-form').addEventListener('submit', (event) => {
    event.preventDefault();
    
    const name = document.getElementById('feedback-name').value;
    const rating = document.querySelector('input[name="feedback-rate"]:checked').value;
    const feedbackText = document.getElementById('feedback-text').value;
    
    const feedbackResult = document.getElementById('feedback-result');
    feedbackResult.innerText = `Thank you, ${name}! Your rating: ${rating}. Feedback: ${feedbackText}`;
  });
});
