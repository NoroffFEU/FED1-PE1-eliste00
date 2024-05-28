import { appendStyle } from "./../utils/appendStyle.mjs";
export const createLoginPage = () => {
  console.log("login");
  appendStyle("/styles/login.css");
  const container = document.createElement("main");
  container.innerHTML = ` Login 

 

<form>
            <label for="email">
                  Username:
              </label>
            <input type="email" 
                   id="email"
                   name="email" 
                   placeholder="Enter your Username" required>

            <label for="password">
                  Password:
              </label>
            <input type="password"
                   id="password" 
                   name="password" 
                   placeholder="Enter your Password" required>

            <div class="wrap">
                <button type="submit"
                        onclick="solve()">
                    Login
                </button>
            </div>
        </form>
        <p>Not registered? 
              <a href="#" 
               style="text-decoration: none;">
                Create an account
            </a>
            </p>`;

  document.body.appendChild(container);
};
