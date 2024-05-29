class Game{
  // ...
  public destroy(gameObject : GameObject) : void {
          this.gameObjects = this.gameObjects.filter(go=>go!=gameObject);
  }
  // ...
}
