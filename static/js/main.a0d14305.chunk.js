(this.webpackJsonpclickygameapp=this.webpackJsonpclickygameapp||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t(18)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),s=t(2),r=t.n(s),o=(t(13),t(3)),l=t(4),i=t(6),m=t(5),u=t(7),g=["louvre.jpg","statueofliberty.jpg","kauffmancenter.jpg","cloudgate.jpg","gatewayarch.jpg","tenthousandbuddhas.jpg","palaceofwestminster.jpg","spaceneedle.jpg","sydneyoperahouse.jpg","santorini.jpg","colosseumrome.jpg","angkorwat.jpg","sphinx.jpg","schonbrunnpalace.jpg","kualalumpur.jpg","jeffersonmemorial.jpg"],d=(t(14),function(e){return c.a.createElement("div",{className:"bg-primary navbar-dark container-fluid text-center pt-1 pb-1"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4"},c.a.createElement("h2",null,c.a.createElement("a",{href:".",className:"text-white nounderline",id:"appname"},"The Siteseeing Game"))),c.a.createElement("div",{className:"col-md-4 "+("2"==e.gameStatus?" text-danger":(e.gameStatus," text-warning"))},c.a.createElement("h3",null,e.feedback)),c.a.createElement("div",{className:"col-md-4 text-white nounderline"},c.a.createElement("h3",null,"Score: ",e.score," | Top Score: ",e.topScore))))}),h=(t(15),t(16),function(e){return c.a.createElement("img",{className:"col-md-3 col-sm-4 col-xs-12 pb-4 imageBlock rounded "+("2"==e.gameStatus?" gameLost":"1"==e.gameStatus?" gameWon":""),src:"/clickygame/images/"+e.imageName,alt:e.alt,height:e.imageBlockHeight,width:e.imageBlockWidth,onClick:e.clickHandler})}),f=function(e){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},e.imageNames.map((function(a,t){return c.a.createElement(h,{key:t,imageName:a,alt:a,clickHandler:e.clickHandler,gameStatus:e.gameStatus})}))))},p=function(){return c.a.createElement("div",{className:"jumbotron jumbotron-fluid text-center"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-8 offset-md-2 offset-md-right-2"},c.a.createElement("h1",null,"The Sightseeing Game"),c.a.createElement("h4",null,"Click on each landmark once to earn points."),c.a.createElement("h4",null,"Don't click on a landmark more than once!")))))},k=(t(17),function(){return c.a.createElement("footer",{className:"footer text-center"},c.a.createElement("span",null,"The Siteseeing Game"))}),S=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={imageNames:g,clickedImages:[],score:0,topScore:0,feedback:"Click an image to begin!",gameStatus:0},t.handleClick=function(e){var a=e.target.alt;if(t.imageClickedBefore(a))t.setState({imageNames:t.shuffle(t.state.imageNames),clickedImages:[],score:0,feedback:"You guessed the same image twice. Game over!",gameStatus:2},(function(){}));else{var n=t.state.score+1;if(n===t.state.imageNames.length)t.setState({imageNames:t.shuffle(t.state.imageNames),clickedImages:[],score:0,topScore:n,feedback:"You guessed all of the images correctly!",gameStatus:1});else{var c=t.state.clickedImages.slice();c.push(a);var s=n>t.state.topScore?n:t.state.topScore;t.setState({imageNames:t.shuffle(t.state.imageNames),clickedImages:c,score:n,topScore:s,feedback:"You guessed the image correctly! Keep going!",gameStatus:0},(function(){}))}}},t.imageClickedBefore=function(e){for(var a=0;a<t.state.clickedImages.length;a++)if(t.state.clickedImages[a]===e)return!0;return!1},t.shuffle=function(e){for(var a,t,n=e.length;0!==n;)t=Math.floor(Math.random()*n),a=e[n-=1],e[n]=e[t],e[t]=a;return e},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({imageNames:this.shuffle(this.state.imageNames)},(function(){console.log("Shuffled the images when the game starts")}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(d,{score:this.state.score,topScore:this.state.topScore,feedback:this.state.feedback,gameStatus:this.state.gameStatus}),c.a.createElement(p,null),c.a.createElement(f,{imageNames:this.state.imageNames,clickHandler:this.handleClick,gameStatus:this.state.gameStatus}),c.a.createElement(k,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.a0d14305.chunk.js.map