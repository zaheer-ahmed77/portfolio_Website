import fs from 'fs';
import { PDFDocument } from 'pdf-lib';

async function updatePdfTitle(filePath, newTitle) {
  try {
    const pdfBytes = fs.readFileSync(filePath);
    const pdfDoc = await PDFDocument.load(pdfBytes);
    pdfDoc.setTitle(newTitle);
    const pdfBytesModified = await pdfDoc.save();
    fs.writeFileSync(filePath, pdfBytesModified);
    console.log(`Successfully updated title for ${filePath}`);
  } catch (err) {
    console.error(`Failed to update ${filePath}:`, err.message);
  }
}

async function run() {
  await updatePdfTitle('public/pdf/resume.pdf', 'Zaheer Ahmed Resume');
  await updatePdfTitle('public/img/Zaheer_Ahmed_Resume.pdf', 'Zaheer Ahmed Resume');
}

run();
