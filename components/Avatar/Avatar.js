export class iwAvatar extends HTMLElement {
    constructor(){
        super();

        const template = document.createElement('TEMPLATE');
        template.innerHTML = `<div class="avatar"></div>`;
        this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        const component = this.shadowRoot.querySelector('.avatar');
        const styles = document.createElement('style');
        styles.textContent = `
            .avatar {
                align-items: center;
                background-color: #2a2e2f;
                border-radius: 50%;
                color: #fff;
                display: flex;
                justify-content: center;
                overflow: hidden;
            }

            .avatar img {
                height: 100%;
                object-fit: cover;
                width: 100%;
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
        this.tooltip = this.getAttribute('tooltip') || 'Avatar';

        switch(this.size) {
            case 'xsmall':
                component.classList.add(this.size);
                break;
            case 'small':
                component.classList.add(this.size);
                break;
            case 'medium':
                component.classList.add(this.size);
                break;
            case 'large':
                component.classList.add(this.size);
                break;
            case 'xlarge':
                component.classList.add(this.size);
                break;
            default:
                component.classList.add('medium');
                break;
        }

        if(this.name) {
            component.textContent = this.name;
        }

        if(this.image) {
            let image = document.createElement('IMG');
            image.src = this.image;
            if(this.name) {
                component.textContent = '';
            }
            component.appendChild(image);
        }

        component.setAttribute('alt', this.alt);
        component.setAttribute('title', this.tooltip);   // Replace with iw_tool_tip_link class and data attribute
        
        this.shadowRoot.appendChild(styles);
    }
}