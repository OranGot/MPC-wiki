
const misc = (function(){
  function prepareCollapsible(){
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (!content){
          var content = this.parentNode.nextElementSibling;
        }
        if (content.style.display === "block") {
          content.style.display = "none";
          this.classList.remove("active")
        } else {
          content.style.display = "block";
          this.classList.add("active")
        }
      });
    }
  }

  function setupSite(){
    prepareCollapsible()
    siteTheme.updateOnPrefference()
  }

  return Object.freeze({
    prepareCollapsible,
    setupSite
  })
})()

class Theme {
  constructor(background, color, backgroundSecondary, colorSecondary, borderColor, backgroundInteracted){
    this.background = background
    this.color = color
    this.backgroundSecondary = backgroundSecondary
    this.colorSecondary = colorSecondary
    this.borderColor = borderColor
    this.backgroundInteracted = backgroundInteracted

  }
} 

var siteTheme = (function() {

  const themes = {
    "dark": new Theme("#2b2b2b","#787878","#3d3d3d","#919191","#141414","#2a2a38"),
    "light": new Theme("white","black"),
    "old light": new Theme("white","black"),
    "default": new Theme("white","black")
  }

  const templates = {
    "*": "background-color: <background>; color: <color>",
    "#toc, #overview": "border-color: <borderColor>",
    "#toc, #overview, #toc *, #overview *":"background-color: <backgroundSecondary>",
    ".collapsible": "color: <colorSecondary>",
    "hr":"color: <background>",
    ".content":"background-color: <backgroundSecondary>;color: <colorSecondary>",
    "body":"border-color: <borderColor>",
    //".collapsible:hover":"background-color: <backgroundInteracted>" //commented out cause it looks bad for now
  }

  function updateOnPrefference(){
    changeThemeTo(dataModule.getBrowserTheme())
  }

  var currentTheme = "light"
  var currentThemeContents = fetchTheme(currentTheme)

  function changeThemeTo(newThemeName){
    currentTheme = newThemeName
    currentThemeContents = fetchTheme(newThemeName)

    for (var key in templates) {
      cssModule.updateCssRule(key, fillTemplate(key))
    }
  }

  function fillTemplate(templateName){
    var templateContents = templates[templateName]
    return templateContents.replaceAll(/\<(\w+)\>/g, replaceTemplate)
  }

  function replaceTemplate(match, contents){
    var replacment = currentThemeContents[contents]
    if (replacment) return replacment
    replacment = themes.default[contents]
    if (replacment) return replacment
    console.warn("The key: '",contents ,"' was not found in the current or default theme, yet it exists in the template")
  }
  
  function fetchTheme(requestedTheme) {
    var newTheme = themes[requestedTheme]
    if (newTheme){
      return newTheme
    } else {
      console.warn("Theme:'", requestedTheme, "' does not exist, please check for typos.")
    }
    return
  };



  return Object.freeze({
    changeThemeTo,
    updateOnPrefference
  })

})();

var cssModule = (function() {
  /* won't work with file:/// because of some CORS security rules,
  instead use `python -m http.server` in CMD to make a small server for testing
  and go to http://localhost:8000 for testing, then just find your project location
  throght the exporer.
  */
  const sheet = document.styleSheets[0];
  const rules = sheet.cssRules || sheet.rules;  

  function getCssStyle(selector) {
    const len = rules.length;
    for (let i = 0; i < len; i++) {
      if (rules[i].selectorText === selector) {
        return rules[i];
      }
    }
    console.log("Selector:", selector,"not found.");
    
    return null;
  }

  function updateCssRule(selector, newCss) {
    console.log("updating css rule:",selector, "with css:",newCss)
    cssRule = getCssStyle(selector)
    if (!cssRule) {
      console.warn("if !cssRule, with css rule:", cssRule)
      return
    }

    newCss.split(";").forEach(rule => {
      console.log("updated rule:", rule)
      var [property,value] = rule.split(":")
      cssRule.style[property.trim()] = value.trim()
    });
  }

  return Object.freeze({
    updateCssRule,
    getCssStyle
  })

})();

const dataModule = (function(){
  function getBrowserTheme(){
    return (window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark")
  }

  return Object.freeze({
    getBrowserTheme
  })

})();