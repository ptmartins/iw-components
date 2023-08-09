export class iwButton extends HTMLElement {
    constructor(){
        super();

        const template = document.createElement('TEMPLATE');
        template.innerHTML = `
            <button class="btn">
                <slot></slot>
            </button> 
        `;
        this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        const component = this.shadowRoot.querySelector('.btn');
        const styles = document.createElement('style');
        styles.textContent = `
            .btn {
                background-color: #666;
                border: none;
                border-image-width: 0;
                color: #fff;
                cursor:pointer;
                display: inline-block;
                line-height: 1;
                padding: .75rem;
                text-align: center;           
                text-decoration: none;
                vertical-align: middle;
            }
            
            .btn--main {
                background-color: #404040;
            }
            
            .btn--kill {
                background-color: #d9534f;
            }

            .btn--mini {
                font-size: 11px;
            }
            
            .btn.is-disabled,
            .btn.is-disabled:hover,
            .btn:disabled {
                cursor: default;
                opacity: .65;
            }
            
            .btn.is-disabled,
            .btn.is-disabled:hover {
                pointer-events: none;
            }
        `;

        this.type = this.getAttribute('type') || 'default';

        switch(this.type) {
            case 'main':
                component.classList.add(`btn--${this.type}`);
                break;
            case 'kill':
                component.classList.add(`btn--${this.type}`);
                break;
            case 'disabled':
                component.classList.add(`is-${this.type}`);
                break;
            case 'mini':
                component.classList.add(`btn--${this.type}`);
                break;
            default:
                break;
        }

        this.shadowRoot.appendChild(styles);
    }
}