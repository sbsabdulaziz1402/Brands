import { d as defineEventHandler, r as readMultipartFormData, c as createError, g as getQuery } from '../../nitro/nitro.mjs';
import sharp from 'sharp';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';

const compress = defineEventHandler(async (event) => {
  var _a;
  const form = await readMultipartFormData(event);
  const file = form == null ? void 0 : form.find((f) => f.filename);
  if (!file) {
    throw createError({ statusCode: 400, statusMessage: "No file provided" });
  }
  const buffer = file.data;
  const query = getQuery(event);
  const quality = Number(query.quality) || 60;
  const width = query.width ? Number(query.width) : null;
  const format = ((_a = query.format) == null ? void 0 : _a.toLowerCase()) || "webp";
  const sharpInstance = sharp(buffer);
  if (width) {
    sharpInstance.resize({ width, withoutEnlargement: true });
  }
  let processedBuffer;
  let contentType = "image/webp";
  switch (format) {
    case "jpeg":
    case "jpg":
      processedBuffer = await sharpInstance.jpeg({ quality, mozjpeg: true }).toBuffer();
      contentType = "image/jpeg";
      break;
    case "png":
      processedBuffer = await sharpInstance.png({ quality }).toBuffer();
      contentType = "image/png";
      break;
    case "avif":
      processedBuffer = await sharpInstance.avif({ quality }).toBuffer();
      contentType = "image/avif";
      break;
    default:
      processedBuffer = await sharpInstance.webp({ quality }).toBuffer();
      contentType = "image/webp";
  }
  const base64 = processedBuffer.toString("base64");
  return {
    base64: `data:${contentType};base64,${base64}`
  };
});

export { compress as default };
//# sourceMappingURL=compress.mjs.map
