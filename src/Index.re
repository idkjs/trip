include Global_Css;

// let options = {
//   Firebase.apiKey: EnvHelper.Firebase.apiKey,
//   authDomain: EnvHelper.Firebase.authDomain,
//   projectId: EnvHelper.Firebase.projectId,
//   databaseURL: EnvHelper.Firebase.databaseUrl,
//   appId: EnvHelper.Firebase.appId,
//   storageBucket: None,
//   messagingSenderId: None,
// };

// Firebase.initializeApp(~options);
let _ = Js.Promise.(
  BsFetchJsonp.make("https://jsonplaceholder.typicode.com/todos/1")
  |> then_(BsFetchJsonp.Response.json)
  |> then_(json => Js.log(json)|>resolve)
);
ReactDOMRe.renderToElementWithId(<App />, "root");
