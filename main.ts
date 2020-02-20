enum ActionKind {
    Walking,
    Idle,
    Jumping,
    goingup,
    goingdown,
    goingright,
    goingleft,
    Running_Scared,
    Blinking,
    Death
}
namespace SpriteKind {
    export const Door = SpriteKind.create()
    export const Spirit = SpriteKind.create()
}
function Play_Opening_Melody () {
    scene.setBackgroundImage(img`
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f 2 2 2 2 2 f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f 2 2 2 2 2 2 f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 f f f 2 2 2 2 2 2 2 2 2 2 2 2 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 f f f 2 2 2 2 2 2 2 2 2 2 2 2 f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f 2 2 2 2 2 2 2 2 f f f f 2 2 2 2 2 2 2 2 2 2 2 2 f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f 2 2 2 2 2 2 2 2 f f f f f 2 2 2 2 2 2 2 2 2 2 2 f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f 2 2 2 2 2 2 2 f f f f f f f 2 2 2 2 2 2 2 2 2 f f f f f 2 2 2 2 2 2 2 2 2 2 2 f f f f 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f 2 2 2 2 2 2 2 f f f f f f f 2 2 2 2 2 2 2 2 2 f f f f f f 2 2 2 2 2 2 2 2 2 2 f f f f f f 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f 2 2 2 2 2 2 2 f f f f f f f f 2 2 2 2 2 2 2 2 f f f f f f 2 2 2 2 2 2 2 2 2 2 f f f f f f 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f 2 2 2 2 2 2 f f f f f f f f 2 2 2 2 2 2 2 2 f f f f f f f 2 2 2 2 2 2 2 2 f f f f f f f f 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f 2 2 2 2 2 f f f f f f f f f f 2 2 2 2 2 2 f f f f f f f f f 2 2 2 2 2 2 2 f f f f f f f f 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    `)
    music.playTone(92, music.beat(BeatFraction.Quarter))
    music.playTone(740, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(98, music.beat(BeatFraction.Quarter))
    music.playTone(740, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(92, music.beat(BeatFraction.Quarter))
    music.playTone(784, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(98, music.beat(BeatFraction.Quarter))
    music.playTone(784, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(92, music.beat(BeatFraction.Quarter))
    music.playTone(740, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(98, music.beat(BeatFraction.Quarter))
    music.playTone(740, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(92, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(659, music.beat(BeatFraction.Quarter))
    music.playTone(740, music.beat(BeatFraction.Quarter))
    music.playTone(784, music.beat(BeatFraction.Quarter))
}
function Initialize_Pacman () {
    Pacman = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . 5 5 5 5 5 5 5 5 5 . . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . 5 5 5 5 5 5 5 5 5 5 f f f .
        . . 5 5 5 5 5 5 5 f f f f f f .
        . . 5 5 5 5 f f f f f f f f f .
        . . 5 5 5 5 5 5 5 f f f f f f .
        . . 5 5 5 5 5 5 5 5 5 5 f f f .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . . 5 5 5 5 5 5 5 5 5 . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, SpriteKind.Enemy)
    Pacman.setPosition(185, 263)
    Pacman.setVelocity(50, 0)
    Pacman.z = 2
    if (debug == 1) {
        scene.cameraFollowSprite(Pacman)
    }
    Right_Pac = animation.createAnimation(ActionKind.goingright, 100)
    animation.attachAnimation(Pacman, Right_Pac)
    Right_Pac.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . 5 5 5 5 5 5 5 5 5 . . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . . 5 5 5 5 5 5 5 5 5 . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    Right_Pac.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . 5 5 5 5 5 5 5 5 5 . . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . 5 5 5 5 5 5 5 5 5 5 f f f .
        . . 5 5 5 5 5 5 5 f f f f f f .
        . . 5 5 5 5 f f f f f f f f f .
        . . 5 5 5 5 5 5 5 f f f f f f .
        . . 5 5 5 5 5 5 5 5 5 5 f f f .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . . 5 5 5 5 5 5 5 5 5 . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    Right_Pac.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . 5 5 5 5 5 5 5 f f . . .
        . . . 5 5 5 5 5 5 5 f f f f . .
        . . . 5 5 5 5 5 5 f f f f f . .
        . . 5 5 5 5 5 5 f f f f f f f .
        . . 5 5 5 5 5 f f f f f f f f .
        . . 5 5 5 5 f f f f f f f f f .
        . . 5 5 5 5 5 f f f f f f f f .
        . . 5 5 5 5 5 5 f f f f f f f .
        . . . 5 5 5 5 5 5 f f f f f . .
        . . . 5 5 5 5 5 5 5 f f f f . .
        . . . . 5 5 5 5 5 5 5 f f . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    animation.setAction(Pacman, ActionKind.goingright)
    Left_Pac = animation.createAnimation(ActionKind.goingleft, 100)
    animation.attachAnimation(Pacman, Left_Pac)
    Left_Pac.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . 5 5 5 5 5 5 5 5 5 . . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . . 5 5 5 5 5 5 5 5 5 . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    Left_Pac.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . 5 5 5 5 5 5 5 5 5 . . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . f f f 5 5 5 5 5 5 5 5 5 5 .
        . . f f f f f f 5 5 5 5 5 5 5 .
        . . f f f f f f f f f 5 5 5 5 .
        . . f f f f f f 5 5 5 5 5 5 5 .
        . . f f f 5 5 5 5 5 5 5 5 5 5 .
        . . . 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . . 5 5 5 5 5 5 5 5 5 . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    Left_Pac.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . f f 5 5 5 5 5 5 5 . . .
        . . . f f f f 5 5 5 5 5 5 5 . .
        . . . f f f f f 5 5 5 5 5 5 . .
        . . f f f f f f f 5 5 5 5 5 5 .
        . . f f f f f f f f 5 5 5 5 5 .
        . . f f f f f f f f f 5 5 5 5 .
        . . f f f f f f f f 5 5 5 5 5 .
        . . f f f f f f f 5 5 5 5 5 5 .
        . . . f f f f f 5 5 5 5 5 5 . .
        . . . f f f f 5 5 5 5 5 5 5 . .
        . . . . f f 5 5 5 5 5 5 5 . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    Up_Pac = animation.createAnimation(ActionKind.goingup, 100)
    animation.attachAnimation(Pacman, Up_Pac)
    Up_Pac.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . 5 5 5 5 5 5 5 5 5 . . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . . 5 5 5 5 5 5 5 5 5 . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    Up_Pac.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . f f f f f . . . . .
        . . . . 5 5 f f f f f 5 5 . . .
        . . . 5 5 5 f f f f f 5 5 5 . .
        . . . 5 5 5 5 f f f 5 5 5 5 . .
        . . 5 5 5 5 5 f f f 5 5 5 5 5 .
        . . 5 5 5 5 5 f f f 5 5 5 5 5 .
        . . 5 5 5 5 5 5 f 5 5 5 5 5 5 .
        . . 5 5 5 5 5 5 f 5 5 5 5 5 5 .
        . . 5 5 5 5 5 5 f 5 5 5 5 5 5 .
        . . . 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . . 5 5 5 5 5 5 5 5 5 . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    Up_Pac.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . f f f f f . . . . .
        . . . . f f f f f f f f f . . .
        . . . f f f f f f f f f f f . .
        . . . f f f f f f f f f f f . .
        . . 5 5 f f f f f f f f f 5 5 .
        . . 5 5 5 f f f f f f f 5 5 5 .
        . . 5 5 5 5 f f f f f 5 5 5 5 .
        . . 5 5 5 5 5 f f f 5 5 5 5 5 .
        . . 5 5 5 5 5 5 f 5 5 5 5 5 5 .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . . 5 5 5 5 5 5 5 5 5 . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    Down_Pac = animation.createAnimation(ActionKind.goingdown, 100)
    animation.attachAnimation(Pacman, Down_Pac)
    Down_Pac.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . 5 5 5 5 5 5 5 5 5 . . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . . 5 5 5 5 5 5 5 5 5 . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    Down_Pac.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . 5 5 5 5 5 5 5 5 5 . . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . 5 5 5 5 5 5 f 5 5 5 5 5 5 .
        . . 5 5 5 5 5 5 f 5 5 5 5 5 5 .
        . . 5 5 5 5 5 5 f 5 5 5 5 5 5 .
        . . 5 5 5 5 5 f f f 5 5 5 5 5 .
        . . 5 5 5 5 5 f f f 5 5 5 5 5 .
        . . . 5 5 5 5 f f f 5 5 5 5 5 .
        . . . 5 5 5 f f f f f 5 5 5 . .
        . . . . 5 5 f f f f f 5 5 . . .
        . . . . . . f f f f f . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    Down_Pac.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . 5 5 5 5 5 5 5 5 5 . . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . 5 5 5 5 5 5 f 5 5 5 5 5 5 .
        . . 5 5 5 5 5 f f f 5 5 5 5 5 .
        . . 5 5 5 5 f f f f f 5 5 5 5 .
        . . 5 5 5 f f f f f f f 5 5 5 .
        . . 5 5 f f f f f f f f f 5 5 .
        . . . f f f f f f f f f f f . .
        . . . f f f f f f f f f f f . .
        . . . . f f f f f f f f f . . .
        . . . . . . f f f f f . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    Death_Drama = animation.createAnimation(ActionKind.Death, 100)
    animation.attachAnimation(Pacman, Death_Drama)
    Death_Drama.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . 5 5 . . . . . . . . . 5 5 .
        . . 5 5 5 . . . . . . . 5 5 5 .
        . . 5 5 5 5 . . . . . 5 5 5 5 .
        . . 5 5 5 5 5 . . . 5 5 5 5 5 .
        . . 5 5 5 5 5 5 . 5 5 5 5 5 5 .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . . 5 5 5 5 5 5 5 5 5 . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    Death_Drama.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . 5 . . . . . . . . . . . 5 .
        . 5 5 5 5 . . . . . . . 5 5 5 5
        . 5 5 5 5 5 . . . . . 5 5 5 5 5
        . 5 5 5 5 5 5 5 . 5 5 5 5 5 5 5
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . . . 5 5 5 . 5 5 5 . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    Death_Drama.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . 5 5 5 . . . . . . . . . 5 5 5
        . 5 5 5 5 5 5 . . . 5 5 5 5 5 5
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . . 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . . . 5 5 5 . 5 5 5 . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    Death_Drama.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . 5 5 5 5 . . . . . . . 5 5 5 5
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . . . 5 5 5 5 . 5 5 5 5 . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    Death_Drama.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . 5 5 5 5 5 5 5 . . . .
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . . . 5 5 5 5 . 5 5 5 5 . . .
        . . . . . . . . . . . . . . . .
    `)
    Death_Drama.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . 5 5 5 . . . . . .
        . . . . . 5 5 5 5 5 5 5 . . . .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
        . . 5 5 5 5 5 5 . 5 5 5 5 5 5 .
        . . . . 5 5 5 . . . 5 5 5 . . .
    `)
    Death_Drama.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . 5 . . . . . . .
        . . . . . . . 5 5 5 . . . . . .
        . . . . . 5 5 5 5 5 5 5 . . . .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
        . . 5 5 5 5 5 5 . 5 5 5 5 5 5 .
    `)
    Death_Drama.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . 5 . . . . . . .
        . . . . . . . 5 5 5 . . . . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . . 5 5 5 5 5 5 5 . . . .
        . . . . 5 5 5 5 5 5 5 5 5 . . .
        . . . . . 5 5 5 . 5 5 5 . . . .
    `)
    Death_Drama.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . 5 . . . . . . .
        . . . . . . . . 5 . . . . . . .
        . . . . . . . 5 5 5 . . . . . .
        . . . . . . . 5 5 5 . . . . . .
        . . . . . . . 5 5 5 . . . . . .
        . . . . . . 5 5 5 5 5 . . . . .
        . . . . . . . 5 . 5 . . . . . .
    `)
    Death_Drama.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . 5 . . . . . . .
        . . . . . . . . 5 . . . . . . .
        . . . . . . . . 5 . . . . . . .
        . . . . . . . . 5 . . . . . . .
        . . . . . . . . 5 . . . . . . .
        . . . . . . . . 5 . . . . . . .
        . . . . . . . . 5 . . . . . . .
    `)
    Death_Drama.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . 5 . . . 5 . . . . .
        . . . . . . . 5 . 5 . . . . . .
        . . . 5 . . . . . . . . . 5 . .
        . . . . 5 . . . . . . . 5 . . .
        . . . . . . . . . . . . . . 5 .
        . . . . . . . . . . . . . 5 . .
        . . 5 5 . . . . . . . . . . . .
        . . . . . . . . . . . . . 5 5 .
        . . . . . . . . . . . . . . . .
        . . . . 5 . . . . . . . . . . .
        . . . 5 . . . . . . . 5 . . . .
        . . . . . . . 5 . 5 . . 5 . . .
        . . . . . . 5 . . . 5 . . . . .
        . . . . . . . . . . . . . . . .
    `)
}
function Initialize_Blinky () {
    Is_Fight_Timer_Running = 0
    Is_Eyes = 0
    Blinky = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 2 2 2 2 . . . . . .
        . . . . 2 2 2 2 2 2 2 2 . . . .
        . . . 2 2 2 2 2 2 2 2 2 2 . . .
        . . 2 2 2 1 1 2 2 2 2 1 1 2 . .
        . . 2 2 1 1 1 1 2 2 1 1 1 1 . .
        . . 2 2 1 1 8 8 2 2 1 1 8 8 . .
        . . 2 2 1 1 8 8 2 2 1 1 8 8 . .
        . 2 2 2 2 1 1 2 2 2 2 1 1 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 . 2 2 2 . . 2 2 2 . 2 2 .
        . 2 . . . 2 2 . . 2 2 . . . 2 .
    `, SpriteKind.Player)
    Blinky.setPosition(182, 135)
    controller.moveSprite(Blinky, 40, 40)
    Blinky.z = 3
    Idle_Blinky = animation.createAnimation(ActionKind.Idle, 800)
    if (debug == 0) {
        scene.cameraFollowSprite(Blinky)
    }
    animation.attachAnimation(Blinky, Idle_Blinky)
    Idle_Blinky.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 2 2 2 2 . . . . . .
        . . . . 2 2 2 2 2 2 2 2 . . . .
        . . . 2 2 2 2 2 2 2 2 2 2 . . .
        . . 2 2 2 1 1 2 2 2 2 1 1 2 . .
        . . 2 2 1 1 1 1 2 2 1 1 1 1 . .
        . . 2 2 1 1 8 8 2 2 1 1 8 8 . .
        . . 2 2 1 1 8 8 2 2 1 1 8 8 . .
        . 2 2 2 2 1 1 2 2 2 2 1 1 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 . 2 2 2 . . 2 2 2 . 2 2 .
        . 2 . . . 2 2 . . 2 2 . . . 2 .
    `)
    Idle_Blinky.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 2 2 2 2 . . . . . .
        . . . . 2 2 2 2 2 2 2 2 . . . .
        . . . 2 2 2 2 2 2 2 2 2 2 . . .
        . . 2 2 2 1 1 2 2 2 2 1 1 2 . .
        . . 2 2 1 1 1 1 2 2 1 1 1 1 . .
        . . 2 2 1 8 8 1 2 2 1 8 8 1 . .
        . . 2 2 1 8 8 1 2 2 1 8 8 1 . .
        . 2 2 2 2 1 1 2 2 2 2 1 1 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 .
        . . 2 2 . . . 2 2 . . . 2 2 . .
    `)
    animation.setAction(Blinky, ActionKind.Idle)
    UpBlinky = animation.createAnimation(ActionKind.goingup, 800)
    animation.attachAnimation(Blinky, UpBlinky)
    UpBlinky.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 2 2 2 2 . . . . . .
        . . . . 8 8 2 2 2 2 8 8 . . . .
        . . . 1 8 8 1 2 2 1 8 8 1 . . .
        . . 2 1 1 1 1 2 2 1 1 1 1 2 . .
        . . 2 1 1 1 1 2 2 1 1 1 1 2 . .
        . . 2 2 1 1 2 2 2 2 1 1 2 2 . .
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 . 2 2 2 . . 2 2 2 . 2 2 .
        . 2 . . . 2 2 . . 2 2 . . . 2 .
    `)
    UpBlinky.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 2 2 2 2 . . . . . .
        . . . . 8 8 2 2 2 2 8 8 . . . .
        . . . 1 8 8 1 2 2 1 8 8 1 . . .
        . . 2 1 1 1 1 2 2 1 1 1 1 2 . .
        . . 2 1 1 1 1 2 2 1 1 1 1 2 . .
        . . 2 2 1 1 2 2 2 2 1 1 2 2 . .
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 .
        . . 2 2 . . . 2 2 . . . 2 2 . .
    `)
    DownBlinky = animation.createAnimation(ActionKind.goingdown, 800)
    animation.attachAnimation(Blinky, DownBlinky)
    DownBlinky.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 2 2 2 2 . . . . . .
        . . . . 2 2 2 2 2 2 2 2 . . . .
        . . . 2 2 2 2 2 2 2 2 2 2 . . .
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
        . . 2 2 1 1 2 2 2 2 1 1 2 2 . .
        . . 2 1 1 1 1 2 2 1 1 1 1 2 . .
        . . 2 1 1 1 1 2 2 1 1 1 1 2 . .
        . 2 2 1 8 8 1 2 2 1 8 8 1 2 2 .
        . 2 2 2 8 8 2 2 2 2 8 8 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 . 2 2 2 . . 2 2 2 . 2 2 .
        . 2 . . . 2 2 . . 2 2 . . . 2 .
    `)
    DownBlinky.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 2 2 2 2 . . . . . .
        . . . . 2 2 2 2 2 2 2 2 . . . .
        . . . 2 2 2 2 2 2 2 2 2 2 . . .
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
        . . 2 2 1 1 2 2 2 2 1 1 2 2 . .
        . . 2 1 1 1 1 2 2 1 1 1 1 2 . .
        . . 2 1 1 1 1 2 2 1 1 1 1 2 . .
        . 2 2 1 8 8 1 2 2 1 8 8 1 2 2 .
        . 2 2 2 8 8 2 2 2 2 8 8 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 .
        . . 2 2 . . . 2 2 . . . 2 2 . .
    `)
    RightBlinky = animation.createAnimation(ActionKind.goingright, 800)
    animation.attachAnimation(Blinky, RightBlinky)
    RightBlinky.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 2 2 2 2 . . . . . .
        . . . . 2 2 2 2 2 2 2 2 . . . .
        . . . 2 2 2 2 2 2 2 2 2 2 . . .
        . . 2 2 2 1 1 2 2 2 2 1 1 2 . .
        . . 2 2 1 1 1 1 2 2 1 1 1 1 . .
        . . 2 2 1 1 8 8 2 2 1 1 8 8 . .
        . . 2 2 1 1 8 8 2 2 1 1 8 8 . .
        . 2 2 2 2 1 1 2 2 2 2 1 1 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 . 2 2 2 . . 2 2 2 . 2 2 .
        . 2 . . . 2 2 . . 2 2 . . . 2 .
    `)
    RightBlinky.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 2 2 2 2 . . . . . .
        . . . . 2 2 2 2 2 2 2 2 . . . .
        . . . 2 2 2 2 2 2 2 2 2 2 . . .
        . . 2 2 2 1 1 2 2 2 2 1 1 2 . .
        . . 2 2 1 1 1 1 2 2 1 1 1 1 . .
        . . 2 2 1 1 8 8 2 2 1 1 8 8 . .
        . . 2 2 1 1 8 8 2 2 1 1 8 8 . .
        . 2 2 2 2 1 1 2 2 2 2 1 1 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 .
        . . 2 2 . . . 2 2 . . . 2 2 . .
    `)
    LeftBlinky = animation.createAnimation(ActionKind.goingleft, 800)
    animation.attachAnimation(Blinky, LeftBlinky)
    LeftBlinky.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 2 2 2 2 . . . . . .
        . . . . 2 2 2 2 2 2 2 2 . . . .
        . . . 2 2 2 2 2 2 2 2 2 2 . . .
        . . 2 1 1 2 2 2 2 1 1 2 2 2 . .
        . . 1 1 1 1 2 2 1 1 1 1 2 2 . .
        . . 8 8 1 1 2 2 8 8 1 1 2 2 . .
        . . 8 8 1 1 2 2 8 8 1 1 2 2 . .
        . 2 2 1 1 2 2 2 2 1 1 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 . 2 2 2 . . 2 2 2 . 2 2 .
        . 2 . . . 2 2 . . 2 2 . . . 2 .
    `)
    LeftBlinky.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 2 2 2 2 . . . . . .
        . . . . 2 2 2 2 2 2 2 2 . . . .
        . . . 2 2 2 2 2 2 2 2 2 2 . . .
        . . 2 1 1 2 2 2 2 1 1 2 2 2 . .
        . . 1 1 1 1 2 2 1 1 1 1 2 2 . .
        . . 8 8 1 1 2 2 8 8 1 1 2 2 . .
        . . 8 8 1 1 2 2 8 8 1 1 2 2 . .
        . 2 2 1 1 2 2 2 2 1 1 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
        . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 .
        . . 2 2 . . . 2 2 . . . 2 2 . .
    `)
    Blue_Ghost = animation.createAnimation(ActionKind.Running_Scared, 800)
    animation.attachAnimation(Blinky, Blue_Ghost)
    Blue_Ghost.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 8 8 8 8 . . . . . .
        . . . . 8 8 8 8 8 8 8 8 . . . .
        . . . 8 8 8 8 8 8 8 8 8 8 . . .
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . .
        . . 8 8 8 3 3 8 8 3 3 8 8 8 . .
        . . 8 8 8 3 3 8 8 3 3 8 8 8 . .
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . .
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 .
        . 8 8 3 3 8 8 3 3 8 8 3 3 8 8 .
        . 8 3 8 8 3 3 8 8 3 3 8 8 3 8 .
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 .
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 .
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 .
        . 8 8 . 8 8 8 . . 8 8 8 . 8 8 .
        . 8 . . . 8 8 . . 8 8 . . . 8 .
    `)
    Blue_Ghost.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 8 8 8 8 . . . . . .
        . . . . 8 8 8 8 8 8 8 8 . . . .
        . . . 8 8 8 8 8 8 8 8 8 8 . . .
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . .
        . . 8 8 8 3 3 8 8 3 3 8 8 8 . .
        . . 8 8 8 3 3 8 8 3 3 8 8 8 . .
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . .
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 .
        . 8 8 3 3 8 8 3 3 8 8 3 3 8 8 .
        . 8 3 8 8 3 3 8 8 3 3 8 8 3 8 .
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 .
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 .
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 .
        . 8 8 8 8 . 8 8 8 8 . 8 8 8 8 .
        . . 8 8 . . . 8 8 . . . 8 8 . .
    `)
    Blinking_Ghost = animation.createAnimation(ActionKind.Blinking, 400)
    animation.attachAnimation(Blinky, Blinking_Ghost)
    Blinking_Ghost.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 8 8 8 8 . . . . . .
        . . . . 8 8 8 8 8 8 8 8 . . . .
        . . . 8 8 8 8 8 8 8 8 8 8 . . .
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . .
        . . 8 8 8 3 3 8 8 3 3 8 8 8 . .
        . . 8 8 8 3 3 8 8 3 3 8 8 8 . .
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . .
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 .
        . 8 8 3 3 8 8 3 3 8 8 3 3 8 8 .
        . 8 3 8 8 3 3 8 8 3 3 8 8 3 8 .
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 .
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 .
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 .
        . 8 8 . 8 8 8 . . 8 8 8 . 8 8 .
        . 8 . . . 8 8 . . 8 8 . . . 8 .
    `)
    Blinking_Ghost.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 1 1 1 1 . . . . . .
        . . . . 1 1 1 1 1 1 1 1 . . . .
        . . . 1 1 1 1 1 1 1 1 1 1 . . .
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . .
        . . 1 1 1 3 3 1 1 3 3 1 1 1 . .
        . . 1 1 1 3 3 1 1 3 3 1 1 1 . .
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . .
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
        . 1 1 3 3 1 1 3 3 1 1 3 3 1 1 .
        . 1 3 1 1 3 3 1 1 3 3 1 1 3 1 .
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
        . 1 1 . 1 1 1 . . 1 1 1 . 1 1 .
        . 1 . . . 1 1 . . 1 1 . . . 1 .
    `)
    Blinking_Ghost.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 8 8 8 8 . . . . . .
        . . . . 8 8 8 8 8 8 8 8 . . . .
        . . . 8 8 8 8 8 8 8 8 8 8 . . .
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . .
        . . 8 8 8 3 3 8 8 3 3 8 8 8 . .
        . . 8 8 8 3 3 8 8 3 3 8 8 8 . .
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . .
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 .
        . 8 8 3 3 8 8 3 3 8 8 3 3 8 8 .
        . 8 3 8 8 3 3 8 8 3 3 8 8 3 8 .
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 .
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 .
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 .
        . 8 8 8 8 . 8 8 8 8 . 8 8 8 8 .
        . . 8 8 . . . 8 8 . . . 8 8 . .
    `)
    Blinking_Ghost.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . 1 1 1 1 . . . . . .
        . . . . 1 1 1 1 1 1 1 1 . . . .
        . . . 1 1 1 1 1 1 1 1 1 1 . . .
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . .
        . . 1 1 1 3 3 1 1 3 3 1 1 1 . .
        . . 1 1 1 3 3 1 1 3 3 1 1 1 . .
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . .
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
        . 1 1 3 3 1 1 3 3 1 1 3 3 1 1 .
        . 1 3 1 1 3 3 1 1 3 3 1 1 3 1 .
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
        . 1 1 1 1 . 1 1 1 1 . 1 1 1 1 .
        . . 1 1 . . . 1 1 . . . 1 1 . .
    `)
}
function Spawn_Eyes () {
    Eyes = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . 1 1 . . . . 1 1 . . .
        . . . . 1 1 1 1 . . 1 1 1 1 . .
        . . . . 1 1 8 8 . . 1 1 8 8 . .
        . . . . 1 1 8 8 . . 1 1 8 8 . .
        . . . . . 1 1 . . . . 1 1 . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, SpriteKind.Spirit)
    Eyes.x = Blinky.x
    Eyes.y = Blinky.y
    Eyes.z = 3
    Blinky.destroy()
    controller.moveSprite(Eyes, 100, 100)
    if (debug == 0) {
        scene.cameraFollowSprite(Eyes)
    }
    Idle_Blinky = animation.createAnimation(ActionKind.Idle, 800)
    animation.attachAnimation(Eyes, Idle_Blinky)
    Idle_Blinky.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . 1 1 . . . . 1 1 . . .
        . . . . 1 1 1 1 . . 1 1 1 1 . .
        . . . . 1 1 8 8 . . 1 1 8 8 . .
        . . . . 1 1 8 8 . . 1 1 8 8 . .
        . . . . . 1 1 . . . . 1 1 . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    RightBlinky.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . 1 1 . . . . 1 1 . . .
        . . . . 1 1 1 1 . . 1 1 1 1 . .
        . . . . 1 1 8 8 . . 1 1 8 8 . .
        . . . . 1 1 8 8 . . 1 1 8 8 . .
        . . . . . 1 1 . . . . 1 1 . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    animation.setAction(Eyes, ActionKind.Idle)
    UpBlinky = animation.createAnimation(ActionKind.goingup, 800)
    animation.attachAnimation(Eyes, UpBlinky)
    UpBlinky.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . 8 8 . . . . 8 8 . . . .
        . . . 1 8 8 1 . . 1 8 8 1 . . .
        . . . 1 1 1 1 . . 1 1 1 1 . . .
        . . . 1 1 1 1 . . 1 1 1 1 . . .
        . . . . 1 1 . . . . 1 1 . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    DownBlinky = animation.createAnimation(ActionKind.goingdown, 800)
    animation.attachAnimation(Eyes, DownBlinky)
    DownBlinky.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . 1 1 . . . . 1 1 . . . .
        . . . 1 1 1 1 . . 1 1 1 1 . . .
        . . . 1 1 1 1 . . 1 1 1 1 . . .
        . . . 1 8 8 1 . . 1 8 8 1 . . .
        . . . . 8 8 . . . . 8 8 . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    RightBlinky = animation.createAnimation(ActionKind.goingright, 800)
    animation.attachAnimation(Eyes, RightBlinky)
    RightBlinky.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . 1 1 . . . . 1 1 . . .
        . . . . 1 1 1 1 . . 1 1 1 1 . .
        . . . . 1 1 8 8 . . 1 1 8 8 . .
        . . . . 1 1 8 8 . . 1 1 8 8 . .
        . . . . . 1 1 . . . . 1 1 . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    LeftBlinky = animation.createAnimation(ActionKind.goingleft, 800)
    animation.attachAnimation(Eyes, LeftBlinky)
    LeftBlinky.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . 1 1 . . . . 1 1 . . . . .
        . . 1 1 1 1 . . 1 1 1 1 . . . .
        . . 8 8 1 1 . . 8 8 1 1 . . . .
        . . 8 8 1 1 . . 8 8 1 1 . . . .
        . . . 1 1 . . . . 1 1 . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
}
function Initialize_Array_of_Walls () {
    Rows_list_1 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    Rows_list_2 = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1]
    Rows_list_3 = [1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1]
    Rows_list_4 = [1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1]
    Rows_list_5 = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1]
    Rows_list_6 = [1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1]
    Rows_list_7 = [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1]
    Rows_list_8 = [1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1]
    Rows_list_9 = [0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0]
    Rows_list_10 = [1, 1, 1, 1, 1, 2, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 1, 1, 1, 1]
    Rows_list_11 = [0, 0, 0, 0, 0, 2, 2, 0, 1, 0, 0, 0, 0, 0, 1, 0, 2, 2, 0, 0, 0, 0, 0]
    Rows_list_12 = [1, 1, 1, 1, 1, 2, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 1, 1, 1, 1]
    Rows_list_13 = [0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0]
    Rows_list_14 = [1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1]
    Rows_list_15 = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1]
    Rows_list_16 = [1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1]
    Rows_list_17 = [1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1]
    Rows_list_18 = [1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 1]
    Rows_list_19 = [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1]
    Rows_list_20 = [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1]
    Rows_list_21 = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1]
    Rows_list_22 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    list = [Rows_list_1, Rows_list_2, Rows_list_3, Rows_list_4, Rows_list_5, Rows_list_6, Rows_list_7, Rows_list_8, Rows_list_9, Rows_list_10, Rows_list_11, Rows_list_12, Rows_list_13, Rows_list_14, Rows_list_15, Rows_list_16, Rows_list_17, Rows_list_18, Rows_list_19, Rows_list_20, Rows_list_21, Rows_list_22]
}
function AnimateBlinky () {
    if (Is_Eyes == 0) {
        if (Is_Fight_Timer_Running == 1) {
            if (Fight_Start_Time + Fight_End_Time - Time < 5) {
                animation.setAction(Blinky, ActionKind.Blinking)
            } else {
                animation.setAction(Blinky, ActionKind.Running_Scared)
            }
        } else {
            if (Blinky.vx > 29) {
                animation.setAction(Blinky, ActionKind.goingright)
            } else if (Blinky.vx < -29) {
                animation.setAction(Blinky, ActionKind.goingleft)
            } else if (Blinky.vy > 29) {
                animation.setAction(Blinky, ActionKind.goingdown)
            } else if (Blinky.vy < -29) {
                animation.setAction(Blinky, ActionKind.goingup)
            } else {
                animation.setAction(Blinky, ActionKind.Idle)
            }
        }
    } else {
        if (Eyes.vx > 29) {
            animation.setAction(Eyes, ActionKind.goingright)
        } else if (Eyes.vx < -29) {
            animation.setAction(Eyes, ActionKind.goingleft)
        } else if (Eyes.vy > 29) {
            animation.setAction(Eyes, ActionKind.goingdown)
        } else if (Eyes.vy < -29) {
            animation.setAction(Eyes, ActionKind.goingup)
        } else {
            animation.setAction(Eyes, ActionKind.Idle)
        }
    }
}
function AI () {
    WasChoiceMade = 0
    Old_vert_velocity = Pacman.vy
    Old_horiz_velocity = Pacman.vx
    Above = list[TileY - 1][TileX]
    Below = list[TileY + 1][TileX]
    Left = list[TileY][TileX - 1]
    Right = list[TileY][TileX + 1]
    if (Pacman.isHittingTile(CollisionDirection.Right)) {
        if (Above != 1 && Below == 1) {
            Pacman.setVelocity(0, -50)
        } else if (Above == 1 && Below != 1) {
            Pacman.setVelocity(0, 50)
        } else {
            V_Choice()
        }
    }
    if (Pacman.isHittingTile(CollisionDirection.Top) && WasChoiceMade == 0) {
        if (Left != 1 && Right == 1) {
            Pacman.setVelocity(-50, 0)
        } else if (Left == 1 && Right != 1) {
            Pacman.setVelocity(50, 0)
        } else {
            H_Choice()
        }
    }
    if (Pacman.isHittingTile(CollisionDirection.Left) && WasChoiceMade == 0) {
        if (Above != 1 && Below == 1) {
            Pacman.setVelocity(0, -50)
        } else if (Above == 1 && Below != 1) {
            Pacman.setVelocity(0, 50)
        } else {
            V_Choice()
        }
    }
    if (Pacman.isHittingTile(CollisionDirection.Bottom) && WasChoiceMade == 0) {
        if (Left != 1 && Right == 1) {
            Pacman.setVelocity(-50, 0)
        } else if (Left == 1 && Right != 1) {
            Pacman.setVelocity(50, 0)
        } else {
            H_Choice()
        }
    }
    if (Above != 1 && Below != 1 && (Left != 1 && Right != 1) && WasChoiceMade == 0) {
        Four_Way_Choice()
    }
    if ((Pacman.vx == 50 || Pacman.vx == -50) && (Above != 1 && Below == 1 && Left != 1 && Right != 1) && WasChoiceMade == 0) {
        if (Pacman.left % 16 == 0) {
            if (Old_vert_velocity != 50) {
                Up_Choice()
            }
        }
    }
    if ((Pacman.vx == 50 || Pacman.vx == -50) && (Above == 1 && Below != 1 && Left != 1 && Right != 1) && WasChoiceMade == 0) {
        if (Pacman.left % 16 == 0) {
            if (Old_vert_velocity != -50) {
                Down_Choice()
            }
        }
    }
    if ((Pacman.vy == 50 || Pacman.vy == -50) && (Above != 1 && Below != 1 && Left != 1 && Right == 1) && WasChoiceMade == 0) {
        if (Pacman.top % 16 == 0) {
            if (Old_horiz_velocity != 50) {
                Left_Choice()
            }
        }
    }
    if ((Pacman.vy == 50 || Pacman.vy == -50) && (Above != 1 && Below != 1 && Left == 1 && Right != 1) && WasChoiceMade == 0) {
        if (Pacman.top % 16 == 0) {
            if (Old_horiz_velocity != -50) {
                Right_Choice()
            }
        }
    }
    if (WasChoiceMade == 1) {
        OldTileX = TileX
        OldTileY = TileY
    }
}
function H_Choice () {
    if (Is_Fight_Timer_Running == 1) {
        if (Blinky.x < Pacman.x) {
            Pacman.setVelocity(-50, 0)
        } else if (Blinky.x > Pacman.x) {
            Pacman.setVelocity(50, 0)
        } else if (Blinky.x < 182) {
            Pacman.setVelocity(-50, 0)
        } else {
            Pacman.setVelocity(50, 0)
        }
    } else if (Is_Flight_Timer_Running == 1) {
        if (Blinky.x < Pacman.x) {
            Pacman.setVelocity(50, 0)
        } else if (Blinky.x > Pacman.x) {
            Pacman.setVelocity(-50, 0)
        } else if (Pacman.x < 182) {
            Pacman.setVelocity(50, 0)
        } else {
            Pacman.setVelocity(-50, 0)
        }
    } else {
        if (Math.randomRange(1, 2) == 1) {
            Pacman.setVelocity(50, 0)
        } else {
            Pacman.setVelocity(-50, 0)
        }
    }
    WasChoiceMade = 1
}
function V_Choice () {
    if (Is_Fight_Timer_Running == 1) {
        if (Blinky.y < Pacman.y) {
            Pacman.setVelocity(0, -50)
        } else if (Blinky.y > Pacman.y) {
            Pacman.setVelocity(0, 50)
        } else if (Blinky.y < 167) {
            Pacman.setVelocity(0, -50)
        } else {
            Pacman.setVelocity(0, 50)
        }
    } else if (Is_Flight_Timer_Running == 1) {
        if (Blinky.y < Pacman.y) {
            Pacman.setVelocity(0, 50)
        } else if (Blinky.y > Pacman.y) {
            Pacman.setVelocity(0, -50)
        } else if (Pacman.y < 167) {
            Pacman.setVelocity(0, 50)
        } else {
            Pacman.setVelocity(0, -50)
        }
    } else {
        if (Math.randomRange(1, 2) == 1) {
            Pacman.setVelocity(0, 50)
        } else {
            Pacman.setVelocity(0, -50)
        }
    }
    WasChoiceMade = 1
}
function Four_Way_Choice () {
    if (Old_vert_velocity == 50 && Pacman.y % 16 == 8) {
        if (Math.abs(Blinky.y - Pacman.y) < Math.abs(Blinky.x - Pacman.x)) {
            H_Choice()
        }
    }
    if (Old_vert_velocity == -50 && Pacman.y % 16 == 8) {
        if (Math.abs(Blinky.y - Pacman.y) < Math.abs(Blinky.x - Pacman.x)) {
            H_Choice()
        }
    }
    if (Old_horiz_velocity == -50 && Pacman.x % 16 == 8) {
        if (Math.abs(Blinky.y - Pacman.y) > Math.abs(Blinky.x - Pacman.x)) {
            V_Choice()
        }
    }
    if (Old_horiz_velocity == 50 && Pacman.x % 16 == 8) {
        if (Math.abs(Blinky.y - Pacman.y) > Math.abs(Blinky.x - Pacman.x)) {
            V_Choice()
        }
    }
    WasChoiceMade = 1
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    if (Is_Fight_Timer_Running == 1) {
        BlinkyLives = BlinkyLives - 1
        Is_Fight_Timer_Running = 0
        otherSprite.destroy()
        Spawn_Eyes()
        Is_Eyes = 1
        TwoHundred(otherSprite.x, otherSprite.y)
    } else {
        otherSprite.destroy()
        PacmanLives = PacmanLives - 1
        sprite.vx = 0
        sprite.vy = 0
        animation.stopAnimation(animation.AnimationTypes.All, sprite)
        animation.setAction(sprite, ActionKind.Death)
        pause(1100)
        sprite.destroy()
        Initialize_Pacman()
        animation.setAction(sprite, ActionKind.goingright)
        Initialize_Blinky()
    }
    if (PacmanLives == 0) {
        music.setVolume(5)
        game.over(true, effects.confetti)
    }
    if (BlinkyLives == 0) {
        music.setVolume(5)
        game.over(false, effects.confetti)
    }
})
function Up_Choice () {
    if (Is_Fight_Timer_Running == 1) {
        if (Blinky.y < Pacman.y) {
            Pacman.setVelocity(0, -50)
        }
    } else if (Is_Flight_Timer_Running == 1) {
        if (Blinky.y > Pacman.y) {
            Pacman.setVelocity(0, -50)
        }
    } else {
        if (Math.randomRange(1, 2) == 1) {
            Pacman.setVelocity(0, -50)
        }
    }
    WasChoiceMade = 1
}
function Left_Choice () {
    if (Is_Fight_Timer_Running == 1) {
        if (Blinky.x < Pacman.x) {
            Pacman.setVelocity(-50, 0)
        }
    } else if (Is_Flight_Timer_Running == 1) {
        if (Blinky.x > Pacman.x) {
            Pacman.setVelocity(-50, 0)
        }
    } else {
        if (Math.randomRange(1, 2) == 1) {
            Pacman.setVelocity(-50, 0)
        }
    }
    WasChoiceMade = 1
}
function Animate_Pacman () {
    if (Pacman.vx == 50) {
        animation.setAction(Pacman, ActionKind.goingright)
    } else if (Pacman.vx == -50) {
        animation.setAction(Pacman, ActionKind.goingleft)
    } else if (Pacman.vy == 50) {
        animation.setAction(Pacman, ActionKind.goingdown)
    } else if (Pacman.vy == -50) {
        animation.setAction(Pacman, ActionKind.goingup)
    }
}
function Down_Choice () {
    if (Is_Fight_Timer_Running == 1) {
        if (Blinky.y > Pacman.y) {
            Pacman.setVelocity(0, 50)
        }
    } else if (Is_Flight_Timer_Running == 1) {
        if (Blinky.y < Pacman.y) {
            Pacman.setVelocity(0, 50)
        }
    } else {
        if (Math.randomRange(1, 2) == 1) {
            Pacman.setVelocity(0, 50)
        }
    }
    WasChoiceMade = 1
}
function Right_Choice () {
    if (Is_Fight_Timer_Running == 1) {
        if (Blinky.x > Pacman.x) {
            Pacman.setVelocity(50, 0)
        }
    } else if (Is_Flight_Timer_Running == 1) {
        if (Blinky.x < Pacman.x) {
            Pacman.setVelocity(50, 0)
        }
    } else {
        if (Math.randomRange(1, 2) == 1) {
            Pacman.setVelocity(50, 0)
        }
    }
    WasChoiceMade = 1
}
function TwoHundred (num: number, num2: number) {
    twohundredpoints = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . 9 9 9 . . . 9 9 . . . 9 9 . .
        9 . . . 9 . 9 . . 9 . 9 . . 9 .
        . . . . 9 . 9 . . 9 . 9 . . 9 .
        . . . 9 . . 9 . . 9 . 9 . . 9 .
        . . 9 . . . 9 . . 9 . 9 . . 9 .
        . 9 . . . . 9 . . 9 . 9 . . 9 .
        9 9 9 9 9 . . 9 9 . . . 9 9 . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, SpriteKind.Spirit)
    twohundredpoints.setPosition(num, num2)
    music.playTone(131, music.beat(BeatFraction.Quarter))
    music.playTone(147, music.beat(BeatFraction.Eighth))
    pause(2000)
    twohundredpoints.destroy()
}
function Initialize_Power_Pellet (num: number, num2: number) {
    Power_Pellet = sprites.create(img`
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . 5 5 5 5 . . . . . . . . . .
        . . . . . . . . . 5 5 5 5 5 5 . . . . . . . . .
        . . . . . . . . 5 5 5 5 5 5 5 5 . . . . . . . .
        . . . . . . . . 5 5 5 5 5 5 5 5 . . . . . . . .
        . . . . . . . . 5 5 5 5 5 5 5 5 . . . . . . . .
        . . . . . . . . 5 5 5 5 5 5 5 5 . . . . . . . .
        . . . . . . . . . 5 5 5 5 5 5 . . . . . . . . .
        . . . . . . . . . . 5 5 5 5 . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
    `, SpriteKind.Food)
    Power_Pellet.setPosition(num, num2)
    idle_Power_pellet = animation.createAnimation(ActionKind.Idle, 400)
    animation.attachAnimation(Power_Pellet, idle_Power_pellet)
    idle_Power_pellet.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . 5 5 5 5 . . . . . . . . . .
        . . . . . . . . . 5 5 5 5 5 5 . . . . . . . . .
        . . . . . . . . 5 5 5 5 5 5 5 5 . . . . . . . .
        . . . . . . . . 5 5 5 5 5 5 5 5 . . . . . . . .
        . . . . . . . . 5 5 5 5 5 5 5 5 . . . . . . . .
        . . . . . . . . 5 5 5 5 5 5 5 5 . . . . . . . .
        . . . . . . . . . 5 5 5 5 5 5 . . . . . . . . .
        . . . . . . . . . . 5 5 5 5 . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
    `)
    idle_Power_pellet.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . 5 5 5 5 . . . . . . . . . .
        . . . . . . . . . 5 5 5 5 5 5 . . . . . . . . .
        . . . . . . . . . 5 5 5 5 5 5 . . . . . . . . .
        . . . . . . . . . 5 5 5 5 5 5 . . . . . . . . .
        . . . . . . . . . 5 5 5 5 5 5 . . . . . . . . .
        . . . . . . . . . . 5 5 5 5 . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
    `)
    animation.setAction(Power_Pellet, ActionKind.Idle)
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    Fight_Start_Time = Time
    Is_Fight_Timer_Running = 1
})
sprites.onOverlap(SpriteKind.Spirit, SpriteKind.Door, function (sprite, otherSprite) {
    Initialize_Blinky()
    sprite.destroy()
})
let rowHit = 0
let columnHit = 0
let Flight_Start_Time = 0
let idle_Power_pellet: animation.Animation = null
let Power_Pellet: Sprite = null
let twohundredpoints: Sprite = null
let OldTileY = 0
let OldTileX = 0
let Right = 0
let Left = 0
let Below = 0
let TileX = 0
let TileY = 0
let Above = 0
let Old_horiz_velocity = 0
let Old_vert_velocity = 0
let WasChoiceMade = 0
let Fight_Start_Time = 0
let list: number[][] = []
let Rows_list_22: number[] = []
let Rows_list_21: number[] = []
let Rows_list_20: number[] = []
let Rows_list_19: number[] = []
let Rows_list_18: number[] = []
let Rows_list_17: number[] = []
let Rows_list_16: number[] = []
let Rows_list_15: number[] = []
let Rows_list_14: number[] = []
let Rows_list_13: number[] = []
let Rows_list_12: number[] = []
let Rows_list_11: number[] = []
let Rows_list_10: number[] = []
let Rows_list_9: number[] = []
let Rows_list_8: number[] = []
let Rows_list_7: number[] = []
let Rows_list_6: number[] = []
let Rows_list_5: number[] = []
let Rows_list_4: number[] = []
let Rows_list_3: number[] = []
let Rows_list_2: number[] = []
let Rows_list_1: number[] = []
let Eyes: Sprite = null
let Blinking_Ghost: animation.Animation = null
let Blue_Ghost: animation.Animation = null
let LeftBlinky: animation.Animation = null
let RightBlinky: animation.Animation = null
let DownBlinky: animation.Animation = null
let UpBlinky: animation.Animation = null
let Idle_Blinky: animation.Animation = null
let Blinky: Sprite = null
let Death_Drama: animation.Animation = null
let Down_Pac: animation.Animation = null
let Up_Pac: animation.Animation = null
let Left_Pac: animation.Animation = null
let Right_Pac: animation.Animation = null
let Pacman: Sprite = null
let Is_Eyes = 0
let Is_Flight_Timer_Running = 0
let Is_Fight_Timer_Running = 0
let BlinkyLives = 0
let PacmanLives = 0
let Time = 0
let Fight_End_Time = 0
let debug = 0
debug = 0
let Pellet_Count = 191
let Powerup = 0
let Flight_End_Time = 5
Fight_End_Time = 30
Time = 0
let offset = 3
PacmanLives = 3
BlinkyLives = 3
Is_Fight_Timer_Running = 0
Is_Flight_Timer_Running = 0
Is_Eyes = 0
Play_Opening_Melody()
scene.setBackgroundImage(img`
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
`)
scene.setTile(2, img`
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
`, true)
scene.setTile(1, img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, true)
scene.setTile(11, img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    8 8 8 . . . . . . . . 8 8 8 8 8
    8 8 8 8 . . . . . . 8 8 8 8 8 8
    . . 8 8 8 . . . . 8 8 8 . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
`, true)
scene.setTile(5, img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . 8 8 8 8 8 8 8 8 8
    . . . . . 8 8 8 8 8 8 8 8 8 8 8
    . . . . 8 8 8 . . . . . . . . .
    . . . . 8 8 . . . . . . . . . .
    . . . 8 8 . . . . . . . . . . .
    . . . 8 8 . . . . . . . . . . .
    . . . 8 8 . . . . . . 8 8 8 8 8
    . . . 8 8 . . . . . 8 8 8 8 8 8
    . . . 8 8 . . . . 8 8 8 . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
`, true)
scene.setTile(6, img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    8 8 8 8 8 8 8 . . . . . . . . .
    8 8 8 8 8 8 8 8 8 . . . . . . .
    . . . . . 8 8 8 8 8 . . . . . .
    . . . . . . . 8 8 8 . . . . . .
    . . . . . . . . 8 8 8 . . . . .
    . . . . . . . . 8 8 8 . . . . .
    8 8 8 . . . . . . 8 8 . . . . .
    8 8 8 8 . . . . . 8 8 . . . . .
    . . 8 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
`, true)
scene.setTile(7, img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . 8 8 8 8 . . . . . . .
    . . . . 8 8 8 8 8 8 . . . . . .
    . . . . 8 8 . . 8 8 . . . . . .
    . . . 8 8 8 . . 8 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
`, true)
scene.setTile(8, img`
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . . 8 8 . . 8 8 . . . . . .
    . . . . 8 8 . . 8 8 . . . . . .
    . . . . . 8 8 8 8 . . . . . . .
    . . . . . . 8 8 . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, true)
scene.setTile(9, img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . 8 8 8 8 8 8 8
    . . . . . . . 8 8 8 8 8 8 8 8 8
    . . . . . . 8 8 8 . . . . . . .
    . . . . . . 8 8 . . . . . . . .
    . . . . . . 8 8 . . . . . . . .
    . . . . . . 8 8 8 . . . . . . .
    . . . . . . . 8 8 8 8 8 8 8 8 8
    . . . . . . . . . 8 8 8 8 8 8 8
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, true)
scene.setTile(3, img`
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 8 . . . .
    . . . 8 8 . . . . . 8 8 8 8 8 8
    . . . 8 8 . . . . . . 8 8 8 8 8
    . . . . 8 8 . . . . . . . . . .
    . . . . 8 8 . . . . . . . . . .
    . . . . . 8 8 . . . . . . . . .
    . . . . . 8 8 8 8 . . . . . . .
    . . . . . . . 8 8 8 8 8 8 8 8 8
    . . . . . . . . . 8 8 8 8 8 8 8
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, true)
scene.setTile(4, img`
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . 8 8 8 . . . . 8 8 . . . . .
    8 8 8 8 . . . . . 8 8 . . . . .
    8 8 8 . . . . . . 8 8 . . . . .
    . . . . . . . . 8 8 8 . . . . .
    . . . . . . . . 8 8 8 . . . . .
    . . . . . . . 8 8 8 . . . . . .
    . . . . . 8 8 8 8 8 . . . . . .
    8 8 8 8 8 8 8 8 . . . . . . . .
    8 8 8 8 8 8 . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, true)
scene.setTile(12, img`
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . 8 8 8 . . . . 8 8 . . . . .
    8 8 8 8 . . . . . 8 8 . . . . .
    8 8 8 . . . . . . 8 8 . . . . .
    . . . . . . . . . 8 8 . . . . .
    . . . . . . . . . 8 8 . . . . .
    . . . . . . . . . 8 8 . . . . .
    . . . . . . . . . 8 8 . . . . .
    8 8 8 . . . . . . 8 8 . . . . .
    8 8 8 8 . . . . . 8 8 . . . . .
    . . 8 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
`, true)
scene.setTile(10, img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    8 8 8 8 8 8 . . . . . . . . . .
    8 8 8 8 8 8 8 8 . . . . . . . .
    . . . . . 8 8 8 8 . . . . . . .
    . . . . . . . 8 8 . . . . . . .
    . . . . . . . 8 8 . . . . . . .
    . . . . . 8 8 8 8 . . . . . . .
    8 8 8 8 8 8 8 8 . . . . . . . .
    8 8 8 8 8 8 . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, true)
scene.setTile(13, img`
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . . 8 8 . . . .
    . . . 8 8 . . . . . . 8 8 8 8 8
    . . . 8 8 . . . . . . . 8 8 8 8
    . . . 8 8 . . . . . . . . . . .
    . . . 8 8 . . . . . . . . . . .
    . . . 8 8 . . . . . . . . . . .
    . . . 8 8 . . . . . . . . . . .
    . . . 8 8 . . . . . . . 8 8 8 8
    . . . 8 8 . . . . . . 8 8 8 8 8
    . . . 8 8 . . . . . 8 8 . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
`, true)
scene.setTile(14, img`
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . . 8 8 . . . . 8 8 . . . . .
    . . 8 8 8 . . . . . 8 8 . . . .
    . 8 8 8 . . . . . . 8 8 8 . . .
    8 8 8 . . . . . . . . 8 8 8 8 8
    8 8 . . . . . . . . . . . 8 8 8
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, true)
scene.setTile(0, img`
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
`, false)
scene.setTile(15, img`
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f 5 5 5 f f f f f f f
    f f f f f f 5 5 5 f f f f f f f
    f f f f f f 5 5 5 f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
`, false)
scene.setTileMap(img`
    5 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 6
    2 f f f f f f f f f f 2 f f f f f f f f f f 2
    2 f 5 1 6 f 5 1 1 6 f 2 f 5 1 1 6 f 5 1 6 f 2
    2 . 3 1 4 f 3 1 1 4 f 8 f 3 1 1 4 f 3 1 4 . 2
    2 f f f f f f f f f f f f f f f f f f f f f 2
    2 f 9 1 a f 7 f 9 1 1 b 1 1 a f 7 f 9 1 a f 2
    2 f f f f f 2 f f f f 2 f f f f 2 f f f f f 2
    3 1 1 1 6 f d 1 1 a f 8 f 9 1 1 c f 5 1 1 1 4
    . . . . 2 f 2 . . . . . . . . . 2 f 2 . . . .
    1 1 1 1 4 f 8 . 5 1 1 1 1 1 6 . 8 f 3 1 1 1 1
    . . . . . f . . 2 . . . . . 2 . . f . . . . .
    1 1 1 1 6 f 7 . 3 1 1 1 1 1 4 . 7 f 5 1 1 1 1
    . . . . 2 f 2 . . . . . . . . . 2 f 2 . . . .
    5 1 1 1 4 f 8 f 9 1 1 b 1 1 a f 8 f 3 1 1 1 6
    2 f f f f f f f f f f 2 f f f f f f f f f f 2
    2 f 9 1 6 f 9 1 1 a f 8 f 9 1 1 a f 5 1 a f 2
    2 . f f 2 f f f f f f f f f f f f f 2 f f . 2
    d 1 a f 8 f 7 f 9 1 1 b 1 1 a f 7 f 8 f 9 1 c
    2 f f f f f 2 f f f f 2 f f f f 2 f f f f f 2
    2 f 9 1 1 1 e 1 1 a f 8 f 9 1 1 e 1 1 1 a f 2
    2 f f f f f f f f f f f f f f f f f f f f f 2
    3 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 4
`)
let Portal = sprites.create(img`
    f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f
    . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Door)
Portal.setPosition(182, 154)
Portal.z = 1
Initialize_Array_of_Walls()
Initialize_Blinky()
Initialize_Pacman()
Initialize_Power_Pellet(23, 56)
Initialize_Power_Pellet(23, 263)
Initialize_Power_Pellet(343, 56)
Initialize_Power_Pellet(343, 263)
game.onUpdateInterval(1000, function () {
    Time += 1
    if (Time % 4 == 0) {
        light.setAll(0x000000)
        for (let index = 0; index <= PacmanLives - 1; index++) {
            light.setPixelColor(index, 0xffff00)
        }
    }
    if (Time % 4 == 2) {
        light.setAll(0x000000)
        for (let index = 0; index <= BlinkyLives - 1; index++) {
            light.setPixelColor(index, 0xff0000)
        }
    }
})
game.onUpdate(function () {
    if (Math.abs(Blinky.x - Pacman.x) + Math.abs(Blinky.y - Pacman.y) < 60) {
        Flight_Start_Time = Time
        Is_Flight_Timer_Running = 1
    }
    TileX = Math.floor(Pacman.x / 16)
    TileY = Math.floor(Pacman.y / 16)
    if (TileX != OldTileX || TileY != OldTileY) {
        AI()
    }
    AnimateBlinky()
    Animate_Pacman()
    if (Pacman.left <= 1) {
        Pacman.x = 345
    }
    if (Pacman.right >= 360) {
        Pacman.x = 15
    }
    if (Blinky.left <= 1) {
        Blinky.x = 345
    }
    if (Blinky.right >= 360) {
        Blinky.x = 15
    }
    columnHit = Math.floor((Pacman.x + 0) / 16)
    rowHit = Math.floor((Pacman.y + 0) / 16)
    if (list[rowHit][columnHit] == 2) {
        scene.setTileAt(scene.getTile(columnHit, rowHit), 0)
        list[rowHit][columnHit] = 0
        music.playTone(196, music.beat(BeatFraction.Sixteenth))
        music.playTone(147, music.beat(BeatFraction.Sixteenth))
        Pellet_Count = Pellet_Count - 1
    }
    if (Flight_Start_Time + Flight_End_Time == Time && Is_Flight_Timer_Running == 1) {
        Is_Flight_Timer_Running = 0
    }
    if (Fight_Start_Time + Fight_End_Time == Time && Is_Fight_Timer_Running == 1) {
        Is_Fight_Timer_Running = 0
    }
    if (Pellet_Count == 0) {
        game.setDialogTextColor(7)
        game.showLongText("Pac-man cleared the board", DialogLayout.Bottom)
        pause(2000)
        game.over(false, effects.melt)
    }
})