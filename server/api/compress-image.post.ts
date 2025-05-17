import sharp from 'sharp';

export default defineEventHandler(async (event) => {
  // Получаем файл из формы
  const form = await readMultipartFormData(event);

  const file = form?.find(f => f.filename);
  if (!file) throw createError({ statusCode: 400, statusMessage: 'No file provided' });

  const buffer = file.data as Buffer;

  // Сжатие и конвертация в JPG с качеством 60%
  const compressedBuffer = await sharp(buffer)
    .jpeg({
      quality: 60,      // регулируете качество (чем меньше — тем меньше вес)
      mozjpeg: true,    // лучшее сжатие для JPG
    })
    .toBuffer();

  // Можно легко заменить на WebP:
  // const compressedBuffer = await sharp(buffer).webp({ quality: 60 }).toBuffer();

  return new Response(compressedBuffer, {
    headers: {
      'Content-Type': 'image/jpeg',
      'Content-Disposition': 'attachment; filename=compressed.jpg',
    },
  });
});
