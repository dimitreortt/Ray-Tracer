function getCanvasContext(canvasId: string) {
  const canva: any = document.getElementById(canvasId);
  const context = canva!.getContext('2d');
  return context;
}

class CanvasDrawer {
  context: any;

  constructor(canvasId: string) {
    const context = getCanvasContext(canvasId);
    this.context = context;
  }
}
