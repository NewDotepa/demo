let main = document.querySelector("main");
let GetUser = document.getElementById("user");
let GeyBasket = document.getElementById("basket");
let GetCatalog = document.getElementById("menu__link-catalog");
let GetMain = document.getElementById("menu__link-main");



GetUser.addEventListener("click", function(){
    main.innerHTML = `<form action="" method="post">
                        <div class="authFormContainer">
                            <h1>SIGN UP</h1>
                            <input type="text" placeholder="login" name="login" id="login">
                            <input type="password" placeholder="password" name="password" id="password">
                            <button type="submit" id="signUpBtn">submit</button>
                        </div>
                    </form>
                    `;
                    let login = document.getElementById("login");
                    let password = document.getElementById("password");
                    let signUpSubmit = document.getElementById("signUpBtn");

                    signUpSubmit.addEventListener("click", function(){
                        console.log(login.value);
                    });
});

