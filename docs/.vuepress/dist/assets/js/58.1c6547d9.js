(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{181:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("blockquote",[e("p",[t._v("Feel free to "),e("a",{attrs:{href:"http://slack.strapi.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("join us on Slack"),e("OutboundLink")],1),t._v(" and ask questions about the migration process.")])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),e("p",[t._v("Delete your old admin folder and replace by the new one.")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"migrating-from-3-0-0-alpha-7-3-to-3-0-0-alpha-8"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#migrating-from-3-0-0-alpha-7-3-to-3-0-0-alpha-8","aria-hidden":"true"}},[this._v("#")]),this._v(" Migrating from 3.0.0-alpha.7.3 to 3.0.0-alpha.8")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Here are the major changes:")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Fix deployment process")]),this._v(" "),s("li",[this._v("Setup database connection on project creation")]),this._v(" "),s("li",[this._v("Helper for table creation for SQL database")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started","aria-hidden":"true"}},[this._v("#")]),this._v(" Getting started")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Install Strapi "),s("code",[this._v("alpha.8")]),this._v(" globally on your computer. To do so run "),s("code",[this._v("npm install strapi@3.0.0-alpha.8 -g")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("When it's done, generate a new empty project "),s("code",[this._v("strapi new myNewProject")]),this._v(" (don't pay attention to the database configuration).")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"configurations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configurations","aria-hidden":"true"}},[this._v("#")]),this._v(" Configurations")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("You will have to update just 1 file: "),s("code",[this._v("package.json")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Edit the scripts section: (only the "),s("code",[this._v("setup")]),this._v(" line has changed)")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{attrs:{class:"token property"}},[t._v('"scripts"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{attrs:{class:"token property"}},[t._v('"setup"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"cd admin && npm run setup"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{attrs:{class:"token property"}},[t._v('"start"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"node server.js"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{attrs:{class:"token property"}},[t._v('"strapi"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"node_modules/strapi/bin/strapi.js"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{attrs:{class:"token property"}},[t._v('"lint"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"node_modules/.bin/eslint api/**/*.js config/**/*.js plugins/**/*.js"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{attrs:{class:"token property"}},[t._v('"postinstall"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"node node_modules/strapi/lib/utils/post-install.js"')]),t._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Edit the Strapi's dependencies version: (move Strapi's dependencies to "),s("code",[this._v("3.0.0-alpha.8")]),this._v(" version)")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{attrs:{class:"token property"}},[t._v('"dependencies"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{attrs:{class:"token property"}},[t._v('"lodash"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"4.x.x"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{attrs:{class:"token property"}},[t._v('"strapi"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"3.0.0-alpha.8"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{attrs:{class:"token property"}},[t._v('"strapi-mongoose"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"3.0.0-alpha.8"')]),t._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"update-the-admin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update-the-admin","aria-hidden":"true"}},[this._v("#")]),this._v(" Update the Admin")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"update-the-plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update-the-plugins","aria-hidden":"true"}},[this._v("#")]),this._v(" Update the Plugins")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("Copy these 3 files "),e("code",[t._v("/plugins/users-permissions/config/jwt.json")]),t._v(", "),e("code",[t._v("/plugins/users-permissions/config/roles.json")]),t._v(" and "),e("code",[t._v("/plugins/users-permissions/models/User.settings.json")]),t._v(" "),e("strong",[t._v("from your old project")]),t._v(" and paste them in the corresponding ones in your new project. It is important to save these files.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Then, delete your old "),s("code",[this._v("plugins")]),this._v(" folder and replace it by the new one.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("That's all, you have now upgraded to Strapi "),s("code",[this._v("alpha.8")]),this._v(".")])}],!1,null,null,null);n.options.__file="migration-guide-alpha-7-4-to-alpha-8.md";s.default=n.exports}}]);