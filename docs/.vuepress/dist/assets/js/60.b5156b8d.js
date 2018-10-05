(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{179:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("blockquote",[s("p",[t._v("Feel free to "),s("a",{attrs:{href:"http://slack.strapi.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("join us on Slack"),s("OutboundLink")],1),t._v(" and ask questions about the migration process.")])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),s("p",[t._v("Delete your old admin folder and replace it by the new one.")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"migrating-from-3-0-0-alpha-9-to-3-0-0-alpha-10"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#migrating-from-3-0-0-alpha-9-to-3-0-0-alpha-10","aria-hidden":"true"}},[this._v("#")]),this._v(" Migrating from 3.0.0-alpha.9 to 3.0.0-alpha.10")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Here are the major changes:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Add database store config")]),this._v(" "),e("li",[this._v("New lib input")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"getting-started"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-started","aria-hidden":"true"}},[this._v("#")]),this._v(" Getting started")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Install Strapi "),e("code",[this._v("alpha.10.1")]),this._v(" globally on your computer. To do so run "),e("code",[this._v("npm install strapi@3.0.0-alpha.10.1 -g")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("When it's done, generate a new empty project "),e("code",[this._v("strapi new myNewProject")]),this._v(" (don't pay attention to the database configuration).")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"configurations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configurations","aria-hidden":"true"}},[this._v("#")]),this._v(" Configurations")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("You will have to update just 1 file: "),e("code",[this._v("package.json")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Edit the Strapi's dependencies version: (move Strapi's dependencies to "),e("code",[this._v("3.0.0-alpha.10.1")]),this._v(" version) in "),e("code",[this._v("package.json")]),this._v(" file")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"dependencies"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"lodash"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"4.x.x"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"strapi"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"3.0.0-alpha.10.1"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"strapi-mongoose"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"3.0.0-alpha.10.1"')]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"update-the-admin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#update-the-admin","aria-hidden":"true"}},[this._v("#")]),this._v(" Update the Admin")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"update-the-plugins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#update-the-plugins","aria-hidden":"true"}},[this._v("#")]),this._v(" Update the Plugins")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Copy this file "),e("code",[this._v("/plugins/users-permissions/config/jwt.json")]),this._v(" "),e("strong",[this._v("from your old project")]),this._v(" and paste it in the corresponding one in your new project.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Copy the fields and relations you had in your "),e("code",[this._v("/plugins/users-permissions/models/User.settings.json")]),this._v(" file in the new one.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Then, delete your old "),e("code",[this._v("plugins")]),this._v(" folder and replace it by the new one.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"⚠️-config-in-database"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#⚠️-config-in-database","aria-hidden":"true"}},[this._v("#")]),this._v(" ⚠️  Config in database")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To let you update your configurations when your application is deployed on multiple server instances, we have created a data store for settings. So we moved all the "),e("code",[this._v("users-permissions")]),this._v(" plugin's configs in database.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("You will have to reconfigure all your "),s("code",[t._v("users-permissions")]),t._v(" configs from the admin panel. Then delete the "),s("code",[t._v("advanced.json")]),t._v(", "),s("code",[t._v("email.json")]),t._v(" and "),s("code",[t._v("grant.json")]),t._v(" files from "),s("code",[t._v("plugins/users-permissions/config")]),t._v(" folder.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"⚠️-data-type-number"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#⚠️-data-type-number","aria-hidden":"true"}},[this._v("#")]),this._v(" ⚠️  Data type Number")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("We fixed how mongoose handles the model's "),s("code",[t._v("Number")]),t._v(" type. Previously, mongoose stored "),s("code",[t._v("Number")]),t._v(" type as "),s("code",[t._v("String")]),t._v(" and now it's "),s("code",[t._v("Integer")]),t._v(". So you will have to update all your documents which have a type "),s("code",[t._v("Number")]),t._v(" in its model and replace their "),s("code",[t._v("String")]),t._v(" value with a "),s("code",[t._v("Number")]),t._v(" one.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("That's all, you have now upgraded to Strapi "),e("code",[this._v("alpha.10")]),this._v(".")])}],!1,null,null,null);n.options.__file="migration-guide-alpha-9-to-alpha-10.md";e.default=n.exports}}]);