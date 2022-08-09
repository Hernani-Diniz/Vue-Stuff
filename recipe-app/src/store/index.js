import { createStore } from 'vuex'

export default createStore({
  state: {
    recipes: [
      {
        slug: 'chicken-marsala',
        title: 'Chicken Marsala',
        description: 'An easy 20-minute, delicious, and creamy chicken marsala! Serve over whole wheat pasta or brown rice. ',
        ingredients: [
          '3 tablespoons olive oil ',
          'salt and ground black pepper to taste ',
          '2 skinless, boneless chicken breasts, cut into cubes ',
          '1 onion, diced ',
          '1 cup sliced cremini mushrooms ',
          '1 (10.75 ounce) can condensed cream of mushroom soup ',
          '1 cup Marsala wine ',
        ],
        method: [
          'Step 1: Heat olive oil in a skillet over medium-high heat.     cook until hot and the chicken is no longer pink in the middle, 3 to 5 minutes.',
          'Step2: Season chicken with salt and pepper;',
          'Step3: Cook in hot oil until browned, 3 to 5 minutes.',
          'Step4: Stir onion and mushrooms with the chicken',
          'Step5: Continue cooking until the onion is translucent, 5 to 7 minutes.',
          'Step6: Pour cream of mushroom soup and Marsala wine over the chicken mixture',
          'Step7: Cook until hot and the chicken is no longer pink in the middle, 3 to 5 minutes',
        ]
      },
      {
        slug: 'teriyaki-chicken',
        title: ' Teriyaki Chicken',
        description: 'Try this easy, sticky Asian-style teriyaki chicken for a speedy weeknight supper! Serve it with sticky rice and steamed greens',
        ingredients: [
          '2 tbsp toasted sesame oil',
          '6 skinless and boneless chicken thighs, sliced',
          '2 large garlic cloves, crushed',
          '1 thumb-sized piece ginger, grated',
          '50g runny honey',
          '30ml light soy sauce',
          '1 tbsp rice wine vinegar',
          '1 tbsp sesame seeds , to serve',
          '4 spring onions, shredded, to serve ',
          'sticky rice, to serve ',
          'steamed bok choi or spring greens, to serve',
        ],
        method: [
          'Step1: Heat the oil in a non-stick pan over a medium heat.',
          'Step2: Add the chicken and fry for 7 mins, or until golden',
          'Step3: Add the garlic and ginger and fry for 2 mins.',
          'Step4: Stir in the honey, soy sauce, vinegar and 100ml water.',
          'Step5: Bring to the boil and cook for 2 - 5 mins over a medium heat until the chicken is sticky and coated in a thick sauce.',
          'Step6: Scatter over the spring onions and sesame seeds, then serve the chicken with the rice and steamed veg.',
        ]
      }
    ]
  },
  mutations: {
    ADD_RECIPE (state, recipe) {
      state.recipes.push(recipe)
    }
  }
})