/**
 * Sucht aus der Navigation (Element `nav`),
 * dass zur Adresse (`href`) passende `a` Element heraus
 * und fügt die `active` Klasse hinzu.
 */
function hightlightNav() {
  let nav = document.getElementsByTagName("nav");
  let navItems = nav[0].children;

  let currentLocation = window.location.href;

  for (let navItem of navItems) {
    if (navItem.href === currentLocation) {
      navItem.classList.add("active");
    }
  }
}
