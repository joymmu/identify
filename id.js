// JavaScript Document
$("#with-tab").click(function () {
  $("#with-tab").addClass("active");
  $("#without-tab").removeClass("active");

  $("#with-without-animation").removeClass("with-without-animation-trigger");
  $("#with-without-animation").removeClass("reverse-animate");
  void $("#with-without-animation")[0].offsetWidth; //restart animation
  $("#with-without-animation").addClass("with-without-animation-trigger");

  labelPoppingInterval.enable();
});
$("#without-tab").click(function () {
  $("#without-tab").addClass("active");
  $("#with-tab").removeClass("active");

  //hide all labels
  $("#with-without-animation .label").css("opacity", 0);

  $("#with-without-animation").removeClass("with-without-animation-trigger");
  void $("#with-without-animation")[0].offsetWidth; //restart animation
  $("#with-without-animation").addClass("reverse-animate");
  $("#with-without-animation").addClass("with-without-animation-trigger");
});

$("#with-without-animation-ao-4").click(function () {
  if (!$("#with-tab").hasClass("active")) {
    return;
  }
  labelPoppingInterval.disable();
  $("#with-without-animation .label").css("opacity", 0);
  $("#label-1").css("opacity", 1);
});
$("#with-without-animation-ao-5").click(function () {
  if (!$("#with-tab").hasClass("active")) {
    return;
  }
  labelPoppingInterval.disable();
  $("#with-without-animation .label").css("opacity", 0);
  $("#label-2").css("opacity", 1);
});
$("#with-without-animation-ao-6").click(function () {
  if (!$("#with-tab").hasClass("active")) {
    return;
  }
  labelPoppingInterval.disable();
  $("#with-without-animation .label").css("opacity", 0);
  $("#label-3").css("opacity", 1);
});
$("#with-without-animation-ao-7").click(function () {
  if (!$("#with-tab").hasClass("active")) {
    return;
  }
  labelPoppingInterval.disable();
  $("#with-without-animation .label").css("opacity", 0);
  $("#label-4").css("opacity", 1);
});
$("#with-without-animation-ao-9").click(function () {
  if (!$("#with-tab").hasClass("active")) {
    return;
  }
  labelPoppingInterval.disable();
  $("#with-without-animation .label").css("opacity", 0);
  $("#label-5").css("opacity", 1);
});
$("#with-without-animation-ao-8").click(function () {
  if (!$("#with-tab").hasClass("active")) {
    return;
  }
  labelPoppingInterval.disable();
  $("#with-without-animation .label").css("opacity", 0);
  $("#label-6").css("opacity", 1);
});

setInterval(labelPoppingInterval, 1500);

function labelPoppingInterval() {
  if (!$("#with-tab").hasClass("active")) {
    return;
  }
  if (!labelPoppingInterval.playing) {
    return;
  }
  if (labelPoppingInterval.currentIndex == undefined) {
    labelPoppingInterval.currentIndex = 0;
  }
  var i = labelPoppingInterval.currentIndex;
  var ids = [
    "#label-1",
    "#label-2",
    "#label-3",
    "#label-4",
    "#label-5",
    "#label-6",
  ];

  if (labelPoppingInterval.firstIteration) {
    labelPoppingInterval.firstIteration = false;
    labelPoppingInterval.currentIndex = 0;
    $(ids[0]).css("opacity", 1);
  } else {
    $(ids[i]).css("opacity", 0);
    i++;
    if (i > ids.length - 1) {
      i = 0;
    }
    $(ids[i]).css("opacity", 1);
    labelPoppingInterval.currentIndex = i;
  }
}

labelPoppingInterval.enable = function () {
  setTimeout(function () {
    labelPoppingInterval.playing = true;
    labelPoppingInterval.firstIteration = true;
  }, 2000);
};

labelPoppingInterval.disable = function () {
  labelPoppingInterval.playing = false;
};

(function () {
  //when embedding multiple containers on the same page,
  //consolidate script by adding all container Id's and
  //trigger classes here:
  var activatingClasses = [
    {
      containerId: "with-without-animation",
      animationClass: "with-without-animation-trigger",
    },
  ];

  var refreshAnimationState = function () {
    var d = document.getElementById("with-without-animation");
    var ratio = d.dataset.whratio;
    d.style.height = d.offsetWidth / ratio + "px";
  };

  document.addEventListener("scroll", function () {
    refreshAnimationState();
  });
  window.addEventListener("resize", function () {
    refreshAnimationState();
  });
  refreshAnimationState();
})();
