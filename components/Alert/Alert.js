export class iwAlert extends HTMLElement {
    constructor() {
        super();

        const template = document.createElement('TEMPLATE');
        template.innerHTML = `
            <div class="infoMessage">
                <slot></slot>
            </div>
        `;
        this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        const component = this.shadowRoot.querySelector('.infoMessaeg');
        const styles = document.createElement('style');
        styles.textContent = `
            .alert {
                word-wrap: break-word;
                word-break: break-word;
                overflow-wrap: break-word;
                min-width: 0;
                width: 100%;
            }


        `;
    }
}