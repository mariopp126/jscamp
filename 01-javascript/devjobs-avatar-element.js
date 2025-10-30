class DevJobsAvatarElement extends HTMLElement {
  constructor() {
    super(); // llamar al constructor de la clase base HTMLElement
    this.attachShadow({ mode: "open" });
  }

  createUrl(service, username, size) {
    return `https://unavatar.io/${service}/${username}`;
  }

  render() {
    const service = this.getAttribute("service") ?? "google";
    const username = this.getAttribute("username") ?? "yongleondev";
    const size = this.getAttribute("size") ?? "32";
    const url = this.createUrl(service, username, size);

    this.shadowRoot.innerHTML = `
        <style>
            img.avatar {
                border-radius: 50%;
                width: ${size}px;
                height: ${size}px;
            }
        </style>
            <img 
                src="${url}" 
                alt="Avatar" 
                class="avatar"
            />
        `;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("devjobs-avatar", DevJobsAvatarElement);
