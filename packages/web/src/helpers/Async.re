let let_ = (prop, cb) => Js.Promise.then_(cb, prop);