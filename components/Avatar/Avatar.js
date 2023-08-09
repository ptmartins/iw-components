export class iwAvatar extends HTMLElement {
    static ID = 0;

    constructor(){
        super();

        const template = document.createElement('TEMPLATE');
        template.innerHTML = `<div class="avatar"></div>`;
        this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        const styles = document.createElement('style');
        styles.textContent = `
            .avatar {
                align-items: center;
                background-color: #2a2e2f;
                border-radius: 50%;
                color: #fff;
                display: flex;
                justify-content: center;
            }

            .xsmall {
                font-size: 10px;
                height: 24px;
                width: 24px;
            }

            .small {
                font-size: 12px;
                height: 32px;
                width: 32px;
            }

            .medium {
                font-weight: bold; 
                height: 48px;
                width: 48px;
            }

            .large {
                font-size: 18px;
                font-weight: bold; 
                height: 56px;
                width: 56px;
            }

            .xlarge {
                font-size: 20px;
                font-weight: bold; 
                height: 64px;
                width: 64px;
            }
        `;

        this.name = this.getAttribute('name') || null;
        this.image = this.getAttribute('image') || null;
        this.size = this.getAttribute('size') || 'medium';
        this.alt = this.getAttribute('alt') || 'Avatar';
        this.tooltip = this.getAttribute('tooltip') || null;

        switch(this.size) {
            case 'xsmall':
                this.shadowRoot.querySelector('.avatar').classList.add(this.size);
                break;
            case 'small':
                this.shadowRoot.querySelector('.avatar').classList.add(this.size);
                break;
            case 'medium':
                this.shadowRoot.querySelector('.avatar').classList.add(this.size);
                break;
            case 'large':
                this.shadowRoot.querySelector('.avatar').classList.add(this.size);
                break;
            case 'xlarge':
                this.shadowRoot.querySelector('.avatar').classList.add(this.size);
                break;
            default:
                this.shadowRoot.querySelector('.avatar').classList.add('medium');
                break;
        }

        if(this.name) {
            this.shadowRoot.querySelector('.avatar').textContent = this.name;
        }

        this.shadowRoot.appendChild(styles);
    }
}

customElements.define('iw-avatar', iwAvatar);