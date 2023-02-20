// te gebruiken voor filters

function onRouteChanged() {
    const hash = window.location.hash;
    const routerView = document.getElementById("router-view");
  
    if (!(routerView instanceof HTMLElement)) {
      throw new ReferenceError("No router view element available for rendering");
    }
  
    switch (hash) {
      case "#AZ":
        routerView.innerHTML = "<h2>Daily quote</h2>";
        break;
  
    //   default:
    //     routerView.innerHTML = "<h2>404 - Page Not Found</h2>";
    //     break;
   }
}

onRouteChanged();

export { onRouteChanged };