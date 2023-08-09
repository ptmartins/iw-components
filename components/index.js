import { iwAvatar } from "./Avatar/Avatar.js";
import { iwButton } from "./Button/Button.js";

if (!window.customElements.get('iw-avatar')) {
    window.customElements.define('iw-avatar', iwAvatar);
}

if (!window.customElements.get('iw-button')) {
    window.customElements.define('iw-button', iwButton);
}

export {iwAvatar};