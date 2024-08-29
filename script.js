document.addEventListener('DOMContentLoaded', () => {
  // Authentication Section
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
      const gender = document.getElementById('gender').value;

      // BMR calculation based on gender
      let bmr;
      if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
      }

      calorieResult.innerText = `Your estimated daily caloric needs are ${Math.round(bmr)} calories/day.`;
    });
  }

  // Toggle info sections
  const infoTypeSelect = document.getElementById('info-type');
  const dishesInfo = document.getElementById('dishes-info');
  const symptomsInfo = document.getElementById('symptoms-info');
  const dishSelect = document.getElementById('dish');
  const symptomSelect = document.getElementById('symptom');
  const ingredientsTextArea = document.getElementById('ingredients');
  const instructionsTextArea = document.getElementById('instructions');
  const cureTextArea = document.getElementById('cure');

  const dishDetails = {
    shawarma: {
      ingredients: 'Chicken, garlic, yogurt, lemon juice, spices',
      instructions: 'Mix ingredients, marinate chicken, cook on grill.',
    },
    falafel: {
      ingredients: 'Chickpeas, onions, garlic, parsley, cumin',
      instructions: 'Blend ingredients, form into balls, fry in oil.',
    },
    'fool-medames': {
      ingredients: 'Fava beans, garlic, lemon, olive oil, cumin',
      instructions: 'Cook beans, mix with other ingredients, serve warm.',
    },
    koshari: {
      ingredients: 'Rice, lentils, pasta, tomato sauce, chickpeas',
      instructions: 'Cook each ingredient separately, mix together, serve with sauce.',
    },
    fattah: {
      ingredients: 'Bread, rice, meat, yogurt, tomato sauce',
      instructions: 'Layer bread, rice, meat, top with sauce and yogurt.',
    },
    mahshi: {
      ingredients: 'Vegetables (zucchini, bell peppers), rice, spices',
      instructions: 'Stuff vegetables with rice mixture, cook in tomato sauce.',
    },
    molokhia: {
      ingredients: 'Molokhia leaves, chicken, garlic, coriander',
      instructions: 'Cook molokhia leaves with chicken and spices.',
    },
  };

  const symptomCures = {
    flu: 'Rest, drink fluids, and use over-the-counter medications.',
    fever: 'Stay hydrated, rest, and take fever reducers like ibuprofen.',
    headache: 'Rest, hydrate, and use pain relievers like acetaminophen.',
    stomachache: 'Eat bland foods, stay hydrated, and rest.',
    'covid-19': 'Follow public health guidelines, rest, and consult a healthcare provider.',
  };

  if (infoTypeSelect) {
    infoTypeSelect.addEventListener('change', (event) => {
      const infoType = event.target.value;
      if (infoType === 'dishes') {
        dishesInfo.style.display = 'block';
        symptomsInfo.style.display = 'none';
      } else if (infoType === 'symptoms') {
        dishesInfo.style.display = 'none';
        symptomsInfo.style.display = 'block';
      }
    });
  }

  if (dishSelect) {
    dishSelect.addEventListener('change', (event) => {
      const selectedDish = event.target.value;
      const details = dishDetails[selectedDish];
      if (details) {
        ingredientsTextArea.value = details.ingredients;
        instructionsTextArea.value = details.instructions;
      } else {
        ingredientsTextArea.value = '';
        instructionsTextArea.value = '';
      }
    });
  }

  if (symptomSelect) {
    symptomSelect.addEventListener('change', (event) => {
      const selectedSymptom = event.target.value;
      const cure = symptomCures[selectedSymptom];
      if (cure) {
        cureTextArea.value = cure;
      } else {
        cureTextArea.value = '';
      }
    });
  }

  // Handle feedback submission
  const feedbackForm = document.getElementById('feedback-form');
  const feedbackResult = document.getElementById('feedback-result');
  const feedbackRatingDisplay = document.getElementById('feedback-rating-display');

  if (feedbackForm && feedbackResult && feedbackRatingDisplay) {
    feedbackForm.addEventListener('submit', (event) => {
      event.preventDefault();
      
      const name = document.getElementById('feedback-name').value;
      const rating = document.querySelector('input[name="feedback-rate"]:checked');
      const feedbackText = document.getElementById('feedback-text').value;
      
      if (!rating) {
        feedbackResult.innerText = 'Please select a rating.';
        return;
      }

      feedbackRatingDisplay.innerText = `You selected rating: ${rating.value}`;
      feedbackResult.innerText = `Thank you, ${name}! Your rating: ${rating.value}. Feedback: ${feedbackText}`;
    });
  }
});
