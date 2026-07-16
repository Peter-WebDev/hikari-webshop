import { z } from "zod";

export const productSchema = z.object({
  title: z.string().min(3, "Product title must be at least 3 characters"),
  titleSign: z.string().optional().nullable(),
  // Regex to check hex value, 6 chars (#RRGGBB)
  // Refine to check color contrast
  titleSignColor: z
    .string()
    .regex(/^#([0-9A-Fa-f]{6})$/, "Title sign color must be a valid hex color")
    .refine(
      (color) => {
        // Convert hex to RGB
        const hex = color.replace("#", "");
        let r, g, b;

        if (hex.length === 3) {
          // #RGB format
          r = parseInt(hex[0] + hex[0], 16);
          g = parseInt(hex[1] + hex[1], 16);
          b = parseInt(hex[2] + hex[2], 16);
        } else {
          // #RRGGBB format
          r = parseInt(hex.substring(0, 2), 16);
          g = parseInt(hex.substring(2, 4), 16);
          b = parseInt(hex.substring(4, 6), 16);
        }

        // Your background color (example: white #FFFFFF)
        const bgR = 237;
        const bgG = 237;
        const bgB = 233;

        // Calculate perceived brightness using weighted RGB (simplified luminance formula)
        // This uses the perceived brightness formula: (0.299*R + 0.587*G + 0.114*B)
        // Note: This is a simplification of the WCAG contrast formula but works for basic validation
        const colorLuminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        const bgLuminance = (0.299 * bgR + 0.587 * bgG + 0.114 * bgB) / 255;

        const contrast = Math.abs(colorLuminance - bgLuminance);

        // Minimum contrast threshold (e.g., 0.3 for moderate contrast, 0.5-0.6 for more stricter contrast)
        return contrast > 0.2;
      },
      {
        message: "Color doesn't have enough contrast with the background",
      }
    )
    .optional()
    .nullable(),
  titleDescription: z.string().optional().nullable(),
  titleWithDescription: z.string().optional().nullable(),
  description: z
    .string()
    .min(3, "Product description must be at least 3 characters"),
  price: z.coerce.number().positive("Price must be positive"),
  image: z.string().url("Product image must be a valid url"),
  imageDark: z
    .string()
    .url("Dark image must be a valid URL")
    .optional()
    .nullable()
    .or(z.literal("")), // Allow empty string
  slogan: z.string().optional().nullable(),
  note: z.string().optional().nullable(),
  weight: z.string().optional().nullable(),
  brand: z.string().optional().nullable(),
  height: z.string().optional().nullable(),
  diameter: z.string().optional().nullable(),
  articleNumber: z.string().optional(), // Include but make it optional
});
