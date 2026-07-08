-- S.P. Enterprises — seed data matching the current static catalogue
-- Run after schema.sql. Safe to re-run (upserts by slug).

INSERT INTO categories (id, title, slug, variants_label, features, image_url, image_alt, sort_order, is_published)
VALUES
  ('11111111-1111-1111-1111-111111111101', 'Hang Tags', 'hang-tags', '8 Variants', 'Daily Use · Multi Piece · Embossed · Foiling · PVC', 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1200&q=80', 'Craftsperson finishing hang tags on production equipment', 1, TRUE),
  ('11111111-1111-1111-1111-111111111102', 'Woven Labels', 'woven-labels', '4 Variants', 'Daily Use · High Density · Washcare · Patches', 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1200&q=80', 'Premium wristwatch detailing representing woven finish', 2, TRUE),
  ('11111111-1111-1111-1111-111111111103', 'Printed Labels', 'printed-labels', '4 Variants', 'B&W · Multicolor · Cotton · Designer Ribbons', 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80', 'Warehouse shelves stocked with packaged goods', 3, TRUE),
  ('11111111-1111-1111-1111-111111111104', 'Heat Transfer', 'heat-transfer', '4 Variants', 'Paper Base · Plastic Base · High Density · DTF', 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80', 'Graphic print design on apparel', 4, TRUE),
  ('11111111-1111-1111-1111-111111111105', 'Stickers', 'stickers', '1 Variant', 'Die-Cut · Brand Kits', 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=1200&q=80', 'Flat lay of branded stickers and print', 5, TRUE),
  ('11111111-1111-1111-1111-111111111106', 'Printables', 'printables', '1 Variant', 'Cards · Inserts · Wrappers', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80', 'Printed paper collateral on a desk', 6, TRUE),
  ('11111111-1111-1111-1111-111111111107', 'Other', 'other', '1 Variant', 'Custom · Made to Spec', 'https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1200&q=80', 'Packaged products ready for retail', 7, TRUE)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  variants_label = EXCLUDED.variants_label,
  features = EXCLUDED.features,
  image_url = EXCLUDED.image_url,
  image_alt = EXCLUDED.image_alt,
  sort_order = EXCLUDED.sort_order,
  is_published = EXCLUDED.is_published,
  updated_at = NOW();

INSERT INTO products (category_id, title, slug, meta, description, image_url, image_alt, sort_order, is_published)
VALUES
  ('11111111-1111-1111-1111-111111111101', 'Daily Use Hang Tags', 'daily-hang-tags', 'Budget Friendly · Regular Use', 'Crisp, clean tags perfect for everyday garment branding. Budget-friendly without compromising on finish.', 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1200&q=80', 'Production machinery creating hang tags', 1, TRUE),
  ('11111111-1111-1111-1111-111111111101', 'Multi Piece Sets', 'multi-piece-sets', '2pc Set · Premium Pairing', 'Two-piece or more coordinated sets for a layered brand story.', 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=1200&q=80', 'Red and black gift bags arranged together', 2, TRUE),
  ('11111111-1111-1111-1111-111111111101', 'Special Effects Tags', 'special-effects-tags', 'Velvet Touch · Grainy Texture · UV Finish', 'Elevate your product packaging with velvet-soft, grainy, or gloss UV finishes that demand attention.', 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80', 'Organized warehouse with yellow shelving', 3, TRUE),
  ('11111111-1111-1111-1111-111111111101', 'Embossed Hang Tags', 'embossed-tags', 'Raised Detail · Premium Feel', 'Tactile embossed finishes that add depth and a distinctive first impression at retail.', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80', 'Printed and embossed paper tags', 4, TRUE),
  ('11111111-1111-1111-1111-111111111101', 'Foiling Tags', 'foiling-tags', 'Foil Stamp · Luxury Accent', 'Metallic foil accents for labels and hang tags that signal premium quality instantly.', 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=1200&q=80', 'Foiled branding collateral', 5, TRUE),
  ('11111111-1111-1111-1111-111111111101', 'PVC Hang Tags', 'pvc-tags', 'Durable · Weather Ready', 'Strong PVC tags built for long wear and clean branding in demanding retail conditions.', 'https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1200&q=80', 'Retail packaging with durable tags', 6, TRUE),
  ('11111111-1111-1111-1111-111111111102', 'Classic Woven Labels', 'woven-main', 'Damask · Soft Edge', 'Fine-detail woven labels with clean edges for enduring brand identity inside every garment.', 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80', 'Stacked garments with woven care labels', 1, TRUE),
  ('11111111-1111-1111-1111-111111111102', 'High Density Woven', 'high-density-woven', 'High Density · Sharp Detail', 'Dense weave construction for logos and type that stay crisp through repeated washing.', 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1200&q=80', 'Detailed premium accessory finish', 2, TRUE),
  ('11111111-1111-1111-1111-111111111102', 'Washcare Labels', 'washcare-woven', 'Care Icons · Clear Legibility', 'Readable woven care labels that keep instructions clear for the life of the garment.', 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80', 'Retail garments with care labeling', 3, TRUE),
  ('11111111-1111-1111-1111-111111111102', 'Woven Patches', 'woven-patches', 'Badge Style · Statement Detail', 'Statement woven patches for sleeves, densims, and outerwear that need bold branding.', 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80', 'Textiles arranged for finishing work', 4, TRUE),
  ('11111111-1111-1111-1111-111111111103', 'Printed Care Labels', 'printed-care', 'Care Labels · High Clarity', 'Sharp printed care and content labels that stay readable wash after wash.', 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80', 'Retail garments displayed in a store', 1, TRUE),
  ('11111111-1111-1111-1111-111111111103', 'Multicolor Printed Labels', 'multicolor-printed', 'Full Color · Brand Match', 'Color-accurate printed labels for brands that need richer visual identity at the neckline.', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80', 'Printed paper collateral on a desk', 2, TRUE),
  ('11111111-1111-1111-1111-111111111103', 'Cotton Printed Labels', 'cotton-printed', 'Soft Hand · Natural Feel', 'Soft cotton printed labels designed for comfort-focused apparel collections.', 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80', 'Apparel stack with soft label details', 3, TRUE),
  ('11111111-1111-1111-1111-111111111103', 'Designer Ribbons', 'designer-ribbons', 'Ribbon Print · Gift Ready', 'Custom printed ribbons for packaging, hang cards, and elevated unboxing moments.', 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=1200&q=80', 'Gift packaging with ribbon accents', 4, TRUE),
  ('11111111-1111-1111-1111-111111111104', 'Heat Transfer Marks', 'heat-transfer-marks', 'Soft Hand · Durable Bond', 'Seamless heat transfer branding with a soft hand feel for modern apparel lines.', 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80', 'Textiles arranged for finishing work', 1, TRUE),
  ('11111111-1111-1111-1111-111111111104', 'Paper Base Transfer', 'paper-base-transfer', 'Paper Base · Clean Release', 'Reliable paper-based transfers for crisp logos and concise brand marks.', 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80', 'Graphic apparel print detail', 2, TRUE),
  ('11111111-1111-1111-1111-111111111104', 'Plastic Base Transfer', 'plastic-base-transfer', 'Plastic Base · Strong Hold', 'Durable plastic-base transfers suited for activewear and higher-wear garments.', 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1200&q=80', 'Industrial finishing of branded goods', 3, TRUE),
  ('11111111-1111-1111-1111-111111111104', 'DTF Heat Transfer', 'dtf-transfer', 'DTF · Full Color Detail', 'Direct-to-film transfers with rich color and fine detail for expressive graphics.', 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=1200&q=80', 'Color print samples for transfer branding', 4, TRUE),
  ('11111111-1111-1111-1111-111111111105', 'Custom Stickers', 'sticker-pack', 'Die-Cut · Brand Kits', 'Die-cut stickers and seal labels that finish packaging with a polished brand cue.', 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=1200&q=80', 'Flat lay of branded stickers and print', 1, TRUE),
  ('11111111-1111-1111-1111-111111111106', 'Printable Collateral', 'printables', 'Cards · Inserts · Wrappers', 'Hang cards, inserts, and wrappers printed to match your packaging story.', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80', 'Printed paper collateral on a desk', 1, TRUE),
  ('11111111-1111-1111-1111-111111111107', 'Specialty Packaging', 'other-packaging', 'Custom · Made to Spec', 'Bespoke packaging and branding pieces developed around your product and process.', 'https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1200&q=80', 'Packaged products ready for retail', 1, TRUE)
ON CONFLICT (slug) DO UPDATE SET
  category_id = EXCLUDED.category_id,
  title = EXCLUDED.title,
  meta = EXCLUDED.meta,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  image_alt = EXCLUDED.image_alt,
  sort_order = EXCLUDED.sort_order,
  is_published = EXCLUDED.is_published,
  updated_at = NOW();