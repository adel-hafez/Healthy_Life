document.addEventListener('DOMContentLoaded', () => {
  // Authentication Section
  const authSection = document.getElementById('auth-section');
  const showLoginBtn = document.getElementById('show-login');
  const showRegisterBtn = document.getElementById('show-register');
  const registerForm = document.getElementById('register-form');
  const loginForm = document.getElementById('login-form');

  if (showLoginBtn && showRegisterBtn && registerForm && loginForm) {
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
  }

  // Handle calorie calculation
  const calorieForm = document.getElementById('calorie-form');
  const calorieResult = document.getElementById('calorie-result');

  if (calorieForm && calorieResult) {
    calorieForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const age = parseInt(document.getElementById('age').value);
      const height = parseInt(document.getElementById('height').value);
      const weight = parseInt(document.getElementById('weight').value);

      if (isNaN(age) || isNaN(height) || isNaN(weight)) {
        calorieResult.innerText = 'Please enter valid numbers for age, height, and weight.';
        return;
      }

      const bmr = 10 * weight + 6.25 * height - 5 * age + 5; // BMR formula for males
      calorieResult.innerText = `Your BMR is ${bmr.toFixed(2)} calories/day.`;
    });
  }

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
  const infoTypeSelect = document.getElementById('info-type');
  const dishesInfo = document.getElementById('dishes-info');
  const symptomsInfo = document.getElementById('symptoms-info');

  if (infoTypeSelect) {
    infoTypeSelect.addEventListener('change', (event) => {
      const infoType = event.target.value;
      if (dishesInfo && symptomsInfo) {
        if (infoType === 'dishes') {
          dishesInfo.style.display = 'block';
          symptomsInfo.style.display = 'none';
        } else if (infoType === 'symptoms') {
          dishesInfo.style.display = 'none';
          symptomsInfo.style.display = 'block';
        }
        updateInfoDisplay(); // Ensure information is updated when the type changes
      }
    });
  }

  // Display info based on selection
  function updateInfoDisplay() {
    const infoType = infoTypeSelect ? infoTypeSelect.value : '';
    
    if (infoType === 'dishes') {
      const dishSelect = document.getElementById('dish');
      const ingredientsTextArea = document.getElementById('ingredients');
      const instructionsTextArea = document.getElementById('instructions');
      
      if (dishSelect) {
        const dish = dishSelect.value;
        const details = dishDetails[dish];
        
        if (details) {
          ingredientsTextArea.value = details.ingredients;
          instructionsTextArea.value = details.instructions;
        } else {
          ingredientsTextArea.value = 'Dish not found';
          instructionsTextArea.value = '';
        }
      }
    } else if (infoType === 'symptoms') {
      const symptomSelect = document.getElementById('symptom');
      const cureTextArea = document.getElementById('cure');
      
      if (symptomSelect) {
        const symptom = symptomSelect.value;
        cureTextArea.value = symptomCures[symptom] || 'No information available';
      }
    }
  }

  // Attach event listeners to update info display when the selection changes
  const dishSelect = document.getElementById('dish');
  const symptomSelect = document.getElementById('symptom');

  if (dishSelect) {
    dishSelect.addEventListener('change', updateInfoDisplay);
  }

  if (symptomSelect) {
    symptomSelect.addEventListener('change', updateInfoDisplay);
  }

  // Initial call to set the correct display based on the default selected options
  updateInfoDisplay();

  // Handle feedback submission
  const feedbackForm = document.getElementById('feedback-form');
  const feedbackResult = document.getElementById('feedback-result');

  if (feedbackForm && feedbackResult) {
    feedbackForm.addEventListener('submit', (event) => {
      event.preventDefault();
      
      const name = document.getElementById('feedback-name').value;
      const rating = document.querySelector('input[name="feedback-rate"]:checked');
      const feedbackText = document.getElementById('feedback-text').value;
      
      if (!rating) {
        feedbackResult.innerText = 'Please select a rating.';
        return;
      }

      feedbackResult.innerText = `Thank you, ${name}! Your rating: ${rating.value}. Feedback: ${feedbackText}`;
    });
  }
});
