import html from "https://cdn.skypack.dev/solid-js/html";

export default function MulInput() {
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
