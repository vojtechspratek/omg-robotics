let peeled = false
enum TropicalFruit {
    Banana = 0,
    Pinapple = 1,
    Coconut = 2
}
namespace tropic {
    /**
     * Pick a fruit
     */
    export function pick(fruit: TropicalFruit): boolean {
        return true;
    }
    /**
     * Peel the fruit if possible
     */
    export function peel(fruit: TropicalFruit): boolean {
        return (fruit == TropicalFruit.Banana);
    }
}
if (tropic.pick(TropicalFruit.Banana)) {
    peeled = tropic.peel(TropicalFruit.Banana);
}
