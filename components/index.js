import { iwAvatar } from "./Avatar/Avatar.js";

if (!window.customElements.get('iw-avatar')) {
    window.customElements.define('iw-avatar', iwAvatar);
}

export {iwAvatar};