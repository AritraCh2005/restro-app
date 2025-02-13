import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import uniqid from 'uniqid';

export async function POST(req) {
  const data = await req.formData();
  if (data.get('file')) {
    // upload the file
    const file = data.get('file');

    const s3Client = new S3Client({
      region: 'eu-north-1', // Ensure the region is set to 'eu-north-1'
      endpoint: 'https://s3.eu-north-1.amazonaws.com', // Ensure the endpoint matches the region
      credentials: {
        accessKeyId: process.env.MY_AWS_ACCESS_KEY,
        secretAccessKey: process.env.MY_AWS_SECRET_KEY,
      },
    });

    const ext = file.name.split('.').slice(-1)[0];
    const newFileName = uniqid() + '.' + ext;

    const chunks = [];
    for await (const chunk of file.stream()) {
      chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);

    const bucket = 'aritra-food-ordering'; // Your bucket name

    await s3Client.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: newFileName,
        ACL: 'public-read',
        ContentType: file.type,
        Body: buffer,
      })
    );

    // Ensure the correct endpoint is used in the link
    const link = `https://aritra-food-ordering.s3.eu-north-1.amazonaws.com/${newFileName}`;
    return Response.json(link);
  }
  return Response.json(true);
}
