// priority: 0

ServerEvents.recipes(event => {
// Remove existing recipes
	event.remove({input: [
	'#raspberry_flavoured:stone',
	'#raspberry_flavoured:stone_slab',
	'#raspberry_flavoured:deepslate',
	'#raspberry_flavoured:deepslate_slab',
	'#create:stone_types/deepslate',
	'#raspberry_flavoured:granite',
	'#raspberry_flavoured:granite_slab',
	'#create:stone_types/granite',
	'#raspberry_flavoured:diorite',
	'#raspberry_flavoured:diorite_slab',
	'#create:stone_types/diorite',
	'#raspberry_flavoured:andesite',
	'#raspberry_flavoured:andesite_slab',
	'#create:stone_types/andesite',
	'#raspberry_flavoured:calcite',
	'#raspberry_flavoured:calcite_slab',
	'#create:stone_types/calcite',
	'#raspberry_flavoured:tuff',
	'#raspberry_flavoured:tuff_slab',
	'#create:stone_types/tuff',
	'#raspberry_flavoured:dripstone',
	'#raspberry_flavoured:dripstone',
	'#create:stone_types/dripstone',
	'#raspberry_flavoured:quartz',
	'#raspberry_flavoured:quartz_slab',
	'#raspberry_flavoured:basalt',
	'#raspberry_flavoured:basalt_slab',
	'#raspberry_flavoured:blackstone',
	'#raspberry_flavoured:blackstone_slab',
	'#raspberry_flavoured:copper_blocks',
	'#raspberry_flavoured:exposed_copper_blocks',
	'#raspberry_flavoured:weathered_copper_blocks',
	'#raspberry_flavoured:oxidized_copper_blocks',
	'#raspberry_flavoured:copper_slabs',
	'#raspberry_flavoured:exposed_copper_slabs',
	'#raspberry_flavoured:weathered_copper_slabs',
	'#raspberry_flavoured:oxidized_copper_slabs',
	'#raspberry_flavoured:waxed_copper_blocks',
	'#raspberry_flavoured:waxed_exposed_copper_blocks',
	'#raspberry_flavoured:waxed_weathered_copper_blocks',
	'#raspberry_flavoured:waxed_oxidized_copper_blocks',
	'#raspberry_flavoured:waxed_copper_slabs',
	'#raspberry_flavoured:waxed_exposed_copper_slabs',
	'#raspberry_flavoured:waxed_weathered_copper_slabs',
	'#raspberry_flavoured:waxed_oxidized_copper_slabs',
	'#raspberry_flavoured:lapis_blocks',
	'#raspberry_flavoured:lapis_slabs',
	'#raspberry_flavoured:gravel_blocks',
	'#raspberry_flavoured:gravel_slabs',
	'#raspberry_flavoured:deepslate_gravel_blocks',
	'#raspberry_flavoured:deepslate_gravel_slabs',
	'#raspberry_flavoured:blackstone_gravel_blocks',
	'#raspberry_flavoured:blackstone_gravel_slabs'
	], type: 'minecraft:stonecutting'})
	
	event.remove({output: [
	'#raspberry_flavoured:stone',
	'#raspberry_flavoured:stone_slab',
	'#raspberry_flavoured:deepslate',
	'#raspberry_flavoured:deepslate_slab',
	'#create:stone_types/deepslate',
	'#raspberry_flavoured:granite',
	'#raspberry_flavoured:granite_slab',
	'#create:stone_types/granite',
	'#raspberry_flavoured:diorite',
	'#raspberry_flavoured:diorite_slab',
	'#create:stone_types/diorite',
	'#raspberry_flavoured:andesite',
	'#raspberry_flavoured:andesite_slab',
	'#create:stone_types/andesite',
	'#raspberry_flavoured:calcite',
	'#raspberry_flavoured:calcite_slab',
	'#create:stone_types/calcite',
	'#raspberry_flavoured:tuff',
	'#raspberry_flavoured:tuff_slab',
	'#create:stone_types/tuff',
	'#raspberry_flavoured:dripstone',
	'#raspberry_flavoured:dripstone',
	'#create:stone_types/dripstone',
	'#raspberry_flavoured:quartz',
	'#raspberry_flavoured:quartz_slab',
	'#raspberry_flavoured:basalt',
	'#raspberry_flavoured:basalt_slab',
	'#raspberry_flavoured:blackstone',
	'#raspberry_flavoured:blackstone_slab',
	'#raspberry_flavoured:copper_blocks',
	'#raspberry_flavoured:exposed_copper_blocks',
	'#raspberry_flavoured:weathered_copper_blocks',
	'#raspberry_flavoured:oxidized_copper_blocks',
	'#raspberry_flavoured:copper_slabs',
	'#raspberry_flavoured:exposed_copper_slabs',
	'#raspberry_flavoured:weathered_copper_slabs',
	'#raspberry_flavoured:oxidized_copper_slabs',
	'#raspberry_flavoured:waxed_copper_blocks',
	'#raspberry_flavoured:waxed_exposed_copper_blocks',
	'#raspberry_flavoured:waxed_weathered_copper_blocks',
	'#raspberry_flavoured:waxed_oxidized_copper_blocks',
	'#raspberry_flavoured:waxed_copper_slabs',
	'#raspberry_flavoured:waxed_exposed_copper_slabs',
	'#raspberry_flavoured:waxed_weathered_copper_slabs',
	'#raspberry_flavoured:waxed_oxidized_copper_slabs',
	'#raspberry_flavoured:lapis_blocks',
	'#raspberry_flavoured:lapis_slabs',
	'#raspberry_flavoured:gravel_blocks',
	'#raspberry_flavoured:gravel_slabs',
	'#raspberry_flavoured:deepslate_gravel_blocks',
	'#raspberry_flavoured:deepslate_gravel_slabs',
	'#raspberry_flavoured:blackstone_gravel_blocks',
	'#raspberry_flavoured:blackstone_gravel_slabs'
	], type: 'minecraft:stonecutting'})
	
// Add new recipes
	
	// Stone
	event.stonecutting('1x minecraft:stone', '#raspberry_flavoured:stone')
	event.stonecutting('1x minecraft:cobblestone', '#raspberry_flavoured:stone')
	event.stonecutting('1x minecraft:cobblestone_stairs', '#raspberry_flavoured:stone')
	event.stonecutting('1x minecraft:smooth_stone', '#raspberry_flavoured:stone')
	event.stonecutting('1x kubejs:smooth_stone_stairs', '#raspberry_flavoured:stone')
	event.stonecutting('1x kubejs:smooth_stone_wall', '#raspberry_flavoured:stone')
	event.stonecutting('1x minecraft:stone_bricks', '#raspberry_flavoured:stone')
	event.stonecutting('1x minecraft:cracked_stone_bricks', '#raspberry_flavoured:stone')
	event.stonecutting('1x minecraft:chiseled_stone_bricks', '#raspberry_flavoured:stone')
	event.stonecutting('1x minecraft:stone_brick_stairs', '#raspberry_flavoured:stone')
	event.stonecutting('1x minecraft:stone_stairs', '#raspberry_flavoured:stone')
	event.stonecutting('1x minecraft:cobblestone_wall', '#raspberry_flavoured:stone')
	event.stonecutting('1x minecraft:stone_brick_wall', '#raspberry_flavoured:stone')
	event.stonecutting('1x supplementaries:stone_tile', '#raspberry_flavoured:stone')
	event.stonecutting('1x supplementaries:stone_tile_stairs', '#raspberry_flavoured:stone')
	event.stonecutting('1x supplementaries:stone_tile_wall', '#raspberry_flavoured:stone')
	event.stonecutting('1x paletteblocks:cobblestone_bricks', '#raspberry_flavoured:stone')
	event.stonecutting('1x paletteblocks:cracked_cobblestone_bricks', '#raspberry_flavoured:stone')
	event.stonecutting('1x paletteblocks:cobblestone_brick_stairs', '#raspberry_flavoured:stone')
	event.stonecutting('1x paletteblocks:cobblestone_brick_wall', '#raspberry_flavoured:stone')
	event.stonecutting('1x architects_palette:heavy_stone_bricks', '#raspberry_flavoured:stone')
	event.stonecutting('1x architects_palette:heavy_cracked_stone_bricks', '#raspberry_flavoured:stone')
	event.stonecutting('1x twigs:smooth_stone_bricks', '#raspberry_flavoured:stone')
	event.stonecutting('1x twigs:smooth_stone_brick_stairs', '#raspberry_flavoured:stone')
	event.stonecutting('1x twigs:smooth_stone_brick_wall', '#raspberry_flavoured:stone')
	event.stonecutting('1x twigs:stone_column', '#raspberry_flavoured:stone')
	
	// Stone slabs
	event.stonecutting('2x minecraft:stone_slab', '#raspberry_flavoured:stone')
	event.stonecutting('2x minecraft:smooth_stone_slab', '#raspberry_flavoured:stone')
	event.stonecutting('2x minecraft:cobblestone_slab', '#raspberry_flavoured:stone')
	event.stonecutting('2x minecraft:stone_brick_slab', '#raspberry_flavoured:stone')
	event.stonecutting('2x supplementaries:stone_tile_slab', '#raspberry_flavoured:stone')
	event.stonecutting('2x paletteblocks:cobblestone_brick_slab', '#raspberry_flavoured:stone')	
	event.stonecutting('2x twigs:smooth_stone_brick_slab', '#raspberry_flavoured:stone')
	event.stonecutting('1x minecraft:stone_slab', '#raspberry_flavoured:stone_slab')
	event.stonecutting('1x minecraft:smooth_stone_slab', '#raspberry_flavoured:stone_slab')
	event.stonecutting('1x minecraft:cobblestone_slab', '#raspberry_flavoured:stone_slab')
	event.stonecutting('1x minecraft:stone_brick_slab', '#raspberry_flavoured:stone_slab')
	event.stonecutting('1x supplementaries:stone_tile_slab', '#raspberry_flavoured:stone_slab')
	event.stonecutting('1x paletteblocks:cobblestone_brick_slab', '#raspberry_flavoured:stone_slab')
	event.stonecutting('1x twigs:smooth_stone_brick_slab', '#raspberry_flavoured:stone_slab')
	
	// Deepslate
	event.stonecutting('1x minecraft:deepslate', '#raspberry_flavoured:deepslate')
	event.stonecutting('1x minecraft:cobbled_deepslate', '#raspberry_flavoured:deepslate')
	event.stonecutting('1x minecraft:polished_deepslate', '#raspberry_flavoured:deepslate')
	event.stonecutting('1x minecraft:deepslate_bricks', '#raspberry_flavoured:deepslate')
	event.stonecutting('1x minecraft:cracked_deepslate_bricks', '#raspberry_flavoured:deepslate')
	event.stonecutting('1x minecraft:deepslate_tiles', '#raspberry_flavoured:deepslate')
	event.stonecutting('1x minecraft:cracked_deepslate_tiles', '#raspberry_flavoured:deepslate')
	event.stonecutting('1x minecraft:chiseled_deepslate', '#raspberry_flavoured:deepslate')
	event.stonecutting('1x minecraft:cobbled_deepslate_stairs', '#raspberry_flavoured:deepslate')
	event.stonecutting('1x minecraft:polished_deepslate_stairs', '#raspberry_flavoured:deepslate')
	event.stonecutting('1x minecraft:deepslate_brick_stairs', '#raspberry_flavoured:deepslate')
	event.stonecutting('1x minecraft:deepslate_tile_stairs', '#raspberry_flavoured:deepslate')
	event.stonecutting('1x minecraft:cobbled_deepslate_wall', '#raspberry_flavoured:deepslate')
	event.stonecutting('1x minecraft:polished_deepslate_wall', '#raspberry_flavoured:deepslate')
	event.stonecutting('1x minecraft:deepslate_brick_wall', '#raspberry_flavoured:deepslate')
	event.stonecutting('1x minecraft:deepslate_tile_wall', '#raspberry_flavoured:deepslate')
	event.stonecutting('1x create:cut_deepslate', '#raspberry_flavoured:deepslate')
	event.stonecutting('1x create:cut_deepslate_stairs', '#raspberry_flavoured:deepslate')
	event.stonecutting('1x create:cut_deepslate_wall', '#raspberry_flavoured:deepslate')
	event.stonecutting('1x create:polished_cut_deepslate', '#raspberry_flavoured:deepslate')
	event.stonecutting('1x create:polished_cut_deepslate_stairs', '#raspberry_flavoured:deepslate')
	event.stonecutting('1x create:polished_cut_deepslate_wall', '#raspberry_flavoured:deepslate')
	event.stonecutting('1x create:cut_deepslate_bricks', '#raspberry_flavoured:deepslate')
	event.stonecutting('1x create:cut_deepslate_brick_stairs', '#raspberry_flavoured:deepslate')
	event.stonecutting('1x create:cut_deepslate_brick_wall', '#raspberry_flavoured:deepslate')
	event.stonecutting('1x create:small_deepslate_bricks', '#raspberry_flavoured:deepslate')
	event.stonecutting('1x create:small_deepslate_brick_stairs', '#raspberry_flavoured:deepslate')
	event.stonecutting('1x create:small_deepslate_brick_wall', '#raspberry_flavoured:deepslate')
	event.stonecutting('1x create:layered_deepslate', '#raspberry_flavoured:deepslate')
	event.stonecutting('1x create:deepslate_pillar', '#raspberry_flavoured:deepslate')
	event.stonecutting('1x twigs:deepslate_column', '#raspberry_flavoured:deepslate')
	
	// Deepslate slabs
	event.stonecutting('1x minecraft:cobbled_deepslate_slab', '#raspberry_flavoured:deepslate_slab')
	event.stonecutting('1x minecraft:polished_deepslate_slab', '#raspberry_flavoured:deepslate_slab')
	event.stonecutting('1x minecraft:deepslate_brick_slab', '#raspberry_flavoured:deepslate_slab')
	event.stonecutting('1x minecraft:deepslate_tile_slab', '#raspberry_flavoured:deepslate_slab')
	event.stonecutting('1x create:cut_deepslate_slab', '#raspberry_flavoured:deepslate_slab')
	event.stonecutting('1x create:polished_cut_deepslate_slab', '#raspberry_flavoured:deepslate_slab')
	event.stonecutting('1x create:cut_deepslate_brick_slab', '#raspberry_flavoured:deepslate_slab')
	event.stonecutting('1x create:small_deepslate_brick_slab', '#raspberry_flavoured:deepslate_slab')
	event.stonecutting('2x minecraft:cobbled_deepslate_slab', '#raspberry_flavoured:deepslate')
	event.stonecutting('2x minecraft:polished_deepslate_slab', '#raspberry_flavoured:deepslate')
	event.stonecutting('2x minecraft:deepslate_brick_slab', '#raspberry_flavoured:deepslate')
	event.stonecutting('2x minecraft:deepslate_tile_slab', '#raspberry_flavoured:deepslate')
	event.stonecutting('2x create:cut_deepslate_slab', '#raspberry_flavoured:deepslate')
	event.stonecutting('2x create:polished_cut_deepslate_slab', '#raspberry_flavoured:deepslate')
	event.stonecutting('2x create:cut_deepslate_brick_slab', '#raspberry_flavoured:deepslate')
	event.stonecutting('2x create:small_deepslate_brick_slab', '#raspberry_flavoured:deepslate')

	// Granite
	event.stonecutting('1x minecraft:granite', '#raspberry_flavoured:granite')
	event.stonecutting('1x minecraft:polished_granite', '#raspberry_flavoured:granite')
	event.stonecutting('1x minecraft:granite_stairs', '#raspberry_flavoured:granite')
	event.stonecutting('1x minecraft:polished_granite_stairs', '#raspberry_flavoured:granite')
	event.stonecutting('1x minecraft:granite_wall', '#raspberry_flavoured:granite')
	event.stonecutting('1x quark:granite_bricks', '#raspberry_flavoured:granite')
	event.stonecutting('1x quark:granite_bricks_stairs', '#raspberry_flavoured:granite')
	event.stonecutting('1x quark:chiseled_granite_bricks', '#raspberry_flavoured:granite')
	event.stonecutting('1x quark:granite_pillar', '#raspberry_flavoured:granite')
	event.stonecutting('1x quark:granite_bricks_wall', '#raspberry_flavoured:granite')
	event.stonecutting('1x paletteblocks:polished_granite_wall', '#raspberry_flavoured:granite')
	event.stonecutting('1x create:cut_granite', '#raspberry_flavoured:granite')
	event.stonecutting('1x create:cut_granite_stairs', '#raspberry_flavoured:granite')
	event.stonecutting('1x create:cut_granite_wall', '#raspberry_flavoured:granite')
	event.stonecutting('1x create:polished_cut_granite', '#raspberry_flavoured:granite')
	event.stonecutting('1x create:polished_cut_granite_stairs', '#raspberry_flavoured:granite')
	event.stonecutting('1x create:polished_cut_granite_wall', '#raspberry_flavoured:granite')
	event.stonecutting('1x create:cut_granite_bricks', '#raspberry_flavoured:granite')
	event.stonecutting('1x create:cut_granite_brick_stairs', '#raspberry_flavoured:granite')
	event.stonecutting('1x create:cut_granite_brick_wall', '#raspberry_flavoured:granite')
	event.stonecutting('1x create:small_granite_bricks', '#raspberry_flavoured:granite')
	event.stonecutting('1x create:small_granite_brick_stairs', '#raspberry_flavoured:granite')
	event.stonecutting('1x create:small_granite_brick_wall', '#raspberry_flavoured:granite')
	event.stonecutting('1x create:layered_granite', '#raspberry_flavoured:granite')
	event.stonecutting('1x create:granite_pillar', '#raspberry_flavoured:granite')
	
	// Granite slabs
	event.stonecutting('2x minecraft:polished_granite_slab', '#raspberry_flavoured:granite')
	event.stonecutting('2x minecraft:granite_slab', '#raspberry_flavoured:granite')
	event.stonecutting('2x quark:granite_bricks_slab', '#raspberry_flavoured:granite')
	event.stonecutting('2x create:cut_granite_slab', '#raspberry_flavoured:granite')
	event.stonecutting('2x create:polished_cut_granite_slab', '#raspberry_flavoured:granite')
	event.stonecutting('2x create:cut_granite_brick_slab', '#raspberry_flavoured:granite')
	event.stonecutting('2x create:small_granite_brick_slab', '#raspberry_flavoured:granite')
	event.stonecutting('1x minecraft:polished_granite_slab', '#raspberry_flavoured:granite_slab')
	event.stonecutting('1x minecraft:granite_slab', '#raspberry_flavoured:granite_slab')
	event.stonecutting('1x quark:granite_bricks_slab', '#raspberry_flavoured:granite_slab')
	event.stonecutting('1x create:cut_granite_slab', '#raspberry_flavoured:granite_slab')
	event.stonecutting('1x create:polished_cut_granite_slab', '#raspberry_flavoured:granite_slab')
	event.stonecutting('1x create:cut_granite_brick_slab', '#raspberry_flavoured:granite_slab')
	event.stonecutting('1x create:small_granite_brick_slab', '#raspberry_flavoured:granite_slab')

	// Diorite
	event.stonecutting('1x minecraft:diorite', '#raspberry_flavoured:diorite')
	event.stonecutting('1x minecraft:polished_diorite', '#raspberry_flavoured:diorite')
	event.stonecutting('1x minecraft:diorite_stairs', '#raspberry_flavoured:diorite')
	event.stonecutting('1x minecraft:polished_diorite_stairs', '#raspberry_flavoured:diorite')
	event.stonecutting('1x minecraft:diorite_wall', '#raspberry_flavoured:diorite')
	event.stonecutting('1x quark:diorite_bricks', '#raspberry_flavoured:diorite')
	event.stonecutting('1x quark:diorite_bricks_stairs', '#raspberry_flavoured:diorite')
	event.stonecutting('1x quark:chiseled_diorite_bricks', '#raspberry_flavoured:diorite')
	event.stonecutting('1x quark:diorite_pillar', '#raspberry_flavoured:diorite')
	event.stonecutting('1x quark:diorite_bricks_wall', '#raspberry_flavoured:diorite')
	event.stonecutting('1x paletteblocks:polished_diorite_wall', '#raspberry_flavoured:diorite')
	event.stonecutting('1x create:cut_diorite', '#raspberry_flavoured:diorite')
	event.stonecutting('1x create:cut_diorite_stairs', '#raspberry_flavoured:diorite')
	event.stonecutting('1x create:cut_diorite_wall', '#raspberry_flavoured:diorite')
	event.stonecutting('1x create:polished_cut_diorite', '#raspberry_flavoured:diorite')
	event.stonecutting('1x create:polished_cut_diorite_stairs', '#raspberry_flavoured:diorite')
	event.stonecutting('1x create:polished_cut_diorite_wall', '#raspberry_flavoured:diorite')
	event.stonecutting('1x create:cut_diorite_bricks', '#raspberry_flavoured:diorite')
	event.stonecutting('1x create:cut_diorite_brick_stairs', '#raspberry_flavoured:diorite')
	event.stonecutting('1x create:cut_diorite_brick_wall', '#raspberry_flavoured:diorite')
	event.stonecutting('1x create:small_diorite_bricks', '#raspberry_flavoured:diorite')
	event.stonecutting('1x create:small_diorite_brick_stairs', '#raspberry_flavoured:diorite')
	event.stonecutting('1x create:small_diorite_brick_wall', '#raspberry_flavoured:diorite')
	event.stonecutting('1x create:layered_diorite', '#raspberry_flavoured:diorite')
	event.stonecutting('1x create:diorite_pillar', '#raspberry_flavoured:diorite')
	
	// Diorite slabs
	event.stonecutting('2x minecraft:polished_diorite_slab', '#raspberry_flavoured:diorite')
	event.stonecutting('2x minecraft:diorite_slab', '#raspberry_flavoured:diorite')
	event.stonecutting('2x quark:diorite_bricks_slab', '#raspberry_flavoured:diorite')
	event.stonecutting('2x create:cut_diorite_slab', '#raspberry_flavoured:diorite')
	event.stonecutting('2x create:polished_cut_diorite_slab', '#raspberry_flavoured:diorite')
	event.stonecutting('2x create:cut_diorite_brick_slab', '#raspberry_flavoured:diorite')
	event.stonecutting('2x create:small_diorite_brick_slab', '#raspberry_flavoured:diorite')
	event.stonecutting('1x minecraft:polished_diorite_slab', '#raspberry_flavoured:diorite_slab')
	event.stonecutting('1x minecraft:diorite_slab', '#raspberry_flavoured:diorite_slab')
	event.stonecutting('1x quark:diorite_bricks_slab', '#raspberry_flavoured:diorite_slab')
	event.stonecutting('1x create:cut_diorite_slab', '#raspberry_flavoured:diorite_slab')
	event.stonecutting('1x create:polished_cut_diorite_slab', '#raspberry_flavoured:diorite_slab')
	event.stonecutting('1x create:cut_diorite_brick_slab', '#raspberry_flavoured:diorite_slab')
	event.stonecutting('1x create:small_diorite_brick_slab', '#raspberry_flavoured:diorite_slab')
	
	// Andesite
	event.stonecutting('1x minecraft:andesite', '#raspberry_flavoured:andesite')
	event.stonecutting('1x minecraft:polished_andesite', '#raspberry_flavoured:andesite')
	event.stonecutting('1x minecraft:andesite_stairs', '#raspberry_flavoured:andesite')
	event.stonecutting('1x minecraft:polished_andesite_stairs', '#raspberry_flavoured:andesite')
	event.stonecutting('1x minecraft:andesite_wall', '#raspberry_flavoured:andesite')
	event.stonecutting('1x quark:andesite_bricks', '#raspberry_flavoured:andesite')
	event.stonecutting('1x quark:andesite_bricks_stairs', '#raspberry_flavoured:andesite')
	event.stonecutting('1x quark:chiseled_andesite_bricks', '#raspberry_flavoured:andesite')
	event.stonecutting('1x quark:andesite_pillar', '#raspberry_flavoured:andesite')
	event.stonecutting('1x quark:andesite_bricks_wall', '#raspberry_flavoured:andesite')
	event.stonecutting('1x paletteblocks:polished_andesite_wall', '#raspberry_flavoured:andesite')
	event.stonecutting('1x create:cut_andesite', '#raspberry_flavoured:andesite')
	event.stonecutting('1x create:cut_andesite_stairs', '#raspberry_flavoured:andesite')
	event.stonecutting('1x create:cut_andesite_wall', '#raspberry_flavoured:andesite')
	event.stonecutting('1x create:polished_cut_andesite', '#raspberry_flavoured:andesite')
	event.stonecutting('1x create:polished_cut_andesite_stairs', '#raspberry_flavoured:andesite')
	event.stonecutting('1x create:polished_cut_andesite_wall', '#raspberry_flavoured:andesite')
	event.stonecutting('1x create:cut_andesite_bricks', '#raspberry_flavoured:andesite')
	event.stonecutting('1x create:cut_andesite_brick_stairs', '#raspberry_flavoured:andesite')
	event.stonecutting('1x create:cut_andesite_brick_wall', '#raspberry_flavoured:andesite')
	event.stonecutting('1x create:small_andesite_bricks', '#raspberry_flavoured:andesite')
	event.stonecutting('1x create:small_andesite_brick_stairs', '#raspberry_flavoured:andesite')
	event.stonecutting('1x create:small_andesite_brick_wall', '#raspberry_flavoured:andesite')
	event.stonecutting('1x create:layered_andesite', '#raspberry_flavoured:andesite')
	event.stonecutting('1x create:andesite_pillar', '#raspberry_flavoured:andesite')
	
	// Andesite slabs
	event.stonecutting('2x minecraft:polished_andesite_slab', '#raspberry_flavoured:andesite')
	event.stonecutting('2x minecraft:andesite_slab', '#raspberry_flavoured:andesite')
	event.stonecutting('2x quark:andesite_bricks_slab', '#raspberry_flavoured:andesite')
	event.stonecutting('2x create:cut_andesite_slab', '#raspberry_flavoured:andesite')
	event.stonecutting('2x create:polished_cut_andesite_slab', '#raspberry_flavoured:andesite')
	event.stonecutting('2x create:cut_andesite_brick_slab', '#raspberry_flavoured:andesite')
	event.stonecutting('2x create:small_andesite_brick_slab', '#raspberry_flavoured:andesite')
	event.stonecutting('1x minecraft:polished_andesite_slab', '#raspberry_flavoured:andesite_slab')
	event.stonecutting('1x minecraft:andesite_slab', '#raspberry_flavoured:andesite_slab')
	event.stonecutting('1x quark:andesite_bricks_slab', '#raspberry_flavoured:andesite_slab')
	event.stonecutting('1x create:cut_andesite_slab', '#raspberry_flavoured:andesite_slab')
	event.stonecutting('1x create:polished_cut_andesite_slab', '#raspberry_flavoured:andesite_slab')
	event.stonecutting('1x create:cut_andesite_brick_slab', '#raspberry_flavoured:andesite_slab')
	event.stonecutting('1x create:small_andesite_brick_slab', '#raspberry_flavoured:andesite_slab')

	// Calcite
	event.stonecutting('1x minecraft:calcite', '#raspberry_flavoured:calcite')
	event.stonecutting('1x quark:polished_calcite', '#raspberry_flavoured:calcite')
	event.stonecutting('1x quark:calcite_stairs', '#raspberry_flavoured:calcite')
	event.stonecutting('1x quark:polished_calcite_stairs', '#raspberry_flavoured:calcite')
	event.stonecutting('1x quark:calcite_bricks', '#raspberry_flavoured:calcite')
	event.stonecutting('1x quark:calcite_bricks_stairs', '#raspberry_flavoured:calcite')
	event.stonecutting('1x quark:chiseled_calcite_bricks', '#raspberry_flavoured:calcite')
	event.stonecutting('1x quark:calcite_pillar', '#raspberry_flavoured:calcite')
	event.stonecutting('1x quark:calcite_wall', '#raspberry_flavoured:calcite')
	event.stonecutting('1x quark:calcite_bricks_wall', '#raspberry_flavoured:calcite')
	event.stonecutting('1x paletteblocks:polished_calcite_wall', '#raspberry_flavoured:calcite')
	event.stonecutting('1x architects_palette:calcite_bricks', '#raspberry_flavoured:calcite')
	event.stonecutting('1x architects_palette:calcite_brick_stairs', '#raspberry_flavoured:calcite')
	event.stonecutting('1x architects_palette:calcite_pillar', '#raspberry_flavoured:calcite')
	event.stonecutting('1x architects_palette:chiseled_calcite', '#raspberry_flavoured:calcite')
	event.stonecutting('1x architects_palette:heavy_calcite_bricks', '#raspberry_flavoured:calcite')
	event.stonecutting('1x architects_palette:calcite_brick_wall', '#raspberry_flavoured:calcite')
	event.stonecutting('1x create:cut_calcite', '#raspberry_flavoured:calcite')
	event.stonecutting('1x create:cut_calcite_stairs', '#raspberry_flavoured:calcite')
	event.stonecutting('1x create:cut_calcite_wall', '#raspberry_flavoured:calcite')
	event.stonecutting('1x create:polished_cut_calcite', '#raspberry_flavoured:calcite')
	event.stonecutting('1x create:polished_cut_calcite_stairs', '#raspberry_flavoured:calcite')
	event.stonecutting('1x create:polished_cut_calcite_wall', '#raspberry_flavoured:calcite')
	event.stonecutting('1x create:cut_calcite_bricks', '#raspberry_flavoured:calcite')
	event.stonecutting('1x create:cut_calcite_brick_stairs', '#raspberry_flavoured:calcite')
	event.stonecutting('1x create:cut_calcite_brick_wall', '#raspberry_flavoured:calcite')
	event.stonecutting('1x create:small_calcite_bricks', '#raspberry_flavoured:calcite')
	event.stonecutting('1x create:small_calcite_brick_stairs', '#raspberry_flavoured:calcite')
	event.stonecutting('1x create:small_calcite_brick_wall', '#raspberry_flavoured:calcite')
	event.stonecutting('1x create:layered_calcite', '#raspberry_flavoured:calcite')
	event.stonecutting('1x create:calcite_pillar', '#raspberry_flavoured:calcite')
	
	// Calcite slabs
	event.stonecutting('2x quark:calcite_slab', '#raspberry_flavoured:calcite')
	event.stonecutting('2x quark:polished_calcite_slab', '#raspberry_flavoured:calcite')
	event.stonecutting('2x quark:calcite_bricks_slab', '#raspberry_flavoured:calcite')
	event.stonecutting('2x architects_palette:calcite_brick_slab', '#raspberry_flavoured:calcite')
	event.stonecutting('2x create:cut_calcite_slab', '#raspberry_flavoured:calcite')
	event.stonecutting('2x create:polished_cut_calcite_slab', '#raspberry_flavoured:calcite')
	event.stonecutting('2x create:cut_calcite_brick_slab', '#raspberry_flavoured:calcite')
	event.stonecutting('2x create:small_calcite_brick_slab', '#raspberry_flavoured:calcite')
	event.stonecutting('1x quark:calcite_slab', '#raspberry_flavoured:calcite_slab')
	event.stonecutting('1x quark:polished_calcite_slab', '#raspberry_flavoured:calcite_slab')
	event.stonecutting('1x quark:calcite_bricks_slab', '#raspberry_flavoured:calcite_slab')
	event.stonecutting('1x architects_palette:calcite_brick_slab', '#raspberry_flavoured:calcite_slab')
	event.stonecutting('1x create:cut_calcite_slab', '#raspberry_flavoured:calcite_slab')
	event.stonecutting('1x create:polished_cut_calcite_slab', '#raspberry_flavoured:calcite_slab')
	event.stonecutting('1x create:cut_calcite_brick_slab', '#raspberry_flavoured:calcite_slab')
	event.stonecutting('1x create:small_calcite_brick_slab', '#raspberry_flavoured:calcite_slab')
	
	// Tuff
	event.stonecutting('1x minecraft:tuff', '#raspberry_flavoured:tuff')
	event.stonecutting('1x quark:polished_tuff', '#raspberry_flavoured:tuff')
	event.stonecutting('1x quark:tuff_stairs', '#raspberry_flavoured:tuff')
	event.stonecutting('1x quark:tuff_wall', '#raspberry_flavoured:tuff')
	event.stonecutting('1x quark:polished_tuff_stairs', '#raspberry_flavoured:tuff')
	event.stonecutting('1x quark:tuff_bricks', '#raspberry_flavoured:tuff')
	event.stonecutting('1x quark:tuff_bricks_stairs', '#raspberry_flavoured:tuff')
	event.stonecutting('1x quark:tuff_bricks_wall', '#raspberry_flavoured:tuff')
	event.stonecutting('1x quark:chiseled_tuff_bricks', '#raspberry_flavoured:tuff')
	event.stonecutting('1x quark:tuff_pillar', '#raspberry_flavoured:tuff')
	event.stonecutting('1x paletteblocks:polished_tuff_wall', '#raspberry_flavoured:tuff')
	event.stonecutting('1x architects_palette:tuff_bricks', '#raspberry_flavoured:tuff')
	event.stonecutting('1x architects_palette:tuff_brick_stairs', '#raspberry_flavoured:tuff')
	event.stonecutting('1x architects_palette:tuff_brick_wall', '#raspberry_flavoured:tuff')
	event.stonecutting('1x architects_palette:tuff_pillar', '#raspberry_flavoured:tuff')
	event.stonecutting('1x architects_palette:chiseled_tuff', '#raspberry_flavoured:tuff')
	event.stonecutting('1x architects_palette:heavy_tuff_bricks', '#raspberry_flavoured:tuff')
	event.stonecutting('1x create:cut_tuff', '#raspberry_flavoured:tuff')
	event.stonecutting('1x create:cut_tuff_stairs', '#raspberry_flavoured:tuff')
	event.stonecutting('1x create:cut_tuff_wall', '#raspberry_flavoured:tuff')
	event.stonecutting('1x create:polished_cut_tuff', '#raspberry_flavoured:tuff')
	event.stonecutting('1x create:polished_cut_tuff_stairs', '#raspberry_flavoured:tuff')
	event.stonecutting('1x create:polished_cut_tuff_wall', '#raspberry_flavoured:tuff')
	event.stonecutting('1x create:cut_tuff_bricks', '#raspberry_flavoured:tuff')
	event.stonecutting('1x create:cut_tuff_brick_stairs', '#raspberry_flavoured:tuff')
	event.stonecutting('1x create:cut_tuff_brick_wall', '#raspberry_flavoured:tuff')
	event.stonecutting('1x create:small_tuff_bricks', '#raspberry_flavoured:tuff')
	event.stonecutting('1x create:small_tuff_brick_stairs', '#raspberry_flavoured:tuff')
	event.stonecutting('1x create:small_tuff_brick_wall', '#raspberry_flavoured:tuff')
	event.stonecutting('1x create:layered_tuff', '#raspberry_flavoured:tuff')
	event.stonecutting('1x create:tuff_pillar', '#raspberry_flavoured:tuff')
	event.stonecutting('2x quark:tuff_slab', '#raspberry_flavoured:tuff')
	event.stonecutting('2x quark:polished_tuff_slab', '#raspberry_flavoured:tuff')
	event.stonecutting('2x quark:tuff_bricks_slab', '#raspberry_flavoured:tuff')
	event.stonecutting('2x architects_palette:tuff_brick_slab', '#raspberry_flavoured:tuff')
	event.stonecutting('2x create:cut_tuff_slab', '#raspberry_flavoured:tuff')
	event.stonecutting('2x create:polished_cut_tuff_slab', '#raspberry_flavoured:tuff')
	event.stonecutting('2x create:cut_tuff_brick_slab', '#raspberry_flavoured:tuff')
	event.stonecutting('2x create:small_tuff_brick_slab', '#raspberry_flavoured:tuff')
	
	// Tuff slabs
	event.stonecutting('1x quark:tuff_slab', '#raspberry_flavoured:tuff_slab')
	event.stonecutting('1x quark:polished_tuff_slab', '#raspberry_flavoured:tuff_slab')
	event.stonecutting('1x quark:tuff_bricks_slab', '#raspberry_flavoured:tuff_slab')
	event.stonecutting('1x architects_palette:tuff_brick_slab', '#raspberry_flavoured:tuff_slab')
	event.stonecutting('1x create:cut_tuff_slab', '#raspberry_flavoured:tuff_slab')
	event.stonecutting('1x create:polished_cut_tuff_slab', '#raspberry_flavoured:tuff_slab')
	event.stonecutting('1x create:cut_tuff_brick_slab', '#raspberry_flavoured:tuff_slab')
	event.stonecutting('1x create:small_tuff_brick_slab', '#raspberry_flavoured:tuff_slab')
	
	// Dripstone
	event.stonecutting('1x minecraft:dripstone_block', '#raspberry_flavoured:dripstone')
	event.stonecutting('1x quark:polished_dripstone', '#raspberry_flavoured:dripstone')
	event.stonecutting('1x quark:dripstone_block_stairs', '#raspberry_flavoured:dripstone')
	event.stonecutting('1x quark:dripstone_block_wall', '#raspberry_flavoured:dripstone')
	event.stonecutting('1x quark:polished_dripstone_stairs', '#raspberry_flavoured:dripstone')
	event.stonecutting('1x quark:dripstone_bricks', '#raspberry_flavoured:dripstone')
	event.stonecutting('1x quark:dripstone_bricks_stairs', '#raspberry_flavoured:dripstone')
	event.stonecutting('1x quark:dripstone_bricks_wall', '#raspberry_flavoured:dripstone')
	event.stonecutting('1x quark:chiseled_dripstone_bricks', '#raspberry_flavoured:dripstone')
	event.stonecutting('1x quark:dripstone_pillar', '#raspberry_flavoured:dripstone')
	event.stonecutting('1x paletteblocks:polished_dripstone_wall', '#raspberry_flavoured:dripstone')
	event.stonecutting('1x architects_palette:dripstone_bricks', '#raspberry_flavoured:dripstone')
	event.stonecutting('1x architects_palette:dripstone_brick_stairs', '#raspberry_flavoured:dripstone')
	event.stonecutting('1x architects_palette:dripstone_brick_wall', '#raspberry_flavoured:dripstone')
	event.stonecutting('1x architects_palette:dripstone_pillar', '#raspberry_flavoured:dripstone')
	event.stonecutting('1x architects_palette:chiseled_dripstone', '#raspberry_flavoured:dripstone')
	event.stonecutting('1x architects_palette:heavy_dripstone_bricks', '#raspberry_flavoured:dripstone')
	event.stonecutting('1x create:cut_dripstone', '#raspberry_flavoured:dripstone')
	event.stonecutting('1x create:cut_dripstone_stairs', '#raspberry_flavoured:dripstone')
	event.stonecutting('1x create:cut_dripstone_wall', '#raspberry_flavoured:dripstone')
	event.stonecutting('1x create:polished_cut_dripstone', '#raspberry_flavoured:dripstone')
	event.stonecutting('1x create:polished_cut_dripstone_stairs', '#raspberry_flavoured:dripstone')
	event.stonecutting('1x create:polished_cut_dripstone_wall', '#raspberry_flavoured:dripstone')
	event.stonecutting('1x create:cut_dripstone_bricks', '#raspberry_flavoured:dripstone')
	event.stonecutting('1x create:cut_dripstone_brick_stairs', '#raspberry_flavoured:dripstone')
	event.stonecutting('1x create:cut_dripstone_brick_wall', '#raspberry_flavoured:dripstone')
	event.stonecutting('1x create:small_dripstone_bricks', '#raspberry_flavoured:dripstone')
	event.stonecutting('1x create:small_dripstone_brick_stairs', '#raspberry_flavoured:dripstone')
	event.stonecutting('1x create:small_dripstone_brick_wall', '#raspberry_flavoured:dripstone')
	event.stonecutting('1x create:layered_dripstone', '#raspberry_flavoured:dripstone')
	event.stonecutting('1x create:dripstone_pillar', '#raspberry_flavoured:dripstone')
	
	// Dripstone slabs
	event.stonecutting('2x quark:dripstone_block_slab', '#raspberry_flavoured:dripstone')
	event.stonecutting('2x quark:polished_dripstone_slab', '#raspberry_flavoured:dripstone')
	event.stonecutting('2x quark:dripstone_bricks_slab', '#raspberry_flavoured:dripstone')
	event.stonecutting('2x architects_palette:dripstone_brick_slab', '#raspberry_flavoured:dripstone')
	event.stonecutting('2x create:cut_dripstone_slab', '#raspberry_flavoured:dripstone')
	event.stonecutting('2x create:polished_cut_dripstone_slab', '#raspberry_flavoured:dripstone')
	event.stonecutting('2x create:cut_dripstone_brick_slab', '#raspberry_flavoured:dripstone')
	event.stonecutting('2x create:small_dripstone_brick_slab', '#raspberry_flavoured:dripstone')
	event.stonecutting('1x quark:dripstone_block_slab', '#raspberry_flavoured:dripstone_slab')
	event.stonecutting('1x quark:polished_dripstone_slab', '#raspberry_flavoured:dripstone_slab')
	event.stonecutting('1x quark:dripstone_bricks_slab', '#raspberry_flavoured:dripstone_slab')
	event.stonecutting('1x architects_palette:dripstone_brick_slab', '#raspberry_flavoured:dripstone_slab')
	event.stonecutting('1x create:cut_dripstone_slab', '#raspberry_flavoured:dripstone_slab')
	event.stonecutting('1x create:polished_cut_dripstone_slab', '#raspberry_flavoured:dripstone_slab')
	event.stonecutting('1x create:cut_dripstone_brick_slab', '#raspberry_flavoured:dripstone_slab')
	event.stonecutting('1x create:small_dripstone_brick_slab', '#raspberry_flavoured:dripstone_slab')
	
	// Quartz
	event.stonecutting('1x minecraft:smooth_quartz', '#raspberry_flavoured:quartz')
	event.stonecutting('1x minecraft:chiseled_quartz_block', '#raspberry_flavoured:quartz')
	event.stonecutting('1x minecraft:quartz_block', '#raspberry_flavoured:quartz')
	event.stonecutting('1x minecraft:quartz_bricks', '#raspberry_flavoured:quartz')
	event.stonecutting('1x minecraft:quartz_pillar', '#raspberry_flavoured:quartz')
	event.stonecutting('1x minecraft:quartz_stairs', '#raspberry_flavoured:quartz')
	event.stonecutting('1x minecraft:smooth_quartz_stairs', '#raspberry_flavoured:quartz')
	event.stonecutting('1x twigs:quartz_column', '#raspberry_flavoured:quartz')
	
	// Quartz slabs
	event.stonecutting('2x minecraft:quartz_slab', '#raspberry_flavoured:quartz')
	event.stonecutting('2x minecraft:smooth_quartz_slab', '#raspberry_flavoured:quartz')
	event.stonecutting('1x minecraft:quartz_slab', '#raspberry_flavoured:quartz_slab')
	event.stonecutting('1x minecraft:smooth_quartz_slab', '#raspberry_flavoured:quartz_slab')
	
	// Basalt
	event.stonecutting('1x minecraft:basalt', '#raspberry_flavoured:basalt')
	event.stonecutting('1x minecraft:polished_basalt', '#raspberry_flavoured:basalt')
	event.stonecutting('1x minecraft:smooth_basalt', '#raspberry_flavoured:basalt')
	event.stonecutting('1x paletteblocks:polished_basalt', '#raspberry_flavoured:basalt')
	event.stonecutting('1x paletteblocks:polished_basalt_stairs', '#raspberry_flavoured:basalt')
	event.stonecutting('1x paletteblocks:polished_basalt_wall', '#raspberry_flavoured:basalt')
	event.stonecutting('1x architects_palette:basalt_tiles', '#raspberry_flavoured:basalt')
	event.stonecutting('1x architects_palette:basalt_tile_stairs', '#raspberry_flavoured:basalt')
	event.stonecutting('1x architects_palette:basalt_tile_wall', '#raspberry_flavoured:basalt')
	event.stonecutting('1x architects_palette:cracked_basalt_tiles', '#raspberry_flavoured:basalt')
	event.stonecutting('1x architects_palette:chiseled_basalt_tiles', '#raspberry_flavoured:basalt')
	event.stonecutting('1x twigs:polished_basalt_bricks', '#raspberry_flavoured:basalt')
	event.stonecutting('1x twigs:smooth_basalt_bricks', '#raspberry_flavoured:basalt')
	event.stonecutting('1x twigs:smooth_basalt_brick_stairs', '#raspberry_flavoured:basalt')
	event.stonecutting('1x twigs:smooth_basalt_brick_wall', '#raspberry_flavoured:basalt')
	event.stonecutting('1x twigs:chiseled_smooth_basalt_bricks', '#raspberry_flavoured:basalt')
	
	// Basalt slabs
	event.stonecutting('2x paletteblocks:polished_basalt_slab', '#raspberry_flavoured:basalt')
	event.stonecutting('2x architects_palette:basalt_tile_slab', '#raspberry_flavoured:basalt')
	event.stonecutting('2x twigs:smooth_basalt_brick_slab', '#raspberry_flavoured:basalt')
	event.stonecutting('1x paletteblocks:polished_basalt_slab', '#raspberry_flavoured:basalt_slab')
	event.stonecutting('1x architects_palette:basalt_tile_slab', '#raspberry_flavoured:basalt_slab')
	event.stonecutting('1x twigs:smooth_basalt_brick_slab', '#raspberry_flavoured:basalt_slab')
	
	// Blackstone
	event.stonecutting('1x minecraft:blackstone_wall', '#raspberry_flavoured:blackstone')
	event.stonecutting('1x minecraft:polished_blackstone_wall', '#raspberry_flavoured:blackstone')
	event.stonecutting('1x minecraft:polished_blackstone_brick_wall', '#raspberry_flavoured:blackstone')
	event.stonecutting('1x minecraft:blackstone', '#raspberry_flavoured:blackstone')
	event.stonecutting('1x minecraft:blackstone_stairs', '#raspberry_flavoured:blackstone')
	event.stonecutting('1x minecraft:polished_blackstone', '#raspberry_flavoured:blackstone')
	event.stonecutting('1x minecraft:polished_blackstone_stairs', '#raspberry_flavoured:blackstone')
	event.stonecutting('1x minecraft:chiseled_polished_blackstone', '#raspberry_flavoured:blackstone')
	event.stonecutting('1x minecraft:polished_blackstone_bricks', '#raspberry_flavoured:blackstone')
	event.stonecutting('1x minecraft:polished_blackstone_brick_stairs', '#raspberry_flavoured:blackstone')
	event.stonecutting('1x minecraft:cracked_polished_blackstone_bricks', '#raspberry_flavoured:blackstone')
	event.stonecutting('1x quark:blackstone_bricks', '#raspberry_flavoured:blackstone')
	event.stonecutting('1x quark:blackstone_bricks_stairs', '#raspberry_flavoured:blackstone')
	event.stonecutting('1x quark:blackstone_bricks_wall', '#raspberry_flavoured:blackstone')
	event.stonecutting('1x supplementaries:blackstone_tile', '#raspberry_flavoured:blackstone')
	event.stonecutting('1x supplementaries:blackstone_tile_stairs', '#raspberry_flavoured:blackstone')
	event.stonecutting('1x twigs:blackstone_column', '#raspberry_flavoured:blackstone')
	event.stonecutting('1x supplementaries:blackstone_tile_wall', '#raspberry_flavoured:blackstone')
	event.stonecutting('1x kubejs:cobbled_blackstone', '#raspberry_flavoured:blackstone')
	event.stonecutting('1x kubejs:cobbled_blackstone_stairs', '#raspberry_flavoured:blackstone')
	event.stonecutting('1x kubejs:cobbled_blackstone_wall', '#raspberry_flavoured:blackstone')
	
	// Blackstone slabs
	event.stonecutting('2x minecraft:blackstone_slab', '#raspberry_flavoured:blackstone')
	event.stonecutting('2x minecraft:polished_blackstone_brick_slab', '#raspberry_flavoured:blackstone')
	event.stonecutting('2x quark:blackstone_bricks_slab', '#raspberry_flavoured:blackstone')
	event.stonecutting('2x supplementaries:blackstone_tile_slab', '#raspberry_flavoured:blackstone')
	event.stonecutting('2x kubejs:cobbled_blackstone_slab', '#raspberry_flavoured:blackstone')
	event.stonecutting('1x minecraft:blackstone_slab', '#raspberry_flavoured:blackstone_slab')
	event.stonecutting('1x minecraft:polished_blackstone_brick_slab', '#raspberry_flavoured:blackstone_slab')
	event.stonecutting('1x quark:blackstone_bricks_slab', '#raspberry_flavoured:blackstone_slab')
	event.stonecutting('1x supplementaries:blackstone_tile_slab', '#raspberry_flavoured:blackstone_slab')
	event.stonecutting('1x kubejs:cobbled_blackstone_slab', '#raspberry_flavoured:blackstone_slab')
	
	// Copper
	event.stonecutting('1x minecraft:copper_block', '#raspberry_flavoured:copper_blocks')
	event.stonecutting('1x minecraft:cut_copper', '#raspberry_flavoured:copper_blocks')
	event.stonecutting('1x minecraft:cut_copper_stairs', '#raspberry_flavoured:copper_blocks')
	event.stonecutting('1x kubejs:copper_pillar', '#raspberry_flavoured:copper_blocks')
	event.stonecutting('1x create:copper_shingles', '#raspberry_flavoured:copper_blocks')
	event.stonecutting('1x create:copper_shingle_stairs', '#raspberry_flavoured:copper_blocks')
	event.stonecutting('1x create:copper_tiles', '#raspberry_flavoured:copper_blocks')
	event.stonecutting('1x create:copper_tile_stairs', '#raspberry_flavoured:copper_blocks')
	event.stonecutting('1x copperandtuffbackport:copper_grate', '#raspberry_flavoured:copper_blocks')
	
	// Exposed copper
	event.stonecutting('1x minecraft:exposed_copper', '#raspberry_flavoured:exposed_copper_blocks')
	event.stonecutting('1x minecraft:exposed_cut_copper', '#raspberry_flavoured:exposed_copper_blocks')
	event.stonecutting('1x minecraft:exposed_cut_copper_stairs', '#raspberry_flavoured:exposed_copper_blocks')
	event.stonecutting('1x kubejs:exposed_copper_pillar', '#raspberry_flavoured:exposed_copper_blocks')
	event.stonecutting('1x create:exposed_copper_shingles', '#raspberry_flavoured:exposed_copper_blocks')
	event.stonecutting('1x create:exposed_copper_shingle_stairs', '#raspberry_flavoured:exposed_copper_blocks')
	event.stonecutting('1x create:exposed_copper_tiles', '#raspberry_flavoured:exposed_copper_blocks')
	event.stonecutting('1x create:exposed_copper_tile_stairs', '#raspberry_flavoured:exposed_copper_blocks')
	event.stonecutting('1x copperandtuffbackport:exposed_copper_grate', '#raspberry_flavoured:exposed_copper_blocks')
	
	// Weathered copper
	event.stonecutting('1x minecraft:weathered_copper', '#raspberry_flavoured:weathered_copper_blocks')
	event.stonecutting('1x minecraft:weathered_cut_copper', '#raspberry_flavoured:weathered_copper_blocks')
	event.stonecutting('1x minecraft:weathered_cut_copper_stairs', '#raspberry_flavoured:weathered_copper_blocks')
	event.stonecutting('1x kubejs:weathered_copper_pillar', '#raspberry_flavoured:weathered_copper_blocks')
	event.stonecutting('1x create:weathered_copper_shingles', '#raspberry_flavoured:weathered_copper_blocks')
	event.stonecutting('1x create:weathered_copper_shingle_stairs', '#raspberry_flavoured:weathered_copper_blocks')
	event.stonecutting('1x create:weathered_copper_tiles', '#raspberry_flavoured:weathered_copper_blocks')
	event.stonecutting('1x create:weathered_copper_tile_stairs', '#raspberry_flavoured:weathered_copper_blocks')
	event.stonecutting('1x copperandtuffbackport:weathered_copper_grate', '#raspberry_flavoured:weathered_copper_blocks')
	
	// Oxidized copper
	event.stonecutting('1x minecraft:oxidized_copper', '#raspberry_flavoured:oxidized_copper_blocks')
	event.stonecutting('1x minecraft:oxidized_cut_copper', '#raspberry_flavoured:oxidized_copper_blocks')
	event.stonecutting('1x minecraft:oxidized_cut_copper_stairs', '#raspberry_flavoured:oxidized_copper_blocks')
	event.stonecutting('1x kubejs:oxidized_copper_pillar', '#raspberry_flavoured:oxidized_copper_blocks')
	event.stonecutting('1x create:oxidized_copper_shingles', '#raspberry_flavoured:oxidized_copper_blocks')
	event.stonecutting('1x create:oxidized_copper_shingle_stairs', '#raspberry_flavoured:oxidized_copper_blocks')
	event.stonecutting('1x create:oxidized_copper_tiles', '#raspberry_flavoured:oxidized_copper_blocks')
	event.stonecutting('1x create:oxidized_copper_tile_stairs', '#raspberry_flavoured:oxidized_copper_blocks')
	event.stonecutting('1x copperandtuffbackport:oxidized_copper_grate', '#raspberry_flavoured:oxidized_copper_blocks')
	
	// Waxed copper
	event.stonecutting('1x minecraft:waxed_copper_block', '#raspberry_flavoured:waxed_copper_blocks')
	event.stonecutting('1x minecraft:waxed_cut_copper', '#raspberry_flavoured:waxed_copper_blocks')
	event.stonecutting('1x minecraft:waxed_cut_copper_stairs', '#raspberry_flavoured:waxed_copper_blocks')
	event.stonecutting('1x kubejs:waxed_copper_pillar', '#raspberry_flavoured:waxed_copper_blocks')
	event.stonecutting('1x create:waxed_copper_shingles', '#raspberry_flavoured:waxed_copper_blocks')
	event.stonecutting('1x create:waxed_copper_shingle_stairs', '#raspberry_flavoured:waxed_copper_blocks')
	event.stonecutting('1x create:waxed_copper_tiles', '#raspberry_flavoured:waxed_copper_blocks')
	event.stonecutting('1x create:waxed_copper_tile_stairs', '#raspberry_flavoured:waxed_copper_blocks')
	event.stonecutting('1x copperandtuffbackport:waxed_copper_grate', '#raspberry_flavoured:waxed_copper_blocks')
	
	// Waxed exposed copper
	event.stonecutting('1x minecraft:waxed_exposed_copper', '#raspberry_flavoured:waxed_exposed_copper_blocks')
	event.stonecutting('1x minecraft:waxed_exposed_cut_copper', '#raspberry_flavoured:waxed_exposed_copper_blocks')
	event.stonecutting('1x minecraft:waxed_exposed_cut_copper_stairs', '#raspberry_flavoured:waxed_exposed_copper_blocks')
	event.stonecutting('1x kubejs:waxed_exposed_copper_pillar', '#raspberry_flavoured:waxed_exposed_copper_blocks')
	event.stonecutting('1x create:waxed_exposed_copper_shingles', '#raspberry_flavoured:waxed_exposed_copper_blocks')
	event.stonecutting('1x create:waxed_exposed_copper_shingle_stairs', '#raspberry_flavoured:waxed_exposed_copper_blocks')
	event.stonecutting('1x create:waxed_exposed_copper_tiles', '#raspberry_flavoured:waxed_exposed_copper_blocks')
	event.stonecutting('1x create:waxed_exposed_copper_tile_stairs', '#raspberry_flavoured:waxed_exposed_copper_blocks')
	event.stonecutting('1x copperandtuffbackport:waxed_exposed_copper_grate', '#raspberry_flavoured:waxed_exposed_copper_blocks')
	
	// Waxed weathered copper
	event.stonecutting('1x minecraft:waxed_weathered_copper', '#raspberry_flavoured:waxed_weathered_copper_blocks')
	event.stonecutting('1x minecraft:waxed_weathered_cut_copper', '#raspberry_flavoured:waxed_weathered_copper_blocks')
	event.stonecutting('1x minecraft:waxed_weathered_cut_copper_stairs', '#raspberry_flavoured:waxed_weathered_copper_blocks')
	event.stonecutting('1x kubejs:waxed_weathered_copper_pillar', '#raspberry_flavoured:waxed_weathered_copper_blocks')
	event.stonecutting('1x create:waxed_weathered_copper_shingles', '#raspberry_flavoured:waxed_weathered_copper_blocks')
	event.stonecutting('1x create:waxed_weathered_copper_shingle_stairs', '#raspberry_flavoured:waxed_weathered_copper_blocks')
	event.stonecutting('1x create:waxed_weathered_copper_tiles', '#raspberry_flavoured:waxed_weathered_copper_blocks')
	event.stonecutting('1x create:waxed_weathered_copper_tile_stairs', '#raspberry_flavoured:waxed_weathered_copper_blocks')
	event.stonecutting('1x copperandtuffbackport:waxed_weathered_copper_grate', '#raspberry_flavoured:waxed_weathered_copper_blocks')
	
	// Waxed oxidized copper
	event.stonecutting('1x minecraft:waxed_oxidized_copper', '#raspberry_flavoured:waxed_oxidized_copper_blocks')
	event.stonecutting('1x minecraft:waxed_oxidized_cut_copper', '#raspberry_flavoured:waxed_oxidized_copper_blocks')
	event.stonecutting('1x minecraft:waxed_oxidized_cut_copper_stairs', '#raspberry_flavoured:waxed_oxidized_copper_blocks')
	event.stonecutting('1x kubejs:waxed_oxidized_copper_pillar', '#raspberry_flavoured:waxed_oxidized_copper_blocks')
	event.stonecutting('1x create:waxed_oxidized_copper_shingles', '#raspberry_flavoured:waxed_oxidized_copper_blocks')
	event.stonecutting('1x create:waxed_oxidized_copper_shingle_stairs', '#raspberry_flavoured:waxed_oxidized_copper_blocks')
	event.stonecutting('1x create:waxed_oxidized_copper_tiles', '#raspberry_flavoured:waxed_oxidized_copper_blocks')
	event.stonecutting('1x create:waxed_oxidized_copper_tile_stairs', '#raspberry_flavoured:waxed_oxidized_copper_blocks')
	event.stonecutting('1x copperandtuffbackport:waxed_oxidized_copper_grate', '#raspberry_flavoured:waxed_oxidized_copper_blocks')
	
	// Copper slabs
	event.stonecutting('2x minecraft:cut_copper_slab', '#raspberry_flavoured:copper_blocks')
	event.stonecutting('2x create:copper_shingle_slab', '#raspberry_flavoured:copper_blocks')
	event.stonecutting('2x create:copper_tile_slab', '#raspberry_flavoured:copper_blocks')
	
	event.stonecutting('1x minecraft:cut_copper_slab', '#raspberry_flavoured:copper_slabs')
	event.stonecutting('1x create:copper_shingle_slab', '#raspberry_flavoured:copper_slabs')
	event.stonecutting('1x create:copper_tile_slab', '#raspberry_flavoured:copper_slabs')
	
	// Exposed copper slabs
	event.stonecutting('2x minecraft:exposed_cut_copper_slab', '#raspberry_flavoured:exposed_copper_blocks')
	event.stonecutting('2x create:exposed_copper_shingle_slab', '#raspberry_flavoured:exposed_copper_blocks')
	event.stonecutting('2x create:exposed_copper_tile_slab', '#raspberry_flavoured:exposed_copper_blocks')
	
	event.stonecutting('1x minecraft:exposed_cut_copper_slab', '#raspberry_flavoured:exposed_copper_slabs')
	event.stonecutting('1x create:exposed_copper_shingle_slab', '#raspberry_flavoured:exposed_copper_slabs')
	event.stonecutting('1x create:exposed_copper_tile_slab', '#raspberry_flavoured:exposed_copper_slabs')
	
	// Weathered copper slabs
	event.stonecutting('2x minecraft:weathered_cut_copper_slab', '#raspberry_flavoured:weathered_copper_blocks')
	event.stonecutting('2x create:weathered_copper_shingle_slab', '#raspberry_flavoured:weathered_copper_blocks')
	event.stonecutting('2x create:weathered_copper_tile_slab', '#raspberry_flavoured:weathered_copper_blocks')
	
	event.stonecutting('1x minecraft:weathered_cut_copper_slab', '#raspberry_flavoured:weathered_copper_slabs')
	event.stonecutting('1x create:weathered_copper_shingle_slab', '#raspberry_flavoured:weathered_copper_slabs')
	event.stonecutting('1x create:weathered_copper_tile_slab', '#raspberry_flavoured:weathered_copper_slabs')
	
	// Oxidized copper slabs
	event.stonecutting('2x minecraft:oxidized_cut_copper_slab', '#raspberry_flavoured:oxidized_copper_blocks')
	event.stonecutting('2x create:oxidized_copper_shingle_slab', '#raspberry_flavoured:oxidized_copper_blocks')
	event.stonecutting('2x create:oxidized_copper_tile_slab', '#raspberry_flavoured:oxidized_copper_blocks')
	
	event.stonecutting('1x minecraft:oxidized_cut_copper_slab', '#raspberry_flavoured:oxidized_copper_slabs')
	event.stonecutting('1x create:oxidized_copper_shingle_slab', '#raspberry_flavoured:oxidized_copper_slabs')
	event.stonecutting('1x create:oxidized_copper_tile_slab', '#raspberry_flavoured:oxidized_copper_slabs')
	
	// Waxed copper slabs
	event.stonecutting('2x minecraft:waxed_cut_copper_slab', '#raspberry_flavoured:waxed_copper_blocks')
	event.stonecutting('2x create:waxed_copper_shingle_slab', '#raspberry_flavoured:waxed_copper_blocks')
	event.stonecutting('2x create:waxed_copper_tile_slab', '#raspberry_flavoured:waxed_copper_blocks')
	
	event.stonecutting('1x minecraft:waxed_cut_copper_slab', '#raspberry_flavoured:waxed_copper_slabs')
	event.stonecutting('1x create:waxed_copper_shingle_slab', '#raspberry_flavoured:waxed_copper_slabs')
	event.stonecutting('1x create:waxed_copper_tile_slab', '#raspberry_flavoured:waxed_copper_slabs')
	
	// Waxed exposed copper slabs
	event.stonecutting('2x minecraft:waxed_exposed_cut_copper_slab', '#raspberry_flavoured:waxed_exposed_copper_blocks')
	event.stonecutting('2x create:waxed_exposed_copper_shingle_slab', '#raspberry_flavoured:waxed_exposed_copper_blocks')
	event.stonecutting('2x create:waxed_exposed_copper_tile_slab', '#raspberry_flavoured:waxed_exposed_copper_blocks')
	
	event.stonecutting('1x minecraft:waxed_exposed_cut_copper_slab', '#raspberry_flavoured:waxed_exposed_copper_slabs')
	event.stonecutting('1x create:waxed_exposed_copper_shingle_slab', '#raspberry_flavoured:waxed_exposed_copper_slabs')
	event.stonecutting('1x create:waxed_exposed_copper_tile_slab', '#raspberry_flavoured:waxed_exposed_copper_slabs')
	
	// Waxed weathered copper slabs
	event.stonecutting('2x minecraft:waxed_weathered_cut_copper_slab', '#raspberry_flavoured:waxed_weathered_copper_blocks')
	event.stonecutting('2x create:waxed_weathered_copper_shingle_slab', '#raspberry_flavoured:waxed_weathered_copper_blocks')
	event.stonecutting('2x create:waxed_weathered_copper_tile_slab', '#raspberry_flavoured:waxed_weathered_copper_blocks')
	
	event.stonecutting('1x minecraft:waxed_weathered_cut_copper_slab', '#raspberry_flavoured:waxed_weathered_copper_slabs')
	event.stonecutting('1x create:waxed_weathered_copper_shingle_slab', '#raspberry_flavoured:waxed_weathered_copper_slabs')
	event.stonecutting('1x create:waxed_weathered_copper_tile_slab', '#raspberry_flavoured:waxed_weathered_copper_slabs')
	
	// Waxed oxidized copper slabs
	event.stonecutting('2x minecraft:waxed_oxidized_cut_copper_slab', '#raspberry_flavoured:waxed_oxidized_copper_blocks')
	event.stonecutting('2x create:waxed_oxidized_copper_shingle_slab', '#raspberry_flavoured:waxed_oxidized_copper_blocks')
	event.stonecutting('2x create:waxed_oxidized_copper_tile_slab', '#raspberry_flavoured:waxed_oxidized_copper_blocks')
	
	event.stonecutting('1x minecraft:waxed_oxidized_cut_copper_slab', '#raspberry_flavoured:waxed_oxidized_copper_slabs')
	event.stonecutting('1x create:waxed_oxidized_copper_shingle_slab', '#raspberry_flavoured:waxed_oxidized_copper_slabs')
	event.stonecutting('1x create:waxed_oxidized_copper_tile_slab', '#raspberry_flavoured:waxed_oxidized_copper_slabs')
	
	// Lapis
	event.stonecutting('1x spelunkery:rough_lazurite_block', '#raspberry_flavoured:lapis_blocks')
	event.stonecutting('1x kubejs:lazurite_stairs', '#raspberry_flavoured:lapis_blocks')
	event.stonecutting('1x kubejs:lazurite_wall', '#raspberry_flavoured:lapis_blocks')
	event.stonecutting('1x minecraft:emerald_block', '#raspberry_flavoured:lapis_blocks')
	event.stonecutting('1x kubejs:lapis_stairs', '#raspberry_flavoured:lapis_blocks')
	event.stonecutting('1x kubejs:lapis_wall', '#raspberry_flavoured:lapis_blocks')
	event.stonecutting('1x caverns_and_chasms:lapis_bricks', '#raspberry_flavoured:lapis_blocks')
	event.stonecutting('1x caverns_and_chasms:lapis_brick_stairs', '#raspberry_flavoured:lapis_blocks')
	event.stonecutting('1x caverns_and_chasms:lapis_brick_wall', '#raspberry_flavoured:lapis_blocks')
	event.stonecutting('1x caverns_and_chasms:lapis_pillar', '#raspberry_flavoured:lapis_blocks')
	
	// Lapis slabs
	event.stonecutting('2x kubejs:lazurite_slab', '#raspberry_flavoured:lapis_blocks')
	event.stonecutting('2x kubejs:lapis_slab', '#raspberry_flavoured:lapis_blocks')
	event.stonecutting('2x caverns_and_chasms:lapis_brick_slab', '#raspberry_flavoured:lapis_blocks')
	
	event.stonecutting('1x kubejs:lazurite_slab', '#raspberry_flavoured:lapis_slabs')
	event.stonecutting('1x kubejs:lapis_slab', '#raspberry_flavoured:lapis_slabs')
	event.stonecutting('1x caverns_and_chasms:lapis_brick_slab', '#raspberry_flavoured:lapis_slabs')
	
	// Gravel
	event.stonecutting('1x minecraft:gravel', '#raspberry_flavoured:gravel_blocks')
	event.stonecutting('1x supplementaries:raked_gravel', '#raspberry_flavoured:gravel_blocks')
	event.stonecutting('1x twigs:gravel_bricks', '#raspberry_flavoured:gravel_blocks')
	event.stonecutting('1x twigs:gravel_brick_stairs', '#raspberry_flavoured:gravel_blocks')
	event.stonecutting('1x twigs:gravel_brick_wall', '#raspberry_flavoured:gravel_blocks')
	
	event.stonecutting('2x twigs:gravel_brick_slab', '#raspberry_flavoured:gravel_blocks')
	
	// Deepslate gravel
	event.stonecutting('1x raspberry:deepslate_gravel', '#raspberry_flavoured:deepslate_gravel_blocks')
	event.stonecutting('1x kubejs:deepslate_gravel_bricks', '#raspberry_flavoured:deepslate_gravel_blocks')
	event.stonecutting('1x kubejs:deepslate_gravel_brick_stairs', '#raspberry_flavoured:deepslate_gravel_blocks')
	event.stonecutting('1x kubejs:deepslate_gravel_brick_wall', '#raspberry_flavoured:deepslate_gravel_blocks')
	
	event.stonecutting('2x kubejs:deepslate_gravel_brick_slab', '#raspberry_flavoured:deepslate_gravel_blocks')
	
	// Blackstone gravel
	event.stonecutting('1x raspberry:blackstone_gravel', '#raspberry_flavoured:blackstone_gravel_blocks')
	event.stonecutting('1x kubejs:blackstone_gravel_bricks', '#raspberry_flavoured:blackstone_gravel_blocks')
	event.stonecutting('1x kubejs:blackstone_gravel_brick_stairs', '#raspberry_flavoured:blackstone_gravel_blocks')
	event.stonecutting('1x kubejs:blackstone_gravel_brick_wall', '#raspberry_flavoured:blackstone_gravel_blocks')
	
	event.stonecutting('2x kubejs:blackstone_gravel_brick_slab', '#raspberry_flavoured:blackstone_gravel_blocks')
})