export class iwAvatar extends HTMLElement {
    static ID = 0;

    constructor(){
        super();

        this.attachShadow({ mode: 'open' });

        const template = document.createElement('template');
        template.innerHTML = `<div class="avatar"></div>`;

        const styles = document.createElement('style');
        styles.textContent = `
            .avatar {
                width: 52px;
                height: 52px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: rebeccapurple;
                border-radius: 50%;
                font-family: sans-serif;
                color: #fff;
                font-weight: bold;
                font-size: 16px;
            }
        `;

        this.shadowRoot.appendChild(styles);
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}