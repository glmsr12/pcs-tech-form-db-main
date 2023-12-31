<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <script>
    var HttpClient = function() {
        this.get = function(aUrl, aCallback) {
            var anHttpRequest = new XMLHttpRequest();
            anHttpRequest.onreadystatechange = function() {
                if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                    aCallback(anHttpRequest.responseText);
            }

            anHttpRequest.open("GET", aUrl, true);
            anHttpRequest.send(null);
        }
    }

    get_users();

    function get_users() {
        var client = new HttpClient();
        client.get("http://localhost:8888/api/users.php", function(response) {
            console.log(response);
            var users = JSON.parse(response);
            var list = document.getElementById('api_results');

            for (var user of users) {
                var elem = document.createElement('div');
                elem.style = 'margin:25px;color:darkgrey';
                elem.innerHTML = 'UserId: ' + user.id + ' Login:' + user.login + '<br>';
                list.appendChild(elem);
            }
        });
    }
    </script>
    <?php include 'menu.php'?>
    <div class="page-content">
        <h2>Home page</h2>
        <?php 
                if (isset($_SESSION['username']))
                {
                    echo "You are logged in as: " . $_SESSION['username'];
                } else {
                    echo "You are not logged in";
                }
            ?>
    </div>
    <hr>
    <div id="api_results">
        <div class="block_container">
            <div class="block" id="blockone">Content</div>
            <div class="block">Content</div>
            <div class="block">Content</div>
        </div>

    </div>
    <script>
    //Writing into an HTML element, using innerHTML
    //First method
    //document.getElementById("blockone").innerHTML = "Change the content";

    //Second Method  
    //var my_id = document.getElementById("blockone");
    //my_element.innerHTML = "dsfdsfds";


    //Writing into the HTML output 
    //document.write("This is the message you need!");


    // window.alert("Hello World:)");

    //console.log("Hey you there! This is a console message!")

    var x = 10;
    var y = 11;

    // document.write(x * y);

    var message = "The result is:";

    // document.write(message);
    document.write(message + " " + (x * y));

    var auth = {
        login: "jane@doe.com",
        password: "1234"
    }

    document.write(auth);
    </script>
</body>

</html>