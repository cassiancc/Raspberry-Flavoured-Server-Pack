// priority: 0

ServerEvents.recipes(event => {
// Catalyst potions
	// Pristine potion
	event.recipes.farmersdelight.cooking(['crimson_fungus', 'crimson_fungus'], Item.of('minecraft:potion',2,{Potion:"minecraft:awkward"}).strongNBT(), 0, 200, 'minecraft:glass_bottle')
	// Twisted potion
	event.recipes.farmersdelight.cooking(['warped_fungus', 'warped_fungus'], Item.of('minecraft:potion',2,{Potion:"minecraft:thick"}).strongNBT(), 0, 200, 'minecraft:glass_bottle')

	function potionMaker(potionType) {
// Beneficial potions
	// Night vision
	event.recipes.farmersdelight.cooking([Item.of(potionType,{Potion:"minecraft:awkward"}).strongNBT(), 'golden_carrot', 'windswept:nightshade'], Item.of(potionType,4,{Potion:"minecraft:night_vision"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	// Invisibility
	event.recipes.farmersdelight.cooking([Item.of(potionType,{Potion:"minecraft:awkward"}).strongNBT(), 'amethyst_shard', 'quartz'], Item.of(potionType,4,{Potion:"minecraft:invisibility"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	// Jump boost
	event.recipes.farmersdelight.cooking([Item.of(potionType,{Potion:"minecraft:awkward"}).strongNBT(), 'rabbit_foot', 'slime_ball'], Item.of(potionType,4,{Potion:"minecraft:leaping"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	// Fire resistance
	event.recipes.farmersdelight.cooking([Item.of(potionType,{Potion:"minecraft:awkward"}).strongNBT(), 'magma_cream', 'blaze_powder'], Item.of(potionType,4,{Potion:"minecraft:fire_resistance"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	// Speed
	event.recipes.farmersdelight.cooking([Item.of(potionType,{Potion:"minecraft:awkward"}).strongNBT(), 'neapolitan:chocolate_bar', 'supplementaries:sugar_cube'], Item.of(potionType,4,{Potion:"minecraft:swiftness"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	// Turtle master
	event.recipes.farmersdelight.cooking([Item.of(potionType,{Potion:"minecraft:awkward"}).strongNBT(), 'scute', 'prismarine_shard'], Item.of(potionType,4,{Potion:"minecraft:turtle_master"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	// Water breathing
	event.recipes.farmersdelight.cooking([Item.of(potionType,{Potion:"minecraft:awkward"}).strongNBT(), ['pufferfish', 'aquaculture:goldfish'], 'nautilus_shell'], Item.of(potionType,4,{Potion:"minecraft:water_breathing"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	// Instant health
	event.recipes.farmersdelight.cooking([Item.of(potionType,{Potion:"minecraft:awkward"}).strongNBT(), 'glistering_melon_slice', 'neapolitan:strawberries'], Item.of(potionType,4,{Potion:"minecraft:healing"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	// Regeneration
	event.recipes.farmersdelight.cooking([Item.of(potionType,{Potion:"minecraft:awkward"}).strongNBT(), 'ghast_tear', 'melon_slice'], Item.of(potionType,4,{Potion:"minecraft:regeneration"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	// Strength
	event.recipes.farmersdelight.cooking([Item.of(potionType,{Potion:"minecraft:awkward"}).strongNBT(), 'iron_ingot', 'blaze_rod'], Item.of(potionType,4,{Potion:"minecraft:strength"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	// Slow falling
	event.recipes.farmersdelight.cooking([Item.of(potionType,{Potion:"minecraft:awkward"}).strongNBT(), 'supplementaries:feather_block', 'environmental:yak_hair'], Item.of(potionType,4,{Potion:"minecraft:slow_falling"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	// Thorns
	event.recipes.farmersdelight.cooking([Item.of(potionType,{Potion:"minecraft:awkward"}).strongNBT(), '#raspberry_flavoured:cactus_blocks', ['sweet_berries', 'ecologics:prickly_pear']], Item.of(potionType,4,{Potion:"windswept:thorns"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	// Forest dasher
	event.recipes.farmersdelight.cooking([Item.of(potionType,{Potion:"minecraft:awkward"}).strongNBT(), 'environmental:venison', 'rabbit_foot'], Item.of(potionType,4,{Potion:"naturalist:forest_dasher"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	// Resilience
	event.recipes.farmersdelight.cooking([Item.of(potionType,{Potion:"minecraft:awkward"}).strongNBT(), 'autumnity:snail_shell_piece', 'alloyed:steel_nugget'], Item.of(potionType,4,{Potion:"quark:resilience"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	// Rewind
	event.recipes.farmersdelight.cooking([Item.of(potionType,{Potion:"minecraft:awkward"}).strongNBT(), 'ender_eye', 'echo_shard'], Item.of(potionType,4,{Potion:"caverns_and_chasms:rewind"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	// Health boost
	event.recipes.farmersdelight.cooking([Item.of(potionType,{Potion:"minecraft:awkward"}).strongNBT(), 'environmental:truffle', 'kubejs:golden_strawberries'], Item.of(potionType,4,{Potion:"environmental:vitality"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	// Restfulness
	event.recipes.farmersdelight.cooking([Item.of(potionType,{Potion:"minecraft:awkward"}).strongNBT(), '#minecraft:cocoa_beans_or_powder', 'phantom_membrane'], Item.of(potionType,4,{Potion:"upgrade_aquatic:restfulness"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	// Repellence
	event.recipes.farmersdelight.cooking([Item.of(potionType,{Potion:"minecraft:awkward"}).strongNBT(), 'upgrade_aquatic:lionfish', 'autumnity:foul_berries'], Item.of(potionType,4,{Potion:"upgrade_aquatic:repellence"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	// Vibing
	event.recipes.farmersdelight.cooking([Item.of(potionType,{Potion:"minecraft:awkward"}).strongNBT(), 'ghast_tear', 'savage_and_ravage:creeper_spores'], Item.of(potionType,4,{Potion:"upgrade_aquatic:vibing"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	// Extension
	event.recipes.farmersdelight.cooking([Item.of(potionType,{Potion:"minecraft:awkward"}).strongNBT(), 'autumnity:snail_goo', 'autumnity:sap_bottle'], Item.of(potionType,4,{Potion:"autumnity:extension"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	// Relief
	event.recipes.farmersdelight.cooking([Item.of(potionType,{Potion:"minecraft:awkward"}).strongNBT(), 'atmospheric:aloe_bundle', 'ecologics:azalea_flower'], Item.of(potionType,4,{Potion:"atmospheric:relief"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	
// Harmful potions
	// Slowness
	event.recipes.farmersdelight.cooking([Item.of(potionType,{Potion:"minecraft:thick"}).strongNBT(), 'autumnity:snail_goo', 'honey_bottle'], Item.of(potionType,4,{Potion:"minecraft:slowness"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	// Instant damage
	event.recipes.farmersdelight.cooking([Item.of(potionType,{Potion:"minecraft:thick"}).strongNBT(), '#raspberry_flavoured:cactus_blocks', 'magma_block'], Item.of(potionType,4,{Potion:"minecraft:harming"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	// Poison
	event.recipes.farmersdelight.cooking([Item.of(potionType,{Potion:"minecraft:thick"}).strongNBT(), 'spider_eye', 'poisonous_potato'], Item.of(potionType,4,{Potion:"minecraft:poison"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	// Weakness
	event.recipes.farmersdelight.cooking([Item.of(potionType,{Potion:"minecraft:thick"}).strongNBT(), 'twigs:twig', 'architects_palette:withered_bone'], Item.of(potionType,4,{Potion:"minecraft:weakness"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	// Blindness
	event.recipes.farmersdelight.cooking([Item.of(potionType,{Potion:"minecraft:thick"}).strongNBT(), 'kubejs:spoiled_carrot', 'sculk_vein'], Item.of(potionType,4,{Potion:"kubejs:blindness"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	// Levitation
	event.recipes.farmersdelight.cooking([Item.of(potionType,{Potion:"minecraft:thick"}).strongNBT(), 'phantom_membrane', 'kubejs:latex_bottle'], Item.of(potionType,4,{Potion:"kubejs:levitation"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	// Withering
	event.recipes.farmersdelight.cooking([Item.of(potionType,{Potion:"minecraft:thick"}).strongNBT(), 'architects_palette:withered_bone', 'wither_rose'], Item.of(potionType,4,{Potion:"kubejs:decay"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	// Stunning
	event.recipes.farmersdelight.cooking([Item.of(potionType,{Potion:"minecraft:thick"}).strongNBT(), 'create:crushed_raw_lead', 'cobweb'], Item.of(potionType,4,{Potion:"oreganized:stunning"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	// Insomnia
	event.recipes.farmersdelight.cooking([Item.of(potionType,{Potion:"minecraft:thick"}).strongNBT(), 'farmersrespite:coffee_beans', 'phantom_membrane'], Item.of(potionType,4,{Potion:"upgrade_aquatic:insomnia"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	// Worsening
	event.recipes.farmersdelight.cooking([Item.of(potionType,{Potion:"minecraft:thick"}).strongNBT(), 'architects_palette:withered_bone', 'additionaladditions:rose_gold_alloy'], Item.of(potionType,4,{Potion:"atmospheric:worsening"}).strongNBT(), 0, 400, 'minecraft:glass_bottle')
	}
	
	potionMaker('minecraft:potion')
	potionMaker('minecraft:splash_potion')
	potionMaker('minecraft:lingering_potion')
	
// Long potions
	function longifyPotion(modId, potionId) {
	event.recipes.farmersdelight.cooking([Item.of('minecraft:potion',{Potion:modId + potionId}).strongNBT(), 'redstone'], Item.of('minecraft:potion',1,{Potion:modId + "long_" + potionId}).strongNBT(), 0, 200, 'minecraft:glass_bottle')
	event.recipes.farmersdelight.cooking([Item.of('minecraft:splash_potion',{Potion:modId + potionId}).strongNBT(), 'redstone'], Item.of('minecraft:splash_potion',1,{Potion:modId + "long_" + potionId}).strongNBT(), 0, 200, 'minecraft:glass_bottle')
	event.recipes.farmersdelight.cooking([Item.of('minecraft:lingering_potion',{Potion:modId + potionId}).strongNBT(), 'redstone'], Item.of('minecraft:lingering_potion',1,{Potion:modId + "long_" + potionId}).strongNBT(), 0, 200, 'minecraft:glass_bottle')
	}
	function longifyPotionAbormal(potionId) {
	event.recipes.farmersdelight.cooking([Item.of('minecraft:potion',{Potion:potionId}).strongNBT(), 'redstone'], Item.of('minecraft:potion',1,{Potion:potionId + "_long"}).strongNBT(), 0, 200, 'minecraft:glass_bottle')
	event.recipes.farmersdelight.cooking([Item.of('minecraft:splash_potion',{Potion:potionId}).strongNBT(), 'redstone'], Item.of('minecraft:splash_potion',1,{Potion:potionId + "_long"}).strongNBT(), 0, 200, 'minecraft:glass_bottle')
	event.recipes.farmersdelight.cooking([Item.of('minecraft:lingering_potion',{Potion:potionId}).strongNBT(), 'redstone'], Item.of('minecraft:lingering_potion',1,{Potion:potionId + "_long"}).strongNBT(), 0, 200, 'minecraft:glass_bottle')
	}
	
	// Beneficial
	longifyPotion("minecraft:", "night_vision")
	longifyPotion("minecraft:", "invisibility")
	longifyPotion("minecraft:", "leaping")
	longifyPotion("minecraft:", "fire_resistance")
	longifyPotion("minecraft:", "swiftness")
	longifyPotion("minecraft:", "turtle_master")
	longifyPotion("minecraft:", "water_breathing")
	longifyPotion("minecraft:", "regeneration")
	longifyPotion("minecraft:", "strength")
	longifyPotion("minecraft:", "slow_falling")
	longifyPotion("windswept:", "thorns")
	longifyPotion("naturalist:", "forest_dasher")
	longifyPotion("quark:", "resilience")
	longifyPotion("caverns_and_chasms:", "rewind")
	longifyPotionAbormal("upgrade_aquatic:repellence")
	longifyPotionAbormal("upgrade_aquatic:vibing")
	longifyPotionAbormal("atmospheric:relief")
	
	// Harmful
	longifyPotion("minecraft:", "slowness")
	longifyPotion("minecraft:", "poison")
	longifyPotion("minecraft:", "weakness")
	longifyPotion("kubejs:", "blindness")
	longifyPotion("kubejs:", "levitation")
	longifyPotion("kubejs:", "decay")
	longifyPotion("oreganized:", "stunning")
	longifyPotionAbormal("atmospheric:worsening")
	
// Strong potions
	function strongifyPotion(modId, potionId) {
	event.recipes.farmersdelight.cooking([Item.of('minecraft:potion',{Potion:modId + potionId}).strongNBT(), 'glowstone_dust'], Item.of('minecraft:potion',1,{Potion:modId + "strong_" + potionId}).strongNBT(), 0, 200, 'minecraft:glass_bottle')
	event.recipes.farmersdelight.cooking([Item.of('minecraft:splash_potion',{Potion:modId + potionId}).strongNBT(), 'glowstone_dust'], Item.of('minecraft:splash_potion',1,{Potion:modId + "strong_" + potionId}).strongNBT(), 0, 200, 'minecraft:glass_bottle')
	event.recipes.farmersdelight.cooking([Item.of('minecraft:lingering_potion',{Potion:modId + potionId}).strongNBT(), 'glowstone_dust'], Item.of('minecraft:lingering_potion',1,{Potion:modId + "strong_" + potionId}).strongNBT(), 0, 200, 'minecraft:glass_bottle')
	}
	function strongifyPotionAbormal(potionId) {
	event.recipes.farmersdelight.cooking([Item.of('minecraft:potion',{Potion:potionId}).strongNBT(), 'glowstone_dust'], Item.of('minecraft:potion',1,{Potion:potionId + "_strong"}).strongNBT(), 0, 200, 'minecraft:glass_bottle')
	event.recipes.farmersdelight.cooking([Item.of('minecraft:splash_potion',{Potion:potionId}).strongNBT(), 'glowstone_dust'], Item.of('minecraft:splash_potion',1,{Potion:potionId + "_strong"}).strongNBT(), 0, 200, 'minecraft:glass_bottle')
	event.recipes.farmersdelight.cooking([Item.of('minecraft:lingering_potion',{Potion:potionId}).strongNBT(), 'glowstone_dust'], Item.of('minecraft:lingering_potion',1,{Potion:potionId + "_strong"}).strongNBT(), 0, 200, 'minecraft:glass_bottle')
	}
	
	// Beneficial
	strongifyPotion("minecraft:", "leaping")
	strongifyPotion("minecraft:", "swiftness")
	strongifyPotion("minecraft:", "turtle_master")
	strongifyPotion("minecraft:", "healing")
	strongifyPotion("minecraft:", "regeneration")
	strongifyPotion("minecraft:", "strength")
	strongifyPotion("windswept:", "thorns")
	strongifyPotion("naturalist:", "forest_dasher")
	strongifyPotion("quark:", "resilience")
	strongifyPotionAbormal("environmental:vitality")
	strongifyPotionAbormal("upgrade_aquatic:restfulness")
	strongifyPotionAbormal("upgrade_aquatic:repellence")
	strongifyPotionAbormal("upgrade_aquatic:vibing")
	strongifyPotionAbormal("atmospheric:relief")
	
	// Harmful
	strongifyPotion("minecraft:", "slowness")
	strongifyPotion("minecraft:", "poison")
	strongifyPotion("minecraft:", "harming")
	strongifyPotion("kubejs:", "levitation")
	strongifyPotion("kubejs:", "decay")
	strongifyPotion("oreganized:", "stunning")
	strongifyPotionAbormal("upgrade_aquatic:insomnia")
	strongifyPotionAbormal("atmospheric:worsening")

// Splash & lingering potions
	function splashifyPotion(potionId) {
	event.recipes.farmersdelight.cooking([Item.of('minecraft:potion',{Potion:potionId}).strongNBT(), 'gunpowder'], Item.of('minecraft:splash_potion',1,{Potion:potionId}).strongNBT(), 0, 200, 'minecraft:glass_bottle')
	event.recipes.farmersdelight.cooking([Item.of('minecraft:lingering_potion',{Potion:potionId}).strongNBT(), 'gunpowder'], Item.of('minecraft:splash_potion',1,{Potion:potionId}).strongNBT(), 0, 200, 'minecraft:glass_bottle')
	event.recipes.farmersdelight.cooking([Item.of('minecraft:potion',{Potion:potionId}).strongNBT(), 'savage_and_ravage:creeper_spores'], Item.of('minecraft:lingering_potion',1,{Potion:potionId}).strongNBT(), 0, 200, 'minecraft:glass_bottle')
	event.recipes.farmersdelight.cooking([Item.of('minecraft:splash_potion',{Potion:potionId}).strongNBT(), 'savage_and_ravage:creeper_spores'], Item.of('minecraft:lingering_potion',1,{Potion:potionId}).strongNBT(), 0, 200, 'minecraft:glass_bottle')
	event.recipes.farmersdelight.cooking([Item.of('minecraft:splash_potion',{Potion:potionId}).strongNBT(), 'crimson_fungus', 'warped_fungus'], Item.of('minecraft:potion',1,{Potion:potionId}).strongNBT(), 0, 200, 'minecraft:glass_bottle')
	event.recipes.farmersdelight.cooking([Item.of('minecraft:lingering_potion',{Potion:potionId}).strongNBT(), 'crimson_fungus', 'warped_fungus'], Item.of('minecraft:potion',1,{Potion:potionId}).strongNBT(), 0, 200, 'minecraft:glass_bottle')
	}
	
	// No effect
	splashifyPotion("minecraft:water")
	splashifyPotion("minecraft:awkward")
	splashifyPotion("minecraft:thick")
	
	// Beneficial
	splashifyPotion("minecraft:night_vision")
	splashifyPotion("minecraft:long_night_vision")
	
	splashifyPotion("minecraft:invisibility")
	splashifyPotion("minecraft:long_invisibility")
	
	splashifyPotion("minecraft:leaping")
	splashifyPotion("minecraft:long_leaping")
	splashifyPotion("minecraft:strong_leaping")
	
	splashifyPotion("minecraft:fire_resistance")
	splashifyPotion("minecraft:long_fire_resistance")
	
	splashifyPotion("minecraft:swiftness")
	splashifyPotion("minecraft:long_swiftness")
	splashifyPotion("minecraft:strong_swiftness")
	
	splashifyPotion("minecraft:turtle_master")
	splashifyPotion("minecraft:long_turtle_master")
	splashifyPotion("minecraft:strong_turtle_master")
	
	splashifyPotion("minecraft:water_breathing")
	splashifyPotion("minecraft:long_water_breathing")
	
	splashifyPotion("minecraft:healing")
	splashifyPotion("minecraft:strong_healing")
	
	splashifyPotion("minecraft:regeneration")
	splashifyPotion("minecraft:long_regeneration")
	splashifyPotion("minecraft:strong_regeneration")
	
	splashifyPotion("minecraft:strength")
	splashifyPotion("minecraft:long_strength")
	splashifyPotion("minecraft:strong_strength")
	
	splashifyPotion("minecraft:slow_falling")
	splashifyPotion("minecraft:long_slow_falling")
	
	splashifyPotion("windswept:thorns")
	splashifyPotion("windswept:strong_thorns")
	splashifyPotion("windswept:long_thorns")
	
	splashifyPotion("naturalist:forest_dasher")
	splashifyPotion("naturalist:long_forest_dasher")
	splashifyPotion("naturalist:strong_forest_dasher")
	
	splashifyPotion("quark:resilience")
	splashifyPotion("quark:strong_resilience")
	splashifyPotion("quark:long_resilience")
	
	splashifyPotion("caverns_and_chasms:rewind")
	splashifyPotion("caverns_and_chasms:long_rewind")
	
	splashifyPotion("environmental:vitality")
	splashifyPotion("environmental:vitality_strong")
	
	splashifyPotion("upgrade_aquatic:restfulness")
	splashifyPotion("upgrade_aquatic:restfulness_strong")
	
	splashifyPotion("upgrade_aquatic:repellence")
	splashifyPotion("upgrade_aquatic:repellence_strong")
	splashifyPotion("upgrade_aquatic:repellence_long")
	
	splashifyPotion("upgrade_aquatic:vibing")
	splashifyPotion("upgrade_aquatic:vibing_strong")
	splashifyPotion("upgrade_aquatic:vibing_long")
	
	splashifyPotion("autumnity:extension")
	
	splashifyPotion("atmospheric:relief")
	splashifyPotion("atmospheric:relief_strong")
	splashifyPotion("atmospheric:relief_long")
	
	// Harmful
	splashifyPotion("minecraft:slowness")
	splashifyPotion("minecraft:strong_slowness")
	splashifyPotion("minecraft:long_slowness")
	
	splashifyPotion("minecraft:harming")
	splashifyPotion("minecraft:strong_harming")
	
	splashifyPotion("minecraft:poison")
	splashifyPotion("minecraft:strong_poison")
	splashifyPotion("minecraft:long_poison")
	
	splashifyPotion("minecraft:weakness")
	splashifyPotion("minecraft:long_weakness")
	
	splashifyPotion("kubejs:blindness")
	splashifyPotion("kubejs:long_blindness")
	
	splashifyPotion("kubejs:levitation")
	splashifyPotion("kubejs:long_levitation")
	splashifyPotion("kubejs:strong_levitation")
	
	splashifyPotion("kubejs:decay")
	splashifyPotion("kubejs:long_decay")
	splashifyPotion("kubejs:strong_decay")
	
	splashifyPotion("oreganized:stunning")
	splashifyPotion("oreganized:long_stunning")
	splashifyPotion("oreganized:strong_stunning")
	
	splashifyPotion("upgrade_aquatic:insomnia")
	splashifyPotion("upgrade_aquatic:insomnia_strong")
	
	splashifyPotion("atmospheric:worsening")
	splashifyPotion("atmospheric:worsening_strong")
	splashifyPotion("atmospheric:worsening_long")

// Tipped arrows
	const fillingTippedArrows = [
	"minecraft:night_vision",
	"minecraft:long_night_vision",
	"minecraft:invisibility",
	"minecraft:long_invisibility",
	"minecraft:leaping",
	"minecraft:long_leaping",
	"minecraft:strong_leaping",
	"minecraft:fire_resistance",
	"minecraft:long_fire_resistance",
	"minecraft:swiftness",
	"minecraft:long_swiftness",
	"minecraft:strong_swiftness",
	"minecraft:turtle_master",
	"minecraft:long_turtle_master",
	"minecraft:strong_turtle_master",
	"minecraft:water_breathing",
	"minecraft:long_water_breathing",
	"minecraft:healing",
	"minecraft:strong_healing",
	"minecraft:poison",
	"minecraft:long_poison",
	"minecraft:strong_poison",
	"minecraft:regeneration",
	"minecraft:long_regeneration",
	"minecraft:strong_regeneration",
	"minecraft:strength",
	"minecraft:long_strength",
	"minecraft:strong_strength",
	"minecraft:slow_falling",
	"minecraft:long_slow_falling",
	"windswept:thorns",
	"windswept:strong_thorns",
	"windswept:long_thorns",
	"naturalist:forest_dasher",
	"naturalist:strong_forest_dasher",
	"naturalist:long_forest_dasher",
	"quark:resilience",
	"quark:strong_resilience",
	"quark:long_resilience",
	"caverns_and_chasms:rewind",
	"caverns_and_chasms:long_rewind",
	"environmental:vitality",
	"environmental:vitality_strong",
	"upgrade_aquatic:restfulness",
	"upgrade_aquatic:restfulness_strong",
	"upgrade_aquatic:repellence",
	"upgrade_aquatic:repellence_strong",
	"upgrade_aquatic:repellence_long",
	"upgrade_aquatic:vibing",
	"upgrade_aquatic:vibing_strong",
	"upgrade_aquatic:vibing_long",
	"autumnity:extension",
	"atmospheric:relief",
	"atmospheric:relief_strong",
	"atmospheric:relief_long",
	"minecraft:slowness",
	"minecraft:long_slowness",
	"minecraft:strong_slowness",
	"minecraft:harming",
	"minecraft:strong_harming",
	"minecraft:poison",
	"minecraft:long_poison",
	"minecraft:strong_poison",
	"minecraft:weakness",
	"minecraft:long_weakness",
	"kubejs:blindness",
	"kubejs:long_blindness",
	"kubejs:levitation",
	"kubejs:long_levitation",
	"kubejs:strong_levitation",
	"kubejs:decay",
	"kubejs:long_decay",
	"kubejs:strong_decay",
	"oreganized:stunning",
	"oreganized:long_stunning",
	"oreganized:strong_stunning",
	"upgrade_aquatic:insomnia",
	"upgrade_aquatic:insomnia_strong",
	"atmospheric:worsening",
	"atmospheric:worsening_strong",
	"atmospheric:worsening_long"
	]
    
    fillingTippedArrows.forEach(fillingTippedArrow => {
        event.recipes.create.filling(Item.of('minecraft:tipped_arrow', 1, {Potion:fillingTippedArrow}), [Fluid.of('create:potion', 10, {Bottle:"LINGERING", Potion:fillingTippedArrow}), 'arrow'])
    })
})