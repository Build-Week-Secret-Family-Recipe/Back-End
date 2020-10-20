# Family Recipes API

Back End API for Lambda School Build Week Project

**SERVER_URL: [https://ac-family-recipes.herokuapp.com/](https://ac-family-recipes.herokuapp.com/)**

# End Points
## Auth Router
This router will have access to all the endpoints for user interaction.

### (POST) <SERVER_URL>/api/auth/register
This endpoint will allow the registration of a new user
- **REQUIRED** - name: the user name to show on comments, login, etc
- **REQUIRED** - email: this will be used at login instead of the tipical username
- **REQUIRED** - password: this will be used to login, and will be hashed before stored on the DB
- **REQUIRED** - role: for now the default value will be always **"user"**

```
{
    "name": "the user name",
    "email": "useremail@gmail.com",
    "password": "userpassword",
    "role": "user"
}
```
#### Response
```
{
    "id": 6,
    "name": "the user name",
    "email": "useremail@gmail.com",
    "password": "********", (password hashed)
    "role": "user"
}
```

### (POST) <SERVER_URL>/api/auth/login
This endpoint will allow the login of the user into the system
- **REQUIRED** - email: this will be used at login instead of the tipical username
- **REQUIRED** - password: this will be used to login, and will be hashed before being matched with the DB

```
{
    "email": "useremail@gmail.com",
    "password": "userpassword"
}
```
#### Response
```
{
    "message": "Welcome the user name!",
    "token": "------------------" (token will be used to access restricted endpoints)
}
```

## Recipes Router
This router will have access to all the endpoints for recipes.

### (POST) <SERVER_URL>/api/recipes/user/:user_id
This endpoint will allow the creation of a new recipe linked to the user with id **:user_id**
- **REQUIRED** - recipe: will store all the recipe basic info, all the info inside is **REQUIRED**
    - title: recipe name
    - source: who provided the recipe
    - prep_time: preparation time
    - cook_time: cook time
    - servings: how much servings will be done with the actual amount of ingredients
    - image: will be the recipe image after its done, for now will be null, **Stretch**
    - share_link: this will be the code to share for share recipes, for now null, **Stretch**
- **REQUIRED** - instructions: will store an array of the instructions for the preparation
    - step: number of the step for that instruction
    - instruction_text: the instruction information
- **REQUIRED** - ingredients: will store an array of all the ingredients and the amount of them
    - qty_amount: quantity of that ingredient
    - qty_type: type of that quantity, how its messured,
    - ingredients_id: id of the ingredient in the table "ingredients"

```
{
    "recipe": {
        "title": "ANother One",
        "source": "Aunt",
        "prep_time": "10 minutes",
        "cook_time": "10 minutes",
        "servings": 6,
        "image": null,
        "share_link": null
    },
    "instructions": [
        {
            "step": 1,
            "instruction_text": "Cut one large onion and 4 peppers put to aside."
        },
        {
            "step": 2,
            "instruction_text": "Place the sausage in a large skillet over medium heat, and brown on all sides. Remove from skillet,and slice."
        },
        {
            "step": 3,
            "instruction_text": "Melt butter and olive oil in the skillet. Stir in the onion and garlic and cook 2 to 3 minutes, add in bell peppers. Season with salt,black pepper, basil,and oregano.Continue to cook and stir until peppers and onions are tender."
        }
    ],
    "ingredients": [
        {
            "qty_amount": "4",
            "qty_type": "Cloves",
            "ingredients_id": 7
        },
        {
            "qty_amount": "1/2",
            "qty_type": "tbsp",
            "ingredients_id": 8
        },
        {
            "qty_amount": "1",
            "qty_type": "tbsp",
            "ingredients_id": 9
        }
    ]
}
```
#### Response
```
8 (id of the recipe)
```
### (GET) <SERVER_URL>/api/recipes/user/:user_id
This endpoint will retrieve all the recipes for a particular user defined by **:user_id** in an array
#### Response
```
[
    {
        "id": 7,
        "title": "SDont Know the Name",
        "source": "Aunt",
        "prep_time": "10 minutes",
        "cook_time": "10 minutes",
        "servings": 6,
        "image": null,
        "share_link": null,
        "users_id": 6,
        "ratings": [
            {
                "id": 12,
                "value": 6,
                "comment": "hello i love this recipe",
                "recipes_id": 7,
                "users_id": 3
            }
        ],
        "ingredients": [
            {
                "id": 17,
                "qty_amount": "4",
                "qty_type": "Cloves",
                "recipes_id": 7,
                "ingredients_id": 7,
                "ingredient_name": "Garlic"
            },
            {
                "id": 18,
                "qty_amount": "1/2",
                "qty_type": "tbsp",
                "recipes_id": 7,
                "ingredients_id": 8,
                "ingredient_name": "Olive Oil"
            },
            {
                "id": 19,
                "qty_amount": "1",
                "qty_type": "tbsp",
                "recipes_id": 7,
                "ingredients_id": 9,
                "ingredient_name": "Butter"
            }
        ],
        "instructions": [
            {
                "id": 11,
                "step": 1,
                "instruction_text": "Cut one large onion and 4 peppers put to aside.",
                "recipes_id": 7
            },
            {
                "id": 12,
                "step": 2,
                "instruction_text": "Place the sausage in a large skillet over medium heat, and brown on all sides. Remove from skillet,and slice.",
                "recipes_id": 7
            },
            {
                "id": 13,
                "step": 3,
                "instruction_text": "Melt butter and olive oil in the skillet. Stir in the onion and garlic and cook 2 to 3 minutes, add in bell peppers. Season with salt,black pepper, basil,and oregano.Continue to cook and stir until peppers and onions are tender.",
                "recipes_id": 7
            }
        ]
    }
]
```

### (DELETE) <SERVER_URL>/api/recipes/:recipe_id
This endpoint will allow delete an specific recipe with **:recipe_id**
#### Response
```
{
    1 (rows that have being affected)
}
```
## Ratings
### (GET) <SERVER_URL>/api/ratings/insert
This endpoint will allow the insert of a new rating
- **REQUIRED** - value: value from 1 to 5 of the rating
- **REQUIRED** - comment: the comment that validate the value of user rating
- **REQUIRED** - recipes_id: theid of the recipe that will get that rating
- **REQUIRED** - users_id: the id of the user that made the reating

```
{
    "value": 5,
    "comment": "hello i love this recipe",
    "recipes_id": 1,
    "users_id": 3
}
```
#### Response
will response with an array of all the ratings for that specific recipe
```
[
    {
        "id": 1,
        "value": 5,
        "comment": "Love this recipe",
        "recipes_id": 1,
        "users_id": 1
    },
    {
        "id": 2,
        "value": 5,
        "comment": "hello i love this recipe",
        "recipes_id": 1,
        "users_id": 3
    }
]
```

### (GET) <SERVER_URL>/api/ratings/update/:rating_id
This endpoint will allow the update the information of an specific rating with id **:rating_id**
- **REQUIRED** - value: value from 1 to 5 of the rating
- **REQUIRED** - comment: the comment that validate the value of user rating
- **REQUIRED** - recipes_id: the id of the recipe that will get that rating
- **REQUIRED** - users_id: the id of the user that made the reating

only the user **"users_id"** that writedthe comment is allowed to modify it or delete it

```
{
    "value": 3,
    "comment": "Updated?",
    "recipes_id": 1,
    "users_id": 3
}
```
#### Response
will response with an array of all the ratings for that specific recipe
```
[
    {
        "id": 1,
        "value": 5,
        "comment": "Love this recipe",
        "recipes_id": 1,
        "users_id": 1
    },
    {
        "id": 2,
        "value": 5,
        "comment": "Updated?",
        "recipes_id": 1,
        "users_id": 3
    },
]
```

### (DELETE) <SERVER_URL>/api/ratings/delete/:rating_id
This endpoint will allow delete an specific rating with id **:rating_id**
- **REQUIRED** - recipes_id: the id of the recipe that contain the rating
- **REQUIRED** - users_id: the id of the user that made the reating

only the user **"users_id"** that writed the comment is allowed to modify it or delete it

```
{
    "users_id": 3,
    "recipes_id": 8
}
```
#### Response
will response with an array of all the ratings for that specific recipe
```
[
    {
        "id": 11,
        "value": 6,
        "comment": "hello i love this recipe",
        "recipes_id": 8,
        "users_id": 3
    },
    {
        "id": 12,
        "value": 5,
        "comment": "hello i love this recipe",
        "recipes_id": 8,
        "users_id": 3
    }
]
```
