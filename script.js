let main = document.querySelector("main");
let GetUser = document.getElementById("user");
let basketIcon = document.getElementById("basket");



GetUser.addEventListener("click", function(){
    main.innerHTML = `<div class="auth">
                        <h1>АВТОРИЗАЦИЯ</h1>
                        <form action="" method="post">
                            <label for="username"> Логин
                                <input type="text" id="username" name="username" placeholder="Логин">
                            </label>
                        <input type="submit" value="Войти">
                        </form>
                    </div>
                    `;
                    let login = document.getElementById("login");
                    let password = document.getElementById("password");
                    

                    //signUpSubmit.addEventListener("click", function(){
                        //console.log(login.value);
                    //});
});

basketIcon.addEventListener("click", function(){
    main.innerHTML = `<div class="basket">
                        <h1>Заказ</h1>
                        <form action="" method="post" class = "basketForm">
                            <input type="date" name="date" id="date">
                            <input type="text" name="text">
                            <div class="product">
                                <input type="text" name="roduct">
                                <select name="quantity">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                </select>
                                <span class="price">Цена за единицу
                                    <input type="number" name="quantity"class="counter" min="1">
                                </span>
                            </div>
                            <span class="price_total">Итоговая стоимость:
                                <input type="number" name="quantity" class="counter__total">
                            </span>
                            <button type="submit">Добавить заказ</button>
                            <input type="hidden" name="update" value="false">
                        </form>
                    </div>
                    `;
});
