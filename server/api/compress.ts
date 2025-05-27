import sharp from 'sharp';

export default defineEventHandler(async (event) => {
  const form = await readMultipartFormData(event);
  const file = form?.find(f => f.filename);
  if (!file) {
    throw createError({ statusCode: 400, statusMessage: 'No file provided' });
  }

  const buffer = file.data as Buffer;

  const query = getQuery(event);

  const quality = Number(query.quality) || 60;
  const width = query.width ? Number(query.width) : null;
  const format = (query.format as string)?.toLowerCase() || 'webp';

  const sharpInstance = sharp(buffer);

  if (width) {
    sharpInstance.resize({ width, withoutEnlargement: true });
  }

  let processedBuffer: Buffer;
  let contentType = 'image/webp';

  switch (format) {
    case 'jpeg':
    case 'jpg':
      processedBuffer = await sharpInstance.jpeg({ quality, mozjpeg: true }).toBuffer();
      contentType = 'image/jpeg';
      break;
    case 'png':
      processedBuffer = await sharpInstance.png({ quality }).toBuffer();
      contentType = 'image/png';
      break;
    case 'avif':
      processedBuffer = await sharpInstance.avif({ quality }).toBuffer();
      contentType = 'image/avif';
      break;
    default:
      processedBuffer = await sharpInstance.webp({ quality }).toBuffer();
      contentType = 'image/webp';
  }
  const base64 = processedBuffer.toString('base64');

  return {
    base64: `data:${contentType};base64,${base64}`,
  };
  // return new Response(`data:${contentType};base64,${base64}`, {
  //   headers: {
  //     'Content-Type': contentType,
  //     'Content-Disposition': `attachment; filename=compressed.${format}`,
  //   },
  // });
});
