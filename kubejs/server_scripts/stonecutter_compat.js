// priority: 0

ServerEvents.recipes(event => {
// Remove existing recipes
    const removedRecipes = [
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
	'#raspberry_flavoured:glance',
	'#raspberry_flavoured:glance_slab',
	'#raspberry_flavoured:copper',
	'#raspberry_flavoured:exposed_copper',
	'#raspberry_flavoured:weathered_copper',
	'#raspberry_flavoured:oxidized_copper',
	'#raspberry_flavoured:copper_slab',
	'#raspberry_flavoured:exposed_copper_slab',
	'#raspberry_flavoured:weathered_copper_slab',
	'#raspberry_flavoured:oxidized_copper_slab',
	'#raspberry_flavoured:waxed_copper',
	'#raspberry_flavoured:waxed_exposed_copper',
	'#raspberry_flavoured:waxed_weathered_copper',
	'#raspberry_flavoured:waxed_oxidized_copper',
	'#raspberry_flavoured:waxed_copper_slab',
	'#raspberry_flavoured:waxed_exposed_copper_slab',
	'#raspberry_flavoured:waxed_weathered_copper_slab',
	'#raspberry_flavoured:waxed_oxidized_copper_slab',
	'#raspberry_flavoured:lapis',
	'#raspberry_flavoured:lapis_slab',
	'#raspberry_flavoured:gravel',
	'#raspberry_flavoured:gravel_slab',
	'#raspberry_flavoured:deepslate_gravel',
	'#raspberry_flavoured:deepslate_gravel_slab',
	'#raspberry_flavoured:blackstone_gravel',
	'#raspberry_flavoured:blackstone_gravel_slab',
	'#raspberry_flavoured:sandstone',
	'#raspberry_flavoured:red_sandstone',
	'#raspberry_flavoured:soul_sandstone',
	'#raspberry_flavoured:arid_sandstone',
	'#raspberry_flavoured:red_arid_sandstone',
	'#raspberry_flavoured:gilded_sandstone',
	'#raspberry_flavoured:sandstone_slab',
	'#raspberry_flavoured:red_sandstone_slab',
	'#raspberry_flavoured:soul_sandstone_slab',
	'#raspberry_flavoured:arid_sandstone_slab',
	'#raspberry_flavoured:red_arid_sandstone_slab',
	'#raspberry_flavoured:gilded_sandstone_slab',
	'#raspberry_flavoured:amethyst',
	'#raspberry_flavoured:amethyst_slab'
	]
    
    removedRecipes.forEach(recipe => {
		event.remove({input: recipe, type: 'minecraft:stonecutting'})
		event.remove({output: recipe, type: 'minecraft:stonecutting'})
    })
	
    const blockTags = [
	'#raspberry_flavoured:stone',
	'#raspberry_flavoured:deepslate',
	'#raspberry_flavoured:granite',
	'#raspberry_flavoured:diorite',
	'#raspberry_flavoured:andesite',
	'#raspberry_flavoured:calcite',
	'#raspberry_flavoured:tuff',
	'#raspberry_flavoured:dripstone',
	'#raspberry_flavoured:quartz',
	'#raspberry_flavoured:basalt',
	'#raspberry_flavoured:blackstone',
	'#raspberry_flavoured:glance',
	'#raspberry_flavoured:copper',
	'#raspberry_flavoured:exposed_copper',
	'#raspberry_flavoured:weathered_copper',
	'#raspberry_flavoured:oxidized_copper',
	'#raspberry_flavoured:waxed_copper',
	'#raspberry_flavoured:waxed_exposed_copper',
	'#raspberry_flavoured:waxed_weathered_copper',
	'#raspberry_flavoured:waxed_oxidized_copper',
	'#raspberry_flavoured:lapis',
	'#raspberry_flavoured:gravel',
	'#raspberry_flavoured:deepslate_gravel',
	'#raspberry_flavoured:blackstone_gravel',
	'#raspberry_flavoured:sandstone',
	'#raspberry_flavoured:red_sandstone',
	'#raspberry_flavoured:soul_sandstone',
	'#raspberry_flavoured:arid_sandstone',
	'#raspberry_flavoured:red_arid_sandstone',
	'#raspberry_flavoured:gilded_sandstone',
	'#raspberry_flavoured:amethyst'
	]
    
    blockTags.forEach(tag => {
		Ingredient.of(tag).itemIds.forEach(id => {
			event.stonecutting('1x ' + id, tag)
		})
		Ingredient.of(tag + '_slab').itemIds.forEach(id => {
			event.stonecutting('2x ' + id, tag)
			event.stonecutting('1x ' + id, tag + '_slab')
		})
    })	
	
	// Copycats
	Ingredient.of('#raspberry_flavoured:copycats').itemIds.forEach(id => {
		event.stonecutting('1x ' + id, '#raspberry_flavoured:copycats')
    })
	Ingredient.of('#raspberry_flavoured:half_copycats').itemIds.forEach(id => {
		event.stonecutting('2x ' + id, '#raspberry_flavoured:copycats')
		event.stonecutting('1x ' + id, '#raspberry_flavoured:half_copycats')
    })
	Ingredient.of('#raspberry_flavoured:quarter_copycats').itemIds.forEach(id => {
		event.stonecutting('4x ' + id, '#raspberry_flavoured:copycats')
		event.stonecutting('2x ' + id, '#raspberry_flavoured:half_copycats')
		event.stonecutting('1x ' + id, '#raspberry_flavoured:quarter_copycats')
    })
	
	// Sand -> Sandstone
	Ingredient.of('#raspberry_flavoured:sandstone').itemIds.forEach(id => {
		event.stonecutting('1x ' + id, 'sand')
    })
	Ingredient.of('#raspberry_flavoured:sandstone_slab').itemIds.forEach(id => {
		event.stonecutting('2x ' + id, 'sand')
    })
	Ingredient.of('#raspberry_flavoured:red_sandstone').itemIds.forEach(id => {
		event.stonecutting('1x ' + id, 'red_sand')
    })
	Ingredient.of('#raspberry_flavoured:red_sandstone_slab').itemIds.forEach(id => {
		event.stonecutting('2x ' + id, 'red_sand')
    })
	Ingredient.of('#raspberry_flavoured:soul_sandstone').itemIds.forEach(id => {
		event.stonecutting('1x ' + id, 'soul_sand')
    })
	Ingredient.of('#raspberry_flavoured:soul_sandstone_slab').itemIds.forEach(id => {
		event.stonecutting('2x ' + id, 'soul_sand')
    })
	Ingredient.of('#raspberry_flavoured:arid_sandstone').itemIds.forEach(id => {
		event.stonecutting('1x ' + id, 'atmospheric:arid_sand')
    })
	Ingredient.of('#raspberry_flavoured:arid_sandstone_slab').itemIds.forEach(id => {
		event.stonecutting('2x ' + id, 'atmospheric:arid_sand')
    })
	Ingredient.of('#raspberry_flavoured:red_arid_sandstone').itemIds.forEach(id => {
		event.stonecutting('1x ' + id, 'atmospheric:red_arid_sand')
    })
	Ingredient.of('#raspberry_flavoured:red_arid_sandstone_slab').itemIds.forEach(id => {
		event.stonecutting('2x ' + id, 'atmospheric:red_arid_sand')
    })
})