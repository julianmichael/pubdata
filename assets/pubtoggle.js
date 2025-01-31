$(document).ready(function() {
  var toggles = {
    "conference": true,
    "findings": true,
    "journal": true,
    "workshop": true,
    "techreport": true,
    "thesis": true,
    "preprint": true
  };
  function toggle_type(key, new_state) {
    var toggle_class_name = ".venue-" + key + "-toggle";
    var pub_class_name = ".pub-" + key;
    var toggle_off_class = "venue-" + key + "-toggle-off";
    toggles[key] = new_state
    if(new_state) {
      $(toggle_class_name).removeClass(toggle_off_class);
      $(pub_class_name).show();
    } else {
      $(toggle_class_name).addClass(toggle_off_class);
      $(pub_class_name).hide();
    }
    return;
  }
  for (const key in toggles) {
    var toggle_class_name = ".venue-" + key + "-toggle";
    $(toggle_class_name).click(function() {
      toggle_type(key, !toggles[key]);
      return;
    });
  }
  $(".venue-all-toggle").click(function() {
    for (const key in toggles) {
      toggle_type(key, true);
    }
    return;
  })
  $(".venue-none-toggle").click(function() {
    for (const key in toggles) {
      toggle_type(key, false);
    }
    return;
  })
})