# Missing assets — sourcing notes

During the asset audit, **242 of 244** images referenced across the English
pages were found locally in the original mirror. Two were not present anywhere
in the mirror. Here is exactly what happened to each so you can drop in the
true originals later if you have them.

| # | Original path (WordPress) | Used on | Status in this build |
|---|---------------------------|---------|----------------------|
| 1 | `/wp-content/uploads/2020/07/pexels-sagui-andrea-618833.jpg` | Antigua & Barbuda citizenship page (decorative photo) | ✅ **Re-sourced** from Pexels (the filename encodes Pexels photo **ID 618833** by *Sagui Andrea*). Downloaded to `public/images/2020/07/pexels-sagui-andrea-618833.jpg`. If you have the exact original crop, replace this file. |
| 2 | `/wp-content/uploads/2020/09/footer-img.jpg` | About Us page (CTA band background) | ⚠️ **Substituted** with the brand navy gradient (`CtaBand` component renders a gradient when no background image is supplied). To restore the photo, drop the original at `public/images/2020/09/footer-img.jpg` and pass it to the `CtaBand` `image` prop on the About page. |

## How to restore originals
1. Place the file at the exact path shown above (under `public/images/...`).
2. For #2, set the `image="/images/2020/09/footer-img.jpg"` prop on the
   `<CtaBand />` used in `app/about-us/page.tsx`.

Everything else (fonts, logos, flags, country photos, icons, news/blog imagery,
favicons) was taken directly from the original mirror.
