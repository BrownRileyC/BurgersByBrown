// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-state-burger").on("click", function(event) {
      var id = $(this).data("id");
      var newState = $(this).data("state");
      console.log(id);
  
      var newEatenState = {
        Eaten: newState
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id +"/"+parseInt(JSON.stringify(newState)), {
        type: "PUT",
        data: newEatenState
      }).then(
        function() {
          console.log("changed devoured to", newState);
          location.reload();
          // Reload the page to get the updated list
        }
      );
    });

    $(".remove-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE",
      }).then(
        function() {
          console.log("The Delete Ran");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#newBurger").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new Burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  