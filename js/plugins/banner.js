const bannerCreateBackground = Scene_Title.prototype.createBackground;
Scene_Title.prototype.createBackground = function () {

    const self = this;
    bannerCreateBackground.call(self);
    const backSprite1 = new Sprite(ImageManager.loadCustomization("first"));
    self.addChild(backSprite1);
}