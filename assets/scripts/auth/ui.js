'use strict';

const app = require('../app.js'); //put it in app because there isnt any real code
                            // we do this to avoid circular dependency
                            //this way we can share data from one file and share
                        //among all the different files that depend on that data

const success = (data) => {
  if(data){
  console.log(data);
}
};

const failure = (error) => {
  console.error(error);
};


// const newGameSuccess = (data) => {
//   app.game = data.game;
//   console.log(app);
// };

const signInSuccess = (data) =>{
  app.user = data.user; //can use app.user or app.token. we know this because the
  console.log(app);
  $('.board').css("display", "block"); //even though we did not define one. User contains the
  $('.space').text('');
  $('h1').text('');   //console in browser told us that we have the key user
                        //even though we did not define one. User contains the
  };                      //token that we care about

  const signOutSuccess = () =>{
    delete app.user;
    console.log(app);
    $('.board').css("display", "none");
  };

  // nope
  // const updateGameSuccess = (data) => {
  //   app.game = data.game;
  //   console.log(app.game);
  // };

  // const getGamesByIdSuccess = (data) => {
  //       app.game = data.game;
  //       $(".get-id-append").append('<h1>'+ data.game.player_x.email + '  was the player'+ '</h1>');
  //       console.log(data);


  // };
  //   const getGameSuccess = (data) => {
  //     if(data.games){
  //       console.log(data.games);
  //   } else{
  //     console.log('fail');
  //   }
  // };

module.exports = {
    failure,
    success,
    signInSuccess,
    signOutSuccess,
    // newGameSuccess,
    // updateGameSuccess,
    // getGamesByIdSuccess
  };
