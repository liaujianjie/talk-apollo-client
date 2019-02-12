// Adapted from: https://stackoverflow.com/a/51079476/4773291

"use strict";
module.exports = function(Model, options) {
  // get the user model
  var User = Model.getDataSource().models.User;
  var safeGet = require("l-safeget");
  // create relation to the User model and call it owner
  Model.belongsTo(User, { as: "owner", foreignKey: "ownerId" });

  // each time your model instance is saved, make sure the current user is set as the owner
  // need to do this for upsers too (code not here)
  Model.observe("before save", (ctx, next) => {
    var instanceOrData = ctx.data ? "data" : "instance";
    ctx[instanceOrData].ownerId = ctx.options.accessToken.userId;
    next();
  });

  // Model.observe("access", (ctx, next) => {
  //   const userId = safeGet(ctx, "options.accessToken.userId");
  //   // if (!userId) return next(); // no access token, internal or test request;
  //   var userIdClause = { ownerId: userId };

  //   // this part is tricky because you may need to add
  //   // the userId filter to an existing where-clause
  //   ctx.query = ctx.query || {};
  //   if (ctx.query.where) {
  //     if (!ctx.query.where.ownerId) {
  //       var tmpWhere = ctx.query.where;
  //       ctx.query.where = {};
  //       ctx.query.where.and = [tmpWhere, userIdClause];
  //     }
  //   } else {
  //     ctx.query.where = userIdClause;
  //   }

  //   next();
  // });

  // Model.observe("loaded", (ctx, next) => {
  //   console.log(ctx);
  //   next();
  // });
};
