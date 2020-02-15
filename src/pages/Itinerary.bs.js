// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Block from "bs-platform/lib/es6/block.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as $$String from "bs-platform/lib/es6/string.js";
import * as Belt_List from "bs-platform/lib/es6/belt_List.js";
import * as Belt_Option from "bs-platform/lib/es6/belt_Option.js";
import * as Prelude$Tripdeer from "../helpers/Prelude.bs.js";
import * as CountryT$Tripdeer from "../types/CountryT.bs.js";
import * as Editable$Tripdeer from "../components/Editable.bs.js";
import * as Itinerary_Css$Tripdeer from "./Itinerary_Css.bs.js";

function reducer(state, action) {
  switch (action.tag | 0) {
    case /* GetCountry */0 :
        return {
                country: action[0],
                itineraries: state.itineraries,
                inputFocusingEvent: state.inputFocusingEvent
              };
    case /* GetItineraries */1 :
        return {
                country: state.country,
                itineraries: action[0],
                inputFocusingEvent: state.inputFocusingEvent
              };
    case /* InputFocusingEventChanged */2 :
        return {
                country: state.country,
                itineraries: state.itineraries,
                inputFocusingEvent: action[0]
              };
    
  }
}

function setItinerties(value, itineraries, index, dispatch) {
  var match = Belt_Option.isSome(Belt_List.get(itineraries, index));
  if (index === 0 && !match) {
    return Curry._1(dispatch, /* GetItineraries */Block.__(1, [/* :: */[
                    {
                      index: index,
                      value: value
                    },
                    /* [] */0
                  ]]));
  }
  if (match) {
    return Curry._1(dispatch, /* GetItineraries */Block.__(1, [Belt_List.map(itineraries, (function (item) {
                          var match = index === item.index;
                          if (match) {
                            return {
                                    index: item.index,
                                    value: value
                                  };
                          } else {
                            return {
                                    index: item.index,
                                    value: item.value
                                  };
                          }
                        }))]));
  } else {
    console.log("come here");
    console.log(index);
    return Curry._1(dispatch, /* GetItineraries */Block.__(1, [Belt_List.concat(itineraries, /* :: */[
                        {
                          index: index,
                          value: value
                        },
                        /* [] */0
                      ])]));
  }
}

function Itinerary(Props) {
  var search = Props.search;
  var match = React.useReducer(reducer, {
        country: /* NONE */199,
        itineraries: /* [] */0,
        inputFocusingEvent: /* NoEvent */2
      });
  var dispatch = match[1];
  var match$1 = match[0];
  var itineraries = match$1.itineraries;
  React.useEffect((function () {
          Curry._1(dispatch, /* GetCountry */Block.__(0, [CountryT$Tripdeer.fromString(decodeURIComponent($$String.lowercase_ascii(search.replace("country=", ""))).replace(" ", "-"))]));
          return ;
        }), /* array */[search]);
  return React.createElement("div", {
              className: Itinerary_Css$Tripdeer.container
            }, React.createElement("h1", {
                  className: Itinerary_Css$Tripdeer.title
                }, Prelude$Tripdeer.s(CountryT$Tripdeer.toString(match$1.country))), itineraries ? React.createElement("ul", {
                    className: Itinerary_Css$Tripdeer.list
                  }, Prelude$Tripdeer.RR.list(Belt_List.mapWithIndex(itineraries, (function (idx, itinerary) {
                              return React.createElement("li", {
                                          key: String(idx),
                                          className: Itinerary_Css$Tripdeer.listItem
                                        }, React.createElement(Editable$Tripdeer.make, {
                                              text: itinerary.value,
                                              index: idx,
                                              onBlur: (function (value) {
                                                  return setItinerties(value, itineraries, idx, dispatch);
                                                })
                                            }));
                            }))), React.createElement("li", {
                        key: String(Belt_List.length(itineraries)),
                        className: Itinerary_Css$Tripdeer.listItem
                      }, React.createElement(Editable$Tripdeer.make, {
                            index: Belt_List.length(itineraries),
                            onBlur: (function (value) {
                                if (value === "") {
                                  return /* () */0;
                                } else {
                                  return setItinerties(value, itineraries, Belt_List.length(itineraries), dispatch);
                                }
                              })
                          }))) : React.createElement("ul", {
                    className: Itinerary_Css$Tripdeer.list
                  }, React.createElement("li", {
                        className: Itinerary_Css$Tripdeer.listItem
                      }, React.createElement(Editable$Tripdeer.make, {
                            index: 0,
                            onBlur: (function (value) {
                                setItinerties(value, itineraries, 0, dispatch);
                                return Curry._1(dispatch, /* InputFocusingEventChanged */Block.__(2, [/* Blur */1]));
                              }),
                            onFocus: (function (param) {
                                return Curry._1(dispatch, /* InputFocusingEventChanged */Block.__(2, [/* Focus */0]));
                              })
                          }))));
}

var Css = /* alias */0;

var make = Itinerary;

export {
  Css ,
  reducer ,
  setItinerties ,
  make ,
  
}
/* react Not a pure module */