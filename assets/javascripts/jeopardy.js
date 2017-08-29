(function () {

  $(function () {

    debugger;

    let answer;
    let user_answer_elem = $('#user-answer');
    let score = $('#score')
    let game_points;

    function callAPI() {
      $.get("http://jservice.io/api/random", function(data){
            $('#question').html(data[0].question);
            $('#category').html(data[0].category.title);
            $('#points').html(game_points = data[0].value);
            answer = data[0].answer;
            console.log(answer);
      })
    }

    callAPI();

    function getText() {
      return user_answer_elem.val();
    }


    $('#submit-button').click(function () {
      user_answer = getText()
      console.log(user_answer);

      user_answer_elem.val('')

      user_answer_case_insensitive = new RegExp(user_answer, 'i')

      if (user_answer_case_insensitive.test(answer)) {
        score.html(parseInt(score.html()) + parseInt(game_points));
        $('#correct_answer').html("Correct!")
      } else {
        $('#correct_answer').html("Incorrect! The correct answer is: " + answer)
      }

      callAPI();
    })

  })



})()
