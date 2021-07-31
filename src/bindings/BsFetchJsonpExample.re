let _ = Js.Promise.(
  BsFetchJsonp.make("https://jsonplaceholder.typicode.com/todos/1")
  |> then_(BsFetchJsonp.Response.json)
  |> then_(json => Js.log(json)|>resolve)
);
