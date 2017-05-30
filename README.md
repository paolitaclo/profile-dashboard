# Profile Dashboard
Profile Dashboard is a MERN (MongoDB, Express, React, Node) Stack application, in which a user is able to:
- see all the profiles from other users (stored using MongoDB)
- log in with his/her username
- update his/her name, profile picture( by inserting an url) and a description, using a form.
- save the changes made.


Clone the repo and run `npm install`.

To run the application: `npm run start-dev`.

To start with some data in MongoDB, make a POST request to the localhost following this Structure:
```
{
  "username": "pao123",
  "imageurl": "https://marketplace.canva.com/MAB4Yqx-uWs/1/thumbnail/canva-young-executive-woman-profile-icon--MAB4Yqx-uWs.png",
  "description": "Hi My name is Paola and I love schnauzers\n",
  "user": "Paola Claros"
}
```

Here you have a few user information to test and post to the database:

```
[
  {
    "username": "beauu",
    "imageurl": "https://s-media-cache-ak0.pinimg.com/236x/af/3d/28/af3d285776cf5d3dc6dec42d8e8042ec.jpg",
    "description": "Hi my name is Beau and I'm from China!",
    "user": "Beau",
  },
  {
    "username": "lunalunera",
    "imageurl": "https://s-media-cache-ak0.pinimg.com/736x/df/94/62/df9462de2caf6101214efcca5f44f8f3.jpg",
    "description": "Hi My name is Luna and I love to chase squirels",
    "user": "Luna"
  },
  {
    "username": "gamergame",
    "imageurl": "https://jamesito1miniclip.files.wordpress.com/2013/01/chef-dk-7181.png",
    "description": "Hi My name is Nicolas, I'm studying Industrial Engineering and like to play video games",
    "user": "Nicolas Claros"
  }
]
```
