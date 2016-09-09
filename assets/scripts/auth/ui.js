'use strict';

const app = require('../app');
//put it in app because there isnt any real code
// we do this to avoid circular dependency
//this way we can share data from one file and share
//among all the different files that depend on that data

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

// const updateSuccess = (data) => {
//   app.game = data.game;
//   console.log(app);
// }; NJ LEFT THIS LIKE THAT IN ..//

const signInSuccess = (data) => {
  // $('.user-display').text(data.user.email + ':'); (J)
  // $('.user-message').text('Click New Game!')
  app.user = data.user; //can use app.user or app.token. we know this because the
  console.log(app.user);
  // $('.board').css("display", "block"); //even though we did not define one. User contains the
  // $('.space').text(''); (G)
  // $('h1').text('');   //console in browser told us that we have the key user
                        //even though we did not define one. User contains the
};                      //token that we care about

const signOutSuccess = () => {
  // $('.user-display').text('');
  // $('.user-message').text('Do not dare leave me');
  // $('.total-games').text('');
  delete app.user;
  console.log(app);
  // $('.board').css("display", "none"); (G)
};


const newGameSuccess = (data) => {
  // $('.user-message').text(':)');
  app.game = data.game;
  console.log(app.game);
};

//V: getGamesByIdSuccess????????? G
const getGameSuccess = (data) => {
  app.games = data.game;
  console.log(app.games);
};

const getGamesSuccess = (data) => {
  // if(data.games){
  // console.log(data.games);
  // } else{
  // console.log('fail');
  // }
  $('.games-total').text(data.games.length + 'games');
};
  };

module.exports = {
    success,
    failure,
    signInSuccess,
    signOutSuccess,
    newGameSuccess,
    getGameSuccess,
    getGamesSuccess,
  };
