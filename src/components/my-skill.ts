class MySkill extends HTMLElement {
  name: string;
  level: number;
  inactive: string | null;
  href: string | null;

  constructor() {
    super();
    this.name = this.getAttribute('name') as string;
    this.level = parseInt(this.getAttribute('level') || '0');
    this.inactive = this.getAttribute('inactive');
    this.href = this.getAttribute('href');

    this.innerHTML = `
      <span>
        ${this.#renderLevel()}
        ${this.#renderName()}
      </span>
    `;
  }

  #renderName() {
    return this.href ? `<a href="${this.href}" target="_blank">${this.name}</a>` : `<i>${this.name}</i>`;
  }

  #renderLevel() {
    if (this.level) {
      return `
        <pre>[
          ${'='.repeat(this.level)}
          ${this.inactive ? '&nbsp;' : '<i>=</i>'}
          ${'&nbsp;'.repeat(19 - this.level)}
        ]</pre>
      `.replace(/\s/g, '');
    }
    return '';
  }
}
window.customElements.define('my-skill', MySkill);
