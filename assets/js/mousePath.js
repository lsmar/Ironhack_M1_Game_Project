class MouseHistory {
  constructor(context, x0, y0) {
    this.ctx = context;
    this.x0 = x0;
    this.y0 = y0;
    this.history = [];
    this.history.push({ x: this.x0, y: this.y0 });
  }
  addPosToHistory = (mouseX, mouseY) => {
    this.history.push({ x: mouseX, y: mouseY });
  };
}
