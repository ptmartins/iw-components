export class iwAlert extends HTMLElement {
    constructor() {
        super();

        const template = document.createElement('TEMPLATE');
        template.innerHTML = `
            <div class="alert">
                <slot></slot>
                <slot></slot>
            </div>
        `;
        this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        const component = this.shadowRoot.querySelector('.alert');
        const icon = this.shadowRoot.querySelector('.alert__icon');
        const styles = document.createElement('style');
        styles.textContent = `
            :host {
                display: block;
                // all: initial;
                width: 100%;
            }

            .alert {
                display: block; 
                min-width: 0;
                overflow-wrap: break-word;
                padding: .75rem;
                width: 100%;
                word-wrap: break-word;
                word-break: break-word;
            }

            .alert--error {
                background-color: #fff2f0;
            }

            .alert--info {
                background-color: #e7f4fe;
            }

            .alert--success {
                background-color: #f6ffed;
            }

            .alert--warning {
                background-color: #fffbe6;
            }

            ::part(icon) {
                font-family: 'Font Awesome 6 Free';
                font-weight: 900;
            }
        `;

        this.shadowRoot.appendChild(styles);

        this.type = this.getAttribute('type');

        switch(this.type) {
            case 'info':
                component.classList.add(`alert--${this.type}`);
                icon.classList.add('fa-solid fa-triangle-exclamation');
                break;
            case 'error':
                component.classList.add(`alert--${this.type}`)
                break;
            case 'success':
                component.classList.add(`alert--${this.type}`)
                break;
            case 'warning':
                component.classList.add(`alert--${this.type}`)
                break;
            default: 
                break;
        }
    }
}