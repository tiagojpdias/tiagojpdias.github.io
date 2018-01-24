webpackJsonp([6],{MEyg:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("Dd8w"),i=s.n(a),o=s("NYxO"),n=s("UOUg"),l={name:"LeagueTable",props:{competition:{required:!0,validator:function(t){return t>0}}},beforeRouteEnter:function(t,e,s){s(function(t){return t.fetchLeagueTable()})},beforeRouteUpdate:function(t,e,s){this.fetchLeagueTable(),s()},watch:{$route:"fetchLeagueTable"},data:function(){return{matchDay:"",matchDays:48}},computed:i()({loading:function(){return this.$store.getters.isLoading([n.c,n.d])}},Object(o.b)({leagueTable:"getLeagueTable"})),methods:{fetchLeagueTable:function(){this.$store.dispatch("fetchLeague",{id:this.competition,params:{matchday:this.matchDay}}),this.$store.dispatch("fetchTeams",{id:this.competition})}}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.loading?s("div",[t._v("Loading...")]):s("div",[s("div",{staticClass:"field is-pulled-right"},[s("div",{staticClass:"control"},[s("div",{staticClass:"select"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.matchDay,expression:"matchDay"}],staticClass:"select",on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.matchDay=e.target.multiple?s:s[0]},t.fetchLeagueTable]}},[s("option",{attrs:{value:""}},[t._v("Last match day")]),t._v(" "),t._l(t.matchDays,function(e){return s("option",{key:e,domProps:{value:e,textContent:t._s(e)}})})],2)])])]),t._v(" "),s("table",{staticClass:"table is-hoverable is-fullwidth"},[t._m(0),t._v(" "),s("tbody",t._l(t.leagueTable.standing,function(e){return s("tr",{key:e.position},[s("th",{domProps:{textContent:t._s(e.position)}}),t._v(" "),s("td",{staticClass:"is-hidden-mobile"},[s("figure",{staticClass:"image is-square"},[s("img",{attrs:{alt:e.team.name,src:e.team.crestUrl}})])]),t._v(" "),s("td",[e.team.id?s("router-link",{attrs:{to:{name:"Team",params:{id:e.team.id}}},domProps:{textContent:t._s(e.team.name)}}):s("span",{domProps:{textContent:t._s(e.team.name)}})],1),t._v(" "),s("td",{domProps:{textContent:t._s(e.playedGames)}}),t._v(" "),s("td",{staticClass:"is-hidden-mobile",domProps:{textContent:t._s(e.wins)}}),t._v(" "),s("td",{staticClass:"is-hidden-mobile",domProps:{textContent:t._s(e.draws)}}),t._v(" "),s("td",{staticClass:"is-hidden-mobile",domProps:{textContent:t._s(e.losses)}}),t._v(" "),s("td",{staticClass:"is-hidden-mobile",domProps:{textContent:t._s(e.goals)}}),t._v(" "),s("td",{staticClass:"is-hidden-mobile",domProps:{textContent:t._s(e.goalsAgainst)}}),t._v(" "),s("td",{staticClass:"is-hidden-mobile",domProps:{textContent:t._s(e.goalDifference)}}),t._v(" "),s("td",{domProps:{textContent:t._s(e.points)}})])}))])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[s("abbr",{attrs:{title:"Position"}},[t._v("Pos")])]),t._v(" "),s("th",{staticClass:"is-hidden-mobile"},[s("abbr",{attrs:{title:"Crest"}},[t._v("Crest")])]),t._v(" "),s("th",[t._v("Team")]),t._v(" "),s("th",[s("abbr",{attrs:{title:"Played"}},[t._v("Pld")])]),t._v(" "),s("th",{staticClass:"is-hidden-mobile"},[s("abbr",{attrs:{title:"Won"}},[t._v("W")])]),t._v(" "),s("th",{staticClass:"is-hidden-mobile"},[s("abbr",{attrs:{title:"Drawn"}},[t._v("D")])]),t._v(" "),s("th",{staticClass:"is-hidden-mobile"},[s("abbr",{attrs:{title:"Lost"}},[t._v("L")])]),t._v(" "),s("th",{staticClass:"is-hidden-mobile"},[s("abbr",{attrs:{title:"Goals for"}},[t._v("GF")])]),t._v(" "),s("th",{staticClass:"is-hidden-mobile"},[s("abbr",{attrs:{title:"Goals against"}},[t._v("GA")])]),t._v(" "),s("th",{staticClass:"is-hidden-mobile"},[s("abbr",{attrs:{title:"Goal difference"}},[t._v("GD")])]),t._v(" "),s("th",[s("abbr",{attrs:{title:"Points"}},[t._v("Pts")])])])])}]},d=s("VU/8")(l,r,!1,null,null,null);e.default=d.exports}});
//# sourceMappingURL=6.3c195dd2887e997163d9.js.map