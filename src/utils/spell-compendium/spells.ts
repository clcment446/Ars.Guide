import type {Category} from "./data/categories.ts";
import type {Addon} from "./data/addons.ts";
import type {Glyph} from "./data/glyphs.ts";
import type {Version} from "./data/versions.ts";

export interface Spell {
  glyphs: Glyph[];
  description: string;
}

export interface Submission {
  name: string;
  category: Category;
  author: string;
  versions: Version[];
  addons: Addon[];
  spells: Spell[];
}

export const submissions: Submission[] = [
  {"name":"Sandstorm","category":"aggressive","author":"Lyrellion","versions":["1.20.1"],"addons":["elemental"],"spells":[{"glyphs":["arc_projectile","wall","sensitive","propagate_homing","split","split","split","conjure_terrain","crush"],"description":"Fires volleys of sand in the direction you face, burying enemies. Requires Focus of Block Shaping."}]},
  {"name":"Bladestorm","category":"aggressive","author":"Lyrellion","versions":["1.20.1"],"addons":[],"spells":[{"glyphs":["self","orbit","aoe","accelerate","split","split","cut","delay","cut","amplify"],"description":"Creates a whirling ring of projectiles that damage anything that comes near."}]},
  {"name":"Reverse Gravity","category":"aggressive","author":"Lyrellion","versions":["1.20.1"],"addons":[],"spells":[{"glyphs":["projectile","launch","amplify","wind_shear","launch","amplify","delay","gravity","amplify"],"description":"Launch an enemy into the air then slam them down for massive damage."}]},
  {"name":"Prismatic Barrage","category":"aggressive","author":"Lyrellion","versions":["1.20.1"],"addons":[],"spells":[{"glyphs":["touch","sensitive","wall","sensitive","phantom_block","duration_down","duration_down","leap","amplify","amplify"],"description":"Fire volleys of blocks at enemies that disappear after a short time. Set spell color to rainbow. Requires Focus of Block Shaping."}]},
  {"name":"Witchbolt","category":"aggressive","author":"Lyrellion","versions":["1.20.1"],"addons":[],"spells":[{"glyphs":["projectile","harm","dispel"],"description":"For gathering Wixie tokens. Damages a witch then attempts to dispel her for the token. Will not work well with Ars Scalaes."}]},
  {"name":"Omnislash","category":"aggressive","author":"Lyrellion","versions":["1.20.1"],"addons":[],"spells":[{"glyphs":["projectile","hex","cut","amplify","delay","cut","amplify","delay","cut","amplify"],"description":"Deals multiple instances of slashing damage to an enemy."}]},
  {"name":"Arcane Missile","category":"aggressive","author":"Lyrellion","versions":["1.20.1","1.19.2"],"addons":[],"spells":[{"glyphs":["projectile","accelerate","hex","harm","delay","harm","delay","harm","delay","harm"],"description":"Basic ranged damage spell. Using delay to cause extra damage once triggering a players immunity-frames."}]},
  {"name":"Decay","category":"aggressive","author":"Lyrellion","versions":["1.20.1"],"addons":[],"spells":[{"glyphs":["projectile","wither","amplify","amplify","amplify","hex","amplify","amplify","amplify","amplify"],"description":"Deals heavy damage and negates healing."}]},
  {"name":"Cloudkill","category":"aggressive","author":"Lyrellion","versions":["1.20.1"],"addons":["elemental"],"spells":[{"glyphs":["projectile","linger","sensitive","aoe","aoe","aoe","propagate_arc","envenom","poison_spores","amplify"],"description":"Create a poisonous cloud that deals damage to entities in the area."}]},
  {"name":"Bury","category":"aggressive","author":"Lyrellion","versions":["1.20.1"],"addons":[],"spells":[{"glyphs":["projectile","intangible","amplify","aoe","aoe","aoe","pierce","pierce","duration_down"],"description":"Fire at the ground beneath an enemy's feet to cause them to fall into the terrain and rapidly be encased in it causing suffocation."}]},
  {"name":"Ice Storm","category":"aggressive","author":"Lyrellion","versions":["1.20.1"],"addons":["elemental"],"spells":[{"glyphs":["projectile","wall","sensitive","propagate_arc","freeze","cold_snap","amplify","cold_snap","amplify","amplify"],"description":"Deal heavy cold damage to a target and surrounding enemies."}]},
  {"name":"Chain Lightning","category":"aggressive","author":"Lyrellion","versions":["1.20.1"],"addons":["elemental"],"spells":[{"glyphs":["projectile","wall","sensitive","propagate_homing","split","split","lightning","heal","dampen"],"description":"Cause multiple volleys of lightning to strike a target and surrounding entities for MASSIVE damage. Pair with a Kindling and/or Shocking thread for best results."}]},
  {"name":"Spike Growth","category":"aggressive","author":"Lyrellion","versions":["1.20.1"],"addons":["elemental","tmg","neg"],"spells":[{"glyphs":["projectile","chain","aoe","aoe","aoe","spike","amplify","amplify","extend_time","extend_time"],"description":"Deal heavy earth damage to all ground based enemies in a fairly wide area."}]},
  {"name":"Zap","category":"aggressive","author":"Lyrellion","versions":["1.20.1"],"addons":["elemental"],"spells":[{"glyphs":["projectile","hex","spark","discharge","delay","spark","discharge","delay","spark","discharge"],"description":"Deals heavy lightning damage to a single target and moderate damage to nearby enemies."}]},
  {"name":"Cutting Winds","category":"aggressive","author":"Lyrellion","versions":["1.20.1"],"addons":["elemental"],"spells":[{"glyphs":["homing_projectile","accelerate","wind_shear","amplify","amplify","delay","wind_shear","amplify","amplify"],"description":"Deal Heavy damage to airborne enemies (like the Ender Dragon)."}]},
  {"name":"Catapult","category":"aggressive","author":"Lyrellion","versions":["1.20.1"],"addons":["elemental"],"spells":[{"glyphs":["touch","sensitive","conjure_terrain","amplify","leap","amplify","amplify","amplify","break","pickup"],"description":"Summon a block of stone to hurl at an enemy."}]},
  {"name":"Collapsing Stars","category":"aggressive","author":"Clement446","versions":["1.20.1"],"addons":["elemental"],"spells":[{"glyphs":["projectile","burst","aoe","aoe","sensitive","propagate_homing","ignite","flare","amplify","heal"],"description":"Creates a swarm of projectiles around the enemy, dealing heavy Fire damage with the \"Hellfire\" effect. ⚠Requires either the Kindling Thread at tier three, or the Fire Focus, depending on the Ars Elemental version ⚠"}]},
  {"name":"Arcane Scar","category":"aggressive","author":"Danicus","versions":["1.20.1"],"addons":[],"spells":[{"glyphs":["projectile","wither","amplify","amplify","extend_time","hex","amplify","amplify","amplify","extend_time"],"description":"Marks the target with wicked magic, consuming its life and making it vulnerable to subsequent spells."}]},
  {"name":"Harm Cannon","category":"aggressive","author":"Lava","versions":["1.20.1","1.19.2"],"addons":["tmg","neg","elemental","trinkets"],"spells":[{"glyphs":["overhead","burst","sensitive","chain","propagate_homing","hex","harm","amplify","heal"],"description":"Tier 3 Thread of kindling required. Does massive damage wherever the caster aims."}]},
  {"name":"Aggressive Wall","category":"aggressive","author":"Danicus","versions":["1.20.1"],"addons":[],"spells":[{"glyphs":["touch","sensitive","phantom_block","aoe","aoe","duration_down","leap","amplify","amplify"],"description":"With the help of Focus of Block Shaping, you summon a wall of mageblocks and throw it hard forward, knocking down those it hits."}]},
  {"name":"GOAT Lightning","category":"aggressive","author":"Xacris","versions":["1.16.5","1.18.2","1.19.2","1.20.1"],"addons":[],"spells":[{"glyphs":["projectile","linger","sensitive","aoe","aoe","aoe","aoe","aoe","aoe","lightning"],"description":"The original flashy lingering lightning spell of doom! Not the highest damage, but certainly sends a message"}]},
  {"name":"Orb of Obliteration","category":"aggressive","author":"Danicus","versions":["1.20.1"],"addons":[],"spells":[{"glyphs":["projectile","burst","sensitive","aoe","aoe","explosion","amplify","aoe","aoe","aoe"],"description":"An orb that at the point of impact will devastate everything around it, throwing whatever survives into the air."}]},
  {"name":"Classical Chained Lightning","category":"aggressive","author":"Clement446","versions":["1.20.1"],"addons":["tmg","neg"],"spells":[{"glyphs":["ray","chain","amplify","burst","aoe","aoe","sensitive","lightning","amplify","amplify"],"description":"Creates explosions of lightning strikes at targets (also affects blocks) Chaining can be removed, but it will loose it's large AOE."}]},
  {"name":"Enhanced Bladestorm","category":"aggressive","author":"Clement446","versions":["1.20.1","1.19.2"],"addons":["trinkets","tmg","neg"],"spells":[{"glyphs":["aura","amplify","aoe","aoe","not_self","chain","burst","air_sword","amplify","amplify"],"description":"Creates an area of effect around you that will attack enemies with powerful air swords."}]},
  {"name":"Kamikaze Bomber","category":"aggressive","author":"72Mansion","versions":["1.20.1"],"addons":[],"spells":[{"glyphs":["orbit","split","split","split","split","explosion","aoe","aoe","aoe","aoe"],"description":"Any entity that touches one of your orbiting projectiles triggers an explosion with a decent AoE. You can remove splits from the orbit to add AoE for the explosion."}]},
  {"name":"Thundering Gambit","category":"aggressive","author":"Clement446","versions":["1.20.1"],"addons":["tmg","neg"],"spells":[{"glyphs":["ray","aoe","sensitive","chain","burst","sensitive","amplify","amplify","reset","blink"],"description":"You create a ball of thunder ahead of you, before teleporting in the middle of the thunderstorm."}]},
  {"name":"Block Missile Launcher","category":"aggressive","author":"Darkfira","versions":["1.16.5","1.18.2","1.20.1","1.19.2"],"addons":[],"spells":[{"glyphs":["touch","sensitive","place_block","leap","amplify","delay","snare","break","amplify","pickup"],"description":"*REQUIRES FOCUS OF BLOCK SHAPING* \nLaunches a single block in the direction you are facing dealing damage based on block hardness. You can replace \"Place Block\" with \"Conjure Mageblock\" and remove everything from delay onwards if you do not wish to use a specific block."}]},
  {"name":"New Fireball","category":"aggressive","author":"Clement446","versions":["1.20.1"],"addons":[],"spells":[{"glyphs":["projectile","burst","sensitive","aoe","aoe","flare","amplify","amplify","reset","explosion"],"description":"A \"new\" version of the Fireball spell.\nIt uses the \"reset\" glyph to include the \"Explode\" glyph without causing much destruction."}]},
  {"name":"Electrifying Water","category":"aggressive","author":"Danicus","versions":["1.20.1"],"addons":[],"spells":[{"glyphs":["projectile","burst","sensitive","conjure_water","delay","evaporate","reset","lightning","amplify","amplify"],"description":"With this spell you will briefly envelop the target in water, exposing it to the power of lightning."}]},
  {"name":"Embrace of the Depths","category":"aggressive","author":"Danicus","versions":["1.20.1"],"addons":["elemental"],"spells":[{"glyphs":["projectile","burst","sensitive","conjure_water","aoe","reset","watery_grave","extend_time","extend_time","extend_time"],"description":"The target of this spell is submerged in the water, suffocating until succumbing."}]},
  {"name":"Wither and Bloom","category":"aggressive","author":"MuteTiefling","versions":["1.19.2"],"addons":["tmg","elemental"],"spells":[{"glyphs":["chaining","pierce","pierce","aoe","aoe","harm","envenom","envenom","poison_spores","amplify 3"],"description":"Used on an Enchanter's Sword with a Focus of Earth and Geomancer's Armor with Spores I applied."}]},
  {"name":"Hellish Ray","category":"aggressive","author":"Clement446","versions":["1.20.1"],"addons":["trinkets","elemental"],"spells":[{"glyphs":["self","wall","aoe","aoe","sensitive","propagate_self","propagate missile","ignite","flare","heal"],"description":"Creates a beam of missiles going from yourself, dealing great AOE damage.\nIn certain Ars Elemental Versions, Ignite can be removed if you have the Kindling Thread at level three.\nPropagate Missile can be replaced with Propagate Projectile to have better range."}]},
  {"name":"Eldritch Beam","category":"aggressive","author":"Clement446","versions":["1.20.1"],"addons":["trinkets","elemental"],"spells":[{"glyphs":["self","burst","aoe","aoe","sensitive","propagate_self","propagate missile","harm","amplify","heal"],"description":"Creates a Beam of, harmful traveling from the caster's eyes to the position they are looking at.\nUsing an Ignition Thread at level three will enable it to skip I-frames."}]},
  {"name":"Minor Icicle","category":"aggressive","author":"Clement446","versions":["1.20.1","1.19.2"],"addons":[],"spells":[{"glyphs":["touch","sensitive","conjure_water","freeze","amplify","amplify","launch","leap","amplify","amplify"],"description":"Launch a block of ice at the target.\nRequires the Blockshaper Focus."}]},
  {"name":"Wrath of God","category":"aggressive","author":"Eggovolt","versions":["1.18.2"],"addons":["elemental"],"spells":[{"glyphs":["projectile","pierce","linger","sensitive","aoe","propagate_arc","split","explosion","aoe","lightning"],"description":"The People's Nuke; a low-addon spell that creates a centralized explosion from which many, many projectiles rain down over the course of about 6 seconds. All of these spawn lightning. Very flashy and good if you don't mind terrain destruction."}]},
  {"name":"Eviscerate","category":"aggressive","author":"SirDragonBlaster","versions":["1.20.1"],"addons":["elemental"],"spells":[{"glyphs":["touch","blink","ignite","wind_shear","heal","wind_shear","heal","wind_shear","heal","wind_shear"],"description":"Use with a warp scroll bound to around y 300,000 in your offhand. Can one tap just about anything, but it is kinda pointless for PvE, as you don't get drops. Works best if you first use hex. Requires thread of kindling 3 or a fire focus."}]},
  {"name":"Wall of Stone","category":"defensive","author":"Lyrellion","versions":["1.20.1"],"addons":["elemental"],"spells":[{"glyphs":["touch","sensitive","wall","sensitive","conjure_terrain","amplify"],"description":"Create a permanent wall of stone to seal off a passage or build a wall."}]},
  {"name":"Black Hole","category":"defensive","author":"Lyrellion","versions":["1.19.2","1.20.1"],"addons":["elemental"],"spells":[{"glyphs":["touch","sensitive","gravity","sensitive","aoe","aoe","aoe","aoe","aoe","aoe"],"description":"Create a singularity that pulls entities towards it in a large area. Set color to (1, 1, 1) to make it nearly invisible. Requires Earth Focus."}]},
  {"name":"Ice Field","category":"defensive","author":"Lyrellion","versions":["1.20.1"],"addons":[],"spells":[{"glyphs":["projectile","conjure_water","aoe","aoe","freeze","spike","snare","extend_time","extend_time"],"description":"Create an area of damaging spikes that snares enemies for a moderate duration."}]},
  {"name":"Tiny Hut","category":"defensive","author":"Xacris","versions":["1.16.5","1.18.2","1.19.2","1.20.1"],"addons":[],"spells":[{"glyphs":["underfoot","phantom_block","aoe","aoe","pierce","pierce","pierce"],"description":"Conjures a box of Mageblocks around you. Good spell to cast in a panic!"}]},
  {"name":"Shadow Clones","category":"defensive","author":"Lyrellion","versions":["1.20.1"],"addons":["elemental"],"spells":[{"glyphs":["underfoot","wall","sensitive","propagate_arc","split","split","summon_decoy","extend_time","extend_time","extend_time"],"description":"Summon a crowd of decoys to distract enemies."}]},
  {"name":"Ring of Eviceration","category":"defensive","author":"ArborSolis","versions":["1.20.1"],"addons":[],"spells":[{"glyphs":["orbit","accelerate","accelerate","accelerate","accelerate","accelerate","accelerate","accelerate","blink"],"description":"This spell creates a fast spinning ring of blink spells, that combined with an off-handed warp scroll can teleport any would be attackers to the set location. An easy way to dispatch of enemies with limited effort. Note: Warp scroll should be set to a place far away. Examples: In the void, a pit filled with hostile mobs, high up in the sky, etc.."}]},
  {"name":"Human Cannonball","category":"defensive","author":"Darkfira","versions":["1.16.5","1.18.2","1.19.2","1.20.1"],"addons":[],"spells":[{"glyphs":["touch","launch","amplify","amplify","amplify","delay","gust","amplify","amplify","explosion"],"description":"Send Melee attackers flying in a fun way!"}]},
  {"name":"Wards of Distance","category":"defensive","author":"Danicus","versions":["1.20.1"],"addons":[],"spells":[{"glyphs":["self","orbit","split","split","split","gust","amplify","delay","snare","extend_time"],"description":"You conjure a cohort of magical orbs that will repel and contain those who dare approach you."}]},
  {"name":"Explosive Reciprocity","category":"defensive","author":"Danicus","versions":["1.20.1"],"addons":[],"spells":[{"glyphs":["self","explosion","dampen","amplify","amplify","aoe","aoe","aoe","aoe","aoe"],"description":"A spell meant to be inscribed on reactive armor, it releases an explosion around its wearer upon taking damage, pushing and lacerating enemies around it, without devastating the terrain."}]},
  {"name":"Vengeful Curse","category":"defensive","author":"Danicus","versions":["1.20.1"],"addons":["additions","elemental"],"spells":[{"glyphs":["retaliate","life_link","hex","amplify","amplify","wither","amplify","amplify"],"description":"Vengeful spell to inscribe in reactive armor, curses the attacker to wither, weakening against magic and sharing the wearer's pain."}]},
  {"name":"Restoration of One","category":"defensive","author":"Danicus","versions":["1.20.1"],"addons":[],"spells":[{"glyphs":["self","dispel","heal","amplify"],"description":"Restorative spell, intended to be inscribed in reactive armor, restores the wearer's condition, stitching wounds and purging effects."}]},
  {"name":"Shield","category":"defensive","author":"Lyrellion","versions":["1.20.1"],"addons":[],"spells":[{"glyphs":["underfoot","phantom_block","aoe","aoe","pierce","pierce","pierce","duration_down","duration_down"],"description":"A modified version of Xacris’ Tiny Hut, designed for use in combat. Creates a protective dome of mageblocks around you for a moment to block an incoming projectile or attack before dissipating.."}]},
  {"name":"Fire Rune","category":"defensive","author":"Lyrellion","versions":["1.20.1"],"addons":[],"spells":[{"glyphs":["touch","rune","hex","ignite","flare"],"description":"Place a defensive rune on a wall or floor that will trigger when an enemy touches it. Use directly in combat as a damage dealing spell or use Runic Chalk to make permanent and place a source jar nearby to make an effective base defense."}]},
  {"name":"Wall of Force","category":"defensive","author":"Lyrellion","versions":["1.20.1"],"addons":[],"spells":[{"glyphs":["projectile","accelerate","wall","sensitive","phantom_block","pierce","amplify"],"description":"Create a permanent wall of mageblocks at the point of impact."}]},
  {"name":"Schroedinger's Mage Bubble","category":"defensive","author":"Clement446","versions":["1.20.1"],"addons":[],"spells":[{"glyphs":["self","burst","dampen","sensitive","phantom_block","reset","blink","dampen","dampen","invisibility"],"description":"Use Case : PVP\nType : Mixup\nShould be used as a mixup to the traditional Mageblock Sphere.\nAre you in the mage bubble or not? That is the question that your enemy will ask himself."}]},
  {"name":"Animate Objects","category":"support","author":"Lyrellion","versions":["1.20.1"],"addons":["tmg","neg"],"spells":[{"glyphs":["projectile","chain","animate_block","extend_time"],"description":"Turn a chunk of terrain into an army of followers."}]},
  {"name":"Blocked Host","category":"support","author":"Danicus","versions":["1.20.1"],"addons":[],"spells":[{"glyphs":["touch","sensitive","phantom_block","aoe","aoe","animate_block"],"description":"With Focus of Block Shaping, summon a host of loyal blocks, an environment-friendly spell."}]},
  {"name":"Telekinesis","category":"support","author":"Lyrellion","versions":["1.20.1"],"addons":["tmg","neg"],"spells":[{"glyphs":["projectile","accelerate","filter_living","exchange","blink"],"description":"Pulls a distant creature to you."}]},
  {"name":"Unnoticed Escape","category":"support","author":"Danicus","versions":["1.20.1"],"addons":[],"spells":[{"glyphs":["self","summon_decoy","extend_time","blink","amplify","amplify","invisibility","extend_time"],"description":"You teleport forward, becoming invisible and leaving behind a decoy to suffer the consequences."}]},
  {"name":"Fire Jump","category":"support","author":"Clement446","versions":["1.20.1","1.19.2","1.18.2"],"addons":["elemental"],"spells":[{"glyphs":["projectile","burst","sensitive","life_link","propagate homing","ignite","flare","heal","reset","blink"],"description":"This spell is based on the \"collapsing stars\" base.\nTweak and adjust the augments as wished.\nThe **FIRE FOCUS** or the **KINDLING THREAD** are required for this spell to work.\nWhen using the kindling thread, you can remove the \"Ignite\" glyph."}]},
  {"name":"Archers","category":"support","author":"Lyrellion","versions":["1.20.1"],"addons":[],"spells":[{"glyphs":["projectile","summon_undead","split","split","split","split","pierce","amplify","amplify","amplify"],"description":"Summon a squad of skeletons armed with enchanted bows to assist you in combat. Alternatively, replace the Pierce with an additional Amplify to get a squad of melee skeletons instead."}]},
  {"name":"Instant Army","category":"support","author":"ence","versions":["1.19.2"],"addons":[],"spells":[{"glyphs":["touch","wall","sensitive","aoe","accelerate","accelerate","extend_time","extend_time","phantom_block","animate_block"],"description":"Call forth a horde of soldiers to fight for you, or to just make getting to you challenging."}]},
  {"name":"Terrible Web","category":"support","author":"ence","versions":["1.19.2"],"addons":[],"spells":[{"glyphs":["projectile","burst","sensitive","aoe","aoe","aoe","rune","snare","gravity","extend_time"],"description":"Any hostile caught in the center of the web will not be moving for a while. Do mind the cleanup, though."}]},
  {"name":"Fall Assisted Runic Thermal Smelter","category":"automation","author":"Zieg777","versions":["1.16.5","1.18.2","1.19.2","1.20.1"],"addons":[],"spells":[{"glyphs":["rune","smelt","pierce","pierce","pierce","pierce","pierce","pierce","pierce"],"description":"Dropping items into the Smelt rune will smelt half a stack at a time. Stack two runes together to smelt a full stack as you toss them in. Works best when made permanent with chalk"}]},
  {"name":"Return to Sender","category":"automation","author":"Xacris","versions":["1.19.2","1.20.1"],"addons":[],"spells":[{"glyphs":["touch","rune","sensitive","pickup"],"description":"This spell will place a rune that will teleport any items or XP orbs near it to the player that cast it when it is triggered. Can be used to remotely send things to you across vast distances"}]},
  {"name":"Berry Picker","category":"automation","author":"Xacris","versions":["1.16.5","1.18.2","1.19.2","1.20.1"],"addons":["tmg"],"spells":[{"glyphs":["touch","chain","aoe","grow","grow","interact","grow","grow","interact","pickup"],"description":"This spell is intended to be used by a turret to grow and harvest a field of up to 32 Source Berry plants at rapid speed"}]},
  {"name":"The Frozen Harvest","category":"automation","author":"Danicus","versions":["1.20.1"],"addons":["tmg"],"spells":[{"glyphs":["touch","chaining","aoe","aoe","conjure_water","freeze","aoe","break","extract","pickup"],"description":"Conjure water in front of you or a turret to quickly freeze it for a harvest of blue ice."}]},
  {"name":"Conjure Glass","category":"automation","author":"WayofTime","versions":["1.20.1","1.19.2"],"addons":["elemental"],"spells":[{"glyphs":["touch","conjure_terrain","aoe","aoe","crush","break","smelt","pickup"],"description":"Put this spell on a manipulation turret or use a shapers focus to conjure a 3x3 area of sand that is smelted and picked up.\nPut a chest or a storage lectern next to the turret to store the glass."}]},
  {"name":"Autoharvest","category":"automation","author":"Multiple","versions":["1.20.1"],"addons":[],"spells":[{"glyphs":["projectile","linger","sensitive","aoe","aoe","aoe","grow","grow","harvest","pickup"],"description":"Used to grow and harvest entire fields of crops in a single spell.  Target a slab or fence post in the center of the area you wish to harvest.  May be placed on a turret for easy automated harvesting and collection. "}]},
  {"name":"Flight","category":"exploration","author":"Lyrellion","versions":["1.20.1"],"addons":[],"spells":[{"glyphs":["self","launch","amplify","glide","extend_time","extend_time","extend_time","extend_time"],"description":"Launch yourself into the air and gain flight for an extended duration.<br/>Replace Self with Touch to grant flight to another player."}]},
  {"name":"Ethereal Path","category":"exploration","author":"Danicus","versions":["1.20.1"],"addons":[],"spells":[{"glyphs":["projectile","pierce","pierce","intangible","aoe","aoe","pierce","pierce","extend_time","extend_time"],"description":"A spell that will allow you to easily pass through walls and floors."}]},
  {"name":"Rainbow Road","category":"exploration","author":"Xacris","versions":["1.20.1"],"addons":["neg"],"spells":[{"glyphs":["echoing_projectile","extend_time","extend_time","extend_time","decelerate","delay","propagate_underfoot","phantom_block","aoe","aoe"],"description":"This spell will conjure a series of floating platforms that form a solid walkway as it flies! Set the spell color to rainbow for even more fun"}]},
  {"name":"Instant Transmission","category":"exploration","author":"Xacris","versions":["1.16.5","1.18.2","1.19.2","1.20.1"],"addons":["tmg","neg"],"spells":[{"glyphs":["ray","aoe","aoe","aoe","aoe","aoe","aoe","aoe","blink"],"description":"Instantly teleport up to where you are looking, up to 128 blocks away"}]},
  {"name":"Bridge Chasm","category":"exploration","author":"Lyrellion","versions":["1.20.1"],"addons":["tmg","neg","elemental"],"spells":[{"glyphs":["projectile","reverse_direction","conjure terrain","pierce","pierce","pierce","pierce","pierce","pierce","pierce"],"description":"Fire at the opposite wall of a chasm to create a narrow bridge you can cross."}]},
  {"name":"Rocket Launch","category":"fun","author":"Arin","versions":["1.20.1"],"addons":[],"spells":[{"glyphs":["self","launch","launch","launch","launch","launch","launch","bounce","extend_time","extend_time"],"description":"Ever wanted to go to space and live the fall back down? Well now you can, for the simple price of your entire mana bar! (Mana cost exaggerated)<br/><br/><b>Note:</b> If you want to launch someone else out of the stratosphere use the touch form or projectile form<br/><b>Note:</b> This also works on blocks would not recommend shooting your storage system"}]},
  {"name":"Firework Display","category":"fun","author":"Xacris","versions":["1.19.2","1.20.1"],"addons":[],"spells":[{"glyphs":["projectile","wall","aoe","sensitive","firework","amplify","extend_time","extend_time","extend_time","extend_time"],"description":"Conjures a wall that will shoot fireworks into the sky! They fly higher than vanilla fireworks can, makes for an impressive display"}]},
  {"name":"Containment Swap","category":"fun","author":"Xacris","versions":["1.19.2","1.20.1"],"addons":[],"spells":[{"glyphs":["projectile","dispel","rune","exchange"],"description":"This spell, when cast at the top side of a containment jar, will release the contained creature and then you will swap places with it. Best used when cast through an Enchanter's Eye for remote casting. Leave in style by releasing a Warden!"}]},
  {"name":"Rain of Judgement","category":"fun","author":"Marcielle","versions":["1.20.1"],"addons":["tmg","neg"],"spells":[{"glyphs":["projectile","burst","sensitive","chain","propagate_arc","explosion","aoe"],"description":"Continuous rain of explosions from the sky."}]},
  {"name":"Renovate","category":"utility","author":"Lyrellion","versions":["1.20.1"],"addons":[],"spells":[{"glyphs":["projectile","exchange","aoe","aoe","pickup"],"description":"Replace a plane of blocks with blocks from your hotbar. Useful for replacing sections of walls/floors with a specific block. Can add additional AoEs for larger sections."}]},
  {"name":"Mage Hand","category":"utility","author":"Xacris","versions":["1.19.2","1.20.1"],"addons":[],"spells":[{"glyphs":["projectile","sensitive","dispel","interact","redstone_signal","sensitive","duration_down","pickup","aoe"],"description":"A multi-purpose spell that can dispel, interact with buttons/levers and whatever else you need, activate redstone, and pickup items"}]},
  {"name":"Excavate","category":"utility","author":"Lyrellion","versions":["1.20.1"],"addons":[],"spells":[{"glyphs":["projectile","burst","sensitive","aoe","aoe","aoe","aoe","break","extract","pickup"],"description":"Mining spell that clears a massive area and places the drops into inventory. Recommended to carry a Jar of Voiding set to convert basic blocks."}]},
  {"name":"Nightstalker","category":"utility","author":"Lyrellion","versions":["1.19.2","1.20.1"],"addons":[],"spells":[{"glyphs":["self","light","amplify","extend_time","extend_time","extend_time","extend_time","extend_time","extend_time","extend_time"],"description":"Grant long duration night vision to yourself. Replace Self with Touch to grant to another player."}]},
  {"name":"Floating Disc","category":"utility","author":"Lyrellion","versions":["1.20.1","1.19.2"],"addons":[],"spells":[{"glyphs":["underfoot","phantom_block","aoe","aoe","extend_time"],"description":"Cast while in the air to create a temporary floating platform."}]},
  {"name":"Deluge","category":"utility","author":"Lyrellion","versions":["1.20.1"],"addons":[],"spells":[{"glyphs":["projectile","burst","sensitive","conjure_water"],"description":"Create Water in a large area. Add AOE glyphs after the Sensitive glyph to increase the volume."}]},
  {"name":"Runic Return","category":"utility","author":"Zieg777","versions":["1.16.5","1.18.2","1.19.2","1.20.1"],"addons":[],"spells":[{"glyphs":["rune","exchange"],"description":"A simple tier 2 spell that acts as an ender pearl stasis chamber. If any mob or item triggers the rune, it will warp the player who placed it back to that spot"}]},
  {"name":"Dome of Breathing","category":"utility","author":"Danicus","versions":["1.20.1"],"addons":[],"spells":[{"glyphs":["self","burst","sensitive","aoe","aoe","aoe","aoe","evaporate"],"description":"It evaporates all the liquid around, allowing you to breathe and move."}]},
  {"name":"Illuminated Prospecting","category":"utility","author":"Danicus","versions":["1.20.1"],"addons":[],"spells":[{"glyphs":["projectile","pierce","pierce","light","break","aoe","aoe","pierce","pierce","pickup"],"description":"Launch a projectile that will voraciously excavate the earth in its path while illuminating it."}]},
  {"name":"Charge","category":"utility","author":"Lyrellion","versions":["1.20.1"],"addons":[],"spells":[{"glyphs":["projectile","lightning","dampen","dampen"],"description":"Can be used to turn a creeper into a charged creeper without doing significant damage to them."}]},
  {"name":"Tunnel","category":"utility","author":"Darkfira","versions":["1.16.5","1.18.2","1.19.2","1.20.1"],"addons":[],"spells":[{"glyphs":["projectile","pierce","pierce","pierce","break","amplify","aoe","aoe","pierce","pickup"],"description":"Tier 2 Mining spell. Creates a 3x3 Tunnel and picks it up. Replace pierce with Extract if required. Perfect for speeding along your diamond mining especially paired with a Jar of Voiding!"}]},
  {"name":"Arborist&apos;s Fiend","category":"utility","author":"WaveClaw","versions":["1.20.1","1.19.2"],"addons":[],"spells":[{"glyphs":["touch","place_block","grow","grow","grow","fell","aoe","pickup"],"description":"While holding a sapling in your first inventory slot, cast to quickly grown and fell a forest of trees like the magical lumberjack you were always meant to be."}]},
  {"name":"Fisher of Friends","category":"utility","author":"WaveClaw","versions":["1.19.2","1.20.1"],"addons":[],"spells":[{"glyphs":["projectile","accelerate","exchange","blink"],"description":"Pull a creature to you, even from deep in the void.  Size is not a limitation, make new friends today."}]},
  {"name":"Isolating Bubble","category":"utility","author":"Clement446","versions":["1.20.1","1.19.2"],"addons":[],"spells":[{"glyphs":["projectile","burst","aoe","aoe","aoe","sensitive","dampen","phantom_block","amplify"],"description":"Creates a bubble of mageblocks around the enemy.\nConjure mageblock can be replaced with place bock or conjure terrain.\nIn forests or places with a lot of grass, using the Conjure Water glyph can be worth it."}]},
  {"name":"Simple Mining","category":"utility","author":"Pan Et Rosa","versions":["1.20.1"],"addons":[],"spells":[{"glyphs":["projectile","break","aoe","aoe","aoe","aoe","pierce","pierce","pierce","extract","pickup"],"description":"A simple, inexpensive and highly effective spell for mining. Best used on a wand, allowing for another glyph slot which can be used to accelerate the projectile or expand the mined area. Testing in the Nether with an extended Scrying ritual produced over 2 stacks of ancient debris in 15 minutes, as well as several stacks of quartz ore and modded ores. Use with jar of voiding to replenish mana by deleting bulk blocks."}]},
  {"name":"Noisy Detailing","category":"utility","author":"Xacris","versions":["1.20.1","1.19.2"],"addons":[],"spells":[{"glyphs":["projectile","exchange","randomize","aoe","pickup"],"description":"This deceptively simple spell will replace a 2x2 of blocks with a random selection from your hotbar, to add variation. To get the most out of this spell, get used to aiming between blocks rather than at blocks"}]},
]
