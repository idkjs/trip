type t;
type response;

[@bs.module] external make : string => Js.Promise.t(response) = "fetch-jsonp";

module Response {
  type t = response;

  [@bs.send.pipe : response] external json : Js.Promise.t(Js.Json.t) = "json";
  [@bs.send.pipe : response] external text : Js.Promise.t(string) = "text";
}
