$(document).ready(function () {
  $(".hot").hover(
    function () {
      const keyword = this.getAttribute("data-keyword");
      const highlightClass = `highlight-${keyword}`;
      
      // Find and highlight all elements with the corresponding highlight class
      $(`.${highlightClass}`).each(function() {
        // Mark the entire text content as one unit
        // This preserves spaces between words in the highlight
        $(".content").mark($(this).text(), {
          "accuracy": "exactly",
          "separateWordSearch": false,
          "className": "marked-text"
        });
      });
    },
    function () {
      $(".content").unmark();
    }
  );

  // Replace individual section arrows with a single main toggle
  $("#main-toggle").on("click", function (event) {
    $(this).find("img").toggleClass("rotate");
    $(this).find("img").toggleClass("rotate-reset");
    $(".detail").toggleClass("show");
  });
});
