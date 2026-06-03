const allowedMimeTypes = ["image/jpeg", "image/png", "image/webp"];
const allowedExtensions = [".jpg", ".jpeg", ".png", ".webp"];
const maxUploadSize = 4 * 1024 * 1024;

// Upload guard prevents executable files and oversized payloads from entering Storage.
export function validateImageUpload(file: File) {
  const lowerName = file.name.toLowerCase();
  const hasAllowedExtension = allowedExtensions.some((extension) => lowerName.endsWith(extension));

  if (!allowedMimeTypes.includes(file.type) || !hasAllowedExtension) {
    return { ok: false as const, error: "Chi cho phep anh jpg, jpeg, png hoac webp." };
  }

  if (file.size > maxUploadSize) {
    return { ok: false as const, error: "Dung luong anh toi da la 4MB." };
  }

  return { ok: true as const };
}
