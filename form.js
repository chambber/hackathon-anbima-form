$.fn.upform = function () {
  var $this = $(this);
  var container = $this.find(".upform-main");
  $(document).ready(function () {
    $(container).find(".input-block").first().click();
  });

  $($this).find("form").submit(function () {
    return false;
  });

  $(container)
    .find(".input-block")
    .not(".input-block input")
    .on("click", function () {
      rescroll(this);
    });

  $(container).find(".input-block input").keypress(function (e) {
    if (e.which == 13) {
      if ($(this).hasClass("required") && $(this).val() == "") {
      } else moveNext(this);
    }
  });

  $(container).find('.input-block input[type="radio"]').change(function (e) {
    moveNext(this);
  });

  $(window).on("scroll", function () {
    $(container).find(".input-block").each(function () {
      var etop = $(this).offset().top;
      var diff = etop - $(window).scrollTop();

      if (diff > 100 && diff < 300) {
        reinitState(this);
      }
    });
  });

  function reinitState(e) {
    $(container).find(".input-block").removeClass("active");

    $(container).find(".input-block input").each(function () {
      $(this).blur();
    });
    $(e).addClass("active");
    /*$(e).find('input').focus();*/
  }

  function rescroll(e) {
    $(window).scrollTo($(e), 200, {
      offset: { left: 100, top: -200 },
      queue: false
    });
  }

  function reinit(e) {
    reinitState(e);
    rescroll(e);
  }

  function moveNext(e) {
    $(e).parent().parent().next().click();
  }

  function movePrev(e) {
    $(e).parent().parent().prev().click();
  }
};

$(".upform").upform();
$.fn.upform = function () {
  var $this = $(this);
  var container = $this.find(".upform-main");

  $(document).ready(function () {
    $(container).find(".input-block").first().click();
  });

  $($this).find("form").submit(function () {
    return false;
  });

  $(container)
    .find(".input-block")
    .not(".input-block input")
    .on("click", function () {
      rescroll(this);
    });

  $(container).find(".input-block input").keypress(function (e) {
    if (e.which == 13) {
      if ($(this).hasClass("required") && $(this).val() == "") {
      } else moveNext(this);
    }
  });

  $(container).find('.input-block input[type="radio"]').change(function (e) {
    moveNext(this);
  });

  $(window).on("scroll", function () {
    $(container).find(".input-block").each(function () {
      var etop = $(this).offset().top;
      var diff = etop - $(window).scrollTop();

      if (diff > 100 && diff < 300) {
        reinitState(this);
      }
    });
  });

  function reinitState(e) {
    $(container).find(".input-block").removeClass("active");

    $(container).find(".input-block input").each(function () {
      $(this).blur();
    });
    $(e).addClass("active");
    /*$(e).find('input').focus();*/
  }

  function rescroll(e) {
    $(window).scrollTo($(e), 200, {
      offset: { left: 100, top: -200 },
      queue: false
    });
  }

  function reinit(e) {
    reinitState(e);
    rescroll(e);
  }

  function moveNext(e) {
    $(e).parent().parent().next().click();
  }

  function movePrev(e) {
    $(e).parent().parent().prev().click();
  }
};

$(".upform").upform();


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

const choices = [
  'viajar',
  'comprar um imóvel',
  'comprar ou trocar o carro',
  'guardar dinheiro para aposentadoria',
  'rentabilizar seu patrimônio',
  'ajudar parentes ou amigos'
];

function handleChangeQ1(e) {
  console.log(e);
  var value = e.value;
  console.log('value :', value);
  var choice = choices[value - 1];
  var choiceElemento = document.getElementById('choice');
  choiceElemento.innerHTML = choice;
}

function calculatePoints() {
  let points = [];
  const q1 = document.querySelector("input[name='q1']:checked");
  const q2 = document.getElementById("question3");
  console.log('q2 :', q2);
  const q6 = document.getElementById("toggle-on-q6-1").value;
}

