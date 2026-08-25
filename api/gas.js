// Exemplo em api/gas.js na Vercel
export default async function handler(req, res) {
  const { action } = req.query;
  const gasUrl = `https://script.google.com/macros/s/AKfycbwHn4_GnZrZ0DZoydDfDLV7011ut6GaBhD7nvkOK2ki4bnn4Pf0w-fTfLD521NWQ0Uj/exec?action=${action || ''}`;
  
  const response = await fetch(gasUrl);
  const data = await response.json();
  
  res.status(200).json(data);
}
