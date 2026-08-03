/* ---- SHARED ARTWORK DATA ----
   Used by both index.html (hero stats + featured works) and
   shop-fine-art.html (the full shop grid).

   To add a new painting: add one line below. Everything else
   (stats on the homepage, filters, collections) updates itself.

   Each piece expects an image at: art/<slug>.webp
   Remember: the filename must match the slug EXACTLY (same spelling,
   spacing, and lowercase) or the image won't load.
*/

const DEFAULT_MEDIUM = "Acrylic on Canvas";

const ARTWORK = [
  { slug: "the glorious robin",     title: "The Glorious Robin",     size: "12 × 12", price: 200, status: "available", collections: ["feathered_friends"] },
  { slug: "signs of spring",        title: "Signs of Spring",        size: "12 × 16", price: 250, status: "available", collections: [] },
  { slug: "windows down",           title: "Windows Down",           size: "9 × 12",  price: 100, status: "available", collections: [] },
  { slug: "a view from cobh",       title: "A View From Cobh",       size: "12 × 16", price: 140, status: "available", collections: [] },
  { slug: "spring poppies",         title: "Spring Poppies",         size: "12 × 16", price: 140, status: "available", collections: [] },
  { slug: "spring blooms",          title: "Spring Blooms",          size: "12 × 16", price: 140, status: "available", collections: [] },
  { slug: "herring loss",           title: "Herring Loss",           size: "12 × 12", price: 100, status: "available", collections: [] },
  { slug: "triptych 1",             title: "Triptych 1",             size: "12 × 12", price: 100, status: "available", collections: ["triptych"] },
  { slug: "triptych 2",             title: "Triptych 2",             size: "12 × 12", price: 100, status: "available", collections: ["triptych"] },
  { slug: "triptych 3",             title: "Triptych 3",             size: "12 × 12", price: 100, status: "available", collections: ["triptych"] },
  { slug: "lazy boiiiii",           title: "Lazy Boiiiii",           size: "12 × 16", price: 140, status: "available", collections: ["cats"] },
  { slug: "quail",                  title: "Quail",                  size: "12 × 12", price: 100, status: "available", collections: ["feathered_friends"] },
  { slug: "monday",                 title: "Monday",                 size: "10 × 12", price: 140, status: "available", collections: ["cats"] },
  { slug: "zebra finch pair",       title: "Zebra Finch Pair",       size: "10 × 12", price: 100, status: "available", collections: ["feathered_friends"] },
  { slug: "pond life",              title: "Pond Life",              size: "16 × 20", price: 200, status: "available", collections: [] },
  { slug: "a wee bonbon",           title: "A Wee Bonbon",           size: "10 × 10", price: 80,  status: "available", collections: [] },
  { slug: "at rest",                title: "At Rest",                size: "11 × 14", price: 100, status: "available", collections: ["feathered_friends"] },
  { slug: "birthday bouquet",       title: "Birthday Bouquet",       size: "12 × 12", price: 100, status: "available", collections: [] },
  { slug: "dick and janes",         title: "Dick and Jane's?",       size: "12 × 16", price: 140, status: "available", collections: [] },
  { slug: "flight map",             title: "Flight Map",             size: "11 × 14", price: 100, status: "available", collections: ["feathered_friends"] },
  { slug: "hiding in the dogwood",  title: "Hiding in the Dogwood",  size: "12 × 12", price: 100, status: "available", collections: [] },
  { slug: "life in the shadows",    title: "Life in the Shadows",    size: "12 × 12", price: 100, status: "available", collections: [] },
  { slug: "white cat",              title: "White Cat",              size: "12 × 16", price: 120, status: "available", collections: ["cats"] },
  { slug: "maud",                   title: "Maud",                   size: "12 × 12", price: 100, status: "available", collections: [] },
  { slug: "beatrice",               title: "Beatrice",               size: "10 x 10", price: 80,  status: "available", collections: [] },
  { slug: "on the fence",           title: "On the Fence",           size: "11 x 14", price: 75,  status: "available", collections: ["feathered_friends"] },
  { slug: "dinner date",            title: "Dinner Date",            size: "11 x 14", price: 75,  status: "available", collections: [] },
  { slug: "harbour days",           title: "Harbour Days",           size: "24 x 24", price: 300, status: "available", collections: [] },
  { slug: "tuesday",                title: "Tuesday",                size: "9 x 11",  price: 120, status: "available", collections: ["cats"] },
  { slug: "wilbur",                 title: "Wilbur",                 size: "24 x 24", price: 200, status: "available", collections: [] },
  { slug: "not a narrow sparrow",   title: "Not a Narrow Sparrow",   size: "8 x 8",   price: 60,  status: "available", collections: ["feathered_friends"] },
  { slug: "orange grove",           title: "Orange Grove",           size: "12 x 12", price: 100, status: "available", collections: [] },
  { slug: "rocky",                  title: "Rocky",                  size: "5 x 5",   price: 60,  status: "available", collections: ["feathered_friends"] },
  { slug: "beets",                  title: "Beets",                  size: "11 x 14", price: 140, status: "available", collections: [] },
  { slug: "fall harvest",           title: "Fall Harvest",           size: "11 x 14", price: 140, status: "available", collections: [] },
  { slug: "napoleon and snowball",  title: "Napoleon and Snowball",  size: "24 x 24", price: 300, status: "available", collections: [] },
  { slug: "along the shore",        title: "Along the Shore",        size: "11 x 14", price: 140, status: "available", collections: [] },
  { slug: "lobster tank",           title: "Lobster Tank",           size: "12 x 12", price: 100, status: "available", collections: [] },
  { slug: "fresh lobster",          title: "Fresh Lobster",          size: "12 x 24", price: 200, status: "available", collections: [] },
  { slug: "mesmerized",             title: "Mesmerized",             size: "5 x 7",   price: 50,  status: "sold",      collections: ["cats"] },
  { slug: "purr purr purr",         title: "Purr Purr Purr",         size: "5 x 7",   price: 50,  status: "sold",      collections: ["cats"] },
  { slug: "carolina wren",          title: "Carolina Wren",          size: "5 x 7",   price: 50,  status: "available",      collections: ["feathered_friends"] },
  { slug: "space kitty",            title: "Space Kitty",            size: "10 x 10", price: 80,  status: "sold",      collections: ["cats"] },
  { slug: "red tufted titmouse",    title: "Red Tufted Titmouse",    size: "5 x 7",   price: 50,  status: "available",      collections: ["feathered_friends"] }
];


/* Helper: get the display medium for a piece, falling back to the default. */
function getMedium(art) {
  return (art && art.medium) ? art.medium : DEFAULT_MEDIUM;
}

/* Helper: all slugs belonging to a collection ("all" = everything). */
function slugsInCollection(collection) {
  if (collection === "all") return ARTWORK.map(a => a.slug);
  return ARTWORK.filter(a => a.collections.includes(collection)).map(a => a.slug);
}

/* Helper: number of distinct, non-empty collections currently in use. */
function countCollections() {
  const set = new Set();
  ARTWORK.forEach(a => a.collections.forEach(c => set.add(c)));
  return set.size;
}