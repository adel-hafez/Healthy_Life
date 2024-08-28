document.addEventListener('DOMContentLoaded', () => {
  const dishes = {
    'shawarma': {
      ingredients: 'Chicken breast, yogurt, garlic, lemon juice, olive oil, ground cumin, ground coriander, ground paprika, ground turmeric, ground cinnamon, salt, black pepper, pita bread, vegetables (tomato, cucumber, onion), tahini sauce.',
      instructions: '1. Marinate chicken with yogurt, garlic, lemon juice, olive oil, and spices for at least 2 hours. 2. Grill or roast the chicken until fully cooked. 3. Slice the chicken thinly. 4. Serve in pita bread with sliced vegetables and tahini sauce.'
    },
    'falafel': {
      ingredients: 'Chickpeas, onions, garlic, parsley, cilantro, ground cumin, ground coriander, baking powder, salt, black pepper, flour (for binding), vegetable oil (for frying).',
      instructions: '1. Soak chickpeas overnight, then drain. 2. Blend chickpeas with onions, garlic, parsley, cilantro, and spices until smooth. 3. Form into balls or patties. 4. Fry in hot oil until golden brown. 5. Serve with pita bread and your favorite toppings.'
    },
    'fool-medames': {
      ingredients: 'Fava beans, garlic, lemon juice, olive oil, ground cumin, salt, black pepper, fresh parsley.',
      instructions: '1. Cook fava beans in water until tender. 2. Mash beans with garlic, lemon juice, and olive oil. 3. Season with cumin, salt, and black pepper. 4. Garnish with chopped parsley and serve warm.'
    },
    'koshari': {
      ingredients: 'Rice, brown lentils, pasta, chickpeas, onions, garlic, tomatoes, vinegar, ground cumin, ground coriander, salt, black pepper, vegetable oil.',
      instructions: '1. Cook rice, lentils, and pasta separately. 2. Prepare a tomato sauce by sautéing onions and garlic, then adding tomatoes, vinegar, and spices. 3. Layer rice, lentils, pasta, and chickpeas. 4. Top with tomato sauce and fried onions.'
    },
    'fattah': {
      ingredients: 'Rice, toasted pita bread, beef or lamb (cooked), garlic, yogurt, tahini, pine nuts, salt, black pepper.',
      instructions: '1. Layer cooked rice and toasted bread in a serving dish. 2. Top with cooked beef or lamb. 3. Prepare a sauce with garlic, yogurt, and tahini, then pour over the dish. 4. Garnish with toasted pine nuts and serve.'
    },
    'mahshi': {
      ingredients: 'Vegetables (zucchini, eggplant, bell peppers), rice, ground meat (beef or lamb), onions, garlic, tomatoes, ground cumin, ground cinnamon, salt, black pepper, olive oil.',
      instructions: '1. Hollow out vegetables and set aside. 2. Mix rice with ground meat, onions, garlic, and spices. 3. Stuff vegetables with the rice mixture. 4. Cook in a tomato sauce until vegetables are tender.'
    },
    'molokhia': {
      ingredients: 'Molokhia leaves, garlic, ground coriander, chicken or beef broth, salt, black pepper, lemon juice.',
      instructions: '1. Cook molokhia leaves in broth until tender. 2. Add garlic and ground coriander. 3. Season with salt, black pepper, and lemon juice. 4. Serve with rice or bread.'
    }
  };

  const symptoms = {
    'flu': 'Rest, plenty of fluids (water, herbal teas), warm soups, over-the-counter medications (like ibuprofen or acetaminophen), and vitamin C.',
    'fever': 'Rest, stay hydrated, cool compresses, over-the-counter fever reducers (like acetaminophen or ibuprofen), light clothing.',
    'headache': 'Hydration, rest, over-the-counter pain relievers (like ibuprofen or acetaminophen), reducing stress, applying a cold or warm compress.',
    'stomachache': 'Avoiding heavy or spicy foods, drinking ginger tea, staying hydrated, eating bland foods (like rice or bananas), over-the-counter antacids.',
    'covid-19': 'Rest, stay hydrated, monitor symptoms, seek medical advice, over-the-counter medications for symptoms, and follow public health guidelines.'
  };

  // Authentication switch
  document.getElementById('show-login').addEventListener('click', () => {
    document.getElementById('auth-form').style.display = 'none';
    document.getElementById('login-form-container').style.display = 'block'; // Adjusted ID
  });

  document.getElementById('show-register').addEventListener('click', () => {
    document.getElementById('login-form-container').style.display = 'none'; // Adjusted ID
    document.getElementById('auth-form').style.display = 'block';
  });

  // Registration and Login form submission
  document.getElementById('register-form').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Registration Successful!');
  });

  document.getElementById('login-form-container').addEventListener('submit', (event) => { // Adjusted ID
    event.preventDefault();
    alert('Login Successful!');
  });

  // Calorie Counter calculation
  document.getElementById('calorie-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const age = document.getElementById('age').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    if (!age || !height || !weight) {
      document.getElementById('calorie-result').innerText = 'Please fill in all fields.';
      return;
    }

    const bmr = 10 * weight + 6.25 * height - 5 * age + 5; // Simplified BMR formula for men
    document.getElementById('calorie-result').innerText = `Your BMR is ${bmr} calories/day.`;
  });

  // Information Form handling
  document.getElementById('info-type').addEventListener('change', function() {
    const infoType = this.value;
    document.getElementById('dishes-info').style.display = infoType === 'dishes' ? 'block' : 'none';
    document.getElementById('symptoms-info').style.display = infoType === 'symptoms' ? 'block' : 'none';
    // Clear the information fields when changing types
    document.getElementById('ingredients').value = '';
    document.getElementById('instructions').value = '';
    document.getElementById('cure').value = '';
  });

  document.getElementById('dish').addEventListener('change', function() {
    const dish = this.value;
    if (dishes[dish]) {
      document.getElementById('ingredients').value = dishes[dish].ingredients;
      document.getElementById('instructions').value = dishes[dish].instructions;
    } else {
      document.getElementById('ingredients').value = '';
      document.getElementById('instructions').value = '';
    }
  });

  document.getElementById('symptom').addEventListener('change', function() {
    const symptom = this.value;
    if (symptoms[symptom]) {
      document.getElementById('cure').value = symptoms[symptom];
    } else {
      document.getElementById('cure').value = '';
    }
  });

  // Info form submission
  document.getElementById('info-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const infoType = document.getElementById('info-type').value;
    const name = document.getElementById('info-name').value;
    const infoResult = document.getElementById('info-result');

    if (infoType === 'dishes') {
      const dish = document.getElementById('dish').value;
      if (dish && dishes[dish]) {
        infoResult.innerHTML = `<h2>${dish.charAt(0).toUpperCase() + dish.slice(1)}</h2>
                                <h3>Ingredients:</h3>
                                <p>${dishes[dish].ingredients}</p>
                                <h3>Instructions:</h3>
                                <p>${dishes[dish].instructions}</p>`;
      } else {
        infoResult.innerText = 'Please select a dish.';
      }
    } else if (infoType === 'symptoms') {
      const symptom = document.getElementById('symptom').value;
      if (symptom && symptoms[symptom]) {
        infoResult.innerHTML = `<h2>${symptom.charAt(0).toUpperCase() + symptom.slice(1)}</h2>
                                <h3>Common Cure:</h3>
                                <p>${symptoms[symptom]}</p>`;
      } else {
        infoResult.innerText = 'Please select a symptom.';
      }
    } else {
      infoResult.innerText = 'Please select a valid type.';
    }
  });
});
