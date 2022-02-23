import { render } from "https://deno.land/x/mulink@14/solid-js-web.js";
import html from "https://deno.land/x/mulink@14/solid-js-html.js";

function MulInput() {
  return html`
    <div class="custom-text-input" id="custom-text-input">
      <input
        type="text"
        id="app_name"
        name="app_name"
        pattern="^[ws-]{1,48}$"
        placeholder=" "
        required
      />
      <label>App name (Required)</label>
    </div>
  `;
}

const App = () => html`
<${MulInput}/>
`

if (document && document.body) render(App, document.body);
